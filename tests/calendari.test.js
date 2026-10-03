/* Proves de js/calendari.js: la feina demanada per a cada examen i les dates
   de mostra que fan servir l'exemple de l'analitzador i les altres proves.

   Fins a l'octubre de 2026 aquest fitxer era el calendari del curs, i aquí
   es provava també l'avís de final de termini. Ja no hi ha trams fixos: el
   tram de cada examen el tria el professor amb dues dates. */
"use strict";
const { assert, seccio, prova, resum } = require("./arnes.js");
const path = require("path");

global.window = {};
require(path.join(__dirname, "..", "js", "calendari.js"));
const C = global.window.RE_CALENDARI;
const dia = txt => { const p = txt.split("-"); return new Date(+p[0], +p[1] - 1, +p[2], 12); };

// ─────────────────────────────────────────────────────────────────────────
seccio("Les dates de mostra: nou trams de tres setmanes");

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

prova("les dates no s'han mogut (l'exemple de l'analitzador i les proves hi compten)", () => {
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
seccio("A quin tram pertany la feina, amb la data exacta");

prova("la feina demanada és entre 10 i 20 exercicis", () => {
  assert.strictEqual(C.FEINA_MINIMA, 10);
  assert.strictEqual(C.FEINA_MAXIMA, 20);
});

prova("dins d'un tram, aquell tram", () => {
  assert.strictEqual(C.tramExacte(dia("2026-09-14")), 0);
  assert.strictEqual(C.tramExacte(dia("2026-10-04")), 0);
  assert.strictEqual(C.tramExacte(dia("2027-04-12")), 7);
});

prova("una setmana de descans no és de cap tram", () => {
  assert.strictEqual(C.tramExacte(dia("2026-10-07")), null);
  assert.strictEqual(C.tramExacte(dia("2026-12-24")), null);
});

prova("abans i després del curs, tampoc", () => {
  assert.strictEqual(C.tramExacte(dia("2026-08-30")), null);
  assert.strictEqual(C.tramExacte(dia("2027-07-01")), null);
});

// ─────────────────────────────────────────────────────────────────────────
seccio("El lloc ja no parla de trams a l'alumne");

/* El tram de cada examen el tria el professor amb dues dates, a
   l'analitzador. El lloc no el pot saber, i per això ja no diu a quin tram
   s'és, ni avisa de cap tancament, ni parla de setmanes de descans. */
prova("no queda res de l'avís de final de termini ni del tram en curs", () => {
  ["mostra", "toca", "textAvis", "tramEnCurs", "diesFinsAlTancament", "DIES_AVIS", "AVISOS_MAX"]
    .forEach(nom => assert.strictEqual(C[nom], undefined, nom + " encara hi és"));
});

prova("carregar el fitxer en una pàgina no hi pinta ni hi desa res", () => {
  const src = require("fs").readFileSync(path.join(__dirname, "..", "js", "calendari.js"), "utf8");
  assert.ok(!/\bdocument\b|localStorage|avis-tram/.test(src), "el fitxer encara toca la pàgina");
});

process.exit(resum() ? 0 : 1);
