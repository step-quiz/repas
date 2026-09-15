# TODO-AI.md — outstanding work on repàs-ESO

**Audience:** a Claude instance picking up this repository with no prior
context. Everything you need to act is here or reachable from a path named
here. Written in English because that is what the model reads best; **all
code, comments, identifiers and user-facing strings in this repo are in
Catalan and must stay that way.** Do not translate anything you touch.

**Last verified:** all builds and tests below were run green immediately
before this file was written. If something here does not reproduce, the repo
moved on and this file did not — trust the code, then fix this file.

---

## 0. Orientation, in the order you should read things

| Read this | To learn |
|---|---|
| `README.md` | what the product is |
| `HANDOVER.md` | project history and current state |
| `AUTHORING-GUIDE.md` §4bis | the 4-level difficulty scale; read before touching content |
| `CODIS.md` | the verification-code format (RC3), including its two hard ceilings |
| `DESPLEGAMENT.md` | what must never be published, and why |
| `tools/lib.py` | the content engine; `Q()`, `D()`, `DT()`, `dificultats()`, `blocs()` |
| `tools/build.py` | `_gradua()` and `_informa_graduacio()` — the difficulty ordering |

**Build:** `cd tools && python3 build_tot.py`. Takes ~3 min. Deterministic:
same inputs produce byte-identical outputs. If a rebuild produces a diff you
did not intend, stop and find out why before continuing.

**Test:** `sh tests/executa.sh`. **Run `npm install --no-save jsdom` first**
— see task 9, this is not optional advice.

Current baseline: 183 Python tests + 189 JS checks, all green. 951 items
across 12 sheets: 58 trivial, 257 direct, 398 chained, 238 complete.

---

## 1. `taula_proves()` parses JavaScript with a regex

**File:** `tools/build_codi.py`, function `taula_proves()` (~line 213).
**Severity:** medium. Build breaks silently-ish on an unrelated edit.

```python
parells = re.findall(r'\bid:\s*"(\w+)",\s*\n\s*tema:\s*"([^"]+)"', s)
assert len(parells) == 15, "esperava 15 proves, n'he trobat %d" % len(parells)
```

It reads `js/proves-inicials.js` — a JavaScript source file — with a regex
that depends on `id:` and `tema:` being on consecutive lines. Reformatting
that file, or reordering those two keys, breaks the build. The `assert`
catches it, so it fails loudly rather than corrupting data, which is why this
is medium and not high.

**Fix:** make `js/proves-inicials.js` emit its table as JSON that both sides
read, or move the canonical list into Python and generate the JS from it (the
direction the rest of the project already goes: `js/codi-taules.js` is
generated). Do not write a JS parser.

**Acceptance:** reformatting `js/proves-inicials.js` with any whitespace or
key order does not change `build_tot.py` output.

---

## 2. Answer keys are committed at the repository root

**Files:** `REVISIO-full1.html` … `REVISIO-full12.html`,
`analitzador-repas.html`, `tools/_banc.json`.
**Severity:** high **if the repository is public**. Unknown from inside.

`DESPLEGAMENT.md` states these must never reach the internet. They are
tracked in git at the repo root. `tools/fes-paquet-alumnat.py` guards the
*published folder*, not the repository. If this repo is public on GitHub,
`REVISIO-full1.html` is already readable through the repo page and
`raw.githubusercontent.com` regardless of what GitHub Pages serves.

**This is a human decision, not a refactor. Do not act unilaterally.** Ask
the owner whether the repo is public. Options, if it is:

- move generated keys to a private repo or a release artifact and gitignore
  them here (they are reproducible: the build is deterministic);
- or keep the repo private and publish only `public/`.

Note the trade-off: untracking them means a fresh clone cannot produce a
teacher package without running the full build first. That is probably fine —
the build is deterministic and takes three minutes.

---

## 3. `.github/workflows/unzip-upload.yml`

**Severity:** high. Arbitrary file overwrite in the repository.

The workflow runs `unzip -o "$z" -d .` on anything pushed under `_uploads/`,
then `git add -A && git push`, with `permissions: contents: write`. Any zip
can overwrite any tracked file; a zip with `../` paths can write outside the
tree. The bot commit then makes it permanent.

**Fix options, in order of preference:** delete the workflow; or restrict
extraction to a subdirectory, reject entries with `..` or absolute paths,
and never `git add -A` (add explicit paths only).

**Again, a human decision** — someone may depend on this. `.gitignore` now
exists, which reduces (does not remove) the blast radius.

---

## 4. Per-page payload — the one metric moving the wrong way

**Severity:** medium, and it degrades with every content addition.

To answer **one** exercise, `practica.html?full=1` downloads ~621 kB
uncompressed: 199 kB is the whole sheet's bank, 270 kB is KaTeX, the rest is
CSS/JS. Sheet sizes today:

```
full1  199.6 kB   full2  118.5 kB   full3   89.4 kB
full4   95.5 kB   full5  137.6 kB   full6   73.9 kB
full7  175.2 kB   full8  171.3 kB   full9  184.2 kB
full10 263.7 kB   full11 154.7 kB   full12 244.5 kB
```

This matters because the target hardware is school Chromebooks and phones on
mobile data, and because **every task in section 8 makes it worse.**

**Fix:** split `data/fullN.js` per block — `data/fullN-<bloc>.js` — and load
only the block being practised. Constraints you must respect:

- `hub.js` needs per-block *counts* and progress for the sheet landing page;
  emit a small `data/fullN-index.js` with ids and `dif` only, no
  `enunciat`/`opcions`/`figura`/`pistes`.
- `practica.js` navigates "next exercise" across the whole sheet in
  presentation order; it needs the index to know what comes next and must
  load the next block's file when it crosses a boundary.
- `codi-taules.js` is independent of this (it carries only ids and `dif`) and
  must not change.
- The site must keep working from `file://`.

**Acceptance:** `practica.html?full=1` under 250 kB; `sh tests/executa.sh`
green; `data/` still byte-reproducible.

---

## 5. `tools/lib.py` uses module-level mutable state

**Severity:** medium (architecture, not a bug).

`_BANC`, `_ERRORS`, `_DIF`, `_BLOCS` are module globals. Because content
modules register into them at *import* time, two sheets imported in one
process would merge their banks. `build_tot.py` works around this by
launching **one subprocess per sheet**. The docstring admits it.

Consequences: no parallel build in-process; tests must be careful about
import order; `dificultats({999: …})` in `tests/test_lib.py` pollutes a real
namespace (it uses out-of-range exercise numbers precisely to avoid
collisions, which is a workaround for the same problem).

**Fix:** a `Banc` builder object that `Q()`/`D()`/`dificultats()`/`blocs()`
write into, with a module-level default instance so existing content files
keep working unchanged. Then `build.py` can construct one `Banc` per sheet in
a single process.

**Do this before task 8 if you plan to add a lot of content**, because the
subprocess-per-sheet build is the slowest part of the loop.

---

## 6. `tools/analitzador-plantilla.html` is a 3,037-line single file

**Severity:** medium (maintainability).

93 named functions, 344 top-level declarations, longest functions
`analitzaTrimestre` (146 lines), `pintaProgres` (142), `detallProgres` (109).
HTML, CSS and JS all inline. It builds into `analitzador-repas.html` (1.7 MB)
by string substitution of `/*__TAULES__*/`, `/*__CODI__*/`, `/*__BANC__*/`.

It works and it is well commented. The cost is that every new feature is
more expensive than the last.

**Latent hazard, now guarded — do not remove the guard:** `_banc.json` is
injected inside an inline `<script>`. Inside a script the HTML parser looks
for the literal sequence `</script` and does not care that it sits inside a
JavaScript string. The bank currently carries SVG markup (`</text`, `</g`,
`</svg`) but no `</script`. The day a figure or an enunciat contains one, the
script is cut in half and the analyser is broken with no visible error until
someone opens it. `tools/build_analitzador.py` now asserts that none of the
four injected payloads contains `</script`, `<!--` or `<![`. Verified by
injecting `</script>` into the bank: the build exits 1 with the reason.

**Fix (larger, still open):** split the JS into modules under
`tools/analitzador/` and concatenate at build time, mirroring what
`tools/figures/` already does for figures and for the same stated reason
(parallel work without merge conflicts).

---

## 7. Content is fused with code

**Severity:** medium (architecture). ~29,000 lines of Python, mostly prose
literals.

`Q()` takes 15 parameters and is called with six positional arguments
including nested `D()` lists. Enunciats, distractors and feedback are Python
string literals inside `tools/c_*.py`. A teacher cannot fix a typo without
editing Python, and content review happens only by reading generated HTML.

Note the README's claim that "cap resposta s'escriu a mà" is true for numeric
answers (computed with `Fraction`/SymPy) and **false for prose answers**,
which are literals. Do not repeat that claim as unqualified.

**Fix (large, do not start without agreement):** move item content to a data
format (YAML/JSON per exercise) with a schema, keep the computation in Python,
and have `Q()` read the data. This is weeks, not hours.

**Cheap partial fix:** make `Q()` keyword-only after `bloc`. It makes call
sites readable and diffs meaningful, and it is mechanical.

---

## 8. 39 blocks still have no trivial-level exercise

**Severity:** low-medium. This is planned work, not a defect.

After the trivial tier was introduced, 11 blocks open at level 1, 6 are
legitimately advanced (all level 4, marked as such in the UI), and **39 open
at level 2 (directa)** — which is where the whole project opened before the
trivial tier existed. The build reports these as a count, deliberately without
warning, so the real signal ("opens at level 3 or 4 despite having a scale")
stays visible. See `_informa_graduacio()` in `tools/build.py`.

Largest blocks still without a trivial:

```
F1  decimals      54 items    F1  fraccions     41 items
F2  basiques      23 items    F1  enters        19 items
F3  termes        20 items    F2  verifica      20 items
F4  notables      12 items    F3  geometriques  11 items
```

**How to add one — follow the existing pattern exactly:**

1. Read `AUTHORING-GUIDE.md` §4bis for the trivial criterion. The cotton
   test: *if the student knows the definition they get it right; if not they
   get it wrong; and there is no third thing that can go wrong.*
2. Pick the next free exercise number (highest in use is 340).
3. Add to the relevant `tools/c_<tema>.py`: a `dificultats({N: 1})` block, an
   `E<N>` instruction string, and the `Q()` calls.
4. Reuse error labels from `tools/tax/` (256 exist). Only add a new label if
   nothing fits; new labels go in a `tax_<tema>.py` and are permanent
   (the catalogue is append-only by design).
5. Sheets 7 and 9 have a figure-coverage test (`tests/test_figures.py`
   requires ≥85 % on sheet 9) — new items there need figures from
   `tools/figures/`.
6. Update the counts in `README.md`, `HANDOVER.md`, `GUIA-PROFESSORAT.md`.
   **`tests/test_banc.py` will fail if you forget** — that is intentional.

**Instruction-writing rule, learned from human review and worth obeying:**
an instruction (`ex_text`) must be **self-contained and must name the object
it talks about**. It is read in three places where the surrounding context is
absent: a direct `?q=<id>` link, the analyser's printed exam, and the REVISIO
file. Write "Troba el vèrtex de la paràbola representada per l'equació
següent", not "Troba el vèrtex d'aquesta paràbola". Name the method when the
method is the point ("Fent servir el teorema del residu…", "Aplica la
propietat distributiva…"). Do not put hints in the instruction — hints go in
the `pistes` argument.

---

## 9. jsdom is not installed by default and 126 checks skip silently-in-yellow

**Severity:** medium. This has already cost real bugs.

`tests/executa.sh` skips three blocks (analitzador, accessibility, resolution
flow) when jsdom is absent, printing a yellow warning. The script's own
comment explains why that is dangerous. It then happened anyway: **21 checks
were red for an unknown period** because nobody ran them. The underlying bug
(`js/teoria.js` calling `fetch` unguarded, which took down the whole of
`practica.js`) shipped.

**Fix:** commit a `package.json` with jsdom as a devDependency and make the
script fail rather than warn when it is missing in CI. Keep the yellow-skip
for local runs if you like, but CI must go red.

**Until this is done: always run `npm install --no-save jsdom` before
trusting a green result.**

---

## 10. `document.write` in `full.html` and `practica.html`

**Severity:** low. Currently correct and deliberate; documented in place.

Both pages load `data/fullN.js` with `document.write`. This is **not** an
oversight — the parser block is load-bearing: it guarantees the data script
runs before the controller `<script>` that follows in the document. Replacing
it with `createElement` + `async=false` was tried and **broke the page**
(`practica.js` found `window.FULL` empty and returned immediately, leaving a
blank page); the accessibility tests caught it. The reason is written in a
comment at both call sites. Read it before touching them.

**Proper fix, if you want one:** make the consumers *wait for* the data
rather than assume it is present — e.g. `data/fullN.js` ends by calling
`RE_ARRENCA()`, or all scripts get `defer` and the consumers initialise on
`DOMContentLoaded`.

The consumers of `window.FULL`, verified by grep — do not trust a shorter
list:

- `js/hub.js` (loaded by `full.html`) — guards with `if (!window.FULL) return;`
- `js/practica.js` (loaded by `practica.html`) — same guard
- `js/diagnostic-dades.js` — different pattern: it loads sheets itself and
  stashes them as `window["FULL_" + n]`, so it is already asynchronous and is
  the model to copy
- `js/portada.js` — reads `window.FULL1`, a *different* global, loaded by
  `index.html`; not affected by this change but check it before you assume
- `js/nucli.js` — takes the object as an argument, does not read the global

`analitzador-repas.html` also references `data/full`, but it embeds the bank
at build time and is unrelated. Three files load `data/fullN.js` at runtime:
`full.html`, `practica.html`, and the analyser's own embedded copy.

---

## 11. Book-comparison tests never run here

`tests/executa.sh` skips them with "no s'ha trobat el repositori del llibre al
costat". They need the source-book repo as a sibling directory. If you have
it, place it alongside and re-run; those checks verify transcription fidelity
against the original exercises and are the only guard against a
transcription error that is internally consistent.

---

## Invariants — do not break these

These are load-bearing. Each has a test; if you find yourself editing the
test to make your change pass, stop and reconsider.

1. **Emitted verification codes must keep working.** `tools/codi-ordre.json`
   is append-only and keyed by id. Presentation order (`data/fullN.js`) and
   coding order are deliberately decoupled — reordering presentation is free,
   reordering `codi-ordre.json` invalidates every code a student has already
   submitted. Test: "l'ordre de codificació és append-only" in
   `tests/codi.test.js`.

2. **The RC3 format has two hard ceilings: 217 items per sheet and 12
   sheets.** Both used to overflow *silently*, producing a code that reported
   `integre: true` with all work lost. They are now explicit
   (`MAX_ITEMS`, `MAX_FULLS` in `js/codi.js`) and checked at build time
   (`comprova_sostres()` in `tools/build_codi.py`). Sheet 1 is at 144/217
   (66 %). Passing either ceiling needs a new format (RC4), not a patch.

3. **Nothing from the student answer sheet enters `innerHTML` unescaped.**
   The `grup` and `alumne` fields come from a form students fill in. Use
   `escapa()`, which covers `& < > " '` — the quotes matter because it is
   used inside `data-alumne="…"` attributes. Tests: "El full de respostes no
   pot injectar res a la pàgina" in `tests/analitzador.test.js`.

4. **An optional decoration must never take down the exercise.** This is the
   `teoria.js` lesson. Any call to an optional feature from the top level of
   a controller goes inside `try`/`catch`. Test: "Una decoració trencada no
   pot tombar l'exercici" in `tests/test_a11y.js`.

5. **`js/` is ES5 on purpose.** No arrow functions, no `let`/`const`, no
   template literals, no `fetch` without an `XMLHttpRequest` fallback. Verify
   with a grep before committing; the one modern API that slipped in broke
   the practice page.

6. **The build is deterministic.** Same input, byte-identical output. If your
   change makes a rebuild produce an unexpected diff, that is the bug.

7. **Tests must not be weakened to pass.** Two tests in this repo were
   written against snapshots ("the last four items", "under 600 characters")
   and went stale as the bank grew. They were rewritten to check the
   *property* (relative order; characters-per-item with a ceiling derived
   from the bank size), not the number. Do the same: if a test fails because
   the world legitimately changed, fix the test's *shape*, and say so
   explicitly in the commit and to the human.

8. **Figures accompany the enunciat, they do not replace it.** Measurements
   stay in the text so the exercise is solvable with a screen reader.
   `lib._valida()` enforces `role="img"`, `<title>`, a `viewBox`, no fixed
   width/height, and no `$` inside SVG. A `cota()` with empty text draws
   nothing — do not reintroduce empty dimension lines.

9. **Never cote a measurement the enunciat does not give.** If you need a
   pyramid drawn but only have the base area, pass `etq_costat=False` to
   `piramide_regular()` rather than inventing a side length.
