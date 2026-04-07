import {
  NoteLayout, SectionBlock,
  TrapsTable, Cheatsheet, QuickRecall, ConnectedTopics, CodeBlock, InfoBox,
} from '../../components/notes'

const C = {
  blue:   '#4F8CFF',
  green:  '#34D399',
  orange: '#F59E0B',
  purple: '#A78BFA',
  red:    '#F87171',
  muted:  '#8B949E',
  white:  '#F1F5F9',
  dark:   '#0F172A',
  border: '#1E3A5F',
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG 1 — Variable = Label vs Box
//
// viewBox: 0 0 640 170
// Left  (Java/C):  x=0..300,  center=150
// Divider:         x=320
// Right (Python):  x=340..640, center=490
//
// Left box:  x=30  y=40  w=240  h=90  (center x=150, y=85)
// Right:
//   Name tag:  x=350 y=68  w=48  h=26  → center (374, 81)
//   Arrow:     x1=398 y1=81 → x2=448 y2=81
//   Circle:    cx=500 cy=81 r=42       → left edge=458, right=542, top=39, bottom=123
// ─────────────────────────────────────────────────────────────────────────────
function LabelVsBoxSVG() {
  return (
    <svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes lv0show { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
          @keyframes lv1show { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
          .lv0{animation:lv0show .4s .0s ease both}
          .lv1{animation:lv1show .4s .3s ease both}
        `}</style>
        <marker id="lvarr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.blue}/>
        </marker>
      </defs>

      {/* ── LEFT: Java / C — typed container ── */}
      <g className="lv0">
        <text x="150" y="18" textAnchor="middle" fill={C.muted}
          fontSize="13" fontWeight="700" fontFamily="Poppins,sans-serif">Java / C</text>
        <text x="150" y="34" textAnchor="middle" fill={C.muted}
          fontSize="10" fontFamily="Open Sans,sans-serif">variable = typed container</text>

        {/* outer box */}
        <rect x="30" y="44" width="240" height="88" rx="10"
          fill={C.muted} fillOpacity=".08" stroke={C.muted} strokeWidth="1.5"/>
        {/* type label row */}
        <text x="150" y="70" textAnchor="middle" fill={C.muted}
          fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">int  x</text>
        {/* separator */}
        <line x1="48" y1="78" x2="252" y2="78" stroke={C.muted} strokeOpacity=".25" strokeWidth="1"/>
        {/* value */}
        <text x="150" y="117" textAnchor="middle" fill={C.muted}
          fontSize="28" fontWeight="800" fontFamily="Poppins,sans-serif">42</text>

        <text x="150" y="148" textAnchor="middle" fill={C.muted}
          fontSize="10" fontFamily="Open Sans,sans-serif">type fixed — int hi rahega</text>
        <text x="150" y="162" textAnchor="middle" fill={C.red}
          fontSize="10" fontFamily="Open Sans,sans-serif">x = "hello"  →  ❌ compile error</text>
      </g>

      {/* ── Divider ── */}
      <line x1="318" y1="10" x2="318" y2="165" stroke={C.muted}
        strokeWidth="1" strokeDasharray="4 4" opacity=".4"/>

      {/* ── RIGHT: Python — label on object ── */}
      <g className="lv1">
        <text x="490" y="18" textAnchor="middle" fill={C.blue}
          fontSize="13" fontWeight="700" fontFamily="Poppins,sans-serif">Python</text>
        <text x="490" y="34" textAnchor="middle" fill={C.muted}
          fontSize="10" fontFamily="Open Sans,sans-serif">variable = label pointing to object</text>

        {/* object in memory — circle cx=500 cy=83 r=42 */}
        <circle cx="500" cy="83" r="42"
          fill={C.blue} fillOpacity=".12" stroke={C.blue} strokeWidth="1.5"/>
        <text x="500" y="73" textAnchor="middle" fill={C.muted}
          fontSize="10" fontFamily="Open Sans,sans-serif">int object</text>
        <line x1="472" y1="80" x2="528" y2="80"
          stroke={C.blue} strokeOpacity=".2" strokeWidth="1"/>
        <text x="500" y="108" textAnchor="middle" fill={C.blue}
          fontSize="24" fontWeight="800" fontFamily="Poppins,sans-serif">42</text>

        {/* name tag — x=350 y=71 w=46 h=24 → center (373, 83) */}
        <rect x="350" y="71" width="46" height="24" rx="6"
          fill={C.blue} fillOpacity=".18" stroke={C.blue} strokeWidth="1.5"/>
        <text x="373" y="87" textAnchor="middle" fill={C.blue}
          fontSize="13" fontWeight="700" fontFamily="Poppins,sans-serif">x</text>

        {/* arrow: tag right=396 → circle left=458, both at y=83 */}
        <line x1="396" y1="83" x2="456" y2="83"
          stroke={C.blue} strokeWidth="2" markerEnd="url(#lvarr)"/>

        <text x="490" y="146" textAnchor="middle" fill={C.green}
          fontSize="10" fontFamily="Open Sans,sans-serif">x = "hello"  →  label kisi naye object pe move karta hai ✓</text>
        <text x="490" y="161" textAnchor="middle" fill={C.muted}
          fontSize="10" fontFamily="Open Sans,sans-serif">42 wala int object wahan hi rehta hai (GC baad mein saaf karta hai)</text>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG 2 — 5 Types Overview
//
// viewBox: 0 0 520 160
// 5 cards: CW=84 gap=12 leftMargin=26
// x positions: 26, 122, 218, 314, 410
// Card: y=8 h=145 → bottom=153, viewBox h=160 ✓
// Text inside (cx = x + 42):
//   type name:  y=32  fontSize=13 bold
//   example:    y=56  fontSize=14 bold
//   divider:    y=64
//   note lines: y=80,96,112  fontSize=9
// ─────────────────────────────────────────────────────────────────────────────
function TypesOverviewSVG() {
  const types = [
    { name: 'int',   ex: '42',      lines: ['whole number', 'no overflow', '0xFF ok'],       color: C.blue   },
    { name: 'float', ex: '3.14',    lines: ['64-bit decimal', 'IEEE 754', '0.1+0.2 ≠ 0.3'], color: C.green  },
    { name: 'str',   ex: '"hi"',    lines: ['immutable', 'unicode', 'f-strings'],            color: C.orange },
    { name: 'bool',  ex: 'True',    lines: ['int subclass', 'True = 1', 'False = 0'],        color: C.purple },
    { name: 'None',  ex: 'None',    lines: ['NoneType', 'singleton', 'always falsy'],        color: C.muted  },
  ]
  const CW = 84, GAP = 12, ML = 26

  return (
    <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes tp0pop { from{opacity:0;transform:scale(.88)} to{opacity:1;transform:scale(1)} }
          @keyframes tp1pop { from{opacity:0;transform:scale(.88)} to{opacity:1;transform:scale(1)} }
          @keyframes tp2pop { from{opacity:0;transform:scale(.88)} to{opacity:1;transform:scale(1)} }
          @keyframes tp3pop { from{opacity:0;transform:scale(.88)} to{opacity:1;transform:scale(1)} }
          @keyframes tp4pop { from{opacity:0;transform:scale(.88)} to{opacity:1;transform:scale(1)} }
          .tp0{animation:tp0pop .3s .00s ease both}
          .tp1{animation:tp1pop .3s .07s ease both}
          .tp2{animation:tp2pop .3s .14s ease both}
          .tp3{animation:tp3pop .3s .21s ease both}
          .tp4{animation:tp4pop .3s .28s ease both}
        `}</style>
      </defs>
      {types.map((t, i) => {
        const x  = ML + i * (CW + GAP)   // 26,122,218,314,410
        const cx = x + CW / 2            // 68,164,260,356,452
        return (
          <g key={t.name} className={`tp${i}`}>
            <rect x={x} y={8} width={CW} height={145} rx="10"
              fill={t.color} fillOpacity=".10" stroke={t.color} strokeOpacity=".40" strokeWidth="1.5"/>
            <text x={cx} y={32} textAnchor="middle" fill={t.color}
              fontSize="13" fontWeight="800" fontFamily="Poppins,sans-serif">{t.name}</text>
            <text x={cx} y={56} textAnchor="middle" fill={t.color}
              fontSize="14" fontWeight="700" fontFamily="Poppins,sans-serif" fillOpacity=".9">{t.ex}</text>
            <line x1={x + 10} y1={64} x2={x + CW - 10} y2={64}
              stroke={t.color} strokeOpacity=".20" strokeWidth="1"/>
            {t.lines.map((ln, j) => (
              <text key={j} x={cx} y={80 + j * 18} textAnchor="middle" fill={C.muted}
                fontSize="9" fontFamily="Open Sans,sans-serif">{ln}</text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG 3 — Truthy / Falsy table
//
// viewBox: 0 0 520 200
// Header row: y=8 h=24 → bottom=32
// Data rows: y=36 step=30 × 5 rows → last row bottom = 36+5*30=186, viewBox 200 ✓
//
// 3 columns:
//   type:   x=12  w=60   center=42
//   falsy:  x=82  w=175  center=169
//   truthy: x=267 w=242  center=388
// ─────────────────────────────────────────────────────────────────────────────
function TruthySVG() {
  const RH = 30
  const rows = [
    { type: 'int',   color: C.blue,   falsy: '0',              truthy: 'any non-zero: 1, -5, 999'  },
    { type: 'float', color: C.green,  falsy: '0.0',            truthy: 'any non-zero: 3.14, -0.1'  },
    { type: 'str',   color: C.orange, falsy: '"" (empty)',     truthy: '"a",  " " (space),  "0"'   },
    { type: 'bool',  color: C.purple, falsy: 'False',          truthy: 'True'                      },
    { type: 'None',  color: C.muted,  falsy: 'None',           truthy: '— always falsy —'          },
  ]

  return (
    <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes tfshow { from{opacity:0} to{opacity:1} }
          .tfall{animation:tfshow .5s .1s ease both}
        `}</style>
      </defs>

      {/* header */}
      <rect x="12"  y="8" width="60"  height="24" rx="4" fill={C.muted}  fillOpacity=".15"/>
      <rect x="82"  y="8" width="175" height="24" rx="4" fill={C.red}    fillOpacity=".12"/>
      <rect x="267" y="8" width="242" height="24" rx="4" fill={C.green}  fillOpacity=".10"/>

      <text x="42"  y="24" textAnchor="middle" fill={C.muted}
        fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">type</text>
      <text x="169" y="24" textAnchor="middle" fill={C.red}
        fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">❌  Falsy  (if block skip hoga)</text>
      <text x="388" y="24" textAnchor="middle" fill={C.green}
        fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">✓  Truthy  (if block chalega)</text>

      <g className="tfall">
        {rows.map((r, i) => {
          const y = 36 + i * RH   // 36, 66, 96, 126, 156
          return (
            <g key={r.type}>
              <rect x="12"  y={y + 2} width="60"  height={RH - 4} rx="5"
                fill={r.color} fillOpacity=".12" stroke={r.color} strokeOpacity=".25" strokeWidth="1"/>
              <text x="42"  y={y + RH/2 + 5} textAnchor="middle" fill={r.color}
                fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">{r.type}</text>

              <rect x="82"  y={y + 2} width="175" height={RH - 4} rx="5"
                fill={C.red} fillOpacity=".04"/>
              <text x="169" y={y + RH/2 + 5} textAnchor="middle" fill={C.red}
                fontSize="10" fontFamily="Poppins,sans-serif">{r.falsy}</text>

              <rect x="267" y={y + 2} width="242" height={RH - 4} rx="5"
                fill={C.green} fillOpacity=".03"/>
              <text x="388" y={y + RH/2 + 5} textAnchor="middle" fill={C.muted}
                fontSize="10" fontFamily="Open Sans,sans-serif">{r.truthy}</text>
            </g>
          )
        })}
      </g>
      {/* last row bottom: 156+30=186, viewBox h=200 ✓ */}
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG 4 — Quick Recall  (dark bg)
//
// viewBox: 0 0 520 210
// 3 columns: CW=154 gap=11  x=12,177,342  (12+154+11+154+11+154+24=520 ✓)
// Col header:  y=32..56
// Items: y=60 step=22, max 6 items → last y=60+5*22=170, col bottom=188, viewBox 210 ✓
//
// Each item row: centered label text — NO side-by-side split → no overflow risk
// ─────────────────────────────────────────────────────────────────────────────
function RecallSVG() {
  const CW = 154
  const cols = [
    {
      x: 12,  color: C.blue,   title: '5 Types',
      items: ['int', 'float', 'str', 'bool', 'None'],
    },
    {
      x: 177, color: C.green,  title: 'Key Functions',
      items: ['type(x)', 'isinstance(x, T)', 'id(x)', 'int() / float()', 'bool(val)'],
    },
    {
      x: 342, color: C.orange, title: 'Falsy Values',
      items: ['0   and   0.0', '"" empty string', '[] / {} / set()', 'None', 'False'],
    },
  ]

  return (
    <svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" className="w-full">
      {/* dark background */}
      <rect x="0" y="0" width="520" height="210" rx="10"
        fill={C.dark} stroke={C.border} strokeWidth="1.5"/>

      {/* title */}
      <text x="260" y="22" textAnchor="middle" fill={C.white}
        fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">
        ⚡  Quick Recall — Variables &amp; Types
      </text>

      {cols.map((col) => {
        const cx = col.x + CW / 2    // center x of column
        return (
          <g key={col.title}>
            {/* column background rect: y=30 h=172 → bottom=202, within 210 ✓ */}
            <rect x={col.x} y="30" width={CW} height="172" rx="6"
              fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>

            {/* column header */}
            <rect x={col.x + 2} y="30" width={CW - 4} height="26" rx="6"
              fill={col.color} fillOpacity=".15"/>
            <text x={cx} y="47" textAnchor="middle" fill={col.color}
              fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">{col.title}</text>

            {/* items — centered label per row */}
            {col.items.map((item, i) => {
              const y = 60 + i * 22   // 60, 82, 104, 126, 148, (170)
              return (
                <g key={item}>
                  {i % 2 === 0 && (
                    <rect x={col.x + 4} y={y - 1} width={CW - 8} height="20" rx="3"
                      fill={col.color} fillOpacity=".10"/>
                  )}
                  <text x={cx} y={y + 13} textAnchor="middle" fill={col.color}
                    fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">{item}</text>
                </g>
              )
            })}
          </g>
        )
      })}
    </svg>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function PythonBasics0() {
  return (
    <NoteLayout
      title="Variables aur Dynamic Typing"
      phase="0A"
      subtitle="int, float, str, bool, None — Python ka variable model"
    >

      {/* ── 1. Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — Variable = Label, Not Box">
        <div className="space-y-4">
          {/* Analogy text — full width, NO 50/50 grid constraint */}
          <div className="bg-surface-card border-l-4 border-primary rounded-xl p-5 space-y-2">
            <p className="text-[11px] uppercase tracking-widest text-primary font-heading font-semibold">Mental Model</p>
            <p className="text-content font-body leading-note text-sm">
              <span className="text-visual-2 font-bold">Java/C mein:</span> variable ek <em>typed box</em> hai —
              pehle <code className="font-mono text-xs">int x</code> box banao, sirf int hi fit hoga.
            </p>
            <p className="text-content font-body leading-note text-sm">
              <span className="text-visual-1 font-bold">Python mein:</span> variable ek <em>label (tag)</em> hai —
              kisi bhi object pe chipka do. <code className="font-mono text-xs">x = 42</code> matlab:
              "42 ka int object banao, uspe 'x' ka label lagao."
            </p>
            <p className="text-content font-body leading-note text-sm">
              <code className="font-mono text-xs">x = "hello"</code> karo toh label uth ke naye str object pe ja lagta hai —
              42 wala object <span className="text-visual-3 font-bold">memory mein wahi rehta hai</span> (GC baad mein saaf karta hai).
            </p>
          </div>
          {/* SVG — full width, no grid constraint */}
          <div className="rounded-xl bg-surface-visual p-4">
            <LabelVsBoxSVG />
          </div>
        </div>
      </SectionBlock>

      {/* ── 2. 5 Basic Types ── */}
      <SectionBlock icon="📦" title="5 Built-in Types">
        <div className="space-y-4">
          <div className="rounded-xl bg-surface-visual p-4">
            <TypesOverviewSVG />
          </div>
          <CodeBlock
            language="python"
            filename="types_demo.py"
            code={`# int — arbitrary precision, no overflow
x = 42
x = 0xFF          # hex = 255
x = 0b1010        # binary = 10
x = 2 ** 1000     # works fine!

# float — IEEE 754, watch out for precision
pi = 3.14159
print(0.1 + 0.2)  # 0.30000000000000004  ← not 0.3!

# str — immutable, unicode
name = "Divyesh"
raw  = r"C:\\Users\\path"    # raw string
multi = """Line 1
Line 2"""

# bool — subclass of int
print(True + True)     # 2
print(isinstance(True, int))  # True!

# None — null equivalent, singleton
result = None
print(result is None)  # True`}
          />
        </div>
      </SectionBlock>

      {/* ── 3. Dynamic Typing ── */}
      <SectionBlock icon="🔄" title="Dynamic Typing — Type Runtime Pe Decide Hoti Hai">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="dynamic_typing.py"
            code={`x = 42           # type: int
x = "hello"      # type: str   ← no error!
x = 3.14         # type: float
x = [1, 2, 3]    # type: list

# type() — runtime pe check karo
print(type(42))          # <class 'int'>
print(type("hi"))        # <class 'str'>
print(type(None))        # <class 'NoneType'>

# isinstance() — preferred over type()
print(isinstance(42, int))            # True
print(isinstance(True, int))          # True  ← bool is subclass!
print(isinstance(42, (int, float)))   # True — tuple check`}
          />
          <InfoBox type="info" title="Duck Typing">
            Python ka philosophy: type ki jagah <em>behavior</em> pe focus karo.
            Agar object ke paas <code className="font-mono text-xs">.read()</code> hai, file ki tarah use karo — actual type se matlab nahi.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 4. Truthy / Falsy ── */}
      <SectionBlock icon="✅" title="Truthy aur Falsy Values">
        <div className="space-y-4">
          <div className="rounded-xl bg-surface-visual p-4">
            <TruthySVG />
          </div>
          <CodeBlock
            language="python"
            filename="truthy_falsy.py"
            code={`# Falsy values — if mein False treat hote hain
if 0:        pass   # falsy
if "":       pass   # falsy
if []:       pass   # falsy — empty list
if None:     pass   # falsy

# Truthy — sab non-empty, non-zero
if "0":      pass   # truthy! non-empty string
if [0]:      pass   # truthy! non-empty list
if -1:       pass   # truthy! zero ke alawa sab int

# Practical pattern
name = input("Name: ")
if name:                    # "" check — Pythonic
    print(f"Hello, {name}")
else:
    print("Name nahi diya")`}
          />
        </div>
      </SectionBlock>

      {/* ── 5. id() and is vs == ── */}
      <SectionBlock icon="🔬" title="id() aur is vs ==">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="identity.py"
            code={`# id() = memory address (unique per object per lifetime)
x = 42
y = 42
print(id(x) == id(y))  # True — Python caches small ints (-5 to 256)

a = [1, 2, 3]
b = [1, 2, 3]
print(id(a) == id(b))  # False — two separate list objects

b = a                  # b points to SAME object
a.append(4)
print(b)               # [1, 2, 3, 4]  ← b bhi change!

# is vs ==
print(a is b)          # True  — same object in memory
print(a == b)          # True  — same value

x = None
print(x is None)       # ✓ correct way
print(x == None)       # works but avoid — == can be overridden`}
          />
          <InfoBox type="warn" title="is vs == — most common trap">
            <code className="font-mono text-xs">is</code> = same object in memory (id equal).
            <code className="font-mono text-xs"> == </code> = same value. <br/>
            <strong>Rule:</strong> <code className="font-mono text-xs">None</code> ke liye hamesha <code className="font-mono text-xs">x is None</code> use karo.
            Numbers aur strings ke liye <code className="font-mono text-xs">==</code> use karo.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 6. Traps ── */}
      <SectionBlock icon="⚠️" title="Common Traps">
        <TrapsTable rows={[
          {
            level: 'S',
            mistake: '0.1 + 0.2 == 0.3 → True assume karna',
            kyun: 'IEEE 754 float — actual result is 0.30000000000000004',
            fix: 'math.isclose(a, b) ya decimal.Decimal use karo',
          },
          {
            level: 'S',
            mistake: 'x == None likhna',
            kyun: 'Custom __eq__ override kar sakta hai — unpredictable behavior',
            fix: 'x is None — always use "is" for None checks',
          },
          {
            level: 'M',
            mistake: 'isinstance(True, int) False lagta hai',
            kyun: 'bool int ka subclass hai — isinstance(True, int) = True!',
            fix: 'type(x) is bool use karo agar exact type chahiye',
          },
          {
            level: 'M',
            mistake: '"False" string ko falsy manna',
            kyun: '"False" non-empty string hai → truthy! bool("False") = True',
            fix: 's == "False" — string explicitly compare karo',
          },
          {
            level: 'B',
            mistake: 'Small int identity pe depend karna',
            kyun: '-5 to 256 cached hain, baaki nahi — id(300) is id(300) unreliable',
            fix: 'int values compare karne ke liye == use karo, is nahi',
          },
        ]} />
      </SectionBlock>

      {/* ── 7. Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'type(x)',             value: 'runtime pe type check karo' },
          { label: 'isinstance(x, T)',    value: 'preferred — handles inheritance' },
          { label: 'id(x)',              value: 'memory address = object identity' },
          { label: 'x is None',          value: 'None check — hamesha is use karo' },
          { label: 'a, b = b, a',        value: 'Pythonic swap — no temp variable' },
          { label: 'first, *rest = lst', value: 'extended unpacking (Python 3+)' },
          { label: 'n := expr',          value: 'walrus — assign karo aur return karo' },
          { label: '2 ** 1000',          value: 'int no overflow — arbitrary precision' },
          { label: 'del x',             value: 'label remove karo — object GC pe' },
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
          to={{
            title: 'Operators — arithmetic, comparison, logical, bitwise',
            description: 'In variables ko use karo — operations aur expressions',
            href: '/roadmap/topic/python-basics/1',
          }}
        />
      </SectionBlock>

    </NoteLayout>
  )
}
