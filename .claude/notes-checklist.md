# Notes Checklist — Coverage Framework

---

## CORE PHILOSOPHY

**Visual pehle. Text baad mein.**
Notes ka heart = diagrams + animations + visuals.
Text sirf support karta hai — replace nahi karta.

Depth standard:
→ Real field mein ek Python engineer ko yeh kitna jaanna chahiye?
→ OS internals, hardware = OUT OF SCOPE
→ "Concept kyun hai aur kaise kaam karta hai" = IN SCOPE

Simple topic → simple notes. Complex topic → deep notes.
Forced depth = wasted time.

---

## VISUAL MANDATE — NON-NEGOTIABLE

Koi bhi topic ho — yeh hamesha hona chahiye:
- **Mental model diagram** — animated, desi analogy ke saath
- **Quick recall SVG** — poora topic ek nazar mein
- **Bad vs Good** — jab bhi trap ya better approach ho

Topic complexity ke hisaab se add karo:
- Memory/reference diagram — jab memory behavior matter kare
- Execution trace — jab step-by-step state change ho
- Flow diagram — jab branching/decision ho
- Data structure visual — jab structure explain karna ho

Animations HAMESHA use karo — fadeIn minimum, concept-specific jahan zaroori.

**FORBIDDEN:** ASCII art, pipe diagrams, static jahan animation better ho.

---

## TOPIC COMPLEXITY → DEPTH

| Simple | Medium | Complex |
|---|---|---|
| 2-3 dimensions | 5-6 dimensions | All relevant |
| 1-2 lines internals | 1 diagram | Full animated |
| 2-3 traps | 4-5 traps | 6+ traps |
| Mental model + Recall | +Memory/flow + Trace | Har concept alag |

---

## 11 DIMENSIONS — JO RELEVANT HO USE KARO

### 1. BREADTH
- Saare syntax forms/variants?
- Optional clauses?
- Python version additions (3.8+, 3.10+)?
- Related builtins?
→ *Diagram: variants overview SVG*

### 2. DEPTH PER VARIANT
- Exact syntax
- Kya karta hai
- Kab use / kab nahi
- Return value / side effects (agar non-obvious)
→ *Sirf jab genuine complexity ho*

### 3. INTERNALS
✅ Include: memory mein kya hota hai, kaunsa mechanism, surprising behavior
❌ Skip: CPython source, OS/hardware level, GIL (unless threading topic)
→ *Animated diagram MANDATORY. id()/type() se prove karo.*

### 4. EDGE CASES
Real code mein aane wale ya interview mein poochhe jaane wale:
- Empty, None, zero, negative, bool, mixed types, aliasing
→ *Code + output — self-explanatory*

### 5. TRAPS
Complexity ke hisaab se (2 to 6+):
- Code snippet → output?
- Wrong expectation → Correct output
- Kyun (1-2 lines)
- Fix
→ *Production scenario sirf jab genuinely relevant*

### 6. PERFORMANCE
Sirf jab genuine difference ho:
- list vs set lookup, string concat in loop type
→ *Skip: micro-optimizations, theoretical Big-O on simple topics*

### 7. PRODUCTION PATTERNS
Ek real example enough — FastAPI/backend jab relevant.
Forced connection mat banao.

### 8. COMPARISON
Include jab:
- JS/Java comparison confusion clear kare
- Python ke do approaches mein real trade-off
→ *Skip: trivial "JS mein bhi hota hai" type*

### 9. CONNECTIONS
Hamesha — even ek line:
- Aaya kahan se (prereq)
- Jaayega kahan (next)

### 10. INTERVIEW ANGLE
Hamesha — cheatsheet mein.
Complex pe dedicated trap section.

### 11. VISUALS AUDIT
Notes ke baad check karo:
- [ ] Mental model animated diagram hai?
- [ ] Har major concept ka diagram hai?
- [ ] Memory behavior diagram jahan relevant?
- [ ] Quick recall SVG hai?
- [ ] Bad vs Good comparison hai?
- [ ] Animations used (fadeIn min, concept-specific)?

*Agar "optional lag raha hai" → add karo. Visual > text hamesha.*

---

## ANPADH TEST

Notes ke baad:

**"Kya koi banda jo Python nahi jaanta — sirf diagrams + animations dekh ke
concept samajh sakta hai, bina text padhke?"**

Haan → visual layer strong hai.
Nahi → aur diagrams chahiye.

---

## HARD RULES

1. Visual pehle — text support karta hai
2. Mental model + Quick recall — har notes mein, no exception
3. Miss karna allowed nahi — doubt ho toh add karo
4. Depth topic ki complexity se — rigid rules nahi
