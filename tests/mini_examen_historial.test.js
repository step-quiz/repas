/* Prova de l'historial: què va fer cada alumne, i quan.

   És la peça més delicada del mini-examen. El tram el tria el professor amb
   dues dates, i fa esborrar els codis l'endemà de cada examen, de manera que
   cada tram comença de zero. L'historial i `feinaDelPeriode` han de respectar
   quatre regles (vegeu la capçalera del mini-examen a la plantilla):

     1. la feina d'un tram són els exercicis que tenen la data del primer
        intent entre les dues dates;
     2. un exercici refet més tard, després d'esborrar, és una altra feina:
        compta al tram on cau la data nova, amb el resultat nou, i la
        d'abans no es mou;
     3. si dins del tram triat hi és dues vegades, compta un sol cop, amb la
        primera data i el primer resultat;
     4. els codis sense dates (RC1-RC3) no compten per a cap tram.

   Aquí es fabriquen codis sintètics amb dates conegudes i es comprova que
   cada exercici acabi on li toca. */
const fs = require("fs");
const path = require("path");
const ARREL = path.join(__dirname, "..");
const src = fs.readFileSync(
  path.join(ARREL, "tools", "analitzador-plantilla.html"), "utf8");

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
function quan(p) { return p.quan; }
function mapaEstats(p) { return p.mapa; }
/* El calendari del curs, el mateix que fa servir l'aplicació. */
global.window = global.window || {};
require(path.join(ARREL, "js", "calendari.js"));
const RE_CALENDARI = global.window.RE_CALENDARI;


eval(["historialAlumnes", "feinaDelPeriode"].map(extreu).join("\n")
   + "\nglobalThis.historialAlumnes = historialAlumnes;"
   + "globalThis.feinaDelPeriode = feinaDelPeriode;");

let fallades = 0;
const comprova = (nom, cond, detall) => {
  if (!cond) { fallades++; console.log("  FALLA  " + nom + (detall ? " — " + detall : "")); }
  else console.log("  ok     " + nom);
};

const L = RE_CALENDARI.llista();
/* El dia `n` del tram `t`. Les dates dels exercicis arriben a migdia, que és
   com les torna el codi; les dels enviaments, a l'hora que sigui. */
const hora = (t, n, h) => { const d = new Date(L[t].inici.getTime() + n * 86400000); d.setHours(h, 0, 0, 0); return d; };
const dia = (t, n) => hora(t, n, 12);

/* Un codi amb dates (RC4). `fets` és una llista de [id, data, ordre, estat]. */
function codi(quan, fets, qui) {
  const mapa = {};
  fets.forEach(([id, d, o, e]) => { mapa["7:" + id] = { e: e || "net", d: 2, f: d || null, o: o || 0 }; });
  return { p: { ok: true, integre: true, quan: quan, mapa: mapa, dates: { finestra: 84 } },
           brut: { alumne: "Alumne " + (qui || "a").toUpperCase(), correu: (qui || "a") + "@x.cat", grup: "4A" } };
}
/* Un codi antic (RC1-RC3): estats, però cap data. */
function codiAntic(quan, ids) {
  const mapa = {};
  ids.forEach(id => { mapa["7:" + id] = { e: "net", d: 2, f: null, o: 0 }; });
  return { p: { ok: true, integre: true, quan: quan, mapa: mapa },
           brut: { alumne: "Alumne A", correu: "a@x.cat", grup: "4A" } };
}
/* El tram són dues dates. Per poder dir «el tram 1» a les proves, es tria
   com a tram les tres setmanes del tram `t` de l'antic calendari. */
const fiDe = t => { const x = new Date(L[t].fi.getTime()); x.setHours(23, 59, 59, 999); return x; };
const feinaDelTram = (items, t, max) => feinaDelPeriode(items, L[t].inici, fiDe(t), max);
const alTram = (h, t) => feinaDelTram(h.items, t, 999).tots;
const de = (h, id, t) => alTram(h, t).filter(it => it.id === id)[0];
const ids = llista => llista.map(it => it.id).join(",");

console.log("\n== un sol codi diu de quin tram és cada exercici ==");
files = [codi(hora(2, 19, 18), [["1a", dia(0, 3), 0], ["2a", dia(1, 2), 1], ["3a", dia(2, 5), 2]])];
let h = historialAlumnes()[0];
comprova("un sol codi al final i cada exercici va al seu tram",
  !!de(h, "1a", 0) && !!de(h, "2a", 1) && !!de(h, "3a", 2) && h.items.length === 3);
comprova("i són de data exacta", h.items.every(it => it.precisio === "exacta"));

console.log("\n== diversos codis dins d'un mateix tram ==");
files = [
  codi(hora(0, 10, 18), [["1a", dia(0, 3), 0], ["1b", dia(0, 9), 1]]),
  codi(hora(0, 19, 18), [["1a", dia(0, 3), 0], ["1b", dia(0, 9), 1], ["1c", dia(0, 15), 2]]),
  codi(hora(0, 19, 19), [["1a", dia(0, 3), 0], ["1b", dia(0, 9), 1], ["1c", dia(0, 15), 2]])  /* reenviat */
];
h = historialAlumnes()[0];
comprova("tres codis, tres exercicis i cap de duplicat",
  h.items.length === 3 && alTram(h, 0).length === 3, h.items.length + " ítems");
files = [codi(hora(0, 5, 13), [["6a", dia(0, 5), 0]]),
         codi(hora(0, 5, 20), [["6a", dia(0, 5), 0], ["6b", dia(0, 5), 1]])];
h = historialAlumnes()[0];
comprova("l'ordre dins d'un dia ve del codi més recent",
  ids(feinaDelTram(h.items, 0, 20).ultims) === "6a,6b", ids(feinaDelTram(h.items, 0, 20).ultims));

console.log("\n== cada tram comença de zero ==");
/* Tram 1: fa 1a (fallat) i 1b. L'endemà de l'examen ho esborra tot. Tram 2:
   torna a fer 1a, ara bé, i fa 2a. El codi del tram 2 ja no porta res del 1. */
files = [
  codi(hora(0, 19, 18), [["1a", dia(0, 3), 0, "fallat"], ["1b", dia(0, 9), 1, "pista"]]),
  codi(hora(1, 19, 18), [["1a", dia(1, 4), 0, "net"], ["2a", dia(1, 8), 1, "net"]])
];
h = historialAlumnes()[0];
comprova("un exercici refet després d'esborrar és feina del tram nou", !!de(h, "1a", 1));
comprova("i hi compta amb el resultat que hi té, no amb el d'abans d'esborrar",
  de(h, "1a", 1) && de(h, "1a", 1).estat === "net", (de(h, "1a", 1) || {}).estat);
comprova("el tram anterior no es mou: l'exercici hi segueix, amb la data i el resultat d'aleshores",
  !!de(h, "1a", 0) && de(h, "1a", 0).estat === "fallat"
  && de(h, "1a", 0).quan.getTime() === dia(0, 3).getTime());
comprova("la feina de cada tram és la d'aquelles tres setmanes i prou",
  ids(feinaDelTram(h.items, 0, 20).ultims) === "1a,1b"
  && ids(feinaDelTram(h.items, 1, 20).ultims) === "1a,2a",
  ids(feinaDelTram(h.items, 0, 20).ultims) + " | " + ids(feinaDelTram(h.items, 1, 20).ultims));
files.push(codi(hora(2, 19, 18), [["1a", dia(2, 2), 0, "segon"]]));
h = historialAlumnes()[0];
comprova("un tercer cop, al tram 3, tampoc no toca els dos anteriors",
  de(h, "1a", 0).estat === "fallat" && de(h, "1a", 1).estat === "net" && de(h, "1a", 2).estat === "segon");

console.log("\n== qui s'oblida d'esborrar ==");
files = [
  codi(hora(0, 19, 18), [["1a", dia(0, 3), 0], ["1b", dia(0, 9), 1]]),
  codi(hora(1, 19, 18), [["1a", dia(0, 3), 0], ["1b", dia(0, 9), 1], ["2a", dia(1, 8), 2]])
];
h = historialAlumnes()[0];
comprova("porta la feina del tram anterior al codi, i no es barreja amb la del nou",
  alTram(h, 0).length === 2 && ids(alTram(h, 1)) === "2a" && h.items.length === 3);

console.log("\n== esborrar a mig tram i tornar-ho a fer ==");
files = [
  codi(hora(0, 6, 18), [["4a", dia(0, 5), 0, "fallat"], ["4b", dia(0, 5), 1, "pistes"]]),
  codi(hora(0, 16, 18), [["4a", dia(0, 15), 0, "net"], ["4b", dia(0, 15), 1, "net"], ["4c", dia(0, 15), 2, "net"]])
];
h = historialAlumnes()[0];
comprova("cada exercici compta un sol cop", alTram(h, 0).length === 3, alTram(h, 0).length + "");
comprova("amb el primer resultat (un fallat acabat més tard val, com a molt, un segon intent)",
  de(h, "4a", 0).estat === "segon" && de(h, "4b", 0).estat === "pistes",
  de(h, "4a", 0).estat + " " + de(h, "4b", 0).estat);
comprova("i amb la primera data: refer-lo no el fa més recent",
  de(h, "4a", 0).quan.getTime() === dia(0, 5).getTime()
  && ids(feinaDelTram(h.items, 0, 20).ultims) === "4a,4b,4c", ids(feinaDelTram(h.items, 0, 20).ultims));
comprova("però si el tram triat comença després de la primera vegada, compta la segona",
  feinaDelPeriode(h.items, dia(0, 10), fiDe(0), 20).tots.filter(it => it.id === "4a")[0].estat === "net");

console.log("\n== els codis sense dates no compten per a cap tram ==");
files = [codiAntic(hora(0, 2, 9), ["1a", "1b", "1c"])];
h = historialAlumnes()[0];
comprova("no posen cap exercici a cap tram", h.items.length === 0, h.items.length + " ítems");
comprova("però l'alumne hi és, i se sap quants exercicis porta el codi i de quan és",
  h.senseDates === 1 && h.antics === 3 && h.darrerAntic.getTime() === hora(0, 2, 9).getTime());
/* El cas del setembre de 2026: codi antic, esborrat, i codi nou amb dates. */
files = [codiAntic(hora(0, 2, 9), ["1a", "1b", "1c"]),
         codi(hora(0, 17, 22), [["1a", dia(0, 16), 0, "pista"], ["9a", dia(0, 17), 1, "net"]])];
h = historialAlumnes()[0];
comprova("després d'un codi antic, el tram és només el que porta data",
  ids(alTram(h, 0)) === "1a,9a" && h.items.length === 2, ids(alTram(h, 0)));
comprova("i el resultat és el del codi amb dates", de(h, "1a", 0).estat === "pista");

console.log("\n== exercicis que no són de cap tram ==");
files = [codi(hora(0, 10, 18), [["9a", null, 0]])];
h = historialAlumnes()[0];
comprova("un exercici que arriba sense data en un codi RC4 no s'atribueix a cap tram",
  h.items.length === 1 && h.items[0].precisio === "desconeguda" && alTram(h, 0).length === 0);
files = [codi(hora(0, 10, 18), [["9a", dia(0, 4), 0]]), codi(hora(5, 10, 18), [["9a", null, 0]])];
h = historialAlumnes()[0];
comprova("si un codi anterior ja l'havia datat, és el mateix exercici i no se'n fa cap altre",
  h.items.length === 1 && alTram(h, 0).length === 1, h.items.length + " ítems");
files = [codi(hora(1, 3, 18), [["5a", dia(0, 23), 0], ["5b", dia(1, 1), 1]])];
h = historialAlumnes()[0];
comprova("un exercici només compta en un tram que inclogui el seu dia",
  alTram(h, 0).length === 0 && ids(alTram(h, 1)) === "5b" && h.items.length === 2);
comprova("i el dia 7/10, que abans era de descans, compta si el tram triat l'inclou",
  ids(feinaDelPeriode(h.items, new Date(2026, 8, 21), new Date(2026, 9, 11, 23, 59, 59, 999), 99).tots) === "5a");

console.log("\n== dos alumnes no es barregen, i els codis manipulats queden fora ==");
files = [codi(hora(0, 10, 18), [["1a", dia(0, 3), 0]]), codi(hora(0, 10, 18), [["5a", dia(0, 3), 0]], "b")];
const dos = historialAlumnes();
comprova("surten 2 alumnes", dos.length === 2, dos.length + "");
comprova("cadascun amb el seu exercici", dos.every(a => a.items.length === 1));
files = [
  codi(hora(0, 10, 18), [["1a", dia(0, 3), 0]]),
  { p: { ok: true, integre: false, quan: hora(0, 12, 18), dates: { finestra: 84 },
         mapa: { "7:9z": { e: "net", d: 2, f: dia(0, 11), o: 0 } } },
    brut: { alumne: "Alumne A", correu: "a@x.cat" } }
];
h = historialAlumnes()[0];
comprova("el codi manipulat s'ignora, i es compta com a descartat",
  h.items.length === 1 && h.descartats === 1, h.items.length + " ítems");

console.log("\n" + (fallades ? fallades + " FALLADES" : "tot correcte"));
process.exit(fallades ? 1 : 0);
