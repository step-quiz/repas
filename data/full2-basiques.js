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
    "344a",
    "344b",
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
    "321a",
    "321b",
    "321c",
    "321d",
    "322a",
    "322b",
    "322c",
    "322d",
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
    "345a",
    "345b",
    "43a",
    "43b",
    "43c",
    "43d",
    "43e",
    "43f",
    "42a",
    "42b",
    "42c",
    "42d",
    "42e",
    "42f",
    "41a",
    "41b",
    "41c",
    "41d",
    "41e",
    "41f",
    "41g",
    "41h"
   ]
  },
  {
   "id": "combinades",
   "titol": "Combina potències",
   "descripcio": "Potència d'una potència i productes de bases diferents.",
   "items": [
    "323a",
    "323b",
    "323c",
    "324a",
    "324b",
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
  "BASE_ALTERADA": "En combinar potències de la mateixa base, la base es queda tal qual; només canvia l'exponent.",
  "BASE_EXPONENT_INTERCANVIATS": "Has canviat de lloc la base i l'exponent: no és el mateix $a^b$ que $b^a$.",
  "BASE_SIGNE_PERDUT": "El resultat ha de conservar la base tal com era, amb el seu signe.",
  "EXPONENTS_MULTIPLICATS": "En multiplicar potències de la mateixa base, els exponents se SUMEN, no es multipliquen: $a^m\\cdot a^n=a^{m+n}$.",
  "EXPONENTS_RESTATS_PRODUCTE": "En multiplicar potències de la mateixa base, els exponents se sumen; restar-los és la regla del quocient, no la del producte.",
  "EXPONENTS_SUMATS_QUOCIENT": "En dividir potències de la mateixa base, els exponents es RESTEN, no se sumen: $a^m:a^n=a^{m-n}$.",
  "EXPONENT_ZERO": "Qualsevol nombre diferent de zero elevat a $0$ val $1$, no $0$.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "ORDRE_DIVISIONS": "El que hi ha entre claudàtors s'ha de resoldre primer: no es poden restar tots els exponents seguits com si no hi hagués claudàtor.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PARITAT_EXPONENT": "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna resultat positiu; amb exponent senar, el resultat es queda negatiu.",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "POTENCIA_PRODUCTE_UN_FACTOR": "L'exponent afecta TOTS els factors del producte, no només un: $(a\\cdot b)^n=a^n\\cdot b^n$.",
  "POTENCIA_QUOCIENT_UN_FACTOR": "L'exponent afecta els dos termes del quocient, no només un: $(a:b)^n=a^n:b^n$.",
  "SIGNE_PRODUCTE": "Revisa la regla dels signes del producte: signes diferents donen resultat negatiu.",
  "SIGNE_QUOCIENT": "Revisa la regla dels signes del quocient: signes diferents donen resultat negatiu."
 },
 "items": [
  {
   "id": "344a",
   "ex": 344,
   "ap": "a",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa aquest producte com una sola potència. Recorda: $a^m\\cdot a^n=a^{m+n}$.",
   "enunciat": "$2^3\\cdot 2^4$",
   "opcions": [
    "$2^{12}$",
    "$2^{1}$",
    "$4^{7}$",
    "$2^{7}$"
   ],
   "pistes": [
    "Les dues potències tenen la mateixa base, $2$.",
    "Suma els exponents: $3+4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBTVU1FTiwgbm8gZXMgbXVsdGlwbGlxdWVuOiAkYV5tXFxjZG90IGFebj1hXnttK259JC4iLCAiRW4gbXVsdGlwbGljYXIgcG90w6huY2llcyBkZSBsYSBtYXRlaXhhIGJhc2UsIGVscyBleHBvbmVudHMgc2Ugc3VtZW47IHJlc3Rhci1sb3Mgw6lzIGxhIHJlZ2xhIGRlbCBxdW9jaWVudCwgbm8gbGEgZGVsIHByb2R1Y3RlLiIsICJMYSBiYXNlIMOpcyAkMiQgYWxzIGRvcyBmYWN0b3JzIGkgZXMgcXVlZGEgJDIkLiBFbiBjb21iaW5hciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgbGEgYmFzZSBlcyBxdWVkYSB0YWwgcXVhbDsgbm9tw6lzIGNhbnZpYSBsJ2V4cG9uZW50LiIsICIiXSwgImVyciI6IFsiRVhQT05FTlRTX01VTFRJUExJQ0FUUyIsICJFWFBPTkVOVFNfUkVTVEFUU19QUk9EVUNURSIsICJCQVNFX0FMVEVSQURBIiwgIiJdLCAicmVzIjogWyIkMl4zXFxjZG90Ml40PTJeezMrNH09Ml57N30kIl19"
  },
  {
   "id": "344b",
   "ex": 344,
   "ap": "b",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Expressa aquest producte com una sola potència. Recorda: $a^m\\cdot a^n=a^{m+n}$.",
   "enunciat": "$5^2\\cdot 5^6$",
   "opcions": [
    "$25^{8}$",
    "$5^{12}$",
    "$5^{8}$",
    "$5^{4}$"
   ],
   "pistes": [
    "Les dues potències tenen la mateixa base, $5$.",
    "Suma els exponents: $2+6$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMYSBiYXNlIMOpcyAkNSQgYWxzIGRvcyBmYWN0b3JzIGkgZXMgcXVlZGEgJDUkLiBFbiBjb21iaW5hciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgbGEgYmFzZSBlcyBxdWVkYSB0YWwgcXVhbDsgbm9tw6lzIGNhbnZpYSBsJ2V4cG9uZW50LiIsICJFbiBtdWx0aXBsaWNhciBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSwgZWxzIGV4cG9uZW50cyBzZSBTVU1FTiwgbm8gZXMgbXVsdGlwbGlxdWVuOiAkYV5tXFxjZG90IGFebj1hXnttK259JC4iLCAiIiwgIkVuIG11bHRpcGxpY2FyIHBvdMOobmNpZXMgZGUgbGEgbWF0ZWl4YSBiYXNlLCBlbHMgZXhwb25lbnRzIHNlIHN1bWVuOyByZXN0YXItbG9zIMOpcyBsYSByZWdsYSBkZWwgcXVvY2llbnQsIG5vIGxhIGRlbCBwcm9kdWN0ZS4iXSwgImVyciI6IFsiQkFTRV9BTFRFUkFEQSIsICJFWFBPTkVOVFNfTVVMVElQTElDQVRTIiwgIiIsICJFWFBPTkVOVFNfUkVTVEFUU19QUk9EVUNURSJdLCAicmVzIjogWyIkNV4yXFxjZG90NV42PTVeezIrNn09NV57OH0kIl19"
  },
  {
   "id": "35a",
   "ex": 35,
   "ap": "a",
   "bloc": "basiques",
   "tipus": "A",
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 2,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
  }
 ]
};
