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

echo "── Python: motor i banc compilat ─────────────────────────────"
python3 -m unittest discover -s tests -q || fallades=1

echo
echo "── JavaScript: codi de verificació ───────────────────────────"
node tests/codi.test.js || fallades=1

echo
echo "── JavaScript: analitzador ───────────────────────────────────"
node tests/analitzador.test.js || fallades=1

echo
if [ "$fallades" -eq 0 ]; then
  printf '\033[32m✓ Tot en verd.\033[0m\n'
else
  printf '\033[31m✗ Hi ha proves que fallen.\033[0m\n'
  exit 1
fi
