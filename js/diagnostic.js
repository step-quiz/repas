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

  /* Navegació amb fletxes per a un radiogroup fet de <button role="radio">:
     mou el focus i el roving tabindex sense seleccionar (Space/Enter, ja
     natius al <button>, confirmen la tria). Es fa servir tant per les
     quatre opcions de resposta com pel grup d'autoavaluació — són el
     mateix patró de control encara que un no tingui resposta correcta. */
  function fesNavegableAmbFletxes(caixa) {
    return function (e) {
      var n = caixa.children.length;
      var actual = Array.prototype.indexOf.call(caixa.children, document.activeElement);
      if (actual < 0) return;
      var seguent = -1;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") seguent = (actual + 1) % n;
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") seguent = (actual - 1 + n) % n;
      else if (e.key === "Home") seguent = 0;
      else if (e.key === "End") seguent = n - 1;
      else return;
      e.preventDefault();
      e.stopPropagation();
      caixa.children[actual].tabIndex = -1;
      var el = caixa.children[seguent];
      el.tabIndex = 0;
      el.focus();
    };
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
    cont.innerHTML = '<p class="petit apagat" style="margin:0 0 .5rem" id="pregunta-resposta">' +
      DEMANA[estat] + "</p>" +
      '<div class="opcions" id="opcions-test" role="radiogroup" aria-labelledby="pregunta-resposta"></div>';
    var caixa = $("#opcions-test");
    barreja(prova.opcions.map(function (o, i) { return { text: o, orig: i }; }))
      .forEach(function (o, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "opcio";
        b.setAttribute("data-orig", o.orig);
        b.setAttribute("role", "radio");
        b.setAttribute("aria-checked", "false");
        b.tabIndex = i === 0 ? 0 : -1;
        b.innerHTML = '<span class="lletra">' + LLETRES[i] + "</span>" +
                      '<span class="cos">' + o.text + "</span>";
        b.onclick = function () {
          if ($("#targeta-test").classList.contains("inert")) return;
          b.classList.add("tria");
          b.setAttribute("aria-checked", "true");
          respon(prova, estat, o.orig === prova.ok);
        };
        caixa.appendChild(b);
      });
    RE.mat(caixa);
    caixa.onkeydown = fesNavegableAmbFletxes(caixa);
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
    ESTATS.forEach(function (e, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "opcio opcio-estat";
      b.setAttribute("data-estat", e.id);
      b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", "false");
      b.tabIndex = i === 0 ? 0 : -1;
      b.innerHTML = '<span class="cos">' + e.text + "</span>";
      b.onclick = function () {
        if ($("#targeta-test").classList.contains("inert")) return;
        [].forEach.call(cont.children, function (x) {
          x.classList.remove("triada");
          x.setAttribute("aria-checked", "false");
        });
        b.classList.add("triada");
        b.setAttribute("aria-checked", "true");
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
    cont.onkeydown = fesNavegableAmbFletxes(cont);

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
