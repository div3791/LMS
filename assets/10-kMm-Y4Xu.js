import{j as t}from"./index-BM26oCrq.js";import{N as h,S as i,C as l,a as p,Q as m,b as c}from"./ConnectedTopics-CrnZbieD.js";import{M as d}from"./MentalModel-CpI0yIhV.js";import{T as x}from"./TrapsTable-D1dM65hw.js";import{C as f}from"./CompareBlock-DXYmatgF.js";import{I as u}from"./InfoBox-DINCxuUC.js";const e={green:"#34D399",orange:"#F59E0B",red:"#F87171",muted:"#9CA3AF",white:"#F8FAFC",border:"#1E3A5F"};function y(){const a=[{old:"os.path.join(a, b)",neo:"Path(a) / b",label:"Join paths"},{old:"os.path.dirname(p)",neo:"Path(p).parent",label:"Parent dir"},{old:"os.path.basename(p)",neo:"Path(p).name",label:"Filename"},{old:"os.path.splitext(p)",neo:"Path(p).stem + .suffix",label:"Split ext"},{old:"os.path.exists(p)",neo:"Path(p).exists()",label:"Exists?"},{old:"os.path.isfile(p)",neo:"Path(p).is_file()",label:"Is file?"},{old:"os.makedirs(p,e_ok=T)",neo:"Path(p).mkdir(parents=T,exist_ok=T)",label:"Make dirs"}];return t.jsxs("svg",{viewBox:"0 0 520 210",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[t.jsxs("defs",{children:[t.jsx("style",{children:`
          @keyframes mg0 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg1 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg2 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg3 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg4 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg5 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg6 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          .mg0{animation:mg0 .3s .00s ease both}
          .mg1{animation:mg1 .3s .07s ease both}
          .mg2{animation:mg2 .3s .14s ease both}
          .mg3{animation:mg3 .3s .21s ease both}
          .mg4{animation:mg4 .3s .28s ease both}
          .mg5{animation:mg5 .3s .35s ease both}
          .mg6{animation:mg6 .3s .42s ease both}
        `}),t.jsx("marker",{id:"mg-arr",markerWidth:"8",markerHeight:"8",refX:"7",refY:"3",orient:"auto",children:t.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:e.green})})]}),t.jsx("text",{x:"10",y:"14",fill:e.red,fontSize:"10",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"os.path (legacy)"}),t.jsx("text",{x:"288",y:"14",fill:e.green,fontSize:"10",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"pathlib (modern)"}),t.jsx("text",{x:"510",y:"14",textAnchor:"end",fill:e.muted,fontSize:"9",fontFamily:"Open Sans,sans-serif",children:"Task"}),a.map((o,n)=>{const s=24+n*26,r=`mg${n}`;return t.jsxs("g",{className:r,children:[n%2===0&&t.jsx("rect",{x:"2",y:s,width:"516",height:"23",rx:"3",fill:e.muted,fillOpacity:".05"}),t.jsx("text",{x:"10",y:s+15,fill:e.red,fontSize:"9",fontWeight:"700",fontFamily:"monospace",children:o.old}),t.jsx("line",{x1:"252",y1:s+11,x2:"270",y2:s+11,stroke:e.green,strokeWidth:"1.5",markerEnd:"url(#mg-arr)"}),t.jsx("text",{x:"276",y:s+15,fill:e.green,fontSize:"9",fontWeight:"700",fontFamily:"monospace",children:o.neo}),t.jsx("text",{x:"510",y:s+15,textAnchor:"end",fill:e.muted,fontSize:"9",fontFamily:"Open Sans,sans-serif",children:o.label})]},o.label)}),t.jsx("text",{x:"260",y:"205",textAnchor:"middle",fill:e.muted,fontSize:"9",fontFamily:"Open Sans,sans-serif",children:"pathlib = OOP approach — method chaining possible, cleaner code"})]})}function b(){return t.jsxs("svg",{viewBox:"0 0 520 155",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[t.jsx("rect",{x:"0",y:"0",width:"520",height:"155",rx:"10",fill:"#0F172A",stroke:e.border,strokeWidth:"1.5"}),t.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:e.white,fontSize:"12",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"Quick Recall — os.path vs pathlib"}),[{x:12,color:e.red,title:"os.path (old)",rows:[["os.path.join","string result"],["os.path.exists","function-style"],["os.makedirs","verbose API"],["str concat","error-prone"]]},{x:182,color:e.green,title:"pathlib (new)",rows:[['Path / "sub"',"object-style join"],["p.exists()","method-style"],["p.mkdir()","clean API"],["p.parent/f","chain-able"]]},{x:352,color:e.orange,title:"When os.path",rows:[["legacy code","backward compat"],["str expected","old library APIs"],["expanduser","Path.home() better"],["realpath","Path().resolve()"]]}].map(a=>t.jsxs("g",{children:[t.jsx("rect",{x:a.x,y:"30",width:"155",height:"116",rx:"6",fill:a.color,fillOpacity:".08",stroke:a.color,strokeWidth:"1.2"}),t.jsx("text",{x:a.x+77,y:"48",textAnchor:"middle",fill:a.color,fontSize:"11",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:a.title}),a.rows.map(([o,n],s)=>{const r=65+s*20;return t.jsxs("g",{children:[s%2===0&&t.jsx("rect",{x:a.x+4,y:r-13,width:"147",height:"17",rx:"3",fill:a.color,fillOpacity:".07"}),t.jsx("text",{x:a.x+8,y:r,fontSize:"10",fontWeight:"700",fill:a.color,fontFamily:"monospace",children:o}),t.jsx("text",{x:a.x+90,y:r,fontSize:"10",fill:e.muted,fontFamily:"Open Sans,sans-serif",children:n})]},o)})]},a.title))]})}function S(){return t.jsxs(h,{title:"os.path vs pathlib — Old vs Modern",phase:"0C",subtitle:"Legacy function-style vs OOP-style — migration guide",children:[t.jsx(i,{icon:"🧠",title:"Mental Model — T9 vs Touchscreen",children:t.jsx(d,{analogy:t.jsxs(t.Fragment,{children:[t.jsxs("span",{className:"block mb-1",children:[t.jsx("span",{className:"text-visual-3 font-bold",children:"os.path"})," = Nokia ka T9 keyboard — kaam karta hai, lekin verbose aur chaining impossible"]}),t.jsxs("span",{className:"block mb-1",children:[t.jsx("span",{className:"text-visual-2 font-bold",children:"pathlib"})," = smartphone touchscreen — intuitive, OOP, method chaining, OS-independent"]}),t.jsxs("span",{className:"block mb-1",children:[t.jsx("span",{className:"text-visual-1 font-bold",children:"os.path.join(a, b, c)"})," = teen alag buttons dabao"]}),t.jsxs("span",{className:"block",children:[t.jsx("span",{className:"text-visual-4 font-bold",children:"Path(a) / b / c"})," = swipe karo — same result, much cleaner"]})]}),diagram:t.jsx(y,{})})}),t.jsx(i,{icon:"⚔️",title:"Side by Side Comparison",children:t.jsx(f,{badLabel:"❌ os.path style — verbose",goodLabel:"✅ pathlib style — clean",bad:t.jsx(l,{language:"python",code:`import os

base = "/home/divyesh/projects"
file = "data.csv"

full   = os.path.join(base, "output", file)
parent = os.path.dirname(full)
name   = os.path.basename(full)
stem, ext = os.path.splitext(name)

if os.path.exists(full):
    size = os.path.getsize(full)

os.makedirs(
  os.path.join(base, "output"),
  exist_ok=True
)`}),good:t.jsx(l,{language:"python",code:`from pathlib import Path

base = Path("/home/divyesh/projects")
file = "data.csv"

full   = base / "output" / file
parent = full.parent
name   = full.name
stem   = full.stem
ext    = full.suffix

if full.exists():
    size = full.stat().st_size

(base / "output").mkdir(
  parents=True, exist_ok=True
)`})})}),t.jsx(i,{icon:"🔄",title:"Interoperability — Dono Saath Mein",children:t.jsxs("div",{className:"space-y-4",children:[t.jsx(l,{language:"python",filename:"interop.py",code:`from pathlib import Path
import os

p = Path("/home/divyesh/data.txt")

# Path → str (jab purani library str chahti ho)
str(p)         # "/home/divyesh/data.txt"
os.fspath(p)   # preferred way — __fspath__ protocol

# str → Path
p2 = Path(os.environ['HOME']) / "file.txt"

# Python 3.6+ mein most stdlib functions Path accept karti hain
import shutil
shutil.copy(p, Path("/tmp/backup.txt"))   # OK
open(p, 'r')                              # OK
os.stat(p)                                # OK`}),t.jsxs(u,{type:"tip",children:["Python 3.6+ mein most stdlib functions (",t.jsx("code",{className:"font-mono text-xs",children:"open, shutil, os.stat"}),") directly Path objects accept karti hain. Sirf third-party libraries jo explicitly ",t.jsx("code",{className:"font-mono text-xs",children:"str"})," check karti hain wahan ",t.jsx("code",{className:"font-mono text-xs",children:"str(p)"})," lagao."]})]})}),t.jsx(i,{icon:"⛓️",title:"pathlib ka Superpower — Chaining",children:t.jsx(l,{language:"python",filename:"pathlib_power.py",code:`from pathlib import Path

# Get all .py files, just the names
py_stems = [f.stem for f in Path('.').rglob('*.py')]

# Rename extension — new Path object banta hai
old = Path("report.csv")
new = old.with_suffix(".xlsx")          # "report.xlsx"

# Mirror input structure in output
src = Path("data/raw/jan/sales.csv")
dst = Path("data/processed") / src.relative_to("data/raw")
# → Path("data/processed/jan/sales.csv")

dst.parent.mkdir(parents=True, exist_ok=True)
dst.write_text(process(src.read_text()))

# Home directory
home = Path.home()                      # ~ expand
config = home / ".config" / "app.json"`})}),t.jsx(i,{icon:"⚠️",title:"Common Traps",children:t.jsx(x,{rows:[{level:"M",mistake:"Path + str karne ki koshish",kyun:'Path("a") + "/b" = TypeError — Path strings add nahi hota',fix:'Path("a") / "b" — / operator hamesha use karo'},{level:"M",mistake:"str expected ho aur Path diya",kyun:"Kuch purani libraries isinstance(p, str) check karti hain — fail",fix:"str(path) explicit conversion ya os.fspath(path)"},{level:"B",mistake:'Path("~") expand nahi hoti',kyun:"~ tilde expand nahi hogi automatically in Path()",fix:'Path("~/file").expanduser() ya Path.home() / "file"'}]})}),t.jsx(i,{icon:"📋",title:"Migration Cheatsheet",children:t.jsx(p,{items:[{label:"os.path.join(a, b)",value:"→ Path(a) / b"},{label:"os.path.dirname(p)",value:"→ Path(p).parent"},{label:"os.path.basename(p)",value:"→ Path(p).name"},{label:"os.path.splitext(p)",value:"→ (Path(p).stem, Path(p).suffix)"},{label:"os.path.exists(p)",value:"→ Path(p).exists()"},{label:"os.path.expanduser('~')",value:"→ Path.home()"}]})}),t.jsx(i,{icon:"⚡",title:"Quick Recall",children:t.jsx(m,{children:t.jsx(b,{})})}),t.jsx(i,{icon:"🔗",title:"Connected Topics",children:t.jsx(c,{from:{title:"Path Methods — exists(), mkdir(), glob()",description:"Path ke methods — kya kar sakte hain",href:"/roadmap/topic/python-file-handling/5"},to:{title:"pathlib.Path Basics",description:"Path anatomy — parts, stem, suffix",href:"/roadmap/topic/python-file-handling/4"}})})]})}export{S as default};
