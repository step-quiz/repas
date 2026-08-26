/* tests/test_visibilitat_real.js — [hidden] s'ha de veure amagat DE VERITAT.

   BUG QUE ARREGLA AQUESTA PROVA

   `#veure` ("Mostra la resolució") i `#seguent` ("Següent exercici") a
   practica.html porten l'atribut `hidden` i el JS de practica.js el treu
   exactament quan toca (quan `tancat` passa a `true`). Fins aquí, tot
   correcte -- i és exactament el que `tests/test_flux_resolucio.js` prova,
   amb jsdom, mirant `element.hidden`.

   Però `element.hidden` només reflecteix l'ATRIBUT. No diu res de com es
   renderitza l'element de veritat. I `css/estil.css` tenia `.btn{display:
   inline-flex}` sense cap regla que digués que `[hidden]` ha de guanyar per
   damunt d'això. Especificitat d'atribut i de classe empatades (0,1,0);
   qui ve després a la cascada guanya, i el full d'estil de l'autor ve
   sempre després del full per defecte del navegador. Resultat: els dos
   botons es veien i es podien clicar des del primer instant de cada
   exercici, ABANS de triar cap opció -- un alumne podia prémer "Mostra la
   resolució", llegir-hi la resposta, i triar-la tot seguit com si l'hagués
   raonada. `tests/test_flux_resolucio.js` seguia en verd tota l'estona,
   perquè el que comprovava (l'atribut) era correcte; el que fallava era el
   render, que jsdom no calcula com un navegador real.

   Aquesta prova obre cada pàgina amb un navegador real (Chromium, via
   Playwright) i mira `getComputedStyle(...).display`, que és el que
   determina si un alumne pot veure-ho i clicar-ho de veritat. Cobreix totes
   les pàgines del lloc, no només practica.html: qualsevol `hidden` futur en
   qualsevol pàgina que xoqui amb una classe que fixi `display` queda atrapat
   aquí, encara que ningú sàpiga per endavant quin element serà.

   Mateix criteri que la resta de l'arnès: si falta la dependència, se salta
   amb un avís en comptes de petar.

       npm install --no-save playwright
       npx playwright install chromium
       node tests/test_visibilitat_real.js
*/
"use strict";
const path = require("path");

let chromium;
try {
  chromium = require("playwright").chromium;
} catch (e) {
  console.log("\n\x1b[33m⊘ Proves de visibilitat real saltades: falta playwright.\x1b[0m");
  console.log("  Per passar-les:  npm install --no-save playwright && npx playwright install chromium\n");
  process.exit(0);
}

const { assert, seccio, prova, resum } = require("./arnes.js");
const ARREL = path.join(__dirname, "..");

function espera(ms) { return new Promise(res => setTimeout(res, ms)); }

async function obre(browser, arxiu, query) {
  const page = await browser.newPage();
  /* Sense connexió, aquest @import remot no cal que carregui per a la
     prova -- només frenaria l'obertura de la pàgina esperant una xarxa que
     no hi és. RE.mat() i la resta ja funcionen sense KaTeX remot (és local,
     a vendor/). */
  await page.route("**://fonts.googleapis.com/**", route => route.abort());
  await page.goto("file://" + path.join(ARREL, arxiu) + (query || ""),
    { waitUntil: "load", timeout: 15000 });
  await espera(700);
  return page;
}

/* Tots els elements que EN AQUEST MOMENT porten l'atribut hidden, però que
   el navegador renderitza igualment (display diferent de "none"). Una
   pàgina correcta ha de retornar sempre un array buit. */
async function hiddenQueEsVeuen(page) {
  return page.evaluate(() => {
    return [...document.querySelectorAll("[hidden]")].map((el) => ({
      id: el.id || null,
      classes: el.className,
      display: getComputedStyle(el).display,
    })).filter((x) => x.display !== "none");
  });
}

const PAGINES = [
  { arxiu: "index.html" },
  { arxiu: "full.html", query: "?full=1" },
  { arxiu: "practica.html", query: "?full=1" },
  { arxiu: "diagnostic.html" },
  { arxiu: "itinerari.html" },
  { arxiu: "resultat.html" },
  { arxiu: "analitzador-repas.html" },
];

(async () => {
  const browser = await chromium.launch();

  seccio("Cap [hidden] es veu de veritat, a cap pàgina, en carregar-la");
  for (const pag of PAGINES) {
    const page = await obre(browser, pag.arxiu, pag.query);
    const trencats = await hiddenQueEsVeuen(page);
    prova(pag.arxiu + (pag.query || "") + ": tots els [hidden] es renderitzen amb display:none", () => {
      assert.deepStrictEqual(trencats, [],
        "elements hidden que igualment es veuen: " + JSON.stringify(trencats));
    });
    await page.close();
  }

  seccio("BUG CONCRET: #veure i #seguent, a practica.html, abans de respondre");
  {
    const page = await obre(browser, "practica.html", "?full=1&q=1a");
    const veureDisplay = await page.evaluate(() => getComputedStyle(document.getElementById("veure")).display);
    const seguentDisplay = await page.evaluate(() => getComputedStyle(document.getElementById("seguent")).display);
    const veureVisible = await page.isVisible("#veure");
    const seguentVisible = await page.isVisible("#seguent");
    prova("#veure es renderitza amb display:none abans de respondre", () => {
      assert.strictEqual(veureDisplay, "none");
    });
    prova("#seguent es renderitza amb display:none abans de respondre", () => {
      assert.strictEqual(seguentDisplay, "none");
    });
    prova("#veure no és visible per a un usuari real (page.isVisible)", () => {
      assert.strictEqual(veureVisible, false);
    });
    prova("#seguent no és visible per a un usuari real (page.isVisible)", () => {
      assert.strictEqual(seguentVisible, false);
    });
    await page.close();
  }

  seccio("Defensa en profunditat: un clic forçat per JS a #veure, abans de tancar, no revela res");
  {
    const page = await obre(browser, "practica.html", "?full=1&q=1a");
    const contingut = await page.evaluate(() => {
      document.getElementById("veure").click();   // salta la UI, com faria la consola
      return document.getElementById("resolucio").innerHTML.trim();
    });
    prova("#resolucio segueix buit encara que es forci el clic per consola", () => {
      assert.strictEqual(contingut, "");
    });
    await page.close();
  }

  seccio("Un cop tancat l'exercici (encert net), #veure i #seguent SÍ es veuen i funcionen");
  {
    const page = await obre(browser, "practica.html", "?full=1&q=1a");
    await page.click("#mostra");
    const orig = await page.evaluate(() => {
      const item = window.FULL.items.filter((it) => it.id === "1a")[0];
      return window.RE.clau(item).ok;
    });
    await page.evaluate((o) => {
      [...document.querySelectorAll("#opcions .opcio")].find((b) => +b.dataset.orig === o).click();
    }, orig);
    await page.click("#comprova");
    await espera(200);
    const veureVisible = await page.isVisible("#veure");
    const seguentVisible = await page.isVisible("#seguent");
    prova("#veure es veu després de tancar l'exercici", () => assert.strictEqual(veureVisible, true));
    prova("#seguent es veu després de tancar l'exercici", () => assert.strictEqual(seguentVisible, true));
    await page.click("#veure");
    await espera(150);
    const resolucioOmplerta = (await page.textContent("#resolucio")).trim().length > 0;
    prova("i clicar-lo ara sí que mostra la resolució", () => assert.ok(resolucioOmplerta));
    await page.close();
  }

  await browser.close();
  process.exit(resum() ? 0 : 1);
})();
