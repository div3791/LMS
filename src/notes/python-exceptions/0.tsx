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
  HoodBox,
  CompareBlock,
} from "../../components/notes";

const C = {
  purple: "#7c3aed",
  purpleLight: "#a78bfa",
  blue: "#3b82f6",
  blueLight: "#93c5fd",
  green: "#10b981",
  greenLight: "#6ee7b7",
  orange: "#f59e0b",
  orangeLight: "#fcd34d",
  red: "#ef4444",
  redLight: "#fca5a5",
  muted: "#94a3b8",
  text: "#e2e8f0",
  white: "#f8fafc",
  border: "#0f3460",
};

function TryCatchFlowSVG() {
  return (
    <svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes tcFlow { 0%{stroke-dashoffset:300} 100%{stroke-dashoffset:0} }
          @keyframes tcBlink { 0%,100%{opacity:.5} 50%{opacity:1} }
          .tc-flow{stroke-dasharray:300;animation:tcFlow 1.5s ease both}
          .tc-blink{animation:tcBlink 2s ease-in-out infinite}
        `}</style>
        <marker id="tcArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.orange}/>
        </marker>
        <marker id="tcRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.red}/>
        </marker>
        <marker id="tcGrn" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">try / except / else / finally — Flow</text>

      {/* try block */}
      <rect x="180" y="30" width="160" height="38" rx="7" fill={C.blue} fillOpacity=".15" stroke={C.blue} strokeWidth="1.5"/>
      <text x="260" y="53" textAnchor="middle" fill={C.blueLight} fontSize="12" fontWeight="700">try: block</text>

      {/* Decision diamond */}
      <polygon points="260,90 305,115 260,140 215,115" fill={C.orange} fillOpacity=".15" stroke={C.orange} strokeWidth="1.5"/>
      <text x="260" y="112" textAnchor="middle" fill={C.orangeLight} fontSize="10">Exception</text>
      <text x="260" y="126" textAnchor="middle" fill={C.orangeLight} fontSize="10">raised?</text>

      <line x1="260" y1="68" x2="260" y2="88" stroke={C.blue} strokeWidth="2" className="tc-flow" markerEnd="url(#tcArr)"/>

      {/* YES → except */}
      <line x1="215" y1="115" x2="80" y2="115" stroke={C.red} strokeWidth="2" className="tc-flow" markerEnd="url(#tcRed)"/>
      <text x="147" y="108" textAnchor="middle" fill={C.redLight} fontSize="10">YES</text>
      <rect x="15" y="100" width="65" height="30" rx="6" fill={C.red} fillOpacity=".15" stroke={C.red} strokeWidth="1.5"/>
      <text x="47" y="119" textAnchor="middle" fill={C.redLight} fontSize="11" fontWeight="700">except</text>

      {/* NO → else */}
      <line x1="305" y1="115" x2="425" y2="115" stroke={C.green} strokeWidth="2" className="tc-flow" markerEnd="url(#tcGrn)"/>
      <text x="365" y="108" textAnchor="middle" fill={C.greenLight} fontSize="10">NO</text>
      <rect x="427" y="100" width="75" height="30" rx="6" fill={C.green} fillOpacity=".15" stroke={C.green} strokeWidth="1.5"/>
      <text x="464" y="119" textAnchor="middle" fill={C.greenLight} fontSize="11" fontWeight="700">else</text>

      {/* Both → finally */}
      <line x1="47" y1="130" x2="47" y2="175" stroke={C.muted} strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#tcArr)"/>
      <line x1="47" y1="175" x2="200" y2="175" stroke={C.muted} strokeWidth="1.5" strokeDasharray="4"/>
      <line x1="464" y1="130" x2="464" y2="175" stroke={C.muted} strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#tcArr)"/>
      <line x1="464" y1="175" x2="320" y2="175" stroke={C.muted} strokeWidth="1.5" strokeDasharray="4"/>
      <line x1="260" y1="140" x2="260" y2="170" stroke={C.orange} strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#tcArr)"/>

      <rect x="180" y="170" width="160" height="38" rx="7" fill={C.purple} fillOpacity=".15" stroke={C.purple} strokeWidth="1.5"/>
      <text x="260" y="191" textAnchor="middle" fill={C.purpleLight} fontSize="12" fontWeight="700">finally: ALWAYS runs</text>
      <text x="260" y="206" textAnchor="middle" fill={C.muted} fontSize="10">even on exception / return</text>

      <text x="47" y="145" textAnchor="middle" fill={C.redLight} fontSize="9">handle it</text>
      <text x="464" y="145" textAnchor="middle" fill={C.greenLight} fontSize="9">no exception</text>
    </svg>
  );
}

function ExceptionHierarchySVG() {
  return (
    <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes ehFade { 0%{opacity:0;transform:translateY(-5px)} 100%{opacity:1;transform:translateY(0)} }
          .eh1{animation:ehFade .3s .1s ease both}
          .eh2{animation:ehFade .3s .3s ease both}
          .eh3{animation:ehFade .3s .5s ease both}
          .eh4{animation:ehFade .3s .7s ease both}
        `}</style>
      </defs>
      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Exception Hierarchy</text>

      {/* BaseException */}
      <rect x="175" y="22" width="150" height="26" rx="6" fill={C.red} fillOpacity=".2" stroke={C.red} strokeWidth="1.5" className="eh1"/>
      <text x="250" y="39" textAnchor="middle" fill={C.redLight} fontSize="11" fontWeight="700">BaseException</text>

      <line x1="250" y1="48" x2="250" y2="58" stroke={C.muted} strokeWidth="1"/>

      {/* Exception + SystemExit etc */}
      <rect x="85" y="58" width="130" height="24" rx="5" fill={C.orange} fillOpacity=".15" stroke={C.orange} strokeWidth="1.2" className="eh2"/>
      <text x="150" y="74" textAnchor="middle" fill={C.orangeLight} fontSize="10" fontWeight="700">Exception</text>
      <rect x="235" y="58" width="120" height="24" rx="5" fill={C.muted} fillOpacity=".2" stroke={C.muted} strokeWidth="1.2" className="eh2"/>
      <text x="295" y="74" textAnchor="middle" fill={C.muted} fontSize="10">SystemExit / KeyboardInterrupt</text>
      <line x1="175" y1="54" x2="155" y2="58" stroke={C.muted} strokeWidth="1"/>
      <line x1="250" y1="48" x2="295" y2="58" stroke={C.muted} strokeWidth="1" strokeDasharray="3"/>

      {/* ValueError, TypeError, etc */}
      <line x1="150" y1="82" x2="150" y2="96" stroke={C.muted} strokeWidth="1"/>
      {[
        { x: 15, label: "ValueError", color: C.blue },
        { x: 105, label: "TypeError", color: C.purple },
        { x: 195, label: "KeyError", color: C.green },
        { x: 285, label: "AttributeError", color: C.orange },
        { x: 385, label: "ImportError", color: C.red },
      ].map((item) => (
        <g key={item.label} className="eh3">
          <rect x={item.x} y="96" width={item.label === "AttributeError" ? 115 : 95} height="22" rx="4" fill={item.color} fillOpacity=".12" stroke={item.color} strokeWidth="1"/>
          <text x={item.x + (item.label === "AttributeError" ? 57 : 47)} y="111" textAnchor="middle" fill={item.color} fontSize="9" fontFamily="monospace">{item.label}</text>
          <line x1="150" y1="96" x2={item.x + (item.label === "AttributeError" ? 57 : 47)} y2="96" stroke={C.muted} strokeWidth="0.8" strokeDasharray="3"/>
        </g>
      ))}

      {/* Built-in examples */}
      <text x="260" y="142" textAnchor="middle" fill={C.muted} fontSize="10">Common built-in exceptions (all inherit from Exception):</text>
      {[
        { label: "ValueError", ex: "int('abc')" },
        { label: "TypeError", ex: "1 + 'a'" },
        { label: "KeyError", ex: "d['missing']" },
        { label: "IndexError", ex: "lst[99]" },
        { label: "AttributeError", ex: "None.upper()" },
      ].map((item, i) => (
        <g key={item.label} className="eh4">
          <text x={15 + (i % 3) * 175} y={158 + Math.floor(i / 3) * 22} fill={C.muted} fontSize="9" fontFamily="monospace">
            <tspan fill={C.orange}>{item.label}</tspan>: {item.ex}
          </text>
        </g>
      ))}
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="160" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Exceptions</text>
      {[
        { x: 15, color: C.orange, title: "Structure", lines: ["try → except → else → finally", "else: sirf no-exception pe", "finally: ALWAYS — cleanup"] },
        { x: 185, color: C.red, title: "raise", lines: ["raise ValueError('msg')", "raise  (re-raise same exc)", "raise X from Y (chaining)"] },
        { x: 355, color: C.purple, title: "Custom", lines: ["class MyErr(Exception)", "args, str(e), type(e)", "Log don't swallow silently"] },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="115" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700">{col.title}</text>
          {col.lines.map((l, j) => (
            <text key={j} x={col.x + 10} y={68 + j * 22} fill={C.text} fontSize="10">{`→ ${l}`}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function PythonExceptions0() {
  return (
    <NoteLayout title="Exception Handling — Complete Guide" phase="0A" subtitle="try/except/else/finally, custom exceptions, aur production-grade error handling">

      <SectionBlock icon="🧠" title="Mental Model — Exception Kya Hai?">
        <MentalModel
          analogy="Exception = emergency alarm. Circus mein trapeze artist ke neeche safety net hoti hai (try/except). Agar gira → net pakad leti hai (except). Nahi gira → clap milta hai (else). Curtain down hona to hoga hi (finally) — chahe kuch bhi ho."
          diagram={<TryCatchFlowSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🌳" title="Exception Hierarchy">
        <ExceptionHierarchySVG />
        <InfoBox type="info" title="BaseException vs Exception">
          KeyboardInterrupt (Ctrl+C) aur SystemExit BaseException se inherit karte hain, Exception se nahi. Isliye <code>except Exception</code> se ye catch nahi hote — intentional design hai.
        </InfoBox>
      </SectionBlock>

      <SectionBlock icon="💻" title="try / except / else / finally — Complete Structure">
        <CodeBlock code={`# Full structure
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
    type(e).__name__ # "ValueError"`} />
      </SectionBlock>

      <SectionBlock icon="🚀" title="raise — Exception Raise Karna">
        <CodeBlock code={`# Basic raise
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
    return age`} />
      </SectionBlock>

      <SectionBlock icon="🏗️" title="Custom Exceptions — Production Grade">
        <CodeBlock code={`# Simple custom exception
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
    handle(e)  # catches any subclass`} />
      </SectionBlock>

      <SectionBlock icon="📡" title="Exception Propagation — Stack Unwinding">
        <HoodBox title="How Python finds a handler">
          <div className="space-y-2 text-sm text-content leading-relaxed">
            <p>1. Exception occurs → <span className="text-orange-400 font-semibold">exception object</span> create hota hai (type + message + traceback)</p>
            <p>2. Python current frame mein handler dhundhta hai → nahi mila → <span className="text-red-400 font-semibold">frame pop</span></p>
            <p>3. Calling frame mein dhundhta hai → nahi mila → woh bhi pop → aur upar</p>
            <p>4. Koi bhi frame mein handler nahi mila → <span className="text-red-400 font-semibold">program crash</span> + full traceback print</p>
            <p>5. Yeh process = <span className="text-purple-400 font-semibold">Stack Unwinding</span> — stack upar ki taraf unroll hoti hai</p>
          </div>
        </HoodBox>
        <CodeBlock code={`def a():
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
# ZeroDivisionError: division by zero`} />
      </SectionBlock>

      <SectionBlock icon="🔗" title="Exception Chaining — raise X from Y">
        <CompareBlock
          bad={<CodeBlock code={`# Swallowing context — bad!
try:
    connect_db()
except Exception:
    raise RuntimeError("Failed")
# Original DB error lost!
# Debugging impossible`} />}
          good={<CodeBlock code={`# Preserving chain — good!
try:
    connect_db()
except Exception as e:
    raise RuntimeError("DB connection failed") from e
# Traceback shows both errors
# "The above exception was the direct cause"`} />}
          badLabel="Context lost — debugging nightmare"
          goodLabel="Chain preserved — root cause visible"
        />
      </SectionBlock>

      <SectionBlock icon="🏭" title="Production Patterns">
        <CodeBlock code={`import logging
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
            time.sleep(2 ** attempt)  # exponential backoff`} />
      </SectionBlock>

      <SectionBlock icon="🔁" title="Loop + Exception — Retry Pattern">
        <CodeBlock code={`# Retry loop — user input validation
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
        print(f"Attempt {attempt+1} failed, retrying...")`} />
      </SectionBlock>

      <SectionBlock icon="💸" title="Exception Cost — Performance Trap">
        <CompareBlock
          bad={<CodeBlock code={`# Using exceptions for normal control flow — SLOW
def get_value(d, key):
    try:
        return d[key]   # exception path every miss
    except KeyError:
        return None

# Also bad:
try:
    val = int(x)  # if x is often not int
except ValueError:
    val = 0  # overkill for common case`} />}
          good={<CodeBlock code={`# dict.get() — no exception overhead
def get_value(d, key):
    return d.get(key)   # built-in, O(1), no exception

# Type check first (LBYL — Look Before You Leap)
val = int(x) if x.isdigit() else 0

# Rule: exceptions for EXCEPTIONAL situations
# Not for normal program flow`} />}
          badLabel="EAFP overuse — exception is expensive"
          goodLabel="LBYL or .get() — no exception path"
        />
      </SectionBlock>

      <SectionBlock icon="🪤" title="Exception Traps">
        <TrapBox
          number={1}
          name="Bare except — Sab Kuch Pakad Lo"
          level="B"
          question="except: (bina type ke) aur except Exception: mein kya fark hai?"
          wrongAnswer="Same hai — dono sab exceptions pakadten hain"
          correctAnswer="Bare except: KeyboardInterrupt aur SystemExit bhi pakad leta hai! Program Ctrl+C se bhi band nahi hoga."
          why="Bare except BaseException se catch karta hai — including system signals. Hamesha specific exception ya except Exception use karo."
          fix={<CodeBlock code={`# Wrong — Ctrl+C bhi block ho jaata hai
try:
    run()
except:  # ← NEVER do this
    pass

# Right
try:
    run()
except Exception as e:
    log(e)`} />}
        />
        <TrapBox
          number={2}
          name="Silent Failure — except: pass"
          level="B"
          question="except: pass kyun dangerous hai?"
          wrongAnswer="Safe hai — exception handle ho gayi"
          correctAnswer="Bugs silently disappear ho jaate hain! Stack trace lost, root cause chhup jaata hai — production mein debugging impossible."
          why="Bare except with pass = blindfold lagaana. Real errors bhi swallow ho jaate hain. Always log karo ya specific handle karo."
          fix={<CodeBlock code={`# NEVER do this
try:
    something()
except:
    pass  # bugs vanish silently!

# Minimum: log it
try:
    something()
except Exception:
    logger.exception("Unexpected error")  # full traceback
    raise  # re-raise for caller to handle`} />}
        />
        <TrapBox
          number={3}
          name="Over-broad except — Sab Pakad Lo"
          level="M"
          question="except Exception: hamesha theek hai?"
          wrongAnswer="Haan — broad catch safe hai"
          correctAnswer="Agar aap sirf ValueError expect karte hain, except Exception se unexpected bugs bhi chhup jaate hain."
          why="Specific exceptions pakadne se unexpected errors visible rehte hain. Broad catch = hiding bugs."
          fix={<CodeBlock code={`# Over-broad — unexpected errors hide
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
    raise`} />}
        />
        <TrapBox
          number={4}
          name="finally mein return — Exception Suppress"
          level="S"
          question="finally mein return statement ho to kya hota hai?"
          wrongAnswer="Exception raise hogi aur return value milegi"
          correctAnswer="finally ka return exception ko suppress kar deta hai! Exception silently lost ho jaati hai."
          why="finally ka return/break/continue pending exception ko cancel kar deta hai — extremely subtle bug."
          fix={<CodeBlock code={`def bad():
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
        cleanup()  # sirf cleanup, return nahi`} />}
        />
      </SectionBlock>

      <SectionBlock icon="📋" title="Production Exceptions — Field Guide">
        <CodeBlock code={`# Most common exceptions in production Python:

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
# except Exception won't catch it`} />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "try/except/else/finally", value: "else = no exception; finally = always" },
          { label: "except (A, B) as e", value: "Multiple types ek saath" },
          { label: "raise", value: "Re-raise same exception (no info lost)" },
          { label: "raise X from Y", value: "Exception chaining — root cause visible" },
          { label: "raise X from None", value: "Suppress original context" },
          { label: "class MyErr(Exception)", value: "Custom exception with structure" },
          { label: "e.args, str(e)", value: "Exception object attributes" },
          { label: "Bare except:", value: "NEVER — blocks Ctrl+C too" },
          { label: "finally + return", value: "TRAP — suppresses pending exception" },
          { label: "exc_info=True", value: "logging mein full traceback log" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Generators", description: "StopIteration — generator protocol", href: "/roadmap/topic/python-generators/0" }}
          to={{ title: "Context Manager", description: "__exit__ exception handling", href: "/roadmap/topic/python-context-manager/0" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
