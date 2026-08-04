/* practica.js — el cicle de quatre passos: enunciat, pistes, resposta, resolució.
   Genèric per a qualsevol full (window.FULL); abans estava fixat a full1. */
(function () {
  "use strict";
  if (!window.FULL) return;   /* practica.html ja mostra "aquest full encara no està preparat" */

  var D = window.FULL, $ = function (s) { return document.querySelector(s); };
  var ids = D.items.map(function (i) { return i.id; });
  var params = new URLSearchParams(location.search);
  var qid = params.get("q") || ids[0];
  var deLitinerari = params.get("origen") === "itinerari";
  var idx = Math.max(0, ids.indexOf(qid));
  var item = D.items[idx], k = RE.clau(item);

  var ordre = [0, 1, 2, 3];                       /* barreja per sessió */
  for (var i = 3; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)), t = ordre[i];
    ordre[i] = ordre[j]; ordre[j] = t;
  }
  var LLETRES = ["A", "B", "C", "D"];
  var pistes = 0, intents = 0, triada = -1, tancat = false;

  /* Si s'ha arribat des de l'itinerari (?origen=itinerari), TOTA la
     navegació de sortida (Següent, Anterior, i el "← Full X" de dalt) torna
     a itinerari.html en lloc de continuar amb l'ordre normal del full:
     l'itinerari és una llista de passos, no una seqüència que es navegui
     endavant/enrere des de dins l'exercici — allà l'alumne ja veu tot el
     recorregut i tria on continuar. */
  function ves(n) {
    if (deLitinerari) { location.href = "itinerari.html"; return; }
    if (n < 0 || n >= ids.length) { location.href = "full.html?full=" + D.full; return; }
    location.href = "practica.html?full=" + D.full + "&q=" + ids[n];
  }

  /* ---- capçalera ---- */
  var bloc = D.blocs.filter(function (b) { return b.id === item.bloc; })[0];
  $("#tornar").textContent = deLitinerari ? "← El teu itinerari" : "← " + D.titol;
  $("#tornar").href = deLitinerari ? "itinerari.html" : "full.html?full=" + D.full;
  $("#codi").textContent = item.id;
  $("#situacio").textContent = bloc.titol + " · " + (idx + 1) + " de " + ids.length;
  $("#encap").textContent = item.encapcalament;
  $("#enunciat").innerHTML = item.enunciat;
  if (item.nota) { $("#nota").innerHTML = "<strong>Nota:</strong> " + item.nota; $("#nota").hidden = false; }
  RE.mat(document.body);
  if (!RE.estat(D.full, item.id)) RE.apunta(D.full, item.id, { estat: "vist" });

  /* ---- pistes ---- */
  $("#pista").onclick = function () {
    if (pistes >= item.pistes.length) return;
    var d = document.createElement("div");
    d.className = "pista-txt";
    d.innerHTML = "<strong>Pista " + (pistes + 1) + ".</strong> " + item.pistes[pistes];
    $("#pistes").appendChild(d);
    RE.mat(d);
    pistes++;
    if (pistes >= item.pistes.length) {
      $("#pista").disabled = true;
      $("#pista").textContent = "No queden més pistes";
    }
  };

  /* ---- opcions ---- */
  var caixa = $("#opcions");
  ordre.forEach(function (orig, pos) {
    var b = document.createElement("button");
    b.className = "opcio";
    b.type = "button";
    b.dataset.orig = orig;
    b.innerHTML = '<span class="lletra">' + LLETRES[pos] + "</span><span>" +
      item.opcions[orig] + "</span>";
    b.onclick = function () {
      if (tancat) return;
      Array.prototype.forEach.call(caixa.children, function (c) { c.classList.remove("tria"); });
      b.classList.add("tria");
      triada = pos;
      $("#comprova").disabled = false;
    };
    caixa.appendChild(b);
  });
  RE.mat(caixa);

  $("#mostra").onclick = function () {
    $("#mostra").hidden = true;
    $("#zona-resposta").hidden = false;
    $("#opcions").scrollIntoView({ behavior: "smooth", block: "center" });
  };

  /* ---- comprovació ---- */
  $("#comprova").onclick = function () {
    if (triada < 0 || tancat) return;
    intents++;
    var orig = ordre[triada], encert = orig === k.ok;
    var btn = caixa.children[triada];
    var v = $("#veredicte");

    if (encert) {
      tancat = true;
      btn.classList.remove("tria"); btn.classList.add("bona");
      var estat = pistes ? "pista" : (intents > 1 ? "segon" : "net");
      RE.apunta(D.full, item.id, { estat: estat, pistes: pistes, intents: intents, err: "" });
      v.className = "veredicte be";
      v.innerHTML = "<h2>Correcte</h2>" + (
        pistes ? "Ho has resolt amb ajuda. Torna-hi d'aquí a uns dies sense demanar pistes."
        : intents > 1 ? "Bé al segon intent: el primer error ja saps quin era."
        : "A la primera i sense pistes.");
    } else {
      btn.classList.remove("tria"); btn.classList.add("dolenta");
      btn.disabled = true;
      RE.apunta(D.full, item.id, { err: k.err[orig] });
      v.className = "veredicte malament";
      if (intents === 1) {
        v.innerHTML = "<h2>Encara no</h2>" + k.diag[orig] +
          "<p class='petit apagat' style='margin:.4rem 0 0'>Tens un intent més.</p>";
        triada = -1;
        $("#comprova").disabled = true;
      } else {
        tancat = true;
        RE.apunta(D.full, item.id, { estat: "fallat", pistes: pistes, intents: intents });
        caixa.children[ordre.indexOf(k.ok)].classList.add("bona");
        v.innerHTML = "<h2>La resposta correcta és la " +
          LLETRES[ordre.indexOf(k.ok)] + "</h2>" + k.diag[orig] +
          "<p style='margin:.4rem 0 0'>Mira't la resolució amb calma.</p>";
      }
    }
    v.hidden = false;
    RE.mat(v);
    if (tancat) {
      Array.prototype.forEach.call(caixa.children, function (c) { c.disabled = true; });
      $("#comprova").hidden = true;
      $("#pista").hidden = true;
      $("#veure").hidden = false;
      $("#seguent").hidden = false;
      if (!encert) $("#veure").click();
    }
  };

  /* ---- resolució ---- */
  $("#veure").onclick = function () {
    $("#veure").hidden = true;
    var r = $("#resolucio");
    r.innerHTML = "<h2>Resolució</h2><ol>" +
      k.res.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ol>";
    r.hidden = false;
    RE.mat(r);
    r.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  $("#seguent").onclick = function () { ves(idx + 1); };
  $("#anterior").onclick = function () { ves(idx - 1); };
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" && tancat) ves(idx + 1);
    if (e.key === "ArrowLeft") ves(idx - 1);
  });
})();
