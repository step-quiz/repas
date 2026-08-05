# Analitzador i format: període sota demanda, dates, exemple i dos errors

**Puja aquests 8 fitxers.** Substitueix qualsevol paquet anterior d'aquesta
tanda: aquest els conté tots.

| Fitxer | |
|---|---|
| `js/codi.js` | modificat — **format RC2** |
| `tools/analitzador-plantilla.html` · `analitzador-repas.html` | modificat / regenerat |
| `exemple-respostes.csv` · `tools/fes-exemple.js` · `EXEMPLE-LLEGEIX-ME.md` | nous |
| `README.md` · `HANDOVER.md` | modificats |

---

## 1. Període i feina sota demanda

La pestanya **Progrés del trimestre** demana el període (amb presets) i quanta
feina hi vols, i el càlcul el dispara el botó **Accepta i calcula**. Si toques
un paràmetre després, el botó es posa ambre i les notes no es mouen fins que
el prems. La capçalera del resultat repeteix sempre amb quines condicions s'ha
calculat.

## 2. Format de data del formulari

`8/5/2026` es llegia com al 8 de maig quan el codi era del 5 d'agost. Ara es
detecta comparant-ho amb la data de dins del codi, per majoria de tot el full.

## 3. Recompte inflat en perdre el navegador

La línia de base era l'últim codi rebut. Si un alumne perd les dades del
navegador i refà exercicis, això els tornava a comptar: en una simulació de
40 exercicis fets, perduts i 13 refets, en comptava **47**. Ara la línia de
base és la unió de tot el que s'ha vist i en compta **40**. La caiguda es
detecta i s'avisa a la fila, al detall i al resum de classe.

## 4. La data topava el 20 de juny de 2028

La data ocupava 2 caràcters, és a dir 1024 dies des de l'1/9/2025. A partir
del **20 de juny de 2028**, tots els codis haurien dit aquella mateixa data,
**en silenci**: l'anàlisi per trimestres hauria quedat inservible sense que
res avisés.

Ara n'ocupa 3 (32.768 dies, fins al 2115) i la marca de versió passa a
**RC2**. Costa un caràcter. **El lector accepta les dues versions**, de manera
que els codis RC1 que ja hagis recollit segueixen valent: ho he comprovat amb
el que em vas enviar tu.

## 5. Full de respostes d'exemple

`exemple-respostes.csv`: 4 alumnes, 26 enviaments, del 20/9 al 5/12 de 2026,
ja en format RC2. `EXEMPLE-LLEGEIX-ME.md` explica què representa cadascun.
