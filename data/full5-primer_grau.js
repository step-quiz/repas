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
  "AGRUPACIO_TERMES_MAL": "Els termes amb incògnita no s'han agrupat bé: torna a sumar-ne els coeficients un per un, amb el seu signe.",
  "AILLAMENT_INCOMPLET": "Has parat abans d'acabar d'aïllar la incògnita: encara queda una operació per desfer. Comprova-ho substituint el teu valor a l'equació original.",
  "ARITMETICA_PAS_INTERMEDI": "El plantejament és bo, però hi ha un error de càlcul en un dels passos del mig. Refes l'operació pas a pas i comprova el resultat substituint-lo a l'enunciat original.",
  "DENOMINADOR_NO_ELIMINAT": "Has operat amb la fracció sense treure-li el denominador. Multiplica els dos membres pel denominador PRIMER, i només després aïlla la incògnita.",
  "DISTRIBUCIO_INCOMPLETA": "En multiplicar un polinomi per un altre, cada terme del primer s'ha de multiplicar per TOTS els termes del segon, no només per un.",
  "ENTER_MULTIPLICA_DENOMINADOR": "En multiplicar un enter per una fracció, l'enter multiplica NOMÉS el numerador; el denominador no canvia.",
  "FACTOR_COMU_INCOMPLET": "No has tret tot el factor comú possible: revisa si encara hi ha algun nombre o alguna $x$ que es repeteixi a tots els termes.",
  "GRAUS_MAL_AGRUPATS": "Només es poden sumar o restar termes del MATEIX grau: $x^3$ amb $x^3$, $x^2$ amb $x^2$... Revisa que has agrupat els termes correctes.",
  "GRAU_PRODUCTE_MAL": "En multiplicar potències de $x$, els exponents se SUMEN: $x^a\\cdot x^b=x^{a+b}$. El grau del producte és la suma dels graus dels factors.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "JERARQUIA": "Primer les multiplicacions i divisions; després, les sumes i restes.",
  "MENYS_PARENTESI": "El signe $-$ davant d'un parèntesi canvia el signe de TOTS els termes de dins, no només del primer.",
  "NUMERADORS_SENSE_AJUSTAR": "Has posat el denominador comú correcte, però has copiat els numeradors tal qual. Cada numerador s'ha de multiplicar pel mateix nombre que el seu denominador.",
  "OPERACIO_INVERSA": "Has fet l'operació contrària a la que tocava per desfer el pas anterior.",
  "PARENTESI_NO_DISTRIBUIT": "No has canviat cap signe en treure el parèntesi. Restar un parèntesi vol dir restar-ne tots els termes.",
  "PRODUCTE_CREUAT": "Per multiplicar fraccions es fa numerador per numerador i denominador per denominador. Creuar-los és el que es fa per COMPARAR-les, no per multiplicar-les.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_TERME_INDEPENDENT": "Revisa el signe del terme independent (el que no porta $x$): és fàcil perdre'l en sumar o restar.",
  "SIMPLIFICACIO_INCOMPLETA": "Encara es pot simplificar més: busca el m.c.d. del numerador i el denominador i divideix-los pel m.c.d. d'un sol cop.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "350a",
   "ex": 350,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquesta equació de primer grau desfent l'única operació que acompanya la $x$.",
   "enunciat": "$x+7=12$",
   "opcions": [
    "$x=5$",
    "$x=-5$",
    "$x=19$",
    "$x=\\dfrac{12}{7}$"
   ],
   "pistes": [
    "Quina operació fa el $7$ amb la $x$?",
    "Resta $7$ als dos costats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGZldCAkNy0xMiQuIMOJcyAkMTItNyQ6IGNvbXByb3ZhLWhvLCAkNSs3PTEyJC4iLCAiRWwgJDckIFNVTUE6IHBlciBkZXNmZXItaG8sIGVzIHJlc3RhLiAkMTItNyQsIG5vICQxMis3JC4gSGFzIGZldCBsJ29wZXJhY2nDsyBjb250csOgcmlhIGEgbGEgcXVlIHRvY2F2YSBwZXIgZGVzZmVyIGVsIHBhcyBhbnRlcmlvci4iLCAiRWwgJDckIG5vIG11bHRpcGxpY2EgbGEgJHgkOiBzJ2hpIHN1bWEuIEVzIGRlc2bDoCByZXN0YW50LiBIYXMgZmV0IGwnb3BlcmFjacOzIGNvbnRyw6ByaWEgYSBsYSBxdWUgdG9jYXZhIHBlciBkZXNmZXIgZWwgcGFzIGFudGVyaW9yLiJdLCAiZXJyIjogWyIiLCAiU0lHTkVfRklOQUwiLCAiT1BFUkFDSU9fSU5WRVJTQSIsICJPUEVSQUNJT19JTlZFUlNBIl0sICJyZXMiOiBbIiR4PTEyLTc9NSQiLCAiQ29tcHJvdmFjacOzOiAkNSs3PTEyJCJdfQ=="
  },
  {
   "id": "350b",
   "ex": 350,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquesta equació de primer grau desfent l'única operació que acompanya la $x$.",
   "enunciat": "$3x=21$",
   "opcions": [
    "$x=18$",
    "$x=63$",
    "$x=7$",
    "$x=\\dfrac{1}{7}$"
   ],
   "pistes": [
    "Quina operació fa el $3$ amb la $x$?",
    "Divideix per $3$ els dos costats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCAkMyQgbm8gc2Ugc3VtYSBhIGxhICR4JDogbGEgbXVsdGlwbGljYS4gRXMgZGVzZsOgIGRpdmlkaW50LiBIYXMgZmV0IGwnb3BlcmFjacOzIGNvbnRyw6ByaWEgYSBsYSBxdWUgdG9jYXZhIHBlciBkZXNmZXIgZWwgcGFzIGFudGVyaW9yLiIsICJFbCAkMyQgTVVMVElQTElDQTogcGVyIGRlc2Zlci1obywgZXMgZGl2aWRlaXguICQyMTozJCwgbm8gJDIxXFxjZG90MyQuIEhhcyBmZXQgbCdvcGVyYWNpw7MgY29udHLDoHJpYSBhIGxhIHF1ZSB0b2NhdmEgcGVyIGRlc2ZlciBlbCBwYXMgYW50ZXJpb3IuIiwgIiIsICJIYXMgZmV0ICQzOjIxJC4gw4lzICQyMTozJDogY29tcHJvdmEtaG8sICQzXFxjZG90Nz0yMSQuIl0sICJlcnIiOiBbIk9QRVJBQ0lPX0lOVkVSU0EiLCAiT1BFUkFDSU9fSU5WRVJTQSIsICIiLCAiSU5WRVJUSURBIl0sICJyZXMiOiBbIiR4PVxcZGZyYWN7MjF9ezN9PTckIiwgIkNvbXByb3ZhY2nDszogJDNcXGNkb3Q3PTIxJCJdfQ=="
  },
  {
   "id": "76a",
   "ex": 76,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{x}{5} = 3$",
   "opcions": [
    "$x=3$",
    "$x=15$",
    "$x=-15$",
    "$x=16$"
   ],
   "pistes": [
    "Multiplica els dos costats per $5$ per fer desaparèixer el denominador.",
    "$\\dfrac{x}{5}=3$ vol dir que $x$ és $5$ vegades $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZWwgbm9tYnJlIHF1ZSBhY29tcGFueWEgbGEgJHgkLCBwZXLDsiB0J2hhcyBzYWx0YXQgZWwgZGVub21pbmFkb3I6IGRlICRcXGRmcmFje2F4fXtifT1jJCBzdXJ0IHByaW1lciAkYXg9YlxcY2RvdCBjJCwgaSBub23DqXMgbGxhdm9ycyBlcyBkaXZpZGVpeCBwZXIgJGEkLiIsICIiLCAiRW4gcGFzc2FyIGVsIGRlbm9taW5hZG9yIGEgbCdhbHRyZSBjb3N0YXQsIG11bHRpcGxpY2EgVE9UIGVsIG1lbWJyZSBkZSBsYSBkcmV0YSwgbm8gbm9tw6lzIHVuYSBwYXJ0LiIsICJSZXZpc2EgZWxzIHNpZ25lczogc2kgZWwgbnVtZXJhZG9yIGRlbCBjb2VmaWNpZW50IGRlICR4JCDDqXMgbmVnYXRpdSwgZWwgcmVzdWx0YXQgZmluYWwgbidoZXJldGEgZWwgc2lnbmUgc2Vnb25zIGxhIHJlZ2xhIGRlbHMgc2lnbmVzIGRlbCBxdW9jaWVudC4iXSwgImVyciI6IFsiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiLCAiIiwgIkVOVEVSX01VTFRJUExJQ0FfREVOT01JTkFET1IiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJFxcZGZyYWN7eH17NX09MyBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9MTUkIl19"
  },
  {
   "id": "76b",
   "ex": 76,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{x}{2} = -21$",
   "opcions": [
    "$x=-42$",
    "$x=-41$",
    "$x=-21$",
    "$x=42$"
   ],
   "pistes": [
    "Multiplica els dos costats per $2$ per fer desaparèixer el denominador.",
    "$\\dfrac{x}{2}=-21$ vol dir que $x$ és $2$ vegades $-21$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVscyBzaWduZXM6IHNpIGVsIG51bWVyYWRvciBkZWwgY29lZmljaWVudCBkZSAkeCQgw6lzIG5lZ2F0aXUsIGVsIHJlc3VsdGF0IGZpbmFsIG4naGVyZXRhIGVsIHNpZ25lIHNlZ29ucyBsYSByZWdsYSBkZWxzIHNpZ25lcyBkZWwgcXVvY2llbnQuIiwgIkhhcyBkaXZpZGl0IHBlbCBub21icmUgcXVlIGFjb21wYW55YSBsYSAkeCQsIHBlcsOyIHQnaGFzIHNhbHRhdCBlbCBkZW5vbWluYWRvcjogZGUgJFxcZGZyYWN7YXh9e2J9PWMkIHN1cnQgcHJpbWVyICRheD1iXFxjZG90IGMkLCBpIG5vbcOpcyBsbGF2b3JzIGVzIGRpdmlkZWl4IHBlciAkYSQuIiwgIkVuIHBhc3NhciBlbCBkZW5vbWluYWRvciBhIGwnYWx0cmUgY29zdGF0LCBtdWx0aXBsaWNhIFRPVCBlbCBtZW1icmUgZGUgbGEgZHJldGEsIG5vIG5vbcOpcyB1bmEgcGFydC4iXSwgImVyciI6IFsiIiwgIlNJR05FX0ZJTkFMIiwgIkRFTk9NSU5BRE9SX05PX0VMSU1JTkFUIiwgIkVOVEVSX01VTFRJUExJQ0FfREVOT01JTkFET1IiXSwgInJlcyI6IFsiJFxcZGZyYWN7eH17Mn09LTIxIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0tNDIkIl19"
  },
  {
   "id": "76c",
   "ex": 76,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{-2x}{3} = 4$",
   "opcions": [
    "$x=4$",
    "$x=6$",
    "$x=-6$",
    "$x=-2$"
   ],
   "pistes": [
    "Multiplica els dos costats per $3$ per fer desaparèixer el denominador.",
    "Després de multiplicar per $3$ queda $-2x=3\\cdot4$. Ara divideix els dos costats per $-2$, amb el seu signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiBwYXNzYXIgZWwgZGVub21pbmFkb3IgYSBsJ2FsdHJlIGNvc3RhdCwgbXVsdGlwbGljYSBUT1QgZWwgbWVtYnJlIGRlIGxhIGRyZXRhLCBubyBub23DqXMgdW5hIHBhcnQuIiwgIlJldmlzYSBlbHMgc2lnbmVzOiBzaSBlbCBudW1lcmFkb3IgZGVsIGNvZWZpY2llbnQgZGUgJHgkIMOpcyBuZWdhdGl1LCBlbCByZXN1bHRhdCBmaW5hbCBuJ2hlcmV0YSBlbCBzaWduZSBzZWdvbnMgbGEgcmVnbGEgZGVscyBzaWduZXMgZGVsIHF1b2NpZW50LiIsICIiLCAiSGFzIGRpdmlkaXQgcGVsIG5vbWJyZSBxdWUgYWNvbXBhbnlhIGxhICR4JCwgcGVyw7IgdCdoYXMgc2FsdGF0IGVsIGRlbm9taW5hZG9yOiBkZSAkXFxkZnJhY3theH17Yn09YyQgc3VydCBwcmltZXIgJGF4PWJcXGNkb3QgYyQsIGkgbm9tw6lzIGxsYXZvcnMgZXMgZGl2aWRlaXggcGVyICRhJC4iXSwgImVyciI6IFsiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiIsICJTSUdORV9GSU5BTCIsICIiLCAiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiXSwgInJlcyI6IFsiJFxcZGZyYWN7LTJ4fXszfT00IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgLTJ4PTEyJCIsICIkeD0tNiQiXX0="
  },
  {
   "id": "76d",
   "ex": 76,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{7x}{4} = 28$",
   "opcions": [
    "$x=4$",
    "$x=-16$",
    "$x=28$",
    "$x=16$"
   ],
   "pistes": [
    "Multiplica els dos costats per $4$ per fer desaparèixer el denominador.",
    "Després de multiplicar per $4$ queda $7x=4\\cdot28$. Ara divideix els dos costats per $7$, amb el seu signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZWwgbm9tYnJlIHF1ZSBhY29tcGFueWEgbGEgJHgkLCBwZXLDsiB0J2hhcyBzYWx0YXQgZWwgZGVub21pbmFkb3I6IGRlICRcXGRmcmFje2F4fXtifT1jJCBzdXJ0IHByaW1lciAkYXg9YlxcY2RvdCBjJCwgaSBub23DqXMgbGxhdm9ycyBlcyBkaXZpZGVpeCBwZXIgJGEkLiIsICJSZXZpc2EgZWxzIHNpZ25lczogc2kgZWwgbnVtZXJhZG9yIGRlbCBjb2VmaWNpZW50IGRlICR4JCDDqXMgbmVnYXRpdSwgZWwgcmVzdWx0YXQgZmluYWwgbidoZXJldGEgZWwgc2lnbmUgc2Vnb25zIGxhIHJlZ2xhIGRlbHMgc2lnbmVzIGRlbCBxdW9jaWVudC4iLCAiRW4gcGFzc2FyIGVsIGRlbm9taW5hZG9yIGEgbCdhbHRyZSBjb3N0YXQsIG11bHRpcGxpY2EgVE9UIGVsIG1lbWJyZSBkZSBsYSBkcmV0YSwgbm8gbm9tw6lzIHVuYSBwYXJ0LiIsICIiXSwgImVyciI6IFsiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiLCAiU0lHTkVfRklOQUwiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiIsICIiXSwgInJlcyI6IFsiJFxcZGZyYWN7N3h9ezR9PTI4IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgN3g9MTEyJCIsICIkeD0xNiQiXX0="
  },
  {
   "id": "76e",
   "ex": 76,
   "ap": "e",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$3x = -5$",
   "opcions": [
    "$x=-5$",
    "$x=-\\dfrac{5}{3}$",
    "$x=-\\dfrac{2}{3}$",
    "$x=\\dfrac{5}{3}$"
   ],
   "pistes": [
    "Aquí no hi ha cap denominador: la $x$ ja només porta un coeficient al davant.",
    "Divideix els dos costats per $3$. Si la divisió no és exacta, deixa el resultat en forma de fracció, amb el seu signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZWwgbm9tYnJlIHF1ZSBhY29tcGFueWEgbGEgJHgkLCBwZXLDsiB0J2hhcyBzYWx0YXQgZWwgZGVub21pbmFkb3I6IGRlICRcXGRmcmFje2F4fXtifT1jJCBzdXJ0IHByaW1lciAkYXg9YlxcY2RvdCBjJCwgaSBub23DqXMgbGxhdm9ycyBlcyBkaXZpZGVpeCBwZXIgJGEkLiIsICIiLCAiUmV2aXNhIGVscyBzaWduZXM6IHNpIGVsIG51bWVyYWRvciBkZWwgY29lZmljaWVudCBkZSAkeCQgw6lzIG5lZ2F0aXUsIGVsIHJlc3VsdGF0IGZpbmFsIG4naGVyZXRhIGVsIHNpZ25lIHNlZ29ucyBsYSByZWdsYSBkZWxzIHNpZ25lcyBkZWwgcXVvY2llbnQuIiwgIkVuIHBhc3NhciBlbCBkZW5vbWluYWRvciBhIGwnYWx0cmUgY29zdGF0LCBtdWx0aXBsaWNhIFRPVCBlbCBtZW1icmUgZGUgbGEgZHJldGEsIG5vIG5vbcOpcyB1bmEgcGFydC4iXSwgImVyciI6IFsiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIkVOVEVSX01VTFRJUExJQ0FfREVOT01JTkFET1IiXSwgInJlcyI6IFsiJDN4PS01IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0tXFxkZnJhY3s1fXszfSQiXX0="
  },
  {
   "id": "76f",
   "ex": 76,
   "ap": "f",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{-3x}{2} = -25$",
   "opcions": [
    "$x=\\dfrac{25}{3}$",
    "$x=-25$",
    "$x=\\dfrac{50}{3}$",
    "$x=-\\dfrac{50}{3}$"
   ],
   "pistes": [
    "Multiplica els dos costats per $2$ per fer desaparèixer el denominador.",
    "Després de multiplicar per $2$ queda $-3x=2\\cdot(-25)$. Ara divideix els dos costats per $-3$, amb el seu signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZWwgbm9tYnJlIHF1ZSBhY29tcGFueWEgbGEgJHgkLCBwZXLDsiB0J2hhcyBzYWx0YXQgZWwgZGVub21pbmFkb3I6IGRlICRcXGRmcmFje2F4fXtifT1jJCBzdXJ0IHByaW1lciAkYXg9YlxcY2RvdCBjJCwgaSBub23DqXMgbGxhdm9ycyBlcyBkaXZpZGVpeCBwZXIgJGEkLiIsICJFbiBwYXNzYXIgZWwgZGVub21pbmFkb3IgYSBsJ2FsdHJlIGNvc3RhdCwgbXVsdGlwbGljYSBUT1QgZWwgbWVtYnJlIGRlIGxhIGRyZXRhLCBubyBub23DqXMgdW5hIHBhcnQuIiwgIiIsICJSZXZpc2EgZWxzIHNpZ25lczogc2kgZWwgbnVtZXJhZG9yIGRlbCBjb2VmaWNpZW50IGRlICR4JCDDqXMgbmVnYXRpdSwgZWwgcmVzdWx0YXQgZmluYWwgbidoZXJldGEgZWwgc2lnbmUgc2Vnb25zIGxhIHJlZ2xhIGRlbHMgc2lnbmVzIGRlbCBxdW9jaWVudC4iXSwgImVyciI6IFsiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJFxcZGZyYWN7LTN4fXsyfT0tMjUgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAtM3g9LTUwJCIsICIkeD1cXGRmcmFjezUwfXszfSQiXX0="
  },
  {
   "id": "77a",
   "ex": 77,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$\\dfrac{x-2}{5} = 1$",
   "opcions": [
    "$x=3$",
    "$x=\\dfrac{1}{5}$",
    "$x=7$",
    "$x=-3$"
   ],
   "pistes": [
    "Multiplica els dos costats per $5$ per eliminar el denominador.",
    "A l'esquerra et queda tot el numerador, $x-2$. Aïlla la $x$ i comprova el resultat substituint-lo a l'equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJQZXIgdHJldXJlIGVsIGRlbm9taW5hZG9yIGNhbCBtdWx0aXBsaWNhciBlbHMgRE9TIGNvc3RhdHMgcGVyICQ1JDogJHgtMj01JCwgbm8gZGl2aWRpciBlbCAkMiQgcGVyICQ1JC4iLCAiTm8gY2FsIGludmVydGlyIHJlczogbXVsdGlwbGljYSBlbHMgZG9zIGNvc3RhdHMgcGVyICQ1JCBwZXIgZWxpbWluYXIgZWwgZGVub21pbmFkb3IgaSBkZXNwcsOpcyBhw69sbGEgJHgkLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGVuIGHDr2xsYXIgJHgkOiBkZSAkeC0yPTUkIGVzIHBhc3NhIGVsICQtMiQgc3VtYW50IGEgbCdhbHRyZSBjb3N0YXQuIl0sICJlcnIiOiBbIlBST0RVQ1RFX0NSRVVBVCIsICJJTlZFUlRJREEiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIiRcXGRmcmFje3gtMn17NX09MSBcXDtcXExvbmdyaWdodGFycm93XFw7IHgtMj01JCIsICIkeD03JCJdfQ=="
  },
  {
   "id": "77b",
   "ex": 77,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$\\dfrac{3x+15}{6} = -7$",
   "opcions": [
    "$x=-9$",
    "$x=19$",
    "$x=-19$",
    "$x=-3$"
   ],
   "pistes": [
    "Multiplica els dos costats per $6$ per eliminar el denominador.",
    "Aïlla $x$: primer passa el $15$ a l'altre costat, després divideix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiBwYXNzYXIgZWwgJDE1JCBhIGwnYWx0cmUgY29zdGF0LCByZXZpc2EgZWwgc2lnbmU6ICQzeD0tNDItMTUkLiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGVsIHBhcyBmaW5hbCwgJDN4PS01NyQgZG9uYSB1bmEgJHgkIG5lZ2F0aXZhLiIsICIiLCAiUXVhbiBtdWx0aXBsaXF1ZXMgZWxzIGRvcyBjb3N0YXRzIHBlciAkNiQsIGVsICQtNyQgZGUgbGEgZHJldGEgdGFtYsOpIGVzIG11bHRpcGxpY2Egc2VuY2VyOiAkNlxcY2RvdCgtNyk9LTQyJC4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJTSUdORV9GSU5BTCIsICIiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiJdLCAicmVzIjogWyIkXFxkZnJhY3szeCsxNX17Nn09LTcgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAzeCsxNT0tNDIkIiwgIiQzeD0tNTckIiwgIiR4PS0xOSQiXX0="
  },
  {
   "id": "77c",
   "ex": 77,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$\\dfrac{3x}{2} + 20 = x + 25$",
   "opcions": [
    "$x=2$",
    "$x=10$",
    "$x=90$",
    "$x=-10$"
   ],
   "pistes": [
    "Multiplica tota l'equació pel m.c.m.$(2,1)=2$ per eliminar el denominador.",
    "Un cop sense fraccions, agrupa termes amb $x$ i números per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJEZXNwcsOpcyBkZSBtdWx0aXBsaWNhciBwZXIgJDIkIGkgYWdydXBhciwgcmV2aXNhIGwnYXJpdG3DqHRpY2EgZGVsIHBhcyAkM3gtMng9NTAtNDAkLiIsICIiLCAiRW4gbXVsdGlwbGljYXIgdG90YSBsJ2VxdWFjacOzIHBlbCBtLmMubS4sIGNhbCBtdWx0aXBsaWNhciBDQURBIHRlcm1lLCBpbmNsb2VudC1oaSBlbHMgcXVlIGphIG5vIHRlbmVuIGRlbm9taW5hZG9yLiIsICJSZXZpc2EgZWwgc2lnbmUgZmluYWw6IGRlICR4PTUwLTQwJCBzdXJ0IHVuIHJlc3VsdGF0IHBvc2l0aXUuIl0sICJlcnIiOiBbIkFSSVRNRVRJQ0FfUEFTX0lOVEVSTUVESSIsICIiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJNdWx0aXBsaXF1ZW0gcGVyICQyJDogJFxcZGZyYWN7M3h9ezJ9KzIwPXgrMjUgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAzeCs0MD0yeCs1MCQiLCAiJDN4LTJ4PTUwLTQwJCIsICIkeD0xMCQiXX0="
  },
  {
   "id": "77d",
   "ex": 77,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$\\dfrac{3x}{4} - 1 = 12 - 3x$",
   "opcions": [
    "$x=\\dfrac{52}{3}$",
    "$x=-\\dfrac{52}{15}$",
    "$x=\\dfrac{52}{15}$",
    "$x=\\dfrac{13}{3}$"
   ],
   "pistes": [
    "Multiplica tota l'equació pel m.c.m.$(4,1)=4$.",
    "Agrupa tots els termes amb $x$ a un costat (compte amb el $-3x$ de la dreta, que passa sumant)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJEZXNwcsOpcyBkJ2FncnVwYXIgdGVucyAkMTV4PTUyJDogZWwgJDE1JCBwcm92w6kgZGUgJDMrMTIkLCByZXZpc2EgYXF1ZXN0IHBhcyBkZSBzdW1hIGRlbHMgY29lZmljaWVudHMgZGUgJHgkLiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdDsgcmV2aXNhIHF1ZSBlbHMgZG9zIGNvc3RhdHMgZGUgbCdlcXVhY2nDsyAkMTV4PTUyJCBzaWd1aW4gcG9zaXRpdXMuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZW4gcGFzc2FyIGVsICQtNCQgaSBlbCAkNDgkIGFsIG1hdGVpeCBjb3N0YXQ6ICQ0OCs0PTUyJC4iXSwgImVyciI6IFsiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIlNJR05FX0ZJTkFMIiwgIiIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCJdLCAicmVzIjogWyJNdWx0aXBsaXF1ZW0gcGVyICQ0JDogJFxcZGZyYWN7M3h9ezR9LTE9MTItM3ggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAzeC00PTQ4LTEyeCQiLCAiJDN4KzEyeD00OCs0IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTV4PTUyJCIsICIkeD1cXGRmcmFjezUyfXsxNX0kIl19"
  },
  {
   "id": "75a",
   "ex": 75,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$6(x+11) = 40 + 6(x+2)$",
   "opcions": [
    "$x=0$",
    "$x=\\dfrac{26}{33}$",
    "Sense solució",
    "$x=-\\dfrac{26}{3}$"
   ],
   "pistes": [
    "Distribueix el $6$ a dins de cada parèntesi abans de res.",
    "Un cop distribuïts els parèntesis, agrupa els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkeD0wJCBubyBjb21wbGVpeCBsJ2VxdWFjacOzIG9yaWdpbmFsOiBzdWJzdGl0dWVpeC1sbyBpIGNvbXByb3ZhIHF1ZSBlbHMgZG9zIGNvc3RhdHMgbm8gY29pbmNpZGVpeGVuLiBFbiByZWFsaXRhdCBlbHMgdGVybWVzIGFtYiAkeCQgZXMgY2FuY2VswrdsZW4gaSBxdWVkYSB1bmEgaWd1YWx0YXQgZmFsc2E6IG5vIGhpIGhhIHNvbHVjacOzLiIsICJIYXMgb3BlcmF0IGVscyBuw7ptZXJvcyBhYmFucyBkZSBkaXN0cmlidWlyIGNvcnJlY3RhbWVudCBlbHMgcGFyw6hudGVzaXMuIERlc2Vudm9sdXBhIHByaW1lciAkNih4KzExKSQgaSAkNih4KzIpJCBwZXIgc2VwYXJhdDsgdmV1csOgcyBxdWUgZWxzIHRlcm1lcyBhbWIgJHgkIHMnYW51bMK3bGVuIGkgcXVlZGEgdW5hIGlndWFsdGF0IGZhbHNhLiIsICIiLCAiU2kgdG90IGp1c3QgY2Fudmllc3NpcyBkZSBiYW5kYSBzZW5zZSBkaXN0cmlidWlyIGLDqSBlbCBwYXLDqG50ZXNpIGV0IHNvcnRpcmlhIHVuIHZhbG9yLCBwZXLDsiByZXZpc2E6IGVuIGRlc2Vudm9sdXBhciBlbHMgZG9zIHBhcsOobnRlc2lzLCBlbHMgdGVybWVzIGFtYiAkeCQgZXMgY2FuY2VswrdsZW4gaSBxdWVkYSB1bmEgaWd1YWx0YXQgbnVtw6hyaWNhIGZhbHNhICgkNjZcXG5lNTIkKSwgYWl4w60gcXVlIGwnZXF1YWNpw7Mgbm8gdMOpIHNvbHVjacOzLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkpFUkFSUVVJQSIsICIiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVQiXSwgInJlcyI6IFsiJDYoeCsxMSk9NDArNih4KzIpIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNngrNjY9NDArNngrMTIkIiwgIiQ2eCs2Nj02eCs1MiQ6IGVscyB0ZXJtZXMgYW1iICR4JCBlcyBjYW5jZWzCt2xlbiBpIHF1ZWRhICQ2Nj01MiQsIHVuYSBpZ3VhbHRhdCBudW3DqHJpY2EgZmFsc2EuIiwgIkNvbSBxdWUgbm8gaGkgaGEgY2FwIHZhbG9yIGRlICR4JCBxdWUgZmFjaSBjZXJ0YSBhcXVlc3RhIGlndWFsdGF0LCBsJ2VxdWFjacOzIG5vIHTDqSBzb2x1Y2nDsy4iXX0="
  },
  {
   "id": "75b",
   "ex": 75,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$2(x-17) = x - 3(12-2x)$",
   "opcions": [
    "$x=-\\dfrac{2}{5}$",
    "$x=\\dfrac{2}{5}$",
    "$x=14$",
    "$x=\\dfrac{2}{11}$"
   ],
   "pistes": [
    "Distribueix els dos parèntesis: el de l'esquerra ($2$) i el de la dreta, on el $-3$ afecta els dos termes de dins.",
    "Un cop sense parèntesis, agrupa els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCByZXN1bHRhdCBmaW5hbCB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGVsIHBhcyBlbiBxdcOoIGFncnVwZXMgZWxzIHRlcm1lcyBpbmRlcGVuZGVudHMgYSB1biBjb3N0YXQuIiwgIiIsICJTJ2hhIHBlcmR1dCBhbGd1biB0ZXJtZSBlbiBhZ3J1cGFyOyByZXZpc2EgcXVlIGhhcyBwYXNzYXQgVE9UUyBlbHMgdGVybWVzIGFtYiAkeCQgYSB1biBjb3N0YXQgaSB0b3RzIGVscyBuw7ptZXJvcyBhIGwnYWx0cmUuIiwgIkVuIGRpc3RyaWJ1aXIgJC0zKDEyLTJ4KSQgZWwgc2lnbmUgJC0kIGhhIGQnYWZlY3RhciBlbHMgRE9TIHRlcm1lcyBkZSBkaW5zOiAkLTNcXGNkb3QxMj0tMzYkIGkgJC0zXFxjZG90KC0yeCk9KzZ4JC4iXSwgImVyciI6IFsiU0lHTkVfRklOQUwiLCAiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiTUVOWVNfUEFSRU5URVNJIl0sICJyZXMiOiBbIiQyKHgtMTcpPXgtMygxMi0yeCkgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAyeC0zND14LTM2KzZ4JCIsICIkMngtMzQ9N3gtMzYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAtMzQrMzY9N3gtMnggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAyPTV4JCIsICIkeD1cXGRmcmFjezJ9ezV9JCJdfQ=="
  },
  {
   "id": "75c",
   "ex": 75,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$x - 5(x-2) = 6$",
   "opcions": [
    "$x=1$",
    "$x=-\\dfrac{1}{4}$",
    "$x=-4$",
    "$x=2$"
   ],
   "pistes": [
    "Distribueix $-5(x-2)$: el signe $-$ afecta els dos termes de dins.",
    "Agrupa els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSBlcXVhY2nDsyBubyB0w6kgZGVub21pbmFkb3JzOiBubyBjYWwgY3JldWFyIHJlcywgbm9tw6lzIGRpc3RyaWJ1aXIgZWwgcGFyw6hudGVzaSBpIGHDr2xsYXIgJHgkLiIsICJFbCAkLTUkIGhhIGQnYWZlY3RhciBlbHMgRE9TIHRlcm1lcyBkZSBkaW5zIGRlbCBwYXLDqG50ZXNpOiAkLTVcXGNkb3QgeD0tNXgkIGkgJC01XFxjZG90KC0yKT0rMTAkLCBubyBub23DqXMgZWwgcHJpbWVyLiIsICJSZXZpc2EgZWwgc2lnbmUgZGVsICQxMCQgcXVlIHN1cnQgZGUgZGlzdHJpYnVpciAkLTUoeC0yKSQ6IGNvbSBxdWUgJC01XFxjZG90KC0yKT0rMTAkLCBlbCB0ZXJtZSBpbmRlcGVuZGVudCDDqXMgcG9zaXRpdS4iXSwgImVyciI6IFsiIiwgIlBST0RVQ1RFX0NSRVVBVCIsICJNRU5ZU19QQVJFTlRFU0kiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJHgtNSh4LTIpPTYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4LTV4KzEwPTYkIiwgIiQtNHg9Ni0xMCBcXDtcXExvbmdyaWdodGFycm93XFw7IC00eD0tNCQiLCAiJHg9MSQiXX0="
  },
  {
   "id": "75d",
   "ex": 75,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$120 = 2x - (15-7x)$",
   "opcions": [
    "$x=-15$",
    "$x=\\dfrac{5}{3}$",
    "$x=15$",
    "$x=\\dfrac{35}{3}$"
   ],
   "pistes": [
    "El $-$ davant del parèntesi $(15-7x)$ afecta els dos termes de dins.",
    "Un cop distribuït, agrupa tots els termes amb $x$ a un costat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmU6ICQtKDE1LTd4KT0tMTUrN3gkLCBlbCAkLSQgY2FudmlhIGVsIHNpZ25lIGRlbHMgRE9TIHRlcm1lcyBkZSBkaW5zLCBubyBub23DqXMgZGVsIHByaW1lci4iLCAiSGFzIGFycmliYXQgYSAkMTM1PTl4JCBwZXLDsiBlbmNhcmEgbm8gaGFzIGRpdmlkaXQgZWxzIGRvcyBjb3N0YXRzIHBlciAkOSQ6IGZhbHRhIGwnw7psdGltIHBhcy4iLCAiIiwgIlMnaGEgcGVyZHV0IHVuIHRlcm1lIGVuIGFncnVwYXI7IHJldmlzYSB1biBwZXIgdW4gZWxzIG7Dum1lcm9zIHF1ZSBwYXNzZW4gYSBsJ2FsdHJlIGNvc3RhdC4iXSwgImVyciI6IFsiTUVOWVNfUEFSRU5URVNJIiwgIkFJTExBTUVOVF9JTkNPTVBMRVQiLCAiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiJDEyMD0yeC0oMTUtN3gpIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTIwPTJ4LTE1Kzd4JCIsICIkMTIwKzE1PTl4IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTM1PTl4JCIsICIkeD0xNSQiXX0="
  },
  {
   "id": "75e",
   "ex": 75,
   "ap": "e",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$5(x+4) = 7(x-2)$",
   "opcions": [
    "$x=\\dfrac{17}{6}$",
    "$x=17$",
    "$x=-17$",
    "$x=3$"
   ],
   "pistes": [
    "Distribueix els dos parèntesis per separat.",
    "Agrupa els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgYWdydXBhdCBtYWxhbWVudCBlbHMgdGVybWVzIGFtYiAkeCQgYW1iIGVscyB0ZXJtZXMgaW5kZXBlbmRlbnRzOyByZXZpc2EgcXVpbnMgdmFuIGp1bnRzIGEgY2FkYSBjb3N0YXQuIiwgIiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGEgcXVpbiBjb3N0YXQgaGFzIHBhc3NhdCBlbHMgdGVybWVzIGFtYiAkeCQgaSBxdWluIHNpZ25lIGVscyBjb3JyZXNwb24uIiwgIlJldmlzYSBxdWUgaGFzIGRpc3RyaWJ1w690IGLDqSBlbHMgRE9TIHBhcsOobnRlc2lzIGFiYW5zIGQnYWdydXBhcjogJDUoeCs0KT01eCsyMCQgaSAkNyh4LTIpPTd4LTE0JC4iXSwgImVyciI6IFsiR1JBVVNfTUFMX0FHUlVQQVRTIiwgIiIsICJTSUdORV9GSU5BTCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIiQ1KHgrNCk9Nyh4LTIpIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNXgrMjA9N3gtMTQkIiwgIiQyMCsxND03eC01eCBcXDtcXExvbmdyaWdodGFycm93XFw7IDM0PTJ4JCIsICIkeD0xNyQiXX0="
  },
  {
   "id": "75f",
   "ex": 75,
   "ap": "f",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$3(x+7) - 6 = 2(x+8)$",
   "opcions": [
    "$x=\\dfrac{37}{5}$",
    "$x=-1$",
    "$x=1$",
    "$x=31$"
   ],
   "pistes": [
    "Distribueix el parèntesi de l'esquerra ($3$) i el de la dreta ($2$).",
    "El $-6$ no forma part de cap parèntesi: es queda tal qual en agrupar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTJ2hhIHBlcmR1dCBhbGd1biB0ZXJtZSBpbmRlcGVuZGVudCBwZWwgY2Ftw607IHJldmlzYSdscyB0b3RzIHVuIHBlciB1biBhYmFucyBkJ2HDr2xsYXIgJHgkLiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdDogdG9ybmEgYSByZXZpc2FyIGVsIHBhcyBmaW5hbCwgJDN4LTJ4PTE2LTE1JC4iLCAiIiwgIlJldmlzYSBlbCBzaWduZSBkZWwgJC02JDogbm8gZm9ybWEgcGFydCBkZWwgcGFyw6hudGVzaSwgamEgdmUgcmVzdGFudCBkaXJlY3RhbWVudCBpIHMnaGEgZGUgbWFudGVuaXIgdGFsIHF1YWwgZW4gYWdydXBhci4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJTSUdORV9GSU5BTCIsICIiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJDMoeCs3KS02PTIoeCs4KSBcXDtcXExvbmdyaWdodGFycm93XFw7IDN4KzIxLTY9MngrMTYkIiwgIiQzeCsxNT0yeCsxNiBcXDtcXExvbmdyaWdodGFycm93XFw7IDN4LTJ4PTE2LTE1JCIsICIkeD0xJCJdfQ=="
  },
  {
   "id": "78a",
   "ex": 78,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{3x}{5} + 7 = \\dfrac{2x}{6} + 9$",
   "opcions": [
    "$x=\\dfrac{15}{7}$",
    "$x=\\dfrac{15}{2}$",
    "$x=-\\dfrac{15}{2}$",
    "$x=\\dfrac{1}{2}$"
   ],
   "pistes": [
    "El m.c.m.$(5,6)=30$: multiplica tota l'equació per $30$.",
    "Un cop sense denominadors, agrupa termes amb $x$ i números."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgYXJyaWJhdCBhICQ4eD02MCQsIHBlcsOyIGVuY2FyYSBubyBoYXMgc2ltcGxpZmljYXQgbGEgZnJhY2Npw7MgJFxcZnJhY3s2MH17OH0kIGFsIG3DoHhpbTogZGl2aWRlaXggbnVtZXJhZG9yIGkgZGVub21pbmFkb3IgZW50cmUgJDQkLiIsICIiLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6ICQ4eD02MCQgZG9uYSB1bmEgJHgkIHBvc2l0aXZhLiIsICJFbiBwYXNzYXIgZGUgZGVub21pbmFkb3IgJDUkIChvICQ2JCkgYWwgY29tw7ogJDMwJCwgY2FkYSBudW1lcmFkb3IgcydoYSBkZSBtdWx0aXBsaWNhciBwZWwgbWF0ZWl4IGZhY3RvciBxdWUgZWwgc2V1IGRlbm9taW5hZG9yOiAkXFxmcmFjezN4fXs1fVxcdG9cXGZyYWN7MTh4fXszMH0kLCBubyAkXFxmcmFjezN4fXszMH0kLiJdLCAiZXJyIjogWyJTSU1QTElGSUNBQ0lPX0lOQ09NUExFVEEiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIk5VTUVSQURPUlNfU0VOU0VfQUpVU1RBUiJdLCAicmVzIjogWyJNLmMubS4kKDUsNik9MzAkOiAkXFxkZnJhY3szeH17NX0rNz1cXGRmcmFjezJ4fXs2fSs5IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTh4KzIxMD0xMHgrMjcwJCIsICIkMTh4LTEweD0yNzAtMjEwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgOHg9NjAkIiwgIiR4PVxcZGZyYWN7NjB9ezh9PVxcZGZyYWN7MTV9ezJ9JCJdfQ=="
  },
  {
   "id": "78b",
   "ex": 78,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{x+2}{3} = 5x - 46$",
   "opcions": [
    "$x=\\dfrac{35}{4}$",
    "$x=\\dfrac{68}{7}$",
    "$x=10$",
    "$x=-10$"
   ],
   "pistes": [
    "Multiplica els dos costats per $3$ per eliminar el denominador.",
    "Agrupa tots els termes amb $x$ a un costat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgcXVhbnRzIHRlcm1lcyBhbWIgJHgkIHF1ZWRlbiBlbiB0b3RhbCBhIGxhIGRyZXRhOiAkMTV4LXg9MTR4JCwgbm8gJDE2eCQuIiwgIlJldmlzYSBsJ2FyaXRtw6h0aWNhIGZpbmFsOiAkMisxMzg9MTQwJCwgaSAkMTQwOjE0PTEwJCBleGFjdGUuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZGVsICQxMzgkOiBlbiBtdWx0aXBsaWNhciAkM1xcY2RvdCg1eC00NikkIGVsIHJlc3VsdGF0IMOpcyAkMTV4LTEzOCQsIGkgYXF1ZXN0ICQtMTM4JCBwYXNzYSBzdW1hbnQgYSBsJ2VzcXVlcnJhLiJdLCAiZXJyIjogWyJHUkFVX1BST0RVQ1RFX01BTCIsICJBUklUTUVUSUNBX1BBU19JTlRFUk1FREkiLCAiIiwgIlNJR05FX1RFUk1FX0lOREVQRU5ERU5UIl0sICJyZXMiOiBbIiRcXGRmcmFje3grMn17M309NXgtNDYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4KzI9MTV4LTEzOCQiLCAiJDIrMTM4PTE1eC14IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTQwPTE0eCQiLCAiJHg9MTAkIl19"
  },
  {
   "id": "78c",
   "ex": 78,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$x - \\dfrac{x+4}{5} = 1 + \\dfrac{x}{2}$",
   "opcions": [
    "$x=2$",
    "$x=6$",
    "$x=-6$",
    "$x=\\dfrac{18}{13}$"
   ],
   "pistes": [
    "El m.c.m.$(5,2)=10$: multiplica tota l'equació per $10$.",
    "Compte amb el signe: $-\\frac{x+4}{5}$ multiplicat per $10$ dona $-2(x+4)$, i el parèntesi s'ha de distribuir sencer."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbiBtdWx0aXBsaWNhciBwZWwgbS5jLm0uJCg1LDIpPTEwJCwgY2FkYSB0ZXJtZSBzJ2hhIGRlIG11bHRpcGxpY2FyIHBlbCBmYWN0b3IgcXVlIGxpIGNvcnJlc3BvbiBzZWdvbnMgZWwgc2V1IHByb3BpIGRlbm9taW5hZG9yLCBubyB0b3RzIHBlbCBtYXRlaXggbm9tYnJlLiIsICIiLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6ICQzeD0xOCQgZG9uYSB1bmEgJHgkIHBvc2l0aXZhLiIsICJSZXZpc2EgcXVlIGhhcyBhZ3J1cGF0IGLDqSBlbHMgdGVybWVzIGFtYiAkeCQ6ICQxMHgtMngtNXg9M3gkLCBubyB1biBhbHRyZSBjb2VmaWNpZW50LiJdLCAiZXJyIjogWyJOVU1FUkFET1JTX1NFTlNFX0FKVVNUQVIiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIkFHUlVQQUNJT19URVJNRVNfTUFMIl0sICJyZXMiOiBbIk0uYy5tLiQoNSwyKT0xMCQ6ICR4LVxcZGZyYWN7eCs0fXs1fT0xK1xcZGZyYWN7eH17Mn0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAxMHgtMih4KzQpPTEwKzV4JCIsICIkMTB4LTJ4LTg9MTArNXggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA4eC01eD0xMCs4JCIsICIkM3g9MTggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PTYkIl19"
  },
  {
   "id": "78d",
   "ex": 78,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{x+8}{2} - \\dfrac{x-4}{6} = 2$",
   "opcions": [
    "$x=8$",
    "$x=2$",
    "$x=-4$",
    "$x=-8$"
   ],
   "pistes": [
    "El m.c.m.$(2,6)=6$: multiplica tota l'equació per $6$.",
    "El $-\\frac{x-4}{6}$ es converteix en $-(x-4)$: distribueix el signe menys als dos termes."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZmluYWw6IGRlICQyeD0tMTYkIHN1cnQgdW5hICR4JCBuZWdhdGl2YS4iLCAiUmV2aXNhIHF1ZSBoYXMgcGFzc2F0IFRPVFMgZWxzIG7Dum1lcm9zIGEgbCdlc3F1ZXJyYTogJDEyLTI4PS0xNiQsIG5vIHVuIGFsdHJlIHZhbG9yLiIsICJFbiBkaXN0cmlidWlyICQtKHgtNCkkIChxdWUgdmUgZGUgJC1cXGZyYWN7eC00fXs2fVxcY2RvdDYkKSwgZWwgc2lnbmUgJC0kIGFmZWN0YSBlbHMgZG9zIHRlcm1lczogJC14KzQkLCBubyBub23DqXMgZWwgcHJpbWVyLiIsICIiXSwgImVyciI6IFsiU0lHTkVfRklOQUwiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJNRU5ZU19QQVJFTlRFU0kiLCAiIl0sICJyZXMiOiBbIk0uYy5tLiQoMiw2KT02JDogJFxcZGZyYWN7eCs4fXsyfS1cXGRmcmFje3gtNH17Nn09MiBcXDtcXExvbmdyaWdodGFycm93XFw7IDMoeCs4KS0oeC00KT0xMiQiLCAiJDN4KzI0LXgrND0xMiBcXDtcXExvbmdyaWdodGFycm93XFw7IDJ4PTEyLTI4JCIsICIkMng9LTE2IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0tOCQiXX0="
  },
  {
   "id": "78e",
   "ex": 78,
   "ap": "e",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{x-5}{5} + \\dfrac{8-x}{2} + \\dfrac{2x-10}{2} = 3$",
   "opcions": [
    "$x=\\dfrac{50}{7}$",
    "$x=\\dfrac{50}{17}$",
    "$x=\\dfrac{30}{7}$",
    "$x=-\\dfrac{50}{7}$"
   ],
   "pistes": [
    "El m.c.m.$(5,2,2)=10$: multiplica tota l'equació per $10$.",
    "Un cop sense denominadors, agrupa per separat els termes amb $x$ i els números."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGxhIHN1bWEgZGVscyBjb2VmaWNpZW50cyBkZSAkeCQ6ICQyeC01eCsxMHg9N3gkLCBubyB1biBhbHRyZSBjb2VmaWNpZW50LiIsICJFbiBhZ3J1cGFyIGVscyBuw7ptZXJvcyBkZSBsJ2VzcXVlcnJhIHJldmlzYSB1biBhIHVuOiAkLTEwKzQwLTUwPS0yMCQsIG5vIHVuIGFsdHJlIHZhbG9yLiIsICJSZXZpc2EgZWwgc2lnbmUgZmluYWw6ICQ3eD01MCQgZG9uYSB1bmEgJHgkIHBvc2l0aXZhLiJdLCAiZXJyIjogWyIiLCAiR1JBVVNfTUFMX0FHUlVQQVRTIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiTS5jLm0uJCg1LDIsMik9MTAkOiBtdWx0aXBsaXF1ZW0gY2FkYSB0ZXJtZSBwZWwgZmFjdG9yIHF1ZSBsaSBjb3JyZXNwb246ICQyKHgtNSkrNSg4LXgpKzUoMngtMTApPTMwJCIsICIkMngtMTArNDAtNXgrMTB4LTUwPTMwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgN3gtMjA9MzAkIiwgIiQ3eD01MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s1MH17N30kIl19"
  },
  {
   "id": "78f",
   "ex": 78,
   "ap": "f",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{x-10}{2} - \\dfrac{x-20}{4} - \\dfrac{x-30}{3} = 5$",
   "opcions": [
    "$x=180$",
    "$x=20$",
    "$x=-60$",
    "$x=60$"
   ],
   "pistes": [
    "El m.c.m.$(2,4,3)=12$: multiplica tota l'equació per $12$.",
    "Compte amb els signes en distribuir cada parèntesi que resulta de multiplicar pel m.c.m."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgcGFzICQteCsxMjA9NjAkOiBlbCAkMTIwJCBoYSBkZSByZXN0YXIgYSBiYW5kYSBpIGJhbmRhLCBubyBzdW1hci1zZSBkdWVzIHZlZ2FkZXMuIiwgIlF1YW4gZGlzdHJpYnVlaXhlcyAkLTMoeC0yMCkkIGkgJC00KHgtMzApJCwgZWwgc2lnbmUgJC0kIGhhIGQnYWZlY3RhciBlbHMgZG9zIHRlcm1lcyBkZSBjYWRhIHBhcsOobnRlc2kuIiwgIlJldmlzYSBlbCBzaWduZSBmaW5hbDogZGUgJC14PS02MCQgc3VydCB1bmEgJHgkIHBvc2l0aXZhLiIsICIiXSwgImVyciI6IFsiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiTUVOWVNfUEFSRU5URVNJIiwgIlNJR05FX0ZJTkFMIiwgIiJdLCAicmVzIjogWyJNLmMubS4kKDIsNCwzKT0xMiQ6ICQ2KHgtMTApLTMoeC0yMCktNCh4LTMwKT02MCQiLCAiJDZ4LTYwLTN4KzYwLTR4KzEyMD02MCBcXDtcXExvbmdyaWdodGFycm93XFw7IC14KzEyMD02MCQiLCAiJC14PS02MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9NjAkIl19"
  },
  {
   "id": "79a",
   "ex": 79,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{2x-10}{3} - \\dfrac{3(x-12)}{4} = -1$",
   "opcions": [
    "$x=-80$",
    "$x=48$",
    "$x=80$",
    "$x=37$"
   ],
   "pistes": [
    "El m.c.m.$(3,4)=12$: multiplica tota l'equació per $12$.",
    "Distribueix amb cura: el $-3(x-12)$ multiplicat per $3$ dona $-9(x-12)=-9x+108$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZmluYWw6IGRlICQteD0tODAkIHN1cnQgdW5hICR4JCBwb3NpdGl2YS4iLCAiUmV2aXNhIGVsIHBhcyAkLXgrNjg9LTEyJDogY2FsIGHDr2xsYXIgY29ycmVjdGFtZW50IHBhc3NhbnQgZWwgJDY4JCBhIGwnYWx0cmUgY29zdGF0LiIsICIiLCAiRW4gZGlzdHJpYnVpciAkLTNcXGNkb3QzKHgtMTIpJCwgZWwgZmFjdG9yICQ5JCBoYSBkZSBtdWx0aXBsaWNhciBlbHMgRE9TIHRlcm1lcyBkZWwgcGFyw6hudGVzaTogJDl4LTEwOCQuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiXSwgInJlcyI6IFsiTS5jLm0uJCgzLDQpPTEyJDogJDQoMngtMTApLTNcXGNkb3QzKHgtMTIpPS0xMiQiLCAiJDh4LTQwLTl4KzEwOD0tMTIgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAteCs2OD0tMTIkIiwgIiQteD0tODAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PTgwJCJdfQ=="
  },
  {
   "id": "79b",
   "ex": 79,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{-3x-3}{5} = 3 - 4(x+2)$",
   "opcions": [
    "$x=\\dfrac{22}{17}$",
    "$x=-\\dfrac{22}{17}$",
    "$x=-\\dfrac{28}{17}$",
    "$x=-\\dfrac{22}{23}$"
   ],
   "pistes": [
    "Multiplica els dos costats per $5$ per eliminar el denominador.",
    "Distribueix $5\\cdot(3-4(x+2))$ amb cura: primer el $-4(x+2)$, després el $5$ per tot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmU6ICQxN3g9LTIyJCBkb25hIHVuYSAkeCQgbmVnYXRpdmEuIiwgIiIsICJFbiBkaXN0cmlidWlyICQtNCh4KzIpJCwgZWwgc2lnbmUgJC0kIGFmZWN0YSBlbHMgZG9zIHRlcm1lczogJC00eC04JCwgbm8gbm9tw6lzIGVsIHByaW1lci4iLCAiUmV2aXNhIGxhIHN1bWEgZmluYWwgZGVscyBjb2VmaWNpZW50cyBkZSAkeCQ6ICQtM3grMjB4PTE3eCQsIG5vIHVuIGFsdHJlIGNvZWZpY2llbnQuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIiIsICJNRU5ZU19QQVJFTlRFU0kiLCAiR1JBVVNfTUFMX0FHUlVQQVRTIl0sICJyZXMiOiBbIk11bHRpcGxpcXVlbSBwZXIgJDUkOiAkLTN4LTM9NSgzLTR4LTgpJCIsICIkLTN4LTM9MTUtMjB4LTQwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgLTN4LTM9LTIweC0yNSQiLCAiJC0zeCsyMHg9LTI1KzMgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAxN3g9LTIyIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0tXFxkZnJhY3syMn17MTd9JCJdfQ=="
  },
  {
   "id": "79c",
   "ex": 79,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{2x-5}{5} + \\dfrac{x+1}{4} = 20 - x$",
   "opcions": [
    "$x=\\dfrac{415}{13}$",
    "$x=\\dfrac{415}{33}$",
    "$x=\\dfrac{400}{33}$",
    "$x=-\\dfrac{415}{33}$"
   ],
   "pistes": [
    "El m.c.m.$(5,4)=20$: multiplica tota l'equació per $20$.",
    "Un cop sense denominadors, passa tots els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgbGEgc3VtYSBkZWxzIGNvZWZpY2llbnRzIGRlICR4JCBhbCBwYXMgZmluYWw6ICQxM3grMjB4PTMzeCQsIG5vIHVuIGFsdHJlIGNvZWZpY2llbnQuIiwgIiIsICJSZXZpc2EgbGEgc3VtYSBkZWxzIG7Dum1lcm9zIGEgbCdlc3F1ZXJyYTogJC0yMCs1PS0xNSQsIGkgZGVzcHLDqXMgJDQwMCsxNT00MTUkLiIsICJSZXZpc2EgZWwgc2lnbmUgZmluYWw6ICQzM3g9NDE1JCBkb25hIHVuYSAkeCQgcG9zaXRpdmEuIl0sICJlcnIiOiBbIkdSQVVTX01BTF9BR1JVUEFUUyIsICIiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJNLmMubS4kKDUsNCk9MjAkOiAkNCgyeC01KSs1KHgrMSk9MjAoMjAteCkkIiwgIiQ4eC0yMCs1eCs1PTQwMC0yMHggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAxM3gtMTU9NDAwLTIweCQiLCAiJDEzeCsyMHg9NDAwKzE1IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMzN4PTQxNSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s0MTV9ezMzfSQiXX0="
  },
  {
   "id": "79d",
   "ex": 79,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{3-x}{7} - x = \\dfrac{3+2(x-1)}{14}$",
   "opcions": [
    "$x=\\dfrac{5}{18}$",
    "$x=\\dfrac{1}{18}$",
    "$x=\\dfrac{5}{14}$",
    "$x=-\\dfrac{5}{18}$"
   ],
   "pistes": [
    "El m.c.m.$(7,14)=14$: multiplica tota l'equació per $14$.",
    "El numerador de la dreta ja porta un parèntesi a dins, $3+2(x-1)$: distribueix-lo abans de simplificar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGxhIHN1bWEgZmluYWw6ICQxLTY9LTUkLCBubyB1biBhbHRyZSB2YWxvci4iLCAiUmV2aXNhIGVsIHRlcm1lICQyKHgtMSkkIGRpbnMgZGVsIG51bWVyYWRvciBkZSBsYSBkcmV0YTogJDJ4LTIkLCBpIGRlc3Byw6lzICQzKzJ4LTI9MngrMSQuIiwgIlJldmlzYSBlbCBzaWduZSBmaW5hbDogJC0xOHg9LTUkIGRvbmEgdW5hICR4JCBwb3NpdGl2YS4iXSwgImVyciI6IFsiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiRElTVFJJQlVDSU9fSU5DT01QTEVUQSIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJNLmMubS4kKDcsMTQpPTE0JDogJDIoMy14KS0xNHg9MysyKHgtMSkkIiwgIiQ2LTJ4LTE0eD0zKzJ4LTIgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA2LTE2eD0xKzJ4JCIsICIkLTE2eC0yeD0xLTYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAtMTh4PS01IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD1cXGRmcmFjezV9ezE4fSQiXX0="
  },
  {
   "id": "79e",
   "ex": 79,
   "ap": "e",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{4x-6}{10} + 2x = 21 - \\dfrac{3(x+1)}{12}$",
   "opcions": [
    "$x=\\dfrac{405}{53}$",
    "$x=-\\dfrac{427}{53}$",
    "$x=\\dfrac{427}{53}$",
    "$x=\\dfrac{427}{159}$"
   ],
   "pistes": [
    "El m.c.m.$(10,1,12)=60$: multiplica tota l'equació per $60$.",
    "Un cop sense denominadors, agrupa termes amb $x$ i números, i simplifica la fracció final al màxim."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgdGVybWUgaW5kZXBlbmRlbnQ6IGVsICQtMzYkIGRlIGwnZXNxdWVycmEgcGFzc2EgYSBsJ2FsdHJlIG1lbWJyZSBTVU1BTlQsICQxMjQ1KzM2PTEyODEkLiBBbWIgJDE1OXg9MTIxNSQgc29ydGlyaWEgYXF1ZXN0IHZhbG9yLCBwZXLDsiBsJ2VxdWFjacOzIGRvbmEgJDE1OXg9MTI4MSQuIiwgIlJldmlzYSBlbCBzaWduZSBmaW5hbDogJDE1OXg9MTI4MSQgZG9uYSB1bmEgJHgkIHBvc2l0aXZhLiIsICIiLCAiSGFzIHNpbXBsaWZpY2F0IG5vbcOpcyBlbCBudW1lcmFkb3IgaSBubyBlbCBkZW5vbWluYWRvcjogJFxcZnJhY3sxMjgxfXsxNTl9JCBzJ2hhIGRlIGRpdmlkaXIgcGVyICQzJCBhbHMgRE9TIGNvc3RhdHMgZGUgbGEgZnJhY2Npw7MgcGVyIGFycmliYXIgYSAkXFxmcmFjezQyN317NTN9JC4iXSwgImVyciI6IFsiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiU0lHTkVfRklOQUwiLCAiIiwgIlNJTVBMSUZJQ0FDSU9fUEFSQ0lBTCJdLCAicmVzIjogWyJNLmMubS4kKDEwLDEsMTIpPTYwJDogJDYoNHgtNikrMTIweD0xMjYwLTE1KHgrMSkkIiwgIiQyNHgtMzYrMTIweD0xMjYwLTE1eC0xNSBcXDtcXExvbmdyaWdodGFycm93XFw7IDE0NHgtMzY9MTI0NS0xNXgkIiwgIiQxNDR4KzE1eD0xMjQ1KzM2IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTU5eD0xMjgxIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD1cXGRmcmFjezEyODF9ezE1OX09XFxkZnJhY3s0Mjd9ezUzfSQiXX0="
  }
 ]
};
