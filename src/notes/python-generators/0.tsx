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
  HoodBox,
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

function GeneratorFlowSVG() {
  return (
    <svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes gfRun { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
          @keyframes gfYield { 0%,100%{fill-opacity:.15} 60%{fill-opacity:.45} }
          .gf-run{stroke-dasharray:200;animation:gfRun 1.2s ease both}
          .gf-yield{animation:gfYield 2s ease-in-out infinite}
        `}</style>
        <marker id="gfArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
        <marker id="gfGrn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Generator — Pause & Resume</text>
      <rect x="15" y="30" width="160" height="195" rx="8" fill={C.purple} fillOpacity=".08" stroke={C.purple} strokeWidth="1.5"/>
      <text x="95" y="50" textAnchor="middle" fill={C.purpleLight} fontSize="11" fontWeight="700">def count_up(n):</text>
      {[
        { y: 75, code: "i = 0", active: false },
        { y: 100, code: "while i < n:", active: false },
        { y: 125, code: "  yield i", active: true },
        { y: 150, code: "  i += 1", active: false },
        { y: 175, code: "# StopIteration", active: false },
      ].map((line) => (
        <g key={line.y} className={line.active ? "gf-yield" : ""}>
          <rect x="25" y={line.y - 13} width="140" height="18" rx="3" fill={line.active ? C.orange : "transparent"} fillOpacity={line.active ? 0.2 : 0}/>
          <text x="35" y={line.y} fill={line.active ? C.orangeLight : C.text} fontSize="10" fontFamily="monospace">{line.code}</text>
          {line.active && <text x="170" y={line.y} fill={C.orange} fontSize="9">← PAUSE</text>}
        </g>
      ))}
      <rect x="310" y="30" width="200" height="195" rx="8" fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeWidth="1.5"/>
      <text x="410" y="50" textAnchor="middle" fill={C.blueLight} fontSize="11" fontWeight="700">Caller</text>
      {[
        { y: 75, code: "g = count_up(3)" },
        { y: 100, code: "next(g)  → 0" },
        { y: 125, code: "next(g)  → 1" },
        { y: 150, code: "next(g)  → 2" },
        { y: 175, code: "next(g)  → StopIteration" },
      ].map((line) => (
        <text key={line.y} x="322" y={line.y} fill={C.text} fontSize="10" fontFamily="monospace">{line.code}</text>
      ))}
      <line x1="185" y1="100" x2="308" y2="100" stroke={C.green} strokeWidth="1.5" className="gf-run" markerEnd="url(#gfGrn)"/>
      <line x1="185" y1="125" x2="308" y2="125" stroke={C.green} strokeWidth="1.5" className="gf-run" markerEnd="url(#gfGrn)"/>
      <line x1="185" y1="150" x2="308" y2="150" stroke={C.green} strokeWidth="1.5" className="gf-run" markerEnd="url(#gfGrn)"/>
      <line x1="309" y1="107" x2="187" y2="117" stroke={C.orange} strokeWidth="1" strokeDasharray="3" markerEnd="url(#gfArr)"/>
    </svg>
  );
}

function IterableProtocolSVG() {
  return (
    <svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes ipFade { 0%{opacity:0;transform:translateY(-6px)} 100%{opacity:1;transform:translateY(0)} }
          .ip1{animation:ipFade .4s .1s ease both}
          .ip2{animation:ipFade .4s .4s ease both}
          .ip3{animation:ipFade .4s .7s ease both}
        `}</style>
        <marker id="ipArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.muted}/>
        </marker>
      </defs>
      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Iterable vs Iterator vs Generator</text>

      {/* Iterable */}
      <g className="ip1">
        <rect x="10" y="28" width="155" height="90" rx="7" fill={C.blue} fillOpacity=".1" stroke={C.blue} strokeWidth="1.5"/>
        <text x="87" y="47" textAnchor="middle" fill={C.blueLight} fontSize="11" fontWeight="700">Iterable</text>
        <text x="20" y="63" fill={C.muted} fontSize="9">Has: __iter__()</text>
        <text x="20" y="78" fill={C.text} fontSize="9">Can give an iterator</text>
        <text x="20" y="93" fill={C.text} fontSize="9">list, tuple, str, range</text>
        <text x="20" y="108" fill={C.greenLight} fontSize="9">✓ Reusable (loop again)</text>
      </g>

      {/* Iterator */}
      <g className="ip2">
        <rect x="182" y="28" width="155" height="90" rx="7" fill={C.orange} fillOpacity=".1" stroke={C.orange} strokeWidth="1.5"/>
        <text x="259" y="47" textAnchor="middle" fill={C.orangeLight} fontSize="11" fontWeight="700">Iterator</text>
        <text x="192" y="63" fill={C.muted} fontSize="9">Has: __iter__() + __next__()</text>
        <text x="192" y="78" fill={C.text} fontSize="9">Tracks state — one-pass</text>
        <text x="192" y="93" fill={C.text} fontSize="9">map, zip, file objects</text>
        <text x="192" y="108" fill={C.redLight} fontSize="9">✗ One-pass (consume = gone)</text>
      </g>

      {/* Generator */}
      <g className="ip3">
        <rect x="354" y="28" width="155" height="90" rx="7" fill={C.green} fillOpacity=".1" stroke={C.green} strokeWidth="1.5"/>
        <text x="431" y="47" textAnchor="middle" fill={C.greenLight} fontSize="11" fontWeight="700">Generator</text>
        <text x="364" y="63" fill={C.muted} fontSize="9">Special iterator (yield)</text>
        <text x="364" y="78" fill={C.text} fontSize="9">Lazy + stateful + auto-manages</text>
        <text x="364" y="93" fill={C.text} fontSize="9">def f(): yield / (x for x)</text>
        <text x="364" y="108" fill={C.redLight} fontSize="9">✗ One-pass (iterator subtype)</text>
      </g>

      {/* Arrow: every iterator is iterable */}
      <line x1="182" y1="73" x2="167" y2="73" stroke={C.muted} strokeWidth="1.2" markerEnd="url(#ipArr)"/>
      <text x="174" y="68" textAnchor="middle" fill={C.muted} fontSize="8">IS A</text>

      {/* Arrow: generator is iterator */}
      <line x1="354" y1="73" x2="339" y2="73" stroke={C.muted} strokeWidth="1.2" markerEnd="url(#ipArr)"/>
      <text x="346" y="68" textAnchor="middle" fill={C.muted} fontSize="8">IS A</text>

      {/* Table */}
      <rect x="10" y="130" width="500" height="80" rx="6" fill="#0f172a" stroke={C.border} strokeWidth="1"/>
      <text x="20" y="148" fill={C.muted} fontSize="10" fontWeight="700">Object</text>
      <text x="100" y="148" fill={C.muted} fontSize="10" fontWeight="700">Iterable?</text>
      <text x="185" y="148" fill={C.muted} fontSize="10" fontWeight="700">Iterator?</text>
      <text x="265" y="148" fill={C.muted} fontSize="10" fontWeight="700">Lazy?</text>
      <text x="330" y="148" fill={C.muted} fontSize="10" fontWeight="700">Reusable?</text>
      <line x1="10" y1="152" x2="510" y2="152" stroke={C.border} strokeWidth="1"/>
      {[
        { obj: "list", it: "✓ Yes", itr: "✗ No", lazy: "✗ No", reuse: "✓ Yes" },
        { obj: "range", it: "✓ Yes", itr: "✗ No", lazy: "✓ Yes", reuse: "✓ Yes" },
        { obj: "map()", it: "✓ Yes", itr: "✓ Yes", lazy: "✓ Yes", reuse: "✗ No" },
        { obj: "generator", it: "✓ Yes", itr: "✓ Yes", lazy: "✓ Yes", reuse: "✗ No" },
      ].map((row, i) => (
        <g key={row.obj}>
          <text x="20" y={166 + i * 15} fill={C.text} fontSize="10" fontFamily="monospace">{row.obj}</text>
          <text x="100" y={166 + i * 15} fill={row.it.startsWith("✓") ? C.green : C.red} fontSize="10">{row.it}</text>
          <text x="185" y={166 + i * 15} fill={row.itr.startsWith("✓") ? C.green : C.red} fontSize="10">{row.itr}</text>
          <text x="265" y={166 + i * 15} fill={row.lazy.startsWith("✓") ? C.green : C.red} fontSize="10">{row.lazy}</text>
          <text x="330" y={166 + i * 15} fill={row.reuse.startsWith("✓") ? C.green : C.red} fontSize="10">{row.reuse}</text>
        </g>
      ))}
    </svg>
  );
}

function ForLoopSVG() {
  return (
    <svg viewBox="0 0 520 145" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes flStep { 0%{opacity:0;transform:translateX(-8px)} 100%{opacity:1;transform:translateX(0)} }
          .fl1{animation:flStep .3s .1s ease both}
          .fl2{animation:flStep .3s .3s ease both}
          .fl3{animation:flStep .3s .5s ease both}
          .fl4{animation:flStep .3s .7s ease both}
        `}</style>
        <marker id="flArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
      </defs>
      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">for Loop Internals — What Python Really Does</text>

      <text x="20" y="42" fill={C.purpleLight} fontSize="11" fontWeight="700" className="fl1">for x in data:</text>
      <text x="175" y="42" fill={C.orange} fontSize="20" className="fl1">≡</text>

      <g className="fl2">
        <text x="200" y="42" fill={C.muted} fontSize="10" fontFamily="monospace">_it = iter(data)</text>
        <text x="200" y="58" fill={C.muted} fontSize="10" fontFamily="monospace">while True:</text>
        <text x="210" y="74" fill={C.muted} fontSize="10" fontFamily="monospace">  try:</text>
        <text x="220" y="90" fill={C.text} fontSize="10" fontFamily="monospace">    x = next(_it)</text>
        <text x="210" y="106" fill={C.muted} fontSize="10" fontFamily="monospace">  except StopIteration:</text>
        <text x="220" y="122" fill={C.muted} fontSize="10" fontFamily="monospace">    break</text>
      </g>

      <g className="fl3">
        <rect x="400" y="30" width="115" height="100" rx="6" fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeWidth="1.2"/>
        <text x="457" y="48" textAnchor="middle" fill={C.blueLight} fontSize="10" fontWeight="700">Steps:</text>
        <text x="410" y="63" fill={C.text} fontSize="9">1. iter(data) → iterator</text>
        <text x="410" y="78" fill={C.text} fontSize="9">2. next() → value</text>
        <text x="410" y="93" fill={C.text} fontSize="9">3. repeat next()</text>
        <text x="410" y="108" fill={C.redLight} fontSize="9">4. StopIteration → stop</text>
        <text x="410" y="123" fill={C.orange} fontSize="9">→ silently caught!</text>
      </g>
    </svg>
  );
}

function MemoryAdvSVG() {
  return (
    <svg viewBox="0 0 520 195" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Memory: List vs Generator</text>
      <rect x="15" y="30" width="235" height="155" rx="8" fill={C.red} fillOpacity=".07" stroke={C.red} strokeWidth="1.5"/>
      <text x="132" y="52" textAnchor="middle" fill={C.redLight} fontSize="12" fontWeight="700">list(range(1_000_000))</text>
      <text x="30" y="75" fill={C.muted} fontSize="10">Memory used:</text>
      <rect x="30" y="82" width="200" height="18" rx="4" fill="#1e293b"/>
      <rect x="30" y="82" width="185" height="18" rx="4" fill={C.red} fillOpacity=".6"/>
      <text x="125" y="95" textAnchor="middle" fill={C.white} fontSize="10" fontWeight="700">~8 MB (all at once)</text>
      <text x="30" y="120" fill={C.muted} fontSize="10">All values in RAM immediately:</text>
      <text x="30" y="137" fill={C.redLight} fontSize="10" fontFamily="monospace">[0, 1, 2, 3, ..., 999999]</text>
      <text x="30" y="157" fill={C.muted} fontSize="10">Slow start — allocate everything first</text>
      <text x="30" y="175" fill={C.red} fontSize="10">Time to first value: HIGH</text>

      <rect x="270" y="30" width="235" height="155" rx="8" fill={C.green} fillOpacity=".07" stroke={C.green} strokeWidth="1.5"/>
      <text x="387" y="52" textAnchor="middle" fill={C.greenLight} fontSize="12" fontWeight="700">(x for x in range(1M))</text>
      <text x="285" y="75" fill={C.muted} fontSize="10">Memory used:</text>
      <rect x="285" y="82" width="200" height="18" rx="4" fill="#1e293b"/>
      <rect x="285" y="82" width="8" height="18" rx="4" fill={C.green} fillOpacity=".8"/>
      <text x="380" y="95" textAnchor="middle" fill={C.white} fontSize="10" fontWeight="700">~120 bytes (always)</text>
      <text x="285" y="120" fill={C.muted} fontSize="10">Values computed lazily, one by one:</text>
      <text x="285" y="137" fill={C.greenLight} fontSize="10" fontFamily="monospace">next() → 0, next() → 1, ...</text>
      <text x="285" y="157" fill={C.muted} fontSize="10">Fast start — no pre-allocation</text>
      <text x="285" y="175" fill={C.green} fontSize="10">Time to first value: INSTANT</text>
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="160" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Generators</text>
      {[
        { x: 15, color: C.purple, title: "Core Idea", lines: ["yield = pause + return val", "Generator is lazy iterator", "State preserved across calls"] },
        { x: 185, color: C.orange, title: "Expressions", lines: ["(x*2 for x in range(n))", "Lazy — not computed yet", "next() ya for loop se"] },
        { x: 355, color: C.green, title: "Advanced", lines: ["yield from = delegate", "send(val) = 2-way comm", "throw/close = control"] },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="115" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700">{col.title}</text>
          {col.lines.map((l, j) => (
            <text key={j} x={col.x + 10} y={68 + j * 22} fill={C.text} fontSize="10">{`→ ${l}`}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function PythonGenerators0() {
  return (
    <NoteLayout title="Generators — Lazy Evaluation & Iteration" phase="0A" subtitle="yield se pause karo, next() se resume — memory-efficient iteration ka ultimate tool">

      <SectionBlock icon="🧠" title="Mental Model — Generator Kya Hai?">
        <MentalModel
          analogy="Generator = Netflix streaming. List = poori movie download karo tab dekhna. Generator = live stream — ek frame aata hai, dekhte ho, next maango, next aata hai. Memory sirf ek frame ke liye use hoti hai, poori movie ke liye nahi."
          diagram={<GeneratorFlowSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="⚖️" title="Iterable vs Iterator vs Generator — Protocol">
        <IterableProtocolSVG />
        <div className="space-y-3 mt-3">
          <InfoBox type="info" title="Duck Typing — Protocol, not inheritance">
            Java ki tarah Iterator extends Iterable nahi hai. Python mein ye sirf ek <strong>protocol</strong> hai — "agar object mein ye methods hain to aise behave karo." Yahi duck typing hai.
          </InfoBox>
          <CodeBlock code={`# Iterable — __iter__() wala, iterator deta hai
my_list = [1, 2, 3]
it = iter(my_list)   # __iter__() call — naya iterator milta hai
it2 = iter(my_list)  # fresh iterator — list reusable!

# Iterator — __iter__() + __next__() + state
next(it)   # 1
next(it)   # 2 — state yaad hai
next(it2)  # 1 — alag cursor, independent

# Generator = Iterator ka smartest version
g = (x for x in [1,2,3])
iter(g) is g   # True! Generator apna khud iterator hai

# Every iterator is iterable, NOT vice versa
# list → iterable (NOT iterator)
# iter(list) → iterator
# map() → iterator (also iterable — same object)
# generator → iterator (also iterable — same object)`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🔄" title="for Loop Internals — iter() + next()">
        <ForLoopSVG />
        <CodeBlock code={`# for loop actually does this:
for x in [1, 2, 3]:
    print(x)

# Python internally:
_it = iter([1, 2, 3])   # list.__iter__() → ListIterator
while True:
    try:
        x = next(_it)   # ListIterator.__next__()
        print(x)
    except StopIteration:
        break            # silently stopped

# range() — iterable, NOT iterator
r = range(1_000_000)
# Stores: start=0, stop=1_000_000, step=1 → sirf 3 values!
len(r)      # 1000000 — works, because it's not consumed
list(r)[:3] # [0, 1, 2]
list(r)[:3] # [0, 1, 2] — reusable! (iterable, not iterator)

it = iter(r)  # NOW it becomes iterator
next(it)  # 0
next(it)  # 1
# it is one-pass now`} />
      </SectionBlock>

      <SectionBlock icon="🔬" title="Under the Hood — yield Kaise Kaam Karta Hai">
        <HoodBox>
          <div className="space-y-2 text-sm text-content leading-relaxed">
            <p>1. <span className="text-purple-400 font-semibold">def + yield</span> → function generator object return karta hai (execute nahi hota)</p>
            <p>2. <span className="text-orange-400 font-semibold">next(g)</span> call hoti hai → function tab tak run karta hai jab tak yield nahi milta</p>
            <p>3. <span className="text-orange-400 font-semibold">yield value</span> → value caller ko milti hai, function ka state (locals + instruction pointer) save ho jaata hai</p>
            <p>4. Agla <span className="text-green-400 font-semibold">next()</span> → wahan se resume hota hai jahan yield hua tha</p>
            <p>5. Function end → <span className="text-red-400 font-semibold">StopIteration</span> automatically raise hoti hai</p>
            <p>6. for loop internally <span className="text-blue-400 font-semibold">iter() + next()</span> call karta hai — StopIteration pe silently stop</p>
          </div>
        </HoodBox>
      </SectionBlock>

      <SectionBlock icon="💻" title="yield — Basic Patterns">
        <CodeBlock code={`# Regular function vs Generator function
def squares_list(n):
    return [x**2 for x in range(n)]  # sab ek saath

def squares_gen(n):
    for x in range(n):
        yield x**2  # ek ek karke

# Usage — same syntax!
for val in squares_gen(5):
    print(val)   # 0, 1, 4, 9, 16

# Manual control
g = squares_gen(3)
next(g)   # 0
next(g)   # 1
next(g)   # 4
next(g)   # StopIteration!

# Safe next with default
next(g, "done")  # "done" — no error`} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Generator Expressions — Lazy Comprehensions">
        <CompareBlock
          bad={<CodeBlock code={`# List comprehension — eager
big_list = [x**2 for x in range(10**6)]
# All 10^6 values stored in RAM → 8 MB

# Even if you only need first 5!
first_five = big_list[:5]`} />}
          good={<CodeBlock code={`# Generator expression — lazy
big_gen = (x**2 for x in range(10**6))
# Nothing computed yet → 120 bytes only

# First 5 only — rest never computed!
import itertools
first_five = list(itertools.islice(big_gen, 5))`} />}
          badLabel="List — sab pehle compute"
          goodLabel="Generator — sirf zaroorat ka"
        />
        <MemoryAdvSVG />
      </SectionBlock>

      <SectionBlock icon="🔗" title="yield from — Sub-Generator Delegation">
        <CodeBlock code={`# Without yield from — manual loop
def chain_manual(*iterables):
    for it in iterables:
        for item in it:
            yield item

# With yield from — cleaner!
def chain_gen(*iterables):
    for it in iterables:
        yield from it   # delegate to sub-iterator

list(chain_gen([1,2], [3,4], [5]))  # [1,2,3,4,5]

# yield from on any iterable
def flatten(nested):
    for item in nested:
        if isinstance(item, list):
            yield from flatten(item)  # recursive!
        else:
            yield item

list(flatten([1, [2, [3, 4]], 5]))  # [1,2,3,4,5]`} />
      </SectionBlock>

      <SectionBlock icon="📡" title="send() / throw() / close() — Two-Way Communication">
        <CodeBlock code={`# send() — value bhejna generator mein
def accumulator():
    total = 0
    while True:
        value = yield total  # yield returns sent value
        if value is None:
            break
        total += value

acc = accumulator()
next(acc)        # "prime" karna zaroori — 0 milta hai
acc.send(10)     # 10
acc.send(20)     # 30

# close() — cleanup trigger karna
def resource_gen():
    try:
        yield 1
        yield 2
    finally:
        print("cleaned up!")  # guaranteed

g = resource_gen()
next(g)
g.close()  # "cleaned up!" — GeneratorExit raise hota hai`} />
      </SectionBlock>

      <SectionBlock icon="🏭" title="Real Use — Production Patterns">
        <CodeBlock code={`# Large file reading — memory efficient
def read_large_file(filepath, chunk_size=1024):
    with open(filepath) as f:
        while chunk := f.read(chunk_size):
            yield chunk

# Data pipeline — chained generators (streaming)
def read_csv_rows(filepath):
    with open(filepath) as f:
        for line in f:
            yield line.strip().split(",")

def filter_active(rows):
    for row in rows:
        if row[2] == "active":
            yield row

def extract_emails(rows):
    for row in rows:
        yield row[1]

# Pipeline — koi bhi row puri memory mein nahi
pipeline = extract_emails(filter_active(read_csv_rows("users.csv")))
for email in pipeline:
    send_newsletter(email)

# Infinite sequences — sirf isliye generator use karo
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

import itertools
first_10 = list(itertools.islice(fibonacci(), 10))`} />
      </SectionBlock>

      <SectionBlock icon="⚠️" title="Things That CONSUME Iterators — Terminal Operations">
        <InfoBox type="warn" title="Yeh sab iterator exhaust kar dete hain">
          Iterator pe ek baar terminal operation karo → sab khatam. Dobara loop → empty.
        </InfoBox>
        <CodeBlock code={`g = (x for x in range(5))

# These CONSUME the entire iterator:
list(g)    # [0,1,2,3,4] — generator exhausted!
list(g)    # [] ← already empty

# All terminal operations:
# list(), tuple(), set()
# sum(), max(), min(), sorted()
# any(), all()
# for loop
# "in" operator (scans until found or exhausted)

# DANGER: "in" on iterator
g = (x for x in range(1000))
500 in g   # True — BUT consumed 0..500!
next(g)    # 501 — not 0! Partial consumption

# Pipeline drain:
b = (x*2 for x in [1,2,3])
c = (x+1 for x in b)   # c depends on b — NO copy!

list(c)   # [3, 5, 7] — c consumed, b exhausted
list(b)   # [] ← b is empty — c drained it!

# Fix: materialise when needed
b_list = list(x*2 for x in [1,2,3])  # eager — safe
c = [x+1 for x in b_list]
d = [x*3 for x in b_list]  # b_list still available`} />
      </SectionBlock>

      <SectionBlock icon="🪤" title="Generator & Iterator Traps">
        <TrapBox
          number={1}
          name="Generator Exhaust — Ek Baar"
          level="B"
          question="Same generator ko baar baar iterate kar sakte hain?"
          wrongAnswer="Haan — for loop har baar fresh start karta hai"
          correctAnswer="Nahi! Generator ek baar exhaust ho jaata hai. Dobara loop karo → kuch nahi milta."
          why="Generator stateful hota hai — ek baar StopIteration pe state reset nahi hoti."
          fix={<CodeBlock code={`# Wrong
g = (x for x in range(3))
list(g)  # [0, 1, 2]
list(g)  # []  ← empty!

# Fix: function se naya generator
def make_gen(): return (x for x in range(3))
list(make_gen())  # [0, 1, 2] always`} />}
        />
        <TrapBox
          number={2}
          name="range() ko Iterator Samajhna"
          level="B"
          question="range(10) iterator hai ya iterable?"
          wrongAnswer="Iterator hai — loop mein use karte hain"
          correctAnswer="range is ITERABLE, not iterator! list(range) aur list(range) dono kaam karte hain — reusable. iter(range(10)) se iterator banta hai."
          why="range lazy hai but reusable — sirf start/stop/step store karta hai. Iterator ki tarah state nahi rakhta."
          fix={<CodeBlock code={`r = range(5)
list(r)   # [0,1,2,3,4]
list(r)   # [0,1,2,3,4] ← still works! reusable

it = iter(r)  # NOW one-pass iterator
next(it)  # 0
next(it)  # 1
list(it)  # [2,3,4] — partial!
list(it)  # [] — exhausted`} />}
        />
        <TrapBox
          number={3}
          name="send() se Pehle next() Prime Karna"
          level="M"
          question="Generator banake directly send() kar sakte hain?"
          wrongAnswer="Haan — send() first value bheji jaayegi"
          correctAnswer="TypeError! First call hamesha next() ya send(None) honi chahiye — generator ko yield pe laao pehle."
          why="Fresh generator ka execution shuru nahi hua hota — pehle yield tak pahunchana zaroori hai."
          fix={<CodeBlock code={`def gen():
    val = yield
    yield val * 2

g = gen()
next(g)      # prime — yield pe aao
g.send(5)    # 10 — ab send karo`} />}
        />
      </SectionBlock>

      <SectionBlock icon="🚫" title="When NOT to Use Generator">
        <CodeBlock code={`# Generator mat use karo jab:

# 1. Indexing chahiye
gen = (x for x in range(10))
gen[3]   # TypeError — generators don't support indexing
# Fix: list use karo

# 2. len() chahiye
len(gen)  # TypeError — no length
# Fix: list use karo ya count track karo

# 3. Multiple passes chahiye
g = (x**2 for x in range(5))
list(g)  # [0,1,4,9,16] — first pass
list(g)  # [] — gone!
# Fix: list comprehension use karo

# 4. Dataset chhota hai — clarity zyada important
# Bad: needless complexity
def get_evens(lst):
    return (x for x in lst if x % 2 == 0)  # overkill for small

# Good: direct
evens = [x for x in small_list if x % 2 == 0]

# Generator use karo jab:
# - Large/infinite data streams
# - Pipeline processing
# - Memory constraints hain
# - One-pass enough hai`} />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "Iterable", value: "__iter__() — can give iterator (reusable)" },
          { label: "Iterator", value: "__iter__() + __next__() — one-pass, stateful" },
          { label: "Generator", value: "Special iterator via yield — lazy" },
          { label: "def + yield", value: "Generator function — lazy iterator banta hai" },
          { label: "next(g)", value: "Next value — StopIteration at end" },
          { label: "next(g, default)", value: "Safe next — no StopIteration" },
          { label: "(expr for x in it)", value: "Generator expression — lazy" },
          { label: "yield from it", value: "Delegate to sub-iterable" },
          { label: "g.send(val)", value: "Send value into generator (prime first)" },
          { label: "Terminal ops", value: "list/sum/sorted/any/all/in → exhaust!" },
          { label: "range()", value: "Iterable (NOT iterator) — reusable" },
          { label: "Exhaust", value: "Generator ek baar — dobara loop = empty" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Decorators", description: "Generator-based @contextmanager", href: "/roadmap/topic/python-decorators/0" }}
          to={{ title: "Exception Handling", description: "StopIteration aur generator exceptions", href: "/roadmap/topic/python-exceptions/0" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
