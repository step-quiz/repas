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
  "BASE_MAL_TRIADA": "Has calculat el percentatge sobre la base que no toca. Una variació percentual sempre es mesura respecte del valor de PARTIDA.",
  "FACTOR_INVERS_OBLIDAT": "Per desfer una variació percentual no es fa la contrària: es DIVIDEIX pel factor. Si un preu ha pujat un 10 %, baixar-lo un 10 % no el torna al punt de partida.",
  "FACTOR_PER_PERCENTATGE": "Has donat NOMÉS la part que puja o baixa, no la quantitat final. El factor multiplicador és $1+p$ per augmentar i $1-p$ per rebaixar: d'un sol cop et dona el resultat, no la variació.",
  "FORMULA_INVERTIDA": "Has dividit on la fórmula multiplica (o al revés). Escriu la fórmula sencera abans de substituir-hi els valors.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "PERCENTATGE_DECIMAL_MAL": "El pas de tant per cent a decimal no és correcte: es divideix per $100$, així que $0{,}8\\,\\%=0{,}008$ i $8\\,\\%=0{,}08$. Compta les xifres.",
  "PERCENTATGE_MAL_CALCULAT": "El percentatge d'un valor s'obté multiplicant la seva freqüència relativa per $100$ (o, equivalentment, $\\frac{f_i}{N}\\cdot100$).",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "RESTA_PER_QUOCIENT": "Has restat les dues quantitats. Un percentatge i una raó surten d'una DIVISIÓ: diuen quantes vegades, no quant més.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "356a",
   "ex": 356,
   "ap": "a",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la quantitat final aplicant-hi el factor multiplicador que es dona.",
   "enunciat": "$100$ € pugen un $25\\,\\%$: es multipliquen per $1{,}25$.",
   "opcions": [
    "$25$ €",
    "$125$ €",
    "$80$ €",
    "$101{,}25$ €"
   ],
   "pistes": [
    "El factor ja te'l donen: no cal calcular-lo.",
    "$100\\cdot1{,}25$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBaXjDsiDDqXMgZWwgcXVlIFBVSkEuIE11bHRpcGxpY2FudCBwZXIgJDF7LH0yNSQgamEgc3VydCBsYSBxdWFudGl0YXQgZmluYWwsIGFtYiBsYSBwdWphZGEgaW5jbG9zYS4iLCAiIiwgIkhhcyBkaXZpZGl0IHBlciAkMXssfTI1JC4gU2kgcHVqYSwgZWwgcmVzdWx0YXQgaGEgZGUgc2VyIG3DqXMgZ3JhbiBxdWUgJDEwMCQuIiwgIkhhcyBzdW1hdCBlbCBmYWN0b3IuIEVsIGZhY3RvciBlcyBNVUxUSVBMSUNBOiAkMTAwXFxjZG90MXssfTI1JC4iXSwgImVyciI6IFsiRkFDVE9SX1BFUl9QRVJDRU5UQVRHRSIsICIiLCAiRk9STVVMQV9JTlZFUlRJREEiLCAiUFJPRFVDVEVfUEVSX1NVTUEiXSwgInJlcyI6IFsiJDEwMFxcY2RvdDF7LH0yNT0xMjUkIOKCrCJdfQ=="
  },
  {
   "id": "356b",
   "ex": 356,
   "ap": "b",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la quantitat final aplicant-hi el factor multiplicador que es dona.",
   "enunciat": "$200$ € baixen un $10\\,\\%$: es multipliquen per $0{,}90$.",
   "opcions": [
    "$\\approx222{,}22$ €",
    "$199{,}10$ €",
    "$180$ €",
    "$20$ €"
   ],
   "pistes": [
    "El factor ja te'l donen: no cal calcular-lo.",
    "$200\\cdot0{,}90$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZXIgJDB7LH05MCQuIFNpIGJhaXhhLCBlbCByZXN1bHRhdCBoYSBkZSBzZXIgbcOpcyBwZXRpdCBxdWUgJDIwMCQuIiwgIkhhcyByZXN0YXQgZWwgZmFjdG9yLiBFbCBmYWN0b3IgZXMgTVVMVElQTElDQTogJDIwMFxcY2RvdDB7LH05MCQuIiwgIiIsICJBaXjDsiDDqXMgZWwgcXVlIEJBSVhBLiBNdWx0aXBsaWNhbnQgcGVyICQweyx9OTAkIGphIHN1cnQgbGEgcXVhbnRpdGF0IGZpbmFsLCBhbWIgbGEgcmViYWl4YSBmZXRhLiJdLCAiZXJyIjogWyJGT1JNVUxBX0lOVkVSVElEQSIsICJQUk9EVUNURV9QRVJfU1VNQSIsICIiLCAiRkFDVE9SX1BFUl9QRVJDRU5UQVRHRSJdLCAicmVzIjogWyIkMjAwXFxjZG90MHssfTkwPTE4MCQg4oKsIl19"
  },
  {
   "id": "275a",
   "ex": 275,
   "ap": "a",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
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
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIGZhY3RvciBkZSByZWJhaXhhci4gU2kgbGEgcXVhbnRpdGF0IHB1amEsIGVsIGZhY3RvciBoYSBkZSBzZXIgbcOpcyBncmFuIHF1ZSAkMSQuIiwgIiIsICJBcXVlc3QgZmFjdG9yIGV0IGRvbmEgTk9Nw4lTIGxhIHBhcnQgcXVlIHB1amEgbyBiYWl4YSwgbm8gbGEgcXVhbnRpdGF0IGZpbmFsLiBQZXIgdGVuaXIgZWwgdG90YWwgY2FsIHN1bWFyLWhpIGwnb3JpZ2luYWw6ICQxKzB7LH0yMD0xeyx9MjAkLiIsICJFbCAkMjAkIMOpcyBlbCB0YW50IHBlciBjZW50LCBubyBlbCBmYWN0b3IuIFBlciBwYXNzYXItbG8gYSBmYWN0b3IgY2FsIGRpdmlkaXItbG8gZW50cmUgJDEwMCQgaSBzdW1hci1sbyBhICQxJC4iXSwgImVyciI6IFsiVkVSRURJQ1RFX0lOVkVSVElUIiwgIiIsICJGQUNUT1JfUEVSX1BFUkNFTlRBVEdFIiwgIlBFUkNFTlRBVEdFX0RFQ0lNQUxfTUFMIl0sICJyZXMiOiBbIiQyMFxcLFxcJT0weyx9MjAkIiwgIkZhY3RvciAkPTErMHssfTIwPTF7LH0yMCQiXSwgImNvbSI6ICJBcXVlc3Qgw6lzIGVsIGJsb2Mgc2VuY2VyIHJlc3VtaXQ6IGVsIGZhY3RvciBtdWx0aXBsaWNhZG9yIMOpcyBlbCBub21icmUgcGVsIHF1YWwgbXVsdGlwbGlxdWVzIGQndW4gc29sIGNvcC4gUHVqYSB1biAkMjBcXCxcXCUkICRcXHRvJCAkXFx0aW1lczF7LH0yJDsgYmFpeGEgdW4gJDIwXFwsXFwlJCAkXFx0byQgJFxcdGltZXMweyx9OCQuIn0="
  },
  {
   "id": "275b",
   "ex": 275,
   "ap": "b",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 3,
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
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IMOpcyBlbCBwcmV1IHF1ZSBqYSBldCBkb25hdmVuLCBlbCBkJ2FyYS4iLCAiSGFzIHRvcm5hdCBhIG11bHRpcGxpY2FyIHBlbCBmYWN0b3IsIGkgYWl4w7IgZXQgcG9ydGEgZW5jYXJhIG3DqXMgbGx1bnkuIFBlciBkZXNmZXIgdW5hIG11bHRpcGxpY2FjacOzIGNhbCBkaXZpZGlyLiIsICJIYXMgYXBsaWNhdCBsYSB2YXJpYWNpw7MgY29udHLDoHJpYSBhbCBwcmV1IGZpbmFsLiBBbmFyIGVucmVyZSBubyDDqXMgcmVzdGFyIGVsIG1hdGVpeCBwZXJjZW50YXRnZTogw6lzIERJVklESVIgcGVsIGZhY3RvciwgJFxcZGZyYWN7NjZ9ezF7LH0xMH0kLiJdLCAiZXJyIjogWyIiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiSU5WRVJUSURBIiwgIkZBQ1RPUl9JTlZFUlNfT0JMSURBVCJdLCAicmVzIjogWyJTaSAkeCQgw6lzIGVsIHByZXUgZGUgcGFydGlkYTogJHhcXGNkb3Qxeyx9MTA9NjYkIiwgIiR4PVxcZGZyYWN7NjZ9ezF7LH0xMH09NjB7LH0wMCQg4oKsIl0sICJjb20iOiAiQXF1ZXN0IMOpcyBsJ2Vycm9yIG3DqXMgaGFiaXR1YWwgYW1iIGVscyBwZXJjZW50YXRnZXM6IHNpIHVuIHByZXUgaGEgcHVqYXQgdW4gJDEwXFwsXFwlJCwgcGVyIHRvcm5hciBlbnJlcmUgTk8gZXMgYmFpeGEgdW4gJDEwXFwsXFwlJC4gQ29tcHJvdmEtaG86ICQ2MFxcdG82NlxcdG81OXssfTQkLCBpIG5vIHRvcm5hIGEgJDYwJC4ifQ=="
  },
  {
   "id": "277b",
   "ex": 277,
   "ap": "b",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
   "encapcalament": "Quin percentatge representa la primera quantitat de la segona?",
   "enunciat": "$18$ de $60$.",
   "opcions": [
    "$42\\,\\%$",
    "$0{,}3\\,\\%$",
    "$30\\,\\%$",
    "$333{,}33\\,\\%$"
   ],
   "pistes": [
    "Divideix la part, $18$, entre el total, $60$.",
    "Multiplica el resultat per $100$. Comprova que té sentit: $18$ és menys de la meitat de $60$, així que ha de sortir menys del $50\\,\\%$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcmVzdGF0IGxlcyBkdWVzIHF1YW50aXRhdHMuIFVuIHBlcmNlbnRhdGdlIHN1cnQgZCd1bmEgZGl2aXNpw7MsIG5vIGQndW5hIHJlc3RhLiIsICJBcXVlc3Qgw6lzIGVsIHF1b2NpZW50IGVuIGRlY2ltYWw6IHBlciBwYXNzYXItbG8gYSBwZXJjZW50YXRnZSBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyICQxMDAkLiIsICIiLCAiSGFzIGRpdmlkaXQgYWwgcmV2w6lzLiBFbCBwZXJjZW50YXRnZSDDqXMgJFxcZGZyYWN7XFx0ZXh0e3BhcnR9fXtcXHRleHR7dG90YWx9fVxcY2RvdDEwMCQsIGkgbGEgcGFydCB2YSBhIGRhbHQuIl0sICJlcnIiOiBbIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJQRVJDRU5UQVRHRV9ERUNJTUFMX01BTCIsICIiLCAiSU5WRVJUSURBIl0sICJyZXMiOiBbIiRcXGRmcmFjezE4fXs2MH09MHssfTMkIiwgIiQweyx9M1xcY2RvdDEwMD0zMFxcLFxcJSQiXX0="
  },
  {
   "id": "278b",
   "ex": 278,
   "ap": "b",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Quin percentatge representa la primera quantitat de la segona?",
   "enunciat": "$7$ de $28$.",
   "opcions": [
    "$0{,}25\\,\\%$",
    "$21\\,\\%$",
    "$400\\,\\%$",
    "$25\\,\\%$"
   ],
   "pistes": [
    "Divideix la part, $7$, entre el total, $28$.",
    "Multiplica el resultat per $100$. Comprova que té sentit: $7$ és menys de la meitat de $28$, així que ha de sortir menys del $50\\,\\%$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHF1b2NpZW50IGVuIGRlY2ltYWw6IHBlciBwYXNzYXItbG8gYSBwZXJjZW50YXRnZSBlbmNhcmEgZmFsdGEgbXVsdGlwbGljYXIgcGVyICQxMDAkLiIsICJIYXMgcmVzdGF0IGxlcyBkdWVzIHF1YW50aXRhdHMuIFVuIHBlcmNlbnRhdGdlIHN1cnQgZCd1bmEgZGl2aXNpw7MsIG5vIGQndW5hIHJlc3RhLiIsICJIYXMgZGl2aWRpdCBhbCByZXbDqXMuIEVsIHBlcmNlbnRhdGdlIMOpcyAkXFxkZnJhY3tcXHRleHR7cGFydH19e1xcdGV4dHt0b3RhbH19XFxjZG90MTAwJCwgaSBsYSBwYXJ0IHZhIGEgZGFsdC4iLCAiIl0sICJlcnIiOiBbIlBFUkNFTlRBVEdFX0RFQ0lNQUxfTUFMIiwgIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJJTlZFUlRJREEiLCAiIl0sICJyZXMiOiBbIiRcXGRmcmFjezd9ezI4fT0weyx9MjUkIiwgIiQweyx9MjVcXGNkb3QxMDA9MjVcXCxcXCUkIl19"
  },
  {
   "id": "278c",
   "ex": 278,
   "ap": "c",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Quin percentatge representa la primera quantitat de la segona?",
   "enunciat": "$45$ de $300$.",
   "opcions": [
    "$15\\,\\%$",
    "$255\\,\\%$",
    "$666{,}67\\,\\%$",
    "$0{,}15\\,\\%$"
   ],
   "pistes": [
    "Divideix la part, $45$, entre el total, $300$.",
    "Multiplica el resultat per $100$. Comprova que té sentit: $45$ és menys de la meitat de $300$, així que ha de sortir menys del $50\\,\\%$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHJlc3RhdCBsZXMgZHVlcyBxdWFudGl0YXRzLiBVbiBwZXJjZW50YXRnZSBzdXJ0IGQndW5hIGRpdmlzacOzLCBubyBkJ3VuYSByZXN0YS4iLCAiSGFzIGRpdmlkaXQgYWwgcmV2w6lzLiBFbCBwZXJjZW50YXRnZSDDqXMgJFxcZGZyYWN7XFx0ZXh0e3BhcnR9fXtcXHRleHR7dG90YWx9fVxcY2RvdDEwMCQsIGkgbGEgcGFydCB2YSBhIGRhbHQuIiwgIkFxdWVzdCDDqXMgZWwgcXVvY2llbnQgZW4gZGVjaW1hbDogcGVyIHBhc3Nhci1sbyBhIHBlcmNlbnRhdGdlIGVuY2FyYSBmYWx0YSBtdWx0aXBsaWNhciBwZXIgJDEwMCQuIl0sICJlcnIiOiBbIiIsICJSRVNUQV9QRVJfUVVPQ0lFTlQiLCAiSU5WRVJUSURBIiwgIlBFUkNFTlRBVEdFX0RFQ0lNQUxfTUFMIl0sICJyZXMiOiBbIiRcXGRmcmFjezQ1fXszMDB9PTB7LH0xNSQiLCAiJDB7LH0xNVxcY2RvdDEwMD0xNVxcLFxcJSQiXX0="
  },
  {
   "id": "278d",
   "ex": 278,
   "ap": "d",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Quin percentatge representa la primera quantitat de la segona?",
   "enunciat": "$12$ de $15$.",
   "opcions": [
    "$125\\,\\%$",
    "$0{,}8\\,\\%$",
    "$80\\,\\%$",
    "$3\\,\\%$"
   ],
   "pistes": [
    "Divideix la part, $12$, entre el total, $15$.",
    "Multiplica el resultat per $100$. Comprova que té sentit: $12$ és més de la meitat de $15$, així que ha de sortir més del $50\\,\\%$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBhbCByZXbDqXMuIEVsIHBlcmNlbnRhdGdlIMOpcyAkXFxkZnJhY3tcXHRleHR7cGFydH19e1xcdGV4dHt0b3RhbH19XFxjZG90MTAwJCwgaSBsYSBwYXJ0IHZhIGEgZGFsdC4iLCAiQXF1ZXN0IMOpcyBlbCBxdW9jaWVudCBlbiBkZWNpbWFsOiBwZXIgcGFzc2FyLWxvIGEgcGVyY2VudGF0Z2UgZW5jYXJhIGZhbHRhIG11bHRpcGxpY2FyIHBlciAkMTAwJC4iLCAiIiwgIkhhcyByZXN0YXQgbGVzIGR1ZXMgcXVhbnRpdGF0cy4gVW4gcGVyY2VudGF0Z2Ugc3VydCBkJ3VuYSBkaXZpc2nDsywgbm8gZCd1bmEgcmVzdGEuIl0sICJlcnIiOiBbIklOVkVSVElEQSIsICJQRVJDRU5UQVRHRV9ERUNJTUFMX01BTCIsICIiLCAiUkVTVEFfUEVSX1FVT0NJRU5UIl0sICJyZXMiOiBbIiRcXGRmcmFjezEyfXsxNX09MHssfTgkIiwgIiQweyx9OFxcY2RvdDEwMD04MFxcLFxcJSQiXX0="
  },
  {
   "id": "279a",
   "ex": 279,
   "ap": "a",
   "bloc": "factor_multiplicador",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
  }
 ]
};
