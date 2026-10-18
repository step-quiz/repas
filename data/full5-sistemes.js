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
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "ENTER_MULTIPLICA_DENOMINADOR": "En multiplicar un enter per una fracció, l'enter multiplica NOMÉS el numerador; el denominador no canvia.",
  "EQUACIO_NO_SIMPLIFICADA": "Simplifica cada equació per separat (parèntesis, termes semblants, denominadors) ABANS de combinar-les: si no, el sistema que resols no és el de l'enunciat.",
  "FACTOR_COMU_MAL_DIVIDIT": "En treure factor comú, cada terme s'ha de dividir pel factor comú: algun terme de dins del parèntesi no s'ha dividit correctament.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIMPLIFICACIO_INCOMPLETA": "Encara es pot simplificar més: busca el m.c.d. del numerador i el denominador i divideix-los pel m.c.d. d'un sol cop.",
  "SUBSTITUCIO_MAL_FETA": "La primera part surt bé, però en substituir per trobar la segona hi ha un error. Comprova el resultat posant-lo a l'expressió original.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "353a",
   "ex": 353,
   "ap": "a",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Comprova si el parell de valors donat és solució d'aquest sistema substituint-lo a les dues equacions.",
   "enunciat": "$\\left.\\begin{array}{r}x+y=5\\\\ x-y=1\\end{array}\\right\\}\\qquad x=3,\\ y=2$",
   "opcions": [
    "No: només compleix la primera",
    "No: no en compleix cap",
    "Sí: compleix les dues equacions",
    "No: només compleix la segona"
   ],
   "pistes": [
    "Posa $x=3$ i $y=2$ a la primera equació. Dona $5$?",
    "Fes el mateix a la segona. Dona $1$?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJUb3JuYSBhIGZlciBsYSBzZWdvbmE6ICQzLTI9MSQuIFRhbWLDqSBlcyBjb21wbGVpeC4iLCAiJDMrMj01JCBpICQzLTI9MSQ6IGVzIGNvbXBsZWl4ZW4gdG90ZXMgZHVlcy4iLCAiIiwgIlRvcm5hIGEgZmVyIGxhIHByaW1lcmE6ICQzKzI9NSQuIFRhbWLDqSBlcyBjb21wbGVpeC4iXSwgImVyciI6IFsiU1VCU1RJVFVDSU9fTUFMX0ZFVEEiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIiIsICJTVUJTVElUVUNJT19NQUxfRkVUQSJdLCAicmVzIjogWyJQcmltZXJhOiAkMysyPTUkIOKckyIsICJTZWdvbmE6ICQzLTI9MSQg4pyTIiwgIkNvbXBsZWl4IHRvdGVzIGR1ZXM6IMOpcyBzb2x1Y2nDsy4iXX0="
  },
  {
   "id": "353b",
   "ex": 353,
   "ap": "b",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Comprova si el parell de valors donat és solució d'aquest sistema substituint-lo a les dues equacions.",
   "enunciat": "$\\left.\\begin{array}{r}x+y=6\\\\ 2x-y=1\\end{array}\\right\\}\\qquad x=4,\\ y=2$",
   "opcions": [
    "No: compleix la segona però no la primera",
    "No: no en compleix cap",
    "No: compleix la primera però no la segona",
    "Sí: compleix les dues equacions"
   ],
   "pistes": [
    "Posa $x=4$ i $y=2$ a la primera equació. Dona $6$?",
    "Fes el mateix a la segona: $2\\cdot4-2$. Dona $1$?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyLDiXMgYWwgcmV2w6lzOiAkNCsyPTYkIGVzIGNvbXBsZWl4LCBpICQyXFxjZG90NC0yPTZcXG5lMSQgbm8uIiwgIlRvcm5hIGEgZmVyIGxhIHByaW1lcmE6ICQ0KzI9NiQuIEFxdWVzdGEgc8OtIHF1ZSBlcyBjb21wbGVpeC4iLCAiIiwgIkhhcyBjb21wcm92YXQgbm9tw6lzIGxhIHByaW1lcmEuIEEgbGEgc2Vnb25hLCAkMlxcY2RvdDQtMj02JCwgaSBubyAkMSQuIFBlciBzZXIgc29sdWNpw7MgaGEgZGUgY29tcGxpciBUT1RFUyBkdWVzIGVxdWFjaW9ucy4iXSwgImVyciI6IFsiU1VCU1RJVFVDSU9fTUFMX0ZFVEEiLCAiU1VCU1RJVFVDSU9fTUFMX0ZFVEEiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyJQcmltZXJhOiAkNCsyPTYkIOKckyIsICJTZWdvbmE6ICQyXFxjZG90NC0yPTZcXG5lMSQg4pyXIiwgIk5vIGNvbXBsZWl4IGxhIHNlZ29uYTogbm8gw6lzIHNvbHVjacOzIGRlbCBzaXN0ZW1hLiJdfQ=="
  },
  {
   "id": "85a",
   "ex": 85,
   "ap": "a",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x+y=2\\\\ x-y=6\\end{array}\\right\\}$",
   "opcions": [
    "$x=4,\\ y=-2$",
    "$x=-2,\\ y=4$",
    "$x=8,\\ y=-6$",
    "$x=4,\\ y=2$"
   ],
   "pistes": [
    "Suma les dues equacions directament: els termes en $y$ són oposats i s'anul·len (mètode de reducció).",
    "Un cop trobada $x$, substitueix-la a qualsevol de les dues equacions per trobar $y$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCBlbHMgdmFsb3JzIGRlICR4JCBpICR5JDogdG9ybmEgYSBzdWJzdGl0dWlyIGVsIHZhbG9yIHRyb2JhdCBhIHVuYSBkZSBsZXMgZXF1YWNpb25zIG9yaWdpbmFscyBwZXIgY29tcHJvdmFyIHF1aW4gw6lzIHF1aW4uIiwgIkRlc3Byw6lzIGRlIHN1bWFyIGxlcyBkdWVzIGVxdWFjaW9ucyB0J2hhIGRlIHF1ZWRhciAkMng9OCQ6IGVuY2FyYSBmYWx0YSBkaXZpZGlyIGVudHJlICQyJCBwZXIgYcOvbGxhciAkeCQuIiwgIlVuIGNvcCB0cm9iYXQgJHg9NCQsIHN1YnN0aXR1ZWl4LWxvIGEgJHgreT0yJCBhbWIgY3VyYSBhbWIgZWxzIHNpZ25lczogJDQreT0yIFxcUmlnaHRhcnJvdyB5PS0yJC4iXSwgImVyciI6IFsiIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIlN1bWFudCBsZXMgZHVlcyBlcXVhY2lvbnMsIGxhICR5JCBzJ2VsaW1pbmE6ICRcXGJlZ2lue2FycmF5fXtyfXgreT0yXFxcXHgteT02XFxcXFxcaGxpbmUgMng9OFxcZW5ke2FycmF5fSQiLCAiJHg9NCQiLCAiJHk9Mi00PS0yJCJdfQ=="
  },
  {
   "id": "85b",
   "ex": 85,
   "ap": "b",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}2x+3y=4\\\\ 2x-3y=4\\end{array}\\right\\}$",
   "opcions": [
    "$x=2,\\ y=0$",
    "$x=0,\\ y=2$",
    "$x=2,\\ y=\\dfrac{4}{3}$",
    "$x=4,\\ y=0$"
   ],
   "pistes": [
    "Els coeficients de $y$ ja són oposats: suma les dues equacions directament (reducció).",
    "Un cop trobada $x$, substitueix per trobar $y$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCBlbHMgdmFsb3JzIGRlICR4JCBpICR5JDogdG9ybmEgYSBzdWJzdGl0dWlyIGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsIHBlciBjb25maXJtYXIgcXVpbiB2YWxvciDDqXMgZGUgcXVpbmEgaW5jw7Jnbml0YS4iLCAiVW4gY29wICR4PTIkLCBzdWJzdGl0dWVpeCBhICQyeCszeT00JDogJDQrM3k9NCBcXFJpZ2h0YXJyb3cgM3k9MCBcXFJpZ2h0YXJyb3cgeT0wJC4iLCAiRGVzcHLDqXMgZGUgc3VtYXIgbGVzIGVxdWFjaW9ucyB0J2hhIGRlIHF1ZWRhciAkNHg9OCQ6IGVuY2FyYSBmYWx0YSBkaXZpZGlyIGVudHJlICQ0JCBwZXIgYcOvbGxhciAkeCQuIl0sICJlcnIiOiBbIiIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICJTSUdORV9GSU5BTCIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCJdLCAicmVzIjogWyJTdW1hbnQgbGVzIGVxdWFjaW9ucywgbGEgJHkkIHMnZWxpbWluYTogJFxcYmVnaW57YXJyYXl9e3J9MngrM3k9NFxcXFwyeC0zeT00XFxcXFxcaGxpbmUgNHg9OFxcZW5ke2FycmF5fSQiLCAiJHg9MiQiLCAiJDN5PTQtMlxcY2RvdDI9MCBcXFJpZ2h0YXJyb3cgeT0wJCJdfQ=="
  },
  {
   "id": "85c",
   "ex": 85,
   "ap": "c",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x+2y=5\\\\ 2x+5y=11\\end{array}\\right\\}$",
   "opcions": [
    "$x=3,\\ y=1$",
    "$x=1,\\ y=3$",
    "$x=-5,\\ y=1$",
    "$x=3,\\ y=-1$"
   ],
   "pistes": [
    "Multiplica la primera equació per $-2$ perquè els coeficients de $x$ es cancel·lin en sumar (reducció).",
    "Un cop trobada $y$, substitueix a qualsevol equació original per trobar $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IHN1YnN0aXR1ZWl4IGEgbCdlcXVhY2nDsyBvcmlnaW5hbCBwZXIgY29tcHJvdmFyIHF1aW4gdmFsb3IgY29ycmVzcG9uIGEgcXVpbmEgaW5jw7Jnbml0YS4iLCAiRW4gbXVsdGlwbGljYXIgbGEgcHJpbWVyYSBlcXVhY2nDsyBwZXIgJC0yJCwgVE9UUyBlbHMgc2V1cyB0ZXJtZXMgZXMgbXVsdGlwbGlxdWVuLCBpbmNsb2VudC1oaSBlbCAkNSQgZGUgbGEgZHJldGEuIiwgIlVuIGNvcCAkeT0xJCwgc3Vic3RpdHVlaXggYSAkeCsyeT01JCBhbWIgY3VyYTogJHgrMlxcY2RvdDE9NSBcXFJpZ2h0YXJyb3cgeD0zJC4iXSwgImVyciI6IFsiIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIkVOVEVSX01VTFRJUExJQ0FfREVOT01JTkFET1IiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiTXVsdGlwbGlxdWVtIGxhIHByaW1lcmEgcGVyICQtMiQ6ICRcXGJlZ2lue2FycmF5fXtyfS0yeC00eT0tMTBcXFxcMngrNXk9MTFcXFxcXFxobGluZSB5PTFcXGVuZHthcnJheX0kIiwgIkFtYiAkeT0xJDogJHgrMlxcY2RvdDE9NSBcXFJpZ2h0YXJyb3cgeD0zJCJdfQ=="
  },
  {
   "id": "85d",
   "ex": 85,
   "ap": "d",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}2x+3y=8\\\\ x+2y=3\\end{array}\\right\\}$",
   "opcions": [
    "$x=7,\\ y=2$",
    "$x=7,\\ y=-2$",
    "$x=1,\\ y=2$",
    "$x=-2,\\ y=7$"
   ],
   "pistes": [
    "Multiplica la segona equació per $-2$ perquè els coeficients de $x$ es cancel·lin en sumar.",
    "Un cop trobada $y$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiBjb3AgJHg9NyQsIHN1YnN0aXR1ZWl4IGEgJHgrMnk9MyQ6ICQ3KzJ5PTMgXFxSaWdodGFycm93IHk9LTIkLCBhbWIgc2lnbmUgbmVnYXRpdS4iLCAiIiwgIkVuIG11bHRpcGxpY2FyIGxhIHNlZ29uYSBlcXVhY2nDsyBwZXIgJC0yJCwgVE9UUyBlbHMgc2V1cyB0ZXJtZXMgZXMgbXVsdGlwbGlxdWVuLCBpbmNsb2VudC1oaSBlbCAkMyQgZGUgbGEgZHJldGEuIiwgIkhhcyBpbnRlcmNhbnZpYXQgJHgkIGkgJHkkOiBjb21wcm92YS1obyBzdWJzdGl0dWludCBhIGwnZXF1YWNpw7Mgb3JpZ2luYWwuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIiIsICJFTlRFUl9NVUxUSVBMSUNBX0RFTk9NSU5BRE9SIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIl0sICJyZXMiOiBbIk11bHRpcGxpcXVlbSBsYSBzZWdvbmEgcGVyICQtMiQ6ICRcXGJlZ2lue2FycmF5fXtyfTJ4KzN5PThcXFxcLTJ4LTR5PS02XFxcXFxcaGxpbmUgLXk9MlxcZW5ke2FycmF5fSQiLCAiJHk9LTIkOyBzdWJzdGl0dWludDogJHgrMlxcY2RvdCgtMik9MyBcXFJpZ2h0YXJyb3cgeD03JCJdfQ=="
  },
  {
   "id": "85e",
   "ex": 85,
   "ap": "e",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x+y=9\\\\ 20x-3y=-4\\end{array}\\right\\}$",
   "opcions": [
    "$x=1,\\ y=-8$",
    "$x=8,\\ y=1$",
    "$x=-1,\\ y=10$",
    "$x=1,\\ y=8$"
   ],
   "pistes": [
    "Aïlla $x=9-y$ de la primera equació (substitució).",
    "Substitueix aquesta expressió a la segona equació i resol per $y$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBjb3AgJHk9OCQsIHN1YnN0aXR1ZWl4IGEgJHgreT05JDogJHg9OS04PTEkLCBhbWIgc2lnbmUgcG9zaXRpdS4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IHN1YnN0aXR1ZWl4IGEgbCdlcXVhY2nDsyBvcmlnaW5hbCBwZXIgY29tcHJvdmFyLWhvLiIsICJSZXZpc2EgZWwgc2lnbmUgZW4gYcOvbGxhciAkeSQgZGUgbGEgc2Vnb25hIGVxdWFjacOzOiAkLTIzeT0tMTg0IFxcUmlnaHRhcnJvdyB5PTgkLCBubyB1biBhbHRyZSB2YWxvci4iLCAiIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiIl0sICJyZXMiOiBbIkHDr2xsZW0gJHg9OS15JCBpIGhvIHBvc2VtIGEgbGEgc2Vnb25hOiAkMjAoOS15KS0zeT0tNCBcXDtcXExvbmdyaWdodGFycm93XFw7IDE4MC0yMHktM3k9LTQkIiwgIiQtMjN5PS0xODQgXFxSaWdodGFycm93IHk9OCQiLCAiJHg9OS04PTEkIl19"
  },
  {
   "id": "85f",
   "ex": 85,
   "ap": "f",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}2x-3y=-25\\\\ 12x-3y=75\\end{array}\\right\\}$",
   "opcions": [
    "$x=10,\\ y=-15$",
    "$x=-10,\\ y=15$",
    "$x=10,\\ y=15$",
    "$x=15,\\ y=10$"
   ],
   "pistes": [
    "Resta la segona equació de la primera: el coeficient de $y$ coincideix i s'anul·la (reducció).",
    "Un cop trobada $x$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbiBjb3AgJHg9MTAkLCBzdWJzdGl0dWVpeCBhICQyeC0zeT0tMjUkOiAkMjAtM3k9LTI1IFxcUmlnaHRhcnJvdyB5PTE1JCwgYW1iIHNpZ25lIHBvc2l0aXUuIiwgIlJldmlzYSBlbCBzaWduZSBlbiBhw69sbGFyICR4JDogJC0xMHg9LTEwMCBcXFJpZ2h0YXJyb3cgeD0xMCQsIHBvc2l0aXUuIiwgIiIsICJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICJTSUdORV9GSU5BTCIsICIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiUmVzdGFudCwgbGEgJHkkIHMnZWxpbWluYTogJFxcYmVnaW57YXJyYXl9e3J9MngtM3k9LTI1XFxcXDEyeC0zeT03NVxcXFxcXGhsaW5lIC0xMHg9LTEwMFxcZW5ke2FycmF5fSQiLCAiJHg9MTAkOyBzdWJzdGl0dWludDogJDIwLTN5PS0yNSBcXFJpZ2h0YXJyb3cgeT0xNSQiXX0="
  },
  {
   "id": "85g",
   "ex": 85,
   "ap": "g",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x+2y=5\\\\ 2x+y=7\\end{array}\\right\\}$",
   "opcions": [
    "$x=1,\\ y=3$",
    "$x=3,\\ y=1$",
    "$x=3,\\ y=-1$",
    "$x=9,\\ y=-2$"
   ],
   "pistes": [
    "Multiplica la segona equació per $-2$ perquè els coeficients de $x$ es cancel·lin en sumar.",
    "Un cop trobada $x$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiIsICIiLCAiVW4gY29wICR4PTMkLCBzdWJzdGl0dWVpeCBhICR4KzJ5PTUkOiAkMysyeT01IFxcUmlnaHRhcnJvdyB5PTEkLCBwb3NpdGl1LiIsICJFbiBtdWx0aXBsaWNhciBsYSBzZWdvbmEgZXF1YWNpw7MgcGVyICQtMiQsIFRPVFMgZWxzIHNldXMgdGVybWVzIGVzIG11bHRpcGxpcXVlbiwgaW5jbG9lbnQtaGkgZWwgJDckIGRlIGxhIGRyZXRhLiJdLCAiZXJyIjogWyJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICIiLCAiU0lHTkVfRklOQUwiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiJdLCAicmVzIjogWyJNdWx0aXBsaXF1ZW0gbGEgc2Vnb25hIHBlciAkLTIkOiAkXFxiZWdpbnthcnJheX17cn14KzJ5PTVcXFxcLTR4LTJ5PS0xNFxcXFxcXGhsaW5lIC0zeD0tOVxcZW5ke2FycmF5fSQiLCAiJHg9MyQ7IHN1YnN0aXR1aW50OiAkMysyeT01IFxcUmlnaHRhcnJvdyB5PTEkIl19"
  },
  {
   "id": "85h",
   "ex": 85,
   "ap": "h",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}5x-y=23\\\\ -9x+5y=13\\end{array}\\right\\}$",
   "opcions": [
    "$x=8,\\ y=17$",
    "$x=17,\\ y=8$",
    "$x=-8,\\ y=-17$",
    "$x=8,\\ y=-17$"
   ],
   "pistes": [
    "Aïlla $y=5x-23$ de la primera equació (substitució).",
    "Substitueix aquesta expressió a la segona equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgbCdlcXVhY2nDsyBvcmlnaW5hbC4iLCAiUmV2aXNhIGVsIHNpZ25lIGVuIGHDr2xsYXIgJHgkOiAkMTZ4PTEyOCBcXFJpZ2h0YXJyb3cgeD04JCwgcG9zaXRpdS4iLCAiVW4gY29wICR4PTgkLCBzdWJzdGl0dWVpeCBhICR5PTV4LTIzJDogJHk9NVxcY2RvdDgtMjM9MTckLCBhbWIgc2lnbmUgcG9zaXRpdS4iXSwgImVyciI6IFsiIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlNJR05FX0ZJTkFMIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIkHDr2xsZW0gJHk9NXgtMjMkIGkgaG8gcG9zZW0gYSBsYSBzZWdvbmE6ICQtOXgrNSg1eC0yMyk9MTMgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAtOXgrMjV4LTExNT0xMyQiLCAiJDE2eD0xMjggXFxSaWdodGFycm93IHg9OCQiLCAiJHk9NVxcY2RvdDgtMjM9MTckIl19"
  },
  {
   "id": "86a",
   "ex": 86,
   "ap": "a",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x-3y=4\\\\ 2x-5y=8\\end{array}\\right\\}$",
   "opcions": [
    "$x=0,\\ y=4$",
    "$x=4,\\ y=-8$",
    "$x=-4,\\ y=0$",
    "$x=4,\\ y=0$"
   ],
   "pistes": [
    "Multiplica la primera equació per $-2$ perquè els coeficients de $x$ es cancel·lin (reducció).",
    "Un cop trobada $y$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiIsICJSZXZpc2EgZWwgcmVzdWx0YXQgZGUgc3VtYXIgbGVzIGR1ZXMgZXF1YWNpb25zIHRyYW5zZm9ybWFkZXM6IGhhdXJpYSBkZSBxdWVkYXIgJHk9MCQsIG5vIHVuIGFsdHJlIHZhbG9yLiIsICJVbiBjb3AgJHk9MCQsIHN1YnN0aXR1ZWl4IGEgJHgtM3k9NCQ6ICR4LTA9NCBcXFJpZ2h0YXJyb3cgeD00JCwgcG9zaXRpdS4iLCAiIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiU0lHTkVfRklOQUwiLCAiIl0sICJyZXMiOiBbIk11bHRpcGxpcXVlbSBsYSBwcmltZXJhIHBlciAkLTIkOiAkXFxiZWdpbnthcnJheX17cn0tMngrNnk9LThcXFxcMngtNXk9OFxcXFxcXGhsaW5lIHk9MFxcZW5ke2FycmF5fSQiLCAiQW1iICR5PTAkOiAkeC0zXFxjZG90MD00IFxcUmlnaHRhcnJvdyB4PTQkIl19"
  },
  {
   "id": "86b",
   "ex": 86,
   "ap": "b",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}3x+y=3\\\\ 6x-y=0\\end{array}\\right\\}$",
   "opcions": [
    "$x=2,\\ y=\\dfrac{1}{3}$",
    "$x=-\\dfrac{1}{3},\\ y=2$",
    "$x=\\dfrac{1}{3},\\ y=2$",
    "$x=\\dfrac{1}{3},\\ y=-2$"
   ],
   "pistes": [
    "Aïlla $y=3-3x$ de la primera equació (substitució).",
    "Substitueix aquesta expressió a la segona equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiIsICJSZXZpc2EgZWwgc2lnbmUgZW4gcmVzb2xkcmUgJDl4PTMkOiAkeD1cXGZyYWMxMyQsIHBvc2l0aXUuIiwgIiIsICJVbiBjb3AgJHg9XFxmcmFjMTMkLCBzdWJzdGl0dWVpeCBhICR5PTMtM3gkOiAkeT0zLTNcXGNkb3RcXGZyYWMxMz0yJCwgYW1iIHNpZ25lIHBvc2l0aXUuIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlNJR05FX0ZJTkFMIiwgIiIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJBw69sbGVtICR5PTMtM3gkIGkgaG8gcG9zZW0gYSBsYSBzZWdvbmE6ICQ2eC0oMy0zeCk9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IDZ4LTMrM3g9MCQiLCAiJDl4PTMgXFxSaWdodGFycm93IHg9XFxkZnJhY3sxfXszfSQiLCAiJHk9My0zXFxjZG90XFxkZnJhYzEzPTIkIl19"
  },
  {
   "id": "86c",
   "ex": 86,
   "ap": "c",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}4x-5y=10\\\\ 2x+7y=-4\\end{array}\\right\\}$",
   "opcions": [
    "$x=\\dfrac{25}{19},\\ y=-\\dfrac{18}{19}$",
    "$x=-\\dfrac{18}{19},\\ y=\\dfrac{25}{19}$",
    "$x=\\dfrac{25}{19},\\ y=\\dfrac{18}{19}$",
    "$x=\\dfrac{25}{19},\\ y=-\\dfrac{126}{19}$"
   ],
   "pistes": [
    "Multiplica la primera equació per $7$ i la segona per $5$ per igualar el coeficient de $y$ (reducció).",
    "Un cop trobada $x$, substitueix a qualsevol equació original i aïlla $y$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgbCdlcXVhY2nDsyBvcmlnaW5hbC4iLCAiUmV2aXNhIGVsIHNpZ25lIGZpbmFsIGRlICR5JDogc3Vic3RpdHVpbnQgYSAkMngrN3k9LTQkIHN1cnQgdW4gdmFsb3IgbmVnYXRpdS4iLCAiVCdoYXMgcXVlZGF0IGEgbWlnIGHDr2xsYXIgbGEgJHkkOiBkZSAkN3k9LVxcZnJhY3sxMjZ9ezE5fSQgZW5jYXJhIGNhbCBkaXZpZGlyIGVudHJlICQ3JCwgaSBxdWVkYSAkeT0tXFxmcmFjezE4fXsxOX0kLiJdLCAiZXJyIjogWyIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiRkFDVE9SX09CTElEQVQiXSwgInJlcyI6IFsiTXVsdGlwbGlxdWVtIHBlciAkNyQgaSBwZXIgJDUkOiAkXFxiZWdpbnthcnJheX17cn0yOHgtMzV5PTcwXFxcXDEweCszNXk9LTIwXFxcXFxcaGxpbmUgMzh4PTUwXFxlbmR7YXJyYXl9JCIsICIkeD1cXGRmcmFjezUwfXszOH09XFxkZnJhY3syNX17MTl9JCIsICJTdWJzdGl0dWludCBhICQyeCs3eT0tNCQ6ICQ3eT0tNC1cXGRmcmFjezUwfXsxOX09XFxkZnJhY3stMTI2fXsxOX0gXFxSaWdodGFycm93IHk9LVxcZGZyYWN7MTh9ezE5fSQiXX0="
  },
  {
   "id": "86d",
   "ex": 86,
   "ap": "d",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x-3y=13\\\\ 5x-2y=26\\end{array}\\right\\}$",
   "opcions": [
    "$x=-3,\\ y=4$",
    "$x=4,\\ y=-3$",
    "$x=4,\\ y=3$",
    "$x=-4,\\ y=-3$"
   ],
   "pistes": [
    "Multiplica la primera equació per $-5$ perquè els coeficients de $x$ es cancel·lin (reducció).",
    "Un cop trobada $y$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICR5JDogJDEzeT0tMzkgXFxSaWdodGFycm93IHk9LTMkLCBuZWdhdGl1LiIsICJVbiBjb3AgJHk9LTMkLCBzdWJzdGl0dWVpeCBhICR4LTN5PTEzJDogJHgrOT0xMyBcXFJpZ2h0YXJyb3cgeD00JCwgcG9zaXRpdS4iXSwgImVyciI6IFsiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIk11bHRpcGxpcXVlbSBsYSBwcmltZXJhIHBlciAkLTUkOiAkXFxiZWdpbnthcnJheX17cn0tNXgrMTV5PS02NVxcXFw1eC0yeT0yNlxcXFxcXGhsaW5lIDEzeT0tMzlcXGVuZHthcnJheX0kIiwgIiR5PS0zJDsgc3Vic3RpdHVpbnQ6ICR4LTNcXGNkb3QoLTMpPTEzIFxcUmlnaHRhcnJvdyB4PTQkIl19"
  },
  {
   "id": "86e",
   "ex": 86,
   "ap": "e",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}8x+14y=-6\\\\ x+y=0\\end{array}\\right\\}$",
   "opcions": [
    "$x=-1,\\ y=-1$",
    "$x=1,\\ y=1$",
    "$x=1,\\ y=-1$",
    "$x=-1,\\ y=1$"
   ],
   "pistes": [
    "Aïlla $x=-y$ de la segona equació (substitució).",
    "Substitueix aquesta expressió a la primera equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgJHkkOiAkNnk9LTYgXFxSaWdodGFycm93IHk9LTEkLiIsICJVbiBjb3AgJHk9LTEkLCBzdWJzdGl0dWVpeCBhICR4PS15JDogJHg9LSgtMSk9MSQsIGFtYiBzaWduZSBwb3NpdGl1LiIsICIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgbCdlcXVhY2nDsyBvcmlnaW5hbC4iXSwgImVyciI6IFsiU0lHTkVfRklOQUwiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiQcOvbGxlbSAkeD0teSQgaSBobyBwb3NlbSBhIGxhIHByaW1lcmE6ICQ4KC15KSsxNHk9LTYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA2eT0tNiQiLCAiJHk9LTEkIiwgIiR4PS0oLTEpPTEkIl19"
  },
  {
   "id": "86f",
   "ex": 86,
   "ap": "f",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}3x-\\dfrac{4}{5}y=13\\\\[4pt] \\dfrac{8}{3}x-y=-4\\end{array}\\right\\}$",
   "opcions": [
    "$x=-\\dfrac{243}{13},\\ y=\\dfrac{700}{13}$",
    "$x=\\dfrac{81}{4},\\ y=\\dfrac{700}{13}$",
    "$x=\\dfrac{700}{13},\\ y=\\dfrac{243}{13}$",
    "$x=\\dfrac{243}{13},\\ y=\\dfrac{700}{13}$"
   ],
   "pistes": [
    "Multiplica cada equació pel denominador del seu terme fraccionari (m.c.m.$(5,1)=5$ i m.c.m.$(3,1)=3$) per treure denominadors.",
    "Un cop sense fraccions, multiplica per igualar un dels coeficients i aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgJHgkOiAkNjV4PTEyMTUkIGRvbmEgdW4gdmFsb3IgcG9zaXRpdS4iLCAiJFxcZnJhY3sxMjE1fXs2NX0kIGVuY2FyYSBlcyBwb3Qgc2ltcGxpZmljYXIgZGl2aWRpbnQgbnVtZXJhZG9yIGkgZGVub21pbmFkb3IgcGVsIHNldSBtLmMuZC4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgbCdlcXVhY2nDsyBvcmlnaW5hbC4iLCAiIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIlNJTVBMSUZJQ0FDSU9fSU5DT01QTEVUQSIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICIiXSwgInJlcyI6IFsiTXVsdGlwbGljYW50IHBlciB0cmV1cmUgZGVub21pbmFkb3JzOiAkNDV4LTEyeT0xOTUkIGkgJDQweC0xNXk9LTYwJCIsICJNdWx0aXBsaXF1ZW0gbGEgcHJpbWVyYSBwZXIgJDUkIGkgbGEgc2Vnb25hIHBlciAkNCQ6ICRcXGJlZ2lue2FycmF5fXtyfTIyNXgtNjB5PTk3NVxcXFwxNjB4LTYweT0tMjQwXFxcXFxcaGxpbmUgNjV4PTEyMTVcXGVuZHthcnJheX0kIiwgIiR4PVxcZGZyYWN7MTIxNX17NjV9PVxcZGZyYWN7MjQzfXsxM30kOyBzdWJzdGl0dWludDogJDEyeT00NVxcY2RvdFxcZGZyYWN7MjQzfXsxM30tMTk1PVxcZGZyYWN7ODQwMH17MTN9IFxcUmlnaHRhcnJvdyB5PVxcZGZyYWN7NzAwfXsxM30kIl19"
  },
  {
   "id": "88a",
   "ex": 88,
   "ap": "a",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}2x+3y=5+x+2y\\\\ x-2y-3=3-4y\\end{array}\\right\\}$",
   "opcions": [
    "$x=4,\\ y=1$",
    "$x=5,\\ y=0$",
    "$x=1,\\ y=4$",
    "$x=4,\\ y=-1$"
   ],
   "pistes": [
    "Simplifica cada equació agrupant termes amb $x$/$y$ a l'esquerra i números a la dreta.",
    "Un cop simplificades, resta-les per eliminar la $x$ (reducció)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIHF1ZSBoYXMgYWdydXBhdCBiw6kgZWxzIHRlcm1lcyBlbiBzaW1wbGlmaWNhciBjYWRhIGVxdWFjacOzIGFiYW5zIGRlIHJlc29sZHJlIGVsIHNpc3RlbWEuIiwgIkhhcyBpbnRlcmNhbnZpYXQgJHgkIGkgJHkkOiBjb21wcm92YS1obyBzdWJzdGl0dWludCBhIHVuYSBlcXVhY2nDsyBvcmlnaW5hbC4iLCAiVW4gY29wICR5PTEkLCBzdWJzdGl0dWVpeCBhICR4K3k9NSQ6ICR4KzE9NSBcXFJpZ2h0YXJyb3cgeD00JCwgcG9zaXRpdS4iXSwgImVyciI6IFsiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50OiAkeCt5PTUkIGkgJHgrMnk9NiQiLCAiUmVzdGFudCBsYSBwcmltZXJhIGRlIGxhIHNlZ29uYTogJHk9MSQiLCAiU3Vic3RpdHVpbnQ6ICR4KzE9NSBcXFJpZ2h0YXJyb3cgeD00JCJdfQ=="
  },
  {
   "id": "88b",
   "ex": 88,
   "ap": "b",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}2y-x-1=4-y-2x\\\\ 2x-y=1+x\\end{array}\\right\\}$",
   "opcions": [
    "$x=0,\\ y=\\dfrac{1}{3}$",
    "$x=2,\\ y=-1$",
    "$x=2,\\ y=1$",
    "$x=1,\\ y=2$"
   ],
   "pistes": [
    "Simplifica cada equació: agrupa termes amb $x$/$y$ a l'esquerra.",
    "Un cop simplificades ($x+3y=5$ i $x-y=1$), resta-les per eliminar la $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgbGEgc2ltcGxpZmljYWNpw7MgZGUgY2FkYSBlcXVhY2nDsyBwZXIgc2VwYXJhdCBhYmFucyBkZSBjb21iaW5hci1sZXMuIiwgIlVuIGNvcCAkeT0xJCwgc3Vic3RpdHVlaXggYSAkeC15PTEkOiAkeC0xPTEgXFxSaWdodGFycm93IHg9MiQsIHBvc2l0aXUuIiwgIiIsICJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZXF1YWNpw7Mgb3JpZ2luYWwuIl0sICJlcnIiOiBbIkVRVUFDSU9fTk9fU0lNUExJRklDQURBIiwgIlNJR05FX0ZJTkFMIiwgIiIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyJdLCAicmVzIjogWyJTaW1wbGlmaWNhbnQ6ICR4KzN5PTUkIGkgJHgteT0xJCIsICJSZXN0YW50OiAkKHgrM3kpLSh4LXkpPTUtMSBcXFJpZ2h0YXJyb3cgNHk9NCBcXFJpZ2h0YXJyb3cgeT0xJCIsICJTdWJzdGl0dWludDogJHgtMT0xIFxcUmlnaHRhcnJvdyB4PTIkIl19"
  },
  {
   "id": "88c",
   "ex": 88,
   "ap": "c",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}3y-2=x-2(x+y)\\\\ (x+4)+2\\cdot(y-2)=18-x-y\\end{array}\\right\\}$",
   "opcions": [
    "$x=12,\\ y=2$",
    "$x=-2,\\ y=12$",
    "$x=-12,\\ y=-2$",
    "$x=12,\\ y=-2$"
   ],
   "pistes": [
    "Simplifica cada equació distribuint els parèntesis.",
    "Un cop simplificades ($x+5y=2$ i $2x+3y=18$), aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgJHkkOiAkLTd5PTE0IFxcUmlnaHRhcnJvdyB5PS0yJCwgbmVnYXRpdS4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsLiIsICJVbiBjb3AgJHk9LTIkLCBzdWJzdGl0dWVpeCBhICR4KzV5PTIkOiAkeC0xMD0yIFxcUmlnaHRhcnJvdyB4PTEyJCwgcG9zaXRpdS4iLCAiIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlNJR05FX0ZJTkFMIiwgIiJdLCAicmVzIjogWyJTaW1wbGlmaWNhbnQ6ICR4KzV5PTIkIGkgJDJ4KzN5PTE4JCIsICJNdWx0aXBsaXF1ZW0gbGEgcHJpbWVyYSBwZXIgJC0yJDogJFxcYmVnaW57YXJyYXl9e3J9LTJ4LTEweT0tNFxcXFwyeCszeT0xOFxcXFxcXGhsaW5lIC03eT0xNFxcZW5ke2FycmF5fSQiLCAiJHk9LTIkOyBzdWJzdGl0dWludDogJHgtMTA9MiBcXFJpZ2h0YXJyb3cgeD0xMiQiXX0="
  },
  {
   "id": "88d",
   "ex": 88,
   "ap": "d",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}3x-2(y-1)=y-x+1\\\\ 2x-y=x+y-9\\end{array}\\right\\}$",
   "opcions": [
    "$x=5,\\ y=7$",
    "$x=7,\\ y=5$",
    "$x=5,\\ y=-7$",
    "$x=-1,\\ y=-2$"
   ],
   "pistes": [
    "Simplifica cada equació distribuint el parèntesi i agrupant termes.",
    "Un cop simplificades ($4x-3y=-1$ i $x-2y=-9$), aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsLiIsICJVbiBjb3AgJHk9NyQsIHN1YnN0aXR1ZWl4IGEgJHgtMnk9LTkkOiAkeC0xND0tOSBcXFJpZ2h0YXJyb3cgeD01JCwgcG9zaXRpdS4iLCAiUmV2aXNhIGxhIHNpbXBsaWZpY2FjacOzIGRlIGNhZGEgZXF1YWNpw7MgcGVyIHNlcGFyYXQgYWJhbnMgZGUgY29tYmluYXItbGVzLiJdLCAiZXJyIjogWyIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiRVFVQUNJT19OT19TSU1QTElGSUNBREEiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50OiAkNHgtM3k9LTEkIGkgJHgtMnk9LTkkIiwgIk11bHRpcGxpcXVlbSBsYSBzZWdvbmEgcGVyICQtNCQ6ICRcXGJlZ2lue2FycmF5fXtyfTR4LTN5PS0xXFxcXC00eCs4eT0zNlxcXFxcXGhsaW5lIDV5PTM1XFxlbmR7YXJyYXl9JCIsICIkeT03JDsgc3Vic3RpdHVpbnQgYSAkeC0yeT0tOSQ6ICR4LTE0PS05IFxcUmlnaHRhcnJvdyB4PTUkIl19"
  },
  {
   "id": "88e",
   "ex": 88,
   "ap": "e",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}\\dfrac{x}{2}-\\dfrac{y}{5}=\\dfrac{11}{5}\\\\[4pt] \\dfrac{4x-5y}{2}=2\\end{array}\\right\\}$",
   "opcions": [
    "$x=4,\\ y=6$",
    "$x=6,\\ y=-4$",
    "$x=6,\\ y=4$",
    "$x=-6,\\ y=4$"
   ],
   "pistes": [
    "Multiplica cada equació pel seu denominador per treure fraccions.",
    "Un cop en forma $ax+by=c$, iguala un dels coeficients i aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZXF1YWNpw7Mgb3JpZ2luYWwuIiwgIlVuIGNvcCAkeD02JCwgc3Vic3RpdHVlaXggYSAkNXgtMnk9MjIkOiAkMzAtMnk9MjIgXFxSaWdodGFycm93IHk9NCQsIHBvc2l0aXUuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgJHgkOiAkMTd4PTEwMiBcXFJpZ2h0YXJyb3cgeD02JCwgcG9zaXRpdS4iXSwgImVyciI6IFsiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIlRyYWllbnQgZGVub21pbmFkb3JzOiAkNXgtMnk9MjIkIGkgJDR4LTV5PTQkIiwgIk11bHRpcGxpcXVlbSBsYSBwcmltZXJhIHBlciAkNSQgaSBsYSBzZWdvbmEgcGVyICQtMiQ6ICRcXGJlZ2lue2FycmF5fXtyfTI1eC0xMHk9MTEwXFxcXC04eCsxMHk9LThcXFxcXFxobGluZSAxN3g9MTAyXFxlbmR7YXJyYXl9JCIsICIkeD02JDsgc3Vic3RpdHVpbnQ6ICQzMC0yeT0yMiBcXFJpZ2h0YXJyb3cgeT00JCJdfQ=="
  },
  {
   "id": "88f",
   "ex": 88,
   "ap": "f",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}\\dfrac{x+4y}{3}+\\dfrac{x-y}{5}=\\dfrac{2}{3}\\\\[4pt] -x+5y=13\\end{array}\\right\\}$",
   "opcions": [
    "$x=2,\\ y=-3$",
    "$x=-3,\\ y=-2$",
    "$x=-3,\\ y=2$",
    "$x=3,\\ y=2$"
   ],
   "pistes": [
    "Multiplica la primera equació pel m.c.m. dels seus denominadors ($15$) per eliminar-los.",
    "Un cop simplificada, iguala el coeficient de $x$ amb la segona equació i aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZXF1YWNpw7Mgb3JpZ2luYWwuIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkeSQ6ICQ1N3k9MTE0IFxcUmlnaHRhcnJvdyB5PTIkLCBwb3NpdGl1LiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICR4JDogc3Vic3RpdHVpbnQgYSAkLXgrNXk9MTMkIGFtYiAkeT0yJCBzdXJ0ICR4PS0zJCwgbmVnYXRpdS4iXSwgImVyciI6IFsiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIk11bHRpcGxpY2FudCBsYSBwcmltZXJhIHBlciAkMTUkOiAkOHgrMTd5PTEwJCIsICJNdWx0aXBsaXF1ZW0gbGEgc2Vnb25hIHBlciAkOCQ6ICRcXGJlZ2lue2FycmF5fXtyfTh4KzE3eT0xMFxcXFwtOHgrNDB5PTEwNFxcXFxcXGhsaW5lIDU3eT0xMTRcXGVuZHthcnJheX0kIiwgIiR5PTIkOyBzdWJzdGl0dWludCBhICQteCs1eT0xMyQ6ICQteCsxMD0xMyBcXFJpZ2h0YXJyb3cgeD0tMyQiXX0="
  },
  {
   "id": "89a",
   "ex": 89,
   "ap": "a",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode que consideris més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}-2(x-2)=y-4\\\\ 3y-2x=0\\end{array}\\right\\}$",
   "opcions": [
    "$x=-3,\\ y=2$",
    "$x=3,\\ y=2$",
    "$x=3,\\ y=-2$",
    "$x=2,\\ y=3$"
   ],
   "pistes": [
    "Distribueix el parèntesi de la primera equació.",
    "Un cop en forma $2x+y=8$ i $-2x+3y=0$, suma-les (reducció)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiBjb3AgJHk9MiQsIHN1YnN0aXR1ZWl4IGEgJDJ4K3k9OCQ6ICQyeCsyPTggXFxSaWdodGFycm93IHg9MyQsIHBvc2l0aXUuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgJHkkOiAkNHk9OCBcXFJpZ2h0YXJyb3cgeT0yJCwgcG9zaXRpdS4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICIiLCAiU0lHTkVfRklOQUwiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50IGxhIHByaW1lcmE6ICQtMih4LTIpPXktNCBcXDtcXExvbmdyaWdodGFycm93XFw7IDJ4K3k9OCQiLCAiU3VtYW50IGFtYiAkLTJ4KzN5PTAkOiAkXFxiZWdpbnthcnJheX17cn0yeCt5PThcXFxcLTJ4KzN5PTBcXFxcXFxobGluZSA0eT04XFxlbmR7YXJyYXl9JCIsICIkeT0yJDsgc3Vic3RpdHVpbnQ6ICQyeCsyPTggXFxSaWdodGFycm93IHg9MyQiXX0="
  },
  {
   "id": "89b",
   "ex": 89,
   "ap": "b",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode que consideris més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}-5(y-2)=x-2\\\\ x-3y=-4\\end{array}\\right\\}$",
   "opcions": [
    "$x=12,\\ y=2$",
    "$x=2,\\ y=2$",
    "$x=-2,\\ y=2$",
    "$x=2,\\ y=-2$"
   ],
   "pistes": [
    "Distribueix el parèntesi de la primera equació.",
    "Un cop en forma $x+5y=12$ i $x-3y=-4$, resta-les (reducció)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgbGEgc2ltcGxpZmljYWNpw7MgZGUgbGEgcHJpbWVyYSBlcXVhY2nDsyBhYmFucyBkZSBjb21iaW5hci1sYSBhbWIgbGEgc2Vnb25hLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICR4JDogJHgtM1xcY2RvdDI9LTQgXFxSaWdodGFycm93IHg9MiQsIHBvc2l0aXUuIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkeSQ6ICQ4eT0xNiBcXFJpZ2h0YXJyb3cgeT0yJCwgcG9zaXRpdS4iXSwgImVyciI6IFsiRVFVQUNJT19OT19TSU1QTElGSUNBREEiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIlNpbXBsaWZpY2FudCBsYSBwcmltZXJhOiAkLTUoeS0yKT14LTIgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4KzV5PTEyJCIsICJSZXN0YW50IGFtYiAkeC0zeT0tNCQ6ICRcXGJlZ2lue2FycmF5fXtyfXgrNXk9MTJcXFxceC0zeT0tNFxcXFxcXGhsaW5lIDh5PTE2XFxlbmR7YXJyYXl9JCIsICIkeT0yJDsgc3Vic3RpdHVpbnQ6ICR4LTNcXGNkb3QyPS00IFxcUmlnaHRhcnJvdyB4PTIkIl19"
  },
  {
   "id": "89c",
   "ex": 89,
   "ap": "c",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode que consideris més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}3(x+y)-x+2y=15\\\\ 2x-(y+8)=-11\\end{array}\\right\\}$",
   "opcions": [
    "$x=-3,\\ y=3$",
    "$x=3,\\ y=0$",
    "$x=0,\\ y=3$",
    "$x=0,\\ y=-3$"
   ],
   "pistes": [
    "Simplifica cada equació distribuint parèntesis.",
    "Un cop en forma $2x+5y=15$ i $2x-y=-3$, resta-les (reducció, ja que el coeficient de $x$ coincideix)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbiBjb3AgJHk9MyQsIHN1YnN0aXR1ZWl4IGEgJDJ4LXk9LTMkOiAkMngtMz0tMyBcXFJpZ2h0YXJyb3cgeD0wJC4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICR5JDogJDZ5PTE4IFxcUmlnaHRhcnJvdyB5PTMkLCBwb3NpdGl1LiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50OiAkMngrNXk9MTUkIGkgJDJ4LXk9LTMkIiwgIlJlc3RhbnQ6ICRcXGJlZ2lue2FycmF5fXtyfTJ4KzV5PTE1XFxcXDJ4LXk9LTNcXFxcXFxobGluZSA2eT0xOFxcZW5ke2FycmF5fSQiLCAiJHk9MyQ7IHN1YnN0aXR1aW50OiAkMngtMz0tMyBcXFJpZ2h0YXJyb3cgeD0wJCJdfQ=="
  },
  {
   "id": "89d",
   "ex": 89,
   "ap": "d",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol amb el mètode que consideris més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}3(x+2)-7(x+y)=5\\\\ 5(x+1)-y=14\\end{array}\\right\\}$",
   "opcions": [
    "$x=-\\dfrac{64}{39},\\ y=\\dfrac{31}{39}$",
    "$x=\\dfrac{64}{39},\\ y=\\dfrac{31}{39}$",
    "$x=\\dfrac{64}{39},\\ y=-\\dfrac{31}{39}$",
    "$x=-\\dfrac{31}{39},\\ y=\\dfrac{64}{39}$"
   ],
   "pistes": [
    "Distribueix els parèntesis de les dues equacions per deixar-les en forma $ax+by=c$.",
    "Un cop simplificades ($-4x-7y=-1$ i $5x-y=9$), aïlla $y$ de la segona i substitueix a la primera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgJHgkOiAkLTM5eD0tNjQgXFxSaWdodGFycm93IHg9XFxmcmFjezY0fXszOX0kLCBwb3NpdGl1LiIsICJVbiBjb3AgJHg9XFxmcmFjezY0fXszOX0kLCBzdWJzdGl0dWVpeCBhICR5PTV4LTkkOiBlbCByZXN1bHRhdCBzdXJ0IG5lZ2F0aXUgcGVycXXDqCAkNXg8OSQuIiwgIiIsICJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZXF1YWNpw7Mgb3JpZ2luYWwuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIlNJR05FX0ZJTkFMIiwgIiIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyJdLCAicmVzIjogWyJTaW1wbGlmaWNhbnQ6ICQtNHgtN3k9LTEkIGkgJDV4LXk9OSQiLCAiQcOvbGxlbSAkeT01eC05JCBkZSBsYSBzZWdvbmEgaSBobyBwb3NlbSBhIGxhIHByaW1lcmE6ICQtNHgtNyg1eC05KT0tMSBcXDtcXExvbmdyaWdodGFycm93XFw7IC00eC0zNXgrNjM9LTEkIiwgIiQtMzl4PS02NCBcXFJpZ2h0YXJyb3cgeD1cXGRmcmFjezY0fXszOX0kOyAkeT01XFxjZG90XFxkZnJhY3s2NH17Mzl9LTk9XFxkZnJhY3szMjAtMzUxfXszOX09LVxcZGZyYWN7MzF9ezM5fSQiXX0="
  },
  {
   "id": "87",
   "ex": 87,
   "ap": "",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Resol:",
   "enunciat": "$\\left.\\begin{array}{r}2(x-2)-3(y+1)+6=17\\\\[4pt] 4(x-y)-\\dfrac{x}{3}+\\dfrac{y}{2}=25\\end{array}\\right\\}$",
   "opcions": [
    "$x=3,\\ y=4$",
    "$x=-3,\\ y=4$",
    "$x=-4,\\ y=3$",
    "$x=3,\\ y=-4$"
   ],
   "pistes": [
    "Simplifica cada equació per separat (distribueix parèntesis, treu denominadors) fins deixar-les en la forma $ax+by=c$.",
    "Un cop simplificades, resol el sistema per reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBjb3AgJHg9MyQsIHN1YnN0aXR1ZWl4IGEgJDJ4LTN5PTE4JDogJDYtM3k9MTggXFxSaWdodGFycm93IHk9LTQkLCBhbWIgc2lnbmUgbmVnYXRpdS4iLCAiUmV2aXNhIGVsIHNpZ25lIGVuIHJlc29sZHJlICQ4eD0yNCQ6ICR4PTMkLCBwb3NpdGl1LiIsICJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZGUgbGVzIGVxdWFjaW9ucyBvcmlnaW5hbHMuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICJTSUdORV9GSU5BTCIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICIiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50IGxhIHByaW1lcmE6ICQyKHgtMiktMyh5KzEpKzY9MTcgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAyeC0zeT0xOCQiLCAiU2ltcGxpZmljYW50IGxhIHNlZ29uYSAobXVsdGlwbGljYW50IHBlciAkNiQpOiAkMjJ4LTIxeT0xNTAkIiwgIk11bHRpcGxpcXVlbSBsYSBwcmltZXJhIHBlciAkLTckOiAkXFxiZWdpbnthcnJheX17cn0tMTR4KzIxeT0tMTI2XFxcXDIyeC0yMXk9MTUwXFxcXFxcaGxpbmUgOHg9MjRcXGVuZHthcnJheX0kIiwgIiR4PTMkOyBzdWJzdGl0dWludDogJDYtM3k9MTggXFxSaWdodGFycm93IHk9LTQkIl19"
  }
 ]
};
