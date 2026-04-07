import{j as e}from"./index-8eB8ukBA.js";import{N as o,S as l,C as r,a as s,Q as c,b as d}from"./ConnectedTopics-SPFj48ZS.js";import{M as f}from"./MentalModel-7u6gqoEs.js";import{T as x}from"./TrapBox-cI68XYa-.js";import{C as h}from"./CompareBlock-DUTyij-B.js";import{I as u}from"./InfoBox-CP92M4gW.js";const t={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",red:"#ef4444",redLight:"#fca5a5",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function p(){return e.jsxs("svg",{viewBox:"0 0 520 280",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes clCapture { 0%{stroke-dashoffset:200} 100%{stroke-dashoffset:0} }
          @keyframes clGlow { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.35} }
          .cl-line{stroke-dasharray:200;animation:clCapture 2s .5s ease both}
          .cl-glow{animation:clGlow 2s ease-in-out infinite}
        `}),e.jsx("marker",{id:"clArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.orange})}),e.jsx("marker",{id:"clGrn",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.green})})]}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Closure = Function + Captured Variables"}),e.jsx("rect",{x:"15",y:"32",width:"490",height:"235",rx:"12",fill:t.blue,fillOpacity:".05",stroke:t.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"30",y:"52",fill:t.blueLight,fontSize:"11",fontWeight:"700",children:"outer() scope"}),e.jsx("rect",{x:"30",y:"58",width:"155",height:"38",rx:"6",fill:t.blue,fillOpacity:".2",stroke:t.blue,strokeWidth:"1"}),e.jsx("text",{x:"107",y:"73",textAnchor:"middle",fill:t.blueLight,fontSize:"11",children:"multiplier = 3"}),e.jsx("text",{x:"107",y:"88",textAnchor:"middle",fill:t.muted,fontSize:"9",children:"cell object"}),e.jsx("rect",{x:"195",y:"32",width:"310",height:"165",rx:"10",fill:t.purple,fillOpacity:".06",stroke:t.purple,strokeWidth:"1.5"}),e.jsx("text",{x:"210",y:"52",fill:t.purpleLight,fontSize:"11",fontWeight:"700",children:"inner() — the closure"}),e.jsx("rect",{x:"210",y:"58",width:"285",height:"50",rx:"6",fill:"#0f172a"}),e.jsx("text",{x:"220",y:"76",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"def inner(x):"}),e.jsx("text",{x:"220",y:"91",fill:t.text,fontSize:"9",fontFamily:"monospace",children:"    return x * multiplier  # ← captured"}),e.jsx("text",{x:"220",y:"106",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"                           # from outer"}),e.jsx("line",{x1:"187",y1:"76",x2:"208",y2:"76",stroke:t.orange,strokeWidth:"2",className:"cl-line",markerEnd:"url(#clArr)"}),e.jsx("text",{x:"197",y:"68",textAnchor:"middle",fill:t.orange,fontSize:"9",children:"cell ref"}),e.jsx("rect",{x:"210",y:"120",width:"285",height:"65",rx:"6",fill:t.purple,fillOpacity:".15",stroke:t.purple,strokeWidth:"1.5",className:"cl-glow"}),e.jsx("text",{x:"352",y:"140",textAnchor:"middle",fill:t.purpleLight,fontSize:"11",fontWeight:"700",children:"Closure Object (heap)"}),e.jsx("text",{x:"220",y:"160",fill:t.text,fontSize:"10",children:"__code__  : inner function bytecode"}),e.jsx("text",{x:"220",y:"177",fill:t.text,fontSize:"10",children:"__closure__: (cell(multiplier=3),)"}),e.jsx("text",{x:"30",y:"228",fill:t.muted,fontSize:"11",children:"outer() returns inner:"}),e.jsx("line",{x1:"30",y1:"238",x2:"207",y2:"238",stroke:t.green,strokeWidth:"1.5",markerEnd:"url(#clGrn)"}),e.jsx("text",{x:"30",y:"258",fill:t.greenLight,fontSize:"10",children:"double = make_multiplier(2)"}),e.jsx("text",{x:"30",y:"272",fill:t.greenLight,fontSize:"10",children:"double(5)  # → 10 (even after outer() returned!)"})]})}function m(){return e.jsxs("svg",{viewBox:"0 0 520 235",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes lbBlink { 0%,100%{opacity:1} 50%{opacity:.3} }
          .lb-blink{animation:lbBlink 1s ease-in-out infinite}
        `})}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Late Binding Trap"}),e.jsx("rect",{x:"15",y:"30",width:"230",height:"195",rx:"8",fill:t.red,fillOpacity:".05",stroke:t.red,strokeWidth:"1.5"}),e.jsx("text",{x:"130",y:"50",textAnchor:"middle",fill:t.redLight,fontSize:"11",fontWeight:"700",children:"TRAP — Late Binding"}),e.jsx("rect",{x:"25",y:"57",width:"210",height:"95",rx:"6",fill:"#0f172a"}),e.jsx("text",{x:"35",y:"75",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"funcs = []"}),e.jsx("text",{x:"35",y:"91",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"for i in range(3):"}),e.jsx("text",{x:"35",y:"107",fill:t.text,fontSize:"9",fontFamily:"monospace",children:"    funcs.append(lambda: i)"}),e.jsx("text",{x:"35",y:"123",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"    # captures i variable"}),e.jsx("text",{x:"35",y:"139",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"    # NOT its current value!"}),e.jsx("text",{x:"25",y:"170",fill:t.muted,fontSize:"10",children:"Results (after loop i=2):"}),e.jsx("text",{x:"25",y:"187",fill:t.redLight,fontSize:"11",fontWeight:"700",className:"lb-blink",children:"funcs[0]() → 2  ← NOT 0!"}),e.jsx("text",{x:"25",y:"203",fill:t.redLight,fontSize:"11",children:"funcs[1]() → 2  ← NOT 1!"}),e.jsx("text",{x:"25",y:"219",fill:t.redLight,fontSize:"11",children:"funcs[2]() → 2"}),e.jsx("rect",{x:"270",y:"30",width:"240",height:"195",rx:"8",fill:t.green,fillOpacity:".05",stroke:t.green,strokeWidth:"1.5"}),e.jsx("text",{x:"390",y:"50",textAnchor:"middle",fill:t.greenLight,fontSize:"11",fontWeight:"700",children:"FIX — Default Arg Capture"}),e.jsx("rect",{x:"280",y:"57",width:"220",height:"95",rx:"6",fill:"#0f172a"}),e.jsx("text",{x:"290",y:"75",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"funcs = []"}),e.jsx("text",{x:"290",y:"91",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"for i in range(3):"}),e.jsx("text",{x:"290",y:"107",fill:t.text,fontSize:"9",fontFamily:"monospace",children:"    funcs.append(lambda x=i: x)"}),e.jsx("text",{x:"290",y:"123",fill:t.greenLight,fontSize:"9",fontFamily:"monospace",children:"    # x=i evaluated NOW"}),e.jsx("text",{x:"290",y:"139",fill:t.greenLight,fontSize:"9",fontFamily:"monospace",children:"    # value captured!"}),e.jsx("text",{x:"280",y:"170",fill:t.muted,fontSize:"10",children:"Results:"}),e.jsx("text",{x:"280",y:"187",fill:t.greenLight,fontSize:"11",children:"funcs[0]() → 0  ✓"}),e.jsx("text",{x:"280",y:"203",fill:t.greenLight,fontSize:"11",children:"funcs[1]() → 1  ✓"}),e.jsx("text",{x:"280",y:"219",fill:t.greenLight,fontSize:"11",children:"funcs[2]() → 2  ✓"})]})}function y(){return e.jsxs("svg",{viewBox:"0 0 520 155",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"155",rx:"10",fill:"#0f172a",stroke:t.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Closures"}),[{x:15,color:t.purple,title:"Closure = ?",lines:["Function + __closure__","Cell objects mein vars","Heap pe live rakhta hai"]},{x:185,color:t.orange,title:"Late Binding",lines:["Variable capture, value nahi","Loop mein lambda trap","Fix: default arg x=i"]},{x:355,color:t.green,title:"Use Cases",lines:["Counter / state","Factory functions","Partial application"]}].map(i=>e.jsxs("g",{children:[e.jsx("rect",{x:i.x,y:"32",width:"155",height:"110",rx:"6",fill:i.color,fillOpacity:".08",stroke:i.color,strokeWidth:"1.2"}),e.jsx("text",{x:i.x+77,y:"50",textAnchor:"middle",fill:i.color,fontSize:"11",fontWeight:"700",children:i.title}),i.lines.map((a,n)=>e.jsx("text",{x:i.x+10,y:68+n*22,fill:t.text,fontSize:"10",children:`→ ${a}`},n))]},i.title))]})}function _(){return e.jsxs(o,{title:"Closures & Late Binding",phase:"0A",subtitle:"Functions jo bahar ke variables yaad rakhte hain — aur ek common trap",children:[e.jsx(l,{icon:"🧠",title:"Mental Model — Closure Kya Hai?",children:e.jsx(f,{analogy:"Closure = function + backpack. Backpack mein outer scope ke variables hain. Outer function khatam ho jata hai par backpack survive karta hai. Jab bhi call karo — backpack ke vars use hote hain.",diagram:e.jsx(p,{})})}),e.jsx(l,{icon:"💻",title:"Closure — Basic Pattern",children:e.jsx(r,{code:`def make_multiplier(factor):
    def multiply(x):
        return x * factor   # factor captured from outer
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)

double(5)   # 10 — factor=2 yaad hai
triple(5)   # 15 — factor=3 yaad hai

# Closure inspect karo:
print(double.__closure__)            # (<cell at 0x...>,)
print(double.__closure__[0].cell_contents)  # 2`})}),e.jsx(l,{icon:"🔢",title:"Mutable State — nonlocal",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(u,{type:"info",title:"Modify karna = nonlocal chahiye",children:"Closure variable ko modify karna hai to nonlocal declare karo. Warna sirf read hoga — write karne ki koshish → UnboundLocalError."}),e.jsx(r,{code:`def make_counter(start=0):
    count = start

    def increment(by=1):
        nonlocal count
        count += by
        return count

    def reset():
        nonlocal count
        count = start

    def get():
        return count   # read — no nonlocal needed

    return increment, reset, get

inc, reset, get = make_counter(10)
inc()     # 11
inc(5)    # 16
reset()
get()     # 10`})]})}),e.jsx(l,{icon:"🪤",title:"Late Binding Trap",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{}),e.jsx(x,{number:1,name:"Loop + Lambda Late Binding",level:"M",question:"funcs = [lambda: i for i in range(3)] — funcs[0]() kya return karega?",wrongAnswer:"0 — loop ka pehla value",correctAnswer:"2 — sab functions same i variable share karte hain, jo loop ke end mein 2 hai",why:"Closure captures variable reference, not value. Loop end tak i=2 ho jaata hai. Jab bhi call karo — woh i dekhta hai jo tab 2 hai.",fix:e.jsx(r,{code:`# Fix: default arg se value capture karo
funcs = [lambda x=i: x for i in range(3)]
[f() for f in funcs]  # [0, 1, 2] ✓

# Alternative: factory function
def make_func(n):
    def f():
        return n
    return f
funcs = [make_func(i) for i in range(3)]`})})]})}),e.jsx(l,{icon:"🏭",title:"Factory Pattern — Real Use Case",children:e.jsx(r,{code:`# HTTP route handler factory
def make_handler(route, method="GET"):
    def handler(request):
        print(f"{method} {route}: {request}")
    return handler

get_users  = make_handler("/api/users")
post_order = make_handler("/api/orders", method="POST")

# Partial application (functools.partial ki tarah)
def multiply(x, y):
    return x * y

def partial(func, *fixed_args):
    def wrapper(*args, **kwargs):
        return func(*fixed_args, *args, **kwargs)
    return wrapper

double = partial(multiply, 2)
double(5)   # 10
double(10)  # 20`})}),e.jsx(l,{icon:"⚖️",title:"Closure vs Class",children:e.jsx(h,{bad:e.jsx(r,{code:`# Closure: simple, single responsibility
def make_adder(n):
    def add(x):
        return x + n
    return add

# Jab sirf ek behavior ho — closure use karo`}),good:e.jsx(r,{code:`# Class: multiple behaviors, complex state
class Adder:
    def __init__(self, n):
        self.n = n
    def add(self, x):
        return x + self.n
    def multiply(self, x):
        return x * self.n

# Multiple methods ho to class use karo`}),badLabel:"Closure — simple cases",goodLabel:"Class — complex cases"})}),e.jsx(l,{icon:"📋",title:"Cheatsheet",children:e.jsx(s,{items:[{label:"Closure",value:"Function + captured cell objects"},{label:"Capture",value:"Variable reference, value nahi"},{label:"Late binding",value:"Loop lambda trap → use x=i default"},{label:"Modify captured",value:"nonlocal keyword chahiye"},{label:"__closure__",value:"Tuple of cell objects"},{label:"Use case",value:"Counter, factory, partial application"}]})}),e.jsx(l,{icon:"⚡",title:"Quick Recall",children:e.jsx(c,{children:e.jsx(y,{})})}),e.jsx(l,{icon:"🔗",title:"Connected Topics",children:e.jsx(d,{from:{title:"Scope & LEGB",description:"Closures LEGB pe rely karte hain",href:"/roadmap/topic/python-functions/4"},to:{title:"Decorators",description:"Decorators = closures ka use case",href:"/roadmap/topic/python-decorators/0"}})})]})}export{_ as default};
