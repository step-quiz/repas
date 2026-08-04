# Sistema de codis — només els fitxers nous i modificats

Aquest paquet conté **només** el que canvia respecte de l'estat que ja tens
publicat (punts 1 a 7 i 9 de l'auditoria). Copia'l a sobre del projecte i ja
està: `data/` i els `REVISIO-*.html` **no** s'han tocat gens amb aquesta
feina, per això no hi són.

Són 15 fitxers, 220 kB.

## Fitxers nous (10)

| Fitxer | Què és |
|---|---|
| `js/codi.js` | Generació **i** lectura del codi, al mateix fitxer |
| `js/codi-ui.js` | El panell del codi que veu l'alumne |
| `js/codi-taules.js` | GENERAT — ordre d'ítems, blocs i dificultats |
| `analitzador-repas.html` | GENERAT — l'eina del professorat, autònoma |
| `tools/build_codi.py` | Munta les taules a partir de `data/` |
| `tools/build_analitzador.py` | Incrusta taules + `js/codi.js` a la plantilla |
| `tools/analitzador-plantilla.html` | Plantilla de l'analitzador |
| `tools/build_tot.py` | Encadena tota la compilació en l'ordre correcte |
| `tools/codi-etiquetes.txt` | Ordre **append-only** de les etiquetes d'error |
| `CODIS.md` | Explicació completa del sistema |

## Fitxers modificats (5)

| Fitxer | Canvi |
|---|---|
| `full.html` | Contenidor `#codi-full` i tres `<script>` |
| `index.html` | Contenidor `#codi-tot` i tres `<script>` |
| `js/hub.js` | Tres línies: pinta el panell del full |
| `js/inici.js` | Quatre línies: pinta el panell de la portada |
| `README.md` | Secció «El codi per al professorat» + `build_tot.py` |
| `HANDOVER.md` | Secció 3.4 amb les decisions de disseny |

## Provar-ho

Obre `analitzador-repas.html` amb doble clic i prem **«Posa-hi un exemple»**.

## Recompilar

```
cd tools && python3 build_tot.py
```

Compila els dotze fulls, regenera `js/codi-taules.js` i torna a muntar
l'analitzador, en aquest ordre. Genera també `tools/_taules.json`, que és un
intermedi i no cal versionar.

## Dues coses per recordar

- **`js/codi.js` porta el generador i el lector junts**, i l'analitzador
  carrega aquest mateix fitxer, no una còpia. Si se separen, divergeixen.
- **`tools/codi-etiquetes.txt` és append-only.** El codi guarda l'*índex* de
  l'etiqueta d'error, no el nom: reordenar el fitxer faria il·legibles tots
  els codis ja emesos. `build_codi.py` ho vigila.
