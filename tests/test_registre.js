/* tests/test_registre.js — el registre no es pot rentar.

       node tests/test_registre.js

   Aquestes proves no són d'estil ni de format: cadascuna correspon a una
   trampa concreta que abans funcionava i que ha de continuar sense funcionar.
   Si alguna cau, la trampa ha tornat.

   No cal DOM ni cap dependència: nucli.js i codi.js només necessiten un
   localStorage, i aquí n'hi ha un de mentida. */
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
global.document = { body: null, hidden: true };
eval(fs.readFileSync(path.join(ARREL, "js/codi-taules.js"), "utf8"));
eval(fs.readFileSync(path.join(ARREL, "js/nucli.js"), "utf8"));
eval(fs.readFileSync(path.join(ARREL, "js/codi.js"), "utf8"));
const T = global.RE_TAULES, RE = global.RE, CODI = global.RE_CODI;

const FULL = 3;
const IDS = T.fulls[FULL].items;

function net() {
  Object.keys(magatzem).forEach(k => delete magatzem[k]);
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Fallar i marxar (recarregar la pàgina ja no neteja res)");

prova("el primer error es desa a l'instant, no s'espera al segon", () => {
  net();
  RE.intent(FULL, IDS[0], false);
  assert.strictEqual(RE.estat(FULL, IDS[0]), "fallat",
    "marxar després del primer error hauria de deixar l'exercici fallat");
});

prova("tornar-hi i encertar dona 'segon', mai 'net'", () => {
  net();
  RE.intent(FULL, IDS[0], false);           /* sessió 1: falla i marxa */
  const r = RE.intent(FULL, IDS[0], true);  /* sessió 2: hi torna i encerta */
  assert.strictEqual(r.estat, "segon");
  assert.strictEqual(RE.estat(FULL, IDS[0]), "segon");
});

prova("les pistes obertes sobreviuen a la recàrrega", () => {
  net();
  RE.pista(FULL, IDS[1], 1);                /* obre una pista i marxa */
  const r = RE.intent(FULL, IDS[1], true);  /* torna i encerta "a la primera" */
  assert.strictEqual(r.estat, "pista",
    "encertar després d'haver obert una pista en una altra estona és 'pista'");
});

prova("rellegir les mateixes pistes no infla el comptador", () => {
  net();
  RE.pista(FULL, IDS[1], 1);
  RE.pista(FULL, IDS[1], 2);
  RE.pista(FULL, IDS[1], 1);                /* torna a la pàgina i les rellegeix */
  RE.pista(FULL, IDS[1], 2);
  assert.strictEqual(RE.item(FULL, IDS[1]).npis, 2);
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Un exercici tancat ja no canvia d'estat");

prova("fallar, mirar la resolució i refer-lo no el converteix en 'net'", () => {
  net();
  RE.intent(FULL, IDS[2], false);
  RE.intent(FULL, IDS[2], false);           /* dos errors: queda tancat */
  assert.strictEqual(RE.estat(FULL, IDS[2]), "fallat");
  const r = RE.intent(FULL, IDS[2], true);  /* ara ja sap la resposta */
  assert.strictEqual(r.repas, true);
  assert.strictEqual(RE.estat(FULL, IDS[2]), "fallat",
    "el registre s'ha deixat rentar");
});

prova("un 'net' tampoc no empitjora si després s'hi torna i es falla", () => {
  net();
  RE.intent(FULL, IDS[3], true);
  RE.intent(FULL, IDS[3], false);
  assert.strictEqual(RE.estat(FULL, IDS[3]), "net",
    "el registre ha de ser d'una sola direcció també cap avall");
});

prova("les repeticions es compten a part", () => {
  net();
  RE.intent(FULL, IDS[4], true);
  RE.intent(FULL, IDS[4], true);
  RE.intent(FULL, IDS[4], true);
  assert.strictEqual(RE.item(FULL, IDS[4]).rep, 2);
  assert.strictEqual(RE.meta().rep, 2);
});

prova("la taula d'estats no depèn de la sessió sinó dels comptadors", () => {
  assert.strictEqual(RE.estatDe(1, 0, true), "net");
  assert.strictEqual(RE.estatDe(2, 0, true), "segon");
  assert.strictEqual(RE.estatDe(1, 1, true), "pista");
  assert.strictEqual(RE.estatDe(9, 0, false), "fallat");
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Metadades: reiniciar un full es veu");

prova("esborrar un full puja el comptador i no s'esborra a si mateix", () => {
  net();
  RE.intent(FULL, IDS[0], true);
  RE.esborra(FULL);
  RE.esborra(FULL);
  assert.strictEqual(RE.meta().esb, 2);
  assert.strictEqual(RE.estat(FULL, IDS[0]), "");
});

// ─────────────────────────────────────────────────────────────────────────
seccio("El bloc META viatja dins del codi");

prova("minuts, importacions i repeticions arriben senceres", () => {
  const meta = {
    minuts: 137, imports: 2, itemsImportats: 41, repeticions: 6,
    esborrats: 3, origen: { dia: 400, salt: "7KP" }
  };
  const p = CODI.llegeix(CODI.genera({
    fulls: [{ n: FULL, estats: IDS.map((_, i) => (i < 5 ? "net" : "")) }],
    meta: meta
  }));
  assert.ok(p.ok && p.integre);
  assert.strictEqual(p.meta.minuts, 137);
  assert.strictEqual(p.meta.imports, 2);
  assert.strictEqual(p.meta.itemsImportats, 41);
  assert.strictEqual(p.meta.repeticions, 6);
  assert.strictEqual(p.meta.esborrats, 3);
  assert.strictEqual(p.meta.origen.dia, 400);
  assert.strictEqual(p.meta.origen.salt, "7KP");
});

prova("sense importacions no s'escriu l'origen", () => {
  const p = CODI.llegeix(CODI.genera({
    fulls: [{ n: FULL, estats: IDS.map(() => "net") }],
    meta: { minuts: 10, imports: 0, itemsImportats: 0, repeticions: 0, esborrats: 0 }
  }));
  assert.strictEqual(p.meta.origen, null);
});

prova("un codi sense bloc META es llegeix igual i no se n'inventa cap", () => {
  const p = CODI.llegeix(CODI.genera({
    fulls: [{ n: FULL, estats: IDS.map(() => "net") }]
  }));
  assert.ok(p.ok && p.integre);
  assert.strictEqual(p.meta, null, "meta:null vol dir 'no ho diu', no 'val zero'");
});

prova("el control d'integritat també cobreix el bloc META", () => {
  const ALF = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  const c = CODI.neteja(CODI.genera({
    fulls: [{ n: FULL, estats: IDS.map((_, i) => (i < 5 ? "net" : "")) }],
    meta: { minuts: 500, imports: 1, itemsImportats: 30, repeticions: 0,
            esborrats: 0, origen: { dia: 300, salt: "ABC" } }
  }));
  /* Es toca el caràcter dels minuts: el control l'ha de veure. */
  const pos = c.length - 3 - 6 - 8 + 2;
  const nou = ALF[(ALF.indexOf(c[pos]) + 1) % 32];
  const trencat = c.slice(0, pos) + nou + c.slice(pos + 1);
  assert.strictEqual(CODI.llegeix(trencat).integre, false,
    "es pot retocar el ritme de feina sense trencar el control");
});

prova("l'empremta identifica el codi d'origen", () => {
  const c = CODI.genera({ fulls: [{ n: FULL, estats: IDS.map(() => "net") }] });
  const p = CODI.llegeix(c);
  const e = CODI.empremta(p);
  assert.strictEqual(e.salt, p.salt);
  assert.ok(e.dia >= 0 && e.dia < 32768);
});

// ─────────────────────────────────────────────────────────────────────────
seccio("recull() explica com s'ha fet la feina, no només què s'ha fet");

prova("els exercicis importats es compten com a importats", () => {
  net();
  RE.intent(FULL, IDS[0], true);
  RE.apunta(FULL, IDS[1], { estat: "net", imp: 1, tancat: 1 });
  RE.apunta(FULL, IDS[2], { estat: "pista", imp: 1, tancat: 1 });
  const g = RE.meta(); g.imp = 1; g.orig = { dia: 12, salt: "XYZ" }; RE.desaMeta(g);

  const dades = CODI.recull([FULL]);
  assert.strictEqual(dades.meta.itemsImportats, 2);
  assert.strictEqual(dades.meta.imports, 1);

  const p = CODI.llegeix(CODI.genera(dades));
  assert.strictEqual(p.meta.itemsImportats, 2);
  assert.strictEqual(p.meta.origen.salt, "XYZ");
});

process.exit(resum() ? 0 : 1);
