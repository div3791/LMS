import {
  NoteLayout,
  SectionBlock,
  MentalModel,
  CodeBlock,
  TrapBox,
  Cheatsheet,
  QuickRecall,
  ConnectedTopics,
  HoodBox,
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

function HashTableSVG() {
  return (
    <svg viewBox="0 0 520 255" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes htCalc { 0%{opacity:0;transform:translateX(-10px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes htSlot { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.4} }
          .ht1{animation:htCalc .5s .1s ease both}
          .ht2{animation:htCalc .5s .4s ease both}
          .ht3{animation:htCalc .5s .7s ease both}
          .ht-slot{animation:htSlot 2s ease-in-out infinite}
        `}</style>
        <marker id="htArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange} />
        </marker>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Dict — Hash Table Internals</text>
      <text x="80" y="45" textAnchor="middle" fill={C.muted} fontSize="11">Keys</text>
      {[{ key: '"name"', y: 53 }, { key: '"age"', y: 103 }, { key: '"city"', y: 153 }].map((item) => (
        <g key={item.key} className="ht1">
          <rect x="15" y={item.y} width="100" height="32" rx="6" fill={C.blue} fillOpacity=".15" stroke={C.blue} strokeWidth="1.5" />
          <text x="65" y={item.y + 20} textAnchor="middle" fill={C.blueLight} fontSize="11" fontFamily="monospace">{item.key}</text>
        </g>
      ))}
      <text x="195" y="45" textAnchor="middle" fill={C.muted} fontSize="11">hash()</text>
      {[53, 103, 153].map((y) => (
        <g key={y} className="ht2">
          <rect x="137" y={y} width="80" height="32" rx="6" fill={C.orange} fillOpacity=".15" stroke={C.orange} strokeWidth="1.2" />
          <text x="177" y={y + 14} textAnchor="middle" fill={C.orangeLight} fontSize="9">-7235...</text>
          <text x="177" y={y + 27} textAnchor="middle" fill={C.muted} fontSize="9">% slots</text>
          <line x1="117" y1={y + 16} x2="135" y2={y + 16} stroke={C.orange} strokeWidth="1.5" markerEnd="url(#htArr)" />
        </g>
      ))}
      <text x="332" y="45" textAnchor="middle" fill={C.muted} fontSize="11">Hash Table (slots)</text>
      {[
        { slot: "0", y: 53, empty: true },
        { slot: "1", y: 78, key: '"city"', val: '"Mumbai"', color: C.green },
        { slot: "2", y: 103, key: '"age"', val: "22", color: C.purple },
        { slot: "3", y: 128, empty: true },
        { slot: "4", y: 153, key: '"name"', val: '"Divyesh"', color: C.blue },
        { slot: "5", y: 178, empty: true },
      ].map((item) => (
        <g key={item.slot} className={item.empty ? "" : "ht-slot"}>
          <rect x="237" y={item.y} width="270" height="22" rx="4"
            fill={item.empty ? "#1e293b" : (item.color as string)}
            fillOpacity={item.empty ? 0.3 : 0.15}
            stroke={item.empty ? C.muted : (item.color as string)}
            strokeWidth={item.empty ? 0.5 : 1.2} />
          <text x="248" y={item.y + 15} fill={C.muted} fontSize="10">[{item.slot}]</text>
          {!item.empty && (
            <text x="270" y={item.y + 15} fill={item.color as string} fontSize="10" fontFamily="monospace">{item.key}: {item.val}</text>
          )}
        </g>
      ))}
      <line x1="219" y1="69" x2="235" y2="166" stroke={C.blue} strokeWidth="1" strokeDasharray="3" markerEnd="url(#htArr)" />
      <line x1="219" y1="119" x2="235" y2="114" stroke={C.purple} strokeWidth="1" strokeDasharray="3" markerEnd="url(#htArr)" />
      <line x1="219" y1="169" x2="235" y2="89" stroke={C.green} strokeWidth="1" strokeDasharray="3" markerEnd="url(#htArr)" />
      <text x="260" y="230" textAnchor="middle" fill={C.orange} fontSize="10">O(1) lookup: hash(key) → slot index → compare key → value</text>
    </svg>
  );
}

function DictViewsSVG() {
  return (
    <svg viewBox="0 0 520 165" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes dvUpdate { 0%,70%,100%{opacity:1} 85%{opacity:.3} }
          .dv-update{animation:dvUpdate 3s ease-in-out infinite}
        `}</style>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Dict Views — Live Window into Dict</text>
      <rect x="15" y="30" width="125" height="125" rx="8" fill={C.purple} fillOpacity=".08" stroke={C.purple} strokeWidth="1.5" />
      <text x="77" y="50" textAnchor="middle" fill={C.purpleLight} fontSize="11" fontWeight="700">dict d</text>
      <text x="77" y="68" textAnchor="middle" fill={C.text} fontSize="10">"a": 1</text>
      <text x="77" y="84" textAnchor="middle" fill={C.text} fontSize="10">"b": 2</text>
      <text x="77" y="100" textAnchor="middle" fill={C.text} fontSize="10">"c": 3</text>
      <text x="77" y="145" textAnchor="middle" fill={C.muted} fontSize="9">d["d"] = 4</text>
      {[
        { x: 158, color: C.blue, title: "d.keys()", desc: "dict_keys(['a','b','c'])" },
        { x: 293, color: C.green, title: "d.values()", desc: "dict_values([1, 2, 3])" },
        { x: 388, color: C.orange, title: "d.items()", desc: "dict_items([('a',1)...])" },
      ].map((item) => (
        <g key={item.title} className="dv-update">
          <rect x={item.x - 60} y="30" width="120" height="125" rx="8" fill={item.color} fillOpacity=".08" stroke={item.color} strokeWidth="1.5" />
          <text x={item.x} y="50" textAnchor="middle" fill={item.color} fontSize="10" fontWeight="700">{item.title}</text>
          <text x={item.x - 55} y="70" fill={C.text} fontSize="8.5" fontFamily="monospace">{item.desc}</text>
          <rect x={item.x - 50} y="82" width="95" height="20" rx="4" fill={item.color} fillOpacity=".2" />
          <text x={item.x} y="96" textAnchor="middle" fill={item.color} fontSize="10">Live view!</text>
          <text x={item.x - 55} y="135" fill={C.muted} fontSize="9">Not a copy.</text>
          <text x={item.x - 55} y="148" fill={C.muted} fontSize="9">View object.</text>
        </g>
      ))}
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5" />
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Dicts</text>
      {[
        { x: 15, color: C.orange, title: "Hash Table", lines: ["O(1) avg lookup", "Keys must be hashable", "Collision → probing"] },
        { x: 185, color: C.blue, title: "Views", lines: ["keys/values/items", "Live — dict change dikh jaata", "Iterate saath mat badlo"] },
        { x: 355, color: C.green, title: "Patterns", lines: ["get() over []", "setdefault() for groups", "Counter: d[k] = d.get(k,0)+1"] },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="110" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2" />
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700">{col.title}</text>
          {col.lines.map((l, j) => (
            <text key={j} x={col.x + 10} y={68 + j * 22} fill={C.text} fontSize="10">{`→ ${l}`}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function PythonDataStructures2() {
  return (
    <NoteLayout title="Dictionaries — Hash Table Internals" phase="0A" subtitle="O(1) lookup ka secret, views, aur production patterns">

      <SectionBlock icon="🧠" title="Mental Model — Dict Kaise Kaam Karta Hai?">
        <MentalModel
          analogy="Dict = library ka catalogue. Naam (key) de do, immediately shelf number (hash → slot) milta hai. Linear dhundhna nahi padta — seedha slot pe jaao. O(1) magic yahi hai."
          diagram={<HashTableSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🔬" title="Hash Table — Under the Hood">
        <HoodBox>
          <div className="space-y-2 text-sm text-content leading-relaxed">
            <p>1. <span className="text-orange-400 font-semibold">hash(key)</span> compute hota hai — deterministic integer</p>
            <p>2. <span className="text-orange-400 font-semibold">slot = hash % capacity</span> — table mein position find karo</p>
            <p>3. Collision (do keys same slot) → <span className="text-blue-400 font-semibold">open addressing</span> — probe next slots</p>
            <p>4. Load factor 2/3 cross karo → <span className="text-green-400 font-semibold">resize</span> (new table, rehash all)</p>
            <p>5. Python 3.7+ → <span className="text-purple-400 font-semibold">insertion order guaranteed</span></p>
          </div>
        </HoodBox>
      </SectionBlock>

      <SectionBlock icon="💻" title="Dict Operations">
        <CodeBlock code={`d = {"name": "Divyesh", "age": 22, "city": "Mumbai"}

# Access — safe vs unsafe
d["name"]               # "Divyesh"
d.get("email")          # None — no KeyError!
d.get("email", "N/A")   # "N/A" default

# Add / Update
d["email"] = "d@ex.com"     # new key
d["age"] = 23                # update
d.update({"age": 24, "role": "dev"})

# Remove
del d["city"]           # KeyError if missing
d.pop("city")           # return + remove
d.pop("city", None)     # safe
d.popitem()             # last inserted (LIFO, 3.7+)

# Existence
"name" in d             # True — O(1)
"email" not in d        # O(1)`} />
      </SectionBlock>

      <SectionBlock icon="👁️" title="Dict Views — Live Windows">
        <div className="space-y-4">
          <DictViewsSVG />
          <TrapBox
            number={1}
            name="Modify Dict While Iterating"
            level="M"
            question="Loop mein dict modify kar sakte hain?"
            wrongAnswer="Haan — loop chal raha hai"
            correctAnswer="RuntimeError: dictionary changed size during iteration"
            why="Dict views live hain — size change karna iteration ko break karta hai."
            fix={<CodeBlock code={`# Fix: iterate over copy
for k in list(d.keys()):
    del d[k]  # safe!`} />}
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="🏭" title="Production Patterns">
        <CodeBlock code={`# setdefault — get ya create
d = {}
d.setdefault("tags", []).append("python")
d.setdefault("tags", []).append("backend")
# {'tags': ['python', 'backend']}

# Counter pattern
text = "hello world"
counts = {}
for char in text:
    counts[char] = counts.get(char, 0) + 1

# Group by
students = [("Div", "A"), ("Raj", "B"), ("Pri", "A")]
by_grade = {}
for name, grade in students:
    by_grade.setdefault(grade, []).append(name)
# {'A': ['Div', 'Pri'], 'B': ['Raj']}

# Merge (Python 3.9+)
d1 = {"a": 1}
d2 = {"b": 2}
merged = d1 | d2    # {'a': 1, 'b': 2}
d1 |= d2            # in-place update`} />
      </SectionBlock>

      <SectionBlock icon="📝" title="Dict Comprehension">
        <CodeBlock code={`# Basic
squares = {x: x**2 for x in range(5)}

# With filter
evens = {x: x**2 for x in range(10) if x % 2 == 0}

# Invert a dict
original = {"a": 1, "b": 2}
inverted = {v: k for k, v in original.items()}
# {1: 'a', 2: 'b'}

# From two lists
keys = ["name", "age"]
vals = ["Divyesh", 22]
d = dict(zip(keys, vals))  # or {k: v for k, v in zip(...)}`} />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "Lookup", value: "O(1) average — hash table" },
          { label: "Keys", value: "Must be hashable" },
          { label: "get(k, default)", value: "Safe access — no KeyError" },
          { label: "setdefault(k, [])", value: "Group-by pattern" },
          { label: "Views", value: "keys/values/items — live, not copy" },
          { label: "Order", value: "Insertion order (3.7+)" },
          { label: "d1 | d2", value: "Merge (3.9+)" },
          { label: "Iterate + modify", value: "TRAP — use list(d.keys())" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Tuples", description: "Tuple as dict key — hashability", href: "/roadmap/topic/python-data-structures/1" }}
          to={{ title: "Sets", description: "Hash table — keys without values", href: "/roadmap/topic/python-data-structures/3" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
