import {
  NoteLayout, SectionBlock, MentalModel, TrapBox, Cheatsheet,
  QuickRecall, ConnectedTopics, InfoBox, CodeBlock,
} from '../../components/notes'

const C = {
  if_c:   '#4F8CFF',
  elif_c: '#F59E0B',
  else_c: '#34D399',
  tern:   '#A78BFA',
  match:  '#F87171',
  muted:  '#8B949E',
  dim:    '#2D333B',
}

// ─────────────────────────────────────────────────────────
// SVG 1 — if/elif/else flow
// ─────────────────────────────────────────────────────────
function IfFlowSVG() {
  return (
    <svg viewBox="0 0 520 220" className="w-full" aria-label="if elif else flow">
      <defs>
        <style>{`
          @keyframes ifFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
          .if0{animation:ifFade .3s .0s ease both}
          .if1{animation:ifFade .3s .12s ease both}
          .if2{animation:ifFade .3s .24s ease both}
          .if3{animation:ifFade .3s .36s ease both}
          .if4{animation:ifFade .3s .48s ease both}
        `}</style>
        <marker id="ifArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.muted}/>
        </marker>
        <marker id="ifGreen" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.else_c}/>
        </marker>
        <marker id="ifBlue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.if_c}/>
        </marker>
        <marker id="ifAmb" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.elif_c}/>
        </marker>
      </defs>

      {/* if diamond */}
      <g className="if0">
        <polygon points="130,10 200,40 130,70 60,40"
          fill={C.if_c} fillOpacity=".15" stroke={C.if_c} strokeOpacity=".6" strokeWidth="1.8"/>
        <text x="130" y="35" textAnchor="middle" fontSize="10" fontWeight="700"
          fill={C.if_c} fontFamily="Poppins,sans-serif">if condition</text>
        <text x="130" y="50" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">score &gt;= 90?</text>
      </g>

      {/* True path → block */}
      <g className="if1">
        <line x1="200" y1="40" x2="290" y2="40"
          stroke={C.if_c} strokeWidth="1.8" markerEnd="url(#ifBlue)"/>
        <text x="245" y="34" textAnchor="middle" fontSize="8" fill={C.if_c}
          fontFamily="Poppins,sans-serif">True</text>
        <rect x="292" y="22" width="120" height="36" rx="8"
          fill={C.if_c} fillOpacity=".12" stroke={C.if_c} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="352" y="40" textAnchor="middle" fontSize="9" fill={C.if_c}
          fontFamily="Open Sans,sans-serif">grade = "A"</text>
        <text x="352" y="53" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">→ DONE, skip rest</text>
      </g>

      {/* False → elif */}
      <g className="if2">
        <line x1="130" y1="70" x2="130" y2="100"
          stroke={C.elif_c} strokeWidth="1.8" markerEnd="url(#ifAmb)"/>
        <text x="140" y="88" fontSize="8" fill={C.elif_c}
          fontFamily="Poppins,sans-serif">False</text>
        <polygon points="130,102 200,132 130,162 60,132"
          fill={C.elif_c} fillOpacity=".15" stroke={C.elif_c} strokeOpacity=".6" strokeWidth="1.8"/>
        <text x="130" y="127" textAnchor="middle" fontSize="10" fontWeight="700"
          fill={C.elif_c} fontFamily="Poppins,sans-serif">elif condition</text>
        <text x="130" y="142" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">score &gt;= 75?</text>

        <line x1="200" y1="132" x2="290" y2="132"
          stroke={C.elif_c} strokeWidth="1.8" markerEnd="url(#ifAmb)"/>
        <text x="245" y="126" textAnchor="middle" fontSize="8" fill={C.elif_c}
          fontFamily="Poppins,sans-serif">True</text>
        <rect x="292" y="114" width="120" height="36" rx="8"
          fill={C.elif_c} fillOpacity=".12" stroke={C.elif_c} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="352" y="132" textAnchor="middle" fontSize="9" fill={C.elif_c}
          fontFamily="Open Sans,sans-serif">grade = "B"</text>
        <text x="352" y="145" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">→ DONE, skip rest</text>
      </g>

      {/* else */}
      <g className="if3">
        <line x1="130" y1="162" x2="130" y2="192"
          stroke={C.else_c} strokeWidth="1.8" markerEnd="url(#ifGreen)"/>
        <text x="140" y="180" fontSize="8" fill={C.else_c}
          fontFamily="Poppins,sans-serif">False</text>
        <rect x="68" y="192" width="124" height="22" rx="7"
          fill={C.else_c} fillOpacity=".12" stroke={C.else_c} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="130" y="207" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.else_c} fontFamily="Poppins,sans-serif">else: grade = "C"</text>
      </g>

      <g className="if4">
        <text x="420" y="192" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">kan Python checks</text>
        <text x="420" y="204" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">top-down, first</text>
        <text x="420" y="216" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">True block runs</text>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 2 — Ternary expression
// ─────────────────────────────────────────────────────────
function TernarySVG() {
  return (
    <svg viewBox="0 0 520 100" className="w-full" aria-label="Ternary expression anatomy">
      <defs>
        <style>{`
          @keyframes trnFade{from{opacity:0}to{opacity:1}}
          .trn{animation:trnFade .4s .1s ease both}
        `}</style>
      </defs>
      <g className="trn">
        {/* Expression parts */}
        <rect x="10" y="20" width="90" height="34" rx="7"
          fill={C.if_c} fillOpacity=".15" stroke={C.if_c} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="55" y="33" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.if_c} fontFamily="Poppins,sans-serif">value_if_true</text>
        <text x="55" y="46" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">"Adult"</text>

        <rect x="110" y="20" width="40" height="34" rx="7"
          fill={C.tern} fillOpacity=".15" stroke={C.tern} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="130" y="40" textAnchor="middle" fontSize="10" fontWeight="800"
          fill={C.tern} fontFamily="Poppins,sans-serif">if</text>

        <rect x="160" y="20" width="90" height="34" rx="7"
          fill={C.elif_c} fillOpacity=".15" stroke={C.elif_c} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="205" y="33" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.elif_c} fontFamily="Poppins,sans-serif">condition</text>
        <text x="205" y="46" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">age &gt;= 18</text>

        <rect x="260" y="20" width="46" height="34" rx="7"
          fill={C.tern} fillOpacity=".15" stroke={C.tern} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="283" y="40" textAnchor="middle" fontSize="10" fontWeight="800"
          fill={C.tern} fontFamily="Poppins,sans-serif">else</text>

        <rect x="316" y="20" width="90" height="34" rx="7"
          fill={C.else_c} fillOpacity=".15" stroke={C.else_c} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="361" y="33" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.else_c} fontFamily="Poppins,sans-serif">value_if_false</text>
        <text x="361" y="46" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">"Minor"</text>

        {/* Full expression */}
        <rect x="10" y="64" width="396" height="28" rx="7"
          fill={C.dim} fillOpacity=".6" stroke={C.muted} strokeOpacity=".2" strokeWidth="1"/>
        <text x="208" y="81" textAnchor="middle" fontSize="9" fontFamily="Space Mono,monospace"
          fill="#E6EDF3">status = "Adult" if age &gt;= 18 else "Minor"</text>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 3 — Truthiness visual
// ─────────────────────────────────────────────────────────
function TruthinessSVG() {
  const falsy = ['0', '0.0', '""', "''", '[]', '{}', 'set()', 'None', 'False']
  const truthy = ['1', '-5', '3.14', '"hi"', '[0]', '{1}', 'True', 'any object']

  return (
    <svg viewBox="0 0 520 110" className="w-full" aria-label="Truthy and falsy">
      <defs>
        <style>{`
          @keyframes trFade{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .tr{animation:trFade .4s .1s ease both}
        `}</style>
      </defs>
      <g className="tr">
        <rect x="6" y="4" width="250" height="100" rx="9"
          fill="#F87171" fillOpacity=".08" stroke="#F87171" strokeOpacity=".3" strokeWidth="1.5"/>
        <text x="131" y="24" textAnchor="middle" fontSize="10" fontWeight="700"
          fill="#F87171" fontFamily="Poppins,sans-serif">❌ Falsy — if me jaayega False branch</text>
        <g>
          {falsy.map((v, i) => (
            <text key={v} x={20 + (i % 5) * 46} y={46 + Math.floor(i / 5) * 20}
              fontSize="9" fill="#F87171" fontFamily="Space Mono,monospace">{v}</text>
          ))}
        </g>

        <rect x="264" y="4" width="250" height="100" rx="9"
          fill={C.else_c} fillOpacity=".08" stroke={C.else_c} strokeOpacity=".3" strokeWidth="1.5"/>
        <text x="389" y="24" textAnchor="middle" fontSize="10" fontWeight="700"
          fill={C.else_c} fontFamily="Poppins,sans-serif">✓ Truthy — if me jaayega True branch</text>
        <g>
          {truthy.map((v, i) => (
            <text key={v} x={278 + (i % 4) * 60} y={46 + Math.floor(i / 4) * 20}
              fontSize="9" fill={C.else_c} fontFamily="Space Mono,monospace">{v}</text>
          ))}
        </g>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 4 — Quick Recall
// ─────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 540 160" className="w-full" aria-label="Conditionals quick recall">
      <defs>
        <style>{`
          @keyframes crPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .cr0{animation:crPop .3s .0s ease both}
          .cr1{animation:crPop .3s .12s ease both}
          .cr2{animation:crPop .3s .24s ease both}
        `}</style>
      </defs>
      <g className="cr0">
        <rect x="4" y="4" width="168" height="148" rx="9"
          fill={C.if_c} fillOpacity=".09" stroke={C.if_c} strokeOpacity=".35" strokeWidth="1.5"/>
        <text x="88" y="24" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.if_c} fontFamily="Poppins,sans-serif">if / elif / else</text>
        {['Top-down check', 'First True block runs', 'Rest skipped', 'else is optional', 'No switch statement'].map((l, i) => (
          <text key={i} x="14" y={42 + i * 18} fontSize="8.5"
            fill={C.muted} fontFamily="Open Sans,sans-serif">• {l}</text>
        ))}
      </g>
      <g className="cr1">
        <rect x="180" y="4" width="168" height="148" rx="9"
          fill={C.tern} fillOpacity=".09" stroke={C.tern} strokeOpacity=".35" strokeWidth="1.5"/>
        <text x="264" y="24" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.tern} fontFamily="Poppins,sans-serif">Ternary</text>
        {['val if cond else other', 'One-liner only', 'No nested please', 'Good for simple switch', 'Readability first'].map((l, i) => (
          <text key={i} x="190" y={42 + i * 18} fontSize="8.5"
            fill={C.muted} fontFamily="Open Sans,sans-serif">• {l}</text>
        ))}
      </g>
      <g className="cr2">
        <rect x="356" y="4" width="180" height="148" rx="9"
          fill={C.match} fillOpacity=".09" stroke={C.match} strokeOpacity=".35" strokeWidth="1.5"/>
        <text x="446" y="24" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.match} fontFamily="Poppins,sans-serif">match (3.10+)</text>
        {['match subject:', 'case value:', 'case _:  (wildcard)', 'Structural patterns', 'Replaces if chains'].map((l, i) => (
          <text key={i} x="366" y={42 + i * 18} fontSize="8.5"
            fill={C.muted} fontFamily="Open Sans,sans-serif">• {l}</text>
        ))}
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// Main Note
// ─────────────────────────────────────────────────────────
export default function ConditionalsNote() {
  return (
    <NoteLayout
      title="Conditionals — if / elif / else"
      phase="0A"
      subtitle="Python mein decisions kaise lete hain — top-down check, truthiness, ternary, aur Python 3.10 match statement."
    >

      {/* ── 1. Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model">
        <MentalModel
          analogyTitle="🚦 Traffic Signal"
          analogy={
            <div className="space-y-4 text-sm font-body">
              <p className="text-content font-semibold leading-note">
                if/elif/else = traffic signal system. Python upar se neeche check karta hai,
                pehla green (True) signal milte hi us lane pe enter karta hai, baaki ignore.
              </p>
              <div className="space-y-2 border-t border-highlight pt-3">
                {[
                  { c: 'if condition1:', note: 'pehla check — agar True, ye block run', color: 'text-primary' },
                  { c: 'elif condition2:', note: 'sirf agar condition1 False tha', color: 'text-accent' },
                  { c: 'elif condition3:', note: 'chain mein aur bhi ho sakte hain', color: 'text-accent' },
                  { c: 'else:', note: 'koi bhi True nahi tha, ye fallback', color: 'text-visual-2' },
                ].map(r => (
                  <div key={r.c} className="flex items-start gap-2">
                    <code className="font-code text-xs text-primary shrink-0 w-32">{r.c}</code>
                    <span className="text-xs text-content-muted leading-note">{r.note}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-content-muted leading-note border-t border-highlight pt-2">
                Important: ek baar ek block run ho gaya — baaki sab skip. No fall-through like C/Java switch.
              </p>
            </div>
          }
          diagram={<IfFlowSVG />}
        />
      </SectionBlock>

      {/* ── 2. Basic Syntax ── */}
      <SectionBlock icon="📝" title="Basic Syntax">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="conditionals.py"
            code={`score = 85

# Simple if
if score >= 90:
    grade = "A"
elif score >= 75:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"

# One-liner if (no block needed for simple)
if score > 50: print("Pass")   # valid but not recommended

# Nested conditionals
if user:
    if user.is_admin:
        show_admin_panel()
    else:
        show_user_panel()
else:
    redirect_to_login()

# Multiple conditions
if score > 60 and score < 90:    # and
    grade = "B or C"

if score < 50 or score > 95:     # or
    flag_unusual()`}
          />
        </div>
      </SectionBlock>

      {/* ── 3. Truthiness ── */}
      <SectionBlock icon="☯️" title="Truthiness — Kya Falsy hai?">
        <div className="space-y-4">
          <div className="bg-surface-visual rounded-xl p-5">
            <TruthinessSVG />
          </div>
          <CodeBlock
            language="python"
            filename="truthiness.py"
            code={`# Falsy values — sab if me False maane jaate hain
if 0:        print("nope")   # nahi chalega
if "":       print("nope")   # nahi chalega
if []:       print("nope")   # nahi chalega
if None:     print("nope")   # nahi chalega
if False:    print("nope")   # nahi chalega

# Truthy — baaki sab
if 1:        print("yes")    # chalega
if "a":      print("yes")    # chalega
if [0]:      print("yes")    # [0] empty nahi — truthy!
if -5:       print("yes")    # non-zero — truthy

# Common pattern — None/empty check
data = get_data()
if data:                     # None ya empty dono handle
    process(data)

# More explicit — only None check
if data is not None:         # empty list bhi pass ho jayegi
    process(data)`}
          />
        </div>
      </SectionBlock>

      {/* ── 4. Ternary ── */}
      <SectionBlock icon="🔀" title="Ternary Expression">
        <div className="space-y-4">
          <div className="bg-surface-visual rounded-xl p-5">
            <TernarySVG />
          </div>
          <CodeBlock
            language="python"
            filename="ternary.py"
            code={`# Basic ternary
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)   # "Adult"

# With function calls
label = format_name(user) if user else "Guest"

# In list/dict comprehension
scores = [85, 42, 91, 67]
grades = ["Pass" if s >= 60 else "Fail" for s in scores]

# Nested ternary — try to avoid!
# grade = "A" if s >= 90 else "B" if s >= 75 else "C"
# Better — use if/elif for clarity

# Ternary vs if — kab use karein?
# Ternary: one simple expression, no side effects
# if/elif: complex logic, multiple statements`}
          />
          <InfoBox type="warn" title="Nested ternary avoid karo">
            <code className="font-code text-xs">a if c1 else b if c2 else c</code> — technically valid
            but readable nahi hai. 3+ conditions ke liye if/elif use karo.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 5. match statement (3.10+) ── */}
      <SectionBlock icon="🎯" title="match Statement (Python 3.10+)">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="match_statement.py"
            code={`# Basic match — cleaner than if chains
command = "quit"

match command:
    case "quit":
        exit()
    case "help":
        show_help()
    case "start":
        start_game()
    case _:          # wildcard — else ki tarah
        print("Unknown command")

# Match with values
point = (0, 1)

match point:
    case (0, 0):
        print("Origin")
    case (x, 0):
        print(f"X-axis at {x}")
    case (0, y):
        print(f"Y-axis at {y}")
    case (x, y):
        print(f"Point at {x}, {y}")

# Match with guard condition
match score:
    case s if s >= 90:
        grade = "A"
    case s if s >= 75:
        grade = "B"
    case _:
        grade = "C"`}
          />
          <InfoBox type="info" title="match vs if/elif">
            match statement Python 3.10 se hai. Structural pattern matching ke liye powerful hai —
            especially tuples, dataclasses ke saath. Simple value comparison ke liye if/elif bhi theek hai.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 6. Traps ── */}
      <SectionBlock icon="🪤" title="Interview Traps">
        <div className="space-y-4">
          <TrapBox
            number={1}
            name="if [] vs if [] is not None"
            level="B"
            question="items = [] — kya if items: block chalega?"
            wrongAnswer="Haan — items exist karta hai"
            correctAnswer="Nahi — empty list [] falsy hai"
            why="if list_name: empty list ko False maanta hai. Agar aapko sirf None check karni hai (empty list pass karni hai), toh if items is not None: use karo. Ye real backend bug hai — function returned empty list but code treated it as error."
          />
          <TrapBox
            number={2}
            name="Indentation matters"
            level="B"
            question="if x: print('a') print('b') — dono print chalenge?"
            wrongAnswer="Sirf 'a' — 'b' else block mein hai"
            correctAnswer="Dono print chalenge — 'b' if ke bahar hai (not indented)"
            why="Python mein indentation hi block define karta hai. print('b') if ke andar nahi hai isliye hamesha chalega regardless of condition. C/Java ke curly braces miss ho jaate hain beginners ko."
          />
          <TrapBox
            number={3}
            name="Chained elif order matters"
            level="B"
            question="score = 95 — agar if score > 60: pehle aaye toh kya hoga?"
            wrongAnswer="Sahi grade milegi"
            correctAnswer="Galat grade — agar 60 wala pehle aaya toh 'C' milega even for 95"
            why="if/elif top-down check karta hai. Pehla True milte hi rok jaata hai. Specific conditions (90+) pehle likhni chahiye, broad ones (60+) baad mein. Isliye order matters."
          />
        </div>
      </SectionBlock>

      {/* ── 7. Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'if cond:',          value: 'basic check — indented block' },
          { label: 'elif cond:',        value: 'chain check — only if previous was False' },
          { label: 'else:',             value: 'fallback — no condition' },
          { label: 'Falsy values',      value: '0, 0.0, "", [], {}, set(), None, False' },
          { label: 'if data:',          value: 'pythonic None/empty check' },
          { label: 'if x is None:',     value: 'strict None-only check' },
          { label: 'a if cond else b',  value: 'ternary — simple one-liners ke liye' },
          { label: 'match x: case v:', value: 'Python 3.10+ structural matching' },
          { label: 'case _:',           value: 'wildcard (like default in switch)' },
          { label: 'Order matters',     value: 'specific → broad (90+ before 60+)' },
        ]} />
      </SectionBlock>

      {/* ── 8. Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── 9. Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{
            title: 'Conditionals',
            description: 'if/elif/else, truthiness, ternary, match',
          }}
          to={{
            title: 'Loops — for, while, break, continue',
            description: 'Decisions ke baad repetition — loops sikhte hain',
            href: '/roadmap/topic/python-basics/3',
          }}
        />
      </SectionBlock>

    </NoteLayout>
  )
}
