/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 10,
 "titol": "Full 10 — Funcions",
 "subtitol": "Concepte de funció, domini i recorregut, creixement, i funcions lineals i quadràtiques.",
 "blocs": [
  {
   "id": "concepte_funcio",
   "titol": "Concepte de funció",
   "descripcio": "Relacions que són o no funcions, càlcul d'imatges, i domini, recorregut i creixement llegits d'una gràfica.",
   "items": [
    "200a",
    "200b",
    "200c",
    "201a",
    "201b",
    "201c",
    "201d",
    "202a",
    "202b",
    "202c",
    "202d",
    "203a",
    "203b",
    "203c",
    "203d",
    "206a",
    "206b",
    "206c"
   ]
  },
  {
   "id": "funcions_lineals",
   "titol": "Funcions lineals i afins",
   "descripcio": "Pendent i ordenada a l'origen, creixement sense representar, i equació de la recta a partir de dos punts.",
   "items": [
    "207a",
    "207b",
    "207c",
    "207d",
    "208a",
    "208b",
    "208c",
    "208d",
    "208e",
    "208f",
    "209a",
    "209b",
    "209c",
    "209d"
   ]
  },
  {
   "id": "funcions_quadratiques",
   "titol": "Funcions quadràtiques",
   "descripcio": "Obertura i amplada de la paràbola, vèrtex, talls amb els eixos i eix de simetria.",
   "items": [
    "212a",
    "212b",
    "212c",
    "212d",
    "214a",
    "214b",
    "215",
    "216a",
    "216b",
    "216c",
    "216d",
    "217a",
    "217b"
   ]
  }
 ],
 "errors": {
  "AMPLADA_INVERTIDA": "Com més gran és $|a|$, més ESTRETA és la paràbola, no més ampla: el coeficient estira la corba cap amunt.",
  "DOMINI_MAL_LLEGIT": "Has decidit sense mirar bé quin és el conjunt de partida. Si una relació és funció o no depèn del domini: canviar-lo pot canviar la resposta, així que el primer que cal fixar és de què parteixes.",
  "DOMINI_RECORREGUT_INTERCANVIATS": "El domini són els valors de $x$ i el recorregut els de $y$. Els has intercanviat: mira l'eix horitzontal per al domini i el vertical per al recorregut.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "PENDENT_COM_NUL": "Una funció afí només és constant si el pendent és $0$. Si el pendent és qualsevol altre nombre, la funció puja o baixa sempre.",
  "PENDENT_ORDENADA_INTERCANVIATS": "El pendent és el nombre que MULTIPLICA la $x$; l'ordenada a l'origen és el terme independent, el que va sol. Els has intercanviat.",
  "POTENCIA_COM_PRODUCTE": "$x^2$ no és $2x$: és $x\\cdot x$. Prova-ho amb $x=3$, que dona $9$ i no $6$.",
  "REPRESENTACIO_INNECESSARIA": "No cal dibuixar la gràfica: el signe del pendent ja diu si la funció creix o decreix, i el de $a$ si la paràbola s'obre amunt o avall.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_PENDENT_INVERTIT": "El pendent conserva el signe amb què apareix a l'expressió: no cal canviar-l'hi en llegir-lo.",
  "SIGNE_TERME_INDEPENDENT": "Revisa el signe del terme independent (el que no porta $x$): és fàcil perdre'l en sumar o restar.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "200a",
   "ex": 200,
   "ap": "a",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Raona quines de les relacions següents corresponen a funcions.",
   "enunciat": "La mida d'una paret i la quantitat de pintura necessària per pintar-la.",
   "opcions": [
    "SÍ és una funció: per a cada mida de paret (suposant un gruix de pintura fix) hi ha una única quantitat de pintura necessària.",
    "NO és una funció: hi pot haver parets de la mateixa mida que necessitin diferent quantitat de pintura segons el color.",
    "NO és una funció: la mateixa mida de paret podria necessitar quantitats de pintura diferents segons qui la pinti.",
    "Depèn: només és una funció si la paret és rectangular."
   ],
   "pistes": [
    "Una relació és una funció quan a cada valor de la primera magnitud li correspon un ÚNIC valor de la segona, mai més d'un."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcXVlIGZhIHF1ZSB1bmEgcmVsYWNpw7Mgc2lndWkgZnVuY2nDsyDDqXMgcXVlIGEgY2FkYSBtaWRhIGxpIGNvcnJlc3Bvbmd1aSB1biDDum5pYyB2YWxvciBkZSBwaW50dXJhIHNvdGEgbGVzIG1hdGVpeGVzIGNvbmRpY2lvbnMgKG1hdGVpeCBncnVpeCBkZSBjYXBhKTogYW1iIGFpeMOyIGZpeGF0LCBTw40gw6lzIHVuYSBmdW5jacOzLiIsICJGaXhhbnQgZWwgZ3J1aXggZGUgbGEgcGludHVyYSAoY29tIHNlIHNvYnJlZW50w6luIGVuIHVuIGV4ZXJjaWNpIGQnYXF1ZXN0IHRpcHVzKSwgY2FkYSBtaWRhIGRldGVybWluYSB1bmEgw7puaWNhIHF1YW50aXRhdDogU8ONIMOpcyB1bmEgZnVuY2nDsywgZW5jYXJhIHF1ZSBhIGxhIHByw6BjdGljYSBoaSBwdWd1aW4gaGF2ZXIgcGV0aXRlcyB2YXJpYWNpb25zIHBlciBxdWkgcGludGEuIiwgIkxhIGZvcm1hIGNvbmNyZXRhIGRlIGxhIHBhcmV0IG5vIGFmZWN0YSBzaSBsYSByZWxhY2nDsyDDqXMgdW5hIGZ1bmNpw7M6IGVsIHF1ZSBpbXBvcnRhIMOpcyBxdWUgY2FkYSBtaWRhICjDoHJlYSkgZGV0ZXJtaW5pIHVuYSDDum5pY2EgcXVhbnRpdGF0IGRlIHBpbnR1cmEsIHNpZ3VpIHF1aW5hIHNpZ3VpIGxhIGZvcm1hLiJdLCAiZXJyIjogWyIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJWRVJFRElDVEVfSU5WRVJUSVQiXSwgInJlcyI6IFsiRml4YXQgZWwgZ3J1aXggZGUgbGEgcGludHVyYSwgY2FkYSBtaWRhIGRlIHBhcmV0IGRldGVybWluYSB1bmEgw7puaWNhIHF1YW50aXRhdCBuZWNlc3PDoHJpYTogw6lzIHVuYSBmdW5jacOzLiJdfQ=="
  },
  {
   "id": "200b",
   "ex": 200,
   "ap": "b",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Raona quines de les relacions següents corresponen a funcions.",
   "enunciat": "Cada mes d'un any concret (per exemple, el 2025) i el seu nombre de dies.",
   "opcions": [
    "Depèn: només és una funció si l'any no és de traspàs.",
    "NO és una funció: el febrer no sempre té el mateix nombre de dies (28 o 29, segons l'any), així que un mateix mes té més d'un valor possible.",
    "SÍ és una funció: fixat l'any, cada mes té un únic nombre de dies, determinat pel calendari.",
    "NO és una funció: mesos diferents poden tenir el mateix nombre de dies (per exemple, abril i juny en tenen 30 tots dos)."
   ],
   "pistes": [
    "Comprova si algun mes d'aquell any podria tenir dos nombres de dies diferents alhora.",
    "Fixa't en què és exactament el conjunt de partida: els mesos d'un any determinat, no \"els mesos\" en abstracte."
   ],
   "nota": "L'enunciat original diu només \"cada mes de l'any\". Aquí s'hi ha afegit \"d'un any concret\" perquè, sense fixar l'any, el febrer té dues imatges possibles ($28$ i $29$ dies) i la relació NO seria una funció: tal com estava, l'exercici no tenia una resposta única.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJUYW50IHNpIGwnYW55IMOpcyBkZSB0cmFzcMOgcyBjb20gc2kgbm8sIHVuIGNvcCBmaXhhdCBsJ2FueSBlbCBmZWJyZXIgdMOpIHVuIG5vbWJyZSBkZSBkaWVzIGkgbm9tw6lzIHVuICgkMjkkIG8gJDI4JCk6IGVuIHRvdHMgZG9zIGNhc29zIGxhIHJlbGFjacOzIMOpcyB1bmEgZnVuY2nDsy4iLCAiQWl4w7Igc2VyaWEgY2VydCBzaSBlbCBjb25qdW50IGRlIHBhcnRpZGEgZm9zc2luIGVscyBkb3R6ZSBtZXNvcyBTRU5TRSBkaXIgZGUgcXVpbiBhbnk6IGxsYXZvcnMgZWwgZmVicmVyIHRpbmRyaWEgZHVlcyBpbWF0Z2VzIHBvc3NpYmxlcyBpIE5PIHNlcmlhIHVuYSBmdW5jacOzLiBQZXLDsiBhcXXDrSBsJ2FueSBlc3TDoCBmaXhhdCwgaSBhbWIgbCdhbnkgZml4YXQgZWwgZmVicmVyIHTDqSB1biDDum5pYyBub21icmUgZGUgZGllcy4iLCAiIiwgIlF1ZSBkb3MgbWVzb3MgRElGRVJFTlRTIGNvbXBhcnRlaXhpbiBlbCBtYXRlaXggbm9tYnJlIGRlIGRpZXMgbm8gdHJlbmNhIHF1ZSBzaWd1aSB1bmEgZnVuY2nDszogZWwgcXVlIGNhbCBjb21wcm92YXIgw6lzIHF1ZSB1biBtYXRlaXggbWVzIG5vIHRpbmd1aSBtYWkgZG9zIHZhbG9ycyBhbGhvcmEsIGkgYWl4w7IgZXMgY29tcGxlaXguIl0sICJlcnIiOiBbIkRPTUlOSV9NQUxfTExFR0lUIiwgIkRPTUlOSV9NQUxfTExFR0lUIiwgIiIsICJWRVJFRElDVEVfSU5WRVJUSVQiXSwgInJlcyI6IFsiRml4YXQgbCdhbnksIGNhZGEgbWVzIHTDqSB1biDDum5pYyBub21icmUgZGUgZGllczogw6lzIHVuYSBmdW5jacOzLiIsICJDb21wdGUgYW1iIGVsIGNvbmp1bnQgZGUgcGFydGlkYTogc2kgZm9zc2luIFwiZWxzIG1lc29zXCIgc2Vuc2UgY29uY3JldGFyIGwnYW55LCBlbCBmZWJyZXIgdGluZHJpYSBkdWVzIGltYXRnZXMgKCQyOCQgaSAkMjkkKSBpIGxhIHJlbGFjacOzIE5PIHNlcmlhIHVuYSBmdW5jacOzLiBRdWluYSDDqXMgbGEgcmVzcG9zdGEgZGVww6huIGRlIGNvbSBlcyBkZWZpbmVpeCBlbCBkb21pbmkuIl19"
  },
  {
   "id": "200c",
   "ex": 200,
   "ap": "c",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Raona quines de les relacions següents corresponen a funcions.",
   "enunciat": "El radi d'una circumferència i la longitud del seu perímetre.",
   "opcions": [
    "NO és una funció: circumferències de radis diferents poden tenir perímetres semblants, així que no es pot saber amb certesa.",
    "SÍ és una funció: cada radi determina una única longitud de perímetre, mitjançant la fórmula $L=2\\pi r$.",
    "NO és una funció: el perímetre depèn també del diàmetre, no només del radi.",
    "Depèn: només és una funció si es fa servir un valor aproximat de $\\pi$."
   ],
   "pistes": [
    "La fórmula del perímetre, $L=2\\pi r$, assigna a cada radi un únic valor de $L$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJRdWUgZG9zIHBlcsOtbWV0cmVzIHNpZ3VpbiBcXGVtcGh7c2VtYmxhbnRzfSBubyDDqXMgZWwgbWF0ZWl4IHF1ZSBpZ3VhbHM6IGxhIGbDs3JtdWxhICRMPTJcXHBpIHIkIGRvbmEsIHBlciBhIGNhZGEgcmFkaSBjb25jcmV0LCB1biDDum5pYyB2YWxvciBleGFjdGUgZGUgcGVyw61tZXRyZSwgc2Vuc2UgYW1iaWfDvGl0YXQuIiwgIiIsICJFbCBkacOgbWV0cmUgw6lzIHNlbXByZSBlbCBkb2JsZSBkZWwgcmFkaSAoJGQ9MnIkKSwgYWl4w60gcXVlIG5vIMOpcyB1bmEgbWFnbml0dWQgaW5kZXBlbmRlbnQ6IGZpeGF0IGVsIHJhZGksIGVsIHBlcsOtbWV0cmUgJEw9MlxccGkgciQgcXVlZGEgY29tcGxldGFtZW50IGRldGVybWluYXQuIiwgIkwnYXByb3hpbWFjacOzIGRlICRcXHBpJCBxdWUgZXMgZmFjaSBzZXJ2aXIgbm8gY2FudmlhIHF1ZSBsYSByZWxhY2nDsyBzaWd1aSB1bmEgZnVuY2nDszogcGVyIGEgY2FkYSByYWRpIGhpIGhhIHVuIMO6bmljIHBlcsOtbWV0cmUgY29ycmVzcG9uZW50LCBleGFjdGUgbyBhcHJveGltYXQuIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICIiLCAiVkVSRURJQ1RFX0lOVkVSVElUIiwgIlZFUkVESUNURV9JTlZFUlRJVCJdLCAicmVzIjogWyJQZXIgYSBjYWRhIHJhZGkgJHIkIGhpIGhhIHVuIMO6bmljIHBlcsOtbWV0cmUgJEw9MlxccGkgciQ6IMOpcyB1bmEgZnVuY2nDsy4iXX0="
  },
  {
   "id": "201a",
   "ex": 201,
   "ap": "a",
   "bloc": "concepte_funcio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la imatge dels valors $x=2,\\ -2,\\ 3,\\ -3,\\ 1,\\ -1$ per a cada funció.",
   "enunciat": "$f(x)=5x^2-1$",
   "opcions": [
    "$f(2)=19,\\ f(-2)=-21,\\ f(3)=44,\\ f(-3)=-46,\\ f(1)=4,\\ f(-1)=-6$",
    "$f(2)=19,\\ f(-2)=19,\\ f(3)=44,\\ f(-3)=44,\\ f(1)=4,\\ f(-1)=4$",
    "$f(2)=19,\\ f(-2)=-21,\\ f(3)=29,\\ f(-3)=-31,\\ f(1)=9,\\ f(-1)=-11$",
    "$f(2)=20,\\ f(-2)=20,\\ f(3)=45,\\ f(-3)=45,\\ f(1)=5,\\ f(-1)=5$"
   ],
   "pistes": [
    "Substitueix cada valor de $x$ a l'expressió $5x^2-1$, calculant primer el quadrat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIkeF4yJCBzZW1wcmUgw6lzIHBvc2l0aXUsIHRhbnQgc2kgJHgkIMOpcyBwb3NpdGl1IGNvbSBuZWdhdGl1OiAkKC0yKV4yPTQkLCBpZ3VhbCBxdWUgJDJeMj00JC4iLCAiIiwgIiR4XjIkIG5vIMOpcyAkMngkOiBwZXIgZXhlbXBsZSwgcGVyICR4PTIkLCAkeF4yPTQkIChubyAkMlxcY2RvdCAyPTQkLi4uIHByb3ZhLWhvIGFtYiAkeD0zJDogJHheMj05XFxuZXEgNiQpLiIsICJGYWx0YSByZXN0YXIgbCckMSQgZmluYWwgYSBjYWRhIGltYXRnZS4iXSwgImVyciI6IFsiU0lHTkVfRklOQUwiLCAiIiwgIlBPVEVOQ0lBX0NPTV9QUk9EVUNURSIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIlBlciBhIGNhZGEgdmFsb3IsIGNhbGN1bGEgcHJpbWVyICR4XjIkIGkgZGVzcHLDqXMgbXVsdGlwbGljYSBwZXIgJDUkIGkgcmVzdGEgJDEkLiIsICIkZigyKT01XFxjZG90IDQtMT0xOSQsICRmKC0yKT01XFxjZG90IDQtMT0xOSQgKGVsIHF1YWRyYXQgZWxpbWluYSBlbCBzaWduZSkuIiwgIiRmKDMpPTVcXGNkb3QgOS0xPTQ0JCwgJGYoLTMpPTQ0JCwgJGYoMSk9NCQsICRmKC0xKT00JC4iXX0="
  },
  {
   "id": "201b",
   "ex": 201,
   "ap": "b",
   "bloc": "concepte_funcio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la imatge dels valors $x=2,\\ -2,\\ 3,\\ -3,\\ 1,\\ -1$ per a cada funció.",
   "enunciat": "$f(x)=2x^2-x$",
   "opcions": [
    "$f(2)=6,\\ f(-2)=-6,\\ f(3)=9,\\ f(-3)=-9,\\ f(1)=3,\\ f(-1)=-3$",
    "$f(2)=14,\\ f(-2)=18,\\ f(3)=33,\\ f(-3)=39,\\ f(1)=3,\\ f(-1)=5$",
    "$f(2)=6,\\ f(-2)=10,\\ f(3)=15,\\ f(-3)=21,\\ f(1)=1,\\ f(-1)=3$",
    "$f(2)=10,\\ f(-2)=6,\\ f(3)=21,\\ f(-3)=15,\\ f(1)=3,\\ f(-1)=1$"
   ],
   "pistes": [
    "Substitueix cada valor de $x$ a $2x^2-x$, respectant l'ordre: primer el quadrat, després la resta."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyIkeF4yJCBubyDDqXMgJDJ4JDogY29tcHJvdmEtaG8gYW1iICR4PTMkLCBvbiAkeF4yPTkkIGkgbm8gJDJcXGNkb3QgMz02JC4iLCAiRWwgcXVhZHJhdCBub23DqXMgYWZlY3RhIGxhICR4JCwgbm8gZWwgJDJ4JCBzZW5jZXI6IMOpcyAkMlxcY2RvdCB4XjIkLCBubyAkKDJ4KV4yJC4iLCAiIiwgIkNhbCBSRVNUQVIgJHgkLCBubyBzdW1hci1sbzogJGYoeCk9MnheMi14JC4iXSwgImVyciI6IFsiUE9URU5DSUFfQ09NX1BST0RVQ1RFIiwgIlBPVEVOQ0lBX0FQTElDQURBX01BTEFNRU5UIiwgIiIsICJTVU1BX0VOX0xMT0NfUkVTVEEiXSwgInJlcyI6IFsiUGVyIGEgY2FkYSB2YWxvciwgY2FsY3VsYSAkeF4yJCwgbXVsdGlwbGljYSBwZXIgJDIkIGkgcmVzdGEgJHgkLiIsICIkZigyKT0yXFxjZG90IDQtMj02JCwgJGYoLTIpPTJcXGNkb3QgNC0oLTIpPTEwJC4iLCAiJGYoMyk9MlxcY2RvdCA5LTM9MTUkLCAkZigtMyk9MlxcY2RvdCA5LSgtMyk9MjEkLCAkZigxKT0xJCwgJGYoLTEpPTMkLiJdfQ=="
  },
  {
   "id": "201c",
   "ex": 201,
   "ap": "c",
   "bloc": "concepte_funcio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la imatge dels valors $x=2,\\ -2,\\ 3,\\ -3,\\ 1,\\ -1$ per a cada funció.",
   "enunciat": "$f(x)=x^2-x-1$",
   "opcions": [
    "$f(2)=1,\\ f(-2)=5,\\ f(3)=5,\\ f(-3)=11,\\ f(1)=-1,\\ f(-1)=1$",
    "$f(2)=5,\\ f(-2)=1,\\ f(3)=11,\\ f(-3)=5,\\ f(1)=1,\\ f(-1)=-1$",
    "$f(2)=2,\\ f(-2)=6,\\ f(3)=6,\\ f(-3)=12,\\ f(1)=0,\\ f(-1)=2$",
    "$f(2)=1,\\ f(-2)=-3,\\ f(3)=2,\\ f(-3)=-4,\\ f(1)=0,\\ f(-1)=-2$"
   ],
   "pistes": [
    "Substitueix cada valor de $x$ a $x^2-x-1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdGVybWUgJC14JCB0w6kgc2lnbmUgbmVnYXRpdTogY2FsIFJFU1RBUiAkeCQsIG5vIHN1bWFyLWxvLiIsICJGYWx0YSByZXN0YXIgbCckMSQgZmluYWwgYSBjYWRhIGltYXRnZS4iLCAiJHheMiQgbm8gw6lzICQyeCQ6IGNvbXByb3ZhLWhvIGFtYiAkeD0zJCwgb24gJHheMj05JCBpIG5vICQyXFxjZG90IDM9NiQuIl0sICJlcnIiOiBbIiIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlBPVEVOQ0lBX0NPTV9QUk9EVUNURSJdLCAicmVzIjogWyJQZXIgYSBjYWRhIHZhbG9yLCBjYWxjdWxhICR4XjIkLCByZXN0YSAkeCQgaSByZXN0YSAkMSQuIiwgIiRmKDIpPTQtMi0xPTEkLCAkZigtMik9NC0oLTIpLTE9NSQuIiwgIiRmKDMpPTktMy0xPTUkLCAkZigtMyk9OS0oLTMpLTE9MTEkLCAkZigxKT0tMSQsICRmKC0xKT0xJC4iXX0="
  },
  {
   "id": "201d",
   "ex": 201,
   "ap": "d",
   "bloc": "concepte_funcio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la imatge dels valors $x=2,\\ -2,\\ 3,\\ -3,\\ 1,\\ -1$ per a cada funció.",
   "enunciat": "$f(x)=-x^2+1$",
   "opcions": [
    "$f(2)=-5,\\ f(-2)=-5,\\ f(3)=-10,\\ f(-3)=-10,\\ f(1)=-2,\\ f(-1)=-2$",
    "$f(2)=5,\\ f(-2)=5,\\ f(3)=10,\\ f(-3)=10,\\ f(1)=2,\\ f(-1)=2$",
    "$f(2)=-3,\\ f(-2)=5,\\ f(3)=-5,\\ f(-3)=7,\\ f(1)=-1,\\ f(-1)=3$",
    "$f(2)=-3,\\ f(-2)=-3,\\ f(3)=-8,\\ f(-3)=-8,\\ f(1)=0,\\ f(-1)=0$"
   ],
   "pistes": [
    "Substitueix cada valor de $x$ a $-x^2+1$: calcula primer $x^2$ (sempre positiu) i després canvia'n el signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCAkKzEkIGZpbmFsIMOpcyBwb3NpdGl1OiBjYWwgU1VNQVItbG8sIG5vIHJlc3Rhci1sby4iLCAiRWwgc2lnbmUgJC0kIGRhdmFudCAkeF4yJCBhZmVjdGEgc2VtcHJlLCB0YW1iw6kgcXVhbiAkeCQgw6lzIG5lZ2F0aXU6ICQtKC0yKV4yPS00JCwgbm8gJCs0JC4iLCAiJHheMiQgbm8gw6lzICQyeCQ6IGNvbXByb3ZhLWhvIGFtYiAkeD0zJCwgb24gJHheMj05JCBpIG5vICQyXFxjZG90IDM9NiQuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJTSUdORV9GSU5BTCIsICJQT1RFTkNJQV9DT01fUFJPRFVDVEUiLCAiIl0sICJyZXMiOiBbIlBlciBhIGNhZGEgdmFsb3IsIGNhbGN1bGEgJHheMiQsIGNhbnZpYSduIGVsIHNpZ25lIGkgc3VtYSAkMSQuIiwgIiRmKDIpPS00KzE9LTMkLCAkZigtMik9LTQrMT0tMyQgKGVsIHF1YWRyYXQgZWxpbWluYSBlbCBzaWduZSBkZSAkeCQgYWJhbnMgZGUgY2Fudmlhci1sbykuIiwgIiRmKDMpPS04JCwgJGYoLTMpPS04JCwgJGYoMSk9MCQsICRmKC0xKT0wJC4iXX0="
  },
  {
   "id": "202a",
   "ex": 202,
   "ap": "a",
   "bloc": "concepte_funcio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la imatge dels valors $x=-2,\\ -1,\\ 0,\\ 1,\\ 2$ per a cada funció. Quan el resultat no sigui exacte, arrodoneix a les centèsimes.",
   "enunciat": "$f(x)=x^3-1$",
   "opcions": [
    "$f(-2)=-8,\\ f(-1)=-1,\\ f(0)=0,\\ f(1)=1,\\ f(2)=8$",
    "$f(-2)=-7,\\ f(-1)=-4,\\ f(0)=-1,\\ f(1)=2,\\ f(2)=5$",
    "$f(-2)=-9,\\ f(-1)=-2,\\ f(0)=-1,\\ f(1)=0,\\ f(2)=7$",
    "$f(-2)=7,\\ f(-1)=0,\\ f(0)=-1,\\ f(1)=0,\\ f(2)=7$"
   ],
   "pistes": [
    "Substitueix cada valor a $x^3-1$, calculant primer el cub (recorda que el cub d'un negatiu és negatiu)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJGYWx0YSByZXN0YXIgbCckMSQgZmluYWwgYSBjYWRhIGltYXRnZS4iLCAiJHheMyQgbm8gw6lzICQzeCQ6IHBlciBleGVtcGxlLCBwZXIgJHg9MiQsICR4XjM9OCQgKG5vICQzXFxjZG90IDI9NiQpLiIsICIiLCAiRWwgY3ViIGQndW4gbm9tYnJlIG5lZ2F0aXUgw6lzIG5lZ2F0aXU6ICQoLTIpXjM9LTgkLCBubyAkOCQuIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiUE9URU5DSUFfQ09NX1BST0RVQ1RFIiwgIiIsICJQT1RFTkNJQV9BUExJQ0FEQV9NQUxBTUVOVCJdLCAicmVzIjogWyJQZXIgYSBjYWRhIHZhbG9yLCBjYWxjdWxhICR4XjMkIGkgcmVzdGEgJDEkLiIsICIkZigtMik9KC0yKV4zLTE9LTgtMT0tOSQsICRmKC0xKT0tMS0xPS0yJCwgJGYoMCk9LTEkLCAkZigxKT0wJCwgJGYoMik9OC0xPTckLiJdfQ=="
  },
  {
   "id": "202b",
   "ex": 202,
   "ap": "b",
   "bloc": "concepte_funcio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la imatge dels valors $x=-2,\\ -1,\\ 0,\\ 1,\\ 2$ per a cada funció. Quan el resultat no sigui exacte, arrodoneix a les centèsimes.",
   "enunciat": "$f(x)=\\dfrac{1}{x^2+2}$",
   "opcions": [
    "$f(-2)=-\\dfrac{1}{2},\\ f(-1)=1,\\ f(0)=\\dfrac{1}{2},\\ f(1)=1,\\ f(2)=-\\dfrac{1}{2}$",
    "$f(-2)=4,\\ f(-1)=1,\\ f(0)=0,\\ f(1)=1,\\ f(2)=4$",
    "$f(-2)=\\dfrac{1}{6},\\ f(-1)=\\dfrac{1}{3},\\ f(0)=\\dfrac{1}{2},\\ f(1)=\\dfrac{1}{3},\\ f(2)=\\dfrac{1}{6}$",
    "$f(-2)=6,\\ f(-1)=3,\\ f(0)=2,\\ f(1)=3,\\ f(2)=6$"
   ],
   "pistes": [
    "Calcula primer $x^2+2$ per a cada valor i després inverteix el resultat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCAkeF4yJCBkZWwgZGVub21pbmFkb3Igw6lzIHNlbXByZSBwb3NpdGl1IGkgc2Ugc3VtYSAobm8gZXMgcmVzdGEpOiDDqXMgJHheMisyJCwgbm8gJC14XjIrMiQuIiwgIkZhbHRhIHN1bWFyIGVsICQyJCBkZWwgZGVub21pbmFkb3IgaSwgc29icmV0b3QsIGludmVydGlyIGxhIGZyYWNjacOzOiBlbCByZXN1bHRhdCDDqXMgJFxcZGZyYWN7MX17eF4yKzJ9JCwgbm8gJHheMiQuIiwgIiIsICJMYSBmcmFjY2nDsyBoYSBxdWVkYXQgaW52ZXJ0aWRhOiBsYSAkZih4KSQgY29ycmVjdGEgw6lzICRcXGRmcmFjezF9e3heMisyfSQsIG5vICR4XjIrMiQuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiIiwgIklOVkVSVElEQSJdLCAicmVzIjogWyJQZXIgYSBjYWRhIHZhbG9yLCBjYWxjdWxhICR4XjIrMiQgaSBmZXMtbmUgbGEgZnJhY2Npw7MgaW52ZXJzYS4iLCAiJGYoLTIpPVxcZGZyYWN7MX17NCsyfT1cXGRmcmFjezF9ezZ9JCwgJGYoLTEpPVxcZGZyYWN7MX17M30kLCAkZigwKT1cXGRmcmFjezF9ezJ9JCwgJGYoMSk9XFxkZnJhY3sxfXszfSQsICRmKDIpPVxcZGZyYWN7MX17Nn0kLiJdfQ=="
  },
  {
   "id": "202c",
   "ex": 202,
   "ap": "c",
   "bloc": "concepte_funcio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la imatge dels valors $x=-2,\\ -1,\\ 0,\\ 1,\\ 2$ per a cada funció. Quan el resultat no sigui exacte, arrodoneix a les centèsimes.",
   "enunciat": "$f(x)=\\sqrt{\\dfrac{x}{2}+5}$",
   "opcions": [
    "$f(-2)=-2{,}00,\\ f(-1)=-2{,}12,\\ f(0)=-2{,}24,\\ f(1)=-2{,}35,\\ f(2)=-2{,}45$",
    "$f(-2)=16{,}00,\\ f(-1)=20{,}25,\\ f(0)=25{,}00,\\ f(1)=30{,}25,\\ f(2)=36{,}00$",
    "$f(-2)=2{,}00,\\ f(-1)=2{,}12,\\ f(0)=2{,}24,\\ f(1)=2{,}35,\\ f(2)=2{,}45$",
    "$f(-2)=1{,}73,\\ f(-1)=2{,}00,\\ f(0)=2{,}24,\\ f(1)=2{,}45,\\ f(2)=2{,}65$"
   ],
   "pistes": [
    "Calcula primer el que hi ha dins l'arrel ($\\dfrac{x}{2}+5$) i després fes-ne l'arrel quadrada amb la calculadora."
   ],
   "nota": "Les imatges no són exactes: s'han arrodonit a les centèsimes, com demana l'encapçalament de l'exercici.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2FycmVsIHF1YWRyYWRhIGQndW4gbm9tYnJlIHBvc2l0aXUgw6lzIHNlbXByZSBwb3NpdGl2YS4iLCAiUydoYSBlbGV2YXQgYWwgcXVhZHJhdCBlbiBsbG9jIGRlIGZlciBsJ2FycmVsOiBwZXIgZGVzZmVyIHVuYSBhcnJlbCBlcyBjYWxjdWxhIGwnYXJyZWwsIG5vIGVsIHF1YWRyYXQuIiwgIiIsICJGYWx0YSBkaXZpZGlyIGxhICR4JCBlbnRyZSAkMiQgYWJhbnMgZGUgc3VtYXIgJDUkOiBkaW5zIGRlIGwnYXJyZWwgaGkgaGEgJFxcZGZyYWN7eH17Mn0rNSQsIG5vICR4KzUkLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICJPUEVSQUNJT19JTlZFUlNBIiwgIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIlBlciBhIGNhZGEgdmFsb3IsIGNhbGN1bGEgJFxcZGZyYWN7eH17Mn0rNSQgaSBmZXMtbmUgbCdhcnJlbCBxdWFkcmFkYSwgYXJyb2RvbmludCBhIGxlcyBjZW50w6hzaW1lcy4iLCAiJGYoLTIpPVxcc3FydHs0fT0yeyx9MDAkLCAkZigtMSk9XFxzcXJ0ezR7LH01fVxcYXBwcm94IDJ7LH0xMiQsICRmKDApPVxcc3FydHs1fVxcYXBwcm94IDJ7LH0yNCQsICRmKDEpPVxcc3FydHs1eyx9NX1cXGFwcHJveCAyeyx9MzUkLCAkZigyKT1cXHNxcnR7Nn1cXGFwcHJveCAyeyx9NDUkLiJdfQ=="
  },
  {
   "id": "202d",
   "ex": 202,
   "ap": "d",
   "bloc": "concepte_funcio",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la imatge dels valors $x=-2,\\ -1,\\ 0,\\ 1,\\ 2$ per a cada funció. Quan el resultat no sigui exacte, arrodoneix a les centèsimes.",
   "enunciat": "$f(x)=\\dfrac{x^2}{3}-2x+\\dfrac{3}{5}$",
   "opcions": [
    "$f(-2)=\\dfrac{71}{15},\\ f(-1)=\\dfrac{26}{15},\\ f(0)=-\\dfrac{3}{5},\\ f(1)=-\\dfrac{34}{15},\\ f(2)=-\\dfrac{49}{15}$",
    "$f(-2)=\\dfrac{89}{15},\\ f(-1)=\\dfrac{44}{15},\\ f(0)=\\dfrac{3}{5},\\ f(1)=-\\dfrac{16}{15},\\ f(2)=-\\dfrac{31}{15}$",
    "$f(-2)=\\dfrac{43}{5},\\ f(-1)=\\dfrac{18}{5},\\ f(0)=\\dfrac{3}{5},\\ f(1)=-\\dfrac{2}{5},\\ f(2)=\\dfrac{3}{5}$",
    "$f(-2)=-\\dfrac{31}{15},\\ f(-1)=-\\dfrac{16}{15},\\ f(0)=\\dfrac{3}{5},\\ f(1)=\\dfrac{44}{15},\\ f(2)=\\dfrac{89}{15}$"
   ],
   "pistes": [
    "Substitueix cada valor a $\\dfrac{x^2}{3}-2x+\\dfrac{3}{5}$ i opera amb fraccions, buscant denominador comú (15) al final."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCB0ZXJtZSAkXFxkZnJhY3szfXs1fSQgw6lzIHBvc2l0aXUgaSBzZSBzdW1hLCBubyBzZSByZXN0YS4iLCAiIiwgIkZhbHRhIGRpdmlkaXIgJHheMiQgZW50cmUgJDMkOiBlbCBwcmltZXIgdGVybWUgw6lzICRcXGRmcmFje3heMn17M30kLCBubyAkeF4yJC4iLCAiRWwgdGVybWUgJDJ4JCBzZSBSRVNUQSwgbm8gc2Ugc3VtYTogw6lzICQtMngkLiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICIiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJTVU1BX0VOX0xMT0NfUkVTVEEiXSwgInJlcyI6IFsiQ2FsY3VsYSBwZXIgc2VwYXJhdCAkXFxkZnJhY3t4XjJ9ezN9JCwgJC0yeCQgaSAkXFxkZnJhY3szfXs1fSQsIGkgc3VtYS1obyB0b3QgYW1iIGRlbm9taW5hZG9yIGNvbcO6ICQxNSQuIiwgIiRmKC0yKT1cXGRmcmFjezR9ezN9KzQrXFxkZnJhY3szfXs1fT1cXGRmcmFjezIwKzYwKzl9ezE1fT1cXGRmcmFjezg5fXsxNX0kLiIsICIkZigtMSk9XFxkZnJhY3s0NH17MTV9JCwgJGYoMCk9XFxkZnJhY3szfXs1fSQsICRmKDEpPS1cXGRmcmFjezE2fXsxNX0kLCAkZigyKT0tXFxkZnJhY3szMX17MTV9JC4iXX0="
  },
  {
   "id": "203a",
   "ex": 203,
   "ap": "a",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Indica el domini i el recorregut de cada funció, descrita per la seva gràfica.",
   "enunciat": "Una gràfica formada per dues branques de corba que s'apropen sense arribar mai a la recta vertical $x=2$ ni a la recta horitzontal $y=0$.",
   "opcions": [
    "Domini: $\\mathbb{R}$. Recorregut: $\\mathbb{R}-\\{0\\}$.",
    "Domini: $\\mathbb{R}-\\{0\\}$. Recorregut: $\\mathbb{R}-\\{2\\}$.",
    "Domini: $[2,+\\infty)$. Recorregut: $[0,+\\infty)$.",
    "Domini: $\\mathbb{R}-\\{2\\}$ (tots els reals excepte $2$). Recorregut: $\\mathbb{R}-\\{0\\}$ (tots els reals excepte $0$)."
   ],
   "pistes": [
    "Busca els valors de $x$ i de $y$ que la gràfica no arriba mai a tocar (les asímptotes): aquests són els que cal excloure."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMYSBncsOgZmljYSB0YW1wb2MgYXJyaWJhIGEgdG9jYXIgbGEgcmVjdGEgJHg9MiQ6IGNhbCBleGNsb3VyZSBhcXVlc3QgdmFsb3IgZGVsIGRvbWluaSwgaWd1YWwgcXVlIHMnZXhjbG91IGVsICQwJCBkZWwgcmVjb3JyZWd1dC4iLCAiRWwgZG9taW5pIMOpcyBlbCBjb25qdW50IGRlIHZhbG9ycyBkZSAkeCQgKGwnYXPDrW1wdG90YSB2ZXJ0aWNhbCDDqXMgJHg9MiQpIGkgZWwgcmVjb3JyZWd1dCBlbCBkZSAkeSQgKGwnYXPDrW1wdG90YSBob3JpdHpvbnRhbCDDqXMgJHk9MCQpOiBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICIkeD0yJCBpICR5PTAkIG5vIHPDs24gZWxzIGV4dHJlbXMgZCd1biBpbnRlcnZhbCwgc8OzbiB2YWxvcnMgcXVlIGxhIGdyw6BmaWNhIG5vIGFycmliYSBhIHRvY2FyIG1haSAoYXPDrW1wdG90ZXMpOiBlbCBkb21pbmkgaSBlbCByZWNvcnJlZ3V0IHPDs24gdG90cyBlbHMgcmVhbHMgZXhjZXB0ZSBhcXVlc3RzIGRvcyB2YWxvcnMsIG5vIHVuIGludGVydmFsIHF1ZSBoaSBjb21lbmNpLiIsICIiXSwgImVyciI6IFsiUkVTVFJJQ0NJT19PQkxJREFEQSIsICJET01JTklfUkVDT1JSRUdVVF9JTlRFUkNBTlZJQVRTIiwgIkFTSU1QVE9UQV9DT01fTElNSVQiLCAiIl0sICJyZXMiOiBbIkxhIGdyw6BmaWNhIG5vIHRvY2EgbWFpIGxhIHJlY3RhIHZlcnRpY2FsICR4PTIkOiBlbCBkb21pbmkgw6lzICRcXG1hdGhiYntSfS1cXHsyXFx9JC4iLCAiVGFtcG9jIHRvY2EgbWFpIGxhIHJlY3RhIGhvcml0em9udGFsICR5PTAkOiBlbCByZWNvcnJlZ3V0IMOpcyAkXFxtYXRoYmJ7Un0tXFx7MFxcfSQuIl19"
  },
  {
   "id": "203b",
   "ex": 203,
   "ap": "b",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Indica el domini i el recorregut de cada funció, descrita per la seva gràfica.",
   "enunciat": "Una gràfica que només existeix entre $x=-3$ i $x=4$ (extrems inclosos), i que oscil·la entre una alçada mínima de $-2$ i una màxima de $3$.",
   "opcions": [
    "Domini: $[-3,4]$. Recorregut: $[-2,3]$.",
    "Domini: $[-2,3]$. Recorregut: $[-3,4]$.",
    "Domini: $(-3,4)$. Recorregut: $(-2,3)$.",
    "Domini: $[-3,4]$. Recorregut: $[0,3]$."
   ],
   "pistes": [
    "El domini és l'interval de valors de $x$ on existeix la gràfica; el recorregut, l'interval d'alçades ($y$) que arriba a assolir."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgZG9taW5pIMOpcyBsJ2ludGVydmFsIGRlIHZhbG9ycyBkZSAkeCQgKCQtMyQgYSAkNCQpIGkgZWwgcmVjb3JyZWd1dCBlbCBkZSAkeSQgKCQtMiQgYSAkMyQpOiBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICJFbHMgZXh0cmVtcyAkLTMkLCAkNCQsICQtMiQgaSAkMyQgZXN0YW4gaW5jbG9zb3MgKGxhIGdyw6BmaWNhIGhpIGFycmliYSksIGFpeMOtIHF1ZSBlbHMgaW50ZXJ2YWxzIHPDs24gdGFuY2F0cywgYW1iIGNsYXVkw6B0b3JzICRbXFwgXSQsIG5vIG9iZXJ0cyBhbWIgcGFyw6hudGVzaXMuIiwgIkwnYWzDp2FkYSBtw61uaW1hIGRlIGxhIGdyw6BmaWNhIMOpcyAkLTIkIChwZXIgc290YSBkZSBsJ2VpeCBob3JpdHpvbnRhbCksIG5vICQwJDogZWwgcmVjb3JyZWd1dCBjb21lbsOnYSBhICQtMiQuIl0sICJlcnIiOiBbIiIsICJET01JTklfUkVDT1JSRUdVVF9JTlRFUkNBTlZJQVRTIiwgIkVYVFJFTVNfT0JMSURBVFMiLCAiU0lHTkVfRklOQUwiXSwgInJlcyI6IFsiTGEgZ3LDoGZpY2EgdmEgZGUgJHg9LTMkIGEgJHg9NCQsIGFtYiBlbHMgZXh0cmVtcyBpbmNsb3NvczogZG9taW5pICRbLTMsNF0kLiIsICJMJ2Fsw6dhZGEgb3NjaWzCt2xhIGVudHJlICQtMiQgaSAkMyQsIHRhbWLDqSBpbmNsb3NvczogcmVjb3JyZWd1dCAkWy0yLDNdJC4iXX0="
  },
  {
   "id": "203c",
   "ex": 203,
   "ap": "c",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Indica el domini i el recorregut de cada funció, descrita per la seva gràfica.",
   "enunciat": "Una gràfica que s'estén cap a l'esquerra i cap a la dreta sense límit, amb un punt més baix a alçada $-1$ i que a partir d'aquí puja indefinidament cap als dos costats.",
   "opcions": [
    "Domini: $\\mathbb{R}$. Recorregut: $(-\\infty,-1]$.",
    "Domini: $\\mathbb{R}$ (tots els reals). Recorregut: $[-1,+\\infty)$.",
    "Domini: $[-1,+\\infty)$. Recorregut: $\\mathbb{R}$.",
    "Domini: $\\mathbb{R}$. Recorregut: $(-1,+\\infty)$."
   ],
   "pistes": [
    "Si la gràfica s'estén sense límit cap als dos costats horitzontalment, el domini és tot $\\mathbb{R}$; fixa't en si el punt més baix forma part o no de la gràfica."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMYSBncsOgZmljYSBwdWphIGEgcGFydGlyIGRlbCBwdW50IG3DqXMgYmFpeCwgbm8gYmFpeGE6IGVscyB2YWxvcnMgZGUgJHkkIHZhbiBkZXMgZGUgJC0xJCBjYXAgQU1VTlQsIG5vIGNhcCBhdmFsbC4iLCAiIiwgIlF1ZSBsYSBncsOgZmljYSBzJ2VzdGVuZ3VpIHNlbnNlIGzDrW1pdCBjYXAgYSBsJ2VzcXVlcnJhIGkgbGEgZHJldGEgZGVzY3JpdSBlbCBkb21pbmkgKHZhbG9ycyBkZSAkeCQpOyBxdWUgdGluZ3VpIHVuIHB1bnQgbcOpcyBiYWl4IGEgYWzDp2FkYSAkLTEkIGRlc2NyaXUgZWwgcmVjb3JyZWd1dCAodmFsb3JzIGRlICR5JCk6IGVzdGFuIGludGVyY2FudmlhdHMuIiwgIkVsIHB1bnQgbcOpcyBiYWl4LCBhIGFsw6dhZGEgJC0xJCwgc8OtIGZvcm1hIHBhcnQgZGUgbGEgZ3LDoGZpY2EgKGhpIGhhIHVuIG3DrW5pbSwgbm8gdW5hIGFzw61tcHRvdGEpOiBsJ2ludGVydmFsIMOpcyB0YW5jYXQgcGVyIGFxdWVzdCBjb3N0YXQsICRbLTEsK1xcaW5mdHkpJCwgbm8gb2JlcnQuIl0sICJlcnIiOiBbIlNJR05FX0ZJTkFMIiwgIiIsICJET01JTklfUkVDT1JSRUdVVF9JTlRFUkNBTlZJQVRTIiwgIkVYVFJFTVNfT0JMSURBVFMiXSwgInJlcyI6IFsiTGEgZ3LDoGZpY2EgZXhpc3RlaXggcGVyIGEgcXVhbHNldm9sIHZhbG9yIGRlICR4JDogZG9taW5pICRcXG1hdGhiYntSfSQuIiwgIkVsIHZhbG9yIG3DqXMgYmFpeCBxdWUgYXNzb2xlaXggJHkkIMOpcyAkLTEkIChpbmNsw7JzKSwgaSBwdWphIHNlbnNlIGzDrW1pdDogcmVjb3JyZWd1dCAkWy0xLCtcXGluZnR5KSQuIl19"
  },
  {
   "id": "203d",
   "ex": 203,
   "ap": "d",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Indica el domini i el recorregut de cada funció, descrita per la seva gràfica.",
   "enunciat": "Una gràfica que només existeix per a valors de $x$ fins a $5$ (inclòs, cap a l'esquerra sense límit), i que en alçada s'estén indefinidament tant cap amunt com cap avall.",
   "opcions": [
    "Domini: $(-\\infty,5]$. Recorregut: $\\mathbb{R}$.",
    "Domini: $\\mathbb{R}$. Recorregut: $(-\\infty,5]$.",
    "Domini: $(-\\infty,5)$. Recorregut: $\\mathbb{R}$.",
    "Domini: $[5,+\\infty)$. Recorregut: $\\mathbb{R}$."
   ],
   "pistes": [
    "Fixa't cap a quin costat s'estén sense límit horitzontalment, i si l'extrem $x=5$ forma part o no de la gràfica."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUXVlIGV4aXN0ZWl4aSBmaW5zIGEgJHg9NSQgZGVzY3JpdSBlbCBkb21pbmkgKHZhbG9ycyBkZSAkeCQpOyBxdWUgcydlc3Rlbmd1aSBpbmRlZmluaWRhbWVudCBlbiBhbMOnYWRhIGRlc2NyaXUgZWwgcmVjb3JyZWd1dCAodmFsb3JzIGRlICR5JCk6IGVzdGFuIGludGVyY2FudmlhdHMuIiwgIkVsICQ1JCBlc3TDoCBpbmNsw7JzIChsYSBncsOgZmljYSBoaSBhcnJpYmEpOiBsJ2ludGVydmFsIMOpcyAkKC1cXGluZnR5LDVdJCwgdGFuY2F0IHBlciBhcXVlc3QgY29zdGF0LCBubyBvYmVydC4iLCAiTGEgZ3LDoGZpY2EgZXhpc3RlaXggY2FwIGEgbCdFU1FVRVJSQSBkZSAkeD01JCAoc2Vuc2UgbMOtbWl0IGNhcCBhIGwnZXNxdWVycmEpLCBubyBjYXAgYSBsYSBkcmV0YTogw6lzICQoLVxcaW5mdHksNV0kLCBubyAkWzUsK1xcaW5mdHkpJC4iXSwgImVyciI6IFsiIiwgIkRPTUlOSV9SRUNPUlJFR1VUX0lOVEVSQ0FOVklBVFMiLCAiRVhUUkVNU19PQkxJREFUUyIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJMYSBncsOgZmljYSBleGlzdGVpeCBwZXIgYSAkeFxcbGVxIDUkLCBhbWIgZWwgJDUkIGluY2zDsnM6IGRvbWluaSAkKC1cXGluZnR5LDVdJC4iLCAiRW4gYWzDp2FkYSBubyBoaSBoYSBjYXAgbMOtbWl0LCBuaSBwZXIgYW11bnQgbmkgcGVyIGF2YWxsOiByZWNvcnJlZ3V0ICRcXG1hdGhiYntSfSQuIl19"
  },
  {
   "id": "206a",
   "ex": 206,
   "ap": "a",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Fes l'estudi complet (domini, recorregut, creixement/decreixement i extrems) de cada funció, descrita per la seva gràfica.",
   "enunciat": "Una recta que travessa tot el pla, pujant sempre de manera constant, sense cap tram pla ni cap màxim o mínim.",
   "opcions": [
    "Domini: $\\mathbb{R}$. Recorregut: $[0,+\\infty)$. És creixent a tot el domini. No té cap màxim ni mínim.",
    "Domini i recorregut: $\\mathbb{R}$. És creixent a tot el domini. No té cap màxim ni mínim.",
    "Domini i recorregut: $\\mathbb{R}$. És creixent a tot el domini. Té un màxim on la recta talla l'eix vertical.",
    "Domini i recorregut: $\\mathbb{R}$. És decreixent a tot el domini. No té cap màxim ni mínim."
   ],
   "pistes": [
    "Una recta que puja sempre sense cap tram pla és creixent a tot arreu i no té cap punt on deixi de pujar (cap extrem)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbmEgcmVjdGEgcXVlIHRyYXZlc3NhIHRvdCBlbCBwbGEgc2Vuc2UgY2FwIGzDrW1pdCBhcnJpYmEgYSBxdWFsc2V2b2wgdmFsb3IgZGUgJHkkLCB0YW1iw6kgYWxzIG5lZ2F0aXVzOiBlbCByZWNvcnJlZ3V0IMOpcyB0b3QgJFxcbWF0aGJie1J9JCwgbm8gbm9tw6lzIGVscyBwb3NpdGl1cy4iLCAiIiwgIkVsIHB1bnQgb24gbGEgcmVjdGEgdGFsbGEgdW4gZWl4IG5vIMOpcyB1biBtw6B4aW0gbmkgdW4gbcOtbmltOiB1bmEgcmVjdGEgcXVlIHB1amEgc2VtcHJlIG5vIHTDqSBjYXAgcHVudCBvbiBjYW52acOvIGRlIHB1amFyIGEgYmFpeGFyLCBwZXIgdGFudCBubyB0w6kgY2FwIGV4dHJlbS4iLCAiUXVlIHB1Z2kgc2VtcHJlIHZvbCBkaXIgcXVlIMOpcyBDUkVJWEVOVCwgbm8gZGVjcmVpeGVudDogY29tIG3DqXMgZ3JhbiDDqXMgJHgkLCBtw6lzIGdyYW4gw6lzICR5JC4iXSwgImVyciI6IFsiUkVTVFJJQ0NJT19JTlZFTlRBREEiLCAiIiwgIlRBTExfQ09NX0VYVFJFTSIsICJTSUdORV9GSU5BTCJdLCAicmVzIjogWyJMYSByZWN0YSB0cmF2ZXNzYSB0b3QgZWwgcGxhIGVuIHRvdGVzIGRpcmVjY2lvbnM6IGRvbWluaSBpIHJlY29ycmVndXQgJFxcbWF0aGJie1J9JC4iLCAiUHVqYSBkZSBtYW5lcmEgY29uc3RhbnQsIHNlbnNlIGNhcCB0cmFtIG9uIGJhaXhpOiDDqXMgY3JlaXhlbnQgYSB0b3QgZWwgZG9taW5pLiIsICJDb20gcXVlIG5vIGNhbnZpYSBtYWkgZGUgcHVqYXIgYSBiYWl4YXIsIG5vIHTDqSBjYXAgbcOgeGltIG5pIG3DrW5pbS4iXX0="
  },
  {
   "id": "206b",
   "ex": 206,
   "ap": "b",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Fes l'estudi complet (domini, recorregut, creixement/decreixement i extrems) de cada funció, descrita per la seva gràfica.",
   "enunciat": "Una paràbola oberta cap amunt, amb el punt més baix al $(1,-3)$, que baixa fins a aquest punt i després torna a pujar, estenent-se sense límit cap als dos costats.",
   "opcions": [
    "Domini: $\\mathbb{R}$. Recorregut: $[-3,+\\infty)$. És decreixent a $(-\\infty,1)$ i creixent a $(1,+\\infty)$. Té un mínim absolut al punt $(1,-3)$.",
    "Domini: $[-3,+\\infty)$. Recorregut: $\\mathbb{R}$. És decreixent a $(-\\infty,1)$ i creixent a $(1,+\\infty)$. Té un mínim absolut al punt $(1,-3)$.",
    "Domini: $\\mathbb{R}$. Recorregut: $[-3,+\\infty)$. És creixent a $(-\\infty,1)$ i decreixent a $(1,+\\infty)$. Té un mínim absolut al punt $(1,-3)$.",
    "Domini: $\\mathbb{R}$. Recorregut: $[-3,+\\infty)$. És decreixent a $(-\\infty,1)$ i creixent a $(1,+\\infty)$. Té un màxim absolut al punt $(1,-3)$."
   ],
   "pistes": [
    "El punt més baix d'una paràbola oberta cap amunt és sempre un mínim; abans d'arribar-hi, la funció decreix, i després creix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTGEgcGFyw6Bib2xhIHMnZXN0w6luIHNlbnNlIGzDrW1pdCBob3JpdHpvbnRhbG1lbnQgKGRvbWluaSAkXFxtYXRoYmJ7Un0kKSBwZXLDsiBub23DqXMgYXJyaWJhIGEgJHk9LTMkIHBlciBhdmFsbCAocmVjb3JyZWd1dCAkWy0zLCtcXGluZnR5KSQpOiBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICJBYmFucyBkJ2FycmliYXIgYWwgcHVudCBtw6lzIGJhaXggbGEgZnVuY2nDsyBCQUlYQSAoZGVjcmVpeCksIGkgbm9tw6lzIHRvcm5hIGEgcHVqYXIgKGNyZWl4KSBkZXNwcsOpczogZWxzIGRvcyB0cmFtcyBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICJFbCBwdW50ICQoMSwtMykkIMOpcyBlbCBwdW50IG3DqXMgQkFJWCBkZSBsYSBncsOgZmljYSAobGEgcGFyw6Bib2xhIMOpcyBvYmVydGEgY2FwIGFtdW50KTogw6lzIHVuIG3DrW5pbSwgbm8gdW4gbcOgeGltLiJdLCAiZXJyIjogWyIiLCAiRE9NSU5JX1JFQ09SUkVHVVRfSU5URVJDQU5WSUFUUyIsICJDUkVJWEVNRU5UX0lOVkVSVElUIiwgIkVYVFJFTV9JTlZFUlRJVCJdLCAicmVzIjogWyJMYSBwYXLDoGJvbGEgcydlc3TDqW4gc2Vuc2UgbMOtbWl0IGhvcml0em9udGFsbWVudDogZG9taW5pICRcXG1hdGhiYntSfSQuIiwgIk1haSBiYWl4YSBkZSAkeT0tMyQgKMOpcyBlbCBwdW50IG3DqXMgYmFpeCk6IHJlY29ycmVndXQgJFstMywrXFxpbmZ0eSkkLiIsICJEZWNyZWl4IGZpbnMgYXJyaWJhciBhbCBwdW50ICQoMSwtMykkIGksIGEgcGFydGlyIGQnYXF1w60sIGNyZWl4OiBkZWNyZWl4ZW50IGEgJCgtXFxpbmZ0eSwxKSQsIGNyZWl4ZW50IGEgJCgxLCtcXGluZnR5KSQuIiwgIkVsIHB1bnQgJCgxLC0zKSQsIG9uIGNhbnZpYSBkZSBkZWNyw6lpeGVyIGEgY3LDqWl4ZXIsIMOpcyB1biBtw61uaW0gYWJzb2x1dC4iXX0="
  },
  {
   "id": "206c",
   "ex": 206,
   "ap": "c",
   "bloc": "concepte_funcio",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Fes l'estudi complet (domini, recorregut, creixement/decreixement i extrems) de cada funció, descrita per la seva gràfica.",
   "enunciat": "Una gràfica que puja fins a un punt més alt en $(0,2)$, després baixa fins a un punt més baix en $(3,-1)$, i a partir d'aquí torna a pujar indefinidament.",
   "opcions": [
    "És decreixent a $(-\\infty,0)$, creixent a $(0,3)$ i decreixent a $(3,+\\infty)$. Té un mínim relatiu al punt $(0,2)$ i un màxim relatiu al punt $(3,-1)$.",
    "És creixent a $(-\\infty,0)$, decreixent a $(0,3)$ i creixent a $(3,+\\infty)$. Té un màxim absolut al punt $(0,2)$ i un mínim absolut al punt $(3,-1)$.",
    "És creixent a $(-\\infty,0)$, decreixent a $(0,3)$ i creixent a $(3,+\\infty)$. Té un màxim relatiu al punt $(0,2)$ i un mínim relatiu al punt $(3,-1)$.",
    "És creixent a $(-\\infty,0)$, decreixent a $(0,3)$ i creixent a $(3,+\\infty)$. Té un màxim relatiu al punt $(2,0)$ i un mínim relatiu al punt $(-1,3)$."
   ],
   "pistes": [
    "Un màxim o mínim és RELATIU (no absolut) si la gràfica torna a superar-lo més endavant o més enrere; és absolut només si és el punt més alt (o baix) de TOTA la gràfica."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJDYWRhIHRyYW0gZGUgY3JlaXhlbWVudCBpIGRlY3JlaXhlbWVudCwgaSBjYWRhIG3DoHhpbSBpIG3DrW5pbSwgZXN0YW4gaW52ZXJ0aXRzIHJlc3BlY3RlIGEgbGEgZGVzY3JpcGNpw7M6IGxhIGZ1bmNpw7MgUFVKQSBhYmFucyBkZSAkKDAsMikkICjDqXMgdW4gbcOgeGltLCBubyB1biBtw61uaW0pIGkgdG9ybmEgYSBwdWphciBkZXNwcsOpcyBkZSAkKDMsLTEpJCAow6lzIHVuIG3DrW5pbSwgbm8gdW4gbcOgeGltKS4iLCAiQ29tIHF1ZSBsYSBncsOgZmljYSB0b3JuYSBhIHB1amFyIHNlbnNlIGzDrW1pdCBkZXNwcsOpcyBkZSAkKDMsK1xcaW5mdHkpJCwgaGkgaGEgdmFsb3JzIGRlICR5JCBtw6lzIGdyYW5zIHF1ZSAkMiQgbcOpcyBlbmRhdmFudDogJCgwLDIpJCBubyDDqXMgZWwgcHVudCBtw6lzIGFsdCBkZSBUT1RBIGxhIGdyw6BmaWNhIChubyDDqXMgYWJzb2x1dCksIG5vbcOpcyBobyDDqXMgY29tcGFyYXQgYW1iIGVscyBwdW50cyBkZWwgdm9sdGFudCAow6lzIHJlbGF0aXUpLiBFbCBtYXRlaXggcGFzc2EgYW1iIGVsIG3DrW5pbS4iLCAiIiwgIkEgY2FkYSBwdW50LCBsYSBwcmltZXJhIGNvb3JkZW5hZGEgw6lzIGVsIHZhbG9yIGRlICR4JCBpIGxhIHNlZ29uYSBlbCBkZSAkeSQ6IGVscyBtw6B4aW1zIGkgbcOtbmltcyBzw7NuIGFscyBwdW50cyAkKDAsMikkIGkgJCgzLC0xKSQsIG5vICQoMiwwKSQgaSAkKC0xLDMpJC4iXSwgImVyciI6IFsiQ1JFSVhFTUVOVF9JTlZFUlRJVCIsICJSRUxBVElVX0NPTV9BQlNPTFVUIiwgIiIsICJDT09SREVOQURFU19JTlRFUkNBTlZJQURFUyJdLCAicmVzIjogWyJQdWphIGZpbnMgYWwgcHVudCAkKDAsMikkOiBjcmVpeGVudCBhICQoLVxcaW5mdHksMCkkOyBhcXVlc3QgcHVudCDDqXMgdW4gbcOgeGltLiIsICJEZXNwcsOpcyBiYWl4YSBmaW5zIGFsIHB1bnQgJCgzLC0xKSQ6IGRlY3JlaXhlbnQgYSAkKDAsMykkOyBhcXVlc3QgcHVudCDDqXMgdW4gbcOtbmltLiIsICJBIHBhcnRpciBkJ2FxdcOtIHRvcm5hIGEgcHVqYXIgc2Vuc2UgbMOtbWl0OiBjcmVpeGVudCBhICQoMywrXFxpbmZ0eSkkLiIsICJDb20gcXVlIGEgbGEgZHJldGEgbGEgZ3LDoGZpY2EgcHVqYSBzZW5zZSBsw61taXQsIGVuIGFsZ3VuIG1vbWVudCB0b3JuYSBhIHN1cGVyYXIgJHk9MiQ6IGVsIG3DoHhpbSAkKDAsMikkIG5vIMOpcyBlbCBwdW50IG3DqXMgYWx0IGRlIHRvdGEgbGEgZ3LDoGZpY2EsIG5vbcOpcyBobyDDqXMgbG9jYWxtZW50IChyZWxhdGl1KS4gSSBjb20gcXVlIGEgbCdlc3F1ZXJyYSBsYSBncsOgZmljYSB2ZSBjcmVpeGVudCBkZXMgZGUgJC1cXGluZnR5JCwgYWJhbnMgZCdhcnJpYmFyIGEgJCgwLDIpJCBqYSBoYXZpYSBwYXNzYXQgcGVyIHZhbG9ycyBwZXIgc290YSBkZSAkeT0tMSQ6IGVsIG3DrW5pbSAkKDMsLTEpJCB0YW1wb2Mgw6lzIGVsIHB1bnQgbcOpcyBiYWl4IGRlIHRvdGEgbGEgZ3LDoGZpY2EgKHRhbWLDqSDDqXMgcmVsYXRpdSkuIl19"
  },
  {
   "id": "207a",
   "ex": 207,
   "ap": "a",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el pendent i l'ordenada a l'origen de cada funció afí, donada per la seva expressió. Recorda que les que no tenen terme independent ($y=mx$) s'anomenen funcions lineals, i són el cas particular amb ordenada a l'origen $0$.",
   "enunciat": "$y=-3x+6$",
   "opcions": [
    "$m=-3,\\ n=-6$",
    "$m=3,\\ n=6$",
    "$m=6,\\ n=-3$",
    "$m=-3,\\ n=6$"
   ],
   "pistes": [
    "El pendent és el coeficient que acompanya la $x$; l'ordenada a l'origen és el terme que no té $x$ (si no n'hi ha cap d'escrit, l'ordenada és $0$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50IHRhbCBjb20gYXBhcmVpeCBhIGwnZXhwcmVzc2nDsyAoYW1iIGVsIHNldSBzaWduZSk6IG5vIGNhbCBjYW52aWFyLWxvLiIsICJFbCBwZW5kZW50IGNvbnNlcnZhIGVsIHNldSBzaWduZSB0YWwgY29tIGFwYXJlaXggYSBsJ2V4cHJlc3Npw7M6IG5vIGNhbCBjYW52aWFyLWxvLiIsICJFbCBwZW5kZW50IMOpcyBlbCBub21icmUgcXVlIE1VTFRJUExJQ0EgbGEgJHgkLCBpIGwnb3JkZW5hZGEgYSBsJ29yaWdlbiDDqXMgZWwgdGVybWUgaW5kZXBlbmRlbnQgKHNlbnNlICR4JCk6IGVzdGFuIGludGVyY2FudmlhdHMuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9PUkRFTkFEQV9JTlZFUlRJVCIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIlBFTkRFTlRfT1JERU5BREFfSU5URVJDQU5WSUFUUyIsICIiXSwgInJlcyI6IFsiQSAkeT1teCtuJCwgZWwgcGVuZGVudCDDqXMgJG0kIGkgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyAkbiQuIiwgIiR5PS0zeCs2JCB0w6kgJG09LTMkIGkgJG49NiQuIl19"
  },
  {
   "id": "207b",
   "ex": 207,
   "ap": "b",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el pendent i l'ordenada a l'origen de cada funció afí, donada per la seva expressió. Recorda que les que no tenen terme independent ($y=mx$) s'anomenen funcions lineals, i són el cas particular amb ordenada a l'origen $0$.",
   "enunciat": "$y=10x$",
   "opcions": [
    "$m=10,\\ n=1$",
    "$m=-10,\\ n=0$",
    "$m=0,\\ n=10$",
    "$m=10,\\ n=0$"
   ],
   "pistes": [
    "El pendent és el coeficient que acompanya la $x$; l'ordenada a l'origen és el terme que no té $x$ (si no n'hi ha cap d'escrit, l'ordenada és $0$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJRdWFuIGwnZXhwcmVzc2nDsyBubyB0w6kgY2FwIHRlcm1lIGluZGVwZW5kZW50IGVzY3JpdCAoY29tICR5PTEweCQpLCBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICQwJCwgbm8gJDEkOiBubyBoaSBoYSBjYXAgdGVybWUgcXVlIHN1bWFyLiIsICJFbCBwZW5kZW50IGNvbnNlcnZhIGVsIHNldSBzaWduZSB0YWwgY29tIGFwYXJlaXggYSBsJ2V4cHJlc3Npw7M6IG5vIGNhbCBjYW52aWFyLWxvLiIsICJFbCBwZW5kZW50IMOpcyBlbCBub21icmUgcXVlIE1VTFRJUExJQ0EgbGEgJHgkLCBpIGwnb3JkZW5hZGEgYSBsJ29yaWdlbiDDqXMgZWwgdGVybWUgaW5kZXBlbmRlbnQgKHNlbnNlICR4JCk6IGVzdGFuIGludGVyY2FudmlhdHMuIiwgIiJdLCAiZXJyIjogWyJPUkRFTkFEQV9OVUxBX09CTElEQURBIiwgIlNJR05FX1BFTkRFTlRfSU5WRVJUSVQiLCAiUEVOREVOVF9PUkRFTkFEQV9JTlRFUkNBTlZJQVRTIiwgIiJdLCAicmVzIjogWyJBICR5PW14K24kLCBlbCBwZW5kZW50IMOpcyAkbSQgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICRuJC4iLCAiJHk9MTB4JCB0w6kgJG09MTAkIGkgJG49MCQuIl19"
  },
  {
   "id": "207c",
   "ex": 207,
   "ap": "c",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el pendent i l'ordenada a l'origen de cada funció afí, donada per la seva expressió. Recorda que les que no tenen terme independent ($y=mx$) s'anomenen funcions lineals, i són el cas particular amb ordenada a l'origen $0$.",
   "enunciat": "$y=-2x-5$",
   "opcions": [
    "$m=-2,\\ n=-5$",
    "$m=2,\\ n=-5$",
    "$m=-2,\\ n=5$",
    "$m=-5,\\ n=-2$"
   ],
   "pistes": [
    "El pendent és el coeficient que acompanya la $x$; l'ordenada a l'origen és el terme que no té $x$ (si no n'hi ha cap d'escrit, l'ordenada és $0$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcGVuZGVudCBjb25zZXJ2YSBlbCBzZXUgc2lnbmUgdGFsIGNvbSBhcGFyZWl4IGEgbCdleHByZXNzacOzOiBubyBjYWwgY2Fudmlhci1sby4iLCAiTCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyBlbCB0ZXJtZSBpbmRlcGVuZGVudCB0YWwgY29tIGFwYXJlaXggYSBsJ2V4cHJlc3Npw7MgKGFtYiBlbCBzZXUgc2lnbmUpOiBubyBjYWwgY2Fudmlhci1sby4iLCAiRWwgcGVuZGVudCDDqXMgZWwgbm9tYnJlIHF1ZSBNVUxUSVBMSUNBIGxhICR4JCwgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50IChzZW5zZSAkeCQpOiBlc3RhbiBpbnRlcmNhbnZpYXRzLiJdLCAiZXJyIjogWyIiLCAiU0lHTkVfUEVOREVOVF9JTlZFUlRJVCIsICJTSUdORV9PUkRFTkFEQV9JTlZFUlRJVCIsICJQRU5ERU5UX09SREVOQURBX0lOVEVSQ0FOVklBVFMiXSwgInJlcyI6IFsiQSAkeT1teCtuJCwgZWwgcGVuZGVudCDDqXMgJG0kIGkgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyAkbiQuIiwgIiR5PS0yeC01JCB0w6kgJG09LTIkIGkgJG49LTUkLiJdfQ=="
  },
  {
   "id": "207d",
   "ex": 207,
   "ap": "d",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica el pendent i l'ordenada a l'origen de cada funció afí, donada per la seva expressió. Recorda que les que no tenen terme independent ($y=mx$) s'anomenen funcions lineals, i són el cas particular amb ordenada a l'origen $0$.",
   "enunciat": "$y=-9x$",
   "opcions": [
    "$m=-9,\\ n=1$",
    "$m=-9,\\ n=0$",
    "$m=9,\\ n=0$",
    "$m=0,\\ n=-9$"
   ],
   "pistes": [
    "El pendent és el coeficient que acompanya la $x$; l'ordenada a l'origen és el terme que no té $x$ (si no n'hi ha cap d'escrit, l'ordenada és $0$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJRdWFuIGwnZXhwcmVzc2nDsyBubyB0w6kgY2FwIHRlcm1lIGluZGVwZW5kZW50IGVzY3JpdCAoY29tICR5PS05eCQpLCBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICQwJCwgbm8gJDEkOiBubyBoaSBoYSBjYXAgdGVybWUgcXVlIHN1bWFyLiIsICIiLCAiRWwgcGVuZGVudCBjb25zZXJ2YSBlbCBzZXUgc2lnbmUgdGFsIGNvbSBhcGFyZWl4IGEgbCdleHByZXNzacOzOiBubyBjYWwgY2Fudmlhci1sby4iLCAiRWwgcGVuZGVudCDDqXMgZWwgbm9tYnJlIHF1ZSBNVUxUSVBMSUNBIGxhICR4JCwgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50IChzZW5zZSAkeCQpOiBlc3RhbiBpbnRlcmNhbnZpYXRzLiJdLCAiZXJyIjogWyJPUkRFTkFEQV9OVUxBX09CTElEQURBIiwgIiIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIlBFTkRFTlRfT1JERU5BREFfSU5URVJDQU5WSUFUUyJdLCAicmVzIjogWyJBICR5PW14K24kLCBlbCBwZW5kZW50IMOpcyAkbSQgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICRuJC4iLCAiJHk9LTl4JCB0w6kgJG09LTkkIGkgJG49MCQuIl19"
  },
  {
   "id": "208a",
   "ex": 208,
   "ap": "a",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=12x-1$",
   "opcions": [
    "No es pot saber sense representar-la",
    "Constant",
    "Creixent",
    "Decreixent"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBzaWduZSBkZWwgcGVuZGVudCBqYSBkZXRlcm1pbmEgc2kgbGEgZnVuY2nDsyDDqXMgY3JlaXhlbnQgbyBkZWNyZWl4ZW50LCBzZW5zZSBuZWNlc3NpdGF0IGRlIHJlcHJlc2VudGFyLWxhLiIsICJFbCBwZW5kZW50ICQxMiQgbm8gw6lzICQwJDogdW5hIGZ1bmNpw7MgYWbDrSBub23DqXMgw6lzIGNvbnN0YW50IHF1YW4gZWwgcGVuZGVudCDDqXMgbnVsLCBpIGFxdcOtIG5vIGhvIMOpcy4iLCAiIiwgIkVsIHBlbmRlbnQgw6lzICQxMiQgKHBvc2l0aXUpOiBsYSBmdW5jacOzIMOpcyBjcmVpeGVudCwgbm8gZGVjcmVpeGVudC4iXSwgImVyciI6IFsiUkVQUkVTRU5UQUNJT19JTk5FQ0VTU0FSSUEiLCAiUEVOREVOVF9DT01fTlVMIiwgIiIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIkVsIHBlbmRlbnQgZGUgJHk9MTJ4LTEkIMOpcyAkbT0xMiQuIiwgIkNvbSBxdWUgJG0kIMOpcyBwb3NpdGl1LCBsYSBmdW5jacOzIMOpcyBjcmVpeGVudC4iXX0="
  },
  {
   "id": "208b",
   "ex": 208,
   "ap": "b",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=\\dfrac{x}{6}+3$",
   "opcions": [
    "No es pot saber sense representar-la",
    "Decreixent",
    "Creixent",
    "Constant"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBzaWduZSBkZWwgcGVuZGVudCBqYSBkZXRlcm1pbmEgc2kgbGEgZnVuY2nDsyDDqXMgY3JlaXhlbnQgbyBkZWNyZWl4ZW50LCBzZW5zZSBuZWNlc3NpdGF0IGRlIHJlcHJlc2VudGFyLWxhLiIsICJFbCBwZW5kZW50IMOpcyAkXFxkZnJhY3sxfXs2fSQgKHBvc2l0aXUpOiBsYSBmdW5jacOzIMOpcyBjcmVpeGVudCwgbm8gZGVjcmVpeGVudC4iLCAiIiwgIkVsIHBlbmRlbnQgJFxcZGZyYWN7MX17Nn0kIG5vIMOpcyAkMCQ6IHVuYSBmdW5jacOzIGFmw60gbm9tw6lzIMOpcyBjb25zdGFudCBxdWFuIGVsIHBlbmRlbnQgw6lzIG51bCwgaSBhcXXDrSBubyBobyDDqXMuIl0sICJlcnIiOiBbIlJFUFJFU0VOVEFDSU9fSU5ORUNFU1NBUklBIiwgIlNJR05FX1BFTkRFTlRfSU5WRVJUSVQiLCAiIiwgIlBFTkRFTlRfQ09NX05VTCJdLCAicmVzIjogWyJFbCBwZW5kZW50IGRlICR5PVxcZGZyYWN7eH17Nn0rMyQgw6lzICRtPVxcZGZyYWN7MX17Nn0kLiIsICJDb20gcXVlICRtJCDDqXMgcG9zaXRpdSwgbGEgZnVuY2nDsyDDqXMgY3JlaXhlbnQuIl19"
  },
  {
   "id": "208c",
   "ex": 208,
   "ap": "c",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=\\dfrac{x}{4}-2$",
   "opcions": [
    "Constant",
    "Creixent",
    "Decreixent",
    "No es pot saber sense representar-la"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50ICRcXGRmcmFjezF9ezR9JCBubyDDqXMgJDAkOiB1bmEgZnVuY2nDsyBhZsOtIG5vbcOpcyDDqXMgY29uc3RhbnQgcXVhbiBlbCBwZW5kZW50IMOpcyBudWwsIGkgYXF1w60gbm8gaG8gw6lzLiIsICIiLCAiRWwgcGVuZGVudCDDqXMgJFxcZGZyYWN7MX17NH0kIChwb3NpdGl1KTogbGEgZnVuY2nDsyDDqXMgY3JlaXhlbnQsIG5vIGRlY3JlaXhlbnQuIiwgIkVsIHNpZ25lIGRlbCBwZW5kZW50IGphIGRldGVybWluYSBzaSBsYSBmdW5jacOzIMOpcyBjcmVpeGVudCBvIGRlY3JlaXhlbnQsIHNlbnNlIG5lY2Vzc2l0YXQgZGUgcmVwcmVzZW50YXItbGEuIl0sICJlcnIiOiBbIlBFTkRFTlRfQ09NX05VTCIsICIiLCAiU0lHTkVfUEVOREVOVF9JTlZFUlRJVCIsICJSRVBSRVNFTlRBQ0lPX0lOTkVDRVNTQVJJQSJdLCAicmVzIjogWyJFbCBwZW5kZW50IGRlICR5PVxcZGZyYWN7eH17NH0tMiQgw6lzICRtPVxcZGZyYWN7MX17NH0kLiIsICJDb20gcXVlICRtJCDDqXMgcG9zaXRpdSwgbGEgZnVuY2nDsyDDqXMgY3JlaXhlbnQuIl19"
  },
  {
   "id": "208d",
   "ex": 208,
   "ap": "d",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=-7x+5$",
   "opcions": [
    "Creixent",
    "No es pot saber sense representar-la",
    "Decreixent",
    "Constant"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBwZW5kZW50IMOpcyAkLTckIChuZWdhdGl1KTogbGEgZnVuY2nDsyDDqXMgZGVjcmVpeGVudCwgbm8gY3JlaXhlbnQuIiwgIkVsIHNpZ25lIGRlbCBwZW5kZW50IGphIGRldGVybWluYSBzaSBsYSBmdW5jacOzIMOpcyBjcmVpeGVudCBvIGRlY3JlaXhlbnQsIHNlbnNlIG5lY2Vzc2l0YXQgZGUgcmVwcmVzZW50YXItbGEuIiwgIiIsICJFbCBwZW5kZW50ICQtNyQgbm8gw6lzICQwJDogdW5hIGZ1bmNpw7MgYWbDrSBub23DqXMgw6lzIGNvbnN0YW50IHF1YW4gZWwgcGVuZGVudCDDqXMgbnVsLCBpIGFxdcOtIG5vIGhvIMOpcy4iXSwgImVyciI6IFsiU0lHTkVfUEVOREVOVF9JTlZFUlRJVCIsICJSRVBSRVNFTlRBQ0lPX0lOTkVDRVNTQVJJQSIsICIiLCAiUEVOREVOVF9DT01fTlVMIl0sICJyZXMiOiBbIkVsIHBlbmRlbnQgZGUgJHk9LTd4KzUkIMOpcyAkbT0tNyQuIiwgIkNvbSBxdWUgJG0kIMOpcyBuZWdhdGl1LCBsYSBmdW5jacOzIMOpcyBkZWNyZWl4ZW50LiJdfQ=="
  },
  {
   "id": "208e",
   "ex": 208,
   "ap": "e",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=-\\dfrac{12x}{5}+1$",
   "opcions": [
    "Constant",
    "Decreixent",
    "No es pot saber sense representar-la",
    "Creixent"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50ICQtXFxkZnJhY3sxMn17NX0kIG5vIMOpcyAkMCQ6IHVuYSBmdW5jacOzIGFmw60gbm9tw6lzIMOpcyBjb25zdGFudCBxdWFuIGVsIHBlbmRlbnQgw6lzIG51bCwgaSBhcXXDrSBubyBobyDDqXMuIiwgIiIsICJFbCBzaWduZSBkZWwgcGVuZGVudCBqYSBkZXRlcm1pbmEgc2kgbGEgZnVuY2nDsyDDqXMgY3JlaXhlbnQgbyBkZWNyZWl4ZW50LCBzZW5zZSBuZWNlc3NpdGF0IGRlIHJlcHJlc2VudGFyLWxhLiIsICJFbCBwZW5kZW50IMOpcyAkLVxcZGZyYWN7MTJ9ezV9JCAobmVnYXRpdSk6IGxhIGZ1bmNpw7Mgw6lzIGRlY3JlaXhlbnQsIG5vIGNyZWl4ZW50LiJdLCAiZXJyIjogWyJQRU5ERU5UX0NPTV9OVUwiLCAiIiwgIlJFUFJFU0VOVEFDSU9fSU5ORUNFU1NBUklBIiwgIlNJR05FX1BFTkRFTlRfSU5WRVJUSVQiXSwgInJlcyI6IFsiRWwgcGVuZGVudCBkZSAkeT0tXFxkZnJhY3sxMnh9ezV9KzEkIMOpcyAkbT0tXFxkZnJhY3sxMn17NX0kLiIsICJDb20gcXVlICRtJCDDqXMgbmVnYXRpdSwgbGEgZnVuY2nDsyDDqXMgZGVjcmVpeGVudC4iXX0="
  },
  {
   "id": "208f",
   "ex": 208,
   "ap": "f",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=\\dfrac{7x}{10}$",
   "opcions": [
    "Constant",
    "Creixent",
    "No es pot saber sense representar-la",
    "Decreixent"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50ICRcXGRmcmFjezd9ezEwfSQgbm8gw6lzICQwJDogdW5hIGZ1bmNpw7MgYWbDrSBub23DqXMgw6lzIGNvbnN0YW50IHF1YW4gZWwgcGVuZGVudCDDqXMgbnVsLCBpIGFxdcOtIG5vIGhvIMOpcy4iLCAiIiwgIkVsIHNpZ25lIGRlbCBwZW5kZW50IGphIGRldGVybWluYSBzaSBsYSBmdW5jacOzIMOpcyBjcmVpeGVudCBvIGRlY3JlaXhlbnQsIHNlbnNlIG5lY2Vzc2l0YXQgZGUgcmVwcmVzZW50YXItbGEuIiwgIkVsIHBlbmRlbnQgw6lzICRcXGRmcmFjezd9ezEwfSQgKHBvc2l0aXUpOiBsYSBmdW5jacOzIMOpcyBjcmVpeGVudCwgbm8gZGVjcmVpeGVudC4iXSwgImVyciI6IFsiUEVOREVOVF9DT01fTlVMIiwgIiIsICJSRVBSRVNFTlRBQ0lPX0lOTkVDRVNTQVJJQSIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIkVsIHBlbmRlbnQgZGUgJHk9XFxkZnJhY3s3eH17MTB9JCDDqXMgJG09XFxkZnJhY3s3fXsxMH0kLiIsICJDb20gcXVlICRtJCDDqXMgcG9zaXRpdSwgbGEgZnVuY2nDsyDDqXMgY3JlaXhlbnQuIl19"
  },
  {
   "id": "209a",
   "ex": 209,
   "ap": "a",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'expressió algebraica de la funció afí que passa pels dos punts donats.",
   "enunciat": "Passa pels punts $(0,\\ -1)$ i $(1,\\ 1)$.",
   "opcions": [
    "$y=-x+2$",
    "$y=2x-1$",
    "$y=2x+1$",
    "$y=-2x-1$"
   ],
   "pistes": [
    "Com que un dels punts té $x=0$, la seva $y$ ja és directament l'ordenada a l'origen $n$; només cal calcular el pendent $m$ amb els dos punts."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50IMOpcyBlbCBjb2VmaWNpZW50IHF1ZSBhY29tcGFueWEgbGEgJHgkOyBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50OiBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICIiLCAiTCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyBlbCB2YWxvciBkZSAkeSQgZGVsIHB1bnQgb24gJHg9MCQsIMOpcyBhIGRpciwgZGVsIHB1bnQgJCgwLFxcIC0xKSQgKHF1ZSBkb25hICRuPS0xJCksIG5vIGRlbCBwdW50ICQoMSxcXCAxKSQuIiwgIkVsIHBlbmRlbnQgZXMgY2FsY3VsYSBjb20gJG09XFxkZnJhY3t5XzIteV8xfXt4XzIteF8xfSQsIHJlc3RhbnQgc2VtcHJlIGVuIGVsIG1hdGVpeCBvcmRyZSBhbCBudW1lcmFkb3IgaSBhbCBkZW5vbWluYWRvcjogc2kgcydpbnZlcnRlaXggbCdvcmRyZSBlbiB1biBkZWxzIGRvcywgZWwgc2lnbmUgc3VydCBjYW52aWF0LiJdLCAiZXJyIjogWyJQRU5ERU5UX09SREVOQURBX0lOVEVSQ0FOVklBVFMiLCAiIiwgIlBVTlRfT1JERU5BREFfQ09ORk9TIiwgIlNJR05FX1BFTkRFTlRfSU5WRVJUSVQiXSwgInJlcyI6IFsiRWwgcGVuZGVudCDDqXMgJG09XFxkZnJhY3t5XzIteV8xfXt4XzIteF8xfT1cXGRmcmFjezEtKC0xKX17MS0oMCl9PTIkLiIsICJDb20gcXVlIGVsIHB1bnQgJCgwLFxcIC0xKSQgdMOpICR4PTAkLCBsYSBzZXZhICR5JCBqYSDDqXMgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuOiAkbj0tMSQuIiwgIkwnZXhwcmVzc2nDsyDDqXMgJHk9MngtMSQuIl19"
  },
  {
   "id": "209b",
   "ex": 209,
   "ap": "b",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'expressió algebraica de la funció afí que passa pels dos punts donats.",
   "enunciat": "Passa pels punts $(0,\\ 1)$ i $(1,\\ 3)$.",
   "opcions": [
    "$y=2x+1$",
    "$y=x+2$",
    "$y=-2x+1$",
    "$y=2x+3$"
   ],
   "pistes": [
    "Com que un dels punts té $x=0$, la seva $y$ ja és directament l'ordenada a l'origen $n$; només cal calcular el pendent $m$ amb els dos punts."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcGVuZGVudCDDqXMgZWwgY29lZmljaWVudCBxdWUgYWNvbXBhbnlhIGxhICR4JDsgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyBlbCB0ZXJtZSBpbmRlcGVuZGVudDogZXN0YW4gaW50ZXJjYW52aWF0cy4iLCAiRWwgcGVuZGVudCBlcyBjYWxjdWxhIGNvbSAkbT1cXGRmcmFje3lfMi15XzF9e3hfMi14XzF9JCwgcmVzdGFudCBzZW1wcmUgZW4gZWwgbWF0ZWl4IG9yZHJlIGFsIG51bWVyYWRvciBpIGFsIGRlbm9taW5hZG9yOiBzaSBzJ2ludmVydGVpeCBsJ29yZHJlIGVuIHVuIGRlbHMgZG9zLCBlbCBzaWduZSBzdXJ0IGNhbnZpYXQuIiwgIkwnb3JkZW5hZGEgYSBsJ29yaWdlbiDDqXMgZWwgdmFsb3IgZGUgJHkkIGRlbCBwdW50IG9uICR4PTAkLCDDqXMgYSBkaXIsIGRlbCBwdW50ICQoMCxcXCAxKSQgKHF1ZSBkb25hICRuPTEkKSwgbm8gZGVsIHB1bnQgJCgxLFxcIDMpJC4iXSwgImVyciI6IFsiIiwgIlBFTkRFTlRfT1JERU5BREFfSU5URVJDQU5WSUFUUyIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIlBVTlRfT1JERU5BREFfQ09ORk9TIl0sICJyZXMiOiBbIkVsIHBlbmRlbnQgw6lzICRtPVxcZGZyYWN7eV8yLXlfMX17eF8yLXhfMX09XFxkZnJhY3szLSgxKX17MS0oMCl9PTIkLiIsICJDb20gcXVlIGVsIHB1bnQgJCgwLFxcIDEpJCB0w6kgJHg9MCQsIGxhIHNldmEgJHkkIGphIMOpcyBsJ29yZGVuYWRhIGEgbCdvcmlnZW46ICRuPTEkLiIsICJMJ2V4cHJlc3Npw7Mgw6lzICR5PTJ4KzEkLiJdfQ=="
  },
  {
   "id": "209c",
   "ex": 209,
   "ap": "c",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'expressió algebraica de la funció afí que passa pels dos punts donats.",
   "enunciat": "Passa pels punts $(0,\\ 1)$ i $(2,\\ 2)$.",
   "opcions": [
    "$y=\\dfrac{1}{2}x+2$",
    "$y=\\dfrac{1}{2}x+1$",
    "$y=x+\\dfrac{1}{2}$",
    "$y=-\\dfrac{1}{2}x+1$"
   ],
   "pistes": [
    "Com que un dels punts té $x=0$, la seva $y$ ja és directament l'ordenada a l'origen $n$; només cal calcular el pendent $m$ amb els dos punts."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHZhbG9yIGRlICR5JCBkZWwgcHVudCBvbiAkeD0wJCwgw6lzIGEgZGlyLCBkZWwgcHVudCAkKDAsXFwgMSkkIChxdWUgZG9uYSAkbj0xJCksIG5vIGRlbCBwdW50ICQoMixcXCAyKSQuIiwgIiIsICJFbCBwZW5kZW50IMOpcyBlbCBjb2VmaWNpZW50IHF1ZSBhY29tcGFueWEgbGEgJHgkOyBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50OiBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICJFbCBwZW5kZW50IGVzIGNhbGN1bGEgY29tICRtPVxcZGZyYWN7eV8yLXlfMX17eF8yLXhfMX0kLCByZXN0YW50IHNlbXByZSBlbiBlbCBtYXRlaXggb3JkcmUgYWwgbnVtZXJhZG9yIGkgYWwgZGVub21pbmFkb3I6IHNpIHMnaW52ZXJ0ZWl4IGwnb3JkcmUgZW4gdW4gZGVscyBkb3MsIGVsIHNpZ25lIHN1cnQgY2FudmlhdC4iXSwgImVyciI6IFsiUFVOVF9PUkRFTkFEQV9DT05GT1MiLCAiIiwgIlBFTkRFTlRfT1JERU5BREFfSU5URVJDQU5WSUFUUyIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIkVsIHBlbmRlbnQgw6lzICRtPVxcZGZyYWN7eV8yLXlfMX17eF8yLXhfMX09XFxkZnJhY3syLSgxKX17Mi0oMCl9PVxcZGZyYWN7MX17Mn0kLiIsICJDb20gcXVlIGVsIHB1bnQgJCgwLFxcIDEpJCB0w6kgJHg9MCQsIGxhIHNldmEgJHkkIGphIMOpcyBsJ29yZGVuYWRhIGEgbCdvcmlnZW46ICRuPTEkLiIsICJMJ2V4cHJlc3Npw7Mgw6lzICR5PVxcZGZyYWN7MX17Mn14KzEkLiJdfQ=="
  },
  {
   "id": "209d",
   "ex": 209,
   "ap": "d",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula l'expressió algebraica de la funció afí que passa pels dos punts donats.",
   "enunciat": "Passa pels punts $(0,\\ -1)$ i $(1,\\ -3)$.",
   "opcions": [
    "$y=-x-2$",
    "$y=-2x-1$",
    "$y=2x-1$",
    "$y=-2x-3$"
   ],
   "pistes": [
    "Com que un dels punts té $x=0$, la seva $y$ ja és directament l'ordenada a l'origen $n$; només cal calcular el pendent $m$ amb els dos punts."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50IMOpcyBlbCBjb2VmaWNpZW50IHF1ZSBhY29tcGFueWEgbGEgJHgkOyBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50OiBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICIiLCAiRWwgcGVuZGVudCBlcyBjYWxjdWxhIGNvbSAkbT1cXGRmcmFje3lfMi15XzF9e3hfMi14XzF9JCwgcmVzdGFudCBzZW1wcmUgZW4gZWwgbWF0ZWl4IG9yZHJlIGFsIG51bWVyYWRvciBpIGFsIGRlbm9taW5hZG9yOiBzaSBzJ2ludmVydGVpeCBsJ29yZHJlIGVuIHVuIGRlbHMgZG9zLCBlbCBzaWduZSBzdXJ0IGNhbnZpYXQuIiwgIkwnb3JkZW5hZGEgYSBsJ29yaWdlbiDDqXMgZWwgdmFsb3IgZGUgJHkkIGRlbCBwdW50IG9uICR4PTAkLCDDqXMgYSBkaXIsIGRlbCBwdW50ICQoMCxcXCAtMSkkIChxdWUgZG9uYSAkbj0tMSQpLCBubyBkZWwgcHVudCAkKDEsXFwgLTMpJC4iXSwgImVyciI6IFsiUEVOREVOVF9PUkRFTkFEQV9JTlRFUkNBTlZJQVRTIiwgIiIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIlBVTlRfT1JERU5BREFfQ09ORk9TIl0sICJyZXMiOiBbIkVsIHBlbmRlbnQgw6lzICRtPVxcZGZyYWN7eV8yLXlfMX17eF8yLXhfMX09XFxkZnJhY3stMy0oLTEpfXsxLSgwKX09LTIkLiIsICJDb20gcXVlIGVsIHB1bnQgJCgwLFxcIC0xKSQgdMOpICR4PTAkLCBsYSBzZXZhICR5JCBqYSDDqXMgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuOiAkbj0tMSQuIiwgIkwnZXhwcmVzc2nDsyDDqXMgJHk9LTJ4LTEkLiJdfQ=="
  },
  {
   "id": "212a",
   "ex": 212,
   "ap": "a",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Sense representar-la, indica si la paràbola és més oberta cap amunt o cap avall, i si és més estreta o més ampla que $y=x^2$.",
   "enunciat": "$y=2x^2$",
   "opcions": [
    "Oberta cap avall i més ampla que $y=x^2$.",
    "Oberta cap avall i més estreta que $y=x^2$.",
    "Oberta cap amunt i més ampla que $y=x^2$.",
    "Oberta cap amunt i més estreta que $y=x^2$."
   ],
   "pistes": [
    "El signe de $a$ (a $y=ax^2$) determina l'obertura; el valor absolut de $a$ comparat amb $1$ determina l'amplada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJUYW50IGwnb2JlcnR1cmEgY29tIGwnYW1wbGFkYSBlc3RhbiBpbnZlcnRpZGVzIHJlc3BlY3RlIGEgJGE9MiQuIiwgIkVsIHNpZ25lIGRlICRhJCBkZXRlcm1pbmEgbCdvYmVydHVyYTogcG9zaXRpdSDDqXMgY2FwIGFtdW50LCBuZWdhdGl1IGNhcCBhdmFsbC4gQXF1w60gJGE9MiQuIiwgIkNvbSBtw6lzIGdyYW4gw6lzICR8YXwkLCBtw6lzIEVTVFJFVEEgw6lzIGxhIHBhcsOgYm9sYSAobm8gbcOpcyBhbXBsYSk6IGFxdcOtICR8YXw9MiQsIHF1ZSDDqXMgbcOpcyBncmFuIHF1ZSAkMSQuIiwgIiJdLCAiZXJyIjogWyJPQkVSVFVSQV9JX0FNUExBREFfSU5WRVJUSURFUyIsICJPQkVSVFVSQV9JTlZFUlRJREEiLCAiQU1QTEFEQV9JTlZFUlRJREEiLCAiIl0sICJyZXMiOiBbIkEgJHk9MnheMiQsICRhPTIkLiIsICJDb20gcXVlICRhJCDDqXMgcG9zaXRpdSwgbGEgcGFyw6Bib2xhIMOpcyBvYmVydGEgY2FwIGFtdW50LiIsICJDb20gcXVlICR8YXw9MiQgw6lzIG3DqXMgZ3JhbiBxdWUgJDEkLCBsYSBwYXLDoGJvbGEgw6lzIG3DqXMgZXN0cmV0YSBxdWUgJHk9eF4yJC4iXX0="
  },
  {
   "id": "212b",
   "ex": 212,
   "ap": "b",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Sense representar-la, indica si la paràbola és més oberta cap amunt o cap avall, i si és més estreta o més ampla que $y=x^2$.",
   "enunciat": "$y=\\dfrac{x^2}{2}$",
   "opcions": [
    "Oberta cap amunt i més ampla que $y=x^2$.",
    "Oberta cap avall i més estreta que $y=x^2$.",
    "Oberta cap avall i més ampla que $y=x^2$.",
    "Oberta cap amunt i més estreta que $y=x^2$."
   ],
   "pistes": [
    "El signe de $a$ (a $y=ax^2$) determina l'obertura; el valor absolut de $a$ comparat amb $1$ determina l'amplada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiVGFudCBsJ29iZXJ0dXJhIGNvbSBsJ2FtcGxhZGEgZXN0YW4gaW52ZXJ0aWRlcyByZXNwZWN0ZSBhICRhPVxcZGZyYWN7MX17Mn0kLiIsICJFbCBzaWduZSBkZSAkYSQgZGV0ZXJtaW5hIGwnb2JlcnR1cmE6IHBvc2l0aXUgw6lzIGNhcCBhbXVudCwgbmVnYXRpdSBjYXAgYXZhbGwuIEFxdcOtICRhPVxcZGZyYWN7MX17Mn0kLiIsICJDb20gbcOpcyBncmFuIMOpcyAkfGF8JCwgbcOpcyBFU1RSRVRBIMOpcyBsYSBwYXLDoGJvbGEgKG5vIG3DqXMgYW1wbGEpOiBhcXXDrSAkfGF8PVxcZGZyYWN7MX17Mn0kLCBxdWUgw6lzIG3DqXMgcGV0aXQgcXVlICQxJC4iXSwgImVyciI6IFsiIiwgIk9CRVJUVVJBX0lfQU1QTEFEQV9JTlZFUlRJREVTIiwgIk9CRVJUVVJBX0lOVkVSVElEQSIsICJBTVBMQURBX0lOVkVSVElEQSJdLCAicmVzIjogWyJBICR5PVxcZGZyYWN7eF4yfXsyfSQsICRhPVxcZGZyYWN7MX17Mn0kLiIsICJDb20gcXVlICRhJCDDqXMgcG9zaXRpdSwgbGEgcGFyw6Bib2xhIMOpcyBvYmVydGEgY2FwIGFtdW50LiIsICJDb20gcXVlICR8YXw9XFxkZnJhY3sxfXsyfSQgw6lzIG3DqXMgcGV0aXQgcXVlICQxJCwgbGEgcGFyw6Bib2xhIMOpcyBtw6lzIGFtcGxhIHF1ZSAkeT14XjIkLiJdfQ=="
  },
  {
   "id": "212c",
   "ex": 212,
   "ap": "c",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Sense representar-la, indica si la paràbola és més oberta cap amunt o cap avall, i si és més estreta o més ampla que $y=x^2$.",
   "enunciat": "$y=-2x^2$",
   "opcions": [
    "Oberta cap avall i més ampla que $y=x^2$.",
    "Oberta cap amunt i més ampla que $y=x^2$.",
    "Oberta cap avall i més estreta que $y=x^2$.",
    "Oberta cap amunt i més estreta que $y=x^2$."
   ],
   "pistes": [
    "El signe de $a$ (a $y=ax^2$) determina l'obertura; el valor absolut de $a$ comparat amb $1$ determina l'amplada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJDb20gbcOpcyBncmFuIMOpcyAkfGF8JCwgbcOpcyBFU1RSRVRBIMOpcyBsYSBwYXLDoGJvbGEgKG5vIG3DqXMgYW1wbGEpOiBhcXXDrSAkfGF8PTIkLCBxdWUgw6lzIG3DqXMgZ3JhbiBxdWUgJDEkLiIsICJUYW50IGwnb2JlcnR1cmEgY29tIGwnYW1wbGFkYSBlc3RhbiBpbnZlcnRpZGVzIHJlc3BlY3RlIGEgJGE9LTIkLiIsICIiLCAiRWwgc2lnbmUgZGUgJGEkIGRldGVybWluYSBsJ29iZXJ0dXJhOiBwb3NpdGl1IMOpcyBjYXAgYW11bnQsIG5lZ2F0aXUgY2FwIGF2YWxsLiBBcXXDrSAkYT0tMiQuIl0sICJlcnIiOiBbIkFNUExBREFfSU5WRVJUSURBIiwgIk9CRVJUVVJBX0lfQU1QTEFEQV9JTlZFUlRJREVTIiwgIiIsICJPQkVSVFVSQV9JTlZFUlRJREEiXSwgInJlcyI6IFsiQSAkeT0tMnheMiQsICRhPS0yJC4iLCAiQ29tIHF1ZSAkYSQgw6lzIG5lZ2F0aXUsIGxhIHBhcsOgYm9sYSDDqXMgb2JlcnRhIGNhcCBhdmFsbC4iLCAiQ29tIHF1ZSAkfGF8PTIkIMOpcyBtw6lzIGdyYW4gcXVlICQxJCwgbGEgcGFyw6Bib2xhIMOpcyBtw6lzIGVzdHJldGEgcXVlICR5PXheMiQuIl19"
  },
  {
   "id": "212d",
   "ex": 212,
   "ap": "d",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Sense representar-la, indica si la paràbola és més oberta cap amunt o cap avall, i si és més estreta o més ampla que $y=x^2$.",
   "enunciat": "$y=\\dfrac{x^2}{4}$",
   "opcions": [
    "Oberta cap avall i més estreta que $y=x^2$.",
    "Oberta cap amunt i més ampla que $y=x^2$.",
    "Oberta cap avall i més ampla que $y=x^2$.",
    "Oberta cap amunt i més estreta que $y=x^2$."
   ],
   "pistes": [
    "El signe de $a$ (a $y=ax^2$) determina l'obertura; el valor absolut de $a$ comparat amb $1$ determina l'amplada."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJUYW50IGwnb2JlcnR1cmEgY29tIGwnYW1wbGFkYSBlc3RhbiBpbnZlcnRpZGVzIHJlc3BlY3RlIGEgJGE9XFxkZnJhY3sxfXs0fSQuIiwgIiIsICJFbCBzaWduZSBkZSAkYSQgZGV0ZXJtaW5hIGwnb2JlcnR1cmE6IHBvc2l0aXUgw6lzIGNhcCBhbXVudCwgbmVnYXRpdSBjYXAgYXZhbGwuIEFxdcOtICRhPVxcZGZyYWN7MX17NH0kLiIsICJDb20gbcOpcyBncmFuIMOpcyAkfGF8JCwgbcOpcyBFU1RSRVRBIMOpcyBsYSBwYXLDoGJvbGEgKG5vIG3DqXMgYW1wbGEpOiBhcXXDrSAkfGF8PVxcZGZyYWN7MX17NH0kLCBxdWUgw6lzIG3DqXMgcGV0aXQgcXVlICQxJC4iXSwgImVyciI6IFsiT0JFUlRVUkFfSV9BTVBMQURBX0lOVkVSVElERVMiLCAiIiwgIk9CRVJUVVJBX0lOVkVSVElEQSIsICJBTVBMQURBX0lOVkVSVElEQSJdLCAicmVzIjogWyJBICR5PVxcZGZyYWN7eF4yfXs0fSQsICRhPVxcZGZyYWN7MX17NH0kLiIsICJDb20gcXVlICRhJCDDqXMgcG9zaXRpdSwgbGEgcGFyw6Bib2xhIMOpcyBvYmVydGEgY2FwIGFtdW50LiIsICJDb20gcXVlICR8YXw9XFxkZnJhY3sxfXs0fSQgw6lzIG3DqXMgcGV0aXQgcXVlICQxJCwgbGEgcGFyw6Bib2xhIMOpcyBtw6lzIGFtcGxhIHF1ZSAkeT14XjIkLiJdfQ=="
  },
  {
   "id": "214a",
   "ex": 214,
   "ap": "a",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula quin és el valor de la constant $c$ en l'expressió $y=x^2+c$ d'aquestes paràboles.",
   "enunciat": "Paràbola oberta cap amunt amb vèrtex en el punt $(0,\\ -1)$.",
   "opcions": [
    "$c=-1$",
    "$c=1$",
    "$c=0$",
    "$c=-2$"
   ],
   "pistes": [
    "El vèrtex d'una paràbola $y=x^2+c$ és sempre el punt $(0,c)$: la segona coordenada del vèrtex ÉS el valor de $c$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdsOocnRleCBkZSAkeT14XjIrYyQgw6lzIHNlbXByZSBlbCBwdW50ICQoMCxjKSQ6IHNpIGVsIHbDqHJ0ZXggZG9uYXQgw6lzICQoMCxcXCAtMSkkLCBlbCB2YWxvciBkZSAkYyQgw6lzICQtMSQsIGFtYiBlbCBtYXRlaXggc2lnbmUuIiwgIiRjJCBubyDDqXMgJDAkOiBlbCB2w6hydGV4IGRlICR5PXheMiQgKHNlbnNlIHN1bWFyIHJlcykgc2VyaWEgJCgwLDApJCwgaSBhcXXDrSBlbCB2w6hydGV4IGRvbmF0IMOpcyAkKDAsXFwgLTEpJCwgbm8gbCdvcmlnZW4uIiwgIkVsIHbDqHJ0ZXggJCgwLFxcIC0xKSQgZG9uYSBkaXJlY3RhbWVudCAkYz0tMSQsIHNlbnNlIG5lY2Vzc2l0YXQgZGUgbXVsdGlwbGljYXItbG8gcGVyIGNhcCBhbHRyZSBub21icmUuIl0sICJlcnIiOiBbIiIsICJTSUdORV9GSU5BTCIsICJURVJNRV9JTkRFUEVOREVOVF9JR05PUkFUIiwgIlZBTE9SX0RVUExJQ0FUIl0sICJyZXMiOiBbIkNvbXBhcmFudCAkeT14XjIrYyQgYW1iICR5PXheMiQsIHN1bWFyICRjJCBkZXNwbGHDp2EgdG90YSBsYSBwYXLDoGJvbGEgJGMkIHVuaXRhdHMgYW11bnQgKHNpICRjPjAkKSBvIGF2YWxsIChzaSAkYzwwJCksIHNlbnNlIG1vdXJlLWxhIGhvcml0em9udGFsbWVudC4iLCAiUGVyIGFpeMOyIGVsIHbDqHJ0ZXggcGFzc2EgZGUgJCgwLDApJCBhICQoMCxjKSQ6IHNpIGVsIHbDqHJ0ZXggZG9uYXQgw6lzICQoMCxcXCAtMSkkLCBhbGVzaG9yZXMgJGM9LTEkLiJdfQ=="
  },
  {
   "id": "214b",
   "ex": 214,
   "ap": "b",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Calcula quin és el valor de la constant $c$ en l'expressió $y=x^2+c$ d'aquestes paràboles.",
   "enunciat": "Paràbola oberta cap amunt amb vèrtex en el punt $(0,\\ 2)$.",
   "opcions": [
    "$c=2$",
    "$c=0$",
    "$c=-2$",
    "$c=4$"
   ],
   "pistes": [
    "El vèrtex d'una paràbola $y=x^2+c$ és sempre el punt $(0,c)$: la segona coordenada del vèrtex ÉS el valor de $c$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJGMkIG5vIMOpcyAkMCQ6IGVsIHbDqHJ0ZXggZGUgJHk9eF4yJCAoc2Vuc2Ugc3VtYXIgcmVzKSBzZXJpYSAkKDAsMCkkLCBpIGFxdcOtIGVsIHbDqHJ0ZXggZG9uYXQgw6lzICQoMCxcXCAyKSQsIG5vIGwnb3JpZ2VuLiIsICJFbCB2w6hydGV4IGRlICR5PXheMitjJCDDqXMgc2VtcHJlIGVsIHB1bnQgJCgwLGMpJDogc2kgZWwgdsOocnRleCBkb25hdCDDqXMgJCgwLFxcIDIpJCwgZWwgdmFsb3IgZGUgJGMkIMOpcyAkMiQsIGFtYiBlbCBtYXRlaXggc2lnbmUuIiwgIkVsIHbDqHJ0ZXggJCgwLFxcIDIpJCBkb25hIGRpcmVjdGFtZW50ICRjPTIkLCBzZW5zZSBuZWNlc3NpdGF0IGRlIG11bHRpcGxpY2FyLWxvIHBlciBjYXAgYWx0cmUgbm9tYnJlLiJdLCAiZXJyIjogWyIiLCAiVEVSTUVfSU5ERVBFTkRFTlRfSUdOT1JBVCIsICJTSUdORV9GSU5BTCIsICJWQUxPUl9EVVBMSUNBVCJdLCAicmVzIjogWyJDb21wYXJhbnQgJHk9eF4yK2MkIGFtYiAkeT14XjIkLCBzdW1hciAkYyQgZGVzcGxhw6dhIHRvdGEgbGEgcGFyw6Bib2xhICRjJCB1bml0YXRzIGFtdW50IChzaSAkYz4wJCkgbyBhdmFsbCAoc2kgJGM8MCQpLCBzZW5zZSBtb3VyZS1sYSBob3JpdHpvbnRhbG1lbnQuIiwgIlBlciBhaXjDsiBlbCB2w6hydGV4IHBhc3NhIGRlICQoMCwwKSQgYSAkKDAsYykkOiBzaSBlbCB2w6hydGV4IGRvbmF0IMOpcyAkKDAsXFwgMikkLCBhbGVzaG9yZXMgJGM9MiQuIl19"
  },
  {
   "id": "215",
   "ex": 215,
   "ap": "",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'expressió algebraica de la paràbola.",
   "enunciat": "Paràbola oberta cap amunt, amb vèrtex en el punt $(0,1)$, que passa pel punt $(1,2)$.",
   "opcions": [
    "$y=2x^2+1$",
    "$y=x^2-1$",
    "$y=x^2+2$",
    "$y=x^2+1$"
   ],
   "pistes": [
    "El vèrtex $(0,c)$ ja dona directament el valor de $c$; substitueix l'altre punt a $y=ax^2+c$ per trobar $a$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTdWJzdGl0dWludCBlbCBwdW50ICQoMSwyKSQgYSAkeT1heF4yKzEkOiAkMj1hXFxjZG90IDFeMisxJCwgcXVlIGRvbmEgJGE9MSQsIG5vICRhPTIkLiIsICJFbCB2w6hydGV4ICQoMCwxKSQgdMOpIGxhIHNlZ29uYSBjb29yZGVuYWRhIHBvc2l0aXZhOiAkYz0xJCwgbm8gJGM9LTEkLiIsICJFbCB2w6hydGV4ICQoMCwxKSQgamEgZGl1IGRpcmVjdGFtZW50IHF1ZSAkYz0xJDogZWwgJDIkIMOpcyBsYSAkeSQgZGVsIHB1bnQgJCgxLDIpJCwgbm8gZWwgdmFsb3IgZGUgJGMkLiIsICIiXSwgImVyciI6IFsiQ09FRklDSUVOVF9BX01BTF9DQUxDVUxBVCIsICJTSUdORV9GSU5BTCIsICJWQUxPUl9DX0NPTkZPUyIsICIiXSwgInJlcyI6IFsiRWwgdsOocnRleCAkKDAsMSkkIGRvbmEgJGM9MSQ6IGwnZXhwcmVzc2nDsyDDqXMgJHk9YXheMisxJC4iLCAiU3Vic3RpdHVpbnQgZWwgcHVudCAkKDEsMikkOiAkMj1hXFxjZG90IDFeMisxJCwgcGVyIHRhbnQgJGE9MSQuIiwgIkwnZXhwcmVzc2nDsyDDqXMgJHk9eF4yKzEkLiJdfQ=="
  },
  {
   "id": "216a",
   "ex": 216,
   "ap": "a",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba els talls amb els eixos, el vèrtex i l'equació de l'eix de simetria d'aquestes paràboles.",
   "enunciat": "$y=-x^2-3x$",
   "opcions": [
    "$\\text{talls: }(0,\\ 0),\\ (-3,\\ 0);\\ \\text{eix }x=-3;\\ \\text{vèrtex }(-3,\\ 0)$",
    "$\\text{talls: }(0,\\ 0),\\ (-3,\\ 0);\\ \\text{eix }x=-\\dfrac{3}{2};\\ \\text{vèrtex }(-\\dfrac{3}{2},\\ -\\dfrac{9}{4})$",
    "$\\text{talls: }(-3,\\ 0);\\ \\text{eix }x=-\\dfrac{3}{2};\\ \\text{vèrtex }(-\\dfrac{3}{2},\\ \\dfrac{9}{4})$",
    "$\\text{talls: }(0,\\ 0),\\ (-3,\\ 0);\\ \\text{eix }x=-\\dfrac{3}{2};\\ \\text{vèrtex }(-\\dfrac{3}{2},\\ \\dfrac{9}{4})$"
   ],
   "pistes": [
    "Els talls amb l'eix $X$ són les solucions de l'equació de segon grau (traient factor comú $x$, ja que no hi ha terme independent); l'eix de simetria passa pel punt mig entre aquestes dues solucions."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgUFVOVCBNSUcgZW50cmUgbGVzIGR1ZXMgYXJyZWxzLCBubyBwZXIgdW5hIGRlIGxlcyBhcnJlbHM6IGNvbSBxdWUgdW5hIGFycmVsIMOpcyAkMCQsIGVsIHB1bnQgbWlnIMOpcyBsYSBtZWl0YXQgZGUgbCdhbHRyYSBhcnJlbC4iLCAiTGEgJHkkIGRlbCB2w6hydGV4IHMnb2J0w6kgc3Vic3RpdHVpbnQgbGEgJHgkIGRlbCB2w6hydGV4IGEgbCdleHByZXNzacOzIG9yaWdpbmFsOiBjYWwgY2FsY3VsYXItbGEsIG5vIG5vbcOpcyBjYW52aWFyLW5lIGVsIHNpZ25lLiIsICJDb20gcXVlIGwnZXhwcmVzc2nDsyBubyB0w6kgdGVybWUgaW5kZXBlbmRlbnQgKG5vIGhpIGhhICQrYyQpLCBsYSBwYXLDoGJvbGEgc2VtcHJlIHBhc3NhIHBlciBsJ29yaWdlbjogJCgwLDApJCB0YW1iw6kgw6lzIHVuIHRhbGwgYW1iIGVscyBlaXhvcywgbm8gbm9tw6lzIGwnYWx0cmEgYXJyZWwuIiwgIiJdLCAiZXJyIjogWyJFSVhfU0lNRVRSSUFfTUFMX0NBTENVTEFUIiwgIlNJR05FX0ZJTkFMIiwgIlRBTExfT1JJR0VOX09CTElEQVQiLCAiIl0sICJyZXMiOiBbIlRyYWllbnQgZmFjdG9yIGNvbcO6OiAkLXheMi0zeD14KC14LTMpJCwgcXVlIGRvbmEgJHg9MCQgaSAkeD0tMyQuIiwgIlRhbGxzIGFtYiBlbHMgZWl4b3M6ICQoMCxcXCAwKSQgaSAkKC0zLFxcIDApJC4iLCAiTCdlaXggZGUgc2ltZXRyaWEgcGFzc2EgcGVsIHB1bnQgbWlnIGRlIGxlcyBhcnJlbHM6ICR4PS1cXGRmcmFjezN9ezJ9JC4iLCAiRWwgdsOocnRleCDDqXMgJCgtXFxkZnJhY3szfXsyfSxcXCBcXGRmcmFjezl9ezR9KSQsIHN1YnN0aXR1aW50ICR4PS1cXGRmcmFjezN9ezJ9JCBhIGwnZXhwcmVzc2nDsy4iXX0="
  },
  {
   "id": "216b",
   "ex": 216,
   "ap": "b",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba els talls amb els eixos, el vèrtex i l'equació de l'eix de simetria d'aquestes paràboles.",
   "enunciat": "$y=x^2-\\dfrac23x$",
   "opcions": [
    "$\\text{talls: }(0,\\ 0),\\ (\\dfrac{2}{3},\\ 0);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }(\\dfrac{1}{3},\\ \\dfrac{1}{9})$",
    "$\\text{talls: }(0,\\ 0),\\ (\\dfrac{2}{3},\\ 0);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }(\\dfrac{1}{3},\\ -\\dfrac{1}{9})$",
    "$\\text{talls: }(0,\\ 0),\\ (\\dfrac{2}{3},\\ 0);\\ \\text{eix }x=\\dfrac{2}{3};\\ \\text{vèrtex }(\\dfrac{2}{3},\\ 0)$",
    "$\\text{talls: }(\\dfrac{2}{3},\\ 0);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }(\\dfrac{1}{3},\\ -\\dfrac{1}{9})$"
   ],
   "pistes": [
    "Els talls amb l'eix $X$ són les solucions de l'equació de segon grau (traient factor comú $x$, ja que no hi ha terme independent); l'eix de simetria passa pel punt mig entre aquestes dues solucions."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMYSAkeSQgZGVsIHbDqHJ0ZXggcydvYnTDqSBzdWJzdGl0dWludCBsYSAkeCQgZGVsIHbDqHJ0ZXggYSBsJ2V4cHJlc3Npw7Mgb3JpZ2luYWw6IGNhbCBjYWxjdWxhci1sYSwgbm8gbm9tw6lzIGNhbnZpYXItbmUgZWwgc2lnbmUuIiwgIiIsICJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgUFVOVCBNSUcgZW50cmUgbGVzIGR1ZXMgYXJyZWxzLCBubyBwZXIgdW5hIGRlIGxlcyBhcnJlbHM6IGNvbSBxdWUgdW5hIGFycmVsIMOpcyAkMCQsIGVsIHB1bnQgbWlnIMOpcyBsYSBtZWl0YXQgZGUgbCdhbHRyYSBhcnJlbC4iLCAiQ29tIHF1ZSBsJ2V4cHJlc3Npw7Mgbm8gdMOpIHRlcm1lIGluZGVwZW5kZW50IChubyBoaSBoYSAkK2MkKSwgbGEgcGFyw6Bib2xhIHNlbXByZSBwYXNzYSBwZXIgbCdvcmlnZW46ICQoMCwwKSQgdGFtYsOpIMOpcyB1biB0YWxsIGFtYiBlbHMgZWl4b3MsIG5vIG5vbcOpcyBsJ2FsdHJhIGFycmVsLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICIiLCAiRUlYX1NJTUVUUklBX01BTF9DQUxDVUxBVCIsICJUQUxMX09SSUdFTl9PQkxJREFUIl0sICJyZXMiOiBbIlRyYWllbnQgZmFjdG9yIGNvbcO6OiAkeF4yLVxcZGZyYWMyM3g9eCh4LVxcZGZyYWN7Mn17M30pJCwgcXVlIGRvbmEgJHg9MCQgaSAkeD1cXGRmcmFjezJ9ezN9JC4iLCAiVGFsbHMgYW1iIGVscyBlaXhvczogJCgwLFxcIDApJCBpICQoXFxkZnJhY3syfXszfSxcXCAwKSQuIiwgIkwnZWl4IGRlIHNpbWV0cmlhIHBhc3NhIHBlbCBwdW50IG1pZyBkZSBsZXMgYXJyZWxzOiAkeD1cXGRmcmFjezF9ezN9JC4iLCAiRWwgdsOocnRleCDDqXMgJChcXGRmcmFjezF9ezN9LFxcIC1cXGRmcmFjezF9ezl9KSQsIHN1YnN0aXR1aW50ICR4PVxcZGZyYWN7MX17M30kIGEgbCdleHByZXNzacOzLiJdfQ=="
  },
  {
   "id": "216c",
   "ex": 216,
   "ap": "c",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba els talls amb els eixos, el vèrtex i l'equació de l'eix de simetria d'aquestes paràboles.",
   "enunciat": "$y=\\dfrac32x^2-x$",
   "opcions": [
    "$\\text{talls: }(0,\\ 0),\\ (\\dfrac{2}{3},\\ 0);\\ \\text{eix }x=\\dfrac{2}{3};\\ \\text{vèrtex }(\\dfrac{2}{3},\\ 0)$",
    "$\\text{talls: }(\\dfrac{2}{3},\\ 0);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }(\\dfrac{1}{3},\\ -\\dfrac{1}{6})$",
    "$\\text{talls: }(0,\\ 0),\\ (\\dfrac{2}{3},\\ 0);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }(\\dfrac{1}{3},\\ \\dfrac{1}{6})$",
    "$\\text{talls: }(0,\\ 0),\\ (\\dfrac{2}{3},\\ 0);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }(\\dfrac{1}{3},\\ -\\dfrac{1}{6})$"
   ],
   "pistes": [
    "Els talls amb l'eix $X$ són les solucions de l'equació de segon grau (traient factor comú $x$, ja que no hi ha terme independent); l'eix de simetria passa pel punt mig entre aquestes dues solucions."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgUFVOVCBNSUcgZW50cmUgbGVzIGR1ZXMgYXJyZWxzLCBubyBwZXIgdW5hIGRlIGxlcyBhcnJlbHM6IGNvbSBxdWUgdW5hIGFycmVsIMOpcyAkMCQsIGVsIHB1bnQgbWlnIMOpcyBsYSBtZWl0YXQgZGUgbCdhbHRyYSBhcnJlbC4iLCAiQ29tIHF1ZSBsJ2V4cHJlc3Npw7Mgbm8gdMOpIHRlcm1lIGluZGVwZW5kZW50IChubyBoaSBoYSAkK2MkKSwgbGEgcGFyw6Bib2xhIHNlbXByZSBwYXNzYSBwZXIgbCdvcmlnZW46ICQoMCwwKSQgdGFtYsOpIMOpcyB1biB0YWxsIGFtYiBlbHMgZWl4b3MsIG5vIG5vbcOpcyBsJ2FsdHJhIGFycmVsLiIsICJMYSAkeSQgZGVsIHbDqHJ0ZXggcydvYnTDqSBzdWJzdGl0dWludCBsYSAkeCQgZGVsIHbDqHJ0ZXggYSBsJ2V4cHJlc3Npw7Mgb3JpZ2luYWw6IGNhbCBjYWxjdWxhci1sYSwgbm8gbm9tw6lzIGNhbnZpYXItbmUgZWwgc2lnbmUuIiwgIiJdLCAiZXJyIjogWyJFSVhfU0lNRVRSSUFfTUFMX0NBTENVTEFUIiwgIlRBTExfT1JJR0VOX09CTElEQVQiLCAiU0lHTkVfRklOQUwiLCAiIl0sICJyZXMiOiBbIlRyYWllbnQgZmFjdG9yIGNvbcO6OiAkXFxkZnJhYzMyeF4yLXg9eChcXGRmcmFjezN9ezJ9eC0xKSQsIHF1ZSBkb25hICR4PTAkIGkgJHg9XFxkZnJhY3syfXszfSQuIiwgIlRhbGxzIGFtYiBlbHMgZWl4b3M6ICQoMCxcXCAwKSQgaSAkKFxcZGZyYWN7Mn17M30sXFwgMCkkLiIsICJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgcHVudCBtaWcgZGUgbGVzIGFycmVsczogJHg9XFxkZnJhY3sxfXszfSQuIiwgIkVsIHbDqHJ0ZXggw6lzICQoXFxkZnJhY3sxfXszfSxcXCAtXFxkZnJhY3sxfXs2fSkkLCBzdWJzdGl0dWludCAkeD1cXGRmcmFjezF9ezN9JCBhIGwnZXhwcmVzc2nDsy4iXX0="
  },
  {
   "id": "216d",
   "ex": 216,
   "ap": "d",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba els talls amb els eixos, el vèrtex i l'equació de l'eix de simetria d'aquestes paràboles.",
   "enunciat": "$y=x^2+2x$",
   "opcions": [
    "$\\text{talls: }(0,\\ 0),\\ (-2,\\ 0);\\ \\text{eix }x=-2;\\ \\text{vèrtex }(-2,\\ 0)$",
    "$\\text{talls: }(-2,\\ 0);\\ \\text{eix }x=-1;\\ \\text{vèrtex }(-1,\\ -1)$",
    "$\\text{talls: }(0,\\ 0),\\ (-2,\\ 0);\\ \\text{eix }x=-1;\\ \\text{vèrtex }(-1,\\ -1)$",
    "$\\text{talls: }(0,\\ 0),\\ (-2,\\ 0);\\ \\text{eix }x=-1;\\ \\text{vèrtex }(-1,\\ 1)$"
   ],
   "pistes": [
    "Els talls amb l'eix $X$ són les solucions de l'equació de segon grau (traient factor comú $x$, ja que no hi ha terme independent); l'eix de simetria passa pel punt mig entre aquestes dues solucions."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgUFVOVCBNSUcgZW50cmUgbGVzIGR1ZXMgYXJyZWxzLCBubyBwZXIgdW5hIGRlIGxlcyBhcnJlbHM6IGNvbSBxdWUgdW5hIGFycmVsIMOpcyAkMCQsIGVsIHB1bnQgbWlnIMOpcyBsYSBtZWl0YXQgZGUgbCdhbHRyYSBhcnJlbC4iLCAiQ29tIHF1ZSBsJ2V4cHJlc3Npw7Mgbm8gdMOpIHRlcm1lIGluZGVwZW5kZW50IChubyBoaSBoYSAkK2MkKSwgbGEgcGFyw6Bib2xhIHNlbXByZSBwYXNzYSBwZXIgbCdvcmlnZW46ICQoMCwwKSQgdGFtYsOpIMOpcyB1biB0YWxsIGFtYiBlbHMgZWl4b3MsIG5vIG5vbcOpcyBsJ2FsdHJhIGFycmVsLiIsICIiLCAiTGEgJHkkIGRlbCB2w6hydGV4IHMnb2J0w6kgc3Vic3RpdHVpbnQgbGEgJHgkIGRlbCB2w6hydGV4IGEgbCdleHByZXNzacOzIG9yaWdpbmFsOiBjYWwgY2FsY3VsYXItbGEsIG5vIG5vbcOpcyBjYW52aWFyLW5lIGVsIHNpZ25lLiJdLCAiZXJyIjogWyJFSVhfU0lNRVRSSUFfTUFMX0NBTENVTEFUIiwgIlRBTExfT1JJR0VOX09CTElEQVQiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIlRyYWllbnQgZmFjdG9yIGNvbcO6OiAkeF4yKzJ4PXgoeCsyKSQsIHF1ZSBkb25hICR4PTAkIGkgJHg9LTIkLiIsICJUYWxscyBhbWIgZWxzIGVpeG9zOiAkKDAsXFwgMCkkIGkgJCgtMixcXCAwKSQuIiwgIkwnZWl4IGRlIHNpbWV0cmlhIHBhc3NhIHBlbCBwdW50IG1pZyBkZSBsZXMgYXJyZWxzOiAkeD0tMSQuIiwgIkVsIHbDqHJ0ZXggw6lzICQoLTEsXFwgLTEpJCwgc3Vic3RpdHVpbnQgJHg9LTEkIGEgbCdleHByZXNzacOzLiJdfQ=="
  },
  {
   "id": "217a",
   "ex": 217,
   "ap": "a",
   "bloc": "funcions_quadratiques",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Analitza com serà la gràfica d'aquestes funcions polinòmiques sense representar-les.",
   "enunciat": "$y=x^2-3x^2+4$",
   "opcions": [
    "Reduint termes semblants, $x^2-3x^2=-2x^2$: és la paràbola $y=-2x^2+4$, oberta cap avall, més estreta que $y=x^2$, amb vèrtex a $(0,4)$.",
    "Reduint termes semblants, $x^2-3x^2=-2x^2$: és la paràbola $y=-2x^2+4$, oberta cap avall, més AMPLA que $y=x^2$, amb vèrtex a $(0,4)$.",
    "Reduint termes semblants, $x^2-3x^2=2x^2$: és la paràbola $y=2x^2+4$, oberta cap amunt, més estreta que $y=x^2$, amb vèrtex a $(0,4)$.",
    "És una paràbola $y=-2x^2+4x$: oberta cap avall, amb vèrtex fora de l'eix $Y$."
   ],
   "pistes": [
    "Abans de decidir de quin tipus de funció es tracta, redueix els termes semblants: $x^2$ i $-3x^2$ són tots dos termes en $x^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgY29lZmljaWVudCBkZSAkeF4yJCDDqXMgJC0yJCwgaSAkfC0yfD0yPjEkOiBsYSBwYXLDoGJvbGEgw6lzIG3DqXMgRVNUUkVUQSBxdWUgJHk9eF4yJCwgbm8gbcOpcyBhbXBsYS4iLCAiJHheMi0zeF4yJCDDqXMgdW5hIHJlc3RhIG9uIGVsIHNlZ29uIHRlcm1lIMOpcyBtw6lzIGdyYW46IGVsIHJlc3VsdGF0IMOpcyBuZWdhdGl1LCAkLTJ4XjIkLCBubyAkMnheMiQuIiwgIkVscyBkb3MgdGVybWVzICR4XjIkIGkgJC0zeF4yJCBzw7NuIHRlcm1lcyBTRU1CTEFOVFMgKHRvdHMgZG9zIGVuICR4XjIkKSBpIHMnaGFuIGRlIHJlZHVpciBqdW50cywgY29tIHVuIHNvbCB0ZXJtZSAkLTJ4XjIkOyBhIGwnZXhwcmVzc2nDsyBvcmlnaW5hbCBubyBoaSBoYSBjYXAgdGVybWUgZW4gJHgkIChhIGxhIHByaW1lcmEgcG90w6huY2lhKSwgYWl4w60gcXVlIG5vIGVuIHBvdCBxdWVkYXIgY2FwIGRlc3Byw6lzIGRlIHJlZHVpci4iXSwgImVyciI6IFsiIiwgIkFNUExBREFfSU5WRVJUSURBIiwgIlNJR05FX0ZJTkFMIiwgIlRFUk1FU19OT19SRURVSVRTIl0sICJyZXMiOiBbIlJlZHVpbnQgdGVybWVzIHNlbWJsYW50czogJHheMi0zeF4yPS0yeF4yJCwgYWl4w60gcXVlIGwnZXhwcmVzc2nDsyDDqXMgJHk9LTJ4XjIrNCQuIiwgIsOJcyB1bmEgcGFyw6Bib2xhICh0w6kgdGVybWUgZW4gJHheMiQpLCBzZW5zZSB0ZXJtZSBlbiAkeCQgKHBlciB0YW50IHNpbcOodHJpY2EgcmVzcGVjdGUgYSBsJ2VpeCAkWSQpLiIsICJFbCBjb2VmaWNpZW50IGRlICR4XjIkIMOpcyAkLTIkOiBuZWdhdGl1LCBvYmVydGEgY2FwIGF2YWxsOyAkfC0yfD4xJCwgbcOpcyBlc3RyZXRhIHF1ZSAkeT14XjIkLiIsICJFbCB2w6hydGV4IMOpcyAkKDAsNCkkLCBqYSBxdWUgbm8gaGkgaGEgdGVybWUgZW4gJHgkLiJdfQ=="
  },
  {
   "id": "217b",
   "ex": 217,
   "ap": "b",
   "bloc": "funcions_quadratiques",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Analitza com serà la gràfica d'aquestes funcions polinòmiques sense representar-les.",
   "enunciat": "$y=-x-3$",
   "opcions": [
    "És una recta amb pendent $-1$, però creixent, i ordenada a l'origen $-3$.",
    "No té cap terme en $x^2$: és una recta (no una paràbola), amb pendent $-1$ (decreixent) i ordenada a l'origen $-3$.",
    "És una recta amb pendent $-1$ (decreixent) i ordenada a l'origen $3$.",
    "No té cap terme en $x^2$ escrit, però és una paràbola amb $a=0$: oberta cap avall, decreixent."
   ],
   "pistes": [
    "Si l'expressió no té cap terme en $x^2$, no és una paràbola: és una recta."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50ICQtMSQgw6lzIG5lZ2F0aXU6IGxhIHJlY3RhIMOpcyBkZWNyZWl4ZW50LCBubyBjcmVpeGVudC4iLCAiIiwgIkVsIHRlcm1lIGluZGVwZW5kZW50IGRlICQteC0zJCDDqXMgJC0zJCAobmVnYXRpdSksIG5vICQzJDogbGEgcmVjdGEgdGFsbGEgbCdlaXggJFkkIGVuICQoMCwtMykkLiIsICJTaSBlbCBjb2VmaWNpZW50IGRlICR4XjIkIMOpcyAkMCQsIGwnZXhwcmVzc2nDsyBkZWl4YSBkZSBzZXIgdW5hIHBhcsOgYm9sYTogc2Vuc2UgdGVybWUgZW4gJHheMiQsIMOpcyB1bmEgcmVjdGEgKGZ1bmNpw7MgYWbDrSksIG5vIHVuYSBwYXLDoGJvbGEgZXh0cmVtYW1lbnQgb2JlcnRhLiJdLCAiZXJyIjogWyJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIiIsICJTSUdORV9PUkRFTkFEQV9JTlZFUlRJVCIsICJQQVJBQk9MQV9BTUJfQV9aRVJPIl0sICJyZXMiOiBbIiR5PS14LTMkIG5vIHTDqSB0ZXJtZSBlbiAkeF4yJDogw6lzIHVuYSBmdW5jacOzIGFmw60gKHJlY3RhKSwgbm8gdW5hIHBhcsOgYm9sYS4iLCAiRWwgcGVuZGVudCDDqXMgJC0xJCAobmVnYXRpdSwgcGVyIHRhbnQgZGVjcmVpeGVudCkgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICQtMyQuIl19"
  }
 ]
};
