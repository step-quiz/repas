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
    "366a",
    "366b",
    "201a",
    "201b",
    "201c",
    "201d",
    "202a",
    "202b",
    "202c",
    "202d",
    "200a",
    "200b",
    "200c",
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
    "367a",
    "367b",
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
   "id": "rectes_produccio",
   "titol": "Construir rectes",
   "descripcio": "De les dades a l'equació: pendent i punt, dos punts, paral·leles i perpendiculars, i punts de tall.",
   "items": [
    "336a",
    "336b",
    "336c",
    "336d",
    "337a",
    "337b",
    "295a",
    "295b",
    "295c",
    "295d",
    "296a",
    "296b",
    "296c",
    "297a",
    "297b",
    "297c",
    "298a",
    "298b",
    "299a",
    "299b",
    "299c"
   ]
  },
  {
   "id": "parabola_produccio",
   "titol": "Construir paràboles i problemes",
   "descripcio": "Vèrtex, talls amb els eixos, l'equació a partir del vèrtex, i problemes que es resolen muntant la funció.",
   "items": [
    "338a",
    "338b",
    "338c",
    "339a",
    "339b",
    "339c",
    "300a",
    "300b",
    "300c",
    "300d",
    "301a",
    "301b",
    "301c",
    "302a",
    "302b",
    "303a",
    "303b",
    "303c",
    "304"
   ]
  },
  {
   "id": "funcions_quadratiques",
   "titol": "Funcions quadràtiques",
   "descripcio": "Obertura i amplada de la paràbola, vèrtex, talls amb els eixos i eix de simetria.",
   "items": [
    "368a",
    "368b",
    "212a",
    "212b",
    "212c",
    "212d",
    "214a",
    "214b",
    "217a",
    "217b",
    "215",
    "216a",
    "216b",
    "216c",
    "216d"
   ]
  }
 ],
 "errors": {
  "AMPLADA_INVERTIDA": "Com més gran és $|a|$, més ESTRETA és la paràbola, no més ampla: el coeficient estira la corba cap amunt.",
  "COEFICIENT_A_MAL_CALCULAT": "El coeficient principal no encaixa: comprova'l imposant que la corba passi per un punt que en coneguis.",
  "EIX_SIMETRIA_MAL_CALCULAT": "L'eix de simetria és la recta vertical que passa pel vèrtex: $x=\\frac{-b}{2a}$. És una recta, no un número solt ni un punt.",
  "OBERTURA_INVERTIDA": "Com més gran és $|a|$, més ESTRETA és la paràbola, no més ampla: el coeficient estira la corba cap amunt.",
  "OBERTURA_I_AMPLADA_INVERTIDES": "Has invertit la relació entre el coeficient i la forma de la corba: compara dues paràboles concretes ($y=x^2$ i $y=3x^2$) i mira quina és més estreta.",
  "PARABOLA_AMB_A_ZERO": "Si $a=0$ no hi ha terme en $x^2$ i allò no és cap paràbola, sinó una recta.",
  "REPRESENTACIO_INNECESSARIA": "No cal dibuixar la gràfica: el signe del pendent ja diu si la funció creix o decreix, i el de $a$ si la paràbola s'obre amunt o avall.",
  "SIGNE_COEFICIENT_PRINCIPAL": "El signe de $a$ no encaixa amb la forma de la paràbola. Si $a>0$ s'obre cap amunt i el vèrtex és un mínim; si $a<0$, cap avall i és un màxim.",
  "SIGNE_FINAL": "El resultat té el signe canviat. Revisa quin dels dos termes és més gran en valor absolut.",
  "SIGNE_ORDENADA_INVERTIT": "L'ordenada a l'origen té el signe canviat: mira si la recta talla l'eix vertical per damunt o per sota del zero.",
  "SIGNE_PENDENT_INVERTIT": "El pendent conserva el signe amb què apareix a l'expressió: no cal canviar-l'hi en llegir-lo.",
  "TALL_ORIGEN_OBLIDAT": "T'has deixat el tall amb un dels eixos. Amb l'eix $Y$ n'hi ha sempre un i només un: el valor de la funció a $x=0$.",
  "TERMES_NO_REDUITS": "Falta reduir els termes semblants abans de treure conclusions: l'expressió encara es pot simplificar.",
  "TERME_INDEPENDENT_IGNORAT": "T'has deixat el terme independent. Encara que vagi sol, forma part de la funció.",
  "VALOR_C_CONFOS": "El terme independent $c$ és el valor de la funció a $x=0$, no cap altra cosa.",
  "VALOR_DUPLICAT": "Has comptat dues vegades el mateix valor. Quan dues condicions donen la mateixa solució, la solució és una de sola."
 },
 "items": [
  {
   "id": "368a",
   "ex": 368,
   "ap": "a",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Sense representar-la, digues si aquesta paràbola s'obre cap amunt o cap avall. Ho decideix el signe de $a$, el coeficient de $x^2$.",
   "enunciat": "$y=-2x^2+3$",
   "opcions": [
    "Cap amunt, perquè $a=2>0$",
    "Cap amunt, perquè $3>0$",
    "Cap avall, perquè $a=-2<0$",
    "No es pot saber sense dibuixar-la"
   ],
   "pistes": [
    "Quin nombre multiplica la $x^2$?",
    "Si és negatiu, la paràbola s'obre cap avall."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBjb2VmaWNpZW50IGRlICR4XjIkIMOpcyAkLTIkLCBhbWIgZWwgc2lnbmUgbWVueXMuIEVsIHNpZ25lIGRlICRhJCBubyBlbmNhaXhhIGFtYiBsYSBmb3JtYSBkZSBsYSBwYXLDoGJvbGEuIFNpICRhPjAkIHMnb2JyZSBjYXAgYW11bnQgaSBlbCB2w6hydGV4IMOpcyB1biBtw61uaW07IHNpICRhPDAkLCBjYXAgYXZhbGwgaSDDqXMgdW4gbcOgeGltLiIsICJFbCAkMyQgw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50OiBkaXUgb24gdGFsbGEgbCdlaXggJFkkLCBubyBjYXAgb24gcydvYnJlLiBNYW5hIGVsIGNvZWZpY2llbnQgZGUgJHheMiQsIHF1ZSDDqXMgJC0yJC4iLCAiIiwgIk5vIGNhbCBkaWJ1aXhhciBsYSBncsOgZmljYTogZWwgc2lnbmUgZGVsIHBlbmRlbnQgamEgZGl1IHNpIGxhIGZ1bmNpw7MgY3JlaXggbyBkZWNyZWl4LCBpIGVsIGRlICRhJCBzaSBsYSBwYXLDoGJvbGEgcydvYnJlIGFtdW50IG8gYXZhbGwuIl0sICJlcnIiOiBbIlNJR05FX0NPRUZJQ0lFTlRfUFJJTkNJUEFMIiwgIlZBTE9SX0NfQ09ORk9TIiwgIiIsICJSRVBSRVNFTlRBQ0lPX0lOTkVDRVNTQVJJQSJdLCAicmVzIjogWyIkYT0tMjwwJDogbGEgcGFyw6Bib2xhIHMnb2JyZSBjYXAgYXZhbGwuIl19"
  },
  {
   "id": "368b",
   "ex": 368,
   "ap": "b",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Sense representar-la, digues si aquesta paràbola s'obre cap amunt o cap avall. Ho decideix el signe de $a$, el coeficient de $x^2$.",
   "enunciat": "$y=x^2-5x$",
   "opcions": [
    "No és una paràbola, perquè no té terme independent",
    "Cap amunt, perquè $a=1>0$",
    "Cap avall, perquè $-5<0$",
    "No es pot saber sense dibuixar-la"
   ],
   "pistes": [
    "Quin nombre multiplica la $x^2$? Si no n'hi ha cap d'escrit, és un $1$.",
    "Si és positiu, la paràbola s'obre cap amunt."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbmEgcGFyw6Bib2xhIG5vbcOpcyBuZWNlc3NpdGEgcXVlIGhpIGhhZ2kgdGVybWUgZW4gJHheMiQgKCRhXFxuZTAkKS4gUXVlICRjJCB2YWxndWkgJDAkIHZvbCBkaXIgcXVlIHBhc3NhIHBlciBsJ29yaWdlbi4iLCAiIiwgIkVsICQtNSQgw6lzIGVsIGNvZWZpY2llbnQgZGUgbGEgJHgkLCBubyBlbCBkZSBsYSAkeF4yJC4gRGF2YW50IGRlIGxhICR4XjIkIG5vIGhpIGhhIHJlcyBlc2NyaXQ6IHZvbCBkaXIgJGE9MSQuIiwgIk5vIGNhbCBkaWJ1aXhhciBsYSBncsOgZmljYTogZWwgc2lnbmUgZGVsIHBlbmRlbnQgamEgZGl1IHNpIGxhIGZ1bmNpw7MgY3JlaXggbyBkZWNyZWl4LCBpIGVsIGRlICRhJCBzaSBsYSBwYXLDoGJvbGEgcydvYnJlIGFtdW50IG8gYXZhbGwuIl0sICJlcnIiOiBbIlBBUkFCT0xBX0FNQl9BX1pFUk8iLCAiIiwgIlNJR05FX0NPRUZJQ0lFTlRfUFJJTkNJUEFMIiwgIlJFUFJFU0VOVEFDSU9fSU5ORUNFU1NBUklBIl0sICJyZXMiOiBbIiRhPTE+MCQ6IGxhIHBhcsOgYm9sYSBzJ29icmUgY2FwIGFtdW50LiJdfQ=="
  },
  {
   "id": "212a",
   "ex": 212,
   "ap": "a",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Sense representar-la, indica si la paràbola és més oberta cap amunt o cap avall, i si és més estreta o més ampla que $y=x^2$.",
   "enunciat": "$y=2x^2$",
   "opcions": [
    "Oberta cap avall i més ampla que $y=x^2$.",
    "Oberta cap avall i més estreta que $y=x^2$.",
    "Oberta cap amunt i més ampla que $y=x^2$.",
    "Oberta cap amunt i més estreta que $y=x^2$."
   ],
   "pistes": [
    "El signe de $a$ (a $y=ax^2$) determina l'obertura; el valor absolut de $a$ comparat amb $1$ determina l'amplada.",
    "Aquí $a=2$. Per l'amplada, compara-la amb $y=x^2$ a $x=1$: $y=x^2$ val $1$ i aquesta, $2$. La que s'allunya més de pressa de l'eix $X$ és la més estreta."
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
   "dif": 2,
   "encapcalament": "Sense representar-la, indica si la paràbola és més oberta cap amunt o cap avall, i si és més estreta o més ampla que $y=x^2$.",
   "enunciat": "$y=\\dfrac{x^2}{2}$",
   "opcions": [
    "Oberta cap amunt i més ampla que $y=x^2$.",
    "Oberta cap avall i més estreta que $y=x^2$.",
    "Oberta cap avall i més ampla que $y=x^2$.",
    "Oberta cap amunt i més estreta que $y=x^2$."
   ],
   "pistes": [
    "El signe de $a$ (a $y=ax^2$) determina l'obertura; el valor absolut de $a$ comparat amb $1$ determina l'amplada.",
    "Aquí $a=\\dfrac{1}{2}$. Per l'amplada, compara-la amb $y=x^2$ a $x=1$: $y=x^2$ val $1$ i aquesta, $\\dfrac{1}{2}$. La que s'allunya més de pressa de l'eix $X$ és la més estreta."
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
   "dif": 2,
   "encapcalament": "Sense representar-la, indica si la paràbola és més oberta cap amunt o cap avall, i si és més estreta o més ampla que $y=x^2$.",
   "enunciat": "$y=-2x^2$",
   "opcions": [
    "Oberta cap avall i més ampla que $y=x^2$.",
    "Oberta cap amunt i més ampla que $y=x^2$.",
    "Oberta cap avall i més estreta que $y=x^2$.",
    "Oberta cap amunt i més estreta que $y=x^2$."
   ],
   "pistes": [
    "El signe de $a$ (a $y=ax^2$) determina l'obertura; el valor absolut de $a$ comparat amb $1$ determina l'amplada.",
    "Aquí $a=-2$. Per l'amplada, compara-la amb $y=x^2$ a $x=1$: $y=x^2$ val $1$ i aquesta, $-2$. La que s'allunya més de pressa de l'eix $X$ és la més estreta."
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
   "dif": 2,
   "encapcalament": "Sense representar-la, indica si la paràbola és més oberta cap amunt o cap avall, i si és més estreta o més ampla que $y=x^2$.",
   "enunciat": "$y=\\dfrac{x^2}{4}$",
   "opcions": [
    "Oberta cap avall i més estreta que $y=x^2$.",
    "Oberta cap amunt i més ampla que $y=x^2$.",
    "Oberta cap avall i més ampla que $y=x^2$.",
    "Oberta cap amunt i més estreta que $y=x^2$."
   ],
   "pistes": [
    "El signe de $a$ (a $y=ax^2$) determina l'obertura; el valor absolut de $a$ comparat amb $1$ determina l'amplada.",
    "Aquí $a=\\dfrac{1}{4}$. Per l'amplada, compara-la amb $y=x^2$ a $x=1$: $y=x^2$ val $1$ i aquesta, $\\dfrac{1}{4}$. La que s'allunya més de pressa de l'eix $X$ és la més estreta."
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
   "dif": 3,
   "encapcalament": "Calcula quin és el valor de la constant $c$ en l'expressió $y=x^2+c$ d'aquestes paràboles.",
   "enunciat": "Paràbola oberta cap amunt amb vèrtex en el punt $(0,\\ -1)$.",
   "opcions": [
    "$c=-1$",
    "$c=1$",
    "$c=0$",
    "$c=-2$"
   ],
   "pistes": [
    "El vèrtex d'una paràbola $y=x^2+c$ és sempre el punt $(0,c)$: la segona coordenada del vèrtex ÉS el valor de $c$.",
    "Comprova-ho substituint $x=0$ a $y=x^2+c$: quina $y$ surt? Ha de ser la del vèrtex, amb el seu signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdsOocnRleCBkZSAkeT14XjIrYyQgw6lzIHNlbXByZSBlbCBwdW50ICQoMCxjKSQ6IHNpIGVsIHbDqHJ0ZXggZG9uYXQgw6lzICQoMCxcXCAtMSkkLCBlbCB2YWxvciBkZSAkYyQgw6lzICQtMSQsIGFtYiBlbCBtYXRlaXggc2lnbmUuIiwgIiRjJCBubyDDqXMgJDAkOiBlbCB2w6hydGV4IGRlICR5PXheMiQgKHNlbnNlIHN1bWFyIHJlcykgc2VyaWEgJCgwLDApJCwgaSBhcXXDrSBlbCB2w6hydGV4IGRvbmF0IMOpcyAkKDAsXFwgLTEpJCwgbm8gbCdvcmlnZW4uIiwgIkVsIHbDqHJ0ZXggJCgwLFxcIC0xKSQgZG9uYSBkaXJlY3RhbWVudCAkYz0tMSQsIHNlbnNlIG5lY2Vzc2l0YXQgZGUgbXVsdGlwbGljYXItbG8gcGVyIGNhcCBhbHRyZSBub21icmUuIl0sICJlcnIiOiBbIiIsICJTSUdORV9GSU5BTCIsICJURVJNRV9JTkRFUEVOREVOVF9JR05PUkFUIiwgIlZBTE9SX0RVUExJQ0FUIl0sICJyZXMiOiBbIkNvbXBhcmFudCAkeT14XjIrYyQgYW1iICR5PXheMiQsIHN1bWFyICRjJCBkZXNwbGHDp2EgdG90YSBsYSBwYXLDoGJvbGEgJGMkIHVuaXRhdHMgYW11bnQgKHNpICRjPjAkKSBvIGF2YWxsIChzaSAkYzwwJCksIHNlbnNlIG1vdXJlLWxhIGhvcml0em9udGFsbWVudC4iLCAiUGVyIGFpeMOyIGVsIHbDqHJ0ZXggcGFzc2EgZGUgJCgwLDApJCBhICQoMCxjKSQ6IHNpIGVsIHbDqHJ0ZXggZG9uYXQgw6lzICQoMCxcXCAtMSkkLCBhbGVzaG9yZXMgJGM9LTEkLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Paràbola y = 1·x² + 0·x - 1.</title><line class=\"fig-graella\" x1=\"30.0\" y1=\"190.0\" x2=\"30.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"56.7\" y1=\"190.0\" x2=\"56.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"83.3\" y1=\"190.0\" x2=\"83.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"136.7\" y1=\"190.0\" x2=\"136.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"163.3\" y1=\"190.0\" x2=\"163.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"190.0\" y1=\"190.0\" x2=\"190.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"171.5\" x2=\"190.0\" y2=\"171.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"110.0\" x2=\"190.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"79.2\" x2=\"190.0\" y2=\"79.2\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"48.5\" x2=\"190.0\" y2=\"48.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"140.8\" x2=\"190.0\" y2=\"140.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"110.0\" y1=\"190.0\" x2=\"110.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 140.8 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 110.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"154.769\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"112\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"30.0\" y=\"202\">-3</text><text x=\"56.7\" y=\"202\">-2</text><text x=\"83.3\" y=\"202\">-1</text><text x=\"110.0\" y=\"202\">0</text><text x=\"136.7\" y=\"202\">1</text><text x=\"163.3\" y=\"202\">2</text><text x=\"190.0\" y=\"202\">3</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"175.0\">-1</text><text x=\"24.0\" y=\"144.3\">0</text><text x=\"24.0\" y=\"113.5\">1</text><text x=\"24.0\" y=\"82.7\">2</text><text x=\"24.0\" y=\"52.0\">3</text></g><path d=\"M 52.8 30.0 L 54.0 35.8 L 56.7 48.5 L 59.3 60.5 L 62.0 71.8 L 64.7 82.6 L 67.3 92.8 L 70.0 102.3 L 72.7 111.2 L 75.3 119.5 L 78.0 127.2 L 80.7 134.3 L 83.3 140.8 L 86.0 146.6 L 88.7 151.8 L 91.3 156.5 L 94.0 160.5 L 96.7 163.8 L 99.3 166.6 L 102.0 168.8 L 104.7 170.3 L 107.3 171.2 L 110.0 171.5 L 112.7 171.2 L 115.3 170.3 L 118.0 168.8 L 120.7 166.6 L 123.3 163.8 L 126.0 160.5 L 128.7 156.5 L 131.3 151.8 L 134.0 146.6 L 136.7 140.8 L 139.3 134.3 L 142.0 127.2 L 144.7 119.5 L 147.3 111.2 L 150.0 102.3 L 152.7 92.8 L 155.3 82.6 L 158.0 71.8 L 160.7 60.5 L 163.3 48.5 L 166.0 35.8 L 167.2 30.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/><circle cx=\"110.0\" cy=\"171.5\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/></svg>"
  },
  {
   "id": "214b",
   "ex": 214,
   "ap": "b",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula quin és el valor de la constant $c$ en l'expressió $y=x^2+c$ d'aquestes paràboles.",
   "enunciat": "Paràbola oberta cap amunt amb vèrtex en el punt $(0,\\ 2)$.",
   "opcions": [
    "$c=2$",
    "$c=0$",
    "$c=-2$",
    "$c=4$"
   ],
   "pistes": [
    "El vèrtex d'una paràbola $y=x^2+c$ és sempre el punt $(0,c)$: la segona coordenada del vèrtex ÉS el valor de $c$.",
    "Comprova-ho substituint $x=0$ a $y=x^2+c$: quina $y$ surt? Ha de ser la del vèrtex, amb el seu signe."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJGMkIG5vIMOpcyAkMCQ6IGVsIHbDqHJ0ZXggZGUgJHk9eF4yJCAoc2Vuc2Ugc3VtYXIgcmVzKSBzZXJpYSAkKDAsMCkkLCBpIGFxdcOtIGVsIHbDqHJ0ZXggZG9uYXQgw6lzICQoMCxcXCAyKSQsIG5vIGwnb3JpZ2VuLiIsICJFbCB2w6hydGV4IGRlICR5PXheMitjJCDDqXMgc2VtcHJlIGVsIHB1bnQgJCgwLGMpJDogc2kgZWwgdsOocnRleCBkb25hdCDDqXMgJCgwLFxcIDIpJCwgZWwgdmFsb3IgZGUgJGMkIMOpcyAkMiQsIGFtYiBlbCBtYXRlaXggc2lnbmUuIiwgIkVsIHbDqHJ0ZXggJCgwLFxcIDIpJCBkb25hIGRpcmVjdGFtZW50ICRjPTIkLCBzZW5zZSBuZWNlc3NpdGF0IGRlIG11bHRpcGxpY2FyLWxvIHBlciBjYXAgYWx0cmUgbm9tYnJlLiJdLCAiZXJyIjogWyIiLCAiVEVSTUVfSU5ERVBFTkRFTlRfSUdOT1JBVCIsICJTSUdORV9GSU5BTCIsICJWQUxPUl9EVVBMSUNBVCJdLCAicmVzIjogWyJDb21wYXJhbnQgJHk9eF4yK2MkIGFtYiAkeT14XjIkLCBzdW1hciAkYyQgZGVzcGxhw6dhIHRvdGEgbGEgcGFyw6Bib2xhICRjJCB1bml0YXRzIGFtdW50IChzaSAkYz4wJCkgbyBhdmFsbCAoc2kgJGM8MCQpLCBzZW5zZSBtb3VyZS1sYSBob3JpdHpvbnRhbG1lbnQuIiwgIlBlciBhaXjDsiBlbCB2w6hydGV4IHBhc3NhIGRlICQoMCwwKSQgYSAkKDAsYykkOiBzaSBlbCB2w6hydGV4IGRvbmF0IMOpcyAkKDAsXFwgMikkLCBhbGVzaG9yZXMgJGM9MiQuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Paràbola y = 1·x² + 0·x + 2.</title><line class=\"fig-graella\" x1=\"30.0\" y1=\"190.0\" x2=\"30.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"56.7\" y1=\"190.0\" x2=\"56.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"83.3\" y1=\"190.0\" x2=\"83.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"136.7\" y1=\"190.0\" x2=\"136.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"163.3\" y1=\"190.0\" x2=\"163.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"190.0\" y1=\"190.0\" x2=\"190.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"154.4\" x2=\"190.0\" y2=\"154.4\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"132.2\" x2=\"190.0\" y2=\"132.2\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"110.0\" x2=\"190.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"87.8\" x2=\"190.0\" y2=\"87.8\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"65.6\" x2=\"190.0\" y2=\"65.6\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"43.3\" x2=\"190.0\" y2=\"43.3\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"176.7\" x2=\"190.0\" y2=\"176.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"110.0\" y1=\"190.0\" x2=\"110.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 176.7 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 110.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"190.667\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"112\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"30.0\" y=\"202\">-3</text><text x=\"56.7\" y=\"202\">-2</text><text x=\"83.3\" y=\"202\">-1</text><text x=\"110.0\" y=\"202\">0</text><text x=\"136.7\" y=\"202\">1</text><text x=\"163.3\" y=\"202\">2</text><text x=\"190.0\" y=\"202\">3</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"180.2\">0</text><text x=\"24.0\" y=\"157.9\">1</text><text x=\"24.0\" y=\"135.7\">2</text><text x=\"24.0\" y=\"113.5\">3</text><text x=\"24.0\" y=\"91.3\">4</text><text x=\"24.0\" y=\"69.1\">5</text><text x=\"24.0\" y=\"46.8\">6</text></g><path d=\"M 52.8 30.0 L 54.0 34.2 L 56.7 43.3 L 59.3 52.0 L 62.0 60.2 L 64.7 68.0 L 67.3 75.3 L 70.0 82.2 L 72.7 88.7 L 75.3 94.7 L 78.0 100.2 L 80.7 105.3 L 83.3 110.0 L 86.0 114.2 L 88.7 118.0 L 91.3 121.3 L 94.0 124.2 L 96.7 126.7 L 99.3 128.7 L 102.0 130.2 L 104.7 131.3 L 107.3 132.0 L 110.0 132.2 L 112.7 132.0 L 115.3 131.3 L 118.0 130.2 L 120.7 128.7 L 123.3 126.7 L 126.0 124.2 L 128.7 121.3 L 131.3 118.0 L 134.0 114.2 L 136.7 110.0 L 139.3 105.3 L 142.0 100.2 L 144.7 94.7 L 147.3 88.7 L 150.0 82.2 L 152.7 75.3 L 155.3 68.0 L 158.0 60.2 L 160.7 52.0 L 163.3 43.3 L 166.0 34.2 L 167.2 30.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/><circle cx=\"110.0\" cy=\"132.2\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/></svg>"
  },
  {
   "id": "217a",
   "ex": 217,
   "ap": "a",
   "bloc": "funcions_quadratiques",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Analitza com serà la gràfica d'aquestes funcions polinòmiques sense representar-les.",
   "enunciat": "$y=x^2-3x^2+4$",
   "opcions": [
    "Reduint termes semblants, $x^2-3x^2=-2x^2$: és la paràbola $y=-2x^2+4$, oberta cap avall, més estreta que $y=x^2$, amb vèrtex a $(0,4)$.",
    "Reduint termes semblants, $x^2-3x^2=-2x^2$: és la paràbola $y=-2x^2+4$, oberta cap avall, més AMPLA que $y=x^2$, amb vèrtex a $(0,4)$.",
    "Reduint termes semblants, $x^2-3x^2=2x^2$: és la paràbola $y=2x^2+4$, oberta cap amunt, més estreta que $y=x^2$, amb vèrtex a $(0,4)$.",
    "És una paràbola $y=-2x^2+4x$: oberta cap avall, amb vèrtex fora de l'eix $Y$."
   ],
   "pistes": [
    "Abans de decidir de quin tipus de funció es tracta, redueix els termes semblants: $x^2$ i $-3x^2$ són tots dos termes en $x^2$.",
    "Un cop reduït, mira el coeficient de $x^2$: el signe diu cap on obre i, comparat amb $1$, si és més estreta o més ampla que $y=x^2$. Sense terme en $x$, el vèrtex és a l'eix $Y$."
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
   "dif": 3,
   "encapcalament": "Analitza com serà la gràfica d'aquestes funcions polinòmiques sense representar-les.",
   "enunciat": "$y=-x-3$",
   "opcions": [
    "És una recta amb pendent $-1$, però creixent, i ordenada a l'origen $-3$.",
    "No té cap terme en $x^2$: és una recta (no una paràbola), amb pendent $-1$ (decreixent) i ordenada a l'origen $-3$.",
    "És una recta amb pendent $-1$ (decreixent) i ordenada a l'origen $3$.",
    "No té cap terme en $x^2$ escrit, però és una paràbola amb $a=0$: oberta cap avall, decreixent."
   ],
   "pistes": [
    "Si l'expressió no té cap terme en $x^2$, no és una paràbola: és una recta.",
    "Llavors mira el pendent (el número que multiplica la $x$, amb el seu signe) i l'ordenada a l'origen (el terme sense $x$, també amb el seu signe)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50ICQtMSQgw6lzIG5lZ2F0aXU6IGxhIHJlY3RhIMOpcyBkZWNyZWl4ZW50LCBubyBjcmVpeGVudC4iLCAiIiwgIkVsIHRlcm1lIGluZGVwZW5kZW50IGRlICQteC0zJCDDqXMgJC0zJCAobmVnYXRpdSksIG5vICQzJDogbGEgcmVjdGEgdGFsbGEgbCdlaXggJFkkIGVuICQoMCwtMykkLiIsICJTaSBlbCBjb2VmaWNpZW50IGRlICR4XjIkIMOpcyAkMCQsIGwnZXhwcmVzc2nDsyBkZWl4YSBkZSBzZXIgdW5hIHBhcsOgYm9sYTogc2Vuc2UgdGVybWUgZW4gJHheMiQsIMOpcyB1bmEgcmVjdGEgKGZ1bmNpw7MgYWbDrSksIG5vIHVuYSBwYXLDoGJvbGEgZXh0cmVtYW1lbnQgb2JlcnRhLiJdLCAiZXJyIjogWyJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIiIsICJTSUdORV9PUkRFTkFEQV9JTlZFUlRJVCIsICJQQVJBQk9MQV9BTUJfQV9aRVJPIl0sICJyZXMiOiBbIiR5PS14LTMkIG5vIHTDqSB0ZXJtZSBlbiAkeF4yJDogw6lzIHVuYSBmdW5jacOzIGFmw60gKHJlY3RhKSwgbm8gdW5hIHBhcsOgYm9sYS4iLCAiRWwgcGVuZGVudCDDqXMgJC0xJCAobmVnYXRpdSwgcGVyIHRhbnQgZGVjcmVpeGVudCkgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICQtMyQuIl19"
  },
  {
   "id": "215",
   "ex": 215,
   "ap": "",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Calcula l'expressió algebraica de la paràbola.",
   "enunciat": "Paràbola oberta cap amunt, amb vèrtex en el punt $(0,1)$, que passa pel punt $(1,2)$.",
   "opcions": [
    "$y=2x^2+1$",
    "$y=x^2-1$",
    "$y=x^2+2$",
    "$y=x^2+1$"
   ],
   "pistes": [
    "El vèrtex $(0,c)$ ja dona directament el valor de $c$; substitueix l'altre punt a $y=ax^2+c$ per trobar $a$.",
    "Amb $c=1$, substitueix $x=1$ i $y=2$ a $y=ax^2+1$ i aïlla $a$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJTdWJzdGl0dWludCBlbCBwdW50ICQoMSwyKSQgYSAkeT1heF4yKzEkOiAkMj1hXFxjZG90IDFeMisxJCwgcXVlIGRvbmEgJGE9MSQsIG5vICRhPTIkLiIsICJFbCB2w6hydGV4ICQoMCwxKSQgdMOpIGxhIHNlZ29uYSBjb29yZGVuYWRhIHBvc2l0aXZhOiAkYz0xJCwgbm8gJGM9LTEkLiIsICJFbCB2w6hydGV4ICQoMCwxKSQgamEgZGl1IGRpcmVjdGFtZW50IHF1ZSAkYz0xJDogZWwgJDIkIMOpcyBsYSAkeSQgZGVsIHB1bnQgJCgxLDIpJCwgbm8gZWwgdmFsb3IgZGUgJGMkLiIsICIiXSwgImVyciI6IFsiQ09FRklDSUVOVF9BX01BTF9DQUxDVUxBVCIsICJTSUdORV9GSU5BTCIsICJWQUxPUl9DX0NPTkZPUyIsICIiXSwgInJlcyI6IFsiRWwgdsOocnRleCAkKDAsMSkkIGRvbmEgJGM9MSQ6IGwnZXhwcmVzc2nDsyDDqXMgJHk9YXheMisxJC4iLCAiU3Vic3RpdHVpbnQgZWwgcHVudCAkKDEsMikkOiAkMj1hXFxjZG90IDFeMisxJCwgcGVyIHRhbnQgJGE9MSQuIiwgIkwnZXhwcmVzc2nDsyDDqXMgJHk9eF4yKzEkLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Paràbola y = 1·x² + 0·x + 1.</title><line class=\"fig-graella\" x1=\"30.0\" y1=\"190.0\" x2=\"30.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"56.7\" y1=\"190.0\" x2=\"56.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"83.3\" y1=\"190.0\" x2=\"83.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"136.7\" y1=\"190.0\" x2=\"136.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"163.3\" y1=\"190.0\" x2=\"163.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"190.0\" y1=\"190.0\" x2=\"190.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"148.7\" x2=\"190.0\" y2=\"148.7\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"122.9\" x2=\"190.0\" y2=\"122.9\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"97.1\" x2=\"190.0\" y2=\"97.1\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"71.3\" x2=\"190.0\" y2=\"71.3\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"45.5\" x2=\"190.0\" y2=\"45.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"174.5\" x2=\"190.0\" y2=\"174.5\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"110.0\" y1=\"190.0\" x2=\"110.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 174.5 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 110.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"188.516\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"112\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"30.0\" y=\"202\">-3</text><text x=\"56.7\" y=\"202\">-2</text><text x=\"83.3\" y=\"202\">-1</text><text x=\"110.0\" y=\"202\">0</text><text x=\"136.7\" y=\"202\">1</text><text x=\"163.3\" y=\"202\">2</text><text x=\"190.0\" y=\"202\">3</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"178.0\">0</text><text x=\"24.0\" y=\"152.2\">1</text><text x=\"24.0\" y=\"126.4\">2</text><text x=\"24.0\" y=\"100.6\">3</text><text x=\"24.0\" y=\"74.8\">4</text><text x=\"24.0\" y=\"49.0\">5</text></g><path d=\"M 52.8 30.0 L 54.0 34.9 L 56.7 45.5 L 59.3 55.5 L 62.0 65.1 L 64.7 74.1 L 67.3 82.6 L 70.0 90.6 L 72.7 98.1 L 75.3 105.1 L 78.0 111.5 L 80.7 117.5 L 83.3 122.9 L 86.0 127.8 L 88.7 132.2 L 91.3 136.1 L 94.0 139.4 L 96.7 142.3 L 99.3 144.6 L 102.0 146.4 L 104.7 147.7 L 107.3 148.5 L 110.0 148.7 L 112.7 148.5 L 115.3 147.7 L 118.0 146.4 L 120.7 144.6 L 123.3 142.3 L 126.0 139.4 L 128.7 136.1 L 131.3 132.2 L 134.0 127.8 L 136.7 122.9 L 139.3 117.5 L 142.0 111.5 L 144.7 105.1 L 147.3 98.1 L 150.0 90.6 L 152.7 82.6 L 155.3 74.1 L 158.0 65.1 L 160.7 55.5 L 163.3 45.5 L 166.0 34.9 L 167.2 30.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/><circle cx=\"110.0\" cy=\"148.7\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/></svg>"
  },
  {
   "id": "216a",
   "ex": 216,
   "ap": "a",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Troba els talls amb els eixos, el vèrtex i l'equació de l'eix de simetria d'aquestes paràboles.",
   "enunciat": "$y=-x^2-3x$",
   "opcions": [
    "$\\text{talls: }(0,\\ 0),\\ (-3,\\ 0);\\ \\text{eix }x=-3;\\ \\text{vèrtex }(-3,\\ 0)$",
    "$\\text{talls: }(0,\\ 0),\\ (-3,\\ 0);\\ \\text{eix }x=-\\dfrac{3}{2};\\ \\text{vèrtex }\\left(-\\dfrac{3}{2},\\ -\\dfrac{9}{4}\\right)$",
    "$\\text{talls: }(-3,\\ 0);\\ \\text{eix }x=-\\dfrac{3}{2};\\ \\text{vèrtex }\\left(-\\dfrac{3}{2},\\ \\dfrac{9}{4}\\right)$",
    "$\\text{talls: }(0,\\ 0),\\ (-3,\\ 0);\\ \\text{eix }x=-\\dfrac{3}{2};\\ \\text{vèrtex }\\left(-\\dfrac{3}{2},\\ \\dfrac{9}{4}\\right)$"
   ],
   "pistes": [
    "Els talls amb l'eix $X$ són les solucions de l'equació de segon grau (traient factor comú $x$, ja que no hi ha terme independent); l'eix de simetria passa pel punt mig entre aquestes dues solucions.",
    "Traient factor comú, $-x^2-3x=x(-x-3)$: iguala cada factor a zero. Després, substitueix la $x$ de l'eix a l'expressió per trobar la $y$ del vèrtex."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgUFVOVCBNSUcgZW50cmUgbGVzIGR1ZXMgYXJyZWxzLCBubyBwZXIgdW5hIGRlIGxlcyBhcnJlbHM6IGNvbSBxdWUgdW5hIGFycmVsIMOpcyAkMCQsIGVsIHB1bnQgbWlnIMOpcyBsYSBtZWl0YXQgZGUgbCdhbHRyYSBhcnJlbC4iLCAiTGEgJHkkIGRlbCB2w6hydGV4IHMnb2J0w6kgc3Vic3RpdHVpbnQgbGEgJHgkIGRlbCB2w6hydGV4IGEgbCdleHByZXNzacOzIG9yaWdpbmFsOiBjYWwgY2FsY3VsYXItbGEsIG5vIG5vbcOpcyBjYW52aWFyLW5lIGVsIHNpZ25lLiIsICJDb20gcXVlIGwnZXhwcmVzc2nDsyBubyB0w6kgdGVybWUgaW5kZXBlbmRlbnQgKG5vIGhpIGhhICQrYyQpLCBsYSBwYXLDoGJvbGEgc2VtcHJlIHBhc3NhIHBlciBsJ29yaWdlbjogJCgwLDApJCB0YW1iw6kgw6lzIHVuIHRhbGwgYW1iIGVscyBlaXhvcywgbm8gbm9tw6lzIGwnYWx0cmEgYXJyZWwuIiwgIiJdLCAiZXJyIjogWyJFSVhfU0lNRVRSSUFfTUFMX0NBTENVTEFUIiwgIlNJR05FX0ZJTkFMIiwgIlRBTExfT1JJR0VOX09CTElEQVQiLCAiIl0sICJyZXMiOiBbIlRyYWllbnQgZmFjdG9yIGNvbcO6OiAkLXheMi0zeD14KC14LTMpJCwgcXVlIGRvbmEgJHg9MCQgaSAkeD0tMyQuIiwgIlRhbGxzIGFtYiBlbHMgZWl4b3M6ICQoMCxcXCAwKSQgaSAkKC0zLFxcIDApJC4iLCAiTCdlaXggZGUgc2ltZXRyaWEgcGFzc2EgcGVsIHB1bnQgbWlnIGRlIGxlcyBhcnJlbHM6ICR4PS1cXGRmcmFjezN9ezJ9JC4iLCAiRWwgdsOocnRleCDDqXMgJFxcbGVmdCgtXFxkZnJhY3szfXsyfSxcXCBcXGRmcmFjezl9ezR9XFxyaWdodCkkLCBzdWJzdGl0dWludCAkeD0tXFxkZnJhY3szfXsyfSQgYSBsJ2V4cHJlc3Npw7MuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Paràbola y = -1·x² - 3·x + 0.</title><line class=\"fig-graella\" x1=\"30.0\" y1=\"190.0\" x2=\"30.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"65.6\" y1=\"190.0\" x2=\"65.6\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"101.1\" y1=\"190.0\" x2=\"101.1\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"172.2\" y1=\"190.0\" x2=\"172.2\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"188.6\" x2=\"190.0\" y2=\"188.6\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"161.3\" x2=\"190.0\" y2=\"161.3\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"133.9\" x2=\"190.0\" y2=\"133.9\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"106.6\" x2=\"190.0\" y2=\"106.6\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"51.9\" x2=\"190.0\" y2=\"51.9\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"79.2\" x2=\"190.0\" y2=\"79.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"136.7\" y1=\"190.0\" x2=\"136.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 79.2 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 136.7 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"93.2308\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"138.667\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"30.0\" y=\"202\">-6</text><text x=\"65.6\" y=\"202\">-4</text><text x=\"101.1\" y=\"202\">-2</text><text x=\"136.7\" y=\"202\">0</text><text x=\"172.2\" y=\"202\">2</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"164.8\">-6</text><text x=\"24.0\" y=\"137.4\">-4</text><text x=\"24.0\" y=\"110.1\">-2</text><text x=\"24.0\" y=\"82.7\">0</text><text x=\"24.0\" y=\"55.4\">2</text></g><path d=\"M 52.8 190.0 L 54.0 184.2 L 56.7 171.5 L 59.3 159.5 L 62.0 148.2 L 64.7 137.4 L 67.3 127.2 L 70.0 117.7 L 72.7 108.8 L 75.3 100.5 L 78.0 92.8 L 80.7 85.7 L 83.3 79.2 L 86.0 73.4 L 88.7 68.2 L 91.3 63.5 L 94.0 59.5 L 96.7 56.2 L 99.3 53.4 L 102.0 51.2 L 104.7 49.7 L 107.3 48.8 L 110.0 48.5 L 112.7 48.8 L 115.3 49.7 L 118.0 51.2 L 120.7 53.4 L 123.3 56.2 L 126.0 59.5 L 128.7 63.5 L 131.3 68.2 L 134.0 73.4 L 136.7 79.2 L 139.3 85.7 L 142.0 92.8 L 144.7 100.5 L 147.3 108.8 L 150.0 117.7 L 152.7 127.2 L 155.3 137.4 L 158.0 148.2 L 160.7 159.5 L 163.3 171.5 L 166.0 184.2 L 167.2 190.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/></svg>"
  },
  {
   "id": "216b",
   "ex": 216,
   "ap": "b",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Troba els talls amb els eixos, el vèrtex i l'equació de l'eix de simetria d'aquestes paràboles.",
   "enunciat": "$y=x^2-\\dfrac23x$",
   "opcions": [
    "$\\text{talls: }(0,\\ 0),\\ \\left(\\dfrac{2}{3},\\ 0\\right);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }\\left(\\dfrac{1}{3},\\ \\dfrac{1}{9}\\right)$",
    "$\\text{talls: }(0,\\ 0),\\ \\left(\\dfrac{2}{3},\\ 0\\right);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }\\left(\\dfrac{1}{3},\\ -\\dfrac{1}{9}\\right)$",
    "$\\text{talls: }(0,\\ 0),\\ \\left(\\dfrac{2}{3},\\ 0\\right);\\ \\text{eix }x=\\dfrac{2}{3};\\ \\text{vèrtex }\\left(\\dfrac{2}{3},\\ 0\\right)$",
    "$\\text{talls: }\\left(\\dfrac{2}{3},\\ 0\\right);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }\\left(\\dfrac{1}{3},\\ -\\dfrac{1}{9}\\right)$"
   ],
   "pistes": [
    "Els talls amb l'eix $X$ són les solucions de l'equació de segon grau (traient factor comú $x$, ja que no hi ha terme independent); l'eix de simetria passa pel punt mig entre aquestes dues solucions.",
    "Traient factor comú, $x^2-\\dfrac23x=x(x-\\dfrac{2}{3})$: iguala cada factor a zero. Després, substitueix la $x$ de l'eix a l'expressió per trobar la $y$ del vèrtex."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMYSAkeSQgZGVsIHbDqHJ0ZXggcydvYnTDqSBzdWJzdGl0dWludCBsYSAkeCQgZGVsIHbDqHJ0ZXggYSBsJ2V4cHJlc3Npw7Mgb3JpZ2luYWw6IGNhbCBjYWxjdWxhci1sYSwgbm8gbm9tw6lzIGNhbnZpYXItbmUgZWwgc2lnbmUuIiwgIiIsICJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgUFVOVCBNSUcgZW50cmUgbGVzIGR1ZXMgYXJyZWxzLCBubyBwZXIgdW5hIGRlIGxlcyBhcnJlbHM6IGNvbSBxdWUgdW5hIGFycmVsIMOpcyAkMCQsIGVsIHB1bnQgbWlnIMOpcyBsYSBtZWl0YXQgZGUgbCdhbHRyYSBhcnJlbC4iLCAiQ29tIHF1ZSBsJ2V4cHJlc3Npw7Mgbm8gdMOpIHRlcm1lIGluZGVwZW5kZW50IChubyBoaSBoYSAkK2MkKSwgbGEgcGFyw6Bib2xhIHNlbXByZSBwYXNzYSBwZXIgbCdvcmlnZW46ICQoMCwwKSQgdGFtYsOpIMOpcyB1biB0YWxsIGFtYiBlbHMgZWl4b3MsIG5vIG5vbcOpcyBsJ2FsdHJhIGFycmVsLiJdLCAiZXJyIjogWyJTSUdORV9GSU5BTCIsICIiLCAiRUlYX1NJTUVUUklBX01BTF9DQUxDVUxBVCIsICJUQUxMX09SSUdFTl9PQkxJREFUIl0sICJyZXMiOiBbIlRyYWllbnQgZmFjdG9yIGNvbcO6OiAkeF4yLVxcZGZyYWMyM3g9eCh4LVxcZGZyYWN7Mn17M30pJCwgcXVlIGRvbmEgJHg9MCQgaSAkeD1cXGRmcmFjezJ9ezN9JC4iLCAiVGFsbHMgYW1iIGVscyBlaXhvczogJCgwLFxcIDApJCBpICRcXGxlZnQoXFxkZnJhY3syfXszfSxcXCAwXFxyaWdodCkkLiIsICJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgcHVudCBtaWcgZGUgbGVzIGFycmVsczogJHg9XFxkZnJhY3sxfXszfSQuIiwgIkVsIHbDqHJ0ZXggw6lzICRcXGxlZnQoXFxkZnJhY3sxfXszfSxcXCAtXFxkZnJhY3sxfXs5fVxccmlnaHQpJCwgc3Vic3RpdHVpbnQgJHg9XFxkZnJhY3sxfXszfSQgYSBsJ2V4cHJlc3Npw7MuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Paràbola y = 1·x² - 0,666667·x + 0.</title><line class=\"fig-graella\" x1=\"30.0\" y1=\"190.0\" x2=\"30.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"54.0\" y1=\"190.0\" x2=\"54.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"78.0\" y1=\"190.0\" x2=\"78.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"126.0\" y1=\"190.0\" x2=\"126.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"150.0\" y1=\"190.0\" x2=\"150.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"174.0\" y1=\"190.0\" x2=\"174.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"175.7\" x2=\"190.0\" y2=\"175.7\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"150.0\" x2=\"190.0\" y2=\"150.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"98.6\" x2=\"190.0\" y2=\"98.6\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"72.9\" x2=\"190.0\" y2=\"72.9\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"47.1\" x2=\"190.0\" y2=\"47.1\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"124.3\" x2=\"190.0\" y2=\"124.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"102.0\" y1=\"190.0\" x2=\"102.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 124.3 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 102.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"138.286\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"104\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"30.0\" y=\"202\">-3</text><text x=\"54.0\" y=\"202\">-2</text><text x=\"78.0\" y=\"202\">-1</text><text x=\"102.0\" y=\"202\">0</text><text x=\"126.0\" y=\"202\">1</text><text x=\"150.0\" y=\"202\">2</text><text x=\"174.0\" y=\"202\">3</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"27.6\" y=\"179.2\">-0,4</text><text x=\"27.6\" y=\"153.5\">-0,2</text><text x=\"27.6\" y=\"127.8\">0</text><text x=\"27.6\" y=\"102.1\">0,2</text><text x=\"27.6\" y=\"76.4\">0,4</text><text x=\"27.6\" y=\"50.6\">0,6</text></g><path d=\"M 88.0 30.0 L 88.7 37.0 L 91.3 60.8 L 94.0 81.4 L 96.7 98.9 L 99.3 113.2 L 102.0 124.3 L 104.7 132.2 L 107.3 137.0 L 110.0 138.6 L 112.7 137.0 L 115.3 132.2 L 118.0 124.3 L 120.7 113.2 L 123.3 98.9 L 126.0 81.4 L 128.7 60.8 L 131.3 37.0 L 132.0 30.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/></svg>"
  },
  {
   "id": "216c",
   "ex": 216,
   "ap": "c",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Troba els talls amb els eixos, el vèrtex i l'equació de l'eix de simetria d'aquestes paràboles.",
   "enunciat": "$y=\\dfrac32x^2-x$",
   "opcions": [
    "$\\text{talls: }(0,\\ 0),\\ \\left(\\dfrac{2}{3},\\ 0\\right);\\ \\text{eix }x=\\dfrac{2}{3};\\ \\text{vèrtex }\\left(\\dfrac{2}{3},\\ 0\\right)$",
    "$\\text{talls: }\\left(\\dfrac{2}{3},\\ 0\\right);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }\\left(\\dfrac{1}{3},\\ -\\dfrac{1}{6}\\right)$",
    "$\\text{talls: }(0,\\ 0),\\ \\left(\\dfrac{2}{3},\\ 0\\right);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }\\left(\\dfrac{1}{3},\\ \\dfrac{1}{6}\\right)$",
    "$\\text{talls: }(0,\\ 0),\\ \\left(\\dfrac{2}{3},\\ 0\\right);\\ \\text{eix }x=\\dfrac{1}{3};\\ \\text{vèrtex }\\left(\\dfrac{1}{3},\\ -\\dfrac{1}{6}\\right)$"
   ],
   "pistes": [
    "Els talls amb l'eix $X$ són les solucions de l'equació de segon grau (traient factor comú $x$, ja que no hi ha terme independent); l'eix de simetria passa pel punt mig entre aquestes dues solucions.",
    "Traient factor comú, $\\dfrac32x^2-x=x(\\dfrac{3}{2}x-1)$: iguala cada factor a zero. Després, substitueix la $x$ de l'eix a l'expressió per trobar la $y$ del vèrtex."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgUFVOVCBNSUcgZW50cmUgbGVzIGR1ZXMgYXJyZWxzLCBubyBwZXIgdW5hIGRlIGxlcyBhcnJlbHM6IGNvbSBxdWUgdW5hIGFycmVsIMOpcyAkMCQsIGVsIHB1bnQgbWlnIMOpcyBsYSBtZWl0YXQgZGUgbCdhbHRyYSBhcnJlbC4iLCAiQ29tIHF1ZSBsJ2V4cHJlc3Npw7Mgbm8gdMOpIHRlcm1lIGluZGVwZW5kZW50IChubyBoaSBoYSAkK2MkKSwgbGEgcGFyw6Bib2xhIHNlbXByZSBwYXNzYSBwZXIgbCdvcmlnZW46ICQoMCwwKSQgdGFtYsOpIMOpcyB1biB0YWxsIGFtYiBlbHMgZWl4b3MsIG5vIG5vbcOpcyBsJ2FsdHJhIGFycmVsLiIsICJMYSAkeSQgZGVsIHbDqHJ0ZXggcydvYnTDqSBzdWJzdGl0dWludCBsYSAkeCQgZGVsIHbDqHJ0ZXggYSBsJ2V4cHJlc3Npw7Mgb3JpZ2luYWw6IGNhbCBjYWxjdWxhci1sYSwgbm8gbm9tw6lzIGNhbnZpYXItbmUgZWwgc2lnbmUuIiwgIiJdLCAiZXJyIjogWyJFSVhfU0lNRVRSSUFfTUFMX0NBTENVTEFUIiwgIlRBTExfT1JJR0VOX09CTElEQVQiLCAiU0lHTkVfRklOQUwiLCAiIl0sICJyZXMiOiBbIlRyYWllbnQgZmFjdG9yIGNvbcO6OiAkXFxkZnJhYzMyeF4yLXg9eChcXGRmcmFjezN9ezJ9eC0xKSQsIHF1ZSBkb25hICR4PTAkIGkgJHg9XFxkZnJhY3syfXszfSQuIiwgIlRhbGxzIGFtYiBlbHMgZWl4b3M6ICQoMCxcXCAwKSQgaSAkXFxsZWZ0KFxcZGZyYWN7Mn17M30sXFwgMFxccmlnaHQpJC4iLCAiTCdlaXggZGUgc2ltZXRyaWEgcGFzc2EgcGVsIHB1bnQgbWlnIGRlIGxlcyBhcnJlbHM6ICR4PVxcZGZyYWN7MX17M30kLiIsICJFbCB2w6hydGV4IMOpcyAkXFxsZWZ0KFxcZGZyYWN7MX17M30sXFwgLVxcZGZyYWN7MX17Nn1cXHJpZ2h0KSQsIHN1YnN0aXR1aW50ICR4PVxcZGZyYWN7MX17M30kIGEgbCdleHByZXNzacOzLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Paràbola y = 1,5·x² - 1·x + 0.</title><line class=\"fig-graella\" x1=\"30.0\" y1=\"190.0\" x2=\"30.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"54.0\" y1=\"190.0\" x2=\"54.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"78.0\" y1=\"190.0\" x2=\"78.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"126.0\" y1=\"190.0\" x2=\"126.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"150.0\" y1=\"190.0\" x2=\"150.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"174.0\" y1=\"190.0\" x2=\"174.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"171.8\" x2=\"190.0\" y2=\"171.8\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"150.0\" x2=\"190.0\" y2=\"150.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"106.4\" x2=\"190.0\" y2=\"106.4\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"84.5\" x2=\"190.0\" y2=\"84.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"62.7\" x2=\"190.0\" y2=\"62.7\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"40.9\" x2=\"190.0\" y2=\"40.9\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"128.2\" x2=\"190.0\" y2=\"128.2\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"102.0\" y1=\"190.0\" x2=\"102.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 128.2 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 102.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"142.182\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"104\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"30.0\" y=\"202\">-3</text><text x=\"54.0\" y=\"202\">-2</text><text x=\"78.0\" y=\"202\">-1</text><text x=\"102.0\" y=\"202\">0</text><text x=\"126.0\" y=\"202\">1</text><text x=\"150.0\" y=\"202\">2</text><text x=\"174.0\" y=\"202\">3</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"27.6\" y=\"175.3\">-0,4</text><text x=\"27.6\" y=\"153.5\">-0,2</text><text x=\"27.6\" y=\"131.7\">0</text><text x=\"27.6\" y=\"109.9\">0,2</text><text x=\"27.6\" y=\"88.0\">0,4</text><text x=\"27.6\" y=\"66.2\">0,6</text><text x=\"27.6\" y=\"44.4\">0,8</text></g><path d=\"M 89.8 30.0 L 91.3 47.4 L 94.0 73.6 L 96.7 95.9 L 99.3 114.0 L 102.0 128.2 L 104.7 138.3 L 107.3 144.3 L 110.0 146.4 L 112.7 144.3 L 115.3 138.3 L 118.0 128.2 L 120.7 114.0 L 123.3 95.9 L 126.0 73.6 L 128.7 47.4 L 130.2 30.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/></svg>"
  },
  {
   "id": "216d",
   "ex": 216,
   "ap": "d",
   "bloc": "funcions_quadratiques",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Troba els talls amb els eixos, el vèrtex i l'equació de l'eix de simetria d'aquestes paràboles.",
   "enunciat": "$y=x^2+2x$",
   "opcions": [
    "$\\text{talls: }(0,\\ 0),\\ (-2,\\ 0);\\ \\text{eix }x=-2;\\ \\text{vèrtex }(-2,\\ 0)$",
    "$\\text{talls: }(-2,\\ 0);\\ \\text{eix }x=-1;\\ \\text{vèrtex }(-1,\\ -1)$",
    "$\\text{talls: }(0,\\ 0),\\ (-2,\\ 0);\\ \\text{eix }x=-1;\\ \\text{vèrtex }(-1,\\ -1)$",
    "$\\text{talls: }(0,\\ 0),\\ (-2,\\ 0);\\ \\text{eix }x=-1;\\ \\text{vèrtex }(-1,\\ 1)$"
   ],
   "pistes": [
    "Els talls amb l'eix $X$ són les solucions de l'equació de segon grau (traient factor comú $x$, ja que no hi ha terme independent); l'eix de simetria passa pel punt mig entre aquestes dues solucions.",
    "Traient factor comú, $x^2+2x=x(x+2)$: iguala cada factor a zero. Després, substitueix la $x$ de l'eix a l'expressió per trobar la $y$ del vèrtex."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2VpeCBkZSBzaW1ldHJpYSBwYXNzYSBwZWwgUFVOVCBNSUcgZW50cmUgbGVzIGR1ZXMgYXJyZWxzLCBubyBwZXIgdW5hIGRlIGxlcyBhcnJlbHM6IGNvbSBxdWUgdW5hIGFycmVsIMOpcyAkMCQsIGVsIHB1bnQgbWlnIMOpcyBsYSBtZWl0YXQgZGUgbCdhbHRyYSBhcnJlbC4iLCAiQ29tIHF1ZSBsJ2V4cHJlc3Npw7Mgbm8gdMOpIHRlcm1lIGluZGVwZW5kZW50IChubyBoaSBoYSAkK2MkKSwgbGEgcGFyw6Bib2xhIHNlbXByZSBwYXNzYSBwZXIgbCdvcmlnZW46ICQoMCwwKSQgdGFtYsOpIMOpcyB1biB0YWxsIGFtYiBlbHMgZWl4b3MsIG5vIG5vbcOpcyBsJ2FsdHJhIGFycmVsLiIsICIiLCAiTGEgJHkkIGRlbCB2w6hydGV4IHMnb2J0w6kgc3Vic3RpdHVpbnQgbGEgJHgkIGRlbCB2w6hydGV4IGEgbCdleHByZXNzacOzIG9yaWdpbmFsOiBjYWwgY2FsY3VsYXItbGEsIG5vIG5vbcOpcyBjYW52aWFyLW5lIGVsIHNpZ25lLiJdLCAiZXJyIjogWyJFSVhfU0lNRVRSSUFfTUFMX0NBTENVTEFUIiwgIlRBTExfT1JJR0VOX09CTElEQVQiLCAiIiwgIlNJR05FX0ZJTkFMIl0sICJyZXMiOiBbIlRyYWllbnQgZmFjdG9yIGNvbcO6OiAkeF4yKzJ4PXgoeCsyKSQsIHF1ZSBkb25hICR4PTAkIGkgJHg9LTIkLiIsICJUYWxscyBhbWIgZWxzIGVpeG9zOiAkKDAsXFwgMCkkIGkgJCgtMixcXCAwKSQuIiwgIkwnZWl4IGRlIHNpbWV0cmlhIHBhc3NhIHBlbCBwdW50IG1pZyBkZSBsZXMgYXJyZWxzOiAkeD0tMSQuIiwgIkVsIHbDqHJ0ZXggw6lzICQoLTEsXFwgLTEpJCwgc3Vic3RpdHVpbnQgJHg9LTEkIGEgbCdleHByZXNzacOzLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Paràbola y = 1·x² + 2·x + 0.</title><line class=\"fig-graella\" x1=\"30.0\" y1=\"190.0\" x2=\"30.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"50.0\" y1=\"190.0\" x2=\"50.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"70.0\" y1=\"190.0\" x2=\"70.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"90.0\" y1=\"190.0\" x2=\"90.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"110.0\" y1=\"190.0\" x2=\"110.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"150.0\" y1=\"190.0\" x2=\"150.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"170.0\" y1=\"190.0\" x2=\"170.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"190.0\" y1=\"190.0\" x2=\"190.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"171.5\" x2=\"190.0\" y2=\"171.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"110.0\" x2=\"190.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"79.2\" x2=\"190.0\" y2=\"79.2\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"48.5\" x2=\"190.0\" y2=\"48.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"140.8\" x2=\"190.0\" y2=\"140.8\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"130.0\" y1=\"190.0\" x2=\"130.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 140.8 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 130.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"154.769\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"132\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"30.0\" y=\"202\">-5</text><text x=\"50.0\" y=\"202\">-4</text><text x=\"70.0\" y=\"202\">-3</text><text x=\"90.0\" y=\"202\">-2</text><text x=\"110.0\" y=\"202\">-1</text><text x=\"130.0\" y=\"202\">0</text><text x=\"150.0\" y=\"202\">1</text><text x=\"170.0\" y=\"202\">2</text><text x=\"190.0\" y=\"202\">3</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"175.0\">-1</text><text x=\"24.0\" y=\"144.3\">0</text><text x=\"24.0\" y=\"113.5\">1</text><text x=\"24.0\" y=\"82.7\">2</text><text x=\"24.0\" y=\"52.0\">3</text></g><path d=\"M 67.1 30.0 L 67.3 31.5 L 70.0 48.5 L 72.7 64.3 L 75.3 79.1 L 78.0 92.8 L 80.7 105.4 L 83.3 116.8 L 86.0 127.2 L 88.7 136.5 L 91.3 144.7 L 94.0 151.8 L 96.7 157.9 L 99.3 162.8 L 102.0 166.6 L 104.7 169.4 L 107.3 171.0 L 110.0 171.5 L 112.7 171.0 L 115.3 169.4 L 118.0 166.6 L 120.7 162.8 L 123.3 157.9 L 126.0 151.8 L 128.7 144.7 L 131.3 136.5 L 134.0 127.2 L 136.7 116.8 L 139.3 105.4 L 142.0 92.8 L 144.7 79.1 L 147.3 64.3 L 150.0 48.5 L 152.7 31.5 L 152.9 30.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/></svg>"
  }
 ]
};
