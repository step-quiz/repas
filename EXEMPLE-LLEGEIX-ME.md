# Full de respostes d'exemple

`exemple-respostes.csv` és un full de càlcul inventat però versemblant: quatre
alumnes de 1r de batxillerat treballant durant el **primer trimestre
(20/9/2026 – 5/12/2026)**, amb 26 enviaments.

Els codis **són reals**: els genera el mateix `js/codi.js` del projecte, i per
tant validen, es descodifiquen i s'analitzen exactament com els de debò.

## Com provar-ho

1. Obre `analitzador-repas.html` (doble clic, no cal servidor).
2. Obre `exemple-respostes.csv` amb el botó **Obre un CSV**, o obre'l amb el
   full de càlcul, copia-ho tot i enganxa-ho a la caixa.
3. A la pestanya **Progrés del trimestre**, posa del `2026-09-20` al
   `2026-12-05`, **11 setmanes** i **60 exercicis**.

El fitxer imita el teu formulari real: mateixes capçaleres, i la marca de
temps en **mes/dia/any**, que és el format que té el teu full. L'analitzador
ho detecta sol comparant-ho amb la data que el codi porta a dins, i t'ho diu
al costat de «26 codis llegits».

## Els quatre perfils, i què hauries de veure

| Alumne | Perfil | Dies | Setm. | Exerc. | Encert | Millora | Nota |
|---|---|---:|---:|---:|---:|---|---:|
| **Aina Puig** | Constant i millora molt | 11 | 11 | 80 | 88 % | +29 pp | **9,9** |
| **Bernat Rius** | S'ho empassa tot l'última setmana | 3 | 2 | 76 | 99 % | +2 pp | **5,9** |
| **Clàudia Moya** | Irregular, li costa, aixeca el cap al final | 5 | 5 | 29 | 69 % | +36 pp | **5,3** |
| **Dani Serra** | Fa poc i reenvia el mateix codi | 2 (+4) | 2 | 9 | 89 % | no mesurable | **2,6** |

**Aina** treballa cada setmana, comença fluixa (moltes pistes i errors) i acaba
encertant-ho gairebé tot. Ha fet el test inicial, així que el seu detall
inclou la taula de les 15 destreses amb les etiquetes *«ho donava per sabut»* i
*«ho sabia més del que es pensava»*. Toca els fulls 1, 2 i 4.

**Bernat** és el cas que interessa mirar: fa **76 exercicis amb un 99 %
d'encert** i es queda a **5,9**, per sota de la meitat de l'Aina. Ho fa tot
tres nits seguides de finals de novembre, a les 22:40, 23:15 i 23:50. El resum
de classe el llista a part: *«Feina concentrada en pocs dies.»*

**Clàudia** ve poc i li costa: 38 % de pistes i molts errors. Millora al final,
i l'analitzador ho recull, però amb 29 exercicis en 5 setmanes no arriba.

**Dani** fa 6 exercicis al setembre, en fa 3 més al novembre, i **reenvia el
mateix codi quatre vegades** per semblar actiu. La columna de dies li surt
`2 (+4)`: només compten els enviaments que porten feina nova.

## Coses que el fitxer et deixa veure

- **Un codi mal copiat** (Bernat, 25 de novembre): té un caràcter canviat al
  mig de la càrrega i surt marcat amb ✗. La resta de les seves dades no se'n
  ressenten, perquè el codi següent és acumulatiu i ho torna a portar tot.
- **Un enviament tardà** (Clàudia, 30 d'octubre): el va enviar més de tres
  hores després de generar-lo i surt amb ⚠ i `+191m`. Sol ser innocent, però
  és on es veuria un codi passat d'un company.
- **Exercicis oberts i deixats a mitges**: al detall hi ha el comptador
  *«Oberts i deixats»*, que no compten ni per al volum ni per a la nota.
- **Notes amb asterisc**: els enviaments per sota de la feina mínima demanada
  surten amb la nota apagada, perquè un 8 sobre 6 exercicis no és comparable
  amb un 8 sobre 80.
- **El repartiment per nivell de dificultat** de cada alumne, al detall.

## Refer-lo o canviar-lo

```
node tools/fes-exemple.js > exemple-respostes.csv
```

El generador té llavor fixa: surt sempre igual. A dins hi ha els quatre
perfils amb les dates i les mescles d'estats, fàcils de tocar si vols provar
un altre escenari.
