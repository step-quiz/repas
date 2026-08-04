/* itinerari.js — controlador d'itinerari.html: pinta el recorregut
   personalitzat i porta al pas pendent següent. L'estat de cada pas es
   consulta sempre en viu contra RE (mai un duplicat propi — vegeu
   itinerari-dades.js). */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  function ves(pas) {
    location.href = "practica.html?full=" + pas.full + "&q=" + encodeURIComponent(pas.id) + "&origen=itinerari";
  }

  function pinta(ruta) {
    var prog = RE_ITI.progres(ruta);
    $("#comptador-linia").innerHTML = "<strong>" + prog.fets + " de " + prog.total + "</strong> fets";

    var seguent = RE_ITI.primerPendent(ruta);
    var botoContinua = $("#continua");
    if (!seguent) {
      botoContinua.textContent = "Itinerari complet 🎉";
      botoContinua.disabled = true;
    } else {
      botoContinua.disabled = false;
      botoContinua.textContent = prog.fets ? "Continua l'itinerari" : "Comença l'itinerari";
      botoContinua.onclick = function () { ves(seguent); };
    }

    var cont = $("#passos");
    cont.innerHTML = "";
    ruta.forEach(function (pas, i) {
      var fet = RE_ITI.pasFet(pas);
      var esElSeguent = !fet && seguent && pas.id === seguent.id && pas.full === seguent.full;
      var el = document.createElement("button");
      el.className = "bloc pas-itinerari" + (fet ? " fet" : "") + (esElSeguent ? " destacat" : "");
      el.type = "button";
      el.innerHTML =
        '<span class="num">' + (fet ? "✓" : i + 1) + "</span>" +
        '<span class="cos"><span class="tit">' + pas.blocTitol + "</span>" +
        '<div class="petit apagat">Full ' + pas.full + (fet ? " · Fet" : esElSeguent ? " · Següent" : "") + "</div></span>";
      el.onclick = function () { ves(pas); };
      cont.appendChild(el);
    });
  }

  function carregaIPinta() {
    RE_ITI.obtenIGenera(function (ruta) {
      if (!ruta.length) {
        $("#main").innerHTML =
          '<p class="cimera">Repàs per començar 1r de batxillerat</p>' +
          "<h1>Encara no tens cap itinerari</h1>" +
          '<p class="apagat" style="margin:.6rem 0 1.4rem">Primer cal fer el test inicial: ' +
          "a partir del resultat et preparem un recorregut personalitzat.</p>" +
          '<a class="btn" href="diagnostic.html">Fer el test inicial</a>';
        return;
      }
      var mida = ruta.length;
      $("#subtitol").textContent = mida < RE_ITI.MIN_TOTAL
        ? "Un recorregut curt: és tot el que hem trobat als blocs que et convé repassar."
        : "Un recorregut de " + mida + " exercicis, dels blocs que et convé repassar.";
      pinta(ruta);
    });
  }

  /* L'itinerari nou es construeix amb els mateixos temes que va dir el test,
     però amb exercicis que l'alumne encara no ha fet (i, si el bloc s'ha
     quedat curt, amb els que ja hagi fet). El progrés dels fulls no es toca:
     el que es perd és la llista d'aquesta pàgina, no la feina. */
  $("#refes").onclick = function () {
    if (confirm("Vols generar un itinerari nou? Et prepararem un recorregut amb exercicis que encara no has fet, dels mateixos temes. La llista d'ara es perdrà, però tota la feina feta segueix comptant als seus fulls.")) {
      RE_ITI.esborra();
      carregaIPinta();
    }
  };

  carregaIPinta();
})();
