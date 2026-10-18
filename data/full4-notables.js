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
  "DIFERENCIA_QUADRATS_MAL": "Una diferència de quadrats $a^2-b^2$ es factoritza com $(a-b)(a+b)$: revisa que els dos factors tinguin signes diferents.",
  "GRAUS_MAL_AGRUPATS": "Només es poden sumar o restar termes del MATEIX grau: $x^3$ amb $x^3$, $x^2$ amb $x^2$... Revisa que has agrupat els termes correctes.",
  "GRAU_PRODUCTE_MAL": "En multiplicar potències de $x$, els exponents se SUMEN: $x^a\\cdot x^b=x^{a+b}$. El grau del producte és la suma dels graus dels factors.",
  "IGUALTAT_NOTABLE_DOBLE_OBLIDAT": "Al quadrat d'una suma o d'una resta, el terme del mig és el DOBLE producte, $2ab$, no només $ab$.",
  "IGUALTAT_NOTABLE_SIGNE": "Revisa el signe del terme del mig: $(a-b)^2=a^2-2ab+b^2$, amb el terme del mig NEGATIU, a diferència de $(a+b)^2$.",
  "QUADRAT_INCOMPLET": "Per reconèixer un quadrat perfecte calen els TRES termes: el quadrat del primer, el doble producte, i el quadrat del segon. Revisa que hi són tots.",
  "SUMA_PER_DIFERENCIA_MAL": "$(a+b)(a-b)=a^2-b^2$: el terme del mig s'anul·la sempre. No hi ha terme en $ab$ al resultat."
 },
 "items": [
  {
   "id": "348a",
   "ex": 348,
   "ap": "a",
   "bloc": "notables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Desenvolupa aquesta igualtat notable. Recorda: $(a+b)^2=a^2+2ab+b^2$ i $(a-b)^2=a^2-2ab+b^2$.",
   "enunciat": "$(x+3)^2$",
   "opcions": [
    "$x^2+6x+9$",
    "$x^2+9$",
    "$x^2+3x+9$",
    "$x^2-6x+9$"
   ],
   "pistes": [
    "Aquí $a=x$ i $b=3$.",
    "$x^2+2\\cdot x\\cdot3+3^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiVCdoYXMgZGVpeGF0IGVsIHRlcm1lIGRlbCBtaWcsIGVsIGRvYmxlIHByb2R1Y3RlICQyXFxjZG90IHhcXGNkb3QzJC4gUGVyIHJlY29uw6hpeGVyIHVuIHF1YWRyYXQgcGVyZmVjdGUgY2FsZW4gZWxzIFRSRVMgdGVybWVzOiBlbCBxdWFkcmF0IGRlbCBwcmltZXIsIGVsIGRvYmxlIHByb2R1Y3RlLCBpIGVsIHF1YWRyYXQgZGVsIHNlZ29uLiBSZXZpc2EgcXVlIGhpIHPDs24gdG90cy4iLCAiQWwgcXVhZHJhdCBkJ3VuYSBzdW1hIG8gZCd1bmEgcmVzdGEsIGVsIHRlcm1lIGRlbCBtaWcgw6lzIGVsIERPQkxFIHByb2R1Y3RlLCAkMmFiJCwgbm8gbm9tw6lzICRhYiQuIiwgIkFxdcOtIMOpcyB1bmEgU1VNQTogZWwgdGVybWUgZGVsIG1pZyDDqXMgcG9zaXRpdS4gUmV2aXNhIGVsIHNpZ25lIGRlbCB0ZXJtZSBkZWwgbWlnOiAkKGEtYileMj1hXjItMmFiK2JeMiQsIGFtYiBlbCB0ZXJtZSBkZWwgbWlnIE5FR0FUSVUsIGEgZGlmZXLDqG5jaWEgZGUgJChhK2IpXjIkLiJdLCAiZXJyIjogWyIiLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiSUdVQUxUQVRfTk9UQUJMRV9ET0JMRV9PQkxJREFUIiwgIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiXSwgInJlcyI6IFsiJCh4KzMpXjI9eF4yKzJcXGNkb3QgeFxcY2RvdDMrM14yPXheMis2eCs5JCJdfQ=="
  },
  {
   "id": "348b",
   "ex": 348,
   "ap": "b",
   "bloc": "notables",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Desenvolupa aquesta igualtat notable. Recorda: $(a+b)^2=a^2+2ab+b^2$ i $(a-b)^2=a^2-2ab+b^2$.",
   "enunciat": "$(x-5)^2$",
   "opcions": [
    "$x^2-25$",
    "$x^2-10x+25$",
    "$x^2-5x+25$",
    "$x^2+10x+25$"
   ],
   "pistes": [
    "Aquí $a=x$ i $b=5$, i és el quadrat d'una RESTA.",
    "$x^2-2\\cdot x\\cdot5+5^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZWxldmF0IGNhZGEgdGVybWUgYWwgcXVhZHJhdCBpIHQnaGFzIGRlaXhhdCBlbCBkb2JsZSBwcm9kdWN0ZS4gQSBtw6lzLCAkKC01KV4yPSsyNSQuIFBlciByZWNvbsOoaXhlciB1biBxdWFkcmF0IHBlcmZlY3RlIGNhbGVuIGVscyBUUkVTIHRlcm1lczogZWwgcXVhZHJhdCBkZWwgcHJpbWVyLCBlbCBkb2JsZSBwcm9kdWN0ZSwgaSBlbCBxdWFkcmF0IGRlbCBzZWdvbi4gUmV2aXNhIHF1ZSBoaSBzw7NuIHRvdHMuIiwgIiIsICJBbCBxdWFkcmF0IGQndW5hIHN1bWEgbyBkJ3VuYSByZXN0YSwgZWwgdGVybWUgZGVsIG1pZyDDqXMgZWwgRE9CTEUgcHJvZHVjdGUsICQyYWIkLCBubyBub23DqXMgJGFiJC4iLCAiUmV2aXNhIGVsIHNpZ25lIGRlbCB0ZXJtZSBkZWwgbWlnOiAkKGEtYileMj1hXjItMmFiK2JeMiQsIGFtYiBlbCB0ZXJtZSBkZWwgbWlnIE5FR0FUSVUsIGEgZGlmZXLDqG5jaWEgZGUgJChhK2IpXjIkLiJdLCAiZXJyIjogWyJRVUFEUkFUX0lOQ09NUExFVCIsICIiLCAiSUdVQUxUQVRfTk9UQUJMRV9ET0JMRV9PQkxJREFUIiwgIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiXSwgInJlcyI6IFsiJCh4LTUpXjI9eF4yLTJcXGNkb3QgeFxcY2RvdDUrNV4yPXheMi0xMHgrMjUkIl19"
  },
  {
   "id": "71a",
   "ex": 71,
   "ap": "a",
   "bloc": "notables",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$x^2-16$",
   "opcions": [
    "$(x-4)^2$",
    "$(x-4)(x+4)$",
    "$(x-8)(x+8)$",
    "$(x-16)(x+16)$"
   ],
   "pistes": [
    "Són dos termes que es resten: mira si tots dos són quadrats perfectes. Quina és l'arrel quadrada de $16$?",
    "Una diferència de quadrats es factoritza així: $a^2-b^2=(a-b)(a+b)$, amb $a$ l'arrel de $x^2$ i $b$ la de $16$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyDDqXMgdW4gcXVhZHJhdCBwZXJmZWN0ZSAobm8gaGkgaGEgdGVybWUgZW4gJHgkIGRlIGdyYXUgJDEkIGEgbCdleHByZXNzacOzIG9yaWdpbmFsKTogw6lzIHVuYSBkaWZlcsOobmNpYSBkZSBxdWFkcmF0cywgJHheMi00XjIkLiIsICIiLCAiRWwgc2Vnb24gbm9tYnJlIGhhIGRlIHNlciBsJ2FycmVsIHF1YWRyYWRhIGRlICQxNiQsIHF1ZSDDqXMgJDQkLCBubyAkOCQuIiwgIk5vIGVzIGZhY3Rvcml0emEgZWwgJDE2JCB0YWwgcXVhbDogY2FsIHRyb2Jhci1uZSBsJ2FycmVsIHF1YWRyYWRhLCAkNCQuIl0sICJlcnIiOiBbIlFVQURSQVRfSU5DT01QTEVUIiwgIiIsICJESUZFUkVOQ0lBX1FVQURSQVRTX01BTCIsICJESUZFUkVOQ0lBX1FVQURSQVRTX01BTCJdLCAicmVzIjogWyIkeF4yLTE2PSh4LTQpKHgrNCkkIl19"
  },
  {
   "id": "71b",
   "ex": 71,
   "ap": "b",
   "bloc": "notables",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$x^4-36$",
   "opcions": [
    "$(x^2-6)(x^2+6)$",
    "$(x^2-36)(x^2+36)$",
    "$(x-6)(x+6)$",
    "$(x^2-6)^2$"
   ],
   "pistes": [
    "Són dos termes que es resten: mira si tots dos són quadrats perfectes. Quina expressió, elevada al quadrat, dona $x^4$?",
    "Una diferència de quadrats es factoritza així: $a^2-b^2=(a-b)(a+b)$, amb $a$ l'arrel de $x^4$ i $b$ la de $36$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgc2Vnb24gbm9tYnJlIGhhIGRlIHNlciBsJ2FycmVsIHF1YWRyYWRhIGRlICQzNiQsIHF1ZSDDqXMgJDYkLCBubyAkMzYkLiIsICJFbCBwcmltZXIgdGVybWUgw6lzICR4XjQ9KHheMileMiQsIG5vICR4XjIkOiBlbCBwcmltZXIgZmFjdG9yIGhhIGRlIHBvcnRhciAkeF4yJCwgbm8gJHgkLiIsICJObyDDqXMgdW4gcXVhZHJhdCBwZXJmZWN0ZSwgc2luw7MgdW5hIGRpZmVyw6huY2lhIGRlIHF1YWRyYXRzOiBubyBoaSBoYSB0ZXJtZSBkZWwgbWlnIGEgbCdleHByZXNzacOzIG9yaWdpbmFsLiJdLCAiZXJyIjogWyIiLCAiRElGRVJFTkNJQV9RVUFEUkFUU19NQUwiLCAiR1JBVV9QUk9EVUNURV9NQUwiLCAiUVVBRFJBVF9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJHheNC0zNj0oeF4yLTYpKHheMis2KSQiXX0="
  },
  {
   "id": "71c",
   "ex": 71,
   "ap": "c",
   "bloc": "notables",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$4x^2-25$",
   "opcions": [
    "$(2x-25)(2x+25)$",
    "$(2x-5)^2$",
    "$(2x-5)(2x+5)$",
    "$(4x-25)(4x+25)$"
   ],
   "pistes": [
    "Són dos termes que es resten: mira si tots dos són quadrats perfectes. Quina expressió, elevada al quadrat, dona $4x^2$?",
    "Una diferència de quadrats es factoritza així: $a^2-b^2=(a-b)(a+b)$, amb $a$ l'arrel de $4x^2$ i $b$ la de $25$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBzZWdvbiBub21icmUgaGEgZGUgc2VyIGwnYXJyZWwgcXVhZHJhZGEgZGUgJDI1JCwgcXVlIMOpcyAkNSQsIG5vICQyNSQuIiwgIk5vIMOpcyB1biBxdWFkcmF0IHBlcmZlY3RlOiBubyBoaSBoYSB0ZXJtZSBkZWwgbWlnIGEgbCdleHByZXNzacOzIG9yaWdpbmFsLCDDqXMgdW5hIGRpZmVyw6huY2lhIGRlIHF1YWRyYXRzLiIsICIiLCAiRWwgcHJpbWVyIHRlcm1lIMOpcyAkNHheMj0oMngpXjIkLCBubyAkKDR4KV4yJDogcmV2aXNhIGwnYXJyZWwgcXVhZHJhZGEgZGUgJDR4XjIkLiJdLCAiZXJyIjogWyJESUZFUkVOQ0lBX1FVQURSQVRTX01BTCIsICJRVUFEUkFUX0lOQ09NUExFVCIsICIiLCAiRElGRVJFTkNJQV9RVUFEUkFUU19NQUwiXSwgInJlcyI6IFsiJDR4XjItMjU9KDJ4LTUpKDJ4KzUpJCJdfQ=="
  },
  {
   "id": "71d",
   "ex": 71,
   "ap": "d",
   "bloc": "notables",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$x^2-4x+4$",
   "opcions": [
    "$(x-2)^2$",
    "$(x+2)^2$",
    "$(x-4)(x+4)$",
    "$(x-2)(x+2)$"
   ],
   "pistes": [
    "Té tres termes: mira si és el quadrat d'un binomi. Els dels extrems, $x^2$ i $4$, són quadrats perfectes?",
    "$x^2=(x)^2$ i $4=(2)^2$. Comprova si el terme del mig, $-4x$, és el doble producte $2\\cdot x\\cdot 2$, i fixa't en el seu signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdGVybWUgZGVsIG1pZywgJC00eCQsIMOpcyBuZWdhdGl1OiBjb3JyZXNwb24gYSAkKHgtMileMiQsIGFtYiBzaWduZSAkLSQgZGlucyBkZWwgcGFyw6hudGVzaS4iLCAiQXF1ZXN0YSBleHByZXNzacOzIHTDqSB0ZXJtZSBkZWwgbWlnICgkLTR4JCk6IG5vIMOpcyB1bmEgZGlmZXLDqG5jaWEgZGUgcXVhZHJhdHMsIMOpcyB1biBxdWFkcmF0IHBlcmZlY3RlLiIsICJFbHMgZG9zIGZhY3RvcnMgaGFuIGRlIHNlciBpZ3VhbHMgKMOpcyB1biBxdWFkcmF0IHBlcmZlY3RlLCAkKHgtMileMiQpLCBubyB1biBkZSBzdW1hIGkgdW4gZGUgcmVzdGEuIl0sICJlcnIiOiBbIiIsICJJR1VBTFRBVF9OT1RBQkxFX1NJR05FIiwgIkdSQVVTX01BTF9BR1JVUEFUUyIsICJJR1VBTFRBVF9OT1RBQkxFX1NJR05FIl0sICJyZXMiOiBbIiR4XjItNHgrND0oeC0yKV4yJCJdfQ=="
  },
  {
   "id": "71e",
   "ex": 71,
   "ap": "e",
   "bloc": "notables",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$16x^2-24xy+9y^2$",
   "opcions": [
    "$(4x+3y)^2$",
    "$(4x-9y)^2$",
    "$(4x-3y)(4x+3y)$",
    "$(4x-3y)^2$"
   ],
   "pistes": [
    "Té tres termes: mira si és el quadrat d'un binomi. Els dels extrems, $16x^2$ i $9y^2$, són quadrats perfectes?",
    "$16x^2=(4x)^2$ i $9y^2=(3y)^2$. Comprova si el terme del mig, $-24xy$, és el doble producte $2\\cdot 4x\\cdot 3y$, i fixa't en el seu signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB0ZXJtZSBkZWwgbWlnLCAkLTI0eHkkLCDDqXMgbmVnYXRpdTogY29ycmVzcG9uIGEgJCg0eC0zeSleMiQsIGFtYiBzaWduZSAkLSQgZGlucyBkZWwgcGFyw6hudGVzaS4iLCAiRWwgc2Vnb24gdGVybWUgZGVsIGJpbm9taSBoYSBkZSBzZXIgbCdhcnJlbCBxdWFkcmFkYSBkZSAkOXleMiQsIHF1ZSDDqXMgJDN5JCwgbm8gJDl5JC4iLCAiQXF1ZXN0YSBleHByZXNzacOzIHTDqSB0ZXJtZSBkZWwgbWlnICgkLTI0eHkkKTogbm8gw6lzIHVuYSBkaWZlcsOobmNpYSBkZSBxdWFkcmF0cywgw6lzIHVuIHF1YWRyYXQgcGVyZmVjdGUuIiwgIiJdLCAiZXJyIjogWyJJR1VBTFRBVF9OT1RBQkxFX1NJR05FIiwgIlFVQURSQVRfSU5DT01QTEVUIiwgIkdSQVVTX01BTF9BR1JVUEFUUyIsICIiXSwgInJlcyI6IFsiJDE2eF4yLTI0eHkrOXleMj0oNHgtM3kpXjIkIl19"
  },
  {
   "id": "71f",
   "ex": 71,
   "ap": "f",
   "bloc": "notables",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$16x^4+24x^2+9$",
   "opcions": [
    "$(4x^2+3)^2$",
    "$(4x^2+3)(4x^2-3)$",
    "$(8x^2+3)^2$",
    "$(4x^2-3)^2$"
   ],
   "pistes": [
    "Té tres termes: mira si és el quadrat d'un binomi. Els dels extrems, $16x^4$ i $9$, són quadrats perfectes?",
    "$16x^4=(4x^2)^2$ i $9=(3)^2$. Comprova si el terme del mig, $24x^2$, és el doble producte $2\\cdot 4x^2\\cdot 3$, i fixa't en el seu signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSBleHByZXNzacOzIHTDqSB0ZXJtZSBkZWwgbWlnICgkKzI0eF4yJCk6IG5vIMOpcyB1bmEgZGlmZXLDqG5jaWEgZGUgcXVhZHJhdHMsIMOpcyB1biBxdWFkcmF0IHBlcmZlY3RlLiIsICJFbCBwcmltZXIgdGVybWUgZGVsIGJpbm9taSBoYSBkZSBzZXIgbCdhcnJlbCBxdWFkcmFkYSBkZSAkMTZ4XjQkLCBxdWUgw6lzICQ0eF4yJCwgbm8gJDh4XjIkLiIsICJFbCB0ZXJtZSBkZWwgbWlnLCAkKzI0eF4yJCwgw6lzIHBvc2l0aXU6IGNvcnJlc3BvbiBhICQoNHheMiszKV4yJCwgYW1iIHNpZ25lICQrJCBkaW5zIGRlbCBwYXLDqG50ZXNpLiJdLCAiZXJyIjogWyIiLCAiR1JBVVNfTUFMX0FHUlVQQVRTIiwgIlFVQURSQVRfSU5DT01QTEVUIiwgIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiXSwgInJlcyI6IFsiJDE2eF40KzI0eF4yKzk9KDR4XjIrMyleMiQiXX0="
  },
  {
   "id": "70a",
   "ex": 70,
   "ap": "a",
   "bloc": "notables",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Completa les igualtats notables següents, trobant els valors que falten (marcats amb $\\square$).",
   "enunciat": "$(2x+3)^2=\\square+12x+\\square$",
   "opcions": [
    "$4x^2$ i $9$",
    "$2x$ i $9$",
    "$4x^2$ i $3$",
    "$2x^2$ i $9$"
   ],
   "pistes": [
    "$(2x+3)^2=(2x)^2+2\\cdot2x\\cdot3+3^2$: el primer $\\square$ és $(2x)^2$ i el segon és $3^2$.",
    "Comprova que el terme del mig, $2\\cdot2x\\cdot3=12x$, coincideix amb el que ja hi ha a l'enunciat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcHJpbWVyIHRlcm1lIGhhIGRlIHNlciBlbCBxdWFkcmF0IGRlICQyeCQsIG5vICQyeCQgc2Vuc2UgZWxldmFyIGFsIHF1YWRyYXQuIiwgIkVsIHNlZ29uIHRlcm1lIMOpcyBlbCBxdWFkcmF0IGRlICQzJCwgw6lzIGEgZGlyICQzXjI9OSQsIG5vICQzJC4iLCAiRWwgcHJpbWVyIHRlcm1lIMOpcyBlbCBxdWFkcmF0IGRlICQyeCQsIMOpcyBhIGRpciAkKDJ4KV4yPTR4XjIkLCBubyAkMnheMiQuIl0sICJlcnIiOiBbIiIsICJJR1VBTFRBVF9OT1RBQkxFX0RPQkxFX09CTElEQVQiLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiSUdVQUxUQVRfTk9UQUJMRV9ET0JMRV9PQkxJREFUIl0sICJyZXMiOiBbIiQoMngrMyleMj00eF4yKzEyeCs5JDogZWwgcHJpbWVyICRcXHNxdWFyZSQgw6lzICQ0eF4yJCBpIGVsIHNlZ29uIMOpcyAkOSQiXX0="
  },
  {
   "id": "70b",
   "ex": 70,
   "ap": "b",
   "bloc": "notables",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Completa les igualtats notables següents, trobant els valors que falten (marcats amb $\\square$).",
   "enunciat": "$(5-3x)^2=25-\\square+\\square x^2$",
   "opcions": [
    "$15x$ i $9$",
    "$30x$ i $-9$",
    "$30x$ i $3$",
    "$30x$ i $9$"
   ],
   "pistes": [
    "$(5-3x)^2=5^2-2\\cdot5\\cdot3x+(3x)^2$: el primer $\\square$ és el doble producte i el segon és el coeficient del quadrat de $3x$.",
    "Recorda que en un quadrat d'una diferència el terme del mig és negatiu, però el terme en $x^2$ sempre és positiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB0ZXJtZSBkZWwgbWlnIMOpcyBlbCBET0JMRSBwcm9kdWN0ZSwgJDJcXGNkb3Q1XFxjZG90M3g9MzB4JCwgbm8gbm9tw6lzICQ1XFxjZG90M3g9MTV4JC4iLCAiRWwgdGVybWUgZW4gJHheMiQgw6lzIHNlbXByZSBwb3NpdGl1ICjDqXMgdW4gcXVhZHJhdCk6ICQoM3gpXjI9OXheMiQsIGFtYiBzaWduZSAkKyQuIiwgIkVsIGNvZWZpY2llbnQgZGUgJHheMiQgw6lzIGVsIHF1YWRyYXQgZGUgJDMkLCDDqXMgYSBkaXIgJDNeMj05JCwgbm8gJDMkLiIsICIiXSwgImVyciI6IFsiSUdVQUxUQVRfTk9UQUJMRV9ET0JMRV9PQkxJREFUIiwgIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiIl0sICJyZXMiOiBbIiQoNS0zeCleMj0yNS0zMHgrOXheMiQ6IGVsIHByaW1lciAkXFxzcXVhcmUkIMOpcyAkMzB4JCBpIGVsIHNlZ29uIMOpcyAkOSQiXX0="
  },
  {
   "id": "70c",
   "ex": 70,
   "ap": "c",
   "bloc": "notables",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Completa les igualtats notables següents, trobant els valors que falten (marcats amb $\\square$).",
   "enunciat": "$(9+7x)\\cdot(9-7x)=\\square-\\square$",
   "opcions": [
    "$81$ i $63x$",
    "$9$ i $49x^2$",
    "$81$ i $7x^2$",
    "$81$ i $49x^2$"
   ],
   "pistes": [
    "És una suma per diferència: $(a+b)(a-b)=a^2-b^2$, amb $a=9$ i $b=7x$.",
    "$(9+7x)(9-7x)=9^2-(7x)^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiB1bmEgc3VtYSBwZXIgZGlmZXLDqG5jaWEgbm8gcXVlZGEgY2FwIHRlcm1lIGVuICR4JCBkZSBncmF1ICQxJDogZWwgcmVzdWx0YXQgw6lzIGRpcmVjdGFtZW50IHVuYSByZXN0YSBkZSBxdWFkcmF0cy4iLCAiRWwgcHJpbWVyIHRlcm1lIMOpcyBlbCBxdWFkcmF0IGRlICQ5JCwgw6lzIGEgZGlyICQ5XjI9ODEkLCBubyAkOSQuIiwgIkVsIHNlZ29uIHRlcm1lIMOpcyBlbCBxdWFkcmF0IGRlICQ3eCQsIMOpcyBhIGRpciAkKDd4KV4yPTQ5eF4yJCwgbm8gJDd4XjIkLiIsICIiXSwgImVyciI6IFsiU1VNQV9QRVJfRElGRVJFTkNJQV9NQUwiLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiIl0sICJyZXMiOiBbIiQoOSs3eCkoOS03eCk9ODEtNDl4XjIkOiBlbCBwcmltZXIgJFxcc3F1YXJlJCDDqXMgJDgxJCBpIGVsIHNlZ29uIMOpcyAkNDl4XjIkIl19"
  },
  {
   "id": "70d",
   "ex": 70,
   "ap": "d",
   "bloc": "notables",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Completa les igualtats notables següents, trobant els valors que falten (marcats amb $\\square$).",
   "enunciat": "$(\\square+\\square)^2=x^4+2x^3+x^2$",
   "opcions": [
    "$x^3$ i $x$",
    "$x^2$ i $x$",
    "$x$ i $x$",
    "$x^2$ i $x^2$"
   ],
   "pistes": [
    "Busca dos termes $a$ i $b$ tals que $a^2=x^4$, $b^2=x^2$, i $2ab=2x^3$.",
    "Si $a=x^2$ i $b=x$: $a^2=x^4$ ✓, $b^2=x^2$ ✓, $2ab=2x^2\\cdot x=2x^3$ ✓."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBxdWFkcmF0IGRlICR4XjMkIGphIHNlcmlhICR4XjYkLCBkZSBncmF1IG1hc3NhIGFsdCBwZXIgZW5jYWl4YXIgYW1iICR4XjQrMnheMyt4XjIkLiIsICIiLCAiQW1iICQoeCt4KV4yPSgyeCleMj00eF4yJCwgcXVlIG5vIHTDqSBuaSBncmF1ICQ0JCBuaSBncmF1ICQzJDogZWwgcHJpbWVyIHRlcm1lIGhhIGRlIHNlciBkZSBncmF1IG3DqXMgYWx0LiIsICJBbWIgJCh4XjIreF4yKV4yPSgyeF4yKV4yPTR4XjQkLCBubyBjb2luY2lkZWl4IGFtYiAkeF40JDogcmV2aXNhIGVscyBkb3MgdGVybWVzIHBlciBzZXBhcmF0LiJdLCAiZXJyIjogWyJHUkFVX1BST0RVQ1RFX01BTCIsICIiLCAiR1JBVV9QUk9EVUNURV9NQUwiLCAiUVVBRFJBVF9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJHheNCsyeF4zK3heMj0oeF4yKV4yKzJcXGNkb3QgeF4yXFxjZG90IHgreF4yPSh4XjIreCleMiQ6IGVscyBkb3MgJFxcc3F1YXJlJCBzw7NuICR4XjIkIGkgJHgkIl19"
  },
  {
   "id": "72a",
   "ex": 72,
   "ap": "a",
   "bloc": "notables",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Segueix el patró $[(x+2)+3]\\cdot[(x+2)-3]=(x+2)^2-9$ per escriure el producte com una resta de quadrats, sense necessitat de desenvolupar-ho tot.",
   "enunciat": "$[(3x-y)+4]\\cdot[(3x-y)-4]$",
   "opcions": [
    "$9x^2-y^2-16$",
    "$(3x-y)^2+16$",
    "$(3x-y)^2-4$",
    "$(3x-y)^2-16$"
   ],
   "pistes": [
    "Identifica el «primer terme» comú als dos factors i el «segon» que canvia de signe: aquí són $(3x-y)$ i $4$.",
    "Segueix el patró de l'enunciat: el primer terme al quadrat menys el segon al quadrat. Compte a elevar també el $4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUgcydoYSBkZSBkZWl4YXIgY29tIGVsIHF1YWRyYXQgZGUgdG90IGVsIGJpbm9taSAkKDN4LXkpJCwgbm8gbm9tw6lzIGRlIGxhICR4JDogJCgzeC15KV4yXFxuZXEgOXheMi15XjIkLiIsICJFbiB1bmEgc3VtYSBwZXIgZGlmZXLDqG5jaWEsIGVsIHNlZ29uIHF1YWRyYXQgc2VtcHJlIHJlc3RhLCBtYWkgc3VtYTogJChhK2IpKGEtYik9YV4yLWJeMiQuIiwgIkVsIHNlZ29uIHRlcm1lIHMnaGEgZCdlbGV2YXIgYWwgcXVhZHJhdDogJDReMj0xNiQsIG5vICQ0JC4iLCAiIl0sICJlcnIiOiBbIkdSQVVTX01BTF9BR1JVUEFUUyIsICJTVU1BX1BFUl9ESUZFUkVOQ0lBX01BTCIsICJRVUFEUkFUX0lOQ09NUExFVCIsICIiXSwgInJlcyI6IFsiJFsoM3gteSkrNF1cXGNkb3RbKDN4LXkpLTRdPSgzeC15KV4yLTE2JCAoZGVzZW52b2x1cGF0IGRlbCB0b3Q6ICQ5eF4yLTZ4eSt5XjItMTYkKSJdfQ=="
  },
  {
   "id": "72b",
   "ex": 72,
   "ap": "b",
   "bloc": "notables",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Segueix el patró $[(x+2)+3]\\cdot[(x+2)-3]=(x+2)^2-9$ per escriure el producte com una resta de quadrats, sense necessitat de desenvolupar-ho tot.",
   "enunciat": "$[(a+b)+c]\\cdot[(a+b)-c]$",
   "opcions": [
    "$(a+b)^2+c^2$",
    "$(a+b)^2-c$",
    "$(a+b)^2-c^2$",
    "$a^2+b^2-c^2$"
   ],
   "pistes": [
    "Identifica el «primer terme» comú i el «segon» que canvia de signe: aquí són $(a+b)$ i $c$.",
    "Segueix el patró de l'enunciat: el primer terme al quadrat menys el segon al quadrat. El primer terme, $(a+b)$, es deixa sencer, sense desenvolupar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiB1bmEgc3VtYSBwZXIgZGlmZXLDqG5jaWEsIGVsIHNlZ29uIHF1YWRyYXQgc2VtcHJlIHJlc3RhLCBtYWkgc3VtYS4iLCAiRWwgc2Vnb24gdGVybWUgcydoYSBkJ2VsZXZhciBhbCBxdWFkcmF0OiDDqXMgJGNeMiQsIG5vICRjJC4iLCAiIiwgIkVsIHByaW1lciB0ZXJtZSBzJ2hhIGRlIGRlaXhhciBjb20gZWwgcXVhZHJhdCBkZSB0b3QgZWwgYmlub21pICQoYStiKSQsIG5vIGRlc2Vudm9sdXBhdCBuaSBzZXBhcmF0LiJdLCAiZXJyIjogWyJTVU1BX1BFUl9ESUZFUkVOQ0lBX01BTCIsICJRVUFEUkFUX0lOQ09NUExFVCIsICIiLCAiR1JBVVNfTUFMX0FHUlVQQVRTIl0sICJyZXMiOiBbIiRbKGErYikrY11cXGNkb3RbKGErYiktY109KGErYileMi1jXjIkIChkZXNlbnZvbHVwYXQgZGVsIHRvdDogJGFeMisyYWIrYl4yLWNeMiQpIl19"
  }
 ]
};
