/* practica.js — el cicle de quatre passos: enunciat, pistes, resposta, resolució.
   Genèric per a qualsevol full: llegeix window.FULL, que full.html/practica.html
   omplen carregant el data/fullN.js que indica el paràmetre ?full=N.

   Amb ?origen=itinerari a la URL, tota la navegació de sortida (Següent,
   Anterior i l'enllaç de tornada) va a itinerari.html en lloc de seguir
   l'ordre del full; sense aquest paràmetre el comportament és el normal. */
(function () {
  "use strict";
  if (!window.FULL) return;   /* practica.html ja mostra "aquest full encara no està preparat" */

  var D = window.FULL, $ = function (s) { return document.querySelector(s); };
  var ids = D.items.map(function (i) { return i.id; });
  var params = new URLSearchParams(location.search);
  var qid = params.get("q") || ids[0];
  var deLitinerari = params.get("origen") === "itinerari";
  var idx = Math.max(0, ids.indexOf(qid));
  var item = D.items[idx], k = RE.clau(item);

  var ordre = [0, 1, 2, 3];                       /* barreja per sessió */
  for (var i = 3; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)), t = ordre[i];
    ordre[i] = ordre[j]; ordre[j] = t;
  }
  var LLETRES = ["A", "B", "C", "D"];

  /* L'estat de l'exercici NO comença de zero a cada càrrega de pàgina: es
     llegeix del registre. Si en una visita anterior s'havia fallat un intent
     o s'havien obert pistes, això segueix comptant ara. Recarregar deixa de
     ser una manera de tornar a començar. */
  var reg = RE.item(D.full, item.id);
  var pistes = reg.npis || 0;            /* pistes ja obertes, de sempre */
  var mostrades = 0;                     /* pistes visibles en aquesta pàgina */
  var intents = reg.nint || 0;           /* intents ja gastats, de sempre */
  var triada = -1;
  var repas = !!reg.tancat;              /* ja té estat definitiu: això és repàs */
  var tancat = false;                    /* aquesta pantalla ja ha donat veredicte */
  var intentsPagina = 0;

  /* Si s'ha arribat des de l'itinerari (?origen=itinerari), TOTA la
     navegació de sortida (Següent, Anterior, i el "← Full X" de dalt) torna
     a itinerari.html en lloc de continuar amb l'ordre normal del full:
     l'itinerari és una llista de passos, no una seqüència que es navegui
     endavant/enrere des de dins l'exercici — allà l'alumne ja veu tot el
     recorregut i tria on continuar. */
  function ves(n) {
    if (deLitinerari) { location.href = "itinerari.html"; return; }
    if (n < 0 || n >= ids.length) { location.href = "full.html?full=" + D.full; return; }
    location.href = "practica.html?full=" + D.full + "&q=" + ids[n];
  }

  /* ---- capçalera ---- */
  var bloc = D.blocs.filter(function (b) { return b.id === item.bloc; })[0];
  $("#tornar").textContent = deLitinerari ? "← El teu itinerari" : "← " + D.titol;
  $("#tornar").href = deLitinerari ? "itinerari.html" : "full.html?full=" + D.full;
  $("#codi").textContent = item.id;
  $("#situacio").textContent = bloc.titol + " · " + (idx + 1) + " de " + ids.length;
  $("#encap").textContent = item.encapcalament;
  $("#enunciat").innerHTML = item.enunciat;
  /* La figura va DESPRÉS de l'enunciat, no al lloc: l'enunciat ha de poder
     resoldre's tot sol amb un lector de pantalla, i el dibuix hi és per
     entendre-ho més de pressa. Si no n'hi ha, el contenidor queda amagat i no
     deixa cap forat. */
  if (item.figura) {
    $("#figura").innerHTML = item.figura;
    $("#figura").hidden = false;
  } else {
    $("#figura").innerHTML = "";
    $("#figura").hidden = true;
  }
  if (item.nota) { $("#nota").innerHTML = "<strong>Nota:</strong> " + item.nota; $("#nota").hidden = false; }
  RE.mat(document.body);
  if (!RE.estat(D.full, item.id)) RE.apunta(D.full, item.id, { estat: "vist" });
  RE.rellotge();

  /* Si l'exercici ja té estat definitiu, o si en una visita anterior es va
     deixar a mitges després d'un error, cal dir-ho abans que l'alumne
     respongui: el que passi ara no val el mateix que la primera vegada, i
     amagar-ho seria convidar-lo a jugar-hi. */
  function avisEstat(txt) {
    var d = document.createElement("p");
    d.className = "petit apagat";
    d.style.margin = ".2rem 0 .6rem";
    d.innerHTML = txt;
    var enc = $("#encap");
    if (enc && enc.parentNode) enc.parentNode.insertBefore(d, enc.nextSibling);
  }
  if (repas) {
    avisEstat("Aquest exercici ja el vas <strong>" + (RE.ETIQ[reg.estat] || "fer") +
      "</strong>. Tornar-hi va molt bé, però el registre ja no canvia: "
      + "el que queda anotat és com et va anar la primera vegada.");
  } else if (intents || pistes) {
    avisEstat("D'una estona anterior en aquest exercici ja portes " +
      (intents ? intents + (intents === 1 ? " intent" : " intents") : "") +
      (intents && pistes ? " i " : "") +
      (pistes ? pistes + (pistes === 1 ? " pista" : " pistes") : "") +
      ". Compten igual que si no haguessis marxat.");
  }

  /* ---- pistes ---- */
  $("#pista").onclick = function () {
    if (mostrades >= item.pistes.length) return;
    var d = document.createElement("div");
    d.className = "pista-txt";
    d.innerHTML = "<strong>Pista " + (mostrades + 1) + ".</strong> " + item.pistes[mostrades];
    $("#pistes").appendChild(d);
    RE.mat(d);
    mostrades++;
    /* Es desa el NOMBRE de pistes obertes, no un increment: qui ja n'havia
       obert dues i torna a la pàgina pot rellegir-les sense que el comptador
       es dispari, i tampoc no el pot posar a zero recarregant. */
    if (!repas) pistes = RE.pista(D.full, item.id, mostrades);
    if (mostrades >= item.pistes.length) {
      $("#pista").disabled = true;
      $("#pista").textContent = "No queden més pistes";
    }
  };

  /* ---- opcions ----
     Les quatre opcions formen un radiogroup ARIA: una sola es pot triar, i
     cal que s'anunciï com a tal. `aria-checked` porta l'estat; el roving
     tabindex (només la triada, o la primera si encara no n'hi ha cap, és
     tabulable) és el patró estàndard perquè Tab entri i surti del grup d'un
     sol pas i les fletxes es moguin per dins. */
  var caixa = $("#opcions");
  /* Roving tabindex: només UN botó del grup és tabulable.

     Amb `pos = -1` (cap opció triada) el tabindex se'n va a la primera opció
     que encara es pugui prémer. Sense això, en fallar el primer intent l'única
     opció amb tabIndex 0 era la que s'acabava de desactivar, i com que un botó
     `disabled` no és focusable el grup sencer quedava fora de l'abast del
     tabulador: amb teclat era impossible tornar-hi per fer el segon intent. */
  function marca(pos) {
    var fill = Array.prototype.slice.call(caixa.children);
    var tab = pos;
    if (tab < 0 || fill[tab].disabled) {
      tab = fill.findIndex(function (c) { return !c.disabled; });
    }
    fill.forEach(function (c, i) {
      c.setAttribute("aria-checked", i === pos && !c.disabled ? "true" : "false");
      c.tabIndex = i === tab ? 0 : -1;
    });
  }
  ordre.forEach(function (orig, pos) {
    var b = document.createElement("button");
    b.className = "opcio";
    b.type = "button";
    b.dataset.orig = orig;
    b.setAttribute("role", "radio");
    b.setAttribute("aria-checked", "false");
    b.tabIndex = pos === 0 ? 0 : -1;
    b.innerHTML = '<span class="lletra">' + LLETRES[pos] + "</span><span>" +
      item.opcions[orig] + "</span>";
    b.onclick = function () {
      if (tancat) return;
      Array.prototype.forEach.call(caixa.children, function (c) { c.classList.remove("tria"); });
      b.classList.add("tria");
      triada = pos;
      marca(pos);
      $("#comprova").disabled = false;
    };
    caixa.appendChild(b);
  });
  RE.mat(caixa);

  /* Fletxes amunt/avall i esquerra/dreta mouen el focus (i la tria de
     tabindex) dins del grup, sense activar la selecció — el patró habitual
     de radiogroup és moure't lliurement i deixar que Space/Enter (natius a
     <button>) confirmin. S'atura la propagació perquè aquestes mateixes
     fletxes no arribin també al listener de navegació d'exercici de més
     avall: dins del grup, primer són seves. */
  caixa.addEventListener("keydown", function (e) {
    if (tancat) return;
    var n = caixa.children.length;
    var actual = Array.prototype.indexOf.call(caixa.children, document.activeElement);
    if (actual < 0) return;
    var seguent = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") seguent = (actual + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") seguent = (actual - 1 + n) % n;
    else if (e.key === "Home") seguent = 0;
    else if (e.key === "End") seguent = n - 1;
    else return;
    e.preventDefault();
    e.stopPropagation();
    caixa.children[actual].tabIndex = -1;
    var el = caixa.children[seguent];
    el.tabIndex = 0;
    el.focus();
  });

  $("#mostra").onclick = function () {
    $("#mostra").hidden = true;
    $("#zona-resposta").hidden = false;
    $("#opcions").scrollIntoView({ behavior: "smooth", block: "center" });
  };

  /* ---- comprovació ---- */
  $("#comprova").onclick = function () {
    if (triada < 0 || tancat) return;
    intentsPagina++;
    var orig = ordre[triada], encert = orig === k.ok;
    var btn = caixa.children[triada];
    var v = $("#veredicte");

    /* Qui decideix l'estat és nucli.js a partir dels comptadors acumulats de
       l'ítem, no aquesta pantalla a partir del que ha passat des que s'ha
       carregat. Aquí només es pinta el resultat. */
    if (!encert) RE.apuntaError(D.full, item.id, k.err[orig]);
    var r = RE.intent(D.full, item.id, encert);
    intents = (RE.item(D.full, item.id).nint) || intents + 1;
    /* Queda un segon intent si el registre encara no s'ha tancat I aquesta
       pantalla tampoc no ha gastat els dos intents. La segona condició no és
       redundant: si el navegador no deixa desar res (mode privat estricte,
       quota plena, política del centre), el registre torna buit a cada
       lectura i sense això l'exercici no es tancaria mai. Amb magatzem, mana
       el registre; sense, almenys la pantalla es comporta bé. */
    var quedaIntent = intentsPagina < 2 && (repas || !r.tancat);

    if (encert) {
      tancat = true;
      btn.classList.remove("tria"); btn.classList.add("bona");
      btn.setAttribute("aria-describedby", "veredicte");
      v.className = "veredicte be";
      v.innerHTML = "<h2>Correcte</h2>" + (
        r.repas ? "Repàs fet. Al registre hi continua constant com et va anar la "
                  + "primera vegada (<strong>" + (RE.ETIQ[r.estat] || "?") + "</strong>), "
                  + "que és el que té sentit que hi consti."
        : r.estat === "pista" ? "Ho has resolt amb ajuda. Torna-hi d'aquí a uns dies sense demanar pistes."
        : r.estat === "segon" ? "Bé al segon intent: el primer error ja saps quin era."
        : "A la primera i sense pistes.");
    } else {
      btn.classList.remove("tria"); btn.classList.add("dolenta");
      btn.disabled = true;
      v.className = "veredicte malament";
      if (quedaIntent) {
        btn.setAttribute("aria-describedby", "veredicte");
        v.innerHTML = "<h2>Encara no</h2>" + k.diag[orig] +
          "<p class='petit apagat' style='margin:.4rem 0 0'>Tens un intent més." +
          (repas ? "" : " Aquest error ja ha quedat anotat: si te'n vas ara, "
            + "l'exercici es queda com a fallat.") + "</p>";
        triada = -1;
        marca(-1);          /* torna el focus tabulable a una opció encara viva */
        $("#comprova").disabled = true;
      } else {
        /* L'estat "fallat" ja el va desar RE.intent() al PRIMER error: aquí
           no cal tornar-hi, i sobretot no cal que aquesta pantalla decideixi
           res sobre el registre. */
        tancat = true;
        var btnOk = caixa.children[ordre.indexOf(k.ok)];
        btnOk.classList.add("bona");
        btnOk.setAttribute("aria-describedby", "veredicte");
        v.innerHTML = "<h2>La resposta correcta és la " +
          LLETRES[ordre.indexOf(k.ok)] + "</h2>" + k.diag[orig] +
          "<p style='margin:.4rem 0 0'>Mira't la resolució amb calma.</p>";
      }
    }
    RE.mat(v);
    if (tancat) {
      Array.prototype.forEach.call(caixa.children, function (c) { c.disabled = true; });
      $("#comprova").hidden = true;
      $("#pista").hidden = true;
      /* La resolució NO es mostra mai tota sola, encertis o fallis: és
         l'alumne qui l'ha de demanar prement aquest botó, igual que demanar
         una pista és decisió seva. Abans hi havia un
         `if (!encert) $("#veure").click()` que la mostrava d'ofici quan
         s'esgotaven els dos intents, i això té dos problemes: converteix
         "mirar la resolució" en una cosa que li PASSA a l'alumne en lloc
         d'una cosa que ell fa, i trenca la simetria amb el cas d'encert
         (si respons bé, ningú et clica el botó per tu). El botó es queda
         sempre visible i sempre per prémer; mai premut per l'aplicació. */
      $("#veure").hidden = false;
    }
  };

  /* ---- resolució ---- */
  $("#veure").onclick = function () {
    /* La visibilitat del botó (`hidden`) ja hauria de bastar per impedir
       que això es premi abans d'hora, però ha quedat demostrat que un sol
       punt de control és fràgil (vegeu la regla `[hidden]` a estil.css):
       una classe amb `display` propi n'hi va haver prou per fer-lo visible
       i clicable des del principi. Aquesta comprovació és el segon punt de
       control, independent del render: encara que algú tornés a amagar
       accidentalment aquest botó només amb CSS, o el disparés per una via
       que no sigui un clic normal (consola, extensió, etc.), la resolució
       només es construeix quan l'exercici ja està `tancat`. */
    if (!tancat && !repas) return;
    $("#veure").hidden = true;
    var r = $("#resolucio");
    r.innerHTML = "<h2>Resolució</h2><ol>" +
      k.res.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ol>";
    RE.mat(r);
    r.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  /* "Següent" és sempre disponible, hagi respost l'alumne o no: avançar
     d'exercici no s'ha de bloquejar per obligar-lo a contestar. És diferent
     de #veure ("Mostra la resolució"), que sí que ha de restar amagat fins
     que `tancat` — veure la solució abans d'hora buida l'exercici de sentit,
     saltar-se'l no. */
  /* Si l'exercici ja està tancat al registre, la resolució ja se l'ha
     guanyada: el botó hi és des del principi. No és cap regal —l'estat ja no
     pot canviar— i evita que hagi de tornar a respondre per llegir-la. */
  if (repas) $("#veure").hidden = false;

  $("#seguent").onclick = function () { ves(idx + 1); };
  $("#anterior").onclick = function () { ves(idx - 1); };
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") ves(idx + 1);
    if (e.key === "ArrowLeft") ves(idx - 1);
  });
})();
