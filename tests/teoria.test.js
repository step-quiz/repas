/* Prova del pont repàs → teoria.

   El que ha de vigilar aquesta bateria no és que el mapa existeixi, sinó que
   cada entrada apunti a un lloc REAL del llibre: curs que hi és, unitat que
   hi és, activitat que hi és, i PDF que existeix de debò. Un enllaç trencat
   no dona cap error visible —l'alumne clica i li surt una pàgina buida— i
   per tant no es detectaria sol. */
"use strict";
const fs = require("fs");
const path = require("path");
const { assert, seccio, prova, resum } = require("./arnes.js");

const ARREL = path.join(__dirname, "..");
const MAPA = path.join(ARREL, "data", "teoria.json");

/* El llibre és un repositori separat. Si no és al costat, les comprovacions
   que el necessiten se salten dient-ho, en comptes de fallar: qui treballa
   només a `repas` no ha de tenir la suite en vermell per això. */
const CANDIDATS = [
  path.join(ARREL, "..", "llibre-main"),
  path.join(ARREL, "..", "llibre"),
  path.join(ARREL, "..", "..", "llibre", "llibre-main")
];
const LLIBRE = CANDIDATS.find(p => fs.existsSync(path.join(p, "contingut")));

const mapa = JSON.parse(fs.readFileSync(MAPA, "utf8"));

seccio("El mapa de teoria");

prova("el fitxer és JSON vàlid i té les tres seccions", () => {
  ["items", "exercicis", "blocs"].forEach(k =>
    assert.ok(mapa[k], "falta la secció " + k));
  assert.ok(/^https?:\/\//.test(mapa.base), "cal una base absoluta: " + mapa.base);
});

function totes() {
  const out = [];
  ["items", "exercicis", "blocs"].forEach(sec =>
    Object.keys(mapa[sec]).forEach(k =>
      out.push({ sec, clau: k, d: mapa[sec][k] })));
  return out;
}

prova("cada entrada té curs i unitat", () => {
  totes().forEach(({ sec, clau, d }) => {
    assert.ok(d.curs, sec + "/" + clau + ": sense curs");
    assert.ok(Number.isInteger(d.ud), sec + "/" + clau + ": unitat no entera");
  });
});

prova("els blocs mapats existeixen de debò al banc", () => {
  const taules = path.join(ARREL, "tools", "_taules.json");
  if (!fs.existsSync(taules)) return;          // sense compilar, no es pot
  const T = JSON.parse(fs.readFileSync(taules, "utf8"));
  const banc = path.join(ARREL, "tools", "_banc.json");
  if (!fs.existsSync(banc)) return;
  const B = JSON.parse(fs.readFileSync(banc, "utf8"));
  /* Les claus de bloc poden portar el full al davant («8:semblanca»), que
     és el que desambigua els noms repetits entre fulls. S'accepten les dues
     formes, però la validació ha de comprovar que la parella full+bloc
     existeixi de debò: si algú escriu «9:tales», que no existeix, ha de
     fallar aquí i no descobrir-se el dia que un alumne hi cliqui. */
  const perFull = new Set();
  const blocs = new Set();
  Object.values(B).forEach(i => blocs.add(i.bloc));
  /* `_banc.json` està indexat per id i no diu de quin full és cada ítem;
     `_taules.json` sí que agrupa per full, però només en guarda els ids.
     Es creuen els dos per obtenir les parelles full+bloc reals. */
  Object.keys(T.fulls).forEach(n => {
    (T.fulls[n].items || []).forEach(id => {
      const it = B[String(id)];
      if (it) perFull.add(n + ":" + it.bloc);
    });
  });
  const exs = new Set(Object.values(B).map(i => String(i.ex)));
  Object.keys(mapa.blocs).forEach(b =>
    assert.ok(b.includes(":") ? perFull.has(b) : blocs.has(b),
      "el bloc «" + b + "» no existeix al banc"));
  Object.keys(mapa.exercicis).forEach(e =>
    assert.ok(exs.has(e), "l'exercici " + e + " no existeix al banc"));
  Object.keys(mapa.items).forEach(i =>
    assert.ok(B[i], "l'ítem " + i + " no existeix al banc"));
});

if (!LLIBRE) {
  console.log("\n\u001b[33m⊘ Les comprovacions contra el llibre se salten: no s'ha"
    + " trobat el repositori del llibre al costat.\u001b[0m");
} else {
  seccio("Cada enllaç va a parar a un lloc real del llibre");

  const cursos = {};
  for (const c of fs.readdirSync(path.join(LLIBRE, "contingut"))) {
    const f = path.join(LLIBRE, "contingut", c, "course.json");
    const m = path.join(LLIBRE, "contingut", c, "pdfs", "manifest.json");
    if (fs.existsSync(f)) {
      cursos[c] = { meta: JSON.parse(fs.readFileSync(f, "utf8")),
                    pdfs: new Set(fs.existsSync(m)
                      ? JSON.parse(fs.readFileSync(m, "utf8")).pdfs : []) };
    }
  }

  prova("tots els cursos citats existeixen", () => {
    totes().forEach(({ sec, clau, d }) =>
      assert.ok(cursos[d.curs], sec + "/" + clau + ": el curs «" + d.curs
        + "» no existeix al llibre"));
  });

  prova("totes les unitats citades existeixen", () => {
    totes().forEach(({ sec, clau, d }) => {
      const u = cursos[d.curs].meta.units.find(x => x.num === d.ud);
      assert.ok(u, sec + "/" + clau + ": " + d.curs + " no té la unitat " + d.ud);
    });
  });

  prova("totes les activitats citades existeixen", () => {
    totes().forEach(({ sec, clau, d }) => {
      if (!d.act) return;                      // `act` és opcional
      const u = cursos[d.curs].meta.units.find(x => x.num === d.ud);
      const a = u.activities.find(x => x.num === d.act);
      assert.ok(a, sec + "/" + clau + ": " + d.curs + " UD" + d.ud
        + " no té l'activitat " + d.act);
    });
  });

  prova("el PDF de cada activitat existeix", () => {
    totes().forEach(({ sec, clau, d }) => {
      if (!d.act) return;
      const c = cursos[d.curs];
      const f = c.meta.pdfPrefix + "-ud" + d.ud + "-" + d.act + ".pdf";
      assert.ok(c.pdfs.has(f), sec + "/" + clau + ": no hi ha " + f);
    });
  });

  prova("el títol anotat coincideix amb el del llibre", () => {
    const dolents = [];
    totes().forEach(({ sec, clau, d }) => {
      if (!d.act || !d.titol) return;
      const u = cursos[d.curs].meta.units.find(x => x.num === d.ud);
      const a = u.activities.find(x => x.num === d.act);
      /* Es compara el començament: al mapa s'hi escurcen els títols llargs,
         però si divergeixen del tot vol dir que el llibre s'ha reorganitzat
         i el mapa apunta a una altra cosa sense que ningú se n'hagi adonat. */
      const curt = d.titol.slice(0, 18).toLowerCase();
      if (!a.title.toLowerCase().startsWith(curt)) {
        dolents.push(sec + "/" + clau + ": el mapa diu «" + d.titol
          + "» i el llibre diu «" + a.title + "»");
      }
    });
    assert.deepStrictEqual(dolents, [], dolents.join(" | "));
  });

  seccio("El cas que va motivar tot això");

  prova("l'IVA (281) va a 2n ESO, no a 4t", () => {
    const d = mapa.exercicis["281"];
    assert.strictEqual(d.curs, "2eso");
    const u = cursos["2eso"].meta.units.find(x => x.num === d.ud);
    const a = u.activities.find(x => x.num === d.act);
    assert.ok(/IVA/i.test(a.subtitle || ""),
      "l'activitat de destí no parla d'IVA: " + (a.subtitle || ""));
  });

  prova("els descomptes encadenats (280) van al factor multiplicador de 4t", () => {
    const d = mapa.exercicis["280"];
    assert.strictEqual(d.curs, "4eso");
    const u = cursos["4eso"].meta.units.find(x => x.num === d.ud);
    const a = u.activities.find(x => x.num === d.act);
    assert.ok(/factor multiplicador/i.test(a.title), a.title);
  });

  prova("dos exercicis del mateix bloc poden anar a cursos diferents", () => {
    assert.notStrictEqual(mapa.exercicis["280"].curs, mapa.exercicis["281"].curs,
      "si tots dos van al mateix curs, la finor per exercici no serveix de res");
  });
}

process.exit(resum() ? 0 : 1);
