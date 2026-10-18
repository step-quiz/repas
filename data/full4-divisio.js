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
  "COEFICIENT_MAL_TRIAT": "El coeficient principal no es tria: es troba imposant que la corba passi pel punt que et donen.",
  "CONDICIO_ENUNCIAT_IGNORADA": "El càlcul pot donar més d'una solució, però l'enunciat en demana una que compleixi una condició concreta. Abans de respondre, comprova que la teva compleix TOTES les condicions de l'enunciat.",
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "EXPONENTS_SUMATS_QUOCIENT": "En dividir potències de la mateixa base, els exponents es RESTEN, no se sumen: $a^m:a^n=a^{m-n}$.",
  "EXPONENT_SENSE_DESPLACAR": "T'has deixat pel camí una part de l'exponent: si l'enunciat diu $n+2$ (o similar), cal fer servir aquest exponent complet, no només la $n$.",
  "FACTOR_COMU_SIGNE": "Revisa el signe del factor comú: si tots els termes són negatius, sol convenir treure'l amb signe $-$ perquè el que quedi dins comenci en positiu.",
  "GRAUS_MAL_AGRUPATS": "Només es poden sumar o restar termes del MATEIX grau: $x^3$ amb $x^3$, $x^2$ amb $x^2$... Revisa que has agrupat els termes correctes.",
  "RUFFINI_DIVISOR_NO_MONIC": "El divisor no és de la forma $x-a$ (el coeficient de $x$ no és $1$): cal treure'n el factor comú abans d'aplicar Ruffini directament, i dividir el quocient pel mateix factor al final.",
  "RUFFINI_PAS_MAL": "A cada columna: multiplica el número de baix per l'arrel, i suma aquest producte al coeficient de la columna, no el restis.",
  "RUFFINI_QUOCIENT_GRAU": "El quocient d'una divisió de Ruffini té un grau menys que el dividend, no el mateix grau.",
  "RUFFINI_RESIDU_COM_QUOCIENT": "Has confós el residu amb un terme del quocient: el residu és el darrer número de la fila, i és una constant, no un polinomi en $x$.",
  "RUFFINI_SIGNE_ARREL": "A la regla de Ruffini es fa servir l'oposat del terme independent del divisor: si el divisor és $x-a$, es baixa multiplicant per $a$, no per $-a$.",
  "TERME_INDEPENDENT_IGNORAT": "T'has deixat el terme independent. Encara que vagi sol, forma part de la funció.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "329a",
   "ex": 329,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fes la divisió.",
   "enunciat": "$6x^3:2x$",
   "opcions": [
    "$3x^4$",
    "$4x^2$",
    "$3x^3$",
    "$3x^2$"
   ],
   "pistes": [
    "Divideix els coeficients i resta els exponents.",
    "$6:2=3$ i $x^3:x=x^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiBkaXZpZGlyLCBlbHMgZXhwb25lbnRzIGVzIFJFU1RFTjogJDMtMT0yJC4iLCAiSGFzIHJlc3RhdCBlbHMgY29lZmljaWVudHMgKCQ2LTIkKS4gRWxzIGNvZWZpY2llbnRzIGVzIGRpdmlkZWl4ZW46ICQ2OjI9MyQuIEVscyBxdWUgZXMgcmVzdGVuIHPDs24gZWxzIGV4cG9uZW50cy4iLCAiRWxzIGNvZWZpY2llbnRzIHZhbiBiw6kgKCQ2OjI9MyQpLCBwZXLDsiBlbHMgZXhwb25lbnRzIHRhbWLDqSBlcyByZXN0ZW46ICR4XjM6eF4xPXheezMtMX09eF4yJC4iLCAiIl0sICJlcnIiOiBbIkVYUE9ORU5UU19TVU1BVFNfUVVPQ0lFTlQiLCAiQ09FRklDSUVOVF9NQUxfVFJJQVQiLCAiRVhQT05FTlRfU0VOU0VfREVTUExBQ0FSIiwgIiJdLCAicmVzIjogWyIkNnheMzoyeD1cXGRmcmFjezZ9ezJ9XFwseF57My0xfT0zeF4yJCJdfQ=="
  },
  {
   "id": "329b",
   "ex": 329,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fes la divisió.",
   "enunciat": "$(x^4+x^3):x^2$",
   "opcions": [
    "$x^2+x$",
    "$x^2+x^3$",
    "$x^2$",
    "$x^6+x^5$"
   ],
   "pistes": [
    "Divideix cada terme del numerador pel monomi.",
    "$x^4:x^2=x^2$ i $x^3:x^2=x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWwgc2Vnb24gdGVybWUgbm8gaGFzIHJlc3RhdCBsJ2V4cG9uZW50OiAkeF4zOnheMj14JC4iLCAiSGFzIGRpdmlkaXQgbm9tw6lzIGVsIHByaW1lciB0ZXJtZS4gQ2FkYSB0ZXJtZSBkZWwgZGl2aWRlbmQgcydoYSBkZSBkaXZpZGlyIHBlbCBtb25vbWkuIiwgIkVuIGRpdmlkaXIsIGVscyBleHBvbmVudHMgZXMgcmVzdGVuOiAkNC0yPTIkIGkgJDMtMj0xJC4iXSwgImVyciI6IFsiIiwgIkVYUE9ORU5UX1NFTlNFX0RFU1BMQUNBUiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkVYUE9ORU5UU19TVU1BVFNfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJCh4XjQreF4zKTp4XjI9XFxkZnJhY3t4XjR9e3heMn0rXFxkZnJhY3t4XjN9e3heMn09eF4yK3gkIl19"
  },
  {
   "id": "330a",
   "ex": 330,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fent servir el teorema del residu, troba quant val el residu d'aquesta divisió.",
   "enunciat": "$(x^2-3x+2):(x-1)$",
   "opcions": [
    "$1$",
    "$0$",
    "$2$",
    "$6$"
   ],
   "pistes": [
    "El divisor és $x-1$: el valor que s'ha de substituir és $a=1$.",
    "Calcula $P(1)=1^2-3\\cdot 1+2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJyQxJCDDqXMgZWwgdmFsb3IgZGUgJGEkLCBubyBlbCByZXNpZHUuIEVsIHJlc2lkdSDDqXMgJFAoMSkkLiIsICIiLCAiSGFzIGRvbmF0IGVsIHRlcm1lIGluZGVwZW5kZW50IGRlbCBwb2xpbm9taSBzZW5zZSBhdmFsdWFyLWxvLiBUJ2hhcyBkZWl4YXQgZWwgdGVybWUgaW5kZXBlbmRlbnQuIEVuY2FyYSBxdWUgdmFnaSBzb2wsIGZvcm1hIHBhcnQgZGUgbGEgZnVuY2nDsy4iLCAiSGFzIGF2YWx1YXQgYSAkeD0tMSQuIEVsIGRpdmlzb3Igw6lzICR4LTEkLCBvIHNpZ3VpICRhPSsxJC4gQSBsYSByZWdsYSBkZSBSdWZmaW5pIGVzIGZhIHNlcnZpciBsJ29wb3NhdCBkZWwgdGVybWUgaW5kZXBlbmRlbnQgZGVsIGRpdmlzb3I6IHNpIGVsIGRpdmlzb3Igw6lzICR4LWEkLCBlcyBiYWl4YSBtdWx0aXBsaWNhbnQgcGVyICRhJCwgbm8gcGVyICQtYSQuIl0sICJlcnIiOiBbIlJVRkZJTklfUkVTSURVX0NPTV9RVU9DSUVOVCIsICIiLCAiVEVSTUVfSU5ERVBFTkRFTlRfSUdOT1JBVCIsICJSVUZGSU5JX1NJR05FX0FSUkVMIl0sICJyZXMiOiBbIiRQKDEpPTEtMysyPTAkOyBlbCByZXNpZHUgw6lzICQwJCwgbyBzaWd1aSBxdWUgbGEgZGl2aXNpw7Mgw6lzIGV4YWN0YSJdfQ=="
  },
  {
   "id": "330b",
   "ex": 330,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fent servir el teorema del residu, troba quant val el residu d'aquesta divisió.",
   "enunciat": "$(x^3+1):(x+1)$",
   "opcions": [
    "$1$",
    "$2$",
    "$0$",
    "$-1$"
   ],
   "pistes": [
    "$x+1$ es llegeix com $x-(-1)$: el valor a substituir és $-1$.",
    "Calcula $P(-1)=(-1)^3+1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZG9uYXQgZWwgdGVybWUgaW5kZXBlbmRlbnQgc2Vuc2UgYXZhbHVhci4gVCdoYXMgZGVpeGF0IGVsIHRlcm1lIGluZGVwZW5kZW50LiBFbmNhcmEgcXVlIHZhZ2kgc29sLCBmb3JtYSBwYXJ0IGRlIGxhIGZ1bmNpw7MuIiwgIkhhcyBhdmFsdWF0IGEgJHg9MSQuIEVsIGRpdmlzb3Igw6lzICR4KzEkLCBxdWUgw6lzICR4LSgtMSkkOiAkYT0tMSQuIEEgbGEgcmVnbGEgZGUgUnVmZmluaSBlcyBmYSBzZXJ2aXIgbCdvcG9zYXQgZGVsIHRlcm1lIGluZGVwZW5kZW50IGRlbCBkaXZpc29yOiBzaSBlbCBkaXZpc29yIMOpcyAkeC1hJCwgZXMgYmFpeGEgbXVsdGlwbGljYW50IHBlciAkYSQsIG5vIHBlciAkLWEkLiIsICIiLCAiRWwgJC0xJCDDqXMgZWwgdmFsb3IgZGUgJGEkLCBubyBlbCByZXNpZHU6IGVsIHJlc2lkdSDDqXMgJFAoLTEpJC4iXSwgImVyciI6IFsiVEVSTUVfSU5ERVBFTkRFTlRfSUdOT1JBVCIsICJSVUZGSU5JX1NJR05FX0FSUkVMIiwgIiIsICJSVUZGSU5JX1NJR05FX0FSUkVMIl0sICJyZXMiOiBbIiRQKC0xKT0oLTEpXjMrMT0tMSsxPTAkOyBsYSBkaXZpc2nDsyDDqXMgZXhhY3RhIl19"
  },
  {
   "id": "330c",
   "ex": 330,
   "ap": "c",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Fent servir el teorema del residu, troba quant val el residu d'aquesta divisió.",
   "enunciat": "$(x^2+x+5):(x-2)$",
   "opcions": [
    "$11$",
    "$5$",
    "$7$",
    "$0$"
   ],
   "pistes": [
    "El divisor és $x-2$: substitueix $x=2$.",
    "$P(2)=2^2+2+5$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGRvbmF0IGVsIHRlcm1lIGluZGVwZW5kZW50IHNlbnNlIGF2YWx1YXItaGkgcmVzLiBUJ2hhcyBkZWl4YXQgZWwgdGVybWUgaW5kZXBlbmRlbnQuIEVuY2FyYSBxdWUgdmFnaSBzb2wsIGZvcm1hIHBhcnQgZGUgbGEgZnVuY2nDsy4iLCAiSGFzIGF2YWx1YXQgYSAkeD0tMiQ6ICQ0LTIrNT03JC4gRWwgZGl2aXNvciDDqXMgJHgtMiQsIG8gc2lndWkgJGE9KzIkLiBBIGxhIHJlZ2xhIGRlIFJ1ZmZpbmkgZXMgZmEgc2VydmlyIGwnb3Bvc2F0IGRlbCB0ZXJtZSBpbmRlcGVuZGVudCBkZWwgZGl2aXNvcjogc2kgZWwgZGl2aXNvciDDqXMgJHgtYSQsIGVzIGJhaXhhIG11bHRpcGxpY2FudCBwZXIgJGEkLCBubyBwZXIgJC1hJC4iLCAiTm8gdG90ZXMgbGVzIGRpdmlzaW9ucyBzw7NuIGV4YWN0ZXM6IGFxdcOtIGVsIHJlc2lkdSBubyDDqXMgemVyby4gQ2FsY3VsYSAkUCgyKSQgaSBjb21wcm92YS1oby4iXSwgImVyciI6IFsiIiwgIlRFUk1FX0lOREVQRU5ERU5UX0lHTk9SQVQiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICJSVUZGSU5JX1JFU0lEVV9DT01fUVVPQ0lFTlQiXSwgInJlcyI6IFsiJFAoMik9NCsyKzU9MTEkOyBlbCByZXNpZHUgw6lzICQxMSQiXX0="
  },
  {
   "id": "331a",
   "ex": 331,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Aplica la regla de Ruffini i digues quin és el polinomi quocient d'aquesta divisió.",
   "enunciat": "$(x^2-3x+2):(x-1)$",
   "opcions": [
    "$x^2-2$",
    "$x+2$",
    "$x-2$",
    "$x-3$"
   ],
   "pistes": [
    "Posa els coeficients $1$, $-3$, $2$ a la fila de dalt i, a l'esquerra, l'arrel del divisor: amb $x-1$, és $1$.",
    "Baixa el primer coeficient, multiplica'l per l'arrel i suma'l al següent: $-3+1\\cdot1$. Els números de baix, menys l'últim, són els coeficients del quocient."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBxdW9jaWVudCB0w6kgdW4gZ3JhdSBNRU5ZUyBxdWUgZWwgZGl2aWRlbmQ6IGRlIGdyYXUgMiBlcyBwYXNzYSBhIGdyYXUgMS4gRWwgcXVvY2llbnQgZCd1bmEgZGl2aXNpw7MgZGUgUnVmZmluaSB0w6kgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQsIG5vIGVsIG1hdGVpeCBncmF1LiIsICJIYXMgYmFpeGF0IHVuICQtMSQgYSBsYSBjYWl4YSBkZSBSdWZmaW5pLiBBbWIgZGl2aXNvciAkeC0xJCBoaSB2YSAkKzEkLiBBIGxhIHJlZ2xhIGRlIFJ1ZmZpbmkgZXMgZmEgc2VydmlyIGwnb3Bvc2F0IGRlbCB0ZXJtZSBpbmRlcGVuZGVudCBkZWwgZGl2aXNvcjogc2kgZWwgZGl2aXNvciDDqXMgJHgtYSQsIGVzIGJhaXhhIG11bHRpcGxpY2FudCBwZXIgJGEkLCBubyBwZXIgJC1hJC4iLCAiIiwgIkhhcyBjb3BpYXQgZWwgY29lZmljaWVudCAkLTMkIGRlbCBkaXZpZGVuZC4gQSBSdWZmaW5pLCBlbCBzZWdvbiBjb2VmaWNpZW50IGRlbCBxdW9jaWVudCDDqXMgJC0zKzE9LTIkLiJdLCAiZXJyIjogWyJSVUZGSU5JX1FVT0NJRU5UX0dSQVUiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICIiLCAiUlVGRklOSV9QQVNfTUFMIl0sICJyZXMiOiBbIlJ1ZmZpbmkgYW1iICRhPTEkOiAkMSQsICQtMysxPS0yJCwgJDIrKC0yKT0wJC4gUXVvY2llbnQgJHgtMiQgaSByZXNpZHUgJDAkLiJdfQ=="
  },
  {
   "id": "65a",
   "ex": 65,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Divideix.",
   "enunciat": "$(7x^5+4x^4+3x^3-5x^2+2x-1):(x^2+x)$",
   "opcions": [
    "$\\text{quocient: }7x^{3}-3x^{2}+6x-11\\text{; residu: }-13x+1$",
    "$\\text{quocient: }7x^{3}-3x^{2}+5x-11\\text{; residu: }13x-1$",
    "$\\text{quocient: }7x^{3}-3x^{2}+6x-10\\text{; residu: }13x-1$",
    "$\\text{quocient: }7x^{3}-3x^{2}+6x-11\\text{; residu: }13x-1$"
   ],
   "pistes": [
    "Divideix pas a pas: el primer terme del quocient surt de dividir $7x^5$ entre $x^2$.",
    "Continua restant i baixant termes fins que el residu tingui grau menor que el divisor (grau $2$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbSBwYXMgZGUgbGEgZGl2aXNpw7MuIiwgIkVsIHF1b2NpZW50IG5vIMOpcyBjb3JyZWN0ZTogcmV2aXNhIGVsIHRlcm1lIGRlIGdyYXUgJDEkLiIsICJFbCBxdW9jaWVudCBubyDDqXMgY29ycmVjdGU6IHJldmlzYSBlbCB0ZXJtZSBpbmRlcGVuZGVudCBkZWwgcXVvY2llbnQsIHNvYnJhIHVuICQrMSQuIiwgIiJdLCAiZXJyIjogWyJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICJHUkFVU19NQUxfQUdSVVBBVFMiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiXSwgInJlcyI6IFsiUXVvY2llbnQgJDd4XnszfS0zeF57Mn0rNngtMTEkIGkgcmVzaWR1ICQxM3gtMSQiXX0="
  },
  {
   "id": "65b",
   "ex": 65,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Divideix.",
   "enunciat": "$(x^4-2x^3+x^2-x+3):(x^2+x+1)$",
   "opcions": [
    "$\\text{quocient: }x^{2}-2x+3\\text{; residu: }-x$",
    "$\\text{quocient: }x^{2}-3x+3\\text{; residu: }x$",
    "$\\text{quocient: }x^{2}-3x+3\\text{; residu: }-x$",
    "$\\text{quocient: }x^{2}-3x+3\\text{; residu: }0$"
   ],
   "pistes": [
    "Divideix pas a pas: el primer terme del quocient surt de dividir $x^4$ entre $x^2$.",
    "Continua fins que el residu tingui grau menor que el divisor (grau $2$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBxdW9jaWVudCBubyDDqXMgY29ycmVjdGU6IHJldmlzYSBlbCB0ZXJtZSBkZWwgbWlnLiIsICJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbSBwYXMgZGUgbGEgZGl2aXNpw7MuIiwgIiIsICJFbCByZXNpZHUgbm8gw6lzICQwJDogYXF1ZXN0YSBkaXZpc2nDsyBubyDDqXMgZXhhY3RhLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIiIsICJSVUZGSU5JX1JFU0lEVV9DT01fUVVPQ0lFTlQiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezJ9LTN4KzMkIGkgcmVzaWR1ICQteCQiXX0="
  },
  {
   "id": "66a",
   "ex": 66,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(x^5-x^3+x^2-x^4+3x-7):(x-2)$",
   "opcions": [
    "$\\text{quocient: }x^{4}+x^{3}+x^{2}+3x+9\\text{; residu: }11$",
    "$\\text{quocient: }x^{4}-3x^{3}+5x^{2}-9x+21\\text{; residu: }-49$",
    "$\\text{quocient: }2x^{4}+x^{3}+x^{2}+3x+9\\text{; residu: }11$",
    "$\\text{quocient: }x^{4}+x^{3}+x^{2}+3x+9\\text{; residu: }-11$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $2$.",
    "Baixa el primer coeficient, multiplica'l per $2$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiU2kgZWwgZGl2aXNvciDDqXMgJHgtMiQsIGwnYXJyZWwgYW1iIHF1w6ggZXMgbXVsdGlwbGljYSBhIFJ1ZmZpbmkgw6lzICQyJCwgbm8gJC0yJC4iLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgJHgtMiQgKGdyYXUgJDEkKSwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGwnw7psdGltYSBzdW1hIGRlIGxhIHRhdWxhLiJdLCAiZXJyIjogWyIiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICJSVUZGSU5JX1FVT0NJRU5UX0dSQVUiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezR9K3heezN9K3heezJ9KzN4KzkkIGkgcmVzaWR1ICQxMSQiXX0="
  },
  {
   "id": "66b",
   "ex": 66,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(x^4+2x^2-x-3):(x+1)$",
   "opcions": [
    "$\\text{quocient: }2x^{3}-x^{2}+3x-4\\text{; residu: }1$",
    "$\\text{quocient: }x^{3}-x^{2}+3x-4\\text{; residu: }-1$",
    "$\\text{quocient: }x^{3}+x^{2}+3x+2\\text{; residu: }-1$",
    "$\\text{quocient: }x^{3}-x^{2}+3x-4\\text{; residu: }1$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $-1$.",
    "Baixa el primer coeficient, multiplica'l per $-1$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBxdW9jaWVudCB0w6kgdW4gZ3JhdSBkZSBtw6lzOiBlbiBkaXZpZGlyIHBlciAkeCsxJCAoZ3JhdSAkMSQpLCBlbCBxdW9jaWVudCBoYSBkZSB0ZW5pciB1biBncmF1IG1lbnlzIHF1ZSBlbCBkaXZpZGVuZC4iLCAiRWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0OiByZXZpc2EgbCfDumx0aW1hIHN1bWEgZGUgbGEgdGF1bGEuIiwgIlNpIGVsIGRpdmlzb3Igw6lzICR4KzEkLCBsJ2FycmVsIGFtYiBxdcOoIGVzIG11bHRpcGxpY2EgYSBSdWZmaW5pIMOpcyAkLTEkLCBubyAkMSQuIiwgIiJdLCAiZXJyIjogWyJSVUZGSU5JX1FVT0NJRU5UX0dSQVUiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICIiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezN9LXheezJ9KzN4LTQkIGkgcmVzaWR1ICQxJCJdfQ=="
  },
  {
   "id": "66c",
   "ex": 66,
   "ap": "c",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(2x^4-x^3+x+3):(x-3)$",
   "opcions": [
    "$\\text{quocient: }2x^{3}+5x^{2}+15x+46\\text{; residu: }-141$",
    "$\\text{quocient: }3x^{3}+5x^{2}+15x+46\\text{; residu: }141$",
    "$\\text{quocient: }2x^{3}-7x^{2}+21x-62\\text{; residu: }189$",
    "$\\text{quocient: }2x^{3}+5x^{2}+15x+46\\text{; residu: }141$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $3$.",
    "Baixa el primer coeficient, multiplica'l per $3$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbWEgc3VtYSBkZSBsYSB0YXVsYS4iLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgJHgtMyQgKGdyYXUgJDEkKSwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIiwgIlNpIGVsIGRpdmlzb3Igw6lzICR4LTMkLCBsJ2FycmVsIGFtYiBxdcOoIGVzIG11bHRpcGxpY2EgYSBSdWZmaW5pIMOpcyAkMyQsIG5vICQtMyQuIiwgIiJdLCAiZXJyIjogWyJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICJSVUZGSU5JX1FVT0NJRU5UX0dSQVUiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICIiXSwgInJlcyI6IFsiUXVvY2llbnQgJDJ4XnszfSs1eF57Mn0rMTV4KzQ2JCBpIHJlc2lkdSAkMTQxJCJdfQ=="
  },
  {
   "id": "66d",
   "ex": 66,
   "ap": "d",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(x^3-8x+x^2-7):(x+2)$",
   "opcions": [
    "$\\text{quocient: }x^{2}-x-6\\text{; residu: }5$",
    "$\\text{quocient: }2x^{2}-x-6\\text{; residu: }5$",
    "$\\text{quocient: }x^{2}-x-6\\text{; residu: }-5$",
    "$\\text{quocient: }x^{2}+3x-2\\text{; residu: }-11$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $-2$.",
    "Baixa el primer coeficient, multiplica'l per $-2$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgJHgrMiQgKGdyYXUgJDEkKSwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGwnw7psdGltYSBzdW1hIGRlIGxhIHRhdWxhLiIsICJTaSBlbCBkaXZpc29yIMOpcyAkeCsyJCwgbCdhcnJlbCBhbWIgcXXDqCBlcyBtdWx0aXBsaWNhIGEgUnVmZmluaSDDqXMgJC0yJCwgbm8gJDIkLiJdLCAiZXJyIjogWyIiLCAiUlVGRklOSV9RVU9DSUVOVF9HUkFVIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezJ9LXgtNiQgaSByZXNpZHUgJDUkIl19"
  },
  {
   "id": "66e",
   "ex": 66,
   "ap": "e",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(x^3-4x^2+6x-9):(x+4)$",
   "opcions": [
    "$\\text{quocient: }x^{2}-8x+38\\text{; residu: }-161$",
    "$\\text{quocient: }2x^{2}-8x+38\\text{; residu: }-161$",
    "$\\text{quocient: }x^{2}+6\\text{; residu: }15$",
    "$\\text{quocient: }x^{2}-8x+38\\text{; residu: }161$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $-4$.",
    "Baixa el primer coeficient, multiplica'l per $-4$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgJHgrNCQgKGdyYXUgJDEkKSwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIiwgIlNpIGVsIGRpdmlzb3Igw6lzICR4KzQkLCBsJ2FycmVsIGFtYiBxdcOoIGVzIG11bHRpcGxpY2EgYSBSdWZmaW5pIMOpcyAkLTQkLCBubyAkNCQuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGwnw7psdGltYSBzdW1hIGRlIGxhIHRhdWxhLiJdLCAiZXJyIjogWyIiLCAiUlVGRklOSV9RVU9DSUVOVF9HUkFVIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezJ9LTh4KzM4JCBpIHJlc2lkdSAkLTE2MSQiXX0="
  },
  {
   "id": "68a",
   "ex": 68,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el quocient i el residu de les divisions de polinomis següents.",
   "enunciat": "$(7x^4-2x+x^3):(x-3)$",
   "opcions": [
    "$\\text{quocient: }7x^{3}+22x^{2}+66x+196\\text{; residu: }588$",
    "$\\text{quocient: }7x^{3}+22x^{2}+66x+196\\text{; residu: }-588$",
    "$\\text{quocient: }7x^{3}+22x^{2}+65x+196\\text{; residu: }588$",
    "$\\text{quocient: }7x^{3}-20x^{2}+60x-182\\text{; residu: }546$"
   ],
   "pistes": [
    "Ordena primer el dividend: $x^4$, $x^3$, $x^2$ (que no hi surt, coeficient $0$), $x$ i terme independent.",
    "Aplica Ruffini amb l'arrel $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiIsICJSZXZpc2EgZWwgdGVybWUgZGUgZ3JhdSAkMSQgZGVsIHF1b2NpZW50LiIsICJTaSBlbCBkaXZpc29yIMOpcyAkeC0zJCwgbCdhcnJlbCBwZXIgUnVmZmluaSDDqXMgJDMkLCBubyAkLTMkLiJdLCAiZXJyIjogWyIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJSVUZGSU5JX1NJR05FX0FSUkVMIl0sICJyZXMiOiBbIlF1b2NpZW50ICQ3eF57M30rMjJ4XnsyfSs2NngrMTk2JCBpIHJlc2lkdSAkNTg4JCJdfQ=="
  },
  {
   "id": "68b",
   "ex": 68,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el quocient i el residu de les divisions de polinomis següents.",
   "enunciat": "$(-3-x^5):(x+2)$",
   "opcions": [
    "$\\text{quocient: }-x^{4}+3x^{3}-4x^{2}+8x-16\\text{; residu: }29$",
    "$\\text{quocient: }-x^{4}+2x^{3}-4x^{2}+8x-16\\text{; residu: }29$",
    "$\\text{quocient: }-x^{4}-2x^{3}-4x^{2}-8x-16\\text{; residu: }-35$",
    "$\\text{quocient: }-x^{4}+2x^{3}-4x^{2}+8x-16\\text{; residu: }-29$"
   ],
   "pistes": [
    "El dividend $-3-x^5$ té molts coeficients $0$ (no hi ha termes en $x^4$, $x^3$, $x^2$, $x$): no te'ls saltis a la taula.",
    "Aplica Ruffini amb l'arrel $-2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBxdW9jaWVudCBubyDDqXMgY29ycmVjdGU6IHJldmlzYSBlbCB0ZXJtZSBkZSBncmF1ICQzJC4iLCAiIiwgIlNpIGVsIGRpdmlzb3Igw6lzICR4KzIkLCBsJ2FycmVsIHBlciBSdWZmaW5pIMOpcyAkLTIkLCBubyAkMiQuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdC4iXSwgImVyciI6IFsiUlVGRklOSV9RVU9DSUVOVF9HUkFVIiwgIiIsICJSVUZGSU5JX1NJR05FX0FSUkVMIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIl0sICJyZXMiOiBbIlF1b2NpZW50ICQteF57NH0rMnheezN9LTR4XnsyfSs4eC0xNiQgaSByZXNpZHUgJDI5JCJdfQ=="
  },
  {
   "id": "68c",
   "ex": 68,
   "ap": "c",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el quocient i el residu de les divisions de polinomis següents.",
   "enunciat": "$(-3x^6+2x^5-x^4):(-x-1)$",
   "opcions": [
    "$\\text{quocient: }-3x^{5}+5x^{4}-6x^{3}+6x^{2}-6x+6\\text{; residu: }-6$",
    "$\\text{quocient: }3x^{5}-5x^{4}+6x^{3}-6x^{2}+6x-6\\text{; residu: }6$",
    "$\\text{quocient: }3x^{5}+x^{4}+2x^{3}+2x^{2}+2x+2\\text{; residu: }-2$",
    "$\\text{quocient: }3x^{5}-5x^{4}+6x^{3}-6x^{2}+6x-6\\text{; residu: }-6$"
   ],
   "pistes": [
    "El divisor $-x-1=-(x+1)$ no és de la forma $x-a$ directa: reescriu-lo com $-(x+1)$.",
    "Divideix $-3x^6+2x^5-x^4$ i $-x-1$ pel mateix factor $-1$: $(3x^6-2x^5+x^4):(x+1)$, i aplica Ruffini amb l'arrel $-1$."
   ],
   "nota": "El divisor $-x-1$ té el coeficient de $x$ negatiu: es reescriu com $-(x+1)$, dividint dividend i divisor pel mateix factor $-1$, i s'aplica Ruffini amb l'arrel $-1$.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBSdWZmaW5pIGRpcmVjdGFtZW50IGFtYiBsJ2FycmVsICQtMSQgc2Vuc2UgcmVlc2NyaXVyZSBhYmFucyBlbCBkaXZpc29yICQteC0xJCBjb20gJC0oeCsxKSQ6IGNhbCBjYW52aWFyIGRlIHNpZ25lIGVsIGRpdmlkZW5kIGkgZWwgcXVvY2llbnQgZmluYWwuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdC4iLCAiSGFzIGZldCBzZXJ2aXIgbCdhcnJlbCAkMSQgZW4gbGxvYyBkZSAkLTEkOiBlbCBkaXZpc29yICQteC0xJCBlcXVpdmFsIGEgJC0oeCsxKSQsIGFtYiBhcnJlbCAkLTEkLiIsICIiXSwgImVyciI6IFsiRkFDVE9SX0NPTVVfU0lHTkUiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICIiXSwgInJlcyI6IFsiJCgtM3heNisyeF41LXheNCk6KC14LTEpPSgzeF42LTJ4XjUreF40KTooeCsxKSQ7IHBlciBSdWZmaW5pIGFtYiBhcnJlbCAkLTEkOiBxdW9jaWVudCAkM3heezV9LTV4Xns0fSs2eF57M30tNnheezJ9KzZ4LTYkIGkgcmVzaWR1ICQtNiQiXX0="
  },
  {
   "id": "68d",
   "ex": 68,
   "ap": "d",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula el quocient i el residu de les divisions de polinomis següents.",
   "enunciat": "$(1+3x^3-6x^6-9x^2):(3-x)$",
   "opcions": [
    "$\\text{quocient: }6x^{5}+18x^{4}+54x^{3}+159x^{2}+487x+1458\\text{; residu: }-4373$",
    "$\\text{quocient: }-6x^{5}-18x^{4}-54x^{3}-159x^{2}-486x-1458\\text{; residu: }-4373$",
    "$\\text{quocient: }6x^{5}+18x^{4}+54x^{3}+159x^{2}+486x+1458\\text{; residu: }-4373$",
    "$\\text{quocient: }6x^{5}+18x^{4}+54x^{3}+159x^{2}+486x+1458\\text{; residu: }4373$"
   ],
   "pistes": [
    "El divisor $3-x=-(x-3)$: reescriu-lo abans d'aplicar Ruffini.",
    "$(1+3x^3-6x^6-9x^2):(3-x)=(6x^6-3x^3+9x^2-1):(x-3)$ (dividend i divisor multiplicats per $-1$). Aplica Ruffini amb l'arrel $3$."
   ],
   "nota": "Igual que a l'apartat c) de l'exercici 67, el divisor $3-x$ té el signe de $x$ canviat: cal reescriure'l com $-(x-3)$ abans d'aplicar Ruffini.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB0ZXJtZSBkZSBncmF1ICQxJCBkZWwgcXVvY2llbnQgbm8gw6lzIGNvcnJlY3RlOiByZXZpc2EgZWwgcGFzIGNvcnJlc3BvbmVudCBkZSBsYSB0YXVsYSBkZSBSdWZmaW5pLiIsICJFbCBkaXZpc29yICQzLXg9LSh4LTMpJDogaGFzIGRpdmlkaXQgZGlyZWN0YW1lbnQgc2Vuc2UgcmVlc2NyaXVyZSBlbCBkaXZpc29yLCBpIHQnaGFzIGRlaXhhdCBlbCBjYW52aSBkZSBzaWduZSBkZWwgcXVvY2llbnQuIiwgIiIsICJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQuIl0sICJlcnIiOiBbIlJVRkZJTklfUEFTX01BTCIsICJGQUNUT1JfQ09NVV9TSUdORSIsICIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiUmVlc2NyaXZpbnQgZWwgZGl2aXNvciwgJCgxKzN4XjMtNnheNi05eF4yKTooMy14KSQgZG9uYSBwZXIgUnVmZmluaSBxdW9jaWVudCAkNnheezV9KzE4eF57NH0rNTR4XnszfSsxNTl4XnsyfSs0ODZ4KzE0NTgkIGkgcmVzaWR1ICQtNDM3MyQiXX0="
  },
  {
   "id": "67a",
   "ex": 67,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(4x^7-2x^3+x^5):(x+2)$",
   "opcions": [
    "$\\text{quocient: }4x^{6}-8x^{5}+17x^{4}-34x^{3}+66x^{2}-132x+264\\text{; residu: }528$",
    "$\\text{quocient: }5x^{6}-8x^{5}+17x^{4}-34x^{3}+66x^{2}-132x+264\\text{; residu: }-528$",
    "$\\text{quocient: }4x^{6}+8x^{5}+17x^{4}+34x^{3}+66x^{2}+132x+264\\text{; residu: }528$",
    "$\\text{quocient: }4x^{6}-8x^{5}+17x^{4}-34x^{3}+66x^{2}-132x+264\\text{; residu: }-528$"
   ],
   "pistes": [
    "Escriu primer el dividend ordenat de grau més gran a més petit, amb un $0$ als graus que no hi surten.",
    "Aplica Ruffini amb l'arrel $-2$: baixa, multiplica, suma, i repeteix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbWEgc3VtYSBkZSBsYSB0YXVsYS4iLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgdW4gYmlub21pIGRlIGdyYXUgJDEkLCBlbCBxdW9jaWVudCBoYSBkZSB0ZW5pciB1biBncmF1IG1lbnlzIHF1ZSBlbCBkaXZpZGVuZC4iLCAiU2kgZWwgZGl2aXNvciDDqXMgJHgtKC0yKSQsIGwnYXJyZWwgYW1iIHF1w6ggZXMgbXVsdGlwbGljYSBhIFJ1ZmZpbmkgw6lzICQtMiQsIG5vICQyJC4iLCAiIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfUVVPQ0lFTlRfR1JBVSIsICJSVUZGSU5JX1NJR05FX0FSUkVMIiwgIiJdLCAicmVzIjogWyJRdW9jaWVudCAkNHheezZ9LTh4Xns1fSsxN3heezR9LTM0eF57M30rNjZ4XnsyfS0xMzJ4KzI2NCQgaSByZXNpZHUgJC01MjgkIl19"
  },
  {
   "id": "67b",
   "ex": 67,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(1-x^5):(x-1)$",
   "opcions": [
    "$\\text{quocient: }-x^{3}-x^{2}-x-1\\text{; residu: }0$",
    "$\\text{quocient: }-x^{4}-x^{3}-x^{2}-x-1\\text{; residu: }1$",
    "$\\text{quocient: }-x^{4}-x^{3}-x^{2}-x-1\\text{; residu: }0$",
    "$\\text{quocient: }-x^{4}+x^{3}-x^{2}+x-1\\text{; residu: }2$"
   ],
   "pistes": [
    "Escriu primer el dividend ordenat de grau més gran a més petit, amb un $0$ als graus que no hi surten.",
    "Aplica Ruffini amb l'arrel $1$: baixa, multiplica, suma, i repeteix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBxdW9jaWVudCB0w6kgdW4gZ3JhdSBkZSBtw6lzOiBlbiBkaXZpZGlyIHBlciB1biBiaW5vbWkgZGUgZ3JhdSAkMSQsIGVsIHF1b2NpZW50IGhhIGRlIHRlbmlyIHVuIGdyYXUgbWVueXMgcXVlIGVsIGRpdmlkZW5kLiIsICJMJ8O6bHRpbWEgc3VtYSBkZSBsYSB0YXVsYSBubyDDqXMgY29ycmVjdGE6IHJldmlzYSBlbCBkYXJyZXIgcGFzIGRlIFJ1ZmZpbmkuIiwgIiIsICJTaSBlbCBkaXZpc29yIMOpcyAkeC0oMSkkLCBsJ2FycmVsIGFtYiBxdcOoIGVzIG11bHRpcGxpY2EgYSBSdWZmaW5pIMOpcyAkMSQsIG5vICQtMSQuIl0sICJlcnIiOiBbIlJVRkZJTklfUVVPQ0lFTlRfR1JBVSIsICJSVUZGSU5JX1BBU19NQUwiLCAiIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiXSwgInJlcyI6IFsiUXVvY2llbnQgJC14Xns0fS14XnszfS14XnsyfS14LTEkIGkgcmVzaWR1ICQwJCJdfQ=="
  },
  {
   "id": "67c",
   "ex": 67,
   "ap": "c",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(3x+2x^2-x^5+6x^6):(x+1)$",
   "opcions": [
    "$\\text{quocient: }6x^{5}-7x^{4}+7x^{3}-7x^{2}+9x-6\\text{; residu: }-6$",
    "$\\text{quocient: }6x^{5}+5x^{4}+5x^{3}+5x^{2}+7x+10\\text{; residu: }10$",
    "$\\text{quocient: }6x^{5}-7x^{4}+7x^{3}-7x^{2}+9x-6\\text{; residu: }6$",
    "$\\text{quocient: }7x^{5}-7x^{4}+7x^{3}-7x^{2}+9x-6\\text{; residu: }6$"
   ],
   "pistes": [
    "Escriu primer el dividend ordenat de grau més gran a més petit, amb un $0$ als graus que no hi surten.",
    "Aplica Ruffini amb l'arrel $-1$: baixa, multiplica, suma, i repeteix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbWEgc3VtYSBkZSBsYSB0YXVsYS4iLCAiU2kgZWwgZGl2aXNvciDDqXMgJHgtKC0xKSQsIGwnYXJyZWwgYW1iIHF1w6ggZXMgbXVsdGlwbGljYSBhIFJ1ZmZpbmkgw6lzICQtMSQsIG5vICQxJC4iLCAiIiwgIkVsIHF1b2NpZW50IHTDqSB1biBncmF1IGRlIG3DqXM6IGVuIGRpdmlkaXIgcGVyIHVuIGJpbm9taSBkZSBncmF1ICQxJCwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiLCAiIiwgIlJVRkZJTklfUVVPQ0lFTlRfR1JBVSJdLCAicmVzIjogWyJRdW9jaWVudCAkNnheezV9LTd4Xns0fSs3eF57M30tN3heezJ9Kzl4LTYkIGkgcmVzaWR1ICQ2JCJdfQ=="
  },
  {
   "id": "67d",
   "ex": 67,
   "ap": "d",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(9-x^2):(3-x)$",
   "opcions": [
    "$\\text{quocient: }2x+3\\text{; residu: }0$",
    "$\\text{quocient: }-x-3\\text{; residu: }0$",
    "$\\text{quocient: }x+3\\text{; residu: }0$",
    "$\\text{quocient: }x+4\\text{; residu: }0$"
   ],
   "pistes": [
    "El divisor $3-x$ no és de la forma $x-a$ directa: reescriu-lo com $3-x=-(x-3)$.",
    "$(9-x^2):(3-x)=(x^2-9):(x-3)$ (el signe es cancel·la a numerador i denominador). Aplica Ruffini amb l'arrel $3$."
   ],
   "nota": "El divisor $3-x$ té el signe de $x$ canviat respecte a la forma habitual $x-a$: per fer-lo servir amb Ruffini cal reescriure'l primer com $-(x-3)$, dividint $9-x^2$ i $3-x$ pel mateix factor $-1$ (el quocient de la divisió no canvia).",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB0ZXJtZSBkZSBncmF1ICQxJCBkZWwgcXVvY2llbnQgbm8gw6lzIGNvcnJlY3RlOiByZXZpc2EgbGEgdGF1bGEgZGUgUnVmZmluaSBwYXMgYSBwYXMuIiwgIkVsIGRpdmlzb3Igw6lzICQzLXg9LSh4LTMpJDogY2FsIGFwbGljYXIgUnVmZmluaSBhbWIgbCdhcnJlbCAkMyQgc29icmUgJHheMi05JCAobCdvcG9zYXQgZGVsIGRpdmlkZW5kKSBpIGRlc3Byw6lzIHRvcm5hciBhIGNhbnZpYXIgZWwgc2lnbmUgZGVsIHF1b2NpZW50LiBUJ2hhcyBkZWl4YXQgYXF1ZXN0IHNlZ29uIGNhbnZpIGRlIHNpZ25lLiIsICIiLCAiSGFzIGFwbGljYXQgUnVmZmluaSBhbWIgbCdhcnJlbCAkLTMkIGVuIGxsb2MgZGUgJDMkOiBlbCBkaXZpc29yICQzLXgkIGVxdWl2YWwgYSAkLSh4LTMpJCwgYW1iIGFycmVsICQzJC4iXSwgImVyciI6IFsiUlVGRklOSV9QQVNfTUFMIiwgIkZBQ1RPUl9DT01VX1NJR05FIiwgIiIsICJSVUZGSU5JX1NJR05FX0FSUkVMIl0sICJyZXMiOiBbIiQoOS14XjIpOigzLXgpPSh4XjItOSk6KHgtMykkLCBpIHBlciBSdWZmaW5pIGFtYiBhcnJlbCAkMyQgc3VydCBxdW9jaWVudCAkeCszJCBpIHJlc2lkdSAkMCQiXX0="
  },
  {
   "id": "67e",
   "ex": 67,
   "ap": "e",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(x^3-2x+6):(2x-2)$",
   "opcions": [
    "$\\text{quocient: }x^{2}+x-1\\text{; residu: }5$",
    "$\\text{quocient: }-x^{2}-x+1\\text{; residu: }5$",
    "$\\text{quocient: }\\dfrac{1}{2}x^{2}+\\dfrac{1}{2}x-\\dfrac{1}{2}\\text{; residu: }-5$",
    "$\\text{quocient: }\\dfrac{1}{2}x^{2}+\\dfrac{1}{2}x-\\dfrac{1}{2}\\text{; residu: }5$"
   ],
   "pistes": [
    "El divisor $2x-2=2(x-1)$ no té coeficient líder $1$: treu-ne el factor $2$ abans d'aplicar Ruffini.",
    "Aplica Ruffini a $(x^3-2x+6):(x-1)$ amb arrel $1$, i divideix després el quocient obtingut entre $2$ (el residu no canvia)."
   ],
   "nota": "El divisor $2x-2$ té coeficient líder $2$, no $1$: la regla de Ruffini \"pura\" només s'aplica directament a divisors $x-a$. Es resol traient-ne el factor comú, $2x-2=2(x-1)$, aplicant Ruffini amb $(x-1)$, i dividint el quocient resultant entre $2$ (el residu es manté igual).",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBSdWZmaW5pIGFtYiBsJ2FycmVsICQxJCAoZGUgJHgtMSQpIHBlcsOyIHNlbnNlIHRlbmlyIGVuIGNvbXB0ZSBxdWUgZWwgZGl2aXNvciDDqXMgJDJ4LTI9Mih4LTEpJCwgbm8gJHgtMSQ6IGVsIHF1b2NpZW50IGZpbmFsIHMnaGEgZGUgZGl2aWRpciBwZXIgJDIkLiIsICJIYXMgYXBsaWNhdCBSdWZmaW5pIGFtYiBsJ2FycmVsICQtMSQgZW4gbGxvYyBkZSAkMSQ6IGVsIGZhY3RvciDDqXMgJCh4LTEpJCwgbm8gJCh4KzEpJC4iLCAiRWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiIsICIiXSwgImVyciI6IFsiUlVGRklOSV9ESVZJU09SX05PX01PTklDIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiIl0sICJyZXMiOiBbIiQoeF4zLTJ4KzYpOih4LTEpJCBwZXIgUnVmZmluaSBkb25hIHF1b2NpZW50ICR4XnsyfSt4LTEkIGkgcmVzaWR1ICQ1JDsgY29tIHF1ZSBlbCBkaXZpc29yIHJlYWwgw6lzIGVsIGRvYmxlLCAkMngtMiQsIGVsIHF1b2NpZW50IGZpbmFsIGVzIGRpdmlkZWl4IGVudHJlICQyJDogJFxcZGZyYWN7MX17Mn14XnsyfStcXGRmcmFjezF9ezJ9eC1cXGRmcmFjezF9ezJ9JCwgcmVzaWR1ICQ1JCJdfQ=="
  },
  {
   "id": "67f",
   "ex": 67,
   "ap": "f",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(-x^4+3x^2-x+1):(3x+6)$",
   "opcions": [
    "$\\text{quocient: }-x^{3}+2x^{2}-x+1\\text{; residu: }-1$",
    "$\\text{quocient: }x^{3}-2x^{2}+x-1\\text{; residu: }-1$",
    "$\\text{quocient: }-\\dfrac{1}{3}x^{3}+\\dfrac{2}{3}x^{2}-\\dfrac{1}{3}x+\\dfrac{1}{3}\\text{; residu: }-1$",
    "$\\text{quocient: }-\\dfrac{1}{3}x^{3}+\\dfrac{2}{3}x^{2}-\\dfrac{1}{3}x+\\dfrac{1}{3}\\text{; residu: }1$"
   ],
   "pistes": [
    "El divisor $3x+6=3(x+2)$ no té coeficient líder $1$: treu-ne el factor $3$ abans d'aplicar Ruffini.",
    "Aplica Ruffini amb arrel $-2$ i divideix després el quocient entre $3$ (el residu no canvia)."
   ],
   "nota": "Igual que a l'apartat e), el divisor $3x+6$ té coeficient líder $3$: es treu el factor comú, s'aplica Ruffini amb $(x+2)$, i el quocient final es divideix entre $3$.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBSdWZmaW5pIGFtYiBsJ2FycmVsICQtMiQgKGRlICR4KzIkKSBwZXLDsiBlbCBkaXZpc29yIMOpcyAkM3grNj0zKHgrMikkLCBubyAkeCsyJDogZWwgcXVvY2llbnQgZmluYWwgcydoYSBkZSBkaXZpZGlyIHBlciAkMyQuIiwgIkhhcyBhcGxpY2F0IFJ1ZmZpbmkgYW1iIGwnYXJyZWwgJDIkIGVuIGxsb2MgZGUgJC0yJDogZWwgZmFjdG9yIMOpcyAkKHgrMikkLCBubyAkKHgtMikkLiIsICIiLCAiRWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiJdLCAiZXJyIjogWyJSVUZGSU5JX0RJVklTT1JfTk9fTU9OSUMiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiJCgteF40KzN4XjIteCsxKTooeCsyKSQgcGVyIFJ1ZmZpbmkgZG9uYSBxdW9jaWVudCAkLXheezN9KzJ4XnsyfS14KzEkIGkgcmVzaWR1ICQtMSQ7IGRpdmlkaXQgZWwgcXVvY2llbnQgZW50cmUgJDMkIChkaXZpc29yIHJlYWwgJDN4KzYkKTogJC1cXGRmcmFjezF9ezN9eF57M30rXFxkZnJhY3syfXszfXheezJ9LVxcZGZyYWN7MX17M314K1xcZGZyYWN7MX17M30kLCByZXNpZHUgJC0xJCJdfQ=="
  },
  {
   "id": "69a",
   "ex": 69,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "A la taula de Ruffini següent hi manquen algunes dades (marcades amb $\\square$). Completa-la i indica el quocient i el residu de la divisió corresponent.",
   "enunciat": "Dividend $3x^{3}+4x^{2}-1$, divisor $x+1$:",
   "opcions": [
    "$\\text{quocient: }3x^{2}+4x\\text{; residu: }0$",
    "$\\text{quocient: }3x^{2}+7x+7\\text{; residu: }6$",
    "$\\text{quocient: }3x^{2}+x-1\\text{; residu: }1$",
    "$\\text{quocient: }3x^{2}+x-1\\text{; residu: }0$"
   ],
   "pistes": [
    "Baixa el primer coeficient ($3$), multiplica'l per l'arrel ($-1$) i suma el resultat al següent coeficient; repeteix fins al final.",
    "L'últim número de la fila inferior és el residu; els altres, en ordre, són els coeficients del quocient."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbGd1bmEgc3VtYSBpbnRlcm3DqGRpYSBkZSBsYSB0YXVsYSBubyDDqXMgY29ycmVjdGE6IHJldmlzYSBlbCB0ZXJjZXIgcGFzIChwcm9kdWN0ZSBpIHN1bWEgY29ycmVzcG9uZW50cykuIiwgIkhhcyBtdWx0aXBsaWNhdCBwZXIgJDEkIGEgY2FkYSBwYXMgZW4gbGxvYyBkZSBwZXIgJC0xJDogc2kgZWwgZGl2aXNvciDDqXMgJHgrMT14LSgtMSkkLCBsJ2FycmVsIHBlciBSdWZmaW5pIMOpcyAkLTEkLiIsICJFbCByZXNpZHUgbm8gw6lzICQxJDogbGEgZGl2aXNpw7Mgw6lzIGV4YWN0YSAocmVzaWR1ICQwJCksIGphIHF1ZSBsJ8O6bHRpbSBwYXMgZGUgbGEgdGF1bGEgZG9uYSAkLTFcXGNkb3QoLTEpKygtMSk9MCQuIiwgIiJdLCAiZXJyIjogWyJSVUZGSU5JX1BBU19NQUwiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICJSVUZGSU5JX1JFU0lEVV9DT01fUVVPQ0lFTlQiLCAiIl0sICJyZXMiOiBbIkFtYiBhcnJlbCAkLTEkOiBxdW9jaWVudCAkM3heezJ9K3gtMSQgaSByZXNpZHUgJDAkIl19"
  },
  {
   "id": "69b",
   "ex": 69,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "A la taula de Ruffini següent hi manquen algunes dades (marcades amb $\\square$). Completa-la i indica el quocient i el residu de la divisió corresponent.",
   "enunciat": "Dividend $4x^{3}+3x^{2}+2x+1$, arrel $\\square$ (divisor desconegut); a la fila inferior, la segona casella val $-1$:",
   "opcions": [
    "$\\square=1$; $\\text{quocient: }4x^{2}+7x+9\\text{; residu: }10$",
    "$\\square=-1$; $\\text{quocient: }4x^{2}-x+3\\text{; residu: }-2$",
    "$\\square=-1$; $\\text{quocient: }4x^{2}-x+3\\text{; residu: }2$",
    "$\\square=-1$; $\\text{quocient: }4x^{2}+x+3\\text{; residu: }-2$"
   ],
   "pistes": [
    "La segona casella de la fila inferior és $4\\cdot\\square+3$: iguala-la a $-1$ i aïlla $\\square$.",
    "Amb $\\square=-1$, completa la resta de la taula de Ruffini com sempre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTaSAkNFxcY2RvdFxcc3F1YXJlKzM9LTEkLCBhw69sbGFudCBzdXJ0ICRcXHNxdWFyZT0tMSQsIG5vICQxJDogcmV2aXNhIGVsIHNpZ25lIGVuIHJlc29sZHJlIGwnZXF1YWNpw7MuIiwgIiIsICJFbCB2YWxvciBkZSAkXFxzcXVhcmUkIMOpcyBjb3JyZWN0ZSwgcGVyw7IgZWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiIsICJFbCB2YWxvciBkZSAkXFxzcXVhcmUkIMOpcyBjb3JyZWN0ZSwgcGVyw7IgYWxndW4gcGFzIHBvc3RlcmlvciBkZSBsYSB0YXVsYSBubyBzJ2hhIGNvbXBsZXRhdCBiw6kuIl0sICJlcnIiOiBbIlJVRkZJTklfU0lHTkVfQVJSRUwiLCAiIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfUEFTX01BTCJdLCAicmVzIjogWyJEZSAkNFxcY2RvdFxcc3F1YXJlKzM9LTEkIHN1cnQgJFxcc3F1YXJlPS0xJDsgYW1iIGFxdWVzdGEgYXJyZWwsIHF1b2NpZW50ICQ0eF57Mn0teCszJCBpIHJlc2lkdSAkLTIkIl19"
  },
  {
   "id": "69c",
   "ex": 69,
   "ap": "c",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "A la taula de Ruffini següent hi manquen algunes dades (marcades amb $\\square$). Completa-la i indica el quocient i el residu de la divisió corresponent.",
   "enunciat": "Dividend $x^{3}-x+2$, arrel $\\square$ positiva (divisor desconegut); el residu de la divisió és $2$:",
   "opcions": [
    "$\\square=1$; $\\text{quocient: }x^{2}+x\\text{; residu: }2$",
    "$\\square=-1$; $\\text{quocient: }x^{2}-x\\text{; residu: }2$",
    "$\\square=1$; $\\text{quocient: }x^{2}-x\\text{; residu: }2$",
    "$\\square=1$; $\\text{quocient: }x^{2}+x\\text{; residu: }-2$"
   ],
   "pistes": [
    "El residu final és $\\square^3-\\square+2$ (arrossegant els termes de la taula): iguala'l a $2$ i resol l'equació de tercer grau.",
    "$\\square^3-\\square=\\square(\\square-1)(\\square+1)=0$ té tres solucions. Quina és positiva?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQW1iICRcXHNxdWFyZT0tMSQgZWwgcmVzaWR1IHRhbWLDqSBzdXJ0ICQyJCAoY29tcHJvdmEtaG8pLCBwZXLDsiBsJ2VudW5jaWF0IGRlbWFuYSB1bmEgYXJyZWwgcG9zaXRpdmEuIiwgIkwnYXJyZWwgw6lzIGJvbmEsIHBlcsOyIGEgY2FkYSBjb2x1bW5hIGhhcyByZXN0YXQgZWwgcHJvZHVjdGUgZW4gbGxvYyBkZSBzdW1hci1sbzogJDArMVxcY2RvdDE9MSQsIG5vICQwLTE9LTEkLiIsICJFbCB2YWxvciBkZSAkXFxzcXVhcmUkIMOpcyBjb3JyZWN0ZSwgcGVyw7IgZWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiJdLCAiZXJyIjogWyIiLCAiQ09ORElDSU9fRU5VTkNJQVRfSUdOT1JBREEiLCAiUlVGRklOSV9QQVNfTUFMIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIl0sICJyZXMiOiBbIkRlICRcXHNxdWFyZV4zLVxcc3F1YXJlPTAkIHN1cnRlbiAkXFxzcXVhcmU9LTEsMCwxJCwgaSBsJ8O6bmljYSBwb3NpdGl2YSDDqXMgJFxcc3F1YXJlPTEkOiBsYSB0YXVsYSBkb25hIHF1b2NpZW50ICR4XnsyfSt4JCBpIHJlc2lkdSAkMiQiXSwgImNvbSI6ICJMJ2VxdWFjacOzICRcXHNxdWFyZV4zLVxcc3F1YXJlPTAkIHTDqSB0cmVzIHNvbHVjaW9uczogJC0xJCwgJDAkIGkgJDEkLiBBbWIgJFxcc3F1YXJlPTAkIHNlcmlhIGRpdmlkaXIgcGVyICR4JCwgdW4gY2FzIHRyaXZpYWw7IGFtYiAkXFxzcXVhcmU9LTEkIGxhIHRhdWxhIHRhbWLDqSBmdW5jaW9uYSAocXVvY2llbnQgJHheMi14JCwgcmVzaWR1ICQyJCkuIn0="
  },
  {
   "id": "69d",
   "ex": 69,
   "ap": "d",
   "bloc": "divisio",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "A la taula de Ruffini següent hi manquen algunes dades (marcades amb $\\square$). Completa-la i indica el quocient i el residu de la divisió corresponent.",
   "enunciat": "Dividend $\\square x^3+0x^2+0x-3$, divisor $x+4$; a la fila inferior, la segona casella val $8$:",
   "opcions": [
    "$\\square=-2$; $\\text{quocient: }-2x^{2}+8x-32\\text{; residu: }-125$",
    "$\\square=-2$; $\\text{quocient: }-2x^{2}+4x-32\\text{; residu: }125$",
    "$\\square=2$; $\\text{quocient: }2x^{2}-8x+32\\text{; residu: }-131$",
    "$\\square=-2$; $\\text{quocient: }-2x^{2}+8x-32\\text{; residu: }125$"
   ],
   "pistes": [
    "La segona casella de la fila inferior és $\\square\\cdot(-4)$: iguala-la a $8$ i aïlla $\\square$.",
    "Amb $\\square=-2$, completa la resta de la taula de Ruffini com sempre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB2YWxvciBkZSAkXFxzcXVhcmUkIMOpcyBjb3JyZWN0ZSwgcGVyw7IgZWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiIsICJFbCB2YWxvciBkZSAkXFxzcXVhcmUkIMOpcyBjb3JyZWN0ZSwgcGVyw7IgYWxndW4gcGFzIHBvc3RlcmlvciBkZSBsYSB0YXVsYSBubyBzJ2hhIGNvbXBsZXRhdCBiw6kuIiwgIlNpICRcXHNxdWFyZVxcY2RvdCgtNCk9OCQsIGHDr2xsYW50IHN1cnQgJFxcc3F1YXJlPS0yJCwgbm8gJDIkOiByZXZpc2EgZWwgc2lnbmUgZW4gcmVzb2xkcmUgbCdlcXVhY2nDsy4iLCAiIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfUEFTX01BTCIsICJSVUZGSU5JX1NJR05FX0FSUkVMIiwgIiJdLCAicmVzIjogWyJEZSAkXFxzcXVhcmVcXGNkb3QoLTQpPTgkIHN1cnQgJFxcc3F1YXJlPS0yJDsgYW1iIGFxdWVzdGEgYXJyZWwsIHF1b2NpZW50ICQtMnheezJ9Kzh4LTMyJCBpIHJlc2lkdSAkMTI1JCJdfQ=="
  }
 ]
};
