import{j as e}from"./index-BM26oCrq.js";import{N as x,S as r,C as a,a as d,Q as h,b as c}from"./ConnectedTopics-CrnZbieD.js";import{M as f}from"./MentalModel-CpI0yIhV.js";import{T as l}from"./TrapBox-_dVjjAoa.js";import{H as y}from"./HoodBox-ntxEHUDL.js";import{C as m}from"./CompareBlock-DXYmatgF.js";import{I as s}from"./InfoBox-DINCxuUC.js";const t={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",orangeLight:"#fcd34d",red:"#ef4444",redLight:"#fca5a5",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function g(){return e.jsxs("svg",{viewBox:"0 0 520 240",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes gfRun { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
          @keyframes gfYield { 0%,100%{fill-opacity:.15} 60%{fill-opacity:.45} }
          .gf-run{stroke-dasharray:200;animation:gfRun 1.2s ease both}
          .gf-yield{animation:gfYield 2s ease-in-out infinite}
        `}),e.jsx("marker",{id:"gfArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.orange})}),e.jsx("marker",{id:"gfGrn",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.green})})]}),e.jsx("text",{x:"260",y:"20",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Generator — Pause & Resume"}),e.jsx("rect",{x:"15",y:"30",width:"160",height:"195",rx:"8",fill:t.purple,fillOpacity:".08",stroke:t.purple,strokeWidth:"1.5"}),e.jsx("text",{x:"95",y:"50",textAnchor:"middle",fill:t.purpleLight,fontSize:"11",fontWeight:"700",children:"def count_up(n):"}),[{y:75,code:"i = 0",active:!1},{y:100,code:"while i < n:",active:!1},{y:125,code:"  yield i",active:!0},{y:150,code:"  i += 1",active:!1},{y:175,code:"# StopIteration",active:!1}].map(i=>e.jsxs("g",{className:i.active?"gf-yield":"",children:[e.jsx("rect",{x:"25",y:i.y-13,width:"140",height:"18",rx:"3",fill:i.active?t.orange:"transparent",fillOpacity:i.active?.2:0}),e.jsx("text",{x:"35",y:i.y,fill:i.active?t.orangeLight:t.text,fontSize:"10",fontFamily:"monospace",children:i.code}),i.active&&e.jsx("text",{x:"170",y:i.y,fill:t.orange,fontSize:"9",children:"← PAUSE"})]},i.y)),e.jsx("rect",{x:"310",y:"30",width:"200",height:"195",rx:"8",fill:t.blue,fillOpacity:".08",stroke:t.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"410",y:"50",textAnchor:"middle",fill:t.blueLight,fontSize:"11",fontWeight:"700",children:"Caller"}),[{y:75,code:"g = count_up(3)"},{y:100,code:"next(g)  → 0"},{y:125,code:"next(g)  → 1"},{y:150,code:"next(g)  → 2"},{y:175,code:"next(g)  → StopIteration"}].map(i=>e.jsx("text",{x:"322",y:i.y,fill:t.text,fontSize:"10",fontFamily:"monospace",children:i.code},i.y)),e.jsx("line",{x1:"185",y1:"100",x2:"308",y2:"100",stroke:t.green,strokeWidth:"1.5",className:"gf-run",markerEnd:"url(#gfGrn)"}),e.jsx("line",{x1:"185",y1:"125",x2:"308",y2:"125",stroke:t.green,strokeWidth:"1.5",className:"gf-run",markerEnd:"url(#gfGrn)"}),e.jsx("line",{x1:"185",y1:"150",x2:"308",y2:"150",stroke:t.green,strokeWidth:"1.5",className:"gf-run",markerEnd:"url(#gfGrn)"}),e.jsx("line",{x1:"309",y1:"107",x2:"187",y2:"117",stroke:t.orange,strokeWidth:"1",strokeDasharray:"3",markerEnd:"url(#gfArr)"})]})}function u(){return e.jsxs("svg",{viewBox:"0 0 520 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes ipFade { 0%{opacity:0;transform:translateY(-6px)} 100%{opacity:1;transform:translateY(0)} }
          .ip1{animation:ipFade .4s .1s ease both}
          .ip2{animation:ipFade .4s .4s ease both}
          .ip3{animation:ipFade .4s .7s ease both}
        `}),e.jsx("marker",{id:"ipArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.muted})})]}),e.jsx("text",{x:"260",y:"18",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Iterable vs Iterator vs Generator"}),e.jsxs("g",{className:"ip1",children:[e.jsx("rect",{x:"10",y:"28",width:"155",height:"90",rx:"7",fill:t.blue,fillOpacity:".1",stroke:t.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"87",y:"47",textAnchor:"middle",fill:t.blueLight,fontSize:"11",fontWeight:"700",children:"Iterable"}),e.jsx("text",{x:"20",y:"63",fill:t.muted,fontSize:"9",children:"Has: __iter__()"}),e.jsx("text",{x:"20",y:"78",fill:t.text,fontSize:"9",children:"Can give an iterator"}),e.jsx("text",{x:"20",y:"93",fill:t.text,fontSize:"9",children:"list, tuple, str, range"}),e.jsx("text",{x:"20",y:"108",fill:t.greenLight,fontSize:"9",children:"✓ Reusable (loop again)"})]}),e.jsxs("g",{className:"ip2",children:[e.jsx("rect",{x:"182",y:"28",width:"155",height:"90",rx:"7",fill:t.orange,fillOpacity:".1",stroke:t.orange,strokeWidth:"1.5"}),e.jsx("text",{x:"259",y:"47",textAnchor:"middle",fill:t.orangeLight,fontSize:"11",fontWeight:"700",children:"Iterator"}),e.jsx("text",{x:"192",y:"63",fill:t.muted,fontSize:"9",children:"Has: __iter__() + __next__()"}),e.jsx("text",{x:"192",y:"78",fill:t.text,fontSize:"9",children:"Tracks state — one-pass"}),e.jsx("text",{x:"192",y:"93",fill:t.text,fontSize:"9",children:"map, zip, file objects"}),e.jsx("text",{x:"192",y:"108",fill:t.redLight,fontSize:"9",children:"✗ One-pass (consume = gone)"})]}),e.jsxs("g",{className:"ip3",children:[e.jsx("rect",{x:"354",y:"28",width:"155",height:"90",rx:"7",fill:t.green,fillOpacity:".1",stroke:t.green,strokeWidth:"1.5"}),e.jsx("text",{x:"431",y:"47",textAnchor:"middle",fill:t.greenLight,fontSize:"11",fontWeight:"700",children:"Generator"}),e.jsx("text",{x:"364",y:"63",fill:t.muted,fontSize:"9",children:"Special iterator (yield)"}),e.jsx("text",{x:"364",y:"78",fill:t.text,fontSize:"9",children:"Lazy + stateful + auto-manages"}),e.jsx("text",{x:"364",y:"93",fill:t.text,fontSize:"9",children:"def f(): yield / (x for x)"}),e.jsx("text",{x:"364",y:"108",fill:t.redLight,fontSize:"9",children:"✗ One-pass (iterator subtype)"})]}),e.jsx("line",{x1:"182",y1:"73",x2:"167",y2:"73",stroke:t.muted,strokeWidth:"1.2",markerEnd:"url(#ipArr)"}),e.jsx("text",{x:"174",y:"68",textAnchor:"middle",fill:t.muted,fontSize:"8",children:"IS A"}),e.jsx("line",{x1:"354",y1:"73",x2:"339",y2:"73",stroke:t.muted,strokeWidth:"1.2",markerEnd:"url(#ipArr)"}),e.jsx("text",{x:"346",y:"68",textAnchor:"middle",fill:t.muted,fontSize:"8",children:"IS A"}),e.jsx("rect",{x:"10",y:"130",width:"500",height:"80",rx:"6",fill:"#0f172a",stroke:t.border,strokeWidth:"1"}),e.jsx("text",{x:"20",y:"148",fill:t.muted,fontSize:"10",fontWeight:"700",children:"Object"}),e.jsx("text",{x:"100",y:"148",fill:t.muted,fontSize:"10",fontWeight:"700",children:"Iterable?"}),e.jsx("text",{x:"185",y:"148",fill:t.muted,fontSize:"10",fontWeight:"700",children:"Iterator?"}),e.jsx("text",{x:"265",y:"148",fill:t.muted,fontSize:"10",fontWeight:"700",children:"Lazy?"}),e.jsx("text",{x:"330",y:"148",fill:t.muted,fontSize:"10",fontWeight:"700",children:"Reusable?"}),e.jsx("line",{x1:"10",y1:"152",x2:"510",y2:"152",stroke:t.border,strokeWidth:"1"}),[{obj:"list",it:"✓ Yes",itr:"✗ No",lazy:"✗ No",reuse:"✓ Yes"},{obj:"range",it:"✓ Yes",itr:"✗ No",lazy:"✓ Yes",reuse:"✓ Yes"},{obj:"map()",it:"✓ Yes",itr:"✓ Yes",lazy:"✓ Yes",reuse:"✗ No"},{obj:"generator",it:"✓ Yes",itr:"✓ Yes",lazy:"✓ Yes",reuse:"✗ No"}].map((i,n)=>e.jsxs("g",{children:[e.jsx("text",{x:"20",y:166+n*15,fill:t.text,fontSize:"10",fontFamily:"monospace",children:i.obj}),e.jsx("text",{x:"100",y:166+n*15,fill:i.it.startsWith("✓")?t.green:t.red,fontSize:"10",children:i.it}),e.jsx("text",{x:"185",y:166+n*15,fill:i.itr.startsWith("✓")?t.green:t.red,fontSize:"10",children:i.itr}),e.jsx("text",{x:"265",y:166+n*15,fill:i.lazy.startsWith("✓")?t.green:t.red,fontSize:"10",children:i.lazy}),e.jsx("text",{x:"330",y:166+n*15,fill:i.reuse.startsWith("✓")?t.green:t.red,fontSize:"10",children:i.reuse})]},i.obj))]})}function p(){return e.jsxs("svg",{viewBox:"0 0 520 145",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes flStep { 0%{opacity:0;transform:translateX(-8px)} 100%{opacity:1;transform:translateX(0)} }
          .fl1{animation:flStep .3s .1s ease both}
          .fl2{animation:flStep .3s .3s ease both}
          .fl3{animation:flStep .3s .5s ease both}
          .fl4{animation:flStep .3s .7s ease both}
        `}),e.jsx("marker",{id:"flArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.orange})})]}),e.jsx("text",{x:"260",y:"18",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"for Loop Internals — What Python Really Does"}),e.jsx("text",{x:"20",y:"42",fill:t.purpleLight,fontSize:"11",fontWeight:"700",className:"fl1",children:"for x in data:"}),e.jsx("text",{x:"175",y:"42",fill:t.orange,fontSize:"20",className:"fl1",children:"≡"}),e.jsxs("g",{className:"fl2",children:[e.jsx("text",{x:"200",y:"42",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"_it = iter(data)"}),e.jsx("text",{x:"200",y:"58",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"while True:"}),e.jsx("text",{x:"210",y:"74",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"  try:"}),e.jsx("text",{x:"220",y:"90",fill:t.text,fontSize:"10",fontFamily:"monospace",children:"    x = next(_it)"}),e.jsx("text",{x:"210",y:"106",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"  except StopIteration:"}),e.jsx("text",{x:"220",y:"122",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"    break"})]}),e.jsxs("g",{className:"fl3",children:[e.jsx("rect",{x:"400",y:"30",width:"115",height:"100",rx:"6",fill:t.blue,fillOpacity:".08",stroke:t.blue,strokeWidth:"1.2"}),e.jsx("text",{x:"457",y:"48",textAnchor:"middle",fill:t.blueLight,fontSize:"10",fontWeight:"700",children:"Steps:"}),e.jsx("text",{x:"410",y:"63",fill:t.text,fontSize:"9",children:"1. iter(data) → iterator"}),e.jsx("text",{x:"410",y:"78",fill:t.text,fontSize:"9",children:"2. next() → value"}),e.jsx("text",{x:"410",y:"93",fill:t.text,fontSize:"9",children:"3. repeat next()"}),e.jsx("text",{x:"410",y:"108",fill:t.redLight,fontSize:"9",children:"4. StopIteration → stop"}),e.jsx("text",{x:"410",y:"123",fill:t.orange,fontSize:"9",children:"→ silently caught!"})]})]})}function j(){return e.jsxs("svg",{viewBox:"0 0 520 195",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("text",{x:"260",y:"20",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Memory: List vs Generator"}),e.jsx("rect",{x:"15",y:"30",width:"235",height:"155",rx:"8",fill:t.red,fillOpacity:".07",stroke:t.red,strokeWidth:"1.5"}),e.jsx("text",{x:"132",y:"52",textAnchor:"middle",fill:t.redLight,fontSize:"12",fontWeight:"700",children:"list(range(1_000_000))"}),e.jsx("text",{x:"30",y:"75",fill:t.muted,fontSize:"10",children:"Memory used:"}),e.jsx("rect",{x:"30",y:"82",width:"200",height:"18",rx:"4",fill:"#1e293b"}),e.jsx("rect",{x:"30",y:"82",width:"185",height:"18",rx:"4",fill:t.red,fillOpacity:".6"}),e.jsx("text",{x:"125",y:"95",textAnchor:"middle",fill:t.white,fontSize:"10",fontWeight:"700",children:"~8 MB (all at once)"}),e.jsx("text",{x:"30",y:"120",fill:t.muted,fontSize:"10",children:"All values in RAM immediately:"}),e.jsx("text",{x:"30",y:"137",fill:t.redLight,fontSize:"10",fontFamily:"monospace",children:"[0, 1, 2, 3, ..., 999999]"}),e.jsx("text",{x:"30",y:"157",fill:t.muted,fontSize:"10",children:"Slow start — allocate everything first"}),e.jsx("text",{x:"30",y:"175",fill:t.red,fontSize:"10",children:"Time to first value: HIGH"}),e.jsx("rect",{x:"270",y:"30",width:"235",height:"155",rx:"8",fill:t.green,fillOpacity:".07",stroke:t.green,strokeWidth:"1.5"}),e.jsx("text",{x:"387",y:"52",textAnchor:"middle",fill:t.greenLight,fontSize:"12",fontWeight:"700",children:"(x for x in range(1M))"}),e.jsx("text",{x:"285",y:"75",fill:t.muted,fontSize:"10",children:"Memory used:"}),e.jsx("rect",{x:"285",y:"82",width:"200",height:"18",rx:"4",fill:"#1e293b"}),e.jsx("rect",{x:"285",y:"82",width:"8",height:"18",rx:"4",fill:t.green,fillOpacity:".8"}),e.jsx("text",{x:"380",y:"95",textAnchor:"middle",fill:t.white,fontSize:"10",fontWeight:"700",children:"~120 bytes (always)"}),e.jsx("text",{x:"285",y:"120",fill:t.muted,fontSize:"10",children:"Values computed lazily, one by one:"}),e.jsx("text",{x:"285",y:"137",fill:t.greenLight,fontSize:"10",fontFamily:"monospace",children:"next() → 0, next() → 1, ..."}),e.jsx("text",{x:"285",y:"157",fill:t.muted,fontSize:"10",children:"Fast start — no pre-allocation"}),e.jsx("text",{x:"285",y:"175",fill:t.green,fontSize:"10",children:"Time to first value: INSTANT"})]})}function b(){return e.jsxs("svg",{viewBox:"0 0 520 160",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"160",rx:"10",fill:"#0f172a",stroke:t.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Generators"}),[{x:15,color:t.purple,title:"Core Idea",lines:["yield = pause + return val","Generator is lazy iterator","State preserved across calls"]},{x:185,color:t.orange,title:"Expressions",lines:["(x*2 for x in range(n))","Lazy — not computed yet","next() ya for loop se"]},{x:355,color:t.green,title:"Advanced",lines:["yield from = delegate","send(val) = 2-way comm","throw/close = control"]}].map(i=>e.jsxs("g",{children:[e.jsx("rect",{x:i.x,y:"32",width:"155",height:"115",rx:"6",fill:i.color,fillOpacity:".08",stroke:i.color,strokeWidth:"1.2"}),e.jsx("text",{x:i.x+77,y:"50",textAnchor:"middle",fill:i.color,fontSize:"11",fontWeight:"700",children:i.title}),i.lines.map((n,o)=>e.jsx("text",{x:i.x+10,y:68+o*22,fill:t.text,fontSize:"10",children:`→ ${n}`},o))]},i.title))]})}function I(){return e.jsxs(x,{title:"Generators — Lazy Evaluation & Iteration",phase:"0A",subtitle:"yield se pause karo, next() se resume — memory-efficient iteration ka ultimate tool",children:[e.jsx(r,{icon:"🧠",title:"Mental Model — Generator Kya Hai?",children:e.jsx(f,{analogy:"Generator = Netflix streaming. List = poori movie download karo tab dekhna. Generator = live stream — ek frame aata hai, dekhte ho, next maango, next aata hai. Memory sirf ek frame ke liye use hoti hai, poori movie ke liye nahi.",diagram:e.jsx(g,{})})}),e.jsxs(r,{icon:"⚖️",title:"Iterable vs Iterator vs Generator — Protocol",children:[e.jsx(u,{}),e.jsxs("div",{className:"space-y-3 mt-3",children:[e.jsxs(s,{type:"info",title:"Duck Typing — Protocol, not inheritance",children:["Java ki tarah Iterator extends Iterable nahi hai. Python mein ye sirf ek ",e.jsx("strong",{children:"protocol"}),' hai — "agar object mein ye methods hain to aise behave karo." Yahi duck typing hai.']}),e.jsx(a,{code:`# Iterable — __iter__() wala, iterator deta hai
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
# generator → iterator (also iterable — same object)`})]})]}),e.jsxs(r,{icon:"🔄",title:"for Loop Internals — iter() + next()",children:[e.jsx(p,{}),e.jsx(a,{code:`# for loop actually does this:
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
# it is one-pass now`})]}),e.jsx(r,{icon:"🔬",title:"Under the Hood — yield Kaise Kaam Karta Hai",children:e.jsx(y,{children:e.jsxs("div",{className:"space-y-2 text-sm text-content leading-relaxed",children:[e.jsxs("p",{children:["1. ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"def + yield"})," → function generator object return karta hai (execute nahi hota)"]}),e.jsxs("p",{children:["2. ",e.jsx("span",{className:"text-orange-400 font-semibold",children:"next(g)"})," call hoti hai → function tab tak run karta hai jab tak yield nahi milta"]}),e.jsxs("p",{children:["3. ",e.jsx("span",{className:"text-orange-400 font-semibold",children:"yield value"})," → value caller ko milti hai, function ka state (locals + instruction pointer) save ho jaata hai"]}),e.jsxs("p",{children:["4. Agla ",e.jsx("span",{className:"text-green-400 font-semibold",children:"next()"})," → wahan se resume hota hai jahan yield hua tha"]}),e.jsxs("p",{children:["5. Function end → ",e.jsx("span",{className:"text-red-400 font-semibold",children:"StopIteration"})," automatically raise hoti hai"]}),e.jsxs("p",{children:["6. for loop internally ",e.jsx("span",{className:"text-blue-400 font-semibold",children:"iter() + next()"})," call karta hai — StopIteration pe silently stop"]})]})})}),e.jsx(r,{icon:"💻",title:"yield — Basic Patterns",children:e.jsx(a,{code:`# Regular function vs Generator function
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
next(g, "done")  # "done" — no error`})}),e.jsxs(r,{icon:"⚡",title:"Generator Expressions — Lazy Comprehensions",children:[e.jsx(m,{bad:e.jsx(a,{code:`# List comprehension — eager
big_list = [x**2 for x in range(10**6)]
# All 10^6 values stored in RAM → 8 MB

# Even if you only need first 5!
first_five = big_list[:5]`}),good:e.jsx(a,{code:`# Generator expression — lazy
big_gen = (x**2 for x in range(10**6))
# Nothing computed yet → 120 bytes only

# First 5 only — rest never computed!
import itertools
first_five = list(itertools.islice(big_gen, 5))`}),badLabel:"List — sab pehle compute",goodLabel:"Generator — sirf zaroorat ka"}),e.jsx(j,{})]}),e.jsx(r,{icon:"🔗",title:"yield from — Sub-Generator Delegation",children:e.jsx(a,{code:`# Without yield from — manual loop
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

list(flatten([1, [2, [3, 4]], 5]))  # [1,2,3,4,5]`})}),e.jsx(r,{icon:"📡",title:"send() / throw() / close() — Two-Way Communication",children:e.jsx(a,{code:`# send() — value bhejna generator mein
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
g.close()  # "cleaned up!" — GeneratorExit raise hota hai`})}),e.jsx(r,{icon:"🏭",title:"Real Use — Production Patterns",children:e.jsx(a,{code:`# Large file reading — memory efficient
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
first_10 = list(itertools.islice(fibonacci(), 10))`})}),e.jsxs(r,{icon:"⚠️",title:"Things That CONSUME Iterators — Terminal Operations",children:[e.jsx(s,{type:"warn",title:"Yeh sab iterator exhaust kar dete hain",children:"Iterator pe ek baar terminal operation karo → sab khatam. Dobara loop → empty."}),e.jsx(a,{code:`g = (x for x in range(5))

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
d = [x*3 for x in b_list]  # b_list still available`})]}),e.jsxs(r,{icon:"🪤",title:"Generator & Iterator Traps",children:[e.jsx(l,{number:1,name:"Generator Exhaust — Ek Baar",level:"B",question:"Same generator ko baar baar iterate kar sakte hain?",wrongAnswer:"Haan — for loop har baar fresh start karta hai",correctAnswer:"Nahi! Generator ek baar exhaust ho jaata hai. Dobara loop karo → kuch nahi milta.",why:"Generator stateful hota hai — ek baar StopIteration pe state reset nahi hoti.",fix:e.jsx(a,{code:`# Wrong
g = (x for x in range(3))
list(g)  # [0, 1, 2]
list(g)  # []  ← empty!

# Fix: function se naya generator
def make_gen(): return (x for x in range(3))
list(make_gen())  # [0, 1, 2] always`})}),e.jsx(l,{number:2,name:"range() ko Iterator Samajhna",level:"B",question:"range(10) iterator hai ya iterable?",wrongAnswer:"Iterator hai — loop mein use karte hain",correctAnswer:"range is ITERABLE, not iterator! list(range) aur list(range) dono kaam karte hain — reusable. iter(range(10)) se iterator banta hai.",why:"range lazy hai but reusable — sirf start/stop/step store karta hai. Iterator ki tarah state nahi rakhta.",fix:e.jsx(a,{code:`r = range(5)
list(r)   # [0,1,2,3,4]
list(r)   # [0,1,2,3,4] ← still works! reusable

it = iter(r)  # NOW one-pass iterator
next(it)  # 0
next(it)  # 1
list(it)  # [2,3,4] — partial!
list(it)  # [] — exhausted`})}),e.jsx(l,{number:3,name:"send() se Pehle next() Prime Karna",level:"M",question:"Generator banake directly send() kar sakte hain?",wrongAnswer:"Haan — send() first value bheji jaayegi",correctAnswer:"TypeError! First call hamesha next() ya send(None) honi chahiye — generator ko yield pe laao pehle.",why:"Fresh generator ka execution shuru nahi hua hota — pehle yield tak pahunchana zaroori hai.",fix:e.jsx(a,{code:`def gen():
    val = yield
    yield val * 2

g = gen()
next(g)      # prime — yield pe aao
g.send(5)    # 10 — ab send karo`})})]}),e.jsx(r,{icon:"🚫",title:"When NOT to Use Generator",children:e.jsx(a,{code:`# Generator mat use karo jab:

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
# - One-pass enough hai`})}),e.jsx(r,{icon:"📋",title:"Cheatsheet",children:e.jsx(d,{items:[{label:"Iterable",value:"__iter__() — can give iterator (reusable)"},{label:"Iterator",value:"__iter__() + __next__() — one-pass, stateful"},{label:"Generator",value:"Special iterator via yield — lazy"},{label:"def + yield",value:"Generator function — lazy iterator banta hai"},{label:"next(g)",value:"Next value — StopIteration at end"},{label:"next(g, default)",value:"Safe next — no StopIteration"},{label:"(expr for x in it)",value:"Generator expression — lazy"},{label:"yield from it",value:"Delegate to sub-iterable"},{label:"g.send(val)",value:"Send value into generator (prime first)"},{label:"Terminal ops",value:"list/sum/sorted/any/all/in → exhaust!"},{label:"range()",value:"Iterable (NOT iterator) — reusable"},{label:"Exhaust",value:"Generator ek baar — dobara loop = empty"}]})}),e.jsx(r,{icon:"⚡",title:"Quick Recall",children:e.jsx(h,{children:e.jsx(b,{})})}),e.jsx(r,{icon:"🔗",title:"Connected Topics",children:e.jsx(c,{from:{title:"Decorators",description:"Generator-based @contextmanager",href:"/roadmap/topic/python-decorators/0"},to:{title:"Exception Handling",description:"StopIteration aur generator exceptions",href:"/roadmap/topic/python-exceptions/0"}})})]})}export{I as default};
