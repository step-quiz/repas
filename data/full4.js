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
    "65a",
    "65b",
    "66a",
    "66b",
    "66c",
    "66d",
    "66e",
    "67a",
    "67b",
    "67c",
    "67d",
    "67e",
    "67f",
    "68a",
    "68b",
    "68c",
    "68d",
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
    "70a",
    "70b",
    "70c",
    "70d",
    "71a",
    "71b",
    "71c",
    "71d",
    "71e",
    "71f",
    "72a",
    "72b"
   ]
  },
  {
   "id": "factor_comu",
   "titol": "Factor comú i simplificació",
   "descripcio": "Factor comú i combinació amb igualtats notables.",
   "items": [
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
 "items": [
  {
   "id": "62a",
   "ex": 62,
   "ap": "a",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$P(x)+Q(x)+R(x)+S(x)$",
   "opcions": [
    "$2x^{5}+5x^{3}-x-5$",
    "$2x^{5}+5x^{3}+6x^{2}-7x-9$",
    "$2x^{5}-6x^{4}+9x^{3}-4x^{2}+11x-1$",
    "$2x^{5}+5x^{3}+6x^{2}-3x-3$"
   ],
   "pistes": [
    "Suma els quatre polinomis grau a grau: primer els termes de $x^5$, després els de $x^4$, i així successivament.",
    "Vigila els polinomis que no tenen tots els graus: $R(x)$ no té terme en $x^5$ ni $x^4$ ni $x^3$, i $S(x)$ només té fins a grau $1$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgcmVzdGF0ICRSKHgpJCBlbiBsbG9jIGRlIHN1bWFyLWxvLiIsICJIYXMgcmVzdGF0ICRTKHgpJCBlbiBsbG9jIGRlIHN1bWFyLWxvLiIsICJIYXMgcmVzdGF0ICRRKHgpJCBlbiBsbG9jIGRlIHN1bWFyLWxvOiByZXZpc2EgbCdlbnVuY2lhdCwgZWxzIHF1YXRyZSBwb2xpbm9taXMgc2Ugc3VtZW4uIiwgIiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIlRFUk1FX09CTElEQVRfT1BFUkFDSU8iLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiIl0sICJyZXMiOiBbIiRQKHgpK1EoeCkrUih4KStTKHgpPTJ4Xns1fSs1eF57M30rNnheezJ9LTN4LTMkIl19"
  },
  {
   "id": "62b",
   "ex": 62,
   "ap": "b",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$P(x)-R(x)+S(x)-Q(x)$",
   "opcions": [
    "$2x^{5}+5x^{3}-x-5$",
    "$2x^{5}-6x^{4}+9x^{3}-10x^{2}+9x-9$",
    "$2x^{5}-6x^{4}+9x^{3}-10x^{2}+13x-3$",
    "$2x^{5}-6x^{4}+9x^{3}-4x^{2}+11x-1$"
   ],
   "pistes": [
    "Vigila l'ordre dels signes: $P(x)$ i $S(x)$ sumen, $R(x)$ i $Q(x)$ resten.",
    "Resta $R(x)$ de $P(x)$ primer, suma-hi $S(x)$, i finalment resta'n $Q(x)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgJFEoeCkkIGVuIGxsb2MgZGUgcmVzdGFyLWxvOiByZXZpc2EgbCfDumx0aW0gc2lnbmUgZGUgbCdlbnVuY2lhdC4iLCAiSGFzIHJlc3RhdCAkUyh4KSQgZW4gbGxvYyBkZSBzdW1hci1sby4iLCAiIiwgIkhhcyBzdW1hdCAkUih4KSQgZW4gbGxvYyBkZSByZXN0YXItbG8uIl0sICJlcnIiOiBbIlBBUkVOVEVTSV9OT19ESVNUUklCVUlUX1BPTEkiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVRfUE9MSSJdLCAicmVzIjogWyIkUCh4KS1SKHgpK1MoeCktUSh4KT0yeF57NX0tNnheezR9Kzl4XnszfS0xMHheezJ9KzEzeC0zJCJdfQ=="
  },
  {
   "id": "62c",
   "ex": 62,
   "ap": "c",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)+Q(x)]-[R(x)+Q(x)]$",
   "opcions": [
    "$2x^{5}-3x^{4}+7x^{3}-5x^{2}+4x-7$",
    "$2x^{5}-9x^{4}+11x^{3}-15x^{2}+18x-5$",
    "$2x^{5}+3x^{4}+3x^{3}+11x^{2}-12x-7$",
    "$2x^{5}+3x^{4}+3x^{3}+5x^{2}-10x-9$"
   ],
   "pistes": [
    "El $Q(x)$ apareix als dos claudàtors: en restar-los, es cancel·la. El resultat és, en realitat, $P(x)-R(x)$.",
    "$[P(x)+Q(x)]-[R(x)+Q(x)]=P(x)+Q(x)-R(x)-Q(x)=P(x)-R(x)$."
   ],
   "nota": "Aquest resultat coincideix amb el de l'apartat d) — no és una casualitat: en tots dos casos el $Q(x)$ es cancel·la i queda $P(x)-R(x)$. És intencionat: conviden a adonar-se que expressions amb aspecte diferent poden donar el mateix resultat.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRW4gcmVzdGFyIGVsIHNlZ29uIGNsYXVkw6B0b3IsIGhhcyBjYW52aWF0IGVsIHNpZ25lIG5vbcOpcyBkJ3VuIGRlbHMgZG9zIHRlcm1lczogJC1bUih4KStRKHgpXT0tUih4KS1RKHgpJCwgZWxzIGRvcyBhbWIgc2lnbmUgbWVueXMuIiwgIkhhcyBzdW1hdCBlbHMgZG9zIGNsYXVkw6B0b3JzIGVuIGxsb2MgZGUgcmVzdGFyLWxvcy4iLCAiQWwgc2Vnb24gY2xhdWTDoHRvciBoaSBoYSAkUih4KStRKHgpJCwgbm8gJFIoeCktUSh4KSQ6IHJldmlzYSBsJ2VudW5jaWF0LiJdLCAiZXJyIjogWyIiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVRfUE9MSSIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIkdSQVVTX01BTF9BR1JVUEFUUyJdLCAicmVzIjogWyIkW1AoeCkrUSh4KV0tW1IoeCkrUSh4KV09UCh4KS1SKHgpPTJ4Xns1fS0zeF57NH0rN3heezN9LTV4XnsyfSs0eC03JCJdfQ=="
  },
  {
   "id": "62d",
   "ex": 62,
   "ap": "d",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)-Q(x)]-[R(x)-Q(x)]$",
   "opcions": [
    "$2x^{5}-6x^{4}+9x^{3}-10x^{2}+11x-6$",
    "$2x^{5}-9x^{4}+11x^{3}-9x^{2}+16x-3$",
    "$2x^{5}-3x^{4}+7x^{3}-5x^{2}+4x-7$",
    "$2x^{5}-9x^{4}+11x^{3}-15x^{2}+18x-5$"
   ],
   "pistes": [
    "El $Q(x)$ apareix (amb el mateix signe) als dos claudàtors: en restar-los, es cancel·la igualment.",
    "$[P(x)-Q(x)]-[R(x)-Q(x)]=P(x)-Q(x)-R(x)+Q(x)=P(x)-R(x)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJUJ2hhcyBkZWl4YXQgcGVsIGNhbcOtIGVsICQrUSh4KSQgZmluYWw6IGVsIHNlZ29uIGNsYXVkw6B0b3Igw6lzICQtW1IoeCktUSh4KV09LVIoeCkrUSh4KSQsIG5vIG5vbcOpcyAkLVIoeCkkLiIsICJIYXMgc3VtYXQgZWxzIGRvcyBjbGF1ZMOgdG9ycyBlbiBsbG9jIGRlIHJlc3Rhci1sb3MuIiwgIiIsICJFbiByZXN0YXIgZWwgc2Vnb24gY2xhdWTDoHRvciwgbm8gaGFzIGNhbnZpYXQgZWwgc2lnbmUgZGVsICQtUSh4KSQgZGUgZGluczogJC1bUih4KS1RKHgpXT0tUih4KStRKHgpJC4iXSwgImVyciI6IFsiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIiIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIl0sICJyZXMiOiBbIiRbUCh4KS1RKHgpXS1bUih4KS1RKHgpXT1QKHgpLVIoeCk9MnheezV9LTN4Xns0fSs3eF57M30tNXheezJ9KzR4LTckIl19"
  },
  {
   "id": "63a",
   "ex": 63,
   "ap": "a",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=x-1$",
   "opcions": [
    "$-x^{2}-x$",
    "$x^{2}+3x-2$",
    "$x^{2}+x$",
    "$-x^{2}-x-2$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Resta $P(x)=x^2+2x-1$ de $R(x)$, terme a terme."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiSGFzIHN1bWF0ICRQKHgpJCBlbiBsbG9jIGRlIHJlc3Rhci1sbzogc2kgJFAoeCkrUSh4KT1SKHgpJCwgYWxlc2hvcmVzICRRKHgpPVIoeCktUCh4KSQuIiwgIkhhcyByZXN0YXQgZW4gbCdvcmRyZSBlcXVpdm9jYXQ6IMOpcyAkUih4KS1QKHgpJCwgbm8gJFAoeCktUih4KSQuIiwgIkhhcyBjYW52aWF0IGVsIHNpZ25lIGRlbCB0ZXJtZSBpbmRlcGVuZGVudCBkZSAkUCh4KSQ6IMOpcyAkLTEkLCBubyAkKzEkLiJdLCAiZXJyIjogWyIiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVRfUE9MSSIsICJPUkRSRV9SRVNUQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9LXheezJ9LXgkIl19"
  },
  {
   "id": "63b",
   "ex": 63,
   "ap": "b",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=2x^2-x-6$",
   "opcions": [
    "$-x^{2}+3x+5$",
    "$x^{2}-3x-5$",
    "$x^{2}-3x-7$",
    "$3x^{2}+x-7$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Resta $P(x)=x^2+2x-1$ de $R(x)$, terme a terme."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJIYXMgcmVzdGF0IGVuIGwnb3JkcmUgZXF1aXZvY2F0OiDDqXMgJFIoeCktUCh4KSQsIG5vICRQKHgpLVIoeCkkLiIsICIiLCAiSGFzIGNhbnZpYXQgZWwgc2lnbmUgZGVsIHRlcm1lIGluZGVwZW5kZW50IGRlICRQKHgpJDogw6lzICQtMSQsIG5vICQrMSQuIiwgIkhhcyBzdW1hdCAkUCh4KSQgZW4gbGxvYyBkZSByZXN0YXItbG86IHNpICRQKHgpK1EoeCk9Uih4KSQsIGFsZXNob3JlcyAkUSh4KT1SKHgpLVAoeCkkLiJdLCAiZXJyIjogWyJPUkRSRV9SRVNUQSIsICIiLCAiU0lHTkVfVEVSTUVfSU5ERVBFTkRFTlQiLCAiUEFSRU5URVNJX05PX0RJU1RSSUJVSVRfUE9MSSJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9eF57Mn0tM3gtNSQiXX0="
  },
  {
   "id": "63c",
   "ex": 63,
   "ap": "c",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=5x^2-x+1$",
   "opcions": [
    "$4x^{2}-3x$",
    "$-4x^{2}+3x-2$",
    "$6x^{2}+x$",
    "$4x^{2}-3x+2$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Resta $P(x)=x^2+2x-1$ de $R(x)$, terme a terme."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgY2FudmlhdCBlbCBzaWduZSBkZWwgdGVybWUgaW5kZXBlbmRlbnQgZGUgJFAoeCkkOiDDqXMgJC0xJCwgbm8gJCsxJC4iLCAiSGFzIHJlc3RhdCBlbiBsJ29yZHJlIGVxdWl2b2NhdDogw6lzICRSKHgpLVAoeCkkLCBubyAkUCh4KS1SKHgpJC4iLCAiSGFzIHN1bWF0ICRQKHgpJCBlbiBsbG9jIGRlIHJlc3Rhci1sbzogc2kgJFAoeCkrUSh4KT1SKHgpJCwgYWxlc2hvcmVzICRRKHgpPVIoeCktUCh4KSQuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJPUkRSRV9SRVNUQSIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIiJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9NHheezJ9LTN4KzIkIl19"
  },
  {
   "id": "63d",
   "ex": 63,
   "ap": "d",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=-7x^2-3x$",
   "opcions": [
    "$-8x^{2}-5x-1$",
    "$-6x^{2}-x-1$",
    "$8x^{2}+5x-1$",
    "$-8x^{2}-5x+1$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Resta $P(x)=x^2+2x-1$ de $R(x)$, terme a terme."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgY2FudmlhdCBlbCBzaWduZSBkZWwgdGVybWUgaW5kZXBlbmRlbnQgZGUgJFAoeCkkOiDDqXMgJC0xJCwgbm8gJCsxJC4iLCAiSGFzIHN1bWF0ICRQKHgpJCBlbiBsbG9jIGRlIHJlc3Rhci1sbzogc2kgJFAoeCkrUSh4KT1SKHgpJCwgYWxlc2hvcmVzICRRKHgpPVIoeCktUCh4KSQuIiwgIkhhcyByZXN0YXQgZW4gbCdvcmRyZSBlcXVpdm9jYXQ6IMOpcyAkUih4KS1QKHgpJCwgbm8gJFAoeCktUih4KSQuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIk9SRFJFX1JFU1RBIiwgIiJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9LTh4XnsyfS01eCsxJCJdfQ=="
  },
  {
   "id": "63e",
   "ex": 63,
   "ap": "e",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=x^3-x$",
   "opcions": [
    "$x^{3}+x^{2}+x-1$",
    "$x^{3}-x^{2}-3x-1$",
    "$-x^{3}+x^{2}+3x-1$",
    "$x^{3}-x^{2}-3x+1$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Resta $P(x)=x^2+2x-1$ de $R(x)$, terme a terme."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgc3VtYXQgJFAoeCkkIGVuIGxsb2MgZGUgcmVzdGFyLWxvOiBzaSAkUCh4KStRKHgpPVIoeCkkLCBhbGVzaG9yZXMgJFEoeCk9Uih4KS1QKHgpJC4iLCAiSGFzIGNhbnZpYXQgZWwgc2lnbmUgZGVsIHRlcm1lIGluZGVwZW5kZW50IGRlICRQKHgpJDogw6lzICQtMSQsIG5vICQrMSQuIiwgIkhhcyByZXN0YXQgZW4gbCdvcmRyZSBlcXVpdm9jYXQ6IMOpcyAkUih4KS1QKHgpJCwgbm8gJFAoeCktUih4KSQuIiwgIiJdLCAiZXJyIjogWyJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIlNJR05FX1RFUk1FX0lOREVQRU5ERU5UIiwgIk9SRFJFX1JFU1RBIiwgIiJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9eF57M30teF57Mn0tM3grMSQiXX0="
  },
  {
   "id": "63f",
   "ex": 63,
   "ap": "f",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Troba quin és el polinomi $Q(x)$ que s'ha de sumar a $P(x)=x^2+2x-1$ per obtenir com a resultat $R(x)$.",
   "enunciat": "$R(x)=x^3-x^2$",
   "opcions": [
    "$x^{3}+2x-1$",
    "$-x^{3}+2x^{2}+2x-1$",
    "$x^{3}-2x^{2}-2x+1$",
    "$x^{3}-2x^{2}-2x-1$"
   ],
   "pistes": [
    "Si $P(x)+Q(x)=R(x)$, aïllant $Q(x)$ queda $Q(x)=R(x)-P(x)$.",
    "Resta $P(x)=x^2+2x-1$ de $R(x)$, terme a terme."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgc3VtYXQgJFAoeCkkIGVuIGxsb2MgZGUgcmVzdGFyLWxvOiBzaSAkUCh4KStRKHgpPVIoeCkkLCBhbGVzaG9yZXMgJFEoeCk9Uih4KS1QKHgpJC4iLCAiSGFzIHJlc3RhdCBlbiBsJ29yZHJlIGVxdWl2b2NhdDogw6lzICRSKHgpLVAoeCkkLCBubyAkUCh4KS1SKHgpJC4iLCAiIiwgIkhhcyBjYW52aWF0IGVsIHNpZ25lIGRlbCB0ZXJtZSBpbmRlcGVuZGVudCBkZSAkUCh4KSQ6IMOpcyAkLTEkLCBubyAkKzEkLiJdLCAiZXJyIjogWyJQQVJFTlRFU0lfTk9fRElTVFJJQlVJVF9QT0xJIiwgIk9SRFJFX1JFU1RBIiwgIiIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCJdLCAicmVzIjogWyIkUSh4KT1SKHgpLVAoeCk9eF57M30tMnheezJ9LTJ4KzEkIl19"
  },
  {
   "id": "64a",
   "ex": 64,
   "ap": "a",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)-Q(x)]\\cdot S(x)$",
   "opcions": [
    "$4x^{6}-6x^{5}+13x^{3}-x^{2}+20x-15$",
    "$4x^{6}-12x^{5}+18x^{4}-14x^{3}+20x^{2}-10x$",
    "$6x^{5}-18x^{4}+27x^{3}-21x^{2}+30x-15$",
    "$-4x^{6}+6x^{5}-13x^{3}+x^{2}-20x+15$"
   ],
   "pistes": [
    "Multiplica cada terme de $[P(x)-Q(x)]$ per CADA terme de $S(x)=2x+3$: pel $2x$ i pel $3$.",
    "Un cop distribuït, agrupa els termes del mateix grau i suma'ls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm9tw6lzIGhhcyBtdWx0aXBsaWNhdCBwZWwgdGVybWUgJDJ4JCBkZSAkUyh4KSQ6IGNhbCBtdWx0aXBsaWNhciB0YW1iw6kgcGVsIHRlcm1lICQzJC4iLCAiTm9tw6lzIGhhcyBtdWx0aXBsaWNhdCBwZWwgdGVybWUgJDMkIGRlICRTKHgpJDogY2FsIG11bHRpcGxpY2FyIHRhbWLDqSBwZWwgdGVybWUgJDJ4JC4iLCAiRWwgcmVzdWx0YXQgdMOpIHRvdHMgZWxzIHNpZ25lcyBjYW52aWF0czogcmV2aXNhIGVscyBzaWduZXMgZGUgJFtQKHgpLVEoeCldJCBhYmFucyBkZSBtdWx0aXBsaWNhci4iXSwgImVyciI6IFsiIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiLCAiRElTVFJJQlVDSU9fSU5DT01QTEVUQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCJdLCAicmVzIjogWyIkJFtQKHgpLVEoeCldJFxcY2RvdCBTKHgpPTR4Xns2fS02eF57NX0rMTN4XnszfS14XnsyfSsyMHgtMTUkIl19"
  },
  {
   "id": "64b",
   "ex": 64,
   "ap": "b",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[R(x)-Q(x)]\\cdot S(x)$",
   "opcions": [
    "$-9x^{4}+6x^{3}-6x^{2}+18x+6$",
    "$6x^{5}+5x^{4}-2x^{3}-6x^{2}-22x-6$",
    "$-6x^{5}+4x^{4}-4x^{3}+12x^{2}+4x$",
    "$-6x^{5}-5x^{4}+2x^{3}+6x^{2}+22x+6$"
   ],
   "pistes": [
    "Multiplica cada terme de $[R(x)-Q(x)]$ per CADA terme de $S(x)=2x+3$: pel $2x$ i pel $3$.",
    "Un cop distribuït, agrupa els termes del mateix grau i suma'ls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJOb23DqXMgaGFzIG11bHRpcGxpY2F0IHBlbCB0ZXJtZSAkMyQgZGUgJFMoeCkkOiBjYWwgbXVsdGlwbGljYXIgdGFtYsOpIHBlbCB0ZXJtZSAkMngkLiIsICJFbCByZXN1bHRhdCB0w6kgdG90cyBlbHMgc2lnbmVzIGNhbnZpYXRzOiByZXZpc2EgZWxzIHNpZ25lcyBkZSAkW1IoeCktUSh4KV0kIGFiYW5zIGRlIG11bHRpcGxpY2FyLiIsICJOb23DqXMgaGFzIG11bHRpcGxpY2F0IHBlbCB0ZXJtZSAkMngkIGRlICRTKHgpJDogY2FsIG11bHRpcGxpY2FyIHRhbWLDqSBwZWwgdGVybWUgJDMkLiIsICIiXSwgImVyciI6IFsiRElTVFJJQlVDSU9fSU5DT01QTEVUQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJESVNUUklCVUNJT19JTkNPTVBMRVRBIiwgIiJdLCAicmVzIjogWyIkJFtSKHgpLVEoeCldJFxcY2RvdCBTKHgpPS02eF57NX0tNXheezR9KzJ4XnszfSs2eF57Mn0rMjJ4KzYkIl19"
  },
  {
   "id": "64c",
   "ex": 64,
   "ap": "c",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)+Q(x)+R(x)]\\cdot S(x)$",
   "opcions": [
    "$4x^{6}+6x^{5}+10x^{4}+27x^{3}+8x^{2}-27x-18$",
    "$4x^{6}+10x^{4}+12x^{3}-10x^{2}-12x$",
    "$-4x^{6}-6x^{5}-10x^{4}-27x^{3}-8x^{2}+27x+18$",
    "$6x^{5}+15x^{3}+18x^{2}-15x-18$"
   ],
   "pistes": [
    "Multiplica cada terme de $[P(x)+Q(x)+R(x)]$ per CADA terme de $S(x)=2x+3$: pel $2x$ i pel $3$.",
    "Un cop distribuït, agrupa els termes del mateix grau i suma'ls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiTm9tw6lzIGhhcyBtdWx0aXBsaWNhdCBwZWwgdGVybWUgJDJ4JCBkZSAkUyh4KSQ6IGNhbCBtdWx0aXBsaWNhciB0YW1iw6kgcGVsIHRlcm1lICQzJC4iLCAiRWwgcmVzdWx0YXQgdMOpIHRvdHMgZWxzIHNpZ25lcyBjYW52aWF0czogcmV2aXNhIGVscyBzaWduZXMgZGUgJFtQKHgpK1EoeCkrUih4KV0kIGFiYW5zIGRlIG11bHRpcGxpY2FyLiIsICJOb23DqXMgaGFzIG11bHRpcGxpY2F0IHBlbCB0ZXJtZSAkMyQgZGUgJFMoeCkkOiBjYWwgbXVsdGlwbGljYXIgdGFtYsOpIHBlbCB0ZXJtZSAkMngkLiJdLCAiZXJyIjogWyIiLCAiRElTVFJJQlVDSU9fSU5DT01QTEVUQSIsICJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJESVNUUklCVUNJT19JTkNPTVBMRVRBIl0sICJyZXMiOiBbIiQkW1AoeCkrUSh4KStSKHgpXSRcXGNkb3QgUyh4KT00eF57Nn0rNnheezV9KzEweF57NH0rMjd4XnszfSs4eF57Mn0tMjd4LTE4JCJdfQ=="
  },
  {
   "id": "64d",
   "ex": 64,
   "ap": "d",
   "bloc": "operacions",
   "tipus": "A",
   "encapcalament": "Donats els polinomis $P(x)=2x^5-3x^4+7x^3-2x^2+3x-6$, $Q(x)=3x^4-2x^3+5x^2-7x-1$, $R(x)=3x^2-x+1$ i $S(x)=2x+3$, calcula.",
   "enunciat": "$[P(x)+Q(x)-R(x)]\\cdot S(x)$",
   "opcions": [
    "$-4x^{6}-6x^{5}-10x^{4}-15x^{3}+6x^{2}+25x+24$",
    "$6x^{5}+15x^{3}-9x-24$",
    "$4x^{6}+10x^{4}-6x^{2}-16x$",
    "$4x^{6}+6x^{5}+10x^{4}+15x^{3}-6x^{2}-25x-24$"
   ],
   "pistes": [
    "Multiplica cada terme de $[P(x)+Q(x)-R(x)]$ per CADA terme de $S(x)=2x+3$: pel $2x$ i pel $3$.",
    "Un cop distribuït, agrupa els termes del mateix grau i suma'ls."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXN1bHRhdCB0w6kgdG90cyBlbHMgc2lnbmVzIGNhbnZpYXRzOiByZXZpc2EgZWxzIHNpZ25lcyBkZSAkW1AoeCkrUSh4KS1SKHgpXSQgYWJhbnMgZGUgbXVsdGlwbGljYXIuIiwgIk5vbcOpcyBoYXMgbXVsdGlwbGljYXQgcGVsIHRlcm1lICQzJCBkZSAkUyh4KSQ6IGNhbCBtdWx0aXBsaWNhciB0YW1iw6kgcGVsIHRlcm1lICQyeCQuIiwgIk5vbcOpcyBoYXMgbXVsdGlwbGljYXQgcGVsIHRlcm1lICQyeCQgZGUgJFMoeCkkOiBjYWwgbXVsdGlwbGljYXIgdGFtYsOpIHBlbCB0ZXJtZSAkMyQuIiwgIiJdLCAiZXJyIjogWyJTSUdORV9URVJNRV9JTkRFUEVOREVOVCIsICJESVNUUklCVUNJT19JTkNPTVBMRVRBIiwgIkRJU1RSSUJVQ0lPX0lOQ09NUExFVEEiLCAiIl0sICJyZXMiOiBbIiQkW1AoeCkrUSh4KS1SKHgpXSRcXGNkb3QgUyh4KT00eF57Nn0rNnheezV9KzEweF57NH0rMTV4XnszfS02eF57Mn0tMjV4LTI0JCJdfQ=="
  },
  {
   "id": "65a",
   "ex": 65,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Divideix.",
   "enunciat": "$(7x^5+4x^4+3x^3-5x^2+2x-1):(x^2+x)$",
   "opcions": [
    "$\\text{quocient: }7x^{3}-3x^{2}+6x-11\\text{; residu: }-13x+1$",
    "$\\text{quocient: }7x^{3}-3x^{2}+5x-11\\text{; residu: }13x-1$",
    "$\\text{quocient: }7x^{3}-3x^{2}+6x-10\\text{; residu: }13x-1$",
    "$\\text{quocient: }7x^{3}-3x^{2}+6x-11\\text{; residu: }13x-1$"
   ],
   "pistes": [
    "Divideix pas a pas: el primer terme del quocient surt de dividir $7x^5$ entre $x^2$.",
    "Continua restant i baixant termes fins que el residu tingui grau menor que el divisor (grau $2$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbSBwYXMgZGUgbGEgZGl2aXNpw7MuIiwgIkVsIHF1b2NpZW50IG5vIMOpcyBjb3JyZWN0ZTogcmV2aXNhIGVsIHRlcm1lIGRlIGdyYXUgJDEkLiIsICJFbCBxdW9jaWVudCBubyDDqXMgY29ycmVjdGU6IHJldmlzYSBlbCB0ZXJtZSBpbmRlcGVuZGVudCBkZWwgcXVvY2llbnQsIHNvYnJhIHVuICQrMSQuIiwgIiJdLCAiZXJyIjogWyJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICJHUkFVU19NQUxfQUdSVVBBVFMiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICIiXSwgInJlcyI6IFsiUXVvY2llbnQgJDd4XnszfS0zeF57Mn0rNngtMTEkIGkgcmVzaWR1ICQxM3gtMSQiXX0="
  },
  {
   "id": "65b",
   "ex": 65,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Divideix.",
   "enunciat": "$(x^4-2x^3+x^2-x+3):(x^2+x+1)$",
   "opcions": [
    "$\\text{quocient: }x^{2}-2x+3\\text{; residu: }-x$",
    "$\\text{quocient: }x^{2}-3x+3\\text{; residu: }x$",
    "$\\text{quocient: }x^{2}-3x+3\\text{; residu: }-x$",
    "$\\text{quocient: }x^{2}-3x+3\\text{; residu: }0$"
   ],
   "pistes": [
    "Divideix pas a pas: el primer terme del quocient surt de dividir $x^4$ entre $x^2$.",
    "Continua fins que el residu tingui grau menor que el divisor (grau $2$)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBxdW9jaWVudCBubyDDqXMgY29ycmVjdGU6IHJldmlzYSBlbCB0ZXJtZSBkZWwgbWlnLiIsICJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbSBwYXMgZGUgbGEgZGl2aXNpw7MuIiwgIiIsICJFbCByZXNpZHUgbm8gw6lzICQwJDogYXF1ZXN0YSBkaXZpc2nDsyBubyDDqXMgZXhhY3RhLiJdLCAiZXJyIjogWyJURVJNRV9PQkxJREFUX09QRVJBQ0lPIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIiIsICJSVUZGSU5JX1JFU0lEVV9DT01fUVVPQ0lFTlQiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezJ9LTN4KzMkIGkgcmVzaWR1ICQteCQiXX0="
  },
  {
   "id": "66a",
   "ex": 66,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(x^5-x^3+x^2-x^4+3x-7):(x-2)$",
   "opcions": [
    "$\\text{quocient: }x^{4}+x^{3}+x^{2}+3x+9\\text{; residu: }11$",
    "$\\text{quocient: }x^{4}-3x^{3}+5x^{2}-9x+21\\text{; residu: }-49$",
    "$\\text{quocient: }2x^{4}+x^{3}+x^{2}+3x+9\\text{; residu: }11$",
    "$\\text{quocient: }x^{4}+x^{3}+x^{2}+3x+9\\text{; residu: }-11$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $2$.",
    "Baixa el primer coeficient, multiplica'l per $2$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiU2kgZWwgZGl2aXNvciDDqXMgJHgtMiQsIGwnYXJyZWwgYW1iIHF1w6ggZXMgbXVsdGlwbGljYSBhIFJ1ZmZpbmkgw6lzICQyJCwgbm8gJC0yJC4iLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgJHgtMiQgKGdyYXUgJDEkKSwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGwnw7psdGltYSBzdW1hIGRlIGxhIHRhdWxhLiJdLCAiZXJyIjogWyIiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICJSVUZGSU5JX1FVT0NJRU5UX0dSQVUiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezR9K3heezN9K3heezJ9KzN4KzkkIGkgcmVzaWR1ICQxMSQiXX0="
  },
  {
   "id": "66b",
   "ex": 66,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(x^4+2x^2-x-3):(x+1)$",
   "opcions": [
    "$\\text{quocient: }2x^{3}-x^{2}+3x-4\\text{; residu: }1$",
    "$\\text{quocient: }x^{3}-x^{2}+3x-4\\text{; residu: }-1$",
    "$\\text{quocient: }x^{3}+x^{2}+3x+2\\text{; residu: }-1$",
    "$\\text{quocient: }x^{3}-x^{2}+3x-4\\text{; residu: }1$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $-1$.",
    "Baixa el primer coeficient, multiplica'l per $-1$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBxdW9jaWVudCB0w6kgdW4gZ3JhdSBkZSBtw6lzOiBlbiBkaXZpZGlyIHBlciAkeCsxJCAoZ3JhdSAkMSQpLCBlbCBxdW9jaWVudCBoYSBkZSB0ZW5pciB1biBncmF1IG1lbnlzIHF1ZSBlbCBkaXZpZGVuZC4iLCAiRWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0OiByZXZpc2EgbCfDumx0aW1hIHN1bWEgZGUgbGEgdGF1bGEuIiwgIlNpIGVsIGRpdmlzb3Igw6lzICR4KzEkLCBsJ2FycmVsIGFtYiBxdcOoIGVzIG11bHRpcGxpY2EgYSBSdWZmaW5pIMOpcyAkLTEkLCBubyAkMSQuIiwgIiJdLCAiZXJyIjogWyJSVUZGSU5JX1FVT0NJRU5UX0dSQVUiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICIiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezN9LXheezJ9KzN4LTQkIGkgcmVzaWR1ICQxJCJdfQ=="
  },
  {
   "id": "66c",
   "ex": 66,
   "ap": "c",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(2x^4-x^3+x+3):(x-3)$",
   "opcions": [
    "$\\text{quocient: }2x^{3}+5x^{2}+15x+46\\text{; residu: }-141$",
    "$\\text{quocient: }3x^{3}+5x^{2}+15x+46\\text{; residu: }141$",
    "$\\text{quocient: }2x^{3}-7x^{2}+21x-62\\text{; residu: }189$",
    "$\\text{quocient: }2x^{3}+5x^{2}+15x+46\\text{; residu: }141$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $3$.",
    "Baixa el primer coeficient, multiplica'l per $3$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbWEgc3VtYSBkZSBsYSB0YXVsYS4iLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgJHgtMyQgKGdyYXUgJDEkKSwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIiwgIlNpIGVsIGRpdmlzb3Igw6lzICR4LTMkLCBsJ2FycmVsIGFtYiBxdcOoIGVzIG11bHRpcGxpY2EgYSBSdWZmaW5pIMOpcyAkMyQsIG5vICQtMyQuIiwgIiJdLCAiZXJyIjogWyJESVZJU0lPX1FVT0NJRU5UX1JFU0lEVV9DQU5WSUFUUyIsICJSVUZGSU5JX1FVT0NJRU5UX0dSQVUiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICIiXSwgInJlcyI6IFsiUXVvY2llbnQgJDJ4XnszfSs1eF57Mn0rMTV4KzQ2JCBpIHJlc2lkdSAkMTQxJCJdfQ=="
  },
  {
   "id": "66d",
   "ex": 66,
   "ap": "d",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(x^3-8x+x^2-7):(x+2)$",
   "opcions": [
    "$\\text{quocient: }x^{2}-x-6\\text{; residu: }5$",
    "$\\text{quocient: }2x^{2}-x-6\\text{; residu: }5$",
    "$\\text{quocient: }x^{2}-x-6\\text{; residu: }-5$",
    "$\\text{quocient: }x^{2}+3x-2\\text{; residu: }-11$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $-2$.",
    "Baixa el primer coeficient, multiplica'l per $-2$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgJHgrMiQgKGdyYXUgJDEkKSwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGwnw7psdGltYSBzdW1hIGRlIGxhIHRhdWxhLiIsICJTaSBlbCBkaXZpc29yIMOpcyAkeCsyJCwgbCdhcnJlbCBhbWIgcXXDqCBlcyBtdWx0aXBsaWNhIGEgUnVmZmluaSDDqXMgJC0yJCwgbm8gJDIkLiJdLCAiZXJyIjogWyIiLCAiUlVGRklOSV9RVU9DSUVOVF9HUkFVIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezJ9LXgtNiQgaSByZXNpZHUgJDUkIl19"
  },
  {
   "id": "66e",
   "ex": 66,
   "ap": "e",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Calcula, aplicant la regla de Ruffini.",
   "enunciat": "$(x^3-4x^2+6x-9):(x+4)$",
   "opcions": [
    "$\\text{quocient: }x^{2}-8x+38\\text{; residu: }-161$",
    "$\\text{quocient: }2x^{2}-8x+38\\text{; residu: }-161$",
    "$\\text{quocient: }x^{2}+6\\text{; residu: }15$",
    "$\\text{quocient: }x^{2}-8x+38\\text{; residu: }161$"
   ],
   "pistes": [
    "Escriu els coeficients del dividend (amb un $0$ als graus que no hi surten) i aplica Ruffini amb l'arrel $-4$.",
    "Baixa el primer coeficient, multiplica'l per $-4$ i suma'l al següent; repeteix fins al final. L'últim número és el residu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgJHgrNCQgKGdyYXUgJDEkKSwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIiwgIlNpIGVsIGRpdmlzb3Igw6lzICR4KzQkLCBsJ2FycmVsIGFtYiBxdcOoIGVzIG11bHRpcGxpY2EgYSBSdWZmaW5pIMOpcyAkLTQkLCBubyAkNCQuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdDogcmV2aXNhIGwnw7psdGltYSBzdW1hIGRlIGxhIHRhdWxhLiJdLCAiZXJyIjogWyIiLCAiUlVGRklOSV9RVU9DSUVOVF9HUkFVIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiUXVvY2llbnQgJHheezJ9LTh4KzM4JCBpIHJlc2lkdSAkLTE2MSQiXX0="
  },
  {
   "id": "67a",
   "ex": 67,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(4x^7-2x^3+x^5):(x+2)$",
   "opcions": [
    "$\\text{quocient: }4x^{6}-8x^{5}+17x^{4}-34x^{3}+66x^{2}-132x+264\\text{; residu: }528$",
    "$\\text{quocient: }5x^{6}-8x^{5}+17x^{4}-34x^{3}+66x^{2}-132x+264\\text{; residu: }-528$",
    "$\\text{quocient: }4x^{6}+8x^{5}+17x^{4}+34x^{3}+66x^{2}+132x+264\\text{; residu: }528$",
    "$\\text{quocient: }4x^{6}-8x^{5}+17x^{4}-34x^{3}+66x^{2}-132x+264\\text{; residu: }-528$"
   ],
   "pistes": [
    "Escriu primer el dividend ordenat de grau més gran a més petit, amb un $0$ als graus que no hi surten.",
    "Aplica Ruffini amb l'arrel $-2$: baixa, multiplica, suma, i repeteix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbWEgc3VtYSBkZSBsYSB0YXVsYS4iLCAiRWwgcXVvY2llbnQgdMOpIHVuIGdyYXUgZGUgbcOpczogZW4gZGl2aWRpciBwZXIgdW4gYmlub21pIGRlIGdyYXUgJDEkLCBlbCBxdW9jaWVudCBoYSBkZSB0ZW5pciB1biBncmF1IG1lbnlzIHF1ZSBlbCBkaXZpZGVuZC4iLCAiU2kgZWwgZGl2aXNvciDDqXMgJHgtKC0yKSQsIGwnYXJyZWwgYW1iIHF1w6ggZXMgbXVsdGlwbGljYSBhIFJ1ZmZpbmkgw6lzICQtMiQsIG5vICQyJC4iLCAiIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfUVVPQ0lFTlRfR1JBVSIsICJSVUZGSU5JX1NJR05FX0FSUkVMIiwgIiJdLCAicmVzIjogWyJRdW9jaWVudCAkNHheezZ9LTh4Xns1fSsxN3heezR9LTM0eF57M30rNjZ4XnsyfS0xMzJ4KzI2NCQgaSByZXNpZHUgJC01MjgkIl19"
  },
  {
   "id": "67b",
   "ex": 67,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(1-x^5):(x-1)$",
   "opcions": [
    "$\\text{quocient: }-x^{3}-x^{2}-x-1\\text{; residu: }0$",
    "$\\text{quocient: }-x^{4}-x^{3}-x^{2}-x-1\\text{; residu: }1$",
    "$\\text{quocient: }-x^{4}-x^{3}-x^{2}-x-1\\text{; residu: }0$",
    "$\\text{quocient: }-x^{4}+x^{3}-x^{2}+x-1\\text{; residu: }2$"
   ],
   "pistes": [
    "Escriu primer el dividend ordenat de grau més gran a més petit, amb un $0$ als graus que no hi surten.",
    "Aplica Ruffini amb l'arrel $1$: baixa, multiplica, suma, i repeteix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBxdW9jaWVudCB0w6kgdW4gZ3JhdSBkZSBtw6lzOiBlbiBkaXZpZGlyIHBlciB1biBiaW5vbWkgZGUgZ3JhdSAkMSQsIGVsIHF1b2NpZW50IGhhIGRlIHRlbmlyIHVuIGdyYXUgbWVueXMgcXVlIGVsIGRpdmlkZW5kLiIsICJMJ8O6bHRpbWEgc3VtYSBkZSBsYSB0YXVsYSBubyDDqXMgY29ycmVjdGE6IHJldmlzYSBlbCBkYXJyZXIgcGFzIGRlIFJ1ZmZpbmkuIiwgIiIsICJTaSBlbCBkaXZpc29yIMOpcyAkeC0oMSkkLCBsJ2FycmVsIGFtYiBxdcOoIGVzIG11bHRpcGxpY2EgYSBSdWZmaW5pIMOpcyAkMSQsIG5vICQtMSQuIl0sICJlcnIiOiBbIlJVRkZJTklfUVVPQ0lFTlRfR1JBVSIsICJSVUZGSU5JX1BBU19NQUwiLCAiIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiXSwgInJlcyI6IFsiUXVvY2llbnQgJC14Xns0fS14XnszfS14XnsyfS14LTEkIGkgcmVzaWR1ICQwJCJdfQ=="
  },
  {
   "id": "67c",
   "ex": 67,
   "ap": "c",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(3x+2x^2-x^5+6x^6):(x+1)$",
   "opcions": [
    "$\\text{quocient: }6x^{5}-7x^{4}+7x^{3}-7x^{2}+9x-6\\text{; residu: }-6$",
    "$\\text{quocient: }6x^{5}+5x^{4}+5x^{3}+5x^{2}+7x+10\\text{; residu: }10$",
    "$\\text{quocient: }6x^{5}-7x^{4}+7x^{3}-7x^{2}+9x-6\\text{; residu: }6$",
    "$\\text{quocient: }7x^{5}-7x^{4}+7x^{3}-7x^{2}+9x-6\\text{; residu: }6$"
   ],
   "pistes": [
    "Escriu primer el dividend ordenat de grau més gran a més petit, amb un $0$ als graus que no hi surten.",
    "Aplica Ruffini amb l'arrel $-1$: baixa, multiplica, suma, i repeteix."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQ6IHJldmlzYSBsJ8O6bHRpbWEgc3VtYSBkZSBsYSB0YXVsYS4iLCAiU2kgZWwgZGl2aXNvciDDqXMgJHgtKC0xKSQsIGwnYXJyZWwgYW1iIHF1w6ggZXMgbXVsdGlwbGljYSBhIFJ1ZmZpbmkgw6lzICQtMSQsIG5vICQxJC4iLCAiIiwgIkVsIHF1b2NpZW50IHTDqSB1biBncmF1IGRlIG3DqXM6IGVuIGRpdmlkaXIgcGVyIHVuIGJpbm9taSBkZSBncmF1ICQxJCwgZWwgcXVvY2llbnQgaGEgZGUgdGVuaXIgdW4gZ3JhdSBtZW55cyBxdWUgZWwgZGl2aWRlbmQuIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiLCAiIiwgIlJVRkZJTklfUVVPQ0lFTlRfR1JBVSJdLCAicmVzIjogWyJRdW9jaWVudCAkNnheezV9LTd4Xns0fSs3eF57M30tN3heezJ9Kzl4LTYkIGkgcmVzaWR1ICQ2JCJdfQ=="
  },
  {
   "id": "67d",
   "ex": 67,
   "ap": "d",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(9-x^2):(3-x)$",
   "opcions": [
    "$\\text{quocient: }2x+3\\text{; residu: }0$",
    "$\\text{quocient: }-x-3\\text{; residu: }0$",
    "$\\text{quocient: }x+3\\text{; residu: }0$",
    "$\\text{quocient: }x+4\\text{; residu: }0$"
   ],
   "pistes": [
    "El divisor $3-x$ no és de la forma $x-a$ directa: reescriu-lo com $3-x=-(x-3)$.",
    "$(9-x^2):(3-x)=(x^2-9):(x-3)$ (el signe es cancel·la a numerador i denominador). Aplica Ruffini amb l'arrel $3$."
   ],
   "nota": "El divisor $3-x$ té el signe de $x$ canviat respecte a la forma habitual $x-a$: per fer-lo servir amb Ruffini cal reescriure'l primer com $-(x-3)$, dividint $9-x^2$ i $3-x$ pel mateix factor $-1$ (el quocient de la divisió no canvia).",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB0ZXJtZSBkZSBncmF1ICQxJCBkZWwgcXVvY2llbnQgbm8gw6lzIGNvcnJlY3RlOiByZXZpc2EgbGEgdGF1bGEgZGUgUnVmZmluaSBwYXMgYSBwYXMuIiwgIkVsIGRpdmlzb3Igw6lzICQzLXg9LSh4LTMpJDogY2FsIGFwbGljYXIgUnVmZmluaSBhbWIgbCdhcnJlbCAkMyQgc29icmUgJHheMi05JCAobCdvcG9zYXQgZGVsIGRpdmlkZW5kKSBpIGRlc3Byw6lzIHRvcm5hciBhIGNhbnZpYXIgZWwgc2lnbmUgZGVsIHF1b2NpZW50LiBUJ2hhcyBkZWl4YXQgYXF1ZXN0IHNlZ29uIGNhbnZpIGRlIHNpZ25lLiIsICIiLCAiSGFzIGFwbGljYXQgUnVmZmluaSBhbWIgbCdhcnJlbCAkLTMkIGVuIGxsb2MgZGUgJDMkOiBlbCBkaXZpc29yICQzLXgkIGVxdWl2YWwgYSAkLSh4LTMpJCwgYW1iIGFycmVsICQzJC4iXSwgImVyciI6IFsiUlVGRklOSV9QQVNfTUFMIiwgIkZBQ1RPUl9DT01VX1NJR05FIiwgIiIsICJSVUZGSU5JX1NJR05FX0FSUkVMIl0sICJyZXMiOiBbIiQoOS14XjIpOigzLXgpPSh4XjItOSk6KHgtMykkLCBpIHBlciBSdWZmaW5pIGFtYiBhcnJlbCAkMyQgc3VydCBxdW9jaWVudCAkeCszJCBpIHJlc2lkdSAkMCQiXX0="
  },
  {
   "id": "67e",
   "ex": 67,
   "ap": "e",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(x^3-2x+6):(2x-2)$",
   "opcions": [
    "$\\text{quocient: }x^{2}+x-1\\text{; residu: }5$",
    "$\\text{quocient: }-x^{2}-x+1\\text{; residu: }5$",
    "$\\text{quocient: }\\dfrac{1}{2}x^{2}+\\dfrac{1}{2}x-\\dfrac{1}{2}\\text{; residu: }-5$",
    "$\\text{quocient: }\\dfrac{1}{2}x^{2}+\\dfrac{1}{2}x-\\dfrac{1}{2}\\text{; residu: }5$"
   ],
   "pistes": [
    "El divisor $2x-2=2(x-1)$ no té coeficient líder $1$: treu-ne el factor $2$ abans d'aplicar Ruffini.",
    "Aplica Ruffini a $(x^3-2x+6):(x-1)$ amb arrel $1$, i divideix després el quocient obtingut entre $2$ (el residu no canvia)."
   ],
   "nota": "El divisor $2x-2$ té coeficient líder $2$, no $1$: la regla de Ruffini \"pura\" només s'aplica directament a divisors $x-a$. Es resol traient-ne el factor comú, $2x-2=2(x-1)$, aplicant Ruffini amb $(x-1)$, i dividint el quocient resultant entre $2$ (el residu es manté igual).",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBSdWZmaW5pIGFtYiBsJ2FycmVsICQxJCAoZGUgJHgtMSQpIHBlcsOyIHNlbnNlIHRlbmlyIGVuIGNvbXB0ZSBxdWUgZWwgZGl2aXNvciDDqXMgJDJ4LTI9Mih4LTEpJCwgbm8gJHgtMSQ6IGVsIHF1b2NpZW50IGZpbmFsIHMnaGEgZGUgZGl2aWRpciBwZXIgJDIkLiIsICJIYXMgYXBsaWNhdCBSdWZmaW5pIGFtYiBsJ2FycmVsICQtMSQgZW4gbGxvYyBkZSAkMSQ6IGVsIGZhY3RvciDDqXMgJCh4LTEpJCwgbm8gJCh4KzEpJC4iLCAiRWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiIsICIiXSwgImVyciI6IFsiUlVGRklOSV9ESVZJU09SX05PX01PTklDIiwgIlJVRkZJTklfU0lHTkVfQVJSRUwiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiIl0sICJyZXMiOiBbIiQoeF4zLTJ4KzYpOih4LTEpJCBwZXIgUnVmZmluaSBkb25hIHF1b2NpZW50ICR4XnsyfSt4LTEkIGkgcmVzaWR1ICQ1JDsgY29tIHF1ZSBlbCBkaXZpc29yIHJlYWwgw6lzIGVsIGRvYmxlLCAkMngtMiQsIGVsIHF1b2NpZW50IGZpbmFsIGVzIGRpdmlkZWl4IGVudHJlICQyJDogJFxcZGZyYWN7MX17Mn14XnsyfStcXGRmcmFjezF9ezJ9eC1cXGRmcmFjezF9ezJ9JCwgcmVzaWR1ICQ1JCJdfQ=="
  },
  {
   "id": "67f",
   "ex": 67,
   "ap": "f",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Fes les divisions següents mitjançant la regla de Ruffini.",
   "enunciat": "$(-x^4+3x^2-x+1):(3x+6)$",
   "opcions": [
    "$\\text{quocient: }-x^{3}+2x^{2}-x+1\\text{; residu: }-1$",
    "$\\text{quocient: }x^{3}-2x^{2}+x-1\\text{; residu: }-1$",
    "$\\text{quocient: }-\\dfrac{1}{3}x^{3}+\\dfrac{2}{3}x^{2}-\\dfrac{1}{3}x+\\dfrac{1}{3}\\text{; residu: }-1$",
    "$\\text{quocient: }-\\dfrac{1}{3}x^{3}+\\dfrac{2}{3}x^{2}-\\dfrac{1}{3}x+\\dfrac{1}{3}\\text{; residu: }1$"
   ],
   "pistes": [
    "El divisor $3x+6=3(x+2)$ no té coeficient líder $1$: treu-ne el factor $3$ abans d'aplicar Ruffini.",
    "Aplica Ruffini amb arrel $-2$ i divideix després el quocient entre $3$ (el residu no canvia)."
   ],
   "nota": "Igual que a l'apartat e), el divisor $3x+6$ té coeficient líder $3$: es treu el factor comú, s'aplica Ruffini amb $(x+2)$, i el quocient final es divideix entre $3$.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBSdWZmaW5pIGFtYiBsJ2FycmVsICQtMiQgKGRlICR4KzIkKSBwZXLDsiBlbCBkaXZpc29yIMOpcyAkM3grNj0zKHgrMikkLCBubyAkeCsyJDogZWwgcXVvY2llbnQgZmluYWwgcydoYSBkZSBkaXZpZGlyIHBlciAkMyQuIiwgIkhhcyBhcGxpY2F0IFJ1ZmZpbmkgYW1iIGwnYXJyZWwgJDIkIGVuIGxsb2MgZGUgJC0yJDogZWwgZmFjdG9yIMOpcyAkKHgrMikkLCBubyAkKHgtMikkLiIsICIiLCAiRWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiJdLCAiZXJyIjogWyJSVUZGSU5JX0RJVklTT1JfTk9fTU9OSUMiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiJCgteF40KzN4XjIteCsxKTooeCsyKSQgcGVyIFJ1ZmZpbmkgZG9uYSBxdW9jaWVudCAkLXheezN9KzJ4XnsyfS14KzEkIGkgcmVzaWR1ICQtMSQ7IGRpdmlkaXQgZWwgcXVvY2llbnQgZW50cmUgJDMkIChkaXZpc29yIHJlYWwgJDN4KzYkKTogJC1cXGRmcmFjezF9ezN9eF57M30rXFxkZnJhY3syfXszfXheezJ9LVxcZGZyYWN7MX17M314K1xcZGZyYWN7MX17M30kLCByZXNpZHUgJC0xJCJdfQ=="
  },
  {
   "id": "68a",
   "ex": 68,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Calcula el quocient i el residu de les divisions de polinomis següents.",
   "enunciat": "$(7x^4-2x+x^3):(x-3)$",
   "opcions": [
    "$\\text{quocient: }7x^{3}+22x^{2}+66x+196\\text{; residu: }588$",
    "$\\text{quocient: }7x^{3}+22x^{2}+66x+196\\text{; residu: }-588$",
    "$\\text{quocient: }7x^{3}+22x^{2}+65x+196\\text{; residu: }588$",
    "$\\text{quocient: }7x^{3}-20x^{2}+60x-182\\text{; residu: }546$"
   ],
   "pistes": [
    "Ordena primer el dividend: $x^4$, $x^3$, $x^2$ (que no hi surt, coeficient $0$), $x$ i terme independent.",
    "Aplica Ruffini amb l'arrel $3$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiIsICJSZXZpc2EgZWwgdGVybWUgZGUgZ3JhdSAkMSQgZGVsIHF1b2NpZW50LiIsICJTaSBlbCBkaXZpc29yIMOpcyAkeC0zJCwgbCdhcnJlbCBwZXIgUnVmZmluaSDDqXMgJDMkLCBubyAkLTMkLiJdLCAiZXJyIjogWyIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiVEVSTUVfT0JMSURBVF9PUEVSQUNJTyIsICJSVUZGSU5JX1NJR05FX0FSUkVMIl0sICJyZXMiOiBbIlF1b2NpZW50ICQ3eF57M30rMjJ4XnsyfSs2NngrMTk2JCBpIHJlc2lkdSAkNTg4JCJdfQ=="
  },
  {
   "id": "68b",
   "ex": 68,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Calcula el quocient i el residu de les divisions de polinomis següents.",
   "enunciat": "$(-3-x^5):(x+2)$",
   "opcions": [
    "$\\text{quocient: }-x^{4}+3x^{3}-4x^{2}+8x-16\\text{; residu: }29$",
    "$\\text{quocient: }-x^{4}+2x^{3}-4x^{2}+8x-16\\text{; residu: }29$",
    "$\\text{quocient: }-x^{4}-2x^{3}-4x^{2}-8x-16\\text{; residu: }-35$",
    "$\\text{quocient: }-x^{4}+2x^{3}-4x^{2}+8x-16\\text{; residu: }-29$"
   ],
   "pistes": [
    "El dividend $-3-x^5$ té molts coeficients $0$ (no hi ha termes en $x^4$, $x^3$, $x^2$, $x$): no te'ls saltis a la taula.",
    "Aplica Ruffini amb l'arrel $-2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBxdW9jaWVudCBubyDDqXMgY29ycmVjdGU6IHJldmlzYSBlbCB0ZXJtZSBkZSBncmF1ICQzJC4iLCAiIiwgIlNpIGVsIGRpdmlzb3Igw6lzICR4KzIkLCBsJ2FycmVsIHBlciBSdWZmaW5pIMOpcyAkLTIkLCBubyAkMiQuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdC4iXSwgImVyciI6IFsiUlVGRklOSV9RVU9DSUVOVF9HUkFVIiwgIiIsICJSVUZGSU5JX1NJR05FX0FSUkVMIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIl0sICJyZXMiOiBbIlF1b2NpZW50ICQteF57NH0rMnheezN9LTR4XnsyfSs4eC0xNiQgaSByZXNpZHUgJDI5JCJdfQ=="
  },
  {
   "id": "68c",
   "ex": 68,
   "ap": "c",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Calcula el quocient i el residu de les divisions de polinomis següents.",
   "enunciat": "$(-3x^6+2x^5-x^4):(-x-1)$",
   "opcions": [
    "$\\text{quocient: }-3x^{5}+5x^{4}-6x^{3}+6x^{2}-6x+6\\text{; residu: }-6$",
    "$\\text{quocient: }3x^{5}-5x^{4}+6x^{3}-6x^{2}+6x-6\\text{; residu: }6$",
    "$\\text{quocient: }3x^{5}+x^{4}+2x^{3}+2x^{2}+2x+2\\text{; residu: }-2$",
    "$\\text{quocient: }3x^{5}-5x^{4}+6x^{3}-6x^{2}+6x-6\\text{; residu: }-6$"
   ],
   "pistes": [
    "El divisor $-x-1=-(x+1)$ no és de la forma $x-a$ directa: reescriu-lo com $-(x+1)$.",
    "Divideix $-3x^6+2x^5-x^4$ i $-x-1$ pel mateix factor $-1$: $(3x^6-2x^5+x^4):(x+1)$, i aplica Ruffini amb l'arrel $-1$."
   ],
   "nota": "El divisor $-x-1$ té el coeficient de $x$ negatiu: es reescriu com $-(x+1)$, dividint dividend i divisor pel mateix factor $-1$, i s'aplica Ruffini amb l'arrel $-1$.",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJIYXMgYXBsaWNhdCBSdWZmaW5pIGRpcmVjdGFtZW50IGFtYiBsJ2FycmVsICQtMSQgc2Vuc2UgcmVlc2NyaXVyZSBhYmFucyBlbCBkaXZpc29yICQteC0xJCBjb20gJC0oeCsxKSQ6IGNhbCBjYW52aWFyIGRlIHNpZ25lIGVsIGRpdmlkZW5kIGkgZWwgcXVvY2llbnQgZmluYWwuIiwgIkVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdC4iLCAiSGFzIGZldCBzZXJ2aXIgbCdhcnJlbCAkMSQgZW4gbGxvYyBkZSAkLTEkOiBlbCBkaXZpc29yICQteC0xJCBlcXVpdmFsIGEgJC0oeCsxKSQsIGFtYiBhcnJlbCAkLTEkLiIsICIiXSwgImVyciI6IFsiRkFDVE9SX0NPTVVfU0lHTkUiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICIiXSwgInJlcyI6IFsiJCgtM3heNisyeF41LXheNCk6KC14LTEpPSgzeF42LTJ4XjUreF40KTooeCsxKSQ7IHBlciBSdWZmaW5pIGFtYiBhcnJlbCAkLTEkOiBxdW9jaWVudCAkM3heezV9LTV4Xns0fSs2eF57M30tNnheezJ9KzZ4LTYkIGkgcmVzaWR1ICQtNiQiXX0="
  },
  {
   "id": "68d",
   "ex": 68,
   "ap": "d",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "Calcula el quocient i el residu de les divisions de polinomis següents.",
   "enunciat": "$(1+3x^3-6x^6-9x^2):(3-x)$",
   "opcions": [
    "$\\text{quocient: }6x^{5}+18x^{4}+54x^{3}+159x^{2}+487x+1458\\text{; residu: }-4373$",
    "$\\text{quocient: }-6x^{5}-18x^{4}-54x^{3}-159x^{2}-486x-1458\\text{; residu: }-4373$",
    "$\\text{quocient: }6x^{5}+18x^{4}+54x^{3}+159x^{2}+486x+1458\\text{; residu: }-4373$",
    "$\\text{quocient: }6x^{5}+18x^{4}+54x^{3}+159x^{2}+486x+1458\\text{; residu: }4373$"
   ],
   "pistes": [
    "El divisor $3-x=-(x-3)$: reescriu-lo abans d'aplicar Ruffini.",
    "$(1+3x^3-6x^6-9x^2):(3-x)=(6x^6-3x^3+9x^2-1):(x-3)$ (dividend i divisor multiplicats per $-1$). Aplica Ruffini amb l'arrel $3$."
   ],
   "nota": "Igual que a l'apartat c) de l'exercici 67, el divisor $3-x$ té el signe de $x$ canviat: cal reescriure'l com $-(x-3)$ abans d'aplicar Ruffini.",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCB0ZXJtZSBkZSBncmF1ICQxJCBkZWwgcXVvY2llbnQgbm8gw6lzIGNvcnJlY3RlOiByZXZpc2EgZWwgcGFzIGNvcnJlc3BvbmVudCBkZSBsYSB0YXVsYSBkZSBSdWZmaW5pLiIsICJFbCBkaXZpc29yICQzLXg9LSh4LTMpJDogaGFzIGRpdmlkaXQgZGlyZWN0YW1lbnQgc2Vuc2UgcmVlc2NyaXVyZSBlbCBkaXZpc29yLCBpIHQnaGFzIGRlaXhhdCBlbCBjYW52aSBkZSBzaWduZSBkZWwgcXVvY2llbnQuIiwgIiIsICJFbCByZXNpZHUgdMOpIGVsIHNpZ25lIGNhbnZpYXQuIl0sICJlcnIiOiBbIlJVRkZJTklfUEFTX01BTCIsICJGQUNUT1JfQ09NVV9TSUdORSIsICIiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiUmVlc2NyaXZpbnQgZWwgZGl2aXNvciwgJCgxKzN4XjMtNnheNi05eF4yKTooMy14KSQgZG9uYSBwZXIgUnVmZmluaSBxdW9jaWVudCAkNnheezV9KzE4eF57NH0rNTR4XnszfSsxNTl4XnsyfSs0ODZ4KzE0NTgkIGkgcmVzaWR1ICQtNDM3MyQiXX0="
  },
  {
   "id": "69a",
   "ex": 69,
   "ap": "a",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "A la taula de Ruffini següent hi manquen algunes dades (marcades amb $\\square$). Completa-la i indica el quocient i el residu de la divisió corresponent.",
   "enunciat": "Dividend $3x^{3}+4x^{2}-1$, divisor $x+1$:",
   "opcions": [
    "$\\text{quocient: }3x^{2}+4x\\text{; residu: }0$",
    "$\\text{quocient: }3x^{2}+7x+7\\text{; residu: }6$",
    "$\\text{quocient: }3x^{2}+x-1\\text{; residu: }1$",
    "$\\text{quocient: }3x^{2}+x-1\\text{; residu: }0$"
   ],
   "pistes": [
    "Baixa el primer coeficient ($3$), multiplica'l per l'arrel ($-1$) i suma el resultat al següent coeficient; repeteix fins al final.",
    "L'últim número de la fila inferior és el residu; els altres, en ordre, són els coeficients del quocient."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJBbGd1bmEgc3VtYSBpbnRlcm3DqGRpYSBkZSBsYSB0YXVsYSBubyDDqXMgY29ycmVjdGE6IHJldmlzYSBlbCB0ZXJjZXIgcGFzIChwcm9kdWN0ZSBpIHN1bWEgY29ycmVzcG9uZW50cykuIiwgIkhhcyBtdWx0aXBsaWNhdCBwZXIgJDEkIGEgY2FkYSBwYXMgZW4gbGxvYyBkZSBwZXIgJC0xJDogc2kgZWwgZGl2aXNvciDDqXMgJHgrMT14LSgtMSkkLCBsJ2FycmVsIHBlciBSdWZmaW5pIMOpcyAkLTEkLiIsICJFbCByZXNpZHUgbm8gw6lzICQxJDogbGEgZGl2aXNpw7Mgw6lzIGV4YWN0YSAocmVzaWR1ICQwJCksIGphIHF1ZSBsJ8O6bHRpbSBwYXMgZGUgbGEgdGF1bGEgZG9uYSAkLTFcXGNkb3QoLTEpKygtMSk9MCQuIiwgIiJdLCAiZXJyIjogWyJSVUZGSU5JX1BBU19NQUwiLCAiUlVGRklOSV9TSUdORV9BUlJFTCIsICJSVUZGSU5JX1JFU0lEVV9DT01fUVVPQ0lFTlQiLCAiIl0sICJyZXMiOiBbIkFtYiBhcnJlbCAkLTEkOiBxdW9jaWVudCAkM3heezJ9K3gtMSQgaSByZXNpZHUgJDAkIl19"
  },
  {
   "id": "69b",
   "ex": 69,
   "ap": "b",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "A la taula de Ruffini següent hi manquen algunes dades (marcades amb $\\square$). Completa-la i indica el quocient i el residu de la divisió corresponent.",
   "enunciat": "Dividend $4x^{3}+3x^{2}+2x+1$, arrel $\\square$ (divisor desconegut); a la fila inferior, la segona casella val $-1$:",
   "opcions": [
    "$\\square=1$; $\\text{quocient: }4x^{2}+7x+9\\text{; residu: }10$",
    "$\\square=-1$; $\\text{quocient: }4x^{2}-x+3\\text{; residu: }-2$",
    "$\\square=-1$; $\\text{quocient: }4x^{2}-x+3\\text{; residu: }2$",
    "$\\square=-1$; $\\text{quocient: }4x^{2}+x+3\\text{; residu: }-2$"
   ],
   "pistes": [
    "La segona casella de la fila inferior és $4\\cdot\\square+3$: iguala-la a $-1$ i aïlla $\\square$.",
    "Amb $\\square=-1$, completa la resta de la taula de Ruffini com sempre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJTaSAkNFxcY2RvdFxcc3F1YXJlKzM9LTEkLCBhw69sbGFudCBzdXJ0ICRcXHNxdWFyZT0tMSQsIG5vICQxJDogcmV2aXNhIGVsIHNpZ25lIGVuIHJlc29sZHJlIGwnZXF1YWNpw7MuIiwgIiIsICJFbCB2YWxvciBkZSAkXFxzcXVhcmUkIMOpcyBjb3JyZWN0ZSwgcGVyw7IgZWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiIsICJFbCB2YWxvciBkZSAkXFxzcXVhcmUkIMOpcyBjb3JyZWN0ZSwgcGVyw7IgYWxndW4gcGFzIHBvc3RlcmlvciBkZSBsYSB0YXVsYSBubyBzJ2hhIGNvbXBsZXRhdCBiw6kuIl0sICJlcnIiOiBbIlJVRkZJTklfU0lHTkVfQVJSRUwiLCAiIiwgIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfUEFTX01BTCJdLCAicmVzIjogWyJEZSAkNFxcY2RvdFxcc3F1YXJlKzM9LTEkIHN1cnQgJFxcc3F1YXJlPS0xJDsgYW1iIGFxdWVzdGEgYXJyZWwsIHF1b2NpZW50ICQ0eF57Mn0teCszJCBpIHJlc2lkdSAkLTIkIl19"
  },
  {
   "id": "69c",
   "ex": 69,
   "ap": "c",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "A la taula de Ruffini següent hi manquen algunes dades (marcades amb $\\square$). Completa-la i indica el quocient i el residu de la divisió corresponent.",
   "enunciat": "Dividend $x^{3}-x+2$, arrel $\\square$ (divisor desconegut); el residu de la divisió és $2$:",
   "opcions": [
    "$\\square=1$; $\\text{quocient: }x^{2}+x\\text{; residu: }2$",
    "$\\square=-1$; $\\text{quocient: }x^{2}-x\\text{; residu: }2$",
    "$\\square=0$; $\\text{quocient: }x^{2}-1\\text{; residu: }2$",
    "$\\square=1$; $\\text{quocient: }x^{2}+x\\text{; residu: }-2$"
   ],
   "pistes": [
    "El residu final és $\\square^3-\\square$ (arrossegant els termes de la taula): iguala'l a $2$ i resol l'equació de tercer grau.",
    "$\\square^3-\\square=0$ té tres solucions: $\\square=-1,0,1$. Descarta $\\square=0$ (divisió trivial) i tria'n una de les altres dues."
   ],
   "nota": "L'equació que determina $\\square$ té tres solucions vàlides ($-1$, $0$ i $1$); es descarta $\\square=0$ perquè donaria una divisió trivial per $x$, i s'ha triat $\\square=1$ per completar la taula, seguint el mateix criteri del solucionari font.",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiJFxcc3F1YXJlPS0xJCB0YW1iw6kgY29tcGxlaXggbCdlcXVhY2nDsyAkXFxzcXVhcmVeMy1cXHNxdWFyZT0wJCwgcGVyw7Igbm8gw6lzIGVsIHZhbG9yIHF1ZSBlcyB0cmlhIGFxdcOtIChlcyBkZXNjYXJ0YSAkXFxzcXVhcmU9MCQgcGVyIGRvbmFyIHVuYSBkaXZpc2nDsyB0cml2aWFsLCBpIGVudHJlICQxJCBpICQtMSQgZXMgcHJlbiAkXFxzcXVhcmU9MSQpLiIsICIkXFxzcXVhcmU9MCQgdGFtYsOpIGFudWzCt2xhIGwnZXF1YWNpw7MgJFxcc3F1YXJlXjMtXFxzcXVhcmU9MCQsIHBlcsOyIGRvbmFyaWEgdW5hIGRpdmlzacOzIHBlciAkeCQsIHVuIGNhcyB0cml2aWFsIHBvYyBoYWJpdHVhbCBlbiBhcXVlc3QgdGlwdXMgZCdleGVyY2ljaS4iLCAiRWwgdmFsb3IgZGUgJFxcc3F1YXJlJCDDqXMgY29ycmVjdGUsIHBlcsOyIGVsIHJlc2lkdSB0w6kgZWwgc2lnbmUgY2FudmlhdC4iXSwgImVyciI6IFsiIiwgIlJVRkZJTklfUEFTX01BTCIsICJSVUZGSU5JX1BBU19NQUwiLCAiRElWSVNJT19RVU9DSUVOVF9SRVNJRFVfQ0FOVklBVFMiXSwgInJlcyI6IFsiRGUgJFxcc3F1YXJlXjMtXFxzcXVhcmU9MCQgc3VydGVuICRcXHNxdWFyZT0tMSwwLDEkOyBkZXNjYXJ0YW50ICQwJCBpIHRyaWFudCAkXFxzcXVhcmU9MSQsIGxhIHRhdWxhIGRvbmEgcXVvY2llbnQgJHheezJ9K3gkIGkgcmVzaWR1ICQyJCJdfQ=="
  },
  {
   "id": "69d",
   "ex": 69,
   "ap": "d",
   "bloc": "divisio",
   "tipus": "A",
   "encapcalament": "A la taula de Ruffini següent hi manquen algunes dades (marcades amb $\\square$). Completa-la i indica el quocient i el residu de la divisió corresponent.",
   "enunciat": "Dividend $\\square x^3+0x^2+0x-3$, divisor $x+4$; a la fila inferior, la segona casella val $8$:",
   "opcions": [
    "$\\square=-2$; $\\text{quocient: }-2x^{2}+8x-32\\text{; residu: }-125$",
    "$\\square=-2$; $\\text{quocient: }-2x^{2}+4x-32\\text{; residu: }125$",
    "$\\square=2$; $\\text{quocient: }2x^{2}-8x+32\\text{; residu: }-131$",
    "$\\square=-2$; $\\text{quocient: }-2x^{2}+8x-32\\text{; residu: }125$"
   ],
   "pistes": [
    "La segona casella de la fila inferior és $\\square\\cdot(-4)$: iguala-la a $8$ i aïlla $\\square$.",
    "Amb $\\square=-2$, completa la resta de la taula de Ruffini com sempre."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB2YWxvciBkZSAkXFxzcXVhcmUkIMOpcyBjb3JyZWN0ZSwgcGVyw7IgZWwgcmVzaWR1IHTDqSBlbCBzaWduZSBjYW52aWF0LiIsICJFbCB2YWxvciBkZSAkXFxzcXVhcmUkIMOpcyBjb3JyZWN0ZSwgcGVyw7IgYWxndW4gcGFzIHBvc3RlcmlvciBkZSBsYSB0YXVsYSBubyBzJ2hhIGNvbXBsZXRhdCBiw6kuIiwgIlNpICRcXHNxdWFyZVxcY2RvdCgtNCk9OCQsIGHDr2xsYW50IHN1cnQgJFxcc3F1YXJlPS0yJCwgbm8gJDIkOiByZXZpc2EgZWwgc2lnbmUgZW4gcmVzb2xkcmUgbCdlcXVhY2nDsy4iLCAiIl0sICJlcnIiOiBbIkRJVklTSU9fUVVPQ0lFTlRfUkVTSURVX0NBTlZJQVRTIiwgIlJVRkZJTklfUEFTX01BTCIsICJSVUZGSU5JX1NJR05FX0FSUkVMIiwgIiJdLCAicmVzIjogWyJEZSAkXFxzcXVhcmVcXGNkb3QoLTQpPTgkIHN1cnQgJFxcc3F1YXJlPS0yJDsgYW1iIGFxdWVzdGEgYXJyZWwsIHF1b2NpZW50ICQtMnheezJ9Kzh4LTMyJCBpIHJlc2lkdSAkMTI1JCJdfQ=="
  },
  {
   "id": "70a",
   "ex": 70,
   "ap": "a",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Completa les igualtats notables següents, trobant els valors que falten (marcats amb $\\square$).",
   "enunciat": "$(2x+3)^2=\\square+12x+\\square$",
   "opcions": [
    "$4x^2$ i $9$",
    "$2x$ i $9$",
    "$4x^2$ i $3$",
    "$2x^2$ i $9$"
   ],
   "pistes": [
    "$(2x+3)^2=(2x)^2+2\\cdot2x\\cdot3+3^2$: el primer $\\square$ és $(2x)^2$ i el segon és $3^2$.",
    "Comprova que el terme del mig, $2\\cdot2x\\cdot3=12x$, coincideix amb el que ja hi ha a l'enunciat."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcHJpbWVyIHRlcm1lIGhhIGRlIHNlciBlbCBxdWFkcmF0IGRlICQyeCQsIG5vICQyeCQgc2Vuc2UgZWxldmFyIGFsIHF1YWRyYXQuIiwgIkVsIHNlZ29uIHRlcm1lIMOpcyBlbCBxdWFkcmF0IGRlICQzJCwgw6lzIGEgZGlyICQzXjI9OSQsIG5vICQzJC4iLCAiRWwgcHJpbWVyIHRlcm1lIMOpcyBlbCBxdWFkcmF0IGRlICQyeCQsIMOpcyBhIGRpciAkKDJ4KV4yPTR4XjIkLCBubyAkMnheMiQuIl0sICJlcnIiOiBbIiIsICJJR1VBTFRBVF9OT1RBQkxFX0RPQkxFX09CTElEQVQiLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiSUdVQUxUQVRfTk9UQUJMRV9ET0JMRV9PQkxJREFUIl0sICJyZXMiOiBbIiQoMngrMyleMj00eF4yKzEyeCs5JDogZWwgcHJpbWVyICRcXHNxdWFyZSQgw6lzICQ0eF4yJCBpIGVsIHNlZ29uIMOpcyAkOSQiXX0="
  },
  {
   "id": "70b",
   "ex": 70,
   "ap": "b",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Completa les igualtats notables següents, trobant els valors que falten (marcats amb $\\square$).",
   "enunciat": "$(5-3x)^2=25-\\square+\\square x^2$",
   "opcions": [
    "$15x$ i $9$",
    "$30x$ i $-9$",
    "$30x$ i $3$",
    "$30x$ i $9$"
   ],
   "pistes": [
    "$(5-3x)^2=5^2-2\\cdot5\\cdot3x+(3x)^2$: el primer $\\square$ és el doble producte i el segon és el coeficient del quadrat de $3x$.",
    "Recorda que en un quadrat d'una diferència el terme del mig és negatiu, però el terme en $x^2$ sempre és positiu."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB0ZXJtZSBkZWwgbWlnIMOpcyBlbCBET0JMRSBwcm9kdWN0ZSwgJDJcXGNkb3Q1XFxjZG90M3g9MzB4JCwgbm8gbm9tw6lzICQ1XFxjZG90M3g9MTV4JC4iLCAiRWwgdGVybWUgZW4gJHheMiQgw6lzIHNlbXByZSBwb3NpdGl1ICjDqXMgdW4gcXVhZHJhdCk6ICQoM3gpXjI9OXheMiQsIGFtYiBzaWduZSAkKyQuIiwgIkVsIGNvZWZpY2llbnQgZGUgJHheMiQgw6lzIGVsIHF1YWRyYXQgZGUgJDMkLCDDqXMgYSBkaXIgJDNeMj05JCwgbm8gJDMkLiIsICIiXSwgImVyciI6IFsiSUdVQUxUQVRfTk9UQUJMRV9ET0JMRV9PQkxJREFUIiwgIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiIl0sICJyZXMiOiBbIiQoNS0zeCleMj0yNS0zMHgrOXheMiQ6IGVsIHByaW1lciAkXFxzcXVhcmUkIMOpcyAkMzB4JCBpIGVsIHNlZ29uIMOpcyAkOSQiXX0="
  },
  {
   "id": "70c",
   "ex": 70,
   "ap": "c",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Completa les igualtats notables següents, trobant els valors que falten (marcats amb $\\square$).",
   "enunciat": "$(9+7x)\\cdot(9-7x)=\\square-\\square$",
   "opcions": [
    "$81$ i $63x$",
    "$9$ i $49x^2$",
    "$81$ i $7x^2$",
    "$81$ i $49x^2$"
   ],
   "pistes": [
    "És una suma per diferència: $(a+b)(a-b)=a^2-b^2$, amb $a=9$ i $b=7x$.",
    "$(9+7x)(9-7x)=9^2-(7x)^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbiB1bmEgc3VtYSBwZXIgZGlmZXLDqG5jaWEgbm8gcXVlZGEgY2FwIHRlcm1lIGVuICR4JCBkZSBncmF1ICQxJDogZWwgcmVzdWx0YXQgw6lzIGRpcmVjdGFtZW50IHVuYSByZXN0YSBkZSBxdWFkcmF0cy4iLCAiRWwgcHJpbWVyIHRlcm1lIMOpcyBlbCBxdWFkcmF0IGRlICQ5JCwgw6lzIGEgZGlyICQ5XjI9ODEkLCBubyAkOSQuIiwgIkVsIHNlZ29uIHRlcm1lIMOpcyBlbCBxdWFkcmF0IGRlICQ3eCQsIMOpcyBhIGRpciAkKDd4KV4yPTQ5eF4yJCwgbm8gJDd4XjIkLiIsICIiXSwgImVyciI6IFsiU1VNQV9QRVJfRElGRVJFTkNJQV9NQUwiLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiUVVBRFJBVF9JTkNPTVBMRVQiLCAiIl0sICJyZXMiOiBbIiQoOSs3eCkoOS03eCk9ODEtNDl4XjIkOiBlbCBwcmltZXIgJFxcc3F1YXJlJCDDqXMgJDgxJCBpIGVsIHNlZ29uIMOpcyAkNDl4XjIkIl19"
  },
  {
   "id": "70d",
   "ex": 70,
   "ap": "d",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Completa les igualtats notables següents, trobant els valors que falten (marcats amb $\\square$).",
   "enunciat": "$(\\square+\\square)^2=x^4+2x^3+x^2$",
   "opcions": [
    "$x^3$ i $x$",
    "$x^2$ i $x$",
    "$x$ i $x$",
    "$x^2$ i $x^2$"
   ],
   "pistes": [
    "Busca dos termes $a$ i $b$ tals que $a^2=x^4$, $b^2=x^2$, i $2ab=2x^3$.",
    "Si $a=x^2$ i $b=x$: $a^2=x^4$ ✓, $b^2=x^2$ ✓, $2ab=2x^2\\cdot x=2x^3$ ✓."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJFbCBxdWFkcmF0IGRlICR4XjMkIGphIHNlcmlhICR4XjYkLCBkZSBncmF1IG1hc3NhIGFsdCBwZXIgZW5jYWl4YXIgYW1iICR4XjQrMnheMyt4XjIkLiIsICIiLCAiQW1iICQoeCt4KV4yPSgyeCleMj00eF4yJCwgcXVlIG5vIHTDqSBuaSBncmF1ICQ0JCBuaSBncmF1ICQzJDogZWwgcHJpbWVyIHRlcm1lIGhhIGRlIHNlciBkZSBncmF1IG3DqXMgYWx0LiIsICJBbWIgJCh4XjIreF4yKV4yPSgyeF4yKV4yPTR4XjQkLCBubyBjb2luY2lkZWl4IGFtYiAkeF40JDogcmV2aXNhIGVscyBkb3MgdGVybWVzIHBlciBzZXBhcmF0LiJdLCAiZXJyIjogWyJHUkFVX1BST0RVQ1RFX01BTCIsICIiLCAiR1JBVV9QUk9EVUNURV9NQUwiLCAiUVVBRFJBVF9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJHheNCsyeF4zK3heMj0oeF4yKV4yKzJcXGNkb3QgeF4yXFxjZG90IHgreF4yPSh4XjIreCleMiQ6IGVscyBkb3MgJFxcc3F1YXJlJCBzw7NuICR4XjIkIGkgJHgkIl19"
  },
  {
   "id": "71a",
   "ex": 71,
   "ap": "a",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$x^2-16$",
   "opcions": [
    "$(x-4)^2$",
    "$(x-4)(x+4)$",
    "$(x-8)(x+8)$",
    "$(x-16)(x+16)$"
   ],
   "pistes": [
    "Comprova si l'expressió és una diferència de quadrats ($a^2-b^2$) o el quadrat d'un binomi ($a^2\\pm2ab+b^2$).",
    "Un cop identificat el patró, escriu-lo com a producte de dos factors (o el quadrat d'un binomi)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJObyDDqXMgdW4gcXVhZHJhdCBwZXJmZWN0ZSAobm8gaGkgaGEgdGVybWUgZW4gJHgkIGRlIGdyYXUgJDEkIGEgbCdleHByZXNzacOzIG9yaWdpbmFsKTogw6lzIHVuYSBkaWZlcsOobmNpYSBkZSBxdWFkcmF0cywgJHheMi00XjIkLiIsICIiLCAiRWwgc2Vnb24gbm9tYnJlIGhhIGRlIHNlciBsJ2FycmVsIHF1YWRyYWRhIGRlICQxNiQsIHF1ZSDDqXMgJDQkLCBubyAkOCQuIiwgIk5vIGVzIGZhY3Rvcml0emEgZWwgJDE2JCB0YWwgcXVhbDogY2FsIHRyb2Jhci1uZSBsJ2FycmVsIHF1YWRyYWRhLCAkNCQuIl0sICJlcnIiOiBbIlFVQURSQVRfSU5DT01QTEVUIiwgIiIsICJESUZFUkVOQ0lBX1FVQURSQVRTX01BTCIsICJESUZFUkVOQ0lBX1FVQURSQVRTX01BTCJdLCAicmVzIjogWyIkeF4yLTE2PSh4LTQpKHgrNCkkIl19"
  },
  {
   "id": "71b",
   "ex": 71,
   "ap": "b",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$x^4-36$",
   "opcions": [
    "$(x^2-6)(x^2+6)$",
    "$(x^2-36)(x^2+36)$",
    "$(x-6)(x+6)$",
    "$(x^2-6)^2$"
   ],
   "pistes": [
    "Comprova si l'expressió és una diferència de quadrats ($a^2-b^2$) o el quadrat d'un binomi ($a^2\\pm2ab+b^2$).",
    "Un cop identificat el patró, escriu-lo com a producte de dos factors (o el quadrat d'un binomi)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgc2Vnb24gbm9tYnJlIGhhIGRlIHNlciBsJ2FycmVsIHF1YWRyYWRhIGRlICQzNiQsIHF1ZSDDqXMgJDYkLCBubyAkMzYkLiIsICJFbCBwcmltZXIgdGVybWUgw6lzICR4XjQ9KHheMileMiQsIG5vICR4XjIkOiBlbCBwcmltZXIgZmFjdG9yIGhhIGRlIHBvcnRhciAkeF4yJCwgbm8gJHgkLiIsICJObyDDqXMgdW4gcXVhZHJhdCBwZXJmZWN0ZSwgc2luw7MgdW5hIGRpZmVyw6huY2lhIGRlIHF1YWRyYXRzOiBubyBoaSBoYSB0ZXJtZSBkZWwgbWlnIGEgbCdleHByZXNzacOzIG9yaWdpbmFsLiJdLCAiZXJyIjogWyIiLCAiRElGRVJFTkNJQV9RVUFEUkFUU19NQUwiLCAiR1JBVV9QUk9EVUNURV9NQUwiLCAiUVVBRFJBVF9JTkNPTVBMRVQiXSwgInJlcyI6IFsiJHheNC0zNj0oeF4yLTYpKHheMis2KSQiXX0="
  },
  {
   "id": "71c",
   "ex": 71,
   "ap": "c",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$4x^2-25$",
   "opcions": [
    "$(2x-25)(2x+25)$",
    "$(2x-5)^2$",
    "$(2x-5)(2x+5)$",
    "$(4x-25)(4x+25)$"
   ],
   "pistes": [
    "Comprova si l'expressió és una diferència de quadrats ($a^2-b^2$) o el quadrat d'un binomi ($a^2\\pm2ab+b^2$).",
    "Un cop identificat el patró, escriu-lo com a producte de dos factors (o el quadrat d'un binomi)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbCBzZWdvbiBub21icmUgaGEgZGUgc2VyIGwnYXJyZWwgcXVhZHJhZGEgZGUgJDI1JCwgcXVlIMOpcyAkNSQsIG5vICQyNSQuIiwgIk5vIMOpcyB1biBxdWFkcmF0IHBlcmZlY3RlOiBubyBoaSBoYSB0ZXJtZSBkZWwgbWlnIGEgbCdleHByZXNzacOzIG9yaWdpbmFsLCDDqXMgdW5hIGRpZmVyw6huY2lhIGRlIHF1YWRyYXRzLiIsICIiLCAiRWwgcHJpbWVyIHRlcm1lIMOpcyAkNHheMj0oMngpXjIkLCBubyAkKDR4KV4yJDogcmV2aXNhIGwnYXJyZWwgcXVhZHJhZGEgZGUgJDR4XjIkLiJdLCAiZXJyIjogWyJESUZFUkVOQ0lBX1FVQURSQVRTX01BTCIsICJRVUFEUkFUX0lOQ09NUExFVCIsICIiLCAiRElGRVJFTkNJQV9RVUFEUkFUU19NQUwiXSwgInJlcyI6IFsiJDR4XjItMjU9KDJ4LTUpKDJ4KzUpJCJdfQ=="
  },
  {
   "id": "71d",
   "ex": 71,
   "ap": "d",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$x^2-4x+4$",
   "opcions": [
    "$(x-2)^2$",
    "$(x+2)^2$",
    "$(x-4)(x+4)$",
    "$(x-2)(x+2)$"
   ],
   "pistes": [
    "Comprova si l'expressió és una diferència de quadrats ($a^2-b^2$) o el quadrat d'un binomi ($a^2\\pm2ab+b^2$).",
    "Un cop identificat el patró, escriu-lo com a producte de dos factors (o el quadrat d'un binomi)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgdGVybWUgZGVsIG1pZywgJC00eCQsIMOpcyBuZWdhdGl1OiBjb3JyZXNwb24gYSAkKHgtMileMiQsIGFtYiBzaWduZSAkLSQgZGlucyBkZWwgcGFyw6hudGVzaS4iLCAiQXF1ZXN0YSBleHByZXNzacOzIHTDqSB0ZXJtZSBkZWwgbWlnICgkLTR4JCk6IG5vIMOpcyB1bmEgZGlmZXLDqG5jaWEgZGUgcXVhZHJhdHMsIMOpcyB1biBxdWFkcmF0IHBlcmZlY3RlLiIsICJFbHMgZG9zIGZhY3RvcnMgaGFuIGRlIHNlciBpZ3VhbHMgKMOpcyB1biBxdWFkcmF0IHBlcmZlY3RlLCAkKHgtMileMiQpLCBubyB1biBkZSBzdW1hIGkgdW4gZGUgcmVzdGEuIl0sICJlcnIiOiBbIiIsICJJR1VBTFRBVF9OT1RBQkxFX1NJR05FIiwgIkdSQVVTX01BTF9BR1JVUEFUUyIsICJJR1VBTFRBVF9OT1RBQkxFX1NJR05FIl0sICJyZXMiOiBbIiR4XjItNHgrND0oeC0yKV4yJCJdfQ=="
  },
  {
   "id": "71e",
   "ex": 71,
   "ap": "e",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$16x^2-24xy+9y^2$",
   "opcions": [
    "$(4x+3y)^2$",
    "$(4x-9y)^2$",
    "$(4x-3y)(4x+3y)$",
    "$(4x-3y)^2$"
   ],
   "pistes": [
    "Comprova si l'expressió és una diferència de quadrats ($a^2-b^2$) o el quadrat d'un binomi ($a^2\\pm2ab+b^2$).",
    "Un cop identificat el patró, escriu-lo com a producte de dos factors (o el quadrat d'un binomi)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCB0ZXJtZSBkZWwgbWlnLCAkLTI0eHkkLCDDqXMgbmVnYXRpdTogY29ycmVzcG9uIGEgJCg0eC0zeSleMiQsIGFtYiBzaWduZSAkLSQgZGlucyBkZWwgcGFyw6hudGVzaS4iLCAiRWwgc2Vnb24gdGVybWUgZGVsIGJpbm9taSBoYSBkZSBzZXIgbCdhcnJlbCBxdWFkcmFkYSBkZSAkOXleMiQsIHF1ZSDDqXMgJDN5JCwgbm8gJDl5JC4iLCAiQXF1ZXN0YSBleHByZXNzacOzIHTDqSB0ZXJtZSBkZWwgbWlnICgkLTI0eHkkKTogbm8gw6lzIHVuYSBkaWZlcsOobmNpYSBkZSBxdWFkcmF0cywgw6lzIHVuIHF1YWRyYXQgcGVyZmVjdGUuIiwgIiJdLCAiZXJyIjogWyJJR1VBTFRBVF9OT1RBQkxFX1NJR05FIiwgIlFVQURSQVRfSU5DT01QTEVUIiwgIkdSQVVTX01BTF9BR1JVUEFUUyIsICIiXSwgInJlcyI6IFsiJDE2eF4yLTI0eHkrOXleMj0oNHgtM3kpXjIkIl19"
  },
  {
   "id": "71f",
   "ex": 71,
   "ap": "f",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Factoritza, reconeixent-hi una igualtat notable.",
   "enunciat": "$16x^4+24x^2+9$",
   "opcions": [
    "$(4x^2+3)^2$",
    "$(4x^2+3)(4x^2-3)$",
    "$(8x^2+3)^2$",
    "$(4x^2-3)^2$"
   ],
   "pistes": [
    "Comprova si l'expressió és una diferència de quadrats ($a^2-b^2$) o el quadrat d'un binomi ($a^2\\pm2ab+b^2$).",
    "Un cop identificat el patró, escriu-lo com a producte de dos factors (o el quadrat d'un binomi)."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiQXF1ZXN0YSBleHByZXNzacOzIHTDqSB0ZXJtZSBkZWwgbWlnICgkKzI0eF4yJCk6IG5vIMOpcyB1bmEgZGlmZXLDqG5jaWEgZGUgcXVhZHJhdHMsIMOpcyB1biBxdWFkcmF0IHBlcmZlY3RlLiIsICJFbCBwcmltZXIgdGVybWUgZGVsIGJpbm9taSBoYSBkZSBzZXIgbCdhcnJlbCBxdWFkcmFkYSBkZSAkMTZ4XjQkLCBxdWUgw6lzICQ0eF4yJCwgbm8gJDh4XjIkLiIsICJFbCB0ZXJtZSBkZWwgbWlnLCAkKzI0eF4yJCwgw6lzIHBvc2l0aXU6IGNvcnJlc3BvbiBhICQoNHheMiszKV4yJCwgYW1iIHNpZ25lICQrJCBkaW5zIGRlbCBwYXLDqG50ZXNpLiJdLCAiZXJyIjogWyIiLCAiR1JBVVNfTUFMX0FHUlVQQVRTIiwgIlFVQURSQVRfSU5DT01QTEVUIiwgIklHVUFMVEFUX05PVEFCTEVfU0lHTkUiXSwgInJlcyI6IFsiJDE2eF40KzI0eF4yKzk9KDR4XjIrMyleMiQiXX0="
  },
  {
   "id": "72a",
   "ex": 72,
   "ap": "a",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Segueix el patró $[(x+2)+3]\\cdot[(x+2)-3]=(x+2)^2-9$ per escriure el producte com una resta de quadrats, sense necessitat de desenvolupar-ho tot.",
   "enunciat": "$[(3x-y)+4]\\cdot[(3x-y)-4]$",
   "opcions": [
    "9x^2-y^2-16",
    "(3x-y)^2+16",
    "$(3x-y)^2-4$",
    "$(3x-y)^2-16$"
   ],
   "pistes": [
    "Identifica el \\\"primer terme\\\" comú als dos factors i el \\\"segon\\\" que canvia de signe: aquí és $(3x-y)$ i $4$.",
    "$[(3x-y)+4]\\cdot[(3x-y)-4]=(3x-y)^2-4^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDMsICJkaWFnIjogWyJFbCBwcmltZXIgdGVybWUgcydoYSBkZSBkZWl4YXIgY29tIGVsIHF1YWRyYXQgZGUgdG90IGVsIGJpbm9taSAkKDN4LXkpJCwgbm8gbm9tw6lzIGRlIGxhICR4JDogJCgzeC15KV4yXFxuZXEgOXheMi15XjIkLiIsICJFbiB1bmEgc3VtYSBwZXIgZGlmZXLDqG5jaWEsIGVsIHNlZ29uIHF1YWRyYXQgc2VtcHJlIHJlc3RhLCBtYWkgc3VtYTogJChhK2IpKGEtYik9YV4yLWJeMiQuIiwgIkVsIHNlZ29uIHRlcm1lIHMnaGEgZCdlbGV2YXIgYWwgcXVhZHJhdDogJDReMj0xNiQsIG5vICQ0JC4iLCAiIl0sICJlcnIiOiBbIkdSQVVTX01BTF9BR1JVUEFUUyIsICJTVU1BX1BFUl9ESUZFUkVOQ0lBX01BTCIsICJRVUFEUkFUX0lOQ09NUExFVCIsICIiXSwgInJlcyI6IFsiJFsoM3gteSkrNF1cXGNkb3RbKDN4LXkpLTRdPSgzeC15KV4yLTE2JCAoZGVzZW52b2x1cGF0IGRlbCB0b3Q6ICQ5eF4yLTZ4eSt5XjItMTYkKSJdfQ=="
  },
  {
   "id": "72b",
   "ex": 72,
   "ap": "b",
   "bloc": "notables",
   "tipus": "A",
   "encapcalament": "Segueix el patró $[(x+2)+3]\\cdot[(x+2)-3]=(x+2)^2-9$ per escriure el producte com una resta de quadrats, sense necessitat de desenvolupar-ho tot.",
   "enunciat": "$[(a+b)+c]\\cdot[(a+b)-c]$",
   "opcions": [
    "(a+b)^2+c^2",
    "(a+b)^2-c",
    "$(a+b)^2-c^2$",
    "a^2+b^2-c^2"
   ],
   "pistes": [
    "Identifica el \\\"primer terme\\\" comú i el \\\"segon\\\" que canvia de signe: aquí són $(a+b)$ i $c$.",
    "$[(a+b)+c]\\cdot[(a+b)-c]=(a+b)^2-c^2$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyJFbiB1bmEgc3VtYSBwZXIgZGlmZXLDqG5jaWEsIGVsIHNlZ29uIHF1YWRyYXQgc2VtcHJlIHJlc3RhLCBtYWkgc3VtYS4iLCAiRWwgc2Vnb24gdGVybWUgcydoYSBkJ2VsZXZhciBhbCBxdWFkcmF0OiDDqXMgJGNeMiQsIG5vICRjJC4iLCAiIiwgIkVsIHByaW1lciB0ZXJtZSBzJ2hhIGRlIGRlaXhhciBjb20gZWwgcXVhZHJhdCBkZSB0b3QgZWwgYmlub21pICQoYStiKSQsIG5vIGRlc2Vudm9sdXBhdCBuaSBzZXBhcmF0LiJdLCAiZXJyIjogWyJTVU1BX1BFUl9ESUZFUkVOQ0lBX01BTCIsICJRVUFEUkFUX0lOQ09NUExFVCIsICIiLCAiR1JBVVNfTUFMX0FHUlVQQVRTIl0sICJyZXMiOiBbIiRbKGErYikrY11cXGNkb3RbKGErYiktY109KGErYileMi1jXjIkIChkZXNlbnZvbHVwYXQgZGVsIHRvdDogJGFeMisyYWIrYl4yLWNeMiQpIl19"
  },
  {
   "id": "73a",
   "ex": 73,
   "ap": "a",
   "bloc": "factor_comu",
   "tipus": "A",
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
   "encapcalament": "Simplifica al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$7x^2-14x+7$",
   "opcions": [
    "$7(x-1)^2$",
    "$7(x+1)^2$",
    "$(7x-7)^2$",
    "$7(x-1)$"
   ],
   "pistes": [
    "Treu primer el factor comú $7$: $7x^2-14x+7=7(x^2-2x+1)$.",
    "Un cop tret el $7$, reconeix que $x^2-2x+1$ és un quadrat perfecte, $(x-1)^2$."
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
   "encapcalament": "Simplifica al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$16x^2+64x+64$",
   "opcions": [
    "$16(x-2)^2$",
    "$16(x+2)^2$",
    "$8(x+2)^2$",
    "$16(x+2)$"
   ],
   "pistes": [
    "Treu primer el factor comú $16$: $16x^2+64x+64=16(x^2+4x+4)$.",
    "Un cop tret el $16$, reconeix que $x^2+4x+4$ és un quadrat perfecte, $(x+2)^2$."
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
   "encapcalament": "Simplifica al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$x^3-2x^2+x$",
   "opcions": [
    "$x(x-1)$",
    "$(x-1)^2$",
    "$x(x+1)^2$",
    "$x(x-1)^2$"
   ],
   "pistes": [
    "Treu primer el factor comú $x$: $x^3-2x^2+x=x(x^2-2x+1)$.",
    "Un cop tret l'$x$, reconeix que $x^2-2x+1$ és un quadrat perfecte, $(x-1)^2$."
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
   "encapcalament": "Simplifica al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$18x^4-12x^2+2$",
   "opcions": [
    "$2(3x^2-1)$",
    "$2(3x^2+1)^2$",
    "$6(3x^2-1)^2$",
    "$2(3x^2-1)^2$"
   ],
   "pistes": [
    "Treu primer el factor comú $2$: $18x^4-12x^2+2=2(9x^4-6x^2+1)$.",
    "Un cop tret el $2$, reconeix que $9x^4-6x^2+1$ és un quadrat perfecte, $(3x^2-1)^2$."
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
   "encapcalament": "Simplifica al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$(2x+4)(x-2)$",
   "opcions": [
    "$2(x+2)^2$",
    "$2(x-2)(x+2)$",
    "$2x^2-8$",
    "$(x-2)(x+2)$"
   ],
   "pistes": [
    "Desenvolupa primer el producte: $(2x+4)(x-2)=2x^2-4x+4x-8=2x^2-8$.",
    "Treu factor comú $2$ i reconeix la diferència de quadrats: $2(x^2-4)=2(x-2)(x+2)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDEsICJkaWFnIjogWyJVbiBjb3AgZGVzZW52b2x1cGF0IGkgdHJldCBlbCBmYWN0b3IgJDIkLCBxdWVkYSAkeF4yLTQkLCBxdWUgw6lzIHVuYSBESUZFUsOITkNJQSBkZSBxdWFkcmF0cywgJCh4LTIpKHgrMikkLCBubyB1biBxdWFkcmF0IHBlcmZlY3RlLiIsICIiLCAiRWwgZGVzZW52b2x1cGFtZW50IMOpcyBjb3JyZWN0ZSwgcGVyw7IgZW5jYXJhIGVzIHBvdCBmYWN0b3JpdHphciBtw6lzOiAkMnheMi04PTIoeF4yLTQpPTIoeC0yKSh4KzIpJC4iLCAiVCdoYXMgZGVpeGF0IGVsIGZhY3RvciBjb23DuiAkMiQ6IGVsIGRlc2Vudm9sdXBhbWVudCBkb25hICQyeF4yLTg9Mih4XjItNCkkLCBubyAkeF4yLTQkLiJdLCAiZXJyIjogWyJESUZFUkVOQ0lBX1FVQURSQVRTX01BTCIsICIiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCJdLCAicmVzIjogWyIkKDJ4KzQpKHgtMik9MnheMi04PTIoeF4yLTQpPTIoeC0yKSh4KzIpJCJdfQ=="
  },
  {
   "id": "74f",
   "ex": 74,
   "ap": "f",
   "bloc": "factor_comu",
   "tipus": "A",
   "encapcalament": "Simplifica al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$(x-5)(x^2+5x)$",
   "opcions": [
    "$x(x-5)(x+5)$",
    "$x^3-25x$",
    "$x(x-5)^2$",
    "$(x-5)(x+5)$"
   ],
   "pistes": [
    "Desenvolupa primer el producte: $(x-5)(x^2+5x)=x^3+5x^2-5x^2-25x=x^3-25x$.",
    "Treu factor comú $x$ i reconeix la diferència de quadrats: $x(x^2-25)=x(x-5)(x+5)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgZGVzZW52b2x1cGFtZW50IMOpcyBjb3JyZWN0ZSwgcGVyw7IgZW5jYXJhIGVzIHBvdCBmYWN0b3JpdHphciBtw6lzOiAkeF4zLTI1eD14KHheMi0yNSk9eCh4LTUpKHgrNSkkLiIsICJVbiBjb3AgdHJldCBlbCBmYWN0b3IgJHgkLCBxdWVkYSAkeF4yLTI1JCwgcXVlIMOpcyB1bmEgRElGRVLDiE5DSUEgZGUgcXVhZHJhdHMsICQoeC01KSh4KzUpJCwgbm8gdW4gcXVhZHJhdCBwZXJmZWN0ZS4iLCAiVCdoYXMgZGVpeGF0IGVsIGZhY3RvciBjb23DuiAkeCQ6IGVsIGRlc2Vudm9sdXBhbWVudCBkb25hICR4XjMtMjV4PXgoeF4yLTI1KSQsIG5vICR4XjItMjUkLiJdLCAiZXJyIjogWyIiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIkRJRkVSRU5DSUFfUVVBRFJBVFNfTUFMIiwgIkZBQ1RPUl9DT01VX0lOQ09NUExFVCJdLCAicmVzIjogWyIkKHgtNSkoeF4yKzV4KT14XjMtMjV4PXgoeF4yLTI1KT14KHgtNSkoeCs1KSQiXX0="
  },
  {
   "id": "74g",
   "ex": 74,
   "ap": "g",
   "bloc": "factor_comu",
   "tipus": "A",
   "encapcalament": "Simplifica al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$(-x-7)(x-7)$",
   "opcions": [
    "$(7-x)(7+x)$",
    "$(x-7)(x+7)$",
    "$x^2-49$",
    "$-(x-7)(x+7)$"
   ],
   "pistes": [
    "Treu primer el signe menys comú del primer factor: $-x-7=-(x+7)$.",
    "$(-x-7)(x-7)=-(x+7)(x-7)=-(x^2-49)=49-x^2=(7-x)(7+x)$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDAsICJkaWFnIjogWyIiLCAiRWwgcHJpbWVyIGZhY3RvciDDqXMgJC14LTc9LSh4KzcpJCwgbm8gJHgtNyQ6IGVsIHNpZ25lIGdsb2JhbCBjYW52aWEgZWwgcmVzdWx0YXQgZmluYWwuIiwgIkVsIGRlc2Vudm9sdXBhbWVudCBjb3JyZWN0ZSBkb25hICQ0OS14XjIkLCBubyAkeF4yLTQ5JDogcmV2aXNhIGVsIHNpZ25lIGdsb2JhbCBlbiB0cmV1cmUgZWwgJC0xJCBjb23DuiBkZWwgcHJpbWVyIGZhY3Rvci4iLCAiw4lzIHVuYSBmb3JtYSBlcXVpdmFsZW50IGNvcnJlY3RhIGFiYW5zIGRlIHJlb3JnYW5pdHphciBzaWduZXMsIHBlcsOyIG5vIMOpcyBsYSBtYW5lcmEgbcOpcyBzaW1wbGlmaWNhZGE6ICQtKHgtNykoeCs3KT0oNy14KSh4KzcpPSg3LXgpKDcreCkkLiJdLCAiZXJyIjogWyIiLCAiSUdVQUxUQVRfTk9UQUJMRV9TSUdORSIsICJJR1VBTFRBVF9OT1RBQkxFX1NJR05FIiwgIkZBQ1RPUl9DT01VX1NJR05FIl0sICJyZXMiOiBbIiQoLXgtNykoeC03KT0tKHgrNykoeC03KT00OS14XjI9KDcteCkoNyt4KSQiXX0="
  },
  {
   "id": "74h",
   "ex": 74,
   "ap": "h",
   "bloc": "factor_comu",
   "tipus": "A",
   "encapcalament": "Simplifica al màxim, combinant factor comú i igualtats notables quan calgui.",
   "enunciat": "$(-x^2+5)(-x^2-5)$",
   "opcions": [
    "$25-x^4$",
    "$(x^2-5)(x^2+5)$",
    "$x^4-25$",
    "$x^4+25$"
   ],
   "pistes": [
    "És una suma per diferència amb $a=-x^2$ i $b=5$: $(-x^2+5)(-x^2-5)=(-x^2)^2-5^2$.",
    "$(-x^2)^2=x^4$, així que el resultat és $x^4-25$."
   ],
   "nota": "",
   "clau": "eyJvayI6IDIsICJkaWFnIjogWyLDiXMgdW5hIHN1bWEgcGVyIGRpZmVyw6huY2lhIGFtYiAkYT0teF4yJCBpICRiPTUkOiAkYV4yLWJeMj0oLXheMileMi01XjI9eF40LTI1JCwgbm8gJDI1LXheNCQuIiwgIkFxdWVzdGEgZmFjdG9yaXR6YWNpw7MgdGFtYsOpIMOpcyB2w6BsaWRhLCBwZXLDsiBlbmNhcmEgZXMgcG90IGRlc2Vudm9sdXBhciBkZWwgdG90IGNvbSBhIGRpZmVyw6huY2lhIGRlIHF1YWRyYXRzIG51bcOocmljYTogJCh4XjItNSkoeF4yKzUpPXheNC0yNSQuIiwgIiIsICJFbiB1bmEgc3VtYSBwZXIgZGlmZXLDqG5jaWEsIGVsIHNlZ29uIHF1YWRyYXQgc2VtcHJlIHJlc3RhLCBtYWkgc3VtYS4iXSwgImVyciI6IFsiU1VNQV9QRVJfRElGRVJFTkNJQV9NQUwiLCAiRkFDVE9SX0NPTVVfSU5DT01QTEVUIiwgIiIsICJTVU1BX1BFUl9ESUZFUkVOQ0lBX01BTCJdLCAicmVzIjogWyIkKC14XjIrNSkoLXheMi01KT0oLXheMileMi01XjI9eF40LTI1JCAoZXF1aXZhbGVudCBhICQoeF4yLTUpKHheMis1KSQsIHF1ZSBubyBlcyBwb3QgZmFjdG9yaXR6YXIgbcOpcyBhbWIgZW50ZXJzKSJdfQ=="
  }
 ]
};
