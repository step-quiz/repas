# Proves

```sh
sh tests/executa.sh
```

Gairebé no cal instal·lar res: les de Python van amb `unittest` de la biblioteca
estàndard i les de JavaScript amb Node pelat. **No es fa servir `pytest` ni
cap altra biblioteca de proves a posta**: el projecte no té dependències, i
afegir-ne una perquè les assercions siguin més boniques seria canviar una
propietat que val la pena per comoditat.

Hi ha dues excepcions, i totes dues se salten soles amb un avís groc si
no hi són:

- **jsdom**, per a les proves que necessiten un DOM (analitzador,
  accessibilitat, flux de la resolució i els botons dels recursos de
  `video.test.js`). Cal la versió 27 o posterior: les anteriors no porten
  `TextDecoder` i la pàgina d'exercici hi falla sense tenir cap error.

  ```sh
  npm install --no-save jsdom
  ```

- **Playwright**, per a `test_visibilitat_real.js`, que obre les pàgines amb
  un Chromium de debò per comprovar que el que porta `hidden` no es veu.

`test_lib.py` i una prova de `test_banc.py` importen el motor, que necessita
SymPy (`pip install sympy`).

## Què hi ha

| Fitxer | | Comprova |
|---|---:|---|
| `comu.py` | — | Carrega el banc un cop i el deixa a `TOTS` i `PLANS`. No importa res de `tools/` |
| `test_lib.py` | 38 | Els ajudants de `tools/lib.py` i que `_valida()` aturi de veritat el que diu que atura |
| `test_banc.py` | 21 | El banc compilat: estructura, presentació, catàleg d'errors, coherència de les taules, i que cap nota visible doni la resposta |
| `test_matematiques.py` | 14 | Recàlcul independent de les respostes, i que cap distractor algebraic sigui una resposta correcta |
| `test_enunciats.py` | 3 | El text dels enunciats: tres errors trobats en revisió humana |
| `test_opcions_distintes.py` | 2 | Cap distractor numèric no val el mateix que la resposta correcta |
| `test_figures.py` | 10 | Les figures i la coherència geomètrica dels enunciats |
| `test_figures_planes.py` | 15 | Les figures del Full 7 |
| `test_figures_semblanca.py` | 45 | Les figures del Full 8 |
| `test_figures_grafics.py` | 20 | Les gràfiques del Full 10 |
| `test_probabilitat_nou.py` | 20 | Recàlcul independent del contingut nou de probabilitat (Full 12) |
| `codi.test.js` | 44 | El format del codi: empaquetat, anada i tornada, control, compatibilitat RC1–RC3 |
| `test_registre.js` | 20 | El registre és d'una sola direcció: cap trampa no el renta |
| `calendari.test.js` | 16 | La feina demanada (10–20) i les dates de mostra; el lloc ja no parla de trams |
| `codi_ui.test.js` | 6 | El que el botó Codi diu a l'alumne: quants exercicis porta i quants se'n demanen, sense trams |
| `mini_examen*.test.js` | — | Quatre bateries del mini-examen estàndard |
| `teoria.test.js` | 3 | Els enllaços al llibre (se salten sense el repositori del llibre al costat) |
| `video.test.js` | 19 | El mapa de vídeos i els botons Teoria / Vídeo pintats de debò |
| `analitzador.test.js` | 111 | L'analitzador amb un DOM real: la nota única del tram, els 20 últims, el mini-examen i les baixades |
| `test_a11y.js` | 41 | Accessibilitat de `practica.html` i `diagnostic.html`: radiogroup, aria-checked, regions en viu, roving tabindex, fletxes |
| `test_flux_resolucio.js` | 18 | La resolució (i el «Per recordar») no s'ofereix mai sense una acció explícita de l'alumne |
| `test_visibilitat_real.js` | 15 | Amb un navegador real: el que porta `hidden` no es veu ni es pot clicar |
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
