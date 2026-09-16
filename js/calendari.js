/* js/calendari.js — els nou trams del curs, i l'avís de final de termini.

   PER QUÈ ÉS UNA TAULA I NO UN CÀLCUL

   Els trams duren tots 21 dies i van de dilluns a diumenge, o sigui que es
   podria pensar que n'hi ha prou amb una data d'inici i una divisió. No hi
   ha prou: entre tram i tram hi ha una setmana de descans, entre el primer
   trimestre i el segon n'hi ha quatre (Nadal), i en canvi els tres trams del
   tercer trimestre van encadenats sense cap pausa. Un `floor((data -
   inici) / 21 dies)` diria que el 8 de novembre és del tram 2 quan en
   realitat és festa, i desplaçaria tots els trams del segon trimestre.

   Per això les dates hi són escrites una a una. Es poden canviar des de
   l'analitzador, però aquestes són les del curs i són les que valen si ningú
   no hi toca res.

   TRACTAMENT DELS FORATS. Hi ha dues preguntes diferents i cadascuna té la
   seva funció:

   · tramDe(data) — per a la data en què s'ENVIA un codi. Una data que cau
     entre dos trams (la setmana de descans, o Nadal) s'atribueix al tram
     que acaba de tancar, no al següent: un codi enviat el dimecres següent
     al tancament reporta gairebé sempre feina feta durant el tram, no
     durant la festa. És una estimació, i només fa falta amb els codis
     antics (RC1-RC3), que no porten la data de cada exercici.

   · tramExacte(data) — per a la data en què es va FER un exercici, que els
     codis RC4 ja porten. Aquí no cal estimar res, i la regla és la que diu
     el professorat: el tram són les seves tres setmanes. La feina d'una
     setmana de descans, d'abans del curs o de després no és de cap tram.
     Per això l'examen d'un tram no pot incloure mai exercicis d'abans del
     seu primer dia. */
(function (global) {
  "use strict";

  /* [inici, fi] de cada tram, tots dos dies inclosos. Índex 0..8. */
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
  /* Feina demanada per tram: entre 10 i 20 exercicis. Com més, més nota,
     però per sobre del màxim el volum ja no puja la nota. Viuen aquí, i no a
     l'analitzador, perquè el lloc de l'alumne i l'analitzador han de dir el
     mateix número: aquest fitxer s'injecta a l'analitzador en compilar. */
  var FEINA_MINIMA = 10;
  var FEINA_MAXIMA = 20;
  var DIES_AVIS = 5;          /* s'avisa quan en falten aquests o menys */
  var AVISOS_MAX = 2;         /* dos cops per tram, i en dies diferents */
  var CLAU = "repas.avis.tram.";

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
     - en un forat    → el tram que acaba de tancar (vegeu la capçalera);
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
     de cap tram (setmana de descans, abans o després del curs). Vegeu la
     capçalera: és la regla dels codis que ja porten la data de cada
     exercici, i no hi ha cap estimació. */
  function tramExacte(d, trams) {
    var L = llista(trams), x = nomesDia(d);
    for (var i = 0; i < L.length; i++) {
      if (x >= nomesDia(L[i].inici) && x <= nomesDia(L[i].fi)) return i;
    }
    return null;
  }

  /* El tram que s'està cursant ara mateix, o `null` si som en un forat,
     abans de començar el curs o després d'acabar-lo. */
  function tramEnCurs(ara, trams) {
    var L = llista(trams), x = nomesDia(ara || new Date());
    for (var i = 0; i < L.length; i++) {
      if (x >= nomesDia(L[i].inici) && x <= nomesDia(L[i].fi)) return L[i];
    }
    return null;
  }

  function diesFinsAlTancament(ara, trams) {
    var t = tramEnCurs(ara, trams);
    if (!t) return null;
    var x = nomesDia(ara || new Date());
    return Math.round((nomesDia(t.fi) - x) / 86400000);
  }

  /* ── L'avís a l'alumne ─────────────────────────────────────────────────

     Es mostra com a molt DUES vegades per tram i mai dues el mateix dia. El
     límit no és decoratiu: un avís que surt cada dia deixa de llegir-se, i
     llavors no avisa de res. Es recorda al navegador de l'alumne quins dies
     ja se li ha ensenyat. */
  function diesJaAvisats(i) {
    try {
      var v = global.localStorage.getItem(CLAU + i);
      return v ? JSON.parse(v) : [];
    } catch (e) { return []; }
  }

  function apuntaAvis(i, dia) {
    try {
      var v = diesJaAvisats(i);
      if (v.indexOf(dia) === -1) v.push(dia);
      global.localStorage.setItem(CLAU + i, JSON.stringify(v));
    } catch (e) { /* sense localStorage, no s'hi pot fer res */ }
  }

  function toca(ara, trams) {
    var t = tramEnCurs(ara, trams);
    if (!t) return null;
    var falten = diesFinsAlTancament(ara, trams);
    if (falten === null || falten > DIES_AVIS || falten < 0) return null;
    var avui = aISO(nomesDia(ara || new Date()));
    var ja = diesJaAvisats(t.i);
    if (ja.length >= AVISOS_MAX || ja.indexOf(avui) !== -1) return null;
    return { tram: t, falten: falten, avui: avui, cop: ja.length + 1 };
  }

  /* `feta`, si es coneix, és quants exercicis porta l'alumne en aquest tram.
     És opcional: aquest fitxer no depèn de ningú, i si el recompte no es pot
     fer l'avís surt igual, sense la xifra. */
  function textAvis(av, feta) {
    var d = av.falten;
    var quan = d === 0 ? "avui" : (d === 1 ? "demà" : "d'aquí a " + d + " dies");
    var xifra = "";
    if (typeof feta === "number" && feta >= 0) {
      xifra = " Hi portes " + feta + (feta === 1 ? " exercici" : " exercicis")
        + " i se'n demanen entre " + FEINA_MINIMA + " i " + FEINA_MAXIMA + ".";
    }
    return "El tram " + (av.tram.i + 1) + " es tanca " + quan
      + " (" + ("0" + av.tram.fi.getDate()).slice(-2) + "/"
      + ("0" + (av.tram.fi.getMonth() + 1)).slice(-2) + ")." + xifra
      + " Envia el codi abans no acabi, que és amb el que es prepara l'examen.";
  }

  function mostra(ara, trams) {
    var av = toca(ara, trams);
    if (!av || !global.document) return null;
    /* El recompte el sap fer el panell del codi (js/codi-ui.js), que es
       carrega després d'aquest fitxer. Dins d'un try: és una xifra de més a
       l'avís, i si falla, l'avís ha de sortir igualment. */
    var feta = null;
    try {
      if (global.RE_CODI_UI && global.RE_CODI_UI.feinaDelTram) {
        feta = global.RE_CODI_UI.feinaDelTram(av.tram.i, trams).n;
      }
    } catch (e) { feta = null; }
    var main = global.document.querySelector("main.embolcall")
      || global.document.body;
    if (!main) return null;
    var box = global.document.createElement("div");
    box.className = "avis-tram";
    box.setAttribute("role", "status");
    box.innerHTML = '<span></span><button type="button" aria-label="Tanca l\'avís">×</button>';
    box.querySelector("span").textContent = textAvis(av, feta);
    box.querySelector("button").onclick = function () { box.remove(); };
    main.insertBefore(box, main.firstChild);
    apuntaAvis(av.tram.i, av.avui);
    return box;
  }

  global.RE_CALENDARI = {
    TRAMS: TRAMS,
    PER_TRIMESTRE: PER_TRIMESTRE,
    FEINA_MINIMA: FEINA_MINIMA,
    FEINA_MAXIMA: FEINA_MAXIMA,
    DIES_AVIS: DIES_AVIS,
    AVISOS_MAX: AVISOS_MAX,
    llista: llista,
    tramDe: tramDe,
    tramExacte: tramExacte,
    tramEnCurs: tramEnCurs,
    diesFinsAlTancament: diesFinsAlTancament,
    toca: toca,
    textAvis: textAvis,
    mostra: mostra,
    aISO: aISO
  };

  if (global.document) {
    if (global.document.readyState === "loading") {
      global.document.addEventListener("DOMContentLoaded", function () { mostra(); });
    } else {
      mostra();
    }
  }
})(typeof window !== "undefined" ? window : globalThis);
