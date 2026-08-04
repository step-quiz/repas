# HANDOVER — arquitectura de `repas-eso`

Document per a qui hagi de continuar aquest projecte, humà o agent. Explica
com està muntat el lloc i on s'ha de tocar cada cosa. Per a l'orientació
general llegiu primer el `README.md`; per a escriure el contingut d'un full
nou, `AUTHORING-GUIDE.md`.

Tot el que hi ha aquí descriu el comportament actual del codi. Abans de
confiar en qualsevol fragment, contrasteu-lo amb el fitxer real: el codi és
la font de veritat, això n'és el comentari.

---

## 1. Les tres capes

**Capa de contingut (Python, `tools/`).** No s'executa mai al navegador.
Converteix el material font en bancs de preguntes de tria múltiple amb
resposta, distractors diagnòstics, pistes i resolució. Sortida: els
`data/fullN.js` i els `REVISIO-fullN.html`.

**Capa de pràctica (JS, els tres nivells).** El lloc "normal": tria de full,
tria de bloc o exercici, i el cicle de resposta. Desa el progrés per full a
`localStorage`.

**Capa de tutor (JS, test + itinerari).** Viu a sobre de tota l'oferta. No
duplica res de la capa de pràctica: llegeix el mateix banc de preguntes i
consulta el mateix progrés.

---

## 2. Inventari i correspondència amb el material font

El material original són 259 exercicis, transcrits a un paquet LaTeX de 13
fitxers `enunciats/imN.tex` (enunciats) i 13 `enunciats/r-imN.tex`
(resolucions desenvolupades). El lloc en fa **12 fulls**, perquè el Full 5
recull dos fitxers font. Això fa que, a partir del Full 6, el número del full
vagi un per sota del número de fitxer:

| Full | Tema | Font | Exercicis | Preguntes |
|---|---|---|---|---:|
| 1 | Nombres enters, fraccions i decimals | `im1.tex` | 1–34 | 140 |
| 2 | Potències | `im2.tex` | 35–46 | 76 |
| 3 | Successions i progressions | `im3.tex` | 47–61 | 50 |
| 4 | Polinomis | `im4.tex` | 62–74 | 59 |
| 5 | Equacions i sistemes | `im5.tex` + `im6.tex` | 75–100 | 99 |
| 6 | Proporcionalitat i percentatges | `im7.tex` | 101–118 | 21 |
| 7 | Teorema de Pitàgores. Àrees | `im8.tex` | 119–151 | 55 |
| 8 | Teorema de Tales. Semblança | `im9.tex` | 152–169 | 32 |
| 9 | Cossos geomètrics. Àrea i volum | `im10.tex` | 170–199 | 43 |
| 10 | Funcions | `im11.tex` | 200–217 | 45 |
| 11 | Estadística | `im12.tex` | 218–235 | 52 |
| 12 | Combinatòria i probabilitat | `im13.tex` | 236–259 | 67 |

**Aquesta taula és normativa.** Està repetida al capdamunt de `js/inici.js`
perquè qui hi arribi primer la trobi sense buscar-la.

### 2.1 Exercicis sense cap pregunta

Onze dels 259 exercicis no han generat cap ítem, sempre pel mateix motiu: la
resposta depèn d'una figura que el text no descriu amb prou precisió, i
inventar-se una lectura seria pitjor que ometre'l. El criteri és descartar
l'exercici o l'apartat **sencer**, mai a mitges.

| Full | Exercicis | Motiu |
|---|---|---|
| 7 | 139, 145a/b/d | disposició de la figura indeterminada |
| 8 | 152d/g/h, 157 | mesures no localitzables; el 157 demana amidar el dibuix amb un regle |
| 9 | 170f–j, 178, 192, 194, 195b/d/g | figures 3D amb mesures superposades |
| 10 | 204, 205, 210, 211, 213 | cal dibuixar, o identificar una gràfica numerada dins d'una figura |
| 11 | 233 | gràfic de línies sense valors numèrics |

El docstring de cada `c_<tema>.py` detalla el seu cas concret.

---

## 3. La capa de contingut

### 3.1 `tools/lib.py` — el motor

Exposa el vocabulari amb què s'escriu un ítem:

```python
Q(id, bloc, encapcalament, enunciat, correcta, distractors,
  pistes=[...], resolucio=[...], nota=None)
D(valor, etiqueta_error, text)   # distractor amb text propi
DT(valor, etiqueta_error, extra="")  # distractor amb el text canònic de TAX
tria(correcta, candidats, n=3)   # tria candidats sense col·lisions
ev("1/3 + 2/5")                  # avaluació exacta -> Fraction
banc()                           # tots els ítems registrats al procés
```

`TAX` és el catàleg d'errors: un diccionari d'etiqueta → explicació del
malentès. Les etiquetes es descriuen en `SCREAMING_SNAKE_CASE` i anomenen el
**malentès**, no el símptoma (`RUFFINI_SIGNE_ARREL`, no `ERROR_66B`), perquè
la mateixa etiqueta es reutilitza a molts ítems i s'hi agrega per bloc.

El text de `TAX` no és documentació morta: `build.py` l'emet a `data/fullN.js`
(clau `errors`, només les etiquetes que el full fa servir) i `hub.js` l'usa
per pintar el panell «els errors que repeteixes». Per això ha de ser
**genèric i sense números concrets** —descriu el malentès, no un exercici—
mentre que el text del `D()` sí que ha de parlar dels números de l'ítem.
Si una etiqueta no és al catàleg, el panell cau al diagnòstic del primer ítem
del full que la faci servir; per a etiquetes d'un sol ús tant se val, però per
a les que es repeteixen dona un text que no resumeix res.

Cada `Q()` passa per `_valida()`, que imposa aquestes regles sense excepció:
exactament 3 distractors; 4 opcions diferents entre si un cop tret l'espai en
blanc; cap distractor sense text de retroacció; com a mínim una pista i un pas
de resolució; una dificultat dins de l'escala; i cap referència a la font o a
feina pendent dins de la `nota` visible (això va a `nota_interna`, que només
surt al `REVISIO`). Si una falla, el build s'atura i diu quin ítem és.

### 3.2 `tools/build.py` — el compilador

`python3 build.py N` importa els mòduls del full N segons el registre
`FULLS`, recull `lib.banc()` i escriu les dues sortides. Les respostes
correctes van ofuscades en base64 dins de `data/fullN.js` — no és seguretat,
només evita que es llegeixin a simple vista des del navegador.

Un full per procés, a propòsit: `lib._BANC` és una llista de mòdul, i
importar dos fulls al mateix procés barrejaria els seus ítems.

`mathify()` embolcalla automàticament una opció en `$...$` si, un cop
tretes unes quantes macros conegudes, només queden xifres i signes. **No
reconeix cap lletra**: qualsevol opció amb una variable (`x`, `a_n`, `\sqrt`)
s'ha de lliurar ja delimitada, o la validació final la rebutjarà. Els fulls
amb aquest problema el resolen amb un parell de helpers de renderitzat, un
que retorna la cadena amb `$...$` (per fer-la servir com a opció directa) i
un altre sense (per incrustar-la dins d'un text que ja porta els seus
delimitadors); vegeu `poli_tex()`/`poli_tex_raw()` a `c_polinomis.py` o
`arrel_tex()`/`arrel_tex_raw()` a `c_geometria.py`.

### 3.3 Format de `data/fullN.js`

```js
window.FULL = {
  full: 7,
  titol: "Full 7 — Teorema de Pitàgores. Àrees",
  subtitol: "...",
  blocs: [ { id, titol, descripcio, items: [ids...] }, ... ],
  items: [ { id, bloc, encapcalament, enunciat, opcions: [4], clau, nota? }, ... ]
};
```

`clau` és un blob base64 que `RE.clau(item)` desxifra a
`{ok, err[], diag[], res[]}`: índex de la correcta, etiqueta d'error de cada
opció, text de diagnòstic i passos de resolució. Totes les pàgines llegeixen
`window.FULL`; quin `data/fullN.js` es carrega ho decideix el paràmetre
`?full=N` de la URL, amb un `document.write` síncron just abans de carregar
els controladors (així no hi ha condició de cursa entre les dades i el codi
que les pinta). Si el fitxer no existeix, l'`onerror` mostra un avís i els
controladors surten amb un `if (!window.FULL) return;`.

---

### 3.4 El codi de verificació

`js/codi.js` conté **el generador i el lector al mateix fitxer**, i això és
deliberat: si viuen separats, tard o d'hora divergeixen, i el símptoma és el
pitjor possible (codis que es llegeixen malament sense que res avisi).
`analitzador-repas.html` no en porta una còpia: `tools/build_analitzador.py`
hi incrusta aquest mateix fitxer.

El format sencer està documentat a la capçalera de `js/codi.js`. Les
decisions que costen més de reconstruir des del codi:

- **El codi és acumulatiu, no una sessió.** Repàs-ESO és treball propi durant
  setmanes; un tiquet per estona obligaria l'alumne a no perdre'n cap. Cada
  codi és la fotografia completa i substitueix l'anterior. L'analitzador es
  queda l'últim de cada alumne.
- **La nota no hi viatja.** Es deriva dels estats en llegir el codi. Aquest és
  el forat clàssic d'aquests sistemes: si el codi porta una nota *i* un detall,
  i el control només cobreix la nota, es pot retocar el detall. Aquí no hi ha
  dos nombres que puguin contradir-se, i el control cobreix tots els caràcters.
- **Dos caràcters de control, no un.** La lletra del DNI és una suma mod 23
  per a 8 xifres. Amb càrregues de centenars de caràcters cal (a) pesar per
  posició, o les transposicions no es detecten mai, i (b) un mòdul més gran
  que l'alfabet, o el "0" i la "Z" valen el mateix. Amb mòdul 1021 i pesos,
  es detecten **totes** les substitucions d'un caràcter i **totes** les
  transposicions de dos.
- **`tools/codi-etiquetes.txt` és append-only.** El codi guarda l'ÍNDEX de
  l'etiqueta d'error, no el nom. Reordenar el fitxer fa il·legibles tots els
  codis ja emesos; `build_codi.py` ho vigila.
- **L'hora té resolució de 2 minuts.** És el que cabia en dos caràcters, i per
  a la comprovació de "quant ha trigat entre generar-lo i enviar-lo" (llindar
  de 30 min) la precisió al minut no aporta res.

## 4. La capa de pràctica

### 4.1 `js/nucli.js` → `window.RE`

```js
RE.llegeix(full) / RE.desa(full, dades) / RE.esborra(full)
RE.apunta(full, id, dades)   // registra el progrés d'un ítem
RE.estat(full, id)           // "" | "vist" | "net" | "pista" | "segon" | "fallat"
RE.clau(item)                // desxifra la clau de respostes
RE.mapa(D, itemsFets)        // pinta el mapa de caselles
RE.mat(el)                   // renderitza matemàtiques amb KaTeX
RE.ETIQ                      // etiqueta d'error -> nom llegible
```

`RE.estat()` és **l'única font de veritat sobre si un exercici està fet**.
Tota la resta del lloc, tutor inclòs, hi pregunta en lloc de portar el seu
propi registre.

El progrés viu a `localStorage["repas-eso:full" + N]`, una clau per full.

### 4.2 Els controladors

`inici.js` pinta les targetes de full a partir de la taula `FULLS` que porta
a dins; és l'únic lloc del JS on hi ha el títol i el total de preguntes de
cada full escrits a mà.

`hub.js` pinta la pàgina d'un full a partir de `window.FULL`. Amb `?bloc=<id>`
destaca aquell bloc i hi fa scroll.

`practica.js` porta el cicle de quatre passos. Amb `?origen=itinerari` canvia
**tota** la navegació de sortida —Següent, Anterior i l'enllaç de tornada— cap
a `itinerari.html`; sense el paràmetre es comporta exactament com si el tutor
no existís.

---

## 5. La capa de tutor

### 5.1 El test inicial: `js/proves-inicials.js`

Les preguntes del test **no surten del banc d'exercicis**. Són 15 proves
escrites expressament, en un fitxer a part, perquè la seva funció és una
altra: un exercici de pràctica ha de fer treballar; una prova del test només
ha de distingir qui en sap de qui no. Fer calcular vuit valors numèrics d'un
polinomi no diu res més que fer-ne calcular un, i costa vuit vegades més
temps i atenció.

Criteris amb què estan triades les 15:

- **Una destresa per prova, i la destresa pont del tema.** Qui sap
  factoritzar $x^2-25$ sap fer el valor numèric d'un polinomi; al revés no.
  S'escull sempre la que arrossega les altres.
- **Curtes**: enunciat d'una línia, sense context narratiu (la més llarga fa
  89 caràcters, la mediana 60). El temps de lectura no ha de competir amb el
  de pensar.
- **Diagnòstiques**: allà on hi ha un malentès clàssic, la prova el toca de
  ple ($-3^2$ contra $(-3)^2$; pujar i baixar un 20 % no torna al preu de
  partida), i els distractors són el resultat d'aquell error, no números a
  l'atzar.
- **Ordre de currículum, sense rotació ni barreja.** L'alumne ha de poder
  notar que va pujant i on deixa de reconèixer les coses; aquest punt és,
  ell mateix, una dada.
- **Cobertura**: una prova per full, i tres de més al Full 1 i al Full 5, que
  són els més amples i els més prerequisit.

Cada prova declara els blocs del lloc on portarà l'alumne si surt malament:
el principal primer, i després els que l'acompanyen (sumar fraccions porta a
Fraccions i també a Divisibilitat, perquè sense m.c.m. no se'n surt). Entre
totes cobreixen **34 dels 46 blocs**. Amb 15 preguntes no se'n poden cobrir
46, i el lloc ho diu obertament a la pàgina de resultats: el test serveix per
decidir per on començar, no per certificar res.

### 5.2 Les set situacions: `js/diagnostic-dades.js` → `window.RE_DIAG`

A cada prova l'alumne fa dues coses: marca una de les quatre respostes i tot
seguit contesta la pregunta de veritat. L'única resposta que se salta la
pregunta és "no recordo haver-ho fet mai": allà no hi ha res a mesurar.

Es demanen les dues coses perquè **el que l'alumne creu i el que l'alumne fa
són dades diferents, i totes dues fan falta**. Algú que diu "ho vaig
entendre però ho he oblidat" i tot seguit ho resol té una mancança molt
diferent d'algú que ho diu i falla: al primer li cal un parell d'exercicis,
al segon un repàs. Creuant les dues dades surten set situacions:

| Estat declarat | Encert | Situació | Prioritat | Pes |
|---|---|---|---:|---:|
| sé fer-ho | ✗ | `falsa_seguretat` | 4 | 8 |
| no ho he fet mai | — | `mai` | 3 | 8 |
| no ho vaig entendre | ✗ | `no_entes` | 3 | 8 |
| ho vaig entendre però ho he oblidat | ✗ | `oblidat` | 2 | 4 |
| no ho vaig entendre | ✓ | `infravalorat` | 2 | 4 |
| ho vaig entendre però ho he oblidat | ✓ | `recuperat` | 1 | 2 |
| sé fer-ho | ✓ | `dominat` | 0 | 0 |

Les files on el que diu i el que fa **no** coincideixen són les que aporten
informació que l'alumne no tenia abans d'entrar-hi. `falsa_seguretat` és la
que més mal fa: és l'únic tema que no repassaria pel seu compte, i per això
encapçala la llista. `infravalorat` i `recuperat` són l'altra cara, i el lloc
també les diu: sovint el que hi falla no és la destresa sinó la confiança, i
això canvia com l'alumne s'hi posa.

El **pes** decideix quants exercicis rep d'aquell tema. Refrescar una
destresa que va entendre costa la meitat que construir-ne una que no, i
consolidar-ne una que ja li surt, encara menys.

**A igualtat de prioritat mana l'ordre del currículum.** Si a algú li fallen
alhora les fraccions i les paràboles, les fraccions van abans: són
prerequisit, i atacar la paràbola sense elles és perdre el temps.

```js
RE_DIAG.analitza(dades)      // -> una entrada per prova, ordenada per urgència
RE_DIAG.recomanacio(analisi) // -> fins a MAX_TEMES (3) temes amb prioritat
RE_DIAG.resum(analisi)       // -> recompte per situació
RE_DIAG.blocsDisponibles(cb) // carrega el banc real (per a l'itinerari)
RE_DIAG.desa(respostes) / .llegeix() / .esborra()
```

`FULLS_AMB_BANC = [1..12]` no té res a veure amb el test: és quins fulls es
carreguen per construir l'itinerari.

`llegeix()` descarta qualsevol diagnòstic que no porti `versio: 2`. Els
resultats desats per la versió anterior del test (encerts sobre preguntes del
banc) no es poden reinterpretar amb aquestes regles, així que es tracten com
si no n'hi hagués cap i el lloc ofereix fer el test.

### 5.3 `js/diagnostic.js` i `js/resultat.js`

`diagnostic.js` pinta una prova per pantalla i prou: cap fase prèvia, cap
pista, cap segon intent, cap resolució. Com que les proves no surten del
banc, la pàgina **no carrega cap `data/fullN.js`** i s'obre a l'instant.

Tampoc diu si la resposta era bona. El test no és un examen, i saber-ho
pregunta a pregunta només hi afegiria pressió al moment en què l'alumne
encara s'hi està posant; tot ve junt a `resultat.html`.

La targeta ensenya una cosa cada vegada. En marcar l'estat, el panell
d'autoavaluació (`#autoavaluacio`) s'amaga sencer i deixa lloc a les quatre
opcions de la resposta: amb tots dos alhora la targeta no cabia en pantalla i
calia baixar per contestar. Torna a aparèixer a la pregunta següent.

Entre pregunta i pregunta hi ha una pausa d'1,5 s amb l'avís "Passem a la
següent pregunta…", i mentre dura la targeta queda inerta (`.inert`, sense
`pointer-events`) per si algú clica de pressa: sense això, un doble clic
podria menjar-se una pregunta.
L'autopercepció no té pantalla pròpia: va dins de cada prova. Preguntar "et
costen les potències?" davant d'una llista de títols és molt menys fiable que
ensenyar $2^5\cdot 2^{-3}:2^2$ i preguntar-ho allà mateix, amb la destresa a
la vista.

`resultat.js` no dona cap nota. L'ordre de la pàgina està invertit respecte
del que semblaria natural: **la targeta de l'itinerari va a dalt de tot**,
abans del resum i de qualsevol explicació, amb una crida a l'acció explícita
("Clica aquí per començar el teu itinerari"). És l'única acció de la pàgina, i
tota la resta només la justifica: qui vulgui saber d'on surt ho té just a
sota, però qui només vulgui començar no ha de llegir res per trobar-hi el
botó.

Sota la targeta: el recompte per situació en una línia, els temes de
`falsa_seguretat` (l'única informació que l'alumne no tenia abans d'entrar) i
els d'`infravalorat`/`recuperat` en verd. La llista sencera de les 15 queda
dins d'un `<details>`, en ordre de currículum, perquè pugui veure on se li va
trencar el recorregut i triar pel seu compte si vol.

### 5.4 `js/itinerari-dades.js` → `window.RE_ITI`

```js
RE_ITI.generaRuta(blocsRecomanats, blocsDisponibles)  // funció pura
RE_ITI.obtenIGenera(cb)      // reutilitza la ruta desada, o en genera una
RE_ITI.desa(ruta) / .llegeix() / .esborra()
RE_ITI.pasFet(pas)           // consulta RE.estat() en viu
RE_ITI.progres(ruta)         // -> {fets, total}
RE_ITI.primerPendent(ruta)   // -> el pas següent, o null si és completa
RE_ITI.OBJECTIU_TOTAL / .MIN_TOTAL / .MAX_TOTAL   // 24 / 20 / 30
```

**La invariant més important del subsistema:** `localStorage["repas-eso:itinerari"]`
desa **només la ruta** (quins ítems i en quin ordre), mai si un pas està fet.
Això es consulta sempre en viu amb `RE.estat()`. Així, un exercici resolt pel
camí normal compta com a fet a l'itinerari sense cap sincronització. No
afegiu un indicador de "fet" dins de l'emmagatzematge de l'itinerari.

Com es genera la ruta:

1. Es prenen fins a 3 **temes** recomanats pel test, cadascun amb el seu pes
   (§5.2), i s'expandeixen als seus blocs: el principal se'n queda la
   meitat del pes i la resta van baixant.
2. Els ítems de cada bloc s'ordenen per longitud d'enunciat, de menys a més.
3. Es reparteixen 24 ítems entre els blocs **proporcionalment al pes**; un
   bloc petit no pot aportar més ítems dels que té, i el que hi falta es
   redistribueix als altres començant pels de més pes. Per això un tema que
   cal reconstruir aporta el doble d'exercicis que un que només cal
   refrescar.
4. De cada bloc s'agafa **un exercici de cada nivell de dificultat que hi
   hagi** abans de repetir nivell, i el sobrant es reparteix pesant cap al
   graó d'entrada (3-2-1 per als nivells 1-2-3): qui ha de reconstruir un
   tema necessita més rodatge a baix que a dalt, però la ruta ha de pujar.
   Dins de cada nivell, els `quota` es trien a l'atzar d'una finestra una
   mica més ampla (`triaAmbVarietat` → `mostra`), perquè generar un itinerari
   nou no torni a donar exactament el mateix i el botó no sembli avariat. La
   variació és sempre entre exercicis del mateix graó, mai entre graons.
5. Els exercicis que l'alumne **ja ha resolt** van al final de la cua de cada
   bloc, no fora: una ruta nova li dona material que no ha vist, però si un
   bloc se li ha quedat curt encara pot completar els 24. Aquest filtre és el
   paràmetre opcional `jaFet(full, id)` de `generaRuta`; sense passar-lo, la
   funció segueix sent pura i determinista tret de la varietat del punt 4.
4. Es prenen **un de cada bloc per torns**, no bloc a bloc: la ruta va
   canviant de tema a cada pas.
5. Si el material disponible no arriba a `MIN_TOTAL`, la ruta és més curta i
   la pàgina ho diu; mai s'omple amb contingut no recomanat per arribar a la
   xifra.

La ruta és un pla estable, no una recomanació que es refresca. `obtenIGenera`
reutilitza la que hi hagi desada. Només es torna a generar amb el botó
explícit (amb confirmació) o quan es refà el test — i quan es regenera, dona
exercicis nous dels mateixos temes (punts 4 i 5 de dalt), que és el que
l'alumne espera del botó.

### 5.5 Claus de `localStorage`

| Clau | Propietari | Contingut |
|---|---|---|
| `repas-eso:full<N>` | `RE` (`nucli.js`) | `{v, items: {id: {estat, ...}}}`, una per full |
| `repas-eso:diagnostic` | `RE_DIAG` | `{ts, versio: 2, respostes: [{prova, estat, encert}]}` — `encert` és `null` si no es va comprovar |
| `repas-eso:itinerari` | `RE_ITI` | `{ts, ruta: [{full, bloc, blocTitol, tema, id}]}` — sense estat |

Refer el test esborra les dues claus del tutor, mai el progrés dels fulls. Es
pot fer des de la portada i des de la pàgina de resultats, i **totes dues han
de fer el mateix**: si algun dia s'hi afegeix un tercer estat derivat del
diagnòstic, cal esborrar-lo als dos llocs.

---

## 6. Afegir un full nou

Si algun dia arriba material nou (un `im14.tex`), el circuit és:

1. Escriure `tools/c_<tema>.py` seguint l'`AUTHORING-GUIDE.md`.
2. Afegir una entrada al registre `FULLS` de `tools/build.py`, al final,
   sense tocar cap entrada existent.
3. Compilar-lo: `cd tools && python3 build.py 13`.
4. Afegir-lo a la taula `FULLS` de `js/inici.js` amb el `total` que hagi
   reportat el compilador.
5. Afegir el número a `FULLS_AMB_BANC` de `js/diagnostic-dades.js`, perquè
   els seus exercicis puguin entrar a l'itinerari. Si el tema nou també ha
   d'entrar al test inicial, cal escriure-hi una prova a
   `js/proves-inicials.js` i mapar-la als seus blocs (§5.1) — el test no
   s'alimenta del banc, així que no hi entra sol.
6. Actualitzar el `README.md` (taula de contingut, arbre de fitxers, ítems
   amb nota) i la taula de correspondència del §2 d'aquest document i del
   capdamunt de `js/inici.js`.
7. Recompilar **tots** els fulls i comprovar que els altres surten byte a
   byte idèntics. Si no, alguna cosa compartida (`lib.py`, `build.py`) s'ha
   tocat més del compte.

---

## 7. Límits coneguts

- **Un sol navegador.** Tot és `localStorage`: no hi ha comptes ni
  sincronització entre dispositius.
- **L'itinerari no s'amplia.** Quan se'n completen els 24 passos, la pàgina
  felicita i prou; no hi ha manera d'estendre'l amb més material sense
  regenerar-lo.
- **El test cobreix 34 dels 46 blocs.** Els 12 restants no es poden
  recomanar automàticament; s'hi arriba navegant. Ampliar la cobertura vol
  dir escriure més proves, no canviar cap algorisme.
- **La verificació és d'una sola pregunta.** Qui domina un tema i falla per
  un badall queda marcat com a `falsa_seguretat`; qui no en sap i encerta de
  sort, com a `dominat`. Es va acceptar a canvi de la brevetat: el cost
  d'anar a parar a un tema que ja se sap és baix, i amb 15 proves la sort no
  mou gaire el resultat global.
- **La dificultat la fixa una taula a mà**, exercici per exercici, a dalt de
  cada `c_<tema>.py` (`dificultats({...})`, escala 1-3 documentada a
  `lib.py`). És un judici del qui l'ha escrita, no una mesura: dos
  professors la posarien diferent en uns quants exercicis. A canvi és
  explícita, es revisa d'una ullada i es pot discutir número a número. Abans
  s'ordenava per longitud de l'enunciat, que mesurava esforç de lectura i no
  matemàtiques: els exercicis amb les dades a l'encapçalament tenien
  enunciats curtíssims i pujaven al davant encara que fossin dels més
  difícils del full.
- **KaTeX ve d'un CDN.** Sense xarxa, les matemàtiques es veuen com a LaTeX
  en cru; el lloc segueix funcionant.
