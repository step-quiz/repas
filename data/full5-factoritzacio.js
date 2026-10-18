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
  "AILLAMENT_INCOMPLET": "Has parat abans d'acabar d'aïllar la incògnita: encara queda una operació per desfer. Comprova-ho substituint el teu valor a l'equació original.",
  "ARITMETICA_PAS_INTERMEDI": "El plantejament és bo, però hi ha un error de càlcul en un dels passos del mig. Refes l'operació pas a pas i comprova el resultat substituint-lo a l'enunciat original.",
  "DISTRIBUCIO_INCOMPLETA": "En multiplicar un polinomi per un altre, cada terme del primer s'ha de multiplicar per TOTS els termes del segon, no només per un.",
  "FACTOR_COMU_INCOMPLET": "No has tret tot el factor comú possible: revisa si encara hi ha algun nombre o alguna $x$ que es repeteixi a tots els termes.",
  "FACTOR_COMU_MAL_DIVIDIT": "En treure factor comú, cada terme s'ha de dividir pel factor comú: algun terme de dins del parèntesi no s'ha dividit correctament.",
  "IGUALTAT_NOTABLE_SIGNE": "Revisa el signe del terme del mig: $(a-b)^2=a^2-2ab+b^2$, amb el terme del mig NEGATIU, a diferència de $(a+b)^2$.",
  "MENYS_PARENTESI": "El signe $-$ davant d'un parèntesi canvia el signe de TOTS els termes de dins, no només del primer.",
  "ORDRE_ARREL_DIVISIO": "Has fet l'arrel abans de dividir. De $ax^2=k$ cal aïllar primer $x^2$ dividint per $a$, i fer l'arrel al final.",
  "ORDRE_DIVISIONS": "El que hi ha entre claudàtors s'ha de resoldre primer: no es poden restar tots els exponents seguits com si no hi hagués claudàtor.",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "QUADRAT_INCOMPLET": "Per reconèixer un quadrat perfecte calen els TRES termes: el quadrat del primer, el doble producte, i el quadrat del segon. Revisa que hi són tots.",
  "SIGNE_ARRELS": "Les arrels tenen el signe canviat. Comprova-les substituint-les: han de fer que la funció valgui $0$.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_QUOCIENT": "Revisa la regla dels signes del quocient: signes diferents donen resultat negatiu.",
  "SIMPLIFICACIO_INCOMPLETA": "Encara es pot simplificar més: busca el m.c.d. del numerador i el denominador i divideix-los pel m.c.d. d'un sol cop.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "352a",
   "ex": 352,
   "ap": "a",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquesta equació, que ja està factoritzada. Un producte val zero quan algun dels seus factors val zero.",
   "enunciat": "$x(x-4)=0$",
   "opcions": [
    "$x=-4$",
    "$x=4$",
    "$x=0,\\ 4$",
    "$x=0,\\ -4$"
   ],
   "pistes": [
    "Hi ha dos factors: $x$ i $(x-4)$.",
    "Iguala cada factor a zero: $x=0$, i $x-4=0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgbGEgc29sdWNpw7MgJHg9MCQsIGkgZGUgJHgtND0wJCBzdXJ0ICR4PTQkLCBubyAkLTQkLiIsICJUJ2hhcyBkZWl4YXQgdW5hIHNvbHVjacOzOiBlbCBwcmltZXIgZmFjdG9yLCAkeCQsIHRhbWLDqSBwb3QgdmFsZXIgemVyby4gQ29tcHJvdmEtaG86ICQwXFxjZG90KDAtNCk9MCQuIiwgIiIsICJEZSAkeC00PTAkIHN1cnQgJHg9NCQsIG5vICQtNCQuIExlcyBhcnJlbHMgdGVuZW4gZWwgc2lnbmUgY2FudmlhdC4gQ29tcHJvdmEtbGVzIHN1YnN0aXR1aW50LWxlczogaGFuIGRlIGZlciBxdWUgbGEgZnVuY2nDsyB2YWxndWkgJDAkLiJdLCAiZXJyIjogWyJTSUdORV9BUlJFTFMiLCAiQUlMTEFNRU5UX0lOQ09NUExFVCIsICIiLCAiU0lHTkVfQVJSRUxTIl0sICJyZXMiOiBbIiR4PTAkIG8gYsOpICR4LTQ9MFxcUmlnaHRhcnJvdyB4PTQkIl19"
  },
  {
   "id": "352b",
   "ex": 352,
   "ap": "b",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquesta equació, que ja està factoritzada. Un producte val zero quan algun dels seus factors val zero.",
   "enunciat": "$(x-3)(x+1)=0$",
   "opcions": [
    "$x=-3,\\ 1$",
    "$x=3,\\ -1$",
    "$x=3,\\ 1$",
    "$x=3$"
   ],
   "pistes": [
    "Hi ha dos factors: $(x-3)$ i $(x+1)$.",
    "Iguala cada factor a zero."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMZXMgYXJyZWxzIHRlbmVuIGVsIHNpZ25lIGNhbnZpYXQuIENvbXByb3ZhLWxlcyBzdWJzdGl0dWludC1sZXM6IGhhbiBkZSBmZXIgcXVlIGxhIGZ1bmNpw7MgdmFsZ3VpICQwJC4iLCAiIiwgIkRlICR4KzE9MCQgc3VydCAkeD0tMSQsIG5vICQxJC4gQ29tcHJvdmEtaG86ICQxKzE9MlxcbmUwJC4iLCAiVCdoYXMgZGVpeGF0IHVuYSBzb2x1Y2nDszogZWwgc2Vnb24gZmFjdG9yIHRhbWLDqSBwb3QgdmFsZXIgemVybywgYW1iICR4PS0xJC4iXSwgImVyciI6IFsiU0lHTkVfQVJSRUxTIiwgIiIsICJTSUdORV9BUlJFTFMiLCAiQUlMTEFNRU5UX0lOQ09NUExFVCJdLCAicmVzIjogWyIkeC0zPTBcXFJpZ2h0YXJyb3cgeD0zJCBvIGLDqSAkeCsxPTBcXFJpZ2h0YXJyb3cgeD0tMSQiXX0="
  },
  {
   "id": "82a",
   "ex": 82,
   "ap": "a",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$x^2-7x=0$",
   "opcions": [
    "$x=7$",
    "$x=0,\\ 14$",
    "$x=-7,\\ 0$",
    "$x=0,\\ 7$"
   ],
   "pistes": [
    "Els dos termes, $x^2$ i $-7x$, porten $x$: treu-la factor comú.",
    "Et queda un producte igualat a zero: iguala cada factor a zero per separat. No t'oblidis de la solució que dona el factor $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJFbiBkaXZpZGlyIHBlbCBmYWN0b3IgY29tw7osIHJldmlzYSBxdWUgY2FkYSB0ZXJtZSBxdWVkaSBkaXZpZGl0IGNvcnJlY3RhbWVudCwgbm8gbm9tw6lzIHVuLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCIsICJTSUdORV9GSU5BTCIsICIiXSwgInJlcyI6IFsiJHheMi03eD14KHgtNyk9MCQiLCAiJHg9MCQgbyAkeC03PTAkIiwgIiR4PTAsXFwgNyQiXX0="
  },
  {
   "id": "82b",
   "ex": 82,
   "ap": "b",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$x^2+3x=0$",
   "opcions": [
    "$x=0,\\ -6$",
    "$x=-3$",
    "$x=0,\\ -3$",
    "$x=3,\\ 0$"
   ],
   "pistes": [
    "Els dos termes, $x^2$ i $3x$, porten $x$: treu-la factor comú.",
    "Et queda un producte igualat a zero: iguala cada factor a zero per separat. No t'oblidis de la solució que dona el factor $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiBkaXZpZGlyIHBlbCBmYWN0b3IgY29tw7osIHJldmlzYSBxdWUgY2FkYSB0ZXJtZSBxdWVkaSBkaXZpZGl0IGNvcnJlY3RhbWVudCwgbm8gbm9tw6lzIHVuLiIsICJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlIGxhIHNlZ29uYSBzb2x1Y2nDszogaWd1YWxhIGNhZGEgZmFjdG9yIGEgemVybyBwZXIgc2VwYXJhdCBpIGHDr2xsYSAkeCQgYW1iIGN1cmEuIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJHheMiszeD14KHgrMyk9MCQiLCAiJHg9MCQgbyAkeCszPTAkIiwgIiR4PTAsXFwgLTMkIl19"
  },
  {
   "id": "82c",
   "ex": 82,
   "ap": "c",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$x^2-25x=0$",
   "opcions": [
    "$x=25$",
    "$x=-25,\\ 0$",
    "$x=0,\\ 50$",
    "$x=0,\\ 25$"
   ],
   "pistes": [
    "Els dos termes, $x^2$ i $-25x$, porten $x$: treu-la factor comú.",
    "Et queda un producte igualat a zero: iguala cada factor a zero per separat. No t'oblidis de la solució que dona el factor $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiRW4gZGl2aWRpciBwZWwgZmFjdG9yIGNvbcO6LCByZXZpc2EgcXVlIGNhZGEgdGVybWUgcXVlZGkgZGl2aWRpdCBjb3JyZWN0YW1lbnQsIG5vIG5vbcOpcyB1bi4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJTSUdORV9GSU5BTCIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCIsICIiXSwgInJlcyI6IFsiJHheMi0yNXg9eCh4LTI1KT0wJCIsICIkeD0wJCBvICR4LTI1PTAkIiwgIiR4PTAsXFwgMjUkIl19"
  },
  {
   "id": "82d",
   "ex": 82,
   "ap": "d",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$x^2-10x=0$",
   "opcions": [
    "$x=10$",
    "$x=0,\\ 20$",
    "$x=-10,\\ 0$",
    "$x=0,\\ 10$"
   ],
   "pistes": [
    "Els dos termes, $x^2$ i $-10x$, porten $x$: treu-la factor comú.",
    "Et queda un producte igualat a zero: iguala cada factor a zero per separat. No t'oblidis de la solució que dona el factor $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJFbiBkaXZpZGlyIHBlbCBmYWN0b3IgY29tw7osIHJldmlzYSBxdWUgY2FkYSB0ZXJtZSBxdWVkaSBkaXZpZGl0IGNvcnJlY3RhbWVudCwgbm8gbm9tw6lzIHVuLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCIsICJTSUdORV9GSU5BTCIsICIiXSwgInJlcyI6IFsiJHheMi0xMHg9eCh4LTEwKT0wJCIsICIkeD0wJCBvICR4LTEwPTAkIiwgIiR4PTAsXFwgMTAkIl19"
  },
  {
   "id": "82e",
   "ex": 82,
   "ap": "e",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$16x(x-5)=0$",
   "opcions": [
    "$x=5$",
    "$x=0,\\ 5$",
    "$x=0,\\ 10$",
    "$x=-5,\\ 0$"
   ],
   "pistes": [
    "Ja és un producte igualat a zero: no cal factoritzar res.",
    "Iguala a zero cada factor que porta $x$. El $16$ no hi canvia res: si $16x=0$, quant val $x$?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICIiLCAiRW4gZGl2aWRpciBwZWwgZmFjdG9yIGNvbcO6LCByZXZpc2EgcXVlIGNhZGEgdGVybWUgcXVlZGkgZGl2aWRpdCBjb3JyZWN0YW1lbnQsIG5vIG5vbcOpcyB1bi4iLCAiUmV2aXNhIGVsIHNpZ25lIGRlIGxhIHNlZ29uYSBzb2x1Y2nDszogaWd1YWxhIGNhZGEgZmFjdG9yIGEgemVybyBwZXIgc2VwYXJhdCBpIGHDr2xsYSAkeCQgYW1iIGN1cmEuIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICIiLCAiRkFDVE9SX0NPTVVfTUFMX0RJVklESVQiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJDE2eCh4LTUpPTAkIGphIMOpcyB1biBwcm9kdWN0ZSBpZ3VhbGF0IGEgemVybyIsICIkMTZ4PTAkIG8gJHgtNT0wJCIsICIkeD0wLFxcIDUkIl19"
  },
  {
   "id": "82f",
   "ex": 82,
   "ap": "f",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$3x^2-12x=0$",
   "opcions": [
    "$x=-4,\\ 0$",
    "$x=4$",
    "$x=0,\\ 4$",
    "$x=0,\\ 8$"
   ],
   "pistes": [
    "Els dos termes, $3x^2$ i $-12x$, tenen en comú $3x$: treu-lo factor comú.",
    "Et queda un producte igualat a zero: iguala cada factor a zero per separat. No t'oblidis de la solució que dona el factor $3x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiRW4gdHJldXJlIGZhY3RvciBjb23DuiAkeCQsIGwnZXF1YWNpw7MgdMOpIERVRVMgc29sdWNpb25zICh1bmEgw6lzIHNlbXByZSAkeD0wJCk6IG5vIGxhIGRlc2NhcnRpcy4iLCAiIiwgIkVuIGRpdmlkaXIgcGVsIGZhY3RvciBjb23DuiwgcmV2aXNhIHF1ZSBjYWRhIHRlcm1lIHF1ZWRpIGRpdmlkaXQgY29ycmVjdGFtZW50LCBubyBub23DqXMgdW4uIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICIiLCAiRkFDVE9SX0NPTVVfTUFMX0RJVklESVQiXSwgInJlcyI6IFsiJDN4XjItMTJ4PTN4KHgtNCk9MCQiLCAiJDN4PTAkIG8gJHgtND0wJCIsICIkeD0wLFxcIDQkIl19"
  },
  {
   "id": "82g",
   "ex": 82,
   "ap": "g",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$3x = 4x^2-2x$",
   "opcions": [
    "$x=\\dfrac{5}{4}$",
    "$x=-\\dfrac{5}{4},\\ 0$",
    "$x=0,\\ \\dfrac{5}{4}$",
    "$x=0,\\ \\dfrac{5}{2}$"
   ],
   "pistes": [
    "Primer passa-ho tot a un costat i ajunta els termes en $x$: l'equació ha de quedar igualada a zero.",
    "Queda $4x^2-5x=0$: treu factor comú $x$ i iguala cada factor a zero."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIiwgIkVuIGRpdmlkaXIgcGVsIGZhY3RvciBjb23DuiwgcmV2aXNhIHF1ZSBjYWRhIHRlcm1lIHF1ZWRpIGRpdmlkaXQgY29ycmVjdGFtZW50LCBubyBub23DqXMgdW4uIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJTSUdORV9GSU5BTCIsICIiLCAiRkFDVE9SX0NPTVVfTUFMX0RJVklESVQiXSwgInJlcyI6IFsiJDN4PTR4XjItMnggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAwPTR4XjItNXg9eCg0eC01KSQiLCAiJHg9MCQgbyAkNHgtNT0wJCIsICIkeD0wLFxcIFxcZGZyYWN7NX17NH0kIl19"
  },
  {
   "id": "82h",
   "ex": 82,
   "ap": "h",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$4x^2=5x$",
   "opcions": [
    "$x=-\\dfrac{5}{4},\\ 0$",
    "$x=0,\\ \\dfrac{5}{4}$",
    "$x=\\dfrac{5}{4}$",
    "$x=0,\\ \\dfrac{5}{2}$"
   ],
   "pistes": [
    "Passa-ho tot a un costat: $4x^2-5x=0$.",
    "Treu factor comú $x$ i iguala cada factor a zero. No divideixis els dos costats per $x$: perdries la solució $x=0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIiwgIkVuIHRyZXVyZSBmYWN0b3IgY29tw7ogJHgkLCBsJ2VxdWFjacOzIHTDqSBEVUVTIHNvbHVjaW9ucyAodW5hIMOpcyBzZW1wcmUgJHg9MCQpOiBubyBsYSBkZXNjYXJ0aXMuIiwgIkVuIGRpdmlkaXIgcGVsIGZhY3RvciBjb23DuiwgcmV2aXNhIHF1ZSBjYWRhIHRlcm1lIHF1ZWRpIGRpdmlkaXQgY29ycmVjdGFtZW50LCBubyBub23DqXMgdW4uIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIiIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiLCAiRkFDVE9SX0NPTVVfTUFMX0RJVklESVQiXSwgInJlcyI6IFsiJDR4XjI9NXggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA0eF4yLTV4PTAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4KDR4LTUpPTAkIiwgIiR4PTAkIG8gJDR4LTU9MCQiLCAiJHg9MCxcXCBcXGRmcmFjezV9ezR9JCJdfQ=="
  },
  {
   "id": "82i",
   "ex": 82,
   "ap": "i",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$25x^2-100x=0$",
   "opcions": [
    "$x=0,\\ 8$",
    "$x=4$",
    "$x=-4,\\ 0$",
    "$x=0,\\ 4$"
   ],
   "pistes": [
    "Els dos termes, $25x^2$ i $-100x$, tenen en comú $25x$: treu-lo factor comú.",
    "Et queda un producte igualat a zero: iguala cada factor a zero per separat. No t'oblidis de la solució que dona el factor $25x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiBkaXZpZGlyIHBlbCBmYWN0b3IgY29tw7osIHJldmlzYSBxdWUgY2FkYSB0ZXJtZSBxdWVkaSBkaXZpZGl0IGNvcnJlY3RhbWVudCwgbm8gbm9tw6lzIHVuLiIsICJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJTSUdORV9GSU5BTCIsICIiXSwgInJlcyI6IFsiJDI1eF4yLTEwMHg9MjV4KHgtNCk9MCQiLCAiJDI1eD0wJCBvICR4LTQ9MCQiLCAiJHg9MCxcXCA0JCJdfQ=="
  },
  {
   "id": "83a",
   "ex": 83,
   "ap": "a",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x+2)(x-2) = 0$",
   "opcions": [
    "$x=2$",
    "$x=-2,\\ 2$",
    "$x=4$",
    "$x=-2$"
   ],
   "pistes": [
    "Un producte val zero quan algun dels seus factors ho és.",
    "Iguala cada factor a zero per separat i aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiBwcm9kdWN0ZSBkZSBkb3MgZmFjdG9ycyBpZ3VhbGF0IGEgemVybyB0w6kgRFVFUyBzb2x1Y2lvbnMsIHVuYSBwZXIgY2FkYSBmYWN0b3I6IG5vIGVuIGRlc2NhcnRpcyBjYXAuIiwgIiIsICJObyBjYWwgZGVzZW52b2x1cGFyIGVsIHByb2R1Y3RlIGNvbSAkeF4yLTQ9MCQgaSBkZXNwcsOpcyBcInN1bWFyXCIgcmVzOiBhbWIgZWxzIGZhY3RvcnMgamEgZG9uYXRzLCBpZ3VhbGEgY2FkYXNjdW4gYSB6ZXJvIGRpcmVjdGFtZW50LiIsICJVbiBwcm9kdWN0ZSBkZSBkb3MgZmFjdG9ycyBpZ3VhbGF0IGEgemVybyB0w6kgRFVFUyBzb2x1Y2lvbnMsIHVuYSBwZXIgY2FkYSBmYWN0b3I6IG5vIGVuIGRlc2NhcnRpcyBjYXAuIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICIiLCAiUE9URU5DSUFfREVfU1VNQSIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJCh4KzIpKHgtMik9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHgrMj0wJCBvICR4LTI9MCQiLCAiJHg9LTIkIG8gJHg9MiQiXX0="
  },
  {
   "id": "83b",
   "ex": 83,
   "ap": "b",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x-3)(x+3) = 0$",
   "opcions": [
    "$x=-3$",
    "$x=3$",
    "$x=-3,\\ 3$",
    "$x=9$"
   ],
   "pistes": [
    "Un producte val zero quan algun dels seus factors ho és.",
    "Iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgcHJvZHVjdGUgdMOpIERVRVMgc29sdWNpb25zLCB1bmEgcGVyIGNhZGEgZmFjdG9yOiBubyBlbiBkZXNjYXJ0aXMgY2FwLiIsICJBcXVlc3QgcHJvZHVjdGUgdMOpIERVRVMgc29sdWNpb25zLCB1bmEgcGVyIGNhZGEgZmFjdG9yOiBubyBlbiBkZXNjYXJ0aXMgY2FwLiIsICIiLCAiTm8gY2FsIGNhbGN1bGFyIGNhcCBxdWFkcmF0OiBhbWIgZWxzIGZhY3RvcnMgamEgZG9uYXRzLCBpZ3VhbGEgY2FkYXNjdW4gYSB6ZXJvIGRpcmVjdGFtZW50LiJdLCAiZXJyIjogWyJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIiIsICJQT1RFTkNJQV9ERV9TVU1BIl0sICJyZXMiOiBbIiQoeC0zKSh4KzMpPTAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4LTM9MCQgbyAkeCszPTAkIiwgIiR4PTMkIG8gJHg9LTMkIl19"
  },
  {
   "id": "83c",
   "ex": 83,
   "ap": "c",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x+3)(2x-5)\\left(5 - \\dfrac{x}{2}\\right) = 0$",
   "opcions": [
    "$x=-3,\\ \\dfrac{5}{2},\\ -10$",
    "$x=-3,\\ \\dfrac{5}{2},\\ 10$",
    "$x=3,\\ -\\dfrac{5}{2},\\ -10$",
    "$x=-3,\\ \\dfrac{5}{2}$"
   ],
   "pistes": [
    "Aquí hi ha tres factors: n'hi ha prou que un sigui zero.",
    "Iguala cadascun dels tres factors a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgdGVyY2VyIGZhY3RvcjogJDUtXFxmcmFje3h9ezJ9PTAgXFxSaWdodGFycm93IFxcZnJhY3t4fXsyfT01IFxcUmlnaHRhcnJvdyB4PTEwJCwgYW1iIHNpZ25lIHBvc2l0aXUuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgY2FkYSBzb2x1Y2nDsyBwZXIgc2VwYXJhdCBlbiBhw69sbGFyICR4JCBhIGNhZGEgZmFjdG9yLiIsICJIaSBoYSBUUkVTIGZhY3RvcnMgZW4gYXF1ZXN0IHByb2R1Y3RlLCBubyBkb3M6IGVsIHRlcmNlciwgJDUtXFxmcmFje3h9ezJ9JCwgdGFtYsOpIGFwb3J0YSBsYSBzZXZhIHNvbHVjacOzLiJdLCAiZXJyIjogWyJTSUdORV9RVU9DSUVOVCIsICIiLCAiU0lHTkVfRklOQUwiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIl0sICJyZXMiOiBbIiR4KzM9MCBcXFJpZ2h0YXJyb3cgeD0tMyQiLCAiJDJ4LTU9MCBcXFJpZ2h0YXJyb3cgeD1cXGRmcmFjezV9ezJ9JCIsICIkNS1cXGRmcmFje3h9ezJ9PTAgXFxSaWdodGFycm93IHg9MTAkIl19"
  },
  {
   "id": "83d",
   "ex": 83,
   "ap": "d",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x-5)^2 = 0$",
   "opcions": [
    "$x=5$ (doble)",
    "$x=25$",
    "$x=-5$ (doble)",
    "$x=5,\\ -5$"
   ],
   "pistes": [
    "Un quadrat només val zero quan la base val zero.",
    "Iguala la base a zero: és una solució doble."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm8gY2FsIGRlc2Vudm9sdXBhciBlbCBxdWFkcmF0OiBjb20gcXVlIGphIHZlIGZhY3Rvcml0emF0LCBuJ2hpIGhhIHByb3UgZCdpZ3VhbGFyIGxhIGJhc2UgYSB6ZXJvLiIsICJSZXZpc2EgZWwgc2lnbmU6IGRlICR4LTU9MCQgcydhw69sbGEgJHg9NSQsIG5vICR4PS01JC4iLCAiVW4gcXVhZHJhdCAkKHgtNSleMiQgbm9tw6lzIHZhbCB6ZXJvIHF1YW4gbGEgYmFzZSB2YWwgemVybzogJHgtNT0wJCwgdW5hIMO6bmljYSBzb2x1Y2nDsyAoZG9ibGUpLCBubyBkdWVzIGRlIHNpZ25lIG9wb3NhdC4iXSwgImVyciI6IFsiIiwgIlFVQURSQVRfSU5DT01QTEVUIiwgIlNJR05FX0ZJTkFMIiwgIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiXSwgInJlcyI6IFsiJCh4LTUpXjI9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHgtNT0wJCIsICIkeD01JCAoc29sdWNpw7MgZG9ibGUpIl19"
  },
  {
   "id": "83e",
   "ex": 83,
   "ap": "e",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x-2)^2 + x = x$",
   "opcions": [
    "$x=2,\\ 0$",
    "$x=4$",
    "$x=-2$ (doble)",
    "$x=2$ (doble)"
   ],
   "pistes": [
    "Simplifica primer: la $x$ apareix als dos costats i es cancel·la.",
    "Un cop simplificat queda un quadrat igualat a zero."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSAkeCQgZGVscyBkb3MgY29zdGF0cyBlcyBjYW5jZWzCt2xhIHByaW1lciAoJCt4PXgkKSwgZGVpeGFudCBub23DqXMgJCh4LTIpXjI9MCQ6IG5vIGhpIGhhIHVuYSBzZWdvbmEgc29sdWNpw7MgJHg9MCQuIiwgIk5vIGNhbCBkZXNlbnZvbHVwYXIgZWwgcXVhZHJhdDsgc2ltcGxpZmljYSBwcmltZXIgY2FuY2VswrdsYW50IGxhICR4JCBkZWxzIGRvcyBjb3N0YXRzIGkgaWd1YWxhIGxhIGJhc2UgYSB6ZXJvLiIsICJSZXZpc2EgZWwgc2lnbmU6IGRlICR4LTI9MCQgcydhw69sbGEgJHg9MiQsIG5vICR4PS0yJC4iLCAiIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiU0lHTkVfRklOQUwiLCAiIl0sICJyZXMiOiBbIkxhICR4JCBkZWxzIGRvcyBjb3N0YXRzIGVzIGNhbmNlbMK3bGE6ICQoeC0yKV4yK3g9eCBcXDtcXExvbmdyaWdodGFycm93XFw7ICh4LTIpXjI9MCQiLCAiJHg9MiQgKHNvbHVjacOzIGRvYmxlKSJdfQ=="
  },
  {
   "id": "83f",
   "ex": 83,
   "ap": "f",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$x\\left(\\dfrac{3x}{4} - \\dfrac{4}{5}\\right)^2 = 0$",
   "opcions": [
    "$x=0,\\ \\dfrac{16}{15}$",
    "$x=0,\\ -\\dfrac{16}{15}$",
    "$x=\\dfrac{16}{15}$",
    "$x=0,\\ \\dfrac{4}{5}$"
   ],
   "pistes": [
    "Un producte val zero quan algun dels seus factors ho és: aquí hi ha el factor $x$ i el factor al quadrat.",
    "El factor al quadrat compta com una única solució, no cal repetir-la."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIHNpZ25lIGVuIGHDr2xsYXIgJHgkIGRpbnMgZGVsIHNlZ29uIGZhY3RvcjogJFxcZnJhY3szeH17NH09XFxmcmFjezR9ezV9IFxcUmlnaHRhcnJvdyB4PVxcZnJhY3sxNn17MTV9JCwgcG9zaXRpdS4iLCAiQXF1ZXN0IHByb2R1Y3RlIHTDqSBET1MgZmFjdG9ycyAoJHgkIGkgZWwgcXVhZHJhdCk6IGxhIHNvbHVjacOzICR4PTAkIGRlbCBwcmltZXIgZmFjdG9yIHRhbWLDqSBjb21wdGEsIG5vIG5vbcOpcyBsYSBkZSBkaW5zIGRlbCBxdWFkcmF0LiIsICJVbiBjb3AgYcOvbGxhZGEgJFxcZnJhY3szeH17NH09XFxmcmFjezR9ezV9JCwgZW5jYXJhIGZhbHRhIG11bHRpcGxpY2FyIHBlciAkXFxmcmFjezR9ezN9JCBwZXIgYWNhYmFyIGQnYcOvbGxhciAkeCQuIl0sICJlcnIiOiBbIiIsICJTSUdORV9GSU5BTCIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiLCAiQUlMTEFNRU5UX0lOQ09NUExFVCJdLCAicmVzIjogWyIkeD0wJCBvICRcXGxlZnQoXFxkZnJhY3szeH17NH0tXFxkZnJhY3s0fXs1fVxccmlnaHQpXjI9MCQiLCAiRGVsIHNlZ29uIGZhY3RvcjogJFxcZGZyYWN7M3h9ezR9PVxcZGZyYWN7NH17NX0gXFxSaWdodGFycm93IHg9XFxkZnJhY3sxNn17MTV9JCJdfQ=="
  },
  {
   "id": "84a",
   "ex": 84,
   "ap": "a",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$(x+1)(x-3) + 3 = 0$",
   "opcions": [
    "$x=-2,\\ 0$",
    "$x=0,\\ -2$",
    "$x=-1,\\ 3$",
    "$x=0,\\ 2$"
   ],
   "pistes": [
    "Desenvolupa el producte $(x+1)(x-3)$ i simplifica sumant-hi el $3$.",
    "Un cop simplificat, hauria de quedar una equació incompleta (sense terme independent)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBkZSAkeCh4LTIpPTAkIHN1cnQgJHg9MCQgbyAkeD0yJCwgbm8gJHg9LTIkLiIsICJSZXZpc2EgZWwgZGVzZW52b2x1cGFtZW50IGRlICQoeCsxKSh4LTMpJDogZWwgdGVybWUgZW4gJHgkIHN1cnQgZGUgJC0zeCt4PS0yeCQsIGkgc3VtYW50IGVsICQrMyQgZmluYWwgZWwgdGVybWUgaW5kZXBlbmRlbnQgcydhbnVswrdsYS4iLCAiQXF1ZXN0cyBzZXJpZW4gZWxzIHZhbG9ycyBxdWUgYW51bMK3bGVuICQoeCsxKSQgaSAkKHgtMykkIHBlciBzZXBhcmF0LCBwZXLDsiBsJ2VxdWFjacOzIHTDqSB1biAkKzMkIGFkZGljaW9uYWwgcXVlIGNhbnZpYSBlbCByZXN1bHRhdDogcHJpbWVyIGNhbCBkZXNlbnZvbHVwYXIgaSBzaW1wbGlmaWNhci4iLCAiIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIiJdLCAicmVzIjogWyIkKHgrMSkoeC0zKSszPTAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4XjItM3greC0zKzM9MCQiLCAiJHheMi0yeD0wIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeCh4LTIpPTAkIiwgIiR4PTAkIG8gJHg9MiQiXX0="
  },
  {
   "id": "84b",
   "ex": 84,
   "ap": "b",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$(x+9)(x-9) = 3(x-27)$",
   "opcions": [
    "$x=-9,\\ 9$",
    "$x=0,\\ 9$",
    "$x=0,\\ 3$",
    "$x=0,\\ -3$"
   ],
   "pistes": [
    "Desenvolupa $(x+9)(x-9)$ com a diferència de quadrats i el costat dret per separat.",
    "Passa tot a un costat: hauria de quedar una equació incompleta."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3RzIHNlcmllbiBlbHMgdmFsb3JzIHF1ZSBhbnVswrdsZW4gZWwgY29zdGF0IGVzcXVlcnJlIHRvdCBzb2wsIHBlcsOyIGwnZXF1YWNpw7MgdMOpIHVuIGNvc3RhdCBkcmV0IHF1ZSBjYWwgZGVzZW52b2x1cGFyIGkgcGFzc2FyIGEgbCdlc3F1ZXJyYSBhYmFucyBkZSByZXNvbGRyZS4iLCAiUmV2aXNhIGVsIHBhcyAkeF4yLTgxPTN4LTgxJDogZWwgJC04MSQgZXMgY2FuY2VswrdsYSBhbHMgZG9zIGNvc3RhdHMsIGkgcXVlZGEgJHheMj0zeCQsIG5vICR4XjI9OXgkLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lOiBkZSAkeCh4LTMpPTAkIHN1cnQgJHg9MCQgbyAkeD0zJCwgbm8gJHg9LTMkLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIiQoeCs5KSh4LTkpPTMoeC0yNykgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4XjItODE9M3gtODEkIiwgIiR4XjItM3g9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHgoeC0zKT0wJCIsICIkeD0wJCBvICR4PTMkIl19"
  },
  {
   "id": "84c",
   "ex": 84,
   "ap": "c",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$x(3x-2) = 65$",
   "opcions": [
    "$x=-\\dfrac{13}{3},\\ 5$",
    "$x=-\\dfrac{1}{3},\\ 1$",
    "$x=\\dfrac{13}{3},\\ -5$",
    "$x=\\dfrac{13}{3},\\ 5$"
   ],
   "pistes": [
    "Desenvolupa el producte per obtenir una equació de la forma $ax^2+bx+c=0$.",
    "Aplica la fórmula general amb $a=3,\\ b=-2,\\ c=-65$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIGRpc2NyaW1pbmFudDogJFxcRGVsdGE9KC0yKV4yLTRcXGNkb3QzXFxjZG90KC02NSk9NCs3ODA9Nzg0JCwgaSAkXFxzcXJ0ezc4NH09MjgkLCBubyB1biB2YWxvciBtw6lzIHBldGl0LiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgJC1iJCBhbCBudW1lcmFkb3IgZGUgbGEgZsOzcm11bGEgZ2VuZXJhbDogbCdlcXVhY2nDsyDDqXMgJDN4XjItMngtNjU9MCQsIGFtYiAkYj0tMiQuIiwgIlVuYSBkZSBsZXMgZHVlcyBzb2x1Y2lvbnMgw6lzIG5lZ2F0aXZhOiByZXZpc2EgZWxzIGRvcyBjYXNvcyBkZWwgJFxccG0kIHBlciBzZXBhcmF0LiJdLCAiZXJyIjogWyIiLCAiT1JEUkVfRElWSVNJT05TIiwgIlNJR05FX1FVT0NJRU5UIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIiR4KDN4LTIpPTY1IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgM3heMi0yeC02NT0wJCIsICIkXFxEZWx0YT0oLTIpXjItNFxcY2RvdDNcXGNkb3QoLTY1KT00Kzc4MD03ODQkLCAkXFxzcXJ0ezc4NH09MjgkIiwgIiR4PVxcZGZyYWN7MlxccG0yOH17Nn0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PTUkIG8gJHg9XFxkZnJhY3stMjZ9ezZ9PS1cXGRmcmFjezEzfXszfSQiXX0="
  },
  {
   "id": "84d",
   "ex": 84,
   "ap": "d",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$4x - (x^2-4) = 2x - 4$",
   "opcions": [
    "$x=2,\\ 4$",
    "$x=-8,\\ 1$",
    "$x=-2,\\ 4$",
    "$x=2,\\ -4$"
   ],
   "pistes": [
    "Distribueix el $-(x^2-4)$ i passa tots els termes a un costat.",
    "Aplica la fórmula general amb $a=-1,\\ b=2,\\ c=8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgcXVlIGhhcyBwYXNzYXQgVE9UUyBlbHMgdGVybWVzIGEgdW4gY29zdGF0OiAkNHgteF4yKzQtMngrND0wJCBkb25hICQteF4yKzJ4Kzg9MCQuIiwgIlJldmlzYSBlbCBzaWduZSBlbiBkaXN0cmlidWlyICQtKHheMi00KSQ6IGVsICQtJCBhZmVjdGEgZWxzIGRvcyB0ZXJtZXMsIGRvbmFudCAkLXheMis0JCwgbm8gbm9tw6lzIGVsIHByaW1lci4iLCAiIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkLWIkIGFsIG51bWVyYWRvcjogbCdlcXVhY2nDsyByZW9yZGVuYWRhIMOpcyAkLXheMisyeCs4PTAkLCBhbWIgJGI9MiQsIGFpeMOtIHF1ZSBlbCBudW1lcmFkb3IgcG9ydGEgJC0yJC4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJNRU5ZU19QQVJFTlRFU0kiLCAiIiwgIlNJR05FX1FVT0NJRU5UIl0sICJyZXMiOiBbIiQ0eC0oeF4yLTQpPTJ4LTQgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA0eC14XjIrND0yeC00JCIsICIkLXheMis0eC0yeCs0KzQ9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IC14XjIrMngrOD0wJCIsICIkXFxEZWx0YT0yXjItNFxcY2RvdCgtMSlcXGNkb3Q4PTQrMzI9MzYkLCAkXFxzcXJ0ezM2fT02JDogJHg9XFxkZnJhY3stMlxccG02fXstMn0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PS0yJCBvICR4PTQkIl19"
  },
  {
   "id": "84e",
   "ex": 84,
   "ap": "e",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$(2x+3)(2x-3) = 135$",
   "opcions": [
    "$x=6$",
    "$x=-72,\\ 72$",
    "$x=-6,\\ 6$",
    "$x=-3,\\ 3$"
   ],
   "pistes": [
    "Desenvolupa el producte com a diferència de quadrats: $(2x+3)(2x-3)=4x^2-9$.",
    "Aïlla $x^2$ i fes l'arrel quadrada als dos costats (recorda el $\\pm$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbiBxdWFkcmF0ICR4XjI9MzYkIHTDqSBEVUVTIHNvbHVjaW9ucywgJHg9NiQgaSAkeD0tNiQ6IG5vIGVuIGRlc2NhcnRpcyBjYXAgYXJyYW4gZGUgbCdhcnJlbCBxdWFkcmFkYS4iLCAiUmV2aXNhIGVsIHBhcyAkNHheMj0xNDQgXFxSaWdodGFycm93IHheMj0zNiQ6IGNhbCBkaXZpZGlyIGVudHJlICQ0JCBhYmFucyBkZSBmZXIgbCdhcnJlbCBxdWFkcmFkYSwgbm8gZmVyLWxhIGRpcmVjdGFtZW50IHNvYnJlICQxNDQkLiIsICIiLCAiUmV2aXNhIGVsIGRlc2Vudm9sdXBhbWVudCAkKDJ4KzMpKDJ4LTMpPTR4XjItOSQ6IGVsIHRlcm1lIGVuICR4JCB2YSBtdWx0aXBsaWNhdCBwZXIgJDQkLCBubyBwZXIgJDEkLiJdLCAiZXJyIjogWyJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiLCAiT1JEUkVfQVJSRUxfRElWSVNJTyIsICIiLCAiUVVBRFJBVF9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJCgyeCszKSgyeC0zKT0xMzUgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA0eF4yLTk9MTM1JCIsICIkNHheMj0xNDQgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4XjI9MzYkIiwgIiR4PVxccG02JCJdfQ=="
  },
  {
   "id": "84f",
   "ex": 84,
   "ap": "f",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$x^2 - \\dfrac{23}{4}x = 18$",
   "opcions": [
    "$x=-18,\\ 16$",
    "$x=-\\dfrac{9}{4},\\ 8$",
    "$x=\\dfrac{9}{4},\\ -8$",
    "$x=-\\dfrac{9}{8},\\ 4$"
   ],
   "pistes": [
    "Multiplica tota l'equació per $4$ per eliminar el denominador i obtenir una equació de segon grau amb coeficients enters.",
    "Aplica la fórmula general amb $a=4,\\ b=-23,\\ c=-72$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMZXMgZnJhY2Npb25zIGZpbmFscyBlbmNhcmEgZXMgcG9kZW4gc2ltcGxpZmljYXI6IHJldmlzYSBlbCBtLmMuZC4gZGUgbnVtZXJhZG9yIGkgZGVub21pbmFkb3IgYSBjYWRhIHNvbHVjacOzLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICQtYiQgYWwgbnVtZXJhZG9yOiBhbWIgJGI9LTIzJCwgZWwgbnVtZXJhZG9yIHBvcnRhICQrMjMkLiIsICJBbCBmaW5hbCBjYWwgZGl2aWRpciBlbnRyZSAkMmE9OCQsIG5vIGVudHJlIHVuIGFsdHJlIHZhbG9yOiByZXZpc2EgZWwgZGVub21pbmFkb3IgZGUgbGVzIGR1ZXMgc29sdWNpb25zLiJdLCAiZXJyIjogWyJTSU1QTElGSUNBQ0lPX0lOQ09NUExFVEEiLCAiIiwgIlNJR05FX1FVT0NJRU5UIiwgIk9SRFJFX0RJVklTSU9OUyJdLCAicmVzIjogWyJNdWx0aXBsaXF1ZW0gcGVyICQ0JDogJDR4XjItMjN4PTcyIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNHheMi0yM3gtNzI9MCQiLCAiJFxcRGVsdGE9KC0yMyleMi00XFxjZG90NFxcY2RvdCgtNzIpPTUyOSsxMTUyPTE2ODEkLCAkXFxzcXJ0ezE2ODF9PTQxJCIsICIkeD1cXGRmcmFjezIzXFxwbTQxfXs4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9OCQgbyAkeD1cXGRmcmFjey0xOH17OH09LVxcZGZyYWN7OX17NH0kIl19"
  },
  {
   "id": "84g",
   "ex": 84,
   "ap": "g",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$x^2 - 7x + \\dfrac{13}{4} = 0$",
   "opcions": [
    "$x=\\dfrac{1}{2},\\ \\dfrac{13}{2}$",
    "$x=-\\dfrac{1}{2},\\ -\\dfrac{13}{2}$",
    "$x=\\dfrac{1}{4},\\ \\dfrac{13}{4}$",
    "$x=\\dfrac{1}{2},\\ 6$"
   ],
   "pistes": [
    "El terme independent ja és una fracció: pots deixar l'equació tal qual i aplicar la fórmula directament amb $c=\\frac{13}{4}$.",
    "Aplica la fórmula general amb $a=1,\\ b=-7,\\ c=\\frac{13}{4}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICQtYiQgYWwgbnVtZXJhZG9yOiBhbWIgJGI9LTckLCBlbCBudW1lcmFkb3IgcG9ydGEgJCs3JCwgaSBlbCByZXN1bHRhdCBmaW5hbCDDqXMgcG9zaXRpdS4iLCAiQWwgZmluYWwgY2FsIGRpdmlkaXIgZW50cmUgJDJhPTIkIChwZXJxdcOoICRhPTEkKSwgbm8gZW50cmUgJDQkOiByZXZpc2EgZWwgZGVub21pbmFkb3IgZGUgbGVzIGR1ZXMgc29sdWNpb25zLiIsICJSZXZpc2EgbGEgc2Vnb25hIHNvbHVjacOzOiAkXFxkZnJhY3sxM317Mn0kIG5vIGVzIHNpbXBsaWZpY2EgYSAkNiQ7IGNvbXByb3ZhIGxhIGRpdmlzacOzICRcXGRmcmFjezcrNn17Mn0kLiJdLCAiZXJyIjogWyIiLCAiU0lHTkVfUVVPQ0lFTlQiLCAiT1JEUkVfRElWSVNJT05TIiwgIkFSSVRNRVRJQ0FfUEFTX0lOVEVSTUVESSJdLCAicmVzIjogWyIkYT0xLFxcIGI9LTcsXFwgYz1cXGRmcmFjezEzfXs0fSQ6ICRcXERlbHRhPSgtNyleMi00XFxjZG90MVxcY2RvdFxcZGZyYWN7MTN9ezR9PTQ5LTEzPTM2JCIsICIkXFxzcXJ0ezM2fT02JDogJHg9XFxkZnJhY3s3XFxwbTZ9ezJ9JCIsICIkeD1cXGRmcmFjezEzfXsyfSQgbyAkeD1cXGRmcmFjezF9ezJ9JCJdfQ=="
  }
 ]
};
