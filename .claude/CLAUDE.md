# CLAUDE.md — Divyesh Learning Platform

## PROJECT OVERVIEW
React + TypeScript + Tailwind CSS learning platform.
Divyesh ka personal learning website jahan uska poora roadmap aur notes honge.

## REFERENCE FILES — PEHLE PADHO
Koi bhi kaam karne se pehle relevant docs padho:

| File | Kab Padho |
|---|---|
| `docs/notes-format.md` | Notes banane se pehle — MANDATORY |
| `docs/notes-checklist.md` | Coverage verify karne ke liye |
| `docs/teaching-guide.md` | Teaching style aur tone ke liye |
| `docs/roadmap-data.md` | Roadmap structure aur topics list ke liye |

---

## NOTES BANANE KA WORKFLOW

Jab bolo "X ke notes banao":

1. `docs/notes-format.md` padho — design system aur component list
2. `docs/notes-checklist.md` padho — kya cover karna hai
3. `src/components/notes/` ke existing components USE karo
4. SVG diagrams animated banao — ASCII/pipe diagrams FORBIDDEN
5. Output: `src/notes/[topic-slug].tsx`

### Token Saving Rule
- Naya CSS mat likho — Tailwind classes + design tokens use karo
- `src/components/notes/` components reuse karo — baar baar mat banao
- Sirf SVG content aur topic-specific data naya hoga har notes mein

---

## COMPONENT USAGE

Yeh components `src/components/notes/` mein hain — REUSE karo:

```
NoteLayout        — outer wrapper, theme toggle, header
SectionBlock      — har section ka container
MentalModel       — analogy box + diagram area
DiagramBox        — SVG diagram container
CodeBlock         — syntax highlighted code
TrapBox           — interview trap (red border)
TrapsTable        — traps table with Level column
HoodBox           — under the hood (blue border)
CompareBlock      — bad vs good side by side
StepsBlock        — numbered steps
InfoBox           — tip/warn/err/info boxes
Cheatsheet        — green cheatsheet box
QuickRecall       — final summary SVG box
ConnectedTopics   — connected topics cards
```

---

## DESIGN TOKENS — USE KARO

Colors CSS variables mein hain (`tailwind.config.ts` mein defined):
```
bg-main, bg-card, bg-visual
text-primary, text-secondary
primary, secondary, accent
visual-1, visual-2, visual-3, visual-4
highlight, interactive
```

Dark mode default. Light mode toggle with `data-theme` attribute.

Fonts:
- Heading: Poppins (700, 800)
- Body: Open Sans (400, 600)
- Code: Space Mono (400, 700)

---

## ROADMAP STRUCTURE

Phases aur topics ke liye `docs/roadmap-data.md` padho.
Roadmap data TypeScript mein `src/data/roadmap.ts` mein hai.

---

## CODE STYLE

- TypeScript strict mode
- Functional components only — no class components
- Props types hamesha define karo
- Tailwind classes — inline styles avoid karo
- SVG diagrams inline — external files nahi

---

## LANGUAGE + TONE

- Hinglish — technical terms English mein, explanation Hinglish
- Desi analogies (chai, cricket, PG, jugaad)
- Friendly, not robotic
- JS/Java se compare karo jab helpful ho

---

## WHAT NOT TO DO

- CSS files mat banao — Tailwind use karo
- Design scratch se mat likho — components reuse karo
- ASCII diagrams FORBIDDEN
- Pure white (#FFF) background FORBIDDEN — bg-main use karo
- Pure black (#000) text FORBIDDEN — text-primary use karo
- Hardcoded colors FORBIDDEN — CSS variables use karo
