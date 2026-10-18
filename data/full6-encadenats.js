/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 6,
 "titol": "Full 6 — Proporcionalitat i percentatges",
 "subtitol": "Proporcionalitat directa i inversa, i problemes de percentatges, augments i disminucions encadenats.",
 "blocs": [
  {
   "id": "directa_inversa",
   "titol": "Proporcionalitat directa i inversa",
   "descripcio": "Regla de tres directa i inversa amb repartiments i problemes.",
   "items": [
    "354a",
    "354b",
    "101",
    "104",
    "102",
    "103",
    "105a",
    "105b",
    "106a",
    "106b",
    "107",
    "108"
   ]
  },
  {
   "id": "percentatges",
   "titol": "Percentatges",
   "descripcio": "Percentatge d'una quantitat, i trobar el total o la quantitat original a partir d'un percentatge.",
   "items": [
    "355a",
    "355b",
    "109",
    "110",
    "111",
    "112a",
    "112b"
   ]
  },
  {
   "id": "factor_multiplicador",
   "titol": "El factor multiplicador",
   "descripcio": "Pujar un 15 % és multiplicar per 1,15 i baixar-lo, per 0,85: una sola operació per a cada variació, i com desfer-la.",
   "items": [
    "356a",
    "356b",
    "275a",
    "275b",
    "275c",
    "275d",
    "276a",
    "276b",
    "276c",
    "276d",
    "277a",
    "277b",
    "277c",
    "278a",
    "278b",
    "278c",
    "278d",
    "279a",
    "279b",
    "279c"
   ]
  },
  {
   "id": "aplicacions_percentatge",
   "titol": "Descomptes, IVA i interessos",
   "descripcio": "Descomptes encadenats, IVA, interès simple i repartiments proporcionals.",
   "items": [
    "280a",
    "280b",
    "281a",
    "281b",
    "282a",
    "282b",
    "283a",
    "283b",
    "284"
   ],
   "avancat": true
  },
  {
   "id": "encadenats",
   "titol": "Augments i disminucions encadenats",
   "descripcio": "Augments i rebaixes percentuals aplicats seguits, i comparacions \"en proporció\".",
   "items": [
    "113",
    "114",
    "115",
    "116",
    "117",
    "118"
   ],
   "avancat": true
  }
 ],
 "errors": {
  "COMPARA_TERMES": "Dues fraccions equivalents gairebé mai tenen els mateixos termes: el que ha de coincidir és el valor, no les xifres.",
  "ES_POT_DETERMINAR": "Has dit que no es pot saber, però amb les dades de l'enunciat n'hi ha prou. Abans de descartar una pregunta, mira si algun teorema o criteri et permet respondre-la amb el que ja tens.",
  "ORDRE_MULTIPLICACIO_DIVISIO": "La divisió i la multiplicació tenen la mateixa prioritat i es fan d'esquerra a dreta: no es pot agrupar la multiplicació primer perquè \"queda més bé\".",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "PROGRESSIO_INVENTADA": "El terme s'ha de calcular seguint estrictament la regla que defineix la successió (el terme general o la relació de recurrència), no un patró aproximat o inventat.",
  "SUMA_EN_LLOC_RESTA": "Sumar un nombre negatiu és restar-lo.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "VEREDICTE_INVERTIT": "El veredicte (cert/fals, o sí/no) que has triat és l'oposat del correcte: torna a comprovar la condició amb els valors concrets de l'enunciat."
 },
 "items": [
  {
   "id": "113",
   "ex": 113,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "Un comerciant decideix apujar el preu d'una mercaderia, que era de 72 €, un $3\\,\\%$, i a la setmana següent, un $3\\,\\%$ més sobre l'últim preu. Quin és el preu final de venda?",
   "opcions": [
    "$74{,}16$ €",
    "$78{,}48$ €",
    "$76{,}38$ €",
    "$76{,}32$ €"
   ],
   "pistes": [
    "Apujar un preu un $3\\,\\%$ equival a multiplicar-lo per $1{,}03$.",
    "El segon augment es calcula sobre el preu JA apujat: cal multiplicar per $1{,}03$ una segona vegada, no sobre el preu original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3Qgw6lzIGVsIHByZXUgZGVzcHLDqXMgTk9Nw4lTIGRlbCBwcmltZXIgYXVnbWVudDogZW5jYXJhIGZhbHRhIGFwbGljYXIgZWwgc2Vnb24gJDNcXCxcXCUkIHNvYnJlIGFxdWVzdCBub3UgcHJldSwgbm8gYXR1cmFyLXNlIGFxdcOtLiIsICJObyBjb2luY2lkZWl4IGFtYiBhcGxpY2FyIGVsIGZhY3RvciAkMXssfTAzJCBkdWVzIHZlZ2FkZXMgc2VndWlkZXMgc29icmUgJDcyJDogdG9ybmEgYSBmZXIgZWwgY8OgbGN1bCBwYXMgYSBwYXMuIiwgIiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBzdW1hciBlbHMgZG9zIGF1Z21lbnRzICgkNlxcLFxcJSQgZGUgY29wKSBlbiBjb21wdGVzIGQnYXBsaWNhci1sb3Mgc2VndWl0czogZWwgc2Vnb24gJDNcXCxcXCUkIHMnaGEgZGUgY2FsY3VsYXIgc29icmUgZWwgcHJldSBKQSBhcHVqYXQsIG5vIHNvYnJlIGVsIHByZXUgb3JpZ2luYWwuIl0sICJlcnIiOiBbIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiUFJPR1JFU1NJT19JTlZFTlRBREEiLCAiIiwgIlNVTUFfRU5fTExPQ19SRVNUQSJdLCAicmVzIjogWyJQcmV1IGRlc3Byw6lzIGRlbCBwcmltZXIgYXVnbWVudDogJDcyXFxjZG90MXssfTAzPTc0eyx9MTYkIOKCrCIsICJQcmV1IGRlc3Byw6lzIGRlbCBzZWdvbiBhdWdtZW50IChzb2JyZSAkNzR7LH0xNiQg4oKsKTogJDc0eyx9MTZcXGNkb3Qxeyx9MDM9NzZ7LH0zODQ4JCDigqwiLCAiQXJyb2Rvbml0IGEgY8OobnRpbXMsIHF1ZSDDqXMgY29tIHMnZXhwcmVzc2VuIGVscyBwcmV1czogJDc2eyx9MzgkIOKCrCJdfQ=="
  },
  {
   "id": "114",
   "ex": 114,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En dues setmanes consecutives s'han aplicat al preu d'un article augments del $2\\,\\%$ i del $5\\,\\%$. En quin percentatge s'ha incrementat l'article sobre el seu preu original?",
   "opcions": [
    "$10{,}0\\,\\%$",
    "$7\\,\\%$",
    "$7{,}1\\,\\%$",
    "$1{,}071\\,\\%$"
   ],
   "pistes": [
    "Cada augment equival a multiplicar pel factor $1+\\frac{\\%}{100}$; com que el segon s'aplica sobre el preu ja incrementat, els factors es multipliquen entre si.",
    "Calcula $1{,}02\\cdot1{,}05$ i compara el resultat amb $1$ per trobar el percentatge d'increment."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igbm8gc3VydCBkZSBtdWx0aXBsaWNhciBlbHMgZmFjdG9ycyAkMXssfTAyXFxjZG90MXssfTA1JDogcmV2aXNhIGVsIHByb2R1Y3RlIGkgcmVzdGEtaGkgJDEkIGFsIGZpbmFsIHBlciBvYnRlbmlyIGVsIHBlcmNlbnRhdGdlIGQnaW5jcmVtZW50LiIsICJTdW1hciAkMis1JCBub23DqXMgc2VyaWEgY29ycmVjdGUgc2kgZWwgc2Vnb24gYXVnbWVudCBlcyBjYWxjdWzDqXMgc29icmUgZWwgcHJldSBPUklHSU5BTDsgY29tIHF1ZSBlcyBjYWxjdWxhIHNvYnJlIGVsIHByZXUgamEgaW5jcmVtZW50YXQgbGEgcHJpbWVyYSBzZXRtYW5hLCBlbHMgZmFjdG9ycyBzJ2hhbiBkZSBNVUxUSVBMSUNBUiwgbm8gc3VtYXIuIiwgIiIsICJFbCBmYWN0b3IgZ2xvYmFsIMOpcyAkMXssfTA3MSQsIHBlcsOyIGVsIHBlcmNlbnRhdGdlIGQnaW5jcmVtZW50IMOpcyAkKDF7LH0wNzEtMSlcXGNkb3QxMDA9N3ssfTFcXCxcXCUkLCBubyBlbCBmYWN0b3IgdGFsIHF1YWwgbGxlZ2l0IGNvbSBhIHBlcmNlbnRhdGdlLiJdLCAiZXJyIjogWyJQUk9EVUNURV9NQUwiLCAiU1VNQV9FTl9MTE9DX1JFU1RBIiwgIiIsICJPUkRSRV9NVUxUSVBMSUNBQ0lPX0RJVklTSU8iXSwgInJlcyI6IFsiRmFjdG9yIGdsb2JhbDogJDF7LH0wMlxcY2RvdDF7LH0wNT0xeyx9MDcxJCIsICJQZXJjZW50YXRnZSBkJ2luY3JlbWVudDogJCgxeyx9MDcxLTEpXFxjZG90MTAwPTd7LH0xXFwsXFwlJCAoaSBubyBzaW1wbGVtZW50ICQyKzU9N1xcLFxcJSQsIHBlcnF1w6ggZWwgc2Vnb24gYXVnbWVudCBlcyBjYWxjdWxhIHNvYnJlIHVuYSBxdWFudGl0YXQgamEgbcOpcyBncmFuKSJdfQ=="
  },
  {
   "id": "115",
   "ex": 115,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En una botiga apugen el preu d'un producte de 200 € un $10\\,\\%$. A la setmana següent decideixen rebaixar-lo un $10\\,\\%$ del preu que té en aquell moment. Què ha passat amb el preu?",
   "opcions": [
    "El preu torna a ser exactament $200$ €, els mateixos que a l'inici",
    "El preu final és $220$ €, $20$ € més que el preu inicial",
    "El preu final és $180$ €, $20$ € menys que el preu inicial",
    "El preu final és $198$ €, $2$ € menys que el preu inicial de $200$ €"
   ],
   "pistes": [
    "Apujar un $10\\,\\%$ multiplica per $1{,}10$; rebaixar un $10\\,\\%$ (sobre el preu ja apujat) multiplica per $0{,}90$.",
    "Aplica els dos factors seguits, sobre el preu que resulti de cada pas, no tots dos sobre el preu original."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbmNhcmEgcXVlIGwnYXVnbWVudCBpIGxhIHJlYmFpeGEgc2VtYmxpbiBkZWwgbWF0ZWl4ICQxMFxcLFxcJSQsIG5vIGVzIGNvbXBlbnNlbjogZWwgJDEwXFwsXFwlJCBxdWUgZXMgcmViYWl4YSBlcyBjYWxjdWxhIHNvYnJlIHVuYSBxdWFudGl0YXQgTcOJUyBHUkFOICgkMjIwJCDigqwpIHF1ZSBsYSBxdWUgZXMgdmEgYXB1amFyICgkMjAwJCDigqwpLiIsICJBcXVlc3Qgw6lzIGVsIHByZXUganVzdCBERVNQUsOJUyBkZSBsJ2F1Z21lbnQsIGFiYW5zIGQnYXBsaWNhciBsYSByZWJhaXhhIGRlbCAkMTBcXCxcXCUkIHF1ZSB2ZSB0b3Qgc2VndWl0OiBlbmNhcmEgZmFsdGEgYXF1ZXN0IHNlZ29uIHBhcy4iLCAiTm8gY29pbmNpZGVpeCBhbWIgYXBsaWNhciBwcmltZXIgZWwgZmFjdG9yICQxeyx9MTAkIGkgZGVzcHLDqXMgZWwgZmFjdG9yICQweyx9OTAkIHNvYnJlIGVsIHByZXUgamEgYXB1amF0OiB0b3JuYSBhIGZlciBlbHMgZG9zIHBhc3NvcyBwZXIgc2VwYXJhdC4iLCAiIl0sICJlcnIiOiBbIlZFUkVESUNURV9JTlZFUlRJVCIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICIiXSwgInJlcyI6IFsiUHJldSBkZXNwcsOpcyBkZSBsJ2F1Z21lbnQ6ICQyMDBcXGNkb3Qxeyx9MTA9MjIwJCDigqwiLCAiUHJldSBkZXNwcsOpcyBkZSBsYSByZWJhaXhhIChzb2JyZSAkMjIwJCDigqwpOiAkMjIwXFxjZG90MHssfTkwPTE5OCQg4oKsIiwgIkVsIHByZXUgaGEgcXVlZGF0ICQyJCDigqwgcGVyIHNvdGEgZGUgbCdvcmlnaW5hbDogYXVnbWVudCBpIHJlYmFpeGEgZGVsIG1hdGVpeCBwZXJjZW50YXRnZSBOTyBlcyBjb21wZW5zZW4sIHBlcnF1w6ggZXMgY2FsY3VsZW4gc29icmUgcXVhbnRpdGF0cyBkaWZlcmVudHMiXX0="
  },
  {
   "id": "116",
   "ex": 116,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "La carn de xai, durant el Nadal, va augmentar el seu preu de 8,85 €/kg a 11,55 €/kg. Un altre producte que s'ha encarit ha estat el raïm, de 2,10 €/kg a 3,95 €/kg. Quin producte s'ha incrementat més en proporció?",
   "opcions": [
    "El raïm s'ha incrementat més en proporció (uns $88{,}1\\,\\%$ enfront d'un $30{,}5\\,\\%$ del xai)",
    "El xai, perquè el seu percentatge d'augment és $\\dfrac{11{,}55}{8{,}85}\\approx1{,}305$",
    "El xai, perquè ha pujat més en euros per quilo ($2{,}70$ € enfront d'$1{,}85$ €)",
    "Els dos productes s'han incrementat exactament igual en proporció"
   ],
   "pistes": [
    "Per comparar «en proporció» cal calcular el percentatge d'augment de cada producte respecte al seu preu INICIAL, no la diferència en euros.",
    "Calcula per separat $\\frac{11{,}55-8{,}85}{8{,}85}$ (xai) i $\\frac{3{,}95-2{,}10}{2{,}10}$ (raïm), i compara els dos resultats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0IHZhbG9yICgkMXssfTMwNSQpIMOpcyBlbCBmYWN0b3IgZGUgcHJldSBmaW5hbCwgbm8gbCdhdWdtZW50IHJlbGF0aXU6IGwnaW5jcmVtZW50IHBlcmNlbnR1YWwgw6lzICRcXGZyYWN7MTF7LH01NS04eyx9ODV9ezh7LH04NX1cXGFwcHJveDMweyx9NVxcLFxcJSQsIGkgZW5jYXJhIGNhbCBjb21wYXJhci1sbyBhbWIgZWwgZGVsIHJhw69tIHBlciBzYWJlciBxdWluIGhhIHB1amF0IG3DqXMuIiwgIkwnZW51bmNpYXQgcHJlZ3VudGEgcXVpbiBzJ2hhIGluY3JlbWVudGF0IG3DqXMgRU4gUFJPUE9SQ0nDkyAocGVyY2VudHVhbG1lbnQpLCBubyBlbiBldXJvcyBhYnNvbHV0czogY2FsIGNvbXBhcmFyICRcXGZyYWN7MnssfTcwfXs4eyx9ODV9JCBhbWIgJFxcZnJhY3sxeyx9ODV9ezJ7LH0xMH0kLCBubyAkMnssfTcwJCBhbWIgJDF7LH04NSQuIiwgIkNhbGN1bGEgZWxzIGRvcyBwZXJjZW50YXRnZXMgZCdhdWdtZW50IHBlciBzZXBhcmF0ICgkXFxhcHByb3gzMHssfTVcXCxcXCUkIGVsIHhhaSwgJFxcYXBwcm94ODh7LH0xXFwsXFwlJCBlbCByYcOvbSkgaSBjb21wcm92YSBxdWUgbm8gY29pbmNpZGVpeGVuLiJdLCAiZXJyIjogWyIiLCAiUFJPRFVDVEVfTUFMIiwgIlZFUkVESUNURV9JTlZFUlRJVCIsICJQUk9HUkVTU0lPX0lOVkVOVEFEQSJdLCAicmVzIjogWyJYYWk6IGF1Z21lbnQgcmVsYXRpdSAkXFxkZnJhY3sxMXssfTU1LTh7LH04NX17OHssfTg1fT1cXGRmcmFjezJ7LH03MH17OHssfTg1fVxcYXBwcm94MHssfTMwNTFcXFJpZ2h0YXJyb3czMHssfTVcXCxcXCUkIiwgIlJhw69tOiBhdWdtZW50IHJlbGF0aXUgJFxcZGZyYWN7M3ssfTk1LTJ7LH0xMH17MnssfTEwfT1cXGRmcmFjezF7LH04NX17MnssfTEwfVxcYXBwcm94MHssfTg4MTBcXFJpZ2h0YXJyb3c4OHssfTFcXCxcXCUkIiwgIkVuY2FyYSBxdWUgZWwgeGFpIGhhIHB1amF0IG3DqXMgZW4gZXVyb3MgcGVyIHF1aWxvLCBlbCByYcOvbSBzJ2hhIGVuY2FyaXQgbW9sdCBtw6lzIGVuIHByb3BvcmNpw7MiXX0="
  },
  {
   "id": "117",
   "ex": 117,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En escalfar una barra de metall d'1 m a $200^\\circ$C, s'ha dilatat fins a mesurar 1,04 m. Una barra de 60 cm d'un altre metall, en escalfar-la a la mateixa temperatura, s'ha dilatat fins a mesurar 61,9 cm. Quin metall es dilata menys?",
   "opcions": [
    "Els dos metalls es dilaten exactament igual, perquè tots dos han augmentat uns 2 o 4 centèsimes per unitat",
    "El primer metall (l'$1$ m), perquè el seu factor de dilatació, $1{,}04$, és més petit que $61{,}9$",
    "El segon metall (el de $60$ cm) es dilata menys",
    "No es pot saber quin es dilata menys perquè les mesures estan en unitats diferents (m i cm)"
   ],
   "pistes": [
    "Per comparar la dilatació cal fixar-nos en el FACTOR pel qual es multiplica la longitud original, no en l'augment absolut.",
    "Calcula per separat $\\frac{1{,}04}{1}$ i $\\frac{61{,}9}{60}$, cadascun en les seves pròpies unitats."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJDb21wYXJhIGVscyBmYWN0b3JzIGRlIGRpbGF0YWNpw7MgZXhhY3RlcyAoJDF7LH0wNCQgaSAkXFxhcHByb3gxeyx9MDMxNyQpLCBubyB1bmEgaW1wcmVzc2nDsyBhcHJveGltYWRhIGRlIGxhIGRpZmVyw6huY2lhIGFic29sdXRhLiIsICIkNjF7LH05JCBubyDDqXMgdW4gZmFjdG9yIGRlIGRpbGF0YWNpw7M6IGNhbCBkaXZpZGlyIGxhIGxvbmdpdHVkIGZpbmFsIGVudHJlIGxhIGluaWNpYWwgRU4gTEVTIE1BVEVJWEVTIFVOSVRBVFMgKCRcXGZyYWN7NjF7LH05fXs2MH1cXGFwcHJveDF7LH0wMzE3JCkgcGVyIG9idGVuaXItbmUgdW4sIGkgY29tcGFyYXItbG8gYW1iICQxeyx9MDQkLiIsICIiLCAiRWwgZmFjdG9yIGRlIGRpbGF0YWNpw7MgKGxvbmdpdHVkIGZpbmFsIGVudHJlIGluaWNpYWwpIG5vIGRlcMOobiBkZSBsYSB1bml0YXQgcXVlIGZhY2lzIHNlcnZpciwgbWVudHJlIHNpZ3VpcyBjb25zaXN0ZW50IGVuIGNhZGEgYmFycmEgcGVyIHNlcGFyYXQ6IGVzIHBvdCBjb21wYXJhciBwZXJmZWN0YW1lbnQuIl0sICJlcnIiOiBbIlBST0dSRVNTSU9fSU5WRU5UQURBIiwgIkNPTVBBUkFfVEVSTUVTIiwgIiIsICJFU19QT1RfREVURVJNSU5BUiJdLCAicmVzIjogWyJQcmltZXIgbWV0YWxsOiBmYWN0b3IgJFxcZGZyYWN7MXssfTA0fXsxfT0xeyx9MDQkIiwgIlNlZ29uIG1ldGFsbDogZmFjdG9yICRcXGRmcmFjezYxeyx9OX17NjB9XFxhcHByb3gxeyx9MDMxNyQiLCAiQ29tIHF1ZSAkMXssfTAzMTc8MXssfTA0JCwgZWwgc2Vnb24gbWV0YWxsIHMnaGEgZGlsYXRhdCBwcm9wb3JjaW9uYWxtZW50IG1lbnlzIl19"
  },
  {
   "id": "118",
   "ex": 118,
   "ap": "",
   "bloc": "encadenats",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En un envàs de galetes anuncien que conté un $25\\,\\%$ més de galetes pel mateix preu. Els envasos antics pesaven 1 kg i l'envàs actual amb l'oferta pesa 1,2 kg. És certa la publicitat?",
   "opcions": [
    "Sí: el pes ha passat d'$1$ kg a $1{,}2$ kg, i $1{,}2$ és exactament un $25\\,\\%$ més que $1$",
    "No es pot saber sense conèixer el pes exacte d'una galeta",
    "Sí, perquè $1{,}2-1=0{,}2$ i $0{,}2\\cdot100=25$",
    "No: l'envàs només conté un $20\\,\\%$ més de galetes, no un $25\\,\\%$"
   ],
   "pistes": [
    "Si el pes de cada galeta no canvia, un $25\\,\\%$ més de galetes hauria de suposar exactament un $25\\,\\%$ més de pes.",
    "Comprova quin percentatge d'augment dona realment el pes: $\\frac{1{,}2-1}{1}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJDb21wcm92YS1obyBhbWIgdW4gJDI1XFwsXFwlJCByZWFsOiAkMVxcY2RvdDF7LH0yNT0xeyx9MjUkIGtnLCBubyAkMXssfTIkIGtnLiBFbCBwZXMgYW51bmNpYXQgbm8gY29pbmNpZGVpeCBhbWIgdW4gaW5jcmVtZW50IGRlbCAkMjVcXCxcXCUkLiIsICJTaSBlbCBwZXMgZGUgY2FkYSBnYWxldGEgZXMgbWFudMOpIGNvbnN0YW50IChjb20gZG9uYSBhIGVudGVuZHJlIGwnZW51bmNpYXQpLCBlbCBwZXJjZW50YXRnZSBkJ2F1Z21lbnQgZGUgUEVTIGkgZWwgZGUgTk9NQlJFIGRlIGdhbGV0ZXMgY29pbmNpZGVpeGVuOiBubyBjYWwgY29uw6hpeGVyIGVsIHBlcyBkJ3VuYSBnYWxldGEgcGVyIHJlc3BvbmRyZS4iLCAiJDB7LH0yXFxjZG90MTAwPTIwJCwgbm8gJDI1JDogcmV2aXNhIGFxdWVzdCBkYXJyZXIgcGFzIGRlbCBjw6BsY3VsIGRlbCBwZXJjZW50YXRnZSByZWFsIGQnaW5jcmVtZW50LiIsICIiXSwgImVyciI6IFsiUFJPRFVDVEVfTUFMIiwgIkVTX1BPVF9ERVRFUk1JTkFSIiwgIk9SRFJFX01VTFRJUExJQ0FDSU9fRElWSVNJTyIsICIiXSwgInJlcyI6IFsiVW4gJDI1XFwsXFwlJCByZWFsIGRvbmFyaWEgJDFcXGNkb3Qxeyx9MjU9MXssfTI1JCBrZywgcGVyw7IgbCdlbnbDoHMgYWN0dWFsIHBlc2Egbm9tw6lzICQxeyx9MiQga2ciLCAiSW5jcmVtZW50IHJlYWw6ICRcXGRmcmFjezF7LH0yLTF9ezF9PTB7LH0yMFxcUmlnaHRhcnJvdzIwXFwsXFwlJCIsICJQZXIgdGFudCBlbCBwZXMgKGkgZWwgbm9tYnJlIGRlIGdhbGV0ZXMsIHNpIGNhZGEgdW5hIHBlc2EgaWd1YWwpIG5vbcOpcyBoYSBhdWdtZW50YXQgdW4gJDIwXFwsXFwlJCwgbm8gdW4gJDI1XFwsXFwlJCJdfQ=="
  }
 ]
};
