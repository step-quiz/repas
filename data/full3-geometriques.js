/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 3,
 "titol": "Full 3 — Successions i progressions",
 "subtitol": "Terme general, successions recurrents i progressions aritmètiques i geomètriques.",
 "blocs": [
  {
   "id": "termes",
   "titol": "Termes d'una successió",
   "descripcio": "Terme general, successions recurrents i comprovar si és una progressió aritmètica.",
   "items": [
    "346a",
    "346b",
    "47a",
    "47b",
    "47c",
    "47d",
    "47e",
    "47f",
    "47g",
    "48a",
    "48b",
    "48c",
    "48d",
    "49a",
    "49b",
    "49c",
    "49d",
    "50a",
    "50b",
    "50c",
    "51a",
    "51b"
   ]
  },
  {
   "id": "aritmetiques",
   "titol": "Progressions aritmètiques",
   "descripcio": "Diferència, terme general i termes que falten.",
   "items": [
    "325a",
    "325b",
    "325c",
    "326a",
    "326b",
    "326c",
    "52a",
    "52b",
    "52c",
    "52d",
    "54a",
    "54b",
    "54c",
    "54d",
    "54e",
    "54f",
    "53a",
    "53b",
    "53c"
   ]
  },
  {
   "id": "geometriques",
   "titol": "Progressions geomètriques",
   "descripcio": "Raó, terme general i termes que falten.",
   "items": [
    "347a",
    "347b",
    "56a",
    "56b",
    "56c",
    "57a",
    "57b",
    "57c",
    "55",
    "58a",
    "58b",
    "58c",
    "58d"
   ]
  },
  {
   "id": "aplicacions",
   "titol": "Aplicacions",
   "descripcio": "Triar el terme general correcte i trobar la posició d'un terme.",
   "items": [
    "59a",
    "59b",
    "59c",
    "59d",
    "60",
    "61"
   ],
   "avancat": true
  }
 ],
 "errors": {
  "COMPARA_TERMES": "Dues fraccions equivalents gairebé mai tenen els mateixos termes: el que ha de coincidir és el valor, no les xifres.",
  "CONDICIO_ENUNCIAT_IGNORADA": "El càlcul pot donar més d'una solució, però l'enunciat en demana una que compleixi una condició concreta. Abans de respondre, comprova que la teva compleix TOTES les condicions de l'enunciat.",
  "DESPLACAMENT_INDEX": "Revisa a partir de quin valor de $n$ comences a substituir, o quin exponent li correspon: t'has desplaçat una posició.",
  "EXPONENTS_MULTIPLICATS": "En multiplicar potències de la mateixa base, els exponents se SUMEN, no es multipliquen: $a^m\\cdot a^n=a^{m+n}$.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "POTENCIA_PRODUCTE_UN_FACTOR": "L'exponent afecta TOTS els factors del producte, no només un: $(a\\cdot b)^n=a^n\\cdot b^n$.",
  "PRIMER_TERME_PER_DIFERENCIA": "Has donat el primer terme de la progressió, no la diferència. La diferència $d$ és el que se suma per passar d'un terme al següent: resta dos termes consecutius i la tindràs.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "RAONAMENT_ADDITIU": "Has passat d'una fracció a l'altra sumant. Dues fraccions són equivalents quan es passa d'una a l'altra MULTIPLICANT els dos termes pel mateix nombre.",
  "RAO_MAL_APLICADA": "Per passar d'un terme al següent s'ha de MULTIPLICAR per la raó. Comprova la raó amb dos termes consecutius que ja tinguis i aplica-la sempre igual.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "347a",
   "ex": 347,
   "ap": "a",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aquesta progressió sabem que és geomètrica. Quina és la seva raó $r$?",
   "enunciat": "$2,\\;6,\\;18,\\;54,\\;\\dots$",
   "opcions": [
    "$r=3$",
    "$r=2$",
    "$r=4$",
    "$r=\\dfrac{1}{3}$"
   ],
   "pistes": [
    "Per quin nombre multipliques el $2$ per obtenir el $6$?",
    "Divideix dos termes consecutius: $6:2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDIkIMOpcyBlbCBwcmltZXIgdGVybWUsICRhXzEkLCBubyBsYSByYcOzLiIsICJIYXMgcmVzdGF0IGRvcyB0ZXJtZXMgKCQ2LTIkKTogYWl4w7Igc2VyaWEgbGEgZGlmZXLDqG5jaWEgZCd1bmEgcHJvZ3Jlc3Npw7MgYXJpdG3DqHRpY2EuIEVuIHVuYSBnZW9tw6h0cmljYSwgY2FkYSB0ZXJtZSBzJ29idMOpIE1VTFRJUExJQ0FOVCBsJ2FudGVyaW9yIHBlciBsYSByYcOzLiIsICJIYXMgZGl2aWRpdCBsJ2FudGVyaW9yIGVudHJlIGVsIHNlZ8O8ZW50LiBMYSByYcOzIMOpcyBlbCBzZWfDvGVudCBlbnRyZSBsJ2FudGVyaW9yOiAkNjoyJC4gTGEgcHJvZ3Jlc3Npw7MgY3JlaXgsIGFpeMOtIHF1ZSAkcj4xJC4iXSwgImVyciI6IFsiIiwgIlBSSU1FUl9URVJNRV9QRVJfRElGRVJFTkNJQSIsICJSQU9fTUFMX0FQTElDQURBIiwgIklOVkVSVElEQSJdLCAicmVzIjogWyIkcj02OjI9MyQgKGkgZXMgY29tcHJvdmE6ICQxODo2PTMkLCAkNTQ6MTg9MyQpIl19"
  },
  {
   "id": "347b",
   "ex": 347,
   "ap": "b",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aquesta progressió sabem que és geomètrica. Quina és la seva raó $r$?",
   "enunciat": "$5,\\;10,\\;20,\\;40,\\;\\dots$",
   "opcions": [
    "$r=5$",
    "$r=2$",
    "$r=10$",
    "$r=\\dfrac{1}{2}$"
   ],
   "pistes": [
    "Per quin nombre multipliques el $5$ per obtenir el $10$?",
    "Divideix dos termes consecutius: $10:5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcmVzdGF0IGRvcyB0ZXJtZXMgKCQxMC01JCk6IGFpeMOyIHNlcmlhIGxhIGRpZmVyw6huY2lhIGQndW5hIHByb2dyZXNzacOzIGFyaXRtw6h0aWNhLiBDb21wcm92YS1obzogJDIwLTEwPTEwJCwgbm8gJDUkLiIsICIiLCAiJDEwJCDDqXMgZWwgc2Vnb24gdGVybWUsIG5vIGxhIHJhw7MuIiwgIkhhcyBkaXZpZGl0IGwnYW50ZXJpb3IgZW50cmUgZWwgc2Vnw7xlbnQuIExhIHJhw7Mgw6lzIGVsIHNlZ8O8ZW50IGVudHJlIGwnYW50ZXJpb3I6ICQxMDo1JC4gTGEgcHJvZ3Jlc3Npw7MgY3JlaXgsIGFpeMOtIHF1ZSAkcj4xJC4iXSwgImVyciI6IFsiUkFPX01BTF9BUExJQ0FEQSIsICIiLCAiQ09NUEFSQV9URVJNRVMiLCAiSU5WRVJUSURBIl0sICJyZXMiOiBbIiRyPTEwOjU9MiQgKGkgZXMgY29tcHJvdmE6ICQyMDoxMD0yJCwgJDQwOjIwPTIkKSJdfQ=="
  },
  {
   "id": "56a",
   "ex": 56,
   "ap": "a",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula, en una progressió geomètrica amb $a_1=3$ i $r=5$.",
   "enunciat": "Terme general amb $a_1=3$ i $r=5$",
   "opcions": [
    "$a_n=3\\cdot5^{\\,n}$",
    "$a_n=3\\cdot5^{\\,n-1}$",
    "$a_n=5\\cdot3^{\\,n-1}$",
    "$a_n=3+(n-1)\\cdot5$"
   ],
   "pistes": [
    "El terme general d'una PG és $a_n=a_1\\cdot r^{\\,n-1}$.",
    "Substitueix-hi $a_1=3$ i $r=5$. Compte: el que s'eleva a $n-1$ és la raó, no el primer terme."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2V4cG9uZW50IGRlbCB0ZXJtZSBnZW5lcmFsIMOpcyAkbi0xJCwgbm8gJG4kOiBwZXIgJG49MSQgbCdleHBvbmVudCBoYSBkZSBzZXIgJDAkLiIsICIiLCAiSGFzIGludGVyY2FudmlhdCBlbCBwcmltZXIgdGVybWUgaSBsYSByYcOzOiBsYSBiYXNlIGRlIGxhIHBvdMOobmNpYSDDqXMgbGEgcmHDsyAoJDUkKSwgaSBlbCBmYWN0b3IgcXVlIGhpIG11bHRpcGxpY2Egw6lzICRhXzEkICgkMyQpLiIsICJFbCB0ZXJtZSBnZW5lcmFsIGQndW5hIFBHIMOpcyB1biBwcm9kdWN0ZSBhbWIgdW5hIHBvdMOobmNpYSwgJGFfMVxcY2RvdCByXntuLTF9JCwgbm8gdW5hIHN1bWEgY29tIGEgdW5hIFBBLiJdLCAiZXJyIjogWyJERVNQTEFDQU1FTlRfSU5ERVgiLCAiIiwgIk9SRFJFX1JFU1RBIiwgIlBPVEVOQ0lBX0RFX1NVTUEiXSwgInJlcyI6IFsiJGFfbj1hXzFcXGNkb3Qgcl57XFwsbi0xfT0zXFxjZG90NV57XFwsbi0xfSQiXX0="
  },
  {
   "id": "56b",
   "ex": 56,
   "ap": "b",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula, en una progressió geomètrica amb $a_1=3$ i $r=5$.",
   "enunciat": "Terme que ocupa el lloc $7$ ($a_1=3$, $r=5$)",
   "opcions": [
    "$105$",
    "$234375$",
    "$46875$",
    "$11390625$"
   ],
   "pistes": [
    "Fes servir $a_n=a_1\\cdot r^{\\,n-1}$ amb $n=7$: l'exponent és $6$.",
    "$a_7=3\\cdot5^6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJDYWwgY2FsY3VsYXIgdW5hIHBvdMOobmNpYSwgJDVeNiQsIGkgbXVsdGlwbGljYXItbGEgcGVyICQzJDsgbm8gZXMgbXVsdGlwbGlxdWVuIGRpcmVjdGFtZW50ICQzJCwgJDckIGkgJDUkLiIsICJMJ2V4cG9uZW50IHF1ZSBjYWwgZmVyIHNlcnZpciBwZXIgYSAkYV83JCDDqXMgJDctMT02JCwgbm8gJDckLiIsICIiLCAiTCdleHBvbmVudCBhZmVjdGEgbm9tw6lzIGxhIHJhw7MsIG5vIGVsIHByaW1lciB0ZXJtZTogw6lzICQzXFxjZG90NV42JCwgbm8gJCgzXFxjZG90NSleNiQuIl0sICJlcnIiOiBbIlBPVEVOQ0lBX0RFX1NVTUEiLCAiREVTUExBQ0FNRU5UX0lOREVYIiwgIiIsICJQT1RFTkNJQV9QUk9EVUNURV9VTl9GQUNUT1IiXSwgInJlcyI6IFsiJGFfNz1hXzFcXGNkb3Qgcl57Nn09M1xcY2RvdDVeNj0zXFxjZG90MTVcXCw2MjU9NDZcXCw4NzUkIl19"
  },
  {
   "id": "56c",
   "ex": 56,
   "ap": "c",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula, en una progressió geomètrica amb $a_1=3$ i $r=5$.",
   "enunciat": "Termes $a_{10}$ i $a_{11}$ ($a_1=3$, $r=5$)",
   "opcions": [
    "$29296875, 146484375$",
    "$5859375, 146484375$",
    "$1953128, 9765628$",
    "$5859375, 29296875$"
   ],
   "pistes": [
    "Fes servir $a_n=a_1\\cdot r^{\\,n-1}$ per a $n=10$ i $n=11$.",
    "$a_{10}=3\\cdot5^9$ i $a_{11}=3\\cdot5^{10}=a_{10}\\cdot5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2V4cG9uZW50IHF1ZSBjYWwgZmVyIHNlcnZpciBwZXIgYSAkYV97MTB9JCDDqXMgJDEwLTE9OSQsIG5vICQxMCQuIiwgIlBlciBwYXNzYXIgZGUgJGFfezEwfSQgYSAkYV97MTF9JCBjYWwgbXVsdGlwbGljYXIgcGVyICRyJCB1biBzb2wgY29wLCBubyBkb3MuIiwgIkVsIHRlcm1lIGdlbmVyYWwgZCd1bmEgUEcgw6lzIHVuIHByb2R1Y3RlIGFtYiB1bmEgcG90w6huY2lhLCBubyB1bmEgc3VtYS4iLCAiIl0sICJlcnIiOiBbIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJFWFBPTkVOVFNfTVVMVElQTElDQVRTIiwgIlBPVEVOQ0lBX0RFX1NVTUEiLCAiIl0sICJyZXMiOiBbIiRhX3sxMH09YV8xXFxjZG90IHJeezl9PTNcXGNkb3Q1Xjk9NVxcLDg1OVxcLDM3NSQiLCAiJGFfezExfT1hX3sxMH1cXGNkb3Qgcj01XFwsODU5XFwsMzc1XFxjZG90NT0yOVxcLDI5NlxcLDg3NSQiXX0="
  },
  {
   "id": "57a",
   "ex": 57,
   "ap": "a",
   "bloc": "geometriques",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Donada la successió $\\dfrac23,\\;\\dfrac29,\\;\\dfrac2{27},\\;\\dfrac2{81},\\dots$:",
   "enunciat": "Comprova si $\\dfrac23,\\;\\dfrac29,\\;\\dfrac2{27},\\;\\dfrac2{81},\\dots$ és una progressió geomètrica.",
   "opcions": [
    "Sí, perquè tots els numeradors són iguals a $2$.",
    "Sí, perquè el quocient entre termes consecutius és sempre el mateix: $r=\\dfrac13$.",
    "No, perquè els denominadors no augmenten sempre la mateixa quantitat.",
    "No, perquè els termes van disminuint."
   ],
   "pistes": [
    "Divideix cada terme entre l'anterior i comprova si el resultat és sempre el mateix.",
    "$\\dfrac{2/9}{2/3}=\\dfrac13$, $\\dfrac{2/27}{2/9}=\\dfrac13$, $\\dfrac{2/81}{2/27}=\\dfrac13$: sempre la mateixa."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJRdWUgZWwgbnVtZXJhZG9yIGVzIG1hbnRpbmd1aSAkMiQgw6lzIHVuYSBjb25zZXHDvMOobmNpYSBkJ2FxdWVzdGEgc3VjY2Vzc2nDsyBjb25jcmV0YSwgbm8gbGEgZGVmaW5pY2nDsyBkZSBwcm9ncmVzc2nDsyBnZW9tw6h0cmljYTogY2FsIGNvbXByb3ZhciBxdWUgZWwgcXVvY2llbnQgZW50cmUgdGVybWVzIGNvbnNlY3V0aXVzIMOpcyBjb25zdGFudC4iLCAiIiwgIkVuIHVuYSBQRyBlbHMgZGVub21pbmFkb3JzIChvIGVscyB2YWxvcnMpIG5vIGhhbiBkJ2F1Z21lbnRhciBTVU1BTlQgc2VtcHJlIGVsIG1hdGVpeDogaGFuIGRlIG11bHRpcGxpY2FyLXNlIHNlbXByZSBwZWwgbWF0ZWl4IGZhY3RvciwgaSBhcXXDrSDDqXMgYWl4w60gKCRcXHRpbWVzMyQgY2FkYSB2ZWdhZGEgYWwgZGVub21pbmFkb3IpLiIsICJRdWUgZWxzIHRlcm1lcyBkaXNtaW51ZWl4aW4gbm8gaW1wZWRlaXggcXVlIHNpZ3VpIHVuYSBQRzogdW5hIHJhw7MgbWVub3IgcXVlICQxJCBpIGNvbnN0YW50IHRhbWLDqSBkZWZpbmVpeCB1bmEgcHJvZ3Jlc3Npw7MgZ2VvbcOodHJpY2EuIl0sICJlcnIiOiBbIlJBT05BTUVOVF9BRERJVElVIiwgIiIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiVkVSRURJQ1RFX0lOVkVSVElUIl0sICJyZXMiOiBbIiRcXGRmcmFjezIvOX17Mi8zfT1cXGRmcmFjMTMkLCAkXFxkZnJhY3syLzI3fXsyLzl9PVxcZGZyYWMxMyQsICRcXGRmcmFjezIvODF9ezIvMjd9PVxcZGZyYWMxMyQ6IHF1b2NpZW50IGNvbnN0YW50LCAkcj1cXGRmcmFjMTMkLCBwZXIgdGFudCBzw60gcXVlIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgZ2VvbcOodHJpY2EiXX0="
  },
  {
   "id": "57b",
   "ex": 57,
   "ap": "b",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Donada la successió $\\dfrac23,\\;\\dfrac29,\\;\\dfrac2{27},\\;\\dfrac2{81},\\dots$:",
   "enunciat": "Terme $10$ de $\\dfrac23,\\;\\dfrac29,\\;\\dfrac2{27},\\;\\dfrac2{81},\\dots$",
   "opcions": [
    "$\\dfrac{2}{177147}$",
    "$\\dfrac{2}{59049}$",
    "$\\dfrac{1}{19683}$",
    "$13122$"
   ],
   "pistes": [
    "Fes servir $a_n=a_1\\cdot r^{\\,n-1}$ amb $n=10$: l'exponent és $9$.",
    "$a_{10}=\\dfrac23\\cdot\\left(\\dfrac13\\right)^9$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2V4cG9uZW50IHF1ZSBjYWwgZmVyIHNlcnZpciBwZXIgYSAkYV97MTB9JCDDqXMgJDEwLTE9OSQsIG5vICQxMCQuIiwgIiIsICJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIGZhY3RvciAkXFxkZnJhYzIzJCBkZSBkYXZhbnQ6IGNhZGEgdGVybWUgw6lzICRcXGRmcmFjMjNcXGNkb3RcXGxlZnQoXFxkZnJhYzEzXFxyaWdodClee24tMX0kLCBubyBub23DqXMgbGEgcG90w6huY2lhLiIsICJIYXMgZmV0IHNlcnZpciAkcj0zJCBlbiBsbG9jIGRlICRyPVxcZGZyYWMxMyQ6IGxhIHN1Y2Nlc3Npw7MgZGlzbWludWVpeCwgbGEgcmHDsyBoYSBkZSBzZXIgbWVub3IgcXVlICQxJC4iXSwgImVyciI6IFsiREVTUExBQ0FNRU5UX0lOREVYIiwgIiIsICJGQUNUT1JfT0JMSURBVCIsICJJTlZFUlRJREEiXSwgInJlcyI6IFsiJGFfezEwfT1hXzFcXGNkb3Qgcl57OX09XFxkZnJhYzIzXFxjZG90XFxsZWZ0KFxcZGZyYWMxM1xccmlnaHQpXjk9XFxkZnJhYzJ7M157MTB9fT1cXGRmcmFjezJ9ezU5XFwsMDQ5fSQiXX0="
  },
  {
   "id": "57c",
   "ex": 57,
   "ap": "c",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Donada la successió $\\dfrac23,\\;\\dfrac29,\\;\\dfrac2{27},\\;\\dfrac2{81},\\dots$:",
   "enunciat": "Termes $a_{100}$ i $a_{101}$ de $\\dfrac23,\\;\\dfrac29,\\;\\dfrac2{27},\\;\\dfrac2{81},\\dots$",
   "opcions": [
    "$a_{100}=\\dfrac{2}{3^{100}},\\;\\;a_{101}=\\dfrac{2}{3^{101}}$",
    "$a_{100}=\\dfrac{2}{3^{99}},\\;\\;a_{101}=\\dfrac{2}{3^{100}}$",
    "$a_{100}=\\dfrac{2}{3^{101}},\\;\\;a_{101}=\\dfrac{2}{3^{102}}$",
    "$a_{100}=3^{99},\\;\\;a_{101}=3^{100}$"
   ],
   "pistes": [
    "Comprova primer el patró amb un terme petit: $a_2=\\dfrac29=\\dfrac2{3^2}$, $a_3=\\dfrac2{27}=\\dfrac2{3^3}$.",
    "El patró és $a_n=\\dfrac{2}{3^{\\,n}}$: substitueix $n=100$ i $n=101$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRmFsdGEgY29tcHRhciBlbCBmYWN0b3IgJFxcZGZyYWMyMyQgaW5pY2lhbCBkaW5zIGRlIGxhIHBvdMOobmNpYSBkZSAkMyQgZGVsIGRlbm9taW5hZG9yOiAkYV8yPVxcZGZyYWMyM1xcY2RvdFxcZGZyYWMxMz1cXGRmcmFjMnszXjJ9JCwgbm8gJFxcZGZyYWMyezNeMX0kLiIsICJMJ2V4cG9uZW50IHF1ZSBjYWwgZmVyIHNlcnZpciBwZXIgYSAkYV97MTAwfSQgw6lzICQxMDAtMT05OSQsIHF1ZSDDqXMgZWwgcXVlIGRvbmEgJDNeezEwMH0kIGFsIGRlbm9taW5hZG9yIHVuIGNvcCBlc2NyaXQgYW1iICRhXzE9XFxkZnJhYzIzJDogcmV2aXNhIGVsIGRlc3BsYcOnYW1lbnQgYW1iIHVuIGNhcyBwZXRpdCBhYmFucywgY29tICRhXzI9XFxkZnJhYzI5PVxcZGZyYWMyezNeMn0kLiIsICJFbHMgdGVybWVzIGRlIGxhIHN1Y2Nlc3Npw7MgdmFuIGZlbnQtc2UgY2FkYSB2ZWdhZGEgbcOpcyBwZXRpdHMgKGxhIHJhw7Mgw6lzICRcXGRmcmFjMTMkLCBtZW5vciBxdWUgJDEkKTogbm8gcG9kZW4gdmFsZXIgbm9tYnJlcyBlbnRlcnMgY2FkYSB2ZWdhZGEgbcOpcyBncmFucy4iXSwgImVyciI6IFsiIiwgIkZBQ1RPUl9PQkxJREFUIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJJTlZFUlRJREEiXSwgInJlcyI6IFsiQ29tIHF1ZSAkYV8xPVxcZGZyYWMyMz1cXGRmcmFjMnszXjF9JCwgJGFfMj1cXGRmcmFjMnszXjJ9JC4uLiBlbCBwYXRyw7Mgw6lzICRhX249XFxkZnJhY3syfXszXntcXCxufX0kIiwgIiRhX3sxMDB9PVxcZGZyYWN7Mn17M157MTAwfX0kIGkgJGFfezEwMX09XFxkZnJhY3syfXszXnsxMDF9fSQiXX0="
  },
  {
   "id": "55",
   "ex": 55,
   "ap": "",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "En una progressió geomètrica, $a_1=4$ i $a_2=3$. Busca'n el terme general i $a_{20}$.",
   "enunciat": "Terme general i $a_{20}$ d'una progressió geomètrica amb $a_1=4$ i $a_2=3$",
   "opcions": [
    "$a_n=4\\cdot\\left(\\dfrac43\\right)^{n-1}\\;\\;\\;\\;\\dfrac{1099511627776}{1162261467}$",
    "$a_n=4\\cdot\\left(\\dfrac34\\right)^{n-1}\\;\\;\\;\\;\\dfrac{1162261467}{68719476736}$",
    "$a_n=3\\cdot\\left(\\dfrac34\\right)^{n-1}\\;\\;\\;\\;\\dfrac{3486784401}{274877906944}$",
    "$a_n=4\\cdot\\left(\\dfrac34\\right)^{n}\\;\\;\\;\\;\\dfrac{3486784401}{274877906944}$"
   ],
   "pistes": [
    "La raó és el segon terme entre el primer: $r=\\dfrac{a_2}{a_1}$.",
    "$r=\\dfrac34$. El terme general és $a_n=a_1\\cdot r^{\\,n-1}=4\\cdot\\left(\\dfrac34\\right)^{n-1}$.",
    "Per a $a_{20}$, fes servir $n=20$: l'exponent és $19$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMYSByYcOzIMOpcyAkcj1cXGRmcmFje2FfMn17YV8xfT1cXGRmcmFjMzQkLCBubyAkXFxkZnJhYzQzJDogaGFzIGludmVydGl0IGVsIHF1b2NpZW50IGVuIGVscyBkb3MgY8OgbGN1bHMuIiwgIiIsICJFbCBwcmltZXIgdGVybWUgZGUgbGEgcHJvZ3Jlc3Npw7Mgw6lzICRhXzE9NCQsIG5vICQzJCAoYXF1ZXN0IMOpcyAkYV8yJCk6IGVsIGZhY3RvciBxdWUgdmEgZGF2YW50IGRlIGxhIHBvdMOobmNpYSBoYSBkZSBzZXIgJDQkLiIsICJMJ2V4cG9uZW50IGRlbCB0ZXJtZSBnZW5lcmFsIMOpcyAkbi0xJCwgbm8gJG4kOiBwZXIgJG49MSQgbCdleHBvbmVudCBoYSBkZSBzZXIgJDAkLCBpIHBlciBhICRhX3syMH0kIGwnZXhwb25lbnQgaGEgZGUgc2VyICQxOSQsIG5vICQyMCQuIl0sICJlcnIiOiBbIklOVkVSVElEQSIsICIiLCAiQ09NUEFSQV9URVJNRVMiLCAiREVTUExBQ0FNRU5UX0lOREVYIl0sICJyZXMiOiBbIiRyPVxcZGZyYWN7YV8yfXthXzF9PVxcZGZyYWMzNCQiLCAiJGFfbj1hXzFcXGNkb3Qgcl57XFwsbi0xfT00XFxjZG90XFxsZWZ0KFxcZGZyYWMzNFxccmlnaHQpXntuLTF9JCIsICIkYV97MjB9PTRcXGNkb3RcXGxlZnQoXFxkZnJhYzM0XFxyaWdodCleezE5fT1cXGRmcmFjezFcXCwxNjJcXCwyNjFcXCw0Njd9ezY4XFwsNzE5XFwsNDc2XFwsNzM2fSQiLCAiw4lzIHVuIG5vbWJyZSBtb2x0IHBldGl0LCBtw6lzIGEgcHJvcCBkZSAkMCQgcXVlIGRlICQxJDogdMOpIHNlbnRpdCwgcGVycXXDqCBsYSByYcOzICRcXGRmcmFjMzQkIMOpcyBtZW5vciBxdWUgJDEkIGkgbGEgc3VjY2Vzc2nDsyB2YSBkaXNtaW51aW50LiJdfQ=="
  },
  {
   "id": "58a",
   "ex": 58,
   "ap": "a",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Troba els termes que falten a les progressions geomètriques següents.",
   "enunciat": "$1;\\;0{,}1;\\;\\square;\\;0{,}001;\\;\\square$",
   "opcions": [
    "$1, \\dfrac{1}{10}, \\dfrac{1}{20}, \\dfrac{1}{1000}, \\dfrac{1}{2000}$",
    "$1, \\dfrac{1}{10}, \\dfrac{9}{100}, \\dfrac{1}{1000}, \\dfrac{1}{1250}$",
    "$1, \\dfrac{1}{10}, \\dfrac{1}{100}, \\dfrac{1}{1000}, \\dfrac{1}{10000}$",
    "$1, \\dfrac{1}{10}, \\dfrac{1}{100}, \\dfrac{1}{1000}, \\dfrac{1}{100}$"
   ],
   "pistes": [
    "La raó és el quocient entre dos termes consecutius coneguts: $r=0{,}1:1$.",
    "$r=0{,}1$. Multiplica cada terme per $0{,}1$ per obtenir el següent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB0ZXJjZXIgdGVybWUgcydvYnTDqSBtdWx0aXBsaWNhbnQgcGVyICRyPTB7LH0xJCwgbm8gZGl2aWRpbnQgZW50cmUgJDIkOiAkMHssfTFcXGNkb3Qweyx9MT0weyx9MDEkLCBubyAkXFxkZnJhYzF7MjB9JC4iLCAiRWxzIHRlcm1lcyBxdWUgZmFsdGVuIGhhbiBkZSBzZWd1aXIgZXN0cmljdGFtZW50IGxhIHJhw7MgJHI9MHssfTEkLCBubyBhbmFyIGRpc21pbnVpbnQgdW5hIG1pY2EgY2FkYSB2ZWdhZGEgZGUgbWFuZXJhIGFwcm94aW1hZGEuIiwgIiIsICJFbCBjaW5xdcOoIHRlcm1lIGhhIGRlIGNvbnRpbnVhciBlbCBwYXRyw7MgZGUgZGl2aWRpciBlbnRyZSAkMTAkOiAkMHssfTAwMToxMD0weyx9MDAwMSQsIG5vIHJlcGV0aXIgZWwgdGVyY2VyIHRlcm1lLiJdLCAiZXJyIjogWyJSQU9fTUFMX0FQTElDQURBIiwgIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIiIsICJDT01QQVJBX1RFUk1FUyJdLCAicmVzIjogWyIkcj0weyx9MToxPTB7LH0xJCIsICIkYV8zPWFfMlxcY2RvdCByPTB7LH0xXFxjZG90MHssfTE9MHssfTAxJCIsICIkYV81PWFfNFxcY2RvdCByPTB7LH0wMDFcXGNkb3Qweyx9MT0weyx9MDAwMSQiLCAiRWxzIGNpbmMgdGVybWVzIHPDs24gJDEsXFw7MHssfTEsXFw7MHssfTAxLFxcOzB7LH0wMDEsXFw7MHssfTAwMDEkIl19"
  },
  {
   "id": "58b",
   "ex": 58,
   "ap": "b",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Troba els termes que falten a les progressions geomètriques següents.",
   "enunciat": "$\\square,\\;\\dfrac12,\\;\\dfrac16,\\;\\square,\\;\\dfrac1{54},\\;\\square$",
   "opcions": [
    "$\\dfrac{3}{2}, \\dfrac{1}{2}, \\dfrac{1}{6}, \\dfrac{1}{12}, \\dfrac{1}{54}, \\dfrac{1}{162}$",
    "$\\dfrac{3}{2}, \\dfrac{1}{2}, \\dfrac{1}{6}, \\dfrac{1}{18}, \\dfrac{1}{54}, \\dfrac{1}{108}$",
    "$\\dfrac{3}{2}, \\dfrac{1}{2}, \\dfrac{1}{6}, \\dfrac{1}{18}, \\dfrac{1}{54}, \\dfrac{1}{162}$",
    "$\\dfrac{1}{6}, \\dfrac{1}{2}, \\dfrac{1}{6}, \\dfrac{1}{18}, \\dfrac{1}{54}, \\dfrac{1}{162}$"
   ],
   "pistes": [
    "La raó és el quocient entre dos termes consecutius coneguts: $r=\\dfrac{1/6}{1/2}$.",
    "$r=\\dfrac13$. Multiplica per $\\dfrac13$ per avançar; divideix per anar enrere."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBxdWFydCB0ZXJtZSBzJ29idMOpIG11bHRpcGxpY2FudCBlbCB0ZXJjZXIgcGVyICRyPVxcZGZyYWMxMyQ6ICRcXGRmcmFjMTZcXGNkb3RcXGRmcmFjMTM9XFxkZnJhYzF7MTh9JCwgbm8gJFxcZGZyYWMxezEyfSQuIiwgIkVsIHNpc8OoIHRlcm1lIHMnb2J0w6kgbXVsdGlwbGljYW50IGVsIGNpbnF1w6ggcGVyICRyPVxcZGZyYWMxMyQ6ICRcXGRmcmFjMXs1NH1cXGNkb3RcXGRmcmFjMTM9XFxkZnJhYzF7MTYyfSQsIG5vICRcXGRmcmFjMXsxMDh9JC4iLCAiIiwgIlBlciBhbmFyIGNhcCBlbnJlcmUgKGRlbCBzZWdvbiBhbCBwcmltZXIgdGVybWUpIGNhbCBESVZJRElSIGVudHJlIGxhIHJhw7MsICRcXGRmcmFjMTI6XFxkZnJhYzEzJCwgbm8gbXVsdGlwbGljYXItaGkuIl0sICJlcnIiOiBbIlJBT19NQUxfQVBMSUNBREEiLCAiQ09NUEFSQV9URVJNRVMiLCAiIiwgIklOVkVSVElEQSJdLCAicmVzIjogWyIkcj1cXGRmcmFjezEvNn17MS8yfT1cXGRmcmFjMTMkIiwgIiRhXzE9YV8yOnI9XFxkZnJhYzEyOlxcZGZyYWMxMz1cXGRmcmFjMzIkIiwgIiRhXzQ9YV8zXFxjZG90IHI9XFxkZnJhYzE2XFxjZG90XFxkZnJhYzEzPVxcZGZyYWMxezE4fSQiLCAiJGFfNj1hXzVcXGNkb3Qgcj1cXGRmcmFjMXs1NH1cXGNkb3RcXGRmcmFjMTM9XFxkZnJhYzF7MTYyfSQiLCAiRWxzIHNpcyB0ZXJtZXMgc8OzbiAkXFxkZnJhYzMyLFxcO1xcZGZyYWMxMixcXDtcXGRmcmFjMTYsXFw7XFxkZnJhYzF7MTh9LFxcO1xcZGZyYWMxezU0fSxcXDtcXGRmcmFjMXsxNjJ9JCJdfQ=="
  },
  {
   "id": "58c",
   "ex": 58,
   "ap": "c",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Troba els termes que falten a les progressions geomètriques següents.",
   "enunciat": "$\\square,\\;\\dfrac13,\\;\\square,\\;\\dfrac1{12},\\;\\square$, amb raó positiva.",
   "opcions": [
    "$\\dfrac{2}{3}, \\dfrac{1}{3}, \\dfrac{1}{6}, \\dfrac{1}{12}, \\dfrac{1}{24}$",
    "$-\\dfrac{2}{3}, \\dfrac{1}{3}, -\\dfrac{1}{6}, \\dfrac{1}{12}, -\\dfrac{1}{24}$",
    "$\\dfrac{2}{3}, \\dfrac{1}{3}, \\dfrac{1}{9}, \\dfrac{1}{12}, \\dfrac{1}{36}$",
    "$\\dfrac{4}{3}, \\dfrac{1}{3}, \\dfrac{1}{12}, \\dfrac{1}{12}, \\dfrac{1}{48}$"
   ],
   "pistes": [
    "Els dos termes coneguts són a les posicions $2$ i $4$: la relació entre ells és $r^2$.",
    "$r^2=\\dfrac{1/12}{1/3}=\\dfrac14\\Rightarrow r=\\dfrac12$ (prenem l'arrel positiva). A partir d'aquí, multiplica o divideix per $\\dfrac12$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQW1iIHJhw7MgJC1cXGRmcmFjMTIkIHRhbWLDqSBzdXJ0IHVuYSBwcm9ncmVzc2nDsyBnZW9tw6h0cmljYSBxdWUgaGkgZW5jYWl4YSwgcGVycXXDqCAkcl4yPVxcZGZyYWMxNCQgdMOpIGR1ZXMgc29sdWNpb25zLiBQZXLDsiBsJ2VudW5jaWF0IGxhIGRlbWFuYSBkZSByYcOzIHBvc2l0aXZhLiIsICJFbCB0ZXJjZXIgdGVybWUgcydvYnTDqSBtdWx0aXBsaWNhbnQgZWwgc2Vnb24gcGVyICRyPVxcZGZyYWMxMiQ6ICRcXGRmcmFjMTNcXGNkb3RcXGRmcmFjMTI9XFxkZnJhYzE2JCwgbm8gJFxcZGZyYWMxOSQuIiwgIkVudHJlIGVsIHNlZ29uIHRlcm1lICgkXFxkZnJhYzEzJCkgaSBlbCBxdWFydCAoJFxcZGZyYWMxezEyfSQpIGhpIGhhIGV4YWN0YW1lbnQgRE9TIHBhc3NvcyBkZSAkciQsIG5vIHVuLiJdLCAiZXJyIjogWyIiLCAiQ09ORElDSU9fRU5VTkNJQVRfSUdOT1JBREEiLCAiUkFPX01BTF9BUExJQ0FEQSIsICJERVNQTEFDQU1FTlRfSU5ERVgiXSwgInJlcyI6IFsiJHJeMj1cXGRmcmFjezEvMTJ9ezEvM309XFxkZnJhYzE0XFxSaWdodGFycm93IHI9XFxkZnJhYzEyJCIsICIkYV8xPWFfMjpyPVxcZGZyYWMxMzpcXGRmcmFjMTI9XFxkZnJhYzIzJCIsICIkYV8zPWFfMlxcY2RvdCByPVxcZGZyYWMxM1xcY2RvdFxcZGZyYWMxMj1cXGRmcmFjMTYkIiwgIiRhXzU9YV80XFxjZG90IHI9XFxkZnJhYzF7MTJ9XFxjZG90XFxkZnJhYzEyPVxcZGZyYWMxezI0fSQiLCAiRWxzIGNpbmMgdGVybWVzIHPDs24gJFxcZGZyYWMyMyxcXDtcXGRmcmFjMTMsXFw7XFxkZnJhYzE2LFxcO1xcZGZyYWMxezEyfSxcXDtcXGRmcmFjMXsyNH0kIl0sICJjb20iOiAiRGUgJHJeMj1cXGRmcmFjMTQkIGVuIHN1cnRlbiBkdWVzIHJhb25zLCAkcj1cXGRmcmFjMTIkIGkgJHI9LVxcZGZyYWMxMiQuIEFtYiBsYSBuZWdhdGl2YSBlbHMgdGVybWVzIGFsdGVybmVuIGVsIHNpZ25lLCAkLVxcZGZyYWMyMyxcXDtcXGRmcmFjMTMsXFw7LVxcZGZyYWMxNixcXDtcXGRmcmFjMXsxMn0sXFw7LVxcZGZyYWMxezI0fSQsIGkgdGFtYsOpIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgZ2VvbcOodHJpY2EgdsOgbGlkYS4ifQ=="
  },
  {
   "id": "58d",
   "ex": 58,
   "ap": "d",
   "bloc": "geometriques",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Troba els termes que falten a les progressions geomètriques següents.",
   "enunciat": "$\\square,\\;\\dfrac32,\\;\\square,\\;\\square,\\;\\dfrac{81}4$",
   "opcions": [
    "La raó és $r^3=\\dfrac{27}2$ i ja està, no cal continuar.",
    "La raó és $r=\\sqrt[3]{\\dfrac{27}{2}}=\\dfrac{3}{\\sqrt[3]{2}}$, un nombre irracional; per tant els termes que falten es deixen expressats en funció de $r$: $a_1=\\dfrac{3}{2r}$, $a_3=\\dfrac32\\,r$, $a_4=\\dfrac32\\,r^2$.",
    "La raó és $r=3$ i els termes que falten són $\\dfrac12,\\;\\dfrac92,\\;\\dfrac{27}2$.",
    "No es pot resoldre perquè la raó no és un nombre enter."
   ],
   "pistes": [
    "Els dos termes coneguts són a les posicions $2$ i $5$: la relació entre ells és $r^3$.",
    "$r^3=\\dfrac{81/4}{3/2}=\\dfrac{27}2$. Aquesta vegada $r$ no surt un nombre senzill: cal deixar-lo com una arrel cúbica."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkcl4zPVxcZGZyYWN7Mjd9MiQgw6lzIHVuIHBhcyBpbnRlcm1lZGksIG5vIGxhIHJhw7M6IGNhbCBlbmNhcmEgZXh0cmV1cmUgbCdhcnJlbCBjw7piaWNhLCAkcj1cXHNxcnRbM117XFxkZnJhY3syN30yfSQsIGkgZmVyIHNlcnZpciBhcXVlc3QgdmFsb3IgcGVyIGNvbXBsZXRhciBlbHMgdGVybWVzIHF1ZSBmYWx0ZW4uIiwgIiIsICJBbWIgJHI9MyQgZWwgY2lucXXDqCB0ZXJtZSBkb25hcmlhICRcXGRmcmFjMzJcXGNkb3QzXjM9XFxkZnJhYzMyXFxjZG90Mjc9XFxkZnJhY3s4MX0yJCwgbm8gJFxcZGZyYWN7ODF9NCQgKGVsIHZhbG9yIHJlYWwgZGUgbCdlbnVuY2lhdCk6ICRyPTMkIG5vIGNvbXBsZWl4IGxhIHJlbGFjacOzICRyXjM9XFxkZnJhY3s4MS80fXszLzJ9PVxcZGZyYWN7Mjd9MiQuIiwgIlPDrSBxdWUgZXMgcG90IHJlc29sZHJlOiBsYSByYcOzIMOpcyAkcj1cXHNxcnRbM117XFxkZnJhY3syN30yfSQgKHVuIG5vbWJyZSBpcnJhY2lvbmFsIHBlcsOyIHBlcmZlY3RhbWVudCB2w6BsaWQpLCBpIGVscyB0ZXJtZXMgcXVlIGZhbHRlbiBlcyBwb2RlbiBleHByZXNzYXIgZW4gZnVuY2nDsyBkJ2FxdWVzdCB2YWxvciBkZSAkciQuIl0sICJlcnIiOiBbIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIiIsICJSQU9fTUFMX0FQTElDQURBIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkcl4zPVxcZGZyYWN7ODEvNH17My8yfT1cXGRmcmFjezgxfTRcXGNkb3RcXGRmcmFjMjM9XFxkZnJhY3syN30yXFxSaWdodGFycm93IHI9XFxzcXJ0WzNde1xcZGZyYWN7Mjd9Mn09XFxkZnJhY3szfXtcXHNxcnRbM10yfSQiLCAiQ29tIHF1ZSAkciQgbm8gw6lzIHVuIG5vbWJyZSByYWNpb25hbCBzZW56aWxsLCBlbHMgdGVybWVzIHF1ZSBmYWx0ZW4gZXMgZGVpeGVuIGluZGljYXRzIGVuIGZ1bmNpw7MgZGUgJHIkIiwgIiRhXzE9YV8yOnI9XFxkZnJhYzMyOnI9XFxkZnJhYzN7MnJ9JCIsICIkYV8zPWFfMlxcY2RvdCByPVxcZGZyYWMzMlxcLHIkIiwgIiRhXzQ9YV8zXFxjZG90IHI9XFxkZnJhYzMyXFwscl4yJCJdfQ=="
  }
 ]
};
