/* itinerari-dades.js — lògica de l'itinerari personalitzat: la capa que viu
   per sobre de l'oferta normal de fulls/blocs. Es genera a partir del
   diagnòstic (RE_DIAG), amb els ítems ordenats de fàcil a difícil dins de
   cada bloc recomanat i intercalats entre blocs perquè no es facin 20
   exercicis seguits del mateix tema.

   DECISIÓ CLAU: aquest mòdul NO desa si un ítem està "fet" — això ja ho fa
   RE (nucli.js) amb el progrés normal de cada full. L'itinerari només desa
   LA RUTA (quins ítems, en quin ordre); l'estat de cadascun es consulta
   sempre en viu amb RE.estat(full, id). Així un ítem fet fora de l'itinerari
   (des de full.html normal) també compta, sense duplicar ni desincronitzar
   res. */
window.RE_ITI = (function () {
  "use strict";

  var CLAU_LS = "repas-eso:itinerari";

  /* Rang objectiu de mida total de l'itinerari: una "ruta curta" per
     sessió, no tots els ítems pendents dels blocs recomanats (que podrien
     ser desenes). Es pot ampliar en el futur; avui generem una ruta única
     d'aquesta mida. */
  var OBJECTIU_TOTAL = 24;
  var MIN_TOTAL = 20, MAX_TOTAL = 30;

  /* Mateix criteri que el test inicial: la longitud de l'enunciat com a
     proxy de dificultat (un enunciat curt i directe és, en aquest banc,
     sistemàticament més senzill d'encarar que un de llarg amb diversos
     passos). No cal que sigui una mesura perfecta de dificultat real, només
     prou bona per ordenar fàcil abans que difícil dins de cada bloc. */
  function ordenaPerDificultat(items) {
    return items.slice().sort(function (a, b) {
      return a.enunciat.length - b.enunciat.length;
    });
  }

  /* Reparteix OBJECTIU_TOTAL ítems entre els blocs recomanats, equitativament
     però respectant que un bloc petit no pot donar més ítems dels que té.
     El que li falta a un bloc petit es reparteix entre els altres, en rondes
     successives, fins arribar a l'objectiu o esgotar tots els blocs. */
  function repartimentPerBloc(blocsAmbItems, objectiu) {
    var quota = {};
    blocsAmbItems.forEach(function (b) { quota[b.k] = 0; });
    var pendent = objectiu;
    var actius = blocsAmbItems.slice();
    while (pendent > 0 && actius.length) {
      var base = Math.floor(pendent / actius.length) || 1;
      var seguents = [];
      actius.forEach(function (b) {
        var marge = b.items.length - quota[b.k];
        var afegeix = Math.min(base, marge, pendent);
        if (afegeix > 0) { quota[b.k] += afegeix; pendent -= afegeix; }
        if (marge - afegeix > 0) seguents.push(b);
      });
      if (!seguents.length) break;
      actius = seguents;
    }
    return quota;
  }

  /* Genera la ruta: per cada bloc recomanat, les seves `quota[bloc]` preguntes
     més fàcils (ordenades fàcil->difícil). Després intercala entre blocs
     (round-robin: un ítem de cada bloc per torn) perquè l'alumne vagi
     canviant de tema en lloc de fer un bloc sencer abans de passar al
     següent — l'única manera de mantenir dins de cada bloc l'ordre
     fàcil->difícil i alhora barrejar temes és intercalar un cop ja
     ordenats, no barrejar-ho tot junt. */
  function generaRuta(blocsRecomanats, blocsDisponibles) {
    var blocsAmbItems = blocsRecomanats.map(function (r) {
      var complet = blocsDisponibles.filter(function (b) {
        return b.full === r.full && b.id === r.bloc;
      })[0];
      if (!complet) return null;
      return { k: r.full + ":" + r.bloc, full: r.full, bloc: r.bloc, titol: r.titol,
        items: ordenaPerDificultat(complet.items) };
    }).filter(Boolean);

    if (!blocsAmbItems.length) return [];

    var quota = repartimentPerBloc(blocsAmbItems, OBJECTIU_TOTAL);
    var cues = blocsAmbItems.map(function (b) {
      return { full: b.full, bloc: b.bloc, titol: b.titol, items: b.items.slice(0, quota[b.k]) };
    });

    var ruta = [], hiHaMes = true;
    while (hiHaMes) {
      hiHaMes = false;
      cues.forEach(function (c) {
        if (c.items.length) {
          var it = c.items.shift();
          ruta.push({ full: c.full, bloc: c.bloc, blocTitol: c.titol, id: it.id });
          hiHaMes = true;
        }
      });
    }
    return ruta;
  }

  /* ---- persistència ---- */

  function desa(ruta) {
    try { localStorage.setItem(CLAU_LS, JSON.stringify({ ts: Date.now(), ruta: ruta })); }
    catch (e) { /* ple o bloquejat */ }
  }

  function llegeix() {
    try { return JSON.parse(localStorage.getItem(CLAU_LS)); } catch (e) { return null; }
  }

  function esborra() {
    try { localStorage.removeItem(CLAU_LS); } catch (e) { /* no fem res */ }
  }

  /* Genera (si cal) i desa la ruta a partir del diagnòstic actual, i la
     retorna. Si ja hi havia una ruta desada, la reutilitza tal qual (no la
     regenera cada visita: la ruta és estable un cop creada, com un pla que
     es va seguint, no una recomanació que canvia cada dia). */
  function obtenIGenera(cb) {
    var existent = llegeix();
    if (existent && existent.ruta && existent.ruta.length) { cb(existent.ruta); return; }

    var diag = window.RE_DIAG.llegeix();
    if (!diag) { cb([]); return; }
    var analisi = window.RE_DIAG.analitza(diag);
    var recomanats = window.RE_DIAG.recomanacio(analisi);
    if (!recomanats.length) { cb([]); return; }

    window.RE_DIAG.blocsDisponibles(function (blocs) {
      var ruta = generaRuta(recomanats, blocs);
      desa(ruta);
      cb(ruta);
    });
  }

  /* ---- consulta de progrés (en viu, contra RE, mai duplicat) ---- */

  function pasFet(pas) {
    var e = window.RE.estat(pas.full, pas.id);
    return e === "net" || e === "pista" || e === "segon" || e === "fallat";
  }

  function progres(ruta) {
    var fets = ruta.filter(pasFet).length;
    return { fets: fets, total: ruta.length };
  }

  /* El primer pas de la ruta que encara no s'ha fet; null si ja és completa. */
  function primerPendent(ruta) {
    for (var i = 0; i < ruta.length; i++) {
      if (!pasFet(ruta[i])) return ruta[i];
    }
    return null;
  }

  return {
    OBJECTIU_TOTAL: OBJECTIU_TOTAL, MIN_TOTAL: MIN_TOTAL, MAX_TOTAL: MAX_TOTAL,
    generaRuta: generaRuta, desa: desa, llegeix: llegeix, esborra: esborra,
    obtenIGenera: obtenIGenera, pasFet: pasFet, progres: progres, primerPendent: primerPendent
  };
})();
