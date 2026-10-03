/* Prova de la lògica del mini-examen de 3 setmanes, extreta de la plantilla i
   executada amb node. No cal DOM: es proven les funcions pures.

   Les tres regles que es vigilen aquí són les que va fixar el professorat:
     1. l'examen d'un tram surt NOMÉS dels exercicis fets en aquell tram;
     2. d'aquests, només compten els 20 últims, per ordre de quan es van fer;
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
const RE_BANC = {};   /* s'omple més avall per a les proves de blocs */
const calTrams = RE_CALENDARI.TRAMS.slice();
function tramDe(d) { return RE_CALENDARI.tramDe(d, calTrams); }

eval(["sortejaPreguntes", "sortejaPerBlocs", "reparteix", "exMare", "tramDeItem", "feinaDelTram"].map(extreu).join("\n")
  + "\nglobalThis.sortejaPreguntes = sortejaPreguntes; globalThis.reparteix = reparteix;"
  + "globalThis.sortejaPerBlocs = sortejaPerBlocs;"
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
  sortejaPreguntes(f1.ultims, 5).forEach(q => { if (!/^2/.test(q.it.id)) intrusos++; });
}
comprova("2.000 exàmens del tram 1, cap pregunta d'un altre tram", intrusos === 0, intrusos + " intrusos");

console.log("\n== només compten els 20 últims ==");
const molts = [];
for (let i = 0; i < 26; i++) {
  /* ordre desendreçat a posta: la llista no ve ordenada */
  const k = (i * 7) % 26;
  molts.push({ id: (400 + k) + "a", estat: "net", quan: dia(2, Math.floor(k / 2)), precisio: "exacta", codi: 0, ordre: k });
}
const f2 = feinaDelTram(molts, 2, 20);
comprova("se'n fan 26 i en compten 20", f2.tots.length === 26 && f2.ultims.length === 20);
comprova("els que compten són els 20 últims per ordre de fet, del més antic al més recent",
  f2.ultims.map(it => it.ordre).join(",") === Array.from({ length: 20 }, (_, i) => i + 6).join(","),
  f2.ultims.map(it => it.ordre).join(","));
let fora = 0;
const recents = new Set();
for (let n = 0; n < 2000; n++) {
  sortejaPreguntes(f2.ultims, 5).forEach(q => { if (q.it.ordre < 6) fora++; recents.add(q.it.ordre); });
}
comprova("cap pregunta surt dels 6 més antics, que ja no compten", fora === 0, fora + "");
comprova("i l'exercici més recent del tram hi pot sortir", recents.has(25) && recents.size === 20, recents.size + " de 20");
comprova("qui no arriba al màxim hi compta amb tot el que ha fet",
  feinaDelTram(items, 1, 20).ultims.length === 15);
comprova("amb el màxim a zero no en compta cap (slice(-0) els tornaria tots)",
  feinaDelTram(molts, 2, 0).ultims.length === 0);

/* Codis antics, sense dates: la data és la de l'enviament que porta
   l'exercici per primer cop i, dins d'un enviament, l'ordre és el de la
   taula. Els últims són, doncs, els de l'enviament més recent. */
const vells = [];
for (let i = 0; i < 30; i++) vells.push({ id: (800 + i) + "a", estat: "net", quan: dia(0, 2), precisio: "deduida", codi: 0, ordre: i + 1 });
for (let i = 0; i < 8; i++) vells.push({ id: (900 + i) + "a", estat: "net", quan: dia(0, 16), precisio: "deduida", codi: 1, ordre: i + 1 });
const f3 = feinaDelTram(vells, 0, 20);
comprova("amb dates deduïdes hi entren tots els de l'enviament més recent",
  f3.ultims.filter(it => /^9/.test(it.id)).length === 8, f3.ultims.map(it => it.id).join(","));
comprova("i es completa amb els últims de l'enviament anterior",
  f3.ultims.filter(it => /^8/.test(it.id)).map(it => it.ordre).join(",")
    === Array.from({ length: 12 }, (_, i) => i + 19).join(","),
  f3.ultims.map(it => it.id).join(","));

console.log("\n== el sorteig ==");
comprova("sempre surten 5 preguntes si n'hi ha prou", sortejaPreguntes(f1.ultims, 5).length === 5);
comprova("amb 3 exercicis surten 3, no se n'inventa cap", sortejaPreguntes(f1.ultims.slice(0, 3), 5).length === 3);
const vist = new Set();
for (let n = 0; n < 3000; n++) sortejaPreguntes(f1.ultims, 5).forEach(q => vist.add(q.it.id));
comprova("sortejant molt, tots els exercicis del tram hi poden sortir", vist.size === 15, vist.size + " de 15");
const mares = [];
for (let i = 0; i < 16; i++) mares.push({ id: (500 + (i % 8)) + "abcd"[i % 4], estat: "net" });
let repes = 0;
for (let n = 0; n < 500; n++) {
  const q = sortejaPreguntes(mares, 5).map(x => String(x.it.id).match(/^\d+/)[0]);
  if (new Set(q).size !== q.length) repes++;
}
comprova("500 tirades sense repetir exercici mare", repes === 0, repes + " amb repetició");

console.log("\n== mides i repartiment per blocs ==");
const MIDES = eval("(" + src.match(/var MIDES_PROVA = (\{[^}]*\})/)[1] + ")");
comprova("curta 2, mitjana 3, llarga 4", MIDES.curta === 2 && MIDES.mitja === 3 && MIDES.llarga === 4, JSON.stringify(MIDES));
const bl = (...ns) => ns.map(n => ({ fets: new Array(n).fill(0) }));
const rp = (ns, t) => reparteix(bl(...ns), t).join("+");
comprova("l'exemple: 10 del bloc A i 4 del B → curta 1+1", rp([10, 4], 2) === "1+1", rp([10, 4], 2));
comprova("mitjana 2+1", rp([10, 4], 3) === "2+1", rp([10, 4], 3));
comprova("llarga 2+2", rp([10, 4], 4) === "2+2", rp([10, 4], 4));
comprova("un sol bloc s'ho queda tot", rp([12], 4) === "4");
comprova("més blocs que preguntes: van als que tenen més feina", rp([2, 9, 5], 2) === "0+1+1", rp([2, 9, 5], 2));
comprova("un bloc no dona més del que té", rp([1, 10], 4) === "1+3", rp([1, 10], 4));
comprova("si no n'hi ha prou, surten les que hi ha", rp([1, 1], 4) === "1+1");
comprova("sempre suma la mida quan hi ha prou feina",
  [[3, 3, 3], [20, 1], [7, 5, 2, 1], [4, 4]].every(ns => [2, 3, 4].every(t => reparteix(bl(...ns), t).reduce((a, b) => a + b, 0) === t)));
/* 10 exercicis del bloc A i 4 del B, amb el banc de mentida */
const poolAB = [];
for (let i = 0; i < 10; i++) { RE_BANC["60" + i + "a"] = { bloc: "A" }; poolAB.push({ id: "60" + i + "a", full: 4 }); }
for (let i = 0; i < 4; i++) { RE_BANC["70" + i + "a"] = { bloc: "B" }; poolAB.push({ id: "70" + i + "a", full: 4 }); }
let malRepartit = 0;
for (let n = 0; n < 300; n++) {
  const q = sortejaPerBlocs(poolAB, 4).map(x => RE_BANC[x.it.id].bloc).sort().join("");
  if (q !== "AABB") malRepartit++;
}
comprova("el mini-examen llarg de l'exemple surt sempre AABB", malRepartit === 0, malRepartit + " de 300");

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
comprova("per sota del màxim, fer un exercici de més i fallar-lo no baixa la nota",
  nota(rep("net", 12).concat(["fallat"])) === nota(rep("net", 12)));
comprova("cada exercici encertat la fa pujar fins a 20",
  Array.from({ length: 19 }, (_, k) => k + 1).every(k => nota(rep("pista", k + 1)) > nota(rep("pista", k))));
comprova("només compten els 20 últims: un fallat antic surt del compte",
  nota(["fallat"].concat(rep("net", 20))) === 10);
comprova("el 21è fa sortir el més antic: un net després de 20 segons intents puja la nota",
  nota(rep("segon", 20).concat(["net"])) > nota(rep("segon", 20))
  && Math.abs(nota(rep("segon", 20).concat(["net"])) - nota(rep("segon", 19).concat(["net"]))) < 1e-12);
comprova("i per això, passat el màxim, un exercici fallat sí que pot baixar la nota",
  nota(rep("net", 20).concat(["fallat"])) < 10
  && Math.abs(nota(rep("net", 20).concat(["fallat"])) - nota(rep("net", 19))) < 1e-12);
comprova("sense cap exercici, un 0", nota([]) === 0);

console.log("\n== els valors per defecte i els textos ==");
const P = RE_CODI.PES;
comprova("a la primera 10 · una pista 9,5 · dues pistes o més 8,5 · segon intent 7,5 · fallat 0",
  P.net === 10 && P.pista === 9.5 && P.pistes === 8.5 && P.segon === 7.5 && P.fallat === 0, JSON.stringify(P));
comprova("la nota de feina els fa servir si no se li'n donen d'altres",
  Math.abs(RE_CODI.notaTram(["net", "pista", "pistes", "segon", "fallat"], 20).x - 3.55) < 1e-12);
/* Els valors viuen a RE_CODI.PES, però el panell de l'analitzador els porta
   escrits als camps i al text de sota. Si algú en toca un i no els altres,
   el professor veu una cosa i se li'n calcula una altra. */
const camp = id => parseFloat(((src.match(new RegExp('id="' + id + '" value="([^"]*)"')) || [])[1] || "").replace(",", "."));
comprova("els camps del panell surten amb aquests mateixos valors",
  camp("lot-v-pista") === P.pista && camp("lot-v-pistes") === P.pistes && camp("lot-v-segon") === P.segon,
  [camp("lot-v-pista"), camp("lot-v-pistes"), camp("lot-v-segon")].join(" · "));
const pla = src.replace(/\s+/g, " ");
const sobre10 = v => String(v / 10).replace(".", ",");
comprova("i el text de sota del panell diu el mateix que els camps",
  pla.indexOf("amb una pista " + sobre10(P.pista) + ", amb dues " + sobre10(P.pistes)
    + ", al segon intent " + sobre10(P.segon)) > 0);
comprova("cap text de l'analitzador no parla ja dels 20 primers",
  !/20 primers|primers exercicis|" primers/.test(src));
const ui = fs.readFileSync(path.join(ARREL, "js", "codi-ui.js"), "utf8");
comprova("i a l'alumne se li diu que compten els últims",
  /" últims\."/.test(ui) && !/" primers\."/.test(ui));

console.log("\n" + (fallades ? fallades + " FALLADES" : "tot correcte"));
process.exit(fallades ? 1 : 0);
