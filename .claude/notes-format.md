# Notes Format Guide — Design System

---

## SCOPE RULE

EK NOTES FILE = EK SUB-TOPIC ONLY.

Direct notes request → seedha banao. No challenge, no clarity check.
Scope ambiguous ho toh sirf: "[Topic A] ki? Ya [Topic B] ki?"

---

## NORTH STAR — COMPACT BUT COMPLETE

Saari cheezein cover hon — concepts, pitfalls, traps, tricks,
subtleties, sub-concepts, memory model — lekin space waste na ho.

**Kam text. Zyada visual. Dense information.**
Ek achha diagram 200 words replace karta hai.

Test: "Kya koi banda sirf yeh notes padh ke confidently interview de sakta hai?"

---

## COLORS — LIGHT + DARK MODE

### Light Mode  (`data-theme="light"`)
```
--bg-main:        #F7F9FB   (soft off-white — pure white nahi)
--bg-card:        #FFFFFF
--bg-visual:      #F0F4FF

--text-primary:   #1A1A1A   (soft black — pure black nahi)
--text-secondary: #555555

--primary:        #3A7AFE   (blue — focus + trust)
--secondary:      #8B5CF6   (purple)
--accent:         #F59E0B   (amber — curiosity/attention)

--interactive:    #2563EB
--highlight:      #E0E7FF

--visual-1:       #60A5FA   (blue)
--visual-2:       #34D399   (green — progress/calm)
--visual-3:       #FBBF24   (yellow — curiosity)
--visual-4:       #F87171   (red — errors only)
```

### Dark Mode (`data-theme="dark"`)  ← DEFAULT
```
--bg-main:        #121212
--bg-card:        #1E1E1E
--bg-visual:      #1A2238

--text-primary:   #EAEAEA
--text-secondary: #B0B0B0

--primary:        #4F8CFF
--secondary:      #A78BFA
--accent:         #F59E0B

--interactive:    #3B82F6
--highlight:      #1E293B

--visual-1:       #3B82F6
--visual-2:       #22C55E
--visual-3:       #FACC15
--visual-4:       #F87171
```

### Color Psychology
- Blue → concentration, focus, trust → headings, links, primary
- Green → calm, progress → success states, good examples
- Amber/Orange → curiosity, attention → highlights, warnings (sparingly)
- Red → errors only → traps, mistakes

### Color Rules
- Pure white (#FFF) background AVOID → glare, eye strain
- Pure black (#000) text AVOID → harsh contrast
- Red (#F87171) sirf errors ke liye — overuse mat karo
- Neon colors FORBIDDEN

---

## TYPOGRAPHY

### Fonts
```
Heading: Poppins (600, 700, 800) — modern, friendly
Body:    Open Sans (400, 600)    — soft, 8+ hours readable
Code:    Space Mono (400, 700)   — monospace, clear
```

Google Fonts import:
```
Poppins:wght@600;700;800
Open+Sans:wght@400;600
Space+Mono:wght@400;700
```

Fancy fonts FORBIDDEN — learning site hai, Instagram nahi.

### Font Sizes
```
H1 (header):       32px desktop / 24px mobile
H2 (section):      22px
H3 (sub-section):  18px
Section title:     13px uppercase, letter-spacing 0.08em
Body text:         16px minimum — eye comfort
Code:              13px
Labels:            12px
Captions:          11px
```

### Line Height + Length
```
Body:      line-height 1.7
Reading:   line-height 1.85  (analogy, long text sections)
Code:      line-height 1.8
Max width: 68ch per line     (60-75 chars — brain fatigue kam)
```

---

## SPACING SYSTEM
```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
```

---

## LAYOUT RULES

### Mobile-First (MANDATORY)
- Design 375px se shuru karo
- "Mobile pe perfect nahi = design incomplete"
- Desktop se mobile convert karna FORBIDDEN

### No Overlap, No Overflow
- word-wrap: break-word hamesha
- overflow-wrap: break-word hamesha
- Absolute positioning FORBIDDEN (except controlled animations)
- Fixed height containers FORBIDDEN

### Responsive Breakpoints
```
Mobile:  default (0px+)
Tablet:  768px+
Desktop: 1024px+ → max-width 1100px centered
```

---

## ANIMATIONS

Dark mode default. Theme toggle header mein MANDATORY.
localStorage se preference save/restore karo.

### Keyframes to Use
```
fadeIn    — har section (translateY 10px → 0, opacity 0 → 1)
pulse     — important callouts (opacity 1 → 0.45 → 1)
popIn     — boxes appear (scale 0.82 → 1)
slideInL  — left se enter (translateX -18px → 0)
drawLine  — SVG arrows appear (stroke-dashoffset 500 → 0)
glow      — active states (opacity 0.3 → 1 → 0.3)
```

### Rules
- fadeIn minimum har section
- drawLine SVG arrows ke liye
- Layout shift NAHI — sirf transform/opacity animate karo
- width/height animate mat karo

---

## SVG DIAGRAM STANDARDS

### Always Responsive
```svg
<svg width="100%" viewBox="0 0 620 H" xmlns="http://www.w3.org/2000/svg">
```
Fixed px width FORBIDDEN.

### CSS Variables in SVG
```svg
<rect fill="var(--bg-card)" stroke="var(--primary)" .../>
<text fill="var(--text-primary)" .../>
```
Inline SVG mein CSS variables kaam karte hain — theme switch pe colors change honge.

### Standard Arrow Markers
```svg
<defs>
  <marker id="a-p" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
    <path d="M0,0 L0,6 L8,3 z" fill="var(--primary)"/></marker>
  <marker id="a-1" ...><path d="..." fill="var(--visual-1)"/></marker>
  <marker id="a-2" ...><path d="..." fill="var(--visual-2)"/></marker>
  <marker id="a-3" ...><path d="..." fill="var(--visual-3)"/></marker>
  <marker id="a-4" ...><path d="..." fill="var(--visual-4)"/></marker>
</defs>
```

### Diagram Types
| Type | Kab Use Karo |
|---|---|
| Memory Diagram | Variables, references, heap/stack |
| Flow Diagram | Loops, conditionals, execution paths |
| Data Structure | Lists, dicts, sets — box-and-arrow |
| Execution Trace | Step-by-step state changes |
| Comparison | Bad vs Good code |
| Concept Map | Summary, overview |

### FORBIDDEN
- ASCII art
- Pipe (|) / dash (---) text diagrams
- Static diagrams jahan animation better explain kare

---

## NOTES SECTIONS — COMPACT STRUCTURE

Topic complexity ke hisaab se sections choose karo.
Har section compact — dense info, kam text, zyada visual.

```
1.  🧠 Mental Model      — analogy (short) + animated SVG
2.  📖 Story             — 3-5 lines: problem → solution → Python choice
3.  🔬 Under the Hood    — diagram + 3-4 lines (jo diagram nahi dikhata)
4.  ⚙️  How It Works      — steps + execution flow SVG
5.  💻 Code Examples     — all variants, comments = explanation
6.  🎬 Execution Trace   — animated SVG, state changes
7.  🤔 Why This Design   — cards: reason / tradeoff / JS-Java fark
8.  ⚠️  Traps Table       — Level (B/M/S) | Mistake | Kyun | Fix
9.  🎯 Interview Traps   — trap boxes (Beginner/Mid/Senior)
10. 🔍 Edge Cases        — code + output, self-explanatory
11. 🏭 Production        — real compact example
12. 🔗 Connected Topics  — cards: aaya kahan se / jaayega kahan
13. 📋 Cheatsheet        — tight one-liner bullets
14. ⚡ Quick Recall      — ONE SVG: poora topic compressed
```

### Compact Writing Rules
- **Mental Model:** analogy max 4-5 lines. Diagram rest samjhaye.
- **Story:** max 4-5 lines. Problem → Solution. Bas.
- **Under the Hood:** diagram PEHLE. Text = sirf jo diagram nahi dikhata.
- **Code:** comments hi explanation hain. Alag paragraph nahi.
- **Traps Table:** ek line per cell — no essays.
- **Cheatsheet:** one-liners only, max 14 bullets.
- **Quick Recall:** sab compress karo — variants + rules + memory + trap hints.

---

## INTERVIEW TRAP FORMAT

```
🪤 TRAP N — Name (Level: Beginner/Mid/Senior)
❓ Output kya hoga?
[compact code snippet]
❌ Log sochte hain: X
✅ Actually: Y
🔍 Kyun: [2-3 lines max]
🔧 Fix: [corrected code]
```

---

## COMPONENT QUICK REFERENCE

React components — `src/components/notes/`:

| Component | Use For |
|---|---|
| `NoteLayout` | Outer wrapper, theme toggle, header |
| `SectionBlock` | Har section container |
| `MentalModel` | Analogy box + diagram |
| `DiagramBox` | SVG container |
| `CodeBlock` | Syntax highlighted code |
| `TrapBox` | Interview trap |
| `TrapsTable` | Traps table |
| `HoodBox` | Under the hood |
| `CompareBlock` | Bad vs Good |
| `StepsBlock` | Numbered steps |
| `InfoBox` | tip/warn/err/info |
| `Cheatsheet` | Green cheatsheet |
| `QuickRecall` | Final SVG summary |
| `ConnectedTopics` | Connected cards |

---

## PRE-SHIP CHECKLIST

✅ Theme toggle hai (dark default)
✅ Mental model diagram animated hai
✅ Quick recall SVG hai — poora topic ek nazar mein
✅ Bad vs Good comparison jahan trap ho
✅ CSS variables use hain — hardcoded colors NAHI
✅ SVGs responsive (width="100%")
✅ Mobile 375px pe scroll-free
✅ No overlapping elements
✅ Animations transform/opacity only
✅ notes-checklist.md run kiya
