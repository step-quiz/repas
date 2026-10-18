/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 4,
 "titol": "Full 4 — Polinomis",
 "subtitol": "Operacions, divisió i regla de Ruffini, igualtats notables i factorització de polinomis.",
 "blocs": [
  {
   "id": "operacions",
   "titol": "Operacions amb polinomis",
   "descripcio": "Suma, resta i producte de polinomis.",
   "items": [
    "327a",
    "327b",
    "327c",
    "327d",
    "328a",
    "328b",
    "62a",
    "62b",
    "62c",
    "62d",
    "63a",
    "63b",
    "63c",
    "63d",
    "63e",
    "63f",
    "64a",
    "64b",
    "64c",
    "64d"
   ]
  },
  {
   "id": "divisio",
   "titol": "Divisió de polinomis i regla de Ruffini",
   "descripcio": "Divisió llarga, Ruffini i taules de Ruffini a completar.",
   "items": [
    "329a",
    "329b",
    "330a",
    "330b",
    "330c",
    "331a",
    "65a",
    "65b",
    "66a",
    "66b",
    "66c",
    "66d",
    "66e",
    "68a",
    "68b",
    "68c",
    "68d",
    "67a",
    "67b",
    "67c",
    "67d",
    "67e",
    "67f",
    "69a",
    "69b",
    "69c",
    "69d"
   ]
  },
  {
   "id": "notables",
   "titol": "Igualtats notables",
   "descripcio": "Completar i reconèixer quadrats de binomis i sumes per diferències.",
   "items": [
    "348a",
    "348b",
    "71a",
    "71b",
    "71c",
    "71d",
    "71e",
    "71f",
    "70a",
    "70b",
    "70c",
    "70d",
    "72a",
    "72b"
   ]
  },
  {
   "id": "factor_comu",
   "titol": "Factor comú i simplificació",
   "descripcio": "Factor comú i combinació amb igualtats notables.",
   "items": [
    "349a",
    "349b",
    "73a",
    "73b",
    "73c",
    "73d",
    "74a",
    "74b",
    "74c",
    "74d",
    "74e",
    "74f",
    "74g",
    "74h"
   ]
  }
 ],
 "errors": {
  "DISTRIBUCIO_INCOMPLETA": "En multiplicar un polinomi per un altre, cada terme del primer s'ha de multiplicar per TOTS els termes del segon, no només per un.",
  "EXPONENTS_SUMATS_QUOCIENT": "En dividir potències de la mateixa base, els exponents es RESTEN, no se sumen: $a^m:a^n=a^{m-n}$.",
  "GRAUS_MAL_AGRUPATS": "Només es poden sumar o restar termes del MATEIX grau: $x^3$ amb $x^3$, $x^2$ amb $x^2$... Revisa que has agrupat els termes correctes.",
  "GRAU_PRODUCTE_MAL": "En multiplicar potències de $x$, els exponents se SUMEN: $x^a\\cdot x^b=x^{a+b}$. El grau del producte és la suma dels graus dels factors.",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PARENTESI_NO_DISTRIBUIT_POLI": "Restar un polinomi és restar-ne TOTS els termes, no només el primer. Revisa el signe de cada terme del polinomi que restes.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_PRODUCTE": "Revisa la regla dels signes del producte: signes diferents donen resultat negatiu.",
  "SIGNE_SUMA": "Revisa el signe del terme que se suma: sumar un negatiu fa disminuir.",
  "SIGNE_TERME_INDEPENDENT": "Revisa el signe del terme independent (el que no porta $x$): és fàcil perdre'l en sumar o restar.",
  "TERMES_NO_REDUITS": "Falta reduir els termes semblants abans de treure conclusions: l'expressió encara es pot simplificar.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "327a",
   "ex": 327,
   "ap": "a",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fes les operacions amb aquests polinomis i simplifica el resultat.",
   "enunciat": "$(3x+2)+(x-5)$",
   "opcions": [
    "$4x+7$",
    "$3x-3$",
    "$4x-3$",
    "$4x^2-3$"
   ],
   "pistes": [
    "Ajunta les $x$ amb les $x$ i els números amb els números.",
    "$3x+x=4x$ i $2-5=-3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgZWwgJDUkIGVuIGxsb2MgZGUgcmVzdGFyLWxvOiBlbCBzZWdvbiBwYXLDqG50ZXNpIHBvcnRhICQtNSQsIGkgJDIrKC01KT0tMyQuIiwgIlQnaGFzIGRlaXhhdCBsYSAkeCQgZGVsIHNlZ29uIHBhcsOobnRlc2kuIFVuYSAkeCQgc29sYSB2YWwgJDF4JDogJDN4KzF4PTR4JC4iLCAiIiwgIkVuIHN1bWFyIHRlcm1lcyBzZW1ibGFudHMsIGVscyBleHBvbmVudHMgTk8gc2Ugc3VtZW46ICQzeCt4PTR4JCwgbm8gJDR4XjIkLiBFbCBxdWUgc2Ugc3VtZW4gc8OzbiBlbHMgY29lZmljaWVudHMuIl0sICJlcnIiOiBbIlNJR05FX1NVTUEiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiR1JBVVNfTUFMX0FHUlVQQVRTIl0sICJyZXMiOiBbIiQoM3grMikrKHgtNSk9M3greCsyLTU9NHgtMyQiXX0="
  },
  {
   "id": "327b",
   "ex": 327,
   "ap": "b",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fes les operacions amb aquests polinomis i simplifica el resultat.",
   "enunciat": "$(x^2+4x)+(2x^2-x)$",
   "opcions": [
    "$3x^4+3x^2$",
    "$3x^2+5x$",
    "$3x^2+3x$",
    "$6x^3$"
   ],
   "pistes": [
    "Només se sumen els termes del MATEIX grau.",
    "Els de grau 2 entre ells ($x^2+2x^2$) i els de grau 1 entre ells ($4x-x$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbHMgZXhwb25lbnRzIG5vIHNlIHN1bWVuIGVuIHN1bWFyOiAkeF4yKzJ4XjI9M3heMiQsIGkgbCdleHBvbmVudCBlcyBxdWVkYSBlbiAkMiQuIiwgIkhhcyBzdW1hdCBsYSAkeCQgZGVsIHNlZ29uIHBhcsOobnRlc2kgZW4gbGxvYyBkZSByZXN0YXItbGE6ICQ0eC14PTN4JC4iLCAiIiwgIkhhcyBhanVudGF0IHRlcm1lcyBxdWUgbm8gc8OzbiBzZW1ibGFudHMuICR4XjIkIGkgJHgkIHPDs24gZ3JhdXMgZGlmZXJlbnRzIGkgbm8gZXMgcG9kZW4gc3VtYXIgZW50cmUgZWxscy4iXSwgImVyciI6IFsiRVhQT05FTlRTX1NVTUFUU19RVU9DSUVOVCIsICJTSUdORV9TVU1BIiwgIiIsICJURVJNRVNfTk9fUkVEVUlUUyJdLCAicmVzIjogWyIkKHheMis0eCkrKDJ4XjIteCk9KHheMisyeF4yKSsoNHgteCk9M3heMiszeCQiXX0="
  },
  {
   "id": "327c",
   "ex": 327,
   "ap": "c",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fes les operacions amb aquests polinomis i simplifica el resultat.",
   "enunciat": "$(5x-1)-(2x+3)$",
   "opcions": [
    "$3x+2$",
    "$7x-4$",
    "$3x-4$",
    "$3x-2$"
   ],
   "pistes": [
    "Un menys davant d'un parèntesi canvia el signe de tot el que hi ha a dins.",
    "$-(2x+3)=-2x-3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBtZW55cyBkZSBkYXZhbnQgZGVsIHBhcsOobnRlc2kgYWZlY3RhIFRPVFMgZG9zIHRlcm1lczogJC0oMngrMyk9LTJ4LTMkLCBkZSBtYW5lcmEgcXVlICQtMS0zPS00JC4gUmVzdGFyIHVuIHBvbGlub21pIMOpcyByZXN0YXItbmUgVE9UUyBlbHMgdGVybWVzLCBubyBub23DqXMgZWwgcHJpbWVyLiBSZXZpc2EgZWwgc2lnbmUgZGUgY2FkYSB0ZXJtZSBkZWwgcG9saW5vbWkgcXVlIHJlc3Rlcy4iLCAiSGFzIHN1bWF0IGxlcyAkeCQgZW4gbGxvYyBkZSByZXN0YXItbGVzOiAkNXgtMng9M3gkLiIsICIiLCAiUmV2aXNhIGVscyB0ZXJtZXMgc2Vuc2UgJHgkOiDDqXMgJC0xLTMkLCBxdWUgZmEgJC00JC4iXSwgImVyciI6IFsiUEFSRU5URVNJX05PX0RJU1RSSUJVSVRfUE9MSSIsICJTSUdORV9TVU1BIiwgIiIsICJPUkRSRV9SRVNUQSJdLCAicmVzIjogWyIkKDV4LTEpLSgyeCszKT01eC0xLTJ4LTM9M3gtNCQiXX0="
  },
  {
   "id": "327d",
   "ex": 327,
   "ap": "d",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fes les operacions amb aquests polinomis i simplifica el resultat.",
   "enunciat": "$(x^2-2)-(x^2+6)$",
   "opcions": [
    "$2x^2-8$",
    "$-4$",
    "$-8$",
    "$4$"
   ],
   "pistes": [
    "Compte: els dos $x^2$ es cancel·len.",
    "$x^2-x^2=0$; només queden els números."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgZWxzICR4XjIkIGVuIGxsb2MgZGUgcmVzdGFyLWxvcy4gJHheMi14XjI9MCQsIGkgZWwgdGVybWUgZGVzYXBhcmVpeC4iLCAiUmV2aXNhIGxhIHJlc3RhIGRlbHMgbsO6bWVyb3M6ICQtMi02PS04JC4iLCAiIiwgIkVsICQrNiQgZXMgY29udmVydGVpeCBlbiAkLTYkIGVuIHRyZXVyZSBlbCBwYXLDqG50ZXNpOiAkLTItNj0tOCQuIFJlc3RhciB1biBwb2xpbm9taSDDqXMgcmVzdGFyLW5lIFRPVFMgZWxzIHRlcm1lcywgbm8gbm9tw6lzIGVsIHByaW1lci4gUmV2aXNhIGVsIHNpZ25lIGRlIGNhZGEgdGVybWUgZGVsIHBvbGlub21pIHF1ZSByZXN0ZXMuIl0sICJlcnIiOiBbIlNJR05FX1NVTUEiLCAiT1JEUkVfUkVTVEEiLCAiIiwgIlBBUkVOVEVTSV9OT19ESVNUUklCVUlUX1BPTEkiXSwgInJlcyI6IFsiJCh4XjItMiktKHheMis2KT14XjItMi14XjItNj0tOCQiXSwgImNvbSI6ICJTw60sIGxhIHJlc3Bvc3RhIHBvdCBubyB0ZW5pciAkeCQ6IHF1YW4gZWxzIHRlcm1lcyBkJ3VuIGdyYXUgZXMgY2FuY2VswrdsZW4sIGFxdWVsbCBncmF1IGRlc2FwYXJlaXggZGVsIHJlc3VsdGF0LiJ9"
  },
  {
   "id": "328a",
   "ex": 328,
   "ap": "a",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aplica la propietat distributiva i simplifica.",
   "enunciat": "$2x(x+3)$",
   "opcions": [
    "$2x^2+3$",
    "$2x^2+6x$",
    "$2x+6x$",
    "$2x^2+6$"
   ],
   "pistes": [
    "El $2x$ multiplica cada terme de dins del parèntesi.",
    "$2x\\cdot x=2x^2$ i $2x\\cdot 3=6x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAkMngkIGhhIGRlIG11bHRpcGxpY2FyIGVscyBET1MgdGVybWVzIGRlIGRpbnM6IHRhbWLDqSBlbCAkMyQuIEVuIG11bHRpcGxpY2FyIHVuIHBvbGlub21pIHBlciB1biBhbHRyZSwgY2FkYSB0ZXJtZSBkZWwgcHJpbWVyIHMnaGEgZGUgbXVsdGlwbGljYXIgcGVyIFRPVFMgZWxzIHRlcm1lcyBkZWwgc2Vnb24sIG5vIG5vbcOpcyBwZXIgdW4uIiwgIiIsICIkMnhcXGNkb3QgeD0yeF4yJDogZW4gbXVsdGlwbGljYXIgZHVlcyAkeCQsIGVscyBleHBvbmVudHMgc2Ugc3VtZW4gaSBlbCBncmF1IHB1amEuIiwgIkhhcyBtdWx0aXBsaWNhdCBiw6kgZWxzIG7Dum1lcm9zICgkMlxcY2RvdCAzPTYkKSBwZXLDsiBoaSBoYXMgcGVyZHV0IGxhICR4JDogJDJ4XFxjZG90IDM9NngkLiJdLCAiZXJyIjogWyJESVNUUklCVUNJT19JTkNPTVBMRVRBIiwgIiIsICJHUkFVX1BST0RVQ1RFX01BTCIsICJESVNUUklCVUNJT19JTkNPTVBMRVRBIl0sICJyZXMiOiBbIiQyeCh4KzMpPTJ4XFxjZG90IHgrMnhcXGNkb3QgMz0yeF4yKzZ4JCJdfQ=="
  },
  {
   "id": "328b",
   "ex": 328,
   "ap": "b",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Aplica la propietat distributiva i simplifica.",
   "enunciat": "$-3(x^2-2x)$",
   "opcions": [
    "$3x^2-6x$",
    "$-3x^2-6x$",
    "$-3x^2+6x$",
    "$-3x^2+2x$"
   ],
   "pistes": [
    "El $-3$ multiplica els dos termes, amb el seu signe.",
    "$-3\\cdot x^2=-3x^2$ i $-3\\cdot(-2x)=+6x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgY2FudmlhdCBkZSBzaWduZSB0b3QgZWwgcmVzdWx0YXQuIEVsIHByaW1lciB0ZXJtZSDDqXMgJC0zXFxjZG90IHheMj0tM3heMiQsIG5lZ2F0aXUuIiwgIk1lbnlzIHBlciBtZW55cyBmYSBtw6lzOiAkLTNcXGNkb3QoLTJ4KT0rNngkLiIsICIiLCAiQWwgc2Vnb24gdGVybWUgdCdoYSBmYWx0YXQgbXVsdGlwbGljYXIgcGVsICQzJDogJC0zXFxjZG90KC0yeCk9NngkLiBFbiBtdWx0aXBsaWNhciB1biBwb2xpbm9taSBwZXIgdW4gYWx0cmUsIGNhZGEgdGVybWUgZGVsIHByaW1lciBzJ2hhIGRlIG11bHRpcGxpY2FyIHBlciBUT1RTIGVscyB0ZXJtZXMgZGVsIHNlZ29uLCBubyBub23DqXMgcGVyIHVuLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICJTSUdORV9QUk9EVUNURSIsICIiLCAiRElTVFJJQlVDSU9fSU5DT01QTEVUQSJdLCAicmVzIjogWyIkLTMoeF4yLTJ4KT0tM3heMis2eCQiXX0="
  },
  {
   "id": "62a",
   "ex": 62,
   "ap": "a",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$P(x)+Q(x)+R(x)+S(x)$",
   "opcions": [
    "$2x^{5}+5x^{3}-x-5$",
    "$2x^{5}+5x^{3}+6x^{2}-7x-9$",
    "$2x^{5}-6x^{4}+9x^{3}-4x^{2}+11x-1$",
    "$2x^{5}+5x^{3}+6x^{2}-3x-3$"
   ],
   "pistes": [
    "Suma els quatre polinomis grau a grau: primer els termes de $x^5$, després els de $x^4$, i així successivament.",
    "Vigila els polinomis que no tenen tots els graus: $R(x)$ no té terme en $x^5$ ni $x^4$ ni $x^3$, i $S(x)$ només té fins a grau $1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgcmVzdGF0ICRSKHgpJCBlbiBsbG9jIGRlIHN1bWFyLWxvLiIsICJIYXMgcmVzdGF0ICRTKHgpJCBlbiBsbG9jIGRlIHN1bWFyLWxvLiIsICJIYXMgcmVzdGF0ICRRKHgpJCBlbiBsbG9jIGRlIHN1bWFyLWxvOiByZXZpc2EgbCdlbnVuY2lhdCwgZWxzIHF1YXRyZSBwb2xpbm9taXMgc2Ugc3VtZW4uIiwgIiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiIl0sICJyZXMiOiBbIiRQKHgpK1EoeCkrUih4KStTKHgpPTJ4Xns1fSs1eF57M30rNnheezJ9LTN4LTMkIl19"
  },
  {
   "id": "62b",
   "ex": 62,
   "ap": "b",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$P(x)-R(x)+S(x)-Q(x)$",
   "opcions": [
    "$2x^{5}+5x^{3}-x-5$",
    "$2x^{5}-6x^{4}+9x^{3}-10x^{2}+9x-9$",
    "$2x^{5}-6x^{4}+9x^{3}-10x^{2}+13x-3$",
    "$2x^{5}-6x^{4}+9x^{3}-4x^{2}+11x-1$"
   ],
   "pistes": [
    "Vigila l'ordre dels signes: $P(x)$ i $S(x)$ sumen, $R(x)$ i $Q(x)$ resten.",
    "Resta $R(x)$ de $P(x)$ primer, suma-hi $S(x)$, i finalment resta'n $Q(x)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgJFEoeCkkIGVuIGxsb2MgZGUgcmVzdGFyLWxvOiByZXZpc2EgbCfDumx0aW0gc2lnbmUgZGUgbCdlbnVuY2lhdC4iLCAiSGFzIHJlc3RhdCAkUyh4KSQgZW4gbGxvYyBkZSBzdW1hci1sby4iLCAiIiwgIkhhcyBzdW1hdCAkUih4KSQgZW4gbGxvYyBkZSByZXN0YXItbG8uIl0sICJlcnIiOiBbIlBBUkVOVEVTSV9OT19ESVNUUklCVUlUX1BPTEkiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVRfUE9MSSJdLCAicmVzIjogWyIkUCh4KS1SKHgpK1MoeCktUSh4KT0yeF57NX0tNnheezR9Kzl4XnszfS0xMHheezJ9KzEzeC0zJCJdfQ=="
  },
  {
   "id": "62c",
   "ex": 62,
   "ap": "c",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)+Q(x)]-[R(x)+Q(x)]$",
   "opcions": [
    "$2x^{5}-3x^{4}+7x^{3}-5x^{2}+4x-7$",
    "$2x^{5}-9x^{4}+11x^{3}-15x^{2}+18x-5$",
    "$2x^{5}+3x^{4}+3x^{3}+11x^{2}-12x-7$",
    "$2x^{5}+3x^{4}+3x^{3}+5x^{2}-10x-9$"
   ],
   "pistes": [
    "El $Q(x)$ apareix als dos claudàtors: en restar-los, es cancel·la. El resultat és, en realitat, $P(x)-R(x)$.",
    "$[P(x)+Q(x)]-[R(x)+Q(x)]=P(x)+Q(x)-R(x)-Q(x)=P(x)-R(x)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRW4gcmVzdGFyIGVsIHNlZ29uIGNsYXVkw6B0b3IsIGhhcyBjYW52aWF0IGVsIHNpZ25lIG5vbcOpcyBkJ3VuIGRlbHMgZG9zIHRlcm1lczogJC1bUih4KStRKHgpXT0tUih4KS1RKHgpJCwgZWxzIGRvcyBhbWIgc2lnbmUgbWVueXMuIiwgIkhhcyBzdW1hdCBlbHMgZG9zIGNsYXVkw6B0b3JzIGVuIGxsb2MgZGUgcmVzdGFyLWxvcy4iLCAiQWwgc2Vnb24gY2xhdWTDoHRvciBoaSBoYSAkUih4KStRKHgpJCwgbm8gJFIoeCktUSh4KSQ6IHJldmlzYSBsJ2VudW5jaWF0LiJdLCAiZXJyIjogWyIiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVRfUE9MSSIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIkdSQVVTX01BTF9BR1JVUEFUUyJdLCAicmVzIjogWyIkW1AoeCkrUSh4KV0tW1IoeCkrUSh4KV09UCh4KS1SKHgpPTJ4Xns1fS0zeF57NH0rN3heezN9LTV4XnsyfSs0eC03JCJdfQ=="
  },
  {
   "id": "62d",
   "ex": 62,
   "ap": "d",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)-Q(x)]-[R(x)-Q(x)]$",
   "opcions": [
    "$2x^{5}-6x^{4}+9x^{3}-10x^{2}+11x-6$",
    "$2x^{5}-9x^{4}+11x^{3}-9x^{2}+16x-3$",
    "$2x^{5}-3x^{4}+7x^{3}-5x^{2}+4x-7$",
    "$2x^{5}-9x^{4}+11x^{3}-15x^{2}+18x-5$"
   ],
   "pistes": [
    "El $Q(x)$ apareix (amb el mateix signe) als dos claudàtors: en restar-los, es cancel·la igualment.",
    "$[P(x)-Q(x)]-[R(x)-Q(x)]=P(x)-Q(x)-R(x)+Q(x)=P(x)-R(x)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsICQrUSh4KSQgZmluYWw6IGVsIHNlZ29uIGNsYXVkw6B0b3Igw6lzICQtW1IoeCktUSh4KV09LVIoeCkrUSh4KSQsIG5vIG5vbcOpcyAkLVIoeCkkLiIsICJIYXMgc3VtYXQgZWxzIGRvcyBjbGF1ZMOgdG9ycyBlbiBsbG9jIGRlIHJlc3Rhci1sb3MuIiwgIiIsICJFbiByZXN0YXIgZWwgc2Vnb24gY2xhdWTDoHRvciwgbm8gaGFzIGNhbnZpYXQgZWwgc2lnbmUgZGVsICQtUSh4KSQgZGUgZGluczogJC1bUih4KS1RKHgpXT0tUih4KStRKHgpJC4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIiIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIl0sICJyZXMiOiBbIiRbUCh4KS1RKHgpXS1bUih4KS1RKHgpXT1QKHgpLVIoeCk9MnheezV9LTN4Xns0fSs3eF57M30tNXheezJ9KzR4LTckIl19"
  },
  {
   "id": "63a",
   "ex": 63,
   "ap": "a",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=x-1$",
   "opcions": [
    "$-x^{2}-x$",
    "$x^{2}+3x-2$",
    "$x^{2}+x$",
    "$-x^{2}-x-2$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Aquí $Q(x)=(x-1)-(x^2+2x-1)$: el menys canvia el signe de tots els termes de $P(x)$. Després agrupa per graus."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHN1bWF0ICRQKHgpJCBlbiBsbG9jIGRlIHJlc3Rhci1sbzogc2kgJFAoeCkrUSh4KT1SKHgpJCwgYWxlc2hvcmVzICRRKHgpPVIoeCktUCh4KSQuIiwgIkhhcyByZXN0YXQgZW4gbCdvcmRyZSBlcXVpdm9jYXQ6IMOpcyAkUih4KS1QKHgpJCwgbm8gJFAoeCktUih4KSQuIiwgIkhhcyBjYW52aWF0IGVsIHNpZ25lIGRlbCB0ZXJtZSBpbmRlcGVuZGVudCBkZSAkUCh4KSQ6IMOpcyAkLTEkLCBubyAkKzEkLiJdLCAiZXJyIjogWyIiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVRfUE9MSSIsICJPUkRSRV9SRVNUQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9LXheezJ9LXgkIl19"
  },
  {
   "id": "63b",
   "ex": 63,
   "ap": "b",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=2x^2-x-6$",
   "opcions": [
    "$-x^{2}+3x+5$",
    "$x^{2}-3x-5$",
    "$x^{2}-3x-7$",
    "$3x^{2}+x-7$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Aquí $Q(x)=(2x^2-x-6)-(x^2+2x-1)$: el menys canvia el signe de tots els termes de $P(x)$. Després agrupa per graus."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVuIGwnb3JkcmUgZXF1aXZvY2F0OiDDqXMgJFIoeCktUCh4KSQsIG5vICRQKHgpLVIoeCkkLiIsICIiLCAiSGFzIGNhbnZpYXQgZWwgc2lnbmUgZGVsIHRlcm1lIGluZGVwZW5kZW50IGRlICRQKHgpJDogw6lzICQtMSQsIG5vICQrMSQuIiwgIkhhcyBzdW1hdCAkUCh4KSQgZW4gbGxvYyBkZSByZXN0YXItbG86IHNpICRQKHgpK1EoeCk9Uih4KSQsIGFsZXNob3JlcyAkUSh4KT1SKHgpLVAoeCkkLiJdLCAiZXJyIjogWyJPUkRSRV9SRVNUQSIsICIiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVRfUE9MSSJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9eF57Mn0tM3gtNSQiXX0="
  },
  {
   "id": "63c",
   "ex": 63,
   "ap": "c",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=5x^2-x+1$",
   "opcions": [
    "$4x^{2}-3x$",
    "$-4x^{2}+3x-2$",
    "$6x^{2}+x$",
    "$4x^{2}-3x+2$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Aquí $Q(x)=(5x^2-x+1)-(x^2+2x-1)$: el menys canvia el signe de tots els termes de $P(x)$. Després agrupa per graus."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgY2FudmlhdCBlbCBzaWduZSBkZWwgdGVybWUgaW5kZXBlbmRlbnQgZGUgJFAoeCkkOiDDqXMgJC0xJCwgbm8gJCsxJC4iLCAiSGFzIHJlc3RhdCBlbiBsJ29yZHJlIGVxdWl2b2NhdDogw6lzICRSKHgpLVAoeCkkLCBubyAkUCh4KS1SKHgpJC4iLCAiSGFzIHN1bWF0ICRQKHgpJCBlbiBsbG9jIGRlIHJlc3Rhci1sbzogc2kgJFAoeCkrUSh4KT1SKHgpJCwgYWxlc2hvcmVzICRRKHgpPVIoeCktUCh4KSQuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJPUkRSRV9SRVNUQSIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIiJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9NHheezJ9LTN4KzIkIl19"
  },
  {
   "id": "63d",
   "ex": 63,
   "ap": "d",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=-7x^2-3x$",
   "opcions": [
    "$-8x^{2}-5x-1$",
    "$-6x^{2}-x-1$",
    "$8x^{2}+5x-1$",
    "$-8x^{2}-5x+1$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Aquí $Q(x)=(-7x^2-3x)-(x^2+2x-1)$: el menys canvia el signe de tots els termes de $P(x)$. Després agrupa per graus."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgY2FudmlhdCBlbCBzaWduZSBkZWwgdGVybWUgaW5kZXBlbmRlbnQgZGUgJFAoeCkkOiDDqXMgJC0xJCwgbm8gJCsxJC4iLCAiSGFzIHN1bWF0ICRQKHgpJCBlbiBsbG9jIGRlIHJlc3Rhci1sbzogc2kgJFAoeCkrUSh4KT1SKHgpJCwgYWxlc2hvcmVzICRRKHgpPVIoeCktUCh4KSQuIiwgIkhhcyByZXN0YXQgZW4gbCdvcmRyZSBlcXVpdm9jYXQ6IMOpcyAkUih4KS1QKHgpJCwgbm8gJFAoeCktUih4KSQuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIk9SRFJFX1JFU1RBIiwgIiJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9LTh4XnsyfS01eCsxJCJdfQ=="
  },
  {
   "id": "63e",
   "ex": 63,
   "ap": "e",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=x^3-x$",
   "opcions": [
    "$x^{3}+x^{2}+x-1$",
    "$x^{3}-x^{2}-3x-1$",
    "$-x^{3}+x^{2}+3x-1$",
    "$x^{3}-x^{2}-3x+1$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Aquí $Q(x)=(x^3-x)-(x^2+2x-1)$: el menys canvia el signe de tots els termes de $P(x)$. Després agrupa per graus."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgc3VtYXQgJFAoeCkkIGVuIGxsb2MgZGUgcmVzdGFyLWxvOiBzaSAkUCh4KStRKHgpPVIoeCkkLCBhbGVzaG9yZXMgJFEoeCk9Uih4KS1QKHgpJC4iLCAiSGFzIGNhbnZpYXQgZWwgc2lnbmUgZGVsIHRlcm1lIGluZGVwZW5kZW50IGRlICRQKHgpJDogw6lzICQtMSQsIG5vICQrMSQuIiwgIkhhcyByZXN0YXQgZW4gbCdvcmRyZSBlcXVpdm9jYXQ6IMOpcyAkUih4KS1QKHgpJCwgbm8gJFAoeCktUih4KSQuIiwgIiJdLCAiZXJyIjogWyJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIlNJR05FX1RFUk1FX0lOREVQRU5ERU5UIiwgIk9SRFJFX1JFU1RBIiwgIiJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9eF57M30teF57Mn0tM3grMSQiXX0="
  },
  {
   "id": "63f",
   "ex": 63,
   "ap": "f",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=x^3-x^2$",
   "opcions": [
    "$x^{3}+2x-1$",
    "$-x^{3}+2x^{2}+2x-1$",
    "$x^{3}-2x^{2}-2x+1$",
    "$x^{3}-2x^{2}-2x-1$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Aquí $Q(x)=(x^3-x^2)-(x^2+2x-1)$: el menys canvia el signe de tots els termes de $P(x)$. Després agrupa per graus."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgJFAoeCkkIGVuIGxsb2MgZGUgcmVzdGFyLWxvOiBzaSAkUCh4KStRKHgpPVIoeCkkLCBhbGVzaG9yZXMgJFEoeCk9Uih4KS1QKHgpJC4iLCAiSGFzIHJlc3RhdCBlbiBsJ29yZHJlIGVxdWl2b2NhdDogw6lzICRSKHgpLVAoeCkkLCBubyAkUCh4KS1SKHgpJC4iLCAiIiwgIkhhcyBjYW52aWF0IGVsIHNpZ25lIGRlbCB0ZXJtZSBpbmRlcGVuZGVudCBkZSAkUCh4KSQ6IMOpcyAkLTEkLCBubyAkKzEkLiJdLCAiZXJyIjogWyJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIk9SRFJFX1JFU1RBIiwgIiIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9eF57M30tMnheezJ9LTJ4KzEkIl19"
  },
  {
   "id": "64a",
   "ex": 64,
   "ap": "a",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)-Q(x)]\\cdot S(x)$",
   "opcions": [
    "$4x^{6}-6x^{5}+13x^{3}-x^{2}+20x-15$",
    "$4x^{6}-12x^{5}+18x^{4}-14x^{3}+20x^{2}-10x$",
    "$6x^{5}-18x^{4}+27x^{3}-21x^{2}+30x-15$",
    "$-4x^{6}+6x^{5}-13x^{3}+x^{2}-20x+15$"
   ],
   "pistes": [
    "Multiplica cada terme de $[P(x)-Q(x)]$ per CADA terme de $S(x)=2x+3$: pel $2x$ i pel $3$.",
    "Un cop distribuït, agrupa els termes del mateix grau i suma'ls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm9tw6lzIGhhcyBtdWx0aXBsaWNhdCBwZWwgdGVybWUgJDJ4JCBkZSAkUyh4KSQ6IGNhbCBtdWx0aXBsaWNhciB0YW1iw6kgcGVsIHRlcm1lICQzJC4iLCAiTm9tw6lzIGhhcyBtdWx0aXBsaWNhdCBwZWwgdGVybWUgJDMkIGRlICRTKHgpJDogY2FsIG11bHRpcGxpY2FyIHRhbWLDqSBwZWwgdGVybWUgJDJ4JC4iLCAiRWwgcmVzdWx0YXQgdMOpIHRvdHMgZWxzIHNpZ25lcyBjYW52aWF0czogcmV2aXNhIGVscyBzaWduZXMgZGUgJFtQKHgpLVEoeCldJCBhYmFucyBkZSBtdWx0aXBsaWNhci4iXSwgImVyciI6IFsiIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiLCAiRElTVFJJQlVDSU9fSU5DT01QTEVUQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCJdLCAicmVzIjogWyIkW1AoeCktUSh4KV1cXGNkb3QgUyh4KT00eF57Nn0tNnheezV9KzEzeF57M30teF57Mn0rMjB4LTE1JCJdfQ=="
  },
  {
   "id": "64b",
   "ex": 64,
   "ap": "b",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[R(x)-Q(x)]\\cdot S(x)$",
   "opcions": [
    "$-9x^{4}+6x^{3}-6x^{2}+18x+6$",
    "$6x^{5}+5x^{4}-2x^{3}-6x^{2}-22x-6$",
    "$-6x^{5}+4x^{4}-4x^{3}+12x^{2}+4x$",
    "$-6x^{5}-5x^{4}+2x^{3}+6x^{2}+22x+6$"
   ],
   "pistes": [
    "Multiplica cada terme de $[R(x)-Q(x)]$ per CADA terme de $S(x)=2x+3$: pel $2x$ i pel $3$.",
    "Un cop distribuït, agrupa els termes del mateix grau i suma'ls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJOb23DqXMgaGFzIG11bHRpcGxpY2F0IHBlbCB0ZXJtZSAkMyQgZGUgJFMoeCkkOiBjYWwgbXVsdGlwbGljYXIgdGFtYsOpIHBlbCB0ZXJtZSAkMngkLiIsICJFbCByZXN1bHRhdCB0w6kgdG90cyBlbHMgc2lnbmVzIGNhbnZpYXRzOiByZXZpc2EgZWxzIHNpZ25lcyBkZSAkW1IoeCktUSh4KV0kIGFiYW5zIGRlIG11bHRpcGxpY2FyLiIsICJOb23DqXMgaGFzIG11bHRpcGxpY2F0IHBlbCB0ZXJtZSAkMngkIGRlICRTKHgpJDogY2FsIG11bHRpcGxpY2FyIHRhbWLDqSBwZWwgdGVybWUgJDMkLiIsICIiXSwgImVyciI6IFsiRElTVFJJQlVDSU9fSU5DT01QTEVUQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJESVNUUklCVUNJT19JTkNPTVBMRVRBIiwgIiJdLCAicmVzIjogWyIkW1IoeCktUSh4KV1cXGNkb3QgUyh4KT0tNnheezV9LTV4Xns0fSsyeF57M30rNnheezJ9KzIyeCs2JCJdfQ=="
  },
  {
   "id": "64c",
   "ex": 64,
   "ap": "c",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)+Q(x)+R(x)]\\cdot S(x)$",
   "opcions": [
    "$4x^{6}+6x^{5}+10x^{4}+27x^{3}+8x^{2}-27x-18$",
    "$4x^{6}+10x^{4}+12x^{3}-10x^{2}-12x$",
    "$-4x^{6}-6x^{5}-10x^{4}-27x^{3}-8x^{2}+27x+18$",
    "$6x^{5}+15x^{3}+18x^{2}-15x-18$"
   ],
   "pistes": [
    "Multiplica cada terme de $[P(x)+Q(x)+R(x)]$ per CADA terme de $S(x)=2x+3$: pel $2x$ i pel $3$.",
    "Un cop distribuït, agrupa els termes del mateix grau i suma'ls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm9tw6lzIGhhcyBtdWx0aXBsaWNhdCBwZWwgdGVybWUgJDJ4JCBkZSAkUyh4KSQ6IGNhbCBtdWx0aXBsaWNhciB0YW1iw6kgcGVsIHRlcm1lICQzJC4iLCAiRWwgcmVzdWx0YXQgdMOpIHRvdHMgZWxzIHNpZ25lcyBjYW52aWF0czogcmV2aXNhIGVscyBzaWduZXMgZGUgJFtQKHgpK1EoeCkrUih4KV0kIGFiYW5zIGRlIG11bHRpcGxpY2FyLiIsICJOb23DqXMgaGFzIG11bHRpcGxpY2F0IHBlbCB0ZXJtZSAkMyQgZGUgJFMoeCkkOiBjYWwgbXVsdGlwbGljYXIgdGFtYsOpIHBlbCB0ZXJtZSAkMngkLiJdLCAiZXJyIjogWyIiLCAiRElTVFJJQlVDSU9fSU5DT01QTEVUQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJESVNUUklCVUNJT19JTkNPTVBMRVRBIl0sICJyZXMiOiBbIiRbUCh4KStRKHgpK1IoeCldXFxjZG90IFMoeCk9NHheezZ9KzZ4Xns1fSsxMHheezR9KzI3eF57M30rOHheezJ9LTI3eC0xOCQiXX0="
  },
  {
   "id": "64d",
   "ex": 64,
   "ap": "d",
   "bloc": "operacions",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)+Q(x)-R(x)]\\cdot S(x)$",
   "opcions": [
    "$-4x^{6}-6x^{5}-10x^{4}-15x^{3}+6x^{2}+25x+24$",
    "$6x^{5}+15x^{3}-9x-24$",
    "$4x^{6}+10x^{4}-6x^{2}-16x$",
    "$4x^{6}+6x^{5}+10x^{4}+15x^{3}-6x^{2}-25x-24$"
   ],
   "pistes": [
    "Multiplica cada terme de $[P(x)+Q(x)-R(x)]$ per CADA terme de $S(x)=2x+3$: pel $2x$ i pel $3$.",
    "Un cop distribuït, agrupa els termes del mateix grau i suma'ls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXN1bHRhdCB0w6kgdG90cyBlbHMgc2lnbmVzIGNhbnZpYXRzOiByZXZpc2EgZWxzIHNpZ25lcyBkZSAkW1AoeCkrUSh4KS1SKHgpXSQgYWJhbnMgZGUgbXVsdGlwbGljYXIuIiwgIk5vbcOpcyBoYXMgbXVsdGlwbGljYXQgcGVsIHRlcm1lICQzJCBkZSAkUyh4KSQ6IGNhbCBtdWx0aXBsaWNhciB0YW1iw6kgcGVsIHRlcm1lICQyeCQuIiwgIk5vbcOpcyBoYXMgbXVsdGlwbGljYXQgcGVsIHRlcm1lICQyeCQgZGUgJFMoeCkkOiBjYWwgbXVsdGlwbGljYXIgdGFtYsOpIHBlbCB0ZXJtZSAkMyQuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJESVNUUklCVUNJT19JTkNPTVBMRVRBIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiLCAiIl0sICJyZXMiOiBbIiRbUCh4KStRKHgpLVIoeCldXFxjZG90IFMoeCk9NHheezZ9KzZ4Xns1fSsxMHheezR9KzE1eF57M30tNnheezJ9LTI1eC0yNCQiXX0="
  }
 ]
};
