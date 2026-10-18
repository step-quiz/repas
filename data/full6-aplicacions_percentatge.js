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
  "ES_POT_DETERMINAR": "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha prou. Abans de descartar una pregunta, mira si algun teorema o criteri et permet respondre-la amb el que ja tens.",
  "FACTOR_PER_PERCENTATGE": "Has donat NOMÉS la part que puja o baixa, no la quantitat final. El factor multiplicador és $1+p$ per augmentar i $1-p$ per rebaixar: d'un sol cop et dona el resultat, no la variació.",
  "ORDRE_DELS_FACTORS": "Has donat per fet que l'ordre canvia el resultat. Quan les variacions s'encadenen com a factors, el producte és el mateix en qualsevol ordre.",
  "PART_MAL_ASSIGNADA": "El càlcul és bo però l'has atribuït a qui no toca: comprova a quina part correspon cada resultat.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PERCENTATGES_SUMATS": "Has sumat o restat els percentatges entre si. No se sumen mai: cadascun es calcula sobre una base diferent. El que sí que es pot fer és multiplicar els factors.",
  "PERCENTATGE_DECIMAL_MAL": "El pas de tant per cent a decimal no és correcte: es divideix per $100$, així que $0{,}8\\,\\%=0{,}008$ i $8\\,\\%=0{,}08$. Compta les xifres.",
  "PERCENTATGE_MAL_CALCULAT": "El percentatge d'un valor s'obté multiplicant la seva freqüència relativa per $100$ (o, equivalentment, $\\frac{f_i}{N}\\cdot100$).",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "REPARTIMENT_A_PARTS_IGUALS": "Has repartit a parts iguals. En un repartiment PROPORCIONAL, a cadascú li toca segons el que ha posat.",
  "SIMPLE_PER_COMPOST": "Has fet servir interès compost on l'enunciat diu simple. Amb interès simple els interessos es calculen sempre sobre el capital inicial i cada període dona el mateix.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "280a",
   "ex": 280,
   "ap": "a",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 4,
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
   "dif": 4,
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
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAkNzJcXCxcXCUkIMOpcyBlbCBxdWUgRVMgUEFHQSwgbm8gZWwgcXVlIGVzIGRlc2NvbXB0YS4gRWwgZGVzY29tcHRlIMOpcyBlbCBxdWUgZmFsdGEgZmlucyBhICQxMDAkLiIsICIiLCAiRWxzIHBlcmNlbnRhdGdlcyBlbmNhZGVuYXRzIG5vIHNlIHN1bWVuLiBFbCBmYWN0b3IgY29uanVudCDDqXMgJDB7LH04XFxjZG90MHssfTk9MHssfTcyJCwgaSAkMS0weyx9NzI9MHssfTI4JCwgbyBzaWd1aSB1biAkMjhcXCxcXCUkLiIsICJObyDDqXMgbGEgZGlmZXLDqG5jaWEgZW50cmUgZWxzIGRvcyBkZXNjb21wdGVzOiDDqXMgZWwgcmVzdWx0YXQgZCdhcGxpY2FyLWxvcyB0b3RzIGRvcy4iXSwgImVyciI6IFsiRkFDVE9SX1BFUl9QRVJDRU5UQVRHRSIsICIiLCAiUEVSQ0VOVEFUR0VTX1NVTUFUUyIsICJQUk9EVUNURV9QRVJfU1VNQSJdLCAicmVzIjogWyJGYWN0b3IgY29uanVudDogJDB7LH04XFxjZG90MHssfTk9MHssfTcyJCIsICIkMS0weyx9NzI9MHssfTI4XFx0bzI4XFwsXFwlJCIsICJDb21wcm92YWNpw7M6ICQyMDBcXGNkb3Qweyx9NzI9MTQ0JCDigqwsIGVsIG1hdGVpeCBkJ2FiYW5zIl0sICJjb20iOiAiUXVlIGRvcyBkZXNjb21wdGVzIGRlbCAkMjBcXCxcXCUkIGkgZWwgJDEwXFwsXFwlJCBubyBmYWNpbiB1biAkMzBcXCxcXCUkIMOpcyBlbCBtb3RpdSBkZSBzZXIgZGVsIGZhY3RvciBtdWx0aXBsaWNhZG9yLiBBbWIgZmFjdG9ycyBlcyB2ZXUgZGUgc2VndWlkYTsgc3VtYW50IHBlcmNlbnRhdGdlcywgbWFpLiJ9"
  },
  {
   "id": "281a",
   "ex": 281,
   "ap": "a",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 4,
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
   "dif": 4,
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
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2Fycm9kb25pbWVudCBwb3QgbW91cmUgYWxndW4gY8OobnRpbSwgcGVyw7IgbGEgcHJlZ3VudGEgw6lzIHNvYnJlIGVsIGPDoGxjdWw6IGFtYiBmYWN0b3JzLCBsJ29yZHJlIG5vIGhpIGZhIHJlcy4iLCAiRWwgZGVzY29tcHRlIHMnYXBsaWNhcmlhIHNvYnJlIHVuYSBxdWFudGl0YXQgbcOpcyBncmFuLCBzw60sIHBlcsOyIHRhbWLDqSBzZXJpYSB1biBkZXNjb21wdGUgbcOpcyBncmFuLiBFbCBwcm9kdWN0ZSBubyBkZXDDqG4gZGUgbCdvcmRyZTogJDY1MFxcY2RvdDB7LH04OFxcY2RvdDF7LH0yMT02NTBcXGNkb3Qxeyx9MjFcXGNkb3Qweyx9ODgkLiIsICIiLCAiTGEgbXVsdGlwbGljYWNpw7Mgw6lzIGNvbW11dGF0aXZhOiBjYW52aWFyIGwnb3JkcmUgZGVscyBmYWN0b3JzIG5vIGNhbnZpYSBlbCByZXN1bHRhdC4iXSwgImVyciI6IFsiRVNfUE9UX0RFVEVSTUlOQVIiLCAiT1JEUkVfREVMU19GQUNUT1JTIiwgIiIsICJPUkRSRV9ERUxTX0ZBQ1RPUlMiXSwgInJlcyI6IFsiT3JkcmUgMTogJDY1MFxcY2RvdDB7LH04OFxcY2RvdDF7LH0yMSQiLCAiT3JkcmUgMjogJDY1MFxcY2RvdDF7LH0yMVxcY2RvdDB7LH04OCQiLCAiU8OzbiBlbCBtYXRlaXggcHJvZHVjdGU6ICQ2OTJ7LH0xMiQg4oKsIGVuIHRvdHMgZG9zIGNhc29zIl19"
  },
  {
   "id": "282a",
   "ex": 282,
   "ap": "a",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 4,
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
   "dif": 4,
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
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTZW1ibGEgcXVlIGhhcyBmZXQgZWwgJDQ1XFwsXFwlJC4gQ2luYyBhbnlzIGFsICQzXFwsXFwlJCBzw7NuIHVuICQxNVxcLFxcJSQgZW4gdG90YWwsIG5vIHVuICQ0NVxcLFxcJSQuIiwgIkFpeMOyIMOpcyBpbnRlcsOocyBDT01QT1NULCBxdWUgw6lzIHF1YW4gZWxzIGludGVyZXNzb3MgZ2VuZXJlbiBtw6lzIGludGVyZXNzb3MuIEFtYiBpbnRlcsOocyBzaW1wbGUsIGNhZGEgYW55IGVzIGdlbmVyYSBlbCBtYXRlaXg6ICQ3MlxcY2RvdDUkLiIsICJBcXVlc3Qgw6lzIGVsIGNhcGl0YWwgZmluYWwgKCQyNDAwKzM2MCQpLCBubyBlbHMgaW50ZXJlc3Nvcy4iLCAiIl0sICJlcnIiOiBbIlBFUkNFTlRBVEdFX01BTF9DQUxDVUxBVCIsICJTSU1QTEVfUEVSX0NPTVBPU1QiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiIl0sICJyZXMiOiBbIiRJPTI0MDBcXGNkb3Qweyx9MDNcXGNkb3Q1PTM2MCQg4oKsIl19"
  },
  {
   "id": "283a",
   "ex": 283,
   "ap": "a",
   "bloc": "aplicacions_percentatge",
   "tipus": "A",
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
   "encapcalament": "Un preu de $500$ € puja un $20\\,\\%$ i, al cap d'un temps, el preu nou baixa un $20\\,\\%$.",
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
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAkMjBcXCxcXCUkIGRlIHB1amFkYSBlcyBjYWxjdWxhIHNvYnJlICQ1MDAkICgkKzEwMCQg4oKsKSwgcGVyw7IgZWwgJDIwXFwsXFwlJCBkZSBiYWl4YWRhIGVzIGNhbGN1bGEgc29icmUgJDYwMCQgKCQtMTIwJCDigqwpLiBDb20gcXVlIGxlcyBiYXNlcyBzw7NuIGRpZmVyZW50cywgbm8gZXMgY29tcGVuc2VuLiIsICIiLCAiRWwgcHJldSBmaW5hbCDDqXMgbcOpcyBCQUlYIHF1ZSBlbCBkZSBwYXJ0aWRhLCBubyBtw6lzIGFsdDogbGEgYmFpeGFkYSBzJ2FwbGljYSBzb2JyZSB1bmEgcXVhbnRpdGF0IG3DqXMgZ3JhbiBxdWUgbGEgcHVqYWRhLiIsICJTZW1ibGEgcXVlIGhhcyByZXN0YXQgdW4gJDIwXFwsXFwlJCBkZWwgcHJldSBvcmlnaW5hbC4gTGEgYmFpeGFkYSDDqXMgc29icmUgJDYwMCQg4oKsLCBubyBzb2JyZSAkNTAwJCDigqwuIl0sICJlcnIiOiBbIlBFUkNFTlRBVEdFU19TVU1BVFMiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJQRVJDRU5UQVRHRVNfU1VNQVRTIl0sICJyZXMiOiBbIiQ1MDBcXGNkb3Qxeyx9Mj02MDAkIOKCrCIsICIkNjAwXFxjZG90MHssfTg9NDgwJCDigqwiLCAiQW1iIGZhY3RvcnMgZXMgdmV1IGQndW4gY29wOiAkMXssfTJcXGNkb3Qweyx9OD0weyx9OTYkLCBvIHNpZ3VpIHVuICQ0XFwsXFwlJCBkZSBiYWl4YWRhIG5ldGEiXX0="
  }
 ]
};
