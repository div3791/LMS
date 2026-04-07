import{j as e}from"./index-8eB8ukBA.js";import{N as l,S as r,C as i,a as c,Q as d,b as f}from"./ConnectedTopics-SPFj48ZS.js";import{M as p}from"./MentalModel-7u6gqoEs.js";import{T as o}from"./TrapBox-cI68XYa-.js";import{H as u}from"./HoodBox-BDvAwi0T.js";import{S as h}from"./StepsBlock-zJTdfOU-.js";import{I as x}from"./InfoBox-CP92M4gW.js";const t={purple:"#7c3aed",purpleLight:"#a78bfa",blue:"#3b82f6",blueLight:"#93c5fd",green:"#10b981",greenLight:"#6ee7b7",orange:"#f59e0b",orangeLight:"#fcd34d",muted:"#94a3b8",text:"#e2e8f0",white:"#f8fafc",border:"#0f3460"};function g(){return e.jsxs("svg",{viewBox:"0 0 520 280",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes dfSlide { 0%{opacity:0;transform:translateX(-12px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes dfGlow { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.35} }
          .df1{animation:dfSlide .4s .1s ease both}
          .df2{animation:dfSlide .4s .4s ease both}
          .df3{animation:dfSlide .4s .7s ease both}
          .df4{animation:dfSlide .4s 1.0s ease both}
          .df-glow{animation:dfGlow 2s ease-in-out infinite}
        `}),e.jsx("marker",{id:"dfArr",markerWidth:"8",markerHeight:"8",refX:"6",refY:"3",orient:"auto",children:e.jsx("path",{d:"M0,0 L8,3 L0,6 Z",fill:t.orange})})]}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Decorator = Function Wrapper"}),e.jsxs("g",{className:"df1",children:[e.jsx("rect",{x:"15",y:"35",width:"155",height:"50",rx:"8",fill:t.blue,fillOpacity:".15",stroke:t.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"92",y:"58",textAnchor:"middle",fill:t.blueLight,fontSize:"12",fontWeight:"700",children:"greet(name)"}),e.jsx("text",{x:"92",y:"74",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"original function"})]}),e.jsx("line",{x1:"172",y1:"60",x2:"192",y2:"60",stroke:t.orange,strokeWidth:"2",className:"df2",markerEnd:"url(#dfArr)"}),e.jsx("text",{x:"182",y:"52",textAnchor:"middle",fill:t.orange,fontSize:"9",children:"passed to"}),e.jsxs("g",{className:"df2",children:[e.jsx("rect",{x:"195",y:"35",width:"155",height:"50",rx:"8",fill:t.purple,fillOpacity:".15",stroke:t.purple,strokeWidth:"1.5"}),e.jsx("text",{x:"272",y:"58",textAnchor:"middle",fill:t.purpleLight,fontSize:"12",fontWeight:"700",children:"@log_calls"}),e.jsx("text",{x:"272",y:"74",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"decorator function"})]}),e.jsx("line",{x1:"352",y1:"60",x2:"372",y2:"60",stroke:t.orange,strokeWidth:"2",className:"df3",markerEnd:"url(#dfArr)"}),e.jsx("text",{x:"362",y:"52",textAnchor:"middle",fill:t.orange,fontSize:"9",children:"returns"}),e.jsxs("g",{className:"df3 df-glow",children:[e.jsx("rect",{x:"375",y:"35",width:"135",height:"50",rx:"8",fill:t.green,fillOpacity:".15",stroke:t.green,strokeWidth:"1.5"}),e.jsx("text",{x:"442",y:"58",textAnchor:"middle",fill:t.greenLight,fontSize:"12",fontWeight:"700",children:"wrapper()"}),e.jsx("text",{x:"442",y:"74",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"enhanced function"})]}),e.jsx("rect",{x:"15",y:"105",width:"490",height:"160",rx:"8",fill:"#0f172a",stroke:t.border,strokeWidth:"1"}),e.jsx("text",{x:"25",y:"125",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"# @decorator syntax:"}),e.jsx("text",{x:"25",y:"143",fill:t.purpleLight,fontSize:"10",fontFamily:"monospace",children:"@log_calls"}),e.jsx("text",{x:"25",y:"160",fill:t.text,fontSize:"10",fontFamily:"monospace",children:"def greet(name): ..."}),e.jsx("text",{x:"200",y:"143",fill:t.muted,fontSize:"11",children:"≡ same as ≡"}),e.jsx("text",{x:"300",y:"125",fill:t.muted,fontSize:"10",fontFamily:"monospace",children:"# Manual equivalent:"}),e.jsx("text",{x:"300",y:"143",fill:t.text,fontSize:"10",fontFamily:"monospace",children:"def greet(name): ..."}),e.jsx("text",{x:"300",y:"160",fill:t.purpleLight,fontSize:"10",fontFamily:"monospace",children:"greet = log_calls(greet)"}),e.jsx("text",{x:"25",y:"190",fill:t.orange,fontSize:"10",fontWeight:"700",children:"DEFINITION TIME:"}),e.jsx("text",{x:"130",y:"190",fill:t.text,fontSize:"10",children:"@log_calls runs — greet = log_calls(greet)"}),e.jsx("text",{x:"25",y:"210",fill:t.green,fontSize:"10",fontWeight:"700",children:"CALL TIME:"}),e.jsx("text",{x:"130",y:"210",fill:t.text,fontSize:"10",children:'greet("Divyesh") → wrapper("Divyesh") runs'}),e.jsx("text",{x:"130",y:"228",fill:t.muted,fontSize:"10",children:"→ pre-logic → original greet() → post-logic"}),e.jsx("text",{x:"130",y:"246",fill:t.muted,fontSize:"10",children:"→ return result"})]})}function m(){return e.jsxs("svg",{viewBox:"0 0 520 220",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsxs("defs",{children:[e.jsx("style",{children:`
          @keyframes sdLayers { 0%{opacity:0;transform:translateY(8px)} 100%{opacity:1;transform:translateY(0)} }
          .sd1{animation:sdLayers .4s .1s ease both}
          .sd2{animation:sdLayers .4s .4s ease both}
          .sd3{animation:sdLayers .4s .7s ease both}
          .sd4{animation:sdLayers .4s 1.0s ease both}
        `}),e.jsx("marker",{id:"sdArr",markerWidth:"8",markerHeight:"8",refX:"4",refY:"6",orient:"auto",children:e.jsx("path",{d:"M2,0 L6,0 L4,6 Z",fill:t.orange})})]}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"13",fontWeight:"700",children:"Stacking Decorators — Wrap Order"}),e.jsx("rect",{x:"15",y:"32",width:"220",height:"115",rx:"8",fill:"#0f172a",stroke:t.border,strokeWidth:"1"}),e.jsx("text",{x:"25",y:"52",fill:t.purpleLight,fontSize:"11",fontFamily:"monospace",children:"@timer"}),e.jsx("text",{x:"25",y:"68",fill:t.blueLight,fontSize:"11",fontFamily:"monospace",children:"@logger"}),e.jsx("text",{x:"25",y:"84",fill:t.greenLight,fontSize:"11",fontFamily:"monospace",children:"@validate"}),e.jsx("text",{x:"25",y:"100",fill:t.text,fontSize:"11",fontFamily:"monospace",children:"def process(data):"}),e.jsx("text",{x:"25",y:"116",fill:t.text,fontSize:"11",fontFamily:"monospace",children:"    ..."}),e.jsx("text",{x:"25",y:"138",fill:t.muted,fontSize:"10",children:"Applied bottom → up"}),e.jsxs("g",{className:"sd1",children:[e.jsx("rect",{x:"255",y:"35",width:"250",height:"32",rx:"6",fill:t.purple,fillOpacity:".2",stroke:t.purple,strokeWidth:"1.5"}),e.jsx("text",{x:"280",y:"56",fill:t.purpleLight,fontSize:"11",fontWeight:"700",children:"timer wrapper (outermost)"})]}),e.jsxs("g",{className:"sd2",children:[e.jsx("rect",{x:"270",y:"75",width:"220",height:"32",rx:"6",fill:t.blue,fillOpacity:".2",stroke:t.blue,strokeWidth:"1.5"}),e.jsx("text",{x:"290",y:"96",fill:t.blueLight,fontSize:"11",fontWeight:"700",children:"logger wrapper"})]}),e.jsxs("g",{className:"sd3",children:[e.jsx("rect",{x:"285",y:"115",width:"190",height:"32",rx:"6",fill:t.green,fillOpacity:".2",stroke:t.green,strokeWidth:"1.5"}),e.jsx("text",{x:"305",y:"136",fill:t.greenLight,fontSize:"11",fontWeight:"700",children:"validate wrapper"})]}),e.jsxs("g",{className:"sd4",children:[e.jsx("rect",{x:"300",y:"155",width:"160",height:"32",rx:"6",fill:t.orange,fillOpacity:".2",stroke:t.orange,strokeWidth:"1.5"}),e.jsx("text",{x:"320",y:"176",fill:t.orangeLight,fontSize:"11",fontWeight:"700",children:"process() — core"})]}),e.jsx("text",{x:"260",y:"205",textAnchor:"middle",fill:t.muted,fontSize:"10",children:"Call: timer → logger → validate → process → validate → logger → timer"})]})}function w(){return e.jsxs("svg",{viewBox:"0 0 520 155",xmlns:"http://www.w3.org/2000/svg",className:"w-full",children:[e.jsx("rect",{x:"0",y:"0",width:"520",height:"155",rx:"10",fill:"#0f172a",stroke:t.border,strokeWidth:"1.5"}),e.jsx("text",{x:"260",y:"22",textAnchor:"middle",fill:t.white,fontSize:"12",fontWeight:"700",children:"Quick Recall — Decorators"}),[{x:15,color:t.purple,title:"What is it?",lines:["Function → wrapper → enhanced","@syntax = syntactic sugar","Definition time mein runs"]},{x:185,color:t.orange,title:"functools.wraps",lines:["Without: __name__ breaks","With: metadata preserve","Always use on wrapper"]},{x:355,color:t.green,title:"Use Cases",lines:["Logging, timing, auth","Cache (lru_cache)","Retry, rate limiting"]}].map(a=>e.jsxs("g",{children:[e.jsx("rect",{x:a.x,y:"32",width:"155",height:"110",rx:"6",fill:a.color,fillOpacity:".08",stroke:a.color,strokeWidth:"1.2"}),e.jsx("text",{x:a.x+77,y:"50",textAnchor:"middle",fill:a.color,fontSize:"11",fontWeight:"700",children:a.title}),a.lines.map((s,n)=>e.jsx("text",{x:a.x+10,y:68+n*22,fill:t.text,fontSize:"10",children:`→ ${s}`},n))]},a.title))]})}function z(){return e.jsxs(l,{title:"Decorators — Wrapper Pattern",phase:"0A",subtitle:"Functions jo functions ko enhance karte hain — closure ka real-world use",children:[e.jsx(r,{icon:"🧠",title:"Mental Model — Decorator Kya Hai?",children:e.jsx(p,{analogy:"Decorator = function ke bahar ek cover chadha do. Jaise phone cover — phone change nahi hota, but extra protection milti hai. Original function same rahta hai, wrapper extra kaam karta hai before/after.",diagram:e.jsx(g,{})})}),e.jsx(r,{icon:"🔬",title:"Under the Hood — Closure hai andar",children:e.jsx(u,{children:e.jsxs("div",{className:"space-y-2 text-sm text-content leading-relaxed",children:[e.jsxs("p",{children:["Decorator ek ",e.jsx("span",{className:"text-purple-400 font-semibold",children:"higher-order function"})," hai jo function leta hai, wrapper return karta hai."]}),e.jsxs("p",{children:["Wrapper ek ",e.jsx("span",{className:"text-blue-400 font-semibold",children:"closure"})," hai — original func ko capture karta hai."]}),e.jsxs("p",{children:[e.jsx("span",{className:"text-orange-400 font-semibold",children:"@decorator"})," = syntactic sugar for ",e.jsx("code",{className:"font-code text-xs",children:"func = decorator(func)"})]}),e.jsxs("p",{children:["Definition time pe: ",e.jsx("span",{className:"text-green-400 font-semibold",children:"decorator runs once"}),", wrapper object store hota hai"]}),e.jsxs("p",{children:["Call time pe: ",e.jsx("span",{className:"text-green-400 font-semibold",children:"wrapper runs"})," every time function call hota hai"]})]})})}),e.jsxs(r,{icon:"💻",title:"Basic Decorator Pattern",children:[e.jsx(h,{steps:[{title:"Outer function — decorator itself",description:"Takes a function as argument"},{title:"Inner wrapper function — the actual enhancement",description:"Calls original + adds behavior before/after"},{title:"Return wrapper — not wrapper()",description:"Return function object, not result"},{title:"@functools.wraps(func) — metadata preserve karo",description:"Without this, __name__, __doc__ break ho jaata hai"}]}),e.jsx("div",{className:"mt-4",children:e.jsx(i,{code:`import functools

def log_calls(func):
    @functools.wraps(func)    # metadata preserve
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}({args}, {kwargs})")
        result = func(*args, **kwargs)  # original call
        print(f"Returned: {result}")
        return result
    return wrapper   # function object, not result!

@log_calls
def add(a, b):
    return a + b

add(3, 5)
# Calling add((3, 5), {})
# Returned: 8

# Verify metadata preserved:
add.__name__   # 'add' (not 'wrapper')
add.__doc__    # original docstring`})})]}),e.jsx(r,{icon:"⏱️",title:"Real-World Decorators",children:e.jsx(i,{code:`import functools
import time

# 1. Timer decorator
def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        end = time.perf_counter()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

# 2. Retry decorator
def retry(max_attempts=3, delay=1):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise
                    time.sleep(delay)
        return wrapper
    return decorator

# 3. Auth decorator
def require_auth(func):
    @functools.wraps(func)
    def wrapper(request, *args, **kwargs):
        if not request.user.is_authenticated:
            raise PermissionError("Login required")
        return func(request, *args, **kwargs)
    return wrapper

@timer
@retry(max_attempts=3, delay=0.5)
@require_auth
def process_payment(request, amount):
    ...`})}),e.jsx(r,{icon:"📚",title:"Stacking Decorators",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{}),e.jsx(i,{code:`@timer        # applied 3rd (outermost)
@logger       # applied 2nd
@validate     # applied 1st (innermost, closest to func)
def process(data):
    return data

# Equivalent to:
process = timer(logger(validate(process)))

# Call order:
# timer.wrapper → logger.wrapper → validate.wrapper → process
# ← validate.wrapper ← logger.wrapper ← timer.wrapper`})]})}),e.jsx(r,{icon:"⚙️",title:"Parameterized Decorators",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(x,{type:"info",title:"3 levels of nesting",children:"Parameterized decorator = decorator jo decorator return karta hai. Outer = parameter lena, middle = func lena, inner = wrapper."}),e.jsx(i,{code:`import functools

def repeat(n):           # level 1 — takes parameters
    def decorator(func): # level 2 — takes function
        @functools.wraps(func)
        def wrapper(*args, **kwargs):  # level 3 — runs on call
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello {name}!")

greet("Divyesh")  # prints 3 times

# functools.lru_cache — built-in parameterized decorator
from functools import lru_cache

@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2: return n
    return fibonacci(n-1) + fibonacci(n-2)

fibonacci(50)   # instant — cached results`})]})}),e.jsxs(r,{icon:"🪤",title:"Decorator Traps",children:[e.jsx(o,{number:1,name:"Return Value Lost — wrapper mein return bhool gaye",level:"B",question:"wrapper mein func() call kiya but return nahi kiya — kya hoga?",wrongAnswer:"Original function ka result milega",correctAnswer:"None milega! wrapper ka return value hi decorator ka return hota hai — agar return nahi likha to None ja raha hai caller ko.",why:"Decorator original function ko replace karta hai — wrapper hi call hota hai. Agar wrapper return nahi karta, caller ko None milta hai regardless of original function's return value.",fix:e.jsx(i,{code:`# Wrong — return value lost!
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("before")
        func(*args, **kwargs)   # ← result lost!
        print("after")
    return wrapper

# Right — always return result
def my_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("before")
        result = func(*args, **kwargs)
        print("after")
        return result   # ← return to caller!
    return wrapper`})}),e.jsx(o,{number:2,name:"Missing @functools.wraps",level:"M",question:"@functools.wraps kyun zaruri hai?",wrongAnswer:"Nahi hai zaruri — decorator kaam karta hai",correctAnswer:"Without it: __name__, __doc__, __module__ sab 'wrapper' ban jaate hain — debugging aur introspection break",why:"functools.wraps wrapper ko original function ka metadata copy karta hai. FastAPI, Flask jaise frameworks __name__ use karte hain routing ke liye — missing wraps = silent bugs.",fix:e.jsx(i,{code:`def my_decorator(func):
    @functools.wraps(func)  # ← always add!
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper`})})]}),e.jsx(r,{icon:"🚫",title:"When NOT to Use Decorators",children:e.jsx(i,{code:`# Decorators for INFRA concerns — good:
@authenticate      # security layer
@rate_limit(100)   # infrastructure
@log_request       # observability
@cache(ttl=60)     # performance
def get_user(): ...

# Decorators for BUSINESS LOGIC — bad:
@apply_discount_if_vip   # ← business rule hidden!
@validate_indian_gst     # ← domain logic in wrapper
def checkout(): ...
# Business logic should be in the function itself — visible!

# Also avoid decorators for:
# 1. Complex control flow — hard to debug
# 2. Heavy state management — use class instead
# 3. Things that change function signature — confusing

# Debug trick: print inside decorator to see import-time behavior
def deco(func):
    print(f"Decorating: {func.__name__}")  # runs at import!
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper

# Interview question — what prints?
# @A @B def f(): print("X") → f() → prints: A, B, X`})}),e.jsx(r,{icon:"📋",title:"Cheatsheet",children:e.jsx(c,{items:[{label:"@decorator",value:"func = decorator(func) — syntactic sugar"},{label:"wrapper(*args, **kwargs)",value:"Forward all args to original"},{label:"@functools.wraps(func)",value:"ALWAYS add — metadata preserve"},{label:"Stacking",value:"Bottom to top apply, top to bottom execute"},{label:"@repeat(n)",value:"3-level nesting for parameterized"},{label:"@lru_cache",value:"Built-in memoization decorator"},{label:"Definition time",value:"Decorator once runs, wrapper object stored"},{label:"Call time",value:"wrapper() runs every call"}]})}),e.jsx(r,{icon:"⚡",title:"Quick Recall",children:e.jsx(d,{children:e.jsx(w,{})})}),e.jsx(r,{icon:"🔗",title:"Connected Topics",children:e.jsx(f,{from:{title:"Closures",description:"Decorators internally closures hain",href:"/roadmap/topic/python-functions/6"},to:{title:"Generators",description:"Next topic — lazy evaluation",href:"/roadmap/topic/python-generators/0"}})})]})}export{z as default};
