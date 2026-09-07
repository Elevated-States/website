// Elevated States Project — offline shell.
// Strategy: network-first for HTML (so policy data is never stale),
// stale-while-revalidate for the data files, cache-first for fonts.
const V = "es-v1";
const SHELL = ["act.html","atlas.html","the-bigger-picture.html","index.html",
               "atlas-data.js","atlas-scores.js","atlas-orgs.js","atlas-harm.js","manifest.json"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll(SHELL).catch(() => {})).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) =>
    Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET") return;                       // never cache form posts
  const url = new URL(r.url);
  if (url.pathname.includes("/api/") || url.pathname.includes("/.netlify/")) return;

  if (r.mode === "navigate" || url.pathname.endsWith(".html")) {
    e.respondWith(
      fetch(r).then((res) => { const cp = res.clone(); caches.open(V).then((c) => c.put(r, cp)); return res; })
              .catch(() => caches.match(r).then((m) => m || caches.match("act.html")))
    );
    return;
  }
  e.respondWith(
    caches.match(r).then((cached) => {
      const net = fetch(r).then((res) => { const cp = res.clone(); caches.open(V).then((c) => c.put(r, cp)); return res; })
                          .catch(() => cached);
      return cached || net;
    })
  );
});
