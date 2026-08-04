/* codi-ui.js — el tros de pantalla que dona el codi a l'alumne.

   Un sol lloc per als dos punts on es demana (el full i la portada), perquè
   el text que llegeix l'alumne sigui idèntic als dos i no s'hagi de mantenir
   dues vegades. */
window.RE_CODI_UI = (function () {
  "use strict";

  function $(s, dins) { return (dins || document).querySelector(s); }

  /* Frase de resum. A propòsit NO diu la nota: repàs-ESO és pràctica, i si
     l'alumne veu una nota a cada codi deixarà d'obrir pistes i evitarà els
     exercicis difícils, que és exactament el contrari del que volem. La nota
     surt del codi, i qui la vol veure és el professorat. */
  function frase(dades) {
    var c = { net: 0, segon: 0, pista: 0, fallat: 0 }, fets = 0;
    dades.fulls.forEach(function (f) {
      f.estats.forEach(function (e) {
        if (e && e !== "vist") { c[e] = (c[e] || 0) + 1; fets++; }
      });
    });
    if (!fets) return null;
    var trossos = [];
    if (c.net) trossos.push(c.net + " a la primera");
    if (c.segon) trossos.push(c.segon + " al segon intent");
    if (c.pista) trossos.push(c.pista + " amb pista");
    if (c.fallat) trossos.push(c.fallat + " fallats");
    return fets + (fets === 1 ? " exercici" : " exercicis") + ": " + trossos.join(", ") + ".";
  }

  /* Pinta el panell dins de `contenidor`. `quins` és una llista de números de
     full, o null per a tot el que hi hagi. */
  function pinta(contenidor, quins, titol) {
    var dades = window.RE_CODI.recull(quins);
    var f = frase(dades);

    if (!f) {
      contenidor.innerHTML =
        '<div class="targeta" style="padding:1rem">' +
        '<h3 style="margin:0 0 .4rem">' + (titol || "Codi per al professorat") + "</h3>" +
        '<p class="petit apagat" style="margin:0">Encara no has fet cap exercici ' +
        "d'aquesta part. El codi apareixerà quan n'hagis fet algun.</p></div>";
      return;
    }

    var codi = window.RE_CODI.genera(dades);

    contenidor.innerHTML =
      '<div class="targeta" style="padding:1rem">' +
      '<h3 style="margin:0 0 .4rem">' + (titol || "Codi per al professorat") + "</h3>" +
      '<p class="petit apagat" style="margin:0 0 .7rem">' + f +
      " El codi recull tota la teva feina fins ara, exercici per exercici. " +
      "Cada codi nou substitueix l'anterior: si n'has enviat un abans, no passa res.</p>" +
      '<div id="codi-caixa" style="font:600 13px/1.55 var(--mono);word-break:break-all;' +
      "user-select:all;-webkit-user-select:all;padding:.6rem .7rem;background:var(--card);" +
      'border:1px solid var(--vora);border-radius:9px;letter-spacing:.02em"></div>' +
      '<div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.7rem">' +
      '<button class="btn" id="codi-copia">Copia el codi</button>' +
      '<button class="btn buit" id="codi-refresca">Torna\'l a generar</button></div>' +
      '<p class="petit apagat" id="codi-avis" style="margin:.6rem 0 0"></p></div>';

    $("#codi-caixa", contenidor).textContent = codi;

    $("#codi-copia", contenidor).onclick = function () {
      var b = this;
      function be() { b.textContent = "Copiat"; setTimeout(function () { b.textContent = "Copia el codi"; }, 2500); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codi).then(be, manual);
      } else { manual(); }
      function manual() {
        /* Sense permís de porta-retalls (fitxer local, navegador antic): se
           selecciona el text i l'alumne fa Ctrl+C, que sempre funciona. */
        var caixa = $("#codi-caixa", contenidor), r = document.createRange();
        r.selectNodeContents(caixa);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        $("#codi-avis", contenidor).textContent =
          "El codi ja està seleccionat: prem Ctrl+C (o Cmd+C) per copiar-lo.";
      }
    };

    $("#codi-refresca", contenidor).onclick = function () { pinta(contenidor, quins, titol); };
  }

  return { pinta: pinta };
})();
