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

function ListMemorySVG() {
  return (
    <svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes lmArr { 0%{opacity:0} 100%{opacity:1} }
          @keyframes lmPulse { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.3} }
          .lm1{animation:lmArr .4s .2s ease both}
          .lm2{animation:lmArr .4s .5s ease both}
          .lm-pulse{animation:lmPulse 2.5s ease-in-out infinite}
        `}</style>
        <marker id="lmBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.blue}/>
        </marker>
        <marker id="lmMuted" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.muted}/>
        </marker>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">List Memory Model — Array of References</text>
      <text x="65" y="45" textAnchor="middle" fill={C.muted} fontSize="10">Variable</text>
      <rect x="15" y="52" width="100" height="32" rx="6" fill={C.purple} fillOpacity=".2" stroke={C.purple} strokeWidth="1.5"/>
      <text x="65" y="72" textAnchor="middle" fill={C.purpleLight} fontSize="12">my_list</text>
      <line x1="117" y1="68" x2="155" y2="68" stroke={C.blue} strokeWidth="2" className="lm1" markerEnd="url(#lmBlue)"/>
      <text x="260" y="45" textAnchor="middle" fill={C.muted} fontSize="10">List Object (heap) — array of references</text>
      <rect x="158" y="52" width="345" height="55" rx="8" fill={C.blue} fillOpacity=".1" stroke={C.blue} strokeWidth="1.5"/>
      {["ref₀", "ref₁", "ref₂", "ref₃"].map((v, i) => (
        <g key={v}>
          <rect x={165 + i * 83} y="60" width="75" height="30" rx="5" fill={C.blue} fillOpacity=".15" stroke={C.blue} strokeWidth="1"/>
          <text x={202 + i * 83} y="79" textAnchor="middle" fill={C.blueLight} fontSize="10">{v}</text>
        </g>
      ))}
      <text x="260" y="130" textAnchor="middle" fill={C.muted} fontSize="10">Actual Objects (heap)</text>
      {[
        { x: 158, val: "42", color: C.green, type: "int" },
        { x: 241, val: '"hi"', color: C.orange, type: "str" },
        { x: 324, val: "[1,2]", color: C.purple, type: "list" },
        { x: 407, val: "None", color: C.muted, type: "NoneType" },
      ].map((item) => (
        <g key={item.x} className="lm-pulse">
          <rect x={item.x} y="138" width="75" height="42" rx="6" fill={item.color} fillOpacity=".15" stroke={item.color} strokeWidth="1.2"/>
          <text x={item.x + 37} y="157" textAnchor="middle" fill={item.color} fontSize="11" fontWeight="700">{item.val}</text>
          <text x={item.x + 37} y="172" textAnchor="middle" fill={C.muted} fontSize="9">{item.type}</text>
        </g>
      ))}
      {[165, 248, 331, 414].map((x, i) => (
        <line key={i} x1={x + 37} y1="90" x2={158 + i * 83 + 37} y2="136" stroke={C.muted} strokeWidth="1" strokeDasharray="3" className="lm2"/>
      ))}
      <text x="260" y="202" textAnchor="middle" fill={C.orange} fontSize="10">List objects store references — not values directly!</text>
      <text x="260" y="218" textAnchor="middle" fill={C.muted} fontSize="10">Heterogeneous types possible because all references are same size.</text>
    </svg>
  );
}

function DynamicArraySVG() {
  return (
    <svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes daNew { 0%{opacity:0;transform:scaleX(0)} 100%{opacity:1;transform:scaleX(1)} }
          .da-new{animation:daNew .5s 1.5s ease both;transform-origin:left}
        `}</style>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Dynamic Array — Amortized O(1) append()</text>
      <text x="20" y="48" fill={C.muted} fontSize="11">Before append (capacity=4, len=4 — FULL):</text>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={20 + i * 55} y="55" width="50" height="32" rx="5" fill={C.blue} fillOpacity=".25" stroke={C.blue} strokeWidth="1.5"/>
      ))}
      {["1", "2", "3", "4"].map((v, i) => (
        <text key={v} x={45 + i * 55} y="75" textAnchor="middle" fill={C.blueLight} fontSize="14">{v}</text>
      ))}
      <rect x="243" y="55" width="50" height="32" rx="5" fill="none" stroke={C.red} strokeWidth="2" strokeDasharray="4"/>
      <text x="268" y="75" textAnchor="middle" fill={C.redLight} fontSize="11">FULL</text>
      <text x="260" y="112" textAnchor="middle" fill={C.orange} fontSize="18">↓</text>
      <text x="260" y="128" textAnchor="middle" fill={C.muted} fontSize="10">New array (2× size=8) allocate, old copy, append 5</text>
      <text x="20" y="152" fill={C.muted} fontSize="11">After (capacity=8, len=5):</text>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={20 + i * 55} y="158" width="50" height="32" rx="5" fill={C.blue} fillOpacity=".25" stroke={C.blue} strokeWidth="1.5"/>
      ))}
      <rect x="240" y="158" width="50" height="32" rx="5" fill={C.green} fillOpacity=".3" stroke={C.green} strokeWidth="2" className="da-new"/>
      {[295, 350, 405, 460].map((x) => (
        <rect key={x} x={x} y="158" width="50" height="32" rx="5" fill="#1e293b" stroke={C.muted} strokeWidth="1" strokeDasharray="3"/>
      ))}
      {["1", "2", "3", "4"].map((v, i) => (
        <text key={v} x={45 + i * 55} y="178" textAnchor="middle" fill={C.blueLight} fontSize="14">{v}</text>
      ))}
      <text x="265" y="178" textAnchor="middle" fill={C.greenLight} fontSize="14">5</text>
    </svg>
  );
}

function ShallowCopySVG() {
  return (
    <svg viewBox="0 0 520 195" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes scShared { 0%,100%{stroke-opacity:.5} 50%{stroke-opacity:1} }
          .sc-shared{animation:scShared 1.5s ease-in-out infinite}
        `}</style>
        <marker id="scRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.red}/>
        </marker>
        <marker id="scGrn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Shallow Copy Trap</text>
      <text x="80" y="45" textAnchor="middle" fill={C.muted} fontSize="10">original</text>
      <rect x="20" y="52" width="120" height="32" rx="6" fill={C.blue} fillOpacity=".15" stroke={C.blue} strokeWidth="1.5"/>
      <text x="80" y="72" textAnchor="middle" fill={C.blueLight} fontSize="11">[[1,2], [3,4]]</text>
      <text x="80" y="110" textAnchor="middle" fill={C.muted} fontSize="10">copy = original[:]</text>
      <rect x="20" y="117" width="120" height="32" rx="6" fill={C.green} fillOpacity=".15" stroke={C.green} strokeWidth="1.5"/>
      <text x="80" y="137" textAnchor="middle" fill={C.greenLight} fontSize="11">[[1,2], [3,4]]</text>
      <rect x="240" y="75" width="120" height="32" rx="6" fill={C.orange} fillOpacity=".2" stroke={C.orange} strokeWidth="2"/>
      <text x="300" y="95" textAnchor="middle" fill={C.orangeLight} fontSize="12" fontWeight="700">[1, 2]</text>
      <rect x="380" y="75" width="120" height="32" rx="6" fill={C.orange} fillOpacity=".2" stroke={C.orange} strokeWidth="2"/>
      <text x="440" y="95" textAnchor="middle" fill={C.orangeLight} fontSize="12" fontWeight="700">[3, 4]</text>
      <line x1="142" y1="65" x2="238" y2="89" stroke={C.blue} strokeWidth="1.5" className="sc-shared" markerEnd="url(#scGrn)"/>
      <line x1="142" y1="72" x2="378" y2="89" stroke={C.blue} strokeWidth="1.5" className="sc-shared" markerEnd="url(#scGrn)"/>
      <line x1="142" y1="130" x2="238" y2="105" stroke={C.green} strokeWidth="1.5" className="sc-shared" markerEnd="url(#scRed)"/>
      <line x1="142" y1="137" x2="378" y2="106" stroke={C.green} strokeWidth="1.5" className="sc-shared" markerEnd="url(#scRed)"/>
      <text x="300" y="135" textAnchor="middle" fill={C.red} fontSize="11" fontWeight="700">SHARED!</text>
      <text x="260" y="163" textAnchor="middle" fill={C.muted} fontSize="10">copy[0].append(99)  →  original[0] bhi [1, 2, 99] ho gaya!</text>
      <text x="260" y="180" textAnchor="middle" fill={C.greenLight} fontSize="10">Fix: import copy; copy.deepcopy(original)</text>
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Lists</text>
      {[
        { x: 15, color: C.blue, title: "Memory Model", lines: ["Array of references", "Heterogeneous types OK", "Variable → list obj → items"] },
        { x: 185, color: C.green, title: "Complexity", lines: ["append O(1) amortized", "insert/delete O(n)", "index access O(1)"] },
        { x: 355, color: C.red, title: "Traps", lines: ["Shallow copy = shared refs", "[[x]*n]*m = shared rows!", "Modify during iteration"] },
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

export default function PythonDataStructures0() {
  return (
    <NoteLayout title="Lists — Internals & Traps" phase="0A" subtitle="Dynamic arrays, shallow copy, comprehensions — poori picture">

      <SectionBlock icon="🧠" title="Mental Model — List Kya Hai?">
        <MentalModel
          analogy="List = apartment register. Har floor pe ek reference (address) hai. Actual saman (objects) alag jagah (heap) rakhte hain. Register mein sirf addresses hain — isliye mixed types possible hain."
          diagram={<ListMemorySVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🔬" title="Dynamic Array — append() Internals">
        <div className="space-y-4">
          <HoodBox>
            <DynamicArraySVG />
          </HoodBox>
          <InfoBox type="info" title="Amortized O(1)">
            append() mostly O(1) hai. Jab capacity full hoti hai to 2× size ka naya array allocate hota hai + sab copy — ye O(n) hai, par bahut rare. Average nikaalo to O(1) per append.
          </InfoBox>
          <CodeBlock code={`# Complexity cheat sheet:
# append()      → O(1) amortized
# pop()         → O(1)
# insert(i, x)  → O(n) — sab shift karna padta hai
# remove(x)     → O(n) — dhundhna + shift
# lst[i]        → O(1) — direct index
# x in lst      → O(n) — linear scan (set use karo!)`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="📋" title="Shallow vs Deep Copy">
        <div className="space-y-4">
          <ShallowCopySVG />
          <CompareBlock
            bad={<CodeBlock code={`original = [[1, 2], [3, 4]]
copy1 = original[:]
copy2 = list(original)
copy3 = original.copy()  # all same!

copy1[0].append(99)
print(original)  # [[1, 2, 99], [3, 4]] — CHANGED!`} />}
            good={<CodeBlock code={`import copy
original = [[1, 2], [3, 4]]

deep = copy.deepcopy(original)
deep[0].append(99)
print(original)  # [[1, 2], [3, 4]] — unchanged!`} />}
            badLabel="Shallow copy — shared inner refs"
            goodLabel="Deep copy — fully independent"
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="🪤" title="List Traps">
        <div className="space-y-4">
          <TrapBox
            number={1}
            name="[[x]*n]*m — Shared Rows!"
            level="M"
            question="matrix = [[0]*3]*3 — correct 2D list hai?"
            wrongAnswer="Haan — 3 rows, 3 cols, sab 0"
            correctAnswer="Nahi — sab 3 rows same list object hain! matrix[0][0] = 1 se sab rows badal jaate hain"
            why="* operator list reference copy karta hai, naya object nahi banata. Sab rows ek hi [0,0,0] object hain."
            fix={<CodeBlock code={`# Fix: list comprehension — har row alag object
matrix = [[0]*3 for _ in range(3)]
matrix[0][0] = 1
print(matrix)  # [[1,0,0],[0,0,0],[0,0,0]] ✓`} />}
          />
          <TrapBox
            number={2}
            name="Modify During Iteration"
            level="M"
            question="Loop mein list modify karna safe hai?"
            wrongAnswer="Haan — loop chal raha hai to modify kar sakte hain"
            correctAnswer="Nahi — elements skip ho jaate hain, unpredictable behavior"
            why="List ka internal index move hota hai — delete karne ke baad next element jump ho jaata hai."
            fix={<CodeBlock code={`# Fix: iterate over copy
lst = [1, 2, 3, 4, 5]
for x in lst[:]:
    if x % 2 == 0:
        lst.remove(x)  # safe!`} />}
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="💻" title="Essential List Operations">
        <CodeBlock code={`lst = [3, 1, 4, 1, 5, 9, 2, 6]

# Add
lst.append(7)         # end mein, O(1)
lst.insert(0, 0)      # index pe, O(n)
lst.extend([8, 9])    # multiple items

# Remove
lst.pop()             # last, O(1)
lst.pop(0)            # index, O(n)
lst.remove(1)         # first occurrence, O(n)

# Sort
lst.sort()            # in-place, O(n log n)
lst.sort(reverse=True)
sorted(lst)           # new list, original unchanged
lst.sort(key=abs)     # custom key

# append vs extend
lst.append([4, 5])   # [[1,2,3,[4,5]]] — nested!
lst.extend([4, 5])   # [1, 2, 3, 4, 5] — flat`} />
      </SectionBlock>

      <SectionBlock icon="📝" title="List Comprehensions">
        <CodeBlock code={`# Basic
squares = [x**2 for x in range(10)]

# With filter
even_sq = [x**2 for x in range(10) if x % 2 == 0]

# Nested (flatten matrix)
matrix = [[1,2,3],[4,5,6],[7,8,9]]
flat = [n for row in matrix for n in row]

# Dict comprehension
word_len = {word: len(word) for word in ["hello", "world"]}

# Set comprehension (unique only)
unique_sq = {x**2 for x in [-2, -1, 0, 1, 2]}  # {0, 1, 4}`} />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "Memory", value: "Array of refs — not values" },
          { label: "append", value: "O(1) amortized" },
          { label: "insert/remove", value: "O(n)" },
          { label: "index access", value: "O(1)" },
          { label: "Shallow copy", value: "lst[:] / list(lst) / lst.copy()" },
          { label: "Deep copy", value: "import copy; copy.deepcopy(lst)" },
          { label: "[[x]*n]*m", value: "TRAP — shared rows, use comprehension" },
          { label: "Modify in loop", value: "TRAP — use copy: lst[:]" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Memory Model", description: "Mutation vs rebinding — list context mein", href: "/roadmap/topic/python-basics/8" }}
          to={{ title: "Tuples", description: "Immutable counterpart — kab better?", href: "/roadmap/topic/python-data-structures/1" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
