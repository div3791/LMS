import{j as e}from"./index-8eB8ukBA.js";import{N as o,S as l,C as s,a as n,Q as d,b as c}from"./ConnectedTopics-SPFj48ZS.js";import{M as h}from"./MentalModel-7u6gqoEs.js";import{T as x}from"./TrapBox-cI68XYa-.js";import{H as y}from"./HoodBox-BDvAwi0T.js";const i={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",orange:"#f59e0b",orangeLight:"#fcd34d",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function f(){return e.jsxs("svg",{viewBox:"0 0 520 255",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes htCalc { 0%{opacity:0;transform:translateX(-10px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes htSlot { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.4} }
          .ht1{animation:htCalc .5s .1s ease both}
          .ht2{animation:htCalc .5s .4s ease both}
          .ht3{animation:htCalc .5s .7s ease both}
          .ht-slot{animation:htSlot 2s ease-in-out infinite}
        `}),e.jsx("marker",{id:"htArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:i.orange})})]}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:i.white,fontSize:"13",fontWeight:"700",children:"Dict — Hash Table Internals"}),e.jsx("text",{x:"80",y:"45",textAnchor:"middle",fill:i.muted,fontSize:"11",children:"Keys"}),[{key:'"name"',y:53},{key:'"age"',y:103},{key:'"city"',y:153}].map(t=>e.jsxs("g",{className:"ht1",children:[e.jsx("rect",{x:"15",y:t.y,width:"100",height:"32",rx:"6",fill:i.blue,fillOpacity:".15",stroke:i.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"65",y:t.y+20,textAnchor:"middle",fill:i.blueLight,fontSize:"11",fontFamily:"monospace",children:t.key})]},t.key)),e.jsx("text",{x:"195",y:"45",textAnchor:"middle",fill:i.muted,fontSize:"11",children:"hash()"}),[53,103,153].map(t=>e.jsxs("g",{className:"ht2",children:[e.jsx("rect",{x:"137",y:t,width:"80",height:"32",rx:"6",fill:i.orange,fillOpacity:".15",stroke:i.orange,strokeWidth:"1.2"}),e.jsx("text",{x:"177",y:t+14,textAnchor:"middle",fill:i.orangeLight,fontSize:"9",children:"-7235..."}),e.jsx("text",{x:"177",y:t+27,textAnchor:"middle",fill:i.muted,fontSize:"9",children:"% slots"}),e.jsx("line",{x1:"117",y1:t+16,x2:"135",y2:t+16,stroke:i.orange,strokeWidth:"1.5",markerEnd:"url(#htArr)"})]},t)),e.jsx("text",{x:"332",y:"45",textAnchor:"middle",fill:i.muted,fontSize:"11",children:"Hash Table (slots)"}),[{slot:"0",y:53,empty:!0},{slot:"1",y:78,key:'"city"',val:'"Mumbai"',color:i.green},{slot:"2",y:103,key:'"age"',val:"22",color:i.purple},{slot:"3",y:128,empty:!0},{slot:"4",y:153,key:'"name"',val:'"Divyesh"',color:i.blue},{slot:"5",y:178,empty:!0}].map(t=>e.jsxs("g",{className:t.empty?"":"ht-slot",children:[e.jsx("rect",{x:"237",y:t.y,width:"270",height:"22",rx:"4",fill:t.empty?"#1e293b":t.color,fillOpacity:t.empty?.3:.15,stroke:t.empty?i.muted:t.color,strokeWidth:t.empty?.5:1.2}),e.jsxs("text",{x:"248",y:t.y+15,fill:i.muted,fontSize:"10",children:["[",t.slot,"]"]}),!t.empty&&e.jsxs("text",{x:"270",y:t.y+15,fill:t.color,fontSize:"10",fontFamily:"monospace",children:[t.key,": ",t.val]})]},t.slot)),e.jsx("line",{x1:"219",y1:"69",x2:"235",y2:"166",stroke:i.blue,strokeWidth:"1",strokeDasharray:"3",markerEnd:"url(#htArr)"}),e.jsx("line",{x1:"219",y1:"119",x2:"235",y2:"114",stroke:i.purple,strokeWidth:"1",strokeDasharray:"3",markerEnd:"url(#htArr)"}),e.jsx("line",{x1:"219",y1:"169",x2:"235",y2:"89",stroke:i.green,strokeWidth:"1",strokeDasharray:"3",markerEnd:"url(#htArr)"}),e.jsx("text",{x:"260",y:"230",textAnchor:"middle",fill:i.orange,fontSize:"10",children:"O(1) lookup: hash(key) → slot index → compare key → value"})]})}function p(){return e.jsxs("svg",{viewBox:"0 0 520 165",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes dvUpdate { 0%,70%,100%{opacity:1} 85%{opacity:.3} }
          .dv-update{animation:dvUpdate 3s ease-in-out infinite}
        `})}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:i.white,fontSize:"13",fontWeight:"700",children:"Dict Views — Live Window into Dict"}),e.jsx("rect",{x:"15",y:"30",width:"125",height:"125",rx:"8",fill:i.purple,fillOpacity:".08",stroke:i.purple,strokeWidth:"1.5"}),e.jsx("text",{x:"77",y:"50",textAnchor:"middle",fill:i.purpleLight,fontSize:"11",fontWeight:"700",children:"dict d"}),e.jsx("text",{x:"77",y:"68",textAnchor:"middle",fill:i.text,fontSize:"10",children:'"a": 1'}),e.jsx("text",{x:"77",y:"84",textAnchor:"middle",fill:i.text,fontSize:"10",children:'"b": 2'}),e.jsx("text",{x:"77",y:"100",textAnchor:"middle",fill:i.text,fontSize:"10",children:'"c": 3'}),e.jsx("text",{x:"77",y:"145",textAnchor:"middle",fill:i.muted,fontSize:"9",children:'d["d"] = 4'}),[{x:158,color:i.blue,title:"d.keys()",desc:"dict_keys(['a','b','c'])"},{x:293,color:i.green,title:"d.values()",desc:"dict_values([1, 2, 3])"},{x:388,color:i.orange,title:"d.items()",desc:"dict_items([('a',1)...])"}].map(t=>e.jsxs("g",{className:"dv-update",children:[e.jsx("rect",{x:t.x-60,y:"30",width:"120",height:"125",rx:"8",fill:t.color,fillOpacity:".08",stroke:t.color,strokeWidth:"1.5"}),e.jsx("text",{x:t.x,y:"50",textAnchor:"middle",fill:t.color,fontSize:"10",fontWeight:"700",children:t.title}),e.jsx("text",{x:t.x-55,y:"70",fill:i.text,fontSize:"8.5",fontFamily:"monospace",children:t.desc}),e.jsx("rect",{x:t.x-50,y:"82",width:"95",height:"20",rx:"4",fill:t.color,fillOpacity:".2"}),e.jsx("text",{x:t.x,y:"96",textAnchor:"middle",fill:t.color,fontSize:"10",children:"Live view!"}),e.jsx("text",{x:t.x-55,y:"135",fill:i.muted,fontSize:"9",children:"Not a copy."}),e.jsx("text",{x:t.x-55,y:"148",fill:i.muted,fontSize:"9",children:"View object."})]},t.title))]})}function u(){return e.jsxs("svg",{viewBox:"0 0 520 155",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"155",rx:"10",fill:"#0f172a",stroke:i.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:i.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Dicts"}),[{x:15,color:i.orange,title:"Hash Table",lines:["O(1) avg lookup","Keys must be hashable","Collision → probing"]},{x:185,color:i.blue,title:"Views",lines:["keys/values/items","Live — dict change dikh jaata","Iterate saath mat badlo"]},{x:355,color:i.green,title:"Patterns",lines:["get() over []","setdefault() for groups","Counter: d[k] = d.get(k,0)+1"]}].map(t=>e.jsxs("g",{children:[e.jsx("rect",{x:t.x,y:"32",width:"155",height:"110",rx:"6",fill:t.color,fillOpacity:".08",stroke:t.color,strokeWidth:"1.2"}),e.jsx("text",{x:t.x+77,y:"50",textAnchor:"middle",fill:t.color,fontSize:"11",fontWeight:"700",children:t.title}),t.lines.map((r,a)=>e.jsx("text",{x:t.x+10,y:68+a*22,fill:i.text,fontSize:"10",children:`→ ${r}`},a))]},t.title))]})}function v(){return e.jsxs(o,{title:"Dictionaries — Hash Table Internals",phase:"0A",subtitle:"O(1) lookup ka secret, views, aur production patterns",children:[e.jsx(l,{icon:"🧠",title:"Mental Model — Dict Kaise Kaam Karta Hai?",children:e.jsx(h,{analogy:"Dict = library ka catalogue. Naam (key) de do, immediately shelf number (hash → slot) milta hai. Linear dhundhna nahi padta — seedha slot pe jaao. O(1) magic yahi hai.",diagram:e.jsx(f,{})})}),e.jsx(l,{icon:"🔬",title:"Hash Table — Under the Hood",children:e.jsx(y,{children:e.jsxs("div",{className:"space-y-2 text-sm text-content leading-relaxed",children:[e.jsxs("p",{children:["1. ",e.jsx("span",{className:"text-orange-400 font-semibold",children:"hash(key)"})," compute hota hai — deterministic integer"]}),e.jsxs("p",{children:["2. ",e.jsx("span",{className:"text-orange-400 font-semibold",children:"slot = hash % capacity"})," — table mein position find karo"]}),e.jsxs("p",{children:["3. Collision (do keys same slot) → ",e.jsx("span",{className:"text-blue-400 font-semibold",children:"open addressing"})," — probe next slots"]}),e.jsxs("p",{children:["4. Load factor 2/3 cross karo → ",e.jsx("span",{className:"text-green-400 font-semibold",children:"resize"})," (new table, rehash all)"]}),e.jsxs("p",{children:["5. Python 3.7+ → ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"insertion order guaranteed"})]})]})})}),e.jsx(l,{icon:"💻",title:"Dict Operations",children:e.jsx(s,{code:`d = {"name": "Divyesh", "age": 22, "city": "Mumbai"}

# Access — safe vs unsafe
d["name"]               # "Divyesh"
d.get("email")          # None — no KeyError!
d.get("email", "N/A")   # "N/A" default

# Add / Update
d["email"] = "d@ex.com"     # new key
d["age"] = 23                # update
d.update({"age": 24, "role": "dev"})

# Remove
del d["city"]           # KeyError if missing
d.pop("city")           # return + remove
d.pop("city", None)     # safe
d.popitem()             # last inserted (LIFO, 3.7+)

# Existence
"name" in d             # True — O(1)
"email" not in d        # O(1)`})}),e.jsx(l,{icon:"👁️",title:"Dict Views — Live Windows",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{}),e.jsx(x,{number:1,name:"Modify Dict While Iterating",level:"M",question:"Loop mein dict modify kar sakte hain?",wrongAnswer:"Haan — loop chal raha hai",correctAnswer:"RuntimeError: dictionary changed size during iteration",why:"Dict views live hain — size change karna iteration ko break karta hai.",fix:e.jsx(s,{code:`# Fix: iterate over copy
for k in list(d.keys()):
    del d[k]  # safe!`})})]})}),e.jsx(l,{icon:"🏭",title:"Production Patterns",children:e.jsx(s,{code:`# setdefault — get ya create
d = {}
d.setdefault("tags", []).append("python")
d.setdefault("tags", []).append("backend")
# {'tags': ['python', 'backend']}

# Counter pattern
text = "hello world"
counts = {}
for char in text:
    counts[char] = counts.get(char, 0) + 1

# Group by
students = [("Div", "A"), ("Raj", "B"), ("Pri", "A")]
by_grade = {}
for name, grade in students:
    by_grade.setdefault(grade, []).append(name)
# {'A': ['Div', 'Pri'], 'B': ['Raj']}

# Merge (Python 3.9+)
d1 = {"a": 1}
d2 = {"b": 2}
merged = d1 | d2    # {'a': 1, 'b': 2}
d1 |= d2            # in-place update`})}),e.jsx(l,{icon:"📝",title:"Dict Comprehension",children:e.jsx(s,{code:`# Basic
squares = {x: x**2 for x in range(5)}

# With filter
evens = {x: x**2 for x in range(10) if x % 2 == 0}

# Invert a dict
original = {"a": 1, "b": 2}
inverted = {v: k for k, v in original.items()}
# {1: 'a', 2: 'b'}

# From two lists
keys = ["name", "age"]
vals = ["Divyesh", 22]
d = dict(zip(keys, vals))  # or {k: v for k, v in zip(...)}`})}),e.jsx(l,{icon:"📋",title:"Cheatsheet",children:e.jsx(n,{items:[{label:"Lookup",value:"O(1) average — hash table"},{label:"Keys",value:"Must be hashable"},{label:"get(k, default)",value:"Safe access — no KeyError"},{label:"setdefault(k, [])",value:"Group-by pattern"},{label:"Views",value:"keys/values/items — live, not copy"},{label:"Order",value:"Insertion order (3.7+)"},{label:"d1 | d2",value:"Merge (3.9+)"},{label:"Iterate + modify",value:"TRAP — use list(d.keys())"}]})}),e.jsx(l,{icon:"⚡",title:"Quick Recall",children:e.jsx(d,{children:e.jsx(u,{})})}),e.jsx(l,{icon:"🔗",title:"Connected Topics",children:e.jsx(c,{from:{title:"Tuples",description:"Tuple as dict key — hashability",href:"/roadmap/topic/python-data-structures/1"},to:{title:"Sets",description:"Hash table — keys without values",href:"/roadmap/topic/python-data-structures/3"}})})]})}export{v as default};
