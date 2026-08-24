# Diff sobre `repas-main`

Només fitxers **nous o modificats**, amb la jerarquia de directoris intacta.
Descomprimir a sobre del projecte original i llest.

    unzip -o repas-diff.zip -d ruta/al/repas-main/

Verificat: original + aquest diff == projecte complet, byte a byte, i
`sh tests/executa.sh` dona **291 comprovacions, 0 fallades** (calen 25 fitxers
de `vendor/`, per això hi són).

## Nous (25)

    REVISIO-CANVIS.md          què s'ha canviat i què queda pendent
    tools/_banc.json           enunciats indexats per id, per a la prova escrita
    vendor/katex/              KaTeX en local: .js, .css, auto-render, 20 woff2

## Modificats (32)

### La prova escrita
    tools/analitzador-plantilla.html   pestanya nova (+~380 línies)
    tools/build_codi.py                taula_banc() -> _banc.json, amb `ex` i
                                       herència d'encapçalament
    tools/build_analitzador.py         injecta /*__BANC__*/
    analitzador-repas.html             GENERAT

### Correccions de la revisió
    js/codi.js          PES.pista 6 -> 8; el recompte usa l'historial `errs`
    js/nucli.js         RE.apuntaError(): l'error no s'esborra en encertar
    js/practica.js      marca(-1) treu la trampa de teclat; usa apuntaError
    js/hub.js           pintaErrors() no dona el text genèric d'un altre bloc
    js/codi-ui.js       recuperació de progrés a partir d'un codi
    css/estil.css       caselles 26px + signe per estat; hover dins @media
    full.html           validació de ?full (injecció) + KaTeX local
    practica.html       ídem
    diagnostic.html     KaTeX local
    tools/build.py      KaTeX local al generador + conveni π al Full 9

### Generats de nou
    data/full9.js              només la descripció de dos blocs (π ≈ 3,14);
                               els 47 ítems són idèntics
    REVISIO-full{1..12}.html   només les 3 línies de KaTeX

### Proves (265 -> 291)
    tests/analitzador.test.js  +18: prova escrita (Full 9, mida, varietat,
                               integritat, transparència, orfes, impressió)
    tests/test_a11y.js         +7: injecció per ?full, trampa de teclat
    tests/codi.test.js         +2: ordre dels pesos, historial d'errors
    tests/executa.sh           no diu "verd" si ha saltat blocs per falta de jsdom

### Documentació
    README.md                  prova escrita, recuperació, deute del catàleg TAX

## No hi és

`tools/_taules.json` és un intermedi de compilació que l'original tampoc
portava; el regenera `python3 tools/build_tot.py`.
