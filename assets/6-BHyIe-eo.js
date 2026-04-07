import{j as e}from"./index-BM26oCrq.js";import{N as m,S as a,C as s,a as f,Q as h,b as x}from"./ConnectedTopics-CrnZbieD.js";import{M as p}from"./MentalModel-CpI0yIhV.js";import{T as w}from"./TrapsTable-D1dM65hw.js";import{C as l}from"./CompareBlock-DXYmatgF.js";import{I as d}from"./InfoBox-DINCxuUC.js";const r={blue:"#4F8CFF",blueL:"#93C5FD",green:"#34D399",greenL:"#6EE7B7",orange:"#F59E0B",red:"#F87171",muted:"#9CA3AF",text:"#E2E8F0",white:"#F8FAFC",border:"#1E3A5F",dark:"#0F172A"};function u(){return e.jsxs("svg",{viewBox:"0 0 520 200",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes csvFade { 0%{opacity:0;transform:translateY(5px)} 100%{opacity:1;transform:translateY(0)} }
          .csv0{animation:csvFade .3s .05s ease both}
          .csv1{animation:csvFade .3s .2s ease both}
          .csv2{animation:csvFade .3s .35s ease both}
          .csv3{animation:csvFade .3s .5s ease both}
        `}),e.jsx("marker",{id:"csv-arr",markerWidth:"8",markerHeight:"8",refX:"7",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:r.muted})})]}),e.jsx("text",{x:"260",y:"18",textAnchor:"middle",fill:r.white,fontSize:"12",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"CSV — Table ka Text Version"}),e.jsxs("g",{className:"csv0",children:[e.jsx("rect",{x:"10",y:"28",width:"220",height:"100",rx:"8",fill:r.orange,fillOpacity:".08",stroke:r.orange,strokeWidth:"1.5"}),e.jsx("text",{x:"120",y:"46",textAnchor:"middle",fill:r.orange,fontSize:"10",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"Raw CSV Text"}),["order_id,name,amount","101,Divyesh,250","102,Rahul,300","103,Priya,450"].map((i,t)=>e.jsx("text",{x:"22",y:62+t*16,fill:r.text,fontSize:"10",fontFamily:"monospace",children:i},t))]}),e.jsxs("g",{className:"csv1",children:[e.jsx("line",{x1:"230",y1:"68",x2:"270",y2:"68",stroke:r.muted,strokeWidth:"1.5",markerEnd:"url(#csv-arr)"}),e.jsx("text",{x:"250",y:"58",textAnchor:"middle",fill:r.blue,fontSize:"9",fontFamily:"Open Sans,sans-serif",fontWeight:"700",children:"reader"})]}),e.jsxs("g",{className:"csv2",children:[e.jsx("rect",{x:"270",y:"28",width:"240",height:"100",rx:"8",fill:r.blue,fillOpacity:".08",stroke:r.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"390",y:"46",textAnchor:"middle",fill:r.blue,fontSize:"10",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"csv.reader → Lists"}),["['order_id','name','amount']","['101','Divyesh','250']","['102','Rahul','300']"].map((i,t)=>e.jsx("text",{x:"282",y:62+t*16,fill:r.blueL,fontSize:"9",fontFamily:"monospace",children:i},t)),e.jsx("text",{x:"390",y:"118",textAnchor:"middle",fill:r.red,fontSize:"9",fontFamily:"Open Sans,sans-serif",children:"⚠️ row[0], row[1] — order dependent"})]}),e.jsxs("g",{className:"csv1",children:[e.jsx("line",{x1:"230",y1:"110",x2:"270",y2:"128",stroke:r.muted,strokeWidth:"1.5",markerEnd:"url(#csv-arr)"}),e.jsx("text",{x:"242",y:"126",textAnchor:"middle",fill:r.green,fontSize:"9",fontFamily:"Open Sans,sans-serif",fontWeight:"700",children:"DictReader"})]}),e.jsxs("g",{className:"csv3",children:[e.jsx("rect",{x:"10",y:"140",width:"500",height:"50",rx:"8",fill:r.green,fillOpacity:".08",stroke:r.green,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"158",textAnchor:"middle",fill:r.green,fontSize:"10",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"csv.DictReader → Dicts (use this!)"}),e.jsx("text",{x:"22",y:"177",fill:r.greenL,fontSize:"9",fontFamily:"monospace",children:'{"order_id":"101","name":"Divyesh","amount":"250"}  ← row["name"] — safe, readable'})]})]})}function g(){return e.jsxs("svg",{viewBox:"0 0 520 175",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"175",rx:"10",fill:r.dark,stroke:r.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:r.white,fontSize:"12",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"Quick Recall — CSV"}),[{x:12,color:r.blue,title:"Reading",rows:[["reader","list of lists"],["DictReader","list of dicts ✓"],['newline=""',"mandatory!"],['delimiter="|"',"custom sep"],["row.get(k)","safe access"]]},{x:182,color:r.green,title:"Writing",rows:[["writer","writerow(list)"],["DictWriter","writerow(dict) ✓"],["fieldnames=[]","schema define"],["writeheader()","header row"],['newline=""',"mandatory!"]]},{x:352,color:r.orange,title:"Traps",rows:[["all string","type convert karo"],["no schema","DictReader use karo"],["no newline","blank lines"],["full read","stream instead"],["encoding","utf-8 specify"]]}].map(i=>e.jsxs("g",{children:[e.jsx("rect",{x:i.x,y:"32",width:"155",height:"130",rx:"6",fill:i.color,fillOpacity:".08",stroke:i.color,strokeWidth:"1.2"}),e.jsx("text",{x:i.x+77,y:"50",textAnchor:"middle",fill:i.color,fontSize:"11",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:i.title}),i.rows.map(([t,c],o)=>{const n=66+o*19;return e.jsxs("g",{children:[o%2===0&&e.jsx("rect",{x:i.x+4,y:n-12,width:"147",height:"16",rx:"3",fill:i.color,fillOpacity:".06"}),e.jsx("text",{x:i.x+8,y:n,fontSize:"9",fontWeight:"700",fill:i.color,fontFamily:"monospace",children:t}),e.jsx("text",{x:i.x+68,y:n,fontSize:"9",fill:r.muted,fontFamily:"Open Sans,sans-serif",children:c})]},t)})]},i.title))]})}function C(){return e.jsxs(m,{title:"CSV Handling",phase:"0C",subtitle:"csv module — reader, DictReader, writer, DictWriter, encoding, large file streaming",children:[e.jsx(a,{icon:"🧠",title:"Mental Model — CSV kya hai?",children:e.jsx(p,{analogy:e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"block mb-1",children:[e.jsx("span",{className:"text-visual-3 font-bold",children:"CSV"})," = table ka text version — Excel ka raw, dumb sibling"]}),e.jsxs("span",{className:"block mb-1",children:[e.jsx("span",{className:"text-visual-2 font-bold",children:"No data types"})," = sab string milega — int, float, date — sab ",e.jsx("code",{className:"font-code text-xs",children:'"string"'})]}),e.jsxs("span",{className:"block mb-1",children:[e.jsx("span",{className:"text-visual-1 font-bold",children:"Use case"})," = systems ke beech data exchange — report download, bulk import"]}),e.jsxs("span",{className:"block",children:[e.jsx("span",{className:"text-visual-4 font-bold",children:"Rule"}),' = CSV ko database mat samajh — sirf "dumb data pipe" hai']})]}),diagram:e.jsx(u,{})})}),e.jsx(a,{icon:"📖",title:"Reading CSV — reader vs DictReader",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{badLabel:"❌ csv.reader — index dependent, fragile",goodLabel:"✅ csv.DictReader — name-based, safe",bad:`import csv

with open("orders.csv", newline='', encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        order_id = row[0]   # ← column order change → bug!
        name     = row[1]
        amount   = row[2]`,good:`import csv

with open("orders.csv", newline='', encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        order_id = row["order_id"]  # column name se — safe
        name     = row["name"]
        amount   = int(row["amount"])  # string → int convert karo!`}),e.jsxs(d,{type:"warn",title:'newline="" — mandatory hai',children:["Windows pe ",e.jsx("code",{className:"font-code text-xs",children:'newline=""'})," bina diya → blank lines aayengi har row ke baad. Ye bug sirf Windows pe aata hai — developer Mac pe test karta hai, production crash hoti hai."]})]})}),e.jsx(a,{icon:"🔢",title:"Type Conversion — CSV ka Hidden Monster",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs(d,{type:"err",title:"CSV mein sab kuch string hota hai",children:["CSV file mein ",e.jsx("code",{className:"font-code text-xs",children:"250"})," likha ho — Python ko milega ",e.jsx("code",{className:"font-code text-xs",children:'"250"'})," (string). Comparison ya math karo to silent wrong results ya crash."]}),e.jsx(s,{code:`import csv

with open("orders.csv", newline='', encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        # ❌ Galat — string compare
        if row["amount"] > 200:    # "250" > 200 → TypeError
            ...

        # ✅ Convert karo pehle
        amount = int(row["amount"])
        if amount > 200:
            print(f"{row['name']}: ₹{amount}")

        # ✅ Safe conversion with fallback
        try:
            price = float(row.get("price", 0))
        except (ValueError, TypeError):
            price = 0.0`})]})}),e.jsx(a,{icon:"✍️",title:"Writing CSV — DictWriter",children:e.jsx("div",{className:"space-y-4",children:e.jsx(s,{code:`import csv

orders = [
    {"order_id": "101", "name": "Divyesh", "amount": 250},
    {"order_id": "102", "name": "Rahul",   "amount": 300},
]

with open("output.csv", "w", newline='', encoding="utf-8") as f:
    fieldnames = ["order_id", "name", "amount"]
    writer = csv.DictWriter(f, fieldnames=fieldnames)

    writer.writeheader()              # header row likhta hai
    writer.writerows(orders)          # list of dicts

# ✅ Missing field? — empty string likhega (error nahi)
writer.writerow({"order_id": "103"})  # name, amount = ""

# ✅ Extra field? — extrasaction="ignore" add karo
writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")`})})}),e.jsx(a,{icon:"⚙️",title:"Delimiter + Encoding",children:e.jsx("div",{className:"space-y-4",children:e.jsx(s,{code:`# Custom delimiter (TSV, pipe-separated)
reader = csv.reader(f, delimiter='\\t')   # tab-separated
reader = csv.reader(f, delimiter='|')    # pipe-separated

# Encoding trap — Indian names, special chars
# ❌ Default encoding → crash
with open("users.csv") as f: ...

# ✅ Always specify encoding
with open("users.csv", encoding="utf-8", newline='') as f:
    reader = csv.DictReader(f)

# Fallback for old Windows-generated files
with open("old.csv", encoding="latin-1", newline='') as f:
    reader = csv.DictReader(f)

# Quote handling — default quotechar is "
# "Sharma, Divyesh" → single value (comma inside quotes)
reader = csv.reader(f, quotechar='"')   # default`})})}),e.jsx(a,{icon:"🌊",title:"Large File + Safe Write — Production Patterns",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(l,{badLabel:"❌ Full load — memory crash",goodLabel:"✅ Stream row by row — scalable",bad:`# 2GB CSV
rows = list(reader)         # RAM mein pura load
filtered = [r for r in rows
            if int(r["amount"]) > 200]`,good:`# Stream — process row by row
for row in reader:          # ek baar mein ek row
    if int(row["amount"]) > 200:
        writer.writerow(row)
# Memory = constant regardless of file size`}),e.jsx(s,{code:`import csv, os

# ✅ Safe write — atomic pattern
def safe_write_csv(path: str, rows: list, fields: list) -> None:
    tmp = path + ".tmp"
    with open(tmp, "w", newline='', encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)
    os.replace(tmp, path)   # atomic swap — crash safe`})]})}),e.jsx(a,{icon:"💣",title:"Common Traps",children:e.jsx(w,{rows:[{level:"S",mistake:"Type compare bina conversion",kyun:'"250" > 200 → TypeError ya wrong result',fix:'int(row["amount"]) convert karo pehle'},{level:"M",mistake:'newline="" bhoolna',kyun:"Windows pe har row ke baad blank line",fix:'open(f, newline="") always'},{level:"M",mistake:"row[0] index use karna",kyun:"Column order change → silent bug",fix:'DictReader + row["name"]'},{level:"M",mistake:"encoding specify na karna",kyun:"Hindi/special chars → UnicodeDecodeError",fix:'encoding="utf-8" always'},{level:"M",mistake:"list(reader) on 2GB file",kyun:"RAM crash",fix:"for row in reader: — stream karo"},{level:"B",mistake:"writeheader() bhoolna",kyun:"First row data ban jaega, header nahi",fix:"writer.writeheader() before writerows"}]})}),e.jsx(a,{icon:"📋",title:"Cheatsheet",children:e.jsx(f,{items:[{label:'open(f, newline="", encoding="utf-8")',value:"CSV ke liye standard open pattern"},{label:"csv.DictReader(f)",value:"Read — column name se access, safe"},{label:"csv.DictWriter(f, fieldnames=[...])",value:"Write — schema-driven"},{label:'int(row["amount"])',value:"Type convert karo — CSV sab string deta hai"},{label:'row.get("key", default)',value:"Missing column safe access"},{label:"for row in reader:",value:"Stream — large files ke liye"},{label:'delimiter="|"',value:"Custom separator"},{label:"os.replace(tmp, path)",value:"Atomic safe write"}]})}),e.jsx(a,{icon:"⚡",title:"Quick Recall",children:e.jsx(h,{children:e.jsx(g,{})})}),e.jsx(a,{icon:"🔗",title:"Connected Topics",children:e.jsx(x,{from:{title:"pathlib",description:"Path object CSV open() ke saath use karo",href:"/roadmap/topic/python-file-handling/4"},to:{title:"JSON Handling",description:"Structured data ke liye CSV se zyada powerful",href:"/roadmap/topic/python-file-handling/7"}})})]})}export{C as default};
