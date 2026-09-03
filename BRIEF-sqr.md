# Brief · Agent **sqr** — Figures for Sheet 8 (Thales and similarity)

**Read first:** `TECHNICAL-STATE.md` and `AUTHORING-GUIDE.md`.

**Baseline:** the ZIP named in the dispatch message.

---

## Your goal

Sheet 8 (*Teorema de Tales. Semblança*) has **59 items and 0 figures**. Take it
to **at least 40**.

This sheet has the best template-reuse ratio of anything left: the Thales
configuration (two transversals cut by a set of parallels) is one function that
serves eight items, and the similar-triangle pairs are another that serves
fifteen.

## Files you own

```
tools/figures/semblanca.py       ← create; your templates
tools/c_semblanca.py             ← add figura=
tools/c_escales.py               ← add figura=
tools/tax/tax_semblanca.py       ← create, only if you need new tags
tests/test_figures_semblanca.py  ← create
```

Nothing else. Not `figures/__init__.py`, not `figures/planes.py` (agent uno
owns it), not `lib.py`, not `build.py`, none of the generated files.

## Templates to write

| Function | Serves |
|---|---|
| `tales(segments_a, segments_b, incognita, angle=25)` — two transversals from a common vertex cut by parallels, with each segment labelled | 152a–f, 153 |
| `parella_semblants(costats_a, costats_b, angles=None, marca=None)` — two triangles side by side, corresponding sides labelled, optionally an equal angle marked | 154a–d, 155a–e |
| `escala_regla(escala, mesura_plano, mesura_real)` — a bar-scale strip | 156, 285 |
| `figures_semblants_k(k, tipus)` — two similar shapes with the ratio, area ratio and volume ratio annotated | 290–294 |
| `ombra(altura_objecte, longitud_ombra, ...)` — object, sun ray and shadow forming a right triangle | 161–169 (the shadow problems) |

## Design constraints, non-negotiable

1. **The figure accompanies the statement.** Statements keep their numbers.
2. **In a Thales figure, the unknown segment is labelled `x` and left
   unmeasured.** The whole exercise is setting up the proportion.
3. **In `parella_semblants`, do not draw the two triangles to the true ratio if
   the ratio is extreme** — a 1:5 pair renders one of them illegible. Cap the
   visual ratio and let the labels carry the truth. Say so in a comment.
4. **For 290–294 (the k / k² / k³ block), the figure must not give away the
   relation.** Show two similar shapes and the ratio of one pair of sides; do
   not annotate the area or volume ratio, which is what the exercise asks for.
   This block exists specifically because students believe a 1:2 model has half
   the volume; a figure that answers it destroys it.
5. Conventions: `viewBox`, no fixed size, `currentColor`, `role="img"`,
   `<title>`, no `$`. `_valida()` enforces them.

## Watch out for

- **152a–h.** Six of the eight are in the bank; **152d, 152g and 152h are
  excluded** because the original figure has three parallels and three unknowns
  at unreadable scale. Do not attempt to recover them. If your `tales()`
  template turns out to handle three parallels cleanly, say so in your notes —
  that is useful information for a later, separate task, but recovering them
  needs the source figure, which you do not have.
- **157** is excluded because it requires measuring the printed drawing with a
  ruler. It has no fixed answer. Leave it.
- **Items 152a–f carry a `nota`** explaining how the segments were paired.
  Your figure must be consistent with that reading. Read the note before
  drawing.
- **The scales block (156–160, 285–289)** is mostly tables and word problems.
  Only some benefit from a figure; do not force one where it adds nothing. An
  honest 40 with good figures beats 55 with filler.

## Acceptance

- `sh tests/executa.sh` green
- `cd tools && python3 build_tot.py` clean and deterministic
- ≥ 40 of 59 items carry a figure
- `tests/test_figures_semblanca.py` covers each template across a spread of
  parameters, including a Thales figure with an extreme ratio and a
  similar-pair with k > 4

## Deliver

ZIP with **only** your five files, plus `mostra-sqr.html` (contact sheet, each
figure next to its statement) and `NOTES-sqr.md` (what, why, what not, and any
defect found in existing content — report, do not fix outside your files).

**Never ship** generated files: `data/*.js`, `REVISIO-*.html`,
`js/codi-taules.js`, `analitzador-repas.html`, `tools/_taules.json`,
`tools/codi-ordre.json`, `tools/codi-etiquetes.txt`, `__pycache__/`.
