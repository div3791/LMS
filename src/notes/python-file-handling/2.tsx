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

// ─── SVG: Read Methods Memory Comparison ─────────────────────────────────────
function ReadMemorySVG() {
  const methods = [
    { name: 'read()',       color: C.orange, fillPct: 1.0, label: 'Full string',   ram: '⚠️ all RAM' },
    { name: 'readline()',   color: C.blue,   fillPct: 0.25, label: '1 line',       ram: '✓ minimal' },
    { name: 'readlines()', color: C.purple,  fillPct: 1.0, label: 'list of lines', ram: '⚠️ all RAM' },
    { name: 'for line in f', color: C.green, fillPct: 0.25, label: '1 line/iter', ram: '✓ best' },
  ]

  const BW = 220, BH = 20, BX = 210
  const baseY = 30

  return (
    <svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes rm0Bar { 0%{width:0} 100%{width:${Math.round(methods[0].fillPct * BW)}px} }
          @keyframes rm1Bar { 0%{width:0} 100%{width:${Math.round(methods[1].fillPct * BW)}px} }
          @keyframes rm2Bar { 0%{width:0} 100%{width:${Math.round(methods[2].fillPct * BW)}px} }
          @keyframes rm3Bar { 0%{width:0} 100%{width:${Math.round(methods[3].fillPct * BW)}px} }
          @keyframes rmFade { 0%{opacity:0} 100%{opacity:1} }
          .rm0b{animation:rm0Bar .5s .0s ease both}
          .rm1b{animation:rm1Bar .5s .15s ease both}
          .rm2b{animation:rm2Bar .5s .3s ease both}
          .rm3b{animation:rm3Bar .5s .45s ease both}
          .rmf{animation:rmFade .4s .1s ease both}
        `}</style>
      </defs>

      {/* Headers */}
      <g className="rmf">
        <text x="10"  y="16" fill={C.muted} fontSize="9" fontWeight="700" fontFamily="Open Sans,sans-serif">Method</text>
        <text x={BX}  y="16" fill={C.muted} fontSize="9" fontWeight="700" fontFamily="Open Sans,sans-serif">RAM usage (500MB file)</text>
        <text x="450" y="16" fill={C.muted} fontSize="9" fontWeight="700" fontFamily="Open Sans,sans-serif">Result</text>
      </g>

      {methods.map((m, i) => {
        const y = baseY + i * 38
        const fillW = Math.round(m.fillPct * BW)
        return (
          <g key={m.name} className="rmf">
            {/* Stripe */}
            {i % 2 === 0 && <rect x="2" y={y - 4} width="516" height="34" rx="4" fill={m.color} fillOpacity=".04"/>}

            {/* Method name */}
            <text x="10" y={y + 14} fill={m.color} fontSize="10" fontWeight="700" fontFamily="monospace">{m.name}</text>

            {/* RAM bar — track */}
            <rect x={BX} y={y + 2} width={BW} height={BH} rx="4"
              fill={m.color} fillOpacity=".08" stroke={m.color} strokeOpacity=".2" strokeWidth="1"/>

            {/* RAM bar — fill (animated) */}
            <rect x={BX} y={y + 2} width={fillW} height={BH} rx="4"
              fill={m.color} fillOpacity=".4"
              className={`rm${i}b`}/>

            {/* RAM label inside bar */}
            <text x={BX + 8} y={y + 16} fill={m.color} fontSize="9" fontWeight="700" fontFamily="Open Sans,sans-serif">{m.ram}</text>

            {/* Result label */}
            <text x="450" y={y + 14} fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">{m.label}</text>
          </g>
        )
      })}

      {/* Bottom tip */}
      <text x="260" y="176" textAnchor="middle" fill={C.green} fontSize="9" fontWeight="700" fontFamily="Open Sans,sans-serif">
        for line in f = lazy — ek baar mein ek hi line RAM mein
      </text>
    </svg>
  )
}

// ─── SVG: Quick Recall ────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0F172A" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — Reading Strategies</text>

      {[
        {
          x: 12, color: C.orange, title: 'read()',
          rows: [['read()', 'full file string'], ['read(n)', 'n bytes/chars'], ['→ str', 'text mode mein'], ['⚠️ RAM', 'large file danger']],
        },
        {
          x: 182, color: C.blue, title: 'readline/lines',
          rows: [['readline()', '1 line + \\n'], ['readlines()', 'list of all lines'], ['→ list', 'all in memory'], ['strip()', '\\n hatao result se']],
        },
        {
          x: 352, color: C.green, title: 'for loop (Best)',
          rows: [['for line in f', 'lazy iteration'], ['1 line RAM', 'memory efficient'], ['large files ✓', 'GB bhi ok'], ['strip()', 'cleanup karo']],
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

export default function PythonFileHandling2() {
  return (
    <NoteLayout
      title="Read Methods — Reading Strategies"
      phase="0C"
      subtitle="read(), readline(), readlines(), for loop — kab kya use karein"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — Padhne ke 4 Tarike">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1">
                <span className="text-visual-3 font-bold">read()</span> = poori kitaab ek baar mein phadh lo aur yaad karo — thick book? RAM full!
              </span>
              <span className="block mb-1">
                <span className="text-visual-2 font-bold">readline()</span> = ek line padho, process karo, agli line pe jao
              </span>
              <span className="block mb-1">
                <span className="text-visual-4 font-bold">readlines()</span> = poori kitaab ke page-list banao pehle — phir process karo
              </span>
              <span className="block">
                <span className="text-visual-1 font-bold">for line in f</span> = bookmark rakho, ek ek line padho — koi bhi size ki kitaab, safe ✓
              </span>
            </>
          }
          diagram={<ReadMemorySVG />}
        />
      </SectionBlock>

      {/* ── Section 2: read() ── */}
      <SectionBlock icon="📖" title="read() — Puri File Ek Baar">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="read_variants.py"
            code={`with open('data.txt', 'r') as f:
    content = f.read()       # puri file → ek bada string
    # Returns: "Line 1\\nLine 2\\nLine 3\\n"

with open('data.txt', 'r') as f:
    chunk = f.read(100)      # sirf pehle 100 bytes/chars

# Chunked reading — memory safe for large files
with open('big.bin', 'rb') as f:
    while True:
        chunk = f.read(8192)  # 8KB at a time
        if not chunk:
            break
        process(chunk)`}
          />
          <InfoBox type="warn">
            <strong>read() warning:</strong> 500MB file ka <code className="font-mono text-xs">read()</code> = 500MB RAM usage. Config files ke liye theek hai, logs aur data files ke liye nahi.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 3: readline() ── */}
      <SectionBlock icon="↩️" title="readline() — Ek Line at a Time">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="readline_usage.py"
            code={`with open('data.txt', 'r') as f:
    line1 = f.readline()   # "Line 1\\n"
    line2 = f.readline()   # "Line 2\\n"
    line4 = f.readline()   # "" — empty string = EOF!

# Loop with readline
with open('data.txt', 'r') as f:
    while True:
        line = f.readline()
        if not line:         # EOF pe empty string
            break
        print(line.strip())

# Walrus operator (Python 3.8+) — cleaner
with open('data.txt') as f:
    while line := f.readline():
        print(line.strip())`}
          />
          <InfoBox type="info">
            <strong>EOF detection:</strong> <code className="font-mono text-xs">readline()</code> pe EOF = <code className="font-mono text-xs">""</code> (empty string) — <code className="font-mono text-xs">"\n"</code> nahi (woh blank line hogi). Yeh distinction important hai.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 4: readlines() ── */}
      <SectionBlock icon="📋" title="readlines() — List of All Lines">
        <CodeBlock
          language="python"
          filename="readlines_usage.py"
          code={`with open('data.txt', 'r') as f:
    lines = f.readlines()
    # ["Line 1\\n", "Line 2\\n", "Line 3\\n"]
    # NOTE: \\n included in each string!

# Strip newlines — list comprehension
lines_clean = [l.strip() for l in lines]
# ["Line 1", "Line 2", "Line 3"]

# Useful when: random access chahiye
print(lines[0])   # first line
print(lines[-1])  # last line`}
        />
      </SectionBlock>

      {/* ── Section 5: for loop — BEST ── */}
      <SectionBlock icon="🏆" title="for line in f — Hamesha Prefer Karo">
        <div className="space-y-4">
          <CompareBlock
            badLabel="❌ readlines() — sab RAM mein"
            goodLabel="✅ for loop — lazy, memory safe"
            bad={
              <CodeBlock
                language="python"
                code={`with open('big_log.txt') as f:
    for line in f.readlines():
        process(line)
# readlines() pura load karta hai pehle
# 2GB log? RAM full!`}
              />
            }
            good={
              <CodeBlock
                language="python"
                code={`with open('big_log.txt') as f:
    for line in f:         # lazy iteration
        process(line)      # 1 line at a time
# 2GB file? No problem — O(1) memory`}
              />
            }
          />
          <InfoBox type="tip">
            <strong>Golden rule:</strong> Hamesha <code className="font-mono text-xs">for line in f</code>. Sirf tab <code className="font-mono text-xs">read()</code> karo jab file definitely chhoti ho (config, template) ya puri content string mein chahiye (JSON parse, regex).
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 6: Traps ── */}
      <SectionBlock icon="⚠️" title="Common Traps">
        <TrapsTable rows={[
          {
            level: 'S',
            mistake: 'Large file pe read() call karna',
            kyun: '100MB+ file → 100MB+ RAM — server crash possible',
            fix: 'for line in f ya chunked read(8192) use karo',
          },
          {
            level: 'S',
            mistake: '\\n strip karna bhool gaya',
            kyun: 'readline() aur readlines() mein \\n included hota hai',
            fix: 'line.strip() ya line.rstrip("\\n") use karo',
          },
          {
            level: 'M',
            mistake: 'readline() + for loop mix karna',
            kyun: 'Cursor position shared hai — kuch lines skip ho jayengi',
            fix: 'Ek approach choose karo — dono ek saath mat use karo',
          },
        ]} />
      </SectionBlock>

      {/* ── Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'Read all (small files)', value: 'data = f.read()' },
          { label: 'Read n bytes', value: 'chunk = f.read(8192)' },
          { label: 'Read one line', value: 'line = f.readline().strip()' },
          { label: 'All lines list', value: 'lines = [l.strip() for l in f.readlines()]' },
          { label: 'Best — lazy loop', value: 'for line in f: process(line.strip())' },
          { label: 'Walrus EOF', value: 'while line := f.readline(): process(line)' },
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
            title: 'with open() — Context Manager',
            description: 'File safely open karna aur auto-close guarantee',
            href: '/roadmap/topic/python-file-handling/1',
          }}
          to={{
            title: 'Write Methods',
            description: 'write(), writelines() — file pe likhna',
            href: '/roadmap/topic/python-file-handling/3',
          }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
