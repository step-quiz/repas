/* diagnostic-dades.js — lògica compartida entre diagnostic.js i resultat.js:
   quins blocs entren al test, quines preguntes es trien de cadascun, i com
   es calculen els resultats i els desajustos respecte l'autopercepció.

   No toca el DOM: és l'equivalent de nucli.js però per al tutor, perquè
   diagnostic.js (fer el test) i resultat.js (veure'l) necessiten exactament
   les mateixes regles i no té sentit escriure-les dues vegades. */
window.RE_DIAG = (function () {
  "use strict";

  var CLAU_LS = "repas-eso:diagnostic";

  /* Blocs que entren al test: només dels fulls ja autorats. Quan s'autori
     un full nou, afegir-hi el seu número n'hi ha prou perquè el test les
     inclogui — la resta d'aquest fitxer no cal tocar-lo. */
  var FULLS_TEST = [1, 2, 3, 4, 5];

  /* 15 preguntes repartides en 8 blocs: 7 blocs en donen 2 i 1 en dona 1.
     Quin bloc és el "curt" va rotant per volta (índex fix, no aleatori: així
     dues persones que facin el test el mateix dia no comparteixen sempre
     el mateix bloc escapçat). */
  var PREGUNTES_PER_BLOC = 2;
  var TOTAL_TEST = 15;

  /* Quants blocs "hi caben" en un test de TOTAL_TEST preguntes, mantenint
     PREGUNTES_PER_BLOC com a mínim fiable per bloc (amb 1 sola pregunta,
     un simple despistament fa caure el bloc a 0% sense dir res real sobre
     si l'alumne el domina). Amb els valors actuals: 7 blocs complets + 1
     amb una pregunta menys = 8 blocs, 15 preguntes. */
  var BLOCS_PER_TEST = Math.floor(TOTAL_TEST / PREGUNTES_PER_BLOC) + 1;

  /* El test és la primera impressió del tutor: si les primeres preguntes ja
     són un problema verbal de 200 caràcters o una torre de fraccions
     imbricades, l'alumne abandona abans d'arribar a veure cap resultat.
     Triem sempre entre les preguntes MÉS CURTES de cada bloc (per caràcters
     de l'enunciat, un proxy senzill però prou fiable de "quant costa de
     llegir i encarar" en aquest banc). No cal que sigui la pregunta més
     fàcil del bloc, només la més ràpida de llegir. */
  var CARACTERS_MAX_PREFERITS = 40;

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

  /* Carrega tots els fulls de FULLS_TEST en paral·lel i crida `cb` amb la
     llista de blocs disponibles, cadascun amb el seu `full` d'origen i la
     llista sencera dels seus items (no encara triats). */
  function blocsDisponibles(cb) {
    var pendents = FULLS_TEST.length, dades = {}, blocs = [];
    FULLS_TEST.forEach(function (n) {
      carregaFull(n, function (d) {
        dades[n] = d;
        if (--pendents === 0) {
          FULLS_TEST.forEach(function (n) {
            var d = dades[n];
            if (!d) return;   /* full encara no autorat: el saltem en silenci */
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

  function barreja(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* D'un bloc, torna els items amb enunciat curt (<= CARACTERS_MAX_PREFERITS).
     Si el bloc no arriba a tenir-ne prou (per exemple "geometriques" de
     Successions, on cap pregunta baixa de 41 caràcters, o "problemes" de
     Full 5, que va de 82 a bastant més), NO tornem el bloc sencer sense
     filtrar, ni un marge ampli per barrejar-hi després: tornem SEMPRE
     exactament les `n` preguntes més curtes que tingui, punt. Un marge més
     gran (per exemple, les 3 més curtes quan `n` és 1) sembla donar més
     varietat, però permet que la barreja triï la tercera més curta encara
     que sigui molt més llarga que la primera — exactament el que li va
     passar a "problemes" (82, 88, 122 car: amb marge=3 podia sortir la de
     122). Sense marge, cada bloc queda acotat pel pitjor cas real que té. */
  function itemsCurts(items, n) {
    var ordenats = items.slice().sort(function (a, b) {
      return a.enunciat.length - b.enunciat.length;
    });
    var curts = ordenats.filter(function (it) { return it.enunciat.length <= CARACTERS_MAX_PREFERITS; });
    return curts.length >= n ? curts : ordenats.slice(0, n);
  }

  /* Generador pseudoaleatori simple amb llavor: permet una "barreja"
     determinista per dia (mateix dia -> mateix resultat, útil perquè el
     test roti de manera repartida en lloc de dependre d'atzar pur, que amb
     mala sort podria deixar sempre el mateix bloc fora). No cal que sigui
     criptogràficament fort, només repetible. */
  function pseudoaleatori(llavor) {
    var x = Math.sin(llavor) * 10000;
    return x - Math.floor(x);
  }
  function barrejaAmbLlavor(a, llavor) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(pseudoaleatori(llavor + i) * (i + 1)), t = a[i];
      a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Diada de l'any (1-366): dona més marge de rotació que el dia del mes
     (1-31) a mesura que hi hagi més blocs disponibles que dies en un mes. */
  function diaDeLany() {
    var ara = new Date();
    var inici = new Date(ara.getFullYear(), 0, 0);
    return Math.floor((ara - inici) / 86400000);
  }

  /* Selecciona quins blocs entren al test d'avui. Si n'hi ha BLOCS_PER_TEST
     o menys, hi entren tots (comportament actual, sense canvis). Si n'hi ha
     més, es trien BLOCS_PER_TEST rotant per dia de l'any: amb el pas del
     temps es van cobrint tots els blocs disponibles, en lloc de sortejar-los
     cada cop (que podria, per mala sort, deixar sempre el mateix fora). Fa
     servir una llavor diferent de la del bloc "curt" (vegeu triaPreguntes)
     perquè totes dues rotacions no vagin sempre lligades. */
  function seleccionaBlocsDelTest(blocs) {
    if (blocs.length <= BLOCS_PER_TEST) return blocs;
    return barrejaAmbLlavor(blocs, diaDeLany() * 7 + 3).slice(0, BLOCS_PER_TEST);
  }

  /* Tria les preguntes del test a partir dels blocs JA SELECCIONATS (vegeu
     seleccionaBlocsDelTest — es crida abans, no aquí dins, perquè el mateix
     subconjunt de blocs també s'ha de fer servir per pintar l'autopercepció:
     no té sentit preguntar "et costa X?" d'un bloc que el test d'avui no
     arribarà a avaluar). N preguntes per bloc, un bloc en dona N-1 perquè el
     total quadri a TOTAL_TEST. Quin bloc és el curt gira per dia de l'any,
     amb una llavor diferent de la de seleccionaBlocsDelTest perquè totes
     dues rotacions no vagin sempre lligades. Dins de cada bloc, es tria
     entre les preguntes curtes (vegeu CARACTERS_MAX_PREFERITS) per no
     espantar l'alumne amb un problema verbal o una torre de fraccions just
     al començament. */
  function triaPreguntes(blocs) {
    var curt = diaDeLany() % blocs.length;
    var seleccio = [];
    blocs.forEach(function (b, i) {
      var n = (i === curt) ? PREGUNTES_PER_BLOC - 1 : PREGUNTES_PER_BLOC;
      barreja(itemsCurts(b.items, n)).slice(0, n).forEach(function (it) {
        seleccio.push({ full: b.full, bloc: b.id, blocTitol: b.titol, item: it });
      });
    });
    return barreja(seleccio).slice(0, TOTAL_TEST);
  }

  /* ---- persistència ---- */

  function desa(resultat) {
    try { localStorage.setItem(CLAU_LS, JSON.stringify(resultat)); } catch (e) { /* ple o bloquejat */ }
  }

  function llegeix() {
    try { return JSON.parse(localStorage.getItem(CLAU_LS)); } catch (e) { return null; }
  }

  function esborra() {
    try { localStorage.removeItem(CLAU_LS); } catch (e) { /* no fem res */ }
  }

  /* ---- anàlisi ---- */

  /* Agrupa les respostes del test per bloc i calcula, per a cadascun:
     encerts, total, percentatge, si l'alumne l'havia marcat com a "em costa"
     a l'autopercepció, i el tipus de desajust (si n'hi ha). Retorna la llista
     ordenada de pitjor a millor percentatge (els empats es desempaten posant
     primer els blocs que l'alumne NO esperava que li costessin: són els que
     més val la pena que vegi). */
  function analitza(resultat) {
    var perBloc = {};
    resultat.respostes.forEach(function (r) {
      var k = r.full + ":" + r.bloc;
      if (!perBloc[k]) {
        perBloc[k] = { full: r.full, bloc: r.bloc, titol: r.blocTitol, ok: 0, total: 0 };
      }
      perBloc[k].total++;
      if (r.encert) perBloc[k].ok++;
    });

    var percebuts = resultat.percebuts || [];
    var llista = Object.keys(perBloc).map(function (k) {
      var b = perBloc[k];
      b.pct = Math.round(100 * b.ok / b.total);
      b.percebut = percebuts.indexOf(k) !== -1;
      /* Amb només 1-2 preguntes per bloc, un llindar tipus "< 60%" es
         dispara amb un sol error i deixa de dir res (amb prou atzar, gairebé
         tots els blocs hi acaben entrant). Per això aquí exigim el cas net:
         fallar-ho TOT (0%) per marcar sorpresa, encertar-ho TOT (100%) per
         marcar fals alarma. És un criteri conservador a propòsit: val més
         que aquest bloc es quedi curt algun cop que no pas que es converteixi
         en soroll que llisti mig test. */
      b.sorpresa = !b.percebut && b.pct === 0;
      b.falsAlarma = b.percebut && b.pct === 100;
      b.k = k;
      return b;
    });

    llista.sort(function (a, b) {
      if (a.pct !== b.pct) return a.pct - b.pct;
      return (a.sorpresa === b.sorpresa) ? 0 : (a.sorpresa ? -1 : 1);
    });
    return llista;
  }

  /* Els desajustos es mostren com a MÀXIM 3 per banda perquè el component
     conservi valor de "destacat": si en surten més, val més veure'ls tots
     dins la taula completa de blocs que no pas allargar aquesta llista. */
  var MAX_DESAJUSTOS = 3;

  /* Els 3 blocs que recomanem repassar primer: els de pitjor resultat,
     excloent-ne els que ja dominava (>=80%) encara que hi hagi entrat algun
     per fer nombre. */
  function recomanacio(analisi) {
    return analisi.filter(function (b) { return b.pct < 80; }).slice(0, 3);
  }

  return {
    blocsDisponibles: blocsDisponibles, seleccionaBlocsDelTest: seleccionaBlocsDelTest,
    triaPreguntes: triaPreguntes,
    desa: desa, llegeix: llegeix, esborra: esborra,
    analitza: analitza, recomanacio: recomanacio, MAX_DESAJUSTOS: MAX_DESAJUSTOS
  };
})();
