import{j as e}from"./index-8eB8ukBA.js";import{N as o,S as l,C as n,a as s,Q as h,b as x}from"./ConnectedTopics-SPFj48ZS.js";import{M as d}from"./MentalModel-7u6gqoEs.js";import{T as c}from"./TrapBox-cI68XYa-.js";import{I as f}from"./InfoBox-CP92M4gW.js";const t={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",orangeLight:"#fcd34d",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function m(){return e.jsxs("svg",{viewBox:"0 0 520 195",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes hofFlow { 0%{opacity:0;transform:translateX(-10px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes hofPipe { 0%,100%{stroke-opacity:.5} 50%{stroke-opacity:1} }
          .hf1{animation:hofFlow .4s .2s ease both}
          .hf2{animation:hofFlow .4s .5s ease both}
          .hf3{animation:hofFlow .4s .8s ease both}
          .hf-pipe{animation:hofPipe 2s ease-in-out infinite}
        `}),e.jsx("marker",{id:"hofArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.green})})]}),e.jsx("text",{x:"260",y:"20",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"map() — Transform Each Element"}),e.jsx("text",{x:"20",y:"45",fill:t.muted,fontSize:"10",children:"INPUT"}),[1,2,3,4].map((i,r)=>e.jsxs("g",{className:"hf1",children:[e.jsx("rect",{x:20+r*50,y:"52",width:"42",height:"32",rx:"6",fill:t.blue,fillOpacity:".2",stroke:t.blue,strokeWidth:"1.2"}),e.jsx("text",{x:41+r*50,y:"72",textAnchor:"middle",fill:t.blueLight,fontSize:"14",fontWeight:"700",children:i})]},i)),e.jsx("rect",{x:"248",y:"47",width:"78",height:"42",rx:"8",fill:t.purple,fillOpacity:".3",stroke:t.purple,strokeWidth:"2"}),e.jsx("text",{x:"287",y:"65",textAnchor:"middle",fill:t.purpleLight,fontSize:"12",fontWeight:"700",children:"f(x)"}),e.jsx("text",{x:"287",y:"80",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"x * 2"}),e.jsx("line",{x1:"222",y1:"68",x2:"246",y2:"68",stroke:t.green,strokeWidth:"2",className:"hf-pipe",markerEnd:"url(#hofArr)"}),e.jsx("line",{x1:"328",y1:"68",x2:"355",y2:"68",stroke:t.green,strokeWidth:"2",className:"hf-pipe",markerEnd:"url(#hofArr)"}),e.jsx("text",{x:"362",y:"45",fill:t.muted,fontSize:"10",children:"OUTPUT"}),[2,4,6,8].map((i,r)=>e.jsxs("g",{className:"hf2",children:[e.jsx("rect",{x:362+r*38,y:"52",width:"32",height:"32",rx:"6",fill:t.green,fillOpacity:".2",stroke:t.green,strokeWidth:"1.2"}),e.jsx("text",{x:378+r*38,y:"72",textAnchor:"middle",fill:t.greenLight,fontSize:"13",fontWeight:"700",children:i})]},i)),e.jsx("rect",{x:"15",y:"105",width:"490",height:"80",rx:"8",fill:"#0f172a",stroke:t.border,strokeWidth:"1"}),e.jsx("text",{x:"25",y:"124",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"map(lambda x: x*2, [1,2,3,4])"}),e.jsx("text",{x:"25",y:"142",fill:t.orangeLight,fontSize:"10",fontFamily:"monospace",children:"→ lazy iterator (not a list!)"}),e.jsx("text",{x:"25",y:"158",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"list(map(...))  # force evaluate"}),e.jsx("text",{x:"265",y:"124",fill:t.greenLight,fontSize:"10",fontFamily:"monospace",children:"Pythonic equivalent:"}),e.jsx("text",{x:"265",y:"142",fill:t.text,fontSize:"10",fontFamily:"monospace",children:"[x*2 for x in [1,2,3,4]]"}),e.jsx("text",{x:"265",y:"158",fill:t.muted,fontSize:"10",children:"← prefer this"})]})}function u(){return e.jsxs("svg",{viewBox:"0 0 520 225",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes frAnim { 0%{opacity:0;transform:translateY(-5px)} 100%{opacity:1;transform:translateY(0)} }
          .fra1{animation:frAnim .5s .2s ease both}
          .fra2{animation:frAnim .5s .5s ease both}
        `}),e.jsx("marker",{id:"frArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.orange})})]}),e.jsx("text",{x:"130",y:"20",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"filter()"}),e.jsx("rect",{x:"15",y:"28",width:"230",height:"90",rx:"8",fill:t.blue,fillOpacity:".06",stroke:t.blue,strokeWidth:"1.5"}),[1,2,3,4,5,6].map((i,r)=>e.jsxs("g",{className:"fra1",children:[e.jsx("rect",{x:20+r*36,y:"35",width:"28",height:"26",rx:"5",fill:i%2===0?t.green:t.purple,fillOpacity:i%2===0?.3:.1,stroke:i%2===0?t.green:t.purple,strokeWidth:"1"}),e.jsx("text",{x:34+r*36,y:"52",textAnchor:"middle",fill:i%2===0?t.greenLight:t.muted,fontSize:"12",children:i})]},i)),e.jsx("text",{x:"130",y:"88",textAnchor:"middle",fill:t.muted,fontSize:"9",children:"lambda x: x % 2 == 0"}),e.jsx("text",{x:"130",y:"106",textAnchor:"middle",fill:t.greenLight,fontSize:"10",children:"→ [2, 4, 6] (even only)"}),e.jsx("text",{x:"390",y:"20",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"reduce()"}),e.jsx("rect",{x:"270",y:"28",width:"240",height:"90",rx:"8",fill:t.orange,fillOpacity:".06",stroke:t.orange,strokeWidth:"1.5"}),e.jsx("rect",{x:"280",y:"35",width:"55",height:"26",rx:"5",fill:t.orange,fillOpacity:".2",stroke:t.orange,strokeWidth:"1"}),e.jsx("text",{x:"307",y:"52",textAnchor:"middle",fill:t.orangeLight,fontSize:"11",children:"acc=1"}),e.jsx("line",{x1:"337",y1:"48",x2:"352",y2:"48",stroke:t.orange,strokeWidth:"1.5",markerEnd:"url(#frArr)"}),e.jsx("rect",{x:"354",y:"35",width:"55",height:"26",rx:"5",fill:t.orange,fillOpacity:".2",stroke:t.orange,strokeWidth:"1"}),e.jsx("text",{x:"381",y:"52",textAnchor:"middle",fill:t.orangeLight,fontSize:"11",children:"×2=2"}),e.jsx("line",{x1:"411",y1:"48",x2:"426",y2:"48",stroke:t.orange,strokeWidth:"1.5",markerEnd:"url(#frArr)"}),e.jsx("rect",{x:"428",y:"35",width:"55",height:"26",rx:"5",fill:t.orange,fillOpacity:".3",stroke:t.orange,strokeWidth:"1.5"}),e.jsx("text",{x:"455",y:"52",textAnchor:"middle",fill:t.orangeLight,fontSize:"11",children:"×3=6"}),e.jsx("text",{x:"390",y:"88",textAnchor:"middle",fill:t.muted,fontSize:"9",children:"lambda acc, x: acc * x"}),e.jsx("text",{x:"390",y:"106",textAnchor:"middle",fill:t.orangeLight,fontSize:"10",children:"→ 6 (1*2*3)"}),e.jsx("text",{x:"260",y:"140",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"zip() — Parallel Iteration"}),e.jsx("rect",{x:"15",y:"148",width:"490",height:"68",rx:"8",fill:t.purple,fillOpacity:".06",stroke:t.purple,strokeWidth:"1.5"}),[["a","1"],["b","2"],["c","3"]].map(([i,r],a)=>e.jsxs("g",{className:"fra2",children:[e.jsx("rect",{x:20+a*120,y:"155",width:"110",height:"52",rx:"6",fill:t.purple,fillOpacity:".1",stroke:t.purple,strokeWidth:"1"}),e.jsx("text",{x:75+a*120,y:"176",textAnchor:"middle",fill:t.purpleLight,fontSize:"12",children:`('${i}', ${r})`}),e.jsx("text",{x:75+a*120,y:"196",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"tuple pair"})]},a)),e.jsx("text",{x:"395",y:"185",fill:t.muted,fontSize:"10",children:'zip("abc", [1,2,3])'})]})}function p(){return e.jsxs("svg",{viewBox:"0 0 520 155",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"155",rx:"10",fill:"#0f172a",stroke:t.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Higher-Order Functions"}),[{x:15,color:t.green,title:"map/filter",lines:["map: transform each","filter: keep True ones","Both return lazy iterators"]},{x:185,color:t.orange,title:"reduce/zip",lines:["reduce: fold to single value","zip: pair from iterables","zip shortest tak chalta hai"]},{x:355,color:t.purple,title:"any/all/sorted",lines:["any: ek bhi True?","all: sab True?","sorted(key=...) = most common"]}].map(i=>e.jsxs("g",{children:[e.jsx("rect",{x:i.x,y:"32",width:"155",height:"110",rx:"6",fill:i.color,fillOpacity:".08",stroke:i.color,strokeWidth:"1.2"}),e.jsx("text",{x:i.x+77,y:"50",textAnchor:"middle",fill:i.color,fontSize:"11",fontWeight:"700",children:i.title}),i.lines.map((r,a)=>e.jsx("text",{x:i.x+10,y:68+a*22,fill:t.text,fontSize:"10",children:`→ ${r}`},a))]},i.title))]})}function z(){return e.jsxs(o,{title:"Higher-Order Functions",phase:"0A",subtitle:"map, filter, reduce, zip, any, all — functional style mein sochna",children:[e.jsx(l,{icon:"🧠",title:"Mental Model — HOF Kya Hai?",children:e.jsx(d,{analogy:"HOF = function jo dusri function leta ya deta hai. Thekedar (HOF) ko kaam karna nahi aata — worker (lambda/def) ko bhejta hai kaam pe. map = worker ko har item pe bhejo.",diagram:e.jsx(m,{})})}),e.jsx(l,{icon:"🔵",title:"filter, reduce, zip — Visualization",children:e.jsx(u,{})}),e.jsx(l,{icon:"🗺️",title:"map() — Transform",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{code:`nums = [1, 2, 3, 4, 5]

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
list(map(math.sqrt, nums))`}),e.jsx(f,{type:"tip",title:"map() lazy hai",children:"map() evaluate tab hoga jab consume karoge — list() se force karo ya for loop mein iterate karo."})]})}),e.jsx(l,{icon:"🔍",title:"filter() — Select",children:e.jsx(n,{code:`nums = [1, 2, 3, 4, 5, 6, 7, 8]

evens = list(filter(lambda x: x % 2 == 0, nums))
# [2, 4, 6, 8]

# None as function — falsy values hata do
data = [0, 1, "", "hello", None, [], [1,2]]
truthy = list(filter(None, data))
# [1, 'hello', [1, 2]]

# Prefer: comprehension
[x for x in nums if x % 2 == 0]`})}),e.jsx(l,{icon:"♻️",title:"reduce() — Fold to Single Value",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{code:`from functools import reduce

nums = [1, 2, 3, 4, 5]

total   = reduce(lambda acc, x: acc + x, nums)  # 15
product = reduce(lambda acc, x: acc * x, nums)  # 120
maximum = reduce(lambda a, b: a if a > b else b, nums)  # 5

# With initial value
reduce(lambda acc, x: acc + x, nums, 100)  # 115

# Build dict
pairs = [("a", 1), ("b", 2)]
reduce(lambda d, kv: {**d, kv[0]: kv[1]}, pairs, {})`}),e.jsx(c,{number:1,name:"reduce — Alag Module Mein",level:"B",question:"reduce() directly call kar sakte hain?",wrongAnswer:"Haan — Python builtin hai",correctAnswer:"Python 3 mein builtin nahi — from functools import reduce",why:"Python 2 mein reduce builtin tha. Python 3 mein functools module mein shift kar diya. Bhoologe to NameError."})]})}),e.jsx(l,{icon:"🤐",title:"zip() — Parallel Iteration",children:e.jsx(n,{code:`names  = ["Divyesh", "Raj", "Priya"]
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
nums, letters = zip(*pairs)`})}),e.jsx(l,{icon:"✅",title:"any, all, enumerate",children:e.jsx(n,{code:`# any — ek bhi True?
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
min(words, key=len)   # 'hi'`})}),e.jsx(l,{icon:"📋",title:"Cheatsheet",children:e.jsx(s,{items:[{label:"map(f, it)",value:"Transform each → lazy iterator"},{label:"filter(f, it)",value:"Keep where f returns True"},{label:"reduce(f, it)",value:"Fold to single value (functools)"},{label:"zip(*its)",value:"Pair elements, shortest tak"},{label:"any(it)",value:"Ek bhi True → True"},{label:"all(it)",value:"Sab True → True (empty=True!)"},{label:"enumerate(it, start=0)",value:"Index + value pairs"},{label:"sorted(key=f)",value:"Custom sort by key function"}]})}),e.jsx(l,{icon:"⚡",title:"Quick Recall",children:e.jsx(h,{children:e.jsx(p,{})})}),e.jsx(l,{icon:"🔗",title:"Connected Topics",children:e.jsx(x,{from:{title:"Lambda",description:"Lambda = HOF ka perfect companion",href:"/roadmap/topic/python-functions/7"},to:{title:"Generators",description:"map/filter lazy iterators use karte hain",href:"/roadmap/topic/python-generators/0"}})})]})}export{z as default};
