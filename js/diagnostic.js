/* diagnostic.js — controlador de diagnostic.html: tres fases dins la mateixa
   pàgina (autopercepció -> 15 preguntes -> redirecció a resultat.html).
   No hi ha pistes ni segon intent: és un test, no una pràctica; el cicle de
   practica.js ja cobreix l'aprenentatge, aquí només interessa mesurar. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var LLETRES = ["A", "B", "C", "D"];

  var fase = "carrega", blocs = null, preguntes = null, idx = 0;
  var percebuts = [], respostes = [];

  function mostraNomesFase(id) {
    ["#fase-carrega", "#fase-percepcio", "#fase-preguntes", "#fase-final"].forEach(function (s) {
      $(s).hidden = (s !== id);
    });
  }

  /* ---- fase 1: autopercepció ---- */
  function pintaPercepcio() {
    fase = "percepcio";
    mostraNomesFase("#fase-percepcio");
    var cont = $("#llista-percepcio");
    cont.innerHTML = "";
    blocs.forEach(function (b) {
      var k = b.full + ":" + b.id;
      var el = document.createElement("button");
      el.type = "button";
      el.className = "opcio percepcio-item";
      el.dataset.k = k;
      el.innerHTML = '<span class="marca" aria-hidden="true"></span><span>' + b.titol + '</span>';
      el.onclick = function () {
        el.classList.toggle("tria");
        var i = percebuts.indexOf(k);
        if (el.classList.contains("tria") && i === -1) percebuts.push(k);
        if (!el.classList.contains("tria") && i !== -1) percebuts.splice(i, 1);
      };
      cont.appendChild(el);
    });
  }

  $("#continua-percepcio").onclick = function () { pintaPreguntes(); };

  /* ---- fase 2: les preguntes ---- */
  function pintaPreguntes() {
    fase = "preguntes";
    mostraNomesFase("#fase-preguntes");
    idx = 0;
    pintaPregunta();
  }

  function pintaPregunta() {
    var p = preguntes[idx], item = p.item;
    var k = RE.clau(item);

    $("#progres-test").textContent = "Pregunta " + (idx + 1) + " de " + preguntes.length;
    $("#barra-test i").style.width = Math.round(100 * idx / preguntes.length) + "%";
    $("#enunciat-test").innerHTML = item.enunciat;
    $("#encap-test").textContent = item.encapcalament;

    var ordre = [0, 1, 2, 3];
    for (var i = 3; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = ordre[i];
      ordre[i] = ordre[j]; ordre[j] = t;
    }

    var caixa = $("#opcions-test");
    caixa.innerHTML = "";
    var tancat = false;
    ordre.forEach(function (orig, pos) {
      var b = document.createElement("button");
      b.className = "opcio";
      b.type = "button";
      b.innerHTML = '<span class="lletra">' + LLETRES[pos] + "</span><span>" + item.opcions[orig] + "</span>";
      b.onclick = function () {
        if (tancat) return;
        tancat = true;
        var encert = orig === k.ok;
        b.classList.add(encert ? "bona" : "dolenta");
        if (!encert) caixa.children[ordre.indexOf(k.ok)].classList.add("bona");
        Array.prototype.forEach.call(caixa.children, function (c) { c.disabled = true; });

        respostes.push({
          full: p.full, bloc: p.bloc, blocTitol: p.blocTitol,
          id: item.id, encert: encert
        });
        /* Marquem l'ítem com "vist" (no com a resolt) al progrés del seu full,
           perquè si l'alumne hi torna dins la pràctica normal encara li
           compti com a pendent, però sense sobreescriure si ja hi havia estat. */
        if (!RE.estat(p.full, item.id)) RE.apunta(p.full, item.id, { estat: "vist" });

        setTimeout(function () {
          idx++;
          if (idx < preguntes.length) pintaPregunta(); else acaba();
        }, 650);
      };
      caixa.appendChild(b);
    });
    RE.mat($("#fase-preguntes"));
  }

  /* ---- fase 3: desar i anar al resultat ---- */
  function acaba() {
    $("#barra-test i").style.width = "100%";
    RE_DIAG.desa({ ts: Date.now(), percebuts: percebuts, respostes: respostes });
    mostraNomesFase("#fase-final");
    setTimeout(function () { location.href = "resultat.html"; }, 700);
  }

  /* ---- arrencada ---- */
  RE_DIAG.blocsDisponibles(function (b) {
    if (!b.length) {
      $("#fase-carrega").innerHTML = "<p>Encara no hi ha cap full amb preguntes disponible.</p>" +
        '<a class="btn" href="index.html">← Tots els fulls</a>';
      return;
    }
    /* Seleccionem primer quins blocs entren al test d'avui (pot ser un
       subconjunt, si n'hi ha més de disponibles que els que caben en un
       test curt): l'autopercepció ha de preguntar exactament sobre aquests
       blocs, no sobre tots els disponibles, perquè després es puguin
       comparar de veritat amb el resultat. */
    blocs = RE_DIAG.seleccionaBlocsDelTest(b);
    preguntes = RE_DIAG.triaPreguntes(blocs);
    pintaPercepcio();
  });
})();
