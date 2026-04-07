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
  muted: "#94a3b8",
  text: "#e2e8f0",
  white: "#f8fafc",
  border: "#0f3460",
};

function LEGBSvg() {
  return (
    <svg viewBox="0 0 520 295" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes legbDown { 0%{opacity:0;transform:translateY(-8px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes legbGlow { 0%,100%{filter:drop-shadow(0 0 0px #10b981)} 50%{filter:drop-shadow(0 0 5px #10b981)} }
          .lb1{animation:legbDown .5s .1s ease both}
          .lb2{animation:legbDown .5s .4s ease both}
          .lb3{animation:legbDown .5s .7s ease both}
          .lb4{animation:legbDown .5s 1.0s ease both}
          .lb-found{animation:legbGlow 2s 1.5s ease-in-out infinite}
        `}</style>
        <marker id="legbArr" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
          <path d="M2,0 L6,0 L4,6 Z" fill={C.orange}/>
        </marker>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">LEGB — Variable Lookup Order</text>
      <line x1="65" y1="40" x2="65" y2="268" stroke={C.orange} strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#legbArr)"/>
      <text x="14" y="160" fill={C.orange} fontSize="10" transform="rotate(-90,14,160)">Search Order</text>
      {[
        { cls: "lb1", letter: "L", color: C.purpleLight, bg: C.purple, y: 36, title: "Local", sub: "Function ke andar defined" },
        { cls: "lb2", letter: "E", color: C.blueLight, bg: C.blue, y: 102, title: "Enclosing", sub: "Outer function scope (nested)" },
        { cls: "lb3", letter: "G", color: C.greenLight, bg: C.green, y: 168, title: "Global", sub: "Module-level variables" },
        { cls: "lb4", letter: "B", color: C.orangeLight, bg: C.orange, y: 234, title: "Built-in", sub: "Python builtins: len, print..." },
      ].map((item) => (
        <g key={item.letter} className={item.cls}>
          <rect x="80" y={item.y} width="390" height="55" rx="8" fill={item.bg} fillOpacity=".1" stroke={item.bg} strokeWidth="1.5"/>
          <rect x="88" y={item.y + 8} width="36" height="36" rx="6" fill={item.bg} fillOpacity=".3"/>
          <text x="106" y={item.y + 31} textAnchor="middle" fill={item.color} fontSize="18" fontWeight="800">{item.letter}</text>
          <text x="138" y={item.y + 22} fill={item.color} fontSize="12" fontWeight="700">{item.title}</text>
          <text x="138" y={item.y + 38} fill={C.muted} fontSize="10">{item.sub}</text>
        </g>
      ))}
      <g className="lb-found">
        <rect x="388" y="40" width="76" height="22" rx="5" fill={C.green} fillOpacity=".2" stroke={C.green} strokeWidth="1"/>
        <text x="426" y="55" textAnchor="middle" fill={C.greenLight} fontSize="10">✓ Found → use</text>
      </g>
      <text x="260" y="290" textAnchor="middle" fill={C.muted} fontSize="10">NameError — kahin bhi nahi mila</text>
    </svg>
  );
}

function ScopeNestSVG() {
  return (
    <svg viewBox="0 0 520 255" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes snRipple { 0%,100%{opacity:.4} 50%{opacity:1} }
          .sn-b{animation:snRipple 3s ease-in-out infinite}
          .sn-g{animation:snRipple 3s .5s ease-in-out infinite}
          .sn-e{animation:snRipple 3s 1s ease-in-out infinite}
          .sn-l{animation:snRipple 3s 1.5s ease-in-out infinite}
        `}</style>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Nested Scopes — Onion Model</text>
      <g className="sn-b">
        <rect x="15" y="30" width="490" height="215" rx="16" fill="none" stroke={C.orange} strokeWidth="1.5" strokeDasharray="6"/>
        <text x="30" y="52" fill={C.orangeLight} fontSize="11" fontWeight="700">Built-in scope — len, print, range, type...</text>
      </g>
      <g className="sn-g">
        <rect x="35" y="62" width="450" height="165" rx="12" fill="none" stroke={C.green} strokeWidth="1.5"/>
        <text x="50" y="82" fill={C.greenLight} fontSize="11" fontWeight="700">Global scope (module)</text>
        <text x="50" y="97" fill={C.muted} fontSize="10">PI = 3.14, config = {'{}'}...</text>
      </g>
      <g className="sn-e">
        <rect x="65" y="108" width="380" height="105" rx="10" fill="none" stroke={C.blue} strokeWidth="1.5"/>
        <text x="82" y="128" fill={C.blueLight} fontSize="11" fontWeight="700">Enclosing scope (outer function)</text>
        <text x="82" y="143" fill={C.muted} fontSize="10">multiplier = 3</text>
      </g>
      <g className="sn-l">
        <rect x="100" y="160" width="300" height="45" rx="8" fill={C.purple} fillOpacity=".1" stroke={C.purple} strokeWidth="1.5"/>
        <text x="250" y="181" textAnchor="middle" fill={C.purpleLight} fontSize="11" fontWeight="700">Local scope (inner function)</text>
        <text x="250" y="197" textAnchor="middle" fill={C.muted} fontSize="10">result = x * multiplier</text>
      </g>
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Scope</text>
      {[
        { x: 15, color: C.purple, title: "LEGB Order", lines: ["L → E → G → B", "Local pehle, Built-in last", "NameError = kahin nahi mila"] },
        { x: 185, color: C.orange, title: "global / nonlocal", lines: ["global: module var write", "nonlocal: enclosing var write", "Read is always free (LEGB)"] },
        { x: 355, color: C.green, title: "Common Traps", lines: ["global nahi → UnboundLocalError", "nonlocal nahi → closure stuck", "Shadowing builtins = danger"] },
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

export default function PythonFunctions4() {
  return (
    <NoteLayout title="Scope & LEGB Rules" phase="0A" subtitle="Variable lookup — Python kaise dhundhta hai naam">

      <SectionBlock icon="🧠" title="Mental Model — Scope Kya Hai?">
        <MentalModel
          analogy="Ghar ke andar dhundho (local) → drawing room (enclosing) → bahar colony (global) → dictionary (built-in). Pehle mila wahi use karo. Nahi mila = NameError."
          diagram={<LEGBSvg />}
        />
      </SectionBlock>

      <SectionBlock icon="🔵" title="Nested Scopes — Onion Model">
        <ScopeNestSVG />
      </SectionBlock>

      <SectionBlock icon="💻" title="LEGB — Code Mein Dekho">
        <CodeBlock code={`PI = 3.14              # Global

def outer():
    multiplier = 3       # Enclosing (for inner)

    def inner():
        result = 10      # Local
        print(result)      # L: found local ✓
        print(multiplier)  # E: found enclosing ✓
        print(PI)          # G: found global ✓
        print(len)         # B: found built-in ✓

    inner()

outer()`} />
      </SectionBlock>

      <SectionBlock icon="🌍" title="global Keyword">
        <div className="space-y-4">
          <InfoBox type="info" title="Read is always free">
            LEGB se automatic read hota hai. Write/modify karna hai to explicitly declare karo. Write karne ki koshish bina declare kiye → Python local maan leta hai → UnboundLocalError.
          </InfoBox>
          <CompareBlock
            bad={<CodeBlock code={`count = 0

def increment():
    count = count + 1  # UnboundLocalError!
    # Python ne count ko local maan liya
    # Assignment dekh ke — par assign se
    # pehle read kiya → error`} />}
            good={<CodeBlock code={`count = 0

def increment():
    global count       # explicitly declare
    count = count + 1  # ab OK

increment()
print(count)  # 1`} />}
            badLabel="Without global — UnboundLocalError"
            goodLabel="With global — works"
          />
          <TrapBox
            number={1}
            name="global — Production Mein Avoid Karo"
            level="S"
            question="global variables use karna theek hai?"
            wrongAnswer="Haan — convenient hai global state"
            correctAnswer="Avoid karo — hidden coupling, test mushkil, bugs dhundhna mushkil"
            why="Global mutable state = shared state across functions. Race conditions, unexpected mutations, testing nightmare. Class ya function parameters use karo."
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="🔒" title="nonlocal Keyword">
        <div className="space-y-4">
          <InfoBox type="tip" title="nonlocal = enclosing variable modify karna">
            Closures mein counter ya state banate waqt use hota hai. nonlocal nahi doge to Python sirf read kar sakta hai — write karne ki koshish → UnboundLocalError.
          </InfoBox>
          <CodeBlock code={`def make_counter():
    count = 0

    def increment():
        nonlocal count    # enclosing 'count' modify karo
        count += 1
        return count

    return increment

counter = make_counter()
counter()  # 1
counter()  # 2
counter()  # 3

# Without nonlocal:
def broken():
    count = 0
    def inc():
        count += 1      # UnboundLocalError!
    return inc`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🪤" title="Scope Traps">
        <div className="space-y-4">
          <TrapBox
            number={2}
            name="UnboundLocalError"
            level="M"
            question="Yeh code kya print karega? x = 10; def f(): print(x); x = 20; f()"
            wrongAnswer="10 — global x padhega pehle"
            correctAnswer="UnboundLocalError — x ko local maan liya kyunki x = 20 function mein hai"
            why="Python function parse karta hai — agar assignment hai to variable ko local mark kar deta hai puri function ke liye, even before the assignment line."
          />
          <TrapBox
            number={3}
            name="Builtin Shadowing"
            level="B"
            question="def f(): len = 5; print(len([1,2,3])) — kya hoga?"
            wrongAnswer="3 — len() call hoga"
            correctAnswer="TypeError: 'int' object is not callable — local len ne builtin ko shadow kiya"
            why="Local variable built-in ko hide kar deta hai. Production mein list, dict, type jaise common names use karna dangerous hai."
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "LEGB", value: "Local → Enclosing → Global → Built-in" },
          { label: "Read", value: "Always free — LEGB se auto" },
          { label: "Write global", value: "global keyword declare karo" },
          { label: "Write enclosing", value: "nonlocal keyword declare karo" },
          { label: "NameError", value: "Kahin bhi nahi mila" },
          { label: "UnboundLocalError", value: "Local mana but assign pehle nahi hua" },
          { label: "Shadow", value: "Local var built-in ya global ko hide kar sakta" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Functions Basics", description: "Stack frames aur parameter types", href: "/roadmap/topic/python-functions/0" }}
          to={{ title: "Closures", description: "Closures LEGB + nonlocal pe depend karte hain", href: "/roadmap/topic/python-functions/6" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
