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

// ─────────────────────────────────────────────────────────────────────────
seccio("Recuperar un codi: els «vist» no són feina, però es poden localitzar");
{
  /* Codi real d'una alumna: 14 exercicis amb estat, dels quals 5 són «vist»
     (oberts sense respondre). El botó en comptava 9 i el missatge en deia 14. */
  const CODI = "RC4F5-30CCJ-KR07N-46XP0-00000-00000-00000-00000-10500-00000-00000-00000-00009-C4000-00000-00000-00000-00000-00000-DAQPB-3JWH0-00000-00000-00000-00000-00000-00HYE-N0000-00027-00000-00000-00000-00000-00000-BQ53B-14C14-Z1014-00000-2M010-00910-01011-02103-14C11-D12P2-0022C-DB";
  function recupera(w, d, nomesBuits) {
    w.RE_CODI_UI.obre();
    d.getElementById("re-codi-rec-camp").value = CODI;
    d.getElementById(nomesBuits ? "re-codi-rec-afegeix" : "re-codi-rec-tot").onclick();
    return d.getElementById("re-codi-rec-estat").textContent;
  }
  const { w, d } = obreLloc();
  w.confirm = () => true;
  const msg = recupera(w, d, true);

  prova("el missatge diu 9 recuperats (els que compten al botó), no 14", () => {
    assert.ok(/^9 exercicis recuperats\./.test(msg), msg);
  });
  prova("el missatge diu QUINS són els 5 oberts, full per full, amb el tema", () => {
    const t = d.getElementById("re-codi-rec-estat").textContent;
    assert.ok(/5 exercicis estaven oberts sense respondre/.test(t), t);
    assert.ok(/Full 1 · Nombres enters, fraccions i decimals: 1e, 1f, 340b/.test(t), t);
    assert.ok(/Full 2 · Potències: 43a/.test(t) && /Full 3 · Successions i progressions: 59a/.test(t), t);
  });
  prova("cada exercici obert és un enllaç directe que porta a aquell exercici", () => {
    const hrefs = Array.from(d.querySelectorAll("#re-codi-rec-estat a")).map(a => a.getAttribute("href")).sort();
    assert.strictEqual(JSON.stringify(hrefs), JSON.stringify([
      "practica.html?full=1&q=1e", "practica.html?full=1&q=1f", "practica.html?full=1&q=340b",
      "practica.html?full=2&q=43a", "practica.html?full=3&q=59a"].sort()));
  });
  prova("el número del missatge coincideix amb el del botó", () => {
    d.getElementById("re-codi-btn") && d.getElementById("re-codi-btn").remove();
    w.RE_CODI_UI.munta();
    const n = d.getElementById("re-codi-btn").textContent.replace(/\D/g, "");
    assert.strictEqual(n, "9");
  });
  prova("els «vist» no es desen com a tancats ni com a importats", () => {
    const it = w.RE.llegeix(1).items["1e"];
    assert.ok(it && it.estat === "vist", JSON.stringify(it));
    assert.ok(!it.tancat && !it.imp, JSON.stringify(it));
  });
  prova("i són els que llista el desplegable «Oberts sense respondre» del full", () => {
    /* Per JSON: els arrays de jsdom són d'un altre realm que els de Node. */
    const ids = n => JSON.stringify(Array.from(w.RE.nomesOberts(n)).map(e => e.id).sort());
    assert.strictEqual(ids(1), JSON.stringify(["1e", "1f", "340b"]));
    assert.strictEqual(ids(2), JSON.stringify(["43a"]));
    assert.strictEqual(ids(3), JSON.stringify(["59a"]));
  });
  prova("l'alumna els pot fer amb nota: un intent encertat tanca l'exercici com a net", () => {
    const r = w.RE.intent(1, "1e", true);
    assert.strictEqual(r.repas, false);
    assert.strictEqual(w.RE.llegeix(1).items["1e"].estat, "net");
  });
  prova("els exercicis amb feina sí que es recuperen, tancats i marcats com a importats", () => {
    const p = w.RE.llegeix(1).items;
    assert.strictEqual(p["1a"].estat, "net");
    assert.ok(p["1a"].tancat && p["1a"].imp);
    assert.strictEqual(p["26a"].estat, "fallat");
    assert.strictEqual(w.RE.llegeix(2).items["321a"].estat, "segon");
  });
  prova("un resultat de debò d'aquí no el trepitja un «vist» del codi", () => {
    const o = obreLloc();
    o.w.RE.apunta(1, "1e", { estat: "net", tancat: 1 });
    const m = recupera(o.w, o.d, true);
    assert.strictEqual(o.w.RE.llegeix(1).items["1e"].estat, "net", m);
    assert.ok(/4 exercicis estaven oberts/.test(m), m);
  });
  prova("un «vist» d'aquest navegador no impedeix recuperar el resultat de debò", () => {
    const o = obreLloc();
    o.w.RE.visita(1, "1a");
    const m = recupera(o.w, o.d, true);
    assert.strictEqual(o.w.RE.llegeix(1).items["1a"].estat, "net", m);
    assert.ok(/^9 exercicis recuperats/.test(m), m);
  });
  prova("«Substitueix-ho tot» dona el mateix: 9 recuperats i 5 oberts", () => {
    const o = obreLloc();
    o.w.confirm = () => true;
    const m = recupera(o.w, o.d, false);
    assert.ok(/^9 exercicis recuperats\./.test(m) && /5 exercicis estaven oberts/.test(m), m);
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("La portada (index.html) avisa dels exercicis oberts d'un codi recuperat");
{
  const CODI = "RC4F5-30CCJ-KR07N-46XP0-00000-00000-00000-00000-10500-00000-00000-00000-00009-C4000-00000-00000-00000-00000-00000-DAQPB-3JWH0-00000-00000-00000-00000-00000-00HYE-N0000-00027-00000-00000-00000-00000-00000-BQ53B-14C14-Z1014-00000-2M010-00910-01011-02103-14C11-D12P2-0022C-DB";
  /* index.html de debò: els mateixos scripts, en el mateix ordre. `abans`
     es crida just abans d'inici.js, per deixar-hi el navegador a punt. */
  function portada(abans) {
    const html = fs.readFileSync(path.join(ARREL, "index.html"), "utf8");
    const dom = new JSDOM(html, { url: "https://repas.exemple/", runScripts: "outside-only" });
    const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
    scripts.forEach(src => {
      if (/inici\.js$/.test(src)) { if (abans) abans(dom.window); }
      dom.window.eval(fs.readFileSync(path.join(ARREL, src), "utf8"));
    });
    return { w: dom.window, d: dom.window.document };
  }
  function recuperaA(w) {
    w.confirm = () => true;
    w.RE_CODI_UI.obre();
    w.document.getElementById("re-codi-rec-camp").value = CODI;
    w.document.getElementById("re-codi-rec-tot").onclick();
  }

  const { d } = portada(recuperaA);
  const bloc = d.getElementById("recuperats");

  prova("la portada pinta l'avís, visible, quan hi ha oberts recuperats", () => {
    assert.ok(bloc, "falta #recuperats a index.html");
    assert.strictEqual(bloc.hidden, false);
    assert.ok(/Tens 5 exercicis oberts que encara no has respost/.test(bloc.textContent), bloc.textContent);
  });
  prova("l'avís és el primer element de la portada, per sobre de tot", () => {
    const main = d.querySelector("main");
    const fills = [...main.children].filter(e => e.tagName !== "P" || !e.classList.contains("cimera"));
    assert.strictEqual(fills[0].id, "recuperats", fills[0].id);
  });
  prova("diu a quin full és cada un, amb el títol del tema", () => {
    assert.ok(/Full 1 · Nombres enters, fraccions i decimals/.test(bloc.textContent), bloc.textContent);
    assert.ok(/Full 2 · Potències/.test(bloc.textContent) && /Full 3 · Successions i progressions/.test(bloc.textContent));
  });
  prova("porta un botó per exercici que hi va directament", () => {
    const h = [...bloc.querySelectorAll("a.xip")].map(a => a.getAttribute("href")).sort();
    assert.strictEqual(JSON.stringify(h), JSON.stringify([
      "practica.html?full=1&q=1e", "practica.html?full=1&q=1f", "practica.html?full=1&q=340b",
      "practica.html?full=2&q=43a", "practica.html?full=3&q=59a"].sort()));
  });
  prova("dins de cada full, els exercicis surten en l'ordre del full", () => {
    const f1 = [...bloc.querySelectorAll(".recuperats-full")][0];
    const ids = [...f1.querySelectorAll("a.xip")].map(a => a.textContent);
    assert.strictEqual(JSON.stringify(ids), JSON.stringify(["1e", "1f", "340b"]));
  });
  prova("qui no ha recuperat res (ni té «vist» de passada) no veu cap avís", () => {
    const b = portada().d.getElementById("recuperats");
    assert.strictEqual(b.hidden, true);
    const c = portada(w => { w.RE.visita(1, "1e"); w.RE.visita(1, "1f"); }).d.getElementById("recuperats");
    assert.strictEqual(c.hidden, true, "un «vist» de passada no ha d'avisar");
    assert.strictEqual(c.innerHTML, "");
  });
  prova("l'avís va minvant a mesura que respon, i desapareix quan els ha respost tots", () => {
    const parcial = portada(w => { recuperaA(w); w.RE.intent(1, "1e", true); }).d.getElementById("recuperats");
    assert.ok(/Tens 4 exercicis oberts/.test(parcial.textContent), parcial.textContent);
    assert.ok(!parcial.querySelector('a[href$="q=1e"]'), "1e ja està respost");
    const tot = portada(w => {
      recuperaA(w);
      [[1, "1e"], [1, "1f"], [1, "340b"], [2, "43a"], [3, "59a"]].forEach(([f, id]) => w.RE.intent(f, id, true));
    }).d.getElementById("recuperats");
    assert.strictEqual(tot.hidden, true);
  });
  prova("amb 1 de sol, parla en singular", () => {
    const u = portada(w => {
      recuperaA(w);
      [[1, "1e"], [1, "1f"], [1, "340b"], [2, "43a"]].forEach(([f, id]) => w.RE.intent(f, id, true));
    }).d.getElementById("recuperats");
    assert.ok(/Tens 1 exercici obert que encara no has respost/.test(u.textContent), u.textContent);
  });
}

process.exit(resum() ? 0 : 1);
