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
}

// ─── SVG 1: Path Anatomy ──────────────────────────────────────────────────────
function PathAnatomySVG() {
  return (
    <svg viewBox="0 0 520 195" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes paFade { 0%{opacity:0;transform:translateY(6px)} 100%{opacity:1;transform:translateY(0)} }
          .pa0{animation:paFade .4s .1s ease both}
          .pa1{animation:paFade .4s .3s ease both}
          .pa2{animation:paFade .4s .5s ease both}
          .pa3{animation:paFade .4s .7s ease both}
          .pa4{animation:paFade .4s .9s ease both}
        `}</style>
      </defs>

      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">
        p = Path("/home/divyesh/notes/app.py")
      </text>

      {/* Full path display */}
      <rect x="10" y="26" width="500" height="32" rx="6" fill={C.purple} fillOpacity=".1" stroke={C.purple} strokeWidth="1"/>
      <text x="260" y="47" textAnchor="middle" fontSize="13" fontFamily="monospace" fontWeight="700">
        <tspan fill={C.orange}>/home/divyesh/notes/</tspan><tspan fill={C.green}>app</tspan><tspan fill={C.blue}>.py</tspan>
      </text>

      {/* Attribute rows */}
      {[
        { cls: 'pa0', color: C.purple, attr: 'p.parts',   val: "('/', 'home', 'divyesh', 'notes', 'app.py')" },
        { cls: 'pa1', color: C.orange, attr: 'p.parent',  val: '/home/divyesh/notes' },
        { cls: 'pa2', color: C.text,   attr: 'p.name',    val: 'app.py' },
        { cls: 'pa3', color: C.green,  attr: 'p.stem',    val: 'app' },
        { cls: 'pa4', color: C.blue,   attr: 'p.suffix',  val: '.py  ← dot included!' },
      ].map((item, i) => (
        <g key={item.attr} className={item.cls}>
          <rect x="10" y={70 + i * 25} width="500" height="22" rx="3"
            fill={item.color} fillOpacity={i % 2 === 0 ? '.06' : '.03'}/>
          <text x="20"  y={85 + i * 25} fill={item.color} fontSize="11" fontWeight="700" fontFamily="monospace">{item.attr}</text>
          <text x="115" y={85 + i * 25} fill={C.muted}     fontSize="11" fontFamily="monospace">→</text>
          <text x="132" y={85 + i * 25} fill={C.text}      fontSize="11" fontFamily="monospace">{item.val}</text>
        </g>
      ))}
    </svg>
  )
}

// ─── SVG 2: Absolute vs Relative ──────────────────────────────────────────────
function AbsRelSVG() {
  return (
    <svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes arSlide { 0%{opacity:0;transform:translateX(-10px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes arSlideR { 0%{opacity:0;transform:translateX(10px)} 100%{opacity:1;transform:translateX(0)} }
          .ar0{animation:arSlide .4s .1s ease both}
          .ar1{animation:arSlideR .4s .3s ease both}
        `}</style>
      </defs>
      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Absolute vs Relative Path</text>

      {/* Absolute */}
      <g className="ar0">
        <rect x="10" y="26" width="240" height="125" rx="8" fill={C.green} fillOpacity=".08" stroke={C.green} strokeWidth="1.5"/>
        <text x="130" y="46" textAnchor="middle" fill={C.green} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">✅ Absolute Path</text>
        <text x="130" y="63" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="monospace">"/home/divyesh/app/logs"</text>
        <text x="22"  y="83"  fill={C.greenL} fontSize="10" fontFamily="Open Sans,sans-serif">→ Kahin se bhi chalao — same result</text>
        <text x="22"  y="100" fill={C.greenL} fontSize="10" fontFamily="Open Sans,sans-serif">→ Docker / cron mein safe</text>
        <text x="22"  y="117" fill={C.greenL} fontSize="10" fontFamily="Open Sans,sans-serif">→ Production recommended</text>
        <rect x="18"  y="126" width="215" height="16" rx="4" fill={C.green} fillOpacity=".12"/>
        <text x="125" y="138" textAnchor="middle" fill={C.green} fontSize="10" fontFamily="monospace">Path(__file__).resolve().parent</text>
      </g>

      {/* Relative */}
      <g className="ar1">
        <rect x="270" y="26" width="240" height="125" rx="8" fill={C.red} fillOpacity=".08" stroke={C.red} strokeWidth="1.5"/>
        <text x="390" y="46" textAnchor="middle" fill={C.red} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">⚠️ Relative Path</text>
        <text x="390" y="63" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="monospace">Path("logs/app.log")</text>
        <text x="282" y="83"  fill={C.orangeL} fontSize="10" fontFamily="Open Sans,sans-serif">→ CWD pe depend — runtime mein alag</text>
        <text x="282" y="100" fill={C.orangeL} fontSize="10" fontFamily="Open Sans,sans-serif">→ Cron job → / se run → break</text>
        <text x="282" y="117" fill={C.orangeL} fontSize="10" fontFamily="Open Sans,sans-serif">→ Docker container → fail</text>
        <rect x="278" y="126" width="215" height="16" rx="4" fill={C.red} fillOpacity=".08"/>
        <text x="385" y="138" textAnchor="middle" fill={C.red} fontSize="10" fontFamily="Open Sans,sans-serif">Swiggy problem: "idhar aa" 😄</text>
      </g>
    </svg>
  )
}

// ─── SVG 3: Quick Recall ──────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="175" rx="10" fill="#0F172A" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — pathlib</text>

      {[
        {
          x: 12, color: C.blue, title: 'Path Parts',
          rows: [['p.name', 'file.txt'], ['p.stem', 'file'], ['p.suffix', '.txt (dot!)'], ['p.parent', 'folder path'], ['p.parts', 'tuple of all']],
        },
        {
          x: 182, color: C.green, title: 'Methods',
          rows: [['p.exists()', 'exists?'], ['p.mkdir(p,e)', 'safe create'], ['p.glob("*")', 'search'], ['p.read_text()', 'quick read'], ['p.rename(new)', 'move/rename']],
        },
        {
          x: 352, color: C.orange, title: 'Key Rules',
          rows: [['BASE_DIR', '__file__.resolve()'], ['/ operator', 'join paths'], ['absolute', 'always in prod'], ['open(p)', 'Path works here'], ['legacy', 'os.path still ok']],
        },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="130" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">{col.title}</text>
          {col.rows.map(([code, note], i) => {
            const y = 67 + i * 20
            return (
              <g key={code}>
                {i % 2 === 0 && <rect x={col.x + 4} y={y - 13} width="147" height="17" rx="3" fill={col.color} fillOpacity=".06"/>}
                <text x={col.x + 8}  y={y} fontSize="10" fontWeight="700" fill={col.color} fontFamily="monospace">{code}</text>
                <text x={col.x + 74} y={y} fontSize="10" fill={C.muted} fontFamily="Open Sans,sans-serif">{note}</text>
              </g>
            )
          })}
        </g>
      ))}
    </svg>
  )
}

export default function PythonFileHandling4() {
  return (
    <NoteLayout
      title="pathlib + os.path"
      phase="0C"
      subtitle="Modern path handling — Path object, methods, absolute vs relative, os.path comparison"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — Path kya hai?">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1"><span className="text-visual-3 font-bold">os.path</span> = address ek string mein — manually likhna, typo-prone, OS-dependent</span>
              <span className="block mb-1"><span className="text-visual-1 font-bold">pathlib</span> = structured address object — intelligent, methods ke saath, cross-platform</span>
              <span className="block mb-1"><span className="text-visual-2 font-bold">Rule</span> = Path ko samajhna + navigate karna hai? Object use karo.</span>
              <span className="block"><span className="text-visual-4 font-bold">open()</span> = dono ke saath kaam karta hai — <code className="font-code text-xs">open(path_object)</code> valid hai</span>
            </>
          }
          diagram={<PathAnatomySVG />}
        />
      </SectionBlock>

      {/* ── Section 2: Path JOIN ── */}
      <SectionBlock icon="🔗" title="Path Join — / Operator">
        <div className="space-y-4">
          <CompareBlock
            badLabel="❌ os.path / string concat — fragile"
            goodLabel="✅ pathlib / operator — clean"
            bad={`# String concat — breaks on Windows (uses \\)
path = "logs/" + filename

# os.path.join — verbose
import os
path = os.path.join("uploads", "images", filename)
# No IDE autocomplete, no methods`}
            good={`from pathlib import Path

# / operator — readable, cross-platform, OS-safe
upload_dir = Path("uploads") / "images"
file_path  = upload_dir / filename

# Methods chained
file_path.parent.mkdir(parents=True, exist_ok=True)
print(file_path.suffix)  # ".jpg"
print(file_path.stem)    # "photo_001"`}
          />
        </div>
      </SectionBlock>

      {/* ── Section 3: Absolute vs Relative ── */}
      <SectionBlock icon="📍" title="Absolute vs Relative — Production Rule">
        <div className="space-y-4">
          <AbsRelSVG />
          <CodeBlock code={`from pathlib import Path

# ✅ The correct pattern — always use this in production
BASE_DIR = Path(__file__).resolve().parent

# Step by step:
# __file__   → current file ka path (relative ho sakta hai)
# .resolve() → absolute path bana do
# .parent    → is file ka folder

# Ab use karo
LOG_FILE    = BASE_DIR / "logs" / "app.log"
CONFIG_FILE = BASE_DIR / "config" / "settings.json"
UPLOAD_DIR  = BASE_DIR / "uploads"

# Ye kabhi nahi tootega — cron, docker, anywhere`} />
        </div>
      </SectionBlock>

      {/* ── Section 4: Path Methods ── */}
      <SectionBlock icon="🛠️" title="Path Methods — Full Reference">
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-highlight">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-surface-visual border-b border-highlight">
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Method / Property</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Returns</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Example / Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['p.exists()',                        'bool',       'True / False'],
                  ['p.is_file() / p.is_dir()',          'bool',       'Type check'],
                  ['p.mkdir(parents=True, exist_ok=True)', 'None',    'Safe folder create — no crash if exists'],
                  ['p.glob("*.py")',                    'generator',  '[Path("main.py"), ...] — same folder'],
                  ['p.rglob("*.py")',                   'generator',  'Recursive search — all subdirs'],
                  ['p.rename(new_path)',                'Path',       'Move or rename file'],
                  ['p.unlink()',                        'None',       'Delete file'],
                  ['p.read_text(encoding="utf-8")',     'str',        'Quick read — small files only'],
                  ['p.write_text(data)',                'int',        'Quick write — overwrites!'],
                  ['p.with_suffix(".bak")',             'Path',       'Same dir, new extension'],
                  ['p.stat().st_size',                  'int',        'File size in bytes'],
                ].map(([m, r, ex], i) => (
                  <tr key={m} className="border-b border-highlight last:border-0 hover:bg-surface-visual transition-colors">
                    <td className="px-4 py-3 font-code text-xs text-visual-1">{m}</td>
                    <td className="px-4 py-3 text-content-muted text-xs">{r}</td>
                    <td className="px-4 py-3 text-content text-xs">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CodeBlock code={`from pathlib import Path

p = Path("src/utils/helper.py")

# Check before use
if p.exists():
    text = p.read_text(encoding="utf-8")

# Safe directory create
upload_dir = Path("uploads") / "2024"
upload_dir.mkdir(parents=True, exist_ok=True)

# Search all Python files
for f in Path("src").rglob("*.py"):
    print(f.name, f.stat().st_size, "bytes")

# Rename keeping same folder
p.rename(p.with_suffix(".bak"))   # .py → .bak
p.rename(p.with_name("new.py"))   # same dir, new name`} />
        </div>
      </SectionBlock>

      {/* ── Section 5: os.path vs pathlib ── */}
      <SectionBlock icon="⚔️" title="os.path vs pathlib — Kab Kya?">
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-highlight">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-surface-visual border-b border-highlight">
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Feature</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">os.path</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">pathlib ✓</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Type',           'String',              'Object — methods ke saath'],
                  ['Join paths',     'os.path.join(a,b,c)', 'Path("a") / "b" / "c"'],
                  ['Readability',    '😐 verbose',          '😄 clean, chainable'],
                  ['exists/mkdir',   'os.path.exists(p)',   'p.exists()'],
                  ['glob search',    'glob.glob()',         'p.glob("*.py")'],
                  ['Legacy code',    '✅ common in old code', 'Prefer for new code'],
                  ['open() compat',  'open(string_path)',   'open(Path_object) — both work'],
                ].map(([f, osp, pl], i) => (
                  <tr key={f} className="border-b border-highlight last:border-0 hover:bg-surface-visual transition-colors">
                    <td className="px-4 py-3 text-content-muted">{f}</td>
                    <td className="px-4 py-3 font-code text-xs text-content">{osp}</td>
                    <td className="px-4 py-3 font-code text-xs text-visual-2">{pl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <InfoBox type="tip" title="Simple rule">
            New code → pathlib. Legacy codebase mein os.path mile → chhod do, mix mat karo bina reason ke.
            Dono <code className="font-code text-xs">open()</code> ke saath kaam karte hain.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 6: Traps ── */}
      <SectionBlock icon="💣" title="Common Traps">
        <TrapsTable rows={[
          { level: 'M', mistake: 'p.suffix returns ".txt" nahi "txt"',      kyun: 'suffix mein dot included — filtering mein bug',      fix: 'p.suffix == ".txt" (dot ke saath)' },
          { level: 'M', mistake: 'Relative path cron job mein',             kyun: 'Cron root (/) se run karta hai — path break',         fix: 'BASE_DIR = Path(__file__).resolve().parent' },
          { level: 'M', mistake: 'p.parent.parent.parent chain likhna',     kyun: 'Fragile — ek folder add/remove → break',              fix: 'p.parents[2] ya BASE_DIR se rebuild' },
          { level: 'B', mistake: 'mkdir() bina exist_ok=True',              kyun: 'Folder pehle se exist kare to FileExistsError',        fix: 'mkdir(parents=True, exist_ok=True)' },
          { level: 'B', mistake: 'write_text() large file pe',              kyun: 'Pura string RAM mein — streaming nahi',               fix: 'open(p, "w") use karo large files ke liye' },
        ]} />
      </SectionBlock>

      {/* ── Section 7: Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'Path("a") / "b" / "c.txt"', value: 'Join paths — cross-platform safe' },
          { label: 'Path(__file__).resolve().parent', value: 'BASE_DIR — production absolute path' },
          { label: 'p.stem / p.suffix / p.name', value: '"file" / ".txt" / "file.txt"' },
          { label: 'p.mkdir(parents=True, exist_ok=True)', value: 'Safe folder create' },
          { label: 'p.glob("*.py") / p.rglob("*.py")', value: 'Pattern search — generator' },
          { label: 'p.rename(p.with_suffix(".bak"))', value: 'Rename keeping same dir' },
          { label: 'p.exists() / p.is_file()', value: 'Check before access' },
          { label: 'open(p, "r")', value: 'Path object open() ke saath works' },
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
          from={{ title: 'File I/O Basics', description: 'open() aur modes — pathlib path ke saath use karo', href: '/roadmap/topic/python-file-handling/0' }}
          to={{ title: 'CSV Handling', description: 'pathlib path DictReader ke saath use hota hai', href: '/roadmap/topic/python-file-handling/6' }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
