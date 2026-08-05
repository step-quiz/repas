/* Genera un full de respostes versemblant per provar l'analitzador.
   Els codis són reals: els fa el mateix js/codi.js del projecte, i per tant
   validen, es descodifiquen i es poden analitzar com els de debò.

   Quatre alumnes amb perfils diferents al llarg del 1r trimestre
   (20/9/2026 – 5/12/2026), pensats perquè cadascun ensenyi una cosa de
   l'analitzador. Vegeu EXEMPLE-LLEGEIX-ME.md.

   ús:  node tools/fes-exemple.js > exemple-respostes.csv
*/
const fs = require("fs"), path = require("path");
const ARREL = path.join(__dirname, "..");
global.window = global;
eval(fs.readFileSync(path.join(ARREL, "js/codi-taules.js"), "utf8"));
eval(fs.readFileSync(path.join(ARREL, "js/codi.js"), "utf8"));
const T = window.RE_TAULES, RE = window.RE_CODI;

/* Generador pseudoaleatori amb llavor, perquè el fitxer surti sempre igual. */
let llavor = 20260920;
const rnd = () => { llavor = (llavor * 1103515245 + 12345) & 0x7fffffff; return llavor / 0x7fffffff; };
const tria = a => a[Math.floor(rnd() * a.length)];

/* Cua d'exercicis, bloc a bloc. Es demana per blocs i no per fulls sencers
   perquè un alumne real no es fa els 140 exercicis del Full 1 abans de tocar
   el Full 2: va picant d'aquí i d'allà segons el que li toca repassar. */
function cua(blocs) {
  const q = [];
  blocs.forEach(([n, id]) => {
    const t = T.fulls[n], b = t.blocs.filter(x => x[0].toLowerCase().indexOf(id) >= 0)[0];
    if (!b) throw new Error("bloc no trobat: " + n + "/" + id);
    for (let i = b[1]; i <= b[2]; i++) q.push({ n, id: t.items[i], d: +t.dif[i] });
  });
  return q;
}

/* Un alumne va acumulant estat; cada sessió n'hi afegeix un tros. */
function Alumne(correu, grup, fulls) {
  this.correu = correu; this.grup = grup;
  this.cua = cua(fulls); this.i = 0; this.estat = {}; this.files = [];
}
Alumne.prototype.sessio = function (quan, quants, mescla, errs, diag) {
  for (let k = 0; k < quants && this.i < this.cua.length; k++) {
    const x = this.cua[this.i++];
    this.estat[x.n + ":" + x.id] = tria(mescla);
  }
  this.emet(quan, errs, diag);
};
Alumne.prototype.emet = function (quan, errs, diag) {
  const perFull = {};
  Object.keys(this.estat).forEach(k => {
    const [n, id] = k.split(":"); (perFull[n] = perFull[n] || {})[id] = this.estat[k];
  });
  const fulls = Object.keys(perFull).map(n =>
    ({ n: +n, estats: T.fulls[n].items.map(id => perFull[n][id] || "") }));
  const codi = RE.genera({ fulls, ara: quan, errs: errs || [], diag: diag || null });
  this.files.push({ quan, codi });
  return codi;
};
Alumne.prototype.reenvia = function (quan) {
  this.files.push({ quan, codi: this.files[this.files.length - 1].codi });
};

const D = (mes, dia, h, m) => new Date(2026, mes - 1, dia, h, m, 0);

// ── mescles d'estats, de pitjor a millor ────────────────────────────────
const FLUIX = ["fallat", "pista", "pista", "segon", "net", "fallat", "vist"];
const MITJA = ["pista", "segon", "net", "net", "fallat", "segon"];
const BO = ["net", "net", "net", "segon", "pista"];
const MOLTBO = ["net", "net", "net", "net", "segon"];

const alumnes = [];

// ── AINA: constant i millora clarament. Fa el test inicial. ─────────────
{
  const a = new Alumne("aina.puig@insterrassa.cat", "1r BAT A",
    [[1, "enters"], [1, "divisibilitat"], [2, "càlcul de potències"],
     [4, "igualtats notables"], [4, "factor comú"]]);
  const diag = T.proves.map((p, i) => ({ estat: i < 5 ? 1 : (i < 10 ? 2 : 3), encert: i % 3 === 0 }));
  a.sessio(D(9, 22, 18, 40), 5, FLUIX, [["SIGNE_FINAL", 3]], diag);
  a.sessio(D(9, 29, 19, 10), 7, FLUIX, [["SIGNE_FINAL", 4], ["PARENTESI_NO_DISTRIBUIT", 2]], diag);
  a.sessio(D(10, 6, 18, 55), 6, MITJA, [["SIGNE_FINAL", 5], ["TRACTAT_COM_EXACTE", 2]], diag);
  a.sessio(D(10, 14, 20, 5), 8, MITJA, [["TRACTAT_COM_EXACTE", 4], ["SIGNE_FINAL", 5]], diag);
  a.sessio(D(10, 21, 17, 30), 7, MITJA, [["TRACTAT_COM_EXACTE", 5], ["NO_RESTA_ANTEPERIODE", 3]], diag);
  a.sessio(D(10, 28, 19, 25), 8, BO, [["NO_RESTA_ANTEPERIODE", 4], ["TRACTAT_COM_EXACTE", 5]], diag);
  a.sessio(D(11, 4, 18, 15), 9, BO, [["NO_RESTA_ANTEPERIODE", 4], ["EXPONENT_COM_PRODUCTE", 3]], diag);
  a.sessio(D(11, 11, 19, 45), 8, BO, [["EXPONENT_COM_PRODUCTE", 4], ["NO_RESTA_ANTEPERIODE", 4]], diag);
  a.sessio(D(11, 18, 18, 20), 9, MOLTBO, [["EXPONENT_COM_PRODUCTE", 4], ["SIGNE_FINAL", 6]], diag);
  a.sessio(D(11, 25, 20, 30), 7, MOLTBO, [["EXPONENT_COM_PRODUCTE", 4], ["SIGNE_FINAL", 6]], diag);
  a.sessio(D(12, 2, 18, 50), 8, MOLTBO, [["EXPONENT_COM_PRODUCTE", 5], ["SIGNE_FINAL", 6]], diag);
  alumnes.push(a);
}

// ── BERNAT: no fa res fins al final i llavors s'ho empassa tot de cop ───
{
  const b = new Alumne("bernat.rius@insterrassa.cat", "1r BAT A",
    [[1, "enters"], [1, "divisibilitat"], [2, "càlcul de potències"],
     [2, "exponent negatiu"]]);
  b.sessio(D(10, 2, 12, 10), 4, MITJA, [["SIGNE_FINAL", 2]]);
  b.sessio(D(11, 24, 22, 40), 26, BO, [["SIGNE_FINAL", 6], ["TRACTAT_COM_EXACTE", 4]]);
  b.sessio(D(11, 25, 23, 15), 24, BO, [["TRACTAT_COM_EXACTE", 7], ["SIGNE_FINAL", 6]]);
  b.sessio(D(11, 26, 23, 50), 22, BO, [["TRACTAT_COM_EXACTE", 9], ["SIGNE_FINAL", 6]]);
  alumnes.push(b);
}

// ── CLÀUDIA: irregular, li costa i no acaba d'arrencar ─────────────────
{
  const c = new Alumne("claudia.moya@insterrassa.cat", "1r BAT B",
    [[1, "enters"], [3, "termes d'una successió"], [3, "progressions aritmètiques"]]);
  c.sessio(D(9, 24, 16, 20), 8, FLUIX, [["SIGNE_FINAL", 4], ["MCD_EN_LLOC_DE_MCM", 2]]);
  c.sessio(D(10, 9, 17, 5), 6, FLUIX, [["MCD_EN_LLOC_DE_MCM", 4], ["SIGNE_FINAL", 5]]);
  c.sessio(D(10, 30, 16, 45), 7, FLUIX, [["MCD_EN_LLOC_DE_MCM", 5], ["TRACTAT_COM_EXACTE", 3]]);
  c.sessio(D(11, 20, 17, 30), 6, FLUIX, [["TRACTAT_COM_EXACTE", 5], ["MCD_EN_LLOC_DE_MCM", 5]]);
  c.sessio(D(12, 4, 16, 10), 7, MITJA, [["TRACTAT_COM_EXACTE", 6], ["PROGRESSIO_INVENTADA", 3]]);
  alumnes.push(c);
}

// ── DANI: fa poc i reenvia el mateix codi per semblar actiu ─────────────
{
  const d = new Alumne("dani.serra@insterrassa.cat", "1r BAT B",
    [[1, "enters"], [1, "divisibilitat"]]);
  d.sessio(D(9, 25, 15, 30), 6, BO, [["SIGNE_FINAL", 2]]);
  d.reenvia(D(10, 8, 15, 40));
  d.reenvia(D(10, 22, 14, 55));
  d.sessio(D(11, 5, 15, 20), 3, MITJA, [["SIGNE_FINAL", 3]]);
  d.reenvia(D(11, 19, 15, 10));
  d.reenvia(D(12, 3, 14, 45));
  alumnes.push(d);
}

// ── el full ─────────────────────────────────────────────────────────────
const files = [];
alumnes.forEach(a => a.files.forEach(f => files.push({ a, f })));

/* Dos retocs perquè el full sembli de debò i es vegin els avisos:
   - un enviament fet hores després de generar el codi (avís de temps)
   - un codi mal copiat, amb un caràcter canviat (control trencat) */
const tard = files.filter(x => x.a.correu.startsWith("claudia"))[2];
tard.retard = 190;
const trencat = files.filter(x => x.a.correu.startsWith("bernat"))[2];
trencat.f = { quan: trencat.f.quan, codi: trencat.f.codi.slice(0, 34) + "X" + trencat.f.codi.slice(35) };

files.sort((x, y) => x.f.quan - y.f.quan);

/* El Google Form del centre desa la marca de temps en mes/dia/any, que és
   el que fa el full de l'exemple real. L'analitzador ho detecta sol
   comparant-ho amb la data que porta el codi a dins. */
function marca(d, retard) {
  const t = new Date(d.getTime() + (retard || 0) * 60000 + Math.floor(rnd() * 50) * 1000);
  const p = n => ("0" + n).slice(-2);
  return (t.getMonth() + 1) + "/" + t.getDate() + "/" + t.getFullYear() + " " +
    p(t.getHours()) + ":" + p(t.getMinutes()) + ":" + p(t.getSeconds());
}

const linies = ["Marca de temps;Adreça electrònica;Selecciona la classe;" +
                "Enganxa aquí el codi que has copiat a step-quiz"];
files.forEach(x => {
  linies.push([marca(x.f.quan, x.retard), x.a.correu, x.a.grup, x.f.codi].join(";"));
});
process.stdout.write("\ufeff" + linies.join("\n") + "\n");
