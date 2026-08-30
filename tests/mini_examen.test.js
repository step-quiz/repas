/* Prova de la lògica del mini-examen, extreta de la plantilla i executada
   amb node. No cal DOM: es proven les funcions pures. */
const fs = require("fs");
const src = fs.readFileSync(
  "/home/claude/repas/repas-main/tools/analitzador-plantilla.html", "utf8");

/* S'extreu el bloc de funcions que no toquen el DOM. */
function extreu(nom) {
  const i = src.indexOf("  function " + nom + "(");
  if (i < 0) throw new Error("no trobada: " + nom);
  let n = 0, j = src.indexOf("{", i), k = j;
  do {
    if (src[k] === "{") n++;
    else if (src[k] === "}") n--;
    k++;
  } while (n > 0 && k < src.length);
  return src.slice(i, k);
}

const codi = ["tramsElegibles", "pesAtzar", "sortejaPreguntes", "exMare"]
  .map(extreu).join("\n");
const RE_BANC = {};
eval(codi + "\nglobalThis.tramsElegibles = tramsElegibles;"
   + "globalThis.pesAtzar = pesAtzar;"
   + "globalThis.sortejaPreguntes = sortejaPreguntes;");

let fallades = 0;
function comprova(nom, cond, detall) {
  if (!cond) { fallades++; console.log("  FALLA  " + nom + (detall ? " — " + detall : "")); }
  else console.log("  ok     " + nom);
}

console.log("\n== trams elegibles i reinici de trimestre ==");
const P = [3, 2, 1], PT = 3;
comprova("tram 0: només ell mateix",
  JSON.stringify(tramsElegibles(0, PT, P)) === JSON.stringify([{ tram: 0, pes: 3 }]));
comprova("tram 1: ell i l'anterior",
  tramsElegibles(1, PT, P).map(x => x.tram).join(",") === "1,0");
comprova("tram 2: els tres del trimestre",
  tramsElegibles(2, PT, P).map(x => x.tram).join(",") === "2,1,0");
comprova("tram 3 (trimestre nou): torna a zero",
  JSON.stringify(tramsElegibles(3, PT, P)) === JSON.stringify([{ tram: 3, pes: 3 }]),
  JSON.stringify(tramsElegibles(3, PT, P)));
comprova("tram 4: ell i el 3, mai el 2",
  tramsElegibles(4, PT, P).map(x => x.tram).join(",") === "4,3");
comprova("tram 5: els tres del 2n trimestre",
  tramsElegibles(5, PT, P).map(x => x.tram).join(",") === "5,4,3");
comprova("tram 6: trimestre 3, torna a zero",
  tramsElegibles(6, PT, P).map(x => x.tram).join(",") === "6");

console.log("\n== proporció del sorteig (10.000 tirades de 5) ==");
const perTram = { 2: [], 1: [], 0: [] };
for (let t = 0; t <= 2; t++)
  for (let i = 0; i < 40; i++) perTram[t].push({ id: "e" + t + "_" + i, estat: "net", dif: 2 });
const eleg = tramsElegibles(2, PT, P);
const compte = { 0: 0, 1: 0, 2: 0 };
let totalPreg = 0;
for (let n = 0; n < 10000; n++) {
  sortejaPreguntes(perTram, eleg, 5).forEach(q => { compte[q.tram]++; totalPreg++; });
}
const pct = t => (100 * compte[t] / totalPreg).toFixed(1);
console.log("    últim tram   %s %%  (esperat 50,0)", pct(2));
console.log("    penúltim     %s %%  (esperat 33,3)", pct(1));
console.log("    antepenúltim %s %%  (esperat 16,7)", pct(0));
comprova("últim ~50 %", Math.abs(pct(2) - 50) < 1.5, pct(2));
comprova("penúltim ~33 %", Math.abs(pct(1) - 33.3) < 1.5, pct(1));
comprova("antepenúltim ~17 %", Math.abs(pct(0) - 16.7) < 1.5, pct(0));
comprova("sempre surten 5 preguntes", totalPreg === 50000, String(totalPreg));

console.log("\n== cap combinació és impossible ==");
const vistes = new Set();
for (let n = 0; n < 20000; n++) {
  vistes.add(sortejaPreguntes(perTram, eleg, 5)
    .map(q => q.tram).sort().join(""));
}
comprova("surt alguna tirada amb les 5 de l'últim tram", vistes.has("22222"));
comprova("surt alguna tirada amb les 5 de l'antepenúltim", vistes.has("00000"),
  "combinacions vistes: " + vistes.size);

console.log("\n== un tram buit no escurça l'examen ==");
const buit = { 2: perTram[2].slice(), 1: [], 0: perTram[0].slice() };
let curts = 0;
for (let n = 0; n < 500; n++) if (sortejaPreguntes(buit, eleg, 5).length < 5) curts++;
comprova("500 tirades, cap examen curt", curts === 0, curts + " de curts");

console.log("\n== no repeteix exercici mare si pot evitar-ho ==");
const mares = { 0: [], 1: [], 2: [] };
for (let t = 0; t <= 2; t++)
  for (let i = 0; i < 8; i++)
    mares[t].push({ id: (100 + i) + "abcdefgh"[i % 8], estat: "net", dif: 2 });
let repes = 0;
for (let n = 0; n < 500; n++) {
  const q = sortejaPreguntes(mares, eleg, 5).map(x => String(x.it.id).match(/^\d+/)[0]);
  if (new Set(q).size !== q.length) repes++;
}
comprova("500 tirades sense repetir mare", repes === 0, repes + " amb repetició");

console.log("\n" + (fallades ? fallades + " FALLADES" : "tot correcte"));
process.exit(fallades ? 1 : 0);
