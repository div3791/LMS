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
  muted: "#94a3b8",
  text: "#e2e8f0",
  white: "#f8fafc",
  border: "#0f3460",
};

function HOFMapSVG() {
  return (
    <svg viewBox="0 0 520 195" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes hofFlow { 0%{opacity:0;transform:translateX(-10px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes hofPipe { 0%,100%{stroke-opacity:.5} 50%{stroke-opacity:1} }
          .hf1{animation:hofFlow .4s .2s ease both}
          .hf2{animation:hofFlow .4s .5s ease both}
          .hf3{animation:hofFlow .4s .8s ease both}
          .hf-pipe{animation:hofPipe 2s ease-in-out infinite}
        `}</style>
        <marker id="hofArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">map() — Transform Each Element</text>
      <text x="20" y="45" fill={C.muted} fontSize="10">INPUT</text>
      {[1, 2, 3, 4].map((n, i) => (
        <g key={n} className="hf1">
          <rect x={20 + i * 50} y="52" width="42" height="32" rx="6" fill={C.blue} fillOpacity=".2" stroke={C.blue} strokeWidth="1.2"/>
          <text x={41 + i * 50} y="72" textAnchor="middle" fill={C.blueLight} fontSize="14" fontWeight="700">{n}</text>
        </g>
      ))}
      <rect x="248" y="47" width="78" height="42" rx="8" fill={C.purple} fillOpacity=".3" stroke={C.purple} strokeWidth="2"/>
      <text x="287" y="65" textAnchor="middle" fill={C.purpleLight} fontSize="12" fontWeight="700">f(x)</text>
      <text x="287" y="80" textAnchor="middle" fill={C.muted} fontSize="10">x * 2</text>
      <line x1="222" y1="68" x2="246" y2="68" stroke={C.green} strokeWidth="2" className="hf-pipe" markerEnd="url(#hofArr)"/>
      <line x1="328" y1="68" x2="355" y2="68" stroke={C.green} strokeWidth="2" className="hf-pipe" markerEnd="url(#hofArr)"/>
      <text x="362" y="45" fill={C.muted} fontSize="10">OUTPUT</text>
      {[2, 4, 6, 8].map((n, i) => (
        <g key={n} className="hf2">
          <rect x={362 + i * 38} y="52" width="32" height="32" rx="6" fill={C.green} fillOpacity=".2" stroke={C.green} strokeWidth="1.2"/>
          <text x={378 + i * 38} y="72" textAnchor="middle" fill={C.greenLight} fontSize="13" fontWeight="700">{n}</text>
        </g>
      ))}
      <rect x="15" y="105" width="490" height="80" rx="8" fill="#0f172a" stroke={C.border} strokeWidth="1"/>
      <text x="25" y="124" fill={C.muted} fontSize="10" fontFamily="monospace">map(lambda x: x*2, [1,2,3,4])</text>
      <text x="25" y="142" fill={C.orangeLight} fontSize="10" fontFamily="monospace">→ lazy iterator (not a list!)</text>
      <text x="25" y="158" fill={C.muted} fontSize="10" fontFamily="monospace">list(map(...))  # force evaluate</text>
      <text x="265" y="124" fill={C.greenLight} fontSize="10" fontFamily="monospace">Pythonic equivalent:</text>
      <text x="265" y="142" fill={C.text} fontSize="10" fontFamily="monospace">{'[x*2 for x in [1,2,3,4]]'}</text>
      <text x="265" y="158" fill={C.muted} fontSize="10">← prefer this</text>
    </svg>
  );
}

function FilterReduceSVG() {
  return (
    <svg viewBox="0 0 520 225" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes frAnim { 0%{opacity:0;transform:translateY(-5px)} 100%{opacity:1;transform:translateY(0)} }
          .fra1{animation:frAnim .5s .2s ease both}
          .fra2{animation:frAnim .5s .5s ease both}
        `}</style>
        <marker id="frArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
      </defs>
      <text x="130" y="20" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">filter()</text>
      <rect x="15" y="28" width="230" height="90" rx="8" fill={C.blue} fillOpacity=".06" stroke={C.blue} strokeWidth="1.5"/>
      {[1, 2, 3, 4, 5, 6].map((n, i) => (
        <g key={n} className="fra1">
          <rect x={20 + i * 36} y="35" width="28" height="26" rx="5"
            fill={n % 2 === 0 ? C.green : C.purple}
            fillOpacity={n % 2 === 0 ? 0.3 : 0.1}
            stroke={n % 2 === 0 ? C.green : C.purple}
            strokeWidth="1"/>
          <text x={34 + i * 36} y="52" textAnchor="middle"
            fill={n % 2 === 0 ? C.greenLight : C.muted}
            fontSize="12">{n}</text>
        </g>
      ))}
      <text x="130" y="88" textAnchor="middle" fill={C.muted} fontSize="9">lambda x: x % 2 == 0</text>
      <text x="130" y="106" textAnchor="middle" fill={C.greenLight} fontSize="10">→ [2, 4, 6] (even only)</text>
      <text x="390" y="20" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">reduce()</text>
      <rect x="270" y="28" width="240" height="90" rx="8" fill={C.orange} fillOpacity=".06" stroke={C.orange} strokeWidth="1.5"/>
      <rect x="280" y="35" width="55" height="26" rx="5" fill={C.orange} fillOpacity=".2" stroke={C.orange} strokeWidth="1"/>
      <text x="307" y="52" textAnchor="middle" fill={C.orangeLight} fontSize="11">acc=1</text>
      <line x1="337" y1="48" x2="352" y2="48" stroke={C.orange} strokeWidth="1.5" markerEnd="url(#frArr)"/>
      <rect x="354" y="35" width="55" height="26" rx="5" fill={C.orange} fillOpacity=".2" stroke={C.orange} strokeWidth="1"/>
      <text x="381" y="52" textAnchor="middle" fill={C.orangeLight} fontSize="11">×2=2</text>
      <line x1="411" y1="48" x2="426" y2="48" stroke={C.orange} strokeWidth="1.5" markerEnd="url(#frArr)"/>
      <rect x="428" y="35" width="55" height="26" rx="5" fill={C.orange} fillOpacity=".3" stroke={C.orange} strokeWidth="1.5"/>
      <text x="455" y="52" textAnchor="middle" fill={C.orangeLight} fontSize="11">×3=6</text>
      <text x="390" y="88" textAnchor="middle" fill={C.muted} fontSize="9">lambda acc, x: acc * x</text>
      <text x="390" y="106" textAnchor="middle" fill={C.orangeLight} fontSize="10">→ 6 (1*2*3)</text>
      <text x="260" y="140" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">zip() — Parallel Iteration</text>
      <rect x="15" y="148" width="490" height="68" rx="8" fill={C.purple} fillOpacity=".06" stroke={C.purple} strokeWidth="1.5"/>
      {[["a","1"],["b","2"],["c","3"]].map(([l,n],i) => (
        <g key={i} className="fra2">
          <rect x={20 + i * 120} y="155" width="110" height="52" rx="6" fill={C.purple} fillOpacity=".1" stroke={C.purple} strokeWidth="1"/>
          <text x={75 + i * 120} y="176" textAnchor="middle" fill={C.purpleLight} fontSize="12">{`('${l}', ${n})`}</text>
          <text x={75 + i * 120} y="196" textAnchor="middle" fill={C.muted} fontSize="10">tuple pair</text>
        </g>
      ))}
      <text x="395" y="185" fill={C.muted} fontSize="10">{'zip("abc", [1,2,3])'}</text>
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Higher-Order Functions</text>
      {[
        { x: 15, color: C.green, title: "map/filter", lines: ["map: transform each", "filter: keep True ones", "Both return lazy iterators"] },
        { x: 185, color: C.orange, title: "reduce/zip", lines: ["reduce: fold to single value", "zip: pair from iterables", "zip shortest tak chalta hai"] },
        { x: 355, color: C.purple, title: "any/all/sorted", lines: ["any: ek bhi True?", "all: sab True?", "sorted(key=...) = most common"] },
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

export default function PythonFunctions8() {
  return (
    <NoteLayout title="Higher-Order Functions" phase="0A" subtitle="map, filter, reduce, zip, any, all — functional style mein sochna">

      <SectionBlock icon="🧠" title="Mental Model — HOF Kya Hai?">
        <MentalModel
          analogy="HOF = function jo dusri function leta ya deta hai. Thekedar (HOF) ko kaam karna nahi aata — worker (lambda/def) ko bhejta hai kaam pe. map = worker ko har item pe bhejo."
          diagram={<HOFMapSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🔵" title="filter, reduce, zip — Visualization">
        <FilterReduceSVG />
      </SectionBlock>

      <SectionBlock icon="🗺️" title="map() — Transform">
        <div className="space-y-4">
          <CodeBlock code={`nums = [1, 2, 3, 4, 5]

# map — lazy iterator
doubled = map(lambda x: x * 2, nums)
list(doubled)   # [2, 4, 6, 8, 10]

# Multiple iterables
a = [1, 2, 3]
b = [10, 20, 30]
list(map(lambda x, y: x + y, a, b))  # [11, 22, 33]

# Prefer: list comprehension (Pythonic)
[x * 2 for x in nums]   # cleaner!

# But map faster jab function already defined
import math
list(map(math.sqrt, nums))`} />
          <InfoBox type="tip" title="map() lazy hai">
            map() evaluate tab hoga jab consume karoge — list() se force karo ya for loop mein iterate karo.
          </InfoBox>
        </div>
      </SectionBlock>

      <SectionBlock icon="🔍" title="filter() — Select">
        <CodeBlock code={`nums = [1, 2, 3, 4, 5, 6, 7, 8]

evens = list(filter(lambda x: x % 2 == 0, nums))
# [2, 4, 6, 8]

# None as function — falsy values hata do
data = [0, 1, "", "hello", None, [], [1,2]]
truthy = list(filter(None, data))
# [1, 'hello', [1, 2]]

# Prefer: comprehension
[x for x in nums if x % 2 == 0]`} />
      </SectionBlock>

      <SectionBlock icon="♻️" title="reduce() — Fold to Single Value">
        <div className="space-y-4">
          <CodeBlock code={`from functools import reduce

nums = [1, 2, 3, 4, 5]

total   = reduce(lambda acc, x: acc + x, nums)  # 15
product = reduce(lambda acc, x: acc * x, nums)  # 120
maximum = reduce(lambda a, b: a if a > b else b, nums)  # 5

# With initial value
reduce(lambda acc, x: acc + x, nums, 100)  # 115

# Build dict
pairs = [("a", 1), ("b", 2)]
reduce(lambda d, kv: {**d, kv[0]: kv[1]}, pairs, {})`} />
          <TrapBox
            number={1}
            name="reduce — Alag Module Mein"
            level="B"
            question="reduce() directly call kar sakte hain?"
            wrongAnswer="Haan — Python builtin hai"
            correctAnswer="Python 3 mein builtin nahi — from functools import reduce"
            why="Python 2 mein reduce builtin tha. Python 3 mein functools module mein shift kar diya. Bhoologe to NameError."
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="🤐" title="zip() — Parallel Iteration">
        <CodeBlock code={`names  = ["Divyesh", "Raj", "Priya"]
scores = [95, 87, 92]

# zip to dict
result = dict(zip(names, scores))
# {'Divyesh': 95, 'Raj': 87, 'Priya': 92}

# zip stops at SHORTEST!
zip([1,2,3], [4,5])   # → (1,4), (2,5) only

# zip_longest
from itertools import zip_longest
list(zip_longest([1,2,3], [4,5], fillvalue=0))
# [(1, 4), (2, 5), (3, 0)]

# Unzip (transpose)
pairs = [(1,"a"), (2,"b"), (3,"c")]
nums, letters = zip(*pairs)`} />
      </SectionBlock>

      <SectionBlock icon="✅" title="any, all, enumerate">
        <CodeBlock code={`# any — ek bhi True?
any([False, False, True])   # True
any([])                      # False (empty = no True found)

# all — sab True?
all([True, True, True])    # True
all([])                     # True (vacuously true!)

# Production use
has_admin = any(u.role == "admin" for u in users)
all_valid = all(item.price > 0 for item in cart)

# enumerate — index + value saath
for i, fruit in enumerate(["apple", "banana"]):
    print(f"{i}: {fruit}")   # 0: apple, 1: banana

# 1-indexed
for i, fruit in enumerate(fruits, start=1):
    print(f"{i}: {fruit}")

# min/max with key
words = ["hello", "hi", "hey"]
min(words, key=len)   # 'hi'`} />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "map(f, it)", value: "Transform each → lazy iterator" },
          { label: "filter(f, it)", value: "Keep where f returns True" },
          { label: "reduce(f, it)", value: "Fold to single value (functools)" },
          { label: "zip(*its)", value: "Pair elements, shortest tak" },
          { label: "any(it)", value: "Ek bhi True → True" },
          { label: "all(it)", value: "Sab True → True (empty=True!)" },
          { label: "enumerate(it, start=0)", value: "Index + value pairs" },
          { label: "sorted(key=f)", value: "Custom sort by key function" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Lambda", description: "Lambda = HOF ka perfect companion", href: "/roadmap/topic/python-functions/7" }}
          to={{ title: "Generators", description: "map/filter lazy iterators use karte hain", href: "/roadmap/topic/python-generators/0" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
