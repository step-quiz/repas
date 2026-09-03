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
  /* Nivell d'un exercici: el camp `dif` que hi posa el generador (1 directa,
     2 encadenada, 3 completa; vegeu tools/lib.py). Si un full compilat abans
     que existís el camp queda a la memòria cau del navegador, els seus ítems
     cauen tots al nivell 2 i el desempat per longitud fa la feina, com abans. */
  function niv(it) { return it.dif || 2; }

  function ordenaPerDificultat(items) {
    return items.slice().sort(function (a, b) {
      if (niv(a) !== niv(b)) return niv(a) - niv(b);
      return a.enunciat.length - b.enunciat.length;
    });
  }

  function barreja(a) {
    var c = a.slice();
    for (var i = c.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = c[i]; c[i] = c[j]; c[j] = t;
    }
    return c;
  }

  /* n exercicis d'entre els més senzills d'un grup, amb una mica de marge
     perquè dues rutes seguides no siguin calcades. */
  function mostra(items, n) {
    if (n >= items.length) return items.slice();
    var finestra = Math.min(items.length, Math.max(n + 2, Math.ceil(n * 1.6)));
    return barreja(items.slice(0, finestra)).slice(0, n);
  }

  /* Passa dels temes del test als blocs del lloc, amb un pes per bloc.

     Cada tema del test apunta a un bloc principal i, sovint, a un parell més
     que l'acompanyen (per exemple, "sumar fraccions" porta a Fraccions i
     també a Divisibilitat, perquè sense m.c.m. no se'n surt). El pes del
     tema el fixa la situació en què està l'alumne —8 si no ho va entendre
     mai o si ho donava per sabut i ha fallat, 4 si només ho té rovellat— i
     es reparteix entre els seus blocs: el principal se'n queda la meitat i
     la resta van baixant. Així un tema que cal reconstruir aporta el doble
     d'exercicis que un que només cal refrescar. */
  function blocsAmbPes(temes, blocsDisponibles, jaFet) {
    var llista = [];
    temes.forEach(function (t, itema) {
      t.blocs.forEach(function (ref, rang) {
        var complet = blocsDisponibles.filter(function (b) {
          return b.full === ref.full && b.id === ref.bloc;
        })[0];
        if (!complet || !complet.items.length) return;

        /* Els exercicis que l'alumne ja ha fet van al final de la cua, no
           fora: així una ruta nova li dona material que no ha vist, però si
           un bloc se li ha quedat curt encara pot completar els 24. */
        var ordenats = ordenaPerDificultat(complet.items);
        var frescos = ordenats, repetits = [];
        if (jaFet) {
          frescos = ordenats.filter(function (it) { return !jaFet(ref.full, it.id); });
          repetits = ordenats.filter(function (it) { return jaFet(ref.full, it.id); });
        }
        llista.push({
          k: ref.full + ":" + ref.bloc,
          full: ref.full, bloc: ref.bloc, titol: complet.titol,
          tema: t.tema, itema: itema, rang: rang,
          pes: t.pes / (rang + 1),
          items: frescos.concat(repetits)
        });
      });
    });
    /* Ordenats per rang i després per tema: així la primera volta del
       round-robin agafa el bloc principal de cada tema, la segona el
       secundari, etc., i l'alumne va canviant de tema a cada pas. */
    return llista.sort(function (a, b) {
      return a.rang - b.rang || a.itema - b.itema;
    });
  }

  /* Reparteix OBJECTIU_TOTAL ítems entre els blocs, proporcionalment al seu
     pes però sense demanar a cap bloc més ítems dels que té. El que sobra
     d'un bloc petit es redistribueix als altres, d'un en un i començant pels
     de més pes, fins arribar a l'objectiu o esgotar el material. */
  function repartimentPerBloc(blocs, objectiu) {
    var quota = {}, totalPes = 0;
    blocs.forEach(function (b) { totalPes += b.pes; });
    if (!totalPes) return quota;

    var assignat = 0;
    blocs.forEach(function (b) {
      var q = Math.min(b.items.length, Math.round(objectiu * b.pes / totalPes));
      quota[b.k] = q;
      assignat += q;
    });

    var perPes = blocs.slice().sort(function (a, b) { return b.pes - a.pes; });
    while (assignat < objectiu) {
      var afegit = false;
      for (var i = 0; i < perPes.length && assignat < objectiu; i++) {
        var b = perPes[i];
        if (quota[b.k] < b.items.length) { quota[b.k]++; assignat++; afegit = true; }
      }
      if (!afegit) break;   /* no queda material enlloc */
    }
    while (assignat > objectiu) {
      var tret = false;
      for (var j = perPes.length - 1; j >= 0 && assignat > objectiu; j--) {
        if (quota[perPes[j].k] > 1) { quota[perPes[j].k]--; assignat--; tret = true; }
      }
      if (!tret) break;
    }
    return quota;
  }

  /* Tria `quota` ítems d'entre els més senzills d'un bloc, però no
     exactament els `quota` primers: els agafa a l'atzar d'una finestra una
     mica més ampla. És el que fa que "Genera'n un de nou" doni de veritat un
     itinerari diferent i no el mateix una altra vegada. La finestra es manté
     estreta perquè els ítems triats segueixin sent dels senzills del bloc, i
     el resultat es torna a ordenar per dificultat abans de retornar-lo. */
  function triaAmbVarietat(items, quota) {
    if (quota <= 0) return [];
    var ordenats = ordenaPerDificultat(items);
    if (quota >= ordenats.length) return ordenats;

    var grups = [1, 2, 3].map(function (n) {
      return { niv: n, items: ordenats.filter(function (it) { return niv(it) === n; }) };
    }).filter(function (g) { return g.items.length; });

    /* Primer un exercici de cada nivell que hi hagi al bloc, i només després
       es reparteix la resta. Amb les quotes normals (2-4 per bloc) això sol ja
       fa que la ruta pugi: abans agafava sempre del graó d'entrada i els
       exercicis substanciosos d'un bloc no sortien mai.

       El sobrant es reparteix pesant cap avall (3-2-1 per als nivells 1-2-3),
       perquè qui ha de reconstruir un tema necessita més rodatge a baix que a
       dalt; la divisió per `presos+1` fa que el pes vagi baixant a mesura que
       un nivell s'omple, i així no se n'emporta tot. */
    var presos = grups.map(function () { return 0; });
    var resta = quota, i;
    for (i = 0; i < grups.length && resta > 0; i++) { presos[i] = 1; resta--; }
    while (resta > 0) {
      var millor = -1, punts = -1;
      for (i = 0; i < grups.length; i++) {
        if (presos[i] >= grups[i].items.length) continue;
        var p = (4 - grups[i].niv) / (presos[i] + 1);
        if (p > punts) { punts = p; millor = i; }
      }
      if (millor < 0) break;
      presos[millor]++; resta--;
    }

    var tria = [];
    grups.forEach(function (g, k) { tria = tria.concat(mostra(g.items, presos[k])); });
    return ordenaPerDificultat(tria);
  }

  /* Genera la ruta: de cada bloc, `quota` preguntes graduades de més
     senzilles a més completes, i després intercala entre blocs (round-robin:
     un ítem de cada bloc per torn) perquè l'alumne vagi canviant de tema en
     lloc de fer un bloc sencer abans de passar al següent. Com que cada cua
     ja ve ordenada per dificultat i el round-robin les recorre en paral·lel,
     la ruta sencera també puja: els primers torns són els graons d'entrada de
     tots els blocs i els últims, els exercicis complets.

     `jaFet(full, id)` és opcional: si es passa, els exercicis que l'alumne ja
     ha resolt queden al final de la cua de cada bloc i, a la pràctica, fora
     de la ruta mentre hi hagi material nou. */
  function generaRuta(temesRecomanats, blocsDisponibles, jaFet) {
    var blocs = blocsAmbPes(temesRecomanats, blocsDisponibles, jaFet);
    if (!blocs.length) return [];

    var quota = repartimentPerBloc(blocs, OBJECTIU_TOTAL);
    var cues = blocs.map(function (b) {
      return { full: b.full, bloc: b.bloc, titol: b.titol, tema: b.tema,
               items: triaAmbVarietat(b.items, quota[b.k] || 0) };
    }).filter(function (c) { return c.items.length; });

    var ruta = [], hiHaMes = true;
    while (hiHaMes) {
      hiHaMes = false;
      cues.forEach(function (c) {
        if (c.items.length) {
          var it = c.items.shift();
          ruta.push({ full: c.full, bloc: c.bloc, blocTitol: c.titol,
                      tema: c.tema, id: it.id });
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
      var ruta = generaRuta(recomanats, blocs, function (full, id) {
        return pasFet({ full: full, id: id });
      });
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
