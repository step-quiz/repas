# -*- coding: utf-8 -*-
"""figures.py — figures SVG per als enunciats que en necessiten.

MOTIU. Vint-i-dos exercicis de la font no s'han pogut transcriure perquè tota
la informació era al dibuix, i molts dels que sí que hi són s'han hagut de
descriure amb paraules («Quadrat de costat 4 cm, x és la diagonal») quan el
dibuix ho diria millor i més curt.

COM ESTAN FETES. Es GENEREN, no es dibuixen: cada funció rep les mesures i en
treu l'SVG. És el mateix criteri que la resta del projecte —les respostes es
calculen, no s'escriuen a mà— i té el mateix efecte: canviar el costat d'un
quadrat de 4 a 10 no demana redibuixar res.

CONVENCIONS, i val la pena respectar-les perquè el resultat sembli d'una peça:

- **Color**: `currentColor` per als traços i `--fig-plena` per als ompliments.
  Així la figura hereta el color del text i no cal mantenir dues paletes.
- **Mida**: `viewBox` amb coordenades pròpies i sense `width`/`height` fixos.
  El CSS li dona l'amplada; la figura s'hi adapta.
- **Text**: pla, mai LaTeX. Les etiquetes de dins d'un SVG no les toca KaTeX,
  i posar-hi `$...$` deixaria els dòlars a la vista.
- **Accessibilitat**: `role="img"` i un `<title>` que descrigui la figura amb
  paraules. Qui fa servir un lector de pantalla ha de poder resoldre
  l'exercici, i per això els enunciats continuen dient les mesures encara que
  hi hagi dibuix: **la figura acompanya l'enunciat, no el substitueix.**
"""

# Paleta: només dos tons, i tots dos definits al CSS del lloc.
OMPLERT = "var(--fig-plena, #E9F0F6)"
MARCA = "var(--fig-marca, #B3453C)"


def _svg(w, h, cos, titol):
    """Embolcall comú. `w` i `h` són les unitats del viewBox, no píxels."""
    return (
        '<svg class="figura" viewBox="0 0 %d %d" role="img" '
        'xmlns="http://www.w3.org/2000/svg"><title>%s</title>%s</svg>'
        % (w, h, titol, cos)
    )


def mesura(valor, unitat="cm"):
    """Una cota de figura: el número amb coma catalana i la unitat que toca.

    Existeix perquè el patró que hi havia abans, `"%g cm" % valor`, portava
    dos defectes que es van escampar per totes les plantilles:

    1. **La unitat anava cablejada a «cm».** Quan l'enunciat parla de metres,
       la figura el contradiu. Va passar de debò al 130 i al 140b/c/d del
       Full 7: enunciats en metres i figures en centímetres.
    2. **`%g` escriu el separador decimal amb punt.** Tot el projecte escriu
       `4{,}13`, i la figura deia `4.13`. Dins d'un SVG no hi ha LaTeX, o
       sigui que la coma hi va literal.

    Qualsevol plantilla que dibuixi una cota ha de passar per aquí.
    """
    return "%s %s" % (("%g" % valor).replace(".", ","), unitat)


def _text(x, y, s, ancora="middle", petit=False):
    return ('<text x="%g" y="%g" text-anchor="%s" class="fig-etq%s">%s</text>'
            % (x, y, ancora, " petita" if petit else "", s))


# ---------------------------------------------------------------------


# ---------------------------------------------------------------------
# El paquet
# ---------------------------------------------------------------------
# Les plantilles viuen en mòduls separats per TEMA, i no per cap raó
# estètica: quan diverses persones (o diversos agents) hi treballen alhora,
# un sol fitxer de figures és el que garanteix un conflicte a cada parella.
# Amb un mòdul per tema, cada via de treball té el seu i el merge és mecànic.
#
#   planes.py     figures planes: quadrats, rectangles, triangles, polígons
#   cossos.py     cossos geomètrics en perspectiva cavallera
#   grafics.py    gràfiques de funcions amb eixos
#   semblanca.py  configuracions de Tales i parells de figures semblants
#   arbres.py     diagrames d'arbre i taules de doble entrada
#
# Aquest __init__ reexporta-ho tot, de manera que `from figures import cub`
# continua funcionant exactament igual que quan tot era un sol fitxer.
#
# QUI AFEGEIXI UN MÒDUL NOU: importar-lo aquí i prou. No cal tocar res més.

from .planes import *          # noqa: F401,F403
from .cossos import *          # noqa: F401,F403
from .grafics import *         # noqa: F401,F403
from .semblanca import *       # noqa: F401,F403
from .arbres import *          # noqa: F401,F403
