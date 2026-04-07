import{j as e}from"./index-8eB8ukBA.js";import{N as r,S as i,C as l,a as d,Q as x,b as c}from"./ConnectedTopics-SPFj48ZS.js";import{M as m}from"./MentalModel-7u6gqoEs.js";import{T as n}from"./TrapBox-cI68XYa-.js";import{C as h}from"./CompareBlock-DUTyij-B.js";import{I as f}from"./InfoBox-CP92M4gW.js";const a={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",orange:"#f59e0b",orangeLight:"#fcd34d",red:"#ef4444",redLight:"#fca5a5",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function u(){return e.jsxs("svg",{viewBox:"0 0 520 190",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes laUl { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
          .la1{stroke-dasharray:200;animation:laUl .8s .2s ease both}
          .la2{stroke-dasharray:200;animation:laUl .8s .6s ease both}
          .la3{stroke-dasharray:200;animation:laUl .8s 1.0s ease both}
        `})}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:a.white,fontSize:"13",fontWeight:"700",children:"Lambda Anatomy"}),e.jsx("rect",{x:"30",y:"32",width:"460",height:"48",rx:"8",fill:"#0f172a",stroke:a.border,strokeWidth:"1.5"}),e.jsx("text",{x:"60",y:"62",fill:a.muted,fontSize:"16",fontFamily:"monospace",children:"lambda"}),e.jsx("text",{x:"148",y:"62",fill:a.purpleLight,fontSize:"16",fontFamily:"monospace",children:"x, y"}),e.jsx("text",{x:"200",y:"62",fill:a.muted,fontSize:"16",fontFamily:"monospace",children:":"}),e.jsx("text",{x:"218",y:"62",fill:a.orangeLight,fontSize:"16",fontFamily:"monospace",children:"x + y"}),e.jsx("line",{x1:"60",y1:"74",x2:"140",y2:"74",stroke:a.blue,strokeWidth:"2",className:"la1"}),e.jsx("line",{x1:"148",y1:"74",x2:"198",y2:"74",stroke:a.purple,strokeWidth:"2",className:"la2"}),e.jsx("line",{x1:"218",y1:"74",x2:"278",y2:"74",stroke:a.orange,strokeWidth:"2",className:"la3"}),e.jsx("text",{x:"100",y:"100",textAnchor:"middle",fill:a.blueLight,fontSize:"11",children:"keyword"}),e.jsx("text",{x:"173",y:"100",textAnchor:"middle",fill:a.purpleLight,fontSize:"11",children:"parameters"}),e.jsx("text",{x:"248",y:"100",textAnchor:"middle",fill:a.orangeLight,fontSize:"11",children:"expression"}),e.jsx("text",{x:"248",y:"115",textAnchor:"middle",fill:a.muted,fontSize:"10",children:"(implicit return)"}),e.jsx("rect",{x:"30",y:"128",width:"460",height:"52",rx:"8",fill:a.red,fillOpacity:".07",stroke:a.red,strokeWidth:"1"}),e.jsx("text",{x:"260",y:"148",textAnchor:"middle",fill:a.redLight,fontSize:"11",fontWeight:"700",children:"Restrictions"}),e.jsx("text",{x:"50",y:"165",fill:a.muted,fontSize:"10",children:"✗ No statements (if-else statement nahi, ternary OK)"}),e.jsx("text",{x:"50",y:"178",fill:a.muted,fontSize:"10",children:"✗ No assignments  ✗ No loops  ✗ No try-except  ✗ Single expression only"})]})}function y(){return e.jsxs("svg",{viewBox:"0 0 520 210",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes luSlide { 0%{opacity:0;transform:translateX(-15px)} 100%{opacity:1;transform:translateX(0)} }
          .lu1{animation:luSlide .5s .1s ease both}
          .lu2{animation:luSlide .5s .3s ease both}
          .lu3{animation:luSlide .5s .5s ease both}
          .lu4{animation:luSlide .5s .7s ease both}
        `})}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:a.white,fontSize:"13",fontWeight:"700",children:"Lambda Use Cases"}),[{cls:"lu1",color:a.purple,title:"sort() key",code:"sorted(data, key=lambda x: x['age'])",y:38},{cls:"lu2",color:a.blue,title:"map/filter",code:"map(lambda x: x*2, nums)",y:88},{cls:"lu3",color:a.green,title:"Inline callback",code:"btn.on_click(lambda e: handle(e))",y:138},{cls:"lu4",color:a.orange,title:"Ternary",code:"f = lambda x: 'pos' if x > 0 else 'neg'",y:188}].map(t=>e.jsxs("g",{className:t.cls,children:[e.jsx("rect",{x:"15",y:t.y-10,width:"490",height:"43",rx:"6",fill:t.color,fillOpacity:".08",stroke:t.color,strokeWidth:"1"}),e.jsx("rect",{x:"20",y:t.y-6,width:"88",height:"18",rx:"4",fill:t.color,fillOpacity:".2"}),e.jsx("text",{x:"64",y:t.y+8,textAnchor:"middle",fill:t.color,fontSize:"10",fontWeight:"700",children:t.title}),e.jsx("text",{x:"118",y:t.y+8,fill:a.text,fontSize:"10",fontFamily:"monospace",children:t.code})]},t.cls))]})}function b(){return e.jsxs("svg",{viewBox:"0 0 520 145",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"145",rx:"10",fill:"#0f172a",stroke:a.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:a.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Lambda"}),[{x:15,color:a.purple,title:"What is it?",lines:["Anonymous function","Single expression only","Implicit return"]},{x:185,color:a.orange,title:"Where to use",lines:["sort key argument","map/filter callbacks","Short inline functions"]},{x:355,color:a.red,title:"Avoid",lines:["Complex logic nahi","Named lambdas nahi","Debug mushkil hota hai"]}].map(t=>e.jsxs("g",{children:[e.jsx("rect",{x:t.x,y:"32",width:"155",height:"100",rx:"6",fill:t.color,fillOpacity:".08",stroke:t.color,strokeWidth:"1.2"}),e.jsx("text",{x:t.x+77,y:"50",textAnchor:"middle",fill:t.color,fontSize:"11",fontWeight:"700",children:t.title}),t.lines.map((o,s)=>e.jsx("text",{x:t.x+10,y:68+s*22,fill:a.text,fontSize:"10",children:`→ ${o}`},s))]},t.title))]})}function L(){return e.jsxs(r,{title:"Lambda Functions",phase:"0A",subtitle:"Anonymous single-expression functions — kab use karo, kab mat karo",children:[e.jsx(i,{icon:"🧠",title:"Mental Model — Lambda Kya Hai?",children:e.jsx(m,{analogy:"Lambda = ek kaam ka banda. Naam nahi, CV nahi — bas ek kaam karo aur jao. Delivery boy ki tarah — sirf deliver karo, kuch aur nahi. Reusable named function chahiye to def use karo.",diagram:e.jsx(u,{})})}),e.jsx(i,{icon:"⚖️",title:"Lambda vs def — Equivalent Hain",children:e.jsx(h,{bad:e.jsx(l,{code:`# def — named function
def square(x):
    return x * x

square(5)  # 25

# Prefer: def for named functions`}),good:e.jsx(l,{code:`# lambda — same thing, inline
square = lambda x: x * x  # ← PEP8 warns this

square(5)  # 25

# Prefer: lambda as ARGUMENT, not as variable`}),badLabel:"def — named functions ke liye",goodLabel:"lambda — inline callbacks ke liye"})}),e.jsx(i,{icon:"🚀",title:"Lambda Use Cases",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(y,{}),e.jsx(l,{code:`# Sort by key
students = [{"name": "Divyesh", "age": 22}, {"name": "Raj", "age": 20}]
sorted(students, key=lambda s: s["age"])

# Sort by multiple keys
sorted(students, key=lambda s: (s["age"], s["name"]))

# filter
evens = list(filter(lambda x: x % 2 == 0, range(10)))
# [0, 2, 4, 6, 8]

# map
squares = list(map(lambda x: x**2, [1,2,3,4]))
# [1, 4, 9, 16]

# min/max with key
words = ["banana", "apple", "cherry"]
min(words, key=lambda s: len(s))   # 'apple'`})]})}),e.jsx(i,{icon:"🪤",title:"Lambda — Kab MAT Use Karo",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{number:1,name:"Named Lambda — PEP8 Violation",level:"B",question:"add = lambda x, y: x + y — theek hai ya nahi?",wrongAnswer:"Haan — lambda use kiya, short hai",correctAnswer:"PEP8 says: avoid assigning lambda to a variable — use def instead",why:"Lambda ko variable assign karna def ka koi advantage nahi deta — traceback worse hoti hai (lambda shows as <lambda>), linters warn karte hain.",fix:e.jsx(l,{code:`# Instead of:
add = lambda x, y: x + y   # ← avoid

# Use:
def add(x, y):
    return x + y   # ← better`})}),e.jsx(n,{number:2,name:"Complex Logic in Lambda",level:"M",question:"Complex lambda readable hai?",wrongAnswer:"Haan — ek line hai to concise hai",correctAnswer:"Nahi — unreadable, debug impossible, team mates confused",why:"Lambda ki value ek line mein simple expression mein hai. Multi-condition, nested ternary = maintenance nightmare.",fix:e.jsx(l,{code:`# Bad
f = lambda x: x**2 if x > 0 else -x if x < -10 else 0

# Good
def process(x):
    if x > 0: return x**2
    if x < -10: return -x
    return 0`})}),e.jsx(f,{type:"tip",title:"Rule of thumb",children:"Lambda best hai jab sort, map, filter ke saath inline use karo. Naam dena hai ya complex logic hai to def prefer karo."})]})}),e.jsx(i,{icon:"⚡",title:"Advanced Lambda Patterns",children:e.jsx(l,{code:`# Immediately Invoked (IIFE)
result = (lambda x, y: x + y)(3, 5)   # 8

# Currying style
add = lambda x: lambda y: x + y
add(3)(5)   # 8

# *args in lambda
f = lambda *args: sum(args)
f(1, 2, 3, 4)   # 10

# Conditional
classify = lambda x: "positive" if x > 0 else "non-positive"

# abs value sort
items = [3, -1, 2, -4, 5]
sorted(items, key=lambda x: abs(x))  # [-1, 2, 3, -4, 5]`})}),e.jsx(i,{icon:"📋",title:"Cheatsheet",children:e.jsx(d,{items:[{label:"Syntax",value:"lambda params: expression"},{label:"Return",value:"Implicit — expression ka result"},{label:"Restrictions",value:"No statements, no assignments, single expression"},{label:"Best use",value:"sort key, map, filter callbacks"},{label:"Avoid",value:"Complex logic, named lambdas"},{label:"Late binding",value:"Loop mein lambda trap — use x=i"}]})}),e.jsx(i,{icon:"⚡",title:"Quick Recall",children:e.jsx(x,{children:e.jsx(b,{})})}),e.jsx(i,{icon:"🔗",title:"Connected Topics",children:e.jsx(c,{from:{title:"Closures",description:"Lambda + loop = late binding trap",href:"/roadmap/topic/python-functions/6"},to:{title:"Higher-Order Functions",description:"map, filter, reduce — lambda ka natural home",href:"/roadmap/topic/python-functions/8"}})})]})}export{L as default};
