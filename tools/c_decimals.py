# -*- coding: utf-8 -*-
"""Bloc D — Decimals i fracció generatriu. Exercicis 26–34 del Full 1 (54 ítems)."""

from fractions import Fraction as F
from lib import (Q, D, DT, TAX, ev, tex, tria, dec_ex, per_frac, per_tex)

B = "decimals"

TAX["NO_RESTA_ANTEPERIODE"] = (
    "Al numerador cal RESTAR la part que no es repeteix: tot el nombre sense "
    "coma, menys la part anterior al període.")
TAX["NOUS_I_ZEROS"] = (
    "Al denominador van tants NOUS com xifres té el període, i tants ZEROS com "
    "xifres té l'anteperíode. Aquí ho tens intercanviat.")
TAX["TRACTAT_COM_EXACTE"] = (
    "Has posat només potències de $10$ al denominador. Això val per als decimals "
    "exactes; si hi ha període, el denominador ha de dur nous.")
TAX["TRACTAT_COM_PERIODIC"] = (
    "Has posat nous al denominador, però aquest decimal és exacte: s'acaba. "
    "El denominador ha de ser una potència de $10$.")
TAX["POTENCIA_10"] = (
    "El denominador ha de tenir tants zeros com xifres decimals té el nombre. "
    "Compta-les una altra vegada.")
TAX["PART_ENTERA_OBLIDADA"] = (
    "T'has deixat la part entera. El numerador és el nombre sencer sense la coma, "
    "no només les xifres decimals.")
TAX["NO_INVERTEIX"] = (
    "Per dividir fraccions es multiplica la primera per la INVERSA de la segona.")
TAX["PERIODE_MAL_IDENTIFICAT"] = (
    "Revisa quines xifres es repeteixen indefinidament (el període) i quines "
    "apareixen un sol cop després de la coma (l'anteperíode).")

# =============================================================== Exercici 26
E26 = ("Tria el nombre decimal que compleix la condició. Recorda: el PERÍODE és "
       "el grup de xifres que es repeteix; l'ANTEPERÍODE, les que hi ha entre la "
       "coma i el període.")

_p26 = [
    ("26a", "a", "Periòdic pur de període $5$.", r"$3{,}\overline{5}$",
     [(r"$3{,}4\overline{5}$", "PERIODE_MAL_IDENTIFICAT",
       "Aquest és periòdic MIXT: té un $4$ d'anteperíode entre la coma i el període."),
      (r"$3{,}5$", "TRACTAT_COM_EXACTE",
       "Aquest decimal és exacte: s'acaba i no repeteix res."),
      (r"$3{,}55$", "TRACTAT_COM_EXACTE",
       "Repetir una xifra dos cops no és tenir període: el període es repeteix sense fi.")]),
    ("26b", "b", "Exacte amb tres xifres decimals.", r"$2{,}375$",
     [(r"$2{,}37$", "POTENCIA_10", "Aquest només té dues xifres decimals."),
      (r"$2{,}3\overline{7}$", "TRACTAT_COM_PERIODIC",
       "Aquest no és exacte: té període, o sigui infinites xifres decimals."),
      (r"$2{,}\overline{375}$", "TRACTAT_COM_PERIODIC",
       "El període fa que el nombre no s'acabi mai: no és exacte.")]),
    ("26c", "c", "Periòdic mixt d'anteperíode $28$.", r"$0{,}28\overline{3}$",
     [(r"$0{,}3\overline{28}$", "PERIODE_MAL_IDENTIFICAT",
       "Aquí el $28$ és el període, no l'anteperíode: l'anteperíode és el $3$."),
      (r"$0{,}\overline{28}$", "PERIODE_MAL_IDENTIFICAT",
       "Aquest és periòdic PUR: no té anteperíode."),
      (r"$0{,}283$", "TRACTAT_COM_EXACTE", "Aquest és exacte: no té període.")]),
    ("26d", "d", "Periòdic pur amb període de $4$ xifres.", r"$1{,}\overline{2345}$",
     [(r"$1{,}2\overline{345}$", "PERIODE_MAL_IDENTIFICAT",
       "És mixt i el període només té $3$ xifres."),
      (r"$1{,}\overline{234}$", "PERIODE_MAL_IDENTIFICAT",
       "El període té $3$ xifres, no $4$."),
      (r"$1{,}2345$", "TRACTAT_COM_EXACTE", "Aquest és exacte.")]),
    ("26e", "e", "Periòdic mixt amb període $37$.", r"$0{,}5\overline{37}$",
     [(r"$0{,}37\overline{5}$", "PERIODE_MAL_IDENTIFICAT",
       "Aquí el $37$ fa d'anteperíode i el període és el $5$: just al revés."),
      (r"$0{,}\overline{37}$", "PERIODE_MAL_IDENTIFICAT",
       "Aquest és pur: perquè sigui mixt cal alguna xifra abans del període."),
      (r"$0{,}537$", "TRACTAT_COM_EXACTE", "Aquest és exacte.")]),
    ("26f", "f", "Exacte amb part entera $2$.", r"$2{,}75$",
     [(r"$0{,}2$", "PART_ENTERA_OBLIDADA",
       "La part entera d'aquest nombre és $0$; el $2$ és una xifra decimal."),
      (r"$2{,}\overline{7}$", "TRACTAT_COM_PERIODIC", "Aquest no és exacte."),
      (r"$22{,}5$", "PART_ENTERA_OBLIDADA", "La part entera d'aquest nombre és $22$.")]),
]
for qid, ap, cond, ok, ds in _p26:
    Q(qid, 26, ap, B, "B", cond, ok,
      [D(t, e, f) for t, e, f in ds],
      ["Mira on comença la barra del període: tot el que hi ha entre la coma i "
       "la barra és l'anteperíode.",
       "Un decimal exacte s'acaba; un de periòdic no s'acaba mai."],
      ["Un decimal periòdic PUR té el període just després de la coma.",
       "Un de MIXT té alguna xifra (l'anteperíode) entre la coma i el període.",
       "Un decimal EXACTE té un nombre finit de xifres decimals.",
       "La resposta que compleix la condició és " + ok + "."],
      ex_text=E26,
      nota="L'exercici original demana escriure'n un: aquí se'n proposen quatre "
           "i n'has de reconèixer el que compleix la condició.")

# =============================================================== Exercici 27
E27 = "Troba la fracció generatriu."


def item_exacte(qid, ap, txt, ent, decs, ex=27, ex_text=None):
    """Generatriu d'un decimal exacte. Tot es calcula a partir de les xifres."""
    s = ("%s,%s" % (ent, decs)) if decs else str(ent)
    c = dec_ex(s)
    nd = len(decs)
    cands = [
        DT(F(int(str(ent) + decs), 10 ** (nd + 1)), "POTENCIA_10",
           "Hi ha un zero de més al denominador."),
        DT(F(int(str(ent) + decs), int("9" * nd)) if nd else F(int(ent), 9),
           "TRACTAT_COM_PERIODIC", ""),
        DT(F(int(decs or 0), 10 ** nd) if nd else F(0, 1), "PART_ENTERA_OBLIDADA", ""),
        DT(F(int(str(ent) + decs), 10 ** max(nd - 1, 0)), "POTENCIA_10",
           "Hi falta un zero al denominador."),
    ]
    Q(qid, ex, ap, B, "A", "$%s{,}%s$" % (ent, decs) if decs else "$%s$" % ent,
      c, tria(c, cands),
      ["El numerador és el nombre sense la coma; el denominador, un $1$ seguit "
       "de tants zeros com xifres decimals hi ha.",
       "No t'oblidis de simplificar la fracció al final."],
      [r"$%s{,}%s = \dfrac{%d}{%d}$" % (ent, decs, int(str(ent) + decs), 10 ** nd),
       r"Simplificant: $%s$" % tex(c)],
      ex_text=ex_text or E27)


item_exacte("27a", "a", None, 0, "2")
item_exacte("27b", "b", None, 5, "25")
item_exacte("27c", "c", None, 95, "7")
item_exacte("27d", "d", None, 8, "0002")
item_exacte("27e", "e", None, 0, "01")
item_exacte("27f", "f", None, 37, "875")
item_exacte("27g", "g", None, 342, "12")
item_exacte("27h", "h", None, 0, "000003")

# =============================================================== Exercici 28
E28 = "Calcula la fracció generatriu dels nombres decimals periòdics següents."


def item_periodic(qid, ap, ent, ante, per, ex=28, ex_text=None, nota=""):
    """Generatriu d'un decimal periòdic. Els distractors surten de les
    variants clàssiques de la fórmula."""
    ent, ante, per = str(ent), str(ante), str(per)
    c = per_frac(ent, ante, per)
    tot = int(ent + ante + per)
    cap = int(ent + ante)
    den = int("9" * len(per) + "0" * len(ante))
    cands = [
        DT(F(tot, den), "NO_RESTA_ANTEPERIODE", ""),
        DT(F(tot - cap, int("9" * len(ante) + "0" * len(per)))
           if ante else F(tot - cap, 10 ** len(per)),
           "NOUS_I_ZEROS" if ante else "TRACTAT_COM_EXACTE", ""),
        DT(F(tot, 10 ** (len(ante) + len(per))), "TRACTAT_COM_EXACTE", ""),
        DT(F(tot - cap, int("9" * (len(per) + 1) + "0" * len(ante))), "NOUS_I_ZEROS",
           "Has posat un nou de més."),
        DT(F(int(ante + per) - int(ante or 0), den), "PART_ENTERA_OBLIDADA", ""),
        DT(F(tot - cap, den * 10), "POTENCIA_10",
           "Hi ha un zero de més al denominador."),
        DT(F(den, tot - cap), "INVERTIDA",
           "Has posat el denominador a dalt i el numerador a baix."),
    ]
    fmt = per_tex(ent, ante, per)
    passos = [
        r"Nombre sencer sense coma: $%d$. Part anterior al període: $%d$." % (tot, cap),
        r"Denominador: $%d$ nou%s i $%d$ zero%s $\rightarrow %d$" % (
            len(per), "s" if len(per) != 1 else "", len(ante),
            "s" if len(ante) != 1 else "", den),
        r"$%s = \dfrac{%d - %d}{%d} = \dfrac{%d}{%d}$" % (fmt, tot, cap, den, tot - cap, den),
    ]
    if F(tot - cap, den) != F(tot - cap, den).limit_denominator(10 ** 12) or True:
        passos.append(r"Simplificant: $%s$" % tex(c))
    Q(qid, ex, ap, B, "A", "$%s$" % fmt, c, tria(c, cands),
      ["Numerador: tot el nombre sense la coma MENYS la part que no es repeteix.",
       "Denominador: un nou per cada xifra del període i un zero per cada xifra "
       "de l'anteperíode."],
      passos, ex_text=ex_text or E28, nota=nota)


item_periodic("28a", "a", 3, "", "5")
item_periodic("28b", "b", 5, "9", "02")
item_periodic("28c", "c", 12, "9", "9",
              nota="Fixa't en el resultat: $12{,}9\\overline{9}$ és exactament $13$.")
item_periodic("28d", "d", 2, "3", "7")
item_periodic("28e", "e", 0, "015", "7")
item_periodic("28f", "f", 42, "00", "2")
item_periodic("28g", "g", 42, "5", "8")
item_periodic("28h", "h", 0, "", "8")
item_periodic("28i", "i", 1, "", "256")
item_periodic("28j", "j", 10, "5", "23")
item_periodic("28k", "k", 0, "000", "97")
item_periodic("28l", "l", 3, "2", "572")

# =============================================================== Exercici 29
E29 = "Indica de quin tipus de decimal es tracta i calcula'n la fracció generatriu."


def item_tipus(qid, ap, mostra, tipus, ent, ante, per, exacte=False, nota=""):
    """Ítem que combina classificació + generatriu en una sola resposta."""
    if exacte:
        c = dec_ex("%s,%s" % (ent, ante)) if ante else F(int(ent), 1)
        nd = len(ante)
        tot = int(str(ent) + ante)
        correcta = r"%s; $%s$" % (tipus, tex(c))
        ds = [
            D(r"Periòdic pur; $%s$" % tex(F(tot - int(ent), int("9" * nd or "1"))),
              "TRACTAT_COM_PERIODIC", TAX["TRACTAT_COM_PERIODIC"]),
            D(r"Periòdic mixt; $%s$" % tex(F(tot - int(str(ent) + ante[:-1] or ent),
                                             int("9" + "0" * (nd - 1)) if nd else 9)),
              "TRACTAT_COM_PERIODIC", TAX["TRACTAT_COM_PERIODIC"]),
            D(r"%s; $%s$" % (tipus, tex(F(tot, 10 ** (nd + 1)))), "POTENCIA_10",
              TAX["POTENCIA_10"]),
        ]
        passos = [r"Les xifres decimals s'acaben: és un decimal EXACTE.",
                  r"$\dfrac{%d}{10^{%d}} = %s$" % (tot, nd, tex(c))]
    else:
        c = per_frac(ent, ante, per)
        tot = int(str(ent) + ante + per)
        cap = int(str(ent) + ante)
        den = int("9" * len(per) + "0" * len(ante))
        correcta = r"%s; $%s$" % (tipus, tex(c))
        altre = "Periòdic pur" if ante else "Periòdic mixt"
        ds = [
            D(r"%s; $%s$" % (tipus, tex(F(tot, den))), "NO_RESTA_ANTEPERIODE",
              TAX["NO_RESTA_ANTEPERIODE"]),
            D(r"%s; $%s$" % (altre, tex(F(tot - cap, int("9" * len(ante) + "0" * len(per))
                                          if ante else 10 ** len(per)))),
              "PERIODE_MAL_IDENTIFICAT", TAX["PERIODE_MAL_IDENTIFICAT"]),
            D(r"Exacte; $%s$" % tex(F(tot, 10 ** (len(ante) + len(per)))),
              "TRACTAT_COM_EXACTE", TAX["TRACTAT_COM_EXACTE"]),
        ]
        passos = [
            r"Les xifres no s'acaben i el període %s just després de la coma: "
            r"és %s." % ("comença" if not ante else "no comença", tipus.lower()),
            r"$\dfrac{%d - %d}{%d} = %s$" % (tot, cap, den, tex(c)),
        ]
    Q(qid, 29, ap, B, "B", mostra, correcta, ds,
      ["Primer classifica'l: s'acaben les xifres? Si no, on comença la repetició?",
       "Cada tipus té la seva fórmula: només potències de $10$ si és exacte, "
       "nous si és pur, nous i zeros si és mixt."],
      passos, ex_text=E29, nota=nota)


item_tipus("29a", "a", r"$15{,}3222\dots$", "Periòdic mixt", 15, "3", "2")
item_tipus("29b", "b", r"$15{,}323232\dots$", "Periòdic pur", 15, "", "32")
item_tipus("29c", "c", r"$15{,}233444\dots$", "Periòdic mixt", 15, "233", "4")
item_tipus("29d", "d", r"$15{,}32$", "Exacte", 15, "32", "", exacte=True)
item_tipus("29e", "e", r"$15{,}333$", "Exacte", 15, "333", "", exacte=True,
           nota="Compte: no hi ha punts suspensius, o sigui que les xifres "
                "s'acaben. És exacte, no periòdic.")
item_tipus("29f", "f", r"$15$", "Enter (decimal exacte)", 15, "", "", exacte=True)

# =============================================================== Exercici 30
E30 = "Escriu la fracció generatriu d'aquests nombres decimals."
item_exacte("30a", "a", None, 2, "25", ex=30, ex_text=E30)
item_periodic("30b", "b", 2, "", "25", ex=30, ex_text=E30)
item_periodic("30c", "c", 22, "", "5", ex=30, ex_text=E30)
item_periodic("30d", "d", 2, "2", "5", ex=30, ex_text=E30)
item_periodic("30e", "e", 0, "", "334", ex=30, ex_text=E30,
              nota="El full escriu $0{,}33433434\\dots$; ho llegim com a "
                   "$0{,}\\overline{334}$. Cal confirmar-ho amb l'original.")
item_periodic("30f", "f", 8, "57", "1", ex=30, ex_text=E30,
              nota="El full escriu $8{,}5711\\dots$; ho llegim com a "
                   "$8{,}57\\overline{1}$. Cal confirmar-ho amb l'original.")

# =============================================================== Exercici 31
E31 = "Opera fent servir les fraccions generatrius."


def item_opera(qid, ap, ex, mostra, a, b, op, ex_text, pistes=None):
    """Operació entre dos decimals: es converteixen a fracció i s'opera exacte.
    a i b són tuples (ent, ante, per) o (ent, decimals, None) si són exactes."""
    def gen(t):
        e, x, p = t
        return per_frac(e, x, p) if p is not None else dec_ex("%s,%s" % (e, x))

    def fmt(t):
        e, x, p = t
        return per_tex(e, x, p) if p is not None else "%s{,}%s" % (e, x)

    def mal(t):  # generatriu amb l'error de no restar l'anteperíode
        e, x, p = t
        if p is None:
            return gen(t)
        tot = int(str(e) + x + p)
        return F(tot, int("9" * len(p) + "0" * len(x)))

    def com_exacte(t):
        e, x, p = t
        return dec_ex("%s,%s" % (e, x + (p or "")))

    va, vb = gen(a), gen(b)
    ops = {"+": lambda x, y: x + y, "-": lambda x, y: x - y,
           "*": lambda x, y: x * y, "/": lambda x, y: x / y}
    c = ops[op](va, vb)
    cands = [
        DT(ops[op](com_exacte(a), com_exacte(b)), "TRACTAT_COM_EXACTE",
           "Has operat amb els decimals tallats, sense passar-los a fracció."),
        DT(ops[op](mal(a), mal(b)), "NO_RESTA_ANTEPERIODE", ""),
        DT(ops[op](mal(a), vb), "NO_RESTA_ANTEPERIODE",
           "El primer nombre no està ben convertit."),
        DT(ops[op](va, mal(b)), "NO_RESTA_ANTEPERIODE",
           "El segon nombre no està ben convertit."),
        DT(ops[op](com_exacte(a), vb), "TRACTAT_COM_EXACTE",
           "Has tallat el primer decimal en comptes de passar-lo a fracció."),
        DT(ops[op](va, com_exacte(b)), "TRACTAT_COM_EXACTE",
           "Has tallat el segon decimal en comptes de passar-lo a fracció."),
    ]
    if op == "*":
        cands.append(DT(F(va.numerator * vb.denominator,
                          va.denominator * vb.numerator), "PRODUCTE_CREUAT", ""))
    if op == "/":
        cands.append(DT(va * vb, "NO_INVERTEIX", ""))
    if op in "+-" and (va.denominator - vb.denominator if op == "-" else 1) != 0:
        cands.append(DT(F(va.numerator + vb.numerator, va.denominator + vb.denominator)
                        if op == "+" else
                        F(va.numerator - vb.numerator, va.denominator - vb.denominator),
                        "SUMA_NUMERADORS", ""))
    cands.append(DT(ops[op](vb, va) if op in "-/" else -c, "SIGNE_FINAL",
                    "Revisa l'ordre dels dos nombres."))
    Q(qid, ex, ap, B, "A", mostra, c, tria(c, cands),
      pistes or ["Passa cada decimal a fracció generatriu ABANS d'operar.",
                 r"$%s = %s$ i $%s = %s$" % (fmt(a), tex(va), fmt(b), tex(vb))],
      [r"$%s = %s$ \quad i \quad $%s = %s$" % (fmt(a), tex(va), fmt(b), tex(vb)),
       r"$%s %s %s = %s$" % (tex(va), {"*": r"\cdot", "/": ":"}.get(op, op), tex(vb), tex(c))],
      ex_text=ex_text)


item_opera("31a", "a", 31, r"$1{,}\overline{3} + 3{,}4$", (1, "", "3"), (3, "4", None), "+", E31)
item_opera("31b", "b", 31, r"$10{,}2\overline{5} - 5{,}\overline{7}$", (10, "2", "5"), (5, "", "7"), "-", E31)
item_opera("31c", "c", 31, r"$1{,}\overline{36} + 8{,}2\overline{5}$", (1, "", "36"), (8, "2", "5"), "+", E31)
item_opera("31d", "d", 31, r"$4{,}\overline{5} + 6{,}\overline{7}$", (4, "", "5"), (6, "", "7"), "+", E31)
item_opera("31e", "e", 31, r"$3{,}\overline{46} + 4{,}2\overline{95}$", (3, "", "46"), (4, "2", "95"), "+", E31)
item_opera("31f", "f", 31, r"$3{,}\overline{21} + 4{,}3\overline{12}$", (3, "", "21"), (4, "3", "12"), "+", E31)

# =============================================================== Exercici 32
E32 = "Efectua les operacions."
item_opera("32a", "a", 32, r"$1{,}25 \cdot 2{,}\overline{5}$", (1, "25", None), (2, "", "5"), "*", E32)
item_opera("32b", "b", 32, r"$0{,}0\overline{3} : 2{,}9\overline{5}$", (0, "0", "3"), (2, "9", "5"), "/", E32)
item_opera("32c", "c", 32, r"$3{,}\overline{76} \cdot 4{,}\overline{8}$", (3, "", "76"), (4, "", "8"), "*", E32)
item_opera("32d", "d", 32, r"$1{,}25 : 2{,}2\overline{5}$", (1, "25", None), (2, "2", "5"), "/", E32)

# =============================================================== Exercici 33
E33 = ("Fent servir les fraccions generatrius, comprova si les igualtats són "
       "certes o falses.")
TAX["INFINIT_MAI_ARRIBA"] = (
    "Un decimal periòdic no «s'acosta» a un valor: ÉS aquest valor. La fracció "
    "generatriu ho demostra.")


def item_cert(qid, ap, mostra, esquerra, dreta, passos, ds):
    cert = esquerra == dreta
    correcta = (r"Cert: totes dues bandes valen $%s$." % tex(esquerra)) if cert else \
               (r"Fals: l'esquerra val $%s$ i la dreta, $%s$." % (tex(esquerra), tex(dreta)))
    Q(qid, 33, ap, B, "B", mostra, correcta, [D(t, e, f) for t, e, f in ds],
      ["Passa cada decimal a fracció generatriu i compara les dues bandes.",
       r"Recorda: $\dfrac{a}{b} = \dfrac{c}{d}$ si $a\cdot d = b\cdot c$."],
      passos, ex_text=E33)


_a33 = per_frac(1, "", "9")
item_cert("33a", "a", r"$1{,}\overline{9} = 2$", _a33, F(2, 1),
          [r"$1{,}\overline{9} = \dfrac{19-1}{9} = \dfrac{18}{9} = 2$",
           r"La igualtat és certa: $1{,}\overline{9}$ i $2$ són el mateix nombre."],
          [(r"Fals: $1{,}\overline{9}$ s'acosta a $2$ però no hi arriba mai.",
            "INFINIT_MAI_ARRIBA", TAX["INFINIT_MAI_ARRIBA"]),
           (r"Fals: $1{,}\overline{9} = \dfrac{19}{9}$, que no és $2$.",
            "NO_RESTA_ANTEPERIODE", TAX["NO_RESTA_ANTEPERIODE"]),
           (r"Fals: $1{,}\overline{9} = \dfrac{19}{10}$, que no és $2$.",
            "TRACTAT_COM_EXACTE", TAX["TRACTAT_COM_EXACTE"])])

_e33b, _d33b = per_frac(1, "", "3") / 3, per_frac(0, "", "4")
item_cert("33b", "b", r"$1{,}\overline{3} : 3 = 0{,}\overline{4}$", _e33b, _d33b,
          [r"$1{,}\overline{3} = \dfrac{13-1}{9} = \dfrac{4}{3}$",
           r"$\dfrac{4}{3} : 3 = \dfrac{4}{9}$",
           r"$0{,}\overline{4} = \dfrac{4}{9}$: la igualtat és certa."],
          [(r"Fals: $\dfrac{4}{3} : 3 = \dfrac{4}{3}\cdot 3 = 4$.", "DIVISIO_INVERTIDA",
            "Dividir entre $3$ és multiplicar per $\\dfrac{1}{3}$, no per $3$."),
           (r"Fals: $1{,}\overline{3} = \dfrac{13}{9}$, i dividit entre $3$ no dóna $\dfrac{4}{9}$.",
            "NO_RESTA_ANTEPERIODE", TAX["NO_RESTA_ANTEPERIODE"]),
           (r"Fals: $1{,}3 : 3 = 0{,}4\overline{3}$, que no és $0{,}\overline{4}$.",
            "TRACTAT_COM_EXACTE", TAX["TRACTAT_COM_EXACTE"])])

_e33c = per_frac(1, "8", "9") + per_frac(0, "1", "1")
item_cert("33c", "c", r"$1{,}8\overline{9} + 0{,}1\overline{1} = 2$", _e33c, F(2, 1),
          [r"$1{,}8\overline{9} = \dfrac{189-18}{90} = \dfrac{19}{10}$",
           r"$0{,}1\overline{1} = \dfrac{11-1}{90} = \dfrac{1}{9}$",
           r"$\dfrac{19}{10} + \dfrac{1}{9} = \dfrac{171+10}{90} = \dfrac{181}{90}$",
           r"$\dfrac{181}{90} \ne 2 = \dfrac{180}{90}$: la igualtat és FALSA (per poc)."],
          [(r"Cert: $1{,}9 + 0{,}1 = 2$.", "TRACTAT_COM_EXACTE",
            "Has arrodonit els dos decimals. $1{,}8\\overline{9}$ sí que val $1{,}9$, "
            "però $0{,}1\\overline{1}$ val $\\dfrac{1}{9}$, no $0{,}1$."),
           (r"Cert: totes dues bandes valen $\dfrac{180}{90}$.", "CALCUL_FORÇAT",
            "Comprova la suma: dóna $\\dfrac{181}{90}$, no $\\dfrac{180}{90}$."),
           (r"Fals: l'esquerra val $\dfrac{20}{9}$.", "NO_RESTA_ANTEPERIODE",
            TAX["NO_RESTA_ANTEPERIODE"])])

_e33d = per_frac(0, "1", "1") - per_frac(0, "", "1")
item_cert("33d", "d", r"$0{,}1\overline{1} - 0{,}\overline{1} = 0$", _e33d, F(0, 1),
          [r"$0{,}1\overline{1} = \dfrac{11-1}{90} = \dfrac{10}{90} = \dfrac{1}{9}$",
           r"$0{,}\overline{1} = \dfrac{1}{9}$",
           r"Són el mateix nombre ($0{,}1111\dots$), o sigui que la resta és $0$: cert."],
          [(r"Fals: $0{,}1\overline{1}$ és més gran perquè té un $1$ més.",
            "PERIODE_MAL_IDENTIFICAT",
            "Totes dues escriptures donen $0{,}1111\\dots$: el mateix nombre."),
           (r"Fals: la resta val $\dfrac{1}{90}$.", "NO_RESTA_ANTEPERIODE",
            TAX["NO_RESTA_ANTEPERIODE"]),
           (r"Fals: la resta val $0{,}01$.", "TRACTAT_COM_EXACTE",
            TAX["TRACTAT_COM_EXACTE"])])

_e33e = per_frac(0, "", "3") + per_frac(0, "", "6")
item_cert("33e", "e", r"$0{,}\overline{3} + 0{,}\overline{6} = 1$", _e33e, F(1, 1),
          [r"$0{,}\overline{3} = \dfrac{3}{9}$ \quad i \quad $0{,}\overline{6} = \dfrac{6}{9}$",
           r"$\dfrac{3}{9} + \dfrac{6}{9} = \dfrac{9}{9} = 1$: cert."],
          [(r"Fals: dóna $0{,}\overline{9}$, que no arriba a $1$.",
            "INFINIT_MAI_ARRIBA", TAX["INFINIT_MAI_ARRIBA"]),
           (r"Fals: $\dfrac{3}{9} + \dfrac{6}{9} = \dfrac{9}{18}$.", "SUMA_NUMERADORS",
            TAX["SUMA_NUMERADORS"]),
           (r"Fals: dóna $0{,}9$.", "TRACTAT_COM_EXACTE", TAX["TRACTAT_COM_EXACTE"])])

# =============================================================== Exercici 34
Q("34", 34, "", B, "C",
  r"Quina és la vint-i-sisena xifra decimal de $\dfrac{128}{9999}$?",
  "1",
  [D("0", "DESPLACAMENT",
     r"El $0$ ocupa les posicions $1, 5, 9,\dots$ (les que donen residu $1$). "
     r"La $26$ dóna residu $2$."),
   D("2", "DESPLACAMENT",
     r"El $2$ ocupa les posicions que donen residu $3$ en dividir entre $4$; "
     r"$26 : 4$ dóna residu $2$."),
   D("8", "ULTIMA_XIFRA",
     r"El $8$ és l'última xifra del període: ocupa les posicions múltiples de $4$. "
     r"El $26$ no ho és.")],
  [r"Fes la divisió i mira quines xifres es repeteixen.",
   r"$\dfrac{128}{9999} = 0{,}\overline{0128}$: el període té $4$ xifres. "
   r"Divideix $26$ entre $4$ i mira el residu."],
  [r"$\dfrac{128}{9999} = 0{,}0128\,0128\,0128\dots = 0{,}\overline{0128}$",
   r"El període $0128$ té $4$ xifres, o sigui que la xifra es repeteix cada $4$ posicions.",
   r"$26 = 4\cdot 6 + 2$: la xifra $26$ és la mateixa que la $2$a del període.",
   r"La $2$a xifra de $0128$ és $\mathbf{1}$."],
  ex_text="Raona la resposta.",
  nota="Aquest exercici demana raonament: fixa't que $\\dfrac{1}{9999}$ genera "
       "sempre períodes de $4$ xifres.")
