# Brief · Agent **tarr** — New content for Sheet 12 (probability)

**Read first:** `TECHNICAL-STATE.md` and **all of** `AUTHORING-GUIDE.md`.
You are writing new exercises, so the authoring guide is your primary
reference, not background reading.

**Baseline:** the ZIP named in the dispatch message.

---

## Your goal

Sheet 12 (*Combinatòria i probabilitat*, 67 items) has a real curricular gap:
**no conditional probability, no tree diagrams, no dependent events.** Drawing
two balls without replacement never appears. That is 4th-year ESO content and
the direct prerequisite for the probability block of 1st *batxillerat*.

Write **~30 new exercises** in two new blocks, with tree-diagram figures.

## Files you own

```
tools/c_probabilitat.py          ← append your new exercises
tools/figures/arbres.py          ← create; tree-diagram templates
tools/tax/tax_probabilitat.py    ← create; your new error tags
tests/test_probabilitat_nou.py   ← create; independent verification
```

Nothing else. Not `lib.py`, not `build.py`, not any other `c_*.py`, not the
generated files.

## Exercise numbering

**Use 305–340 and no other range.** Numbers 1–259 belong to the source
textbook; 260–304 are already taken by earlier new content. Collisions across
agents are the one merge failure that cannot be resolved automatically.

## Blocks to add

Declare them with the `blocs([...])` registrar at the top of your module (see
`AUTHORING-GUIDE.md`; the registrar exists after the baseline refactor).

### Block `probabilitat_composta` (~16 items)

- Two experiments in sequence, **with** replacement: independent events,
  `P(A i B) = P(A)·P(B)`
- Two experiments **without** replacement: the second probability changes
- Tree diagrams: read one, complete one, build one
- `P(almenys un)` via the complement — the single most useful trick in the
  block, and the one students never find on their own

### Block `probabilitat_condicionada` (~14 items)

- `P(B|A)` from a two-way table (the sheet already has one at 254; reuse it)
- `P(B|A)` from a tree diagram
- Distinguishing `P(A i B)` from `P(B|A)` — the core confusion
- One or two items on why `P(B|A) ≠ P(A|B)`, with a concrete asymmetric example

## Design constraints, non-negotiable

1. **Exact arithmetic.** `fractions.Fraction` throughout. Probabilities are
   fractions; render them with `tex()`. Never float.
2. **Verify the four options are mathematically distinct for every item**, not
   just textually. `_valida()` catches `"$1/2$"` twice; it does not catch
   `1/2` against `3/6`. This exact defect was found five times in the audit and
   marked correct work as wrong. Check it at design time.
3. **Every distractor models a named mistake**, with feedback that names it.
   The obvious ones here: multiplying when the events are dependent, forgetting
   that the denominator shrinks without replacement, confusing `P(A i B)` with
   `P(B|A)`, adding probabilities that are not mutually exclusive, computing
   `1 − P(cap)` wrongly.
4. **Add a `dificultats({...})` table** covering every exercise number you use.
   The build aborts without it. Scale: 1 direct, 2 chained, 3 complete —
   documented in `lib.py`.
5. **Tree diagrams must not answer the question.** Label the branches with the
   probabilities the statement gives; leave the ones being asked for blank or
   marked with a letter.

## Templates for `figures/arbres.py`

| Function | Serves |
|---|---|
| `arbre(nivells, etiquetes, probabilitats, ressaltat=None)` — a probability tree of 2–3 levels, branch labels and probabilities, optionally one path highlighted | most of the block |
| `taula_doble(files, columnes, valors, incognita=None)` — a two-way contingency table rendered as SVG | the conditional items |

Conventions as in `tools/figures/__init__.py`: `viewBox`, no fixed size,
`currentColor`, `role="img"`, descriptive `<title>`, no `$` inside.

## Acceptance

- `sh tests/executa.sh` green
- `cd tools && python3 build_tot.py` clean and **deterministic**
- ~30 new items, all with `dificultats` entries, all with figures where a tree
  or table helps
- **`tests/test_probabilitat_nou.py` recomputes every new answer from scratch**
  with `Fraction`, importing nothing from `tools/`. This is not optional: it is
  the only reason the maths can be trusted. Follow the pattern in
  `tests/test_banc.py::MatematiquesFull11`.
- New error tags all present in `tools/tax/tax_probabilitat.py` with generic
  texts (no exercise-specific numbers — those go in the `D()` feedback)

## Deliver

ZIP with **only** your four files, plus `mostra-tarr.html` (your tree diagrams)
and `NOTES-tarr.md`: what you wrote, which pedagogical decisions you made and
why, what you deliberately left out, and — importantly — **which of your items
you are least confident about**. New content written by an agent has not been
reviewed by a teacher; saying which ones deserve a second look is more useful
than claiming they are all fine.

**Never ship** generated files: `data/*.js`, `REVISIO-*.html`,
`js/codi-taules.js`, `analitzador-repas.html`, `tools/_taules.json`,
`tools/codi-ordre.json`, `tools/codi-etiquetes.txt`, `__pycache__/`.
