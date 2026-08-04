/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 6,
 "titol": "Full 6 — Proporcionalitat i percentatges",
 "subtitol": "Proporcionalitat directa i inversa, i problemes de percentatges, augments i disminucions encadenats.",
 "blocs": [
  {
   "id": "directa_inversa",
   "titol": "Proporcionalitat directa i inversa",
   "descripcio": "Regla de tres directa i inversa amb repartiments i problemes.",
   "items": [
    "101",
    "102",
    "103",
    "104",
    "105a",
    "105b",
    "106a",
    "106b",
    "107",
    "108"
   ]
  },
  {
   "id": "percentatges",
   "titol": "Percentatges",
   "descripcio": "Percentatge d'una quantitat, i trobar el total o la quantitat original a partir d'un percentatge.",
   "items": [
    "109",
    "110",
    "111",
    "112a",
    "112b"
   ]
  },
  {
   "id": "encadenats",
   "titol": "Augments i disminucions encadenats",
   "descripcio": "Augments i rebaixes percentuals aplicats seguits, i comparacions \"en proporció\".",
   "items": [
    "113",
    "114",
    "115",
    "116",
    "117",
    "118"
   ]
  }
 ],
 "errors": {
  "COMPARA_TERMES": "Dues fraccions equivalents gairebé mai tenen els mateixos termes: el que ha de coincidir és el valor, no les xifres.",
  "CREUAMENT_INVERTIT": "Has creuat els termes al revés en aïllar la incògnita.",
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "ES_POT_DETERMINAR": "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha prou. Abans de descartar una pregunta, mira si algun teorema o criteri et permet respondre-la amb el que ja tens.",
  "FRACCIO_COM_PERCENTATGE": "Has pres el numerador de la fracció com si ja fos el percentatge. Per arribar-hi cal portar la fracció sencera a denominador $100$.",
  "MAGNITUD_NO_CONVERTIDA": "Has donat el mateix número per a dues magnituds diferents. Fes servir la constant que les relaciona (densitat, preu unitari, velocitat) per passar d'una a l'altra.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PERCENTATGE_DECIMAL_MAL": "El pas de tant per cent a decimal no és correcte: es divideix per $100$, així que $0{,}8\\,\\%=0{,}008$ i $8\\,\\%=0{,}08$. Compta les xifres.",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "101",
   "ex": 101,
   "ap": "",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "",
   "enunciat": "Per elaborar una recepta per a 6 persones es necessiten 240 g de salmó. Esbrina quina quantitat de salmó necessito per a 8 persones.",
   "opcions": [
    "$180$ g",
    "$300$ g",
    "$320$ g",
    "$7\\,\\dfrac{1}{2}$ g"
   ],
   "pistes": [
    "Persones i quantitat de salmó són magnituds directament proporcionals: a més persones, més salmó.",
    "Planteja la regla de tres directa $\\dfrac{6\\text{ persones}}{240\\text{ g}}=\\dfrac{8\\text{ persones}}{x}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZmV0IHNlcnZpciBsYSByZWdsYSBkZSB0cmVzIGFsIHJldsOpczogYSBNw4lTIHBlcnNvbmVzIGVscyBjb3JyZXNwb24gTcOJUyBzYWxtw7MsIG5vIG1lbnlzLiBQbGFudGVqYSAkXFxmcmFjezZ9ezI0MH09XFxmcmFjezh9e3h9JCwgbm8gbGEgZnJhY2Npw7MgaW52ZXJ0aWRhLiIsICJBcXVlc3QgdmFsb3Igbm8gc3VydCBkZSBsYSBwcm9wb3JjacOzIGRvbmFkYTogY29tcHJvdmEtaG8gYW1iIGxhIHJlZ2xhIGRlIHRyZXMgJFxcZnJhY3s2fXsyNDB9PVxcZnJhY3s4fXt4fSQgZW4gY29tcHRlcyBkJ2VzdGltYXItbG8uIiwgIiIsICJTZW1ibGEgcXVlIGhhcyBjYWxjdWxhdCAkMjQwOjhcXGNkb3Q2JCBvIHNpbWlsYXI7IGVsIHF1ZSBjYWwgw6lzICRcXGRmcmFjezI0MFxcY2RvdDh9ezZ9JDogbGEgcXVhbnRpdGF0IGRlIHNhbG3DsyBjcmVpeCBhbWIgZWwgbm9tYnJlIGRlIHBlcnNvbmVzLCBubyBlbiBlbCBzZW50aXQgY29udHJhcmkuIl0sICJlcnIiOiBbIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICIiLCAiUFJPRFVDVEVfTUFMIl0sICJyZXMiOiBbIiRcXGRmcmFjezZ9ezI0MH09XFxkZnJhY3s4fXt4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3syNDBcXGNkb3Q4fXs2fSQiLCAiJHg9MzIwJCBnIGRlIHNhbG3DsyJdfQ=="
  },
  {
   "id": "102",
   "ex": 102,
   "ap": "",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "En Carles va pintar la seva habitació amb 6 pots, de 4 kg de pintura cada un, però ara només venen pots de 3 kg. Quants pots de pintura necessita per tornar-la a pintar?",
   "opcions": [
    "$18$ pots",
    "$4\\,\\dfrac{1}{2}$ pots",
    "$2$ pots",
    "$8$ pots"
   ],
   "pistes": [
    "Calcula primer la pintura total: $6$ pots de $4$ kg són $6\\cdot4=24$ kg.",
    "El nombre de pots i la seva mida són inversament proporcionals: reparteix els $24$ kg entre pots de $3$ kg dividint directament."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSBtdWx0aXBsaWNhciAkNlxcY2RvdDMkIGVuIGNvbXB0ZXMgZGUgZGl2aWRpciBsYSBwaW50dXJhIHRvdGFsICgkMjQkIGtnKSBlbnRyZSBsYSBtaWRhIGRlbCBwb3Qgbm91LiIsICJIYXMgcGxhbnRlamF0IGxhIHByb3BvcmNpw7MgY29tIHNpIGZvcyBkaXJlY3RhLiBBcXXDrSBsYSBtaWRhIGRlbCBwb3QgaSBlbCBub21icmUgZGUgcG90cyBzw7NuIElOVkVSU0FNRU5UIHByb3BvcmNpb25hbHM6IGEgcG90cyBtw6lzIHBldGl0cywgZW4gY2FsZW4gbcOpcywgbm8gbWVueXMuIiwgIlNlbWJsYSBxdWUgaGFzIGRpdmlkaXQgJDM6MjQkIGVuIGNvbXB0ZXMgZGUgJDI0OjMkOiBsYSBxdWFudGl0YXQgdG90YWwgZGUgcGludHVyYSBlcyByZXBhcnRlaXggZW50cmUgbGEgbWlkYSBkZSBjYWRhIHBvdCBub3UsIG5vIGFsIHJldsOpcy4iLCAiIl0sICJlcnIiOiBbIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiIl0sICJyZXMiOiBbIlBpbnR1cmEgdG90YWw6ICQ2XFxjZG90ND0yNCQga2ciLCAiJFxcZGZyYWN7MjR9ezN9PTgkIHBvdHMgZGUgJDMkIGtnIl19"
  },
  {
   "id": "103",
   "ex": 103,
   "ap": "",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Amb els diners que tinc puc gastar 15 € diaris durant 6 dies. Si vull que em durin 9 dies, quant puc gastar cada dia?",
   "opcions": [
    "$22{,}5$ €",
    "$10$ €",
    "$13{,}5$ €",
    "$1{,}67$ €"
   ],
   "pistes": [
    "Calcula primer els diners totals de què disposes: $15\\cdot6=90$ €.",
    "Dies i despesa diària són inversament proporcionals: reparteix els $90$ € entre els $9$ dies nous dividint directament."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgdHJhY3RhdCBkaWVzIGkgZGVzcGVzYSBkacOgcmlhIGNvbSBhIG1hZ25pdHVkcyBkaXJlY3RhbWVudCBwcm9wb3JjaW9uYWxzOyBhcXXDrSBzw7NuIElOVkVSU0FNRU5UIHByb3BvcmNpb25hbHM6IHNpIHZvbHMgcXVlIGV0IGR1cmluIG3DqXMgZGllcywgaGFzIGRlIGdhc3RhciBtZW55cyBjYWRhIGRpYS4iLCAiIiwgIk5vIHN1cnQgZGUgcmVwYXJ0aXIgZWxzIGRpbmVycyB0b3RhbHMgZW50cmUgZWxzIDkgZGllcyBub3VzOiBjYWxjdWxhIHByaW1lciBlbCB0b3RhbCAoJDE1XFxjZG90Nj05MCQg4oKsKSBpIGRlc3Byw6lzICQ5MDo5JC4iLCAiU2VtYmxhIHF1ZSBoYXMgZGl2aWRpdCAkOToxNSQgZW4gY29tcHRlcyBkZSByZXBhcnRpciBlbHMgJDkwJCDigqwgdG90YWxzIGVudHJlIGVscyAkOSQgZGllcy4iXSwgImVyciI6IFsiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIl0sICJyZXMiOiBbIkRpbmVycyB0b3RhbHM6ICQxNVxcY2RvdDY9OTAkIOKCrCIsICIkXFxkZnJhY3s5MH17OX09MTAkIOKCrCBkaWFyaXMiXX0="
  },
  {
   "id": "104",
   "ex": 104,
   "ap": "",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "",
   "enunciat": "Un coet espacial tarda 2 minuts a assolir una velocitat de 30\\,000 km/h. A aquest mateix ritme, quina velocitat pot assolir en 5 minuts?",
   "opcions": [
    "$60\\,000$ km/h",
    "$45\\,000$ km/h",
    "$12\\,000$ km/h",
    "$75\\,000$ km/h"
   ],
   "pistes": [
    "Temps i velocitat assolida són directament proporcionals: el coet accelera a ritme constant.",
    "Planteja la regla de tres directa $\\dfrac{2\\text{ min}}{30\\,000\\text{ km/h}}=\\dfrac{5\\text{ min}}{x}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gc3VydCBkZSBsYSByZWdsYSBkZSB0cmVzIGRvbmFkYTogY29tcHJvdmEgJHg9XFxkZnJhY3szMFxcLDAwMFxcY2RvdDV9ezJ9JCBwYXMgYSBwYXMuIiwgIk5vIGNvaW5jaWRlaXggYW1iICRcXGRmcmFjezMwXFwsMDAwXFxjZG90NX17Mn0kOiByZXZpc2EgZWwgcHJvZHVjdGUgaSBsYSBkaXZpc2nDsyBwZXIgc2VwYXJhdC4iLCAiSGFzIGludmVydGl0IGxhIHByb3BvcmNpw7M6IGEgTcOJUyB0ZW1wcyBhY2NlbGVyYW50LCBNw4lTIHZlbG9jaXRhdCBzJ2Fzc29sZWl4LCBubyBtZW55cy4gUGxhbnRlamEgJFxcZnJhY3syfXszMFxcLDAwMH09XFxmcmFjezV9e3h9JC4iLCAiIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIiJdLCAicmVzIjogWyIkXFxkZnJhY3syfXszMFxcLDAwMH09XFxkZnJhY3s1fXt4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3szMFxcLDAwMFxcY2RvdDV9ezJ9JCIsICIkeD03NVxcLDAwMCQga20vaCJdfQ=="
  },
  {
   "id": "105a",
   "ex": 105,
   "ap": "a",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "La densitat mitjana del cos humà és d'1,15 kg/ℓ.",
   "enunciat": "Quin és el volum d'una persona que pesa 65 kg?",
   "opcions": [
    "$65$ ℓ",
    "$56{,}52$ ℓ (aproximadament)",
    "$74{,}75$ ℓ",
    "$0{,}018$ ℓ"
   ],
   "pistes": [
    "La densitat relaciona massa i volum: $d=\\dfrac{m}{V}$, amb $d=1{,}15$ kg/ℓ.",
    "Aïlla el volum: $V=\\dfrac{m}{d}$, i substitueix $m=65$ kg."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBoYXMgZmV0IHNlcnZpciBsYSBkZW5zaXRhdCBwZXIgY29udmVydGlyIGxhIG1hc3NhIGVuIHZvbHVtOiAkNjUkIGtnIGkgJDY1JCDihJMgbm8gcmVwcmVzZW50ZW4gZWwgbWF0ZWl4IGEgbWVueXMgcXVlIGxhIGRlbnNpdGF0IGZvcyBleGFjdGFtZW50ICQxJCBrZy/ihJMuIiwgIiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBtdWx0aXBsaWNhciAkNjVcXGNkb3Qxeyx9MTUkIGVuIGNvbXB0ZXMgZGUgZGl2aWRpcjogcGVyIGHDr2xsYXIgZWwgdm9sdW0gZGUgJGQ9XFxmcmFje219e1Z9JCBjYWwgZmVyICRWPVxcZnJhY3ttfXtkfSQsIG5vICRtXFxjZG90IGQkLiIsICJTZW1ibGEgcXVlIGhhcyBjYWxjdWxhdCAkMXssfTE1OjY1JCBlbiBjb21wdGVzIGRlICQ2NToxeyx9MTUkOiBsYSBtYXNzYSBlcyBkaXZpZGVpeCBlbnRyZSBsYSBkZW5zaXRhdCwgbm8gYWwgcmV2w6lzLiJdLCAiZXJyIjogWyJNQUdOSVRVRF9OT19DT05WRVJUSURBIiwgIiIsICJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiJFY9XFxkZnJhY3ttfXtkfT1cXGRmcmFjezY1fXsxeyx9MTV9JCIsICIkVlxcYXBwcm94NTZ7LH01MiQg4oSTIl19"
  },
  {
   "id": "105b",
   "ex": 105,
   "ap": "b",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "La densitat mitjana del cos humà és d'1,15 kg/ℓ.",
   "enunciat": "Quant pesarà una persona que té un volum de 42 ℓ?",
   "opcions": [
    "$43{,}15$ kg",
    "$42$ kg",
    "$36{,}52$ kg",
    "$48{,}3$ kg"
   ],
   "pistes": [
    "Aïlla la massa de la mateixa fórmula: $m=d\\cdot V$.",
    "Substitueix $d=1{,}15$ kg/ℓ i $V=42$ ℓ."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkMXssfTE1XFxjZG90NDIkOiB0b3JuYSBhIGZlciBlbCBwcm9kdWN0ZSB4aWZyYSBhIHhpZnJhLiIsICJObyBoYXMgZmV0IHNlcnZpciBsYSBkZW5zaXRhdCBwZXIgY29udmVydGlyIGVsIHZvbHVtIGVuIG1hc3NhOiAkNDIkIOKEkyBpICQ0MiQga2cgbm8gcmVwcmVzZW50ZW4gZWwgbWF0ZWl4IGEgbWVueXMgcXVlIGxhIGRlbnNpdGF0IGZvcyBleGFjdGFtZW50ICQxJCBrZy/ihJMuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIGRpdmlkaXIgJDQyOjF7LH0xNSQgZW4gY29tcHRlcyBkZSBtdWx0aXBsaWNhcjogcGVyIHRyb2JhciBsYSBtYXNzYSBhIHBhcnRpciBkZWwgdm9sdW0gY2FsICRtPWRcXGNkb3QgViQsIG5vICRcXGZyYWN7Vn17ZH0kLiIsICIiXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJNQUdOSVRVRF9OT19DT05WRVJUSURBIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICIiXSwgInJlcyI6IFsiJG09ZFxcY2RvdCBWPTF7LH0xNVxcY2RvdDQyJCIsICIkbT00OHssfTMkIGtnIl19"
  },
  {
   "id": "106a",
   "ex": 106,
   "ap": "a",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Una persona està situada a 50 m d'una paret i rep l'eco de la seva veu 3 dècimes de segon després d'haver cridat.",
   "enunciat": "Si es col·loca a 80 m de distància, quant de temps tardarà a sentir l'eco?",
   "opcions": [
    "$0{,}1875$ s",
    "$0{,}48$ s",
    "$1{,}33$ s",
    "$0{,}3$ s"
   ],
   "pistes": [
    "Distància i temps de l'eco són directament proporcionals: a $50$ m corresponen $0{,}3$ s.",
    "Planteja la regla de tres directa $\\dfrac{50\\text{ m}}{0{,}3\\text{ s}}=\\dfrac{80\\text{ m}}{x}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkJ2ludmVydGlyIGxhIHByb3BvcmNpw7M6IGEgTcOJUyBkaXN0w6BuY2lhLCBsJ2VjbyB0cmlnYSBNw4lTIGEgYXJyaWJhciwgbm8gbWVueXMuIFBsYW50ZWphICRcXGZyYWN7NTB9ezB7LH0zfT1cXGZyYWN7ODB9e3h9JC4iLCAiIiwgIlNlbWJsYSBxdWUgaGFzIGRpdmlkaXQgJDgwOjB7LH0zXFxjZG90NTAkIGVuIHVuIG9yZHJlIGVxdWl2b2NhdDogcmV2aXNhIGxhIHJlZ2xhIGRlIHRyZXMgJFxcZnJhY3s1MH17MHssfTN9PVxcZnJhY3s4MH17eH0kIHBhcyBhIHBhcy4iLCAiQXF1ZXN0IMOpcyBlbCB0ZW1wcyBkZSBsJ2VjbyBhICQ1MCQgbSwgbm8gYSAkODAkIG06IGxhIGRpc3TDoG5jaWEgaGEgY2FudmlhdCwgYWl4w60gcXVlIGVsIHRlbXBzIHRhbWLDqSBoYSBkZSBjYW52aWFyIGVuIGxhIG1hdGVpeGEgcHJvcG9yY2nDsy4iXSwgImVyciI6IFsiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIiIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSJdLCAicmVzIjogWyIkXFxkZnJhY3s1MH17MHssfTN9PVxcZGZyYWN7ODB9e3h9IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD1cXGRmcmFjezB7LH0zXFxjZG90ODB9ezUwfSQiLCAiJHg9MHssfTQ4JCBzIl19"
  },
  {
   "id": "106b",
   "ex": 106,
   "ap": "b",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Una persona està situada a 50 m d'una paret i rep l'eco de la seva veu 3 dècimes de segon després d'haver cridat.",
   "enunciat": "A quina distància s'haurà de col·locar per sentir l'eco després d'1 segon?",
   "opcions": [
    "$166{,}67$ m (aproximadament)",
    "$0{,}006$ m",
    "$50{,}3$ m",
    "$15$ m"
   ],
   "pistes": [
    "Fes servir la mateixa proporció directa: $\\dfrac{50\\text{ m}}{0{,}3\\text{ s}}=\\dfrac{x}{1\\text{ s}}$.",
    "Aïlla $x$ multiplicant en creu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZCdpbnZlcnRpciBsYSBwcm9wb3JjacOzOiBjYWwgJFxcZnJhY3s1MH17MHssfTN9PVxcZnJhY3t4fXsxfSQsIG5vIGxhIGZyYWNjacOzIGFsIHJldsOpcy4iLCAiSGFzIHN1bWF0ICQ1MCQgaSAkMHssfTMkIGVuIGNvbXB0ZXMgZGUgcGxhbnRlamFyIGxhIHJlZ2xhIGRlIHRyZXMgJFxcZnJhY3s1MH17MHssfTN9PVxcZnJhY3t4fXsxfSQuIiwgIk5vIGNvaW5jaWRlaXggYW1iICRcXGRmcmFjezUwXFxjZG90MX17MHssfTN9JDogY29tcHJvdmEgcXVlIGhhcyBkaXZpZGl0IHBlciAkMHssfTMkIGkgbm8gcXVlIGhpIGhhcyBtdWx0aXBsaWNhdC4iXSwgImVyciI6IFsiIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJTVU1BX0VOX0xMT0NfUkVTVEEiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIl0sICJyZXMiOiBbIiRcXGRmcmFjezUwfXsweyx9M309XFxkZnJhY3t4fXsxfSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s1MFxcY2RvdDF9ezB7LH0zfT1cXGRmcmFjezUwMH17M30kIiwgIiR4XFxhcHByb3gxNjZ7LH02NyQgbSJdfQ=="
  },
  {
   "id": "107",
   "ex": 107,
   "ap": "",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Un camió pot transportar 9 caixes que pesen 200 kg cada una. Si es carreguen caixes de 150 kg, quantes caixes pot portar?",
   "opcions": [
    "$12$ caixes",
    "$1\\,350$ caixes",
    "$0{,}08$ caixes",
    "$6{,}75$ caixes"
   ],
   "pistes": [
    "Calcula primer el pes total que pot transportar el camió: $9\\cdot200=1\\,800$ kg.",
    "El nombre de caixes i el pes de cada caixa són inversament proporcionals: reparteix el pes total entre caixes de $150$ kg."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgbXVsdGlwbGljYXIgJDlcXGNkb3QxNTAkIGVuIGNvbXB0ZXMgZGUgcmVwYXJ0aXIgZWwgcGVzIHRvdGFsICgkMVxcLDgwMCQga2cpIGVudHJlIGVsIHBlcyBkZSBjYWRhIGNhaXhhIG5vdmEuIiwgIlNlbWJsYSBxdWUgaGFzIGRpdmlkaXQgJDE1MDoxXFwsODAwJCBlbiBjb21wdGVzIGRlICQxXFwsODAwOjE1MCQuIiwgIkhhcyB0cmFjdGF0IGVsIHBlcyBkZSBsYSBjYWl4YSBpIGVsIG5vbWJyZSBkZSBjYWl4ZXMgY29tIGEgbWFnbml0dWRzIGRpcmVjdGFtZW50IHByb3BvcmNpb25hbHM7IGFxdcOtIHPDs24gSU5WRVJTQU1FTlQgcHJvcG9yY2lvbmFsczogYSBjYWl4ZXMgbcOpcyBsbGV1Z2VyZXMsIGVuIGNhYmVuIG3DqXMuIl0sICJlcnIiOiBbIiIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIlBlcyB0b3RhbDogJDlcXGNkb3QyMDA9MVxcLDgwMCQga2ciLCAiJFxcZGZyYWN7MVxcLDgwMH17MTUwfT0xMiQgY2FpeGVzIl19"
  },
  {
   "id": "108",
   "ex": 108,
   "ap": "",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "La propietària d'una pensió disposa de menjar per alimentar els seus 18 hostes durant 12 dies. A última hora, el nombre d'hostes ha augmentat en 6 persones. Per a quants dies tindrà menjar?",
   "opcions": [
    "$8$ dies",
    "$16$ dies",
    "$9$ dies",
    "$3$ dies"
   ],
   "pistes": [
    "Calcula primer la quantitat total de menjar en «dies-hoste»: $18\\cdot12=216$.",
    "Ara hi ha $18+6=24$ hostes. Hostes i dies són inversament proporcionals: reparteix el total entre els $24$ hostes."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgbm9tYnJlIHRvdGFsIGQnaG9zdGVzOiBhcmEgbidoaSBoYSAkMTgrNj0yNCQsIG5vICQxOCs2KzE9MjUkIG5pIGNhcCBhbHRyYSB4aWZyYTsgcmVwYXJ0ZWl4IGVscyAkMjE2JCBkaWVzLWhvc3RlIGVudHJlICQyNCQgaG9zdGVzLiIsICJIYXMgdHJhY3RhdCBob3N0ZXMgaSBkaWVzIGNvbSBhIG1hZ25pdHVkcyBkaXJlY3RhbWVudCBwcm9wb3JjaW9uYWxzOyBhcXXDrSBzw7NuIElOVkVSU0FNRU5UIHByb3BvcmNpb25hbHM6IGEgTcOJUyBob3N0ZXMsIGVsIG1lbmphciBkdXJhIE1FTllTIGRpZXMsIG5vIG3DqXMuIiwgIiIsICJBcXVlc3QgdmFsb3Igbm8gc3VydCBkZSByZXBhcnRpciBlbCB0b3RhbCBkZSBkaWVzLWhvc3RlICgkMjE2JCkgZW50cmUgZWxzICQyNCQgaG9zdGVzIGFjdHVhbHM6IHJldmlzYSBlbCBjw6BsY3VsICQyMTY6MjQkLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICIiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIl0sICJyZXMiOiBbIk1lbmphciB0b3RhbDogJDE4XFxjZG90MTI9MjE2JCBkaWVzLWhvc3RlIiwgIkhvc3RlcyBhY3R1YWxzOiAkMTgrNj0yNCQiLCAiJFxcZGZyYWN7MjE2fXsyNH09OSQgZGllcyJdfQ=="
  },
  {
   "id": "109",
   "ex": 109,
   "ap": "",
   "bloc": "percentatges",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "",
   "enunciat": "Tres de cada cinc alumnes han tingut la grip durant el mes de gener. Expressa aquesta dada en forma de percentatge.",
   "opcions": [
    "$3\\,\\%$",
    "$35\\,\\%$",
    "$53\\,\\%$",
    "$60\\,\\%$"
   ],
   "pistes": [
    "Escriu la dada com una fracció: $\\frac{3}{5}$ dels alumnes.",
    "Converteix-la a una fracció equivalent de denominador $100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYWdhZmF0IG5vbcOpcyBlbCBudW1lcmFkb3IgZGUgbGEgZnJhY2Npw7MgY29tIHNpIGphIGZvcyBlbCBwZXJjZW50YXRnZTogY2FsIGNvbnZlcnRpciBsYSBmcmFjY2nDsyBzZW5jZXJhIGEgZGVub21pbmFkb3IgJDEwMCQuIiwgIlNlbWJsYSBxdWUgaGFzIGFqdW50YXQgbGVzIHhpZnJlcyAkMyQgaSAkNSQgZW4gY29tcHRlcyBkZSBjb252ZXJ0aXIgbGEgZnJhY2Npw7MgJFxcZnJhY3szfXs1fSQgYSBkZW5vbWluYWRvciAkMTAwJC4iLCAiVG9ybmEgYSBjb252ZXJ0aXIgbGEgZnJhY2Npw7M6ICRcXGZyYWN7M317NX09XFxmcmFjezNcXGNkb3QyMH17NVxcY2RvdDIwfT1cXGZyYWN7NjB9ezEwMH0kLCBubyB1bmEgY29tYmluYWNpw7MgZGlyZWN0YSBkZSBsZXMgeGlmcmVzICQ1JCBpICQzJC4iLCAiIl0sICJlcnIiOiBbIkZSQUNDSU9fQ09NX1BFUkNFTlRBVEdFIiwgIlBST0RVQ1RFX01BTCIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiIl0sICJyZXMiOiBbIiRcXGRmcmFjezN9ezV9PVxcZGZyYWN7M1xcY2RvdDIwfXs1XFxjZG90MjB9PVxcZGZyYWN7NjB9ezEwMH0kIiwgIiRcXGRmcmFjezYwfXsxMDB9PTYwXFwsXFwlJCJdfQ=="
  },
  {
   "id": "110",
   "ex": 110,
   "ap": "",
   "bloc": "percentatges",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "",
   "enunciat": "Per un CD que costa 21 € em fan un 15\\,\\% de descompte. Quants diners m'estalvio?",
   "opcions": [
    "$3{,}15$ €",
    "$6$ €",
    "$1{,}4$ €",
    "$17{,}85$ €"
   ],
   "pistes": [
    "L'estalvi és el $15\\,\\%$ del preu original, $21$ €.",
    "Calcula'l com $21\\cdot\\dfrac{15}{100}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIG5vIHN1cnQgZGUgY2FsY3VsYXIgZWwgJDE1XFwsXFwlJCBkZSAkMjEkOiBmZXMgJDIxXFxjZG90XFxkZnJhY3sxNX17MTAwfSQgaSBjb21wcm92YSBlbCByZXN1bHRhdC4iLCAiTm8gY29pbmNpZGVpeCBhbWIgJDIxXFxjZG90XFxkZnJhY3sxNX17MTAwfSQ6IHJldmlzYSBlbCBwcm9kdWN0ZSBwYXMgYSBwYXMsIHNlbnNlIGFycm9kb25pciBhYmFucyBkJ2hvcmEuIiwgIkFxdWVzdCDDqXMgZWwgcHJldSBmaW5hbCBERVNQUsOJUyBkZWwgZGVzY29tcHRlLCBubyBsJ2VzdGFsdmkgKGVscyBkaW5lcnMgcXVlIGV0IGRlc2NvbXB0ZW4pOiBsJ2VudW5jaWF0IHByZWd1bnRhIHF1YW50IHQnZXN0YWx2aWVzLCBubyBxdWFudCBwYWd1ZXMuIl0sICJlcnIiOiBbIiIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiVkVSRURJQ1RFX0lOVkVSVElUIl0sICJyZXMiOiBbIiQyMVxcY2RvdFxcZGZyYWN7MTV9ezEwMH09MjFcXGNkb3Qweyx9MTUkIiwgIiQzeyx9MTUkIOKCrCJdfQ=="
  },
  {
   "id": "111",
   "ex": 111,
   "ap": "",
   "bloc": "percentatges",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "En un institut, 63 alumnes, que són el 15\\,\\% del total, han viatjat a l'estranger. Quants alumnes té l'institut?",
   "opcions": [
    "$420$ alumnes",
    "$9{,}45$ alumnes",
    "$630$ alumnes",
    "$78$ alumnes"
   ],
   "pistes": [
    "Anomena $T$ el total d'alumnes de l'institut. Els $63$ que han viatjat són el $15\\,\\%$ d'aquest total: $0{,}15\\cdot T=63$.",
    "Aïlla $T$ dividint: $T=\\dfrac{63}{0{,}15}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgbXVsdGlwbGljYXIgJDYzXFxjZG90MHssfTE1JCBlbiBjb21wdGVzIGRlIGRpdmlkaXI6IGNvbSBxdWUgJDYzJCDDqXMgZWwgJDE1XFwsXFwlJCAodW5hIHBhcnQpLCBjYWwgZGl2aWRpciAkNjMkIGVudHJlICQweyx9MTUkIHBlciB0cm9iYXIgZWwgdG90YWwsIG5vIG11bHRpcGxpY2FyLiIsICJObyBjb2luY2lkZWl4IGFtYiAkXFxkZnJhY3s2M317MHssfTE1fSQ6IHJldmlzYSBsYSBkaXZpc2nDsywgc29icmV0b3QgbGEgcG9zaWNpw7MgZGUgbGEgY29tYS4iLCAiU2VtYmxhIHF1ZSBoYXMgc3VtYXQgJDYzKzE1JCBlbiBjb21wdGVzIGRlIHBsYW50ZWphciBsJ2VxdWFjacOzICQweyx9MTVcXGNkb3QgVD02MyQgaSBhw69sbGFyICRUJC4iXSwgImVyciI6IFsiIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiU1VNQV9FTl9MTE9DX1JFU1RBIl0sICJyZXMiOiBbIiQweyx9MTVcXGNkb3QgVD02MyBcXDtcXExvbmdyaWdodGFycm93XFw7IFQ9XFxkZnJhY3s2M317MHssfTE1fSQiLCAiJFQ9NDIwJCBhbHVtbmVzIl19"
  },
  {
   "id": "112a",
   "ex": 112,
   "ap": "a",
   "bloc": "percentatges",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Un venedor de cotxes rep com a comissió el 0,8\\,\\% de les vendes que fa.",
   "enunciat": "Si en un mes va rebre 300 € de comissió, quines vendes va fer?",
   "opcions": [
    "$375$ €",
    "$37\\,500$ €",
    "$3\\,750$ €",
    "$2{,}4$ €"
   ],
   "pistes": [
    "Anomena $V$ les vendes del mes. La comissió és el $0{,}8\\,\\%$ de $V$: $0{,}008\\cdot V=300$.",
    "Aïlla $V$ dividint: $V=\\dfrac{300}{0{,}008}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBjb2luY2lkZWl4IGFtYiAkXFxkZnJhY3szMDB9ezB7LH0wMDh9JDogcmV2aXNhIHF1ZSBoYXMgcGFzc2F0IGNvcnJlY3RhbWVudCBlbCAkMHssfThcXCxcXCUkIGEgbGEgc2V2YSBmb3JtYSBkZWNpbWFsICgkMHssfTAwOCQsIG5vICQweyx9MDgkKS4iLCAiIiwgIlQnaGFzIGRlaXhhdCB1bmEgeGlmcmEgcGVsIGNhbcOtIGVuIGNvbnZlcnRpciBlbCAkMHssfThcXCxcXCUkIGEgZGVjaW1hbDogJDB7LH04XFwsXFwlPTB7LH0wMDgkLCBubyAkMHssfTA4JDsgcmV2aXNhIGxhIGRpdmlzacOzICQzMDA6MHssfTAwOCQgYW1iIGFxdWVzdCB2YWxvci4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgbXVsdGlwbGljYXIgJDMwMFxcY2RvdDB7LH0wMDgkIGVuIGNvbXB0ZXMgZGUgZGl2aWRpcjogY29tIHF1ZSAkMzAwJCDDqXMgZWwgcmVzdWx0YXQgZCdhcGxpY2FyIGVsICQweyx9OFxcLFxcJSQgYSBsZXMgdmVuZGVzLCBjYWwgZGl2aWRpciAkMzAwJCBlbnRyZSAkMHssfTAwOCQuIl0sICJlcnIiOiBbIlBFUkNFTlRBVEdFX0RFQ0lNQUxfTUFMIiwgIiIsICJQRVJDRU5UQVRHRV9ERUNJTUFMX01BTCIsICJDUkVVQU1FTlRfSU5WRVJUSVQiXSwgInJlcyI6IFsiJDB7LH0wMDhcXGNkb3QgVj0zMDAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyBWPVxcZGZyYWN7MzAwfXsweyx9MDA4fSQiLCAiJFY9MzdcXCw1MDAkIOKCrCJdfQ=="
  },
  {
   "id": "112b",
   "ex": 112,
   "ap": "b",
   "bloc": "percentatges",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Un venedor de cotxes rep com a comissió el 0,8\\,\\% de les vendes que fa.",
   "enunciat": "Si el mes següent va vendre per valor de 45\\,000 €, quina comissió va obtenir?",
   "opcions": [
    "$36$ €",
    "$360$ €",
    "$3\\,600$ €",
    "$56{,}25$ €"
   ],
   "pistes": [
    "La comissió és el $0{,}8\\,\\%$ de les vendes: $0{,}008\\cdot45\\,000$.",
    "Multiplica amb cura la posició de la coma decimal."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgdW5hIHhpZnJhIHBlbCBjYW3DrSBlbiBjb252ZXJ0aXIgZWwgJDB7LH04XFwsXFwlJCBhIGRlY2ltYWw6IHJldmlzYSBxdWUgJDB7LH04XFwsXFwlPTB7LH0wMDgkLCBpIG11bHRpcGxpY2EgZGUgbm91LiIsICIiLCAiVCdoYXMgZGVpeGF0IHVuYSB4aWZyYSBwZWwgY2Ftw60gZW4gY29udmVydGlyIGVsICQweyx9OFxcLFxcJSQgYSBkZWNpbWFsOiAkMHssfThcXCxcXCU9MHssfTAwOCQsIG5vICQweyx9MDgkOyBtdWx0aXBsaWNhIGRlIG5vdSAkNDVcXCwwMDBcXGNkb3Qweyx9MDA4JC4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgZGl2aWRpciAkNDVcXCwwMDA6MHssfTAwOCQgZW4gY29tcHRlcyBkZSBtdWx0aXBsaWNhcjogYXF1w60gZXMgZGVtYW5hIGxhIGNvbWlzc2nDsyBhIHBhcnRpciBkZSBsZXMgdmVuZGVzLCBhaXjDrSBxdWUgY2FsICQweyx9MDA4XFxjZG90NDVcXCwwMDAkLiJdLCAiZXJyIjogWyJQRVJDRU5UQVRHRV9ERUNJTUFMX01BTCIsICIiLCAiUEVSQ0VOVEFUR0VfREVDSU1BTF9NQUwiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIiQweyx9MDA4XFxjZG90NDVcXCwwMDAkIiwgIiQzNjAkIOKCrCJdfQ=="
  },
  {
   "id": "113",
   "ex": 113,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Un comerciant decideix apujar el preu d'una mercaderia, que era de 72 €, un 3\\,\\%, i a la setmana següent, un 3\\,\\% més sobre l'últim preu. Quin és el preu final de venda?",
   "opcions": [
    "$74{,}16$ €",
    "$78{,}48$ €",
    "$76{,}38$ €",
    "$76{,}32$ €"
   ],
   "pistes": [
    "Apujar un preu un $3\\,\\%$ equival a multiplicar-lo per $1{,}03$.",
    "El segon augment es calcula sobre el preu JA apujat: cal multiplicar per $1{,}03$ una segona vegada, no sobre el preu original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHByZXUgZGVzcHLDqXMgTk9Nw4lTIGRlbCBwcmltZXIgYXVnbWVudDogZW5jYXJhIGZhbHRhIGFwbGljYXIgZWwgc2Vnb24gJDNcXCxcXCUkIHNvYnJlIGFxdWVzdCBub3UgcHJldSwgbm8gYXR1cmFyLXNlIGFxdcOtLiIsICJObyBjb2luY2lkZWl4IGFtYiBhcGxpY2FyIGVsIGZhY3RvciAkMXssfTAzJCBkdWVzIHZlZ2FkZXMgc2VndWlkZXMgc29icmUgJDcyJDogdG9ybmEgYSBmZXIgZWwgY8OgbGN1bCBwYXMgYSBwYXMuIiwgIiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBzdW1hciBlbHMgZG9zIGF1Z21lbnRzICgkNlxcLFxcJSQgZGUgY29wKSBlbiBjb21wdGVzIGQnYXBsaWNhci1sb3Mgc2VndWl0czogZWwgc2Vnb24gJDNcXCxcXCUkIHMnaGEgZGUgY2FsY3VsYXIgc29icmUgZWwgcHJldSBKQSBhcHVqYXQsIG5vIHNvYnJlIGVsIHByZXUgb3JpZ2luYWwuIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiIiwgIlNVTUFfRU5fTExPQ19SRVNUQSJdLCAicmVzIjogWyJQcmV1IGRlc3Byw6lzIGRlbCBwcmltZXIgYXVnbWVudDogJDcyXFxjZG90MXssfTAzPTc0eyx9MTYkIOKCrCIsICJQcmV1IGRlc3Byw6lzIGRlbCBzZWdvbiBhdWdtZW50IChzb2JyZSAkNzR7LH0xNiQg4oKsKTogJDc0eyx9MTZcXGNkb3Qxeyx9MDM9NzZ7LH0zODQ4JCDigqwiLCAiQXJyb2Rvbml0IGEgY8OobnRpbXMsIHF1ZSDDqXMgY29tIHMnZXhwcmVzc2VuIGVscyBwcmV1czogJDc2eyx9MzgkIOKCrCJdfQ=="
  },
  {
   "id": "114",
   "ex": 114,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En dues setmanes consecutives s'han aplicat al preu d'un article augments del 2\\,\\% i del 5\\,\\%. En quin percentatge s'ha incrementat l'article sobre el seu preu original?",
   "opcions": [
    "$10{,}0\\,\\%$",
    "$7\\,\\%$",
    "$7{,}1\\,\\%$",
    "$1{,}071\\,\\%$"
   ],
   "pistes": [
    "Cada augment equival a multiplicar pel factor $1+\\frac{\\%}{100}$; com que el segon s'aplica sobre el preu ja incrementat, els factors es multipliquen entre si.",
    "Calcula $1{,}02\\cdot1{,}05$ i compara el resultat amb $1$ per trobar el percentatge d'increment."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gc3VydCBkZSBtdWx0aXBsaWNhciBlbHMgZmFjdG9ycyAkMXssfTAyXFxjZG90MXssfTA1JDogcmV2aXNhIGVsIHByb2R1Y3RlIGkgcmVzdGEtaGkgJDEkIGFsIGZpbmFsIHBlciBvYnRlbmlyIGVsIHBlcmNlbnRhdGdlIGQnaW5jcmVtZW50LiIsICJTdW1hciAkMis1JCBub23DqXMgc2VyaWEgY29ycmVjdGUgc2kgZWwgc2Vnb24gYXVnbWVudCBlcyBjYWxjdWzDqXMgc29icmUgZWwgcHJldSBPUklHSU5BTDsgY29tIHF1ZSBlcyBjYWxjdWxhIHNvYnJlIGVsIHByZXUgamEgaW5jcmVtZW50YXQgbGEgcHJpbWVyYSBzZXRtYW5hLCBlbHMgZmFjdG9ycyBzJ2hhbiBkZSBNVUxUSVBMSUNBUiwgbm8gc3VtYXIuIiwgIiIsICJFbCBmYWN0b3IgZ2xvYmFsIMOpcyAkMXssfTA3MSQsIHBlcsOyIGVsIHBlcmNlbnRhdGdlIGQnaW5jcmVtZW50IMOpcyAkKDF7LH0wNzEtMSlcXGNkb3QxMDA9N3ssfTFcXCxcXCUkLCBubyBlbCBmYWN0b3IgdGFsIHF1YWwgbGxlZ2l0IGNvbSBhIHBlcmNlbnRhdGdlLiJdLCAiZXJyIjogWyJQUk9EVUNURV9NQUwiLCAiU1VNQV9FTl9MTE9DX1JFU1RBIiwgIiIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iXSwgInJlcyI6IFsiRmFjdG9yIGdsb2JhbDogJDF7LH0wMlxcY2RvdDF7LH0wNT0xeyx9MDcxJCIsICJQZXJjZW50YXRnZSBkJ2luY3JlbWVudDogJCgxeyx9MDcxLTEpXFxjZG90MTAwPTd7LH0xXFwsXFwlJCAoaSBubyBzaW1wbGVtZW50ICQyKzU9N1xcLFxcJSQsIHBlcnF1w6ggZWwgc2Vnb24gYXVnbWVudCBlcyBjYWxjdWxhIHNvYnJlIHVuYSBxdWFudGl0YXQgamEgbcOpcyBncmFuKSJdfQ=="
  },
  {
   "id": "115",
   "ex": 115,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En una botiga apugen el preu d'un producte de 200 € un 10\\,\\%. A la setmana següent decideixen rebaixar-lo un 10\\,\\% del preu que té en aquell moment. Què ha passat amb el preu?",
   "opcions": [
    "El preu torna a ser exactament $200$ €, els mateixos que a l'inici",
    "El preu final és $220$ €, $20$ € més que el preu inicial",
    "El preu final és $180$ €, $20$ € menys que el preu inicial",
    "El preu final és $198$ €, $2$ € menys que el preu inicial de $200$ €"
   ],
   "pistes": [
    "Apujar un $10\\,\\%$ multiplica per $1{,}10$; rebaixar un $10\\,\\%$ (sobre el preu ja apujat) multiplica per $0{,}90$.",
    "Aplica els dos factors seguits, sobre el preu que resulti de cada pas, no tots dos sobre el preu original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbmNhcmEgcXVlIGwnYXVnbWVudCBpIGxhIHJlYmFpeGEgc2VtYmxpbiBkZWwgbWF0ZWl4ICQxMFxcLFxcJSQsIG5vIGVzIGNvbXBlbnNlbjogZWwgJDEwXFwsXFwlJCBxdWUgZXMgcmViYWl4YSBlcyBjYWxjdWxhIHNvYnJlIHVuYSBxdWFudGl0YXQgTcOJUyBHUkFOICgkMjIwJCDigqwpIHF1ZSBsYSBxdWUgZXMgdmEgYXB1amFyICgkMjAwJCDigqwpLiIsICJBcXVlc3Qgw6lzIGVsIHByZXUganVzdCBERVNQUsOJUyBkZSBsJ2F1Z21lbnQsIGFiYW5zIGQnYXBsaWNhciBsYSByZWJhaXhhIGRlbCAkMTBcXCxcXCUkIHF1ZSB2ZSB0b3Qgc2VndWl0OiBlbmNhcmEgZmFsdGEgYXF1ZXN0IHNlZ29uIHBhcy4iLCAiTm8gY29pbmNpZGVpeCBhbWIgYXBsaWNhciBwcmltZXIgZWwgZmFjdG9yICQxeyx9MTAkIGkgZGVzcHLDqXMgZWwgZmFjdG9yICQweyx9OTAkIHNvYnJlIGVsIHByZXUgamEgYXB1amF0OiB0b3JuYSBhIGZlciBlbHMgZG9zIHBhc3NvcyBwZXIgc2VwYXJhdC4iLCAiIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICIiXSwgInJlcyI6IFsiUHJldSBkZXNwcsOpcyBkZSBsJ2F1Z21lbnQ6ICQyMDBcXGNkb3Qxeyx9MTA9MjIwJCDigqwiLCAiUHJldSBkZXNwcsOpcyBkZSBsYSByZWJhaXhhIChzb2JyZSAkMjIwJCDigqwpOiAkMjIwXFxjZG90MHssfTkwPTE5OCQg4oKsIiwgIkVsIHByZXUgaGEgcXVlZGF0ICQyJCDigqwgcGVyIHNvdGEgZGUgbCdvcmlnaW5hbDogYXVnbWVudCBpIHJlYmFpeGEgZGVsIG1hdGVpeCBwZXJjZW50YXRnZSBOTyBlcyBjb21wZW5zZW4sIHBlcnF1w6ggZXMgY2FsY3VsZW4gc29icmUgcXVhbnRpdGF0cyBkaWZlcmVudHMiXX0="
  },
  {
   "id": "116",
   "ex": 116,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "La carn de xai, durant el Nadal, va augmentar el seu preu de 8,85 €/kg a 11,55 €/kg. Un altre producte que s'ha encarit ha estat el raïm, de 2,10 €/kg a 3,95 €/kg. Quin producte s'ha incrementat més en proporció?",
   "opcions": [
    "El raïm s'ha incrementat més en proporció (uns $88{,}1\\,\\%$ enfront d'un $30{,}5\\,\\%$ del xai)",
    "El xai, perquè el seu percentatge d'augment és $\\dfrac{11{,}55}{8{,}85}\\approx1{,}305$",
    "El xai, perquè ha pujat més en euros per quilo ($2{,}70$ € enfront d'$1{,}85$ €)",
    "Els dos productes s'han incrementat exactament igual en proporció"
   ],
   "pistes": [
    "Per comparar «en proporció» cal calcular el percentatge d'augment de cada producte respecte al seu preu INICIAL, no la diferència en euros.",
    "Calcula per separat $\\frac{11{,}55-8{,}85}{8{,}85}$ (xai) i $\\frac{3{,}95-2{,}10}{2{,}10}$ (raïm), i compara els dos resultats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yICgkMXssfTMwNSQpIMOpcyBlbCBmYWN0b3IgZGUgcHJldSBmaW5hbCwgbm8gbCdhdWdtZW50IHJlbGF0aXU6IGwnaW5jcmVtZW50IHBlcmNlbnR1YWwgw6lzICRcXGZyYWN7MTF7LH01NS04eyx9ODV9ezh7LH04NX1cXGFwcHJveDMweyx9NVxcLFxcJSQsIGkgZW5jYXJhIGNhbCBjb21wYXJhci1sbyBhbWIgZWwgZGVsIHJhw69tIHBlciBzYWJlciBxdWluIGhhIHB1amF0IG3DqXMuIiwgIkwnZW51bmNpYXQgcHJlZ3VudGEgcXVpbiBzJ2hhIGluY3JlbWVudGF0IG3DqXMgRU4gUFJPUE9SQ0nDkyAocGVyY2VudHVhbG1lbnQpLCBubyBlbiBldXJvcyBhYnNvbHV0czogY2FsIGNvbXBhcmFyICRcXGZyYWN7MnssfTcwfXs4eyx9ODV9JCBhbWIgJFxcZnJhY3sxeyx9ODV9ezJ7LH0xMH0kLCBubyAkMnssfTcwJCBhbWIgJDF7LH04NSQuIiwgIkNhbGN1bGEgZWxzIGRvcyBwZXJjZW50YXRnZXMgZCdhdWdtZW50IHBlciBzZXBhcmF0ICgkXFxhcHByb3gzMHssfTVcXCxcXCUkIGVsIHhhaSwgJFxcYXBwcm94ODh7LH0xXFwsXFwlJCBlbCByYcOvbSkgaSBjb21wcm92YSBxdWUgbm8gY29pbmNpZGVpeGVuLiJdLCAiZXJyIjogWyIiLCAiUFJPRFVDVEVfTUFMIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSJdLCAicmVzIjogWyJYYWk6IGF1Z21lbnQgcmVsYXRpdSAkXFxkZnJhY3sxMXssfTU1LTh7LH04NX17OHssfTg1fT1cXGRmcmFjezJ7LH03MH17OHssfTg1fVxcYXBwcm94MHssfTMwNTFcXFJpZ2h0YXJyb3czMHssfTVcXCxcXCUkIiwgIlJhw69tOiBhdWdtZW50IHJlbGF0aXUgJFxcZGZyYWN7M3ssfTk1LTJ7LH0xMH17MnssfTEwfT1cXGRmcmFjezF7LH04NX17MnssfTEwfVxcYXBwcm94MHssfTg4MTBcXFJpZ2h0YXJyb3c4OHssfTFcXCxcXCUkIiwgIkVuY2FyYSBxdWUgZWwgeGFpIGhhIHB1amF0IG3DqXMgZW4gZXVyb3MgcGVyIHF1aWxvLCBlbCByYcOvbSBzJ2hhIGVuY2FyaXQgbW9sdCBtw6lzIGVuIHByb3BvcmNpw7MiXX0="
  },
  {
   "id": "117",
   "ex": 117,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En escalfar una barra de metall d'1 m a $200\\,^\\circ$C, s'ha dilatat fins a mesurar 1,04 m. Una barra de 60 cm d'un altre metall, en escalfar-la a la mateixa temperatura, s'ha dilatat fins a mesurar 61,9 cm. Quin metall es dilata menys?",
   "opcions": [
    "Els dos metalls es dilaten exactament igual, perquè tots dos han augmentat uns 2 o 4 centèsimes per unitat",
    "El primer metall (l'$1$ m), perquè el seu factor de dilatació, $1{,}04$, és més petit que $61{,}9$",
    "El segon metall (el de $60$ cm) es dilata menys",
    "No es pot saber quin es dilata menys perquè les mesures estan en unitats diferents (m i cm)"
   ],
   "pistes": [
    "Per comparar la dilatació cal fixar-nos en el FACTOR pel qual es multiplica la longitud original, no en l'augment absolut.",
    "Calcula per separat $\\frac{1{,}04}{1}$ i $\\frac{61{,}9}{60}$, cadascun en les seves pròpies unitats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJDb21wYXJhIGVscyBmYWN0b3JzIGRlIGRpbGF0YWNpw7MgZXhhY3RlcyAoJDF7LH0wNCQgaSAkXFxhcHByb3gxeyx9MDMxNyQpLCBubyB1bmEgaW1wcmVzc2nDsyBhcHJveGltYWRhIGRlIGxhIGRpZmVyw6huY2lhIGFic29sdXRhLiIsICIkNjF7LH05JCBubyDDqXMgdW4gZmFjdG9yIGRlIGRpbGF0YWNpw7M6IGNhbCBkaXZpZGlyIGxhIGxvbmdpdHVkIGZpbmFsIGVudHJlIGxhIGluaWNpYWwgRU4gTEVTIE1BVEVJWEVTIFVOSVRBVFMgKCRcXGZyYWN7NjF7LH05fXs2MH1cXGFwcHJveDF7LH0wMzE3JCkgcGVyIG9idGVuaXItbmUgdW4sIGkgY29tcGFyYXItbG8gYW1iICQxeyx9MDQkLiIsICIiLCAiRWwgZmFjdG9yIGRlIGRpbGF0YWNpw7MgKGxvbmdpdHVkIGZpbmFsIGVudHJlIGluaWNpYWwpIG5vIGRlcMOobiBkZSBsYSB1bml0YXQgcXVlIGZhY2lzIHNlcnZpciwgbWVudHJlIHNpZ3VpcyBjb25zaXN0ZW50IGVuIGNhZGEgYmFycmEgcGVyIHNlcGFyYXQ6IGVzIHBvdCBjb21wYXJhciBwZXJmZWN0YW1lbnQuIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIkNPTVBBUkFfVEVSTUVTIiwgIiIsICJFU19QT1RfREVURVJNSU5BUiJdLCAicmVzIjogWyJQcmltZXIgbWV0YWxsOiBmYWN0b3IgJFxcZGZyYWN7MXssfTA0fXsxfT0xeyx9MDQkIiwgIlNlZ29uIG1ldGFsbDogZmFjdG9yICRcXGRmcmFjezYxeyx9OX17NjB9XFxhcHByb3gxeyx9MDMxNyQiLCAiQ29tIHF1ZSAkMXssfTAzMTc8MXssfTA0JCwgZWwgc2Vnb24gbWV0YWxsIHMnaGEgZGlsYXRhdCBwcm9wb3JjaW9uYWxtZW50IG1lbnlzIl19"
  },
  {
   "id": "118",
   "ex": 118,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En un envàs de galetes anuncien que conté un 25\\,\\% més de galetes pel mateix preu. Els envasos antics pesaven 1 kg i l'envàs actual amb l'oferta pesa 1,2 kg. És certa la publicitat?",
   "opcions": [
    "Sí: el pes ha passat d'$1$ kg a $1{,}2$ kg, i $1{,}2$ és exactament un $25\\,\\%$ més que $1$",
    "No es pot saber sense conèixer el pes exacte d'una galeta",
    "Sí, perquè $1{,}2-1=0{,}2$ i $0{,}2\\cdot100=25$",
    "No: l'envàs només conté un $20\\,\\%$ més de galetes, no un $25\\,\\%$"
   ],
   "pistes": [
    "Si el pes de cada galeta no canvia, un $25\\,\\%$ més de galetes hauria de suposar exactament un $25\\,\\%$ més de pes.",
    "Comprova quin percentatge d'augment dona realment el pes: $\\frac{1{,}2-1}{1}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJDb21wcm92YS1obyBhbWIgdW4gJDI1XFwsXFwlJCByZWFsOiAkMVxcY2RvdDF7LH0yNT0xeyx9MjUkIGtnLCBubyAkMXssfTIkIGtnLiBFbCBwZXMgYW51bmNpYXQgbm8gY29pbmNpZGVpeCBhbWIgdW4gaW5jcmVtZW50IGRlbCAkMjVcXCxcXCUkLiIsICJTaSBlbCBwZXMgZGUgY2FkYSBnYWxldGEgZXMgbWFudMOpIGNvbnN0YW50IChjb20gZG9uYSBhIGVudGVuZHJlIGwnZW51bmNpYXQpLCBlbCBwZXJjZW50YXRnZSBkJ2F1Z21lbnQgZGUgUEVTIGkgZWwgZGUgTk9NQlJFIGRlIGdhbGV0ZXMgY29pbmNpZGVpeGVuOiBubyBjYWwgY29uw6hpeGVyIGVsIHBlcyBkJ3VuYSBnYWxldGEgcGVyIHJlc3BvbmRyZS4iLCAiJDB7LH0yXFxjZG90MTAwPTIwJCwgbm8gJDI1JDogcmV2aXNhIGFxdWVzdCBkYXJyZXIgcGFzIGRlbCBjw6BsY3VsIGRlbCBwZXJjZW50YXRnZSByZWFsIGQnaW5jcmVtZW50LiIsICIiXSwgImVyciI6IFsiUFJPRFVDVEVfTUFMIiwgIkVTX1BPVF9ERVRFUk1JTkFSIiwgIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICIiXSwgInJlcyI6IFsiVW4gJDI1XFwsXFwlJCByZWFsIGRvbmFyaWEgJDFcXGNkb3Qxeyx9MjU9MXssfTI1JCBrZywgcGVyw7IgbCdlbnbDoHMgYWN0dWFsIHBlc2Egbm9tw6lzICQxeyx9MiQga2ciLCAiSW5jcmVtZW50IHJlYWw6ICRcXGRmcmFjezF7LH0yLTF9ezF9PTB7LH0yMFxcUmlnaHRhcnJvdzIwXFwsXFwlJCIsICJQZXIgdGFudCBlbCBwZXMgKGkgZWwgbm9tYnJlIGRlIGdhbGV0ZXMsIHNpIGNhZGEgdW5hIHBlc2EgaWd1YWwpIG5vbcOpcyBoYSBhdWdtZW50YXQgdW4gJDIwXFwsXFwlJCwgbm8gdW4gJDI1XFwsXFwlJCJdfQ=="
  }
 ]
};
