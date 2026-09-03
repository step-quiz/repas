/* codi-ui.js — el botó del codi: flotant, a dalt, i present a totes les
   pàgines on l'alumne pot estar treballant.

   Hi ha UN sol codi i UN sol botó. Abans hi havia dos panells (un al peu de
   la pàgina d'un full, un altre a la portada) que donaven codis d'abast
   diferent, i això només podia acabar en confusió: l'alumne no ha de decidir
   quin codi toca. El botó dona sempre la fotografia sencera —tots els fulls i
   el test inicial— i és l'analitzador qui la desglossa. */
window.RE_CODI_UI = (function () {
  "use strict";

  var CSS = [
    "#re-codi-btn{position:fixed;top:.75rem;right:.75rem;z-index:9998;",
    "display:inline-flex;align-items:center;gap:.4rem;border:1px solid var(--tinta,#1F2933);",
    "background:var(--tinta,#1F2933);color:#fff;border-radius:999px;padding:.45rem .85rem;",
    "font:600 13px system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;cursor:pointer;",
    "box-shadow:0 2px 10px rgba(31,41,51,.18)}",
    "#re-codi-btn:hover{filter:brightness(1.18)}",
    "#re-codi-btn .pt{width:7px;height:7px;border-radius:50%;background:#7FB79B;display:inline-block}",
    "#re-codi-btn.buida .pt{background:#9AA3AE}",
    "#re-codi-fons{position:fixed;inset:0;z-index:9999;background:rgba(31,41,51,.42);",
    "display:flex;align-items:flex-start;justify-content:center;padding:1rem;overflow:auto}",
    "#re-codi-fin{background:var(--card,#fff);border:1px solid var(--vora,#E4E1DB);border-radius:14px;",
    "max-width:560px;width:100%;margin-top:3.5rem;padding:1.15rem 1.15rem 1.25rem;",
    "box-shadow:0 12px 40px rgba(31,41,51,.22)}",
    "#re-codi-fin h2{font:700 1.05rem/1.4 system-ui,sans-serif;margin:0 0 .2rem}",
    "#re-codi-fin p{margin:.3rem 0}",
    "#re-codi-cap{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}",
    "#re-codi-tanca{border:0;background:transparent;font-size:1.4rem;line-height:1;cursor:pointer;",
    "color:var(--apagat,#6B7480);padding:0 .2rem}",
    "#re-codi-caixa{font:600 13px/1.55 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;",
    "word-break:break-all;user-select:all;-webkit-user-select:all;padding:.65rem .7rem;",
    "background:var(--fons,#FBFAF8);border:1px solid var(--vora,#E4E1DB);border-radius:9px;",
    "letter-spacing:.02em;margin:.75rem 0}",
    "#re-codi-fin .re-acc{display:flex;gap:.5rem;flex-wrap:wrap}",
    "#re-codi-fin .re-btn{border:1px solid var(--tinta,#1F2933);background:var(--tinta,#1F2933);",
    "color:#fff;border-radius:9px;padding:.5rem .85rem;font:600 14px system-ui,sans-serif;cursor:pointer}",
    "#re-codi-fin .re-btn.buit{background:transparent;color:var(--tinta,#1F2933);border-color:var(--vora,#E4E1DB)}",
    "#re-codi-fin .re-petit{font-size:13px;color:var(--apagat,#6B7480)}",
    "#re-codi-rec{border-top:1px solid var(--vora,#E4E1DB);margin-top:1rem;padding-top:.85rem}",
    "#re-codi-rec summary{cursor:pointer;font:600 13px system-ui,sans-serif;color:var(--tinta,#1F2933)}",
    "#re-codi-rec input{width:100%;box-sizing:border-box;margin:.55rem 0;padding:.55rem .6rem;",
    "font:600 13px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;",
    "border:1px solid var(--vora,#E4E1DB);border-radius:9px;background:var(--fons,#FBFAF8)}",
    "#re-codi-rec .re-btn{font-size:13px;padding:.45rem .7rem}",
    "#re-codi-rec-estat{margin:.55rem 0 0;font-size:13px}",
    "#re-codi-fin .re-avis{background:#FBF3DF;border:1px solid #EBD3A3;color:#6B4200;",
    "border-radius:9px;padding:.55rem .7rem;font-size:13px;margin:.75rem 0 0}",
    /* El botó és fix a dalt a la dreta i el contingut del lloc comença just
       allà. Se li fa lloc empenyent la capçalera cap avall i deixant marge a
       la dreta, en comptes de tapar-la. */
    ".embolcall{padding-top:3.2rem}",
    ".embolcall>.cimera:first-child{padding-right:6.5rem}",
    "@media(max-width:520px){#re-codi-btn{top:.5rem;right:.5rem;padding:.4rem .7rem;font-size:12px}",
    "#re-codi-fin{margin-top:2.5rem}",
    ".embolcall{padding-top:2.8rem}.embolcall>.cimera:first-child{padding-right:5.5rem}}"
  ].join("");

  function comptes() {
    var T = window.RE_TAULES, c = { net: 0, segon: 0, pista: 0, fallat: 0 }, fets = 0, total = 0;
    Object.keys(T.fulls).forEach(function (k) {
      var taula = T.fulls[k], p = window.RE.llegeix(+k).items || {};
      total += taula.items.length;
      taula.items.forEach(function (id) {
        var e = (p[id] || {}).estat;
        if (e && e !== "vist") { c[e] = (c[e] || 0) + 1; fets++; }
      });
    });
    return { c: c, fets: fets, total: total };
  }

  /* Frase de resum. A propòsit no diu cap nota: repàs-ESO és pràctica, i si
     l'alumne veu una nota cada vegada que mira el codi, deixarà d'obrir
     pistes i evitarà els exercicis difícils. Volum i cobertura sí que hi són:
     empenyen cap a fer més feina, que és el que interessa. */
  function frase(x) {
    var t = [];
    if (x.c.net) t.push(x.c.net + " a la primera");
    if (x.c.segon) t.push(x.c.segon + " al segon intent");
    if (x.c.pista) t.push(x.c.pista + " amb pista");
    if (x.c.fallat) t.push(x.c.fallat + " fallats");
    return x.fets + (x.fets === 1 ? " exercici" : " exercicis") +
      (t.length ? ": " + t.join(", ") : "") + ".";
  }

  function obre() {
    var x = comptes(), codi = null;
    var fons = document.createElement("div");
    fons.id = "re-codi-fons";

    if (!x.fets) {
      fons.innerHTML =
        '<div id="re-codi-fin"><div id="re-codi-cap"><h2>Encara no hi ha codi</h2>' +
        '<button id="re-codi-tanca" aria-label="Tanca">&times;</button></div>' +
        '<p class="re-petit">El codi recull la feina que has fet. Fes algun ' +
        "exercici i torna aqu\u00ed: apareixer\u00e0 tot sol.</p>" +
        '<details id="re-codi-rec"><summary>Canvies d\'ordinador? Recupera la teva feina</summary>' +
        '<p class="re-petit">El progrés es desa en aquest navegador, no al núvol: en un ' +
        "Chromebook compartit o si el navegador esborra les dades, es perd. Enganxa aqu\u00ed " +
        "un codi <b>teu</b> anterior i el torno a col\u00b7locar. El codi que generis " +
        "despr\u00e9s dir\u00e0 quants exercicis has recuperat i de quin codi venien: " +
        "recuperar la teva feina no t\u00e9 cap problema, fer passar la d'un altre per " +
        "teva es veu." +
        '<input type="text" id="re-codi-rec-camp" placeholder="RC3\u2026" ' +
        'autocomplete="off" spellcheck="false" aria-label="Codi a recuperar">' +
        '<div class="re-acc"><button class="re-btn buit" id="re-codi-rec-afegeix">Afegeix el que em falti</button>' +
        '<button class="re-btn buit" id="re-codi-rec-tot">Substitueix-ho tot</button></div>' +
        '<p class="re-petit" id="re-codi-rec-estat" role="status"></p></details>' + "</div>";
    } else {
      codi = window.RE_CODI.genera(window.RE_CODI.recull(null));
      fons.innerHTML =
        '<div id="re-codi-fin"><div id="re-codi-cap">' +
        "<div><h2>El teu codi</h2>" +
        '<p class="re-petit">' + x.fets +
        " exercicis fets des de que vas comen\u00e7ar a anotar-ho.</p></div>" +
        '<button id="re-codi-tanca" aria-label="Tanca">&times;</button></div>' +
        '<div id="re-codi-caixa"></div>' +
        '<div class="re-acc"><button class="re-btn" id="re-codi-copia">Copia el codi</button>' +
        '<button class="re-btn buit" id="re-codi-tanca2">Tanca</button></div>' +
        (x.fets < 10
          ? '<p class="re-avis">Has fet <b>' + x.fets + "</b> " +
            (x.fets === 1 ? "exercici" : "exercicis") + ". El codi diu " +
            "exactament quants n'has fet i quins, aix\u00ed que si el " +
            "professorat t'ha demanat m\u00e9s feina, val m\u00e9s esperar a " +
            "haver-la feta.</p>"
          : "") +
        '<p class="re-petit" style="margin-top:.75rem">El codi recull tota la ' +
        "teva feina fins ara, exercici per exercici. Cada codi nou substitueix " +
        "l'anterior: si n'has enviat un abans, no passa res.</p>" +
        '<p class="re-petit" id="re-codi-avis"></p>' +
        '<details id="re-codi-rec"><summary>Canvies d\'ordinador? Recupera la teva feina</summary>' +
        '<p class="re-petit">El progrés es desa en aquest navegador, no al núvol: en un ' +
        "Chromebook compartit o si el navegador esborra les dades, es perd. Enganxa aqu\u00ed " +
        "un codi <b>teu</b> anterior i el torno a col\u00b7locar. El codi que generis " +
        "despr\u00e9s dir\u00e0 quants exercicis has recuperat i de quin codi venien: " +
        "recuperar la teva feina no t\u00e9 cap problema, fer passar la d'un altre per " +
        "teva es veu." +
        '<input type="text" id="re-codi-rec-camp" placeholder="RC3\u2026" ' +
        'autocomplete="off" spellcheck="false" aria-label="Codi a recuperar">' +
        '<div class="re-acc"><button class="re-btn buit" id="re-codi-rec-afegeix">Afegeix el que em falti</button>' +
        '<button class="re-btn buit" id="re-codi-rec-tot">Substitueix-ho tot</button></div>' +
        '<p class="re-petit" id="re-codi-rec-estat" role="status"></p></details>' + "</div>";
    }

    document.body.appendChild(fons);
    var caixa = document.getElementById("re-codi-caixa");
    if (caixa && codi) caixa.textContent = codi;

    function tanca() { if (fons.parentNode) fons.parentNode.removeChild(fons); }
    fons.addEventListener("click", function (e) { if (e.target === fons) tanca(); });
    ["re-codi-tanca", "re-codi-tanca2"].forEach(function (id) {
      var b = document.getElementById(id);
      if (b) b.onclick = tanca;
    });
    document.addEventListener("keydown", function esc(e) {
      if (e.key === "Escape") { tanca(); document.removeEventListener("keydown", esc); }
    });

    var cop = document.getElementById("re-codi-copia");
    if (cop) cop.onclick = function () {
      var b = this;
      function be() { b.textContent = "Copiat"; setTimeout(function () { b.textContent = "Copia el codi"; }, 2500); }
      function manual() {
        /* Sense perm\u00eds de porta-retalls (fitxer local, navegador antic) es
           selecciona el text i Ctrl+C sempre funciona. */
        var r = document.createRange();
        r.selectNodeContents(caixa);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        document.getElementById("re-codi-avis").textContent =
          "El codi ja est\u00e0 seleccionat: prem Ctrl+C (o Cmd+C) per copiar-lo.";
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codi).then(be, manual);
      } else { manual(); }
    };

    muntaRecuperacio();
  }

  /* ── recuperar el progrés a partir d'un codi ────────────────────────────

     El progrés viu al localStorage d'un sol navegador. En un institut amb
     carros de Chromebooks compartits, o amb una política que esborra les
     dades de lloc en tancar sessió, un trimestre de feina pot desapareixer
     sense avís. El codi que l'alumne ja genera porta l'estat de cada exercici
     i RE_CODI.llegeix() el sap tornar a muntar, així que recuperar-lo no
     costa res: només faltava el camí de tornada.

     Dues accions distintes a propòsit, en lloc d'una de "sincronitza" que
     hauria de decidir en silenci quin estat guanya:
       · "Afegeix el que em falti" -- només omple exercicis sense estat aquí.
         És l'opció segura i la que gairebé sempre es vol.
       · "Substitueix-ho tot" -- esborra i escriu el que digui el codi.
         Demana confirmació perquè és destructiva. */
  function muntaRecuperacio() {
    var camp = document.getElementById("re-codi-rec-camp");
    if (!camp) return;
    var estat = document.getElementById("re-codi-rec-estat");

    function diu(txt, mal) {
      estat.textContent = txt;
      estat.style.color = mal ? "#A32B22" : "var(--apagat,#6B7480)";
    }

    function aplica(nomesBuits) {
      var brut = camp.value.trim();
      if (!brut) { diu("Enganxa primer un codi.", true); return; }
      var p = window.RE_CODI.llegeix(brut);
      if (!p.ok) { diu(p.error || "Aquest codi no es pot llegir.", true); return; }
      if (!p.integre) {
        diu("El codi es llegeix, per\u00f2 el control no quadra: s'ha copiat "
          + "a mitges o li falta algun car\u00e0cter. Torna a copiar-lo sencer.", true);
        return;
      }
      if (!nomesBuits && !window.confirm(
        "Aix\u00f2 esborrar\u00e0 el progr\u00e9s que hi ha en aquest navegador i hi "
        + "posar\u00e0 el del codi. Vols continuar?")) return;

      var posats = 0, saltats = 0;
      p.fulls.forEach(function (f) {
        if (!nomesBuits) window.RE.esborra(f.n);
        var actual = window.RE.llegeix(f.n).items || {};
        f.items.forEach(function (it) {
          if (!it.estat) return;
          if (nomesBuits && actual[it.id] && actual[it.id].estat) { saltats++; return; }
          /* `imp` marca l'exercici com a recuperat d'un codi, i `tancat` fa
             que compti com a ja resolt: recuperar la feina no ha de tornar a
             obrir tots els exercicis com si s'haguessin de fer. */
          window.RE.apunta(f.n, it.id, { estat: it.estat, imp: 1, tancat: 1 });
          posats++;
        });
      });

      /* Es desa d'on ve. No per desconfiança: recuperar la pròpia feina és
         l'ús normal d'això i el més freqüent. Però el codi que surti d'aquest
         navegador ha de poder dir que una part de la feina ve d'un altre
         lloc, perquè si no, importar el codi d'un company és exactament
         indistingible d'haver-la fet. L'analitzador ho creua amb els codis
         que ja té i, si l'origen és un codi del mateix alumne, no diu res. */
      if (posats) {
        var g = window.RE.meta();
        g.imp = (g.imp || 0) + 1;
        g.orig = window.RE_CODI.empremta(p);
        window.RE.desaMeta(g);
      }

      if (!posats && !saltats) { diu("Aquest codi no porta cap exercici fet.", true); return; }
      diu(posats + " exercici" + (posats === 1 ? "" : "s") + " recuperat"
        + (posats === 1 ? "" : "s")
        + (saltats ? " (" + saltats + " ja els tenies fets aqu\u00ed i no s'han tocat)" : "")
        + ". Recarrega la p\u00e0gina per veure-ho.");
    }

    document.getElementById("re-codi-rec-afegeix").onclick = function () { aplica(true); };
    document.getElementById("re-codi-rec-tot").onclick = function () { aplica(false); };
  }

  /* El botó es posa sol a qualsevol pàgina que carregui aquest fitxer, per no
     haver-lo d'afegir a mà a cadascuna i que se n'oblidi alguna. */
  function munta() {
    if (document.getElementById("re-codi-btn")) return;
    if (!window.RE || !window.RE_TAULES || !window.RE_CODI) return;

    var e = document.createElement("style");
    e.textContent = CSS;
    document.head.appendChild(e);

    var x = comptes();
    var b = document.createElement("button");
    b.id = "re-codi-btn";
    b.type = "button";
    b.className = x.fets ? "" : "buida";
    b.innerHTML = '<span class="pt"></span>Codi' +
      (x.fets ? ' <span style="opacity:.75;font-weight:500">' + x.fets + "</span>" : "");
    b.title = "Obt\u00e9n el codi per enviar al professorat";
    b.onclick = obre;
    document.body.appendChild(b);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", munta);
  } else { munta(); }

  return { munta: munta, obre: obre };
})();
