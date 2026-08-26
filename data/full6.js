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
   "id": "factor_multiplicador",
   "titol": "El factor multiplicador",
   "descripcio": "Pujar un 15 % és multiplicar per 1,15 i baixar-lo, per 0,85: una sola operació per a cada variació, i com desfer-la.",
   "items": [
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
  "BASE_MAL_TRIADA": "Has calculat el percentatge sobre la base que no toca. Una variació percentual sempre es mesura respecte del valor de PARTIDA.",
  "COMPARA_TERMES": "Dues fraccions equivalents gairebé mai tenen els mateixos termes: el que ha de coincidir és el valor, no les xifres.",
  "CREUAMENT_INVERTIT": "Has creuat els termes al revés en aïllar la incògnita.",
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "ES_POT_DETERMINAR": "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha prou. Abans de descartar una pregunta, mira si algun teorema o criteri et permet respondre-la amb el que ja tens.",
  "FACTOR_INVERS_OBLIDAT": "Per desfer una variació percentual no es fa la contrària: es DIVIDEIX pel factor. Si un preu ha pujat un 10 %, baixar-lo un 10 % no el torna al punt de partida.",
  "FACTOR_PER_PERCENTATGE": "Has donat NOMÉS la part que puja o baixa, no la quantitat final. El factor multiplicador és $1+p$ per augmentar i $1-p$ per rebaixar: d'un sol cop et dona el resultat, no la variació.",
  "FRACCIO_COM_PERCENTATGE": "Has pres el numerador de la fracció com si ja fos el percentatge. Per arribar-hi cal portar la fracció sencera a denominador $100$.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "MAGNITUD_NO_CONVERTIDA": "Has donat el mateix número per a dues magnituds diferents. Fes servir la constant que les relaciona (densitat, preu unitari, velocitat) per passar d'una a l'altra.",
  "ORDRE_DELS_FACTORS": "Has donat per fet que l'ordre canvia el resultat. Quan les variacions s'encadenen com a factors, el producte és el mateix en qualsevol ordre.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PART_MAL_ASSIGNADA": "El càlcul és bo però l'has atribuït a qui no toca: comprova a quina part correspon cada resultat.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PERCENTATGES_SUMATS": "Has sumat o restat els percentatges entre si. No se sumen mai: cadascun es calcula sobre una base diferent. El que sí que es pot fer és multiplicar els factors.",
  "PERCENTATGE_DECIMAL_MAL": "El pas de tant per cent a decimal no és correcte: es divideix per $100$, així que $0{,}8\\,\\%=0{,}008$ i $8\\,\\%=0{,}08$. Compta les xifres.",
  "PERCENTATGE_MAL_CALCULAT": "El percentatge d'un valor s'obté multiplicant la seva freqüència relativa per $100$ (o, equivalentment, $\\frac{f_i}{N}\\cdot100$).",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "REPARTIMENT_A_PARTS_IGUALS": "Has repartit a parts iguals. En un repartiment PROPORCIONAL, a cadascú li toca segons el que ha posat.",
  "RESTA_PER_QUOCIENT": "Has restat les dues quantitats. Un percentatge i una raó surten d'una DIVISIÓ: diuen quantes vegades, no quant més.",
  "SIMPLE_PER_COMPOST": "Has fet servir interès compost on l'enunciat diu simple. Amb interès simple els interessos es calculen sempre sobre el capital inicial i cada període dona el mateix.",
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
   "enunciat": "En escalfar una barra de metall d'1 m a $200^\\circ$C, s'ha dilatat fins a mesurar 1,04 m. Una barra de 60 cm d'un altre metall, en escalfar-la a la mateixa temperatura, s'ha dilatat fins a mesurar 61,9 cm. Quin metall es dilata menys?",
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
  },
  {
   "id": "275a",
   "ex": 275,
   "ap": "a",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Per quin nombre s'ha de multiplicar una quantitat per fer-hi aquesta variació?",
   "enunciat": "Augmentar-la un $20\\,\\%$.",
   "opcions": [
    "$0{,}80$",
    "$1{,}20$",
    "$0{,}20$",
    "$20$"
   ],
   "pistes": [
    "Un percentatge es passa a decimal dividint-lo entre $100$: $20\\,\\%\\to0{,}20$.",
    "Si la quantitat puja, el factor és $1+$ aquest decimal; si baixa, és $1-$ aquest decimal."
   ],
   "nota": "Aquest és el bloc sencer resumit: el factor multiplicador és el nombre pel qual multipliques d'un sol cop. Puja un $20\\,\\%$ $\\to$ $\\times1{,}2$; baixa un $20\\,\\%$ $\\to$ $\\times0{,}8$.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIGZhY3RvciBkZSByZWJhaXhhci4gU2kgbGEgcXVhbnRpdGF0IHB1amEsIGVsIGZhY3RvciBoYSBkZSBzZXIgbcOpcyBncmFuIHF1ZSAkMSQuIiwgIiIsICJBcXVlc3QgZmFjdG9yIGV0IGRvbmEgTk9Nw4lTIGxhIHBhcnQgcXVlIHB1amEgbyBiYWl4YSwgbm8gbGEgcXVhbnRpdGF0IGZpbmFsLiBQZXIgdGVuaXIgZWwgdG90YWwgY2FsIHN1bWFyLWhpIGwnb3JpZ2luYWw6ICQxKzB7LH0yMD0xeyx9MjAkLiIsICJFbCAkMjAkIMOpcyBlbCB0YW50IHBlciBjZW50LCBubyBlbCBmYWN0b3IuIFBlciBwYXNzYXItbG8gYSBmYWN0b3IgY2FsIGRpdmlkaXItbG8gZW50cmUgJDEwMCQgaSBzdW1hci1sbyBhICQxJC4iXSwgImVyciI6IFsiVkVSRURJQ1RFX0lOVkVSVElUIiwgIiIsICJGQUNUT1JfUEVSX1BFUkNFTlRBVEdFIiwgIlBFUkNFTlRBVEdFX0RFQ0lNQUxfTUFMIl0sICJyZXMiOiBbIiQyMFxcLFxcJT0weyx9MjAkIiwgIkZhY3RvciAkPTErMHssfTIwPTF7LH0yMCQiXX0="
  },
  {
   "id": "275b",
   "ex": 275,
   "ap": "b",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Per quin nombre s'ha de multiplicar una quantitat per fer-hi aquesta variació?",
   "enunciat": "Rebaixar-la un $35\\,\\%$.",
   "opcions": [
    "$0{,}35$",
    "$35$",
    "$0{,}65$",
    "$1{,}35$"
   ],
   "pistes": [
    "Un percentatge es passa a decimal dividint-lo entre $100$: $35\\,\\%\\to0{,}35$.",
    "Si la quantitat puja, el factor és $1+$ aquest decimal; si baixa, és $1-$ aquest decimal."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgZmFjdG9yIGV0IGRvbmEgTk9Nw4lTIGxhIHBhcnQgcXVlIHB1amEgbyBiYWl4YSwgbm8gbGEgcXVhbnRpdGF0IGZpbmFsLiBQZXIgdGVuaXIgZWwgdG90YWwgY2FsIHJlc3Rhci1sYSBkZSBsJ29yaWdpbmFsOiAkMS0weyx9MzU9MHssfTY1JC4iLCAiRWwgJDM1JCDDqXMgZWwgdGFudCBwZXIgY2VudCwgbm8gZWwgZmFjdG9yLiBQZXIgcGFzc2FyLWxvIGEgZmFjdG9yIGNhbCBkaXZpZGlyLWxvIGVudHJlICQxMDAkIGkgcmVzdGFyLWxvIGEgJDEkLiIsICIiLCAiQXF1ZXN0IMOpcyBlbCBmYWN0b3IgZGUgYXVnbWVudGFyLiBTaSBsYSBxdWFudGl0YXQgYmFpeGEsIGVsIGZhY3RvciBoYSBkZSBzZXIgbcOpcyBwZXRpdCBxdWUgJDEkLiJdLCAiZXJyIjogWyJGQUNUT1JfUEVSX1BFUkNFTlRBVEdFIiwgIlBFUkNFTlRBVEdFX0RFQ0lNQUxfTUFMIiwgIiIsICJWRVJFRElDVEVfSU5WRVJUSVQiXSwgInJlcyI6IFsiJDM1XFwsXFwlPTB7LH0zNSQiLCAiRmFjdG9yICQ9MS0weyx9MzU9MHssfTY1JCJdfQ=="
  },
  {
   "id": "275c",
   "ex": 275,
   "ap": "c",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Per quin nombre s'ha de multiplicar una quantitat per fer-hi aquesta variació?",
   "enunciat": "Augmentar-la un $7\\,\\%$.",
   "opcions": [
    "$1{,}07$",
    "$0{,}93$",
    "$7$",
    "$0{,}07$"
   ],
   "pistes": [
    "Un percentatge es passa a decimal dividint-lo entre $100$: $7\\,\\%\\to0{,}07$.",
    "Si la quantitat puja, el factor és $1+$ aquest decimal; si baixa, és $1-$ aquest decimal."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IMOpcyBlbCBmYWN0b3IgZGUgcmViYWl4YXIuIFNpIGxhIHF1YW50aXRhdCBwdWphLCBlbCBmYWN0b3IgaGEgZGUgc2VyIG3DqXMgZ3JhbiBxdWUgJDEkLiIsICJFbCAkNyQgw6lzIGVsIHRhbnQgcGVyIGNlbnQsIG5vIGVsIGZhY3Rvci4gUGVyIHBhc3Nhci1sbyBhIGZhY3RvciBjYWwgZGl2aWRpci1sbyBlbnRyZSAkMTAwJCBpIHN1bWFyLWxvIGEgJDEkLiIsICJBcXVlc3QgZmFjdG9yIGV0IGRvbmEgTk9Nw4lTIGxhIHBhcnQgcXVlIHB1amEgbyBiYWl4YSwgbm8gbGEgcXVhbnRpdGF0IGZpbmFsLiBQZXIgdGVuaXIgZWwgdG90YWwgY2FsIHN1bWFyLWhpIGwnb3JpZ2luYWw6ICQxKzB7LH0wNz0xeyx9MDckLiJdLCAiZXJyIjogWyIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlBFUkNFTlRBVEdFX0RFQ0lNQUxfTUFMIiwgIkZBQ1RPUl9QRVJfUEVSQ0VOVEFUR0UiXSwgInJlcyI6IFsiJDdcXCxcXCU9MHssfTA3JCIsICJGYWN0b3IgJD0xKzB7LH0wNz0xeyx9MDckIl19"
  },
  {
   "id": "275d",
   "ex": 275,
   "ap": "d",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Per quin nombre s'ha de multiplicar una quantitat per fer-hi aquesta variació?",
   "enunciat": "Rebaixar-la un $4\\,\\%$.",
   "opcions": [
    "$0{,}04$",
    "$4$",
    "$0{,}96$",
    "$1{,}04$"
   ],
   "pistes": [
    "Un percentatge es passa a decimal dividint-lo entre $100$: $4\\,\\%\\to0{,}04$.",
    "Si la quantitat puja, el factor és $1+$ aquest decimal; si baixa, és $1-$ aquest decimal."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgZmFjdG9yIGV0IGRvbmEgTk9Nw4lTIGxhIHBhcnQgcXVlIHB1amEgbyBiYWl4YSwgbm8gbGEgcXVhbnRpdGF0IGZpbmFsLiBQZXIgdGVuaXIgZWwgdG90YWwgY2FsIHJlc3Rhci1sYSBkZSBsJ29yaWdpbmFsOiAkMS0weyx9MDQ9MHssfTk2JC4iLCAiRWwgJDQkIMOpcyBlbCB0YW50IHBlciBjZW50LCBubyBlbCBmYWN0b3IuIFBlciBwYXNzYXItbG8gYSBmYWN0b3IgY2FsIGRpdmlkaXItbG8gZW50cmUgJDEwMCQgaSByZXN0YXItbG8gYSAkMSQuIiwgIiIsICJBcXVlc3Qgw6lzIGVsIGZhY3RvciBkZSBhdWdtZW50YXIuIFNpIGxhIHF1YW50aXRhdCBiYWl4YSwgZWwgZmFjdG9yIGhhIGRlIHNlciBtw6lzIHBldGl0IHF1ZSAkMSQuIl0sICJlcnIiOiBbIkZBQ1RPUl9QRVJfUEVSQ0VOVEFUR0UiLCAiUEVSQ0VOVEFUR0VfREVDSU1BTF9NQUwiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkNFxcLFxcJT0weyx9MDQkIiwgIkZhY3RvciAkPTEtMHssfTA0PTB7LH05NiQiXX0="
  },
  {
   "id": "276a",
   "ex": 276,
   "ap": "a",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aplica la variació amb un sol producte.",
   "enunciat": "$250$ €, i puja un $15\\,\\%$.",
   "opcions": [
    "$37{,}50$ €",
    "$287{,}50$ €",
    "$265{,}00$ €",
    "$212{,}50$ €"
   ],
   "pistes": [
    "Fes servir el factor multiplicador: $1{,}15$.",
    "Multiplica $250$ per aquest factor, tot d'un cop."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBaXjDsiDDqXMgbm9tw6lzIGVsIHF1ZSBwdWphICgkMTVcXCxcXCUkIGRlICQyNTAkKS4gRWwgcmVzdWx0YXQgw6lzIGxhIHF1YW50aXRhdCBmaW5hbCwgbm8gbGEgdmFyaWFjacOzLiIsICIiLCAiSGFzIHN1bWF0IG8gcmVzdGF0IGVsICQxNSQgZGlyZWN0YW1lbnQuIEVsICQxNSQgw6lzIHVuIHRhbnQgcGVyIGNlbnQsIG5vIGV1cm9zOiBjYWwgY2FsY3VsYXItbmUgZWwgJDE1XFwsXFwlJCBkZSAkMjUwJC4iLCAiSGFzIGFwbGljYXQgbGEgdmFyaWFjacOzIGFsIHJldsOpczogc2kgcHVqYSwgZWwgcmVzdWx0YXQgaGEgZGUgc2VyIG3DqXMgZ3JhbiBxdWUgJDI1MCQuIl0sICJlcnIiOiBbIkZBQ1RPUl9QRVJfUEVSQ0VOVEFUR0UiLCAiIiwgIlBST0RVQ1RFX1BFUl9TVU1BIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkMjUwXFxjZG90MXssfTE1PTI4N3ssfTUwJCDigqwiXX0="
  },
  {
   "id": "276b",
   "ex": 276,
   "ap": "b",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aplica la variació amb un sol producte.",
   "enunciat": "$80$ €, i baixa un $25\\,\\%$.",
   "opcions": [
    "$100{,}00$ €",
    "$55{,}00$ €",
    "$20{,}00$ €",
    "$60{,}00$ €"
   ],
   "pistes": [
    "Fes servir el factor multiplicador: $0{,}75$.",
    "Multiplica $80$ per aquest factor, tot d'un cop."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBsYSB2YXJpYWNpw7MgYWwgcmV2w6lzOiBzaSBiYWl4YSwgZWwgcmVzdWx0YXQgaGEgZGUgc2VyIG3DqXMgcGV0aXQgcXVlICQ4MCQuIiwgIkhhcyBzdW1hdCBvIHJlc3RhdCBlbCAkMjUkIGRpcmVjdGFtZW50LiBFbCAkMjUkIMOpcyB1biB0YW50IHBlciBjZW50LCBubyBldXJvczogY2FsIGNhbGN1bGFyLW5lIGVsICQyNVxcLFxcJSQgZGUgJDgwJC4iLCAiQWl4w7Igw6lzIG5vbcOpcyBlbCBxdWUgYmFpeGEgKCQyNVxcLFxcJSQgZGUgJDgwJCkuIEVsIHJlc3VsdGF0IMOpcyBsYSBxdWFudGl0YXQgZmluYWwsIG5vIGxhIHZhcmlhY2nDsy4iLCAiIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJQUk9EVUNURV9QRVJfU1VNQSIsICJGQUNUT1JfUEVSX1BFUkNFTlRBVEdFIiwgIiJdLCAicmVzIjogWyIkODBcXGNkb3Qweyx9NzU9NjB7LH0wMCQg4oKsIl19"
  },
  {
   "id": "276c",
   "ex": 276,
   "ap": "c",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aplica la variació amb un sol producte.",
   "enunciat": "$1200$ €, i puja un $8\\,\\%$.",
   "opcions": [
    "$1104{,}00$ €",
    "$1208{,}00$ €",
    "$96{,}00$ €",
    "$1296{,}00$ €"
   ],
   "pistes": [
    "Fes servir el factor multiplicador: $1{,}08$.",
    "Multiplica $1200$ per aquest factor, tot d'un cop."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBsYSB2YXJpYWNpw7MgYWwgcmV2w6lzOiBzaSBwdWphLCBlbCByZXN1bHRhdCBoYSBkZSBzZXIgbcOpcyBncmFuIHF1ZSAkMTIwMCQuIiwgIkhhcyBzdW1hdCBvIHJlc3RhdCBlbCAkOCQgZGlyZWN0YW1lbnQuIEVsICQ4JCDDqXMgdW4gdGFudCBwZXIgY2VudCwgbm8gZXVyb3M6IGNhbCBjYWxjdWxhci1uZSBlbCAkOFxcLFxcJSQgZGUgJDEyMDAkLiIsICJBaXjDsiDDqXMgbm9tw6lzIGVsIHF1ZSBwdWphICgkOFxcLFxcJSQgZGUgJDEyMDAkKS4gRWwgcmVzdWx0YXQgw6lzIGxhIHF1YW50aXRhdCBmaW5hbCwgbm8gbGEgdmFyaWFjacOzLiIsICIiXSwgImVyciI6IFsiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlBST0RVQ1RFX1BFUl9TVU1BIiwgIkZBQ1RPUl9QRVJfUEVSQ0VOVEFUR0UiLCAiIl0sICJyZXMiOiBbIiQxMjAwXFxjZG90MXssfTA4PTEyOTZ7LH0wMCQg4oKsIl19"
  },
  {
   "id": "276d",
   "ex": 276,
   "ap": "d",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aplica la variació amb un sol producte.",
   "enunciat": "$45$ €, i baixa un $40\\,\\%$.",
   "opcions": [
    "$63{,}00$ €",
    "$18{,}00$ €",
    "$5{,}00$ €",
    "$27{,}00$ €"
   ],
   "pistes": [
    "Fes servir el factor multiplicador: $0{,}60$.",
    "Multiplica $45$ per aquest factor, tot d'un cop."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBsYSB2YXJpYWNpw7MgYWwgcmV2w6lzOiBzaSBiYWl4YSwgZWwgcmVzdWx0YXQgaGEgZGUgc2VyIG3DqXMgcGV0aXQgcXVlICQ0NSQuIiwgIkFpeMOyIMOpcyBub23DqXMgZWwgcXVlIGJhaXhhICgkNDBcXCxcXCUkIGRlICQ0NSQpLiBFbCByZXN1bHRhdCDDqXMgbGEgcXVhbnRpdGF0IGZpbmFsLCBubyBsYSB2YXJpYWNpw7MuIiwgIkhhcyBzdW1hdCBvIHJlc3RhdCBlbCAkNDAkIGRpcmVjdGFtZW50LiBFbCAkNDAkIMOpcyB1biB0YW50IHBlciBjZW50LCBubyBldXJvczogY2FsIGNhbGN1bGFyLW5lIGVsICQ0MFxcLFxcJSQgZGUgJDQ1JC4iLCAiIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJGQUNUT1JfUEVSX1BFUkNFTlRBVEdFIiwgIlBST0RVQ1RFX1BFUl9TVU1BIiwgIiJdLCAicmVzIjogWyIkNDVcXGNkb3Qweyx9NjA9Mjd7LH0wMCQg4oKsIl19"
  },
  {
   "id": "277a",
   "ex": 277,
   "ap": "a",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "A l'inrevés: es coneix el preu DESPRÉS de la variació i es busca el de partida.",
   "enunciat": "Un article costa $66$ € després de pujar un $10\\,\\%$. Quant costava abans?",
   "opcions": [
    "$60{,}00$ €",
    "$66$ €",
    "$72{,}60$ €",
    "$59{,}40$ €"
   ],
   "pistes": [
    "El preu de partida, multiplicat pel factor $1{,}10$, dona $66$.",
    "Per trobar el de partida, divideix: $\\dfrac{66}{1{,}10}$."
   ],
   "nota": "Aquest és l'error més habitual amb els percentatges: si un preu ha pujat un $10\\,\\%$, per tornar enrere NO es baixa un $10\\,\\%$. Comprova-ho: $60\\to66\\to59{,}4$, i no torna a $60$.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IMOpcyBlbCBwcmV1IHF1ZSBqYSBldCBkb25hdmVuLCBlbCBkJ2FyYS4iLCAiSGFzIHRvcm5hdCBhIG11bHRpcGxpY2FyIHBlbCBmYWN0b3IsIGkgYWl4w7IgZXQgcG9ydGEgZW5jYXJhIG3DqXMgbGx1bnkuIFBlciBkZXNmZXIgdW5hIG11bHRpcGxpY2FjacOzIGNhbCBkaXZpZGlyLiIsICJIYXMgYXBsaWNhdCBsYSB2YXJpYWNpw7MgY29udHLDoHJpYSBhbCBwcmV1IGZpbmFsLiBBbmFyIGVucmVyZSBubyDDqXMgcmVzdGFyIGVsIG1hdGVpeCBwZXJjZW50YXRnZTogw6lzIERJVklESVIgcGVsIGZhY3RvciwgJFxcZGZyYWN7NjZ9ezF7LH0xMH0kLiJdLCAiZXJyIjogWyIiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiSU5WRVJUSURBIiwgIkZBQ1RPUl9JTlZFUlNfT0JMSURBVCJdLCAicmVzIjogWyJTaSAkeCQgw6lzIGVsIHByZXUgZGUgcGFydGlkYTogJHhcXGNkb3Qxeyx9MTA9NjYkIiwgIiR4PVxcZGZyYWN7NjZ9ezF7LH0xMH09NjB7LH0wMCQg4oKsIl19"
  },
  {
   "id": "277b",
   "ex": 277,
   "ap": "b",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "A l'inrevés: es coneix el preu DESPRÉS de la variació i es busca el de partida.",
   "enunciat": "Un article costa $51$ € després d'una rebaixa del $15\\,\\%$. Quant costava abans?",
   "opcions": [
    "$58{,}65$ €",
    "$43{,}35$ €",
    "$51$ €",
    "$60{,}00$ €"
   ],
   "pistes": [
    "El preu de partida, multiplicat pel factor $0{,}85$, dona $51$.",
    "Per trobar el de partida, divideix: $\\dfrac{51}{0{,}85}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBsYSB2YXJpYWNpw7MgY29udHLDoHJpYSBhbCBwcmV1IGZpbmFsLiBBbmFyIGVucmVyZSBubyDDqXMgc3VtYXIgZWwgbWF0ZWl4IHBlcmNlbnRhdGdlOiDDqXMgRElWSURJUiBwZWwgZmFjdG9yLCAkXFxkZnJhY3s1MX17MHssfTg1fSQuIiwgIkhhcyB0b3JuYXQgYSBtdWx0aXBsaWNhciBwZWwgZmFjdG9yLCBpIGFpeMOyIGV0IHBvcnRhIGVuY2FyYSBtw6lzIGxsdW55LiBQZXIgZGVzZmVyIHVuYSBtdWx0aXBsaWNhY2nDsyBjYWwgZGl2aWRpci4iLCAiQXF1ZXN0IMOpcyBlbCBwcmV1IHF1ZSBqYSBldCBkb25hdmVuLCBlbCBkJ2FyYS4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9JTlZFUlNfT0JMSURBVCIsICJJTlZFUlRJREEiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiIl0sICJyZXMiOiBbIlNpICR4JCDDqXMgZWwgcHJldSBkZSBwYXJ0aWRhOiAkeFxcY2RvdDB7LH04NT01MSQiLCAiJHg9XFxkZnJhY3s1MX17MHssfTg1fT02MHssfTAwJCDigqwiXX0="
  },
  {
   "id": "277c",
   "ex": 277,
   "ap": "c",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "A l'inrevés: es coneix el preu DESPRÉS de la variació i es busca el de partida.",
   "enunciat": "Un article costa $189$ € després d'un descompte del $10\\,\\%$. Quant costava abans?",
   "opcions": [
    "$170{,}10$ €",
    "$210{,}00$ €",
    "$207{,}90$ €",
    "$189$ €"
   ],
   "pistes": [
    "El preu de partida, multiplicat pel factor $0{,}90$, dona $189$.",
    "Per trobar el de partida, divideix: $\\dfrac{189}{0{,}90}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgdG9ybmF0IGEgbXVsdGlwbGljYXIgcGVsIGZhY3RvciwgaSBhaXjDsiBldCBwb3J0YSBlbmNhcmEgbcOpcyBsbHVueS4gUGVyIGRlc2ZlciB1bmEgbXVsdGlwbGljYWNpw7MgY2FsIGRpdmlkaXIuIiwgIiIsICJIYXMgYXBsaWNhdCBsYSB2YXJpYWNpw7MgY29udHLDoHJpYSBhbCBwcmV1IGZpbmFsLiBBbmFyIGVucmVyZSBubyDDqXMgc3VtYXIgZWwgbWF0ZWl4IHBlcmNlbnRhdGdlOiDDqXMgRElWSURJUiBwZWwgZmFjdG9yLCAkXFxkZnJhY3sxODl9ezB7LH05MH0kLiIsICJBcXVlc3Qgw6lzIGVsIHByZXUgcXVlIGphIGV0IGRvbmF2ZW4sIGVsIGQnYXJhLiJdLCAiZXJyIjogWyJJTlZFUlRJREEiLCAiIiwgIkZBQ1RPUl9JTlZFUlNfT0JMSURBVCIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSJdLCAicmVzIjogWyJTaSAkeCQgw6lzIGVsIHByZXUgZGUgcGFydGlkYTogJHhcXGNkb3Qweyx9OTA9MTg5JCIsICIkeD1cXGRmcmFjezE4OX17MHssfTkwfT0yMTB7LH0wMCQg4oKsIl19"
  },
  {
   "id": "278a",
   "ex": 278,
   "ap": "a",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Quin percentatge representa la primera quantitat de la segona?",
   "enunciat": "$18$ de $60$.",
   "opcions": [
    "$42\\,\\%$",
    "$0{,}3\\,\\%$",
    "$30\\,\\%$",
    "$333{,}33\\,\\%$"
   ],
   "pistes": [
    "Divideix la part entre el total.",
    "Multiplica el resultat per $100$ per expressar-lo en tant per cent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcmVzdGF0IGxlcyBkdWVzIHF1YW50aXRhdHMuIFVuIHBlcmNlbnRhdGdlIHN1cnQgZCd1bmEgZGl2aXNpw7MsIG5vIGQndW5hIHJlc3RhLiIsICJBcXVlc3Qgw6lzIGVsIHF1b2NpZW50IGVuIGRlY2ltYWw6IHBlciBwYXNzYXItbG8gYSBwZXJjZW50YXRnZSBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyICQxMDAkLiIsICIiLCAiSGFzIGRpdmlkaXQgYWwgcmV2w6lzLiBFbCBwZXJjZW50YXRnZSDDqXMgJFxcZGZyYWN7XFx0ZXh0e3BhcnR9fXtcXHRleHR7dG90YWx9fVxcY2RvdDEwMCQsIGkgbGEgcGFydCB2YSBhIGRhbHQuIl0sICJlcnIiOiBbIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJQRVJDRU5UQVRHRV9ERUNJTUFMX01BTCIsICIiLCAiSU5WRVJUSURBIl0sICJyZXMiOiBbIiRcXGRmcmFjezE4fXs2MH09MHssfTMwMDAkIiwgIiQweyx9MzAwMFxcY2RvdDEwMD0zMFxcLFxcJSQiXX0="
  },
  {
   "id": "278b",
   "ex": 278,
   "ap": "b",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Quin percentatge representa la primera quantitat de la segona?",
   "enunciat": "$7$ de $28$.",
   "opcions": [
    "$0{,}25\\,\\%$",
    "$21\\,\\%$",
    "$400\\,\\%$",
    "$25\\,\\%$"
   ],
   "pistes": [
    "Divideix la part entre el total.",
    "Multiplica el resultat per $100$ per expressar-lo en tant per cent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHF1b2NpZW50IGVuIGRlY2ltYWw6IHBlciBwYXNzYXItbG8gYSBwZXJjZW50YXRnZSBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyICQxMDAkLiIsICJIYXMgcmVzdGF0IGxlcyBkdWVzIHF1YW50aXRhdHMuIFVuIHBlcmNlbnRhdGdlIHN1cnQgZCd1bmEgZGl2aXNpw7MsIG5vIGQndW5hIHJlc3RhLiIsICJIYXMgZGl2aWRpdCBhbCByZXbDqXMuIEVsIHBlcmNlbnRhdGdlIMOpcyAkXFxkZnJhY3tcXHRleHR7cGFydH19e1xcdGV4dHt0b3RhbH19XFxjZG90MTAwJCwgaSBsYSBwYXJ0IHZhIGEgZGFsdC4iLCAiIl0sICJlcnIiOiBbIlBFUkNFTlRBVEdFX0RFQ0lNQUxfTUFMIiwgIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJJTlZFUlRJREEiLCAiIl0sICJyZXMiOiBbIiRcXGRmcmFjezd9ezI4fT0weyx9MjUwMCQiLCAiJDB7LH0yNTAwXFxjZG90MTAwPTI1XFwsXFwlJCJdfQ=="
  },
  {
   "id": "278c",
   "ex": 278,
   "ap": "c",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Quin percentatge representa la primera quantitat de la segona?",
   "enunciat": "$45$ de $300$.",
   "opcions": [
    "$15\\,\\%$",
    "$255\\,\\%$",
    "$666{,}67\\,\\%$",
    "$0{,}15\\,\\%$"
   ],
   "pistes": [
    "Divideix la part entre el total.",
    "Multiplica el resultat per $100$ per expressar-lo en tant per cent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHJlc3RhdCBsZXMgZHVlcyBxdWFudGl0YXRzLiBVbiBwZXJjZW50YXRnZSBzdXJ0IGQndW5hIGRpdmlzacOzLCBubyBkJ3VuYSByZXN0YS4iLCAiSGFzIGRpdmlkaXQgYWwgcmV2w6lzLiBFbCBwZXJjZW50YXRnZSDDqXMgJFxcZGZyYWN7XFx0ZXh0e3BhcnR9fXtcXHRleHR7dG90YWx9fVxcY2RvdDEwMCQsIGkgbGEgcGFydCB2YSBhIGRhbHQuIiwgIkFxdWVzdCDDqXMgZWwgcXVvY2llbnQgZW4gZGVjaW1hbDogcGVyIHBhc3Nhci1sbyBhIHBlcmNlbnRhdGdlIGVuY2FyYSBmYWx0YSBtdWx0aXBsaWNhciBwZXIgJDEwMCQuIl0sICJlcnIiOiBbIiIsICJSRVNUQV9QRVJfUVVPQ0lFTlQiLCAiSU5WRVJUSURBIiwgIlBFUkNFTlRBVEdFX0RFQ0lNQUxfTUFMIl0sICJyZXMiOiBbIiRcXGRmcmFjezQ1fXszMDB9PTB7LH0xNTAwJCIsICIkMHssfTE1MDBcXGNkb3QxMDA9MTVcXCxcXCUkIl19"
  },
  {
   "id": "278d",
   "ex": 278,
   "ap": "d",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Quin percentatge representa la primera quantitat de la segona?",
   "enunciat": "$12$ de $15$.",
   "opcions": [
    "$125\\,\\%$",
    "$0{,}8\\,\\%$",
    "$80\\,\\%$",
    "$3\\,\\%$"
   ],
   "pistes": [
    "Divideix la part entre el total.",
    "Multiplica el resultat per $100$ per expressar-lo en tant per cent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBhbCByZXbDqXMuIEVsIHBlcmNlbnRhdGdlIMOpcyAkXFxkZnJhY3tcXHRleHR7cGFydH19e1xcdGV4dHt0b3RhbH19XFxjZG90MTAwJCwgaSBsYSBwYXJ0IHZhIGEgZGFsdC4iLCAiQXF1ZXN0IMOpcyBlbCBxdW9jaWVudCBlbiBkZWNpbWFsOiBwZXIgcGFzc2FyLWxvIGEgcGVyY2VudGF0Z2UgZW5jYXJhIGZhbHRhIG11bHRpcGxpY2FyIHBlciAkMTAwJC4iLCAiIiwgIkhhcyByZXN0YXQgbGVzIGR1ZXMgcXVhbnRpdGF0cy4gVW4gcGVyY2VudGF0Z2Ugc3VydCBkJ3VuYSBkaXZpc2nDsywgbm8gZCd1bmEgcmVzdGEuIl0sICJlcnIiOiBbIklOVkVSVElEQSIsICJQRVJDRU5UQVRHRV9ERUNJTUFMX01BTCIsICIiLCAiUkVTVEFfUEVSX1FVT0NJRU5UIl0sICJyZXMiOiBbIiRcXGRmcmFjezEyfXsxNX09MHssfTgwMDAkIiwgIiQweyx9ODAwMFxcY2RvdDEwMD04MFxcLFxcJSQiXX0="
  },
  {
   "id": "279a",
   "ex": 279,
   "ap": "a",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la variació percentual entre els dos valors, i digues si és un augment o una disminució.",
   "enunciat": "De $40$ a $50$.",
   "opcions": [
    "Disminució del $25\\,\\%$",
    "Augment del $20\\,\\%$",
    "Augment del $10\\,\\%$",
    "Augment del $25\\,\\%$"
   ],
   "pistes": [
    "Calcula primer la diferència: $50-40=10$.",
    "Divideix-la entre el valor de PARTIDA i multiplica per $100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBwZXJjZW50YXRnZSDDqXMgY29ycmVjdGUsIHBlcsOyIGVsIHNlbnRpdCBubzogZGUgJDQwJCBhICQ1MCQgbGEgcXVhbnRpdGF0IHB1amEuIiwgIkhhcyBkaXZpZGl0IGVudHJlIGVsIHZhbG9yIEZJTkFMLiBMYSB2YXJpYWNpw7MgcGVyY2VudHVhbCBzZW1wcmUgZXMgbWVzdXJhIHJlc3BlY3RlIGRlbCB2YWxvciBkZSBQQVJUSURBLCBxdWUgYXF1w60gw6lzICQ0MCQuIiwgIkVsICQxMCQgw6lzIGxhIGRpZmVyw6huY2lhIGVuIHVuaXRhdHMsIG5vIGVuIHRhbnQgcGVyIGNlbnQuIFBlciBwYXNzYXItbGEgYSBwZXJjZW50YXRnZSBjYWwgZGl2aWRpci1sYSBlbnRyZSBlbCB2YWxvciBkZSBwYXJ0aWRhIGkgbXVsdGlwbGljYXIgcGVyICQxMDAkLiIsICIiXSwgImVyciI6IFsiVkVSRURJQ1RFX0lOVkVSVElUIiwgIkJBU0VfTUFMX1RSSUFEQSIsICJQRVJDRU5UQVRHRV9NQUxfQ0FMQ1VMQVQiLCAiIl0sICJyZXMiOiBbIkRpZmVyw6huY2lhOiAkNTAtNDA9MTAkIiwgIiRcXGRmcmFjezEwfXs0MH1cXGNkb3QxMDA9MjVcXCxcXCUkIiwgIkF1Z21lbnQgZGVsICQyNVxcLFxcJSQiXX0="
  },
  {
   "id": "279b",
   "ex": 279,
   "ap": "b",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la variació percentual entre els dos valors, i digues si és un augment o una disminució.",
   "enunciat": "De $80$ a $60$.",
   "opcions": [
    "Augment del $25\\,\\%$",
    "Disminució del $25\\,\\%$",
    "Disminució del $33{,}33\\,\\%$",
    "Disminució del $20\\,\\%$"
   ],
   "pistes": [
    "Calcula primer la diferència: $60-80=-20$.",
    "Divideix-la entre el valor de PARTIDA i multiplica per $100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZXJjZW50YXRnZSDDqXMgY29ycmVjdGUsIHBlcsOyIGVsIHNlbnRpdCBubzogZGUgJDgwJCBhICQ2MCQgbGEgcXVhbnRpdGF0IGJhaXhhLiIsICIiLCAiSGFzIGRpdmlkaXQgZW50cmUgZWwgdmFsb3IgRklOQUwuIExhIHZhcmlhY2nDsyBwZXJjZW50dWFsIHNlbXByZSBlcyBtZXN1cmEgcmVzcGVjdGUgZGVsIHZhbG9yIGRlIFBBUlRJREEsIHF1ZSBhcXXDrSDDqXMgJDgwJC4iLCAiRWwgJDIwJCDDqXMgbGEgZGlmZXLDqG5jaWEgZW4gdW5pdGF0cywgbm8gZW4gdGFudCBwZXIgY2VudC4gUGVyIHBhc3Nhci1sYSBhIHBlcmNlbnRhdGdlIGNhbCBkaXZpZGlyLWxhIGVudHJlIGVsIHZhbG9yIGRlIHBhcnRpZGEgaSBtdWx0aXBsaWNhciBwZXIgJDEwMCQuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiQkFTRV9NQUxfVFJJQURBIiwgIlBFUkNFTlRBVEdFX01BTF9DQUxDVUxBVCJdLCAicmVzIjogWyJEaWZlcsOobmNpYTogJDYwLTgwPS0yMCQiLCAiJFxcZGZyYWN7LTIwfXs4MH1cXGNkb3QxMDA9LTI1XFwsXFwlJCIsICJEaXNtaW51Y2nDsyBkZWwgJDI1XFwsXFwlJCJdfQ=="
  },
  {
   "id": "279c",
   "ex": 279,
   "ap": "c",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la variació percentual entre els dos valors, i digues si és un augment o una disminució.",
   "enunciat": "De $120$ a $150$.",
   "opcions": [
    "Augment del $30\\,\\%$",
    "Augment del $25\\,\\%$",
    "Disminució del $25\\,\\%$",
    "Augment del $20\\,\\%$"
   ],
   "pistes": [
    "Calcula primer la diferència: $150-120=30$.",
    "Divideix-la entre el valor de PARTIDA i multiplica per $100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAkMzAkIMOpcyBsYSBkaWZlcsOobmNpYSBlbiB1bml0YXRzLCBubyBlbiB0YW50IHBlciBjZW50LiBQZXIgcGFzc2FyLWxhIGEgcGVyY2VudGF0Z2UgY2FsIGRpdmlkaXItbGEgZW50cmUgZWwgdmFsb3IgZGUgcGFydGlkYSBpIG11bHRpcGxpY2FyIHBlciAkMTAwJC4iLCAiIiwgIkVsIHBlcmNlbnRhdGdlIMOpcyBjb3JyZWN0ZSwgcGVyw7IgZWwgc2VudGl0IG5vOiBkZSAkMTIwJCBhICQxNTAkIGxhIHF1YW50aXRhdCBwdWphLiIsICJIYXMgZGl2aWRpdCBlbnRyZSBlbCB2YWxvciBGSU5BTC4gTGEgdmFyaWFjacOzIHBlcmNlbnR1YWwgc2VtcHJlIGVzIG1lc3VyYSByZXNwZWN0ZSBkZWwgdmFsb3IgZGUgUEFSVElEQSwgcXVlIGFxdcOtIMOpcyAkMTIwJC4iXSwgImVyciI6IFsiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIiIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiQkFTRV9NQUxfVFJJQURBIl0sICJyZXMiOiBbIkRpZmVyw6huY2lhOiAkMTUwLTEyMD0zMCQiLCAiJFxcZGZyYWN7MzB9ezEyMH1cXGNkb3QxMDA9MjVcXCxcXCUkIiwgIkF1Z21lbnQgZGVsICQyNVxcLFxcJSQiXX0="
  },
  {
   "id": "280a",
   "ex": 280,
   "ap": "a",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Una botiga fa un $20\\,\\%$ de descompte i, damunt del preu ja rebaixat, un $10\\,\\%$ més per pagar en efectiu.",
   "enunciat": "Un article de $200$ €, quant costa al final?",
   "opcions": [
    "$180$ €",
    "$144$ €",
    "$140$ €",
    "$160$ €"
   ],
   "pistes": [
    "Aplica el primer descompte: $200\\cdot0{,}8$.",
    "Sobre el resultat, aplica el segon: $\\cdot\\,0{,}9$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTZW1ibGEgcXVlIG5vbcOpcyBoYXMgYXBsaWNhdCBlbCAkMTBcXCxcXCUkLiBFbHMgZGVzY29tcHRlcyBzw7NuIGRvcywgdW4gZGFycmVyZSBsJ2FsdHJlLiIsICIiLCAiSGFzIHN1bWF0IGVscyBkb3MgZGVzY29tcHRlcyBjb20gc2kgZm9zc2luIHVuICQzMFxcLFxcJSQuIEVsIHNlZ29uIGRlc2NvbXB0ZSBzJ2FwbGljYSBzb2JyZSAkMTYwJCDigqwsIG5vIHNvYnJlICQyMDAkIOKCrDogJDE2MFxcY2RvdDB7LH05PTE0NCQuIiwgIkFxdWVzdCDDqXMgZWwgcHJldSBkZXNwcsOpcyBkZWwgcHJpbWVyIGRlc2NvbXB0ZS4gRW5jYXJhIGZhbHRhIGFwbGljYXItaGkgZWwgc2Vnb24uIl0sICJlcnIiOiBbIkZBQ1RPUl9QRVJfUEVSQ0VOVEFUR0UiLCAiIiwgIlBFUkNFTlRBVEdFU19TVU1BVFMiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiXSwgInJlcyI6IFsiJDIwMFxcY2RvdDB7LH04PTE2MCQg4oKsIiwgIiQxNjBcXGNkb3Qweyx9OT0xNDQkIOKCrCJdfQ=="
  },
  {
   "id": "280b",
   "ex": 280,
   "ap": "b",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Una botiga fa un $20\\,\\%$ de descompte i, damunt del preu ja rebaixat, un $10\\,\\%$ més per pagar en efectiu.",
   "enunciat": "A quin descompte únic equival?",
   "opcions": [
    "Al $72\\,\\%$",
    "Al $28\\,\\%$",
    "Al $30\\,\\%$",
    "Al $2\\,\\%$"
   ],
   "pistes": [
    "Multiplica els dos factors: $0{,}8\\cdot0{,}9$.",
    "El descompte és el que falta perquè el factor arribi a $1$."
   ],
   "nota": "Que dos descomptes del $20\\,\\%$ i el $10\\,\\%$ no facin un $30\\,\\%$ és el motiu de ser del factor multiplicador. Amb factors es veu de seguida; sumant percentatges, mai.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAkNzJcXCxcXCUkIMOpcyBlbCBxdWUgRVMgUEFHQSwgbm8gZWwgcXVlIGVzIGRlc2NvbXB0YS4gRWwgZGVzY29tcHRlIMOpcyBlbCBxdWUgZmFsdGEgZmlucyBhICQxMDAkLiIsICIiLCAiRWxzIHBlcmNlbnRhdGdlcyBlbmNhZGVuYXRzIG5vIHNlIHN1bWVuLiBFbCBmYWN0b3IgY29uanVudCDDqXMgJDB7LH04XFxjZG90MHssfTk9MHssfTcyJCwgaSAkMS0weyx9NzI9MHssfTI4JCwgbyBzaWd1aSB1biAkMjhcXCxcXCUkLiIsICJObyDDqXMgbGEgZGlmZXLDqG5jaWEgZW50cmUgZWxzIGRvcyBkZXNjb21wdGVzOiDDqXMgZWwgcmVzdWx0YXQgZCdhcGxpY2FyLWxvcyB0b3RzIGRvcy4iXSwgImVyciI6IFsiRkFDVE9SX1BFUl9QRVJDRU5UQVRHRSIsICIiLCAiUEVSQ0VOVEFUR0VTX1NVTUFUUyIsICJQUk9EVUNURV9QRVJfU1VNQSJdLCAicmVzIjogWyJGYWN0b3IgY29uanVudDogJDB7LH04XFxjZG90MHssfTk9MHssfTcyJCIsICIkMS0weyx9NzI9MHssfTI4XFx0bzI4XFwsXFwlJCIsICJDb21wcm92YWNpw7M6ICQyMDBcXGNkb3Qweyx9NzI9MTQ0JCDigqwsIGVsIG1hdGVpeCBkJ2FiYW5zIl19"
  },
  {
   "id": "281a",
   "ex": 281,
   "ap": "a",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un ordinador val $650$ € sense IVA. L'IVA és del $21\\,\\%$ i la botiga fa un $12\\,\\%$ de descompte sobre el preu sense IVA.",
   "enunciat": "Quin és el preu final que paga el client?",
   "opcions": [
    "$786{,}50$ €",
    "$572{,}00$ €",
    "$708{,}50$ €",
    "$692{,}12$ €"
   ],
   "pistes": [
    "Aplica primer el descompte sobre el preu sense IVA: $650\\cdot0{,}88$.",
    "Sobre el resultat, afegeix-hi l'IVA: $\\cdot\\,1{,}21$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBsJ0lWQSBwZXLDsiB0J2hhcyBkZWl4YXQgZWwgZGVzY29tcHRlLiIsICJBcXVlc3Qgw6lzIGVsIHByZXUgYW1iIGVsIGRlc2NvbXB0ZSBwZXLDsiBzZW5zZSBJVkEuIEVuY2FyYSBmYWx0YSBhZmVnaXItbCdoaS4iLCAiU2VtYmxhIHF1ZSBoYXMgZmV0ICQyMS0xMj05JCBpIGhhcyBhcGxpY2F0IHVuICQ5XFwsXFwlJC4gRWxzIHBlcmNlbnRhdGdlcyBubyBzZSBzdW1lbiBuaSBlcyByZXN0ZW4gZW50cmUgc2k6IGNhZGEgdW4gbXVsdGlwbGljYSBwZWwgc2V1IGZhY3Rvci4iLCAiIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiUEVSQ0VOVEFUR0VTX1NVTUFUUyIsICIiXSwgInJlcyI6IFsiQW1iIGRlc2NvbXB0ZTogJDY1MFxcY2RvdDB7LH04OD01NzJ7LH0wMCQg4oKsIiwgIkFtYiBJVkE6ICQ1NzJ7LH0wMFxcY2RvdDF7LH0yMT02OTJ7LH0xMiQg4oKsIl19"
  },
  {
   "id": "281b",
   "ex": 281,
   "ap": "b",
   "bloc": "aplicacions_percentatge",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Un ordinador val $650$ € sense IVA. L'IVA és del $21\\,\\%$ i la botiga fa un $12\\,\\%$ de descompte sobre el preu sense IVA.",
   "enunciat": "Si la botiga apliqués primer l'IVA i després el descompte, el client pagaria el mateix?",
   "opcions": [
    "Depèn de si l'IVA es calcula abans o després d'arrodonir.",
    "No: sortiria més car, perquè el descompte s'aplicaria sobre una quantitat més gran.",
    "Sí: multiplicar per $0{,}88$ i per $1{,}21$ dona el mateix en qualsevol ordre.",
    "No: sortiria més barat."
   ],
   "pistes": [
    "Escriu les dues operacions com un producte de factors.",
    "La multiplicació, canvia si en canvies l'ordre?"
   ],
   "nota": "Compte: això val quan totes dues variacions es fan sobre la MATEIXA base encadenada. Si el descompte fos sobre el preu sense IVA i l'IVA es calculés sempre sobre el preu de tarifa, ja no serien factors encadenats i sí que canviaria.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2Fycm9kb25pbWVudCBwb3QgbW91cmUgYWxndW4gY8OobnRpbSwgcGVyw7IgbGEgcHJlZ3VudGEgw6lzIHNvYnJlIGVsIGPDoGxjdWw6IGFtYiBmYWN0b3JzLCBsJ29yZHJlIG5vIGhpIGZhIHJlcy4iLCAiRWwgZGVzY29tcHRlIHMnYXBsaWNhcmlhIHNvYnJlIHVuYSBxdWFudGl0YXQgbcOpcyBncmFuLCBzw60sIHBlcsOyIHRhbWLDqSBzZXJpYSB1biBkZXNjb21wdGUgbcOpcyBncmFuLiBFbCBwcm9kdWN0ZSBubyBkZXDDqG4gZGUgbCdvcmRyZTogJDY1MFxcY2RvdDB7LH04OFxcY2RvdDF7LH0yMT02NTBcXGNkb3Qxeyx9MjFcXGNkb3Qweyx9ODgkLiIsICIiLCAiTGEgbXVsdGlwbGljYWNpw7Mgw6lzIGNvbW11dGF0aXZhOiBjYW52aWFyIGwnb3JkcmUgZGVscyBmYWN0b3JzIG5vIGNhbnZpYSBlbCByZXN1bHRhdC4iXSwgImVyciI6IFsiRVNfUE9UX0RFVEVSTUlOQVIiLCAiT1JEUkVfREVMU19GQUNUT1JTIiwgIiIsICJPUkRSRV9ERUxTX0ZBQ1RPUlMiXSwgInJlcyI6IFsiT3JkcmUgMTogJDY1MFxcY2RvdDB7LH04OFxcY2RvdDF7LH0yMSQiLCAiT3JkcmUgMjogJDY1MFxcY2RvdDF7LH0yMVxcY2RvdDB7LH04OCQiLCAiU8OzbiBlbCBtYXRlaXggcHJvZHVjdGU6ICQ2OTJ7LH0xMiQg4oKsIGVuIHRvdHMgZG9zIGNhc29zIl19"
  },
  {
   "id": "282a",
   "ex": 282,
   "ap": "a",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un compte que dona un $3\\,\\%$ d'interès simple anual s'hi ingressen $2\\,400$ €.",
   "enunciat": "Quants interessos genera en un any?",
   "opcions": [
    "$7{,}2$ €",
    "$2\\,472$ €",
    "$800$ €",
    "$72$ €"
   ],
   "pistes": [
    "El $3\\,\\%$ de $2\\,400$ és $2400\\cdot0{,}03$.",
    "Els interessos són la part que s'afegeix, no el total."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJUJ2hhcyBkZXNwbGHDp2F0IHVuIGxsb2M6ICQzXFwsXFwlJCBkZSAkMlxcLDQwMCQgw6lzICQyNDAwXFxjZG90MHssfTAzPTcyJCwgbm8gJDI0MDBcXGNkb3Qweyx9MDAzJC4iLCAiQXF1ZXN0IMOpcyBlbCBjYXBpdGFsIGZpbmFsLCBubyBlbHMgaW50ZXJlc3Nvcy4gRWxzIGludGVyZXNzb3Mgc8OzbiBub23DqXMgZWwgcXVlIHMnaGkgaGEgYWZlZ2l0LiIsICJTZW1ibGEgcXVlIGhhcyBkaXZpZGl0IGVudHJlICQzJC4gRWwgJDNcXCxcXCUkIMOpcyAkXFxkZnJhY3szfXsxMDB9JCwgbm8gJFxcZGZyYWN7MX17M30kLiIsICIiXSwgImVyciI6IFsiUEVSQ0VOVEFUR0VfREVDSU1BTF9NQUwiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiUEVSQ0VOVEFUR0VfTUFMX0NBTENVTEFUIiwgIiJdLCAicmVzIjogWyIkST0yNDAwXFxjZG90MHssfTAzPTcyJCDigqwiXX0="
  },
  {
   "id": "282b",
   "ex": 282,
   "ap": "b",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "En un compte que dona un $3\\,\\%$ d'interès simple anual s'hi ingressen $2\\,400$ €.",
   "enunciat": "I en $5$ anys, amb interès simple?",
   "opcions": [
    "$1\\,080$ €",
    "$382{,}26$ €",
    "$2\\,760$ €",
    "$360$ €"
   ],
   "pistes": [
    "Amb interès simple, cada any genera el mateix que el primer.",
    "Multiplica els interessos d'un any pel nombre d'anys."
   ],
   "nota": "Interès SIMPLE vol dir que els interessos no es reinverteixen: cada any es calculen sempre sobre el capital inicial. Si es reinvertissin (interès compost), en $5$ anys no serien $360$ € sinó uns $382$ €.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTZW1ibGEgcXVlIGhhcyBmZXQgZWwgJDQ1XFwsXFwlJC4gQ2luYyBhbnlzIGFsICQzXFwsXFwlJCBzw7NuIHVuICQxNVxcLFxcJSQgZW4gdG90YWwsIG5vIHVuICQ0NVxcLFxcJSQuIiwgIkFpeMOyIMOpcyBpbnRlcsOocyBDT01QT1NULCBxdWUgw6lzIHF1YW4gZWxzIGludGVyZXNzb3MgZ2VuZXJlbiBtw6lzIGludGVyZXNzb3MuIEFtYiBpbnRlcsOocyBzaW1wbGUsIGNhZGEgYW55IGVzIGdlbmVyYSBlbCBtYXRlaXg6ICQ3MlxcY2RvdDUkLiIsICJBcXVlc3Qgw6lzIGVsIGNhcGl0YWwgZmluYWwgKCQyNDAwKzM2MCQpLCBubyBlbHMgaW50ZXJlc3Nvcy4iLCAiIl0sICJlcnIiOiBbIlBFUkNFTlRBVEdFX01BTF9DQUxDVUxBVCIsICJTSU1QTEVfUEVSX0NPTVBPU1QiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiIl0sICJyZXMiOiBbIiRJPTI0MDBcXGNkb3Qweyx9MDNcXGNkb3Q1PTM2MCQg4oKsIl19"
  },
  {
   "id": "283a",
   "ex": 283,
   "ap": "a",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Tres socis han posat $3\\,000$ €, $5\\,000$ € i $2\\,000$ € en un negoci que ha donat $12\\,000$ € de benefici, que es reparteix proporcionalment al que ha posat cadascú.",
   "enunciat": "Quant li toca al que va posar $5\\,000$ €?",
   "opcions": [
    "$4\\,000$ €",
    "$3600$ €",
    "$5\\,000$ €",
    "$6000$ €"
   ],
   "pistes": [
    "Calcula quina fracció del capital total va posar: $\\dfrac{5000}{10000}$.",
    "Aplica aquesta fracció als $12\\,000$ € de benefici."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBaXjDsiDDqXMgcmVwYXJ0aXIgYSBwYXJ0cyBpZ3VhbHMgKCQxMjAwMDozJCkuIEVsIHJlcGFydGltZW50IMOpcyBQUk9QT1JDSU9OQUw6IHF1aSBoYSBwb3NhdCBtw6lzLCBjb2JyYSBtw6lzLiIsICJBcXVlc3Qgw6lzIGVsIHF1ZSBsaSB0b2NhIGFsIHF1ZSB2YSBwb3NhciAkM1xcLDAwMCQg4oKsLiBDb21wdGUgYSBxdWluIHNvY2kgY29ycmVzcG9uIGNhZGEgcGFydC4iLCAiQXF1ZXN0cyBzw7NuIGVscyBkaW5lcnMgcXVlIHZhIHBvc2FyLCBubyBlbCBxdWUgbGkgdG9jYSBkZSBiZW5lZmljaS4iLCAiIl0sICJlcnIiOiBbIlJFUEFSVElNRU5UX0FfUEFSVFNfSUdVQUxTIiwgIlBBUlRfTUFMX0FTU0lHTkFEQSIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICIiXSwgInJlcyI6IFsiQ2FwaXRhbCB0b3RhbDogJDMwMDArNTAwMCsyMDAwPTEwXFwsMDAwJCDigqwiLCAiTGkgY29ycmVzcG9uICRcXGRmcmFjezUwMDB9ezEwMDAwfT1cXGRmcmFjezF9ezJ9JCBkZWwgYmVuZWZpY2kiLCAiJDEyMDAwXFxjZG90XFxkZnJhY3sxfXsyfT02MDAwJCDigqwiXX0="
  },
  {
   "id": "283b",
   "ex": 283,
   "ap": "b",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Tres socis han posat $3\\,000$ €, $5\\,000$ € i $2\\,000$ € en un negoci que ha donat $12\\,000$ € de benefici, que es reparteix proporcionalment al que ha posat cadascú.",
   "enunciat": "I quin percentatge del benefici li toca al que va posar $2\\,000$ €?",
   "opcions": [
    "El $33{,}3\\,\\%$",
    "El $2\\,\\%$",
    "El $50\\,\\%$",
    "El $20\\,\\%$"
   ],
   "pistes": [
    "Compara el que va posar amb el capital total.",
    "$\\dfrac{2000}{10000}$, passat a percentatge."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBaXjDsiBzZXJpYSBzaSBlcyByZXBhcnTDrXMgYSBwYXJ0cyBpZ3VhbHMgZW50cmUgZWxzIHRyZXMgc29jaXMuIEFxdcOtIGVzIHJlcGFydGVpeCBzZWdvbnMgZWwgcXVlIGhhIHBvc2F0IGNhZGFzY8O6LiIsICJFbCAkMiQgZGUgJDJcXCwwMDAkIG5vIMOpcyBlbCBwZXJjZW50YXRnZS4gQ2FsIGNvbXBhcmFyLWxvIGFtYiBlbCBjYXBpdGFsIHRvdGFsOiAkXFxkZnJhY3syMDAwfXsxMDAwMH0kLiIsICJBcXVlc3Qgw6lzIGVsIHBlcmNlbnRhdGdlIGRlbCBzb2NpIHF1ZSB2YSBwb3NhciAkNVxcLDAwMCQg4oKsLiIsICIiXSwgImVyciI6IFsiUkVQQVJUSU1FTlRfQV9QQVJUU19JR1VBTFMiLCAiUEVSQ0VOVEFUR0VfREVDSU1BTF9NQUwiLCAiUEFSVF9NQUxfQVNTSUdOQURBIiwgIiJdLCAicmVzIjogWyIkXFxkZnJhY3syMDAwfXsxMDAwMH09MHssfTJcXHRvMjBcXCxcXCUkIiwgIkNvbXByb3ZhY2nDszogJDEyMDAwXFxjZG90MHssfTI9MlxcLDQwMCQg4oKsLCBpICQ2MDAwKzI0MDArMzYwMD0xMlxcLDAwMCQg4oKsIl19"
  },
  {
   "id": "284",
   "ex": 284,
   "ap": "",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Quin és el preu final?",
   "opcions": [
    "$500$ €: torna al preu de partida.",
    "$480$ €: no torna als $500$ €",
    "$520$ €",
    "$400$ €"
   ],
   "pistes": [
    "Calcula el preu després de la pujada.",
    "Aplica la baixada sobre AQUEST preu nou, no sobre el de partida."
   ],
   "nota": "Aquest exercici i el 280 diuen el mateix des de dos costats: els percentatges no se sumen ni es compensen, perquè cadascun es calcula sobre una base diferent. Pujar i baixar el mateix tant per cent SEMPRE deixa el preu per sota del de partida.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAkMjBcXCxcXCUkIGRlIHB1amFkYSBlcyBjYWxjdWxhIHNvYnJlICQ1MDAkICgkKzEwMCQg4oKsKSwgcGVyw7IgZWwgJDIwXFwsXFwlJCBkZSBiYWl4YWRhIGVzIGNhbGN1bGEgc29icmUgJDYwMCQgKCQtMTIwJCDigqwpLiBDb20gcXVlIGxlcyBiYXNlcyBzw7NuIGRpZmVyZW50cywgbm8gZXMgY29tcGVuc2VuLiIsICIiLCAiRWwgcHJldSBmaW5hbCDDqXMgbcOpcyBCQUlYIHF1ZSBlbCBkZSBwYXJ0aWRhLCBubyBtw6lzIGFsdDogbGEgYmFpeGFkYSBzJ2FwbGljYSBzb2JyZSB1bmEgcXVhbnRpdGF0IG3DqXMgZ3JhbiBxdWUgbGEgcHVqYWRhLiIsICJTZW1ibGEgcXVlIGhhcyByZXN0YXQgdW4gJDIwXFwsXFwlJCBkZWwgcHJldSBvcmlnaW5hbC4gTGEgYmFpeGFkYSDDqXMgc29icmUgJDYwMCQg4oKsLCBubyBzb2JyZSAkNTAwJCDigqwuIl0sICJlcnIiOiBbIlBFUkNFTlRBVEdFU19TVU1BVFMiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJQRVJDRU5UQVRHRVNfU1VNQVRTIl0sICJyZXMiOiBbIiQ1MDBcXGNkb3Qxeyx9Mj02MDAkIOKCrCIsICIkNjAwXFxjZG90MHssfTg9NDgwJCDigqwiLCAiQW1iIGZhY3RvcnMgZXMgdmV1IGQndW4gY29wOiAkMXssfTJcXGNkb3Qweyx9OD0weyx9OTYkLCBvIHNpZ3VpIHVuICQ0XFwsXFwlJCBkZSBiYWl4YWRhIG5ldGEiXX0="
  }
 ]
};
