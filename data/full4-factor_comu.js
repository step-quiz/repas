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
  "DISTRIBUCIO_INCOMPLETA": "En multiplicar un polinomi per un altre, cada terme del primer s'ha de multiplicar per TOTS els termes del segon, no només per un.",
  "FACTORITZACIO_DESFETA": "Has desenvolupat el producte: és el mateix polinomi, però no en la forma que es demana. Factoritzar és deixar-lo com a producte de factors tan simples com es pugui, no tornar-lo a convertir en una suma.",
  "FACTOR_COMU_INCOMPLET": "No has tret tot el factor comú possible: revisa si encara hi ha algun nombre o alguna $x$ que es repeteixi a tots els termes.",
  "FACTOR_COMU_MAL_DIVIDIT": "En treure factor comú, cada terme s'ha de dividir pel factor comú: algun terme de dins del parèntesi no s'ha dividit correctament.",
  "FACTOR_COMU_SIGNE": "Revisa el signe del factor comú: si tots els termes són negatius, sol convenir treure'l amb signe $-$ perquè el que quedi dins comenci en positiu.",
  "GRAUS_MAL_AGRUPATS": "Només es poden sumar o restar termes del MATEIX grau: $x^3$ amb $x^3$, $x^2$ amb $x^2$... Revisa que has agrupat els termes correctes.",
  "GRAU_PRODUCTE_MAL": "En multiplicar potències de $x$, els exponents se SUMEN: $x^a\\cdot x^b=x^{a+b}$. El grau del producte és la suma dels graus dels factors.",
  "IGUALTAT_NOTABLE_SIGNE": "Revisa el signe del terme del mig: $(a-b)^2=a^2-2ab+b^2$, amb el terme del mig NEGATIU, a diferència de $(a+b)^2$.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau."
 },
 "items": [
  {
   "id": "349a",
   "ex": 349,
   "ap": "a",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Treu factor comú en aquesta expressió: escriu-la com el factor que es repeteix multiplicat per un parèntesi.",
   "enunciat": "$5x+10$",
   "opcions": [
    "$2(x+5)$",
    "$5(x+10)$",
    "$15x$",
    "$5(x+2)$"
   ],
   "pistes": [
    "Quin nombre divideix el $5$ i el $10$ alhora?",
    "Divideix cada terme per $5$ i posa el resultat dins del parèntesi."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTaSBkZXNmw6BzIGVsIHBhcsOobnRlc2ksICQyKHgrNSk9MngrMTAkLCBxdWUgbm8gw6lzICQ1eCsxMCQuIEVsIGZhY3RvciBjb23DuiDDqXMgZWwgJDUkLiIsICJFbCAkMTAkIHRhbWLDqSBzJ2hhIGRlIGRpdmlkaXIgcGVyICQ1JC4gRW4gdHJldXJlIGZhY3RvciBjb23DuiwgY2FkYSB0ZXJtZSBzJ2hhIGRlIGRpdmlkaXIgcGVsIGZhY3RvciBjb23DujogYWxndW4gdGVybWUgZGUgZGlucyBkZWwgcGFyw6hudGVzaSBubyBzJ2hhIGRpdmlkaXQgY29ycmVjdGFtZW50LiIsICIkNXgkIGkgJDEwJCBubyBzw7NuIHRlcm1lcyBzZW1ibGFudHMgKHVuIHBvcnRhICR4JCBpIGwnYWx0cmUgbm8pOiBubyBlcyBwb2RlbiBzdW1hci4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIkdSQVVTX01BTF9BR1JVUEFUUyIsICIiXSwgInJlcyI6IFsiJDV4PTVcXGNkb3QgeCQgaSAkMTA9NVxcY2RvdDIkIiwgIiQ1eCsxMD01KHgrMikkIl19"
  },
  {
   "id": "349b",
   "ex": 349,
   "ap": "b",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Treu factor comú en aquesta expressió: escriu-la com el factor que es repeteix multiplicat per un parèntesi.",
   "enunciat": "$x^2+7x$",
   "opcions": [
    "$8x^3$",
    "$x(x^2+7)$",
    "$x(x+7x)$",
    "$x(x+7)$"
   ],
   "pistes": [
    "Quina lletra es repeteix als dos termes?",
    "Divideix cada terme per $x$ i posa el resultat dins del parèntesi."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkeF4yJCBpICQ3eCQgbm8gc8OzbiB0ZXJtZXMgc2VtYmxhbnRzICh0ZW5lbiBncmF1cyBkaWZlcmVudHMpOiBubyBlcyBwb2RlbiBzdW1hci4iLCAiJHheMiQgZGl2aWRpdCBwZXIgJHgkIMOpcyAkeCQsIG5vICR4XjIkLiBFbiB0cmV1cmUgZmFjdG9yIGNvbcO6LCBjYWRhIHRlcm1lIHMnaGEgZGUgZGl2aWRpciBwZWwgZmFjdG9yIGNvbcO6OiBhbGd1biB0ZXJtZSBkZSBkaW5zIGRlbCBwYXLDqG50ZXNpIG5vIHMnaGEgZGl2aWRpdCBjb3JyZWN0YW1lbnQuIiwgIiQ3eCQgZGl2aWRpdCBwZXIgJHgkIMOpcyAkNyQ6IGxhICR4JCBqYSDDqXMgZm9yYSBkZWwgcGFyw6hudGVzaS4iLCAiIl0sICJlcnIiOiBbIkdSQVVTX01BTF9BR1JVUEFUUyIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCIsICIiXSwgInJlcyI6IFsiJHheMj14XFxjZG90IHgkIGkgJDd4PXhcXGNkb3Q3JCIsICIkeF4yKzd4PXgoeCs3KSQiXX0="
  },
  {
   "id": "73a",
   "ex": 73,
   "ap": "a",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Treu factor comú.",
   "enunciat": "$3x^2-4x$",
   "opcions": [
    "$x(3x-4x)$",
    "$3x(x-4)$",
    "$x(3x-4)$",
    "$x(3x^2-4x)$"
   ],
   "pistes": [
    "Busca què es repeteix als dos termes, $3x^2$ i $-4x$: el factor comú és $x$.",
    "Divideix cada terme pel factor comú i escriu el resultat dins del parèntesi."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiB0cmV1cmUgZWwgZmFjdG9yICR4JCwgZWwgc2Vnb24gdGVybWUsICQtNHgkLCBzJ2hhIGRlIGRpdmlkaXIgdGFtYsOpIHBlciAkeCQ6IHF1ZWRhICQtNCQsIG5vICQtNHgkLiIsICJFbCBmYWN0b3IgY29tw7ogZGVscyBkb3MgdGVybWVzIMOpcyAkeCQsIG5vICQzeCQ6IGVsICQzJCBub23DqXMgYXBhcmVpeCBhbCBwcmltZXIgdGVybWUuIiwgIiIsICJEaW5zIGRlbCBwYXLDqG50ZXNpIGVscyB0ZXJtZXMgbm8gcydoYW4gZGl2aWRpdCBwZWwgZmFjdG9yIGNvbcO6ICR4JDogaGF1cmllbiBkZSBxdWVkYXIgJDN4JCBpICQtNCQuIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICIiLCAiRkFDVE9SX0NPTVVfTUFMX0RJVklESVQiXSwgInJlcyI6IFsiJDN4XjItNHg9eFxcY2RvdCgzeC00KSQiXX0="
  },
  {
   "id": "73b",
   "ex": 73,
   "ap": "b",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Treu factor comú.",
   "enunciat": "$(x+1)+3(x+1)$",
   "opcions": [
    "$4(x+1)$",
    "$(x+1)(3x+3)$",
    "$4x+1$",
    "$3(x+1)$"
   ],
   "pistes": [
    "El binomi $(x+1)$ es repeteix als dos termes: el primer és $1\\cdot(x+1)$ i el segon $3\\cdot(x+1)$.",
    "Treu $(x+1)$ com a factor comú: queda $(1+3)\\cdot(x+1)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWxzIGRvcyB0ZXJtZXMgc8OzbiAkKHgrMSkkIGkgJDMoeCsxKSQ6IGVsIGZhY3RvciBjb23DuiAkKHgrMSkkIGVzIHRyZXUgdW4gc29sIGNvcCwgaSBxdWVkYSAkMSszPTQkIGRpbnMgZGUgbCdhbHRyZSBwYXLDqG50ZXNpLiIsICJFbCAkNCQgaGEgZGUgbXVsdGlwbGljYXIgVE9UIGVsIGJpbm9taSAkKHgrMSkkLCBubyBub23DqXMgbGEgJHgkOiDDqXMgJDQoeCsxKT00eCs0JC4iLCAiVCdoYXMgZGVpeGF0IGVsIHByaW1lciAkKHgrMSkkIChxdWUgY29tcHRhIGNvbSAkMSQgdmVnYWRhIGVsIGJpbm9taSk6IGVsIHRvdGFsIMOpcyAkMSszPTQkIHZlZ2FkZXMgJCh4KzEpJCwgbm8gJDMkLiJdLCAiZXJyIjogWyIiLCAiRElTVFJJQlVDSU9fSU5DT01QTEVUQSIsICJESVNUUklCVUNJT19JTkNPTVBMRVRBIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiJCh4KzEpKzMoeCsxKT0oMSszKSh4KzEpPTQoeCsxKSQiXX0="
  },
  {
   "id": "73c",
   "ex": 73,
   "ap": "c",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Treu factor comú.",
   "enunciat": "$xy-6xyz-5xyzt$",
   "opcions": [
    "$xy(1-6z-5zt)$",
    "$xyz(1-6-5t)$",
    "$xy(-1-6z-5zt)$",
    "$xy(1-6zt-5zt)$"
   ],
   "pistes": [
    "Busca el factor que es repeteix als tres termes: $xy$, $-6xyz$ i $-5xyzt$ tenen en comú $xy$.",
    "Divideix cada terme pel factor comú $xy$: queden $1$, $-6z$ i $-5zt$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcHJpbWVyIHRlcm1lLCAkeHkkLCBubyB0w6kgZWwgZmFjdG9yICR6JDogZWwgZmFjdG9yIGNvbcO6IGFscyB0cmVzIHRlcm1lcyDDqXMgJHh5JCwgbm8gJHh5eiQuIiwgIkVsIHByaW1lciB0ZXJtZSBkaW5zIGRlbCBwYXLDqG50ZXNpIGhhIGRlIHNlciAkKzEkIChkaXZpZGludCAkeHkkIHBlciAkeHkkKSwgbm8gJC0xJC4iLCAiRWwgc2Vnb24gdGVybWUgZGlucyBkZWwgcGFyw6hudGVzaSBoYSBkZSBxdWVkYXIgJC02eiQgKGRpdmlkaW50ICQtNnh5eiQgcGVyICR4eSQpLCBubyAkLTZ6dCQ6IHJldmlzYSBxdWluIHRlcm1lIHBvcnRhIGxhICR0JC4iXSwgImVyciI6IFsiIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJGQUNUT1JfQ09NVV9TSUdORSIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCJdLCAicmVzIjogWyIkeHktNnh5ei01eHl6dD14eVxcY2RvdCgxLTZ6LTV6dCkkIl19"
  },
  {
   "id": "73d",
   "ex": 73,
   "ap": "d",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Treu factor comú.",
   "enunciat": "$3x-4x^2-6x^3$",
   "opcions": [
    "$x(3x-4x^2-6x^3)$",
    "$x(3-4x-6x^2)$",
    "$x(3-4x^2-6x^3)$",
    "$x^3(3-4x-6x^2)$"
   ],
   "pistes": [
    "Busca el factor comú als tres termes: $3x$, $-4x^2$ i $-6x^3$ tenen en comú $x$.",
    "Divideix cada terme per $x$: queden $3$, $-4x$ i $-6x^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUgZGlucyBkZWwgcGFyw6hudGVzaSBzJ2hhIGRlIGRpdmlkaXIgcGVyICR4JDogJDN4Ong9MyQsIG5vICQzeCQuIiwgIiIsICJFbHMgdGVybWVzIGRlIGRpbnMgZGVsIHBhcsOobnRlc2kgcydoYW4gZGUgZGl2aWRpciBwZXIgJHgkOiAkLTR4XjI6eD0tNHgkIGkgJC02eF4zOng9LTZ4XjIkLCBubyBlcyBxdWVkZW4gaWd1YWwuIiwgIkVsIHByaW1lciB0ZXJtZSwgJDN4JCwgbm9tw6lzIHTDqSB1bmEgJHgkOiBlbCBmYWN0b3IgY29tw7ogw6lzICR4JCwgbm8gJHheMyQuIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIiIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJDN4LTR4XjItNnheMz14XFxjZG90KDMtNHgtNnheMikkIl19"
  },
  {
   "id": "74a",
   "ex": 74,
   "ap": "a",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Factoritza al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$7x^2-14x+7$",
   "opcions": [
    "$7(x-1)^2$",
    "$7(x+1)^2$",
    "$(7x-7)^2$",
    "$7(x-1)$"
   ],
   "pistes": [
    "Els tres coeficients ($7$, $-14$ i $7$) són múltiples de $7$: treu-lo factor comú.",
    "Dins del parèntesi queda $x^2-2x+1$. Mira si és el quadrat d'un binomi: $a^2-2ab+b^2=(a-b)^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdGVybWUgZGVsIG1pZywgJC0xNHgkLCDDqXMgbmVnYXRpdTogY29ycmVzcG9uIGEgJCh4LTEpXjIkLCBhbWIgc2lnbmUgJC0kLiIsICJFbCAkNyQgcydoYSBkZSB0cmV1cmUgY29tIGEgZmFjdG9yIGNvbcO6IGFiYW5zIGRlIHJlY29uw6hpeGVyIGVsIHF1YWRyYXQgcGVyZmVjdGUsIG5vIGZpY2FyLWxvIGRpbnMgZGVsIHF1YWRyYXQuIiwgIlVuIGNvcCB0cmV0IGVsIGZhY3RvciAkNyQsIHF1ZWRhICR4XjItMngrMSQsIHF1ZSDDqXMgdW4gcXVhZHJhdCBwZXJmZWN0ZSwgJCh4LTEpXjIkOiBubyBlcyBwb3QgZGVpeGFyIHNlbnNlIGVsIHF1YWRyYXQuIl0sICJlcnIiOiBbIiIsICJJR1VBTFRBVF9OT1RBQkxFX1NJR05FIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJHUkFVX1BST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkN3heMi0xNHgrNz03KHheMi0yeCsxKT03KHgtMSleMiQiXX0="
  },
  {
   "id": "74b",
   "ex": 74,
   "ap": "b",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Factoritza al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$16x^2+64x+64$",
   "opcions": [
    "$16(x-2)^2$",
    "$16(x+2)^2$",
    "$8(x+2)^2$",
    "$16(x+2)$"
   ],
   "pistes": [
    "Els tres coeficients ($16$, $64$ i $64$) són múltiples de $16$: treu-lo factor comú.",
    "Dins del parèntesi queda $x^2+4x+4$. Mira si és el quadrat d'un binomi: $a^2+2ab+b^2=(a+b)^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCB0ZXJtZSBkZWwgbWlnLCAkKzY0eCQsIMOpcyBwb3NpdGl1OiBjb3JyZXNwb24gYSAkKHgrMileMiQsIGFtYiBzaWduZSAkKyQuIiwgIiIsICJFbCBmYWN0b3IgY29tw7ogZGUgJDE2JCwgJDY0JCBpICQ2NCQgw6lzICQxNiQsIG5vICQ4JC4iLCAiVW4gY29wIHRyZXQgZWwgZmFjdG9yICQxNiQsIHF1ZWRhICR4XjIrNHgrNCQsIHF1ZSDDqXMgdW4gcXVhZHJhdCBwZXJmZWN0ZSwgJCh4KzIpXjIkOiBubyBlcyBwb3QgZGVpeGFyIHNlbnNlIGVsIHF1YWRyYXQuIl0sICJlcnIiOiBbIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiLCAiIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJHUkFVX1BST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkMTZ4XjIrNjR4KzY0PTE2KHheMis0eCs0KT0xNih4KzIpXjIkIl19"
  },
  {
   "id": "74c",
   "ex": 74,
   "ap": "c",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Factoritza al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$x^3-2x^2+x$",
   "opcions": [
    "$x(x-1)$",
    "$(x-1)^2$",
    "$x(x+1)^2$",
    "$x(x-1)^2$"
   ],
   "pistes": [
    "Els tres termes porten $x$: treu-la factor comú.",
    "Dins del parèntesi queda $x^2-2x+1$. Mira si és el quadrat d'un binomi: $a^2-2ab+b^2=(a-b)^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBjb3AgdHJldCBlbCBmYWN0b3IgJHgkLCBxdWVkYSAkeF4yLTJ4KzEkLCBxdWUgw6lzIHVuIHF1YWRyYXQgcGVyZmVjdGUsICQoeC0xKV4yJDogbm8gZXMgcG90IGRlaXhhciBzZW5zZSBlbCBxdWFkcmF0LiIsICJUJ2hhcyBkZWl4YXQgZWwgZmFjdG9yIGNvbcO6ICR4JDogZWxzIHRyZXMgdGVybWVzICgkeF4zJCwgJC0yeF4yJCwgJHgkKSBlbCB0ZW5lbiBlbiBjb23Dui4iLCAiRWwgdGVybWUgZGVsIG1pZywgJC0yeF4yJCAodW4gY29wIHRyZXQgZWwgZmFjdG9yICR4JCwgJC0yeCQpLCDDqXMgbmVnYXRpdTogY29ycmVzcG9uIGEgJCh4LTEpXjIkLCBhbWIgc2lnbmUgJC0kLiIsICIiXSwgImVyciI6IFsiR1JBVV9QUk9EVUNURV9NQUwiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiLCAiIl0sICJyZXMiOiBbIiR4XjMtMnheMit4PXgoeF4yLTJ4KzEpPXgoeC0xKV4yJCJdfQ=="
  },
  {
   "id": "74d",
   "ex": 74,
   "ap": "d",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Factoritza al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$18x^4-12x^2+2$",
   "opcions": [
    "$2(3x^2-1)$",
    "$2(3x^2+1)^2$",
    "$6(3x^2-1)^2$",
    "$2(3x^2-1)^2$"
   ],
   "pistes": [
    "Els tres coeficients ($18$, $-12$ i $2$) són múltiples de $2$: treu-lo factor comú.",
    "Dins del parèntesi queda $9x^4-6x^2+1$, i $9x^4=(3x^2)^2$. Mira si és el quadrat d'un binomi: $a^2-2ab+b^2=(a-b)^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBjb3AgdHJldCBlbCBmYWN0b3IgJDIkLCBxdWVkYSAkOXheNC02eF4yKzEkLCBxdWUgw6lzIHVuIHF1YWRyYXQgcGVyZmVjdGUsICQoM3heMi0xKV4yJDogbm8gZXMgcG90IGRlaXhhciBzZW5zZSBlbCBxdWFkcmF0LiIsICJFbCB0ZXJtZSBkZWwgbWlnLCAkLTZ4XjIkICh1biBjb3AgdHJldCBlbCAkMiQpLCDDqXMgbmVnYXRpdTogY29ycmVzcG9uIGEgJCgzeF4yLTEpXjIkLCBhbWIgc2lnbmUgJC0kLiIsICJFbCBmYWN0b3IgY29tw7ogZGUgJDE4JCwgJC0xMiQgaSAkMiQgw6lzICQyJCwgbm8gJDYkLiIsICIiXSwgImVyciI6IFsiR1JBVV9QUk9EVUNURV9NQUwiLCAiSUdVQUxUQVRfTk9UQUJMRV9TSUdORSIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiLCAiIl0sICJyZXMiOiBbIiQxOHheNC0xMnheMisyPTIoOXheNC02eF4yKzEpPTIoM3heMi0xKV4yJCJdfQ=="
  },
  {
   "id": "74e",
   "ex": 74,
   "ap": "e",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Factoritza al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$(2x+4)(x-2)$",
   "opcions": [
    "$2(x+2)^2$",
    "$2(x-2)(x+2)$",
    "$2x^2-8$",
    "$(x-2)(x+2)$"
   ],
   "pistes": [
    "Desenvolupa primer el producte: $(2x+4)(x-2)=2x^2-4x+4x-8=2x^2-8$.",
    "Treu el factor comú de $2x^2-8$ i mira què queda dins del parèntesi: és una diferència de quadrats, $a^2-b^2=(a-b)(a+b)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiBjb3AgZGVzZW52b2x1cGF0IGkgdHJldCBlbCBmYWN0b3IgJDIkLCBxdWVkYSAkeF4yLTQkLCBxdWUgw6lzIHVuYSBESUZFUsOITkNJQSBkZSBxdWFkcmF0cywgJCh4LTIpKHgrMikkLCBubyB1biBxdWFkcmF0IHBlcmZlY3RlLiIsICIiLCAiRWwgZGVzZW52b2x1cGFtZW50IMOpcyBjb3JyZWN0ZSwgcGVyw7IgbCdoYXMgZGVpeGF0IGRlc2Vudm9sdXBhdCBpIGVzIGRlbWFuYSBmYWN0b3JpdHphdDogJDJ4XjItOD0yKHheMi00KT0yKHgtMikoeCsyKSQuIiwgIlQnaGFzIGRlaXhhdCBlbCBmYWN0b3IgY29tw7ogJDIkOiBlbCBkZXNlbnZvbHVwYW1lbnQgZG9uYSAkMnheMi04PTIoeF4yLTQpJCwgbm8gJHheMi00JC4iXSwgImVyciI6IFsiRElGRVJFTkNJQV9RVUFEUkFUU19NQUwiLCAiIiwgIkZBQ1RPUklUWkFDSU9fREVTRkVUQSIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJCgyeCs0KSh4LTIpPTJ4XjItOD0yKHheMi00KT0yKHgtMikoeCsyKSQiXX0="
  },
  {
   "id": "74f",
   "ex": 74,
   "ap": "f",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Factoritza al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$(x-5)(x^2+5x)$",
   "opcions": [
    "$x(x-5)(x+5)$",
    "$x^3-25x$",
    "$x(x-5)^2$",
    "$(x-5)(x+5)$"
   ],
   "pistes": [
    "Desenvolupa primer el producte: $(x-5)(x^2+5x)=x^3+5x^2-5x^2-25x=x^3-25x$.",
    "Treu el factor comú de $x^3-25x$ i mira què queda dins del parèntesi: és una diferència de quadrats ($25=5^2$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgZGVzZW52b2x1cGFtZW50IMOpcyBjb3JyZWN0ZSwgcGVyw7IgbCdoYXMgZGVpeGF0IGRlc2Vudm9sdXBhdCBpIGVzIGRlbWFuYSBmYWN0b3JpdHphdDogJHheMy0yNXg9eCh4XjItMjUpPXgoeC01KSh4KzUpJC4iLCAiVW4gY29wIHRyZXQgZWwgZmFjdG9yICR4JCwgcXVlZGEgJHheMi0yNSQsIHF1ZSDDqXMgdW5hIERJRkVSw4hOQ0lBIGRlIHF1YWRyYXRzLCAkKHgtNSkoeCs1KSQsIG5vIHVuIHF1YWRyYXQgcGVyZmVjdGUuIiwgIlQnaGFzIGRlaXhhdCBlbCBmYWN0b3IgY29tw7ogJHgkOiBlbCBkZXNlbnZvbHVwYW1lbnQgZG9uYSAkeF4zLTI1eD14KHheMi0yNSkkLCBubyAkeF4yLTI1JC4iXSwgImVyciI6IFsiIiwgIkZBQ1RPUklUWkFDSU9fREVTRkVUQSIsICJESUZFUkVOQ0lBX1FVQURSQVRTX01BTCIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJCh4LTUpKHheMis1eCk9eF4zLTI1eD14KHheMi0yNSk9eCh4LTUpKHgrNSkkIl19"
  },
  {
   "id": "74g",
   "ex": 74,
   "ap": "g",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Factoritza al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$(-x-7)(x-7)$",
   "opcions": [
    "$(7-x)(7+x)$",
    "$(x-7)(x+7)$",
    "$x^2-49$",
    "$-(7-x)(7+x)$"
   ],
   "pistes": [
    "Treu primer el signe menys comú del primer factor: $-x-7=-(x+7)$.",
    "Queda $-(x+7)(x-7)$. Desenvolupa la suma per diferència, aplica-hi el signe menys i torna a factoritzar el que surti."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcHJpbWVyIGZhY3RvciDDqXMgJC14LTc9LSh4KzcpJCwgbm8gJHgtNyQ6IGVsIHNpZ25lIGdsb2JhbCBjYW52aWEgZWwgcmVzdWx0YXQgZmluYWwuIiwgIkVsIGRlc2Vudm9sdXBhbWVudCBjb3JyZWN0ZSBkb25hICQ0OS14XjIkLCBubyAkeF4yLTQ5JDogcmV2aXNhIGVsIHNpZ25lIGdsb2JhbCBlbiB0cmV1cmUgZWwgJC0xJCBjb23DuiBkZWwgcHJpbWVyIGZhY3Rvci4iLCAiSGkgc29icmEgdW4gc2lnbmUgbWVueXM6IGVuIHRyZXVyZSBlbCAkLTEkIGNvbcO6IGRlICQteC03JCBpIHJlb3JkZW5hci1obyBhICQoNy14KSg3K3gpJCwgYXF1ZXN0IG1lbnlzIGphIHMnaGEgZmV0IHNlcnZpci4gQ29tcHJvdmEtaG8gYW1iICR4PTAkOiBsJ2V4cHJlc3Npw7Mgb3JpZ2luYWwgdmFsICQrNDkkLiJdLCAiZXJyIjogWyIiLCAiSUdVQUxUQVRfTk9UQUJMRV9TSUdORSIsICJJR1VBTFRBVF9OT1RBQkxFX1NJR05FIiwgIkZBQ1RPUl9DT01VX1NJR05FIl0sICJyZXMiOiBbIiQoLXgtNykoeC03KT0tKHgrNykoeC03KT00OS14XjI9KDcteCkoNyt4KSQiXX0="
  },
  {
   "id": "74h",
   "ex": 74,
   "ap": "h",
   "bloc": "factor_comu",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Factoritza al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$(-x^2+5)(-x^2-5)$",
   "opcions": [
    "$x^4-25$",
    "$(x^2-5)^2$",
    "$(x^2-5)(x^2+5)$",
    "$(5-x^2)(5+x^2)$"
   ],
   "pistes": [
    "Treu el signe menys de cada factor: $-x^2+5=-(x^2-5)$ i $-x^2-5=-(x^2+5)$.",
    "Els dos signes menys es compensen. Mira si el que queda encara es pot factoritzar amb nombres enters."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyLDiXMgZWwgbWF0ZWl4IHBvbGlub21pLCBwZXLDsiBkZXNlbnZvbHVwYXQsIGkgZXMgZGVtYW5hIGZhY3Rvcml0emF0LiBBIG3DqXMsICR4XjQtMjUkIMOpcyB1bmEgZGlmZXLDqG5jaWEgZGUgcXVhZHJhdHM6ICQoeF4yKV4yLTVeMiQuIiwgIkVscyBkb3MgZmFjdG9ycyBubyBzw7NuIGlndWFsczogdW4gw6lzICR4XjItNSQgaSBsJ2FsdHJlICR4XjIrNSQuIE5vbcOpcyBzZXJpYSB1biBxdWFkcmF0IHNpIGZvc3NpbiBlbCBtYXRlaXguIiwgIiIsICJBaXjDsiB2YWwgJDI1LXheNCQsIGkgbCdleHByZXNzacOzIGRlIHBhcnRpZGEgdmFsICR4XjQtMjUkOiBjb21wcm92YS1obyBhbWIgJHg9MCQsIHF1ZSBkb25hICQ1XFxjZG90KC01KT0tMjUkLiBDYWRhIGZhY3RvciBwb3J0YSBlbCBzZXUgc2lnbmUgbWVueXMsICQteF4yKzU9LSh4XjItNSkkIGkgJC14XjItNT0tKHheMis1KSQsIGkgZWxzIGRvcyBlcyBjb21wZW5zZW4uIl0sICJlcnIiOiBbIkZBQ1RPUklUWkFDSU9fREVTRkVUQSIsICJESUZFUkVOQ0lBX1FVQURSQVRTX01BTCIsICIiLCAiRkFDVE9SX0NPTVVfU0lHTkUiXSwgInJlcyI6IFsiJCgteF4yKzUpKC14XjItNSk9XFxiaWcoLSh4XjItNSlcXGJpZylcXGJpZygtKHheMis1KVxcYmlnKT0oeF4yLTUpKHheMis1KSQiLCAiJHheMi01JCBubyDDqXMgdW5hIGRpZmVyw6huY2lhIGRlIHF1YWRyYXRzIGFtYiBlbnRlcnMgKCQ1JCBubyDDqXMgdW4gcXVhZHJhdCBwZXJmZWN0ZSkgaSAkeF4yKzUkIMOpcyB1bmEgc3VtYTogamEgbm8gZXMgcG90IGZhY3Rvcml0emFyIG3DqXMuIERlc2Vudm9sdXBhdCwgc2VyaWEgJHheNC0yNSQuIl19"
  }
 ]
};
