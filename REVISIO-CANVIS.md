# Revisió: correccions i prova escrita

Tot el que hi ha aquí està verificat executant el codi, no llegint-lo. La
suite passa de 265 a **291 comprovacions**, totes en verd
(`sh tests/executa.sh`, amb `npm install --no-save jsdom`).

---

## 1. Prova escrita (pestanya nova de l'analitzador)

Un alumne pot demanar de fer un examen presencial en paper sobre la feina que
ha anat fent. La prova es composa des del seu últim codi.

### Per què s'indexa per id i no per posició

És la decisió que ho condiciona tot. El projecte manté **dos ordres** dels
ítems: el de presentació (`data/fullN.js`) i l'append-only del codi
(`tools/codi-ordre.json`, documentat a `build_codi.py`). Coincideixen a onze
fulls i **no coincideixen en 42 de 47 posicions al Full 9**, perquè els
exercicis 170f–170i es van recuperar més tard i van al final de l'ordre de
codificació.

Una implementació que indexi `banc.items[idx]` sembla correcta fins que algú
prova el Full 9. Amb `_banc.json` indexat per id (`RE_BANC["171"]`), la
pregunta que surt és sempre la que l'alumne va fer. La comprovació és
permanent i es fa **amb el Full 9 a propòsit**:

    Prova escrita — només exercicis que l'alumne ha fet de veritat
      ✓ la prova no és buida
      ✓ cap pregunta és d'un exercici que l'alumne no ha treballat
      ✓ cap pregunta s'ha quedat sense identificar

### Repartiment i mida

Cada bloc entra en proporció a la feina feta (residus més grans), amb llindar
mínim configurable. Dues coses que calia arreglar:

- **El sostre per bloc.** Es limita `total` a la suma disponible *abans* de
  repartir, i el que sobra quan un bloc satura es redistribueix entre els que
  encara tenen marge, de manera que la suma arriba a la mida triada sempre que
  globalment hi hagi prou exercicis.
- **Cap mínim d'1 per bloc.** Amb un mínim forçat d'una pregunta per bloc, un
  alumne amb els dotze fulls treballats té 56 blocs admesos i una prova
  «curta» de 8 se n'anava a **56 preguntes**. Test permanent amb aquest cas.

Si tot i així surten menys preguntes de les triades, **es diu**:

> Has triat 20 preguntes i n'han sortit 5: entre els blocs marcats no hi ha
> prou exercicis fets. Baixa el llindar per bloc, marca més blocs, o tria una
> mida més curta.

### Varietat dins d'un bloc

El 63 % dels 309 exercicis del banc tenen més d'un apartat (2,89 de mitjana).
Triar «els primers per prioritat d'estat» donava proves com
`1a, 1b, 1c, 1d, 1e, 1f, 2a, 2b`: vuit preguntes, dos problemes.

La tria dona pes als que van costar (`fallat` 3 · `pista` 2,2 · `segon` 1,6 ·
`net` 1) més un component aleatori, i no repeteix exercici mare mentre en
quedin de nous. Efecte secundari volgut: «torna a triar exercicis» ara canvia
la selecció de debò, cosa que amb un ordre estricte era impossible.

L'exercici mare surt de `RE_BANC[id].ex`, amb l'id com a reserva: els 892
ítems segueixen el patró `<número><lletra>` i el número coincideix amb `ex` en
els 892 casos, sense una sola excepció.

### Enunciats que s'entenen fora del seu full

21 apartats no porten encapçalament perquè el porta el primer germà
(`ex_text=""` al generador). Dins d'un full es llegeixen seguits i no passa
res; en una prova on l'exercici surt sol, la pregunta quedava en:

    3.
       16 cm
       _______________________

`taula_banc()` l'hereta del primer germà amb encapçalament. El 127b ara diu
«Troba l'apotema d'un hexàgon regular el costat del qual mesura: 16 cm».
Afecta sobretot el Full 7 (120b/c, 121b/c/d, 123b/c/d, 124b/c, 126b, 127b/c,
140b/c). **Nota**: el mateix problema existeix a `practica.html` quan s'hi
arriba des de l'itinerari; això no ho he tocat.

### Integritat

Un codi que es llegeix però el control del qual no quadra **no genera cap
prova**, ni triant l'alumne del desplegable ni enganxant el codi a mà, i es
diu per què. Al desplegable, aquests alumnes surten marcats amb «⚠ codi
alterat» en lloc de desaparèixer: si no hi són, el professor no sap per què.

### Impressió

L'examen i el full de correcció són dues seccions amb **dos botons
d'impressió separats** (`data-imprimeix` al `<body>` decideix quina surt).
Un full de solucions no pot sortir mai per la impressora al costat de
l'examen per descuit. `page-break-inside:avoid` per pregunta, capçalera amb
nom, data i nota, i casella per amagar el tema a l'enunciat.

### Una cursa que no era només de les proves

El camp de codi tenia un retard de 300 ms per no rellegir a cada tecla, i la
lectura depenia que aquest retard hagués passat. Un professor que enganxa el
codi i clica «Genera la prova» de seguida no obtenia res. `sincronitza()`
llegeix el que hi ha en aquell moment i la criden tant el retard com
`generaProva()`.

---

## 2. Correccions de la revisió inicial

### Demanar una pista ja no penalitza més que endevinar

`PES.pista` era **6** i `PES.segon` **7**. Amb quatre opcions i dos intents,
provar a l'atzar acaba en `segon` la meitat de les vegades; llegir la pista i
respondre bé donava 6 garantits. Com que d'això en surt una nota, l'alumne que
calcula aprenia a no demanar mai una pista. Ara `pista` val **8**:
`net (10) > pista (8) > segon (7)`. Test permanent que fixa l'ordre.

### L'error del primer intent ja no s'esborra

En encertar s'escrivia `err: ""` i el panell filtrava els buits: l'error que
l'alumne comet sempre però rectifica al segon intent — el més interessant de
tots — no arribava mai ni al panell ni al codi. `RE.apuntaError()` acumula
`errs`; `err` es manté pel format antic. El recompte del codi ara compta
l'historial sencer.

### El panell «els errors que repeteixes» ja no dona consells d'un altre tema

`pintaErrors()` donava prioritat al text genèric del catàleg TAX. Unes quantes
etiquetes s'han acabat fent servir de calaix de sastre: qui s'oblidava les
dues bases d'un cilindre al Full 9 llegia «revisa els polinomis grau a grau»
(`TERME_OBLIDAT_OPERACIO`). Ara el text genèric només s'usa si l'etiqueta viu
en **un** sol bloc del full; si no, es mostra el diagnòstic de l'exercici real
on l'alumne ha fallat, amb el bloc entre parèntesis.

Això tapa el símptoma. **El deute segueix obert**: 47 etiquetes s'usen en 4
blocs o més i concentren el 51 % dels 2.676 usos, i per a l'anàlisi agregada
del professorat continuen sent mentida. Les pitjors estan llistades a
`README.md`, secció «Abans de publicar».

### Trampa de teclat després del primer error

En fallar, l'opció triada es desactivava però conservava `tabIndex = 0` i
totes les altres el `-1`. Com que un botó `disabled` no és focusable, el grup
sencer quedava fora de l'abast del tabulador: amb teclat era **impossible**
tornar-hi per fer el segon intent. A més, `aria-checked="true"` es mantenia
sobre l'opció desactivada mentre «Comprova» estava bloquejat. `marca(-1)`
mou el tabindex a la primera opció encara viva. Dos tests permanents.

### El mapa d'apartats

- **15 px → 26 px** amb 4 px de separació. La WCAG 2.2 (SC 2.5.8) en demana
  24. Amb 15 px i 140 caselles, encertar la que es vol en un Chromebook en
  mode tauleta no era possible.
- **Forma, no només color.** Sota deuteranòpia, l'ambre de «al segon intent» i
  el vermell de «per revisar» tenien un contrast d'**1,11:1** entre ells:
  literalment el mateix color, per a un o dos alumnes de cada aula. Ara cada
  estat porta signe: `✓` blanc a la primera, `✓` verd amb pista, `2` al segon
  intent, `×` per revisar, `…` començada. La llegenda igual.

### Hover enganxós en tàctil

Les 10 regles `:hover` van dins de `@media (hover:hover)`. En una pantalla
tàctil Chrome deixa el hover enganxat després del toc, i com que `.opcio:hover`
i `.opcio.tria` fan servir el mateix blau, una opció ja tocada semblava
seleccionada.

### KaTeX en local

Vendoritzat a `vendor/katex/` (608 kB amb només woff2). El CDN era la
dependència més arriscada del projecte: si el filtre del centre bloqueja
jsdelivr, la degradació «elegant» deixa `$\left(\dfrac{2}{3} \cdot 5 -
\dfrac{3}{4}\right)$` a la pantalla d'un alumne de 4t d'ESO. També treu una
transferència d'IP a un tercer. Actualitzades les 15 pàgines i `tools/build.py`.
L'analitzador prova primer la còpia local i cau al CDN si no la troba, perquè
és un fitxer únic que el professorat pot desar en qualsevol lloc.

### Recuperar el progrés en un altre dispositiu

El progrés viu al `localStorage`. Amb carros de Chromebooks compartits o una
política que esborra dades de lloc en tancar sessió, es perd un trimestre de
feina. `RE_CODI` ja sabia llegir l'estat de cada exercici des del codi; només
faltava el camí de tornada. La finestra del codi porta ara «Canvies
d'ordinador? Recupera la teva feina», amb dues accions separades: **afegir
només el que falti** (no toca res del que ja hi ha) i **substituir-ho tot**
(amb confirmació). Un codi amb el control trencat es rebutja.

### Injecció pel paràmetre `?full`

`document.write('<script src="data/full' + FULL_N + ...')` amb el paràmetre en
cru permetia tancar l'atribut i l'etiqueta i executar JavaScript arbitrari. En
un lloc estàtic sense comptes la gravetat és baixa, però n'hi havia prou amb
un enllaç per escriure el `localStorage` d'un alumne — i el `localStorage` és
el que genera el codi que es qualifica. Ara es valida contra
`^([1-9]|1[0-2])$` i, si no passa, es mostra la pàgina de «full no preparat».
Tres tests permanents (injecció, recorregut de directoris, full vàlid).

Al escriure el comentari que explicava això vaig introduir jo mateix el mateix
tipus de bug: una etiqueta de tancament dins d'un comentari d'un `<script>`
inline el trenca igualment. Ho vaig veure perquè la prova d'extrem a extrem
va sortir en vermell; queda com a recordatori de per què les proves van
abans que la confiança.

### `tests/executa.sh` ja no menteix

Deia «Tot en verd» encara que tres blocs se saltessin per falta de `jsdom` —
92 comprovacions de 291. Ara detecta `jsdom` i, si no hi és, dona un avís groc
amb els números i no declara verd.

### π ≈ 3,14 al Full 9 — **parcial**

Els valors aproximats del Full 9 es van calcular amb π = 3,14 i estan escrits
com a literals a `c_cossos.py` (160 crides `apx()`/`val()` amb literals contra
5 amb expressió; la constant `PI = 3.14` està declarada i no s'usa enlloc).
Dos enunciats estan construïts a l'inrevés perquè amb 3,14 surti un número
rodó: l'esfera de 803,84 cm² dona radi **8 exacte** amb 3,14 i **7,998** amb
la π de la calculadora, i el cilindre de 471 cm² dona r = 5 i r = 4,9987. A
185a l'opció marcada com a correcta diu ≈747,32 quan 238π = **747,70**.

He fet només la part barata i honesta: **declarar el conveni** a la descripció
dels dos blocs afectats, perquè l'alumne que fa servir la calculadora sàpiga
per què el seu número no quadra, i deixar el deute documentat al codi font.

**Pendent de debò:** regenerar el Full 9 calculant amb `math.pi` i arrodonint
al final, i redissenyar els enunciats 187 i 191 perquè el número rodó no
depengui d'una π truncada.

---

## 3. El que no he tocat

- **Fonts de Google.** `css/estil.css` segueix amb l'`@import` de
  `fonts.googleapis.com`. Serveixen per a la identitat visual i no les puc
  descarregar des d'aquí (el domini no és a la llista permesa del meu entorn).
  El procediment és el mateix que he fet servir amb KaTeX: baixar els woff2,
  posar-los a `vendor/fonts/` i canviar l'`@import` per `@font-face`. Té dues
  raons: l'`@import` és serial i bloqueja el primer pintat, i transmet la IP
  de l'alumne a un tercer.
- **Repàs espaiat.** Segueix sense existir. `RE.apunta` ja desa `ts` a cada
  ítem i no s'usa mai: amb el que ja hi ha es podria fer un mode «refresca»
  que retorni els ítems marcats `net` fa més de N dies. És la millora amb més
  retorn per esforç que queda.
- **Una sola pregunta per destresa al test inicial.** Un alumne que diu
  «domino» sense saber-ho passa a `dominat` — i queda fora de l'itinerari —
  el 25 % de les vegades per pur atzar.
- **Entrada lliure de resposta.** Els 892 ítems són de quatre opcions; per als
  numèrics, una casella d'entrada amb les opcions com a segona oportunitat
  multiplicaria el valor diagnòstic sense tocar el motor.
- **Apartats germans no practicats a la prova escrita.** Ara la prova reutilitza
  l'exercici literal que l'alumne va fer. Com que el 63 % dels exercicis tenen
  germans, una opció «germà no practicat» (va fer 1a, 1b, 1c → l'examen li dona
  1e) seguiria sent «només d'allò que ha treballat» i no es podria aprovar de
  memòria. Val la pena decidir-ho abans del primer examen real.
