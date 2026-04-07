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

function CallStackSVG() {
  return (
    <svg viewBox="0 0 520 255" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes csPush { 0%{opacity:0;transform:translateY(15px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes csPop { 0%,60%{opacity:1;transform:translateY(0)} 80%,100%{opacity:.3;transform:translateY(-10px)} }
          @keyframes csLabel { 0%,100%{opacity:.7} 50%{opacity:1} }
          .cs1{animation:csPush .4s .1s ease both}
          .cs2{animation:csPush .4s .5s ease both}
          .cs3{animation:csPush .4s .9s ease both}
          .cs-pop{animation:csPop 3s 1.5s ease infinite}
          .cs-lbl{animation:csLabel 2s ease-in-out infinite}
        `}</style>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Call Stack — LIFO (Last In, First Out)</text>

      {/* Stack grows upward visualization */}
      <text x="110" y="42" textAnchor="middle" fill={C.muted} fontSize="10">← grows up (new frames on top)</text>

      {/* Frame 3 — top (most recent) */}
      <g className="cs3 cs-pop">
        <rect x="15" y="50" width="210" height="55" rx="6" fill={C.orange} fillOpacity=".15" stroke={C.orange} strokeWidth="2"/>
        <text x="120" y="68" textAnchor="middle" fill={C.orangeLight} fontSize="11" fontWeight="700">factorial(1)  ← TOP</text>
        <text x="30" y="85" fill={C.muted} fontSize="9">n=1</text>
        <text x="30" y="99" fill={C.text} fontSize="9">return 1</text>
        <text x="175" y="68" textAnchor="middle" fill={C.orange} fontSize="9" className="cs-lbl">CURRENT</text>
      </g>

      {/* Frame 2 */}
      <g className="cs2">
        <rect x="15" y="112" width="210" height="55" rx="6" fill={C.blue} fillOpacity=".15" stroke={C.blue} strokeWidth="1.5"/>
        <text x="120" y="130" textAnchor="middle" fill={C.blueLight} fontSize="11" fontWeight="700">factorial(2)</text>
        <text x="30" y="147" fill={C.muted} fontSize="9">n=2</text>
        <text x="30" y="161" fill={C.text} fontSize="9">waiting: 2 * factorial(1)</text>
      </g>

      {/* Frame 1 */}
      <g className="cs1">
        <rect x="15" y="174" width="210" height="55" rx="6" fill={C.purple} fillOpacity=".15" stroke={C.purple} strokeWidth="1.5"/>
        <text x="120" y="192" textAnchor="middle" fill={C.purpleLight} fontSize="11" fontWeight="700">factorial(3)</text>
        <text x="30" y="209" fill={C.muted} fontSize="9">n=3</text>
        <text x="30" y="223" fill={C.text} fontSize="9">waiting: 3 * factorial(2)</text>
      </g>

      {/* Stack base */}
      <rect x="15" y="237" width="210" height="12" rx="3" fill={C.muted} fillOpacity=".3"/>
      <text x="120" y="247" textAnchor="middle" fill={C.muted} fontSize="9">Stack Base</text>

      {/* Frame anatomy on right */}
      <rect x="285" y="40" width="225" height="215" rx="8" fill={C.green} fillOpacity=".06" stroke={C.green} strokeWidth="1.5"/>
      <text x="397" y="60" textAnchor="middle" fill={C.greenLight} fontSize="11" fontWeight="700">Stack Frame Contents</text>

      {[
        { label: "Local variables", desc: "n, result, temp — sirf is function ke", color: C.blue },
        { label: "Return address", desc: "Kahan return hoga call ke baad", color: C.orange },
        { label: "Arguments", desc: "Function ko diye gaye parameters", color: C.purple },
        { label: "Previous frame", desc: "Caller ka frame reference", color: C.green },
      ].map((item, i) => (
        <g key={item.label}>
          <rect x="295" y={78 + i * 42} width="205" height="34" rx="5" fill={item.color} fillOpacity=".1" stroke={item.color} strokeWidth="1"/>
          <text x="305" y={93 + i * 42} fill={item.color} fontSize="10" fontWeight="700">{item.label}</text>
          <text x="305" y={107 + i * 42} fill={C.muted} fontSize="9">{item.desc}</text>
        </g>
      ))}

      <text x="120" y="255" textAnchor="middle" fill={C.muted} fontSize="9">Each function call = new frame pushed</text>
    </svg>
  );
}

function RecursionSVG() {
  return (
    <svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes recDown { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
          @keyframes recUp { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
          @keyframes recBase { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.4} }
          .rec-down{stroke-dasharray:200;animation:recDown 1s .3s ease both}
          .rec-up{stroke-dasharray:200;animation:recUp 1s 1.5s ease both}
          .rec-base{animation:recBase 2s ease-in-out infinite}
        `}</style>
        <marker id="recArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
        <marker id="recGrn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
      </defs>
      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Recursion — Descent aur Ascent</text>

      {/* Calls going down */}
      {[
        { x: 15, label: "factorial(5)", n: "5 * ...", color: C.purple },
        { x: 110, label: "factorial(4)", n: "4 * ...", color: C.blue },
        { x: 205, label: "factorial(3)", n: "3 * ...", color: C.blue },
        { x: 300, label: "factorial(2)", n: "2 * ...", color: C.orange },
      ].map((item, i) => (
        <g key={item.label}>
          <rect x={item.x} y="28" width="90" height="40" rx="5" fill={item.color} fillOpacity=".12" stroke={item.color} strokeWidth="1.2"/>
          <text x={item.x + 45} y="44" textAnchor="middle" fill={item.color} fontSize="9" fontWeight="700">{item.label}</text>
          <text x={item.x + 45} y="60" textAnchor="middle" fill={C.muted} fontSize="9">{item.n}</text>
          {i < 3 && <line x1={item.x + 90} y1="48" x2={item.x + 110} y2="48" stroke={C.orange} strokeWidth="1.5" className="rec-down" markerEnd="url(#recArr)"/>}
        </g>
      ))}

      {/* Base case */}
      <rect x="395" y="28" width="110" height="40" rx="5" fill={C.green} fillOpacity=".15" stroke={C.green} strokeWidth="2" className="rec-base"/>
      <text x="450" y="44" textAnchor="middle" fill={C.greenLight} fontSize="9" fontWeight="700">factorial(1)</text>
      <text x="450" y="60" textAnchor="middle" fill={C.greenLight} fontSize="9">return 1 ← BASE</text>
      <line x1="390" y1="48" x2="393" y2="48" stroke={C.orange} strokeWidth="1.5" className="rec-down" markerEnd="url(#recArr)"/>

      <text x="260" y="90" textAnchor="middle" fill={C.muted} fontSize="11">↑ Values unwind back up</text>

      {/* Returns going up */}
      {[
        { x: 395, val: "→ 1" },
        { x: 300, val: "→ 2" },
        { x: 205, val: "→ 6" },
        { x: 110, val: "→ 24" },
        { x: 15, val: "→ 120" },
      ].map((item, i) => (
        <g key={item.x}>
          <rect x={item.x} y="100" width="90" height="30" rx="5" fill={C.green} fillOpacity=".1" stroke={C.green} strokeWidth="1"/>
          <text x={item.x + 45} y="119" textAnchor="middle" fill={C.greenLight} fontSize="11" fontFamily="monospace">{item.val}</text>
          {i < 4 && <line x1={item.x} y1="115" x2={item.x - 20} y2="115" stroke={C.green} strokeWidth="1.5" className="rec-up" markerEnd="url(#recGrn)"/>}
        </g>
      ))}

      <text x="260" y="155" textAnchor="middle" fill={C.orange} fontSize="10">Base case = recursion ka exit — iske bina infinite loop + RecursionError</text>
      <text x="260" y="172" textAnchor="middle" fill={C.muted} fontSize="10">Python default limit: 1000 frames (sys.getrecursionlimit())</text>
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="160" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Call Stack & Recursion</text>
      {[
        { x: 15, color: C.purple, title: "Call Stack", lines: ["LIFO — last in, first out", "Each call = new frame", "Frame: locals + ret addr"] },
        { x: 185, color: C.orange, title: "Recursion Rules", lines: ["Base case zaroori!", "Each call closer to base", "Default limit: 1000"] },
        { x: 355, color: C.blue, title: "Traceback", lines: ["Bottom = original call", "Top = where error was", "RecursionError = no base"] },
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

export default function PythonCallStack0() {
  return (
    <NoteLayout title="Call Stack & Recursion" phase="0B" subtitle="Stack frames, recursion ka magic, aur RecursionError se bachne ke tarike">

      <SectionBlock icon="🧠" title="Mental Model — Call Stack Kya Hai?">
        <MentalModel
          analogy="Call stack = thali ki stack (dishes pile). Khana khane ke baad thali rakhte ho (function call = push). Sabse upar wali thali pehle uthati hai (return = pop). Ek thali dusre ke upar nahi rakh sakte agar stack full ho — RecursionError!"
          diagram={<CallStackSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🔬" title="Under the Hood — Stack Frame">
        <HoodBox>
          <div className="space-y-2 text-sm text-content leading-relaxed">
            <p>Har function call pe Python ek <span className="text-orange-400 font-semibold">frame object</span> create karta hai jismein:</p>
            <p>• <span className="text-blue-400 font-semibold">f_locals</span> — function ke local variables (dict)</p>
            <p>• <span className="text-blue-400 font-semibold">f_back</span> — calling frame ka reference (linked list)</p>
            <p>• <span className="text-blue-400 font-semibold">f_lineno</span> — currently executing line number</p>
            <p>• <span className="text-green-400 font-semibold">f_code</span> — compiled code object</p>
            <p>Function return hone pe frame <span className="text-red-400 font-semibold">pop</span> aur garbage collect. CPython mein default stack limit = <span className="text-orange-400 font-semibold">1000 frames</span>.</p>
          </div>
        </HoodBox>
      </SectionBlock>

      <SectionBlock icon="🔁" title="Recursion — Base Case + Recursive Case">
        <RecursionSVG />
        <CodeBlock code={`# Anatomy of a recursive function
def factorial(n):
    # 1. Base case — recursion rok do
    if n <= 1:
        return 1

    # 2. Recursive case — apne aap ko call karo
    #    with SMALLER input (base ke closer)
    return n * factorial(n - 1)

# Fibonacci — double recursion
def fib(n):
    if n <= 1:    # base case
        return n
    return fib(n-1) + fib(n-2)  # 2 recursive calls!

# fib(n) has O(2^n) time complexity — exponential!
# Optimize with memoization:
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_fast(n):
    if n <= 1:
        return n
    return fib_fast(n-1) + fib_fast(n-2)
# Now O(n) — each value computed once`} />
      </SectionBlock>

      <SectionBlock icon="📊" title="RecursionError — Limit aur Fix">
        <CodeBlock code={`import sys

# Current limit check
sys.getrecursionlimit()   # 1000 default

# Increase limit (carefully!)
sys.setrecursionlimit(5000)

# Detect remaining depth
def current_depth():
    frame = sys._getframe()
    depth = 0
    while frame:
        depth += 1
        frame = frame.f_back
    return depth

# RecursionError example
def infinite():
    return infinite()  # no base case!

infinite()  # RecursionError: maximum recursion depth exceeded`} />
      </SectionBlock>

      <SectionBlock icon="📈" title="Memory Cost — Senior-Level Insight">
        <HoodBox title="Peak Memory Formula">
          <div className="space-y-2 text-sm text-content leading-relaxed">
            <p><span className="text-orange-400 font-semibold">Peak Memory ≈ depth × memory per suspended frame</span></p>
            <p>Har suspended frame mein jo bhi local variables hain — woh tab tak memory mein rehte hain jab tak frame pop nahi hota.</p>
            <p><span className="text-red-400 font-semibold">Danger:</span> Agar bada object recursive call se <strong>PEHLE</strong> create ho → object depth × size memory lete hain!</p>
            <p><span className="text-green-400 font-semibold">Safe:</span> Bada object recursive call ke <strong>BAAD</strong> create karo → unwinding mein briefly live, small peak.</p>
          </div>
        </HoodBox>
        <CompareBlock
          bad={<CodeBlock code={`# DANGEROUS — big object BEFORE recursive call
def process_tree(node):
    big_data = load_all_data()  # ← created BEFORE recursion
    result = process_tree(node.child)  # suspended with big_data!
    return combine(big_data, result)

# At depth 100: 100 × big_data in memory simultaneously!
# Memory = O(depth × data_size)`} />}
          good={<CodeBlock code={`# SAFE — result AFTER recursive call
def process_tree(node):
    child_result = process_tree(node.child)  # recurse first
    big_data = load_all_data()  # created AFTER — not multiplied
    return combine(big_data, child_result)
# Only one big_data alive at a time during unwinding

# Even better — convert deep recursion to iteration
def process_tree_iter(root):
    stack = [root]
    results = []
    while stack:
        node = stack.pop()
        results.append(process(node))
        stack.extend(node.children)`} />}
          badLabel="Object BEFORE recursion — multiplies by depth"
          goodLabel="Object AFTER recursion — small peak memory"
        />
      </SectionBlock>

      <SectionBlock icon="⚖️" title="Recursion vs Iteration — Kab Kya">
        <CompareBlock
          bad={<CodeBlock code={`# Recursion — simple but memory heavy
def sum_list_rec(lst, i=0):
    if i >= len(lst):
        return 0
    return lst[i] + sum_list_rec(lst, i+1)

# Problem: 10000 items → 10000 frames!
sum_list_rec(list(range(10000)))
# RecursionError!`} />}
          good={<CodeBlock code={`# Iteration — O(1) stack space
def sum_list_iter(lst):
    total = 0
    for x in lst:
        total += x
    return total

# Works for any size
sum(range(10000000))  # Python built-in — C speed

# Use recursion only for:
# - Tree/graph traversal
# - Divide & conquer (merge sort)
# - Problems with natural recursive structure`} />}
          badLabel="Deep recursion — stack overflow risk"
          goodLabel="Iteration — constant stack space"
        />
      </SectionBlock>

      <SectionBlock icon="📋" title="Traceback — Kaise Padho">
        <CodeBlock code={`# Sample traceback
# Traceback (most recent call last):
#   File "main.py", line 15, in <module>
#     result = process_data(data)           ← outermost call
#   File "main.py", line 8, in process_data
#     return transform(x)
#   File "main.py", line 4, in transform
#     return int(x) / 0                     ← where error happened
# ZeroDivisionError: division by zero       ← exception type + message

# Reading strategy:
# 1. Sabse NEECHE dekho — error type aur message
# 2. Neeche se upar — call chain
# 3. "most recent call last" → TOP = where it actually failed

# Inspect current stack programmatically
import traceback
import inspect

# Print current stack
traceback.print_stack()

# Get current frame info
frame = inspect.currentframe()
print(f"Function: {frame.f_code.co_name}")
print(f"File: {frame.f_code.co_filename}")
print(f"Line: {frame.f_lineno}")`} />
      </SectionBlock>

      <SectionBlock icon="🏭" title="Production — Kab Safe, Kab Dangerous">
        <CompareBlock
          bad={<CodeBlock code={`# DANGEROUS in production:
# 1. User-controlled nested JSON
def parse_json(data):
    if isinstance(data, dict):
        return {k: parse_json(v) for k, v in data.items()}
    # User sends 2000-deep nested JSON → RecursionError!

# 2. Directory traversal (unknown depth)
def list_all(path):
    for item in path.iterdir():
        if item.is_dir():
            yield from list_all(item)  # filesystem can be 100+ deep
        else:
            yield item

# 3. XML parsing with unknown depth
# 4. Graph traversal without visited set`} />}
          good={<CodeBlock code={`# SAFE for recursion:
# 1. Controlled internal trees (depth < 50)
#    - AST parsing (bounded)
#    - File system with max_depth param

# 2. Classic divide & conquer (O(log n) depth)
def binary_search(lst, target, lo, hi):
    if lo > hi: return -1
    mid = (lo + hi) // 2
    if lst[mid] == target: return mid
    if lst[mid] < target: return binary_search(lst, target, mid+1, hi)
    return binary_search(lst, target, lo, mid-1)
# depth = log2(n) ← safe even for 1M elements

# Rule: Recursion is NOT dangerous.
# Suspended state × depth IS dangerous.`} />}
          badLabel="User-controlled / unknown depth — use iteration"
          goodLabel="Bounded depth — recursion is fine"
        />
      </SectionBlock>

      <SectionBlock icon="🪤" title="Recursion Traps">
        <TrapBox
          number={1}
          name="Missing Base Case — Infinite Recursion"
          level="B"
          question="Recursion kab Python mein infinite loop nahi ban sakti?"
          wrongAnswer="Kabhi nahi — Python stack overflow se bachata hai"
          correctAnswer="RecursionError ata hai (1000 frames default) — but poora program crash! Missing base case sabse common reason."
          why="Python tail call optimization nahi karta — har call naya frame banata hai. Stack finite hai."
          fix={<CodeBlock code={`# Wrong — no base case
def count_down(n):
    print(n)
    return count_down(n - 1)  # never stops!

# Right — base case pehle
def count_down(n):
    if n <= 0:       # ← base case
        return
    print(n)
    return count_down(n - 1)`} />}
        />
        <TrapBox
          number={2}
          name="Python Tail Call Optimization Myth"
          level="M"
          question="Python tail recursion optimize karta hai?"
          wrongAnswer="Haan — tail call position mein ho to Python optimize kar deta hai"
          correctAnswer="Nahi! Python intentionally tail call optimization nahi karta. Guido van Rossum ne explicitly reject kiya — traceback readability ke liye."
          why="Python philosophy: explicit is better. TCO se tracebacks confusing ho jaate. Isliye deep recursion ke liye iteration prefer karo."
          fix={<CodeBlock code={`# Python mein yeh TCO nahi karta
def tail_fact(n, acc=1):
    if n <= 1:
        return acc
    return tail_fact(n-1, n*acc)  # ← still new frame!

# Fix: explicit iteration
def fact_iter(n):
    acc = 1
    while n > 1:
        acc *= n
        n -= 1
    return acc`} />}
        />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "Call Stack", value: "LIFO — last function called, first to return" },
          { label: "Stack Frame", value: "locals, return addr, f_back, f_lineno" },
          { label: "Default limit", value: "1000 frames (sys.getrecursionlimit())" },
          { label: "sys.setrecursionlimit(n)", value: "Limit badhao (carefully!)" },
          { label: "Base case", value: "MUST have — recursion ka exit point" },
          { label: "Recursive case", value: "Smaller input — base case ke toward" },
          { label: "Tail Call Opt", value: "Python mein NAHI hota" },
          { label: "Traceback read", value: "Bottom = error, top = outermost call" },
          { label: "Deep lists/trees", value: "Iteration prefer karo over recursion" },
          { label: "@lru_cache", value: "Memoize recursive calls — O(n) se O(2^n)" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Exception Handling", description: "RecursionError aur traceback reading", href: "/roadmap/topic/python-exceptions/0" }}
          to={{ title: "Closures", description: "Closure bhi stack frames use karta hai", href: "/roadmap/topic/python-functions/6" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
