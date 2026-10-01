# Repartiment de la feina · cinc agents

Cada agent rep **tres coses**: `TECHNICAL-STATE.md`, `AUTHORING-GUIDE.md` i el
seu `BRIEF-<agent>.md`. Res més cal.

## L'ordre importa

```
   FASE 1  ·  xtec sol          refactor R1–R5, ~1 sessió
              ▼
              nova línia de base  →  es reparteix als quatre
              ▼
   FASE 2  ·  els cinc en paral·lel
              uno · sqr · feina · tarr        xtec: gràfiques del full 10
              ▼
   FASE 3  ·  xtec sol          merge, 8 passos
```

**No es pot dispatxar ningú abans de la fase 1.** Les quatre vies només són
disjuntes després del refactor: sense ell, `figures.py` i `lib.py` els voldrien
tocar tots.

## Qui fa què

| Agent | Feina | Fitxers propis | Objectiu mesurable |
|---|---|---|---|
| **xtec** | Refactor + gràfiques del Full 10 + merge | `figures/__init__.py`, `figures/grafics.py`, `tax/`, `lib.py`, `build.py`, `c_funcions*.py`, tot el merge | Build idèntic després del refactor; ≥45 de 73 ítems amb gràfica |
| **uno** | Figures del Full 7 | `figures/planes.py`, `c_geometria.py` | ≥45 de 55 ítems amb figura |
| **sqr** | Figures del Full 8 | `figures/semblanca.py`, `c_semblanca.py`, `c_escales.py` | ≥40 de 59 ítems amb figura |
| **feina** | Accessibilitat i SRI | `js/*.js` (excepte `codi*`), `css/`, els sis `*.html` de l'app | Radiogroup, live regions, teclat, focus, SRI |
| **tarr** | Contingut nou del Full 12 | `c_probabilitat.py`, `figures/arbres.py` | ~30 ítems de probabilitat composta i condicionada |

**Cap parella de vies comparteix cap fitxer.** És el que fa que el merge sigui
mecànic en comptes d'artesanal.

## Els números d'exercici

Perquè no xoquin:

| Rang | Qui |
|---|---|
| 1–259 | El llibre de text. Intocables. |
| 260–304 | Contingut nou ja existent |
| **305–340** | **tarr**, en exclusiva |
| 341+ | Lliure per a rondes futures |

## Regla comuna a tots

**Els fitxers generats no es lliuren mai.** `data/*.js`, `REVISIO-*.html`,
`js/codi-taules.js`, `analitzador-repas.html`, `tools/_taules.json`,
`tools/codi-ordre.json`, `tools/codi-etiquetes.txt`, `__pycache__/`.

Es regeneren al merge amb `cd tools && python3 build_tot.py`. Un agent que
n'enviï un és senyal que probablement també l'ha editat a mà, i llavors el
problema no és el fitxer sinó el que hi ha a sota.

## Què ha de tornar cada agent

1. Un ZIP **només amb els fitxers de la seva llista**
2. `NOTES-<agent>.md` — què ha fet, què ha decidit i per què, què **no** ha fet
   i per què no, i qualsevol defecte trobat al contingut existent (reportat,
   no arreglat, si és fora dels seus fitxers)
3. `mostra-<agent>.html` si la via produeix figures
4. La sortida de `sh tests/executa.sh`

## Una cosa que val la pena dir-los

El risc real d'aquest repartiment **no són els conflictes de fitxers** —això
està resolt per construcció— sinó la **deriva d'estil**: quatre agents
escrivint quatre registres de català i quatre idees de quant ha de donar una
pista. L'`AUTHORING-GUIDE.md` hi és per evitar-ho i cal donar-lo a tothom, però
només porta una part del camí. La resta és el pas 7 del merge, i és el que més
fàcilment se salta.
