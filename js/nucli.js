/* nucli.js — estat compartit entre pàgines: progrés per full (localStorage),
   pintat del mapa de llacunes i renderitzat de matemàtiques amb KaTeX.

   El progrés de cada full es desa amb la seva pròpia clau
   ("repas-eso:full1", "repas-eso:full2"... fins a "repas-eso:full12") perquè
   cada full té el seu propi recorregut. Per això totes les funcions de
   progrés reben el número de full com a primer argument. */
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

  function esborra(full) { desa(full, { v: 1, items: {} }); }

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
    estat: estat, esborra: esborra,
    clau: clau, mapa: mapa, mat: mat, ETIQ: ETIQ
  };
})();
