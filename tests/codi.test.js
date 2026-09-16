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
/* localStorage mínim: RE_CODI.recull() llegeix el progrés a través de
   js/nucli.js, i nucli.js necessita un magatzem. No cal jsdom per a això. */
const magatzem = {};
global.localStorage = {
  getItem: k => (k in magatzem ? magatzem[k] : null),
  setItem: (k, v) => { magatzem[k] = String(v); },
  removeItem: k => { delete magatzem[k]; }
};
global.atob = s => Buffer.from(s, "base64").toString("binary");
global.addEventListener = () => {};        /* nucli.js s'enganxa a load */
global.document = { body: null };
eval(fs.readFileSync(path.join(ARREL, "js/codi-taules.js"), "utf8"));
eval(fs.readFileSync(path.join(ARREL, "js/nucli.js"), "utf8"));
eval(fs.readFileSync(path.join(ARREL, "js/codi.js"), "utf8"));
const T = global.RE_TAULES, RE = global.RE_CODI, RE_NUCLI = global.RE;

const ALF = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
const ESTATS = ["", "net", "segon", "pista", "fallat", "vist", "pistes"];

/* Generador amb llavor: les proves han de sortir igual sempre. */
let llavor = 1234567;
const rnd = () => { llavor = (llavor * 1103515245 + 12345) & 0x7fffffff; return llavor / 0x7fffffff; };

function fullsAleatoris(quins) {
  return quins.map(n => ({
    n, estats: T.fulls[n].items.map(() => ESTATS[Math.floor(rnd() * 7)])
  }));
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Empaquetat: 7 exercicis en 4 caràcters");

prova("7^7 cap en 32^4: l'estat de les dues pistes no costa cap caràcter", () => {
  assert.ok(Math.pow(7, 7) <= Math.pow(32, 4));
});

prova("les 823.543 combinacions donen 823.543 cadenes diferents", () => {
  const enc = (n, k) => { let s = ""; for (let i = 0; i < k; i++) { s = ALF[n % 32] + s; n = Math.floor(n / 32); } return s; };
  const vist = new Set();
  for (let g = 0; g < Math.pow(7, 7); g++) vist.add(enc(g, 4));
  assert.strictEqual(vist.size, Math.pow(7, 7), "hi ha col·lisions a l'empaquetat");
});

prova("cap grup no es desempaqueta malament", () => {
  const enc = (n, k) => { let s = ""; for (let i = 0; i < k; i++) { s = ALF[n % 32] + s; n = Math.floor(n / 32); } return s; };
  const dec = s => { let n = 0; for (const c of s) n = n * 32 + ALF.indexOf(c); return n; };
  for (let g = 0; g < Math.pow(7, 7); g += 7) {   /* mostra densa, no exhaustiva */
    let num = dec(enc(g, 4)), tros = [];
    for (let k = 0; k < 7; k++) { tros.unshift(num % 7); num = Math.floor(num / 7); }
    let o = g, esp = [];
    for (let k = 0; k < 7; k++) { esp.unshift(o % 7); o = Math.floor(o / 7); }
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

prova("els codis RC3 d'abans de les dues pistes es llegeixen igual", () => {
  /* Codi real, generat amb js/codi.js tal com era abans de passar a RC4. Un
     "pista" d'aleshores podia ser d'una pista o de més, i es llegeix com a
     una sola: el benefici del dubte per a l'alumne. */
  const r = RE.llegeix("RC3JG-X0BVH-68282-21JQ3-R4414-JER4C-3ZZ0Z-Z002Z-00020-ZV");
  assert.ok(r.ok && r.integre, "un codi RC3 vàlid ha deixat de llegir-se");
  assert.strictEqual(r.versio, "RC3");
  assert.strictEqual(r.dates, null, "un codi antic no porta dates i no se n'hi ha d'inventar cap");
  assert.strictEqual(r.resum.fets, 15);
  assert.deepStrictEqual(r.fulls.map(f => f.n + ":" + f.items.filter(i => i.estat).map(i => i.id + "=" + i.estat).join(",")), [
    "4:62a=net,62b=segon,62c=pista,62d=fallat,63a=vist,63b=pista,63c=net,63d=segon,63e=pista,63f=fallat,64a=vist,64b=pista",
    "7:119=pista,120a=net,120b=net,120c=fallat,121a=segon"]);
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

prova("l'ordre de codificació és append-only", () => {
  /* Aquesta és LA propietat que fa que els codis emesos segueixin valent.
     L'ordre de codificació (codi-ordre.json) i el de presentació
     (data/fullN.js) són coses diferents a propòsit: quan es recupera un
     exercici que faltava, va al seu lloc per a l'alumne i al final de
     l'ordre per al codi. Comprovat sobre el Full 9, on el 170f-i es van
     recuperar entre el 170e i el 171.

     El que es comprova és la propietat, no una posició concreta. Abans
     aquesta prova deia «els últims quatre han de ser el 170f-i», i això
     només era cert mentre no s'afegís res més al full: el contingut nou
     també va al final, i la prova queia sense que cap codi hagués deixat
     de valer. El que ha de ser cert sempre és que els recuperats vagin
     DARRERE dels que ja hi eren, i que els que ja hi eren no s'hagin
     mogut. */
  const f9 = T.fulls[9].items;
  const rec = ["170f", "170g", "170h", "170i"];
  const pos171 = f9.indexOf("171");
  assert.strictEqual(pos171, 5,
    "els que ja hi eren no s'han pogut moure de lloc");
  rec.forEach(id => {
    const k = f9.indexOf(id);
    assert.ok(k > pos171,
      id + " hauria d'anar darrere del 171 a l'ordre de codificació, i és a "
      + k);
  });
  assert.deepStrictEqual(
    rec.map(id => f9.indexOf(id)).slice().sort((a, b) => a - b),
    rec.map(id => f9.indexOf(id)),
    "els recuperats han de mantenir el seu ordre relatiu entre ells");
});

prova("els blocs es donen com a llista de posicions, no com a rang", () => {
  /* Amb l'ordre append-only els blocs deixen de ser contigus: el bloc dels
     prismes conté la posició 0 i també la 46. Un rang se n'empassaria mig
     full. */
  Object.keys(T.fulls).forEach(n => {
    T.fulls[n].blocs.forEach(b => {
      assert.ok(Array.isArray(b[1]), "full " + n + ": el bloc " + b[0] + " no és una llista");
      b[1].forEach(k => assert.ok(k >= 0 && k < T.fulls[n].items.length));
    });
  });
  const prismes = T.fulls[9].blocs.filter(b => /prismes|Prismes/i.test(b[0]))[0];
  assert.ok(prismes[1].indexOf(0) >= 0 && Math.max.apply(null, prismes[1]) > 40,
    "el bloc dels prismes hauria d'abastar posicions molt separades");
});

prova("cap posició no queda en dos blocs alhora", () => {
  Object.keys(T.fulls).forEach(n => {
    const vist = new Set();
    T.fulls[n].blocs.forEach(b => b[1].forEach(k => {
      assert.ok(!vist.has(k), "full " + n + ": la posició " + k + " és a dos blocs");
      vist.add(k);
    }));
  });
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

prova("demanar una pista no pot penalitzar més que fallar al primer intent", () => {
  /* Si `pista` valgués menys que `segon`, la taula premiaria endevinar per
     damunt de demanar ajuda. Aquesta comprovació fixa l'ordre correcte. */
  assert.ok(RE.PES.net > RE.PES.pista, "encertar a la primera ha de valer més que amb pista");
  assert.ok(RE.PES.pista >= RE.PES.segon, "una pista no pot valer menys que un intent fallat");
  assert.ok(RE.PES.pistes >= RE.PES.segon, "dues pistes tampoc no poden valer menys que un intent fallat");
});

prova("la primera pista gairebé no penalitza i la segona penalitza més", () => {
  assert.deepStrictEqual([RE.PES.net, RE.PES.pista, RE.PES.pistes, RE.PES.segon, RE.PES.fallat],
    [10, 9.5, 8, 7, 0], "els valors acordats amb el professorat han canviat");
  assert.ok(RE.PES.net - RE.PES.pista < RE.PES.pista - RE.PES.pistes);
});

prova("la nota surt dels pesos publicats", () => {
  const n = 6, ids = T.fulls[n].items;
  const estats = ids.map((_, i) => (i < 10 ? ["net", "segon", "pista", "fallat", "net"][i % 5] : ""));
  const p = RE.llegeix(RE.genera({ fulls: [{ n, estats }] }));
  const c = p.resum.comptes;
  const esperat = (RE.PES.net * c.net + RE.PES.segon * c.segon + RE.PES.pista * c.pista + RE.PES.pistes * c.pistes)
    / (RE.PES.net * p.resum.fets) * 10;
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

prova("el banc sencer s'empaqueta al ritme que toca", () => {
  /* Abans això era «cap en menys de 600 caràcters». El número era un
     guardià amb marge, no un requisit —cap camp de cap formulari no
     imposa aquesta llargada—, i va caducar sol el dia que el banc va
     passar de 892 ítems a 951: la prova queia sense que res s'hagués
     trencat. `CODIS.md` tenia el mateix problema, amb la xifra de 739
     exercicis.

     El que sí que importa i no caduca és el RITME: quants caràcters costa
     cada exercici. Set estats caben en quatre caràcters base32, o sigui
     0,571 per ítem, més un caràcter de comptador per full i la capçalera.
     Si algun dia algú canviés l'empaquetament i el ritme se n'anés amunt,
     això ho diria; i el sostre absolut es deriva del banc, de manera que
     creix amb ell tot sol. */
  const tots = Object.keys(T.fulls).map(Number);
  const items = tots.reduce((a, n) => a + T.fulls[n].items.length, 0);
  const c = RE.genera({
    fulls: tots.map(n => ({ n, estats: T.fulls[n].items.map(() => "net") })),
    diag: Array.from({ length: 15 }, () => ({ estat: 0, encert: true }))
  });
  const llarg = c.replace(/-/g, "").length;

  /* Capçalera (versió + data + màscara), un comptador de grups per full,
     quatre caràcters per grup de set ítems, el diagnòstic i el control. */
  const previst = 9
    + tots.reduce((a, n) => a + 1 + Math.ceil(T.fulls[n].items.length / 7) * 4, 0)
    + 10 + 2;
  assert.ok(llarg <= previst + 20,
    "són " + llarg + " caràcters i se'n preveien " + previst
    + ": l'empaquetament ha perdut eficiència");
  assert.ok(llarg / items < 0.75,
    "són " + (llarg / items).toFixed(3) + " caràcters per ítem; el ritme "
    + "teòric és 0,571 i no hauria de passar de 0,75");
});


seccio("L'error del primer intent no s'esborra en encertar al segon");

prova("errs conserva l'error encara que l'ítem acabi correcte", () => {
  /* Abans, en encertar s'escrivia err:"" i el panell "els errors que
     repeteixes" filtrava els buits. Resultat: l'error que l'alumne comet
     sempre però rectifica al segon intent -- el més interessant de tots --
     no arribava mai al panell ni al codi. */
  const n = 5, ids = T.fulls[n].items;
  RE_NUCLI.esborra(n);
  RE_NUCLI.apuntaError(n, ids[0], "SIGNE_FINAL");
  RE_NUCLI.apunta(n, ids[0], { estat: "segon", err: "" });
  RE_NUCLI.apuntaError(n, ids[1], "SIGNE_FINAL");
  RE_NUCLI.apunta(n, ids[1], { estat: "segon", err: "" });

  const it = RE_NUCLI.llegeix(n).items[ids[0]];
  assert.deepEqual(it.errs, ["SIGNE_FINAL"], "l'historial s'ha perdut");
  assert.equal(it.estat, "segon");

  const p = RE.llegeix(RE.genera(RE.recull([n])));
  const e = p.errs.filter(x => x.etiqueta === "SIGNE_FINAL")[0];
  assert.ok(e && e.compte === 2,
    "el codi hauria de comptar els 2 errors rectificats, i en compta "
    + (e ? e.compte : 0));
});

// ─────────────────────────────────────────────────────────────────────────
seccio("Els sostres del format es diuen, no es travessen en silenci");

/* Aquests dos límits eren implícits i fallaven de la manera més cara
   possible: el codi sortia ÍNTEGRE i amb la feina a zero. La prova no és que
   el format creixi —no pot, sense un RC4— sinó que quan no hi càpiga s'aturi
   amb un missatge en comptes d'emetre un codi que ningú no sabrà que és dolent. */
{
  const T = window.RE_TAULES, C = window.RE_CODI;

  prova("un full de més de 217 ítems s'atura en comptes d'emetre un codi dolent", () => {
    const ids = [];
    for (let i = 0; i < C.MAX_ITEMS + 1; i++) ids.push("x" + i);
    assert.throws(
      () => C.genera({ fulls: [{ n: 1, estats: ids.map(() => "net") }] }),
      /MAX_ITEMS|217|format nou|RC4/,
      "hauria de petar amb un missatge que expliqui el sostre");
  });

  prova("exactament 217 ítems encara hi caben i tornen sencers", () => {
    const ids = [];
    for (let i = 0; i < C.MAX_ITEMS; i++) ids.push("x" + i);
    const previ = T.fulls[1];
    T.fulls[1] = { titol: "Prova", items: ids, blocs: [["b", ids.map((_, i) => i)]],
                   dif: "1".repeat(ids.length) };
    try {
      const r = C.llegeix(C.genera({ fulls: [{ n: 1, estats: ids.map(() => "net") }] }));
      assert.ok(r.integre);
      assert.strictEqual(r.resum.fets, C.MAX_ITEMS);
    } finally { T.fulls[1] = previ; }
  });

  prova("un full 13 s'atura: el seu bit és el del diagnòstic", () => {
    assert.throws(
      () => C.genera({ fulls: [{ n: C.MAX_FULLS + 1, estats: ["net"] }] }),
      /diagn|RC4|format nou/,
      "hauria de dir per què no hi cap, no emetre un diagnòstic fantasma");
  });

  prova("cap full del banc real no frega els sostres sense avisar", () => {
    Object.keys(T.fulls).forEach(n => {
      assert.ok(T.fulls[n].items.length <= C.MAX_ITEMS,
        "el full " + n + " ja no hi cap: " + T.fulls[n].items.length);
      assert.ok(+n <= C.MAX_FULLS, "el full " + n + " no hi cap a la màscara");
    });
  });
}


// ─────────────────────────────────────────────────────────────────────────
seccio("RC4: la data del primer intent viatja dins del codi");

{
  const C = window.RE_CODI, T = window.RE_TAULES;
  const ara = new Date(2026, 10, 29, 20, 0);           /* diumenge, final del tram 3 */
  const ids = T.fulls[4].items;
  const estats = ids.map((_, i) => (i < 30 ? ["net", "pista", "pistes", "segon", "fallat", "vist"][i % 6] : ""));
  /* l'exercici i es fa i dies abans del codi, i a més un a l'estiu */
  const dates = ids.map((_, i) => (i < 30 ? new Date(2026, 10, 29 - i, 10, 30).getTime() : 0));
  dates[29] = new Date(2026, 6, 1).getTime();
  const r = C.llegeix(C.genera({ fulls: [{ n: 4, estats, dates }], ara }));

  prova("es llegeix íntegre i en versió RC4", () => {
    assert.ok(r.ok && r.integre); assert.strictEqual(r.versio, "RC4");
  });
  prova("cada exercici fet torna amb el dia en què es va fer", () => {
    for (let i = 0; i < 29; i++) {
      if (estats[i] === "vist") continue;
      const it = r.fulls[0].items[i];
      assert.ok(it.feta, it.id + " ha perdut la data");
      assert.strictEqual(it.feta.getDate(), new Date(dates[i]).getDate(), it.id);
    }
  });
  prova("els oberts sense respondre no porten data", () => {
    assert.ok(r.fulls[0].items.filter(it => it.estat === "vist").every(it => !it.feta));
  });
  prova("el que és fora de la finestra de 12 setmanes viatja sense data", () => {
    assert.strictEqual(r.fulls[0].items[29].feta, undefined);
    assert.strictEqual(r.dates.finestra, 84);
  });
  prova("l'ordre en què es van fer es conserva", () => {
    const amb = r.fulls[0].items.filter(it => it.feta).sort((a, b) => a.ordre - b.ordre);
    for (let k = 1; k < amb.length; k++) assert.ok(amb[k].feta >= amb[k - 1].feta, "ordre trencat a " + amb[k].id);
  });
  prova("dues pistes es distingeixen d'una", () => {
    assert.strictEqual(r.fulls[0].items[1].estat, "pista");
    assert.strictEqual(r.fulls[0].items[2].estat, "pistes");
  });
  prova("un codi generat sense dates no en porta cap, i no n'inventa", () => {
    const q = C.llegeix(C.genera({ fulls: [{ n: 4, estats }], ara }));
    assert.ok(q.integre); assert.strictEqual(q.dates, null);
    assert.ok(q.fulls[0].items.every(it => !it.feta));
  });
  prova("tocar una data trenca el control", () => {
    const cru = C.neteja(C.genera({ fulls: [{ n: 4, estats, dates }], ara }));
    const i = cru.length - 6;
    const mut = cru.slice(0, i) + (cru[i] === "0" ? "1" : "0") + cru.slice(i + 1);
    assert.ok(!C.llegeix(mut).integre);
  });
  prova("20 exercicis datats d'un tram costen menys de 90 caràcters de més", () => {
    const e20 = ids.map((_, i) => (i < 20 ? "net" : ""));
    const d20 = ids.map((_, i) => (i < 20 ? new Date(2026, 10, 10 + (i % 5), 17, i).getTime() : 0));
    const amb = C.genera({ fulls: [{ n: 4, estats: e20, dates: d20 }], ara }).replace(/-/g, "").length;
    const sense = C.genera({ fulls: [{ n: 4, estats: e20 }], ara }).replace(/-/g, "").length;
    assert.ok(amb - sense < 90, "el bloc de dates fa " + (amb - sense) + " caràcters");
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("RC4: el codi que surt del navegador");

prova("una pista desada amb dues pistes obertes surt com a 'pistes'", () => {
  const n = 6, ids = window.RE_TAULES.fulls[n].items;
  RE_NUCLI.esborra(n);
  RE_NUCLI.pista(n, ids[0], 1); RE_NUCLI.intent(n, ids[0], true);
  RE_NUCLI.pista(n, ids[1], 2); RE_NUCLI.intent(n, ids[1], true);
  const p = RE.llegeix(RE.genera(RE.recull([n])));
  assert.strictEqual(p.fulls[0].items[0].estat, "pista");
  assert.strictEqual(p.fulls[0].items[1].estat, "pistes");
  assert.strictEqual(RE_NUCLI.item(n, ids[1]).estat, "pista", "el registre no ha de canviar de vocabulari");
});

prova("el codi porta la data del primer intent que desa el registre", () => {
  const n = 6, ids = window.RE_TAULES.fulls[n].items;
  const p = RE.llegeix(RE.genera(RE.recull([n])));
  const avui = new Date().getDate();
  assert.ok(p.dates, "el codi del navegador ha de portar el bloc de dates");
  assert.strictEqual(p.fulls[0].items[0].feta.getDate(), avui);
});

process.exit(resum() ? 0 : 1);
