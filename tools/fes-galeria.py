#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""fes-galeria.py — renderitza el banc tal com es veu de veritat.

PER QUÈ EXISTEIX

Tot el que hi ha al repositori és codi: Python que escriu SVG, JavaScript que
munta pàgines, JSON amb enunciats. Res d'això s'assembla al que veu l'alumne.
La figura és una cadena `<svg>` fins que un navegador la pinta; la fórmula és
`$x^2$` fins que KaTeX la compon; i el text no té amplada fins que el CSS el
reparteix en una columna de 20 rem. Els errors que hem trobat revisant amb els
ulls —un arc girat del revés, unes etiquetes de 7 px, una llista que sortia de
la targeta— no eren visibles enlloc del codi. Només ho eren un cop dibuixats.

Aquest script tanca aquest forat: renderitza cada ítem amb el CSS real, el
KaTeX real i les figures reals, i en deixa un PNG que una persona —o una IA amb
visió— pot mirar igual que miraria la pantalla.

COM FUNCIONA

Fa servir `wkhtmltoimage`, que és un WebKit de debò, i el KaTeX que el projecte
ja porta a `vendor/katex/`. No cal connexió ni navegador instal·lat.

Un detall que resulta ser el més útil de tots: quan el contingut vessa,
`wkhtmltoimage` no el retalla, **eixampla el llenç**. Això dona una prova
automàtica sense ambigüitat —imatge més ampla que la demanada = vessa— que
s'ha validat contra un error real: l'enunciat 228a, amb les 27 estatures dins
d'un sol bloc `$...$`, sortia de 1078 px en comptes de 390; un cop passat a
text pla, 390 clavats.

ÚS

    python3 tools/fes-galeria.py                # els ítems amb figura
    python3 tools/fes-galeria.py --tot          # els 892
    python3 tools/fes-galeria.py --fulls 7,9    # només aquests fulls
    python3 tools/fes-galeria.py --mobil        # hi afegeix la vista de mòbil

Cal haver compilat abans (`python3 tools/build_tot.py`).
"""
import argparse
import json
import os
import subprocess
import sys
import tempfile

AQUI = os.path.dirname(os.path.abspath(__file__))
ARREL = os.path.dirname(AQUI)
SORTIDA = os.path.join(ARREL, "galeria")

# QUINA AMPLADA ÉS LA BONA
#
# Els alumnes d'aquest centre treballen sobretot amb portàtil, i en concret
# amb Chromebook. El full d'estil dona a `.embolcall` un `max-width: 44rem`,
# o sigui 704 px de columna útil: aquesta és la vista que veurà la majoria i
# és la que es renderitza per defecte.
#
# L'amplada importa més del que sembla. Una revisió feta només a 390 px va
# reportar com a defecte que certes expressions es partien de línia amb el
# signe menys penjat al final —cosa certa a aquella amplada— quan a 704 px
# la mateixa expressió hi cap sencera. Revisar amb la columna equivocada fa
# perdre el temps arreglant coses que no es veuen i, pitjor, dona confiança
# sobre una vista que gairebé ningú no fa servir.
#
# El mòbil segueix important i per això hi ha `--mobil`, que hi afegeix una
# segona captura. Però és la comprovació addicional, no la principal.
AMPLE_PORTATIL = 704     # `.embolcall` fa max-width: 44rem
AMPLE_MOBIL = 390

# Marges de tolerància de les comprovacions automàtiques.
VESSA_PX = 4             # més ample que això per damunt del demanat = vessa
ALT_MAXIM = 2200         # més alt que això, per a un sol ítem, és sospitós
BUIT_MINIM = 900         # menys píxels de tinta que això = probablement buit


PLANTILLA = """<!DOCTYPE html>
<html lang="ca"><head><meta charset="utf-8">
<link rel="stylesheet" href="css/estil.css">
<link rel="stylesheet" href="vendor/katex/katex.min.css">
<style>
  /* La columna ha de ser EXACTAMENT la de la pàgina real. Abans aquí
     s'anul·lava el `padding` d'`.embolcall` i s'hi posava un `padding` de 14
     px al `body`; com que el real és d'1,1 rem (17,6 px), la galeria
     renderitzava una columna 7,2 px més ampla que la pàgina. Poc, però és
     precisament el marge on es decideix si una expressió llarga es parteix
     de línia o no, que és una de les coses que la galeria ha de detectar.
     Ara el `body` no hi posa res i el full d'estil real fa la seva feina.
     L'únic que es retalla és el `padding-bottom` de 5 rem, que només afegiria
     espai en blanc al final de cada captura. */
  body{background:#fff;margin:0;padding:0;width:%(ample)dpx}
  .embolcall{padding-bottom:1rem}
  /* CORRECCIÓ D'INSTRUMENT, no del lloc. `wkhtmltoimage` 0.12.6 no implementa
     la funció CSS `min()` i, en trobar-la, descarta la declaració SENCERA:
     `.figura{max-width:min(100%%,20rem)}` de `css/estil.css` desapareix i les
     figures es pinten a l'amplada tota de la columna en comptes dels 320 px
     que hi posa un navegador de debò. Comprovat amb un contenidor de 700 px:
     amb `min(100%%,20rem)` el dibuix ocupa 700 px; amb `20rem`, 320.

     Com que la columna del portàtil sempre passa dels 320 px, aquí
     `min(100%%,20rem)` equival a `20rem` i substituir-ho no altera res del
     que veu l'alumne. Al mòbil no caldria: el media query de <=520px ja hi
     posa `max-width:100%%`, que sí que s'entén.

     Sense això la galeria pintaria les etiquetes al doble de mida del que
     les veu l'alumne, que és precisament el defecte que `GALERIA.md` posa
     com a exemple del que la mesura automàtica no atrapa. La troballa i la
     correcció són de la revisió de figures feta en paral·lel. */
  .figura{max-width:20rem}
</style></head>
<body><main class="embolcall">
  <section class="targeta">
    <p class="petit apagat" style="margin:0 0 .3rem">%(id)s · full %(full)s · %(bloc)s</p>
    <p class="encap" id="encap">%(encap)s</p>
    <div class="enunciat" id="enunciat">%(enunciat)s</div>
    %(figura)s
    %(nota)s
    %(opcions)s
  </section>
</main>
<script src="vendor/katex/katex.min.js"></script>
<script src="vendor/katex/contrib/auto-render.min.js"></script>
<script>
  renderMathInElement(document.body, {
    delimiters: [{left: "$", right: "$", display: false}],
    throwOnError: false
  });
</script>
</body></html>"""


def html_item(it, ample):
    fig = ""
    if it.get("figura"):
        fig = '<figure class="figura-cont" id="figura">%s</figure>' % it["figura"]
    nota = ""
    if it.get("nota"):
        nota = '<p class="nota">%s</p>' % it["nota"]
    ops = ""
    if it.get("opcions"):
        # EXACTAMENT el marcatge que genera `js/practica.js`: un
        # `<button class="opcio">` amb la lletra en un `<span class="lletra">`.
        # Abans aquí s'hi posava `class="btn buit"`, i com que `.btn` porta
        # `font-weight:600` les opcions sortien en negreta a la galeria i no
        # al lloc. Una revisió humana ho va reportar com a defecte del web:
        # la galeria ha de reproduir la pàgina, no inventar-se-la.
        LLETRES = "ABCD"
        ops = ('<div class="opcions" role="radiogroup">'
               + "".join('<button class="opcio" type="button">'
                         '<span class="lletra">%s</span><span>%s</span></button>'
                         % (LLETRES[i] if i < 4 else "?", o)
                         for i, o in enumerate(it["opcions"])) + "</div>")
    return PLANTILLA % {
        "ample": ample, "id": it["id"], "full": it.get("full", "?"),
        "bloc": it.get("bloc", ""), "encap": it.get("encapcalament", "") or "",
        "enunciat": it.get("enunciat", ""), "figura": fig, "nota": nota,
        "opcions": ops}


def mesura(cami, ample_demanat):
    """Les comprovacions que no necessiten ulls, tretes de la imatge."""
    from PIL import Image
    im = Image.open(cami).convert("RGB")
    w, h = im.size
    tinta = 0
    px = im.load()
    # Mostreig cada 2 píxels: per saber si hi ha contingut n'hi ha prou i
    # estalvia la meitat del temps.
    for x in range(0, w, 2):
        for y in range(0, h, 2):
            r, g, b = px[x, y]
            if r < 245 or g < 245 or b < 245:
                tinta += 1
    avisos = []
    if w > ample_demanat + VESSA_PX:
        avisos.append("VESSA (%d px, se n'han demanat %d)" % (w, ample_demanat))
    if h > ALT_MAXIM:
        avisos.append("MOLT ALT (%d px)" % h)
    if tinta * 4 < BUIT_MINIM:
        avisos.append("GAIREBÉ BUIT (%d punts de tinta)" % (tinta * 4))
    return {"ample": w, "alt": h, "tinta": tinta * 4, "avisos": avisos}


def nom_fitxer(it, sufix):
    """`003-f01-1c.png`: número correlatiu, full i identificador de l'ítem.

    El número va DAVANT i és global a tota la tirada, de l'1 fins a l'últim.
    És el que permet revisar en llista i dir «hi ha un error al 264» sense
    haver de transcriure cap identificador: el número identifica el fitxer,
    l'ordena, i l'índex el tradueix a l'ítem del banc. El full i
    l'identificador hi són a continuació per poder situar-lo sense obrir
    l'índex."""
    return "%03d-f%02d-%s%s.png" % (it.get("_n") or 0, it.get("full") or 0,
                                    it["id"], sufix)


def renderitza(it, ample, sufix, verbos=False):
    """Un ítem → un PNG. L'HTML temporal ha d'anar DINS de l'arrel del
    projecte: `wkhtmltoimage` resol `css/` i `vendor/` en relatiu, i des de
    /tmp no els troba (i llavors surt una captura sense estils ni fórmules
    compostes, que sembla bona i no ho és)."""
    nom = nom_fitxer(it, sufix)
    desti = os.path.join(SORTIDA, nom)
    fd, tmp = tempfile.mkstemp(suffix=".html", dir=ARREL)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(html_item(it, ample))
        cmd = ["wkhtmltoimage", "--enable-local-file-access",
               "--javascript-delay", "700", "--width", str(ample),
               "--quality", "94", os.path.basename(tmp), desti]
        r = subprocess.run(cmd, cwd=ARREL, capture_output=True)
        if not os.path.exists(desti):
            return None, "no s'ha generat: " + r.stderr.decode()[-200:]
    finally:
        if os.path.exists(tmp):
            os.remove(tmp)
    _aprima(desti)
    return nom, None


def _aprima(cami):
    """Els PNG que treu wkhtmltoimage van en RGBA i pesen més d'1 MB cadascun:
    185 ítems serien 220 MB, i el banc sencer passaria del gigabyte. Un
    enunciat amb una figura són línies, text i quatre plans de color, o sigui
    que amb una paleta de 64 colors es veu igual i baixa a uns 8 kB. La
    diferència entre poder consultar la galeria i no poder-la ni moure."""
    from PIL import Image
    im = Image.open(cami)
    im.convert("RGB").quantize(colors=64, method=Image.MEDIANCUT).save(
        cami, optimize=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--tot", action="store_true",
                    help="tots els ítems, no només els que tenen figura")
    ap.add_argument("--sense-figura", action="store_true",
                    help="només els ítems SENSE figura (text i àlgebra purs)")
    ap.add_argument("--fulls", default="", help="p. ex. 7,9")
    ap.add_argument("--mobil", action="store_true",
                    help="hi afegeix una segona captura a %d px" % AMPLE_MOBIL)
    ap.add_argument("--limit", type=int, default=0)
    args = ap.parse_args()

    sys.path.insert(0, os.path.join(ARREL, "tests"))
    try:
        from comu import TOTS
        # `PLANS` aplana el banc i perd de quin full és cada ítem; aquí fa
        # falta per poder filtrar per full i per situar-lo a l'índex.
        PLANS = []
        for n in sorted(TOTS):
            for it in TOTS[n]:
                it = dict(it)
                it["full"] = n
                PLANS.append(it)
    except Exception as e:
        sys.exit("✗ no s'ha pogut llegir el banc (%s).\n"
                 "  Executa abans:  python3 tools/build_tot.py" % e)

    items = list(PLANS)
    # Demanar un full concret vol dir voler-lo SENCER. Si el filtre per
    # defecte (només els que tenen figura) s'hi apliqués igualment, un
    # `--fulls 1` no tornaria res, perquè el full 1 són nombres i no en té
    # cap: sembla que el full no existeixi quan el que passa és que el
    # filtre l'ha buidat.
    if getattr(args, "sense_figura", False):
        # El contrari del filtre habitual: els ítems que es veuran com a text
        # i prou. Serveix per revisar-los en llista, sense haver de navegar
        # pel web exercici per exercici.
        items = [i for i in items if not i.get("figura")]
    elif not args.tot and not args.fulls:
        items = [i for i in items if i.get("figura")]
    if args.fulls:
        vols = set(int(x) for x in args.fulls.split(","))
        items = [i for i in items if i.get("full") in vols]
    if args.limit:
        items = items[:args.limit]
    if not items:
        sys.exit("✗ cap ítem que encaixi amb el filtre")

    # Número correlatiu dins de la tirada, en l'ordre real del web (full i
    # després posició dins del full). Es posa DESPRÉS de filtrar, perquè els
    # números han de ser consecutius al que realment es renderitza: si es
    # numerés tot el banc, una tirada dels ítems sense figura tindria forats
    # i «el fitxer 264» no voldria dir el 264è de la carpeta.
    for k, it in enumerate(items, 1):
        it["_n"] = k

    os.makedirs(SORTIDA, exist_ok=True)
    print("Renderitzant %d ítems a %s/ …" % (len(items), os.path.basename(SORTIDA)))

    fitxes, errors = [], []
    for n, it in enumerate(items, 1):
        nom, err = renderitza(it, AMPLE_PORTATIL, "")
        if err:
            errors.append((it["id"], err))
            continue
        f = mesura(os.path.join(SORTIDA, nom), AMPLE_PORTATIL)
        f.update({"n": it.get("_n"), "id": it["id"], "full": it.get("full"),
                  "bloc": it.get("bloc", ""), "png": nom,
                  "figura": bool(it.get("figura")),
                  "encapcalament": (it.get("encapcalament") or "")[:90],
                  "enunciat": (it.get("enunciat") or "")[:130]})
        if args.mobil:
            nom2, err2 = renderitza(it, AMPLE_MOBIL, "-mobil")
            if not err2:
                f["png_mobil"] = nom2
        fitxes.append(f)
        if n % 25 == 0 or n == len(items):
            print("  %d/%d" % (n, len(items)))

    # Els sospitosos primer: així la revisió amb ulls va on hi ha
    # probabilitat de trobar-hi res, i la resta queda com a mostreig.
    fitxes.sort(key=lambda f: f.get("n") or 0)
    amb_avis = [f for f in fitxes if f["avisos"]]

    linies = [
        "# Galeria del banc — com es veu de veritat",
        "",
        "Generat per `tools/fes-galeria.py`. Cada PNG és l'ítem renderitzat "
        "amb el CSS real, el KaTeX real i la figura real, a %d px "
        "d'amplada, que és la columna que veu un portàtil." % AMPLE_PORTATIL,
        "",
        "**%d ítems · %d amb algun avís automàtic.**" % (len(fitxes), len(amb_avis)),
        "",
        "Els avisos no diuen que hi hagi un error, diuen on val la pena "
        "mirar. La resta de la llista queda com a mostreig.",
        "",
    ]
    if amb_avis:
        linies += ["## Per mirar primer", ""]
        for f in amb_avis:
            linies.append("- **%s** (full %s · %s) — %s  \n  `%s` · %dx%d px  \n  %s"
                          % (f["id"], f["full"], f["bloc"], "; ".join(f["avisos"]),
                             f["png"], f["ample"], f["alt"], f["enunciat"]))
        linies.append("")
    linies += [
        "## Totes, per ordre",
        "",
        "El **número** és el que has de dir per assenyalar un error: «hi ha "
        "un error al 264». L'`id` és el de l'ítem al banc, i és el que fa "
        "falta per anar a buscar-lo al codi font.",
        "",
        "| núm | id | full | bloc | enunciat | imatge |",
        "|---:|---|---:|---|---|---|"]
    for f in fitxes:
        text = (f.get("encapcalament") or "") + " " + (f.get("enunciat") or "")
        text = " ".join(text.split())[:95].replace("|", "\\|")
        linies.append("| %s | `%s` | %s | %s | %s | `%s` |"
                      % (f.get("n"), f["id"], f["full"], f["bloc"], text, f["png"]))
    if errors:
        linies += ["", "## No s'han pogut renderitzar", ""]
        linies += ["- **%s** — %s" % e for e in errors]

    idx = os.path.join(SORTIDA, "index.md")
    open(idx, "w", encoding="utf-8").write("\n".join(linies) + "\n")
    json.dump(fitxes, open(os.path.join(SORTIDA, "mesures.json"), "w",
                           encoding="utf-8"), ensure_ascii=False, indent=1)

    print("\n✓ %d imatges · %d amb avís" % (len(fitxes), len(amb_avis)))
    for f in amb_avis[:12]:
        print("   %-7s %s" % (f["id"], "; ".join(f["avisos"])))
    print("✓ %s" % os.path.relpath(idx, ARREL))
    if errors:
        print("✗ %d ítems no renderitzats" % len(errors))
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
