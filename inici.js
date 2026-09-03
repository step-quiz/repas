/* inici.js — selector de fulls (Nivell 0), la portada del lloc.

   No carrega cap data/fullN.js (no cal: només mostrem tema + progrés, no
   preguntes). El total de preguntes de cada full es fixa a mà a la taula
   FULLS d'aquí sota; ha de coincidir amb el que reporta tools/build.py en
   compilar aquell full.

   Els 12 fulls tenen banc de preguntes i estan tots disponibles. La targeta
   sap pintar-se com a "Properament" (`disponible: false`, `total: null`) si
   algun dia s'hi afegeix un full abans de tenir-ne les preguntes.

   NUMERACIÓ — llegiu això abans de tocar res. El lloc té 12 fulls, i el seu
   número NO coincideix amb el nom del fitxer LaTeX font. La correspondència
   és:

     Full  1 = im1.tex   (ex. 1-34)      Full  7 = im8.tex   (ex. 119-151)
     Full  2 = im2.tex   (ex. 35-46)     Full  8 = im9.tex   (ex. 152-169)
     Full  3 = im3.tex   (ex. 47-61)     Full  9 = im10.tex  (ex. 170-199)
     Full  4 = im4.tex   (ex. 62-74)     Full 10 = im11.tex  (ex. 200-217)
     Full  5 = im5 + im6 (ex. 75-100)    Full 11 = im12.tex  (ex. 218-235)
     Full  6 = im7.tex   (ex. 101-118)   Full 12 = im13.tex  (ex. 236-259)

   El Full 5 recull dos fitxers font (im5 + im6), i per això a partir del
   Full 6 el número del full va un per sota del número de fitxer. Els 13
   fitxers im*.tex queden coberts pels 12 fulls; no n'hi ha cap de pendent.
   Vegeu HANDOVER.md §2 per a l'inventari complet. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  /* El `total` de cada full és el nombre de preguntes que té. Estava escrit
     a mà, i quan els fulls 6, 8, 10 i 11 van créixer va quedar desfasat: la
     portada deia "0/21" d'un full que en té 48. Ara es llegeix de
     `RE_TAULES`, que la portada ja carrega per al botó del codi i que surt
     directament de `data/`. El número escrit es manté només com a xarxa per
     si algun dia la portada deixés de carregar aquell fitxer. */
  function total(n, perDefecte) {
    var t = window.RE_TAULES && window.RE_TAULES.fulls
          && (window.RE_TAULES.fulls[n] || window.RE_TAULES.fulls[String(n)]);
    return (t && t.items) ? t.items.length : perDefecte;
  }

  var FULLS = [
    { n: 1, titol: "Nombres enters, fraccions i decimals", total: total(1, 140), disponible: true },
    { n: 2, titol: "Potències", total: total(2, 76), disponible: true },
    { n: 3, titol: "Successions i progressions", total: total(3, 50), disponible: true },
    { n: 4, titol: "Polinomis", total: total(4, 59), disponible: true },
    { n: 5, titol: "Equacions i sistemes", total: total(5, 99), disponible: true },
    { n: 6, titol: "Proporcionalitat i percentatges", total: total(6, 21), disponible: true },
    { n: 7, titol: "Teorema de Pitàgores. Àrees", total: total(7, 55), disponible: true },
    { n: 8, titol: "Teorema de Tales. Semblança", total: total(8, 32), disponible: true },
    { n: 9, titol: "Cossos geomètrics. Àrea i volum", total: total(9, 43), disponible: true },
    { n: 10, titol: "Funcions", total: total(10, 45), disponible: true },
    { n: 11, titol: "Estadística", total: total(11, 52), disponible: true },
    { n: 12, titol: "Combinatòria i probabilitat", total: total(12, 67), disponible: true }
  ];

  function fets(n) {
    var p = RE.llegeix(n).items, c = 0;
    Object.keys(p).forEach(function (id) {
      var e = p[id].estat;
      if (e === "net" || e === "pista" || e === "segon") c++;
    });
    return c;
  }

  var cont = $("#fulls");
  FULLS.forEach(function (f) {
    var el = document.createElement(f.disponible ? "a" : "div");
    el.className = "full" + (f.disponible ? "" : " properament");
    if (f.disponible) el.href = "full.html?full=" + f.n;

    var cos = '<span class="num">' + f.n + '</span><div class="tit">' + f.titol + "</div>";
    if (f.disponible) {
      var n = fets(f.n), pct = Math.round(100 * n / f.total);
      var etiqueta = n === 1 ? "activitat resolta" : "activitats resoltes";
      cos += '<div class="barra"><i style="width:' + pct + '%"></i></div>' +
             '<div class="meta">' + n + " " + etiqueta + "</div>";
    } else {
      cos += '<span class="pastilla">Properament</span>';
    }
    el.innerHTML = cos;
    cont.appendChild(el);
  });

  /* ---- bloc del tutor: targeta per fer el test, o resum si ja s'ha fet ----
     RE_DIAG ve de diagnostic-dades.js, carregat abans que aquest script. */
  function pintaTutor() {
    var d = RE_DIAG.llegeix();
    var cont = $("#tutor");
    if (!d) {
      cont.innerHTML =
        '<a class="tutor-targeta" href="diagnostic.html">' +
          '<span class="pastilla pastilla-blau">Nou</span>' +
          '<h3 class="tutor-titol">No saps per on començar?</h3>' +
          '<p class="petit apagat" style="margin:.35rem 0 0">Fes un test curt de 15 preguntes ' +
          "i et diem quins blocs et convé repassar primer.</p>" +
        "</a>";
      return;
    }
    var analisi = RE_DIAG.analitza(d);
    var reco = RE_DIAG.recomanacio(analisi);
    var noms = reco.map(function (b) { return b.titol; }).join(", ");
    cont.innerHTML =
      '<a class="tutor-targeta" href="resultat.html">' +
        '<h3 class="tutor-titol">Segons el teu test inicial</h3>' +
        '<p class="petit apagat" style="margin:.35rem 0 0">' +
          (reco.length ? "Et convé repassar: " + noms + "." : "Dominaves prou bé tots els blocs provats.") +
        "</p>" +
      "</a>" +
      '<button type="button" class="link-refer-test petit" id="refes-index">Tornar a fer el test</button>';

    /* Oferim sempre l'opció de refer el test des de la pantalla inicial,
       no només des de resultat.html: mateix comportament (confirmació abans
       d'esborrar) que el botó equivalent de resultat.js, per coherència. */
    $("#refes-index").onclick = function () {
      if (confirm("Vols refer el test inicial? El resultat anterior s'esborrarà.")) {
        RE_DIAG.esborra();
        RE_ITI.esborra();
        location.href = "diagnostic.html";
      }
    };
  }
  pintaTutor();
})();
