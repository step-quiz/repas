# Repàs d'ESO

Lloc estàtic d'autoavaluació de matemàtiques per a alumnes que comencen 1r de
batxillerat. HTML, CSS i JavaScript vainilla: no hi ha build, ni servidor, ni
dependències. Obre `index.html`.

**Els 12 fulls tenen banc de preguntes: 739 preguntes en total**, cobrint els
259 exercicis del material original. A sobre hi ha un tutor: un test inicial
de 15 destreses clau que situa l'alumne i li genera un itinerari
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
    js/proves-inicials.js   les 15 proves del test, escrites a mà
    js/diagnostic-dades.js  situacions, prioritats i recomanació de temes
    js/diagnostic.js      controlador del test
    js/resultat.js        controlador de la diagnosi
    js/itinerari-dades.js generació i estat de la ruta
    js/itinerari.js       controlador de l'itinerari
    css/estil.css         tot l'estil del lloc

    data/fullN.js         banc de preguntes d'un full — GENERAT, no editar
    REVISIO-fullN.html    clau de respostes d'un full — GENERAT, no editar

    tools/lib.py          motor: Q()/D()/DT(), catàleg d'errors TAX, validació
    tools/build_tot.py    compila fulls + taules del codi + analitzador
    tools/build_codi.py   taules compartides pel codi de verificació
    tools/build_analitzador.py  munta analitzador-repas.html (fitxer únic)
    js/codi.js            codi de verificació: generació I lectura
    js/codi-ui.js         el panell del codi que veu l'alumne
    analitzador-repas.html  GENERAT — eina del professorat, autònoma
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
    python3 build_tot.py

Això compila els dotze fulls, regenera les taules del codi de verificació i
torna a muntar l'analitzador, en aquest ordre. Fer-ho a mà també val, però
llavors cal recordar l'ordre: si es toca un generador i no es refan les
taules, l'ordre d'ítems que fa servir el codi deixa de coincidir amb el de
l'app i els codis emesos es llegeixen malament.

    for n in $(seq 1 12); do python3 build.py $n; done
    python3 build_codi.py && python3 build_analitzador.py

Cada crida escriu `data/fullN.js` i `REVISIO-fullN.html` i informa del
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
  i la finestra diu quants n'ha fet, com li han anat i quin percentatge del
  lloc representa. Per sota de 10 avisa que potser encara és aviat per
  enviar-lo. L'analitzador té un camp de **feina mínima demanada**: qui no hi
  arriba surt marcat i la seva nota es pinta apagada, perquè un 10 sobre un
  exercici no es pot comparar amb un 6,6 sobre quaranta.
- **És acumulatiu.** Cada codi conté tot el que s'ha fet fins llavors, no
  només el d'aquella estona. Si l'alumne s'oblida d'enviar-ne un, el següent
  ja ho porta tot, i el professorat només ha de mirar l'últim de cadascú.
- **Antifrau.** Acaba amb dos caràcters calculats sobre tots els altres, en
  l'esperit de la lletra del DNI però amb mòdul primer i pesos per posició:
  detecta *totes* les substitucions d'un caràcter i *totes* les transposicions
  de dos. La nota no viatja dins del codi, es deriva del detall en llegir-lo,
  de manera que no hi pot haver un codi on la nota i el detall es contradiguin.
- **L'analitzador és un sol fitxer** i funciona obrint-lo des del disc, sense
  servidor ni connexió. No envia res enlloc.
- **Progrés del trimestre.** Com que els codis són acumulatius, la diferència
  entre dos codis seguits d'un mateix alumne és exactament la feina feta
  entremig. D'aquí surt una qualificació que pesa la **constància** (setmanes
  amb feina nova), el **volum**, la **millora** (encert i dependència de
  pistes, estandarditzats per dificultat) i, amb poc pes, l'**encert**. Els
  pesos i els objectius es toquen des de la mateixa pàgina.

El format està documentat a dalt de `js/codi.js`, que és alhora el generador i
el lector: les dues meitats viuen al mateix fitxer perquè no puguin divergir, i
l'analitzador carrega aquest mateix fitxer.

## Què no hi és

El banc surt d'un material de repàs amb figures, i tot el que depèn d'una
figura que no s'ha pogut llegir amb seguretat s'ha deixat fora en lloc
d'inventar-ne les mesures. Els motius concrets són al docstring de cada
`tools/c_<tema>.py`; el resum:

| Full | Fora | Motiu |
|---|---|---|
| 7 | 139 sencer, 145a/b/d | La font no arriba a cap valor numèric per a aquestes figures |
| 8 | 152d/g/h, 157 sencer | Tres rectes paral·leles il·legibles; el 157 demana mesurar amb regle sobre el dibuix |
| 9 | 170f–j, 178, 192, 194, 195b/d/g | Mesures no assignables amb seguretat a cada peça de la figura |
| 10 | 204, 205, 210, 211, 213 | Demanen dibuixar o relacionar gràfiques: no es poden convertir en pregunta de resposta fixa |
| 11 | 233 sencer | Depèn d'un gràfic de línies del qual no es poden llegir les xifres |

Els exercicis on només falten alguns apartats (145, 152, 195) porten una
nota que ho diu, perquè l'alumne no es pensi que se n'ha perdut cap.

Res d'això és una decisió tancada: si es recuperen les figures originals,
els ítems es poden escriure i afegir seguint `AUTHORING-GUIDE.md`.

## Abans de publicar

- **Repassa els `REVISIO-fullN.html`.** És la clau de respostes completa:
  enunciat, opcions, quina és correcta, el diagnòstic de cada distractor i la
  resolució. Un build net només garanteix que les regles de validació es
  compleixin, no que les matemàtiques i la redacció siguin bones.
- **Mira el catàleg d'errors** del peu del `REVISIO-fullN.html`. Una etiqueta
  amb molts usos escampats per blocs molt diferents sol voler dir que s'ha
  fet servir de calaix de sastre, i llavors el panell «els errors que
  repeteixes» del full mostra un consell que no té res a veure amb el que
  l'alumne ha fallat.
- **Comprova la taula «Graduació per bloc»** que hi ha al peu de cada
  `REVISIO-fullN.html`. Diu quants exercicis té cada bloc a cada nivell de
  dificultat (1 directa, 2 encadenada, 3 completa) i marca en vermell els que
  han quedat amb un sol nivell. Un bloc de problemes tot a nivell 3 és
  correcte; un bloc de mecànica tot a nivell 2 vol dir que la taula
  `dificultats()` del generador no s'ha pensat, i llavors l'itinerari només
  li podrà donar a l'alumne exercicis del mateix graó.
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
  | 10 | 200b, 202c |
  | 12 | 240c, 240d, 243 |

- **Obre el lloc en un navegador de veritat.** El `<details>` del mapa, el
  comportament tàctil al mòbil i el renderitzat de KaTeX no es poden
  comprovar llegint el codi.

## Documentació

- **`HANDOVER.md`** — arquitectura: format de dades, motor, tutor,
  itinerari, claus de `localStorage`, i on tocar cada cosa.
- **`AUTHORING-GUIDE.md`** — com escriure el contingut d'un full nou a
  partir del material LaTeX font.
