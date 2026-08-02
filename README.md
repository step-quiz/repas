# Repàs d'ESO

Lloc estàtic d'autoavaluació de matemàtiques per a alumnes que comencen 1r de
batxillerat. HTML, CSS i JavaScript vainilla: no hi ha build, ni servidor, ni
dependències. Obre `index.html`.

De moment **Full 1** (140 preguntes), **Full 2** (76 preguntes) i **Full 3**
(50 preguntes) ja tenen preguntes. Els altres 10 fulls hi surten llistats com
a "Properament" — l'estructura de tres pàgines ja està a punt perquè, quan
se n'autori un altre, només calgui afegir el seu `data/fullN.js` i marcar-lo
disponible a `js/inici.js` (vegeu §8.1 i §3 de `HANDOVER-repas-eso-v3.md`
per a l'inventari i el disseny d'aquesta part).

## Navegació (tres nivells)

1. **`index.html`** — tria un full. Una targeta per full, amb el seu progrés
   si ja té preguntes.
2. **`full.html?full=N`** — la pàgina d'un full: botó "Continua on ho vas
   deixar" a dalt de tot, els errors que es repeteixen, els blocs (la manera
   normal de triar per on continuar) i, plegat sota "Veure el mapa complet",
   el mapa de totes les caselles per a qui vulgui triar-ne una en concret.
3. **`practica.html?full=N&q=ID`** — el cicle de quatre passos.

## El cicle de l'alumne

1. Tria un bloc o una casella (o continua on ho va deixar).
2. Pot demanar fins a dues pistes graduades.
3. Tria la resposta entre quatre opcions. Si falla, rep un diagnòstic del seu
   error concret i té un segon intent.
4. Consulta la resolució pas a pas.

## Què hi ha

    index.html          Nivell 0: selector de fulls
    full.html            Nivell 1: la pàgina d'un full (llegeix ?full=N)
    practica.html        Nivell 2: el cicle de quatre passos (?full=N&q=ID)
    js/nucli.js          progrés (localStorage, per full), mapa, KaTeX
    js/inici.js          controlador del Nivell 0
    js/hub.js             controlador del Nivell 1 (abans es deia portada.js)
    js/practica.js        controlador del Nivell 2
    data/full1.js        banc de 140 preguntes de Full 1 (generat, no editar a mà)
    data/full2.js        banc de 76 preguntes de Full 2 (generat, no editar a mà)
    data/full3.js        banc de 50 preguntes de Full 3 (generat, no editar a mà)
    REVISIO-full1.html   clau de respostes completa de Full 1, per revisar
    REVISIO-full2.html   clau de respostes completa de Full 2, per revisar
    REVISIO-full3.html   clau de respostes completa de Full 3, per revisar
    tools/lib.py          motor comú: Q/D/DT, TAX (catàleg d'errors), validació
    tools/build.py        compilador (agafa un full de la taula FULLS i el genera)
    tools/c_enters.py       bloc "enters" de Full 1
    tools/c_divisibilitat.py bloc "divisibilitat" de Full 1
    tools/c_fraccions.py     bloc "fraccions" de Full 1
    tools/c_decimals.py      bloc "decimals" de Full 1
    tools/c_potencies.py     els 4 blocs de Full 2 sencer (76 ítems, un sol fitxer)
    tools/c_successions.py   els 4 blocs de Full 3 sencer (50 ítems, un sol fitxer)

## Com està fet el banc

Cap resposta s'ha escrit a mà. Cada opció, correcta o falsa, surt d'avaluar una
expressió amb aritmètica exacta de fraccions:

    ev("(-13)*3 - (-12)*7")        ->  45     resposta correcta
    ev("(-13)*3 - 12*7")           -> -123    distractor RESTA_PRODUCTE_NEGATIU

Els distractors **simulen un error amb nom**. Quan l'alumne en tria un, el web
li diu quin malentès ha tingut, no només que ha fallat. El feedback de cada
error s'escriu un sol cop a `tools/lib.py` (`TAX`) i es reutilitza a tot el
lloc, de manera que el mateix malentès rep sempre la mateixa explicació.

El compilador comprova, per a cada pregunta, que hi hagi exactament tres
distractors, que cap coincideixi amb la resposta correcta ni entre ells, i que
totes tinguin pistes i resolució. Si algun cop falla, el build s'atura.

Full 1 té un fitxer `c_<bloc>.py` per bloc perquè cada bloc és un domini prou
diferent (enters, divisibilitat, fraccions, decimals). Full 2 i Full 3 són
cadascun un sol tema (potències; successions i progressions) amb blocs que
comparteixen molta lògica, així que cadascun té un únic fitxer
(`c_potencies.py`, `c_successions.py`) amb tots els seus blocs a dins,
separats per capçaleres de secció — no cal seguir la convenció d'un fitxer
per bloc quan el tema és un de sol.

## Regenerar el banc

    cd tools && python3 build.py      # full 1 (per defecte)
    cd tools && python3 build.py 2    # full 2
    cd tools && python3 build.py 3    # full 3

Escriu `data/fullN.js` (amb `window.FULL = {...}`, un global genèric perquè
`full.html`/`practica.html` puguin carregar el full que toqui) i
`REVISIO-fullN.html`. Cada full es compila en un procés Python separat a
propòsit (vegeu la capçalera de `tools/build.py`): així els ítems de dos
fulls no es barregen mai al mateix banc.

## Abans de publicar

Les respostes estan calculades, però **no revisades per una persona**.
Repassa `REVISIO-full1.html`, `REVISIO-full2.html` i `REVISIO-full3.html`,
sobretot els ítems amb nota (per exemple el `30e`/`30f` de Full 1, el `46b`
de Full 2, o el `51a`/`54c`/`58c`/`58d` de Full 3, que són interpretacions
d'un enunciat ambigu o casos on l'enunciat original dona un resultat
irracional). Quan els validis, treu l'avís del peu de `full.html`.

## Detalls

- El progrés de cada full es desa a `localStorage` amb clau pròpia
  (`repas-eso:full1`, `repas-eso:full2`...), per navegador.
- Les respostes van ofuscades en base64 dins del camp `clau` de cada ítem: és
  un dissuasiu contra el «veure codi font», no una mesura de seguretat.
- Les opcions es barregen a cada sessió, o sigui que «la B» no es pot compartir.
- Les matemàtiques es renderitzen amb KaTeX per CDN. Sense connexió es veu el
  LaTeX en cru, que continua sent llegible.
- `full.html` i `practica.html` carreguen `data/fullN.js` dinàmicament segons
  el paràmetre `?full=N` de la URL (amb `document.write`, per mantenir-ho
  síncron i sense build step). Si el fitxer no existeix (full encara no
  autorat), es mostra un avís en lloc de trencar la pàgina.
