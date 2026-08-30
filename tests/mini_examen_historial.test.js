/* Prova de la reconstrucció de trams a partir de codis successius.

   És la peça més delicada de tot el mini-examen: el codi no diu quan es va
   fer cada exercici, i la data s'ha de deduir comparant fotografies
   acumulatives. Aquí es fabriquen codis sintètics amb dates conegudes i es
   comprova que cada exercici acabi al tram que li toca. */
const fs = require("fs");
const src = fs.readFileSync(
  "/home/claude/repas/repas-main/tools/analitzador-plantilla.html", "utf8");

function extreu(nom) {
  const i = src.indexOf("  function " + nom + "(");
  if (i < 0) throw new Error("no trobada: " + nom);
  let n = 0, k = src.indexOf("{", i);
  do { if (src[k] === "{") n++; else if (src[k] === "}") n--; k++; }
  while (n > 0 && k < src.length);
  return src.slice(i, k);
}

/* Entorn mínim: només el que toquen les funcions provades. */
let files = [];
const RE_BANC = new Proxy({}, { get: () => ({ ex: 1 }), has: () => true });
function quan(p) { return p.quan; }
function mapaEstats(p) { return p.mapa; }
const $ = sel => stub[sel];
const stub = {
  "#lot-setmanes": { value: "3" },
  "#lot-inici": { value: "2026-09-14" }
};

eval(extreu("historialAlumnes") + "\n" + extreu("msTram") + "\n"
   + extreu("iniciCurs") + "\n" + extreu("tramDe")
   + "\nglobalThis.historialAlumnes = historialAlumnes;"
   + "globalThis.tramDe = tramDe; globalThis.iniciCurs = iniciCurs;");

let fallades = 0;
const comprova = (nom, cond, detall) => {
  if (!cond) { fallades++; console.log("  FALLA  " + nom + (detall ? " — " + detall : "")); }
  else console.log("  ok     " + nom);
};

const inici = iniciCurs();
const dia = n => new Date(inici.getTime() + n * 86400000);

/* Un alumne que envia el codi al final de cada tram de 3 setmanes.
   Els codis són ACUMULATIUS: cadascun conté tot l'anterior. */
function codi(quan, ids) {
  const mapa = {};
  ids.forEach(id => { mapa["7:" + id] = { e: "net", d: 2 }; });
  return { p: { ok: true, integre: true, quan: quan, mapa: mapa },
           brut: { alumne: "Alumne A", correu: "a@x.cat", grup: "4A" } };
}

console.log("\n== alumne que envia el codi cada tram ==");
files = [
  codi(dia(20), ["1a", "1b", "1c"]),
  codi(dia(41), ["1a", "1b", "1c", "2a", "2b"]),
  codi(dia(62), ["1a", "1b", "1c", "2a", "2b", "3a"])
];
let h = historialAlumnes()[0];
const tram = {};
h.items.forEach(it => { tram[it.id] = tramDe(it.quan, inici); });
comprova("1a al tram 0", tram["1a"] === 0, "surt " + tram["1a"]);
comprova("1c al tram 0", tram["1c"] === 0);
comprova("2a al tram 1", tram["2a"] === 1, "surt " + tram["2a"]);
comprova("2b al tram 1", tram["2b"] === 1);
comprova("3a al tram 2", tram["3a"] === 2, "surt " + tram["3a"]);
comprova("cap exercici duplicat", h.items.length === 6, h.items.length + " ítems");

console.log("\n== un exercici NO canvia de tram en reenviar el codi ==");
files = files.concat([codi(dia(62), ["1a", "1b", "1c", "2a", "2b", "3a"])]);
h = historialAlumnes()[0];
const t2 = {};
h.items.forEach(it => { t2[it.id] = tramDe(it.quan, inici); });
comprova("1a segueix al tram 0", t2["1a"] === 0, "surt " + t2["1a"]);
comprova("no s'han duplicat ítems", h.items.length === 6, h.items.length + " ítems");

console.log("\n== alumne que només envia un codi al final ==");
files = [codi(dia(62), ["1a", "1b", "2a", "3a"])];
h = historialAlumnes()[0];
const t3 = new Set(h.items.map(it => tramDe(it.quan, inici)));
comprova("tot cau en un sol tram", t3.size === 1 && t3.has(2),
  "trams: " + [...t3].join(","));
comprova("s'hi detecta que només hi ha un codi", h.nCodis === 1, "nCodis=" + h.nCodis);

console.log("\n== l'alumne perd les dades i el codi següent en porta menys ==");
files = [
  codi(dia(20), ["1a", "1b", "1c"]),
  codi(dia(41), ["9a"])                     /* torna a començar */
];
h = historialAlumnes()[0];
comprova("no es perd el que ja s'havia vist", h.items.length === 4,
  h.items.length + " ítems");
const t4 = {};
h.items.forEach(it => { t4[it.id] = tramDe(it.quan, inici); });
comprova("1a conserva el seu tram original", t4["1a"] === 0, "surt " + t4["1a"]);
comprova("9a va al tram del seu enviament", t4["9a"] === 1, "surt " + t4["9a"]);

console.log("\n== dos alumnes no es barregen ==");
files = [
  codi(dia(20), ["1a"]),
  { p: { ok: true, integre: true, quan: dia(20), mapa: { "7:5a": { e: "net", d: 2 } } },
    brut: { alumne: "Alumne B", correu: "b@x.cat", grup: "4A" } }
];
const dos = historialAlumnes();
comprova("surten 2 alumnes", dos.length === 2, dos.length + "");
comprova("cadascun amb el seu exercici",
  dos.every(a => a.items.length === 1));

console.log("\n== codis no íntegres queden fora ==");
files = [
  codi(dia(20), ["1a"]),
  { p: { ok: true, integre: false, quan: dia(41), mapa: { "7:9z": { e: "net", d: 2 } } },
    brut: { alumne: "Alumne A", correu: "a@x.cat" } }
];
h = historialAlumnes()[0];
comprova("el codi manipulat s'ignora", h.items.length === 1, h.items.length + " ítems");

console.log("\n" + (fallades ? fallades + " FALLADES" : "tot correcte"));
process.exit(fallades ? 1 : 0);
