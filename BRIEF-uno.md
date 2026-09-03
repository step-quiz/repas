# Brief · Agent **uno** — Figures for Sheet 7 (plane geometry)

**Read first:** `TECHNICAL-STATE.md` (whole document) and
`AUTHORING-GUIDE.md`. This brief assumes both.

**Baseline:** the ZIP named in the dispatch message. Do not branch from
anything else; merging work built on a different baseline is where this goes
wrong.

---

## Your goal

Sheet 7 (*Teorema de Pitàgores. Àrees*) has **55 items and 4 figures**. Take it
to **at least 45**.

The sheet is the one where the gap hurts most: almost every statement
describes a shape in words ("Trapezi isòsceles de bases 6 cm i 10 cm i altura
3 cm") because the original was a printed figure.

## Files you own

```
tools/figures/planes.py          ← create; your templates live here
tools/c_geometria.py             ← add figura= to items
tools/tax/tax_geometria.py       ← create, only if you need new error tags
tests/test_figures_planes.py     ← create
```

**Touching any other file will get your work rejected at merge.** In
particular: not `tools/figures/__init__.py`, not `tools/figures/cossos.py`,
not `lib.py`, not `build.py`, and none of the generated files.

If you believe you need a change outside your list, stop and say so in your
notes instead of making it.

## Templates to write

| Function | Serves |
|---|---|
| `poligon_regular(n, costat, apotema=None, diagonal=False, etq_*)` | 127a–c (hexagon apothem), 141a/b, 142 (hexagon diagonal), 149 |
| `trapezi(base_gran, base_petita, altura, isosceles=True, etq_*)` | 140a–d |
| `triangle_isosceles(base, altura=None, costat=None, etq_*)` | 119, 124a–c, 125, 130, 132, 133 |
| `sector_circular(radi, angle, etq_*)` | 144b |
| `corona(r_extern, r_intern, etq_*)` | 144a, 151 |
| `rectangle_inscrit(base, altura)` | 129 |

`triangle_rectangle`, `quadrat_diagonal` and `rectangle_diagonal` already exist
in `figures/planes.py` after the refactor — move them there if they are not
already, but do not change their signatures.

## Design constraints, non-negotiable

1. **The figure accompanies the statement, it does not replace it.** Statements
   keep their measurements in words. There is a test for this.
2. **Mark only what the statement gives.** A triangle with base, height *and*
   hypotenuse marked hands the student Pythagoras. Where the exercise asks for
   a measure, label it with the letter (`x`, `a`) and leave it unmarked.
3. **Follow the existing conventions**, documented at the top of
   `tools/figures/__init__.py`: `viewBox` with no fixed `width`/`height`,
   `currentColor` for strokes, `--fig-plena` / `--fig-marca` for fills,
   `role="img"` plus a descriptive `<title>`, no `$` anywhere inside.
   `lib._valida()` will abort the build if you break any of these.
4. **Plain text labels only.** KaTeX does not enter an SVG.

## Watch out for

- **143a–d** (shaded areas inside squares and hexagons) are genuinely bespoke.
  Do them last, and if a shape needs a template that serves exactly one item,
  skip it and say so. A one-use template is not worth its maintenance.
- **145c** is a square with a circular hole — `corona` will not serve it
  directly; a small dedicated function is fine here because the shape recurs
  conceptually.
- **126a/b** and **139/145** are composite outlines whose measurements are only
  partially recoverable. `139`, `145a/b/d` are currently excluded from the bank
  entirely; **do not try to recover them** — that is a separate, blocked task.

## Acceptance

- `sh tests/executa.sh` green (install jsdom for the analyser tests)
- `cd tools && python3 build_tot.py` clean, and **deterministic**: run it twice
  and diff `data/full7.js`; they must be identical
- ≥ 45 of 55 items carry a figure
- `tests/test_figures_planes.py` asserts, at minimum: every template returns a
  valid SVG for a spread of parameter values, including degenerate ones
  (a trapezium with equal bases, a polygon with n=3)

## Deliver

A ZIP containing **only** the four files you own, plus:

- `mostra-uno.html` — a contact sheet of every figure you produced, with the
  statement it belongs to next to it. Copy the pattern from the existing
  `mostra-full9.html`.
- `NOTES-uno.md` — what you did; what you decided and why; what you did **not**
  do and why not; any defect you found in existing content (report it, do not
  fix it unless it is inside `c_geometria.py`).

**Never ship:** `data/*.js`, `REVISIO-*.html`, `js/codi-taules.js`,
`analitzador-repas.html`, `tools/_taules.json`, `tools/codi-ordre.json`,
`tools/codi-etiquetes.txt`, `__pycache__/`. They are regenerated at merge.
Shipping one usually means you also hand-edited it.
