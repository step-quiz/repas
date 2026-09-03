/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 2,
 "titol": "Full 2 — Potències",
 "subtitol": "Propietats de les potències, exponent negatiu i potència d'una potència.",
 "blocs": [
  {
   "id": "basiques",
   "titol": "Càlcul de potències",
   "descripcio": "Potències de la mateixa base i potència d'un producte o un quocient.",
   "items": [
    "35a",
    "35b",
    "35c",
    "35d",
    "35e",
    "35f",
    "36a",
    "36b",
    "36c",
    "36d",
    "36e",
    "36f",
    "36g",
    "37a",
    "37b",
    "37c",
    "37d",
    "37e",
    "37f",
    "37g",
    "37h",
    "37i",
    "37j"
   ]
  },
  {
   "id": "negatiu",
   "titol": "Exponent negatiu i equacions",
   "descripcio": "Exponents negatius i aïllar l'exponent en una igualtat.",
   "items": [
    "38a",
    "38b",
    "38c",
    "38d",
    "38e",
    "38f",
    "38g",
    "38h",
    "38i",
    "39a",
    "39b",
    "39c",
    "39d",
    "39e",
    "39f",
    "40a",
    "40b",
    "40c",
    "40d"
   ]
  },
  {
   "id": "verifica",
   "titol": "Verifica, corregeix i simplifica",
   "descripcio": "Troba l'error, cert o fals, i expressa-ho com una sola potència.",
   "items": [
    "41a",
    "41b",
    "41c",
    "41d",
    "41e",
    "41f",
    "41g",
    "41h",
    "42a",
    "42b",
    "42c",
    "42d",
    "42e",
    "42f",
    "43a",
    "43b",
    "43c",
    "43d",
    "43e",
    "43f"
   ]
  },
  {
   "id": "combinades",
   "titol": "Combina potències",
   "descripcio": "Potència d'una potència i productes de bases diferents.",
   "items": [
    "44a",
    "44b",
    "45a",
    "45b",
    "45c",
    "45d",
    "45e",
    "45f",
    "45g",
    "45h",
    "46a",
    "46b",
    "46c",
    "46d"
   ]
  }
 ],
 "errors": {
  "BASES_DIFERENTS_COMBINADES": "Les bases són diferents: la regla de combinar exponents (sumar-los o restar-los) només val quan la base és la mateixa als dos factors.",
  "BASE_ALTERADA": "En combinar potències de la mateixa base, la base es queda tal qual; només canvia l'exponent.",
  "BASE_EXPONENT_INTERCANVIATS": "Has canviat de lloc la base i l'exponent: no és el mateix $a^b$ que $b^a$.",
  "BASE_SIGNE_PERDUT": "El resultat ha de conservar la base tal com era, amb el seu signe.",
  "CAP_ERROR": "Has dit que la cadena és correcta, però hi ha un pas equivocat. Que el resultat final surti bé no ho garanteix: dos errors es poden compensar. Comprova cada igualtat per separat.",
  "EQUACIO_EXPONENT_MULTIPLICAT": "Per aïllar l'exponent en una igualtat de potències de la mateixa base, els exponents s'igualen i se sumen o es resten com en qualsevol equació; no es multipliquen.",
  "EXPONENTS_MULTIPLICATS": "En multiplicar potències de la mateixa base, els exponents se SUMEN, no es multipliquen: $a^m\\cdot a^n=a^{m+n}$.",
  "EXPONENTS_RESTATS_PRODUCTE": "En multiplicar potències de la mateixa base, els exponents se sumen; restar-los és la regla del quocient, no la del producte.",
  "EXPONENTS_SUMATS_QUOCIENT": "En dividir potències de la mateixa base, els exponents es RESTEN, no se sumen: $a^m:a^n=a^{m-n}$.",
  "EXPONENT_NEGATIU_SIGNE": "Un exponent negatiu no fa que el resultat sigui negatiu: $a^{-n}=\\dfrac{1}{a^n}$ és l'invers del nombre, no el seu oposat.",
  "EXPONENT_ZERO": "Qualsevol nombre diferent de zero elevat a $0$ val $1$, no $0$.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "MENYS_SENSE_PARENTESI": "Sense parèntesi, el signe $-$ no forma part de la base: $-a^n$ és $-(a^n)$, no $(-a)^n$.",
  "ORDRE_DIVISIONS": "El que hi ha entre claudàtors s'ha de resoldre primer: no es poden restar tots els exponents seguits com si no hi hagués claudàtor.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PARITAT_EXPONENT": "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna resultat positiu; amb exponent senar, el resultat es queda negatiu.",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "POTENCIA_POTENCIA_SUMADA": "En una potència d'una potència, els exponents es MULTIPLIQUEN, no se sumen: $(a^m)^n=a^{m\\cdot n}$.",
  "POTENCIA_PRODUCTE_UN_FACTOR": "L'exponent afecta TOTS els factors del producte, no només un: $(a\\cdot b)^n=a^n\\cdot b^n$.",
  "POTENCIA_QUOCIENT_UN_FACTOR": "L'exponent afecta els dos termes del quocient, no només un: $(a:b)^n=a^n:b^n$.",
  "REGLA_NOMES_PRODUCTE": "La regla de sumar exponents només val per MULTIPLICAR potències de la mateixa base, no per sumar-les: quan se sumen, cal sumar els valors de cada potència.",
  "REGLA_NOMES_QUOCIENT": "La regla de restar exponents és per DIVIDIR potències de la mateixa base, no per restar-les: quan es resten, cal restar els valors de cada potència.",
  "SIGNE_PRODUCTE": "Revisa la regla dels signes del producte: signes diferents donen resultat negatiu.",
  "SIGNE_QUOCIENT": "Revisa la regla dels signes del quocient: signes diferents donen resultat negatiu.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "35a",
   "ex": 35,
   "ap": "a",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor d'aquestes potències.",
   "enunciat": "$2^5\\cdot 2^3$",
   "opcions": [
    "$32768$",
    "$64$",
    "$4$",
    "$256$"
   ],
   "pistes": [
    "És un producte de potències de la mateixa base: els exponents se sumen.",
    "$2^5\\cdot 2^3=2^{5+3}=2^8$. Ara calcula $2^8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBTVU1FTiwgbm8gZXMgbXVsdGlwbGlxdWVuOiAkYV5tXFxjZG90IGFebj1hXnttK259JC4iLCAiSGFzIGNhbnZpYXQgZGUgbGxvYyBsYSBiYXNlIGkgbCdleHBvbmVudDogbm8gw6lzIGVsIG1hdGVpeCAkMl44JCBxdWUgJDheMiQuIiwgIkVuIG11bHRpcGxpY2FyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIHNlIHN1bWVuOyByZXN0YXItbG9zIMOpcyBsYSByZWdsYSBkZWwgcXVvY2llbnQsIG5vIGxhIGRlbCBwcm9kdWN0ZS4iLCAiIl0sICJlcnIiOiBbIkVYUE9ORU5UU19NVUxUSVBMSUNBVFMiLCAiQkFTRV9FWFBPTkVOVF9JTlRFUkNBTlZJQVRTIiwgIkVYUE9ORU5UU19SRVNUQVRTX1BST0RVQ1RFIiwgIiJdLCAicmVzIjogWyIkMl41XFxjZG90IDJeMz0yXns1KzN9PTJeOD0yNTYkIl19"
  },
  {
   "id": "35b",
   "ex": 35,
   "ap": "b",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor d'aquestes potències.",
   "enunciat": "$2^5:2^3$",
   "opcions": [
    "$4$",
    "$256$",
    "$\\dfrac{1}{4}$",
    "$1$"
   ],
   "pistes": [
    "És un quocient de potències de la mateixa base: els exponents es resten.",
    "$2^5:2^3=2^{5-3}=2^2$. Ara calcula $2^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRW4gZGl2aWRpciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBlcyBSRVNURU4sIG5vIHNlIHN1bWVuOiAkYV5tOmFebj1hXnttLW59JC4iLCAiSGFzIHJlc3RhdCBsJ2V4cG9uZW50IGRlbCBkaXZpc29yIG1lbnlzIGVsIGRlbCBkaXZpZGVuZCwgaSDDqXMgYSBsJ2lucmV2w6lzLiIsICJMYSBiYXNlIGVzIHF1ZWRhIGlndWFsLCAkMiQ7IG5vIGVzIGRpdmlkZWl4ZW4gbGVzIGJhc2VzIGVudHJlIGVsbGVzLiJdLCAiZXJyIjogWyIiLCAiRVhQT05FTlRTX1NVTUFUU19RVU9DSUVOVCIsICJPUkRSRV9SRVNUQSIsICJCQVNFX0FMVEVSQURBIl0sICJyZXMiOiBbIiQyXjU6Ml4zPTJeezUtM309Ml4yPTQkIl19"
  },
  {
   "id": "35c",
   "ex": 35,
   "ap": "c",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor d'aquestes potències.",
   "enunciat": "$3^7\\cdot 3^2\\cdot 3^4$",
   "opcions": [
    "$19683$",
    "$2197$",
    "$1594323$",
    "$14348907$"
   ],
   "pistes": [
    "Els tres factors tenen la mateixa base: suma els tres exponents.",
    "$3^7\\cdot 3^2\\cdot 3^4=3^{7+2+4}=3^{13}$. Ara calcula $3^{13}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIGZhY3RvciAkM140JC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiVW4gY29wIHNpbXBsaWZpY2F0IGEgJDNeezEzfSQsIGhhcyBjYW52aWF0IGRlIGxsb2MgbGEgYmFzZSBpIGwnZXhwb25lbnQ6ICQzXnsxM31cXG5lIDEzXjMkLiIsICIiLCAiQWxtZW55cyBlbiB1biBkZWxzIGZhY3RvcnMuIEVuIG11bHRpcGxpY2FyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIHNlIFNVTUVOLCBubyBlcyBtdWx0aXBsaXF1ZW46ICRhXm1cXGNkb3QgYV5uPWFee20rbn0kLiJdLCAiZXJyIjogWyJGQUNUT1JfT0JMSURBVCIsICJCQVNFX0VYUE9ORU5UX0lOVEVSQ0FOVklBVFMiLCAiIiwgIkVYUE9ORU5UU19NVUxUSVBMSUNBVFMiXSwgInJlcyI6IFsiJDNeN1xcY2RvdCAzXjJcXGNkb3QgM140PTNeezcrMis0fT0zXnsxM309MVxcLDU5NFxcLDMyMyQiXX0="
  },
  {
   "id": "35d",
   "ex": 35,
   "ap": "d",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor d'aquestes potències.",
   "enunciat": "$(-4)^9\\cdot(-4)^5\\cdot(-4)$",
   "opcions": [
    "$268435456$",
    "$\\dfrac{1}{50625}$",
    "$-1073741824$",
    "$1073741824$"
   ],
   "pistes": [
    "El tercer factor és $(-4)^1$, no te l'oblidis en sumar els exponents.",
    "$(-4)^9\\cdot(-4)^5\\cdot(-4)^1=(-4)^{15}$. Com que l'exponent és senar, el resultat és negatiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIHRlcmNlciBmYWN0b3IsICQoLTQpXjEkOiBzZW5zZSBlbGwgbCdleHBvbmVudCBmaW5hbCBubyDDqXMgY29ycmVjdGUuIiwgIlVuIGNvcCBzaW1wbGlmaWNhdCBhICQoLTQpXnsxNX0kLCBoYXMgY2FudmlhdCBkZSBsbG9jIGxhIGJhc2UgaSBsJ2V4cG9uZW50LiIsICIiLCAiUmV2aXNhIGxhIHBhcml0YXQgZGUgbCdleHBvbmVudDogYW1iIGV4cG9uZW50IHBhcmVsbCwgdW5hIGJhc2UgbmVnYXRpdmEgZMOzbmEgcmVzdWx0YXQgcG9zaXRpdTsgYW1iIGV4cG9uZW50IHNlbmFyLCBlbCByZXN1bHRhdCBlcyBxdWVkYSBuZWdhdGl1LiJdLCAiZXJyIjogWyJGQUNUT1JfT0JMSURBVCIsICJCQVNFX0VYUE9ORU5UX0lOVEVSQ0FOVklBVFMiLCAiIiwgIlBBUklUQVRfRVhQT05FTlQiXSwgInJlcyI6IFsiJCgtNCleOVxcY2RvdCgtNCleNVxcY2RvdCgtNCk9KC00KV57OSs1KzF9PSgtNCleezE1fT0tMVxcLDA3M1xcLDc0MVxcLDgyNCQiXX0="
  },
  {
   "id": "35e",
   "ex": 35,
   "ap": "e",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor d'aquestes potències.",
   "enunciat": "$(-4)^9:(-4)^5:(-4)$",
   "opcions": [
    "$-64$",
    "$-1024$",
    "$-1073741824$",
    "$64$"
   ],
   "pistes": [
    "Divisió de potències de la mateixa base seguida: resta els exponents d'esquerra a dreta, $9-5-1$.",
    "$(-4)^9:(-4)^5:(-4)=(-4)^{9-5-1}=(-4)^3$. Com que l'exponent és senar, el resultat és negatiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGNhbGN1bGF0ICQoLTQpXjU6KC00KV40JCBwcmltZXIsIGNvbSBzaSBlbCBzZWdvbiBpIGVsIHRlcmNlciB0ZXJtZSBhbmVzc2luIGp1bnRzLiBFbCBxdWUgaGkgaGEgZW50cmUgY2xhdWTDoHRvcnMgcydoYSBkZSByZXNvbGRyZSBwcmltZXI6IG5vIGVzIHBvZGVuIHJlc3RhciB0b3RzIGVscyBleHBvbmVudHMgc2VndWl0cyBjb20gc2kgbm8gaGkgaGFndcOpcyBjbGF1ZMOgdG9yLiIsICJFbiBkaXZpZGlyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIGVzIFJFU1RFTiwgbm8gc2Ugc3VtZW46ICRhXm06YV5uPWFee20tbn0kLiIsICJSZXZpc2EgbGEgcGFyaXRhdCBkZSBsJ2V4cG9uZW50OiBhbWIgZXhwb25lbnQgcGFyZWxsLCB1bmEgYmFzZSBuZWdhdGl2YSBkw7NuYSByZXN1bHRhdCBwb3NpdGl1OyBhbWIgZXhwb25lbnQgc2VuYXIsIGVsIHJlc3VsdGF0IGVzIHF1ZWRhIG5lZ2F0aXUuIl0sICJlcnIiOiBbIiIsICJPUkRSRV9ESVZJU0lPTlMiLCAiRVhQT05FTlRTX1NVTUFUU19RVU9DSUVOVCIsICJQQVJJVEFUX0VYUE9ORU5UIl0sICJyZXMiOiBbIiQoLTQpXjk6KC00KV41OigtNCk9KC00KV57OS01LTF9PSgtNCleMz0tNjQkIl19"
  },
  {
   "id": "35f",
   "ex": 35,
   "ap": "f",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor d'aquestes potències.",
   "enunciat": "$(7\\cdot 4)^0$",
   "opcions": [
    "$0$",
    "$28$",
    "$1$",
    "$7$"
   ],
   "pistes": [
    "No cal multiplicar $7\\cdot 4$ per a res: mira bé l'exponent.",
    "Qualsevol nombre (diferent de zero) elevat a $0$ val $1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJRdWFsc2V2b2wgbm9tYnJlIGRpZmVyZW50IGRlIHplcm8gZWxldmF0IGEgJDAkIHZhbCAkMSQsIG5vICQwJC4iLCAiSGFzIGlnbm9yYXQgbCdleHBvbmVudCAkMCQgaSBoYXMgY2FsY3VsYXQgbm9tw6lzICQ3XFxjZG90IDQkLiBRdWFsc2V2b2wgYmFzZSBkaWZlcmVudCBkZSB6ZXJvIGVsZXZhZGEgYSAkMCQgdmFsICQxJCwgc2lndWkgcXVpbmEgc2lndWkgbGEgYmFzZS4iLCAiIiwgIkwnZXhwb25lbnQgYWZlY3RhIFRPVFMgZWxzIGZhY3RvcnMgZGVsIHByb2R1Y3RlLCBubyBub23DqXMgdW46ICQoYVxcY2RvdCBiKV5uPWFeblxcY2RvdCBiXm4kLiJdLCAiZXJyIjogWyJFWFBPTkVOVF9aRVJPIiwgIkVYUE9ORU5UX0lHTk9SQVQiLCAiIiwgIlBPVEVOQ0lBX1BST0RVQ1RFX1VOX0ZBQ1RPUiJdLCAicmVzIjogWyIkKDdcXGNkb3QgNCleMD0xJCwgcGVycXXDqCBxdWFsc2V2b2wgbm9tYnJlIGRpZmVyZW50IGRlIHplcm8gZWxldmF0IGEgJDAkIHZhbCAkMSQiXX0="
  },
  {
   "id": "36a",
   "ex": 36,
   "ap": "a",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Expressa el resultat amb una sola potència.",
   "enunciat": "$(3^3\\cdot 3^4\\cdot 3^9):3^6$",
   "opcions": [
    "$3^{22}$",
    "$3^{102}$",
    "$3^{10}$",
    "$3$"
   ],
   "pistes": [
    "Multiplicar i dividir potències de la mateixa base: suma els exponents del numerador i resta el del divisor.",
    "$3^3\\cdot 3^4\\cdot 3^9=3^{3+4+9}=3^{16}$, i després $3^{16}:3^6=3^{16-6}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiBkaXZpZGlyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIGVzIFJFU1RFTiwgbm8gc2Ugc3VtZW46ICRhXm06YV5uPWFee20tbn0kLiIsICJBbHMgZmFjdG9ycyBkZWwgbnVtZXJhZG9yLiBFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBTVU1FTiwgbm8gZXMgbXVsdGlwbGlxdWVuOiAkYV5tXFxjZG90IGFebj1hXnttK259JC4iLCAiIiwgIlQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gZWwgZmFjdG9yICQzXjkkLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiJdLCAiZXJyIjogWyJFWFBPTkVOVFNfU1VNQVRTX1FVT0NJRU5UIiwgIkVYUE9ORU5UU19NVUxUSVBMSUNBVFMiLCAiIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiQoM14zXFxjZG90IDNeNFxcY2RvdCAzXjkpOjNeNj0zXnszKzQrOS02fT0zXnsxMH0kIl19"
  },
  {
   "id": "36b",
   "ex": 36,
   "ap": "b",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Expressa el resultat amb una sola potència.",
   "enunciat": "$(-2)^4\\cdot(-2)^6\\cdot(-2)^5$",
   "opcions": [
    "$(-2)^{120}$",
    "$(-2)^{15}$",
    "$2^{15}$",
    "$(-2)^{10}$"
   ],
   "pistes": [
    "Els tres factors tenen la mateixa base, $(-2)$: suma els tres exponents.",
    "$(-2)^4\\cdot(-2)^6\\cdot(-2)^5=(-2)^{4+6+5}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBTVU1FTiwgbm8gZXMgbXVsdGlwbGlxdWVuOiAkYV5tXFxjZG90IGFebj1hXnttK259JC4iLCAiIiwgIkVsIHJlc3VsdGF0IGhhIGRlIGNvbnNlcnZhciBsYSBiYXNlIHRhbCBjb20gZXJhLCAkKC0yKSQsIG5vICQyJC4iLCAiVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbCBmYWN0b3IgJCgtMileNSQuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIl0sICJlcnIiOiBbIkVYUE9ORU5UU19NVUxUSVBMSUNBVFMiLCAiIiwgIkJBU0VfU0lHTkVfUEVSRFVUIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiQoLTIpXjRcXGNkb3QoLTIpXjZcXGNkb3QoLTIpXjU9KC0yKV57NCs2KzV9PSgtMileezE1fSQiXX0="
  },
  {
   "id": "36c",
   "ex": 36,
   "ap": "c",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Expressa el resultat amb una sola potència.",
   "enunciat": "$(-7)^8:(-7)^4\\cdot(-7)^2$",
   "opcions": [
    "$(-7)^{6}$",
    "$(-7)^{14}$",
    "$(-7)^{4}$",
    "$(-7)^{2}$"
   ],
   "pistes": [
    "La divisió i la multiplicació tenen la mateixa prioritat: d'esquerra a dreta.",
    "$(-7)^8:(-7)^4\\cdot(-7)^2=(-7)^{8-4}\\cdot(-7)^2=(-7)^4\\cdot(-7)^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRW4gZGl2aWRpciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBlcyBSRVNURU4sIG5vIHNlIHN1bWVuOiAkYV5tOmFebj1hXnttLW59JC4iLCAiSGFzIGNvbXB0YXQgZWwgZmFjdG9yICQoLTcpXjIkIGNvbSBzaSBubyBoaSBmb3MuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIiwgIkxhIGRpdmlzacOzIGkgbGEgbXVsdGlwbGljYWNpw7MgdGVuZW4gbGEgbWF0ZWl4YSBwcmlvcml0YXQgaSBlcyBmYW4gZCdlc3F1ZXJyYSBhIGRyZXRhOiBubyBlcyBwb3QgYWdydXBhciBsYSBtdWx0aXBsaWNhY2nDsyBwcmltZXIgcGVycXXDqCBcInF1ZWRhIG3DqXMgYsOpXCIuIl0sICJlcnIiOiBbIiIsICJFWFBPTkVOVFNfU1VNQVRTX1FVT0NJRU5UIiwgIkZBQ1RPUl9PQkxJREFUIiwgIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyJdLCAicmVzIjogWyIkKC03KV44OigtNyleNFxcY2RvdCgtNyleMj0oLTcpXns4LTQrMn09KC03KV57Nn0kIl19"
  },
  {
   "id": "36d",
   "ex": 36,
   "ap": "d",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Expressa el resultat amb una sola potència.",
   "enunciat": "$\\left(\\dfrac{5}{2}\\right)^4\\cdot\\left(\\dfrac{5}{2}\\right)^3:\\left(\\dfrac{5}{2}\\right)^6$",
   "opcions": [
    "$(\\dfrac{5}{2})^{-2}$",
    "$\\dfrac{5}{2}$",
    "$(\\dfrac{5}{2})^{13}$",
    "$(\\dfrac{5}{2})^{6}$"
   ],
   "pistes": [
    "Suma els exponents dels factors que multipliquen i resta el del que divideix.",
    "$4+3-6=1$: la potència amb exponent $1$ és la base tal qual."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIGZhY3RvciAkXFxsZWZ0KFxcZGZyYWN7NX17Mn1cXHJpZ2h0KV4zJC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiIiwgIkVuIGRpdmlkaXIgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UsIGVscyBleHBvbmVudHMgZXMgUkVTVEVOLCBubyBzZSBzdW1lbjogJGFebTphXm49YV57bS1ufSQuIiwgIkFscyBkb3MgcHJpbWVycyBmYWN0b3JzLiBFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBTVU1FTiwgbm8gZXMgbXVsdGlwbGlxdWVuOiAkYV5tXFxjZG90IGFebj1hXnttK259JC4iXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiIiwgIkVYUE9ORU5UU19TVU1BVFNfUVVPQ0lFTlQiLCAiRVhQT05FTlRTX01VTFRJUExJQ0FUUyJdLCAicmVzIjogWyIkXFxsZWZ0KFxcZGZyYWN7NX17Mn1cXHJpZ2h0KV40XFxjZG90XFxsZWZ0KFxcZGZyYWN7NX17Mn1cXHJpZ2h0KV4zOlxcbGVmdChcXGRmcmFjezV9ezJ9XFxyaWdodCleNj1cXGxlZnQoXFxkZnJhY3s1fXsyfVxccmlnaHQpXns0KzMtNn09XFxsZWZ0KFxcZGZyYWN7NX17Mn1cXHJpZ2h0KV4xPVxcZGZyYWN7NX17Mn0kIl19"
  },
  {
   "id": "36e",
   "ex": 36,
   "ap": "e",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Expressa el resultat amb una sola potència.",
   "enunciat": "$\\left[\\left(-\\dfrac{1}{9}\\right)^2\\cdot\\left(-\\dfrac{1}{9}\\right)^3\\right]:\\left[\\left(-\\dfrac{1}{9}\\right)^4:\\left(-\\dfrac{1}{9}\\right)\\right]$",
   "opcions": [
    "$(-\\dfrac{1}{9})$",
    "$(-\\dfrac{1}{9})^{0}$",
    "$(-\\dfrac{1}{9})^{2}$",
    "$(-\\dfrac{1}{9})^{3}$"
   ],
   "pistes": [
    "Resol primer cada claudàtor per separat i després combina els resultats.",
    "Numerador: $2+3=5$. Denominador: $4-1=3$. Resultat: $5-3=2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbCBjbGF1ZMOgdG9yIGRlbCBkZW5vbWluYWRvciB0J2hhcyBkZWl4YXQgcGVsIGNhbcOtICQ6XFxsZWZ0KC1cXGRmcmFjMTlcXHJpZ2h0KV4xJC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiTm8gaGFzIHJlc29sdCBlbCBjbGF1ZMOgdG9yIGRlbCBkZW5vbWluYWRvciBhYmFucyBkZSBkaXZpZGlyOiAkNDoxJCDDqXMgdW5hIHBvdMOobmNpYSBlbnRyZSB1bmEgYWx0cmEsIG5vIGVzIHJlc3RhIGNvbSBzaSBubyBoaSBoYWd1w6lzIGNsYXVkw6B0b3IuIEVsIHF1ZSBoaSBoYSBlbnRyZSBjbGF1ZMOgdG9ycyBzJ2hhIGRlIHJlc29sZHJlIHByaW1lcjogbm8gZXMgcG9kZW4gcmVzdGFyIHRvdHMgZWxzIGV4cG9uZW50cyBzZWd1aXRzIGNvbSBzaSBubyBoaSBoYWd1w6lzIGNsYXVkw6B0b3IuIiwgIiIsICJBbCBjbGF1ZMOgdG9yIGRlbCBudW1lcmFkb3IuIEVuIG11bHRpcGxpY2FyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIHNlIFNVTUVOLCBubyBlcyBtdWx0aXBsaXF1ZW46ICRhXm1cXGNkb3QgYV5uPWFee20rbn0kLiJdLCAiZXJyIjogWyJGQUNUT1JfT0JMSURBVCIsICJPUkRSRV9ESVZJU0lPTlMiLCAiIiwgIkVYUE9ORU5UU19NVUxUSVBMSUNBVFMiXSwgInJlcyI6IFsiTnVtZXJhZG9yOiAkXFxsZWZ0KC1cXGRmcmFjMTlcXHJpZ2h0KV4yXFxjZG90XFxsZWZ0KC1cXGRmcmFjMTlcXHJpZ2h0KV4zPVxcbGVmdCgtXFxkZnJhYzE5XFxyaWdodCleNSQuIERlbm9taW5hZG9yOiAkXFxsZWZ0KC1cXGRmcmFjMTlcXHJpZ2h0KV40OlxcbGVmdCgtXFxkZnJhYzE5XFxyaWdodCk9XFxsZWZ0KC1cXGRmcmFjMTlcXHJpZ2h0KV4zJC4gUmVzdWx0YXQ6ICRcXGxlZnQoLVxcZGZyYWMxOVxccmlnaHQpXjU6XFxsZWZ0KC1cXGRmcmFjMTlcXHJpZ2h0KV4zPVxcbGVmdCgtXFxkZnJhYzE5XFxyaWdodCleMiQiXX0="
  },
  {
   "id": "36f",
   "ex": 36,
   "ap": "f",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Expressa el resultat amb una sola potència.",
   "enunciat": "$(-5)^8:\\left[(-5)^3:(-5)^2\\right]$",
   "opcions": [
    "$5^{7}$",
    "$(-5)^{3}$",
    "$(-5)^{7}$",
    "$(-5)^{9}$"
   ],
   "pistes": [
    "Resol primer el claudàtor: $(-5)^3:(-5)^2$.",
    "El claudàtor val $(-5)^1$. Després, $8-1=7$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCByZXN1bHRhdCBoYSBkZSBjb25zZXJ2YXIgbGEgYmFzZSB0YWwgY29tIGVyYSwgJCgtNSkkLCBubyAkNSQuIiwgIkVsIHF1ZSBoaSBoYSBlbnRyZSBjbGF1ZMOgdG9ycyBzJ2hhIGRlIHJlc29sZHJlIHByaW1lcjogbm8gZXMgcG9kZW4gcmVzdGFyIHRvdHMgZWxzIGV4cG9uZW50cyBzZWd1aXRzIGNvbSBzaSBubyBoaSBoYWd1w6lzIGNsYXVkw6B0b3IuIiwgIiIsICJFbiBkaXZpZGlyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIGVzIFJFU1RFTiwgbm8gc2Ugc3VtZW46ICRhXm06YV5uPWFee20tbn0kLiJdLCAiZXJyIjogWyJCQVNFX1NJR05FX1BFUkRVVCIsICJPUkRSRV9ESVZJU0lPTlMiLCAiIiwgIkVYUE9ORU5UU19TVU1BVFNfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJCgtNSleMzooLTUpXjI9KC01KV4xJCwgaSAkKC01KV44OigtNSleMT0oLTUpXns4LTF9PSgtNSleezd9JCJdfQ=="
  },
  {
   "id": "36g",
   "ex": 36,
   "ap": "g",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Expressa el resultat amb una sola potència.",
   "enunciat": "$\\left[6^9\\cdot 6^5\\right]:\\left[6^4\\cdot 6^7\\right]$",
   "opcions": [
    "$6^{-14}$",
    "$6^{17}$",
    "$6^{10}$",
    "$6^{3}$"
   ],
   "pistes": [
    "Resol primer cada claudàtor per separat i després resta els exponents.",
    "Numerador: $9+5=14$. Denominador: $4+7=11$. Resultat: $14-11=3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbCBjbGF1ZMOgdG9yIGRlbCBkZW5vbWluYWRvci4gRW4gbXVsdGlwbGljYXIgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UsIGVscyBleHBvbmVudHMgc2UgU1VNRU4sIG5vIGVzIG11bHRpcGxpcXVlbjogJGFebVxcY2RvdCBhXm49YV57bStufSQuIiwgIk5vIGhhcyByZXNvbHQgZWwgY2xhdWTDoHRvciBkZWwgZGVub21pbmFkb3IgYWJhbnMgZGUgZGl2aWRpci4gRWwgcXVlIGhpIGhhIGVudHJlIGNsYXVkw6B0b3JzIHMnaGEgZGUgcmVzb2xkcmUgcHJpbWVyOiBubyBlcyBwb2RlbiByZXN0YXIgdG90cyBlbHMgZXhwb25lbnRzIHNlZ3VpdHMgY29tIHNpIG5vIGhpIGhhZ3XDqXMgY2xhdWTDoHRvci4iLCAiQWwgY2xhdWTDoHRvciBkZWwgZGVub21pbmFkb3IgdCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbCBmYWN0b3IgJDZeNyQuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIiwgIiJdLCAiZXJyIjogWyJFWFBPTkVOVFNfTVVMVElQTElDQVRTIiwgIk9SRFJFX0RJVklTSU9OUyIsICJGQUNUT1JfT0JMSURBVCIsICIiXSwgInJlcyI6IFsiJDZeOVxcY2RvdCA2XjU9Nl57MTR9JCBpICQ2XjRcXGNkb3QgNl43PTZeezExfSQ7ICQ2XnsxNH06Nl57MTF9PTZeezE0LTExfT02XnszfSQiXX0="
  },
  {
   "id": "37a",
   "ex": 37,
   "ap": "a",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$(7\\cdot 3)^4$",
   "opcions": [
    "$567$",
    "$194481$",
    "$21$",
    "$10000$"
   ],
   "pistes": [
    "L'exponent afecta tots dos factors del producte: $(a\\cdot b)^n=a^n\\cdot b^n$.",
    "$(7\\cdot 3)^4=7^4\\cdot 3^4$, o directament $21^4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2V4cG9uZW50IGFmZWN0YSBUT1RTIGVscyBmYWN0b3JzIGRlbCBwcm9kdWN0ZSwgbm8gbm9tw6lzIHVuOiAkKGFcXGNkb3QgYilebj1hXm5cXGNkb3QgYl5uJC4iLCAiIiwgIlQnaGFzIGRlaXhhdCBsJ2V4cG9uZW50IHBlbCBjYW3DrTogY2FsIGVsZXZhciBlbCBwcm9kdWN0ZSBhIGxhIHF1YXJ0YSBwb3TDqG5jaWEsIG5vIGRlaXhhci1sbyB0YWwgcXVhbC4iLCAiQXF1w60gZWxzIGRvcyBub21icmVzIGVzIE1VTFRJUExJUVVFTiBkaW5zIGRlbCBwYXLDqG50ZXNpLCBubyBzZSBzdW1lbjogbGEgcG90w6huY2lhIMOpcyBkJ3VuIHByb2R1Y3RlLCAkKGFcXGNkb3QgYilebiQsIG5vIGQndW5hIHN1bWEsICQoYStiKV5uJC4iXSwgImVyciI6IFsiUE9URU5DSUFfUFJPRFVDVEVfVU5fRkFDVE9SIiwgIiIsICJFWFBPTkVOVF9PQkxJREFUIiwgIlBPVEVOQ0lBX0RFX1NVTUEiXSwgInJlcyI6IFsiJCg3XFxjZG90IDMpXjQ9MjFeND0xOTRcXCw0ODEkIl19"
  },
  {
   "id": "37b",
   "ex": 37,
   "ap": "b",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$\\left[(-5)\\cdot 3\\right]^5$",
   "opcions": [
    "$-32$",
    "$-1215$",
    "$-759375$",
    "$759375$"
   ],
   "pistes": [
    "L'exponent afecta els dos factors del producte, i l'exponent $5$ és senar: el resultat és negatiu.",
    "$[(-5)\\cdot 3]^5=(-15)^5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXXDrSBlbHMgZG9zIG5vbWJyZXMgZXMgTVVMVElQTElRVUVOIGRpbnMgZGVsIHBhcsOobnRlc2ksIG5vIHNlIHN1bWVuOiBsYSBwb3TDqG5jaWEgw6lzIGQndW4gcHJvZHVjdGUsICQoYVxcY2RvdCBiKV5uJCwgbm8gZCd1bmEgc3VtYSwgJChhK2IpXm4kLiIsICJMJ2V4cG9uZW50IGFmZWN0YSBUT1RTIGVscyBmYWN0b3JzIGRlbCBwcm9kdWN0ZSwgbm8gbm9tw6lzIHVuOiAkKGFcXGNkb3QgYilebj1hXm5cXGNkb3QgYl5uJC4iLCAiIiwgIkwnZXhwb25lbnQgJDUkIMOpcyBzZW5hcjogZWwgcmVzdWx0YXQgcydoYSBkZSBxdWVkYXIgbmVnYXRpdS4iXSwgImVyciI6IFsiUE9URU5DSUFfREVfU1VNQSIsICJQT1RFTkNJQV9QUk9EVUNURV9VTl9GQUNUT1IiLCAiIiwgIlBBUklUQVRfRVhQT05FTlQiXSwgInJlcyI6IFsiJFsoLTUpXFxjZG90IDNdXjU9KC0xNSleNT0tNzU5XFwsMzc1JCJdfQ=="
  },
  {
   "id": "37c",
   "ex": 37,
   "ap": "c",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$\\left[\\dfrac{4}{3}\\cdot\\left(-\\dfrac{8}{6}\\right)\\right]^3$",
   "opcions": [
    "$0$",
    "$\\dfrac{4096}{729}$",
    "$-\\dfrac{256}{81}$",
    "$-\\dfrac{4096}{729}$"
   ],
   "pistes": [
    "Multiplica primer el que hi ha dins del claudàtor: $\\dfrac43\\cdot\\left(-\\dfrac86\\right)$.",
    "$\\dfrac43\\cdot\\left(-\\dfrac86\\right)=-\\dfrac{16}{9}$. Ara eleva-ho al cub."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXXDrSBlbHMgZG9zIG5vbWJyZXMgZXMgTVVMVElQTElRVUVOIGRpbnMgZGVsIHBhcsOobnRlc2ksIG5vIHNlIHN1bWVuOiBsYSBwb3TDqG5jaWEgw6lzIGQndW4gcHJvZHVjdGUsICQoYVxcY2RvdCBiKV5uJCwgbm8gZCd1bmEgc3VtYSwgJChhK2IpXm4kLiIsICJSZXZpc2EgbGEgcmVnbGEgZGVscyBzaWduZXMgZGVsIHByb2R1Y3RlOiBzaWduZXMgZGlmZXJlbnRzIGRvbmVuIHJlc3VsdGF0IG5lZ2F0aXUuIiwgIkwnZXhwb25lbnQgYWZlY3RhIFRPVFMgZWxzIGZhY3RvcnMgZGVsIHByb2R1Y3RlLCBubyBub23DqXMgdW46ICQoYVxcY2RvdCBiKV5uPWFeblxcY2RvdCBiXm4kLiIsICIiXSwgImVyciI6IFsiUE9URU5DSUFfREVfU1VNQSIsICJTSUdORV9QUk9EVUNURSIsICJQT1RFTkNJQV9QUk9EVUNURV9VTl9GQUNUT1IiLCAiIl0sICJyZXMiOiBbIiRcXGRmcmFjNDNcXGNkb3RcXGxlZnQoLVxcZGZyYWM4NlxccmlnaHQpPS1cXGRmcmFjezE2fXs5fSQsIGkgJFxcbGVmdCgtXFxkZnJhY3sxNn17OX1cXHJpZ2h0KV4zPS1cXGRmcmFjezQwOTZ9ezcyOX0kIl19"
  },
  {
   "id": "37d",
   "ex": 37,
   "ap": "d",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$\\left[(-8):5\\right]^3$",
   "opcions": [
    "$-\\dfrac{125}{512}$",
    "$\\dfrac{512}{125}$",
    "$-\\dfrac{512}{125}$",
    "$-\\dfrac{8}{125}$"
   ],
   "pistes": [
    "L'exponent afecta els dos termes del quocient, i l'exponent $3$ és senar: el resultat es queda negatiu.",
    "$[(-8):5]^3=\\left(-\\dfrac85\\right)^3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgaW52ZXJ0aXQgbGEgZnJhY2Npw7MuIFNpbXBsaWZpY2FyIG5vIGNhbnZpYSBxdWluIHRlcm1lIMOpcyBhIGRhbHQgaSBxdWluIGEgYmFpeC4iLCAiUmV2aXNhIGxhIHJlZ2xhIGRlbHMgc2lnbmVzIGRlbCBxdW9jaWVudDogc2lnbmVzIGRpZmVyZW50cyBkb25lbiByZXN1bHRhdCBuZWdhdGl1LiIsICIiLCAiTCdleHBvbmVudCBhZmVjdGEgZWxzIGRvcyB0ZXJtZXMgZGVsIHF1b2NpZW50LCBubyBub23DqXMgdW46ICQoYTpiKV5uPWFebjpiXm4kLiJdLCAiZXJyIjogWyJJTlZFUlRJREEiLCAiU0lHTkVfUVVPQ0lFTlQiLCAiIiwgIlBPVEVOQ0lBX1FVT0NJRU5UX1VOX0ZBQ1RPUiJdLCAicmVzIjogWyIkWygtOCk6NV1eMz1cXGxlZnQoLVxcZGZyYWM4NVxccmlnaHQpXjM9LVxcZGZyYWN7NTEyfXsxMjV9JCJdfQ=="
  },
  {
   "id": "37e",
   "ex": 37,
   "ap": "e",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$\\left[(0{,}16):(-3)\\right]^2$",
   "opcions": [
    "$\\dfrac{4}{225}$",
    "$\\dfrac{16}{5625}$",
    "$\\dfrac{5625}{16}$",
    "$\\dfrac{64}{225}$"
   ],
   "pistes": [
    "$0{,}16$ és la fracció $\\dfrac{16}{100}=\\dfrac{4}{25}$.",
    "$\\dfrac{4}{25}:(-3)=-\\dfrac{4}{75}$. Ara eleva-ho al quadrat (el resultat surt positiu)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2V4cG9uZW50IGFmZWN0YSBlbHMgZG9zIHRlcm1lcyBkZWwgcXVvY2llbnQsIG5vIG5vbcOpcyB1bjogJChhOmIpXm49YV5uOmJebiQuIiwgIiIsICJIYXMgaW52ZXJ0aXQgbGEgZnJhY2Npw7MuIFNpbXBsaWZpY2FyIG5vIGNhbnZpYSBxdWluIHRlcm1lIMOpcyBhIGRhbHQgaSBxdWluIGEgYmFpeC4iLCAiVW4gZGVjaW1hbCBhbWIgZHVlcyB4aWZyZXMgZGFycmVyZSBsYSBjb21hIMOpcyBzb2JyZSAkMTAwJCwgbm8gc29icmUgJDEwJDogJDB7LH0xNj1cXGRmcmFjezE2fXsxMDB9JCwgbm8gJFxcZGZyYWN7MTZ9ezEwfSQuIl0sICJlcnIiOiBbIlBPVEVOQ0lBX1FVT0NJRU5UX1VOX0ZBQ1RPUiIsICIiLCAiSU5WRVJUSURBIiwgIkNPTUFfREVDSU1BTF9ERVNQTEHDh0FEQSJdLCAicmVzIjogWyIkMHssfTE2PVxcZGZyYWN7NH17MjV9JDsgJFxcZGZyYWN7NH17MjV9OigtMyk9LVxcZGZyYWN7NH17NzV9JDsgJFxcbGVmdCgtXFxkZnJhY3s0fXs3NX1cXHJpZ2h0KV4yPVxcZGZyYWN7MTZ9ezU2MjV9JCJdfQ=="
  },
  {
   "id": "37f",
   "ex": 37,
   "ap": "f",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$\\left[\\dfrac{4}{6}\\cdot\\left(-\\dfrac{7}{3}\\right)\\right]^5$",
   "opcions": [
    "$-\\dfrac{33614}{729}$",
    "$-\\dfrac{537824}{59049}$",
    "$-\\dfrac{3125}{243}$",
    "$\\dfrac{537824}{59049}$"
   ],
   "pistes": [
    "Multiplica primer el que hi ha dins del claudàtor: $\\dfrac46\\cdot\\left(-\\dfrac73\\right)$.",
    "$\\dfrac46\\cdot\\left(-\\dfrac73\\right)=-\\dfrac{14}{9}$. Ara eleva-ho a la cinquena potència."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2V4cG9uZW50IGFmZWN0YSBUT1RTIGVscyBmYWN0b3JzIGRlbCBwcm9kdWN0ZSwgbm8gbm9tw6lzIHVuOiAkKGFcXGNkb3QgYilebj1hXm5cXGNkb3QgYl5uJC4iLCAiIiwgIkFxdcOtIGVscyBkb3Mgbm9tYnJlcyBlcyBNVUxUSVBMSVFVRU4gZGlucyBkZWwgcGFyw6hudGVzaSwgbm8gc2Ugc3VtZW46IGxhIHBvdMOobmNpYSDDqXMgZCd1biBwcm9kdWN0ZSwgJChhXFxjZG90IGIpXm4kLCBubyBkJ3VuYSBzdW1hLCAkKGErYilebiQuIiwgIlJldmlzYSBsYSByZWdsYSBkZWxzIHNpZ25lcyBkZWwgcHJvZHVjdGU6IHNpZ25lcyBkaWZlcmVudHMgZG9uZW4gcmVzdWx0YXQgbmVnYXRpdS4iXSwgImVyciI6IFsiUE9URU5DSUFfUFJPRFVDVEVfVU5fRkFDVE9SIiwgIiIsICJQT1RFTkNJQV9ERV9TVU1BIiwgIlNJR05FX1BST0RVQ1RFIl0sICJyZXMiOiBbIiRcXGRmcmFjNDZcXGNkb3RcXGxlZnQoLVxcZGZyYWM3M1xccmlnaHQpPS1cXGRmcmFjezE0fXs5fSQsIGkgJFxcbGVmdCgtXFxkZnJhY3sxNH17OX1cXHJpZ2h0KV41PS1cXGRmcmFjezUzNzgyNH17NTkwNDl9JCJdfQ=="
  },
  {
   "id": "37g",
   "ex": 37,
   "ap": "g",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$(-6)^2\\cdot(-6)^4\\cdot(-6)^{12}$",
   "opcions": [
    "$46656$",
    "$\\dfrac{1}{46656}$",
    "$3656158440062976$",
    "$101559956668416$"
   ],
   "pistes": [
    "Els tres factors tenen la mateixa base: suma els tres exponents ($2+4+12$).",
    "$(-6)^2\\cdot(-6)^4\\cdot(-6)^{12}=(-6)^{18}$. L'exponent és parell: el resultat és positiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIGZhY3RvciAkKC02KV57MTJ9JC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiRW4gbXVsdGlwbGljYXIgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UsIGVscyBleHBvbmVudHMgc2Ugc3VtZW47IHJlc3Rhci1sb3Mgw6lzIGxhIHJlZ2xhIGRlbCBxdW9jaWVudCwgbm8gbGEgZGVsIHByb2R1Y3RlLiIsICJFbiBhbGd1biBkZWxzIGZhY3RvcnMuIEVuIG11bHRpcGxpY2FyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIHNlIFNVTUVOLCBubyBlcyBtdWx0aXBsaXF1ZW46ICRhXm1cXGNkb3QgYV5uPWFee20rbn0kLiIsICIiXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiRVhQT05FTlRTX1JFU1RBVFNfUFJPRFVDVEUiLCAiRVhQT05FTlRTX01VTFRJUExJQ0FUUyIsICIiXSwgInJlcyI6IFsiJCgtNileMlxcY2RvdCgtNileNFxcY2RvdCgtNileezEyfT0oLTYpXnsyKzQrMTJ9PSgtNileezE4fT0xMDFcXCw1NTlcXCw5NTZcXCw2NjhcXCw0MTYkIl19"
  },
  {
   "id": "37h",
   "ex": 37,
   "ap": "h",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$(0{,}3)^2\\cdot(0{,}3)^4$",
   "opcions": [
    "$\\dfrac{6561}{100000000}$",
    "$\\dfrac{729}{1000000000000}$",
    "$\\dfrac{81}{10000}$",
    "$\\dfrac{729}{1000000}$"
   ],
   "pistes": [
    "$0{,}3$ és la fracció $\\dfrac{3}{10}$.",
    "$(0{,}3)^2\\cdot(0{,}3)^4=(0{,}3)^{2+4}=(0{,}3)^6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBTVU1FTiwgbm8gZXMgbXVsdGlwbGlxdWVuOiAkYV5tXFxjZG90IGFebj1hXnttK259JC4iLCAiVW4gZGVjaW1hbCBhbWIgdW5hIHhpZnJhIGRhcnJlcmUgbGEgY29tYSDDqXMgc29icmUgJDEwJCwgbm8gc29icmUgJDEwMCQ6ICQweyx9Mz1cXGRmcmFjezN9ezEwfSQsIG5vICRcXGRmcmFjezN9ezEwMH0kLiIsICJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIGZhY3RvciAkKDB7LH0zKV4yJC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiIl0sICJlcnIiOiBbIkVYUE9ORU5UU19NVUxUSVBMSUNBVFMiLCAiQ09NQV9ERUNJTUFMX0RFU1BMQcOHQURBIiwgIkZBQ1RPUl9PQkxJREFUIiwgIiJdLCAicmVzIjogWyIkMHssfTM9XFxkZnJhY3szfXsxMH0kOyAkXFxsZWZ0KFxcZGZyYWN7M317MTB9XFxyaWdodCleMlxcY2RvdFxcbGVmdChcXGRmcmFjezN9ezEwfVxccmlnaHQpXjQ9XFxsZWZ0KFxcZGZyYWN7M317MTB9XFxyaWdodCleezZ9PVxcZGZyYWN7NzI5fXsxXFwsMDAwXFwsMDAwfSQiXX0="
  },
  {
   "id": "37i",
   "ex": 37,
   "ap": "i",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$(-0{,}5)^6\\cdot(-0{,}5)^{13}\\cdot(-0{,}5)^{11}$",
   "opcions": [
    "$-\\dfrac{1}{1073741824}$",
    "$\\dfrac{1}{16}$",
    "$-\\dfrac{1}{524288}$",
    "$\\dfrac{1}{1073741824}$"
   ],
   "pistes": [
    "$-0{,}5$ és la fracció $-\\dfrac12$. Suma els tres exponents: $6+13+11$.",
    "L'exponent final és $30$, que és parell: el resultat és positiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2V4cG9uZW50IGZpbmFsLCAkMzAkLCDDqXMgcGFyZWxsOiBlbCByZXN1bHRhdCDDqXMgcG9zaXRpdSwgZW5jYXJhIHF1ZSBoaSBoYWdpIHRyZXMgZmFjdG9ycyBuZWdhdGl1cy4iLCAiRW4gbXVsdGlwbGljYXIgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UsIGVscyBleHBvbmVudHMgc2Ugc3VtZW47IHJlc3Rhci1sb3Mgw6lzIGxhIHJlZ2xhIGRlbCBxdW9jaWVudCwgbm8gbGEgZGVsIHByb2R1Y3RlLiIsICJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIGZhY3RvciAkKC0weyx9NSleezExfSQuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIiwgIiJdLCAiZXJyIjogWyJQQVJJVEFUX0VYUE9ORU5UIiwgIkVYUE9ORU5UU19SRVNUQVRTX1BST0RVQ1RFIiwgIkZBQ1RPUl9PQkxJREFUIiwgIiJdLCAicmVzIjogWyIkLTB7LH01PS1cXGRmcmFjMTIkOyAkNisxMysxMT0zMCQ7ICRcXGxlZnQoLVxcZGZyYWMxMlxccmlnaHQpXnszMH09XFxkZnJhY3sxfXsxXFwsMDczXFwsNzQxXFwsODI0fSQiXX0="
  },
  {
   "id": "37j",
   "ex": 37,
   "ap": "j",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica les propietats de les potències per resoldre les expressions.",
   "enunciat": "$\\left(-\\dfrac{3}{6}\\right)^3\\cdot\\left(-\\dfrac{3}{6}\\right)^2$",
   "opcions": [
    "$\\dfrac{1}{64}$",
    "$-\\dfrac{1}{32}$",
    "$-\\dfrac{1}{8}$",
    "$\\dfrac{1}{32}$"
   ],
   "pistes": [
    "Simplifica primer la base: $-\\dfrac36=-\\dfrac12$.",
    "Suma els exponents: $3+2=5$, que és senar, de manera que el resultat és negatiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBTVU1FTiwgbm8gZXMgbXVsdGlwbGlxdWVuOiAkYV5tXFxjZG90IGFebj1hXnttK259JC4iLCAiIiwgIlQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gZWwgZmFjdG9yICRcXGxlZnQoLVxcZGZyYWMzNlxccmlnaHQpXjIkLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiIsICJMJ2V4cG9uZW50IGZpbmFsLCAkNSQsIMOpcyBzZW5hcjogZWwgcmVzdWx0YXQgcydoYSBkZSBxdWVkYXIgbmVnYXRpdS4gUmV2aXNhIGxhIHBhcml0YXQgZGUgbCdleHBvbmVudDogYW1iIGV4cG9uZW50IHBhcmVsbCwgdW5hIGJhc2UgbmVnYXRpdmEgZMOzbmEgcmVzdWx0YXQgcG9zaXRpdTsgYW1iIGV4cG9uZW50IHNlbmFyLCBlbCByZXN1bHRhdCBlcyBxdWVkYSBuZWdhdGl1LiJdLCAiZXJyIjogWyJFWFBPTkVOVFNfTVVMVElQTElDQVRTIiwgIiIsICJGQUNUT1JfT0JMSURBVCIsICJQQVJJVEFUX0VYUE9ORU5UIl0sICJyZXMiOiBbIiQtXFxkZnJhYzM2PS1cXGRmcmFjMTIkOyAkXFxsZWZ0KC1cXGRmcmFjMTJcXHJpZ2h0KV4zXFxjZG90XFxsZWZ0KC1cXGRmcmFjMTJcXHJpZ2h0KV4yPVxcbGVmdCgtXFxkZnJhYzEyXFxyaWdodCleezV9PS1cXGRmcmFjezF9ezMyfSQiXX0="
  },
  {
   "id": "38a",
   "ex": 38,
   "ap": "a",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$2^4\\cdot 2^{-2}\\cdot 2^3$",
   "opcions": [
    "$-512$",
    "$512$",
    "$32$",
    "$2048$"
   ],
   "pistes": [
    "Suma els exponents tenint en compte el signe: $4+(-2)+3$.",
    "$2^4\\cdot 2^{-2}\\cdot 2^3=2^{4-2+3}=2^5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgdHJhY3RhdCAkMl57LTJ9JCBjb20gJC0yXjI9LTQkLiBVbiBleHBvbmVudCBuZWdhdGl1IG5vIGZhIHF1ZSBlbCByZXN1bHRhdCBzaWd1aSBuZWdhdGl1OiAkYV57LW59PVxcZGZyYWN7MX17YV5ufSQgw6lzIGwnaW52ZXJzIGRlbCBub21icmUsIG5vIGVsIHNldSBvcG9zYXQuIiwgIkhhcyBpZ25vcmF0IGVsIHNpZ25lIG1lbnlzIGRlIGwnZXhwb25lbnQgJC0yJCBlbiBzdW1hcjogJDQrMiszPTkkIGVuIGNvbXB0ZXMgZGUgJDQtMiszPTUkLiIsICIiLCAiQWwgcHJpbWVyIHBhcmVsbCBkZSBmYWN0b3JzLiBFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBTVU1FTiwgbm8gZXMgbXVsdGlwbGlxdWVuOiAkYV5tXFxjZG90IGFebj1hXnttK259JC4iXSwgImVyciI6IFsiRVhQT05FTlRfTkVHQVRJVV9TSUdORSIsICJFWFBPTkVOVF9ORUdBVElVX1NJR05FIiwgIiIsICJFWFBPTkVOVFNfTVVMVElQTElDQVRTIl0sICJyZXMiOiBbIiQyXjRcXGNkb3QgMl57LTJ9XFxjZG90IDJeMz0yXns0LTIrM309Ml41PTMyJCJdfQ=="
  },
  {
   "id": "38b",
   "ex": 38,
   "ap": "b",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$(2^{-2})^3\\cdot 2^{-4}$",
   "opcions": [
    "$\\dfrac{1}{1024}$",
    "$\\dfrac{1}{4}$",
    "$\\dfrac{1}{64}$",
    "$\\dfrac{1}{8}$"
   ],
   "pistes": [
    "Potència d'una potència: multiplica els exponents, $-2\\cdot 3$.",
    "$(2^{-2})^3=2^{-6}$. Després, $2^{-6}\\cdot 2^{-4}=2^{-6-4}=2^{-10}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGlnbm9yYXQgZWwgc2lnbmUgbWVueXMgZGUgbCdleHBvbmVudCAkLTQkIGRlbCBzZWdvbiBmYWN0b3IuIiwgIlQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gZWwgZmFjdG9yICQyXnstNH0kLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiIsICJFbiB1bmEgcG90w6huY2lhIGQndW5hIHBvdMOobmNpYSwgZWxzIGV4cG9uZW50cyBlcyBNVUxUSVBMSVFVRU4sIG5vIHNlIHN1bWVuOiAkKGFebSlebj1hXnttXFxjZG90IG59JC4iXSwgImVyciI6IFsiIiwgIkVYUE9ORU5UX05FR0FUSVVfU0lHTkUiLCAiRkFDVE9SX09CTElEQVQiLCAiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIl0sICJyZXMiOiBbIiQoMl57LTJ9KV4zXFxjZG90IDJeey00fT0yXnstNn1cXGNkb3QgMl57LTR9PTJeey0xMH09XFxkZnJhY3sxfXsxMDI0fSQiXX0="
  },
  {
   "id": "38c",
   "ex": 38,
   "ap": "c",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$(-3)^{-5}:(-3)^2\\cdot(-3)^4$",
   "opcions": [
    "$-2187$",
    "$-3$",
    "$-\\dfrac{1}{177147}$",
    "$-\\dfrac{1}{27}$"
   ],
   "pistes": [
    "Combina els exponents amb el seu signe: $-5-2+4$.",
    "$(-3)^{-5}:(-3)^2\\cdot(-3)^4=(-3)^{-5-2+4}=(-3)^{-3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgaWdub3JhdCBlbCBzaWduZSBtZW55cyBkZSBsJ2V4cG9uZW50ICQtNSQuIFVuIGV4cG9uZW50IG5lZ2F0aXUgbm8gZmEgcXVlIGVsIHJlc3VsdGF0IHNpZ3VpIG5lZ2F0aXU6ICRhXnstbn09XFxkZnJhY3sxfXthXm59JCDDqXMgbCdpbnZlcnMgZGVsIG5vbWJyZSwgbm8gZWwgc2V1IG9wb3NhdC4iLCAiRW4gZGl2aWRpciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBlcyBSRVNURU4sIG5vIHNlIHN1bWVuOiAkYV5tOmFebj1hXnttLW59JC4iLCAiSGFzIHJlc3RhdCB0YW1iw6kgbCfDumx0aW0gZXhwb25lbnQsIHBlcsOyIGFxdWVsbCBmYWN0b3IgbXVsdGlwbGljYSwgbm8gZGl2aWRlaXguIExhIHJlZ2xhIGRlIHJlc3RhciBleHBvbmVudHMgw6lzIHBlciBESVZJRElSIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBubyBwZXIgcmVzdGFyLWxlczogcXVhbiBlcyByZXN0ZW4sIGNhbCByZXN0YXIgZWxzIHZhbG9ycyBkZSBjYWRhIHBvdMOobmNpYS4iLCAiIl0sICJlcnIiOiBbIkVYUE9ORU5UX05FR0FUSVVfU0lHTkUiLCAiRVhQT05FTlRTX1NVTUFUU19RVU9DSUVOVCIsICJSRUdMQV9OT01FU19RVU9DSUVOVCIsICIiXSwgInJlcyI6IFsiJCgtMyleey01fTooLTMpXjJcXGNkb3QoLTMpXjQ9KC0zKV57LTUtMis0fT0oLTMpXnstM309LVxcZGZyYWN7MX17Mjd9JCJdfQ=="
  },
  {
   "id": "38d",
   "ex": 38,
   "ap": "d",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$\\left[(-3)^{-2}\\right]^{-4}:(-3)^5$",
   "opcions": [
    "$-27$",
    "$-\\dfrac{1}{1594323}$",
    "$-\\dfrac{1}{177147}$",
    "$-1594323$"
   ],
   "pistes": [
    "Potència d'una potència primer: $(-2)\\cdot(-4)$.",
    "$[(-3)^{-2}]^{-4}=(-3)^{8}$. Després, $(-3)^{8}:(-3)^5=(-3)^{8-5}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGlnbm9yYXQgZWwgc2lnbmUgbWVueXMgZGUgbCdleHBvbmVudCBleHRlcmlvciwgJC00JDogJCgtMilcXGNkb3QoLTQpPTgkLCBubyAkLTJcXGNkb3Q0PS04JC4iLCAiSSB0YW1iw6kgaGFzIHJlc3RhdCBlbCBkYXJyZXIgZXhwb25lbnQgZW4gbGxvYyBkZSBmZXItaG8gYW1iIGVsIHJlc3VsdGF0IGRlIGxhIHBvdMOobmNpYSBkZSBwb3TDqG5jaWEuIEVuIHVuYSBwb3TDqG5jaWEgZCd1bmEgcG90w6huY2lhLCBlbHMgZXhwb25lbnRzIGVzIE1VTFRJUExJUVVFTiwgbm8gc2Ugc3VtZW46ICQoYV5tKV5uPWFee21cXGNkb3Qgbn0kLiIsICJFbiBkaXZpZGlyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIGVzIFJFU1RFTiwgbm8gc2Ugc3VtZW46ICRhXm06YV5uPWFee20tbn0kLiJdLCAiZXJyIjogWyIiLCAiRVhQT05FTlRfTkVHQVRJVV9TSUdORSIsICJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiLCAiRVhQT05FTlRTX1NVTUFUU19RVU9DSUVOVCJdLCAicmVzIjogWyIkWygtMyleey0yfV1eey00fT0oLTMpXns4fSQsIGkgJCgtMyleezh9OigtMyleNT0oLTMpXnszfT0tMjckIl19"
  },
  {
   "id": "38e",
   "ex": 38,
   "ap": "e",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$\\left(\\dfrac{1}{3}\\right)^{-2}\\cdot\\left(\\dfrac{1}{3}\\right)^5:\\left(\\dfrac{1}{3}\\right)^{-6}$",
   "opcions": [
    "$\\dfrac{1}{3}$",
    "$\\dfrac{1}{1594323}$",
    "$\\dfrac{1}{19683}$",
    "$27$"
   ],
   "pistes": [
    "Dividir per una potència d'exponent negatiu equival a sumar-ne l'exponent canviat de signe: $-(-6)=+6$.",
    "$-2+5-(-6)=-2+5+6=9$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgY29wIGwnaGFzIGlnbm9yYXQgbm9tw6lzIGFsIHByaW1lciBleHBvbmVudCBpIG5vIGFsIGRlIGRpdmlkaXIuIFVuIGV4cG9uZW50IG5lZ2F0aXUgbm8gZmEgcXVlIGVsIHJlc3VsdGF0IHNpZ3VpIG5lZ2F0aXU6ICRhXnstbn09XFxkZnJhY3sxfXthXm59JCDDqXMgbCdpbnZlcnMgZGVsIG5vbWJyZSwgbm8gZWwgc2V1IG9wb3NhdC4iLCAiSGFzIGlnbm9yYXQgZWwgc2lnbmUgbWVueXMgZGVsIHByaW1lciBleHBvbmVudCwgJC0yJC4iLCAiIiwgIkRpdmlkaXIgcGVyIHVuYSBwb3TDqG5jaWEgZCdleHBvbmVudCBuZWdhdGl1IGVxdWl2YWwgYSBzdW1hciBlbCBzZXUgZXhwb25lbnQgY2FudmlhdCBkZSBzaWduZSwgbm8gYSByZXN0YXItbG8gdGFsIHF1YWwuIExhIHJlZ2xhIGRlIHJlc3RhciBleHBvbmVudHMgw6lzIHBlciBESVZJRElSIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBubyBwZXIgcmVzdGFyLWxlczogcXVhbiBlcyByZXN0ZW4sIGNhbCByZXN0YXIgZWxzIHZhbG9ycyBkZSBjYWRhIHBvdMOobmNpYS4iXSwgImVyciI6IFsiRVhQT05FTlRfTkVHQVRJVV9TSUdORSIsICJFWFBPTkVOVF9ORUdBVElVX1NJR05FIiwgIiIsICJSRUdMQV9OT01FU19RVU9DSUVOVCJdLCAicmVzIjogWyIkXFxsZWZ0KFxcZGZyYWMxM1xccmlnaHQpXnstMn1cXGNkb3RcXGxlZnQoXFxkZnJhYzEzXFxyaWdodCleNTpcXGxlZnQoXFxkZnJhYzEzXFxyaWdodCleey02fT1cXGxlZnQoXFxkZnJhYzEzXFxyaWdodCleey0yKzUrNn09XFxsZWZ0KFxcZGZyYWMxM1xccmlnaHQpXns5fT1cXGRmcmFjezF9ezE5XFwsNjgzfSQiXX0="
  },
  {
   "id": "38f",
   "ex": 38,
   "ap": "f",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$\\left(-\\dfrac{1}{4}\\right)^{-6}:\\left[\\left(-\\dfrac{1}{4}\\right)^2\\right]^{-3}$",
   "opcions": [
    "$-1024$",
    "$4096$",
    "$16777216$",
    "$1$"
   ],
   "pistes": [
    "Potència d'una potència al claudàtor: $2\\cdot(-3)=-6$.",
    "$\\left[\\left(-\\dfrac14\\right)^2\\right]^{-3}=\\left(-\\dfrac14\\right)^{-6}$. Ara divideix-ho per si mateix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbCBjbGF1ZMOgdG9yOiBoYXMgc3VtYXQgJDIkIGkgJC0zJCBlbiBsbG9jIGRlIG11bHRpcGxpY2FyLWxvcy4gRW4gdW5hIHBvdMOobmNpYSBkJ3VuYSBwb3TDqG5jaWEsIGVscyBleHBvbmVudHMgZXMgTVVMVElQTElRVUVOLCBubyBzZSBzdW1lbjogJChhXm0pXm49YV57bVxcY2RvdCBufSQuIiwgIlQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gZWwgcHJpbWVyIGZhY3RvciwgJFxcbGVmdCgtXFxkZnJhYzE0XFxyaWdodCleey02fSQuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIiwgIkVuIGRpdmlkaXIgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UsIGVscyBleHBvbmVudHMgZXMgUkVTVEVOLCBubyBzZSBzdW1lbjogJGFebTphXm49YV57bS1ufSQuIiwgIiJdLCAiZXJyIjogWyJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiLCAiRkFDVE9SX09CTElEQVQiLCAiRVhQT05FTlRTX1NVTUFUU19RVU9DSUVOVCIsICIiXSwgInJlcyI6IFsiJFxcbGVmdFtcXGxlZnQoLVxcZGZyYWMxNFxccmlnaHQpXjJcXHJpZ2h0XV57LTN9PVxcbGVmdCgtXFxkZnJhYzE0XFxyaWdodCleey02fSQsIGkgJFxcbGVmdCgtXFxkZnJhYzE0XFxyaWdodCleey02fTpcXGxlZnQoLVxcZGZyYWMxNFxccmlnaHQpXnstNn09XFxsZWZ0KC1cXGRmcmFjMTRcXHJpZ2h0KV57MH09MSQiXX0="
  },
  {
   "id": "38g",
   "ex": 38,
   "ap": "g",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$3^{-6}:3^{-7}\\cdot 3^2$",
   "opcions": [
    "$\\dfrac{1}{177147}$",
    "$\\dfrac{1}{3}$",
    "$27$",
    "$3$"
   ],
   "pistes": [
    "Dividir per $3^{-7}$ equival a sumar-ne l'exponent canviat de signe: $-(-7)=+7$.",
    "$-6-(-7)+2=-6+7+2=3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJEaXZpZGlyIHBlciB1bmEgcG90w6huY2lhIGQnZXhwb25lbnQgbmVnYXRpdSBlcXVpdmFsIGEgc3VtYXItbmUgbCdleHBvbmVudCBjYW52aWF0IGRlIHNpZ25lLCBubyBhIHJlc3Rhci1sbyB0YWwgcXVhbC4gTGEgcmVnbGEgZGUgcmVzdGFyIGV4cG9uZW50cyDDqXMgcGVyIERJVklESVIgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UsIG5vIHBlciByZXN0YXItbGVzOiBxdWFuIGVzIHJlc3RlbiwgY2FsIHJlc3RhciBlbHMgdmFsb3JzIGRlIGNhZGEgcG90w6huY2lhLiIsICJIYXMgY2FudmlhdCBxdWluIGRlbHMgZG9zIMO6bHRpbXMgZXhwb25lbnRzIHNlIHN1bWEgaSBxdWluIGVzIHJlc3RhLiIsICIiLCAiSGFzIGlnbm9yYXQgZWwgc2lnbmUgbWVueXMgZGVsIHByaW1lciBleHBvbmVudCwgJC02JC4iXSwgImVyciI6IFsiUkVHTEFfTk9NRVNfUVVPQ0lFTlQiLCAiT1JEUkVfUkVTVEEiLCAiIiwgIkVYUE9ORU5UX05FR0FUSVVfU0lHTkUiXSwgInJlcyI6IFsiJDNeey02fTozXnstN31cXGNkb3QgM14yPTNeey02KzcrMn09M157M309MjckIl19"
  },
  {
   "id": "38h",
   "ex": 38,
   "ap": "h",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$(-5)^6:(-5)^{-2}:(-5)^{-1}$",
   "opcions": [
    "$390625$",
    "$-1953125$",
    "$-125$",
    "$-3125$"
   ],
   "pistes": [
    "Dividir per una potència d'exponent negatiu equival a sumar-ne l'exponent canviat de signe.",
    "$6-(-2)-(-1)=6+2+1=9$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGxhIGRhcnJlcmEgZGl2aXNpw7MsIHBlciAkKC01KV57LTF9JC4iLCAiIiwgIkRpdmlkaXIgcGVyIHVuYSBwb3TDqG5jaWEgZCdleHBvbmVudCBuZWdhdGl1IGVxdWl2YWwgYSBzdW1hci1uZSBsJ2V4cG9uZW50IGNhbnZpYXQgZGUgc2lnbmUsIG5vIGEgcmVzdGFyLWxvIHRhbCBxdWFsLiBMYSByZWdsYSBkZSByZXN0YXIgZXhwb25lbnRzIMOpcyBwZXIgRElWSURJUiBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgbm8gcGVyIHJlc3Rhci1sZXM6IHF1YW4gZXMgcmVzdGVuLCBjYWwgcmVzdGFyIGVscyB2YWxvcnMgZGUgY2FkYSBwb3TDqG5jaWEuIiwgIkhhcyBjYW52aWF0IGRlIHNpZ25lIG5vbcOpcyBsJ8O6bHRpbSBleHBvbmVudCwgaSBjYWwgZmVyLWhvIGFtYiB0b3RzIGRvcy4iXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiIiwgIlJFR0xBX05PTUVTX1FVT0NJRU5UIiwgIk9SRFJFX1JFU1RBIl0sICJyZXMiOiBbIiQoLTUpXjY6KC01KV57LTJ9OigtNSleey0xfT0oLTUpXns2KzIrMX09KC01KV57OX09LTFcXCw5NTNcXCwxMjUkIl19"
  },
  {
   "id": "38i",
   "ex": 38,
   "ap": "i",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les operacions.",
   "enunciat": "$\\left[(-6)^3\\right]^{-5}\\cdot\\left[(-6)^{-5}\\right]^4$",
   "opcions": [
    "$-7776$",
    "$-\\dfrac{1}{470184984576}$",
    "$-\\dfrac{1}{1719070799748422591028658176}$",
    "$-\\dfrac{1}{216}$"
   ],
   "pistes": [
    "Potència d'una potència a cada claudàtor: multiplica els exponents de cada un.",
    "$[(-6)^3]^{-5}=(-6)^{-15}$ i $[(-6)^{-5}]^4=(-6)^{-20}$. Suma'ls: $-15+(-20)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBzdW1lbjsgcmVzdGFyLWxvcyDDqXMgbGEgcmVnbGEgZGVsIHF1b2NpZW50LCBubyBsYSBkZWwgcHJvZHVjdGUuIiwgIlQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gZWwgc2Vnb24gZmFjdG9yLCAkXFxsZWZ0WygtNileey01fVxccmlnaHRdXjQkLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiIsICIiLCAiQSB0b3RzIGRvcyBjbGF1ZMOgdG9ycy4gRW4gdW5hIHBvdMOobmNpYSBkJ3VuYSBwb3TDqG5jaWEsIGVscyBleHBvbmVudHMgZXMgTVVMVElQTElRVUVOLCBubyBzZSBzdW1lbjogJChhXm0pXm49YV57bVxcY2RvdCBufSQuIl0sICJlcnIiOiBbIkVYUE9ORU5UU19SRVNUQVRTX1BST0RVQ1RFIiwgIkZBQ1RPUl9PQkxJREFUIiwgIiIsICJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiXSwgInJlcyI6IFsiJFsoLTYpXjNdXnstNX09KC02KV57LTE1fSQsICRbKC02KV57LTV9XV40PSgtNileey0yMH0kLCBpICQoLTYpXnstMTV9XFxjZG90KC02KV57LTIwfT0oLTYpXnstMzV9JCJdfQ=="
  },
  {
   "id": "39a",
   "ex": 39,
   "ap": "a",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Completa amb la potència que falta perquè la igualtat sigui certa.",
   "enunciat": "$2^3\\cdot\\square=2^8$",
   "opcions": [
    "$2^{8}$",
    "$2^{5}$",
    "$2^{-5}$",
    "$2^{11}$"
   ],
   "pistes": [
    "Si $2^3\\cdot\\square=2^8$, aleshores $\\square=2^8:2^3$.",
    "$\\square=2^{8-3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgY29waWF0IGVsIHNlZ29uIG1lbWJyZSB0YWwgcXVhbCwgc2Vuc2UgdGVuaXIgZW4gY29tcHRlIGVsIGZhY3RvciAkMl4zJCBxdWUgamEgaGkgw6lzLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiIsICIiLCAiSGFzIHJlc3RhdCBlbiBsJ29yZHJlIGVxdWl2b2NhdDogcmV2aXNhIHF1aW4gdGVybWUgaGEgZCdhbmFyIHByaW1lci4iLCAiUGVyIGHDr2xsYXIgZWwgZmFjdG9yIHF1ZSBmYWx0YSBjYWwgcmVzdGFyLCBubyBzdW1hci4gRW4gZGl2aWRpciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBlcyBSRVNURU4sIG5vIHNlIHN1bWVuOiAkYV5tOmFebj1hXnttLW59JC4iXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiIiwgIk9SRFJFX1JFU1RBIiwgIkVYUE9ORU5UU19TVU1BVFNfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJFxcc3F1YXJlPTJeODoyXjM9Ml57OC0zfT0yXjUkIl19"
  },
  {
   "id": "39b",
   "ex": 39,
   "ap": "b",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Completa amb la potència que falta perquè la igualtat sigui certa.",
   "enunciat": "$(-4)^5\\cdot\\square=(-4)^{10}$",
   "opcions": [
    "$4^{5}$",
    "$(-4)^{5}$",
    "$(-4)^{15}$",
    "$(-4)^{10}$"
   ],
   "pistes": [
    "Si $(-4)^5\\cdot\\square=(-4)^{10}$, aleshores $\\square=(-4)^{10}:(-4)^5$.",
    "$\\square=(-4)^{10-5}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBmYWN0b3IgcXVlIGZhbHRhIGhhIGRlIGNvbnNlcnZhciBsYSBiYXNlIHRhbCBjb20gZXJhLCAkKC00KSQsIG5vICQ0JC4iLCAiIiwgIlBlciBhw69sbGFyIGVsIGZhY3RvciBxdWUgZmFsdGEgY2FsIHJlc3Rhciwgbm8gc3VtYXIuIEVuIGRpdmlkaXIgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UsIGVscyBleHBvbmVudHMgZXMgUkVTVEVOLCBubyBzZSBzdW1lbjogJGFebTphXm49YV57bS1ufSQuIiwgIkhhcyBjb3BpYXQgZWwgc2Vnb24gbWVtYnJlIHRhbCBxdWFsLCBzZW5zZSB0ZW5pciBlbiBjb21wdGUgZWwgZmFjdG9yICQoLTQpXjUkIHF1ZSBqYSBoaSDDqXMuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIl0sICJlcnIiOiBbIkJBU0VfU0lHTkVfUEVSRFVUIiwgIiIsICJFWFBPTkVOVFNfU1VNQVRTX1FVT0NJRU5UIiwgIkZBQ1RPUl9PQkxJREFUIl0sICJyZXMiOiBbIiRcXHNxdWFyZT0oLTQpXnsxMH06KC00KV41PSgtNCleezEwLTV9PSgtNCleNSQiXX0="
  },
  {
   "id": "39c",
   "ex": 39,
   "ap": "c",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Completa amb la potència que falta perquè la igualtat sigui certa.",
   "enunciat": "$\\left(\\dfrac{7}{2}\\right)^6\\cdot\\square=\\left(\\dfrac{7}{2}\\right)^7$",
   "opcions": [
    "$\\dfrac{7}{2}$",
    "$(\\dfrac{7}{2})^{13}$",
    "$(\\dfrac{7}{2})^{-1}$",
    "$(\\dfrac{7}{2})^{7}$"
   ],
   "pistes": [
    "Si $\\left(\\dfrac72\\right)^6\\cdot\\square=\\left(\\dfrac72\\right)^7$, aleshores $\\square=\\left(\\dfrac72\\right)^7:\\left(\\dfrac72\\right)^6$.",
    "$\\square=\\left(\\dfrac72\\right)^{7-6}=\\left(\\dfrac72\\right)^1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUGVyIGHDr2xsYXIgZWwgZmFjdG9yIHF1ZSBmYWx0YSBjYWwgcmVzdGFyLCBubyBzdW1hci4gRW4gZGl2aWRpciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBlcyBSRVNURU4sIG5vIHNlIHN1bWVuOiAkYV5tOmFebj1hXnttLW59JC4iLCAiSGFzIHJlc3RhdCBlbiBsJ29yZHJlIGVxdWl2b2NhdDogcmV2aXNhIHF1aW4gdGVybWUgaGEgZCdhbmFyIHByaW1lci4iLCAiSGFzIGNvcGlhdCBlbCBzZWdvbiBtZW1icmUgdGFsIHF1YWwsIHNlbnNlIHRlbmlyIGVuIGNvbXB0ZSBlbCBmYWN0b3IgJFxcbGVmdChcXGRmcmFjNzJcXHJpZ2h0KV42JCBxdWUgamEgaGkgw6lzLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiJdLCAiZXJyIjogWyIiLCAiRVhQT05FTlRTX1NVTUFUU19RVU9DSUVOVCIsICJPUkRSRV9SRVNUQSIsICJGQUNUT1JfT0JMSURBVCJdLCAicmVzIjogWyIkXFxzcXVhcmU9XFxsZWZ0KFxcZGZyYWM3MlxccmlnaHQpXns3LTZ9PVxcbGVmdChcXGRmcmFjNzJcXHJpZ2h0KV4xPVxcZGZyYWM3MiQiXX0="
  },
  {
   "id": "39d",
   "ex": 39,
   "ap": "d",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Completa amb la potència que falta perquè la igualtat sigui certa.",
   "enunciat": "$(-3)^{12}:\\square=(-3)^6$",
   "opcions": [
    "$(-3)^{-6}$",
    "$(-3)^{6}$",
    "$(-3)^{12}$",
    "$(-3)^{18}$"
   ],
   "pistes": [
    "Si $(-3)^{12}:\\square=(-3)^6$, aleshores $\\square=(-3)^{12}:(-3)^6$.",
    "$\\square=(-3)^{12-6}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVuIGwnb3JkcmUgZXF1aXZvY2F0OiByZXZpc2EgcXVpbiB0ZXJtZSBoYSBkJ2FuYXIgcHJpbWVyLiIsICIiLCAiSGFzIGNvcGlhdCBlbCBkaXZpZGVuZCB0YWwgcXVhbCwgc2Vuc2UgdGVuaXIgZW4gY29tcHRlIGVsIHJlc3VsdGF0LCAkKC0zKV42JC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiUGVyIGHDr2xsYXIgZWwgZGl2aXNvciBxdWUgZmFsdGEgY2FsIHJlc3RhciBleHBvbmVudHMsIG5vIHN1bWFyLWxvcy4gRW4gZGl2aWRpciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBlcyBSRVNURU4sIG5vIHNlIHN1bWVuOiAkYV5tOmFebj1hXnttLW59JC4iXSwgImVyciI6IFsiT1JEUkVfUkVTVEEiLCAiIiwgIkZBQ1RPUl9PQkxJREFUIiwgIkVYUE9ORU5UU19TVU1BVFNfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJFxcc3F1YXJlPSgtMyleezEyfTooLTMpXjY9KC0zKV57MTItNn09KC0zKV42JCJdfQ=="
  },
  {
   "id": "39e",
   "ex": 39,
   "ap": "e",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Completa amb la potència que falta perquè la igualtat sigui certa.",
   "enunciat": "$\\square:5^6=5$",
   "opcions": [
    "$5^{7}$",
    "$5^{6}$",
    "$5^{5}$",
    "$5^{-5}$"
   ],
   "pistes": [
    "Si $\\square:5^6=5$, aleshores $\\square=5^6\\cdot 5$.",
    "$\\square=5^{6+1}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGNvcGlhdCBlbCBkaXZpc29yIHRhbCBxdWFsLCBzZW5zZSB0ZW5pciBlbiBjb21wdGUgZWwgcmVzdWx0YXQsICQ1XjEkLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiIsICJIYXMgcmVzdGF0IGVuIGwnb3JkcmUgZXF1aXZvY2F0OiByZXZpc2EgcXVpbiB0ZXJtZSBoYSBkJ2FuYXIgcHJpbWVyLiIsICJQZXIgYcOvbGxhciBlbCBkaXZpZGVuZCBjYWwgbXVsdGlwbGljYXIgJDVeNlxcY2RvdCA1JCwgbm8gZGl2aWRpci4iXSwgImVyciI6IFsiIiwgIkZBQ1RPUl9PQkxJREFUIiwgIk9SRFJFX1JFU1RBIiwgIk9QRVJBQ0lPX0lOVkVSVElEQSJdLCAicmVzIjogWyIkXFxzcXVhcmU9NV42XFxjZG90IDVeMT01Xns2KzF9PTVeNyQiXX0="
  },
  {
   "id": "39f",
   "ex": 39,
   "ap": "f",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Completa amb la potència que falta perquè la igualtat sigui certa.",
   "enunciat": "$\\square:\\left(-\\dfrac{1}{3}\\right)^6=\\left(-\\dfrac{1}{3}\\right)^3$",
   "opcions": [
    "$(-\\dfrac{1}{3})^{9}$",
    "$(-\\dfrac{1}{3})^{-3}$",
    "$(\\dfrac{1}{3})^{9}$",
    "$(-\\dfrac{1}{3})^{3}$"
   ],
   "pistes": [
    "Si $\\square:\\left(-\\dfrac13\\right)^6=\\left(-\\dfrac13\\right)^3$, aleshores $\\square=\\left(-\\dfrac13\\right)^3\\cdot\\left(-\\dfrac13\\right)^6$.",
    "$\\square=\\left(-\\dfrac13\\right)^{3+6}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHJlc3RhdCBlbiBsJ29yZHJlIGVxdWl2b2NhdDogcmV2aXNhIHF1aW4gdGVybWUgaGEgZCdhbmFyIHByaW1lci4iLCAiRWwgZmFjdG9yIHF1ZSBmYWx0YSBoYSBkZSBjb25zZXJ2YXIgbGEgYmFzZSB0YWwgY29tIGVyYSwgJC1cXGRmcmFjMTMkLCBubyAkXFxkZnJhYzEzJC4iLCAiSGFzIGNvcGlhdCBlbCByZXN1bHRhdCB0YWwgcXVhbCwgc2Vuc2UgdGVuaXIgZW4gY29tcHRlIGVsIGRpdmlzb3IsICRcXGxlZnQoLVxcZGZyYWMxM1xccmlnaHQpXjYkLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiJdLCAiZXJyIjogWyIiLCAiT1JEUkVfUkVTVEEiLCAiQkFTRV9TSUdORV9QRVJEVVQiLCAiRkFDVE9SX09CTElEQVQiXSwgInJlcyI6IFsiJFxcc3F1YXJlPVxcbGVmdCgtXFxkZnJhYzEzXFxyaWdodCleM1xcY2RvdFxcbGVmdCgtXFxkZnJhYzEzXFxyaWdodCleNj1cXGxlZnQoLVxcZGZyYWMxM1xccmlnaHQpXnszKzZ9PVxcbGVmdCgtXFxkZnJhYzEzXFxyaWdodCleOSQiXX0="
  },
  {
   "id": "40a",
   "ex": 40,
   "ap": "a",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Esbrina el valor de $a$ perquè cada igualtat sigui certa.",
   "enunciat": "$5^a\\cdot 5^3=5^6$",
   "opcions": [
    "$6$",
    "$3$",
    "$-3$",
    "$2$"
   ],
   "pistes": [
    "Si les bases són iguals, els exponents han de complir $a+3=6$.",
    "Aïlla $a$: $a=6-3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgYWdhZmF0IGwnZXhwb25lbnQgZGVsIHNlZ29uIG1lbWJyZSBkaXJlY3RhbWVudCwgc2Vuc2UgdGVuaXIgZW4gY29tcHRlIHF1ZSBqYSBoaSBoYSB1biBmYWN0b3IgJDVeMyQgYWwgcHJpbWVyIG1lbWJyZS4iLCAiIiwgIkhhcyBwbGFudGVqYXQgbCdlcXVhY2nDsyBhIGwnaW5yZXbDqXM6IMOpcyAkYSszPTYkLCBubyAkMy02PWEkLiIsICJQZXIgYcOvbGxhciBsJ2V4cG9uZW50IGVuIHVuYSBpZ3VhbHRhdCBkZSBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzJ2lndWFsZW4gaSBzZSBzdW1lbiBvIGVzIHJlc3RlbiBjb20gZW4gcXVhbHNldm9sIGVxdWFjacOzOyBubyBlcyBtdWx0aXBsaXF1ZW4uIl0sICJlcnIiOiBbIkZBQ1RPUl9PQkxJREFUIiwgIiIsICJPUkRSRV9SRVNUQSIsICJFUVVBQ0lPX0VYUE9ORU5UX01VTFRJUExJQ0FUIl0sICJyZXMiOiBbIiRhKzM9NlxcUmlnaHRhcnJvdyBhPTYtMz0zJCJdfQ=="
  },
  {
   "id": "40b",
   "ex": 40,
   "ap": "b",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Esbrina el valor de $a$ perquè cada igualtat sigui certa.",
   "enunciat": "$(-2)^{5a}:(-2)^{2a}=(-2)^6$",
   "opcions": [
    "$2$",
    "$\\dfrac{6}{7}$",
    "$-2$",
    "$\\dfrac{6}{5}$"
   ],
   "pistes": [
    "Si les bases són iguals, els exponents han de complir $5a-2a=6$.",
    "$5a-2a=3a$. Aïlla $a$: $3a=6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHN1bWF0IGVscyBkb3MgZXhwb25lbnRzIGVuIGxsb2MgZGUgcmVzdGFyLWxvczogw6lzICQ1YS0yYT02JCwgbm8gJDVhKzJhPTYkLiIsICJIYXMgcGxhbnRlamF0IGwnZXF1YWNpw7MgYSBsJ2lucmV2w6lzOiDDqXMgJDVhLTJhPTYkLCBubyAkMmEtNWE9NiQuIiwgIkhhcyBwbGFudGVqYXQgJDVhPTYkLCBvYmxpZGFudCByZXN0YXItaGkgZWwgJDJhJCBkZWwgZGl2aXNvci4iXSwgImVyciI6IFsiIiwgIkVYUE9ORU5UU19TVU1BVFNfUVVPQ0lFTlQiLCAiT1JEUkVfUkVTVEEiLCAiRkFDVE9SX09CTElEQVQiXSwgInJlcyI6IFsiJDVhLTJhPTZcXFJpZ2h0YXJyb3cgM2E9NlxcUmlnaHRhcnJvdyBhPTIkIl19"
  },
  {
   "id": "40c",
   "ex": 40,
   "ap": "c",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Esbrina el valor de $a$ perquè cada igualtat sigui certa.",
   "enunciat": "$(-6)^a:(-6)^8=(-6)^0$",
   "opcions": [
    "$0$",
    "$16$",
    "$-8$",
    "$8$"
   ],
   "pistes": [
    "Si les bases són iguals, els exponents han de complir $a-8=0$.",
    "Aïlla $a$: $a=8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJRdWUgZWwgcmVzdWx0YXQgc2lndWkgJCgtNileMCQgbm8gdm9sIGRpciBxdWUgJGEkIGhhZ2kgZGUgc2VyICQwJDogY2FsIHJlc29sZHJlIGwnZXF1YWNpw7MgZGVscyBleHBvbmVudHMuIFF1YWxzZXZvbCBub21icmUgZGlmZXJlbnQgZGUgemVybyBlbGV2YXQgYSAkMCQgdmFsICQxJCwgbm8gJDAkLiIsICJIYXMgZG9ibGF0IGwnZXhwb25lbnQgJDgkIGVuIGxsb2MgZGUgcGxhbnRlamFyIGwnZXF1YWNpw7MgJGEtOD0wJC4iLCAiSGFzIHBsYW50ZWphdCBsJ2VxdWFjacOzIGEgbCdpbnJldsOpczogw6lzICRhLTg9MCQsIG5vICQ4LWE9MCQuIiwgIiJdLCAiZXJyIjogWyJFWFBPTkVOVF9aRVJPIiwgIkVRVUFDSU9fRVhQT05FTlRfTVVMVElQTElDQVQiLCAiT1JEUkVfUkVTVEEiLCAiIl0sICJyZXMiOiBbIiRhLTg9MFxcUmlnaHRhcnJvdyBhPTgkIl19"
  },
  {
   "id": "40d",
   "ex": 40,
   "ap": "d",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Esbrina el valor de $a$ perquè cada igualtat sigui certa.",
   "enunciat": "$\\left(\\dfrac{5}{3}\\right)^3\\cdot\\left(\\dfrac{5}{3}\\right)^{2a}=\\left(\\dfrac{5}{3}\\right)^9$",
   "opcions": [
    "$\\dfrac{9}{2}$",
    "$\\dfrac{3}{2}$",
    "$3$",
    "$-3$"
   ],
   "pistes": [
    "Si les bases són iguals, els exponents han de complir $3+2a=9$.",
    "$2a=9-3=6$. Aïlla $a$: $a=6:2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcGxhbnRlamF0ICQyYT05JCwgb2JsaWRhbnQtdGUgZGVsICQzJCBxdWUgamEgaGkgaGEgYWwgcHJpbWVyIG1lbWJyZS4iLCAiSGFzIHBsYW50ZWphdCAkM1xcY2RvdCAyYT05JCBlbiBsbG9jIGRlICQzKzJhPTkkLiIsICIiLCAiSGFzIHBsYW50ZWphdCBsJ2VxdWFjacOzIGEgbCdpbnJldsOpcy4iXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiRVFVQUNJT19FWFBPTkVOVF9NVUxUSVBMSUNBVCIsICIiLCAiT1JEUkVfUkVTVEEiXSwgInJlcyI6IFsiJDMrMmE9OVxcUmlnaHRhcnJvdyAyYT02XFxSaWdodGFycm93IGE9MyQiXX0="
  },
  {
   "id": "41a",
   "ex": 41,
   "ap": "a",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Cada igualtat amaga un error. Troba'l i digues quin hauria de ser el resultat correcte.",
   "enunciat": "$3^2+3^3+3^5=3^{2+3+5}=3^{10}$",
   "opcions": [
    "L'error és que la base final hauria de ser $9$ (la suma de $3+3+3$), no $3$.",
    "L'error és el pas $3^{2+3+5}$: hauria de ser $3^{2+3+5}=3^{9}$, no $3^{10}$.",
    "No hi ha cap error: el resultat és $3^{10}=59\\,049$.",
    "La regla de sumar exponents és per MULTIPLICAR potències de la mateixa base, no per sumar-les: aquí les potències se sumen, així que cal sumar els seus valors. $3^2+3^3+3^5=9+27+243=279$."
   ],
   "pistes": [
    "Comprova primer si les tres potències se sumen o es multipliquen a l'enunciat.",
    "La regla \"suma els exponents\" només val quan multipliques potències de la mateixa base. Aquí se sumen: cal calcular cada potència i sumar els resultats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBiYXNlIG5vIMOpcyBlbCBwcm9ibGVtYTogZXMgcXVlZGEgY29tIGVzdGF2YSwgJDMkLiBFbCBwcm9ibGVtYSDDqXMgcXVlIHMnaGEgYXBsaWNhdCBsYSByZWdsYSBkZWwgcHJvZHVjdGUgYSB1bmEgc3VtYS4iLCAiRWwgcHJvYmxlbWEgbm8gw6lzIGxhIHN1bWEgZGVscyBleHBvbmVudHMgKCQyKzMrNT0xMCQgc8OtIMOpcyBjb3JyZWN0YSk6IGVsIHByb2JsZW1hIMOpcyBxdWUgYXF1w60gbm8gZXMgcG9kZW4gc3VtYXIgZXhwb25lbnRzLCBwZXJxdcOoIGxlcyBwb3TDqG5jaWVzIHMnZXN0YW4gc3VtYW50LCBubyBtdWx0aXBsaWNhbnQuIiwgIlPDrSBxdWUgaGkgaGEgdW4gZXJyb3I6ICQzXjIrM14zKzNeNSQgw6lzIHVuYSBzdW1hLCBubyB1biBwcm9kdWN0ZSwgaSBsYSByZWdsYSBkZSBzdW1hciBleHBvbmVudHMgbm9tw6lzIHZhbCBwZXIgYSBwcm9kdWN0ZXMgZGUgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UuIiwgIiJdLCAiZXJyIjogWyJCQVNFX0FMVEVSQURBIiwgIlNVTUFfTUFMX0ZFVEEiLCAiQ0FQX0VSUk9SIiwgIiJdLCAicmVzIjogWyIkM14yKzNeMyszXjU9OSsyNysyNDM9Mjc5JCJdfQ=="
  },
  {
   "id": "41b",
   "ex": 41,
   "ap": "b",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Cada igualtat amaga un error. Troba'l i digues quin hauria de ser el resultat correcte.",
   "enunciat": "$3^2\\cdot 3^3-3^5=3^{2+3}-3^5=3^5-3^5=3^0=1$",
   "opcions": [
    "L'error és que $3^0$ val $0$, no $1$.",
    "L'error és l'últim pas: $3^5-3^5=0$ (és la resta d'un nombre per ell mateix), no $3^{5-5}=3^0$. La regla de restar exponents és per DIVIDIR potències de la mateixa base, no per restar-les.",
    "No hi ha cap error: el resultat és $1$.",
    "L'error és el primer pas: $3^2\\cdot 3^3$ hauria de ser $3^{2\\cdot 3}=3^6$, no $3^{2+3}=3^5$."
   ],
   "pistes": [
    "El primer pas ($3^2\\cdot 3^3=3^5$) és correcte. Mira bé el segon.",
    "$3^5-3^5$ és una resta d'un nombre per ell mateix: sempre val $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkM14wJCBzw60gcXVlIHZhbCAkMSQ6IGFxdWVzdGEgcGFydCDDqXMgY2VydGEuIEwnZXJyb3Igw6lzIGhhdmVyIGFycmliYXQgZmlucyBhcXXDrSwgcGVycXXDqCAkM141LTNeNSQgbm8gZXMgY29udmVydGVpeCBlbiAkM14wJC4iLCAiIiwgIlPDrSBxdWUgaGkgaGEgdW4gZXJyb3I6IHJlc3RhciB1bmEgcG90w6huY2lhIGQnZWxsYSBtYXRlaXhhIGTDs25hICQwJCwgbm8gJDNeMD0xJC4gTGEgcmVnbGEgZGUgcmVzdGFyIGV4cG9uZW50cyDDqXMgcGVyIGEgZGl2aXNpb25zLCBubyBwZXIgYSByZXN0ZXMuIiwgIkFxdWVzdCBwYXMgw6lzIGNvcnJlY3RlOiBlbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBzdW1lbi4gTCdlcnJvciDDqXMgbcOpcyBlbmRhdmFudC4iXSwgImVyciI6IFsiRVhQT05FTlRfWkVSTyIsICIiLCAiQ0FQX0VSUk9SIiwgIkVYUE9ORU5UU19NVUxUSVBMSUNBVFMiXSwgInJlcyI6IFsiJDNeMlxcY2RvdCAzXjMtM141PTNeNS0zXjU9MCQiXX0="
  },
  {
   "id": "41c",
   "ex": 41,
   "ap": "c",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Cada igualtat amaga un error. Troba'l i digues quin hauria de ser el resultat correcte.",
   "enunciat": "$4^9:4^2\\cdot 4^4=4^9:4^{2+4}=4^9:4^6=4^{9-6}=4^3$",
   "opcions": [
    "L'error és el segon pas: la divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta. $4^9:4^2\\cdot 4^4$ és $(4^9:4^2)\\cdot 4^4$, no $4^9:(4^2\\cdot 4^4)$.",
    "No hi ha cap error: el resultat és $4^3=64$.",
    "L'error és el primer pas: no es poden combinar $4^9$, $4^2$ i $4^4$ perquè hi ha una divisió pel mig.",
    "L'error és l'últim pas: $4^{9-6}$ hauria de ser $4^{9-6}=4^{15}$, no $4^3$."
   ],
   "pistes": [
    "La divisió i la multiplicació tenen la mateixa prioritat. Com s'han d'agrupar d'esquerra a dreta?",
    "$4^9:4^2\\cdot 4^4=(4^9:4^2)\\cdot 4^4=4^7\\cdot 4^4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiU8OtIHF1ZSBoaSBoYSB1biBlcnJvcjogcydoYSBhZ3J1cGF0ICQ0XjJcXGNkb3QgNF40JCBjb20gc2kgYW5lc3NpbiBqdW50cywgcXVhbiBlbiByZWFsaXRhdCBjYWwgZmVyIGxlcyBvcGVyYWNpb25zIGQnZXNxdWVycmEgYSBkcmV0YS4iLCAiU8OtIHF1ZSBlcyBwb2RlbiBjb21iaW5hcjogbGEgZGl2aXNpw7MgaSBsYSBtdWx0aXBsaWNhY2nDsyBkZSBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSB0YW1iw6kgZXMgY291ZW4gYW1iIGV4cG9uZW50cywgc3VtYW50IG8gcmVzdGFudC4gRWwgcHJvYmxlbWEgw6lzIGwnb3JkcmUgZW4gcXXDqCBzJ2hhbiBhZ3J1cGF0LiIsICIkOS02PTMkIMOpcyBjb3JyZWN0ZTogYXF1ZXN0IHBhcyBubyB0w6kgZXJyb3IuIEwnZXJyb3Igw6lzIG3DqXMgYW11bnQsIGVuIGNvbSBzJ2hhbiBhZ3J1cGF0IGxlcyBvcGVyYWNpb25zLiJdLCAiZXJyIjogWyIiLCAiQ0FQX0VSUk9SIiwgIlJFR0xBX05PTUVTX1BST0RVQ1RFIiwgIkVYUE9ORU5UU19TVU1BVFNfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJDReOTo0XjJcXGNkb3QgNF40PSg0Xjk6NF4yKVxcY2RvdCA0XjQ9NF57N31cXGNkb3QgNF57NH09NF57MTF9JCJdfQ=="
  },
  {
   "id": "41d",
   "ex": 41,
   "ap": "d",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Cada igualtat amaga un error. Troba'l i digues quin hauria de ser el resultat correcte.",
   "enunciat": "$(-2)^6\\cdot(-2)^3=\\left[(-2)\\cdot(-2)\\right]^{6+3}=4^9$",
   "opcions": [
    "No hi ha cap error: el resultat és $4^9=262\\,144$.",
    "L'error és l'exponent: hauria de ser $(-2)^{6\\cdot 3}$, no $(-2)^{6+3}$.",
    "L'error és haver canviat la base: en multiplicar potències de la mateixa base, la base es queda igual. És $(-2)^{6+3}=(-2)^9$, no es converteix en cap altre nombre.",
    "L'error és que l'exponent final hauria de ser positiu perquè les dues bases són negatives: $(-4)^9$."
   ],
   "pistes": [
    "En multiplicar potències de la mateixa base, què li passa a la base?",
    "La base es queda igual, $-2$; només se sumen els exponents."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTw60gcXVlIGhpIGhhIHVuIGVycm9yOiBsYSBiYXNlICQtMiQgcydoYSBjb252ZXJ0aXQgZW4gJDQkIHNlbnNlIGNhcCBtb3RpdS4gRW4gbXVsdGlwbGljYXIgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UsIGxhIGJhc2Ugbm8gY2FudmlhLiIsICJTdW1hciBlbHMgZXhwb25lbnRzIMOpcyBjb3JyZWN0ZSBhcXXDrTogw6lzIHVuIHByb2R1Y3RlIGRlIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBubyB1bmEgcG90w6huY2lhIGQndW5hIHBvdMOobmNpYS4gTCdlcnJvciDDqXMgYSBsYSBiYXNlLiIsICIiLCAiRWwgcHJvYmxlbWEgbm8gw6lzIGVsIHNpZ25lIGRlIGxhIGJhc2UgY29tYmluYWRhOiDDqXMgcXVlIG5vIHMnaGEgZGUgY29tYmluYXIgY2FwIGJhc2UuIExhIGJhc2UgZXMgcXVlZGEgdGFsIGNvbSBlcmEsICQtMiQuIl0sICJlcnIiOiBbIkNBUF9FUlJPUiIsICJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiLCAiIiwgIlBBUklUQVRfRVhQT05FTlQiXSwgInJlcyI6IFsiJCgtMileNlxcY2RvdCgtMileMz0oLTIpXns2KzN9PSgtMileOT0tNTEyJCJdfQ=="
  },
  {
   "id": "41e",
   "ex": 41,
   "ap": "e",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Cada igualtat amaga un error. Troba'l i digues quin hauria de ser el resultat correcte.",
   "enunciat": "$-3^2\\cdot 3^2=(-3)^{2+2}=(-3)^4=3^4$",
   "opcions": [
    "L'error és l'exponent final: hauria de ser $(-3)^{2\\cdot 2}$, no $(-3)^{2+2}$.",
    "L'error és que el resultat final hauria de ser $9^4$, combinant les dues bases.",
    "L'error és el primer pas: $-3^2$ vol dir $-(3^2)=-9$, no $(-3)^2=9$, perquè no hi ha parèntesi al voltant del $-3$. El resultat final ha de conservar el signe negatiu: $-3^4$, no $3^4$.",
    "No hi ha cap error: el resultat és $3^4=81$."
   ],
   "pistes": [
    "Sense parèntesi, el signe menys no forma part de la base: $-3^2=-(3^2)$.",
    "$-3^2\\cdot 3^2=(-9)\\cdot 9=-81$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTdW1hciBlbHMgZXhwb25lbnRzIMOpcyBjb3JyZWN0ZSBxdWFuIG11bHRpcGxpcXVlcyBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZS4gTCdlcnJvciDDqXMgbcOpcyBhbXVudCwgZW4gY29tIHMnaGEgbGxlZ2l0IGxhIHByaW1lcmEgcG90w6huY2lhLiIsICJMYSBiYXNlIG5vIHMnaGEgZGUgY29tYmluYXIgYW1iIGNhcCBhbHRyZSBub21icmU6IGVsIHByb2JsZW1hIMOpcyBkZSBzaWduZSwgbm8gZGUgYmFzZS4iLCAiIiwgIlPDrSBxdWUgaGkgaGEgdW4gZXJyb3I6ICQtM14yJCDDqXMgJC05JCwgbm8gJDkkLCBwZXJxdcOoIGVsIHNpZ25lIG1lbnlzIG5vIGZvcm1hIHBhcnQgZGUgbGEgYmFzZS4gRWwgcmVzdWx0YXQgZmluYWwgcydoYSBkZSBxdWVkYXIgbmVnYXRpdS4iXSwgImVyciI6IFsiRVhQT05FTlRTX01VTFRJUExJQ0FUUyIsICJCQVNFX0FMVEVSQURBIiwgIiIsICJDQVBfRVJST1IiXSwgInJlcyI6IFsiJC0zXjJcXGNkb3QgM14yPSgtOSlcXGNkb3QgOT0tODE9LTNeNCQiXX0="
  },
  {
   "id": "41f",
   "ex": 41,
   "ap": "f",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Cada igualtat amaga un error. Troba'l i digues quin hauria de ser el resultat correcte.",
   "enunciat": "$2\\cdot(-3)^2=\\left[2\\cdot(-3)\\right]^2=(-6)^2=6^2$",
   "opcions": [
    "L'error és el segon pas: l'exponent $2$ només afecta el $(-3)$, perquè és l'únic que l'acompanyava a l'enunciat. No es pot repartir cap al $2$, que no en tenia.",
    "L'error és que el resultat final s'hauria d'escriure com $-6^2$, amb el signe negatiu fora.",
    "L'error és el primer pas: $(-3)^2$ hauria de ser $-9$, no $9$.",
    "No hi ha cap error: el resultat és $6^2=36$."
   ],
   "pistes": [
    "L'exponent $2$ només afecta el número que té just al costat: el $(-3)$.",
    "Calcula primer $(-3)^2=9$. Després multiplica per $2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcHJvYmxlbWEgbm8gw6lzIGRlIHNpZ25lOiDDqXMgcXVlIGwnZXhwb25lbnQgbWFpIGhhdXJpYSBkJ2hhdmVyLXNlIHJlcGFydGl0IGNhcCBhbCAkMiQuIiwgIiQoLTMpXjI9OSQgc8OtIHF1ZSDDqXMgY29ycmVjdGU6IGwnZXhwb25lbnQgJDIkIMOpcyBwYXJlbGwuIEwnZXJyb3Igw6lzIGEgdW4gYWx0cmUgcGFzLiIsICJTw60gcXVlIGhpIGhhIHVuIGVycm9yOiBsJ2V4cG9uZW50IGRlICQoLTMpXjIkIHMnaGEgcmVwYXJ0aXQgY2FwIGFsICQyJCwgcXVlIG5vIGVuIHRlbmlhLiBFbCAkMiQgaSBlbCAkKC0zKV4yJCBzJ2hhbiBkZSBtdWx0aXBsaWNhciB0YWwgY29tIGVzdGFuLiJdLCAiZXJyIjogWyIiLCAiTUVOWVNfU0VOU0VfUEFSRU5URVNJIiwgIlBBUklUQVRfRVhQT05FTlQiLCAiQ0FQX0VSUk9SIl0sICJyZXMiOiBbIiQyXFxjZG90KC0zKV4yPTJcXGNkb3QgOT0xOCQiXX0="
  },
  {
   "id": "41g",
   "ex": 41,
   "ap": "g",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Cada igualtat amaga un error. Troba'l i digues quin hauria de ser el resultat correcte.",
   "enunciat": "$8^5\\cdot 8^7=(8+8)^{5+7}=16^{12}$",
   "opcions": [
    "L'error és que els exponents s'haurien de restar, no sumar: $8^{5-7}$.",
    "L'error és haver canviat la base: en multiplicar potències de la mateixa base, la base es queda igual. És $8^{5+7}=8^{12}$, no es converteix en $16$.",
    "L'error és l'exponent: hauria de ser $8^{5\\cdot 7}$, no $8^{5+7}$.",
    "No hi ha cap error: el resultat és $16^{12}$."
   ],
   "pistes": [
    "En multiplicar potències de la mateixa base, què li passa a la base?",
    "La base es queda igual, $8$; només se sumen els exponents."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTdW1hciBlbHMgZXhwb25lbnRzIMOpcyBjb3JyZWN0ZSBxdWFuIG11bHRpcGxpcXVlcyBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZS4gRWwgcHJvYmxlbWEgw6lzIGEgbGEgYmFzZSwgbm8gYWxzIGV4cG9uZW50cy4iLCAiIiwgIlN1bWFyIGVscyBleHBvbmVudHMgw6lzIGNvcnJlY3RlIGFxdcOtOiDDqXMgdW4gcHJvZHVjdGUgZGUgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UuIEwnZXJyb3Igw6lzIGEgbGEgYmFzZS4iLCAiU8OtIHF1ZSBoaSBoYSB1biBlcnJvcjogbGEgYmFzZSAkOCQgcydoYSBjb252ZXJ0aXQgZW4gJDE2JCBzZW5zZSBjYXAgbW90aXUuIEVuIG11bHRpcGxpY2FyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBsYSBiYXNlIG5vIGNhbnZpYS4iXSwgImVyciI6IFsiUkVHTEFfTk9NRVNfUVVPQ0lFTlQiLCAiIiwgIlBPVEVOQ0lBX1BPVEVOQ0lBX1NVTUFEQSIsICJDQVBfRVJST1IiXSwgInJlcyI6IFsiJDheNVxcY2RvdCA4Xjc9OF57NSs3fT04XnsxMn0kIl19"
  },
  {
   "id": "41h",
   "ex": 41,
   "ap": "h",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Cada igualtat amaga un error. Troba'l i digues quin hauria de ser el resultat correcte.",
   "enunciat": "$3^1\\cdot 3^0=3^{1\\cdot 0}=3^0=1$",
   "opcions": [
    "L'error és que $3^0$ val $0$, no $1$.",
    "L'error és el primer pas: en multiplicar potències de la mateixa base, els exponents se SUMEN, no es multipliquen. És $3^{1+0}=3^1$, no $3^{1\\cdot 0}$.",
    "L'error és la base: hauria de quedar $9^1$, no $3^0$.",
    "No hi ha cap error: el resultat és $1$."
   ],
   "pistes": [
    "Quan multipliques potències de la mateixa base, què els fas als exponents: sumar-los o multiplicar-los?",
    "$3^1\\cdot 3^0=3^{1+0}=3^1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkM14wPTEkIHPDrSBxdWUgw6lzIGNvcnJlY3RlOiBhcXVlc3RhIHBhcnQgw6lzIGNlcnRhLiBMJ2Vycm9yIMOpcyBtw6lzIGFtdW50LCBlbiBjb20gcydoYW4gY29tYmluYXQgZWxzIGV4cG9uZW50cy4iLCAiIiwgIkxhIGJhc2Ugbm8gw6lzIGVsIHByb2JsZW1hOiBlcyBxdWVkYSBpZ3VhbCwgJDMkLiBFbCBwcm9ibGVtYSDDqXMgbCdvcGVyYWNpw7MgcXVlIHMnaGEgZmV0IGFtYiBlbHMgZXhwb25lbnRzLiIsICJTw60gcXVlIGhpIGhhIHVuIGVycm9yOiBlbHMgZXhwb25lbnRzIHMnaGFuIG11bHRpcGxpY2F0IGVuIGxsb2MgZGUgc3VtYXItc2UuICQzXjFcXGNkb3QgM14wPTNeezErMH09M14xPTMkLCBubyAkMSQuIl0sICJlcnIiOiBbIkVYUE9ORU5UX1pFUk8iLCAiIiwgIkJBU0VfQUxURVJBREEiLCAiQ0FQX0VSUk9SIl0sICJyZXMiOiBbIiQzXjFcXGNkb3QgM14wPTNeezErMH09M14xPTMkIl19"
  },
  {
   "id": "42a",
   "ex": 42,
   "ap": "a",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Digues si cada igualtat és certa o falsa, i per què.",
   "enunciat": "$9^{-1}=-9$",
   "opcions": [
    "Fals: $9^{-1}=0$, perquè un exponent negatiu sempre dóna $0$.",
    "Fals: $9^{-1}=\\dfrac19$, l'invers de $9$, no el seu oposat $-9$.",
    "Fals: $9^{-1}=-\\dfrac19$, l'oposat de l'invers de $9$.",
    "Cert: un exponent negatiu fa que el resultat sigui negatiu."
   ],
   "pistes": [
    "Un exponent negatiu no fa \"negatiu\" el resultat: en fa l'invers.",
    "$9^{-1}=\\dfrac{1}{9^1}=\\dfrac19$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCB2ZXJlZGljdGUgKFwiZmFsc1wiKSDDqXMgY29ycmVjdGUsIHBlcsOyIG5vIHBlciBhcXVlc3QgbW90aXU6ICQ5XnstMX09XFxkZnJhYzE5JCwgbm8gJDAkLiIsICIiLCAiRWwgdmVyZWRpY3RlIMOpcyBjb3JyZWN0ZSwgcGVyw7IgJDleey0xfSQgw6lzIGwnaW52ZXJzIGRlICQ5JCAoJFxcZGZyYWMxOSQpLCBzZW5zZSBjYW52aWFyLWxpIGVsIHNpZ25lLiIsICJVbiBleHBvbmVudCBuZWdhdGl1IG5vIGZhIHF1ZSBlbCByZXN1bHRhdCBzaWd1aSBuZWdhdGl1LCBzaW7DsyBxdWUgZW4gZmEgbCdpbnZlcnM6ICQ5XnstMX09XFxkZnJhYzE5JCwgdW4gbm9tYnJlIHBvc2l0aXUuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIkVYUE9ORU5UX05FR0FUSVVfU0lHTkUiXSwgInJlcyI6IFsiJDleey0xfT1cXGRmcmFjMTkkLCBxdWUgbm8gw6lzICQtOSQ6IGxhIGlndWFsdGF0IMOpcyBmYWxzYSJdfQ=="
  },
  {
   "id": "42b",
   "ex": 42,
   "ap": "b",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Digues si cada igualtat és certa o falsa, i per què.",
   "enunciat": "$(-2)^{-4}=2^4$",
   "opcions": [
    "Fals: $(-2)^{-4}=\\dfrac{1}{(-2)^4}=\\dfrac1{16}$, i $2^4=16$: ni el valor ni si és invers o no coincideixen.",
    "Cert: com que l'exponent $-4$ és parell, els dos costats donen el mateix.",
    "Fals: $(-2)^{-4}=-16$, i $2^4=16$; els signes són diferents.",
    "Cert: $(-2)^{-4}$ i $2^4$ tenen la mateixa base en valor absolut, i l'exponent no hi afecta."
   ],
   "pistes": [
    "Calcula per separat cada costat: $(-2)^{-4}$ i $2^4$.",
    "$(-2)^{-4}=\\dfrac{1}{(-2)^4}=\\dfrac1{16}$, mentre que $2^4=16$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUXVlIGwnZXhwb25lbnQgc2lndWkgcGFyZWxsIGZhIHF1ZSAkKC0yKV57LTR9JCBzaWd1aSBwb3NpdGl1LCBwZXLDsiBjb250aW51YSBzZW50IGwnaW52ZXJzIGRlICQxNiQgKCRcXGRmcmFjMXsxNn0kKSwgbm8gJDE2JC4iLCAiRWwgdmVyZWRpY3RlIChcImZhbHNcIikgw6lzIGNvcnJlY3RlLCBwZXLDsiBubyBwZWwgc2lnbmU6ICQoLTIpXnstNH0kIMOpcyBwb3NpdGl1LCAkXFxkZnJhYzF7MTZ9JCwgbm8gJC0xNiQuIEVsIHByb2JsZW1hIMOpcyBxdWUgdW4gw6lzIGludmVycyBpIGwnYWx0cmUgbm8uIiwgIkwnZXhwb25lbnQgc8OtIHF1ZSBoaSBhZmVjdGE6ICQtNCQgZmEgcXVlIGVsIHJlc3VsdGF0IHNpZ3VpIGwnaW52ZXJzIGRlICQxNiQsIG5vICQxNiQuIl0sICJlcnIiOiBbIiIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiRVhQT05FTlRfTkVHQVRJVV9TSUdORSIsICJWRVJFRElDVEVfSU5WRVJUSVQiXSwgInJlcyI6IFsiJCgtMileey00fT1cXGRmcmFjMXsxNn0kIGkgJDJeND0xNiQ6IG5vIHPDs24gaWd1YWxzLCBsYSBpZ3VhbHRhdCDDqXMgZmFsc2EiXX0="
  },
  {
   "id": "42c",
   "ex": 42,
   "ap": "c",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Digues si cada igualtat és certa o falsa, i per què.",
   "enunciat": "$(-3)^{-6}=3^{-6}$",
   "opcions": [
    "Cert: l'exponent $6$ és parell, així que $(-3)^{-6}=\\dfrac{1}{(-3)^6}=\\dfrac{1}{3^6}=3^{-6}$.",
    "Cert, però només perquè els dos costats donen $0$.",
    "Fals: $(-3)^{-6}$ és negatiu perquè la base és negativa, i $3^{-6}$ és positiu.",
    "Fals: un exponent negatiu sempre canvia el signe del resultat, així que no poden ser iguals."
   ],
   "pistes": [
    "Calcula per separat cada costat, tenint en compte que $6$ és parell.",
    "$(-3)^{-6}=\\dfrac1{(-3)^6}$, i $(-3)^6=3^6$ perquè l'exponent és parell."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdmVyZWRpY3RlIChcImNlcnRcIikgw6lzIGNvcnJlY3RlLCBwZXLDsiBubyBwZXJxdcOoIGRvbmluICQwJDogdG90cyBkb3MgY29zdGF0cyB2YWxlbiAkXFxkZnJhY3sxfXs3Mjl9JC4iLCAiJCgtMyleey02fSQgbm8gw6lzIG5lZ2F0aXU6IGNvbSBxdWUgJDYkIMOpcyBwYXJlbGwsICQoLTMpXjYkIGphIMOpcyBwb3NpdGl1LCBpIGVsIHNldSBpbnZlcnMgdGFtYsOpIGhvIMOpcy4iLCAiVW4gZXhwb25lbnQgbmVnYXRpdSBubyBjYW52aWEgZWwgc2lnbmUgZGVsIHJlc3VsdGF0OiBlbiBmYSBsJ2ludmVycy4gQXF1w60gZWxzIGRvcyBjb3N0YXRzIGRvbmVuIGVsIG1hdGVpeCBub21icmUgcG9zaXRpdSwgJFxcZGZyYWMxezcyOX0kLiJdLCAiZXJyIjogWyIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlBBUklUQVRfRVhQT05FTlQiLCAiRVhQT05FTlRfTkVHQVRJVV9TSUdORSJdLCAicmVzIjogWyIkKC0zKV57LTZ9PVxcZGZyYWMxeygtMyleNn09XFxkZnJhYzF7M142fT0zXnstNn0kOiBsYSBpZ3VhbHRhdCDDqXMgY2VydGEiXX0="
  },
  {
   "id": "42d",
   "ex": 42,
   "ap": "d",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Digues si cada igualtat és certa o falsa, i per què.",
   "enunciat": "$(-3)^{-3}=(-3)^{-2}\\cdot 3^{-1}$",
   "opcions": [
    "Cert: com que $-2$ i $-1$ sumen $-3$, la igualtat es compleix per la regla del producte de potències.",
    "Cert: totes dues bases són $-3$, encara que una es vegi escrita com $3$.",
    "Fals: perquè $-2$ i $-1$ no sumen $-3$.",
    "Fals: $(-3)^{-3}=-\\dfrac1{27}$, però $(-3)^{-2}\\cdot 3^{-1}=\\dfrac19\\cdot\\dfrac13=\\dfrac1{27}$ (positiu): els signes no coincideixen perquè el segon factor de la dreta té base $3$, no $-3$."
   ],
   "pistes": [
    "Calcula per separat cada costat: no donis per fet que les bases de la dreta són totes $-3$.",
    "$(-3)^{-3}=-\\dfrac1{27}$. $(-3)^{-2}\\cdot 3^{-1}=\\dfrac19\\cdot\\dfrac13=\\dfrac1{27}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSByZWdsYSBkZSBzdW1hciBleHBvbmVudHMgbm9tw6lzIHZhbCBzaSBsYSBiYXNlIMOpcyBsYSBtYXRlaXhhIGFscyBkb3MgZmFjdG9ycywgaSBhcXXDrSB1bmEgw6lzICQtMyQgaSBsJ2FsdHJhIMOpcyAkMyQ6IG5vIGVzIHBvZGVuIGNvbWJpbmFyIGFpeMOtLiIsICJMZXMgYmFzZXMgbm8gc8OzbiBpZ3VhbHM6IHVuYSDDqXMgJC0zJCBpIGwnYWx0cmEgw6lzICQzJCwgaSBhaXjDsiBzw60gcXVlIGltcG9ydGEgcGVyIGFsIHNpZ25lIGRlbCByZXN1bHRhdC4iLCAiRWwgdmVyZWRpY3RlIChcImZhbHNcIikgw6lzIGNvcnJlY3RlLCBwZXLDsiAkLTIrKC0xKSQgc8OtIHF1ZSBmYSAkLTMkOiBlbCBwcm9ibGVtYSBubyDDqXMgYXF1ZXN0YSBzdW1hLCDDqXMgcXVlIGxlcyBiYXNlcyBkZWxzIGRvcyBmYWN0b3JzIG5vIGNvaW5jaWRlaXhlbi4iLCAiIl0sICJlcnIiOiBbIkJBU0VTX0RJRkVSRU5UU19DT01CSU5BREVTIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiIl0sICJyZXMiOiBbIiQoLTMpXnstM309LVxcZGZyYWMxezI3fSQgaSAkKC0zKV57LTJ9XFxjZG90IDNeey0xfT1cXGRmcmFjMXsyN30kOiBlbHMgc2lnbmVzIG5vIGNvaW5jaWRlaXhlbiwgbGEgaWd1YWx0YXQgw6lzIGZhbHNhIl19"
  },
  {
   "id": "42e",
   "ex": 42,
   "ap": "e",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Digues si cada igualtat és certa o falsa, i per què.",
   "enunciat": "$4^{-3}=(-4)^{-1}\\cdot(-4)^4$",
   "opcions": [
    "Cert: com que $-1+4=3$ i l'enunciat també té exponent $-3$, els dos costats es couen igual.",
    "Cert: totes dues expressions donen un nombre negatiu.",
    "Fals: $4^{-3}=\\dfrac1{64}$, però $(-4)^{-1}\\cdot(-4)^4=(-4)^{-1+4}=(-4)^3=-64$: ni el signe ni el valor coincideixen.",
    "Fals: perquè les bases $4$ i $-4$ no es poden combinar entre elles amb la regla de les potències."
   ],
   "pistes": [
    "Calcula per separat cada costat.",
    "$4^{-3}=\\dfrac1{64}$. $(-4)^{-1}\\cdot(-4)^4=(-4)^{-1+4}=(-4)^3=-64$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkMyQgaSAkLTMkIG5vIHPDs24gZWwgbWF0ZWl4IGV4cG9uZW50OiBsYSBkcmV0YSBkw7NuYSAkKC00KV4zPS02NCQsIGkgbCdlc3F1ZXJyYSBkw7NuYSAkNF57LTN9PVxcZGZyYWMxezY0fSQuIiwgIiQ0XnstM309XFxkZnJhYzF7NjR9JCDDqXMgcG9zaXRpdSwgbm8gbmVnYXRpdTogbGVzIGR1ZXMgZXhwcmVzc2lvbnMgbmkgdGFuIHNvbHMgdGVuZW4gZWwgbWF0ZWl4IHNpZ25lLiIsICIiLCAiRWwgdmVyZWRpY3RlIChcImZhbHNcIikgw6lzIGNvcnJlY3RlLCBwZXLDsiBlbHMgZG9zIGZhY3RvcnMgZGUgbGEgZHJldGEgY29tcGFydGVpeGVuIGJhc2UgKCQtNCQpIGkgc8OtIHF1ZSBlcyBwb2RlbiBjb21iaW5hciBlbnRyZSBlbGxzOyBlbCBwcm9ibGVtYSDDqXMgcXVlIGVsIHJlc3VsdGF0IG5vIGNvaW5jaWRlaXggYW1iIGVsIGRlIGwnZXNxdWVycmEsIHF1ZSB0w6kgYmFzZSAkNCQuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiIiwgIkJBU0VTX0RJRkVSRU5UU19DT01CSU5BREVTIl0sICJyZXMiOiBbIiQ0XnstM309XFxkZnJhYzF7NjR9JCBpICQoLTQpXnstMX1cXGNkb3QoLTQpXjQ9LTY0JDogbm8gY29pbmNpZGVpeGVuLCBsYSBpZ3VhbHRhdCDDqXMgZmFsc2EiXX0="
  },
  {
   "id": "42f",
   "ex": 42,
   "ap": "f",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Digues si cada igualtat és certa o falsa, i per què.",
   "enunciat": "$(2^{-5})^{-1}=2^{-6}$",
   "opcions": [
    "Fals: perquè cap potència amb exponent negatiu es pot elevar a un altre exponent negatiu.",
    "Cert: $(-5)+(-1)=-6$, que coincideix amb l'exponent del segon membre.",
    "Fals: $(2^{-5})^{-1}=2^{(-5)\\cdot(-1)}=2^5=32$, no $2^{-6}$: en una potència d'una potència els exponents es multipliquen, no se sumen.",
    "Cert: els dos exponents negatius es couen i el resultat es queda negatiu."
   ],
   "pistes": [
    "En una potència d'una potència, què es fa amb els exponents: sumar-los o multiplicar-los?",
    "$(2^{-5})^{-1}=2^{(-5)\\cdot(-1)}=2^5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB2ZXJlZGljdGUgKFwiZmFsc1wiKSDDqXMgY29ycmVjdGUsIHBlcsOyIHPDrSBxdWUgZXMgcG90IGVsZXZhciB1bmEgcG90w6huY2lhIGQnZXhwb25lbnQgbmVnYXRpdSBhIHVuIGFsdHJlIGV4cG9uZW50IG5lZ2F0aXU6IGTDs25hICQoMl57LTV9KV57LTF9PTJeNT0zMiQuIiwgIkVuIHVuYSBwb3TDqG5jaWEgZCd1bmEgcG90w6huY2lhIGVscyBleHBvbmVudHMgZXMgbXVsdGlwbGlxdWVuLCBubyBzZSBzdW1lbjogJCgtNSlcXGNkb3QoLTEpPTUkLCBubyAkLTYkLiIsICIiLCAiRWwgcmVzdWx0YXQgbm8gZXMgcXVlZGEgbmVnYXRpdTogJCgyXnstNX0pXnstMX09Ml41PTMyJCwgdW4gbm9tYnJlIHBvc2l0aXUuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkKDJeey01fSleey0xfT0yXnsoLTUpXFxjZG90KC0xKX09Ml41PTMyJCwgbm8gJDJeey02fSQ6IGxhIGlndWFsdGF0IMOpcyBmYWxzYSJdfQ=="
  },
  {
   "id": "43a",
   "ex": 43,
   "ap": "a",
   "bloc": "verifica",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa com a potència única.",
   "enunciat": "$(2^3)^4$",
   "opcions": [
    "$2^{7}$",
    "$144$",
    "$2^{3}$",
    "$2^{12}$"
   ],
   "pistes": [
    "Potència d'una potència: multiplica els exponents, no els sumis.",
    "$(2^3)^4=2^{3\\cdot 4}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiB1bmEgcG90w6huY2lhIGQndW5hIHBvdMOobmNpYSwgZWxzIGV4cG9uZW50cyBlcyBNVUxUSVBMSVFVRU4sIG5vIHNlIHN1bWVuOiAkKGFebSlebj1hXnttXFxjZG90IG59JC4iLCAiVW4gY29wIHNpbXBsaWZpY2F0IGEgJDJeezEyfSQsIGhhcyBjYW52aWF0IGRlIGxsb2MgbGEgYmFzZSBpIGwnZXhwb25lbnQuIiwgIkhhcyBpZ25vcmF0IGwnZXhwb25lbnQgZXh0ZXJpb3IsICQ0JC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiIl0sICJlcnIiOiBbIlBPVEVOQ0lBX1BPVEVOQ0lBX1NVTUFEQSIsICJCQVNFX0VYUE9ORU5UX0lOVEVSQ0FOVklBVFMiLCAiRkFDVE9SX09CTElEQVQiLCAiIl0sICJyZXMiOiBbIiQoMl4zKV40PTJeezNcXGNkb3QgNH09Ml57MTJ9JCJdfQ=="
  },
  {
   "id": "43b",
   "ex": 43,
   "ap": "b",
   "bloc": "verifica",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa com a potència única.",
   "enunciat": "$\\left[(-3)^3\\right]^2$",
   "opcions": [
    "$(-3)^{5}$",
    "$(-3)^{6}$",
    "$(-3)^{3}$",
    "$(-3)^{9}$"
   ],
   "pistes": [
    "Potència d'una potència: multiplica els exponents, no els sumis.",
    "$[(-3)^3]^2=(-3)^{3\\cdot 2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbiB1bmEgcG90w6huY2lhIGQndW5hIHBvdMOobmNpYSwgZWxzIGV4cG9uZW50cyBlcyBNVUxUSVBMSVFVRU4sIG5vIHNlIHN1bWVuOiAkKGFebSlebj1hXnttXFxjZG90IG59JC4iLCAiIiwgIkhhcyBpZ25vcmF0IGwnZXhwb25lbnQgZXh0ZXJpb3IsICQyJC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiSGFzIGNhbGN1bGF0IGwnZXhwb25lbnQgbm91IGNvbSAkM14yPTkkIGVuIGxsb2MgZGUgJDNcXGNkb3QgMj02JDogYWxzIGV4cG9uZW50cyBlcyBjb3VlbiBjb20gdW4gcHJvZHVjdGUgbm9ybWFsLCAkM1xcY2RvdCAyJCwgbm8gY29tIHVuYSBhbHRyYSBwb3TDqG5jaWEuIl0sICJlcnIiOiBbIlBPVEVOQ0lBX1BPVEVOQ0lBX1NVTUFEQSIsICIiLCAiRkFDVE9SX09CTElEQVQiLCAiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIl0sICJyZXMiOiBbIiRbKC0zKV4zXV4yPSgtMyleezNcXGNkb3QgMn09KC0zKV57Nn0kIl19"
  },
  {
   "id": "43c",
   "ex": 43,
   "ap": "c",
   "bloc": "verifica",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa com a potència única.",
   "enunciat": "$\\left[-6^4\\right]^3$",
   "opcions": [
    "$6^{12}$",
    "$-6^{4}$",
    "$-6^{12}$",
    "$-6^{7}$"
   ],
   "pistes": [
    "$-6^4$ vol dir $-(6^4)$: la base és $6$, amb un signe menys al davant.",
    "$\\left[-(6^4)\\right]^3=-\\left[(6^4)^3\\right]=-6^{4\\cdot 3}$ (l'exponent exterior és senar, així que el signe es queda)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTZW5zZSBwYXLDqG50ZXNpLCBlbCAkLTZeNCQgZGUgZGlucyB2b2wgZGlyICQtKDZeNCkkLCBubyAkKC02KV40JDogbGEgYmFzZSDDqXMgJDYkLCBpIGVsIHNpZ25lIG1lbnlzIMOpcyBhcGFydC4gQ29tIHF1ZSBsJ2V4cG9uZW50IGV4dGVyaW9yIMOpcyBzZW5hciwgZWwgcmVzdWx0YXQgZmluYWwgcydoYSBkZSBxdWVkYXIgbmVnYXRpdS4iLCAiSGFzIGlnbm9yYXQgbCdleHBvbmVudCBleHRlcmlvciwgJDMkLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiIsICIiLCAiRW4gdW5hIHBvdMOobmNpYSBkJ3VuYSBwb3TDqG5jaWEsIGVscyBleHBvbmVudHMgZXMgTVVMVElQTElRVUVOLCBubyBzZSBzdW1lbjogJChhXm0pXm49YV57bVxcY2RvdCBufSQuIl0sICJlcnIiOiBbIk1FTllTX1NFTlNFX1BBUkVOVEVTSSIsICJGQUNUT1JfT0JMSURBVCIsICIiLCAiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIl0sICJyZXMiOiBbIiQtNl40PS0oNl40KSQ7ICRcXGxlZnRbLSg2XjQpXFxyaWdodF1eMz0tXFxsZWZ0KDZeezRcXGNkb3QgM31cXHJpZ2h0KT0tNl57MTJ9JCJdfQ=="
  },
  {
   "id": "43d",
   "ex": 43,
   "ap": "d",
   "bloc": "verifica",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa com a potència única.",
   "enunciat": "$\\left[\\left(\\dfrac{1}{3}\\right)^2\\right]^4$",
   "opcions": [
    "$(\\dfrac{1}{3})^{8}$",
    "$3^{8}$",
    "$(\\dfrac{1}{3})^{6}$",
    "$(\\dfrac{1}{3})^{2}$"
   ],
   "pistes": [
    "Potència d'una potència: multiplica els exponents, no els sumis.",
    "$\\left[\\left(\\dfrac13\\right)^2\\right]^4=\\left(\\dfrac13\\right)^{2\\cdot 4}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludmVydGl0IGxhIGZyYWNjacOzIGRlIGxhIGJhc2U6IGVzIHF1ZWRhICRcXGRmcmFjMTMkLCBubyBlcyBjb252ZXJ0ZWl4IGVuICQzJC4iLCAiRW4gdW5hIHBvdMOobmNpYSBkJ3VuYSBwb3TDqG5jaWEsIGVscyBleHBvbmVudHMgZXMgTVVMVElQTElRVUVOLCBubyBzZSBzdW1lbjogJChhXm0pXm49YV57bVxcY2RvdCBufSQuIiwgIkhhcyBpZ25vcmF0IGwnZXhwb25lbnQgZXh0ZXJpb3IsICQ0JC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iXSwgImVyciI6IFsiIiwgIklOVkVSVElEQSIsICJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiLCAiRkFDVE9SX09CTElEQVQiXSwgInJlcyI6IFsiJFxcbGVmdFtcXGxlZnQoXFxkZnJhYzEzXFxyaWdodCleMlxccmlnaHRdXjQ9XFxsZWZ0KFxcZGZyYWMxM1xccmlnaHQpXnsyXFxjZG90IDR9PVxcbGVmdChcXGRmcmFjMTNcXHJpZ2h0KV57OH0kIl19"
  },
  {
   "id": "43e",
   "ex": 43,
   "ap": "e",
   "bloc": "verifica",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa com a potència única.",
   "enunciat": "$\\left[\\left(-\\dfrac{3}{5}\\right)^3\\right]^5$",
   "opcions": [
    "$(-\\dfrac{3}{5})^{15}$",
    "$(-\\dfrac{3}{5})^{8}$",
    "$(-\\dfrac{3}{5})^{3}$",
    "$(\\dfrac{3}{5})^{15}$"
   ],
   "pistes": [
    "Potència d'una potència: multiplica els exponents, no els sumis.",
    "$\\left[\\left(-\\dfrac35\\right)^3\\right]^5=\\left(-\\dfrac35\\right)^{3\\cdot 5}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRW4gdW5hIHBvdMOobmNpYSBkJ3VuYSBwb3TDqG5jaWEsIGVscyBleHBvbmVudHMgZXMgTVVMVElQTElRVUVOLCBubyBzZSBzdW1lbjogJChhXm0pXm49YV57bVxcY2RvdCBufSQuIiwgIkhhcyBpZ25vcmF0IGwnZXhwb25lbnQgZXh0ZXJpb3IsICQ1JC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiRWwgcmVzdWx0YXQgaGEgZGUgY29uc2VydmFyIGxhIGJhc2UgdGFsIGNvbSBlcmEsICQtXFxkZnJhYzM1JCwgbm8gJFxcZGZyYWMzNSQ6IGwnZXhwb25lbnQgZmluYWwsICQxNSQsIMOpcyBzZW5hci4iXSwgImVyciI6IFsiIiwgIlBPVEVOQ0lBX1BPVEVOQ0lBX1NVTUFEQSIsICJGQUNUT1JfT0JMSURBVCIsICJCQVNFX1NJR05FX1BFUkRVVCJdLCAicmVzIjogWyIkXFxsZWZ0W1xcbGVmdCgtXFxkZnJhYzM1XFxyaWdodCleM1xccmlnaHRdXjU9XFxsZWZ0KC1cXGRmcmFjMzVcXHJpZ2h0KV57M1xcY2RvdCA1fT1cXGxlZnQoLVxcZGZyYWMzNVxccmlnaHQpXnsxNX0kIl19"
  },
  {
   "id": "43f",
   "ex": 43,
   "ap": "f",
   "bloc": "verifica",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa com a potència única.",
   "enunciat": "$\\left[-5^2\\right]^4$",
   "opcions": [
    "$-5^{2}$",
    "$-5^{8}$",
    "$-5^{6}$",
    "$5^{8}$"
   ],
   "pistes": [
    "$-5^2$ vol dir $-(5^2)$, un nombre negatiu. L'exponent exterior, $4$, és parell.",
    "Un nombre negatiu elevat a un exponent parell dóna positiu: el signe desapareix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgaWdub3JhdCBsJ2V4cG9uZW50IGV4dGVyaW9yLCAkNCQuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIiwgIiQtNV4yJCB2YWwgJC0oNV4yKSQsIHVuIG5vbWJyZSBuZWdhdGl1LCBwZXLDsiBsJ2V4cG9uZW50IGV4dGVyaW9yLCAkNCQsIMOpcyBwYXJlbGw6IGVsIHNpZ25lIG5lZ2F0aXUgZGVzYXBhcmVpeCBlbiBlbGV2YXItbG8gYSB1biBleHBvbmVudCBwYXJlbGwuIiwgIkVuIHVuYSBwb3TDqG5jaWEgZCd1bmEgcG90w6huY2lhLCBlbHMgZXhwb25lbnRzIGVzIE1VTFRJUExJUVVFTiwgbm8gc2Ugc3VtZW46ICQoYV5tKV5uPWFee21cXGNkb3Qgbn0kLiIsICIiXSwgImVyciI6IFsiRkFDVE9SX09CTElEQVQiLCAiUEFSSVRBVF9FWFBPTkVOVCIsICJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiLCAiIl0sICJyZXMiOiBbIiQtNV4yPS0oNV4yKSQsIG5lZ2F0aXU7ICRcXGxlZnRbLSg1XjIpXFxyaWdodF1eNCQgdMOpIGV4cG9uZW50IGV4dGVyaW9yIHBhcmVsbCwgYWl4w60gcXVlIGVsIHJlc3VsdGF0IMOpcyBwb3NpdGl1OiAkNV57MlxcY2RvdCA0fT01Xns4fSQiXX0="
  },
  {
   "id": "44a",
   "ex": 44,
   "ap": "a",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de cada expressió.",
   "enunciat": "$\\left[(-3)^2\\right]^2\\cdot\\left[(-3)^3\\right]^3$",
   "opcions": [
    "$-19683$",
    "$-1594323$",
    "$1594323$",
    "$59049$"
   ],
   "pistes": [
    "Potència d'una potència a cada claudàtor: multiplica els exponents de cada un.",
    "$[(-3)^2]^2=(-3)^4$ i $[(-3)^3]^3=(-3)^9$. Multiplica'ls: suma els exponents, $4+9=13$, senar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIGZhY3RvciAkXFxsZWZ0WygtMyleMlxccmlnaHRdXjIkLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiIsICIiLCAiRWwgcmVzdWx0YXQgaGEgZGUgY29uc2VydmFyIGxhIGJhc2UgdGFsIGNvbSBlcmEsIGFtYiBlbCBzZXUgc2lnbmUuIiwgIkVuIHVuYSBwb3TDqG5jaWEgZCd1bmEgcG90w6huY2lhLCBlbHMgZXhwb25lbnRzIGVzIE1VTFRJUExJUVVFTiwgbm8gc2Ugc3VtZW46ICQoYV5tKV5uPWFee21cXGNkb3Qgbn0kLiJdLCAiZXJyIjogWyJGQUNUT1JfT0JMSURBVCIsICIiLCAiQkFTRV9TSUdORV9QRVJEVVQiLCAiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIl0sICJyZXMiOiBbIiRbKC0zKV4yXV4yPSgtMyleNCQsICRbKC0zKV4zXV4zPSgtMyleOSQsIGkgJCgtMyleNFxcY2RvdCgtMyleOT0oLTMpXnsxM309LTFcXCw1OTRcXCwzMjMkIl19"
  },
  {
   "id": "44b",
   "ex": 44,
   "ap": "b",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de cada expressió.",
   "enunciat": "$\\left[5^8\\right]^2:\\left[(-5)^4\\right]^3$",
   "opcions": [
    "$37252902984619140625$",
    "$152587890625$",
    "$-125$",
    "$625$"
   ],
   "pistes": [
    "Potència d'una potència a cada claudàtor: multiplica els exponents de cada un.",
    "$[5^8]^2=5^{16}$ i $[(-5)^4]^3=(-5)^{12}=5^{12}$ (l'exponent $12$ és parell). Divideix: resta els exponents."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiBkaXZpZGlyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIGVzIFJFU1RFTiwgbm8gc2Ugc3VtZW46ICRhXm06YV5uPWFee20tbn0kLiIsICJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIGRpdmlzb3IsICRcXGxlZnRbKC01KV40XFxyaWdodF1eMyQuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIiwgIkVuIHVuYSBwb3TDqG5jaWEgZCd1bmEgcG90w6huY2lhLCBlbHMgZXhwb25lbnRzIGVzIE1VTFRJUExJUVVFTiwgbm8gc2Ugc3VtZW46ICQoYV5tKV5uPWFee21cXGNkb3Qgbn0kLiIsICIiXSwgImVyciI6IFsiRVhQT05FTlRTX1NVTUFUU19RVU9DSUVOVCIsICJGQUNUT1JfT0JMSURBVCIsICJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiLCAiIl0sICJyZXMiOiBbIiRbNV44XV4yPTVeezE2fSQsICRbKC01KV40XV4zPSgtNSleezEyfT01XnsxMn0kLCBpICQ1XnsxNn06NV57MTJ9PTVeezR9PTYyNSQiXX0="
  },
  {
   "id": "45a",
   "ex": 45,
   "ap": "a",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$(-2)^{-4}\\cdot\\left[(-2)^2\\right]^3$",
   "opcions": [
    "$-2$",
    "$64$",
    "$4$",
    "$-1024$"
   ],
   "pistes": [
    "Potència d'una potència primer: $\\left[(-2)^2\\right]^3=(-2)^{2\\cdot 3}=(-2)^6$.",
    "$(-2)^{-4}\\cdot(-2)^6=(-2)^{-4+6}=(-2)^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbCBjbGF1ZMOgdG9yIGhhcyBzdW1hdCBlbHMgZXhwb25lbnRzICQyJCBpICQzJCBlbiBsbG9jIGRlIG11bHRpcGxpY2FyLWxvcyBwcmltZXIuIiwgIlQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gZWwgcHJpbWVyIGZhY3RvciwgJCgtMileey00fSQuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIiwgIiIsICJIYXMgdHJhY3RhdCAkKC0yKV57LTR9JCBjb20gJC0oMl40KT0tMTYkLCBlbiBsbG9jIGRlIGNvbSBsJ2ludmVycywgJFxcZGZyYWN7MX17MTZ9JC4iXSwgImVyciI6IFsiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIiwgIkZBQ1RPUl9PQkxJREFUIiwgIiIsICJFWFBPTkVOVF9ORUdBVElVX1NJR05FIl0sICJyZXMiOiBbIiRcXGxlZnRbKC0yKV4yXFxyaWdodF1eMz0oLTIpXjYkLCBpICQoLTIpXnstNH1cXGNkb3QoLTIpXjY9KC0yKV57Mn09NCQiXX0="
  },
  {
   "id": "45b",
   "ex": 45,
   "ap": "b",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$3^4\\cdot\\left[(-3)^2\\right]^{-2}$",
   "opcions": [
    "$81$",
    "$-6561$",
    "$\\dfrac{1}{81}$",
    "$1$"
   ],
   "pistes": [
    "Potència d'una potència primer: $\\left[(-3)^2\\right]^{-2}=(-3)^{2\\cdot(-2)}=(-3)^{-4}$.",
    "$3^4\\cdot(-3)^{-4}$: com que $(-3)^{-4}=3^{-4}$ (exponent $-4$, parell), $3^4\\cdot 3^{-4}=3^0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbCBjbGF1ZMOgdG9yIGhhcyBzdW1hdCBlbHMgZXhwb25lbnRzICQyJCBpICQtMiQgZW4gbGxvYyBkZSBtdWx0aXBsaWNhci1sb3MuIiwgIkhhcyB0cmFjdGF0ICRcXGxlZnRbKC0zKV4yXFxyaWdodF1eey0yfSQgY29tIGwnb3Bvc2F0IGRlICRcXGxlZnRbKC0zKV4yXFxyaWdodF1eMiQsIGVuIGxsb2MgZGUgY29tIGVsIHNldSBpbnZlcnMuIiwgIlQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gZWwgcHJpbWVyIGZhY3RvciwgJDNeNCQuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIiwgIiJdLCAiZXJyIjogWyJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiLCAiRVhQT05FTlRfTkVHQVRJVV9TSUdORSIsICJGQUNUT1JfT0JMSURBVCIsICIiXSwgInJlcyI6IFsiJFxcbGVmdFsoLTMpXjJcXHJpZ2h0XV57LTJ9PSgtMyleey00fT0zXnstNH0kLCBpICQzXjRcXGNkb3QgM157LTR9PTNeezB9PTEkIl19"
  },
  {
   "id": "45c",
   "ex": 45,
   "ap": "c",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$(-8)^3\\cdot 2^{-4}$",
   "opcions": [
    "$-\\dfrac{1}{16}$",
    "$32$",
    "$8192$",
    "$-32$"
   ],
   "pistes": [
    "$-8$ i $2$ són bases diferents: no es poden combinar amb la regla de les potències. Calcula cada potència per separat.",
    "$(-8)^3=-512$ (l'exponent $3$ és senar). $2^{-4}=\\dfrac1{16}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMZXMgYmFzZXMgc8OzbiBkaWZlcmVudHM6IGxhIHJlZ2xhIGRlIGNvbWJpbmFyIGV4cG9uZW50cyAoc3VtYXItbG9zIG8gcmVzdGFyLWxvcykgbm9tw6lzIHZhbCBxdWFuIGxhIGJhc2Ugw6lzIGxhIG1hdGVpeGEgYWxzIGRvcyBmYWN0b3JzLiIsICIkKC04KV4zJCBlcyBxdWVkYSBuZWdhdGl1OiBsJ2V4cG9uZW50ICQzJCDDqXMgc2VuYXIsIGFpeMOtIHF1ZSBlbCBzaWduZSBubyBkZXNhcGFyZWl4LiIsICJIYXMgdHJhY3RhdCAkMl57LTR9JCBjb20gJC0oMl40KT0tMTYkLCBlbiBsbG9jIGRlIGNvbSBsJ2ludmVycywgJFxcZGZyYWN7MX17MTZ9JC4iLCAiIl0sICJlcnIiOiBbIkJBU0VTX0RJRkVSRU5UU19DT01CSU5BREVTIiwgIlBBUklUQVRfRVhQT05FTlQiLCAiRVhQT05FTlRfTkVHQVRJVV9TSUdORSIsICIiXSwgInJlcyI6IFsiJCgtOCleMz0tNTEyJCBpICQyXnstNH09XFxkZnJhYzF7MTZ9JDsgJC01MTJcXGNkb3RcXGRmcmFjMXsxNn09LTMyJCJdfQ=="
  },
  {
   "id": "45d",
   "ex": 45,
   "ap": "d",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$(-2)^{-3}\\cdot 2^{-3}$",
   "opcions": [
    "$\\dfrac{1}{4096}$",
    "$-\\dfrac{1}{64}$",
    "$-\\dfrac{1}{8}$",
    "$-64$"
   ],
   "pistes": [
    "$-2$ i $2$ són bases diferents: calcula cada potència per separat.",
    "$(-2)^{-3}=-\\dfrac18$ (l'exponent $3$ de dins és senar). $2^{-3}=\\dfrac18$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMZXMgYmFzZXMgc8OzbiBkaWZlcmVudHM6IGxhIHJlZ2xhIGRlIGNvbWJpbmFyIGV4cG9uZW50cyAoc3VtYXItbG9zIG8gcmVzdGFyLWxvcykgbm9tw6lzIHZhbCBxdWFuIGxhIGJhc2Ugw6lzIGxhIG1hdGVpeGEgYWxzIGRvcyBmYWN0b3JzLiIsICIiLCAiVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbCBzZWdvbiBmYWN0b3IsICQyXnstM30kLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiIsICJIYXMgdHJhY3RhdCBlbHMgZXhwb25lbnRzIG5lZ2F0aXVzIGNvbSB1biBjYW52aSBkZSBzaWduZSBkZWwgdmFsb3IsIGVuIGxsb2MgZGUgY29tIGwnaW52ZXJzLiJdLCAiZXJyIjogWyJCQVNFU19ESUZFUkVOVFNfQ09NQklOQURFUyIsICIiLCAiRkFDVE9SX09CTElEQVQiLCAiRVhQT05FTlRfTkVHQVRJVV9TSUdORSJdLCAicmVzIjogWyIkKC0yKV57LTN9PS1cXGRmcmFjMTgkIGkgJDJeey0zfT1cXGRmcmFjMTgkOyAkLVxcZGZyYWMxOFxcY2RvdFxcZGZyYWMxOD0tXFxkZnJhYzF7NjR9JCJdfQ=="
  },
  {
   "id": "45e",
   "ex": 45,
   "ap": "e",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$-2^{-3}\\cdot\\left(-2^{-4}\\right)$",
   "opcions": [
    "$\\dfrac{1}{2}$",
    "$-\\dfrac{1}{128}$",
    "$-\\dfrac{1}{8}$",
    "$\\dfrac{1}{128}$"
   ],
   "pistes": [
    "$-2^{-3}$ i $-2^{-4}$ volen dir $-(2^{-3})$ i $-(2^{-4})$: la base és $2$ als dos, amb un signe menys apart.",
    "$-(2^{-3})=-\\dfrac18$ i $-(2^{-4})=-\\dfrac1{16}$. El producte de dos negatius és positiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgdHJhY3RhdCAkMl57LTN9JCBjb20gJDJeMyQsIG9ibGlkYW50IHF1ZSB1biBleHBvbmVudCBuZWdhdGl1IHZvbCBkaXIgbCdpbnZlcnMuIiwgIkFsIHNlZ29uIGZhY3RvciwgJC0yXnstNH0kIHZvbCBkaXIgJC0oMl57LTR9KSQ6IGxhIGJhc2Ugw6lzICQyJCwgaSBlbCBzaWduZSBtZW55cyDDqXMgYXBhcnQsIG5vIGZvcm1hIHBhcnQgZGUgbGEgYmFzZS4iLCAiVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbCBzZWdvbiBmYWN0b3IsICQtMl57LTR9JC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiIl0sICJlcnIiOiBbIkVYUE9ORU5UX05FR0FUSVVfU0lHTkUiLCAiTUVOWVNfU0VOU0VfUEFSRU5URVNJIiwgIkZBQ1RPUl9PQkxJREFUIiwgIiJdLCAicmVzIjogWyIkLTJeey0zfT0tXFxkZnJhYzE4JCBpICQtMl57LTR9PS1cXGRmcmFjMXsxNn0kOyAkXFxsZWZ0KC1cXGRmcmFjMThcXHJpZ2h0KVxcY2RvdFxcbGVmdCgtXFxkZnJhYzF7MTZ9XFxyaWdodCk9XFxkZnJhYzF7MTI4fSQiXX0="
  },
  {
   "id": "45f",
   "ex": 45,
   "ap": "f",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$\\left(-2^6\\right)\\cdot\\left(-2^{-6}\\right)$",
   "opcions": [
    "$-64$",
    "$1$",
    "$-1$",
    "$4096$"
   ],
   "pistes": [
    "$-2^6$ i $-2^{-6}$ volen dir $-(2^6)$ i $-(2^{-6})$: la base és $2$ als dos.",
    "$-(2^6)=-64$ i $-(2^{-6})=-\\dfrac1{64}$. El producte de dos negatius és positiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIHNlZ29uIGZhY3RvciwgJC0yXnstNn0kLiBUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIHVuIGRlbHMgZmFjdG9ycyBlbiBjb21iaW5hciBlbHMgZXhwb25lbnRzLiIsICIiLCAiQWwgcHJpbWVyIGZhY3RvciwgJC0yXjYkIHZvbCBkaXIgJC0oMl42KSQ6IGxhIGJhc2Ugw6lzICQyJCwgaSBlbCBzaWduZSBtZW55cyDDqXMgYXBhcnQsIG5vIGZvcm1hIHBhcnQgZGUgbGEgYmFzZS4iLCAiSGFzIHRyYWN0YXQgJDJeey02fSQgY29tICQyXjYkLCBvYmxpZGFudCBxdWUgdW4gZXhwb25lbnQgbmVnYXRpdSB2b2wgZGlyIGwnaW52ZXJzLiJdLCAiZXJyIjogWyJGQUNUT1JfT0JMSURBVCIsICIiLCAiTUVOWVNfU0VOU0VfUEFSRU5URVNJIiwgIkVYUE9ORU5UX05FR0FUSVVfU0lHTkUiXSwgInJlcyI6IFsiJC0yXjY9LTY0JCBpICQtMl57LTZ9PS1cXGRmcmFjMXs2NH0kOyAkKC02NClcXGNkb3RcXGxlZnQoLVxcZGZyYWMxezY0fVxccmlnaHQpPTEkIl19"
  },
  {
   "id": "45g",
   "ex": 45,
   "ap": "g",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$(-3)^4\\cdot\\left(-3^4\\right)$",
   "opcions": [
    "$-6561$",
    "$81$",
    "$-81$",
    "$6561$"
   ],
   "pistes": [
    "$(-3)^4$ té la base $-3$ (amb parèntesi); $-3^4$ vol dir $-(3^4)$, base $3$ amb un signe menys apart.",
    "$(-3)^4=81$ (positiu, exponent parell). $-3^4=-81$ (negatiu)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbCBzZWdvbiBmYWN0b3IsICQtM140JC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbCBwcmltZXIgZmFjdG9yLCAkKC0zKV40JC4gVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSB1biBkZWxzIGZhY3RvcnMgZW4gY29tYmluYXIgZWxzIGV4cG9uZW50cy4iLCAiQWwgc2Vnb24gZmFjdG9yLCAkLTNeNCQgdm9sIGRpciAkLSgzXjQpJDogbGEgYmFzZSDDqXMgJDMkLCBpIGVsIHNpZ25lIG1lbnlzIMOpcyBhcGFydC4gTm8gw6lzIGVsIG1hdGVpeCBxdWUgJCgtMyleNCQuIl0sICJlcnIiOiBbIiIsICJGQUNUT1JfT0JMSURBVCIsICJGQUNUT1JfT0JMSURBVCIsICJNRU5ZU19TRU5TRV9QQVJFTlRFU0kiXSwgInJlcyI6IFsiJCgtMyleND04MSQgaSAkLTNeND0tODEkOyAkODFcXGNkb3QoLTgxKT0tNjU2MSQiXX0="
  },
  {
   "id": "45h",
   "ex": 45,
   "ap": "h",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol.",
   "enunciat": "$4^{-3}\\cdot 2^{-2}$",
   "opcions": [
    "$\\dfrac{1}{64}$",
    "$\\dfrac{1}{32768}$",
    "$256$",
    "$\\dfrac{1}{256}$"
   ],
   "pistes": [
    "$4$ i $2$ són bases diferents: calcula cada potència per separat.",
    "$4^{-3}=\\dfrac1{64}$. $2^{-2}=\\dfrac14$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsIHNlZ29uIGZhY3RvciwgJDJeey0yfSQuIFQnaGFzIGRlaXhhdCBwZWwgY2Ftw60gdW4gZGVscyBmYWN0b3JzIGVuIGNvbWJpbmFyIGVscyBleHBvbmVudHMuIiwgIkxlcyBiYXNlcyBzw7NuIGRpZmVyZW50czogbGEgcmVnbGEgZGUgY29tYmluYXIgZXhwb25lbnRzIChzdW1hci1sb3MgbyByZXN0YXItbG9zKSBub23DqXMgdmFsIHF1YW4gbGEgYmFzZSDDqXMgbGEgbWF0ZWl4YSBhbHMgZG9zIGZhY3RvcnMuIiwgIkhhcyB0cmFjdGF0IGVscyBleHBvbmVudHMgbmVnYXRpdXMgY29tIHVuIGNhbnZpIGRlIHNpZ25lIGRlbCB2YWxvciwgZW4gbGxvYyBkZSBjb20gbCdpbnZlcnMuIiwgIiJdLCAiZXJyIjogWyJGQUNUT1JfT0JMSURBVCIsICJCQVNFU19ESUZFUkVOVFNfQ09NQklOQURFUyIsICJFWFBPTkVOVF9ORUdBVElVX1NJR05FIiwgIiJdLCAicmVzIjogWyIkNF57LTN9PVxcZGZyYWMxezY0fSQgaSAkMl57LTJ9PVxcZGZyYWMxNCQ7ICRcXGRmcmFjMXs2NH1cXGNkb3RcXGRmcmFjMTQ9XFxkZnJhYzF7MjU2fSQiXX0="
  },
  {
   "id": "46a",
   "ex": 46,
   "ap": "a",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Completa les igualtats.",
   "enunciat": "$\\left[(-5)^3\\right]^{\\square}:(-5)^7=(-5)^5$",
   "opcions": [
    "$\\dfrac{2}{3}$",
    "$9$",
    "$\\dfrac{5}{3}$",
    "$4$"
   ],
   "pistes": [
    "Potència d'una potència: l'exponent del claudàtor és $3\\cdot\\square$. Planteja l'equació dels exponents: $3\\square-7=5$.",
    "$3\\square=5+7=12$. Aïlla $\\square$: $\\square=12:3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgcGxhbnRlamF0IGwnZXF1YWNpw7MgYSBsJ2lucmV2w6lzOiDDqXMgJDNcXHNxdWFyZS03PTUkLCBubyAkNy01PTNcXHNxdWFyZSQuIiwgIkhhcyBwbGFudGVqYXQgbCdleHBvbmVudCBkZWwgY2xhdWTDoHRvciBjb20gJDMrXFxzcXVhcmUkIGVuIGxsb2MgZGUgJDNcXGNkb3RcXHNxdWFyZSQ6IGVuIHVuYSBwb3TDqG5jaWEgZCd1bmEgcG90w6huY2lhLCBlbHMgZXhwb25lbnRzIGVzIG11bHRpcGxpcXVlbi4iLCAiSGFzIHBsYW50ZWphdCAkM1xcc3F1YXJlPTUkLCBvYmxpZGFudCByZXN0YXItaGkgZWwgJDckIGRlbCBkaXZpc29yLiIsICIiXSwgImVyciI6IFsiT1JEUkVfUkVTVEEiLCAiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIiwgIkZBQ1RPUl9PQkxJREFUIiwgIiJdLCAicmVzIjogWyIkM1xcc3F1YXJlLTc9NVxcUmlnaHRhcnJvdyAzXFxzcXVhcmU9MTJcXFJpZ2h0YXJyb3cgXFxzcXVhcmU9NCQiXX0="
  },
  {
   "id": "46b",
   "ex": 46,
   "ap": "b",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Completa les igualtats.",
   "enunciat": "$(\\square^2)^5\\cdot\\square^3=(-3)^{13}$",
   "opcions": [
    "$-13$",
    "$-3$",
    "$3$",
    "$13$"
   ],
   "pistes": [
    "$(\\square^2)^5\\cdot\\square^3=\\square^{10}\\cdot\\square^3=\\square^{13}$.",
    "$\\square^{13}=(-3)^{13}$: la base que falta és $-3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgY29uZsOzcyBsJ2V4cG9uZW50IGZpbmFsLCAkMTMkLCBhbWIgbGEgYmFzZSBxdWUgZmFsdGEuIiwgIiIsICJBbWIgZXhwb25lbnQgc2VuYXIsIGVsIHNpZ25lIGRlIGxhIGJhc2UgZXMgY29uc2VydmEgZW4gZWwgcmVzdWx0YXQ6ICQzXnsxM30kIMOpcyBwb3NpdGl1IGkgJCgtMyleezEzfSQgw6lzIG5lZ2F0aXUsIG5vIHPDs24gaWd1YWxzLiBMYSBiYXNlIGhhIGRlIHNlciAkLTMkLiIsICJIYXMgY29uZsOzcyBsJ2V4cG9uZW50IGZpbmFsLCAkMTMkLCBhbWIgbGEgYmFzZSBxdWUgZmFsdGEuIl0sICJlcnIiOiBbIkJBU0VfRVhQT05FTlRfSU5URVJDQU5WSUFUUyIsICIiLCAiUEFSSVRBVF9FWFBPTkVOVCIsICJCQVNFX0VYUE9ORU5UX0lOVEVSQ0FOVklBVFMiXSwgInJlcyI6IFsiJChcXHNxdWFyZV4yKV41XFxjZG90XFxzcXVhcmVeMz1cXHNxdWFyZV57MTArM309XFxzcXVhcmVeezEzfT0oLTMpXnsxM31cXFJpZ2h0YXJyb3dcXHNxdWFyZT0tMyQiXX0="
  },
  {
   "id": "46c",
   "ex": 46,
   "ap": "c",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Completa les igualtats.",
   "enunciat": "$\\left(7^3\\right)^5:7^{\\square}=1$",
   "opcions": [
    "$15$",
    "$3$",
    "$8$",
    "$0$"
   ],
   "pistes": [
    "Potència d'una potència: $(7^3)^5=7^{15}$.",
    "$7^{15}:7^{\\square}=7^0=1$ (perquè és $1$). Planteja $15-\\square=0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGlnbm9yYXQgbCdleHBvbmVudCBleHRlcmlvciBkZWwgY2xhdWTDoHRvciwgJDUkOiAkKDdeMyleNT03XnsxNX0kLCBubyAkN14zJC4iLCAiSGFzIGNhbGN1bGF0IGwnZXhwb25lbnQgZGVsIGNsYXVkw6B0b3IgY29tICQzKzU9OCQgZW4gbGxvYyBkZSAkM1xcY2RvdCA1PTE1JC4iLCAiUXVlIGVsIHJlc3VsdGF0IHNpZ3VpICQxJCBubyB2b2wgZGlyIHF1ZSAkXFxzcXVhcmUkIGhhZ2kgZGUgc2VyICQwJDogY2FsIHJlc29sZHJlIGwnZXF1YWNpw7MgZGVscyBleHBvbmVudHMuIFF1YWxzZXZvbCBub21icmUgZGlmZXJlbnQgZGUgemVybyBlbGV2YXQgYSAkMCQgdmFsICQxJCwgbm8gJDAkLiJdLCAiZXJyIjogWyIiLCAiRkFDVE9SX09CTElEQVQiLCAiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIiwgIkVYUE9ORU5UX1pFUk8iXSwgInJlcyI6IFsiJCg3XjMpXjU9N157MTV9JDsgJDE1LVxcc3F1YXJlPTBcXFJpZ2h0YXJyb3cgXFxzcXVhcmU9MTUkIl19"
  },
  {
   "id": "46d",
   "ex": 46,
   "ap": "d",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Completa les igualtats.",
   "enunciat": "$11^9\\cdot\\left(11^2\\right)^3=11^{\\square}$",
   "opcions": [
    "$15$",
    "$6$",
    "$54$",
    "$14$"
   ],
   "pistes": [
    "Potència d'una potència primer: $(11^2)^3=11^{2\\cdot 3}=11^6$.",
    "$11^9\\cdot 11^6=11^{9+6}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiVCdoYXMgZGVpeGF0IHBlbCBjYW3DrSBlbCBwcmltZXIgZmFjdG9yLCAkMTFeOSQuIiwgIkhhcyBtdWx0aXBsaWNhdCAkOSQgcGVscyAkNiQgZGVsIGNsYXVkw6B0b3IgZW4gbGxvYyBkZSBzdW1hci1sb3MuIiwgIkhhcyBjYWxjdWxhdCBsJ2V4cG9uZW50IGRlbCBjbGF1ZMOgdG9yIGNvbSAkMiszPTUkIGVuIGxsb2MgZGUgJDJcXGNkb3QgMz02JC4iXSwgImVyciI6IFsiIiwgIkZBQ1RPUl9PQkxJREFUIiwgIkVYUE9ORU5UU19NVUxUSVBMSUNBVFMiLCAiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIl0sICJyZXMiOiBbIiQoMTFeMileMz0xMV42JDsgJDExXjlcXGNkb3QgMTFeNj0xMV57OSs2fT0xMV57MTV9XFxSaWdodGFycm93IFxcc3F1YXJlPTE1JCJdfQ=="
  }
 ]
};
