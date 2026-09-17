/* js/teoria.js — el pont des d'un exercici cap als recursos que hi ha al
   darrere: la TEORIA del llibre de text (llibre.step-quiz.net) i el VÍDEO de
   resolució de l'entrega de paper.

   DUES ICONES, NO UNA. A la capçalera de l'exercici hi poden sortir dues
   pastilles petites:

       T   porta a l'activitat del llibre que explica la teoria
       V   porta al vídeo on es resol un exercici equivalent

   Són independents: un exercici pot tenir-ne les dues, una o cap, i cada
   icona apareix només si el seu mapa té destinació per a aquell exercici.

   PER QUÈ TOTES DUES ES VEUEN DES DEL PRIMER MOMENT. El vídeo no resol
   l'exercici de la pantalla, resol un altre exercici de la mateixa destresa.
   No regala cap resposta: ensenya un mètode, igual que la teoria. Qui va bé
   no les necessita i no li fan nosa; qui s'encalla les clica i llavors sí
   que se li desplega l'enllaç, amb la procedència i el nom, perquè sàpiga
   on va abans d'anar-hi.

   DOS MAPES, UNA MATEIXA CASCADA. `data/teoria.json` i `data/videos.json`
   tenen els mateixos tres nivells —ítem, exercici, bloc— i es consulten en
   aquest ordre: el primer que respon guanya.

   La finor cal de debò, i cal per separat a cada mapa. La teoria va sobretot
   per bloc, perquè tot un bloc comparteix el lloc del llibre: el preu amb
   IVA s'explica a 2n d'ESO i els descomptes encadenats demanen el factor
   multiplicador, que és de 4t, i per això aquells dos exercicis no poden
   compartir destinació. Els vídeos, en canvi, van sobretot per exercici: el
   80 (fórmula general) i el 81 (nombre de solucions) són del mateix bloc i
   van a vídeos diferents. Si els vídeos fossin un camp més de
   `teoria.json`, una entrada d'exercici posada per al vídeo amagaria la
   teoria del bloc, perquè la cascada s'emporta l'entrada sencera.

   SI NO HI HA MAPA. Si un fitxer no existeix, o l'exercici no hi surt, no
   passa res: aquella icona no apareix. El lloc funciona igual que sense. */
(function (global) {
  "use strict";

  var CAMINS = { teoria: "data/teoria.json", videos: "data/videos.json" };
  var mapes = { teoria: null, videos: null };
  var demanats = { teoria: false, videos: false };

  /* Demana un mapa sense dependre de `fetch`.

     Per què no `fetch` tot sol: la resta del projecte és ES5 estricte a
     posta (no hi ha ni una arrow function ni un `let` en tot `js/`), i
     `fetch` era l'única API moderna de tot el lloc. En un navegador que no
     la porti, la crida no rebutja: llança un `ReferenceError` SINCRÒNIC que
     el `.catch()` no veu, i que se'n va cap amunt fins al nivell superior de
     `practica.js`, on mata tot el que ve després — les quatre opcions no es
     construeixen i l'exercici queda inservible. El docstring de dalt promet
     que sense mapa «no passa res»; això ho compleix de debò.

     `XMLHttpRequest` fa la mateixa feina, existeix a tot arreu i es porta
     igual de bé amb `file://` (no s'hi pot llegir a Chrome, i llavors la
     icona simplement no apareix, que és el que toca). */
  function demana(cami, fet) {
    var acabat = false;
    function un(d) { if (!acabat) { acabat = true; fet(d); } }

    if (typeof fetch === "function") {
      try {
        fetch(cami)
          .then(function (r) { return r.ok ? r.json() : null; })
          .then(function (d) { un(d || false); })
          .catch(function () { un(false); });
        return;
      } catch (e) { /* ni tan sols ha arrencat: es prova amb XHR */ }
    }

    try {
      var x = new XMLHttpRequest();
      x.open("GET", cami, true);
      x.onreadystatechange = function () {
        if (x.readyState !== 4) return;
        /* Amb file:// l'estat és 0 i el text hi és igualment; per HTTP cal
           un 200. Si el JSON no es pot llegir, es tracta com a "no hi ha
           mapa", no com a error. */
        var ok = (x.status === 0 && x.responseText) || (x.status >= 200 && x.status < 300);
        if (!ok) { un(false); return; }
        try { un(JSON.parse(x.responseText) || false); }
        catch (e) { un(false); }
      };
      x.onerror = function () { un(false); };
      x.send();
    } catch (e) { un(false); }
  }

  /* `quin` és "teoria" o "videos". Cada mapa té la seva memòria: que un
     falti o arribi tard no ha d'endarrerir ni tombar l'altre. */
  function carrega(quin, fet) {
    if (mapes[quin] !== null) { fet(mapes[quin]); return; }
    if (demanats[quin]) { setTimeout(function () { carrega(quin, fet); }, 60); return; }
    demanats[quin] = true;
    demana(CAMINS[quin], function (d) { mapes[quin] = d; fet(mapes[quin]); });
  }

  /* La cascada, idèntica per als dos mapes: ítem → exercici → bloc. */
  function cerca(mapa, item) {
    if (!mapa) return null;
    var id = String(item.id);
    var ex = String(item.ex);
    /* La clau de bloc porta el full al davant («8:semblanca»). Els noms de
       bloc NO són únics: «aplicacions» existeix al full 3 (successions) i al
       8 (semblança), i «problemes» al 5 (equacions) i al 7 (Pitàgores).
       Indexant només pel nom, els dos sentits compartirien destinació i un
       dels dos enviaria l'alumne a un tema que no té res a veure. */
    var perFull = item.full + ":" + item.bloc;
    return (mapa.items && mapa.items[id])
      || (mapa.exercicis && mapa.exercicis[ex])
      || (mapa.blocs && (mapa.blocs[perFull] || mapa.blocs[item.bloc]))
      || null;
  }

  /* Compatibilitat: `busca()` sempre ha volgut dir «busca la teoria». */
  function busca(item) { return cerca(mapes.teoria, item); }
  function buscaVideo(item) { return cerca(mapes.videos, item); }

  function enllacTeoria(d) {
    var h = "#ud" + d.ud + (d.act ? "-" + d.act : "");
    return ((mapes.teoria && mapes.teoria.base) || "") + "/" + d.curs + ".html" + h;
  }

  function enllacVideo(d) {
    return ((mapes.videos && mapes.videos.base) || "") + d.vid;
  }

  function nomCurs(clau) {
    var m = mapes.teoria;
    return (m && m.cursos && m.cursos[clau]) || clau;
  }

  /* Una entrada pot ser un objecte o una llista d'objectes: hi ha exercicis
     que es miren amb més d'un vídeo (el 84 desenvolupa i després aplica la
     fórmula general, i són dos vídeos diferents). Es normalitza aquí i no a
     cada punt d'ús. */
  function llista(d) {
    return Object.prototype.toString.call(d) === "[object Array]" ? d : [d];
  }

  /* Penja una pastilla amb la seva caixa desplegable dins de `ranura`.
     `enllacos` és una llista de {href, text, avis}. */
  function pastilla(ranura, lletra, titol, etiqueta, enllacos) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "recurs-icona";
    b.textContent = lletra;
    b.title = titol;
    b.setAttribute("aria-expanded", "false");
    b.setAttribute("aria-label", etiqueta);

    var caixa = document.createElement("span");
    caixa.className = "recurs-obert";
    caixa.hidden = true;

    for (var i = 0; i < enllacos.length; i++) {
      var e = enllacos[i];
      var a = document.createElement("a");
      a.href = e.href;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = e.text;
      caixa.appendChild(a);
      if (e.avis) {
        var n = document.createElement("span");
        n.className = "recurs-avis";
        n.textContent = e.avis;
        caixa.appendChild(n);
      }
    }

    b.onclick = function () {
      caixa.hidden = !caixa.hidden;
      b.setAttribute("aria-expanded", caixa.hidden ? "false" : "true");
    };
    ranura.appendChild(b);
    ranura.appendChild(caixa);
  }

  /* Penja les icones dins de `contenidor` per a l'ítem donat. Torna a
     començar a cada exercici: primer es buida el que hi hagués.

     Les dues ranures es creen ABANS de demanar els mapes, i cada mapa omple
     la seva. Així la T sempre queda a l'esquerra de la V encara que el
     fitxer dels vídeos arribi primer: l'ordre de les icones no pot dependre
     de quin dels dos fitxers respon abans. */
  function mostra(contenidor, item) {
    if (!contenidor) return;
    contenidor.innerHTML = "";
    var ranuraT = document.createElement("span");
    var ranuraV = document.createElement("span");
    ranuraT.className = "recurs";
    ranuraV.className = "recurs";
    contenidor.appendChild(ranuraT);
    contenidor.appendChild(ranuraV);

    carrega("teoria", function (mapa) {
      var d = cerca(mapa, item);
      if (!d) return;
      pastilla(ranuraT, "T", "Consulta la teoria",
        "Consulta la teoria d'aquest exercici",
        [{ href: enllacTeoria(d),
           text: nomCurs(d.curs) + " · " + (d.titol || ("Unitat " + d.ud)) }]);
    });

    carrega("videos", function (mapa) {
      var d = cerca(mapa, item);
      if (!d) return;
      var font = (mapa && mapa.font) || "l'entrega de repàs";
      var v = llista(d), enllacos = [], i;
      for (i = 0; i < v.length; i++) {
        enllacos.push({
          href: enllacVideo(v[i]),
          /* L'etiqueta diu d'on surt el vídeo abans de dir què hi ha: un
             alumne que ja ha fet l'entrega de paper reconeix el número i
             sap que allà hi té l'enunciat sencer. Diu «de l'entrega» a
             posta: el lloc també numera els seus exercicis, i un «Exercici
             5» pelat es confondria amb el 5 del banc. */
          text: "Ex. " + v[i].ex + " de l'entrega · " + v[i].titol,
          avis: v[i].avis || ""
        });
      }
      pastilla(ranuraV, "V", "Mira un exercici semblant resolt en vídeo",
        "Mira en vídeo la resolució d'un exercici semblant, de «" + font + "»",
        enllacos);
    });
  }

  global.RE_TEORIA = { mostra: mostra, busca: busca, buscaVideo: buscaVideo,
                       carrega: carrega };
})(typeof window !== "undefined" ? window : globalThis);
