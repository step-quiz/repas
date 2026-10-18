/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 5,
 "titol": "Full 5 — Equacions i sistemes",
 "subtitol": "Equacions de primer i segon grau, sistemes d'equacions lineals i problemes que es resolen plantejant-los.",
 "blocs": [
  {
   "id": "primer_grau",
   "titol": "Equacions de primer grau",
   "descripcio": "Equacions amb parèntesis i amb un o diversos denominadors.",
   "items": [
    "350a",
    "350b",
    "76a",
    "76b",
    "76c",
    "76d",
    "76e",
    "76f",
    "77a",
    "77b",
    "77c",
    "77d",
    "75a",
    "75b",
    "75c",
    "75d",
    "75e",
    "75f",
    "78a",
    "78b",
    "78c",
    "78d",
    "78e",
    "78f",
    "79a",
    "79b",
    "79c",
    "79d",
    "79e"
   ]
  },
  {
   "id": "formula_general",
   "titol": "Segon grau: fórmula i discriminant",
   "descripcio": "Fórmula general i nombre de solucions segons el discriminant.",
   "items": [
    "351a",
    "351b",
    "80a",
    "80b",
    "80c",
    "80d",
    "80e",
    "80f",
    "80g",
    "81a",
    "81b",
    "81c",
    "81d",
    "81e",
    "81f",
    "81g"
   ]
  },
  {
   "id": "factoritzacio",
   "titol": "Segon grau: factor comú i factorització",
   "descripcio": "Equacions incompletes, ja factoritzades i que cal reordenar.",
   "items": [
    "352a",
    "352b",
    "82a",
    "82b",
    "82c",
    "82d",
    "82e",
    "82f",
    "82g",
    "82h",
    "82i",
    "83a",
    "83b",
    "83c",
    "83d",
    "83e",
    "83f",
    "84a",
    "84b",
    "84c",
    "84d",
    "84e",
    "84f",
    "84g"
   ]
  },
  {
   "id": "sistemes",
   "titol": "Sistemes d'equacions",
   "descripcio": "Substitució, igualació i reducció, amb denominadors i parèntesis.",
   "items": [
    "353a",
    "353b",
    "85a",
    "85b",
    "85c",
    "85d",
    "85e",
    "85f",
    "85g",
    "85h",
    "86a",
    "86b",
    "86c",
    "86d",
    "86e",
    "86f",
    "88a",
    "88b",
    "88c",
    "88d",
    "88e",
    "88f",
    "89a",
    "89b",
    "89c",
    "89d",
    "87"
   ]
  },
  {
   "id": "problemes",
   "titol": "Problemes amb equacions i sistemes",
   "descripcio": "Problemes d'edats, nombres, preus i geometria que es plantegen amb una equació o un sistema.",
   "items": [
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100"
   ],
   "avancat": true
  }
 ],
 "errors": {
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PARITAT_EXPONENT": "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna resultat positiu; amb exponent senar, el resultat es queda negatiu.",
  "POTENCIA_COM_PRODUCTE": "$x^2$ no és $2x$: és $x\\cdot x$. Prova-ho amb $x=3$, que dona $9$ i no $6$.",
  "PRODUCTE_CREUAT": "Per multiplicar fraccions es fa numerador per numerador i denominador per denominador. Creuar-los és el que es fa per COMPARAR-les, no per multiplicar-les.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_PRODUCTE": "Revisa la regla dels signes del producte: signes diferents donen resultat negatiu.",
  "SIGNE_QUOCIENT": "Revisa la regla dels signes del quocient: signes diferents donen resultat negatiu.",
  "SIMPLIFICACIO_INCOMPLETA": "Encara es pot simplificar més: busca el m.c.d. del numerador i el denominador i divideix-los pel m.c.d. d'un sol cop.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "351a",
   "ex": 351,
   "ap": "a",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el discriminant d'aquesta equació de segon grau. Recorda: a $ax^2+bx+c=0$, el discriminant és $\\Delta=b^2-4ac$.",
   "enunciat": "$x^2+5x+4=0$",
   "opcions": [
    "$\\Delta=9$",
    "$\\Delta=-6$",
    "$\\Delta=41$",
    "$\\Delta=21$"
   ],
   "pistes": [
    "Aquí $a=1$, $b=5$ i $c=4$.",
    "$\\Delta=5^2-4\\cdot1\\cdot4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJGJeMj01XjI9MjUkLCBubyAkMlxcY2RvdDU9MTAkLiAkeF4yJCBubyDDqXMgJDJ4JDogw6lzICR4XFxjZG90IHgkLiBQcm92YS1obyBhbWIgJHg9MyQsIHF1ZSBkb25hICQ5JCBpIG5vICQ2JC4iLCAiSGFzIHN1bWF0ICQ0YWMkLiBMYSBmw7NybXVsYSBlbCBSRVNUQTogJDI1LTE2JC4iLCAiSGFzIHJlc3RhdCBub23DqXMgZWwgJDQkLiBTw7NuICQ0XFxjZG90IGFcXGNkb3QgYz00XFxjZG90MVxcY2RvdDQ9MTYkLiJdLCAiZXJyIjogWyIiLCAiUE9URU5DSUFfQ09NX1BST0RVQ1RFIiwgIlNVTUFfRU5fTExPQ19SRVNUQSIsICJGQUNUT1JfT0JMSURBVCJdLCAicmVzIjogWyIkYT0xLFxcIGI9NSxcXCBjPTQkIiwgIiRcXERlbHRhPTVeMi00XFxjZG90MVxcY2RvdDQ9MjUtMTY9OSQiXX0="
  },
  {
   "id": "351b",
   "ex": 351,
   "ap": "b",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el discriminant d'aquesta equació de segon grau. Recorda: a $ax^2+bx+c=0$, el discriminant és $\\Delta=b^2-4ac$.",
   "enunciat": "$x^2-6x+5=0$",
   "opcions": [
    "$\\Delta=16$",
    "$\\Delta=-56$",
    "$\\Delta=56$",
    "$\\Delta=-32$"
   ],
   "pistes": [
    "Aquí $a=1$, $b=-6$ i $c=5$.",
    "$\\Delta=(-6)^2-4\\cdot1\\cdot5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJCgtNileMj0rMzYkLCBubyAkLTM2JC4gUmV2aXNhIGxhIHBhcml0YXQgZGUgbCdleHBvbmVudDogYW1iIGV4cG9uZW50IHBhcmVsbCwgdW5hIGJhc2UgbmVnYXRpdmEgZMOzbmEgcmVzdWx0YXQgcG9zaXRpdTsgYW1iIGV4cG9uZW50IHNlbmFyLCBlbCByZXN1bHRhdCBlcyBxdWVkYSBuZWdhdGl1LiIsICJIYXMgc3VtYXQgJDRhYyQuIExhIGbDs3JtdWxhIGVsIFJFU1RBOiAkMzYtMjAkLiIsICIkYl4yPSgtNileMj0zNiQsIG5vICQyXFxjZG90KC02KT0tMTIkLiAkeF4yJCBubyDDqXMgJDJ4JDogw6lzICR4XFxjZG90IHgkLiBQcm92YS1obyBhbWIgJHg9MyQsIHF1ZSBkb25hICQ5JCBpIG5vICQ2JC4iXSwgImVyciI6IFsiIiwgIlBBUklUQVRfRVhQT05FTlQiLCAiU1VNQV9FTl9MTE9DX1JFU1RBIiwgIlBPVEVOQ0lBX0NPTV9QUk9EVUNURSJdLCAicmVzIjogWyIkYT0xLFxcIGI9LTYsXFwgYz01JCIsICIkXFxEZWx0YT0oLTYpXjItNFxcY2RvdDFcXGNkb3Q1PTM2LTIwPTE2JCJdfQ=="
  },
  {
   "id": "80a",
   "ex": 80,
   "ap": "a",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$x^2-5x+6=0$",
   "opcions": [
    "$x=2,\\ 3$",
    "$x=1,\\ 6$",
    "$x=-2,\\ -3$",
    "$x=3$ (doble)"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ amb el seu signe: aquí $a=1$, $b=-5$ i $c=6$.",
    "Calcula primer $\\Delta=(-5)^2-4\\cdot 1\\cdot 6$. Si surt negatiu, no hi ha solucions reals; si no, aplica $x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGxhIGbDs3JtdWxhOiBubyBuJ2hpIGhhIHByb3UgZGUgZGVzY29tcG9uZHJlICQ2JCBjb20gYSBwcm9kdWN0ZSBkZSBkb3MgZmFjdG9ycywgY2FsIGFwbGljYXIgJHg9XFxmcmFjey1iXFxwbVxcc3FydFxcRGVsdGF9ezJhfSQuIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkLWIkIGFsIG51bWVyYWRvcjogYW1iICRiPS01JCwgZWwgbnVtZXJhZG9yIGRlIGxhIGbDs3JtdWxhIHBvcnRhICQrNSQsIGkgbGVzIGR1ZXMgc29sdWNpb25zIHN1cnRlbiBwb3NpdGl2ZXMuIiwgIkVsIGRpc2NyaW1pbmFudCAkXFxEZWx0YT0xJCDDqXMgcG9zaXRpdSAobm8gemVybyk6IGhpIGhhIERVRVMgc29sdWNpb25zIGRpZmVyZW50cywgbm8gdW5hIGRlIGRvYmxlLiJdLCAiZXJyIjogWyIiLCAiUFJPRFVDVEVfQ1JFVUFUIiwgIlNJR05FX1FVT0NJRU5UIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0xLFxcIGI9LTUsXFwgYz02JDogJFxcRGVsdGE9KC01KV4yLTRcXGNkb3QxXFxjZG90Nj0yNS0yND0xJCIsICIkeD1cXGRmcmFjezVcXHBtXFxzcXJ0ezF9fXsyfSQiLCAiJHg9MixcXCAzJCJdfQ=="
  },
  {
   "id": "80b",
   "ex": 80,
   "ap": "b",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$2x^2-4x+13=0$",
   "opcions": [
    "Sense solució",
    "$x=1$ (doble)",
    "Sense solucions reals",
    "$x=-1,\\ 1$"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ amb el seu signe: aquí $a=2$, $b=-4$ i $c=13$.",
    "Calcula primer $\\Delta=(-4)^2-4\\cdot 2\\cdot 13$. Si surt negatiu, no hi ha solucions reals; si no, aplica $x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJcIlNlbnNlIHNvbHVjaW9ucyByZWFsc1wiIG5vIMOpcyBlbCBtYXRlaXggcXVlIFwic2Vuc2Ugc29sdWNpw7NcIjogYXF1w60gZW5zIHJlZmVyaW0gYSBub21icmVzIHJlYWxzLCBpIGVsIGRpc2NyaW1pbmFudCBuZWdhdGl1IGhvIGNvbmZpcm1hLiIsICJVbiBkaXNjcmltaW5hbnQgbmVnYXRpdSB2b2wgZGlyIHF1ZSBOTyBoaSBoYSBjYXAgc29sdWNpw7MgcmVhbCwgbmkgdGFuIHNvbHMgdW5hIGRlIGRvYmxlOiB0b3JuYSBhIGNhbGN1bGFyICRcXERlbHRhPWJeMi00YWMkLiIsICIiLCAiUmV2aXNhIGVsIGPDoGxjdWwgZGVsIGRpc2NyaW1pbmFudCBhbWIgY3VyYTogJFxcRGVsdGE9KC00KV4yLTRcXGNkb3QyXFxjZG90MTM9MTYtMTA0PS04OCQsIG5lZ2F0aXUuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJQQVJJVEFUX0VYUE9ORU5UIiwgIiIsICJTSUdORV9QUk9EVUNURSJdLCAicmVzIjogWyIkYT0yLFxcIGI9LTQsXFwgYz0xMyQ6ICRcXERlbHRhPSgtNCleMi00XFxjZG90MlxcY2RvdDEzPTE2LTEwND0tODgkIiwgIkNvbSBxdWUgJFxcRGVsdGE8MCQsIGwnZXF1YWNpw7Mgbm8gdMOpIHNvbHVjaW9ucyByZWFscy4iXX0="
  },
  {
   "id": "80c",
   "ex": 80,
   "ap": "c",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$x^2+8x+16=0$",
   "opcions": [
    "$x=-8$ (doble)",
    "Sense solucions reals",
    "$x=-4$ (doble)",
    "$x=-4,\\ 4$"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ amb el seu signe: aquí $a=1$, $b=8$ i $c=16$.",
    "Calcula primer $\\Delta=8^2-4\\cdot 1\\cdot 16$. Si surt negatiu, no hi ha solucions reals; si no, aplica $x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgbGEgZGl2aXNpw7MgZmluYWwgZW50cmUgJDJhPTIkOiBlbCBudW1lcmFkb3IgJC04XFxwbTAkIGVzIGRpdmlkZWl4IFRPVCBlbnRyZSAkMiQsIG5vIGVzIHF1ZWRhIHNlbnNlIGRpdmlkaXIuIiwgIiRcXERlbHRhPTAkIG5vIHZvbCBkaXIgcXVlIG5vIGhpIGhhZ2kgc29sdWNpb25zIHJlYWxzOiB2b2wgZGlyIHF1ZSBuJ2hpIGhhIGV4YWN0YW1lbnQgdW5hIChkb2JsZSkuIiwgIiIsICJRdWFuICRcXERlbHRhPTAkIG5vbcOpcyBoaSBoYSBVTkEgc29sdWNpw7MgKGRvYmxlKSwgbm8gZHVlcyBkZSBzaWduZSBvcG9zYXQ6IHJldmlzYSBlbCBzaWduZSBkZSAkLWIkIGFsIG51bWVyYWRvci4iXSwgImVyciI6IFsiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiU0lHTkVfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJGE9MSxcXCBiPTgsXFwgYz0xNiQ6ICRcXERlbHRhPSg4KV4yLTRcXGNkb3QxXFxjZG90MTY9NjQtNjQ9MCQiLCAiJHg9XFxkZnJhY3stOFxccG1cXHNxcnR7MH19ezJ9JCIsICIkeD0tNCQgKGRvYmxlKSJdfQ=="
  },
  {
   "id": "80d",
   "ex": 80,
   "ap": "d",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$3x^2+2x-16=0$",
   "opcions": [
    "$x=-\\dfrac{8}{3},\\ -2$",
    "$x=-\\dfrac{8}{3},\\ 2$",
    "$x=-\\dfrac{4}{3},\\ \\dfrac{1}{3}$",
    "$x=\\dfrac{8}{3},\\ -2$"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ amb el seu signe: aquí $a=3$, $b=2$ i $c=-16$.",
    "Calcula primer $\\Delta=2^2-4\\cdot 3\\cdot (-16)$. Si surt negatiu, no hi ha solucions reals; si no, aplica $x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiAkXFxmcmFjey0yKzE0fXs2fT1cXGZyYWN7MTJ9ezZ9PTIkLCBwb3NpdGl1LiIsICIiLCAiTGVzIGZyYWNjaW9ucyBmaW5hbHMgZW5jYXJhIGVzIHBvZGVuIHNpbXBsaWZpY2FyIGRpdmlkaW50IG51bWVyYWRvciBpIGRlbm9taW5hZG9yIGVudHJlICQyJC4iLCAiUmV2aXNhIGVsIHNpZ25lIGRlICQtYiQgYWwgbnVtZXJhZG9yOiBhbWIgJGI9MiQsIGVsIG51bWVyYWRvciBwb3J0YSAkLTIkLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICIiLCAiU0lNUExJRklDQUNJT19JTkNPTVBMRVRBIiwgIlNJR05FX1FVT0NJRU5UIl0sICJyZXMiOiBbIiRhPTMsXFwgYj0yLFxcIGM9LTE2JDogJFxcRGVsdGE9KDIpXjItNFxcY2RvdDNcXGNkb3QoLTE2KT00KzE5Mj0xOTYkIiwgIiR4PVxcZGZyYWN7LTJcXHBtXFxzcXJ0ezE5Nn19ezZ9JCIsICIkeD0tXFxkZnJhY3s4fXszfSxcXCAyJCJdfQ=="
  },
  {
   "id": "80e",
   "ex": 80,
   "ap": "e",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$x^2-2x+1=0$",
   "opcions": [
    "Sense solucions reals",
    "$x=1,\\ -1$",
    "$x=2$ (doble)",
    "$x=1$ (doble)"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ amb el seu signe: aquí $a=1$, $b=-2$ i $c=1$.",
    "Calcula primer $\\Delta=(-2)^2-4\\cdot 1\\cdot 1$. Si surt negatiu, no hi ha solucions reals; si no, aplica $x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkXFxEZWx0YT0wJCBubyB2b2wgZGlyIHF1ZSBubyBoaSBoYWdpIHNvbHVjaW9ucyByZWFsczogdm9sIGRpciBxdWUgbidoaSBoYSBleGFjdGFtZW50IHVuYSAoZG9ibGUpLiIsICJRdWFuICRcXERlbHRhPTAkIG5vbcOpcyBoaSBoYSBVTkEgc29sdWNpw7MgKGRvYmxlKTogcmV2aXNhIGVsIHNpZ25lIGRlICQtYiQgYWwgbnVtZXJhZG9yLCBhbWIgJGI9LTIkIGVsIG51bWVyYWRvciBwb3J0YSAkKzIkLiIsICJSZXZpc2EgbGEgZGl2aXNpw7MgZmluYWwgZW50cmUgJDJhPTIkOiBlbCBudW1lcmFkb3IgJDJcXHBtMCQgZXMgZGl2aWRlaXggZW50cmUgJDIkLCBpIGRvbmEgJDEkLCBubyAkMiQuIiwgIiJdLCAiZXJyIjogWyJWRVJFRElDVEVfSU5WRVJUSVQiLCAiU0lHTkVfUVVPQ0lFTlQiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIiwgIiJdLCAicmVzIjogWyIkYT0xLFxcIGI9LTIsXFwgYz0xJDogJFxcRGVsdGE9KC0yKV4yLTRcXGNkb3QxXFxjZG90MT00LTQ9MCQiLCAiJHg9XFxkZnJhY3syXFxwbVxcc3FydHswfX17Mn0kIiwgIiR4PTEkIChkb2JsZSkiXX0="
  },
  {
   "id": "80f",
   "ex": 80,
   "ap": "f",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$7x^2-3x+1=0$",
   "opcions": [
    "Sense solucions reals",
    "$x=-\\dfrac{3}{14},\\ \\dfrac{3}{14}$",
    "$x=\\dfrac{3}{14}$ (doble)",
    "Sense solució"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ amb el seu signe: aquí $a=7$, $b=-3$ i $c=1$.",
    "Calcula primer $\\Delta=(-3)^2-4\\cdot 7\\cdot 1$. Si surt negatiu, no hi ha solucions reals; si no, aplica $x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIGPDoGxjdWwgZGVsIGRpc2NyaW1pbmFudDogJFxcRGVsdGE9KC0zKV4yLTRcXGNkb3Q3XFxjZG90MT05LTI4PS0xOSQsIG5lZ2F0aXUuIiwgIlVuIGRpc2NyaW1pbmFudCBuZWdhdGl1IHZvbCBkaXIgcXVlIE5PIGhpIGhhIGNhcCBzb2x1Y2nDsyByZWFsLCBuaSB0YW4gc29scyB1bmEgZGUgZG9ibGU6IHRvcm5hIGEgY2FsY3VsYXIgJFxcRGVsdGE9Yl4yLTRhYyQuIiwgIlwiU2Vuc2Ugc29sdWNpb25zIHJlYWxzXCIgbm8gw6lzIGVsIG1hdGVpeCBxdWUgXCJzZW5zZSBzb2x1Y2nDs1wiOiBlbCBkaXNjcmltaW5hbnQgbmVnYXRpdSBjb25maXJtYSBxdWUgbm8gbidoaSBoYSBjYXAgZGUgcmVhbC4iXSwgImVyciI6IFsiIiwgIlNJR05FX1BST0RVQ1RFIiwgIlBBUklUQVRfRVhQT05FTlQiLCAiVkVSRURJQ1RFX0lOVkVSVElUIl0sICJyZXMiOiBbIiRhPTcsXFwgYj0tMyxcXCBjPTEkOiAkXFxEZWx0YT0oLTMpXjItNFxcY2RvdDdcXGNkb3QxPTktMjg9LTE5JCIsICJDb20gcXVlICRcXERlbHRhPDAkLCBsJ2VxdWFjacOzIG5vIHTDqSBzb2x1Y2lvbnMgcmVhbHMuIl19"
  },
  {
   "id": "80g",
   "ex": 80,
   "ap": "g",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$-x^2-4x+5=0$",
   "opcions": [
    "$x=-9,\\ 5$",
    "$x=5,\\ -1$",
    "$x=-5,\\ 1$",
    "$x=-1,\\ 5$"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ amb el seu signe: aquí $a=-1$, $b=-4$ i $c=5$.",
    "Calcula primer $\\Delta=(-4)^2-4\\cdot (-1)\\cdot 5$. Si surt negatiu, no hi ha solucions reals; si no, aplica $x=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$. Compte: com que $a$ és negatiu, el denominador $2a$ també ho és."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgbCdhcml0bcOodGljYSBkZWwgbnVtZXJhZG9yIGFiYW5zIGRlIGRpdmlkaXI6ICQ0K1xcc3FydHszNn09NCs2PTEwJCwgbm8gdW4gYWx0cmUgdmFsb3IuIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkLWIkIGFsIG51bWVyYWRvcjogYW1iICRiPS00JCwgZWwgbnVtZXJhZG9yIHBvcnRhICQrNCQ7IGkgZWwgZGVub21pbmFkb3IgJDJhPS0yJCDDqXMgbmVnYXRpdSwgY29zYSBxdWUgdGFtYsOpIGFmZWN0YSBlbCBzaWduZSBmaW5hbC4iLCAiIiwgIlJldmlzYSBxdWluIGRlbHMgZG9zIGNhc29zIGRlbCAkXFxwbSQgZG9uYSBjYWRhIHNvbHVjacOzOiAkXFxmcmFjezQrNn17LTJ9PS01JCBpICRcXGZyYWN7NC02fXstMn09MSQuIl0sICJlcnIiOiBbIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJTSUdORV9RVU9DSUVOVCIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJGE9LTEsXFwgYj0tNCxcXCBjPTUkOiAkXFxEZWx0YT0oLTQpXjItNFxcY2RvdCgtMSlcXGNkb3Q1PTE2KzIwPTM2JCIsICIkeD1cXGRmcmFjezRcXHBtXFxzcXJ0ezM2fX17LTJ9JCIsICIkeD0tNSxcXCAxJCJdfQ=="
  },
  {
   "id": "81a",
   "ex": 81,
   "ap": "a",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$x^2+5x+6=0$",
   "opcions": [
    "Cap solució real",
    "2 solucions",
    "3 solucions",
    "1 solució (doble)"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "Aquí $\\Delta=5^2-4\\cdot 1\\cdot 6$: compte amb els signes. Després: $\\Delta>0$, dues solucions; $\\Delta=0$, una (doble); $\\Delta<0$, cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICIiLCAiVW5hIGVxdWFjacOzIGRlIHNlZ29uIGdyYXUgKGdyYXUgMikgdMOpIGNvbSBhIG1vbHQgMiBzb2x1Y2lvbnMgcmVhbHMsIG1haSAzOiByZXZpc2EgcXVlIGhhcyBpZGVudGlmaWNhdCBiw6kgZWwgZ3JhdS4iLCAiRWwgdmVyZWRpY3RlIG5vIGNvaW5jaWRlaXggYW1iIGVsIHNpZ25lIHJlYWwgZGVsIGRpc2NyaW1pbmFudCBxdWUgaGFzIChvIGhhdXJpZXMgZCdoYXZlcikgY2FsY3VsYXQ6IHRvcm5hLWhpIGEgbWlyYXIuIl0sICJlcnIiOiBbIlNJR05FX1BST0RVQ1RFIiwgIiIsICJQQVJJVEFUX0VYUE9ORU5UIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0xLFxcIGI9NSxcXCBjPTYkOiAkXFxEZWx0YT0oNSleMi00XFxjZG90MVxcY2RvdDY9MjUtMjQ9MSQiLCAiJFxcRGVsdGE+MCQgJFxcUmlnaHRhcnJvdyQgMiBzb2x1Y2lvbnMiXX0="
  },
  {
   "id": "81b",
   "ex": 81,
   "ap": "b",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$-2x^2-6x+8=0$",
   "opcions": [
    "3 solucions",
    "Cap solució real",
    "2 solucions",
    "1 solució (doble)"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "Aquí $\\Delta=(-6)^2-4\\cdot (-2)\\cdot 8$: compte amb els signes. Després: $\\Delta>0$, dues solucions; $\\Delta=0$, una (doble); $\\Delta<0$, cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbmEgZXF1YWNpw7MgZGUgc2Vnb24gZ3JhdSAoZ3JhdSAyKSB0w6kgY29tIGEgbW9sdCAyIHNvbHVjaW9ucyByZWFscywgbWFpIDM6IHJldmlzYSBxdWUgaGFzIGlkZW50aWZpY2F0IGLDqSBlbCBncmF1LiIsICJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICIiLCAiRWwgdmVyZWRpY3RlIG5vIGNvaW5jaWRlaXggYW1iIGVsIHNpZ25lIHJlYWwgZGVsIGRpc2NyaW1pbmFudCBxdWUgaGFzIChvIGhhdXJpZXMgZCdoYXZlcikgY2FsY3VsYXQ6IHRvcm5hLWhpIGEgbWlyYXIuIl0sICJlcnIiOiBbIlBBUklUQVRfRVhQT05FTlQiLCAiU0lHTkVfUFJPRFVDVEUiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0tMixcXCBiPS02LFxcIGM9OCQ6ICRcXERlbHRhPSgtNileMi00XFxjZG90KC0yKVxcY2RvdDg9MzYrNjQ9MTAwJCIsICIkXFxEZWx0YT4wJCAkXFxSaWdodGFycm93JCAyIHNvbHVjaW9ucyJdfQ=="
  },
  {
   "id": "81c",
   "ex": 81,
   "ap": "c",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$x^2-8x+16=0$",
   "opcions": [
    "Cap solució real",
    "0 solucions",
    "1 solució (doble)",
    "2 solucions"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "Aquí $\\Delta=(-8)^2-4\\cdot 1\\cdot 16$: compte amb els signes. Després: $\\Delta>0$, dues solucions; $\\Delta=0$, una (doble); $\\Delta<0$, cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICJFbCB2ZXJlZGljdGUgbm8gY29pbmNpZGVpeCBhbWIgZWwgc2lnbmUgcmVhbCBkZWwgZGlzY3JpbWluYW50IHF1ZSBoYXMgKG8gaGF1cmllcyBkJ2hhdmVyKSBjYWxjdWxhdDogdG9ybmEtaGkgYSBtaXJhci4iLCAiIiwgIkVsIHZlcmVkaWN0ZSBubyBjb2luY2lkZWl4IGFtYiBlbCBzaWduZSByZWFsIGRlbCBkaXNjcmltaW5hbnQgcXVlIGhhcyAobyBoYXVyaWVzIGQnaGF2ZXIpIGNhbGN1bGF0OiB0b3JuYS1oaSBhIG1pcmFyLiJdLCAiZXJyIjogWyJTSUdORV9QUk9EVUNURSIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0xLFxcIGI9LTgsXFwgYz0xNiQ6ICRcXERlbHRhPSgtOCleMi00XFxjZG90MVxcY2RvdDE2PTY0LTY0PTAkIiwgIiRcXERlbHRhPTAkICRcXFJpZ2h0YXJyb3ckIDEgc29sdWNpw7MgKGRvYmxlKSJdfQ=="
  },
  {
   "id": "81d",
   "ex": 81,
   "ap": "d",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$-x^2+x+1=0$",
   "opcions": [
    "1 solució (doble)",
    "2 solucions",
    "Cap solució real",
    "3 solucions"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "Aquí $\\Delta=1^2-4\\cdot (-1)\\cdot 1$: compte amb els signes. Després: $\\Delta>0$, dues solucions; $\\Delta=0$, una (doble); $\\Delta<0$, cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCB2ZXJlZGljdGUgbm8gY29pbmNpZGVpeCBhbWIgZWwgc2lnbmUgcmVhbCBkZWwgZGlzY3JpbWluYW50IHF1ZSBoYXMgKG8gaGF1cmllcyBkJ2hhdmVyKSBjYWxjdWxhdDogdG9ybmEtaGkgYSBtaXJhci4iLCAiIiwgIlJldmlzYSBlbCBjw6BsY3VsIGRlICRcXERlbHRhPWJeMi00YWMkIGFtYiBlbHMgc2lnbmVzIGNvcnJlY3RlcyBkZSAkYSQsICRiJCBpICRjJDogdW4gZXJyb3IgZGUgc2lnbmUgYXF1w60gY2FudmlhIGNvbXBsZXRhbWVudCBlbCB2ZXJlZGljdGUuIiwgIlVuYSBlcXVhY2nDsyBkZSBzZWdvbiBncmF1IChncmF1IDIpIHTDqSBjb20gYSBtb2x0IDIgc29sdWNpb25zIHJlYWxzLCBtYWkgMzogcmV2aXNhIHF1ZSBoYXMgaWRlbnRpZmljYXQgYsOpIGVsIGdyYXUuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiU0lHTkVfUFJPRFVDVEUiLCAiUEFSSVRBVF9FWFBPTkVOVCJdLCAicmVzIjogWyIkYT0tMSxcXCBiPTEsXFwgYz0xJDogJFxcRGVsdGE9KDEpXjItNFxcY2RvdCgtMSlcXGNkb3QxPTErND01JCIsICIkXFxEZWx0YT4wJCAkXFxSaWdodGFycm93JCAyIHNvbHVjaW9ucyJdfQ=="
  },
  {
   "id": "81e",
   "ex": 81,
   "ap": "e",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$x^2+8x+16=0$",
   "opcions": [
    "Cap solució real",
    "2 solucions",
    "1 solució (doble)",
    "0 solucions"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "Aquí $\\Delta=8^2-4\\cdot 1\\cdot 16$: compte amb els signes. Després: $\\Delta>0$, dues solucions; $\\Delta=0$, una (doble); $\\Delta<0$, cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICJFbCB2ZXJlZGljdGUgbm8gY29pbmNpZGVpeCBhbWIgZWwgc2lnbmUgcmVhbCBkZWwgZGlzY3JpbWluYW50IHF1ZSBoYXMgKG8gaGF1cmllcyBkJ2hhdmVyKSBjYWxjdWxhdDogdG9ybmEtaGkgYSBtaXJhci4iLCAiIiwgIkVsIHZlcmVkaWN0ZSBubyBjb2luY2lkZWl4IGFtYiBlbCBzaWduZSByZWFsIGRlbCBkaXNjcmltaW5hbnQgcXVlIGhhcyAobyBoYXVyaWVzIGQnaGF2ZXIpIGNhbGN1bGF0OiB0b3JuYS1oaSBhIG1pcmFyLiJdLCAiZXJyIjogWyJTSUdORV9QUk9EVUNURSIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0xLFxcIGI9OCxcXCBjPTE2JDogJFxcRGVsdGE9KDgpXjItNFxcY2RvdDFcXGNkb3QxNj02NC02ND0wJCIsICIkXFxEZWx0YT0wJCAkXFxSaWdodGFycm93JCAxIHNvbHVjacOzIChkb2JsZSkiXX0="
  },
  {
   "id": "81f",
   "ex": 81,
   "ap": "f",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$2x^2-4x+13=0$",
   "opcions": [
    "Cap solució real",
    "1 solució (doble)",
    "Infinites solucions",
    "2 solucions"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "Aquí $\\Delta=(-4)^2-4\\cdot 2\\cdot 13$: compte amb els signes. Després: $\\Delta>0$, dues solucions; $\\Delta=0$, una (doble); $\\Delta<0$, cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdmVyZWRpY3RlIG5vIGNvaW5jaWRlaXggYW1iIGVsIHNpZ25lIHJlYWwgZGVsIGRpc2NyaW1pbmFudCBxdWUgaGFzIChvIGhhdXJpZXMgZCdoYXZlcikgY2FsY3VsYXQ6IHRvcm5hLWhpIGEgbWlyYXIuIiwgIlJldmlzYSBlbCBjw6BsY3VsIGRlICRcXERlbHRhPWJeMi00YWMkIGFtYiBlbHMgc2lnbmVzIGNvcnJlY3RlcyBkZSAkYSQsICRiJCBpICRjJDogdW4gZXJyb3IgZGUgc2lnbmUgYXF1w60gY2FudmlhIGNvbXBsZXRhbWVudCBlbCB2ZXJlZGljdGUuIiwgIlJldmlzYSBlbCBjw6BsY3VsIGRlICRcXERlbHRhPWJeMi00YWMkIGFtYiBlbHMgc2lnbmVzIGNvcnJlY3RlcyBkZSAkYSQsICRiJCBpICRjJDogdW4gZXJyb3IgZGUgc2lnbmUgYXF1w60gY2FudmlhIGNvbXBsZXRhbWVudCBlbCB2ZXJlZGljdGUuIl0sICJlcnIiOiBbIiIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiU0lHTkVfUFJPRFVDVEUiLCAiU0lHTkVfUFJPRFVDVEUiXSwgInJlcyI6IFsiJGE9MixcXCBiPS00LFxcIGM9MTMkOiAkXFxEZWx0YT0oLTQpXjItNFxcY2RvdDJcXGNkb3QxMz0xNi0xMDQ9LTg4JCIsICIkXFxEZWx0YTwwJCAkXFxSaWdodGFycm93JCBDYXAgc29sdWNpw7MgcmVhbCJdfQ=="
  },
  {
   "id": "81g",
   "ex": 81,
   "ap": "g",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$7x^2-3x+1=0$",
   "opcions": [
    "Infinites solucions",
    "2 solucions",
    "1 solució (doble)",
    "Cap solució real"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "Aquí $\\Delta=(-3)^2-4\\cdot 7\\cdot 1$: compte amb els signes. Després: $\\Delta>0$, dues solucions; $\\Delta=0$, una (doble); $\\Delta<0$, cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICJFbCB2ZXJlZGljdGUgbm8gY29pbmNpZGVpeCBhbWIgZWwgc2lnbmUgcmVhbCBkZWwgZGlzY3JpbWluYW50IHF1ZSBoYXMgKG8gaGF1cmllcyBkJ2hhdmVyKSBjYWxjdWxhdDogdG9ybmEtaGkgYSBtaXJhci4iLCAiIl0sICJlcnIiOiBbIlNJR05FX1BST0RVQ1RFIiwgIlNJR05FX1BST0RVQ1RFIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICIiXSwgInJlcyI6IFsiJGE9NyxcXCBiPS0zLFxcIGM9MSQ6ICRcXERlbHRhPSgtMyleMi00XFxjZG90N1xcY2RvdDE9OS0yOD0tMTkkIiwgIiRcXERlbHRhPDAkICRcXFJpZ2h0YXJyb3ckIENhcCBzb2x1Y2nDsyByZWFsIl19"
  }
 ]
};
