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

  /* A les pàgines que no són la portada, els tres botons no hi són escrits a
     mà: es munten aquí, en versió compacta, a la barra de dalt (.barra-sup) o,
     si la pàgina no en té, en una de nova al principi. Mateixos ids i mateix
     comportament que a la portada. */
  var SVG_DESA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h11l4 4v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M8 3v5h7V3"/><rect x="7" y="13" width="10" height="8" rx="1"/></svg>' +
    '<svg class="tick" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12"/><path d="M6.5 12.5l3.8 3.8 7.2-8"/></svg>';
  var SVG_OBRE = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 19V6a1 1 0 0 1 1-1h5l2 2h8a1 1 0 0 1 1 1v2"/><path d="M3 19l3-8a1 1 0 0 1 1-.7h14.2a.8.8 0 0 1 .76 1.07L19 19z"/></svg>';
  var SVG_COPIA = '<svg class="ico-copia" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="12" rx="1.5"/><path d="M15 9V4.5A1.5 1.5 0 0 0 13.5 3h-8A1.5 1.5 0 0 0 4 4.5v10A1.5 1.5 0 0 0 5.5 16H9"/></svg>' +
    '<svg class="ico-fet" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M7.5 12.5l3 3 6-6.5"/></svg>';

  function muntaFilaCompacta() {
    var main = document.querySelector("main") || document.body;
    var barra = document.querySelector(".barra-sup");
    if (!barra) {
      barra = document.createElement("div");
      barra.className = "barra-sup";
      main.insertBefore(barra, main.firstChild);
    }
    var fila = document.createElement("div");
    fila.className = "desa-fila desa-compacta";
    fila.id = "desa-fila";
    fila.innerHTML =
      '<button type="button" class="desa-btn" id="desa-baixa" title="Desa el codi en un fitxer a l\'ordinador">' + SVG_DESA + "<span>Desa el codi</span></button>" +
      '<button type="button" class="desa-btn" id="desa-obre" title="Carrega el codi des d\'un fitxer de l\'ordinador">' + SVG_OBRE + "<span>Carrega el codi</span></button>" +
      '<button type="button" class="desa-btn" id="desa-copia" title="Copia el codi al porta-retalls">' + SVG_COPIA + '<span id="desa-copia-et" aria-live="polite">Copia el codi</span></button>' +
      '<input type="file" id="desa-fitxer" accept=".txt,text/plain" hidden>';
    barra.appendChild(fila);
    var msg = document.createElement("p");
    msg.id = "desa-msg"; msg.className = "desa-msg petit desa-msg-pag"; msg.hidden = true;
    msg.setAttribute("role", "status");
    barra.parentNode.insertBefore(msg, barra.nextSibling);
  }

  function munta() {
    if (!$("desa-fila")) muntaFilaCompacta();
    var fila = $("desa-fila");
    if (!fila) return;
    var msg = $("desa-msg"), fitxer = $("desa-fitxer");
    var bCopia = $("desa-copia"), etCopia = $("desa-copia-et");

    function diu(txt, mal, html) {
      if (html) msg.innerHTML = txt; else msg.textContent = txt;
      msg.className = "desa-msg petit" + (fila.classList.contains("desa-compacta") ? " desa-msg-pag" : "") + (mal ? " mal" : "");
      msg.hidden = !txt;
    }

    /* Un missatge que ha sobreviscut a la recàrrega posterior a carregar. */
    try {
      var guardat = sessionStorage.getItem(CLAU_MSG);
      if (guardat) { sessionStorage.removeItem(CLAU_MSG); diu(guardat, false, true); }
    } catch (e) { /* res */ }

    /* Tick verd-oliva al botó Desa mentre la feina d'ara ja és desada (baixada,
       copiada o carregada); desapareix quan hi ha feina nova. */
    /* El tick surt cridaner (classe «desat») els 2 primers segons després de
       desar i després es queda discret («desat-discret»: fons blanc i un
       tick petit i pàl·lid). Si la pàgina s'obre amb la feina ja desada, surt
       directament en la versió discreta. */
    var cridaner = 0;
    function marcaBoto() {
      var b = $("desa-baixa"), desat = feines() > 0 && !senseDesar();
      var fort = desat && Date.now() < cridaner;
      b.classList.toggle("desat", fort);
      b.classList.toggle("desat-discret", desat && !fort);
      b.querySelector("span").textContent = desat ? "Codi desat al PC" : "Desa el codi";
      if (fort) setTimeout(marcaBoto, cridaner - Date.now() + 20);
    }
    function marcaBotoNou() { cridaner = Date.now() + 2000; marcaBoto(); }
    marcaBoto();
    /* A les pàgines d'exercicis la feina canvia sense recarregar. */
    setInterval(marcaBoto, 2000);

    $("desa-baixa").onclick = function () {
      if (desa()) { diu("", false); marcaBotoNou(); }
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
        marcaBotoNou();
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
