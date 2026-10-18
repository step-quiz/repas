/* Generat per tools/build.py — no editeu aquest fitxer a mà. */
window.FULL = {
 "full": 1,
 "titol": "Full 1 — Nombres enters, fraccions i decimals",
 "subtitol": "Operacions amb enters, divisibilitat, fraccions i pas de decimal a fracció generatriu.",
 "blocs": [
  {
   "id": "enters",
   "titol": "Nombres enters",
   "descripcio": "Operacions combinades, regla dels signes i jerarquia.",
   "items": [
    "341a",
    "341b",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "2a",
    "2b",
    "2c",
    "2d",
    "3a",
    "3b",
    "3c",
    "3d",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e"
   ]
  },
  {
   "id": "divisibilitat",
   "titol": "Divisibilitat",
   "descripcio": "Descomposició factorial, m.c.d., m.c.m. i problemes.",
   "items": [
    "340a",
    "340b",
    "340c",
    "340d",
    "5a",
    "5b",
    "5c",
    "6a",
    "6b",
    "6c",
    "7a",
    "7b",
    "7c",
    "9a",
    "9b",
    "9c",
    "9d",
    "10a",
    "10b",
    "10c",
    "10d",
    "8",
    "11",
    "12a",
    "12b",
    "13",
    "14",
    "15",
    "16",
    "17"
   ]
  },
  {
   "id": "fraccions",
   "titol": "Fraccions",
   "descripcio": "Equivalència, simplificació i operacions combinades.",
   "items": [
    "342a",
    "342b",
    "18a",
    "18b",
    "18c",
    "18d",
    "18e",
    "18f",
    "20a",
    "20b",
    "20c",
    "22a",
    "22b",
    "22c",
    "22d",
    "22e",
    "22f",
    "19a",
    "19b",
    "19c",
    "19d",
    "21a",
    "21b",
    "21c",
    "21d",
    "21e",
    "21f",
    "23a",
    "23b",
    "23c",
    "23d",
    "24a",
    "24b",
    "24c",
    "24d",
    "24e",
    "24f",
    "25a",
    "25b",
    "25c",
    "25d",
    "25e",
    "25f"
   ]
  },
  {
   "id": "decimals",
   "titol": "Decimals",
   "descripcio": "Tipus de decimal i fracció generatriu.",
   "items": [
    "343a",
    "343b",
    "26a",
    "26b",
    "26c",
    "26d",
    "26e",
    "26f",
    "27a",
    "27b",
    "27c",
    "27d",
    "27e",
    "27f",
    "27g",
    "27h",
    "28a",
    "28b",
    "28c",
    "28d",
    "28e",
    "28f",
    "28g",
    "28h",
    "28i",
    "28j",
    "28k",
    "28l",
    "29a",
    "29b",
    "29c",
    "29d",
    "29e",
    "29f",
    "30a",
    "30b",
    "30c",
    "30d",
    "30e",
    "30f",
    "31a",
    "31b",
    "31c",
    "31d",
    "31e",
    "31f",
    "32a",
    "32b",
    "32c",
    "32d",
    "33a",
    "33b",
    "33c",
    "33d",
    "33e",
    "34"
   ]
  }
 ],
 "errors": {
  "INFINIT_MAI_ARRIBA": "Un decimal periòdic no «s'acosta» a un valor: ÉS aquest valor. La fracció generatriu ho demostra.",
  "INVERTIDA": "Has invertit la fracció. Simplificar no canvia quin terme és a dalt i quin a baix.",
  "NOUS_I_ZEROS": "Al denominador van tants NOUS com xifres té el període, i tants ZEROS com xifres té l'anteperíode. Aquí ho tens intercanviat.",
  "NO_INVERTEIX": "Per dividir fraccions es multiplica la primera per la INVERSA de la segona.",
  "NO_RESTA_ANTEPERIODE": "Al numerador cal RESTAR la part que no es repeteix: tot el nombre sense coma, menys la part anterior al període.",
  "PART_ENTERA_OBLIDADA": "T'has deixat la part entera. El numerador és el nombre sencer sense la coma, no només les xifres decimals.",
  "PERIODE_MAL_IDENTIFICAT": "Revisa quines xifres es repeteixen indefinidament (el període) i quines apareixen un sol cop després de la coma (l'anteperíode).",
  "POTENCIA_10": "El denominador ha de tenir tants zeros com xifres decimals té el nombre. Compta-les una altra vegada.",
  "PRODUCTE_CREUAT": "Per multiplicar fraccions es fa numerador per numerador i denominador per denominador. Creuar-los és el que es fa per COMPARAR-les, no per multiplicar-les.",
  "SUMA_NUMERADORS": "Has sumat numeradors amb numeradors i denominadors amb denominadors. Per sumar o restar fraccions cal reduir-les primer a denominador comú.",
  "TRACTAT_COM_EXACTE": "Has posat només potències de $10$ al denominador. Això val per als decimals exactes; si hi ha període, el denominador ha de dur nous.",
  "TRACTAT_COM_PERIODIC": "Has posat nous al denominador, però aquest decimal és exacte: s'acaba. El denominador ha de ser una potència de $10$."
 },
 "items": [
  {
   "id": "343a",
   "ex": 343,
   "ap": "a",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba la fracció generatriu d'aquest nombre decimal exacte.",
   "enunciat": "$0{,}7$",
   "opcions": [
    "$\\dfrac{7}{10}$",
    "$\\dfrac{10}{7}$",
    "$\\dfrac{7}{100}$",
    "$\\dfrac{7}{9}$"
   ],
   "pistes": [
    "Llegeix el nombre en veu alta: «set dècimes».",
    "Set dècimes vol dir $7$ partit per $10$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIGdpcmF0IGxhIGZyYWNjacOzOiAkXFxkZnJhY3sxMH17N30kIMOpcyBtw6lzIGdyYW4gcXVlICQxJCwgaSAkMHssfTckIMOpcyBtw6lzIHBldGl0LiIsICJIaSBoYSBVTkEgeGlmcmEgZGVjaW1hbDogZWwgZGVub21pbmFkb3Igw6lzICQxMCQuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHRlbmlyIHRhbnRzIHplcm9zIGNvbSB4aWZyZXMgZGVjaW1hbHMgdMOpIGVsIG5vbWJyZS4gQ29tcHRhLWxlcyB1bmEgYWx0cmEgdmVnYWRhLiIsICIkXFxkZnJhY3s3fXs5fT0weyx9Nzc3XFxkb3RzJCwgcXVlIG5vIMOpcyAkMHssfTckLiBIYXMgcG9zYXQgbm91cyBhbCBkZW5vbWluYWRvciwgcGVyw7IgYXF1ZXN0IGRlY2ltYWwgw6lzIGV4YWN0ZTogcydhY2FiYS4gRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIHVuYSBwb3TDqG5jaWEgZGUgJDEwJC4iXSwgImVyciI6IFsiIiwgIklOVkVSVElEQSIsICJQT1RFTkNJQV8xMCIsICJUUkFDVEFUX0NPTV9QRVJJT0RJQyJdLCAicmVzIjogWyIkMHssfTc9XFxkZnJhY3s3fXsxMH0kICh1bmEgeGlmcmEgZGVjaW1hbDogZGVub21pbmFkb3IgJDEwJCkiXX0="
  },
  {
   "id": "343b",
   "ex": 343,
   "ap": "b",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 1,
   "encapcalament": "Troba la fracció generatriu d'aquest nombre decimal exacte.",
   "enunciat": "$0{,}23$",
   "opcions": [
    "$\\dfrac{23}{10}$",
    "$\\dfrac{23}{100}$",
    "$\\dfrac{23}{1\\,000}$",
    "$\\dfrac{23}{99}$"
   ],
   "pistes": [
    "Llegeix el nombre en veu alta: «vint-i-tres centèsimes».",
    "Vint-i-tres centèsimes vol dir $23$ partit per $100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIaSBoYSBEVUVTIHhpZnJlcyBkZWNpbWFsczogZWwgZGVub21pbmFkb3Igw6lzICQxMDAkLiBFbCBkZW5vbWluYWRvciBoYSBkZSB0ZW5pciB0YW50cyB6ZXJvcyBjb20geGlmcmVzIGRlY2ltYWxzIHTDqSBlbCBub21icmUuIENvbXB0YS1sZXMgdW5hIGFsdHJhIHZlZ2FkYS4iLCAiIiwgIkhpIGhhIGR1ZXMgeGlmcmVzIGRlY2ltYWxzLCBubyB0cmVzLiBFbCBkZW5vbWluYWRvciBoYSBkZSB0ZW5pciB0YW50cyB6ZXJvcyBjb20geGlmcmVzIGRlY2ltYWxzIHTDqSBlbCBub21icmUuIENvbXB0YS1sZXMgdW5hIGFsdHJhIHZlZ2FkYS4iLCAiJFxcZGZyYWN7MjN9ezk5fT0weyx9MjMyM1xcZG90cyQsIHF1ZSBubyDDqXMgJDB7LH0yMyQuIEhhcyBwb3NhdCBub3VzIGFsIGRlbm9taW5hZG9yLCBwZXLDsiBhcXVlc3QgZGVjaW1hbCDDqXMgZXhhY3RlOiBzJ2FjYWJhLiBFbCBkZW5vbWluYWRvciBoYSBkZSBzZXIgdW5hIHBvdMOobmNpYSBkZSAkMTAkLiJdLCAiZXJyIjogWyJQT1RFTkNJQV8xMCIsICIiLCAiUE9URU5DSUFfMTAiLCAiVFJBQ1RBVF9DT01fUEVSSU9ESUMiXSwgInJlcyI6IFsiJDB7LH0yMz1cXGRmcmFjezIzfXsxMDB9JCAoZHVlcyB4aWZyZXMgZGVjaW1hbHM6IGRlbm9taW5hZG9yICQxMDAkKSJdfQ=="
  },
  {
   "id": "26a",
   "ex": 26,
   "ap": "a",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Tria el nombre decimal que compleix la condició. Recorda: el PERÍODE és el grup de xifres que es repeteix; l'ANTEPERÍODE, les que hi ha entre la coma i el període.",
   "enunciat": "Periòdic pur de període $5$.",
   "opcions": [
    "$3{,}\\overline{5}$",
    "$3{,}55$",
    "$3{,}4\\overline{5}$",
    "$3{,}5$"
   ],
   "pistes": [
    "«Pur» vol dir que el període comença just després de la coma, sense cap xifra entremig.",
    "Descarta primer les opcions sense barra: si les xifres s'acaben, no és periòdic, encara que una xifra es repeteixi dues vegades."
   ],
   "nota": "L'exercici original demana escriure'n un: aquí se'n proposen quatre i n'has de reconèixer el que compleix la condició.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiUmVwZXRpciB1bmEgeGlmcmEgZG9zIGNvcHMgbm8gw6lzIHRlbmlyIHBlcsOtb2RlOiBlbCBwZXLDrW9kZSBlcyByZXBldGVpeCBzZW5zZSBmaS4iLCAiQXF1ZXN0IMOpcyBwZXJpw7JkaWMgTUlYVDogdMOpIHVuICQ0JCBkJ2FudGVwZXLDrW9kZSBlbnRyZSBsYSBjb21hIGkgZWwgcGVyw61vZGUuIiwgIkFxdWVzdCBkZWNpbWFsIMOpcyBleGFjdGU6IHMnYWNhYmEgaSBubyByZXBldGVpeCByZXMuIl0sICJlcnIiOiBbIiIsICJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiUEVSSU9ERV9NQUxfSURFTlRJRklDQVQiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIl0sICJyZXMiOiBbIlVuIGRlY2ltYWwgcGVyacOyZGljIFBVUiB0w6kgZWwgcGVyw61vZGUganVzdCBkZXNwcsOpcyBkZSBsYSBjb21hLiIsICJVbiBkZSBNSVhUIHTDqSBhbGd1bmEgeGlmcmEgKGwnYW50ZXBlcsOtb2RlKSBlbnRyZSBsYSBjb21hIGkgZWwgcGVyw61vZGUuIiwgIlVuIGRlY2ltYWwgRVhBQ1RFIHTDqSB1biBub21icmUgZmluaXQgZGUgeGlmcmVzIGRlY2ltYWxzLiIsICJMYSByZXNwb3N0YSBxdWUgY29tcGxlaXggbGEgY29uZGljacOzIMOpcyAkM3ssfVxcb3ZlcmxpbmV7NX0kLiJdfQ=="
  },
  {
   "id": "26b",
   "ex": 26,
   "ap": "b",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Tria el nombre decimal que compleix la condició. Recorda: el PERÍODE és el grup de xifres que es repeteix; l'ANTEPERÍODE, les que hi ha entre la coma i el període.",
   "enunciat": "Exacte amb tres xifres decimals.",
   "opcions": [
    "$2{,}\\overline{375}$",
    "$2{,}37$",
    "$2{,}375$",
    "$2{,}3\\overline{7}$"
   ],
   "pistes": [
    "Un decimal exacte no té barra de període: les seves xifres s'acaben.",
    "Entre les opcions sense barra, compta les xifres que hi ha després de la coma."
   ],
   "nota": "L'exercici original demana escriure'n un: aquí se'n proposen quatre i n'has de reconèixer el que compleix la condició.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBwZXLDrW9kZSBmYSBxdWUgZWwgbm9tYnJlIG5vIHMnYWNhYmkgbWFpOiBubyDDqXMgZXhhY3RlLiIsICJBcXVlc3Qgbm9tw6lzIHTDqSBkdWVzIHhpZnJlcyBkZWNpbWFscy4iLCAiIiwgIkFxdWVzdCBubyDDqXMgZXhhY3RlOiB0w6kgcGVyw61vZGUsIG8gc2lndWkgaW5maW5pdGVzIHhpZnJlcyBkZWNpbWFscy4iXSwgImVyciI6IFsiVFJBQ1RBVF9DT01fUEVSSU9ESUMiLCAiUE9URU5DSUFfMTAiLCAiIiwgIlRSQUNUQVRfQ09NX1BFUklPRElDIl0sICJyZXMiOiBbIlVuIGRlY2ltYWwgcGVyacOyZGljIFBVUiB0w6kgZWwgcGVyw61vZGUganVzdCBkZXNwcsOpcyBkZSBsYSBjb21hLiIsICJVbiBkZSBNSVhUIHTDqSBhbGd1bmEgeGlmcmEgKGwnYW50ZXBlcsOtb2RlKSBlbnRyZSBsYSBjb21hIGkgZWwgcGVyw61vZGUuIiwgIlVuIGRlY2ltYWwgRVhBQ1RFIHTDqSB1biBub21icmUgZmluaXQgZGUgeGlmcmVzIGRlY2ltYWxzLiIsICJMYSByZXNwb3N0YSBxdWUgY29tcGxlaXggbGEgY29uZGljacOzIMOpcyAkMnssfTM3NSQuIl19"
  },
  {
   "id": "26c",
   "ex": 26,
   "ap": "c",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Tria el nombre decimal que compleix la condició. Recorda: el PERÍODE és el grup de xifres que es repeteix; l'ANTEPERÍODE, les que hi ha entre la coma i el període.",
   "enunciat": "Periòdic mixt d'anteperíode $28$.",
   "opcions": [
    "$0{,}\\overline{28}$",
    "$0{,}283$",
    "$0{,}3\\overline{28}$",
    "$0{,}28\\overline{3}$"
   ],
   "pistes": [
    "«Mixt» vol dir que entre la coma i el període hi ha alguna xifra: aquestes xifres són l'anteperíode.",
    "Les xifres que van entre la coma i la barra han de ser exactament $28$, i el període va darrere seu."
   ],
   "nota": "L'exercici original demana escriure'n un: aquí se'n proposen quatre i n'has de reconèixer el que compleix la condició.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBcXVlc3Qgw6lzIHBlcmnDsmRpYyBQVVI6IG5vIHTDqSBhbnRlcGVyw61vZGUuIiwgIkFxdWVzdCDDqXMgZXhhY3RlOiBubyB0w6kgcGVyw61vZGUuIiwgIkFxdcOtIGVsICQyOCQgw6lzIGVsIHBlcsOtb2RlLCBubyBsJ2FudGVwZXLDrW9kZTogbCdhbnRlcGVyw61vZGUgw6lzIGVsICQzJC4iLCAiIl0sICJlcnIiOiBbIlBFUklPREVfTUFMX0lERU5USUZJQ0FUIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICJQRVJJT0RFX01BTF9JREVOVElGSUNBVCIsICIiXSwgInJlcyI6IFsiVW4gZGVjaW1hbCBwZXJpw7JkaWMgUFVSIHTDqSBlbCBwZXLDrW9kZSBqdXN0IGRlc3Byw6lzIGRlIGxhIGNvbWEuIiwgIlVuIGRlIE1JWFQgdMOpIGFsZ3VuYSB4aWZyYSAobCdhbnRlcGVyw61vZGUpIGVudHJlIGxhIGNvbWEgaSBlbCBwZXLDrW9kZS4iLCAiVW4gZGVjaW1hbCBFWEFDVEUgdMOpIHVuIG5vbWJyZSBmaW5pdCBkZSB4aWZyZXMgZGVjaW1hbHMuIiwgIkxhIHJlc3Bvc3RhIHF1ZSBjb21wbGVpeCBsYSBjb25kaWNpw7Mgw6lzICQweyx9MjhcXG92ZXJsaW5lezN9JC4iXX0="
  },
  {
   "id": "26d",
   "ex": 26,
   "ap": "d",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Tria el nombre decimal que compleix la condició. Recorda: el PERÍODE és el grup de xifres que es repeteix; l'ANTEPERÍODE, les que hi ha entre la coma i el període.",
   "enunciat": "Periòdic pur amb període de $4$ xifres.",
   "opcions": [
    "$1{,}\\overline{234}$",
    "$1{,}2345$",
    "$1{,}2\\overline{345}$",
    "$1{,}\\overline{2345}$"
   ],
   "pistes": [
    "«Pur» vol dir que el període comença just després de la coma, sense cap xifra entremig.",
    "Compta les xifres que hi ha sota la barra: n'han de ser $4$. I entre la coma i la barra no n'hi ha d'haver cap."
   ],
   "nota": "L'exercici original demana escriure'n un: aquí se'n proposen quatre i n'has de reconèixer el que compleix la condició.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBwZXLDrW9kZSB0w6kgJDMkIHhpZnJlcywgbm8gJDQkLiIsICJBcXVlc3Qgw6lzIGV4YWN0ZS4iLCAiw4lzIG1peHQgaSBlbCBwZXLDrW9kZSBub23DqXMgdMOpICQzJCB4aWZyZXMuIiwgIiJdLCAiZXJyIjogWyJQRVJJT0RFX01BTF9JREVOVElGSUNBVCIsICJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiUEVSSU9ERV9NQUxfSURFTlRJRklDQVQiLCAiIl0sICJyZXMiOiBbIlVuIGRlY2ltYWwgcGVyacOyZGljIFBVUiB0w6kgZWwgcGVyw61vZGUganVzdCBkZXNwcsOpcyBkZSBsYSBjb21hLiIsICJVbiBkZSBNSVhUIHTDqSBhbGd1bmEgeGlmcmEgKGwnYW50ZXBlcsOtb2RlKSBlbnRyZSBsYSBjb21hIGkgZWwgcGVyw61vZGUuIiwgIlVuIGRlY2ltYWwgRVhBQ1RFIHTDqSB1biBub21icmUgZmluaXQgZGUgeGlmcmVzIGRlY2ltYWxzLiIsICJMYSByZXNwb3N0YSBxdWUgY29tcGxlaXggbGEgY29uZGljacOzIMOpcyAkMXssfVxcb3ZlcmxpbmV7MjM0NX0kLiJdfQ=="
  },
  {
   "id": "26e",
   "ex": 26,
   "ap": "e",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Tria el nombre decimal que compleix la condició. Recorda: el PERÍODE és el grup de xifres que es repeteix; l'ANTEPERÍODE, les que hi ha entre la coma i el període.",
   "enunciat": "Periòdic mixt amb període $37$.",
   "opcions": [
    "$0{,}37\\overline{5}$",
    "$0{,}5\\overline{37}$",
    "$0{,}537$",
    "$0{,}\\overline{37}$"
   ],
   "pistes": [
    "«Mixt» vol dir que entre la coma i el període hi ha alguna xifra: aquestes xifres són l'anteperíode.",
    "El període és el que va sota la barra: aquí ha de ser $37$, amb alguna xifra al davant, entre la coma i la barra."
   ],
   "nota": "L'exercici original demana escriure'n un: aquí se'n proposen quatre i n'has de reconèixer el que compleix la condició.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBcXXDrSBlbCAkMzckIGZhIGQnYW50ZXBlcsOtb2RlIGkgZWwgcGVyw61vZGUgw6lzIGVsICQ1JDoganVzdCBhbCByZXbDqXMuIiwgIiIsICJBcXVlc3Qgw6lzIGV4YWN0ZS4iLCAiQXF1ZXN0IMOpcyBwdXI6IHBlcnF1w6ggc2lndWkgbWl4dCBjYWwgYWxndW5hIHhpZnJhIGFiYW5zIGRlbCBwZXLDrW9kZS4iXSwgImVyciI6IFsiUEVSSU9ERV9NQUxfSURFTlRJRklDQVQiLCAiIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICJQRVJJT0RFX01BTF9JREVOVElGSUNBVCJdLCAicmVzIjogWyJVbiBkZWNpbWFsIHBlcmnDsmRpYyBQVVIgdMOpIGVsIHBlcsOtb2RlIGp1c3QgZGVzcHLDqXMgZGUgbGEgY29tYS4iLCAiVW4gZGUgTUlYVCB0w6kgYWxndW5hIHhpZnJhIChsJ2FudGVwZXLDrW9kZSkgZW50cmUgbGEgY29tYSBpIGVsIHBlcsOtb2RlLiIsICJVbiBkZWNpbWFsIEVYQUNURSB0w6kgdW4gbm9tYnJlIGZpbml0IGRlIHhpZnJlcyBkZWNpbWFscy4iLCAiTGEgcmVzcG9zdGEgcXVlIGNvbXBsZWl4IGxhIGNvbmRpY2nDsyDDqXMgJDB7LH01XFxvdmVybGluZXszN30kLiJdfQ=="
  },
  {
   "id": "26f",
   "ex": 26,
   "ap": "f",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 2,
   "encapcalament": "Tria el nombre decimal que compleix la condició. Recorda: el PERÍODE és el grup de xifres que es repeteix; l'ANTEPERÍODE, les que hi ha entre la coma i el període.",
   "enunciat": "Exacte amb part entera $2$.",
   "opcions": [
    "$22{,}5$",
    "$2{,}\\overline{7}$",
    "$2{,}75$",
    "$0{,}2$"
   ],
   "pistes": [
    "Un decimal exacte no té barra de període: les seves xifres s'acaben.",
    "La part entera és el que hi ha abans de la coma: aquí ha de ser exactament $2$."
   ],
   "nota": "L'exercici original demana escriure'n un: aquí se'n proposen quatre i n'has de reconèixer el que compleix la condició.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJMYSBwYXJ0IGVudGVyYSBkJ2FxdWVzdCBub21icmUgw6lzICQyMiQuIiwgIkFxdWVzdCBubyDDqXMgZXhhY3RlLiIsICIiLCAiTGEgcGFydCBlbnRlcmEgZCdhcXVlc3Qgbm9tYnJlIMOpcyAkMCQ7IGVsICQyJCDDqXMgdW5hIHhpZnJhIGRlY2ltYWwuIl0sICJlcnIiOiBbIlBBUlRfRU5URVJBX09CTElEQURBIiwgIlRSQUNUQVRfQ09NX1BFUklPRElDIiwgIiIsICJQQVJUX0VOVEVSQV9PQkxJREFEQSJdLCAicmVzIjogWyJVbiBkZWNpbWFsIHBlcmnDsmRpYyBQVVIgdMOpIGVsIHBlcsOtb2RlIGp1c3QgZGVzcHLDqXMgZGUgbGEgY29tYS4iLCAiVW4gZGUgTUlYVCB0w6kgYWxndW5hIHhpZnJhIChsJ2FudGVwZXLDrW9kZSkgZW50cmUgbGEgY29tYSBpIGVsIHBlcsOtb2RlLiIsICJVbiBkZWNpbWFsIEVYQUNURSB0w6kgdW4gbm9tYnJlIGZpbml0IGRlIHhpZnJlcyBkZWNpbWFscy4iLCAiTGEgcmVzcG9zdGEgcXVlIGNvbXBsZWl4IGxhIGNvbmRpY2nDsyDDqXMgJDJ7LH03NSQuIl19"
  },
  {
   "id": "27a",
   "ex": 27,
   "ap": "a",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la fracció generatriu.",
   "enunciat": "$0{,}2$",
   "opcions": [
    "$\\dfrac{1}{50}$",
    "$2$",
    "$\\dfrac{2}{9}$",
    "$\\dfrac{1}{5}$"
   ],
   "pistes": [
    "El numerador és el nombre sense la coma; el denominador, un $1$ seguit de tants zeros com xifres decimals hi ha.",
    "Aquí hi ha $1$ xifra després de la coma: el denominador és $10$. Després simplifica la fracció, si es pot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIaSBoYSB1biB6ZXJvIGRlIG3DqXMgYWwgZGVub21pbmFkb3IuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHRlbmlyIHRhbnRzIHplcm9zIGNvbSB4aWZyZXMgZGVjaW1hbHMgdMOpIGVsIG5vbWJyZS4gQ29tcHRhLWxlcyB1bmEgYWx0cmEgdmVnYWRhLiIsICJIaSBmYWx0YSB1biB6ZXJvIGFsIGRlbm9taW5hZG9yLiBFbCBkZW5vbWluYWRvciBoYSBkZSB0ZW5pciB0YW50cyB6ZXJvcyBjb20geGlmcmVzIGRlY2ltYWxzIHTDqSBlbCBub21icmUuIENvbXB0YS1sZXMgdW5hIGFsdHJhIHZlZ2FkYS4iLCAiSGFzIHBvc2F0IG5vdXMgYWwgZGVub21pbmFkb3IsIHBlcsOyIGFxdWVzdCBkZWNpbWFsIMOpcyBleGFjdGU6IHMnYWNhYmEuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciB1bmEgcG90w6huY2lhIGRlICQxMCQuIiwgIiJdLCAiZXJyIjogWyJQT1RFTkNJQV8xMCIsICJQT1RFTkNJQV8xMCIsICJUUkFDVEFUX0NPTV9QRVJJT0RJQyIsICIiXSwgInJlcyI6IFsiJDB7LH0yID0gXFxkZnJhY3syfXsxMH0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7MX17NX0kIl19"
  },
  {
   "id": "27b",
   "ex": 27,
   "ap": "b",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la fracció generatriu.",
   "enunciat": "$5{,}25$",
   "opcions": [
    "$\\dfrac{21}{4}$",
    "$\\dfrac{175}{33}$",
    "$\\dfrac{21}{40}$",
    "$\\dfrac{1}{4}$"
   ],
   "pistes": [
    "El numerador és el nombre sense la coma; el denominador, un $1$ seguit de tants zeros com xifres decimals hi ha.",
    "Aquí hi ha $2$ xifres després de la coma: el denominador és $100$. Després simplifica la fracció, si es pot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHBvc2F0IG5vdXMgYWwgZGVub21pbmFkb3IsIHBlcsOyIGFxdWVzdCBkZWNpbWFsIMOpcyBleGFjdGU6IHMnYWNhYmEuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciB1bmEgcG90w6huY2lhIGRlICQxMCQuIiwgIkhpIGhhIHVuIHplcm8gZGUgbcOpcyBhbCBkZW5vbWluYWRvci4gRWwgZGVub21pbmFkb3IgaGEgZGUgdGVuaXIgdGFudHMgemVyb3MgY29tIHhpZnJlcyBkZWNpbWFscyB0w6kgZWwgbm9tYnJlLiBDb21wdGEtbGVzIHVuYSBhbHRyYSB2ZWdhZGEuIiwgIlQnaGFzIGRlaXhhdCBsYSBwYXJ0IGVudGVyYS4gRWwgbnVtZXJhZG9yIMOpcyBlbCBub21icmUgc2VuY2VyIHNlbnNlIGxhIGNvbWEsIG5vIG5vbcOpcyBsZXMgeGlmcmVzIGRlY2ltYWxzLiJdLCAiZXJyIjogWyIiLCAiVFJBQ1RBVF9DT01fUEVSSU9ESUMiLCAiUE9URU5DSUFfMTAiLCAiUEFSVF9FTlRFUkFfT0JMSURBREEiXSwgInJlcyI6IFsiJDV7LH0yNSA9IFxcZGZyYWN7NTI1fXsxMDB9JCIsICJTaW1wbGlmaWNhbnQ6ICRcXGRmcmFjezIxfXs0fSQiXX0="
  },
  {
   "id": "27c",
   "ex": 27,
   "ap": "c",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la fracció generatriu.",
   "enunciat": "$95{,}7$",
   "opcions": [
    "$\\dfrac{957}{100}$",
    "$\\dfrac{319}{3}$",
    "$\\dfrac{957}{10}$",
    "$\\dfrac{7}{10}$"
   ],
   "pistes": [
    "El numerador és el nombre sense la coma; el denominador, un $1$ seguit de tants zeros com xifres decimals hi ha.",
    "Aquí hi ha $1$ xifra després de la coma: el denominador és $10$. Després simplifica la fracció, si es pot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIaSBoYSB1biB6ZXJvIGRlIG3DqXMgYWwgZGVub21pbmFkb3IuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHRlbmlyIHRhbnRzIHplcm9zIGNvbSB4aWZyZXMgZGVjaW1hbHMgdMOpIGVsIG5vbWJyZS4gQ29tcHRhLWxlcyB1bmEgYWx0cmEgdmVnYWRhLiIsICJIYXMgcG9zYXQgbm91cyBhbCBkZW5vbWluYWRvciwgcGVyw7IgYXF1ZXN0IGRlY2ltYWwgw6lzIGV4YWN0ZTogcydhY2FiYS4gRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIHVuYSBwb3TDqG5jaWEgZGUgJDEwJC4iLCAiIiwgIlQnaGFzIGRlaXhhdCBsYSBwYXJ0IGVudGVyYS4gRWwgbnVtZXJhZG9yIMOpcyBlbCBub21icmUgc2VuY2VyIHNlbnNlIGxhIGNvbWEsIG5vIG5vbcOpcyBsZXMgeGlmcmVzIGRlY2ltYWxzLiJdLCAiZXJyIjogWyJQT1RFTkNJQV8xMCIsICJUUkFDVEFUX0NPTV9QRVJJT0RJQyIsICIiLCAiUEFSVF9FTlRFUkFfT0JMSURBREEiXSwgInJlcyI6IFsiJDk1eyx9NyA9IFxcZGZyYWN7OTU3fXsxMH0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7OTU3fXsxMH0kIl19"
  },
  {
   "id": "27d",
   "ex": 27,
   "ap": "d",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la fracció generatriu.",
   "enunciat": "$8{,}0002$",
   "opcions": [
    "$\\dfrac{80002}{9999}$",
    "$\\dfrac{40001}{5000}$",
    "$\\dfrac{1}{5000}$",
    "$\\dfrac{40001}{50000}$"
   ],
   "pistes": [
    "El numerador és el nombre sense la coma; el denominador, un $1$ seguit de tants zeros com xifres decimals hi ha.",
    "Aquí hi ha $4$ xifres després de la coma: el denominador és $10\\,000$. Després simplifica la fracció, si es pot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcG9zYXQgbm91cyBhbCBkZW5vbWluYWRvciwgcGVyw7IgYXF1ZXN0IGRlY2ltYWwgw6lzIGV4YWN0ZTogcydhY2FiYS4gRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIHVuYSBwb3TDqG5jaWEgZGUgJDEwJC4iLCAiIiwgIlQnaGFzIGRlaXhhdCBsYSBwYXJ0IGVudGVyYS4gRWwgbnVtZXJhZG9yIMOpcyBlbCBub21icmUgc2VuY2VyIHNlbnNlIGxhIGNvbWEsIG5vIG5vbcOpcyBsZXMgeGlmcmVzIGRlY2ltYWxzLiIsICJIaSBoYSB1biB6ZXJvIGRlIG3DqXMgYWwgZGVub21pbmFkb3IuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHRlbmlyIHRhbnRzIHplcm9zIGNvbSB4aWZyZXMgZGVjaW1hbHMgdMOpIGVsIG5vbWJyZS4gQ29tcHRhLWxlcyB1bmEgYWx0cmEgdmVnYWRhLiJdLCAiZXJyIjogWyJUUkFDVEFUX0NPTV9QRVJJT0RJQyIsICIiLCAiUEFSVF9FTlRFUkFfT0JMSURBREEiLCAiUE9URU5DSUFfMTAiXSwgInJlcyI6IFsiJDh7LH0wMDAyID0gXFxkZnJhY3s4MDAwMn17MTAwMDB9JCIsICJTaW1wbGlmaWNhbnQ6ICRcXGRmcmFjezQwMDAxfXs1MDAwfSQiXX0="
  },
  {
   "id": "27e",
   "ex": 27,
   "ap": "e",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la fracció generatriu.",
   "enunciat": "$0{,}01$",
   "opcions": [
    "$\\dfrac{1}{100}$",
    "$\\dfrac{1}{10}$",
    "$\\dfrac{1}{1000}$",
    "$\\dfrac{1}{99}$"
   ],
   "pistes": [
    "El numerador és el nombre sense la coma; el denominador, un $1$ seguit de tants zeros com xifres decimals hi ha.",
    "Aquí hi ha $2$ xifres després de la coma: el denominador és $100$. Després simplifica la fracció, si es pot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGkgZmFsdGEgdW4gemVybyBhbCBkZW5vbWluYWRvci4gRWwgZGVub21pbmFkb3IgaGEgZGUgdGVuaXIgdGFudHMgemVyb3MgY29tIHhpZnJlcyBkZWNpbWFscyB0w6kgZWwgbm9tYnJlLiBDb21wdGEtbGVzIHVuYSBhbHRyYSB2ZWdhZGEuIiwgIkhpIGhhIHVuIHplcm8gZGUgbcOpcyBhbCBkZW5vbWluYWRvci4gRWwgZGVub21pbmFkb3IgaGEgZGUgdGVuaXIgdGFudHMgemVyb3MgY29tIHhpZnJlcyBkZWNpbWFscyB0w6kgZWwgbm9tYnJlLiBDb21wdGEtbGVzIHVuYSBhbHRyYSB2ZWdhZGEuIiwgIkhhcyBwb3NhdCBub3VzIGFsIGRlbm9taW5hZG9yLCBwZXLDsiBhcXVlc3QgZGVjaW1hbCDDqXMgZXhhY3RlOiBzJ2FjYWJhLiBFbCBkZW5vbWluYWRvciBoYSBkZSBzZXIgdW5hIHBvdMOobmNpYSBkZSAkMTAkLiJdLCAiZXJyIjogWyIiLCAiUE9URU5DSUFfMTAiLCAiUE9URU5DSUFfMTAiLCAiVFJBQ1RBVF9DT01fUEVSSU9ESUMiXSwgInJlcyI6IFsiJDB7LH0wMSA9IFxcZGZyYWN7MX17MTAwfSQiLCAiU2ltcGxpZmljYW50OiAkXFxkZnJhY3sxfXsxMDB9JCJdfQ=="
  },
  {
   "id": "27f",
   "ex": 27,
   "ap": "f",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la fracció generatriu.",
   "enunciat": "$37{,}875$",
   "opcions": [
    "$\\dfrac{303}{80}$",
    "$\\dfrac{7}{8}$",
    "$\\dfrac{12625}{333}$",
    "$\\dfrac{303}{8}$"
   ],
   "pistes": [
    "El numerador és el nombre sense la coma; el denominador, un $1$ seguit de tants zeros com xifres decimals hi ha.",
    "Aquí hi ha $3$ xifres després de la coma: el denominador és $1000$. Després simplifica la fracció, si es pot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIaSBoYSB1biB6ZXJvIGRlIG3DqXMgYWwgZGVub21pbmFkb3IuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHRlbmlyIHRhbnRzIHplcm9zIGNvbSB4aWZyZXMgZGVjaW1hbHMgdMOpIGVsIG5vbWJyZS4gQ29tcHRhLWxlcyB1bmEgYWx0cmEgdmVnYWRhLiIsICJUJ2hhcyBkZWl4YXQgbGEgcGFydCBlbnRlcmEuIEVsIG51bWVyYWRvciDDqXMgZWwgbm9tYnJlIHNlbmNlciBzZW5zZSBsYSBjb21hLCBubyBub23DqXMgbGVzIHhpZnJlcyBkZWNpbWFscy4iLCAiSGFzIHBvc2F0IG5vdXMgYWwgZGVub21pbmFkb3IsIHBlcsOyIGFxdWVzdCBkZWNpbWFsIMOpcyBleGFjdGU6IHMnYWNhYmEuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciB1bmEgcG90w6huY2lhIGRlICQxMCQuIiwgIiJdLCAiZXJyIjogWyJQT1RFTkNJQV8xMCIsICJQQVJUX0VOVEVSQV9PQkxJREFEQSIsICJUUkFDVEFUX0NPTV9QRVJJT0RJQyIsICIiXSwgInJlcyI6IFsiJDM3eyx9ODc1ID0gXFxkZnJhY3szNzg3NX17MTAwMH0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7MzAzfXs4fSQiXX0="
  },
  {
   "id": "27g",
   "ex": 27,
   "ap": "g",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la fracció generatriu.",
   "enunciat": "$342{,}12$",
   "opcions": [
    "$\\dfrac{3}{25}$",
    "$\\dfrac{11404}{33}$",
    "$\\dfrac{8553}{250}$",
    "$\\dfrac{8553}{25}$"
   ],
   "pistes": [
    "El numerador és el nombre sense la coma; el denominador, un $1$ seguit de tants zeros com xifres decimals hi ha.",
    "Aquí hi ha $2$ xifres després de la coma: el denominador és $100$. Després simplifica la fracció, si es pot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgbGEgcGFydCBlbnRlcmEuIEVsIG51bWVyYWRvciDDqXMgZWwgbm9tYnJlIHNlbmNlciBzZW5zZSBsYSBjb21hLCBubyBub23DqXMgbGVzIHhpZnJlcyBkZWNpbWFscy4iLCAiSGFzIHBvc2F0IG5vdXMgYWwgZGVub21pbmFkb3IsIHBlcsOyIGFxdWVzdCBkZWNpbWFsIMOpcyBleGFjdGU6IHMnYWNhYmEuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciB1bmEgcG90w6huY2lhIGRlICQxMCQuIiwgIkhpIGhhIHVuIHplcm8gZGUgbcOpcyBhbCBkZW5vbWluYWRvci4gRWwgZGVub21pbmFkb3IgaGEgZGUgdGVuaXIgdGFudHMgemVyb3MgY29tIHhpZnJlcyBkZWNpbWFscyB0w6kgZWwgbm9tYnJlLiBDb21wdGEtbGVzIHVuYSBhbHRyYSB2ZWdhZGEuIiwgIiJdLCAiZXJyIjogWyJQQVJUX0VOVEVSQV9PQkxJREFEQSIsICJUUkFDVEFUX0NPTV9QRVJJT0RJQyIsICJQT1RFTkNJQV8xMCIsICIiXSwgInJlcyI6IFsiJDM0MnssfTEyID0gXFxkZnJhY3szNDIxMn17MTAwfSQiLCAiU2ltcGxpZmljYW50OiAkXFxkZnJhY3s4NTUzfXsyNX0kIl19"
  },
  {
   "id": "27h",
   "ex": 27,
   "ap": "h",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 2,
   "encapcalament": "Troba la fracció generatriu.",
   "enunciat": "$0{,}000003$",
   "opcions": [
    "$\\dfrac{3}{1000000}$",
    "$\\dfrac{3}{100000}$",
    "$\\dfrac{3}{10000000}$",
    "$\\dfrac{1}{333333}$"
   ],
   "pistes": [
    "El numerador és el nombre sense la coma; el denominador, un $1$ seguit de tants zeros com xifres decimals hi ha.",
    "Aquí hi ha $6$ xifres després de la coma: el denominador és $1\\,000\\,000$. Després simplifica la fracció, si es pot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGkgZmFsdGEgdW4gemVybyBhbCBkZW5vbWluYWRvci4gRWwgZGVub21pbmFkb3IgaGEgZGUgdGVuaXIgdGFudHMgemVyb3MgY29tIHhpZnJlcyBkZWNpbWFscyB0w6kgZWwgbm9tYnJlLiBDb21wdGEtbGVzIHVuYSBhbHRyYSB2ZWdhZGEuIiwgIkhpIGhhIHVuIHplcm8gZGUgbcOpcyBhbCBkZW5vbWluYWRvci4gRWwgZGVub21pbmFkb3IgaGEgZGUgdGVuaXIgdGFudHMgemVyb3MgY29tIHhpZnJlcyBkZWNpbWFscyB0w6kgZWwgbm9tYnJlLiBDb21wdGEtbGVzIHVuYSBhbHRyYSB2ZWdhZGEuIiwgIkhhcyBwb3NhdCBub3VzIGFsIGRlbm9taW5hZG9yLCBwZXLDsiBhcXVlc3QgZGVjaW1hbCDDqXMgZXhhY3RlOiBzJ2FjYWJhLiBFbCBkZW5vbWluYWRvciBoYSBkZSBzZXIgdW5hIHBvdMOobmNpYSBkZSAkMTAkLiJdLCAiZXJyIjogWyIiLCAiUE9URU5DSUFfMTAiLCAiUE9URU5DSUFfMTAiLCAiVFJBQ1RBVF9DT01fUEVSSU9ESUMiXSwgInJlcyI6IFsiJDB7LH0wMDAwMDMgPSBcXGRmcmFjezN9ezEwMDAwMDB9JCIsICJTaW1wbGlmaWNhbnQ6ICRcXGRmcmFjezN9ezEwMDAwMDB9JCJdfQ=="
  },
  {
   "id": "28a",
   "ex": 28,
   "ap": "a",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$3{,}\\overline{5}$",
   "opcions": [
    "$\\dfrac{32}{9}$",
    "$\\dfrac{16}{5}$",
    "$\\dfrac{35}{9}$",
    "$\\dfrac{7}{2}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «5» i no hi ha anteperíode: el denominador porta un $9$ i cap $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHBvc2F0IG5vbcOpcyBwb3TDqG5jaWVzIGRlICQxMCQgYWwgZGVub21pbmFkb3IuIEFpeMOyIHZhbCBwZXIgYWxzIGRlY2ltYWxzIGV4YWN0ZXM7IHNpIGhpIGhhIHBlcsOtb2RlLCBlbCBkZW5vbWluYWRvciBoYSBkZSBkdXIgbm91cy4iLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiSGFzIHBvc2F0IG5vbcOpcyBwb3TDqG5jaWVzIGRlICQxMCQgYWwgZGVub21pbmFkb3IuIEFpeMOyIHZhbCBwZXIgYWxzIGRlY2ltYWxzIGV4YWN0ZXM7IHNpIGhpIGhhIHBlcsOtb2RlLCBlbCBkZW5vbWluYWRvciBoYSBkZSBkdXIgbm91cy4iXSwgImVyciI6IFsiIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICJUUkFDVEFUX0NPTV9FWEFDVEUiXSwgInJlcyI6IFsiTm9tYnJlIHNlbmNlciBzZW5zZSBjb21hOiAkMzUkLiBQYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlOiAkMyQuIiwgIkRlbm9taW5hZG9yOiAkMSQgbm91IGkgJDAkIHplcm9zICRcXHJpZ2h0YXJyb3cgOSQiLCAiJDN7LH1cXG92ZXJsaW5lezV9ID0gXFxkZnJhY3szNSAtIDN9ezl9ID0gXFxkZnJhY3szMn17OX0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7MzJ9ezl9JCJdfQ=="
  },
  {
   "id": "28b",
   "ex": 28,
   "ap": "b",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$5{,}9\\overline{02}$",
   "opcions": [
    "$\\dfrac{2951}{495}$",
    "$\\dfrac{5843}{900}$",
    "$\\dfrac{2951}{500}$",
    "$\\dfrac{5843}{990}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «02» i l'anteperíode, «9»: el denominador porta dos $9$ i un $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJBbCBkZW5vbWluYWRvciB2YW4gdGFudHMgTk9VUyBjb20geGlmcmVzIHTDqSBlbCBwZXLDrW9kZSwgaSB0YW50cyBaRVJPUyBjb20geGlmcmVzIHTDqSBsJ2FudGVwZXLDrW9kZS4gQXF1w60gaG8gdGVucyBpbnRlcmNhbnZpYXQuIiwgIkhhcyBwb3NhdCBub23DqXMgcG90w6huY2llcyBkZSAkMTAkIGFsIGRlbm9taW5hZG9yLiBBaXjDsiB2YWwgcGVyIGFscyBkZWNpbWFscyBleGFjdGVzOyBzaSBoaSBoYSBwZXLDrW9kZSwgZWwgZGVub21pbmFkb3IgaGEgZGUgZHVyIG5vdXMuIiwgIiJdLCAiZXJyIjogWyJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICJOT1VTX0lfWkVST1MiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIiJdLCAicmVzIjogWyJOb21icmUgc2VuY2VyIHNlbnNlIGNvbWE6ICQ1OTAyJC4gUGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZTogJDU5JC4iLCAiRGVub21pbmFkb3I6ICQyJCBub3VzIGkgJDEkIHplcm8gJFxccmlnaHRhcnJvdyA5OTAkIiwgIiQ1eyx9OVxcb3ZlcmxpbmV7MDJ9ID0gXFxkZnJhY3s1OTAyIC0gNTl9ezk5MH0gPSBcXGRmcmFjezU4NDN9ezk5MH0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7NTg0M317OTkwfSQiXX0="
  },
  {
   "id": "28c",
   "ex": 28,
   "ap": "c",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$12{,}9\\overline{9}$",
   "opcions": [
    "$13$",
    "$\\dfrac{433}{30}$",
    "$\\dfrac{13}{11}$",
    "$\\dfrac{1299}{100}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «9» i l'anteperíode, «9»: el denominador porta un $9$ i un $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiSGFzIHBvc2F0IHVuIG5vdSBkZSBtw6lzLiBBbCBkZW5vbWluYWRvciB2YW4gdGFudHMgTk9VUyBjb20geGlmcmVzIHTDqSBlbCBwZXLDrW9kZSwgaSB0YW50cyBaRVJPUyBjb20geGlmcmVzIHTDqSBsJ2FudGVwZXLDrW9kZS4gQXF1w60gaG8gdGVucyBpbnRlcmNhbnZpYXQuIiwgIkhhcyBwb3NhdCBub23DqXMgcG90w6huY2llcyBkZSAkMTAkIGFsIGRlbm9taW5hZG9yLiBBaXjDsiB2YWwgcGVyIGFscyBkZWNpbWFscyBleGFjdGVzOyBzaSBoaSBoYSBwZXLDrW9kZSwgZWwgZGVub21pbmFkb3IgaGEgZGUgZHVyIG5vdXMuIl0sICJlcnIiOiBbIiIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICJOT1VTX0lfWkVST1MiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIl0sICJyZXMiOiBbIk5vbWJyZSBzZW5jZXIgc2Vuc2UgY29tYTogJDEyOTkkLiBQYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlOiAkMTI5JC4iLCAiRGVub21pbmFkb3I6ICQxJCBub3UgaSAkMSQgemVybyAkXFxyaWdodGFycm93IDkwJCIsICIkMTJ7LH05XFxvdmVybGluZXs5fSA9IFxcZGZyYWN7MTI5OSAtIDEyOX17OTB9ID0gXFxkZnJhY3sxMTcwfXs5MH0kIiwgIlNpbXBsaWZpY2FudDogJDEzJCJdLCAiY29tIjogIkZpeGEndCBlbiBlbCByZXN1bHRhdDogJDEyeyx9OVxcb3ZlcmxpbmV7OX0kIMOpcyBleGFjdGFtZW50ICQxMyQuIFVuIHBlcsOtb2RlIGRlIG5vdXMgc2VtcHJlIGZhIHB1amFyIHVuYSB1bml0YXQgbGEgeGlmcmEgZCdhYmFuczogJDB7LH1cXG92ZXJsaW5lezl9PTEkLiJ9"
  },
  {
   "id": "28d",
   "ex": 28,
   "ap": "d",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$2{,}3\\overline{7}$",
   "opcions": [
    "$\\dfrac{107}{45}$",
    "$\\dfrac{79}{30}$",
    "$\\dfrac{107}{495}$",
    "$\\dfrac{237}{100}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «7» i l'anteperíode, «3»: el denominador porta un $9$ i un $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiSGFzIHBvc2F0IHVuIG5vdSBkZSBtw6lzLiBBbCBkZW5vbWluYWRvciB2YW4gdGFudHMgTk9VUyBjb20geGlmcmVzIHTDqSBlbCBwZXLDrW9kZSwgaSB0YW50cyBaRVJPUyBjb20geGlmcmVzIHTDqSBsJ2FudGVwZXLDrW9kZS4gQXF1w60gaG8gdGVucyBpbnRlcmNhbnZpYXQuIiwgIkhhcyBwb3NhdCBub23DqXMgcG90w6huY2llcyBkZSAkMTAkIGFsIGRlbm9taW5hZG9yLiBBaXjDsiB2YWwgcGVyIGFscyBkZWNpbWFscyBleGFjdGVzOyBzaSBoaSBoYSBwZXLDrW9kZSwgZWwgZGVub21pbmFkb3IgaGEgZGUgZHVyIG5vdXMuIl0sICJlcnIiOiBbIiIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICJOT1VTX0lfWkVST1MiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIl0sICJyZXMiOiBbIk5vbWJyZSBzZW5jZXIgc2Vuc2UgY29tYTogJDIzNyQuIFBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGU6ICQyMyQuIiwgIkRlbm9taW5hZG9yOiAkMSQgbm91IGkgJDEkIHplcm8gJFxccmlnaHRhcnJvdyA5MCQiLCAiJDJ7LH0zXFxvdmVybGluZXs3fSA9IFxcZGZyYWN7MjM3IC0gMjN9ezkwfSA9IFxcZGZyYWN7MjE0fXs5MH0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7MTA3fXs0NX0kIl19"
  },
  {
   "id": "28e",
   "ex": 28,
   "ap": "e",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$0{,}015\\overline{7}$",
   "opcions": [
    "$\\dfrac{157}{9000}$",
    "$\\dfrac{157}{10000}$",
    "$\\dfrac{71}{4500}$",
    "$\\dfrac{71}{4995}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «7» i l'anteperíode, «015»: el denominador porta un $9$ i tres $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiQWwgZGVub21pbmFkb3IgdmFuIHRhbnRzIE5PVVMgY29tIHhpZnJlcyB0w6kgZWwgcGVyw61vZGUsIGkgdGFudHMgWkVST1MgY29tIHhpZnJlcyB0w6kgbCdhbnRlcGVyw61vZGUuIEFxdcOtIGhvIHRlbnMgaW50ZXJjYW52aWF0LiJdLCAiZXJyIjogWyJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiIiwgIk5PVVNfSV9aRVJPUyJdLCAicmVzIjogWyJOb21icmUgc2VuY2VyIHNlbnNlIGNvbWE6ICQxNTckLiBQYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlOiAkMTUkLiIsICJEZW5vbWluYWRvcjogJDEkIG5vdSBpICQzJCB6ZXJvcyAkXFxyaWdodGFycm93IDkwMDAkIiwgIiQweyx9MDE1XFxvdmVybGluZXs3fSA9IFxcZGZyYWN7MTU3IC0gMTV9ezkwMDB9ID0gXFxkZnJhY3sxNDJ9ezkwMDB9JCIsICJTaW1wbGlmaWNhbnQ6ICRcXGRmcmFjezcxfXs0NTAwfSQiXX0="
  },
  {
   "id": "28f",
   "ex": 28,
   "ap": "f",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$42{,}00\\overline{2}$",
   "opcions": [
    "$\\dfrac{18901}{495}$",
    "$\\dfrac{18901}{450}$",
    "$\\dfrac{21001}{450}$",
    "$\\dfrac{21001}{500}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «2» i l'anteperíode, «00»: el denominador porta un $9$ i dos $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBbCBkZW5vbWluYWRvciB2YW4gdGFudHMgTk9VUyBjb20geGlmcmVzIHTDqSBlbCBwZXLDrW9kZSwgaSB0YW50cyBaRVJPUyBjb20geGlmcmVzIHTDqSBsJ2FudGVwZXLDrW9kZS4gQXF1w60gaG8gdGVucyBpbnRlcmNhbnZpYXQuIiwgIiIsICJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiJdLCAiZXJyIjogWyJOT1VTX0lfWkVST1MiLCAiIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIlRSQUNUQVRfQ09NX0VYQUNURSJdLCAicmVzIjogWyJOb21icmUgc2VuY2VyIHNlbnNlIGNvbWE6ICQ0MjAwMiQuIFBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGU6ICQ0MjAwJC4iLCAiRGVub21pbmFkb3I6ICQxJCBub3UgaSAkMiQgemVyb3MgJFxccmlnaHRhcnJvdyA5MDAkIiwgIiQ0MnssfTAwXFxvdmVybGluZXsyfSA9IFxcZGZyYWN7NDIwMDIgLSA0MjAwfXs5MDB9ID0gXFxkZnJhY3szNzgwMn17OTAwfSQiLCAiU2ltcGxpZmljYW50OiAkXFxkZnJhY3sxODkwMX17NDUwfSQiXX0="
  },
  {
   "id": "28g",
   "ex": 28,
   "ap": "g",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$42{,}5\\overline{8}$",
   "opcions": [
    "$\\dfrac{2129}{50}$",
    "$\\dfrac{3833}{90}$",
    "$\\dfrac{3833}{990}$",
    "$\\dfrac{2129}{45}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «8» i l'anteperíode, «5»: el denominador porta un $9$ i un $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiSGFzIHBvc2F0IHVuIG5vdSBkZSBtw6lzLiBBbCBkZW5vbWluYWRvciB2YW4gdGFudHMgTk9VUyBjb20geGlmcmVzIHTDqSBlbCBwZXLDrW9kZSwgaSB0YW50cyBaRVJPUyBjb20geGlmcmVzIHTDqSBsJ2FudGVwZXLDrW9kZS4gQXF1w60gaG8gdGVucyBpbnRlcmNhbnZpYXQuIiwgIkFsIG51bWVyYWRvciBjYWwgUkVTVEFSIGxhIHBhcnQgcXVlIG5vIGVzIHJlcGV0ZWl4OiB0b3QgZWwgbm9tYnJlIHNlbnNlIGNvbWEsIG1lbnlzIGxhIHBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGUuIl0sICJlcnIiOiBbIlRSQUNUQVRfQ09NX0VYQUNURSIsICIiLCAiTk9VU19JX1pFUk9TIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIl0sICJyZXMiOiBbIk5vbWJyZSBzZW5jZXIgc2Vuc2UgY29tYTogJDQyNTgkLiBQYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlOiAkNDI1JC4iLCAiRGVub21pbmFkb3I6ICQxJCBub3UgaSAkMSQgemVybyAkXFxyaWdodGFycm93IDkwJCIsICIkNDJ7LH01XFxvdmVybGluZXs4fSA9IFxcZGZyYWN7NDI1OCAtIDQyNX17OTB9ID0gXFxkZnJhY3szODMzfXs5MH0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7MzgzM317OTB9JCJdfQ=="
  },
  {
   "id": "28h",
   "ex": 28,
   "ap": "h",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$0{,}\\overline{8}$",
   "opcions": [
    "$\\dfrac{4}{45}$",
    "$\\dfrac{4}{5}$",
    "$\\dfrac{8}{9}$",
    "$\\dfrac{8}{99}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «8» i no hi ha anteperíode: el denominador porta un $9$ i cap $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIaSBoYSB1biB6ZXJvIGRlIG3DqXMgYWwgZGVub21pbmFkb3IuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHRlbmlyIHRhbnRzIHplcm9zIGNvbSB4aWZyZXMgZGVjaW1hbHMgdMOpIGVsIG5vbWJyZS4gQ29tcHRhLWxlcyB1bmEgYWx0cmEgdmVnYWRhLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiSGFzIHBvc2F0IHVuIG5vdSBkZSBtw6lzLiBBbCBkZW5vbWluYWRvciB2YW4gdGFudHMgTk9VUyBjb20geGlmcmVzIHTDqSBlbCBwZXLDrW9kZSwgaSB0YW50cyBaRVJPUyBjb20geGlmcmVzIHTDqSBsJ2FudGVwZXLDrW9kZS4gQXF1w60gaG8gdGVucyBpbnRlcmNhbnZpYXQuIl0sICJlcnIiOiBbIlBPVEVOQ0lBXzEwIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICIiLCAiTk9VU19JX1pFUk9TIl0sICJyZXMiOiBbIk5vbWJyZSBzZW5jZXIgc2Vuc2UgY29tYTogJDgkLiBQYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlOiAkMCQuIiwgIkRlbm9taW5hZG9yOiAkMSQgbm91IGkgJDAkIHplcm9zICRcXHJpZ2h0YXJyb3cgOSQiLCAiJDB7LH1cXG92ZXJsaW5lezh9ID0gXFxkZnJhY3s4IC0gMH17OX0gPSBcXGRmcmFjezh9ezl9JCIsICJTaW1wbGlmaWNhbnQ6ICRcXGRmcmFjezh9ezl9JCJdfQ=="
  },
  {
   "id": "28i",
   "ex": 28,
   "ap": "i",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$1{,}\\overline{256}$",
   "opcions": [
    "$\\dfrac{1256}{999}$",
    "$\\dfrac{251}{200}$",
    "$\\dfrac{157}{125}$",
    "$\\dfrac{1255}{999}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «256» i no hi ha anteperíode: el denominador porta tres $9$ i cap $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiXSwgImVyciI6IFsiTk9fUkVTVEFfQU5URVBFUklPREUiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICIiXSwgInJlcyI6IFsiTm9tYnJlIHNlbmNlciBzZW5zZSBjb21hOiAkMTI1NiQuIFBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGU6ICQxJC4iLCAiRGVub21pbmFkb3I6ICQzJCBub3VzIGkgJDAkIHplcm9zICRcXHJpZ2h0YXJyb3cgOTk5JCIsICIkMXssfVxcb3ZlcmxpbmV7MjU2fSA9IFxcZGZyYWN7MTI1NiAtIDF9ezk5OX0gPSBcXGRmcmFjezEyNTV9ezk5OX0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7MTI1NX17OTk5fSQiXX0="
  },
  {
   "id": "28j",
   "ex": 28,
   "ap": "j",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$10{,}5\\overline{23}$",
   "opcions": [
    "$\\dfrac{10523}{1000}$",
    "$\\dfrac{5209}{495}$",
    "$\\dfrac{10523}{990}$",
    "$\\dfrac{5209}{450}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «23» i l'anteperíode, «5»: el denominador porta dos $9$ i un $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiQWwgZGVub21pbmFkb3IgdmFuIHRhbnRzIE5PVVMgY29tIHhpZnJlcyB0w6kgZWwgcGVyw61vZGUsIGkgdGFudHMgWkVST1MgY29tIHhpZnJlcyB0w6kgbCdhbnRlcGVyw61vZGUuIEFxdcOtIGhvIHRlbnMgaW50ZXJjYW52aWF0LiJdLCAiZXJyIjogWyJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIk5PVVNfSV9aRVJPUyJdLCAicmVzIjogWyJOb21icmUgc2VuY2VyIHNlbnNlIGNvbWE6ICQxMDUyMyQuIFBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGU6ICQxMDUkLiIsICJEZW5vbWluYWRvcjogJDIkIG5vdXMgaSAkMSQgemVybyAkXFxyaWdodGFycm93IDk5MCQiLCAiJDEweyx9NVxcb3ZlcmxpbmV7MjN9ID0gXFxkZnJhY3sxMDUyMyAtIDEwNX17OTkwfSA9IFxcZGZyYWN7MTA0MTh9ezk5MH0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7NTIwOX17NDk1fSQiXX0="
  },
  {
   "id": "28k",
   "ex": 28,
   "ap": "k",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$0{,}000\\overline{97}$",
   "opcions": [
    "$\\dfrac{97}{99000}$",
    "$\\dfrac{97}{99900}$",
    "$\\dfrac{97}{100000}$",
    "$\\dfrac{97}{999000}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «97» i l'anteperíode, «000»: el denominador porta dos $9$ i tres $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWwgZGVub21pbmFkb3IgdmFuIHRhbnRzIE5PVVMgY29tIHhpZnJlcyB0w6kgZWwgcGVyw61vZGUsIGkgdGFudHMgWkVST1MgY29tIHhpZnJlcyB0w6kgbCdhbnRlcGVyw61vZGUuIEFxdcOtIGhvIHRlbnMgaW50ZXJjYW52aWF0LiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICJIYXMgcG9zYXQgdW4gbm91IGRlIG3DqXMuIEFsIGRlbm9taW5hZG9yIHZhbiB0YW50cyBOT1VTIGNvbSB4aWZyZXMgdMOpIGVsIHBlcsOtb2RlLCBpIHRhbnRzIFpFUk9TIGNvbSB4aWZyZXMgdMOpIGwnYW50ZXBlcsOtb2RlLiBBcXXDrSBobyB0ZW5zIGludGVyY2FudmlhdC4iXSwgImVyciI6IFsiIiwgIk5PVVNfSV9aRVJPUyIsICJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiTk9VU19JX1pFUk9TIl0sICJyZXMiOiBbIk5vbWJyZSBzZW5jZXIgc2Vuc2UgY29tYTogJDk3JC4gUGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZTogJDAkLiIsICJEZW5vbWluYWRvcjogJDIkIG5vdXMgaSAkMyQgemVyb3MgJFxccmlnaHRhcnJvdyA5OTAwMCQiLCAiJDB7LH0wMDBcXG92ZXJsaW5lezk3fSA9IFxcZGZyYWN7OTcgLSAwfXs5OTAwMH0gPSBcXGRmcmFjezk3fXs5OTAwMH0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7OTd9ezk5MDAwfSQiXX0="
  },
  {
   "id": "28l",
   "ex": 28,
   "ap": "l",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Calcula la fracció generatriu dels nombres decimals periòdics següents.",
   "enunciat": "$3{,}2\\overline{572}$",
   "opcions": [
    "$\\dfrac{3254}{999}$",
    "$\\dfrac{8143}{2500}$",
    "$\\dfrac{16286}{4995}$",
    "$\\dfrac{1627}{450}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «572» i l'anteperíode, «2»: el denominador porta tres $9$ i un $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHBvc2F0IG5vbcOpcyBwb3TDqG5jaWVzIGRlICQxMCQgYWwgZGVub21pbmFkb3IuIEFpeMOyIHZhbCBwZXIgYWxzIGRlY2ltYWxzIGV4YWN0ZXM7IHNpIGhpIGhhIHBlcsOtb2RlLCBlbCBkZW5vbWluYWRvciBoYSBkZSBkdXIgbm91cy4iLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiQWwgZGVub21pbmFkb3IgdmFuIHRhbnRzIE5PVVMgY29tIHhpZnJlcyB0w6kgZWwgcGVyw61vZGUsIGkgdGFudHMgWkVST1MgY29tIHhpZnJlcyB0w6kgbCdhbnRlcGVyw61vZGUuIEFxdcOtIGhvIHRlbnMgaW50ZXJjYW52aWF0LiJdLCAiZXJyIjogWyIiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIk5PVVNfSV9aRVJPUyJdLCAicmVzIjogWyJOb21icmUgc2VuY2VyIHNlbnNlIGNvbWE6ICQzMjU3MiQuIFBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGU6ICQzMiQuIiwgIkRlbm9taW5hZG9yOiAkMyQgbm91cyBpICQxJCB6ZXJvICRcXHJpZ2h0YXJyb3cgOTk5MCQiLCAiJDN7LH0yXFxvdmVybGluZXs1NzJ9ID0gXFxkZnJhY3szMjU3MiAtIDMyfXs5OTkwfSA9IFxcZGZyYWN7MzI1NDB9ezk5OTB9JCIsICJTaW1wbGlmaWNhbnQ6ICRcXGRmcmFjezMyNTR9ezk5OX0kIl19"
  },
  {
   "id": "29a",
   "ex": 29,
   "ap": "a",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Indica de quin tipus de decimal es tracta i calcula'n la fracció generatriu.",
   "enunciat": "$15{,}3222\\dots$",
   "opcions": [
    "Periòdic mixt; $\\dfrac{1379}{90}$",
    "Periòdic mixt; $\\dfrac{766}{45}$",
    "Periòdic pur; $\\dfrac{1379}{90}$",
    "Exacte; $\\dfrac{383}{25}$"
   ],
   "pistes": [
    "Primer classifica'l: s'acaben les xifres? Si no, on comença la repetició?",
    "Aquí es repeteix «2», i abans hi ha «3», que no es repeteix: el denominador porta un $9$ i un $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiUmV2aXNhIHF1aW5lcyB4aWZyZXMgZXMgcmVwZXRlaXhlbiBpbmRlZmluaWRhbWVudCAoZWwgcGVyw61vZGUpIGkgcXVpbmVzIGFwYXJlaXhlbiB1biBzb2wgY29wIGRlc3Byw6lzIGRlIGxhIGNvbWEgKGwnYW50ZXBlcsOtb2RlKS4iLCAiSGFzIHBvc2F0IG5vbcOpcyBwb3TDqG5jaWVzIGRlICQxMCQgYWwgZGVub21pbmFkb3IuIEFpeMOyIHZhbCBwZXIgYWxzIGRlY2ltYWxzIGV4YWN0ZXM7IHNpIGhpIGhhIHBlcsOtb2RlLCBlbCBkZW5vbWluYWRvciBoYSBkZSBkdXIgbm91cy4iXSwgImVyciI6IFsiIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIlBFUklPREVfTUFMX0lERU5USUZJQ0FUIiwgIlRSQUNUQVRfQ09NX0VYQUNURSJdLCAicmVzIjogWyJMZXMgeGlmcmVzIG5vIHMnYWNhYmVuIGkgZWwgcGVyw61vZGUgbm8gY29tZW7Dp2EganVzdCBkZXNwcsOpcyBkZSBsYSBjb21hOiDDqXMgcGVyacOyZGljIG1peHQuIiwgIiRcXGRmcmFjezE1MzIgLSAxNTN9ezkwfSA9IFxcZGZyYWN7MTM3OX17OTB9JCJdfQ=="
  },
  {
   "id": "29b",
   "ex": 29,
   "ap": "b",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Indica de quin tipus de decimal es tracta i calcula'n la fracció generatriu.",
   "enunciat": "$15{,}323232\\dots$",
   "opcions": [
    "Exacte; $\\dfrac{383}{25}$",
    "Periòdic mixt; $\\dfrac{1517}{100}$",
    "Periòdic pur; $\\dfrac{1517}{99}$",
    "Periòdic pur; $\\dfrac{1532}{99}$"
   ],
   "pistes": [
    "Primer classifica'l: s'acaben les xifres? Si no, on comença la repetició?",
    "Aquí es repeteix «32» des de just després de la coma: el denominador porta dos $9$ i cap $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICJSZXZpc2EgcXVpbmVzIHhpZnJlcyBlcyByZXBldGVpeGVuIGluZGVmaW5pZGFtZW50IChlbCBwZXLDrW9kZSkgaSBxdWluZXMgYXBhcmVpeGVuIHVuIHNvbCBjb3AgZGVzcHLDqXMgZGUgbGEgY29tYSAobCdhbnRlcGVyw61vZGUpLiIsICIiLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iXSwgImVyciI6IFsiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIlBFUklPREVfTUFMX0lERU5USUZJQ0FUIiwgIiIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSJdLCAicmVzIjogWyJMZXMgeGlmcmVzIG5vIHMnYWNhYmVuIGkgZWwgcGVyw61vZGUgY29tZW7Dp2EganVzdCBkZXNwcsOpcyBkZSBsYSBjb21hOiDDqXMgcGVyacOyZGljIHB1ci4iLCAiJFxcZGZyYWN7MTUzMiAtIDE1fXs5OX0gPSBcXGRmcmFjezE1MTd9ezk5fSQiXX0="
  },
  {
   "id": "29c",
   "ex": 29,
   "ap": "c",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Indica de quin tipus de decimal es tracta i calcula'n la fracció generatriu.",
   "enunciat": "$15{,}233444\\dots$",
   "opcions": [
    "Exacte; $\\dfrac{76167}{5000}$",
    "Periòdic mixt; $\\dfrac{137101}{9000}$",
    "Periòdic pur; $\\dfrac{137101}{9990}$",
    "Periòdic mixt; $\\dfrac{8463}{500}$"
   ],
   "pistes": [
    "Primer classifica'l: s'acaben les xifres? Si no, on comença la repetició?",
    "Aquí es repeteix «4», i abans hi ha «233», que no es repeteix: el denominador porta un $9$ i tres $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiUmV2aXNhIHF1aW5lcyB4aWZyZXMgZXMgcmVwZXRlaXhlbiBpbmRlZmluaWRhbWVudCAoZWwgcGVyw61vZGUpIGkgcXVpbmVzIGFwYXJlaXhlbiB1biBzb2wgY29wIGRlc3Byw6lzIGRlIGxhIGNvbWEgKGwnYW50ZXBlcsOtb2RlKS4iLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iXSwgImVyciI6IFsiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIiIsICJQRVJJT0RFX01BTF9JREVOVElGSUNBVCIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSJdLCAicmVzIjogWyJMZXMgeGlmcmVzIG5vIHMnYWNhYmVuIGkgZWwgcGVyw61vZGUgbm8gY29tZW7Dp2EganVzdCBkZXNwcsOpcyBkZSBsYSBjb21hOiDDqXMgcGVyacOyZGljIG1peHQuIiwgIiRcXGRmcmFjezE1MjMzNCAtIDE1MjMzfXs5MDAwfSA9IFxcZGZyYWN7MTM3MTAxfXs5MDAwfSQiXX0="
  },
  {
   "id": "29d",
   "ex": 29,
   "ap": "d",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Indica de quin tipus de decimal es tracta i calcula'n la fracció generatriu.",
   "enunciat": "$15{,}32$",
   "opcions": [
    "Exacte; $\\dfrac{383}{25}$",
    "Periòdic mixt; $\\dfrac{1379}{90}$",
    "Exacte; $\\dfrac{383}{250}$",
    "Periòdic pur; $\\dfrac{1517}{99}$"
   ],
   "pistes": [
    "Primer classifica'l: s'acaben les xifres? Si no, on comença la repetició?",
    "Les xifres s'acaben: n'hi ha $2$ després de la coma, i el denominador és $100$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHBvc2F0IG5vdXMgYWwgZGVub21pbmFkb3IsIHBlcsOyIGFxdWVzdCBkZWNpbWFsIMOpcyBleGFjdGU6IHMnYWNhYmEuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHNlciB1bmEgcG90w6huY2lhIGRlICQxMCQuIiwgIkVsIGRlbm9taW5hZG9yIGhhIGRlIHRlbmlyIHRhbnRzIHplcm9zIGNvbSB4aWZyZXMgZGVjaW1hbHMgdMOpIGVsIG5vbWJyZS4gQ29tcHRhLWxlcyB1bmEgYWx0cmEgdmVnYWRhLiIsICJIYXMgcG9zYXQgbm91cyBhbCBkZW5vbWluYWRvciwgcGVyw7IgYXF1ZXN0IGRlY2ltYWwgw6lzIGV4YWN0ZTogcydhY2FiYS4gRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIHVuYSBwb3TDqG5jaWEgZGUgJDEwJC4iXSwgImVyciI6IFsiIiwgIlRSQUNUQVRfQ09NX1BFUklPRElDIiwgIlBPVEVOQ0lBXzEwIiwgIlRSQUNUQVRfQ09NX1BFUklPRElDIl0sICJyZXMiOiBbIkxlcyB4aWZyZXMgZGVjaW1hbHMgcydhY2FiZW46IMOpcyB1biBkZWNpbWFsIEVYQUNURS4iLCAiJFxcZGZyYWN7MTUzMn17MTBeezJ9fSA9IFxcZGZyYWN7MzgzfXsyNX0kIl19"
  },
  {
   "id": "29e",
   "ex": 29,
   "ap": "e",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Indica de quin tipus de decimal es tracta i calcula'n la fracció generatriu.",
   "enunciat": "$15{,}333$",
   "opcions": [
    "Periòdic pur; $\\dfrac{46}{3}$",
    "Exacte; $\\dfrac{15333}{10000}$",
    "Periòdic mixt; $\\dfrac{46}{3}$",
    "Exacte; $\\dfrac{15333}{1000}$"
   ],
   "pistes": [
    "Primer classifica'l: s'acaben les xifres? Si no, on comença la repetició?",
    "Les xifres s'acaben: n'hi ha $3$ després de la coma, i el denominador és $1000$."
   ],
   "nota": "Compte: no hi ha punts suspensius, o sigui que les xifres s'acaben. És exacte, no periòdic.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgcG9zYXQgbm91cyBhbCBkZW5vbWluYWRvciwgcGVyw7IgYXF1ZXN0IGRlY2ltYWwgw6lzIGV4YWN0ZTogcydhY2FiYS4gRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIHVuYSBwb3TDqG5jaWEgZGUgJDEwJC4iLCAiRWwgZGVub21pbmFkb3IgaGEgZGUgdGVuaXIgdGFudHMgemVyb3MgY29tIHhpZnJlcyBkZWNpbWFscyB0w6kgZWwgbm9tYnJlLiBDb21wdGEtbGVzIHVuYSBhbHRyYSB2ZWdhZGEuIiwgIkhhcyBwb3NhdCBub3VzIGFsIGRlbm9taW5hZG9yLCBwZXLDsiBhcXVlc3QgZGVjaW1hbCDDqXMgZXhhY3RlOiBzJ2FjYWJhLiBFbCBkZW5vbWluYWRvciBoYSBkZSBzZXIgdW5hIHBvdMOobmNpYSBkZSAkMTAkLiIsICIiXSwgImVyciI6IFsiVFJBQ1RBVF9DT01fUEVSSU9ESUMiLCAiUE9URU5DSUFfMTAiLCAiVFJBQ1RBVF9DT01fUEVSSU9ESUMiLCAiIl0sICJyZXMiOiBbIkxlcyB4aWZyZXMgZGVjaW1hbHMgcydhY2FiZW46IMOpcyB1biBkZWNpbWFsIEVYQUNURS4iLCAiJFxcZGZyYWN7MTUzMzN9ezEwXnszfX0gPSBcXGRmcmFjezE1MzMzfXsxMDAwfSQiXX0="
  },
  {
   "id": "29f",
   "ex": 29,
   "ap": "f",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 3,
   "encapcalament": "Indica de quin tipus de decimal es tracta i calcula'n la fracció generatriu.",
   "enunciat": "$15$",
   "opcions": [
    "Enter (decimal exacte); $15$",
    "Enter (decimal exacte); $\\dfrac{3}{2}$",
    "Periòdic mixt; $0$",
    "Periòdic pur; $0$"
   ],
   "pistes": [
    "Primer classifica'l: s'acaben les xifres? Si no, on comença la repetició?",
    "No té cap xifra decimal: és un nombre enter, que també compta com a decimal exacte."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgZGVub21pbmFkb3IgaGEgZGUgdGVuaXIgdGFudHMgemVyb3MgY29tIHhpZnJlcyBkZWNpbWFscyB0w6kgZWwgbm9tYnJlLiBDb21wdGEtbGVzIHVuYSBhbHRyYSB2ZWdhZGEuIiwgIkhhcyBwb3NhdCBub3VzIGFsIGRlbm9taW5hZG9yLCBwZXLDsiBhcXVlc3QgZGVjaW1hbCDDqXMgZXhhY3RlOiBzJ2FjYWJhLiBFbCBkZW5vbWluYWRvciBoYSBkZSBzZXIgdW5hIHBvdMOobmNpYSBkZSAkMTAkLiIsICJIYXMgcG9zYXQgbm91cyBhbCBkZW5vbWluYWRvciwgcGVyw7IgYXF1ZXN0IGRlY2ltYWwgw6lzIGV4YWN0ZTogcydhY2FiYS4gRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIHVuYSBwb3TDqG5jaWEgZGUgJDEwJC4iXSwgImVyciI6IFsiIiwgIlBPVEVOQ0lBXzEwIiwgIlRSQUNUQVRfQ09NX1BFUklPRElDIiwgIlRSQUNUQVRfQ09NX1BFUklPRElDIl0sICJyZXMiOiBbIkxlcyB4aWZyZXMgZGVjaW1hbHMgcydhY2FiZW46IMOpcyB1biBkZWNpbWFsIEVYQUNURS4iLCAiJFxcZGZyYWN7MTV9ezEwXnswfX0gPSAxNSQiXX0="
  },
  {
   "id": "30a",
   "ex": 30,
   "ap": "a",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu la fracció generatriu d'aquests nombres decimals.",
   "enunciat": "$2{,}25$",
   "opcions": [
    "$\\dfrac{9}{40}$",
    "$\\dfrac{25}{11}$",
    "$\\dfrac{9}{4}$",
    "$\\dfrac{1}{4}$"
   ],
   "pistes": [
    "El numerador és el nombre sense la coma; el denominador, un $1$ seguit de tants zeros com xifres decimals hi ha.",
    "Aquí hi ha $2$ xifres després de la coma: el denominador és $100$. Després simplifica la fracció, si es pot."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIaSBoYSB1biB6ZXJvIGRlIG3DqXMgYWwgZGVub21pbmFkb3IuIEVsIGRlbm9taW5hZG9yIGhhIGRlIHRlbmlyIHRhbnRzIHplcm9zIGNvbSB4aWZyZXMgZGVjaW1hbHMgdMOpIGVsIG5vbWJyZS4gQ29tcHRhLWxlcyB1bmEgYWx0cmEgdmVnYWRhLiIsICJIYXMgcG9zYXQgbm91cyBhbCBkZW5vbWluYWRvciwgcGVyw7IgYXF1ZXN0IGRlY2ltYWwgw6lzIGV4YWN0ZTogcydhY2FiYS4gRWwgZGVub21pbmFkb3IgaGEgZGUgc2VyIHVuYSBwb3TDqG5jaWEgZGUgJDEwJC4iLCAiIiwgIlQnaGFzIGRlaXhhdCBsYSBwYXJ0IGVudGVyYS4gRWwgbnVtZXJhZG9yIMOpcyBlbCBub21icmUgc2VuY2VyIHNlbnNlIGxhIGNvbWEsIG5vIG5vbcOpcyBsZXMgeGlmcmVzIGRlY2ltYWxzLiJdLCAiZXJyIjogWyJQT1RFTkNJQV8xMCIsICJUUkFDVEFUX0NPTV9QRVJJT0RJQyIsICIiLCAiUEFSVF9FTlRFUkFfT0JMSURBREEiXSwgInJlcyI6IFsiJDJ7LH0yNSA9IFxcZGZyYWN7MjI1fXsxMDB9JCIsICJTaW1wbGlmaWNhbnQ6ICRcXGRmcmFjezl9ezR9JCJdfQ=="
  },
  {
   "id": "30b",
   "ex": 30,
   "ap": "b",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu la fracció generatriu d'aquests nombres decimals.",
   "enunciat": "$2{,}\\overline{25}$",
   "opcions": [
    "$\\dfrac{9}{4}$",
    "$\\dfrac{223}{99}$",
    "$\\dfrac{25}{11}$",
    "$\\dfrac{223}{100}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «25» i no hi ha anteperíode: el denominador porta dos $9$ i cap $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiSGFzIHBvc2F0IG5vbcOpcyBwb3TDqG5jaWVzIGRlICQxMCQgYWwgZGVub21pbmFkb3IuIEFpeMOyIHZhbCBwZXIgYWxzIGRlY2ltYWxzIGV4YWN0ZXM7IHNpIGhpIGhhIHBlcsOtb2RlLCBlbCBkZW5vbWluYWRvciBoYSBkZSBkdXIgbm91cy4iXSwgImVyciI6IFsiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIiIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICJUUkFDVEFUX0NPTV9FWEFDVEUiXSwgInJlcyI6IFsiTm9tYnJlIHNlbmNlciBzZW5zZSBjb21hOiAkMjI1JC4gUGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZTogJDIkLiIsICJEZW5vbWluYWRvcjogJDIkIG5vdXMgaSAkMCQgemVyb3MgJFxccmlnaHRhcnJvdyA5OSQiLCAiJDJ7LH1cXG92ZXJsaW5lezI1fSA9IFxcZGZyYWN7MjI1IC0gMn17OTl9ID0gXFxkZnJhY3syMjN9ezk5fSQiLCAiU2ltcGxpZmljYW50OiAkXFxkZnJhY3syMjN9ezk5fSQiXX0="
  },
  {
   "id": "30c",
   "ex": 30,
   "ap": "c",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu la fracció generatriu d'aquests nombres decimals.",
   "enunciat": "$22{,}\\overline{5}$",
   "opcions": [
    "$25$",
    "$\\dfrac{45}{2}$",
    "$\\dfrac{203}{10}$",
    "$\\dfrac{203}{9}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «5» i no hi ha anteperíode: el denominador porta un $9$ i cap $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiXSwgImVyciI6IFsiTk9fUkVTVEFfQU5URVBFUklPREUiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICIiXSwgInJlcyI6IFsiTm9tYnJlIHNlbmNlciBzZW5zZSBjb21hOiAkMjI1JC4gUGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZTogJDIyJC4iLCAiRGVub21pbmFkb3I6ICQxJCBub3UgaSAkMCQgemVyb3MgJFxccmlnaHRhcnJvdyA5JCIsICIkMjJ7LH1cXG92ZXJsaW5lezV9ID0gXFxkZnJhY3syMjUgLSAyMn17OX0gPSBcXGRmcmFjezIwM317OX0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7MjAzfXs5fSQiXX0="
  },
  {
   "id": "30d",
   "ex": 30,
   "ap": "d",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu la fracció generatriu d'aquests nombres decimals.",
   "enunciat": "$2{,}2\\overline{5}$",
   "opcions": [
    "$\\dfrac{5}{2}$",
    "$\\dfrac{9}{4}$",
    "$\\dfrac{203}{990}$",
    "$\\dfrac{203}{90}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «5» i l'anteperíode, «2»: el denominador porta un $9$ i un $0$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICJIYXMgcG9zYXQgdW4gbm91IGRlIG3DqXMuIEFsIGRlbm9taW5hZG9yIHZhbiB0YW50cyBOT1VTIGNvbSB4aWZyZXMgdMOpIGVsIHBlcsOtb2RlLCBpIHRhbnRzIFpFUk9TIGNvbSB4aWZyZXMgdMOpIGwnYW50ZXBlcsOtb2RlLiBBcXXDrSBobyB0ZW5zIGludGVyY2FudmlhdC4iLCAiIl0sICJlcnIiOiBbIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICJOT1VTX0lfWkVST1MiLCAiIl0sICJyZXMiOiBbIk5vbWJyZSBzZW5jZXIgc2Vuc2UgY29tYTogJDIyNSQuIFBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGU6ICQyMiQuIiwgIkRlbm9taW5hZG9yOiAkMSQgbm91IGkgJDEkIHplcm8gJFxccmlnaHRhcnJvdyA5MCQiLCAiJDJ7LH0yXFxvdmVybGluZXs1fSA9IFxcZGZyYWN7MjI1IC0gMjJ9ezkwfSA9IFxcZGZyYWN7MjAzfXs5MH0kIiwgIlNpbXBsaWZpY2FudDogJFxcZGZyYWN7MjAzfXs5MH0kIl19"
  },
  {
   "id": "30e",
   "ex": 30,
   "ap": "e",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu la fracció generatriu d'aquests nombres decimals.",
   "enunciat": "$0{,}\\overline{334}$",
   "opcions": [
    "$\\dfrac{334}{999}$",
    "$\\dfrac{334}{9999}$",
    "$\\dfrac{167}{500}$",
    "$\\dfrac{167}{4995}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «334» i no hi ha anteperíode: el denominador porta tres $9$ i cap $0$."
   ],
   "nota": "El full de partida escriu $0{,}33433434\\dots$; aquí es llegeix com a $0{,}\\overline{334}$, amb el grup $334$ com a període.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHBvc2F0IHVuIG5vdSBkZSBtw6lzLiBBbCBkZW5vbWluYWRvciB2YW4gdGFudHMgTk9VUyBjb20geGlmcmVzIHTDqSBlbCBwZXLDrW9kZSwgaSB0YW50cyBaRVJPUyBjb20geGlmcmVzIHTDqSBsJ2FudGVwZXLDrW9kZS4gQXF1w60gaG8gdGVucyBpbnRlcmNhbnZpYXQuIiwgIkhhcyBwb3NhdCBub23DqXMgcG90w6huY2llcyBkZSAkMTAkIGFsIGRlbm9taW5hZG9yLiBBaXjDsiB2YWwgcGVyIGFscyBkZWNpbWFscyBleGFjdGVzOyBzaSBoaSBoYSBwZXLDrW9kZSwgZWwgZGVub21pbmFkb3IgaGEgZGUgZHVyIG5vdXMuIiwgIkhpIGhhIHVuIHplcm8gZGUgbcOpcyBhbCBkZW5vbWluYWRvci4gRWwgZGVub21pbmFkb3IgaGEgZGUgdGVuaXIgdGFudHMgemVyb3MgY29tIHhpZnJlcyBkZWNpbWFscyB0w6kgZWwgbm9tYnJlLiBDb21wdGEtbGVzIHVuYSBhbHRyYSB2ZWdhZGEuIl0sICJlcnIiOiBbIiIsICJOT1VTX0lfWkVST1MiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIlBPVEVOQ0lBXzEwIl0sICJyZXMiOiBbIk5vbWJyZSBzZW5jZXIgc2Vuc2UgY29tYTogJDMzNCQuIFBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGU6ICQwJC4iLCAiRGVub21pbmFkb3I6ICQzJCBub3VzIGkgJDAkIHplcm9zICRcXHJpZ2h0YXJyb3cgOTk5JCIsICIkMHssfVxcb3ZlcmxpbmV7MzM0fSA9IFxcZGZyYWN7MzM0IC0gMH17OTk5fSA9IFxcZGZyYWN7MzM0fXs5OTl9JCIsICJTaW1wbGlmaWNhbnQ6ICRcXGRmcmFjezMzNH17OTk5fSQiXX0="
  },
  {
   "id": "30f",
   "ex": 30,
   "ap": "f",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 3,
   "encapcalament": "Escriu la fracció generatriu d'aquests nombres decimals.",
   "enunciat": "$8{,}57\\overline{1}$",
   "opcions": [
    "$\\dfrac{3857}{450}$",
    "$\\dfrac{3857}{495}$",
    "$\\dfrac{2857}{300}$",
    "$\\dfrac{8571}{1000}$"
   ],
   "pistes": [
    "Numerador: tot el nombre sense la coma MENYS la part que no es repeteix. Denominador: un $9$ per cada xifra del període i un $0$ per cada xifra de l'anteperíode.",
    "Aquí el període és «1» i l'anteperíode, «57»: el denominador porta un $9$ i dos $0$."
   ],
   "nota": "El full de partida escriu $8{,}5711\\dots$; aquí es llegeix com a $8{,}57\\overline{1}$, amb el $57$ d'anteperíode i l'$1$ de període.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWwgZGVub21pbmFkb3IgdmFuIHRhbnRzIE5PVVMgY29tIHhpZnJlcyB0w6kgZWwgcGVyw61vZGUsIGkgdGFudHMgWkVST1MgY29tIHhpZnJlcyB0w6kgbCdhbnRlcGVyw61vZGUuIEFxdcOtIGhvIHRlbnMgaW50ZXJjYW52aWF0LiIsICJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiJdLCAiZXJyIjogWyIiLCAiTk9VU19JX1pFUk9TIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIlRSQUNUQVRfQ09NX0VYQUNURSJdLCAicmVzIjogWyJOb21icmUgc2VuY2VyIHNlbnNlIGNvbWE6ICQ4NTcxJC4gUGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZTogJDg1NyQuIiwgIkRlbm9taW5hZG9yOiAkMSQgbm91IGkgJDIkIHplcm9zICRcXHJpZ2h0YXJyb3cgOTAwJCIsICIkOHssfTU3XFxvdmVybGluZXsxfSA9IFxcZGZyYWN7ODU3MSAtIDg1N317OTAwfSA9IFxcZGZyYWN7NzcxNH17OTAwfSQiLCAiU2ltcGxpZmljYW50OiAkXFxkZnJhY3szODU3fXs0NTB9JCJdfQ=="
  },
  {
   "id": "31a",
   "ex": 31,
   "ap": "a",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Opera fent servir les fraccions generatrius.",
   "enunciat": "$1{,}\\overline{3} + 3{,}4$",
   "opcions": [
    "$\\dfrac{47}{10}$",
    "$\\dfrac{71}{15}$",
    "$\\dfrac{218}{45}$",
    "$\\dfrac{21}{8}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$1{,}\\overline{3} = \\dfrac{4}{3}$ i $3{,}4 = \\dfrac{17}{5}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgb3BlcmF0IGFtYiBlbHMgZGVjaW1hbHMgdGFsbGF0cywgc2Vuc2UgcGFzc2FyLWxvcyBhIGZyYWNjacOzLiBIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiSGFzIHN1bWF0IG51bWVyYWRvcnMgYW1iIG51bWVyYWRvcnMgaSBkZW5vbWluYWRvcnMgYW1iIGRlbm9taW5hZG9ycy4gUGVyIHN1bWFyIG8gcmVzdGFyIGZyYWNjaW9ucyBjYWwgcmVkdWlyLWxlcyBwcmltZXIgYSBkZW5vbWluYWRvciBjb23Dui4iXSwgImVyciI6IFsiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIiIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICJTVU1BX05VTUVSQURPUlMiXSwgInJlcyI6IFsiJDF7LH1cXG92ZXJsaW5lezN9ID0gXFxkZnJhY3s0fXszfSQgXFxxdWFkIGkgXFxxdWFkICQzeyx9NCA9IFxcZGZyYWN7MTd9ezV9JCIsICIkXFxkZnJhY3s0fXszfSArIFxcZGZyYWN7MTd9ezV9ID0gXFxkZnJhY3s3MX17MTV9JCJdfQ=="
  },
  {
   "id": "31b",
   "ex": 31,
   "ap": "b",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Opera fent servir les fraccions generatrius.",
   "enunciat": "$10{,}2\\overline{5} - 5{,}\\overline{7}$",
   "opcions": [
    "$\\dfrac{101}{18}$",
    "$\\dfrac{91}{18}$",
    "$\\dfrac{403}{90}$",
    "$\\dfrac{91}{20}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$10{,}2\\overline{5} = \\dfrac{923}{90}$ i $5{,}\\overline{7} = \\dfrac{52}{9}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBwcmltZXIgbm9tYnJlIG5vIGVzdMOgIGJlbiBjb252ZXJ0aXQuIEFsIG51bWVyYWRvciBjYWwgUkVTVEFSIGxhIHBhcnQgcXVlIG5vIGVzIHJlcGV0ZWl4OiB0b3QgZWwgbm9tYnJlIHNlbnNlIGNvbWEsIG1lbnlzIGxhIHBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGUuIiwgIkFsIG51bWVyYWRvciBjYWwgUkVTVEFSIGxhIHBhcnQgcXVlIG5vIGVzIHJlcGV0ZWl4OiB0b3QgZWwgbm9tYnJlIHNlbnNlIGNvbWEsIG1lbnlzIGxhIHBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGUuIiwgIiIsICJIYXMgb3BlcmF0IGFtYiBlbHMgZGVjaW1hbHMgdGFsbGF0cywgc2Vuc2UgcGFzc2FyLWxvcyBhIGZyYWNjacOzLiBIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiJdLCAiZXJyIjogWyJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICIiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIl0sICJyZXMiOiBbIiQxMHssfTJcXG92ZXJsaW5lezV9ID0gXFxkZnJhY3s5MjN9ezkwfSQgXFxxdWFkIGkgXFxxdWFkICQ1eyx9XFxvdmVybGluZXs3fSA9IFxcZGZyYWN7NTJ9ezl9JCIsICIkXFxkZnJhY3s5MjN9ezkwfSAtIFxcZGZyYWN7NTJ9ezl9ID0gXFxkZnJhY3s0MDN9ezkwfSQiXX0="
  },
  {
   "id": "31c",
   "ex": 31,
   "ap": "c",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Opera fent servir les fraccions generatrius.",
   "enunciat": "$1{,}\\overline{36} + 8{,}2\\overline{5}$",
   "opcions": [
    "$\\dfrac{9533}{990}$",
    "$\\dfrac{9523}{990}$",
    "$\\dfrac{961}{100}$",
    "$\\dfrac{2087}{198}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$1{,}\\overline{36} = \\dfrac{15}{11}$ i $8{,}2\\overline{5} = \\dfrac{743}{90}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBwcmltZXIgbm9tYnJlIG5vIGVzdMOgIGJlbiBjb252ZXJ0aXQuIEFsIG51bWVyYWRvciBjYWwgUkVTVEFSIGxhIHBhcnQgcXVlIG5vIGVzIHJlcGV0ZWl4OiB0b3QgZWwgbm9tYnJlIHNlbnNlIGNvbWEsIG1lbnlzIGxhIHBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGUuIiwgIiIsICJIYXMgb3BlcmF0IGFtYiBlbHMgZGVjaW1hbHMgdGFsbGF0cywgc2Vuc2UgcGFzc2FyLWxvcyBhIGZyYWNjacOzLiBIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiJdLCAiZXJyIjogWyJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICIiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIl0sICJyZXMiOiBbIiQxeyx9XFxvdmVybGluZXszNn0gPSBcXGRmcmFjezE1fXsxMX0kIFxccXVhZCBpIFxccXVhZCAkOHssfTJcXG92ZXJsaW5lezV9ID0gXFxkZnJhY3s3NDN9ezkwfSQiLCAiJFxcZGZyYWN7MTV9ezExfSArIFxcZGZyYWN7NzQzfXs5MH0gPSBcXGRmcmFjezk1MjN9ezk5MH0kIl19"
  },
  {
   "id": "31d",
   "ex": 31,
   "ap": "d",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Opera fent servir les fraccions generatrius.",
   "enunciat": "$4{,}\\overline{5} + 6{,}\\overline{7}$",
   "opcions": [
    "$\\dfrac{56}{5}$",
    "$\\dfrac{34}{3}$",
    "$\\dfrac{106}{9}$",
    "$\\dfrac{112}{9}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$4{,}\\overline{5} = \\dfrac{41}{9}$ i $6{,}\\overline{7} = \\dfrac{61}{9}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgb3BlcmF0IGFtYiBlbHMgZGVjaW1hbHMgdGFsbGF0cywgc2Vuc2UgcGFzc2FyLWxvcyBhIGZyYWNjacOzLiBIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiRWwgcHJpbWVyIG5vbWJyZSBubyBlc3TDoCBiZW4gY29udmVydGl0LiBBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiJdLCAiZXJyIjogWyJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIl0sICJyZXMiOiBbIiQ0eyx9XFxvdmVybGluZXs1fSA9IFxcZGZyYWN7NDF9ezl9JCBcXHF1YWQgaSBcXHF1YWQgJDZ7LH1cXG92ZXJsaW5lezd9ID0gXFxkZnJhY3s2MX17OX0kIiwgIiRcXGRmcmFjezQxfXs5fSArIFxcZGZyYWN7NjF9ezl9ID0gXFxkZnJhY3szNH17M30kIl19"
  },
  {
   "id": "31e",
   "ex": 31,
   "ap": "e",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Opera fent servir les fraccions generatrius.",
   "enunciat": "$3{,}\\overline{46} + 4{,}2\\overline{95}$",
   "opcions": [
    "$\\dfrac{1551}{200}$",
    "$\\dfrac{857}{110}$",
    "$\\dfrac{2561}{330}$",
    "$\\dfrac{47}{6}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$3{,}\\overline{46} = \\dfrac{343}{99}$ i $4{,}2\\overline{95} = \\dfrac{4253}{990}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgb3BlcmF0IGFtYiBlbHMgZGVjaW1hbHMgdGFsbGF0cywgc2Vuc2UgcGFzc2FyLWxvcyBhIGZyYWNjacOzLiBIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICJFbCBwcmltZXIgbm9tYnJlIG5vIGVzdMOgIGJlbiBjb252ZXJ0aXQuIEFsIG51bWVyYWRvciBjYWwgUkVTVEFSIGxhIHBhcnQgcXVlIG5vIGVzIHJlcGV0ZWl4OiB0b3QgZWwgbm9tYnJlIHNlbnNlIGNvbWEsIG1lbnlzIGxhIHBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGUuIiwgIiIsICJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiJdLCAiZXJyIjogWyJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiTk9fUkVTVEFfQU5URVBFUklPREUiLCAiIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIl0sICJyZXMiOiBbIiQzeyx9XFxvdmVybGluZXs0Nn0gPSBcXGRmcmFjezM0M317OTl9JCBcXHF1YWQgaSBcXHF1YWQgJDR7LH0yXFxvdmVybGluZXs5NX0gPSBcXGRmcmFjezQyNTN9ezk5MH0kIiwgIiRcXGRmcmFjezM0M317OTl9ICsgXFxkZnJhY3s0MjUzfXs5OTB9ID0gXFxkZnJhY3syNTYxfXszMzB9JCJdfQ=="
  },
  {
   "id": "31f",
   "ex": 31,
   "ap": "f",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Opera fent servir les fraccions generatrius.",
   "enunciat": "$3{,}\\overline{21} + 4{,}3\\overline{12}$",
   "opcions": [
    "$\\dfrac{831}{110}$",
    "$\\dfrac{3761}{495}$",
    "$\\dfrac{2483}{330}$",
    "$\\dfrac{3761}{500}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$3{,}\\overline{21} = \\dfrac{106}{33}$ i $4{,}3\\overline{12} = \\dfrac{1423}{330}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBwcmltZXIgbm9tYnJlIG5vIGVzdMOgIGJlbiBjb252ZXJ0aXQuIEFsIG51bWVyYWRvciBjYWwgUkVTVEFSIGxhIHBhcnQgcXVlIG5vIGVzIHJlcGV0ZWl4OiB0b3QgZWwgbm9tYnJlIHNlbnNlIGNvbWEsIG1lbnlzIGxhIHBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGUuIiwgIkFsIG51bWVyYWRvciBjYWwgUkVTVEFSIGxhIHBhcnQgcXVlIG5vIGVzIHJlcGV0ZWl4OiB0b3QgZWwgbm9tYnJlIHNlbnNlIGNvbWEsIG1lbnlzIGxhIHBhcnQgYW50ZXJpb3IgYWwgcGVyw61vZGUuIiwgIiIsICJIYXMgb3BlcmF0IGFtYiBlbHMgZGVjaW1hbHMgdGFsbGF0cywgc2Vuc2UgcGFzc2FyLWxvcyBhIGZyYWNjacOzLiBIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiJdLCAiZXJyIjogWyJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICIiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIl0sICJyZXMiOiBbIiQzeyx9XFxvdmVybGluZXsyMX0gPSBcXGRmcmFjezEwNn17MzN9JCBcXHF1YWQgaSBcXHF1YWQgJDR7LH0zXFxvdmVybGluZXsxMn0gPSBcXGRmcmFjezE0MjN9ezMzMH0kIiwgIiRcXGRmcmFjezEwNn17MzN9ICsgXFxkZnJhY3sxNDIzfXszMzB9ID0gXFxkZnJhY3syNDgzfXszMzB9JCJdfQ=="
  },
  {
   "id": "32a",
   "ex": 32,
   "ap": "a",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Efectua les operacions.",
   "enunciat": "$1{,}25 \\cdot 2{,}\\overline{5}$",
   "opcions": [
    "$\\dfrac{25}{8}$",
    "$\\dfrac{125}{36}$",
    "$\\dfrac{115}{36}$",
    "$\\dfrac{45}{92}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$1{,}25 = \\dfrac{5}{4}$ i $2{,}\\overline{5} = \\dfrac{23}{9}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgb3BlcmF0IGFtYiBlbHMgZGVjaW1hbHMgdGFsbGF0cywgc2Vuc2UgcGFzc2FyLWxvcyBhIGZyYWNjacOzLiBIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICIiLCAiUGVyIG11bHRpcGxpY2FyIGZyYWNjaW9ucyBlcyBmYSBudW1lcmFkb3IgcGVyIG51bWVyYWRvciBpIGRlbm9taW5hZG9yIHBlciBkZW5vbWluYWRvci4gQ3JldWFyLWxvcyDDqXMgZWwgcXVlIGVzIGZhIHBlciBDT01QQVJBUi1sZXMsIG5vIHBlciBtdWx0aXBsaWNhci1sZXMuIl0sICJlcnIiOiBbIlRSQUNUQVRfQ09NX0VYQUNURSIsICJOT19SRVNUQV9BTlRFUEVSSU9ERSIsICIiLCAiUFJPRFVDVEVfQ1JFVUFUIl0sICJyZXMiOiBbIiQxeyx9MjUgPSBcXGRmcmFjezV9ezR9JCBcXHF1YWQgaSBcXHF1YWQgJDJ7LH1cXG92ZXJsaW5lezV9ID0gXFxkZnJhY3syM317OX0kIiwgIiRcXGRmcmFjezV9ezR9IFxcY2RvdCBcXGRmcmFjezIzfXs5fSA9IFxcZGZyYWN7MTE1fXszNn0kIl19"
  },
  {
   "id": "32b",
   "ex": 32,
   "ap": "b",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Efectua les operacions.",
   "enunciat": "$0{,}0\\overline{3} : 2{,}9\\overline{5}$",
   "opcions": [
    "$\\dfrac{3}{295}$",
    "$\\dfrac{3}{266}$",
    "$\\dfrac{2}{177}$",
    "$\\dfrac{27}{2660}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$0{,}0\\overline{3} = \\dfrac{1}{30}$ i $2{,}9\\overline{5} = \\dfrac{133}{45}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgb3BlcmF0IGFtYiBlbHMgZGVjaW1hbHMgdGFsbGF0cywgc2Vuc2UgcGFzc2FyLWxvcyBhIGZyYWNjacOzLiBIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiSGFzIHRhbGxhdCBlbCBzZWdvbiBkZWNpbWFsIGVuIGNvbXB0ZXMgZGUgcGFzc2FyLWxvIGEgZnJhY2Npw7MuIEhhcyBwb3NhdCBub23DqXMgcG90w6huY2llcyBkZSAkMTAkIGFsIGRlbm9taW5hZG9yLiBBaXjDsiB2YWwgcGVyIGFscyBkZWNpbWFscyBleGFjdGVzOyBzaSBoaSBoYSBwZXLDrW9kZSwgZWwgZGVub21pbmFkb3IgaGEgZGUgZHVyIG5vdXMuIiwgIkhhcyB0YWxsYXQgZWwgcHJpbWVyIGRlY2ltYWwgZW4gY29tcHRlcyBkZSBwYXNzYXItbG8gYSBmcmFjY2nDsy4gSGFzIHBvc2F0IG5vbcOpcyBwb3TDqG5jaWVzIGRlICQxMCQgYWwgZGVub21pbmFkb3IuIEFpeMOyIHZhbCBwZXIgYWxzIGRlY2ltYWxzIGV4YWN0ZXM7IHNpIGhpIGhhIHBlcsOtb2RlLCBlbCBkZW5vbWluYWRvciBoYSBkZSBkdXIgbm91cy4iXSwgImVyciI6IFsiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIiIsICJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIl0sICJyZXMiOiBbIiQweyx9MFxcb3ZlcmxpbmV7M30gPSBcXGRmcmFjezF9ezMwfSQgXFxxdWFkIGkgXFxxdWFkICQyeyx9OVxcb3ZlcmxpbmV7NX0gPSBcXGRmcmFjezEzM317NDV9JCIsICIkXFxkZnJhY3sxfXszMH0gOiBcXGRmcmFjezEzM317NDV9ID0gXFxkZnJhY3szfXsyNjZ9JCJdfQ=="
  },
  {
   "id": "32c",
   "ex": 32,
   "ap": "c",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Efectua les operacions.",
   "enunciat": "$3{,}\\overline{76} \\cdot 4{,}\\overline{8}$",
   "opcions": [
    "$\\dfrac{1492}{81}$",
    "$\\dfrac{6016}{297}$",
    "$\\dfrac{1504}{81}$",
    "$\\dfrac{2256}{125}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$3{,}\\overline{76} = \\dfrac{373}{99}$ i $4{,}\\overline{8} = \\dfrac{44}{9}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiRWwgcHJpbWVyIG5vbWJyZSBubyBlc3TDoCBiZW4gY29udmVydGl0LiBBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJIYXMgb3BlcmF0IGFtYiBlbHMgZGVjaW1hbHMgdGFsbGF0cywgc2Vuc2UgcGFzc2FyLWxvcyBhIGZyYWNjacOzLiBIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiJdLCAiZXJyIjogWyIiLCAiTk9fUkVTVEFfQU5URVBFUklPREUiLCAiTk9fUkVTVEFfQU5URVBFUklPREUiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIl0sICJyZXMiOiBbIiQzeyx9XFxvdmVybGluZXs3Nn0gPSBcXGRmcmFjezM3M317OTl9JCBcXHF1YWQgaSBcXHF1YWQgJDR7LH1cXG92ZXJsaW5lezh9ID0gXFxkZnJhY3s0NH17OX0kIiwgIiRcXGRmcmFjezM3M317OTl9IFxcY2RvdCBcXGRmcmFjezQ0fXs5fSA9IFxcZGZyYWN7MTQ5Mn17ODF9JCJdfQ=="
  },
  {
   "id": "32d",
   "ex": 32,
   "ap": "d",
   "bloc": "decimals",
   "tipus": "A",
   "dif": 4,
   "encapcalament": "Efectua les operacions.",
   "enunciat": "$1{,}25 : 2{,}2\\overline{5}$",
   "opcions": [
    "$\\dfrac{203}{72}$",
    "$\\dfrac{5}{9}$",
    "$\\dfrac{1}{2}$",
    "$\\dfrac{225}{406}$"
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu ABANS d'operar.",
    "$1{,}25 = \\dfrac{5}{4}$ i $2{,}2\\overline{5} = \\dfrac{203}{90}$"
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJQZXIgZGl2aWRpciBmcmFjY2lvbnMgZXMgbXVsdGlwbGljYSBsYSBwcmltZXJhIHBlciBsYSBJTlZFUlNBIGRlIGxhIHNlZ29uYS4iLCAiSGFzIG9wZXJhdCBhbWIgZWxzIGRlY2ltYWxzIHRhbGxhdHMsIHNlbnNlIHBhc3Nhci1sb3MgYSBmcmFjY2nDsy4gSGFzIHBvc2F0IG5vbcOpcyBwb3TDqG5jaWVzIGRlICQxMCQgYWwgZGVub21pbmFkb3IuIEFpeMOyIHZhbCBwZXIgYWxzIGRlY2ltYWxzIGV4YWN0ZXM7IHNpIGhpIGhhIHBlcsOtb2RlLCBlbCBkZW5vbWluYWRvciBoYSBkZSBkdXIgbm91cy4iLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiIl0sICJlcnIiOiBbIk5PX0lOVkVSVEVJWCIsICJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiTk9fUkVTVEFfQU5URVBFUklPREUiLCAiIl0sICJyZXMiOiBbIiQxeyx9MjUgPSBcXGRmcmFjezV9ezR9JCBcXHF1YWQgaSBcXHF1YWQgJDJ7LH0yXFxvdmVybGluZXs1fSA9IFxcZGZyYWN7MjAzfXs5MH0kIiwgIiRcXGRmcmFjezV9ezR9IDogXFxkZnJhY3syMDN9ezkwfSA9IFxcZGZyYWN7MjI1fXs0MDZ9JCJdfQ=="
  },
  {
   "id": "33a",
   "ex": 33,
   "ap": "a",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Fent servir les fraccions generatrius, comprova si les igualtats són certes o falses.",
   "enunciat": "$1{,}\\overline{9} = 2$",
   "opcions": [
    "Fals: $1{,}\\overline{9} = \\dfrac{19}{9}$, que no és $2$.",
    "Fals: $1{,}\\overline{9} = \\dfrac{19}{10}$, que no és $2$.",
    "Cert: totes dues bandes valen $2$.",
    "Fals: $1{,}\\overline{9}$ s'acosta a $2$ però no hi arriba mai."
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu i compara les dues bandes.",
    "Calcula la generatriu de $1{,}\\overline{9}$ amb la regla de sempre, encara que el resultat et sorprengui."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiVW4gZGVjaW1hbCBwZXJpw7JkaWMgbm8gwqtzJ2Fjb3N0YcK7IGEgdW4gdmFsb3I6IMOJUyBhcXVlc3QgdmFsb3IuIExhIGZyYWNjacOzIGdlbmVyYXRyaXUgaG8gZGVtb3N0cmEuIl0sICJlcnIiOiBbIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICIiLCAiSU5GSU5JVF9NQUlfQVJSSUJBIl0sICJyZXMiOiBbIiQxeyx9XFxvdmVybGluZXs5fSA9IFxcZGZyYWN7MTktMX17OX0gPSBcXGRmcmFjezE4fXs5fSA9IDIkIiwgIkxhIGlndWFsdGF0IMOpcyBjZXJ0YTogJDF7LH1cXG92ZXJsaW5lezl9JCBpICQyJCBzw7NuIGVsIG1hdGVpeCBub21icmUuIl19"
  },
  {
   "id": "33b",
   "ex": 33,
   "ap": "b",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Fent servir les fraccions generatrius, comprova si les igualtats són certes o falses.",
   "enunciat": "$1{,}\\overline{3} : 3 = 0{,}\\overline{4}$",
   "opcions": [
    "Fals: $1{,}\\overline{3} = \\dfrac{13}{9}$, i dividit entre $3$ no dóna $\\dfrac{4}{9}$.",
    "Fals: $1{,}3 : 3 = 0{,}4\\overline{3}$, que no és $0{,}\\overline{4}$.",
    "Cert: totes dues bandes valen $\\dfrac{4}{9}$.",
    "Fals: $\\dfrac{4}{3} : 3 = \\dfrac{4}{3}\\cdot 3 = 4$."
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu i compara les dues bandes.",
    "Dividir entre $3$ és multiplicar per $\\dfrac13$. Calcula cada banda per separat i compara-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiRGl2aWRpciBlbnRyZSAkMyQgw6lzIG11bHRpcGxpY2FyIHBlciAkXFxkZnJhY3sxfXszfSQsIG5vIHBlciAkMyQuIl0sICJlcnIiOiBbIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICIiLCAiRElWSVNJT19JTlZFUlRJREEiXSwgInJlcyI6IFsiJDF7LH1cXG92ZXJsaW5lezN9ID0gXFxkZnJhY3sxMy0xfXs5fSA9IFxcZGZyYWN7NH17M30kIiwgIiRcXGRmcmFjezR9ezN9IDogMyA9IFxcZGZyYWN7NH17OX0kIiwgIiQweyx9XFxvdmVybGluZXs0fSA9IFxcZGZyYWN7NH17OX0kOiBsYSBpZ3VhbHRhdCDDqXMgY2VydGEuIl19"
  },
  {
   "id": "33c",
   "ex": 33,
   "ap": "c",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Fent servir les fraccions generatrius, comprova si les igualtats són certes o falses.",
   "enunciat": "$1{,}8\\overline{9} + 0{,}1\\overline{1} = 2$",
   "opcions": [
    "Fals: l'esquerra val $\\dfrac{20}{9}$.",
    "Fals: l'esquerra val $\\dfrac{181}{90}$ i la dreta, $2$.",
    "Cert: $1{,}9 + 0{,}1 = 2$.",
    "Cert: totes dues bandes valen $\\dfrac{180}{90}$."
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu i compara les dues bandes.",
    "No arrodoneixis: $0{,}1\\overline{1}$ no és $0{,}1$. Passa cada decimal a fracció i suma amb denominador comú."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJBbCBudW1lcmFkb3IgY2FsIFJFU1RBUiBsYSBwYXJ0IHF1ZSBubyBlcyByZXBldGVpeDogdG90IGVsIG5vbWJyZSBzZW5zZSBjb21hLCBtZW55cyBsYSBwYXJ0IGFudGVyaW9yIGFsIHBlcsOtb2RlLiIsICIiLCAiSGFzIGFycm9kb25pdCBlbHMgZG9zIGRlY2ltYWxzLiAkMXssfThcXG92ZXJsaW5lezl9JCBzw60gcXVlIHZhbCAkMXssfTkkLCBwZXLDsiAkMHssfTFcXG92ZXJsaW5lezF9JCB2YWwgJFxcZGZyYWN7MX17OX0kLCBubyAkMHssfTEkLiIsICJDb21wcm92YSBsYSBzdW1hOiBkw7NuYSAkXFxkZnJhY3sxODF9ezkwfSQsIG5vICRcXGRmcmFjezE4MH17OTB9JC4iXSwgImVyciI6IFsiTk9fUkVTVEFfQU5URVBFUklPREUiLCAiIiwgIlRSQUNUQVRfQ09NX0VYQUNURSIsICJDQUxDVUxfRk9Sw4dBVCJdLCAicmVzIjogWyIkMXssfThcXG92ZXJsaW5lezl9ID0gXFxkZnJhY3sxODktMTh9ezkwfSA9IFxcZGZyYWN7MTl9ezEwfSQiLCAiJDB7LH0xXFxvdmVybGluZXsxfSA9IFxcZGZyYWN7MTEtMX17OTB9ID0gXFxkZnJhY3sxfXs5fSQiLCAiJFxcZGZyYWN7MTl9ezEwfSArIFxcZGZyYWN7MX17OX0gPSBcXGRmcmFjezE3MSsxMH17OTB9ID0gXFxkZnJhY3sxODF9ezkwfSQiLCAiJFxcZGZyYWN7MTgxfXs5MH0gXFxuZSAyID0gXFxkZnJhY3sxODB9ezkwfSQ6IGxhIGlndWFsdGF0IMOpcyBGQUxTQSAocGVyIHBvYykuIl19"
  },
  {
   "id": "33d",
   "ex": 33,
   "ap": "d",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Fent servir les fraccions generatrius, comprova si les igualtats són certes o falses.",
   "enunciat": "$0{,}1\\overline{1} - 0{,}\\overline{1} = 0$",
   "opcions": [
    "Fals: la resta val $0{,}01$.",
    "Cert: totes dues bandes valen $0$.",
    "Fals: la resta val $\\dfrac{1}{90}$.",
    "Fals: $0{,}1\\overline{1}$ és més gran perquè té un $1$ més."
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu i compara les dues bandes.",
    "$0{,}1\\overline{1}$ és periòdic mixt i $0{,}\\overline{1}$, pur: calcula la generatriu de cadascun i resta-les."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcG9zYXQgbm9tw6lzIHBvdMOobmNpZXMgZGUgJDEwJCBhbCBkZW5vbWluYWRvci4gQWl4w7IgdmFsIHBlciBhbHMgZGVjaW1hbHMgZXhhY3Rlczsgc2kgaGkgaGEgcGVyw61vZGUsIGVsIGRlbm9taW5hZG9yIGhhIGRlIGR1ciBub3VzLiIsICIiLCAiQWwgbnVtZXJhZG9yIGNhbCBSRVNUQVIgbGEgcGFydCBxdWUgbm8gZXMgcmVwZXRlaXg6IHRvdCBlbCBub21icmUgc2Vuc2UgY29tYSwgbWVueXMgbGEgcGFydCBhbnRlcmlvciBhbCBwZXLDrW9kZS4iLCAiVG90ZXMgZHVlcyBlc2NyaXB0dXJlcyBkb25lbiAkMHssfTExMTFcXGRvdHMkOiBlbCBtYXRlaXggbm9tYnJlLiJdLCAiZXJyIjogWyJUUkFDVEFUX0NPTV9FWEFDVEUiLCAiIiwgIk5PX1JFU1RBX0FOVEVQRVJJT0RFIiwgIlBFUklPREVfTUFMX0lERU5USUZJQ0FUIl0sICJyZXMiOiBbIiQweyx9MVxcb3ZlcmxpbmV7MX0gPSBcXGRmcmFjezExLTF9ezkwfSA9IFxcZGZyYWN7MTB9ezkwfSA9IFxcZGZyYWN7MX17OX0kIiwgIiQweyx9XFxvdmVybGluZXsxfSA9IFxcZGZyYWN7MX17OX0kIiwgIlPDs24gZWwgbWF0ZWl4IG5vbWJyZSAoJDB7LH0xMTExXFxkb3RzJCksIG8gc2lndWkgcXVlIGxhIHJlc3RhIMOpcyAkMCQ6IGNlcnQuIl19"
  },
  {
   "id": "33e",
   "ex": 33,
   "ap": "e",
   "bloc": "decimals",
   "tipus": "B",
   "dif": 4,
   "encapcalament": "Fent servir les fraccions generatrius, comprova si les igualtats són certes o falses.",
   "enunciat": "$0{,}\\overline{3} + 0{,}\\overline{6} = 1$",
   "opcions": [
    "Fals: $\\dfrac{3}{9} + \\dfrac{6}{9} = \\dfrac{9}{18}$.",
    "Cert: totes dues bandes valen $1$.",
    "Fals: dóna $0{,}9$.",
    "Fals: dóna $0{,}\\overline{9}$, que no arriba a $1$."
   ],
   "pistes": [
    "Passa cada decimal a fracció generatriu i compara les dues bandes.",
    "Tots dos són periòdics purs d'una xifra: un $9$ al denominador. Suma les dues fraccions i compara el resultat amb $1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgc3VtYXQgbnVtZXJhZG9ycyBhbWIgbnVtZXJhZG9ycyBpIGRlbm9taW5hZG9ycyBhbWIgZGVub21pbmFkb3JzLiBQZXIgc3VtYXIgbyByZXN0YXIgZnJhY2Npb25zIGNhbCByZWR1aXItbGVzIHByaW1lciBhIGRlbm9taW5hZG9yIGNvbcO6LiIsICIiLCAiSGFzIHBvc2F0IG5vbcOpcyBwb3TDqG5jaWVzIGRlICQxMCQgYWwgZGVub21pbmFkb3IuIEFpeMOyIHZhbCBwZXIgYWxzIGRlY2ltYWxzIGV4YWN0ZXM7IHNpIGhpIGhhIHBlcsOtb2RlLCBlbCBkZW5vbWluYWRvciBoYSBkZSBkdXIgbm91cy4iLCAiVW4gZGVjaW1hbCBwZXJpw7JkaWMgbm8gwqtzJ2Fjb3N0YcK7IGEgdW4gdmFsb3I6IMOJUyBhcXVlc3QgdmFsb3IuIExhIGZyYWNjacOzIGdlbmVyYXRyaXUgaG8gZGVtb3N0cmEuIl0sICJlcnIiOiBbIlNVTUFfTlVNRVJBRE9SUyIsICIiLCAiVFJBQ1RBVF9DT01fRVhBQ1RFIiwgIklORklOSVRfTUFJX0FSUklCQSJdLCAicmVzIjogWyIkMHssfVxcb3ZlcmxpbmV7M30gPSBcXGRmcmFjezN9ezl9JCBcXHF1YWQgaSBcXHF1YWQgJDB7LH1cXG92ZXJsaW5lezZ9ID0gXFxkZnJhY3s2fXs5fSQiLCAiJFxcZGZyYWN7M317OX0gKyBcXGRmcmFjezZ9ezl9ID0gXFxkZnJhY3s5fXs5fSA9IDEkOiBjZXJ0LiJdfQ=="
  },
  {
   "id": "34",
   "ex": 34,
   "ap": "",
   "bloc": "decimals",
   "tipus": "C",
   "dif": 4,
   "encapcalament": "Raona la resposta.",
   "enunciat": "Quina és la vint-i-sisena xifra decimal de $\\dfrac{128}{9999}$?",
   "opcions": [
    "$8$",
    "$1$",
    "$2$",
    "$0$"
   ],
   "pistes": [
    "Fes la divisió i mira quines xifres es repeteixen.",
    "$\\dfrac{128}{9999} = 0{,}\\overline{0128}$: el període té $4$ xifres. Divideix $26$ entre $4$ i mira el residu."
   ],
   "nota": "Aquest exercici demana raonament: fixa't que $\\dfrac{1}{9999}$ genera sempre períodes de $4$ xifres.",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCAkOCQgw6lzIGwnw7psdGltYSB4aWZyYSBkZWwgcGVyw61vZGU6IG9jdXBhIGxlcyBwb3NpY2lvbnMgbcO6bHRpcGxlcyBkZSAkNCQuIEVsICQyNiQgbm8gaG8gw6lzLiIsICIiLCAiRWwgJDIkIG9jdXBhIGxlcyBwb3NpY2lvbnMgcXVlIGRvbmVuIHJlc2lkdSAkMyQgZW4gZGl2aWRpciBlbnRyZSAkNCQ7ICQyNiA6IDQkIGTDs25hIHJlc2lkdSAkMiQuIiwgIkVsICQwJCBvY3VwYSBsZXMgcG9zaWNpb25zICQxLCA1LCA5LFxcZG90cyQgKGxlcyBxdWUgZG9uZW4gcmVzaWR1ICQxJCkuIExhICQyNiQgZMOzbmEgcmVzaWR1ICQyJC4iXSwgImVyciI6IFsiVUxUSU1BX1hJRlJBIiwgIiIsICJERVNQTEFDQU1FTlQiLCAiREVTUExBQ0FNRU5UIl0sICJyZXMiOiBbIiRcXGRmcmFjezEyOH17OTk5OX0gPSAweyx9MDEyOFxcLDAxMjhcXCwwMTI4XFxkb3RzID0gMHssfVxcb3ZlcmxpbmV7MDEyOH0kIiwgIkVsIHBlcsOtb2RlICQwMTI4JCB0w6kgJDQkIHhpZnJlcywgbyBzaWd1aSBxdWUgbGEgeGlmcmEgZXMgcmVwZXRlaXggY2FkYSAkNCQgcG9zaWNpb25zLiIsICIkMjYgPSA0XFxjZG90IDYgKyAyJDogbGEgeGlmcmEgJDI2JCDDqXMgbGEgbWF0ZWl4YSBxdWUgbGEgJDIkYSBkZWwgcGVyw61vZGUuIiwgIkxhICQyJGEgeGlmcmEgZGUgJDAxMjgkIMOpcyAkXFxtYXRoYmZ7MX0kLiJdfQ=="
  }
 ]
};
