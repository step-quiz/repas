/* tests/test_flux_resolucio.js — la resolució no s'ofereix mai tota sola.

   BUG QUE ARREGLA AQUESTA PROVA

   Dins de `$("#comprova").onclick`, quan es tanca l'exercici (`tancat`),
   hi havia aquesta línia:

       if (!encert) $("#veure").click();

   És a dir: si l'últim intent era erroni, el propi codi CLICAVA el botó
   "Mostra la resolució" en nom de l'alumne, i la resolució apareixia sense
   que ell hagués demanat res. El botó quedava visible igualment, però ja no
   calia prémer-lo: la resolució ja hi era.

   Això és un bug real de UX i de pedagogia. Mirar la resolució ha de ser
   una decisió de l'alumne, presa amb un gest propi — igual que demanar una
   pista és una decisió seva. Que l'aplicació la mostri tota sola, encara
   que sigui després de dos intents fallits, converteix "veure la resolució"
   en una cosa que li PASSA a l'alumne en lloc d'una cosa que ELL fa. I
   trenca la simetria amb el cas d'encert: si respons bé, ningú et clica el
   botó per tu.

   La prova comprova, amb un DOM real, que:

     1. La resolució i el veredicte estan buits abans de triar cap opció.
     2. Continuen buits mentre es trien i comproven opcions.
     3. Quan l'exercici es tanca (per encert o per esgotar els dos intents),
        el botó "Mostra la resolució" queda VISIBLE però la resolució
        segueix BUIDA: apareix el botó, no el contingut.
     4. Només prement el botó explícitament apareix la resolució.

   Mateix criteri que la resta de l'arnès: sense jsdom, se salta amb un avís.

       npm install --no-save jsdom
       node tests/test_flux_resolucio.js
*/
"use strict";
const fs = require("fs"), path = require("path");

let JSDOM;
try {
  JSDOM = require("jsdom").JSDOM;
} catch (e) {
  console.log("\n\x1b[33m⊘ Proves del flux de resolució saltades: falta jsdom.\x1b[0m");
  console.log("  Per passar-les:  npm install --no-save jsdom\n");
  process.exit(0);
}

const { assert, seccio, prova, resum } = require("./arnes.js");
const ARREL = path.join(__dirname, "..");

function espera(ms) { return new Promise(res => setTimeout(res, ms)); }

async function obrePractica(query) {
  const dom = await JSDOM.fromFile(path.join(ARREL, "practica.html"), {
    runScripts: "dangerously",
    resources: "usable",
    url: "file://" + path.join(ARREL, "practica.html") + (query || "?full=4&q=62a")
  });
  await espera(600);
  return { w: dom.window, d: dom.window.document, tanca: () => dom.window.close() };
}

/* Les opcions es pinten barrejades; `data-orig` porta l'índex original, que
   és el que cal comparar amb `k.ok` per saber quin botó és el correcte. */
function trobaOpcions(w, d) {
  const item = w.FULL.items.filter(it => it.id === "62a")[0];
  const k = w.RE.clau(item);
  const botons = [...d.querySelectorAll("#opcions .opcio")];
  const correcta = botons.find(b => +b.dataset.orig === k.ok);
  const incorrectes = botons.filter(b => b !== correcta);
  return { correcta, incorrectes };
}

function buit(el) { return el.innerHTML.trim() === ""; }

(async () => {
  seccio("La resolució i el veredicte estan buits en obrir l'exercici");
  {
    const { d, tanca } = await obrePractica();
    prova("#veredicte és buit", () => assert.ok(buit(d.getElementById("veredicte"))));
    prova("#resolucio és buit", () => assert.ok(buit(d.getElementById("resolucio"))));
    prova("#veure està amagat", () => assert.strictEqual(d.getElementById("veure").hidden, true));
    tanca();
  }

  seccio("Triar una opció, sense comprovar-la, no revela res");
  {
    const { w, d, tanca } = await obrePractica();
    d.getElementById("mostra").click();
    const { incorrectes } = trobaOpcions(w, d);
    incorrectes[0].click();
    prova("#veredicte segueix buit", () => assert.ok(buit(d.getElementById("veredicte"))));
    prova("#resolucio segueix buit", () => assert.ok(buit(d.getElementById("resolucio"))));
    prova("#veure segueix amagat", () => assert.strictEqual(d.getElementById("veure").hidden, true));
    tanca();
  }

  seccio("El primer intent erroni no revela la resolució");
  {
    const { w, d, tanca } = await obrePractica();
    d.getElementById("mostra").click();
    const { incorrectes } = trobaOpcions(w, d);
    incorrectes[0].click();
    d.getElementById("comprova").click();
    prova("l'exercici no es tanca encara (queda un intent)",
      () => assert.strictEqual(d.getElementById("veure").hidden, true));
    prova("#resolucio segueix buit", () => assert.ok(buit(d.getElementById("resolucio"))));
    tanca();
  }

  seccio("BUG QUE ES CORREGEIX: el segon intent erroni NO mostra la resolució sola");
  {
    const { w, d, tanca } = await obrePractica();
    d.getElementById("mostra").click();
    const { incorrectes } = trobaOpcions(w, d);
    incorrectes[0].click();
    d.getElementById("comprova").click();     // 1r intent, erroni
    incorrectes[1].click();
    d.getElementById("comprova").click();     // 2n intent, erroni: es tanca

    prova("el botó \"Mostra la resolució\" ara és VISIBLE", () => {
      assert.strictEqual(d.getElementById("veure").hidden, false);
    });
    prova("però #resolucio encara està BUIT: ningú l'ha premut", () => {
      assert.ok(buit(d.getElementById("resolucio")),
        "la resolució s'ha mostrat sola, sense que l'alumne premés el botó");
    });
    prova("el veredicte sí que diu quina era la correcta (això és feedback, no la resolució)", () => {
      assert.ok(!buit(d.getElementById("veredicte")));
    });

    d.getElementById("veure").click();
    prova("prement el botó explícitament, ARA sí que apareix", () => {
      assert.ok(!buit(d.getElementById("resolucio")));
    });
    tanca();
  }

  seccio("Encertar tampoc no revela la resolució sola (simetria amb el cas d'error)");
  {
    const { w, d, tanca } = await obrePractica();
    d.getElementById("mostra").click();
    const { correcta } = trobaOpcions(w, d);
    correcta.click();
    d.getElementById("comprova").click();     // encert al primer intent: es tanca

    prova("el botó \"Mostra la resolució\" és visible", () => {
      assert.strictEqual(d.getElementById("veure").hidden, false);
    });
    prova("#resolucio segueix buit fins que es premi el botó", () => {
      assert.ok(buit(d.getElementById("resolucio")));
    });
    d.getElementById("veure").click();
    prova("prement el botó, apareix", () => assert.ok(!buit(d.getElementById("resolucio"))));
    tanca();
  }

  process.exit(resum() ? 0 : 1);
})();
