# repàs-ESO — Technical State and Work Plan

**Audience:** an engineer or an AI agent picking this project up cold, with no
access to the conversation history that produced it.

**Language note:** this document is in English because it is meant to be read
by agents. Everything *inside* the project — code comments, docstrings, UI
strings, error feedback — is in Catalan, and must stay in Catalan. Do not
translate the project.

**Status as of this document:** 864 exercises across 12 sheets, 125 automated
checks green, build deterministic.

---

# Part I — What the project is

## 1.1 Premise

`repàs-ESO` is a static, offline-first website that helps a student entering
1st year of *batxillerat* in Catalonia rebuild the mechanical arithmetic and
algebra they were supposed to have consolidated during ESO (compulsory
secondary education, ages 12–16).

It is **formative practice, not assessment**. That distinction drives almost
every design decision in the project and you should keep it in mind:

- Hints are free and un-penalised. A student who opens a hint has not failed.
- The mark that reaches the teacher weights *consistency and volume* far more
  than *accuracy*, because a system that rewards accuracy teaches students to
  avoid hard exercises and never open a hint.
- The verification-code system proves that **work happened**, not **who did
  it**. This is stated explicitly in the teacher-facing UI. See §4.6.

## 1.2 Constraints that are not negotiable

| Constraint | Why |
|---|---|
| **No server.** Pure static files, opened from disk or any static host. | The teacher must be able to email a ZIP and have it work. |
| **No runtime dependencies.** No npm packages in the shipped site, no CDN except KaTeX. | Longevity. This must still work in five years without anyone maintaining a dependency tree. |
| **No build step required to *use* it.** The build only regenerates content. | A student cloning the repo can open `index.html`. |
| **All arithmetic exact.** `fractions.Fraction`, never float, when generating answers. | Floating point produces `0.30000000000000004` in a maths exercise. |
| **Answers are computed, never written by hand.** | Hand-written answers are how the original material accumulated errors. |
| **Deterministic build.** Two runs produce byte-identical output. | Otherwise diffs are useless and merges are impossible. |

## 1.3 The source material

The exercise bank was transcribed from a Catalan ESO textbook (13 `imN.tex`
source files, exercises numbered 1–259). The transcription is **not** verbatim:
the original is a printed book with figures, and this is a multiple-choice web
app. Every item had to be re-expressed as a question with exactly four options,
of which three are *diagnostic distractors* — each one modelling a specific,
named mistake.

Content written for this project rather than transcribed is numbered **from
260 upward**, so the provenance of any exercise is visible from its number.

---

# Part II — Architecture

## 2.1 The three layers

```
┌─ CONTENT LAYER ────────────────────────────────────────────────────┐
│  tools/c_*.py        one module per topic; declares exercises      │
│  tools/lib.py        the engine: Q(), D(), DT(), TAX, _valida()    │
│  tools/figures.py    parametric SVG generators                     │
│  tools/build.py      compiler: modules → data/fullN.js + REVISIO   │
└────────────────────────────────────────────────────────────────────┘
                                  │  python3 build_tot.py
                                  ▼
┌─ DATA ─────────────────────────────────────────────────────────────┐
│  data/fullN.js       generated; window.FULL = {...}                │
│  REVISIO-fullN.html  generated; human proof-reading view           │
│  js/codi-taules.js   generated; item order + difficulty + tags     │
│  analitzador-repas.html  generated; single-file teacher tool       │
└────────────────────────────────────────────────────────────────────┘
                                  │  loaded by
                                  ▼
┌─ PRACTICE LAYER ───────────────────────────────────────────────────┐
│  index.html + js/inici.js        portal, sheet list, progress      │
│  full.html + js/hub.js           one sheet: blocks, error panel    │
│  practica.html + js/practica.js  one exercise: 4-step cycle        │
│  js/nucli.js                     localStorage state, shared render │
└────────────────────────────────────────────────────────────────────┘
┌─ TUTOR LAYER ──────────────────────────────────────────────────────┐
│  diagnostic.html + js/diagnostic.js   15-probe initial test        │
│  js/diagnostic-dades.js               declared-vs-actual analysis  │
│  resultat.html + js/resultat.js       result presentation          │
│  itinerari.html + js/itinerari*.js    personalised ~24-item route  │
└────────────────────────────────────────────────────────────────────┘
┌─ VERIFICATION-CODE LAYER ──────────────────────────────────────────┐
│  js/codi.js       generation AND parsing, same file (§4)           │
│  js/codi-ui.js    the floating button and modal                    │
│  analitzador-repas.html   teacher analyser (generated)             │
└────────────────────────────────────────────────────────────────────┘
```

## 2.2 The build pipeline

```
cd tools && python3 build_tot.py
```

1. For each sheet N in 1..12: `python3 build.py N`
   - imports the modules listed in `FULLS[N]["moduls"]` **in a fresh process**
     (two modules imported into the same process would merge their banks)
   - each `Q(...)` call registers an item into `lib._BANC`
   - `lib._valida()` runs on every item and aborts on violation
   - writes `data/fullN.js` and `REVISIO-fullN.html`
2. `python3 build_codi.py`
   - reads all `data/fullN.js`
   - maintains `tools/codi-ordre.json` (append-only encoding order, §4.4)
   - maintains `tools/codi-etiquetes.txt` (append-only error-tag order, §4.5)
   - writes `js/codi-taules.js` and `tools/_taules.json`
3. `python3 build_analitzador.py`
   - injects `tools/_taules.json` and the literal text of `js/codi.js` into
     `tools/analitzador-plantilla.html`
   - writes `analitzador-repas.html`

**`build_tot.py` is the only correct entry point.** Running the steps out of
order silently produces an analyser that disagrees with the data.

## 2.3 The item contract

Every exercise is one `Q(...)` call:

```python
Q(qid, ex, ap, bloc, tipus, enunciat,
  correcta, distractors, pistes, resolucio,
  ex_text="", nota="", dif=None, nota_interna="", figura="")
```

| Argument | Meaning |
|---|---|
| `qid` | Stable identifier, e.g. `"67e"`. **Never reuse or renumber.** |
| `ex`, `ap` | Exercise number and sub-part letter |
| `bloc` | Block id; must exist in `FULLS[N]["blocs"]` |
| `tipus` | `A` computational, `B` conceptual, `C` other |
| `enunciat` | The question. LaTeX between `$...$`. |
| `correcta` | The right option |
| `distractors` | Exactly 3 `D(tex, error_tag, feedback)` |
| `pistes` | ≥1 progressive hints |
| `resolucio` | ≥1 worked steps |
| `ex_text` | Shared header for a multi-part exercise |
| `nota` | Student-visible note about an interpretation decision |
| `nota_interna` | **Never shown to students**; goes only to REVISIO |
| `dif` | 1/2/3; normally comes from the sheet's `dificultats()` table |
| `figura` | SVG string from `tools/figures.py` |

`lib._valida()` enforces, and **aborts the build** on violation:

- exactly 3 distractors
- 4 options distinct after whitespace normalisation
- every distractor has non-empty feedback
- ≥1 hint and ≥1 resolution step
- `dif ∈ {1,2,3}`
- the visible `nota` contains no `.tex`, "cal confirmar" or "abans de publicar"
- figures: `<svg>` root, `viewBox` present, no fixed `width`/`height` on the
  `<svg>` element, `role="img"` present, `<title>` present, no `$` inside

---

# Part III — Hard invariants

**Read this section before changing anything.** Each of these has already been
violated once, with consequences.

## 3.1 Item order is load-bearing

`js/codi-taules.js` stores, per sheet, an ordered list of item ids. The
verification code stores each exercise's state **by position in that list**.
If a position shifts, every already-issued code that covers that sheet decodes
into the wrong exercises — silently, with no error.

**This is handled for you.** `tools/codi-ordre.json` holds an **append-only**
encoding order, separate from the pedagogical order in `data/fullN.js`.
`build_codi.py` keeps existing ids at their existing indices and appends new
ones at the end, whatever position they occupy in the sheet.

Consequences you must respect:

- **Never delete or rename an item id.** If an exercise is withdrawn, leave its
  id in `codi-ordre.json` (the builder does this automatically and warns).
- **Never hand-edit `codi-ordre.json`.**
- Blocks in `codi-taules.js` are stored as **explicit lists of positions**, not
  ranges, because in the append-only order blocks are not contiguous.

## 3.2 Error tag indices are load-bearing

The code carries the student's three most-frequent error tags as **indices**
into `tools/codi-etiquetes.txt`. That file is append-only for the same reason.
`build_codi.py` maintains it and aborts if a tag would move.

## 3.3 Generated files are never edited or merged

| Generated | Regenerated by |
|---|---|
| `data/full*.js` | `build.py N` |
| `REVISIO-full*.html` | `build.py N` |
| `js/codi-taules.js` | `build_codi.py` |
| `tools/_taules.json` | `build_codi.py` |
| `analitzador-repas.html` | `build_analitzador.py` |
| `exemple-respostes.csv` | `node tools/fes-exemple.js` |

A merge conflict in any of these means someone edited a generated file. The
resolution is always: discard both sides, re-run `build_tot.py`.

## 3.4 The generator and the parser live in the same file

`js/codi.js` contains both `genera()` and `llegeix()`. The analyser does not
carry a copy — `build_analitzador.py` injects that exact file. If the two ever
diverge, the symptom is the worst possible: codes that parse into wrong data
with no error. Do not split them.

## 3.5 Options must be genuinely distinct

Not just textually — *mathematically*. The audit found several distractors that
were numerically equal to the correct answer (`3/6` against `1/2`, `50/38`
against `25/19`, `2+(n−1)·2` against `2n`). A student who computed correctly
was marked wrong.

When you write a parametrised family of items, **verify at design time** that
the four options are distinct for every parameter value. `_valida()` catches
textual duplicates; it cannot catch `0.5` vs `1/2`.

## 3.6 Figures accompany the statement, they do not replace it

Every `enunciat` must remain solvable with a screen reader. The statement keeps
the measurements in words; the figure is there to make it faster to grasp.
There is a test for this (`Figures.test_l_enunciat_es_resol_sense_veure_la_figura`).

---

# Part IV — The verification-code system

This is the most intricate subsystem. It exists so a student can prove work to
a teacher without the site ever collecting personal data.

## 4.1 Flow

1. Student works. Progress lives in `localStorage`, keyed per sheet.
2. Student presses the floating **Codi** button (top right, every working page).
3. `js/codi.js` serialises the complete state into a string.
4. Student pastes it into a Google Form. The Form supplies the identity.
5. Teacher pastes the resulting spreadsheet into `analitzador-repas.html`.

The site never asks for a name. The identity comes entirely from the Form.

## 4.2 Format

```
RC2 SSS DDD HH MMM  [per sheet: G + groups of 4]  [DIAG]  EEEEEEEEE  KK
```

| Field | Chars | Content |
|---|---:|---|
| `RC2` | 3 | Magic + version |
| `SSS` | 3 | Random salt |
| `DDD` | 3 | Days since 2025-09-01 (32768 days ≈ to 2115) |
| `HH` | 2 | Minutes/2 since midnight (2-minute resolution) |
| `MMM` | 3 | Bitmask: bits 0–11 sheets present, bit 12 diagnostic present |
| `G` | 1 | Number of 7-item groups for this sheet |
| `····` | 4 | One group = 7 exercises in base 6 |
| `DIAG` | 10 | 15 initial-test skills, base 8, two chunks |
| `EEEE` | 9 | Top 3 error tags (2-char index + 1-char count) |
| `KK` | 2 | Two check characters |

Per-exercise states, base 6: `0` not done · `1` right first try · `2` right on
second try · `3` right with hint · `4` wrong · `5` opened but not answered.

**Packing.** 6⁷ = 279 936 ≤ 32⁴ = 1 048 576, so seven exercises fit injectively
into four base-32 characters. This is verified exhaustively in the test suite:
all 279 936 combinations produce 279 936 distinct strings. Overhead over the
information-theoretic minimum is 10.5 %, which is quantisation waste, not loss.

**Alphabet:** `0123456789ABCDEFGHJKMNPQRSTVWXYZ` — no `I`, `L`, `O`, `U`, so a
code can be read aloud or typed. Parsing normalises `O→0`, `I/L→1`, `U→V`, case
and separators.

**Trailing empty groups are omitted**, so code length grows with work done, not
with sheet size. A half-finished 59-item sheet is 45 characters; the entire
864-exercise bank plus diagnostic is 490.

## 4.3 The check characters

```
K  = ( Σ (i+1)·value(charᵢ) )  mod 1021
K' = ( 317·K + 613 )           mod 1021        → 2 base-32 chars
```

1021 is prime and larger than both the alphabet size and any realistic code
length, which guarantees:

- **every** single-character substitution is detected
- **every** transposition of two characters is detected

Both are verified exhaustively in `tests/codi.test.js` over a 208-character
code: 0 of 6386 substitutions and 0 of 20304 transpositions pass.

Two earlier designs failed here and the failures are instructive:

- *Unweighted sum* (the plain DNI scheme): misses **all** transpositions.
- *Modulus 31 with a 32-character alphabet*: `0` and `Z` are congruent, so
  swapping them is undetectable. This was found by the exhaustive test, not by
  inspection.

## 4.4 The mark is derived, not carried

The code contains **no mark**. `resum()` computes it from the per-exercise
detail when parsing:

```
net 10 pts · segon 7 · pista 6 · fallat 0,  over 10 × exercises done
```

This closes, by construction, the classic hole in this kind of system: if a
code carried both a mark and a detail, and the checksum covered only the mark,
the detail could be edited freely. Here there are not two numbers that can
disagree, because there is only one.

## 4.5 What the analyser does

`analitzador-repas.html` is a single self-contained file, opened from disk, no
network. Four tabs:

- **Full de respostes** — paste the Google Sheet or open a CSV. Detects the
  separator, the code column, and the date format (see below). Shows
  per-submission rows with status marks, per-student summary, and a class
  aggregate (which blocks the class is stuck on, which exercises cost most,
  which error tags repeat).
- **Progrés del trimestre** — see §4.7.
- **Un sol codi** — decode one by hand.
- **Com funciona** — help, including an explicit statement of what the ✓ does
  *not* verify.

**Status marks**, in priority order:

| | Meaning |
|---|---|
| ✗ | Check characters fail: mis-copied or modified |
| ⇄ | This exact code was also submitted under a different email |
| ! | More than 30 minutes between generation and submission |
| ✓ | Intact and submitted promptly |

Integrity outranks provenance: a broken code shows ✗ even if it is also shared,
because otherwise the mark that actually indicates a problem would be hidden.
⇄ does stack with `!`.

**Date-format detection.** Google exports the timestamp in the sheet's locale,
which may be `d/m/Y` or `m/d/Y`. For days 1–12 these are indistinguishable from
the date alone. They are resolved by comparing against the date carried *inside*
the code — minutes elapse between generating and submitting, not months — and
decided by majority over the whole sheet.

## 4.6 What the ✓ does not verify

Stated plainly in the help tab, and worth repeating here because it is a design
boundary, not a bug:

- **Doing the exercises in someone else's browser.** Each student walks away
  with a differently-timed code. ⇄ does not catch this.
- **Forging a code from the console.** Everything needed is in `js/codi.js`,
  which must be public for the button to work. A server would prevent this; the
  project deliberately has no server. **This is unfixable within the current
  architecture and should be documented, not papered over.**
- **Doing the exercises with help.** The data shape is identical to working
  alone. Nothing to detect, by any system.

## 4.7 Trimester analysis

This rests on one property: **codes are cumulative**, so the difference between
two consecutive codes from the same student is exactly the work done in between,
with per-exercise outcomes. That is what makes progress measurable rather than
only state.

Four graded components, all weights editable in the UI:

| Component | Default | Measured as |
|---|---:|---|
| Constància | 35 % | Weeks containing **new** work, over expected weeks |
| Volum | 35 % | Exercises done, optionally weighted by difficulty (0.8/1.0/1.3) |
| Progrés | 20 % | Change in accuracy and hint-dependence, first half vs second |
| Encert | 10 % | Overall proportion solved |

Five decisions inside that are not obvious and should not be "simplified" away:

1. **A submission counts as a day of work only if it carries new exercises.**
   Re-sending the same code twenty times is not consistency; it shows as
   `2 (+4)` in the days column.
2. **The two halves compared for progress are split by cumulative volume, not
   by calendar.** A student who does 40 exercises on day one and 4 on the last
   would otherwise have 40 compared against 4.
3. **Accuracy change is standardised by difficulty.** Computed per difficulty
   level and recombined with the global mix. Without this, a student moving
   from level-1 to level-3 exercises appears to get worse.
4. **The baseline is the last code before the period.** Work done earlier does
   not count toward this trimester.
5. **The baseline is cumulative — the union of everything seen — not the
   previous code alone.** Normally identical, because each code contains the
   last. It stops being identical when a student loses their browser storage
   and starts again: their next code carries *fewer* exercises. With a
   non-cumulative baseline, everything they redid was counted twice (a
   simulation of 40 done, lost, 13 redone counted 47). The drop is detected and
   flagged.

Nothing is computed until **Accepta i calcula** is pressed. Changing a
parameter marks the button amber and leaves the marks alone. Putting a mark on
a student is not a live preview.

---

# Part V — What has been done

The project went through an audit followed by nine numbered remediation points
and four phases of infrastructure work. This section records what changed and,
more usefully, **what was wrong**, because the failure modes recur.

## 5.1 The audit

Two passes over 739 items. Every symbolically checkable answer was recomputed
independently with SymPy and `Fraction`: arithmetic and fractions (sheet 1),
powers (2), generating fractions of repeating decimals (1), polynomial
operations and division including Ruffini with non-monic divisors (4),
equations and systems (5). **Zero arithmetic errors were found.** The decision
to compute every option with exact arithmetic rather than write them by hand
had worked.

What was found was a different class of defect.

## 5.2 Defects found and fixed

| # | Defect | Consequence |
|---|---|---|
| 1 | **9/170a–e had no data.** `enunciat` was identical to the header; the measurements existed only in the hints. | Five exercises were unsolvable as presented. |
| 2 | **3/50b and 3/52c contradicted each other.** Each marked as an error the convention the other used as its answer. | A consistent student failed one of them whatever they did. |
| 3 | **Five distractors numerically equal to the key**: 12/257a (`3/6` vs `1/2`), 5/79e (`1281/159` vs `427/53`), 5/86c (`50/38` vs `25/19`), 3/54c, 4/74g. Three of them said so in their own feedback text. | Correct work marked wrong. |
| 4 | **10/200b's justification contradicted itself** — "always the same *or varies predictably*" — and the distractor was the better argument. | A conceptual item taught wrong reasoning. |
| 5 | **Difficulty ordering was `enunciat.length`.** 57 % of items carry their context in the shared header, so their statements are artificially short and sorted to the front regardless of difficulty. | The itinerary opened sheet 9 with the five unsolvable items, and never reached the substantive work (216a–d on parabolas never appeared). |
| 7 | **`SIMPLIFICACIO_INCOMPLETA` used as a catch-all**: 119 uses, 7 about simplification. The repeated-errors panel aggregates by tag. | A student failing five geometry problems was told to find the GCD of a numerator and denominator. |
| 9 | Malformed LaTeX (`$$` doubled), `36--64` in worked solutions, `1x` coefficients, five distractors rendering as plain text (a visual giveaway), 14 notes leaking `.tex` filenames and "confirm before publishing" to students, "funció lineal" used for affine functions throughout sheet 10. | |

## 5.3 Fixes, point by point

- **Point 1** — measurements moved into the statements of 170a–e, following the
  pattern already used by exercise 195.
- **Point 2** — the contradiction resolved by adopting `a₁+(n−1)d` as each
  exercise's own convention and removing the equivalent option from both.
- **Point 3** — all five equivalent distractors replaced with plausible,
  specifically-wrong alternatives. `1/20a` deliberately left alone: there the
  statement asks for the *irreducible* fraction, so an unsimplified answer is
  genuinely wrong.
- **Point 4** — 200b's domain fixed in the statement ("each month *of a given
  year*"), and the February distractor upgraded to a new tag
  `DOMINI_MAL_LLEGIT` whose feedback concedes it would be right on the
  unqualified domain.
- **Point 5** — explicit `dificultats({exercise: level})` tables, one per
  content module, three levels documented in `lib.py`. 206 / 350 / 183 items.
  `_valida()` aborts on a missing entry. `triaAmbVarietat` rewritten to take
  one exercise per level present before repeating a level, weighting the
  remainder 3-2-1 toward the entry level. Entry point changed in 25 of 46
  blocks.
- **Point 6** — the itinerary's empty state split in two, so a student who
  aced the initial test is no longer told to take it.
- **Point 7** — 107 distractors re-tagged into 58 new tags. The catch-all
  dropped from 119 uses to 7. `build.py` now emits each sheet's TAX texts into
  `data/fullN.js`, and `hub.js` uses them, so the repeated-errors panel shows
  the generic misconception rather than one exercise's numbers. Catalogue
  coverage 97 %.
- **Point 8** — 121 new exercises: measures of centre and spread (sheet 11,
  260–274), the multiplier factor and percentage applications (sheet 6,
  275–284), scales and the k/k²/k³ relation (sheet 8, 285–294), and production
  exercises for lines and parabolas (sheet 10, 295–304).
- **Point 9** — all rendering and terminology defects listed above.

## 5.4 Infrastructure phases

- **Phase 0** — test suite committed (see Part VI), `.gitignore`, and the
  count tables reconciled. There were **three** copies of the sheet-size table,
  and the third was student-visible: `js/inici.js` had hard-coded totals and the
  portal was showing "0/21" for a sheet with 48 items. It now derives them from
  `RE_TAULES`.
- **Phase 1** — ⇄ detection for identical codes under different emails
  (a student re-sending their own is not flagged), and the honest statement of
  what the ✓ does not verify.
- **Phase 2** — the figure pipeline end to end, proved on 123a–d.
- **Phase 3** — recovered 170f–i, and found that **170c was wrong**: it had
  been transcribed as a hexagon of side 8 with apothem 5.2, and a hexagon of
  side 8 has apothem 6.93. The 8 was the height. The answer changed from 537.6
  to 475.2 cm². Also: the append-only encoding order (§3.1), introduced because
  the "new content goes at the end" rule breaks the moment you recover an
  exercise that belongs in the middle.
- **Phase 4a** — 42 of 47 sheet-9 items given figures, seven new templates.

## 5.5 The apothem cross-check

Worth recording as a technique. When a statement gives the apothem of a regular
polygon, the reading can be **verified**:

```
a = s / (2·tan(π/n))
```

If the reading and the formula agree, the measurement is correctly assigned to
the right edge. If they disagree, it has been misread. This is what allowed
170f–i to be recovered from a scan without guessing, and what caught the 170c
error. `tests/test_banc.py::ApotemesCoherents` now checks it across the whole
bank on every run, with a 3 % tolerance for textbook rounding.

---

# Part VI — The test suite

```sh
sh tests/executa.sh          # 125 checks, no installation required
npm install --no-save jsdom  # only needed for the analyser tests
```

`unittest` from the standard library, not `pytest`, because the project has no
dependencies and adding one so assertions look nicer would trade away a
property that matters. The analyser tests need a DOM; without `jsdom` they skip
with a notice and the rest continues.

| File | Checks | Covers |
|---|---:|---|
| `tests/test_lib.py` | 37 | `lib.py` helpers; that `_valida()` actually rejects what it claims |
| `tests/test_banc.py` | 39 | The **compiled** bank: structure, presentation, independent maths, tag distribution, table coherence, figures, apothems |
| `tests/codi.test.js` | 25 | Code format: packing bijection, round-trip, checksum properties, RC1 back-compatibility, append-only order |
| `tests/analitzador.test.js` | 24 | The analyser with a real DOM |

## 6.1 Two properties that make these worth having

**Maths tests recompute from scratch**, with `Fraction`, importing nothing from
`tools/`. Checking `lib.py` with `lib.py` would let an engine bug pass on both
sides.

**Every `Presentacio` test is a scar, not an invented style rule.** The doubled
`$$` of 4/64a, the `36--64` of the discriminant, the delimiter-less options of
4/72a, notes leaking `.tex`, the empty statements of 170a–e. While writing
them, the `36--64` test caught a *new* instance in sheet 11 (`$10--4$` in
268c's feedback) — the same defect reintroduced two phases after being fixed.

## 6.2 When adding tests

Prefer one test that explains **why** something matters to three that check
details. In failure messages, say what broke and what it means, not only which
values differ.

---

# Part VII — Current state

## 7.1 The bank

| Sheet | Topic | Blocks | Items | With figure | L1/L2/L3 | kB |
|---:|---|---:|---:|---:|---|---:|
| 1 | Integers, fractions, decimals | 4 | 140 | 0 | 52/60/28 | 194 |
| 2 | Powers | 4 | 76 | 0 | 12/40/24 | 103 |
| 3 | Sequences and progressions | 4 | 50 | 0 | 10/26/14 | 83 |
| 4 | Polynomials | 4 | 59 | 0 | 10/25/24 | 80 |
| 5 | Equations and systems | 5 | 99 | 0 | 40/42/17 | 137 |
| 6 | Proportionality, percentages | 5 | 48 | 0 | 12/20/16 | 73 |
| 7 | Pythagoras, areas | 4 | 55 | 4 | 8/32/15 | 85 |
| 8 | Thales, similarity | 6 | 59 | 0 | 17/27/15 | 93 |
| 9 | Solids, area and volume | 4 | 47 | **42** | 16/15/16 | 123 |
| 10 | Functions | 5 | 73 | 0 | 22/29/22 | 119 |
| 11 | Statistics | 5 | 91 | 0 | 35/35/21 | 153 |
| 12 | Combinatorics, probability | 4 | 67 | 0 | 16/35/16 | 131 |
| | **Total** | **54** | **864** | **46** | 250/351/238 | 1 374 |

## 7.2 Other numbers

- Error-tag catalogue: **245 tags**, covering 97 % of the 2 580 distractors
- Tutor reach: **42 of 54 blocks**, 673 of 864 questions
- Figure templates: 11
- Source lines: `tools/` 23 700, `js/` 2 200, `tests/` 1 500
- Analyser: 104 kB, single file, no network

---

# Part VIII — Backlog

Ordered by value per unit of effort, with honest estimates.

## B1 · Figures for sheet 7 — *large, high value*

55 items on Pythagoras and areas, 4 with figures. Needs new templates:
`poligon_regular` (127, 141, 142), `trapezi` (140), `sector_circular` and
`corona` (144), plus composite shaded-area figures (143) which are largely
one-off.

Unlike sheet 9, a meaningful fraction of these are bespoke, so the
template-reuse ratio is worse. Expect roughly half the productivity.

## B2 · Figures for sheets 8 and 10 — *medium*

Sheet 8: Thales configurations (two transversals cut by parallels) are highly
parametric — one template covers 152a–f. Similar-triangle pairs (154, 155) need
another.

Sheet 10: **function graphs**. A `grafica_recta(m, n)` and `grafica_parabola(a,
b, c)` with axes, grid and marked intercepts would serve 20+ items and is
exactly the kind of thing a generator does well. This is probably the single
highest-value figure work remaining.

## B3 · Recover the remaining excluded exercises — *blocked, then small*

| Sheet | Excluded | Status |
|---|---|---|
| 7 | 139, 145a/b/d | No verifiable data in the figure; guessing would produce wrong answers |
| 8 | 152d/g/h | Three parallels, three unknowns, tiny dimensions |
| 8 | 157 | Requires measuring the printed drawing with a ruler; no fixed answer |
| 9 | 170j, 178, 192, 194, 195b/d/g | Composite solids with no apothem or other cross-checkable datum |
| 10 | 204, 205, 210, 211, 213 | **The relevant PDF page was never supplied.** With it, these are recoverable via the figure pipeline |
| 11 | 233 | Same; also depends on an unreadable line chart |

**Unblocking action for the owner:** supply scans of the textbook pages
containing exercises 200–217 and 218–235. The sheet-10 ones in particular are
"draw or match a graph" exercises, which the figure pipeline can now express as
fixed-answer questions.

## B4 · Accessibility — *medium, overdue*

There are **three** `aria` attributes in the entire project and none on
`.opcio`. Selecting an answer communicates nothing to a screen reader.

Needed: `role="radiogroup"` / `role="radio"` with `aria-checked` on the option
buttons; `aria-live` on the feedback region; landmarks on the page shells;
visible focus states in `css/estil.css`; keyboard navigation through options.

## B5 · Subresource Integrity — *trivial*

Three KaTeX `<script>`/`<link>` tags load from jsDelivr with no `integrity=`.
Add SRI hashes and `crossorigin="anonymous"`.

## B6 · Anti-fraud tracks 8 and 10 — *medium, and a policy decision first*

Pattern comparison between students in the same class (per-item agreement,
restricted to `dif ≥ 2` items or ones with low class accuracy), and temporal
clustering of submissions.

**Do not build these without deciding the policy first.** This is formative
review; the more the tool resembles surveillance, the more it changes what
students do with it. ⇄ is worth it because it is cheap and catches the lazy
case. These two are a different thing.

## B7 · Content gaps still open — *large*

- Sheet 6 (48 items) and sheet 8 (59) remain the smallest relative to their
  importance downstream.
- Sheet 10 still has more recognition than production despite point 8.
- Sheet 12 has no conditional probability or tree diagrams.

## B8 · Duplicated helpers — *small*

`arrel_tex` exists in `c_geometria.py` (signature `(n, aprox, dec)`) and
`c_centralitzacio.py` (`(q, dec)`); `frac_tex` in `c_equacions.py` and
`c_funcions.py`. The signatures have already diverged, so consolidation into
`lib.py` needs care.

## B9 · Calibration of the trimester marking — *cannot be done without data*

The thresholds (30 % accuracy → 0, 90 % → 1; 20 pp improvement saturates) are
my choice and have no empirical validation. After one real trimester, check
whether the marks land where the teacher expects and adjust the targets and
weights, which is why they are editable.

---

# Part IX — Parallel execution plan

This is feasible, but **only after a preparatory refactor**. The obstacle is
not the volume of work; it is that several files are shared mutable state that
every content task wants to touch.

## 9.1 Why naive parallelism fails here

| Shared file | Every content task wants to | Conflict class |
|---|---|---|
| `tools/figures.py` | append a template | textual, frequent |
| `tools/lib.py` (`TAX`) | append error tags | textual, frequent |
| `tools/build.py` (`FULLS`) | add blocks and modules | textual, structural |
| `tests/test_banc.py` | add a test class | textual |
| `tools/codi-ordre.json` | (regenerated) | order-sensitive |
| `data/*`, `REVISIO-*` | (regenerated) | never merge |

Git would report conflicts in `figures.py` and `lib.py` on almost every pair of
agents. Worse, some conflicts are *semantic*: two agents each adding a tag named
`SIGNE_MAL` with different meanings merges cleanly and is wrong.

## 9.2 Preparatory refactor (single-threaded, ~1 session)

Do this before dispatching anyone.

**R1 · Split `figures.py` into a package.**

```
tools/figures/__init__.py     shared helpers (_svg, _text, palette) + re-exports
tools/figures/planes.py       plane figures      → owner: track FIG-7
tools/figures/cossos.py       solids (existing)  → frozen
tools/figures/grafics.py      function graphs    → owner: track FIG-10
```

`__init__.py` re-exports everything so `from figures import cub` keeps working.
Each agent owns one module; no shared file.

**R2 · Externalise the error catalogue.**

```
tools/tax/__init__.py      loads and merges every tax_*.py, aborting on
                           duplicate keys with different texts
tools/tax/tax_nucli.py     existing tags, frozen
tools/tax/tax_<track>.py   one per agent
```

The abort-on-duplicate is the important part: it turns a silent semantic
conflict into a build failure.

**R3 · Let modules declare their own blocks.**

Add a `blocs([...])` registrar to `lib.py`, mirroring `dificultats()`, so a
content module declares the blocks it contributes and `build.py` collects them
instead of holding a central `FULLS["blocs"]` list.

**R4 · Split the bank tests.**

`tests/test_banc.py` keeps global structural checks. Per-topic assertions move
to `tests/test_<track>.py`. `unittest discover` picks them up automatically.

**R5 · Freeze a baseline.**

Tag the repository state that all agents branch from, and record in each brief
the SHA or the ZIP name. Merging outputs from different baselines is where this
goes wrong.

After R1–R5, the file-ownership map is disjoint for the tracks below.

## 9.3 Track definitions

Each track is sized for one agent working independently.

---

### Track A · Sheet 7 figures

**Owns:** `tools/figures/planes.py`, `tools/c_geometria.py`,
`tests/test_figures_planes.py`

**Goal:** ≥ 45 of sheet 7's 55 items carry a figure.

**Templates to write:** `poligon_regular(n, costat, apotema=None,
diagonal=False)`, `trapezi(base_gran, base_petita, altura, isosceles=True)`,
`sector_circular(radi, angle)`, `corona(r_ext, r_int)`, `triangle_isosceles(base,
altura)`.

**Must not touch:** anything under `tools/figures/cossos.py`, `lib.py`,
`build.py`.

**Acceptance:** `sh tests/executa.sh` green; `build_tot.py` clean and
deterministic; every new figure passes the five `_valida()` figure rules; a
visual contact sheet delivered as `mostra-track-a.html`.

---

### Track B · Function graphs (sheet 10)

**Owns:** `tools/figures/grafics.py`, `tools/c_funcions.py`,
`tools/c_funcions_prod.py`, `tests/test_figures_grafics.py`

**Goal:** graphs for the ≥ 20 items where reading or producing a graph is the
point.

**Templates:** `eixos(xmin, xmax, ymin, ymax, graella=True)`,
`grafica_recta(m, n, ...)`, `grafica_parabola(a, b, c, marca_vertex=True,
marca_talls=True)`, `nuvol_de_punts(punts)`.

**Design constraint worth stating up front:** a graph that marks the vertex and
both intercepts gives away exercises 216 and 305. Mark only what the statement
already gives; expose the rest behind parameters so each item chooses.

**Acceptance:** as Track A, plus `mostra-track-b.html`.

---

### Track C · Accessibility and hardening

**Owns:** `js/practica.js`, `js/diagnostic.js`, `js/hub.js`, `js/inici.js`,
`js/itinerari.js`, `js/resultat.js`, `css/estil.css`, all page shells
(`*.html` except `analitzador-repas.html`), `tests/test_a11y.js`

**Goals:** B4 and B5 above. Options become a proper `radiogroup`; feedback
regions get `aria-live="polite"`; landmarks; visible focus rings; full keyboard
operation; SRI on the three KaTeX tags.

**Must not touch:** `tools/`, `js/codi*.js`, the analyser.

**Acceptance:** existing suite green; new `tests/test_a11y.js` asserting the
roles and attributes exist on rendered items; manual keyboard walk-through
documented in the delivery note.

---

### Track D · Content — sheets 6, 8, 12

**Owns:** `tools/c_percentatges.py`, `tools/c_escales.py`,
`tools/c_probabilitat.py`, `tools/tax/tax_contingut.py`,
`tests/test_contingut_nou.py`

**Goal:** ~60 new exercises. Sheet 12 gains conditional probability and tree
diagrams; sheets 6 and 8 gain depth in the areas the audit flagged as
under-weighted relative to their downstream importance.

**Numbering:** allocate 305–340 to this track exclusively, to avoid collisions.

**Acceptance:** as the others, plus **independent verification**: a script that
recomputes every new answer from scratch with `Fraction`/SymPy without
importing `tools/`, delivered as `tests/test_contingut_nou.py`.

---

### Track E (optional) · Analyser features

**Owns:** `tools/analitzador-plantilla.html`, `tests/analitzador.test.js`

**Goal:** B6, *if and only if* the policy decision has been made.

**Serialisation warning:** this track owns the analyser template exclusively.
No other track may touch it, because it is a single 1 400-line file with no
internal module boundaries.

---

## 9.4 The brief every agent gets

Give each agent, verbatim:

1. This document.
2. `AUTHORING-GUIDE.md` — the house rules for writing items, distractors and
   error tags. Non-negotiable; it encodes several lessons learned the hard way.
3. Their track definition, including the **exhaustive list of files they own**
   and the sentence *"changing any file not on this list will cause your work
   to be rejected at merge."*
4. The baseline identifier from R5.
5. The acceptance checklist.

## 9.5 What agents must deliver

**Sources only.** A ZIP containing:

- only files from their ownership list
- `mostra-track-X.html` if the track produces figures
- `NOTES-track-X.md`: what was done, what was decided and why, what was
  deliberately not done, and any defect found in existing content
- the output of `sh tests/executa.sh`

**Never:** `data/*.js`, `REVISIO-*.html`, `js/codi-taules.js`,
`analitzador-repas.html`, `tools/_taules.json`, `tools/codi-ordre.json`,
`tools/codi-etiquetes.txt`, `exemple-respostes.csv`, `__pycache__/`.

Those are all regenerated during the merge. An agent that ships them has almost
certainly also hand-edited one.

## 9.6 Merge protocol

Single-threaded, and mine to run.

```
1.  Verify disjointness.
    For each pair of deliveries, assert the file sets do not intersect.
    Any intersection is a brief violation → return to the agent.

2.  Apply sources onto the frozen baseline, track by track.
    No file should ever be written twice. If one is, stop.

3.  Rebuild from scratch.
    cd tools && python3 build_tot.py
    Any AssertionError here is a real defect, not a merge artefact:
    _valida() is checking the union that no single agent saw.

4.  Run the union of the test suites.
    sh tests/executa.sh
    Cross-track failures are the point of this step. Expect some.

5.  Cross-checks that no agent can run alone:
    a. Item order: the first N ids of every sheet unchanged vs baseline.
    b. Old codes: the RC1 reference code in tests/codi.test.js still parses
       to the same 7 exercises with the same identifiers.
    c. Error tags: no tag defined twice with different text (tax/__init__
       aborts, but check the message is comprehensible).
    d. Difficulty: every item has one; no block left with a single level
       unless it is a problems block.
    e. Counts: README, HANDOVER and js/inici.js agree with data/
       (TaulesCoherents covers this).
    f. Determinism: run build_tot.py twice, diff the outputs.

6.  Regenerate the derived artefacts.
    node tools/fes-exemple.js > exemple-respostes.csv

7.  Style pass.
    The real risk of parallel authoring is not conflicts, it is drift:
    four agents writing feedback in four different voices. Read a sample of
    each track's distractor feedback against AUTHORING-GUIDE.md §4 and
    normalise. Budget real time for this; it is the step most likely to be
    skipped and most likely to be missed by readers.

8.  Write the consolidated delivery note.
```

## 9.7 Honest assessment of the payoff

**Where parallelism helps:** Tracks A, B and D are genuinely independent
content work, and content work is the bulk of what remains. Three agents on
those three tracks is a real 3× on the largest part of the backlog.

**Where it does not:** anything touching the code format, the build pipeline,
`lib.py` or the analyser core is single-threaded by nature. Track E is
serialised against nothing else, but it is also one file.

**What it costs:** the R1–R5 refactor, plus a merge that is not free — step 7
in particular. For fewer than three agents, the refactor probably does not pay
for itself; do the work sequentially instead.

**The largest risk is not merge conflicts, it is inconsistency.** Four agents
will produce four registers of Catalan, four ideas of how much a hint should
give away, and four distractor styles. The `AUTHORING-GUIDE.md` exists to
prevent this and must be given to every agent, but it will only get you most of
the way.

---

# Appendix A — File inventory

## Generators (`tools/`)

| File | Lines | Sheet(s) | Notes |
|---|---:|---|---|
| `lib.py` | 1193 | — | Engine: `Q`, `D`, `DT`, `TAX`, `_valida`, `dificultats` |
| `build.py` | 511 | — | Compiler; holds `FULLS` config |
| `build_codi.py` | 208 | — | Code tables; owns the append-only orders |
| `build_analitzador.py` | 46 | — | Injects tables + `codi.js` into the template |
| `build_tot.py` | 46 | — | **The entry point** |
| `figures.py` | 431 | — | 11 parametric SVG templates |
| `fes-exemple.js` | ~200 | — | Generates the demo response sheet |
| `c_enters.py` | 332 | 1 | |
| `c_divisibilitat.py` | 343 | 1 | |
| `c_fraccions.py` | 466 | 1 | |
| `c_decimals.py` | 461 | 1 | |
| `c_potencies.py` | 1298 | 2 | |
| `c_successions.py` | 1288 | 3 | |
| `c_polinomis.py` | 1226 | 4 | |
| `c_equacions.py` | 2035 | 5 | |
| `c_proporcionalitat.py` | 642 | 6 | |
| `c_percentatges.py` | 438 | 6 | New content, 275–284 |
| `c_geometria.py` | 1518 | 7 | |
| `c_semblanca.py` | 1054 | 8 | |
| `c_escales.py` | 393 | 8 | New content, 285–294 |
| `c_cossos.py` | 1279 | 9 | |
| `c_funcions.py` | 1030 | 10 | |
| `c_funcions_prod.py` | 454 | 10 | New content, 295–304 |
| `c_estadistica.py` | 1461 | 11 | |
| `c_centralitzacio.py` | 805 | 11 | New content, 260–274 |
| `c_probabilitat.py` | 2070 | 12 | |

## Append-only state files

| File | Contains | Breaking it costs |
|---|---|---|
| `tools/codi-ordre.json` | Per-sheet encoding order | Every issued code covering that sheet |
| `tools/codi-etiquetes.txt` | Error-tag index order | The error summary of every issued code |

## Practice layer (`js/`)

`nucli.js` (state, shared rendering) · `inici.js` · `hub.js` · `practica.js` ·
`portada.js` · `proves-inicials.js` · `diagnostic.js` · `diagnostic-dades.js` ·
`resultat.js` · `itinerari.js` · `itinerari-dades.js` · `codi.js` ·
`codi-ui.js` · `codi-taules.js` *(generated)*

## Documentation

| File | Audience |
|---|---|
| `README.md` | Anyone arriving at the repository |
| `HANDOVER.md` | Whoever maintains it next; the normative reference |
| `AUTHORING-GUIDE.md` | Whoever writes new exercises |
| `EXEMPLE-LLEGEIX-ME.md` | The teacher, about the demo response sheet |
| `CODIS.md` | The verification-code system in full |
| `tests/LLEGEIX-ME.md` | How to run and extend the tests |

---

# Appendix B — Glossary

| Catalan | English | Note |
|---|---|---|
| full | sheet | The 12 topic units |
| bloc | block | Subdivision of a sheet |
| ítem | item | One question |
| enunciat | statement | The question text |
| encapçalament | header | Shared text for a multi-part exercise |
| pista | hint | Progressive, un-penalised |
| resolució | worked solution | Shown after answering |
| distractor | distractor | A wrong option modelling a named mistake |
| clau | key | Base64 blob holding answer, feedback, tags |
| itinerari | itinerary | Personalised ~24-item route |
| destresa | skill | One of the 15 initial-test probes |
| net / segon / pista / fallat / vist | first try / second try / with hint / wrong / opened | The five item states |

---

# Appendix C — Things that look like bugs and are not

- **`ok: 0` on all 15 initial-test probes.** `diagnostic.js` shuffles the
  options at render time.
- **`data/full1.js` is 194 kB.** Sheet 1 has 140 items each carrying options,
  hints, worked steps and per-distractor feedback.
- **The apothem of 170h is 4.25 where the formula says 4.33.** Textbook
  rounding. The test tolerates 3 %.
- **`1/20a` has three numerically equal options.** Deliberate: the statement
  asks for the *irreducible* fraction, so `25/10` is genuinely a wrong answer.
- **The time in a code has 2-minute resolution.** It fits in two characters and
  the 30-minute gap check does not need better.
- **Sheet 9 dropped from 43 to 47 items but codes still work.** The four
  recovered items were appended to the encoding order, not inserted.
