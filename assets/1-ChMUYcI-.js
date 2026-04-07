import{j as e}from"./index-BM26oCrq.js";import{N as p,S as o,C as l,a as f,Q as y,b as u}from"./ConnectedTopics-CrnZbieD.js";import{T as m}from"./TrapBox-_dVjjAoa.js";import{I as c}from"./InfoBox-DINCxuUC.js";const t={arith:"#4F8CFF",comp:"#34D399",logic:"#F59E0B",ident:"#A78BFA",memb:"#F87171",bit:"#22D3EE",muted:"#9CA3AF",border:"#1E3A5F"};function j(){const a=[{cat:"Arithmetic",color:t.arith,ops:"+ - * /  //  %  **",note:"number return"},{cat:"Comparison",color:t.comp,ops:"== != < > <= >=",note:"always bool"},{cat:"Logical",color:t.logic,ops:"and   or   not",note:"object return ← !"},{cat:"Identity",color:t.ident,ops:"is     is not",note:"same object?"},{cat:"Membership",color:t.memb,ops:"in     not in",note:"element exists?"},{cat:"Bitwise",color:t.bit,ops:"&  |  ^  ~  <<  >>",note:"bit level ops"}],d=22,s=28;return e.jsxs("svg",{viewBox:"0 0 520 185",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes om0{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om1{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om2{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om3{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om4{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          @keyframes om5{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
          .omr0{animation:om0 .3s .00s ease both}
          .omr1{animation:om1 .3s .07s ease both}
          .omr2{animation:om2 .3s .14s ease both}
          .omr3{animation:om3 .3s .21s ease both}
          .omr4{animation:om4 .3s .28s ease both}
          .omr5{animation:om5 .3s .35s ease both}
        `})}),e.jsx("text",{x:"8",y:"16",fontSize:"9",fontWeight:"700",fill:t.muted,fontFamily:"Poppins,sans-serif",children:"Category"}),e.jsx("text",{x:"140",y:"16",fontSize:"9",fontWeight:"700",fill:t.muted,fontFamily:"Poppins,sans-serif",children:"Operators"}),e.jsx("text",{x:"512",y:"16",textAnchor:"end",fontSize:"9",fontWeight:"700",fill:t.muted,fontFamily:"Poppins,sans-serif",children:"Returns"}),e.jsx("line",{x1:"2",y1:"20",x2:"518",y2:"20",stroke:t.border,strokeWidth:"0.8"}),a.map((i,n)=>{const r=s+n*d;return e.jsxs("g",{className:`omr${n}`,children:[n%2===0&&e.jsx("rect",{x:"2",y:r,width:"516",height:d-1,rx:"3",fill:i.color,fillOpacity:".05"}),e.jsx("rect",{x:"4",y:r+2,width:"108",height:"16",rx:"4",fill:i.color,fillOpacity:".18"}),e.jsx("text",{x:"58",y:r+14,textAnchor:"middle",fontSize:"9.5",fontWeight:"700",fill:i.color,fontFamily:"Poppins,sans-serif",children:i.cat}),e.jsx("text",{x:"120",y:r+14,fontSize:"9",fontWeight:"600",fill:i.color,fontFamily:"Space Mono,monospace",children:i.ops}),e.jsx("text",{x:"512",y:r+14,textAnchor:"end",fontSize:"9",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:i.note})]},i.cat)}),e.jsx("text",{x:"260",y:"178",textAnchor:"middle",fontSize:"8.5",fill:t.logic,fontFamily:"Open Sans,sans-serif",children:"* Logical — and/or objects return karte hain, hamesha bool nahi"})]})}function b(){return e.jsxs("svg",{viewBox:"0 0 520 148",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes sca{from{opacity:0}to{opacity:1}}
          @keyframes scb{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
          @keyframes scc{from{opacity:0}to{opacity:1}}
          @keyframes scd{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
          .sc0{animation:sca .3s .05s ease both}
          .sc1{animation:scb .3s .20s ease both}
          .sc2{animation:scc .3s .35s ease both}
          .sc3{animation:scd .3s .50s ease both}
        `}),e.jsx("marker",{id:"sc-arr-r",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:t.memb})}),e.jsx("marker",{id:"sc-arr-g",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:t.comp})})]}),e.jsxs("g",{className:"sc0",children:[e.jsx("text",{x:"130",y:"14",textAnchor:"middle",fontSize:"10",fontWeight:"700",fill:t.logic,fontFamily:"Poppins,sans-serif",children:"A and B"}),e.jsx("text",{x:"130",y:"25",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"A falsy → B never runs"}),e.jsx("rect",{x:"10",y:"32",width:"76",height:"34",rx:"7",fill:t.memb,fillOpacity:".14",stroke:t.memb,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"48",y:"47",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:t.memb,fontFamily:"Poppins,sans-serif",children:"A = Falsy"}),e.jsx("text",{x:"48",y:"59",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:'0  None  ""  []'}),e.jsx("line",{x1:"86",y1:"49",x2:"130",y2:"49",stroke:t.memb,strokeWidth:"1.8",markerEnd:"url(#sc-arr-r)"}),e.jsx("rect",{x:"132",y:"32",width:"106",height:"34",rx:"7",fill:t.muted,fillOpacity:".08",stroke:t.muted,strokeOpacity:".3",strokeWidth:"1"}),e.jsx("text",{x:"185",y:"47",textAnchor:"middle",fontSize:"9",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"B skipped ✋"}),e.jsx("text",{x:"185",y:"59",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"returns A immediately"})]}),e.jsxs("g",{className:"sc1",children:[e.jsx("rect",{x:"8",y:"74",width:"232",height:"22",rx:"5",fill:t.logic,fillOpacity:".06",stroke:t.logic,strokeOpacity:".2",strokeWidth:"1"}),e.jsx("text",{x:"124",y:"89",textAnchor:"middle",fontSize:"8.5",fill:t.muted,fontFamily:"Space Mono,monospace",children:"conn and conn.query()  →  safe"})]}),e.jsx("line",{x1:"256",y1:"4",x2:"256",y2:"144",stroke:t.border,strokeWidth:"0.7",strokeDasharray:"4 3"}),e.jsxs("g",{className:"sc2",children:[e.jsx("text",{x:"388",y:"14",textAnchor:"middle",fontSize:"10",fontWeight:"700",fill:t.ident,fontFamily:"Poppins,sans-serif",children:"A or B"}),e.jsx("text",{x:"388",y:"25",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"A truthy → B never runs"}),e.jsx("rect",{x:"266",y:"32",width:"76",height:"34",rx:"7",fill:t.comp,fillOpacity:".14",stroke:t.comp,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"304",y:"47",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:t.comp,fontFamily:"Poppins,sans-serif",children:"A = Truthy"}),e.jsx("text",{x:"304",y:"59",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:'"hi"  42  [1]'}),e.jsx("line",{x1:"342",y1:"49",x2:"386",y2:"49",stroke:t.comp,strokeWidth:"1.8",markerEnd:"url(#sc-arr-g)"}),e.jsx("rect",{x:"388",y:"32",width:"120",height:"34",rx:"7",fill:t.muted,fillOpacity:".08",stroke:t.muted,strokeOpacity:".3",strokeWidth:"1"}),e.jsx("text",{x:"448",y:"47",textAnchor:"middle",fontSize:"9",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"B skipped ✋"}),e.jsx("text",{x:"448",y:"59",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"returns A immediately"})]}),e.jsxs("g",{className:"sc3",children:[e.jsx("rect",{x:"264",y:"74",width:"246",height:"22",rx:"5",fill:t.ident,fillOpacity:".06",stroke:t.ident,strokeOpacity:".2",strokeWidth:"1"}),e.jsx("text",{x:"387",y:"89",textAnchor:"middle",fontSize:"8.5",fill:t.muted,fontFamily:"Space Mono,monospace",children:'name = user.name or "Anon"'})]}),e.jsx("rect",{x:"2",y:"104",width:"516",height:"38",rx:"7",fill:t.comp,fillOpacity:".05",stroke:t.comp,strokeOpacity:".2",strokeWidth:"1"}),e.jsx("text",{x:"260",y:"120",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:t.comp,fontFamily:"Poppins,sans-serif",children:"Real production patterns:"}),e.jsx("text",{x:"260",y:"135",textAnchor:"middle",fontSize:"9",fill:t.muted,fontFamily:"Space Mono,monospace",children:"value = config or default    active = user and user.is_active"})]})}function g(){const d=[{x:10,color:t.arith,title:"Division",items:["7 / 2 = 3.5 (float)","7 // 2 = 3 (floor)","7 % 3 = 1 (mod)","2 ** 10 = 1024"]},{x:180,color:t.logic,title:"and / or",items:["and → first falsy","or → first truthy","not → bool always","short circuits ✓"]},{x:350,color:t.ident,title:"is / in",items:["is → same object","== → same value","in list → O(n)","in set → O(1)"]}];return e.jsxs("svg",{viewBox:"0 0 520 160",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes rca{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          @keyframes rcb{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          @keyframes rcc{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .rc0{animation:rca .3s .00s ease both}
          .rc1{animation:rcb .3s .12s ease both}
          .rc2{animation:rcc .3s .24s ease both}
        `})}),d.map((s,i)=>{const n=s.x+80;return e.jsxs("g",{className:`rc${i}`,children:[e.jsx("rect",{x:s.x,y:"4",width:160,height:"152",rx:"8",fill:s.color,fillOpacity:".08",stroke:s.color,strokeOpacity:".4",strokeWidth:"1.5"}),e.jsx("text",{x:n,y:"24",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:s.color,fontFamily:"Poppins,sans-serif",children:s.title}),e.jsx("line",{x1:s.x+10,y1:"30",x2:s.x+160-10,y2:"30",stroke:s.color,strokeOpacity:".25",strokeWidth:"1"}),s.items.map((r,h)=>{const x=46+h*28;return e.jsxs("g",{children:[h%2===0&&e.jsx("rect",{x:s.x+6,y:x-14,width:148,height:"20",rx:"3",fill:s.color,fillOpacity:".07"}),e.jsx("text",{x:n,y:x,textAnchor:"middle",fontSize:"9.5",fontWeight:"600",fill:s.color,fontFamily:"Space Mono,monospace",children:r})]},r)})]},s.title)})]})}function O(){return e.jsxs(p,{title:"Operators",phase:"0A",subtitle:"6 operator types — aur ek non-obvious rule: and/or hamesha bool nahi return karte",children:[e.jsx(o,{icon:"🧠",title:"Mental Model — 6 Types, Ek Hidden Rule",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"bg-surface-card border-l-4 border-primary rounded-xl p-5",children:[e.jsx("p",{className:"text-xs font-heading font-semibold uppercase tracking-wider text-primary mb-4",children:"🧰 Har operator ek alag tool hai"}),e.jsx("div",{className:"space-y-2",children:[{type:"Arithmetic",ex:"3 + 4,  10 // 3",note:"Calculator — numbers pe math",c:"text-primary"},{type:"Comparison",ex:"x == y,  a < b",note:"Judge — hamesha bool return",c:"text-visual-2"},{type:"Logical",ex:"a and b,  x or y",note:"Gatekeeper — object return karta!",c:"text-accent"},{type:"Identity",ex:"x is None",note:"Mirror — same object in memory?",c:"text-visual-3"},{type:"Membership",ex:'"a" in lst',note:"Guard — element exists?",c:"text-visual-4"},{type:"Bitwise",ex:"x & y,  x << 2",note:"Bit surgeon — raw bit ops",c:"text-primary"}].map(a=>e.jsxs("div",{className:"flex items-baseline gap-3 text-sm",children:[e.jsx("span",{className:`font-code font-bold text-xs w-24 shrink-0 ${a.c}`,children:a.type}),e.jsx("code",{className:"font-code text-xs text-primary shrink-0 w-36",children:a.ex}),e.jsx("span",{className:"text-xs text-content-muted",children:a.note})]},a.type))})]}),e.jsx("div",{className:"rounded-xl bg-surface-visual p-4",children:e.jsx(j,{})})]})}),e.jsx(o,{icon:"➕",title:"Arithmetic Operators",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{language:"python",filename:"arithmetic.py",code:`# Basic
10 + 3   # 13
10 - 3   # 7
10 * 3   # 30

# Division — 3 types, sabse important
10 / 3   # 3.3333...  ← hamesha float
10 // 3  # 3          ← floor division (integer)
10 % 3   # 1          ← modulo (remainder)

# Exponent
2 ** 10  # 1024
9 ** 0.5 # 3.0   ← square root trick

# TRAP — negative floor division
-7 // 2  # -4   (not -3!) → floor towards -infinity
-7 % 2   # 1    (not -1!) → sign follows divisor`}),e.jsxs(c,{type:"warn",children:[e.jsx("strong",{children:"-7 // 2 = -4, not -3!"})," Python floors towards negative infinity. Java/C mein -7 / 2 = -3 hota (truncation towards zero). Python different hai."]})]})}),e.jsx(o,{icon:"⚖️",title:"Comparison Operators",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{language:"python",filename:"comparison.py",code:`# Always return bool
5 == 5    # True
5 != 3    # True
5 > 3     # True
5 >= 5    # True

# Chain comparison — Python only! Other languages mein nahi
1 < x < 10       # True if x between 1 and 10
0 <= score < 100 # clean range check

# String comparison — lexicographic (dictionary order)
"abc" < "abd"  # True
"Z" < "a"      # True — uppercase (ASCII 90) < lowercase (ASCII 97)

# is vs == — critical difference
a = [1, 2, 3]
b = [1, 2, 3]
a == b   # True  — same value
a is b   # False — different objects in memory

# None check — is use karo, == nahi
x = None
x is None    # ✓ correct, Pythonic
x == None    # works but not recommended`}),e.jsxs(c,{type:"tip",children:[e.jsx("strong",{children:"Chain comparison:"})," Python mein"," ",e.jsx("code",{className:"font-code text-xs",children:"1 < x < 10"})," actually"," ",e.jsx("code",{className:"font-code text-xs",children:"(1 < x) and (x < 10)"})," ke barabar hai. Java/JS mein ye kaam nahi karta — wahan left-to-right evaluate hota hai aur boolean pe operator apply hota."]})]})}),e.jsx(o,{icon:"🧮",title:"Logical Operators — and / or / not",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{language:"python",filename:"logical.py",code:`# IMPORTANT: and/or return OBJECTS, not always True/False

# and — first falsy return, ya sab truthy to last return
0 and "hello"    # 0       ← falsy found, stop
"hi" and 42      # 42      ← sab truthy, last return
None and "x"     # None    ← falsy found
[] and "a"       # []      ← falsy found

# or — first truthy return, ya sab falsy to last return
0 or "hello"     # "hello" ← first truthy
None or 42       # 42
"hi" or "world"  # "hi"    ← first truthy, stop
0 or [] or None  # None    ← sab falsy, last return

# not — hamesha bool return karta hai
not 0     # True
not "hi"  # False
not None  # True

# Production patterns — ye sab jagah milega
name = user.name or "Anonymous"     # safe default
value = config.get("key") or 42    # fallback
active = user and user.is_active    # safe attribute access`}),e.jsxs(c,{type:"info",children:[e.jsx("strong",{children:"Short circuit kya hai?"})," ",e.jsx("code",{className:"font-code text-xs",children:"conn and conn.query()"})," — agar ",e.jsx("code",{className:"font-code text-xs",children:"conn"})," None hai toh"," ",e.jsx("code",{className:"font-code text-xs",children:".query()"})," call hi nahi hoga. Exception nahi aayega. Ye Django, FastAPI dono mein common pattern hai."]}),e.jsx("div",{className:"rounded-xl bg-surface-visual p-4",children:e.jsx(b,{})})]})}),e.jsx(o,{icon:"🔍",title:"Identity aur Membership Operators",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{language:"python",filename:"identity_membership.py",code:`# Identity — is / is not
x = None
x is None      # True  ← correct way to check None
x is not None  # False

a = [1, 2]
b = a          # alias — same object
b is a         # True  ← same object in memory
c = [1, 2]     # new object, same value
c is a         # False ← different objects

# Membership — in / not in
"a" in "apple"       # True  ← substring check
3 in [1, 2, 3]       # True  ← list check (O(n) scan!)
3 in {1, 2, 3}       # True  ← set check  (O(1) hash!)
"key" in {"key": 1}  # True  ← dict keys check
"x" not in {}        # True

# Performance — large data pe important
data = list(range(1_000_000))
999_999 in data         # O(n) — scans entire list!
data_set = set(data)
999_999 in data_set     # O(1) — hash lookup`}),e.jsxs(c,{type:"warn",children:[e.jsx("code",{className:"font-code text-xs",children:"in"})," list pe"," ",e.jsx("strong",{children:"O(n)"})," hai — large lists ke liye"," ",e.jsx("code",{className:"font-code text-xs",children:"set()"})," mein convert karo. Set membership O(1) hai (hash table)."]})]})}),e.jsx(o,{icon:"⚡",title:"Bitwise Operators",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{language:"python",filename:"bitwise.py",code:`# Bitwise — binary level pe operate karte hain
x = 0b1010  # 10
y = 0b1100  # 12

x & y   # 0b1000 = 8   ← AND  — dono mein 1 ho
x | y   # 0b1110 = 14  ← OR   — kisi ek mein 1 ho
x ^ y   # 0b0110 = 6   ← XOR  — exactly ek mein 1 ho
~x      # -11           ← NOT  — bits flip (2's complement)
x << 1  # 20            ← left shift (multiply by 2)
x >> 1  # 5             ← right shift (divide by 2)

# Real world uses:
# Permissions — Unix style
READ = 0b100   # 4
WRITE = 0b010  # 2
EXEC = 0b001   # 1

user_perms = READ | WRITE   # 6 = 0b110
has_read = user_perms & READ  # 4 (truthy) — has permission!`}),e.jsxs(c,{type:"info",children:["Bitwise operators zyada tar low-level code, permissions systems, aur competitive programming mein aate hain. Day-to-day Python mein kam milenge — lekin ",e.jsx("code",{className:"font-code text-xs",children:"is"})," aur"," ",e.jsx("code",{className:"font-code text-xs",children:"in"})," hamesha kaam aate hain."]})]})}),e.jsx(o,{icon:"📊",title:"Operator Precedence — Kaun Pehle?",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"rounded-xl border border-highlight bg-surface-card p-4",children:[e.jsx("p",{className:"text-[11px] uppercase tracking-wider font-heading font-semibold text-content-muted mb-3",children:"High → Low Priority"}),e.jsx("div",{className:"space-y-1.5",children:[{ops:"()",note:"Parentheses — highest",c:"text-primary"},{ops:"**",note:"Exponent",c:"text-visual-2"},{ops:"~x  +x  -x",note:"Unary operators",c:"text-content-muted"},{ops:"*  /  //  %",note:"Multiply, Divide",c:"text-accent"},{ops:"+  -",note:"Add, Subtract",c:"text-accent"},{ops:"<<  >>",note:"Bitwise shift",c:"text-primary"},{ops:"&",note:"Bitwise AND",c:"text-primary"},{ops:"^",note:"Bitwise XOR",c:"text-primary"},{ops:"|",note:"Bitwise OR",c:"text-primary"},{ops:"< > <= >= == !=",note:"Comparisons",c:"text-visual-2"},{ops:"not",note:"Logical NOT",c:"text-visual-3"},{ops:"and",note:"Logical AND",c:"text-visual-3"},{ops:"or",note:"Logical OR — lowest",c:"text-visual-3"}].map(a=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("code",{className:"font-code text-xs text-primary w-32 shrink-0",children:a.ops}),e.jsx("span",{className:`text-xs font-body ${a.c}`,children:a.note})]},a.ops))})]}),e.jsx(l,{language:"python",filename:"precedence.py",code:`2 + 3 * 4        # 14  — * first, then +
(2 + 3) * 4      # 20  — parens override
not False or True # True — (not False) or True
not (False or True) # False — not True`})]})}),e.jsx(o,{icon:"🪤",title:"Interview Traps",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{number:1,name:"and/or return type",level:"M",question:"print('' or 'hello') kya print karega?",wrongAnswer:"False ya True ya empty string",correctAnswer:'"hello" — or apna first truthy return karta hai',why:"Logical operators bool nahi, actual objects return karte hain. Empty string falsy hai, toh or aage jaata hai aur 'hello' return karta hai."}),e.jsx(m,{number:2,name:"Negative floor division",level:"M",question:"-7 // 2 kya hoga?",wrongAnswer:"-3 (integer truncation)",correctAnswer:"-4 — floor towards negative infinity",why:"-7 / 2 = -3.5, floor(-3.5) = -4. Python hamesha negative infinity ki taraf floor karta hai. Java/C mein -7 / 2 = -3 hota (zero ki taraf truncate)."}),e.jsx(m,{number:3,name:"not priority vs or",level:"B",question:"not False or True kya evaluate hoga?",wrongAnswer:"not (False or True) = False",correctAnswer:"(not False) or True = True",why:"not ka precedence or se zyada hai. not sirf apne right operand pe apply hota hai, poore expression pe nahi. Parentheses se clarity lao."})]})}),e.jsx(o,{icon:"📋",title:"Cheatsheet",children:e.jsx(f,{items:[{label:"/",value:"float division — 7/2 = 3.5"},{label:"//",value:"floor division — 7//2 = 3, -7//2 = -4"},{label:"%",value:"modulo — 7%3 = 1, sign follows divisor"},{label:"**",value:"exponent — 2**10 = 1024, 9**0.5 = 3.0"},{label:"and",value:"first falsy OR last val — not always bool"},{label:"or",value:"first truthy OR last val — not always bool"},{label:"not",value:"always bool — not 0 = True"},{label:"is",value:"same object? — use for None check"},{label:"in list",value:"O(n) — slow for large data"},{label:"in set/dict",value:"O(1) — hash lookup, fast"},{label:"1 < x < 10",value:"chain comparison — Python only"},{label:"x or default",value:"safe fallback — production pattern"}]})}),e.jsx(o,{icon:"⚡",title:"Quick Recall",children:e.jsx(y,{children:e.jsx(g,{})})}),e.jsx(o,{icon:"🔗",title:"Connected Topics",children:e.jsx(u,{from:{title:"Variables aur Data Types",description:"Python ke 5 basic types — int, float, str, bool, None",href:"/roadmap/topic/python-basics/0"},to:{title:"Conditionals — if / elif / else",description:"Operators se decisions lo — if/elif/else control flow",href:"/roadmap/topic/python-basics/2"}})})]})}export{O as default};
