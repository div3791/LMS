import {
  NoteLayout,
  SectionBlock,
  TrapBox,
  Cheatsheet,
  QuickRecall,
  ConnectedTopics,
  InfoBox,
  CodeBlock,
} from '../../components/notes'

const C = {
  arith:  '#4F8CFF',
  comp:   '#34D399',
  logic:  '#F59E0B',
  ident:  '#A78BFA',
  memb:   '#F87171',
  bit:    '#22D3EE',
  muted:  '#9CA3AF',
  white:  '#F8FAFC',
  border: '#1E3A5F',
}

// ── SVG 1: Operator Types Table ─────────────────────────────────────────────
// 6 rows × RH=22, startY=28, header=20, footer note=18
// viewBox="0 0 520 185"
function OperatorMapSVG() {
  const rows = [
    { cat: 'Arithmetic', color: C.arith, ops: '+ - * /  //  %  **',  note: 'number return' },
    { cat: 'Comparison', color: C.comp,  ops: '== != < > <= >=',      note: 'always bool' },
    { cat: 'Logical',    color: C.logic, ops: 'and   or   not',        note: 'object return ← !' },
    { cat: 'Identity',   color: C.ident, ops: 'is     is not',         note: 'same object?' },
    { cat: 'Membership', color: C.memb,  ops: 'in     not in',         note: 'element exists?' },
    { cat: 'Bitwise',    color: C.bit,   ops: '&  |  ^  ~  <<  >>',   note: 'bit level ops' },
  ]
  const RH = 22, startY = 28

  return (
    <svg viewBox="0 0 520 185" className="w-full">
      <defs>
        <style>{`
          @keyframes om0{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om1{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om2{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om3{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om4{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om5{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          .omr0{animation:om0 .3s .00s ease both}
          .omr1{animation:om1 .3s .07s ease both}
          .omr2{animation:om2 .3s .14s ease both}
          .omr3{animation:om3 .3s .21s ease both}
          .omr4{animation:om4 .3s .28s ease both}
          .omr5{animation:om5 .3s .35s ease both}
        `}</style>
      </defs>

      {/* Column headers */}
      <text x="8"   y="16" fontSize="9" fontWeight="700" fill={C.muted} fontFamily="Poppins,sans-serif">Category</text>
      <text x="140" y="16" fontSize="9" fontWeight="700" fill={C.muted} fontFamily="Poppins,sans-serif">Operators</text>
      <text x="512" y="16" textAnchor="end" fontSize="9" fontWeight="700" fill={C.muted} fontFamily="Poppins,sans-serif">Returns</text>
      <line x1="2" y1="20" x2="518" y2="20" stroke={C.border} strokeWidth="0.8"/>

      {rows.map((row, i) => {
        const y = startY + i * RH
        return (
          <g key={row.cat} className={`omr${i}`}>
            {i % 2 === 0 && (
              <rect x="2" y={y} width="516" height={RH - 1} rx="3" fill={row.color} fillOpacity=".05"/>
            )}
            {/* Category badge */}
            <rect x="4" y={y + 2} width="108" height="16" rx="4" fill={row.color} fillOpacity=".18"/>
            <text x="58" y={y + 14} textAnchor="middle" fontSize="9.5" fontWeight="700"
              fill={row.color} fontFamily="Poppins,sans-serif">{row.cat}</text>
            {/* Operators */}
            <text x="120" y={y + 14} fontSize="9" fontWeight="600"
              fill={row.color} fontFamily="Space Mono,monospace">{row.ops}</text>
            {/* Returns */}
            <text x="512" y={y + 14} textAnchor="end" fontSize="9"
              fill={C.muted} fontFamily="Open Sans,sans-serif">{row.note}</text>
          </g>
        )
      })}

      {/* Footer note */}
      <text x="260" y="178" textAnchor="middle" fontSize="8.5" fill={C.logic} fontFamily="Open Sans,sans-serif">
        * Logical — and/or objects return karte hain, hamesha bool nahi
      </text>
    </svg>
  )
}

// ── SVG 2: and/or Short Circuit ──────────────────────────────────────────────
// Left (AND): center=130, Right (OR): center=390
// viewBox="0 0 520 148"
function ShortCircuitSVG() {
  return (
    <svg viewBox="0 0 520 148" className="w-full">
      <defs>
        <style>{`
          @keyframes sca{from{opacity:0}to{opacity:1}}
          @keyframes scb{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
          @keyframes scc{from{opacity:0}to{opacity:1}}
          @keyframes scd{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
          .sc0{animation:sca .3s .05s ease both}
          .sc1{animation:scb .3s .20s ease both}
          .sc2{animation:scc .3s .35s ease both}
          .sc3{animation:scd .3s .50s ease both}
        `}</style>
        <marker id="sc-arr-r" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.memb}/>
        </marker>
        <marker id="sc-arr-g" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.comp}/>
        </marker>
      </defs>

      {/* ── AND side ── */}
      <g className="sc0">
        <text x="130" y="14" textAnchor="middle" fontSize="10" fontWeight="700"
          fill={C.logic} fontFamily="Poppins,sans-serif">A and B</text>
        <text x="130" y="25" textAnchor="middle" fontSize="8"
          fill={C.muted} fontFamily="Open Sans,sans-serif">A falsy → B never runs</text>
        {/* A box */}
        <rect x="10" y="32" width="76" height="34" rx="7"
          fill={C.memb} fillOpacity=".14" stroke={C.memb} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="48" y="47" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.memb} fontFamily="Poppins,sans-serif">A = Falsy</text>
        <text x="48" y="59" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">0  None  ""  []</text>
        {/* Arrow */}
        <line x1="86" y1="49" x2="130" y2="49" stroke={C.memb} strokeWidth="1.8" markerEnd="url(#sc-arr-r)"/>
        {/* B skipped */}
        <rect x="132" y="32" width="106" height="34" rx="7"
          fill={C.muted} fillOpacity=".08" stroke={C.muted} strokeOpacity=".3" strokeWidth="1"/>
        <text x="185" y="47" textAnchor="middle" fontSize="9" fill={C.muted}
          fontFamily="Open Sans,sans-serif">B skipped ✋</text>
        <text x="185" y="59" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">returns A immediately</text>
      </g>

      {/* AND example */}
      <g className="sc1">
        <rect x="8" y="74" width="232" height="22" rx="5"
          fill={C.logic} fillOpacity=".06" stroke={C.logic} strokeOpacity=".2" strokeWidth="1"/>
        <text x="124" y="89" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Space Mono,monospace">conn and conn.query()  →  safe</text>
      </g>

      {/* Divider */}
      <line x1="256" y1="4" x2="256" y2="144" stroke={C.border} strokeWidth="0.7" strokeDasharray="4 3"/>

      {/* ── OR side ── */}
      <g className="sc2">
        <text x="388" y="14" textAnchor="middle" fontSize="10" fontWeight="700"
          fill={C.ident} fontFamily="Poppins,sans-serif">A or B</text>
        <text x="388" y="25" textAnchor="middle" fontSize="8"
          fill={C.muted} fontFamily="Open Sans,sans-serif">A truthy → B never runs</text>
        {/* A box */}
        <rect x="266" y="32" width="76" height="34" rx="7"
          fill={C.comp} fillOpacity=".14" stroke={C.comp} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="304" y="47" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.comp} fontFamily="Poppins,sans-serif">A = Truthy</text>
        <text x="304" y="59" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">"hi"  42  [1]</text>
        {/* Arrow */}
        <line x1="342" y1="49" x2="386" y2="49" stroke={C.comp} strokeWidth="1.8" markerEnd="url(#sc-arr-g)"/>
        {/* B skipped */}
        <rect x="388" y="32" width="120" height="34" rx="7"
          fill={C.muted} fillOpacity=".08" stroke={C.muted} strokeOpacity=".3" strokeWidth="1"/>
        <text x="448" y="47" textAnchor="middle" fontSize="9" fill={C.muted}
          fontFamily="Open Sans,sans-serif">B skipped ✋</text>
        <text x="448" y="59" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">returns A immediately</text>
      </g>

      {/* OR example */}
      <g className="sc3">
        <rect x="264" y="74" width="246" height="22" rx="5"
          fill={C.ident} fillOpacity=".06" stroke={C.ident} strokeOpacity=".2" strokeWidth="1"/>
        <text x="387" y="89" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Space Mono,monospace">name = user.name or "Anon"</text>
      </g>

      {/* Bottom production note */}
      <rect x="2" y="104" width="516" height="38" rx="7"
        fill={C.comp} fillOpacity=".05" stroke={C.comp} strokeOpacity=".2" strokeWidth="1"/>
      <text x="260" y="120" textAnchor="middle" fontSize="9" fontWeight="700"
        fill={C.comp} fontFamily="Poppins,sans-serif">Real production patterns:</text>
      <text x="260" y="135" textAnchor="middle" fontSize="9" fill={C.muted}
        fontFamily="Space Mono,monospace">value = config or default    active = user and user.is_active</text>
    </svg>
  )
}

// ── SVG 3: Quick Recall ──────────────────────────────────────────────────────
// 3 columns CW=160, gap=10, x=10/180/350
// Items centered → textAnchor="middle" at cx = x + 80
// viewBox="0 0 520 160"
function RecallSVG() {
  const CW = 160
  const cols = [
    {
      x: 10, color: C.arith, title: 'Division',
      items: ['7 / 2 = 3.5 (float)', '7 // 2 = 3 (floor)', '7 % 3 = 1 (mod)', '2 ** 10 = 1024'],
    },
    {
      x: 180, color: C.logic, title: 'and / or',
      items: ['and → first falsy', 'or → first truthy', 'not → bool always', 'short circuits ✓'],
    },
    {
      x: 350, color: C.ident, title: 'is / in',
      items: ['is → same object', '== → same value', 'in list → O(n)', 'in set → O(1)'],
    },
  ]

  return (
    <svg viewBox="0 0 520 160" className="w-full">
      <defs>
        <style>{`
          @keyframes rca{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          @keyframes rcb{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          @keyframes rcc{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .rc0{animation:rca .3s .00s ease both}
          .rc1{animation:rcb .3s .12s ease both}
          .rc2{animation:rcc .3s .24s ease both}
        `}</style>
      </defs>

      {cols.map((col, ci) => {
        const cx = col.x + CW / 2  // center x of column = col.x + 80
        return (
          <g key={col.title} className={`rc${ci}`}>
            <rect x={col.x} y="4" width={CW} height="152" rx="8"
              fill={col.color} fillOpacity=".08" stroke={col.color} strokeOpacity=".4" strokeWidth="1.5"/>
            <text x={cx} y="24" textAnchor="middle" fontSize="11" fontWeight="700"
              fill={col.color} fontFamily="Poppins,sans-serif">{col.title}</text>
            <line x1={col.x + 10} y1="30" x2={col.x + CW - 10} y2="30"
              stroke={col.color} strokeOpacity=".25" strokeWidth="1"/>
            {col.items.map((item, ii) => {
              // ii=0 → y=46, ii=1 → y=68, ii=2 → y=90, ii=3 → y=112
              const iy = 46 + ii * 28
              return (
                <g key={item}>
                  {ii % 2 === 0 && (
                    <rect x={col.x + 6} y={iy - 14} width={CW - 12} height="20" rx="3"
                      fill={col.color} fillOpacity=".07"/>
                  )}
                  <text x={cx} y={iy} textAnchor="middle" fontSize="9.5" fontWeight="600"
                    fill={col.color} fontFamily="Space Mono,monospace">{item}</text>
                </g>
              )
            })}
          </g>
        )
      })}
    </svg>
  )
}

// ── Main Note ────────────────────────────────────────────────────────────────
export default function OperatorsNote() {
  return (
    <NoteLayout
      title="Operators"
      phase="0A"
      subtitle="6 operator types — aur ek non-obvious rule: and/or hamesha bool nahi return karte"
    >

      {/* ── 1. Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — 6 Types, Ek Hidden Rule">
        <div className="space-y-4">
          {/* Analogy — full width, no grid constraint */}
          <div className="bg-surface-card border-l-4 border-primary rounded-xl p-5">
            <p className="text-xs font-heading font-semibold uppercase tracking-wider text-primary mb-4">
              🧰 Har operator ek alag tool hai
            </p>
            <div className="space-y-2">
              {[
                { type: 'Arithmetic', ex: '3 + 4,  10 // 3',  note: 'Calculator — numbers pe math',    c: 'text-primary' },
                { type: 'Comparison', ex: 'x == y,  a < b',   note: 'Judge — hamesha bool return',     c: 'text-visual-2' },
                { type: 'Logical',    ex: 'a and b,  x or y', note: 'Gatekeeper — object return karta!', c: 'text-accent' },
                { type: 'Identity',   ex: 'x is None',        note: 'Mirror — same object in memory?', c: 'text-visual-3' },
                { type: 'Membership', ex: '"a" in lst',       note: 'Guard — element exists?',         c: 'text-visual-4' },
                { type: 'Bitwise',    ex: 'x & y,  x << 2',  note: 'Bit surgeon — raw bit ops',       c: 'text-primary' },
              ].map(r => (
                <div key={r.type} className="flex items-baseline gap-3 text-sm">
                  <span className={`font-code font-bold text-xs w-24 shrink-0 ${r.c}`}>{r.type}</span>
                  <code className="font-code text-xs text-primary shrink-0 w-36">{r.ex}</code>
                  <span className="text-xs text-content-muted">{r.note}</span>
                </div>
              ))}
            </div>
          </div>
          {/* SVG — full width */}
          <div className="rounded-xl bg-surface-visual p-4">
            <OperatorMapSVG />
          </div>
        </div>
      </SectionBlock>

      {/* ── 2. Arithmetic ── */}
      <SectionBlock icon="➕" title="Arithmetic Operators">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="arithmetic.py"
            code={`# Basic
10 + 3   # 13
10 - 3   # 7
10 * 3   # 30

# Division — 3 types, sabse important
10 / 3   # 3.3333...  ← hamesha float
10 // 3  # 3          ← floor division (integer)
10 % 3   # 1          ← modulo (remainder)

# Exponent
2 ** 10  # 1024
9 ** 0.5 # 3.0   ← square root trick

# TRAP — negative floor division
-7 // 2  # -4   (not -3!) → floor towards -infinity
-7 % 2   # 1    (not -1!) → sign follows divisor`}
          />
          <InfoBox type="warn">
            <strong>-7 // 2 = -4, not -3!</strong> Python floors towards negative infinity.
            Java/C mein -7 / 2 = -3 hota (truncation towards zero). Python different hai.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 3. Comparison ── */}
      <SectionBlock icon="⚖️" title="Comparison Operators">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="comparison.py"
            code={`# Always return bool
5 == 5    # True
5 != 3    # True
5 > 3     # True
5 >= 5    # True

# Chain comparison — Python only! Other languages mein nahi
1 < x < 10       # True if x between 1 and 10
0 <= score < 100 # clean range check

# String comparison — lexicographic (dictionary order)
"abc" < "abd"  # True
"Z" < "a"      # True — uppercase (ASCII 90) < lowercase (ASCII 97)

# is vs == — critical difference
a = [1, 2, 3]
b = [1, 2, 3]
a == b   # True  — same value
a is b   # False — different objects in memory

# None check — is use karo, == nahi
x = None
x is None    # ✓ correct, Pythonic
x == None    # works but not recommended`}
          />
          <InfoBox type="tip">
            <strong>Chain comparison:</strong> Python mein{' '}
            <code className="font-code text-xs">{'1 < x < 10'}</code> actually{' '}
            <code className="font-code text-xs">{'(1 < x) and (x < 10)'}</code> ke barabar hai.
            Java/JS mein ye kaam nahi karta — wahan left-to-right evaluate hota hai aur boolean pe operator apply hota.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 4. Logical — most important ── */}
      <SectionBlock icon="🧮" title="Logical Operators — and / or / not">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="logical.py"
            code={`# IMPORTANT: and/or return OBJECTS, not always True/False

# and — first falsy return, ya sab truthy to last return
0 and "hello"    # 0       ← falsy found, stop
"hi" and 42      # 42      ← sab truthy, last return
None and "x"     # None    ← falsy found
[] and "a"       # []      ← falsy found

# or — first truthy return, ya sab falsy to last return
0 or "hello"     # "hello" ← first truthy
None or 42       # 42
"hi" or "world"  # "hi"    ← first truthy, stop
0 or [] or None  # None    ← sab falsy, last return

# not — hamesha bool return karta hai
not 0     # True
not "hi"  # False
not None  # True

# Production patterns — ye sab jagah milega
name = user.name or "Anonymous"     # safe default
value = config.get("key") or 42    # fallback
active = user and user.is_active    # safe attribute access`}
          />
          <InfoBox type="info">
            <strong>Short circuit kya hai?</strong>{' '}
            <code className="font-code text-xs">conn and conn.query()</code> —
            agar <code className="font-code text-xs">conn</code> None hai toh{' '}
            <code className="font-code text-xs">.query()</code> call hi nahi hoga. Exception nahi aayega.
            Ye Django, FastAPI dono mein common pattern hai.
          </InfoBox>
          {/* Short circuit SVG — full width */}
          <div className="rounded-xl bg-surface-visual p-4">
            <ShortCircuitSVG />
          </div>
        </div>
      </SectionBlock>

      {/* ── 5. Identity + Membership ── */}
      <SectionBlock icon="🔍" title="Identity aur Membership Operators">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="identity_membership.py"
            code={`# Identity — is / is not
x = None
x is None      # True  ← correct way to check None
x is not None  # False

a = [1, 2]
b = a          # alias — same object
b is a         # True  ← same object in memory
c = [1, 2]     # new object, same value
c is a         # False ← different objects

# Membership — in / not in
"a" in "apple"       # True  ← substring check
3 in [1, 2, 3]       # True  ← list check (O(n) scan!)
3 in {1, 2, 3}       # True  ← set check  (O(1) hash!)
"key" in {"key": 1}  # True  ← dict keys check
"x" not in {}        # True

# Performance — large data pe important
data = list(range(1_000_000))
999_999 in data         # O(n) — scans entire list!
data_set = set(data)
999_999 in data_set     # O(1) — hash lookup`}
          />
          <InfoBox type="warn">
            <code className="font-code text-xs">in</code> list pe{' '}
            <strong>O(n)</strong> hai — large lists ke liye{' '}
            <code className="font-code text-xs">set()</code> mein convert karo.
            Set membership O(1) hai (hash table).
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 6. Bitwise ── */}
      <SectionBlock icon="⚡" title="Bitwise Operators">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="bitwise.py"
            code={`# Bitwise — binary level pe operate karte hain
x = 0b1010  # 10
y = 0b1100  # 12

x & y   # 0b1000 = 8   ← AND  — dono mein 1 ho
x | y   # 0b1110 = 14  ← OR   — kisi ek mein 1 ho
x ^ y   # 0b0110 = 6   ← XOR  — exactly ek mein 1 ho
~x      # -11           ← NOT  — bits flip (2's complement)
x << 1  # 20            ← left shift (multiply by 2)
x >> 1  # 5             ← right shift (divide by 2)

# Real world uses:
# Permissions — Unix style
READ = 0b100   # 4
WRITE = 0b010  # 2
EXEC = 0b001   # 1

user_perms = READ | WRITE   # 6 = 0b110
has_read = user_perms & READ  # 4 (truthy) — has permission!`}
          />
          <InfoBox type="info">
            Bitwise operators zyada tar low-level code, permissions systems, aur competitive programming mein aate hain.
            Day-to-day Python mein kam milenge — lekin <code className="font-code text-xs">is</code> aur{' '}
            <code className="font-code text-xs">in</code> hamesha kaam aate hain.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 7. Operator Precedence ── */}
      <SectionBlock icon="📊" title="Operator Precedence — Kaun Pehle?">
        <div className="space-y-4">
          <div className="rounded-xl border border-highlight bg-surface-card p-4">
            <p className="text-[11px] uppercase tracking-wider font-heading font-semibold text-content-muted mb-3">
              High → Low Priority
            </p>
            <div className="space-y-1.5">
              {[
                { ops: '()',              note: 'Parentheses — highest',        c: 'text-primary' },
                { ops: '**',             note: 'Exponent',                     c: 'text-visual-2' },
                { ops: '~x  +x  -x',    note: 'Unary operators',              c: 'text-content-muted' },
                { ops: '*  /  //  %',   note: 'Multiply, Divide',             c: 'text-accent' },
                { ops: '+  -',           note: 'Add, Subtract',                c: 'text-accent' },
                { ops: '<<  >>',         note: 'Bitwise shift',                c: 'text-primary' },
                { ops: '&',              note: 'Bitwise AND',                  c: 'text-primary' },
                { ops: '^',              note: 'Bitwise XOR',                  c: 'text-primary' },
                { ops: '|',              note: 'Bitwise OR',                   c: 'text-primary' },
                { ops: '< > <= >= == !=', note: 'Comparisons',                c: 'text-visual-2' },
                { ops: 'not',            note: 'Logical NOT',                  c: 'text-visual-3' },
                { ops: 'and',            note: 'Logical AND',                  c: 'text-visual-3' },
                { ops: 'or',             note: 'Logical OR — lowest',          c: 'text-visual-3' },
              ].map(r => (
                <div key={r.ops} className="flex items-center gap-3">
                  <code className="font-code text-xs text-primary w-32 shrink-0">{r.ops}</code>
                  <span className={`text-xs font-body ${r.c}`}>{r.note}</span>
                </div>
              ))}
            </div>
          </div>
          <CodeBlock
            language="python"
            filename="precedence.py"
            code={`2 + 3 * 4        # 14  — * first, then +
(2 + 3) * 4      # 20  — parens override
not False or True # True — (not False) or True
not (False or True) # False — not True`}
          />
        </div>
      </SectionBlock>

      {/* ── 8. Interview Traps ── */}
      <SectionBlock icon="🪤" title="Interview Traps">
        <div className="space-y-4">
          <TrapBox
            number={1}
            name="and/or return type"
            level="M"
            question="print('' or 'hello') kya print karega?"
            wrongAnswer="False ya True ya empty string"
            correctAnswer='"hello" — or apna first truthy return karta hai'
            why="Logical operators bool nahi, actual objects return karte hain. Empty string falsy hai, toh or aage jaata hai aur 'hello' return karta hai."
          />
          <TrapBox
            number={2}
            name="Negative floor division"
            level="M"
            question="-7 // 2 kya hoga?"
            wrongAnswer="-3 (integer truncation)"
            correctAnswer="-4 — floor towards negative infinity"
            why="-7 / 2 = -3.5, floor(-3.5) = -4. Python hamesha negative infinity ki taraf floor karta hai. Java/C mein -7 / 2 = -3 hota (zero ki taraf truncate)."
          />
          <TrapBox
            number={3}
            name="not priority vs or"
            level="B"
            question="not False or True kya evaluate hoga?"
            wrongAnswer="not (False or True) = False"
            correctAnswer="(not False) or True = True"
            why="not ka precedence or se zyada hai. not sirf apne right operand pe apply hota hai, poore expression pe nahi. Parentheses se clarity lao."
          />
        </div>
      </SectionBlock>

      {/* ── 9. Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: '/',            value: 'float division — 7/2 = 3.5' },
          { label: '//',           value: 'floor division — 7//2 = 3, -7//2 = -4' },
          { label: '%',            value: 'modulo — 7%3 = 1, sign follows divisor' },
          { label: '**',           value: 'exponent — 2**10 = 1024, 9**0.5 = 3.0' },
          { label: 'and',          value: 'first falsy OR last val — not always bool' },
          { label: 'or',           value: 'first truthy OR last val — not always bool' },
          { label: 'not',          value: 'always bool — not 0 = True' },
          { label: 'is',           value: 'same object? — use for None check' },
          { label: 'in list',      value: 'O(n) — slow for large data' },
          { label: 'in set/dict',  value: 'O(1) — hash lookup, fast' },
          { label: '1 < x < 10',  value: 'chain comparison — Python only' },
          { label: 'x or default', value: 'safe fallback — production pattern' },
        ]} />
      </SectionBlock>

      {/* ── 10. Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── 11. Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{
            title: 'Variables aur Data Types',
            description: 'Python ke 5 basic types — int, float, str, bool, None',
            href: '/roadmap/topic/python-basics/0',
          }}
          to={{
            title: 'Conditionals — if / elif / else',
            description: 'Operators se decisions lo — if/elif/else control flow',
            href: '/roadmap/topic/python-basics/2',
          }}
        />
      </SectionBlock>

    </NoteLayout>
  )
}
