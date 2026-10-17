/* tests/test_amitges.js — els exercicis «a mitges» es retroben.

       node tests/test_amitges.js

   El cas: un alumne obre un exercici, el resol a la llibreta i passa al
   següent sense mostrar les opcions o sense comprovar la resposta. L'endemà
   l'ha de poder trobar. Tres parts:

     1. La regla (nucli.js), sense DOM: què és «a mitges» i què no, en quin
        ordre surten, el «treu de la llista» i el «desfés», i que res d'això
        canvia el codi de verificació.
     2. El cercador per codi (amitges.js), sense DOM.
     3. Les pàgines, amb jsdom (se salta si no hi és): l'avís en sortir de
        practica.html, la llista de la portada i el «Continua» del full.

   A la part 3 les pàgines es carreguen amb un origen http:// de mentida i
   un carregador que llegeix els fitxers del disc. Amb file:// el jsdom no
   dona localStorage (origen opac) i no es podria provar res de tot això. */
"use strict";
const fs = require("fs"), path = require("path");
const { assert, seccio, prova, resum } = require("./arnes.js");

const ARREL = path.join(__dirname, "..");
global.window = global;
const magatzem = {};
global.localStorage = {
  getItem: k => (k in magatzem ? magatzem[k] : null),
  setItem: (k, v) => { magatzem[k] = String(v); },
  removeItem: k => { delete magatzem[k]; }
};
global.atob = s => Buffer.from(s, "base64").toString("binary");
global.addEventListener = () => {};
global.document = { body: null, hidden: false };
eval(fs.readFileSync(path.join(ARREL, "js/codi-taules.js"), "utf8"));
eval(fs.readFileSync(path.join(ARREL, "js/nucli.js"), "utf8"));
eval(fs.readFileSync(path.join(ARREL, "js/codi.js"), "utf8"));
eval(fs.readFileSync(path.join(ARREL, "js/amitges.js"), "utf8"));
const T = global.RE_TAULES, RE = global.RE, CODI = global.RE_CODI, M = global.RE_MITGES;

const FULL = 7, IDS = T.fulls[FULL].items;
function net() { Object.keys(magatzem).forEach(k => delete magatzem[k]); }
function posa(full, id, dades) {
  const p = RE.llegeix(full);
  p.items[id] = Object.assign({}, p.items[id], dades);
  RE.desa(full, p);
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Només obrir-lo no és deixar-lo a mitges");

prova("obrir i marxar: 'vist', però no surt a la llista", () => {
  net();
  RE.visita(FULL, IDS[0]);
  assert.strictEqual(RE.estat(FULL, IDS[0]), "vist");
  assert.strictEqual(RE.aMitges(FULL).length, 0);
});

prova("i sí que surt entre els 'només oberts' (per als d'abans d'aquest canvi)", () => {
  assert.deepStrictEqual(RE.nomesOberts(FULL).map(e => e.id), [IDS[0]]);
});

prova("39 segons no hi arriben; 40 sí", () => {
  net();
  posa(FULL, IDS[0], { estat: "vist", tact: RE.LLINDAR - 1, tvis: 1 });
  assert.strictEqual(RE.aMitges(FULL).length, 0);
  posa(FULL, IDS[0], { tact: RE.LLINDAR });
  assert.strictEqual(RE.aMitges(FULL).length, 1);
});

seccio("Senyals de feina: temps, pistes, opcions, primer error");

prova("una pista oberta, encara que sigui en 5 segons", () => {
  net();
  RE.visita(FULL, IDS[1]);
  RE.pista(FULL, IDS[1], 1);
  assert.deepStrictEqual(RE.aMitges(FULL).map(e => e.id), [IDS[1]]);
});

prova("haver premut «mostra'm les opcions»", () => {
  net();
  RE.visita(FULL, IDS[2]);
  RE.marcaOpcions(FULL, IDS[2]);
  assert.deepStrictEqual(RE.aMitges(FULL).map(e => e.id), [IDS[2]]);
});

prova("fallat al primer intent: hi surt, perquè encara té el segon", () => {
  net();
  RE.visita(FULL, IDS[3]);
  RE.intent(FULL, IDS[3], false);
  assert.strictEqual(RE.estat(FULL, IDS[3]), "fallat");
  assert.deepStrictEqual(RE.aMitges(FULL).map(e => e.id), [IDS[3]]);
});

prova("fallat dues vegades: ja no (està tancat)", () => {
  RE.intent(FULL, IDS[3], false);
  assert.strictEqual(RE.aMitges(FULL).length, 0);
});

prova("resolt: mai, tingui el temps que tingui", () => {
  net();
  posa(FULL, IDS[4], { estat: "vist", tact: 600, opc: 1 });
  RE.intent(FULL, IDS[4], true);
  assert.strictEqual(RE.aMitges(FULL).length, 0);
});

prova("recuperat d'un codi (imp, tancat): mai", () => {
  net();
  posa(FULL, IDS[5], { estat: "net", imp: 1, tancat: 1 });
  assert.strictEqual(RE.aMitges(FULL).length, 0);
});

prova("un id que ja no és al banc no s'ofereix", () => {
  net();
  posa(FULL, "999z", { estat: "vist", tact: 300, tvis: 5 });
  assert.strictEqual(RE.aMitges(FULL).length, 0);
});

seccio("L'ordre: el més recent primer, entre tots els fulls");

prova("tres fulls, tres moments", () => {
  net();
  posa(2, T.fulls[2].items[0], { estat: "vist", tact: 100, tvis: 3000 });
  posa(7, IDS[0], { estat: "vist", opc: 1, tvis: 9000 });
  posa(12, T.fulls[12].items[5], { estat: "vist", npis: 1, tvis: 6000 });
  assert.deepStrictEqual(RE.aMitges().map(e => e.full), [7, 12, 2]);
});

prova("sense `tvis` (registre antic) es fa servir `ts`", () => {
  net();
  posa(7, IDS[0], { estat: "vist", npis: 1, ts: 500 });
  posa(7, IDS[1], { estat: "vist", npis: 1, ts: 800 });
  assert.deepStrictEqual(RE.aMitges(7).map(e => e.id), [IDS[1], IDS[0]]);
});

seccio("Treure'l de la llista, i el «Desfés»");

prova("treure'l el fa desaparèixer de la llista", () => {
  net();
  posa(FULL, IDS[0], { estat: "vist", tact: 120, tvis: 1 });
  RE.descartaAMitges(FULL, IDS[0]);
  assert.strictEqual(RE.aMitges(FULL).length, 0);
});

prova("«Desfés» el torna a posar", () => {
  RE.recuperaAMitges(FULL, IDS[0]);
  assert.strictEqual(RE.aMitges(FULL).length, 1);
});

prova("tret, obrir-lo un moment no el torna a posar; treballar-hi 40 s més, sí", () => {
  RE.descartaAMitges(FULL, IDS[0]);
  posa(FULL, IDS[0], { tact: 120 + RE.LLINDAR - 5 });
  assert.strictEqual(RE.aMitges(FULL).length, 0);
  posa(FULL, IDS[0], { tact: 120 + RE.LLINDAR });
  assert.strictEqual(RE.aMitges(FULL).length, 1);
});

seccio("El rellotge compta el temps de l'exercici, i no toca `ts`");

prova("tres tocs de 5 s amb la pestanya visible: 15 s", () => {
  net();
  posa(FULL, IDS[0], { estat: "vist", ts: 42 });
  const vell = global.setInterval;
  let fn = null;
  global.setInterval = f => { fn = f; return 1; };
  RE.rellotge(5, FULL, IDS[0]);
  global.setInterval = vell;
  fn(); fn(); fn();
  const it = RE.item(FULL, IDS[0]);
  assert.strictEqual(it.tact, 15);
  assert.ok(it.tvis > 0);
  assert.strictEqual(it.ts, 42, "el rellotge no ha de moure `ts`");
  assert.strictEqual(RE.meta().seg, 15, "el temps global continua sumant igual");
});

prova("amb la pestanya amagada no compta", () => {
  net();
  const vell = global.setInterval;
  let fn = null;
  global.setInterval = f => { fn = f; return 1; };
  RE.rellotge(5, FULL, IDS[0]);
  global.setInterval = vell;
  global.document.hidden = true; fn(); fn();
  global.document.hidden = false;
  assert.strictEqual(RE.item(FULL, IDS[0]).tact, undefined);
});

seccio("El codi de verificació no canvia gens");

prova("els camps nous no entren a recull() ni a genera()", () => {
  net();
  posa(FULL, IDS[0], { estat: "vist", ts: 1 });
  posa(FULL, IDS[1], { estat: "net", nint: 1, npis: 0, tancat: 1, tf: 1700000000000, ts: 1 });
  posa(FULL, IDS[2], { estat: "fallat", nint: 1, tf: 1700000000000, ts: 1 });
  const abans = JSON.stringify(CODI.recull());
  posa(FULL, IDS[0], { tact: 300, opc: 1, tvis: 99 });
  posa(FULL, IDS[2], { tact: 45, tvis: 98, amd: 97, amt: 45 });
  const despres = JSON.stringify(CODI.recull());
  assert.strictEqual(despres, abans);
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Cercador per codi");

prova("«121b» porta al Full 7", () => {
  assert.deepStrictEqual(M.cerca("121b"), { tipus: "un", full: 7, id: "121b" });
});
prova("majúscules, espais i «Ex.» davant no importen", () => {
  assert.deepStrictEqual(M.cerca("  Ex. 121B "), { tipus: "un", full: 7, id: "121b" });
  assert.deepStrictEqual(M.cerca("exercici 121 b"), { tipus: "un", full: 7, id: "121b" });
});
prova("«121» sense lletra: ofereix els apartats", () => {
  const r = M.cerca("121");
  assert.strictEqual(r.tipus, "molts");
  assert.strictEqual(r.full, 7);
  assert.ok(r.ids.length >= 2 && r.ids.every(id => /^121[a-z]$/.test(id)));
});
prova("«145», que només conserva el 145c, hi va directe", () => {
  assert.deepStrictEqual(M.cerca("145"), { tipus: "un", full: 7, id: "145c" });
});
prova("«12» no s'empassa el 121", () => {
  const r = M.cerca("12");
  assert.ok(r.tipus === "res" || (r.ids || [r.id]).every(id => /^12[a-z]?$/.test(id)));
});
prova("un exercici sense apartats va directe («119»)", () => {
  assert.deepStrictEqual(M.cerca("119"), { tipus: "un", full: 7, id: "119" });
});
prova("tots els 951 codis del banc es troben", () => {
  Object.keys(T.fulls).forEach(n => T.fulls[n].items.forEach(id => {
    const r = M.cerca(id);
    assert.ok(r.tipus === "un" && r.full === +n && r.id === id, id);
  }));
});
prova("brossa: «res»; buit: «buit»", () => {
  assert.strictEqual(M.cerca("hola").tipus, "res");
  assert.strictEqual(M.cerca("9999").tipus, "res");
  assert.strictEqual(M.cerca("   ").tipus, "buit");
});

seccio("Dates en paraules");

prova("avui, ahir, dia de la setmana, data", () => {
  const ara = new Date(2026, 9, 17, 10, 30).getTime();     /* dissabte 17/10 */
  assert.strictEqual(M.quan(new Date(2026, 9, 17, 8, 5).getTime(), ara), "avui a les 8:05");
  assert.strictEqual(M.quan(new Date(2026, 9, 16, 23, 50).getTime(), ara), "ahir a les 23:50");
  assert.strictEqual(M.quan(new Date(2026, 9, 15, 1, 0).getTime(), ara), "dijous a la 1:00");
  assert.strictEqual(M.quan(new Date(2026, 9, 3, 18, 0).getTime(), ara), "3/10");
});

// ─────────────────────────────────────────────────────────────────────────
let jsdom;
try {
  jsdom = require("jsdom");
} catch (e) {
  console.log("\n\x1b[33m⊘ Proves de pàgina saltades: falta jsdom.\x1b[0m");
  console.log("  Per passar-les:  npm install --no-save jsdom\n");
  process.exit(resum() ? 0 : 1);
}
const { JSDOM, VirtualConsole } = jsdom;

/* Serveix els fitxers del disc sota http://repas.local/. jsdom 27-28 ho fa
   amb un ResourceLoader; el 29 l'ha substituït per requestInterceptor. */
const ORIGEN = "http://repas.local/";
function fitxer(url) {
  if (!url.startsWith(ORIGEN)) return null;                 /* Google Fonts i similars */
  const f = path.join(ARREL, decodeURIComponent(url.slice(ORIGEN.length).split("?")[0]));
  return fs.existsSync(f) ? fs.readFileSync(f) : null;
}
function recursos() {
  if (jsdom.ResourceLoader) {
    class Disc extends jsdom.ResourceLoader {
      fetch(url) { return Promise.resolve(fitxer(url) || Buffer.from("")); }
    }
    return new Disc();
  }
  return {
    interceptors: [jsdom.requestInterceptor(req => {
      const b = fitxer(req.url);
      const tipus = /\.js(\?|$)/.test(req.url) ? "application/javascript"
                  : /\.css(\?|$)/.test(req.url) ? "text/css" : "text/plain";
      return new Response(b || "", { status: b ? 200 : 404, headers: { "Content-Type": tipus } });
    })]
  };
}

function espera(ms) { return new Promise(r => setTimeout(r, ms)); }

/* Obre una pàgina amb el localStorage que se li passi. Les navegacions
   (`location.href = ...`) jsdom no les fa: les apuntem a `anades`. */
async function obre(pagina, query, estat) {
  const anades = [];
  const vc = new VirtualConsole();
  vc.on("jsdomError", e => {
    if (/navigation/i.test(e.message)) anades.push(e.message);
    else if (!/Could not load/.test(e.message)) console.log("  [jsdom] " + (e.cause && e.cause.stack || e.message));
  });
  const html = fs.readFileSync(path.join(ARREL, pagina), "utf8");
  const dom = new JSDOM(html, {
    url: "http://repas.local/" + pagina + (query || ""),
    runScripts: "dangerously", resources: recursos(), virtualConsole: vc, pretendToBeVisual: true,
    beforeParse(w) {
      Object.keys(estat || {}).forEach(k => w.localStorage.setItem(k, JSON.stringify(estat[k])));
      w.HTMLElement.prototype.scrollIntoView = function () {};
    }
  });
  await espera(500);
  return { w: dom.window, d: dom.window.document, anades, tanca: () => dom.window.close() };
}

(async () => {
  seccio("practica.html: fullejar no demana res");
  {
    const { d, anades, tanca } = await obre("practica.html", "?full=7&q=120a");
    d.getElementById("seguent").click();
    prova("«Següent» sense haver fet res: marxa i no avisa", () => {
      assert.strictEqual(d.getElementById("avis-sortida").hidden, true);
      assert.strictEqual(anades.length, 1);
    });
    tanca();
  }

  seccio("practica.html: opcions mostrades i cap resposta");
  {
    const { w, d, anades, tanca } = await obre("practica.html", "?full=7&q=120a");
    d.getElementById("mostra").click();
    prova("«mostra'm les opcions» queda anotat", () => {
      assert.strictEqual(w.RE.item(7, "120a").opc, 1);
    });
    d.getElementById("seguent").click();
    const avis = d.getElementById("avis-sortida");
    prova("el primer «Següent» no marxa: avisa", () => {
      assert.strictEqual(anades.length, 0);
      assert.strictEqual(avis.hidden, false);
      assert.ok(/Encara no has respost/.test(avis.textContent));
    });
    prova("l'avís diu el codi per apuntar-lo", () => {
      assert.ok(avis.querySelector(".codi").textContent === "120a");
    });
    prova("el focus va a «Respon ara»", () => {
      assert.strictEqual(d.activeElement && d.activeElement.id, "avis-respon");
    });
    d.getElementById("avis-respon").click();
    prova("«Respon ara» tanca l'avís i porta a les opcions", () => {
      assert.strictEqual(avis.hidden, true);
      assert.strictEqual(d.getElementById("zona-resposta").hidden, false);
      assert.ok(d.activeElement.classList.contains("opcio"));
    });
    d.getElementById("seguent").click();
    prova("el segon «Següent» ja marxa: només s'avisa un cop", () => {
      assert.strictEqual(anades.length, 1);
    });
    tanca();
  }

  seccio("practica.html: opció triada i no comprovada");
  {
    const { d, anades, tanca } = await obre("practica.html", "?full=7&q=120a");
    d.getElementById("mostra").click();
    d.querySelectorAll("#opcions .opcio")[2].click();
    d.getElementById("tornar").dispatchEvent(new d.defaultView.MouseEvent("click", { bubbles: true, cancelable: true }));
    const avis = d.getElementById("avis-sortida");
    prova("l'enllaç de dalt també avisa, i diu quina lletra hi ha triada", () => {
      assert.strictEqual(avis.hidden, false);
      assert.ok(/Has triat la C/.test(avis.textContent), avis.textContent);
    });
    d.getElementById("avis-respon").click();
    prova("«Respon ara» posa el focus a «Comprova la resposta»", () => {
      assert.strictEqual(d.activeElement.id, "comprova");
    });
    d.getElementById("avis-marxa");
    tanca();
    void anades;
  }

  seccio("practica.html: respondre treu l'avís");
  {
    const { w, d, anades, tanca } = await obre("practica.html", "?full=7&q=120a");
    const k = w.RE.clau(w.FULL.items.filter(i => i.id === "120a")[0]);
    d.getElementById("mostra").click();
    [...d.querySelectorAll("#opcions .opcio")].find(b => +b.dataset.orig === k.ok).click();
    d.getElementById("comprova").click();
    d.getElementById("seguent").click();
    prova("encertat: «Següent» marxa sense avisar", () => {
      assert.strictEqual(d.getElementById("avis-sortida").hidden, true);
      assert.strictEqual(anades.length, 1);
    });
    tanca();
  }

  seccio("practica.html: tornar-hi l'endemà");
  {
    const ahir = Date.now() - 86400000;
    const { d, tanca } = await obre("practica.html", "?full=7&q=121b", {
      "repas-eso:full7": { v: 1, tfv: 1, items: { "121b": { estat: "vist", tact: 300, tvis: ahir, ts: ahir } } }
    });
    prova("diu quant hi va estar i quin botó ha de prémer", () => {
      const t = d.querySelector(".targeta").textContent;
      assert.ok(/L'última vegada hi vas estar 5 min/.test(t), t.slice(0, 300));
    });
    tanca();
  }

  seccio("index.html: la llista «Tens exercicis a mitges»");
  {
    const ara = Date.now();
    const estat = {
      "repas-eso:full7": { v: 1, tfv: 1, items: {
        "121b": { estat: "vist", tact: 240, tvis: ara - 3600e3 },
        "120a": { estat: "vist", tvis: ara - 60e3 }                      /* només obert */
      } },
      "repas-eso:full2": { v: 1, tfv: 1, items: {
        [T.fulls[2].items[3]]: { estat: "vist", npis: 2, tvis: ara - 7200e3 }
      } }
    };
    const { w, d, tanca } = await obre("index.html", "", estat);
    const sec = d.getElementById("amitges");
    prova("es veu, amb els dos treballats i sense el només obert", () => {
      assert.strictEqual(sec.hidden, false);
      const codis = [...sec.querySelectorAll(".amitges-fila .codi")].map(c => c.textContent);
      assert.deepStrictEqual(codis, ["121b", T.fulls[2].items[3]]);
    });
    prova("cada fila porta el full, el bloc i què s'hi va fer", () => {
      const f = sec.querySelector(".amitges-fila");
      assert.ok(/Full 7 · /.test(f.textContent), f.textContent);
      assert.ok(/4 min/.test(f.textContent), f.textContent);
      assert.ok(f.querySelector("a").getAttribute("href") === "practica.html?full=7&q=121b");
    });
    sec.querySelector(".amitges-treu").click();
    prova("la creu el treu i ofereix «Desfés»", () => {
      assert.ok(sec.querySelector(".treta"));
      assert.strictEqual(w.RE.aMitges().length, 1);
    });
    sec.querySelector(".amitges-desfes").click();
    prova("«Desfés» el torna a la llista", () => {
      assert.strictEqual(w.RE.aMitges().length, 2);
      assert.strictEqual(sec.querySelectorAll(".amitges-fila:not(.treta)").length, 2);
    });
    tanca();
  }

  seccio("index.html: sense res a mitges, no hi ha caixa");
  {
    const { d, tanca } = await obre("index.html", "");
    prova("la secció queda amagada", () => {
      assert.strictEqual(d.getElementById("amitges").hidden, true);
    });
    const inp = d.getElementById("cerca-codi");
    inp.value = "121";
    d.getElementById("cerca").dispatchEvent(new d.defaultView.Event("submit", { cancelable: true }));
    prova("el cercador amb «145» ofereix els apartats com a enllaços", () => {
      const r = d.querySelector(".cerca-resposta");
      assert.strictEqual(r.hidden, false);
      assert.ok(r.querySelectorAll("a.xip").length >= 2);
    });
    inp.value = "zz";
    d.getElementById("cerca").dispatchEvent(new d.defaultView.Event("submit", { cancelable: true }));
    prova("amb un codi que no existeix ho diu", () => {
      assert.ok(/No hi ha cap exercici/.test(d.querySelector(".cerca-resposta").textContent));
    });
    tanca();
  }

  seccio("full.html: «Continua on ho vas deixar» fa el que diu");
  {
    const ara = Date.now();
    const { d, anades, tanca } = await obre("full.html", "?full=7", {
      "repas-eso:full7": { v: 1, tfv: 1, items: {
        "121b": { estat: "vist", tact: 240, tvis: ara - 3600e3 },
        "119": { estat: "vist", tvis: ara }
      } }
    });
    prova("la nota diu a quin exercici porta", () => {
      const n = d.getElementById("continua-nota");
      assert.strictEqual(n.hidden, false);
      assert.ok(/121b/.test(n.textContent));
    });
    prova("la llista del full hi és, sense el «Full 7 ·» (ja hi som)", () => {
      const s = d.getElementById("amitges");
      assert.strictEqual(s.hidden, false);
      assert.ok(!/Full 7 ·/.test(s.textContent));
    });
    prova("el desplegable «Oberts sense respondre» porta el 119", () => {
      assert.strictEqual(d.getElementById("oberts").hidden, false);
      assert.ok(/119/.test(d.getElementById("oberts-llista").textContent));
    });
    prova("al mapa, el 121b té casella ½ pròpia", () => {
      const c = d.querySelector('#mapa .cel.mig');
      assert.ok(c && /121b/.test(c.title));
    });
    d.getElementById("continua").click();
    prova("i el botó hi va", () => assert.strictEqual(anades.length, 1));
    tanca();
  }

  process.exitCode = resum() ? 0 : 1;
})();
