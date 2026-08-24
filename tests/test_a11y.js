/* tests/test_a11y.js — proves d'accessibilitat de practica.html i
   diagnostic.html: el radiogroup de les opcions, l'aria-checked en
   seleccionar, les regions en viu presents abans que hi arribi contingut, i
   el nom accessible de cada element interactiu.

   Fan servir jsdom amb `resources: "usable"` perquè aquestes dues pàgines,
   a diferència d'analitzador-repas.html, carreguen els seus scripts amb
   <script src="...">: cal que jsdom resolgui aquests fitxers locals, no
   només executar codi inline. Sense connexió, els <link>/<script> remots
   de KaTeX i Google Fonts fallen en carregar — és normal i no afecta
   aquestes proves, que no depenen de KaTeX (RE.mat() ja té el seu propi
   try/catch per quan no hi ha connexió, vegeu js/nucli.js).

   Mateix criteri que la resta de l'arnès: sense jsdom, se salta amb un
   avís en comptes de petar.

       npm install --no-save jsdom
       node tests/test_a11y.js
*/
"use strict";
const fs = require("fs"), path = require("path");

let JSDOM;
try {
  JSDOM = require("jsdom").JSDOM;
} catch (e) {
  console.log("\n\x1b[33m⊘ Proves d'accessibilitat saltades: falta jsdom.\x1b[0m");
  console.log("  Per passar-les:  npm install --no-save jsdom\n");
  process.exit(0);
}

const { assert, seccio, prova, resum } = require("./arnes.js");
const ARREL = path.join(__dirname, "..");

/* Petita espera perquè els <script defer> i el document.write asíncron
   (que carrega data/fullN.js) hagin acabat d'executar-se abans de mirar
   el DOM. jsdom no exposa cap esdeveniment net de "tot ha carregat" quan
   hi ha document.write pel mig, així que un setTimeout curt és la manera
   habitual de donar-li el torn a la cua de tasques. */
function espera(ms) { return new Promise(res => setTimeout(res, ms)); }

async function obrePractica(query) {
  const dom = await JSDOM.fromFile(path.join(ARREL, "practica.html"), {
    runScripts: "dangerously",
    resources: "usable",
    url: "file://" + path.join(ARREL, "practica.html") + (query || "?full=1")
  });
  await espera(600);
  return { w: dom.window, d: dom.window.document, tanca: () => dom.window.close() };
}

async function obreDiagnostic() {
  const dom = await JSDOM.fromFile(path.join(ARREL, "diagnostic.html"), {
    runScripts: "dangerously",
    resources: "usable",
    url: "file://" + path.join(ARREL, "diagnostic.html")
  });
  await espera(400);
  return { w: dom.window, d: dom.window.document, tanca: () => dom.window.close() };
}

/* Nom accessible aproximat, prou fidel per a aquestes proves: aria-label
   si n'hi ha, si no el textContent normalitzat. No cobreix
   aria-labelledby amb múltiples ids ni els casos que el navegador
   resoldria a través de <label>, perquè cap element d'aquest projecte els
   fa servir — n'hi ha prou amb els dos casos reals presents al codi. */
function nomAccessible(el) {
  const al = el.getAttribute("aria-label");
  if (al && al.trim()) return al.trim();
  const lb = el.getAttribute("aria-labelledby");
  if (lb) {
    const doc = el.ownerDocument;
    const t = lb.split(/\s+/).map(id => {
      const ref = doc.getElementById(id);
      return ref ? ref.textContent : "";
    }).join(" ").replace(/\s+/g, " ").trim();
    if (t) return t;
  }
  return (el.textContent || "").replace(/\s+/g, " ").trim();
}

(async () => {

// ─────────────────────────────────────────────────────────────────────────
seccio("practica.html — el radiogroup de les quatre opcions");

{
  const { d, tanca } = await obrePractica();
  const caixa = d.getElementById("opcions");

  prova("el contenidor porta role=radiogroup", () => {
    assert.strictEqual(caixa.getAttribute("role"), "radiogroup");
  });

  prova("té una etiqueta accessible (aria-labelledby cap a l'enunciat)", () => {
    assert.ok(caixa.getAttribute("aria-labelledby"), "falta aria-labelledby");
    const ref = d.getElementById(caixa.getAttribute("aria-labelledby"));
    assert.ok(ref, "aria-labelledby apunta a un id que no existeix");
    assert.ok(ref.textContent.trim().length > 0, "l'element referenciat és buit");
  });

  prova("les quatre opcions són role=radio amb aria-checked=false inicial", () => {
    assert.strictEqual(caixa.children.length, 4);
    Array.prototype.forEach.call(caixa.children, c => {
      assert.strictEqual(c.getAttribute("role"), "radio");
      assert.strictEqual(c.getAttribute("aria-checked"), "false");
    });
  });

  prova("només la primera opció és tabulable abans de triar (roving tabindex)", () => {
    assert.strictEqual(caixa.children[0].tabIndex, 0);
    for (let i = 1; i < caixa.children.length; i++) {
      assert.strictEqual(caixa.children[i].tabIndex, -1, "opció " + i + " hauria de ser -1");
    }
  });

  prova("triar-ne una posa aria-checked=true NOMÉS en aquella", () => {
    caixa.children[2].click();
    Array.prototype.forEach.call(caixa.children, (c, i) => {
      assert.strictEqual(c.getAttribute("aria-checked"), i === 2 ? "true" : "false",
        "opció " + i + " té l'aria-checked que no tocava");
    });
  });

  prova("el roving tabindex segueix la selecció", () => {
    assert.strictEqual(caixa.children[2].tabIndex, 0);
    assert.strictEqual(caixa.children[0].tabIndex, -1);
  });

  prova("canviar de tria abans de comprovar reflecteix la nova opció", () => {
    caixa.children[0].click();
    assert.strictEqual(caixa.children[0].getAttribute("aria-checked"), "true");
    assert.strictEqual(caixa.children[2].getAttribute("aria-checked"), "false");
  });

  tanca();
}

// ─────────────────────────────────────────────────────────────────────────
seccio("practica.html — navegació amb fletxes dins del grup");

{
  const { w, d, tanca } = await obrePractica();
  const caixa = d.getElementById("opcions");

  prova("ArrowDown mou el focus (i el tabindex) a la següent opció", () => {
    caixa.children[0].focus();
    caixa.dispatchEvent(new w.KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
    assert.strictEqual(d.activeElement, caixa.children[1], "el focus no ha avançat");
    assert.strictEqual(caixa.children[1].tabIndex, 0);
    assert.strictEqual(caixa.children[0].tabIndex, -1);
  });

  prova("ArrowUp des de la primera dona la volta a l'última (wrap)", () => {
    caixa.children[0].focus();
    caixa.dispatchEvent(new w.KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true }));
    assert.strictEqual(d.activeElement, caixa.children[3]);
  });

  prova("moure el focus amb fletxes NO selecciona per si sol", () => {
    caixa.children[0].focus();
    caixa.dispatchEvent(new w.KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true }));
    assert.strictEqual(caixa.children[1].getAttribute("aria-checked"), "false",
      "les fletxes no haurien de marcar aria-checked; només Space/Enter/clic ho fan");
  });

  prova("End porta el focus a l'última opció", () => {
    caixa.children[0].focus();
    caixa.dispatchEvent(new w.KeyboardEvent("keydown", { key: "End", bubbles: true }));
    assert.strictEqual(d.activeElement, caixa.children[3]);
  });

  tanca();
}

// ─────────────────────────────────────────────────────────────────────────
seccio("practica.html — les regions en viu ja hi són abans que arribi contingut");

{
  const { d, tanca } = await obrePractica();

  prova("#veredicte porta aria-live des de la càrrega, buit", () => {
    const v = d.getElementById("veredicte");
    assert.strictEqual(v.getAttribute("aria-live"), "polite");
    assert.strictEqual(v.hidden, false, "una regió en viu no pot dependre de `hidden` per aparèixer");
    assert.strictEqual(v.textContent.trim(), "", "hauria de començar buida");
  });

  prova("#resolucio porta aria-live des de la càrrega, buit", () => {
    const r = d.getElementById("resolucio");
    assert.strictEqual(r.getAttribute("aria-live"), "polite");
    assert.strictEqual(r.hidden, false);
    assert.strictEqual(r.textContent.trim(), "");
  });

  prova("#pistes porta aria-live des de la càrrega", () => {
    assert.strictEqual(d.getElementById("pistes").getAttribute("aria-live"), "polite");
  });

  prova("respondre correctament omple #veredicte, que ja hi era", () => {
    const v = d.getElementById("veredicte");
    d.getElementById("opcions").children[0].click();
    d.getElementById("comprova").click();
    assert.ok(v.textContent.trim().length > 0, "el veredicte s'hauria d'haver omplert");
  });

  tanca();
}

// ─────────────────────────────────────────────────────────────────────────
seccio("practica.html — aria-describedby lliga la resposta amb el feedback");

{
  /* En comptes de confiar que un clic a l'atzar toqui la bona (practica.js
     barreja `ordre` cada càrrega, i amb quatre opcions un test que depengui
     de l'atzar fallaria ~32% de les vegades), es demana directament a les
     mateixes dades de l'exercici (window.FULL + RE.clau, els helpers que
     practica.js ja fa servir) quin data-orig és la resposta correcta, i es
     clica aquell botó en concret. Determinista. */
  const { w, d, tanca } = await obrePractica();
  const item = w.FULL.items[0];
  const okOrig = w.RE.clau(item).ok;
  const caixaOk = d.getElementById("opcions");
  const btnOk = Array.prototype.filter.call(caixaOk.children,
    c => Number(c.dataset.orig) === okOrig)[0];

  prova("l'opció encertada queda descrita pel veredicte", () => {
    assert.ok(btnOk, "no s'ha trobat el botó amb la resposta correcta");
    btnOk.click();
    d.getElementById("comprova").click();
    assert.ok(btnOk.classList.contains("bona"), "el botó clicat hauria de quedar marcat com a bo");
    assert.strictEqual(btnOk.getAttribute("aria-describedby"), "veredicte");
  });

  tanca();
}

{
  /* Mateix argument a l'inrevés: es clica deliberadament la primera opció
     que NO sigui la correcta. */
  const { w, d, tanca } = await obrePractica();
  const item = w.FULL.items[0];
  const okOrig = w.RE.clau(item).ok;
  const caixaMal = d.getElementById("opcions");
  const btnMal = Array.prototype.filter.call(caixaMal.children,
    c => Number(c.dataset.orig) !== okOrig)[0];

  prova("l'opció triada errònia (primer intent) queda descrita pel veredicte", () => {
    assert.ok(btnMal, "no s'ha trobat cap botó incorrecte");
    btnMal.click();
    d.getElementById("comprova").click();
    assert.ok(btnMal.classList.contains("dolenta"));
    assert.strictEqual(btnMal.getAttribute("aria-describedby"), "veredicte");
  });

  tanca();
}

// ─────────────────────────────────────────────────────────────────────────
seccio("practica.html — cada element interactiu té nom accessible");

{
  const { d, tanca } = await obrePractica();
  d.getElementById("opcions").children[0].click();

  const interactius = Array.prototype.slice.call(d.querySelectorAll("button, a[href]"))
    /* Els botons ocults (hidden) o desactivats d'entrada (disabled) encara
       no formen part de res que un lector de pantalla llegeixi en aquest
       estat de la pàgina; el que compta és que, quan aparegui, ja tingui
       nom — i com que el nom ve del seu contingut fix (no es reescriu en
       mostrar-se), comprovar-los ara ja és vàlid. */
    .filter(el => el.id !== "comprova"); // es prova soles a banda (depèn de l'estat "disabled" natural del flux)

  prova("tot botó/enllaç de la pàgina té contingut textual o aria-label", () => {
    const muts = interactius.filter(el => nomAccessible(el).length === 0);
    assert.strictEqual(muts.length, 0,
      "elements sense nom accessible: " + muts.map(el => el.outerHTML.slice(0, 60)).join(" | "));
  });

  prova("el botó Comprova també en té", () => {
    assert.ok(nomAccessible(d.getElementById("comprova")).length > 0);
  });

  prova("cada cel·la del mapa de llacunes (si n'hi ha) porta aria-label propi", () => {
    /* practica.html no en pinta cap (el mapa és de full.html/nucli.js),
       però es deixa la comprovació genèrica per si mai se'n mostra algun
       en aquesta pàgina en el futur — si no n'hi ha cap, la prova passa
       trivialment. */
    const cels = d.querySelectorAll(".cel");
    Array.prototype.forEach.call(cels, c => {
      assert.ok(c.getAttribute("aria-label"), "una .cel sense aria-label");
    });
  });

  tanca();
}

// ─────────────────────────────────────────────────────────────────────────
seccio("diagnostic.html — els dos radiogroups (autoavaluació i resposta)");

{
  const { d, tanca } = await obreDiagnostic();
  const estats = d.getElementById("estats-test");

  prova("#estats-test és un radiogroup de 4 opcions role=radio", () => {
    assert.strictEqual(estats.getAttribute("role"), "radiogroup");
    assert.strictEqual(estats.children.length, 4);
    Array.prototype.forEach.call(estats.children, c => {
      assert.strictEqual(c.getAttribute("role"), "radio");
      assert.strictEqual(c.getAttribute("aria-checked"), "false");
    });
  });

  prova("#estats-test té etiqueta (aria-labelledby cap a 'Què en dius?')", () => {
    const lb = estats.getAttribute("aria-labelledby");
    assert.ok(lb, "falta aria-labelledby");
    assert.ok(d.getElementById(lb), "apunta a un id inexistent");
  });

  /* Es tria un estat que NO sigui "mai", perquè és l'únic que obre el
     segon radiogroup (#opcions-test) — "mai" salta directament a la
     transició, cosa que ja es comprova per separat més avall. */
  const noMai = Array.prototype.filter.call(estats.children,
    c => c.getAttribute("data-estat") !== "mai")[0];

  prova("triar un estat (que no sigui 'mai') marca aria-checked=true", () => {
    noMai.click();
    assert.strictEqual(noMai.getAttribute("aria-checked"), "true");
  });

  prova("...i fa aparèixer el segon radiogroup amb 4 opcions role=radio", () => {
    const resp = d.getElementById("opcions-test");
    assert.ok(resp, "no ha aparegut #opcions-test");
    assert.strictEqual(resp.getAttribute("role"), "radiogroup");
    assert.strictEqual(resp.children.length, 4);
    Array.prototype.forEach.call(resp.children, c => {
      assert.strictEqual(c.getAttribute("role"), "radio");
      assert.strictEqual(c.getAttribute("aria-checked"), "false");
    });
  });

  prova("#opcions-test també té etiqueta pròpia", () => {
    const resp = d.getElementById("opcions-test");
    const lb = resp.getAttribute("aria-labelledby");
    assert.ok(lb, "falta aria-labelledby");
    const ref = d.getElementById(lb);
    assert.ok(ref && ref.textContent.trim().length > 0);
  });

  prova("triar una resposta marca aria-checked=true NOMÉS en aquella", () => {
    const resp = d.getElementById("opcions-test");
    resp.children[1].click();
    Array.prototype.forEach.call(resp.children, (c, i) => {
      assert.strictEqual(c.getAttribute("aria-checked"), i === 1 ? "true" : "false");
    });
  });

  tanca();
}

// ─────────────────────────────────────────────────────────────────────────
seccio("diagnostic.html — navegació amb fletxes també al grup d'autoavaluació");

{
  const { w, d, tanca } = await obreDiagnostic();
  const estats = d.getElementById("estats-test");

  prova("ArrowRight mou el focus dins de #estats-test", () => {
    estats.children[0].focus();
    estats.dispatchEvent(new w.KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));
    assert.strictEqual(d.activeElement, estats.children[1]);
  });

  tanca();
}

// ─────────────────────────────────────────────────────────────────────────
seccio("diagnostic.html — cada element interactiu té nom accessible");

{
  const { d, tanca } = await obreDiagnostic();
  const interactius = Array.prototype.slice.call(d.querySelectorAll("button, a[href]"));

  prova("tot botó/enllaç de la pantalla inicial té nom accessible", () => {
    const muts = interactius.filter(el => nomAccessible(el).length === 0);
    assert.strictEqual(muts.length, 0,
      "elements sense nom accessible: " + muts.map(el => el.outerHTML.slice(0, 60)).join(" | "));
  });

  tanca();
}


// ─────────────────────────────────────────────────────────────────────────
seccio("El paràmetre ?full no és un forat d'injecció");

{
  /* `document.write('<script src="data/full' + FULL_N + ...')` amb el
     paràmetre en cru permetia tancar l'atribut i l'etiqueta i injectar
     JavaScript arbitrari. En un lloc estàtic sense comptes la gravetat és
     baixa, però n'hi havia prou amb un enllaç per escriure el localStorage
     d'un alumne, i el localStorage és el que genera el codi que es qualifica. */
  const atac = "?full=1%22%3E%3C%2Fscript%3E%3Cscript%3Ewindow.PWNED%3D1%3C%2Fscript%3E%3Cscript%20src%3D%22x";
  const { w, d, tanca } = await obrePractica(atac);

  prova("no s'executa res del que porta el paràmetre", () => {
    assert.ok(!w.PWNED, "s'ha executat codi vingut de la URL");
  });
  prova("tampoc es carrega cap banc", () => {
    assert.ok(!w.FULL, "s'ha carregat un full amb un paràmetre invàlid");
  });
  prova("es mostra el missatge de full inexistent, no una pàgina en blanc", () => {
    const h1 = d.querySelector("h1");
    assert.ok(h1 && /no està preparat/.test(h1.textContent), "cap missatge a l'usuari");
  });
  tanca();
}

{
  const { w, tanca } = await obrePractica("?full=..%2F..%2Fetc%2Fpasswd");
  prova("un recorregut de directoris tampoc passa", () => {
    assert.ok(!w.FULL);
  });
  tanca();
}

{
  const { w, tanca } = await obrePractica("?full=9&q=170a");
  prova("un full vàlid segueix carregant amb normalitat", () => {
    assert.ok(w.FULL && w.FULL.items.length > 0, "el full 9 no s'ha carregat");
  });
  tanca();
}



// ─────────────────────────────────────────────────────────────────────────
seccio("practica.html — el grup d'opcions segueix accessible amb teclat després de fallar");

{
  /* En fallar el primer intent, l'opció triada es desactiva. Si conserva el
     tabIndex 0 (i totes les altres el -1), el grup sencer queda fora de
     l'abast del tabulador, perquè un botó `disabled` no és focusable: amb
     teclat era impossible tornar-hi per fer el segon intent. */
  const { w, d, tanca } = await obrePractica("?full=1&q=1a");
  d.getElementById("mostra").click();
  const caixa = d.getElementById("opcions");
  const opcions = [...caixa.children];
  const k = w.RE.clau(w.FULL.items[0]);
  const dolenta = opcions.find(c => +c.dataset.orig !== k.ok);
  dolenta.click();
  d.getElementById("comprova").click();

  prova("hi ha exactament una opció tabulable, i no està desactivada", () => {
    const tabulables = opcions.filter(c => c.tabIndex === 0);
    assert.equal(tabulables.length, 1, "n'hi ha " + tabulables.length);
    assert.ok(!tabulables[0].disabled, "l'única opció tabulable està desactivada");
  });
  prova("cap opció desactivada segueix dient aria-checked=true", () => {
    const mentida = opcions.filter(c => c.disabled && c.getAttribute("aria-checked") === "true");
    assert.equal(mentida.length, 0,
      "una opció desactivada encara es declara seleccionada mentre «Comprova» està bloquejat");
  });
  tanca();
}


process.exit(resum() ? 0 : 1);

})().catch(e => {
  console.error("\x1b[31mError inesperat executant les proves d'accessibilitat:\x1b[0m");
  console.error(e);
  process.exit(1);
});
