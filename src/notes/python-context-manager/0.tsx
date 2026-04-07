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

function WithFlowSVG() {
  return (
    <svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes wfStep { 0%{opacity:0;transform:translateX(-8px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes wfPulse { 0%,100%{fill-opacity:.15} 50%{fill-opacity:.35} }
          .wf1{animation:wfStep .4s .1s ease both}
          .wf2{animation:wfStep .4s .4s ease both}
          .wf3{animation:wfStep .4s .7s ease both}
          .wf4{animation:wfStep .4s 1s ease both}
          .wf-body{animation:wfPulse 2s ease-in-out infinite}
        `}</style>
        <marker id="wfArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.blue} />
        </marker>
        <marker id="wfRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.red} />
        </marker>
      </defs>
      <text x="260" y="20" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">with Statement — Execution Flow</text>

      {/* Step 1: __enter__ */}
      <rect x="15" y="30" width="220" height="38" rx="7" fill={C.green} fillOpacity=".12" stroke={C.green} strokeWidth="1.5" className="wf1" />
      <text x="125" y="47" textAnchor="middle" fill={C.greenLight} fontSize="11" fontWeight="700">1. cm.__enter__()</text>
      <text x="125" y="62" textAnchor="middle" fill={C.muted} fontSize="10">setup, return resource (as target)</text>

      {/* Step 2: body */}
      <rect x="15" y="85" width="220" height="45" rx="7" fill={C.blue} fillOpacity=".12" stroke={C.blue} strokeWidth="1.5" className="wf-body" />
      <text x="125" y="102" textAnchor="middle" fill={C.blueLight} fontSize="11" fontWeight="700">2. with body runs</text>
      <text x="125" y="118" textAnchor="middle" fill={C.muted} fontSize="10">(resource available as alias)</text>

      <line x1="125" y1="68" x2="125" y2="83" stroke={C.green} strokeWidth="2" markerEnd="url(#wfArr)" />
      <line x1="125" y1="130" x2="125" y2="143" stroke={C.blue} strokeWidth="2" markerEnd="url(#wfArr)" />

      {/* Step 3: __exit__ */}
      <rect x="15" y="145" width="220" height="50" rx="7" fill={C.purple} fillOpacity=".12" stroke={C.purple} strokeWidth="1.5" className="wf3" />
      <text x="125" y="162" textAnchor="middle" fill={C.purpleLight} fontSize="11" fontWeight="700">3. cm.__exit__(exc_type, exc_val, tb)</text>
      <text x="125" y="177" textAnchor="middle" fill={C.muted} fontSize="10">cleanup always runs</text>
      <text x="125" y="191" textAnchor="middle" fill={C.muted} fontSize="10">return True → suppress exception</text>

      {/* Exception path */}
      <rect x="295" y="85" width="215" height="155" rx="8" fill={C.red} fillOpacity=".06" stroke={C.red} strokeWidth="1.2" className="wf4" />
      <text x="402" y="108" textAnchor="middle" fill={C.redLight} fontSize="11" fontWeight="700">If Exception in body:</text>
      <text x="302" y="130" fill={C.muted} fontSize="10">• __exit__(exc_type, exc_val, tb)</text>
      <text x="302" y="148" fill={C.muted} fontSize="10">• return True → suppress</text>
      <text x="302" y="166" fill={C.muted} fontSize="10">• return False/None → re-raise</text>
      <text x="302" y="184" fill={C.green} fontSize="10">• __exit__ guaranteed to run</text>
      <text x="302" y="202" fill={C.green} fontSize="10">• even if SystemExit!</text>

      <line x1="237" y1="108" x2="293" y2="108" stroke={C.red} strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#wfRed)" />
    </svg>
  );
}

function ContextManagerCompareSVG() {
  return (
    <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes cmPop { 0%{opacity:0;transform:scale(.95)} 100%{opacity:1;transform:scale(1)} }
          .cm1{animation:cmPop .4s .1s ease both}
          .cm2{animation:cmPop .4s .4s ease both}
        `}</style>
      </defs>
      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="700">Two Ways to Make a Context Manager</text>

      {/* Class-based */}
      <rect x="10" y="25" width="240" height="130" rx="8" fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeWidth="1.5" className="cm1" />
      <text x="130" y="44" textAnchor="middle" fill={C.blueLight} fontSize="11" fontWeight="700">Class-based Protocol</text>
      <text x="20" y="62" fill={C.muted} fontSize="10" fontFamily="monospace">class Timer:</text>
      <text x="20" y="78" fill={C.text} fontSize="10" fontFamily="monospace">  def __enter__(self):</text>
      <text x="20" y="94" fill={C.greenLight} fontSize="10" fontFamily="monospace">    self.start = time.time()</text>
      <text x="20" y="110" fill={C.text} fontSize="10" fontFamily="monospace">  def __exit__(self, *args):</text>
      <text x="20" y="126" fill={C.redLight} fontSize="10" fontFamily="monospace">    print(time.time()-self.start)</text>
      <text x="20" y="147" fill={C.muted} fontSize="10">Full control, reusable, stateful</text>

      {/* Generator-based */}
      <rect x="270" y="25" width="240" height="130" rx="8" fill={C.green} fillOpacity=".08" stroke={C.green} strokeWidth="1.5" className="cm2" />
      <text x="390" y="44" textAnchor="middle" fill={C.greenLight} fontSize="11" fontWeight="700">@contextmanager (Generator)</text>
      <text x="280" y="62" fill={C.muted} fontSize="10" fontFamily="monospace">@contextmanager</text>
      <text x="280" y="78" fill={C.text} fontSize="10" fontFamily="monospace">def timer():</text>
      <text x="280" y="94" fill={C.greenLight} fontSize="10" fontFamily="monospace">  start = time.time()</text>
      <text x="280" y="110" fill={C.orangeLight} fontSize="10" fontFamily="monospace">  yield  # body runs here</text>
      <text x="280" y="126" fill={C.redLight} fontSize="10" fontFamily="monospace">  print(time.time()-start)</text>
      <text x="280" y="147" fill={C.muted} fontSize="10">Simpler, less boilerplate, concise</text>
    </svg>
  );
}

function RecallSVG() {
  return (
    <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="160" rx="10" fill="#0f172a" stroke={C.border} strokeWidth="1.5" />
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700">Quick Recall — Context Manager</text>
      {[
        { x: 15, color: C.green, title: "Protocol", lines: ["__enter__ → setup + return", "__exit__(type, val, tb)", "return True → suppress exc"] },
        { x: 185, color: C.orange, title: "@contextmanager", lines: ["yield se before/after split", "try/finally inside yield", "1 yield only!"] },
        { x: 355, color: C.purple, title: "contextlib", lines: ["suppress(Exc) → ignore exc", "ExitStack → dynamic cms", "nullcontext → noop cm"] },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="115" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2" />
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700">{col.title}</text>
          {col.lines.map((l, j) => (
            <text key={j} x={col.x + 10} y={68 + j * 22} fill={C.text} fontSize="10">{`→ ${l}`}</text>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function PythonContextManager0() {
  return (
    <NoteLayout title="Context Managers — Guaranteed Cleanup" phase="0B" subtitle="with statement ka magic — resource management bina leak ke">

      <SectionBlock icon="🧠" title="Mental Model — Context Manager Kya Hai?">
        <MentalModel
          analogy="Context manager = hotel room. Check-in karo (setup, __enter__), kuch bhi karo (body), check-out karo (cleanup, __exit__) — chahe early checkout ho ya emergency. Hotel guaranteed hai ki room saaf hoga. with statement yahi guarantee deta hai."
          diagram={<WithFlowSVG />}
        />
      </SectionBlock>

      <SectionBlock icon="🔬" title="Under the Hood — with Statement">
        <HoodBox>
          <div className="space-y-2 text-sm text-content leading-relaxed">
            <p><code>with expr as alias:</code> internally yeh karta hai:</p>
            <p>1. <span className="text-green-400 font-semibold">cm = expr</span> — context manager object milta hai</p>
            <p>2. <span className="text-green-400 font-semibold">alias = cm.__enter__()</span> — setup + resource return</p>
            <p>3. Body execute hoti hai</p>
            <p>4. <span className="text-purple-400 font-semibold">cm.__exit__(exc_type, exc_val, traceback)</span> — ALWAYS called</p>
            <p>5. __exit__ returns <span className="text-orange-400 font-semibold">True</span> → exception suppress; <span className="text-orange-400 font-semibold">False/None</span> → re-raise</p>
          </div>
        </HoodBox>
      </SectionBlock>

      <SectionBlock icon="🏗️" title="Class-Based Context Manager">
        <CodeBlock code={`import time

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
    conn.execute("INSERT INTO users ...")`} />
      </SectionBlock>

      <SectionBlock icon="✨" title="@contextmanager — Generator Approach">
        <ContextManagerCompareSVG />
        <CodeBlock code={`from contextlib import contextmanager

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
    data = open("maybe_missing.txt").read()`} />
      </SectionBlock>

      <SectionBlock icon="📚" title="contextlib Tools">
        <InfoBox type="info" title="Multiple context managers — LIFO order">
          Multiple with mein cleanup LIFO (stack) order mein hoti hai — last entered, first exited. <code>with A(), B():</code> → A.__enter__ → B.__enter__ → body → B.__exit__ → A.__exit__. Plate stack ki tarah — jo pehle rakha woh baad mein nikalega.
        </InfoBox>
        <CodeBlock code={`from contextlib import suppress, ExitStack, nullcontext

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
    fout.write(fin.read().upper())`} />
      </SectionBlock>

      <SectionBlock icon="🏭" title="Real-World Use Cases">
        <CodeBlock code={`# 1. File handling — most common
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
                raise`} />
      </SectionBlock>

      <SectionBlock icon="🪤" title="Context Manager Traps">
        <TrapBox
          number={1}
          name="@contextmanager mein try/finally nahi — Resource Leak"
          level="M"
          question="@contextmanager function mein try/finally kyun zaroori hai?"
          wrongAnswer="yield ke baad jo code hai woh cleanup karega"
          correctAnswer="Agar body mein exception aaye, yield ke baad ka code run hi nahi hoga! Resource leak guaranteed."
          why="Generator ke andar exception aane pe execution wahan ruk jaata hai — finally ke bina cleanup skip hoti hai. Yeh sabse common @contextmanager trap hai."
          fix={<CodeBlock code={`# DANGEROUS — resource leak if exception!
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
        release(resource)  # ← GUARANTEED to run`} />}
        />
        <TrapBox
          number={2}
          name="@contextmanager mein yield bhool jaana"
          level="B"
          question="@contextmanager function mein yield nahi likha to kya hoga?"
          wrongAnswer="Function normally run karega"
          correctAnswer="RuntimeError: generator didn't yield — exactly ek yield required hai."
          why="@contextmanager decorator expect karta hai ki generator exactly once yield kare — before yield = __enter__, after = __exit__."
          fix={<CodeBlock code={`# Wrong — yield missing
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
    teardown()`} />}
        />
        <TrapBox
          number={2}
          name="__exit__ mein return True — Accidental Suppress"
          level="M"
          question="__exit__ mein return True karna kab dangerous hai?"
          wrongAnswer="return True hamesha safe hai — cleanup ke baad exception handle ho jaati hai"
          correctAnswer="return True sab exceptions silently swallow karta hai — real errors bhi chhup jaate hain!"
          why="Unconditional return True = bare except: pass jitna dangerous. Only specific exception types suppress karo."
          fix={<CodeBlock code={`# Wrong — sab kuch suppress
def __exit__(self, exc_type, exc_val, tb):
    cleanup()
    return True  # DANGEROUS!

# Right — sirf specific suppress
def __exit__(self, exc_type, exc_val, tb):
    cleanup()
    return exc_type is FileNotFoundError  # only this`} />}
        />
      </SectionBlock>

      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: "__enter__", value: "Setup + return resource (as alias)" },
          { label: "__exit__(type, val, tb)", value: "Cleanup — ALWAYS called" },
          { label: "__exit__ return True", value: "Exception suppress" },
          { label: "@contextmanager", value: "yield se split: before = enter, after = exit" },
          { label: "try/finally in @cm", value: "Cleanup guarantee even on exception" },
          { label: "contextlib.suppress()", value: "Specific exception silently ignore" },
          { label: "ExitStack", value: "Dynamic number of context managers" },
          { label: "nullcontext", value: "No-op context manager (conditional use)" },
          { label: "Multiple with", value: "with A() as a, B() as b: — one line" },
        ]} />
      </SectionBlock>

      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: "Exception Handling", description: "__exit__ exception suppression", href: "/roadmap/topic/python-exceptions/0" }}
          to={{ title: "Generators", description: "@contextmanager uses generators", href: "/roadmap/topic/python-generators/0" }}
        />
      </SectionBlock>

    </NoteLayout>
  );
}
