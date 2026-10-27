/* desa-local.js — còpia de seguretat de la feina: Desa, Carrega, Copia.

   Per què existeix: hi ha Chromebooks "congelats" que cada nit esborren tota
   la informació local, dades del navegador incloses. El progrés viu al
   localStorage, així que l'alumne el perd. La còpia de seguretat és el codi de
   verificació de sempre (js/codi.js), que ja porta l'estat de cada exercici i
   que RE_CODI.llegeix() sap tornar a muntar. Aquest fitxer només hi afegeix el
   camí curt:

     · Desa    -- baixa el codi en un fitxer .txt al disc de l'ordinador.
     · Carrega -- llegeix aquest fitxer i el posa al navegador. SEMPRE en mode
                  "afegeix" (només omple els exercicis que aquí no tenen estat):
                  mai no sobreescriu res, i per això no avisa de res.
     · Copia   -- el codi al porta-retalls; la icona es posa verda i diu
                  «Codi copiat».

   Els tres botons són a la portada (#desa-fila a index.html). Aquest fitxer es
   carrega, però, a totes les pàgines amb el botó Codi, perquè l'avís en tancar
   ha de funcionar allà on l'alumne treballa: si hi ha feina que no s'ha desat
   (ni baixat ni copiat) des de l'últim canvi, el navegador pregunta abans de
   tancar la pestanya i es mostra un recordatori amb un botó per desar-la.

   «Hi ha feina sense desar» vol dir que la signatura dels exercicis fets
   (id + estat) no és la que hi havia l'últim cop que es va desar, copiar o
   carregar. Es guarda a localStorage ("repas-eso:desat"); si el navegador
   l'esborra, tampoc no hi ha feina, així que no es dona cap avís fals. */
window.RE_DESA = (function () {
  "use strict";

  var CLAU_DESAT = "repas-eso:desat";
  var CLAU_MSG = "repas-eso:desa-msg";

  function $(id) { return document.getElementById(id); }
  function ui() { return window.RE_CODI_UI; }

  /* ── signatura de la feina ────────────────────────────────────────────── */
  function signatura() {
    var T = window.RE_TAULES, s = "", n = 0;
    Object.keys(T.fulls).forEach(function (k) {
      var p = window.RE.llegeix(+k).items || {};
      T.fulls[k].items.forEach(function (id) {
        var e = (p[id] || {}).estat;
        if (e && e !== "vist") { s += k + ":" + id + "=" + e + ";"; n++; }
      });
    });
    var h = 5381;
    for (var i = 0; i < s.length; i++) h = ((h * 33) ^ s.charCodeAt(i)) >>> 0;
    return n + "." + h.toString(36);
  }

  function feines() { return ui().comptes().fets; }

  function marcaDesat() {
    try { localStorage.setItem(CLAU_DESAT, signatura()); } catch (e) { /* sense localStorage no hi ha res a recordar */ }
  }

  function senseDesar() {
    try {
      if (!feines()) return false;
      return localStorage.getItem(CLAU_DESAT) !== signatura();
    } catch (e) { return false; }
  }

  /* ── les tres accions ─────────────────────────────────────────────────── */
  function nomFitxer() {
    var d = new Date(), z = function (n) { return (n < 10 ? "0" : "") + n; };
    return "repas-" + d.getFullYear() + "-" + z(d.getMonth() + 1) + "-" + z(d.getDate()) + ".txt";
  }

  /* Retorna false si no hi ha res per desar. */
  function desa() {
    var codi = ui().codiActual();
    if (!codi) return false;
    var blob = new Blob([codi + "\n"], { type: "text/plain;charset=utf-8" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = nomFitxer();
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); if (a.parentNode) a.parentNode.removeChild(a); }, 1000);
    marcaDesat();
    return true;
  }

  /* `fet(ok)` es crida quan s'ha acabat (porta-retalls o selecció manual). */
  function copia(fet) {
    var codi = ui().codiActual();
    if (!codi) return false;
    function be() { marcaDesat(); fet(true); }
    function manual() {
      /* Sense permís de porta-retalls: es deixa el codi en un camp seleccionat. */
      var t = document.createElement("textarea");
      t.value = codi; t.setAttribute("readonly", "");
      t.style.cssText = "position:fixed;top:0;left:0;opacity:0";
      document.body.appendChild(t); t.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(t);
      if (ok) be(); else fet(false);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(codi).then(be, manual);
    } else { manual(); }
    return true;
  }

  /* Posa al navegador el codi d'un fitxer. Sempre "afegeix". */
  function carrega(text, diu) {
    var r = ui().recupera(text, true, diu);
    if (r.ok) marcaDesat();
    return r;
  }

  /* ── els botons de la portada ─────────────────────────────────────────── */
  var tempsCopiat = 0;

  function munta() {
    var fila = $("desa-fila");
    if (!fila) return;
    var msg = $("desa-msg"), fitxer = $("desa-fitxer");
    var bCopia = $("desa-copia"), etCopia = $("desa-copia-et");

    function diu(txt, mal, html) {
      if (html) msg.innerHTML = txt; else msg.textContent = txt;
      msg.className = "desa-msg petit" + (mal ? " mal" : "");
      msg.hidden = !txt;
    }

    /* Un missatge que ha sobreviscut a la recàrrega posterior a carregar. */
    try {
      var guardat = sessionStorage.getItem(CLAU_MSG);
      if (guardat) { sessionStorage.removeItem(CLAU_MSG); diu(guardat, false, true); }
    } catch (e) { /* res */ }

    $("desa-baixa").onclick = function () {
      if (desa()) diu("Fitxer baixat. Mira a la carpeta Baixades (o Descàrregues).", false);
      else diu("Encara no has fet cap exercici: no hi ha res a desar.", true);
    };

    $("desa-obre").onclick = function () { fitxer.value = ""; fitxer.click(); };
    fitxer.onchange = function () {
      var f = fitxer.files && fitxer.files[0];
      if (!f) return;
      var lector = new FileReader();
      lector.onload = function () {
        var html = "";
        var r = carrega(String(lector.result || ""), function (t, mal, h) {
          html = t;
          if (mal) diu(t, true, h);
        });
        if (!r.ok) return;
        /* La portada pinta les targetes dels fulls en carregar-se: es
           recarrega perquè mostrin el progrés recuperat. El missatge
           sobreviu a la recàrrega. */
        try { sessionStorage.setItem(CLAU_MSG, html); } catch (e) { diu(html, false, true); return; }
        marcaNavegacio();
        location.reload();
      };
      lector.onerror = function () { diu("No he pogut llegir el fitxer.", true); };
      lector.readAsText(f);
    };

    bCopia.onclick = function () {
      var començat = copia(function (ok) {
        if (!ok) { diu("No he pogut copiar el codi. Prova el botó Desa.", true); return; }
        bCopia.classList.add("fet");
        etCopia.textContent = "Codi copiat";
        clearTimeout(tempsCopiat);
        tempsCopiat = setTimeout(function () {
          bCopia.classList.remove("fet");
          etCopia.textContent = "Copia el codi";
        }, 3000);
      });
      if (!començat) diu("Encara no has fet cap exercici: no hi ha res a copiar.", true);
    };
  }

  /* ── avís en tancar ───────────────────────────────────────────────────── */

  /* beforeunload no distingeix «tanco la finestra» de «segueixo un enllaç del
     mateix lloc». Passar d'una pàgina a una altra no ha de molestar, així que
     qualsevol clic, tecla o enviament de formulari fa que els 1,5 s següents
     es consideri navegació pròpia. Tancar la finestra o la pestanya amb el
     botó del navegador no passa per cap d'aquests events. */
  var darreraAccio = 0;
  function marcaNavegacio() { darreraAccio = Date.now(); }

  function recordatori() {
    if ($("desa-avis")) return;
    var d = document.createElement("div");
    d.id = "desa-avis";
    d.setAttribute("role", "alert");
    d.innerHTML = '<p><b>No has desat el codi.</b> Si tanques ara, aquest ordinador pot esborrar la ' +
      "teva feina aquesta nit. Desa’l en un fitxer: ho fas en un segon.</p>" +
      '<div><button type="button" class="btn" id="desa-avis-desa">Desa el codi</button> ' +
      '<button type="button" class="btn buit" id="desa-avis-tanca">Ara no</button></div>';
    document.body.appendChild(d);
    $("desa-avis-desa").onclick = function () { desa(); d.remove(); };
    $("desa-avis-tanca").onclick = function () { d.remove(); };
  }

  function enganxaAvis() {
    ["click", "keydown", "submit", "touchstart"].forEach(function (ev) {
      document.addEventListener(ev, marcaNavegacio, true);
    });
    window.addEventListener("beforeunload", function (e) {
      if (Date.now() - darreraAccio < 1500) return;
      if (!senseDesar()) return;
      /* Si l'alumne tria quedar-se, es veu el recordatori amb el botó. */
      setTimeout(recordatori, 0);
      e.preventDefault();
      e.returnValue = "";
      return "";
    });
  }

  function inici() {
    if (!window.RE || !window.RE_TAULES || !window.RE_CODI || !window.RE_CODI_UI) return;
    munta();
    enganxaAvis();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inici);
  } else { inici(); }

  return { desa: desa, copia: copia, carrega: carrega, marcaDesat: marcaDesat,
           senseDesar: senseDesar, signatura: signatura, nomFitxer: nomFitxer };
})();
