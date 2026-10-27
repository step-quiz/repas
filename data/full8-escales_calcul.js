/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 8,
 "titol": "Full 8 — Teorema de Tales",
 "subtitol": "Teorema de Tales, triangles semblants, escales i aplicacions de la semblança a problemes d'altures i distàncies inaccessibles.",
 "blocs": [
  {
   "id": "tales",
   "titol": "Teorema de Tales",
   "descripcio": "Segments proporcionals entre rectes paral·leles i triangles en posició de Tales.",
   "items": [
    "358a",
    "358b",
    "152a",
    "152b",
    "152c",
    "152e",
    "152f",
    "153a",
    "153b",
    "153c"
   ]
  },
  {
   "id": "semblanca",
   "titol": "Semblança de triangles",
   "descripcio": "Raó de semblança i els tres criteris per determinar si dos triangles són semblants.",
   "items": [
    "359a",
    "359b",
    "154a",
    "154b",
    "154c",
    "154d",
    "155a",
    "155b",
    "155c",
    "155d",
    "155e"
   ]
  },
  {
   "id": "escales",
   "titol": "Escales",
   "descripcio": "Escala numèrica i problemes de mapes i plànols.",
   "items": [
    "360a",
    "360b",
    "156a",
    "156b",
    "158",
    "159",
    "160a",
    "160b"
   ]
  },
  {
   "id": "escales_calcul",
   "titol": "Càlcul amb escales",
   "descripcio": "Del plànol a la realitat i al revés, trobar l'escala, i escales amb canvi d'unitats.",
   "items": [
    "361a",
    "361b",
    "285a",
    "285b",
    "285c",
    "286a",
    "286b",
    "286c",
    "286d",
    "287a",
    "287b",
    "287c",
    "288a",
    "288b",
    "288c",
    "289"
   ]
  },
  {
   "id": "semblanca_arees",
   "titol": "Raó de semblança, àrees i volums",
   "descripcio": "Si les longituds es multipliquen per k, les àrees ho fan per k² i els volums per k³.",
   "items": [
    "362a",
    "362b",
    "290a",
    "290b",
    "290c",
    "291a",
    "291b",
    "291c",
    "292a",
    "292b",
    "293a",
    "293b",
    "294a",
    "294b",
    "294c"
   ]
  },
  {
   "id": "aplicacions",
   "titol": "Aplicacions de la semblança",
   "descripcio": "Ombres, reflexos i alçades o distàncies inaccessibles.",
   "items": [
    "161",
    "162",
    "163",
    "164",
    "165",
    "166",
    "167",
    "168",
    "169"
   ],
   "avancat": true
  }
 ],
 "errors": {
  "DIVISIO_OBLIDADA": "T'has quedat amb la suma sense dividir-la entre el nombre de dades. La variància és una MITJANA de quadrats, no una suma.",
  "ESCALA_INVERTIDA": "Has fet servir l'escala del revés. A l'escala $a:b$, el primer nombre és el DIBUIX i el segon la REALITAT: si és una reducció, la mesura real sempre surt més gran que la del plànol.",
  "ESCALA_NO_APLICADA": "Has donat la mesura tal com surt al plànol (o a la realitat) sense passar-la per l'escala. Les dues mesures només coincideixen si l'escala és $1:1$.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "POTENCIA_10": "El denominador d'un decimal exacte és una potència de $10$ amb tants zeros com xifres decimals hi ha. Torna-les a comptar.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "UNITATS_NO_CONVERTIDES": "Has barrejat unitats diferents en la mateixa operació. Passa-ho tot a la mateixa unitat abans de calcular res."
 },
 "items": [
  {
   "id": "361a",
   "ex": 361,
   "ap": "a",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mesura real a partir de la mesura al plànol i de l'escala. Dona-la en cm.",
   "enunciat": "Escala $1:100$. Un segment fa $3$ cm al plànol.",
   "opcions": [
    "$103$ cm",
    "$0{,}03$ cm",
    "$3$ cm",
    "$300$ cm"
   ],
   "pistes": [
    "$1:100$ vol dir que $1$ cm al plànol són $100$ cm de debò.",
    "$3\\cdot100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgc3VtYXQgJDMrMTAwJC4gTCdlc2NhbGEgZXMgTVVMVElQTElDQTogJDNcXGNkb3QxMDAkLiIsICJIYXMgZGl2aWRpdCBwZXIgJDEwMCQuIEEgbCdlc2NhbGEgJDE6MTAwJCwgY2FkYSBjbSBkZWwgcGzDoG5vbCBzw7NuICQxMDAkIGNtIGRlIGxhIHJlYWxpdGF0OiBsYSBtZXN1cmEgcmVhbCDDqXMgTcOJUyBncmFuLiIsICJBcXVlc3RhIMOpcyBsYSBtZXN1cmEgZGVsIHBsw6Bub2wuIENhbCBtdWx0aXBsaWNhci1sYSBwZXIgJDEwMCQuIiwgIiJdLCAiZXJyIjogWyJQUk9EVUNURV9QRVJfU1VNQSIsICJFU0NBTEFfSU5WRVJUSURBIiwgIkVTQ0FMQV9OT19BUExJQ0FEQSIsICIiXSwgInJlcyI6IFsiJDNcXGNkb3QxMDA9MzAwJCBjbSJdfQ=="
  },
  {
   "id": "361b",
   "ex": 361,
   "ap": "b",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Calcula la mesura real a partir de la mesura al plànol i de l'escala. Dona-la en cm.",
   "enunciat": "Escala $1:1\\,000$. Un segment fa $5$ cm al plànol.",
   "opcions": [
    "$1\\,005$ cm",
    "$5\\,000$ cm",
    "$5$ cm",
    "$0{,}005$ cm"
   ],
   "pistes": [
    "$1:1\\,000$ vol dir que $1$ cm al plànol són $1\\,000$ cm de debò.",
    "$5\\cdot1\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgc3VtYXQgJDUrMVxcLDAwMCQuIEwnZXNjYWxhIGVzIE1VTFRJUExJQ0E6ICQ1XFxjZG90MVxcLDAwMCQuIiwgIiIsICJBcXVlc3RhIMOpcyBsYSBtZXN1cmEgZGVsIHBsw6Bub2wuIENhbCBtdWx0aXBsaWNhci1sYSBwZXIgJDFcXCwwMDAkLiIsICJIYXMgZGl2aWRpdCBwZXIgJDFcXCwwMDAkLiBBIGwnZXNjYWxhICQxOjFcXCwwMDAkLCBjYWRhIGNtIGRlbCBwbMOgbm9sIHPDs24gJDFcXCwwMDAkIGNtIGRlIGxhIHJlYWxpdGF0OiBsYSBtZXN1cmEgcmVhbCDDqXMgTcOJUyBncmFuLiJdLCAiZXJyIjogWyJQUk9EVUNURV9QRVJfU1VNQSIsICIiLCAiRVNDQUxBX05PX0FQTElDQURBIiwgIkVTQ0FMQV9JTlZFUlRJREEiXSwgInJlcyI6IFsiJDVcXGNkb3QxXFwsMDAwPTVcXCwwMDAkIGNtIl19"
  },
  {
   "id": "285a",
   "ex": 285,
   "ap": "a",
   "bloc": "escales_calcul",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Què vol dir aquesta escala?",
   "enunciat": "Escala $1:50$.",
   "opcions": [
    "$1$ cm al plànol són $50$ m de debò.",
    "$1$ cm al plànol són $50$ cm de debò.",
    "$50$ cm al plànol són $1$ cm de debò.",
    "El dibuix és $50$ vegades més gran que la realitat."
   ],
   "pistes": [
    "A l'escala $a:b$, el primer nombre és el dibuix i el segon, la realitat.",
    "Les dues mesures van en la mateixa unitat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJMJ2VzY2FsYSByZWxhY2lvbmEgbWVzdXJlcyBlbiBsYSBNQVRFSVhBIHVuaXRhdDogJDEkIGNtIGRlIHBsw6Bub2wgc8OzbiAkNTAkIGNtIGRlIHJlYWxpdGF0LCBxdWUgZGVzcHLDqXMgZXMgcG9kZW4gcGFzc2FyIGEgbWV0cmVzIHNpIGNvbnbDqSAoJDB7LH01JCBtKS4iLCAiIiwgIsOJcyBhbCByZXbDqXMuIEEgbCdlc2NhbGEgJDE6NTAkLCBlbCAkMSQgw6lzIGVsIHF1ZSBoaSBoYSBESUJVSVhBVCBpIGVsICQ1MCQgw6lzIGxhIHJlYWxpdGF0OiBlbCBkaWJ1aXggw6lzIG3DqXMgcGV0aXQgcXVlIGwnb3JpZ2luYWwuIiwgIlVuYSBlc2NhbGEgJDE6NTAkIMOpcyBkZSBSRURVQ0NJw5M6IGVsIGRpYnVpeCDDqXMgbcOpcyBwZXRpdC4gUGVycXXDqCBmb3MgZCdhbXBsaWFjacOzLCBlbCBwcmltZXIgbm9tYnJlIGhhdXJpYSBkZSBzZXIgZWwgbcOpcyBncmFuICgkNTA6MSQpLiJdLCAiZXJyIjogWyJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIiIsICJFU0NBTEFfSU5WRVJUSURBIiwgIkVTQ0FMQV9JTlZFUlRJREEiXSwgInJlcyI6IFsiJDE6NTAkIHZvbCBkaXIgcXVlIGNhZGEgJDEkIGNtIGRlbCBkaWJ1aXggY29ycmVzcG9uIGEgJDUwJCBjbSByZWFscyIsICLDiXMgYSBkaXIsICQweyx9NSQgbSBkZSBkZWLDsiJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 50 cm de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">0</text><text x=\"64.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">1 cm</text><text x=\"108.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">2 cm</text><text x=\"152.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">3 cm</text><text x=\"196.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 50 cm</text></svg>"
  },
  {
   "id": "285b",
   "ex": 285,
   "ap": "b",
   "bloc": "escales_calcul",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Què vol dir aquesta escala?",
   "enunciat": "Escala $1:25\\,000$.",
   "opcions": [
    "$1$ cm al plànol són $25000$ cm de debò.",
    "$25000$ cm al plànol són $1$ cm de debò.",
    "$1$ cm al plànol són $25000$ m de debò.",
    "El dibuix és $25000$ vegades més gran que la realitat."
   ],
   "pistes": [
    "A l'escala $a:b$, el primer nombre és el dibuix i el segon, la realitat.",
    "Les dues mesures van en la mateixa unitat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiw4lzIGFsIHJldsOpcy4gQSBsJ2VzY2FsYSAkMToyNTAwMCQsIGVsICQxJCDDqXMgZWwgcXVlIGhpIGhhIERJQlVJWEFUIGkgZWwgJDI1MDAwJCDDqXMgbGEgcmVhbGl0YXQ6IGVsIGRpYnVpeCDDqXMgbcOpcyBwZXRpdCBxdWUgbCdvcmlnaW5hbC4iLCAiTCdlc2NhbGEgcmVsYWNpb25hIG1lc3VyZXMgZW4gbGEgTUFURUlYQSB1bml0YXQ6ICQxJCBjbSBkZSBwbMOgbm9sIHPDs24gJDI1MDAwJCBjbSBkZSByZWFsaXRhdCwgcXVlIGRlc3Byw6lzIGVzIHBvZGVuIHBhc3NhciBhIG1ldHJlcyBzaSBjb252w6kgKCQyNTAkIG0pLiIsICJVbmEgZXNjYWxhICQxOjI1MDAwJCDDqXMgZGUgUkVEVUNDScOTOiBlbCBkaWJ1aXggw6lzIG3DqXMgcGV0aXQuIFBlcnF1w6ggZm9zIGQnYW1wbGlhY2nDsywgZWwgcHJpbWVyIG5vbWJyZSBoYXVyaWEgZGUgc2VyIGVsIG3DqXMgZ3JhbiAoJDI1MDAwOjEkKS4iXSwgImVyciI6IFsiIiwgIkVTQ0FMQV9JTlZFUlRJREEiLCAiVU5JVEFUU19OT19DT05WRVJUSURFUyIsICJFU0NBTEFfSU5WRVJUSURBIl0sICJyZXMiOiBbIiQxOjI1MDAwJCB2b2wgZGlyIHF1ZSBjYWRhICQxJCBjbSBkZWwgZGlidWl4IGNvcnJlc3BvbiBhICQyNTAwMCQgY20gcmVhbHMiLCAiw4lzIGEgZGlyLCAkMjUwJCBtIGRlIGRlYsOyIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 250 m de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">0</text><text x=\"64.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">1 cm</text><text x=\"108.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">2 cm</text><text x=\"152.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">3 cm</text><text x=\"196.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 250 m</text></svg>"
  },
  {
   "id": "285c",
   "ex": 285,
   "ap": "c",
   "bloc": "escales_calcul",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Què vol dir aquesta escala?",
   "enunciat": "Escala $1:200$.",
   "opcions": [
    "$1$ cm al plànol són $200$ m de debò.",
    "$200$ cm al plànol són $1$ cm de debò.",
    "$1$ cm al plànol són $200$ cm de debò.",
    "El dibuix és $200$ vegades més gran que la realitat."
   ],
   "pistes": [
    "A l'escala $a:b$, el primer nombre és el dibuix i el segon, la realitat.",
    "Les dues mesures van en la mateixa unitat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2VzY2FsYSByZWxhY2lvbmEgbWVzdXJlcyBlbiBsYSBNQVRFSVhBIHVuaXRhdDogJDEkIGNtIGRlIHBsw6Bub2wgc8OzbiAkMjAwJCBjbSBkZSByZWFsaXRhdCwgcXVlIGRlc3Byw6lzIGVzIHBvZGVuIHBhc3NhciBhIG1ldHJlcyBzaSBjb252w6kgKCQyJCBtKS4iLCAiw4lzIGFsIHJldsOpcy4gQSBsJ2VzY2FsYSAkMToyMDAkLCBlbCAkMSQgw6lzIGVsIHF1ZSBoaSBoYSBESUJVSVhBVCBpIGVsICQyMDAkIMOpcyBsYSByZWFsaXRhdDogZWwgZGlidWl4IMOpcyBtw6lzIHBldGl0IHF1ZSBsJ29yaWdpbmFsLiIsICIiLCAiVW5hIGVzY2FsYSAkMToyMDAkIMOpcyBkZSBSRURVQ0NJw5M6IGVsIGRpYnVpeCDDqXMgbcOpcyBwZXRpdC4gUGVycXXDqCBmb3MgZCdhbXBsaWFjacOzLCBlbCBwcmltZXIgbm9tYnJlIGhhdXJpYSBkZSBzZXIgZWwgbcOpcyBncmFuICgkMjAwOjEkKS4iXSwgImVyciI6IFsiVU5JVEFUU19OT19DT05WRVJUSURFUyIsICJFU0NBTEFfSU5WRVJUSURBIiwgIiIsICJFU0NBTEFfSU5WRVJUSURBIl0sICJyZXMiOiBbIiQxOjIwMCQgdm9sIGRpciBxdWUgY2FkYSAkMSQgY20gZGVsIGRpYnVpeCBjb3JyZXNwb24gYSAkMjAwJCBjbSByZWFscyIsICLDiXMgYSBkaXIsICQyJCBtIGRlIGRlYsOyIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 2 m de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">0</text><text x=\"64.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">1 cm</text><text x=\"108.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">2 cm</text><text x=\"152.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">3 cm</text><text x=\"196.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 2 m</text></svg>"
  },
  {
   "id": "286a",
   "ex": 286,
   "ap": "a",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un plànol està fet a escala $1:25\\,000$. Quina distància real correspon a cada mesura del plànol?",
   "enunciat": "$4$ cm al plànol.",
   "opcions": [
    "$0{,}00016$ km",
    "$0{,}001$ km",
    "$100000$ m",
    "$1$ km"
   ],
   "pistes": [
    "Multiplica la mesura del plànol, $4$ cm, per $25\\,000$: dona centímetres reals.",
    "Per passar de centímetres a quilòmetres, divideix entre $100\\,000$, perquè $1$ km $=100\\,000$ cm."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBwZXIgbCdlc2NhbGEgZW4gY29tcHRlcyBkZSBtdWx0aXBsaWNhci4gQ29tIHF1ZSBlbCBwbMOgbm9sIMOpcyB1bmEgcmVkdWNjacOzLCBsYSBkaXN0w6BuY2lhIHJlYWwgaGEgZGUgc2VyIE3DiVMgZ3JhbiBxdWUgbGEgZGVsIHBsw6Bub2wuIiwgIkhhcyBkZXNwbGHDp2F0IG1hbGFtZW50IGxhIGNvbWEgZW4gcGFzc2FyIGRlIGNlbnTDrW1ldHJlcyBhIHF1aWzDsm1ldHJlcy4gUmVjb3JkYTogJDEkIGttICQ9MTAwXFwsMDAwJCBjbS4iLCAiQXF1ZXN0IG5vbWJyZSBzw7NuIGNlbnTDrW1ldHJlcywgbm8gbWV0cmVzOiAkMTAwMDAwJCBjbSBzw7NuICQxMDAwJCBtLCBpIGFpeMOyIHPDs24gJDEkIGttLiIsICIiXSwgImVyciI6IFsiRVNDQUxBX0lOVkVSVElEQSIsICJQT1RFTkNJQV8xMCIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIiJdLCAicmVzIjogWyIkNFxcY2RvdDI1MDAwPTEwMDAwMCQgY20iLCAiJFxcZGZyYWN7MTAwMDAwfXsxMDAwMDB9PTEkIGttIl19"
  },
  {
   "id": "286b",
   "ex": 286,
   "ap": "b",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un plànol està fet a escala $1:25\\,000$. Quina distància real correspon a cada mesura del plànol?",
   "enunciat": "$12$ cm al plànol.",
   "opcions": [
    "$0{,}003$ km",
    "$3$ km",
    "$300000$ m",
    "$0{,}00048$ km"
   ],
   "pistes": [
    "Multiplica la mesura del plànol, $12$ cm, per $25\\,000$: dona centímetres reals.",
    "Per passar de centímetres a quilòmetres, divideix entre $100\\,000$, perquè $1$ km $=100\\,000$ cm."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGVzcGxhw6dhdCBtYWxhbWVudCBsYSBjb21hIGVuIHBhc3NhciBkZSBjZW50w61tZXRyZXMgYSBxdWlsw7JtZXRyZXMuIFJlY29yZGE6ICQxJCBrbSAkPTEwMFxcLDAwMCQgY20uIiwgIiIsICJBcXVlc3Qgbm9tYnJlIHPDs24gY2VudMOtbWV0cmVzLCBubyBtZXRyZXM6ICQzMDAwMDAkIGNtIHPDs24gJDMwMDAkIG0sIGkgYWl4w7Igc8OzbiAkMyQga20uIiwgIkhhcyBkaXZpZGl0IHBlciBsJ2VzY2FsYSBlbiBjb21wdGVzIGRlIG11bHRpcGxpY2FyLiBDb20gcXVlIGVsIHBsw6Bub2wgw6lzIHVuYSByZWR1Y2Npw7MsIGxhIGRpc3TDoG5jaWEgcmVhbCBoYSBkZSBzZXIgTcOJUyBncmFuIHF1ZSBsYSBkZWwgcGzDoG5vbC4iXSwgImVyciI6IFsiUE9URU5DSUFfMTAiLCAiIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiRVNDQUxBX0lOVkVSVElEQSJdLCAicmVzIjogWyIkMTJcXGNkb3QyNTAwMD0zMDAwMDAkIGNtIiwgIiRcXGRmcmFjezMwMDAwMH17MTAwMDAwfT0zJCBrbSJdfQ=="
  },
  {
   "id": "286c",
   "ex": 286,
   "ap": "c",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un plànol està fet a escala $1:25\\,000$. Quina distància real correspon a cada mesura del plànol?",
   "enunciat": "$2{,}5$ cm al plànol.",
   "opcions": [
    "$62500$ m",
    "$0{,}625$ km",
    "$0{,}000625$ km",
    "$0{,}0001$ km"
   ],
   "pistes": [
    "Multiplica la mesura del plànol, $2{,}5$ cm, per $25\\,000$: dona centímetres reals.",
    "Per passar de centímetres a quilòmetres, divideix entre $100\\,000$, perquè $1$ km $=100\\,000$ cm."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3Qgbm9tYnJlIHPDs24gY2VudMOtbWV0cmVzLCBubyBtZXRyZXM6ICQ2MjUwMCQgY20gc8OzbiAkNjI1JCBtLCBpIGFpeMOyIHPDs24gJDB7LH02MjUkIGttLiIsICIiLCAiSGFzIGRlc3BsYcOnYXQgbWFsYW1lbnQgbGEgY29tYSBlbiBwYXNzYXIgZGUgY2VudMOtbWV0cmVzIGEgcXVpbMOybWV0cmVzLiBSZWNvcmRhOiAkMSQga20gJD0xMDBcXCwwMDAkIGNtLiIsICJIYXMgZGl2aWRpdCBwZXIgbCdlc2NhbGEgZW4gY29tcHRlcyBkZSBtdWx0aXBsaWNhci4gQ29tIHF1ZSBlbCBwbMOgbm9sIMOpcyB1bmEgcmVkdWNjacOzLCBsYSBkaXN0w6BuY2lhIHJlYWwgaGEgZGUgc2VyIE3DiVMgZ3JhbiBxdWUgbGEgZGVsIHBsw6Bub2wuIl0sICJlcnIiOiBbIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiIiwgIlBPVEVOQ0lBXzEwIiwgIkVTQ0FMQV9JTlZFUlRJREEiXSwgInJlcyI6IFsiJDJ7LH01XFxjZG90MjUwMDA9NjI1MDAkIGNtIiwgIiRcXGRmcmFjezYyNTAwfXsxMDAwMDB9PTB7LH02MjUkIGttIl19"
  },
  {
   "id": "286d",
   "ex": 286,
   "ap": "d",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un plànol està fet a escala $1:25\\,000$. Quina distància real correspon a cada mesura del plànol?",
   "enunciat": "$30$ cm al plànol.",
   "opcions": [
    "$0{,}0075$ km",
    "$0{,}0012$ km",
    "$750000$ m",
    "$7{,}5$ km"
   ],
   "pistes": [
    "Multiplica la mesura del plànol, $30$ cm, per $25\\,000$: dona centímetres reals.",
    "Per passar de centímetres a quilòmetres, divideix entre $100\\,000$, perquè $1$ km $=100\\,000$ cm."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZGVzcGxhw6dhdCBtYWxhbWVudCBsYSBjb21hIGVuIHBhc3NhciBkZSBjZW50w61tZXRyZXMgYSBxdWlsw7JtZXRyZXMuIFJlY29yZGE6ICQxJCBrbSAkPTEwMFxcLDAwMCQgY20uIiwgIkhhcyBkaXZpZGl0IHBlciBsJ2VzY2FsYSBlbiBjb21wdGVzIGRlIG11bHRpcGxpY2FyLiBDb20gcXVlIGVsIHBsw6Bub2wgw6lzIHVuYSByZWR1Y2Npw7MsIGxhIGRpc3TDoG5jaWEgcmVhbCBoYSBkZSBzZXIgTcOJUyBncmFuIHF1ZSBsYSBkZWwgcGzDoG5vbC4iLCAiQXF1ZXN0IG5vbWJyZSBzw7NuIGNlbnTDrW1ldHJlcywgbm8gbWV0cmVzOiAkNzUwMDAwJCBjbSBzw7NuICQ3NTAwJCBtLCBpIGFpeMOyIHPDs24gJDd7LH01JCBrbS4iLCAiIl0sICJlcnIiOiBbIlBPVEVOQ0lBXzEwIiwgIkVTQ0FMQV9JTlZFUlRJREEiLCAiVU5JVEFUU19OT19DT05WRVJUSURFUyIsICIiXSwgInJlcyI6IFsiJDMwXFxjZG90MjUwMDA9NzUwMDAwJCBjbSIsICIkXFxkZnJhY3s3NTAwMDB9ezEwMDAwMH09N3ssfTUkIGttIl19"
  },
  {
   "id": "287a",
   "ex": 287,
   "ap": "a",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un arquitecte dibuixa un plànol a escala $1:200$. Quina mesura ha de fer servir al plànol?",
   "enunciat": "Una paret de $8$ m.",
   "opcions": [
    "$160000$ cm",
    "$4$ cm",
    "$4$ m",
    "$0{,}04$ cm"
   ],
   "pistes": [
    "Passa els $8$ m a centímetres: $1$ m $=100$ cm.",
    "Al plànol tot es dibuixa $200$ vegades més petit: divideix entre $200$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgbXVsdGlwbGljYXQgcGVyICQyMDAkLiBQZXIgYW5hciBkZSBsYSByZWFsaXRhdCBhbCBwbMOgbm9sIGNhbCBESVZJRElSOiBlbCBkaWJ1aXggw6lzIG3DqXMgcGV0aXQuIiwgIiIsICJFbCBuw7ptZXJvIMOpcyBjb3JyZWN0ZSwgcGVyw7IgbGVzIHVuaXRhdHMgbm86IGFsIHBsw6Bub2wgZXMgZGlidWl4ZW4gY2VudMOtbWV0cmVzLCBubyBtZXRyZXMuIiwgIkhhcyBkaXZpZGl0IGVscyBtZXRyZXMgZGlyZWN0YW1lbnQuIFByaW1lciBjYWwgcGFzc2FyLWxvcyBhIGNlbnTDrW1ldHJlczogJDgkIG0gJD04MDAkIGNtLiJdLCAiZXJyIjogWyJFU0NBTEFfSU5WRVJUSURBIiwgIiIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiXSwgInJlcyI6IFsiJDgkIG0gJD04MDAkIGNtIiwgIiRcXGRmcmFjezgwMH17MjAwfT00JCBjbSJdfQ=="
  },
  {
   "id": "287b",
   "ex": 287,
   "ap": "b",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un arquitecte dibuixa un plànol a escala $1:200$. Quina mesura ha de fer servir al plànol?",
   "enunciat": "Una paret de $14$ m.",
   "opcions": [
    "$7$ m",
    "$0{,}07$ cm",
    "$280000$ cm",
    "$7$ cm"
   ],
   "pistes": [
    "Passa els $14$ m a centímetres: $1$ m $=100$ cm.",
    "Al plànol tot es dibuixa $200$ vegades més petit: divideix entre $200$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBuw7ptZXJvIMOpcyBjb3JyZWN0ZSwgcGVyw7IgbGVzIHVuaXRhdHMgbm86IGFsIHBsw6Bub2wgZXMgZGlidWl4ZW4gY2VudMOtbWV0cmVzLCBubyBtZXRyZXMuIiwgIkhhcyBkaXZpZGl0IGVscyBtZXRyZXMgZGlyZWN0YW1lbnQuIFByaW1lciBjYWwgcGFzc2FyLWxvcyBhIGNlbnTDrW1ldHJlczogJDE0JCBtICQ9MTQwMCQgY20uIiwgIkhhcyBtdWx0aXBsaWNhdCBwZXIgJDIwMCQuIFBlciBhbmFyIGRlIGxhIHJlYWxpdGF0IGFsIHBsw6Bub2wgY2FsIERJVklESVI6IGVsIGRpYnVpeCDDqXMgbcOpcyBwZXRpdC4iLCAiIl0sICJlcnIiOiBbIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiVU5JVEFUU19OT19DT05WRVJUSURFUyIsICJFU0NBTEFfSU5WRVJUSURBIiwgIiJdLCAicmVzIjogWyIkMTQkIG0gJD0xNDAwJCBjbSIsICIkXFxkZnJhY3sxNDAwfXsyMDB9PTckIGNtIl19"
  },
  {
   "id": "287c",
   "ex": 287,
   "ap": "c",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Un arquitecte dibuixa un plànol a escala $1:200$. Quina mesura ha de fer servir al plànol?",
   "enunciat": "Una paret de $2{,}4$ m.",
   "opcions": [
    "$1{,}2$ cm",
    "$1{,}2$ m",
    "$48000$ cm",
    "$0{,}012$ cm"
   ],
   "pistes": [
    "Passa els $2{,}4$ m a centímetres: $1$ m $=100$ cm.",
    "Al plànol tot es dibuixa $200$ vegades més petit: divideix entre $200$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgbsO6bWVybyDDqXMgY29ycmVjdGUsIHBlcsOyIGxlcyB1bml0YXRzIG5vOiBhbCBwbMOgbm9sIGVzIGRpYnVpeGVuIGNlbnTDrW1ldHJlcywgbm8gbWV0cmVzLiIsICJIYXMgbXVsdGlwbGljYXQgcGVyICQyMDAkLiBQZXIgYW5hciBkZSBsYSByZWFsaXRhdCBhbCBwbMOgbm9sIGNhbCBESVZJRElSOiBlbCBkaWJ1aXggw6lzIG3DqXMgcGV0aXQuIiwgIkhhcyBkaXZpZGl0IGVscyBtZXRyZXMgZGlyZWN0YW1lbnQuIFByaW1lciBjYWwgcGFzc2FyLWxvcyBhIGNlbnTDrW1ldHJlczogJDJ7LH00JCBtICQ9MjQwJCBjbS4iXSwgImVyciI6IFsiIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiRVNDQUxBX0lOVkVSVElEQSIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIl0sICJyZXMiOiBbIiQyeyx9NCQgbSAkPTI0MCQgY20iLCAiJFxcZGZyYWN7MjQwfXsyMDB9PTF7LH0yJCBjbSJdfQ=="
  },
  {
   "id": "288a",
   "ex": 288,
   "ap": "a",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'escala del dibuix.",
   "enunciat": "$4$ cm al dibuix corresponen a $2$ m de debò.",
   "opcions": [
    "$1:50$",
    "$1:200$",
    "$50:1$",
    "$1:0{,}50$"
   ],
   "pistes": [
    "Passa els $2$ m a centímetres, la mateixa unitat que els $4$ cm del dibuix.",
    "Divideix la mesura real entre la del dibuix: aquest quocient és el segon nombre de l'escala $1:\\ldots$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSDDqXMgbGEgbWVzdXJhIHJlYWwgZW4gY2VudMOtbWV0cmVzLCBubyBsJ2VzY2FsYS4gTCdlc2NhbGEgc3VydCBkZSBkaXZpZGlyLWxhIGVudHJlIGxhIG1lc3VyYSBkZWwgZGlidWl4LiIsICJMJ2hhcyBlc2NyaXRhIGRlbCByZXbDqXMuIEEgbCdlc2NhbGEsIGVsIHByaW1lciBub21icmUgw6lzIGVsIERJQlVJWCAocXVlIGFxdcOtIMOpcyBtw6lzIHBldGl0KSBpIGVsIHNlZ29uLCBsYSByZWFsaXRhdC4iLCAiSGFzIGNvbXBhcmF0ICQ0JCBhbWIgJDIkIHNlbnNlIHBhc3Nhci1obyB0b3QgYSBsYSBtYXRlaXhhIHVuaXRhdC4gJDIkIG0gc8OzbiAkMjAwJCBjbS4iXSwgImVyciI6IFsiIiwgIkRJVklTSU9fT0JMSURBREEiLCAiRVNDQUxBX0lOVkVSVElEQSIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIl0sICJyZXMiOiBbIiQyJCBtICQ9MjAwJCBjbSIsICIkXFxkZnJhY3syMDB9ezR9PTUwJCwgbyBzaWd1aSBlc2NhbGEgJDE6NTAkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 4 cm, representa 2 m de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">0</text><text x=\"64.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">4 cm</text><text x=\"108.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">8 cm</text><text x=\"152.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">12 cm</text><text x=\"196.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">16 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 2 m</text></svg>"
  },
  {
   "id": "288b",
   "ex": 288,
   "ap": "b",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'escala del dibuix.",
   "enunciat": "$3$ cm al dibuix corresponen a $12$ m de debò.",
   "opcions": [
    "$1:1200$",
    "$400:1$",
    "$1:400$",
    "$1:4{,}00$"
   ],
   "pistes": [
    "Passa els $12$ m a centímetres, la mateixa unitat que els $3$ cm del dibuix.",
    "Divideix la mesura real entre la del dibuix: aquest quocient és el segon nombre de l'escala $1:\\ldots$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3RhIMOpcyBsYSBtZXN1cmEgcmVhbCBlbiBjZW50w61tZXRyZXMsIG5vIGwnZXNjYWxhLiBMJ2VzY2FsYSBzdXJ0IGRlIGRpdmlkaXItbGEgZW50cmUgbGEgbWVzdXJhIGRlbCBkaWJ1aXguIiwgIkwnaGFzIGVzY3JpdGEgZGVsIHJldsOpcy4gQSBsJ2VzY2FsYSwgZWwgcHJpbWVyIG5vbWJyZSDDqXMgZWwgRElCVUlYIChxdWUgYXF1w60gw6lzIG3DqXMgcGV0aXQpIGkgZWwgc2Vnb24sIGxhIHJlYWxpdGF0LiIsICIiLCAiSGFzIGNvbXBhcmF0ICQzJCBhbWIgJDEyJCBzZW5zZSBwYXNzYXItaG8gdG90IGEgbGEgbWF0ZWl4YSB1bml0YXQuICQxMiQgbSBzw7NuICQxMjAwJCBjbS4iXSwgImVyciI6IFsiRElWSVNJT19PQkxJREFEQSIsICJFU0NBTEFfSU5WRVJUSURBIiwgIiIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIl0sICJyZXMiOiBbIiQxMiQgbSAkPTEyMDAkIGNtIiwgIiRcXGRmcmFjezEyMDB9ezN9PTQwMCQsIG8gc2lndWkgZXNjYWxhICQxOjQwMCQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 3 cm, representa 12 m de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">0</text><text x=\"64.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">3 cm</text><text x=\"108.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">6 cm</text><text x=\"152.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">9 cm</text><text x=\"196.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">12 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 12 m</text></svg>"
  },
  {
   "id": "288c",
   "ex": 288,
   "ap": "c",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Troba l'escala del dibuix.",
   "enunciat": "$8$ cm al dibuix corresponen a $4$ km de debò.",
   "opcions": [
    "$1:50000$",
    "$50000:1$",
    "$1:0{,}50$",
    "$1:400000$"
   ],
   "pistes": [
    "Passa els $4$ km a centímetres, la mateixa unitat que els $8$ cm del dibuix.",
    "Divideix la mesura real entre la del dibuix: aquest quocient és el segon nombre de l'escala $1:\\ldots$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTCdoYXMgZXNjcml0YSBkZWwgcmV2w6lzLiBBIGwnZXNjYWxhLCBlbCBwcmltZXIgbm9tYnJlIMOpcyBlbCBESUJVSVggKHF1ZSBhcXXDrSDDqXMgbcOpcyBwZXRpdCkgaSBlbCBzZWdvbiwgbGEgcmVhbGl0YXQuIiwgIkhhcyBjb21wYXJhdCAkOCQgYW1iICQ0JCBzZW5zZSBwYXNzYXItaG8gdG90IGEgbGEgbWF0ZWl4YSB1bml0YXQuICQ0JCBrbSBzw7NuICQ0MDAwMDAkIGNtLiIsICJBcXVlc3RhIMOpcyBsYSBtZXN1cmEgcmVhbCBlbiBjZW50w61tZXRyZXMsIG5vIGwnZXNjYWxhLiBMJ2VzY2FsYSBzdXJ0IGRlIGRpdmlkaXItbGEgZW50cmUgbGEgbWVzdXJhIGRlbCBkaWJ1aXguIl0sICJlcnIiOiBbIiIsICJFU0NBTEFfSU5WRVJUSURBIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiRElWSVNJT19PQkxJREFEQSJdLCAicmVzIjogWyIkNCQga20gJD00MDAwMDAkIGNtIiwgIiRcXGRmcmFjezQwMDAwMH17OH09NTAwMDAkLCBvIHNpZ3VpIGVzY2FsYSAkMTo1MDAwMCQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 8 cm, representa 4 km de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">0</text><text x=\"64.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">8 cm</text><text x=\"108.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">16 cm</text><text x=\"152.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">24 cm</text><text x=\"196.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">32 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 4 km</text></svg>"
  },
  {
   "id": "289",
   "ex": 289,
   "ap": "",
   "bloc": "escales_calcul",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "",
   "enunciat": "En un mapa a escala $1:150\\,000$, dues poblacions estan a $6{,}4$ cm. Un ciclista fa el recorregut a $24$ km/h. Quant triga?",
   "opcions": [
    "$2{,}5$ h",
    "$24$ min",
    "$9{,}6$ km",
    "$0{,}4$ h $=4$ min"
   ],
   "pistes": [
    "Troba primer la distància real en quilòmetres.",
    "Després, temps $=\\dfrac{\\text{distància}}{\\text{velocitat}}$, i passa'l a minuts."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBhbCByZXbDqXM6IGVsIHRlbXBzIMOpcyAkXFxkZnJhY3tcXHRleHR7ZGlzdMOgbmNpYX19e1xcdGV4dHt2ZWxvY2l0YXR9fSQsIG5vIGEgbCdpbnJldsOpcy4iLCAiIiwgIkFxdWVzdGEgw6lzIGxhIGRpc3TDoG5jaWEgcmVhbCwgcXVlIMOpcyBlbCBwcmltZXIgcGFzLiBFbmNhcmEgZmFsdGEgY2FsY3VsYXIgZWwgdGVtcHM6ICRcXGRmcmFjezl7LH02fXsyNH0kIGguIiwgIkVsIHRlbXBzIGVuIGhvcmVzIMOpcyAkMHssfTQkLCBpICQweyx9NCQgaCBubyBzw7NuICQ0JCBtaW4gc2luw7MgJDB7LH00XFxjZG90NjA9MjQkIG1pbi4iXSwgImVyciI6IFsiSU5WRVJUSURBIiwgIiIsICJQQVNfSU5URVJNRURJX1BFUl9SRVNQT1NUQSIsICJQT1RFTkNJQV8xMCJdLCAicmVzIjogWyIkNnssfTRcXGNkb3QxNTAwMDA9OTYwXFwsMDAwJCBjbSIsICIkOTYwMDAwJCBjbSAkPTl7LH02JCBrbSIsICIkdD1cXGRmcmFjezl7LH02fXsyNH09MHssfTQkIGggJD0weyx9NFxcY2RvdDYwPTI0JCBtaW4iXX0="
  }
 ]
};
