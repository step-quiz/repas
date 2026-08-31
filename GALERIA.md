# Reviewing this project the way a human does — a cold-start guide

You are an AI agent meeting this repository for the first time and asked to
judge the **quality of the material**: are the statements readable, do the
figures say what they should, does the layout hold together. Read this before
you start, because the obvious approach does not work.

## Why reading the source is not enough

Everything committed here is code. Python writes SVG, JavaScript assembles
pages, JSON holds the statements. None of it looks like what a student sees:

- A figure is the string `<svg viewBox="0 0 307 245">…</svg>` until a browser
  paints it.
- A formula is `$x^2$` until KaTeX typesets it.
- Text has no width until CSS pours it into a 20 rem column.

Real defects have lived in this project precisely in that gap. An angle arc
drawn the long way round, so it arched over the vertex instead of marking the
angle. Labels that rendered at 7 px because the drawing was too wide and the
CSS scaled the whole thing down. A list of 27 numbers inside one `$…$` block,
which KaTeX will never break across lines, so it ran off the card. **Not one
of those is visible anywhere in the source.** They were all found by a human
looking at a screen, and every one of them passed the automated test suite.

So: to review quality, you have to render first.

## The strategy: a gallery in three layers

The point of the layering is to make the review *tractable*. There are 892
items. Nobody — human or model — reviews 892 screenshots usefully. The layers
narrow it down to where looking is likely to pay.

### 1. The rendering

`tools/fes-galeria.py` builds one page per item using the real `css/estil.css`,
the real vendored KaTeX in `vendor/katex/`, and the real figure SVG from the
compiled bank, then screenshots it at mobile width. It also renders the
desktop view, and — separately — the exam print output at A4, which is a
different rendering path with its own failure modes. (The batch-exam PDFs are
where the most recent crop of bugs turned up.)

It uses `wkhtmltoimage`, a real WebKit engine. No network, no browser install,
no Playwright. Roughly one second per item.

```
python3 tools/build_tot.py          # the gallery reads the compiled bank
python3 tools/fes-galeria.py        # the 185 items that have a figure
python3 tools/fes-galeria.py --tot  # all 892
python3 tools/fes-galeria.py --fulls 7,9 --escriptori
```

Output lands in `galeria/`: one PNG per item, plus `index.md` and
`mesures.json`.

### 2. The automatic measurements

Taken from the images themselves, so they need no eyes and can gate a build:

- **Overflow.** `wkhtmltoimage` does not clip content that does not fit — it
  *widens the canvas*. So "rendered wider than requested" is an unambiguous
  overflow signal. This was validated against a known historical bug: item
  228a, with 27 heights inside a single `$…$` block, rendered 1078 px wide
  when 390 was requested; after the fix, exactly 390.
- **Absurd height**, which catches a figure that blew up.
- **Near-blank renders**, which catch a figure that failed to draw at all.

These are cheap and objective. Wire them into `tests/executa.sh` if you want
them enforced.

### 3. The prioritised index

`galeria/index.md` lists every item with its image and its measurements,
**sorted so the suspicious ones come first**. Everything the measurements
flagged is at the top under "Per mirar primer"; the rest is a table you sample.

This is the same division of labour the whole project runs on: measure what can
be measured, and spend the eyes on what cannot. The figure auditor
(`tools/auditoria/auditoria.py`) found 115 label defects nobody had noticed —
but the reversed arc, the 7 px labels and six students all doing polynomials
were all caught by a person looking.

## How to actually use it

1. Run the build, then the gallery.
2. Open `galeria/index.md`. Read the flagged section first and **look at those
   images**. You have vision; use it.
3. Then sample the rest. Bias your sample toward variety: one item per figure
   family (there are ~52, identifiable by the SVG `<title>`), rather than 30
   consecutive items from the same block.
4. When you find something, check whether it is one instance or a whole family.
   Most defects here have been systematic — a fixed offset in a generator, not
   a typo in one exercise.

## What the measurements will not catch

Be explicit with yourself about this, because a clean automatic pass proves
very little:

- Whether a figure means the right thing (an arc on the wrong side is
  perfectly sized).
- Whether a label is legible at the size it ends up (correct, in place, and
  7 px tall).
- Whether a glyph reads as intended. The first real finding from this gallery
  was that the vertex label `O` in the Tales figures is nearly
  indistinguishable from a zero in the monospace label font — while the
  statement calls it *O*.
- Whether the content is pedagogically sane: five questions that are five
  parts of the same two problems, a distractor that is also correct.

## Cautions

- **The temporary HTML must live inside the project root.** `wkhtmltoimage`
  resolves `css/` and `vendor/` relatively; from `/tmp` it silently finds
  neither and produces a screenshot with no styling and unrendered `$…$` that
  looks plausible and is worthless. The script already handles this; do not
  "simplify" it.
- **PNGs are quantised to 64 colours** before saving. Raw output is over 1 MB
  each; the bank would exceed a gigabyte. Line art and text survive
  quantisation unchanged.
- **`galeria/` is generated output.** Do not commit it and do not hand-edit it;
  regenerate instead.
- The gallery renders the item card only — statement, figure, options — not the
  surrounding navigation. That is deliberate: it is the content under review.
