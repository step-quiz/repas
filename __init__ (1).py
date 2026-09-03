# -*- coding: utf-8 -*-
"""tax/ — el catàleg d'errors, repartit en mòduls i fusionat aquí.

PER QUÈ ESTÀ REPARTIT. El catàleg és una de les peces que tothom vol tocar:
qui escriu exercicis nous gairebé sempre necessita una etiqueta nova. Amb un
sol diccionari dins de `lib.py`, dues persones treballant alhora tenen un
conflicte garantit.

Repartit en `tax_<tema>.py`, cada via té el seu fitxer i el merge és afegir
fitxers, que no té conflicte possible.

EL CONFLICTE QUE SÍ QUE IMPORTA. El perill de fusionar diccionaris no és el
textual sinó el SEMÀNTIC: dos autors que defineixen `SIGNE_MAL` volent dir
coses diferents es fusionen sense soroll i el resultat és que el panell
d'errors repetits diu una cosa que no toca. Per això aquesta fusió **atura la
compilació** si una clau apareix dues vegades amb textos diferents. Val més un
build trencat que un catàleg que menteix.

Repetir una clau amb el MATEIX text sí que es tolera: passa quan dos temes
comparteixen un malentès i tots dos el declaren.

PER AFEGIR-NE: crea `tax_<el_teu_tema>.py` amb un diccionari `TAX = {...}` i
prou. Aquest fitxer els troba sol.
"""
import importlib
import os
import pkgutil

TAX = {}
_ORIGEN = {}


def _carrega():
    aqui = os.path.dirname(__file__)
    for _, nom, _ in sorted(pkgutil.iter_modules([aqui])):
        if not nom.startswith("tax_"):
            continue
        mod = importlib.import_module("%s.%s" % (__name__, nom))
        for k, v in getattr(mod, "TAX", {}).items():
            if k in TAX and TAX[k] != v:
                raise AssertionError(
                    "etiqueta d'error duplicada amb textos diferents: %s\n"
                    "  a %s: %s\n"
                    "  a %s: %s\n"
                    "Dues etiquetes amb el mateix nom i sentits diferents es "
                    "fusionarien en silenci i el panell d'errors repetits "
                    "diria una cosa que no toca. Reanomena'n una."
                    % (k, _ORIGEN[k], TAX[k][:70], nom, v[:70]))
            TAX[k] = v
            _ORIGEN.setdefault(k, nom)


_carrega()
