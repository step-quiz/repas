/* nucli.js — estat compartit entre pàgines: progrés per full (localStorage),
   pintat del mapa de llacunes i renderitzat de matemàtiques amb KaTeX.

   El progrés de cada full es desa amb la seva pròpia clau
   ("repas-eso:full1", "repas-eso:full2"... fins a "repas-eso:full12") perquè
   cada full té el seu propi recorregut. Per això totes les funcions de
   progrés reben el número de full com a primer argument.

   ── EL REGISTRE ÉS D'UNA SOLA DIRECCIÓ ────────────────────────────────────

   Un exercici es tanca la primera vegada que arriba a un desenllaç (encert o
   segon error) i el seu estat ja no torna a canviar mai més. Tornar-hi
   després és repàs —bo, i el registre el compta a `rep`— però no reescriu com
   va anar. Això tanca de cop tres forats que hi havia i que no costaven res
   d'explotar:

     · fallar, mirar la resolució i refer l'exercici per sortir «net»;
     · fallar el primer intent i recarregar la pàgina abans del segon
       (l'estat es desa AL PRIMER error, no al segon: refrescar ja no neteja);
     · demanar pistes, recarregar i respondre «sense pistes».

   Els comptadors `nint` (intents) i `npis` (pistes) són acumulats de totes
   les visites, no de la sessió, i són ells els que decideixen l'estat:
   encertar amb `npis > 0` és "pista", i encertar amb `nint > 1` és "segon",
   encara que els intents anteriors fossin d'una altra sessió o d'abans d'un
   F5. La sessió ja no és una pissarra que s'esborri sola.

   Res d'això impedeix que algú editi el localStorage a mà o es fabriqui un
   codi des de la consola: sense servidor això és impossible i el projecte ho
   diu obertament. El que fa és que la trampa deixi de ser gratuïta i
   accidental —refrescar, repetir— i passi a demanar intenció i consola, que
   és una frontera que la majoria d'alumnes no travessa. */
window.RE = (function () {
  "use strict";

  function clauLS(full) { return "repas-eso:full" + full; }

  function llegeix(full) {
    try {
      return JSON.parse(localStorage.getItem(clauLS(full))) || { v: 1, items: {} };
    } catch (e) {
      return { v: 1, items: {} };
    }
  }

  function desa(full, p) {
    try { localStorage.setItem(clauLS(full), JSON.stringify(p)); } catch (e) { /* ple o bloquejat: no fem res */ }
  }

  function estat(full, id) { return (llegeix(full).items[id] || {}).estat || ""; }

  function apunta(full, id, dades) {
    var p = llegeix(full);
    p.items[id] = Object.assign({}, p.items[id], dades, { ts: Date.now() });
    desa(full, p);
  }

  /* Acumula una etiqueta d'error a l'historial de l'ítem.

     `err` (l'últim error) es conserva pel format antic, però la llista `errs`
     és la que compta: abans l'error del primer intent s'esborrava en encertar
     al segon, i el resultat era que l'error més interessant de tots -- el que
     l'alumne repeteix però acaba corregint -- no arribava mai al panell "els
     errors que repeteixes". Un error comès és un error comès, encara que
     després es rectifiqui. */
  function apuntaError(full, id, etiqueta) {
    if (!etiqueta) return;
    var p = llegeix(full), it = p.items[id] || {};
    var errs = (it.errs || []).slice();
    errs.push(etiqueta);
    if (errs.length > 12) errs = errs.slice(-12);   /* prou per a l'anàlisi */
    apunta(full, id, { err: etiqueta, errs: errs });
  }

  /* ── metadades globals ───────────────────────────────────────────────────

     Viuen en una clau A PART de les dels fulls ("repas-eso:meta") a posta:
     el botó de reiniciar un full no les ha de poder esborrar, perquè
     justament una de les coses que compten és quantes vegades s'ha reiniciat
     un full. Qui vulgui netejar això ha de buidar tot el localStorage, que ja
     és una acció deliberada i que l'analitzador veu com a pèrdua de dades. */
  var CLAU_META = "repas-eso:meta";

  function meta() {
    try { return JSON.parse(localStorage.getItem(CLAU_META)) || {}; }
    catch (e) { return {}; }
  }

  function desaMeta(m) {
    try { localStorage.setItem(CLAU_META, JSON.stringify(m)); } catch (e) { /* ple o bloquejat */ }
  }

  function sumaMeta(camp, quant) {
    var m = meta();
    m[camp] = (m[camp] || 0) + (quant === undefined ? 1 : quant);
    desaMeta(m);
    return m[camp];
  }

  /* ── un intent i una pista ───────────────────────────────────────────────

     `estatDe` és tota la política en tres línies, i és deliberadament cega a
     la sessió: només mira els comptadors acumulats de l'ítem. */
  function estatDe(nint, npis, encert) {
    if (!encert) return "fallat";
    if (npis > 0) return "pista";
    if (nint > 1) return "segon";
    return "net";
  }

  /* Registra un intent. Retorna { estat, repas, tancat }:
       · repas=true  -> l'exercici ja estava tancat; això és pràctica, i el
                        registre no es toca (només puja `rep`).
       · tancat=true -> a partir d'ara l'estat és definitiu. */
  function intent(full, id, encert) {
    var it = llegeix(full).items[id] || {};
    var nint = (it.nint || 0) + 1;
    var npis = it.npis || 0;

    if (it.tancat) {
      apunta(full, id, { nint: nint, intents: nint, rep: (it.rep || 0) + 1 });
      sumaMeta("rep");
      return { estat: it.estat || "", repas: true, tancat: true };
    }

    var estat = estatDe(nint, npis, encert);
    /* Es tanca en encertar o al segon intent. L'estat es desa igualment al
       PRIMER error: si l'alumne se'n va ara, se'n va amb un "fallat" desat,
       no amb un "vist" que no compta enlloc. */
    var tancat = encert || nint >= 2;
    apunta(full, id, {
      estat: estat, nint: nint, npis: npis,
      intents: nint, pistes: npis, tancat: tancat ? 1 : 0
    });
    return { estat: estat, repas: false, tancat: tancat };
  }

  /* Una pista demanada queda desada immediatament i per sempre: no depèn de
     si després es respon, ni de si es recarrega la pàgina. */
  function pista(full, id, quantes) {
    var it = llegeix(full).items[id] || {};
    /* `quantes` és el nombre de pistes OBERTES en total en aquest exercici,
       no un increment: qui ja n'havia obert dues i recarrega la pàgina pot
       tornar-les a llegir sense que el comptador pugi a quatre, però tampoc
       no baixa a zero. El màxim mana. */
    var npis = Math.max(it.npis || 0, quantes === undefined ? (it.npis || 0) + 1 : quantes);
    apunta(full, id, { npis: npis, pistes: npis });
    return npis;
  }

  function item(full, id) { return llegeix(full).items[id] || {}; }

  /* Rellotge de feina activa. No mesura temps de pantalla oberta: només suma
     mentre la pestanya és visible, i es para sola. Serveix per a una sola
     cosa, que ara mateix és invisible: distingir 60 exercicis fets en dues
     setmanes de 60 exercicis "fets" en nou minuts. */
  function rellotge(interval) {
    var pas = interval || 15;
    var id = setInterval(function () {
      if (document.hidden) return;
      var m = meta();
      m.seg = (m.seg || 0) + pas;
      m.min = Math.floor(m.seg / 60);
      desaMeta(m);
    }, pas * 1000);
    return function () { clearInterval(id); };
  }

  function esborra(full) {
    sumaMeta("esb");
    desa(full, { v: 1, items: {} });
  }

  /* Desxifra el bloc de solucions (base64 de JSON en UTF-8).
     És un dissuasiu contra el «veure codi font», no una mesura de seguretat. */
  function clau(item) {
    var bin = atob(item.clau), b = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) b[i] = bin.charCodeAt(i);
    return JSON.parse(new TextDecoder().decode(b));
  }

  var ETIQ = {
    net: "encertat a la primera",
    pista: "encertat amb pista",
    segon: "encertat al segon intent",
    fallat: "fallat",
    vist: "vist, sense respondre",
    "": "per fer"
  };

  /* Pinta el mapa de llacunes d'UN full dins de `contenidor`, agrupat per bloc.
     `dades` és l'objecte window.FULL sencer (calen dades.full i dades.blocs). */
  function mapa(contenidor, dades, onClic) {
    var p = llegeix(dades.full).items;
    contenidor.innerHTML = "";
    dades.blocs.forEach(function (bloc) {
      var grup = document.createElement("div");
      grup.className = "grup";
      grup.innerHTML = "<h3>" + bloc.titol + " · " + bloc.items.length + "</h3>";
      var fila = document.createElement("div");
      fila.className = "mapa";
      bloc.items.forEach(function (id) {
        var e = (p[id] || {}).estat || "";
        var b = document.createElement("button");
        b.className = "cel " + e;
        b.type = "button";
        b.title = id + " — " + ETIQ[e];
        b.setAttribute("aria-label", "Pregunta " + id + ": " + ETIQ[e]);
        b.onclick = function () { onClic(id); };
        fila.appendChild(b);
      });
      grup.appendChild(fila);
      contenidor.appendChild(grup);
    });
  }

  function mat(node) {
    if (window.renderMathInElement) {
      try {
        renderMathInElement(node, {
          delimiters: [{ left: "$", right: "$", display: false }],
          throwOnError: false
        });
      } catch (e) { /* KaTeX no ha carregat (sense connexió): es queda el LaTeX en cru, llegible igualment */ }
    }
  }
  window.addEventListener("load", function () { mat(document.body); });

  return {
    llegeix: llegeix, desa: desa, apunta: apunta, apuntaError: apuntaError,
    estat: estat, esborra: esborra, item: item,
    intent: intent, pista: pista, estatDe: estatDe,
    meta: meta, desaMeta: desaMeta, sumaMeta: sumaMeta, rellotge: rellotge,
    clau: clau, mapa: mapa, mat: mat, ETIQ: ETIQ
  };
})();
