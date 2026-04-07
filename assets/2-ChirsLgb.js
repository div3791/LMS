import{j as e}from"./index-8eB8ukBA.js";import{N as m,S as t,C as d,a as p,Q as y,b as u}from"./ConnectedTopics-SPFj48ZS.js";import{M as g}from"./MentalModel-7u6gqoEs.js";import{T as k}from"./TrapsTable-A2Pjt6E8.js";import{C as j}from"./CompareBlock-DUTyij-B.js";import{I as h}from"./InfoBox-CP92M4gW.js";const a={blue:"#4F8CFF",green:"#34D399",orange:"#F59E0B",purple:"#A78BFA",muted:"#9CA3AF",white:"#F8FAFC",border:"#1E3A5F"};function b(){const i=[{name:"read()",color:a.orange,fillPct:1,label:"Full string",ram:"⚠️ all RAM"},{name:"readline()",color:a.blue,fillPct:.25,label:"1 line",ram:"✓ minimal"},{name:"readlines()",color:a.purple,fillPct:1,label:"list of lines",ram:"⚠️ all RAM"},{name:"for line in f",color:a.green,fillPct:.25,label:"1 line/iter",ram:"✓ best"}],l=220,c=20,s=210,o=30;return e.jsxs("svg",{viewBox:"0 0 520 185",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes rm0Bar { 0%{width:0} 100%{width:${Math.round(i[0].fillPct*l)}px} }
          @keyframes rm1Bar { 0%{width:0} 100%{width:${Math.round(i[1].fillPct*l)}px} }
          @keyframes rm2Bar { 0%{width:0} 100%{width:${Math.round(i[2].fillPct*l)}px} }
          @keyframes rm3Bar { 0%{width:0} 100%{width:${Math.round(i[3].fillPct*l)}px} }
          @keyframes rmFade { 0%{opacity:0} 100%{opacity:1} }
          .rm0b{animation:rm0Bar .5s .0s ease both}
          .rm1b{animation:rm1Bar .5s .15s ease both}
          .rm2b{animation:rm2Bar .5s .3s ease both}
          .rm3b{animation:rm3Bar .5s .45s ease both}
          .rmf{animation:rmFade .4s .1s ease both}
        `})}),e.jsxs("g",{className:"rmf",children:[e.jsx("text",{x:"10",y:"16",fill:a.muted,fontSize:"9",fontWeight:"700",fontFamily:"Open Sans,sans-serif",children:"Method"}),e.jsx("text",{x:s,y:"16",fill:a.muted,fontSize:"9",fontWeight:"700",fontFamily:"Open Sans,sans-serif",children:"RAM usage (500MB file)"}),e.jsx("text",{x:"450",y:"16",fill:a.muted,fontSize:"9",fontWeight:"700",fontFamily:"Open Sans,sans-serif",children:"Result"})]}),i.map((n,f)=>{const r=o+f*38,x=Math.round(n.fillPct*l);return e.jsxs("g",{className:"rmf",children:[f%2===0&&e.jsx("rect",{x:"2",y:r-4,width:"516",height:"34",rx:"4",fill:n.color,fillOpacity:".04"}),e.jsx("text",{x:"10",y:r+14,fill:n.color,fontSize:"10",fontWeight:"700",fontFamily:"monospace",children:n.name}),e.jsx("rect",{x:s,y:r+2,width:l,height:c,rx:"4",fill:n.color,fillOpacity:".08",stroke:n.color,strokeOpacity:".2",strokeWidth:"1"}),e.jsx("rect",{x:s,y:r+2,width:x,height:c,rx:"4",fill:n.color,fillOpacity:".4",className:`rm${f}b`}),e.jsx("text",{x:s+8,y:r+16,fill:n.color,fontSize:"9",fontWeight:"700",fontFamily:"Open Sans,sans-serif",children:n.ram}),e.jsx("text",{x:"450",y:r+14,fill:a.muted,fontSize:"9",fontFamily:"Open Sans,sans-serif",children:n.label})]},n.name)}),e.jsx("text",{x:"260",y:"176",textAnchor:"middle",fill:a.green,fontSize:"9",fontWeight:"700",fontFamily:"Open Sans,sans-serif",children:"for line in f = lazy — ek baar mein ek hi line RAM mein"})]})}function w(){return e.jsxs("svg",{viewBox:"0 0 520 155",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"155",rx:"10",fill:"#0F172A",stroke:a.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:a.white,fontSize:"12",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"Quick Recall — Reading Strategies"}),[{x:12,color:a.orange,title:"read()",rows:[["read()","full file string"],["read(n)","n bytes/chars"],["→ str","text mode mein"],["⚠️ RAM","large file danger"]]},{x:182,color:a.blue,title:"readline/lines",rows:[["readline()","1 line + \\n"],["readlines()","list of all lines"],["→ list","all in memory"],["strip()","\\n hatao result se"]]},{x:352,color:a.green,title:"for loop (Best)",rows:[["for line in f","lazy iteration"],["1 line RAM","memory efficient"],["large files ✓","GB bhi ok"],["strip()","cleanup karo"]]}].map(i=>e.jsxs("g",{children:[e.jsx("rect",{x:i.x,y:"30",width:"155",height:"116",rx:"6",fill:i.color,fillOpacity:".08",stroke:i.color,strokeWidth:"1.2"}),e.jsx("text",{x:i.x+77,y:"48",textAnchor:"middle",fill:i.color,fontSize:"11",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:i.title}),i.rows.map(([l,c],s)=>{const o=65+s*20;return e.jsxs("g",{children:[s%2===0&&e.jsx("rect",{x:i.x+4,y:o-13,width:"147",height:"17",rx:"3",fill:i.color,fillOpacity:".07"}),e.jsx("text",{x:i.x+8,y:o,fontSize:"10",fontWeight:"700",fill:i.color,fontFamily:"monospace",children:l}),e.jsx("text",{x:i.x+90,y:o,fontSize:"10",fill:a.muted,fontFamily:"Open Sans,sans-serif",children:c})]},l)})]},i.title))]})}function v(){return e.jsxs(m,{title:"Read Methods — Reading Strategies",phase:"0C",subtitle:"read(), readline(), readlines(), for loop — kab kya use karein",children:[e.jsx(t,{icon:"🧠",title:"Mental Model — Padhne ke 4 Tarike",children:e.jsx(g,{analogy:e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"block mb-1",children:[e.jsx("span",{className:"text-visual-3 font-bold",children:"read()"})," = poori kitaab ek baar mein phadh lo aur yaad karo — thick book? RAM full!"]}),e.jsxs("span",{className:"block mb-1",children:[e.jsx("span",{className:"text-visual-2 font-bold",children:"readline()"})," = ek line padho, process karo, agli line pe jao"]}),e.jsxs("span",{className:"block mb-1",children:[e.jsx("span",{className:"text-visual-4 font-bold",children:"readlines()"})," = poori kitaab ke page-list banao pehle — phir process karo"]}),e.jsxs("span",{className:"block",children:[e.jsx("span",{className:"text-visual-1 font-bold",children:"for line in f"})," = bookmark rakho, ek ek line padho — koi bhi size ki kitaab, safe ✓"]})]}),diagram:e.jsx(b,{})})}),e.jsx(t,{icon:"📖",title:"read() — Puri File Ek Baar",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{language:"python",filename:"read_variants.py",code:`with open('data.txt', 'r') as f:
    content = f.read()       # puri file → ek bada string
    # Returns: "Line 1\\nLine 2\\nLine 3\\n"

with open('data.txt', 'r') as f:
    chunk = f.read(100)      # sirf pehle 100 bytes/chars

# Chunked reading — memory safe for large files
with open('big.bin', 'rb') as f:
    while True:
        chunk = f.read(8192)  # 8KB at a time
        if not chunk:
            break
        process(chunk)`}),e.jsxs(h,{type:"warn",children:[e.jsx("strong",{children:"read() warning:"})," 500MB file ka ",e.jsx("code",{className:"font-mono text-xs",children:"read()"})," = 500MB RAM usage. Config files ke liye theek hai, logs aur data files ke liye nahi."]})]})}),e.jsx(t,{icon:"↩️",title:"readline() — Ek Line at a Time",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{language:"python",filename:"readline_usage.py",code:`with open('data.txt', 'r') as f:
    line1 = f.readline()   # "Line 1\\n"
    line2 = f.readline()   # "Line 2\\n"
    line4 = f.readline()   # "" — empty string = EOF!

# Loop with readline
with open('data.txt', 'r') as f:
    while True:
        line = f.readline()
        if not line:         # EOF pe empty string
            break
        print(line.strip())

# Walrus operator (Python 3.8+) — cleaner
with open('data.txt') as f:
    while line := f.readline():
        print(line.strip())`}),e.jsxs(h,{type:"info",children:[e.jsx("strong",{children:"EOF detection:"})," ",e.jsx("code",{className:"font-mono text-xs",children:"readline()"})," pe EOF = ",e.jsx("code",{className:"font-mono text-xs",children:'""'})," (empty string) — ",e.jsx("code",{className:"font-mono text-xs",children:'"\\n"'})," nahi (woh blank line hogi). Yeh distinction important hai."]})]})}),e.jsx(t,{icon:"📋",title:"readlines() — List of All Lines",children:e.jsx(d,{language:"python",filename:"readlines_usage.py",code:`with open('data.txt', 'r') as f:
    lines = f.readlines()
    # ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
    # NOTE: \\n included in each string!

# Strip newlines — list comprehension
lines_clean = [l.strip() for l in lines]
# ["Line 1", "Line 2", "Line 3"]

# Useful when: random access chahiye
print(lines[0])   # first line
print(lines[-1])  # last line`})}),e.jsx(t,{icon:"🏆",title:"for line in f — Hamesha Prefer Karo",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(j,{badLabel:"❌ readlines() — sab RAM mein",goodLabel:"✅ for loop — lazy, memory safe",bad:e.jsx(d,{language:"python",code:`with open('big_log.txt') as f:
    for line in f.readlines():
        process(line)
# readlines() pura load karta hai pehle
# 2GB log? RAM full!`}),good:e.jsx(d,{language:"python",code:`with open('big_log.txt') as f:
    for line in f:         # lazy iteration
        process(line)      # 1 line at a time
# 2GB file? No problem — O(1) memory`})}),e.jsxs(h,{type:"tip",children:[e.jsx("strong",{children:"Golden rule:"})," Hamesha ",e.jsx("code",{className:"font-mono text-xs",children:"for line in f"}),". Sirf tab ",e.jsx("code",{className:"font-mono text-xs",children:"read()"})," karo jab file definitely chhoti ho (config, template) ya puri content string mein chahiye (JSON parse, regex)."]})]})}),e.jsx(t,{icon:"⚠️",title:"Common Traps",children:e.jsx(k,{rows:[{level:"S",mistake:"Large file pe read() call karna",kyun:"100MB+ file → 100MB+ RAM — server crash possible",fix:"for line in f ya chunked read(8192) use karo"},{level:"S",mistake:"\\n strip karna bhool gaya",kyun:"readline() aur readlines() mein \\n included hota hai",fix:'line.strip() ya line.rstrip("\\n") use karo'},{level:"M",mistake:"readline() + for loop mix karna",kyun:"Cursor position shared hai — kuch lines skip ho jayengi",fix:"Ek approach choose karo — dono ek saath mat use karo"}]})}),e.jsx(t,{icon:"📋",title:"Cheatsheet",children:e.jsx(p,{items:[{label:"Read all (small files)",value:"data = f.read()"},{label:"Read n bytes",value:"chunk = f.read(8192)"},{label:"Read one line",value:"line = f.readline().strip()"},{label:"All lines list",value:"lines = [l.strip() for l in f.readlines()]"},{label:"Best — lazy loop",value:"for line in f: process(line.strip())"},{label:"Walrus EOF",value:"while line := f.readline(): process(line)"}]})}),e.jsx(t,{icon:"⚡",title:"Quick Recall",children:e.jsx(y,{children:e.jsx(w,{})})}),e.jsx(t,{icon:"🔗",title:"Connected Topics",children:e.jsx(u,{from:{title:"with open() — Context Manager",description:"File safely open karna aur auto-close guarantee",href:"/roadmap/topic/python-file-handling/1"},to:{title:"Write Methods",description:"write(), writelines() — file pe likhna",href:"/roadmap/topic/python-file-handling/3"}})})]})}export{v as default};
