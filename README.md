# Repàs d'ESO — Full 1

Lloc estàtic d'autoavaluació de matemàtiques per a alumnes que comencen 1r de
batxillerat. HTML, CSS i JavaScript vainilla: no hi ha build, ni servidor, ni
dependències. Obre `index.html`.

## El cicle de l'alumne

1. Tria un apartat al mapa (o continua on ho va deixar).
2. Pot demanar fins a dues pistes graduades.
3. Tria la resposta entre quatre opcions. Si falla, rep un diagnòstic del seu
   error concret i té un segon intent.
4. Consulta la resolució pas a pas.

## Què hi ha

    index.html          portada: mapa de llacunes, blocs i resum d'errors
    practica.html       el cicle de quatre passos
    data/full1.js       banc de 140 preguntes (generat, no editar a mà)
    REVISIO-full1.html  clau de respostes completa per revisar
    tools/              generador del banc (Python + SymPy)

## Com està fet el banc

Cap resposta s'ha escrit a mà. Cada opció, correcta o falsa, surt d'avaluar una
expressió amb aritmètica exacta de fraccions:

    ev("(-13)*3 - (-12)*7")        ->  45     resposta correcta
    ev("(-13)*3 - 12*7")           -> -123    distractor RESTA_PRODUCTE_NEGATIU

Els distractors **simulen un error amb nom**. Quan l'alumne en tria un, el web
li diu quin malentès ha tingut, no només que ha fallat. El feedback de cada
error s'escriu un sol cop a `tools/lib.py` (`TAX`) i es reutilitza a tot el
lloc, de manera que el mateix malentès rep sempre la mateixa explicació.

El compilador comprova, per a cada pregunta, que hi hagi exactament tres
distractors, que cap coincideixi amb la resposta correcta ni entre ells, i que
totes tinguin pistes i resolució. Si algun cop falla, el build s'atura.

## Regenerar el banc

    cd tools && python3 build.py

Escriu `data/full1.js` i `REVISIO-full1.html`.

## Abans de publicar

Les respostes estan calculades, però **no revisades per una persona**. Repassa
`REVISIO-full1.html`, sobretot els ítems amb nota (interpretacions d'enunciats
ambigus, com el `30e` i el `30f`). Quan els validis, treu l'avís del peu de
`index.html`.

## Detalls

- El progrés es desa a `localStorage` (clau `repas-eso:full1`), per navegador.
- Les respostes van ofuscades en base64 dins del camp `clau` de cada ítem: és
  un dissuasiu contra el «veure codi font», no una mesura de seguretat.
- Les opcions es barregen a cada sessió, o sigui que «la B» no es pot compartir.
- Les matemàtiques es renderitzen amb KaTeX per CDN. Sense connexió es veu el
  LaTeX en cru, que continua sent llegible.
