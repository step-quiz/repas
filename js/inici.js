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
   Vegeu docs/HANDOVER.md §2 per a l'inventari complet. */
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
    { n: 7, titol: "Teorema de Pitàgores", total: total(7, 55), disponible: true },
    { n: 8, titol: "Teorema de Tales", total: total(8, 32), disponible: true },
    { n: 9, titol: "Cossos geomètrics", total: total(9, 43), disponible: true },
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
        '<a class="tutor-targeta" href="diagnostic.html" ' +
        'title="Un test curt de 15 preguntes: et diem quins blocs et convé repassar primer">' +
        '<span class="tutor-titol">Test inicial</span></a>';
      return;
    }
    /* Ja fet: el mateix botó porta a la diagnosi (resultat.html), on també es
       pot tornar a fer el test. */
    var reco = RE_DIAG.recomanacio(RE_DIAG.analitza(d));
    var noms = reco.map(function (b) { return b.titol; }).join(", ");
    var tip = reco.length ? "Et convé repassar: " + noms + "." : "Dominaves prou bé tots els blocs provats.";
    cont.innerHTML =
      '<a class="tutor-targeta" href="resultat.html" title="' + tip.replace(/"/g, "&quot;") + '">' +
      '<span class="tutor-titol">Test inicial</span></a>';
  }
  pintaTutor();

  /* ---- avís dels exercicis oberts que venen d'un codi recuperat ----
     En recuperar la feina des d'un codi, els exercicis que l'alumna tenia
     oberts sense respondre es tornen a posar com a "vist" (marcats `rec`).
     No compten per a res, però si no se li diu, no sap que hi són ni on.
     L'avís és a la portada, a dalt de tot i amb un botó per exercici, i
     desapareix sol a mesura que els respon (deixen de ser "vist"). Només
     avisa dels recuperats: qui ha passat exercicis amb «Següent» sense
     respondre no en veu res, per no omplir la portada de soroll.

     Però el codi no distingeix un exercici treballat d'un de passat amb
     «Següent»: tots dos hi viatgen com a "vist". Qui recupera un codi en un
     altre ordinador pot trobar-se'n trenta. Per això se n'ensenyen
     MAX_RECUPERATS (la resta, darrere de «Mostra'ls tots») i «Ja ho sé, treu
     l'avís» treu la marca `rec`: els exercicis continuen oberts i surten al
     desplegable «Oberts sense respondre» del full, però la portada calla.

     `RE_INICI.pintaRecuperats` la crida també codi-ui.js just després de
     recuperar un codi, perquè l'avís surti sense haver de recarregar. */
  var MAX_RECUPERATS = 6;

  function recuperats() {
    var perFull = [], total = 0;
    FULLS.forEach(function (f) {
      var ordre = (window.RE_TAULES && RE_TAULES.fulls[f.n] && RE_TAULES.fulls[f.n].items) || [];
      var ll = RE.nomesOberts(f.n).filter(function (e) { return e.it && e.it.rec; })
        .sort(function (a, b) { return ordre.indexOf(a.id) - ordre.indexOf(b.id); });
      if (ll.length) { perFull.push({ f: f, ll: ll }); total += ll.length; }
    });
    return { perFull: perFull, total: total };
  }

  /* Treu la marca `rec` sense tocar res més (ni `ts`, que és la data de
     l'última escriptura de debò). */
  function oblidaRecuperats(perFull) {
    perFull.forEach(function (g) {
      var p = RE.llegeix(g.f.n);
      g.ll.forEach(function (e) { if (p.items[e.id]) delete p.items[e.id].rec; });
      RE.desa(g.f.n, p);
    });
  }

  function pintaRecuperats() {
    var cont = $("#recuperats");
    if (!cont) return;
    var r = recuperats(), perFull = r.perFull, total = r.total;
    if (!total) { cont.hidden = true; cont.innerHTML = ""; return; }
    var esc = function (t) {
      return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    };
    /* Els primers MAX_RECUPERATS es veuen; la resta (i els fulls que només
       en tenen d'amagats) porten `hidden` fins que es demanen. */
    var vistos = 0, amagats = total > MAX_RECUPERATS ? total - MAX_RECUPERATS : 0;
    cont.innerHTML =
      '<h2 id="recuperats-titol">' + (total === 1
        ? "Tens 1 exercici obert que encara no has respost"
        : "Tens " + total + " exercicis oberts que encara no has respost") + "</h2>" +
      '<p class="petit">Els vas deixar oberts abans de recuperar la teva feina des del codi. ' +
      "No compten com a fets fins que els responguis. Clica'n un per anar-hi:</p>" +
      perFull.map(function (g) {
        var xips = g.ll.map(function (e) {
          var amaga = vistos++ >= MAX_RECUPERATS;
          return '<a class="xip"' + (amaga ? " hidden" : "") + ' href="practica.html?full=' + g.f.n + "&q=" +
            encodeURIComponent(e.id) + '">' + esc(e.id) + "</a>";
        }).join("");
        var totAmagat = vistos - g.ll.length >= MAX_RECUPERATS;
        return '<div class="recuperats-full"' + (totAmagat ? " hidden" : "") + "><strong>Full " + g.f.n +
          " \u00b7 " + esc(g.f.titol) + "</strong>" + '<div class="xips">' + xips + "</div></div>";
      }).join("") +
      '<div class="recuperats-acc">' +
      (amagats ? '<button type="button" class="btn buit" id="recuperats-mes">Mostra\'ls tots (' +
        amagats + " m\u00e9s)</button>" : "") +
      '<button type="button" class="btn buit" id="recuperats-treu">Ja ho s\u00e9, treu l\'av\u00eds</button></div>' +
      '<p class="petit">Si treus l\'av\u00eds, els exercicis continuen oberts: els trobar\u00e0s a ' +
      "\u00abOberts sense respondre\u00bb, dins de la p\u00e0gina de cada full.</p>";
    cont.hidden = false;

    var mes = $("#recuperats-mes");
    if (mes) mes.onclick = function () {
      var nous = [].slice.call(cont.querySelectorAll("[hidden]"));
      nous.forEach(function (e) { e.hidden = false; });
      mes.parentNode.removeChild(mes);
      /* El botó desapareix: el focus va al primer exercici que s'acaba de
         mostrar, perquè qui navega amb teclat no torni al principi. */
      var primer = nous.filter(function (e) { return e.tagName === "A"; })[0];
      if (primer) primer.focus();
    };
    $("#recuperats-treu").onclick = function () {
      oblidaRecuperats(perFull);
      pintaRecuperats();
    };
  }
  pintaRecuperats();
  window.RE_INICI = { pintaRecuperats: pintaRecuperats };

  /* ---- exercicis a mitges i cercador per codi (js/amitges.js) ---- */
  if (window.RE_MITGES) {
    RE_MITGES.pinta($("#amitges"), { max: 3 });
    RE_MITGES.cercador($("#cerca"));
  }
})();
