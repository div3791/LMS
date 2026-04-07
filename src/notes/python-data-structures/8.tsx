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
  muted: '#94a3b8',
  text: '#e2e8f0',
  white: '#f8fafc',
  border: '#0f3460',
}

function CollectionMapSVG() {
  return (
    <svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes cmPop { 0%{opacity:0;transform:scale(.9)} 100%{opacity:1;transform:scale(1)} }
          .cm1{animation:cmPop .4s .1s ease both}
          .cm2{animation:cmPop .4s .3s ease both}
          .cm3{animation:cmPop .4s .5s ease both}
          .cm4{animation:cmPop .4s .7s ease both}
        `}</style>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">collections module — Specialized Containers</text>
      {[
        { cls: 'cm1', x: 15, y: 35, color: C.blue, name: 'defaultdict', base: 'dict subclass', use: 'Missing key → auto-create default' },
        { cls: 'cm2', x: 270, y: 35, color: C.green, name: 'Counter', base: 'dict subclass', use: 'Count hashable elements fast' },
        { cls: 'cm3', x: 15, y: 135, color: C.orange, name: 'deque', base: 'doubly-linked list', use: 'O(1) append/pop BOTH ends' },
        { cls: 'cm4', x: 270, y: 135, color: C.purple, name: 'OrderedDict', base: 'dict subclass', use: 'Order-aware operations (Python 3.7+ dict already ordered)' },
      ].map((item) => (
        <g key={item.name} className={item.cls}>
          <rect x={item.x} y={item.y} width="240" height="90" rx="10" fill={item.color} fillOpacity=".08" stroke={item.color} strokeWidth="1.5"/>
          <text x={item.x + 12} y={item.y + 22} fill={item.color} fontSize="14" fontWeight="800">{item.name}</text>
          <text x={item.x + 12} y={item.y + 40} fill={C.muted} fontSize="10">extends: {item.base}</text>
          <rect x={item.x + 12} y={item.y + 50} width="215" height="28" rx="5" fill={item.color} fillOpacity=".1"/>
          <text x={item.x + 20} y={item.y + 60} fill={item.color} fontSize="9" fontWeight="700">USE WHEN:</text>
          <text x={item.x + 20} y={item.y + 72} fill={C.text} fontSize="9">{item.use}</text>
        </g>
      ))}
    </svg>
  )
}

function DequeSVG() {
  return (
    <svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes dqSlide { 0%{opacity:0;transform:translateX(-15px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes dqSlideR { 0%{opacity:0;transform:translateX(15px)} 100%{opacity:1;transform:translateX(0)} }
          .dq-l{animation:dqSlide .5s .3s ease both}
          .dq-r{animation:dqSlideR .5s .3s ease both}
          .dq-pulse { animation: dqSlide .5s .1s ease both }
        `}</style>
        <marker id="dqL" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
        <marker id="dqR" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
          <path d="M8,0 L0,3 L8,6 Z" fill={C.orange}/>
        </marker>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">deque — Double-Ended Queue</text>
      <g className="dq-l">
        <text x="30" y="60" textAnchor="middle" fill={C.green} fontSize="11">appendleft()</text>
        <text x="30" y="75" textAnchor="middle" fill={C.green} fontSize="11">popleft()</text>
        <text x="30" y="90" textAnchor="middle" fill={C.greenLight} fontSize="10">O(1) ✓</text>
        <line x1="72" y1="75" x2="90" y2="75" stroke={C.green} strokeWidth="2" markerEnd="url(#dqL)"/>
      </g>
      {['A', 'B', 'C', 'D', 'E'].map((v, i) => (
        <g key={v} className="dq-pulse">
          <rect x={95 + i * 66} y="58" width="60" height="35" rx="6" fill={C.blue} fillOpacity=".2" stroke={C.blue} strokeWidth="1.5"/>
          <text x={125 + i * 66} y="80" textAnchor="middle" fill={C.blueLight} fontSize="16" fontWeight="700">{v}</text>
        </g>
      ))}
      <g className="dq-r">
        <text x="490" y="60" textAnchor="middle" fill={C.orange} fontSize="11">append()</text>
        <text x="490" y="75" textAnchor="middle" fill={C.orange} fontSize="11">pop()</text>
        <text x="490" y="90" textAnchor="middle" fill={C.orangeLight} fontSize="10">O(1) ✓</text>
        <line x1="427" y1="75" x2="445" y2="75" stroke={C.orange} strokeWidth="2" markerEnd="url(#dqR)"/>
      </g>
      <rect x="15" y="115" width="490" height="50" rx="8" fill="#0f172a"/>
      <text x="25" y="134" fill={C.muted} fontSize="10" fontFamily="monospace">list.insert(0, x)  →  O(n) shift all</text>
      <text x="25" y="150" fill={C.greenLight} fontSize="10" fontFamily="monospace">deque.appendleft(x)  →  O(1) always</text>
      <text x="300" y="134" fill={C.muted} fontSize="10" fontFamily="monospace">maxlen=N → sliding window!</text>
      <text x="300" y="150" fill={C.orangeLight} fontSize="10" fontFamily="monospace">auto-drop oldest element</text>
    </svg>
  )
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Collections</text>
      {[
        { x: 15, color: C.blue, title: 'defaultdict', lines: ['Missing key → factory call', 'int: counter, list: groupby', 'No KeyError ever'] },
        { x: 185, color: C.green, title: 'Counter', lines: ['most_common(n)', 'Subtract, add Counters', 'Arithmetic operations'] },
        { x: 355, color: C.orange, title: 'deque', lines: ['O(1) both ends', 'maxlen = sliding window', 'rotate() for queue tricks'] },
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
  )
}

export default function PythonDataStructures8() {
  return (
    <NoteLayout title="Collections Module" phase="0A" subtitle="defaultdict, Counter, deque, OrderedDict — dict aur list ke superpowers">

      <SectionBlock icon="🧠" title="Mental Model — collections Kab Use Karo?">
        <MentalModel
          analogy="Standard dict/list = basic thela. Collections = specialized tools: defaultdict = self-filling thela (kali jagah auto-fill), Counter = inventory tracker, deque = revolving door (O(1) dono taraf). Sahi kaam ke liye sahi tool."
          diagram={<CollectionMapSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🔵" title="defaultdict — Auto-Create Missing Keys">
        <div className="space-y-4">
          <InfoBox type="info" title="defaultdict — KeyError se mukt">
            Missing key access karo → factory function call hoti hai → default value create. int, list, set, dict — koi bhi factory de sakte ho.
          </InfoBox>
          <CodeBlock code={`from collections import defaultdict

# int factory — counter pattern
word_count = defaultdict(int)
text = "the cat sat on the mat the cat"
for word in text.split():
    word_count[word] += 1   # KeyError kabhi nahi!
# defaultdict(int, {'the': 3, 'cat': 2, 'sat': 1, ...})

# list factory — group by pattern
by_length = defaultdict(list)
for word in text.split():
    by_length[len(word)].append(word)
# {3: ['the', 'cat', 'sat', 'the', 'mat', 'the', 'cat'], 2: ['on']}

# set factory — unique values per key
user_roles = defaultdict(set)
user_roles["divyesh"].add("admin")
user_roles["divyesh"].add("dev")
user_roles["raj"].add("viewer")

# Custom factory
def make_config():
    return {"active": True, "level": 0}
user_config = defaultdict(make_config)
user_config["new_user"]["level"] = 5  # factory called auto`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🟢" title="Counter — Frequency Counter">
        <div className="space-y-4">
          <CodeBlock code={`from collections import Counter

# Create
c = Counter("aabbccca")        # Counter({'a': 3, 'c': 3, 'b': 2})
c = Counter(["a", "b", "a"])   # from list
c = Counter(a=3, b=2)          # from kwargs

# Most common
c.most_common(2)   # [('a', 3), ('c', 3)] — top 2

# Arithmetic
c1 = Counter(a=3, b=2)
c2 = Counter(a=1, b=4)
c1 + c2   # Counter(a=4, b=6)
c1 - c2   # Counter(a=2) — negatives dropped!
c1 & c2   # Counter(a=1, b=2) — min of each
c1 | c2   # Counter(a=3, b=4) — max of each

# Practical: word frequency
text = "to be or not to be that is the question"
counts = Counter(text.split())
counts.most_common(3)
# [('be', 2), ('to', 2), ('or', 1)]

# Check if anagram
def is_anagram(s1, s2):
    return Counter(s1) == Counter(s2)

is_anagram("listen", "silent")  # True`} />
          <TrapBox
            number={1}
            name="Counter arithmetic drops negatives"
            level="M"
            question="Counter(a=1) - Counter(a=5) = ?"
            wrongAnswer="Counter(a=-4)"
            correctAnswer="Counter() — empty! Negative counts dropped in subtraction"
            why="Counter subtraction uses + operator semantics — negatives silently removed. Use subtract() method to keep negatives."
            fix={<CodeBlock code={`c = Counter(a=1, b=3)
c.subtract(Counter(a=5, b=1))
# Counter({'b': 2, 'a': -4}) — negatives kept!`} />}
          />
        </div>
      </SectionBlock>

      <SectionBlock icon="🟠" title="deque — Double-Ended Queue">
        <div className="space-y-4">
          <DequeSVG />
          <CodeBlock code={`from collections import deque

dq = deque([1, 2, 3, 4, 5])

# Both ends — O(1)
dq.appendleft(0)    # [0, 1, 2, 3, 4, 5]
dq.append(6)        # [0, 1, 2, 3, 4, 5, 6]
dq.popleft()        # returns 0 — O(1)!
dq.pop()            # returns 6

# list.insert(0, x) = O(n) — deque.appendleft = O(1)

# maxlen — sliding window
last_5 = deque(maxlen=5)
for i in range(10):
    last_5.append(i)
# deque([5, 6, 7, 8, 9], maxlen=5) — auto-drop oldest!

# Rotate — carousel / round-robin
dq = deque([1, 2, 3, 4, 5])
dq.rotate(2)    # [4, 5, 1, 2, 3] — right rotate
dq.rotate(-2)   # left rotate back

# BFS queue
from collections import deque
queue = deque([start_node])
while queue:
    node = queue.popleft()   # O(1) FIFO`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🟣" title="OrderedDict — Order-Aware Dict">
        <div className="space-y-4">
          <InfoBox type="tip" title="Python 3.7+ — Regular dict already ordered">
            Python 3.7+ mein regular dict insertion order maintain karta hai. OrderedDict tab use karo jab move_to_end() ya order-aware equality chahiye.
          </InfoBox>
          <CodeBlock code={`from collections import OrderedDict

od = OrderedDict()
od["a"] = 1
od["b"] = 2
od["c"] = 3

# move_to_end — LRU Cache implement karo
od.move_to_end("a")          # a → last
od.move_to_end("b", last=False)  # b → first

# Order-aware equality
d1 = OrderedDict([("a", 1), ("b", 2)])
d2 = OrderedDict([("b", 2), ("a", 1)])
d1 == d2   # False — order matters!

# Regular dict
{"a": 1, "b": 2} == {"b": 2, "a": 1}  # True — order ignored

# LRU Cache (simplified)
class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.cap = capacity

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)  # evict oldest`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'defaultdict(int)', value: 'Auto-counter — no KeyError' },
          { label: 'defaultdict(list)', value: 'Auto group-by — append directly' },
          { label: 'Counter(iterable)', value: 'Frequency count' },
          { label: 'most_common(n)', value: 'Top n elements' },
          { label: 'Counter subtract', value: 'Keeps negatives unlike -' },
          { label: 'deque', value: 'O(1) appendleft/popleft' },
          { label: 'deque(maxlen=N)', value: 'Sliding window — auto-drop' },
          { label: 'OrderedDict', value: 'move_to_end() — LRU pattern' },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: 'Dictionaries', description: 'defaultdict/Counter dict ke subclasses hain', href: '/roadmap/topic/python-data-structures/2' }}
          to={{ title: 'Decorators', description: 'functools.lru_cache — LRU OrderedDict use karta hai', href: '/roadmap/topic/python-decorators/0' }}
        />
      </SectionBlock>

    </NoteLayout>
  )
}
