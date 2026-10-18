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
  "CAP_ERROR": "Has dit que la cadena és correcta, però hi ha un pas equivocat. Que el resultat final surti bé no ho garanteix: dos errors es poden compensar. Comprova cada igualtat per separat.",
  "EXPONENTS_MULTIPLICATS": "En multiplicar potències de la mateixa base, els exponents se SUMEN, no es multipliquen: $a^m\\cdot a^n=a^{m+n}$.",
  "EXPONENTS_RESTATS_PRODUCTE": "En multiplicar potències de la mateixa base, els exponents se sumen; restar-los és la regla del quocient, no la del producte.",
  "EXPONENTS_SUMATS_QUOCIENT": "En dividir potències de la mateixa base, els exponents es RESTEN, no se sumen: $a^m:a^n=a^{m-n}$.",
  "EXPONENT_NEGATIU_SIGNE": "Un exponent negatiu no fa que el resultat sigui negatiu: $a^{-n}=\\dfrac{1}{a^n}$ és l'invers del nombre, no el seu oposat.",
  "EXPONENT_ZERO": "Qualsevol nombre diferent de zero elevat a $0$ val $1$, no $0$.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "MENYS_SENSE_PARENTESI": "Sense parèntesi, el signe $-$ no forma part de la base: $-a^n$ és $-(a^n)$, no $(-a)^n$.",
  "PARITAT_EXPONENT": "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna resultat positiu; amb exponent senar, el resultat es queda negatiu.",
  "POTENCIA_APLICADA_MALAMENT": "La potència no s'ha aplicat a tot el que havia d'afectar: mira bé què queda dins del parèntesi.",
  "POTENCIA_POTENCIA_SUMADA": "En una potència d'una potència, els exponents es MULTIPLIQUEN, no se sumen: $(a^m)^n=a^{m\\cdot n}$.",
  "REGLA_NOMES_PRODUCTE": "La regla de sumar exponents només val per MULTIPLICAR potències de la mateixa base, no per sumar-les: quan se sumen, cal sumar els valors de cada potència.",
  "REGLA_NOMES_QUOCIENT": "La regla de restar exponents és per DIVIDIR potències de la mateixa base, no per restar-les: quan es resten, cal restar els valors de cada potència.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "345a",
   "ex": 345,
   "ap": "a",
   "bloc": "verifica",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Digues si aquesta igualtat entre potències és certa o falsa, comprovant-la amb la propietat que hi correspon.",
   "enunciat": "$3^2\\cdot 3^5=3^{7}$",
   "opcions": [
    "Falsa: és $3^{3}$",
    "Falsa: és $9^{7}$",
    "Falsa: és $3^{10}$",
    "Certa"
   ],
   "pistes": [
    "És un producte de potències de la mateixa base.",
    "Els exponents se sumen: quant fa $2+5$?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXN0YXIgZXhwb25lbnRzIMOpcyBwZXIgRElWSURJUi4gQXF1w60gZXMgbXVsdGlwbGljYTogJDIrNT03JC4gTGEgaWd1YWx0YXQgw6lzIGNlcnRhLiIsICJMYSBiYXNlIG5vIGVzIG11bHRpcGxpY2E6IGVzIHF1ZWRhICQzJC4gTGEgaWd1YWx0YXQgw6lzIGNlcnRhLiIsICJFbiB1biBQUk9EVUNURSBkZSBwb3TDqG5jaWVzIGRlIGxhIG1hdGVpeGEgYmFzZSBlbHMgZXhwb25lbnRzIHNlIHN1bWVuOiAkMis1PTckLiBMYSBpZ3VhbHRhdCDDqXMgY2VydGEuIiwgIiJdLCAiZXJyIjogWyJFWFBPTkVOVFNfUkVTVEFUU19QUk9EVUNURSIsICJCQVNFX0FMVEVSQURBIiwgIkVYUE9ORU5UU19NVUxUSVBMSUNBVFMiLCAiIl0sICJyZXMiOiBbIiQzXjJcXGNkb3QzXjU9M157Mis1fT0zXns3fSQ6IGxhIGlndWFsdGF0IMOpcyBjZXJ0YS4iXX0="
  },
  {
   "id": "345b",
   "ex": 345,
   "ap": "b",
   "bloc": "verifica",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Digues si aquesta igualtat entre potències és certa o falsa, comprovant-la amb la propietat que hi correspon.",
   "enunciat": "$\\left(2^3\\right)^2=2^{5}$",
   "opcions": [
    "Falsa: és $2^{9}$",
    "Certa",
    "Falsa: és $4^{5}$",
    "Falsa: és $2^{6}$"
   ],
   "pistes": [
    "És una potència elevada a una altra potència.",
    "Els exponents es multipliquen: quant fa $3\\cdot2$?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZWxldmF0IGwnZXhwb25lbnQgYWwgcXVhZHJhdCwgJDNeMj05JC4gRWxzIGV4cG9uZW50cyBlcyBtdWx0aXBsaXF1ZW46ICQzXFxjZG90Mj02JC4iLCAiSGFzIHN1bWF0IGVscyBleHBvbmVudHMuIEVuIHVuYSBwb3TDqG5jaWEgZCd1bmEgcG90w6huY2lhIGVzIE1VTFRJUExJUVVFTjogJDNcXGNkb3QyPTYkLCBubyAkMysyPTUkLiIsICJMYSBiYXNlIG5vIGNhbnZpYTogZXMgcXVlZGEgJDIkLiBJIGVscyBleHBvbmVudHMgZXMgbXVsdGlwbGlxdWVuLiIsICIiXSwgImVyciI6IFsiUE9URU5DSUFfQVBMSUNBREFfTUFMQU1FTlQiLCAiUE9URU5DSUFfUE9URU5DSUFfU1VNQURBIiwgIkJBU0VfQUxURVJBREEiLCAiIl0sICJyZXMiOiBbIiRcXGxlZnQoMl4zXFxyaWdodCleMj0yXnszXFxjZG90Mn09Ml57Nn0kLCBubyAkMl57NX0kOiBsYSBpZ3VhbHRhdCDDqXMgZmFsc2EuIl19"
  },
  {
   "id": "43a",
   "ex": 43,
   "ap": "a",
   "bloc": "verifica",
   "tipus": "A",
   "dif": 2,
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
    "Compte: no sumis els exponents ni elevis l'un a l'altre. La base es queda tal com és, amb el seu signe."
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
   "dif": 2,
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
    "Compte: no sumis els exponents ni elevis l'un a l'altre. La base es queda tal com és, amb el seu signe."
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
   "dif": 2,
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
   "dif": 2,
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
    "Compte: no sumis els exponents ni elevis l'un a l'altre. La base es queda tal com és, amb el seu signe."
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
   "dif": 2,
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
    "Compte: no sumis els exponents ni elevis l'un a l'altre. La base es queda tal com és, amb el seu signe."
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
   "dif": 2,
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
   "id": "42a",
   "ex": 42,
   "ap": "a",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "dif": 3,
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
   "id": "41a",
   "ex": 41,
   "ap": "a",
   "bloc": "verifica",
   "tipus": "B",
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
   "dif": 4,
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
  }
 ]
};
