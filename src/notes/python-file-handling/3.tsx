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

// ─── SVG: write() newline behavior ────────────────────────────────────────────
function WriteNewlineSVG() {
  return (
    <svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes wn0 { 0%{opacity:0;transform:translateY(4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes wn1 { 0%{opacity:0;transform:translateY(4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes wn2 { 0%{opacity:0;transform:translateY(4px)} 100%{opacity:1;transform:translateY(0)} }
          .wna{animation:wn0 .3s .0s ease both}
          .wnb{animation:wn1 .3s .2s ease both}
          .wnc{animation:wn2 .3s .4s ease both}
        `}</style>
      </defs>

      {/* ── LEFT: write() three calls ── */}
      <g className="wna">
        <text x="120" y="14" textAnchor="middle" fill={C.orange} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">write() — NO auto newline</text>
        <rect x="10" y="22" width="220" height="75" rx="8" fill={C.orange} fillOpacity=".08" stroke={C.orange} strokeWidth="1.5"/>
        <text x="20" y="43" fill={C.muted} fontSize="9" fontFamily="monospace">f.write("Hello")</text>
        <text x="20" y="58" fill={C.muted} fontSize="9" fontFamily="monospace">f.write("World")</text>
        <text x="20" y="73" fill={C.muted} fontSize="9" fontFamily="monospace">f.write("!")</text>
        <text x="20" y="90" fill={C.orange} fontSize="9" fontFamily="Open Sans,sans-serif">cursor hamesha wahan se resume karta hai jahan chuta tha</text>
      </g>

      {/* LEFT Result */}
      <g className="wnb">
        <text x="120" y="115" textAnchor="middle" fill={C.orange} fontSize="10" fontWeight="700" fontFamily="Open Sans,sans-serif">File mein result:</text>
        <rect x="10" y="122" width="220" height="30" rx="5" fill={C.orange} fillOpacity=".06" stroke={C.orange} strokeOpacity=".3" strokeWidth="1"/>
        <text x="20" y="142" fill={C.orange} fontSize="12" fontFamily="monospace">HelloWorld!</text>
        <text x="165" y="142" fill={C.red} fontSize="9" fontFamily="Open Sans,sans-serif">← sab ek line!</text>
      </g>

      <g className="wnc">
        <text x="120" y="165" textAnchor="middle" fill={C.red} fontSize="9" fontFamily="Open Sans,sans-serif">⚠️ manually "\n" add karna padega</text>
      </g>

      {/* Divider */}
      <line x1="258" y1="10" x2="258" y2="172" stroke={C.muted} strokeWidth="0.5" strokeDasharray="4 4"/>

      {/* ── RIGHT: writelines() with \n in strings ── */}
      <g className="wna">
        <text x="390" y="14" textAnchor="middle" fill={C.blue} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">writelines() — list version</text>
        <rect x="265" y="22" width="248" height="75" rx="8" fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeWidth="1.5"/>
        <text x="275" y="40" fill={C.muted} fontSize="9" fontFamily="monospace">lines = [</text>
        <text x="275" y="55" fill={C.blue} fontSize="9" fontFamily="monospace">  "Hello\n",  "World\n",</text>
        <text x="275" y="70" fill={C.muted} fontSize="9" fontFamily="monospace">]</text>
        <text x="275" y="89" fill={C.muted} fontSize="9" fontFamily="monospace">f.writelines(lines)</text>
      </g>

      {/* RIGHT Result */}
      <g className="wnb">
        <text x="390" y="115" textAnchor="middle" fill={C.blue} fontSize="10" fontWeight="700" fontFamily="Open Sans,sans-serif">File mein result:</text>
        <rect x="265" y="122" width="248" height="30" rx="5" fill={C.blue} fillOpacity=".06" stroke={C.blue} strokeOpacity=".3" strokeWidth="1"/>
        <text x="275" y="142" fill={C.blue} fontSize="11" fontFamily="monospace">Hello↵  World↵</text>
      </g>

      <g className="wnc">
        <text x="390" y="165" textAnchor="middle" fill={C.green} fontSize="9" fontFamily="Open Sans,sans-serif">✓ \n strings mein include tha — alag lines bane</text>
      </g>
    </svg>
  )
}

// ─── SVG: Quick Recall ────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0F172A" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — Write Methods</text>

      {[
        {
          x: 12, color: C.orange, title: 'write()',
          rows: [['write(s)', 'string likhta hai'], ['no \\n', 'auto add nahi'], ['returns', 'chars written (int)'], ['text mode', '"w" ya "a" mein']],
        },
        {
          x: 182, color: C.blue, title: 'writelines()',
          rows: [['writelines(lst)', 'list items likhta'], ['no \\n', 'list mein dalo'], ['None return', 'returns None'], ['generator ok', 'lazy list bhi ok']],
        },
        {
          x: 352, color: C.green, title: 'Best Practices',
          rows: [['"w"', 'overwrite likhna'], ['"a"', 'append karna'], ['\\n explicit', 'hamesha add karo'], ['flush()', 'force disk write']],
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

export default function PythonFileHandling3() {
  return (
    <NoteLayout
      title="Write Methods — write() aur writelines()"
      phase="0C"
      subtitle="write(), writelines(), newlines, modes, flush — sab kuch"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — Typewriter Analogy">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1">
                <span className="text-visual-3 font-bold">Typewriter sochlo:</span> Jo type karo, wahi likhta hai — cursor aage badhta hai
              </span>
              <span className="block mb-1">
                <span className="text-visual-4 font-bold">write("Hello")</span> = "Hello" type karo, cursor <span className="font-mono text-visual-2">|</span> aage — <strong>Enter (newline) auto nahi aata!</strong>
              </span>
              <span className="block mb-1">
                <span className="text-visual-1 font-bold">write("World")</span> = cursor wahan se type karta hai jahan chuta → <span className="font-mono">HelloWorld</span>
              </span>
              <span className="block">
                <span className="text-visual-3 font-bold">"\n" explicit</span> = apna Enter khud dabao — Python automatically nahi karta
              </span>
            </>
          }
          diagram={<WriteNewlineSVG />}
        />
      </SectionBlock>

      {/* ── Section 2: write() ── */}
      <SectionBlock icon="✏️" title="write() — Basic Writing">
        <CodeBlock
          language="python"
          filename="write_usage.py"
          code={`with open('output.txt', 'w') as f:
    n = f.write("Hello, World!")  # n = 13 (chars written)
    f.write("\\n")                 # manually newline add karo!

# Multiple lines — f-string + \\n pattern
entries = ["first", "second", "third"]
with open('out.txt', 'w') as f:
    for entry in entries:
        f.write(f"{entry}\\n")    # \\n explicit!`}
        />
      </SectionBlock>

      {/* ── Section 3: writelines() ── */}
      <SectionBlock icon="📝" title="writelines() — List Likhna">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="writelines_usage.py"
            code={`# writelines = list of strings likhna
# NOTE: \\n khud daalo — writelines nahi daalta!
lines = ["Line 1\\n", "Line 2\\n", "Line 3\\n"]

with open('output.txt', 'w') as f:
    f.writelines(lines)

# Generator bhi kaam karta hai (memory efficient)
def log_gen(items):
    for item in items:
        yield f"{item}\\n"

with open('output.txt', 'w') as f:
    f.writelines(log_gen(big_list))`}
          />
          <InfoBox type="warn">
            <strong>writelines() trap:</strong> <code className="font-mono text-xs">["a", "b", "c"]</code> → <code className="font-mono text-xs">abc</code> nahi milega <code className="font-mono text-xs">a\nb\nc</code>. Strings mein khud <code className="font-mono text-xs">\n</code> dalo.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 4: Modes ── */}
      <SectionBlock icon="🔑" title="Write Modes — w vs a vs r+">
        <CompareBlock
          badLabel='❌ "w" mode — existing content delete!'
          goodLabel='✅ "a" mode — append, safe'
          bad={
            <CodeBlock
              language="python"
              code={`# File mein pehle se hai: "Important data"
with open('data.txt', 'w') as f:
    f.write("New content")

# File ab: "New content"
# "Important data" gaya! 💀`}
            />
          }
          good={
            <CodeBlock
              language="python"
              code={`# File mein pehle se hai: "Important data\\n"
with open('data.txt', 'a') as f:
    f.write("New content\\n")

# File ab:
# "Important data\\n"
# "New content\\n"  ✓ preserved!`}
            />
          }
        />
      </SectionBlock>

      {/* ── Section 5: flush ── */}
      <SectionBlock icon="💾" title="flush() — Force Disk Write">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="flush_example.py"
            code={`import time

with open('progress.log', 'w') as f:
    for i in range(10):
        f.write(f"Step {i} done\\n")
        f.flush()           # disk pe turant — tail -f ke liye useful
        time.sleep(1)

# Without flush: OS buffer mein rahega (batch write)
# With flush: real-time disk write — logs monitor karte waqt`}
          />
          <InfoBox type="info">
            Python by default writes buffer mein rakhta hai aur batch mein disk pe bhejta hai — fast hai. <code className="font-mono text-xs">flush()</code> sirf tab chahiye jab real-time read karna ho (live logs, progress).
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 6: Traps ── */}
      <SectionBlock icon="⚠️" title="Common Traps">
        <TrapsTable rows={[
          {
            level: 'S',
            mistake: '"w" mode se existing file open karna',
            kyun: 'File exist kare ya na — content turant delete. No warning.',
            fix: '"a" for append, "x" for new-only, "r+" for update',
          },
          {
            level: 'S',
            mistake: 'write() mein \\n bhool gaya',
            kyun: 'Sab content ek hi line pe — parsing broken, unreadable logs',
            fix: 'f.write(data + "\\n") ya f-string mein "\\n" explicit',
          },
          {
            level: 'M',
            mistake: 'writelines() mein \\n nahi dala',
            kyun: '["a","b","c"] → "abc" — lines merge ho jaati hain',
            fix: 'writelines([l + "\\n" for l in lines])',
          },
        ]} />
      </SectionBlock>

      {/* ── Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'Write string', value: 'f.write("text\\n")' },
          { label: 'Write list', value: 'f.writelines(["a\\n", "b\\n"])' },
          { label: 'Write lines clean', value: 'f.writelines(l+"\\n" for l in items)' },
          { label: 'Append mode', value: 'with open("log.txt", "a") as f:' },
          { label: 'Create only (fail if exists)', value: 'with open("new.txt", "x") as f:' },
          { label: 'Force flush', value: 'f.write(data); f.flush()' },
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
            title: 'Read Methods',
            description: 'read(), readline(), readlines() — file padhna',
            href: '/roadmap/topic/python-file-handling/2',
          }}
          to={{
            title: 'Safe File Ops',
            description: 'Atomic write pattern — crash se bachao',
            href: '/roadmap/topic/python-file-handling/9',
          }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
