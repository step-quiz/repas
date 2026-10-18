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
  "ARREL_MAL_APLICADA": "L'arrel no s'ha aplicat on tocava. Aïlla primer la quantitat que va sota l'arrel i fes-la al final, sobre el valor ja aïllat.",
  "ESCALA_INVERTIDA": "Has fet servir l'escala del revés. A l'escala $a:b$, el primer nombre és el DIBUIX i el segon la REALITAT: si és una reducció, la mesura real sempre surt més gran que la del plànol.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "PAS_INTERMEDI_PER_RESPOSTA": "El valor que has triat és correcte, però és un pas intermedi, no el que et demanen. Torna a llegir la pregunta i mira quina magnitud has d'acabar donant: sovint només falta una operació més.",
  "POTENCIA_10": "El denominador d'un decimal exacte és una potència de $10$ amb tants zeros com xifres decimals hi ha. Torna-les a comptar.",
  "POTENCIA_COM_PRODUCTE": "$x^2$ no és $2x$: és $x\\cdot x$. Prova-ho amb $x=3$, que dona $9$ i no $6$.",
  "PRODUCTE_PER_SUMA": "Has sumat on tocava multiplicar (o al revés). Torna a llegir quina operació es fa sobre les dades.",
  "RAO_AL_CUB": "Has fet servir $k^3$ on tocava una altra potència. El cub és per als volums; les àrees van amb $k^2$.",
  "RAO_AL_QUADRAT": "Has fet servir $k^2$ on tocava una altra potència. El quadrat és per a les àrees; les longituds van amb $k$ i els volums amb $k^3$.",
  "RAO_SENSE_QUADRAT": "Has multiplicat per $k$ una àrea o un volum. Només les LONGITUDS van amb $k$: les àrees van amb $k^2$ i els volums amb $k^3$.",
  "RESTA_PER_QUOCIENT": "Has restat les dues quantitats. Un percentatge i una raó surten d'una DIVISIÓ: diuen quantes vegades, no quant més.",
  "UNITATS_NO_CONVERTIDES": "Has barrejat unitats diferents en la mateixa operació. Passa-ho tot a la mateixa unitat abans de calcular res."
 },
 "items": [
  {
   "id": "362a",
   "ex": 362,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Dues figures són semblants i la raó de semblança, de la petita a la gran, és $k$. Quantes vegades més gran és l'ÀREA de la gran? Recorda: les àrees es multipliquen per $k^2$.",
   "enunciat": "$k=2$",
   "opcions": [
    "$8$ vegades",
    "$4$ vegades",
    "$2$ vegades",
    "$\\sqrt{2}$ vegades"
   ],
   "pistes": [
    "L'àrea va amb $k^2$.",
    "$2^2=2\\cdot2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyIka14zJCDDqXMgcGVyIGFscyB2b2x1bXMuIEwnw6ByZWEgdmEgYW1iICRrXjI9Ml4yJC4iLCAiIiwgIlBlciAkayQgbm9tw6lzIGVzIG11bHRpcGxpcXVlbiBsZXMgTE9OR0lUVURTLiBMJ8OgcmVhIGVzIG11bHRpcGxpY2EgcGVyICRrXjI9Ml4yJC4iLCAiSGFzIGZldCBsJ2FycmVsLiBMJ8OgcmVhIGVzIG11bHRpcGxpY2EgcGVyICRrJCBBTCBRVUFEUkFUOiAkMl4yJC4iXSwgImVyciI6IFsiUkFPX0FMX0NVQiIsICIiLCAiUkFPX1NFTlNFX1FVQURSQVQiLCAiQVJSRUxfTUFMX0FQTElDQURBIl0sICJyZXMiOiBbIiRrXjI9Ml4yPTQkOiBsJ8OgcmVhIGRlIGxhIGdyYW4gw6lzICQ0JCB2ZWdhZGVzIGxhIGRlIGxhIHBldGl0YS4iXX0="
  },
  {
   "id": "362b",
   "ex": 362,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Dues figures són semblants i la raó de semblança, de la petita a la gran, és $k$. Quantes vegades més gran és l'ÀREA de la gran? Recorda: les àrees es multipliquen per $k^2$.",
   "enunciat": "$k=3$",
   "opcions": [
    "$6$ vegades",
    "$27$ vegades",
    "$3$ vegades",
    "$9$ vegades"
   ],
   "pistes": [
    "L'àrea va amb $k^2$.",
    "$3^2=3\\cdot3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgZmV0ICQzXFxjZG90MiQuIEVsZXZhciBhbCBxdWFkcmF0IMOpcyBtdWx0aXBsaWNhciBlbCBub21icmUgcGVyIGVsbCBtYXRlaXg6ICQzXFxjZG90MyQuIiwgIiRrXjMkIMOpcyBwZXIgYWxzIHZvbHVtcy4gTCfDoHJlYSB2YSBhbWIgJGteMj0zXjIkLiIsICJQZXIgJGskIG5vbcOpcyBlcyBtdWx0aXBsaXF1ZW4gbGVzIExPTkdJVFVEUy4gTCfDoHJlYSBlcyBtdWx0aXBsaWNhIHBlciAka14yPTNeMiQuIiwgIiJdLCAiZXJyIjogWyJQT1RFTkNJQV9DT01fUFJPRFVDVEUiLCAiUkFPX0FMX0NVQiIsICJSQU9fU0VOU0VfUVVBRFJBVCIsICIiXSwgInJlcyI6IFsiJGteMj0zXjI9OSQ6IGwnw6ByZWEgZGUgbGEgZ3JhbiDDqXMgJDkkIHZlZ2FkZXMgbGEgZGUgbGEgcGV0aXRhLiJdfQ=="
  },
  {
   "id": "290a",
   "ex": 290,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dues figures són semblants. Troba'n la raó de semblança $k$ (de la petita a la gran).",
   "enunciat": "Un costat de la petita fa $3$ cm i el corresponent de la gran, $12$ cm.",
   "opcions": [
    "$k=9$",
    "$k=36$",
    "$k=\\dfrac{1}{4}$",
    "$k=4$"
   ],
   "pistes": [
    "La raó de semblança és el quocient entre dos costats corresponents.",
    "De la petita a la gran: $\\dfrac{12}{3}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVscyBkb3MgY29zdGF0cy4gTGEgcmHDsyBkZSBzZW1ibGFuw6dhIMOpcyB1biBRVU9DSUVOVDogZGl1IHF1YW50ZXMgdmVnYWRlcyDDqXMgbcOpcyBncmFuLCBubyBxdWFudCBtw6lzIGdyYW4gw6lzLiIsICJFbHMgaGFzIG11bHRpcGxpY2F0LiBMYSByYcOzIHN1cnQgZGUgZGl2aWRpciBlbCBjb3N0YXQgZGUgbGEgZ3JhbiBlbnRyZSBlbCBkZSBsYSBwZXRpdGEuIiwgIkFxdWVzdGEgw6lzIGxhIHJhw7MgZGUgbGEgZ3JhbiBhIGxhIHBldGl0YS4gQ29tIHF1ZSBlcyBkZW1hbmEgZGUgbGEgcGV0aXRhIGEgbGEgZ3JhbiwgJGskIGhhIGRlIHNlciBtw6lzIGdyYW4gcXVlICQxJC4iLCAiIl0sICJlcnIiOiBbIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJQUk9EVUNURV9QRVJfU1VNQSIsICJJTlZFUlRJREEiLCAiIl0sICJyZXMiOiBbIiRrPVxcZGZyYWN7MTJ9ezN9PTQkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 328 187\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos triangles.</title><g transform=\"translate(14.0,155.6)\"><polygon points=\"0.00,0.00 41.64,0.00 20.82,-35.39\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"133.44,0.00 300.00,0.00 216.72,-141.57\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.8\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"216.7\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "290b",
   "ex": 290,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dues figures són semblants. Troba'n la raó de semblança $k$ (de la petita a la gran).",
   "enunciat": "Un costat de la petita fa $5$ cm i el corresponent de la gran, $20$ cm.",
   "opcions": [
    "$k=15$",
    "$k=100$",
    "$k=4$",
    "$k=\\dfrac{1}{4}$"
   ],
   "pistes": [
    "La raó de semblança és el quocient entre dos costats corresponents.",
    "De la petita a la gran: $\\dfrac{20}{5}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVscyBkb3MgY29zdGF0cy4gTGEgcmHDsyBkZSBzZW1ibGFuw6dhIMOpcyB1biBRVU9DSUVOVDogZGl1IHF1YW50ZXMgdmVnYWRlcyDDqXMgbcOpcyBncmFuLCBubyBxdWFudCBtw6lzIGdyYW4gw6lzLiIsICJFbHMgaGFzIG11bHRpcGxpY2F0LiBMYSByYcOzIHN1cnQgZGUgZGl2aWRpciBlbCBjb3N0YXQgZGUgbGEgZ3JhbiBlbnRyZSBlbCBkZSBsYSBwZXRpdGEuIiwgIiIsICJBcXVlc3RhIMOpcyBsYSByYcOzIGRlIGxhIGdyYW4gYSBsYSBwZXRpdGEuIENvbSBxdWUgZXMgZGVtYW5hIGRlIGxhIHBldGl0YSBhIGxhIGdyYW4sICRrJCBoYSBkZSBzZXIgbcOpcyBncmFuIHF1ZSAkMSQuIl0sICJlcnIiOiBbIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJQUk9EVUNURV9QRVJfU1VNQSIsICIiLCAiSU5WRVJUSURBIl0sICJyZXMiOiBbIiRrPVxcZGZyYWN7MjB9ezV9PTQkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 328 187\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos triangles.</title><g transform=\"translate(14.0,155.6)\"><polygon points=\"0.00,0.00 41.64,0.00 20.82,-35.39\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"133.44,0.00 300.00,0.00 216.72,-141.57\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"20.8\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"216.7\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "290c",
   "ex": 290,
   "ap": "c",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Dues figures són semblants. Troba'n la raó de semblança $k$ (de la petita a la gran).",
   "enunciat": "Un costat de la petita fa $6$ cm i el corresponent de la gran, $9$ cm.",
   "opcions": [
    "$k=54$",
    "$k=3$",
    "$k=\\dfrac{2}{3}$",
    "$k=\\dfrac{3}{2}$"
   ],
   "pistes": [
    "La raó de semblança és el quocient entre dos costats corresponents.",
    "De la petita a la gran: $\\dfrac{9}{6}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbHMgaGFzIG11bHRpcGxpY2F0LiBMYSByYcOzIHN1cnQgZGUgZGl2aWRpciBlbCBjb3N0YXQgZGUgbGEgZ3JhbiBlbnRyZSBlbCBkZSBsYSBwZXRpdGEuIiwgIkhhcyByZXN0YXQgZWxzIGRvcyBjb3N0YXRzLiBMYSByYcOzIGRlIHNlbWJsYW7Dp2Egw6lzIHVuIFFVT0NJRU5UOiBkaXUgcXVhbnRlcyB2ZWdhZGVzIMOpcyBtw6lzIGdyYW4sIG5vIHF1YW50IG3DqXMgZ3JhbiDDqXMuIiwgIkFxdWVzdGEgw6lzIGxhIHJhw7MgZGUgbGEgZ3JhbiBhIGxhIHBldGl0YS4gQ29tIHF1ZSBlcyBkZW1hbmEgZGUgbGEgcGV0aXRhIGEgbGEgZ3JhbiwgJGskIGhhIGRlIHNlciBtw6lzIGdyYW4gcXVlICQxJC4iLCAiIl0sICJlcnIiOiBbIlBST0RVQ1RFX1BFUl9TVU1BIiwgIlJFU1RBX1BFUl9RVU9DSUVOVCIsICJJTlZFUlRJREEiLCAiIl0sICJyZXMiOiBbIiRrPVxcZGZyYWN7OX17Nn09XFxkZnJhY3szfXsyfSQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 257 122\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos triangles.</title><g transform=\"translate(14.0,90.5)\"><polygon points=\"0.00,0.00 60.00,0.00 30.00,-51.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"139.00,0.00 229.00,0.00 184.00,-76.50\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"184\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "291a",
   "ex": 291,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos polígons són semblants amb raó $k$. Si l'àrea del petit és la que es diu, quina és la del gran?",
   "enunciat": "$k=2$ i àrea del petit $=15$ cm$^2$.",
   "opcions": [
    "$120$ cm$^2$",
    "$17$ cm$^2$",
    "$60$ cm$^2$",
    "$30$ cm$^2$"
   ],
   "pistes": [
    "Les longituds es multipliquen per $k$; les àrees, per $k^2$.",
    "$k^2=4$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCAka14zJCDDqXMgcGVyIGFscyBWT0xVTVMuIFVuYSDDoHJlYSB0w6kgZHVlcyBkaW1lbnNpb25zLCBpIHBlciBhaXjDsiB2YSBhbWIgJGteMiQuIiwgIkxhIHJhw7MgbXVsdGlwbGljYSwgbm8gc3VtYS4iLCAiIiwgIkhhcyBtdWx0aXBsaWNhdCBsJ8OgcmVhIHBlciAkayQuIExlcyDDoHJlZXMgZXMgbXVsdGlwbGlxdWVuIHBlciAka14yJCwgbm8gcGVyICRrJDogc2kgbGVzIGxvbmdpdHVkcyBlcyBkdXBsaXF1ZW4sIGwnw6ByZWEgZXMgbXVsdGlwbGljYSBwZXIgJDQkLCBubyBwZXIgJDIkLiJdLCAiZXJyIjogWyJSQU9fQUxfQ1VCIiwgIlBST0RVQ1RFX1BFUl9TVU1BIiwgIiIsICJSQU9fU0VOU0VfUVVBRFJBVCJdLCAicmVzIjogWyIka14yPTJeMj00JCIsICLDgHJlYSBncmFuICQ9MTVcXGNkb3Q0PTYwJCBjbSReMiQiXSwgImNvbSI6ICJWYWwgbGEgcGVuYSB2ZXVyZS1obyBhbWIgdW4gcXVhZHJhdDogc2kgZWwgY29zdGF0IHBhc3NhIGRlICQxJCBhICQyJCwgbCfDoHJlYSBwYXNzYSBkJyQxJCBhICQ0JC4gRHVlcyBkaW1lbnNpb25zLCBkb3MgZmFjdG9ycyAkayQuIn0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 294 165\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos quadrats.</title><g transform=\"translate(14.0,134.0)\"><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"145.60,0.00 265.60,0.00 265.60,-120.00 145.60,-120.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"205.6\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "291b",
   "ex": 291,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos polígons són semblants amb raó $k$. Si l'àrea del petit és la que es diu, quina és la del gran?",
   "enunciat": "$k=3$ i àrea del petit $=8$ cm$^2$.",
   "opcions": [
    "$72$ cm$^2$",
    "$216$ cm$^2$",
    "$11$ cm$^2$",
    "$24$ cm$^2$"
   ],
   "pistes": [
    "Les longituds es multipliquen per $k$; les àrees, per $k^2$.",
    "$k^2=9$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgJGteMyQgw6lzIHBlciBhbHMgVk9MVU1TLiBVbmEgw6ByZWEgdMOpIGR1ZXMgZGltZW5zaW9ucywgaSBwZXIgYWl4w7IgdmEgYW1iICRrXjIkLiIsICJMYSByYcOzIG11bHRpcGxpY2EsIG5vIHN1bWEuIiwgIkhhcyBtdWx0aXBsaWNhdCBsJ8OgcmVhIHBlciAkayQuIExlcyDDoHJlZXMgZXMgbXVsdGlwbGlxdWVuIHBlciAka14yJCwgbm8gcGVyICRrJDogc2kgbGVzIGxvbmdpdHVkcyBlcyBkdXBsaXF1ZW4sIGwnw6ByZWEgZXMgbXVsdGlwbGljYSBwZXIgJDQkLCBubyBwZXIgJDIkLiJdLCAiZXJyIjogWyIiLCAiUkFPX0FMX0NVQiIsICJQUk9EVUNURV9QRVJfU1VNQSIsICJSQU9fU0VOU0VfUVVBRFJBVCJdLCAicmVzIjogWyIka14yPTNeMj05JCIsICLDgHJlYSBncmFuICQ9OFxcY2RvdDk9NzIkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 328 202\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos quadrats.</title><g transform=\"translate(14.0,170.1)\"><polygon points=\"0.00,0.00 52.05,0.00 52.05,-52.05 0.00,-52.05\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"143.85,0.00 300.00,0.00 300.00,-156.15 143.85,-156.15\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"26\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"221.9\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "291c",
   "ex": 291,
   "ap": "c",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos polígons són semblants amb raó $k$. Si l'àrea del petit és la que es diu, quina és la del gran?",
   "enunciat": "$k=\\dfrac{5}{2}$ i àrea del petit $=12$ cm$^2$.",
   "opcions": [
    "$75$ cm$^2$",
    "$187{,}5$ cm$^2$",
    "$30$ cm$^2$",
    "$14{,}5$ cm$^2$"
   ],
   "pistes": [
    "Les longituds es multipliquen per $k$; les àrees, per $k^2$.",
    "$k^2=\\dfrac{25}{4}$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgJGteMyQgw6lzIHBlciBhbHMgVk9MVU1TLiBVbmEgw6ByZWEgdMOpIGR1ZXMgZGltZW5zaW9ucywgaSBwZXIgYWl4w7IgdmEgYW1iICRrXjIkLiIsICJIYXMgbXVsdGlwbGljYXQgbCfDoHJlYSBwZXIgJGskLiBMZXMgw6ByZWVzIGVzIG11bHRpcGxpcXVlbiBwZXIgJGteMiQsIG5vIHBlciAkayQ6IHNpIGxlcyBsb25naXR1ZHMgZXMgZHVwbGlxdWVuLCBsJ8OgcmVhIGVzIG11bHRpcGxpY2EgcGVyICQ0JCwgbm8gcGVyICQyJC4iLCAiTGEgcmHDsyBtdWx0aXBsaWNhLCBubyBzdW1hLiJdLCAiZXJyIjogWyIiLCAiUkFPX0FMX0NVQiIsICJSQU9fU0VOU0VfUVVBRFJBVCIsICJQUk9EVUNURV9QRVJfU1VNQSJdLCAicmVzIjogWyIka14yPVxcbGVmdChcXGRmcmFjezV9ezJ9XFxyaWdodCleMj1cXGRmcmFjezI1fXs0fSQiLCAiw4ByZWEgZ3JhbiAkPTEyXFxjZG90XFxkZnJhY3syNX17NH09NzUkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 328 194\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos quadrats.</title><g transform=\"translate(14.0,162.7)\"><polygon points=\"0.00,0.00 59.48,0.00 59.48,-59.48 0.00,-59.48\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"151.29,0.00 300.00,0.00 300.00,-148.71 151.29,-148.71\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"29.7\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"225.6\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "292a",
   "ex": 292,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos cossos són semblants amb raó $k$. Si el volum del petit és el que es diu, quin és el del gran?",
   "enunciat": "$k=2$ i volum del petit $=30$ cm$^3$.",
   "opcions": [
    "$240$ cm$^3$",
    "$120$ cm$^3$",
    "$38$ cm$^3$",
    "$60$ cm$^3$"
   ],
   "pistes": [
    "Les longituds van amb $k$, les àrees amb $k^2$ i els volums amb $k^3$.",
    "$k^3=8$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgJGteMiQgw6lzIHBlciBhIGxlcyDDgFJFRVMuIEVscyB2b2x1bXMgdmFuIGFtYiAka14zJC4iLCAiTGEgcmHDsyBtdWx0aXBsaWNhIGVsIHZvbHVtLCBubyBzJ2hpIHN1bWEuIiwgIkhhcyBtdWx0aXBsaWNhdCBwZWwgJGskIHRvdCBzb2wuIFVuIHZvbHVtIHTDqSB0cmVzIGRpbWVuc2lvbnM6IHNpIGxlcyBsb25naXR1ZHMgZXMgbXVsdGlwbGlxdWVuIHBlciAkMiQsIGVsIHZvbHVtIGhvIGZhIHBlciAkMl4zPTgkLiJdLCAiZXJyIjogWyIiLCAiUkFPX0FMX1FVQURSQVQiLCAiUFJPRFVDVEVfUEVSX1NVTUEiLCAiUkFPX1NFTlNFX1FVQURSQVQiXSwgInJlcyI6IFsiJGteMz0yXjM9OCQiLCAiVm9sdW0gZ3JhbiAkPTMwXFxjZG90OD0yNDAkIGNtJF4zJCJdLCAiY29tIjogIkFxdWVzdCDDqXMgZWwgcXVlIG3DqXMgc29ycHLDqG46IGRvYmxhciB0b3RlcyBsZXMgbWlkZXMgbXVsdGlwbGljYSBlbCB2b2x1bSBwZXIgJDgkLiDDiXMgZWwgbW90aXUgcGVsIHF1YWwgdW5hIG1hcXVldGEgYSBlc2NhbGEgJDE6MiQgbm8gcGVzYSBsYSBtZWl0YXQsIHNpbsOzIHVuYSB2dWl0ZW5hIHBhcnQuIn0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 335 206\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos cubs.</title><g transform=\"translate(14.0,174.8)\"><polygon points=\"60.00,0.00 60.00,-60.00 80.40,-80.40 80.40,-20.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,-60.00 60.00,-60.00 80.40,-80.40 20.40,-80.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"265.60,0.00 265.60,-120.00 306.40,-160.80 306.40,-40.80\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"145.60,-120.00 265.60,-120.00 306.40,-160.80 186.40,-160.80\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"145.60,0.00 265.60,0.00 265.60,-120.00 145.60,-120.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"205.6\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "292b",
   "ex": 292,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Dos cossos són semblants amb raó $k$. Si el volum del petit és el que es diu, quin és el del gran?",
   "enunciat": "$k=3$ i volum del petit $=5$ cm$^3$.",
   "opcions": [
    "$45$ cm$^3$",
    "$135$ cm$^3$",
    "$15$ cm$^3$",
    "$32$ cm$^3$"
   ],
   "pistes": [
    "Les longituds van amb $k$, les àrees amb $k^2$ i els volums amb $k^3$.",
    "$k^3=27$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAka14yJCDDqXMgcGVyIGEgbGVzIMOAUkVFUy4gRWxzIHZvbHVtcyB2YW4gYW1iICRrXjMkLiIsICIiLCAiSGFzIG11bHRpcGxpY2F0IHBlbCAkayQgdG90IHNvbC4gVW4gdm9sdW0gdMOpIHRyZXMgZGltZW5zaW9uczogc2kgbGVzIGxvbmdpdHVkcyBlcyBtdWx0aXBsaXF1ZW4gcGVyICQzJCwgZWwgdm9sdW0gaG8gZmEgcGVyICQzXjM9MjckLiIsICJMYSByYcOzIG11bHRpcGxpY2EgZWwgdm9sdW0sIG5vIHMnaGkgc3VtYS4iXSwgImVyciI6IFsiUkFPX0FMX1FVQURSQVQiLCAiIiwgIlJBT19TRU5TRV9RVUFEUkFUIiwgIlBST0RVQ1RFX1BFUl9TVU1BIl0sICJyZXMiOiBbIiRrXjM9M14zPTI3JCIsICJWb2x1bSBncmFuICQ9NVxcY2RvdDI3PTEzNSQgY20kXjMkIl19",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 382 255\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos cubs.</title><g transform=\"translate(14.0,223.2)\"><polygon points=\"52.05,0.00 52.05,-52.05 69.75,-69.75 69.75,-17.70\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,-52.05 52.05,-52.05 69.75,-69.75 17.70,-69.75\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,0.00 52.05,0.00 52.05,-52.05 0.00,-52.05\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"300.00,0.00 300.00,-156.15 353.09,-209.24 353.09,-53.09\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"143.85,-156.15 300.00,-156.15 353.09,-209.24 196.94,-209.24\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"143.85,0.00 300.00,0.00 300.00,-156.15 143.85,-156.15\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"26\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"221.9\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "293a",
   "ex": 293,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "A l'inrevés: del que saps de les àrees, dedueix la raó de longituds.",
   "enunciat": "Dos triangles semblants tenen àrees de $12$ cm$^2$ i $108$ cm$^2$. Quina és la raó entre els seus costats?",
   "opcions": [
    "$k=96$",
    "$k=3$",
    "$k=9$",
    "$k=\\sqrt{108-12}$"
   ],
   "pistes": [
    "La raó entre les àrees és $k^2$.",
    "Divideix les àrees i fes l'arrel quadrada del resultat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcmVzdGF0IGxlcyDDoHJlZXMuIExhIHJhw7Mgw6lzIHVuIHF1b2NpZW50LiIsICIiLCAiRWwgJDkkIMOpcyBsYSByYcOzIGVudHJlIGxlcyDDgFJFRVMgKCQxMDg6MTIkKS4gTGEgcmHDsyBlbnRyZSBlbHMgY29zdGF0cyBuJ8OpcyBsJ2FycmVsIHF1YWRyYWRhOiAkaz1cXHNxcnR7OX09MyQuIiwgIk5pIHJlc3RhIG5pIGFycmVsIGRlIGxhIHJlc3RhOiBwcmltZXIgZXMgZGl2aWRlaXhlbiBsZXMgw6ByZWVzIGkgZGVzcHLDqXMgZXMgZmEgbCdhcnJlbCBkZWwgcXVvY2llbnQuIl0sICJlcnIiOiBbIlJFU1RBX1BFUl9RVU9DSUVOVCIsICIiLCAiUkFPX0FMX1FVQURSQVQiLCAiUkVTVEFfUEVSX1FVT0NJRU5UIl0sICJyZXMiOiBbIiRcXGRmcmFjezEwOH17MTJ9PTkkLCBpIGFpeMOyIMOpcyAka14yJCIsICIkaz1cXHNxcnR7OX09MyQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 328 202\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos quadrats.</title><g transform=\"translate(14.0,170.1)\"><polygon points=\"0.00,0.00 52.05,0.00 52.05,-52.05 0.00,-52.05\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"143.85,0.00 300.00,0.00 300.00,-156.15 143.85,-156.15\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"26\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"221.9\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "293b",
   "ex": 293,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "A l'inrevés: del que saps de les àrees, dedueix la raó de longituds.",
   "enunciat": "Dues esferes semblants tenen volums de $8$ cm$^3$ i $216$ cm$^3$. Quina és la raó entre els seus radis?",
   "opcions": [
    "$k=\\sqrt{27}$",
    "$k=27$",
    "$k=3$",
    "$k=208$"
   ],
   "pistes": [
    "La raó entre els volums és $k^3$.",
    "Divideix els volums i fes-ne l'arrel cúbica."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMJ2FycmVsIHF1YWRyYWRhIHNlcnZpcmlhIHNpIGNvbXBhcsOpc3NpbSDDoHJlZXMuIEFtYiB2b2x1bXMgY2FsIGwnYXJyZWwgY8O6YmljYS4iLCAiRWwgJDI3JCDDqXMgbGEgcmHDsyBlbnRyZSBlbHMgVk9MVU1TICgkMjE2OjgkKS4gTGEgcmHDsyBlbnRyZSBlbHMgcmFkaXMgbifDqXMgbCdhcnJlbCBDw5pCSUNBOiAkaz1cXHNxcnRbM117Mjd9PTMkLiIsICIiLCAiSGFzIHJlc3RhdCBlbHMgdm9sdW1zIGVuIGNvbXB0ZXMgZGUgZGl2aWRpci1sb3MuIl0sICJlcnIiOiBbIkFSUkVMX01BTF9BUExJQ0FEQSIsICJSQU9fQUxfQ1VCIiwgIiIsICJSRVNUQV9QRVJfUVVPQ0lFTlQiXSwgInJlcyI6IFsiJFxcZGZyYWN7MjE2fXs4fT0yNyQsIGkgYWl4w7Igw6lzICRrXjMkIiwgIiRrPVxcc3FydFszXXsyN309MyQiXX0=",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 382 255\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos cubs.</title><g transform=\"translate(14.0,223.2)\"><polygon points=\"52.05,0.00 52.05,-52.05 69.75,-69.75 69.75,-17.70\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,-52.05 52.05,-52.05 69.75,-69.75 17.70,-69.75\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,0.00 52.05,0.00 52.05,-52.05 0.00,-52.05\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"300.00,0.00 300.00,-156.15 353.09,-209.24 353.09,-53.09\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"143.85,-156.15 300.00,-156.15 353.09,-209.24 196.94,-209.24\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"143.85,0.00 300.00,0.00 300.00,-156.15 143.85,-156.15\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"26\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><text x=\"221.9\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "294a",
   "ex": 294,
   "ap": "a",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Una maqueta d'un edifici està feta a escala $1:50$. L'edifici de debò fa $30$ m d'alçada, té una façana de $600$ m$^2$ i un volum de $9\\,000$ m$^3$.",
   "enunciat": "Amb l'escala $1:50$, quina alçada fa la maqueta si l'edifici real fa $30$ m?",
   "opcions": [
    "$1\\,500$ m",
    "$60$ m",
    "$0{,}6$ m $=6$ cm",
    "$60$ cm"
   ],
   "pistes": [
    "Divideix l'alçada real entre $50$.",
    "Passa el resultat a centímetres."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgbXVsdGlwbGljYXQgcGVyICQ1MCQuIExhIG1hcXVldGEgw6lzIHVuYSBSRURVQ0NJw5M6IGNhbCBkaXZpZGlyLiIsICJFbCBuw7ptZXJvIMOpcyBjb3JyZWN0ZSBwZXLDsiBsYSB1bml0YXQgbm86ICQweyx9NiQgbSBzw7NuICQ2MCQgY2VudMOtbWV0cmVzLiIsICIkMzA6NTA9MHssfTYkIG0sIGkgJDB7LH02JCBtIHPDs24gJDYwJCBjbSwgbm8gJDYkLiIsICIiXSwgImVyciI6IFsiRVNDQUxBX0lOVkVSVElEQSIsICJVTklUQVRTX05PX0NPTlZFUlRJREVTIiwgIlBPVEVOQ0lBXzEwIiwgIiJdLCAicmVzIjogWyIkXFxkZnJhY3szMH17NTB9PTB7LH02JCBtIiwgIiQweyx9NiQgbSAkPTYwJCBjbSJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 186 96\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos triangles.</title><g transform=\"translate(14.0,65.0)\"><polygon points=\"0.00,0.00 60.00,0.00 30.00,-51.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"122.50,0.00 137.50,0.00 130.00,-12.75\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><line class=\"fig-crida\" x1=\"130.0\" y1=\"0.0\" x2=\"147.9\" y2=\"6.5\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"154\" y=\"13.4\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "294b",
   "ex": 294,
   "ap": "b",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Una maqueta d'un edifici està feta a escala $1:50$. L'edifici de debò fa $30$ m d'alçada, té una façana de $600$ m$^2$ i un volum de $9\\,000$ m$^3$.",
   "enunciat": "Amb la mateixa escala $1:50$, quina superfície té la façana de la maqueta, si la de l'edifici real és de $600$ m$^2$?",
   "opcions": [
    "$0{,}24$ m$^2$ (és a dir, $2\\,400$ cm$^2$)",
    "$0{,}0048$ m$^2$",
    "$600$ m$^2$",
    "$12$ m$^2$"
   ],
   "pistes": [
    "La raó de longituds és $\\dfrac{1}{50}$; la d'àrees, $\\left(\\dfrac{1}{50}\\right)^2$.",
    "$50^2=2\\,500$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGRpdmlkaXQgZW50cmUgJDUwXjMkLiBFbCBjdWIgw6lzIHBlciBhbHMgdm9sdW1zOyB1bmEgZmHDp2FuYSDDqXMgdW5hIMOgcmVhIGkgdmEgYW1iIGVsIHF1YWRyYXQuIiwgIkFxdWVzdGEgw6lzIGxhIGZhw6dhbmEgcmVhbCwgbGEgcXVlIGphIGV0IGRvbmF2ZW4uIiwgIkhhcyBkaXZpZGl0IGwnw6ByZWEgZW50cmUgJDUwJC4gTGVzIMOgcmVlcyB2YW4gYW1iICRrXjIkOiBjYWwgZGl2aWRpciBlbnRyZSAkNTBeMj0yXFwsNTAwJC4iXSwgImVyciI6IFsiIiwgIlJBT19BTF9DVUIiLCAiUEFTX0lOVEVSTUVESV9QRVJfUkVTUE9TVEEiLCAiUkFPX1NFTlNFX1FVQURSQVQiXSwgInJlcyI6IFsiJFxcZGZyYWN7NjAwfXs1MF4yfT1cXGRmcmFjezYwMH17MjUwMH09MHssfTI0JCBtJF4yJCIsICIkMHssfTI0JCBtJF4yPTJcXCw0MDAkIGNtJF4yJCJdfQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 186 106\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos quadrats.</title><g transform=\"translate(14.0,74.0)\"><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"122.50,0.00 137.50,0.00 137.50,-15.00 122.50,-15.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><line class=\"fig-crida\" x1=\"130.0\" y1=\"0.0\" x2=\"147.4\" y2=\"7.5\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"153.3\" y=\"14.8\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  },
  {
   "id": "294c",
   "ex": 294,
   "ap": "c",
   "bloc": "semblanca_arees",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Una maqueta d'un edifici està feta a escala $1:50$. L'edifici de debò fa $30$ m d'alçada, té una façana de $600$ m$^2$ i un volum de $9\\,000$ m$^3$.",
   "enunciat": "Amb la mateixa escala $1:50$, quin volum té la maqueta, si l'edifici real en fa $9\\,000$ m$^3$?",
   "opcions": [
    "$180$ m$^3$",
    "$0{,}072$ m$^3$ (és a dir, $72\\,000$ cm$^3$)",
    "$3{,}6$ m$^3$",
    "$72$ m$^3$"
   ],
   "pistes": [
    "La raó de volums és $\\left(\\dfrac{1}{50}\\right)^3$.",
    "$50^3=125\\,000$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgZGl2aWRpdCBlbnRyZSAkNTAkLiBFbHMgdm9sdW1zIHZhbiBhbWIgJGteMyQ6IGVudHJlICQ1MF4zPTEyNVxcLDAwMCQuIiwgIiIsICJIYXMgZGl2aWRpdCBlbnRyZSAkNTBeMiQuIEVsIHF1YWRyYXQgw6lzIHBlciBhIGxlcyDDoHJlZXMuIiwgIlQnaGFzIGRlc3BsYcOnYXQgdHJlcyBsbG9jczogJFxcZGZyYWN7OTAwMH17MTI1MDAwfT0weyx9MDcyJCwgbm8gJDcyJC4iXSwgImVyciI6IFsiUkFPX1NFTlNFX1FVQURSQVQiLCAiIiwgIlJBT19BTF9RVUFEUkFUIiwgIlBPVEVOQ0lBXzEwIl0sICJyZXMiOiBbIiRcXGRmcmFjezkwMDB9ezUwXjN9PVxcZGZyYWN7OTAwMH17MTI1MDAwfT0weyx9MDcyJCBtJF4zJCIsICIkMHssfTA3MiQgbSReMz03MlxcLDAwMCQgY20kXjMkIiwgIkxhIG1hcXVldGEgw6lzICQ1MCQgdmVnYWRlcyBtw6lzIGN1cnRhLCAkMlxcLDUwMCQgdmVnYWRlcyBtw6lzIHBldGl0YSBkZSBmYcOnYW5hIGkgJDEyNVxcLDAwMCQgdmVnYWRlcyBtw6lzIHBldGl0YSBkZSB2b2x1bSJdLCAiY29tIjogIkVscyB0cmVzIGFwYXJ0YXRzIGp1bnRzIHPDs24gZWwgcmVzdW0gZGVsIGJsb2M6IHVuYSBzb2xhIGVzY2FsYSwgdHJlcyBmYWN0b3JzIGRpZmVyZW50cyBzZWdvbnMgc2kgZWwgcXVlIG1lc3VyZXMgdMOpIHVuYSwgZHVlcyBvIHRyZXMgZGltZW5zaW9ucy4ifQ==",
   "figura": "<svg class=\"figura\" viewBox=\"0 0 184 130\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\"><title>Dues figures semblants, amb la raó entre una longitud i la seva corresponent marcada: dos cubs.</title><g transform=\"translate(14.0,94.4)\"><polygon points=\"60.00,0.00 60.00,-60.00 80.40,-80.40 80.40,-20.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,-60.00 60.00,-60.00 80.40,-80.40 20.40,-80.40\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"0.00,0.00 60.00,0.00 60.00,-60.00 0.00,-60.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"137.50,0.00 137.50,-15.00 142.60,-20.10 142.60,-5.10\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"122.50,-15.00 137.50,-15.00 142.60,-20.10 127.60,-20.10\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><polygon points=\"122.50,0.00 137.50,0.00 137.50,-15.00 122.50,-15.00\" fill=\"var(--fig-plena, #E9F0F6)\" stroke=\"currentColor\" stroke-width=\"2\"/><text x=\"30\" y=\"14.4\" text-anchor=\"middle\" class=\"fig-etq\">1</text><line class=\"fig-crida\" x1=\"130.0\" y1=\"0.0\" x2=\"146.0\" y2=\"9.6\" stroke=\"currentColor\" stroke-width=\"1\" stroke-opacity=\"0.55\"/><text x=\"151.5\" y=\"18.1\" text-anchor=\"middle\" class=\"fig-etq\">k</text></g></svg>"
  }
 ]
};
