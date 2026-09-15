/* js/teoria.js — l'enllaç des d'un exercici cap a la teoria que hi ha al
   darrere, al llibre de text (llibre.step-quiz.net).

   COM ES DECIDEIX ON VA CADA EXERCICI

   El mapa és `data/teoria.json` i té tres nivells: un ítem concret, un
   exercici sencer, o tot un bloc temàtic. Es consulta en aquest ordre i el
   primer que respon guanya.

   La finor cal de debò. Dins d'un mateix bloc hi conviuen nivells molt
   diferents: el preu amb IVA i descompte s'explica a 2n d'ESO, on
   l'activitat es diu «Percentatges en context: descomptes, IVA i canvis de
   divisa», mentre que els descomptes encadenats demanen el factor
   multiplicador, que és de 4t. Enviar-los tots dos al mateix lloc voldria
   dir enviar-ne un dels dos al lloc equivocat, i un alumne que clica «teoria»
   i troba un tema que no toca deixa de clicar-hi.

   COM ES PRESENTA

   Una icona petita amb una «T». Qui va bé no la necessita i no li fa nosa;
   qui s'encalla la clica i llavors sí que se li desplega l'enllaç, amb el
   curs i el nom de l'activitat, perquè sàpiga on va abans d'anar-hi.

   SI NO HI HA MAPA. Si el fitxer no existeix, o l'exercici no hi surt, no
   passa res: la icona no apareix. El lloc funciona igual que sense. */
(function (global) {
  "use strict";

  var CAMI = "data/teoria.json";
  var mapa = null;
  var demanat = false;

  /* Demana el mapa sense dependre de `fetch`.

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
  function demana(fet) {
    var acabat = false;
    function un(d) { if (!acabat) { acabat = true; fet(d); } }

    if (typeof fetch === "function") {
      try {
        fetch(CAMI)
          .then(function (r) { return r.ok ? r.json() : null; })
          .then(function (d) { un(d || false); })
          .catch(function () { un(false); });
        return;
      } catch (e) { /* ni tan sols ha arrencat: es prova amb XHR */ }
    }

    try {
      var x = new XMLHttpRequest();
      x.open("GET", CAMI, true);
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

  function carrega(fet) {
    if (mapa !== null) { fet(mapa); return; }
    if (demanat) { setTimeout(function () { carrega(fet); }, 60); return; }
    demanat = true;
    demana(function (d) { mapa = d; fet(mapa); });
  }

  /* item → {curs, ud, act, titol} o null. */
  function busca(item) {
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

  function enllac(d) {
    var h = "#ud" + d.ud + (d.act ? "-" + d.act : "");
    return (mapa.base || "") + "/" + d.curs + ".html" + h;
  }

  function nomCurs(clau) {
    return (mapa.cursos && mapa.cursos[clau]) || clau;
  }

  /* Penja la icona dins de `contenidor` per a l'ítem donat. Torna a
     començar a cada exercici: primer es buida el que hi hagués. */
  function mostra(contenidor, item) {
    if (!contenidor) return;
    contenidor.innerHTML = "";
    carrega(function () {
      var d = busca(item);
      if (!d) return;
      var b = document.createElement("button");
      b.type = "button";
      b.className = "teoria-t";
      b.textContent = "T";
      b.title = "Consulta la teoria";
      b.setAttribute("aria-expanded", "false");
      b.setAttribute("aria-label", "Consulta la teoria d'aquest exercici");
      var caixa = document.createElement("span");
      caixa.className = "teoria-obert";
      caixa.hidden = true;
      var a = document.createElement("a");
      a.href = enllac(d);
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = nomCurs(d.curs) + " · " + (d.titol || ("Unitat " + d.ud));
      caixa.appendChild(a);
      b.onclick = function () {
        caixa.hidden = !caixa.hidden;
        b.setAttribute("aria-expanded", caixa.hidden ? "false" : "true");
      };
      contenidor.appendChild(b);
      contenidor.appendChild(caixa);
    });
  }

  global.RE_TEORIA = { mostra: mostra, busca: busca, carrega: carrega };
})(typeof window !== "undefined" ? window : globalThis);
