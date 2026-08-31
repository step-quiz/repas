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

  function carrega(fet) {
    if (mapa !== null) { fet(mapa); return; }
    if (demanat) { setTimeout(function () { carrega(fet); }, 60); return; }
    demanat = true;
    fetch(CAMI)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) { mapa = d || false; fet(mapa); })
      .catch(function () { mapa = false; fet(mapa); });
  }

  /* item → {curs, ud, act, titol} o null. */
  function busca(item) {
    if (!mapa) return null;
    var id = String(item.id);
    var ex = String(item.ex);
    return (mapa.items && mapa.items[id])
      || (mapa.exercicis && mapa.exercicis[ex])
      || (mapa.blocs && mapa.blocs[item.bloc])
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
