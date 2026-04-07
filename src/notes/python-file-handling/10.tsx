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
  green:  '#34D399',
  orange: '#F59E0B',
  purple: '#A78BFA',
  red:    '#F87171',
  muted:  '#9CA3AF',
  white:  '#F8FAFC',
  border: '#1E3A5F',
}

// ─── SVG: Migration Table os.path → pathlib ───────────────────────────────────
function MigrationSVG() {
  const rows = [
    { old: 'os.path.join(a, b)',      neo: 'Path(a) / b',          label: 'Join paths' },
    { old: 'os.path.dirname(p)',      neo: 'Path(p).parent',        label: 'Parent dir' },
    { old: 'os.path.basename(p)',     neo: 'Path(p).name',          label: 'Filename' },
    { old: 'os.path.splitext(p)',     neo: 'Path(p).stem + .suffix',label: 'Split ext' },
    { old: 'os.path.exists(p)',       neo: 'Path(p).exists()',      label: 'Exists?' },
    { old: 'os.path.isfile(p)',       neo: 'Path(p).is_file()',     label: 'Is file?' },
    { old: 'os.makedirs(p,e_ok=T)',   neo: 'Path(p).mkdir(parents=T,exist_ok=T)', label: 'Make dirs' },
  ]

  return (
    <svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes mg0 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg1 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg2 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg3 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg4 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg5 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes mg6 { 0%{opacity:0;transform:translateX(-5px)} 100%{opacity:1;transform:translateX(0)} }
          .mg0{animation:mg0 .3s .00s ease both}
          .mg1{animation:mg1 .3s .07s ease both}
          .mg2{animation:mg2 .3s .14s ease both}
          .mg3{animation:mg3 .3s .21s ease both}
          .mg4{animation:mg4 .3s .28s ease both}
          .mg5{animation:mg5 .3s .35s ease both}
          .mg6{animation:mg6 .3s .42s ease both}
        `}</style>
        <marker id="mg-arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
      </defs>

      {/* Column headers */}
      <text x="10"  y="14" fill={C.red}   fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">os.path (legacy)</text>
      <text x="288" y="14" fill={C.green} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">pathlib (modern)</text>
      <text x="510" y="14" textAnchor="end" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">Task</text>

      {rows.map((row, i) => {
        const y = 24 + i * 26
        const cls = `mg${i}`
        return (
          <g key={row.label} className={cls}>
            {i % 2 === 0 && <rect x="2" y={y} width="516" height="23" rx="3" fill={C.muted} fillOpacity=".05"/>}
            <text x="10" y={y + 15} fill={C.red}   fontSize="9" fontWeight="700" fontFamily="monospace">{row.old}</text>
            <line x1="252" y1={y + 11} x2="270" y2={y + 11}
              stroke={C.green} strokeWidth="1.5" markerEnd="url(#mg-arr)"/>
            <text x="276" y={y + 15} fill={C.green} fontSize="9" fontWeight="700" fontFamily="monospace">{row.neo}</text>
            <text x="510" y={y + 15} textAnchor="end" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">{row.label}</text>
          </g>
        )
      })}

      <text x="260" y="205" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">
        pathlib = OOP approach — method chaining possible, cleaner code
      </text>
    </svg>
  )
}

// ─── SVG: Quick Recall ────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0F172A" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — os.path vs pathlib</text>

      {[
        {
          x: 12, color: C.red, title: 'os.path (old)',
          rows: [['os.path.join', 'string result'], ['os.path.exists', 'function-style'], ['os.makedirs', 'verbose API'], ['str concat', 'error-prone']],
        },
        {
          x: 182, color: C.green, title: 'pathlib (new)',
          rows: [['Path / "sub"', 'object-style join'], ['p.exists()', 'method-style'], ['p.mkdir()', 'clean API'], ['p.parent/f', 'chain-able']],
        },
        {
          x: 352, color: C.orange, title: 'When os.path',
          rows: [['legacy code', 'backward compat'], ['str expected', 'old library APIs'], ['expanduser', 'Path.home() better'], ['realpath', 'Path().resolve()']],
        },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="30" width="155" height="116" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="48" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">{col.title}</text>
          {col.rows.map(([code, note], i) => {
            const y = 65 + i * 20
            return (
              <g key={code}>
                {i % 2 === 0 && <rect x={col.x + 4} y={y - 13} width="147" height="17" rx="3" fill={col.color} fillOpacity=".07"/>}
                <text x={col.x + 8}  y={y} fontSize="10" fontWeight="700" fill={col.color} fontFamily="monospace">{code}</text>
                <text x={col.x + 90} y={y} fontSize="10" fill={C.muted} fontFamily="Open Sans,sans-serif">{note}</text>
              </g>
            )
          })}
        </g>
      ))}
    </svg>
  )
}

export default function PythonFileHandling10() {
  return (
    <NoteLayout
      title="os.path vs pathlib — Old vs Modern"
      phase="0C"
      subtitle="Legacy function-style vs OOP-style — migration guide"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — T9 vs Touchscreen">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1">
                <span className="text-visual-3 font-bold">os.path</span> = Nokia ka T9 keyboard — kaam karta hai, lekin verbose aur chaining impossible
              </span>
              <span className="block mb-1">
                <span className="text-visual-2 font-bold">pathlib</span> = smartphone touchscreen — intuitive, OOP, method chaining, OS-independent
              </span>
              <span className="block mb-1">
                <span className="text-visual-1 font-bold">os.path.join(a, b, c)</span> = teen alag buttons dabao
              </span>
              <span className="block">
                <span className="text-visual-4 font-bold">Path(a) / b / c</span> = swipe karo — same result, much cleaner
              </span>
            </>
          }
          diagram={<MigrationSVG />}
        />
      </SectionBlock>

      {/* ── Section 2: Side by side ── */}
      <SectionBlock icon="⚔️" title="Side by Side Comparison">
        <CompareBlock
          badLabel="❌ os.path style — verbose"
          goodLabel="✅ pathlib style — clean"
          bad={
            <CodeBlock
              language="python"
              code={`import os

base = "/home/divyesh/projects"
file = "data.csv"

full   = os.path.join(base, "output", file)
parent = os.path.dirname(full)
name   = os.path.basename(full)
stem, ext = os.path.splitext(name)

if os.path.exists(full):
    size = os.path.getsize(full)

os.makedirs(
  os.path.join(base, "output"),
  exist_ok=True
)`}
            />
          }
          good={
            <CodeBlock
              language="python"
              code={`from pathlib import Path

base = Path("/home/divyesh/projects")
file = "data.csv"

full   = base / "output" / file
parent = full.parent
name   = full.name
stem   = full.stem
ext    = full.suffix

if full.exists():
    size = full.stat().st_size

(base / "output").mkdir(
  parents=True, exist_ok=True
)`}
            />
          }
        />
      </SectionBlock>

      {/* ── Section 3: Interoperability ── */}
      <SectionBlock icon="🔄" title="Interoperability — Dono Saath Mein">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="interop.py"
            code={`from pathlib import Path
import os

p = Path("/home/divyesh/data.txt")

# Path → str (jab purani library str chahti ho)
str(p)         # "/home/divyesh/data.txt"
os.fspath(p)   # preferred way — __fspath__ protocol

# str → Path
p2 = Path(os.environ['HOME']) / "file.txt"

# Python 3.6+ mein most stdlib functions Path accept karti hain
import shutil
shutil.copy(p, Path("/tmp/backup.txt"))   # OK
open(p, 'r')                              # OK
os.stat(p)                                # OK`}
          />
          <InfoBox type="tip">
            Python 3.6+ mein most stdlib functions (<code className="font-mono text-xs">open, shutil, os.stat</code>) directly Path objects accept karti hain. Sirf third-party libraries jo explicitly <code className="font-mono text-xs">str</code> check karti hain wahan <code className="font-mono text-xs">str(p)</code> lagao.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 4: pathlib superpower ── */}
      <SectionBlock icon="⛓️" title="pathlib ka Superpower — Chaining">
        <CodeBlock
          language="python"
          filename="pathlib_power.py"
          code={`from pathlib import Path

# Get all .py files, just the names
py_stems = [f.stem for f in Path('.').rglob('*.py')]

# Rename extension — new Path object banta hai
old = Path("report.csv")
new = old.with_suffix(".xlsx")          # "report.xlsx"

# Mirror input structure in output
src = Path("data/raw/jan/sales.csv")
dst = Path("data/processed") / src.relative_to("data/raw")
# → Path("data/processed/jan/sales.csv")

dst.parent.mkdir(parents=True, exist_ok=True)
dst.write_text(process(src.read_text()))

# Home directory
home = Path.home()                      # ~ expand
config = home / ".config" / "app.json"`}
        />
      </SectionBlock>

      {/* ── Section 5: Traps ── */}
      <SectionBlock icon="⚠️" title="Common Traps">
        <TrapsTable rows={[
          {
            level: 'M',
            mistake: 'Path + str karne ki koshish',
            kyun: 'Path("a") + "/b" = TypeError — Path strings add nahi hota',
            fix: 'Path("a") / "b" — / operator hamesha use karo',
          },
          {
            level: 'M',
            mistake: 'str expected ho aur Path diya',
            kyun: 'Kuch purani libraries isinstance(p, str) check karti hain — fail',
            fix: 'str(path) explicit conversion ya os.fspath(path)',
          },
          {
            level: 'B',
            mistake: 'Path("~") expand nahi hoti',
            kyun: '~ tilde expand nahi hogi automatically in Path()',
            fix: 'Path("~/file").expanduser() ya Path.home() / "file"',
          },
        ]} />
      </SectionBlock>

      {/* ── Cheatsheet ── */}
      <SectionBlock icon="📋" title="Migration Cheatsheet">
        <Cheatsheet items={[
          { label: 'os.path.join(a, b)', value: '→ Path(a) / b' },
          { label: 'os.path.dirname(p)', value: '→ Path(p).parent' },
          { label: 'os.path.basename(p)', value: '→ Path(p).name' },
          { label: 'os.path.splitext(p)', value: '→ (Path(p).stem, Path(p).suffix)' },
          { label: 'os.path.exists(p)', value: '→ Path(p).exists()' },
          { label: "os.path.expanduser('~')", value: '→ Path.home()' },
        ]} />
      </SectionBlock>

      {/* ── Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{
            title: 'Path Methods — exists(), mkdir(), glob()',
            description: 'Path ke methods — kya kar sakte hain',
            href: '/roadmap/topic/python-file-handling/5',
          }}
          to={{
            title: 'pathlib.Path Basics',
            description: 'Path anatomy — parts, stem, suffix',
            href: '/roadmap/topic/python-file-handling/4',
          }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
