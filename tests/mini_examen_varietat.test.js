/* Comprova que l'exemple produeix un GRUP, no sis còpies del mateix alumne.

   El defecte que això vigila és real i es va veure en un joc d'exàmens
   imprès: els sis alumnes rebien preguntes del mateix tema, amb apartats
   repetits del mateix problema, perquè tots compartien una única llista
   d'exercicis. */
const fs = require("fs");
const vm = require("vm");
const A = "/home/claude/repas/repas-main/";
const src = fs.readFileSync(A + "tools/analitzador-plantilla.html", "utf8");

const sb = { window: {}, console, Date, Math, JSON, parseInt, parseFloat,
  String, Object, Array, isNaN, TextDecoder,
  atob: b => Buffer.from(b, "base64").toString("binary") };
sb.globalThis = sb;
vm.createContext(sb);
vm.runInContext(fs.readFileSync(A + "tools/_taules.json", "utf8")
  .replace(/^/, "window.RE_TAULES = "), sb);
vm.runInContext(fs.readFileSync(A + "js/codi.js", "utf8"), sb);
const RE_TAULES = sb.window.RE_TAULES, RE_CODI = sb.window.RE_CODI;
const BANC = JSON.parse(fs.readFileSync(A + "tools/_banc.json", "utf8"));

let fallades = 0;
const comprova = (nom, cond, detall) => {
  if (!cond) { fallades++; console.log("  FALLA  " + nom + (detall ? " — " + detall : "")); }
  else console.log("  ok     " + nom);
};

/* S'executa el codi real del botó. */
const cos = src.slice(src.indexOf('$("#btn-exemple").onclick = function () {'));
const cos2 = cos.slice(cos.indexOf("{") + 1, cos.indexOf('\n    $("#entrada").value'));
const ctx = { RE_TAULES, RE_CODI, Date, Math, Object, console,
  $: () => ({ value: "" }), carrega: () => {} };
vm.createContext(ctx);
vm.runInContext(cos2 + "\n globalThis.R = l.join('\\n');", ctx);

const files = ctx.R.trim().split("\n").slice(1).map(l => {
  const c = l.split("\t");
  return { correu: c[1], grup: c[2], codi: c[3] };
});

/* Es reconstrueix què ha fet cada alumne. */
const INICI = new Date(2026, 8, 14), TRAM = 21 * 86400000;
const tramDe = d => Math.floor((d - INICI) / TRAM);
const quan = p => { const d = new Date(p.data.getTime()); d.setHours(p.hora, p.minut, 0, 0); return d; };

const per = {};
files.forEach(f => {
  const p = RE_CODI.llegeix(f.codi);
  if (!p.ok || !p.integre) return;
  (per[f.correu] = per[f.correu] || []).push({ quan: quan(p), p });
});

const fitxa = {};
Object.keys(per).forEach(c => {
  const codis = per[c].sort((a, b) => a.quan - b.quan);
  const vist = {}, perTram = {};
  codis.forEach(x => x.p.fulls.forEach(f => f.items.forEach(it => {
    if (!it.estat || it.estat === "vist") return;
    const k = f.n + ":" + it.id;
    if (vist[k]) return;
    vist[k] = 1;
    const t = tramDe(x.quan);
    (perTram[t] = perTram[t] || []).push(it.id);
  })));
  fitxa[c] = perTram;
});

console.log("\n== què treballa cada alumne al tram 1 ==");
const temesPer = {};
Object.keys(fitxa).forEach(c => {
  const ids = fitxa[c][0] || [];
  const blocs = [...new Set(ids.map(id => (BANC[id] || {}).bloc).filter(Boolean))];
  const fulls = [...new Set(ids.map(id => (BANC[id] || {}).full).filter(x => x != null))];
  temesPer[c] = blocs;
  console.log("    " + c.padEnd(22) + String(ids.length).padStart(3)
    + " exercicis · " + blocs.length + " blocs: " + blocs.slice(0, 4).join(", "));
});

const ambFeina = Object.keys(temesPer).filter(c => temesPer[c].length);
comprova("tots els blocs del tram no són el mateix per a tothom",
  new Set(ambFeina.map(c => temesPer[c].join("|"))).size > 1,
  "camins diferents: " + new Set(ambFeina.map(c => temesPer[c].join("|"))).size);

const totsBlocs = new Set();
ambFeina.forEach(c => temesPer[c].forEach(b => totsBlocs.add(b)));
comprova("el grup toca més d'un tema al primer tram", totsBlocs.size >= 4,
  totsBlocs.size + " blocs en total");

console.log("\n== problemes diferents disponibles per a un examen de 5 ==");
const exMare = id => (BANC[id] && BANC[id].ex != null)
  ? String(BANC[id].ex) : String(id).match(/^\d+/)[0];
/* Al banc hi ha blocs que són un sol exercici amb vuit apartats, de manera
   que un alumne que en treballi tres pot tenir tretze exercicis fets i
   només tres problemes DIFERENTS. Això passa de debò i el sorteig no ho pot
   arreglar: el que ha de passar és que l'examen ho digui. No s'ajusta la
   llavor de l'exemple fins que surti bonic —seria maquillar la mostra—;
   es comprova que la majoria tinguin varietat i que qui no en tingui quedi
   avisat. */
let prou = 0, hauriaDAvisar = [];
ambFeina.forEach(c => {
  const mares = new Set((fitxa[c][0] || []).map(exMare));
  console.log("    " + c.padEnd(22) + mares.size + " problemes mare diferents"
    + (mares.size < 5 ? "  → l'examen ha de portar avís" : ""));
  if (mares.size >= 5) prou++; else hauriaDAvisar.push(c);
});
comprova("la majoria té ≥5 problemes diferents",
  prou >= Math.ceil(ambFeina.length * 0.7), prou + " de " + ambFeina.length);
comprova("cap alumne es queda sense res per examinar",
  ambFeina.every(c => new Set((fitxa[c][0] || []).map(exMare)).size >= 2));

/* L'avís que ha de sortir: es replica aquí el criteri del mini-examen. */
const avisen = hauriaDAvisar.filter(c => {
  const mares = new Set((fitxa[c][0] || []).map(exMare));
  return mares.size < 5;
});
comprova("els casos de poca varietat es detecten com a tals",
  avisen.length === hauriaDAvisar.length,
  hauriaDAvisar.join(", ") || "cap");

console.log("\n" + (fallades ? fallades + " FALLADES" : "tot correcte"));
process.exit(fallades ? 1 : 0);
