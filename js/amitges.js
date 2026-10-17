/* amitges.js — la llista «Tens exercicis a mitges» i el cercador per codi.

   El cas que resol: un alumne obre un exercici, el resol a la llibreta i
   passa al següent sense mostrar les opcions o sense comprovar la resposta.
   L'endemà no sap quin era. Qui decideix què és «a mitges» és nucli.js
   (`RE.esAMitges`); aquí només es pinta.

   La fan servir dues pàgines:
     · index.html — tots els fulls, amb el full i el bloc de cada exercici;
     · full.html  — només els d'aquell full.

   No carrega cap data/fullN.js: els títols de full i de bloc surten de
   `RE_TAULES` (codi-taules.js), que totes dues pàgines ja carreguen per al
   botó del codi. A full.html, si `window.FULL` hi és, mana ell. */
window.RE_MITGES = (function () {
  "use strict";

  var DIES = ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];

  function taula(full) {
    var T = window.RE_TAULES && window.RE_TAULES.fulls;
    return T ? (T[full] || T[String(full)]) : null;
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  /* "Full 7 — Teorema de Pitàgores. Àrees" -> "Teorema de Pitàgores. Àrees" */
  function titolFull(full) {
    if (window.FULL && +window.FULL.full === +full && window.FULL.titol) return window.FULL.titol;
    var t = taula(full);
    return t && t.titol ? t.titol.replace(/^Full\s+\d+\s*[—–-]\s*/, "") : "";
  }

  function titolBloc(full, id) {
    if (window.FULL && +window.FULL.full === +full && window.FULL.blocs) {
      var b = window.FULL.blocs.filter(function (x) { return x.items.indexOf(id) >= 0; })[0];
      return b ? b.titol : "";
    }
    var t = taula(full);
    if (!t || !t.items || !t.blocs) return "";
    var ix = t.items.indexOf(id);
    for (var i = 0; i < t.blocs.length; i++) {
      if (t.blocs[i][1].indexOf(ix) >= 0) return t.blocs[i][0];
    }
    return "";
  }

  /* «avui a les 18:42», «ahir a les 9:05», «dijous a les 17:30», «3/10».
     Els dies es compten per data de calendari, no per blocs de 24 h: a les
     8 del matí, una cosa de les 23 h és d'«ahir», no d'«avui». */
  function quan(ts, ara) {
    if (!ts) return "";
    var d = new Date(ts), a = ara ? new Date(ara) : new Date();
    var d0 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var a0 = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    var dies = Math.round((a0 - d0) / 86400000);
    var h = d.getHours(), m = ("0" + d.getMinutes()).slice(-2);
    var hora = (h === 1 ? "a la " : "a les ") + h + ":" + m;
    if (dies <= 0) return "avui " + hora;
    if (dies === 1) return "ahir " + hora;
    if (dies < 7) return DIES[d.getDay()] + " " + hora;
    return d.getDate() + "/" + (d.getMonth() + 1);
  }

  function durada(seg) {
    var m = Math.round((seg || 0) / 60);
    if (m < 1) return "";
    if (m < 60) return m + " min";
    return Math.floor(m / 60) + " h " + (m % 60 ? (m % 60) + " min" : "");
  }

  /* Què hi va fer, en poques paraules: és el que fa que l'alumne reconegui
     l'exercici («ah, el de les dues pistes»). */
  function detall(e) {
    var it = e.it, parts = [quan(e.quan)];
    if (it.estat === "fallat") {
      parts.push("et queda un segon intent");
    } else {
      var d = durada(it.tact);
      if (d) parts.push(d);
      if (it.npis) parts.push(it.npis + (it.npis === 1 ? " pista" : " pistes"));
      if (it.opc) parts.push("opcions obertes");
    }
    return parts.filter(Boolean).join(" · ");
  }

  function url(e) {
    return "practica.html?full=" + e.full + "&q=" + encodeURIComponent(e.id);
  }

  function fila(e, ambFull) {
    var on = ambFull
      ? "Full " + e.full + " · " + (titolBloc(e.full, e.id) || titolFull(e.full))
      : (titolBloc(e.full, e.id) || "");
    return '<li class="amitges-fila" data-full="' + e.full + '" data-id="' + esc(e.id) + '">' +
      '<a class="amitges-enllac" href="' + url(e) + '">' +
        '<span class="codi">' + esc(e.id) + "</span>" +
        '<span class="amitges-cos">' +
          '<span class="amitges-on">' + esc(on) + "</span>" +
          '<span class="amitges-detall">' + esc(detall(e)) + "</span>" +
        "</span>" +
        '<span class="amitges-cta"><span class="amitges-cta-txt">Acaba\'l</span>' +
          '<span class="amitges-fletxa" aria-hidden="true">→</span></span>' +
      "</a>" +
      '<button type="button" class="amitges-treu" data-accio="treu" ' +
        'aria-label="Treu el ' + esc(e.id) + ' de la llista" title="No el vull fer ara">' +
        '<span aria-hidden="true">×</span></button>' +
    "</li>";
  }

  /* Pinta la llista dins de `cont` i la mostra o l'amaga.
       opts.full  -> només aquell full (sense, tots)
       opts.max   -> quantes se'n veuen abans de «Mostra'n més» (3)
     Retorna quantes n'hi ha. */
  function pinta(cont, opts) {
    if (!cont) return 0;
    opts = opts || {};
    var max = opts.max || 3;
    var llista = RE.aMitges(opts.full);
    if (!llista.length) {
      cont.hidden = true;
      cont.innerHTML = "";
      return 0;
    }
    var obert = cont.getAttribute("data-obert") === "1";
    var visibles = obert ? llista : llista.slice(0, max);
    var resta = llista.length - visibles.length;
    cont.innerHTML =
      '<h2 id="amitges-titol">Tens ' + (llista.length === 1 ? "un exercici" : llista.length + " exercicis") +
        " a mitges</h2>" +
      '<p class="petit apagat amitges-intro">' +
        (llista.length === 1 ? "El vas treballar però no el vas respondre. Si ja el tens"
                             : "Els vas treballar però no els vas respondre. Si ja els tens") +
        " resolts a la llibreta, entra-hi i comprova la resposta: només així queda anotat.</p>" +
      '<ul class="amitges-llista">' +
        visibles.map(function (e) { return fila(e, !opts.full); }).join("") +
      "</ul>" +
      (resta > 0
        ? '<button type="button" class="btn buit amitges-mes" data-accio="mes">Mostra\'n ' +
          resta + " més</button>"
        : "");
    cont.setAttribute("aria-labelledby", "amitges-titol");
    cont.hidden = false;

    cont.onclick = function (ev) {
      var b = ev.target.closest ? ev.target.closest("[data-accio]") : null;
      if (!b || !cont.contains(b)) return;
      var li = b.closest(".amitges-fila");
      var acc = b.getAttribute("data-accio");
      if (acc === "mes") {
        cont.setAttribute("data-obert", "1");
        pinta(cont, opts);
        var f = cont.querySelectorAll(".amitges-enllac")[visibles.length];
        if (f) f.focus();
      } else if (acc === "treu" && li) {
        var full = +li.getAttribute("data-full"), id = li.getAttribute("data-id");
        RE.descartaAMitges(full, id);
        li.className = "amitges-fila treta";
        li.innerHTML = '<span class="amitges-tret" role="status"><span class="codi">' + esc(id) +
          "</span> tret de la llista.</span>" +
          '<button type="button" class="btn buit amitges-desfes" data-accio="desfes">Desfés</button>';
        var d = li.querySelector(".amitges-desfes");
        if (d) d.focus();
        if (opts.canvi) opts.canvi();
      } else if (acc === "desfes" && li) {
        RE.recuperaAMitges(+li.getAttribute("data-full"), li.getAttribute("data-id"));
        pinta(cont, opts);
        if (opts.canvi) opts.canvi();
      }
    };
    return llista.length;
  }

  /* ── cercador per codi ────────────────────────────────────────────────

     L'alumne apunta a la llibreta el codi de l'exercici (el rètol negre de
     dalt de cada exercici: «121b»). Amb això, l'endemà, en qualsevol
     ordinador, hi torna d'un sol pas. Els codis són únics entre fulls
     (1-259 són els del material original, 260 en amunt els nous).

     Retorna:
       { tipus: "un",    full, id }        -> hi ha exactament aquest exercici
       { tipus: "molts", full, ids:[...] } -> «121» i el 121 té apartats
       { tipus: "res",   q }               -> no n'hi ha cap
       { tipus: "buit" } */
  function cerca(text) {
    var q = String(text || "").toLowerCase()
      .replace(/^\s*(exercici|ex\.?|núm\.?|n\.?º?)\s*/, "")
      .replace(/[\s.·'’-]+/g, "");
    if (!q) return { tipus: "buit" };
    if (!/^\d{1,3}[a-z]?$/.test(q)) return { tipus: "res", q: q };
    var T = window.RE_TAULES && window.RE_TAULES.fulls;
    if (!T) return { tipus: "res", q: q };
    var fulls = Object.keys(T);
    for (var i = 0; i < fulls.length; i++) {
      if (T[fulls[i]].items.indexOf(q) >= 0) return { tipus: "un", full: +fulls[i], id: q };
    }
    if (/^\d+$/.test(q)) {
      var re = new RegExp("^" + q + "[a-z]$");
      for (var j = 0; j < fulls.length; j++) {
        var ids = T[fulls[j]].items.filter(function (id) { return re.test(id); });
        /* Un sol apartat conservat (el 145 només té el 145c): hi va directe. */
        if (ids.length === 1) return { tipus: "un", full: +fulls[j], id: ids[0] };
        if (ids.length) return { tipus: "molts", full: +fulls[j], ids: ids };
      }
    }
    return { tipus: "res", q: q };
  }

  /* Connecta un <form> amb un <input> i una zona de resposta. */
  function cercador(form) {
    if (!form) return;
    var input = form.querySelector("input"), sortida = form.querySelector(".cerca-resposta");
    function diu(html) { sortida.innerHTML = html; sortida.hidden = !html; }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var r = cerca(input.value);
      if (r.tipus === "buit") { diu(""); input.focus(); return; }
      if (r.tipus === "un") {
        location.href = url(r);
        return;
      }
      if (r.tipus === "molts") {
        diu("L'exercici " + esc(r.ids[0].replace(/[a-z]$/, "")) + " del Full " + r.full +
          " té " + r.ids.length + " apartats. Quin vols?" +
          '<span class="xips">' + r.ids.map(function (id) {
            return '<a class="xip" href="' + url({ full: r.full, id: id }) + '">' + esc(id) + "</a>";
          }).join("") + "</span>");
        var x = sortida.querySelector(".xip");
        if (x) x.focus();
        return;
      }
      diu("No hi ha cap exercici amb el codi <strong>" + esc(r.q) + "</strong>. " +
        "El codi és el rètol negre de dalt de cada exercici, per exemple <span class=\"codi\">121b</span>.");
    });
    input.addEventListener("input", function () { if (!sortida.hidden) diu(""); });
  }

  return {
    pinta: pinta, cerca: cerca, cercador: cercador,
    quan: quan, durada: durada, detall: detall, url: url,
    titolBloc: titolBloc, titolFull: titolFull
  };
})();
