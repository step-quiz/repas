# Brief · Agent **feina** — Accessibility and front-end hardening

**Read first:** `TECHNICAL-STATE.md` §B4, §B5 and Part II.
`AUTHORING-GUIDE.md` is not relevant to you — you touch no content.

**Baseline:** the ZIP named in the dispatch message.

---

## Your goal

There are **three `aria` attributes in the entire project** and none on the
answer options. To a screen-reader user, selecting an answer communicates
nothing: the buttons announce their text and no state.

Make the practice cycle fully usable with a keyboard and a screen reader, and
close the two security-hygiene gaps.

You are the only agent touching the front end. Nobody else will conflict with
you, and you must not touch anything under `tools/`.

## Files you own

```
js/practica.js  js/hub.js  js/inici.js  js/diagnostic.js
js/resultat.js  js/itinerari.js  js/nucli.js  js/portada.js
css/estil.css
index.html  full.html  practica.html  diagnostic.html
itinerari.html  resultat.html
tests/test_a11y.js               ← create
```

**Not** `analitzador-repas.html` (generated), **not**
`tools/analitzador-plantilla.html`, **not** `js/codi.js` or `js/codi-ui.js`
(the code system is frozen for this round), **not** anything under `tools/`.

## Work items

### 1 · The options are a radio group

In `practica.js` the four options are `<button class="opcio">`. They are
semantically a single-choice group and should announce as one:

- container `role="radiogroup"` with an `aria-labelledby` pointing at the
  statement
- each option `role="radio"` with `aria-checked="false"`, flipped on selection
- after answering, the chosen option keeps `aria-checked="true"` and the
  correct one gains `aria-describedby` pointing at the feedback

Same treatment in `diagnostic.js`, which has its own option rendering.

### 2 · Feedback must be announced

The feedback that appears after answering, the hint text, and the worked
solution are all injected without any live region. Wrap them in
`aria-live="polite"` containers that exist in the DOM from the start (a live
region added at the same moment as its content is not announced reliably).

### 3 · Keyboard operation

- Arrow keys move between options within the radio group; Space/Enter selects.
- The hint button, the "veure la solució" toggle and the navigation must all be
  reachable in a sensible tab order.
- **Visible focus.** `css/estil.css` has no `:focus-visible` rules at all.
  Add them, with enough contrast to survive both the light background and the
  coloured feedback states.

### 4 · Landmarks and headings

Each page shell needs `<main>`, and the heading levels need checking — several
pages jump from `h1` to `h3`.

### 5 · Subresource Integrity

Three KaTeX tags load from jsDelivr with no `integrity=`. Add SRI hashes and
`crossorigin="anonymous"`. Pin the version that is already referenced
(`katex@0.16.9`); do not upgrade it as part of this task.

## Design constraints

1. **Do not change any visible text.** The Catalan strings are as they are.
   You may add `aria-label` where a control has no accessible name.
2. **Do not change the four-step flow** (statement → hints → answer → worked
   solution) or the two-attempt rule. This is a presentation task.
3. **No new dependencies.** No a11y library, no polyfills.
4. Keep the existing code style: ES5-compatible, no build step, no modules.

## Acceptance

- `sh tests/executa.sh` green
- `tests/test_a11y.js` (jsdom, using the existing `tests/arnes.js` harness)
  asserting: the radiogroup and radio roles exist after render, `aria-checked`
  flips on selection, the live regions are present before content arrives, and
  every interactive element has an accessible name
- A **manual keyboard walk-through** documented in your notes: from
  `index.html`, reach a sheet, open an exercise, take a hint, answer, read the
  solution, and return — using only the keyboard. Write down what you did and
  where it was awkward.
- The three KaTeX tags carry `integrity` and `crossorigin`

## Deliver

ZIP with **only** your files, plus `NOTES-feina.md`: what you changed, the
keyboard walk-through, anything you found that is broken but outside your
ownership (report, do not fix), and any place where the accessible markup
forced a compromise you are not happy with.

**Never ship** generated files or anything under `tools/`.
