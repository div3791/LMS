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
} from '../../components/notes'

const C = {
  purple: '#7c3aed',
  purpleLight: '#a78bfa',
  blue: '#3b82f6',
  blueLight: '#93c5fd',
  green: '#10b981',
  greenLight: '#6ee7b7',
  orange: '#f59e0b',
  orangeLight: '#fcd34d',
  red: '#ef4444',
  redLight: '#fca5a5',
  muted: '#94a3b8',
  text: '#e2e8f0',
  white: '#f8fafc',
  border: '#0f3460',
}

function SetHashSVG() {
  return (
    <svg viewBox="0 0 520 250" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes shSlot { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.4} }
          @keyframes shKey { 0%{opacity:0;transform:translateX(-8px)} 100%{opacity:1;transform:translateX(0)} }
          .sh1{animation:shKey .4s .1s ease both}
          .sh2{animation:shKey .4s .3s ease both}
          .sh3{animation:shKey .4s .5s ease both}
          .sh-slot{animation:shSlot 2s ease-in-out infinite}
        `}</style>
        <marker id="shArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Set = Hash Table (Keys only, no values)</text>
      <text x="65" y="45" textAnchor="middle" fill={C.muted} fontSize="10">Elements</text>
      {[
        { val: '"apple"', y: 53 },
        { val: '"banana"', y: 95 },
        { val: '"cherry"', y: 137 },
      ].map((item) => (
        <g key={item.val} className="sh1">
          <rect x="15" y={item.y} width="100" height="30" rx="6" fill={C.green} fillOpacity=".15" stroke={C.green} strokeWidth="1.5"/>
          <text x="65" y={item.y + 19} textAnchor="middle" fill={C.greenLight} fontSize="10" fontFamily="monospace">{item.val}</text>
        </g>
      ))}
      <text x="195" y="45" textAnchor="middle" fill={C.muted} fontSize="10">hash()</text>
      {[53, 95, 137].map((y) => (
        <g key={y} className="sh2">
          <rect x="130" y={y} width="75" height="30" rx="6" fill={C.orange} fillOpacity=".15" stroke={C.orange} strokeWidth="1"/>
          <text x="167" y={y + 19} textAnchor="middle" fill={C.orangeLight} fontSize="9">compute</text>
          <line x1="117" y1={y + 15} x2="128" y2={y + 15} stroke={C.orange} strokeWidth="1.5" markerEnd="url(#shArr)"/>
        </g>
      ))}
      <text x="345" y="45" textAnchor="middle" fill={C.muted} fontSize="10">Hash Table Slots</text>
      {[
        { slot: '0', y: 53, empty: true },
        { slot: '1', y: 75, val: '"banana"', color: C.blue },
        { slot: '2', y: 97, empty: true },
        { slot: '3', y: 119, val: '"apple"', color: C.green },
        { slot: '4', y: 141, val: '"cherry"', color: C.purple },
        { slot: '5', y: 163, empty: true },
      ].map((item) => (
        <g key={item.slot} className={item.empty ? '' : 'sh-slot'}>
          <rect x="217" y={item.y} width="255" height="20" rx="4"
            fill={item.empty ? '#1e293b' : item.color as string}
            fillOpacity={item.empty ? 0.3 : 0.15}
            stroke={item.empty ? C.muted : item.color as string}
            strokeWidth={item.empty ? 0.5 : 1.2}/>
          <text x="228" y={item.y + 14} fill={C.muted} fontSize="10">[{item.slot}]</text>
          {!item.empty && (
            <text x="250" y={item.y + 14} fill={item.color as string} fontSize="10" fontFamily="monospace">{item.val}</text>
          )}
        </g>
      ))}
      <text x="260" y="215" textAnchor="middle" fill={C.orange} fontSize="10">O(1) lookup: hash(x) → slot → compare → found/not-found</text>
      <text x="260" y="232" textAnchor="middle" fill={C.muted} fontSize="10">No values stored — only keys (like dict without values)</text>
    </svg>
  )
}

function SetOpsSVG() {
  return (
    <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes soAnim { 0%{opacity:0;transform:scale(.9)} 100%{opacity:1;transform:scale(1)} }
          .so1{animation:soAnim .4s .1s ease both}
          .so2{animation:soAnim .4s .3s ease both}
          .so3{animation:soAnim .4s .5s ease both}
          .so4{animation:soAnim .4s .7s ease both}
        `}</style>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Set Operations</text>
      {[
        { cls: 'so1', x: 15, color: C.blue, op: 'Union  |', desc: 'A ya B mein — sab', code: '{1,2} | {2,3} = {1,2,3}' },
        { cls: 'so2', x: 270, color: C.green, op: 'Intersection  &', desc: 'A aur B dono mein', code: '{1,2} & {2,3} = {2}' },
        { cls: 'so3', x: 15, color: C.orange, op: 'Difference  -', desc: 'A mein, B mein nahi', code: '{1,2} - {2,3} = {1}' },
        { cls: 'so4', x: 270, color: C.purple, op: 'Symmetric Diff  ^', desc: 'Sirf ek mein', code: '{1,2} ^ {2,3} = {1,3}' },
      ].map((item) => (
        <g key={item.op} className={item.cls}>
          <rect x={item.x} y={item.x === 15 && item.op.startsWith('Union') ? 32 : item.x === 15 ? 122 : item.op.startsWith('Inter') ? 32 : 122}
            width="240" height="80" rx="8"
            fill={item.color} fillOpacity=".08" stroke={item.color} strokeWidth="1.5"/>
          <text x={item.x + 12}
            y={item.x === 15 && item.op.startsWith('Union') ? 52 : item.x === 15 ? 142 : item.op.startsWith('Inter') ? 52 : 142}
            fill={item.color} fontSize="11" fontWeight="700">{item.op}</text>
          <text x={item.x + 12}
            y={item.x === 15 && item.op.startsWith('Union') ? 70 : item.x === 15 ? 160 : item.op.startsWith('Inter') ? 70 : 160}
            fill={C.muted} fontSize="10">{item.desc}</text>
          <text x={item.x + 12}
            y={item.x === 15 && item.op.startsWith('Union') ? 90 : item.x === 15 ? 180 : item.op.startsWith('Inter') ? 90 : 180}
            fill={C.text} fontSize="10" fontFamily="monospace">{item.code}</text>
        </g>
      ))}
    </svg>
  )
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="150" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Sets</text>
      {[
        { x: 15, color: C.green, title: 'Hash Table', lines: ['O(1) lookup — hash based', 'No duplicates — auto', 'Elements must be hashable'] },
        { x: 185, color: C.blue, title: 'Operations', lines: ['|  union', '&  intersection', '-  difference, ^ sym-diff'] },
        { x: 355, color: C.orange, title: 'Use Cases', lines: ['Dedup: set(lst)', 'Membership: x in s O(1)', 'frozenset — hashable set'] },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="105" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700">{col.title}</text>
          {col.lines.map((l, j) => (
            <text key={j} x={col.x + 10} y={68 + j * 22} fill={C.text} fontSize="10">{`→ ${l}`}</text>
          ))}
        </g>
      ))}
    </svg>
  )
}

export default function PythonDataStructures3() {
  return (
    <NoteLayout title="Sets — Hash Table & O(1) Lookup" phase="0A" subtitle="Deduplication, membership testing, aur set algebra — O(1) magic">

      <SectionBlock icon="🧠" title="Mental Model — Set Kya Hai?">
        <MentalModel
          analogy="Set = VIP guestlist. Naam ek baar hi likha jaata hai (no duplicates). Naam check karna = O(1) — register mein seedha dhundho, poora list scan nahi. List = queue mein sab khade hain — O(n) scan."
          diagram={<SetHashSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🔬" title="Under the Hood">
        <HoodBox>
          <div className="space-y-2 text-sm text-content leading-relaxed">
            <p>Set internally <span className="text-green-400 font-semibold">dict jaisa hash table</span> use karta hai — sirf keys, no values.</p>
            <p><span className="text-orange-400 font-semibold">add(x)</span>: hash(x) compute → slot find → duplicate check → insert — O(1) average</p>
            <p><span className="text-orange-400 font-semibold">x in s</span>: hash(x) → slot → compare — O(1) vs list O(n)</p>
            <p>Elements must be <span className="text-blue-400 font-semibold">hashable</span> — int, str, tuple OK; list nahi.</p>
            <p>Load factor exceed → <span className="text-purple-400 font-semibold">resize</span> (new table, rehash)</p>
          </div>
        </HoodBox>
      </SectionBlock>

      <SectionBlock icon="💻" title="Set Operations">
        <div className="space-y-4">
          <SetOpsSVG />
          <CodeBlock code={`# Create
s1 = {1, 2, 3}             # literal
s2 = set([1, 2, 2, 3, 3])  # from list — auto dedup!
s2  # {1, 2, 3}
s3 = set()                  # empty (NOT {} — woh dict hai!)

# Add / Remove
s1.add(4)           # O(1) — duplicate ignore
s1.remove(1)        # KeyError if missing
s1.discard(99)      # safe — no error if missing
s1.pop()            # random element remove

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

a | b   # {1,2,3,4,5,6}  union
a & b   # {3,4}           intersection
a - b   # {1,2}           difference (in a, not b)
a ^ b   # {1,2,5,6}       symmetric difference

# Method versions
a.union(b)
a.intersection(b)
a.difference(b)
a.symmetric_difference(b)

# In-place
a |= b   # a = a | b
a &= b   # a = a & b`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🚀" title="Production Use Cases">
        <CodeBlock code={`# 1. Deduplication — fastest way
lst = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(lst))   # [1, 2, 3, 4] (order not guaranteed)

# 2. Membership test — O(1) vs list O(n)
valid_users = {"admin", "divyesh", "raj"}
if user in valid_users:   # O(1)!
    grant_access()

# vs list — O(n) scan
valid_users_list = ["admin", "divyesh", "raj"]
if user in valid_users_list:   # O(n) — slow!
    grant_access()

# 3. Find common elements
team_a = {"Divyesh", "Raj", "Priya"}
team_b = {"Raj", "Amit", "Priya"}
common = team_a & team_b   # {"Raj", "Priya"}

# 4. Find missing items
required = {"name", "email", "age"}
provided = {"name", "email"}
missing = required - provided   # {"age"}

# 5. Check subset/superset
{1, 2}.issubset({1, 2, 3})     # True
{1, 2, 3}.issuperset({1, 2})   # True`} />
      </SectionBlock>

      <SectionBlock icon="❄️" title="frozenset — Immutable, Hashable Set">
        <div className="space-y-4">
          <InfoBox type="info" title="frozenset — set ka read-only version">
            frozenset hashable hai — dict key ya set of sets bana sakte ho. frozenset = set ka tuple equivalent.
          </InfoBox>
          <CodeBlock code={`# frozenset — immutable, hashable
fs = frozenset([1, 2, 3])
fs.add(4)   # AttributeError — immutable!

# Dict key mein set use nahi kar sakte — unhashable
# But frozenset kar sakte hain!
permissions = {
    frozenset(["read", "write"]): "editor",
    frozenset(["read"]):          "viewer",
}

# Set of frozensets
graphs = {frozenset([1, 2]), frozenset([2, 3])}`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🪤" title="Set Traps">
        <TrapBox
          number={1}
          name="Empty Set — {} is dict!"
          level="B"
          question="empty = {} — kya type hai?"
          wrongAnswer="set — empty set banaya"
          correctAnswer="dict! {} always creates empty dict. set() use karo for empty set."
          why="Python mein {} dict literal hai. set literal mein at least ek element chahiye: {1}. Empty set sirf set() se banta hai."
        />
      </SectionBlock>

      <SectionBlock icon="⚖️" title="Set vs List — Kab Kya?">
        <CompareBlock
          bad={<CodeBlock code={`# Repeated membership test with list — O(n) per check
valid = ["admin", "user", "viewer"]
for u in users:
    if u.role in valid:   # O(n) every time!
        grant(u)`} />}
          good={<CodeBlock code={`# Set — O(1) per check
valid = {"admin", "user", "viewer"}
for u in users:
    if u.role in valid:   # O(1)!
        grant(u)`} />}
          badLabel="List membership — O(n)"
          goodLabel="Set membership — O(1)"
        />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'set()', value: 'Empty set — {} is dict!' },
          { label: 'add(x)', value: 'O(1) — duplicate ignore' },
          { label: 'discard(x)', value: 'Safe remove — no KeyError' },
          { label: 'x in s', value: 'O(1) membership test' },
          { label: '|  &  -  ^', value: 'Union, intersection, difference, sym-diff' },
          { label: 'frozenset', value: 'Immutable, hashable set' },
          { label: 'Dedup', value: 'list(set(lst)) — but order lost' },
          { label: 'Elements', value: 'Must be hashable — no lists!' },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: 'Dictionaries', description: 'Same hash table internals', href: '/roadmap/topic/python-data-structures/2' }}
          to={{ title: 'Collections Module', description: 'Counter, defaultdict — dict superpowers', href: '/roadmap/topic/python-data-structures/8' }}
        />
      </SectionBlock>

    </NoteLayout>
  )
}
