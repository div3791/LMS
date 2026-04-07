import{j as e}from"./index-8eB8ukBA.js";import{N as h,S as s,C as n,a as c,Q as m,b as x}from"./ConnectedTopics-SPFj48ZS.js";import{M as f}from"./MentalModel-7u6gqoEs.js";import{T as d}from"./TrapsTable-A2Pjt6E8.js";import{I as p}from"./InfoBox-CP92M4gW.js";const t={blue:"#4F8CFF",green:"#34D399",orange:"#F59E0B",purple:"#A78BFA",muted:"#9CA3AF",white:"#F8FAFC",border:"#1E3A5F"};function y(){return e.jsxs("svg",{viewBox:"0 0 520 210",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes pm0 { 0%{opacity:0} 100%{opacity:1} }
          @keyframes pm1 { 0%{opacity:0;transform:translateX(6px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes pm2 { 0%{opacity:0;transform:translateX(6px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes pm3 { 0%{opacity:0;transform:translateX(6px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes pm4 { 0%{opacity:0;transform:translateX(6px)} 100%{opacity:1;transform:translateX(0)} }
          .pma{animation:pm0 .35s .0s ease both}
          .pmb{animation:pm1 .35s .15s ease both}
          .pmc{animation:pm2 .35s .3s ease both}
          .pmd{animation:pm3 .35s .45s ease both}
          .pme{animation:pm4 .35s .6s ease both}
        `})}),e.jsxs("g",{className:"pma",children:[e.jsx("rect",{x:"10",y:"8",width:"500",height:"26",rx:"6",fill:t.blue,fillOpacity:".08",stroke:t.blue,strokeWidth:"1.2"}),e.jsx("text",{x:"260",y:"25",textAnchor:"middle",fill:t.blue,fontSize:"10",fontWeight:"700",fontFamily:"monospace",children:'p = Path("/home/divyesh/projects/notes/app.py")'})]}),e.jsxs("g",{className:"pmb",children:[e.jsx("rect",{x:"10",y:"44",width:"240",height:"50",rx:"6",fill:t.green,fillOpacity:".08",stroke:t.green,strokeWidth:"1.2"}),e.jsx("text",{x:"20",y:"60",fill:t.green,fontSize:"10",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"Existence Checks"}),e.jsx("text",{x:"20",y:"76",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"p.exists()   → True / False"}),e.jsx("text",{x:"20",y:"90",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"p.is_file()  / p.is_dir() → bool"})]}),e.jsxs("g",{className:"pmc",children:[e.jsx("rect",{x:"10",y:"102",width:"240",height:"50",rx:"6",fill:t.orange,fillOpacity:".08",stroke:t.orange,strokeWidth:"1.2"}),e.jsx("text",{x:"20",y:"118",fill:t.orange,fontSize:"10",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"Directory Creation"}),e.jsx("text",{x:"20",y:"134",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"p.mkdir()              → creates folder"}),e.jsx("text",{x:"20",y:"148",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:"p.mkdir(parents=True)  → nested"})]}),e.jsxs("g",{className:"pmd",children:[e.jsx("rect",{x:"10",y:"160",width:"240",height:"44",rx:"6",fill:t.purple,fillOpacity:".08",stroke:t.purple,strokeWidth:"1.2"}),e.jsx("text",{x:"20",y:"176",fill:t.purple,fontSize:"10",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"Pattern Matching"}),e.jsx("text",{x:"20",y:"192",fill:t.muted,fontSize:"9",fontFamily:"monospace",children:'p.glob("*.py")  /  p.rglob("*.py")'}),e.jsx("text",{x:"20",y:"200",fill:t.muted,fontSize:"8",fontFamily:"Open Sans,sans-serif",children:"rglob = recursive by default"})]}),e.jsxs("g",{className:"pme",children:[e.jsx("rect",{x:"265",y:"44",width:"245",height:"160",rx:"6",fill:t.blue,fillOpacity:".08",stroke:t.blue,strokeWidth:"1.2"}),e.jsx("text",{x:"275",y:"60",fill:t.blue,fontSize:"10",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"Path Properties (read-only, no disk)"}),[["p.name",'"app.py"'],["p.stem",'"app"'],["p.suffix",'".py"'],["p.parent",'Path(".../notes")'],["p.parts",'("/","home",...,"app.py")'],['/ "sub"','join — Path / "sub"']].map(([i,r],o)=>{const a=80+o*20;return e.jsxs("g",{children:[o%2===0&&e.jsx("rect",{x:"269",y:a-13,width:"237",height:"17",rx:"3",fill:t.blue,fillOpacity:".06"}),e.jsx("text",{x:"275",y:a,fill:t.blue,fontSize:"9",fontWeight:"700",fontFamily:"monospace",children:i}),e.jsx("text",{x:"345",y:a,fill:t.muted,fontSize:"9",fontFamily:"monospace",children:r})]},i)})]})]})}function u(){return e.jsxs("svg",{viewBox:"0 0 520 155",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"155",rx:"10",fill:"#0F172A",stroke:t.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:"Quick Recall — Path Methods"}),[{x:12,color:t.green,title:"Checks",rows:[["exists()","file/dir hai?"],["is_file()","regular file?"],["is_dir()","directory?"],["stat()","size, mtime etc"]]},{x:182,color:t.orange,title:"Create/Delete",rows:[["mkdir()","folder banao"],["parents=True","nested ok"],["unlink()","file delete"],["rmdir()","empty dir del"]]},{x:352,color:t.blue,title:"Navigate",rows:[['glob("*.py")',"current dir"],['rglob("*.py")',"recursive"],["iterdir()","list contents"],['/ "sub"',"join paths"]]}].map(i=>e.jsxs("g",{children:[e.jsx("rect",{x:i.x,y:"30",width:"155",height:"116",rx:"6",fill:i.color,fillOpacity:".08",stroke:i.color,strokeWidth:"1.2"}),e.jsx("text",{x:i.x+77,y:"48",textAnchor:"middle",fill:i.color,fontSize:"11",fontWeight:"700",fontFamily:"Poppins,sans-serif",children:i.title}),i.rows.map(([r,o],a)=>{const l=65+a*20;return e.jsxs("g",{children:[a%2===0&&e.jsx("rect",{x:i.x+4,y:l-13,width:"147",height:"17",rx:"3",fill:i.color,fillOpacity:".07"}),e.jsx("text",{x:i.x+8,y:l,fontSize:"10",fontWeight:"700",fill:i.color,fontFamily:"monospace",children:r}),e.jsx("text",{x:i.x+90,y:l,fontSize:"10",fill:t.muted,fontFamily:"Open Sans,sans-serif",children:o})]},r)})]},i.title))]})}function P(){return e.jsxs(h,{title:"Path Methods — exists(), mkdir(), glob() aur Properties",phase:"0C",subtitle:"Existence checks, directory ops, pattern matching, path properties",children:[e.jsx(s,{icon:"🧠",title:"Mental Model — Path Object kya Kar Sakta Hai?",children:e.jsx(f,{analogy:e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"block mb-1",children:[e.jsx("span",{className:"text-visual-3 font-bold",children:"Swiss Army Knife:"})," ",e.jsx("span",{className:"font-mono text-visual-2",children:"Path"})," sirf address nahi hai — ek smart object hai jo apne baare mein jaanta hai"]}),e.jsxs("span",{className:"block mb-1",children:[e.jsx("span",{className:"text-visual-1 font-bold",children:"Properties"})," = read-only attributes (name, suffix, parent) — koi disk access nahi, sirf string operations"]}),e.jsxs("span",{className:"block mb-1",children:[e.jsx("span",{className:"text-visual-4 font-bold",children:"Methods"})," = actions (exists(), mkdir(), glob()) — disk pe kaam karte hain"]}),e.jsxs("span",{className:"block",children:[e.jsx("span",{className:"text-visual-3 font-bold",children:"/ operator"})," = path joining — ",e.jsx("span",{className:"font-mono text-visual-2",children:'base / "subdir" / "file.txt"'})," — OS-safe"]})]}),diagram:e.jsx(y,{})})}),e.jsx(s,{icon:"🔍",title:"Existence Checks",children:e.jsx(n,{language:"python",filename:"existence_checks.py",code:`from pathlib import Path

p = Path("/home/divyesh/data.csv")

if p.exists():
    print("hai!")           # True if file ya dir koi bhi ho

if p.is_file():
    data = p.read_text()    # regular file confirm

if p.is_dir():
    for item in p.iterdir():
        print(item)

# Metadata
info = p.stat()
print(info.st_size)         # bytes mein size
print(info.st_mtime)        # last modified timestamp`})}),e.jsx(s,{icon:"📁",title:"mkdir() — Directories Banana",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{language:"python",filename:"mkdir_usage.py",code:`from pathlib import Path

# Safe creation — most common pattern
Path("output/logs/2024").mkdir(
    parents=True,      # nested dirs banao — like mkdir -p
    exist_ok=True,     # exist kare to error mat do
)

# Delete
p = Path("output/temp.txt")
p.unlink()                  # file delete
p.unlink(missing_ok=True)   # Python 3.8+ — ignore if missing

Path("empty_dir").rmdir()   # sirf empty directory`}),e.jsxs(p,{type:"tip",children:[e.jsx("strong",{children:"Golden pattern:"})," ",e.jsx("code",{className:"font-mono text-xs",children:"mkdir(parents=True, exist_ok=True)"})," — hamesha safe hai. Already exist kare ya parent nahi ho — dono cases handle karta hai."]})]})}),e.jsx(s,{icon:"🔎",title:"glob() aur rglob() — Pattern Matching",children:e.jsx(n,{language:"python",filename:"glob_usage.py",code:`from pathlib import Path

base = Path("/home/divyesh/projects")

# rglob — recursive (cleaner syntax)
all_py  = list(base.rglob("*.py"))    # sab .py files — nested bhi
all_csv = list(base.rglob("*.csv"))

# glob — current dir + optional **
txt_files = list(base.glob("**/*.txt"))  # recursive manually

# Filter + process
for f in base.rglob("*.log"):
    if f.stat().st_size > 1_000_000:   # 1MB se bada
        print(f"Large: {f.name}")

# Simple listing
for item in base.iterdir():
    if item.is_dir():
        print(f"Dir: {item.name}")`})}),e.jsx(s,{icon:"🏷️",title:"Path Properties — No Disk Access",children:e.jsx(n,{language:"python",filename:"path_properties.py",code:`from pathlib import Path

p = Path("/home/divyesh/notes/app.py")

p.name     # "app.py"          — filename with extension
p.stem     # "app"             — filename without extension
p.suffix   # ".py"             — extension only
p.suffixes # [".tar", ".gz"]   — multiple extensions!
p.parent   # Path("/home/divyesh/notes")

# Rename extension — creates new Path object
new = p.with_suffix(".txt")    # "app.txt"
new = p.with_stem("main")      # "main.py"
new = p.with_name("run.sh")    # ".../notes/run.sh"

# Path joining — / operator
config = p.parent / "config" / "settings.json"`})}),e.jsx(s,{icon:"⚡",title:"Path Shortcuts — read_text / write_text",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{language:"python",filename:"path_shortcuts.py",code:`from pathlib import Path

p = Path("data.txt")

# Quick read — open() ki zarurat nahi (chhoti files)
content = p.read_text(encoding="utf-8")
raw     = p.read_bytes()                # binary

# Quick write — overwrites!
p.write_text("Hello World\\n", encoding="utf-8")
p.write_bytes(b"\\x89PNG...")`}),e.jsxs(p,{type:"warn",children:[e.jsx("code",{className:"font-mono text-xs",children:"read_text()"})," ek baar mein puri file load karta hai. Large files ke liye ",e.jsx("code",{className:"font-mono text-xs",children:"with open()"})," + ",e.jsx("code",{className:"font-mono text-xs",children:"for line in f"})," use karo."]})]})}),e.jsx(s,{icon:"⚠️",title:"Common Traps",children:e.jsx(d,{rows:[{level:"S",mistake:"mkdir() without exist_ok=True",kyun:"FileExistsError — CI/CD mein baar baar fail hoga",fix:"mkdir(parents=True, exist_ok=True) — hamesha"},{level:"M",mistake:"Path(str) + str concatenation",kyun:'Path("a") + "/b" = TypeError — Path is not str',fix:'Path("a") / "b" — / operator use karo'},{level:"B",mistake:"p.name vs p.stem confusion",kyun:'name = "app.py", stem = "app" — dono different hain',fix:"name = full filename, stem = without last suffix"}]})}),e.jsx(s,{icon:"📋",title:"Cheatsheet",children:e.jsx(c,{items:[{label:"Check exists",value:"if p.exists(): ..."},{label:"Create dir safely",value:"p.mkdir(parents=True, exist_ok=True)"},{label:"Find all .py",value:'list(base.rglob("*.py"))'},{label:"Quick read",value:'text = p.read_text(encoding="utf-8")'},{label:"Quick write",value:'p.write_text("content", encoding="utf-8")'},{label:"Join paths",value:'full = base / "subdir" / "file.txt"'}]})}),e.jsx(s,{icon:"⚡",title:"Quick Recall",children:e.jsx(m,{children:e.jsx(u,{})})}),e.jsx(s,{icon:"🔗",title:"Connected Topics",children:e.jsx(x,{from:{title:"pathlib.Path Basics",description:"Path anatomy — parts, parent, stem, suffix",href:"/roadmap/topic/python-file-handling/4"},to:{title:"os.path vs pathlib",description:"Legacy comparison aur migration guide",href:"/roadmap/topic/python-file-handling/10"}})})]})}export{P as default};
