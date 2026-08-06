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

process.exit(resum() ? 0 : 1);
