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
  StepsBlock,
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

function StackFrameSVG() {
  return (
    <svg viewBox="0 0 520 290" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes sfPush { 0%{opacity:0;transform:translateY(20px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes sfBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
          .sf1{animation:sfPush .5s .2s ease both}
          .sf2{animation:sfPush .5s .7s ease both}
          .sf3{animation:sfPush .5s 1.2s ease both}
          .sf-arr{animation:sfBounce 1.5s ease-in-out infinite}
        `}</style>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Call Stack — Har Function Call = Naya Frame</text>
      <text x="30" y="52" fill={C.muted} fontSize="11">CALL STACK</text>
      <rect x="20" y="58" width="220" height="220" rx="8" fill="none" stroke={C.border} strokeWidth="1.5" strokeDasharray="4"/>
      <g className="sf3">
        <rect x="35" y="68" width="190" height="55" rx="6" fill={C.purple} fillOpacity=".2" stroke={C.purple} strokeWidth="1.5"/>
        <text x="130" y="90" textAnchor="middle" fill={C.purpleLight} fontSize="11" fontWeight="700">inner()</text>
        <text x="50" y="108" fill={C.text} fontSize="10">{`x = 10, local_var = "hello"`}</text>
      </g>
      <g className="sf2">
        <rect x="35" y="133" width="190" height="55" rx="6" fill={C.blue} fillOpacity=".2" stroke={C.blue} strokeWidth="1.5"/>
        <text x="130" y="153" textAnchor="middle" fill={C.blueLight} fontSize="11" fontWeight="700">outer()</text>
        <text x="50" y="171" fill={C.text} fontSize="10">{`a = 5, b = 20`}</text>
      </g>
      <g className="sf1">
        <rect x="35" y="198" width="190" height="55" rx="6" fill={C.green} fillOpacity=".2" stroke={C.green} strokeWidth="1.5"/>
        <text x="130" y="218" textAnchor="middle" fill={C.greenLight} fontSize="11" fontWeight="700">{'<module>'} (global)</text>
        <text x="50" y="236" fill={C.text} fontSize="10">{`result, PI = 3.14`}</text>
      </g>
      <g className="sf-arr">
        <text x="300" y="95" fill={C.purpleLight} fontSize="11">● inner() — top frame</text>
        <text x="300" y="110" fill={C.muted} fontSize="10">Running now</text>
      </g>
      <text x="300" y="158" fill={C.blueLight} fontSize="11">● outer() — suspended</text>
      <text x="300" y="173" fill={C.muted} fontSize="10">Waiting for inner</text>
      <text x="300" y="223" fill={C.greenLight} fontSize="11">● module — always first</text>
      <text x="300" y="270" fill={C.orange} fontSize="10">Return → frame popped off stack</text>
    </svg>
  );
}

function ArgPassingSVG() {
  return (
    <svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes apFade { 0%{opacity:0;transform:translateY(10px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes apPulse { 0%,100%{stroke-opacity:.5} 50%{stroke-opacity:1} }
          .ap1{animation:apFade .6s .3s ease both}
          .ap2{animation:apFade .6s .8s ease both}
          .ap-line{animation:apPulse 2s ease-in-out infinite}
        `}</style>
        <marker id="apArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
        <marker id="apGrn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Pass by Object Reference</text>
      <text x="80" y="45" textAnchor="middle" fill={C.muted} fontSize="10">CALLER</text>
      <rect x="20" y="52" width="120" height="90" rx="8" fill="#16213e" stroke={C.border} strokeWidth="1.5"/>
      <text x="80" y="75" textAnchor="middle" fill={C.blueLight} fontSize="11">my_list</text>
      <rect x="30" y="82" width="100" height="25" rx="5" fill={C.blue} fillOpacity=".2" stroke={C.blue} strokeWidth="1"/>
      <text x="80" y="99" textAnchor="middle" fill={C.text} fontSize="10">ref → 0xABCD</text>
      <text x="80" y="130" textAnchor="middle" fill={C.muted} fontSize="9">Heap: [1,2,3]</text>
      <text x="80" y="143" textAnchor="middle" fill={C.muted} fontSize="9">id: 0xABCD</text>
      <line x1="142" y1="95" x2="190" y2="95" stroke={C.orange} strokeWidth="2" className="ap-line" markerEnd="url(#apArr)"/>
      <text x="166" y="87" textAnchor="middle" fill={C.orange} fontSize="9">ref copy</text>
      <text x="265" y="45" textAnchor="middle" fill={C.muted} fontSize="10">FUNCTION</text>
      <rect x="195" y="52" width="120" height="90" rx="8" fill="#16213e" stroke={C.border} strokeWidth="1.5"/>
      <text x="255" y="75" textAnchor="middle" fill={C.purpleLight} fontSize="11">lst (param)</text>
      <rect x="205" y="82" width="100" height="25" rx="5" fill={C.purple} fillOpacity=".2" stroke={C.purple} strokeWidth="1"/>
      <text x="255" y="99" textAnchor="middle" fill={C.text} fontSize="10">ref → 0xABCD</text>
      <g className="ap1">
        <rect x="340" y="52" width="170" height="130" rx="8" fill="#16213e" stroke={C.border} strokeWidth="1.5"/>
        <text x="425" y="75" textAnchor="middle" fill={C.muted} fontSize="11">HEAP OBJECT</text>
        <rect x="355" y="85" width="140" height="35" rx="5" fill={C.green} fillOpacity=".15" stroke={C.green} strokeWidth="1.5"/>
        <text x="425" y="107" textAnchor="middle" fill={C.greenLight} fontSize="12">[1, 2, 3]</text>
        <text x="355" y="140" fill={C.orange} fontSize="10">lst.append(4)</text>
        <text x="355" y="157" fill={C.muted} fontSize="9">↓ mutates same object</text>
        <rect x="355" y="163" width="140" height="25" rx="5" fill={C.orange} fillOpacity=".15" stroke={C.orange} strokeWidth="1"/>
        <text x="425" y="180" textAnchor="middle" fill={C.orangeLight} fontSize="11">[1, 2, 3, 4]</text>
      </g>
      <line x1="317" y1="107" x2="338" y2="107" stroke={C.green} strokeWidth="1.5" markerEnd="url(#apGrn)"/>
      <text x="260" y="215" textAnchor="middle" fill={C.orange} fontSize="10">Dono my_list aur lst → same object. Mutation = caller bhi dekhta hai!</text>
    </svg>
  );
}

function ParamTypesSVG() {
  return (
    <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes ptSlide { 0%{opacity:0;transform:translateX(-10px)} 100%{opacity:1;transform:translateX(0)} }
          .pt1{animation:ptSlide .4s .1s ease both}
          .pt2{animation:ptSlide .4s .3s ease both}
          .pt3{animation:ptSlide .4s .5s ease both}
          .pt4{animation:ptSlide .4s .7s ease both}
          .pt5{animation:ptSlide .4s .9s ease both}
        `}</style>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Parameter Types — Correct Order</text>
      <rect x="15" y="30" width="490" height="38" rx="8" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="30" y="54" fill={C.muted} fontSize="11" fontFamily="monospace">def f(</text>
      <g className="pt1"><text x="78" y="54" fill="#f87171" fontSize="11" fontFamily="monospace">a, b</text></g>
      <text x="110" y="54" fill={C.muted} fontSize="11" fontFamily="monospace">/,</text>
      <g className="pt2"><text x="128" y="54" fill="#fb923c" fontSize="11" fontFamily="monospace">c, d=5</text></g>
      <text x="183" y="54" fill={C.muted} fontSize="11" fontFamily="monospace">,</text>
      <g className="pt3"><text x="191" y="54" fill="#facc15" fontSize="11" fontFamily="monospace">*args</text></g>
      <text x="228" y="54" fill={C.muted} fontSize="11" fontFamily="monospace">,</text>
      <g className="pt4"><text x="236" y="54" fill="#4ade80" fontSize="11" fontFamily="monospace">e, f=10</text></g>
      <text x="288" y="54" fill={C.muted} fontSize="11" fontFamily="monospace">,</text>
      <g className="pt5"><text x="296" y="54" fill="#60a5fa" fontSize="11" fontFamily="monospace">**kwargs</text></g>
      <text x="348" y="54" fill={C.muted} fontSize="11" fontFamily="monospace">):</text>
      {[
        { x: 15, color: "#f87171", label: "Positional-only", desc: "/ se pehle — must be positional" },
        { x: 135, color: "#fb923c", label: "Pos or Keyword", desc: "Default — dono allowed" },
        { x: 255, color: "#facc15", label: "*args (tuple)", desc: "Extra positionals pack" },
        { x: 15, color: "#4ade80", label: "Keyword-only", desc: "* ke baad — must be keyword" },
        { x: 135, color: "#60a5fa", label: "**kwargs (dict)", desc: "Extra keywords pack" },
      ].map((item, i) => (
        <g key={i} transform={`translate(${item.x}, ${i < 3 ? 100 : 155})`}>
          <rect x="0" y="0" width="108" height="38" rx="6" fill={item.color} fillOpacity=".08" stroke={item.color} strokeWidth="1.2"/>
          <text x="8" y="15" fill={item.color} fontSize="10" fontWeight="700">{item.label}</text>
          <text x="8" y="30" fill={C.muted} fontSize="9">{item.desc}</text>
        </g>
      ))}
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Functions</text>
      {[
        { x: 15, color: C.purple, title: "Stack Frame", lines: ["Har call = naya frame", "Return = frame destroyed", "Recursive = frames stack"] },
        { x: 185, color: C.blue, title: "Pass by Ref", lines: ["Reference copy hota hai", "Mutation → caller dekhta", "Rebind → caller nahi dekhta"] },
        { x: 355, color: C.orange, title: "Param Types", lines: ["/ = positional-only", "* = keyword-only boundary", "*args tuple, **kwargs dict"] },
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

export default function PythonFunctions0() {
  return (
    <NoteLayout title="Functions — Internals & Parameters" phase="0A" subtitle="Stack frames, argument passing, aur parameter types ka poora picture">

      <SectionBlock icon="🧠" title="Mental Model — Function Call Kya Hota Hai?">
        <MentalModel
          analogy="Function call = Naya kamra (stack frame) khulta hai. Apna saman (local vars) andar. Kaam khatam → kamra band, saman gaya. Recursive call = multiple kamre ek ke upar ek."
          diagram={<StackFrameSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="📦" title="Pass by Object Reference">
        <div className="space-y-4">
          <MentalModel
            analogy="Python mein reference ki copy pass hoti hai — not value, not pointer. Dono same object ko point karte hain. Mutation = dono dekhta. Rebind = sirf function andar."
            diagram={<ArgPassingSVG />}
          />
          <CompareBlock
            bad={<CodeBlock code={`# Rebinding — caller nahi dekhta
def f(lst):
    lst = lst + [4]  # new object create
    print(lst)       # [1,2,3,4]

my = [1,2,3]
f(my)
print(my)   # [1,2,3] — unchanged!`} />}
            good={<CodeBlock code={`# Mutation — caller dekhta hai
def f(lst):
    lst.append(4)  # same object modify
    print(lst)     # [1,2,3,4]

my = [1,2,3]
f(my)
print(my)   # [1,2,3,4] — changed!`} />}
            badLabel="Rebinding (no effect on caller)"
            goodLabel="Mutation (caller sees change)"
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="🪤" title="Default Argument Trap">
        <TrapBox
          number={1}
          name="Mutable Default Argument"
          level="M"
          question="def f(a, b=[]) mein kya problem hai?"
          wrongAnswer="Default list empty hai — har call fresh hogi"
          correctAnswer="Same list object reuse hota hai — accumulate hoti rehti hai!"
          why="Default arguments define time pe ek baar evaluate hote hain. Same object har call mein reuse hota hai. Production mein data leak aur state corruption hoti hai."
          fix={<CompareBlock
            bad={<CodeBlock code={`def add_item(item, lst=[]):
    lst.append(item)
    return lst
add_item('a')  # ['a']
add_item('b')  # ['a', 'b'] ← TRAP!`} />}
            good={<CodeBlock code={`def add_item(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst
add_item('b')  # ['b'] ← correct`} />}
            badLabel="Mutable default — NEVER"
            goodLabel="None sentinel — safe"
          />}
        />
      </SectionBlock>

      <SectionBlock icon="📝" title="Parameter Types — Complete Order">
        <div className="space-y-4">
          <ParamTypesSVG />
          <CodeBlock code={`def f(a, b, /, c, d=5, *args, e, f=10, **kwargs):
    pass

# a, b → positional-only (/ se pehle)
# c, d → positional ya keyword dono
# *args → extra positionals → tuple
# e, f → keyword-only (* ke baad)
# **kwargs → extra keywords → dict

# Valid:
f(1, 2, 3)              # a=1, b=2, c=3
f(1, 2, c=3)            # same
f(1, 2, 3, 4, 5, e=6)  # *args=(4,5), e=6

# INVALID:
f(a=1, b=2, c=3)        # TypeError: a,b positional-only`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="⭐" title="/ aur * Markers">
        <div className="space-y-4">
          <InfoBox type="tip" title="/ — Positional-Only">
            / marker: isse pehle ke params sirf positional se pass kar sakte ho. len(), abs() jaise builtins yahi use karte hain. API design: parameter naam change karo bina callers break kiye.
          </InfoBox>
          <InfoBox type="tip" title="* — Keyword-Only Boundary">
            * ke baad ke params sirf keyword se pass hote hain. Safe API design: configuration flags keyword-only rakhte hain — accidental positional order bugs prevent hote hain.
          </InfoBox>
          <CodeBlock code={`# / — positional-only
def greet(name, /, greeting="Hello"):
    return f"{greeting}, {name}!"
greet("Divyesh")           # OK
greet(name="Divyesh")      # TypeError!

# * — keyword-only
def create_user(name, email, *, role="user", active=True):
    pass
create_user("D", "d@ex.com", role="admin")  # OK
create_user("D", "d@ex.com", "admin")        # TypeError!`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="📦" title="*args aur **kwargs">
        <div className="space-y-4">
          <CodeBlock code={`def total(*args):
    return sum(args)
total(1, 2, 3)    # args = (1, 2, 3) → 6

def log(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}={v}")
log(user="Divyesh", action="login", ip="1.2.3.4")`} />
          <StepsBlock steps={[
            { title: "Positional arguments assign karo", description: "Left to right — positional params fill karo" },
            { title: "Keyword arguments assign karo", description: "Named params match karo" },
            { title: "Defaults fill karo", description: "Missing params ke liye default values" },
            { title: "Remaining positionals → *args", description: "Extra positionals tuple mein pack" },
            { title: "Remaining keywords → **kwargs", description: "Extra keywords dict mein pack" },
            { title: "Error check", description: "Missing required, duplicate, unexpected keyword" },
          ]} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🪤" title="Common TypeError Traps">
        <div className="space-y-4">
          <TrapBox
            number={2}
            name="Duplicate Assignment"
            level="B"
            question="f(1, a=2) kya hoga?"
            wrongAnswer="a=2 override karega"
            correctAnswer="TypeError: got multiple values for argument 'a'"
            why="Positional 1 already 'a' ko assign kar chuka hai, phir keyword a=2 duplicate ho gaya."
          />
          <TrapBox
            number={3}
            name="Positional After Keyword"
            level="B"
            question="f(a=1, 2) valid hai?"
            wrongAnswer="Haan, works"
            correctAnswer="SyntaxError: positional argument follows keyword argument"
            why="Python syntax rule: keywords ke baad positionals nahi aa sakte."
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "Stack frame", value: "Har call = naya frame, return = destroy" },
          { label: "Pass-by-ref", value: "Reference copy → mutation visible, rebind nahi" },
          { label: "Mutable default", value: "NEVER — use None sentinel" },
          { label: "/ marker", value: "Positional-only params" },
          { label: "* marker", value: "Keyword-only boundary" },
          { label: "*args", value: "Extra positionals → tuple" },
          { label: "**kwargs", value: "Extra keywords → dict" },
          { label: "Binding order", value: "positional → keyword → defaults → *args → **kwargs" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Memory Model", description: "Mutation vs rebinding — functions mein apply hota hai", href: "/roadmap/topic/python-basics/8" }}
          to={{ title: "Scope & LEGB", description: "Variable lookup order — functions ke andar", href: "/roadmap/topic/python-functions/4" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
