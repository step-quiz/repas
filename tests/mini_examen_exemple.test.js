/* Prova d'extrem a extrem de l'exemple.

   Genera les dades de mostra amb el motor de codis de debò (js/codi.js i
   les taules reals), les torna a llegir com si vinguessin del full de
   respostes, i hi passa la reconstrucció de trams i el sorteig. Si això
   passa, el botó "Posa-hi un exemple" serveix per fer un mini-examen. */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

/* El mateix calendari que fa servir l'aplicació: si la prova en tingués un
   de propi, comprovaria una cosa diferent de la que passa de debò. */
global.window = global.window || {};
require(path.join(__dirname, "..", "js", "calendari.js"));
const CAL = global.window.RE_CALENDARI;
/* Camí relatiu: amb una ruta absoluta la prova només corria a la màquina
   on es va escriure. */
const ARREL = path.join(__dirname, "..") + path.sep;
const src = fs.readFileSync(ARREL + "tools/analitzador-plantilla.html", "utf8");

/* Entorn: taules reals + motor de codis real. */
const sandbox = { window: {}, console, Date, Math, JSON, parseInt, parseFloat, String, Object, Array, isNaN, TextDecoder, atob: b => Buffer.from(b, "base64").toString("binary") };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(ARREL + "tools/_taules.json", "utf8")
  .replace(/^/, "window.RE_TAULES = "), sandbox);
vm.runInContext(fs.readFileSync(ARREL + "js/codi.js", "utf8"), sandbox);
const RE_TAULES = sandbox.window.RE_TAULES;
const RE_CODI = sandbox.window.RE_CODI;


let fallades = 0;
const comprova = (nom, cond, detall) => {
  if (!cond) { fallades++; console.log("  FALLA  " + nom + (detall ? " — " + detall : "")); }
  else console.log("  ok     " + nom);
};

/* ── 1. es genera l'exemple executant el codi real del botó ────────────── */
const cos = src.slice(src.indexOf('$("#btn-exemple").onclick = function () {'));
const cos2 = cos.slice(cos.indexOf("{") + 1, cos.indexOf("\n    $(\"#entrada\").value"));
let text = null;
const ctx = {
  RE_TAULES, RE_CODI, RE_CALENDARI: CAL, Date, Math, Object, console,
  $: () => ({ value: "" }), carrega: () => {}
};
vm.createContext(ctx);
vm.runInContext(cos2 + "\n globalThis.RESULTAT = l.join('\\n');", ctx);
text = ctx.RESULTAT;

const linies = text.trim().split("\n");
console.log("\n== l'exemple ==");
comprova("hi ha capçalera + files", linies.length > 10, linies.length + " línies");
const files = linies.slice(1).map(l => {
  const c = l.split("\t");
  return { quan: c[0], correu: c[1], grup: c[2], codi: c[3] };
});
comprova("6 alumnes diferents", new Set(files.map(f => f.correu)).size === 6);
comprova("16 enviaments en total", files.length === 16, files.length + "");

/* ── 2. es tornen a llegir els codis ───────────────────────────────────── */
console.log("\n== lectura dels codis ==");
const llegits = files.map(f => ({ f, p: RE_CODI.llegeix(f.codi) }));
const bons = llegits.filter(x => x.p.ok && x.p.integre);
comprova("15 de 16 codis són íntegres", bons.length === 15, bons.length + " bons");
comprova("n'hi ha exactament 1 de manipulat",
  llegits.filter(x => !x.p.ok || !x.p.integre).length === 1);

/* ── 3. reconstrucció de trams ─────────────────────────────────────────── */
const tramDe = d => CAL.tramDe(d);
function quan(p) { const d = new Date(p.data.getTime()); d.setHours(p.hora, p.minut, 0, 0); return d; }
function mapaEstats(p) {
  const m = {};
  p.fulls.forEach(f => f.items.forEach(it => {
    if (it.estat && it.estat !== "vist") m[f.n + ":" + it.id] = { e: it.estat, d: it.dif };
  }));
  return m;
}

console.log("\n== trams reconstruïts ==");
const per = {};
bons.forEach(x => { (per[x.f.correu] = per[x.f.correu] || []).push(x); });
const resum = {};
Object.keys(per).forEach(correu => {
  const codis = per[correu].map(x => ({ quan: quan(x.p), mapa: mapaEstats(x.p) }))
    .sort((a, b) => a.quan - b.quan);
  const vist = {}, compte = {};
  codis.forEach(c => Object.keys(c.mapa).forEach(k => {
    if (vist[k]) return;
    vist[k] = 1;
    const t = tramDe(c.quan);
    compte[t] = (compte[t] || 0) + 1;
  }));
  resum[correu] = { compte, nCodis: codis.length };
  console.log("    %-22s codis=%d  trams=%s", correu, codis.length,
    JSON.stringify(compte));
});

const berta = resum["berta@escola.cat"];
comprova("berta té feina als 3 trams",
  [0, 1, 2].every(t => berta.compte[t] > 0), JSON.stringify(berta.compte));
comprova("berta arriba a 10 per tram al tram 2", berta.compte[2] >= 10,
  String(berta.compte[2]));
const nil = resum["nil@escola.cat"];
comprova("nil només envia 1 codi", nil.nCodis === 1);
/* Abans això deia «tota la feina de nil cau en un sol tram», i era veritat:
   amb un sol codi no hi havia manera de saber quan s'havia fet cada cosa.
   Ara el codi porta la data del primer intent de cada exercici, i la
   propietat que val la pena vigilar és la contrària. */
const nilExacte = {};
bons.filter(x => x.f.correu === "nil@escola.cat").forEach(x => x.p.fulls.forEach(f => f.items.forEach(it => {
  if (!it.feta) return;
  const t = CAL.tramExacte(it.feta);
  nilExacte[t] = (nilExacte[t] || 0) + 1;
})));
comprova("tot i així, amb les dates del codi la seva feina es reparteix pels tres trams",
  nilExacte[0] === 10 && nilExacte[1] === 11 && nilExacte[2] === 12, JSON.stringify(nilExacte));
const laia = {};
bons.filter(x => x.f.correu === "laia@escola.cat").slice(-1).forEach(x => x.p.fulls.forEach(f => f.items.forEach(it => {
  if (!it.feta) return;
  const t = CAL.tramExacte(it.feta);
  laia[t] = (laia[t] || 0) + 1;
})));
comprova("laia passa de 20 al tram 3 (hi ha un cas del màxim)", laia[2] > 20, JSON.stringify(laia));
const ona = resum["ona@escola.cat"];
comprova("ona no arriba al mínim al tram 2", (ona.compte[2] || 0) < 10,
  String(ona.compte[2]));
const jordi = resum["jordi@escola.cat"];
comprova("jordi conserva 2 codis bons (un manipulat)", jordi.nCodis === 2);

/* ── 4. l'examen del tram 3 només té la feina del tram 3 ─────────────────── */
console.log("\n== la feina de cada alumne al tram 3, per data exacta ==");
let ambCinc = 0;
Object.keys(per).forEach(correu => {
  const ultim = per[correu].slice(-1)[0];
  let n = 0;
  ultim.p.fulls.forEach(f => f.items.forEach(it => { if (it.feta && CAL.tramExacte(it.feta) === 2) n++; }));
  if (Math.min(n, 20) >= 5) ambCinc++;
});
comprova("5 dels 6 alumnes tenen prou feina al tram 3 per a 5 preguntes (ona no)",
  ambCinc === 5, ambCinc + " de 6");

console.log("\n" + (fallades ? fallades + " FALLADES" : "tot correcte"));
process.exit(fallades ? 1 : 0);
