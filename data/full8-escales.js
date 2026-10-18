/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 8,
 "titol": "Full 8 — Teorema de Tales. Semblança",
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
  "CREUAMENT_INVERTIT": "Has creuat els termes al revés en aïllar la incògnita.",
  "ESCALA_INVERTIDA": "Has fet servir l'escala del revés. A l'escala $a:b$, el primer nombre és el DIBUIX i el segon la REALITAT: si és una reducció, la mesura real sempre surt més gran que la del plànol.",
  "ESCALA_NO_APLICADA": "Has donat la mesura tal com surt al plànol (o a la realitat) sense passar-la per l'escala. Les dues mesures només coincideixen si l'escala és $1:1$.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "POTENCIA_10": "El denominador d'un decimal exacte és una potència de $10$ amb tants zeros com xifres decimals hi ha. Torna-les a comptar.",
  "PRODUCTE_MAL": "Has multiplicat els dos nombres que et donaven en comptes d'aïllar la incògnita amb els productes creuats.",
  "TERME_OBLIDAT_OPERACIO": "T'has deixat algun terme pel camí en combinar els polinomis: revisa'ls tots un per un, grau a grau.",
  "UNITATS_NO_CONVERTIDES": "Has barrejat unitats diferents en la mateixa operació. Passa-ho tot a la mateixa unitat abans de calcular res."
 },
 "items": [
  {
   "id": "360a",
   "ex": 360,
   "ap": "a",
   "bloc": "escales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'escala numèrica que correspon a aquesta equivalència entre el dibuix i la realitat.",
   "enunciat": "$1$ cm al plànol són $50$ cm a la realitat.",
   "opcions": [
    "$1:50$",
    "$50:1$",
    "$1:5\\,000$",
    "$1:0{,}5$"
   ],
   "pistes": [
    "A l'escala $a:b$, el primer nombre és el dibuix i el segon, la realitat.",
    "Les dues mesures ja van en cm."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGZldCBzZXJ2aXIgbCdlc2NhbGEgZGVsIHJldsOpcy4gQSBsJ2VzY2FsYSAkYTpiJCwgZWwgcHJpbWVyIG5vbWJyZSDDqXMgZWwgRElCVUlYIGkgZWwgc2Vnb24gbGEgUkVBTElUQVQ6IHNpIMOpcyB1bmEgcmVkdWNjacOzLCBsYSBtZXN1cmEgcmVhbCBzZW1wcmUgc3VydCBtw6lzIGdyYW4gcXVlIGxhIGRlbCBwbMOgbm9sLiIsICJIYXMgYWZlZ2l0IHplcm9zLiBMZXMgZHVlcyBtZXN1cmVzIGphIHZhbiBlbiBjbTogbCdlc2NhbGEgw6lzIGRpcmVjdGFtZW50ICQxOjUwJC4iLCAiSGFzIHBhc3NhdCBlbHMgJDUwJCBjbSBhIG1ldHJlcyAoJDB7LH01JCBtKSBpIGhhcyBkZWl4YXQgbCckMSQgZW4gY20uIEVscyBkb3Mgbm9tYnJlcyBkZSBsJ2VzY2FsYSBoYW4gZCdhbmFyIGVuIGxhIG1hdGVpeGEgdW5pdGF0LiJdLCAiZXJyIjogWyIiLCAiRVNDQUxBX0lOVkVSVElEQSIsICJQT1RFTkNJQV8xMCIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIl0sICJyZXMiOiBbIkRpYnVpeCAkMSQgY20sIHJlYWxpdGF0ICQ1MCQgY206IGVzY2FsYSAkMTo1MCQuIl19"
  },
  {
   "id": "360b",
   "ex": 360,
   "ap": "b",
   "bloc": "escales",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Escriu l'escala numèrica que correspon a aquesta equivalència entre el dibuix i la realitat.",
   "enunciat": "$1$ cm al mapa són $1\\,000$ cm a la realitat.",
   "opcions": [
    "$1:10$",
    "$1:1\\,000$",
    "$1\\,000:1$",
    "$1:100$"
   ],
   "pistes": [
    "A l'escala $a:b$, el primer nombre és el dibuix i el segon, la realitat.",
    "Les dues mesures ja van en cm."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcGFzc2F0IGVscyAkMVxcLDAwMCQgY20gYSBtZXRyZXMgKCQxMCQgbSkgaSBoYXMgZGVpeGF0IGwnJDEkIGVuIGNtLiBFbHMgZG9zIG5vbWJyZXMgZGUgbCdlc2NhbGEgaGFuIGQnYW5hciBlbiBsYSBtYXRlaXhhIHVuaXRhdC4iLCAiIiwgIkhhcyBmZXQgc2VydmlyIGwnZXNjYWxhIGRlbCByZXbDqXMuIEEgbCdlc2NhbGEgJGE6YiQsIGVsIHByaW1lciBub21icmUgw6lzIGVsIERJQlVJWCBpIGVsIHNlZ29uIGxhIFJFQUxJVEFUOiBzaSDDqXMgdW5hIHJlZHVjY2nDsywgbGEgbWVzdXJhIHJlYWwgc2VtcHJlIHN1cnQgbcOpcyBncmFuIHF1ZSBsYSBkZWwgcGzDoG5vbC4iLCAiVCdoYXMgZGVpeGF0IHVuIHplcm8uIExlcyBkdWVzIG1lc3VyZXMgamEgdmFuIGVuIGNtOiBsJ2VzY2FsYSDDqXMgZGlyZWN0YW1lbnQgJDE6MVxcLDAwMCQuIl0sICJlcnIiOiBbIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiLCAiIiwgIkVTQ0FMQV9JTlZFUlRJREEiLCAiUE9URU5DSUFfMTAiXSwgInJlcyI6IFsiRGlidWl4ICQxJCBjbSwgcmVhbGl0YXQgJDFcXCwwMDAkIGNtOiBlc2NhbGEgJDE6MVxcLDAwMCQuIl19"
  },
  {
   "id": "156a",
   "ex": 156,
   "ap": "a",
   "bloc": "escales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Expressa mitjançant una escala numèrica (a més de l'escala gràfica, que trobaràs descrita a la resolució).",
   "enunciat": "$1$ cm en el plànol equival a $2$ km en la realitat. Quina és l'escala numèrica?",
   "opcions": [
    "$1:200\\,000$",
    "$1:2$",
    "$200\\,000:1$",
    "$1:20\\,000$"
   ],
   "pistes": [
    "Converteix els $2$ km a la mateixa unitat que el $1$ cm del dibuix: $2\\text{ km}=200\\,000$ cm.",
    "L'escala numèrica és $1:n$, amb $n$ la distància real en centímetres."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRmFsdGEgY29udmVydGlyIGVscyAkMiQga20gYSBjZW50w61tZXRyZXMgcGVycXXDqCBsZXMgZHVlcyBtZXN1cmVzIGRlIGwnZXNjYWxhIGVzdGlndWluIGVuIGxhIG1hdGVpeGEgdW5pdGF0OiAkMlxcdGV4dHsga219PTIwMFxcLDAwMCQgY20uIiwgIkwnZXNjYWxhIG51bcOocmljYSBzJ2VzY3JpdSBhbWIgZWwgZGlidWl4IHByaW1lciBpIGxhIHJlYWxpdGF0IGRlc3Byw6lzOiAkMTpuJCwgbm8gJG46MSQuIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIGNvbnZlcnRpciAkMiQga20gYSBtZXRyZXMgKCQyMDAkIG0pIGVuIGNvbXB0ZXMgZGUgYSBjZW50w61tZXRyZXM6IGNhbCAkMlxcdGV4dHsga219PTIwMFxcLDAwMCQgY20sIG5vICQyMFxcLDAwMCQuIl0sICJlcnIiOiBbIiIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIklOVkVSVElEQSIsICJQUk9EVUNURV9NQUwiXSwgInJlcyI6IFsiJDJcXHRleHR7IGttfT0yMDBcXCwwMDAkIGNtIiwgIkVzY2FsYSBudW3DqHJpY2E6ICQxOjIwMFxcLDAwMCQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 2 km de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">0</text><text x=\"64.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">1 cm</text><text x=\"108.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">2 cm</text><text x=\"152.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">3 cm</text><text x=\"196.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 2 km</text></svg>"
  },
  {
   "id": "156b",
   "ex": 156,
   "ap": "b",
   "bloc": "escales",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Expressa mitjançant una escala numèrica (a més de l'escala gràfica, que trobaràs descrita a la resolució).",
   "enunciat": "$1$ cm en el plànol equival a $50$ km en la realitat. Quina és l'escala numèrica?",
   "opcions": [
    "$5\\,000\\,000:1$",
    "$1:500\\,000$",
    "$1:5\\,000\\,000$",
    "$1:50$"
   ],
   "pistes": [
    "Converteix els $50$ km a la mateixa unitat que el $1$ cm del dibuix: $50\\text{ km}=5\\,000\\,000$ cm.",
    "L'escala numèrica és $1:n$, amb $n$ la distància real en centímetres."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2VzY2FsYSBudW3DqHJpY2Egcydlc2NyaXUgYW1iIGVsIGRpYnVpeCBwcmltZXIgaSBsYSByZWFsaXRhdCBkZXNwcsOpczogJDE6biQsIG5vICRuOjEkLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBjb252ZXJ0aXIgJDUwJCBrbSBhIG1ldHJlcyAoJDUwXFwsMDAwJCBtKSBlbiBjb21wdGVzIGRlIGEgY2VudMOtbWV0cmVzOiBjYWwgJDUwXFx0ZXh0eyBrbX09NVxcLDAwMFxcLDAwMCQgY20sIG5vICQ1MDBcXCwwMDAkLiIsICIiLCAiRmFsdGEgY29udmVydGlyIGVscyAkNTAkIGttIGEgY2VudMOtbWV0cmVzIHBlcnF1w6ggbGVzIGR1ZXMgbWVzdXJlcyBkZSBsJ2VzY2FsYSBlc3RpZ3VpbiBlbiBsYSBtYXRlaXhhIHVuaXRhdDogJDUwXFx0ZXh0eyBrbX09NVxcLDAwMFxcLDAwMCQgY20uIl0sICJlcnIiOiBbIklOVkVSVElEQSIsICJQUk9EVUNURV9NQUwiLCAiIiwgIlVOSVRBVFNfTk9fQ09OVkVSVElERVMiXSwgInJlcyI6IFsiJDUwXFx0ZXh0eyBrbX09NVxcLDAwMFxcLDAwMCQgY20iLCAiRXNjYWxhIG51bcOocmljYTogJDE6NVxcLDAwMFxcLDAwMCQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 216 76\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Regla d'escala gràfica: cada interval del dibuix, de 1 cm, representa 50 km de la realitat.</title><rect x=\"20.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><rect x=\"108.00\" y=\"18.00\" width=\"44.00\" height=\"24.00\" fill=\"var(--fig-plena, #E9F0F6)\"/><line x1=\"20.00\" y1=\"18.00\" x2=\"20.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"64.00\" y1=\"18.00\" x2=\"64.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"108.00\" y1=\"18.00\" x2=\"108.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"152.00\" y1=\"18.00\" x2=\"152.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"196.00\" y1=\"18.00\" x2=\"196.00\" y2=\"42.00\" stroke=\"currentColor\" stroke-width=\"2\"/><line x1=\"20.00\" y1=\"30.00\" x2=\"196.00\" y2=\"30.00\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">0</text><text x=\"64.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">1 cm</text><text x=\"108.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">2 cm</text><text x=\"152.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">3 cm</text><text x=\"196.0\" y=\"60.0\" text-anchor=\"middle\" class=\"fig-etq petita fig-etq-marc\">4 cm</text><text x=\"98\" y=\"8\" text-anchor=\"middle\" class=\"fig-etq petita\">cada interval = 50 km</text></svg>"
  },
  {
   "id": "158",
   "ex": 158,
   "ap": "",
   "bloc": "escales",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "La distància real entre dues ciutats és de $450$ km. Troba la distància que les separa en un mapa dibuixat a escala $1:1\\,500\\,000$.",
   "opcions": [
    "$3$ cm",
    "$30$ cm",
    "$675\\,000\\,000\\,000$ cm",
    "$0{,}3$ cm"
   ],
   "pistes": [
    "Converteix la distància real a centímetres: $450\\text{ km}=45\\,000\\,000$ cm.",
    "Divideix-la per l'escala: $45\\,000\\,000:1\\,500\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXVlc3QgdmFsb3IgdMOpIHVuIGZhY3RvciAkMTAkIGRlIG1lbnlzOiByZXZpc2EgbGEgY29udmVyc2nDsyAkNDUwXFx0ZXh0eyBrbX09NDVcXCwwMDBcXCwwMDAkIGNtIGFiYW5zIGRlIGRpdmlkaXIgcGVyICQxXFwsNTAwXFwsMDAwJC4iLCAiIiwgIkFxdWVzdCB2YWxvciBzdXJ0IGRlIG11bHRpcGxpY2FyIGxhIGRpc3TDoG5jaWEgcmVhbCBwZXIgbCdlc2NhbGEgZW4gY29tcHRlcyBkZSBkaXZpZGlyLWhpOiBlbiB1bmEgZXNjYWxhICQxOm4kLCBsYSBkaXN0w6BuY2lhIGFsIG1hcGEgw6lzIGxhIGRpc3TDoG5jaWEgcmVhbCBESVZJRElEQSBwZXIgJG4kLiIsICJTZW1ibGEgcXVlIGhhcyBjb252ZXJ0aXQgZWxzICQ0NTAkIGttIGEgbWV0cmVzICgkNDUwXFwsMDAwJCBtKSBpIG5vIGEgY2VudMOtbWV0cmVzOiBjYWwgJDQ1MFxcdGV4dHsga219PTQ1XFwsMDAwXFwsMDAwJCBjbSBhYmFucyBkZSBkaXZpZGlyIHBlciBsJ2VzY2FsYS4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIiwgIlBST0RVQ1RFX01BTCJdLCAicmVzIjogWyIkNDUwXFx0ZXh0eyBrbX09NDVcXCwwMDBcXCwwMDAkIGNtIiwgIiQ0NVxcLDAwMFxcLDAwMDoxXFwsNTAwXFwsMDAwPTMwJCBjbSJdfQ=="
  },
  {
   "id": "159",
   "ex": 159,
   "ap": "",
   "bloc": "escales",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "",
   "enunciat": "En representar la carretera que uneix dos pobles en un mapa d'escala $1:500\\,000$, té una longitud de $6$ cm. Quina seria la longitud de la carretera si la representem en un plànol d'escala $1:60\\,000$?",
   "opcions": [
    "$0{,}72$ cm",
    "$0{,}00072$ cm",
    "$50$ cm",
    "$720$ cm"
   ],
   "pistes": [
    "Calcula primer la distància real: $6\\text{ cm}\\cdot500\\,000=3\\,000\\,000$ cm.",
    "Divideix aquesta distància real per la segona escala: $3\\,000\\,000:60\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkJ2FwbGljYXIgbGEgcmHDsyBkZSBsZXMgZXNjYWxlcyBpbnZlcnRpZGEgKCQ2MFxcLDAwMC81MDBcXCwwMDAkIGVubGxvYyBkZSAkNTAwXFwsMDAwLzYwXFwsMDAwJCk6IGEgdW5hIGVzY2FsYSBhbWIgdW4gbm9tYnJlIE3DiVMgUEVUSVQgKG3DqXMgZGV0YWxsYWRhKSBsaSBjb3JyZXNwb24gdW5hIGxvbmdpdHVkIGRpYnVpeGFkYSBNw4lTIEdSQU4sIG5vIG3DqXMgcGV0aXRhLiIsICJBcXVlc3QgcmVzdWx0YXQgw6lzIG1hc3NhIHBldGl0IHBlciBhIHVuYSBlc2NhbGEgbcOpcyBkZXRhbGxhZGE6IHRvcm5hIGEgY2FsY3VsYXIgcHJpbWVyIGxhIGRpc3TDoG5jaWEgcmVhbCAoJDZcXGNkb3Q1MDBcXCwwMDAkIGNtKSBpIGRlc3Byw6lzIGRpdmlkZWl4LWxhIHBlciAkNjBcXCwwMDAkLiIsICIiLCAiQXF1ZXN0IHZhbG9yIHTDqSB1biBmYWN0b3IgJDEwJCBkZSBtw6lzOiByZXZpc2EgZWwgY8OgbGN1bCBkZSBsYSBkaXN0w6BuY2lhIHJlYWwgKCQ2XFxjZG90NTAwXFwsMDAwPTNcXCwwMDBcXCwwMDAkIGNtKSBhYmFucyBkZSBkaXZpZGlyLWxhIHBlciAkNjBcXCwwMDAkLiJdLCAiZXJyIjogWyJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiUFJPRFVDVEVfTUFMIiwgIiIsICJURVJNRV9PQkxJREFUX09QRVJBQ0lPIl0sICJyZXMiOiBbIkRpc3TDoG5jaWEgcmVhbDogJDZcXGNkb3Q1MDBcXCwwMDA9M1xcLDAwMFxcLDAwMCQgY20iLCAiQWwgbm91IHBsw6Bub2w6ICQzXFwsMDAwXFwsMDAwOjYwXFwsMDAwPTUwJCBjbSJdfQ=="
  },
  {
   "id": "160a",
   "ex": 160,
   "ap": "a",
   "bloc": "escales",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "El plànol d'un habitatge està dibuixat a escala $1:60$.",
   "enunciat": "Quines dimensions reals té la cuina si en el plànol fa $4$ cm d'ample i $7$ cm de llarg?",
   "opcions": [
    "$0{,}067$ m d'ample i $0{,}117$ m de llarg",
    "$4$ m d'ample i $7$ m de llarg",
    "$2{,}4$ m d'ample i $4{,}2$ m de llarg",
    "$240$ m d'ample i $420$ m de llarg"
   ],
   "pistes": [
    "A l'escala $1:60$, cada centímetre del plànol correspon a $60$ cm reals.",
    "Multiplica les dues mesures del plànol per $60$ i converteix el resultat a metres."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBcXVlc3QgdmFsb3Igc3VydCBkZSBkaXZpZGlyIHBlciAkNjAkIGVuIGNvbXB0ZXMgZGUgbXVsdGlwbGljYXI6IGEgbCdlc2NhbGEgJDE6NjAkLCBsYSBtZXN1cmEgUkVBTCDDqXMgJDYwJCB2ZWdhZGVzIGxhIG1lc3VyYSBhbCBwbMOgbm9sLCBubyB1bmEgc2VpeGFudGVuYSBwYXJ0LiIsICJObyBoYXMgZmV0IHNlcnZpciBsJ2VzY2FsYTogbGVzIG1lc3VyZXMgZGVsIHBsw6Bub2wgaSBsZXMgcmVhbHMgbm8gY29pbmNpZGVpeGVuIGEgbWVueXMgcXVlIGwnZXNjYWxhIGZvcyAkMToxJC4iLCAiIiwgIkFxdWVzdHMgdmFsb3JzIHRlbmVuIHVuIGZhY3RvciAkMTAwJCBkZSBtw6lzOiAkNFxcY2RvdDYwPTI0MCQgY20sIHF1ZSBjYWwgY29udmVydGlyIGEgbWV0cmVzIGRpdmlkaW50IHBlciAkMTAwJCwgbm8gZGVpeGFyLWhvIHRhbCBxdWFsLiJdLCAiZXJyIjogWyJDUkVVQU1FTlRfSU5WRVJUSVQiLCAiRVNDQUxBX05PX0FQTElDQURBIiwgIiIsICJQUk9EVUNURV9NQUwiXSwgInJlcyI6IFsiQW1wbGU6ICQ0XFxjZG90NjA9MjQwJCBjbSAkPTJ7LH00JCBtIiwgIkxsYXJnOiAkN1xcY2RvdDYwPTQyMCQgY20gJD00eyx9MiQgbSJdfQ=="
  },
  {
   "id": "160b",
   "ex": 160,
   "ap": "b",
   "bloc": "escales",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "El plànol d'un habitatge està dibuixat a escala $1:60$.",
   "enunciat": "El passadís mesura $7{,}5$ m a la realitat. Quant fa de llarg en el plànol?",
   "opcions": [
    "$7{,}5$ cm",
    "$12{,}5$ cm",
    "$1{,}25$ cm",
    "$450$ cm"
   ],
   "pistes": [
    "Converteix els $7{,}5$ m a centímetres: $750$ cm.",
    "Divideix-los per $60$ per passar de la mesura real a la del plànol."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyBoYXMgZmV0IHNlcnZpciBsJ2VzY2FsYTogbGVzIG1lc3VyZXMgZGVsIHBsw6Bub2wgaSBsZXMgcmVhbHMgbm8gY29pbmNpZGVpeGVuIGEgbWVueXMgcXVlIGwnZXNjYWxhIGZvcyAkMToxJC4iLCAiIiwgIkFxdWVzdCB2YWxvciB0w6kgdW4gZmFjdG9yICQxMCQgZGUgbWVueXM6IHJldmlzYSBsYSBjb252ZXJzacOzICQ3eyx9NVxcdGV4dHsgbX09NzUwJCBjbSBhYmFucyBkZSBkaXZpZGlyIHBlciAkNjAkLiIsICJBcXVlc3QgdmFsb3Igc3VydCBkZSBtdWx0aXBsaWNhciBwZXIgJDYwJCBlbiBjb21wdGVzIGRlIGRpdmlkaXItaGk6IGEgbCdlc2NhbGEgJDE6NjAkLCBsYSBtZXN1cmEgQUwgUEzDgE5PTCDDqXMgbGEgbWVzdXJhIHJlYWwgRElWSURJREEgcGVyICQ2MCQsIG5vIG11bHRpcGxpY2FkYS4iXSwgImVyciI6IFsiRVNDQUxBX05PX0FQTElDQURBIiwgIiIsICJQUk9EVUNURV9NQUwiLCAiQ1JFVUFNRU5UX0lOVkVSVElUIl0sICJyZXMiOiBbIiQ3eyx9NVxcdGV4dHsgbX09NzUwJCBjbSIsICIkNzUwOjYwPTEyeyx9NSQgY20iXX0="
  }
 ]
};
