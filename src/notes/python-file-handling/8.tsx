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
  InfoBox,
} from '../../components/notes'

const C = {
  blue:   '#4F8CFF',
  blueL:  '#93C5FD',
  green:  '#34D399',
  greenL: '#6EE7B7',
  orange: '#F59E0B',
  orangeL:'#FCD34D',
  purple: '#A78BFA',
  red:    '#F87171',
  muted:  '#9CA3AF',
  text:   '#E2E8F0',
  white:  '#F8FAFC',
  border: '#1E3A5F',
  dark:   '#0F172A',
}

// ─── SVG 1: Bytes vs Text Mode ────────────────────────────────────────────────
function BytesModeSVG() {
  return (
    <svg viewBox="0 0 520 195" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes bmSlide { 0%{opacity:0;transform:translateX(-8px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes bmSlideR { 0%{opacity:0;transform:translateX(8px)} 100%{opacity:1;transform:translateX(0)} }
          .bm0{animation:bmSlide .4s .1s ease both}
          .bm1{animation:bmSlideR .4s .3s ease both}
          .bm2{animation:bmSlide .4s .5s ease both}
          .bm3{animation:bmSlideR .4s .5s ease both}
        `}</style>
        <marker id="bm-r" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill={C.muted}/>
        </marker>
      </defs>

      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">
        Bytes — Sab Kuch Numbers Hain
      </text>

      {/* Disk bytes */}
      <g className="bm0">
        <rect x="10" y="28" width="500" height="28" rx="6" fill={C.dark}/>
        <text x="20" y="36" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">Disk pe stored (always bytes):</text>
        {[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100].map((b, i) => (
          <text key={i} x={175 + i * 33} y={50} textAnchor="middle" fill={C.orangeL} fontSize="10" fontFamily="monospace">{b}</text>
        ))}
      </g>

      {/* Text mode path */}
      <g className="bm1">
        <rect x="10" y="68" width="240" height="105" rx="8" fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeWidth="1.5"/>
        <text x="130" y="87" textAnchor="middle" fill={C.blue} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">Text Mode ("r")</text>
        <line x1="130" y1="92" x2="130" y2="105" stroke={C.blue} strokeWidth="1" strokeDasharray="3"/>
        <text x="20"  y="108" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">OS reads bytes → UTF-8 decode →</text>
        <text x="20"  y="122" fill={C.blueL} fontSize="10" fontFamily="monospace">"Hello World"  (string)</text>
        <rect x="18"  y="132" width="216" height="30" rx="5" fill={C.red} fillOpacity=".08" stroke={C.red} strokeWidth="1"/>
        <text x="26"  y="147" fill={C.red} fontSize="9" fontFamily="Open Sans,sans-serif">⚠️ Image bytes decode → crash</text>
        <text x="26"  y="160" fill={C.red} fontSize="9" fontFamily="Open Sans,sans-serif">UnicodeDecodeError</text>
      </g>

      {/* Binary mode path */}
      <g className="bm2">
        <rect x="270" y="68" width="240" height="105" rx="8" fill={C.green} fillOpacity=".08" stroke={C.green} strokeWidth="1.5"/>
        <text x="390" y="87" textAnchor="middle" fill={C.green} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">Binary Mode ("rb")</text>
        <line x1="390" y1="92" x2="390" y2="105" stroke={C.green} strokeWidth="1" strokeDasharray="3"/>
        <text x="280" y="108" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">OS reads bytes → direct →</text>
        <text x="280" y="122" fill={C.greenL} fontSize="10" fontFamily="monospace">b'\x48\x65\x6c...'  (bytes)</text>
        <rect x="278" y="132" width="216" height="30" rx="5" fill={C.green} fillOpacity=".08" stroke={C.green} strokeWidth="1"/>
        <text x="286" y="147" fill={C.green} fontSize="9" fontFamily="Open Sans,sans-serif">✅ Always safe — no decode</text>
        <text x="286" y="160" fill={C.green} fontSize="9" fontFamily="Open Sans,sans-serif">Images, PDFs, Pickle — use "rb"</text>
      </g>

      {/* Bottom: bytes are numbers */}
      <g className="bm3">
        <rect x="10" y="182" width="500" height="10" rx="3" fill={C.orange} fillOpacity=".1"/>
        <text x="260" y="191" textAnchor="middle" fill={C.orange} fontSize="9" fontFamily="Open Sans,sans-serif">
          72→H · 101→e · 108→l · 108→l · 111→o · 32→(space) · 87→W · 111→o · 114→r · 108→l · 100→d
        </text>
      </g>
    </svg>
  )
}

// ─── SVG 2: Pickle execution danger ──────────────────────────────────────────
function PickleDangerSVG() {
  return (
    <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes pdPop { 0%{opacity:0;transform:scale(.9)} 100%{opacity:1;transform:scale(1)} }
          @keyframes pdDanger { 0%{opacity:.5} 50%{opacity:1} 100%{opacity:.5} }
          .pd0{animation:pdPop .4s .1s ease both}
          .pd1{animation:pdPop .4s .4s ease both}
          .pd2{animation:pdPop .4s .7s ease both}
          .pd3{animation:pdDanger 2s 1s ease infinite}
        `}</style>
        <marker id="pd-r" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
          <path d="M0,0 L7,3 L0,6 Z" fill={C.red}/>
        </marker>
      </defs>
      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">
        Pickle — "Mini Program" Hai, Data Nahi
      </text>

      {/* Attacker */}
      <g className="pd0">
        <rect x="10" y="28" width="130" height="72" rx="8" fill={C.red} fillOpacity=".1" stroke={C.red} strokeWidth="1.5"/>
        <text x="75" y="52" textAnchor="middle" fill={C.red} fontSize="22">😈</text>
        <text x="75" y="72" textAnchor="middle" fill={C.red} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Attacker</text>
        <text x="75" y="88" textAnchor="middle" fill={C.muted} fontSize="8" fontFamily="Open Sans,sans-serif">malicious.pkl banaya</text>
      </g>

      {/* Arrow */}
      <g className="pd1">
        <line x1="140" y1="64" x2="190" y2="64" stroke={C.red} strokeWidth="1.5" markerEnd="url(#pd-r)"/>
        <text x="165" y="56" textAnchor="middle" fill={C.red} fontSize="8" fontFamily="Open Sans,sans-serif">upload</text>
      </g>

      {/* Pickle file */}
      <g className="pd1">
        <rect x="192" y="28" width="140" height="72" rx="8" fill={C.orange} fillOpacity=".1" stroke={C.orange} strokeWidth="1.5"/>
        <text x="262" y="50" textAnchor="middle" fill={C.orange} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">malicious.pkl</text>
        <text x="262" y="65" textAnchor="middle" fill={C.muted} fontSize="8" fontFamily="monospace">b'\x80\x04...'</text>
        <text x="262" y="80" textAnchor="middle" fill={C.orangeL} fontSize="8" fontFamily="Open Sans,sans-serif">hidden: os.system("rm -rf /")</text>
        <text x="262" y="92" textAnchor="middle" fill={C.muted} fontSize="8" fontFamily="Open Sans,sans-serif">Instructions embedded</text>
      </g>

      {/* Arrow */}
      <g className="pd2">
        <line x1="332" y1="64" x2="378" y2="64" stroke={C.red} strokeWidth="1.5" markerEnd="url(#pd-r)"/>
        <text x="355" y="56" textAnchor="middle" fill={C.red} fontSize="8" fontFamily="Open Sans,sans-serif">pickle.load()</text>
      </g>

      {/* Server crash */}
      <g className="pd3">
        <rect x="380" y="28" width="130" height="72" rx="8" fill={C.red} fillOpacity=".12" stroke={C.red} strokeWidth="1.5"/>
        <text x="445" y="52" textAnchor="middle" fill={C.red} fontSize="22">💥</text>
        <text x="445" y="72" textAnchor="middle" fill={C.red} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Server</text>
        <text x="445" y="88" textAnchor="middle" fill={C.red} fontSize="8" fontFamily="Open Sans,sans-serif">Arbitrary code executed!</text>
      </g>

      {/* Bottom rule */}
      <rect x="10" y="112" width="500" height="40" rx="6" fill={C.red} fillOpacity=".06" stroke={C.red} strokeWidth="1"/>
      <text x="20" y="130" fill={C.red} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Golden Rule:</text>
      <text x="110" y="130" fill={C.text} fontSize="10" fontFamily="Open Sans,sans-serif">pickle.load() KABHI untrusted source se mat karo</text>
      <text x="20" y="146" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">Trusted: apna hi ML model save/load, internal caching | Untrusted: user upload, API response, network</text>
    </svg>
  )
}

// ─── SVG 3: Quick Recall ─────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="175" rx="10" fill={C.dark} stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — Binary + Pickle</text>

      {[
        {
          x: 12, color: C.orange, title: 'Bytes',
          rows: [['0-255','byte range'],['b"ABC"','= [65,66,67]'],['encode()','str → bytes'],['decode()','bytes → str'],['rb/wb','binary mode']],
        },
        {
          x: 182, color: C.blue, title: 'Binary Files',
          rows: [['rb','always safe read'],['wb','binary write'],['no decode','just move bytes'],['copy image','read rb→write wb'],['DB stores URL','not the image']],
        },
        {
          x: 352, color: C.red, title: 'Pickle',
          rows: [['dump(obj,f)','serialize → file'],['load(f)','deserialize'],['⚠️ trusted only','code executes!'],['vs JSON','faster, Python only'],['ML models','main use case']],
        },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="130" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">{col.title}</text>
          {col.rows.map(([code, note], i) => {
            const y = 66 + i * 19
            return (
              <g key={code}>
                {i % 2 === 0 && <rect x={col.x + 4} y={y - 12} width="147" height="16" rx="3" fill={col.color} fillOpacity=".06"/>}
                <text x={col.x + 8}  y={y} fontSize="9" fontWeight="700" fill={col.color} fontFamily="monospace">{code}</text>
                <text x={col.x + 68} y={y} fontSize="9" fill={C.muted} fontFamily="Open Sans,sans-serif">{note}</text>
              </g>
            )
          })}
        </g>
      ))}
    </svg>
  )
}

export default function PythonFileHandling8() {
  return (
    <NoteLayout
      title="Binary Files + Pickle"
      phase="0C"
      subtitle="Bytes, binary mode, image handling, pickle serialization + security risk"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — Bytes kya hain?">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1"><span className="text-visual-3 font-bold">Sab kuch bytes hai</span> — text, image, video — disk pe sirf numbers (0-255)</span>
              <span className="block mb-1"><span className="text-visual-1 font-bold">Text mode</span> = bytes ko samajhna chahte ho — UTF-8 se decode karo (fail ho sakta)</span>
              <span className="block mb-1"><span className="text-visual-2 font-bold">Binary mode</span> = sirf move karna chahte ho — decode mat karo, always safe</span>
              <span className="block"><span className="text-visual-4 font-bold">Pickle</span> = data + instructions — JSON se fast but code execute karta hai</span>
            </>
          }
          diagram={<BytesModeSVG />}
        />
      </SectionBlock>

      {/* ── Section 2: Binary File Handling ── */}
      <SectionBlock icon="🖼️" title="Binary Files — Images, PDFs">
        <div className="space-y-4">
          <InfoBox type="warn" title="Image text mode mein open → UnicodeDecodeError">
            Image ke bytes random hote hain — UTF-8 ke rules match nahi karte.
            Text mode mein open karo → crash. Kabhi kabhi crash bhi nahi aata — data corrupt ho jaata hai silently.
          </InfoBox>
          <CodeBlock code={`# ✅ Image read — binary mode
with open("photo.jpg", "rb") as f:
    image_data = f.read()   # bytes object — b'\\xff\\xd8\\xff...'

# ✅ Image copy — read binary, write binary
with open("photo.jpg", "rb") as src, \\
     open("copy.jpg",  "wb") as dst:
    while chunk := src.read(4096):
        dst.write(chunk)

# ❌ Galat — text mode se image
with open("photo.jpg", "r") as f:   # UnicodeDecodeError!
    data = f.read()

# ✅ Check karo — bytes ya string?
data = open("photo.jpg", "rb").read()
type(data)          # <class 'bytes'>
len(data)           # file size in bytes
data[:4]            # b'\\xff\\xd8\\xff\\xe0'  (JPEG magic bytes)

# ✅ Encode / Decode
text = "Hello"
b = text.encode("utf-8")    # str → bytes: b'Hello'
s = b.decode("utf-8")       # bytes → str: 'Hello'`} />

          <InfoBox type="info" title="Production: Image kahan store hoti hai?">
            Database mein image <strong>nahi</strong> hoti — sirf path/URL hota hai.
            Image → S3/disk (binary), database → URL string.
            This is how Instagram, WhatsApp sab karte hain.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 3: Pickle ── */}
      <SectionBlock icon="🥒" title="Pickle — Serialize Python Objects">
        <div className="space-y-4">
          <CodeBlock code={`import pickle

# ✅ Save any Python object
data = {"user": "Divyesh", "scores": [99, 87, 95], "active": True}

with open("data.pkl", "wb") as f:    # binary mode — wb!
    pickle.dump(data, f)

# ✅ Load back
with open("data.pkl", "rb") as f:    # binary mode — rb!
    loaded = pickle.load(f)

loaded["user"]   # "Divyesh"

# ✅ Pickle supports almost any Python type
import numpy as np

model_data = {
    "weights": np.array([0.5, 0.3, 0.8]),
    "bias": 0.1,
    "classes": ["cat", "dog"]
}
with open("model.pkl", "wb") as f:
    pickle.dump(model_data, f)

# ✅ pickle.dumps / pickle.loads — memory mein (string jaisa)
data_bytes = pickle.dumps(data)   # bytes object
restored   = pickle.loads(data_bytes)`} />
        </div>
      </SectionBlock>

      {/* ── Section 4: Pickle Security ── */}
      <SectionBlock icon="🚨" title="Pickle ka Dark Side — Security Risk">
        <div className="space-y-4">
          <PickleDangerSVG />
          <CompareBlock
            badLabel="❌ Untrusted pickle load — RCE vulnerability"
            goodLabel="✅ Trusted only — ML models, internal cache"
            bad={`# User ne file upload ki
uploaded_file = request.files["model"]

# ❌ NEVER do this
model = pickle.load(uploaded_file)  # Arbitrary code execution!
# Attacker ka code run ho gaya server pe`}
            good={`# ✅ Only load your own pkl files
# ML model jo tune train kiya
with open("my_model.pkl", "rb") as f:
    model = pickle.load(f)

# ✅ User data ke liye JSON use karo
import json
user_data = json.loads(request.data)  # Safe

# ✅ Alternative for ML: joblib (more robust than pickle)
import joblib
joblib.dump(model, "model.joblib")
model = joblib.load("model.joblib")`}
          />
        </div>
      </SectionBlock>

      {/* ── Section 5: JSON vs Pickle ── */}
      <SectionBlock icon="⚔️" title="JSON vs Pickle — Kab Kya?">
        <div className="overflow-x-auto rounded-xl border border-highlight">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="bg-surface-visual border-b border-highlight">
                <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Feature</th>
                <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">JSON</th>
                <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Pickle</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Format',        'Text (readable)',          'Binary (unreadable)'],
                ['Human readable','Yes',                      'No'],
                ['Safe to load',  'Yes',                      '⚠️ Trusted sources only'],
                ['Language',      'Any language',             'Python only'],
                ['Speed',         'Slower (parse overhead)',  'Faster (no parsing)'],
                ['Types',         'str, int, float, bool, list, dict', 'Any Python object'],
                ['Use case',      'APIs, configs, export',   'ML models, internal cache'],
              ].map(([f, j, p], i) => (
                <tr key={f} className="border-b border-highlight last:border-0 hover:bg-surface-visual transition-colors">
                  <td className="px-4 py-3 text-content-muted">{f}</td>
                  <td className="px-4 py-3 text-visual-2">{j}</td>
                  <td className="px-4 py-3 text-content">{p}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionBlock>

      {/* ── Section 6: Pickle Traps ── */}
      <SectionBlock icon="💣" title="Common Traps">
        <TrapsTable rows={[
          { level: 'S', mistake: 'Untrusted pickle load karna',             kyun: 'Code execution — server compromise possible',          fix: 'User data ke liye JSON use karo' },
          { level: 'S', mistake: 'Image "r" mode mein open karna',          kyun: 'UTF-8 decode fail → UnicodeDecodeError',               fix: '"rb" binary mode hamesha' },
          { level: 'M', mistake: 'pickle.dump() bina "wb" mode',            kyun: '"w" text mode → corrupt binary data',                  fix: '"wb" for write, "rb" for read' },
          { level: 'M', mistake: 'Class change ke baad load karna',         kyun: 'Pickle stores class structure — mismatch → error',     fix: 'Version carefully — joblib ya migration script' },
          { level: 'B', mistake: 'b"hello" == "hello" assume karna',        kyun: 'bytes aur str alag types — comparison False deta hai', fix: 'b"hello".decode() == "hello" karo' },
          { level: 'B', mistake: 'encode() / decode() direction confuse',   kyun: '"read = decode" rule bhool gaye',                      fix: 'read = decode (bytes→str), write = encode (str→bytes)' },
        ]} />
      </SectionBlock>

      {/* ── Section 7: Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: '"rb" / "wb"', value: 'Binary read/write — images, PDFs, pickle' },
          { label: 'text.encode("utf-8")', value: 'str → bytes' },
          { label: 'data.decode("utf-8")', value: 'bytes → str' },
          { label: 'pickle.dump(obj, f)', value: 'Serialize to file — "wb" mode' },
          { label: 'pickle.load(f)', value: 'Deserialize from file — "rb" mode' },
          { label: 'NEVER pickle.load(untrusted)', value: 'RCE vulnerability' },
          { label: 'JSON → APIs, CSV → tables', value: 'Pickle → ML models, internal only' },
          { label: 'joblib.dump/load', value: 'Better pickle for ML models' },
        ]} />
      </SectionBlock>

      {/* ── Section 8: Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── Section 9: Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: 'JSON Handling', description: 'Safe serialization — APIs aur configs ke liye', href: '/roadmap/topic/python-file-handling/7' }}
          to={{ title: 'File I/O Basics', description: 'open() aur binary modes ka foundation', href: '/roadmap/topic/python-file-handling/0' }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
