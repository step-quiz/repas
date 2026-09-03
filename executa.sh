#!/bin/sh
# tests/executa.sh — passa totes les proves del projecte.
#
#     sh tests/executa.sh
#
# Les de Python van amb `unittest` de la biblioteca estàndard i les de
# JavaScript amb Node pelat: no cal instal·lar res. L'única excepció són les
# de l'analitzador, que necessiten un DOM; si `jsdom` no hi és, se salten amb
# un avís i la resta continua.
#
#     npm install --no-save jsdom     # per passar també les de l'analitzador
set -e
cd "$(dirname "$0")/.."

fallades=0
sense_taules=0
saltades=0

# Les proves que necessiten jsdom surten amb codi 0 quan se salten, per no
# tombar la resta. Això vol dir que "Tot en verd" podia significar "92 de les
# 321 comprovacions no s'han arribat a executar" -- exactament el tipus de
# silenci que aquest projecte no es pot permetre. Es detecta i es diu.
if node -e "require('jsdom')" >/dev/null 2>&1; then
  hi_ha_jsdom=1
else
  hi_ha_jsdom=0
fi

echo "── Python: motor i banc compilat ─────────────────────────────"
python3 -m unittest discover -s tests -q || fallades=1

echo
echo "── JavaScript: codi de verificació ───────────────────────────"
node tests/codi.test.js || fallades=1

echo
echo "── JavaScript: el registre no es pot rentar ──────────────────"
node tests/test_registre.js || fallades=1

echo
echo "── JavaScript: analitzador ───────────────────────────────────"
node tests/analitzador.test.js || fallades=1

echo
echo "── JavaScript: pont cap a la teoria del llibre ───────────────"
node tests/teoria.test.js || fallades=1

echo
echo "── JavaScript: calendari dels trams ──────────────────────────"
node tests/calendari.test.js || fallades=1

echo
echo "── JavaScript: mini-examen de 3 setmanes ─────────────────────"
# El repartiment per trams i el sorteig són funcions pures i corren sempre.
for t in tests/mini_examen.test.js tests/mini_examen_historial.test.js; do
  node "$t" >/dev/null || { node "$t"; fallades=1; }
done
printf '  \033[32m✓\033[0m 2 bateries del sorteig\n'
# Les altres dues llegeixen `tools/_taules.json` i `tools/_banc.json`, que
# són artefactes de compilació i no van al repositori. Sense ells no es poden
# executar: val més dir-ho que no pas petar amb un error de fitxer i que la
# suite acabi dient que tot ha anat bé.
if [ -f tools/_taules.json ] && [ -f tools/_banc.json ]; then
  for t in tests/mini_examen_exemple.test.js tests/mini_examen_varietat.test.js; do
    node "$t" >/dev/null || { node "$t"; fallades=1; }
  done
  printf '  \033[32m✓\033[0m 2 bateries de l\047exemple de mostra\n'
else
  sense_taules=1
  printf '  \033[33m⊘\033[0m 2 bateries de l\047exemple saltades: falten els\n'
  printf '    artefactes de compilacio. Per passar-les:  python3 tools/build_tot.py\n'
fi

echo
echo "── JavaScript: accessibilitat de practica.html i diagnostic.html ──"
node tests/test_a11y.js || fallades=1

echo
echo "── JavaScript: la resolució no s'ofereix sola ────────────────"
node tests/test_flux_resolucio.js || fallades=1

echo
if [ "$fallades" -ne 0 ]; then
  printf '\033[31m✗ Hi ha proves que fallen.\033[0m\n'
  exit 1
elif [ "$sense_taules" -ne 0 ]; then
  printf '\033[33m⚠ Les proves executades passen, PERÒ falten artefactes de\n'
  printf '  compilació i s\047han saltat proves. Executa:  python3 tools/build_tot.py\033[0m\n'
  exit 0
elif [ "$hi_ha_jsdom" -eq 0 ]; then
  printf '\033[33m⚠ Les proves executades passen, PERÒ tres blocs (analitzador,\n'
  printf '  accessibilitat i flux de la resolució) s\047han saltat perquè falta jsdom:\n'
  printf '  són 111 comprovacions de 348 que no s\047han arribat a executar.\n'
  printf '  Per passar-les totes:  npm install --no-save jsdom\033[0m\n'
  exit 0
else
  printf '\033[32m✓ Tot en verd.\033[0m\n'
fi
