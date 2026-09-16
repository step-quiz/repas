/* Prova de la lògica del mini-examen de 3 setmanes, extreta de la plantilla i
   executada amb node. No cal DOM: es proven les funcions pures.

   Les tres regles que es vigilen aquí són les que va fixar el professorat:
     1. l'examen d'un tram surt NOMÉS dels exercicis fets en aquell tram;
     2. d'aquests, només compten els 20 primers, per ordre de quan es van fer;
     3. la nota de feina és min(10, 8·∛(x/10)), amb x = suma dels valors
        sobre 10 dels exercicis que compten. */
const fs = require("fs");
const path = require("path");
const ARREL = path.join(__dirname, "..");
const src = fs.readFileSync(
  path.join(ARREL, "tools", "analitzador-plantilla.html"), "utf8");

function extreu(nom) {
  const i = src.indexOf("  function " + nom + "(");
  if (i < 0) throw new Error("no trobada: " + nom);
  let n = 0, k = src.indexOf("{", i);
  do {
    if (src[k] === "{") n++;
    else if (src[k] === "}") n--;
    k++;
  } while (n > 0 && k < src.length);
  return src.slice(i, k);
}

global.window = global.window || {};
require(path.join(ARREL, "js", "calendari.js"));
const RE_CALENDARI = global.window.RE_CALENDARI;
eval(fs.readFileSync(path.join(ARREL, "js", "codi.js"), "utf8"));
const RE_CODI = global.window.RE_CODI;
const RE_BANC = {};
const calTrams = RE_CALENDARI.TRAMS.slice();
function tramDe(d) { return RE_CALENDARI.tramDe(d, calTrams); }

eval(["sortejaPreguntes", "exMare", "tramDeItem", "feinaDelTram"].map(extreu).join("\n")
  + "\nglobalThis.sortejaPreguntes = sortejaPreguntes;"
  + "globalThis.tramDeItem = tramDeItem; globalThis.feinaDelTram = feinaDelTram;");

let fallades = 0;
function comprova(nom, cond, detall) {
  if (!cond) { fallades++; console.log("  FALLA  " + nom + (detall ? " — " + detall : "")); }
  else console.log("  ok     " + nom);
}

const L = RE_CALENDARI.llista();
const dia = (t, d, h) => { const x = new Date(L[t].inici.getTime() + d * 86400000); x.setHours(12, 0, 0, 0); return x; };

console.log("\n== només entra la feina del tram examinat ==");
/* 15 exercicis al tram 0, 15 al tram 1 i 5 en una setmana de descans. */
const items = [];
for (let i = 0; i < 15; i++) items.push({ id: (100 + i) + "a", estat: "net", quan: dia(0, i), precisio: "exacta", codi: 0, ordre: i });
for (let i = 0; i < 15; i++) items.push({ id: (200 + i) + "a", estat: "net", quan: dia(1, i), precisio: "exacta", codi: 0, ordre: 100 + i });
for (let i = 0; i < 5; i++) items.push({ id: (300 + i) + "a", estat: "net", quan: dia(0, 22 + i), precisio: "exacta", codi: 0, ordre: 50 + i });
const f1 = feinaDelTram(items, 1, 20);
comprova("al tram 1 hi ha exactament els seus 15", f1.tots.length === 15, f1.tots.length + "");
comprova("cap és d'un tram anterior", f1.tots.every(it => /^2/.test(it.id)));
comprova("la setmana de descans no és de cap tram",
  items.filter(it => /^3/.test(it.id)).every(it => tramDeItem(it) === null));
let intrusos = 0;
for (let n = 0; n < 2000; n++) {
  sortejaPreguntes(f1.primers, 5).forEach(q => { if (!/^2/.test(q.it.id)) intrusos++; });
}
comprova("2.000 exàmens del tram 1, cap pregunta d'un altre tram", intrusos === 0, intrusos + " intrusos");

console.log("\n== només compten els 20 primers ==");
const molts = [];
for (let i = 0; i < 26; i++) {
  /* ordre desendreçat a posta: la llista no ve ordenada */
  const k = (i * 7) % 26;
  molts.push({ id: (400 + k) + "a", estat: "net", quan: dia(2, Math.floor(k / 2)), precisio: "exacta", codi: 0, ordre: k });
}
const f2 = feinaDelTram(molts, 2, 20);
comprova("se'n fan 26 i en compten 20", f2.tots.length === 26 && f2.primers.length === 20);
comprova("els que compten són els 20 primers per ordre de fet",
  f2.primers.map(it => it.ordre).join(",") === Array.from({ length: 20 }, (_, i) => i).join(","),
  f2.primers.map(it => it.ordre).join(","));
let fora = 0;
for (let n = 0; n < 2000; n++) {
  sortejaPreguntes(f2.primers, 5).forEach(q => { if (q.it.ordre >= 20) fora++; });
}
comprova("cap pregunta surt dels que passen de 20", fora === 0, fora + "");

console.log("\n== el sorteig ==");
comprova("sempre surten 5 preguntes si n'hi ha prou", sortejaPreguntes(f1.primers, 5).length === 5);
comprova("amb 3 exercicis surten 3, no se n'inventa cap", sortejaPreguntes(f1.primers.slice(0, 3), 5).length === 3);
const vist = new Set();
for (let n = 0; n < 3000; n++) sortejaPreguntes(f1.primers, 5).forEach(q => vist.add(q.it.id));
comprova("sortejant molt, tots els exercicis del tram hi poden sortir", vist.size === 15, vist.size + " de 15");
const mares = [];
for (let i = 0; i < 16; i++) mares.push({ id: (500 + (i % 8)) + "abcd"[i % 4], estat: "net" });
let repes = 0;
for (let n = 0; n < 500; n++) {
  const q = sortejaPreguntes(mares, 5).map(x => String(x.it.id).match(/^\d+/)[0]);
  if (new Set(q).size !== q.length) repes++;
}
comprova("500 tirades sense repetir exercici mare", repes === 0, repes + " amb repetició");

console.log("\n== la nota de feina ==");
const nota = (e, max) => RE_CODI.notaTram(e, max || 20).nota;
const rep = (e, k) => Array.from({ length: k }, () => e);
comprova("10 exercicis a la primera fan un 8", Math.abs(nota(rep("net", 10)) - 8) < 1e-9, nota(rep("net", 10)));
comprova("20 a la primera fan un 10", nota(rep("net", 20)) === 10);
comprova("més de 20 no passa de 10", nota(rep("net", 30)) === 10);
comprova("és la fórmula min(10, 8·∛(x/10))",
  [1, 5, 12, 17].every(k => Math.abs(nota(rep("net", k)) - Math.min(10, 8 * Math.cbrt(k / 10))) < 1e-9));
comprova("una primera pista gairebé no penalitza (10 amb una pista ≥ 7,8)", nota(rep("pista", 10)) >= 7.8, nota(rep("pista", 10)));
comprova("dues pistes penalitzen més que una", nota(rep("pistes", 10)) < nota(rep("pista", 10)));
comprova("però menys que un segon intent", nota(rep("pistes", 10)) > nota(rep("segon", 10)));
comprova("fer un exercici de més i fallar-lo no baixa la nota",
  nota(rep("net", 12).concat(["fallat"])) === nota(rep("net", 12)));
comprova("cada exercici encertat la fa pujar fins a 20",
  Array.from({ length: 19 }, (_, k) => k + 1).every(k => nota(rep("pista", k + 1)) > nota(rep("pista", k))));
comprova("només compten els 20 primers: el 21è fallat no fa res, i un 21è net tampoc no suma",
  nota(rep("segon", 20).concat(["net"])) === nota(rep("segon", 20)));
comprova("sense cap exercici, un 0", nota([]) === 0);

console.log("\n" + (fallades ? fallades + " FALLADES" : "tot correcte"));
process.exit(fallades ? 1 : 0);
