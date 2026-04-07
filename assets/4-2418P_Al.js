import{j as e}from"./index-8eB8ukBA.js";import{N as c,S as l,C as i,a as h,Q as d,b as u}from"./ConnectedTopics-SPFj48ZS.js";import{M as x}from"./MentalModel-7u6gqoEs.js";import{T as o}from"./TrapBox-cI68XYa-.js";import{C as f}from"./CompareBlock-DUTyij-B.js";import{I as a}from"./InfoBox-CP92M4gW.js";const n={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",orangeLight:"#fcd34d",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function g(){return e.jsxs("svg",{viewBox:"0 0 520 295",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes legbDown { 0%{opacity:0;transform:translateY(-8px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes legbGlow { 0%,100%{filter:drop-shadow(0 0 0px #10b981)} 50%{filter:drop-shadow(0 0 5px #10b981)} }
          .lb1{animation:legbDown .5s .1s ease both}
          .lb2{animation:legbDown .5s .4s ease both}
          .lb3{animation:legbDown .5s .7s ease both}
          .lb4{animation:legbDown .5s 1.0s ease both}
          .lb-found{animation:legbGlow 2s 1.5s ease-in-out infinite}
        `}),e.jsx("marker",{id:"legbArr",markerWidth:"8",markerHeight:"8",refX:"4",refY:"6",orient:"auto",children:e.jsx("path",{d:"M2,0 L6,0 L4,6 Z",fill:n.orange})})]}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:n.white,fontSize:"13",fontWeight:"700",children:"LEGB — Variable Lookup Order"}),e.jsx("line",{x1:"65",y1:"40",x2:"65",y2:"268",stroke:n.orange,strokeWidth:"2",strokeDasharray:"5,3",markerEnd:"url(#legbArr)"}),e.jsx("text",{x:"14",y:"160",fill:n.orange,fontSize:"10",transform:"rotate(-90,14,160)",children:"Search Order"}),[{cls:"lb1",letter:"L",color:n.purpleLight,bg:n.purple,y:36,title:"Local",sub:"Function ke andar defined"},{cls:"lb2",letter:"E",color:n.blueLight,bg:n.blue,y:102,title:"Enclosing",sub:"Outer function scope (nested)"},{cls:"lb3",letter:"G",color:n.greenLight,bg:n.green,y:168,title:"Global",sub:"Module-level variables"},{cls:"lb4",letter:"B",color:n.orangeLight,bg:n.orange,y:234,title:"Built-in",sub:"Python builtins: len, print..."}].map(t=>e.jsxs("g",{className:t.cls,children:[e.jsx("rect",{x:"80",y:t.y,width:"390",height:"55",rx:"8",fill:t.bg,fillOpacity:".1",stroke:t.bg,strokeWidth:"1.5"}),e.jsx("rect",{x:"88",y:t.y+8,width:"36",height:"36",rx:"6",fill:t.bg,fillOpacity:".3"}),e.jsx("text",{x:"106",y:t.y+31,textAnchor:"middle",fill:t.color,fontSize:"18",fontWeight:"800",children:t.letter}),e.jsx("text",{x:"138",y:t.y+22,fill:t.color,fontSize:"12",fontWeight:"700",children:t.title}),e.jsx("text",{x:"138",y:t.y+38,fill:n.muted,fontSize:"10",children:t.sub})]},t.letter)),e.jsxs("g",{className:"lb-found",children:[e.jsx("rect",{x:"388",y:"40",width:"76",height:"22",rx:"5",fill:n.green,fillOpacity:".2",stroke:n.green,strokeWidth:"1"}),e.jsx("text",{x:"426",y:"55",textAnchor:"middle",fill:n.greenLight,fontSize:"10",children:"✓ Found → use"})]}),e.jsx("text",{x:"260",y:"290",textAnchor:"middle",fill:n.muted,fontSize:"10",children:"NameError — kahin bhi nahi mila"})]})}function b(){return e.jsxs("svg",{viewBox:"0 0 520 255",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes snRipple { 0%,100%{opacity:.4} 50%{opacity:1} }
          .sn-b{animation:snRipple 3s ease-in-out infinite}
          .sn-g{animation:snRipple 3s .5s ease-in-out infinite}
          .sn-e{animation:snRipple 3s 1s ease-in-out infinite}
          .sn-l{animation:snRipple 3s 1.5s ease-in-out infinite}
        `})}),e.jsx("text",{x:"260",y:"20",textAnchor:"middle",fill:n.white,fontSize:"13",fontWeight:"700",children:"Nested Scopes — Onion Model"}),e.jsxs("g",{className:"sn-b",children:[e.jsx("rect",{x:"15",y:"30",width:"490",height:"215",rx:"16",fill:"none",stroke:n.orange,strokeWidth:"1.5",strokeDasharray:"6"}),e.jsx("text",{x:"30",y:"52",fill:n.orangeLight,fontSize:"11",fontWeight:"700",children:"Built-in scope — len, print, range, type..."})]}),e.jsxs("g",{className:"sn-g",children:[e.jsx("rect",{x:"35",y:"62",width:"450",height:"165",rx:"12",fill:"none",stroke:n.green,strokeWidth:"1.5"}),e.jsx("text",{x:"50",y:"82",fill:n.greenLight,fontSize:"11",fontWeight:"700",children:"Global scope (module)"}),e.jsxs("text",{x:"50",y:"97",fill:n.muted,fontSize:"10",children:["PI = 3.14, config = ","{}","..."]})]}),e.jsxs("g",{className:"sn-e",children:[e.jsx("rect",{x:"65",y:"108",width:"380",height:"105",rx:"10",fill:"none",stroke:n.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"82",y:"128",fill:n.blueLight,fontSize:"11",fontWeight:"700",children:"Enclosing scope (outer function)"}),e.jsx("text",{x:"82",y:"143",fill:n.muted,fontSize:"10",children:"multiplier = 3"})]}),e.jsxs("g",{className:"sn-l",children:[e.jsx("rect",{x:"100",y:"160",width:"300",height:"45",rx:"8",fill:n.purple,fillOpacity:".1",stroke:n.purple,strokeWidth:"1.5"}),e.jsx("text",{x:"250",y:"181",textAnchor:"middle",fill:n.purpleLight,fontSize:"11",fontWeight:"700",children:"Local scope (inner function)"}),e.jsx("text",{x:"250",y:"197",textAnchor:"middle",fill:n.muted,fontSize:"10",children:"result = x * multiplier"})]})]})}function p(){return e.jsxs("svg",{viewBox:"0 0 520 155",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"155",rx:"10",fill:"#0f172a",stroke:n.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:n.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Scope"}),[{x:15,color:n.purple,title:"LEGB Order",lines:["L → E → G → B","Local pehle, Built-in last","NameError = kahin nahi mila"]},{x:185,color:n.orange,title:"global / nonlocal",lines:["global: module var write","nonlocal: enclosing var write","Read is always free (LEGB)"]},{x:355,color:n.green,title:"Common Traps",lines:["global nahi → UnboundLocalError","nonlocal nahi → closure stuck","Shadowing builtins = danger"]}].map(t=>e.jsxs("g",{children:[e.jsx("rect",{x:t.x,y:"32",width:"155",height:"110",rx:"6",fill:t.color,fillOpacity:".08",stroke:t.color,strokeWidth:"1.2"}),e.jsx("text",{x:t.x+77,y:"50",textAnchor:"middle",fill:t.color,fontSize:"11",fontWeight:"700",children:t.title}),t.lines.map((s,r)=>e.jsx("text",{x:t.x+10,y:68+r*22,fill:n.text,fontSize:"10",children:`→ ${s}`},r))]},t.title))]})}function v(){return e.jsxs(c,{title:"Scope & LEGB Rules",phase:"0A",subtitle:"Variable lookup — Python kaise dhundhta hai naam",children:[e.jsx(l,{icon:"🧠",title:"Mental Model — Scope Kya Hai?",children:e.jsx(x,{analogy:"Ghar ke andar dhundho (local) → drawing room (enclosing) → bahar colony (global) → dictionary (built-in). Pehle mila wahi use karo. Nahi mila = NameError.",diagram:e.jsx(g,{})})}),e.jsx(l,{icon:"🔵",title:"Nested Scopes — Onion Model",children:e.jsx(b,{})}),e.jsx(l,{icon:"💻",title:"LEGB — Code Mein Dekho",children:e.jsx(i,{code:`PI = 3.14              # Global

def outer():
    multiplier = 3       # Enclosing (for inner)

    def inner():
        result = 10      # Local
        print(result)      # L: found local ✓
        print(multiplier)  # E: found enclosing ✓
        print(PI)          # G: found global ✓
        print(len)         # B: found built-in ✓

    inner()

outer()`})}),e.jsx(l,{icon:"🌍",title:"global Keyword",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{type:"info",title:"Read is always free",children:"LEGB se automatic read hota hai. Write/modify karna hai to explicitly declare karo. Write karne ki koshish bina declare kiye → Python local maan leta hai → UnboundLocalError."}),e.jsx(f,{bad:e.jsx(i,{code:`count = 0

def increment():
    count = count + 1  # UnboundLocalError!
    # Python ne count ko local maan liya
    # Assignment dekh ke — par assign se
    # pehle read kiya → error`}),good:e.jsx(i,{code:`count = 0

def increment():
    global count       # explicitly declare
    count = count + 1  # ab OK

increment()
print(count)  # 1`}),badLabel:"Without global — UnboundLocalError",goodLabel:"With global — works"}),e.jsx(o,{number:1,name:"global — Production Mein Avoid Karo",level:"S",question:"global variables use karna theek hai?",wrongAnswer:"Haan — convenient hai global state",correctAnswer:"Avoid karo — hidden coupling, test mushkil, bugs dhundhna mushkil",why:"Global mutable state = shared state across functions. Race conditions, unexpected mutations, testing nightmare. Class ya function parameters use karo."})]})}),e.jsx(l,{icon:"🔒",title:"nonlocal Keyword",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{type:"tip",title:"nonlocal = enclosing variable modify karna",children:"Closures mein counter ya state banate waqt use hota hai. nonlocal nahi doge to Python sirf read kar sakta hai — write karne ki koshish → UnboundLocalError."}),e.jsx(i,{code:`def make_counter():
    count = 0

    def increment():
        nonlocal count    # enclosing 'count' modify karo
        count += 1
        return count

    return increment

counter = make_counter()
counter()  # 1
counter()  # 2
counter()  # 3

# Without nonlocal:
def broken():
    count = 0
    def inc():
        count += 1      # UnboundLocalError!
    return inc`})]})}),e.jsx(l,{icon:"🪤",title:"Scope Traps",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{number:2,name:"UnboundLocalError",level:"M",question:"Yeh code kya print karega? x = 10; def f(): print(x); x = 20; f()",wrongAnswer:"10 — global x padhega pehle",correctAnswer:"UnboundLocalError — x ko local maan liya kyunki x = 20 function mein hai",why:"Python function parse karta hai — agar assignment hai to variable ko local mark kar deta hai puri function ke liye, even before the assignment line."}),e.jsx(o,{number:3,name:"Builtin Shadowing",level:"B",question:"def f(): len = 5; print(len([1,2,3])) — kya hoga?",wrongAnswer:"3 — len() call hoga",correctAnswer:"TypeError: 'int' object is not callable — local len ne builtin ko shadow kiya",why:"Local variable built-in ko hide kar deta hai. Production mein list, dict, type jaise common names use karna dangerous hai."})]})}),e.jsx(l,{icon:"📋",title:"Cheatsheet",children:e.jsx(h,{items:[{label:"LEGB",value:"Local → Enclosing → Global → Built-in"},{label:"Read",value:"Always free — LEGB se auto"},{label:"Write global",value:"global keyword declare karo"},{label:"Write enclosing",value:"nonlocal keyword declare karo"},{label:"NameError",value:"Kahin bhi nahi mila"},{label:"UnboundLocalError",value:"Local mana but assign pehle nahi hua"},{label:"Shadow",value:"Local var built-in ya global ko hide kar sakta"}]})}),e.jsx(l,{icon:"⚡",title:"Quick Recall",children:e.jsx(d,{children:e.jsx(p,{})})}),e.jsx(l,{icon:"🔗",title:"Connected Topics",children:e.jsx(u,{from:{title:"Functions Basics",description:"Stack frames aur parameter types",href:"/roadmap/topic/python-functions/0"},to:{title:"Closures",description:"Closures LEGB + nonlocal pe depend karte hain",href:"/roadmap/topic/python-functions/6"}})})]})}export{v as default};
