/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 5,
 "titol": "Full 5 — Equacions i sistemes",
 "subtitol": "Equacions de primer i segon grau, sistemes d'equacions lineals i problemes que es resolen plantejant-los.",
 "blocs": [
  {
   "id": "primer_grau",
   "titol": "Equacions de primer grau",
   "descripcio": "Equacions amb parèntesis i amb un o diversos denominadors.",
   "items": [
    "75a",
    "75b",
    "75c",
    "75d",
    "75e",
    "75f",
    "76a",
    "76b",
    "76c",
    "76d",
    "76e",
    "76f",
    "77a",
    "77b",
    "77c",
    "77d",
    "78a",
    "78b",
    "78c",
    "78d",
    "78e",
    "78f",
    "79a",
    "79b",
    "79c",
    "79d",
    "79e"
   ]
  },
  {
   "id": "formula_general",
   "titol": "Segon grau: fórmula i discriminant",
   "descripcio": "Fórmula general i nombre de solucions segons el discriminant.",
   "items": [
    "80a",
    "80b",
    "80c",
    "80d",
    "80e",
    "80f",
    "80g",
    "81a",
    "81b",
    "81c",
    "81d",
    "81e",
    "81f",
    "81g"
   ]
  },
  {
   "id": "factoritzacio",
   "titol": "Segon grau: factor comú i factorització",
   "descripcio": "Equacions incompletes, ja factoritzades i que cal reordenar.",
   "items": [
    "82a",
    "82b",
    "82c",
    "82d",
    "82e",
    "82f",
    "82g",
    "82h",
    "82i",
    "83a",
    "83b",
    "83c",
    "83d",
    "83e",
    "83f",
    "84a",
    "84b",
    "84c",
    "84d",
    "84e",
    "84f",
    "84g"
   ]
  },
  {
   "id": "sistemes",
   "titol": "Sistemes d'equacions",
   "descripcio": "Substitució, igualació i reducció, amb denominadors i parèntesis.",
   "items": [
    "85a",
    "85b",
    "85c",
    "85d",
    "85e",
    "85f",
    "85g",
    "85h",
    "86a",
    "86b",
    "86c",
    "86d",
    "86e",
    "86f",
    "87",
    "88a",
    "88b",
    "88c",
    "88d",
    "88e",
    "88f",
    "89a",
    "89b",
    "89c",
    "89d"
   ]
  },
  {
   "id": "problemes",
   "titol": "Problemes amb equacions i sistemes",
   "descripcio": "Problemes d'edats, nombres, preus i geometria que es plantegen amb una equació o un sistema.",
   "items": [
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100"
   ]
  }
 ],
 "errors": {
  "AGRUPACIO_TERMES_MAL": "Els termes amb incògnita no s'han agrupat bé: torna a sumar-ne els coeficients un per un, amb el seu signe.",
  "AILLAMENT_INCOMPLET": "Has parat abans d'acabar d'aïllar la incògnita: encara queda una operació per desfer. Comprova-ho substituint el teu valor a l'equació original.",
  "ARITMETICA_PAS_INTERMEDI": "El plantejament és bo, però hi ha un error de càlcul en un dels passos del mig. Refes l'operació pas a pas i comprova el resultat substituint-lo a l'enunciat original.",
  "ARREL_OBLIDADA": "T'has quedat amb el quadrat (o el cub) de la incògnita. De $x^2=k$ encara falta l'arrel per arribar a $x$: comprova sempre quina de les dues quantitats et demanen.",
  "DENOMINADOR_NO_ELIMINAT": "Has operat amb la fracció sense treure-li el denominador. Multiplica els dos membres pel denominador PRIMER, i només després aïlla la incògnita.",
  "DESPLACAMENT_INDEX": "Revisa a partir de quin valor de $n$ comences a substituir, o quin exponent li correspon: t'has desplaçat una posició.",
  "DISTRIBUCIO_INCOMPLETA": "En multiplicar un polinomi per un altre, cada terme del primer s'ha de multiplicar per TOTS els termes del segon, no només per un.",
  "DIVISIO_QUOCIENT_RESIDU_CANVIATS": "Has intercanviat el quocient i el residu: el quocient és el polinomi que queda a la fila de baix (llevat de l'últim terme), i el residu és l'últim número, una constant.",
  "ENTER_MULTIPLICA_DENOMINADOR": "En multiplicar un enter per una fracció, l'enter multiplica NOMÉS el numerador; el denominador no canvia.",
  "EQUACIO_NO_SIMPLIFICADA": "Simplifica cada equació per separat (parèntesis, termes semblants, denominadors) ABANS de combinar-les: si no, el sistema que resols no és el de l'enunciat.",
  "EXPONENT_MULTIPLICAT": "L'exponent que dona l'enunciat s'ha de fer servir tal qual, no multiplicat per un altre nombre.",
  "EXPONENT_SENSE_DESPLACAR": "T'has deixat pel camí una part de l'exponent: si l'enunciat diu $n+2$ (o similar), cal fer servir aquest exponent complet, no només la $n$.",
  "FACTOR_COMU_INCOMPLET": "No has tret tot el factor comú possible: revisa si encara hi ha algun nombre o alguna $x$ que es repeteixi a tots els termes.",
  "FACTOR_COMU_MAL_DIVIDIT": "En treure factor comú, cada terme s'ha de dividir pel factor comú: algun terme de dins del parèntesi no s'ha dividit correctament.",
  "FACTOR_OBLIDAT": "T'has deixat pel camí un dels factors en combinar els exponents.",
  "GRAUS_MAL_AGRUPATS": "Només es poden sumar o restar termes del MATEIX grau: $x^3$ amb $x^3$, $x^2$ amb $x^2$... Revisa que has agrupat els termes correctes.",
  "GRAU_PRODUCTE_MAL": "En multiplicar potències de $x$, els exponents se SUMEN: $x^a\\cdot x^b=x^{a+b}$. El grau del producte és la suma dels graus dels factors.",
  "IGUALTAT_NOTABLE_SIGNE": "Revisa el signe del terme del mig: $(a-b)^2=a^2-2ab+b^2$, amb el terme del mig NEGATIU, a diferència de $(a+b)^2$.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "JERARQUIA": "Primer les multiplicacions i divisions; després, les sumes i restes.",
  "MENYS_PARENTESI": "El signe $-$ davant d'un parèntesi canvia el signe de TOTS els termes de dins, no només del primer.",
  "NUMERADORS_SENSE_AJUSTAR": "Has posat el denominador comú correcte, però has copiat els numeradors tal qual. Cada numerador s'ha de multiplicar pel mateix nombre que el seu denominador.",
  "ORDRE_ARREL_DIVISIO": "Has fet l'arrel abans de dividir. De $ax^2=k$ cal aïllar primer $x^2$ dividint per $a$, i fer l'arrel al final.",
  "ORDRE_DIVISIONS": "El que hi ha entre claudàtors s'ha de resoldre primer: no es poden restar tots els exponents seguits com si no hi hagués claudàtor.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "ORDRE_RESTA": "Has restat en l'ordre equivocat: revisa quin terme ha d'anar primer.",
  "PARENTESI_NO_DISTRIBUIT": "No has canviat cap signe en treure el parèntesi. Restar un parèntesi vol dir restar-ne tots els termes.",
  "PARITAT_EXPONENT": "Revisa la paritat de l'exponent: amb exponent parell, una base negativa dóna resultat positiu; amb exponent senar, el resultat es queda negatiu.",
  "POTENCIA_DE_SUMA": "Aquí els dos nombres es MULTIPLIQUEN dins del parèntesi, no se sumen: la potència és d'un producte, $(a\\cdot b)^n$, no d'una suma, $(a+b)^n$.",
  "PRODUCTE_CREUAT": "Per multiplicar fraccions es fa numerador per numerador i denominador per denominador. Creuar-los és el que es fa per COMPARAR-les, no per multiplicar-les.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "QUADRAT_INCOMPLET": "Per reconèixer un quadrat perfecte calen els TRES termes: el quadrat del primer, el doble producte, i el quadrat del segon. Revisa que hi són tots.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_PRODUCTE": "Revisa la regla dels signes del producte: signes diferents donen resultat negatiu.",
  "SIGNE_QUOCIENT": "Revisa la regla dels signes del quocient: signes diferents donen resultat negatiu.",
  "SIGNE_TERME_INDEPENDENT": "Revisa el signe del terme independent (el que no porta $x$): és fàcil perdre'l en sumar o restar.",
  "SIMPLIFICACIO_INCOMPLETA": "Encara es pot simplificar més: busca el m.c.d. del numerador i el denominador i divideix-los pel m.c.d. d'un sol cop.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "75a",
   "ex": 75,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$6(x+11) = 40 + 6(x+2)$",
   "opcions": [
    "$x=0$",
    "$x=\\dfrac{26}{33}$",
    "Sense solució",
    "$x=-\\dfrac{26}{3}$"
   ],
   "pistes": [
    "Distribueix el $6$ a dins de cada parèntesi abans de res.",
    "Un cop distribuïts els parèntesis, agrupa els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkeD0wJCBubyBjb21wbGVpeCBsJ2VxdWFjacOzIG9yaWdpbmFsOiBzdWJzdGl0dWVpeC1sbyBpIGNvbXByb3ZhIHF1ZSBlbHMgZG9zIGNvc3RhdHMgbm8gY29pbmNpZGVpeGVuLiBFbiByZWFsaXRhdCBlbHMgdGVybWVzIGFtYiAkeCQgZXMgY2FuY2VswrdsZW4gaSBxdWVkYSB1bmEgaWd1YWx0YXQgZmFsc2E6IG5vIGhpIGhhIHNvbHVjacOzLiIsICJIYXMgb3BlcmF0IGVscyBuw7ptZXJvcyBhYmFucyBkZSBkaXN0cmlidWlyIGNvcnJlY3RhbWVudCBlbHMgcGFyw6hudGVzaXMuIERlc2Vudm9sdXBhIHByaW1lciAkNih4KzExKSQgaSAkNih4KzIpJCBwZXIgc2VwYXJhdDsgdmV1csOgcyBxdWUgZWxzIHRlcm1lcyBhbWIgJHgkIHMnYW51bMK3bGVuIGkgcXVlZGEgdW5hIGlndWFsdGF0IGZhbHNhLiIsICIiLCAiU2kgdG90IGp1c3QgY2Fudmllc3NpcyBkZSBiYW5kYSBzZW5zZSBkaXN0cmlidWlyIGLDqSBlbCBwYXLDqG50ZXNpIGV0IHNvcnRpcmlhIHVuIHZhbG9yLCBwZXLDsiByZXZpc2E6IGVuIGRlc2Vudm9sdXBhciBlbHMgZG9zIHBhcsOobnRlc2lzLCBlbHMgdGVybWVzIGFtYiAkeCQgZXMgY2FuY2VswrdsZW4gaSBxdWVkYSB1bmEgaWd1YWx0YXQgbnVtw6hyaWNhIGZhbHNhICgkNjZcXG5lNTIkKSwgYWl4w60gcXVlIGwnZXF1YWNpw7Mgbm8gdMOpIHNvbHVjacOzLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkpFUkFSUVVJQSIsICIiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVQiXSwgInJlcyI6IFsiJDYoeCsxMSk9NDArNih4KzIpIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNngrNjY9NDArNngrMTIkIiwgIiQ2eCs2Nj02eCs1MiQ6IGVscyB0ZXJtZXMgYW1iICR4JCBlcyBjYW5jZWzCt2xlbiBpIHF1ZWRhICQ2Nj01MiQsIHVuYSBpZ3VhbHRhdCBudW3DqHJpY2EgZmFsc2EuIiwgIkNvbSBxdWUgbm8gaGkgaGEgY2FwIHZhbG9yIGRlICR4JCBxdWUgZmFjaSBjZXJ0YSBhcXVlc3RhIGlndWFsdGF0LCBsJ2VxdWFjacOzIG5vIHTDqSBzb2x1Y2nDsy4iXX0="
  },
  {
   "id": "75b",
   "ex": 75,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$2(x-17) = x - 3(12-2x)$",
   "opcions": [
    "$x=-\\dfrac{2}{5}$",
    "$x=\\dfrac{2}{5}$",
    "$x=14$",
    "$x=\\dfrac{2}{11}$"
   ],
   "pistes": [
    "Distribueix els dos parèntesis: el de l'esquerra ($2$) i el de la dreta, on el $-3$ afecta els dos termes de dins.",
    "Un cop sense parèntesis, agrupa els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCByZXN1bHRhdCBmaW5hbCB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGVsIHBhcyBlbiBxdcOoIGFncnVwZXMgZWxzIHRlcm1lcyBpbmRlcGVuZGVudHMgYSB1biBjb3N0YXQuIiwgIiIsICJTJ2hhIHBlcmR1dCBhbGd1biB0ZXJtZSBlbiBhZ3J1cGFyOyByZXZpc2EgcXVlIGhhcyBwYXNzYXQgVE9UUyBlbHMgdGVybWVzIGFtYiAkeCQgYSB1biBjb3N0YXQgaSB0b3RzIGVscyBuw7ptZXJvcyBhIGwnYWx0cmUuIiwgIkVuIGRpc3RyaWJ1aXIgJC0zKDEyLTJ4KSQgZWwgc2lnbmUgJC0kIGhhIGQnYWZlY3RhciBlbHMgRE9TIHRlcm1lcyBkZSBkaW5zOiAkLTNcXGNkb3QxMj0tMzYkIGkgJC0zXFxjZG90KC0yeCk9KzZ4JC4iXSwgImVyciI6IFsiU0lHTkVfRklOQUwiLCAiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiTUVOWVNfUEFSRU5URVNJIl0sICJyZXMiOiBbIiQyKHgtMTcpPXgtMygxMi0yeCkgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAyeC0zND14LTM2KzZ4JCIsICIkMngtMzQ9N3gtMzYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAtMzQrMzY9N3gtMnggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAyPTV4JCIsICIkeD1cXGRmcmFjezJ9ezV9JCJdfQ=="
  },
  {
   "id": "75c",
   "ex": 75,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$x - 5(x-2) = 6$",
   "opcions": [
    "$x=1$",
    "$x=-\\dfrac{1}{4}$",
    "$x=-4$",
    "$x=2$"
   ],
   "pistes": [
    "Distribueix $-5(x-2)$: el signe $-$ afecta els dos termes de dins.",
    "Agrupa els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSBlcXVhY2nDsyBubyB0w6kgZGVub21pbmFkb3JzOiBubyBjYWwgY3JldWFyIHJlcywgbm9tw6lzIGRpc3RyaWJ1aXIgZWwgcGFyw6hudGVzaSBpIGHDr2xsYXIgJHgkLiIsICJFbCAkLTUkIGhhIGQnYWZlY3RhciBlbHMgRE9TIHRlcm1lcyBkZSBkaW5zIGRlbCBwYXLDqG50ZXNpOiAkLTVcXGNkb3QgeD0tNXgkIGkgJC01XFxjZG90KC0yKT0rMTAkLCBubyBub23DqXMgZWwgcHJpbWVyLiIsICJSZXZpc2EgZWwgc2lnbmUgZGVsICQxMCQgcXVlIHN1cnQgZGUgZGlzdHJpYnVpciAkLTUoeC0yKSQ6IGNvbSBxdWUgJC01XFxjZG90KC0yKT0rMTAkLCBlbCB0ZXJtZSBpbmRlcGVuZGVudCDDqXMgcG9zaXRpdS4iXSwgImVyciI6IFsiIiwgIlBST0RVQ1RFX0NSRVVBVCIsICJNRU5ZU19QQVJFTlRFU0kiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJHgtNSh4LTIpPTYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4LTV4KzEwPTYkIiwgIiQtNHg9Ni0xMCBcXDtcXExvbmdyaWdodGFycm93XFw7IC00eD0tNCQiLCAiJHg9MSQiXX0="
  },
  {
   "id": "75d",
   "ex": 75,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$120 = 2x - (15-7x)$",
   "opcions": [
    "$x=-15$",
    "$x=\\dfrac{5}{3}$",
    "$x=15$",
    "$x=\\dfrac{35}{3}$"
   ],
   "pistes": [
    "El $-$ davant del parèntesi $(15-7x)$ afecta els dos termes de dins.",
    "Un cop distribuït, agrupa tots els termes amb $x$ a un costat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmU6ICQtKDE1LTd4KT0tMTUrN3gkLCBlbCAkLSQgY2FudmlhIGVsIHNpZ25lIGRlbHMgRE9TIHRlcm1lcyBkZSBkaW5zLCBubyBub23DqXMgZGVsIHByaW1lci4iLCAiSGFzIGFycmliYXQgYSAkMTM1PTl4JCBwZXLDsiBlbmNhcmEgbm8gaGFzIGRpdmlkaXQgZWxzIGRvcyBjb3N0YXRzIHBlciAkOSQ6IGZhbHRhIGwnw7psdGltIHBhcy4iLCAiIiwgIlMnaGEgcGVyZHV0IHVuIHRlcm1lIGVuIGFncnVwYXI7IHJldmlzYSB1biBwZXIgdW4gZWxzIG7Dum1lcm9zIHF1ZSBwYXNzZW4gYSBsJ2FsdHJlIGNvc3RhdC4iXSwgImVyciI6IFsiTUVOWVNfUEFSRU5URVNJIiwgIkFJTExBTUVOVF9JTkNPTVBMRVQiLCAiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiJDEyMD0yeC0oMTUtN3gpIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTIwPTJ4LTE1Kzd4JCIsICIkMTIwKzE1PTl4IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTM1PTl4JCIsICIkeD0xNSQiXX0="
  },
  {
   "id": "75e",
   "ex": 75,
   "ap": "e",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$5(x+4) = 7(x-2)$",
   "opcions": [
    "$x=\\dfrac{17}{6}$",
    "$x=17$",
    "$x=-17$",
    "$x=3$"
   ],
   "pistes": [
    "Distribueix els dos parèntesis per separat.",
    "Agrupa els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgYWdydXBhdCBtYWxhbWVudCBlbHMgdGVybWVzIGFtYiAkeCQgYW1iIGVscyB0ZXJtZXMgaW5kZXBlbmRlbnRzOyByZXZpc2EgcXVpbnMgdmFuIGp1bnRzIGEgY2FkYSBjb3N0YXQuIiwgIiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGEgcXVpbiBjb3N0YXQgaGFzIHBhc3NhdCBlbHMgdGVybWVzIGFtYiAkeCQgaSBxdWluIHNpZ25lIGVscyBjb3JyZXNwb24uIiwgIlJldmlzYSBxdWUgaGFzIGRpc3RyaWJ1w690IGLDqSBlbHMgRE9TIHBhcsOobnRlc2lzIGFiYW5zIGQnYWdydXBhcjogJDUoeCs0KT01eCsyMCQgaSAkNyh4LTIpPTd4LTE0JC4iXSwgImVyciI6IFsiR1JBVVNfTUFMX0FHUlVQQVRTIiwgIiIsICJTSUdORV9GSU5BTCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIiQ1KHgrNCk9Nyh4LTIpIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNXgrMjA9N3gtMTQkIiwgIiQyMCsxND03eC01eCBcXDtcXExvbmdyaWdodGFycm93XFw7IDM0PTJ4JCIsICIkeD0xNyQiXX0="
  },
  {
   "id": "75f",
   "ex": 75,
   "ap": "f",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol.",
   "enunciat": "$3(x+7) - 6 = 2(x+8)$",
   "opcions": [
    "$x=\\dfrac{37}{5}$",
    "$x=-1$",
    "$x=1$",
    "$x=31$"
   ],
   "pistes": [
    "Distribueix el parèntesi de l'esquerra ($3$) i el de la dreta ($2$).",
    "El $-6$ no forma part de cap parèntesi: es queda tal qual en agrupar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJTJ2hhIHBlcmR1dCBhbGd1biB0ZXJtZSBpbmRlcGVuZGVudCBwZWwgY2Ftw607IHJldmlzYSdscyB0b3RzIHVuIHBlciB1biBhYmFucyBkJ2HDr2xsYXIgJHgkLiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdDogdG9ybmEgYSByZXZpc2FyIGVsIHBhcyBmaW5hbCwgJDN4LTJ4PTE2LTE1JC4iLCAiIiwgIlJldmlzYSBlbCBzaWduZSBkZWwgJC02JDogbm8gZm9ybWEgcGFydCBkZWwgcGFyw6hudGVzaSwgamEgdmUgcmVzdGFudCBkaXJlY3RhbWVudCBpIHMnaGEgZGUgbWFudGVuaXIgdGFsIHF1YWwgZW4gYWdydXBhci4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJTSUdORV9GSU5BTCIsICIiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiXSwgInJlcyI6IFsiJDMoeCs3KS02PTIoeCs4KSBcXDtcXExvbmdyaWdodGFycm93XFw7IDN4KzIxLTY9MngrMTYkIiwgIiQzeCsxNT0yeCsxNiBcXDtcXExvbmdyaWdodGFycm93XFw7IDN4LTJ4PTE2LTE1JCIsICIkeD0xJCJdfQ=="
  },
  {
   "id": "76a",
   "ex": 76,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{x}{5} = 3$",
   "opcions": [
    "$x=3$",
    "$x=15$",
    "$x=-15$",
    "$x=16$"
   ],
   "pistes": [
    "Multiplica els dos costats pel denominador per fer-lo desaparèixer.",
    "Aïlla $x$ dividint pel nombre que l'acompanya."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZWwgbm9tYnJlIHF1ZSBhY29tcGFueWEgbGEgJHgkLCBwZXLDsiB0J2hhcyBzYWx0YXQgZWwgZGVub21pbmFkb3I6IGRlICRcXGRmcmFje2F4fXtifT1jJCBzdXJ0IHByaW1lciAkYXg9YlxcY2RvdCBjJCwgaSBub23DqXMgbGxhdm9ycyBlcyBkaXZpZGVpeCBwZXIgJGEkLiIsICIiLCAiRW4gcGFzc2FyIGVsIGRlbm9taW5hZG9yIGEgbCdhbHRyZSBjb3N0YXQsIG11bHRpcGxpY2EgVE9UIGVsIG1lbWJyZSBkZSBsYSBkcmV0YSwgbm8gbm9tw6lzIHVuYSBwYXJ0LiIsICJSZXZpc2EgZWxzIHNpZ25lczogc2kgZWwgbnVtZXJhZG9yIGRlbCBjb2VmaWNpZW50IGRlICR4JCDDqXMgbmVnYXRpdSwgZWwgcmVzdWx0YXQgZmluYWwgbidoZXJldGEgZWwgc2lnbmUgc2Vnb25zIGxhIHJlZ2xhIGRlbHMgc2lnbmVzIGRlbCBxdW9jaWVudC4iXSwgImVyciI6IFsiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiLCAiIiwgIkVOVEVSX01VTFRJUExJQ0FfREVOT01JTkFET1IiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJFxcZGZyYWN7eH17NX09MyBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9MTUkIl19"
  },
  {
   "id": "76b",
   "ex": 76,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{x}{2} = -21$",
   "opcions": [
    "$x=-42$",
    "$x=-41$",
    "$x=-21$",
    "$x=42$"
   ],
   "pistes": [
    "Multiplica els dos costats pel denominador per fer-lo desaparèixer.",
    "Aïlla $x$ dividint pel nombre que l'acompanya."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVscyBzaWduZXM6IHNpIGVsIG51bWVyYWRvciBkZWwgY29lZmljaWVudCBkZSAkeCQgw6lzIG5lZ2F0aXUsIGVsIHJlc3VsdGF0IGZpbmFsIG4naGVyZXRhIGVsIHNpZ25lIHNlZ29ucyBsYSByZWdsYSBkZWxzIHNpZ25lcyBkZWwgcXVvY2llbnQuIiwgIkhhcyBkaXZpZGl0IHBlbCBub21icmUgcXVlIGFjb21wYW55YSBsYSAkeCQsIHBlcsOyIHQnaGFzIHNhbHRhdCBlbCBkZW5vbWluYWRvcjogZGUgJFxcZGZyYWN7YXh9e2J9PWMkIHN1cnQgcHJpbWVyICRheD1iXFxjZG90IGMkLCBpIG5vbcOpcyBsbGF2b3JzIGVzIGRpdmlkZWl4IHBlciAkYSQuIiwgIkVuIHBhc3NhciBlbCBkZW5vbWluYWRvciBhIGwnYWx0cmUgY29zdGF0LCBtdWx0aXBsaWNhIFRPVCBlbCBtZW1icmUgZGUgbGEgZHJldGEsIG5vIG5vbcOpcyB1bmEgcGFydC4iXSwgImVyciI6IFsiIiwgIlNJR05FX0ZJTkFMIiwgIkRFTk9NSU5BRE9SX05PX0VMSU1JTkFUIiwgIkVOVEVSX01VTFRJUExJQ0FfREVOT01JTkFET1IiXSwgInJlcyI6IFsiJFxcZGZyYWN7eH17Mn09LTIxIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0tNDIkIl19"
  },
  {
   "id": "76c",
   "ex": 76,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{-2x}{3} = 4$",
   "opcions": [
    "$x=4$",
    "$x=6$",
    "$x=-6$",
    "$x=-2$"
   ],
   "pistes": [
    "Multiplica els dos costats pel denominador per fer-lo desaparèixer.",
    "Aïlla $x$ dividint pel nombre que l'acompanya."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiBwYXNzYXIgZWwgZGVub21pbmFkb3IgYSBsJ2FsdHJlIGNvc3RhdCwgbXVsdGlwbGljYSBUT1QgZWwgbWVtYnJlIGRlIGxhIGRyZXRhLCBubyBub23DqXMgdW5hIHBhcnQuIiwgIlJldmlzYSBlbHMgc2lnbmVzOiBzaSBlbCBudW1lcmFkb3IgZGVsIGNvZWZpY2llbnQgZGUgJHgkIMOpcyBuZWdhdGl1LCBlbCByZXN1bHRhdCBmaW5hbCBuJ2hlcmV0YSBlbCBzaWduZSBzZWdvbnMgbGEgcmVnbGEgZGVscyBzaWduZXMgZGVsIHF1b2NpZW50LiIsICIiLCAiSGFzIGRpdmlkaXQgcGVsIG5vbWJyZSBxdWUgYWNvbXBhbnlhIGxhICR4JCwgcGVyw7IgdCdoYXMgc2FsdGF0IGVsIGRlbm9taW5hZG9yOiBkZSAkXFxkZnJhY3theH17Yn09YyQgc3VydCBwcmltZXIgJGF4PWJcXGNkb3QgYyQsIGkgbm9tw6lzIGxsYXZvcnMgZXMgZGl2aWRlaXggcGVyICRhJC4iXSwgImVyciI6IFsiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiIsICJTSUdORV9GSU5BTCIsICIiLCAiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiXSwgInJlcyI6IFsiJFxcZGZyYWN7LTJ4fXszfT00IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgLTJ4PTEyJCIsICIkeD0tNiQiXX0="
  },
  {
   "id": "76d",
   "ex": 76,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{7x}{4} = 28$",
   "opcions": [
    "$x=4$",
    "$x=-16$",
    "$x=28$",
    "$x=16$"
   ],
   "pistes": [
    "Multiplica els dos costats pel denominador per fer-lo desaparèixer.",
    "Aïlla $x$ dividint pel nombre que l'acompanya."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZWwgbm9tYnJlIHF1ZSBhY29tcGFueWEgbGEgJHgkLCBwZXLDsiB0J2hhcyBzYWx0YXQgZWwgZGVub21pbmFkb3I6IGRlICRcXGRmcmFje2F4fXtifT1jJCBzdXJ0IHByaW1lciAkYXg9YlxcY2RvdCBjJCwgaSBub23DqXMgbGxhdm9ycyBlcyBkaXZpZGVpeCBwZXIgJGEkLiIsICJSZXZpc2EgZWxzIHNpZ25lczogc2kgZWwgbnVtZXJhZG9yIGRlbCBjb2VmaWNpZW50IGRlICR4JCDDqXMgbmVnYXRpdSwgZWwgcmVzdWx0YXQgZmluYWwgbidoZXJldGEgZWwgc2lnbmUgc2Vnb25zIGxhIHJlZ2xhIGRlbHMgc2lnbmVzIGRlbCBxdW9jaWVudC4iLCAiRW4gcGFzc2FyIGVsIGRlbm9taW5hZG9yIGEgbCdhbHRyZSBjb3N0YXQsIG11bHRpcGxpY2EgVE9UIGVsIG1lbWJyZSBkZSBsYSBkcmV0YSwgbm8gbm9tw6lzIHVuYSBwYXJ0LiIsICIiXSwgImVyciI6IFsiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiLCAiU0lHTkVfRklOQUwiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiIsICIiXSwgInJlcyI6IFsiJFxcZGZyYWN7N3h9ezR9PTI4IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgN3g9MTEyJCIsICIkeD0xNiQiXX0="
  },
  {
   "id": "76e",
   "ex": 76,
   "ap": "e",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$3x = -5$",
   "opcions": [
    "$x=-5$",
    "$x=-\\dfrac{5}{3}$",
    "$x=-\\dfrac{2}{3}$",
    "$x=\\dfrac{5}{3}$"
   ],
   "pistes": [
    "Aquí no hi ha cap denominador: la $x$ ja només porta un coeficient al davant.",
    "Aïlla $x$ dividint els dos costats pel nombre que l'acompanya."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZWwgbm9tYnJlIHF1ZSBhY29tcGFueWEgbGEgJHgkLCBwZXLDsiB0J2hhcyBzYWx0YXQgZWwgZGVub21pbmFkb3I6IGRlICRcXGRmcmFje2F4fXtifT1jJCBzdXJ0IHByaW1lciAkYXg9YlxcY2RvdCBjJCwgaSBub23DqXMgbGxhdm9ycyBlcyBkaXZpZGVpeCBwZXIgJGEkLiIsICIiLCAiUmV2aXNhIGVscyBzaWduZXM6IHNpIGVsIG51bWVyYWRvciBkZWwgY29lZmljaWVudCBkZSAkeCQgw6lzIG5lZ2F0aXUsIGVsIHJlc3VsdGF0IGZpbmFsIG4naGVyZXRhIGVsIHNpZ25lIHNlZ29ucyBsYSByZWdsYSBkZWxzIHNpZ25lcyBkZWwgcXVvY2llbnQuIiwgIkVuIHBhc3NhciBlbCBkZW5vbWluYWRvciBhIGwnYWx0cmUgY29zdGF0LCBtdWx0aXBsaWNhIFRPVCBlbCBtZW1icmUgZGUgbGEgZHJldGEsIG5vIG5vbcOpcyB1bmEgcGFydC4iXSwgImVyciI6IFsiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIkVOVEVSX01VTFRJUExJQ0FfREVOT01JTkFET1IiXSwgInJlcyI6IFsiJDN4PS01IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0tXFxkZnJhY3s1fXszfSQiXX0="
  },
  {
   "id": "76f",
   "ex": 76,
   "ap": "f",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol aquestes equacions.",
   "enunciat": "$\\dfrac{-3x}{2} = -25$",
   "opcions": [
    "$x=\\dfrac{25}{3}$",
    "$x=-25$",
    "$x=\\dfrac{50}{3}$",
    "$x=-\\dfrac{50}{3}$"
   ],
   "pistes": [
    "Multiplica els dos costats pel denominador per fer-lo desaparèixer.",
    "Aïlla $x$ dividint pel nombre que l'acompanya."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZWwgbm9tYnJlIHF1ZSBhY29tcGFueWEgbGEgJHgkLCBwZXLDsiB0J2hhcyBzYWx0YXQgZWwgZGVub21pbmFkb3I6IGRlICRcXGRmcmFje2F4fXtifT1jJCBzdXJ0IHByaW1lciAkYXg9YlxcY2RvdCBjJCwgaSBub23DqXMgbGxhdm9ycyBlcyBkaXZpZGVpeCBwZXIgJGEkLiIsICJFbiBwYXNzYXIgZWwgZGVub21pbmFkb3IgYSBsJ2FsdHJlIGNvc3RhdCwgbXVsdGlwbGljYSBUT1QgZWwgbWVtYnJlIGRlIGxhIGRyZXRhLCBubyBub23DqXMgdW5hIHBhcnQuIiwgIiIsICJSZXZpc2EgZWxzIHNpZ25lczogc2kgZWwgbnVtZXJhZG9yIGRlbCBjb2VmaWNpZW50IGRlICR4JCDDqXMgbmVnYXRpdSwgZWwgcmVzdWx0YXQgZmluYWwgbidoZXJldGEgZWwgc2lnbmUgc2Vnb25zIGxhIHJlZ2xhIGRlbHMgc2lnbmVzIGRlbCBxdW9jaWVudC4iXSwgImVyciI6IFsiREVOT01JTkFET1JfTk9fRUxJTUlOQVQiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJFxcZGZyYWN7LTN4fXsyfT0tMjUgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAtM3g9LTUwJCIsICIkeD1cXGRmcmFjezUwfXszfSQiXX0="
  },
  {
   "id": "77a",
   "ex": 77,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$\\dfrac{x-2}{5} = 1$",
   "opcions": [
    "$x=3$",
    "$x=\\dfrac{1}{5}$",
    "$x=7$",
    "$x=-3$"
   ],
   "pistes": [
    "Multiplica els dos costats per $5$ per eliminar el denominador."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJQZXIgdHJldXJlIGVsIGRlbm9taW5hZG9yIGNhbCBtdWx0aXBsaWNhciBlbHMgRE9TIGNvc3RhdHMgcGVyICQ1JDogJHgtMj01JCwgbm8gZGl2aWRpciBlbCAkMiQgcGVyICQ1JC4iLCAiTm8gY2FsIGludmVydGlyIHJlczogbXVsdGlwbGljYSBlbHMgZG9zIGNvc3RhdHMgcGVyICQ1JCBwZXIgZWxpbWluYXIgZWwgZGVub21pbmFkb3IgaSBkZXNwcsOpcyBhw69sbGEgJHgkLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGVuIGHDr2xsYXIgJHgkOiBkZSAkeC0yPTUkIGVzIHBhc3NhIGVsICQtMiQgc3VtYW50IGEgbCdhbHRyZSBjb3N0YXQuIl0sICJlcnIiOiBbIlBST0RVQ1RFX0NSRVVBVCIsICJJTlZFUlRJREEiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIiRcXGRmcmFje3gtMn17NX09MSBcXDtcXExvbmdyaWdodGFycm93XFw7IHgtMj01JCIsICIkeD03JCJdfQ=="
  },
  {
   "id": "77b",
   "ex": 77,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$\\dfrac{3x+15}{6} = -7$",
   "opcions": [
    "$x=-9$",
    "$x=19$",
    "$x=-19$",
    "$x=-3$"
   ],
   "pistes": [
    "Multiplica els dos costats per $6$ per eliminar el denominador.",
    "Aïlla $x$: primer passa el $15$ a l'altre costat, després divideix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiBwYXNzYXIgZWwgJDE1JCBhIGwnYWx0cmUgY29zdGF0LCByZXZpc2EgZWwgc2lnbmU6ICQzeD0tNDItMTUkLiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGVsIHBhcyBmaW5hbCwgJDN4PS01NyQgZG9uYSB1bmEgJHgkIG5lZ2F0aXZhLiIsICIiLCAiUXVhbiBtdWx0aXBsaXF1ZXMgZWxzIGRvcyBjb3N0YXRzIHBlciAkNiQsIGVsICQtNyQgZGUgbGEgZHJldGEgdGFtYsOpIGVzIG11bHRpcGxpY2Egc2VuY2VyOiAkNlxcY2RvdCgtNyk9LTQyJC4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJTSUdORV9GSU5BTCIsICIiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiJdLCAicmVzIjogWyIkXFxkZnJhY3szeCsxNX17Nn09LTcgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAzeCsxNT0tNDIkIiwgIiQzeD0tNTckIiwgIiR4PS0xOSQiXX0="
  },
  {
   "id": "77c",
   "ex": 77,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$\\dfrac{3x}{2} + 20 = x + 25$",
   "opcions": [
    "$x=2$",
    "$x=10$",
    "$x=90$",
    "$x=-10$"
   ],
   "pistes": [
    "Multiplica tota l'equació pel m.c.m.$(2,1)=2$ per eliminar el denominador.",
    "Un cop sense fraccions, agrupa termes amb $x$ i números per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJEZXNwcsOpcyBkZSBtdWx0aXBsaWNhciBwZXIgJDIkIGkgYWdydXBhciwgcmV2aXNhIGwnYXJpdG3DqHRpY2EgZGVsIHBhcyAkM3gtMng9NTAtNDAkLiIsICIiLCAiRW4gbXVsdGlwbGljYXIgdG90YSBsJ2VxdWFjacOzIHBlbCBtLmMubS4sIGNhbCBtdWx0aXBsaWNhciBDQURBIHRlcm1lLCBpbmNsb2VudC1oaSBlbHMgcXVlIGphIG5vIHRlbmVuIGRlbm9taW5hZG9yLiIsICJSZXZpc2EgZWwgc2lnbmUgZmluYWw6IGRlICR4PTUwLTQwJCBzdXJ0IHVuIHJlc3VsdGF0IHBvc2l0aXUuIl0sICJlcnIiOiBbIkFSSVRNRVRJQ0FfUEFTX0lOVEVSTUVESSIsICIiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJNdWx0aXBsaXF1ZW0gcGVyICQyJDogJFxcZGZyYWN7M3h9ezJ9KzIwPXgrMjUgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAzeCs0MD0yeCs1MCQiLCAiJDN4LTJ4PTUwLTQwJCIsICIkeD0xMCQiXX0="
  },
  {
   "id": "77d",
   "ex": 77,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$\\dfrac{3x}{4} - 1 = 12 - 3x$",
   "opcions": [
    "$x=\\dfrac{52}{3}$",
    "$x=-\\dfrac{52}{15}$",
    "$x=\\dfrac{52}{15}$",
    "$x=\\dfrac{13}{3}$"
   ],
   "pistes": [
    "Multiplica tota l'equació pel m.c.m.$(4,1)=4$.",
    "Agrupa tots els termes amb $x$ a un costat (compte amb el $-3x$ de la dreta, que passa sumant)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJEZXNwcsOpcyBkJ2FncnVwYXIgdGVucyAkMTV4PTUyJDogZWwgJDE1JCBwcm92w6kgZGUgJDMrMTIkLCByZXZpc2EgYXF1ZXN0IHBhcyBkZSBzdW1hIGRlbHMgY29lZmljaWVudHMgZGUgJHgkLiIsICJFbCByZXN1bHRhdCB0w6kgZWwgc2lnbmUgY2FudmlhdDsgcmV2aXNhIHF1ZSBlbHMgZG9zIGNvc3RhdHMgZGUgbCdlcXVhY2nDsyAkMTV4PTUyJCBzaWd1aW4gcG9zaXRpdXMuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZW4gcGFzc2FyIGVsICQtNCQgaSBlbCAkNDgkIGFsIG1hdGVpeCBjb3N0YXQ6ICQ0OCs0PTUyJC4iXSwgImVyciI6IFsiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIlNJR05FX0ZJTkFMIiwgIiIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCJdLCAicmVzIjogWyJNdWx0aXBsaXF1ZW0gcGVyICQ0JDogJFxcZGZyYWN7M3h9ezR9LTE9MTItM3ggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAzeC00PTQ4LTEyeCQiLCAiJDN4KzEyeD00OCs0IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTV4PTUyJCIsICIkeD1cXGRmcmFjezUyfXsxNX0kIl19"
  },
  {
   "id": "78a",
   "ex": 78,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{3x}{5} + 7 = \\dfrac{2x}{6} + 9$",
   "opcions": [
    "$x=\\dfrac{15}{7}$",
    "$x=\\dfrac{15}{2}$",
    "$x=-\\dfrac{15}{2}$",
    "$x=\\dfrac{1}{2}$"
   ],
   "pistes": [
    "El m.c.m.$(5,6)=30$: multiplica tota l'equació per $30$.",
    "Un cop sense denominadors, agrupa termes amb $x$ i números."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgYXJyaWJhdCBhICQ4eD02MCQsIHBlcsOyIGVuY2FyYSBubyBoYXMgc2ltcGxpZmljYXQgbGEgZnJhY2Npw7MgJFxcZnJhY3s2MH17OH0kIGFsIG3DoHhpbTogZGl2aWRlaXggbnVtZXJhZG9yIGkgZGVub21pbmFkb3IgZW50cmUgJDQkLiIsICIiLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6ICQ4eD02MCQgZG9uYSB1bmEgJHgkIHBvc2l0aXZhLiIsICJFbiBwYXNzYXIgZGUgZGVub21pbmFkb3IgJDUkIChvICQ2JCkgYWwgY29tw7ogJDMwJCwgY2FkYSBudW1lcmFkb3IgcydoYSBkZSBtdWx0aXBsaWNhciBwZWwgbWF0ZWl4IGZhY3RvciBxdWUgZWwgc2V1IGRlbm9taW5hZG9yOiAkXFxmcmFjezN4fXs1fVxcdG9cXGZyYWN7MTh4fXszMH0kLCBubyAkXFxmcmFjezN4fXszMH0kLiJdLCAiZXJyIjogWyJTSU1QTElGSUNBQ0lPX0lOQ09NUExFVEEiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIk5VTUVSQURPUlNfU0VOU0VfQUpVU1RBUiJdLCAicmVzIjogWyJNLmMubS4kKDUsNik9MzAkOiAkXFxkZnJhY3szeH17NX0rNz1cXGRmcmFjezJ4fXs2fSs5IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTh4KzIxMD0xMHgrMjcwJCIsICIkMTh4LTEweD0yNzAtMjEwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgOHg9NjAkIiwgIiR4PVxcZGZyYWN7NjB9ezh9PVxcZGZyYWN7MTV9ezJ9JCJdfQ=="
  },
  {
   "id": "78b",
   "ex": 78,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{x+2}{3} = 5x - 46$",
   "opcions": [
    "$x=\\dfrac{35}{4}$",
    "$x=\\dfrac{68}{7}$",
    "$x=10$",
    "$x=-10$"
   ],
   "pistes": [
    "Multiplica els dos costats per $3$ per eliminar el denominador.",
    "Agrupa tots els termes amb $x$ a un costat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgcXVhbnRzIHRlcm1lcyBhbWIgJHgkIHF1ZWRlbiBlbiB0b3RhbCBhIGxhIGRyZXRhOiAkMTV4LXg9MTR4JCwgbm8gJDE2eCQuIiwgIlJldmlzYSBsJ2FyaXRtw6h0aWNhIGZpbmFsOiAkMisxMzg9MTQwJCwgaSAkMTQwOjE0PTEwJCBleGFjdGUuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZGVsICQxMzgkOiBlbiBtdWx0aXBsaWNhciAkM1xcY2RvdCg1eC00NikkIGVsIHJlc3VsdGF0IMOpcyAkMTV4LTEzOCQsIGkgYXF1ZXN0ICQtMTM4JCBwYXNzYSBzdW1hbnQgYSBsJ2VzcXVlcnJhLiJdLCAiZXJyIjogWyJHUkFVX1BST0RVQ1RFX01BTCIsICJBUklUTUVUSUNBX1BBU19JTlRFUk1FREkiLCAiIiwgIlNJR05FX1RFUk1FX0lOREVQRU5ERU5UIl0sICJyZXMiOiBbIiRcXGRmcmFje3grMn17M309NXgtNDYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4KzI9MTV4LTEzOCQiLCAiJDIrMTM4PTE1eC14IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTQwPTE0eCQiLCAiJHg9MTAkIl19"
  },
  {
   "id": "78c",
   "ex": 78,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$x - \\dfrac{x+4}{5} = 1 + \\dfrac{x}{2}$",
   "opcions": [
    "$x=2$",
    "$x=6$",
    "$x=-6$",
    "$x=\\dfrac{18}{13}$"
   ],
   "pistes": [
    "El m.c.m.$(5,2)=10$: multiplica tota l'equació per $10$.",
    "Compte amb el signe: $-\\frac{x+4}{5}$ multiplicat per $10$ dona $-2(x+4)$, i el parèntesi s'ha de distribuir sencer."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbiBtdWx0aXBsaWNhciBwZWwgbS5jLm0uJCg1LDIpPTEwJCwgY2FkYSB0ZXJtZSBzJ2hhIGRlIG11bHRpcGxpY2FyIHBlbCBmYWN0b3IgcXVlIGxpIGNvcnJlc3BvbiBzZWdvbnMgZWwgc2V1IHByb3BpIGRlbm9taW5hZG9yLCBubyB0b3RzIHBlbCBtYXRlaXggbm9tYnJlLiIsICIiLCAiRWwgcmVzdWx0YXQgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6ICQzeD0xOCQgZG9uYSB1bmEgJHgkIHBvc2l0aXZhLiIsICJSZXZpc2EgcXVlIGhhcyBhZ3J1cGF0IGLDqSBlbHMgdGVybWVzIGFtYiAkeCQ6ICQxMHgtMngtNXg9M3gkLCBubyB1biBhbHRyZSBjb2VmaWNpZW50LiJdLCAiZXJyIjogWyJOVU1FUkFET1JTX1NFTlNFX0FKVVNUQVIiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIkFHUlVQQUNJT19URVJNRVNfTUFMIl0sICJyZXMiOiBbIk0uYy5tLiQoNSwyKT0xMCQ6ICR4LVxcZGZyYWN7eCs0fXs1fT0xK1xcZGZyYWN7eH17Mn0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAxMHgtMih4KzQpPTEwKzV4JCIsICIkMTB4LTJ4LTg9MTArNXggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA4eC01eD0xMCs4JCIsICIkM3g9MTggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PTYkIl19"
  },
  {
   "id": "78d",
   "ex": 78,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{x+8}{2} - \\dfrac{x-4}{6} = 2$",
   "opcions": [
    "$x=8$",
    "$x=2$",
    "$x=-4$",
    "$x=-8$"
   ],
   "pistes": [
    "El m.c.m.$(2,6)=6$: multiplica tota l'equació per $6$.",
    "El $-\\frac{x-4}{6}$ es converteix en $-(x-4)$: distribueix el signe menys als dos termes."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZmluYWw6IGRlICQyeD0tMTYkIHN1cnQgdW5hICR4JCBuZWdhdGl2YS4iLCAiUmV2aXNhIHF1ZSBoYXMgcGFzc2F0IFRPVFMgZWxzIG7Dum1lcm9zIGEgbCdlc3F1ZXJyYTogJDEyLTI4PS0xNiQsIG5vIHVuIGFsdHJlIHZhbG9yLiIsICJFbiBkaXN0cmlidWlyICQtKHgtNCkkIChxdWUgdmUgZGUgJC1cXGZyYWN7eC00fXs2fVxcY2RvdDYkKSwgZWwgc2lnbmUgJC0kIGFmZWN0YSBlbHMgZG9zIHRlcm1lczogJC14KzQkLCBubyBub23DqXMgZWwgcHJpbWVyLiIsICIiXSwgImVyciI6IFsiU0lHTkVfRklOQUwiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJNRU5ZU19QQVJFTlRFU0kiLCAiIl0sICJyZXMiOiBbIk0uYy5tLiQoMiw2KT02JDogJFxcZGZyYWN7eCs4fXsyfS1cXGRmcmFje3gtNH17Nn09MiBcXDtcXExvbmdyaWdodGFycm93XFw7IDMoeCs4KS0oeC00KT0xMiQiLCAiJDN4KzI0LXgrND0xMiBcXDtcXExvbmdyaWdodGFycm93XFw7IDJ4PTEyLTI4JCIsICIkMng9LTE2IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0tOCQiXX0="
  },
  {
   "id": "78e",
   "ex": 78,
   "ap": "e",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{x-5}{5} + \\dfrac{8-x}{2} + \\dfrac{2x-10}{2} = 3$",
   "opcions": [
    "$x=\\dfrac{50}{7}$",
    "$x=\\dfrac{50}{17}$",
    "$x=\\dfrac{30}{7}$",
    "$x=-\\dfrac{50}{7}$"
   ],
   "pistes": [
    "El m.c.m.$(5,2,2)=10$: multiplica tota l'equació per $10$.",
    "Un cop sense denominadors, agrupa per separat els termes amb $x$ i els números."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGxhIHN1bWEgZGVscyBjb2VmaWNpZW50cyBkZSAkeCQ6ICQyeC01eCsxMHg9N3gkLCBubyB1biBhbHRyZSBjb2VmaWNpZW50LiIsICJFbiBhZ3J1cGFyIGVscyBuw7ptZXJvcyBkZSBsJ2VzcXVlcnJhIHJldmlzYSB1biBhIHVuOiAkLTEwKzQwLTUwPS0yMCQsIG5vIHVuIGFsdHJlIHZhbG9yLiIsICJSZXZpc2EgZWwgc2lnbmUgZmluYWw6ICQ3eD01MCQgZG9uYSB1bmEgJHgkIHBvc2l0aXZhLiJdLCAiZXJyIjogWyIiLCAiR1JBVVNfTUFMX0FHUlVQQVRTIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiTS5jLm0uJCg1LDIsMik9MTAkOiBtdWx0aXBsaXF1ZW0gY2FkYSB0ZXJtZSBwZWwgZmFjdG9yIHF1ZSBsaSBjb3JyZXNwb246ICQyKHgtNSkrNSg4LXgpKzUoMngtMTApPTMwJCIsICIkMngtMTArNDAtNXgrMTB4LTUwPTMwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgN3gtMjA9MzAkIiwgIiQ3eD01MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s1MH17N30kIl19"
  },
  {
   "id": "78f",
   "ex": 78,
   "ap": "f",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula el valor de $x$.",
   "enunciat": "$\\dfrac{x-10}{2} - \\dfrac{x-20}{4} - \\dfrac{x-30}{3} = 5$",
   "opcions": [
    "$x=180$",
    "$x=20$",
    "$x=-60$",
    "$x=60$"
   ],
   "pistes": [
    "El m.c.m.$(2,4,3)=12$: multiplica tota l'equació per $12$.",
    "Compte amb els signes en distribuir cada parèntesi que resulta de multiplicar pel m.c.m."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgcGFzICQteCsxMjA9NjAkOiBlbCAkMTIwJCBoYSBkZSByZXN0YXIgYSBiYW5kYSBpIGJhbmRhLCBubyBzdW1hci1zZSBkdWVzIHZlZ2FkZXMuIiwgIlF1YW4gZGlzdHJpYnVlaXhlcyAkLTMoeC0yMCkkIGkgJC00KHgtMzApJCwgZWwgc2lnbmUgJC0kIGhhIGQnYWZlY3RhciBlbHMgZG9zIHRlcm1lcyBkZSBjYWRhIHBhcsOobnRlc2kuIiwgIlJldmlzYSBlbCBzaWduZSBmaW5hbDogZGUgJC14PS02MCQgc3VydCB1bmEgJHgkIHBvc2l0aXZhLiIsICIiXSwgImVyciI6IFsiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiTUVOWVNfUEFSRU5URVNJIiwgIlNJR05FX0ZJTkFMIiwgIiJdLCAicmVzIjogWyJNLmMubS4kKDIsNCwzKT0xMiQ6ICQ2KHgtMTApLTMoeC0yMCktNCh4LTMwKT02MCQiLCAiJDZ4LTYwLTN4KzYwLTR4KzEyMD02MCBcXDtcXExvbmdyaWdodGFycm93XFw7IC14KzEyMD02MCQiLCAiJC14PS02MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9NjAkIl19"
  },
  {
   "id": "79a",
   "ex": 79,
   "ap": "a",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{2x-10}{3} - \\dfrac{3(x-12)}{4} = -1$",
   "opcions": [
    "$x=-80$",
    "$x=48$",
    "$x=80$",
    "$x=37$"
   ],
   "pistes": [
    "El m.c.m.$(3,4)=12$: multiplica tota l'equació per $12$.",
    "Distribueix amb cura: el $-3(x-12)$ multiplicat per $3$ dona $-9(x-12)=-9x+108$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZmluYWw6IGRlICQteD0tODAkIHN1cnQgdW5hICR4JCBwb3NpdGl2YS4iLCAiUmV2aXNhIGVsIHBhcyAkLXgrNjg9LTEyJDogY2FsIGHDr2xsYXIgY29ycmVjdGFtZW50IHBhc3NhbnQgZWwgJDY4JCBhIGwnYWx0cmUgY29zdGF0LiIsICIiLCAiRW4gZGlzdHJpYnVpciAkLTNcXGNkb3QzKHgtMTIpJCwgZWwgZmFjdG9yICQ5JCBoYSBkZSBtdWx0aXBsaWNhciBlbHMgRE9TIHRlcm1lcyBkZWwgcGFyw6hudGVzaTogJDl4LTEwOCQuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiXSwgInJlcyI6IFsiTS5jLm0uJCgzLDQpPTEyJDogJDQoMngtMTApLTNcXGNkb3QzKHgtMTIpPS0xMiQiLCAiJDh4LTQwLTl4KzEwOD0tMTIgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAteCs2OD0tMTIkIiwgIiQteD0tODAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PTgwJCJdfQ=="
  },
  {
   "id": "79b",
   "ex": 79,
   "ap": "b",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{-3x-3}{5} = 3 - 4(x+2)$",
   "opcions": [
    "$x=\\dfrac{22}{17}$",
    "$x=-\\dfrac{22}{17}$",
    "$x=-\\dfrac{28}{17}$",
    "$x=-\\dfrac{22}{23}$"
   ],
   "pistes": [
    "Multiplica els dos costats per $5$ per eliminar el denominador.",
    "Distribueix $5\\cdot(3-4(x+2))$ amb cura: primer el $-4(x+2)$, després el $5$ per tot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmU6ICQxN3g9LTIyJCBkb25hIHVuYSAkeCQgbmVnYXRpdmEuIiwgIiIsICJFbiBkaXN0cmlidWlyICQtNCh4KzIpJCwgZWwgc2lnbmUgJC0kIGFmZWN0YSBlbHMgZG9zIHRlcm1lczogJC00eC04JCwgbm8gbm9tw6lzIGVsIHByaW1lci4iLCAiUmV2aXNhIGxhIHN1bWEgZmluYWwgZGVscyBjb2VmaWNpZW50cyBkZSAkeCQ6ICQtM3grMjB4PTE3eCQsIG5vIHVuIGFsdHJlIGNvZWZpY2llbnQuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIiIsICJNRU5ZU19QQVJFTlRFU0kiLCAiR1JBVVNfTUFMX0FHUlVQQVRTIl0sICJyZXMiOiBbIk11bHRpcGxpcXVlbSBwZXIgJDUkOiAkLTN4LTM9NSgzLTR4LTgpJCIsICIkLTN4LTM9MTUtMjB4LTQwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgLTN4LTM9LTIweC0yNSQiLCAiJC0zeCsyMHg9LTI1KzMgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAxN3g9LTIyIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0tXFxkZnJhY3syMn17MTd9JCJdfQ=="
  },
  {
   "id": "79c",
   "ex": 79,
   "ap": "c",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{2x-5}{5} + \\dfrac{x+1}{4} = 20 - x$",
   "opcions": [
    "$x=\\dfrac{415}{13}$",
    "$x=\\dfrac{415}{33}$",
    "$x=\\dfrac{400}{33}$",
    "$x=-\\dfrac{415}{33}$"
   ],
   "pistes": [
    "El m.c.m.$(5,4)=20$: multiplica tota l'equació per $20$.",
    "Un cop sense denominadors, passa tots els termes amb $x$ a un costat i els números a l'altre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgbGEgc3VtYSBkZWxzIGNvZWZpY2llbnRzIGRlICR4JCBhbCBwYXMgZmluYWw6ICQxM3grMjB4PTMzeCQsIG5vIHVuIGFsdHJlIGNvZWZpY2llbnQuIiwgIiIsICJSZXZpc2EgbGEgc3VtYSBkZWxzIG7Dum1lcm9zIGEgbCdlc3F1ZXJyYTogJC0yMCs1PS0xNSQsIGkgZGVzcHLDqXMgJDQwMCsxNT00MTUkLiIsICJSZXZpc2EgZWwgc2lnbmUgZmluYWw6ICQzM3g9NDE1JCBkb25hIHVuYSAkeCQgcG9zaXRpdmEuIl0sICJlcnIiOiBbIkdSQVVTX01BTF9BR1JVUEFUUyIsICIiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJNLmMubS4kKDUsNCk9MjAkOiAkNCgyeC01KSs1KHgrMSk9MjAoMjAteCkkIiwgIiQ4eC0yMCs1eCs1PTQwMC0yMHggXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAxM3gtMTU9NDAwLTIweCQiLCAiJDEzeCsyMHg9NDAwKzE1IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMzN4PTQxNSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9XFxkZnJhY3s0MTV9ezMzfSQiXX0="
  },
  {
   "id": "79d",
   "ex": 79,
   "ap": "d",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{3-x}{7} - x = \\dfrac{3+2(x-1)}{14}$",
   "opcions": [
    "$x=\\dfrac{5}{18}$",
    "$x=\\dfrac{1}{18}$",
    "$x=\\dfrac{5}{14}$",
    "$x=-\\dfrac{5}{18}$"
   ],
   "pistes": [
    "El m.c.m.$(7,14)=14$: multiplica tota l'equació per $14$.",
    "El numerador de la dreta ja porta un parèntesi a dins, $3+2(x-1)$: distribueix-lo abans de simplificar."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGxhIHN1bWEgZmluYWw6ICQxLTY9LTUkLCBubyB1biBhbHRyZSB2YWxvci4iLCAiUmV2aXNhIGVsIHRlcm1lICQyKHgtMSkkIGRpbnMgZGVsIG51bWVyYWRvciBkZSBsYSBkcmV0YTogJDJ4LTIkLCBpIGRlc3Byw6lzICQzKzJ4LTI9MngrMSQuIiwgIlJldmlzYSBlbCBzaWduZSBmaW5hbDogJC0xOHg9LTUkIGRvbmEgdW5hICR4JCBwb3NpdGl2YS4iXSwgImVyciI6IFsiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiRElTVFJJQlVDSU9fSU5DT01QTEVUQSIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJNLmMubS4kKDcsMTQpPTE0JDogJDIoMy14KS0xNHg9MysyKHgtMSkkIiwgIiQ2LTJ4LTE0eD0zKzJ4LTIgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA2LTE2eD0xKzJ4JCIsICIkLTE2eC0yeD0xLTYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAtMTh4PS01IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD1cXGRmcmFjezV9ezE4fSQiXX0="
  },
  {
   "id": "79e",
   "ex": 79,
   "ap": "e",
   "bloc": "primer_grau",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Busca la solució d'aquestes equacions.",
   "enunciat": "$\\dfrac{4x-6}{10} + 2x = 21 - \\dfrac{3(x+1)}{12}$",
   "opcions": [
    "$x=\\dfrac{405}{53}$",
    "$x=-\\dfrac{427}{53}$",
    "$x=\\dfrac{427}{53}$",
    "$x=\\dfrac{427}{159}$"
   ],
   "pistes": [
    "El m.c.m.$(10,1,12)=60$: multiplica tota l'equació per $60$.",
    "Un cop sense denominadors, agrupa termes amb $x$ i números, i simplifica la fracció final al màxim."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgdGVybWUgaW5kZXBlbmRlbnQ6IGVsICQtMzYkIGRlIGwnZXNxdWVycmEgcGFzc2EgYSBsJ2FsdHJlIG1lbWJyZSBTVU1BTlQsICQxMjQ1KzM2PTEyODEkLiBBbWIgJDE1OXg9MTIxNSQgc29ydGlyaWEgYXF1ZXN0IHZhbG9yLCBwZXLDsiBsJ2VxdWFjacOzIGRvbmEgJDE1OXg9MTI4MSQuIiwgIlJldmlzYSBlbCBzaWduZSBmaW5hbDogJDE1OXg9MTI4MSQgZG9uYSB1bmEgJHgkIHBvc2l0aXZhLiIsICIiLCAiSGFzIHNpbXBsaWZpY2F0IG5vbcOpcyBlbCBudW1lcmFkb3IgaSBubyBlbCBkZW5vbWluYWRvcjogJFxcZnJhY3sxMjgxfXsxNTl9JCBzJ2hhIGRlIGRpdmlkaXIgcGVyICQzJCBhbHMgRE9TIGNvc3RhdHMgZGUgbGEgZnJhY2Npw7MgcGVyIGFycmliYXIgYSAkXFxmcmFjezQyN317NTN9JC4iXSwgImVyciI6IFsiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiU0lHTkVfRklOQUwiLCAiIiwgIlNJTVBMSUZJQ0FDSU9fUEFSQ0lBTCJdLCAicmVzIjogWyJNLmMubS4kKDEwLDEsMTIpPTYwJDogJDYoNHgtNikrMTIweD0xMjYwLTE1KHgrMSkkIiwgIiQyNHgtMzYrMTIweD0xMjYwLTE1eC0xNSBcXDtcXExvbmdyaWdodGFycm93XFw7IDE0NHgtMzY9MTI0NS0xNXgkIiwgIiQxNDR4KzE1eD0xMjQ1KzM2IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMTU5eD0xMjgxIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD1cXGRmcmFjezEyODF9ezE1OX09XFxkZnJhY3s0Mjd9ezUzfSQiXX0="
  },
  {
   "id": "80a",
   "ex": 80,
   "ap": "a",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$x^2-5x+6=0$",
   "opcions": [
    "$x=2,\\ 3$",
    "$x=1,\\ 6$",
    "$x=-2,\\ -3$",
    "$x=3$ (doble)"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ i calcula primer el discriminant $\\Delta=b^2-4ac$.",
    "El signe de $\\Delta$ et diu quantes solucions reals hi ha abans d'aplicar la fórmula sencera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGxhIGbDs3JtdWxhOiBubyBuJ2hpIGhhIHByb3UgZGUgZGVzY29tcG9uZHJlICQ2JCBjb20gYSBwcm9kdWN0ZSBkZSBkb3MgZmFjdG9ycywgY2FsIGFwbGljYXIgJHg9XFxmcmFjey1iXFxwbVxcc3FydFxcRGVsdGF9ezJhfSQuIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkLWIkIGFsIG51bWVyYWRvcjogYW1iICRiPS01JCwgZWwgbnVtZXJhZG9yIGRlIGxhIGbDs3JtdWxhIHBvcnRhICQrNSQsIGkgbGVzIGR1ZXMgc29sdWNpb25zIHN1cnRlbiBwb3NpdGl2ZXMuIiwgIkVsIGRpc2NyaW1pbmFudCAkXFxEZWx0YT0xJCDDqXMgcG9zaXRpdSAobm8gemVybyk6IGhpIGhhIERVRVMgc29sdWNpb25zIGRpZmVyZW50cywgbm8gdW5hIGRlIGRvYmxlLiJdLCAiZXJyIjogWyIiLCAiUFJPRFVDVEVfQ1JFVUFUIiwgIlNJR05FX1FVT0NJRU5UIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0xLFxcIGI9LTUsXFwgYz02JDogJFxcRGVsdGE9KC01KV4yLTRcXGNkb3QxXFxjZG90Nj0yNS0yND0xJCIsICIkeD1cXGRmcmFjezVcXHBtXFxzcXJ0ezF9fXsyfSQiLCAiJHg9MixcXCAzJCJdfQ=="
  },
  {
   "id": "80b",
   "ex": 80,
   "ap": "b",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$2x^2-4x+13=0$",
   "opcions": [
    "Sense solució",
    "$x=1$ (doble)",
    "Sense solucions reals",
    "$x=-1,\\ 1$"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ i calcula primer el discriminant $\\Delta=b^2-4ac$.",
    "El signe de $\\Delta$ et diu quantes solucions reals hi ha abans d'aplicar la fórmula sencera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJcIlNlbnNlIHNvbHVjaW9ucyByZWFsc1wiIG5vIMOpcyBlbCBtYXRlaXggcXVlIFwic2Vuc2Ugc29sdWNpw7NcIjogYXF1w60gZW5zIHJlZmVyaW0gYSBub21icmVzIHJlYWxzLCBpIGVsIGRpc2NyaW1pbmFudCBuZWdhdGl1IGhvIGNvbmZpcm1hLiIsICJVbiBkaXNjcmltaW5hbnQgbmVnYXRpdSB2b2wgZGlyIHF1ZSBOTyBoaSBoYSBjYXAgc29sdWNpw7MgcmVhbCwgbmkgdGFuIHNvbHMgdW5hIGRlIGRvYmxlOiB0b3JuYSBhIGNhbGN1bGFyICRcXERlbHRhPWJeMi00YWMkLiIsICIiLCAiUmV2aXNhIGVsIGPDoGxjdWwgZGVsIGRpc2NyaW1pbmFudCBhbWIgY3VyYTogJFxcRGVsdGE9KC00KV4yLTRcXGNkb3QyXFxjZG90MTM9MTYtMTA0PS04OCQsIG5lZ2F0aXUuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJQQVJJVEFUX0VYUE9ORU5UIiwgIiIsICJTSUdORV9QUk9EVUNURSJdLCAicmVzIjogWyIkYT0yLFxcIGI9LTQsXFwgYz0xMyQ6ICRcXERlbHRhPSgtNCleMi00XFxjZG90MlxcY2RvdDEzPTE2LTEwND0tODgkIiwgIkNvbSBxdWUgJFxcRGVsdGE8MCQsIGwnZXF1YWNpw7Mgbm8gdMOpIHNvbHVjaW9ucyByZWFscy4iXX0="
  },
  {
   "id": "80c",
   "ex": 80,
   "ap": "c",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$x^2+8x+16=0$",
   "opcions": [
    "$x=-8$ (doble)",
    "Sense solucions reals",
    "$x=-4$ (doble)",
    "$x=-4,\\ 4$"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ i calcula primer el discriminant $\\Delta=b^2-4ac$.",
    "El signe de $\\Delta$ et diu quantes solucions reals hi ha abans d'aplicar la fórmula sencera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgbGEgZGl2aXNpw7MgZmluYWwgZW50cmUgJDJhPTIkOiBlbCBudW1lcmFkb3IgJC04XFxwbTAkIGVzIGRpdmlkZWl4IFRPVCBlbnRyZSAkMiQsIG5vIGVzIHF1ZWRhIHNlbnNlIGRpdmlkaXIuIiwgIiRcXERlbHRhPTAkIG5vIHZvbCBkaXIgcXVlIG5vIGhpIGhhZ2kgc29sdWNpb25zIHJlYWxzOiB2b2wgZGlyIHF1ZSBuJ2hpIGhhIGV4YWN0YW1lbnQgdW5hIChkb2JsZSkuIiwgIiIsICJRdWFuICRcXERlbHRhPTAkIG5vbcOpcyBoaSBoYSBVTkEgc29sdWNpw7MgKGRvYmxlKSwgbm8gZHVlcyBkZSBzaWduZSBvcG9zYXQ6IHJldmlzYSBlbCBzaWduZSBkZSAkLWIkIGFsIG51bWVyYWRvci4iXSwgImVyciI6IFsiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiU0lHTkVfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJGE9MSxcXCBiPTgsXFwgYz0xNiQ6ICRcXERlbHRhPSg4KV4yLTRcXGNkb3QxXFxjZG90MTY9NjQtNjQ9MCQiLCAiJHg9XFxkZnJhY3stOFxccG1cXHNxcnR7MH19ezJ9JCIsICIkeD0tNCQgKGRvYmxlKSJdfQ=="
  },
  {
   "id": "80d",
   "ex": 80,
   "ap": "d",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$3x^2+2x-16=0$",
   "opcions": [
    "$x=-\\dfrac{8}{3},\\ -2$",
    "$x=-\\dfrac{8}{3},\\ 2$",
    "$x=-\\dfrac{4}{3},\\ \\dfrac{1}{3}$",
    "$x=\\dfrac{8}{3},\\ -2$"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ i calcula primer el discriminant $\\Delta=b^2-4ac$.",
    "El signe de $\\Delta$ et diu quantes solucions reals hi ha abans d'aplicar la fórmula sencera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiAkXFxmcmFjey0yKzE0fXs2fT1cXGZyYWN7MTJ9ezZ9PTIkLCBwb3NpdGl1LiIsICIiLCAiTGVzIGZyYWNjaW9ucyBmaW5hbHMgZW5jYXJhIGVzIHBvZGVuIHNpbXBsaWZpY2FyIGRpdmlkaW50IG51bWVyYWRvciBpIGRlbm9taW5hZG9yIGVudHJlICQyJC4iLCAiUmV2aXNhIGVsIHNpZ25lIGRlICQtYiQgYWwgbnVtZXJhZG9yOiBhbWIgJGI9MiQsIGVsIG51bWVyYWRvciBwb3J0YSAkLTIkLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICIiLCAiU0lNUExJRklDQUNJT19JTkNPTVBMRVRBIiwgIlNJR05FX1FVT0NJRU5UIl0sICJyZXMiOiBbIiRhPTMsXFwgYj0yLFxcIGM9LTE2JDogJFxcRGVsdGE9KDIpXjItNFxcY2RvdDNcXGNkb3QoLTE2KT00KzE5Mj0xOTYkIiwgIiR4PVxcZGZyYWN7LTJcXHBtXFxzcXJ0ezE5Nn19ezZ9JCIsICIkeD0tXFxkZnJhY3s4fXszfSxcXCAyJCJdfQ=="
  },
  {
   "id": "80e",
   "ex": 80,
   "ap": "e",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$x^2-2x+1=0$",
   "opcions": [
    "Sense solucions reals",
    "$x=1,\\ -1$",
    "$x=2$ (doble)",
    "$x=1$ (doble)"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ i calcula primer el discriminant $\\Delta=b^2-4ac$.",
    "El signe de $\\Delta$ et diu quantes solucions reals hi ha abans d'aplicar la fórmula sencera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyIkXFxEZWx0YT0wJCBubyB2b2wgZGlyIHF1ZSBubyBoaSBoYWdpIHNvbHVjaW9ucyByZWFsczogdm9sIGRpciBxdWUgbidoaSBoYSBleGFjdGFtZW50IHVuYSAoZG9ibGUpLiIsICJRdWFuICRcXERlbHRhPTAkIG5vbcOpcyBoaSBoYSBVTkEgc29sdWNpw7MgKGRvYmxlKTogcmV2aXNhIGVsIHNpZ25lIGRlICQtYiQgYWwgbnVtZXJhZG9yLCBhbWIgJGI9LTIkIGVsIG51bWVyYWRvciBwb3J0YSAkKzIkLiIsICJSZXZpc2EgbGEgZGl2aXNpw7MgZmluYWwgZW50cmUgJDJhPTIkOiBlbCBudW1lcmFkb3IgJDJcXHBtMCQgZXMgZGl2aWRlaXggZW50cmUgJDIkLCBpIGRvbmEgJDEkLCBubyAkMiQuIiwgIiJdLCAiZXJyIjogWyJWRVJFRElDVEVfSU5WRVJUSVQiLCAiU0lHTkVfUVVPQ0lFTlQiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIiwgIiJdLCAicmVzIjogWyIkYT0xLFxcIGI9LTIsXFwgYz0xJDogJFxcRGVsdGE9KC0yKV4yLTRcXGNkb3QxXFxjZG90MT00LTQ9MCQiLCAiJHg9XFxkZnJhY3syXFxwbVxcc3FydHswfX17Mn0kIiwgIiR4PTEkIChkb2JsZSkiXX0="
  },
  {
   "id": "80f",
   "ex": 80,
   "ap": "f",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$7x^2-3x+1=0$",
   "opcions": [
    "Sense solucions reals",
    "$x=-\\dfrac{3}{14},\\ \\dfrac{3}{14}$",
    "$x=\\dfrac{3}{14}$ (doble)",
    "Sense solució"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ i calcula primer el discriminant $\\Delta=b^2-4ac$.",
    "El signe de $\\Delta$ et diu quantes solucions reals hi ha abans d'aplicar la fórmula sencera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIGPDoGxjdWwgZGVsIGRpc2NyaW1pbmFudDogJFxcRGVsdGE9KC0zKV4yLTRcXGNkb3Q3XFxjZG90MT05LTI4PS0xOSQsIG5lZ2F0aXUuIiwgIlVuIGRpc2NyaW1pbmFudCBuZWdhdGl1IHZvbCBkaXIgcXVlIE5PIGhpIGhhIGNhcCBzb2x1Y2nDsyByZWFsLCBuaSB0YW4gc29scyB1bmEgZGUgZG9ibGU6IHRvcm5hIGEgY2FsY3VsYXIgJFxcRGVsdGE9Yl4yLTRhYyQuIiwgIlwiU2Vuc2Ugc29sdWNpb25zIHJlYWxzXCIgbm8gw6lzIGVsIG1hdGVpeCBxdWUgXCJzZW5zZSBzb2x1Y2nDs1wiOiBlbCBkaXNjcmltaW5hbnQgbmVnYXRpdSBjb25maXJtYSBxdWUgbm8gbidoaSBoYSBjYXAgZGUgcmVhbC4iXSwgImVyciI6IFsiIiwgIlNJR05FX1BST0RVQ1RFIiwgIlBBUklUQVRfRVhQT05FTlQiLCAiVkVSRURJQ1RFX0lOVkVSVElUIl0sICJyZXMiOiBbIiRhPTcsXFwgYj0tMyxcXCBjPTEkOiAkXFxEZWx0YT0oLTMpXjItNFxcY2RvdDdcXGNkb3QxPTktMjg9LTE5JCIsICJDb20gcXVlICRcXERlbHRhPDAkLCBsJ2VxdWFjacOzIG5vIHTDqSBzb2x1Y2lvbnMgcmVhbHMuIl19"
  },
  {
   "id": "80g",
   "ex": 80,
   "ap": "g",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol les equacions de segon grau aplicant-hi la fórmula general.",
   "enunciat": "$-x^2-4x+5=0$",
   "opcions": [
    "$x=-9,\\ 5$",
    "$x=5,\\ -1$",
    "$x=-5,\\ 1$",
    "$x=-1,\\ 5$"
   ],
   "pistes": [
    "Identifica $a$, $b$ i $c$ i calcula primer el discriminant $\\Delta=b^2-4ac$.",
    "El signe de $\\Delta$ et diu quantes solucions reals hi ha abans d'aplicar la fórmula sencera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgbCdhcml0bcOodGljYSBkZWwgbnVtZXJhZG9yIGFiYW5zIGRlIGRpdmlkaXI6ICQ0K1xcc3FydHszNn09NCs2PTEwJCwgbm8gdW4gYWx0cmUgdmFsb3IuIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkLWIkIGFsIG51bWVyYWRvcjogYW1iICRiPS00JCwgZWwgbnVtZXJhZG9yIHBvcnRhICQrNCQ7IGkgZWwgZGVub21pbmFkb3IgJDJhPS0yJCDDqXMgbmVnYXRpdSwgY29zYSBxdWUgdGFtYsOpIGFmZWN0YSBlbCBzaWduZSBmaW5hbC4iLCAiIiwgIlJldmlzYSBxdWluIGRlbHMgZG9zIGNhc29zIGRlbCAkXFxwbSQgZG9uYSBjYWRhIHNvbHVjacOzOiAkXFxmcmFjezQrNn17LTJ9PS01JCBpICRcXGZyYWN7NC02fXstMn09MSQuIl0sICJlcnIiOiBbIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICJTSUdORV9RVU9DSUVOVCIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiJGE9LTEsXFwgYj0tNCxcXCBjPTUkOiAkXFxEZWx0YT0oLTQpXjItNFxcY2RvdCgtMSlcXGNkb3Q1PTE2KzIwPTM2JCIsICIkeD1cXGRmcmFjezRcXHBtXFxzcXJ0ezM2fX17LTJ9JCIsICIkeD0tNSxcXCAxJCJdfQ=="
  },
  {
   "id": "81a",
   "ex": 81,
   "ap": "a",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$x^2+5x+6=0$",
   "opcions": [
    "Cap solució real",
    "2 solucions",
    "3 solucions",
    "1 solució (doble)"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "$\\Delta>0$: dues solucions. $\\Delta=0$: una (doble). $\\Delta<0$: cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICIiLCAiVW5hIGVxdWFjacOzIGRlIHNlZ29uIGdyYXUgKGdyYXUgMikgdMOpIGNvbSBhIG1vbHQgMiBzb2x1Y2lvbnMgcmVhbHMsIG1haSAzOiByZXZpc2EgcXVlIGhhcyBpZGVudGlmaWNhdCBiw6kgZWwgZ3JhdS4iLCAiRWwgdmVyZWRpY3RlIG5vIGNvaW5jaWRlaXggYW1iIGVsIHNpZ25lIHJlYWwgZGVsIGRpc2NyaW1pbmFudCBxdWUgaGFzIChvIGhhdXJpZXMgZCdoYXZlcikgY2FsY3VsYXQ6IHRvcm5hLWhpIGEgbWlyYXIuIl0sICJlcnIiOiBbIlNJR05FX1BST0RVQ1RFIiwgIiIsICJQQVJJVEFUX0VYUE9ORU5UIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0xLFxcIGI9NSxcXCBjPTYkOiAkXFxEZWx0YT0oNSleMi00XFxjZG90MVxcY2RvdDY9MjUtMjQ9MSQiLCAiJFxcRGVsdGE+MCQgJFxcUmlnaHRhcnJvdyQgMiBzb2x1Y2lvbnMiXX0="
  },
  {
   "id": "81b",
   "ex": 81,
   "ap": "b",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$-2x^2-6x+8=0$",
   "opcions": [
    "3 solucions",
    "Cap solució real",
    "2 solucions",
    "1 solució (doble)"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "$\\Delta>0$: dues solucions. $\\Delta=0$: una (doble). $\\Delta<0$: cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbmEgZXF1YWNpw7MgZGUgc2Vnb24gZ3JhdSAoZ3JhdSAyKSB0w6kgY29tIGEgbW9sdCAyIHNvbHVjaW9ucyByZWFscywgbWFpIDM6IHJldmlzYSBxdWUgaGFzIGlkZW50aWZpY2F0IGLDqSBlbCBncmF1LiIsICJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICIiLCAiRWwgdmVyZWRpY3RlIG5vIGNvaW5jaWRlaXggYW1iIGVsIHNpZ25lIHJlYWwgZGVsIGRpc2NyaW1pbmFudCBxdWUgaGFzIChvIGhhdXJpZXMgZCdoYXZlcikgY2FsY3VsYXQ6IHRvcm5hLWhpIGEgbWlyYXIuIl0sICJlcnIiOiBbIlBBUklUQVRfRVhQT05FTlQiLCAiU0lHTkVfUFJPRFVDVEUiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0tMixcXCBiPS02LFxcIGM9OCQ6ICRcXERlbHRhPSgtNileMi00XFxjZG90KC0yKVxcY2RvdDg9MzYrNjQ9MTAwJCIsICIkXFxEZWx0YT4wJCAkXFxSaWdodGFycm93JCAyIHNvbHVjaW9ucyJdfQ=="
  },
  {
   "id": "81c",
   "ex": 81,
   "ap": "c",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$x^2-8x+16=0$",
   "opcions": [
    "Cap solució real",
    "0 solucions",
    "1 solució (doble)",
    "2 solucions"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "$\\Delta>0$: dues solucions. $\\Delta=0$: una (doble). $\\Delta<0$: cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICJFbCB2ZXJlZGljdGUgbm8gY29pbmNpZGVpeCBhbWIgZWwgc2lnbmUgcmVhbCBkZWwgZGlzY3JpbWluYW50IHF1ZSBoYXMgKG8gaGF1cmllcyBkJ2hhdmVyKSBjYWxjdWxhdDogdG9ybmEtaGkgYSBtaXJhci4iLCAiIiwgIkVsIHZlcmVkaWN0ZSBubyBjb2luY2lkZWl4IGFtYiBlbCBzaWduZSByZWFsIGRlbCBkaXNjcmltaW5hbnQgcXVlIGhhcyAobyBoYXVyaWVzIGQnaGF2ZXIpIGNhbGN1bGF0OiB0b3JuYS1oaSBhIG1pcmFyLiJdLCAiZXJyIjogWyJTSUdORV9QUk9EVUNURSIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0xLFxcIGI9LTgsXFwgYz0xNiQ6ICRcXERlbHRhPSgtOCleMi00XFxjZG90MVxcY2RvdDE2PTY0LTY0PTAkIiwgIiRcXERlbHRhPTAkICRcXFJpZ2h0YXJyb3ckIDEgc29sdWNpw7MgKGRvYmxlKSJdfQ=="
  },
  {
   "id": "81d",
   "ex": 81,
   "ap": "d",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$-x^2+x+1=0$",
   "opcions": [
    "1 solució (doble)",
    "2 solucions",
    "Cap solució real",
    "3 solucions"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "$\\Delta>0$: dues solucions. $\\Delta=0$: una (doble). $\\Delta<0$: cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCB2ZXJlZGljdGUgbm8gY29pbmNpZGVpeCBhbWIgZWwgc2lnbmUgcmVhbCBkZWwgZGlzY3JpbWluYW50IHF1ZSBoYXMgKG8gaGF1cmllcyBkJ2hhdmVyKSBjYWxjdWxhdDogdG9ybmEtaGkgYSBtaXJhci4iLCAiIiwgIlJldmlzYSBlbCBjw6BsY3VsIGRlICRcXERlbHRhPWJeMi00YWMkIGFtYiBlbHMgc2lnbmVzIGNvcnJlY3RlcyBkZSAkYSQsICRiJCBpICRjJDogdW4gZXJyb3IgZGUgc2lnbmUgYXF1w60gY2FudmlhIGNvbXBsZXRhbWVudCBlbCB2ZXJlZGljdGUuIiwgIlVuYSBlcXVhY2nDsyBkZSBzZWdvbiBncmF1IChncmF1IDIpIHTDqSBjb20gYSBtb2x0IDIgc29sdWNpb25zIHJlYWxzLCBtYWkgMzogcmV2aXNhIHF1ZSBoYXMgaWRlbnRpZmljYXQgYsOpIGVsIGdyYXUuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiU0lHTkVfUFJPRFVDVEUiLCAiUEFSSVRBVF9FWFBPTkVOVCJdLCAicmVzIjogWyIkYT0tMSxcXCBiPTEsXFwgYz0xJDogJFxcRGVsdGE9KDEpXjItNFxcY2RvdCgtMSlcXGNkb3QxPTErND01JCIsICIkXFxEZWx0YT4wJCAkXFxSaWdodGFycm93JCAyIHNvbHVjaW9ucyJdfQ=="
  },
  {
   "id": "81e",
   "ex": 81,
   "ap": "e",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$x^2+8x+16=0$",
   "opcions": [
    "Cap solució real",
    "2 solucions",
    "1 solució (doble)",
    "0 solucions"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "$\\Delta>0$: dues solucions. $\\Delta=0$: una (doble). $\\Delta<0$: cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICJFbCB2ZXJlZGljdGUgbm8gY29pbmNpZGVpeCBhbWIgZWwgc2lnbmUgcmVhbCBkZWwgZGlzY3JpbWluYW50IHF1ZSBoYXMgKG8gaGF1cmllcyBkJ2hhdmVyKSBjYWxjdWxhdDogdG9ybmEtaGkgYSBtaXJhci4iLCAiIiwgIkVsIHZlcmVkaWN0ZSBubyBjb2luY2lkZWl4IGFtYiBlbCBzaWduZSByZWFsIGRlbCBkaXNjcmltaW5hbnQgcXVlIGhhcyAobyBoYXVyaWVzIGQnaGF2ZXIpIGNhbGN1bGF0OiB0b3JuYS1oaSBhIG1pcmFyLiJdLCAiZXJyIjogWyJTSUdORV9QUk9EVUNURSIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyIkYT0xLFxcIGI9OCxcXCBjPTE2JDogJFxcRGVsdGE9KDgpXjItNFxcY2RvdDFcXGNkb3QxNj02NC02ND0wJCIsICIkXFxEZWx0YT0wJCAkXFxSaWdodGFycm93JCAxIHNvbHVjacOzIChkb2JsZSkiXX0="
  },
  {
   "id": "81f",
   "ex": 81,
   "ap": "f",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$2x^2-4x+13=0$",
   "opcions": [
    "Cap solució real",
    "1 solució (doble)",
    "Infinites solucions",
    "2 solucions"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "$\\Delta>0$: dues solucions. $\\Delta=0$: una (doble). $\\Delta<0$: cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdmVyZWRpY3RlIG5vIGNvaW5jaWRlaXggYW1iIGVsIHNpZ25lIHJlYWwgZGVsIGRpc2NyaW1pbmFudCBxdWUgaGFzIChvIGhhdXJpZXMgZCdoYXZlcikgY2FsY3VsYXQ6IHRvcm5hLWhpIGEgbWlyYXIuIiwgIlJldmlzYSBlbCBjw6BsY3VsIGRlICRcXERlbHRhPWJeMi00YWMkIGFtYiBlbHMgc2lnbmVzIGNvcnJlY3RlcyBkZSAkYSQsICRiJCBpICRjJDogdW4gZXJyb3IgZGUgc2lnbmUgYXF1w60gY2FudmlhIGNvbXBsZXRhbWVudCBlbCB2ZXJlZGljdGUuIiwgIlJldmlzYSBlbCBjw6BsY3VsIGRlICRcXERlbHRhPWJeMi00YWMkIGFtYiBlbHMgc2lnbmVzIGNvcnJlY3RlcyBkZSAkYSQsICRiJCBpICRjJDogdW4gZXJyb3IgZGUgc2lnbmUgYXF1w60gY2FudmlhIGNvbXBsZXRhbWVudCBlbCB2ZXJlZGljdGUuIl0sICJlcnIiOiBbIiIsICJWRVJFRElDVEVfSU5WRVJUSVQiLCAiU0lHTkVfUFJPRFVDVEUiLCAiU0lHTkVfUFJPRFVDVEUiXSwgInJlcyI6IFsiJGE9MixcXCBiPS00LFxcIGM9MTMkOiAkXFxEZWx0YT0oLTQpXjItNFxcY2RvdDJcXGNkb3QxMz0xNi0xMDQ9LTg4JCIsICIkXFxEZWx0YTwwJCAkXFxSaWdodGFycm93JCBDYXAgc29sdWNpw7MgcmVhbCJdfQ=="
  },
  {
   "id": "81g",
   "ex": 81,
   "ap": "g",
   "bloc": "formula_general",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Sense resoldre-les, esbrina el nombre de solucions d'aquestes equacions.",
   "enunciat": "$7x^2-3x+1=0$",
   "opcions": [
    "Infinites solucions",
    "2 solucions",
    "1 solució (doble)",
    "Cap solució real"
   ],
   "pistes": [
    "No cal resoldre l'equació: només calcula el discriminant $\\Delta=b^2-4ac$ i mira'n el signe.",
    "$\\Delta>0$: dues solucions. $\\Delta=0$: una (doble). $\\Delta<0$: cap de real."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICJSZXZpc2EgZWwgY8OgbGN1bCBkZSAkXFxEZWx0YT1iXjItNGFjJCBhbWIgZWxzIHNpZ25lcyBjb3JyZWN0ZXMgZGUgJGEkLCAkYiQgaSAkYyQ6IHVuIGVycm9yIGRlIHNpZ25lIGFxdcOtIGNhbnZpYSBjb21wbGV0YW1lbnQgZWwgdmVyZWRpY3RlLiIsICJFbCB2ZXJlZGljdGUgbm8gY29pbmNpZGVpeCBhbWIgZWwgc2lnbmUgcmVhbCBkZWwgZGlzY3JpbWluYW50IHF1ZSBoYXMgKG8gaGF1cmllcyBkJ2hhdmVyKSBjYWxjdWxhdDogdG9ybmEtaGkgYSBtaXJhci4iLCAiIl0sICJlcnIiOiBbIlNJR05FX1BST0RVQ1RFIiwgIlNJR05FX1BST0RVQ1RFIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICIiXSwgInJlcyI6IFsiJGE9NyxcXCBiPS0zLFxcIGM9MSQ6ICRcXERlbHRhPSgtMyleMi00XFxjZG90N1xcY2RvdDE9OS0yOD0tMTkkIiwgIiRcXERlbHRhPDAkICRcXFJpZ2h0YXJyb3ckIENhcCBzb2x1Y2nDsyByZWFsIl19"
  },
  {
   "id": "82a",
   "ex": 82,
   "ap": "a",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$x^2-7x=0$",
   "opcions": [
    "$x=7$",
    "$x=0,\\ 14$",
    "$x=-7,\\ 0$",
    "$x=0,\\ 7$"
   ],
   "pistes": [
    "Treu factor comú $x$ (o el factor comú que correspongui) per convertir-ho en un producte igualat a zero.",
    "Un producte val zero quan algun dels seus factors ho és: iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJFbiBkaXZpZGlyIHBlbCBmYWN0b3IgY29tw7osIHJldmlzYSBxdWUgY2FkYSB0ZXJtZSBxdWVkaSBkaXZpZGl0IGNvcnJlY3RhbWVudCwgbm8gbm9tw6lzIHVuLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCIsICJTSUdORV9GSU5BTCIsICIiXSwgInJlcyI6IFsiRmFjdG9yaXR6ZW0gdHJhaWVudCBlbCBmYWN0b3IgY29tw7ogY29ycmVzcG9uZW50IGkgaWd1YWxlbSBjYWRhIGZhY3RvciBhIHplcm8uIiwgIiR4PTAsXFwgNyQiXX0="
  },
  {
   "id": "82b",
   "ex": 82,
   "ap": "b",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$x^2+3x=0$",
   "opcions": [
    "$x=0,\\ -6$",
    "$x=-3$",
    "$x=0,\\ -3$",
    "$x=3,\\ 0$"
   ],
   "pistes": [
    "Treu factor comú $x$ (o el factor comú que correspongui) per convertir-ho en un producte igualat a zero.",
    "Un producte val zero quan algun dels seus factors ho és: iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiBkaXZpZGlyIHBlbCBmYWN0b3IgY29tw7osIHJldmlzYSBxdWUgY2FkYSB0ZXJtZSBxdWVkaSBkaXZpZGl0IGNvcnJlY3RhbWVudCwgbm8gbm9tw6lzIHVuLiIsICJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlIGxhIHNlZ29uYSBzb2x1Y2nDszogaWd1YWxhIGNhZGEgZmFjdG9yIGEgemVybyBwZXIgc2VwYXJhdCBpIGHDr2xsYSAkeCQgYW1iIGN1cmEuIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiRmFjdG9yaXR6ZW0gdHJhaWVudCBlbCBmYWN0b3IgY29tw7ogY29ycmVzcG9uZW50IGkgaWd1YWxlbSBjYWRhIGZhY3RvciBhIHplcm8uIiwgIiR4PTAsXFwgLTMkIl19"
  },
  {
   "id": "82c",
   "ex": 82,
   "ap": "c",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$x^2-25x=0$",
   "opcions": [
    "$x=25$",
    "$x=-25,\\ 0$",
    "$x=0,\\ 50$",
    "$x=0,\\ 25$"
   ],
   "pistes": [
    "Treu factor comú $x$ (o el factor comú que correspongui) per convertir-ho en un producte igualat a zero.",
    "Un producte val zero quan algun dels seus factors ho és: iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiRW4gZGl2aWRpciBwZWwgZmFjdG9yIGNvbcO6LCByZXZpc2EgcXVlIGNhZGEgdGVybWUgcXVlZGkgZGl2aWRpdCBjb3JyZWN0YW1lbnQsIG5vIG5vbcOpcyB1bi4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJTSUdORV9GSU5BTCIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCIsICIiXSwgInJlcyI6IFsiRmFjdG9yaXR6ZW0gdHJhaWVudCBlbCBmYWN0b3IgY29tw7ogY29ycmVzcG9uZW50IGkgaWd1YWxlbSBjYWRhIGZhY3RvciBhIHplcm8uIiwgIiR4PTAsXFwgMjUkIl19"
  },
  {
   "id": "82d",
   "ex": 82,
   "ap": "d",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$x^2-10x=0$",
   "opcions": [
    "$x=10$",
    "$x=0,\\ 20$",
    "$x=-10,\\ 0$",
    "$x=0,\\ 10$"
   ],
   "pistes": [
    "Treu factor comú $x$ (o el factor comú que correspongui) per convertir-ho en un producte igualat a zero.",
    "Un producte val zero quan algun dels seus factors ho és: iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJFbiBkaXZpZGlyIHBlbCBmYWN0b3IgY29tw7osIHJldmlzYSBxdWUgY2FkYSB0ZXJtZSBxdWVkaSBkaXZpZGl0IGNvcnJlY3RhbWVudCwgbm8gbm9tw6lzIHVuLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCIsICJTSUdORV9GSU5BTCIsICIiXSwgInJlcyI6IFsiRmFjdG9yaXR6ZW0gdHJhaWVudCBlbCBmYWN0b3IgY29tw7ogY29ycmVzcG9uZW50IGkgaWd1YWxlbSBjYWRhIGZhY3RvciBhIHplcm8uIiwgIiR4PTAsXFwgMTAkIl19"
  },
  {
   "id": "82e",
   "ex": 82,
   "ap": "e",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$16x(x-5)=0$",
   "opcions": [
    "$x=5$",
    "$x=0,\\ 5$",
    "$x=0,\\ 10$",
    "$x=-5,\\ 0$"
   ],
   "pistes": [
    "Treu factor comú $x$ (o el factor comú que correspongui) per convertir-ho en un producte igualat a zero.",
    "Un producte val zero quan algun dels seus factors ho és: iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICIiLCAiRW4gZGl2aWRpciBwZWwgZmFjdG9yIGNvbcO6LCByZXZpc2EgcXVlIGNhZGEgdGVybWUgcXVlZGkgZGl2aWRpdCBjb3JyZWN0YW1lbnQsIG5vIG5vbcOpcyB1bi4iLCAiUmV2aXNhIGVsIHNpZ25lIGRlIGxhIHNlZ29uYSBzb2x1Y2nDszogaWd1YWxhIGNhZGEgZmFjdG9yIGEgemVybyBwZXIgc2VwYXJhdCBpIGHDr2xsYSAkeCQgYW1iIGN1cmEuIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICIiLCAiRkFDVE9SX0NPTVVfTUFMX0RJVklESVQiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiRmFjdG9yaXR6ZW0gdHJhaWVudCBlbCBmYWN0b3IgY29tw7ogY29ycmVzcG9uZW50IGkgaWd1YWxlbSBjYWRhIGZhY3RvciBhIHplcm8uIiwgIiR4PTAsXFwgNSQiXX0="
  },
  {
   "id": "82f",
   "ex": 82,
   "ap": "f",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$3x^2-12x=0$",
   "opcions": [
    "$x=-4,\\ 0$",
    "$x=4$",
    "$x=0,\\ 4$",
    "$x=0,\\ 8$"
   ],
   "pistes": [
    "Treu factor comú $x$ (o el factor comú que correspongui) per convertir-ho en un producte igualat a zero.",
    "Un producte val zero quan algun dels seus factors ho és: iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiRW4gdHJldXJlIGZhY3RvciBjb23DuiAkeCQsIGwnZXF1YWNpw7MgdMOpIERVRVMgc29sdWNpb25zICh1bmEgw6lzIHNlbXByZSAkeD0wJCk6IG5vIGxhIGRlc2NhcnRpcy4iLCAiIiwgIkVuIGRpdmlkaXIgcGVsIGZhY3RvciBjb23DuiwgcmV2aXNhIHF1ZSBjYWRhIHRlcm1lIHF1ZWRpIGRpdmlkaXQgY29ycmVjdGFtZW50LCBubyBub23DqXMgdW4uIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICIiLCAiRkFDVE9SX0NPTVVfTUFMX0RJVklESVQiXSwgInJlcyI6IFsiRmFjdG9yaXR6ZW0gdHJhaWVudCBlbCBmYWN0b3IgY29tw7ogY29ycmVzcG9uZW50IGkgaWd1YWxlbSBjYWRhIGZhY3RvciBhIHplcm8uIiwgIiR4PTAsXFwgNCQiXX0="
  },
  {
   "id": "82g",
   "ex": 82,
   "ap": "g",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$3x = 4x^2-2x$",
   "opcions": [
    "$x=\\dfrac{5}{4}$",
    "$x=-\\dfrac{5}{4},\\ 0$",
    "$x=0,\\ \\dfrac{5}{4}$",
    "$x=0,\\ \\dfrac{5}{2}$"
   ],
   "pistes": [
    "Treu factor comú $x$ (o el factor comú que correspongui) per convertir-ho en un producte igualat a zero.",
    "Un producte val zero quan algun dels seus factors ho és: iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIiwgIkVuIGRpdmlkaXIgcGVsIGZhY3RvciBjb23DuiwgcmV2aXNhIHF1ZSBjYWRhIHRlcm1lIHF1ZWRpIGRpdmlkaXQgY29ycmVjdGFtZW50LCBubyBub23DqXMgdW4uIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJTSUdORV9GSU5BTCIsICIiLCAiRkFDVE9SX0NPTVVfTUFMX0RJVklESVQiXSwgInJlcyI6IFsiRmFjdG9yaXR6ZW0gdHJhaWVudCBlbCBmYWN0b3IgY29tw7ogY29ycmVzcG9uZW50IGkgaWd1YWxlbSBjYWRhIGZhY3RvciBhIHplcm8uIiwgIiR4PTAsXFwgXFxkZnJhY3s1fXs0fSQiXX0="
  },
  {
   "id": "82h",
   "ex": 82,
   "ap": "h",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$4x^2=5x$",
   "opcions": [
    "$x=-\\dfrac{5}{4},\\ 0$",
    "$x=0,\\ \\dfrac{5}{4}$",
    "$x=\\dfrac{5}{4}$",
    "$x=0,\\ \\dfrac{5}{2}$"
   ],
   "pistes": [
    "Treu factor comú $x$ (o el factor comú que correspongui) per convertir-ho en un producte igualat a zero.",
    "Un producte val zero quan algun dels seus factors ho és: iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIiwgIkVuIHRyZXVyZSBmYWN0b3IgY29tw7ogJHgkLCBsJ2VxdWFjacOzIHTDqSBEVUVTIHNvbHVjaW9ucyAodW5hIMOpcyBzZW1wcmUgJHg9MCQpOiBubyBsYSBkZXNjYXJ0aXMuIiwgIkVuIGRpdmlkaXIgcGVsIGZhY3RvciBjb23DuiwgcmV2aXNhIHF1ZSBjYWRhIHRlcm1lIHF1ZWRpIGRpdmlkaXQgY29ycmVjdGFtZW50LCBubyBub23DqXMgdW4uIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIiIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiLCAiRkFDVE9SX0NPTVVfTUFMX0RJVklESVQiXSwgInJlcyI6IFsiRmFjdG9yaXR6ZW0gdHJhaWVudCBlbCBmYWN0b3IgY29tw7ogY29ycmVzcG9uZW50IGkgaWd1YWxlbSBjYWRhIGZhY3RvciBhIHplcm8uIiwgIiR4PTAsXFwgXFxkZnJhY3s1fXs0fSQiXX0="
  },
  {
   "id": "82i",
   "ex": 82,
   "ap": "i",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol.",
   "enunciat": "$25x^2-100x=0$",
   "opcions": [
    "$x=0,\\ 8$",
    "$x=4$",
    "$x=-4,\\ 0$",
    "$x=0,\\ 4$"
   ],
   "pistes": [
    "Treu factor comú $x$ (o el factor comú que correspongui) per convertir-ho en un producte igualat a zero.",
    "Un producte val zero quan algun dels seus factors ho és: iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiBkaXZpZGlyIHBlbCBmYWN0b3IgY29tw7osIHJldmlzYSBxdWUgY2FkYSB0ZXJtZSBxdWVkaSBkaXZpZGl0IGNvcnJlY3RhbWVudCwgbm8gbm9tw6lzIHVuLiIsICJFbiB0cmV1cmUgZmFjdG9yIGNvbcO6ICR4JCwgbCdlcXVhY2nDsyB0w6kgRFVFUyBzb2x1Y2lvbnMgKHVuYSDDqXMgc2VtcHJlICR4PTAkKTogbm8gbGEgZGVzY2FydGlzLiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBpZ3VhbGEgY2FkYSBmYWN0b3IgYSB6ZXJvIHBlciBzZXBhcmF0IGkgYcOvbGxhICR4JCBhbWIgY3VyYS4iLCAiIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICJTSUdORV9GSU5BTCIsICIiXSwgInJlcyI6IFsiRmFjdG9yaXR6ZW0gdHJhaWVudCBlbCBmYWN0b3IgY29tw7ogY29ycmVzcG9uZW50IGkgaWd1YWxlbSBjYWRhIGZhY3RvciBhIHplcm8uIiwgIiR4PTAsXFwgNCQiXX0="
  },
  {
   "id": "83a",
   "ex": 83,
   "ap": "a",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x+2)(x-2) = 0$",
   "opcions": [
    "$x=2$",
    "$x=-2,\\ 2$",
    "$x=4$",
    "$x=-2$"
   ],
   "pistes": [
    "Un producte val zero quan algun dels seus factors ho és.",
    "Iguala cada factor a zero per separat i aïlla $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiBwcm9kdWN0ZSBkZSBkb3MgZmFjdG9ycyBpZ3VhbGF0IGEgemVybyB0w6kgRFVFUyBzb2x1Y2lvbnMsIHVuYSBwZXIgY2FkYSBmYWN0b3I6IG5vIGVuIGRlc2NhcnRpcyBjYXAuIiwgIiIsICJObyBjYWwgZGVzZW52b2x1cGFyIGVsIHByb2R1Y3RlIGNvbSAkeF4yLTQ9MCQgaSBkZXNwcsOpcyBcInN1bWFyXCIgcmVzOiBhbWIgZWxzIGZhY3RvcnMgamEgZG9uYXRzLCBpZ3VhbGEgY2FkYXNjdW4gYSB6ZXJvIGRpcmVjdGFtZW50LiIsICJVbiBwcm9kdWN0ZSBkZSBkb3MgZmFjdG9ycyBpZ3VhbGF0IGEgemVybyB0w6kgRFVFUyBzb2x1Y2lvbnMsIHVuYSBwZXIgY2FkYSBmYWN0b3I6IG5vIGVuIGRlc2NhcnRpcyBjYXAuIl0sICJlcnIiOiBbIkZBQ1RPUl9DT01VX0lOQ09NUExFVCIsICIiLCAiUE9URU5DSUFfREVfU1VNQSIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJCh4KzIpKHgtMik9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHgrMj0wJCBvICR4LTI9MCQiLCAiJHg9LTIkIG8gJHg9MiQiXX0="
  },
  {
   "id": "83b",
   "ex": 83,
   "ap": "b",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x-3)(x+3) = 0$",
   "opcions": [
    "$x=-3$",
    "$x=3$",
    "$x=-3,\\ 3$",
    "$x=9$"
   ],
   "pistes": [
    "Un producte val zero quan algun dels seus factors ho és.",
    "Iguala cada factor a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgcHJvZHVjdGUgdMOpIERVRVMgc29sdWNpb25zLCB1bmEgcGVyIGNhZGEgZmFjdG9yOiBubyBlbiBkZXNjYXJ0aXMgY2FwLiIsICJBcXVlc3QgcHJvZHVjdGUgdMOpIERVRVMgc29sdWNpb25zLCB1bmEgcGVyIGNhZGEgZmFjdG9yOiBubyBlbiBkZXNjYXJ0aXMgY2FwLiIsICIiLCAiTm8gY2FsIGNhbGN1bGFyIGNhcCBxdWFkcmF0OiBhbWIgZWxzIGZhY3RvcnMgamEgZG9uYXRzLCBpZ3VhbGEgY2FkYXNjdW4gYSB6ZXJvIGRpcmVjdGFtZW50LiJdLCAiZXJyIjogWyJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIiIsICJQT1RFTkNJQV9ERV9TVU1BIl0sICJyZXMiOiBbIiQoeC0zKSh4KzMpPTAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4LTM9MCQgbyAkeCszPTAkIiwgIiR4PTMkIG8gJHg9LTMkIl19"
  },
  {
   "id": "83c",
   "ex": 83,
   "ap": "c",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x+3)(2x-5)\\left(5 - \\dfrac{x}{2}\\right) = 0$",
   "opcions": [
    "$x=-3,\\ \\dfrac{5}{2},\\ -10$",
    "$x=-3,\\ \\dfrac{5}{2},\\ 10$",
    "$x=3,\\ -\\dfrac{5}{2},\\ -10$",
    "$x=-3,\\ \\dfrac{5}{2}$"
   ],
   "pistes": [
    "Aquí hi ha tres factors: n'hi ha prou que un sigui zero.",
    "Iguala cadascun dels tres factors a zero per separat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgZWwgdGVyY2VyIGZhY3RvcjogJDUtXFxmcmFje3h9ezJ9PTAgXFxSaWdodGFycm93IFxcZnJhY3t4fXsyfT01IFxcUmlnaHRhcnJvdyB4PTEwJCwgYW1iIHNpZ25lIHBvc2l0aXUuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgY2FkYSBzb2x1Y2nDsyBwZXIgc2VwYXJhdCBlbiBhw69sbGFyICR4JCBhIGNhZGEgZmFjdG9yLiIsICJIaSBoYSBUUkVTIGZhY3RvcnMgZW4gYXF1ZXN0IHByb2R1Y3RlLCBubyBkb3M6IGVsIHRlcmNlciwgJDUtXFxmcmFje3h9ezJ9JCwgdGFtYsOpIGFwb3J0YSBsYSBzZXZhIHNvbHVjacOzLiJdLCAiZXJyIjogWyJTSUdORV9RVU9DSUVOVCIsICIiLCAiU0lHTkVfRklOQUwiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIl0sICJyZXMiOiBbIiR4KzM9MCBcXFJpZ2h0YXJyb3cgeD0tMyQiLCAiJDJ4LTU9MCBcXFJpZ2h0YXJyb3cgeD1cXGRmcmFjezV9ezJ9JCIsICIkNS1cXGRmcmFje3h9ezJ9PTAgXFxSaWdodGFycm93IHg9MTAkIl19"
  },
  {
   "id": "83d",
   "ex": 83,
   "ap": "d",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x-5)^2 = 0$",
   "opcions": [
    "$x=5$ (doble)",
    "$x=25$",
    "$x=-5$ (doble)",
    "$x=5,\\ -5$"
   ],
   "pistes": [
    "Un quadrat només val zero quan la base val zero.",
    "Iguala la base a zero: és una solució doble."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm8gY2FsIGRlc2Vudm9sdXBhciBlbCBxdWFkcmF0OiBjb20gcXVlIGphIHZlIGZhY3Rvcml0emF0LCBuJ2hpIGhhIHByb3UgZCdpZ3VhbGFyIGxhIGJhc2UgYSB6ZXJvLiIsICJSZXZpc2EgZWwgc2lnbmU6IGRlICR4LTU9MCQgcydhw69sbGEgJHg9NSQsIG5vICR4PS01JC4iLCAiVW4gcXVhZHJhdCAkKHgtNSleMiQgbm9tw6lzIHZhbCB6ZXJvIHF1YW4gbGEgYmFzZSB2YWwgemVybzogJHgtNT0wJCwgdW5hIMO6bmljYSBzb2x1Y2nDsyAoZG9ibGUpLCBubyBkdWVzIGRlIHNpZ25lIG9wb3NhdC4iXSwgImVyciI6IFsiIiwgIlFVQURSQVRfSU5DT01QTEVUIiwgIlNJR05FX0ZJTkFMIiwgIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiXSwgInJlcyI6IFsiJCh4LTUpXjI9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHgtNT0wJCIsICIkeD01JCAoc29sdWNpw7MgZG9ibGUpIl19"
  },
  {
   "id": "83e",
   "ex": 83,
   "ap": "e",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$(x-2)^2 + x = x$",
   "opcions": [
    "$x=2,\\ 0$",
    "$x=4$",
    "$x=-2$ (doble)",
    "$x=2$ (doble)"
   ],
   "pistes": [
    "Simplifica primer: la $x$ apareix als dos costats i es cancel·la.",
    "Un cop simplificat queda un quadrat igualat a zero."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSAkeCQgZGVscyBkb3MgY29zdGF0cyBlcyBjYW5jZWzCt2xhIHByaW1lciAoJCt4PXgkKSwgZGVpeGFudCBub23DqXMgJCh4LTIpXjI9MCQ6IG5vIGhpIGhhIHVuYSBzZWdvbmEgc29sdWNpw7MgJHg9MCQuIiwgIk5vIGNhbCBkZXNlbnZvbHVwYXIgZWwgcXVhZHJhdDsgc2ltcGxpZmljYSBwcmltZXIgY2FuY2VswrdsYW50IGxhICR4JCBkZWxzIGRvcyBjb3N0YXRzIGkgaWd1YWxhIGxhIGJhc2UgYSB6ZXJvLiIsICJSZXZpc2EgZWwgc2lnbmU6IGRlICR4LTI9MCQgcydhw69sbGEgJHg9MiQsIG5vICR4PS0yJC4iLCAiIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiU0lHTkVfRklOQUwiLCAiIl0sICJyZXMiOiBbIkxhICR4JCBkZWxzIGRvcyBjb3N0YXRzIGVzIGNhbmNlbMK3bGE6ICQoeC0yKV4yK3g9eCBcXDtcXExvbmdyaWdodGFycm93XFw7ICh4LTIpXjI9MCQiLCAiJHg9MiQgKHNvbHVjacOzIGRvYmxlKSJdfQ=="
  },
  {
   "id": "83f",
   "ex": 83,
   "ap": "f",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula sense aplicar-hi la fórmula general.",
   "enunciat": "$x\\left(\\dfrac{3x}{4} - \\dfrac{4}{5}\\right)^2 = 0$",
   "opcions": [
    "$x=0,\\ \\dfrac{16}{15}$",
    "$x=0,\\ -\\dfrac{16}{15}$",
    "$x=\\dfrac{16}{15}$",
    "$x=0,\\ \\dfrac{4}{5}$"
   ],
   "pistes": [
    "Un producte val zero quan algun dels seus factors ho és: aquí hi ha el factor $x$ i el factor al quadrat.",
    "El factor al quadrat compta com una única solució, no cal repetir-la."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIHNpZ25lIGVuIGHDr2xsYXIgJHgkIGRpbnMgZGVsIHNlZ29uIGZhY3RvcjogJFxcZnJhY3szeH17NH09XFxmcmFjezR9ezV9IFxcUmlnaHRhcnJvdyB4PVxcZnJhY3sxNn17MTV9JCwgcG9zaXRpdS4iLCAiQXF1ZXN0IHByb2R1Y3RlIHTDqSBET1MgZmFjdG9ycyAoJHgkIGkgZWwgcXVhZHJhdCk6IGxhIHNvbHVjacOzICR4PTAkIGRlbCBwcmltZXIgZmFjdG9yIHRhbWLDqSBjb21wdGEsIG5vIG5vbcOpcyBsYSBkZSBkaW5zIGRlbCBxdWFkcmF0LiIsICJVbiBjb3AgYcOvbGxhZGEgJFxcZnJhY3szeH17NH09XFxmcmFjezR9ezV9JCwgZW5jYXJhIGZhbHRhIG11bHRpcGxpY2FyIHBlciAkXFxmcmFjezR9ezN9JCBwZXIgYWNhYmFyIGQnYcOvbGxhciAkeCQuIl0sICJlcnIiOiBbIiIsICJTSUdORV9GSU5BTCIsICJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiLCAiQUlMTEFNRU5UX0lOQ09NUExFVCJdLCAicmVzIjogWyIkeD0wJCBvICRcXGxlZnQoXFxkZnJhY3szeH17NH0tXFxkZnJhY3s0fXs1fVxccmlnaHQpXjI9MCQiLCAiRGVsIHNlZ29uIGZhY3RvcjogJFxcZGZyYWN7M3h9ezR9PVxcZGZyYWN7NH17NX0gXFxSaWdodGFycm93IHg9XFxkZnJhY3sxNn17MTV9JCJdfQ=="
  },
  {
   "id": "84a",
   "ex": 84,
   "ap": "a",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$(x+1)(x-3) + 3 = 0$",
   "opcions": [
    "$x=-2,\\ 0$",
    "$x=0,\\ -2$",
    "$x=-1,\\ 3$",
    "$x=0,\\ 2$"
   ],
   "pistes": [
    "Desenvolupa el producte $(x+1)(x-3)$ i simplifica sumant-hi el $3$.",
    "Un cop simplificat, hauria de quedar una equació incompleta (sense terme independent)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgbGEgc2Vnb25hIHNvbHVjacOzOiBkZSAkeCh4LTIpPTAkIHN1cnQgJHg9MCQgbyAkeD0yJCwgbm8gJHg9LTIkLiIsICJSZXZpc2EgZWwgZGVzZW52b2x1cGFtZW50IGRlICQoeCsxKSh4LTMpJDogZWwgdGVybWUgZW4gJHgkIHN1cnQgZGUgJC0zeCt4PS0yeCQsIGkgc3VtYW50IGVsICQrMyQgZmluYWwgZWwgdGVybWUgaW5kZXBlbmRlbnQgcydhbnVswrdsYS4iLCAiQXF1ZXN0cyBzZXJpZW4gZWxzIHZhbG9ycyBxdWUgYW51bMK3bGVuICQoeCsxKSQgaSAkKHgtMykkIHBlciBzZXBhcmF0LCBwZXLDsiBsJ2VxdWFjacOzIHTDqSB1biAkKzMkIGFkZGljaW9uYWwgcXVlIGNhbnZpYSBlbCByZXN1bHRhdDogcHJpbWVyIGNhbCBkZXNlbnZvbHVwYXIgaSBzaW1wbGlmaWNhci4iLCAiIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIiJdLCAicmVzIjogWyIkKHgrMSkoeC0zKSszPTAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4XjItM3greC0zKzM9MCQiLCAiJHheMi0yeD0wIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeCh4LTIpPTAkIiwgIiR4PTAkIG8gJHg9MiQiXX0="
  },
  {
   "id": "84b",
   "ex": 84,
   "ap": "b",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$(x+9)(x-9) = 3(x-27)$",
   "opcions": [
    "$x=-9,\\ 9$",
    "$x=0,\\ 9$",
    "$x=0,\\ 3$",
    "$x=0,\\ -3$"
   ],
   "pistes": [
    "Desenvolupa $(x+9)(x-9)$ com a diferència de quadrats i el costat dret per separat.",
    "Passa tot a un costat: hauria de quedar una equació incompleta."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3RzIHNlcmllbiBlbHMgdmFsb3JzIHF1ZSBhbnVswrdsZW4gZWwgY29zdGF0IGVzcXVlcnJlIHRvdCBzb2wsIHBlcsOyIGwnZXF1YWNpw7MgdMOpIHVuIGNvc3RhdCBkcmV0IHF1ZSBjYWwgZGVzZW52b2x1cGFyIGkgcGFzc2FyIGEgbCdlc3F1ZXJyYSBhYmFucyBkZSByZXNvbGRyZS4iLCAiUmV2aXNhIGVsIHBhcyAkeF4yLTgxPTN4LTgxJDogZWwgJC04MSQgZXMgY2FuY2VswrdsYSBhbHMgZG9zIGNvc3RhdHMsIGkgcXVlZGEgJHheMj0zeCQsIG5vICR4XjI9OXgkLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lOiBkZSAkeCh4LTMpPTAkIHN1cnQgJHg9MCQgbyAkeD0zJCwgbm8gJHg9LTMkLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIiQoeCs5KSh4LTkpPTMoeC0yNykgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4XjItODE9M3gtODEkIiwgIiR4XjItM3g9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IHgoeC0zKT0wJCIsICIkeD0wJCBvICR4PTMkIl19"
  },
  {
   "id": "84c",
   "ex": 84,
   "ap": "c",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$x(3x-2) = 65$",
   "opcions": [
    "$x=-\\dfrac{13}{3},\\ 5$",
    "$x=-\\dfrac{1}{3},\\ 1$",
    "$x=\\dfrac{13}{3},\\ -5$",
    "$x=\\dfrac{13}{3},\\ 5$"
   ],
   "pistes": [
    "Desenvolupa el producte per obtenir una equació de la forma $ax^2+bx+c=0$.",
    "Aplica la fórmula general amb $a=3,\\ b=-2,\\ c=-65$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIGRpc2NyaW1pbmFudDogJFxcRGVsdGE9KC0yKV4yLTRcXGNkb3QzXFxjZG90KC02NSk9NCs3ODA9Nzg0JCwgaSAkXFxzcXJ0ezc4NH09MjgkLCBubyB1biB2YWxvciBtw6lzIHBldGl0LiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgJC1iJCBhbCBudW1lcmFkb3IgZGUgbGEgZsOzcm11bGEgZ2VuZXJhbDogbCdlcXVhY2nDsyDDqXMgJDN4XjItMngtNjU9MCQsIGFtYiAkYj0tMiQuIiwgIlVuYSBkZSBsZXMgZHVlcyBzb2x1Y2lvbnMgw6lzIG5lZ2F0aXZhOiByZXZpc2EgZWxzIGRvcyBjYXNvcyBkZWwgJFxccG0kIHBlciBzZXBhcmF0LiJdLCAiZXJyIjogWyIiLCAiT1JEUkVfRElWSVNJT05TIiwgIlNJR05FX1FVT0NJRU5UIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIiR4KDN4LTIpPTY1IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgM3heMi0yeC02NT0wJCIsICIkXFxEZWx0YT0oLTIpXjItNFxcY2RvdDNcXGNkb3QoLTY1KT00Kzc4MD03ODQkLCAkXFxzcXJ0ezc4NH09MjgkIiwgIiR4PVxcZGZyYWN7MlxccG0yOH17Nn0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PTUkIG8gJHg9XFxkZnJhY3stMjZ9ezZ9PS1cXGRmcmFjezEzfXszfSQiXX0="
  },
  {
   "id": "84d",
   "ex": 84,
   "ap": "d",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$4x - (x^2-4) = 2x - 4$",
   "opcions": [
    "$x=2,\\ 4$",
    "$x=-8,\\ 1$",
    "$x=-2,\\ 4$",
    "$x=2,\\ -4$"
   ],
   "pistes": [
    "Distribueix el $-(x^2-4)$ i passa tots els termes a un costat.",
    "Aplica la fórmula general amb $a=-1,\\ b=2,\\ c=8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgcXVlIGhhcyBwYXNzYXQgVE9UUyBlbHMgdGVybWVzIGEgdW4gY29zdGF0OiAkNHgteF4yKzQtMngrND0wJCBkb25hICQteF4yKzJ4Kzg9MCQuIiwgIlJldmlzYSBlbCBzaWduZSBlbiBkaXN0cmlidWlyICQtKHheMi00KSQ6IGVsICQtJCBhZmVjdGEgZWxzIGRvcyB0ZXJtZXMsIGRvbmFudCAkLXheMis0JCwgbm8gbm9tw6lzIGVsIHByaW1lci4iLCAiIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkLWIkIGFsIG51bWVyYWRvcjogbCdlcXVhY2nDsyByZW9yZGVuYWRhIMOpcyAkLXheMisyeCs4PTAkLCBhbWIgJGI9MiQsIGFpeMOtIHF1ZSBlbCBudW1lcmFkb3IgcG9ydGEgJC0yJC4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJNRU5ZU19QQVJFTlRFU0kiLCAiIiwgIlNJR05FX1FVT0NJRU5UIl0sICJyZXMiOiBbIiQ0eC0oeF4yLTQpPTJ4LTQgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA0eC14XjIrND0yeC00JCIsICIkLXheMis0eC0yeCs0KzQ9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IC14XjIrMngrOD0wJCIsICIkXFxEZWx0YT0yXjItNFxcY2RvdCgtMSlcXGNkb3Q4PTQrMzI9MzYkLCAkXFxzcXJ0ezM2fT02JDogJHg9XFxkZnJhY3stMlxccG02fXstMn0gXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4PS0yJCBvICR4PTQkIl19"
  },
  {
   "id": "84e",
   "ex": 84,
   "ap": "e",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$(2x+3)(2x-3) = 135$",
   "opcions": [
    "$x=6$",
    "$x=-72,\\ 72$",
    "$x=-6,\\ 6$",
    "$x=-3,\\ 3$"
   ],
   "pistes": [
    "Desenvolupa el producte com a diferència de quadrats: $(2x+3)(2x-3)=4x^2-9$.",
    "Aïlla $x^2$ i fes l'arrel quadrada als dos costats (recorda el $\\pm$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbiBxdWFkcmF0ICR4XjI9MzYkIHTDqSBEVUVTIHNvbHVjaW9ucywgJHg9NiQgaSAkeD0tNiQ6IG5vIGVuIGRlc2NhcnRpcyBjYXAgYXJyYW4gZGUgbCdhcnJlbCBxdWFkcmFkYS4iLCAiUmV2aXNhIGVsIHBhcyAkNHheMj0xNDQgXFxSaWdodGFycm93IHheMj0zNiQ6IGNhbCBkaXZpZGlyIGVudHJlICQ0JCBhYmFucyBkZSBmZXIgbCdhcnJlbCBxdWFkcmFkYSwgbm8gZmVyLWxhIGRpcmVjdGFtZW50IHNvYnJlICQxNDQkLiIsICIiLCAiUmV2aXNhIGVsIGRlc2Vudm9sdXBhbWVudCAkKDJ4KzMpKDJ4LTMpPTR4XjItOSQ6IGVsIHRlcm1lIGVuICR4JCB2YSBtdWx0aXBsaWNhdCBwZXIgJDQkLCBubyBwZXIgJDEkLiJdLCAiZXJyIjogWyJGQUNUT1JfQ09NVV9JTkNPTVBMRVQiLCAiT1JEUkVfQVJSRUxfRElWSVNJTyIsICIiLCAiUVVBRFJBVF9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJCgyeCszKSgyeC0zKT0xMzUgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA0eF4yLTk9MTM1JCIsICIkNHheMj0xNDQgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4XjI9MzYkIiwgIiR4PVxccG02JCJdfQ=="
  },
  {
   "id": "84f",
   "ex": 84,
   "ap": "f",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$x^2 - \\dfrac{23}{4}x = 18$",
   "opcions": [
    "$x=-18,\\ 16$",
    "$x=-\\dfrac{9}{4},\\ 8$",
    "$x=\\dfrac{9}{4},\\ -8$",
    "$x=-\\dfrac{9}{8},\\ 4$"
   ],
   "pistes": [
    "Multiplica tota l'equació per $4$ per eliminar el denominador i obtenir una equació de segon grau amb coeficients enters.",
    "Aplica la fórmula general amb $a=4,\\ b=-23,\\ c=-72$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMZXMgZnJhY2Npb25zIGZpbmFscyBlbmNhcmEgZXMgcG9kZW4gc2ltcGxpZmljYXI6IHJldmlzYSBlbCBtLmMuZC4gZGUgbnVtZXJhZG9yIGkgZGVub21pbmFkb3IgYSBjYWRhIHNvbHVjacOzLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICQtYiQgYWwgbnVtZXJhZG9yOiBhbWIgJGI9LTIzJCwgZWwgbnVtZXJhZG9yIHBvcnRhICQrMjMkLiIsICJBbCBmaW5hbCBjYWwgZGl2aWRpciBlbnRyZSAkMmE9OCQsIG5vIGVudHJlIHVuIGFsdHJlIHZhbG9yOiByZXZpc2EgZWwgZGVub21pbmFkb3IgZGUgbGVzIGR1ZXMgc29sdWNpb25zLiJdLCAiZXJyIjogWyJTSU1QTElGSUNBQ0lPX0lOQ09NUExFVEEiLCAiIiwgIlNJR05FX1FVT0NJRU5UIiwgIk9SRFJFX0RJVklTSU9OUyJdLCAicmVzIjogWyJNdWx0aXBsaXF1ZW0gcGVyICQ0JDogJDR4XjItMjN4PTcyIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNHheMi0yM3gtNzI9MCQiLCAiJFxcRGVsdGE9KC0yMyleMi00XFxjZG90NFxcY2RvdCgtNzIpPTUyOSsxMTUyPTE2ODEkLCAkXFxzcXJ0ezE2ODF9PTQxJCIsICIkeD1cXGRmcmFjezIzXFxwbTQxfXs4fSBcXDtcXExvbmdyaWdodGFycm93XFw7IHg9OCQgbyAkeD1cXGRmcmFjey0xOH17OH09LVxcZGZyYWN7OX17NH0kIl19"
  },
  {
   "id": "84g",
   "ex": 84,
   "ap": "g",
   "bloc": "factoritzacio",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol les equacions següents.",
   "enunciat": "$x^2 - 7x + \\dfrac{13}{4} = 0$",
   "opcions": [
    "$x=\\dfrac{1}{2},\\ \\dfrac{13}{2}$",
    "$x=-\\dfrac{1}{2},\\ -\\dfrac{13}{2}$",
    "$x=\\dfrac{1}{4},\\ \\dfrac{13}{4}$",
    "$x=\\dfrac{1}{2},\\ 6$"
   ],
   "pistes": [
    "El terme independent ja és una fracció: pots deixar l'equació tal qual i aplicar la fórmula directament amb $c=\\frac{13}{4}$.",
    "Aplica la fórmula general amb $a=1,\\ b=-7,\\ c=\\frac{13}{4}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICQtYiQgYWwgbnVtZXJhZG9yOiBhbWIgJGI9LTckLCBlbCBudW1lcmFkb3IgcG9ydGEgJCs3JCwgaSBlbCByZXN1bHRhdCBmaW5hbCDDqXMgcG9zaXRpdS4iLCAiQWwgZmluYWwgY2FsIGRpdmlkaXIgZW50cmUgJDJhPTIkIChwZXJxdcOoICRhPTEkKSwgbm8gZW50cmUgJDQkOiByZXZpc2EgZWwgZGVub21pbmFkb3IgZGUgbGVzIGR1ZXMgc29sdWNpb25zLiIsICJSZXZpc2EgbGEgc2Vnb25hIHNvbHVjacOzOiAkXFxkZnJhY3sxM317Mn0kIG5vIGVzIHNpbXBsaWZpY2EgYSAkNiQ7IGNvbXByb3ZhIGxhIGRpdmlzacOzICRcXGRmcmFjezcrNn17Mn0kLiJdLCAiZXJyIjogWyIiLCAiU0lHTkVfUVVPQ0lFTlQiLCAiT1JEUkVfRElWSVNJT05TIiwgIkFSSVRNRVRJQ0FfUEFTX0lOVEVSTUVESSJdLCAicmVzIjogWyIkYT0xLFxcIGI9LTcsXFwgYz1cXGRmcmFjezEzfXs0fSQ6ICRcXERlbHRhPSgtNyleMi00XFxjZG90MVxcY2RvdFxcZGZyYWN7MTN9ezR9PTQ5LTEzPTM2JCIsICIkXFxzcXJ0ezM2fT02JDogJHg9XFxkZnJhY3s3XFxwbTZ9ezJ9JCIsICIkeD1cXGRmcmFjezEzfXsyfSQgbyAkeD1cXGRmcmFjezF9ezJ9JCJdfQ=="
  },
  {
   "id": "85a",
   "ex": 85,
   "ap": "a",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x+y=2\\\\ x-y=6\\end{array}\\right\\}$",
   "opcions": [
    "$x=4,\\ y=-2$",
    "$x=-2,\\ y=4$",
    "$x=8,\\ y=-6$",
    "$x=4,\\ y=2$"
   ],
   "pistes": [
    "Suma les dues equacions directament: els termes en $y$ són oposats i s'anul·len (mètode de reducció).",
    "Un cop trobada $x$, substitueix-la a qualsevol de les dues equacions per trobar $y$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCBlbHMgdmFsb3JzIGRlICR4JCBpICR5JDogdG9ybmEgYSBzdWJzdGl0dWlyIGVsIHZhbG9yIHRyb2JhdCBhIHVuYSBkZSBsZXMgZXF1YWNpb25zIG9yaWdpbmFscyBwZXIgY29tcHJvdmFyIHF1aW4gw6lzIHF1aW4uIiwgIkRlc3Byw6lzIGRlIHN1bWFyIGxlcyBkdWVzIGVxdWFjaW9ucyB0J2hhIGRlIHF1ZWRhciAkMng9OCQ6IGVuY2FyYSBmYWx0YSBkaXZpZGlyIGVudHJlICQyJCBwZXIgYcOvbGxhciAkeCQuIiwgIlVuIGNvcCB0cm9iYXQgJHg9NCQsIHN1YnN0aXR1ZWl4LWxvIGEgJHgreT0yJCBhbWIgY3VyYSBhbWIgZWxzIHNpZ25lczogJDQreT0yIFxcUmlnaHRhcnJvdyB5PS0yJC4iXSwgImVyciI6IFsiIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIkZBQ1RPUl9DT01VX01BTF9ESVZJRElUIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIlN1bWFudCBsZXMgZHVlcyBlcXVhY2lvbnMsIGxhICR5JCBzJ2VsaW1pbmE6ICRcXGJlZ2lue2FycmF5fXtyfXgreT0yXFxcXHgteT02XFxcXFxcaGxpbmUgMng9OFxcZW5ke2FycmF5fSQiLCAiJHg9NCQiLCAiJHk9Mi00PS0yJCJdfQ=="
  },
  {
   "id": "85b",
   "ex": 85,
   "ap": "b",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}2x+3y=4\\\\ 2x-3y=4\\end{array}\\right\\}$",
   "opcions": [
    "$x=2,\\ y=0$",
    "$x=0,\\ y=2$",
    "$x=2,\\ y=\\dfrac{4}{3}$",
    "$x=4,\\ y=0$"
   ],
   "pistes": [
    "Els coeficients de $y$ ja són oposats: suma les dues equacions directament (reducció).",
    "Un cop trobada $x$, substitueix per trobar $y$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCBlbHMgdmFsb3JzIGRlICR4JCBpICR5JDogdG9ybmEgYSBzdWJzdGl0dWlyIGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsIHBlciBjb25maXJtYXIgcXVpbiB2YWxvciDDqXMgZGUgcXVpbmEgaW5jw7Jnbml0YS4iLCAiVW4gY29wICR4PTIkLCBzdWJzdGl0dWVpeCBhICQyeCszeT00JDogJDQrM3k9NCBcXFJpZ2h0YXJyb3cgM3k9MCBcXFJpZ2h0YXJyb3cgeT0wJC4iLCAiRGVzcHLDqXMgZGUgc3VtYXIgbGVzIGVxdWFjaW9ucyB0J2hhIGRlIHF1ZWRhciAkNHg9OCQ6IGVuY2FyYSBmYWx0YSBkaXZpZGlyIGVudHJlICQ0JCBwZXIgYcOvbGxhciAkeCQuIl0sICJlcnIiOiBbIiIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICJTSUdORV9GSU5BTCIsICJGQUNUT1JfQ09NVV9NQUxfRElWSURJVCJdLCAicmVzIjogWyJTdW1hbnQgbGVzIGVxdWFjaW9ucywgbGEgJHkkIHMnZWxpbWluYTogJFxcYmVnaW57YXJyYXl9e3J9MngrM3k9NFxcXFwyeC0zeT00XFxcXFxcaGxpbmUgNHg9OFxcZW5ke2FycmF5fSQiLCAiJHg9MiQiLCAiJDN5PTQtMlxcY2RvdDI9MCBcXFJpZ2h0YXJyb3cgeT0wJCJdfQ=="
  },
  {
   "id": "85c",
   "ex": 85,
   "ap": "c",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x+2y=5\\\\ 2x+5y=11\\end{array}\\right\\}$",
   "opcions": [
    "$x=3,\\ y=1$",
    "$x=1,\\ y=3$",
    "$x=-5,\\ y=1$",
    "$x=3,\\ y=-1$"
   ],
   "pistes": [
    "Multiplica la primera equació per $-2$ perquè els coeficients de $x$ es cancel·lin en sumar (reducció).",
    "Un cop trobada $y$, substitueix a qualsevol equació original per trobar $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IHN1YnN0aXR1ZWl4IGEgbCdlcXVhY2nDsyBvcmlnaW5hbCBwZXIgY29tcHJvdmFyIHF1aW4gdmFsb3IgY29ycmVzcG9uIGEgcXVpbmEgaW5jw7Jnbml0YS4iLCAiRW4gbXVsdGlwbGljYXIgbGEgcHJpbWVyYSBlcXVhY2nDsyBwZXIgJC0yJCwgVE9UUyBlbHMgc2V1cyB0ZXJtZXMgZXMgbXVsdGlwbGlxdWVuLCBpbmNsb2VudC1oaSBlbCAkNSQgZGUgbGEgZHJldGEuIiwgIlVuIGNvcCAkeT0xJCwgc3Vic3RpdHVlaXggYSAkeCsyeT01JCBhbWIgY3VyYTogJHgrMlxcY2RvdDE9NSBcXFJpZ2h0YXJyb3cgeD0zJC4iXSwgImVyciI6IFsiIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIkVOVEVSX01VTFRJUExJQ0FfREVOT01JTkFET1IiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiTXVsdGlwbGlxdWVtIGxhIHByaW1lcmEgcGVyICQtMiQ6ICRcXGJlZ2lue2FycmF5fXtyfS0yeC00eT0tMTBcXFxcMngrNXk9MTFcXFxcXFxobGluZSB5PTFcXGVuZHthcnJheX0kIiwgIkFtYiAkeT0xJDogJHgrMlxcY2RvdDE9NSBcXFJpZ2h0YXJyb3cgeD0zJCJdfQ=="
  },
  {
   "id": "85d",
   "ex": 85,
   "ap": "d",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}2x+3y=8\\\\ x+2y=3\\end{array}\\right\\}$",
   "opcions": [
    "$x=7,\\ y=2$",
    "$x=7,\\ y=-2$",
    "$x=1,\\ y=2$",
    "$x=-2,\\ y=7$"
   ],
   "pistes": [
    "Multiplica la segona equació per $-2$ perquè els coeficients de $x$ es cancel·lin en sumar.",
    "Un cop trobada $y$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiBjb3AgJHg9NyQsIHN1YnN0aXR1ZWl4IGEgJHgrMnk9MyQ6ICQ3KzJ5PTMgXFxSaWdodGFycm93IHk9LTIkLCBhbWIgc2lnbmUgbmVnYXRpdS4iLCAiIiwgIkVuIG11bHRpcGxpY2FyIGxhIHNlZ29uYSBlcXVhY2nDsyBwZXIgJC0yJCwgVE9UUyBlbHMgc2V1cyB0ZXJtZXMgZXMgbXVsdGlwbGlxdWVuLCBpbmNsb2VudC1oaSBlbCAkMyQgZGUgbGEgZHJldGEuIiwgIkhhcyBpbnRlcmNhbnZpYXQgJHgkIGkgJHkkOiBjb21wcm92YS1obyBzdWJzdGl0dWludCBhIGwnZXF1YWNpw7Mgb3JpZ2luYWwuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIiIsICJFTlRFUl9NVUxUSVBMSUNBX0RFTk9NSU5BRE9SIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIl0sICJyZXMiOiBbIk11bHRpcGxpcXVlbSBsYSBzZWdvbmEgcGVyICQtMiQ6ICRcXGJlZ2lue2FycmF5fXtyfTJ4KzN5PThcXFxcLTJ4LTR5PS02XFxcXFxcaGxpbmUgLXk9MlxcZW5ke2FycmF5fSQiLCAiJHk9LTIkOyBzdWJzdGl0dWludDogJHgrMlxcY2RvdCgtMik9MyBcXFJpZ2h0YXJyb3cgeD03JCJdfQ=="
  },
  {
   "id": "85e",
   "ex": 85,
   "ap": "e",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x+y=9\\\\ 20x-3y=-4\\end{array}\\right\\}$",
   "opcions": [
    "$x=1,\\ y=-8$",
    "$x=8,\\ y=1$",
    "$x=-1,\\ y=10$",
    "$x=1,\\ y=8$"
   ],
   "pistes": [
    "Aïlla $x=9-y$ de la primera equació (substitució).",
    "Substitueix aquesta expressió a la segona equació i resol per $y$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBjb3AgJHk9OCQsIHN1YnN0aXR1ZWl4IGEgJHgreT05JDogJHg9OS04PTEkLCBhbWIgc2lnbmUgcG9zaXRpdS4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IHN1YnN0aXR1ZWl4IGEgbCdlcXVhY2nDsyBvcmlnaW5hbCBwZXIgY29tcHJvdmFyLWhvLiIsICJSZXZpc2EgZWwgc2lnbmUgZW4gYcOvbGxhciAkeSQgZGUgbGEgc2Vnb25hIGVxdWFjacOzOiAkLTIzeT0tMTg0IFxcUmlnaHRhcnJvdyB5PTgkLCBubyB1biBhbHRyZSB2YWxvci4iLCAiIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiIl0sICJyZXMiOiBbIkHDr2xsZW0gJHg9OS15JCBpIGhvIHBvc2VtIGEgbGEgc2Vnb25hOiAkMjAoOS15KS0zeT0tNCBcXDtcXExvbmdyaWdodGFycm93XFw7IDE4MC0yMHktM3k9LTQkIiwgIiQtMjN5PS0xODQgXFxSaWdodGFycm93IHk9OCQiLCAiJHg9OS04PTEkIl19"
  },
  {
   "id": "85f",
   "ex": 85,
   "ap": "f",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}2x-3y=-25\\\\ 12x-3y=75\\end{array}\\right\\}$",
   "opcions": [
    "$x=10,\\ y=-15$",
    "$x=-10,\\ y=15$",
    "$x=10,\\ y=15$",
    "$x=15,\\ y=10$"
   ],
   "pistes": [
    "Resta la segona equació de la primera: el coeficient de $y$ coincideix i s'anul·la (reducció).",
    "Un cop trobada $x$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbiBjb3AgJHg9MTAkLCBzdWJzdGl0dWVpeCBhICQyeC0zeT0tMjUkOiAkMjAtM3k9LTI1IFxcUmlnaHRhcnJvdyB5PTE1JCwgYW1iIHNpZ25lIHBvc2l0aXUuIiwgIlJldmlzYSBlbCBzaWduZSBlbiBhw69sbGFyICR4JDogJC0xMHg9LTEwMCBcXFJpZ2h0YXJyb3cgeD0xMCQsIHBvc2l0aXUuIiwgIiIsICJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICJTSUdORV9GSU5BTCIsICIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiUmVzdGFudCwgbGEgJHkkIHMnZWxpbWluYTogJFxcYmVnaW57YXJyYXl9e3J9MngtM3k9LTI1XFxcXDEyeC0zeT03NVxcXFxcXGhsaW5lIC0xMHg9LTEwMFxcZW5ke2FycmF5fSQiLCAiJHg9MTAkOyBzdWJzdGl0dWludDogJDIwLTN5PS0yNSBcXFJpZ2h0YXJyb3cgeT0xNSQiXX0="
  },
  {
   "id": "85g",
   "ex": 85,
   "ap": "g",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x+2y=5\\\\ 2x+y=7\\end{array}\\right\\}$",
   "opcions": [
    "$x=1,\\ y=3$",
    "$x=3,\\ y=1$",
    "$x=3,\\ y=-1$",
    "$x=9,\\ y=-2$"
   ],
   "pistes": [
    "Multiplica la segona equació per $-2$ perquè els coeficients de $x$ es cancel·lin en sumar.",
    "Un cop trobada $x$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiIsICIiLCAiVW4gY29wICR4PTMkLCBzdWJzdGl0dWVpeCBhICR4KzJ5PTUkOiAkMysyeT01IFxcUmlnaHRhcnJvdyB5PTEkLCBwb3NpdGl1LiIsICJFbiBtdWx0aXBsaWNhciBsYSBzZWdvbmEgZXF1YWNpw7MgcGVyICQtMiQsIFRPVFMgZWxzIHNldXMgdGVybWVzIGVzIG11bHRpcGxpcXVlbiwgaW5jbG9lbnQtaGkgZWwgJDckIGRlIGxhIGRyZXRhLiJdLCAiZXJyIjogWyJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICIiLCAiU0lHTkVfRklOQUwiLCAiRU5URVJfTVVMVElQTElDQV9ERU5PTUlOQURPUiJdLCAicmVzIjogWyJNdWx0aXBsaXF1ZW0gbGEgc2Vnb25hIHBlciAkLTIkOiAkXFxiZWdpbnthcnJheX17cn14KzJ5PTVcXFxcLTR4LTJ5PS0xNFxcXFxcXGhsaW5lIC0zeD0tOVxcZW5ke2FycmF5fSQiLCAiJHg9MyQ7IHN1YnN0aXR1aW50OiAkMysyeT01IFxcUmlnaHRhcnJvdyB5PTEkIl19"
  },
  {
   "id": "85h",
   "ex": 85,
   "ap": "h",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Resol pel mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}5x-y=23\\\\ -9x+5y=13\\end{array}\\right\\}$",
   "opcions": [
    "$x=8,\\ y=17$",
    "$x=17,\\ y=8$",
    "$x=-8,\\ y=-17$",
    "$x=8,\\ y=-17$"
   ],
   "pistes": [
    "Aïlla $y=5x-23$ de la primera equació (substitució).",
    "Substitueix aquesta expressió a la segona equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgbCdlcXVhY2nDsyBvcmlnaW5hbC4iLCAiUmV2aXNhIGVsIHNpZ25lIGVuIGHDr2xsYXIgJHgkOiAkMTZ4PTEyOCBcXFJpZ2h0YXJyb3cgeD04JCwgcG9zaXRpdS4iLCAiVW4gY29wICR4PTgkLCBzdWJzdGl0dWVpeCBhICR5PTV4LTIzJDogJHk9NVxcY2RvdDgtMjM9MTckLCBhbWIgc2lnbmUgcG9zaXRpdS4iXSwgImVyciI6IFsiIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlNJR05FX0ZJTkFMIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIkHDr2xsZW0gJHk9NXgtMjMkIGkgaG8gcG9zZW0gYSBsYSBzZWdvbmE6ICQtOXgrNSg1eC0yMyk9MTMgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAtOXgrMjV4LTExNT0xMyQiLCAiJDE2eD0xMjggXFxSaWdodGFycm93IHg9OCQiLCAiJHk9NVxcY2RvdDgtMjM9MTckIl19"
  },
  {
   "id": "86a",
   "ex": 86,
   "ap": "a",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x-3y=4\\\\ 2x-5y=8\\end{array}\\right\\}$",
   "opcions": [
    "$x=0,\\ y=4$",
    "$x=4,\\ y=-8$",
    "$x=-4,\\ y=0$",
    "$x=4,\\ y=0$"
   ],
   "pistes": [
    "Multiplica la primera equació per $-2$ perquè els coeficients de $x$ es cancel·lin (reducció).",
    "Un cop trobada $y$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiIsICJSZXZpc2EgZWwgcmVzdWx0YXQgZGUgc3VtYXIgbGVzIGR1ZXMgZXF1YWNpb25zIHRyYW5zZm9ybWFkZXM6IGhhdXJpYSBkZSBxdWVkYXIgJHk9MCQsIG5vIHVuIGFsdHJlIHZhbG9yLiIsICJVbiBjb3AgJHk9MCQsIHN1YnN0aXR1ZWl4IGEgJHgtM3k9NCQ6ICR4LTA9NCBcXFJpZ2h0YXJyb3cgeD00JCwgcG9zaXRpdS4iLCAiIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiU0lHTkVfRklOQUwiLCAiIl0sICJyZXMiOiBbIk11bHRpcGxpcXVlbSBsYSBwcmltZXJhIHBlciAkLTIkOiAkXFxiZWdpbnthcnJheX17cn0tMngrNnk9LThcXFxcMngtNXk9OFxcXFxcXGhsaW5lIHk9MFxcZW5ke2FycmF5fSQiLCAiQW1iICR5PTAkOiAkeC0zXFxjZG90MD00IFxcUmlnaHRhcnJvdyB4PTQkIl19"
  },
  {
   "id": "86b",
   "ex": 86,
   "ap": "b",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}3x+y=3\\\\ 6x-y=0\\end{array}\\right\\}$",
   "opcions": [
    "$x=2,\\ y=\\dfrac{1}{3}$",
    "$x=-\\dfrac{1}{3},\\ y=2$",
    "$x=\\dfrac{1}{3},\\ y=2$",
    "$x=\\dfrac{1}{3},\\ y=-2$"
   ],
   "pistes": [
    "Aïlla $y=3-3x$ de la primera equació (substitució).",
    "Substitueix aquesta expressió a la segona equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiIsICJSZXZpc2EgZWwgc2lnbmUgZW4gcmVzb2xkcmUgJDl4PTMkOiAkeD1cXGZyYWMxMyQsIHBvc2l0aXUuIiwgIiIsICJVbiBjb3AgJHg9XFxmcmFjMTMkLCBzdWJzdGl0dWVpeCBhICR5PTMtM3gkOiAkeT0zLTNcXGNkb3RcXGZyYWMxMz0yJCwgYW1iIHNpZ25lIHBvc2l0aXUuIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlNJR05FX0ZJTkFMIiwgIiIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJBw69sbGVtICR5PTMtM3gkIGkgaG8gcG9zZW0gYSBsYSBzZWdvbmE6ICQ2eC0oMy0zeCk9MCBcXDtcXExvbmdyaWdodGFycm93XFw7IDZ4LTMrM3g9MCQiLCAiJDl4PTMgXFxSaWdodGFycm93IHg9XFxkZnJhY3sxfXszfSQiLCAiJHk9My0zXFxjZG90XFxkZnJhYzEzPTIkIl19"
  },
  {
   "id": "86c",
   "ex": 86,
   "ap": "c",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}4x-5y=10\\\\ 2x+7y=-4\\end{array}\\right\\}$",
   "opcions": [
    "$x=\\dfrac{25}{19},\\ y=-\\dfrac{18}{19}$",
    "$x=-\\dfrac{18}{19},\\ y=\\dfrac{25}{19}$",
    "$x=\\dfrac{25}{19},\\ y=\\dfrac{18}{19}$",
    "$x=\\dfrac{25}{19},\\ y=-\\dfrac{126}{19}$"
   ],
   "pistes": [
    "Multiplica la primera equació per $7$ i la segona per $5$ per igualar el coeficient de $y$ (reducció).",
    "Un cop trobada $x$, substitueix a qualsevol equació original i aïlla $y$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgbCdlcXVhY2nDsyBvcmlnaW5hbC4iLCAiUmV2aXNhIGVsIHNpZ25lIGZpbmFsIGRlICR5JDogc3Vic3RpdHVpbnQgYSAkMngrN3k9LTQkIHN1cnQgdW4gdmFsb3IgbmVnYXRpdS4iLCAiVCdoYXMgcXVlZGF0IGEgbWlnIGHDr2xsYXIgbGEgJHkkOiBkZSAkN3k9LVxcZnJhY3sxMjZ9ezE5fSQgZW5jYXJhIGNhbCBkaXZpZGlyIGVudHJlICQ3JCwgaSBxdWVkYSAkeT0tXFxmcmFjezE4fXsxOX0kLiJdLCAiZXJyIjogWyIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiRkFDVE9SX09CTElEQVQiXSwgInJlcyI6IFsiTXVsdGlwbGlxdWVtIHBlciAkNyQgaSBwZXIgJDUkOiAkXFxiZWdpbnthcnJheX17cn0yOHgtMzV5PTcwXFxcXDEweCszNXk9LTIwXFxcXFxcaGxpbmUgMzh4PTUwXFxlbmR7YXJyYXl9JCIsICIkeD1cXGRmcmFjezUwfXszOH09XFxkZnJhY3syNX17MTl9JCIsICJTdWJzdGl0dWludCBhICQyeCs3eT0tNCQ6ICQ3eT0tNC1cXGRmcmFjezUwfXsxOX09XFxkZnJhY3stMTI2fXsxOX0gXFxSaWdodGFycm93IHk9LVxcZGZyYWN7MTh9ezE5fSQiXX0="
  },
  {
   "id": "86d",
   "ex": 86,
   "ap": "d",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}x-3y=13\\\\ 5x-2y=26\\end{array}\\right\\}$",
   "opcions": [
    "$x=-3,\\ y=4$",
    "$x=4,\\ y=-3$",
    "$x=4,\\ y=3$",
    "$x=-4,\\ y=-3$"
   ],
   "pistes": [
    "Multiplica la primera equació per $-5$ perquè els coeficients de $x$ es cancel·lin (reducció).",
    "Un cop trobada $y$, substitueix a qualsevol equació original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSBsJ2VxdWFjacOzIG9yaWdpbmFsLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICR5JDogJDEzeT0tMzkgXFxSaWdodGFycm93IHk9LTMkLCBuZWdhdGl1LiIsICJVbiBjb3AgJHk9LTMkLCBzdWJzdGl0dWVpeCBhICR4LTN5PTEzJDogJHgrOT0xMyBcXFJpZ2h0YXJyb3cgeD00JCwgcG9zaXRpdS4iXSwgImVyciI6IFsiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIk11bHRpcGxpcXVlbSBsYSBwcmltZXJhIHBlciAkLTUkOiAkXFxiZWdpbnthcnJheX17cn0tNXgrMTV5PS02NVxcXFw1eC0yeT0yNlxcXFxcXGhsaW5lIDEzeT0tMzlcXGVuZHthcnJheX0kIiwgIiR5PS0zJDsgc3Vic3RpdHVpbnQ6ICR4LTNcXGNkb3QoLTMpPTEzIFxcUmlnaHRhcnJvdyB4PTQkIl19"
  },
  {
   "id": "86e",
   "ex": 86,
   "ap": "e",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}8x+14y=-6\\\\ x+y=0\\end{array}\\right\\}$",
   "opcions": [
    "$x=-1,\\ y=-1$",
    "$x=1,\\ y=1$",
    "$x=1,\\ y=-1$",
    "$x=-1,\\ y=1$"
   ],
   "pistes": [
    "Aïlla $x=-y$ de la segona equació (substitució).",
    "Substitueix aquesta expressió a la primera equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgJHkkOiAkNnk9LTYgXFxSaWdodGFycm93IHk9LTEkLiIsICJVbiBjb3AgJHk9LTEkLCBzdWJzdGl0dWVpeCBhICR4PS15JDogJHg9LSgtMSk9MSQsIGFtYiBzaWduZSBwb3NpdGl1LiIsICIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgbCdlcXVhY2nDsyBvcmlnaW5hbC4iXSwgImVyciI6IFsiU0lHTkVfRklOQUwiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiQcOvbGxlbSAkeD0teSQgaSBobyBwb3NlbSBhIGxhIHByaW1lcmE6ICQ4KC15KSsxNHk9LTYgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyA2eT0tNiQiLCAiJHk9LTEkIiwgIiR4PS0oLTEpPTEkIl19"
  },
  {
   "id": "86f",
   "ex": 86,
   "ap": "f",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}3x-\\dfrac{4}{5}y=13\\\\[4pt] \\dfrac{8}{3}x-y=-4\\end{array}\\right\\}$",
   "opcions": [
    "$x=-\\dfrac{243}{13},\\ y=\\dfrac{700}{13}$",
    "$x=\\dfrac{81}{4},\\ y=\\dfrac{700}{13}$",
    "$x=\\dfrac{700}{13},\\ y=\\dfrac{243}{13}$",
    "$x=\\dfrac{243}{13},\\ y=\\dfrac{700}{13}$"
   ],
   "pistes": [
    "Multiplica cada equació pel denominador del seu terme fraccionari (m.c.m.$(5,1)=5$ i m.c.m.$(3,1)=3$) per treure denominadors.",
    "Un cop sense fraccions, multiplica per igualar un dels coeficients i aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgJHgkOiAkNjV4PTEyMTUkIGRvbmEgdW4gdmFsb3IgcG9zaXRpdS4iLCAiJFxcZnJhY3sxMjE1fXs2NX0kIGVuY2FyYSBlcyBwb3Qgc2ltcGxpZmljYXIgZGl2aWRpbnQgbnVtZXJhZG9yIGkgZGVub21pbmFkb3IgcGVsIHNldSBtLmMuZC4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgbCdlcXVhY2nDsyBvcmlnaW5hbC4iLCAiIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIlNJTVBMSUZJQ0FDSU9fSU5DT01QTEVUQSIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICIiXSwgInJlcyI6IFsiTXVsdGlwbGljYW50IHBlciB0cmV1cmUgZGVub21pbmFkb3JzOiAkNDV4LTEyeT0xOTUkIGkgJDQweC0xNXk9LTYwJCIsICJNdWx0aXBsaXF1ZW0gbGEgcHJpbWVyYSBwZXIgJDUkIGkgbGEgc2Vnb25hIHBlciAkNCQ6ICRcXGJlZ2lue2FycmF5fXtyfTIyNXgtNjB5PTk3NVxcXFwxNjB4LTYweT0tMjQwXFxcXFxcaGxpbmUgNjV4PTEyMTVcXGVuZHthcnJheX0kIiwgIiR4PVxcZGZyYWN7MTIxNX17NjV9PVxcZGZyYWN7MjQzfXsxM30kOyBzdWJzdGl0dWludDogJDEyeT00NVxcY2RvdFxcZGZyYWN7MjQzfXsxM30tMTk1PVxcZGZyYWN7ODQwMH17MTN9IFxcUmlnaHRhcnJvdyB5PVxcZGZyYWN7NzAwfXsxM30kIl19"
  },
  {
   "id": "87",
   "ex": 87,
   "ap": "",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Resol:",
   "enunciat": "$\\left.\\begin{array}{r}2(x-2)-3(y+1)+6=17\\\\[4pt] 4(x-y)-\\dfrac{x}{3}+\\dfrac{y}{2}=25\\end{array}\\right\\}$",
   "opcions": [
    "$x=3,\\ y=4$",
    "$x=-3,\\ y=4$",
    "$x=-4,\\ y=3$",
    "$x=3,\\ y=-4$"
   ],
   "pistes": [
    "Simplifica cada equació per separat (distribueix parèntesis, treu denominadors) fins deixar-les en la forma $ax+by=c$.",
    "Un cop simplificades, resol el sistema per reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJVbiBjb3AgJHg9MyQsIHN1YnN0aXR1ZWl4IGEgJDJ4LTN5PTE4JDogJDYtM3k9MTggXFxSaWdodGFycm93IHk9LTQkLCBhbWIgc2lnbmUgbmVnYXRpdS4iLCAiUmV2aXNhIGVsIHNpZ25lIGVuIHJlc29sZHJlICQ4eD0yNCQ6ICR4PTMkLCBwb3NpdGl1LiIsICJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZGUgbGVzIGVxdWFjaW9ucyBvcmlnaW5hbHMuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICJTSUdORV9GSU5BTCIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICIiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50IGxhIHByaW1lcmE6ICQyKHgtMiktMyh5KzEpKzY9MTcgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAyeC0zeT0xOCQiLCAiU2ltcGxpZmljYW50IGxhIHNlZ29uYSAobXVsdGlwbGljYW50IHBlciAkNiQpOiAkMjJ4LTIxeT0xNTAkIiwgIk11bHRpcGxpcXVlbSBsYSBwcmltZXJhIHBlciAkLTckOiAkXFxiZWdpbnthcnJheX17cn0tMTR4KzIxeT0tMTI2XFxcXDIyeC0yMXk9MTUwXFxcXFxcaGxpbmUgOHg9MjRcXGVuZHthcnJheX0kIiwgIiR4PTMkOyBzdWJzdGl0dWludDogJDYtM3k9MTggXFxSaWdodGFycm93IHk9LTQkIl19"
  },
  {
   "id": "88a",
   "ex": 88,
   "ap": "a",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}2x+3y=5+x+2y\\\\ x-2y-3=3-4y\\end{array}\\right\\}$",
   "opcions": [
    "$x=4,\\ y=1$",
    "$x=5,\\ y=0$",
    "$x=1,\\ y=4$",
    "$x=4,\\ y=-1$"
   ],
   "pistes": [
    "Simplifica cada equació agrupant termes amb $x$/$y$ a l'esquerra i números a la dreta.",
    "Un cop simplificades, resta-les per eliminar la $x$ (reducció)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmV2aXNhIHF1ZSBoYXMgYWdydXBhdCBiw6kgZWxzIHRlcm1lcyBlbiBzaW1wbGlmaWNhciBjYWRhIGVxdWFjacOzIGFiYW5zIGRlIHJlc29sZHJlIGVsIHNpc3RlbWEuIiwgIkhhcyBpbnRlcmNhbnZpYXQgJHgkIGkgJHkkOiBjb21wcm92YS1obyBzdWJzdGl0dWludCBhIHVuYSBlcXVhY2nDsyBvcmlnaW5hbC4iLCAiVW4gY29wICR5PTEkLCBzdWJzdGl0dWVpeCBhICR4K3k9NSQ6ICR4KzE9NSBcXFJpZ2h0YXJyb3cgeD00JCwgcG9zaXRpdS4iXSwgImVyciI6IFsiIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50OiAkeCt5PTUkIGkgJHgrMnk9NiQiLCAiUmVzdGFudCBsYSBwcmltZXJhIGRlIGxhIHNlZ29uYTogJHk9MSQiLCAiU3Vic3RpdHVpbnQ6ICR4KzE9NSBcXFJpZ2h0YXJyb3cgeD00JCJdfQ=="
  },
  {
   "id": "88b",
   "ex": 88,
   "ap": "b",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}2y-x-1=4-y-2x\\\\ 2x-y=1+x\\end{array}\\right\\}$",
   "opcions": [
    "$x=0,\\ y=\\dfrac{1}{3}$",
    "$x=2,\\ y=-1$",
    "$x=2,\\ y=1$",
    "$x=1,\\ y=2$"
   ],
   "pistes": [
    "Simplifica cada equació: agrupa termes amb $x$/$y$ a l'esquerra.",
    "Un cop simplificades ($x+3y=5$ i $x-y=1$), resta-les per eliminar la $x$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgbGEgc2ltcGxpZmljYWNpw7MgZGUgY2FkYSBlcXVhY2nDsyBwZXIgc2VwYXJhdCBhYmFucyBkZSBjb21iaW5hci1sZXMuIiwgIlVuIGNvcCAkeT0xJCwgc3Vic3RpdHVlaXggYSAkeC15PTEkOiAkeC0xPTEgXFxSaWdodGFycm93IHg9MiQsIHBvc2l0aXUuIiwgIiIsICJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZXF1YWNpw7Mgb3JpZ2luYWwuIl0sICJlcnIiOiBbIkVRVUFDSU9fTk9fU0lNUExJRklDQURBIiwgIlNJR05FX0ZJTkFMIiwgIiIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyJdLCAicmVzIjogWyJTaW1wbGlmaWNhbnQ6ICR4KzN5PTUkIGkgJHgteT0xJCIsICJSZXN0YW50OiAkKHgrM3kpLSh4LXkpPTUtMSBcXFJpZ2h0YXJyb3cgNHk9NCBcXFJpZ2h0YXJyb3cgeT0xJCIsICJTdWJzdGl0dWludDogJHgtMT0xIFxcUmlnaHRhcnJvdyB4PTIkIl19"
  },
  {
   "id": "88c",
   "ex": 88,
   "ap": "c",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}3y-2=x-2(x+y)\\\\ (x+4)+2\\cdot(y-2)=18-x-y\\end{array}\\right\\}$",
   "opcions": [
    "$x=12,\\ y=2$",
    "$x=-2,\\ y=12$",
    "$x=-12,\\ y=-2$",
    "$x=12,\\ y=-2$"
   ],
   "pistes": [
    "Simplifica cada equació distribuint els parèntesis.",
    "Un cop simplificades ($x+5y=2$ i $2x+3y=18$), aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgJHkkOiAkLTd5PTE0IFxcUmlnaHRhcnJvdyB5PS0yJCwgbmVnYXRpdS4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsLiIsICJVbiBjb3AgJHk9LTIkLCBzdWJzdGl0dWVpeCBhICR4KzV5PTIkOiAkeC0xMD0yIFxcUmlnaHRhcnJvdyB4PTEyJCwgcG9zaXRpdS4iLCAiIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlNJR05FX0ZJTkFMIiwgIiJdLCAicmVzIjogWyJTaW1wbGlmaWNhbnQ6ICR4KzV5PTIkIGkgJDJ4KzN5PTE4JCIsICJNdWx0aXBsaXF1ZW0gbGEgcHJpbWVyYSBwZXIgJC0yJDogJFxcYmVnaW57YXJyYXl9e3J9LTJ4LTEweT0tNFxcXFwyeCszeT0xOFxcXFxcXGhsaW5lIC03eT0xNFxcZW5ke2FycmF5fSQiLCAiJHk9LTIkOyBzdWJzdGl0dWludDogJHgtMTA9MiBcXFJpZ2h0YXJyb3cgeD0xMiQiXX0="
  },
  {
   "id": "88d",
   "ex": 88,
   "ap": "d",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}3x-2(y-1)=y-x+1\\\\ 2x-y=x+y-9\\end{array}\\right\\}$",
   "opcions": [
    "$x=5,\\ y=7$",
    "$x=7,\\ y=5$",
    "$x=5,\\ y=-7$",
    "$x=-1,\\ y=-2$"
   ],
   "pistes": [
    "Simplifica cada equació distribuint el parèntesi i agrupant termes.",
    "Un cop simplificades ($4x-3y=-1$ i $x-2y=-9$), aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsLiIsICJVbiBjb3AgJHk9NyQsIHN1YnN0aXR1ZWl4IGEgJHgtMnk9LTkkOiAkeC0xND0tOSBcXFJpZ2h0YXJyb3cgeD01JCwgcG9zaXRpdS4iLCAiUmV2aXNhIGxhIHNpbXBsaWZpY2FjacOzIGRlIGNhZGEgZXF1YWNpw7MgcGVyIHNlcGFyYXQgYWJhbnMgZGUgY29tYmluYXItbGVzLiJdLCAiZXJyIjogWyIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiRVFVQUNJT19OT19TSU1QTElGSUNBREEiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50OiAkNHgtM3k9LTEkIGkgJHgtMnk9LTkkIiwgIk11bHRpcGxpcXVlbSBsYSBzZWdvbmEgcGVyICQtNCQ6ICRcXGJlZ2lue2FycmF5fXtyfTR4LTN5PS0xXFxcXC00eCs4eT0zNlxcXFxcXGhsaW5lIDV5PTM1XFxlbmR7YXJyYXl9JCIsICIkeT03JDsgc3Vic3RpdHVpbnQgYSAkeC0yeT0tOSQ6ICR4LTE0PS05IFxcUmlnaHRhcnJvdyB4PTUkIl19"
  },
  {
   "id": "88e",
   "ex": 88,
   "ap": "e",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}\\dfrac{x}{2}-\\dfrac{y}{5}=\\dfrac{11}{5}\\\\[4pt] \\dfrac{4x-5y}{2}=2\\end{array}\\right\\}$",
   "opcions": [
    "$x=4,\\ y=6$",
    "$x=6,\\ y=-4$",
    "$x=6,\\ y=4$",
    "$x=-6,\\ y=4$"
   ],
   "pistes": [
    "Multiplica cada equació pel seu denominador per treure fraccions.",
    "Un cop en forma $ax+by=c$, iguala un dels coeficients i aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZXF1YWNpw7Mgb3JpZ2luYWwuIiwgIlVuIGNvcCAkeD02JCwgc3Vic3RpdHVlaXggYSAkNXgtMnk9MjIkOiAkMzAtMnk9MjIgXFxSaWdodGFycm93IHk9NCQsIHBvc2l0aXUuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgJHgkOiAkMTd4PTEwMiBcXFJpZ2h0YXJyb3cgeD02JCwgcG9zaXRpdS4iXSwgImVyciI6IFsiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIlRyYWllbnQgZGVub21pbmFkb3JzOiAkNXgtMnk9MjIkIGkgJDR4LTV5PTQkIiwgIk11bHRpcGxpcXVlbSBsYSBwcmltZXJhIHBlciAkNSQgaSBsYSBzZWdvbmEgcGVyICQtMiQ6ICRcXGJlZ2lue2FycmF5fXtyfTI1eC0xMHk9MTEwXFxcXC04eCsxMHk9LThcXFxcXFxobGluZSAxN3g9MTAyXFxlbmR7YXJyYXl9JCIsICIkeD02JDsgc3Vic3RpdHVpbnQ6ICQzMC0yeT0yMiBcXFJpZ2h0YXJyb3cgeT00JCJdfQ=="
  },
  {
   "id": "88f",
   "ex": 88,
   "ap": "f",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol aquests sistemes.",
   "enunciat": "$\\left.\\begin{array}{r}\\dfrac{x+4y}{3}+\\dfrac{x-y}{5}=\\dfrac{2}{3}\\\\[4pt] -x+5y=13\\end{array}\\right\\}$",
   "opcions": [
    "$x=2,\\ y=-3$",
    "$x=-3,\\ y=-2$",
    "$x=-3,\\ y=2$",
    "$x=3,\\ y=2$"
   ],
   "pistes": [
    "Multiplica la primera equació pel m.c.m. dels seus denominadors ($15$) per eliminar-los.",
    "Un cop simplificada, iguala el coeficient de $x$ amb la segona equació i aplica reducció."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZXF1YWNpw7Mgb3JpZ2luYWwuIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkeSQ6ICQ1N3k9MTE0IFxcUmlnaHRhcnJvdyB5PTIkLCBwb3NpdGl1LiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICR4JDogc3Vic3RpdHVpbnQgYSAkLXgrNXk9MTMkIGFtYiAkeT0yJCBzdXJ0ICR4PS0zJCwgbmVnYXRpdS4iXSwgImVyciI6IFsiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiU0lHTkVfRklOQUwiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIk11bHRpcGxpY2FudCBsYSBwcmltZXJhIHBlciAkMTUkOiAkOHgrMTd5PTEwJCIsICJNdWx0aXBsaXF1ZW0gbGEgc2Vnb25hIHBlciAkOCQ6ICRcXGJlZ2lue2FycmF5fXtyfTh4KzE3eT0xMFxcXFwtOHgrNDB5PTEwNFxcXFxcXGhsaW5lIDU3eT0xMTRcXGVuZHthcnJheX0kIiwgIiR5PTIkOyBzdWJzdGl0dWludCBhICQteCs1eT0xMyQ6ICQteCsxMD0xMyBcXFJpZ2h0YXJyb3cgeD0tMyQiXX0="
  },
  {
   "id": "89a",
   "ex": 89,
   "ap": "a",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode que consideris més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}-2(x-2)=y-4\\\\ 3y-2x=0\\end{array}\\right\\}$",
   "opcions": [
    "$x=-3,\\ y=2$",
    "$x=3,\\ y=2$",
    "$x=3,\\ y=-2$",
    "$x=2,\\ y=3$"
   ],
   "pistes": [
    "Distribueix el parèntesi de la primera equació.",
    "Un cop en forma $2x+y=8$ i $-2x+3y=0$, suma-les (reducció)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiBjb3AgJHk9MiQsIHN1YnN0aXR1ZWl4IGEgJDJ4K3k9OCQ6ICQyeCsyPTggXFxSaWdodGFycm93IHg9MyQsIHBvc2l0aXUuIiwgIiIsICJSZXZpc2EgZWwgc2lnbmUgZGUgJHkkOiAkNHk9OCBcXFJpZ2h0YXJyb3cgeT0yJCwgcG9zaXRpdS4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICIiLCAiU0lHTkVfRklOQUwiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50IGxhIHByaW1lcmE6ICQtMih4LTIpPXktNCBcXDtcXExvbmdyaWdodGFycm93XFw7IDJ4K3k9OCQiLCAiU3VtYW50IGFtYiAkLTJ4KzN5PTAkOiAkXFxiZWdpbnthcnJheX17cn0yeCt5PThcXFxcLTJ4KzN5PTBcXFxcXFxobGluZSA0eT04XFxlbmR7YXJyYXl9JCIsICIkeT0yJDsgc3Vic3RpdHVpbnQ6ICQyeCsyPTggXFxSaWdodGFycm93IHg9MyQiXX0="
  },
  {
   "id": "89b",
   "ex": 89,
   "ap": "b",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode que consideris més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}-5(y-2)=x-2\\\\ x-3y=-4\\end{array}\\right\\}$",
   "opcions": [
    "$x=12,\\ y=2$",
    "$x=2,\\ y=2$",
    "$x=-2,\\ y=2$",
    "$x=2,\\ y=-2$"
   ],
   "pistes": [
    "Distribueix el parèntesi de la primera equació.",
    "Un cop en forma $x+5y=12$ i $x-3y=-4$, resta-les (reducció)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJSZXZpc2EgbGEgc2ltcGxpZmljYWNpw7MgZGUgbGEgcHJpbWVyYSBlcXVhY2nDsyBhYmFucyBkZSBjb21iaW5hci1sYSBhbWIgbGEgc2Vnb25hLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICR4JDogJHgtM1xcY2RvdDI9LTQgXFxSaWdodGFycm93IHg9MiQsIHBvc2l0aXUuIiwgIlJldmlzYSBlbCBzaWduZSBkZSAkeSQ6ICQ4eT0xNiBcXFJpZ2h0YXJyb3cgeT0yJCwgcG9zaXRpdS4iXSwgImVyciI6IFsiRVFVQUNJT19OT19TSU1QTElGSUNBREEiLCAiIiwgIlNJR05FX0ZJTkFMIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIlNpbXBsaWZpY2FudCBsYSBwcmltZXJhOiAkLTUoeS0yKT14LTIgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyB4KzV5PTEyJCIsICJSZXN0YW50IGFtYiAkeC0zeT0tNCQ6ICRcXGJlZ2lue2FycmF5fXtyfXgrNXk9MTJcXFxceC0zeT0tNFxcXFxcXGhsaW5lIDh5PTE2XFxlbmR7YXJyYXl9JCIsICIkeT0yJDsgc3Vic3RpdHVpbnQ6ICR4LTNcXGNkb3QyPS00IFxcUmlnaHRhcnJvdyB4PTIkIl19"
  },
  {
   "id": "89c",
   "ex": 89,
   "ap": "c",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode que consideris més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}3(x+y)-x+2y=15\\\\ 2x-(y+8)=-11\\end{array}\\right\\}$",
   "opcions": [
    "$x=-3,\\ y=3$",
    "$x=3,\\ y=0$",
    "$x=0,\\ y=3$",
    "$x=0,\\ y=-3$"
   ],
   "pistes": [
    "Simplifica cada equació distribuint parèntesis.",
    "Un cop en forma $2x+5y=15$ i $2x-y=-3$, resta-les (reducció, ja que el coeficient de $x$ coincideix)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJVbiBjb3AgJHk9MyQsIHN1YnN0aXR1ZWl4IGEgJDJ4LXk9LTMkOiAkMngtMz0tMyBcXFJpZ2h0YXJyb3cgeD0wJC4iLCAiSGFzIGludGVyY2FudmlhdCAkeCQgaSAkeSQ6IGNvbXByb3ZhLWhvIHN1YnN0aXR1aW50IGEgdW5hIGVxdWFjacOzIG9yaWdpbmFsLiIsICIiLCAiUmV2aXNhIGVsIHNpZ25lIGRlICR5JDogJDZ5PTE4IFxcUmlnaHRhcnJvdyB5PTMkLCBwb3NpdGl1LiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICIiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiU2ltcGxpZmljYW50OiAkMngrNXk9MTUkIGkgJDJ4LXk9LTMkIiwgIlJlc3RhbnQ6ICRcXGJlZ2lue2FycmF5fXtyfTJ4KzV5PTE1XFxcXDJ4LXk9LTNcXFxcXFxobGluZSA2eT0xOFxcZW5ke2FycmF5fSQiLCAiJHk9MyQ7IHN1YnN0aXR1aW50OiAkMngtMz0tMyBcXFJpZ2h0YXJyb3cgeD0wJCJdfQ=="
  },
  {
   "id": "89d",
   "ex": 89,
   "ap": "d",
   "bloc": "sistemes",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Resol amb el mètode que consideris més adequat.",
   "enunciat": "$\\left.\\begin{array}{r}3(x+2)-7(x+y)=5\\\\ 5(x+1)-y=14\\end{array}\\right\\}$",
   "opcions": [
    "$x=-\\dfrac{64}{39},\\ y=\\dfrac{31}{39}$",
    "$x=\\dfrac{64}{39},\\ y=\\dfrac{31}{39}$",
    "$x=\\dfrac{64}{39},\\ y=-\\dfrac{31}{39}$",
    "$x=-\\dfrac{31}{39},\\ y=\\dfrac{64}{39}$"
   ],
   "pistes": [
    "Distribueix els parèntesis de les dues equacions per deixar-les en forma $ax+by=c$.",
    "Un cop simplificades ($-4x-7y=-1$ i $5x-y=9$), aïlla $y$ de la segona i substitueix a la primera."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJSZXZpc2EgZWwgc2lnbmUgZGUgJHgkOiAkLTM5eD0tNjQgXFxSaWdodGFycm93IHg9XFxmcmFjezY0fXszOX0kLCBwb3NpdGl1LiIsICJVbiBjb3AgJHg9XFxmcmFjezY0fXszOX0kLCBzdWJzdGl0dWVpeCBhICR5PTV4LTkkOiBlbCByZXN1bHRhdCBzdXJ0IG5lZ2F0aXUgcGVycXXDqCAkNXg8OSQuIiwgIiIsICJIYXMgaW50ZXJjYW52aWF0ICR4JCBpICR5JDogY29tcHJvdmEtaG8gc3Vic3RpdHVpbnQgYSB1bmEgZXF1YWNpw7Mgb3JpZ2luYWwuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIlNJR05FX0ZJTkFMIiwgIiIsICJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyJdLCAicmVzIjogWyJTaW1wbGlmaWNhbnQ6ICQtNHgtN3k9LTEkIGkgJDV4LXk9OSQiLCAiQcOvbGxlbSAkeT01eC05JCBkZSBsYSBzZWdvbmEgaSBobyBwb3NlbSBhIGxhIHByaW1lcmE6ICQtNHgtNyg1eC05KT0tMSBcXDtcXExvbmdyaWdodGFycm93XFw7IC00eC0zNXgrNjM9LTEkIiwgIiQtMzl4PS02NCBcXFJpZ2h0YXJyb3cgeD1cXGRmcmFjezY0fXszOX0kOyAkeT01XFxjZG90XFxkZnJhY3s2NH17Mzl9LTk9XFxkZnJhY3szMjAtMzUxfXszOX09LVxcZGZyYWN7MzF9ezM5fSQiXX0="
  },
  {
   "id": "90",
   "ex": 90,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Troba dos nombres consecutius, sabent que la diferència dels seus quadrats és 567.",
   "opcions": [
    "$282$ i $283$",
    "$283$ i $284$",
    "$283$ i $285$",
    "$567$ i $568$"
   ],
   "pistes": [
    "Anomena $x$ el primer nombre; el consecutiu és $x+1$.",
    "Planteja l'equació $(x+1)^2-x^2=567$ i observa que el terme $x^2$ es cancel·la en desenvolupar-la."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJDb21wcm92YS1obzogJDI4M14yLTI4Ml4yPTE2MVxcLDg0NS03OVxcLDUyNCQuLi4gbWlsbG9yIHRvcm5hIGEgcGxhbnRlamFyIGwnZXF1YWNpw7MgJCh4KzEpXjIteF4yPTU2NyQgaSByZXNvbC1sYSBkZXMgZGUgemVyby4iLCAiIiwgIlwiQ29uc2VjdXRpdXNcIiB2b2wgZGlyIHF1ZSBkaWZlcmVpeGVuIGVuICQxJCwgbm8gZW4gJDIkOiBzaSB1biDDqXMgJHgkLCBsJ2FsdHJlIMOpcyAkeCsxJC4iLCAiRWwgJDU2NyQgw6lzIGxhIGRpZmVyw6huY2lhIGRlIHF1YWRyYXRzIHF1ZSBkb25hIGwnZW51bmNpYXQsIG5vIHVuIGRlbHMgZG9zIG5vbWJyZXMgcXVlIGJ1c3F1ZXMuIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSJdLCAicmVzIjogWyIkKHgrMSleMi14XjI9NTY3IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeF4yKzJ4KzEteF4yPTU2NyQiLCAiJDJ4KzE9NTY3IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMng9NTY2IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgeD0yODMkIiwgIkVscyBkb3Mgbm9tYnJlcyBjb25zZWN1dGl1cyBzw7NuICQyODMkIGkgJDI4NCQuIl19"
  },
  {
   "id": "91",
   "ex": 91,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "El preu d'un anell i el seu estoig és de 10\\,200 €, i l'anell val 10\\,000 € més que l'estoig. Quin és el preu de cada article?",
   "opcions": [
    "L'anell val $10\\,100$ € i l'estoig, $10\\,000$ €",
    "L'anell val $10\\,100$ € i l'estoig, $100$ €",
    "L'anell val $5\\,100$ € i l'estoig, $5\\,100$ €",
    "L'anell val $10\\,000$ € i l'estoig, $200$ €"
   ],
   "pistes": [
    "Anomena $a$ el preu de l'anell i $e$ el de l'estoig, i planteja el sistema amb les dues condicions.",
    "Substitueix $a=e+10\\,000$ a la primera equació."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMYSBzdW1hIGRlbHMgZG9zIHByZXVzIGhhIGRlIGRvbmFyIGV4YWN0YW1lbnQgJDEwXFwsMjAwJCDigqw6IGNvbXByb3ZhLWhvIGFtYiBhcXVlc3RzIGRvcyB2YWxvcnMuIiwgIiIsICJMJ2VudW5jaWF0IGRpdSBxdWUgbCdhbmVsbCB2YWwgTcOJUyBxdWUgbCdlc3RvaWcgKHBlciAkMTBcXCwwMDAkIOKCrCksIG5vIHF1ZSB2YWxndWluIGVsIG1hdGVpeC4iLCAiQ29tcHJvdmEtaG8gYW1iIGxlcyBkdWVzIGNvbmRpY2lvbnM6ICQxMFxcLDAwMCsyMDA9MTBcXCwyMDAkIChoaSBxdWFkcmEpLCBwZXLDsiAkMTBcXCwwMDAtMjAwPTlcXCw4MDBcXG5lMTBcXCwwMDAkIChsYSBkaWZlcsOobmNpYSBubyDDqXMgbGEgcXVlIGRlbWFuYSBsJ2VudW5jaWF0KS4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iXSwgInJlcyI6IFsiU2lzdGVtYTogJGErZT0xMFxcLDIwMCxcXHF1YWQgYT1lKzEwXFwsMDAwJCIsICJTdWJzdGl0dWludDogJChlKzEwXFwsMDAwKStlPTEwXFwsMjAwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMmU9MjAwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgZT0xMDAkIiwgIiRhPTEwMCsxMFxcLDAwMD0xMFxcLDEwMCQiXX0="
  },
  {
   "id": "92",
   "ex": 92,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Una bodega va exportar al gener la meitat dels seus barrils i, al cap de dos mesos, un terç dels que li quedaven. Quants barrils tenia al començament si ara hi ha 40\\,000 barrils?",
   "opcions": [
    "$60\\,000$ barrils",
    "$120\\,000$ barrils",
    "$180\\,000$ barrils",
    "$40\\,000$ barrils"
   ],
   "pistes": [
    "Anomena $B$ el nombre inicial de barrils. Després del gener en queden $\\frac{B}{2}$.",
    "Al cap de dos mesos n'exporta un terç DELS QUE LI QUEDAVEN: li'n queden els altres dos terços d'aquesta meitat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgc2VyaWEgZWwgcmVzdWx0YXQgZGUgY29uc2lkZXJhciBub23DqXMgVU5BIGRlIGxlcyBkdWVzIGV4cG9ydGFjaW9uczsgbCdlbnVuY2lhdCBlbiBkZXNjcml1IGR1ZXMgc2VndWlkZXMuIiwgIiIsICJSZXZpc2EgcXVpbmEgZnJhY2Npw7MgbGkgcXVlZGEgZGVzcHLDqXMgZGUgbGVzIERVRVMgZXhwb3J0YWNpb25zIHNlZ3VpZGVzOiBsYSBtZWl0YXQsIGkgZGVzcHLDqXMgZG9zIHRlcsOnb3MgZCdhcXVlc3RhIG1laXRhdC4iLCAiJDQwXFwsMDAwJCDDqXMgZWwgbm9tYnJlIGRlIGJhcnJpbHMgQVJBLCBkZXNwcsOpcyBkZSBsZXMgZHVlcyBleHBvcnRhY2lvbnMsIG5vIGVsIG5vbWJyZSBpbmljaWFsIHF1ZSBlcyBkZW1hbmEuIl0sICJlcnIiOiBbIkVYUE9ORU5UX1NFTlNFX0RFU1BMQUNBUiIsICIiLCAiT1JEUkVfTVVMVElQTElDQUNJT19ESVZJU0lPIiwgIlBST0dSRVNTSU9fSU5WRU5UQURBIl0sICJyZXMiOiBbIkxpIHF1ZWRlbiAkXFxkZnJhY3tCfXsyfVxcY2RvdFxcZGZyYWN7Mn17M309XFxkZnJhY3tCfXszfSQiLCAiQ29tIHF1ZSBhcmEgaGkgaGEgJDQwXFwsMDAwJDogJFxcZGZyYWN7Qn17M309NDBcXCwwMDAkIiwgIiRCPTEyMFxcLDAwMCQgYmFycmlscyJdfQ=="
  },
  {
   "id": "93",
   "ex": 93,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En Miquel té 4 anys més que el seu cosí Ignasi i, al cap de 3 anys, entre els dos sumaran 20 anys. Quants anys té cadascú?",
   "opcions": [
    "En Miquel té $10$ anys i l'Ignasi, $6$ anys",
    "En Miquel té $12$ anys i l'Ignasi, $8$ anys",
    "En Miquel té $8$ anys i l'Ignasi, $4$ anys",
    "En Miquel té $9$ anys i l'Ignasi, $5$ anys"
   ],
   "pistes": [
    "Anomena $m$ l'edat d'en Miquel i $i$ la de l'Ignasi. La primera condició dona $m=i+4$.",
    "La segona condició, \"al cap de 3 anys sumaran 20\", és $(m+3)+(i+3)=20$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJDb21wcm92YS1obzogZCdhcXXDrSBhIDMgYW55cyBzdW1hcmllbiAkMTMrOT0yMiQsIG5vICQyMCQ7IHJldmlzYSBsJ2VxdWFjacOzIHF1ZSBleHByZXNzYSBcImQnYXF1w60gYSAzIGFueXNcIi4iLCAiQ29tcHJvdmEgbGEgcHJpbWVyYSBjb25kaWNpw7M6ICQxMi04PTQkIChoaSBxdWFkcmEpLCBwZXLDsiByZXZpc2EgbGEgc2Vnb25hOiBkJ2FxdcOtIGEgMyBhbnlzIHN1bWFyaWVuICQxNSsxMT0yNiQsIG5vICQyMCQuIiwgIkNvbXByb3ZhLWhvOiBkJ2FxdcOtIGEgMyBhbnlzIHN1bWFyaWVuICQxMSs3PTE4JCwgbm8gJDIwJDsgcmV2aXNhIGVsIHBsYW50ZWphbWVudCBkZWwgc2lzdGVtYS4iLCAiIl0sICJlcnIiOiBbIkRFU1BMQUNBTUVOVF9JTkRFWCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlNJR05FX0ZJTkFMIiwgIiJdLCAicmVzIjogWyJTaXN0ZW1hOiAkbT1pKzQsXFxxdWFkIChtKzMpKyhpKzMpPTIwJCIsICJTdWJzdGl0dWludDogJChpKzQrMykrKGkrMyk9MjAgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAyaSsxMD0yMCQiLCAiJGk9NSQ7IHBlciB0YW50ICRtPTUrND05JCJdfQ=="
  },
  {
   "id": "94",
   "ex": 94,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Quina edat tinc ara si al cap de 12 anys tindré el triple de l'edat que tenia fa 6 anys?",
   "opcions": [
    "$9$ anys",
    "$15$ anys",
    "$21$ anys",
    "$30$ anys"
   ],
   "pistes": [
    "Anomena $e$ l'edat actual. \"Fa 6 anys\" és $e-6$; \"al cap de 12 anys\" és $e+12$.",
    "Planteja l'equació: $e+12=3(e-6)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJDb21wcm92YS1obzogZCdhcXXDrSBhIDEyIGFueXMgdGluZHJpYSAkMjEkLCBpIGZhIDYgYW55cyB0ZW5pYSAkMyQ7IGVsIHRyaXBsZSBkZSAkMyQgw6lzICQ5JCwgbm8gJDIxJC4iLCAiIiwgIkFxdWVzdGEgc2VyaWEgbCdlZGF0IGQnYXF1w60gYSAxMiBhbnlzIGFtYiBsYSByZXNwb3N0YSBjb3JyZWN0YSwgbm8gbCdlZGF0IEFDVFVBTCBxdWUgZGVtYW5hIGwnZW51bmNpYXQuIiwgIkNvbXByb3ZhLWhvOiBkJ2FxdcOtIGEgMTIgYW55cyB0aW5kcmlhICQ0MiQsIGkgZmEgNiBhbnlzIHRlbmlhICQyNCQ7IGVsIHRyaXBsZSBkZSAkMjQkIG5vIMOpcyAkNDIkLiJdLCAiZXJyIjogWyJERVNQTEFDQU1FTlRfSU5ERVgiLCAiIiwgIkVYUE9ORU5UX01VTFRJUExJQ0FUIiwgIk9SRFJFX1JFU1RBIl0sICJyZXMiOiBbIiRlKzEyPTMoZS02KSBcXDtcXExvbmdyaWdodGFycm93XFw7IGUrMTI9M2UtMTgkIiwgIiQxMisxOD0zZS1lIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgMzA9MmUkIiwgIiRlPTE1JCBhbnlzIl19"
  },
  {
   "id": "95",
   "ex": 95,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En un triangle rectangle de 24 m de perímetre, la longitud d'un catet és igual als tres quarts de la longitud de l'altre. Troba'n les dimensions.",
   "opcions": [
    "Catets de $8$ m i $6$ m, i hipotenusa de $10$ m",
    "Catets de $10$ m i $7{,}5$ m, i hipotenusa de $6{,}5$ m",
    "Catets de $9$ m i $12$ m, i hipotenusa de $3$ m",
    "Catets de $8$ m i $6$ m, i hipotenusa de $16$ m"
   ],
   "pistes": [
    "Anomena $a$ el catet més llarg; l'altre val $\\frac{3}{4}a$. La hipotenusa és $\\sqrt{a^2+\\left(\\frac34a\\right)^2}$.",
    "Com que el perímetre és $24$, planteja $a+\\frac34a+\\sqrt{a^2+\\frac{9}{16}a^2}=24$ i simplifica l'arrel abans de resoldre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcGVyw61tZXRyZSBkJ2FxdWVzdGEgb3BjacOzIG5vIGRvbmEgJDI0JCBtICgkMTArN3ssfTUrNnssfTU9MjQkLCBzw60gcXVlIGhpIHF1YWRyYSBsYSBzdW1hLCBwZXLDsiBjb21wcm92YSBQaXTDoGdvcmVzOiAkMTBeMis3eyx9NV4yXFxuZTZ7LH01XjIkLCBhaXjDrSBxdWUgbm8gcG90IHNlciB1biB0cmlhbmdsZSByZWN0YW5nbGUgYW1iIGFxdWVzdHMgY29zdGF0cykuIiwgIkxhIGhpcG90ZW51c2EgaGEgZGUgc2VyIGVsIGNvc3RhdCBNw4lTIExMQVJHIGRlbCB0cmlhbmdsZSByZWN0YW5nbGUsIG1haSBlbCBtw6lzIGN1cnQ6IHJldmlzYSBxdWluIGRlbHMgdHJlcyB2YWxvcnMgc3VydCBkZSBsJ2FycmVsIHF1YWRyYWRhLiIsICJDb21wcm92YSBwZXIgUGl0w6Bnb3JlczogJDheMis2XjI9NjQrMzY9MTAwPTEwXjIkLCBubyAkMTZeMiQ7IHJldmlzYSBlbCBjw6BsY3VsIGRlIGwnYXJyZWwgcXVhZHJhZGEgZmluYWwuIl0sICJlcnIiOiBbIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIkRpbnMgbCdhcnJlbDogJGFeMitcXGRmcmFjezl9ezE2fWFeMj1cXGRmcmFjezI1fXsxNn1hXjIkLCBpIGNvbSBxdWUgJGE+MCQ6ICRcXHNxcnR7XFxkZnJhY3syNX17MTZ9YV4yfT1cXGRmcmFjezV9ezR9YSQiLCAiTCdlcXVhY2nDsyBxdWVkYSAkYStcXGRmcmFjMzRhK1xcZGZyYWM1NGE9MjQgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyAzYT0yNCBcXDtcXExvbmdyaWdodGFycm93XFw7IGE9OCQiLCAiQ2F0ZXQgY3VydDogJFxcZGZyYWMzNFxcY2RvdDg9NiQgbTsgaGlwb3RlbnVzYTogJFxcZGZyYWM1NFxcY2RvdDg9MTAkIG0iXX0="
  },
  {
   "id": "96",
   "ex": 96,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Per enrajolar una sala de 8 m de llarg per 6 m d'ample s'han fet servir 300 rajoles quadrades. Quant mesura el costat de les rajoles?",
   "opcions": [
    "$4$ m de costat",
    "$0{,}16$ m de costat",
    "$1{,}25$ m de costat",
    "$0{,}4$ m (és a dir, $40$ cm) de costat"
   ],
   "pistes": [
    "La superfície de la sala és $8\\cdot6=48$ m$^2$. Si $L$ és el costat d'una rajola, la seva àrea és $L^2$.",
    "Com que se n'han fet servir $300$ per cobrir tota la sala: $300\\cdot L^2=48$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJDb21wcm92YS1obzogdW5hIHJham9sYSBkZSAkNCQgbSBkZSBjb3N0YXQgdGluZHJpYSAkMTYkIG0kXjIkLCBtb2x0IG3DqXMgZ3JhbiBxdWUgdG90YSBsYSBzYWxhOyByZXZpc2EgbCdlcXVhY2nDsyAkMzAwXFxjZG90IExeMj00OCQuIiwgIkFxdWVzdCBzZXJpYSBlbCB2YWxvciBkZSAkTF4yJCAobCfDoHJlYSBkJ3VuYSByYWpvbGEpLCBubyBkZSAkTCQgKGVsIGNvc3RhdCk6IGVuY2FyYSBmYWx0YSBmZXIgbCdhcnJlbCBxdWFkcmFkYS4iLCAiQXF1ZXN0IHZhbG9yIHN1cnQgZGUgZGl2aWRpciAkMzAwJCBlbnRyZSAkNDgkIGVubGxvYyBkZSAkNDgkIGVudHJlICQzMDAkIGRpbnMgZGUgbCdlcXVhY2nDsyAkMzAwXFxjZG90IExeMj00OCQuIiwgIiJdLCAiZXJyIjogWyJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iLCAiQVJSRUxfT0JMSURBREEiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiIl0sICJyZXMiOiBbIiQzMDBcXGNkb3QgTF4yPTQ4IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgTF4yPVxcZGZyYWN7NDh9ezMwMH09XFxkZnJhY3s0fXsyNX0kIiwgIiRMPVxcc3FydHtcXGRmcmFjezR9ezI1fX09XFxkZnJhY3syfXs1fT0weyx9NCQgbSJdfQ=="
  },
  {
   "id": "97",
   "ex": 97,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En Pau té 8 anys i la seva germana, 2 anys. Al cap de quants anys l'edat d'en Pau serà el doble que la de la seva germana?",
   "opcions": [
    "D'aquí a $4$ anys",
    "D'aquí a $6$ anys",
    "Ara mateix (0 anys)",
    "D'aquí a $2$ anys"
   ],
   "pistes": [
    "Anomena $x$ els anys que han de passar. En Pau tindrà $8+x$ anys, i la germana, $2+x$.",
    "Planteja l'equació \"el doble\": $8+x=2(2+x)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQ29tcHJvdmEtaG86IGQnYXF1w60gYSA2IGFueXMgZW4gUGF1IHRpbmRyaWEgJDE0JCBpIGxhIGdlcm1hbmEgJDgkOyAkMTQkIG5vIMOpcyBlbCBkb2JsZSBkZSAkOCQuIiwgIkFyYSBlbiBQYXUgdMOpICQ4JCBpIGxhIGdlcm1hbmEgJDIkOiAkOCQgw6lzIGVsIHF1w6BkcnVwbGUgZGUgJDIkLCBubyBlbCBkb2JsZTsgY2FsIHF1ZSBwYXNzaSB0ZW1wcyBwZXJxdcOoIGxhIHByb3BvcmNpw7MgY2FudmnDryBjYXAgYWwgZG9ibGUuIiwgIkNvbXByb3ZhLWhvOiBkJ2FxdcOtIGEgMiBhbnlzIGVuIFBhdSB0aW5kcmlhICQxMCQgaSBsYSBnZXJtYW5hICQ0JDsgJDEwJCBubyDDqXMgZWwgZG9ibGUgZGUgJDQkLiJdLCAiZXJyIjogWyIiLCAiT1JEUkVfUkVTVEEiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlBST0dSRVNTSU9fSU5WRU5UQURBIl0sICJyZXMiOiBbIiQ4K3g9MigyK3gpIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgOCt4PTQrMngkIiwgIiQ4LTQ9MngteCQiLCAiJHg9NCQgYW55cyJdfQ=="
  },
  {
   "id": "98",
   "ex": 98,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En Tomàs és 5 anys més gran que l'Elena i, fa 10 anys, l'edat d'en Tomàs era el doble de l'edat de l'Elena. Quina edat té en Tomàs?",
   "opcions": [
    "L'edat d'en Tomàs no es pot determinar amb aquestes dades",
    "En Tomàs té $25$ anys (i l'Elena, $20$)",
    "En Tomàs té $20$ anys (i l'Elena, $15$)",
    "En Tomàs té $15$ anys (i l'Elena, $10$)"
   ],
   "pistes": [
    "Anomena $t$ l'edat d'en Tomàs i $e$ la de l'Elena. La primera condició dona $t=e+5$.",
    "\"Fa 10 anys\" és $t-10$ i $e-10$; la segona condició diu que el primer és el doble del segon: $t-10=2(e-10)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBzaXN0ZW1hIGRlIGR1ZXMgZXF1YWNpb25zIChkaWZlcsOobmNpYSBkJ2VkYXRzIGkgcmVsYWNpw7MgXCJmYSAxMCBhbnlzXCIpIHTDqSBzb2x1Y2nDsyDDum5pY2E6IG5vIGNhbCBkZXNjYXJ0YXIgZWwgcHJvYmxlbWEuIiwgIkNvbXByb3ZhIGxhIHNlZ29uYSBjb25kaWNpw7M6IGZhIDEwIGFueXMgZW4gVG9tw6BzIHRlbmlhICQxNSQgaSBsJ0VsZW5hICQxMCQ7ICQxNSQgbm8gw6lzIGVsIGRvYmxlIGRlICQxMCQuIiwgIiIsICJDb21wcm92YSBsYSBzZWdvbmEgY29uZGljacOzOiBmYSAxMCBhbnlzIGVuIFRvbcOgcyB0ZW5pYSAkNSQgaSBsJ0VsZW5hICQwJDsgJDUkIG5vIMOpcyBlbCBkb2JsZSBkZSAkMCQgKGkgYSBtw6lzICQwJCBhbnlzIGZhIDEwIGFueXMgbm8gdMOpIHNlbnRpdCBhbWIgYXF1ZXN0ZXMgZGFkZXMpLiJdLCAiZXJyIjogWyJQUk9HUkVTU0lPX0lOVkVOVEFEQSIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiIsICJERVNQTEFDQU1FTlRfSU5ERVgiXSwgInJlcyI6IFsiU2lzdGVtYTogJHQ9ZSs1LFxccXVhZCB0LTEwPTIoZS0xMCkkIiwgIlN1YnN0aXR1aW50OiAkKGUrNSktMTA9MihlLTEwKSBcXDtcXExvbmdyaWdodGFycm93XFw7IGUtNT0yZS0yMCQiLCAiJC01KzIwPTJlLWUgXFw7XFxMb25ncmlnaHRhcnJvd1xcOyBlPTE1JDsgcGVyIHRhbnQgJHQ9MTUrNT0yMCQiXX0="
  },
  {
   "id": "99",
   "ex": 99,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Canviem el valor de diverses monedes d'1 cèntim d'euro per monedes de 5 cèntims, amb la qual cosa obtenim 60 monedes menys. Quantes monedes hi ha de cada classe?",
   "opcions": [
    "$60$ monedes d'1 cèntim, que es canvien per $12$ monedes de $5$ cèntims",
    "$100$ monedes d'1 cèntim, que es canvien per $20$ monedes de $5$ cèntims",
    "$75$ monedes d'1 cèntim, que es canvien per $15$ monedes de $5$ cèntims",
    "$300$ monedes d'1 cèntim, que es canvien per $60$ monedes de $5$ cèntims"
   ],
   "pistes": [
    "Anomena $n$ el nombre de monedes d'1 cèntim. Cada $5$ monedes originals es converteixen en $1$ moneda nova, així que en queden $\\frac{n}{5}$.",
    "La diferència de nombre de monedes és $60$: $n-\\frac{n}{5}=60$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJDb21wcm92YS1obzogJDYwLTEyPTQ4JCwgbm8gJDYwJDsgYXF1ZXN0YSBwYXJlbGxhIG5vIGNvbXBsZWl4IGxhIGNvbmRpY2nDsyBkZSBcIjYwIG1vbmVkZXMgbWVueXNcIi4iLCAiQ29tcHJvdmEtaG86ICQxMDAtMjA9ODAkLCBubyAkNjAkOyBhcXVlc3RhIHBhcmVsbGEgbm8gY29tcGxlaXggbGEgY29uZGljacOzIGV4YWN0YSBkZSBsJ2VudW5jaWF0LiIsICIiLCAiQ29tcHJvdmEtaG86ICQzMDAtNjA9MjQwJCwgbm8gJDYwJDsgcmV2aXNhIGwnZXF1YWNpw7MgJG4tXFxmcmFje259ezV9PTYwJC4iXSwgImVyciI6IFsiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiIiwgIlNJR05FX1FVT0NJRU5UIl0sICJyZXMiOiBbIiRuLVxcZGZyYWN7bn17NX09NjAkOyBtdWx0aXBsaXF1ZW0gcGVyICQ1JDogJDVuLW49MzAwIFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNG49MzAwJCIsICIkbj03NSQgbW9uZWRlcyBkJzEgY8OobnRpbSIsICJFcyBjb252ZXJ0ZWl4ZW4gZW4gJFxcZGZyYWN7NzV9ezV9PTE1JCBtb25lZGVzIGRlICQ1JCBjw6hudGltcyJdfQ=="
  },
  {
   "id": "100",
   "ex": 100,
   "ap": "",
   "bloc": "problemes",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "Un matrimoni i els seus tres fills viatgen en tren. Si el bitllet d'adult costa el doble que el de nen i el cost total dels bitllets és de 8,75 €, quant ha costat cada bitllet?",
   "opcions": [
    "Bitllet de nen: $0{,}875$ €; bitllet d'adult: $1{,}75$ €",
    "Bitllet de nen: $2{,}5$ €; bitllet d'adult: $1{,}25$ €",
    "Bitllet de nen: $1{,}75$ €; bitllet d'adult: $3{,}5$ €",
    "Bitllet de nen: $1{,}25$ €; bitllet d'adult: $2{,}5$ €"
   ],
   "pistes": [
    "Anomena $n$ el preu del bitllet de nen; el d'adult val $2n$. Hi ha $2$ adults i $3$ nens.",
    "Planteja el cost total: $2\\cdot(2n)+3\\cdot n=8{,}75$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJSZXZpc2EgcXVhbnRzIGFkdWx0cyBpIHF1YW50cyBuZW5zIGhpIGhhOiAyIGFkdWx0cyBpIDMgbmVucywgbm8gMSBkZSBjYWRhLCBlbiBsJ2VxdWFjacOzIGRlbCBjb3N0IHRvdGFsLiIsICJMJ2VudW5jaWF0IGRpdSBxdWUgZWwgYml0bGxldCBkJ0FEVUxUIGNvc3RhIGVsIGRvYmxlIHF1ZSBlbCBkZSBORU4sIG5vIGFsIHJldsOpczogcmV2aXNhIHF1aW4gZGVscyBkb3MgdmFsb3JzIMOpcyBtw6lzIGdyYW4uIiwgIkNvbXByb3ZhLWhvOiAkMlxcY2RvdCgyXFxjZG90MXssfTc1KSszXFxjZG90MXssfTc1PTcrNXssfTI1PTEyeyx9MjUkIOKCrCwgbm8gJDh7LH03NSQg4oKsLiIsICIiXSwgImVyciI6IFsiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIiJdLCAicmVzIjogWyIkMlxcY2RvdCgybikrM249OHssfTc1IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgNG4rM249OHssfTc1JCIsICIkN249OHssfTc1IFxcO1xcTG9uZ3JpZ2h0YXJyb3dcXDsgbj0xeyx9MjUkIiwgIkVsIGJpdGxsZXQgZCdhZHVsdCB2YWwgZWwgZG9ibGU6ICQyXFxjZG90MXssfTI1PTJ7LH01JCDigqwiXX0="
  }
 ]
};
