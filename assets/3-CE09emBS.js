import{j as e}from"./index-BM26oCrq.js";import{N as l,S as i,C as a,a as n,Q as c,b as d}from"./ConnectedTopics-CrnZbieD.js";import{M as h}from"./MentalModel-CpI0yIhV.js";import{T as x}from"./TrapBox-_dVjjAoa.js";import{H as f}from"./HoodBox-ntxEHUDL.js";import{C as m}from"./CompareBlock-DXYmatgF.js";import{I as p}from"./InfoBox-DINCxuUC.js";const t={purple:"#7c3aed",blue:"#3b82f6",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",orangeLight:"#fcd34d",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function u(){return e.jsxs("svg",{viewBox:"0 0 520 250",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes shSlot { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.4} }
          @keyframes shKey { 0%{opacity:0;transform:translateX(-8px)} 100%{opacity:1;transform:translateX(0)} }
          .sh1{animation:shKey .4s .1s ease both}
          .sh2{animation:shKey .4s .3s ease both}
          .sh3{animation:shKey .4s .5s ease both}
          .sh-slot{animation:shSlot 2s ease-in-out infinite}
        `}),e.jsx("marker",{id:"shArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.orange})})]}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Set = Hash Table (Keys only, no values)"}),e.jsx("text",{x:"65",y:"45",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"Elements"}),[{val:'"apple"',y:53},{val:'"banana"',y:95},{val:'"cherry"',y:137}].map(s=>e.jsxs("g",{className:"sh1",children:[e.jsx("rect",{x:"15",y:s.y,width:"100",height:"30",rx:"6",fill:t.green,fillOpacity:".15",stroke:t.green,strokeWidth:"1.5"}),e.jsx("text",{x:"65",y:s.y+19,textAnchor:"middle",fill:t.greenLight,fontSize:"10",fontFamily:"monospace",children:s.val})]},s.val)),e.jsx("text",{x:"195",y:"45",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"hash()"}),[53,95,137].map(s=>e.jsxs("g",{className:"sh2",children:[e.jsx("rect",{x:"130",y:s,width:"75",height:"30",rx:"6",fill:t.orange,fillOpacity:".15",stroke:t.orange,strokeWidth:"1"}),e.jsx("text",{x:"167",y:s+19,textAnchor:"middle",fill:t.orangeLight,fontSize:"9",children:"compute"}),e.jsx("line",{x1:"117",y1:s+15,x2:"128",y2:s+15,stroke:t.orange,strokeWidth:"1.5",markerEnd:"url(#shArr)"})]},s)),e.jsx("text",{x:"345",y:"45",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"Hash Table Slots"}),[{slot:"0",y:53,empty:!0},{slot:"1",y:75,val:'"banana"',color:t.blue},{slot:"2",y:97,empty:!0},{slot:"3",y:119,val:'"apple"',color:t.green},{slot:"4",y:141,val:'"cherry"',color:t.purple},{slot:"5",y:163,empty:!0}].map(s=>e.jsxs("g",{className:s.empty?"":"sh-slot",children:[e.jsx("rect",{x:"217",y:s.y,width:"255",height:"20",rx:"4",fill:s.empty?"#1e293b":s.color,fillOpacity:s.empty?.3:.15,stroke:s.empty?t.muted:s.color,strokeWidth:s.empty?.5:1.2}),e.jsxs("text",{x:"228",y:s.y+14,fill:t.muted,fontSize:"10",children:["[",s.slot,"]"]}),!s.empty&&e.jsx("text",{x:"250",y:s.y+14,fill:s.color,fontSize:"10",fontFamily:"monospace",children:s.val})]},s.slot)),e.jsx("text",{x:"260",y:"215",textAnchor:"middle",fill:t.orange,fontSize:"10",children:"O(1) lookup: hash(x) → slot → compare → found/not-found"}),e.jsx("text",{x:"260",y:"232",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"No values stored — only keys (like dict without values)"})]})}function y(){return e.jsxs("svg",{viewBox:"0 0 520 200",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes soAnim { 0%{opacity:0;transform:scale(.9)} 100%{opacity:1;transform:scale(1)} }
          .so1{animation:soAnim .4s .1s ease both}
          .so2{animation:soAnim .4s .3s ease both}
          .so3{animation:soAnim .4s .5s ease both}
          .so4{animation:soAnim .4s .7s ease both}
        `})}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Set Operations"}),[{cls:"so1",x:15,color:t.blue,op:"Union  |",desc:"A ya B mein — sab",code:"{1,2} | {2,3} = {1,2,3}"},{cls:"so2",x:270,color:t.green,op:"Intersection  &",desc:"A aur B dono mein",code:"{1,2} & {2,3} = {2}"},{cls:"so3",x:15,color:t.orange,op:"Difference  -",desc:"A mein, B mein nahi",code:"{1,2} - {2,3} = {1}"},{cls:"so4",x:270,color:t.purple,op:"Symmetric Diff  ^",desc:"Sirf ek mein",code:"{1,2} ^ {2,3} = {1,3}"}].map(s=>e.jsxs("g",{className:s.cls,children:[e.jsx("rect",{x:s.x,y:s.x===15&&s.op.startsWith("Union")?32:s.x===15?122:s.op.startsWith("Inter")?32:122,width:"240",height:"80",rx:"8",fill:s.color,fillOpacity:".08",stroke:s.color,strokeWidth:"1.5"}),e.jsx("text",{x:s.x+12,y:s.x===15&&s.op.startsWith("Union")?52:s.x===15?142:s.op.startsWith("Inter")?52:142,fill:s.color,fontSize:"11",fontWeight:"700",children:s.op}),e.jsx("text",{x:s.x+12,y:s.x===15&&s.op.startsWith("Union")?70:s.x===15?160:s.op.startsWith("Inter")?70:160,fill:t.muted,fontSize:"10",children:s.desc}),e.jsx("text",{x:s.x+12,y:s.x===15&&s.op.startsWith("Union")?90:s.x===15?180:s.op.startsWith("Inter")?90:180,fill:t.text,fontSize:"10",fontFamily:"monospace",children:s.code})]},s.op))]})}function b(){return e.jsxs("svg",{viewBox:"0 0 520 150",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"150",rx:"10",fill:"#0f172a",stroke:t.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Sets"}),[{x:15,color:t.green,title:"Hash Table",lines:["O(1) lookup — hash based","No duplicates — auto","Elements must be hashable"]},{x:185,color:t.blue,title:"Operations",lines:["|  union","&  intersection","-  difference, ^ sym-diff"]},{x:355,color:t.orange,title:"Use Cases",lines:["Dedup: set(lst)","Membership: x in s O(1)","frozenset — hashable set"]}].map(s=>e.jsxs("g",{children:[e.jsx("rect",{x:s.x,y:"32",width:"155",height:"105",rx:"6",fill:s.color,fillOpacity:".08",stroke:s.color,strokeWidth:"1.2"}),e.jsx("text",{x:s.x+77,y:"50",textAnchor:"middle",fill:s.color,fontSize:"11",fontWeight:"700",children:s.title}),s.lines.map((o,r)=>e.jsx("text",{x:s.x+10,y:68+r*22,fill:t.text,fontSize:"10",children:`→ ${o}`},r))]},s.title))]})}function z(){return e.jsxs(l,{title:"Sets — Hash Table & O(1) Lookup",phase:"0A",subtitle:"Deduplication, membership testing, aur set algebra — O(1) magic",children:[e.jsx(i,{icon:"🧠",title:"Mental Model — Set Kya Hai?",children:e.jsx(h,{analogy:"Set = VIP guestlist. Naam ek baar hi likha jaata hai (no duplicates). Naam check karna = O(1) — register mein seedha dhundho, poora list scan nahi. List = queue mein sab khade hain — O(n) scan.",diagram:e.jsx(u,{})})}),e.jsx(i,{icon:"🔬",title:"Under the Hood",children:e.jsx(f,{children:e.jsxs("div",{className:"space-y-2 text-sm text-content leading-relaxed",children:[e.jsxs("p",{children:["Set internally ",e.jsx("span",{className:"text-green-400 font-semibold",children:"dict jaisa hash table"})," use karta hai — sirf keys, no values."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-orange-400 font-semibold",children:"add(x)"}),": hash(x) compute → slot find → duplicate check → insert — O(1) average"]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-orange-400 font-semibold",children:"x in s"}),": hash(x) → slot → compare — O(1) vs list O(n)"]}),e.jsxs("p",{children:["Elements must be ",e.jsx("span",{className:"text-blue-400 font-semibold",children:"hashable"})," — int, str, tuple OK; list nahi."]}),e.jsxs("p",{children:["Load factor exceed → ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"resize"})," (new table, rehash)"]})]})})}),e.jsx(i,{icon:"💻",title:"Set Operations",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(y,{}),e.jsx(a,{code:`# Create
s1 = {1, 2, 3}             # literal
s2 = set([1, 2, 2, 3, 3])  # from list — auto dedup!
s2  # {1, 2, 3}
s3 = set()                  # empty (NOT {} — woh dict hai!)

# Add / Remove
s1.add(4)           # O(1) — duplicate ignore
s1.remove(1)        # KeyError if missing
s1.discard(99)      # safe — no error if missing
s1.pop()            # random element remove

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

a | b   # {1,2,3,4,5,6}  union
a & b   # {3,4}           intersection
a - b   # {1,2}           difference (in a, not b)
a ^ b   # {1,2,5,6}       symmetric difference

# Method versions
a.union(b)
a.intersection(b)
a.difference(b)
a.symmetric_difference(b)

# In-place
a |= b   # a = a | b
a &= b   # a = a & b`})]})}),e.jsx(i,{icon:"🚀",title:"Production Use Cases",children:e.jsx(a,{code:`# 1. Deduplication — fastest way
lst = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(lst))   # [1, 2, 3, 4] (order not guaranteed)

# 2. Membership test — O(1) vs list O(n)
valid_users = {"admin", "divyesh", "raj"}
if user in valid_users:   # O(1)!
    grant_access()

# vs list — O(n) scan
valid_users_list = ["admin", "divyesh", "raj"]
if user in valid_users_list:   # O(n) — slow!
    grant_access()

# 3. Find common elements
team_a = {"Divyesh", "Raj", "Priya"}
team_b = {"Raj", "Amit", "Priya"}
common = team_a & team_b   # {"Raj", "Priya"}

# 4. Find missing items
required = {"name", "email", "age"}
provided = {"name", "email"}
missing = required - provided   # {"age"}

# 5. Check subset/superset
{1, 2}.issubset({1, 2, 3})     # True
{1, 2, 3}.issuperset({1, 2})   # True`})}),e.jsx(i,{icon:"❄️",title:"frozenset — Immutable, Hashable Set",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(p,{type:"info",title:"frozenset — set ka read-only version",children:"frozenset hashable hai — dict key ya set of sets bana sakte ho. frozenset = set ka tuple equivalent."}),e.jsx(a,{code:`# frozenset — immutable, hashable
fs = frozenset([1, 2, 3])
fs.add(4)   # AttributeError — immutable!

# Dict key mein set use nahi kar sakte — unhashable
# But frozenset kar sakte hain!
permissions = {
    frozenset(["read", "write"]): "editor",
    frozenset(["read"]):          "viewer",
}

# Set of frozensets
graphs = {frozenset([1, 2]), frozenset([2, 3])}`})]})}),e.jsx(i,{icon:"🪤",title:"Set Traps",children:e.jsx(x,{number:1,name:"Empty Set — {} is dict!",level:"B",question:"empty = {} — kya type hai?",wrongAnswer:"set — empty set banaya",correctAnswer:"dict! {} always creates empty dict. set() use karo for empty set.",why:"Python mein {} dict literal hai. set literal mein at least ek element chahiye: {1}. Empty set sirf set() se banta hai."})}),e.jsx(i,{icon:"⚖️",title:"Set vs List — Kab Kya?",children:e.jsx(m,{bad:e.jsx(a,{code:`# Repeated membership test with list — O(n) per check
valid = ["admin", "user", "viewer"]
for u in users:
    if u.role in valid:   # O(n) every time!
        grant(u)`}),good:e.jsx(a,{code:`# Set — O(1) per check
valid = {"admin", "user", "viewer"}
for u in users:
    if u.role in valid:   # O(1)!
        grant(u)`}),badLabel:"List membership — O(n)",goodLabel:"Set membership — O(1)"})}),e.jsx(i,{icon:"📋",title:"Cheatsheet",children:e.jsx(n,{items:[{label:"set()",value:"Empty set — {} is dict!"},{label:"add(x)",value:"O(1) — duplicate ignore"},{label:"discard(x)",value:"Safe remove — no KeyError"},{label:"x in s",value:"O(1) membership test"},{label:"|  &  -  ^",value:"Union, intersection, difference, sym-diff"},{label:"frozenset",value:"Immutable, hashable set"},{label:"Dedup",value:"list(set(lst)) — but order lost"},{label:"Elements",value:"Must be hashable — no lists!"}]})}),e.jsx(i,{icon:"⚡",title:"Quick Recall",children:e.jsx(c,{children:e.jsx(b,{})})}),e.jsx(i,{icon:"🔗",title:"Connected Topics",children:e.jsx(d,{from:{title:"Dictionaries",description:"Same hash table internals",href:"/roadmap/topic/python-data-structures/2"},to:{title:"Collections Module",description:"Counter, defaultdict — dict superpowers",href:"/roadmap/topic/python-data-structures/8"}})})]})}export{z as default};
