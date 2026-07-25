/* portada.js — mapa de llacunes, tria de bloc i resum d'errors. */
(function () {
  "use strict";
  var D = window.FULL1, $ = function (s) { return document.querySelector(s); };

  function ves(id) { location.href = "practica.html?q=" + encodeURIComponent(id); }

  function primerPendent(ids) {
    for (var i = 0; i < ids.length; i++) {
      var e = RE.estat(ids[i]);
      if (e !== "net" && e !== "pista" && e !== "segon") return ids[i];
    }
    return ids[0];
  }

  function comptes() {
    var p = RE.llegeix().items, n = { net: 0, pista: 0, segon: 0, fallat: 0, vist: 0 };
    D.items.forEach(function (it) { var e = (p[it.id] || {}).estat; if (e) n[e]++; });
    return n;
  }

  function pinta() {
    var n = comptes(), fets = n.net + n.pista + n.segon;
    $("#comptador").textContent = fets + " de " + D.items.length + " resoltes";
    $("#detall").textContent = n.fallat
      ? n.fallat + " per revisar · " + n.vist + " començades"
      : "Cada quadret és un apartat. Toca'n un per anar-hi.";

    RE.mapa($("#mapa"), D, ves);

    var blocs = $("#blocs");
    blocs.innerHTML = "";
    D.blocs.forEach(function (b, i) {
      var p = RE.llegeix().items;
      var ok = b.items.filter(function (id) {
        var e = (p[id] || {}).estat; return e === "net" || e === "pista" || e === "segon";
      }).length;
      var el = document.createElement("button");
      el.className = "bloc";
      el.type = "button";
      el.innerHTML = '<span class="num">' + (i + 1) + '</span><span class="cos">' +
        '<span class="tit">' + b.titol + '</span>' +
        '<div class="petit apagat">' + b.descripcio + '</div>' +
        '<div class="barra"><i style="width:' + (100 * ok / b.items.length) + '%"></i></div>' +
        '</span><span class="petit apagat">' + ok + "/" + b.items.length + '</span>';
      el.onclick = function () { ves(primerPendent(b.items)); };
      blocs.appendChild(el);
    });

    $("#continua").onclick = function () {
      ves(primerPendent(D.items.map(function (i) { return i.id; })));
    };

    /* Resum diagnòstic: quins errors es repeteixen. */
    var p = RE.llegeix().items, tally = {};
    Object.keys(p).forEach(function (id) {
      if (p[id].err) tally[p[id].err] = (tally[p[id].err] || 0) + 1;
    });
    var tops = Object.keys(tally).sort(function (a, b) { return tally[b] - tally[a]; });
    var cont = $("#errades");
    if (!tops.length) { cont.hidden = true; return; }
    var textos = {};
    D.items.forEach(function (it) {
      var k = RE.clau(it);
      k.err.forEach(function (e, i) { if (e && !textos[e]) textos[e] = k.diag[i]; });
    });
    cont.hidden = false;
    cont.innerHTML = "<h2>Els errors que repeteixes</h2>" +
      tops.slice(0, 4).map(function (e) {
        return '<div class="errada"><strong>' + tally[e] + " vegade" +
          (tally[e] > 1 ? "s" : "") + ":</strong> " + (textos[e] || e) + "</div>";
      }).join("");
    RE.mat(cont);
  }

  $("#reinicia").onclick = function () {
    if (confirm("Vols esborrar el teu progrés d'aquest full?")) { RE.esborra(); pinta(); }
  };
  pinta();
})();
