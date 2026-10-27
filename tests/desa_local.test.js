/* tests/desa_local.test.js — Desa, Carrega i Copia (js/desa-local.js).

   Els Chromebook "congelats" esborren cada nit les dades locals. Aquestes
   proves fixen el que l'alumne en pot esperar: el fitxer que baixa és un codi
   que es pot tornar a carregar; carregar mai no trepitja res; copiar posa la
   icona en verd amb «Codi copiat»; i tancar sense haver desat avisa.

   Es carrega l'index.html de debò (el marcatge dels tres botons inclòs).

       npm install --no-save jsdom
       node tests/desa_local.test.js
*/
"use strict";
const fs = require("fs"), path = require("path");

let JSDOM;
try {
  JSDOM = require("jsdom").JSDOM;
} catch (e) {
  console.log("\n\x1b[33m⊘ Proves de Desa/Carrega/Copia saltades: falta jsdom.\x1b[0m");
  console.log("  Per passar-les:  npm install --no-save jsdom\n");
  process.exit(0);
}

const { assert, seccio, prova, resum } = require("./arnes.js");
const ARREL = path.join(__dirname, "..");

async function obreLloc(pagina) {
  const html = pagina || fs.readFileSync(path.join(ARREL, "index.html"), "utf8")
    .replace(/<script[^>]*><\/script>/g, "");
  const dom = new JSDOM(html, { url: "https://repas.exemple/", runScripts: "outside-only" });
  const w = dom.window;
  w.__baixats = []; w.__porta = null;
  w.URL.createObjectURL = b => { w.__baixats.push(b); return "blob:x"; };
  w.URL.revokeObjectURL = () => {};
  w.HTMLAnchorElement.prototype.click = function () { w.__nomBaixat = this.download; };
  Object.defineProperty(w.navigator, "clipboard", {
    value: { writeText: t => { w.__porta = t; return Promise.resolve(); } }, configurable: true });
  ["calendari.js", "nucli.js", "codi-taules.js", "codi.js", "codi-ui.js", "desa-local.js"].forEach(f =>
    w.eval(fs.readFileSync(path.join(ARREL, "js", f), "utf8")));
  await espera(5);                       // DOMContentLoaded: els botons ja tenen el seu onclick
  return { w, d: w.document };
}

function fes(w, n, full) {
  full = full || 4;
  const ids = w.RE_TAULES.fulls[full].items, items = {}, ara = Date.now();
  for (let i = 0; i < n; i++) items[ids[i]] = { estat: "net", tf: ara, ts: ara };
  w.RE.desa(full, { v: 1, items: items, tfv: 1 });
}
const llegeixBlob = (w, b) => new Promise(r => { const f = new w.FileReader(); f.onload = () => r(f.result); f.readAsText(b); });
var espera = ms => new Promise(r => setTimeout(r, ms));
const sortida = (w) => { const e = new w.Event("beforeunload", { cancelable: true }); w.dispatchEvent(e); return e.defaultPrevented; };

(async () => {
  seccio("La portada porta els tres botons");
  {
    const { d } = await obreLloc();
    prova("Desa el codi, Carrega el codi i Copia el codi, amb la seva icona", () => {
      ["desa-baixa", "desa-obre", "desa-copia"].forEach(id => {
        const b = d.getElementById(id);
        assert.ok(b && b.querySelector("svg"), id);
      });
      assert.ok(/Desa el codi/.test(d.getElementById("desa-baixa").textContent));
      assert.ok(/Carrega el codi/.test(d.getElementById("desa-obre").textContent));
      assert.ok(/Copia el codi/.test(d.getElementById("desa-copia").textContent));
    });
  }

  seccio("Els tres botons també hi són a les altres pàgines (full, pràctica…)");
  {
    const { w, d } = await obreLloc('<!doctype html><html><body><main class="embolcall"><div class="barra-sup"><a href="index.html">← Tots els fulls</a></div></main></body></html>');
    prova("es munten, compactes, dins de la barra de dalt", () => {
      const f = d.querySelector(".barra-sup #desa-fila.desa-compacta");
      assert.ok(f, "falta la fila");
      ["desa-baixa", "desa-obre", "desa-copia"].forEach(id => assert.ok(d.getElementById(id), id));
    });
    fes(w, 3);
    d.getElementById("desa-baixa").click();
    prova("i fan el mateix: desar mostra el tick i el text nou", () => {
      assert.strictEqual(w.__baixats.length, 1);
      assert.strictEqual(d.getElementById("desa-baixa").textContent.trim(), "Codi desat al PC");
    });
    const { d: d2 } = await obreLloc('<!doctype html><html><body><main class="embolcall"><h1>Sense barra</h1></main></body></html>');
    prova("si la pàgina no té barra de dalt, se'n crea una", () => {
      assert.ok(d2.querySelector("main > .barra-sup #desa-baixa"));
    });
  }

  seccio("Desa: baixa el codi en un fitxer");
  {
    const { w, d } = await obreLloc();
    d.getElementById("desa-baixa").click();
    prova("sense feina no baixa res i ho diu", () => {
      assert.strictEqual(w.__baixats.length, 0);
      assert.ok(/no hi ha res a desar/.test(d.getElementById("desa-msg").textContent));
    });
    fes(w, 7);
    d.getElementById("desa-baixa").click();
    prova("amb feina baixa un .txt datat", () => {
      assert.strictEqual(w.__baixats.length, 1);
      assert.ok(/^repas-\d{4}-\d{2}-\d{2}\.txt$/.test(w.__nomBaixat), w.__nomBaixat);
    });
    const text = await llegeixBlob(w, w.__baixats[0]);
    prova("el botó Desa mostra el tick (classe desat) i el text «Codi desat al PC»", () => {
      assert.ok(d.getElementById("desa-baixa").classList.contains("desat"));
      assert.strictEqual(d.getElementById("desa-baixa").textContent.trim(), "Codi desat al PC");
      assert.strictEqual(d.getElementById("desa-msg").hidden, true);
    });
    prova("el fitxer és un codi íntegre amb els 7 exercicis", () => {
      const p = w.RE_CODI.llegeix(text);
      assert.ok(p.ok && p.integre, JSON.stringify(p.error));
    });

    seccio("Carrega: mode afegir, mai sobreescriu");
    const { w: w2 } = await obreLloc();
    fes(w2, 2);                                   // el mateix full, 2 exercicis ja fets aquí
    const abans = JSON.stringify(w2.RE.llegeix(4).items);
    const miss = [];
    const r = w2.RE_DESA.carrega(text, (t, mal) => miss.push([t, mal]));
    prova("recupera els que falten i no toca els que ja hi eren", () => {
      assert.ok(r.ok);
      assert.strictEqual(r.posats, 5);
      assert.strictEqual(r.saltats, 2);
      const ara = w2.RE.llegeix(4).items, ids = w2.RE_TAULES.fulls[4].items;
      assert.strictEqual(Object.keys(ara).filter(k => ara[k].estat).length, 7);
      JSON.parse(abans) && Object.keys(JSON.parse(abans)).forEach(k =>
        assert.strictEqual(JSON.stringify(ara[k]), JSON.stringify(JSON.parse(abans)[k]), k));
    });
    const { w: w3 } = await obreLloc();
    let preguntat = false;
    w3.confirm = () => { preguntat = true; return true; };
    w3.RE_DESA.carrega(text, () => {});
    prova("no demana cap confirmació", () => assert.strictEqual(preguntat, false));
    const { w: w4 } = await obreLloc();
    prova("un fitxer que no és un codi no canvia res i dona error", () => {
      const m = [];
      const r4 = w4.RE_DESA.carrega("això no és un codi", (t, mal) => m.push(mal));
      assert.strictEqual(r4.ok, false);
      assert.ok(m[0] === true);
    });
    prova("el fitxer acaba en salt de línia i es carrega igual", () => assert.ok(/\n$/.test(text) && r.ok));
  }

  seccio("Copia: la icona es posa verda i diu «Codi copiat»");
  {
    const { w, d } = await obreLloc();
    const b = d.getElementById("desa-copia");
    fes(w, 3);
    b.click();
    await espera(20);
    prova("copia el codi al porta-retalls", () => {
      assert.ok(w.__porta && w.RE_CODI.llegeix(w.__porta).integre);
    });
    prova("el botó passa a verd i diu «Codi copiat»", () => {
      assert.ok(b.classList.contains("fet"));
      assert.strictEqual(d.getElementById("desa-copia-et").textContent, "Codi copiat");
    });
  }

  seccio("Avís en tancar sense haver desat");
  {
    const { w, d } = await obreLloc();
    prova("sense feina, tancar no molesta", () => assert.strictEqual(sortida(w), false));
    fes(w, 4);
    prova("amb feina sense desar, el navegador pregunta", () => assert.strictEqual(sortida(w), true));
    await espera(10);
    prova("i queda un recordatori amb botó per desar", () => {
      const a = d.getElementById("desa-avis");
      assert.ok(a && /No has desat el codi/.test(a.textContent));
      a.querySelector("#desa-avis-desa").click();
      assert.strictEqual(d.getElementById("desa-avis"), null);
    });
    prova("després de desar, tancar no molesta", () => assert.strictEqual(sortida(w), false));
    /* El clic de «Desa» compta com a acció: es deixa passar l'estona. */
    const ara0 = Date.now(); w.Date.now = () => ara0 + 5000;
    fes(w, 6);
    prova("si hi ha feina nova, torna a avisar", () => assert.strictEqual(sortida(w), true));
    d.getElementById("desa-copia").click();
    await espera(20);
    w.Date.now = () => ara0 + 10000;
    prova("…i després de copiar no avisa", () => assert.strictEqual(sortida(w), false));
    fes(w, 9);
    prova("seguir un enllaç del lloc (clic just abans) no avisa", () => {
      d.body.dispatchEvent(new w.Event("click", { bubbles: true }));
      assert.strictEqual(sortida(w), false);
    });
  }

  process.exit(resum() ? 0 : 1);
})();
