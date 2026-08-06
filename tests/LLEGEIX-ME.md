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

| Fitxer | Comprova |
|---|---|
| `test_lib.py` | Els ajudants de `tools/lib.py`: aritmètica exacta, fracció generatriu, renderitzat LaTeX, i que `_valida()` aturi de veritat el que diu que atura |
| `test_banc.py` | El banc **ja compilat**: estructura, i recàlcul independent d'una mostra de respostes |
| `codi.test.js` | El format del codi de verificació: empaquetat, anada i tornada, caràcters de control, compatibilitat amb els codis RC1 antics |
| `analitzador.test.js` | L'analitzador, amb un DOM real: lectura del full, feina mínima, progrés del trimestre, pèrdua del navegador |
| `arnes.js` | L'arnès de proves de JavaScript, quinze línies |

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
