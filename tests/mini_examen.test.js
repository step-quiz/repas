/* Prova de la lògica del mini-examen estàndard, extreta de la plantilla i
   executada amb node. No cal DOM: es proven les funcions pures.

   Les tres regles que es vigilen aquí són les que va fixar el professorat:
     1. l'examen d'un tram surt NOMÉS dels exercicis fets entre les dues
        dates del tram, que tria el professor cada vegada;
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


eval(["sortejaPreguntes", "sortejaPerBlocs", "reparteix", "exMare", "feinaDelPeriode"].map(extreu).join("\n")
  + "\nglobalThis.sortejaPreguntes = sortejaPreguntes; globalThis.reparteix = reparteix;"
  + "globalThis.sortejaPerBlocs = sortejaPerBlocs;"
  + "globalThis.feinaDelPeriode = feinaDelPeriode;");

let fallades = 0;
function comprova(nom, cond, detall) {
  if (!cond) { fallades++; console.log("  FALLA  " + nom + (detall ? " — " + detall : "")); }
  else console.log("  ok     " + nom);
}

const L = RE_CALENDARI.llista();
const dia = (t, d, h) => { const x = new Date(L[t].inici.getTime() + d * 86400000); x.setHours(12, 0, 0, 0); return x; };
/* El tram són dues dates, les que posi el professor. Per poder dir «el tram
   1» a les proves, `feinaDelTram(…, t, …)` tria com a tram les tres setmanes
   del tram `t` de l'antic calendari, que és on cauen les dades de prova. */
const fiDe = t => { const x = new Date(L[t].fi.getTime()); x.setHours(23, 59, 59, 999); return x; };
const feinaDelTram = (items, t, max) => feinaDelPeriode(items, L[t].inici, fiDe(t), max);

console.log("\n== només entra la feina del tram examinat ==");
/* 15 exercicis al tram 0, 15 al tram 1 i 5 en una setmana de descans. */
const items = [];
for (let i = 0; i < 15; i++) items.push({ id: (100 + i) + "a", estat: "net", quan: dia(0, i), precisio: "exacta", codi: 0, ordre: i });
for (let i = 0; i < 15; i++) items.push({ id: (200 + i) + "a", estat: "net", quan: dia(1, i), precisio: "exacta", codi: 0, ordre: 100 + i });
for (let i = 0; i < 5; i++) items.push({ id: (300 + i) + "a", estat: "net", quan: dia(0, 22 + i), precisio: "exacta", codi: 0, ordre: 50 + i });
const f1 = feinaDelTram(items, 1, 20);
comprova("al tram 1 hi ha exactament els seus 15", f1.tots.length === 15, f1.tots.length + "");
comprova("cap és d'un tram anterior", f1.tots.every(it => /^2/.test(it.id)));
comprova("un tram que acaba el 4/10 no agafa res de la setmana següent",
  feinaDelTram(items, 0, 99).tots.length === 15 && feinaDelTram(items, 0, 99).tots.every(it => /^1/.test(it.id)));
/* Ja no hi ha trams fixos ni setmanes de descans: compta qualsevol dia que
   sigui entre les dues dates. Els tres exemples són els del professor. */
const entre = (a, b) => feinaDelPeriode(items, new Date(2026, a[1] - 1, a[0]),
  new Date(2026, b[1] - 1, b[0], 23, 59, 59, 999), 99).tots.length;
comprova("del 14/9 al 4/10: els 15 d'aquelles tres setmanes", entre([14, 9], [4, 10]) === 15, entre([14, 9], [4, 10]) + "");
comprova("del 21/9 al 4/10: només els 8 de les dues últimes", entre([21, 9], [4, 10]) === 8, entre([21, 9], [4, 10]) + "");
comprova("del 21/9 a l'11/10: aquests 8 i els 5 de la setmana següent, que abans era de descans",
  entre([21, 9], [11, 10]) === 13, entre([21, 9], [11, 10]) + "");
comprova("els dos dies dels extrems hi entren", entre([14, 9], [14, 9]) === 1 && entre([28, 9], [28, 9]) === 1);
comprova("amb les dates girades no hi entra res", entre([4, 10], [14, 9]) === 0);
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

/* Sense la data del primer intent, un exercici no és de cap tram. Abans els
   dels codis antics hi entraven amb la data de l'enviament («deduida»), i
   tota la feina d'abans d'esborrar acabava dins del tram. */
const senseData = [
  { id: "800a", estat: "net", quan: dia(0, 2), precisio: "deduida", codi: 0, ordre: 1 },
  { id: "801a", estat: "net", quan: null, precisio: "desconeguda", codi: 0, ordre: 2 },
  { id: "802a", estat: "net", quan: dia(0, 2), precisio: "exacta", codi: 0, ordre: 3 }
];
comprova("sense la data exacta, un exercici no entra a la feina de cap tram",
  feinaDelTram(senseData, 0, 20).tots.map(it => it.id).join(",") === "802a");

/* El mateix exercici dues vegades dins del tram: s'ha esborrat a mig tram i
   s'ha tornat a fer. */
const dosCops = [
  { full: 7, id: "900a", estat: "fallat", quan: dia(0, 3), precisio: "exacta", codi: 0, ordre: 0 },
  { full: 7, id: "900a", estat: "net", quan: dia(0, 10), precisio: "exacta", codi: 1, ordre: 0 },
  { full: 7, id: "901a", estat: "net", quan: dia(0, 10), precisio: "exacta", codi: 1, ordre: 1 }
];
const fd = feinaDelTram(dosCops, 0, 20);
comprova("un exercici que hi és dues vegades compta un sol cop, amb la primera data",
  fd.tots.length === 2 && fd.tots[0].id === "900a" && fd.tots[0].quan.getTime() === dia(0, 3).getTime());
comprova("i amb el primer resultat (fallat i acabat més tard: segon intent)", fd.tots[0].estat === "segon", fd.tots[0].estat);
comprova("sense tocar les fitxes de l'historial, que un altre tram ha de poder llegir", dosCops[0].estat === "fallat");
comprova("si el tram triat comença després de la primera vegada, compta la segona, amb el seu resultat",
  feinaDelPeriode(dosCops, dia(0, 5), fiDe(0), 20).tots.filter(it => it.id === "900a")[0].estat === "net");

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
