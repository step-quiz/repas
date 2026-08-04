/* resultat.js — controlador de resultat.html: llegeix el test inicial i el
   converteix en un punt de partida.

   El que aquesta pàgina ha de fer, per ordre d'importància:
   1. Dir-li a l'alumne què fa a continuació (l'itinerari), no donar-li una
      nota.
   2. Ensenyar-li els temes que donava per sabuts i no ho estaven. És l'única
      informació del test que ell no tenia abans d'entrar-hi.
   3. Deixar veure la llista sencera de les 15 destreses, perquè pugui
      comprovar que el resum quadra i triar pel seu compte si vol. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  var dades = RE_DIAG.llegeix();
  if (!dades) {
    $("#main").innerHTML =
      '<p class="cimera">Repàs per començar 1r de batxillerat</p>' +
      "<h1>Encara no has fet el test</h1>" +
      '<p class="apagat" style="margin:.6rem 0 1.4rem">Fes el test inicial per veure aquí per on et convé començar.</p>' +
      '<a class="btn" href="diagnostic.html">Fer el test inicial</a>';
    return;
  }

  var analisi = RE_DIAG.analitza(dades);
  var recomanats = RE_DIAG.recomanacio(analisi);
  var comptes = RE_DIAG.resum(analisi);
  var total = analisi.length;

  /* ---- resum d'una línia ----
     En comptes d'un "X de 15 encertades", que aquí no voldria dir res (no
     totes les proves es contesten), el resum diu quantes destreses estan en
     cada situació. És el que l'alumne pot fer servir per orientar-se. */
  var trossos = [];
  if (comptes.dominat) trossos.push("<strong>" + comptes.dominat + "</strong> les tens");
  if (comptes.oblidat) trossos.push("<strong>" + comptes.oblidat + "</strong> rovellades");
  if (comptes.no_entes) trossos.push("<strong>" + comptes.no_entes + "</strong> que no vas entendre");
  if (comptes.mai) trossos.push("<strong>" + comptes.mai + "</strong> que no havies vist");
  if (comptes.falsa_seguretat) trossos.push("<strong>" + comptes.falsa_seguretat + "</strong> que donaves per sabudes");
  $("#resum-linia").innerHTML = "De " + total + " destreses: " + trossos.join(", ") + ".";

  /* ---- el que donava per sabut i no ho estava ---- */
  var falses = analisi.filter(function (a) { return a.situacio === "falsa_seguretat"; });
  var contDesajust = $("#desajust");
  if (!falses.length) {
    contDesajust.hidden = true;
  } else {
    var html = "<h2>El que donaves per sabut</h2>" +
      '<p class="petit apagat" style="margin:.3rem 0 .7rem">Has dit que ho sabies fer i la resposta no era la bona. ' +
      "Val la pena començar per aquí: és el que no repassaries pel teu compte.</p>";
    falses.forEach(function (a) {
      html += '<div class="errada"><strong>' + a.tema + "</strong></div>";
    });
    contDesajust.innerHTML = html;
  }

  /* ---- per on comencem ---- */
  var contReco = $("#recorregut");
  if (!recomanats.length) {
    contReco.innerHTML = "<p class='apagat'>Pel test, totes les destreses que hem mirat les tens. " +
      "Pots repassar igualment el que vulguis des del llistat de fulls.</p>";
  } else {
    var noms = recomanats.map(function (a) { return a.tema.toLowerCase(); }).join(", ");
    contReco.innerHTML =
      '<a class="tutor-targeta" href="itinerari.html">' +
        "<h2>El teu itinerari personalitzat</h2>" +
        '<p class="petit apagat" style="margin:.35rem 0 0">Exercicis de ' + noms +
          ", dels més senzills als més complets i alternant de tema.</p>" +
      "</a>";
  }

  /* ---- la llista sencera de les 15 destreses ----
     En ordre de currículum, no per urgència: així l'alumne veu el recorregut
     de l'ESO tal com el va fer i on se li va trencar. */
  var COLOR = {
    dominat: "var(--verd)", oblidat: "var(--ambre)",
    no_entes: "var(--vermell)", mai: "var(--vermell)",
    falsa_seguretat: "var(--vermell)"
  };
  var contTaula = $("#taula-proves");
  contTaula.innerHTML = "";
  analisi.slice().sort(function (a, b) { return a.ordre - b.ordre; }).forEach(function (a) {
    var el = document.createElement("a");
    el.className = "bloc";
    el.href = "full.html?full=" + a.full + "&bloc=" + encodeURIComponent(a.bloc);
    el.innerHTML =
      '<span class="cos"><span class="tit">' + a.tema + "</span>" +
      '<div class="petit" style="color:' + COLOR[a.situacio] + '">' + a.etiqueta + "</div>" +
      '<div class="petit apagat">Full ' + a.full + "</div></span>";
    contTaula.appendChild(el);
  });

  $("#refes").onclick = function () {
    if (confirm("Vols refer el test inicial? El resultat anterior i l'itinerari s'esborraran.")) {
      RE_DIAG.esborra();
      RE_ITI.esborra();
      location.href = "diagnostic.html";
    }
  };
})();
