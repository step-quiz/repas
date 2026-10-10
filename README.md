# Repàs d'ESO

Lloc estàtic d'autoavaluació de matemàtiques per a alumnes que comencen 1r de
batxillerat. HTML, CSS i JavaScript vainilla: no hi ha build, ni servidor, ni
dependències. Obre `index.html`.

**Els 12 fulls tenen banc de preguntes: 951 preguntes en total**, cobrint els
259 exercicis del material original. A sobre hi ha un tutor: un test inicial
de 15 destreses clau que situa l'alumne i li genera un itinerari
personalitzat d'exercicis.

## Contingut

| Full | Tema | Blocs | Preguntes |
|---|---|---:|---:|
| 1 | Nombres enters, fraccions i decimals | 4 | 144 |
| 2 | Potències | 4 | 89 |
| 3 | Successions i progressions | 4 | 56 |
| 4 | Polinomis | 4 | 71 |
| 5 | Equacions i sistemes | 5 | 99 |
| 6 | Proporcionalitat i percentatges | 5 | 48 |
| 7 | Teorema de Pitàgores. Àrees | 4 | 62 |
| 8 | Teorema de Tales. Semblança | 6 | 59 |
| 9 | Cossos geomètrics. Àrea i volum | 4 | 52 |
| 10 | Funcions | 5 | 85 |
| 11 | Estadística | 5 | 91 |
| 12 | Combinatòria i probabilitat | 4 | 95 |

## Navegació

**Recorregut normal**, tres nivells:

1. **`index.html`** — tria un full. Una targeta per full amb el seu progrés.
2. **`full.html?full=N`** — la pàgina d'un full: botó "Continua on ho vas
   deixar" a dalt, els errors que es repeteixen, les targetes de bloc, i el
   mapa complet de caselles plegat dins d'un `<details>`. Amb `?bloc=<id>`
   aquell bloc surt destacat.
3. **`practica.html?full=N&q=<id>`** — el cicle d'un exercici: enunciat →
   pistes → opcions → veredicte amb diagnòstic de l'error triat → resolució
   pas a pas.

**Recorregut del tutor**, per a qui no sap per on començar:

1. **`diagnostic.html`** — test inicial: 15 destreses clau, una per
   pantalla, en ordre de currículum. A cada una l'alumne diu si la sap fer,
   si la té oblidada, si no la va entendre o si no l'havia vist mai, i tot
   seguit la contesta. L'única resposta que se salta la pregunta és "no ho he
   fet mai", perquè allà no hi ha res a mesurar.
2. **`resultat.html`** — en quina situació està cada destresa, què donava
   per sabut i no ho estava, i l'entrada a l'itinerari.
3. **`itinerari.html`** — un recorregut d'uns 24 exercicis dels blocs més
   fluixos, de més senzills a més complets i alternant de tema. Els
   exercicis s'obren amb `?origen=itinerari`, i llavors tota la navegació de
   sortida torna a l'itinerari.

El progrés es desa al navegador (`localStorage`), amb una clau per full. No
hi ha comptes ni sincronització entre dispositius.

## Estructura de fitxers

A l'arrel només hi ha el lloc que es publica i el que cal per treballar-hi.

    index.html            Nivell 0: tria de full + targeta del tutor
    full.html             Nivell 1: la pàgina d'un full (genèrica, ?full=N)
    practica.html         Nivell 2: el cicle d'un exercici
    diagnostic.html       test inicial del tutor
    resultat.html         diagnosi del test
    itinerari.html        recorregut personalitzat
    analitzador-repas.html  GENERAT — eina del professorat, autònoma

    js/nucli.js           progrés a localStorage, mapa de caselles, KaTeX
    js/inici.js           controlador del Nivell 0 (taula FULLS)
    js/hub.js             controlador del Nivell 1
    js/practica.js        controlador del Nivell 2
    js/teoria.js          els botons «Teoria» (llibre de text) i «Vídeo»
                          (exercici semblant resolt) de cada exercici
    js/proves-inicials.js   les 15 proves del test, escrites a mà
    js/diagnostic-dades.js  situacions, prioritats i recomanació de temes
    js/diagnostic.js      controlador del test
    js/resultat.js        controlador de la diagnosi
    js/itinerari-dades.js generació i estat de la ruta
    js/itinerari.js       controlador de l'itinerari
    js/calendari.js       la feina demanada per examen (10-20) i dates de mostra
    js/codi.js            codi de verificació: generació I lectura
    js/codi-ui.js         el panell del codi que veu l'alumne
    js/codi-taules.js     GENERAT — taules del codi (ordre d'ítems i etiquetes)
    css/estil.css         tot l'estil del lloc
    vendor/katex/         KaTeX servit en local (no CDN): un filtre de centre
                          el bloqueja i el LaTeX en cru no és llegible per a
                          un alumne d'ESO. Per actualitzar-lo: `npm pack
                          katex@X` i copiar katex.min.{js,css},
                          contrib/auto-render.min.js i fonts/*.woff2

    data/fullN.js         banc de preguntes d'un full — GENERAT, no editar
    data/teoria.json      mapa exercici → activitat del llibre de text
    data/videos.json      mapa exercici → vídeo de l'entrega de repàs en paper

    revisio/REVISIO-fullN.html  clau de respostes d'un full, amb resolucions
                          i catàleg d'errors — GENERAT, no editar

    tools/lib.py          motor: Q()/D()/DT(), validació
    tools/tax/            catàleg d'errors TAX, un mòdul per tema
    tools/figures/        figures SVG dels enunciats, generades amb paràmetres
                          (prismes, piràmides, cilindres, cons, esferes...)
    tools/c_<tema>.py     el contingut d'un full (un fitxer per full)
    tools/build.py        compilador: registre FULLS i generació de sortides
    tools/build_tot.py    compila fulls + taules del codi + analitzador
    tools/build_codi.py   taules compartides pel codi + _banc.json
                          (enunciats indexats per id, per a la prova escrita)
    tools/build_analitzador.py  munta analitzador-repas.html (fitxer únic)
    tools/codi-etiquetes.txt  ordre de les etiquetes d'error dins del codi:
                          NOMÉS S'HI AFEGEIX AL FINAL
    tools/fes-paquet-alumnat.py     carpeta public/, sense claus de respostes
    tools/fes-paquet-professorat.py zip amb l'analitzador, KaTeX i la guia
    tools/fes-exemple.js  full de respostes d'exemple per a l'analitzador
    tools/fes-galeria.py  captura cada ítem tal com es veu (docs/galeria/)

    tests/                les proves; `sh tests/executa.sh` les passa totes
    docs/                 la documentació (vegeu la secció Documentació)
    docs/historic/        registres de feina ja feta: patches aplicats,
                          correccions, briefs dels agents, notes de fusió
    _uploads/             on es deixen els zips que el workflow de
                          .github/ descomprimeix i commiteja

## Com es construeix el banc

Cap resposta s'escriu a mà. Cada opció —la correcta i els tres distractors—
és el resultat d'un càlcul exacte (`fractions.Fraction` o SymPy) fet al
`tools/c_<tema>.py` corresponent. Els distractors es construeixen simulant un
error concret amb nom, de manera que triar-ne un diu a l'alumne **quin** error
ha comès; aquests noms viuen al catàleg `TAX` de `tools/lib.py`.

Cada full té un sol fitxer `c_<tema>.py` amb tots els seus blocs a dins. L'únic
que en queda fora és el Full 1, que reparteix quatre temes sense relació entre
`c_enters.py`, `c_divisibilitat.py`, `c_fraccions.py` i `c_decimals.py`.

Per escriure el contingut d'un full nou, vegeu `docs/AUTHORING-GUIDE.md`.

## Regenerar el banc

Cada full es compila en un procés separat (si dos mòduls s'importessin al
mateix procés, els seus ítems es barrejarien en un sol banc):

    cd tools
    python3 build_tot.py

Això compila els dotze fulls, regenera les taules del codi de verificació i
torna a muntar l'analitzador, en aquest ordre. Fer-ho a mà també val, però
llavors cal recordar l'ordre: si es toca un generador i no es refan les
taules, l'ordre d'ítems que fa servir el codi deixa de coincidir amb el de
l'app i els codis emesos es llegeixen malament.

    for n in $(seq 1 12); do python3 build.py $n; done
    python3 build_codi.py && python3 build_analitzador.py

Cada crida escriu `data/fullN.js` i `revisio/REVISIO-fullN.html` i informa del
recompte d'ítems i d'etiquetes d'error. La compilació és determinista: si el
`c_<tema>.py` no canvia, la sortida és byte a byte idèntica.

## El codi per al professorat

L'alumne pot generar un **codi de verificació** que recull tota la seva feina,
exercici per exercici, i enviar-lo per un Google Form. El professorat enganxa
el full de respostes a `analitzador-repas.html` i hi veu qui ha fet què, on
s'encalla la classe i si el codi és autèntic.

- **On es demana:** amb el botó **Codi**, fix a dalt a la dreta de totes les
  pàgines. Sempre visible, sempre el mateix codi: no hi ha res a triar.
- **Diu quanta feina s'ha fet.** El botó porta el compte d'exercicis al costat,
  i la finestra diu quants n'hi ha des de l'últim esborrat i que se'n demanen
  entre 10 i 20 per a cada examen (per sota de 10 ho diu en to d'avís). No hi
  surt mai cap nota. L'analitzador té un camp de **feina mínima demanada**: qui
  no hi arriba en el tram triat surt marcat i la seva nota es pinta apagada.
- **És acumulatiu.** Cada codi conté tot el que s'ha fet des de l'últim
  esborrat, no només el d'aquella estona; copiar-lo no posa cap comptador a
  zero. Si l'alumne s'oblida d'enviar-ne un, el següent ja ho porta tot. El
  comptador només torna a zero amb **Codi › Eliminar tots els codis**, que és
  el que es demana l'endemà de cada examen (vegeu «Mini-examen estàndard»), o
  si es perden les dades del navegador (esborrar-les, canviar de dispositiu,
  finestra privada); l'analitzador ho detecta i ho avisa.
- **Antifrau.** Acaba amb dos caràcters calculats sobre tots els altres, en
  l'esperit de la lletra del DNI però amb mòdul primer i pesos per posició:
  detecta *totes* les substitucions d'un caràcter i *totes* les transposicions
  de dos. La nota no viatja dins del codi: la calcula l'analitzador a partir
  del detall, de manera que no hi pot haver un codi on la nota i el detall es
  contradiguin. L'analitzador marca amb ⇄ els codis que apareixen sota més
  d'un correu.
- **Què NO verifica.** El ✓ diu que el codi és autèntic, no que l'hagi guanyat
  qui l'envia. Qui faci els exercicis al navegador d'un altre, o es fabriqui un
  codi des de la consola, passa el control sense deixar rastre; això últim és
  inevitable sense servidor, i el lloc funciona sense servidor a posta. La
  pestanya d'ajuda de l'analitzador ho explica sencer. És una eina de
  seguiment, no un certificat d'autoria.
- **El que sí que ha deixat de passar.** El registre és d'una sola direcció:
  un exercici es tanca al primer desenllaç i el seu estat ja no canvia. Fallar
  i refer-lo després de veure la resolució, o recarregar la pàgina entre el
  primer error i el segon, ja no serveix de res. I el codi porta ara com s'ha
  fet la feina —minuts actius, importacions i d'on venien, repeticions,
  reinicis—, no només quina s'ha fet. Tot plegat a
  **`docs/DESPLEGAMENT.md`**.
- **L'analitzador és un sol fitxer** i funciona obrint-lo des del disc, sense
  servidor ni connexió. No envia res enlloc. Per veure'l funcionar sense
  dades d'alumnes, `node tools/fes-exemple.js > exemple-respostes.csv` genera
  un full de respostes amb quatre alumnes de perfils diferents i codis de
  debò (els perfils s'expliquen dins del mateix script).
- **Una sola nota.** L'analitzador dona una única nota per alumne: la **nota
  de feina del tram** que tria el professor amb dues dates, calculada amb els
  20 últims exercicis fets dins del tram. Només es veu a **Full de respostes ›
  Per alumne** i és la que es baixa a l'XLSX (correu i nota). Fins a l'octubre
  de 2026 n'hi havia tres (la mitjana de tot el codi, la del tram i una
  qualificació del trimestre), que podien donar tres números diferents per al
  mateix alumne. Detall a la secció «Mini-examen estàndard».
- **Progrés del trimestre.** Com que els codis són acumulatius, la diferència
  entre dos codis seguits d'un mateix alumne és exactament la feina feta
  entremig. Aquesta pestanya en mostra l'**activitat** —constància (setmanes
  amb feina nova), volum, encert, pistes i millora, estandarditzats per
  dificultat— però **ja no en treu cap nota**: la nota és només la del tram.

- **Recuperar el progrés.** El progrés viu al `localStorage` d'un navegador. En
  un carro de Chromebooks compartits, o amb una política que esborra les dades
  de lloc en tancar sessió, un trimestre de feina pot desaparèixer. La finestra
  del codi porta un desplegable *«Canvies d'ordinador? Recupera la teva feina»*
  on l'alumne enganxa un codi seu anterior. Dues accions separades a propòsit:
  **afegir només el que falti** (segura, no toca res del que ja hi ha) o
  **substituir-ho tot** (amb confirmació). Un codi amb el control trencat es
  rebutja: no es recupera un estat que no es pot donar per bo.

El format està documentat a dalt de `js/codi.js`, que és alhora el generador i
el lector: les dues meitats viuen al mateix fitxer perquè no puguin divergir, i
l'analitzador carrega aquest mateix fitxer.

## Mini-examen estàndard

Cada tres setmanes, més o menys, l'alumnat fa entre 10 i 20 exercicis. El
professor tria el **tram** amb dues dates (del 21/9 al 4/10, per exemple), i
d'aquell tram en surten dues coses, totes dues fetes **només** amb els **20
últims** exercicis que cada alumne ha fet entre aquells dos dies (per ordre de
quan els va fer per primer cop):

- la **nota de feina**, a **Full de respostes › Per alumne**:
  `min(10, 8·∛(x/10))`, on x suma el valor de cada exercici sobre 10 (a la
  primera 1, una pista 0,95, dues pistes o més 0,85, segon intent 0,75, fallat
  0). Deu exercicis a la primera fan un 8 i vint, un 10. Per sota del mínim
  (10) la nota surt apagada i amb asterisc, però no es posa a zero: un sol
  exercici a la primera fa un 3,7;
- el **mini-examen**, a **Prova escrita › Mini-examen estàndard**: un examen
  per a cada alumne, de 2 preguntes per defecte (curt), o de 3 o 4.

Les dues pantalles comparteixen el tram, el mínim, el màxim i el valor de cada
exercici: canviar-los en una els canvia a l'altra. Els codis RC4 porten la data
del primer intent de cada exercici, i per això n'hi ha prou amb un sol codi.
Detall a `docs/GUIA-PROFESSORAT.md`.

**Cada tram comença de zero.** L'endemà de l'examen l'alumnat esborra els codis
(botó Codi › Eliminar tots els codis) i el tram següent es fa amb el comptador
a zero. L'analitzador hi compta: un exercici refet en un tram posterior és
feina d'aquell tram, amb el resultat que hi té, i no canvia res del tram on
s'havia fet abans; dins d'un mateix tram, un exercici compta un sol cop, amb
el primer resultat (un fallat refet val, com a molt, un segon intent); i els
codis sense dates (RC3 i anteriors) no compten per a cap tram. Un codi enviat
tard sí que compta per al seu tram: el que importa és la data de cada
exercici, no la de l'enviament.

**El tram no és fix.** L'analitzador no té calendari de trams ni setmanes de
descans: compta qualsevol dia que sigui entre les dues dates. El lloc de
l'alumne tampoc no en parla: el botó Codi diu quants exercicis porta des de
l'últim esborrat i que se'n demanen entre 10 i 20 per a cada examen. A
`js/calendari.js` hi queden la feina demanada i unes dates de mostra per a
l'exemple de l'analitzador i les proves.

**La nota de feina mai no compta sola.** Mesura volum, no aprenentatge (vint
exercicis contestats a l'atzar en donen de mitjana un 7,6), i per això la
valida sempre l'examen presencial: si l'examen és de menys de 5, o la feina i
l'examen es porten més de 3 punts, només compta l'examen.

## Prova escrita a partir del que s'ha practicat

Un alumne pot demanar de fer un **examen presencial en paper** sobre la feina
que ha anat fent al lloc. La pestanya **Prova escrita** de
`analitzador-repas.html` el composa a partir del seu últim codi.

- **Només pregunta el que ha treballat.** Un exercici hi pot entrar si el codi
  el dona per fet (exclou els oberts i abandonats). El banc s'indexa per **id**
  d'ítem, mai per posició: el projecte manté dos ordres dels exercicis — el de
  presentació de `data/fullN.js` i l'append-only de `codi-ordre.json` — i al
  Full 9 no coincideixen en 42 de 47 posicions. Indexar per posició funciona a
  onze fulls i posa exercicis no vistos al novè.
- **Cada tema hi surt en proporció a la feina feta**, amb un llindar mínim
  configurable: si de trenta exercicis només un és de probabilitat, no hi ha
  cap pregunta de probabilitat. La mida triada es respecta encara que hi hagi
  més blocs que preguntes, i si no s'hi arriba perquè no hi ha prou exercicis
  fets, **es diu**, en lloc de treure una prova curta en silenci.
- **Varietat dins d'un bloc.** El 63 % dels exercicis del banc tenen més d'un
  apartat (2,9 de mitjana). La tria dona pes als que van costar (fallat >
  pista > segon > net) amb un component aleatori, i no repeteix exercici mare
  mentre en quedin de nous: així una prova de vuit preguntes no és el mateix
  problema vuit vegades, i *«torna a triar exercicis»* dona una selecció
  diferent de debò.
- **Resposta oberta.** L'enunciat és el del banc sense les opcions: l'alumne ha
  d'escriure la resolució. Els apartats que no porten encapçalament propi
  l'hereten del primer germà del mateix exercici, perquè fora del seu full un
  enunciat com «16 cm» no vol dir res.
- **Un codi que no és íntegre no genera cap prova.** Es bloqueja tant si
  l'alumne s'ha triat del desplegable com si s'ha enganxat el codi a mà, i es
  diu per què. Tot el sentit d'aquesta pestanya és examinar sobre feina real.
- **L'examen i el full de correcció s'imprimeixen per separat**, amb dos botons
  distints. Un full de solucions no pot sortir mai per la impressora al costat
  de l'examen per descuit.


## Què no hi és

El banc surt d'un material de repàs amb figures, i tot el que depèn d'una
figura que no s'ha pogut llegir amb seguretat s'ha deixat fora en lloc
d'inventar-ne les mesures. Els motius concrets són al docstring de cada
`tools/c_<tema>.py`; el resum:

| Full | Fora | Motiu |
|---|---|---|
| 7 | 139 sencer, 145a/b/d | La font no arriba a cap valor numèric per a aquestes figures |
| 8 | 152d/g/h, 157 sencer | Tres rectes paral·leles il·legibles; el 157 demana mesurar amb regle sobre el dibuix |
| 9 | 170j, 178, 192, 194, 195b/d/g | Mesures no assignables amb seguretat a cada peça de la figura |
| 10 | 204, 205, 210, 211, 213 | Demanen dibuixar o relacionar gràfiques: no es poden convertir en pregunta de resposta fixa |
| 11 | 233 sencer | Depèn d'un gràfic de línies del qual no es poden llegir les xifres |

## Contingut nou

Quatre fulls porten blocs que **no surten de la font**, numerats a partir del
260 perquè els números 1–259 són els del material de partida i convé poder
saber d'on surt cada cosa.

| Full | Exercicis | Blocs nous | Per què |
|---|---|---|---|
| 11 | 260–274 | Mitjana, mediana i moda · Recorregut i desviació típica | No hi havia **cap** mesura de centralització ni de dispersió. És contingut de 4t d'ESO i prerequisit directe de l'estadística de 1r de batxillerat |
| 6 | 275–284 | El factor multiplicador · Descomptes, IVA i interessos | El full tenia 21 preguntes, i els percentatges són el que més s'oblida i el que més surt després |
| 8 | 285–294 | Càlcul amb escales · Raó de semblança, àrees i volums | No es deia enlloc que si les longituds es multipliquen per *k*, les àrees ho fan per *k*² i els volums per *k*³ |
| 10 | 295–304 | Construir rectes · Construir paràboles i problemes | De 45 preguntes, només 8 demanaven construir alguna cosa: la resta era reconeixement |

El codi de verificació guarda els estats per posició, i per això
`tools/codi-ordre.json` desa un ordre **append-only** separat del de
presentació: un exercici nou s'insereix on toca per a l'alumne i s'afegeix al
final d'aquell ordre per al codi. Els codis ja emesos segueixen valent.

Els exercicis on només falten alguns apartats (145, 152, 195) porten una
nota que ho diu, perquè l'alumne no es pensi que se n'ha perdut cap.

Res d'això és una decisió tancada. Els **170f, 170g, 170h i 170i** ja s'han
recuperat: es va poder perquè el llibre en dona l'apotema, i una apotema es
pot contrastar amb la fórmula del polígon regular, $a=s/(2\tan(\pi/n))$. Quan
la lectura i la fórmula quadren, la cota està ben assignada; quan no, s'ha
llegit malament. Això últim va passar amb el **170c**, transcrit com a hexàgon
de costat 8 amb apotema 5,2 quan un hexàgon de costat 8 té apotema 6,93: la
cota de 8 era l'altura, i està corregit.

La resta de figures d'aquesta taula no donen cap dada que es pugui contrastar
així, i endevinar-les seria pitjor que deixar-les fora.

## Proves

```sh
sh tests/executa.sh
```

466 comprovacions, més les quatre bateries del mini-examen i 15 més amb un
navegador real si hi ha Playwright (`test_visibilitat_real.js`). Les de Python i
les del codi de verificació no demanen instal·lar res: `unittest` de la
biblioteca estàndard i Node pelat. Quatre blocs (analitzador, accessibilitat,
flux de la resolució i botons dels recursos) necessiten un DOM i se salten
sols si `jsdom` no hi és — **però llavors l'script ho diu en groc i no declara
«tot en verd»**, perquè un verd que amaga 179 comprovacions no executades és
pitjor que un avís:

```sh
npm install --no-save jsdom     # per passar-les totes
```

Cal jsdom 27 o posterior (`npm install` sense versió ja instal·la l'última):
les versions anteriors no porten `TextDecoder`, i les proves de la pàgina
d'exercici hi fallen amb `TextDecoder is not defined` sense que el lloc tingui
cap error. Compilar el banc, i les dues proves de Python que importen el
motor (`test_lib.py` i el catàleg de `test_banc.py`), necessiten SymPy:
`pip install sympy`.

Les de matemàtiques **recalculen la resposta de zero**, sense importar res de
`tools/`: si per comprovar el motor es fes servir el motor, una errada passaria
per les dues bandes. Vegeu `tests/LLEGEIX-ME.md`.

## Abans de publicar

- **Repassa els `revisio/REVISIO-fullN.html`.** És la clau de respostes completa:
  enunciat, opcions, quina és correcta, el diagnòstic de cada distractor i la
  resolució. Un build net només garanteix que les regles de validació es
  compleixin, no que les matemàtiques i la redacció siguin bones.
- **Mira el catàleg d'errors** del peu del `revisio/REVISIO-fullN.html`. Una etiqueta
  amb molts usos escampats per blocs molt diferents sol voler dir que s'ha
  fet servir de calaix de sastre. El panell «els errors que repeteixes» ja no
  hi cau — si una etiqueta viu en més d'un bloc del full, mostra el diagnòstic
  de l'exercici real en comptes del text genèric del catàleg — però l'etiqueta
  segueix sent mentida per a l'anàlisi agregada del professorat, i val la pena
  partir-la. Ara mateix 47 etiquetes s'usen en 4 blocs o més i concentren el
  51 % dels usos; les pitjors són `TERME_OBLIDAT_OPERACIO` (parla de polinomis
  i etiqueta oblits de cares d'un prisma), `FACTOR_OBLIDAT` (parla d'exponents
  i etiqueta densitats i volums), `DESPLACAMENT_INDEX` (parla d'un exponent
  que en una progressió aritmètica no existeix) i `PROGRESSIO_INVENTADA`
  (etiqueta un distractor sobre la desigualtat triangular).
- **Comprova la taula «Graduació per bloc»** que hi ha al peu de cada
  `revisio/REVISIO-fullN.html`. Diu quants exercicis té cada bloc a cada nivell de
  dificultat (1 directa, 2 encadenada, 3 completa) i marca en vermell els que
  han quedat amb un sol nivell. Un bloc de problemes tot a nivell 3 és
  correcte; un bloc de mecànica tot a nivell 2 vol dir que la taula
  `dificultats()` del generador no s'ha pensat, i llavors l'itinerari només
  li podrà donar a l'alumne exercicis del mateix graó.
- **Mira especialment els ítems amb `nota`.** La nota surt amb l'enunciat,
  abans de respondre: explica una decisió d'interpretació (la font era
  ambigua) o en quina forma es demana la resposta, i **mai no pot acostar a
  la resposta** (el que és per llegir després va a `comentari`, «Per
  recordar»; vegeu `docs/AUTHORING-GUIDE.md`):

  | Full | Ítems amb nota |
  |---|---|
  | 1 | 6a-c, 7a-c, 8, 9a-d, 10a-d, 11, 26a-f, 29e, 30e, 30f, 34 |
  | 3 | 52c |
  | 4 | 67d-f, 68c, 68d |
  | 7 | 144a, 144b, 145c, 151, 333c |
  | 8 | 154a-d |
  | 9 | 195a |
  | 10 | 298b |
  | 11 | 264 |

- **Obre el lloc en un navegador de veritat.** El `<details>` del mapa, el
  comportament tàctil al mòbil i el renderitzat de KaTeX no es poden
  comprovar llegint el codi.

## Documentació

Tota a `docs/`:

- **[`GUIA-PROFESSORAT.md`](docs/GUIA-PROFESSORAT.md)** — per al professorat:
  l'analitzador, els exàmens, la nota de feina i com la valida l'examen.
- **[`HANDOVER.md`](docs/HANDOVER.md)** — arquitectura: format de dades,
  motor, tutor, itinerari, claus de `localStorage`, i on tocar cada cosa.
- **[`AUTHORING-GUIDE.md`](docs/AUTHORING-GUIDE.md)** — com escriure el
  contingut d'un full nou a partir del material LaTeX font.
- **[`DESPLEGAMENT.md`](docs/DESPLEGAMENT.md)** — què es publica, i què passa
  quan un alumne intenta que el registre digui més del que ha fet.
- **[`CODIS.md`](docs/CODIS.md)** — el format del codi de verificació.
- **[`WORKFLOW-EXAMEN.md`](docs/WORKFLOW-EXAMEN.md)**,
  **[`TECHNICAL-STATE.md`](docs/TECHNICAL-STATE.md)** i
  **[`TODO-AI.md`](docs/TODO-AI.md)** — per a qui hi programa (en anglès).
- **[`GALERIA.md`](docs/GALERIA.md)** — la galeria de captures de cada ítem.
- **[`REVISIO-TEORIA-PENDENTS.md`](docs/REVISIO-TEORIA-PENDENTS.md)** — els
  enllaços de teoria que encara són dubtosos.
- **[`REVISIO-PISTES-I-ENLLACOS.md`](docs/REVISIO-PISTES-I-ENLLACOS.md)** —
  anàlisi de les pistes 1 i 2 i dels enllaços T i V, amb propostes.
- **`docs/historic/`** — el que documenta feina ja feta.

<!-- atribucio-centre:inici -->

---

Material desenvolupat per **David Arso Civil** per al Departament de Matemàtiques de l'INS Miquel Tarradell.
Contingut sota CC BY-NC-SA 4.0, codi sota llicència MIT. Vegeu [`LLICENCIA.md`](LLICENCIA.md).

<!-- atribucio-centre:final -->
