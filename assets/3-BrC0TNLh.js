import{j as e}from"./index-BM26oCrq.js";import{N as l,S as r,C as a,a as c,Q as f,b as h}from"./ConnectedTopics-CrnZbieD.js";import{M as d}from"./MentalModel-CpI0yIhV.js";import{T as o}from"./TrapBox-_dVjjAoa.js";import{C as x}from"./CompareBlock-DXYmatgF.js";import{I as s}from"./InfoBox-DINCxuUC.js";const t={for_c:"#4F8CFF",while_c:"#F59E0B",break_c:"#F87171",cont_c:"#A78BFA",else_c:"#34D399",muted:"#8B949E",dim:"#2D333B"};function p(){return e.jsxs("svg",{viewBox:"0 0 520 180",className:"w-full","aria-label":"For loop internals",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes flFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
          .fl0{animation:flFade .3s .0s ease both}
          .fl1{animation:flFade .3s .12s ease both}
          .fl2{animation:flFade .3s .24s ease both}
          .fl3{animation:flFade .3s .36s ease both}
          .fl4{animation:flFade .3s .48s ease both}
        `}),e.jsx("marker",{id:"flArr",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:t.muted})}),e.jsx("marker",{id:"flBlue",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:t.for_c})})]}),e.jsxs("g",{className:"fl0",children:[e.jsx("rect",{x:"10",y:"10",width:"110",height:"44",rx:"8",fill:t.for_c,fillOpacity:".12",stroke:t.for_c,strokeOpacity:".5",strokeWidth:"1.5"}),e.jsx("text",{x:"65",y:"28",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:t.for_c,fontFamily:"Poppins,sans-serif",children:"iterable"}),e.jsx("text",{x:"65",y:"44",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Space Mono,monospace",children:"[1, 2, 3]"})]}),e.jsxs("g",{className:"fl1",children:[e.jsx("line",{x1:"120",y1:"32",x2:"178",y2:"32",stroke:t.for_c,strokeWidth:"1.8",markerEnd:"url(#flBlue)"}),e.jsx("text",{x:"149",y:"27",textAnchor:"middle",fontSize:"8",fill:t.for_c,fontFamily:"Poppins,sans-serif",children:"iter()"}),e.jsx("rect",{x:"180",y:"10",width:"110",height:"44",rx:"8",fill:t.for_c,fillOpacity:".08",stroke:t.for_c,strokeOpacity:".4",strokeWidth:"1.5"}),e.jsx("text",{x:"235",y:"28",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:t.for_c,fontFamily:"Poppins,sans-serif",children:"iterator"}),e.jsx("text",{x:"235",y:"44",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"tracks position"})]}),e.jsxs("g",{className:"fl2",children:[e.jsx("line",{x1:"290",y1:"32",x2:"348",y2:"32",stroke:t.for_c,strokeWidth:"1.8",markerEnd:"url(#flBlue)"}),e.jsx("text",{x:"319",y:"27",textAnchor:"middle",fontSize:"8",fill:t.for_c,fontFamily:"Poppins,sans-serif",children:"next()"}),e.jsx("rect",{x:"350",y:"10",width:"120",height:"44",rx:"8",fill:t.else_c,fillOpacity:".1",stroke:t.else_c,strokeOpacity:".4",strokeWidth:"1.5"}),e.jsx("text",{x:"410",y:"28",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:t.else_c,fontFamily:"Poppins,sans-serif",children:"body runs"}),e.jsx("text",{x:"410",y:"44",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"with current item"})]}),e.jsxs("g",{className:"fl3",children:[e.jsx("line",{x1:"410",y1:"54",x2:"410",y2:"90",stroke:t.muted,strokeWidth:"1.5",markerEnd:"url(#flArr)"}),e.jsx("rect",{x:"350",y:"92",width:"120",height:"44",rx:"8",fill:t.break_c,fillOpacity:".1",stroke:t.break_c,strokeOpacity:".4",strokeWidth:"1.5"}),e.jsx("text",{x:"410",y:"110",textAnchor:"middle",fontSize:"9",fontWeight:"700",fill:t.break_c,fontFamily:"Poppins,sans-serif",children:"StopIteration"}),e.jsx("text",{x:"410",y:"126",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"→ loop ends"}),e.jsx("path",{d:"M290 32 Q290 148 235 148 Q180 148 180 116 L180 54",stroke:t.muted,strokeWidth:"1.5",fill:"none",strokeDasharray:"4 3",markerEnd:"url(#flArr)"}),e.jsx("text",{x:"220",y:"160",textAnchor:"middle",fontSize:"8",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"repeat until done"})]}),e.jsxs("g",{className:"fl4",children:[e.jsx("rect",{x:"8",y:"130",width:"330",height:"42",rx:"8",fill:t.dim,fillOpacity:".5",stroke:t.muted,strokeOpacity:".2",strokeWidth:"1"}),e.jsx("text",{x:"173",y:"148",textAnchor:"middle",fontSize:"8.5",fontFamily:"Space Mono,monospace",fill:"#E6EDF3",children:"for x in [1,2,3]:  →  it=iter([1,2,3])"}),e.jsx("text",{x:"173",y:"164",textAnchor:"middle",fontSize:"8.5",fontFamily:"Space Mono,monospace",fill:t.muted,children:"while True: x=next(it)  # StopIteration → stop"})]})]})}function m(){return e.jsxs("svg",{viewBox:"0 0 520 150",className:"w-full","aria-label":"break continue else",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes bcFade{from{opacity:0}to{opacity:1}}
          .bc{animation:bcFade .4s .1s ease both}
        `}),e.jsx("marker",{id:"bcRed",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:t.break_c})}),e.jsx("marker",{id:"bcPurp",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:t.cont_c})}),e.jsx("marker",{id:"bcGreen",markerWidth:"7",markerHeight:"7",refX:"5",refY:"3.5",orient:"auto",children:e.jsx("path",{d:"M0,0 L0,7 L7,3.5 z",fill:t.else_c})})]}),e.jsxs("g",{className:"bc",children:[e.jsx("rect",{x:"10",y:"10",width:"150",height:"58",rx:"9",fill:t.break_c,fillOpacity:".1",stroke:t.break_c,strokeOpacity:".4",strokeWidth:"1.5"}),e.jsx("text",{x:"85",y:"30",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:t.break_c,fontFamily:"Poppins,sans-serif",children:"break"}),e.jsx("text",{x:"85",y:"47",textAnchor:"middle",fontSize:"8.5",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"Loop turant band"}),e.jsx("text",{x:"85",y:"60",textAnchor:"middle",fontSize:"8.5",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"else block nahi chalega"}),e.jsx("rect",{x:"185",y:"10",width:"150",height:"58",rx:"9",fill:t.cont_c,fillOpacity:".1",stroke:t.cont_c,strokeOpacity:".4",strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"30",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:t.cont_c,fontFamily:"Poppins,sans-serif",children:"continue"}),e.jsx("text",{x:"260",y:"47",textAnchor:"middle",fontSize:"8.5",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"Is iteration skip"}),e.jsx("text",{x:"260",y:"60",textAnchor:"middle",fontSize:"8.5",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"Loop jaari rehta hai"}),e.jsx("rect",{x:"360",y:"10",width:"152",height:"58",rx:"9",fill:t.else_c,fillOpacity:".1",stroke:t.else_c,strokeOpacity:".4",strokeWidth:"1.5"}),e.jsx("text",{x:"436",y:"30",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:t.else_c,fontFamily:"Poppins,sans-serif",children:"else on loop"}),e.jsx("text",{x:"436",y:"47",textAnchor:"middle",fontSize:"8.5",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"Loop normally complete"}),e.jsx("text",{x:"436",y:"60",textAnchor:"middle",fontSize:"8.5",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:"hone ke baad chalta hai"}),e.jsx("rect",{x:"10",y:"82",width:"502",height:"60",rx:"8",fill:t.dim,fillOpacity:".5",stroke:t.muted,strokeOpacity:".2",strokeWidth:"1"}),e.jsx("text",{x:"20",y:"100",fontSize:"8.5",fontFamily:"Space Mono,monospace",fill:t.muted,children:"for item in items:"}),e.jsxs("text",{x:"20",y:"116",fontSize:"8.5",fontFamily:"Space Mono,monospace",fill:t.muted,children:["    ","if item == target: break  # ← found! stop"]}),e.jsx("text",{x:"20",y:"132",fontSize:"8.5",fontFamily:"Space Mono,monospace",fill:t.else_c,children:'else: print("Not found")         # ← only if break never ran'})]})]})}function u(){return e.jsxs("svg",{viewBox:"0 0 540 160",className:"w-full","aria-label":"Loops quick recall",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes lrPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .lr0{animation:lrPop .3s .0s ease both}
          .lr1{animation:lrPop .3s .12s ease both}
          .lr2{animation:lrPop .3s .24s ease both}
        `})}),e.jsxs("g",{className:"lr0",children:[e.jsx("rect",{x:"4",y:"4",width:"168",height:"148",rx:"9",fill:t.for_c,fillOpacity:".09",stroke:t.for_c,strokeOpacity:".35",strokeWidth:"1.5"}),e.jsx("text",{x:"88",y:"24",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:t.for_c,fontFamily:"Poppins,sans-serif",children:"for loop"}),["iter() + next() internally","enumerate() for index","zip() for parallel","range() for numbers","for x in dict: → keys"].map((i,n)=>e.jsxs("text",{x:"14",y:42+n*18,fontSize:"8.5",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:["• ",i]},n))]}),e.jsxs("g",{className:"lr1",children:[e.jsx("rect",{x:"180",y:"4",width:"168",height:"148",rx:"9",fill:t.while_c,fillOpacity:".09",stroke:t.while_c,strokeOpacity:".35",strokeWidth:"1.5"}),e.jsx("text",{x:"264",y:"24",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:t.while_c,fontFamily:"Poppins,sans-serif",children:"while loop"}),["Condition check first","while True + break","Must change variable!","Infinite loop risk","Use for unknown count"].map((i,n)=>e.jsxs("text",{x:"190",y:42+n*18,fontSize:"8.5",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:["• ",i]},n))]}),e.jsxs("g",{className:"lr2",children:[e.jsx("rect",{x:"356",y:"4",width:"180",height:"148",rx:"9",fill:t.break_c,fillOpacity:".09",stroke:t.break_c,strokeOpacity:".35",strokeWidth:"1.5"}),e.jsx("text",{x:"446",y:"24",textAnchor:"middle",fontSize:"11",fontWeight:"700",fill:t.break_c,fontFamily:"Poppins,sans-serif",children:"break/continue"}),["break → exit loop","continue → skip iter","else on loop:","runs if no break","Search pattern"].map((i,n)=>e.jsxs("text",{x:"366",y:42+n*18,fontSize:"8.5",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:["• ",i]},n))]})]})}function S(){return e.jsxs(l,{title:"Loops — for, while, break, continue",phase:"0A",subtitle:"for loop ke andar iter() + next() chalta hai, while condition pe, aur else-on-loop ek powerful feature hai.",children:[e.jsx(r,{icon:"🧠",title:"Mental Model — for loop andar se kaise kaam karta hai",children:e.jsx(d,{analogyTitle:"📦 Assembly line worker",analogy:e.jsxs("div",{className:"space-y-4 text-sm font-body",children:[e.jsx("p",{className:"text-content font-semibold leading-note",children:"for loop ek assembly line worker hai. Iterator belt pe khada hai, ek-ek item uthata hai, process karta hai, agla uthata hai — jab belt khaali ho jaaye toh band ho jaata hai."}),e.jsx("div",{className:"space-y-2 border-t border-highlight pt-3",children:[{step:"iter(data)",note:"belt shuru karo — iterator banao",color:"text-primary"},{step:"next(it)",note:"agla item uthao",color:"text-accent"},{step:"body run",note:"item process karo",color:"text-visual-2"},{step:"StopIteration",note:"belt khaali — loop end",color:"text-visual-4"}].map(i=>e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("code",{className:"font-code text-xs text-primary shrink-0 w-32",children:i.step}),e.jsx("span",{className:"text-xs text-content-muted leading-note",children:i.note})]},i.step))})]}),diagram:e.jsx(p,{})})}),e.jsx(r,{icon:"🔁",title:"for Loop",children:e.jsx("div",{className:"space-y-4",children:e.jsx(a,{language:"python",filename:"for_loop.py",code:`# Basic for loop
for x in [1, 2, 3]:
    print(x)   # 1, 2, 3

# range() — number sequence
for i in range(5):         # 0,1,2,3,4
    print(i)

for i in range(2, 10, 2): # 2,4,6,8 (start, stop, step)
    print(i)

for i in range(10, 0, -1): # 10,9,...,1 (reverse)
    print(i)

# String iteration
for char in "hello":
    print(char)   # h, e, l, l, o

# enumerate() — index + value
fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")   # 0: apple, 1: banana...

for i, fruit in enumerate(fruits, start=1):  # 1-based index
    print(f"{i}: {fruit}")

# zip() — parallel iteration
names = ["Alice", "Bob"]
ages = [25, 30]
for name, age in zip(names, ages):
    print(f"{name} is {age}")

# dict iteration
user = {"name": "Divyesh", "age": 22}
for key in user:           # default → keys
    print(key)
for val in user.values():  # values
    print(val)
for k, v in user.items():  # key-value pairs
    print(f"{k}={v}")`})})}),e.jsx(r,{icon:"🔄",title:"while Loop",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{language:"python",filename:"while_loop.py",code:`# Basic while
count = 0
while count < 5:
    print(count)   # 0, 1, 2, 3, 4
    count += 1     # ← must update, warna infinite loop!

# while True + break pattern (very common)
while True:
    user_input = input("Enter command: ")
    if user_input == "quit":
        break
    process(user_input)

# Retry pattern
attempts = 0
while attempts < 3:
    try:
        result = fetch_data()
        break
    except Exception:
        attempts += 1

# Condition-based reading
with open("file.txt") as f:
    line = f.readline()
    while line:
        process(line)
        line = f.readline()`}),e.jsxs(s,{type:"warn",title:"Infinite loop trap",children:["while loop mein variable update karna mat bhulo. ",e.jsxs("code",{className:"font-code text-xs",children:["while count ","<"," 5:"]}),"ke andar ",e.jsx("code",{className:"font-code text-xs",children:"count += 1"})," hona chahiye warna program hang ho jaayega."]})]})}),e.jsx(r,{icon:"⚡",title:"break, continue, else on Loop",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"bg-surface-visual rounded-xl p-5",children:e.jsx(m,{})}),e.jsx(a,{language:"python",filename:"break_continue.py",code:`# break — immediate exit
for i in range(10):
    if i == 5:
        break
    print(i)   # 0, 1, 2, 3, 4

# continue — skip this iteration
for i in range(10):
    if i % 2 == 0:
        continue   # even numbers skip
    print(i)       # 1, 3, 5, 7, 9

# else on for loop (important!)
# else block runs ONLY if loop completed without break
items = [1, 3, 5, 7]
target = 4

for item in items:
    if item == target:
        print("Found!")
        break
else:
    print("Not found")   # runs — no break happened

# Search pattern using for-else
def find_user(user_id, users):
    for user in users:
        if user.id == user_id:
            return user
    else:
        raise ValueError("User not found")

# Nested break — only breaks innermost
for i in range(3):
    for j in range(3):
        if j == 1:
            break    # only inner loop breaks
    print(f"i={i}")  # i=0, i=1, i=2 — outer continues`})]})}),e.jsx(r,{icon:"⚡",title:"List Comprehension — Compact Loops",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(x,{bad:`result = []
for x in nums:
    if x % 2 == 0:
        result.append(x * 2)
# multiple lines, mutable state`,good:`result = [x * 2 for x in nums if x % 2 == 0]
# one line, cleaner intent`}),e.jsx(a,{language:"python",filename:"comprehension.py",code:`# Basic comprehension
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With filter
evens = [x for x in range(20) if x % 2 == 0]

# Nested comprehension
matrix = [[1,2,3],[4,5,6],[7,8,9]]
flat = [x for row in matrix for x in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Dict comprehension
squares_dict = {x: x**2 for x in range(5)}
# {0:0, 1:1, 2:4, 3:9, 4:16}

# Set comprehension
unique_lens = {len(word) for word in ["hi", "hello", "hey"]}
# {2, 5, 3}

# Generator expression (lazy — no list created)
total = sum(x**2 for x in range(1000000))  # memory efficient`}),e.jsxs(s,{type:"warn",title:"Comprehension ke andar side effects mat daalo",children:[e.jsx("code",{className:"font-code text-xs",children:"[print(x) for x in data]"})," — ye technically kaam karta hai but wrong approach. Side effects ke liye plain for loop use karo. Comprehension sirf transformations ke liye hai."]})]})}),e.jsx(r,{icon:"🪤",title:"Interview Traps",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{number:1,name:"Modifying list during iteration",level:"M",question:"for x in my_list: if x > 5: my_list.remove(x) — kya problem hai?",wrongAnswer:"Koi problem nahi — ye valid hai",correctAnswer:"Items skip ho jaate hain — remove karte waqt list shift hoti hai",why:"List remove karne se indices shift hote hain aur iterator galat position pe chala jaata hai. Fix: iterate over a copy — for x in my_list[:]: ya list() se."}),e.jsx(o,{number:2,name:"range is not a list",level:"B",question:"r = range(5) — kya r[2] kaam karega?",wrongAnswer:"Nahi — range lazy hai, indexing nahi",correctAnswer:"Haan — range indexing support karta hai but list nahi hai",why:"range object sequence protocol support karta hai — r[2]=2, len(r)=5, 3 in r=True. Lekin ye list nahi hai — values store nahi hoti. Very memory efficient — range(1_000_000) sirf 3 numbers store karta hai."}),e.jsx(o,{number:3,name:"else on loop confusion",level:"M",question:"for loop ka else kab run hota hai?",wrongAnswer:"Jab loop empty hoga",correctAnswer:"Jab loop normally complete ho — bina break ke",why:"Loop else = 'no break happened'. Agar loop khaali list pe bhi chala bina break ke toh else chalega. Ye search patterns ke liye useful hai — 'item nahi mila' indicate karne ke liye."})]})}),e.jsx(r,{icon:"📋",title:"Cheatsheet",children:e.jsx(c,{items:[{label:"for x in iter:",value:"iterate over any iterable"},{label:"range(n)",value:"0 to n-1 — range(start, stop, step)"},{label:"enumerate(it)",value:"(index, value) pairs"},{label:"zip(a, b)",value:"parallel iteration — stops at shortest"},{label:"while cond:",value:"loop while condition True"},{label:"while True: ... break",value:"event loop / retry pattern"},{label:"break",value:"exit loop immediately (else skipped)"},{label:"continue",value:"skip current iteration, keep looping"},{label:"for ... else:",value:"else runs only if no break"},{label:"[x for x in it if c]",value:"list comprehension — transform + filter"},{label:"{k:v for k,v in it}",value:"dict comprehension"},{label:"(x for x in it)",value:"generator expression — lazy, no list"}]})}),e.jsx(r,{icon:"⚡",title:"Quick Recall",children:e.jsx(f,{children:e.jsx(u,{})})}),e.jsx(r,{icon:"🔗",title:"Connected Topics",children:e.jsx(h,{from:{title:"Loops",description:"for, while, break, continue, else, comprehensions"},to:{title:"Python Memory Model — Mutable vs Immutable",description:"Loops ke baad — objects memory mein kaise rehte hain",href:"/roadmap/topic/python-basics/8"}})})]})}export{S as default};
