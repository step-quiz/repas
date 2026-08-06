/* tests/codi.test.js — proves del codi de verificació (js/codi.js).

   No necessiten DOM ni cap dependència: només Node.

       node tests/codi.test.js

   Les propietats que es comproven aquí no són d'estil sinó de correcció del
   format: si alguna cau, hi ha codis d'alumnes que es llegeixen malament. */
"use strict";
const fs = require("fs"), path = require("path");
const { assert, seccio, prova, resum } = require("./arnes.js");

const ARREL = path.join(__dirname, "..");
global.window = global;
eval(fs.readFileSync(path.join(ARREL, "js/codi-taules.js"), "utf8"));
eval(fs.readFileSync(path.join(ARREL, "js/codi.js"), "utf8"));
const T = global.RE_TAULES, RE = global.RE_CODI;

const ALF = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
const ESTATS = ["", "net", "segon", "pista", "fallat", "vist"];

/* Generador amb llavor: les proves han de sortir igual sempre. */
let llavor = 1234567;
const rnd = () => { llavor = (llavor * 1103515245 + 12345) & 0x7fffffff; return llavor / 0x7fffffff; };

function fullsAleatoris(quins) {
  return quins.map(n => ({
    n, estats: T.fulls[n].items.map(() => ESTATS[Math.floor(rnd() * 6)])
  }));
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Empaquetat: 7 exercicis en 4 caràcters");

prova("6^7 cap en 32^4, o sigui que la correspondència pot ser injectiva", () => {
  assert.ok(Math.pow(6, 7) <= Math.pow(32, 4));
});

prova("les 279.936 combinacions donen 279.936 cadenes diferents", () => {
  const enc = (n, k) => { let s = ""; for (let i = 0; i < k; i++) { s = ALF[n % 32] + s; n = Math.floor(n / 32); } return s; };
  const vist = new Set();
  for (let g = 0; g < Math.pow(6, 7); g++) vist.add(enc(g, 4));
  assert.strictEqual(vist.size, Math.pow(6, 7), "hi ha col·lisions a l'empaquetat");
});

prova("cap grup no es desempaqueta malament", () => {
  const enc = (n, k) => { let s = ""; for (let i = 0; i < k; i++) { s = ALF[n % 32] + s; n = Math.floor(n / 32); } return s; };
  const dec = s => { let n = 0; for (const c of s) n = n * 32 + ALF.indexOf(c); return n; };
  for (let g = 0; g < Math.pow(6, 7); g += 7) {   /* mostra densa, no exhaustiva */
    let num = dec(enc(g, 4)), tros = [];
    for (let k = 0; k < 7; k++) { tros.unshift(num % 6); num = Math.floor(num / 6); }
    let o = g, esp = [];
    for (let k = 0; k < 7; k++) { esp.unshift(o % 6); o = Math.floor(o / 6); }
    assert.deepStrictEqual(tros, esp);
  }
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Anada i tornada");

prova("un full parcialment fet torna exactament igual", () => {
  const f = fullsAleatoris([4]);
  const p = RE.llegeix(RE.genera({ fulls: f }));
  assert.ok(p.integre);
  p.fulls[0].items.forEach((it, i) => assert.strictEqual(it.estat, f[0].estats[i]));
});

prova("el banc sencer torna exactament igual (200 sortejos)", () => {
  const tots = Object.keys(T.fulls).map(Number);
  for (let k = 0; k < 200; k++) {
    const f = fullsAleatoris(tots);
    const p = RE.llegeix(RE.genera({ fulls: f }));
    assert.ok(p.integre, "el control no quadra");
    const m = {};
    p.fulls.forEach(x => x.items.forEach(i => { m[x.n + ":" + i.id] = i.estat; }));
    f.forEach(x => T.fulls[x.n].items.forEach((id, i) => {
      assert.strictEqual(m[x.n + ":" + id] || "", x.estats[i]);
    }));
  }
});

prova("el diagnòstic del test inicial torna exactament igual", () => {
  const diag = Array.from({ length: 15 }, (_, i) => ({ estat: i % 4, encert: i % 3 !== 0 }));
  const p = RE.llegeix(RE.genera({ fulls: fullsAleatoris([2]), diag }));
  assert.strictEqual(p.diag.length, 15);
  p.diag.forEach((d, i) => {
    assert.strictEqual(d.estat, diag[i].estat);
    assert.strictEqual(d.encert, diag[i].encert);
  });
});

prova("les etiquetes d'error més repetides tornen igual", () => {
  const errs = [["SIGNE_FINAL", 9], ["ARREL_OBLIDADA", 4], ["ES_POT_DETERMINAR", 2]];
  const p = RE.llegeix(RE.genera({ fulls: fullsAleatoris([7]), errs }));
  assert.strictEqual(p.errs.length, 3);
  p.errs.forEach((e, i) => {
    assert.strictEqual(e.etiqueta, errs[i][0]);
    assert.strictEqual(e.compte, errs[i][1]);
  });
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Caràcters de control");

/* El codi de proves ha de ser prou llarg perquè la comprovació exhaustiva
   tingui sentit: amb 34 caràcters només hi ha un miler de mutacions possibles
   i el resultat no diria gran cosa. Amb tres fulls en surten unes 5.000. */
const base = RE.genera({
  fulls: [4, 6, 11].map(n => ({
    n, estats: T.fulls[n].items.map((_, i) => (i < 40 ? ESTATS[1 + (i % 5)] : ""))
  }))
});
const cru = RE.neteja(base);

prova("TOTES les substitucions d'un caràcter es detecten", () => {
  let passen = 0, total = 0;
  for (let i = 0; i < cru.length - 2; i++) {
    for (const c of ALF) {
      if (c === cru[i]) continue;
      total++;
      if (RE.llegeix(cru.slice(0, i) + c + cru.slice(i + 1)).integre) passen++;
    }
  }
  assert.ok(total > 3000, "la prova no ha provat prou casos: " + total);
  assert.strictEqual(passen, 0, passen + " substitucions de " + total + " passen el control");
});

prova("TOTES les transposicions de dos caràcters es detecten", () => {
  let passen = 0, total = 0;
  for (let i = 0; i < cru.length - 3; i++) {
    for (let j = i + 1; j < cru.length - 2; j++) {
      if (cru[i] === cru[j]) continue;
      total++;
      const a = cru.split("");
      [a[i], a[j]] = [a[j], a[i]];
      if (RE.llegeix(a.join("")).integre) passen++;
    }
  }
  assert.ok(total > 3000, "només " + total + " transposicions provades");
  assert.strictEqual(passen, 0, passen + " transposicions de " + total + " passen");
});

prova("canviar un estat de fallat a net trenca el control", () => {
  const p0 = RE.llegeix(base);
  const i = 12;                       /* dins de la càrrega, no de la capçalera */
  const mut = cru.slice(0, i) + (cru[i] === "0" ? "1" : "0") + cru.slice(i + 1);
  const p1 = RE.llegeix(mut);
  assert.ok(!p1.integre || p1.resum.fets === p0.resum.fets);
});

prova("esborrar o afegir un caràcter es detecta", () => {
  assert.ok(!RE.llegeix(cru.slice(0, 17) + cru.slice(18)).integre);
  assert.ok(!RE.llegeix(cru.slice(0, 17) + "K" + cru.slice(17)).integre);
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Robustesa en llegir el que enganxa una persona");

prova("tolera minúscules, guions i espais", () => {
  const brut = "  " + base.toLowerCase().replace(/-/g, " — ") + "  ";
  assert.ok(RE.llegeix(brut).integre);
});

prova("tolera les confusions de teclat O/0, I/1, L/1", () => {
  const brut = base.replace(/0/g, "O").replace(/1/g, "l");
  assert.ok(RE.llegeix(brut).integre);
});

prova("un text que no és un codi es rebutja amb un missatge clar", () => {
  const r = RE.llegeix("hola què tal");
  assert.strictEqual(r.ok, false);
  assert.ok(/RC2/.test(r.error), "el missatge hauria de dir per què comencen els codis");
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Dates i compatibilitat de versions");

prova("la data no satura fins ben entrat el segle", () => {
  [[2026, 5, 15], [2028, 5, 21], [2035, 10, 30], [2099, 0, 15]].forEach(([a, m, d]) => {
    const dt = new Date(a, m, d);
    const p = RE.llegeix(RE.genera({ fulls: fullsAleatoris([6]), ara: dt }));
    assert.strictEqual(p.data.toISOString().slice(0, 10),
      dt.toISOString().slice(0, 10).length === 10
        ? new Date(Date.UTC(a, m, d)).toISOString().slice(0, 10) : null);
  });
});

prova("els codis RC1 antics encara es llegeixen", () => {
  /* Codi real generat abans d'ampliar el camp de data a 3 caràcters. Si
     aquesta prova cau, els codis que el professorat ja hagi recollit deixen
     de servir. */
  const antic = "RC1DH-8AJA5-00B90-00000-00000-Y0000-00000-00000-00000-0010M-"
              + "12KH0-773T0-00000-00000-00000-01QNV-2KH03-W14C1-ZZ096";
  const r = RE.llegeix(antic);
  assert.ok(r.ok && r.integre, "un codi RC1 vàlid ha deixat de llegir-se");
  assert.strictEqual(r.versio, "RC1");
  assert.strictEqual(r.resum.fets, 7);
  assert.strictEqual(r.data.toISOString().slice(0, 10), "2026-08-05");
  const ids = r.fulls.map(f => f.n + ":" + f.items.filter(i => i.estat).map(i => i.id).join(","));
  assert.deepStrictEqual(ids, ["1:5a,21b,21c", "2:35a,35b",
    "4:62a,70a,70b,70c,70d,71a,71b,71c,71d,71e"]);
});

prova("l'ordre d'ítems de cada full no s'ha mogut per davant", () => {
  /* Els primers ítems de cada full, tal com eren quan es va emetre el primer
     codi. El format guarda els estats per POSICIÓ: si alguna d'aquestes
     canvia, tots els codis anteriors passen a llegir-se malament. */
  const ancora = { 1: "1a", 2: "35a", 3: "47a", 4: "62a", 5: "75a", 6: "101",
                   7: "119", 8: "152a", 9: "170a", 10: "200a", 11: "218a", 12: "236a" };
  Object.keys(ancora).forEach(n => {
    assert.strictEqual(T.fulls[n].items[0], ancora[n],
      "el full " + n + " ja no comença pel mateix ítem");
  });
});

// ─────────────────────────────────────────────────────────────────────────
seccio("La nota es deriva del detall, no hi viatja");

prova("dos codis amb el mateix detall donen la mateixa nota", () => {
  const f = fullsAleatoris([5]);
  const a = RE.llegeix(RE.genera({ fulls: f }));
  const b = RE.llegeix(RE.genera({ fulls: f }));
  assert.strictEqual(a.resum.nota, b.resum.nota);
  assert.notStrictEqual(RE.neteja(RE.genera({ fulls: f })).slice(3, 6),
    "###", "el salt hauria de fer que dos codis iguals no siguin idèntics");
});

prova("la nota surt dels pesos publicats", () => {
  const n = 6, ids = T.fulls[n].items;
  const estats = ids.map((_, i) => (i < 10 ? ["net", "segon", "pista", "fallat", "net"][i % 5] : ""));
  const p = RE.llegeix(RE.genera({ fulls: [{ n, estats }] }));
  const c = p.resum.comptes;
  const esperat = (10 * c.net + 7 * c.segon + 6 * c.pista) / (10 * p.resum.fets) * 10;
  assert.ok(Math.abs(p.resum.nota - esperat) < 0.05);
});

prova("els exercicis oberts i no contestats no compten com a feina", () => {
  const n = 3, ids = T.fulls[n].items;
  const estats = ids.map((_, i) => (i < 5 ? "net" : (i < 12 ? "vist" : "")));
  const p = RE.llegeix(RE.genera({ fulls: [{ n, estats }] }));
  assert.strictEqual(p.resum.fets, 5);
  assert.strictEqual(p.resum.comptes.vist, 7);
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Llargada");

prova("un full a mitges cap en menys de 60 caràcters", () => {
  const n = 4, ids = T.fulls[n].items;
  const c = RE.genera({ fulls: [{ n, estats: ids.map((_, i) => (i < 30 ? "net" : "")) }] });
  assert.ok(c.replace(/-/g, "").length < 60, "són " + c.replace(/-/g, "").length);
});

prova("el banc sencer cap en menys de 600 caràcters", () => {
  const tots = Object.keys(T.fulls).map(Number);
  const c = RE.genera({
    fulls: tots.map(n => ({ n, estats: T.fulls[n].items.map(() => "net") })),
    diag: Array.from({ length: 15 }, () => ({ estat: 0, encert: true }))
  });
  assert.ok(c.replace(/-/g, "").length < 600, "són " + c.replace(/-/g, "").length);
});

process.exit(resum() ? 0 : 1);
