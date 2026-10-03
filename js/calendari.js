/* js/calendari.js — la feina que es demana per a cada examen.

   QUÈ N'HA QUEDAT. Fins a l'octubre de 2026 aquest fitxer era el calendari
   del curs: nou trams fixos de tres setmanes, amb una de descans entremig.
   El lloc deia a l'alumne a quin tram era i quants exercicis hi portava,
   l'avisava cinc dies abans de tancar i, en una setmana de descans, li deia
   que el que feia no comptava. Ja no: el tram de cada examen el tria el
   professor amb dues dates, a l'analitzador, i el lloc no el pot saber.
   Dir-li a l'alumne «aquesta setmana no compta» quan el professor potser la
   comptarà és pitjor que no dir-li res.

   Ara aquí hi ha dues coses:

   · FEINA_MINIMA i FEINA_MAXIMA: entre 10 i 20 exercicis per examen. Les
     llegeixen el botó Codi del lloc i l'analitzador, que han de dir el
     mateix número: aquest fitxer s'injecta a l'analitzador en compilar.

   · TRAMS i les tres funcions que hi treballen. JA NO SÓN CAP CALENDARI: són
     les dates de mostra de l'exemple de l'analitzador («Posa-hi un exemple»)
     i de les proves, que necessiten uns quants períodes on posar feina
     inventada. El lloc de l'alumne no les fa servir per a res, i canviar-les
     no canvia cap examen. */
(function (global) {
  "use strict";

  /* Dates de mostra (vegeu la capçalera): [inici, fi], tots dos dies inclosos. */
  var TRAMS = [
    ["2026-09-14", "2026-10-04"],
    ["2026-10-12", "2026-11-01"],
    ["2026-11-09", "2026-11-29"],

    ["2026-12-28", "2027-01-17"],
    ["2027-01-25", "2027-02-14"],
    ["2027-02-22", "2027-03-14"],

    ["2027-03-22", "2027-04-11"],
    ["2027-04-12", "2027-05-02"],
    ["2027-05-03", "2027-05-23"]
  ];
  var PER_TRIMESTRE = 3;
  /* Feina demanada per a cada examen: entre 10 i 20 exercicis. Com més, més
     nota, però per sobre del màxim el volum ja no la puja. Viuen aquí, i no
     a l'analitzador, perquè el lloc de l'alumne i l'analitzador han de dir
     el mateix número: aquest fitxer s'injecta a l'analitzador en compilar. */
  var FEINA_MINIMA = 10;
  var FEINA_MAXIMA = 20;

  function data(txt) {
    var p = String(txt).split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }

  function aISO(d) {
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2)
      + "-" + ("0" + d.getDate()).slice(-2);
  }

  /* Migdia, per no dependre de l'hora ni de canvis d'horari d'estiu. */
  function nomesDia(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0, 0);
  }

  function llista(trams) {
    return (trams || TRAMS).map(function (t, i) {
      return {
        i: i,
        trimestre: Math.floor(i / PER_TRIMESTRE),
        inici: data(t[0]),
        fi: data(t[1])
      };
    });
  }

  /* Índex del tram on cau una data.

     - dins d'un tram → aquell tram;
     - en un forat    → el tram que acaba de tancar;
     - abans de tot   → 0;
     - després de tot → l'últim. */
  function tramDe(d, trams) {
    var L = llista(trams), x = nomesDia(d);
    if (x < L[0].inici) return 0;
    for (var i = 0; i < L.length; i++) {
      if (x <= nomesDia(L[i].fi)) {
        return x >= nomesDia(L[i].inici) ? i : Math.max(0, i - 1);
      }
    }
    return L.length - 1;
  }

  /* Índex del tram on es va FER una feina, o `null` si la data no cau dins
     de cap tram (un forat, o abans o després de tots). */
  function tramExacte(d, trams) {
    var L = llista(trams), x = nomesDia(d);
    for (var i = 0; i < L.length; i++) {
      if (x >= nomesDia(L[i].inici) && x <= nomesDia(L[i].fi)) return i;
    }
    return null;
  }

  global.RE_CALENDARI = {
    FEINA_MINIMA: FEINA_MINIMA,
    FEINA_MAXIMA: FEINA_MAXIMA,
    /* A partir d'aquí, només per a l'exemple de l'analitzador i les proves. */
    TRAMS: TRAMS,
    PER_TRIMESTRE: PER_TRIMESTRE,
    llista: llista,
    tramDe: tramDe,
    tramExacte: tramExacte,
    aISO: aISO
  };
})(typeof window !== "undefined" ? window : globalThis);
