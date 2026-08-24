/* hub.js — pàgina d'un full (Nivell 1): botó "continua", resum d'errors,
   blocs i mapa de llacunes complet (plegat per defecte). Genèric per a
   qualsevol full: llegeix window.FULL, no cap full concret.

   Amb ?bloc=<id> a la URL, aquell bloc surt destacat i la pàgina hi fa
   scroll: és com hi arriba l'alumne des d'una recomanació del tutor. */
(function () {
  "use strict";
  if (!window.FULL) return;   /* full.html ja mostra "aquest full encara no està preparat" */

  var D = window.FULL, $ = function (s) { return document.querySelector(s); };
  var blocDestacat = new URLSearchParams(location.search).get("bloc");

  document.title = D.titol + " — Repàs d'ESO";
  $("#titol-full").textContent = D.titol;
  $("#subtitol-full").textContent = D.subtitol;
  $("#etiqueta-full").textContent = "Full " + D.full;

  function ves(id) {
    location.href = "practica.html?full=" + D.full + "&q=" + encodeURIComponent(id);
  }

  function primerPendent(ids) {
    for (var i = 0; i < ids.length; i++) {
      var e = RE.estat(D.full, ids[i]);
      if (e !== "net" && e !== "pista" && e !== "segon") return ids[i];
    }
    return ids[0];
  }

  function comptes() {
    var p = RE.llegeix(D.full).items;
    var n = { net: 0, pista: 0, segon: 0, fallat: 0, vist: 0 };
    D.items.forEach(function (it) {
      var e = (p[it.id] || {}).estat;
      if (e) n[e]++;
    });
    return n;
  }

  function pintaBlocs() {
    var p = RE.llegeix(D.full).items;
    var cont = $("#blocs");
    cont.innerHTML = "";
    D.blocs.forEach(function (b, i) {
      var ok = b.items.filter(function (id) {
        var e = (p[id] || {}).estat;
        return e === "net" || e === "pista" || e === "segon";
      }).length;
      var el = document.createElement("button");
      el.className = "bloc" + (b.id === blocDestacat ? " destacat" : "");
      el.type = "button";
      el.innerHTML =
        '<span class="num">' + (i + 1) + "</span>" +
        '<span class="cos">' +
          '<span class="tit">' + b.titol + "</span>" +
          '<div class="petit apagat">' + b.descripcio + "</div>" +
          '<div class="barra"><i style="width:' + Math.round(100 * ok / b.items.length) + '%"></i></div>' +
        "</span>" +
        '<span class="petit apagat">' + ok + "/" + b.items.length + "</span>";
      el.onclick = function () { ves(primerPendent(b.items)); };
      cont.appendChild(el);
    });
    if (blocDestacat) {
      var elDestacat = cont.querySelector(".destacat");
      if (elDestacat) elDestacat.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function pintaErrors() {
    var p = RE.llegeix(D.full).items, tally = {}, mostra = {};
    Object.keys(p).forEach(function (id) {
      /* Historial sencer: un error rectificat al segon intent segueix comptant
         (vegeu RE.apuntaError a nucli.js). `err` només per al format antic. */
      var it = p[id];
      var errs = it.errs && it.errs.length ? it.errs : (it.err ? [it.err] : []);
      errs.forEach(function (e) {
        tally[e] = (tally[e] || 0) + 1;
        if (!mostra[e]) mostra[e] = id;     /* un ítem real on ha passat */
      });
    });
    var tops = Object.keys(tally).sort(function (a, b) { return tally[b] - tally[a]; });
    var cont = $("#errades");
    if (!tops.length) { cont.hidden = true; return; }

    /* D'on surt el text.

       Abans es donava sempre prioritat a la descripció genèrica del catàleg
       (D.errors). El problema és que unes quantes etiquetes TAX s'han acabat
       fent servir de calaix de sastre en blocs molt allunyats: per exemple
       TERME_OBLIDAT_OPERACIO ("revisa els polinomis grau a grau") etiqueta
       també l'oblit de les dues bases d'un cilindre al Full 9. L'alumne que
       s'equivocava comptant cares llegia un consell sobre polinomis.

       Regla nova: el text genèric només s'utilitza si aquella etiqueta viu en
       UN sol bloc d'aquest full -- llavors sí que descriu el malentès. Si es
       fa servir en més d'un bloc, no és una descripció fiable del cas concret
       i es mostra el diagnòstic de l'exercici real on l'alumne ha fallat, amb
       el bloc indicat perquè sàpiga on tornar. Sempre és cert, mai genèric de
       més. */
    var diagPerItem = {}, blocsPerEtiqueta = {}, titolBloc = {};
    (D.blocs || []).forEach(function (b) { titolBloc[b.id] = b.titol; });
    D.items.forEach(function (it) {
      var k = RE.clau(it);
      k.err.forEach(function (e, i) {
        if (!e) return;
        (blocsPerEtiqueta[e] = blocsPerEtiqueta[e] || {})[it.bloc] = true;
        (diagPerItem[e] = diagPerItem[e] || {})[it.id] = { text: k.diag[i], bloc: it.bloc };
      });
    });

    function textDe(e) {
      var blocs = Object.keys(blocsPerEtiqueta[e] || {});
      var generic = (D.errors || {})[e];
      if (generic && blocs.length <= 1) return generic;
      var perItem = diagPerItem[e] || {};
      var d = perItem[mostra[e]] || perItem[Object.keys(perItem)[0]];
      if (!d) return generic || e;
      var on = titolBloc[d.bloc];
      return d.text + (on ? ' <span class="petit apagat">(' + on + ")</span>" : "");
    }

    cont.hidden = false;
    cont.innerHTML = "<h2>Els errors que repeteixes</h2>" +
      tops.slice(0, 4).map(function (e) {
        return '<div class="errada"><strong>' + tally[e] + " vegad" + (tally[e] > 1 ? "es" : "a") +
          ":</strong> " + textDe(e) + "</div>";
      }).join("");
    RE.mat(cont);
  }

  function pinta() {
    var n = comptes(), fets = n.net + n.pista + n.segon;
    $("#comptador-linia").innerHTML = "<strong>" + fets + " de " + D.items.length + "</strong> resoltes";
    $("#detall").textContent = n.fallat
      ? n.fallat + " per revisar · " + n.vist + " començades sense acabar"
      : "Cada quadret és un apartat. Toca'n un per anar-hi directament.";

    RE.mapa($("#mapa"), D, ves);
    pintaBlocs();
    pintaErrors();

    $("#continua").onclick = function () {
      ves(primerPendent(D.items.map(function (i) { return i.id; })));
    };
  }

  $("#reinicia").onclick = function () {
    if (confirm("Vols esborrar el teu progrés d'aquest full? Els altres fulls no es toquen.")) {
      RE.esborra(D.full);
      pinta();
    }
  };

  pinta();
})();
