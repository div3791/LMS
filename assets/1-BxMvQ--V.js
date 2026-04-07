import{j as e}from"./index-BM26oCrq.js";import{N as n,S as l,C as s,a as o,Q as h,b as c}from"./ConnectedTopics-CrnZbieD.js";import{M as d}from"./MentalModel-CpI0yIhV.js";import{T as x}from"./TrapBox-_dVjjAoa.js";import{C as p}from"./CompareBlock-DXYmatgF.js";import{I as u}from"./InfoBox-DINCxuUC.js";const t={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",orangeLight:"#fcd34d",red:"#ef4444",redLight:"#fca5a5",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function f(){return e.jsxs("svg",{viewBox:"0 0 520 205",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes tvlLock { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
          .tvl-lock{animation:tvlLock 2s ease-in-out infinite;transform-origin:center}
        `})}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Tuple vs List — Key Differences"}),e.jsx("rect",{x:"15",y:"30",width:"240",height:"28",rx:"6",fill:t.green,fillOpacity:".15",stroke:t.green,strokeWidth:"1.5"}),e.jsx("text",{x:"135",y:"48",textAnchor:"middle",fill:t.greenLight,fontSize:"12",fontWeight:"700",children:"Tuple  (immutable 🔒)"}),e.jsx("rect",{x:"268",y:"30",width:"240",height:"28",rx:"6",fill:t.blue,fillOpacity:".15",stroke:t.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"388",y:"48",textAnchor:"middle",fill:t.blueLight,fontSize:"12",fontWeight:"700",children:"List  (mutable)"}),[{label:"Hashable",tuple:"✓ Yes — dict/set key OK",list:"✗ Unhashable type error"},{label:"Memory",tuple:"Smaller — fixed size",list:"Larger — over-allocated"},{label:"Speed",tuple:"Faster iteration",list:"Slightly slower"},{label:"Syntax",tuple:"(1, 2, 3) or 1, 2, 3",list:"[1, 2, 3]"},{label:"Methods",tuple:"count(), index() only",list:"append, pop, sort, insert..."}].map((i,a)=>e.jsxs("g",{children:[e.jsx("text",{x:"7",y:82+a*23,fill:t.muted,fontSize:"10",fontWeight:"700",children:i.label}),e.jsx("rect",{x:"15",y:70+a*23,width:"240",height:"19",rx:"4",fill:i.tuple.startsWith("✓")?t.green:t.purple,fillOpacity:".08"}),e.jsx("text",{x:"22",y:83+a*23,fill:i.tuple.startsWith("✓")?t.greenLight:t.text,fontSize:"10",children:i.tuple}),e.jsx("rect",{x:"268",y:70+a*23,width:"240",height:"19",rx:"4",fill:i.list.startsWith("✗")?t.red:t.blue,fillOpacity:".08"}),e.jsx("text",{x:"275",y:83+a*23,fill:i.list.startsWith("✗")?t.redLight:t.text,fontSize:"10",children:i.list})]},i.label))]})}function m(){return e.jsxs("svg",{viewBox:"0 0 520 185",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes hfFlow { 0%{stroke-dashoffset:150} 100%{stroke-dashoffset:0} }
          .hf-line{stroke-dasharray:150;animation:hfFlow 1.5s .3s ease both}
        `}),e.jsx("marker",{id:"hfArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.orange})}),e.jsx("marker",{id:"hfPurp",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.purple})})]}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Tuple as Dict Key — Hashability"}),e.jsx("rect",{x:"20",y:"35",width:"140",height:"38",rx:"8",fill:t.green,fillOpacity:".15",stroke:t.green,strokeWidth:"1.5"}),e.jsx("text",{x:"90",y:"58",textAnchor:"middle",fill:t.greenLight,fontSize:"12",children:"(37.5, 118.9)"}),e.jsx("rect",{x:"198",y:"35",width:"120",height:"38",rx:"8",fill:t.orange,fillOpacity:".15",stroke:t.orange,strokeWidth:"1.5"}),e.jsx("text",{x:"258",y:"52",textAnchor:"middle",fill:t.orangeLight,fontSize:"11",children:"hash()"}),e.jsx("text",{x:"258",y:"67",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"deterministic int"}),e.jsx("rect",{x:"358",y:"30",width:"150",height:"48",rx:"8",fill:t.purple,fillOpacity:".15",stroke:t.purple,strokeWidth:"1.5"}),e.jsx("text",{x:"433",y:"51",textAnchor:"middle",fill:t.purpleLight,fontSize:"11",children:"location_db"}),e.jsx("text",{x:"433",y:"67",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"key: (lat, lng)"}),e.jsx("line",{x1:"162",y1:"54",x2:"196",y2:"54",stroke:t.orange,strokeWidth:"2",className:"hf-line",markerEnd:"url(#hfArr)"}),e.jsx("line",{x1:"320",y1:"54",x2:"356",y2:"54",stroke:t.purple,strokeWidth:"2",className:"hf-line",markerEnd:"url(#hfPurp)"}),e.jsx("rect",{x:"20",y:"100",width:"490",height:"75",rx:"8",fill:"#0f172a"}),e.jsxs("text",{x:"30",y:"120",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:["location_db = ","{}"]}),e.jsx("text",{x:"30",y:"137",fill:t.text,fontSize:"10",fontFamily:"monospace",children:'location_db[(37.5, 118.9)] = "Mumbai"'}),e.jsx("text",{x:"30",y:"154",fill:t.text,fontSize:"10",fontFamily:"monospace",children:'location_db[(28.6, 77.2)] = "Delhi"'}),e.jsx("text",{x:"30",y:"171",fill:t.greenLight,fontSize:"10",fontFamily:"monospace",children:"# Works! Tuples are hashable (if all elements hashable)"})]})}function y(){return e.jsxs("svg",{viewBox:"0 0 520 145",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"145",rx:"10",fill:"#0f172a",stroke:t.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Tuples"}),[{x:15,color:t.green,title:"Use Tuples When",lines:["Fixed structure data","Dict/set key chahiye","Immutability guarantee"]},{x:185,color:t.purple,title:"Packing/Unpacking",lines:["a, b = 1, 2","a, *rest = [1,2,3,4]","return x, y  (auto pack)"]},{x:355,color:t.orange,title:"Gotcha",lines:["(1) is int, (1,) tuple","Inner list = mutable!","namedtuple for readability"]}].map(i=>e.jsxs("g",{children:[e.jsx("rect",{x:i.x,y:"32",width:"155",height:"100",rx:"6",fill:i.color,fillOpacity:".08",stroke:i.color,strokeWidth:"1.2"}),e.jsx("text",{x:i.x+77,y:"50",textAnchor:"middle",fill:i.color,fontSize:"11",fontWeight:"700",children:i.title}),i.lines.map((a,r)=>e.jsx("text",{x:i.x+10,y:68+r*22,fill:t.text,fontSize:"10",children:`→ ${a}`},r))]},i.title))]})}function v(){return e.jsxs(n,{title:"Tuples — Immutability & Use Cases",phase:"0A",subtitle:"Kab list nahi, tuple chahiye — hashability aur packing ka game",children:[e.jsx(l,{icon:"🧠",title:"Mental Model — Tuple Kya Hai?",children:e.jsx(d,{analogy:"Tuple = PAN card. Date of birth, gender — yeh change nahi hote. List = todo list — add, remove, edit hota rehta hai. Data fix hai to tuple, dynamic hai to list.",diagram:e.jsx(f,{})})}),e.jsx(l,{icon:"🪤",title:"Tuple Syntax — Ek Critical Gotcha",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(x,{number:1,name:"(1) is int, (1,) is tuple!",level:"B",question:"x = (1) kya hai — int ya tuple?",wrongAnswer:"Tuple — parentheses use kiye hain",correctAnswer:"Int! Parentheses = grouping expression. Trailing comma se tuple banta hai.",why:"Python mein parentheses sirf grouping ke liye hain. Tuple ka actual marker comma hai, parentheses nahi.",fix:e.jsx(s,{code:`wrong = (42)    # int — 42
right = (42,)   # tuple — (42,)
also  = 42,     # tuple bina parens ke!
empty = ()      # empty tuple OK`})}),e.jsx(s,{code:`# Tuple creation
t1 = (1, 2, 3)        # normal
t2 = 1, 2, 3           # packing — also tuple!
t3 = tuple([1, 2, 3])  # from list
t4 = tuple("abc")      # ('a', 'b', 'c')`})]})}),e.jsx(l,{icon:"📦",title:"Packing & Unpacking",children:e.jsx(s,{code:`# Basic unpacking
x, y, z = (1, 2, 3)

# Swap — Python way (no temp!)
a, b = 1, 2
a, b = b, a    # a=2, b=1

# Extended unpacking *
first, *rest = [1, 2, 3, 4, 5]
# first=1, rest=[2,3,4,5]

*init, last = [1, 2, 3, 4, 5]
# init=[1,2,3,4], last=5

first, *mid, last = [1, 2, 3, 4, 5]
# first=1, mid=[2,3,4], last=5

# Multiple return values (auto tuple)
def min_max(lst):
    return min(lst), max(lst)  # returns tuple
lo, hi = min_max([3, 1, 4, 1, 5])

# Nested unpacking
(a, b), c = (1, 2), 3
matrix = [(1, 2), (3, 4)]
for x, y in matrix:
    print(f"x={x}, y={y}")`})}),e.jsx(l,{icon:"🔑",title:"Hashability — Dict Key ke Roop Mein",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{}),e.jsx(u,{type:"warn",title:"Tuple mein mutable ho to unhashable!",children:"Tuple hashable hai sirf tab jab uske sab elements hashable hon. Tuple containing list → TypeError: unhashable type: 'list'"}),e.jsx(s,{code:`# Valid dict/set keys
visited = set()
visited.add((3, 5))
visited.add((1, 2))
(3, 5) in visited  # O(1)!

# TRAP: tuple with list inside
bad_key = ([1, 2], 3)
hash(bad_key)  # TypeError!

# VALID: tuple of tuples
grid = {(0,0): "start", (5,5): "end"}`})]})}),e.jsx(l,{icon:"🔒",title:"Immutability — Kitna Pakka?",children:e.jsx(p,{bad:e.jsx(s,{code:`t = (1, [2, 3], 4)
# Tuple khud immutable
t[0] = 99       # TypeError!
t[1] = [5, 6]   # TypeError!

# Reference nahi badal sakte`}),good:e.jsx(s,{code:`t = (1, [2, 3], 4)
# Par inner list mutable hai!
t[1].append(99)
print(t)  # (1, [2, 3, 99], 4) ← changed!

# Tuple refs fixed, inner object state nahi`}),badLabel:"Tuple elements replace nahi hote",goodLabel:"Inner mutable object change ho sakta hai"})}),e.jsx(l,{icon:"🏷️",title:"namedtuple — Self-Documenting",children:e.jsx(s,{code:`from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)

# Access — both work
p[0]    # 3 (index)
p.x     # 3 (attribute) ← more readable!

# Unpack like regular tuple
x, y = p

# Use as dict key — hashable
cache = {}
cache[p] = "computed_value"

# _replace — immutable "update" (new object)
p2 = p._replace(x=10)   # Point(x=10, y=4)

# _asdict
p._asdict()  # {'x': 3, 'y': 4}`})}),e.jsx(l,{icon:"📋",title:"Cheatsheet",children:e.jsx(o,{items:[{label:"(1,)",value:"Single element tuple — trailing comma!"},{label:"a, b = t",value:"Unpacking"},{label:"a, *rest = t",value:"Extended unpacking"},{label:"Hashable",value:"If all elements hashable"},{label:"Dict key",value:"Coordinates, pairs, compound keys"},{label:"namedtuple",value:"Self-documenting, readability++"},{label:"Immutability",value:"Refs fixed, not inner object state"}]})}),e.jsx(l,{icon:"⚡",title:"Quick Recall",children:e.jsx(h,{children:e.jsx(y,{})})}),e.jsx(l,{icon:"🔗",title:"Connected Topics",children:e.jsx(c,{from:{title:"Lists",description:"Mutable counterpart",href:"/roadmap/topic/python-data-structures/0"},to:{title:"Dictionaries",description:"Tuple as dict key use case",href:"/roadmap/topic/python-data-structures/2"}})})]})}export{v as default};
