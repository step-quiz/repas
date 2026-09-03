/* Proves del calendari de trams i de l'avís de final de termini. */
"use strict";
const { assert, seccio, prova, resum } = require("./arnes.js");
const path = require("path");

/* Entorn mínim amb un localStorage de mentida, per provar el recompte
   d'avisos sense navegador. */
const magatzem = {};
global.window = {
  localStorage: {
    getItem: k => (k in magatzem ? magatzem[k] : null),
    setItem: (k, v) => { magatzem[k] = String(v); },
    removeItem: k => { delete magatzem[k]; }
  }
};
require(path.join(__dirname, "..", "js", "calendari.js"));
const C = global.window.RE_CALENDARI;
const dia = txt => { const p = txt.split("-"); return new Date(+p[0], +p[1] - 1, +p[2], 12); };

// ─────────────────────────────────────────────────────────────────────────
seccio("Els nou trams del curs");

prova("n'hi ha nou, en tres trimestres", () => {
  assert.strictEqual(C.TRAMS.length, 9);
  const L = C.llista();
  assert.deepStrictEqual(L.map(t => t.trimestre), [0, 0, 0, 1, 1, 1, 2, 2, 2]);
});

prova("tots duren 21 dies", () => {
  C.llista().forEach(t => {
    const d = Math.round((t.fi - t.inici) / 86400000) + 1;
    assert.strictEqual(d, 21, "el tram " + (t.i + 1) + " dura " + d + " dies");
  });
});

prova("tots van de dilluns a diumenge", () => {
  C.llista().forEach(t => {
    assert.strictEqual(t.inici.getDay(), 1, "tram " + (t.i + 1) + " no comença dilluns");
    assert.strictEqual(t.fi.getDay(), 0, "tram " + (t.i + 1) + " no acaba diumenge");
  });
});

prova("les dates són exactament les del curs", () => {
  assert.strictEqual(C.TRAMS[0][0], "2026-09-14");
  assert.strictEqual(C.TRAMS[2][1], "2026-11-29");
  assert.strictEqual(C.TRAMS[3][0], "2026-12-28");
  assert.strictEqual(C.TRAMS[8][1], "2027-05-23");
});

// ─────────────────────────────────────────────────────────────────────────
seccio("A quin tram cau una data");

prova("el primer i l'últim dia d'un tram hi pertanyen", () => {
  assert.strictEqual(C.tramDe(dia("2026-09-14")), 0);
  assert.strictEqual(C.tramDe(dia("2026-10-04")), 0);
  assert.strictEqual(C.tramDe(dia("2026-10-12")), 1);
  assert.strictEqual(C.tramDe(dia("2026-11-01")), 1);
});

prova("la setmana de descans va al tram que acaba de tancar", () => {
  /* 5-11 d'octubre: entre el tram 1 i el 2 */
  assert.strictEqual(C.tramDe(dia("2026-10-05")), 0);
  assert.strictEqual(C.tramDe(dia("2026-10-08")), 0);
  assert.strictEqual(C.tramDe(dia("2026-10-11")), 0);
});

prova("Nadal va al tram 3, no al 4", () => {
  assert.strictEqual(C.tramDe(dia("2026-12-01")), 2);
  assert.strictEqual(C.tramDe(dia("2026-12-24")), 2);
  assert.strictEqual(C.tramDe(dia("2026-12-27")), 2);
  assert.strictEqual(C.tramDe(dia("2026-12-28")), 3);
});

prova("el tercer trimestre va encadenat, sense forats", () => {
  assert.strictEqual(C.tramDe(dia("2027-04-11")), 6);
  assert.strictEqual(C.tramDe(dia("2027-04-12")), 7);
  assert.strictEqual(C.tramDe(dia("2027-05-02")), 7);
  assert.strictEqual(C.tramDe(dia("2027-05-03")), 8);
});

prova("abans del curs va al primer tram i després, a l'últim", () => {
  assert.strictEqual(C.tramDe(dia("2026-08-30")), 0);
  assert.strictEqual(C.tramDe(dia("2027-07-01")), 8);
});

prova("un càlcul aritmètic hi fallaria (per això hi ha la taula)", () => {
  /* Amb `floor((data - 14/9) / 21 dies)`, el 8 de novembre seria del tram 2
     quan de fet és festa i pertany al tram 2 igualment... però el 9 de
     novembre seria del 3 aritmètic i del 3 real: la divergència apareix al
     segon trimestre, on el forat de Nadal desplaça tots els trams. */
  const aritmetic = d => Math.floor((d - dia("2026-09-14")) / (21 * 86400000));
  assert.notStrictEqual(aritmetic(dia("2027-01-25")), C.tramDe(dia("2027-01-25")),
    "l'aritmètica i el calendari coincidirien: la prova ja no vigila res");
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Tram en curs i dies que falten");

prova("dins d'un tram sap quants dies queden", () => {
  assert.strictEqual(C.diesFinsAlTancament(dia("2026-10-04")), 0);
  assert.strictEqual(C.diesFinsAlTancament(dia("2026-10-03")), 1);
  assert.strictEqual(C.diesFinsAlTancament(dia("2026-09-29")), 5);
});

prova("en un forat no hi ha cap tram en curs", () => {
  assert.strictEqual(C.tramEnCurs(dia("2026-10-07")), null);
  assert.strictEqual(C.diesFinsAlTancament(dia("2026-10-07")), null);
});

// ─────────────────────────────────────────────────────────────────────────
seccio("L'avís de final de termini");

const neteja = () => Object.keys(magatzem).forEach(k => delete magatzem[k]);

prova("no avisa quan falten més de 5 dies", () => {
  neteja();
  assert.strictEqual(C.toca(dia("2026-09-28")), null, "ha avisat amb 6 dies");
});

prova("avisa quan en falten exactament 5", () => {
  neteja();
  assert.ok(C.toca(dia("2026-09-29")), "no avisa amb 5 dies");
});

prova("avisa l'últim dia", () => {
  neteja();
  assert.ok(C.toca(dia("2026-10-04")));
});

prova("no avisa dues vegades el mateix dia", () => {
  neteja();
  const a = C.toca(dia("2026-10-01"));
  assert.ok(a);
  /* es registra com si s'hagués mostrat */
  magatzem["repas.avis.tram.0"] = JSON.stringify([a.avui]);
  assert.strictEqual(C.toca(dia("2026-10-01")), null, "repeteix el mateix dia");
});

prova("avisa un segon dia diferent", () => {
  neteja();
  magatzem["repas.avis.tram.0"] = JSON.stringify(["2026-10-01"]);
  const a = C.toca(dia("2026-10-02"));
  assert.ok(a, "no ha avisat el segon dia");
  assert.strictEqual(a.cop, 2);
});

prova("mai un tercer cop", () => {
  neteja();
  magatzem["repas.avis.tram.0"] = JSON.stringify(["2026-10-01", "2026-10-02"]);
  assert.strictEqual(C.toca(dia("2026-10-03")), null, "ha avisat un tercer cop");
  assert.strictEqual(C.toca(dia("2026-10-04")), null);
});

prova("el compte és per tram: el següent torna a avisar dos cops", () => {
  neteja();
  magatzem["repas.avis.tram.0"] = JSON.stringify(["2026-10-01", "2026-10-02"]);
  const a = C.toca(dia("2026-10-28"));      /* tram 2, hi falten 5 dies */
  assert.ok(a, "no avisa al tram següent");
  assert.strictEqual(a.tram.i, 1);
});

prova("en un forat no avisa de res", () => {
  neteja();
  assert.strictEqual(C.toca(dia("2026-10-07")), null);
  assert.strictEqual(C.toca(dia("2026-12-20")), null);
});

prova("el text diu quin tram és i quan es tanca", () => {
  neteja();
  const t = C.textAvis(C.toca(dia("2026-10-02")));
  assert.ok(/tram 1/.test(t), t);
  assert.ok(/04\/10/.test(t), t);
});

prova("diu «avui» l'últim dia i «demà» el penúltim", () => {
  neteja();
  assert.ok(/avui/.test(C.textAvis(C.toca(dia("2026-10-04")))));
  neteja();
  assert.ok(/demà/.test(C.textAvis(C.toca(dia("2026-10-03")))));
});

process.exit(resum() ? 0 : 1);
