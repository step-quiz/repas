# Guia d'autoria — com escriure el contingut d'un full

Els 12 fulls del lloc ja tenen banc de preguntes i els 13 fitxers LaTeX font
estan tots coberts. Aquesta guia serveix per a dos casos: **afegir un full
nou** si algun dia arriba material nou, i **entendre o refer** el contingut
d'un full existent.

És una destil·lació del que va costar descobrir escrivint els fulls que ja hi
són: coses que el codi dona per sabudes però no diu enlloc. Llegiu abans el
`HANDOVER.md` per al context general (correspondència amb el material font,
format de dades, cicle de l'alumne).

Tracteu cada fragment de codi d'aquí com una descripció del comportament
actual, no com una promesa. Abans de confiar-hi, torneu a llegir el
`tools/lib.py` i el `tools/build.py` reals.

---

## 1. Abans d'escriure cap línia

### 1.1 Localitzeu la font

Cada full ve d'un fitxer `enunciats/imN.tex` del paquet LaTeX, i normalment
d'un `enunciats/r-imN.tex` amb la resolució desenvolupada. **El número del
full no és el número del fitxer**: consulteu la taula del `HANDOVER.md` §2 o
el capdamunt de `js/inici.js`.

El solucionari, quan hi és, és una segona opinió per contrastar, no una font
per copiar. Pot portar errors: al Full 4 en tenia un d'aritmètic (exercici
64d), i al Full 9 un arrodoniment intermedi inconsistent (ítem 181b). Calculeu
cada resposta pel vostre compte primer i compareu després.

### 1.2 Compteu els ítems, no els exercicis

El nombre d'exercicis visibles no és el nombre de preguntes. Compteu els
`\item` dins dels entorns `apartats` / `apartatscols`; un exercici sense cap
d'aquests entorns compta 1:

```python
import re
text = open("im14.tex").read()
parts = re.split(r'% -{10,}\s*(\d+)', text)
exercicis = {int(parts[i]): parts[i+1] for i in range(1, len(parts), 2)}
total = 0
for num, cos in sorted(exercicis.items()):
    m = re.search(r'\\begin\{apartats(cols)?\}.*?\\end\{apartats(cols)?\}', cos, re.S)
    n = len(re.findall(r'\\item', m.group(0))) if m else 1
    total += n
    print(num, n)
print("TOTAL:", total)
```

### 1.3 Busqueu els ítems amagats

Alguns exercicis es veuen com una unitat però pedagògicament en són
diverses: una taula de Ruffini amb quatre caselles a completar són quatre
activitats, no una. Com que no fan servir `apartats`, el comptador de dalt
els veu com 1. Ha passat en com a mínim cinc fulls diferents (Full 3 ex. 59,
Full 4 ex. 69, Full 7 ex. 148, Full 11 ex. 220/221/223/228, Full 12 ex.
249/252/253/256): **compteu-hi**, no és una raresa.

Quan passa, desdobleu l'exercici en subítems `<número><lletra>` com si
tinguessin `apartats`, i **digueu-ho al docstring del vostre mòdul**: el
total real del full serà més alt que el recompte automàtic, i qui ho revisi
ha de poder entendre la diferència sense investigar.

### 1.4 Mireu com estan tractades les figures

Al paquet LaTeX actual **no hi ha cap marca de figura absent**: les mesures
de les figures estan transcrites al text de l'enunciat, i allà on la lectura
de la imatge original era incerta hi ha un comentari `% NOTA DE TRANSCRIPCIÓ`
just abans de l'exercici, amb la interpretació adoptada. El fitxer
`instruccions.md` del paquet LaTeX les detalla per exercici.

Una nota de transcripció **no és, per si sola, motiu d'exclusió**. El criteri
és si la font arriba o no a un valor numèric complet:

- Hi arriba amb una interpretació explícita i raonable → **conserveu l'ítem**
  i passeu `nota="..."` a la `Q()` explicant què s'ha assumit.
- No hi arriba (el solucionari mateix diu "pendent de confirmar la figura",
  o l'exercici demana amidar el dibuix amb un regle) → **excloeu-lo sencer**,
  l'exercici o l'apartat complet, mai a mitges. No us inventeu la mesura.

### 1.5 Llegiu un `c_<tema>.py` recent, sencer

No per sobre. Trieu-ne un dels últims —`c_probabilitat.py`,
`c_estadistica.py`, `c_geometria.py`— perquè ja porten incorporades les
solucions a problemes que us trobareu.

---

## 2. Què tocareu i què no

    tools/lib.py            motor compartit. NOMÉS s'hi afegeixen etiquetes
                            noves al final del catàleg TAX (§4.3)
    tools/build.py          s'hi afegeix UNA entrada al final del registre
                            FULLS, sense tocar-ne cap d'existent
    tools/c_<tema>.py       el fitxer nou que escriviu
    data/full<N>.js         GENERAT — mai a mà
    REVISIO-full<N>.html    GENERAT — mai a mà, però llegiu-lo a fons
    js/inici.js             una entrada nova a la taula FULLS
    js/diagnostic-dades.js  el número a FULLS_AMB_BANC, perquè els seus
                            exercicis puguin entrar a l'itinerari
    README.md, HANDOVER.md  taules de contingut i de correspondència

Res més. Si el repositori ha crescut amb coses que no són a aquesta llista,
no les toqueu si no us ho han demanat explícitament.

---

## 3. Calcular les respostes: aritmètica exacta, sempre

Cap opció —ni la correcta ni cap distractor— s'escriu com a literal endevinat.
Totes surten d'un càlcul determinista.

**Nombres racionals:** `lib.ev("(-13)*3 - (-12)*7")` passa l'expressió per
SymPy amb `rational=True` i torna un `Fraction` exacte.

**Polinomis i àlgebra:** SymPy directament (`Poly`, `expand`, `factor`, `div`,
`solve`). Val la pena un helper local `pol(*coefs)` que construeixi el
polinomi des dels coeficients de grau més alt a més baix: escriure
`pol(2, -3, 7, -2, 3, -6)` és més curt i molt més difícil d'equivocar que
teclejar l'expressió sencera.

**Successions, probabilitat, estadística:** `fractions.Fraction` normalment
n'hi ha prou. Recorreu a SymPy només quan calgui manipulació simbòlica de
veritat.

**Arrels:** si el full en va ple (geometria), no cal SymPy: amb helpers de
simplificació d'arrels numèriques n'hi ha prou. Vegeu `simplifica_arrel()` a
`c_geometria.py`.

### 3.1 Escriviu el vostre renderitzat

La sortida de `latex()` de SymPy no encaixa amb l'estil de la casa (hi posa
espais al voltant dels operadors). Escriviu una funció `<domini>_tex()` que
construeixi la cadena recorrent els coeficients: sense espais, signe sempre
explícit entre termes, coeficient 1 implícit.

**Tracteu els coeficients fraccionaris des del principi**, no com un pedaç
posterior. Si els vostres objectes poden acabar amb coeficients no enters,
el renderitzador necessita la branca `\dfrac{p}{q}` des del primer dia:
reajustar-ho quan ja hi ha 20 ítems escrits és car.

### 3.2 Fonts ambigües o mal plantejades

De tant en tant la font porta una errata, una casella indeterminada, o un
valor que dona un resultat lleig quan la resta del full és clarament de
nombres nets. El procediment establert:

1. Resoleu-ho primer tal com està escrit literalment.
2. Si el resultat és irracional, degenerat o clarament no volgut, formuleu
   una hipòtesi del que la font devia voler dir (una columna desplaçada, una
   xifra intercanviada, un signe girat) i mireu si dona un resultat net i
   coherent amb els exercicis del voltant.
3. Si la hipòtesi funciona, adopteu-la i passeu `nota="..."` a la `Q()`
   explicant exactament quina era l'ambigüitat i què heu assumit. Mai
   trieu en silenci una entre diverses respostes vàlides.
4. **Distingiu "lleig per errata" de "lleig a propòsit".** Una divisió de
   Ruffini per `ax+b` amb `a≠1` *ha* de donar un quocient fraccionari:
   l'objectiu pedagògic és que l'alumne vegi que Ruffini en cru només val
   per a divisors mònics. Això no s'arregla.
5. Afegiu els ítems amb `nota` a la taula del `README.md`.

**`nota` i `nota_interna` són dues coses diferents.** La `nota` la veu
l'alumne a `practica.html`, just sota l'enunciat: ha d'explicar-li una
decisió d'interpretació **en termes que li serveixin per resoldre
l'exercici**. La `nota_interna` només surt al `REVISIO`: hi van les
referències als fitxers de la font, els dubtes de transcripció i la feina
pendent, que a l'alumne no li diuen res i el desconcerten.

```python
nota="La figura de partida no deixa clar el diàmetre de l'arc interior; "
     "aquí es pren 6 cm, que és la meitat de l'exterior.",
nota_interna="La imatge de la font no permet determinar-lo amb seguretat; "
             "s'adopta la lectura del solucionari. Vegeu r-im8.tex."
```

`lib._valida()` atura la compilació si la `nota` visible parla d'un fitxer
`.tex`, diu «cal confirmar» o «abans de publicar»: això va sempre a
`nota_interna`. Havien arribat a producció catorze notes amb frases com
«vegeu NOTA DE TRANSCRIPCIÓ a r-im8.tex» o «convé confirmar-ho contra la
figura original abans de publicar».

---

## 4. Distractors i catàleg d'errors

### 4.1 Les quatre regles dures

`lib._valida()` s'executa a cada `Q()` i imposa:

1. **Exactament 3 distractors.**
2. **4 opcions diferents** un cop tret l'espai en blanc.
3. **Cap distractor sense text de retroacció.**
4. **Com a mínim una pista i un pas de resolució**, tots dos no buits.

La regla 2 és la que peta més sovint, i sempre pel mateix: dos distractors
construïts per camins diferents que SymPy simplifica a la mateixa forma
canònica. Vigileu especialment els **casos amb valor zero**: un distractor
fet negant la resposta correcta col·lideix amb ella sempre que la correcta
sigui 0. Executeu el mòdul tot sol després de cada exercici, no al final:
així les col·lisions surten d'una en una.

### 4.2 `D()` o `DT()`

`DT(valor, etiqueta)` fa servir el text canònic de `TAX`; `D(valor,
etiqueta, text)` el porta escrit per a aquell ítem. A la pràctica la
majoria de distractors són `D()`, perquè la retroacció guanya molt si
esmenta els números concrets de l'exercici. Afegir l'etiqueta a `TAX` val la
pena igualment, encara que cap ús acabi sent `DT()`: documenta la taxonomia
del malentès i permet agregar-lo entre fulls.

### 4.3 Etiquetes noves a `TAX`

Afegiu-les **al final** del diccionari, just abans de la clau de tancament.
No reordeneu, renombreu ni esborreu cap etiqueta existent: els
`REVISIO-fullN.html` ja generats les referencien per cadena exacta.

Agrupeu-les sota una capçalera d'una línia, `# ---- <tema> (Full <N>) ----`,
com fan les de potències, successions, polinomis, estadística i probabilitat.

### 4.4 L'etiqueta ha de dir QUIN error és, no només que n'hi ha un

L'etiqueta no és decoració: `hub.js` agrega les respostes fallades del full
per etiqueta i pinta el panell **«els errors que repeteixes»** amb el text que
`TAX` en dona. Dues conseqüències:

1. **Res de calaixos de sastre.** Si poseu la mateixa etiqueta a un distractor
   de simplificar fraccions i a un de «no es pot saber sense mesurar els
   angles», el panell li dirà a l'alumne que busqui el m.c.d. del numerador i
   el denominador en un problema de triangles. Va passar: `SIMPLIFICACIO_INCOMPLETA`
   va arribar a tenir 119 usos, i només 7 tenien res a veure amb simplificar.
   Ara està repartida, i el text del catàleg avisa de no tornar-hi.
2. **Poseu-la al `TAX` si l'etiqueta es repetirà.** Sense entrada al catàleg,
   el panell cau al diagnòstic del primer ítem del full que la faci servir —
   un text ple de números d'un exercici concret, que com a resum de cinc
   errors diferents no diu res. Per a etiquetes que només fareu servir un cop
   això no importa (mai no sortiran com a error repetit) i no cal.

Escriviu el text de `TAX` **genèric i sense números**: descriu el malentès i
què s'ha de mirar per no repetir-lo. El diagnòstic concret, amb els números de
l'exercici, va al `D()`; el genèric, al `TAX`. Compareu:

```
D()   -> "Aquesta és la semibase (la meitat del costat), no l'alçada: encara
          falta aplicar Pitàgores amb aquesta semibase i el costat."
TAX   -> "El valor que has triat és correcte, però és un pas intermedi, no el
          que et demanen. Torna a llegir la pregunta i mira quina magnitud
          has d'acabar donant: sovint només falta una operació més."
```

Un cop compilat, el `REVISIO-fullN.html` du al peu el **catàleg d'errors
utilitzats** amb el recompte de cada etiqueta. Una etiqueta amb molts usos
repartits per blocs molt diferents és el senyal que torna a ser un calaix de
sastre: obriu-la en etiquetes específiques.

---

## 4bis. Graduar el full: `dificultats()`

A dalt de cada `c_<tema>.py`, just després de l'import de `lib`, hi ha una
taula que assigna un nivell a cada exercici del full:

```python
dificultats({
      5: 1,  # descomposició factorial directa
      8: 2,  # a l'inrevés: donat el m.c.d., quin nombre encaixa
     12: 3,  # problemes amb context: cal decidir si toca m.c.d. o m.c.m.
})
```

L'escala és de tres graons i està documentada a `lib.py`:

| | | |
|---|---|---|
| **1** | directa | un sol pas: aplicar una definició o fórmula tal com s'acaba de veure, amb les dades a punt |
| **2** | encadenada | dos o tres passos, o cal triar el mètode abans de començar |
| **3** | completa | problema amb context, muntar l'expressió des d'un enunciat en paraules, barrejar conceptes, o justificar / detectar un error |

Tres graons i prou: més no els sabríem distingir de manera fiable.

**El nivell va per exercici, no per ítem.** Els apartats d'un mateix exercici
solen ser variacions de la mateixa feina, i tenir-ho en una taula permet
revisar la graduació sencera d'un full d'una ullada en lloc d'anar-la a
buscar a seixanta llocs. Si un apartat concret se surt del to del seu
exercici, passeu-li `dif=` al seu `Q()`, que té prioritat.

`lib._valida()` atura la compilació si un exercici no és a la taula: no es
pot afegir un exercici i oblidar-se de graduar-lo. Registrar dues vegades el
mateix número amb valors diferents també atura (el Full 1 el componen quatre
mòduls i la taula s'acumula entre tots).

**Com triar el número.** No hi penseu com «quant costa» sinó com «quantes
decisions ha de prendre l'alumne abans de començar a calcular»: cap (1), una
(2), o ha de construir el plantejament (3). Els blocs de problemes són tots
3 de manera natural, i els de classificar o reconèixer, tots 1; això està bé
i no cal forçar-hi varietat.

**Comproveu la graduació al `REVISIO`.** Al peu hi ha una taula «Graduació
per bloc» amb el recompte per nivell, i marca en vermell els blocs que han
quedat amb **un sol nivell**. Un bloc de problemes tot a 3 és correcte; un
bloc de mecànica tot a 2 vol dir que la taula no s'ha pensat.

Això importa perquè l'itinerari agafa **un exercici de cada nivell que hi
hagi al bloc** abans de repetir-ne cap: un bloc sense graduar li dona a
l'alumne quatre exercicis del mateix graó.

---

## 5. El parany del `mathify()`

`build.py` embolcalla una opció en `$...$` només si, després de treure una
llista fixa de macros conegudes, el que queda són xifres i signes. **La
llista no conté cap lletra.** Per tant, qualsevol opció amb una variable
(`x`, `a_n`, `d=`), o amb `\sqrt`, no s'embolcalla mai, i la validació final
falla amb `opcions amb LaTeX sense delimitar`.

Això ha mossegat tots els fulls no purament numèrics, cada vegada de nou.
No ho redescobriu: dissenyeu-ho des del principi.

- Si les respostes del vostre domini es renderitzen amb una variable o una
  arrel, feu que el renderitzador **retorni la cadena ja embolcallada amb
  `$...$`**, de manera que qualsevol `correcta=` o `D(valor, ...)` sigui
  segur automàticament.
- Tindreu punts on aquesta mateixa sortida s'ha d'incrustar dins d'una
  cadena que ja porta els seus delimitadors (una pista, un pas de resolució,
  una opció composta). Per a això, mantingueu una **segona variant que
  retorni la cadena crua**. `c_polinomis.py` les anomena `poli_tex()` i
  `poli_tex_raw()`; `c_geometria.py`, `arrel_tex()` i `arrel_tex_raw()`.
  Confondre-les dona `$$` doblats (que KaTeX no renderitza) en un sentit, o
  l'error de dalt en l'altre.
- Compileu **aviat i sovint**, no només al final: el missatge d'error llista
  els cinc primers ítems afectats, que normalment és prou per veure el patró
  i arreglar el helper una sola vegada.
- Les pistes i les resolucions **no passen per `mathify()`**: `_valida()` no
  les mira. Els heu de delimitar bé vosaltres des del primer moment.

---

## 6. Paranys d'estil que costen temps

**Dobles negatius.** Una plantilla ingènua `"x-%d" % arrel`, amb una arrel
negativa, escriu `x--2` en lloc de `x+2`. Escriviu un formatador que
bifurqui pel signe. Passa sobretot als textos de retroacció, que no passen
per cap validació, així que colen netes i només es veuen mirant el fitxer de
revisió. Un `grep '\-\-'` al `REVISIO-fullN.html` generat surt barat.

**Coeficients desordenats.** Quan la font escriu un polinomi amb els termes
fora d'ordre de grau (`x^5-x^3+x^2-x^4+3x-7`) i el reconstruïu com a llista
de coeficients a mà, és facilíssim perdre's un zero. Comproveu-ho amb
`expand(reconstruït - original) == 0`, no a ull.

**Divisors no mònics o amb el signe girat** (`2x-2`, `3-x`) no passen pel
mètode de Ruffini estàndard tal qual. Decidiu **una vegada** la convenció
(treure factor comú del coeficient principal o del signe, aplicar el mètode
al divisor mònic reduït, explicar l'ajust a la pista) i apliqueu-la a tots
els ítems que ho necessitin.

---

## 7. Revisió després de compilar

Un build net vol dir que les quatre regles de `_valida()` es compleixen. No
diu res sobre si les matemàtiques són correctes ni si la redacció s'entén.

1. **Llegiu el `REVISIO-fullN.html`**, especialment els ítems amb `nota`,
   els casos estructuralment inusuals i els que per disseny han de donar la
   mateixa resposta.
2. **Passeu el `grep` dels dobles negatius** (§6).
3. **Quadreu el catàleg d'errors:** el build informa de quantes etiquetes
   diferents s'han fet servir. Contrasteu-ho amb quantes n'heu escrit. Una
   etiqueta afegida i no usada, o una amb una errata que ha creat una clau
   nova en silenci, hi surt com a diferència.
4. **Comproveu el repartiment per bloc:**

   ```python
   import lib, importlib
   importlib.import_module("c_<tema>")
   compte = {}
   for it in lib.banc():
       compte[it["bloc"]] = compte.get(it["bloc"], 0) + 1
   print(compte, "total:", sum(compte.values()))
   ```

   Mireu que cap bloc no sigui desproporcionat: per sota d'uns 20-30 ítems
   per bloc, la pàgina del full es manté llegible. Si un tema en té molts
   més, partiu-lo en dos blocs.

5. **Recompileu TOTS els altres fulls** i comproveu que surten byte a byte
   idèntics. Si algun canvia, heu tocat alguna cosa compartida més del
   compte —gairebé sempre una col·lisió a `TAX` o una entrada veïna de
   `FULLS`. Trobeu-ho abans de lliurar res.

---

## 8. Connectar el full al lloc

**`tools/build.py`** — una entrada nova al final de `FULLS`, amb la mateixa
forma que les veïnes:

```python
13: {
    "titol": "Full 13 — <tema>",
    "subtitol": "<una frase>.",
    "moduls": ["c_<tema>"],
    "blocs": [
        ("<id_bloc>", "<Títol del bloc>", "<una frase de descripció>."),
    ],
},
```

El nombre de blocs no és fix: els fulls actuals en tenen entre 3 i 5. Seguiu
la guia de 20-30 ítems per bloc, no un número concret de blocs.

**`js/inici.js`** — una entrada nova a la taula `FULLS`, amb el `total` que
hagi reportat el compilador (que pot no coincidir amb el recompte automàtic
de la font, si heu desdoblat ítems amagats).

**`js/diagnostic-dades.js`** — el número a `FULLS_AMB_BANC`, perquè els
exercicis del full es puguin fer servir a l'itinerari. Això no el posa al
test inicial: el test té preguntes pròpies, escrites a mà a
`js/proves-inicials.js`. Si voleu que el tema nou hi entri, cal escriure-hi
una prova i mapar-la als blocs del full (`HANDOVER.md` §5.1).

**`README.md` i `HANDOVER.md`** — taula de contingut, arbre de fitxers, ítems
amb `nota`, taula de correspondència amb el material font, comandes de
recompilació.

---

## 9. Disciplina de lliurament

**Per defecte, lliureu només el delta**: el `tools/c_<tema>.py` nou, el
`data/fullN.js` i el `REVISIO-fullN.html` generats, i els diffs quirúrgics a
`lib.py`, `build.py`, `js/inici.js`, `js/diagnostic-dades.js` i la
documentació. Haver regenerat els altres fulls per comprovar regressions
(§7.5) és un **pas de verificació**, no un motiu per incloure'ls al lliurament.

Si es demana un diff contra una versió concreta, comproveu que el delta és
exactament el que creieu **abans** de lliurar-lo:

1. Reconstruïu el repositori en un directori net: la versió de partida més
   només els fitxers que lliureu. No al vostre directori de treball, que pot
   arrossegar estat intermedi.
2. Recompileu-hi tots els fulls i confirmeu que els que no són el vostre
   surten byte a byte idèntics.
3. Difeu cada fitxer que lliureu contra el seu equivalent de partida i
   confirmeu que el diff només conté el que preteníeu. Una inserció
   inesperada dins d'un fitxer compartit vol dir que alguna cosa ha tocat
   més del compte.
4. Confirmeu que cap fitxer "nou" existia ja.
5. Confirmeu la coherència interna: el `c_<tema>.py` que lliureu, passat pel
   compilador, ha de reproduir byte a byte el `data/fullN.js` i el
   `REVISIO-fullN.html` que lliureu al costat. Un font que no regenera les
   dades que l'acompanyen és un error ja enviat.

I una última cosa, que ha estat la font de més feina perduda en aquest
projecte: **abans de fusionar res, difeu-ho contra el que hi ha**. Un paquet
lliurat pot estar basat en un estat més antic del repositori i, aplicat tal
qual, fer-lo retrocedir sense que salti cap error.
