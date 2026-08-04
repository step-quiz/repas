/* diagnostic.js — controlador de diagnostic.html.

   Una prova per pantalla, en ordre de currículum. A cada prova l'alumne fa
   dues coses: primer diu en quin estat es troba, i tot seguit contesta la
   pregunta de veritat. L'única resposta que se salta la pregunta és "no
   recordo haver-ho fet mai": allà no hi ha res a mesurar.

   Res més: no hi ha pistes, ni segon intent, ni resolució. Això és una
   mesura, no una pràctica — el cicle d'aprenentatge ja el fa practica.html.
   Tampoc es diu si la resposta era bona: el test no és un examen i saber-ho
   pregunta a pregunta només afegiria pressió; tot ve junt a resultat.html.

   No es carrega cap data/fullN.js: les proves són a js/proves-inicials.js i
   la pàgina s'obre a l'instant. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  var LLETRES = ["A", "B", "C", "D"];

  /* Pausa entre pregunta i pregunta. Prou perquè el canvi de pantalla no
     sigui un cop sec i l'alumne noti que ha passat de pregunta, prou curta
     perquè no faci l'efecte d'estar esperant. */
  var PAUSA = 1500;

  var PROVES = RE_PROVES.PROVES, ESTATS = RE_PROVES.ESTATS;
  var idx = 0, respostes = [];

  /* Com es demana la resposta segons el que l'alumne acaba de dir. La
     pregunta és la mateixa; el que canvia és que a qui ha dit que no se'n
     recorda li demanem que ho provi igualment, no que ho demostri. */
  var DEMANA = {
    domino: "Doncs va: quina és la resposta?",
    oblidat: "Prova-ho igualment: quina creus que és la resposta?",
    no_entes: "Prova-ho igualment: quina creus que és la resposta?"
  };

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

  /* Registra la resposta, ensenya l'avís de transició i, després de la
     pausa, passa a la següent prova (o al final). Durant la pausa la
     targeta queda inerta: cap botó respon. */
  function respon(prova, estat, encert) {
    respostes.push({ prova: prova.id, estat: estat, encert: encert });
    idx++;

    $("#targeta-test").classList.add("inert");
    var avis = $("#transicio");
    avis.hidden = false;
    avis.textContent = idx < PROVES.length
      ? "Passem a la següent pregunta…"
      : "Ja està: preparem el teu resultat…";
    $("#barra-test i").style.width = Math.round(100 * idx / PROVES.length) + "%";

    setTimeout(function () {
      avis.hidden = true;
      $("#targeta-test").classList.remove("inert");
      if (idx < PROVES.length) pinta();
      else acaba();
    }, PAUSA);
  }

  /* Les quatre opcions de la pregunta de veritat. Es pinten barrejades;
     l'índex original va a data-orig perquè saber quina és la bona no
     depengui de la posició. */
  function pintaOpcions(prova, estat) {
    /* Un cop l'alumne ha dit en quin estat es troba, el panell de
       l'autoavaluació desapareix: ja ha fet la seva feina, i deixar-lo obliga
       a fer scroll per arribar a les opcions de la resposta. La targeta queda
       amb l'enunciat i les quatre opcions, que és tot el que fa falta ara. */
    $("#autoavaluacio").hidden = true;

    var cont = $("#comprovacio");
    cont.hidden = false;
    cont.innerHTML = '<p class="petit apagat" style="margin:0 0 .5rem">' +
      DEMANA[estat] + "</p>" +
      '<div class="opcions" id="opcions-test"></div>';
    var caixa = $("#opcions-test");
    barreja(prova.opcions.map(function (o, i) { return { text: o, orig: i }; }))
      .forEach(function (o, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "opcio";
        b.setAttribute("data-orig", o.orig);
        b.innerHTML = '<span class="lletra">' + LLETRES[i] + "</span>" +
                      '<span class="cos">' + o.text + "</span>";
        b.onclick = function () {
          if ($("#targeta-test").classList.contains("inert")) return;
          b.classList.add("tria");
          respon(prova, estat, o.orig === prova.ok);
        };
        caixa.appendChild(b);
      });
    RE.mat(caixa);
    /* Amb el panell amagat la targeta sencera hi cap: portem-la amunt, no
       les opcions, perquè l'enunciat continuï a la vista mentre es respon. */
    var targeta = $("#targeta-test");
    if (targeta.scrollIntoView) targeta.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function pinta() {
    var prova = PROVES[idx];
    pintaProgres();

    $("#encap-test").innerHTML = prova.encap;
    $("#enunciat-test").innerHTML = prova.enunciat;
    $("#comprovacio").hidden = true;
    $("#comprovacio").innerHTML = "";
    $("#autoavaluacio").hidden = false;

    var cont = $("#estats-test");
    cont.innerHTML = "";
    ESTATS.forEach(function (e) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opcio opcio-estat";
      b.setAttribute("data-estat", e.id);
      b.innerHTML = '<span class="cos">' + e.text + "</span>";
      b.onclick = function () {
        if ($("#targeta-test").classList.contains("inert")) return;
        [].forEach.call(cont.children, function (x) { x.classList.remove("triada"); });
        b.classList.add("triada");
        if (e.id === "mai") {
          /* No ho ha vist mai: no hi ha res a preguntar. */
          $("#comprovacio").hidden = true;
          respon(prova, "mai", null);
        } else {
          /* Ha dit alguna cosa sobre el seu estat; ara, la pregunta. */
          pintaOpcions(prova, e.id);
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
    location.href = "resultat.html";
  }

  $("#fase-carrega").hidden = true;
  $("#fase-preguntes").hidden = false;
  pinta();
})();
