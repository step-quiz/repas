# Reviewing this project the way a human does — a cold-start guide

You are an AI agent meeting this repository for the first time and asked to
judge the **quality of the material**: are the statements readable, do the
figures say what they should, does the layout hold together. Read this before
you start, because the obvious approach does not work.

## If you are the teacher opening a fresh conversation

Upload **one file**: a zip of the **whole** `repas` project — every file, not
a diff of what changed recently. About 3 MB. Exclude `galeria/`: it is
generated output and a stale copy is worse than none.

This has gone wrong once and it is worth being blunt about it. A reviewer was
handed a zip containing only the recently modified files. It was missing
`tools/lib.py`, `tests/comu.py`, `vendor/`, nine of the ten files in `js/`,
and `data/full1.js`. The documented pipeline could not run at all; the
reviewer had to reconstruct a loader from `tools/_banc.json` to do any work,
and reported as "orphan content" a set of items that are in fact published —
a reasonable inference from mutilated data. **A partial zip does not produce a
partial review; it produces a confidently wrong one.** `wkhtmltoimage`
is already in the container and KaTeX travels inside the project, so the model
can render everything itself and then look at the images with its own eyes.
Do not render on your machine and upload PNGs; it is slower and you would hit
the upload limit.

Then paste something like this:

> This is a maths revision site for students. Everything in it is code, so you
> cannot judge the quality of the material by reading it — the figures are SVG
> strings, the formulas are `$…$`, and the layout only exists in a browser.
>
> Read `GALERIA.md` first: it explains a three-layer method for reviewing this
> the way a human would, by rendering the items to images and looking at them.
>
> Then run the gallery and review [the figures / worksheet 9 / the exercises
> about percentages]. Report what you find, and be explicit about what you
> looked at and what you only sampled.

Three things worth adding to that prompt, depending on what you want:

- **To narrow the scope**: `--fulls 7,9` renders those worksheets *whole*,
  every item, figures or not. (With no `--fulls` and no `--tot`, only items
  that have a figure are rendered, which is the usual case for checking
  drawings.) Worksheet sizes range from about 47 to 140 items.
  Reviewing everything in one conversation is not realistic (see below).
- **To check a specific worry**: name it. "I think the labels on the solids
  are too small on a phone" gives the model something to test rather than a
  vague hunt.
- **To review the exams**: say so explicitly. That is a different rendering
  path from the practice page and needs its own pass.

### How much fits in one conversation

Perhaps 20 to 30 images, looked at properly. A model that claims to have
reviewed 185 has not looked at them; it has read the index. So:

- Ask for **one conversation per worksheet**, or per figure family.
- Or ask for the automatic layer over everything (fast, no images) and then
  eyes on the flagged ones plus a sample of about twenty.

Ask the model to say which items it actually opened. If the answer is vague,
that is your signal.

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
compiled bank, then screenshots it.

**Render at laptop width, because that is what the students use.** These
students work on Chromebooks. The stylesheet gives `.embolcall` a
`max-width: 44rem`, so the real content column is **704 px**, and that is the
default. `--mobil` adds a second capture at 390 px.

This is not a detail. A review done only at 390 px reported, as a defect, that
some expressions broke across lines with a minus sign stranded at the end —
true at that width, and false at 704 px, where the same expression fits on one
line. Reviewing the wrong column wastes effort on things nobody sees, and
worse, it gives you confidence about a view almost none of your readers use. It also renders the
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
- **KaTeX must be an old-compatible version.** `wkhtmltoimage` 0.12.6 runs an
  old WebKit that cannot parse the JavaScript of KaTeX ≥ 0.16.22: it throws a
  `SyntaxError` and silently renders nothing. The symptom is exactly the trap
  described above — a screenshot with the CSS applied and the formulas left as
  raw `$…$`, which looks fine and is worthless. The version vendored in
  `vendor/katex/` is known to work; if you ever replace it, re-check that a
  formula actually typesets in the gallery before trusting a single image.
- **PNGs are quantised to 64 colours** before saving. Raw output is over 1 MB
  each; the bank would exceed a gigabyte. Line art and text survive
  quantisation unchanged.
- **`galeria/` is generated output.** Do not commit it and do not hand-edit it;
  regenerate instead.
- The gallery renders the item card only — statement, figure, options — not the
  surrounding navigation. That is deliberate: it is the content under review.
