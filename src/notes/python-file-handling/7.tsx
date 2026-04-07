import {
  NoteLayout,
  SectionBlock,
  MentalModel,
  CodeBlock,
  CompareBlock,
  TrapsTable,
  Cheatsheet,
  QuickRecall,
  ConnectedTopics,
} from '../../components/notes'

const C = {
  blue: '#4F8CFF',
  blueL: '#93C5FD',
  green: '#34D399',
  greenL: '#6EE7B7',
  orange: '#F59E0B',
  orangeL: '#FCD34D',
  purple: '#A78BFA',
  red: '#F87171',
  muted: '#9CA3AF',
  text: '#E2E8F0',
  white: '#F8FAFC',
  border: '#1E3A5F',
  dark: '#0F172A',
}

// ─── SVG 1: JSON functions map ────────────────────────────────────────────────
function JSONFuncsSVG() {
  return (
    <svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes jfPop { 0%{opacity:0;transform:scale(.92)} 100%{opacity:1;transform:scale(1)} }
          @keyframes jfArrow { 0%{stroke-dashoffset:60} 100%{stroke-dashoffset:0} }
          .jf0{animation:jfPop .35s .05s ease both}
          .jf1{animation:jfPop .35s .2s ease both}
          .jf2{animation:jfPop .35s .35s ease both}
          .jf3{animation:jfPop .35s .5s ease both}
          .jfa{animation:jfArrow .4s .1s ease both; stroke-dasharray:60}
        `}</style>
        <marker id="jf-r" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill={C.blue} />
        </marker>
      </defs>

      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">
        JSON 4 Functions — "s = string, no s = file"
      </text>

      {/* Python Object (center source) */}
      <rect x="185" y="28" width="150" height="44" rx="8" fill={C.purple} fillOpacity=".15" stroke={C.purple} strokeWidth="1.5" />
      <text x="260" y="47" textAnchor="middle" fill={C.purple} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Python Object</text>
      <text x="260" y="63" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="monospace">{'{"name": "Divyesh"}'}</text>

      {/* dumps → string */}
      <g className="jf0">
        <line x1="185" y1="50" x2="120" y2="95" stroke={C.blue} strokeWidth="1.5" markerEnd="url(#jf-r)" className="jfa" />
        <rect x="10" y="100" width="200" height="56" rx="8" fill={C.blue} fillOpacity=".1" stroke={C.blue} strokeWidth="1.5" />
        <text x="110" y="122" textAnchor="middle" fill={C.blue} fontSize="13" fontWeight="800" fontFamily="Poppins,sans-serif">json.dumps()</text>
        <text x="110" y="140" textAnchor="middle" fill={C.blueL} fontSize="10" fontFamily="Open Sans,sans-serif">Python → JSON string (memory)</text>
        <text x="110" y="153" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">API response banane ke liye</text>
      </g>

      {/* dump → file */}
      <g className="jf1">
        <line x1="335" y1="50" x2="400" y2="95" stroke={C.blue} strokeWidth="1.5" markerEnd="url(#jf-r)" className="jfa" />
        <rect x="310" y="100" width="200" height="56" rx="8" fill={C.blue} fillOpacity=".1" stroke={C.blue} strokeWidth="1.5" />
        <text x="410" y="122" textAnchor="middle" fill={C.blue} fontSize="13" fontWeight="800" fontFamily="Poppins,sans-serif">json.dump()</text>
        <text x="410" y="140" textAnchor="middle" fill={C.blueL} fontSize="10" fontFamily="Open Sans,sans-serif">Python → JSON file (disk)</text>
        <text x="410" y="153" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">Config/data save karne ke liye</text>
      </g>

      {/* loads ← string */}
      <g className="jf2">
        <rect x="10" y="170" width="200" height="56" rx="8" fill={C.green} fillOpacity=".1" stroke={C.green} strokeWidth="1.5" />
        <text x="110" y="192" textAnchor="middle" fill={C.green} fontSize="13" fontWeight="800" fontFamily="Poppins,sans-serif">json.loads()</text>
        <text x="110" y="210" textAnchor="middle" fill={C.greenL} fontSize="10" fontFamily="Open Sans,sans-serif">JSON string → Python (memory)</text>
        <text x="110" y="223" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">API response parse karne ke liye</text>
      </g>

      {/* load ← file */}
      <g className="jf3">
        <rect x="310" y="170" width="200" height="56" rx="8" fill={C.green} fillOpacity=".1" stroke={C.green} strokeWidth="1.5" />
        <text x="410" y="192" textAnchor="middle" fill={C.green} fontSize="13" fontWeight="800" fontFamily="Poppins,sans-serif">json.load()</text>
        <text x="410" y="210" textAnchor="middle" fill={C.greenL} fontSize="10" fontFamily="Open Sans,sans-serif">JSON file → Python (disk)</text>
        <text x="410" y="223" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">Config/data read karne ke liye</text>
      </g>
    </svg>
  )
}

// ─── SVG 2: Quick Recall ─────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="175" rx="10" fill={C.dark} stroke={C.border} strokeWidth="1.5" />
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — JSON</text>

      {[
        {
          x: 12, color: C.blue, title: 'dumps / dump',
          rows: [['dumps(obj)', '→ string (memory)'], ['dump(obj,f)', '→ file (disk)'], ['indent=2', 'pretty print'], ['ensure_ascii=F', 'Hindi names ok'], ['sort_keys=T', 'sorted output']],
        },
        {
          x: 182, color: C.green, title: 'loads / load',
          rows: [['loads(str)', 'str → Python obj'], ['load(f)', 'file → Python obj'], ['JSONDecodeError', 'invalid JSON'], ['try/except', 'always wrap'], ['or []', 'null safety']],
        },
        {
          x: 352, color: C.orange, title: 'Rules',
          rows: [['JSON = string', 'dict nahi'], ['all keys = str', 'JSON keys string'], ['null → None', 'JSON null = Python None'], ['validate', 'external data'], ['pydantic', 'prod validation']],
        },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="130" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2" />
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">{col.title}</text>
          {col.rows.map(([code, note], i) => {
            const y = 66 + i * 19
            return (
              <g key={code}>
                {i % 2 === 0 && <rect x={col.x + 4} y={y - 12} width="147" height="16" rx="3" fill={col.color} fillOpacity=".06" />}
                <text x={col.x + 8} y={y} fontSize="9" fontWeight="700" fill={col.color} fontFamily="monospace">{code}</text>
                <text x={col.x + 74} y={y} fontSize="9" fill={C.muted} fontFamily="Open Sans,sans-serif">{note}</text>
              </g>
            )
          })}
        </g>
      ))}
    </svg>
  )
}

export default function PythonFileHandling7() {
  return (
    <NoteLayout
      title="JSON Handling"
      phase="0C"
      subtitle="json.load, dump, loads, dumps — serialization, nested data, error handling, validation"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — JSON kya hai?">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1"><span className="text-visual-3 font-bold">JSON</span> = data bhejne ka dabba (transport format) — sirf text hai</span>
              <span className="block mb-1"><span className="text-visual-2 font-bold">Python dict</span> = ghar ke andar saman (memory object) — methods ke saath</span>
              <span className="block mb-1"><span className="text-visual-1 font-bold">Fark</span> = JSON string hai, dict nahi — <code className="font-code text-xs">type(json_str) == str</code></span>
              <span className="block"><span className="text-visual-4 font-bold">Rule</span> = "s" = string, bina "s" = file — dumps/loads vs dump/load</span>
            </>
          }
          diagram={<JSONFuncsSVG />}
        />
      </SectionBlock>

      {/* ── Section 2: 4 Functions ── */}
      <SectionBlock icon="🔄" title="4 Functions — Master Karo">
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-highlight">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-surface-visual border-b border-highlight">
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Function</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Input</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Output</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Use Case</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['json.dumps(obj)', 'Python obj', 'JSON string', 'API response, logging'],
                  ['json.dump(obj, f)', 'Python obj', 'File (disk)', 'Config/data save karna'],
                  ['json.loads(str)', 'JSON string', 'Python obj', 'API response parse karna'],
                  ['json.load(f)', 'File object', 'Python obj', 'Config/data read karna'],
                ].map(([fn, inp, out, use]) => (
                  <tr key={fn} className="border-b border-highlight last:border-0 hover:bg-surface-visual transition-colors">
                    <td className="px-4 py-3 font-code text-xs text-visual-1">{fn}</td>
                    <td className="px-4 py-3 text-content-muted text-xs">{inp}</td>
                    <td className="px-4 py-3 text-content text-xs">{out}</td>
                    <td className="px-4 py-3 text-content-muted text-xs">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CodeBlock code={`import json

data = {"name": "Divyesh", "score": 99}

# Memory mein → string
json_str = json.dumps(data)
# '{"name": "Divyesh", "score": 99}'

# String → memory
parsed = json.loads(json_str)
parsed["name"]   # "Divyesh"

# Disk mein save
with open("config.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

# Disk se load
with open("config.json", encoding="utf-8") as f:
    loaded = json.load(f)

# ❌ Classic mistake
json.load('{"name": "Divyesh"}')    # Error! string diya, file nahi
json.loads(open("config.json"))     # Error! file diya, string nahi`} />
        </div>
      </SectionBlock>

      {/* ── Section 3: Formatting Options ── */}
      <SectionBlock icon="🎨" title="Formatting — dumps Options">
        <div className="space-y-4">
          <CodeBlock code={`import json

data = {"name": "हर्ष", "items": ["a", "b"], "active": True}

# Pretty print — debugging ke liye
print(json.dumps(data, indent=2))
# {
#   "name": "\\u0939\\u0930\\u094d\\u0937",  ← unicode escape!
#   ...
# }

# ✅ Hindi/special chars preserve karo
print(json.dumps(data, indent=2, ensure_ascii=False))
# {
#   "name": "हर्ष",   ← readable!
#   ...
# }

# Sort keys — predictable output
json.dumps(data, sort_keys=True)

# Compact — network pe bhejne ke liye
json.dumps(data, separators=(",", ":"))  # whitespace nahi`} />
        </div>
      </SectionBlock>

      {/* ── Section 4: Error Handling ── */}
      <SectionBlock icon="🚨" title="Error Handling — Production Must">
        <div className="space-y-4">
          <CompareBlock
            badLabel="❌ No error handling — crash"
            goodLabel="✅ Wrapped — graceful"
            bad={`# API response directly parse
data = json.loads(response.text)
# response = "500 Internal Server Error" (HTML page)
# → JSONDecodeError — server crash`}
            good={`import json

try:
    data = json.loads(response.text)
except json.JSONDecodeError as e:
    print(f"Invalid JSON: {e}")
    data = {}   # fallback

# Null safety
orders = data.get("orders") or []  # null → empty list
for order in orders:
    ...`}
          />
          <CodeBlock code={`import json

# Type mismatch trap
api_response = {"price": "500", "qty": "3"}  # sab string

price = api_response["price"]   # "500" (string!)
# price + 100 → TypeError
# price * 2   → "500500500..."  (string repeat)

# ✅ Convert early
price = int(api_response["price"])

# ✅ Nested access — KeyError se bacho
data = {"user": {"address": {"city": "Surat"}}}
city = data.get("user", {}).get("address", {}).get("city", "Unknown")`} />
        </div>
      </SectionBlock>

      {/* ── Section 5: JSON vs CSV ── */}
      <SectionBlock icon="⚔️" title="JSON vs CSV — Kab Kya?">
        <div className="overflow-x-auto rounded-xl border border-highlight">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="bg-surface-visual border-b border-highlight">
                <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Feature</th>
                <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">JSON</th>
                <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">CSV</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Structure', 'Nested allowed', 'Flat only'],
                ['Data types', 'int, bool, null', 'Sab string'],
                ['Use case', 'APIs, configs', 'Tabular data, Excel'],
                ['Human readable', 'Yes', 'Yes (simple)'],
                ['Complex data', 'Yes', 'No'],
                ['Streaming 1GB', 'ijson library', 'row-by-row easy'],
              ].map(([f, j, c]) => (
                <tr key={f} className="border-b border-highlight last:border-0 hover:bg-surface-visual transition-colors">
                  <td className="px-4 py-3 text-content-muted">{f}</td>
                  <td className="px-4 py-3 text-visual-2">{j}</td>
                  <td className="px-4 py-3 text-content">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* ── Section 6: Real Patterns ── */}
      <SectionBlock icon="🚀" title="Real Backend Patterns">
        <div className="space-y-4">
          <CodeBlock code={`import json, os

# ✅ Config file pattern
def load_config(path: str) -> dict:
    try:
        with open(path, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}   # defaults

# ✅ Atomic config save
def save_config(path: str, data: dict) -> None:
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    os.replace(tmp, path)

# ✅ API response handling
import requests

resp = requests.get("https://api.example.com/data")
try:
    payload = resp.json()           # shortcut for json.loads(resp.text)
except ValueError:
    payload = {}

# ✅ Pydantic — production validation
from pydantic import BaseModel

class Order(BaseModel):
    order_id: int
    amount: float   # "500" → 500.0 auto convert

order = Order(**json.loads(raw))   # validate + convert`} />
        </div>
      </SectionBlock>

      {/* ── Section 7: Traps ── */}
      <SectionBlock icon="💣" title="Common Traps">
        <TrapsTable rows={[
          { level: 'S', mistake: 'json.load(string) — string diya file nahi', kyun: 'load() file object maangta hai, loads() string', fix: 'json.loads(string) use karo' },
          { level: 'S', mistake: 'json.loads() bina try/except', kyun: 'Invalid JSON → JSONDecodeError → server crash', fix: 'try/except json.JSONDecodeError' },
          { level: 'M', mistake: 'ensure_ascii=False bhoolna', kyun: 'Hindi/Gujarati names → weird unicode escape', fix: 'json.dumps(data, ensure_ascii=False)' },
          { level: 'M', mistake: 'data["orders"] jab null ho sakta hai', kyun: 'None[0] → TypeError', fix: 'data.get("orders") or []' },
          { level: 'M', mistake: 'JSON mein tuple save karna', kyun: 'Tuple → list ho jaega — type change silent', fix: 'JSON only: str, int, float, bool, list, dict, null' },
          { level: 'B', mistake: 'String key type assume karna', kyun: 'JSON keys hamesha string — {"1": ...} not {1: ...}', fix: 'str keys use karo ya convert karo after load' },
        ]} />
      </SectionBlock>

      {/* ── Section 8: Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'json.dumps(obj, indent=2)', value: 'Pretty print — debugging ke liye' },
          { label: 'json.dumps(obj, ensure_ascii=False)', value: 'Hindi/special chars preserve' },
          { label: 'json.loads(string)', value: 'String → Python obj' },
          { label: 'json.load(file_obj)', value: 'File → Python obj' },
          { label: 'try: json.loads(s) except JSONDecodeError:', value: 'Always wrap parse karna' },
          { label: 'data.get("key") or []', value: 'Null-safe list access' },
          { label: 'os.replace(tmp, path)', value: 'Atomic config save' },
          { label: 'resp.json()', value: 'requests library shortcut' },
        ]} />
      </SectionBlock>

      {/* ── Section 9: Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── Section 10: Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: 'CSV Handling', description: 'Flat tabular data ke liye alternative', href: '/roadmap/topic/python-file-handling/6' }}
          to={{ title: 'Binary + Pickle', description: 'Python-specific serialization — JSON se faster but unsafe', href: '/roadmap/topic/python-file-handling/8' }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
