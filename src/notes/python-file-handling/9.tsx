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
  StepsBlock,
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

// ─── SVG: Atomic Write vs Direct Write ────────────────────────────────────────
function AtomicWriteSVG() {
  return (
    <svg viewBox="0 0 520 205" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes aw0 { 0%{opacity:0;transform:translateY(4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes aw1 { 0%{opacity:0;transform:translateY(4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes aw2 { 0%{opacity:0;transform:translateY(4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes aw3 { 0%{opacity:0;transform:translateY(4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes awArrow { 0%{stroke-dashoffset:60} 100%{stroke-dashoffset:0} }
          @keyframes awDanger { 0%,100%{opacity:.4} 50%{opacity:1} }
          .awa{animation:aw0 .3s .00s ease both}
          .awb{animation:aw1 .3s .20s ease both}
          .awc{animation:aw2 .3s .40s ease both}
          .awd{animation:aw3 .3s .60s ease both}
          .awArr{animation:awArrow .5s ease both; stroke-dasharray:60}
          .awDng{animation:awDanger 1.8s 1s ease-in-out infinite}
        `}</style>
        <marker id="aw-grn" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
        <marker id="aw-red" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.red}/>
        </marker>
        <marker id="aw-mut" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.muted}/>
        </marker>
      </defs>

      {/* ── SAFE PATH ── */}
      <g className="awa">
        <text x="260" y="14" textAnchor="middle" fill={C.green} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">✓ SAFE — Atomic Write</text>
      </g>

      {/* Original */}
      <g className="awb">
        <rect x="10" y="22" width="80" height="52" rx="7" fill={C.blue} fillOpacity=".12" stroke={C.blue} strokeWidth="1.5"/>
        <text x="50" y="43" textAnchor="middle" fill={C.blue} fontSize="20">📄</text>
        <text x="50" y="60" textAnchor="middle" fill={C.blue} fontSize="8" fontFamily="Poppins,sans-serif">data.json</text>
        <text x="50" y="70" textAnchor="middle" fill={C.muted} fontSize="8" fontFamily="Open Sans,sans-serif">original</text>
      </g>

      {/* Arrow → temp */}
      <g className="awb">
        <line x1="90" y1="48" x2="113" y2="48" stroke={C.muted} strokeWidth="1.5" markerEnd="url(#aw-mut)" className="awArr"/>
        <text x="101" y="40" textAnchor="middle" fill={C.muted} fontSize="8">write</text>
      </g>

      {/* Temp file */}
      <g className="awc">
        <rect x="115" y="22" width="100" height="52" rx="7" fill={C.orange} fillOpacity=".12" stroke={C.orange} strokeWidth="1.5"/>
        <text x="165" y="43" textAnchor="middle" fill={C.orange} fontSize="20">📝</text>
        <text x="165" y="58" textAnchor="middle" fill={C.orange} fontSize="8" fontFamily="Poppins,sans-serif">data.json.tmp</text>
        <text x="165" y="70" textAnchor="middle" fill={C.muted} fontSize="8">new content</text>
      </g>

      {/* Arrow → atomic rename */}
      <g className="awc">
        <line x1="215" y1="48" x2="238" y2="48" stroke={C.green} strokeWidth="2" markerEnd="url(#aw-grn)" className="awArr"/>
        <text x="226" y="39" textAnchor="middle" fill={C.green} fontSize="8" fontWeight="700">os.replace</text>
        <text x="226" y="49" textAnchor="middle" fill={C.green} fontSize="7">atomic!</text>
      </g>

      {/* Result */}
      <g className="awc">
        <rect x="240" y="22" width="80" height="52" rx="7" fill={C.green} fillOpacity=".12" stroke={C.green} strokeWidth="1.5"/>
        <text x="280" y="43" textAnchor="middle" fill={C.green} fontSize="20">📄</text>
        <text x="280" y="58" textAnchor="middle" fill={C.green} fontSize="8" fontFamily="Poppins,sans-serif">data.json</text>
        <text x="280" y="70" textAnchor="middle" fill={C.green} fontSize="8">✓ new content</text>
      </g>

      {/* Crash note */}
      <g className="awd">
        <rect x="340" y="22" width="172" height="52" rx="7" fill={C.green} fillOpacity=".05" stroke={C.green} strokeWidth="1" strokeDasharray="4 3"/>
        <text x="426" y="41" textAnchor="middle" fill={C.green} fontSize="9" fontWeight="700" fontFamily="Poppins,sans-serif">Crash before rename?</text>
        <text x="426" y="56" textAnchor="middle" fill={C.green} fontSize="8" fontFamily="Open Sans,sans-serif">data.json = untouched ✓</text>
        <text x="426" y="68" textAnchor="middle" fill={C.muted} fontSize="8" fontFamily="Open Sans,sans-serif">tmp = incomplete (ok, deletable)</text>
      </g>

      {/* Divider */}
      <line x1="10" y1="90" x2="510" y2="90" stroke={C.muted} strokeWidth="0.5" strokeDasharray="4 4" className="awc"/>

      {/* ── RISKY PATH ── */}
      <g className="awb">
        <text x="260" y="106" textAnchor="middle" fill={C.red} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">💀 RISKY — Direct Write</text>
      </g>

      <g className="awc">
        {/* Original */}
        <rect x="10" y="114" width="80" height="50" rx="7" fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeWidth="1.2"/>
        <text x="50" y="135" textAnchor="middle" fill={C.blue} fontSize="16">📄</text>
        <text x="50" y="150" textAnchor="middle" fill={C.blue} fontSize="8">data.json</text>
        <text x="50" y="160" textAnchor="middle" fill={C.muted} fontSize="7">original ok</text>

        {/* open("w") truncates immediately */}
        <line x1="90" y1="139" x2="108" y2="139" stroke={C.red} strokeWidth="1.5" markerEnd="url(#aw-red)"/>
        <text x="99" y="131" textAnchor="middle" fill={C.red} fontSize="7">open w</text>

        {/* Empty file */}
        <rect x="110" y="114" width="80" height="50" rx="7" fill={C.red} fillOpacity=".1" stroke={C.red} strokeWidth="1.5"/>
        <text x="150" y="135" textAnchor="middle" fill={C.red} fontSize="16">📄</text>
        <text x="150" y="150" textAnchor="middle" fill={C.red} fontSize="8">data.json</text>
        <text x="150" y="160" textAnchor="middle" fill={C.red} fontSize="7">EMPTY 💀</text>

        {/* Crash */}
        <text x="220" y="139" fill={C.red} fontSize="18" className="awDng">⚡</text>
        <text x="218" y="158" fill={C.red} fontSize="7">crash!</text>

        {/* Result */}
        <rect x="250" y="114" width="120" height="50" rx="7" fill={C.red} fillOpacity=".07" stroke={C.red} strokeWidth="1.5" strokeDasharray="4 3"/>
        <text x="310" y="138" textAnchor="middle" fill={C.red} fontSize="9" fontWeight="700" fontFamily="Poppins,sans-serif">data.json = ""</text>
        <text x="310" y="156" textAnchor="middle" fill={C.muted} fontSize="8" fontFamily="Open Sans,sans-serif">data permanently lost</text>

        <text x="260" y="185" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">"w" mode — file khulte hi truncate ho jaata hai</text>
        <text x="260" y="198" textAnchor="middle" fill={C.red} fontSize="9" fontFamily="Open Sans,sans-serif">Crash before write completes = permanent data loss</text>
      </g>
    </svg>
  )
}

// ─── SVG: Quick Recall ────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0F172A" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — Safe File Ops</text>

      {[
        {
          x: 12, color: C.orange, title: 'Steps',
          rows: [['1. write temp', 'safe location pe'], ['2. full write', 'pura data flush'], ['3. os.replace', 'atomic rename'], ['4. done', 'original safe ✓']],
        },
        {
          x: 182, color: C.green, title: 'Tools',
          rows: [['tempfile', 'NamedTemporaryFile'], ['os.replace', 'atomic swap'], ['dir=p.parent', 'same filesystem!'], ['delete=False', 'manual cleanup']],
        },
        {
          x: 352, color: C.red, title: 'Avoid',
          rows: [['"w" direct', '💀 immediate truncate'], ['no temp', 'crash = data gone'], ['diff filesystem', 'non-atomic'], ['no fsync', 'power cut = lost']],
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

export default function PythonFileHandling9() {
  return (
    <NoteLayout
      title="Safe File Ops — Atomic Write Pattern"
      phase="0C"
      subtitle="Crash-safe writing, temp files, os.replace() — data loss se bachao"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — Bank Transaction Analogy">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1">
                <span className="text-visual-3 font-bold">Bank transfer:</span> Paise pehle ek holding account mein jaate hain — directly source se destination nahi
              </span>
              <span className="block mb-1">
                <span className="text-visual-4 font-bold">Direct write ("w")</span> = source account zero karo pehle, PHIR transfer — crash? Paise gone! 💀
              </span>
              <span className="block mb-1">
                <span className="text-visual-1 font-bold">Atomic write</span> = temp account bhar do pura, PHIR ek swap — either full ya kuch nahi
              </span>
              <span className="block">
                <span className="text-visual-2 font-bold">os.replace()</span> = OS level atomic rename — ek instruction, no intermediate state
              </span>
            </>
          }
          diagram={<AtomicWriteSVG />}
        />
      </SectionBlock>

      {/* ── Section 2: The Problem ── */}
      <SectionBlock icon="💀" title="Problem — Direct Write ka Risk">
        <CompareBlock
          badLabel="❌ Direct write — data loss possible"
          goodLabel="✅ Atomic write — crash safe"
          bad={
            <CodeBlock
              language="python"
              code={`# "w" mode khulte hi file truncate hoti hai!
with open('config.json', 'w') as f:
    # Yahan file ALREADY EMPTY hai
    f.write(json.dumps(data))
    # Crash here? config.json = "" 💀`}
            />
          }
          good={
            <CodeBlock
              language="python"
              code={`import os, json

def safe_write(path, data):
    tmp = path + '.tmp'
    with open(tmp, 'w') as f:
        json.dump(data, f)
        f.flush()
        os.fsync(f.fileno())
    os.replace(tmp, path)   # atomic!
# Crash before replace? original safe ✓`}
            />
          }
        />
      </SectionBlock>

      {/* ── Section 3: tempfile module ── */}
      <SectionBlock icon="📁" title="tempfile Module — Proper Temp Files">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="atomic_write.py"
            code={`import tempfile, os, json
from pathlib import Path

def atomic_write_json(filepath, data):
    p = Path(filepath)
    # Same directory mein temp banao — same filesystem!
    with tempfile.NamedTemporaryFile(
        mode='w',
        dir=p.parent,        # same folder — important!
        suffix='.tmp',
        delete=False,        # manually delete karenge
        encoding='utf-8',
    ) as tmp:
        json.dump(data, tmp, indent=2)
        tmp.flush()
        os.fsync(tmp.fileno())  # kernel buffer → disk
        tmp_path = tmp.name

    os.replace(tmp_path, filepath)

atomic_write_json('config.json', {'version': 2})`}
          />
          <InfoBox type="info">
            <strong>Same filesystem zaruri:</strong> <code className="font-mono text-xs">os.replace()</code> cross-filesystem = non-atomic. Isliye temp file <strong>usi folder mein</strong> banao jahan final file hai.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 4: Steps ── */}
      <SectionBlock icon="🪜" title="Atomic Write — Step by Step">
        <StepsBlock
          steps={[
            {
              title: 'Temp file banao — same directory mein',
              description: 'tempfile.NamedTemporaryFile(dir=target.parent, delete=False) use karo',
            },
            {
              title: 'Data pura likhdo temp mein',
              description: 'JSON dump / write — sab kuch temp file pe jaata hai, original untouched',
            },
            {
              title: 'Flush + fsync karo',
              description: 'f.flush() = Python buffer clear, os.fsync() = OS kernel buffer → actual disk',
            },
            {
              title: 'os.replace() — atomic swap',
              description: 'OS level rename — instantaneous. Crash before? original safe. Crash after? new file ready.',
            },
          ]}
        />
      </SectionBlock>

      {/* ── Section 5: Traps ── */}
      <SectionBlock icon="⚠️" title="Common Traps">
        <TrapsTable rows={[
          {
            level: 'S',
            mistake: 'Temp file different filesystem pe',
            kyun: 'os.replace() cross-filesystem = internally copy+delete = non-atomic',
            fix: 'dir=Path(target).parent — same directory mein banao',
          },
          {
            level: 'S',
            mistake: 'fsync() bhool gaya',
            kyun: 'f.flush() sirf Python buffer clear karta hai — OS cache bhi flush karna padega',
            fix: 'os.fsync(f.fileno()) after flush',
          },
          {
            level: 'M',
            mistake: 'delete=True with NamedTemporaryFile',
            kyun: 'Default delete=True — close hote hi delete ho jaata hai, os.replace() fail',
            fix: 'delete=False — manually cleanup karo on error',
          },
        ]} />
      </SectionBlock>

      {/* ── Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'Simple atomic', value: "tmp = path+'.tmp'; open(tmp,'w'); os.replace(tmp, path)" },
          { label: 'Safe temp', value: "NamedTemporaryFile(dir=p.parent, delete=False)" },
          { label: 'Flush to disk', value: 'f.flush(); os.fsync(f.fileno())' },
          { label: 'Atomic rename', value: 'os.replace(tmp_path, final_path)' },
          { label: 'Cleanup on error', value: "except: os.path.exists(tmp) and os.remove(tmp)" },
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
            title: 'Write Methods',
            description: 'write(), writelines() — basics of writing',
            href: '/roadmap/topic/python-file-handling/3',
          }}
          to={{
            title: 'os.path vs pathlib',
            description: 'Old vs modern path handling comparison',
            href: '/roadmap/topic/python-file-handling/10',
          }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
