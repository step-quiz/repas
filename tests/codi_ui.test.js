/* tests/codi_ui.test.js — el que el botó Codi diu a l'alumne sobre la feina.

   El tram de cada examen el tria el professor amb dues dates, a
   l'analitzador, de manera que el lloc no pot saber quin serà. Per això el
   panell del codi només diu dues coses: quants exercicis porta l'alumne (des
   de l'últim esborrat, que és quan es torna a començar) i quants se'n
   demanen per a cada examen. Ni trams, ni dates de tancament, ni setmanes de
   descans.

   Cal jsdom, perquè el panell es pinta al DOM. Les pàgines de debò carreguen
   els scripts amb <script src>; aquí s'avaluen directament en una pàgina
   buida servida per https, que és on jsdom dona localStorage.

       npm install --no-save jsdom
       node tests/codi_ui.test.js
*/
"use strict";
const fs = require("fs"), path = require("path");

let JSDOM;
try {
  JSDOM = require("jsdom").JSDOM;
} catch (e) {
  console.log("\n\x1b[33m⊘ Proves del botó Codi saltades: falta jsdom.\x1b[0m");
  console.log("  Per passar-les:  npm install --no-save jsdom\n");
  process.exit(0);
}

const { assert, seccio, prova, resum } = require("./arnes.js");
const ARREL = path.join(__dirname, "..");

function obreLloc() {
  const dom = new JSDOM(
    '<!doctype html><html><body><main class="embolcall"></main></body></html>',
    { url: "https://repas.exemple/", runScripts: "outside-only" });
  /* El mateix ordre que a les pàgines. */
  ["calendari.js", "nucli.js", "codi-taules.js", "codi.js", "codi-ui.js"].forEach(f => {
    dom.window.eval(fs.readFileSync(path.join(ARREL, "js", f), "utf8"));
  });
  return { w: dom.window, d: dom.window.document };
}

/* Deixa `n` exercicis del Full 4 fets a la primera. */
function fes(w, n) {
  const ids = w.RE_TAULES.fulls[4].items, items = {}, ara = Date.now();
  for (let i = 0; i < n; i++) items[ids[i]] = { estat: "net", tf: ara, ts: ara };
  w.RE.desa(4, { v: 1, items: items, tfv: 1 });
}

/* Obre el panell del codi, en llegeix el text i el torna a tancar. */
function panell(w, d) {
  w.RE_CODI_UI.obre();
  const f = d.getElementById("re-codi-fons");
  const r = { text: f.textContent.replace(/\s+/g, " "), avis: !!f.querySelector("p.re-avis") };
  f.remove();
  return r;
}

// ─────────────────────────────────────────────────────────────────────────
seccio("El botó Codi diu la feina, sense trams");

{
  const { w, d } = obreLloc();
  fes(w, 5);
  const p5 = panell(w, d);
  fes(w, 12);
  const p12 = panell(w, d);
  fes(w, 25);
  const p25 = panell(w, d);
  w.RE_CODI_UI.eliminaTot();
  fes(w, 3);
  const p3 = panell(w, d);

  prova("diu quants exercicis porta i que se'n demanen entre 10 i 20 per a cada examen", () => {
    assert.ok(/Hi portes 12 exercicis\. Se'n demanen entre 10 i 20 per a cada examen, i com més en facis, més nota\./.test(p12.text), p12.text);
  });
  prova("amb menys de 10, ho diu en to d'avís", () => {
    assert.ok(/Hi portes 5 exercicis\./.test(p5.text) && p5.avis, p5.text);
    assert.ok(!p12.avis, "amb 12 no ha de sortir com a avís");
  });
  prova("passat de 20, diu que només compten els 20 últims", () => {
    assert.ok(/Hi portes 25 exercicis\. Se'n demanen entre 10 i 20 per a cada examen; per a la nota i l'examen només compten els 20 últims\./.test(p25.text), p25.text);
  });
  prova("després d'esborrar els codis, compta des de l'últim esborrat", () => {
    assert.ok(/Hi portes 3 exercicis des de l'últim esborrat\./.test(p3.text), p3.text);
    assert.ok(!/des de l'últim esborrat/.test(p12.text), "abans d'esborrar no n'ha de parlar");
  });
  prova("no parla de trams, ni de dates de tancament, ni de setmanes de descans", () => {
    [p5, p12, p25, p3].forEach(p =>
      assert.ok(!/\btram|descans|fins al |es tanca|no compta/i.test(p.text), p.text));
  });
  prova("i el lloc no pinta cap avís de final de termini", () => {
    assert.strictEqual(d.querySelector(".avis-tram"), null);
    assert.strictEqual(w.RE_CALENDARI.mostra, undefined);
    assert.strictEqual(w.RE_CODI_UI.feinaDelTram, undefined);
  });
}

process.exit(resum() ? 0 : 1);
