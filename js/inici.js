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

  var FULLS = [
    { n: 1,  titol: "Nombres enters, fraccions i decimals",  total: 140, disponible: true },
    { n: 2,  titol: "Potències",                             total: 76,   disponible: true },
    { n: 3,  titol: "Successions i progressions",             total: 50,   disponible: true },
    { n: 4,  titol: "Polinomis",                              total: 59,   disponible: true },
    { n: 5,  titol: "Equacions i sistemes",                   total: 99,   disponible: true },
    { n: 6,  titol: "Proporcionalitat i percentatges",        total: 21,   disponible: true },
    { n: 7,  titol: "Teorema de Pitàgores. Àrees",            total: 55,   disponible: true },
    { n: 8,  titol: "Teorema de Tales. Semblança",            total: 32,   disponible: true },
    { n: 9,  titol: "Cossos geomètrics. Àrea i volum",        total: 43,   disponible: true },
    { n: 10, titol: "Funcions",                               total: 45,   disponible: true },
    { n: 11, titol: "Estadística",                            total: 52,   disponible: true },
    { n: 12, titol: "Combinatòria i probabilitat",            total: 67,   disponible: true }
  ];

  function fets(n) {
    var p = RE.llegeix(n).items, c = 0;
    Object.keys(p).forEach(function (id) {
      var e = p[id].estat;
      if (e === "net" || e === "pista" || e === "segon") c++;
    });
    return c;
  }

  var disponibles = FULLS.filter(function (f) { return f.disponible; }).length;
  $("#resum").textContent = disponibles + " de " + FULLS.length + " fulls a punt. " +
    "Els altres s'aniran afegint a mesura que es preparin.";

  var cont = $("#fulls");
  FULLS.forEach(function (f) {
    var el = document.createElement(f.disponible ? "a" : "div");
    el.className = "full" + (f.disponible ? "" : " properament");
    if (f.disponible) el.href = "full.html?full=" + f.n;

    var cos = '<span class="num">' + f.n + '</span><div class="tit">' + f.titol + "</div>";
    if (f.disponible) {
      var n = fets(f.n), pct = Math.round(100 * n / f.total);
      cos += '<div class="barra"><i style="width:' + pct + '%"></i></div>' +
             '<div class="meta">' + n + " de " + f.total + " resoltes</div>";
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
          "<h2>No saps per on començar?</h2>" +
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
        "<h2>Segons el teu test inicial</h2>" +
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

  if (window.RE_CODI_UI) {
    RE_CODI_UI.pinta(document.getElementById("codi-tot"), null,
                     "Codi de tota la teva feina");
  }
})();
