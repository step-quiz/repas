/* inici.js — selector de fulls (Nivell 0), la nova portada del lloc.

   No carrega cap data/fullN.js (no cal: només mostrem tema + progrés, no
   preguntes). El total de preguntes de cada full es fixa aquí a mà quan
   s'autoria — per als fulls encara no autorats, `total` és null i la targeta
   surt marcada "Properament" i no és clicable.

   Quan s'autori un full nou: canvieu el seu `disponible` a true i poseu-hi
   el `total` real (el que doni tools/build.py en compilar). Res més. */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };

  var FULLS = [
    { n: 1,  titol: "Nombres enters, fraccions i decimals",  total: 140, disponible: true },
    { n: 2,  titol: "Potències",                             total: 76,   disponible: true },
    { n: 3,  titol: "Successions i progressions",             total: 50,   disponible: true },
    { n: 4,  titol: "Polinomis",                              total: null, disponible: false },
    { n: 5,  titol: "Equacions i sistemes",                   total: null, disponible: false },
    { n: 6,  titol: "Proporcionalitat i percentatges",        total: null, disponible: false },
    { n: 7,  titol: "Teorema de Pitàgores. Àrees",            total: null, disponible: false },
    { n: 8,  titol: "Teorema de Tales. Semblança",            total: null, disponible: false },
    { n: 9,  titol: "Cossos geomètrics. Àrea i volum",        total: null, disponible: false },
    { n: 10, titol: "Funcions",                               total: null, disponible: false },
    { n: 11, titol: "Funcions lineals i quadràtiques",        total: null, disponible: false },
    { n: 12, titol: "Estadística",                            total: null, disponible: false },
    { n: 13, titol: "Probabilitat",                           total: null, disponible: false }
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
      "</a>";
  }
  pintaTutor();
})();
