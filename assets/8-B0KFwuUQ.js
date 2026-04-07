import{j as e}from"./index-8eB8ukBA.js";import{N as n,S as r,C as i,a as c,Q as d,b as u}from"./ConnectedTopics-SPFj48ZS.js";import{M as f}from"./MentalModel-7u6gqoEs.js";import{T as h}from"./TrapBox-cI68XYa-.js";import{I as s}from"./InfoBox-CP92M4gW.js";const o={purple:"#7c3aed",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",orangeLight:"#fcd34d",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function x(){return e.jsxs("svg",{viewBox:"0 0 520 230",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes cmPop { 0%{opacity:0;transform:scale(.9)} 100%{opacity:1;transform:scale(1)} }
          .cm1{animation:cmPop .4s .1s ease both}
          .cm2{animation:cmPop .4s .3s ease both}
          .cm3{animation:cmPop .4s .5s ease both}
          .cm4{animation:cmPop .4s .7s ease both}
        `})}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:o.white,fontSize:"13",fontWeight:"700",children:"collections module — Specialized Containers"}),[{cls:"cm1",x:15,y:35,color:o.blue,name:"defaultdict",base:"dict subclass",use:"Missing key → auto-create default"},{cls:"cm2",x:270,y:35,color:o.green,name:"Counter",base:"dict subclass",use:"Count hashable elements fast"},{cls:"cm3",x:15,y:135,color:o.orange,name:"deque",base:"doubly-linked list",use:"O(1) append/pop BOTH ends"},{cls:"cm4",x:270,y:135,color:o.purple,name:"OrderedDict",base:"dict subclass",use:"Order-aware operations (Python 3.7+ dict already ordered)"}].map(t=>e.jsxs("g",{className:t.cls,children:[e.jsx("rect",{x:t.x,y:t.y,width:"240",height:"90",rx:"10",fill:t.color,fillOpacity:".08",stroke:t.color,strokeWidth:"1.5"}),e.jsx("text",{x:t.x+12,y:t.y+22,fill:t.color,fontSize:"14",fontWeight:"800",children:t.name}),e.jsxs("text",{x:t.x+12,y:t.y+40,fill:o.muted,fontSize:"10",children:["extends: ",t.base]}),e.jsx("rect",{x:t.x+12,y:t.y+50,width:"215",height:"28",rx:"5",fill:t.color,fillOpacity:".1"}),e.jsx("text",{x:t.x+20,y:t.y+60,fill:t.color,fontSize:"9",fontWeight:"700",children:"USE WHEN:"}),e.jsx("text",{x:t.x+20,y:t.y+72,fill:o.text,fontSize:"9",children:t.use})]},t.name))]})}function m(){return e.jsxs("svg",{viewBox:"0 0 520 175",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes dqSlide { 0%{opacity:0;transform:translateX(-15px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes dqSlideR { 0%{opacity:0;transform:translateX(15px)} 100%{opacity:1;transform:translateX(0)} }
          .dq-l{animation:dqSlide .5s .3s ease both}
          .dq-r{animation:dqSlideR .5s .3s ease both}
          .dq-pulse { animation: dqSlide .5s .1s ease both }
        `}),e.jsx("marker",{id:"dqL",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:o.green})}),e.jsx("marker",{id:"dqR",markerWidth:"8",markerHeight:"8",refX:"2",refY:"3",orient:"auto",children:e.jsx("path",{d:"M8,0 L0,3 L8,6 Z",fill:o.orange})})]}),e.jsx("text",{x:"260",y:"20",textAnchor:"middle",fill:o.white,fontSize:"13",fontWeight:"700",children:"deque — Double-Ended Queue"}),e.jsxs("g",{className:"dq-l",children:[e.jsx("text",{x:"30",y:"60",textAnchor:"middle",fill:o.green,fontSize:"11",children:"appendleft()"}),e.jsx("text",{x:"30",y:"75",textAnchor:"middle",fill:o.green,fontSize:"11",children:"popleft()"}),e.jsx("text",{x:"30",y:"90",textAnchor:"middle",fill:o.greenLight,fontSize:"10",children:"O(1) ✓"}),e.jsx("line",{x1:"72",y1:"75",x2:"90",y2:"75",stroke:o.green,strokeWidth:"2",markerEnd:"url(#dqL)"})]}),["A","B","C","D","E"].map((t,a)=>e.jsxs("g",{className:"dq-pulse",children:[e.jsx("rect",{x:95+a*66,y:"58",width:"60",height:"35",rx:"6",fill:o.blue,fillOpacity:".2",stroke:o.blue,strokeWidth:"1.5"}),e.jsx("text",{x:125+a*66,y:"80",textAnchor:"middle",fill:o.blueLight,fontSize:"16",fontWeight:"700",children:t})]},t)),e.jsxs("g",{className:"dq-r",children:[e.jsx("text",{x:"490",y:"60",textAnchor:"middle",fill:o.orange,fontSize:"11",children:"append()"}),e.jsx("text",{x:"490",y:"75",textAnchor:"middle",fill:o.orange,fontSize:"11",children:"pop()"}),e.jsx("text",{x:"490",y:"90",textAnchor:"middle",fill:o.orangeLight,fontSize:"10",children:"O(1) ✓"}),e.jsx("line",{x1:"427",y1:"75",x2:"445",y2:"75",stroke:o.orange,strokeWidth:"2",markerEnd:"url(#dqR)"})]}),e.jsx("rect",{x:"15",y:"115",width:"490",height:"50",rx:"8",fill:"#0f172a"}),e.jsx("text",{x:"25",y:"134",fill:o.muted,fontSize:"10",fontFamily:"monospace",children:"list.insert(0, x)  →  O(n) shift all"}),e.jsx("text",{x:"25",y:"150",fill:o.greenLight,fontSize:"10",fontFamily:"monospace",children:"deque.appendleft(x)  →  O(1) always"}),e.jsx("text",{x:"300",y:"134",fill:o.muted,fontSize:"10",fontFamily:"monospace",children:"maxlen=N → sliding window!"}),e.jsx("text",{x:"300",y:"150",fill:o.orangeLight,fontSize:"10",fontFamily:"monospace",children:"auto-drop oldest element"})]})}function p(){return e.jsxs("svg",{viewBox:"0 0 520 155",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"155",rx:"10",fill:"#0f172a",stroke:o.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:o.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Collections"}),[{x:15,color:o.blue,title:"defaultdict",lines:["Missing key → factory call","int: counter, list: groupby","No KeyError ever"]},{x:185,color:o.green,title:"Counter",lines:["most_common(n)","Subtract, add Counters","Arithmetic operations"]},{x:355,color:o.orange,title:"deque",lines:["O(1) both ends","maxlen = sliding window","rotate() for queue tricks"]}].map(t=>e.jsxs("g",{children:[e.jsx("rect",{x:t.x,y:"32",width:"155",height:"110",rx:"6",fill:t.color,fillOpacity:".08",stroke:t.color,strokeWidth:"1.2"}),e.jsx("text",{x:t.x+77,y:"50",textAnchor:"middle",fill:t.color,fontSize:"11",fontWeight:"700",children:t.title}),t.lines.map((a,l)=>e.jsx("text",{x:t.x+10,y:68+l*22,fill:o.text,fontSize:"10",children:`→ ${a}`},l))]},t.title))]})}function w(){return e.jsxs(n,{title:"Collections Module",phase:"0A",subtitle:"defaultdict, Counter, deque, OrderedDict — dict aur list ke superpowers",children:[e.jsx(r,{icon:"🧠",title:"Mental Model — collections Kab Use Karo?",children:e.jsx(f,{analogy:"Standard dict/list = basic thela. Collections = specialized tools: defaultdict = self-filling thela (kali jagah auto-fill), Counter = inventory tracker, deque = revolving door (O(1) dono taraf). Sahi kaam ke liye sahi tool.",diagram:e.jsx(x,{})})}),e.jsx(r,{icon:"🔵",title:"defaultdict — Auto-Create Missing Keys",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{type:"info",title:"defaultdict — KeyError se mukt",children:"Missing key access karo → factory function call hoti hai → default value create. int, list, set, dict — koi bhi factory de sakte ho."}),e.jsx(i,{code:`from collections import defaultdict

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
user_config["new_user"]["level"] = 5  # factory called auto`})]})}),e.jsx(r,{icon:"🟢",title:"Counter — Frequency Counter",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{code:`from collections import Counter

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

is_anagram("listen", "silent")  # True`}),e.jsx(h,{number:1,name:"Counter arithmetic drops negatives",level:"M",question:"Counter(a=1) - Counter(a=5) = ?",wrongAnswer:"Counter(a=-4)",correctAnswer:"Counter() — empty! Negative counts dropped in subtraction",why:"Counter subtraction uses + operator semantics — negatives silently removed. Use subtract() method to keep negatives.",fix:e.jsx(i,{code:`c = Counter(a=1, b=3)
c.subtract(Counter(a=5, b=1))
# Counter({'b': 2, 'a': -4}) — negatives kept!`})})]})}),e.jsx(r,{icon:"🟠",title:"deque — Double-Ended Queue",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{}),e.jsx(i,{code:`from collections import deque

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
    node = queue.popleft()   # O(1) FIFO`})]})}),e.jsx(r,{icon:"🟣",title:"OrderedDict — Order-Aware Dict",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{type:"tip",title:"Python 3.7+ — Regular dict already ordered",children:"Python 3.7+ mein regular dict insertion order maintain karta hai. OrderedDict tab use karo jab move_to_end() ya order-aware equality chahiye."}),e.jsx(i,{code:`from collections import OrderedDict

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
            self.cache.popitem(last=False)  # evict oldest`})]})}),e.jsx(r,{icon:"📋",title:"Cheatsheet",children:e.jsx(c,{items:[{label:"defaultdict(int)",value:"Auto-counter — no KeyError"},{label:"defaultdict(list)",value:"Auto group-by — append directly"},{label:"Counter(iterable)",value:"Frequency count"},{label:"most_common(n)",value:"Top n elements"},{label:"Counter subtract",value:"Keeps negatives unlike -"},{label:"deque",value:"O(1) appendleft/popleft"},{label:"deque(maxlen=N)",value:"Sliding window — auto-drop"},{label:"OrderedDict",value:"move_to_end() — LRU pattern"}]})}),e.jsx(r,{icon:"⚡",title:"Quick Recall",children:e.jsx(d,{children:e.jsx(p,{})})}),e.jsx(r,{icon:"🔗",title:"Connected Topics",children:e.jsx(u,{from:{title:"Dictionaries",description:"defaultdict/Counter dict ke subclasses hain",href:"/roadmap/topic/python-data-structures/2"},to:{title:"Decorators",description:"functools.lru_cache — LRU OrderedDict use karta hai",href:"/roadmap/topic/python-decorators/0"}})})]})}export{w as default};
