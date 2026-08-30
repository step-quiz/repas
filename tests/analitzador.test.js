/* tests/analitzador.test.js — proves de l'analitzador del professorat.

   Aquestes SÍ que necessiten un DOM, perquè el que es prova és el
   comportament de la pàgina, no una funció. La dependència (`jsdom`) no és
   del projecte sinó de les proves, i si no hi és les proves se salten amb un
   avís en comptes de petar:

       npm install --no-save jsdom
       node tests/analitzador.test.js

   Sense jsdom, `tests/executa.sh` continua i la resta de proves corren
   igualment. */
"use strict";
const fs = require("fs"), path = require("path");

let JSDOM;
try {
  JSDOM = require("jsdom").JSDOM;
} catch (e) {
  console.log("\n\x1b[33m⊘ Proves de l'analitzador saltades: falta jsdom.\x1b[0m");
  console.log("  Per passar-les:  npm install --no-save jsdom\n");
  process.exit(0);
}

const { assert, seccio, prova, resum } = require("./arnes.js");
const ARREL = path.join(__dirname, "..");
const HTML = fs.readFileSync(path.join(ARREL, "analitzador-repas.html"), "utf8");

function obre() {
  const dom = new JSDOM(HTML, { runScripts: "dangerously", url: "file:///a.html" });
  return { w: dom.window, d: dom.window.document };
}

/* Un full de respostes fabricat amb el mateix motor que fa servir l'app: els
   codis són reals i validen. */
function fabrica(w, files) {
  let tsv = "Marca de temps\tAdreça electrònica\tGrup\tCodi\n";
  files.forEach(f => { tsv += f.join("\t") + "\n"; });
  return tsv;
}
function codiDe(w, quins, quants, quan) {
  const T = w.RE_TAULES;
  return w.RE_CODI.genera({
    fulls: quins.map(n => ({
      n, estats: T.fulls[n].items.map((_, i) =>
        (i < quants ? ["net", "net", "segon", "pista", "fallat"][i % 5] : ""))
    })),
    ara: quan
  });
}
const marca = d =>
  `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()} ` +
  `${("0" + d.getHours()).slice(-2)}:${("0" + d.getMinutes()).slice(-2)}:00`;

// ─────────────────────────────────────────────────────────────────────────
seccio("Càrrega d'un full de respostes");

{
  const { w, d } = obre();
  const ara = new Date(2026, 9, 20, 18, 0);
  const c1 = codiDe(w, [4], 30, ara);
  const c2 = codiDe(w, [4, 7], 20, ara);
  d.getElementById("entrada").value = fabrica(w, [
    [marca(ara), "anna@e.cat", "1rA", c1],
    [marca(ara), "bru@e.cat", "1rA", c2],
    /* codi propi i diferent: així el retard es veu sense que el ⇄ hi entri */
    [marca(new Date(2026, 9, 20, 21, 30)), "cesc@e.cat", "1rB", codiDe(w, [11], 15, ara)],
    [marca(ara), "dina@e.cat", "1rB", c1.slice(0, 20) + "X" + c1.slice(21)],
  ]);
  d.getElementById("btn-llegeix").click();

  prova("llegeix les quatre files", () => {
    assert.strictEqual(d.querySelectorAll("#t-env tbody tr.clic").length, 4);
  });
  prova("detecta el codi mal copiat", () => {
    assert.strictEqual(d.querySelectorAll("#t-env .marca.mal").length, 1);
  });
  prova("avisa de l'enviament tardà", () => {
    assert.strictEqual(d.querySelectorAll("#t-env .marca.avis").length, 1);
  });
  prova("el correu surt encara que no sigui a la primera columna", () => {
    assert.ok(/anna/.test(d.getElementById("t-env").textContent));
  });
  prova("detecta el format de data del full", () => {
    assert.ok(/mes\/dia\/any/.test(d.getElementById("estat-carrega").textContent));
  });
  prova("el detall diu quins exercicis s'han fallat, amb identificador", () => {
    const tr = d.querySelectorAll("#t-env tbody tr.clic")[0];
    tr.dispatchEvent(new w.MouseEvent("click", { bubbles: true }));
    const t = d.querySelector("#t-env tr.detall").textContent.replace(/\s+/g, " ");
    assert.ok(/fallats:\s*6\d[a-f]/.test(t), "no hi surten els identificadors");
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Feina mínima demanada");

{
  const { w, d } = obre();
  const ara = new Date(2026, 9, 20, 18, 0);
  d.getElementById("entrada").value = fabrica(w, [
    [marca(ara), "poc@e.cat", "1rA", codiDe(w, [4], 3, ara)],
    [marca(ara), "molt@e.cat", "1rA", codiDe(w, [4], 40, ara)],
  ]);
  d.getElementById("btn-llegeix").click();
  d.getElementById("f-min").value = "10";
  d.getElementById("f-min").dispatchEvent(new w.Event("input"));

  prova("marca en vermell qui no arriba al mínim", () => {
    assert.strictEqual(d.querySelectorAll("#t-alumnes .poca").length, 1);
  });
  prova("la nota de qui ha fet poc surt amb asterisc", () => {
    assert.ok(/\*/.test(d.getElementById("t-alumnes").textContent));
  });
  prova("el filtre de feina insuficient l'aïlla", () => {
    d.getElementById("f-estat").value = "poca";
    d.getElementById("f-estat").dispatchEvent(new w.Event("change"));
    assert.strictEqual(d.querySelectorAll("#t-env tr.clic").length, 1);
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Progrés del trimestre");

{
  const { w, d } = obre();
  const T = w.RE_TAULES, ids = T.fulls[4].items;
  const INI = new Date(2026, 8, 21);
  const files = [];
  /* regular: 6 exercicis cada setmana durant 10 setmanes */
  let est = {};
  for (let s = 0; s < 10; s++) {
    for (let k = 0; k < 6; k++) est[ids[s * 6 + k]] = s < 5 ? "pista" : "net";
    const t = new Date(INI); t.setDate(t.getDate() + s * 7 + 1); t.setHours(18, 0);
    files.push([marca(t), "regular@e.cat", "1rA",
      w.RE_CODI.genera({ fulls: [{ n: 4, estats: ids.map(i => est[i] || "") }], ara: t })]);
  }
  /* concentrat: 55 exercicis en tres dies de la mateixa setmana */
  est = {};
  for (let dia = 0; dia < 3; dia++) {
    for (let k = 0; k < 18; k++) est[ids[dia * 18 + k]] = "net";
    const t = new Date(INI); t.setDate(t.getDate() + 40 + dia); t.setHours(23, 0);
    files.push([marca(t), "cop@e.cat", "1rA",
      w.RE_CODI.genera({ fulls: [{ n: 4, estats: ids.map(i => est[i] || "") }], ara: t })]);
  }
  d.getElementById("entrada").value = fabrica(w, files);
  d.getElementById("btn-llegeix").click();
  d.querySelectorAll(".pestanya")[1].click();

  prova("no calcula res fins que es prem el botó", () => {
    assert.ok(/Digues quin període/.test(d.getElementById("p-resultats").textContent));
  });

  d.getElementById("p-ini").value = "2026-09-21";
  d.getElementById("p-fi").value = "2026-12-05";
  d.getElementById("p-setm").value = "11";
  d.getElementById("p-exerc").value = "60";
  d.getElementById("p-accepta").click();

  const nota = nom => {
    let r = null;
    d.querySelectorAll("#t-progres tbody tr.clic").forEach(tr => {
      const c = tr.querySelectorAll("td");
      if (c[0].textContent.trim() === nom) r = parseFloat(c[8].textContent.replace(",", "."));
    });
    return r;
  };

  prova("la capçalera diu amb quines condicions s'ha calculat", () => {
    const t = d.querySelector(".capçalera-res").textContent.replace(/\s+/g, " ");
    assert.ok(/21\/09\/2026 – 05\/12\/2026/.test(t));
    assert.ok(/11 setmanes/.test(t) && /60 exercicis/.test(t));
  });

  prova("qui ve cada setmana treu més nota que qui ho fa tot de cop", () => {
    assert.ok(nota("regular") > nota("cop"),
      "regular=" + nota("regular") + " cop=" + nota("cop"));
  });

  prova("el resum avisa de la feina concentrada", () => {
    assert.ok(/Feina concentrada en pocs dies/.test(d.getElementById("p-resultats").textContent));
  });

  prova("canviar un paràmetre no recalcula tot sol", () => {
    const abans = nota("cop");
    d.getElementById("p-exerc").value = "200";
    d.getElementById("p-exerc").dispatchEvent(new w.Event("input"));
    assert.strictEqual(nota("cop"), abans);
    assert.ok(d.getElementById("p-accepta").className.includes("pendent"));
    d.getElementById("p-accepta").click();
    assert.ok(nota("cop") < abans);
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Pèrdua del progrés del navegador");

{
  const { w, d } = obre();
  const T = w.RE_TAULES, ids = T.fulls[4].items;
  const cod = (q, dia) => w.RE_CODI.genera({
    fulls: [{ n: 4, estats: ids.map((_, i) => (i < q ? "net" : "")) }],
    ara: new Date(2026, 9, dia, 18, 0)
  });
  const files = [[20, 12], [27, 28], [30, 40], [31, 6], [48, 13]].map(
    ([dia, q]) => [marca(new Date(2026, 9, dia, 18, 5)), "perdut@e.cat", "1rA", cod(q, dia)]);
  d.getElementById("entrada").value = fabrica(w, files);
  d.getElementById("btn-llegeix").click();
  d.querySelectorAll(".pestanya")[1].click();
  d.getElementById("p-ini").value = "2026-10-01";
  d.getElementById("p-fi").value = "2026-11-30";
  d.getElementById("p-setm").value = "8";
  d.getElementById("p-exerc").value = "40";
  d.getElementById("p-accepta").click();

  prova("no compta dues vegades el que l'alumne refà", () => {
    const c = d.querySelectorAll("#t-progres tbody tr.clic")[0].querySelectorAll("td");
    assert.strictEqual(c[4].textContent.trim().split(" ")[0], "40",
      "hauria de comptar 40 exercicis, no els refets");
  });
  prova("avisa que ha perdut el progrés", () => {
    assert.ok(/Han perdut el progrés del navegador/.test(
      d.getElementById("p-resultats").textContent));
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Codis compartits entre alumnes");

{
  const { w, d } = obre();
  const ara = new Date(2026, 9, 20, 18, 0);
  const compartit = codiDe(w, [4], 25, ara);
  const propi = codiDe(w, [4], 12, ara);
  d.getElementById("entrada").value = fabrica(w, [
    [marca(ara), "anna@e.cat", "1rA", compartit],
    [marca(ara), "bru@e.cat", "1rA", compartit],
    [marca(ara), "cesc@e.cat", "1rB", propi],
    [marca(ara), "cesc@e.cat", "1rB", propi],   /* reenviament propi: no compta */
  ]);
  d.getElementById("btn-llegeix").click();

  prova("marca el codi que apareix sota dos correus", () => {
    assert.strictEqual(d.querySelectorAll("#t-env .marca.compartit").length, 2);
  });

  prova("el reenviament del propi codi NO es marca", () => {
    const files = [...d.querySelectorAll("#t-env tbody tr.clic")];
    const cesc = files.filter(tr => /cesc/.test(tr.textContent));
    assert.strictEqual(cesc.length, 2);
    cesc.forEach(tr => assert.ok(!tr.querySelector(".marca.compartit"),
      "un alumne que reenvia el seu codi no fa res sospitós"));
  });

  prova("el resum diu qui comparteix amb qui", () => {
    const t = d.getElementById("avis-compartits").textContent;
    assert.ok(/anna = bru|bru = anna/.test(t), t.slice(0, 120));
  });

  prova("un codi trencat es marca com a trencat encara que estigui repetit", () => {
    /* La integritat mana sobre l'origen: si el ⇄ tapés el ✗, es perdria la
       marca que de veritat diu que hi ha un problema amb el codi. */
    const { w: w2, d: d2 } = obre();
    const ara2 = new Date(2026, 9, 20, 18, 0);
    const bo = codiDe(w2, [4], 25, ara2);
    const trencat = bo.slice(0, 20) + "X" + bo.slice(21);
    d2.getElementById("entrada").value = fabrica(w2, [
      [marca(ara2), "u@e.cat", "1rA", trencat],
      [marca(ara2), "dos@e.cat", "1rA", trencat],
    ]);
    d2.getElementById("btn-llegeix").click();
    assert.strictEqual(d2.querySelectorAll("#t-env .marca.mal").length, 2);
    assert.strictEqual(d2.querySelectorAll("#t-env .marca.compartit").length, 0);
  });

  prova("el filtre aïlla els codis repetits", () => {
    d.getElementById("f-estat").value = "compartit";
    d.getElementById("f-estat").dispatchEvent(new w.Event("change"));
    assert.strictEqual(d.querySelectorAll("#t-env tr.clic").length, 2);
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Honestedat sobre el que el ✓ no verifica");

{
  const { d } = obre();
  const t = d.getElementById("v-ajuda").textContent.replace(/\s+/g, " ");

  prova("l'ajuda diu explícitament què NO verifica", () => {
    assert.ok(/El que NO verifica: qui ha fet la feina/.test(t));
  });

  prova("adverteix dels tres forats coneguts", () => {
    assert.ok(/al navegador d'un altre/.test(t), "falta el forat del navegador compartit");
    assert.ok(/fabrica un codi des de la consola/.test(t), "falta el forat de la consola");
    assert.ok(/amb ajuda al costat/.test(t), "falta el forat de l'ajuda externa");
  });

  prova("no promet garantir l'autoria", () => {
    assert.ok(/no per garantir l'autoria/.test(t));
    assert.ok(/eina de seguiment/.test(t));
  });
}


// ═════════════════════════════════════════════════════════════════════════
// PROVA ESCRITA
// ═════════════════════════════════════════════════════════════════════════

/* Obre la pestanya i hi enganxa un codi. Torna una funció que genera la
   prova i retorna els ids que hi han sortit. */
function provaEscrita(w, d, codi, ajust) {
  d.querySelectorAll(".pestanya").forEach(b => { if (b.dataset.mode === "prova") b.click(); });
  const camp = d.getElementById("pr-codi");
  camp.value = codi;
  camp.dispatchEvent(new w.Event("input"));
  // el camp de codi va amb debounce de 300 ms; les proves no esperen rellotge,
  // així que es força el refresc igual que fa el canvi de llindar.
  if (ajust) ajust(d, w);
  d.getElementById("pr-min-bloc").dispatchEvent(new w.Event("change"));
  d.getElementById("pr-genera").click();
  return idsProva(w, d);
}

/* Els ids no s'escriuen al DOM de l'examen (l'alumne no els ha de veure):
   es recuperen creuant encapçalament + enunciat contra RE_BANC. */
function idsProva(w, d) {
  const index = {};
  Object.keys(w.RE_BANC).forEach(id => {
    const b = w.RE_BANC[id];
    index[(b.encapcalament || "") + "|" + b.enunciat] = id;
  });
  return [...d.querySelectorAll("#pr-examen .pr-preg")].map(p => {
    const cap = p.querySelector(".cap").textContent.replace(/^\s*\d+\.\s*/, "").trim();
    const en = p.querySelector(".enun").textContent;
    return index[cap + "|" + en] || index["|" + en] || "?";
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Prova escrita — només exercicis que l'alumne ha fet de veritat");

{
  /* Aquesta és LA comprovació d'aquesta pestanya, i es fa amb el Full 9 a
     propòsit. El projecte manté dos ordres dels ítems: el de presentació
     (data/fullN.js) i l'append-only del codi (codi-ordre.json). Al Full 9 no
     coincideixen en 42 de 47 posicions, perquè el 170f-170i es van recuperar
     després i van al final de l'ordre de codificació. Qualsevol implementació
     que indexi el banc per POSICIÓ en lloc de per ID passa desapercebuda a
     onze fulls i falla al novè, posant a l'examen exercicis que l'alumne no
     ha vist mai. */
  const { w, d } = obre();
  const T = w.RE_TAULES;
  const estats = T.fulls[9].items.map((_, i) => (i < 14 ? (i % 4 === 0 ? "fallat" : "net") : ""));
  const fets = T.fulls[9].items.slice(0, 14);
  const codi = w.RE_CODI.genera({ fulls: [{ n: 9, estats }] });
  const ids = provaEscrita(w, d, codi, dd => { dd.getElementById("pr-min-bloc").value = "1"; });

  prova("la prova no és buida", () => {
    assert.ok(ids.length > 0, "no s'ha generat cap pregunta");
  });
  prova("cap pregunta és d'un exercici que l'alumne no ha treballat", () => {
    const fora = ids.filter(x => fets.indexOf(x) < 0);
    assert.deepEqual(fora, [], "exercicis que no ha fet mai: " + fora.join(", "));
  });
  prova("cap pregunta s'ha quedat sense identificar", () => {
    assert.equal(ids.filter(x => x === "?").length, 0);
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Prova escrita — la mida triada es respecta");

{
  /* Amb un mínim d'una pregunta per bloc, un alumne que ha treballat els dotze
     fulls té 56 blocs admesos i una prova "curta" de 8 se n'anava a 56. */
  const { w, d } = obre();
  const T = w.RE_TAULES;
  const fulls = [];
  for (let n = 1; n <= 12; n++) {
    const t = T.fulls[n], e = new Array(t.items.length).fill("");
    t.blocs.forEach(b => b[1].slice(0, 6).forEach(i => { e[i] = "net"; }));
    fulls.push({ n, estats: e });
  }
  const codi = w.RE_CODI.genera({ fulls });
  const ids = provaEscrita(w, d, codi, dd => {
    dd.querySelector('input[name="pr-mida"][value="curta"]').checked = true;
  });

  prova("una prova curta són 8 preguntes encara que hi hagi 56 blocs", () => {
    assert.equal(ids.length, 8, "n'han sortit " + ids.length);
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Prova escrita — varietat dins d'un bloc");

{
  /* Un bloc es desglossa en apartats del mateix exercici mare (1a…1f). Agafar
     "els primers per prioritat" donava proves com 1a,1b,1c,1d,1e,1f,2a,2b:
     vuit preguntes, dos problemes. */
  const { w, d } = obre();
  const T = w.RE_TAULES;
  const t = T.fulls[1], e = new Array(t.items.length).fill("");
  t.blocs[0][1].forEach(i => { e[i] = "net"; });
  const codi = w.RE_CODI.genera({ fulls: [{ n: 1, estats: e }] });
  const ids = provaEscrita(w, d, codi, dd => {
    dd.querySelector('input[name="pr-mida"][value="curta"]').checked = true;
  });
  const mares = new Set(ids.map(i => i.match(/^\d+/)[0]));

  prova("no s'esgota la prova amb apartats del mateix exercici mare", () => {
    assert.ok(mares.size >= 4, "només " + mares.size + " exercicis mare: " + ids.join(", "));
  });

  prova("«torna a triar exercicis» dona una selecció diferent", () => {
    /* Amb ordre estricte per estat la selecció era determinista i el botó no
       feia res. Es prova unes quantes vegades perquè és aleatori. */
    let diferent = false;
    for (let k = 0; k < 8 && !diferent; k++) {
      d.getElementById("pr-regenera").click();
      if (idsProva(w, d).join(",") !== ids.join(",")) diferent = true;
    }
    assert.ok(diferent, "la selecció no canvia mai entre generacions");
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Prova escrita — un codi que no és íntegre no genera res");

{
  const { w, d } = obre();
  const T = w.RE_TAULES;
  const ALF = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  const e = T.fulls[1].items.map((_, i) => (i < 20 ? "net" : ""));
  const net = w.RE_CODI.genera({ fulls: [{ n: 1, estats: e }] }).replace(/-/g, "");
  const dolent = net.slice(0, 10) + ALF[(ALF.indexOf(net[10]) + 1) % 32] + net.slice(11);

  prova("el codi de prova és realment llegible però no íntegre", () => {
    const r = w.RE_CODI.llegeix(dolent);
    assert.ok(r.ok && !r.integre, "el cas de prova no és el que toca");
  });

  const ids = provaEscrita(w, d, dolent);
  prova("no es compon cap prova", () => {
    assert.equal(ids.length, 0, "s'han generat " + ids.length + " preguntes");
  });
  prova("s'explica per què, en lloc de deixar-ho en blanc", () => {
    assert.ok(/integritat/.test(d.getElementById("pr-estat").textContent));
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Prova escrita — es diu quan la prova surt més curta del que s'ha triat");

{
  const { w, d } = obre();
  const T = w.RE_TAULES;
  const e = T.fulls[1].items.map((_, i) => (i < 5 ? "net" : ""));
  const codi = w.RE_CODI.genera({ fulls: [{ n: 1, estats: e }] });
  const ids = provaEscrita(w, d, codi, dd => {
    dd.getElementById("pr-min-bloc").value = "1";
    dd.querySelector('input[name="pr-mida"][value="llarga"]').checked = true;
  });

  prova("no s'inventa preguntes que l'alumne no ha treballat", () => {
    assert.ok(ids.length <= 5, "n'han sortit " + ids.length + " amb 5 exercicis fets");
  });
  prova("avisa que se n'han demanat 20 i n'han sortit menys", () => {
    const t = d.getElementById("pr-estat").textContent;
    assert.ok(/20/.test(t) && /no hi ha prou exercicis/.test(t),
      "cap avís: «" + t + "»");
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Prova escrita — l'enunciat s'entén fora del seu full");

{
  /* Uns quants apartats no porten encapçalament perquè el porta el primer
     germà del mateix exercici (ex_text=""). Dins del full es llegeixen
     seguits i no passa res; en una prova on l'exercici surt sol, l'enunciat
     es quedava en "16 cm". El banc l'hereta del germà. */
  const { w } = obre();
  const B = w.RE_BANC;
  prova("cap ítem del banc es queda sense enunciat aprofitable", () => {
    const buits = Object.keys(B).filter(id => {
      const b = B[id];
      return !b.encapcalament && b.enunciat.replace(/\$[^$]*\$/g, "").trim().length < 12
        && !b.figura;
    });
    assert.deepEqual(buits, [], "enunciats incomprensibles sols: " + buits.join(", "));
  });
  prova("el 127b hereta l'encapçalament del 127a", () => {
    assert.equal(B["127b"].encapcalament, B["127a"].encapcalament);
    assert.ok(B["127b"].encapcalament.length > 20);
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Prova escrita — el full de correcció no s'imprimeix amb l'examen");

{
  const { w, d } = obre();
  const T = w.RE_TAULES;
  const e = T.fulls[4].items.map((_, i) => (i < 20 ? "net" : ""));
  provaEscrita(w, d, w.RE_CODI.genera({ fulls: [{ n: 4, estats: e }] }));

  prova("són dues seccions separades amb botó d'impressió propi", () => {
    assert.ok(d.getElementById("pr-examen"), "falta la secció de l'examen");
    assert.ok(d.getElementById("pr-correccio"), "falta el full de correcció");
    assert.ok(d.getElementById("pr-imprimeix"));
    assert.ok(d.getElementById("pr-imprimeix-clau"));
  });
  prova("l'examen no porta les respostes", () => {
    assert.ok(!/Resposta:/.test(d.getElementById("pr-examen").textContent));
  });
  prova("el full de correcció sí", () => {
    assert.ok(/Resposta:/.test(d.getElementById("pr-correccio").textContent));
  });
  prova("imprimir l'examen deixa fora la correcció", () => {
    let imprès = false;
    w.print = () => { imprès = true; };
    d.getElementById("pr-imprimeix").click();
    assert.ok(imprès);
    assert.equal(d.body.getAttribute("data-imprimeix"), "examen");
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Prova escrita — les figures de geometria arriben a l'examen");

{
  const { w, d } = obre();
  const T = w.RE_TAULES;
  const e = T.fulls[9].items.map((_, i) => (i < 20 ? "net" : ""));
  provaEscrita(w, d, w.RE_CODI.genera({ fulls: [{ n: 9, estats: e }] }));
  prova("hi ha SVG a la prova generada", () => {
    assert.ok(d.querySelectorAll("#pr-examen .figura svg").length > 0,
      "cap figura ha arribat a l'examen");
  });
}


// ─────────────────────────────────────────────────────────────────────────
seccio("Exàmens: tria de mode i memòria");

/* Deixa la pestanya d'exàmens oberta amb un full de respostes carregat. */
function obreExamens(w, d, tsv) {
  d.getElementById("entrada").value = tsv;
  d.getElementById("btn-llegeix").click();
  Array.prototype.slice.call(d.querySelectorAll(".pestanya"))
    .filter(b => b.dataset.mode === "prova")[0].click();
}

{
  const { w, d } = obre();
  const ara = new Date(2026, 9, 20, 18, 0);
  obreExamens(w, d, fabrica(w, [[marca(ara), "a@x.cat", "4tA",
    codiDe(w, [4], 20, ara)]]));

  prova("en entrar es veu la tria, cap dels dos modes", () => {
    assert.ok(!d.getElementById("pr-tria").hidden);
    assert.ok(d.getElementById("pr-lot").hidden);
    assert.ok(d.getElementById("pr-individual").hidden);
  });

  prova("triant l'estàndard es veu aquest panell i no l'altre", () => {
    d.getElementById("pr-va-lot").click();
    assert.ok(d.getElementById("pr-tria").hidden);
    assert.ok(!d.getElementById("pr-lot").hidden);
    assert.ok(d.getElementById("pr-individual").hidden);
  });

  prova("tornar a la pestanya recorda el mode, no torna a preguntar", () => {
    Array.prototype.slice.call(d.querySelectorAll(".pestanya"))
      .filter(b => b.dataset.mode === "full")[0].click();
    Array.prototype.slice.call(d.querySelectorAll(".pestanya"))
      .filter(b => b.dataset.mode === "prova")[0].click();
    assert.ok(d.getElementById("pr-tria").hidden, "torna a preguntar el mode");
    assert.ok(!d.getElementById("pr-lot").hidden);
  });

  prova("el botó de tornar sí que torna a la tria", () => {
    d.getElementById("pr-torna-1").click();
    assert.ok(!d.getElementById("pr-tria").hidden);
  });

  prova("el mode personalitzat continua sent el d'abans", () => {
    d.getElementById("pr-va-individual").click();
    assert.ok(!d.getElementById("pr-individual").hidden);
    assert.ok(d.getElementById("pr-alumne"), "falta el selector d'alumne");
    assert.ok(d.getElementById("pr-genera"), "falta el botó de generar");
  });
}

// ─────────────────────────────────────────────────────────────────────────
seccio("Exàmens: la taula de la classe");

/* Dos alumnes: un que treballa els tres trams i un que gairebé no fa res a
   l'últim, que és el que ha de sortir avisat. */
function classeDeProva(w) {
  const INICI = new Date(2026, 8, 14);
  const dia = n => {
    const d = new Date(INICI.getTime() + n * 86400000);
    d.setHours(18, 0, 0, 0);
    return d;
  };
  const f = [];
  [[19, 12], [40, 24], [61, 36]].forEach(([n, q]) => {
    f.push([marca(dia(n)), "prou@x.cat", "4tA", codiDe(w, [4], q, dia(n))]);
  });
  [[19, 12], [40, 24], [61, 26]].forEach(([n, q]) => {
    f.push([marca(dia(n)), "just@x.cat", "4tA", codiDe(w, [4], q, dia(n))]);
  });
  return fabrica(w, f);
}

{
  const { w, d } = obre();
  obreExamens(w, d, classeDeProva(w));
  d.getElementById("pr-va-lot").click();
  d.getElementById("lot-inici").value = "2026-09-14";
  d.getElementById("lot-periode").innerHTML = "";
  /* es reomple la llista de trams amb la data posada */
  d.getElementById("lot-inici").dispatchEvent(new w.Event("change"));
  d.getElementById("lot-periode").value = "2";
  d.getElementById("lot-genera").click();

  const files = () => Array.prototype.slice.call(
    d.querySelectorAll("#lot-taula tbody tr"));

  prova("hi ha una fila per alumne", () => {
    assert.strictEqual(files().length, 2, d.getElementById("lot-taula").textContent);
  });

  prova("la columna del tram mostra els exercicis nous d'aquell tram", () => {
    const tr = files().filter(r => /prou/.test(r.textContent))[0];
    assert.ok(/^12\b/.test(tr.children[2].textContent.trim()),
      tr.children[2].textContent);
  });

  prova("qui no arriba al mínim surt marcat amb «sota»", () => {
    const tr = files().filter(r => /just/.test(r.textContent))[0];
    assert.ok(/sota/.test(tr.children[2].textContent), tr.children[2].textContent);
  });

  prova("qui hi arriba no surt marcat", () => {
    const tr = files().filter(r => /prou/.test(r.textContent))[0];
    assert.ok(!/sota/.test(tr.children[2].textContent), tr.children[2].textContent);
  });

  prova("tot i l'avís, l'examen es genera igualment", () => {
    const caps = Array.prototype.slice.call(
      d.querySelectorAll("#pr-examen .pr-alumne"));
    assert.strictEqual(caps.length, 2, "esperava dos exàmens");
  });

  prova("l'avís surt al full de correcció...", () => {
    assert.ok(/mínim/.test(d.getElementById("pr-correccio").textContent),
      "el motiu no consta a la correcció");
  });

  prova("...i mai a l'examen de l'alumne", () => {
    assert.ok(!/mínim/.test(d.getElementById("pr-examen").textContent),
      "l'avís s'ha colat a l'examen que rep l'alumne");
  });

  prova("clicar una fila la marca i ofereix imprimir-la sola", () => {
    files()[0].click();
    assert.ok(files()[0].classList.contains("tria"));
    assert.ok(d.getElementById("lot-un-ex"), "falta el botó d'imprimir-ne un");
  });

  prova("cada full sap de quin alumne és", () => {
    const amb = Array.prototype.slice.call(
      d.querySelectorAll("#pr-examen .pr-alumne[data-alumne]"));
    assert.strictEqual(amb.length, 2);
  });
}


process.exit(resum() ? 0 : 1);
