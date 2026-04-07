import {
  NoteLayout,
  SectionBlock,
  MentalModel,
  CodeBlock,
  TrapBox,
  Cheatsheet,
  QuickRecall,
  ConnectedTopics,
  InfoBox,
  StepsBlock,
  HoodBox,
} from '../../components/notes'

const C = {
  purple: '#7c3aed',
  purpleLight: '#a78bfa',
  blue: '#3b82f6',
  blueLight: '#93c5fd',
  green: '#10b981',
  greenLight: '#6ee7b7',
  orange: '#f59e0b',
  orangeLight: '#fcd34d',
  red: '#ef4444',
  muted: '#94a3b8',
  text: '#e2e8f0',
  white: '#f8fafc',
  border: '#0f3460',
}

function DecoratorFlowSVG() {
  return (
    <svg viewBox="0 0 520 280" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes dfSlide { 0%{opacity:0;transform:translateX(-12px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes dfGlow { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.35} }
          .df1{animation:dfSlide .4s .1s ease both}
          .df2{animation:dfSlide .4s .4s ease both}
          .df3{animation:dfSlide .4s .7s ease both}
          .df4{animation:dfSlide .4s 1.0s ease both}
          .df-glow{animation:dfGlow 2s ease-in-out infinite}
        `}</style>
        <marker id="dfArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Decorator = Function Wrapper</text>

      {/* Original function */}
      <g className="df1">
        <rect x="15" y="35" width="155" height="50" rx="8" fill={C.blue} fillOpacity=".15" stroke={C.blue} strokeWidth="1.5"/>
        <text x="92" y="58" textAnchor="middle" fill={C.blueLight} fontSize="12" fontWeight="700">greet(name)</text>
        <text x="92" y="74" textAnchor="middle" fill={C.muted} fontSize="10">original function</text>
      </g>

      {/* Arrow: original → decorator */}
      <line x1="172" y1="60" x2="192" y2="60" stroke={C.orange} strokeWidth="2" className="df2" markerEnd="url(#dfArr)"/>
      <text x="182" y="52" textAnchor="middle" fill={C.orange} fontSize="9">passed to</text>

      {/* Decorator */}
      <g className="df2">
        <rect x="195" y="35" width="155" height="50" rx="8" fill={C.purple} fillOpacity=".15" stroke={C.purple} strokeWidth="1.5"/>
        <text x="272" y="58" textAnchor="middle" fill={C.purpleLight} fontSize="12" fontWeight="700">@log_calls</text>
        <text x="272" y="74" textAnchor="middle" fill={C.muted} fontSize="10">decorator function</text>
      </g>

      {/* Arrow: decorator → wrapper */}
      <line x1="352" y1="60" x2="372" y2="60" stroke={C.orange} strokeWidth="2" className="df3" markerEnd="url(#dfArr)"/>
      <text x="362" y="52" textAnchor="middle" fill={C.orange} fontSize="9">returns</text>

      {/* Wrapper */}
      <g className="df3 df-glow">
        <rect x="375" y="35" width="135" height="50" rx="8" fill={C.green} fillOpacity=".15" stroke={C.green} strokeWidth="1.5"/>
        <text x="442" y="58" textAnchor="middle" fill={C.greenLight} fontSize="12" fontWeight="700">wrapper()</text>
        <text x="442" y="74" textAnchor="middle" fill={C.muted} fontSize="10">enhanced function</text>
      </g>

      {/* Code equivalence */}
      <rect x="15" y="105" width="490" height="160" rx="8" fill="#0f172a" stroke={C.border} strokeWidth="1"/>
      <text x="25" y="125" fill={C.muted} fontSize="10" fontFamily="monospace">{'# @decorator syntax:'}</text>
      <text x="25" y="143" fill={C.purpleLight} fontSize="10" fontFamily="monospace">@log_calls</text>
      <text x="25" y="160" fill={C.text} fontSize="10" fontFamily="monospace">def greet(name): ...</text>

      <text x="200" y="143" fill={C.muted} fontSize="11">≡ same as ≡</text>

      <text x="300" y="125" fill={C.muted} fontSize="10" fontFamily="monospace">{'# Manual equivalent:'}</text>
      <text x="300" y="143" fill={C.text} fontSize="10" fontFamily="monospace">def greet(name): ...</text>
      <text x="300" y="160" fill={C.purpleLight} fontSize="10" fontFamily="monospace">greet = log_calls(greet)</text>

      {/* Execution phases */}
      <text x="25" y="190" fill={C.orange} fontSize="10" fontWeight="700">DEFINITION TIME:</text>
      <text x="130" y="190" fill={C.text} fontSize="10">@log_calls runs — greet = log_calls(greet)</text>
      <text x="25" y="210" fill={C.green} fontSize="10" fontWeight="700">CALL TIME:</text>
      <text x="130" y="210" fill={C.text} fontSize="10">greet("Divyesh") → wrapper("Divyesh") runs</text>
      <text x="130" y="228" fill={C.muted} fontSize="10">→ pre-logic → original greet() → post-logic</text>
      <text x="130" y="246" fill={C.muted} fontSize="10">→ return result</text>
    </svg>
  )
}

function StackingDecoratorsSVG() {
  return (
    <svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes sdLayers { 0%{opacity:0;transform:translateY(8px)} 100%{opacity:1;transform:translateY(0)} }
          .sd1{animation:sdLayers .4s .1s ease both}
          .sd2{animation:sdLayers .4s .4s ease both}
          .sd3{animation:sdLayers .4s .7s ease both}
          .sd4{animation:sdLayers .4s 1.0s ease both}
        `}</style>
        <marker id="sdArr" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
          <path d="M2,0 L6,0 L4,6 Z" fill={C.orange}/>
        </marker>
      </defs>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Stacking Decorators — Wrap Order</text>

      {/* Code side */}
      <rect x="15" y="32" width="220" height="115" rx="8" fill="#0f172a" stroke={C.border} strokeWidth="1"/>
      <text x="25" y="52" fill={C.purpleLight} fontSize="11" fontFamily="monospace">@timer</text>
      <text x="25" y="68" fill={C.blueLight} fontSize="11" fontFamily="monospace">@logger</text>
      <text x="25" y="84" fill={C.greenLight} fontSize="11" fontFamily="monospace">@validate</text>
      <text x="25" y="100" fill={C.text} fontSize="11" fontFamily="monospace">def process(data):</text>
      <text x="25" y="116" fill={C.text} fontSize="11" fontFamily="monospace">{'    ...'}</text>
      <text x="25" y="138" fill={C.muted} fontSize="10">Applied bottom → up</text>

      {/* Layers */}
      <g className="sd1">
        <rect x="255" y="35" width="250" height="32" rx="6" fill={C.purple} fillOpacity=".2" stroke={C.purple} strokeWidth="1.5"/>
        <text x="280" y="56" fill={C.purpleLight} fontSize="11" fontWeight="700">timer wrapper (outermost)</text>
      </g>
      <g className="sd2">
        <rect x="270" y="75" width="220" height="32" rx="6" fill={C.blue} fillOpacity=".2" stroke={C.blue} strokeWidth="1.5"/>
        <text x="290" y="96" fill={C.blueLight} fontSize="11" fontWeight="700">logger wrapper</text>
      </g>
      <g className="sd3">
        <rect x="285" y="115" width="190" height="32" rx="6" fill={C.green} fillOpacity=".2" stroke={C.green} strokeWidth="1.5"/>
        <text x="305" y="136" fill={C.greenLight} fontSize="11" fontWeight="700">validate wrapper</text>
      </g>
      <g className="sd4">
        <rect x="300" y="155" width="160" height="32" rx="6" fill={C.orange} fillOpacity=".2" stroke={C.orange} strokeWidth="1.5"/>
        <text x="320" y="176" fill={C.orangeLight} fontSize="11" fontWeight="700">process() — core</text>
      </g>

      {/* Call flow arrows */}
      <text x="260" y="205" textAnchor="middle" fill={C.muted} fontSize="10">Call: timer → logger → validate → process → validate → logger → timer</text>
    </svg>
  )
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Decorators</text>
      {[
        { x: 15, color: C.purple, title: 'What is it?', lines: ['Function → wrapper → enhanced', '@syntax = syntactic sugar', 'Definition time mein runs'] },
        { x: 185, color: C.orange, title: 'functools.wraps', lines: ['Without: __name__ breaks', 'With: metadata preserve', 'Always use on wrapper'] },
        { x: 355, color: C.green, title: 'Use Cases', lines: ['Logging, timing, auth', 'Cache (lru_cache)', 'Retry, rate limiting'] },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="110" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700">{col.title}</text>
          {col.lines.map((l, j) => (
            <text key={j} x={col.x + 10} y={68 + j * 22} fill={C.text} fontSize="10">{`→ ${l}`}</text>
          ))}
        </g>
      ))}
    </svg>
  )
}

export default function PythonDecorators0() {
  return (
    <NoteLayout title="Decorators — Wrapper Pattern" phase="0A" subtitle="Functions jo functions ko enhance karte hain — closure ka real-world use">

      <SectionBlock icon="🧠" title="Mental Model — Decorator Kya Hai?">
        <MentalModel
          analogy="Decorator = function ke bahar ek cover chadha do. Jaise phone cover — phone change nahi hota, but extra protection milti hai. Original function same rahta hai, wrapper extra kaam karta hai before/after."
          diagram={<DecoratorFlowSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🔬" title="Under the Hood — Closure hai andar">
        <HoodBox>
          <div className="space-y-2 text-sm text-content leading-relaxed">
            <p>Decorator ek <span className="text-purple-400 font-semibold">higher-order function</span> hai jo function leta hai, wrapper return karta hai.</p>
            <p>Wrapper ek <span className="text-blue-400 font-semibold">closure</span> hai — original func ko capture karta hai.</p>
            <p><span className="text-orange-400 font-semibold">@decorator</span> = syntactic sugar for <code className="font-code text-xs">func = decorator(func)</code></p>
            <p>Definition time pe: <span className="text-green-400 font-semibold">decorator runs once</span>, wrapper object store hota hai</p>
            <p>Call time pe: <span className="text-green-400 font-semibold">wrapper runs</span> every time function call hota hai</p>
          </div>
        </HoodBox>
      </SectionBlock>

      <SectionBlock icon="💻" title="Basic Decorator Pattern">
        <StepsBlock steps={[
          { title: "Outer function — decorator itself", description: "Takes a function as argument" },
          { title: "Inner wrapper function — the actual enhancement", description: "Calls original + adds behavior before/after" },
          { title: "Return wrapper — not wrapper()", description: "Return function object, not result" },
          { title: "@functools.wraps(func) — metadata preserve karo", description: "Without this, __name__, __doc__ break ho jaata hai" },
        ]} />
        <div className="mt-4">
          <CodeBlock code={`import functools

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
add.__doc__    # original docstring`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="⏱️" title="Real-World Decorators">
        <CodeBlock code={`import functools
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
    ...`} />
      </SectionBlock>

      <SectionBlock icon="📚" title="Stacking Decorators">
        <div className="space-y-4">
          <StackingDecoratorsSVG />
          <CodeBlock code={`@timer        # applied 3rd (outermost)
@logger       # applied 2nd
@validate     # applied 1st (innermost, closest to func)
def process(data):
    return data

# Equivalent to:
process = timer(logger(validate(process)))

# Call order:
# timer.wrapper → logger.wrapper → validate.wrapper → process
# ← validate.wrapper ← logger.wrapper ← timer.wrapper`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="⚙️" title="Parameterized Decorators">
        <div className="space-y-4">
          <InfoBox type="info" title="3 levels of nesting">
            Parameterized decorator = decorator jo decorator return karta hai. Outer = parameter lena, middle = func lena, inner = wrapper.
          </InfoBox>
          <CodeBlock code={`import functools

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

fibonacci(50)   # instant — cached results`} />
        </div>
      </SectionBlock>

      <SectionBlock icon="🪤" title="Decorator Traps">
        <TrapBox
          number={1}
          name="Return Value Lost — wrapper mein return bhool gaye"
          level="B"
          question="wrapper mein func() call kiya but return nahi kiya — kya hoga?"
          wrongAnswer="Original function ka result milega"
          correctAnswer="None milega! wrapper ka return value hi decorator ka return hota hai — agar return nahi likha to None ja raha hai caller ko."
          why="Decorator original function ko replace karta hai — wrapper hi call hota hai. Agar wrapper return nahi karta, caller ko None milta hai regardless of original function's return value."
          fix={<CodeBlock code={`# Wrong — return value lost!
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
    return wrapper`} />}
        />
        <TrapBox
          number={2}
          name="Missing @functools.wraps"
          level="M"
          question="@functools.wraps kyun zaruri hai?"
          wrongAnswer="Nahi hai zaruri — decorator kaam karta hai"
          correctAnswer="Without it: __name__, __doc__, __module__ sab 'wrapper' ban jaate hain — debugging aur introspection break"
          why="functools.wraps wrapper ko original function ka metadata copy karta hai. FastAPI, Flask jaise frameworks __name__ use karte hain routing ke liye — missing wraps = silent bugs."
          fix={<CodeBlock code={`def my_decorator(func):
    @functools.wraps(func)  # ← always add!
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper`} />}
        />
      </SectionBlock>

      <SectionBlock icon="🚫" title="When NOT to Use Decorators">
        <CodeBlock code={`# Decorators for INFRA concerns — good:
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
# @A @B def f(): print("X") → f() → prints: A, B, X`} />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: '@decorator', value: 'func = decorator(func) — syntactic sugar' },
          { label: 'wrapper(*args, **kwargs)', value: 'Forward all args to original' },
          { label: '@functools.wraps(func)', value: 'ALWAYS add — metadata preserve' },
          { label: 'Stacking', value: 'Bottom to top apply, top to bottom execute' },
          { label: '@repeat(n)', value: '3-level nesting for parameterized' },
          { label: '@lru_cache', value: 'Built-in memoization decorator' },
          { label: 'Definition time', value: 'Decorator once runs, wrapper object stored' },
          { label: 'Call time', value: 'wrapper() runs every call' },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: 'Closures', description: 'Decorators internally closures hain', href: '/roadmap/topic/python-functions/6' }}
          to={{ title: 'Generators', description: 'Next topic — lazy evaluation', href: '/roadmap/topic/python-generators/0' }}
        />
      </SectionBlock>

    </NoteLayout>
  )
}
