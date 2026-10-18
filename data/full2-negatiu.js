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
  "BASE_EXPONENT_INTERCANVIATS": "Has canviat de lloc la base i l'exponent: no és el mateix $a^b$ que $b^a$.",
  "BASE_MAL_TRIADA": "Has calculat el percentatge sobre la base que no toca. Una variació percentual sempre es mesura respecte del valor de PARTIDA.",
  "BASE_SIGNE_PERDUT": "El resultat ha de conservar la base tal com era, amb el seu signe.",
  "EQUACIO_EXPONENT_MULTIPLICAT": "Per aïllar l'exponent en una igualtat de potències de la mateixa base, els exponents s'igualen i se sumen o es resten com en qualsevol equació; no es multipliquen.",
  "EXPONENTS_MULTIPLICATS": "En multiplicar potències de la mateixa base, els exponents se SUMEN, no es multipliquen: $a^m\\cdot a^n=a^{m+n}$.",
  "EXPONENTS_RESTATS_PRODUCTE": "En multiplicar potències de la mateixa base, els exponents se sumen; restar-los és la regla del quocient, no la del producte.",
  "EXPONENTS_SUMATS_QUOCIENT": "En dividir potències de la mateixa base, els exponents es RESTEN, no se sumen: $a^m:a^n=a^{m-n}$.",
  "EXPONENT_COM_PRODUCTE": "En una expressió com $2^n$, l'exponent $n$ no és un factor que es multiplica per la base: cal calcular la potència, no un producte.",
  "EXPONENT_MULTIPLICAT": "L'exponent que dona l'enunciat s'ha de fer servir tal qual, no multiplicat per un altre nombre.",
  "EXPONENT_NEGATIU_SIGNE": "Un exponent negatiu no fa que el resultat sigui negatiu: $a^{-n}=\\dfrac{1}{a^n}$ és l'invers del nombre, no el seu oposat.",
  "EXPONENT_SENSE_DESPLACAR": "T'has deixat pel camí una part de l'exponent: si l'enunciat diu $n+2$ (o similar), cal fer servir aquest exponent complet, no només la $n$.",
  "EXPONENT_ZERO": "Qualsevol nombre diferent de zero elevat a $0$ val $1$, no $0$.",
  "FACTOR_INVERS_OBLIDAT": "Per desfer una variació percentual no es fa la contrària: es DIVIDEIX pel factor. Si un preu ha pujat un 10 %, baixar-lo un 10 % no el torna al punt de partida.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "OPERACIO_INVERSA": "Has fet l'operació contrària a la que tocava per desfer el pas anterior.",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PARITAT_EXPONENT": "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna resultat positiu; amb exponent senar, el resultat es queda negatiu.",
  "POTENCIA_10": "El denominador d'un decimal exacte és una potència de $10$ amb tants zeros com xifres decimals hi ha. Torna-les a comptar.",
  "POTENCIA_POTENCIA_SUMADA": "En una potència d'una potència, els exponents es MULTIPLIQUEN, no se sumen: $(a^m)^n=a^{m\\cdot n}$.",
  "REGLA_NOMES_QUOCIENT": "La regla de restar exponents és per DIVIDIR potències de la mateixa base, no per restar-les: quan es resten, cal restar els valors de cada potència.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut."
 },
 "items": [
  {
   "id": "321a",
   "ex": 321,
   "ap": "a",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu aquesta potència en forma de fracció.",
   "enunciat": "$2^{-3}$",
   "opcions": [
    "$-\\dfrac{1}{8}$",
    "$\\dfrac{1}{6}$",
    "$-8$",
    "$\\dfrac{1}{8}$"
   ],
   "pistes": [
    "Un exponent negatiu vol dir l'invers: $a^{-n}=\\dfrac{1}{a^{n}}$.",
    "Primer calcula $2^3$ i després posa-l'hi a sota d'un $1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBmcmFjY2nDsyDDqXMgbGEgYm9uYSwgcGVyw7IgZWwgc2lnbmUgaGkgc29icmE6ICQyXnstM309XFxkZnJhY3sxfXsyXjN9JCwgaSB0YW50IGVsICQxJCBjb20gZWwgJDJeMyQgc8OzbiBwb3NpdGl1cy4iLCAiSGFzIG11bHRpcGxpY2F0IGxhIGJhc2UgcGVyIGwnZXhwb25lbnQgKCQyXFxjZG90IDM9NiQpLiBMJ2V4cG9uZW50IGRpdSBxdWFudGVzIHZlZ2FkZXMgZXMgcmVwZXRlaXggZWwgZmFjdG9yOiAkMl4zPTJcXGNkb3QgMlxcY2RvdCAyPTgkLiIsICJFbCBzaWduZSBtZW55cyDDqXMgZGUgbCdFWFBPTkVOVCwgbm8gZGVsIHJlc3VsdGF0OiAkMl57LTN9JCBubyDDqXMgJC0yXjMkLiBVbiBleHBvbmVudCBuZWdhdGl1IHZvbCBkaXIgwqtsJ2ludmVyc8K7LCBpIGwnaW52ZXJzIGRlICQ4JCDDqXMgJFxcZGZyYWN7MX17OH0kLiIsICIiXSwgImVyciI6IFsiU0lHTkVfRklOQUwiLCAiRVhQT05FTlRfQ09NX1BST0RVQ1RFIiwgIkVYUE9ORU5UX05FR0FUSVVfU0lHTkUiLCAiIl0sICJyZXMiOiBbIiQyXnstM309XFxkZnJhY3sxfXsyXnszfX09XFxkZnJhY3sxfXs4fSQiXX0="
  },
  {
   "id": "321b",
   "ex": 321,
   "ap": "b",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu aquesta potència en forma de fracció.",
   "enunciat": "$5^{-1}$",
   "opcions": [
    "$5$",
    "$\\dfrac{1}{25}$",
    "$\\dfrac{1}{5}$",
    "$-5$"
   ],
   "pistes": [
    "$a^{-1}$ és l'invers de $a$.",
    "$5^{-1}=\\dfrac{1}{5^{1}}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgY2FsY3VsYXQgJDVeMT01JCBpIGhhcyBkZWl4YXQgZGUgYmFuZGEgZWwgc2lnbmUgZGUgbCdleHBvbmVudCwgcXVlIMOpcyBqdXN0YW1lbnQgZWwgcXVlIGZhIGdpcmFyIGxhIGZyYWNjacOzLiIsICJMJ2V4cG9uZW50IMOpcyAkLTEkLCBubyAkLTIkOiBhIHNvdGEgaGkgdmEgJDVeMT01JCwgbm8gJDVeMj0yNSQuIiwgIiIsICJFbCBtZW55cyDDqXMgZGUgbCdleHBvbmVudDogJDVeey0xfSQgbm8gw6lzICQtNSQuIl0sICJlcnIiOiBbIkZBQ1RPUl9JTlZFUlNfT0JMSURBVCIsICJFWFBPTkVOVF9NVUxUSVBMSUNBVCIsICIiLCAiRVhQT05FTlRfTkVHQVRJVV9TSUdORSJdLCAicmVzIjogWyIkNV57LTF9PVxcZGZyYWN7MX17NX0kIl19"
  },
  {
   "id": "321c",
   "ex": 321,
   "ap": "c",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu aquesta potència en forma de fracció.",
   "enunciat": "$(-2)^{-2}$",
   "opcions": [
    "$-4$",
    "$\\dfrac{1}{4}$",
    "$4$",
    "$-\\dfrac{1}{4}$"
   ],
   "pistes": [
    "Separa les dues coses: el signe de la BASE i el signe de l'EXPONENT.",
    "$(-2)^{-2}=\\dfrac{1}{(-2)^{2}}$, i $(-2)^2$ és positiu perquè l'exponent és parell."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgdHJhY3RhdCBlbCBtZW55cyBkZSBsJ2V4cG9uZW50IGNvbSBzaSBmb3MgZGVsIHJlc3VsdGF0LCBpIGEgc29icmUgaGkgaGFzIHBlcmR1dCBsYSBmcmFjY2nDsy4iLCAiIiwgIkhhcyBjYWxjdWxhdCAkKC0yKV4yPTQkIGkgdCdoYXMgZGVpeGF0IGVsIHNpZ25lIGRlIGwnZXhwb25lbnQsIHF1ZSDDqXMgZWwgcXVlIGNvbnZlcnRlaXggZWwgJDQkIGVuICRcXGRmcmFjezF9ezR9JC4iLCAiTCdleHBvbmVudCAkLTIkIMOpcyBQQVJFTEwsIGkgdW5hIGJhc2UgbmVnYXRpdmEgZWxldmFkYSBhIGV4cG9uZW50IHBhcmVsbCBkb25hIHBvc2l0aXU6ICQoLTIpXjI9KzQkLCBpIHBlciB0YW50ICRcXGRmcmFjezF9ezR9JC4iXSwgImVyciI6IFsiRVhQT05FTlRfTkVHQVRJVV9TSUdORSIsICIiLCAiRkFDVE9SX0lOVkVSU19PQkxJREFUIiwgIlBBUklUQVRfRVhQT05FTlQiXSwgInJlcyI6IFsiJCgtMileey0yfT1cXGRmcmFjezF9eygtMileezJ9fT1cXGRmcmFjezF9ezR9JCJdfQ=="
  },
  {
   "id": "321d",
   "ex": 321,
   "ap": "d",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu aquesta potència en forma de fracció.",
   "enunciat": "$10^{-2}$",
   "opcions": [
    "$\\dfrac{1}{20}$",
    "$-100$",
    "$\\dfrac{1}{100}$",
    "$0{,}001$"
   ],
   "pistes": [
    "Un exponent negatiu vol dir l'invers: $a^{-n}=\\dfrac{1}{a^{n}}$.",
    "Aquí la base és $10$ i l'exponent, $-2$: a sota hi va $10^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgbXVsdGlwbGljYXQgJDEwXFxjZG90IDIkLiBBIHNvdGEgaGkgdmEgJDEwXjI9MTAwJC4iLCAiRWwgbWVueXMgw6lzIGRlIGwnZXhwb25lbnQsIG5vIGRlbCByZXN1bHRhdC4iLCAiIiwgIlQnaGFzIGRlc3BsYcOnYXQgdW5hIHhpZnJhIGRlIG3DqXM6ICQxMF57LTJ9JCDDqXMgJDB7LH0wMSQsIGFtYiBkb3MgemVyb3MgY29tcHRhbnQgZWwgZGUgZGF2YW50IGRlIGxhIGNvbWEuICQweyx9MDAxJCBzZXJpYSAkMTBeey0zfSQuIl0sICJlcnIiOiBbIkVYUE9ORU5UX0NPTV9QUk9EVUNURSIsICJFWFBPTkVOVF9ORUdBVElVX1NJR05FIiwgIiIsICJQT1RFTkNJQV8xMCJdLCAicmVzIjogWyIkMTBeey0yfT1cXGRmcmFjezF9ezEwXnsyfX09XFxkZnJhY3sxfXsxMDB9PTB7LH0wMSQiXX0="
  },
  {
   "id": "322a",
   "ex": 322,
   "ap": "a",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor de $x$.",
   "enunciat": "$2^x = 8$",
   "opcions": [
    "$x=2$",
    "$x=4$",
    "$x=8$",
    "$x=3$"
   ],
   "pistes": [
    "Escriu $8$ com una potència de base $2$.",
    "$8=2\\cdot 2\\cdot 2=2^3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCAkMiQgw6lzIGxhIGJhc2UsIG5vIGxhIHJlc3Bvc3RhLiBMYSBwcmVndW50YSDDqXMgcXVhbnRlcyB2ZWdhZGVzIHMnaGEgZGUgcmVwZXRpci4iLCAiSGFzIGJ1c2NhdCBlbCBuw7ptZXJvIHF1ZSBNVUxUSVBMSUNBVCBwZXIgJDIkIGZhICQ4JC4gQXF1w60gJDIkIG5vIG11bHRpcGxpY2EsIGVzIHJlcGV0ZWl4OiAkMlxcY2RvdCAyXFxjZG90IDI9OCQsIG8gc2lndWkgdHJlcyB2ZWdhZGVzLiIsICJIYXMgY29waWF0IGVsIHJlc3VsdGF0IGNvbSBhIGV4cG9uZW50LiAkMl44JCBzw7NuICQyNTYkLCBubyAkOCQuIiwgIiJdLCAiZXJyIjogWyJCQVNFX01BTF9UUklBREEiLCAiQkFTRV9FWFBPTkVOVF9JTlRFUkNBTlZJQVRTIiwgIkVRVUFDSU9fRVhQT05FTlRfTVVMVElQTElDQVQiLCAiIl0sICJyZXMiOiBbIiQ4PTJeezN9XFxSaWdodGFycm93IDJee3h9PTJeezN9XFxSaWdodGFycm93IHg9MyQiXX0="
  },
  {
   "id": "322b",
   "ex": 322,
   "ap": "b",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor de $x$.",
   "enunciat": "$3^x = \\dfrac{1}{9}$",
   "opcions": [
    "$x=2$",
    "$x=-2$",
    "$x=\\dfrac{1}{2}$",
    "$x=-3$"
   ],
   "pistes": [
    "Un resultat que és una fracció amb $1$ a dalt demana un exponent negatiu.",
    "$\\dfrac{1}{9}=\\dfrac{1}{3^{2}}=3^{-2}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgdHJvYmF0IGLDqSBlbCAkMiQgKHBlcnF1w6ggJDk9M14yJCksIHBlcsOyIGVsIHJlc3VsdGF0IMOpcyAkXFxkZnJhY3sxfXs5fSQgaSBubyAkOSQ6IMOpcyBsJ0lOVkVSUywgaSBhaXjDsiDDqXMgZWwgcXVlIHBvc2EgZWwgc2lnbmUgbWVueXMgYSBsJ2V4cG9uZW50LiIsICIiLCAiTGEgZnJhY2Npw7Mgw6lzIGFsIFJFU1VMVEFULCBubyBhIGwnZXhwb25lbnQ6IGwnZXhwb25lbnQgw6lzIHVuIGVudGVyIG5lZ2F0aXUuIiwgIiQ5JCDDqXMgJDNeMiQsIG5vICQzXjMkLiAkM14zJCBzZXJpZW4gJDI3JC4iXSwgImVyciI6IFsiRVhQT05FTlRfTkVHQVRJVV9TSUdORSIsICIiLCAiT1BFUkFDSU9fSU5WRVJTQSIsICJCQVNFX01BTF9UUklBREEiXSwgInJlcyI6IFsiJFxcZGZyYWN7MX17OX09M157LTJ9XFxSaWdodGFycm93IHg9LTIkIl19"
  },
  {
   "id": "322c",
   "ex": 322,
   "ap": "c",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor de $x$.",
   "enunciat": "$5^x = 1$",
   "opcions": [
    "$x=-1$",
    "$x=0$",
    "$x=5$",
    "$x=1$"
   ],
   "pistes": [
    "Hi ha una potència que val $1$ sigui quina sigui la base.",
    "Qualsevol número diferent de zero elevat a $0$ val $1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkNV57LTF9PVxcZGZyYWN7MX17NX0kLCBxdWUgbm8gw6lzICQxJC4iLCAiIiwgIkhhcyByZXBldGl0IGxhIGJhc2UuICQ1XjUkIHPDs24gJDMxMjUkLiIsICJIYXMgbGxlZ2l0IGxhIHJlZ2xhIGFsIHJldsOpcy4gJDVeMT01JDsgZWwgcXVlIHZhbCAkMSQgw6lzICQ1XjAkLiJdLCAiZXJyIjogWyJFWFBPTkVOVF9ORUdBVElVX1NJR05FIiwgIiIsICJCQVNFX0VYUE9ORU5UX0lOVEVSQ0FOVklBVFMiLCAiRVhQT05FTlRfWkVSTyJdLCAicmVzIjogWyIkNV57MH09MVxcUmlnaHRhcnJvdyB4PTAkIl19"
  },
  {
   "id": "322d",
   "ex": 322,
   "ap": "d",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba el valor de $x$.",
   "enunciat": "$10^x = 1000$",
   "opcions": [
    "$x=2$",
    "$x=3$",
    "$x=100$",
    "$x=4$"
   ],
   "pistes": [
    "A les potències de $10$, l'exponent és el nombre de zeros.",
    "$1000$ té tres zeros."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkMTBeMj0xMDAkLCBxdWUgdMOpIGRvcyB6ZXJvcy4gJDEwMDAkIGVuIHTDqSB0cmVzLiIsICIiLCAiSGFzIGRvbmF0IHVuIG7Dum1lcm8sIG5vIGwnZXhwb25lbnQuIExhIHByZWd1bnRhIMOpcyBxdWFudHMgemVyb3MgdMOpICQxMDAwJDogdHJlcy4iLCAiSGFzIGNvbXB0YXQgbGVzIFhJRlJFUyBkZSAkMTAwMCQsIHF1ZSBzw7NuIHF1YXRyZS4gTCdleHBvbmVudCBjb21wdGEgZWxzIFpFUk9TLCBxdWUgc8OzbiB0cmVzLiJdLCAiZXJyIjogWyJFWFBPTkVOVF9TRU5TRV9ERVNQTEFDQVIiLCAiIiwgIlBPVEVOQ0lBXzEwIiwgIkVYUE9ORU5UX1NFTlNFX0RFU1BMQUNBUiJdLCAicmVzIjogWyIkMTAwMD0xMF57M31cXFJpZ2h0YXJyb3cgeD0zJCJdfQ=="
  },
  {
   "id": "38a",
   "ex": 38,
   "ap": "a",
   "bloc": "negatiu",
   "tipus": "A",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
    "Dividir potències de la mateixa base resta els exponents. Deixa el resultat com una potència de base $2$."
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
   "dif": 3,
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
    "Dividir potències de la mateixa base resta els exponents. Deixa el resultat com una potència de base $(-4)$."
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
   "dif": 3,
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
    "Dividir potències de la mateixa base resta els exponents. Si l'exponent queda $1$, la potència és la base mateixa."
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
   "dif": 3,
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
    "Dividir potències de la mateixa base resta els exponents. Deixa el resultat com una potència de base $(-3)$."
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
   "dif": 3,
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
    "Multiplicar potències de la mateixa base suma els exponents. Recorda que $5$ és $5^1$."
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
   "dif": 3,
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
    "Multiplicar potències de la mateixa base suma els exponents. Deixa el resultat com una potència de base $-\\dfrac13$."
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
   "encapcalament": "Esbrina el valor de $a$ perquè cada igualtat sigui certa.",
   "enunciat": "$(-6)^a:(-6)^8=(-6)^0$",
   "opcions": [
    "$0$",
    "$16$",
    "$-8$",
    "$8$"
   ],
   "pistes": [
    "Dividir potències de la mateixa base resta els exponents: $(-6)^a:(-6)^8=(-6)^{a-8}$.",
    "Perquè les dues bandes siguin iguals, l'exponent $a-8$ ha de valer el mateix que el de la dreta, $0$."
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
   "dif": 4,
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
  }
 ]
};
