/* nucli.js — estat compartit: progrés, mapa i renderitzat de matemàtiques. */
window.RE = (function () {
  "use strict";
  var CLAU = "repas-eso:full1";

  function llegeix() {
    try { return JSON.parse(localStorage.getItem(CLAU)) || { v: 1, items: {} }; }
    catch (e) { return { v: 1, items: {} }; }
  }
  function desa(p) {
    try { localStorage.setItem(CLAU, JSON.stringify(p)); } catch (e) {}
  }
  function estat(id) { return (llegeix().items[id] || {}).estat || ""; }
  function apunta(id, dades) {
    var p = llegeix();
    p.items[id] = Object.assign({}, p.items[id], dades, { ts: Date.now() });
    desa(p);
  }
  function esborra() { desa({ v: 1, items: {} }); }

  /* Desxifra el bloc de solucions (base64 de UTF-8). Ofuscació, no seguretat. */
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

  function mapa(contenidor, dades, onClic) {
    var p = llegeix();
    contenidor.innerHTML = "";
    dades.blocs.forEach(function (bloc) {
      var g = document.createElement("div");
      g.className = "grup";
      g.innerHTML = "<h3>" + bloc.titol + " · " + bloc.items.length + "</h3>";
      var fila = document.createElement("div");
      fila.className = "mapa";
      bloc.items.forEach(function (id) {
        var e = (p.items[id] || {}).estat || "";
        var b = document.createElement("button");
        b.className = "cel " + e;
        b.type = "button";
        b.title = id + " — " + ETIQ[e];
        b.setAttribute("aria-label", "Pregunta " + id + ": " + ETIQ[e]);
        b.onclick = function () { onClic(id); };
        fila.appendChild(b);
      });
      g.appendChild(fila);
      contenidor.appendChild(g);
    });
  }

  function mat(node) {
    if (window.renderMathInElement) {
      try {
        renderMathInElement(node, {
          delimiters: [{ left: "$", right: "$", display: false }],
          throwOnError: false
        });
      } catch (e) {}
    }
  }
  /* KaTeX arriba amb defer: quan estigui, es renderitza tot el que hi ha. */
  window.addEventListener("load", function () { mat(document.body); });

  return {
    llegeix: llegeix, apunta: apunta, estat: estat, esborra: esborra,
    clau: clau, mapa: mapa, mat: mat, ETIQ: ETIQ
  };
})();
