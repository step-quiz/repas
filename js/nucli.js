/* nucli.js — estat compartit entre pàgines: progrés per full (localStorage),
   pintat del mapa de llacunes i renderitzat de matemàtiques amb KaTeX.

   El progrés de cada full es desa amb la seva pròpia clau
   ("repas-eso:full1", "repas-eso:full2"...) perquè cada full té el seu propi
   recorregut. Per això totes les funcions de progrés reben el número de full
   com a primer argument — cap altre canvi de comportament respecte abans. */
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
    llegeix: llegeix, desa: desa, apunta: apunta, estat: estat, esborra: esborra,
    clau: clau, mapa: mapa, mat: mat, ETIQ: ETIQ
  };
})();
