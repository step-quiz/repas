/* Prova d'extrem a extrem de l'exemple.

   Genera les dades de mostra amb el motor de codis de debò (js/codi.js i
   les taules reals), les torna a llegir com si vinguessin del full de
   respostes, i hi passa la reconstrucció de trams i el sorteig. Si això
   passa, el botó "Posa-hi un exemple" serveix per fer un mini-examen. */
const fs = require("fs");
const vm = require("vm");
const ARREL = "/home/claude/repas/repas-main/";
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
  RE_TAULES, RE_CODI, Date, Math, Object, console,
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
const INICI = new Date(2026, 8, 14);
const TRAM = 21 * 86400000;
const tramDe = d => Math.floor((d - INICI) / TRAM);
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
comprova("nil només té 1 codi (dispara avís)", nil.nCodis === 1);
comprova("tota la feina de nil cau en un sol tram",
  Object.keys(nil.compte).length === 1, JSON.stringify(nil.compte));
const ona = resum["ona@escola.cat"];
comprova("ona no arriba al mínim al tram 2", (ona.compte[2] || 0) < 10,
  String(ona.compte[2]));
const jordi = resum["jordi@escola.cat"];
comprova("jordi conserva 2 codis bons (un manipulat)", jordi.nCodis === 2);

/* ── 4. el sorteig produeix examen ─────────────────────────────────────── */
console.log("\n== el sorteig ==");
function tramsElegibles(obj, perTrim, pesos) {
  const trim = Math.floor(obj / perTrim), out = [];
  for (let i = 0; i < pesos.length; i++) {
    const t = obj - i;
    if (t < 0 || Math.floor(t / perTrim) !== trim) break;
    if (pesos[i] > 0) out.push({ tram: t, pes: pesos[i] });
  }
  return out;
}
const eleg = tramsElegibles(2, 3, [3, 2, 1]);
comprova("el tram 2 sorteja dels 3 trams", eleg.length === 3);
let ambExamen = 0;
Object.keys(resum).forEach(c => {
  const disponibles = eleg.reduce((n, e) => n + (resum[c].compte[e.tram] || 0), 0);
  if (disponibles >= 5) ambExamen++;
});
comprova("els 6 alumnes tenen prou exercicis per a 5 preguntes",
  ambExamen === 6, ambExamen + " de 6");

console.log("\n" + (fallades ? fallades + " FALLADES" : "tot correcte"));
process.exit(fallades ? 1 : 0);
