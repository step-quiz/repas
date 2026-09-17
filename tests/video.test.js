/* Prova del pont repàs → vídeo.

   Un enllaç de vídeo mal escrit no dona cap error visible: l'alumne clica,
   YouTube li diu que el vídeo no existeix, i ell es pensa que el lloc està
   trencat. Com que no es pot comprovar per xarxa des d'aquí (i no s'hi ha de
   poder: les proves han de córrer sense connexió), el que es vigila és tot
   el que sí que es pot saber sense sortir del repositori:

     · que cada identificador tingui la forma d'un identificador de YouTube;
     · que cada entrada apunti a un exercici o bloc que existeix DE DEBÒ al
       banc, perquè una entrada per a un exercici que no hi és no fa mal però
       tampoc no s'arriba a veure mai, i llavors ningú no descobreix que
       estava mal escrita;
     · que un mateix exercici de l'entrega de paper vagi sempre al mateix
       vídeo, que és l'errada que es cola sola quan es copia una entrada i
       se'n canvia el número però no l'identificador. */
"use strict";
const fs = require("fs");
const path = require("path");
const { assert, seccio, prova, resum } = require("./arnes.js");

const ARREL = path.join(__dirname, "..");
const MAPA = path.join(ARREL, "data", "videos.json");
const mapa = JSON.parse(fs.readFileSync(MAPA, "utf8"));

const SECCIONS = ["items", "exercicis", "blocs"];

/* Una entrada pot ser un objecte o una llista d'objectes: hi ha exercicis
   que es miren amb més d'un vídeo. */
function llista(d) { return Array.isArray(d) ? d : [d]; }

function totes() {
  const out = [];
  SECCIONS.forEach(sec =>
    Object.keys(mapa[sec]).forEach(k =>
      llista(mapa[sec][k]).forEach((v, i) =>
        out.push({ sec, clau: k + (Array.isArray(mapa[sec][k]) ? "[" + i + "]" : ""), v }))));
  return out;
}

seccio("El mapa de vídeos");

prova("el fitxer és JSON vàlid i té les tres seccions", () => {
  SECCIONS.forEach(k => assert.ok(mapa[k], "falta la secció " + k));
  assert.ok(/^https?:\/\/.+\/$/.test(mapa.base),
    "cal una base absoluta i acabada en barra: " + mapa.base);
  assert.ok(mapa.font, "cal dir de quin material surten els vídeos");
});

prova("cada entrada té identificador, número d'exercici i títol", () => {
  totes().forEach(({ sec, clau, v }) => {
    const on = sec + "/" + clau;
    assert.ok(/^[A-Za-z0-9_-]{11}$/.test(v.vid),
      on + ": «" + v.vid + "» no té la forma d'un identificador de YouTube");
    assert.ok(Number.isInteger(v.ex) && v.ex >= 1,
      on + ": el número d'exercici de l'entrega ha de ser un enter");
    assert.ok(v.titol && v.titol.length > 3, on + ": sense títol");
  });
});

prova("un mateix exercici de l'entrega va sempre al mateix vídeo", () => {
  const perEx = {};
  totes().forEach(({ sec, clau, v }) => {
    if (perEx[v.ex] && perEx[v.ex].vid !== v.vid) {
      assert.fail("l'exercici " + v.ex + " de l'entrega apunta a dos vídeos: "
        + perEx[v.ex].vid + " (" + perEx[v.ex].on + ") i " + v.vid
        + " (" + sec + "/" + clau + ")");
    }
    perEx[v.ex] = { vid: v.vid, on: sec + "/" + clau };
  });
});

prova("cap entrada no repeteix el mateix vídeo dues vegades", () => {
  SECCIONS.forEach(sec => Object.keys(mapa[sec]).forEach(k => {
    const ids = llista(mapa[sec][k]).map(v => v.vid);
    assert.strictEqual(new Set(ids).size, ids.length,
      sec + "/" + k + ": el mateix vídeo hi surt dues vegades");
  }));
});

prova("els exercicis i blocs mapats existeixen de debò al banc", () => {
  const taules = path.join(ARREL, "tools", "_taules.json");
  const banc = path.join(ARREL, "tools", "_banc.json");
  if (!fs.existsSync(taules) || !fs.existsSync(banc)) return;   // sense compilar
  const T = JSON.parse(fs.readFileSync(taules, "utf8"));
  const B = JSON.parse(fs.readFileSync(banc, "utf8"));
  /* `_banc.json` està indexat per id i no diu de quin full és cada ítem;
     `_taules.json` agrupa per full però només en guarda els ids. Es creuen
     els dos per obtenir les parelles full+bloc reals, que són les que fan
     falta per validar una clau com «5:sistemes». */
  const perFull = new Set(), blocs = new Set();
  Object.values(B).forEach(i => blocs.add(i.bloc));
  Object.keys(T.fulls).forEach(n =>
    (T.fulls[n].items || []).forEach(id => {
      const it = B[String(id)];
      if (it) perFull.add(n + ":" + it.bloc);
    }));
  const exs = new Set(Object.values(B).map(i => String(i.ex)));

  Object.keys(mapa.blocs).forEach(b =>
    assert.ok(b.includes(":") ? perFull.has(b) : blocs.has(b),
      "el bloc «" + b + "» no existeix al banc"));
  Object.keys(mapa.exercicis).forEach(e =>
    assert.ok(exs.has(e), "l'exercici " + e + " no existeix al banc"));
  Object.keys(mapa.items).forEach(i =>
    assert.ok(B[i], "l'ítem " + i + " no existeix al banc"));
});

seccio("La separació entre els dos mapes");

prova("els vídeos no s'han colat dins del mapa de teoria", () => {
  const teoria = JSON.parse(
    fs.readFileSync(path.join(ARREL, "data", "teoria.json"), "utf8"));
  const dolents = [];
  ["items", "exercicis", "blocs"].forEach(sec =>
    Object.keys(teoria[sec]).forEach(k => {
      if (teoria[sec][k].vid) dolents.push(sec + "/" + k);
    }));
  assert.deepStrictEqual(dolents, [], "teoria.json porta vídeos a "
    + dolents.join(", ") + ": la cascada de la teoria se'ls emportaria i"
    + " taparia l'enllaç al llibre");
});

prova("els dos mapes es poden mapar amb finor diferent", () => {
  /* Aquesta és la raó de ser dels dos fitxers: dos exercicis del mateix
     bloc comparteixen teoria i NO comparteixen vídeo. Si això deixés de
     passar, separar-los ja no compraria res. */
  assert.ok(mapa.exercicis["80"] && mapa.exercicis["81"],
    "el 80 i el 81 han de tenir cada un el seu vídeo");
  assert.notStrictEqual(mapa.exercicis["80"].vid, mapa.exercicis["81"].vid,
    "el 80 (fórmula general) i el 81 (discriminant) van a vídeos diferents");
});

prova("un exercici concret pot desmarcar-se del vídeo del seu bloc", () => {
  const delBloc = llista(mapa.blocs["5:sistemes"]).map(v => v.vid);
  assert.strictEqual(delBloc.length, 3,
    "el bloc dels sistemes porta els tres mètodes: substitució, igualació i reducció");
  ["87", "88"].forEach(e => {
    assert.ok(mapa.exercicis[e], "el " + e + " ha de tenir entrada pròpia");
    assert.ok(!delBloc.includes(mapa.exercicis[e].vid),
      "el " + e + " porta parèntesis i denominadors: no pot anar a parar al"
      + " vídeo d'un sol mètode");
  });
  assert.ok(!mapa.exercicis["85"],
    "el 85 ha de continuar heretant els tres mètodes del bloc");
});

seccio("El que es veu i el que no");

prova("`avis` es mostra a l'alumne i `nota` no surt mai", () => {
  const src = fs.readFileSync(path.join(ARREL, "js", "teoria.js"), "utf8");
  assert.ok(/\.avis/.test(src), "js/teoria.js no fa res amb `avis`");
  assert.ok(!/\.nota/.test(src),
    "js/teoria.js toca `nota`, que és una anotació interna del mapa i no"
    + " està escrita per ser llegida per un alumne");
});

prova("tot `avis` és una frase acabada, perquè es llegeix tal qual", () => {
  totes().forEach(({ sec, clau, v }) => {
    if (!v.avis) return;
    assert.ok(/[.!?]$/.test(v.avis),
      sec + "/" + clau + ": l'avís es mostra sencer i li falta el punt final");
  });
});

/* ── Les dues icones, pintades de debò ─────────────────────────────────────

   Tot l'anterior valida dades. Això valida el que l'alumne veu, que és una
   altra cosa: que surtin DUES pastilles i no una, que la T quedi sempre a
   l'esquerra de la V, i que un exercici sense recursos no deixi cap botó
   mort a la capçalera.

   Necessita un DOM. Sense `jsdom` se salta dient-ho, com la resta de la
   suite: un verd que amaga comprovacions no executades és pitjor que un
   avís. */
function acaba() { process.exit(resum() ? 0 : 1); }

let jsdom = null;
try { jsdom = require("jsdom"); } catch (e) { /* és opcional */ }

if (!jsdom) {
  console.log("\n\u001b[33m⊘ Les comprovacions de les icones se salten: falta"
    + " jsdom.  npm install --no-save jsdom\u001b[0m");
  acaba();
} else {
  const dom = new jsdom.JSDOM('<span class="teoria" id="teoria"></span>',
    { url: "https://exemple.test/" });
  const w = dom.window;

  /* XHR de mentida que serveix els dos mapes des del disc. El de teoria
     arriba TARD a posta: l'ordre de les icones no pot dependre de quin
     fitxer respon abans, i aquesta és la manera de comprovar-ho. */
  function XHR() {}
  XHR.prototype.open = function (m, u) { this.u = u; };
  XHR.prototype.send = function () {
    const dest = path.join(ARREL, this.u);
    const tard = /teoria/.test(this.u) ? 40 : 0;
    setTimeout(() => {
      this.readyState = 4;
      this.status = 200;
      this.responseText = fs.readFileSync(dest, "utf8");
      if (this.onreadystatechange) this.onreadystatechange();
    }, tard);
  };

  /* `fetch` s'apaga a totes dues bandes: el de Node existeix i, amb una ruta
     relativa, falla; el mòdul ha de caure a l'XHR, que és el camí que fan
     els navegadors vells de debò. */
  w.XMLHttpRequest = XHR;
  delete w.fetch;
  global.fetch = undefined;
  global.window = w;
  global.document = w.document;
  global.XMLHttpRequest = XHR;
  require("../js/teoria.js");

  const RE = w.RE_TEORIA;
  const cont = w.document.getElementById("teoria");

  function pinta(item) {
    return new Promise(res => {
      RE.mostra(cont, item);
      setTimeout(() => res(cont), 160);
    });
  }
  const botons = () => Array.from(cont.querySelectorAll("button"))
    .map(b => b.textContent);
  const enllacos = () => Array.from(cont.querySelectorAll("a"));

  (async () => {
    seccio("Les dues icones, pintades de debò");

    await pinta({ id: "80a", ex: 80, bloc: "formula_general", full: 5 });
    const b80 = botons(), a80 = enllacos();
    prova("un exercici amb teoria i vídeo té dues pastilles, T i després V", () => {
      assert.deepStrictEqual(b80, ["T", "V"]);
    });
    prova("l'enllaç del vídeo va a YouTube amb l'identificador del mapa", () => {
      const v = a80.find(a => /youtu\.be/.test(a.href));
      assert.ok(v, "no hi ha cap enllaç a YouTube");
      assert.strictEqual(v.href, mapa.base + mapa.exercicis["80"].vid);
      assert.strictEqual(v.target, "_blank");
      assert.strictEqual(v.rel, "noopener");
    });
    prova("la caixa arrenca tancada i el botó ho diu", () => {
      const v = cont.querySelectorAll("button")[1];
      assert.strictEqual(v.getAttribute("aria-expanded"), "false");
      assert.ok(v.nextSibling.hidden, "la caixa del vídeo hauria d'estar amagada");
      v.onclick();
      assert.strictEqual(v.getAttribute("aria-expanded"), "true");
      assert.ok(!v.nextSibling.hidden);
    });

    await pinta({ id: "85a", ex: 85, bloc: "sistemes", full: 5 });
    const a85 = enllacos().filter(a => /youtu\.be/.test(a.href));
    prova("un bloc amb tres vídeos els mostra tots tres", () => {
      assert.strictEqual(a85.length, 3);
    });

    await pinta({ id: "88e", ex: 88, bloc: "sistemes", full: 5 });
    const a88 = enllacos().filter(a => /youtu\.be/.test(a.href));
    prova("l'exercici que es desmarca del bloc només mostra el seu vídeo", () => {
      assert.strictEqual(a88.length, 1);
      assert.strictEqual(a88[0].href, mapa.base + mapa.exercicis["88"].vid);
    });

    await pinta({ id: "125", ex: 125, bloc: "triangles", full: 7 });
    prova("l'avís del mapa es llegeix sota l'enllaç", () => {
      const avis = cont.querySelector(".recurs-avis");
      assert.ok(avis, "l'avís del 125 no es mostra");
      assert.strictEqual(avis.textContent, mapa.exercicis["125"].avis);
    });

    /* Full 3: successions. No té teoria al llibre ni vídeo a l'entrega, i
       és el cas que ha de quedar net del tot. */
    await pinta({ id: "50a", ex: 50, bloc: "aritmetiques", full: 3 });
    prova("un exercici sense recursos no deixa cap botó a la capçalera", () => {
      assert.deepStrictEqual(botons(), []);
      assert.strictEqual(cont.textContent.trim(), "");
    });

    acaba();
  })();
}
