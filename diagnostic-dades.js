/* diagnostic-dades.js — lògica compartida entre diagnostic.js, resultat.js i
   itinerari-dades.js: com es puntua el test inicial, què vol dir cada
   resposta i quins temes se'n deriven.

   No toca el DOM: és l'equivalent de nucli.js però per al tutor.

   COM FUNCIONA EL TEST
   El test són 15 proves curtes escrites expressament (js/proves-inicials.js),
   en ordre de currículum. A cada prova l'alumne diu en quin estat es troba:

     domino    "Crec que sé resoldre aquesta qüestió força bé"
     oblidat   "...ho vaig entendre, però ara ho he oblidat"
     no_entes  "...m'ho van explicar i no ho vaig entendre massa"
     mai       "No recordo haver-ho fet mai, això"

   Tret del darrer cas, sempre se li demana la resposta de veritat: quatre
   opcions, i n'ha de triar una. El que l'alumne creu i el que l'alumne fa
   són dues dades diferents, i totes dues fan falta — algú que diu "ho vaig
   entendre però ho he oblidat" i tot seguit ho resol té una mancança molt
   diferent d'algú que ho diu i falla. Només qui no ho ha vist mai se salta
   la pregunta: allà no hi ha res a mesurar.

   LES SET SITUACIONS QUE EN SURTEN, creuant el que diu amb el que fa:

     estat      encert   situació          prioritat  què vol dir
     domino       sí     dominat               0      no cal repassar-ho
     domino       no     falsa_seguretat       4      creu que ho sap
     oblidat      sí     recuperat             1      ho tenia més a mà
     oblidat      no     oblidat               2      confirmat: refrescar
     no_entes     sí     infravalorat          2      se'n surt més del que creu
     no_entes     no     no_entes              3      mai ho va construir
     mai           —     mai                   3      llacuna

   Les dues files on el que diu i el que fa no coincideixen són les que
   aporten informació que l'alumne no tenia: `falsa_seguretat` (el que més
   mal fa, perquè és l'únic tema que no repassaria pel seu compte) i
   `infravalorat`/`recuperat` (que és, sobretot, un problema de confiança).

   El PES decideix quants exercicis rep l'alumne d'aquell tema. Refrescar una
   destresa que va entendre costa la meitat que construir-ne una que no.

   ORDRE DE PRIORITAT. A igualtat de prioritat mana l'ordre del currículum
   (la prova que va abans, primer). Si a algú li fallen alhora les fraccions
   i les paràboles, les fraccions van abans: són prerequisit. */
window.RE_DIAG = (function () {
  "use strict";

  var CLAU_LS = "repas-eso:diagnostic";
  var VERSIO = 2;

  /* Fulls amb banc de preguntes. No té res a veure amb el test (que no en
     surt): serveix per carregar els ítems reals amb què es construeix
     l'itinerari. Si algun dia s'hi afegeix un full, afegiu-hi el número. */
  var FULLS_AMB_BANC = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  /* Quants temes entren a l'itinerari com a màxim. Tres és el que cap en una
     sessió de repàs sense que l'alumne el vegi com una llista inacabable. */
  var MAX_TEMES = 3;

  /* Prioritat de cada situació, i quant de pes té a l'hora de repartir els
     exercicis de l'itinerari. Prioritat 0 = fora de l'itinerari. */
  var SITUACIONS = {
    falsa_seguretat: {
      prioritat: 4, pes: 8, to: "malament",
      etiqueta: "Ho donaves per sabut",
      explica: "Has dit que ho sabies fer, però la resposta no era la bona. " +
               "És el primer que et convé mirar: és l'únic tema que no " +
               "repassaries pel teu compte."
    },
    no_entes: {
      prioritat: 3, pes: 8, to: "malament",
      etiqueta: "No ho vas acabar d'entendre",
      explica: "Ho havies dit i la resposta ho confirma. Cal tornar-hi des " +
               "del principi, amb calma i des dels exercicis més senzills."
    },
    mai: {
      prioritat: 3, pes: 8, to: "malament",
      etiqueta: "No ho havies vist",
      explica: "Comencem des de zero. Pot ser que sí que ho hagis fet i no " +
               "en recordis el nom: els primers exercicis t'ho diran."
    },
    oblidat: {
      prioritat: 2, pes: 4, to: "malament",
      etiqueta: "Ho tens rovellat",
      explica: "Ho vas entendre en el seu moment i ara no t'ha sortit: amb " +
               "uns quants exercicis hauria de tornar sol."
    },
    infravalorat: {
      prioritat: 2, pes: 4, to: "bo",
      etiqueta: "Te'n surts més del que et penses",
      explica: "Deies que no ho havies entès i l'has encertada. Amb una mica " +
               "de pràctica ho tindràs clar del tot — el que et falta és " +
               "fiar-te'n."
    },
    recuperat: {
      prioritat: 1, pes: 2, to: "bo",
      etiqueta: "Ho tenies més a mà del que et pensaves",
      explica: "Deies que ho havies oblidat i t'ha sortit igualment. Amb un " +
               "parell d'exercicis ho acabes de recuperar."
    },
    dominat: {
      prioritat: 0, pes: 0, to: "bo",
      etiqueta: "Ho tens",
      explica: "Ho has resolt bé. No cal que hi dediquis temps ara."
    }
  };

  /* Creua el que l'alumne diu amb el que fa. `mai` no es comprova mai, així
     que és l'única situació que surt directament de l'estat declarat. */
  function situacio(r) {
    if (r.estat === "mai") return "mai";
    if (r.estat === "domino") return r.encert ? "dominat" : "falsa_seguretat";
    if (r.estat === "oblidat") return r.encert ? "recuperat" : "oblidat";
    return r.encert ? "infravalorat" : "no_entes";   /* no_entes */
  }

  /* ---- anàlisi ---- */

  /* Converteix les respostes desades en una llista ordenada per urgència.
     Cada element porta el tema de la prova, la situació i els blocs del lloc
     on anirà a parar l'alumne si cal repassar-ho. */
  function analitza(dades) {
    if (!dades || !dades.respostes) return [];
    var perId = {};
    window.RE_PROVES.PROVES.forEach(function (p, i) { perId[p.id] = { p: p, ordre: i }; });

    return dades.respostes.map(function (r) {
      var ref = perId[r.prova];
      if (!ref) return null;
      var s = situacio(r);
      var info = SITUACIONS[s];
      return {
        prova: r.prova,
        tema: ref.p.tema,
        titol: ref.p.tema,
        ordre: ref.ordre,
        full: ref.p.blocs[0].full,
        bloc: ref.p.blocs[0].bloc,
        blocs: ref.p.blocs,
        estat: r.estat,
        encert: r.encert,
        situacio: s,
        prioritat: info.prioritat,
        pes: info.pes,
        to: info.to,
        etiqueta: info.etiqueta,
        explica: info.explica
      };
    }).filter(Boolean).sort(function (a, b) {
      if (b.prioritat !== a.prioritat) return b.prioritat - a.prioritat;
      return a.ordre - b.ordre;   /* prerequisits abans */
    });
  }

  /* Els temes que entren a l'itinerari: els MAX_TEMES més urgents d'entre
     els que en tenen. Si no n'hi ha cap, torna una llista buida i el lloc ho
     diu tal qual — mai s'omple amb temes que l'alumne ja domina. */
  function recomanacio(analisi) {
    return analisi.filter(function (a) { return a.prioritat > 0; }).slice(0, MAX_TEMES);
  }

  /* Recompte per situació, per al resum de dalt de resultat.html. */
  function resum(analisi) {
    var r = {};
    Object.keys(SITUACIONS).forEach(function (k) { r[k] = 0; });
    analisi.forEach(function (a) { r[a.situacio]++; });
    return r;
  }

  /* ---- càrrega del banc real (per a l'itinerari, no per al test) ---- */

  function carregaFull(n, cb) {
    if (window["FULL_" + n]) { cb(window["FULL_" + n]); return; }
    var s = document.createElement("script");
    s.src = "data/full" + n + ".js";
    s.onload = function () {
      window["FULL_" + n] = window.FULL;
      cb(window.FULL);
    };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }

  /* Carrega tots els fulls en paral·lel i crida `cb` amb la llista de blocs
     disponibles, cadascun amb el seu `full` d'origen i tots els seus ítems. */
  function blocsDisponibles(cb) {
    var pendents = FULLS_AMB_BANC.length, dades = {}, blocs = [];
    FULLS_AMB_BANC.forEach(function (n) {
      carregaFull(n, function (d) {
        dades[n] = d;
        if (--pendents === 0) {
          FULLS_AMB_BANC.forEach(function (n) {
            var d = dades[n];
            if (!d) return;   /* full no disponible: el saltem en silenci */
            d.blocs.forEach(function (b) {
              blocs.push({
                full: n, id: b.id, titol: b.titol,
                items: b.items.map(function (id) {
                  return d.items.filter(function (it) { return it.id === id; })[0];
                })
              });
            });
          });
          cb(blocs);
        }
      });
    });
  }

  /* ---- persistència ---- */

  function desa(respostes) {
    try {
      localStorage.setItem(CLAU_LS, JSON.stringify({
        ts: Date.now(), versio: VERSIO, respostes: respostes
      }));
    } catch (e) { /* ple o bloquejat */ }
  }

  /* Un diagnòstic d'una versió anterior del test no es pot reinterpretar amb
     les regles d'ara (abans es desaven encerts sobre preguntes del banc, no
     situacions per tema): es tracta com si no n'hi hagués cap, i el lloc
     ofereix fer el test. */
  function llegeix() {
    try {
      var d = JSON.parse(localStorage.getItem(CLAU_LS));
      return d && d.versio === VERSIO ? d : null;
    } catch (e) { return null; }
  }

  function esborra() {
    try { localStorage.removeItem(CLAU_LS); } catch (e) { /* no fem res */ }
  }

  return {
    SITUACIONS: SITUACIONS, MAX_TEMES: MAX_TEMES,
    analitza: analitza, recomanacio: recomanacio, resum: resum,
    blocsDisponibles: blocsDisponibles,
    desa: desa, llegeix: llegeix, esborra: esborra
  };
})();
