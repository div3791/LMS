import {
  NoteLayout, SectionBlock, MentalModel, TrapBox, Cheatsheet,
  QuickRecall, ConnectedTopics, InfoBox, CodeBlock, CompareBlock,
} from '../../components/notes'

const C = {
  for_c:  '#4F8CFF',
  while_c:'#F59E0B',
  break_c:'#F87171',
  cont_c: '#A78BFA',
  else_c: '#34D399',
  muted:  '#8B949E',
  dim:    '#2D333B',
}

// ─────────────────────────────────────────────────────────
// SVG 1 — For loop internals
// ─────────────────────────────────────────────────────────
function ForLoopSVG() {
  return (
    <svg viewBox="0 0 520 180" className="w-full" aria-label="For loop internals">
      <defs>
        <style>{`
          @keyframes flFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
          .fl0{animation:flFade .3s .0s ease both}
          .fl1{animation:flFade .3s .12s ease both}
          .fl2{animation:flFade .3s .24s ease both}
          .fl3{animation:flFade .3s .36s ease both}
          .fl4{animation:flFade .3s .48s ease both}
        `}</style>
        <marker id="flArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.muted}/>
        </marker>
        <marker id="flBlue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.for_c}/>
        </marker>
      </defs>

      {/* Step 1: iter() */}
      <g className="fl0">
        <rect x="10" y="10" width="110" height="44" rx="8"
          fill={C.for_c} fillOpacity=".12" stroke={C.for_c} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="65" y="28" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.for_c} fontFamily="Poppins,sans-serif">iterable</text>
        <text x="65" y="44" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Space Mono,monospace">[1, 2, 3]</text>
      </g>

      <g className="fl1">
        <line x1="120" y1="32" x2="178" y2="32"
          stroke={C.for_c} strokeWidth="1.8" markerEnd="url(#flBlue)"/>
        <text x="149" y="27" textAnchor="middle" fontSize="8" fill={C.for_c}
          fontFamily="Poppins,sans-serif">iter()</text>

        <rect x="180" y="10" width="110" height="44" rx="8"
          fill={C.for_c} fillOpacity=".08" stroke={C.for_c} strokeOpacity=".4" strokeWidth="1.5"/>
        <text x="235" y="28" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.for_c} fontFamily="Poppins,sans-serif">iterator</text>
        <text x="235" y="44" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">tracks position</text>
      </g>

      {/* next() loop */}
      <g className="fl2">
        <line x1="290" y1="32" x2="348" y2="32"
          stroke={C.for_c} strokeWidth="1.8" markerEnd="url(#flBlue)"/>
        <text x="319" y="27" textAnchor="middle" fontSize="8" fill={C.for_c}
          fontFamily="Poppins,sans-serif">next()</text>

        <rect x="350" y="10" width="120" height="44" rx="8"
          fill={C.else_c} fillOpacity=".1" stroke={C.else_c} strokeOpacity=".4" strokeWidth="1.5"/>
        <text x="410" y="28" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.else_c} fontFamily="Poppins,sans-serif">body runs</text>
        <text x="410" y="44" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">with current item</text>
      </g>

      {/* StopIteration */}
      <g className="fl3">
        <line x1="410" y1="54" x2="410" y2="90"
          stroke={C.muted} strokeWidth="1.5" markerEnd="url(#flArr)"/>

        <rect x="350" y="92" width="120" height="44" rx="8"
          fill={C.break_c} fillOpacity=".1" stroke={C.break_c} strokeOpacity=".4" strokeWidth="1.5"/>
        <text x="410" y="110" textAnchor="middle" fontSize="9" fontWeight="700"
          fill={C.break_c} fontFamily="Poppins,sans-serif">StopIteration</text>
        <text x="410" y="126" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">→ loop ends</text>

        {/* Loop back arrow */}
        <path d="M290 32 Q290 148 235 148 Q180 148 180 116 L180 54"
          stroke={C.muted} strokeWidth="1.5" fill="none" strokeDasharray="4 3"
          markerEnd="url(#flArr)"/>
        <text x="220" y="160" textAnchor="middle" fontSize="8" fill={C.muted}
          fontFamily="Open Sans,sans-serif">repeat until done</text>
      </g>

      <g className="fl4">
        <rect x="8" y="130" width="330" height="42" rx="8"
          fill={C.dim} fillOpacity=".5" stroke={C.muted} strokeOpacity=".2" strokeWidth="1"/>
        <text x="173" y="148" textAnchor="middle" fontSize="8.5" fontFamily="Space Mono,monospace"
          fill="#E6EDF3">for x in [1,2,3]:  →  it=iter([1,2,3])</text>
        <text x="173" y="164" textAnchor="middle" fontSize="8.5" fontFamily="Space Mono,monospace"
          fill={C.muted}>{'while True: x=next(it)  # StopIteration → stop'}</text>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 2 — break / continue / else visual
// ─────────────────────────────────────────────────────────
function BreakContinueSVG() {
  return (
    <svg viewBox="0 0 520 150" className="w-full" aria-label="break continue else">
      <defs>
        <style>{`
          @keyframes bcFade{from{opacity:0}to{opacity:1}}
          .bc{animation:bcFade .4s .1s ease both}
        `}</style>
        <marker id="bcRed" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.break_c}/>
        </marker>
        <marker id="bcPurp" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.cont_c}/>
        </marker>
        <marker id="bcGreen" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.else_c}/>
        </marker>
      </defs>
      <g className="bc">
        {/* break */}
        <rect x="10" y="10" width="150" height="58" rx="9"
          fill={C.break_c} fillOpacity=".1" stroke={C.break_c} strokeOpacity=".4" strokeWidth="1.5"/>
        <text x="85" y="30" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.break_c} fontFamily="Poppins,sans-serif">break</text>
        <text x="85" y="47" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">Loop turant band</text>
        <text x="85" y="60" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">else block nahi chalega</text>

        {/* continue */}
        <rect x="185" y="10" width="150" height="58" rx="9"
          fill={C.cont_c} fillOpacity=".1" stroke={C.cont_c} strokeOpacity=".4" strokeWidth="1.5"/>
        <text x="260" y="30" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.cont_c} fontFamily="Poppins,sans-serif">continue</text>
        <text x="260" y="47" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">Is iteration skip</text>
        <text x="260" y="60" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">Loop jaari rehta hai</text>

        {/* else */}
        <rect x="360" y="10" width="152" height="58" rx="9"
          fill={C.else_c} fillOpacity=".1" stroke={C.else_c} strokeOpacity=".4" strokeWidth="1.5"/>
        <text x="436" y="30" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.else_c} fontFamily="Poppins,sans-serif">else on loop</text>
        <text x="436" y="47" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">Loop normally complete</text>
        <text x="436" y="60" textAnchor="middle" fontSize="8.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">hone ke baad chalta hai</text>

        {/* Full example */}
        <rect x="10" y="82" width="502" height="60" rx="8"
          fill={C.dim} fillOpacity=".5" stroke={C.muted} strokeOpacity=".2" strokeWidth="1"/>
        <text x="20" y="100" fontSize="8.5" fontFamily="Space Mono,monospace" fill={C.muted}>
          for item in items:
        </text>
        <text x="20" y="116" fontSize="8.5" fontFamily="Space Mono,monospace" fill={C.muted}>
          {'    '}if item == target: break  # ← found! stop
        </text>
        <text x="20" y="132" fontSize="8.5" fontFamily="Space Mono,monospace" fill={C.else_c}>
          else: print("Not found")         # ← only if break never ran
        </text>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 3 — Quick Recall
// ─────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 540 160" className="w-full" aria-label="Loops quick recall">
      <defs>
        <style>{`
          @keyframes lrPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .lr0{animation:lrPop .3s .0s ease both}
          .lr1{animation:lrPop .3s .12s ease both}
          .lr2{animation:lrPop .3s .24s ease both}
        `}</style>
      </defs>
      <g className="lr0">
        <rect x="4" y="4" width="168" height="148" rx="9"
          fill={C.for_c} fillOpacity=".09" stroke={C.for_c} strokeOpacity=".35" strokeWidth="1.5"/>
        <text x="88" y="24" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.for_c} fontFamily="Poppins,sans-serif">for loop</text>
        {['iter() + next() internally', 'enumerate() for index', 'zip() for parallel', 'range() for numbers', 'for x in dict: → keys'].map((l, i) => (
          <text key={i} x="14" y={42 + i * 18} fontSize="8.5"
            fill={C.muted} fontFamily="Open Sans,sans-serif">• {l}</text>
        ))}
      </g>
      <g className="lr1">
        <rect x="180" y="4" width="168" height="148" rx="9"
          fill={C.while_c} fillOpacity=".09" stroke={C.while_c} strokeOpacity=".35" strokeWidth="1.5"/>
        <text x="264" y="24" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.while_c} fontFamily="Poppins,sans-serif">while loop</text>
        {['Condition check first', 'while True + break', 'Must change variable!', 'Infinite loop risk', 'Use for unknown count'].map((l, i) => (
          <text key={i} x="190" y={42 + i * 18} fontSize="8.5"
            fill={C.muted} fontFamily="Open Sans,sans-serif">• {l}</text>
        ))}
      </g>
      <g className="lr2">
        <rect x="356" y="4" width="180" height="148" rx="9"
          fill={C.break_c} fillOpacity=".09" stroke={C.break_c} strokeOpacity=".35" strokeWidth="1.5"/>
        <text x="446" y="24" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.break_c} fontFamily="Poppins,sans-serif">break/continue</text>
        {['break → exit loop', 'continue → skip iter', 'else on loop:', 'runs if no break', 'Search pattern'].map((l, i) => (
          <text key={i} x="366" y={42 + i * 18} fontSize="8.5"
            fill={C.muted} fontFamily="Open Sans,sans-serif">• {l}</text>
        ))}
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// Main Note
// ─────────────────────────────────────────────────────────
export default function LoopsNote() {
  return (
    <NoteLayout
      title="Loops — for, while, break, continue"
      phase="0A"
      subtitle="for loop ke andar iter() + next() chalta hai, while condition pe, aur else-on-loop ek powerful feature hai."
    >

      {/* ── 1. Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — for loop andar se kaise kaam karta hai">
        <MentalModel
          analogyTitle="📦 Assembly line worker"
          analogy={
            <div className="space-y-4 text-sm font-body">
              <p className="text-content font-semibold leading-note">
                for loop ek assembly line worker hai. Iterator belt pe khada hai, ek-ek item
                uthata hai, process karta hai, agla uthata hai — jab belt khaali ho jaaye toh band ho jaata hai.
              </p>
              <div className="space-y-2 border-t border-highlight pt-3">
                {[
                  { step: 'iter(data)',    note: 'belt shuru karo — iterator banao', color: 'text-primary' },
                  { step: 'next(it)',      note: 'agla item uthao', color: 'text-accent' },
                  { step: 'body run',      note: 'item process karo', color: 'text-visual-2' },
                  { step: 'StopIteration',note: 'belt khaali — loop end', color: 'text-visual-4' },
                ].map(r => (
                  <div key={r.step} className="flex items-start gap-2">
                    <code className="font-code text-xs text-primary shrink-0 w-32">{r.step}</code>
                    <span className="text-xs text-content-muted leading-note">{r.note}</span>
                  </div>
                ))}
              </div>
            </div>
          }
          diagram={<ForLoopSVG />}
        />
      </SectionBlock>

      {/* ── 2. for loop ── */}
      <SectionBlock icon="🔁" title="for Loop">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="for_loop.py"
            code={`# Basic for loop
for x in [1, 2, 3]:
    print(x)   # 1, 2, 3

# range() — number sequence
for i in range(5):         # 0,1,2,3,4
    print(i)

for i in range(2, 10, 2): # 2,4,6,8 (start, stop, step)
    print(i)

for i in range(10, 0, -1): # 10,9,...,1 (reverse)
    print(i)

# String iteration
for char in "hello":
    print(char)   # h, e, l, l, o

# enumerate() — index + value
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")   # 0: apple, 1: banana...

for i, fruit in enumerate(fruits, start=1):  # 1-based index
    print(f"{i}: {fruit}")

# zip() — parallel iteration
names = ["Alice", "Bob"]
ages = [25, 30]
for name, age in zip(names, ages):
    print(f"{name} is {age}")

# dict iteration
user = {"name": "Divyesh", "age": 22}
for key in user:           # default → keys
    print(key)
for val in user.values():  # values
    print(val)
for k, v in user.items():  # key-value pairs
    print(f"{k}={v}")`}
          />
        </div>
      </SectionBlock>

      {/* ── 3. while loop ── */}
      <SectionBlock icon="🔄" title="while Loop">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="while_loop.py"
            code={`# Basic while
count = 0
while count < 5:
    print(count)   # 0, 1, 2, 3, 4
    count += 1     # ← must update, warna infinite loop!

# while True + break pattern (very common)
while True:
    user_input = input("Enter command: ")
    if user_input == "quit":
        break
    process(user_input)

# Retry pattern
attempts = 0
while attempts < 3:
    try:
        result = fetch_data()
        break
    except Exception:
        attempts += 1

# Condition-based reading
with open("file.txt") as f:
    line = f.readline()
    while line:
        process(line)
        line = f.readline()`}
          />
          <InfoBox type="warn" title="Infinite loop trap">
            while loop mein variable update karna mat bhulo. <code className="font-code text-xs">while count {'<'} 5:</code>
            ke andar <code className="font-code text-xs">count += 1</code> hona chahiye warna program hang ho jaayega.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 4. break / continue / else ── */}
      <SectionBlock icon="⚡" title="break, continue, else on Loop">
        <div className="space-y-4">
          <div className="bg-surface-visual rounded-xl p-5">
            <BreakContinueSVG />
          </div>
          <CodeBlock
            language="python"
            filename="break_continue.py"
            code={`# break — immediate exit
for i in range(10):
    if i == 5:
        break
    print(i)   # 0, 1, 2, 3, 4

# continue — skip this iteration
for i in range(10):
    if i % 2 == 0:
        continue   # even numbers skip
    print(i)       # 1, 3, 5, 7, 9

# else on for loop (important!)
# else block runs ONLY if loop completed without break
items = [1, 3, 5, 7]
target = 4

for item in items:
    if item == target:
        print("Found!")
        break
else:
    print("Not found")   # runs — no break happened

# Search pattern using for-else
def find_user(user_id, users):
    for user in users:
        if user.id == user_id:
            return user
    else:
        raise ValueError("User not found")

# Nested break — only breaks innermost
for i in range(3):
    for j in range(3):
        if j == 1:
            break    # only inner loop breaks
    print(f"i={i}")  # i=0, i=1, i=2 — outer continues`}
          />
        </div>
      </SectionBlock>

      {/* ── 5. List Comprehension ── */}
      <SectionBlock icon="⚡" title="List Comprehension — Compact Loops">
        <div className="space-y-4">
          <CompareBlock
            badTitle="Verbose loop"
            bad={`result = []
for x in nums:
    if x % 2 == 0:
        result.append(x * 2)
# multiple lines, mutable state`}
            goodTitle="List comprehension"
            good={`result = [x * 2 for x in nums if x % 2 == 0]
# one line, cleaner intent`}
          />
          <CodeBlock
            language="python"
            filename="comprehension.py"
            code={`# Basic comprehension
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With filter
evens = [x for x in range(20) if x % 2 == 0]

# Nested comprehension
matrix = [[1,2,3],[4,5,6],[7,8,9]]
flat = [x for row in matrix for x in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Dict comprehension
squares_dict = {x: x**2 for x in range(5)}
# {0:0, 1:1, 2:4, 3:9, 4:16}

# Set comprehension
unique_lens = {len(word) for word in ["hi", "hello", "hey"]}
# {2, 5, 3}

# Generator expression (lazy — no list created)
total = sum(x**2 for x in range(1000000))  # memory efficient`}
          />
          <InfoBox type="warn" title="Comprehension ke andar side effects mat daalo">
            <code className="font-code text-xs">[print(x) for x in data]</code> — ye technically kaam karta hai
            but wrong approach. Side effects ke liye plain for loop use karo. Comprehension sirf
            transformations ke liye hai.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 6. Traps ── */}
      <SectionBlock icon="🪤" title="Interview Traps">
        <div className="space-y-4">
          <TrapBox
            number={1}
            name="Modifying list during iteration"
            level="M"
            question="for x in my_list: if x > 5: my_list.remove(x) — kya problem hai?"
            wrongAnswer="Koi problem nahi — ye valid hai"
            correctAnswer="Items skip ho jaate hain — remove karte waqt list shift hoti hai"
            why="List remove karne se indices shift hote hain aur iterator galat position pe chala jaata hai. Fix: iterate over a copy — for x in my_list[:]: ya list() se."
          />
          <TrapBox
            number={2}
            name="range is not a list"
            level="B"
            question="r = range(5) — kya r[2] kaam karega?"
            wrongAnswer="Nahi — range lazy hai, indexing nahi"
            correctAnswer="Haan — range indexing support karta hai but list nahi hai"
            why="range object sequence protocol support karta hai — r[2]=2, len(r)=5, 3 in r=True. Lekin ye list nahi hai — values store nahi hoti. Very memory efficient — range(1_000_000) sirf 3 numbers store karta hai."
          />
          <TrapBox
            number={3}
            name="else on loop confusion"
            level="M"
            question="for loop ka else kab run hota hai?"
            wrongAnswer="Jab loop empty hoga"
            correctAnswer="Jab loop normally complete ho — bina break ke"
            why="Loop else = 'no break happened'. Agar loop khaali list pe bhi chala bina break ke toh else chalega. Ye search patterns ke liye useful hai — 'item nahi mila' indicate karne ke liye."
          />
        </div>
      </SectionBlock>

      {/* ── 7. Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'for x in iter:',         value: 'iterate over any iterable' },
          { label: 'range(n)',                value: '0 to n-1 — range(start, stop, step)' },
          { label: 'enumerate(it)',           value: '(index, value) pairs' },
          { label: 'zip(a, b)',               value: 'parallel iteration — stops at shortest' },
          { label: 'while cond:',             value: 'loop while condition True' },
          { label: 'while True: ... break',   value: 'event loop / retry pattern' },
          { label: 'break',                   value: 'exit loop immediately (else skipped)' },
          { label: 'continue',               value: 'skip current iteration, keep looping' },
          { label: 'for ... else:',           value: 'else runs only if no break' },
          { label: '[x for x in it if c]',   value: 'list comprehension — transform + filter' },
          { label: '{k:v for k,v in it}',    value: 'dict comprehension' },
          { label: '(x for x in it)',        value: 'generator expression — lazy, no list' },
        ]} />
      </SectionBlock>

      {/* ── 8. Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── 9. Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{
            title: 'Loops',
            description: 'for, while, break, continue, else, comprehensions',
          }}
          to={{
            title: 'Python Memory Model — Mutable vs Immutable',
            description: 'Loops ke baad — objects memory mein kaise rehte hain',
            href: '/roadmap/topic/python-basics/8',
          }}
        />
      </SectionBlock>

    </NoteLayout>
  )
}
