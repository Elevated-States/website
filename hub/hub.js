/* ==========================================================================
   Shane Mauss event hub: shared section library.
   A city page (e.g. /springfield26/) sets window.HUB and includes the static
   "one-list" Netlify form; this file builds the hero text, the sections in the
   order the page asks for, the upcoming shows and the footer.
   Update content HERE and every city page picks it up.

   URL options (handy for tablets at a table):
     ?show=es,state,ball      only these sections, in this order
     ?kiosk=1                 tablet mode: links show "scan to open on your phone",
                              a QR badge stays on screen, sign-up forms reset
                              for the next person, and the page resets itself
                              after 90 seconds without a touch
   ========================================================================== */
(function () {
  "use strict";
  var C = window.HUB || {};
  var SLUG = C.slug || "hub";
  var Q = new URLSearchParams(location.search);
  var KIOSK = Q.has("kiosk") && Q.get("kiosk") !== "0";
  document.documentElement.className += " js" + (KIOSK ? " kiosk" : "");

  /* ---------------- content that changes over time ---------------- */
  var LINKS = {
    tripsArtists: "https://www.shanemauss.com/trips",
    firstDose: "https://www.youtube.com/watch?v=dHh3OSbTcWM",
    secondDose: "https://www.youtube.com/watch?v=Ix-0-BDLBHE",
    psyTubi: "https://tubitv.com/movies/476742/psychonautics-a-comic-s-exploration-of-psychedelics",
    psyPrime: "https://www.amazon.com/Psychonautics-Exploration-Psychedelics-Shane-Mauss/dp/B07P763S4X",
    psyApple: "https://tv.apple.com/us/movie/psychonautics-a-comics-exploration-of-psychedelics/umc.cmc.70ho4jy8eu7keryq72e2139cf",
    psyPlaylist: "https://www.youtube.com/playlist?list=PLF_vuqm41lQWjty6CfqTXXNu4kFk02a1i",
    mindUnderMatter: "https://www.shanemauss.com/mind-under-matter",
    hwaSpotify: "https://open.spotify.com/show/6ds0A38r6I6TNHl11EVdco",
    hwaApple: "https://podcasts.apple.com/us/podcast/here-we-are/id944770208",
    hwaYouTube: "https://www.youtube.com/@ShaneMauss314",
    tour: "https://www.shanemauss.com/tour"
  };
  /* Upcoming shows. Past dates (and the page's own date) hide themselves. */
  var SHOWS = [
    { d: "2026-10-03", city: "Springfield, MO", what: "Psychedelic Freedom Conference", note: "Emcee + Trips: The Third Dose", url: "https://psychedelicsoto.org" },
    { d: "2026-10-11", city: "Eureka Springs, AR", what: "Hillberry: The Harvest Moon Festival", note: "Sunday day pass · code TRIPS", url: "https://hillberryfestival.com" },
    { d: "2026-10-15", city: "New York, NY", what: "Horizons: Perspectives on Psychedelics", note: "Oct 15–17", url: "https://horizonsconference.org/" },
    { d: "2026-10-23", city: "Bentonville, AR", what: "Trip Tales · Big Diamond Comedy Festival", note: "8 PM · ages 14+", url: "https://www.eventbrite.com/e/shane-mauss-presents-trip-tales-tickets-1992979640755" },
    { d: "2026-10-26", city: "Eureka Springs, AR", what: "Zombie Apocalypse Medicine Meeting", note: "Oct 26–28", url: "https://www.zombiemed.org/" },
    { d: "2026-11-05", city: "Oklahoma City, OK", what: "Round Earther Show", note: "7 PM · tickets soon", url: "" }
  ];
  var SOCIAL = [
    ["Instagram", "https://www.instagram.com/shane_mauss"],
    ["YouTube", "https://www.youtube.com/@ShaneMauss314"],
    ["Facebook", "https://www.facebook.com/shanecomedyfan"],
    ["Spotify", "https://open.spotify.com/artist/54ee3dUdSbGNlVN1H9WeCE"],
    ["shanemauss.com", "https://www.shanemauss.com"]
  ];

  /* ---------------- helpers ---------------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function ext(url, label, cls) { return '<a class="btn ' + (cls || "ghost") + '" href="' + esc(url) + '" target="_blank" rel="noopener">' + label + "</a>"; }
  /* links to our own pages carry ?src=<page> so we can tell where visits came from */
  function own(path) {
    var hash = "", i = path.indexOf("#");
    if (i > -1) { hash = path.slice(i); path = path.slice(0, i); }
    return path + (path.indexOf("?") > -1 ? "&" : "?") + "src=" + encodeURIComponent(SLUG) + hash;
  }
  function ownA(path, label, cls) { return '<a class="btn ' + (cls || "ghost") + '" href="' + esc(own(path)) + '">' + label + "</a>"; }
  function yt(id, img, title, sub) {
    return '<button type="button" class="yt" data-yt="' + id + '" aria-label="Play ' + esc(title + (sub ? " " + sub : "")) + '">' +
      '<img src="' + img + '" alt="" loading="lazy" decoding="async"><span class="play" aria-hidden="true"></span>' +
      '<span class="cap"><b>' + esc(title) + "</b>" + (sub ? " · " + esc(sub) : "") + "</span></button>";
  }
  function section(id, cls, banner, body) {
    return '<section class="band ' + (cls || "") + '" id="' + id + '">' + banner + '<div class="body">' + body + "</div></section>";
  }
  function sunMark() {
    return '<svg viewBox="0 0 512 512" aria-hidden="true"><defs><clipPath id="hzc"><rect x="0" y="0" width="512" height="333"/></clipPath></defs>' +
      '<circle cx="256" cy="333" r="112" fill="#D9B26A" clip-path="url(#hzc)"/><rect x="90" y="329" width="330" height="9" rx="4.5" fill="#FAF4E9"/>' +
      '<rect x="102" y="214" width="46" height="14" rx="3" fill="#B8893C" transform="rotate(29 125 221)"/><rect x="80" y="299" width="50" height="14" rx="3" fill="#B8893C"/>' +
      '<rect x="102" y="378" width="46" height="14" rx="3" fill="#B8893C" transform="rotate(-29 125 385)"/></svg>';
  }
  function rng(seed) { var a = seed; return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function stars(n, seed, op) {
    var r = rng(seed), out = "";
    for (var i = 0; i < n; i++) out += '<i style="left:' + (r() * 100).toFixed(1) + "%;top:" + (r() * 100).toFixed(1) + "%;opacity:" + ((op || 0.2) + r() * 0.5).toFixed(2) + '"></i>';
    return out;
  }
  var NAV = { trips: "TRIPS", psychonautics: "Psychonautics", es: "Elevated States", ball: "The Ball", hwa: "Here We Are" };

  /* ---------------- the section library ---------------- */
  var LIB = {
    trips: function () {
      var note = C.notes && C.notes.trips ? esc(C.notes.trips) + " " : "";
      return section("trips", "",
        '<div class="banner"><img src="/hub/img/trips.jpg" width="1500" height="789" alt="Shane Mauss TRIPS: two immersive doses of psychedelic hilarity"></div>',
        '<div class="eyebrow">Two-part comedy special · free on YouTube</div>' +
        "<h2>TRIPS</h2>" +
        '<p class="lede">' + note + "My two-part psychedelic comedy special, filmed inside Meow Wolf Denver with visuals from 20+ psychedelic artists and music by Dirtwire and Beats Antique.</p>" +
        '<div class="vids two">' + yt("HfDtOskrptw", "/hub/img/trips1.jpg", "First Dose", "trailer") + yt("ti_ayc4gv34", "/hub/img/trips2.jpg", "Second Dose", "trailer") + "</div>" +
        '<div class="btns">' + ext(LINKS.firstDose, "▶ Watch the First Dose", "primary") + ext(LINKS.secondDose, "▶ Watch the Second Dose", "primary") +
        ext(LINKS.tripsArtists, "Meet the 20+ artists →") + "</div>");
    },

    psychonautics: function () {
      var more = [
        ["H1h9OjS8NTw", "Tales from the Trip", "DMT took me to the infinite void"],
        ["nHLpB38LNg4", "Tales from the Trip", "The same purple woman, every DMT trip"],
        ["b57q4AH3hLA", "This Is Not Happening", "Set and setting"]
      ];
      var cards = more.map(function (m) {
        return '<a href="https://www.youtube.com/watch?v=' + m[0] + '" target="_blank" rel="noopener"><div class="th" style="background-image:url(https://i.ytimg.com/vi/' + m[0] + '/mqdefault.jpg)"><span class="pl"></span></div>' +
          '<div class="m"><small>' + esc(m[1]) + "</small><b>" + esc(m[2]) + "</b></div></a>";
      }).join("") +
        '<a href="' + LINKS.mindUnderMatter + '" target="_blank" rel="noopener"><div class="th txt">Mind Under Matter</div>' +
        '<div class="m"><small>Podcast</small><b>Big ideas and absurdity with artist Ramin Nazer</b></div></a>';
      return section("psychonautics", "",
        '<div class="banner">' +
          '<button type="button" class="yt" data-yt="K6BAaylHbI0" aria-label="Play the Psychonautics trailer"><img src="/hub/img/psychonautics-poster.jpg" width="1600" height="900" alt="Psychonautics: A Comic\'s Exploration of Psychedelics" loading="lazy" decoding="async">' +
          '<span class="play" aria-hidden="true"></span><span class="over pill"><span class="s">▶ Watch the trailer</span></span></button>' +
        "</div>",
        '<div class="eyebrow">Feature documentary · free on Tubi</div>' +
        '<h2>Psychonautics <span class="h2sub">A Comic\'s Exploration of Psychedelics</span></h2>' +
        '<p class="lede">I set out to show that psychedelics aren\'t as scary as people think, trying a dizzying array of them and sitting down with researchers like James Fadiman, Rick Doblin and Dennis McKenna. Part travelogue, part comedy, part science deep-dive.</p>' +
        '<div class="btns">' + ext(LINKS.psyTubi, "Watch free on Tubi", "primary") + ext(LINKS.psyPrime, "Prime Video") + ext(LINKS.psyApple, "Apple TV") + "</div>" +
        '<h3 class="mini">More psychedelic stories</h3><div class="more">' + cards + "</div>" +
        '<div class="btns">' + ext(LINKS.psyPlaylist, "All my psychedelic videos →") + "</div>");
    },

    es: function () {
      return section("es", "",
        '<div class="banner esb"><div class="halo"></div><div class="stars">' + stars(46, 11) + '</div><div class="line"></div>' + sunMark() +
        '<div class="wm"><div class="k">Policy Atlas · Take Action</div><div class="t">The <em>Elevated</em> States Project</div><div class="i">Psychedelic science, lifted from hype to wonder.</div></div></div>',
        '<div class="eyebrow">The Elevated States Project</div>' +
        "<h2>Where every state actually stands</h2>" +
        '<p class="lede">A free Policy Atlas of psychedelics, cannabis and harm reduction across all 50 states and D.C., ranked, sourced and dated. Find local groups to join, and send your legislator a letter that\'s already written.</p>' +
        '<div class="stats"><div><b>50 + D.C.</b><span>states ranked</span></div><div><b>460+</b><span>local groups</span></div><div><b>Every</b><span>claim sourced and dated</span></div></div>' +
        '<div class="btns">' + ownA("/atlas.html", "Explore the Policy Atlas →", "primary") + ownA("/map.html", "Open the map") + ownA("/the-bigger-picture.html", "Legal ≠ safe") + "</div>");
    },

    state: function () {
      var n = C.state;
      if (!n) return "";
      return section("state", "",
        '<div class="banner stb"><svg id="stMap" viewBox="0 0 960 600" aria-hidden="true"></svg>' +
        '<div class="rk"><div class="n" id="stRank">#</div><div class="of">of 50</div><div class="s">' + esc(n) + ", on openness to evidence-based drug policy</div></div></div>",
        '<div class="eyebrow">Elevated States · Policy Atlas</div>' +
        "<h2>Where does <em>" + esc(n) + "</em> stand?</h2>" +
        '<div class="chips score" id="stChips"></div>' +
        '<h3 class="mini">Small steps ' + esc(n) + " could take next</h3>" +
        '<ol class="steps" id="stSteps"></ol>' +
        '<div class="btns">' + ownA("/act.html?state=" + encodeURIComponent(n), "Pick a step. The letter's already written →", "primary") + "</div>");
    },

    ball: function () {
      return section("ball", "",
        '<div class="banner"><img src="/hub/img/ball.jpg" width="1600" height="800" alt="A Tripping Ball. Saturday, April 17, 2027. Asheville, North Carolina." loading="lazy" decoding="async"></div>',
        '<div class="eyebrow">The Elevated States Project presents</div>' +
        "<h2>A Tripping Ball</h2>" +
        '<div class="when">Saturday, April 17, 2027 · Asheville, North Carolina</div>' +
        '<p class="lede">An enchanted evening where science meets spectacle: comedy, a candlelit dinner, live music and dancing, and a psychedelic chamber orchestra, <b>The Default Mode Orchestra</b>, playing everything from Beethoven to Tame Impala.</p>' +
        '<div class="feature"><div class="k">Headline conversation</div><div class="t">Leonard Pickard</div>' +
        "<p>The chemist said to have made 90% of the world's LSD. He served 20 years of two life sentences before his release in 2020.</p></div>" +
        '<p class="host">Hosted by Shane Mauss</p>' +
        '<div class="founding"><span class="badge">Founding Circle</span><div class="t">Be one of the first fifty.</div>' +
        "<p>The Founding Circle gets in below every future price and hears the rest of the lineup first. Tickets aren't on sale yet.</p>" +
        ownA("/tripping-ball-asheville.html#founding", "Join the guest list →", "primary") + "</div>");
    },

    hwa: function () {
      /* relaunch: Thursday, October 8, 2026. Wording switches by itself on and after the day. */
      var today = new Date(); today.setHours(0, 0, 0, 0);
      var days = Math.round((new Date(2026, 9, 8) - today) / 86400000);
      var badge = days > 1 ? "Relaunching Thursday, Oct 8" : days === 1 ? "Relaunching tomorrow" : days === 0 ? "Relaunched today" : "New episodes";
      var line = days > 0 ? "The show relaunches Thursday, October 8, with new episodes. Follow it now and they come straight to you."
        : days === 0 ? "The show relaunched today with new episodes. Follow it and they come straight to you."
        : "New episodes are out now.";
      return section("hwa", "",
        '<div class="banner"><img src="/hub/img/hwa.jpg" width="1200" height="600" alt="Here We Are podcast" loading="lazy" decoding="async"><span class="ribbon">' + badge + "</span></div>",
        '<div class="eyebrow">Science podcast · 300+ episodes</div>' +
        "<h2>Here We Are</h2>" +
        '<p class="lede">I talk with scientists about the meanings of life. <b>' + line + "</b></p>" +
        '<div class="btns">' + ext(LINKS.hwaSpotify, "Follow on Spotify", "primary") + ext(LINKS.hwaApple, "Apple Podcasts") + ext(LINKS.hwaYouTube, "YouTube") + "</div>");
    }
  };

  /* ---------------- build ---------------- */
  var ORDER = [];
  function $(id) { return document.getElementById(id); }
  function renderSections() {
    var main = $("sections");
    main.innerHTML = ORDER.map(function (k) { try { return LIB[k](); } catch (e) { return ""; } }).join("");
    if (ORDER.indexOf("state") > -1) fillState();
  }
  function build() {
    if (C.kicker && $("hKick")) $("hKick").textContent = C.kicker;
    if (C.hello && $("hHello")) $("hHello").innerHTML = C.hello;
    if (C.intro && $("hIntro")) $("hIntro").textContent = C.intro;

    var want = Q.get("show") ? Q.get("show").split(",") : (C.sections || ["trips", "es", "state", "ball", "psychonautics", "hwa"]);
    ORDER = want.map(function (k) { return k.trim(); }).filter(function (k, i, a) { return LIB[k] && a.indexOf(k) === i; });
    renderSections();

    /* jump nav mirrors the section order */
    var chips = $("jumpChips");
    if (chips) chips.innerHTML = ORDER.map(function (k) {
      return '<a href="#' + k + '">' + esc(k === "state" ? (C.state || "Your state") : NAV[k]) + "</a>";
    }).join("") + '<a class="join" href="#list">Join the list</a>';

    $("foot").innerHTML = footer();
    sky();
    wireVideos();
    wireForms();
    wireNav();
    if (KIOSK) kiosk();
    window.__ready = true;
  }

  function footer() {
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var after = C.date ? new Date(C.date + "T23:59:59") : today;
    var MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var list = SHOWS.filter(function (s) { var d = new Date(s.d + "T12:00:00"); return d >= today && d > after; }).slice(0, 6);
    var rows = list.map(function (s) {
      var d = new Date(s.d + "T12:00:00");
      var inner = '<div class="d"><small>' + MON[d.getMonth()] + "</small><b>" + d.getDate() + "</b></div>" +
        '<div class="w"><b>' + esc(s.city) + "</b><span>" + esc(s.what) + (s.note ? " · " + esc(s.note) : "") + "</span></div>" +
        '<div class="go">' + (s.url ? "Info →" : "") + "</div>";
      return "<li>" + (s.url ? '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + inner + "</a>" : "<div>" + inner + "</div>") + "</li>";
    }).join("");
    var shows = '<div class="shows"><div class="eyebrow">Come see a show</div><h2>Upcoming dates</h2>' +
      (rows ? "<ul>" + rows + "</ul>" : '<p class="lede">New dates are on the way. The list hears first.</p>') +
      '<div class="btns">' + ext(LINKS.tour, "All tour dates →") + '<a class="btn primary" href="#list">Get dates near you</a></div></div>';
    var soc = '<div class="social">' + SOCIAL.map(function (s) { return '<a href="' + s[1] + '" target="_blank" rel="noopener">' + s[0] + "</a>"; }).join("") + "</div>";
    return shows + soc + '<p class="made">Shane Mauss · <a href="https://www.shanemauss.com" target="_blank" rel="noopener">shanemauss.com</a> · <a href="/">elevatedstatesproject.com</a><br>' +
      'Questions or bookings: <a href="mailto:shanetmauss@gmail.com">shanetmauss@gmail.com</a></p>';
  }

  function sky() { var s = document.querySelector(".sky"); if (s) s.innerHTML = stars(60, 3, 0.12); }

  /* ---------------- state block: same data and math as the Take Action page ---------------- */
  function loadScript(src) {
    return new Promise(function (ok, bad) { var s = document.createElement("script"); s.src = src; s.onload = ok; s.onerror = bad; document.head.appendChild(s); });
  }
  var mapP = null, dataP = null;
  function fillState() {
    var n = C.state;
    if (!mapP) mapP = loadScript("/hub/us-map.js");
    mapP.then(drawMap).catch(function () {});
    if (!dataP) dataP = loadScript("/atlas-data.js").then(function () { return loadScript("/atlas-scores.js"); }).then(function () { return loadScript("/atlas-steps.js"); });
    dataP.then(function () {
      /* rank: 50 states, D.C. unranked, ties share a rank (matches act.html) */
      var DC = "District of Columbia";
      var names = Object.keys(STATES).filter(function (k) { return k !== DC; });
      var ord = names.slice().sort(function (a, b) { return STATES[b].o - STATES[a].o; });
      var rank = {}, prev = null, pr = 0;
      ord.forEach(function (k, i) { var v = STATES[k].o; if (v !== prev) { pr = i + 1; prev = v; } rank[k] = pr; });
      if (rank[n] && $("stRank")) $("stRank").textContent = "#" + rank[n];
      if (typeof esScorecard === "function" && $("stChips")) {
        $("stChips").innerHTML = esScorecard(n).map(function (c) {
          return '<div class="c" style="--cc:' + c.color + '"><b>' + (c.rank == null ? "NR" : "#" + c.rank) + "</b><span>" + esc(c.label) + "</span></div>";
        }).join("");
      }
      if (typeof stateSteps === "function" && $("stSteps")) {
        $("stSteps").innerHTML = stateSteps(n).slice(0, 3).map(function (st) {
          return '<li><span class="t">' + esc(st.title) + '</span><span class="w">' + esc(st.why) + "</span></li>";
        }).join("");
      }
    }).catch(function () {
      var el = $("stSteps");
      if (el) el.innerHTML = '<li><span class="t">See ' + esc(n) + "'s scorecard and small steps on the Take Action page.</span></li>";
    });
  }
  function drawMap() {
    var svg = $("stMap"); if (!svg || !window.US_MAP) return;
    var n = C.state, P = US_MAP.paths, out = "";
    out += '<defs><filter id="stGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9" result="b"/>' +
      '<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>';
    for (var k in P) if (k !== n) out += '<path d="' + P[k] + '" fill="rgba(255,255,255,.07)" stroke="rgba(217,178,106,.32)" stroke-width="1.1"/>';
    if (P[n]) out += '<path d="' + P[n] + '" fill="#D9B26A" stroke="#FFF3D6" stroke-width="2" filter="url(#stGlow)"/>';
    svg.innerHTML = out;
  }

  /* ---------------- lite YouTube: thumbnail until tapped ---------------- */
  function wireVideos() {
    document.addEventListener("click", function (e) {
      var b = e.target.closest ? e.target.closest("[data-yt]") : null;
      if (!b) return;
      e.preventDefault();
      var f = document.createElement("iframe");
      f.className = "ytframe";
      f.src = "https://www.youtube-nocookie.com/embed/" + b.getAttribute("data-yt") + "?autoplay=1&rel=0&playsinline=1&modestbranding=1";
      f.title = b.getAttribute("aria-label") || "YouTube video";
      f.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen");
      f.setAttribute("allowfullscreen", "");
      f.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      b.parentNode.replaceChild(f, b);
    });
  }

  /* ---------------- one email list ---------------- */
  function post(data) {
    return fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data).toString() })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r; });
  }
  function baseFields() {
    var f = $("oneList"), d = {};
    ["form-name", "source", "event"].forEach(function (k) { var el = f && f.querySelector('[name="' + k + '"]'); if (el) d[k] = el.value; });
    d["form-name"] = d["form-name"] || "one-list";
    if (KIOSK) d.source = (d.source || SLUG) + " (tablet)";
    return d;
  }
  var resetForms = function () {};
  function wireForms() {
    var all = [].map.call(document.querySelectorAll("#oneList [data-topic]"), function (c) { return c.getAttribute("data-topic"); });
    var mini = $("miniList"), f = $("oneList"), ok = $("oneListOk");
    resetForms = function () {
      if (mini) { mini.reset(); mini.hidden = false; var b1 = mini.querySelector("button"); b1.disabled = false; b1.textContent = "Join my list"; $("miniFine").hidden = false; $("miniDone").hidden = true; }
      if (f) { f.reset(); f.hidden = false; var b2 = f.querySelector('button[type="submit"]'); b2.disabled = false; b2.textContent = "Sign me up"; ok.hidden = true; }
    };
    /* hero: email only, every topic */
    if (mini) mini.addEventListener("submit", function (e) {
      e.preventDefault();
      var em = $("miniEmail");
      if (!em.value || !em.checkValidity()) { em.focus(); if (em.reportValidity) em.reportValidity(); return; }
      var btn = mini.querySelector("button"), old = btn.textContent; btn.textContent = "Adding…"; btn.disabled = true;
      var d = baseFields(); d.email = em.value.trim(); d.interests = all.join(", "); d.source += " · top";
      post(d).then(function () {
        mini.hidden = true; $("miniFine").hidden = true; $("miniDone").hidden = false;
        if (KIOSK) setTimeout(resetForms, 6000);
        else { var big = document.querySelector('#oneList [name="email"]'); if (big && !big.value) big.value = d.email; }
      }).catch(function () { btn.textContent = old; btn.disabled = false; alert("That didn't go through. Try the form at the bottom of the page, or email shanetmauss@gmail.com."); });
    });
    /* full form */
    if (f) f.addEventListener("submit", function (e) {
      e.preventDefault();
      var picked = [].filter.call(f.querySelectorAll("[data-topic]"), function (c) { return c.checked; }).map(function (c) { return c.getAttribute("data-topic"); });
      $("interestsField").value = picked.join(", ") || "None picked";
      var em = f.querySelector('[name="email"]');
      if (!em.value || !em.checkValidity()) { em.focus(); if (em.reportValidity) em.reportValidity(); return; }
      var btn = f.querySelector('button[type="submit"]'), old = btn.textContent; btn.textContent = "Signing you up…"; btn.disabled = true;
      var d = {}; new FormData(f).forEach(function (v, k) { d[k] = v; });
      if (KIOSK) d.source = baseFields().source;
      post(d).then(function () { f.hidden = true; ok.hidden = false; if (KIOSK) setTimeout(resetForms, 6000); })
        .catch(function () { btn.textContent = old; btn.disabled = false; alert("That didn't go through. Please try again, or email shanetmauss@gmail.com and I'll add you."); });
    });
    var sh = $("shareBtn");
    if (sh) sh.addEventListener("click", function () {
      var url = location.origin + location.pathname;
      if (navigator.share) navigator.share({ title: document.title, url: url }).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { sh.textContent = "Link copied"; });
    });
    if (/[?&]joined=1/.test(location.search) && f && ok) { f.hidden = true; ok.hidden = false; }
  }

  /* ---------------- highlight the current section in the jump nav ---------------- */
  function wireNav() {
    if (!("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        var box = $("jumpChips"); if (!box) return;
        [].forEach.call(box.querySelectorAll("a"), function (a) {
          var on = a.getAttribute("href") === "#" + en.target.id; a.classList.toggle("on", on);
          if (on) { var x = a.offsetLeft - box.offsetLeft - (box.clientWidth - a.offsetWidth) / 2; if (box.scrollTo) box.scrollTo({ left: Math.max(0, x), behavior: "smooth" }); else box.scrollLeft = Math.max(0, x); }
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    function watch() { [].forEach.call(document.querySelectorAll("#sections > section, #list"), function (s) { io.observe(s); }); }
    watch();
    rewatch = function () { io.disconnect(); watch(); };
  }
  var rewatch = function () {};

  /* ---------------- tablet (kiosk) mode ---------------- */
  function kiosk() {
    /* QR badge: take this page home */
    var badge = document.createElement("div");
    badge.className = "qrbadge";
    badge.innerHTML = '<img src="/' + SLUG + '/qr.svg" alt="QR code for this page" width="132" height="132"><div><b>Take this with you</b><span>Scan with your phone camera</span></div>';
    document.body.appendChild(badge);
    var toast = document.createElement("div"); toast.className = "toast"; toast.hidden = true; document.body.appendChild(toast);
    var tt = null;
    function say(msg) { toast.textContent = msg; toast.hidden = false; badge.classList.remove("pulse"); void badge.offsetWidth; badge.classList.add("pulse"); clearTimeout(tt); tt = setTimeout(function () { toast.hidden = true; }, 3800); }
    /* links don't leave the tablet: point people at the QR instead */
    document.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a[href]") : null;
      if (!a) return;
      var href = a.getAttribute("href");
      if (href.charAt(0) === "#") return;                       /* in-page jumps are fine */
      e.preventDefault();
      say("Scan the code to open this on your phone ↘");
    }, true);
    /* reset after 90 seconds without a touch: stop videos, clear forms, back to the top */
    var idle = null;
    function poke() { clearTimeout(idle); idle = setTimeout(reset, 90000); }
    function reset() {
      if (document.querySelector(".ytframe") || window.scrollY > 40) { renderSections(); rewatch(); }
      resetForms(); toast.hidden = true;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    ["pointerdown", "keydown", "touchstart", "wheel"].forEach(function (ev) { document.addEventListener(ev, poke, { passive: true }); });
    poke();
    /* keep the screen awake where the browser allows it */
    function wake() { if (navigator.wakeLock && document.visibilityState === "visible") navigator.wakeLock.request("screen").catch(function () {}); }
    wake(); document.addEventListener("visibilitychange", wake); document.addEventListener("pointerdown", wake, { once: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build); else build();
})();
