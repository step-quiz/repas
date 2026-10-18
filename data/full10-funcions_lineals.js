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
  "ORDENADA_NULA_OBLIDADA": "Quan la recta passa per l'origen, l'ordenada a l'origen val $0$ i el terme independent desapareix: $y=mx$.",
  "PENDENT_COM_NUL": "Una funció afí només és constant si el pendent és $0$. Si el pendent és qualsevol altre nombre, la funció puja o baixa sempre.",
  "PENDENT_MAL_TRIAT": "El pendent que has fet servir no és el que toca. Si te'l donen, es col·loca tal com és; si no, es calcula amb dos punts.",
  "PENDENT_ORDENADA_INTERCANVIATS": "El pendent és el nombre que MULTIPLICA la $x$; l'ordenada a l'origen és el terme independent, el que va sol. Els has intercanviat.",
  "PUNT_ORDENADA_CONFOS": "Has confós un punt de la gràfica amb l'ordenada a l'origen. Només coincideixen si el punt té $x=0$.",
  "REPRESENTACIO_INNECESSARIA": "No cal dibuixar la gràfica: el signe del pendent ja diu si la funció creix o decreix, i el de $a$ si la paràbola s'obre amunt o avall.",
  "SIGNE_ORDENADA_INVERTIT": "L'ordenada a l'origen té el signe canviat: mira si la recta talla l'eix vertical per damunt o per sota del zero.",
  "SIGNE_PENDENT_INVERTIT": "El pendent conserva el signe amb què apareix a l'expressió: no cal canviar-l'hi en llegir-lo."
 },
 "items": [
  {
   "id": "367a",
   "ex": 367,
   "ap": "a",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Quin és el pendent $m$ d'aquesta funció afí? Recorda: a $y=mx+n$, el pendent és el nombre que multiplica la $x$.",
   "enunciat": "$y=5x+2$",
   "opcions": [
    "$m=2$",
    "$m=5$",
    "$m=-5$",
    "$m=7$"
   ],
   "pistes": [
    "Quin nombre va enganxat a la $x$?",
    "El $2$ va sol: és l'ordenada a l'origen, no el pendent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50IMOpcyBlbCBub21icmUgcXVlIE1VTFRJUExJQ0EgbGEgJHgkOyBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50LCBlbCBxdWUgdmEgc29sLiBFbHMgaGFzIGludGVyY2FudmlhdC4iLCAiIiwgIkVsIHBlbmRlbnQgY29uc2VydmEgZWwgc2lnbmUgYW1iIHF1w6ggYXBhcmVpeCBhIGwnZXhwcmVzc2nDszogbm8gY2FsIGNhbnZpYXItbCdoaSBlbiBsbGVnaXItbG8uIiwgIkhhcyBzdW1hdCAkNSsyJC4gRWwgcGVuZGVudCDDqXMgbm9tw6lzIGVsIG5vbWJyZSBxdWUgbXVsdGlwbGljYSBsYSAkeCQuIl0sICJlcnIiOiBbIlBFTkRFTlRfT1JERU5BREFfSU5URVJDQU5WSUFUUyIsICIiLCAiU0lHTkVfUEVOREVOVF9JTlZFUlRJVCIsICJQRU5ERU5UX01BTF9UUklBVCJdLCAicmVzIjogWyIkeT1cXHVuZGVyYnJhY2V7NX1fe219eCtcXHVuZGVyYnJhY2V7Mn1fe259JDogZWwgcGVuZGVudCDDqXMgJG09NSQuIl19"
  },
  {
   "id": "367b",
   "ex": 367,
   "ap": "b",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Quin és el pendent $m$ d'aquesta funció afí? Recorda: a $y=mx+n$, el pendent és el nombre que multiplica la $x$.",
   "enunciat": "$y=-4x+1$",
   "opcions": [
    "$m=1$",
    "$m=-3$",
    "$m=-4$",
    "$m=4$"
   ],
   "pistes": [
    "Quin nombre va enganxat a la $x$? Compte amb el signe.",
    "L'$1$ va sol: és l'ordenada a l'origen, no el pendent."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBwZW5kZW50IMOpcyBlbCBub21icmUgcXVlIE1VTFRJUExJQ0EgbGEgJHgkOyBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50LCBlbCBxdWUgdmEgc29sLiBFbHMgaGFzIGludGVyY2FudmlhdC4iLCAiSGFzIHN1bWF0ICQtNCsxJC4gRWwgcGVuZGVudCDDqXMgbm9tw6lzIGVsIG5vbWJyZSBxdWUgbXVsdGlwbGljYSBsYSAkeCQsIGFtYiBlbCBzZXUgc2lnbmUuIiwgIiIsICJFbCBwZW5kZW50IGNvbnNlcnZhIGVsIHNpZ25lIGFtYiBxdcOoIGFwYXJlaXggYSBsJ2V4cHJlc3Npw7M6IG5vIGNhbCBjYW52aWFyLWwnaGkgZW4gbGxlZ2lyLWxvLiJdLCAiZXJyIjogWyJQRU5ERU5UX09SREVOQURBX0lOVEVSQ0FOVklBVFMiLCAiUEVOREVOVF9NQUxfVFJJQVQiLCAiIiwgIlNJR05FX1BFTkRFTlRfSU5WRVJUSVQiXSwgInJlcyI6IFsiJHk9XFx1bmRlcmJyYWNley00fV97bX14K1xcdW5kZXJicmFjZXsxfV97bn0kOiBlbCBwZW5kZW50IMOpcyAkbT0tNCQuIl19"
  },
  {
   "id": "207a",
   "ex": 207,
   "ap": "a",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Indica el pendent i l'ordenada a l'origen de cada funció afí, donada per la seva expressió. Recorda que les que no tenen terme independent ($y=mx$) s'anomenen funcions lineals, i són el cas particular amb ordenada a l'origen $0$.",
   "enunciat": "$y=-3x+6$",
   "opcions": [
    "$m=-3,\\ n=-6$",
    "$m=3,\\ n=6$",
    "$m=6,\\ n=-3$",
    "$m=-3,\\ n=6$"
   ],
   "pistes": [
    "El pendent és el coeficient que acompanya la $x$; l'ordenada a l'origen és el terme que no té $x$ (si no n'hi ha cap d'escrit, l'ordenada és $0$).",
    "Compara $y=-3x+6$ amb $y=mx+n$ terme a terme. El signe que hi ha davant de cada número en forma part."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJMJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50IHRhbCBjb20gYXBhcmVpeCBhIGwnZXhwcmVzc2nDsyAoYW1iIGVsIHNldSBzaWduZSk6IG5vIGNhbCBjYW52aWFyLWxvLiIsICJFbCBwZW5kZW50IGNvbnNlcnZhIGVsIHNldSBzaWduZSB0YWwgY29tIGFwYXJlaXggYSBsJ2V4cHJlc3Npw7M6IG5vIGNhbCBjYW52aWFyLWxvLiIsICJFbCBwZW5kZW50IMOpcyBlbCBub21icmUgcXVlIE1VTFRJUExJQ0EgbGEgJHgkLCBpIGwnb3JkZW5hZGEgYSBsJ29yaWdlbiDDqXMgZWwgdGVybWUgaW5kZXBlbmRlbnQgKHNlbnNlICR4JCk6IGVzdGFuIGludGVyY2FudmlhdHMuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9PUkRFTkFEQV9JTlZFUlRJVCIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIlBFTkRFTlRfT1JERU5BREFfSU5URVJDQU5WSUFUUyIsICIiXSwgInJlcyI6IFsiQSAkeT1teCtuJCwgZWwgcGVuZGVudCDDqXMgJG0kIGkgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyAkbiQuIiwgIiR5PS0zeCs2JCB0w6kgJG09LTMkIGkgJG49NiQuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Recta de pendent -3 i ordenada a l'origen 6.</title><line class=\"fig-graella\" x1=\"52.9\" y1=\"190.0\" x2=\"52.9\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"129.0\" y1=\"190.0\" x2=\"129.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"167.1\" y1=\"190.0\" x2=\"167.1\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"129.0\" x2=\"190.0\" y2=\"129.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"91.0\" x2=\"190.0\" y2=\"91.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"52.9\" x2=\"190.0\" y2=\"52.9\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"167.1\" x2=\"190.0\" y2=\"167.1\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"91.0\" y1=\"190.0\" x2=\"91.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 167.1 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 91.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"181.143\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"92.9524\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"52.9\" y=\"202\">-2</text><text x=\"91.0\" y=\"202\">0</text><text x=\"129.0\" y=\"202\">2</text><text x=\"167.1\" y=\"202\">4</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"170.6\">0</text><text x=\"24.0\" y=\"132.5\">2</text><text x=\"24.0\" y=\"94.5\">4</text><text x=\"24.0\" y=\"56.4\">6</text></g><path d=\"M 83.3 30.0 L 83.3 30.0 L 86.0 38.0 L 88.7 46.0 L 91.3 54.0 L 94.0 62.0 L 96.7 70.0 L 99.3 78.0 L 102.0 86.0 L 104.7 94.0 L 107.3 102.0 L 110.0 110.0 L 112.7 118.0 L 115.3 126.0 L 118.0 134.0 L 120.7 142.0 L 123.3 150.0 L 126.0 158.0 L 128.7 166.0 L 131.3 174.0 L 134.0 182.0 L 136.7 190.0 L 136.7 190.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/></svg>"
  },
  {
   "id": "207b",
   "ex": 207,
   "ap": "b",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Indica el pendent i l'ordenada a l'origen de cada funció afí, donada per la seva expressió. Recorda que les que no tenen terme independent ($y=mx$) s'anomenen funcions lineals, i són el cas particular amb ordenada a l'origen $0$.",
   "enunciat": "$y=10x$",
   "opcions": [
    "$m=10,\\ n=1$",
    "$m=-10,\\ n=0$",
    "$m=0,\\ n=10$",
    "$m=10,\\ n=0$"
   ],
   "pistes": [
    "El pendent és el coeficient que acompanya la $x$; l'ordenada a l'origen és el terme que no té $x$ (si no n'hi ha cap d'escrit, l'ordenada és $0$).",
    "Compara $y=10x$ amb $y=mx+n$ terme a terme: quin número fa de $m$? I quin terme hi falta?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJRdWFuIGwnZXhwcmVzc2nDsyBubyB0w6kgY2FwIHRlcm1lIGluZGVwZW5kZW50IGVzY3JpdCAoY29tICR5PTEweCQpLCBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICQwJCwgbm8gJDEkOiBubyBoaSBoYSBjYXAgdGVybWUgcXVlIHN1bWFyLiIsICJFbCBwZW5kZW50IGNvbnNlcnZhIGVsIHNldSBzaWduZSB0YWwgY29tIGFwYXJlaXggYSBsJ2V4cHJlc3Npw7M6IG5vIGNhbCBjYW52aWFyLWxvLiIsICJFbCBwZW5kZW50IMOpcyBlbCBub21icmUgcXVlIE1VTFRJUExJQ0EgbGEgJHgkLCBpIGwnb3JkZW5hZGEgYSBsJ29yaWdlbiDDqXMgZWwgdGVybWUgaW5kZXBlbmRlbnQgKHNlbnNlICR4JCk6IGVzdGFuIGludGVyY2FudmlhdHMuIiwgIiJdLCAiZXJyIjogWyJPUkRFTkFEQV9OVUxBX09CTElEQURBIiwgIlNJR05FX1BFTkRFTlRfSU5WRVJUSVQiLCAiUEVOREVOVF9PUkRFTkFEQV9JTlRFUkNBTlZJQVRTIiwgIiJdLCAicmVzIjogWyJBICR5PW14K24kLCBlbCBwZW5kZW50IMOpcyAkbSQgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICRuJC4iLCAiJHk9MTB4JCB0w6kgJG09MTAkIGkgJG49MCQuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Recta de pendent 10 i ordenada a l'origen 0.</title><line class=\"fig-graella\" x1=\"46.5\" y1=\"190.0\" x2=\"46.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"78.3\" y1=\"190.0\" x2=\"78.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"141.7\" y1=\"190.0\" x2=\"141.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"173.5\" y1=\"190.0\" x2=\"173.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"173.5\" x2=\"190.0\" y2=\"173.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"141.7\" x2=\"190.0\" y2=\"141.7\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"78.3\" x2=\"190.0\" y2=\"78.3\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"46.5\" x2=\"190.0\" y2=\"46.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"110.0\" x2=\"190.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"110.0\" y1=\"190.0\" x2=\"110.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 110.0 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 110.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"124\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"112\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"46.5\" y=\"202\">-2</text><text x=\"78.3\" y=\"202\">-1</text><text x=\"110.0\" y=\"202\">0</text><text x=\"141.7\" y=\"202\">1</text><text x=\"173.5\" y=\"202\">2</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"177.0\">-2</text><text x=\"24.0\" y=\"145.2\">-1</text><text x=\"24.0\" y=\"113.5\">0</text><text x=\"24.0\" y=\"81.8\">1</text><text x=\"24.0\" y=\"50.0\">2</text></g><path d=\"M 102.0 190.0 L 102.0 190.0 L 104.7 163.3 L 107.3 136.7 L 110.0 110.0 L 112.7 83.3 L 115.3 56.7 L 118.0 30.0 L 118.0 30.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/></svg>"
  },
  {
   "id": "207c",
   "ex": 207,
   "ap": "c",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Indica el pendent i l'ordenada a l'origen de cada funció afí, donada per la seva expressió. Recorda que les que no tenen terme independent ($y=mx$) s'anomenen funcions lineals, i són el cas particular amb ordenada a l'origen $0$.",
   "enunciat": "$y=-2x-5$",
   "opcions": [
    "$m=-2,\\ n=-5$",
    "$m=2,\\ n=-5$",
    "$m=-2,\\ n=5$",
    "$m=-5,\\ n=-2$"
   ],
   "pistes": [
    "El pendent és el coeficient que acompanya la $x$; l'ordenada a l'origen és el terme que no té $x$ (si no n'hi ha cap d'escrit, l'ordenada és $0$).",
    "Compara $y=-2x-5$ amb $y=mx+n$ terme a terme. El signe que hi ha davant de cada número en forma part."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcGVuZGVudCBjb25zZXJ2YSBlbCBzZXUgc2lnbmUgdGFsIGNvbSBhcGFyZWl4IGEgbCdleHByZXNzacOzOiBubyBjYWwgY2Fudmlhci1sby4iLCAiTCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyBlbCB0ZXJtZSBpbmRlcGVuZGVudCB0YWwgY29tIGFwYXJlaXggYSBsJ2V4cHJlc3Npw7MgKGFtYiBlbCBzZXUgc2lnbmUpOiBubyBjYWwgY2Fudmlhci1sby4iLCAiRWwgcGVuZGVudCDDqXMgZWwgbm9tYnJlIHF1ZSBNVUxUSVBMSUNBIGxhICR4JCwgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50IChzZW5zZSAkeCQpOiBlc3RhbiBpbnRlcmNhbnZpYXRzLiJdLCAiZXJyIjogWyIiLCAiU0lHTkVfUEVOREVOVF9JTlZFUlRJVCIsICJTSUdORV9PUkRFTkFEQV9JTlZFUlRJVCIsICJQRU5ERU5UX09SREVOQURBX0lOVEVSQ0FOVklBVFMiXSwgInJlcyI6IFsiQSAkeT1teCtuJCwgZWwgcGVuZGVudCDDqXMgJG0kIGkgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyAkbiQuIiwgIiR5PS0yeC01JCB0w6kgJG09LTIkIGkgJG49LTUkLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Recta de pendent -2 i ordenada a l'origen -5.</title><line class=\"fig-graella\" x1=\"47.1\" y1=\"190.0\" x2=\"47.1\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"70.0\" y1=\"190.0\" x2=\"70.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"92.9\" y1=\"190.0\" x2=\"92.9\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"115.7\" y1=\"190.0\" x2=\"115.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"161.4\" y1=\"190.0\" x2=\"161.4\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"184.3\" y1=\"190.0\" x2=\"184.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"190.0\" x2=\"190.0\" y2=\"190.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"167.1\" x2=\"190.0\" y2=\"167.1\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"144.3\" x2=\"190.0\" y2=\"144.3\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"121.4\" x2=\"190.0\" y2=\"121.4\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"98.6\" x2=\"190.0\" y2=\"98.6\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"75.7\" x2=\"190.0\" y2=\"75.7\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"30.0\" x2=\"190.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"52.9\" x2=\"190.0\" y2=\"52.9\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"138.6\" y1=\"190.0\" x2=\"138.6\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 52.9 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 138.6 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"66.8571\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"140.571\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"47.1\" y=\"202\">-4</text><text x=\"70.0\" y=\"202\">-3</text><text x=\"92.9\" y=\"202\">-2</text><text x=\"115.7\" y=\"202\">-1</text><text x=\"138.6\" y=\"202\">0</text><text x=\"161.4\" y=\"202\">1</text><text x=\"184.3\" y=\"202\">2</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"193.5\">-6</text><text x=\"24.0\" y=\"170.6\">-5</text><text x=\"24.0\" y=\"147.8\">-4</text><text x=\"24.0\" y=\"124.9\">-3</text><text x=\"24.0\" y=\"102.1\">-2</text><text x=\"24.0\" y=\"79.2\">-1</text><text x=\"24.0\" y=\"56.4\">0</text><text x=\"24.0\" y=\"33.5\">1</text></g><path d=\"M 70.0 30.0 L 70.0 30.0 L 72.7 35.3 L 75.3 40.7 L 78.0 46.0 L 80.7 51.3 L 83.3 56.7 L 86.0 62.0 L 88.7 67.3 L 91.3 72.7 L 94.0 78.0 L 96.7 83.3 L 99.3 88.7 L 102.0 94.0 L 104.7 99.3 L 107.3 104.7 L 110.0 110.0 L 112.7 115.3 L 115.3 120.7 L 118.0 126.0 L 120.7 131.3 L 123.3 136.7 L 126.0 142.0 L 128.7 147.3 L 131.3 152.7 L 134.0 158.0 L 136.7 163.3 L 139.3 168.7 L 142.0 174.0 L 144.7 179.3 L 147.3 184.7 L 150.0 190.0 L 150.0 190.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/></svg>"
  },
  {
   "id": "207d",
   "ex": 207,
   "ap": "d",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Indica el pendent i l'ordenada a l'origen de cada funció afí, donada per la seva expressió. Recorda que les que no tenen terme independent ($y=mx$) s'anomenen funcions lineals, i són el cas particular amb ordenada a l'origen $0$.",
   "enunciat": "$y=-9x$",
   "opcions": [
    "$m=-9,\\ n=1$",
    "$m=-9,\\ n=0$",
    "$m=9,\\ n=0$",
    "$m=0,\\ n=-9$"
   ],
   "pistes": [
    "El pendent és el coeficient que acompanya la $x$; l'ordenada a l'origen és el terme que no té $x$ (si no n'hi ha cap d'escrit, l'ordenada és $0$).",
    "Compara $y=-9x$ amb $y=mx+n$ terme a terme: quin número fa de $m$? I quin terme hi falta?"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJRdWFuIGwnZXhwcmVzc2nDsyBubyB0w6kgY2FwIHRlcm1lIGluZGVwZW5kZW50IGVzY3JpdCAoY29tICR5PS05eCQpLCBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICQwJCwgbm8gJDEkOiBubyBoaSBoYSBjYXAgdGVybWUgcXVlIHN1bWFyLiIsICIiLCAiRWwgcGVuZGVudCBjb25zZXJ2YSBlbCBzZXUgc2lnbmUgdGFsIGNvbSBhcGFyZWl4IGEgbCdleHByZXNzacOzOiBubyBjYWwgY2Fudmlhci1sby4iLCAiRWwgcGVuZGVudCDDqXMgZWwgbm9tYnJlIHF1ZSBNVUxUSVBMSUNBIGxhICR4JCwgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50IChzZW5zZSAkeCQpOiBlc3RhbiBpbnRlcmNhbnZpYXRzLiJdLCAiZXJyIjogWyJPUkRFTkFEQV9OVUxBX09CTElEQURBIiwgIiIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIlBFTkRFTlRfT1JERU5BREFfSU5URVJDQU5WSUFUUyJdLCAicmVzIjogWyJBICR5PW14K24kLCBlbCBwZW5kZW50IMOpcyAkbSQgaSBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzICRuJC4iLCAiJHk9LTl4JCB0w6kgJG09LTkkIGkgJG49MCQuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Recta de pendent -9 i ordenada a l'origen 0.</title><line class=\"fig-graella\" x1=\"46.5\" y1=\"190.0\" x2=\"46.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"78.3\" y1=\"190.0\" x2=\"78.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"141.7\" y1=\"190.0\" x2=\"141.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"173.5\" y1=\"190.0\" x2=\"173.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"173.5\" x2=\"190.0\" y2=\"173.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"141.7\" x2=\"190.0\" y2=\"141.7\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"78.3\" x2=\"190.0\" y2=\"78.3\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"46.5\" x2=\"190.0\" y2=\"46.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"110.0\" x2=\"190.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"110.0\" y1=\"190.0\" x2=\"110.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 110.0 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 110.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"124\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"112\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"46.5\" y=\"202\">-2</text><text x=\"78.3\" y=\"202\">-1</text><text x=\"110.0\" y=\"202\">0</text><text x=\"141.7\" y=\"202\">1</text><text x=\"173.5\" y=\"202\">2</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"177.0\">-2</text><text x=\"24.0\" y=\"145.2\">-1</text><text x=\"24.0\" y=\"113.5\">0</text><text x=\"24.0\" y=\"81.8\">1</text><text x=\"24.0\" y=\"50.0\">2</text></g><path d=\"M 101.1 30.0 L 102.0 38.0 L 104.7 62.0 L 107.3 86.0 L 110.0 110.0 L 112.7 134.0 L 115.3 158.0 L 118.0 182.0 L 118.9 190.0\" fill=\"none\" stroke=\"var(--fig-marca, #B3453C)\" stroke-width=\"2.2\"/></svg>"
  },
  {
   "id": "208a",
   "ex": 208,
   "ap": "a",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=12x-1$",
   "opcions": [
    "No es pot saber sense representar-la",
    "Constant",
    "Creixent",
    "Decreixent"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent.",
    "A $y=12x-1$, quin número multiplica la $x$? Mira'n el signe."
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
   "dif": 2,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=\\dfrac{x}{6}+3$",
   "opcions": [
    "No es pot saber sense representar-la",
    "Decreixent",
    "Creixent",
    "Constant"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent.",
    "$\\dfrac{x}{6}$ és el mateix que $\\dfrac16\\cdot x$: aquest és el pendent. Quin signe té?"
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
   "dif": 2,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=\\dfrac{x}{4}-2$",
   "opcions": [
    "Constant",
    "Creixent",
    "Decreixent",
    "No es pot saber sense representar-la"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent.",
    "$\\dfrac{x}{4}$ és el mateix que $\\dfrac14\\cdot x$: aquest és el pendent. Quin signe té?"
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
   "dif": 2,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=-7x+5$",
   "opcions": [
    "Creixent",
    "No es pot saber sense representar-la",
    "Decreixent",
    "Constant"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent.",
    "A $y=-7x+5$, quin número multiplica la $x$? El signe que porta al davant en forma part."
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
   "dif": 2,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=-\\dfrac{12x}{5}+1$",
   "opcions": [
    "Constant",
    "Decreixent",
    "No es pot saber sense representar-la",
    "Creixent"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent.",
    "$-\\dfrac{12x}{5}$ és el mateix que $-\\dfrac{12}{5}\\cdot x$: aquest és el pendent, amb el seu signe."
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
   "dif": 2,
   "encapcalament": "Indica, sense representar-la, si la funció afí és creixent o decreixent.",
   "enunciat": "$y=\\dfrac{7x}{10}$",
   "opcions": [
    "Constant",
    "Creixent",
    "No es pot saber sense representar-la",
    "Decreixent"
   ],
   "pistes": [
    "A $y=mx+n$, si el pendent $m$ és positiu la funció és creixent; si és negatiu, decreixent.",
    "$\\dfrac{7x}{10}$ és el mateix que $\\dfrac{7}{10}\\cdot x$: aquest és el pendent. Quin signe té?"
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
   "dif": 3,
   "encapcalament": "Calcula l'expressió algebraica de la funció afí que passa pels dos punts donats.",
   "enunciat": "Passa pels punts $(0,\\ -1)$ i $(1,\\ 1)$.",
   "opcions": [
    "$y=-x+2$",
    "$y=2x-1$",
    "$y=2x+1$",
    "$y=-2x-1$"
   ],
   "pistes": [
    "Com que un dels punts té $x=0$, la seva $y$ ja és directament l'ordenada a l'origen $n$; només cal calcular el pendent $m$ amb els dos punts.",
    "Pendent: $m=\\dfrac{y_2-y_1}{x_2-x_1}$. De $(0,\\ -1)$ a $(1,\\ 1)$, quant canvia la $y$ i quant avança la $x$? Resta en el mateix ordre a dalt i a baix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50IMOpcyBlbCBjb2VmaWNpZW50IHF1ZSBhY29tcGFueWEgbGEgJHgkOyBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50OiBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICIiLCAiTCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyBlbCB2YWxvciBkZSAkeSQgZGVsIHB1bnQgb24gJHg9MCQsIMOpcyBhIGRpciwgZGVsIHB1bnQgJCgwLFxcIC0xKSQgKHF1ZSBkb25hICRuPS0xJCksIG5vIGRlbCBwdW50ICQoMSxcXCAxKSQuIiwgIkVsIHBlbmRlbnQgZXMgY2FsY3VsYSBjb20gJG09XFxkZnJhY3t5XzIteV8xfXt4XzIteF8xfSQsIHJlc3RhbnQgc2VtcHJlIGVuIGVsIG1hdGVpeCBvcmRyZSBhbCBudW1lcmFkb3IgaSBhbCBkZW5vbWluYWRvcjogc2kgcydpbnZlcnRlaXggbCdvcmRyZSBlbiB1biBkZWxzIGRvcywgZWwgc2lnbmUgc3VydCBjYW52aWF0LiJdLCAiZXJyIjogWyJQRU5ERU5UX09SREVOQURBX0lOVEVSQ0FOVklBVFMiLCAiIiwgIlBVTlRfT1JERU5BREFfQ09ORk9TIiwgIlNJR05FX1BFTkRFTlRfSU5WRVJUSVQiXSwgInJlcyI6IFsiRWwgcGVuZGVudCDDqXMgJG09XFxkZnJhY3t5XzIteV8xfXt4XzIteF8xfT1cXGRmcmFjezEtKC0xKX17MS0oMCl9PTIkLiIsICJDb20gcXVlIGVsIHB1bnQgJCgwLFxcIC0xKSQgdMOpICR4PTAkLCBsYSBzZXZhICR5JCBqYSDDqXMgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuOiAkbj0tMSQuIiwgIkwnZXhwcmVzc2nDsyDDqXMgJHk9MngtMSQuIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Núvol de 2 punts.</title><line class=\"fig-graella\" x1=\"48.5\" y1=\"190.0\" x2=\"48.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"69.0\" y1=\"190.0\" x2=\"69.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"110.0\" y1=\"190.0\" x2=\"110.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"130.5\" y1=\"190.0\" x2=\"130.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"151.0\" y1=\"190.0\" x2=\"151.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"171.5\" y1=\"190.0\" x2=\"171.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"171.5\" x2=\"190.0\" y2=\"171.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"151.0\" x2=\"190.0\" y2=\"151.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"130.5\" x2=\"190.0\" y2=\"130.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"89.5\" x2=\"190.0\" y2=\"89.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"69.0\" x2=\"190.0\" y2=\"69.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"48.5\" x2=\"190.0\" y2=\"48.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"110.0\" x2=\"190.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"89.5\" y1=\"190.0\" x2=\"89.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 110.0 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 89.5 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"124\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"91.4872\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"48.5\" y=\"202\">-1</text><text x=\"89.5\" y=\"202\">0</text><text x=\"110.0\" y=\"202\">0,5</text><text x=\"130.5\" y=\"202\">1</text><text x=\"151.0\" y=\"202\">1,5</text><text x=\"171.5\" y=\"202\">2</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"27.6\" y=\"175.0\">-1,5</text><text x=\"27.6\" y=\"154.5\">-1</text><text x=\"27.6\" y=\"134.0\">-0,5</text><text x=\"27.6\" y=\"113.5\">0</text><text x=\"27.6\" y=\"93.0\">0,5</text><text x=\"27.6\" y=\"72.5\">1</text><text x=\"27.6\" y=\"52.0\">1,5</text></g><circle cx=\"89.5\" cy=\"151.0\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/><circle cx=\"130.5\" cy=\"69.0\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/></svg>"
  },
  {
   "id": "209b",
   "ex": 209,
   "ap": "b",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'expressió algebraica de la funció afí que passa pels dos punts donats.",
   "enunciat": "Passa pels punts $(0,\\ 1)$ i $(1,\\ 3)$.",
   "opcions": [
    "$y=2x+1$",
    "$y=x+2$",
    "$y=-2x+1$",
    "$y=2x+3$"
   ],
   "pistes": [
    "Com que un dels punts té $x=0$, la seva $y$ ja és directament l'ordenada a l'origen $n$; només cal calcular el pendent $m$ amb els dos punts.",
    "Pendent: $m=\\dfrac{y_2-y_1}{x_2-x_1}$. De $(0,\\ 1)$ a $(1,\\ 3)$, quant canvia la $y$ i quant avança la $x$? Resta en el mateix ordre a dalt i a baix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcGVuZGVudCDDqXMgZWwgY29lZmljaWVudCBxdWUgYWNvbXBhbnlhIGxhICR4JDsgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuIMOpcyBlbCB0ZXJtZSBpbmRlcGVuZGVudDogZXN0YW4gaW50ZXJjYW52aWF0cy4iLCAiRWwgcGVuZGVudCBlcyBjYWxjdWxhIGNvbSAkbT1cXGRmcmFje3lfMi15XzF9e3hfMi14XzF9JCwgcmVzdGFudCBzZW1wcmUgZW4gZWwgbWF0ZWl4IG9yZHJlIGFsIG51bWVyYWRvciBpIGFsIGRlbm9taW5hZG9yOiBzaSBzJ2ludmVydGVpeCBsJ29yZHJlIGVuIHVuIGRlbHMgZG9zLCBlbCBzaWduZSBzdXJ0IGNhbnZpYXQuIiwgIkwnb3JkZW5hZGEgYSBsJ29yaWdlbiDDqXMgZWwgdmFsb3IgZGUgJHkkIGRlbCBwdW50IG9uICR4PTAkLCDDqXMgYSBkaXIsIGRlbCBwdW50ICQoMCxcXCAxKSQgKHF1ZSBkb25hICRuPTEkKSwgbm8gZGVsIHB1bnQgJCgxLFxcIDMpJC4iXSwgImVyciI6IFsiIiwgIlBFTkRFTlRfT1JERU5BREFfSU5URVJDQU5WSUFUUyIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIlBVTlRfT1JERU5BREFfQ09ORk9TIl0sICJyZXMiOiBbIkVsIHBlbmRlbnQgw6lzICRtPVxcZGZyYWN7eV8yLXlfMX17eF8yLXhfMX09XFxkZnJhY3szLSgxKX17MS0oMCl9PTIkLiIsICJDb20gcXVlIGVsIHB1bnQgJCgwLFxcIDEpJCB0w6kgJHg9MCQsIGxhIHNldmEgJHkkIGphIMOpcyBsJ29yZGVuYWRhIGEgbCdvcmlnZW46ICRuPTEkLiIsICJMJ2V4cHJlc3Npw7Mgw6lzICR5PTJ4KzEkLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Núvol de 2 punts.</title><line class=\"fig-graella\" x1=\"56.7\" y1=\"190.0\" x2=\"56.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"127.8\" y1=\"190.0\" x2=\"127.8\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"163.3\" y1=\"190.0\" x2=\"163.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"127.8\" x2=\"190.0\" y2=\"127.8\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"92.2\" x2=\"190.0\" y2=\"92.2\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"56.7\" x2=\"190.0\" y2=\"56.7\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"163.3\" x2=\"190.0\" y2=\"163.3\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"92.2\" y1=\"190.0\" x2=\"92.2\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 163.3 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 92.2 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"177.333\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"94.2222\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"56.7\" y=\"202\">-1</text><text x=\"92.2\" y=\"202\">0</text><text x=\"127.8\" y=\"202\">1</text><text x=\"163.3\" y=\"202\">2</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"166.8\">0</text><text x=\"24.0\" y=\"131.3\">1</text><text x=\"24.0\" y=\"95.7\">2</text><text x=\"24.0\" y=\"60.2\">3</text></g><circle cx=\"92.2\" cy=\"127.8\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/><circle cx=\"127.8\" cy=\"56.7\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/></svg>"
  },
  {
   "id": "209c",
   "ex": 209,
   "ap": "c",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'expressió algebraica de la funció afí que passa pels dos punts donats.",
   "enunciat": "Passa pels punts $(0,\\ 1)$ i $(2,\\ 2)$.",
   "opcions": [
    "$y=\\dfrac{1}{2}x+2$",
    "$y=\\dfrac{1}{2}x+1$",
    "$y=x+\\dfrac{1}{2}$",
    "$y=-\\dfrac{1}{2}x+1$"
   ],
   "pistes": [
    "Com que un dels punts té $x=0$, la seva $y$ ja és directament l'ordenada a l'origen $n$; només cal calcular el pendent $m$ amb els dos punts.",
    "Pendent: $m=\\dfrac{y_2-y_1}{x_2-x_1}$. De $(0,\\ 1)$ a $(2,\\ 2)$, quant canvia la $y$ i quant avança la $x$? Resta en el mateix ordre a dalt i a baix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHZhbG9yIGRlICR5JCBkZWwgcHVudCBvbiAkeD0wJCwgw6lzIGEgZGlyLCBkZWwgcHVudCAkKDAsXFwgMSkkIChxdWUgZG9uYSAkbj0xJCksIG5vIGRlbCBwdW50ICQoMixcXCAyKSQuIiwgIiIsICJFbCBwZW5kZW50IMOpcyBlbCBjb2VmaWNpZW50IHF1ZSBhY29tcGFueWEgbGEgJHgkOyBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50OiBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICJFbCBwZW5kZW50IGVzIGNhbGN1bGEgY29tICRtPVxcZGZyYWN7eV8yLXlfMX17eF8yLXhfMX0kLCByZXN0YW50IHNlbXByZSBlbiBlbCBtYXRlaXggb3JkcmUgYWwgbnVtZXJhZG9yIGkgYWwgZGVub21pbmFkb3I6IHNpIHMnaW52ZXJ0ZWl4IGwnb3JkcmUgZW4gdW4gZGVscyBkb3MsIGVsIHNpZ25lIHN1cnQgY2FudmlhdC4iXSwgImVyciI6IFsiUFVOVF9PUkRFTkFEQV9DT05GT1MiLCAiIiwgIlBFTkRFTlRfT1JERU5BREFfSU5URVJDQU5WSUFUUyIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIkVsIHBlbmRlbnQgw6lzICRtPVxcZGZyYWN7eV8yLXlfMX17eF8yLXhfMX09XFxkZnJhY3syLSgxKX17Mi0oMCl9PVxcZGZyYWN7MX17Mn0kLiIsICJDb20gcXVlIGVsIHB1bnQgJCgwLFxcIDEpJCB0w6kgJHg9MCQsIGxhIHNldmEgJHkkIGphIMOpcyBsJ29yZGVuYWRhIGEgbCdvcmlnZW46ICRuPTEkLiIsICJMJ2V4cHJlc3Npw7Mgw6lzICR5PVxcZGZyYWN7MX17Mn14KzEkLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Núvol de 2 punts.</title><line class=\"fig-graella\" x1=\"48.5\" y1=\"190.0\" x2=\"48.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"89.5\" y1=\"190.0\" x2=\"89.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"110.0\" y1=\"190.0\" x2=\"110.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"130.5\" y1=\"190.0\" x2=\"130.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"151.0\" y1=\"190.0\" x2=\"151.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"171.5\" y1=\"190.0\" x2=\"171.5\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"171.5\" x2=\"190.0\" y2=\"171.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"130.5\" x2=\"190.0\" y2=\"130.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"110.0\" x2=\"190.0\" y2=\"110.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"89.5\" x2=\"190.0\" y2=\"89.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"69.0\" x2=\"190.0\" y2=\"69.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"48.5\" x2=\"190.0\" y2=\"48.5\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"151.0\" x2=\"190.0\" y2=\"151.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"69.0\" y1=\"190.0\" x2=\"69.0\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 151.0 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 69.0 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"165.026\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"70.9744\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"48.5\" y=\"202\">-0,5</text><text x=\"69.0\" y=\"202\">0</text><text x=\"89.5\" y=\"202\">0,5</text><text x=\"110.0\" y=\"202\">1</text><text x=\"130.5\" y=\"202\">1,5</text><text x=\"151.0\" y=\"202\">2</text><text x=\"171.5\" y=\"202\">2,5</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"27.6\" y=\"175.0\">-0,5</text><text x=\"27.6\" y=\"154.5\">0</text><text x=\"27.6\" y=\"134.0\">0,5</text><text x=\"27.6\" y=\"113.5\">1</text><text x=\"27.6\" y=\"93.0\">1,5</text><text x=\"27.6\" y=\"72.5\">2</text><text x=\"27.6\" y=\"52.0\">2,5</text></g><circle cx=\"69.0\" cy=\"110.0\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/><circle cx=\"151.0\" cy=\"69.0\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/></svg>"
  },
  {
   "id": "209d",
   "ex": 209,
   "ap": "d",
   "bloc": "funcions_lineals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula l'expressió algebraica de la funció afí que passa pels dos punts donats.",
   "enunciat": "Passa pels punts $(0,\\ -1)$ i $(1,\\ -3)$.",
   "opcions": [
    "$y=-x-2$",
    "$y=-2x-1$",
    "$y=2x-1$",
    "$y=-2x-3$"
   ],
   "pistes": [
    "Com que un dels punts té $x=0$, la seva $y$ ja és directament l'ordenada a l'origen $n$; només cal calcular el pendent $m$ amb els dos punts.",
    "Pendent: $m=\\dfrac{y_2-y_1}{x_2-x_1}$. De $(0,\\ -1)$ a $(1,\\ -3)$, quant canvia la $y$ i quant avança la $x$? Resta en el mateix ordre a dalt i a baix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwZW5kZW50IMOpcyBlbCBjb2VmaWNpZW50IHF1ZSBhY29tcGFueWEgbGEgJHgkOyBsJ29yZGVuYWRhIGEgbCdvcmlnZW4gw6lzIGVsIHRlcm1lIGluZGVwZW5kZW50OiBlc3RhbiBpbnRlcmNhbnZpYXRzLiIsICIiLCAiRWwgcGVuZGVudCBlcyBjYWxjdWxhIGNvbSAkbT1cXGRmcmFje3lfMi15XzF9e3hfMi14XzF9JCwgcmVzdGFudCBzZW1wcmUgZW4gZWwgbWF0ZWl4IG9yZHJlIGFsIG51bWVyYWRvciBpIGFsIGRlbm9taW5hZG9yOiBzaSBzJ2ludmVydGVpeCBsJ29yZHJlIGVuIHVuIGRlbHMgZG9zLCBlbCBzaWduZSBzdXJ0IGNhbnZpYXQuIiwgIkwnb3JkZW5hZGEgYSBsJ29yaWdlbiDDqXMgZWwgdmFsb3IgZGUgJHkkIGRlbCBwdW50IG9uICR4PTAkLCDDqXMgYSBkaXIsIGRlbCBwdW50ICQoMCxcXCAtMSkkIChxdWUgZG9uYSAkbj0tMSQpLCBubyBkZWwgcHVudCAkKDEsXFwgLTMpJC4iXSwgImVyciI6IFsiUEVOREVOVF9PUkRFTkFEQV9JTlRFUkNBTlZJQVRTIiwgIiIsICJTSUdORV9QRU5ERU5UX0lOVkVSVElUIiwgIlBVTlRfT1JERU5BREFfQ09ORk9TIl0sICJyZXMiOiBbIkVsIHBlbmRlbnQgw6lzICRtPVxcZGZyYWN7eV8yLXlfMX17eF8yLXhfMX09XFxkZnJhY3stMy0oLTEpfXsxLSgwKX09LTIkLiIsICJDb20gcXVlIGVsIHB1bnQgJCgwLFxcIC0xKSQgdMOpICR4PTAkLCBsYSBzZXZhICR5JCBqYSDDqXMgbCdvcmRlbmFkYSBhIGwnb3JpZ2VuOiAkbj0tMSQuIiwgIkwnZXhwcmVzc2nDsyDDqXMgJHk9LTJ4LTEkLiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 220 220\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Núvol de 2 punts.</title><line class=\"fig-graella\" x1=\"56.7\" y1=\"190.0\" x2=\"56.7\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"127.8\" y1=\"190.0\" x2=\"127.8\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"163.3\" y1=\"190.0\" x2=\"163.3\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"163.3\" x2=\"190.0\" y2=\"163.3\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"127.8\" x2=\"190.0\" y2=\"127.8\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-graella\" x1=\"30.0\" y1=\"92.2\" x2=\"190.0\" y2=\"92.2\" stroke=\"currentColor\" stroke-width=\"0.5\" opacity=\"0.18\"/><line class=\"fig-eix\" x1=\"30.0\" y1=\"56.7\" x2=\"190.0\" y2=\"56.7\" stroke=\"currentColor\" stroke-width=\"1.1\"/><line class=\"fig-eix\" x1=\"92.2\" y1=\"190.0\" x2=\"92.2\" y2=\"30.0\" stroke=\"currentColor\" stroke-width=\"1.1\"/><path d=\"M 196.0 56.7 l -6 -3 v 6 z\" fill=\"currentColor\"/><path d=\"M 92.2 24.0 l -3 6 h 6 z\" fill=\"currentColor\"/><text x=\"202\" y=\"70.6667\" text-anchor=\"start\" class=\"fig-etq petita\">x</text><text x=\"94.2222\" y=\"18\" text-anchor=\"start\" class=\"fig-etq petita\">y</text><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"middle\"><text x=\"56.7\" y=\"202\">-1</text><text x=\"92.2\" y=\"202\">0</text><text x=\"127.8\" y=\"202\">1</text><text x=\"163.3\" y=\"202\">2</text></g><g class=\"fig-etq petita fig-etq-marc\" text-anchor=\"end\"><text x=\"24.0\" y=\"166.8\">-3</text><text x=\"24.0\" y=\"131.3\">-2</text><text x=\"24.0\" y=\"95.7\">-1</text><text x=\"24.0\" y=\"60.2\">0</text></g><circle cx=\"92.2\" cy=\"92.2\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/><circle cx=\"127.8\" cy=\"163.3\" r=\"3.6\" fill=\"var(--fig-marca, #B3453C)\"/></svg>"
  }
 ]
};
