# Revisió: mini-examen de 3 setmanes, nota de feina i format RC4

## Què demanava el professorat

1. Cada tram de 3 setmanes, entre 10 i 20 exercicis. Com més, més nota.
   Només compten els 20 primers.
2. La primera pista gairebé no penalitza; la segona, més, però no gaire.
3. L'examen del tram surt exclusivament de la feina d'aquelles 3 setmanes.

## Què s'ha fet

**Nota de feina del tram** (`RE_CODI.notaTram`, `js/codi.js`). Dels exercicis
del tram, per ordre de fet, compten els 20 primers. Cada un aporta el seu valor
sobre 10 (a la primera 1 · una pista 0,95 · dues o més 0,8 · segon intent 0,7 ·
fallat 0) i, amb la suma x, `nota = min(10, 8·∛(x/10))`: 10 a la primera fan
un 8 i 20 un 10. Un fallat no suma ni resta.

**Política de pistes** (`estatDe`, `js/nucli.js`). Un encert al segon intent és
`segon` encara que s'hagin obert pistes. Abans, obrir una pista després d'un
error donava `pista`; amb el valor nou (9,5) això hauria esborrat l'error.

**Format RC4** (`js/codi.js`). Estats en base 7 amb el nou `pistes` (dues o
més), sense perdre capacitat (7^7 < 32^4). Bloc DATES opcional (bit 14 de la
màscara): el dia del primer intent de cada exercici de les últimes 12
setmanes, en ordre cronològic. RC1-RC3 es continuen llegint; un `pista` antic
es llegeix com a una pista.

**Registre** (`js/nucli.js`). Cada exercici desa `tf`, el moment del primer
intent, que no canvia mai més. Els exercicis anteriors reben un sol cop una
data aproximada (`ts`, marcada amb `tfa`), llevat dels importats.

**Calendari** (`js/calendari.js`). `FEINA_MINIMA`/`FEINA_MAXIMA` (10/20) i
`tramExacte()`: una data d'una setmana de descans, o de fora del curs, no és
de cap tram. `tramDe()` es conserva per a les dates deduïdes d'enviaments.

**Analitzador, mode estàndard.** Desapareixen els pesos 3-2-1 entre trams i la
casella d'exercicis oberts, que no feia res (els `vist` es descartaven abans).
Hi ha mínim, màxim i valors editables, i una taula amb els fets al tram, com
els va fer i la nota. També hi ha una baixada en CSV. El full de correcció diu
la nota de feina i, per pregunta, el dia en què es va fer. Amb codis sense
dates, l'analitzador dedueix la data com abans i ho avisa.

**Lloc de l'alumne.** El botó Codi diu quants exercicis porta al tram en curs.
L'avís de final de tram també ho diu. La recuperació des d'un codi conserva
les dates.

**Exemple de mostra.** Els codis porten dates i pistes. La laia passa de 20 i
en nil envia un sol codi a final de trimestre, però la feina se li reparteix
bé pels tres trams.

## Verificació

- `sh tests/executa.sh`: Python 183, codi 44 (abans 31), registre 20 (abans
  15), calendari 27 (abans 22), i les quatre bateries del mini-examen, totes
  en verd.
- `tests/mini_examen.test.js` s'ha reescrit. Vigilava els pesos entre trams, i
  ara vigila les tres regles noves: només el tram, els 20 primers i la
  fórmula de la nota.
- A `tests/analitzador.test.js`, la secció «un pes a zero es diu» s'ha
  substituït per una de nova. **No s'ha pogut executar aquí**: jsdom no es pot
  instal·lar sense xarxa. Els mateixos casos s'han comprovat a Chromium sense
  capçalera: la taula, «sota», els avisos, 5 preguntes només dels 20 primers
  del tram, la nota 10,0 i el CSV. Convé passar-la amb
  `npm install --no-save jsdom`.
- També a Chromium, al lloc de l'alumne:
  - una pista dona `pista` i dues donen `pistes`;
  - un error, una pista i un encert donen `segon`;
  - el codi que en surt és RC4 amb les dates.
- Hi ha una fixture RC3 real, generada abans del canvi, que es continua llegint
  igual.
