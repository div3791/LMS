import {
  NoteLayout,
  SectionBlock,
  MentalModel,
  CodeBlock,
  TrapsTable,
  Cheatsheet,
  QuickRecall,
  ConnectedTopics,
  InfoBox,
} from '../../components/notes'

const C = {
  blue: '#4F8CFF',
  green: '#34D399',
  orange: '#F59E0B',
  purple: '#A78BFA',
  red: '#F87171',
  muted: '#9CA3AF',
  white: '#F8FAFC',
  border: '#1E3A5F',
}

// ─── SVG: Path Methods Visual ──────────────────────────────────────────────────
function PathMethodsSVG() {
  return (
    <svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes pm0 { 0%{opacity:0} 100%{opacity:1} }
          @keyframes pm1 { 0%{opacity:0;transform:translateX(6px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes pm2 { 0%{opacity:0;transform:translateX(6px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes pm3 { 0%{opacity:0;transform:translateX(6px)} 100%{opacity:1;transform:translateX(0)} }
          @keyframes pm4 { 0%{opacity:0;transform:translateX(6px)} 100%{opacity:1;transform:translateX(0)} }
          .pma{animation:pm0 .35s .0s ease both}
          .pmb{animation:pm1 .35s .15s ease both}
          .pmc{animation:pm2 .35s .3s ease both}
          .pmd{animation:pm3 .35s .45s ease both}
          .pme{animation:pm4 .35s .6s ease both}
        `}</style>
      </defs>

      {/* ── Root path ── */}
      <g className="pma">
        <rect x="10" y="8" width="500" height="26" rx="6" fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeWidth="1.2" />
        <text x="260" y="25" textAnchor="middle" fill={C.blue} fontSize="10" fontWeight="700" fontFamily="monospace">p = Path("/home/divyesh/projects/notes/app.py")</text>
      </g>

      {/* ── Existence checks ── */}
      <g className="pmb">
        <rect x="10" y="44" width="240" height="50" rx="6" fill={C.green} fillOpacity=".08" stroke={C.green} strokeWidth="1.2" />
        <text x="20" y="60" fill={C.green} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Existence Checks</text>
        <text x="20" y="76" fill={C.muted} fontSize="9" fontFamily="monospace">p.exists()   → True / False</text>
        <text x="20" y="90" fill={C.muted} fontSize="9" fontFamily="monospace">p.is_file()  / p.is_dir() → bool</text>
      </g>

      {/* ── mkdir ── */}
      <g className="pmc">
        <rect x="10" y="102" width="240" height="50" rx="6" fill={C.orange} fillOpacity=".08" stroke={C.orange} strokeWidth="1.2" />
        <text x="20" y="118" fill={C.orange} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Directory Creation</text>
        <text x="20" y="134" fill={C.muted} fontSize="9" fontFamily="monospace">p.mkdir()              → creates folder</text>
        <text x="20" y="148" fill={C.muted} fontSize="9" fontFamily="monospace">p.mkdir(parents=True)  → nested</text>
      </g>

      {/* ── glob ── */}
      <g className="pmd">
        <rect x="10" y="160" width="240" height="44" rx="6" fill={C.purple} fillOpacity=".08" stroke={C.purple} strokeWidth="1.2" />
        <text x="20" y="176" fill={C.purple} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Pattern Matching</text>
        <text x="20" y="192" fill={C.muted} fontSize="9" fontFamily="monospace">p.glob("*.py")  /  p.rglob("*.py")</text>
        <text x="20" y="200" fill={C.muted} fontSize="8" fontFamily="Open Sans,sans-serif">rglob = recursive by default</text>
      </g>

      {/* ── Properties ── */}
      <g className="pme">
        <rect x="265" y="44" width="245" height="160" rx="6" fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeWidth="1.2" />
        <text x="275" y="60" fill={C.blue} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Path Properties (read-only, no disk)</text>
        {[
          ['p.name', '"app.py"',],
          ['p.stem', '"app"',],
          ['p.suffix', '".py"',],
          ['p.parent', 'Path(".../notes")',],
          ['p.parts', '("/","home",...,"app.py")',],
          ['/ "sub"', 'join — Path / "sub"',],
        ].map(([prop, val], i) => {
          const y = 80 + i * 20
          return (
            <g key={prop}>
              {i % 2 === 0 && <rect x="269" y={y - 13} width="237" height="17" rx="3" fill={C.blue} fillOpacity=".06" />}
              <text x="275" y={y} fill={C.blue} fontSize="9" fontWeight="700" fontFamily="monospace">{prop}</text>
              <text x="345" y={y} fill={C.muted} fontSize="9" fontFamily="monospace">{val}</text>
            </g>
          )
        })}
      </g>
    </svg>
  )
}

// ─── SVG: Quick Recall ────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0F172A" stroke={C.border} strokeWidth="1.5" />
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — Path Methods</text>

      {[
        {
          x: 12, color: C.green, title: 'Checks',
          rows: [['exists()', 'file/dir hai?'], ['is_file()', 'regular file?'], ['is_dir()', 'directory?'], ['stat()', 'size, mtime etc']],
        },
        {
          x: 182, color: C.orange, title: 'Create/Delete',
          rows: [['mkdir()', 'folder banao'], ['parents=True', 'nested ok'], ['unlink()', 'file delete'], ['rmdir()', 'empty dir del']],
        },
        {
          x: 352, color: C.blue, title: 'Navigate',
          rows: [['glob("*.py")', 'current dir'], ['rglob("*.py")', 'recursive'], ['iterdir()', 'list contents'], ['/ "sub"', 'join paths']],
        },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="30" width="155" height="116" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2" />
          <text x={col.x + 77} y="48" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">{col.title}</text>
          {col.rows.map(([code, note], i) => {
            const y = 65 + i * 20
            return (
              <g key={code}>
                {i % 2 === 0 && <rect x={col.x + 4} y={y - 13} width="147" height="17" rx="3" fill={col.color} fillOpacity=".07" />}
                <text x={col.x + 8} y={y} fontSize="10" fontWeight="700" fill={col.color} fontFamily="monospace">{code}</text>
                <text x={col.x + 90} y={y} fontSize="10" fill={C.muted} fontFamily="Open Sans,sans-serif">{note}</text>
              </g>
            )
          })}
        </g>
      ))}
    </svg>
  )
}

export default function PythonFileHandling5() {
  return (
    <NoteLayout
      title="Path Methods — exists(), mkdir(), glob() aur Properties"
      phase="0C"
      subtitle="Existence checks, directory ops, pattern matching, path properties"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — Path Object kya Kar Sakta Hai?">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1">
                <span className="text-visual-3 font-bold">Swiss Army Knife:</span> <span className="font-mono text-visual-2">Path</span> sirf address nahi hai — ek smart object hai jo apne baare mein jaanta hai
              </span>
              <span className="block mb-1">
                <span className="text-visual-1 font-bold">Properties</span> = read-only attributes (name, suffix, parent) — koi disk access nahi, sirf string operations
              </span>
              <span className="block mb-1">
                <span className="text-visual-4 font-bold">Methods</span> = actions (exists(), mkdir(), glob()) — disk pe kaam karte hain
              </span>
              <span className="block">
                <span className="text-visual-3 font-bold">/ operator</span> = path joining — <span className="font-mono text-visual-2">base / "subdir" / "file.txt"</span> — OS-safe
              </span>
            </>
          }
          diagram={<PathMethodsSVG />}
        />
      </SectionBlock>

      {/* ── Section 2: Existence Checks ── */}
      <SectionBlock icon="🔍" title="Existence Checks">
        <CodeBlock
          language="python"
          filename="existence_checks.py"
          code={`from pathlib import Path

p = Path("/home/divyesh/data.csv")

if p.exists():
    print("hai!")           # True if file ya dir koi bhi ho

if p.is_file():
    data = p.read_text()    # regular file confirm

if p.is_dir():
    for item in p.iterdir():
        print(item)

# Metadata
info = p.stat()
print(info.st_size)         # bytes mein size
print(info.st_mtime)        # last modified timestamp`}
        />
      </SectionBlock>

      {/* ── Section 3: mkdir ── */}
      <SectionBlock icon="📁" title="mkdir() — Directories Banana">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="mkdir_usage.py"
            code={`from pathlib import Path

# Safe creation — most common pattern
Path("output/logs/2024").mkdir(
    parents=True,      # nested dirs banao — like mkdir -p
    exist_ok=True,     # exist kare to error mat do
)

# Delete
p = Path("output/temp.txt")
p.unlink()                  # file delete
p.unlink(missing_ok=True)   # Python 3.8+ — ignore if missing

Path("empty_dir").rmdir()   # sirf empty directory`}
          />
          <InfoBox type="tip">
            <strong>Golden pattern:</strong> <code className="font-mono text-xs">mkdir(parents=True, exist_ok=True)</code> — hamesha safe hai. Already exist kare ya parent nahi ho — dono cases handle karta hai.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 4: glob ── */}
      <SectionBlock icon="🔎" title="glob() aur rglob() — Pattern Matching">
        <CodeBlock
          language="python"
          filename="glob_usage.py"
          code={`from pathlib import Path

base = Path("/home/divyesh/projects")

# rglob — recursive (cleaner syntax)
all_py  = list(base.rglob("*.py"))    # sab .py files — nested bhi
all_csv = list(base.rglob("*.csv"))

# glob — current dir + optional **
txt_files = list(base.glob("**/*.txt"))  # recursive manually

# Filter + process
for f in base.rglob("*.log"):
    if f.stat().st_size > 1_000_000:   # 1MB se bada
        print(f"Large: {f.name}")

# Simple listing
for item in base.iterdir():
    if item.is_dir():
        print(f"Dir: {item.name}")`}
        />
      </SectionBlock>

      {/* ── Section 5: Path Properties ── */}
      <SectionBlock icon="🏷️" title="Path Properties — No Disk Access">
        <CodeBlock
          language="python"
          filename="path_properties.py"
          code={`from pathlib import Path

p = Path("/home/divyesh/notes/app.py")

p.name     # "app.py"          — filename with extension
p.stem     # "app"             — filename without extension
p.suffix   # ".py"             — extension only
p.suffixes # [".tar", ".gz"]   — multiple extensions!
p.parent   # Path("/home/divyesh/notes")

# Rename extension — creates new Path object
new = p.with_suffix(".txt")    # "app.txt"
new = p.with_stem("main")      # "main.py"
new = p.with_name("run.sh")    # ".../notes/run.sh"

# Path joining — / operator
config = p.parent / "config" / "settings.json"`}
        />
      </SectionBlock>

      {/* ── Section 6: read/write shortcuts ── */}
      <SectionBlock icon="⚡" title="Path Shortcuts — read_text / write_text">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="path_shortcuts.py"
            code={`from pathlib import Path

p = Path("data.txt")

# Quick read — open() ki zarurat nahi (chhoti files)
content = p.read_text(encoding="utf-8")
raw     = p.read_bytes()                # binary

# Quick write — overwrites!
p.write_text("Hello World\\n", encoding="utf-8")
p.write_bytes(b"\\x89PNG...")`}
          />
          <InfoBox type="warn">
            <code className="font-mono text-xs">read_text()</code> ek baar mein puri file load karta hai. Large files ke liye <code className="font-mono text-xs">with open()</code> + <code className="font-mono text-xs">for line in f</code> use karo.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 7: Traps ── */}
      <SectionBlock icon="⚠️" title="Common Traps">
        <TrapsTable rows={[
          {
            level: 'S',
            mistake: 'mkdir() without exist_ok=True',
            kyun: 'FileExistsError — CI/CD mein baar baar fail hoga',
            fix: 'mkdir(parents=True, exist_ok=True) — hamesha',
          },
          {
            level: 'M',
            mistake: 'Path(str) + str concatenation',
            kyun: 'Path("a") + "/b" = TypeError — Path is not str',
            fix: 'Path("a") / "b" — / operator use karo',
          },
          {
            level: 'B',
            mistake: 'p.name vs p.stem confusion',
            kyun: 'name = "app.py", stem = "app" — dono different hain',
            fix: 'name = full filename, stem = without last suffix',
          },
        ]} />
      </SectionBlock>

      {/* ── Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'Check exists', value: 'if p.exists(): ...' },
          { label: 'Create dir safely', value: 'p.mkdir(parents=True, exist_ok=True)' },
          { label: 'Find all .py', value: 'list(base.rglob("*.py"))' },
          { label: 'Quick read', value: 'text = p.read_text(encoding="utf-8")' },
          { label: 'Quick write', value: 'p.write_text("content", encoding="utf-8")' },
          { label: 'Join paths', value: 'full = base / "subdir" / "file.txt"' },
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
            title: 'pathlib.Path Basics',
            description: 'Path anatomy — parts, parent, stem, suffix',
            href: '/roadmap/topic/python-file-handling/4',
          }}
          to={{
            title: 'os.path vs pathlib',
            description: 'Legacy comparison aur migration guide',
            href: '/roadmap/topic/python-file-handling/10',
          }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
