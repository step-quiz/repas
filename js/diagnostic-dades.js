/* diagnostic-dades.js — lògica compartida entre diagnostic.js i resultat.js:
   quins blocs entren al test, quines preguntes es trien de cadascun, i com
   es calculen els resultats i els desajustos respecte l'autopercepció.

   No toca el DOM: és l'equivalent de nucli.js però per al tutor, perquè
   diagnostic.js (fer el test) i resultat.js (veure'l) necessiten exactament
   les mateixes regles i no té sentit escriure-les dues vegades. */
window.RE_DIAG = (function () {
  "use strict";

  var CLAU_LS = "repas-eso:diagnostic";

  /* Blocs que entren al test: només dels fulls ja autorats (1 i 2). Quan
     s'autori un full nou, afegir-hi les seves entrades n'hi ha prou perquè
     el test les inclogui — la resta d'aquest fitxer no cal tocar-lo. */
  var FULLS_TEST = [1, 2];

  /* 15 preguntes repartides en 8 blocs: 7 blocs en donen 2 i 1 en dona 1.
     Quin bloc és el "curt" va rotant per volta (índex fix, no aleatori: així
     dues persones que facin el test el mateix dia no comparteixen sempre
     el mateix bloc escapçat). */
  var PREGUNTES_PER_BLOC = 2;
  var TOTAL_TEST = 15;

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

  /* Tria les preguntes del test: N per bloc, un bloc en dona N-1 perquè el
     total quadri a TOTAL_TEST. Quin bloc és el curt gira per dia de l'any,
     no per atzar (vegeu comentari de PREGUNTES_PER_BLOC). */
  function triaPreguntes(blocs) {
    var curt = new Date().getDate() % blocs.length;
    var seleccio = [];
    blocs.forEach(function (b, i) {
      var n = (i === curt) ? PREGUNTES_PER_BLOC - 1 : PREGUNTES_PER_BLOC;
      barreja(b.items).slice(0, n).forEach(function (it) {
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
    blocsDisponibles: blocsDisponibles, triaPreguntes: triaPreguntes,
    desa: desa, llegeix: llegeix, esborra: esborra,
    analitza: analitza, recomanacio: recomanacio, MAX_DESAJUSTOS: MAX_DESAJUSTOS
  };
})();
