import {
  NoteLayout,
  SectionBlock,
  MentalModel,
  CodeBlock,
  TrapBox,
  Cheatsheet,
  QuickRecall,
  ConnectedTopics,
  InfoBox,
  CompareBlock,
} from "../../components/notes";

const C = {
  purple: "#7c3aed",
  purpleLight: "#a78bfa",
  blue: "#3b82f6",
  blueLight: "#93c5fd",
  green: "#10b981",
  greenLight: "#6ee7b7",
  orange: "#f59e0b",
  orangeLight: "#fcd34d",
  red: "#ef4444",
  redLight: "#fca5a5",
  muted: "#94a3b8",
  text: "#e2e8f0",
  white: "#f8fafc",
  border: "#0f3460",
};

function ClosureSVG() {
  return (
    <svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes clCapture { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
          @keyframes clGlow { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.35} }
          .cl-line{stroke-dasharray:200;animation:clCapture 2s .5s ease both}
          .cl-glow{animation:clGlow 2s ease-in-out infinite}
        `}</style>
        <marker id="clArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
        <marker id="clGrn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Closure = Function + Captured Variables</text>
      <rect x="15" y="32" width="490" height="235" rx="12" fill={C.blue} fillOpacity=".05" stroke={C.blue} strokeWidth="1.5"/>
      <text x="30" y="52" fill={C.blueLight} fontSize="11" fontWeight="700">outer() scope</text>
      <rect x="30" y="58" width="155" height="38" rx="6" fill={C.blue} fillOpacity=".2" stroke={C.blue} strokeWidth="1"/>
      <text x="107" y="73" textAnchor="middle" fill={C.blueLight} fontSize="11">multiplier = 3</text>
      <text x="107" y="88" textAnchor="middle" fill={C.muted} fontSize="9">cell object</text>
      <rect x="195" y="32" width="310" height="165" rx="10" fill={C.purple} fillOpacity=".06" stroke={C.purple} strokeWidth="1.5"/>
      <text x="210" y="52" fill={C.purpleLight} fontSize="11" fontWeight="700">inner() — the closure</text>
      <rect x="210" y="58" width="285" height="50" rx="6" fill="#0f172a"/>
      <text x="220" y="76" fill={C.muted} fontSize="9" fontFamily="monospace">def inner(x):</text>
      <text x="220" y="91" fill={C.text} fontSize="9" fontFamily="monospace">{'    return x * multiplier  # ← captured'}</text>
      <text x="220" y="106" fill={C.muted} fontSize="9" fontFamily="monospace">{'                           # from outer'}</text>
      <line x1="187" y1="76" x2="208" y2="76" stroke={C.orange} strokeWidth="2" className="cl-line" markerEnd="url(#clArr)"/>
      <text x="197" y="68" textAnchor="middle" fill={C.orange} fontSize="9">cell ref</text>
      <rect x="210" y="120" width="285" height="65" rx="6" fill={C.purple} fillOpacity=".15" stroke={C.purple} strokeWidth="1.5" className="cl-glow"/>
      <text x="352" y="140" textAnchor="middle" fill={C.purpleLight} fontSize="11" fontWeight="700">Closure Object (heap)</text>
      <text x="220" y="160" fill={C.text} fontSize="10">__code__  : inner function bytecode</text>
      <text x="220" y="177" fill={C.text} fontSize="10">__closure__: (cell(multiplier=3),)</text>
      <text x="30" y="228" fill={C.muted} fontSize="11">outer() returns inner:</text>
      <line x1="30" y1="238" x2="207" y2="238" stroke={C.green} strokeWidth="1.5" markerEnd="url(#clGrn)"/>
      <text x="30" y="258" fill={C.greenLight} fontSize="10">double = make_multiplier(2)</text>
      <text x="30" y="272" fill={C.greenLight} fontSize="10">double(5)  # → 10 (even after outer() returned!)</text>
    </svg>
  );
}

function LateBindingSVG() {
  return (
    <svg viewBox="0 0 520 235" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes lbBlink { 0%,100%{opacity:1} 50%{opacity:.3} }
          .lb-blink{animation:lbBlink 1s ease-in-out infinite}
        `}</style>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Late Binding Trap</text>
      <rect x="15" y="30" width="230" height="195" rx="8" fill={C.red} fillOpacity=".05" stroke={C.red} strokeWidth="1.5"/>
      <text x="130" y="50" textAnchor="middle" fill={C.redLight} fontSize="11" fontWeight="700">TRAP — Late Binding</text>
      <rect x="25" y="57" width="210" height="95" rx="6" fill="#0f172a"/>
      <text x="35" y="75" fill={C.muted} fontSize="9" fontFamily="monospace">funcs = []</text>
      <text x="35" y="91" fill={C.muted} fontSize="9" fontFamily="monospace">for i in range(3):</text>
      <text x="35" y="107" fill={C.text} fontSize="9" fontFamily="monospace">{'    funcs.append(lambda: i)'}</text>
      <text x="35" y="123" fill={C.muted} fontSize="9" fontFamily="monospace">{'    # captures i variable'}</text>
      <text x="35" y="139" fill={C.muted} fontSize="9" fontFamily="monospace">{'    # NOT its current value!'}</text>
      <text x="25" y="170" fill={C.muted} fontSize="10">Results (after loop i=2):</text>
      <text x="25" y="187" fill={C.redLight} fontSize="11" fontWeight="700" className="lb-blink">funcs[0]() → 2  ← NOT 0!</text>
      <text x="25" y="203" fill={C.redLight} fontSize="11">funcs[1]() → 2  ← NOT 1!</text>
      <text x="25" y="219" fill={C.redLight} fontSize="11">funcs[2]() → 2</text>
      <rect x="270" y="30" width="240" height="195" rx="8" fill={C.green} fillOpacity=".05" stroke={C.green} strokeWidth="1.5"/>
      <text x="390" y="50" textAnchor="middle" fill={C.greenLight} fontSize="11" fontWeight="700">FIX — Default Arg Capture</text>
      <rect x="280" y="57" width="220" height="95" rx="6" fill="#0f172a"/>
      <text x="290" y="75" fill={C.muted} fontSize="9" fontFamily="monospace">funcs = []</text>
      <text x="290" y="91" fill={C.muted} fontSize="9" fontFamily="monospace">for i in range(3):</text>
      <text x="290" y="107" fill={C.text} fontSize="9" fontFamily="monospace">{'    funcs.append(lambda x=i: x)'}</text>
      <text x="290" y="123" fill={C.greenLight} fontSize="9" fontFamily="monospace">{'    # x=i evaluated NOW'}</text>
      <text x="290" y="139" fill={C.greenLight} fontSize="9" fontFamily="monospace">{'    # value captured!'}</text>
      <text x="280" y="170" fill={C.muted} fontSize="10">Results:</text>
      <text x="280" y="187" fill={C.greenLight} fontSize="11">funcs[0]() → 0  ✓</text>
      <text x="280" y="203" fill={C.greenLight} fontSize="11">funcs[1]() → 1  ✓</text>
      <text x="280" y="219" fill={C.greenLight} fontSize="11">funcs[2]() → 2  ✓</text>
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Closures</text>
      {[
        { x: 15, color: C.purple, title: "Closure = ?", lines: ["Function + __closure__", "Cell objects mein vars", "Heap pe live rakhta hai"] },
        { x: 185, color: C.orange, title: "Late Binding", lines: ["Variable capture, value nahi", "Loop mein lambda trap", "Fix: default arg x=i"] },
        { x: 355, color: C.green, title: "Use Cases", lines: ["Counter / state", "Factory functions", "Partial application"] },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="110" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700">{col.title}</text>
          {col.lines.map((l, j) => (
            <text key={j} x={col.x + 10} y={68 + j * 22} fill={C.text} fontSize="10">{`→ ${l}`}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function PythonFunctions6() {
  return (
    <NoteLayout title="Closures & Late Binding" phase="0A" subtitle="Functions jo bahar ke variables yaad rakhte hain — aur ek common trap">

      <SectionBlock icon="🧠" title="Mental Model — Closure Kya Hai?">
        <MentalModel
          analogy="Closure = function + backpack. Backpack mein outer scope ke variables hain. Outer function khatam ho jata hai par backpack survive karta hai. Jab bhi call karo — backpack ke vars use hote hain."
          diagram={<ClosureSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="💻" title="Closure — Basic Pattern">
        <CodeBlock code={`def make_multiplier(factor):
    def multiply(x):
        return x * factor   # factor captured from outer
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)

double(5)   # 10 — factor=2 yaad hai
triple(5)   # 15 — factor=3 yaad hai

# Closure inspect karo:
print(double.__closure__)            # (<cell at 0x...>,)
print(double.__closure__[0].cell_contents)  # 2`} />
      </SectionBlock>

      <SectionBlock icon="🔢" title="Mutable State — nonlocal">
        <div className="space-y-4">
          <InfoBox type="info" title="Modify karna = nonlocal chahiye">
            Closure variable ko modify karna hai to nonlocal declare karo. Warna sirf read hoga — write karne ki koshish → UnboundLocalError.
          </InfoBox>
          <CodeBlock code={`def make_counter(start=0):
    count = start

    def increment(by=1):
        nonlocal count
        count += by
        return count

    def reset():
        nonlocal count
        count = start

    def get():
        return count   # read — no nonlocal needed

    return increment, reset, get

inc, reset, get = make_counter(10)
inc()     # 11
inc(5)    # 16
reset()
get()     # 10`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🪤" title="Late Binding Trap">
        <div className="space-y-4">
          <LateBindingSVG />
          <TrapBox
            number={1}
            name="Loop + Lambda Late Binding"
            level="M"
            question="funcs = [lambda: i for i in range(3)] — funcs[0]() kya return karega?"
            wrongAnswer="0 — loop ka pehla value"
            correctAnswer="2 — sab functions same i variable share karte hain, jo loop ke end mein 2 hai"
            why="Closure captures variable reference, not value. Loop end tak i=2 ho jaata hai. Jab bhi call karo — woh i dekhta hai jo tab 2 hai."
            fix={<CodeBlock code={`# Fix: default arg se value capture karo
funcs = [lambda x=i: x for i in range(3)]
[f() for f in funcs]  # [0, 1, 2] ✓

# Alternative: factory function
def make_func(n):
    def f():
        return n
    return f
funcs = [make_func(i) for i in range(3)]`} />}
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="🏭" title="Factory Pattern — Real Use Case">
        <CodeBlock code={`# HTTP route handler factory
def make_handler(route, method="GET"):
    def handler(request):
        print(f"{method} {route}: {request}")
    return handler

get_users  = make_handler("/api/users")
post_order = make_handler("/api/orders", method="POST")

# Partial application (functools.partial ki tarah)
def multiply(x, y):
    return x * y

def partial(func, *fixed_args):
    def wrapper(*args, **kwargs):
        return func(*fixed_args, *args, **kwargs)
    return wrapper

double = partial(multiply, 2)
double(5)   # 10
double(10)  # 20`} />
      </SectionBlock>

      <SectionBlock icon="⚖️" title="Closure vs Class">
        <CompareBlock
          bad={<CodeBlock code={`# Closure: simple, single responsibility
def make_adder(n):
    def add(x):
        return x + n
    return add

# Jab sirf ek behavior ho — closure use karo`} />}
          good={<CodeBlock code={`# Class: multiple behaviors, complex state
class Adder:
    def __init__(self, n):
        self.n = n
    def add(self, x):
        return x + self.n
    def multiply(self, x):
        return x * self.n

# Multiple methods ho to class use karo`} />}
          badLabel="Closure — simple cases"
          goodLabel="Class — complex cases"
        />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "Closure", value: "Function + captured cell objects" },
          { label: "Capture", value: "Variable reference, value nahi" },
          { label: "Late binding", value: "Loop lambda trap → use x=i default" },
          { label: "Modify captured", value: "nonlocal keyword chahiye" },
          { label: "__closure__", value: "Tuple of cell objects" },
          { label: "Use case", value: "Counter, factory, partial application" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Scope & LEGB", description: "Closures LEGB pe rely karte hain", href: "/roadmap/topic/python-functions/4" }}
          to={{ title: "Decorators", description: "Decorators = closures ka use case", href: "/roadmap/topic/python-decorators/0" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
