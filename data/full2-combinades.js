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
  "BASES_DIFERENTS_COMBINADES": "Les bases són diferents: la regla de combinar exponents (sumar-los o restar-los) només val quan la base és la mateixa als dos factors.",
  "BASE_ALTERADA": "En combinar potències de la mateixa base, la base es queda tal qual; només canvia l'exponent.",
  "BASE_EXPONENT_INTERCANVIATS": "Has canviat de lloc la base i l'exponent: no és el mateix $a^b$ que $b^a$.",
  "BASE_SIGNE_PERDUT": "El resultat ha de conservar la base tal com era, amb el seu signe.",
  "EXPONENTS_MULTIPLICATS": "En multiplicar potències de la mateixa base, els exponents se SUMEN, no es multipliquen: $a^m\\cdot a^n=a^{m+n}$.",
  "EXPONENTS_RESTATS_PRODUCTE": "En multiplicar potències de la mateixa base, els exponents se sumen; restar-los és la regla del quocient, no la del producte.",
  "EXPONENTS_SUMATS_QUOCIENT": "En dividir potències de la mateixa base, els exponents es RESTEN, no se sumen: $a^m:a^n=a^{m-n}$.",
  "EXPONENT_COM_PRODUCTE": "En una expressió com $2^n$, l'exponent $n$ no és un factor que es multiplica per la base: cal calcular la potència, no un producte.",
  "EXPONENT_MULTIPLICAT": "L'exponent que dona l'enunciat s'ha de fer servir tal qual, no multiplicat per un altre nombre.",
  "EXPONENT_NEGATIU_SIGNE": "Un exponent negatiu no fa que el resultat sigui negatiu: $a^{-n}=\\dfrac{1}{a^n}$ és l'invers del nombre, no el seu oposat.",
  "EXPONENT_ZERO": "Qualsevol nombre diferent de zero elevat a $0$ val $1$, no $0$.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "MENYS_SENSE_PARENTESI": "Sense parèntesi, el signe $-$ no forma part de la base: $-a^n$ és $-(a^n)$, no $(-a)^n$.",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PARITAT_EXPONENT": "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna resultat positiu; amb exponent senar, el resultat es queda negatiu.",
  "POTENCIA_APLICADA_MALAMENT": "La potència no s'ha aplicat a tot el que havia d'afectar: mira bé què queda dins del parèntesi.",
  "POTENCIA_POTENCIA_SUMADA": "En una potència d'una potència, els exponents es MULTIPLIQUEN, no se sumen: $(a^m)^n=a^{m\\cdot n}$."
 },
 "items": [
  {
   "id": "323a",
   "ex": 323,
   "ap": "a",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Desenvolupa i escriu-ho com una sola potència.",
   "enunciat": "$(2^3)^2$",
   "opcions": [
    "$2^{8}$",
    "$2^{9}$",
    "$2^{6}$",
    "$2^{5}$"
   ],
   "pistes": [
    "$(a^m)^n$: els exponents es multipliquen.",
    "$(2^3)^2$ vol dir $2^3\\cdot 2^3$: compta quants $2$ es multipliquen en total."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgcXVpbnMgZG9zIG7Dum1lcm9zIHMnaGFuIGRlIG11bHRpcGxpY2FyOiBzw7NuIGVsICQzJCBkZSBkaW5zIGkgZWwgJDIkIGRlIGZvcmEuIiwgIkhhcyBtdWx0aXBsaWNhdCAkM1xcY2RvdCAzJC4gTCdleHBvbmVudCBkZSBmb3JhIMOpcyAkMiQsIG5vICQzJC4iLCAiIiwgIkhhcyBzdW1hdCBlbHMgZXhwb25lbnRzICgkMysyJCkuIEFscyBwcm9kdWN0ZXMgZGUgbGEgbWF0ZWl4YSBiYXNlIHNlIHN1bWVuOyBhIHVuYSBwb3TDqG5jaWEgZCd1bmEgcG90w6huY2lhIGVzIE1VTFRJUExJUVVFTiwgcGVycXXDqCAkKDJeMyleMiQgdm9sIGRpciAkMl4zXFxjZG90IDJeMyQuIl0sICJlcnIiOiBbIlBPVEVOQ0lBX0FQTElDQURBX01BTEFNRU5UIiwgIkVYUE9ORU5UX01VTFRJUExJQ0FUIiwgIiIsICJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiXSwgInJlcyI6IFsiJCgyXnszfSleezJ9PTJeezNcXGNkb3QgMn09Ml57Nn0kIl19"
  },
  {
   "id": "323b",
   "ex": 323,
   "ap": "b",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Desenvolupa i escriu-ho com una sola potència.",
   "enunciat": "$(5^2)^3$",
   "opcions": [
    "$5^{5}$",
    "$5^{8}$",
    "$5^{6}$",
    "$5^{9}$"
   ],
   "pistes": [
    "Els exponents es multipliquen.",
    "$(5^2)^3$ vol dir $5^2\\cdot 5^2\\cdot 5^2$: compta quants $5$ es multipliquen en total."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgJDIrMyQgZW4gbGxvYyBkZSBtdWx0aXBsaWNhci4iLCAiUmV2aXNhIGxhIG11bHRpcGxpY2FjacOzOiAkMlxcY2RvdCAzPTYkLiIsICIiLCAiSGFzIGVsZXZhdCBsJ2V4cG9uZW50IGRlIGZvcmEgYWwgcXVhZHJhdCBlbiBsbG9jIGRlIG11bHRpcGxpY2FyLWxvIHBlbCBkZSBkaW5zLiJdLCAiZXJyIjogWyJQT1RFTkNJQV9QT1RFTkNJQV9TVU1BREEiLCAiRVhQT05FTlRfTVVMVElQTElDQVQiLCAiIiwgIlBPVEVOQ0lBX0FQTElDQURBX01BTEFNRU5UIl0sICJyZXMiOiBbIiQoNV57Mn0pXnszfT01XnsyXFxjZG90IDN9PTVeezZ9JCJdfQ=="
  },
  {
   "id": "323c",
   "ex": 323,
   "ap": "c",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Desenvolupa i escriu-ho com una sola potència.",
   "enunciat": "$\\left[(-2)^3\\right]^2$",
   "opcions": [
    "$36$",
    "$-64$",
    "$64$",
    "$-32$"
   ],
   "pistes": [
    "Primer l'exponent: es multipliquen, $3\\cdot 2=6$.",
    "Amb l'exponent final decideix el signe: parell dona positiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgbXVsdGlwbGljYXQgbGEgYmFzZSBwZWxzIGV4cG9uZW50cy4gTGEgYmFzZSBlcyByZXBldGVpeCwgbm8gZXMgbXVsdGlwbGljYSBwZWxzIGV4cG9uZW50cy4iLCAiTCdleHBvbmVudCBmaW5hbCDDqXMgJDNcXGNkb3QgMj02JCwgcXVlIMOpcyBQQVJFTEwsIGkgdW5hIGJhc2UgbmVnYXRpdmEgZWxldmFkYSBhIGV4cG9uZW50IHBhcmVsbCBkb25hIHBvc2l0aXUuIiwgIiIsICJIYXMgc3VtYXQgZWxzIGV4cG9uZW50cyAoJDMrMj01JCkgZW4gbGxvYyBkZSBtdWx0aXBsaWNhci1sb3MuIEFtYiBleHBvbmVudCAkNSQsIHF1ZSDDqXMgc2VuYXIsIGVsIHNpZ25lIHN1cnQgbmVnYXRpdSBpIHBlciBhaXjDsiBldCBkb25hICQtMzIkLiJdLCAiZXJyIjogWyJFWFBPTkVOVF9DT01fUFJPRFVDVEUiLCAiUEFSSVRBVF9FWFBPTkVOVCIsICIiLCAiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIl0sICJyZXMiOiBbIiRcXGxlZnRbKC0yKV57M31cXHJpZ2h0XV57Mn09KC0yKV57M1xcY2RvdCAyfT0oLTIpXns2fT02NCQiXX0="
  },
  {
   "id": "324a",
   "ex": 324,
   "ap": "a",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fes les operacions i escriu-ho com una sola potència.",
   "enunciat": "$3^2\\cdot 3^4$",
   "opcions": [
    "$3^{2}$",
    "$3^{6}$",
    "$9^{6}$",
    "$3^{8}$"
   ],
   "pistes": [
    "Producte de potències de la mateixa base: els exponents se sumen.",
    "$3^2\\cdot 3^4$ són dos tresos per quatre tresos: quants tresos hi ha en total? La base no canvia."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbHMgZXhwb25lbnRzIGVzIHJlc3RlbiBxdWFuIGVzIERJVklERUlYLCBubyBxdWFuIGVzIG11bHRpcGxpY2EuIiwgIiIsICJMYSBiYXNlIG5vIGVzIHRvY2E6IGVzIHF1ZWRhIGVuICQzJC4gTm9tw6lzIGVzIHRvcXVlbiBlbHMgZXhwb25lbnRzLiIsICJIYXMgbXVsdGlwbGljYXQgZWxzIGV4cG9uZW50cy4gRW4gdW4gUFJPRFVDVEUgZGUgbGEgbWF0ZWl4YSBiYXNlIHNlIHN1bWVuOiAkM14yXFxjZG90IDNeNCQgc8OzbiBkb3MgdHJlc29zIGkgcXVhdHJlIHRyZXNvcywgc2lzIGVuIHRvdGFsLiJdLCAiZXJyIjogWyJFWFBPTkVOVFNfUkVTVEFUU19QUk9EVUNURSIsICIiLCAiQkFTRV9BTFRFUkFEQSIsICJFWFBPTkVOVFNfTVVMVElQTElDQVRTIl0sICJyZXMiOiBbIiQzXnsyfVxcY2RvdCAzXns0fT0zXnsyKzR9PTNeezZ9JCJdfQ=="
  },
  {
   "id": "324b",
   "ex": 324,
   "ap": "b",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fes les operacions i escriu-ho com una sola potència.",
   "enunciat": "$2^7 : 2^4$",
   "opcions": [
    "$1^{3}$",
    "$2^{3}$",
    "$2^{28}$",
    "$2^{11}$"
   ],
   "pistes": [
    "Quocient de potències de la mateixa base: els exponents es resten.",
    "Dels set dosos de dalt, quatre se simplifiquen amb els quatre de baix. La base no canvia."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMYSBiYXNlIG5vIGVzIGRpdmlkZWl4OiBlcyBxdWVkYSBlbiAkMiQuIE5vbcOpcyBlcyByZXN0ZW4gZWxzIGV4cG9uZW50cy4iLCAiIiwgIkVscyBleHBvbmVudHMgbm9tw6lzIGVzIG11bHRpcGxpcXVlbiBhIHVuYSBwb3TDqG5jaWEgZCd1bmEgcG90w6huY2lhLiIsICJIYXMgc3VtYXQgZWxzIGV4cG9uZW50cy4gRW4gdW4gUVVPQ0lFTlQgZXMgcmVzdGVuOiAkNy00JC4iXSwgImVyciI6IFsiQkFTRV9BTFRFUkFEQSIsICIiLCAiRVhQT05FTlRTX01VTFRJUExJQ0FUUyIsICJFWFBPTkVOVFNfU1VNQVRTX1FVT0NJRU5UIl0sICJyZXMiOiBbIiQyXns3fToyXns0fT0yXns3LTR9PTJeezN9JCJdfQ=="
  },
  {
   "id": "44a",
   "ex": 44,
   "ap": "a",
   "bloc": "combinades",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
    "Ara compara $\\square^{13}$ amb $(-3)^{13}$: tenen el mateix exponent. Compte amb el signe: amb exponent senar, el signe de la base es conserva."
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
   "dif": 4,
   "encapcalament": "Completa les igualtats.",
   "enunciat": "$\\left(7^3\\right)^5:7^{\\square}=1$",
   "opcions": [
    "$15$",
    "$3$",
    "$8$",
    "$0$"
   ],
   "pistes": [
    "Potència d'una potència: calcula primer l'exponent de $(7^3)^5$ (els exponents es multipliquen).",
    "Fixa't que $1=7^0$. Dividir potències de la mateixa base resta els exponents: planteja l'equació que han de complir."
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
   "dif": 4,
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
