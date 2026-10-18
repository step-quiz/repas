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
  "BASE_EXPONENT_INTERCANVIATS": "Has canviat de lloc la base i l'exponent: no és el mateix $a^b$ que $b^a$.",
  "BASE_SIGNE_PERDUT": "El resultat ha de conservar la base tal com era, amb el seu signe.",
  "COMPARA_TERMES": "Dues fraccions equivalents gairebé mai tenen els mateixos termes: el que ha de coincidir és el valor, no les xifres.",
  "DESPLACAMENT_INDEX": "Revisa a partir de quin valor de $n$ comences a substituir, o quin exponent li correspon: t'has desplaçat una posició.",
  "ENTER_AL_NUMERADOR": "Has sumat l'enter directament al numerador. Un enter és una fracció de denominador $1$: cal reduir-lo a denominador comú abans de sumar.",
  "ENTER_MULTIPLICA_DENOMINADOR": "En multiplicar un enter per una fracció, l'enter multiplica NOMÉS el numerador; el denominador no canvia.",
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
  "POTENCIA_COM_PRODUCTE": "$x^2$ no és $2x$: és $x\\cdot x$. Prova-ho amb $x=3$, que dona $9$ i no $6$.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "RAONAMENT_ADDITIU": "Has passat d'una fracció a l'altra sumant. Dues fraccions són equivalents quan es passa d'una a l'altra MULTIPLICANT els dos termes pel mateix nombre.",
  "REGLA_NOMES_QUOCIENT": "La regla de restar exponents és per DIVIDIR potències de la mateixa base, no per restar-les: quan es resten, cal restar els valors de cada potència.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_PRODUCTE": "Revisa la regla dels signes del producte: signes diferents donen resultat negatiu.",
  "SIGNE_SUMA": "Revisa el signe del terme que se suma: sumar un negatiu fa disminuir.",
  "SIMPLIFICACIO_INVENTADA": "Has simplificat una fracció que ja era irreductible. Comprova que el numerador i el denominador tinguin algun factor comú abans de tocar-la.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "346a",
   "ex": 346,
   "ap": "a",
   "bloc": "termes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el terme que es demana substituint el valor de $n$ al terme general de la successió.",
   "enunciat": "$a_n=3n+1$. Calcula $a_2$.",
   "opcions": [
    "$a_2=10$",
    "$a_2=9$",
    "$a_2=7$",
    "$a_2=4$"
   ],
   "pistes": [
    "Substitueix $n=2$ a l'expressió.",
    "$a_2=3\\cdot2+1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMTAkIMOpcyAkYV8zJCwgZWwgdGVyY2VyIHRlcm1lLiBSZXZpc2EgYSBwYXJ0aXIgZGUgcXVpbiB2YWxvciBkZSAkbiQgY29tZW5jZXMgYSBzdWJzdGl0dWlyLCBvIHF1aW4gZXhwb25lbnQgbGkgY29ycmVzcG9uOiB0J2hhcyBkZXNwbGHDp2F0IHVuYSBwb3NpY2nDsy4iLCAiSGFzIGZldCAkM1xcY2RvdCgyKzEpJC4gUHJpbWVyIGVzIG11bHRpcGxpY2EsICQzXFxjZG90Mj02JCwgaSBkZXNwcsOpcyBzZSBzdW1hICQxJC4iLCAiIiwgIiQ0JCDDqXMgJGFfMSQsIGVsIHByaW1lciB0ZXJtZS4gUmV2aXNhIGEgcGFydGlyIGRlIHF1aW4gdmFsb3IgZGUgJG4kIGNvbWVuY2VzIGEgc3Vic3RpdHVpciwgbyBxdWluIGV4cG9uZW50IGxpIGNvcnJlc3BvbjogdCdoYXMgZGVzcGxhw6dhdCB1bmEgcG9zaWNpw7MuIl0sICJlcnIiOiBbIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJKRVJBUlFVSUEiLCAiIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCJdLCAicmVzIjogWyIkYV8yPTNcXGNkb3QyKzE9NisxPTckIl19"
  },
  {
   "id": "346b",
   "ex": 346,
   "ap": "b",
   "bloc": "termes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula el terme que es demana substituint el valor de $n$ al terme general de la successió.",
   "enunciat": "$a_n=n^2$. Calcula $a_5$.",
   "opcions": [
    "$a_5=25$",
    "$a_5=10$",
    "$a_5=32$",
    "$a_5=16$"
   ],
   "pistes": [
    "Substitueix $n=5$ a l'expressió.",
    "$a_5=5^2=5\\cdot5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJDVeMj01XFxjZG90NSQsIG5vICQyXFxjZG90NSQuICR4XjIkIG5vIMOpcyAkMngkOiDDqXMgJHhcXGNkb3QgeCQuIFByb3ZhLWhvIGFtYiAkeD0zJCwgcXVlIGRvbmEgJDkkIGkgbm8gJDYkLiIsICJIYXMgY2FsY3VsYXQgJDJeNSQsIGkgw6lzICQ1XjIkLiBIYXMgY2FudmlhdCBkZSBsbG9jIGxhIGJhc2UgaSBsJ2V4cG9uZW50OiBubyDDqXMgZWwgbWF0ZWl4ICRhXmIkIHF1ZSAkYl5hJC4iLCAiJDE2JCDDqXMgJGFfNCQuIFJldmlzYSBhIHBhcnRpciBkZSBxdWluIHZhbG9yIGRlICRuJCBjb21lbmNlcyBhIHN1YnN0aXR1aXIsIG8gcXVpbiBleHBvbmVudCBsaSBjb3JyZXNwb246IHQnaGFzIGRlc3BsYcOnYXQgdW5hIHBvc2ljacOzLiJdLCAiZXJyIjogWyIiLCAiUE9URU5DSUFfQ09NX1BST0RVQ1RFIiwgIkJBU0VfRVhQT05FTlRfSU5URVJDQU5WSUFUUyIsICJERVNQTEFDQU1FTlRfSU5ERVgiXSwgInJlcyI6IFsiJGFfNT01XjI9MjUkIl19"
  },
  {
   "id": "47a",
   "ex": 47,
   "ap": "a",
   "bloc": "termes",
   "tipus": "A",
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
   "encapcalament": "Donada la successió $\\dfrac53,\\;\\dfrac43,\\;1,\\;\\dfrac23,\\;\\dfrac13,\\dots$:",
   "enunciat": "Comprova si $\\dfrac53,\\;\\dfrac43,\\;1,\\;\\dfrac23,\\;\\dfrac13,\\dots$ és una progressió aritmètica.",
   "opcions": [
    "No, perquè $1-\\dfrac53=-\\dfrac23$, que no coincideix amb la diferència $-\\dfrac13$ dels altres termes.",
    "No, perquè els termes van disminuint.",
    "Sí, perquè la diferència entre termes consecutius és sempre la mateixa: $d=-\\dfrac13$.",
    "Sí, perquè tots els termes són fraccions amb denominador $3$."
   ],
   "pistes": [
    "Calcula la diferència entre cada terme i el següent.",
    "Comença per $\\dfrac43-\\dfrac53$ i $1-\\dfrac43$ (escriu $1=\\dfrac33$). Si totes les diferències surten iguals, és aritmètica."
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
   "dif": 3,
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
  }
 ]
};
