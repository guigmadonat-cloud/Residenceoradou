/* Site d'accueil Résidence Oradou. Données : content.js (guide), activities-data.js (fiches de sorties), events.js (événements du jour). */
var SITE_LANGS = ["fr", "en", "es", "de", "pt", "it"];
var KEY = "oradou-lang", FKEY = "oradou-filter";
var lang = "fr", filter = "all";
var today = new Date();
var todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
var dow = today.getDay();
var LANGLIST = LANGS.filter(function (l) { return SITE_LANGS.indexOf(l.c) !== -1; });

function supported(c) { return SITE_LANGS.indexOf(c) !== -1; }
try {
  var sl = localStorage.getItem(KEY);
  if (sl && supported(sl)) lang = sl;
  else {
    var nav = navigator.languages || [navigator.language || "fr"];
    for (var i = 0; i < nav.length; i++) { var c = String(nav[i]).slice(0, 2).toLowerCase(); if (supported(c)) { lang = c; break; } }
  }
  var sf = localStorage.getItem(FKEY);
  if (sf) filter = sf;
} catch (e) {}
if (["all", "paris", "local", "free"].indexOf(filter) === -1) filter = "all";

function G() { return GUIDE[lang]; }
function GU() { return GUIDE[lang].ui; }
function AU() { return UI[lang]; }
function loc() { return LANGS.filter(function (l) { return l.c === lang; })[0].loc; }
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
function resolve(v) { return (typeof v === "string" && v.charAt(0) === "@") ? AU()[v.slice(1)] : v; }
function parseDay(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
function mapsUrl(q) { return "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(q); }
function el(id) { return document.getElementById(id); }

/* ---------- Sorties (fiches, événements, filtres) ---------- */
function field(s, k) {
  var v = s.o && s.o[k];
  if (!v) { var tt = T[s.id][lang] || T[s.id].fr; v = tt[k]; }
  return resolve(v) || "";
}
function fmtRange(a, b) {
  var f = new Intl.DateTimeFormat(loc(), { day: "numeric", month: "long", year: "numeric" });
  if (a.getTime() === b.getTime()) return f.format(a);
  try { return f.formatRange(a, b); } catch (e) { return f.format(a) + " – " + f.format(b); }
}
function srow(label, value) { return '<div><dt>' + label + '</dt><dd>' + esc(value) + '</dd></div>'; }

function spotHTML(s) {
  var U = AU();
  var tags = '<span class="tag ' + (s.area === "local" ? "local" : "") + '">' + (s.area === "local" ? U.near : U.paris) + '</span><span>' + U["k_" + s.kind] + '</span>';
  if (s.free) tags += '<span class="tag free">' + U.free + '</span>';
  if (s.book) tags += '<span class="tag book">' + U.book + '</span>';
  if (s.closedDays.indexOf(dow) !== -1) tags += '<span class="tag closed">' + U.closed + '</span>';
  var actions = '<a class="btn primary" href="' + mapsUrl(s.dest) + '" target="_blank" rel="noopener">' + U.route + '</a>';
  if (s.url) actions += '<a class="btn ghost" href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(field(s, "u")) + '</a>';
  return '<li class="card" data-area="' + s.area + '" data-free="' + s.free + '" id="spot-' + s.id + '">' +
    '<div class="meta">' + tags + '</div><h4>' + esc(field(s, "n")) + '</h4><p>' + esc(field(s, "b")) + '</p>' +
    '<dl class="spec">' + srow(U.dPrice, field(s, "p")) + srow(U.dHours, field(s, "h")) + srow(U.dTip, field(s, "t")) + '</dl>' +
    '<div class="actions">' + actions + '</div></li>';
}

function eventsHTML() {
  var U = AU();
  var items = EVENTS.filter(function (e) { return parseDay(e.end) >= todayStart && !e.placeTbc; });
  items.sort(function (a, b) {
    var ao = parseDay(a.start) <= todayStart, bo = parseDay(b.start) <= todayStart;
    if (ao !== bo) return ao ? -1 : 1;
    return ao ? parseDay(a.end) - parseDay(b.end) : parseDay(a.start) - parseDay(b.start);
  });
  if (!items.length) return '<li class="ev"><span class="ev-place">' + U.noEvents + '</span></li>';
  return items.map(function (e) {
    var a = parseDay(e.start), b = parseDay(e.end), on = a <= todayStart;
    var place = esc(e.place) + (e.time ? " · " + esc(e.time) : "");
    return '<li class="ev"><div class="ev-date">' + (on ? '<span class="tag now">' + U.now + '</span>' : '') + '<span>' + fmtRange(a, b) + '</span></div>' +
      '<h4 class="ev-title">' + esc(e.title) + '</h4><div class="ev-place"><span>' + U["k_" + e.kind] + ' · ' + place + '</span>' +
      (e.url ? '<a href="' + esc(e.url) + '" target="_blank" rel="noopener">' + U.moreInfo + '</a>' : '') + '</div></li>';
  }).join("");
}

function activitiesHTML() {
  var U = AU();
  var picks = SPOTS.filter(function (s) { return s.pick; }).map(function (s) {
    return '<li><a class="pick" href="#spot-' + s.id + '" data-spot="' + s.id + '"><span class="pk-meta">' + (s.area === "local" ? U.near : U.paris) + ' · ' + U["k_" + s.kind] + '</span>' +
      '<span class="pk-name">' + esc(field(s, "n")) + '</span><span class="pk-b">' + esc(field(s, "b")) + '</span><span class="pk-go">' + U.seeCard + ' →</span></a></li>';
  }).join("");
  var fs = [["all", U.fAll], ["paris", U.fParis], ["local", U.fLocal], ["free", U.fFree]];
  var chips = fs.map(function (f) { return '<button type="button" class="chip" data-key="' + f[0] + '" aria-pressed="false">' + esc(f[1]) + '</button>'; }).join("");
  var d = new Intl.DateTimeFormat(loc(), { dateStyle: "long" }).format(parseDay(UPDATED));
  return '<p class="lede">' + esc(U.lede) + '</p>' +
    '<section class="how"><h3>' + esc(U.howTitle) + '</h3><ol><li>' + esc(U.how1) + '</li><li>' + esc(U.how2) + '</li><li>' + esc(U.how3) + '</li></ol></section>' +
    '<h3 class="sub">' + esc(U.picksTitle) + '</h3><p class="note">' + esc(U.picksLede) + '</p><ul class="pick-list">' + picks + '</ul>' +
    '<h3 class="sub">' + esc(U.gTitle) + '</h3><ul class="routes"><li><b>≈ 28 min</b><span>' + esc(U.r1) + '</span></li><li><b>≈ 10 min</b><span>' + esc(U.r2) + '</span></li><li><b>' + esc(U.metro) + '</b><span>' + esc(U.r3) + '</span></li></ul>' +
    '<h3 class="sub">' + esc(U.eTitle) + '</h3><p class="note">' + esc(U.eLede) + '</p><ul class="ev-list">' + eventsHTML() + '</ul>' +
    '<div class="filters-bar"><div class="filters" role="group" id="filters">' + chips + '</div></div><p class="count" id="count" aria-live="polite"></p>' +
    '<ul class="cards spots" id="spots">' + SPOTS.map(spotHTML).join("") + '</ul>' +
    '<p class="note">' + esc(U.note.replace("%d", d)) + '</p>';
}

function applyFilter() {
  var U = AU(), list = el("spots");
  if (!list) return;
  var shown = 0, cards = list.children;
  for (var i = 0; i < cards.length; i++) {
    var c = cards[i];
    var ok = filter === "all" || (filter === "free" && c.dataset.free === "true") || c.dataset.area === filter;
    c.hidden = !ok;
    if (ok) shown++;
  }
  var chips = el("filters").children;
  for (var j = 0; j < chips.length; j++) chips[j].setAttribute("aria-pressed", String(chips[j].dataset.key === filter));
  el("count").textContent = shown + " " + (shown > 1 ? U.many : U.one);
}

/* ---------- Guide ---------- */
function placesHTML(b) {
  var U = GU();
  var items = PLACES[b.ref].map(function (p) {
    var meta = [];
    if (p.d) meta.push('<span class="tag">' + esc(p.d) + '</span>');
    if (p.p) meta.push('<span>' + esc(p.p) + '</span>');
    return '<li class="card"><div class="meta">' + meta.join("") + '</div><h4>' + esc(p.n) + '</h4>' +
      (p.t ? '<p>' + esc(p.t[lang] || p.t.fr) + '</p>' : '') + '<p class="addr">' + esc(p.addr) + '</p>' +
      '<div class="actions"><a class="btn primary" href="' + mapsUrl(p.n + ", " + p.addr) + '" target="_blank" rel="noopener">' + esc(U.route) + '</a></div></li>';
  }).join("");
  return '<h3 class="sub">' + esc(U[b.h]) + '</h3>' + (b.note ? '<p class="note">' + esc(U[b.note]) + '</p>' : '') + '<ul class="cards">' + items + '</ul>';
}

function blockHTML(b) {
  var U = GU();
  switch (b.k) {
    case "h": return '<h3 class="sub">' + esc(b.t) + '</h3>';
    case "p": return '<p>' + esc(b.t) + '</p>';
    case "list": return '<ul>' + b.items.map(function (i) { return '<li>' + esc(i) + '</li>'; }).join("") + '</ul>';
    case "facts": return '<dl class="facts">' + b.rows.map(function (r) { return '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join("") + '</dl>';
    case "codes": return '<div class="codes"><h4>' + esc(U.codesTitle) + '</h4><p>' + esc(U.codesBody) + '</p></div>';
    case "route": return '<p><a class="btn primary" href="' + mapsUrl(b.dest) + '" target="_blank" rel="noopener">' + esc(U.route) + ' · ' + esc(b.label) + '</a></p>';
    case "places": return placesHTML(b);
    case "contact3": return '<ul class="cards">' + b.items.map(function (i) {
      return '<li class="card"><div class="meta"><span>' + esc(i.h) + '</span></div><h4>' + esc(i.n) + '</h4><p class="addr">' + esc(i.addr) + (i.tel ? ' · <span class="sel">' + esc(i.tel) + '</span>' : '') + '</p>' + (i.t ? '<p>' + esc(i.t) + '</p>' : '') +
        '<div class="actions"><a class="btn primary" href="' + mapsUrl(i.n + ", " + i.addr) + '" target="_blank" rel="noopener">' + esc(U.route) + '</a></div></li>';
    }).join("") + '</ul>';
  }
  return "";
}

function homeHTML() {
  var U = GU();
  var tiles = G().sections.map(function (s, i) {
    return '<li><a class="tile' + (s.special ? " hot" : "") + '" href="#' + s.id + '"><span class="tn">' + esc(s.t) + '</span><span class="td">' + esc(s.d) + '</span><span class="ta" aria-hidden="true">→</span></a></li>';
  }).join("");
  return '<h1>' + esc(U.welcome) + '</h1><p class="lede">' + esc(U.welcomeLede) + '</p><ul class="tiles">' + tiles + '</ul>' +
    '<section class="hostbox"><h3>' + esc(U.hostTitle) + '</h3><p>' + esc(U.hostBody) + '<a href="https://www.instagram.com/' + CONTACT.instagram + '" target="_blank" rel="noopener">@' + CONTACT.instagram + '</a></p><p>' + esc(U.hostBody2) + '</p>' +
    '<p><strong>' + esc(U.reachUs) + '</strong> ' + esc(U.phone) + ' : <span class="sel">' + CONTACT.phone + '</span> · ' + esc(U.email) + ' : <span class="sel">' + CONTACT.email + '</span></p></section>';
}

function sectionHTML(s) {
  var U = GU();
  var body = s.special === "activities" ? activitiesHTML() : '<div class="prose">' + s.blocks.map(blockHTML).join("") + '</div>';
  return '<a class="backbtn" href="#">← ' + esc(U.back) + '</a><h2>' + esc(s.t) + '</h2>' + body;
}

/* ---------- Rendu ---------- */
function currentId() { return decodeURIComponent((location.hash || "").replace(/^#/, "")); }

function render(keepScroll) {
  var U = GU();
  document.documentElement.lang = lang;
  el("brandN").textContent = U.brand;
  el("brandS").textContent = U.sub;
  el("langLabel").textContent = U.langLabel;
  var id = currentId(), sec = null;
  G().sections.forEach(function (s) { if (s.id === id) sec = s; });
  var spotTarget = null;
  if (!sec && id.indexOf("spot-") === 0) { sec = G().sections.filter(function (s) { return s.special === "activities"; })[0]; spotTarget = id; }
  el("view").innerHTML = sec ? sectionHTML(sec) : homeHTML();
  document.title = (sec ? sec.t + " · " : "") + U.brand;
  el("foot").innerHTML = '<span><strong>' + esc(U.callUs) + ' :</strong> <span class="sel">' + CONTACT.email + '</span></span>';
  applyFilter();
  if (typeof setHH === "function") setHH();
  if (spotTarget) { var t = el(spotTarget); if (t) t.scrollIntoView({ block: "start" }); }
  else if (!keepScroll) window.scrollTo(0, 0);
}

var sel = el("lang");
sel.innerHTML = LANGLIST.map(function (l) { return '<option value="' + l.c + '">' + l.n + '</option>'; }).join("");
sel.value = lang;
sel.addEventListener("change", function () {
  lang = sel.value;
  try { localStorage.setItem(KEY, lang); } catch (e) {}
  render(true);
});
window.addEventListener("hashchange", function () { render(false); });
el("view").addEventListener("click", function (e) {
  var chip = e.target.closest(".chip");
  if (chip) { filter = chip.dataset.key; try { localStorage.setItem(FKEY, filter); } catch (err) {} applyFilter(); return; }
  var pk = e.target.closest("a.pick");
  if (pk) {
    e.preventDefault();
    filter = "all"; try { localStorage.setItem(FKEY, filter); } catch (err2) {}
    applyFilter();
    var t = el("spot-" + pk.dataset.spot);
    if (t) t.scrollIntoView({ block: "start" });
  }
});
function setHH() { document.documentElement.style.setProperty("--hh", el("topbar").offsetHeight + "px"); }
window.addEventListener("resize", setHH);
render(false);
setHH();
