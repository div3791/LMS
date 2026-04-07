import{j as e}from"./index-8eB8ukBA.js";import{N as c,S as i,C as a,a as x,Q as d,b as p}from"./ConnectedTopics-SPFj48ZS.js";import{M as h}from"./MentalModel-7u6gqoEs.js";import{T as n}from"./TrapBox-cI68XYa-.js";import{H as u}from"./HoodBox-BDvAwi0T.js";import{C as l}from"./CompareBlock-DUTyij-B.js";import{I as f}from"./InfoBox-CP92M4gW.js";const r={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",orangeLight:"#fcd34d",red:"#ef4444",redLight:"#fca5a5",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function m(){return e.jsxs("svg",{viewBox:"0 0 520 230",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes tcFlow { 0%{stroke-dashoffset:300} 100%{stroke-dashoffset:0} }
          @keyframes tcBlink { 0%,100%{opacity:.5} 50%{opacity:1} }
          .tc-flow{stroke-dasharray:300;animation:tcFlow 1.5s ease both}
          .tc-blink{animation:tcBlink 2s ease-in-out infinite}
        `}),e.jsx("marker",{id:"tcArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:r.orange})}),e.jsx("marker",{id:"tcRed",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:r.red})}),e.jsx("marker",{id:"tcGrn",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:r.green})})]}),e.jsx("text",{x:"260",y:"20",textAnchor:"middle",fill:r.white,fontSize:"13",fontWeight:"700",children:"try / except / else / finally — Flow"}),e.jsx("rect",{x:"180",y:"30",width:"160",height:"38",rx:"7",fill:r.blue,fillOpacity:".15",stroke:r.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"53",textAnchor:"middle",fill:r.blueLight,fontSize:"12",fontWeight:"700",children:"try: block"}),e.jsx("polygon",{points:"260,90 305,115 260,140 215,115",fill:r.orange,fillOpacity:".15",stroke:r.orange,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"112",textAnchor:"middle",fill:r.orangeLight,fontSize:"10",children:"Exception"}),e.jsx("text",{x:"260",y:"126",textAnchor:"middle",fill:r.orangeLight,fontSize:"10",children:"raised?"}),e.jsx("line",{x1:"260",y1:"68",x2:"260",y2:"88",stroke:r.blue,strokeWidth:"2",className:"tc-flow",markerEnd:"url(#tcArr)"}),e.jsx("line",{x1:"215",y1:"115",x2:"80",y2:"115",stroke:r.red,strokeWidth:"2",className:"tc-flow",markerEnd:"url(#tcRed)"}),e.jsx("text",{x:"147",y:"108",textAnchor:"middle",fill:r.redLight,fontSize:"10",children:"YES"}),e.jsx("rect",{x:"15",y:"100",width:"65",height:"30",rx:"6",fill:r.red,fillOpacity:".15",stroke:r.red,strokeWidth:"1.5"}),e.jsx("text",{x:"47",y:"119",textAnchor:"middle",fill:r.redLight,fontSize:"11",fontWeight:"700",children:"except"}),e.jsx("line",{x1:"305",y1:"115",x2:"425",y2:"115",stroke:r.green,strokeWidth:"2",className:"tc-flow",markerEnd:"url(#tcGrn)"}),e.jsx("text",{x:"365",y:"108",textAnchor:"middle",fill:r.greenLight,fontSize:"10",children:"NO"}),e.jsx("rect",{x:"427",y:"100",width:"75",height:"30",rx:"6",fill:r.green,fillOpacity:".15",stroke:r.green,strokeWidth:"1.5"}),e.jsx("text",{x:"464",y:"119",textAnchor:"middle",fill:r.greenLight,fontSize:"11",fontWeight:"700",children:"else"}),e.jsx("line",{x1:"47",y1:"130",x2:"47",y2:"175",stroke:r.muted,strokeWidth:"1.5",strokeDasharray:"4",markerEnd:"url(#tcArr)"}),e.jsx("line",{x1:"47",y1:"175",x2:"200",y2:"175",stroke:r.muted,strokeWidth:"1.5",strokeDasharray:"4"}),e.jsx("line",{x1:"464",y1:"130",x2:"464",y2:"175",stroke:r.muted,strokeWidth:"1.5",strokeDasharray:"4",markerEnd:"url(#tcArr)"}),e.jsx("line",{x1:"464",y1:"175",x2:"320",y2:"175",stroke:r.muted,strokeWidth:"1.5",strokeDasharray:"4"}),e.jsx("line",{x1:"260",y1:"140",x2:"260",y2:"170",stroke:r.orange,strokeWidth:"1.5",strokeDasharray:"4",markerEnd:"url(#tcArr)"}),e.jsx("rect",{x:"180",y:"170",width:"160",height:"38",rx:"7",fill:r.purple,fillOpacity:".15",stroke:r.purple,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"191",textAnchor:"middle",fill:r.purpleLight,fontSize:"12",fontWeight:"700",children:"finally: ALWAYS runs"}),e.jsx("text",{x:"260",y:"206",textAnchor:"middle",fill:r.muted,fontSize:"10",children:"even on exception / return"}),e.jsx("text",{x:"47",y:"145",textAnchor:"middle",fill:r.redLight,fontSize:"9",children:"handle it"}),e.jsx("text",{x:"464",y:"145",textAnchor:"middle",fill:r.greenLight,fontSize:"9",children:"no exception"})]})}function y(){return e.jsxs("svg",{viewBox:"0 0 520 200",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("defs",{children:e.jsx("style",{children:`
          @keyframes ehFade { 0%{opacity:0;transform:translateY(-5px)} 100%{opacity:1;transform:translateY(0)} }
          .eh1{animation:ehFade .3s .1s ease both}
          .eh2{animation:ehFade .3s .3s ease both}
          .eh3{animation:ehFade .3s .5s ease both}
          .eh4{animation:ehFade .3s .7s ease both}
        `})}),e.jsx("text",{x:"260",y:"18",textAnchor:"middle",fill:r.white,fontSize:"13",fontWeight:"700",children:"Exception Hierarchy"}),e.jsx("rect",{x:"175",y:"22",width:"150",height:"26",rx:"6",fill:r.red,fillOpacity:".2",stroke:r.red,strokeWidth:"1.5",className:"eh1"}),e.jsx("text",{x:"250",y:"39",textAnchor:"middle",fill:r.redLight,fontSize:"11",fontWeight:"700",children:"BaseException"}),e.jsx("line",{x1:"250",y1:"48",x2:"250",y2:"58",stroke:r.muted,strokeWidth:"1"}),e.jsx("rect",{x:"85",y:"58",width:"130",height:"24",rx:"5",fill:r.orange,fillOpacity:".15",stroke:r.orange,strokeWidth:"1.2",className:"eh2"}),e.jsx("text",{x:"150",y:"74",textAnchor:"middle",fill:r.orangeLight,fontSize:"10",fontWeight:"700",children:"Exception"}),e.jsx("rect",{x:"235",y:"58",width:"120",height:"24",rx:"5",fill:r.muted,fillOpacity:".2",stroke:r.muted,strokeWidth:"1.2",className:"eh2"}),e.jsx("text",{x:"295",y:"74",textAnchor:"middle",fill:r.muted,fontSize:"10",children:"SystemExit / KeyboardInterrupt"}),e.jsx("line",{x1:"175",y1:"54",x2:"155",y2:"58",stroke:r.muted,strokeWidth:"1"}),e.jsx("line",{x1:"250",y1:"48",x2:"295",y2:"58",stroke:r.muted,strokeWidth:"1",strokeDasharray:"3"}),e.jsx("line",{x1:"150",y1:"82",x2:"150",y2:"96",stroke:r.muted,strokeWidth:"1"}),[{x:15,label:"ValueError",color:r.blue},{x:105,label:"TypeError",color:r.purple},{x:195,label:"KeyError",color:r.green},{x:285,label:"AttributeError",color:r.orange},{x:385,label:"ImportError",color:r.red}].map(t=>e.jsxs("g",{className:"eh3",children:[e.jsx("rect",{x:t.x,y:"96",width:t.label==="AttributeError"?115:95,height:"22",rx:"4",fill:t.color,fillOpacity:".12",stroke:t.color,strokeWidth:"1"}),e.jsx("text",{x:t.x+(t.label==="AttributeError"?57:47),y:"111",textAnchor:"middle",fill:t.color,fontSize:"9",fontFamily:"monospace",children:t.label}),e.jsx("line",{x1:"150",y1:"96",x2:t.x+(t.label==="AttributeError"?57:47),y2:"96",stroke:r.muted,strokeWidth:"0.8",strokeDasharray:"3"})]},t.label)),e.jsx("text",{x:"260",y:"142",textAnchor:"middle",fill:r.muted,fontSize:"10",children:"Common built-in exceptions (all inherit from Exception):"}),[{label:"ValueError",ex:"int('abc')"},{label:"TypeError",ex:"1 + 'a'"},{label:"KeyError",ex:"d['missing']"},{label:"IndexError",ex:"lst[99]"},{label:"AttributeError",ex:"None.upper()"}].map((t,o)=>e.jsx("g",{className:"eh4",children:e.jsxs("text",{x:15+o%3*175,y:158+Math.floor(o/3)*22,fill:r.muted,fontSize:"9",fontFamily:"monospace",children:[e.jsx("tspan",{fill:r.orange,children:t.label}),": ",t.ex]})},t.label))]})}function g(){return e.jsxs("svg",{viewBox:"0 0 520 160",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"160",rx:"10",fill:"#0f172a",stroke:r.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:r.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Exceptions"}),[{x:15,color:r.orange,title:"Structure",lines:["try → except → else → finally","else: sirf no-exception pe","finally: ALWAYS — cleanup"]},{x:185,color:r.red,title:"raise",lines:["raise ValueError('msg')","raise  (re-raise same exc)","raise X from Y (chaining)"]},{x:355,color:r.purple,title:"Custom",lines:["class MyErr(Exception)","args, str(e), type(e)","Log don't swallow silently"]}].map(t=>e.jsxs("g",{children:[e.jsx("rect",{x:t.x,y:"32",width:"155",height:"115",rx:"6",fill:t.color,fillOpacity:".08",stroke:t.color,strokeWidth:"1.2"}),e.jsx("text",{x:t.x+77,y:"50",textAnchor:"middle",fill:t.color,fontSize:"11",fontWeight:"700",children:t.title}),t.lines.map((o,s)=>e.jsx("text",{x:t.x+10,y:68+s*22,fill:r.text,fontSize:"10",children:`→ ${o}`},s))]},t.title))]})}function _(){return e.jsxs(c,{title:"Exception Handling — Complete Guide",phase:"0A",subtitle:"try/except/else/finally, custom exceptions, aur production-grade error handling",children:[e.jsx(i,{icon:"🧠",title:"Mental Model — Exception Kya Hai?",children:e.jsx(h,{analogy:"Exception = emergency alarm. Circus mein trapeze artist ke neeche safety net hoti hai (try/except). Agar gira → net pakad leti hai (except). Nahi gira → clap milta hai (else). Curtain down hona to hoga hi (finally) — chahe kuch bhi ho.",diagram:e.jsx(m,{})})}),e.jsxs(i,{icon:"🌳",title:"Exception Hierarchy",children:[e.jsx(y,{}),e.jsxs(f,{type:"info",title:"BaseException vs Exception",children:["KeyboardInterrupt (Ctrl+C) aur SystemExit BaseException se inherit karte hain, Exception se nahi. Isliye ",e.jsx("code",{children:"except Exception"})," se ye catch nahi hote — intentional design hai."]})]}),e.jsx(i,{icon:"💻",title:"try / except / else / finally — Complete Structure",children:e.jsx(a,{code:`# Full structure
try:
    result = 10 / int(input("number: "))
except ZeroDivisionError:
    print("Zero se divide nahi kar sakte!")
except ValueError as e:
    print(f"Invalid input: {e}")
except (TypeError, AttributeError) as e:  # multiple types
    print(f"Type problem: {e}")
except Exception as e:
    print(f"Unexpected: {type(e).__name__}: {e}")
    raise  # re-raise same exception
else:
    # ONLY runs if NO exception occurred
    print(f"Result: {result}")
finally:
    # ALWAYS runs — exception ya nahi
    print("Cleanup done")

# Exception object attributes
try:
    raise ValueError("bad value", 42)
except ValueError as e:
    e.args          # ('bad value', 42)
    str(e)          # "('bad value', 42)"
    type(e).__name__ # "ValueError"`})}),e.jsx(i,{icon:"🚀",title:"raise — Exception Raise Karna",children:e.jsx(a,{code:`# Basic raise
raise ValueError("Email invalid hai")

# Re-raise same exception (in except block)
try:
    risky()
except Exception:
    log_error()
    raise  # same exception re-raise — no info lost

# Raise from context (exception chaining)
try:
    result = db.query("SELECT ...")
except DatabaseError as e:
    raise ValueError("Data fetch failed") from e
    # Traceback shows: "The above exception was the cause"

# Suppress original context (raise from None)
try:
    parse(data)
except ParseError:
    raise ValueError("Invalid format") from None
    # Clean error — no internal details exposed

# Conditional raise
def get_age(age):
    if not isinstance(age, int):
        raise TypeError(f"int expected, got {type(age).__name__}")
    if age < 0:
        raise ValueError(f"Age negative nahi ho sakta: {age}")
    return age`})}),e.jsx(i,{icon:"🏗️",title:"Custom Exceptions — Production Grade",children:e.jsx(a,{code:`# Simple custom exception
class AppError(Exception):
    """Base exception for this app"""
    pass

class UserNotFoundError(AppError):
    def __init__(self, user_id):
        self.user_id = user_id
        super().__init__(f"User {user_id} not found")

class PermissionError(AppError):
    def __init__(self, action, resource):
        self.action = action
        self.resource = resource
        super().__init__(f"No permission to {action} on {resource}")

# Usage
try:
    user = get_user(42)
except UserNotFoundError as e:
    print(e.user_id)  # structured access!
    return 404

# Exception hierarchy for app
class AppError(Exception): pass
class DatabaseError(AppError): pass
class NetworkError(AppError): pass
class ValidationError(AppError): pass

# Catch all app errors
try:
    process()
except AppError as e:
    handle(e)  # catches any subclass`})}),e.jsxs(i,{icon:"📡",title:"Exception Propagation — Stack Unwinding",children:[e.jsx(u,{title:"How Python finds a handler",children:e.jsxs("div",{className:"space-y-2 text-sm text-content leading-relaxed",children:[e.jsxs("p",{children:["1. Exception occurs → ",e.jsx("span",{className:"text-orange-400 font-semibold",children:"exception object"})," create hota hai (type + message + traceback)"]}),e.jsxs("p",{children:["2. Python current frame mein handler dhundhta hai → nahi mila → ",e.jsx("span",{className:"text-red-400 font-semibold",children:"frame pop"})]}),e.jsx("p",{children:"3. Calling frame mein dhundhta hai → nahi mila → woh bhi pop → aur upar"}),e.jsxs("p",{children:["4. Koi bhi frame mein handler nahi mila → ",e.jsx("span",{className:"text-red-400 font-semibold",children:"program crash"})," + full traceback print"]}),e.jsxs("p",{children:["5. Yeh process = ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"Stack Unwinding"})," — stack upar ki taraf unroll hoti hai"]})]})}),e.jsx(a,{code:`def a():
    b()

def b():
    c()

def c():
    1 / 0   # ZeroDivisionError raised here

a()
# Stack unwind:
# c() → no handler → pop
# b() → no handler → pop
# a() → no handler → pop
# module → no handler → CRASH

# Traceback reads bottom-up:
# Traceback (most recent call last):
#   File "...", line 10, in <module>
#     a()                      ← outermost call
#   File "...", line 2, in a
#     b()
#   File "...", line 5, in b
#     c()
#   File "...", line 8, in c
#     1 / 0                    ← actual error
# ZeroDivisionError: division by zero`})]}),e.jsx(i,{icon:"🔗",title:"Exception Chaining — raise X from Y",children:e.jsx(l,{bad:e.jsx(a,{code:`# Swallowing context — bad!
try:
    connect_db()
except Exception:
    raise RuntimeError("Failed")
# Original DB error lost!
# Debugging impossible`}),good:e.jsx(a,{code:`# Preserving chain — good!
try:
    connect_db()
except Exception as e:
    raise RuntimeError("DB connection failed") from e
# Traceback shows both errors
# "The above exception was the direct cause"`}),badLabel:"Context lost — debugging nightmare",goodLabel:"Chain preserved — root cause visible"})}),e.jsx(i,{icon:"🏭",title:"Production Patterns",children:e.jsx(a,{code:`import logging
logger = logging.getLogger(__name__)

# Pattern 1: Log + re-raise
def fetch_user(user_id):
    try:
        return db.get(user_id)
    except DatabaseError as e:
        logger.error("DB error for user %s: %s", user_id, e, exc_info=True)
        raise  # let caller decide

# Pattern 2: Context manager cleanup
def process_file(path):
    f = None
    try:
        f = open(path)
        return process(f.read())
    except IOError as e:
        logger.warning("File error: %s", e)
        return None
    finally:
        if f:
            f.close()

# Pattern 3: Retry with specific exception
import time
def fetch_with_retry(url, retries=3):
    for attempt in range(retries):
        try:
            return requests.get(url, timeout=5)
        except requests.Timeout:
            if attempt == retries - 1:
                raise
            time.sleep(2 ** attempt)  # exponential backoff`})}),e.jsx(i,{icon:"🔁",title:"Loop + Exception — Retry Pattern",children:e.jsx(a,{code:`# Retry loop — user input validation
while True:
    try:
        x = int(input("Enter number: "))
        break   # success → exit loop
    except ValueError:
        print("Invalid! Try again.")

# API retry with attempts
for attempt in range(3):
    try:
        result = call_api()
        break   # success
    except TimeoutError:
        if attempt == 2:
            raise  # last attempt — re-raise
        print(f"Attempt {attempt+1} failed, retrying...")`})}),e.jsx(i,{icon:"💸",title:"Exception Cost — Performance Trap",children:e.jsx(l,{bad:e.jsx(a,{code:`# Using exceptions for normal control flow — SLOW
def get_value(d, key):
    try:
        return d[key]   # exception path every miss
    except KeyError:
        return None

# Also bad:
try:
    val = int(x)  # if x is often not int
except ValueError:
    val = 0  # overkill for common case`}),good:e.jsx(a,{code:`# dict.get() — no exception overhead
def get_value(d, key):
    return d.get(key)   # built-in, O(1), no exception

# Type check first (LBYL — Look Before You Leap)
val = int(x) if x.isdigit() else 0

# Rule: exceptions for EXCEPTIONAL situations
# Not for normal program flow`}),badLabel:"EAFP overuse — exception is expensive",goodLabel:"LBYL or .get() — no exception path"})}),e.jsxs(i,{icon:"🪤",title:"Exception Traps",children:[e.jsx(n,{number:1,name:"Bare except — Sab Kuch Pakad Lo",level:"B",question:"except: (bina type ke) aur except Exception: mein kya fark hai?",wrongAnswer:"Same hai — dono sab exceptions pakadten hain",correctAnswer:"Bare except: KeyboardInterrupt aur SystemExit bhi pakad leta hai! Program Ctrl+C se bhi band nahi hoga.",why:"Bare except BaseException se catch karta hai — including system signals. Hamesha specific exception ya except Exception use karo.",fix:e.jsx(a,{code:`# Wrong — Ctrl+C bhi block ho jaata hai
try:
    run()
except:  # ← NEVER do this
    pass

# Right
try:
    run()
except Exception as e:
    log(e)`})}),e.jsx(n,{number:2,name:"Silent Failure — except: pass",level:"B",question:"except: pass kyun dangerous hai?",wrongAnswer:"Safe hai — exception handle ho gayi",correctAnswer:"Bugs silently disappear ho jaate hain! Stack trace lost, root cause chhup jaata hai — production mein debugging impossible.",why:"Bare except with pass = blindfold lagaana. Real errors bhi swallow ho jaate hain. Always log karo ya specific handle karo.",fix:e.jsx(a,{code:`# NEVER do this
try:
    something()
except:
    pass  # bugs vanish silently!

# Minimum: log it
try:
    something()
except Exception:
    logger.exception("Unexpected error")  # full traceback
    raise  # re-raise for caller to handle`})}),e.jsx(n,{number:3,name:"Over-broad except — Sab Pakad Lo",level:"M",question:"except Exception: hamesha theek hai?",wrongAnswer:"Haan — broad catch safe hai",correctAnswer:"Agar aap sirf ValueError expect karte hain, except Exception se unexpected bugs bhi chhup jaate hain.",why:"Specific exceptions pakadne se unexpected errors visible rehte hain. Broad catch = hiding bugs.",fix:e.jsx(a,{code:`# Over-broad — unexpected errors hide
try:
    parse_and_save(data)
except Exception:
    print("Error")  # lost: was it parse? save? DB?

# Specific — each handled correctly
try:
    parsed = parse(data)
except ValueError as e:
    return {"error": f"Invalid data: {e}"}
try:
    save(parsed)
except DatabaseError as e:
    logger.error("DB save failed", exc_info=True)
    raise`})}),e.jsx(n,{number:4,name:"finally mein return — Exception Suppress",level:"S",question:"finally mein return statement ho to kya hota hai?",wrongAnswer:"Exception raise hogi aur return value milegi",correctAnswer:"finally ka return exception ko suppress kar deta hai! Exception silently lost ho jaati hai.",why:"finally ka return/break/continue pending exception ko cancel kar deta hai — extremely subtle bug.",fix:e.jsx(a,{code:`def bad():
    try:
        raise ValueError("oops")
    finally:
        return 42  # ValueError silently eaten!

bad()  # returns 42, no exception!

# Fix: finally mein return mat karo
def good():
    try:
        raise ValueError("oops")
    finally:
        cleanup()  # sirf cleanup, return nahi`})})]}),e.jsx(i,{icon:"📋",title:"Production Exceptions — Field Guide",children:e.jsx(a,{code:`# Most common exceptions in production Python:

# 1. ValueError — wrong type but right type container
int("abc")           # bad value for int()
json.loads("not-json")

# 2. TypeError — wrong type
1 + "a"              # int + str
len(42)              # non-iterable

# 3. KeyError — dict missing key
d = {"a": 1}
d["b"]               # KeyError: 'b' → use d.get("b")

# 4. IndexError — list out of bounds
lst = [1, 2]
lst[5]               # IndexError: list index out of range

# 5. AttributeError — object doesn't have attribute
None.upper()         # NoneType has no upper

# 6. FileNotFoundError
open("missing.txt")

# 7. TimeoutError / ConnectionError — network
requests.get(url, timeout=5)  # might raise either

# 8. PermissionError — OS access denied
open("/root/secret")

# 9. MemoryError / RecursionError — system
# These extend BaseException indirectly via Error
# Usually NOT caught — let them crash

# 10. GeneratorExit — special
# Raised inside generator when .close() called
# Inherits BaseException (not Exception!)
# except Exception won't catch it`})}),e.jsx(i,{icon:"📋",title:"Cheatsheet",children:e.jsx(x,{items:[{label:"try/except/else/finally",value:"else = no exception; finally = always"},{label:"except (A, B) as e",value:"Multiple types ek saath"},{label:"raise",value:"Re-raise same exception (no info lost)"},{label:"raise X from Y",value:"Exception chaining — root cause visible"},{label:"raise X from None",value:"Suppress original context"},{label:"class MyErr(Exception)",value:"Custom exception with structure"},{label:"e.args, str(e)",value:"Exception object attributes"},{label:"Bare except:",value:"NEVER — blocks Ctrl+C too"},{label:"finally + return",value:"TRAP — suppresses pending exception"},{label:"exc_info=True",value:"logging mein full traceback log"}]})}),e.jsx(i,{icon:"⚡",title:"Quick Recall",children:e.jsx(d,{children:e.jsx(g,{})})}),e.jsx(i,{icon:"🔗",title:"Connected Topics",children:e.jsx(p,{from:{title:"Generators",description:"StopIteration — generator protocol",href:"/roadmap/topic/python-generators/0"},to:{title:"Context Manager",description:"__exit__ exception handling",href:"/roadmap/topic/python-context-manager/0"}})})]})}export{_ as default};
