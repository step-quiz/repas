# Repàs d'ESO

Lloc estàtic d'autoavaluació de matemàtiques per a alumnes que comencen 1r de
batxillerat. HTML, CSS i JavaScript vainilla: no hi ha build, ni servidor, ni
dependències. Obre `index.html`.

**Els 12 fulls tenen banc de preguntes: 739 preguntes en total**, cobrint els
259 exercicis del material original. A sobre hi ha un tutor: un test inicial
de 15 preguntes que diagnostica quins blocs costen més i genera un itinerari
personalitzat d'exercicis.

## Contingut

| Full | Tema | Blocs | Preguntes |
|---|---|---:|---:|
| 1 | Nombres enters, fraccions i decimals | 4 | 140 |
| 2 | Potències | 4 | 76 |
| 3 | Successions i progressions | 4 | 50 |
| 4 | Polinomis | 4 | 59 |
| 5 | Equacions i sistemes | 5 | 99 |
| 6 | Proporcionalitat i percentatges | 3 | 21 |
| 7 | Teorema de Pitàgores. Àrees | 4 | 55 |
| 8 | Teorema de Tales. Semblança | 4 | 32 |
| 9 | Cossos geomètrics. Àrea i volum | 4 | 43 |
| 10 | Funcions | 3 | 45 |
| 11 | Estadística | 3 | 52 |
| 12 | Combinatòria i probabilitat | 4 | 67 |

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

1. **`diagnostic.html`** — test de 15 preguntes, precedit d'una tria
   d'autopercepció ("quins temes creus que et costen?").
2. **`resultat.html`** — encerts per bloc, els desajustos entre el que
   l'alumne creia i el que ha demostrat, i l'entrada a l'itinerari.
3. **`itinerari.html`** — un recorregut d'uns 24 exercicis dels blocs més
   fluixos, de més senzills a més complets i alternant de tema. Els
   exercicis s'obren amb `?origen=itinerari`, i llavors tota la navegació de
   sortida torna a l'itinerari.

El progrés es desa al navegador (`localStorage`), amb una clau per full. No
hi ha comptes ni sincronització entre dispositius.

## Estructura de fitxers

    index.html            Nivell 0: tria de full + targeta del tutor
    full.html             Nivell 1: la pàgina d'un full (genèrica, ?full=N)
    practica.html         Nivell 2: el cicle d'un exercici
    diagnostic.html       test inicial del tutor
    resultat.html         diagnosi del test
    itinerari.html        recorregut personalitzat

    js/nucli.js           progrés a localStorage, mapa de caselles, KaTeX
    js/inici.js           controlador del Nivell 0 (taula FULLS)
    js/hub.js             controlador del Nivell 1
    js/practica.js        controlador del Nivell 2
    js/diagnostic-dades.js  regles del test: quins blocs, quines preguntes
    js/diagnostic.js      controlador del test
    js/resultat.js        controlador de la diagnosi
    js/itinerari-dades.js generació i estat de la ruta
    js/itinerari.js       controlador de l'itinerari
    css/estil.css         tot l'estil del lloc

    data/fullN.js         banc de preguntes d'un full — GENERAT, no editar
    REVISIO-fullN.html    clau de respostes d'un full — GENERAT, no editar

    tools/lib.py          motor: Q()/D()/DT(), catàleg d'errors TAX, validació
    tools/build.py        compilador: registre FULLS i generació de sortides
    tools/c_<tema>.py     el contingut d'un full (un fitxer per full)

## Com es construeix el banc

Cap resposta s'escriu a mà. Cada opció —la correcta i els tres distractors—
és el resultat d'un càlcul exacte (`fractions.Fraction` o SymPy) fet al
`tools/c_<tema>.py` corresponent. Els distractors es construeixen simulant un
error concret amb nom, de manera que triar-ne un diu a l'alumne **quin** error
ha comès; aquests noms viuen al catàleg `TAX` de `tools/lib.py`.

Cada full té un sol fitxer `c_<tema>.py` amb tots els seus blocs a dins. L'únic
que en queda fora és el Full 1, que reparteix quatre temes sense relació entre
`c_enters.py`, `c_divisibilitat.py`, `c_fraccions.py` i `c_decimals.py`.

Per escriure el contingut d'un full nou, vegeu `AUTHORING-GUIDE.md`.

## Regenerar el banc

Cada full es compila en un procés separat (si dos mòduls s'importessin al
mateix procés, els seus ítems es barrejarien en un sol banc):

    cd tools
    for n in $(seq 1 12); do python3 build.py $n; done

Cada crida escriu `data/fullN.js` i `REVISIO-fullN.html` i informa del
recompte d'ítems i d'etiquetes d'error. La compilació és determinista: si el
`c_<tema>.py` no canvia, la sortida és byte a byte idèntica.

## Abans de publicar

- **Repassa els `REVISIO-fullN.html`.** És la clau de respostes completa:
  enunciat, opcions, quina és correcta, el diagnòstic de cada distractor i la
  resolució. Un build net només garanteix que les regles de validació es
  compleixin, no que les matemàtiques i la redacció siguin bones.
- **Mira especialment els ítems amb `nota`.** Són els que han necessitat una
  decisió d'interpretació perquè la font era ambigua; la nota surt al
  fitxer de revisió i explica què s'ha assumit:

  | Full | Ítems amb nota |
  |---|---|
  | 1 | 6a-c, 7a-c, 8, 9a-d, 10a-d, 11, 12a-b, 17, 26a-f, 28c, 29e, 30e, 30f, 34 |
  | 2 | 46b |
  | 3 | 51a, 52c, 54c, 55, 57c, 58c, 58d |
  | 4 | 62c, 67d-f, 68c, 68d, 69c |
  | 7 | 144a, 144b, 145c, 151 |
  | 8 | 152a-c, 152e, 152f, 154a-d, 165 |
  | 10 | 202c |
  | 12 | 240c, 240d, 243 |

- **Obre el lloc en un navegador de veritat.** El `<details>` del mapa, el
  comportament tàctil al mòbil i el renderitzat de KaTeX no es poden
  comprovar llegint el codi.

## Documentació

- **`HANDOVER.md`** — arquitectura: format de dades, motor, tutor,
  itinerari, claus de `localStorage`, i on tocar cada cosa.
- **`AUTHORING-GUIDE.md`** — com escriure el contingut d'un full nou a
  partir del material LaTeX font.
