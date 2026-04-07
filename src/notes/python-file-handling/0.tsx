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
  StepsBlock,
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

// ─── SVG 1: open() under the hood ─────────────────────────────────────────────
// Pure flow diagram — no dark backgrounds, no SVG tables
function FileModelSVG() {
  return (
    <svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes fmFade0 { 0%{opacity:0} 100%{opacity:1} }
          @keyframes fmFade1 { 0%{opacity:0} 100%{opacity:1} }
          @keyframes fmFade2 { 0%{opacity:0} 100%{opacity:1} }
          @keyframes fmArrow { 0%{stroke-dashoffset:40} 100%{stroke-dashoffset:0} }
          .fm0{animation:fmFade0 .4s .1s ease both}
          .fm1{animation:fmFade1 .4s .4s ease both}
          .fm2{animation:fmFade2 .4s .7s ease both}
          .fm3{animation:fmFade2 .4s 1.0s ease both}
          .fma{animation:fmArrow .5s ease both; stroke-dasharray:40}
        `}</style>
        <marker id="fm-arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.muted}/>
        </marker>
      </defs>

      {/* Node: Disk */}
      <g className="fm0">
        <rect x="10" y="10" width="100" height="72" rx="8" fill={C.orange} fillOpacity=".12" stroke={C.orange} strokeWidth="1.5"/>
        <text x="60" y="40" textAnchor="middle" fill={C.orange} fontSize="22">💾</text>
        <text x="60" y="58" textAnchor="middle" fill={C.orange} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Disk</text>
        <text x="60" y="74" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">data.txt stored</text>
      </g>

      {/* Arrow 1 */}
      <g className="fm1">
        <line x1="110" y1="46" x2="138" y2="46" stroke={C.muted} strokeWidth="1.5" markerEnd="url(#fm-arr)" className="fma"/>
        <text x="124" y="38" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">open()</text>
      </g>

      {/* Node: OS */}
      <g className="fm1">
        <rect x="140" y="10" width="100" height="72" rx="8" fill={C.purple} fillOpacity=".12" stroke={C.purple} strokeWidth="1.5"/>
        <text x="190" y="40" textAnchor="middle" fill={C.purple} fontSize="22">🛡️</text>
        <text x="190" y="58" textAnchor="middle" fill={C.purple} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">OS</text>
        <text x="190" y="74" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">permission check</text>
      </g>

      {/* Arrow 2 */}
      <g className="fm2">
        <line x1="240" y1="46" x2="268" y2="46" stroke={C.muted} strokeWidth="1.5" markerEnd="url(#fm-arr)" className="fma"/>
        <text x="254" y="38" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">fd=3</text>
      </g>

      {/* Node: File Descriptor */}
      <g className="fm2">
        <rect x="270" y="10" width="110" height="72" rx="8" fill={C.green} fillOpacity=".12" stroke={C.green} strokeWidth="1.5"/>
        <text x="325" y="40" textAnchor="middle" fill={C.green} fontSize="22">🔑</text>
        <text x="325" y="58" textAnchor="middle" fill={C.green} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">File Descriptor</text>
        <text x="325" y="74" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">integer ID (fd=3)</text>
      </g>

      {/* Arrow 3 */}
      <g className="fm3">
        <line x1="380" y1="46" x2="408" y2="46" stroke={C.muted} strokeWidth="1.5" markerEnd="url(#fm-arr)" className="fma"/>
      </g>

      {/* Node: Python Object */}
      <g className="fm3">
        <rect x="410" y="10" width="100" height="72" rx="8" fill={C.blue} fillOpacity=".12" stroke={C.blue} strokeWidth="1.5"/>
        <text x="460" y="40" textAnchor="middle" fill={C.blue} fontSize="22">🐍</text>
        <text x="460" y="58" textAnchor="middle" fill={C.blue} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Python f</text>
        <text x="460" y="74" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">f = open(...)</text>
      </g>

      {/* Bottom label */}
      <text x="260" y="105" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">
        open() = connection only — data tab aata hai jab
      </text>
      <text x="260" y="118" textAnchor="middle" fill={C.blue} fontSize="10" fontFamily="monospace">f.read()</text>
    </svg>
  )
}

// ─── SVG 2: Seek/Tell — 3-state progress bar ─────────────────────────────────
// Layout budget per state: label(14) + bar(22) + gap(18) + label(14) = ~68px
// S1: y=14–68 | divider: y=76 | S2: y=84–148 | arrow: y=158 | S3: y=170–205
function SeekTellSVG() {
  const TX = 15, TW = 295, TH = 22
  const END  = TX + TW                      // 310
  const C5   = TX + Math.round(5/11 * TW)  // 149 — cursor at byte 5

  // Helper: one state row
  function State({
    y, fillW, cursorX, cursorColor,
    label, labelColor, tickLabel, tickX,
    noteLines, noteColor, className,
  }: {
    y: number; fillW: number; cursorX: number; cursorColor: string
    label: string; labelColor: string; tickLabel: string; tickX: number
    noteLines: string[]; noteColor: string; className: string
  }) {
    return (
      <g className={className}>
        {/* Row label */}
        <text x={TX} y={y} fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif"
          dangerouslySetInnerHTML={undefined}>
          {label}
        </text>
        {/* Track */}
        <rect x={TX} y={y + 6} width={TW} height={TH} rx="5"
          fill={cursorColor} fillOpacity=".08" stroke={cursorColor} strokeOpacity=".25" strokeWidth="1"/>
        {/* Filled zone */}
        {fillW > 0 && (
          <rect x={TX} y={y + 6} width={fillW} height={TH} rx="5"
            fill={cursorColor} fillOpacity=".3"/>
        )}
        {/* Cursor line */}
        <rect x={cursorX - 2} y={y + 2} width="4" height={TH + 10} rx="2" fill={cursorColor}/>
        {/* Tick: 0 */}
        <text x={TX} y={y + 40} textAnchor="start" fill={C.muted} fontSize="9" fontFamily="monospace">0</text>
        {/* Tick: cursor position */}
        <text x={tickX} y={y + 40} textAnchor="middle" fill={labelColor} fontSize="10"
          fontWeight="700" fontFamily="Open Sans,sans-serif">{tickLabel}</text>
        {/* Tick: 11 */}
        <text x={END} y={y + 40} textAnchor="end" fill={C.muted} fontSize="9" fontFamily="monospace">11</text>
        {/* Notes right side */}
        {noteLines.map((line, i) => (
          <text key={i} x={END + 15} y={y + 6 + (i + 1) * 16} fill={noteColor}
            fontSize="11" fontFamily="Open Sans,sans-serif"
            fontWeight={i === 0 ? '700' : '400'}>{line}</text>
        ))}
      </g>
    )
  }

  return (
    <svg viewBox="0 0 520 205" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes stRow { 0%{opacity:0;transform:translateY(5px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes stSeek { 0%{stroke-dashoffset:240} 100%{stroke-dashoffset:0} }
          .st0{animation:stRow .4s .05s ease both}
          .st1{animation:stRow .4s .35s ease both}
          .st2{animation:stRow .4s .75s ease both}
          .stsk{animation:stSeek .5s .55s ease both; stroke-dasharray:240}
        `}</style>
        <marker id="st-left" markerWidth="8" markerHeight="8" refX="1" refY="3" orient="auto">
          <path d="M8,0 L0,3 L8,6 Z" fill={C.orange}/>
        </marker>
      </defs>

      {/* ── State 1: partial read ── */}
      <g className="st0">
        <text x={TX} y="14" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">
          After <tspan fill={C.blue} fontFamily="monospace" fontWeight="700">f.read(5)</tspan>
        </text>
        <rect x={TX} y="20" width={TW} height={TH} rx="5"
          fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeOpacity=".25" strokeWidth="1"/>
        <rect x={TX} y="20" width={C5 - TX} height={TH} rx="5" fill={C.blue} fillOpacity=".35"/>
        <rect x={C5 - 2} y="16" width="4" height={TH + 10} rx="2" fill={C.green}/>
        <text x={TX}  y="56" textAnchor="start" fill={C.muted}  fontSize="9"  fontFamily="monospace">0</text>
        <text x={C5}  y="56" textAnchor="middle" fill={C.green} fontSize="10" fontFamily="Open Sans,sans-serif" fontWeight="700">tell()=5</text>
        <text x={END} y="56" textAnchor="end"   fill={C.muted}  fontSize="9"  fontFamily="monospace">11</text>
        <text x={END + 15} y="33" fill={C.blue}  fontSize="11" fontWeight="700" fontFamily="Open Sans,sans-serif">read → "Hello"</text>
        <text x={END + 15} y="48" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">6 chars unread</text>
      </g>

      {/* ── Divider ── */}
      <line x1={TX} y1="68" x2={END} y2="68" stroke={C.muted} strokeWidth="0.5" strokeDasharray="4 4" className="st1"/>

      {/* ── State 2: fully read → empty ── */}
      <g className="st1">
        <text x={TX} y="82" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">
          After <tspan fill={C.blue} fontFamily="monospace" fontWeight="700">f.read()</tspan> (remaining)
        </text>
        <rect x={TX} y="88" width={TW} height={TH} rx="5"
          fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeOpacity=".25" strokeWidth="1"/>
        <rect x={TX} y="88" width={TW} height={TH} rx="5" fill={C.blue} fillOpacity=".35"/>
        <rect x={END - 2} y="84" width="4" height={TH + 10} rx="2" fill={C.red}/>
        <text x={TX}  y="124" textAnchor="start" fill={C.muted} fontSize="9"  fontFamily="monospace">0</text>
        <text x={END} y="124" textAnchor="end"   fill={C.red}   fontSize="10" fontFamily="Open Sans,sans-serif" fontWeight="700">tell()=11</text>
        <text x={END + 15} y="101" fill={C.red}  fontSize="11" fontWeight="700" fontFamily="Open Sans,sans-serif">⚠️ f.read()</text>
        <text x={END + 15} y="117" fill={C.red}  fontSize="11" fontFamily="Open Sans,sans-serif">= "" empty!</text>
      </g>

      {/* ── seek(0) arrow ── */}
      <g className="stsk">
        <line x1={END - 5} y1="142" x2={TX + 12} y2="142"
          stroke={C.orange} strokeWidth="2.5" markerEnd="url(#st-left)"/>
        <text x={(TX + END) / 2} y="137" textAnchor="middle" fill={C.orange}
          fontSize="11" fontWeight="700" fontFamily="Open Sans,sans-serif">seek(0) — cursor wapas start pe</text>
      </g>

      {/* ── State 3: after seek(0) ── */}
      <g className="st2">
        <text x={TX} y="158" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">
          After <tspan fill={C.orange} fontFamily="monospace" fontWeight="700">f.seek(0)</tspan>
        </text>
        <rect x={TX} y="164" width={TW} height={TH} rx="5"
          fill={C.green} fillOpacity=".08" stroke={C.green} strokeOpacity=".4" strokeWidth="1"/>
        <rect x={TX - 2} y="160" width="4" height={TH + 10} rx="2" fill={C.green}/>
        <text x={TX}  y="200" textAnchor="start" fill={C.green} fontSize="10" fontFamily="Open Sans,sans-serif" fontWeight="700">tell()=0</text>
        <text x={END} y="200" textAnchor="end"   fill={C.muted} fontSize="9"  fontFamily="monospace">11</text>
        <text x={END + 15} y="177" fill={C.green} fontSize="11" fontWeight="700" fontFamily="Open Sans,sans-serif">✓ f.read()</text>
        <text x={END + 15} y="193" fill={C.green} fontSize="11" fontFamily="Open Sans,sans-serif">works again!</text>
      </g>
    </svg>
  )
}

// ─── SVG 3: Quick Recall ──────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 185" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="185" rx="10" fill="#0F172A" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — File I/O</text>

      {[
        {
          x: 12, color: C.blue, title: 'open() Modes',
          rows: [['fd', 'OS integer ID'], ['"r"', 'safe read only'], ['"w"', '💀 deletes content'], ['"a"', 'safe append'], ['"rb"/"wb"', 'binary mode']],
        },
        {
          x: 182, color: C.green, title: 'Read Methods',
          rows: [['read()', '⚠️ full file → RAM'], ['read(n)', '✓ chunk efficient'], ['readline()', 'one line'], ['readlines()', 'list, ⚠️ heavy'], ['for line:f', '✓ lazy, best']],
        },
        {
          x: 352, color: C.orange, title: 'Safe Write',
          rows: [['temp file', 'rough copy pehle'], ['write data', 'temp pe pura'], ['os.replace', 'atomic swap'], ['crash safe', 'original intact'], ['"w" direct', '💀 crash = empty']],
        },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="140" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">{col.title}</text>
          {col.rows.map(([code, note], i) => {
            const y = 67 + i * 20
            return (
              <g key={code}>
                {i % 2 === 0 && <rect x={col.x + 4} y={y - 13} width="147" height="17" rx="3" fill={col.color} fillOpacity=".07"/>}
                <text x={col.x + 8}  y={y} fontSize="10" fontWeight="700" fill={col.color} fontFamily="monospace">{code}</text>
                <text x={col.x + 70} y={y} fontSize="10" fill={C.muted} fontFamily="Open Sans,sans-serif">{note}</text>
              </g>
            )
          })}
        </g>
      ))}
    </svg>
  )
}

export default function PythonFileHandling0() {
  return (
    <NoteLayout
      title="File I/O Basics"
      phase="0C"
      subtitle="open(), modes, read/write methods, seek/tell, stream processing, atomic write"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — File System kya hai?">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1"><span className="text-visual-3 font-bold">File</span> = disk pe locked vault — data wahan hi pada hai</span>
              <span className="block mb-1"><span className="text-visual-2 font-bold">open()</span> = OS se permission + ek key (file descriptor) lo</span>
              <span className="block mb-1"><span className="text-visual-1 font-bold">f.read()</span> = tab data RAM mein aata hai — open() pe nahi</span>
              <span className="block"><span className="text-visual-4 font-bold">with open()</span> = auto-lock — exception ho tab bhi key wapas</span>
            </>
          }
          diagram={<FileModelSVG />}
        />
      </SectionBlock>

      {/* ── Section 2: File Modes ── */}
      <SectionBlock icon="🔑" title="File Modes — Sabse Dangerous Part">
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-highlight">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-surface-visual border-b border-highlight">
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Mode</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">What it does</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Risk</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Important Note</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mode: '"r"',  label: 'Read only',        risk: '✅ safe',   color: 'text-visual-2', note: 'File nahi mila → FileNotFoundError' },
                  { mode: '"w"',  label: 'Write (overwrite)', risk: '💀 high',  color: 'text-error',    note: 'Existing content instantly DELETE' },
                  { mode: '"a"',  label: 'Append',            risk: '✅ safe',   color: 'text-visual-2', note: 'End mein add karta hai, kuch delete nahi' },
                  { mode: '"rb"', label: 'Read binary',       risk: '✅ safe',   color: 'text-visual-2', note: 'Images/PDFs ke liye — decode nahi karta' },
                  { mode: '"wb"', label: 'Write binary',      risk: '⚠️ med',   color: 'text-warning',  note: 'Overwrites — images/files ke liye' },
                  { mode: '"r+"', label: 'Read + write',      risk: '⚠️ med',   color: 'text-warning',  note: 'Pointer position track karo — tricky' },
                ].map(({ mode, label, risk, color, note }) => (
                  <tr key={mode} className="border-b border-highlight last:border-0 hover:bg-surface-visual transition-colors">
                    <td className="px-4 py-3 font-code text-xs text-visual-1">{mode}</td>
                    <td className="px-4 py-3 text-content">{label}</td>
                    <td className={`px-4 py-3 font-body text-sm ${color}`}>{risk}</td>
                    <td className="px-4 py-3 text-content-muted">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <InfoBox type="warn" title='"w" mode ka blast — yaad rakh'>
            <code className="font-code text-xs">open("transactions.log", "w")</code> → file ka pura content instantly delete.
            Crash bhi na aaye — file empty ho jaegi. Logs ke liye hamesha <code className="font-code text-xs">"a"</code> use karo.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 3: with open() ── */}
      <SectionBlock icon="🔒" title='with open() — Professional Way'>
        <div className="space-y-4">
          <CompareBlock
            badLabel='❌ Manual close — leak risk'
            goodLabel='✅ with open() — auto close'
            bad={`f = open("file.txt", "r")
data = f.read()
# Error aa gaya → f.close() kabhi nahi chala
# File descriptor leak — OS level bug`}
            good={`with open("file.txt", "r", encoding="utf-8") as f:
    data = f.read()
# Block khatam → auto close, exception ho tab bhi`}
          />
          <InfoBox type="tip" title="encoding hamesha specify karo">
            <code className="font-code text-xs">open("file.txt")</code> → system default encoding use karta hai.
            Windows pe <code className="font-code text-xs">cp1252</code>, Linux pe <code className="font-code text-xs">utf-8</code> — production mein alag behave karega.
            Hamesha <code className="font-code text-xs">encoding="utf-8"</code> likho.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 4: Read Methods ── */}
      <SectionBlock icon="📖" title="Read Methods — Sahi Strategy Chuno">
        <div className="space-y-4">
          <div className="overflow-x-auto rounded-xl border border-highlight">
            <table className="w-full text-sm font-body">
              <thead>
                <tr className="bg-surface-visual border-b border-highlight">
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Method</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Returns</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Memory</th>
                  <th className="text-left px-4 py-3 text-[11px] uppercase tracking-wide text-content-muted font-heading">Use When</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['read()',        'full string',   '❌ heavy', 'Small files only'],
                  ['read(n)',       'n chars',       '✅ safe',  'Large file — chunk processing'],
                  ['readline()',    'one line',      '✅ safe',  'Line-by-line with position control'],
                  ['readlines()',   'list of lines', '❌ heavy', 'Avoid on large files'],
                  ['for line in f', 'one line',      '✅ best',  'Default choice — lazy, clean'],
                ].map(([m, r, mem, use], i) => (
                  <tr key={m} className="border-b border-highlight last:border-0 hover:bg-surface-visual transition-colors">
                    <td className="px-4 py-3 font-code text-xs text-visual-1">{m}</td>
                    <td className="px-4 py-3 text-content">{r}</td>
                    <td className="px-4 py-3 text-content">{mem}</td>
                    <td className="px-4 py-3 text-content-muted">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CodeBlock code={`# ✅ Best practice — lazy iteration
with open("big.log", encoding="utf-8") as f:
    for line in f:              # ek baar mein ek line RAM mein
        if "ERROR" in line:
            print(line.strip())

# ✅ Chunk processing (binary/large files)
with open("big.bin", "rb") as f:
    while chunk := f.read(4096):   # walrus operator
        process(chunk)`} />
        </div>
      </SectionBlock>

      {/* ── Section 5: Write Methods ── */}
      <SectionBlock icon="✍️" title="Write Methods">
        <div className="space-y-4">
          <CodeBlock code={`# write() — single string, full control
with open("log.txt", "a", encoding="utf-8") as f:
    f.write("ERROR: disk full\\n")   # \\n manually daalna padega

# writelines() — list se write
lines = ["line1", "line2", "line3"]

# ❌ Trap — no newlines added automatically
f.writelines(lines)        # → "line1line2line3"

# ✅ Fix
f.write("\\n".join(lines) + "\\n")

# ✅ Or explicitly
f.writelines(line + "\\n" for line in lines)`} />
          <InfoBox type="warn" title="Python kabhi auto-newline nahi lagata">
            Java ka <code className="font-code text-xs">println()</code> Python mein nahi hai.
            <code className="font-code text-xs">write()</code> aur <code className="font-code text-xs">writelines()</code> dono mein
            <code className="font-code text-xs">\n</code> tumhari zimmedari hai.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 6: Seek / Tell ── */}
      <SectionBlock icon="🎬" title="Seek & Tell — File Pointer">
        <div className="space-y-4">
          <SeekTellSVG />
          <CodeBlock code={`with open("data.txt", "r+", encoding="utf-8") as f:
    data = f.read()         # pura read — pointer end pe
    print(f.tell())         # → 11 (file size)

    f.read()                # → "" — pointer pehle se end pe hai!

    f.seek(0)               # pointer start pe wapas
    data_again = f.read()   # ab kaam karega

    f.seek(6)               # position 6 pe jump
    f.write("Python")       # wahan se overwrite`} />
        </div>
      </SectionBlock>

      {/* ── Section 7: Stream Processing ── */}
      <SectionBlock icon="🌊" title="Stream Processing — Large Files">
        <div className="space-y-4">
          <CompareBlock
            badLabel="❌ 5GB file full RAM mein"
            goodLabel="✅ Chunk by chunk — scalable"
            bad={`# 5GB log file
data = f.read()        # → server crash
process_all(data)      # kabhi nahi chalega`}
            good={`# Input → process → output streaming
with open("input.log") as fin, \\
     open("output.log", "w") as fout:
    while chunk := fin.read(4096):
        fout.write(process(chunk))

# Ya line-by-line (log files ke liye)
for line in fin:
    if should_keep(line):
        fout.write(line)`}
          />
        </div>
      </SectionBlock>

      {/* ── Section 8: Atomic Write ── */}
      <SectionBlock icon="🛡️" title="Atomic Write — Safe File Update">
        <div className="space-y-4">
          <InfoBox type="err" title="Direct overwrite ka problem">
            <code className="font-code text-xs">open("data.json", "w")</code> ke baad agar crash ho — file empty ho jaegi.
            Pura data gone. Production mein ye sabse bada silent killer hai.
          </InfoBox>
          <StepsBlock steps={[
            { title: 'Temp file pe likho', description: 'Original file touch mat karo — pehle temp.json mein likho pura data' },
            { title: 'Verify karo (optional)', description: 'Likha hua data valid hai? Check karo before replace' },
            { title: 'os.replace() se swap karo', description: 'Ye operation atomic hai — ya poora hoga ya nahi, beech mein nahi rukega' },
          ]} />
          <CodeBlock code={`import os, json

# ✅ Atomic write pattern
def safe_write_json(path: str, data: dict) -> None:
    tmp = path + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    os.replace(tmp, path)   # atomic — crash safe

safe_write_json("config.json", {"user": "Divyesh"})

# ✅ tempfile module (more robust)
import tempfile

def safe_write(path: str, content: str) -> None:
    dir_ = os.path.dirname(os.path.abspath(path))
    with tempfile.NamedTemporaryFile("w", dir=dir_,
                                     delete=False,
                                     encoding="utf-8",
                                     suffix=".tmp") as tmp:
        tmp.write(content)
        tmp_name = tmp.name
    os.replace(tmp_name, path)   # atomic swap`} />
        </div>
      </SectionBlock>

      {/* ── Section 9: Traps ── */}
      <SectionBlock icon="💣" title="Common Traps">
        <TrapsTable rows={[
          { level: 'S', mistake: '"w" se log file open karna',         kyun: 'Pura purana data instantly delete — no warning',       fix: '"a" mode use karo logs ke liye' },
          { level: 'S', mistake: 'f.read() bina f.seek(0) dobara',    kyun: 'Pointer already end pe — empty string milega',          fix: 'f.seek(0) before second read' },
          { level: 'M', mistake: 'encoding specify nahi karna',        kyun: 'Windows cp1252 vs Linux utf-8 — production crash',     fix: 'encoding="utf-8" hamesha' },
          { level: 'M', mistake: 'read() on 2GB file',                 kyun: 'Pura RAM mein load — server crash',                    fix: 'for line in f ya read(chunk)' },
          { level: 'M', mistake: 'writelines() without \\n',           kyun: 'Sab lines ek mein merge — data corrupt',               fix: '"\\n".join(lines) ya line+"\\n"' },
          { level: 'B', mistake: 'Binary file text mode mein open',   kyun: 'UTF-8 decode fail → UnicodeDecodeError',                fix: '"rb" mode use karo' },
          { level: 'B', mistake: 'Direct overwrite bina temp file',    kyun: 'Crash → file empty, data gone',                        fix: 'Atomic write: temp + os.replace' },
        ]} />
      </SectionBlock>

      {/* ── Section 10: Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'open(path, mode, encoding="utf-8")', value: 'Hamesha encoding specify karo' },
          { label: '"r" read, "w" overwrite, "a" append', value: '"w" 💀 deletes, logs ke liye "a"' },
          { label: '"rb"/"wb"', value: 'Binary mode — images, PDFs, pickles' },
          { label: 'with open() as f:', value: 'Auto close — exception ho tab bhi' },
          { label: 'for line in f:', value: 'Best practice — lazy, memory safe' },
          { label: 'f.read(4096)', value: 'Chunk — large files ke liye' },
          { label: 'f.tell() / f.seek(n)', value: 'Cursor position read / move' },
          { label: 'os.replace(tmp, path)', value: 'Atomic swap — crash safe write' },
        ]} />
      </SectionBlock>

      {/* ── Section 11: Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── Section 12: Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: 'Context Manager', description: 'with statement ke andar kya hota hai — __enter__/__exit__', href: '/roadmap/topic/python-context-manager/0' }}
          to={{ title: 'pathlib', description: 'File paths manage karne ka modern tarika', href: '/roadmap/topic/python-file-handling/4' }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
