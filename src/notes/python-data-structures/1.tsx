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

function TupleVsListSVG() {
  return (
    <svg viewBox="0 0 520 205" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes tvlLock { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
          .tvl-lock{animation:tvlLock 2s ease-in-out infinite;transform-origin:center}
        `}</style>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Tuple vs List — Key Differences</text>
      <rect x="15" y="30" width="240" height="28" rx="6" fill={C.green} fillOpacity=".15" stroke={C.green} strokeWidth="1.5"/>
      <text x="135" y="48" textAnchor="middle" fill={C.greenLight} fontSize="12" fontWeight="700">Tuple  (immutable 🔒)</text>
      <rect x="268" y="30" width="240" height="28" rx="6" fill={C.blue} fillOpacity=".15" stroke={C.blue} strokeWidth="1.5"/>
      <text x="388" y="48" textAnchor="middle" fill={C.blueLight} fontSize="12" fontWeight="700">List  (mutable)</text>
      {[
        { label: "Hashable", tuple: "✓ Yes — dict/set key OK", list: "✗ Unhashable type error" },
        { label: "Memory", tuple: "Smaller — fixed size", list: "Larger — over-allocated" },
        { label: "Speed", tuple: "Faster iteration", list: "Slightly slower" },
        { label: "Syntax", tuple: "(1, 2, 3) or 1, 2, 3", list: "[1, 2, 3]" },
        { label: "Methods", tuple: "count(), index() only", list: "append, pop, sort, insert..." },
      ].map((row, i) => (
        <g key={row.label}>
          <text x="7" y={82 + i * 23} fill={C.muted} fontSize="10" fontWeight="700">{row.label}</text>
          <rect x="15" y={70 + i * 23} width="240" height="19" rx="4" fill={row.tuple.startsWith("✓") ? C.green : C.purple} fillOpacity=".08"/>
          <text x="22" y={83 + i * 23} fill={row.tuple.startsWith("✓") ? C.greenLight : C.text} fontSize="10">{row.tuple}</text>
          <rect x="268" y={70 + i * 23} width="240" height="19" rx="4" fill={row.list.startsWith("✗") ? C.red : C.blue} fillOpacity=".08"/>
          <text x="275" y={83 + i * 23} fill={row.list.startsWith("✗") ? C.redLight : C.text} fontSize="10">{row.list}</text>
        </g>
      ))}
    </svg>
  );
}

function HashingSVG() {
  return (
    <svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes hfFlow { 0%{stroke-dashoffset:150} 100%{stroke-dashoffset:0} }
          .hf-line{stroke-dasharray:150;animation:hfFlow 1.5s .3s ease both}
        `}</style>
        <marker id="hfArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
        <marker id="hfPurp" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.purple}/>
        </marker>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Tuple as Dict Key — Hashability</text>
      <rect x="20" y="35" width="140" height="38" rx="8" fill={C.green} fillOpacity=".15" stroke={C.green} strokeWidth="1.5"/>
      <text x="90" y="58" textAnchor="middle" fill={C.greenLight} fontSize="12">{`(37.5, 118.9)`}</text>
      <rect x="198" y="35" width="120" height="38" rx="8" fill={C.orange} fillOpacity=".15" stroke={C.orange} strokeWidth="1.5"/>
      <text x="258" y="52" textAnchor="middle" fill={C.orangeLight} fontSize="11">hash()</text>
      <text x="258" y="67" textAnchor="middle" fill={C.muted} fontSize="10">deterministic int</text>
      <rect x="358" y="30" width="150" height="48" rx="8" fill={C.purple} fillOpacity=".15" stroke={C.purple} strokeWidth="1.5"/>
      <text x="433" y="51" textAnchor="middle" fill={C.purpleLight} fontSize="11">location_db</text>
      <text x="433" y="67" textAnchor="middle" fill={C.muted} fontSize="10">key: (lat, lng)</text>
      <line x1="162" y1="54" x2="196" y2="54" stroke={C.orange} strokeWidth="2" className="hf-line" markerEnd="url(#hfArr)"/>
      <line x1="320" y1="54" x2="356" y2="54" stroke={C.purple} strokeWidth="2" className="hf-line" markerEnd="url(#hfPurp)"/>
      <rect x="20" y="100" width="490" height="75" rx="8" fill="#0f172a"/>
      <text x="30" y="120" fill={C.muted} fontSize="10" fontFamily="monospace">location_db = {"{}"}</text>
      <text x="30" y="137" fill={C.text} fontSize="10" fontFamily="monospace">{'location_db[(37.5, 118.9)] = "Mumbai"'}</text>
      <text x="30" y="154" fill={C.text} fontSize="10" fontFamily="monospace">{'location_db[(28.6, 77.2)] = "Delhi"'}</text>
      <text x="30" y="171" fill={C.greenLight} fontSize="10" fontFamily="monospace">{'# Works! Tuples are hashable (if all elements hashable)'}</text>
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 145" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="145" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Tuples</text>
      {[
        { x: 15, color: C.green, title: "Use Tuples When", lines: ["Fixed structure data", "Dict/set key chahiye", "Immutability guarantee"] },
        { x: 185, color: C.purple, title: "Packing/Unpacking", lines: ["a, b = 1, 2", "a, *rest = [1,2,3,4]", "return x, y  (auto pack)"] },
        { x: 355, color: C.orange, title: "Gotcha", lines: ["(1) is int, (1,) tuple", "Inner list = mutable!", "namedtuple for readability"] },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="100" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700">{col.title}</text>
          {col.lines.map((l, j) => (
            <text key={j} x={col.x + 10} y={68 + j * 22} fill={C.text} fontSize="10">{`→ ${l}`}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function PythonDataStructures1() {
  return (
    <NoteLayout title="Tuples — Immutability & Use Cases" phase="0A" subtitle="Kab list nahi, tuple chahiye — hashability aur packing ka game">

      <SectionBlock icon="🧠" title="Mental Model — Tuple Kya Hai?">
        <MentalModel
          analogy="Tuple = PAN card. Date of birth, gender — yeh change nahi hote. List = todo list — add, remove, edit hota rehta hai. Data fix hai to tuple, dynamic hai to list."
          diagram={<TupleVsListSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🪤" title="Tuple Syntax — Ek Critical Gotcha">
        <div className="space-y-4">
          <TrapBox
            number={1}
            name="(1) is int, (1,) is tuple!"
            level="B"
            question="x = (1) kya hai — int ya tuple?"
            wrongAnswer="Tuple — parentheses use kiye hain"
            correctAnswer="Int! Parentheses = grouping expression. Trailing comma se tuple banta hai."
            why="Python mein parentheses sirf grouping ke liye hain. Tuple ka actual marker comma hai, parentheses nahi."
            fix={<CodeBlock code={`wrong = (42)    # int — 42
right = (42,)   # tuple — (42,)
also  = 42,     # tuple bina parens ke!
empty = ()      # empty tuple OK`} />}
          />
          <CodeBlock code={`# Tuple creation
t1 = (1, 2, 3)        # normal
t2 = 1, 2, 3           # packing — also tuple!
t3 = tuple([1, 2, 3])  # from list
t4 = tuple("abc")      # ('a', 'b', 'c')`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="📦" title="Packing & Unpacking">
        <CodeBlock code={`# Basic unpacking
x, y, z = (1, 2, 3)

# Swap — Python way (no temp!)
a, b = 1, 2
a, b = b, a    # a=2, b=1

# Extended unpacking *
first, *rest = [1, 2, 3, 4, 5]
# first=1, rest=[2,3,4,5]

*init, last = [1, 2, 3, 4, 5]
# init=[1,2,3,4], last=5

first, *mid, last = [1, 2, 3, 4, 5]
# first=1, mid=[2,3,4], last=5

# Multiple return values (auto tuple)
def min_max(lst):
    return min(lst), max(lst)  # returns tuple
lo, hi = min_max([3, 1, 4, 1, 5])

# Nested unpacking
(a, b), c = (1, 2), 3
matrix = [(1, 2), (3, 4)]
for x, y in matrix:
    print(f"x={x}, y={y}")`} />
      </SectionBlock>

      <SectionBlock icon="🔑" title="Hashability — Dict Key ke Roop Mein">
        <div className="space-y-4">
          <HashingSVG />
          <InfoBox type="warn" title="Tuple mein mutable ho to unhashable!">
            Tuple hashable hai sirf tab jab uske sab elements hashable hon. Tuple containing list → TypeError: unhashable type: 'list'
          </InfoBox>
          <CodeBlock code={`# Valid dict/set keys
visited = set()
visited.add((3, 5))
visited.add((1, 2))
(3, 5) in visited  # O(1)!

# TRAP: tuple with list inside
bad_key = ([1, 2], 3)
hash(bad_key)  # TypeError!

# VALID: tuple of tuples
grid = {(0,0): "start", (5,5): "end"}`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🔒" title="Immutability — Kitna Pakka?">
        <CompareBlock
          bad={<CodeBlock code={`t = (1, [2, 3], 4)
# Tuple khud immutable
t[0] = 99       # TypeError!
t[1] = [5, 6]   # TypeError!

# Reference nahi badal sakte`} />}
          good={<CodeBlock code={`t = (1, [2, 3], 4)
# Par inner list mutable hai!
t[1].append(99)
print(t)  # (1, [2, 3, 99], 4) ← changed!

# Tuple refs fixed, inner object state nahi`} />}
          badLabel="Tuple elements replace nahi hote"
          goodLabel="Inner mutable object change ho sakta hai"
        />
      </SectionBlock>

      <SectionBlock icon="🏷️" title="namedtuple — Self-Documenting">
        <CodeBlock code={`from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)

# Access — both work
p[0]    # 3 (index)
p.x     # 3 (attribute) ← more readable!

# Unpack like regular tuple
x, y = p

# Use as dict key — hashable
cache = {}
cache[p] = "computed_value"

# _replace — immutable "update" (new object)
p2 = p._replace(x=10)   # Point(x=10, y=4)

# _asdict
p._asdict()  # {'x': 3, 'y': 4}`} />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "(1,)", value: "Single element tuple — trailing comma!" },
          { label: "a, b = t", value: "Unpacking" },
          { label: "a, *rest = t", value: "Extended unpacking" },
          { label: "Hashable", value: "If all elements hashable" },
          { label: "Dict key", value: "Coordinates, pairs, compound keys" },
          { label: "namedtuple", value: "Self-documenting, readability++" },
          { label: "Immutability", value: "Refs fixed, not inner object state" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Lists", description: "Mutable counterpart", href: "/roadmap/topic/python-data-structures/0" }}
          to={{ title: "Dictionaries", description: "Tuple as dict key use case", href: "/roadmap/topic/python-data-structures/2" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
