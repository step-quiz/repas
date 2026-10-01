# Brief · Agent **xtec** (me) — Refactor, graphs, and the merge

Three jobs, in this order. The first blocks everyone else; the third cannot
start until everyone else has finished.

---

## Job 1 · The enabling refactor — **before anyone is dispatched**

The four parallel tracks are only disjoint after this. Full specification in
`TECHNICAL-STATE.md` §9.2.

| | Change | Why |
|---|---|---|
| R1 | `tools/figures.py` → package `tools/figures/` with `__init__.py` (shared helpers, palette, re-exports), `planes.py`, `cossos.py`, `grafics.py`, `semblanca.py`, `arbres.py` | Otherwise every figure track edits one file |
| R2 | `lib.TAX` → package `tools/tax/`, auto-merged, **aborting on a duplicate key with different text** | Turns a silent semantic conflict into a build failure |
| R3 | `blocs([...])` registrar in `lib.py`, mirroring `dificultats()`; `build.py` collects instead of holding a central list | Lets a module declare its own blocks |
| R4 | Split `tests/test_banc.py`: global structure stays, per-topic assertions move to `tests/test_<tema>.py` | `unittest discover` picks them all up |
| R5 | Freeze and name the baseline ZIP | Merging work built on different baselines is the failure mode |

**Acceptance:** `build_tot.py` produces byte-identical output to before the
refactor. This is a pure restructuring; if any `data/*.js` changes, something
is wrong. Full suite green.

Ship the new baseline to all four agents together with their briefs.

---

## Job 2 · Function graphs for Sheet 10 — while the others work

Sheet 10 has **73 items and 0 figures**, and it is the sheet where a figure
does the most work: reading a graph and producing one from an expression are
the actual skills.

**Files:** `tools/figures/grafics.py`, `tools/c_funcions.py`,
`tools/c_funcions_prod.py`, `tests/test_figures_grafics.py`.

**Target:** ≥ 45 of 73.

Templates: `eixos(xmin, xmax, ymin, ymax, graella=True)`,
`grafica_recta(m, n, ...)`, `grafica_parabola(a, b, c, marca_vertex=False,
marca_talls=False)`, `nuvol_de_punts(punts)`, `grafica_trossos(...)` for the
domain/range items.

**The constraint that matters:** a parabola drawn with its vertex and both
intercepts marked answers exercises 216 and 300–301 outright. Every annotation
must be a parameter, defaulting to off, and each item turns on only what its
statement already gives. Where the exercise *is* to read the graph (203, 206),
the graph is the statement and the annotations are the data.

This track is mine rather than delegated because it is the one where a
well-meant "more informative" figure quietly destroys a third of the sheet.

---

## Job 3 · The merge — after all four deliveries

Protocol in `TECHNICAL-STATE.md` §9.6. Eight steps: verify disjointness, apply
sources, rebuild from scratch, run the union of the suites, run the five
cross-checks no agent can run alone (item order, old codes still parse, no
duplicate tags, difficulty coverage, count-table coherence, determinism),
regenerate derived artefacts, **style pass**, consolidated delivery note.

Two things worth saying plainly about this job:

- **Step 3 will find real defects.** `_valida()` runs over the union that no
  single agent ever compiled. Expect duplicate error-tag names with different
  meanings and at least one option collision.
- **Step 7 is the one that will get skipped and shouldn't.** Four agents will
  write four registers of Catalan and four ideas of how much a hint gives away.
  The guide gets you most of the way; the rest is reading a sample of every
  track's feedback and normalising it. Budget real time.

---

## What I am deliberately not doing in this round

- **Recovering exercises 204, 205, 210, 211, 213 and 233** — blocked on scans
  of the textbook pages for sheets 10 and 11, which have never been supplied.
- **Anti-fraud tracks 8 and 10** — pattern comparison between students and
  temporal clustering. These need a policy decision first: this is formative
  review, and the more the tool resembles surveillance, the more it changes
  what students do with it.
- **Consolidating the duplicated `arrel_tex` / `frac_tex` helpers** — small,
  touches `lib.py`, and the signatures have already diverged. It belongs in a
  round where `lib.py` is not the shared spine of four parallel tracks.
