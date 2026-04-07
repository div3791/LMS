import{j as e}from"./index-8eB8ukBA.js";import{N as l,S as i,C as n,a as c,Q as x,b as d}from"./ConnectedTopics-SPFj48ZS.js";import{M as f}from"./MentalModel-7u6gqoEs.js";import{T as a}from"./TrapBox-cI68XYa-.js";import{H as h}from"./HoodBox-BDvAwi0T.js";import{I as m}from"./InfoBox-CP92M4gW.js";const t={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",orangeLight:"#fcd34d",red:"#ef4444",redLight:"#fca5a5",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function p(){return e.jsxs("svg",{viewBox:"0 0 520 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes wfStep { 0%{opacity:0;transform:translateX(-8px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes wfPulse { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.35} }
          .wf1{animation:wfStep .4s .1s ease both}
          .wf2{animation:wfStep .4s .4s ease both}
          .wf3{animation:wfStep .4s .7s ease both}
          .wf4{animation:wfStep .4s 1s ease both}
          .wf-body{animation:wfPulse 2s ease-in-out infinite}
        `}),e.jsx("marker",{id:"wfArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.blue})}),e.jsx("marker",{id:"wfRed",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.red})})]}),e.jsx("text",{x:"260",y:"20",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"with Statement — Execution Flow"}),e.jsx("rect",{x:"15",y:"30",width:"220",height:"38",rx:"7",fill:t.green,fillOpacity:".12",stroke:t.green,strokeWidth:"1.5",className:"wf1"}),e.jsx("text",{x:"125",y:"47",textAnchor:"middle",fill:t.greenLight,fontSize:"11",fontWeight:"700",children:"1. cm.__enter__()"}),e.jsx("text",{x:"125",y:"62",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"setup, return resource (as target)"}),e.jsx("rect",{x:"15",y:"85",width:"220",height:"45",rx:"7",fill:t.blue,fillOpacity:".12",stroke:t.blue,strokeWidth:"1.5",className:"wf-body"}),e.jsx("text",{x:"125",y:"102",textAnchor:"middle",fill:t.blueLight,fontSize:"11",fontWeight:"700",children:"2. with body runs"}),e.jsx("text",{x:"125",y:"118",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"(resource available as alias)"}),e.jsx("line",{x1:"125",y1:"68",x2:"125",y2:"83",stroke:t.green,strokeWidth:"2",markerEnd:"url(#wfArr)"}),e.jsx("line",{x1:"125",y1:"130",x2:"125",y2:"143",stroke:t.blue,strokeWidth:"2",markerEnd:"url(#wfArr)"}),e.jsx("rect",{x:"15",y:"145",width:"220",height:"50",rx:"7",fill:t.purple,fillOpacity:".12",stroke:t.purple,strokeWidth:"1.5",className:"wf3"}),e.jsx("text",{x:"125",y:"162",textAnchor:"middle",fill:t.purpleLight,fontSize:"11",fontWeight:"700",children:"3. cm.__exit__(exc_type, exc_val, tb)"}),e.jsx("text",{x:"125",y:"177",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"cleanup always runs"}),e.jsx("text",{x:"125",y:"191",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"return True → suppress exception"}),e.jsx("rect",{x:"295",y:"85",width:"215",height:"155",rx:"8",fill:t.red,fillOpacity:".06",stroke:t.red,strokeWidth:"1.2",className:"wf4"}),e.jsx("text",{x:"402",y:"108",textAnchor:"middle",fill:t.redLight,fontSize:"11",fontWeight:"700",children:"If Exception in body:"}),e.jsx("text",{x:"302",y:"130",fill:t.muted,fontSize:"10",children:"• __exit__(exc_type, exc_val, tb)"}),e.jsx("text",{x:"302",y:"148",fill:t.muted,fontSize:"10",children:"• return True → suppress"}),e.jsx("text",{x:"302",y:"166",fill:t.muted,fontSize:"10",children:"• return False/None → re-raise"}),e.jsx("text",{x:"302",y:"184",fill:t.green,fontSize:"10",children:"• __exit__ guaranteed to run"}),e.jsx("text",{x:"302",y:"202",fill:t.green,fontSize:"10",children:"• even if SystemExit!"}),e.jsx("line",{x1:"237",y1:"108",x2:"293",y2:"108",stroke:t.red,strokeWidth:"1.5",strokeDasharray:"4",markerEnd:"url(#wfRed)"})]})}function u(){return e.jsxs("svg",{viewBox:"0 0 520 160",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes cmPop { 0%{opacity:0;transform:scale(.95)} 100%{opacity:1;transform:scale(1)} }
          .cm1{animation:cmPop .4s .1s ease both}
          .cm2{animation:cmPop .4s .4s ease both}
        `})}),e.jsx("text",{x:"260",y:"18",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Two Ways to Make a Context Manager"}),e.jsx("rect",{x:"10",y:"25",width:"240",height:"130",rx:"8",fill:t.blue,fillOpacity:".08",stroke:t.blue,strokeWidth:"1.5",className:"cm1"}),e.jsx("text",{x:"130",y:"44",textAnchor:"middle",fill:t.blueLight,fontSize:"11",fontWeight:"700",children:"Class-based Protocol"}),e.jsx("text",{x:"20",y:"62",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"class Timer:"}),e.jsx("text",{x:"20",y:"78",fill:t.text,fontSize:"10",fontFamily:"monospace",children:"  def __enter__(self):"}),e.jsx("text",{x:"20",y:"94",fill:t.greenLight,fontSize:"10",fontFamily:"monospace",children:"    self.start = time.time()"}),e.jsx("text",{x:"20",y:"110",fill:t.text,fontSize:"10",fontFamily:"monospace",children:"  def __exit__(self, *args):"}),e.jsx("text",{x:"20",y:"126",fill:t.redLight,fontSize:"10",fontFamily:"monospace",children:"    print(time.time()-self.start)"}),e.jsx("text",{x:"20",y:"147",fill:t.muted,fontSize:"10",children:"Full control, reusable, stateful"}),e.jsx("rect",{x:"270",y:"25",width:"240",height:"130",rx:"8",fill:t.green,fillOpacity:".08",stroke:t.green,strokeWidth:"1.5",className:"cm2"}),e.jsx("text",{x:"390",y:"44",textAnchor:"middle",fill:t.greenLight,fontSize:"11",fontWeight:"700",children:"@contextmanager (Generator)"}),e.jsx("text",{x:"280",y:"62",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"@contextmanager"}),e.jsx("text",{x:"280",y:"78",fill:t.text,fontSize:"10",fontFamily:"monospace",children:"def timer():"}),e.jsx("text",{x:"280",y:"94",fill:t.greenLight,fontSize:"10",fontFamily:"monospace",children:"  start = time.time()"}),e.jsx("text",{x:"280",y:"110",fill:t.orangeLight,fontSize:"10",fontFamily:"monospace",children:"  yield  # body runs here"}),e.jsx("text",{x:"280",y:"126",fill:t.redLight,fontSize:"10",fontFamily:"monospace",children:"  print(time.time()-start)"}),e.jsx("text",{x:"280",y:"147",fill:t.muted,fontSize:"10",children:"Simpler, less boilerplate, concise"})]})}function y(){return e.jsxs("svg",{viewBox:"0 0 520 160",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"160",rx:"10",fill:"#0f172a",stroke:t.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Context Manager"}),[{x:15,color:t.green,title:"Protocol",lines:["__enter__ → setup + return","__exit__(type, val, tb)","return True → suppress exc"]},{x:185,color:t.orange,title:"@contextmanager",lines:["yield se before/after split","try/finally inside yield","1 yield only!"]},{x:355,color:t.purple,title:"contextlib",lines:["suppress(Exc) → ignore exc","ExitStack → dynamic cms","nullcontext → noop cm"]}].map(r=>e.jsxs("g",{children:[e.jsx("rect",{x:r.x,y:"32",width:"155",height:"115",rx:"6",fill:r.color,fillOpacity:".08",stroke:r.color,strokeWidth:"1.2"}),e.jsx("text",{x:r.x+77,y:"50",textAnchor:"middle",fill:r.color,fontSize:"11",fontWeight:"700",children:r.title}),r.lines.map((s,o)=>e.jsx("text",{x:r.x+10,y:68+o*22,fill:t.text,fontSize:"10",children:`→ ${s}`},o))]},r.title))]})}function S(){return e.jsxs(l,{title:"Context Managers — Guaranteed Cleanup",phase:"0B",subtitle:"with statement ka magic — resource management bina leak ke",children:[e.jsx(i,{icon:"🧠",title:"Mental Model — Context Manager Kya Hai?",children:e.jsx(f,{analogy:"Context manager = hotel room. Check-in karo (setup, __enter__), kuch bhi karo (body), check-out karo (cleanup, __exit__) — chahe early checkout ho ya emergency. Hotel guaranteed hai ki room saaf hoga. with statement yahi guarantee deta hai.",diagram:e.jsx(p,{})})}),e.jsx(i,{icon:"🔬",title:"Under the Hood — with Statement",children:e.jsx(h,{children:e.jsxs("div",{className:"space-y-2 text-sm text-content leading-relaxed",children:[e.jsxs("p",{children:[e.jsx("code",{children:"with expr as alias:"})," internally yeh karta hai:"]}),e.jsxs("p",{children:["1. ",e.jsx("span",{className:"text-green-400 font-semibold",children:"cm = expr"})," — context manager object milta hai"]}),e.jsxs("p",{children:["2. ",e.jsx("span",{className:"text-green-400 font-semibold",children:"alias = cm.__enter__()"})," — setup + resource return"]}),e.jsx("p",{children:"3. Body execute hoti hai"}),e.jsxs("p",{children:["4. ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"cm.__exit__(exc_type, exc_val, traceback)"})," — ALWAYS called"]}),e.jsxs("p",{children:["5. __exit__ returns ",e.jsx("span",{className:"text-orange-400 font-semibold",children:"True"})," → exception suppress; ",e.jsx("span",{className:"text-orange-400 font-semibold",children:"False/None"})," → re-raise"]})]})})}),e.jsx(i,{icon:"🏗️",title:"Class-Based Context Manager",children:e.jsx(n,{code:`import time

class Timer:
    def __enter__(self):
        self.start = time.perf_counter()
        return self  # alias milega: "as t"

    def __exit__(self, exc_type, exc_val, exc_tb):
        elapsed = time.perf_counter() - self.start
        print(f"Time: {elapsed:.3f}s")
        # return True  ← exception suppress karna ho to
        return False   # ← re-raise any exception

with Timer() as t:
    heavy_computation()
# "Time: 2.341s" — even if exception occurred!

# DB connection example
class DBConnection:
    def __init__(self, url):
        self.url = url

    def __enter__(self):
        self.conn = connect(self.url)
        return self.conn

    def __exit__(self, exc_type, exc_val, tb):
        if exc_type:  # exception tha?
            self.conn.rollback()
        else:
            self.conn.commit()
        self.conn.close()
        return False  # exception re-raise

with DBConnection("postgres://...") as conn:
    conn.execute("INSERT INTO users ...")`})}),e.jsxs(i,{icon:"✨",title:"@contextmanager — Generator Approach",children:[e.jsx(u,{}),e.jsx(n,{code:`from contextlib import contextmanager

@contextmanager
def timer():
    start = time.perf_counter()
    try:
        yield  # yahan body run hoti hai
    finally:  # ALWAYS — exception ya nahi
        print(f"Time: {time.perf_counter() - start:.3f}s")

with timer():
    heavy_work()

# yield se value return karna (as alias)
@contextmanager
def managed_file(path, mode="r"):
    f = open(path, mode)
    try:
        yield f  # "as f" ko milega
    finally:
        f.close()

with managed_file("data.txt") as f:
    data = f.read()

# Exception handle karna inside
@contextmanager
def suppress_errors(*exc_types):
    try:
        yield
    except exc_types:
        pass  # silently ignore

with suppress_errors(FileNotFoundError, PermissionError):
    data = open("maybe_missing.txt").read()`})]}),e.jsxs(i,{icon:"📚",title:"contextlib Tools",children:[e.jsxs(m,{type:"info",title:"Multiple context managers — LIFO order",children:["Multiple with mein cleanup LIFO (stack) order mein hoti hai — last entered, first exited. ",e.jsx("code",{children:"with A(), B():"})," → A.__enter__ → B.__enter__ → body → B.__exit__ → A.__exit__. Plate stack ki tarah — jo pehle rakha woh baad mein nikalega."]}),e.jsx(n,{code:`from contextlib import suppress, ExitStack, nullcontext

# suppress — specific exception ignore karna
with suppress(FileNotFoundError):
    os.remove("temp.txt")  # agar nahi hai to koi error nahi

# ExitStack — dynamic multiple context managers
def process_files(file_list):
    with ExitStack() as stack:
        files = [stack.enter_context(open(f)) for f in file_list]
        # sab files auto-close honge
        return [f.read() for f in files]

# nullcontext — conditional context manager
def get_connection(use_real_db=True):
    if use_real_db:
        return DBConnection(PROD_URL)
    else:
        return nullcontext(mock_conn)  # noop wrapper

with get_connection(use_real_db=PROD) as conn:
    work(conn)

# Multiple context managers ek saath
with open("input.txt") as fin, open("output.txt", "w") as fout:
    fout.write(fin.read().upper())`})]}),e.jsx(i,{icon:"🏭",title:"Real-World Use Cases",children:e.jsx(n,{code:`# 1. File handling — most common
with open("data.json") as f:
    data = json.load(f)  # auto-close guaranteed

# 2. Database transaction
with db.transaction():
    db.update("users", {"active": False}, where={"id": user_id})
    db.insert("audit_log", {"action": "deactivate", "user_id": user_id})
# commit ya rollback auto

# 3. Lock — thread safety
import threading
lock = threading.Lock()
with lock:
    shared_resource.update()  # auto release

# 4. Temp directory
import tempfile
with tempfile.TemporaryDirectory() as tmpdir:
    process_files(tmpdir)  # auto deleted after

# 5. Mock in tests
from unittest.mock import patch
with patch("module.requests.get") as mock_get:
    mock_get.return_value.json.return_value = {"status": "ok"}
    result = api_call()
# patch auto restored after with block

# 6. Custom retry context manager
@contextmanager
def retry(times=3, exceptions=(Exception,)):
    for attempt in range(times):
        try:
            yield attempt
            break  # success — exit loop
        except exceptions:
            if attempt == times - 1:
                raise`})}),e.jsxs(i,{icon:"🪤",title:"Context Manager Traps",children:[e.jsx(a,{number:1,name:"@contextmanager mein try/finally nahi — Resource Leak",level:"M",question:"@contextmanager function mein try/finally kyun zaroori hai?",wrongAnswer:"yield ke baad jo code hai woh cleanup karega",correctAnswer:"Agar body mein exception aaye, yield ke baad ka code run hi nahi hoga! Resource leak guaranteed.",why:"Generator ke andar exception aane pe execution wahan ruk jaata hai — finally ke bina cleanup skip hoti hai. Yeh sabse common @contextmanager trap hai.",fix:e.jsx(n,{code:`# DANGEROUS — resource leak if exception!
@contextmanager
def bad_context():
    resource = acquire()
    yield resource
    release(resource)  # ← WON'T run if exception!

# CORRECT — always try/finally
@contextmanager
def good_context():
    resource = acquire()
    try:
        yield resource
    finally:
        release(resource)  # ← GUARANTEED to run`})}),e.jsx(a,{number:2,name:"@contextmanager mein yield bhool jaana",level:"B",question:"@contextmanager function mein yield nahi likha to kya hoga?",wrongAnswer:"Function normally run karega",correctAnswer:"RuntimeError: generator didn't yield — exactly ek yield required hai.",why:"@contextmanager decorator expect karta hai ki generator exactly once yield kare — before yield = __enter__, after = __exit__.",fix:e.jsx(n,{code:`# Wrong — yield missing
@contextmanager
def bad():
    setup()
    # forgot yield!
    teardown()

# Right
@contextmanager
def good():
    setup()
    yield  # ← must have
    teardown()`})}),e.jsx(a,{number:2,name:"__exit__ mein return True — Accidental Suppress",level:"M",question:"__exit__ mein return True karna kab dangerous hai?",wrongAnswer:"return True hamesha safe hai — cleanup ke baad exception handle ho jaati hai",correctAnswer:"return True sab exceptions silently swallow karta hai — real errors bhi chhup jaate hain!",why:"Unconditional return True = bare except: pass jitna dangerous. Only specific exception types suppress karo.",fix:e.jsx(n,{code:`# Wrong — sab kuch suppress
def __exit__(self, exc_type, exc_val, tb):
    cleanup()
    return True  # DANGEROUS!

# Right — sirf specific suppress
def __exit__(self, exc_type, exc_val, tb):
    cleanup()
    return exc_type is FileNotFoundError  # only this`})})]}),e.jsx(i,{icon:"📋",title:"Cheatsheet",children:e.jsx(c,{items:[{label:"__enter__",value:"Setup + return resource (as alias)"},{label:"__exit__(type, val, tb)",value:"Cleanup — ALWAYS called"},{label:"__exit__ return True",value:"Exception suppress"},{label:"@contextmanager",value:"yield se split: before = enter, after = exit"},{label:"try/finally in @cm",value:"Cleanup guarantee even on exception"},{label:"contextlib.suppress()",value:"Specific exception silently ignore"},{label:"ExitStack",value:"Dynamic number of context managers"},{label:"nullcontext",value:"No-op context manager (conditional use)"},{label:"Multiple with",value:"with A() as a, B() as b: — one line"}]})}),e.jsx(i,{icon:"⚡",title:"Quick Recall",children:e.jsx(x,{children:e.jsx(y,{})})}),e.jsx(i,{icon:"🔗",title:"Connected Topics",children:e.jsx(d,{from:{title:"Exception Handling",description:"__exit__ exception suppression",href:"/roadmap/topic/python-exceptions/0"},to:{title:"Generators",description:"@contextmanager uses generators",href:"/roadmap/topic/python-generators/0"}})})]})}export{S as default};
