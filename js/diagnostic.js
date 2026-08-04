/* diagnostic.js — controlador de diagnostic.html.

   Una prova per pantalla, en ordre de currículum. A cada prova l'alumne
   marca en quin estat es troba; si diu que la sap resoldre, apareixen les
   quatre opcions i l'ha de contestar. Res més: no hi ha pistes, ni segon
   intent, ni resolució. Això és una mesura, no una pràctica — el cicle
   d'aprenentatge ja el fa practica.html.

   No es carrega cap data/fullN.js: les proves són a js/proves-inicials.js i
   la pàgina s'obre a l'instant. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var LLETRES = ["A", "B", "C", "D"];

  var PROVES = RE_PROVES.PROVES, ESTATS = RE_PROVES.ESTATS;
  var idx = 0, respostes = [];

  function barreja(a) {
    var c = a.slice();
    for (var i = c.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = c[i]; c[i] = c[j]; c[j] = t;
    }
    return c;
  }

  function pintaProgres() {
    $("#progres-test").textContent = "Pregunta " + (idx + 1) + " de " + PROVES.length;
    $("#barra-test i").style.width = Math.round(100 * idx / PROVES.length) + "%";
  }

  /* Registra la resposta i passa a la següent prova (o al final). */
  function respon(prova, estat, encert) {
    respostes.push({ prova: prova.id, estat: estat, encert: encert });
    idx++;
    if (idx < PROVES.length) pinta();
    else acaba();
  }

  /* Les quatre opcions, només per a qui ha dit que ho sap resoldre. Es
     pinten barrejades; l'índex original va a data-orig perquè saber quina
     és la bona no depengui de la posició. */
  function pintaOpcions(prova) {
    var cont = $("#comprovacio");
    cont.hidden = false;
    cont.innerHTML = '<p class="petit apagat" style="margin:0 0 .5rem">' +
      "Doncs va: quina és la resposta?</p>" +
      '<div class="opcions" id="opcions-test"></div>';
    var caixa = $("#opcions-test");
    barreja(prova.opcions.map(function (o, i) { return { text: o, orig: i }; }))
      .forEach(function (o, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "opcio";
        b.innerHTML = '<span class="lletra">' + LLETRES[i] + "</span>" +
                      '<span class="cos">' + o.text + "</span>";
        b.onclick = function () { respon(prova, "domino", o.orig === prova.ok); };
        caixa.appendChild(b);
      });
    RE.mat(caixa);
    if (caixa.scrollIntoView) caixa.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function pinta() {
    var prova = PROVES[idx];
    pintaProgres();

    $("#encap-test").innerHTML = prova.encap;
    $("#enunciat-test").innerHTML = prova.enunciat;
    $("#comprovacio").hidden = true;
    $("#comprovacio").innerHTML = "";

    var cont = $("#estats-test");
    cont.innerHTML = "";
    ESTATS.forEach(function (e) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opcio opcio-estat";
      b.innerHTML = '<span class="cos">' + e.text + "</span>";
      b.onclick = function () {
        if (e.id === "domino") {
          /* Marquem la tria i demanem la comprovació, sense avançar encara. */
          [].forEach.call(cont.children, function (x) { x.classList.remove("triada"); });
          b.classList.add("triada");
          pintaOpcions(prova);
        } else {
          respon(prova, e.id, null);
        }
      };
      cont.appendChild(b);
    });

    RE.mat($("#targeta-test"));
    try { window.scrollTo(0, 0); } catch (e) { /* entorns sense scroll */ }
  }

  function acaba() {
    $("#barra-test i").style.width = "100%";
    $("#fase-preguntes").hidden = true;
    $("#fase-final").hidden = false;
    RE_DIAG.desa(respostes);
    RE_ITI.esborra();   /* qualsevol itinerari anterior ja no correspon */
    setTimeout(function () { location.href = "resultat.html"; }, 500);
  }

  $("#fase-carrega").hidden = true;
  $("#fase-preguntes").hidden = false;
  pinta();
})();
