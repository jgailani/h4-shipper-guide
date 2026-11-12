/* =====================================================================
   app.js : builds the header/footer and powers every interactive feature.
   Most teammates should NOT need to edit this file. Edit content.js
   (the words) and config.js (settings) instead.
   ===================================================================== */
(function () {
  "use strict";
  var C = window.CONTENT, S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- small helpers ---------- */
  // {{text}} becomes a highlighted placeholder
  function ph(t) { return String(t).replace(/\{\{(.+?)\}\}/g, '<span class="ph" title="Placeholder: waiting for confirmation">$1</span>'); }
  function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  var PATHS = {
    plane: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
    package: "M16.5 9.4 7.5 4.2 M3.3 7 12 12l8.7-5 M12 22V12 M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z",
    "file-text": "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    "check-circle": "M22 11.1V12a10 10 0 1 1-5.9-9.1 M22 4 12 14l-3-3",
    clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 6v6l4 2",
    "map-pin": "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M23 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "alert-triangle": "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z M12 9v4 M12 17h.01",
    search: "M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16z M21 21l-4.3-4.3",
    phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
    thermometer: "M14 14.8V3.5a2.5 2.5 0 0 0-5 0v11.3a4.5 4.5 0 1 0 5 0z",
    snowflake: "M2 12h20 M12 2v20 M20 16l-4-4 4-4 M4 8l4 4-4 4 M16 4l-4 4-4-4 M8 20l4-4 4 4",
    "arrow-right": "M5 12h14 M12 5l7 7-7 7",
    "arrow-left": "M19 12H5 M12 19l-7-7 7-7",
    "chevron-down": "M6 9l6 6 6-6",
    download: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
    printer: "M6 9V2h12v7 M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2 M6 14h12v8H6z",
    menu: "M3 12h18 M3 6h18 M3 18h18",
    x: "M18 6 6 18 M6 6l12 12",
    check: "M20 6 9 17l-5-5",
    warehouse: "M22 8.4V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.4a2 2 0 0 1 1.3-1.9l8-3.2a2 2 0 0 1 1.5 0l8 3.2A2 2 0 0 1 22 8.4z M6 18h12 M6 14h12 M6 10h12",
    flag: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7",
    calendar: "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M16 2v4 M8 2v4 M3 10h18",
    "check-square": "M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    "help-circle": "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3 M12 17h.01",
    send: "M22 2 11 13 M22 2l-7 20-4-9-9-4 20-7z",
    copy: "M9 9h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2z M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1",
    rotate: "M1 4v6h6 M3.5 15a9 9 0 1 0 2.1-9.4L1 10"
  };
  function icon(n, cls) {
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' + (PATHS[n] || PATHS["help-circle"]) + '"/></svg>';
  }

  /* ---------- schematic route graphic ---------- */
  function routeSVG(light) {
    var r = C.routes;
    return '<svg class="route-svg' + (light ? " light" : "") + '" viewBox="0 0 520 310" role="img" aria-label="Route from ' + r.origins.join(" and ") + " through " + r.hub + " to " + r.destinations.join(", ") + '">' +
      '<defs><linearGradient id="rg' + (light ? "l" : "d") + '" x1="0" x2="1"><stop offset="0" stop-color="#ffc726"/><stop offset="1" stop-color="' + (light ? "#2f6bdb" : "#8fb8ff") + '"/></linearGradient></defs>' +
      '<path id="route' + (light ? "l" : "d") + '" d="M70 230 Q170 70 285 125 T465 85" fill="none" stroke="url(#rg' + (light ? "l" : "d") + ')" stroke-width="3.5" stroke-dasharray="2 10" stroke-linecap="round"/>' +
      '<circle cx="70" cy="230" r="10" fill="#ffc726"/><text x="70" y="262" text-anchor="middle">' + r.origins.join(" \u00B7 ") + '</text><text class="sub" x="70" y="280" text-anchor="middle">Origins</text>' +
      '<circle cx="285" cy="125" r="14" fill="' + (light ? "#fff" : "#00267f") + '" stroke="#ffc726" stroke-width="6"/><text x="285" y="168" text-anchor="middle">' + r.hub + '</text><text class="sub" x="285" y="186" text-anchor="middle">Hub</text>' +
      '<circle cx="465" cy="85" r="10" fill="' + (light ? "#2f6bdb" : "#8fb8ff") + '"/><text x="465" y="62" text-anchor="middle">' + r.destinations[0] + '</text><text class="sub" x="465" y="118" text-anchor="middle">Destination</text>' +
      '<g><path d="M16 0 L4 -3 L-2 -14 L-6 -14 L-3 -3 L-10 -3 L-12 -8 L-15 -8 L-13 0 L-15 8 L-12 8 L-10 3 L-3 3 L-6 14 L-2 14 L4 3 Z" fill="' + (light ? "#00267f" : "#fff") + '" transform="scale(1.15)"/>' +
      '<animateMotion dur="9s" repeatCount="indefinite" rotate="auto"><mpath href="#route' + (light ? "l" : "d") + '"/></animateMotion></g></svg>';
  }

  /* ---------- glossary hover definitions ---------- */
  function glossify(root) {
    if (!root) return;
    var terms = [];
    C.glossary.forEach(function (g) { (g.match || []).forEach(function (m) { terms.push({ m: m, def: g.def }); }); });
    terms.sort(function (a, b) { return b.m.length - a.m.length; });
    if (!terms.length) return;
    var re = new RegExp("\\b(" + terms.map(function (t) { return t.m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }).join("|") + ")\\b", "i");
    var seen = {};
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        return n.parentElement && n.parentElement.closest("abbr,a,button,.ph,script,style,input,textarea,select,summary,.acc-btn,.no-gloss,h1,h2,th,.lane-head")
          ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      var m = re.exec(node.nodeValue);
      if (!m) return;
      var key = m[1].toLowerCase();
      if (seen[key]) return;
      seen[key] = true;
      var t = terms.filter(function (x) { return x.m.toLowerCase() === key; })[0];
      var text = node.nodeValue, frag = document.createDocumentFragment(), ab = document.createElement("abbr");
      ab.className = "gloss"; ab.tabIndex = 0; ab.setAttribute("data-def", t.def); ab.textContent = m[1];
      frag.appendChild(document.createTextNode(text.slice(0, m.index)));
      frag.appendChild(ab);
      frag.appendChild(document.createTextNode(text.slice(m.index + m[1].length)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  /* ---------- header + footer ---------- */
  var NAV = [
    ["journey.html", "The Journey", "journey"], ["cargo.html", "Cargo Rules", "cargo"], ["who.html", "Who's Involved", "who"],
    ["schedules.html", "Schedules", "schedules"], ["checklist.html", "Checklist", "checklist"],
    ["mistakes.html", "Common Mistakes", "mistakes"], ["faq.html", "FAQ", "faq"]
  ];
  function layout() {
    var page = document.body.getAttribute("data-page");
    var links = NAV.map(function (n) { return '<a href="' + n[0] + '"' + (n[2] === page ? ' aria-current="page"' : "") + ">" + n[1] + "</a>"; }).join("");
    $("#site-header").innerHTML =
      (S.draftBanner ? '<div class="draft-banner">First draft. Details shown <span class="ph">like this</span> are placeholders waiting for confirmation.</div>' : "") +
      '<header class="site-header" id="hdr"><div class="wrap nav">' +
      '<a class="brand" href="index.html" aria-label="' + esc(S.name) + ' home"><img src="assets/h4-logo.png" alt="' + esc(S.name) + ' logo"><span class="brand-sub">Shipper<br>Guide</span></a>' +
      '<button class="menu-btn" id="menu-btn" aria-label="Open menu" aria-expanded="false">' + icon("menu") + "</button>" +
      '<nav class="nav-links" aria-label="Main">' + links + '<a class="btn btn-gold" href="quote.html">Request a Quote</a></nav></div></header>';
    $("#menu-btn").addEventListener("click", function () {
      var h = $("#hdr"), open = h.classList.toggle("open");
      this.setAttribute("aria-expanded", open);
    });
    $("#site-footer").innerHTML =
      '<footer class="site-footer"><div class="wrap"><div class="foot-grid">' +
      '<div><div class="logo-chip"><img src="assets/h4-logo.png" alt="' + esc(S.name) + ' logo"><img src="assets/rutgers-logo.png" alt="Rutgers MBS Externship Exchange Program logo"></div>' +
      "<p>" + esc(S.tagline) + ".</p></div>" +
      "<div><h4>Plan your shipment</h4><a href=\"journey.html\">The Journey</a><a href=\"cargo.html\">Cargo Rules</a><a href=\"schedules.html\">Schedules &amp; cutoffs</a><a href=\"checklist.html\">Checklist</a></div>" +
      "<div><h4>Learn more</h4><a href=\"who.html\">Who's Involved</a><a href=\"mistakes.html\">Common Mistakes</a><a href=\"faq.html\">FAQ &amp; Glossary</a><a href=\"resources.html\">Resources</a></div>" +
      "<div><h4>Contact</h4><p class=\"small\">" + icon("phone") + " " + ph(S.contact.phone) + "<br>Hours: " + ph(S.contact.hours) + "<br>Email: " + ph(S.contact.email) + "</p><a class=\"btn btn-gold\" href=\"quote.html\" style=\"display:inline-flex\">Request a Quote</a></div>" +
      '</div><div class="foot-bottom"><span>\u00A9 ' + new Date().getFullYear() + " " + esc(S.name) + ". First draft built by the " + esc(S.name) + " team, Rutgers MBS Externship Exchange Program.</span><span>Site: " + ph(S.domain) + " \u00B7 Hosted by " + ph(S.hosting.organization) + " \u00B7 Admin: " + ph(S.hosting.administrator) + "</span></div></div></footer>";
  }

  /* ---------- accordion (shared by FAQ + stakeholders) ---------- */
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".acc-btn");
    if (!b) return;
    var it = b.closest(".acc-item"), open = it.classList.toggle("open");
    b.setAttribute("aria-expanded", open);
  });

  /* ================= HOME ================= */
  function home() {
    $("#home-facts").innerHTML = C.facts.map(function (f) {
      return '<div class="fact">' + icon(f.icon) + "<strong>" + f.big + "</strong><span>" + ph(f.label) + "</span></div>";
    }).join("");
    $("#home-phases").innerHTML = C.phases.map(function (p) {
      return '<a class="card hover phase-card ' + p.id + ' reveal" href="journey.html#stage-' + p.stages[0] + '"><span class="icon-badge">' + icon(p.icon) + "</span><h3>" + p.title + "</h3><p>" + p.text +
        '</p><span class="more">Stage' + (p.stages.length > 1 ? "s " : " ") + p.stages.join(" & ") + " " + icon("arrow-right") + "</span></a>";
    }).join("");
    $("#home-who").innerHTML = C.stakeholders.map(function (s) {
      return '<a class="who-chip reveal" href="who.html"><span class="icon-badge">' + icon(s.icon) + "</span><br>" + s.name.split(" / ")[0] + "</a>";
    }).join("");
    $("#home-mistakes").innerHTML = C.mistakes.slice(0, 3).map(mistakeCard).join("");
    // helper quiz
    var box = $("#helper"), i = 0, qs = C.helper;
    function show() {
      if (i >= qs.length) {
        box.innerHTML = '<div class="helper-result"><span class="helper-step">All set</span><h3>You\'re ready to go</h3><p>You know your cargo, your flight day, and your paperwork. Request a quote to get started.</p><a class="btn btn-gold" href="quote.html">Request a quote</a><button class="btn btn-ghost" data-restart>Start over</button></div>';
        return;
      }
      box.innerHTML = '<span class="helper-step">Question ' + (i + 1) + " of " + qs.length + "</span><h3>" + qs[i].q + '</h3><div class="helper-actions"><button class="btn btn-primary" data-yes>Yes</button><button class="btn btn-ghost" data-no>No, or not sure</button></div>';
    }
    box.addEventListener("click", function (e) {
      if (e.target.closest("[data-yes]")) { i++; show(); }
      else if (e.target.closest("[data-no]")) {
        var q = qs[i];
        box.innerHTML = '<div class="helper-result"><span class="helper-step">Your next step</span><h3>' + q.title + "</h3><p>" + q.text + '</p><a class="btn btn-primary" href="' + q.href + '">' + q.cta + " " + icon("arrow-right") + '</a><button class="btn btn-ghost" data-restart>Start over</button></div>';
      } else if (e.target.closest("[data-restart]")) { i = 0; show(); }
    });
    show();
  }

  function mistakeCard(m) {
    return '<article class="card mistake reveal"><span class="pill red">' + m.tag + "</span><h3>" + m.title + '</h3><p class="what">' + ph(m.what) + '</p><div class="fix"><strong>How to avoid it:</strong> ' + ph(m.fix) + '</div><a class="more" href="journey.html#stage-' + m.stage + '">Happens at stage ' + m.stage + " " + icon("arrow-right") + "</a></article>";
  }

  /* ================= JOURNEY ================= */
  function journey() {
    var root = $("#journey-app"), cur = 0, detailed = false;
    var m = /#stage-(\d)/.exec(location.hash);
    if (m) cur = Math.min(4, Math.max(0, +m[1] - 1));

    function render() {
      var s = C.stages[cur];
      var li = function (x) { return "<li>" + ph(x) + "</li>"; };
      root.innerHTML =
        '<div class="journey-top"><div class="progress-label"><strong>Step ' + (cur + 1) + " of 5</strong><span>" + s.phaseLabel + '</span></div>' +
        '<div class="progress" role="progressbar" aria-valuemin="1" aria-valuemax="5" aria-valuenow="' + (cur + 1) + '"><span style="width:' + (cur + 1) / 5 * 100 + '%"></span></div>' +
        '<div class="tabs" role="tablist" aria-label="Journey stages">' + C.stages.map(function (t, i) {
          return '<button role="tab" class="tab ' + t.phase + (i === cur ? " active" : "") + '" aria-selected="' + (i === cur) + '" data-i="' + i + '"><b>' + (i + 1) + "</b><span>" + t.short + "</span></button>";
        }).join("") + "</div>" +
        '<label class="switch"><input type="checkbox" id="detail-toggle"' + (detailed ? " checked" : "") + '><span class="slider"></span><span>Detailed view</span></label></div>' +
        '<article class="panel ' + s.phase + '" id="stage-panel"><header class="panel-head"><span class="num">' + (cur + 1) + '</span><div><span class="eyebrow">' + s.phaseLabel + "</span><h2>" + s.title + "</h2><p>" + s.summary + "</p></div></header>" +
        '<div class="info-grid">' +
        '<section class="info-card"><h3>' + icon("check-circle") + " What needs to happen</h3><ol>" + s.what.map(li).join("") + "</ol></section>" +
        '<section class="info-card"><h3>' + icon("users") + " Who\u2019s responsible</h3><ul>" + s.who.map(li).join("") + "</ul></section>" +
        '<section class="info-card"><h3>' + icon("file-text") + " What you need</h3><ul>" + s.need.map(li).join("") + "</ul></section>" +
        '<section class="info-card danger"><h3>' + icon("alert-triangle") + " What could go wrong</h3><ul>" + s.risks.map(li).join("") + "</ul></section></div>" +
        (s.checkpoint ? '<div class="checkpoint"><span>' + icon("flag") + " Checkpoint</span><strong>" + s.checkpoint.q + "</strong><p>If not: " + s.checkpoint.fail + "</p></div>" : "") +
        (detailed ? '<div class="detail-box"><h3>In detail</h3>' + s.detail.map(function (d) { return "<p>" + ph(d) + "</p>"; }).join("") + "</div>" : "") +
        '<footer class="panel-nav"><button class="btn btn-ghost" data-nav="-1"' + (cur === 0 ? " disabled" : "") + ">" + icon("arrow-left") + ' Back</button>' +
        '<a class="btn btn-ghost" href="checklist.html">' + icon("check-square") + " Open the checklist</a>" +
        (cur === 4 ? '<a class="btn btn-gold" href="quote.html">Request a quote ' + icon("arrow-right") + "</a>" : '<button class="btn btn-primary" data-nav="1">Next step ' + icon("arrow-right") + "</button>") +
        "</footer></article>";
      history.replaceState(null, "", "#stage-" + (cur + 1));
      glossify($("#stage-panel"));
    }
    function go(i, scroll) { cur = i; render(); if (scroll) $("#journey-app").scrollIntoView({ behavior: "smooth", block: "start" }); }

    root.addEventListener("click", function (e) {
      var t = e.target.closest(".tab"), n = e.target.closest("[data-nav]");
      if (t) go(+t.getAttribute("data-i"));
      else if (n && !n.disabled) go(cur + +n.getAttribute("data-nav"), true);
    });
    root.addEventListener("change", function (e) { if (e.target.id === "detail-toggle") { detailed = e.target.checked; render(); $("#detail-toggle").focus(); } });
    root.addEventListener("keydown", function (e) {
      if (!e.target.classList.contains("tab")) return;
      if (e.key === "ArrowRight") { go(Math.min(4, cur + 1)); $(".tab.active", root).focus(); }
      if (e.key === "ArrowLeft") { go(Math.max(0, cur - 1)); $(".tab.active", root).focus(); }
    });
    window.addEventListener("hashchange", function () { var h = /#stage-(\d)/.exec(location.hash); if (h && +h[1] - 1 !== cur) go(+h[1] - 1); });
    render();

    // swimlane process map
    var lane = $("#lanes");
    var html = '<div class="corner">Who</div>' + C.stages.map(function (s, i) { return '<button class="lane-head ' + s.phase + '" data-i="' + i + '" title="Open stage ' + (i + 1) + '">' + (i + 1) + ". " + s.short + "</button>"; }).join("");
    C.lanes.forEach(function (name, li) {
      html += '<div class="lane-label">' + name + "</div>";
      C.stages.forEach(function (s, si) {
        html += '<div class="cell' + (li % 2 ? " odd" : "") + '">' + ((C.map[li] && C.map[li][si]) || []).map(function (t) {
          return t.charAt(0) === "?" ? '<span class="chip check">' + t.slice(1) + "</span>" : '<span class="chip">' + t + "</span>";
        }).join("") + "</div>";
      });
    });
    lane.innerHTML = html;
    lane.addEventListener("click", function (e) { var h = e.target.closest(".lane-head"); if (h) go(+h.getAttribute("data-i"), true); });
  }

  /* ================= CARGO ================= */
  function cargo() {
    var filter = "all", grid = $("#cargo-grid");
    $("#cargo-filters").innerHTML = [["all", "All cargo"], ["perishable", "Perishable"], ["non", "Non-perishable"]].map(function (f) {
      return '<button class="chip-btn' + (f[0] === "all" ? " active" : "") + '" data-f="' + f[0] + '">' + f[1] + "</button>";
    }).join("");
    function draw() {
      grid.innerHTML = C.cargo.filter(function (c) { return filter === "all" || c.types.indexOf(filter) > -1; }).map(function (c) {
        return '<article class="card cargo-card" id="' + c.id + '"><h3><span class="icon-badge">' + icon(c.icon) + "</span>" + c.title + "</h3><ul>" + c.points.map(function (p) { return "<li>" + ph(p) + "</li>"; }).join("") + "</ul></article>";
      }).join("");
      glossify(grid);
    }
    $("#cargo-filters").addEventListener("click", function (e) {
      var b = e.target.closest(".chip-btn"); if (!b) return;
      filter = b.getAttribute("data-f");
      $$(".chip-btn", this).forEach(function (x) { x.classList.toggle("active", x === b); });
      draw();
    });
    draw();
    // product checker
    var sel = $("#checker-select");
    sel.innerHTML = '<option value="">Choose your product\u2026</option>' + C.checker.map(function (c, i) { return '<option value="' + i + '">' + c.name + "</option>"; }).join("");
    sel.addEventListener("change", function () {
      var c = C.checker[sel.value], out = $("#checker-result");
      out.innerHTML = c ? '<div class="result ' + c.status + '" role="status">' + icon(c.status === "ok" ? "check-circle" : c.status === "no" ? "x" : "alert-triangle") + "<div><strong>" + c.label + "</strong><p>" + ph(c.text) + "</p></div></div>" : "";
    });
    $("#restricted-grid").innerHTML = C.restricted.map(function (r) { return '<div class="restricted-item">' + icon("alert-triangle") + "<span>" + r + "</span></div>"; }).join("");
  }

  /* ================= WHO ================= */
  function who() {
    $("#path").innerHTML = C.path.map(function (p) { return '<div class="path-node ' + p.c + '">' + p.t + "</div>"; }).join("");
    $("#stakeholders").innerHTML = C.stakeholders.map(function (s, i) {
      return '<article class="acc-item' + (i === 0 ? " open" : "") + '"><button class="acc-btn" aria-expanded="' + (i === 0) + '"><span class="icon-badge">' + icon(s.icon) + "</span><span><strong>" + s.name + "</strong><small>" + s.tag + "</small></span>" + icon("chevron-down", "chev") + "</button>" +
        '<div class="acc-panel"><div><div class="acc-body"><div class="two"><div><h4>What they do</h4><ul>' + s.does.map(function (d) { return "<li>" + d + "</li>"; }).join("") + "</ul></div>" +
        "<div><h4>When you deal with them</h4><p>" + s.when + "</p><h4>What they need from you</h4><p>" + s.needs + "</p></div></div>" + (s.note ? '<p class="note">' + ph(s.note) + "</p>" : "") + "</div></div></div></article>";
    }).join("");
    $("#handoffs").innerHTML = "<thead><tr><th>From</th><th></th><th>To</th><th>What passes between them</th></tr></thead><tbody>" + C.handoffs.map(function (h) {
      return "<tr><td><strong>" + h[0] + '</strong></td><td class="arrow-cell">\u2192</td><td><strong>' + h[1] + "</strong></td><td>" + h[2] + "</td></tr>";
    }).join("") + "</tbody>";
    $("#contact-box").innerHTML = icon("phone") + " Main contact for shipment questions: a call center. " + ph(S.contact.phone) + " \u00B7 " + ph(S.contact.hours);
    glossify($("#stakeholders"));
  }

  /* ================= SCHEDULES ================= */
  function schedules() {
    var r = C.routes;
    $("#route-art").innerHTML = routeSVG(true);
    $("#route-text").innerHTML = "<p><strong>Now:</strong> " + r.origins.join(" and ") + " \u2192 " + r.hub + " \u2192 " + r.destinations.join(", ") + ".</p><p><strong>Planned origins:</strong> " + r.plannedOrigins.join(", ") + ".</p><p><strong>Planned destinations:</strong> more westbound destinations as the network develops.</p>";
    $("#sched-body").innerHTML = C.schedule.map(function (s) {
      return "<tr><td>" + ph(s.day) + "</td><td>" + ph(s.depart) + "</td><td>" + ph(s.route) + "</td><td>" + C.rules.cutoffHours + " hours before departure</td><td><span class=\"pill gold\">" + s.status + "</span></td></tr>";
    }).join("");
    $("#capacity").innerHTML = C.capacity.map(function (c) { return '<div class="card stat"><strong>' + c.value + "</strong><span>" + c.label + "</span></div>"; }).join("");
    $("#tips").innerHTML = C.tips.map(function (t) { return "<li>" + t + "</li>"; }).join("");
    $("#policies").innerHTML = C.policies.map(function (p) { return '<div class="card"><h3><span class="icon-badge">' + icon(p.icon) + "</span>" + p.title + "</h3><p>" + p.text + "</p></div>"; }).join("");
    // cutoff planner
    var inp = $("#dep"), out = $("#planner-out");
    function dur(ms) { var m = Math.floor(ms / 60000), d = Math.floor(m / 1440), h = Math.floor(m % 1440 / 60); return (d ? d + " d " : "") + h + " h " + (m % 60) + " min"; }
    function fmt(d) { return d.toLocaleString([], { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }); }
    function calc() {
      if (!inp.value) { out.innerHTML = '<p class="muted">Pick a departure date and time to see when your cargo has to be ready.</p>'; return; }
      var dep = new Date(inp.value), cut = new Date(dep - C.rules.cutoffHours * 3600000), stg = new Date(dep - C.rules.stagedHours * 3600000), ms = cut - Date.now();
      out.innerHTML = '<div class="timeline"><div><span>Cargo cutoff</span><strong>' + fmt(cut) + "</strong></div><div><span>Staged and ready by</span><strong>" + fmt(stg) + "</strong></div><div><span>Departure</span><strong>" + fmt(dep) + "</strong></div></div>" +
        '<p class="countdown">' + (ms > 0 ? "Time left to the cutoff: " + dur(ms) : "This cutoff has passed. Cargo would move on the next available flight, subject to capacity.") + "</p>" +
        '<p class="small muted">Anticipated cutoff: ' + C.rules.cutoffHours + " hours before departure, with cargo staged at least " + C.rules.stagedHours + " hour before. May vary by shipment size. " + ph("{{Final cutoff to be confirmed}}") + "</p>";
    }
    inp.addEventListener("input", calc); calc(); setInterval(calc, 60000);
    glossify($("main"));
  }

  /* ================= CHECKLIST ================= */
  var KEY = "h4-checklist-v1";
  function loadState() { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { return {}; } }
  function checklistText(st) {
    var out = S.name + ": First-time shipper checklist\n\n";
    var lines = function (items) { return items.map(function (i) { return (st[i.id] ? "[x] " : "[ ] ") + i.text.replace(/\{\{(.+?)\}\}/g, "$1"); }).join("\n") + "\n\n"; };
    out += "QUICK CHECKLIST\n" + lines(C.checklistQuick);
    C.checklistGroups.forEach(function (g) { out += g.title.toUpperCase() + "\n" + lines(g.items); });
    return out;
  }
  function downloadChecklist() {
    var blob = new Blob([checklistText(loadState())], { type: "text/plain" }), a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "shipper-checklist.txt"; document.body.appendChild(a); a.click(); a.remove();
  }
  function checklist() {
    var st = loadState(), tab = "quick";
    var lists = function () { return tab === "quick" ? [{ title: "First-time shipper checklist", items: C.checklistQuick }] : C.checklistGroups; };
    function items() { return lists().reduce(function (a, g) { return a.concat(g.items); }, []); }
    function progress() {
      var all = items(), done = all.filter(function (i) { return st[i.id]; }).length, pct = Math.round(done / all.length * 100);
      $("#cl-progress").innerHTML = '<div class="ring" style="--p:' + pct + '"><span>' + pct + '%</span></div><div><strong>' + done + " of " + all.length + " done</strong><p>" + (done === all.length ? "All set. You\u2019re ready to ship." : "Tick each box as you go. Progress is saved on this device.") + "</p></div>";
    }
    function draw() {
      $("#cl-list").innerHTML = lists().map(function (g) {
        return '<section class="cl-group"><h3>' + g.title + "</h3>" + g.items.map(function (i) {
          return '<div class="cl-item' + (st[i.id] ? " done" : "") + '"><label><input type="checkbox" data-id="' + i.id + '"' + (st[i.id] ? " checked" : "") + '><span class="box">' + icon("check") + '</span><span class="txt">' + ph(i.text) + "</span></label>" +
            (i.why ? "<details><summary>" + icon("help-circle") + "<span>Why this matters</span></summary><p>" + ph(i.why) + "</p>" + (i.href ? '<a href="' + i.href + '">' + i.link + " " + icon("arrow-right") + "</a>" : "") + "</details>" : "") + "</div>";
        }).join("") + "</section>";
      }).join("");
      progress(); glossify($("#cl-list"));
    }
    $("#cl-tabs").innerHTML = '<button class="chip-btn active" data-t="quick">Quick checklist (8 steps)</button><button class="chip-btn" data-t="detailed">Detailed checklist</button>';
    $("#cl-tabs").addEventListener("click", function (e) {
      var b = e.target.closest(".chip-btn"); if (!b) return;
      tab = b.getAttribute("data-t");
      $$(".chip-btn", this).forEach(function (x) { x.classList.toggle("active", x === b); });
      draw();
    });
    $("#cl-list").addEventListener("change", function (e) {
      var id = e.target.getAttribute("data-id"); if (!id) return;
      st[id] = e.target.checked;
      try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (x) { /* private mode: ignore */ }
      e.target.closest(".cl-item").classList.toggle("done", e.target.checked);
      progress();
    });
    $("#cl-print").addEventListener("click", function () { window.print(); });
    $("#cl-download").addEventListener("click", downloadChecklist);
    $("#cl-reset").addEventListener("click", function () { if (confirm("Clear all ticked boxes?")) { st = {}; try { localStorage.removeItem(KEY); } catch (x) { } draw(); } });
    $("#doc-table").innerHTML = "<thead><tr><th>Document</th><th>What it is used for</th><th>Usually provided by</th></tr></thead><tbody>" + C.documents.map(function (d) { return "<tr><td><strong>" + d[0] + "</strong></td><td>" + ph(d[1]) + "</td><td>" + ph(d[2]) + "</td></tr>"; }).join("") + "</tbody>";
    draw();
  }

  /* ================= MISTAKES ================= */
  function mistakes() {
    var tags = ["All"].concat(C.mistakes.reduce(function (a, m) { return a.indexOf(m.tag) < 0 ? a.concat(m.tag) : a; }, []));
    $("#m-filters").innerHTML = tags.map(function (t, i) { return '<button class="chip-btn' + (i === 0 ? " active" : "") + '" data-t="' + t + '">' + t + "</button>"; }).join("");
    function draw(t) { $("#m-grid").innerHTML = C.mistakes.filter(function (m) { return t === "All" || m.tag === t; }).map(mistakeCard).join(""); $$("#m-grid .reveal").forEach(function (e) { e.classList.add("in"); }); }
    $("#m-filters").addEventListener("click", function (e) {
      var b = e.target.closest(".chip-btn"); if (!b) return;
      $$(".chip-btn", this).forEach(function (x) { x.classList.toggle("active", x === b); });
      draw(b.getAttribute("data-t"));
    });
    draw("All");
  }

  /* ================= FAQ ================= */
  function faq() {
    var cats = ["All"].concat(C.faq.reduce(function (a, f) { return a.indexOf(f.cat) < 0 ? a.concat(f.cat) : a; }, [])), cat = "All";
    $("#f-filters").innerHTML = cats.map(function (c, i) { return '<button class="chip-btn' + (i === 0 ? " active" : "") + '" data-c="' + c + '">' + c + "</button>"; }).join("");
    $("#f-list").innerHTML = C.faq.map(function (f, i) {
      return '<article class="acc-item" data-cat="' + f.cat + '" data-text="' + esc((f.q + " " + f.a).replace(/\{\{|\}\}/g, "").toLowerCase()) + '"><button class="acc-btn" aria-expanded="false"><span>' + f.q + "</span>" + icon("chevron-down", "chev") + '</button><div class="acc-panel"><div><div class="acc-body"><p>' + ph(f.a) + "</p></div></div></div></article>";
    }).join("");
    $("#g-list").innerHTML = C.glossary.map(function (g) { return '<div class="gloss-item" data-text="' + esc((g.term + " " + g.def).toLowerCase()) + '"><strong>' + g.term + "</strong><p>" + g.def + "</p></div>"; }).join("");
    var q = $("#f-search");
    function filter() {
      var s = q.value.trim().toLowerCase(), n = 0;
      $$("#f-list .acc-item").forEach(function (el) { var ok = (cat === "All" || el.getAttribute("data-cat") === cat) && (!s || el.getAttribute("data-text").indexOf(s) > -1); el.hidden = !ok; if (ok) n++; });
      $$("#g-list .gloss-item").forEach(function (el) { el.hidden = !!s && el.getAttribute("data-text").indexOf(s) < 0; });
      $("#f-count").textContent = n ? "Showing " + n + " of " + C.faq.length + " questions" : "No questions match. Try a different word, or contact us.";
    }
    $("#f-filters").addEventListener("click", function (e) {
      var b = e.target.closest(".chip-btn"); if (!b) return;
      cat = b.getAttribute("data-c");
      $$(".chip-btn", this).forEach(function (x) { x.classList.toggle("active", x === b); });
      filter();
    });
    q.addEventListener("input", filter);
    filter();
  }

  /* ================= RESOURCES ================= */
  function resources() {
    $("#res-grid").innerHTML = C.resources.map(function (r) {
      var acts = r.actions.map(function (a, i) {
        return a.type === "download" ? '<button class="btn btn-ghost" data-dl>' + icon("download") + " " + a.label + "</button>" : '<a class="btn ' + (i ? "btn-ghost" : "btn-primary") + '" href="' + a.href + '">' + a.label + "</a>";
      }).join("");
      return '<article class="card res-card' + (r.status === "soon" ? " soon" : "") + ' reveal"><span class="icon-badge">' + icon(r.icon) + "</span><h3>" + r.title + '</h3><span class="pill ' + (r.status === "soon" ? "gold" : "green") + '">' + (r.status === "soon" ? "Coming soon" : "Available") + "</span><p>" + r.desc + '</p><div class="actions">' + acts + "</div></article>";
    }).join("");
    $("#res-grid").addEventListener("click", function (e) { if (e.target.closest("[data-dl]")) downloadChecklist(); });
  }

  /* ================= QUOTE ================= */
  function quote() {
    var f = $("#quote-form"), box = $("#quote-result");
    $("#booking-note").innerHTML = icon("send") + " Online booking and shipment requests: " + ph("{{Coming soon. Booking function to be added}}");
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (f.website && f.website.value) return; // spam trap
      var d = {}, fd = new FormData(f);
      fd.forEach(function (v, k) { if (k !== "website") d[k] = v; });
      d.dryIce = f.dryIce.checked ? "Yes, will be declared in advance" : "No";
      d.notRestricted = f.confirm.checked ? "Confirmed" : "";
      var labels = { fullName: "Name", company: "Company", email: "Email", phone: "Phone", origin: "Origin", destination: "Destination", cargoType: "Cargo type", tempControl: "Temperature control needed", weight: "Approximate weight", packages: "Number of packages", readyDate: "Cargo ready by", dryIce: "Dry ice", handling: "Storage or special handling", notes: "Notes" };
      var text = S.name + " quote request\n\n" + Object.keys(labels).map(function (k) { return labels[k] + ": " + (d[k] || "-"); }).join("\n");
      function done(msg) {
        box.innerHTML = '<div class="card summary"><h3>' + icon("check-circle") + " " + msg + "</h3><dl>" + Object.keys(labels).map(function (k) { return d[k] ? "<dt>" + labels[k] + "</dt><dd>" + esc(d[k]) + "</dd>" : ""; }).join("") + "</dl></div>";
        f.hidden = true; box.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (S.formEndpoint) {
        fetch(S.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) })
          .then(function (r) { if (!r.ok) throw new Error(); done("Thank you. Your request was sent."); })
          .catch(function () { box.innerHTML = '<p class="err">Sorry, we couldn\'t send your request. Please try again or call us.</p>'; });
      } else {
        done("Your request is ready");
        var extra = '<div class="callout blue"><p><strong>This draft site can\'t send email yet.</strong> Copy your request below and send it to us.</p>' +
          (S.contact.emailAddress ? '<a class="btn btn-gold" href="mailto:' + S.contact.emailAddress + "?subject=" + encodeURIComponent(S.name + " quote request") + "&body=" + encodeURIComponent(text) + '">Open in my email app</a> ' : "") +
          '<button class="btn btn-primary" id="copy-req">' + icon("copy") + " Copy request</button></div>";
        box.insertAdjacentHTML("beforeend", extra);
        $("#copy-req").addEventListener("click", function () {
          var b = this;
          (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(function () { b.textContent = "Copied!"; }, function () { window.prompt("Copy your request:", text); });
        });
      }
    });
  }

  /* ---------- scroll reveal ---------- */
  function reveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.12 });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- go ---------- */
  var page = document.body.getAttribute("data-page");
  layout();
  $$("[data-route]").forEach(function (el) { el.innerHTML = routeSVG(false); });
  var pages = { home: home, journey: journey, cargo: cargo, who: who, schedules: schedules, checklist: checklist, mistakes: mistakes, faq: faq, resources: resources, quote: quote };
  if (pages[page]) pages[page]();
  if (page === "home" || page === "cargo" || page === "mistakes") glossify($("main"));
  reveal();
  // jump to #anchors that were created by JavaScript
  if (location.hash && page !== "journey") { var t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(function () { t.scrollIntoView(); }, 60); }
})();
