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

   Quan diu `domino`, i NOMÉS llavors, se li ensenyen quatre opcions i ha de
   triar la bona. La comprovació va exactament on fa falta: si diu que no
   se'n recorda no hi ha res a comprovar —ja sabem què li toca—, però si diu
   que en sap i resulta que no, aquest és el cas que més mal fa, perquè és
   l'únic tema que no repassaria mai pel seu compte. Comprovar només les
   respostes segures manté el test en dos minuts i el fa útil igualment.

   LES CINC SITUACIONS QUE EN SURTEN, i què implica cadascuna:

     dominat          domino + encert      no cal repassar-ho
     falsa_seguretat  domino + error       PRIORITAT MÀXIMA: creu que ho sap
     no_entes         no_entes             mai ho va arribar a construir
     mai              mai                  llacuna: no ho ha vist
     oblidat          oblidat              hi era: cal refrescar-ho, no
                                            reconstruir-ho

   La distinció entre `oblidat` i els altres dos no és cosmètica: canvia
   quants exercicis rep l'alumne. Refrescar una destresa que va entendre
   costa quatre exercicis; construir-ne una que no va entendre mai, el doble.

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
      prioritat: 4, pes: 8,
      etiqueta: "Ho donaves per sabut",
      explica: "Has dit que ho sabies fer, però la resposta no era la bona. " +
               "És el primer que et convé mirar: és l'únic tema que no " +
               "repassaries pel teu compte."
    },
    no_entes: {
      prioritat: 3, pes: 8,
      etiqueta: "No ho vas acabar d'entendre",
      explica: "Cal tornar-hi des del principi, amb calma i des dels " +
               "exercicis més senzills."
    },
    mai: {
      prioritat: 3, pes: 8,
      etiqueta: "No ho havies vist",
      explica: "Comencem des de zero. Pot ser que sí que ho hagis fet i no " +
               "en recordis el nom: els primers exercicis t'ho diran."
    },
    oblidat: {
      prioritat: 2, pes: 4,
      etiqueta: "Ho tens rovellat",
      explica: "Ho vas entendre en el seu moment: amb uns quants exercicis " +
               "hauria de tornar sol."
    },
    dominat: {
      prioritat: 0, pes: 0,
      etiqueta: "Ho tens",
      explica: "Ho has resolt bé. No cal que hi dediquis temps ara."
    }
  };

  function situacio(resposta) {
    if (resposta.estat === "domino") {
      return resposta.encert ? "dominat" : "falsa_seguretat";
    }
    return resposta.estat;
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
    var r = { dominat: 0, falsa_seguretat: 0, oblidat: 0, no_entes: 0, mai: 0 };
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
