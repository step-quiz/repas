# Proves

```sh
sh tests/executa.sh
```

No cal instal·lar res: les de Python van amb `unittest` de la biblioteca
estàndard i les de JavaScript amb Node pelat. **No es fa servir `pytest` ni
cap altra biblioteca de proves a posta**: el projecte no té dependències, i
afegir-ne una perquè les assercions siguin més boniques seria canviar una
propietat que val la pena per comoditat.

L'única excepció és `analitzador.test.js`, que necessita un DOM. Si `jsdom`
no hi és, aquestes proves se salten amb un avís i la resta continua:

```sh
npm install --no-save jsdom
```

## Què hi ha

| Fitxer | | Comprova |
|---|---:|---|
| `comu.py` | — | Carrega el banc un cop i el deixa a `TOTS` i `PLANS`. No importa res de `tools/` |
| `test_lib.py` | 37 | Els ajudants de `tools/lib.py` i que `_valida()` aturi de veritat el que diu que atura |
| `test_banc.py` | 19 | El banc compilat: estructura, presentació, catàleg d'errors, coherència de les taules |
| `test_matematiques.py` | 11 | Recàlcul independent de les respostes, full per full |
| `test_figures.py` | 9 | Les figures i la coherència geomètrica dels enunciats |
| `codi.test.js` | 25 | El format del codi: empaquetat, anada i tornada, control, compatibilitat RC1 |
| `analitzador.test.js` | 24 | L'analitzador amb un DOM real |
| `test_a11y.js` | 28 | Accessibilitat de `practica.html` i `diagnostic.html`: radiogroup, aria-checked, regions en viu, roving tabindex |
| `test_flux_resolucio.js` | 15 | La resolució no s'ofereix mai sense una acció explícita de l'alumne |
| `arnes.js` | — | L'arnès de proves de JavaScript, quinze línies |

Cada fitxer es pot executar sol:

```sh
python3 -m unittest tests.test_figures -v
node tests/codi.test.js
```

**Si escrius contingut nou**, afegeix la teva classe a `test_matematiques.py` o
crea `tests/test_<el_teu_tema>.py`: la descoberta els troba tots dos, i un
fitxer propi evita conflictes si algú altre hi treballa alhora.

## Dues coses que fan que serveixin de res

**Les proves de matemàtiques recalculen la resposta de zero**, amb `Fraction`
de la biblioteca estàndard i sense importar res de `tools/`. Si per comprovar
`lib.py` es fes servir `lib.py`, una errada al motor passaria per les dues
bandes i no la veuria ningú.

**Cada prova de `Presentacio` correspon a un error que ja va arribar a
producció un cop**: els `$$` doblats del 4/64a, el `36--64` del discriminant,
les opcions sense delimitadors del 4/72a, les notes que parlaven de fitxers
`.tex`, els 170a–e sense enunciat. No són regles d'estil inventades: són
cicatrius.

Escrivint-les, la de `36--64` va atrapar un cas nou que s'havia colat al
Full 11 (`$10--4$` al diagnòstic del 268c). Aquesta és exactament la feina
que han de fer.

## Si n'afegeixes

Val més una prova que expliqui **per què** importa que tres que comprovin
detalls. Als missatges d'error, digues què s'ha trencat i què vol dir, no
només quins valors no coincideixen.
