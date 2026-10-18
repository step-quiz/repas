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
    "354a",
    "354b",
    "101",
    "104",
    "102",
    "103",
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
    "355a",
    "355b",
    "109",
    "110",
    "111",
    "112a",
    "112b"
   ]
  },
  {
   "id": "factor_multiplicador",
   "titol": "El factor multiplicador",
   "descripcio": "Pujar un 15 % és multiplicar per 1,15 i baixar-lo, per 0,85: una sola operació per a cada variació, i com desfer-la.",
   "items": [
    "356a",
    "356b",
    "275a",
    "275b",
    "275c",
    "275d",
    "276a",
    "276b",
    "276c",
    "276d",
    "277a",
    "277b",
    "277c",
    "278a",
    "278b",
    "278c",
    "278d",
    "279a",
    "279b",
    "279c"
   ]
  },
  {
   "id": "aplicacions_percentatge",
   "titol": "Descomptes, IVA i interessos",
   "descripcio": "Descomptes encadenats, IVA, interès simple i repartiments proporcionals.",
   "items": [
    "280a",
    "280b",
    "281a",
    "281b",
    "282a",
    "282b",
    "283a",
    "283b",
    "284"
   ],
   "avancat": true
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
   ],
   "avancat": true
  }
 ],
 "errors": {
  "CREUAMENT_INVERTIT": "Has creuat els termes al revés en aïllar la incògnita.",
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "FORMULA_INVERTIDA": "Has dividit on la fórmula multiplica (o al revés). Escriu la fórmula sencera abans de substituir-hi els valors.",
  "MAGNITUD_NO_CONVERTIDA": "Has donat el mateix número per a dues magnituds diferents. Fes servir la constant que les relaciona (densitat, preu unitari, velocitat) per passar d'una a l'altra.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "354a",
   "ex": 354,
   "ap": "a",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el valor que falta. L'enunciat diu si les dues magnituds són directament o inversament proporcionals.",
   "enunciat": "$1$ kg de pomes costa $2$ €. Quant costen $5$ kg? (El preu és directament proporcional als kg.)",
   "opcions": [
    "$10$ €",
    "$0{,}4$ €",
    "$7$ €",
    "$2{,}5$ €"
   ],
   "pistes": [
    "Directament proporcional: si una magnitud es multiplica per $5$, l'altra també.",
    "$5$ kg són cinc vegades $1$ kg."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGZldCBjb20gc2kgZm9zIGludmVyc2EgKCQyOjUkKS4gw4lzIGRpcmVjdGE6IGVsIGRvYmxlIGRlIGtnLCBlbCBkb2JsZSBkZSBwcmV1LiIsICJIYXMgc3VtYXQgJDIrNSQuIFNpICQxJCBrZyBjb3N0YSAkMiQg4oKsLCAkNSQga2cgY29zdGVuIGNpbmMgdmVnYWRlcyBtw6lzOiAkNVxcY2RvdDIkLiIsICJIYXMgZGl2aWRpdCAkNToyJC4gQW1iIG3DqXMga2cgZWwgcHJldSBoYSBkZSBQVUpBUjogJDVcXGNkb3QyJC4iXSwgImVyciI6IFsiIiwgIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJQUk9EVUNURV9QRVJfU1VNQSIsICJGT1JNVUxBX0lOVkVSVElEQSJdLCAicmVzIjogWyIkNVxcY2RvdDI9MTAkIOKCrCJdfQ=="
  },
  {
   "id": "354b",
   "ex": 354,
   "ap": "b",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el valor que falta. L'enunciat diu si les dues magnituds són directament o inversament proporcionals.",
   "enunciat": "$1$ obrer tarda $12$ dies a fer una feina. Quants dies hi tardaran $3$ obrers que treballen al mateix ritme? (Els dies són inversament proporcionals als obrers.)",
   "opcions": [
    "$9$ dies",
    "$15$ dies",
    "$4$ dies",
    "$36$ dies"
   ],
   "pistes": [
    "Inversament proporcional: si una magnitud es multiplica per $3$, l'altra es divideix per $3$.",
    "$3$ obrers són el triple d'$1$ obrer."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcmVzdGF0ICQxMi0zJC4gQW1iIGVsIHRyaXBsZSBkJ29icmVycywgZXMgdGFyZGEgbGEgdGVyY2VyYSBwYXJ0OiAkMTI6MyQuIiwgIkhhcyBzdW1hdCAkMTIrMyQuIEFtYiBtw6lzIG9icmVycyBubyBlcyBwb3QgdGFyZGFyIG3DqXMuIiwgIiIsICJIYXMgZmV0IGNvbSBzaSBmb3MgZGlyZWN0YSAoJDEyXFxjZG90MyQpLiBBbWIgbcOpcyBvYnJlcnMgbGEgZmVpbmEgcydhY2FiYSBBQkFOUzogJDEyOjMkLiJdLCAiZXJyIjogWyJQUk9EVUNURV9QRVJfU1VNQSIsICJQUk9EVUNURV9QRVJfU1VNQSIsICIiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIiQxMjozPTQkIGRpZXMiXX0="
  },
  {
   "id": "101",
   "ex": 101,
   "ap": "",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Per elaborar una recepta per a 6 persones es necessiten 240 g de salmó. Esbrina quina quantitat de salmó necessito per a 8 persones.",
   "opcions": [
    "$180$ g",
    "$300$ g",
    "$320$ g",
    "$\\dfrac{15}{2}$ g"
   ],
   "pistes": [
    "Persones i quantitat de salmó són magnituds directament proporcionals: a més persones, més salmó.",
    "Planteja la regla de tres directa $\\dfrac{6\\text{ persones}}{240\\text{ g}}=\\dfrac{8\\text{ persones}}{x}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZmV0IHNlcnZpciBsYSByZWdsYSBkZSB0cmVzIGFsIHJldsOpczogYSBNw4lTIHBlcnNvbmVzIGVscyBjb3JyZXNwb24gTcOJUyBzYWxtw7MsIG5vIG1lbnlzLiBQbGFudGVqYSAkXFxmcmFjezZ9ezI0MH09XFxmcmFjezh9e3h9JCwgbm8gbGEgZnJhY2Npw7MgaW52ZXJ0aWRhLiIsICJBcXVlc3QgdmFsb3Igbm8gc3VydCBkZSBsYSBwcm9wb3JjacOzIGRvbmFkYTogY29tcHJvdmEtaG8gYW1iIGxhIHJlZ2xhIGRlIHRyZXMgJFxcZnJhY3s2fXsyNDB9PVxcZnJhY3s4fXt4fSQgZW4gY29tcHRlcyBkJ2VzdGltYXItbG8uIiwgIiIsICJTZW1ibGEgcXVlIGhhcyBjYWxjdWxhdCAkMjQwOjhcXGNkb3Q2JCBvIHNpbWlsYXI7IGVsIHF1ZSBjYWwgw6lzICRcXGRmcmFjezI0MFxcY2RvdDh9ezZ9JDogbGEgcXVhbnRpdGF0IGRlIHNhbG3DsyBjcmVpeCBhbWIgZWwgbm9tYnJlIGRlIHBlcnNvbmVzLCBubyBlbiBlbCBzZW50aXQgY29udHJhcmkuIl0sICJlcnIiOiBbIkNSRVVBTUVOVF9JTlZFUlRJVCIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICIiLCAiUFJPRFVDVEVfTUFMIl0sICJyZXMiOiBbIiRcXGRmcmFjezZ9ezI0MH09XFxkZnJhY3s4fXt4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3syNDBcXGNkb3Q4fXs2fSQiLCAiJHg9MzIwJCBnIGRlIHNhbG3DsyJdfQ=="
  },
  {
   "id": "104",
   "ex": 104,
   "ap": "",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "",
   "enunciat": "Un coet espacial tarda 2 minuts a assolir una velocitat de $30\\,000$ km/h. A aquest mateix ritme, quina velocitat pot assolir en 5 minuts?",
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
   "id": "102",
   "ex": 102,
   "ap": "",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En Carles va pintar la seva habitació amb 6 pots, de 4 kg de pintura cada un, però ara només venen pots de 3 kg. Quants pots de pintura necessita per tornar-la a pintar?",
   "opcions": [
    "$18$ pots",
    "$\\dfrac{9}{2}$ pots",
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
   "dif": 3,
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
   "id": "105a",
   "ex": 105,
   "ap": "a",
   "bloc": "directa_inversa",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 4,
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
  }
 ]
};
