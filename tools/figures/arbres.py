# -*- coding: utf-8 -*-
"""figures/arbres.py — diagrames d'arbre i taules de doble entrada.

Vegeu `figures/__init__.py` per a les convencions comunes: viewBox sense mida
fixa, `currentColor` als traços, `role="img"` amb `<title>`, i cap `$` a dins.
`lib._valida()` atura la compilació si alguna no es compleix.

Dues plantilles:

  arbre(nivells, ressaltat=None)
      Diagrama d'arbre de probabilitat, de 2 o 3 nivells. Cada node es pot
      etiquetar amb la seva probabilitat (donada a l'enunciat) o deixar-se
      en blanc / amb una lletra (el que es demana calcular): vegeu §"El
      contracte de dades" més avall.

  taula_doble(files, columnes, valors, incognita=None)
      Taula de contingència (files × columnes) amb els totals de marge
      calculats automàticament. `incognita` permet amagar una cel·la
      concreta (per exemple, un total que l'alumne ha de deduir).

El contracte de dades d'`arbre()`
----------------------------------
Cada NIVELL és una llista de branques. Cada branca és un diccionari:

    {"etq": "V", "prob": "3/5"}       branca etiquetada "V" amb probabilitat
                                       3/5, ESCRITA (la dona l'enunciat)
    {"etq": "V", "prob": None}        branca etiquetada "V" sense probabilitat
                                       visible: es dibuixa amb una lletra
                                       (per defecte "?"), MAI amb el valor
    {"etq": "V", "prob": None, "incognita": "x"}   com l'anterior, amb la
                                       lletra pròpia en comptes de "?"

`prob` és sempre una cadena ja formatada (normalment amb `lib.tex()` PERÒ
sense els delimitadors `$...$`, perquè el text dins d'un SVG no passa per
KaTeX: aquí es escriu en pla, per exemple "3/5" o "2/4").

Per al primer nivell (les branques que surten de l'arrel), `nivells[0]` és
una llista plana de branques, una per resultat.

Per al segon nivell, `nivells[1]` porta UNA llista de branques per CADA node
del primer nivell, en el mateix ordre: `nivells[1][k]` són les branques que
surten del node `k` del primer nivell.

Per al tercer nivell (opcional), `nivells[2]` porta una llista de branques
per cada node de segon nivell, recorreguts en l'ordre natural (primer totes
les filles del node 0 del nivell 1, després les del node 1, etc.): és a dir
`nivells[2][j]` correspon al j-èsim node de segon nivell comptant en aquest
ordre, no al j-èsim node del primer nivell.

`ressaltat` és una llista d'índexs, un per nivell recorregut («quina branca
es tria a cada pas»): `ressaltat=[0, 1]` marca la branca 0 de l'arrel i,
d'entre les seves filles, la branca 1. Pinta aquest camí en `MARCA` i gruixa
el traç, perquè un ull s'hi fixi de seguida. Opcional: sense `ressaltat`,
totes les branques es dibuixen igual.
"""
from . import OMPLERT, MARCA, _svg, _text


# ---------------------------------------------------------------------
# arbre()
# ---------------------------------------------------------------------

def _fulles(node, nivells, prof):
    """Nombre de fulles (branques finals) que pengen d'un node, per repartir
    l'alçada disponible entre germans proporcionalment a la seva mida."""
    if prof >= len(nivells):
        return 1
    fills = nivells[prof][node]
    return sum(_fulles(k, nivells, prof + 1) for k in range(len(fills))) or 1


def _etiqueta_branca(b):
    """El text que va sobre la branca: el valor si el dona l'enunciat, o la
    incògnita (per defecte "?") si és el que s'ha de calcular. Mai totes
    dues coses a la vegada — una branca amb `prob` no és una pregunta."""
    if b.get("prob") is not None:
        return b["prob"]
    return b.get("incognita", "?")


def arbre(nivells, ressaltat=None):
    """Diagrama d'arbre de probabilitat, 2 o 3 nivells.

    Vegeu el contracte de dades al capdamunt del mòdul. Exemple (una bola
    d'una bossa amb 3 vermelles i 2 blaves, SENSE reposar-la, i se'n treu
    una segona):

        arbre([
            [{"etq": "V", "prob": "3/5"}, {"etq": "B", "prob": "2/5"}],
            [
                [{"etq": "V", "prob": "2/4"}, {"etq": "B", "prob": "2/4"}],
                [{"etq": "V", "prob": "3/4"}, {"etq": "B", "prob": "1/4"}],
            ],
        ], ressaltat=[0, 1])
    """
    n_nivells = len(nivells)
    assert n_nivells in (2, 3), "l'arbre admet 2 o 3 nivells, no %d" % n_nivells
    ressaltat = ressaltat or []

    PAS_X = 150.0          # separació horitzontal entre nivells
    ALT_FULLA = 44.0       # alçada reservada per cada fulla final; prou
                           # perquè l'etiqueta d'un node intermedi ("A", "B")
                           # no quedi arran de la branca del node veí quan
                           # les franges són petites (arrels amb 3+ branques)
    M = 30.0               # marge
    R_NODE = 4.0

    total_fulles = _fulles(0, nivells, 0) if n_nivells else 1
    alt_total = max(total_fulles * ALT_FULLA, ALT_FULLA)
    ample_total = M * 2 + PAS_X * n_nivells + 90  # +90 per a l'etiqueta final

    cos = ""
    x0, y0 = M, M + alt_total / 2.0

    def dibuixa(node_x, node_y, prof, branques, y_baix, y_dalt, cami):
        """Dibuixa les branques que surten d'un node i, recursivament, les
        seves continuacions. `y_baix`/`y_dalt` acoten la franja vertical
        reservada a aquest node i els seus descendents."""
        nonlocal cos
        n = len(branques)
        # Cada branca s'emporta una franja proporcional al nombre de fulles
        # que hi pengen, no una franja igual per a totes: així un node amb
        # tres continuacions no aixafa un node veí amb només dues.
        mides = [_fulles(k, nivells, prof + 1) if prof + 1 < n_nivells else 1
                 for k in range(n)]
        total = sum(mides) or 1
        y_cursor = y_baix
        marge_franja = (y_dalt - y_baix) / total
        for k, b in enumerate(branques):
            franja = mides[k] * marge_franja
            fill_y = y_cursor + franja / 2.0
            fill_x = node_x + PAS_X
            y_cursor += franja

            cami_k = cami + [k]
            marcat = cami_k == ressaltat[:len(cami_k)]
            color = MARCA if marcat else "currentColor"
            gruix = "2.5" if marcat else "1.3"

            cos += ('<line x1="%.1f" y1="%.1f" x2="%.1f" y2="%.1f" '
                    'stroke="%s" stroke-width="%s"/>'
                    % (node_x, node_y, fill_x, fill_y, color, gruix))

            # Etiqueta de la probabilitat: al mig de la branca, lleugerament
            # per sobre perquè no la travessi la línia.
            mx, my = (node_x + fill_x) / 2.0, (node_y + fill_y) / 2.0
            desplaç = -8 if fill_y <= node_y else 12
            cos_txt = _etiqueta_branca(b)
            cos += _text(mx, my + desplaç, cos_txt, petit=True)

            cos += ('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="%s" '
                    'stroke="currentColor" stroke-width="1.3"/>'
                    % (fill_x, fill_y, R_NODE, OMPLERT))

            es_fulla = prof + 1 >= n_nivells
            if es_fulla:
                cos += _text(fill_x + 12, fill_y + 4, b["etq"], ancora="start")
            else:
                # L'etiqueta del node intermedi (per exemple "V") va just
                # sota el node, petita, perquè no es confongui amb la
                # probabilitat de la branca que hi arriba.
                cos += _text(fill_x, fill_y - 10, b["etq"], petit=True)
                fills_next = nivells[prof + 1][_index_node(nivells, prof, cami_k)]
                dibuixa(fill_x, fill_y, prof + 1, fills_next,
                        fill_y - franja / 2.0, fill_y + franja / 2.0, cami_k)

    def _index_node(nivells, prof, cami_node):
        """A quina posició de `nivells[prof+1]` correspon el node identificat
        pel camí `cami_node` (el camí COMPLET fins a ell, longitud prof+1).
        Com que `nivells[prof+1]` numera els nodes en ordre de recorregut en
        profunditat (totes les filles del node 0, després les del node 1...),
        l'índex és la suma de les mides dels nodes germans anteriors més la
        posició pròpia."""
        if prof == 0:
            return cami_node[0]
        # prof == 1: l'índex dins nivells[2] és la posició global del node
        # de segon nivell dins del recorregut esquerra-dreta de tot l'arbre:
        # totes les filles dels nodes de primer nivell anteriors a cami_node[0]
        # ja ocupen posicions a nivells[2], més la posició pròpia cami_node[1].
        pos = 0
        for i0 in range(cami_node[0]):
            pos += len(nivells[1][i0])
        pos += cami_node[1]
        return pos

    # node arrel
    cos += ('<circle cx="%.1f" cy="%.1f" r="%.1f" fill="%s" '
            'stroke="currentColor" stroke-width="1.3"/>'
            % (x0, y0, R_NODE, OMPLERT))
    dibuixa(x0, y0, 0, nivells[0], M, M + alt_total, [])

    descripcio = ("Diagrama d'arbre de probabilitat de %d nivells, amb les "
                  "probabilitats donades sobre cada branca." % n_nivells)
    return _svg(int(ample_total), int(alt_total + 2 * M), cos, descripcio)


# ---------------------------------------------------------------------
# taula_doble()
# ---------------------------------------------------------------------

def taula_doble(files, columnes, valors, incognita=None):
    """Taula de contingència files × columnes, amb els totals de marge.

    `files` i `columnes` són les etiquetes (llistes de cadenes).
    `valors` és una llista de files, cada una una llista de nombres, en el
    mateix ordre que `files`/`columnes`: `valors[i][j]` és la cel·la de la
    fila i, columna j.
    `incognita`, si es dona, és una parella `(i, j)` o `(i, "total")` /
    `("total", j)` / `("total", "total")`: la cel·la (o el total) que no es
    mostra, dibuixada amb "?" perquè és el que ha de calcular l'alumne.

    Exemple (dinar de 60 persones, home/dona × carn/peix — l'exercici 254
    del banc ja fa servir aquestes dades en un altre format):

        taula_doble(["Homes", "Dones"], ["Carn", "Peix"],
                    [[16, 12], [20, 12]])
    """
    nf, nc = len(files), len(columnes)
    assert nf >= 1 and nc >= 1, "calen files i columnes"
    for fila in valors:
        assert len(fila) == nc, "cada fila de valors ha de tenir %d columnes" % nc
    assert len(valors) == nf, "calen %d files de valors" % nf

    tot_fila = [sum(valors[i]) for i in range(nf)]
    tot_col = [sum(valors[i][j] for i in range(nf)) for j in range(nc)]
    tot_gran = sum(tot_fila)

    def amagada(i, j):
        if incognita is None:
            return False
        ii, jj = incognita
        return (ii in (i, "total")) and (jj in (j, "total"))

    AMPLE_ETQ = 78.0
    AMPLE_COL = 56.0
    ALT_FILA = 32.0
    m = 14.0

    n_cols_taula = nc + 2       # etiqueta de fila + columnes + total
    n_files_taula = nf + 2      # capçalera + files + total

    w = AMPLE_ETQ + AMPLE_COL * (nc + 1) + 2 * m
    h = ALT_FILA * (nf + 2) + 2 * m

    cos = ""

    def cel·la(x, y, w_, h_, text_, cap=False, marcada=False):
        nonlocal cos
        ompl = OMPLERT if cap else "none"
        cos_local = ('<rect x="%.1f" y="%.1f" width="%.1f" height="%.1f" '
                     'fill="%s" stroke="currentColor" stroke-width="1"/>'
                     % (x, y, w_, h_, ompl))
        etq = "?" if marcada else str(text_)
        cos_local += _text(x + w_ / 2.0, y + h_ / 2.0 + 4, etq,
                           petit=not cap)
        return cos_local

    x = m
    y = m
    # cantonada buida
    cos += cel·la(x, y, AMPLE_ETQ, ALT_FILA, "", cap=True)
    # capçalera de columnes
    cx = x + AMPLE_ETQ
    for j, c in enumerate(columnes):
        cos += cel·la(cx, y, AMPLE_COL, ALT_FILA, c, cap=True)
        cx += AMPLE_COL
    cos += cel·la(cx, y, AMPLE_COL, ALT_FILA, "Total", cap=True)

    # files de dades
    ry = y + ALT_FILA
    for i, f in enumerate(files):
        cos += cel·la(x, ry, AMPLE_ETQ, ALT_FILA, f, cap=True)
        cx = x + AMPLE_ETQ
        for j in range(nc):
            cos += cel·la(cx, ry, AMPLE_COL, ALT_FILA, valors[i][j],
                          marcada=amagada(i, j))
            cx += AMPLE_COL
        cos += cel·la(cx, ry, AMPLE_COL, ALT_FILA, tot_fila[i],
                      marcada=amagada(i, "total"))
        ry += ALT_FILA

    # fila de totals
    cos += cel·la(x, ry, AMPLE_ETQ, ALT_FILA, "Total", cap=True)
    cx = x + AMPLE_ETQ
    for j in range(nc):
        cos += cel·la(cx, ry, AMPLE_COL, ALT_FILA, tot_col[j],
                      marcada=amagada("total", j))
        cx += AMPLE_COL
    cos += cel·la(cx, ry, AMPLE_COL, ALT_FILA, tot_gran,
                  marcada=amagada("total", "total"))

    descripcio = ("Taula de doble entrada: files %s, columnes %s, amb els "
                  "totals de cada fila, cada columna i el total general."
                  % (", ".join(files), ", ".join(columnes)))
    return _svg(int(w), int(h), cos, descripcio)
