import{j as e}from"./index-8eB8ukBA.js";import{N as f,S as a,C as r,a as h,Q as d,b as x}from"./ConnectedTopics-SPFj48ZS.js";import{M as m}from"./MentalModel-7u6gqoEs.js";import{T as o}from"./TrapBox-cI68XYa-.js";import{I as c}from"./InfoBox-CP92M4gW.js";const i={if_c:"#4F8CFF",elif_c:"#F59E0B",else_c:"#34D399",tern:"#A78BFA",match:"#F87171",muted:"#8B949E",dim:"#2D333B"};function y(){return e.jsxs("svg",{viewBox:"0 0 520 220",className:"w-full","aria-label":"if elif else flow",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes ifFade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
          .if0{animation:ifFade .3s .0s ease both}
          .if1{animation:ifFade .3s .12s ease both}
          .if2{animation:ifFade .3s .24s ease both}
          .if3{animation:ifFade .3s .36s ease both}
          .if4{animation:ifFade .3s .48s ease both}
        `}),e.jsx("marker",{id:"ifArr",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:i.muted})}),e.jsx("marker",{id:"ifGreen",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:i.else_c})}),e.jsx("marker",{id:"ifBlue",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:i.if_c})}),e.jsx("marker",{id:"ifAmb",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:i.elif_c})})]}),e.jsxs("g",{className:"if0",children:[e.jsx("polygon",{points:"130,10 200,40 130,70 60,40",fill:i.if_c,fillOpacity:".15",stroke:i.if_c,strokeOpacity:".6",strokeWidth:"1.8"}),e.jsx("text",{x:"130",y:"35",textAnchor:"middle",fontSize:"10",fontWeight:"700",fill:i.if_c,fontFamily:"Poppins,sans-serif",children:"if condition"}),e.jsx("text",{x:"130",y:"50",textAnchor:"middle",fontSize:"8.5",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:"score >= 90?"})]}),e.jsxs("g",{className:"if1",children:[e.jsx("line",{x1:"200",y1:"40",x2:"290",y2:"40",stroke:i.if_c,strokeWidth:"1.8",markerEnd:"url(#ifBlue)"}),e.jsx("text",{x:"245",y:"34",textAnchor:"middle",fontSize:"8",fill:i.if_c,fontFamily:"Poppins,sans-serif",children:"True"}),e.jsx("rect",{x:"292",y:"22",width:"120",height:"36",rx:"8",fill:i.if_c,fillOpacity:".12",stroke:i.if_c,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"352",y:"40",textAnchor:"middle",fontSize:"9",fill:i.if_c,fontFamily:"Open Sans,sans-serif",children:'grade = "A"'}),e.jsx("text",{x:"352",y:"53",textAnchor:"middle",fontSize:"8.5",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:"→ DONE, skip rest"})]}),e.jsxs("g",{className:"if2",children:[e.jsx("line",{x1:"130",y1:"70",x2:"130",y2:"100",stroke:i.elif_c,strokeWidth:"1.8",markerEnd:"url(#ifAmb)"}),e.jsx("text",{x:"140",y:"88",fontSize:"8",fill:i.elif_c,fontFamily:"Poppins,sans-serif",children:"False"}),e.jsx("polygon",{points:"130,102 200,132 130,162 60,132",fill:i.elif_c,fillOpacity:".15",stroke:i.elif_c,strokeOpacity:".6",strokeWidth:"1.8"}),e.jsx("text",{x:"130",y:"127",textAnchor:"middle",fontSize:"10",fontWeight:"700",fill:i.elif_c,fontFamily:"Poppins,sans-serif",children:"elif condition"}),e.jsx("text",{x:"130",y:"142",textAnchor:"middle",fontSize:"8.5",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:"score >= 75?"}),e.jsx("line",{x1:"200",y1:"132",x2:"290",y2:"132",stroke:i.elif_c,strokeWidth:"1.8",markerEnd:"url(#ifAmb)"}),e.jsx("text",{x:"245",y:"126",textAnchor:"middle",fontSize:"8",fill:i.elif_c,fontFamily:"Poppins,sans-serif",children:"True"}),e.jsx("rect",{x:"292",y:"114",width:"120",height:"36",rx:"8",fill:i.elif_c,fillOpacity:".12",stroke:i.elif_c,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"352",y:"132",textAnchor:"middle",fontSize:"9",fill:i.elif_c,fontFamily:"Open Sans,sans-serif",children:'grade = "B"'}),e.jsx("text",{x:"352",y:"145",textAnchor:"middle",fontSize:"8.5",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:"→ DONE, skip rest"})]}),e.jsxs("g",{className:"if3",children:[e.jsx("line",{x1:"130",y1:"162",x2:"130",y2:"192",stroke:i.else_c,strokeWidth:"1.8",markerEnd:"url(#ifGreen)"}),e.jsx("text",{x:"140",y:"180",fontSize:"8",fill:i.else_c,fontFamily:"Poppins,sans-serif",children:"False"}),e.jsx("rect",{x:"68",y:"192",width:"124",height:"22",rx:"7",fill:i.else_c,fillOpacity:".12",stroke:i.else_c,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"130",y:"207",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:i.else_c,fontFamily:"Poppins,sans-serif",children:'else: grade = "C"'})]}),e.jsxs("g",{className:"if4",children:[e.jsx("text",{x:"420",y:"192",textAnchor:"middle",fontSize:"8",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:"kan Python checks"}),e.jsx("text",{x:"420",y:"204",textAnchor:"middle",fontSize:"8",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:"top-down, first"}),e.jsx("text",{x:"420",y:"216",textAnchor:"middle",fontSize:"8",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:"True block runs"})]})]})}function p(){return e.jsxs("svg",{viewBox:"0 0 520 100",className:"w-full","aria-label":"Ternary expression anatomy",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes trnFade{from{opacity:0}to{opacity:1}}
          .trn{animation:trnFade .4s .1s ease both}
        `})}),e.jsxs("g",{className:"trn",children:[e.jsx("rect",{x:"10",y:"20",width:"90",height:"34",rx:"7",fill:i.if_c,fillOpacity:".15",stroke:i.if_c,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"55",y:"33",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:i.if_c,fontFamily:"Poppins,sans-serif",children:"value_if_true"}),e.jsx("text",{x:"55",y:"46",textAnchor:"middle",fontSize:"8",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:'"Adult"'}),e.jsx("rect",{x:"110",y:"20",width:"40",height:"34",rx:"7",fill:i.tern,fillOpacity:".15",stroke:i.tern,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"130",y:"40",textAnchor:"middle",fontSize:"10",fontWeight:"800",fill:i.tern,fontFamily:"Poppins,sans-serif",children:"if"}),e.jsx("rect",{x:"160",y:"20",width:"90",height:"34",rx:"7",fill:i.elif_c,fillOpacity:".15",stroke:i.elif_c,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"205",y:"33",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:i.elif_c,fontFamily:"Poppins,sans-serif",children:"condition"}),e.jsx("text",{x:"205",y:"46",textAnchor:"middle",fontSize:"8",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:"age >= 18"}),e.jsx("rect",{x:"260",y:"20",width:"46",height:"34",rx:"7",fill:i.tern,fillOpacity:".15",stroke:i.tern,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"283",y:"40",textAnchor:"middle",fontSize:"10",fontWeight:"800",fill:i.tern,fontFamily:"Poppins,sans-serif",children:"else"}),e.jsx("rect",{x:"316",y:"20",width:"90",height:"34",rx:"7",fill:i.else_c,fillOpacity:".15",stroke:i.else_c,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"361",y:"33",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:i.else_c,fontFamily:"Poppins,sans-serif",children:"value_if_false"}),e.jsx("text",{x:"361",y:"46",textAnchor:"middle",fontSize:"8",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:'"Minor"'}),e.jsx("rect",{x:"10",y:"64",width:"396",height:"28",rx:"7",fill:i.dim,fillOpacity:".6",stroke:i.muted,strokeOpacity:".2",strokeWidth:"1"}),e.jsx("text",{x:"208",y:"81",textAnchor:"middle",fontSize:"9",fontFamily:"Space Mono,monospace",fill:"#E6EDF3",children:'status = "Adult" if age >= 18 else "Minor"'})]})]})}function u(){const t=["0","0.0",'""',"''","[]","{}","set()","None","False"],s=["1","-5","3.14",'"hi"',"[0]","{1}","True","any object"];return e.jsxs("svg",{viewBox:"0 0 520 110",className:"w-full","aria-label":"Truthy and falsy",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes trFade{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .tr{animation:trFade .4s .1s ease both}
        `})}),e.jsxs("g",{className:"tr",children:[e.jsx("rect",{x:"6",y:"4",width:"250",height:"100",rx:"9",fill:"#F87171",fillOpacity:".08",stroke:"#F87171",strokeOpacity:".3",strokeWidth:"1.5"}),e.jsx("text",{x:"131",y:"24",textAnchor:"middle",fontSize:"10",fontWeight:"700",fill:"#F87171",fontFamily:"Poppins,sans-serif",children:"❌ Falsy — if me jaayega False branch"}),e.jsx("g",{children:t.map((n,l)=>e.jsx("text",{x:20+l%5*46,y:46+Math.floor(l/5)*20,fontSize:"9",fill:"#F87171",fontFamily:"Space Mono,monospace",children:n},n))}),e.jsx("rect",{x:"264",y:"4",width:"250",height:"100",rx:"9",fill:i.else_c,fillOpacity:".08",stroke:i.else_c,strokeOpacity:".3",strokeWidth:"1.5"}),e.jsx("text",{x:"389",y:"24",textAnchor:"middle",fontSize:"10",fontWeight:"700",fill:i.else_c,fontFamily:"Poppins,sans-serif",children:"✓ Truthy — if me jaayega True branch"}),e.jsx("g",{children:s.map((n,l)=>e.jsx("text",{x:278+l%4*60,y:46+Math.floor(l/4)*20,fontSize:"9",fill:i.else_c,fontFamily:"Space Mono,monospace",children:n},n))})]})]})}function k(){return e.jsxs("svg",{viewBox:"0 0 540 160",className:"w-full","aria-label":"Conditionals quick recall",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes crPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .cr0{animation:crPop .3s .0s ease both}
          .cr1{animation:crPop .3s .12s ease both}
          .cr2{animation:crPop .3s .24s ease both}
        `})}),e.jsxs("g",{className:"cr0",children:[e.jsx("rect",{x:"4",y:"4",width:"168",height:"148",rx:"9",fill:i.if_c,fillOpacity:".09",stroke:i.if_c,strokeOpacity:".35",strokeWidth:"1.5"}),e.jsx("text",{x:"88",y:"24",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:i.if_c,fontFamily:"Poppins,sans-serif",children:"if / elif / else"}),["Top-down check","First True block runs","Rest skipped","else is optional","No switch statement"].map((t,s)=>e.jsxs("text",{x:"14",y:42+s*18,fontSize:"8.5",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:["• ",t]},s))]}),e.jsxs("g",{className:"cr1",children:[e.jsx("rect",{x:"180",y:"4",width:"168",height:"148",rx:"9",fill:i.tern,fillOpacity:".09",stroke:i.tern,strokeOpacity:".35",strokeWidth:"1.5"}),e.jsx("text",{x:"264",y:"24",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:i.tern,fontFamily:"Poppins,sans-serif",children:"Ternary"}),["val if cond else other","One-liner only","No nested please","Good for simple switch","Readability first"].map((t,s)=>e.jsxs("text",{x:"190",y:42+s*18,fontSize:"8.5",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:["• ",t]},s))]}),e.jsxs("g",{className:"cr2",children:[e.jsx("rect",{x:"356",y:"4",width:"180",height:"148",rx:"9",fill:i.match,fillOpacity:".09",stroke:i.match,strokeOpacity:".35",strokeWidth:"1.5"}),e.jsx("text",{x:"446",y:"24",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:i.match,fontFamily:"Poppins,sans-serif",children:"match (3.10+)"}),["match subject:","case value:","case _:  (wildcard)","Structural patterns","Replaces if chains"].map((t,s)=>e.jsxs("text",{x:"366",y:42+s*18,fontSize:"8.5",fill:i.muted,fontFamily:"Open Sans,sans-serif",children:["• ",t]},s))]})]})}function _(){return e.jsxs(f,{title:"Conditionals — if / elif / else",phase:"0A",subtitle:"Python mein decisions kaise lete hain — top-down check, truthiness, ternary, aur Python 3.10 match statement.",children:[e.jsx(a,{icon:"🧠",title:"Mental Model",children:e.jsx(m,{analogyTitle:"🚦 Traffic Signal",analogy:e.jsxs("div",{className:"space-y-4 text-sm font-body",children:[e.jsx("p",{className:"text-content font-semibold leading-note",children:"if/elif/else = traffic signal system. Python upar se neeche check karta hai, pehla green (True) signal milte hi us lane pe enter karta hai, baaki ignore."}),e.jsx("div",{className:"space-y-2 border-t border-highlight pt-3",children:[{c:"if condition1:",note:"pehla check — agar True, ye block run",color:"text-primary"},{c:"elif condition2:",note:"sirf agar condition1 False tha",color:"text-accent"},{c:"elif condition3:",note:"chain mein aur bhi ho sakte hain",color:"text-accent"},{c:"else:",note:"koi bhi True nahi tha, ye fallback",color:"text-visual-2"}].map(t=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("code",{className:"font-code text-xs text-primary shrink-0 w-32",children:t.c}),e.jsx("span",{className:"text-xs text-content-muted leading-note",children:t.note})]},t.c))}),e.jsx("p",{className:"text-xs text-content-muted leading-note border-t border-highlight pt-2",children:"Important: ek baar ek block run ho gaya — baaki sab skip. No fall-through like C/Java switch."})]}),diagram:e.jsx(y,{})})}),e.jsx(a,{icon:"📝",title:"Basic Syntax",children:e.jsx("div",{className:"space-y-4",children:e.jsx(r,{language:"python",filename:"conditionals.py",code:`score = 85

# Simple if
if score >= 90:
    grade = "A"
elif score >= 75:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"

# One-liner if (no block needed for simple)
if score > 50: print("Pass")   # valid but not recommended

# Nested conditionals
if user:
    if user.is_admin:
        show_admin_panel()
    else:
        show_user_panel()
else:
    redirect_to_login()

# Multiple conditions
if score > 60 and score < 90:    # and
    grade = "B or C"

if score < 50 or score > 95:     # or
    flag_unusual()`})})}),e.jsx(a,{icon:"☯️",title:"Truthiness — Kya Falsy hai?",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-surface-visual rounded-xl p-5",children:e.jsx(u,{})}),e.jsx(r,{language:"python",filename:"truthiness.py",code:`# Falsy values — sab if me False maane jaate hain
if 0:        print("nope")   # nahi chalega
if "":       print("nope")   # nahi chalega
if []:       print("nope")   # nahi chalega
if None:     print("nope")   # nahi chalega
if False:    print("nope")   # nahi chalega

# Truthy — baaki sab
if 1:        print("yes")    # chalega
if "a":      print("yes")    # chalega
if [0]:      print("yes")    # [0] empty nahi — truthy!
if -5:       print("yes")    # non-zero — truthy

# Common pattern — None/empty check
data = get_data()
if data:                     # None ya empty dono handle
    process(data)

# More explicit — only None check
if data is not None:         # empty list bhi pass ho jayegi
    process(data)`})]})}),e.jsx(a,{icon:"🔀",title:"Ternary Expression",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-surface-visual rounded-xl p-5",children:e.jsx(p,{})}),e.jsx(r,{language:"python",filename:"ternary.py",code:`# Basic ternary
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)   # "Adult"

# With function calls
label = format_name(user) if user else "Guest"

# In list/dict comprehension
scores = [85, 42, 91, 67]
grades = ["Pass" if s >= 60 else "Fail" for s in scores]

# Nested ternary — try to avoid!
# grade = "A" if s >= 90 else "B" if s >= 75 else "C"
# Better — use if/elif for clarity

# Ternary vs if — kab use karein?
# Ternary: one simple expression, no side effects
# if/elif: complex logic, multiple statements`}),e.jsxs(c,{type:"warn",title:"Nested ternary avoid karo",children:[e.jsx("code",{className:"font-code text-xs",children:"a if c1 else b if c2 else c"})," — technically valid but readable nahi hai. 3+ conditions ke liye if/elif use karo."]})]})}),e.jsx(a,{icon:"🎯",title:"match Statement (Python 3.10+)",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{language:"python",filename:"match_statement.py",code:`# Basic match — cleaner than if chains
command = "quit"

match command:
    case "quit":
        exit()
    case "help":
        show_help()
    case "start":
        start_game()
    case _:          # wildcard — else ki tarah
        print("Unknown command")

# Match with values
point = (0, 1)

match point:
    case (0, 0):
        print("Origin")
    case (x, 0):
        print(f"X-axis at {x}")
    case (0, y):
        print(f"Y-axis at {y}")
    case (x, y):
        print(f"Point at {x}, {y}")

# Match with guard condition
match score:
    case s if s >= 90:
        grade = "A"
    case s if s >= 75:
        grade = "B"
    case _:
        grade = "C"`}),e.jsx(c,{type:"info",title:"match vs if/elif",children:"match statement Python 3.10 se hai. Structural pattern matching ke liye powerful hai — especially tuples, dataclasses ke saath. Simple value comparison ke liye if/elif bhi theek hai."})]})}),e.jsx(a,{icon:"🪤",title:"Interview Traps",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{number:1,name:"if [] vs if [] is not None",level:"B",question:"items = [] — kya if items: block chalega?",wrongAnswer:"Haan — items exist karta hai",correctAnswer:"Nahi — empty list [] falsy hai",why:"if list_name: empty list ko False maanta hai. Agar aapko sirf None check karni hai (empty list pass karni hai), toh if items is not None: use karo. Ye real backend bug hai — function returned empty list but code treated it as error."}),e.jsx(o,{number:2,name:"Indentation matters",level:"B",question:"if x: print('a') print('b') — dono print chalenge?",wrongAnswer:"Sirf 'a' — 'b' else block mein hai",correctAnswer:"Dono print chalenge — 'b' if ke bahar hai (not indented)",why:"Python mein indentation hi block define karta hai. print('b') if ke andar nahi hai isliye hamesha chalega regardless of condition. C/Java ke curly braces miss ho jaate hain beginners ko."}),e.jsx(o,{number:3,name:"Chained elif order matters",level:"B",question:"score = 95 — agar if score > 60: pehle aaye toh kya hoga?",wrongAnswer:"Sahi grade milegi",correctAnswer:"Galat grade — agar 60 wala pehle aaya toh 'C' milega even for 95",why:"if/elif top-down check karta hai. Pehla True milte hi rok jaata hai. Specific conditions (90+) pehle likhni chahiye, broad ones (60+) baad mein. Isliye order matters."})]})}),e.jsx(a,{icon:"📋",title:"Cheatsheet",children:e.jsx(h,{items:[{label:"if cond:",value:"basic check — indented block"},{label:"elif cond:",value:"chain check — only if previous was False"},{label:"else:",value:"fallback — no condition"},{label:"Falsy values",value:'0, 0.0, "", [], {}, set(), None, False'},{label:"if data:",value:"pythonic None/empty check"},{label:"if x is None:",value:"strict None-only check"},{label:"a if cond else b",value:"ternary — simple one-liners ke liye"},{label:"match x: case v:",value:"Python 3.10+ structural matching"},{label:"case _:",value:"wildcard (like default in switch)"},{label:"Order matters",value:"specific → broad (90+ before 60+)"}]})}),e.jsx(a,{icon:"⚡",title:"Quick Recall",children:e.jsx(d,{children:e.jsx(k,{})})}),e.jsx(a,{icon:"🔗",title:"Connected Topics",children:e.jsx(x,{from:{title:"Conditionals",description:"if/elif/else, truthiness, ternary, match"},to:{title:"Loops — for, while, break, continue",description:"Decisions ke baad repetition — loops sikhte hain",href:"/roadmap/topic/python-basics/3"}})})]})}export{_ as default};
