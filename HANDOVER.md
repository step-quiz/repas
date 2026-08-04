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

Cada `Q()` passa per `_valida()`, que imposa quatre regles sense excepció:
exactament 3 distractors; 4 opcions diferents entre si un cop tret l'espai en
blanc; cap distractor sense text de retroacció; i com a mínim una pista i un
pas de resolució. Si una falla, el build s'atura i diu quin ítem és.

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

### 5.1 `js/diagnostic-dades.js` → `window.RE_DIAG`

```js
RE_DIAG.blocsDisponibles(cb)          // carrega els fulls de FULLS_TEST en paral·lel
RE_DIAG.seleccionaBlocsDelTest(blocs) // -> els blocs d'avui, rotats per dia
RE_DIAG.triaPreguntes(blocsSeleccionats)  // -> 15 preguntes
RE_DIAG.desa(r) / .llegeix() / .esborra()
RE_DIAG.analitza(r)                   // -> estadística per bloc, pitjor primer
RE_DIAG.recomanacio(analisi)          // -> fins a 3 blocs amb menys del 80%
```

Constants i per què tenen el valor que tenen:

- `FULLS_TEST = [1..12]` — quins fulls alimenten el test. Tots.
- `PREGUNTES_PER_BLOC = 2` — el mínim fiable. Amb una sola pregunta, un
  despistament deixa un bloc a 0% sense dir res real sobre si es domina.
- `TOTAL_TEST = 15` — la mida del test, fixa.
- `BLOCS_PER_TEST` es **deriva** de les dues anteriors (7 blocs amb 2
  preguntes + 1 amb una = 8). Si canvieu `TOTAL_TEST`, s'ajusta sol.
- `CARACTERS_MAX_PREFERITS = 40` — la longitud de l'enunciat com a proxy de
  "quant costa d'encarar". No mesura dificultat matemàtica: mesura esforç de
  lectura, que és el que fa que un test sembli intimidant a la primera
  pantalla.

Com que hi ha 46 blocs i només 8 hi caben, la tria rota **per dia de l'any**
amb un generador amb llavor: el mateix dia dona sempre el mateix conjunt, i
cap bloc queda permanentment fora per mala sort. Una segona rotació, amb una
llavor diferent, decideix quin bloc és el que aporta una sola pregunta.

`itemsCurts(items, n)` retorna els ítems de menys de 40 caràcters si n'hi ha
prou; si no, retorna **exactament els `n` més curts**, sense marge per
barrejar. El marge hi va ser i es va treure: amb un bloc que només té ítems
llargs, barrejar dins d'un conjunt més ample podia triar-ne un de molt més
llarg havent-n'hi un de disponible més curt.

Les preguntes del test surten del mateix banc que la pràctica. Per no inflar
el progrés, un ítem contestat al test es marca `"vist"`, no `"net"`, i només
si no en tenia cap estat previ.

**Limitació coneguda.** L'objectiu de "cap pregunta del test per sobre de 60
caràcters" ja no es compleix: 12 dels 46 blocs no tenen cap ítem curt, perquè
són blocs de problemes verbals (geometria aplicada, semblança, percentatges
encadenats). En aquests blocs el test agafa el més curt que hi ha, que pot
passar de 150 caràcters. Si algun dia molesta, les sortides són pujar
`TOTAL_TEST` perquè el test cobreixi més blocs, o afegir un camp de dificultat
real al banc i deixar de fer servir la longitud com a proxy.

### 5.2 `js/diagnostic.js`

Tres fases a la mateixa pàgina: autopercepció (tria múltiple de "quins temes
creus que et costen"), 15 preguntes, i desat amb redirecció a `resultat.html`.
Sense pistes ni segon intent: és un instrument de mesura, no una pràctica.

L'autopercepció i les preguntes han de parlar **dels mateixos blocs**, o la
comparació entre el que l'alumne creu i el que demostra no vol dir res. Per
això `diagnostic.js` crida `seleccionaBlocsDelTest()` una sola vegada i passa
el resultat tant a la pantalla d'autopercepció com a `triaPreguntes()`.
`triaPreguntes()` espera un conjunt **ja seleccionat**; no li passeu la
sortida crua de `blocsDisponibles()`.

### 5.3 `js/resultat.js`

Mostra els encerts totals, un resum compacte per bloc sempre visible, els
desajustos amb l'autopercepció, la taula completa i l'entrada a l'itinerari.

- `sorpresa`: no marcat com a difícil i **0%** d'encerts.
- `falsAlarma`: marcat com a difícil i **100%** d'encerts.

Els llindars són exactes a propòsit. Amb 1 o 2 preguntes per bloc, un llindar
tou (per exemple "menys del 60%") marca gairebé tots els blocs i converteix un
destacat en soroll. `MAX_DESAJUSTOS = 3` limita quants se'n mostren de cada
mena.

El resum compacte hi és perquè el total de dalt ("3 de 15") es pugui quadrar
amb el detall d'una ullada, sense desplegar res ni sumar a mà.

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

1. Es prenen fins a 3 blocs recomanats pel diagnòstic.
2. Els ítems de cada bloc s'ordenen per longitud d'enunciat, de menys a més.
3. Es reparteixen 24 ítems entre els blocs tan equitativament com es pugui;
   un bloc petit no pot aportar més ítems dels que té, i el que hi falta es
   redistribueix als altres en rondes successives.
4. Es prenen **un de cada bloc per torns**, no bloc a bloc: la ruta va
   canviant de tema a cada pas.
5. Si el material disponible no arriba a `MIN_TOTAL`, la ruta és més curta i
   la pàgina ho diu; mai s'omple amb contingut no recomanat per arribar a la
   xifra.

La ruta és un pla estable, no una recomanació que es refresca. `obtenIGenera`
reutilitza la que hi hagi desada. Només es torna a generar amb el botó
explícit (amb confirmació) o quan es refà el test.

### 5.5 Claus de `localStorage`

| Clau | Propietari | Contingut |
|---|---|---|
| `repas-eso:full<N>` | `RE` (`nucli.js`) | `{v, items: {id: {estat, ...}}}`, una per full |
| `repas-eso:diagnostic` | `RE_DIAG` | `{ts, percebuts: ["full:bloc"], respostes: [{full, bloc, blocTitol, id, encert}]}` |
| `repas-eso:itinerari` | `RE_ITI` | `{ts, ruta: [{full, bloc, blocTitol, id}]}` — sense estat |

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
5. Decidir si ha d'entrar al test inicial. Si sí, afegir el número a
   `FULLS_TEST` de `js/diagnostic-dades.js`; abans, mirar la distribució de
   longituds d'enunciat dels seus blocs (§5.1).
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
- **La longitud d'enunciat com a proxy de dificultat** és imperfecta i, amb
  els 12 fulls, insuficient en 12 blocs (§5.1).
- **La rotació per dia** fa servir l'hora local sense cap tractament de fus
  horari. Fer el test just abans i just després de mitjanit pot donar conjunts
  de blocs diferents, cosa que no té cap conseqüència.
- **KaTeX ve d'un CDN.** Sense xarxa, les matemàtiques es veuen com a LaTeX
  en cru; el lloc segueix funcionant.
