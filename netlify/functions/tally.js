// Live citizen-action tally.
// Counts submissions to the Netlify form "state-action" and returns per-state totals.
// Requires two environment variables in Netlify (Site settings > Environment variables):
//   NETLIFY_API_TOKEN  — a personal access token (User settings > Applications > New access token)
//   SITE_ID            — the site's API ID (Site settings > General > Site information)
// Until those exist the function returns an empty tally and act.html falls back to action-tally.json.

let cache = { at: 0, body: null };

export default async (req) => {
  const token = process.env.NETLIFY_API_TOKEN;
  const site  = process.env.SITE_ID || process.env.SITE_ID_FALLBACK;
  const json  = (o, s = 200) => new Response(JSON.stringify(o), {
    status: s,
    headers: { "content-type": "application/json", "cache-control": "public, max-age=120" }
  });

  if (!token || !site) return json({ counts: {}, configured: false });

  // 2-minute in-memory cache so we don't hammer the API
  if (cache.body && Date.now() - cache.at < 120000) return json(cache.body);

  try {
    const h = { Authorization: `Bearer ${token}` };
    const forms = await (await fetch(`https://api.netlify.com/api/v1/sites/${site}/forms`, { headers: h })).json();
    const form = (forms || []).find((f) => f.name === "state-action");
    if (!form) return json({ counts: {}, configured: true, form: false });

    const counts = {};
    let total = 0;
    for (let page = 1; page <= 20; page++) {
      const subs = await (await fetch(
        `https://api.netlify.com/api/v1/forms/${form.id}/submissions?per_page=100&page=${page}`,
        { headers: h }
      )).json();
      if (!Array.isArray(subs) || subs.length === 0) break;
      for (const s of subs) {
        const st = (s.data && s.data.state) || "";
        if (st) { counts[st] = (counts[st] || 0) + 1; total++; }
      }
      if (subs.length < 100) break;
    }
    const body = { counts, total, configured: true, updated: new Date().toISOString() };
    cache = { at: Date.now(), body };
    return json(body);
  } catch (e) {
    return json({ counts: {}, error: "lookup failed" });
  }
};

export const config = { path: "/api/tally" };
