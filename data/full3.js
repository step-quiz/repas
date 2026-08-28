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
    "52a",
    "52b",
    "52c",
    "52d",
    "53a",
    "53b",
    "53c",
    "54a",
    "54b",
    "54c",
    "54d",
    "54e",
    "54f"
   ]
  },
  {
   "id": "geometriques",
   "titol": "Progressions geomètriques",
   "descripcio": "Raó, terme general i termes que falten.",
   "items": [
    "55",
    "56a",
    "56b",
    "56c",
    "57a",
    "57b",
    "57c",
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
   ]
  }
 ],
 "errors": {
  "BASE_EXPONENT_INTERCANVIATS": "Has canviat de lloc la base i l'exponent: no és el mateix $a^b$ que $b^a$.",
  "BASE_SIGNE_PERDUT": "El resultat ha de conservar la base tal com era, amb el seu signe.",
  "COMPARA_TERMES": "Dues fraccions equivalents gairebé mai tenen els mateixos termes: el que ha de coincidir és el valor, no les xifres.",
  "DESPLACAMENT_INDEX": "Revisa a partir de quin valor de $n$ comences a substituir, o quin exponent li correspon: t'has desplaçat una posició.",
  "ENTER_AL_NUMERADOR": "Has sumat l'enter directament al numerador. Un enter és una fracció de denominador $1$: cal reduir-lo a denominador comú abans de sumar.",
  "ENTER_MULTIPLICA_DENOMINADOR": "En multiplicar un enter per una fracció, l'enter multiplica NOMÉS el numerador; el denominador no canvia.",
  "EXPONENTS_MULTIPLICATS": "En multiplicar potències de la mateixa base, els exponents se SUMEN, no es multipliquen: $a^m\\cdot a^n=a^{m+n}$.",
  "EXPONENT_COM_PRODUCTE": "En una expressió com $2^n$, l'exponent $n$ no és un factor que es multiplica per la base: cal calcular la potència, no un producte.",
  "EXPONENT_MULTIPLICAT": "L'exponent que dona l'enunciat s'ha de fer servir tal qual, no multiplicat per un altre nombre.",
  "EXPONENT_SENSE_DESPLACAR": "T'has deixat pel camí una part de l'exponent: si l'enunciat diu $n+2$ (o similar), cal fer servir aquest exponent complet, no només la $n$.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "FRACCIO_NO_INVERTIDA": "Per elevar una fracció a un exponent negatiu cal INVERTIR la fracció i fer l'exponent positiu: $\\left(\\dfrac{a}{b}\\right)^{-n}=\\left(\\dfrac{b}{a}\\right)^n$.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "JERARQUIA": "Primer les multiplicacions i divisions; després, les sumes i restes.",
  "MENYS_PARENTESI": "El signe $-$ davant d'un parèntesi canvia el signe de TOTS els termes de dins, no només del primer.",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PARENTESI_NO_DISTRIBUIT": "No has canviat cap signe en treure el parèntesi. Restar un parèntesi vol dir restar-ne tots els termes.",
  "PARITAT_EXPONENT": "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna resultat positiu; amb exponent senar, el resultat es queda negatiu.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "POTENCIA_PRODUCTE_UN_FACTOR": "L'exponent afecta TOTS els factors del producte, no només un: $(a\\cdot b)^n=a^n\\cdot b^n$.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "RAONAMENT_ADDITIU": "Has passat d'una fracció a l'altra sumant. Dues fraccions són equivalents quan es passa d'una a l'altra MULTIPLICANT els dos termes pel mateix nombre.",
  "RAO_MAL_APLICADA": "Per passar d'un terme al següent s'ha de MULTIPLICAR per la raó. Comprova la raó amb dos termes consecutius que ja tinguis i aplica-la sempre igual.",
  "REGLA_NOMES_QUOCIENT": "La regla de restar exponents és per DIVIDIR potències de la mateixa base, no per restar-les: quan es resten, cal restar els valors de cada potència.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_PRODUCTE": "Revisa la regla dels signes del producte: signes diferents donen resultat negatiu.",
  "SIGNE_SUMA": "Revisa el signe del terme que se suma: sumar un negatiu fa disminuir.",
  "SIMPLIFICACIO_INVENTADA": "Has simplificat una fracció que ja era irreductible. Comprova que el numerador i el denominador tinguin algun factor comú abans de tocar-la.",
  "TERME_MAL_CALCULAT": "Un dels termes no surt: comprova'l substituint-lo al terme general o sumant-hi la diferència des de l'anterior.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "47a",
   "ex": 47,
   "ap": "a",
   "bloc": "termes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba els cinc primers termes de la successió el terme general de la qual és:",
   "enunciat": "$a_n = 2^n$",
   "opcions": [
    "$4, 8, 16, 32, 64$",
    "$1, 2, 3, 4, 5$",
    "$2, 4, 6, 8, 10$",
    "$2, 4, 8, 16, 32$"
   ],
   "pistes": [
    "Substitueix $n=1,2,3,4,5$ un per un a $a_n=2^n$.",
    "$a_1=2^1=2$, $a_2=2^2=4$, $a_3=2^3=8$, i així successivament."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgY29tZW7Dp2F0IGEgJG49MiQgZW4gbGxvYyBkZSAkbj0xJDogZWwgcHJpbWVyIHRlcm1lIMOpcyAkYV8xJCwgbm8gJGFfMiQuIiwgIkhhcyBjYWxjdWxhdCAkbl4yJCBlbiBsbG9jIGRlICQyXm4kOiBsYSBiYXNlIMOpcyAkMiQgKGZpeGEpIGkgbCdleHBvbmVudCDDqXMgJG4kICh2YXJpYWJsZSksIG5vIGEgbCdpbnJldsOpcy4iLCAiSGFzIGNhbGN1bGF0ICQyXFxjZG90IG4kIGVuIGxsb2MgZGUgJDJebiQ6IGFxdcOtIGwnZXhwb25lbnQgw6lzICRuJCwgbm8gdW4gZmFjdG9yLiIsICIiXSwgImVyciI6IFsiREVTUExBQ0FNRU5UX0lOREVYIiwgIkJBU0VfRVhQT05FTlRfSU5URVJDQU5WSUFUUyIsICJFWFBPTkVOVF9DT01fUFJPRFVDVEUiLCAiIl0sICJyZXMiOiBbIiRhX249Ml5uXFxSaWdodGFycm93IGFfMT0yLFxcO2FfMj00LFxcO2FfMz04LFxcO2FfND0xNixcXDthXzU9MzIkIl19"
  },
  {
   "id": "47b",
   "ex": 47,
   "ap": "b",
   "bloc": "termes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba els cinc primers termes de la successió el terme general de la qual és:",
   "enunciat": "$a_n = (-3)^{n+2}$",
   "opcions": [
    "$-3, 9, -27, 81, -243$",
    "$27, 81, 243, 729, 2187$",
    "$-9, 81, -729, 6561, -59049$",
    "$-27, 81, -243, 729, -2187$"
   ],
   "pistes": [
    "Per a cada $n$, l'exponent és $n+2$: per $n=1$ és $3$; per $n=2$ és $4$, etc.",
    "$a_1=(-3)^3=-27$, $a_2=(-3)^4=81$, $a_3=(-3)^5=-243$..."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgY2FsY3VsYXQgJCgtMylebiQgZW4gbGxvYyBkZSAkKC0zKV57bisyfSQ6IG5vIHQnaGFzIHF1ZWRhdCBsJ2V4cG9uZW50ICQrMiQgZGUgbCdlbnVuY2lhdC4iLCAiRWwgcmVzdWx0YXQgaGEgZGUgY29uc2VydmFyIGVsIHNpZ25lIGRlIGxhIGJhc2UgJC0zJDogY29tIHF1ZSBsJ2V4cG9uZW50ICRuKzIkIMOpcyBhIHZlZ2FkZXMgc2VuYXIsIGVsIHJlc3VsdGF0IHRhbWLDqSBoYSBkZSBzZXIgbmVnYXRpdSBlbiBhcXVlc3RzIGNhc29zLiIsICJIYXMgY2FsY3VsYXQgJCgtMyleezJufSQgZW4gbGxvYyBkZSAkKC0zKV57bisyfSQ6IGwnZXhwb25lbnQgw6lzICRuKzIkICh1bmEgc3VtYSksIG5vICQybiQgKHVuIHByb2R1Y3RlKS4iLCAiIl0sICJlcnIiOiBbIkVYUE9ORU5UX1NFTlNFX0RFU1BMQUNBUiIsICJCQVNFX1NJR05FX1BFUkRVVCIsICJFWFBPTkVOVF9NVUxUSVBMSUNBVCIsICIiXSwgInJlcyI6IFsiJGFfbj0oLTMpXntuKzJ9XFxSaWdodGFycm93IGFfMT0oLTMpXjM9LTI3LFxcO2FfMj0oLTMpXjQ9ODEsXFw7YV8zPSgtMyleNT0tMjQzLFxcO2FfND0oLTMpXjY9NzI5LFxcO2FfNT0oLTMpXjc9LTIxODckIl19"
  },
  {
   "id": "47c",
   "ex": 47,
   "ap": "c",
   "bloc": "termes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba els cinc primers termes de la successió el terme general de la qual és:",
   "enunciat": "$a_n = 5 - 3n$",
   "opcions": [
    "$-2, -5, -8, -11, -14$",
    "$4, 7, 10, 13, 16$",
    "$2, -1, -4, -7, -10$",
    "$2, -1, -3, -4, -5$"
   ],
   "pistes": [
    "Substitueix $n=1,2,3,4,5$ a $5-3n$.",
    "$a_1=5-3=2$, $a_2=5-6=-1$, $a_3=5-9=-4$..."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJDYWRhIHRlcm1lIHTDqSBlbCBzaWduZSBjYW52aWF0OiByZXZpc2EgZWwgY8OgbGN1bCBkZSAkNS0zbiQgcGVyIGEgY2FkYSAkbiQsIHNvYnJldG90IHF1YW4gJDNuJCBzdXBlcmEgJDUkLiIsICJIYXMgY2FsY3VsYXQgJDUrM24kIGVuIGxsb2MgZGUgJDUtM24kOiBlbCB0ZXJtZSAkM24kIGVzIHJlc3RhLCBubyBzZSBzdW1hLiIsICIiLCAiRWxzIHRlcm1lcyBubyBzJ2hhbiBjYWxjdWxhdCB1biBwZXIgdW4gYSBwYXJ0aXIgZGUgJGFfbj01LTNuJDogcmV2aXNhIGNhZGEgc3Vic3RpdHVjacOzIHBlciBzZXBhcmF0LiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICJTSUdORV9QUk9EVUNURSIsICIiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiXSwgInJlcyI6IFsiJGFfbj01LTNuXFxSaWdodGFycm93IGFfMT0yLFxcO2FfMj0tMSxcXDthXzM9LTQsXFw7YV80PS03LFxcO2FfNT0tMTAkIl19"
  },
  {
   "id": "47d",
   "ex": 47,
   "ap": "d",
   "bloc": "termes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba els cinc primers termes de la successió el terme general de la qual és:",
   "enunciat": "$a_n = 2 + 4(n+1)$",
   "opcions": [
    "$7, 11, 15, 19, 23$",
    "$9, 13, 17, 21, 25$",
    "$10, 14, 18, 22, 26$",
    "$6, 10, 14, 18, 22$"
   ],
   "pistes": [
    "Primer distribueix: $2+4(n+1)=2+4n+4=4n+6$.",
    "$a_1=4\\cdot1+6=10$, $a_2=4\\cdot2+6=14$, $a_3=4\\cdot3+6=18$..."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXXDrSBhbWIgdW4gJCskOiBoYXMgZGlzdHJpYnXDr3QgZWwgJDQkIG5vbcOpcyBhbCBwcmltZXIgdGVybWUgZGUgZGlucyBkZWwgcGFyw6hudGVzaSAoJDRuJCkgaSBoYXMgZGVpeGF0IGVsICQrMSQgc2Vuc2UgbXVsdGlwbGljYXIuIEVsIHNpZ25lICQtJCBkYXZhbnQgZCd1biBwYXLDqG50ZXNpIGNhbnZpYSBlbCBzaWduZSBkZSBUT1RTIGVscyB0ZXJtZXMgZGUgZGlucywgbm8gbm9tw6lzIGRlbCBwcmltZXIuIiwgIkNhbCBtdWx0aXBsaWNhciAkNCQgcGVyIHRvdCBlbCBwYXLDqG50ZXNpICQobisxKSQgYWJhbnMgZGUgc3VtYXIgZWwgJDIkOiByZXBhc3NhIGwnb3JkcmUgZGUgbGVzIG9wZXJhY2lvbnMuIiwgIiIsICJIYXMgY2FsY3VsYXQgJDIrNG4kIGVuIGxsb2MgZGUgJDIrNChuKzEpJDogdCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbCAkKzEkIGRlIGRpbnMgZGVsIHBhcsOobnRlc2kuIl0sICJlcnIiOiBbIk1FTllTX1BBUkVOVEVTSSIsICJKRVJBUlFVSUEiLCAiIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCJdLCAicmVzIjogWyIkYV9uPTIrNChuKzEpPTRuKzZcXFJpZ2h0YXJyb3cgYV8xPTEwLFxcO2FfMj0xNCxcXDthXzM9MTgsXFw7YV80PTIyLFxcO2FfNT0yNiQiXX0="
  },
  {
   "id": "47e",
   "ex": 47,
   "ap": "e",
   "bloc": "termes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba els cinc primers termes de la successió el terme general de la qual és:",
   "enunciat": "$a_n = 2\\cdot\\left(\\dfrac{1}{3}\\right)^{n-1}$",
   "opcions": [
    "$2, \\dfrac{2}{3}, \\dfrac{2}{9}, \\dfrac{2}{27}, \\dfrac{2}{81}$",
    "$\\dfrac{2}{3}, \\dfrac{2}{9}, \\dfrac{2}{27}, \\dfrac{2}{81}, \\dfrac{2}{243}$",
    "$2, 6, 18, 54, 162$",
    "$\\dfrac{1}{3}, \\dfrac{1}{9}, \\dfrac{1}{27}, \\dfrac{1}{81}, \\dfrac{1}{243}$"
   ],
   "pistes": [
    "Per $n=1$, l'exponent $n-1$ val $0$: $\\left(\\dfrac13\\right)^0=1$.",
    "$a_1=2\\cdot1=2$, $a_2=2\\cdot\\dfrac13=\\dfrac23$, $a_3=2\\cdot\\dfrac19=\\dfrac29$..."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGNvbWVuw6dhdCBhICRuPTIkIGVuIGxsb2MgZGUgJG49MSQ6IHBlciAkbj0xJCBsJ2V4cG9uZW50IMOpcyAkbi0xPTAkLCBpIHF1YWxzZXZvbCBiYXNlIGVsZXZhZGEgYSAkMCQgdmFsICQxJC4iLCAiSGFzIG11bHRpcGxpY2F0IHBlciAkMyQgZW4gbGxvYyBkZSBwZXIgJFxcZGZyYWMxMyQgYSBjYWRhIHBhczogcmV2aXNhIHF1aW5hIMOpcyBsYSBiYXNlIGRlIGxhIHBvdMOobmNpYS4iLCAiVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbCBmYWN0b3IgJDIkIGRlIGRhdmFudDogY2FkYSB0ZXJtZSDDqXMgJDJcXGNkb3RcXGxlZnQoXFxkZnJhYzEzXFxyaWdodClee24tMX0kLCBubyBub23DqXMgbGEgcG90w6huY2lhLiJdLCAiZXJyIjogWyIiLCAiREVTUExBQ0FNRU5UX0lOREVYIiwgIkZSQUNDSU9fTk9fSU5WRVJUSURBIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRhX249MlxcY2RvdFxcbGVmdChcXGRmcmFjMTNcXHJpZ2h0KV57bi0xfVxcUmlnaHRhcnJvdyBhXzE9MixcXDthXzI9XFxkZnJhYzIzLFxcO2FfMz1cXGRmcmFjMjksXFw7YV80PVxcZGZyYWMyezI3fSxcXDthXzU9XFxkZnJhYzJ7ODF9JCJdfQ=="
  },
  {
   "id": "47f",
   "ex": 47,
   "ap": "f",
   "bloc": "termes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba els cinc primers termes de la successió el terme general de la qual és:",
   "enunciat": "$a_n = n^2 + 3n - 2$",
   "opcions": [
    "$2, 8, 16, 26, 38$",
    "$2, 5, 10, 17, 26$",
    "$0, 4, 10, 18, 28$",
    "$2, 10, 24, 44, 70$"
   ],
   "pistes": [
    "Substitueix $n=1,2,3,4,5$ a $n^2+3n-2$.",
    "$a_1=1+3-2=2$, $a_2=4+6-2=8$, $a_3=9+9-2=16$..."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGNhbGN1bGF0ICRuXjIrM24kIGkgaGFzIHJlc3RhdCBlbCAkMiQgbm9tw6lzIGFsIHByaW1lciB0ZXJtZTogZWwgJC0yJCBzJ2hhIGRlIHJlc3RhciBhIGNhZGEgdGVybWUsIG5vIG5vbcOpcyBhbCBwcmltZXIuIiwgIkhhcyBjYWxjdWxhdCBkZXMgZGUgJG49MCQgZW4gbGxvYyBkZSAkbj0xJDogZWwgcHJpbWVyIHRlcm1lIGQndW5hIHN1Y2Nlc3Npw7Mgw6lzICRhXzEkLiIsICJSZXZpc2EgbCdvcmRyZSBkZSBsZXMgb3BlcmFjaW9uczogcHJpbWVyICRuXjIkLCBkZXNwcsOpcyAkM24kLCBpIGZpbmFsbWVudCBzdW1lcyBpIHJlc3RlcyDigJQgbm8gbXVsdGlwbGlxdWlzICRuXjIkIHBlciAkMyQuIl0sICJlcnIiOiBbIiIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVCIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiSkVSQVJRVUlBIl0sICJyZXMiOiBbIiRhX249bl4yKzNuLTJcXFJpZ2h0YXJyb3cgYV8xPTIsXFw7YV8yPTgsXFw7YV8zPTE2LFxcO2FfND0yNixcXDthXzU9MzgkIl19"
  },
  {
   "id": "47g",
   "ex": 47,
   "ap": "g",
   "bloc": "termes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba els cinc primers termes de la successió el terme general de la qual és:",
   "enunciat": "$a_n = \\dfrac{n+3}{n^2}$",
   "opcions": [
    "$4, \\dfrac{1}{4}, \\dfrac{2}{9}, \\dfrac{7}{16}, \\dfrac{8}{25}$",
    "$4, \\dfrac{5}{4}, \\dfrac{2}{3}, \\dfrac{7}{16}, \\dfrac{8}{25}$",
    "$4, \\dfrac{5}{2}, 2, \\dfrac{7}{4}, \\dfrac{8}{5}$",
    "$4, \\dfrac{5}{4}, \\dfrac{2}{3}, \\dfrac{7}{16}, \\dfrac{1}{3}$"
   ],
   "pistes": [
    "Calcula per separat numerador ($n+3$) i denominador ($n^2$) per a cada $n$.",
    "$a_1=\\dfrac{1+3}{1}=4$, $a_2=\\dfrac{2+3}{4}=\\dfrac54$, $a_3=\\dfrac{3+3}{9}=\\dfrac{6}{9}=\\dfrac23$..."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgc2Vnb24gdGVybWU6ICRcXGRmcmFjezIrM317Ml4yfT1cXGRmcmFjNTQkLCBubyAkXFxkZnJhYzE0JC4iLCAiIiwgIkhhcyBkaXZpZGl0ICRuXjIkIGVudHJlICRuJCBlbiBsbG9jIGQnZWxldmFyLWxvIGFsIHF1YWRyYXQ6IGVsIGRlbm9taW5hZG9yIMOpcyAkbl4yJCwgbm8gJG4kLiIsICJBbCBjaW5xdcOoIHRlcm1lLCAkXFxkZnJhY3s4fXsyNX0kIGphIGVzdMOgIHNpbXBsaWZpY2F0IGRlbCB0b3Q6ICQ4JCBpICQyNSQgbm8gdGVuZW4gY2FwIGZhY3RvciBjb23Duiwgbm8gZXMgcG90IHJlZHVpciBtw6lzLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICIiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiIsICJTSU1QTElGSUNBQ0lPX0lOVkVOVEFEQSJdLCAicmVzIjogWyIkYV9uPVxcZGZyYWN7biszfXtuXjJ9XFxSaWdodGFycm93IGFfMT00LFxcO2FfMj1cXGRmcmFjNTQsXFw7YV8zPVxcZGZyYWMyMyxcXDthXzQ9XFxkZnJhY3s3fXsxNn0sXFw7YV81PVxcZGZyYWN7OH17MjV9JCJdfQ=="
  },
  {
   "id": "48a",
   "ex": 48,
   "ap": "a",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Busca els cinc primers termes de les successions recurrents següents.",
   "enunciat": "$a_1=1,\\;a_2=3,\\;a_n=a_{n-2}-a_{n-1}$",
   "opcions": [
    "$1, 3, 2, -1, 3$",
    "$1, 3, -2, 5, -7$",
    "$1, 3, -2, -5, -3$",
    "$1, 3, 4, 7, 11$"
   ],
   "pistes": [
    "Cada terme nou és el terme de fa dues posicions menys el terme immediatament anterior.",
    "$a_3=a_1-a_2=1-3=-2$. $a_4=a_2-a_3=3-(-2)=5$. $a_5=a_3-a_4=-2-5=-7$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVuIGwnb3JkcmUgZXF1aXZvY2F0LCAkYV97bi0xfS1hX3tuLTJ9JDogbGEgZsOzcm11bGEgZGl1ICRhX3tuLTJ9LWFfe24tMX0kIChlbCB0ZXJtZSBtw6lzIGFudGljIG1lbnlzIGVsIG3DqXMgcmVjZW50KS4iLCAiIiwgIkEgcGFydGlyIGRlbCB0ZXJjZXIgdGVybWUsIGNhZGEgbm91IHRlcm1lIHMnaGEgZGUgY2FsY3VsYXIgYW1iICRhX3tuLTJ9LWFfe24tMX0kLCBubyBzZWd1aW50IGNhcCBhbHRyZSBwYXRyw7MuIiwgIkhhcyBzdW1hdCBlbHMgZG9zIHRlcm1lcyBhbnRlcmlvcnMgKCRhX3tuLTJ9K2Ffe24tMX0kKSBlbiBsbG9jIGRlIHJlc3Rhci1sb3MsIHRhbCBjb20gZGl1IGxhIGbDs3JtdWxhICRhX249YV97bi0yfS1hX3tuLTF9JC4iXSwgImVyciI6IFsiT1JEUkVfUkVTVEEiLCAiIiwgIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIlJFR0xBX05PTUVTX1FVT0NJRU5UIl0sICJyZXMiOiBbIiRhXzM9YV8xLWFfMj0xLTM9LTIkIiwgIiRhXzQ9YV8yLWFfMz0zLSgtMik9NSQiLCAiJGFfNT1hXzMtYV80PS0yLTU9LTckIiwgIkVscyBjaW5jIHByaW1lcnMgdGVybWVzIHPDs24gJDEsXFw7MyxcXDstMixcXDs1LFxcOy03JCJdfQ=="
  },
  {
   "id": "48b",
   "ex": 48,
   "ap": "b",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Busca els cinc primers termes de les successions recurrents següents.",
   "enunciat": "$b_1=2,\\;b_2=4,\\;b_n=\\dfrac{b_{n-1}}{b_{n-2}}$",
   "opcions": [
    "$2, 4, \\dfrac{1}{2}, 2, \\dfrac{1}{4}$",
    "$2, 4, 2, \\dfrac{1}{2}, \\dfrac{1}{4}$",
    "$2, 4, 2, \\dfrac{1}{4}, \\dfrac{1}{8}$",
    "$2, 4, 6, 10, 16$"
   ],
   "pistes": [
    "Cada terme nou és el terme anterior dividit pel terme de fa dues posicions.",
    "$b_3=\\dfrac{b_2}{b_1}=\\dfrac42=2$. $b_4=\\dfrac{b_3}{b_2}=\\dfrac24=\\dfrac12$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgaW52ZXJ0aXQgcXVpbiB0ZXJtZSB2YSBhbCBudW1lcmFkb3I6IGxhIGbDs3JtdWxhIGRpdSAkXFxkZnJhY3tiX3tuLTF9fXtiX3tuLTJ9fSQsIGVsIG3DqXMgcmVjZW50IGEgZGFsdC4iLCAiIiwgIkVsIHF1YXJ0IHRlcm1lIG5vIHNlZ3VlaXggbGEgZsOzcm11bGE6IHJldmlzYSdsIGZlbnQgJGJfND1cXGRmcmFje2JfM317Yl8yfSQgYW1iIGVscyB2YWxvcnMgamEgY2FsY3VsYXRzLiIsICJIYXMgc3VtYXQgZWxzIGRvcyB0ZXJtZXMgYW50ZXJpb3JzIGVuIGxsb2MgZGUgZGl2aWRpci1sb3MsIHRhbCBjb20gZGl1IGxhIGbDs3JtdWxhICRiX249XFxkZnJhY3tiX3tuLTF9fXtiX3tuLTJ9fSQuIl0sICJlcnIiOiBbIk9SRFJFX1JFU1RBIiwgIiIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJSRUdMQV9OT01FU19RVU9DSUVOVCJdLCAicmVzIjogWyIkYl8zPVxcZGZyYWN7Yl8yfXtiXzF9PVxcZGZyYWN7NH17Mn09MiQiLCAiJGJfND1cXGRmcmFje2JfM317Yl8yfT1cXGRmcmFjezJ9ezR9PVxcZGZyYWMxMiQiLCAiJGJfNT1cXGRmcmFje2JfNH17Yl8zfT1cXGRmcmFjezEvMn17Mn09XFxkZnJhYzE0JCIsICJFbHMgY2luYyBwcmltZXJzIHRlcm1lcyBzw7NuICQyLFxcOzQsXFw7MixcXDtcXGRmcmFjMTIsXFw7XFxkZnJhYzE0JCJdfQ=="
  },
  {
   "id": "48c",
   "ex": 48,
   "ap": "c",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Busca els cinc primers termes de les successions recurrents següents.",
   "enunciat": "$c_1=-1,\\;c_2=0,\\;c_3=1,\\;c_n=c_{n-1}+c_{n-2}+c_{n-3}$",
   "opcions": [
    "$-1, 0, 1, -2, 2$",
    "$-1, 0, 1, 1, 0$",
    "$-1, 0, 1, 0, 1$",
    "$-1, 0, 1, 2, 3$"
   ],
   "pistes": [
    "A partir del quart terme, cada nou terme és la suma dels tres anteriors.",
    "$c_4=c_3+c_2+c_1=1+0+(-1)=0$. $c_5=c_4+c_3+c_2=0+1+0=1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWxzIHNpZ25lcyBlbiBzdW1hciBlbHMgdHJlcyB0ZXJtZXMgYW50ZXJpb3JzOiAkY180PWNfMytjXzIrY18xPTErMCsoLTEpJC4iLCAiUmV2aXNhIHF1aW4gdGVybWUgY29ycmVzcG9uIGEgY2FkYSBwb3NpY2nDsyBlbiBzdW1hciAkY197bi0xfStjX3tuLTJ9K2Nfe24tM30kOiBsJ29yZHJlIGRlIGxhIHN1bWEgbm8gYWx0ZXJhIGVsIHJlc3VsdGF0LCBwZXLDsiBjYWwgYWdhZmFyIGVscyB0cmVzIHRlcm1lcyBjb3JyZWN0ZXMuIiwgIiIsICJGYWx0YSBzdW1hci1oaSB1biBkZWxzIHRyZXMgdGVybWVzIGFudGVyaW9yczogbGEgZsOzcm11bGEgc3VtYSBUUkVTIHRlcm1lcywgJGNfe24tMX0rY197bi0yfStjX3tuLTN9JCwgbm8gbm9tw6lzIGRvcy4iXSwgImVyciI6IFsiU0lHTkVfU1VNQSIsICJPUkRSRV9SRVNUQSIsICIiLCAiRkFDVE9SX09CTElEQVQiXSwgInJlcyI6IFsiJGNfND1jXzMrY18yK2NfMT0xKzArKC0xKT0wJCIsICIkY181PWNfNCtjXzMrY18yPTArMSswPTEkIiwgIkVscyBjaW5jIHByaW1lcnMgdGVybWVzIHPDs24gJC0xLFxcOzAsXFw7MSxcXDswLFxcOzEkIl19"
  },
  {
   "id": "48d",
   "ex": 48,
   "ap": "d",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Busca els cinc primers termes de les successions recurrents següents.",
   "enunciat": "$d_1=2,\\;d_n=d_{n-1}+n$",
   "opcions": [
    "$2, 5, 9, 14, 20$",
    "$2, 3, 4, 5, 6$",
    "$2, 4, 7, 11, 16$",
    "$2, 4, 6, 8, 10$"
   ],
   "pistes": [
    "Cada terme nou és el terme anterior més l'índex $n$ que li toca.",
    "$d_2=d_1+2=2+2=4$. $d_3=d_2+3=4+3=7$. $d_4=d_3+4=7+4=11$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgJG4rMSQgZW4gbGxvYyBkZSAkbiQgYSBjYWRhIHBhczogcGVyIGNhbGN1bGFyICRkXzIkIGNhbCBzdW1hciAkbj0yJCwgbm8gJG49MyQuIiwgIkNhZGEgdGVybWUgcydoYSBkZSBjYWxjdWxhciBzdW1hbnQgbCfDrW5kZXggJG4kIGFsIHRlcm1lIGFudGVyaW9yLCAkZF9uPWRfe24tMX0rbiQ7IG5vIMOpcyB1bmEgbGxpc3RhIGRlIG5vbWJyZXMgY29uc2VjdXRpdXMuIiwgIiIsICJFbHMgdGVybWVzIG5vIHNlZ3VlaXhlbiB1biBwYXRyw7MgZGUgc3VtYXIgc2VtcHJlIGVsIG1hdGVpeCBub21icmU6IGNhZGEgdmVnYWRhIHNlIHN1bWEgdW4gJG4kIGRpZmVyZW50LCBtw6lzIGdyYW4uIl0sICJlcnIiOiBbIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICIiLCAiRVhQT05FTlRfQ09NX1BST0RVQ1RFIl0sICJyZXMiOiBbIiRkXzI9ZF8xKzI9MisyPTQkIiwgIiRkXzM9ZF8yKzM9NCszPTckIiwgIiRkXzQ9ZF8zKzQ9Nys0PTExJCIsICIkZF81PWRfNCs1PTExKzU9MTYkIiwgIkVscyBjaW5jIHByaW1lcnMgdGVybWVzIHPDs24gJDIsXFw7NCxcXDs3LFxcOzExLFxcOzE2JCJdfQ=="
  },
  {
   "id": "49a",
   "ex": 49,
   "ap": "a",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la diferència i el terme general d'aquestes progressions aritmètiques.",
   "enunciat": "$10,\\;7,\\;4,\\;1,\\dots$",
   "opcions": [
    "$d=-3,\\;\\;a_n=10-3n$",
    "$d=3,\\;\\;a_n=10+(n-1)\\cdot3$",
    "$d=-3,\\;\\;a_n=10-(n-1)\\cdot3$",
    "$d=7,\\;\\;a_n=10-(n-1)\\cdot7$"
   ],
   "pistes": [
    "La diferència és qualsevol terme menys l'anterior: $7-10$.",
    "$d=7-10=-3$. El terme general és $a_n=a_1+(n-1)d=10+(n-1)\\cdot(-3)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB0ZXJtZSBnZW5lcmFsIGQndW5hIFBBIMOpcyAkYV9uPWFfMSsobi0xKWQkLCBubyAkYV8xK25kJDogcmV2aXNhIGwnZXhwb25lbnQgZGUgJChuLTEpJC4iLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQuIFJldmlzYSBxdWluIGRlbHMgZG9zIHRlcm1lcyDDqXMgbcOpcyBncmFuIGVuIHZhbG9yIGFic29sdXQuIiwgIiIsICJMYSBkaWZlcsOobmNpYSDDqXMgZWwgcXVlIHNlIHN1bWEgZCd1biB0ZXJtZSBBTCBTRUfDnEVOVCAoJDctMTAkKSwgbm8gZWwgcHJpbWVyIHRlcm1lIGVuIHNpLiJdLCAiZXJyIjogWyJERVNQTEFDQU1FTlRfSU5ERVgiLCAiU0lHTkVfRklOQUwiLCAiIiwgIkNPTVBBUkFfVEVSTUVTIl0sICJyZXMiOiBbIiRkPTctMTA9LTMkIChlcyBtYW50w6kgaWd1YWwgYSBsYSByZXN0YTogJDQtNz0tMyQsICQxLTQ9LTMkKSIsICIkYV9uPWFfMSsobi0xKWQ9MTArKG4tMSlcXGNkb3QoLTMpPTEwLTMobi0xKSQiXX0="
  },
  {
   "id": "49b",
   "ex": 49,
   "ap": "b",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la diferència i el terme general d'aquestes progressions aritmètiques.",
   "enunciat": "$\\sqrt2,\\;2\\sqrt2,\\;3\\sqrt2,\\;4\\sqrt2,\\dots$",
   "opcions": [
    "$d=\\sqrt2,\\;\\;a_n=\\sqrt2+(n-1)$",
    "$d=2,\\;\\;a_n=\\sqrt2+(n-1)\\cdot2$",
    "$d=2\\sqrt2,\\;\\;a_n=n\\cdot2\\sqrt2$",
    "$d=\\sqrt2,\\;\\;a_n=n\\sqrt2$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $2\\sqrt2-\\sqrt2$.",
    "$d=2\\sqrt2-\\sqrt2=\\sqrt2$. Com que $a_1=\\sqrt2$, $a_n=\\sqrt2+(n-1)\\sqrt2=n\\sqrt2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbCB0ZXJtZSBnZW5lcmFsLCBsYSBkaWZlcsOobmNpYSAkXFxzcXJ0MiQgaGEgZGUgbXVsdGlwbGljYXIgdG90IGVsICQobi0xKSQsIG5vIHN1bWFyLXMnaGkgc29sZXMuIiwgIkxhIGRpZmVyw6huY2lhIGVudHJlIHRlcm1lcyBjb25zZWN1dGl1cyDDqXMgJFxcc3FydDIkIChlbCBmYWN0b3IgcXVlIG11bHRpcGxpY2EgY2FkYSB2ZWdhZGEpLCBubyBlbCBub21icmUgJDIkIHF1ZSBhY29tcGFueWEgJFxcc3FydDIkLiIsICIkMlxcc3FydDItXFxzcXJ0Mj1cXHNxcnQyJCwgbm8gJDJcXHNxcnQyJDogcmV2aXNhIGxhIHJlc3RhIGRlIGRvcyB0ZXJtZXMgY29uc2VjdXRpdXMuIiwgIiJdLCAiZXJyIjogWyJFTlRFUl9BTF9OVU1FUkFET1IiLCAiQ09NUEFSQV9URVJNRVMiLCAiREVTUExBQ0FNRU5UX0lOREVYIiwgIiJdLCAicmVzIjogWyIkZD0yXFxzcXJ0Mi1cXHNxcnQyPVxcc3FydDIkIiwgIiRhX249YV8xKyhuLTEpZD1cXHNxcnQyKyhuLTEpXFxzcXJ0Mj1cXHNxcnQyXFxiaWdsKDErKG4tMSlcXGJpZ3IpPW5cXHNxcnQyJCJdfQ=="
  },
  {
   "id": "49c",
   "ex": 49,
   "ap": "c",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la diferència i el terme general d'aquestes progressions aritmètiques.",
   "enunciat": "$7,\\;2,\\;-3,\\;-8,\\dots$",
   "opcions": [
    "$d=-5,\\;\\;a_n=7-5n$",
    "$d=-9,\\;\\;a_n=7-(n-1)\\cdot9$",
    "$d=-5,\\;\\;a_n=7-(n-1)\\cdot5$",
    "$d=5,\\;\\;a_n=7+(n-1)\\cdot5$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $2-7$.",
    "$d=2-7=-5$. El terme general és $a_n=7+(n-1)\\cdot(-5)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB0ZXJtZSBnZW5lcmFsIMOpcyAkYV8xKyhuLTEpZCQsIG5vICRhXzErbmQkOiByZXZpc2EgbCdleHBvbmVudCBkZSAkKG4tMSkkLiIsICJIYXMgcmVzdGF0ICQyLTExJCBvIHVuIGFsdHJlIHBhcmVsbCBubyBjb25zZWN1dGl1OiBsYSBkaWZlcsOobmNpYSBlcyBjYWxjdWxhIGVudHJlIHRlcm1lcyBzZWd1aXRzLCAkMi03JC4iLCAiIiwgIkVsIHJlc3VsdGF0IHTDqSBlbCBzaWduZSBjYW52aWF0LiBSZXZpc2EgcXVpbiBkZWxzIGRvcyB0ZXJtZXMgw6lzIG3DqXMgZ3JhbiBlbiB2YWxvciBhYnNvbHV0LiJdLCAiZXJyIjogWyJERVNQTEFDQU1FTlRfSU5ERVgiLCAiQ09NUEFSQV9URVJNRVMiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIiRkPTItNz0tNSQgKGVzIG1hbnTDqSBpZ3VhbDogJC0zLTI9LTUkLCAkLTgtKC0zKT0tNSQpIiwgIiRhX249YV8xKyhuLTEpZD03KyhuLTEpXFxjZG90KC01KT03LTUobi0xKSQiXX0="
  },
  {
   "id": "49d",
   "ex": 49,
   "ap": "d",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la diferència i el terme general d'aquestes progressions aritmètiques.",
   "enunciat": "$16,\\;8,\\;0,\\;-8,\\dots$",
   "opcions": [
    "$d=-8,\\;\\;a_n=16-8n$",
    "$d=\\dfrac12,\\;\\;a_n=16\\cdot\\left(\\dfrac12\\right)^{n-1}$",
    "$d=8,\\;\\;a_n=16+(n-1)\\cdot8$",
    "$d=-8,\\;\\;a_n=16-(n-1)\\cdot8$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $8-16$.",
    "$d=8-16=-8$. El terme general és $a_n=16+(n-1)\\cdot(-8)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB0ZXJtZSBnZW5lcmFsIMOpcyAkYV8xKyhuLTEpZCQsIG5vICRhXzErbmQkOiByZXZpc2EgbCdleHBvbmVudCBkZSAkKG4tMSkkLiIsICJFbmNhcmEgcXVlIGVscyBwcmltZXJzIHRlcm1lcyBlcyBkaXZpZGllbiBwZXIgJDIkLCBsYSBzdWNjZXNzacOzIGNvbXBsZXRhIG5vIGhvIGNvbXBsZWl4OiAkMDo4JCBubyBkb25hICQtOCQuIENvbXByb3ZhLWhvIHJlc3RhbnQgdGVybWVzIGNvbnNlY3V0aXVzLCBubyBkaXZpZGludC1sb3MuIiwgIkVsIHJlc3VsdGF0IHTDqSBlbCBzaWduZSBjYW52aWF0LiBSZXZpc2EgcXVpbiBkZWxzIGRvcyB0ZXJtZXMgw6lzIG3DqXMgZ3JhbiBlbiB2YWxvciBhYnNvbHV0LiIsICIiXSwgImVyciI6IFsiREVTUExBQ0FNRU5UX0lOREVYIiwgIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIlNJR05FX0ZJTkFMIiwgIiJdLCAicmVzIjogWyIkZD04LTE2PS04JCAoZXMgbWFudMOpIGlndWFsOiAkMC04PS04JCwgJC04LTA9LTgkKSIsICIkYV9uPWFfMSsobi0xKWQ9MTYrKG4tMSlcXGNkb3QoLTgpPTE2LTgobi0xKSQiXX0="
  },
  {
   "id": "50a",
   "ex": 50,
   "ap": "a",
   "bloc": "termes",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Considera la successió $2,\\;4,\\;6,\\;8,\\;10,\\dots$",
   "enunciat": "És una progressió aritmètica la successió $2,\\;4,\\;6,\\;8,\\;10,\\dots$?",
   "opcions": [
    "No, perquè els termes són tots parells.",
    "Sí, perquè cada terme és el doble de la seva posició.",
    "Sí, perquè la diferència entre termes consecutius és sempre la mateixa: $d=2$.",
    "No, perquè els termes van augmentant."
   ],
   "pistes": [
    "Calcula la diferència entre diversos parells de termes consecutius i comprova si sempre és la mateixa.",
    "$4-2=2$, $6-4=2$, $8-6=2$, $10-8=2$: la diferència és sempre $2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJRdWUgdG90cyBlbHMgdGVybWVzIHNpZ3VpbiBwYXJlbGxzIMOpcyB1bmEgY2FzdWFsaXRhdCBkJ2FxdWVzdGEgc3VjY2Vzc2nDsywgbm8gZWwgbW90aXUgcGVsIHF1YWwgw6lzIG8gbm8gw6lzIHVuYSBQQS4iLCAiQXF1ZXN0YSBvYnNlcnZhY2nDsyDDqXMgY2VydGEgKCRhX249Mm4kKSBwZXLDsiBubyDDqXMgbGEgZGVmaW5pY2nDsyBkZSBwcm9ncmVzc2nDsyBhcml0bcOodGljYTogY2FsIGNvbXByb3ZhciBxdWUgbGEgZGlmZXLDqG5jaWEgZW50cmUgdGVybWVzIGNvbnNlY3V0aXVzIMOpcyBjb25zdGFudC4iLCAiIiwgIlF1ZSBlbHMgdGVybWVzIGF1Z21lbnRpbiBubyBpbXBlZGVpeCBxdWUgc2lndWkgdW5hIFBBOiBlbCBxdWUgZGVmaW5laXggdW5hIFBBIMOpcyBxdWUgbGEgZGlmZXLDqG5jaWEgZW50cmUgdGVybWVzIGNvbnNlY3V0aXVzIHNpZ3VpIFNFTVBSRSBsYSBtYXRlaXhhLCBpIGFxdcOtIGhvIMOpcyAoJGQ9MiQpLiJdLCAiZXJyIjogWyJWRVJFRElDVEVfSU5WRVJUSVQiLCAiUkFPTkFNRU5UX0FERElUSVUiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkNC0yPTIkLCAkNi00PTIkLCAkOC02PTIkLCAkMTAtOD0yJDogbGEgZGlmZXLDqG5jaWEgw6lzIGNvbnN0YW50LCAkZD0yJCwgcGVyIHRhbnQgc8OtIHF1ZSDDqXMgdW5hIHByb2dyZXNzacOzIGFyaXRtw6h0aWNhIl19"
  },
  {
   "id": "50b",
   "ex": 50,
   "ap": "b",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Considera la successió $2,\\;4,\\;6,\\;8,\\;10,\\dots$",
   "enunciat": "Terme general de $2,\\;4,\\;6,\\;8,\\;10,\\dots$",
   "opcions": [
    "$a_n=2n$",
    "$a_n=n+1$",
    "$a_n=2n-2$",
    "$a_n=2^n$"
   ],
   "pistes": [
    "El primer terme és $a_1=2$ i la diferència és $d=2$.",
    "$a_n=a_1+(n-1)d=2+(n-1)\\cdot2=2+2n-2=2n$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSBmw7NybXVsYSBkb25hICQyLDMsNCw1LDZcXGRvdHMkLCBxdWUgbm8gY29pbmNpZGVpeCBhbWIgbGEgc3VjY2Vzc2nDsyBkZSBsJ2VudW5jaWF0IGEgcGFydGlyIGRlbCBzZWdvbiB0ZXJtZS4iLCAiQXF1ZXN0YSBmw7NybXVsYSBkb25hICQwLDIsNCw2LDhcXGRvdHMkOiB2YSB1biBsbG9jIGVuZGFycmVyaWRhLiBDb21wcm92YS1sYSBzZW1wcmUgYW1iICRuPTEkLCBxdWUgaGEgZGUgdG9ybmFyIGVsIHByaW1lciB0ZXJtZSAoJDIkKSwgaSBubyAkMCQuIiwgIiQyXm4kIGRvbmEgJDIsNCw4LDE2LDMyXFxkb3RzJDogY3JlaXggbWFzc2EgZGUgcHJlc3NhLiBBcXXDrSBjYWRhIHRlcm1lIHN1bWEgc2VtcHJlICQyJCBhIGwnYW50ZXJpb3IsIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgQVJJVE3DiFRJQ0EsIG5vIHVuYSBwb3TDqG5jaWEuIl0sICJlcnIiOiBbIiIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiRVhQT05FTlRfQ09NX1BST0RVQ1RFIl0sICJyZXMiOiBbIiRhX249YV8xKyhuLTEpZD0yKyhuLTEpXFxjZG90Mj0yKzJuLTI9Mm4kIl19"
  },
  {
   "id": "50c",
   "ex": 50,
   "ap": "c",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Considera la successió $2,\\;4,\\;6,\\;8,\\;10,\\dots$",
   "enunciat": "Terme $a_{30}$ de $2,\\;4,\\;6,\\;8,\\;10,\\dots$",
   "opcions": [
    "$900$",
    "$58$",
    "$62$",
    "$60$"
   ],
   "pistes": [
    "Amb $a_n=2n$, substitueix $n=30$.",
    "$a_{30}=2\\cdot30$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgY2FsY3VsYXQgJG5eMiQgZW4gbGxvYyBkZSAkMm4kOiBlbCB0ZXJtZSBnZW5lcmFsIGQnYXF1ZXN0YSBQQSDDqXMgJGFfbj0ybiQsIG5vIHVuYSBwb3TDqG5jaWEuIiwgIkhhcyBjYWxjdWxhdCAkMlxcY2RvdCgzMC0xKSQgZW4gbGxvYyBkZSAkMlxcY2RvdDMwJDogYW1iICRhX249Mm4kIG5vIGNhbCByZXN0YXIgJDEkIGEgbCfDrW5kZXguIiwgIkhhcyBzdW1hdCBlbCBwcmltZXIgdGVybWUgZHVlcyB2ZWdhZGVzOiBhbWIgJGFfbj0ybiQgbm9tw6lzIGNhbCBzdWJzdGl0dWlyICRuPTMwJC4iLCAiIl0sICJlcnIiOiBbIkJBU0VfRVhQT05FTlRfSU5URVJDQU5WSUFUUyIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiRU5URVJfQUxfTlVNRVJBRE9SIiwgIiJdLCAicmVzIjogWyIkYV9uPTJuXFxSaWdodGFycm93IGFfezMwfT0yXFxjZG90MzA9NjAkIl19"
  },
  {
   "id": "51a",
   "ex": 51,
   "ap": "a",
   "bloc": "termes",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Donada la successió $\\dfrac53,\\;\\dfrac43,\\;1,\\;\\dfrac23,\\;\\dfrac13,\\dots$:",
   "enunciat": "Comprova que $\\dfrac53,\\;\\dfrac43,\\;1,\\;\\dfrac23,\\;\\dfrac13,\\dots$ és una progressió aritmètica.",
   "opcions": [
    "No, perquè $1-\\dfrac53=-\\dfrac23$, que no coincideix amb la diferència $-\\dfrac13$ dels altres termes.",
    "No, perquè els termes van disminuint.",
    "Sí, perquè la diferència entre termes consecutius és sempre la mateixa: $d=-\\dfrac13$.",
    "Sí, perquè tots els termes són fraccions amb denominador $3$."
   ],
   "pistes": [
    "Calcula la diferència entre cada terme i el següent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFc3TDoHMgcmVzdGFudCB0ZXJtZXMgcXVlIG5vIHPDs24gY29uc2VjdXRpdXM6ICQxJCDDqXMgZWwgdGVyY2VyIHRlcm1lIGkgJFxcZGZyYWM1MyQgZWwgcHJpbWVyLCBlbHMgc2VwYXJlbiBkdWVzIHBvc2ljaW9ucy4gRW50cmUgdGVybWVzIGNvbnNlY3V0aXVzLCBjb20gJFxcZGZyYWM0My1cXGRmcmFjNTM9LVxcZGZyYWMxMyQsIGxhIGRpZmVyw6huY2lhIHPDrSBxdWUgw6lzIGNvbnN0YW50LiIsICJRdWUgZWxzIHRlcm1lcyBkaXNtaW51ZWl4aW4gbm8gaW1wZWRlaXggcXVlIHNpZ3VpIHVuYSBQQTogdW5hIGRpZmVyw6huY2lhIG5lZ2F0aXZhIGkgY29uc3RhbnQgdGFtYsOpIGRlZmluZWl4IHVuYSBwcm9ncmVzc2nDsyBhcml0bcOodGljYS4iLCAiIiwgIkVsIGZldCBxdWUgZWwgZGVub21pbmFkb3Igc2lndWkgJDMkIMOpcyBub23DqXMgdW5hIG1hbmVyYSBkJ2VzY3JpdXJlIGVscyB0ZXJtZXMgKCQxPVxcZGZyYWMzMyQpOiBlbCBxdWUgY2FsIGNvbXByb3ZhciDDqXMgcXVlIGxhIGRpZmVyw6huY2lhIGVudHJlIHRlcm1lcyBjb25zZWN1dGl1cyBzaWd1aSBjb25zdGFudC4iXSwgImVyciI6IFsiQ09NUEFSQV9URVJNRVMiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIiIsICJSQU9OQU1FTlRfQURESVRJVSJdLCAicmVzIjogWyIkXFxkZnJhYzQzLVxcZGZyYWM1Mz0tXFxkZnJhYzEzJCwgJDEtXFxkZnJhYzQzPS1cXGRmcmFjMTMkLCAkXFxkZnJhYzIzLTE9LVxcZGZyYWMxMyQsICRcXGRmcmFjMTMtXFxkZnJhYzIzPS1cXGRmcmFjMTMkOiBsYSBkaWZlcsOobmNpYSDDqXMgY29uc3RhbnQsICRkPS1cXGRmcmFjMTMkLCBwZXIgdGFudCBzw60gcXVlIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgYXJpdG3DqHRpY2EiXX0="
  },
  {
   "id": "51b",
   "ex": 51,
   "ap": "b",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Donada la successió $\\dfrac53,\\;\\dfrac43,\\;1,\\;\\dfrac23,\\;\\dfrac13,\\dots$:",
   "enunciat": "Terme general de $\\dfrac53,\\;\\dfrac43,\\;1,\\;\\dfrac23,\\;\\dfrac13,\\dots$",
   "opcions": [
    "$a_n=\\dfrac53-\\dfrac{n}{3}$",
    "$a_n=\\dfrac53-(n-1)\\cdot\\dfrac13$",
    "$a_n=\\dfrac53+(n-1)\\cdot\\dfrac13$",
    "$a_n=\\dfrac53-(n-1)\\cdot3$"
   ],
   "pistes": [
    "El primer terme és $a_1=\\dfrac53$ i la diferència és $d=-\\dfrac13$ (apartat anterior).",
    "$a_n=a_1+(n-1)d=\\dfrac53+(n-1)\\cdot\\left(-\\dfrac13\\right)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCB0ZXJtZSBnZW5lcmFsIMOpcyAkYV8xKyhuLTEpZCQsIG5vICRhXzErbmQkOiByZXZpc2EgbCdleHBvbmVudCBkZSAkKG4tMSkkLiIsICIiLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQuIFJldmlzYSBxdWluIGRlbHMgZG9zIHRlcm1lcyDDqXMgbcOpcyBncmFuIGVuIHZhbG9yIGFic29sdXQuIiwgIkxhIGRpZmVyw6huY2lhIMOpcyAkLVxcZGZyYWMxMyQsIG5vICQtMyQ6IGhhcyBpbnZlcnRpdCBsYSBmcmFjY2nDsyBlbiBjYWxjdWxhciAkZCQuIl0sICJlcnIiOiBbIkRFU1BMQUNBTUVOVF9JTkRFWCIsICIiLCAiU0lHTkVfRklOQUwiLCAiSU5WRVJUSURBIl0sICJyZXMiOiBbIiRhX249YV8xKyhuLTEpZD1cXGRmcmFjNTMtKG4tMSlcXGNkb3RcXGRmcmFjMTMkIl19"
  },
  {
   "id": "52a",
   "ex": 52,
   "ap": "a",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba el terme general de les progressions aritmètiques següents.",
   "enunciat": "$1{,}73;\\;1{,}77;\\;1{,}81;\\;1{,}85;\\dots$",
   "opcions": [
    "$a_n=1{,}77+(n-1)\\cdot0{,}04$",
    "$a_n=1{,}73+(n-1)\\cdot0{,}04$",
    "$a_n=1{,}73+(n-1)\\cdot0{,}4$",
    "$a_n=1{,}73+n\\cdot0{,}04$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $1{,}77-1{,}73$.",
    "$d=1{,}77-1{,}73=0{,}04$. El primer terme és $a_1=1{,}73$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUgZGUgbGEgc3VjY2Vzc2nDsyDDqXMgJDF7LH03MyQsIG5vICQxeyx9NzckIChhcXVlc3Qgw6lzIGVsIHNlZ29uIHRlcm1lKS4iLCAiIiwgIkVuIHJlYWxpdGF0IGwnZXJyb3Igw6lzIGRlIHBvc2ljacOzIGRlY2ltYWwsIG5vIGQnw61uZGV4OiBSZXZpc2EgYSBwYXJ0aXIgZGUgcXVpbiB2YWxvciBkZSAkbiQgY29tZW5jZXMgYSBzdWJzdGl0dWlyLCBvIHF1aW4gZXhwb25lbnQgbGkgY29ycmVzcG9uOiB0J2hhcyBkZXNwbGHDp2F0IHVuYSBwb3NpY2nDsy4iLCAiRWwgdGVybWUgZ2VuZXJhbCDDqXMgJGFfMSsobi0xKWQkLCBubyAkYV8xK25kJDogcmV2aXNhIGwnZXhwb25lbnQgZGUgJChuLTEpJC4iXSwgImVyciI6IFsiQ09NUEFSQV9URVJNRVMiLCAiIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJERVNQTEFDQU1FTlRfSU5ERVgiXSwgInJlcyI6IFsiJGQ9MXssfTc3LTF7LH03Mz0weyx9MDQkIChlcyBtYW50w6kgaWd1YWwgYSBsYSByZXN0YSkiLCAiJGFfbj1hXzErKG4tMSlkPTF7LH03Mysobi0xKVxcY2RvdDB7LH0wNCQiXX0="
  },
  {
   "id": "52b",
   "ex": 52,
   "ap": "b",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba el terme general de les progressions aritmètiques següents.",
   "enunciat": "$5,\\;2,\\;-1,\\;-4,\\;-7,\\dots$",
   "opcions": [
    "$a_n=5+(n-1)\\cdot3$",
    "$a_n=5-3n$",
    "$a_n=2-(n-1)\\cdot3$",
    "$a_n=5-(n-1)\\cdot3$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $2-5$.",
    "$d=2-5=-3$. El primer terme és $a_1=5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdC4gUmV2aXNhIHF1aW4gZGVscyBkb3MgdGVybWVzIMOpcyBtw6lzIGdyYW4gZW4gdmFsb3IgYWJzb2x1dC4iLCAiRWwgdGVybWUgZ2VuZXJhbCDDqXMgJGFfMSsobi0xKWQkLCBubyAkYV8xK25kJDogcmV2aXNhIGwnZXhwb25lbnQgZGUgJChuLTEpJC4iLCAiRWwgcHJpbWVyIHRlcm1lIGRlIGxhIHN1Y2Nlc3Npw7Mgw6lzICQ1JCwgbm8gJDIkIChhcXVlc3Qgw6lzIGVsIHNlZ29uIHRlcm1lKS4iLCAiIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJDT01QQVJBX1RFUk1FUyIsICIiXSwgInJlcyI6IFsiJGQ9Mi01PS0zJCAoZXMgbWFudMOpIGlndWFsOiAkLTEtMj0tMyQsICQtNC0oLTEpPS0zJCkiLCAiJGFfbj1hXzErKG4tMSlkPTUrKG4tMSlcXGNkb3QoLTMpPTUtMyhuLTEpJCJdfQ=="
  },
  {
   "id": "52c",
   "ex": 52,
   "ap": "c",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba el terme general de les progressions aritmètiques següents.",
   "enunciat": "$\\dfrac12,\\;1,\\;\\dfrac32,\\;2,\\dots$",
   "opcions": [
    "$a_n=\\dfrac12+(n-1)\\cdot2$",
    "$a_n=\\dfrac12+n\\cdot\\dfrac12$",
    "$a_n=1+(n-1)\\cdot\\dfrac12$",
    "$a_n=\\dfrac12+(n-1)\\cdot\\dfrac12$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $1-\\dfrac12$.",
    "$d=1-\\dfrac12=\\dfrac12$. El primer terme és $a_1=\\dfrac12$."
   ],
   "nota": "Si simplifiques et queda $a_n=\\dfrac{n}{2}$, que és igual de correcta i no la trobaràs entre les opcions: aquest exercici practica la forma $a_1+(n-1)d$, i és aquesta la que has de reconèixer.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBkaWZlcsOobmNpYSDDqXMgJFxcZGZyYWMxMiQsIG5vICQyJDogaGFzIGludmVydGl0IGxhIGZyYWNjacOzIGVuIGNhbGN1bGFyICRkJC4iLCAiRmFsdGEgZWwgJC0xJCBkZSBsJ2V4cG9uZW50IGQnb3JkcmU6IGFxdWVzdGEgZsOzcm11bGEgZG9uYSAkMSxcXGRmcmFjMzIsMlxcZG90cyQsIHVuIGxsb2MgYXZhbsOnYWRhLiBDb21wcm92YS1sYSBzZW1wcmUgYW1iICRuPTEkLCBxdWUgaGEgZGUgdG9ybmFyIGVsIHByaW1lciB0ZXJtZSAoJFxcZGZyYWMxMiQpLiIsICJFbCBwcmltZXIgdGVybWUgZGUgbGEgc3VjY2Vzc2nDsyDDqXMgJFxcZGZyYWMxMiQsIG5vICQxJCAoYXF1ZXN0IMOpcyBlbCBzZWdvbiB0ZXJtZSkuIiwgIiJdLCAiZXJyIjogWyJJTlZFUlRJREEiLCAiREVTUExBQ0FNRU5UX0lOREVYIiwgIkNPTVBBUkFfVEVSTUVTIiwgIiJdLCAicmVzIjogWyIkZD0xLVxcZGZyYWMxMj1cXGRmcmFjMTIkIChlcyBtYW50w6kgaWd1YWw6ICRcXGRmcmFjMzItMT1cXGRmcmFjMTIkKSIsICIkYV9uPWFfMSsobi0xKWQ9XFxkZnJhYzEyKyhuLTEpXFxjZG90XFxkZnJhYzEyJCJdfQ=="
  },
  {
   "id": "52d",
   "ex": 52,
   "ap": "d",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba el terme general de les progressions aritmètiques següents.",
   "enunciat": "$\\dfrac1a,\\;\\dfrac3a,\\;\\dfrac5a,\\;\\dfrac7a,\\dots$",
   "opcions": [
    "$a_n=\\dfrac3a+(n-1)\\cdot\\dfrac2a$",
    "$a_n=\\dfrac1a+(n-1)\\cdot2a$",
    "$a_n=\\dfrac{1}{a}+n\\cdot\\dfrac2a$",
    "$a_n=\\dfrac1a+(n-1)\\cdot\\dfrac2a$"
   ],
   "pistes": [
    "La diferència és un terme menys l'anterior: $\\dfrac3a-\\dfrac1a$.",
    "$d=\\dfrac3a-\\dfrac1a=\\dfrac2a$. El primer terme és $a_1=\\dfrac1a$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUgZGUgbGEgc3VjY2Vzc2nDsyDDqXMgJFxcZGZyYWMxYSQsIG5vICRcXGRmcmFjM2EkIChhcXVlc3Qgw6lzIGVsIHNlZ29uIHRlcm1lKS4iLCAiTGEgZGlmZXLDqG5jaWEgw6lzICRcXGRmcmFjMmEkICh1bmEgZnJhY2Npw7MpLCBubyAkMmEkOiByZXZpc2EgbGEgcmVzdGEgJFxcZGZyYWMzYS1cXGRmcmFjMWEkLiIsICJFbCB0ZXJtZSBnZW5lcmFsIMOpcyAkYV8xKyhuLTEpZCQsIG5vICRhXzErbmQkOiByZXZpc2EgbCdleHBvbmVudCBkZSAkKG4tMSkkLiIsICIiXSwgImVyciI6IFsiQ09NUEFSQV9URVJNRVMiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiIl0sICJyZXMiOiBbIiRkPVxcZGZyYWMzYS1cXGRmcmFjMWE9XFxkZnJhYzJhJCAoZXMgbWFudMOpIGlndWFsIGEgbGEgcmVzdGEpIiwgIiRhX249YV8xKyhuLTEpZD1cXGRmcmFjMWErKG4tMSlcXGNkb3RcXGRmcmFjMmEkIl19"
  },
  {
   "id": "53a",
   "ex": 53,
   "ap": "a",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sabent que aquestes són progressions aritmètiques, completa a la llibreta els termes que falten.",
   "enunciat": "$\\square,\\;\\dfrac12,\\;\\square,\\;\\dfrac56,\\;\\square,\\;\\square$",
   "opcions": [
    "$\\dfrac{1}{3}, \\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{5}{6}, 1, \\dfrac{7}{6}$",
    "$\\dfrac{1}{6}, \\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{5}{6}, 1, \\dfrac{7}{6}$",
    "$\\dfrac{1}{3}, \\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{5}{6}, \\dfrac{7}{6}, \\dfrac{4}{3}$",
    "$\\dfrac{1}{3}, \\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{5}{6}, \\dfrac{11}{12}, 1$"
   ],
   "pistes": [
    "Els dos termes coneguts són a les posicions $2$ i $4$: la diferència entre ells és $2d$.",
    "$2d=\\dfrac56-\\dfrac12=\\dfrac13\\Rightarrow d=\\dfrac16$. A partir d'aquí, suma o resta $\\dfrac16$ per completar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcHJpbWVyIHRlcm1lIHMnb2J0w6kgcmVzdGFudCAkZCQgYWwgc2Vnb24gdGVybWUsICRcXGRmcmFjMTItXFxkZnJhYzE2JCwgbm8gZGl2aWRpbnQtbG8uIiwgIlJldmlzYSBsYSBwb3NpY2nDsyBkZWwgY2lucXXDqCB0ZXJtZTogZW50cmUgZWwgcXVhcnQgKCRcXGRmcmFjNTYkKSBpIGVsIGNpbnF1w6ggaGkgaGEgZCdoYXZlciB1biBwYXMgZGUgJGQkLCBubyBkb3MuIiwgIlJldmlzYSBlbCBjaW5xdcOoIHRlcm1lOiAkXFxkZnJhYzU2K1xcZGZyYWMxNj1cXGRmcmFjezZ9ezZ9PTEkLCBubyAkXFxkZnJhY3sxMX17MTJ9JC4iXSwgImVyciI6IFsiIiwgIkVOVEVSX0FMX05VTUVSQURPUiIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiVEVSTUVfTUFMX0NBTENVTEFUIl0sICJyZXMiOiBbIiQyZD1cXGRmcmFjNTYtXFxkZnJhYzEyPVxcZGZyYWMxM1xcUmlnaHRhcnJvdyBkPVxcZGZyYWMxNiQiLCAiJGFfMT1hXzItZD1cXGRmcmFjMTItXFxkZnJhYzE2PVxcZGZyYWMxMyQiLCAiJGFfMz1hXzIrZD1cXGRmcmFjMTIrXFxkZnJhYzE2PVxcZGZyYWMyMyQiLCAiJGFfNT1hXzQrZD1cXGRmcmFjNTYrXFxkZnJhYzE2PTEkLCAkYV82PWFfNStkPTErXFxkZnJhYzE2PVxcZGZyYWM3NiQiLCAiRWxzIHNpcyB0ZXJtZXMgc8OzbiAkXFxkZnJhYzEzLFxcO1xcZGZyYWMxMixcXDtcXGRmcmFjMjMsXFw7XFxkZnJhYzU2LFxcOzEsXFw7XFxkZnJhYzc2JCJdfQ=="
  },
  {
   "id": "53b",
   "ex": 53,
   "ap": "b",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sabent que aquestes són progressions aritmètiques, completa a la llibreta els termes que falten.",
   "enunciat": "$\\square;\\;1{,}5;\\;\\square;\\;2{,}5;\\;\\square$",
   "opcions": [
    "$1, \\dfrac{3}{2}, 2, \\dfrac{5}{2}, 3$",
    "$1, \\dfrac{3}{2}, 2, \\dfrac{5}{2}, \\dfrac{7}{2}$",
    "$\\dfrac{1}{2}, \\dfrac{3}{2}, 2, \\dfrac{5}{2}, \\dfrac{7}{2}$",
    "$0, \\dfrac{3}{2}, 3, \\dfrac{5}{2}, 4$"
   ],
   "pistes": [
    "Els dos termes coneguts són a les posicions $2$ i $4$: la diferència entre ells és $2d$.",
    "$2d=2{,}5-1{,}5=1\\Rightarrow d=0{,}5$. A partir d'aquí, suma o resta $0{,}5$ per completar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIGRhcnJlciB0ZXJtZTogJDJ7LH01KzB7LH01PTMkLCBubyAkM3ssfTUkLiIsICJFbCBwcmltZXIgdGVybWUgcydvYnTDqSByZXN0YW50ICRkJCBhbCBzZWdvbiB0ZXJtZSwgJDF7LH01LTB7LH01JCwgbm8gZGl2aWRpbnQtbG8uIiwgIlJldmlzYSBsYSBkaWZlcsOobmNpYSBlbnRyZSBlbHMgZG9zIHRlcm1lcyBjb25lZ3V0czogJDJkPTJ7LH01LTF7LH01PTFcXFJpZ2h0YXJyb3cgZD0weyx9NSQsIG5vICQxeyx9NSQuIl0sICJlcnIiOiBbIiIsICJDT01QQVJBX1RFUk1FUyIsICJFTlRFUl9BTF9OVU1FUkFET1IiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJDJkPTJ7LH01LTF7LH01PTFcXFJpZ2h0YXJyb3cgZD0weyx9NSQiLCAiJGFfMT1hXzItZD0xeyx9NS0weyx9NT0xJCIsICIkYV8zPWFfMitkPTF7LH01KzB7LH01PTIkIiwgIiRhXzU9YV80K2Q9MnssfTUrMHssfTU9MyQiLCAiRWxzIGNpbmMgdGVybWVzIHPDs24gJDEsXFw7MXssfTUsXFw7MixcXDsyeyx9NSxcXDszJCJdfQ=="
  },
  {
   "id": "53c",
   "ex": 53,
   "ap": "c",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Sabent que aquestes són progressions aritmètiques, completa a la llibreta els termes que falten.",
   "enunciat": "$\\square,\\;\\dfrac14,\\;\\square,\\;\\square,\\;\\dfrac12,\\;\\square$",
   "opcions": [
    "$\\dfrac{1}{6}, \\dfrac{1}{4}, \\dfrac{3}{8}, \\dfrac{1}{2}, \\dfrac{1}{2}, \\dfrac{7}{12}$",
    "$\\dfrac{1}{12}, \\dfrac{1}{4}, \\dfrac{1}{3}, \\dfrac{5}{12}, \\dfrac{1}{2}, \\dfrac{7}{12}$",
    "$\\dfrac{1}{6}, \\dfrac{1}{4}, \\dfrac{1}{3}, \\dfrac{5}{12}, \\dfrac{1}{2}, \\dfrac{7}{12}$",
    "$\\dfrac{1}{6}, \\dfrac{1}{4}, \\dfrac{1}{3}, \\dfrac{5}{12}, \\dfrac{1}{2}, \\dfrac{2}{3}$"
   ],
   "pistes": [
    "Els dos termes coneguts són a les posicions $2$ i $5$: la diferència entre ells és $3d$.",
    "$3d=\\dfrac12-\\dfrac14=\\dfrac14\\Rightarrow d=\\dfrac{1}{12}$. A partir d'aquí, suma o resta $\\dfrac{1}{12}$ per completar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgbGEgcG9zaWNpw7MgZGVsIHRlcmNlciB0ZXJtZTogZW50cmUgZWwgc2Vnb24gKCRcXGRmcmFjMTQkKSBpIGVsIGNpbnF1w6ggKCRcXGRmcmFjMTIkKSBoaSBoYSBleGFjdGFtZW50IHRyZXMgcGFzc29zIGRlICRkJCwgbm8gZG9zLiIsICJFbCBwcmltZXIgdGVybWUgcydvYnTDqSByZXN0YW50ICRkJCBhbCBzZWdvbiB0ZXJtZSwgJFxcZGZyYWMxNC1cXGRmcmFjezF9ezEyfSQsIG5vIGRpdmlkaW50LWxvLiIsICIiLCAiUmV2aXNhIGVsIGRhcnJlciB0ZXJtZTogJFxcZGZyYWMxMitcXGRmcmFjezF9ezEyfT1cXGRmcmFjezd9ezEyfSQsIG5vICRcXGRmcmFjMjMkLiJdLCAiZXJyIjogWyJERVNQTEFDQU1FTlRfSU5ERVgiLCAiRU5URVJfQUxfTlVNRVJBRE9SIiwgIiIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyIkM2Q9XFxkZnJhYzEyLVxcZGZyYWMxND1cXGRmcmFjMTRcXFJpZ2h0YXJyb3cgZD1cXGRmcmFjezF9ezEyfSQiLCAiJGFfMT1hXzItZD1cXGRmcmFjMTQtXFxkZnJhY3sxfXsxMn09XFxkZnJhYzE2JCIsICIkYV8zPWFfMitkPVxcZGZyYWMxNCtcXGRmcmFjezF9ezEyfT1cXGRmcmFjMTMkIiwgIiRhXzQ9YV8zK2Q9XFxkZnJhYzEzK1xcZGZyYWN7MX17MTJ9PVxcZGZyYWN7NX17MTJ9JCIsICIkYV82PWFfNStkPVxcZGZyYWMxMitcXGRmcmFjezF9ezEyfT1cXGRmcmFjezd9ezEyfSQiLCAiRWxzIHNpcyB0ZXJtZXMgc8OzbiAkXFxkZnJhYzE2LFxcO1xcZGZyYWMxNCxcXDtcXGRmcmFjMTMsXFw7XFxkZnJhY3s1fXsxMn0sXFw7XFxkZnJhYzEyLFxcO1xcZGZyYWN7N317MTJ9JCJdfQ=="
  },
  {
   "id": "54a",
   "ex": 54,
   "ap": "a",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$3,\\;6,\\;12,\\;24,\\dots$",
   "opcions": [
    "$d=3,\\;\\;a_n=3+(n-1)\\cdot3$",
    "$r=2,\\;\\;a_n=3+2^{\\,n-1}$",
    "$r=2,\\;\\;a_n=3\\cdot2^{\\,n}$",
    "$r=2,\\;\\;a_n=3\\cdot2^{\\,n-1}$"
   ],
   "pistes": [
    "Divideix cada terme entre l'anterior per veure si el quocient és sempre el mateix.",
    "$6:3=2$, $12:6=2$, $24:12=2$: la raó és constant, $r=2$, és una progressió GEOMÈTRICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbHMgcHJpbWVycyBkb3MgdGVybWVzIHPDrSBxdWUgc3VtYXJpZW4gJDMkLCBwZXLDsiAkMTItNj02XFxuZTMkOiBsYSBkaWZlcsOobmNpYSBubyDDqXMgY29uc3RhbnQsIGFpeMOtIHF1ZSBubyDDqXMgdW5hIHByb2dyZXNzacOzIEFSSVRNw4hUSUNBLiBFbCB0ZXJtZSBzJ2hhIGRlIGNhbGN1bGFyIHNlZ3VpbnQgZXN0cmljdGFtZW50IGxhIHJlZ2xhIHF1ZSBkZWZpbmVpeCBsYSBzdWNjZXNzacOzIChlbCB0ZXJtZSBnZW5lcmFsIG8gbGEgcmVsYWNpw7MgZGUgcmVjdXJyw6huY2lhKSwgbm8gdW4gcGF0csOzIGFwcm94aW1hdCBvIGludmVudGF0LiIsICJFbCB0ZXJtZSBnZW5lcmFsIGQndW5hIFBHIMOpcyB1biBQUk9EVUNURSwgJGFfMVxcY2RvdCByXntuLTF9JCwgbm8gdW5hIHN1bWEuIiwgIkwnZXhwb25lbnQgZGVsIHRlcm1lIGdlbmVyYWwgw6lzICRuLTEkLCBubyAkbiQ6IHBlciAkbj0xJCBsJ2V4cG9uZW50IGhhIGRlIHNlciAkMCQuIiwgIiJdLCAiZXJyIjogWyJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJQT1RFTkNJQV9ERV9TVU1BIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICIiXSwgInJlcyI6IFsiJDY6Mz0yJCwgJDEyOjY9MiQsICQyNDoxMj0yJDogcmHDsyBjb25zdGFudCwgJHI9MiQiLCAiJGFfbj1hXzFcXGNkb3Qgcl57XFwsbi0xfT0zXFxjZG90Ml57XFwsbi0xfSQiXX0="
  },
  {
   "id": "54b",
   "ex": 54,
   "ap": "b",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$10,\\;7,\\;4,\\;1,\\dots$",
   "opcions": [
    "$d=-3,\\;\\;a_n=10-(n-1)\\cdot3$",
    "$d=-3,\\;\\;a_n=10-3n$",
    "$r=\\dfrac7{10},\\;\\;a_n=10\\cdot\\left(\\dfrac7{10}\\right)^{n-1}$",
    "$d=3,\\;\\;a_n=10+(n-1)\\cdot3$"
   ],
   "pistes": [
    "Comprova primer si la diferència entre termes consecutius és constant.",
    "$7-10=-3$, $4-7=-3$, $1-4=-3$: diferència constant, $d=-3$, és una progressió ARITMÈTICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdGVybWUgZ2VuZXJhbCDDqXMgJGFfMSsobi0xKWQkLCBubyAkYV8xK25kJDogcmV2aXNhIGwnZXhwb25lbnQgZGUgJChuLTEpJC4iLCAiRWwgcXVvY2llbnQgZW50cmUgdGVybWVzIGNvbnNlY3V0aXVzIG5vIMOpcyBjb25zdGFudCAoJDQ6N1xcbmU3OjEwJCk6IG5vIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgR0VPTcOIVFJJQ0EuIEhvIMOpcyBhcml0bcOodGljYSwgcGVycXXDqCBsYSBkaWZlcsOobmNpYSBzw60gcXVlIMOpcyBjb25zdGFudC4iLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQuIFJldmlzYSBxdWluIGRlbHMgZG9zIHRlcm1lcyDDqXMgbcOpcyBncmFuIGVuIHZhbG9yIGFic29sdXQuIl0sICJlcnIiOiBbIiIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJDctMTA9LTMkLCAkNC03PS0zJCwgJDEtND0tMyQ6IGRpZmVyw6huY2lhIGNvbnN0YW50LCAkZD0tMyQiLCAiJGFfbj1hXzErKG4tMSlkPTEwKyhuLTEpXFxjZG90KC0zKT0xMC0zKG4tMSkkIl19"
  },
  {
   "id": "54c",
   "ex": 54,
   "ap": "c",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$1,\\;1,\\;1,\\;1,\\dots$",
   "opcions": [
    "$d=1,\\;\\;a_n=n$",
    "$d=0,\\;\\;a_n=0$",
    "$d=0,\\;\\;a_n=1$",
    "$d=0,\\;\\;a_n=n$"
   ],
   "pistes": [
    "Calcula la diferència entre termes consecutius.",
    "$1-1=0$ sempre: diferència constant, $d=0$."
   ],
   "nota": "Aquesta successió constant compleix alhora la definició de progressió aritmètica ($d=0$) i de progressió geomètrica ($r=1$): és un cas límit on totes dues coincideixen. Aquí es demana la lectura aritmètica, que és la de la resta de l'exercici; la geomètrica seria igual de vàlida.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB0ZXJtZSBnZW5lcmFsIGhhIGRlIGRvbmFyIHNlbXByZSAkMSQ6ICRhX249biQgZG9uYSAkMSwyLDMsNFxcZG90cyQsIHF1ZSBubyBjb2luY2lkZWl4IGFtYiBsYSBzdWNjZXNzacOzLiIsICJFbCBwcmltZXIgdGVybWUgKGkgdG90cyBlbHMgYWx0cmVzKSDDqXMgJDEkLCBubyAkMCQ6IHJldmlzYSBsYSBzdWJzdGl0dWNpw7MgYSAkYV9uPWFfMSsobi0xKVxcY2RvdDAkLiIsICIiLCAiTGEgZGlmZXLDqG5jaWEgc8OtIHF1ZSDDqXMgJDAkLCBwZXLDsiBsbGF2b3JzIGVsIHRlcm1lIGdlbmVyYWwgbm8gcG90IGRlcGVuZHJlIGRlICRuJDogJGFfbj1hXzErKG4tMSlcXGNkb3QwPWFfMSQsIHNlbXByZSBlbCBtYXRlaXggdmFsb3IuIl0sICJlcnIiOiBbIkNPTVBBUkFfVEVSTUVTIiwgIlRFUk1FX01BTF9DQUxDVUxBVCIsICIiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiXSwgInJlcyI6IFsiJDEtMT0wJCAoaSBpZ3VhbCBwZXIgYSBsYSByZXN0YSk6IGRpZmVyw6huY2lhIGNvbnN0YW50LCAkZD0wJCIsICIkYV9uPWFfMSsobi0xKWQ9MSsobi0xKVxcY2RvdDA9MSQiXX0="
  },
  {
   "id": "54d",
   "ex": 54,
   "ap": "d",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$16,\\;8,\\;4,\\;2,\\;1,\\dots$",
   "opcions": [
    "$d=-8,\\;\\;a_n=16-(n-1)\\cdot8$",
    "$r=2,\\;\\;a_n=16\\cdot2^{\\,n-1}$",
    "$r=\\dfrac12,\\;\\;a_n=16\\cdot\\left(\\dfrac12\\right)^{n-1}$",
    "$r=\\dfrac12,\\;\\;a_n=16\\cdot\\left(\\dfrac12\\right)^{n}$"
   ],
   "pistes": [
    "Divideix cada terme entre l'anterior per veure si el quocient és sempre el mateix.",
    "$8:16=\\dfrac12$, $4:8=\\dfrac12$, $2:4=\\dfrac12$: raó constant, $r=\\dfrac12$, és una progressió GEOMÈTRICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBwcmltZXIgcGFyZWxsIGRlIHRlcm1lcyBzw60gcXVlIHJlc3RhICQ4JCwgcGVyw7IgJDQtOD0tNFxcbmUtOCQ6IGxhIGRpZmVyw6huY2lhIG5vIMOpcyBjb25zdGFudCwgYWl4w60gcXVlIG5vIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgQVJJVE3DiFRJQ0EuIEVsIHRlcm1lIHMnaGEgZGUgY2FsY3VsYXIgc2VndWludCBlc3RyaWN0YW1lbnQgbGEgcmVnbGEgcXVlIGRlZmluZWl4IGxhIHN1Y2Nlc3Npw7MgKGVsIHRlcm1lIGdlbmVyYWwgbyBsYSByZWxhY2nDsyBkZSByZWN1cnLDqG5jaWEpLCBubyB1biBwYXRyw7MgYXByb3hpbWF0IG8gaW52ZW50YXQuIiwgIkhhcyBpbnZlcnRpdCBsYSByYcOzOiBsYSBzdWNjZXNzacOzIHZhIGRpc21pbnVpbnQsIGFpeMOtIHF1ZSAkciQgaGEgZGUgc2VyIG3DqXMgcGV0aXRhIHF1ZSAkMSQsIG5vICQyJC4iLCAiIiwgIkwnZXhwb25lbnQgZGVsIHRlcm1lIGdlbmVyYWwgw6lzICRuLTEkLCBubyAkbiQ6IHBlciAkbj0xJCBsJ2V4cG9uZW50IGhhIGRlIHNlciAkMCQuIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIklOVkVSVElEQSIsICIiLCAiREVTUExBQ0FNRU5UX0lOREVYIl0sICJyZXMiOiBbIiQ4OjE2PVxcZGZyYWMxMiQsICQ0Ojg9XFxkZnJhYzEyJCwgJDI6ND1cXGRmcmFjMTIkLCAkMToyPVxcZGZyYWMxMiQ6IHJhw7MgY29uc3RhbnQsICRyPVxcZGZyYWMxMiQiLCAiJGFfbj1hXzFcXGNkb3Qgcl57XFwsbi0xfT0xNlxcY2RvdFxcbGVmdChcXGRmcmFjMTJcXHJpZ2h0KV57bi0xfSQiXX0="
  },
  {
   "id": "54e",
   "ex": 54,
   "ap": "e",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$16,\\;8,\\;0,\\;-8,\\dots$",
   "opcions": [
    "$r=\\dfrac12,\\;\\;a_n=16\\cdot\\left(\\dfrac12\\right)^{n-1}$",
    "$d=-8,\\;\\;a_n=16-8n$",
    "$d=-8,\\;\\;a_n=16-(n-1)\\cdot8$",
    "$d=8,\\;\\;a_n=16+(n-1)\\cdot8$"
   ],
   "pistes": [
    "Comprova primer si la diferència entre termes consecutius és constant.",
    "$8-16=-8$, $0-8=-8$, $-8-0=-8$: diferència constant, $d=-8$, és una progressió ARITMÈTICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBxdW9jaWVudCBlbnRyZSB0ZXJtZXMgY29uc2VjdXRpdXMgbm8gw6lzIGNvbnN0YW50ICgkMDo4PTAkLCBwZXLDsiAkODoxNj1cXGRmcmFjMTIkKTogbm8gw6lzIHVuYSBwcm9ncmVzc2nDsyBHRU9Nw4hUUklDQS4gSG8gw6lzIGFyaXRtw6h0aWNhLCBwZXJxdcOoIGxhIGRpZmVyw6huY2lhIHPDrSBxdWUgw6lzIGNvbnN0YW50LiIsICJFbCB0ZXJtZSBnZW5lcmFsIMOpcyAkYV8xKyhuLTEpZCQsIG5vICRhXzErbmQkOiByZXZpc2EgbCdleHBvbmVudCBkZSAkKG4tMSkkLiIsICIiLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQuIFJldmlzYSBxdWluIGRlbHMgZG9zIHRlcm1lcyDDqXMgbcOpcyBncmFuIGVuIHZhbG9yIGFic29sdXQuIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJDgtMTY9LTgkLCAkMC04PS04JCwgJC04LTA9LTgkOiBkaWZlcsOobmNpYSBjb25zdGFudCwgJGQ9LTgkIiwgIiRhX249YV8xKyhuLTEpZD0xNisobi0xKVxcY2RvdCgtOCk9MTYtOChuLTEpJCJdfQ=="
  },
  {
   "id": "54f",
   "ex": 54,
   "ap": "f",
   "bloc": "aritmetiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula la diferència o la raó de les progressions següents i troba'n el terme general.",
   "enunciat": "$3,\\;9,\\;15,\\;21,\\dots$",
   "opcions": [
    "$d=6,\\;\\;a_n=3+6n$",
    "$d=-6,\\;\\;a_n=3-(n-1)\\cdot6$",
    "$r=3,\\;\\;a_n=3\\cdot3^{\\,n-1}$",
    "$d=6,\\;\\;a_n=3+(n-1)\\cdot6$"
   ],
   "pistes": [
    "Comprova primer si la diferència entre termes consecutius és constant.",
    "$9-3=6$, $15-9=6$, $21-15=6$: diferència constant, $d=6$, és una progressió ARITMÈTICA."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB0ZXJtZSBnZW5lcmFsIMOpcyAkYV8xKyhuLTEpZCQsIG5vICRhXzErbmQkOiByZXZpc2EgbCdleHBvbmVudCBkZSAkKG4tMSkkLiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdC4gUmV2aXNhIHF1aW4gZGVscyBkb3MgdGVybWVzIMOpcyBtw6lzIGdyYW4gZW4gdmFsb3IgYWJzb2x1dC4iLCAiRWwgcHJpbWVyIHF1b2NpZW50IHPDrSBxdWUgZG9uYSAkMyQsIHBlcsOyICQxNTo5XFxuZTMkOiBlbCBxdW9jaWVudCBubyDDqXMgY29uc3RhbnQsIGFpeMOtIHF1ZSBubyDDqXMgdW5hIHByb2dyZXNzacOzIEdFT03DiFRSSUNBLiBIbyDDqXMgYXJpdG3DqHRpY2EsIHBlcnF1w6ggbGEgZGlmZXLDqG5jaWEgc8OtIHF1ZSDDqXMgY29uc3RhbnQuIiwgIiJdLCAiZXJyIjogWyJERVNQTEFDQU1FTlRfSU5ERVgiLCAiU0lHTkVfRklOQUwiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiIl0sICJyZXMiOiBbIiQ5LTM9NiQsICQxNS05PTYkLCAkMjEtMTU9NiQ6IGRpZmVyw6huY2lhIGNvbnN0YW50LCAkZD02JCIsICIkYV9uPWFfMSsobi0xKWQ9Mysobi0xKVxcY2RvdDYkIl19"
  },
  {
   "id": "55",
   "ex": 55,
   "ap": "",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 3,
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
   "nota": "El valor exacte de $a_{20}$ té un denominador d'onze xifres; es dona en forma de fracció perquè el decimal seria pràcticament $0$ i amagaria la magnitud real.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMYSByYcOzIMOpcyAkcj1cXGRmcmFje2FfMn17YV8xfT1cXGRmcmFjMzQkLCBubyAkXFxkZnJhYzQzJDogaGFzIGludmVydGl0IGVsIHF1b2NpZW50IGVuIGVscyBkb3MgY8OgbGN1bHMuIiwgIiIsICJFbCBwcmltZXIgdGVybWUgZGUgbGEgcHJvZ3Jlc3Npw7Mgw6lzICRhXzE9NCQsIG5vICQzJCAoYXF1ZXN0IMOpcyAkYV8yJCk6IGVsIGZhY3RvciBxdWUgdmEgZGF2YW50IGRlIGxhIHBvdMOobmNpYSBoYSBkZSBzZXIgJDQkLiIsICJMJ2V4cG9uZW50IGRlbCB0ZXJtZSBnZW5lcmFsIMOpcyAkbi0xJCwgbm8gJG4kOiBwZXIgJG49MSQgbCdleHBvbmVudCBoYSBkZSBzZXIgJDAkLCBpIHBlciBhICRhX3syMH0kIGwnZXhwb25lbnQgaGEgZGUgc2VyICQxOSQsIG5vICQyMCQuIl0sICJlcnIiOiBbIklOVkVSVElEQSIsICIiLCAiQ09NUEFSQV9URVJNRVMiLCAiREVTUExBQ0FNRU5UX0lOREVYIl0sICJyZXMiOiBbIiRyPVxcZGZyYWN7YV8yfXthXzF9PVxcZGZyYWMzNCQiLCAiJGFfbj1hXzFcXGNkb3Qgcl57XFwsbi0xfT00XFxjZG90XFxsZWZ0KFxcZGZyYWMzNFxccmlnaHQpXntuLTF9JCIsICIkYV97MjB9PTRcXGNkb3RcXGxlZnQoXFxkZnJhYzM0XFxyaWdodCleezE5fT1cXGRmcmFjezFcXCwxNjJcXCwyNjFcXCw0Njd9ezY4XFwsNzE5XFwsNDc2XFwsNzM2fSQiLCAiw4lzIHVuIG5vbWJyZSBtb2x0IHBldGl0LCBtw6lzIGEgcHJvcCBkZSAkMCQgcXVlIGRlICQxJDogdMOpIHNlbnRpdCwgcGVycXXDqCBsYSByYcOzICRcXGRmcmFjMzQkIMOpcyBtZW5vciBxdWUgJDEkIGkgbGEgc3VjY2Vzc2nDsyB2YSBkaXNtaW51aW50LiJdfQ=="
  },
  {
   "id": "56a",
   "ex": 56,
   "ap": "a",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula.",
   "enunciat": "Terme general d'una PG amb $a_1=3$ i $r=5$",
   "opcions": [
    "$a_n=3\\cdot5^{\\,n}$",
    "$a_n=3\\cdot5^{\\,n-1}$",
    "$a_n=5\\cdot3^{\\,n-1}$",
    "$a_n=3+(n-1)\\cdot5$"
   ],
   "pistes": [
    "El terme general d'una PG és $a_n=a_1\\cdot r^{\\,n-1}$.",
    "$a_n=3\\cdot5^{\\,n-1}$."
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
   "dif": 1,
   "encapcalament": "Calcula.",
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
   "dif": 1,
   "encapcalament": "Calcula.",
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
   "dif": 2,
   "encapcalament": "Donada la successió $\\dfrac23,\\;\\dfrac29,\\;\\dfrac2{27},\\;\\dfrac2{81},\\dots$:",
   "enunciat": "Comprova que $\\dfrac23,\\;\\dfrac29,\\;\\dfrac2{27},\\;\\dfrac2{81},\\dots$ és una progressió geomètrica.",
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
   "dif": 2,
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
   "dif": 2,
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
   "nota": "El valor exacte de $3^{100}$ té $48$ xifres: es deixa en forma de potència, com ja es feia amb exponents grans a Full 2.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRmFsdGEgY29tcHRhciBlbCBmYWN0b3IgJFxcZGZyYWMyMyQgaW5pY2lhbCBkaW5zIGRlIGxhIHBvdMOobmNpYSBkZSAkMyQgZGVsIGRlbm9taW5hZG9yOiAkYV8yPVxcZGZyYWMyM1xcY2RvdFxcZGZyYWMxMz1cXGRmcmFjMnszXjJ9JCwgbm8gJFxcZGZyYWMyezNeMX0kLiIsICJMJ2V4cG9uZW50IHF1ZSBjYWwgZmVyIHNlcnZpciBwZXIgYSAkYV97MTAwfSQgw6lzICQxMDAtMT05OSQsIHF1ZSDDqXMgZWwgcXVlIGRvbmEgJDNeezEwMH0kIGFsIGRlbm9taW5hZG9yIHVuIGNvcCBlc2NyaXQgYW1iICRhXzE9XFxkZnJhYzIzJDogcmV2aXNhIGVsIGRlc3BsYcOnYW1lbnQgYW1iIHVuIGNhcyBwZXRpdCBhYmFucywgY29tICRhXzI9XFxkZnJhYzI5PVxcZGZyYWMyezNeMn0kLiIsICJFbHMgdGVybWVzIGRlIGxhIHN1Y2Nlc3Npw7MgdmFuIGZlbnQtc2UgY2FkYSB2ZWdhZGEgbcOpcyBwZXRpdHMgKGxhIHJhw7Mgw6lzICRcXGRmcmFjMTMkLCBtZW5vciBxdWUgJDEkKTogbm8gcG9kZW4gdmFsZXIgbm9tYnJlcyBlbnRlcnMgY2FkYSB2ZWdhZGEgbcOpcyBncmFucy4iXSwgImVyciI6IFsiIiwgIkZBQ1RPUl9PQkxJREFUIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJJTlZFUlRJREEiXSwgInJlcyI6IFsiQ29tIHF1ZSAkYV8xPVxcZGZyYWMyMz1cXGRmcmFjMnszXjF9JCwgJGFfMj1cXGRmcmFjMnszXjJ9JC4uLiBlbCBwYXRyw7Mgw6lzICRhX249XFxkZnJhY3syfXszXntcXCxufX0kIiwgIiRhX3sxMDB9PVxcZGZyYWN7Mn17M157MTAwfX0kIGkgJGFfezEwMX09XFxkZnJhY3syfXszXnsxMDF9fSQiXX0="
  },
  {
   "id": "58a",
   "ex": 58,
   "ap": "a",
   "bloc": "geometriques",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
   "encapcalament": "Troba els termes que falten a les progressions geomètriques següents.",
   "enunciat": "$\\square,\\;\\dfrac13,\\;\\square,\\;\\dfrac1{12},\\;\\square$",
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
   "nota": "De $r^2=\\dfrac14$ en surten dues raons possibles, $r=\\dfrac12$ i $r=-\\dfrac12$; es dona la solució amb raó positiva perquè manté el signe dels termes ja coneguts a l'enunciat.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQW1iICRyXjI9XFxkZnJhYzE0JCBoaSBoYSBkdWVzIHJhb25zIHBvc3NpYmxlcywgJFxcZGZyYWMxMiQgaSAkLVxcZGZyYWMxMiQ7IGVzIGRlbWFuYSBsYSBzb2x1Y2nDsyBhbWIgcmHDsyBwb3NpdGl2YSwgY29oZXJlbnQgYW1iIHF1ZSB0b3RzIGVscyB0ZXJtZXMgY29uZWd1dHMgZGUgbCdlbnVuY2lhdCBqYSBzw7NuIHBvc2l0aXVzLiIsICJFbCB0ZXJjZXIgdGVybWUgcydvYnTDqSBtdWx0aXBsaWNhbnQgZWwgc2Vnb24gcGVyICRyPVxcZGZyYWMxMiQ6ICRcXGRmcmFjMTNcXGNkb3RcXGRmcmFjMTI9XFxkZnJhYzE2JCwgbm8gJFxcZGZyYWMxOSQuIiwgIkVudHJlIGVsIHNlZ29uIHRlcm1lICgkXFxkZnJhYzEzJCkgaSBlbCBxdWFydCAoJFxcZGZyYWMxezEyfSQpIGhpIGhhIGV4YWN0YW1lbnQgRE9TIHBhc3NvcyBkZSAkciQsIG5vIHVuLiJdLCAiZXJyIjogWyIiLCAiUEFSSVRBVF9FWFBPTkVOVCIsICJSQU9fTUFMX0FQTElDQURBIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCJdLCAicmVzIjogWyIkcl4yPVxcZGZyYWN7MS8xMn17MS8zfT1cXGRmcmFjMTRcXFJpZ2h0YXJyb3cgcj1cXGRmcmFjMTIkIiwgIiRhXzE9YV8yOnI9XFxkZnJhYzEzOlxcZGZyYWMxMj1cXGRmcmFjMjMkIiwgIiRhXzM9YV8yXFxjZG90IHI9XFxkZnJhYzEzXFxjZG90XFxkZnJhYzEyPVxcZGZyYWMxNiQiLCAiJGFfNT1hXzRcXGNkb3Qgcj1cXGRmcmFjMXsxMn1cXGNkb3RcXGRmcmFjMTI9XFxkZnJhYzF7MjR9JCIsICJFbHMgY2luYyB0ZXJtZXMgc8OzbiAkXFxkZnJhYzIzLFxcO1xcZGZyYWMxMyxcXDtcXGRmcmFjMTYsXFw7XFxkZnJhYzF7MTJ9LFxcO1xcZGZyYWMxezI0fSQiXX0="
  },
  {
   "id": "58d",
   "ex": 58,
   "ap": "d",
   "bloc": "geometriques",
   "tipus": "B",
   "dif": 3,
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
   "nota": "A diferència dels altres apartats d'aquest exercici, la raó d'aquesta progressió no és un nombre racional senzill ($r=\\sqrt[3]{27/2}$): és intencionat, per practicar que no totes les progressions geomètriques tenen raons \"boniques\", i que llavors cal deixar els termes expressats en funció de $r$ en lloc de calcular-los numèricament.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkcl4zPVxcZGZyYWN7Mjd9MiQgw6lzIHVuIHBhcyBpbnRlcm1lZGksIG5vIGxhIHJhw7M6IGNhbCBlbmNhcmEgZXh0cmV1cmUgbCdhcnJlbCBjw7piaWNhLCAkcj1cXHNxcnRbM117XFxkZnJhY3syN30yfSQsIGkgZmVyIHNlcnZpciBhcXVlc3QgdmFsb3IgcGVyIGNvbXBsZXRhciBlbHMgdGVybWVzIHF1ZSBmYWx0ZW4uIiwgIiIsICJBbWIgJHI9MyQgZWwgY2lucXXDqCB0ZXJtZSBkb25hcmlhICRcXGRmcmFjMzJcXGNkb3QzXjM9XFxkZnJhYzMyXFxjZG90Mjc9XFxkZnJhY3s4MX0yJCwgbm8gJFxcZGZyYWN7ODF9NCQgKGVsIHZhbG9yIHJlYWwgZGUgbCdlbnVuY2lhdCk6ICRyPTMkIG5vIGNvbXBsZWl4IGxhIHJlbGFjacOzICRyXjM9XFxkZnJhY3s4MS80fXszLzJ9PVxcZGZyYWN7Mjd9MiQuIiwgIlPDrSBxdWUgZXMgcG90IHJlc29sZHJlOiBsYSByYcOzIMOpcyAkcj1cXHNxcnRbM117XFxkZnJhY3syN30yfSQgKHVuIG5vbWJyZSBpcnJhY2lvbmFsIHBlcsOyIHBlcmZlY3RhbWVudCB2w6BsaWQpLCBpIGVscyB0ZXJtZXMgcXVlIGZhbHRlbiBlcyBwb2RlbiBleHByZXNzYXIgZW4gZnVuY2nDsyBkJ2FxdWVzdCB2YWxvciBkZSAkciQuIl0sICJlcnIiOiBbIlBBU19JTlRFUk1FRElfUEVSX1JFU1BPU1RBIiwgIiIsICJSQU9fTUFMX0FQTElDQURBIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkcl4zPVxcZGZyYWN7ODEvNH17My8yfT1cXGRmcmFjezgxfTRcXGNkb3RcXGRmcmFjMjM9XFxkZnJhY3syN30yXFxSaWdodGFycm93IHI9XFxzcXJ0WzNde1xcZGZyYWN7Mjd9Mn09XFxkZnJhY3szfXtcXHNxcnRbM10yfSQiLCAiQ29tIHF1ZSAkciQgbm8gw6lzIHVuIG5vbWJyZSByYWNpb25hbCBzZW56aWxsLCBlbHMgdGVybWVzIHF1ZSBmYWx0ZW4gZXMgZGVpeGVuIGluZGljYXRzIGVuIGZ1bmNpw7MgZGUgJHIkIiwgIiRhXzE9YV8yOnI9XFxkZnJhYzMyOnI9XFxkZnJhYzN7MnJ9JCIsICIkYV8zPWFfMlxcY2RvdCByPVxcZGZyYWMzMlxcLHIkIiwgIiRhXzQ9YV8zXFxjZG90IHI9XFxkZnJhYzMyXFwscl4yJCJdfQ=="
  },
  {
   "id": "59a",
   "ex": 59,
   "ap": "a",
   "bloc": "aplicacions",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Donada la progressió $3,\\;6,\\;12,\\;24,\\dots$, digues si cada expressió n'és o no el terme general (o si l'afirmació és certa), i per què.",
   "enunciat": "$a_n = 3 + (n-1)\\cdot 3$",
   "opcions": [
    "No, perquè el primer terme hauria de ser $0$, no $3$.",
    "No, perquè aquesta fórmula és la d'una progressió ARITMÈTICA amb $d=3$: donaria $3,6,9,12\\dots$, que no coincideix amb la successió a partir del tercer terme.",
    "Sí, perquè totes les progressions es poden escriure amb aquesta forma.",
    "Sí, perquè el primer terme i el pas $3$ coincideixen amb la successió."
   ],
   "pistes": [
    "Comprova si la diferència entre termes consecutius de la successió és realment constant.",
    "$6-3=3$, però $12-6=6\\ne3$: la diferència no és constant, no és una progressió aritmètica."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUsICQzJCwgc8OtIHF1ZSDDqXMgY29ycmVjdGUuIEVsIHByb2JsZW1hIG5vIMOpcyBlbCBwcmltZXIgdGVybWUsIHNpbsOzIHF1ZSBsYSBzdWNjZXNzacOzIG5vIGNyZWl4IHN1bWFudCBzZW1wcmUgZWwgbWF0ZWl4ICgkMywgNiwgMTIsIDI0JCBubyB0w6kgZGlmZXLDqG5jaWEgY29uc3RhbnQpLiIsICIiLCAiQXF1ZXN0YSBmb3JtYSwgJGFfMSsobi0xKWQkLCBub23DqXMgc2VydmVpeCBwZXIgYSBwcm9ncmVzc2lvbnMgQVJJVE3DiFRJUVVFUyAoZGlmZXLDqG5jaWEgY29uc3RhbnQpLiBBcXXDrSBsYSBzdWNjZXNzacOzIG11bHRpcGxpY2Egc2VtcHJlIHBlbCBtYXRlaXggZmFjdG9yLCDDqXMgR0VPTcOIVFJJQ0EuIiwgIk5vbcOpcyBjb2luY2lkZWl4ZW4gZWxzIGRvcyBwcmltZXJzIHRlcm1lcyBwZXIgY2FzdWFsaXRhdCAoJDMkIGkgJDYkKTogYSBwYXJ0aXIgZGVsIHRlcmNlciB0ZXJtZSBhcXVlc3RhIGbDs3JtdWxhIGRvbmEgJDkkLCBtZW50cmUgcXVlIGxhIHN1Y2Nlc3Npw7MgY29udGludWEgYW1iICQxMiQuIl0sICJlcnIiOiBbIkNPTVBBUkFfVEVSTUVTIiwgIiIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJWRVJFRElDVEVfSU5WRVJUSVQiXSwgInJlcyI6IFsiJDYtMz0zJCwgcGVyw7IgJDEyLTY9NiQ6IGxhIGRpZmVyw6huY2lhIG5vIMOpcyBjb25zdGFudCIsICJQZXIgdGFudCAkYV9uPTMrKG4tMSlcXGNkb3QzJCBubyDDqXMgZWwgdGVybWUgZ2VuZXJhbCBkJ2FxdWVzdGEgc3VjY2Vzc2nDsyJdfQ=="
  },
  {
   "id": "59b",
   "ex": 59,
   "ap": "b",
   "bloc": "aplicacions",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Donada la progressió $3,\\;6,\\;12,\\;24,\\dots$, digues si cada expressió n'és o no el terme general (o si l'afirmació és certa), i per què.",
   "enunciat": "$a_n = 3\\cdot 3^{\\,n-1}$",
   "opcions": [
    "No, perquè les progressions geomètriques no es poden escriure amb potències.",
    "No, perquè fa servir raó $3$: donaria $3,9,27,81\\dots$, que no coincideix amb la successió a partir del segon terme.",
    "Sí, perquè el primer terme, $3$, coincideix amb l'enunciat.",
    "Sí, perquè $3$ apareix dues vegades a la fórmula, com pertoca a una progressió geomètrica."
   ],
   "pistes": [
    "Calcula la raó real de la successió dividint termes consecutius.",
    "$6:3=2$, no $3$: la raó d'aquesta successió és $2$, no $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMZXMgcHJvZ3Jlc3Npb25zIGdlb23DqHRyaXF1ZXMgU8ONIHF1ZSBzJ2VzY3JpdWVuIGFtYiBwb3TDqG5jaWVzLCAkYV9uPWFfMVxcY2RvdCByXntcXCxuLTF9JDogZWwgcHJvYmxlbWEgbm8gw6lzIGxhIGZvcm1hLCDDqXMgcXVlIGFxdcOtIGxhIHJhw7Mgbm8gw6lzICQzJC4iLCAiIiwgIlF1ZSBjb2luY2lkZWl4aSBlbCBwcmltZXIgdGVybWUgbm8gw6lzIHN1ZmljaWVudDogY2FsIHF1ZSBUT1RTIGVscyB0ZXJtZXMgY29pbmNpZGVpeGluLCBpIGRlcyBkZWwgc2Vnb24gamEgbm8gaG8gZmFuICgkOVxcbmU2JCkuIiwgIlF1ZSBlbCAkMyQgYXBhcmVndWkgY29tIGEgZmFjdG9yIGkgY29tIGEgYmFzZSBubyBnYXJhbnRlaXggcXVlIGxhIHJhw7Mgc2lndWkgbGEgY29ycmVjdGE6IGNhbCBjb21wcm92YXItbGEgY2FsY3VsYW50IGVsIHF1b2NpZW50IHJlYWwgZW50cmUgdGVybWVzIGNvbnNlY3V0aXVzIGRlIGxhIHN1Y2Nlc3Npw7MuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlJBT05BTUVOVF9BRERJVElVIl0sICJyZXMiOiBbIiQ2OjM9MiQsICQxMjo2PTIkLCAkMjQ6MTI9MiQ6IGxhIHJhw7MgcmVhbCDDqXMgJDIkLCBubyAkMyQiLCAiUGVyIHRhbnQgJGFfbj0zXFxjZG90M157XFwsbi0xfSQgbm8gw6lzIGVsIHRlcm1lIGdlbmVyYWwgZCdhcXVlc3RhIHN1Y2Nlc3Npw7MiXX0="
  },
  {
   "id": "59c",
   "ex": 59,
   "ap": "c",
   "bloc": "aplicacions",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Donada la progressió $3,\\;6,\\;12,\\;24,\\dots$, digues si cada expressió n'és o no el terme general (o si l'afirmació és certa), i per què.",
   "enunciat": "$a_n = 3\\cdot 2^{\\,n-1}$",
   "opcions": [
    "No, perquè l'exponent hauria de ser $n$, no $n-1$.",
    "Sí, perquè la successió té raó constant $r=2$ ($6:3=2$, $12:6=2$, $24:12=2$) i primer terme $a_1=3$: coincideix exactament.",
    "No, perquè la successió $3,6,12,24$ és aritmètica, no geomètrica.",
    "Sí, però només per als quatre primers termes."
   ],
   "pistes": [
    "Comprova la raó de la successió i compara-la amb l'exponent i el factor de la fórmula.",
    "$r=2$ i $a_1=3$: la fórmula $a_n=3\\cdot2^{\\,n-1}$ hi encaixa exactament."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2V4cG9uZW50IFPDjSBxdWUgaGEgZGUgc2VyICRuLTEkOiBwZXIgJG49MSQgZG9uYSAkM1xcY2RvdDJeMD0zJCwgZWwgcHJpbWVyIHRlcm1lIGNvcnJlY3RlLiBBbWIgZXhwb25lbnQgJG4kIGRvbmFyaWEgJDNcXGNkb3QyXjE9NiQgcGVyIGFsIHByaW1lciB0ZXJtZSwgcXVlIHNlcmlhIGluY29ycmVjdGUuIiwgIiIsICJMYSBzdWNjZXNzacOzIMOpcyBHRU9Nw4hUUklDQSwgbm8gYXJpdG3DqHRpY2E6IGVsIHF1ZSBlcyBtYW50w6kgY29uc3RhbnQgw6lzIGVsIHF1b2NpZW50IGVudHJlIHRlcm1lcyBjb25zZWN1dGl1cyAoJHI9MiQpLCBubyBsYSBkaWZlcsOobmNpYS4iLCAiTGEgZsOzcm11bGEgdmFsIHBlciBhIFRPVFMgZWxzIHRlcm1lcywgbm8gbm9tw6lzIGVscyBxdWF0cmUgcHJpbWVyczogdW4gY29wIGNvbXByb3ZhZGEgbGEgcmHDsyBjb25zdGFudCwgZWwgdGVybWUgZ2VuZXJhbCAkYV9uPWFfMVxcY2RvdCByXntcXCxuLTF9JCBlcyBjb21wbGVpeCBzZW1wcmUuIl0sICJlcnIiOiBbIkRFU1BMQUNBTUVOVF9JTkRFWCIsICIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkNjozPTIkLCAkMTI6Nj0yJCwgJDI0OjEyPTIkOiByYcOzIGNvbnN0YW50LCAkcj0yJCIsICIkYV9uPWFfMVxcY2RvdCByXntcXCxuLTF9PTNcXGNkb3QyXntcXCxuLTF9JDogY29pbmNpZGVpeCBhbWIgYXF1ZXN0YSBleHByZXNzacOzIl19"
  },
  {
   "id": "59d",
   "ex": 59,
   "ap": "d",
   "bloc": "aplicacions",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Donada la progressió $3,\\;6,\\;12,\\;24,\\dots$, digues si cada expressió n'és o no el terme general (o si l'afirmació és certa), i per què.",
   "enunciat": "Algú afirma: «d'aquesta successió no se'n pot calcular el terme general». És cert?",
   "opcions": [
    "Cert: calen més de quatre termes per determinar el terme general amb seguretat.",
    "Fals: sí que es pot calcular, perquè la successió té raó constant $r=2$; és una progressió geomètrica amb terme general $a_n=3\\cdot2^{\\,n-1}$.",
    "Fals: es pot calcular, però només aproximadament.",
    "Cert: com que $3,6,12,24$ no és ni una progressió aritmètica ni geomètrica, no té terme general."
   ],
   "pistes": [
    "Comprova si la successió té una diferència o un quocient constant entre termes consecutius.",
    "$6:3=2$, $12:6=2$, $24:12=2$: raó constant, $r=2$, sí que es pot calcular el terme general."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBbWIgcXVhdHJlIHRlcm1lcyBqYSBuJ2hpIGhhIHByb3UgcGVyIGNvbXByb3ZhciBxdWUgbGEgcmHDsyDDqXMgY29uc3RhbnQgbGVzIHRyZXMgdmVnYWRlcyBwb3NzaWJsZXM6IG5vIGNhbGVuIG3DqXMgZGFkZXMuIiwgIiIsICJFcyBwb3QgY2FsY3VsYXIgZGUgbWFuZXJhIEVYQUNUQSwgbm8gYXByb3hpbWFkYTogZWwgdGVybWUgZ2VuZXJhbCAkYV9uPTNcXGNkb3QyXntcXCxuLTF9JCByZXByb2R1ZWl4IHRvdHMgZWxzIHRlcm1lcyBhbWIgcHJlY2lzacOzLiIsICJTw60gcXVlIMOpcyB1bmEgcHJvZ3Jlc3Npw7MgZ2VvbcOodHJpY2E6IGVsIHF1b2NpZW50IGVudHJlIHRlcm1lcyBjb25zZWN1dGl1cyDDqXMgY29uc3RhbnQsICRyPTIkICgkNjozPTIkLCAkMTI6Nj0yJCwgJDEyOjI0PTIkKS4iXSwgImVyciI6IFsiVkVSRURJQ1RFX0lOVkVSVElUIiwgIiIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiVkVSRURJQ1RFX0lOVkVSVElUIl0sICJyZXMiOiBbIiQ2OjM9MiQsICQxMjo2PTIkLCAkMjQ6MTI9MiQ6IHJhw7MgY29uc3RhbnQsICRyPTIkIiwgIiRhX249YV8xXFxjZG90IHJee1xcLG4tMX09M1xcY2RvdDJee1xcLG4tMX0kOiBzw60gcXVlIGVzIHBvdCBjYWxjdWxhciJdfQ=="
  },
  {
   "id": "60",
   "ex": 60,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un terme d'una progressió geomètrica val $3\\,720\\,087$. Si el primer terme és $7$ i la raó és $3$, de quin terme estem parlant?",
   "enunciat": "Terme d'una PG amb $a_1=7$, $r=3$ que val $3\\,720\\,087$",
   "opcions": [
    "$531441$",
    "$13$",
    "$12$",
    "$18$"
   ],
   "pistes": [
    "Iguala $a_n=7\\cdot3^{\\,n-1}$ a $3\\,720\\,087$ i aïlla la potència de $3$.",
    "$3^{\\,n-1}=3\\,720\\,087:7=531\\,441$. Comprova quina potència de $3$ dona aquest valor."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHZhbG9yIGRlICRyXntuLTF9PTNeezEyfSQsIHVuIHBhcyBpbnRlcm1lZGkgZGVsIGPDoGxjdWw7IGVsIHF1ZSBlcyBkZW1hbmEgw6lzIGxhIHBvc2ljacOzICRuJCBxdWUgb2N1cGEgZWwgdGVybWUsIG5vIGFxdWVzdCB2YWxvci4iLCAiIiwgIiQzXnsxMn09NTMxXFwsNDQxJCAoZWwgcmVzdWx0YXQgZGUgZGl2aWRpciAkM1xcLDcyMFxcLDA4NyQgZW50cmUgJDckKSwgcGVyw7IgbCdleHBvbmVudCAkMTIkIGNvcnJlc3BvbiBhICRuLTEkLCBubyBhICRuJDogY2FsIHN1bWFyLWhpICQxJCBwZXIgdHJvYmFyICRuJC4iLCAiUmV2aXNhIGwnZXF1YWNpw7M6IGNhbCBhw69sbGFyICRuJCBkZSAkM157bi0xfT01MzFcXCw0NDEkIHRyb2JhbnQgcXVpbiBleHBvbmVudCBkb25hIGFxdWVzdCByZXN1bHRhdCwgbm8gc3VtYXIgZXhwb25lbnRzIGFyYml0cmFyaXMuIl0sICJlcnIiOiBbIkNPTVBBUkFfVEVSTUVTIiwgIiIsICJERVNQTEFDQU1FTlRfSU5ERVgiLCAiT1JEUkVfUkVTVEEiXSwgInJlcyI6IFsiJDdcXGNkb3QzXntcXCxuLTF9PTNcXCw3MjBcXCwwODdcXFJpZ2h0YXJyb3czXntcXCxuLTF9PTNcXCw3MjBcXCwwODc6Nz01MzFcXCw0NDEkIiwgIiQ1MzFcXCw0NDE9M157MTJ9JCwgcGVyIHRhbnQgJG4tMT0xMiQiLCAiJG49MTMkOiDDqXMgZWwgdHJldHrDqCB0ZXJtZSJdfQ=="
  },
  {
   "id": "61",
   "ex": 61,
   "ap": "",
   "bloc": "aplicacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos termes consecutius d'una progressió geomètrica valen $3$ i $4$. Esbrina quin lloc ocupen si $a_1=\\dfrac{27}{16}$.",
   "enunciat": "Posició de dos termes consecutius que valen $3$ i $4$, sabent que $a_1=\\dfrac{27}{16}$",
   "opcions": [
    "$a_1=3,\\;\\;a_2=4$",
    "$a_2=3,\\;\\;a_3=4$",
    "$a_3=3,\\;\\;a_4=4$",
    "$a_4=3,\\;\\;a_5=4$"
   ],
   "pistes": [
    "Primer troba la raó amb els dos termes coneguts, $3$ i $4$: $r=\\dfrac43$.",
    "Substitueix $a_n=\\dfrac{27}{16}\\cdot\\left(\\dfrac43\\right)^{n-1}$ per a $n=2,3,4\\dots$ fins trobar quan val $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUgamEgw6lzIGNvbmVndXQsICRhXzE9XFxkZnJhY3syN317MTZ9JCwgcXVlIG5vIHZhbCAkMyQ6IGNhbCBidXNjYXIgZW4gUVVJTkEgcG9zaWNpw7MgYXBhcmVpeGVuIGVscyB2YWxvcnMgJDMkIGkgJDQkLCBubyBhc3N1bWlyIHF1ZSDDqXMgYWwgcHJpbmNpcGkuIiwgIlJldmlzYSBlbCBjw6BsY3VsIHN1YnN0aXR1aW50ICRuPTIkOiAkYV8yPVxcZGZyYWN7Mjd9ezE2fVxcY2RvdFxcZGZyYWM0Mz1cXGRmcmFjOTQkLCBxdWUgbm8gw6lzICQzJC4iLCAiIiwgIlJldmlzYSBlbCBjw6BsY3VsIHN1YnN0aXR1aW50ICRuPTQkOiAkYV80PVxcZGZyYWN7Mjd9ezE2fVxcY2RvdFxcbGVmdChcXGRmcmFjNDNcXHJpZ2h0KV4zPTQkLCBxdWUgamEgw6lzIGVsIHZhbG9yICQ0JCwgbm8gJDMkOiB0J2hhcyBhdmFuw6dhdCB1bmEgcG9zaWNpw7MuIl0sICJlcnIiOiBbIkNPTVBBUkFfVEVSTUVTIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICIiLCAiREVTUExBQ0FNRU5UX0lOREVYIl0sICJyZXMiOiBbIkVscyBkb3MgdGVybWVzIGNvbnNlY3V0aXVzIHRlbmVuIHJhw7MgJHI9XFxkZnJhYzQzJCAoZWwgcXVvY2llbnQgZW50cmUgZWxscykiLCAiJGFfMj1cXGRmcmFjezI3fXsxNn1cXGNkb3RcXGRmcmFjNDM9XFxkZnJhYzk0JCIsICIkYV8zPVxcZGZyYWN7Mjd9ezE2fVxcY2RvdFxcbGVmdChcXGRmcmFjNDNcXHJpZ2h0KV4yPTMkIiwgIiRhXzQ9XFxkZnJhY3syN317MTZ9XFxjZG90XFxsZWZ0KFxcZGZyYWM0M1xccmlnaHQpXjM9NCQiLCAiRWxzIHRlcm1lcyBxdWUgdmFsZW4gJDMkIGkgJDQkIG9jdXBlbiBsZXMgcG9zaWNpb25zICQzJCBpICQ0JCJdfQ=="
  }
 ]
};
