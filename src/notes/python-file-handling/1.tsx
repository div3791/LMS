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

// ─── SVG: Context Manager Flow ─────────────────────────────────────────────────
function ContextManagerSVG() {
  return (
    <svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes cm0Fade { 0%{opacity:0;transform:translateY(-4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes cm1Fade { 0%{opacity:0;transform:translateY(-4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes cm2Fade { 0%{opacity:0;transform:translateY(-4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes cm3Fade { 0%{opacity:0;transform:translateY(-4px)} 100%{opacity:1;transform:translateY(0)} }
          @keyframes cmArrow { 0%{stroke-dashoffset:50} 100%{stroke-dashoffset:0} }
          .cm0{animation:cm0Fade .35s .0s ease both}
          .cm1{animation:cm1Fade .35s .25s ease both}
          .cm2{animation:cm2Fade .35s .5s ease both}
          .cm3{animation:cm3Fade .35s .75s ease both}
          .cma{animation:cmArrow .4s .1s ease both; stroke-dasharray:50}
        `}</style>
        <marker id="cm-arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.muted}/>
        </marker>
        <marker id="cm-grn" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.green}/>
        </marker>
        <marker id="cm-red" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.red}/>
        </marker>
      </defs>

      {/* ── Step 1: __enter__ ── */}
      <g className="cm0">
        <rect x="10" y="10" width="110" height="66" rx="8" fill={C.blue} fillOpacity=".12" stroke={C.blue} strokeWidth="1.5"/>
        <text x="65" y="33" textAnchor="middle" fill={C.blue} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">with open()</text>
        <text x="65" y="50" textAnchor="middle" fill={C.blue} fontSize="10" fontFamily="monospace">__enter__</text>
        <text x="65" y="66" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">file opens</text>
      </g>

      {/* Arrow → body */}
      <g className="cm1">
        <line x1="120" y1="43" x2="148" y2="43" stroke={C.muted} strokeWidth="1.5" markerEnd="url(#cm-arr)" className="cma"/>
        <text x="134" y="36" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">as f</text>
      </g>

      {/* ── Step 2: body ── */}
      <g className="cm1">
        <rect x="150" y="10" width="150" height="66" rx="8" fill={C.purple} fillOpacity=".12" stroke={C.purple} strokeWidth="1.5"/>
        <text x="225" y="33" textAnchor="middle" fill={C.purple} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">Your Code</text>
        <text x="225" y="50" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="Open Sans,sans-serif">f.read() / f.write()</text>
        <text x="225" y="66" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">kaam karo andar</text>
      </g>

      {/* Arrow → exit (normal) */}
      <g className="cm2">
        <line x1="300" y1="43" x2="328" y2="43" stroke={C.green} strokeWidth="1.5" markerEnd="url(#cm-grn)" className="cma"/>
        <text x="314" y="36" textAnchor="middle" fill={C.green} fontSize="9" fontFamily="Open Sans,sans-serif">ok ✓</text>
      </g>

      {/* ── Step 3: __exit__ (success) ── */}
      <g className="cm2">
        <rect x="330" y="10" width="180" height="66" rx="8" fill={C.green} fillOpacity=".12" stroke={C.green} strokeWidth="1.5"/>
        <text x="420" y="33" textAnchor="middle" fill={C.green} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">__exit__</text>
        <text x="420" y="50" textAnchor="middle" fill={C.green} fontSize="10" fontFamily="monospace">f.close()</text>
        <text x="420" y="66" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">hamesha guaranteed</text>
      </g>

      {/* ── Exception path ── */}
      <g className="cm3">
        <text x="225" y="104" textAnchor="middle" fill={C.red} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Exception aaraha hai? 🔥</text>

        {/* Exception arrow curving to exit */}
        <path d="M 295 55 Q 360 105 380 88" stroke={C.red} strokeWidth="1.5"
          fill="none" strokeDasharray="5 3" markerEnd="url(#cm-red)"/>
        <text x="348" y="110" textAnchor="middle" fill={C.red} fontSize="9" fontFamily="Open Sans,sans-serif">exception ho</text>
        <text x="348" y="123" textAnchor="middle" fill={C.red} fontSize="9" fontFamily="Open Sans,sans-serif">tab bhi →</text>

        {/* Guarantee box */}
        <rect x="310" y="136" width="200" height="42" rx="8" fill={C.green} fillOpacity=".1" stroke={C.green} strokeWidth="1"/>
        <text x="410" y="156" textAnchor="middle" fill={C.green} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">✓ f.close() guaranteed</text>
        <text x="410" y="172" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">Resource leak nahi hoga</text>

        {/* Without with box */}
        <rect x="10" y="136" width="200" height="42" rx="8" fill={C.red} fillOpacity=".07" stroke={C.red} strokeWidth="1" strokeDasharray="4 3"/>
        <text x="110" y="156" textAnchor="middle" fill={C.red} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Without with:</text>
        <text x="110" y="172" textAnchor="middle" fill={C.muted} fontSize="9" fontFamily="Open Sans,sans-serif">Exception → close() skip! Leak.</text>
      </g>
    </svg>
  )
}

// ─── SVG: Quick Recall ────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 155" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="155" rx="10" fill="#0F172A" stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — with open()</text>

      {[
        {
          x: 12, color: C.blue, title: 'Syntax',
          rows: [['with open(f)', '→ __enter__'], ['as f:', 'file object milta'], ['body code', 'runs here'], ['end of block', '→ __exit__']],
        },
        {
          x: 182, color: C.green, title: 'Guarantees',
          rows: [['close()', 'hamesha hoga'], ['exception?', 'tab bhi close'], ['return?', 'tab bhi close'], ['no leak', '✓ OS fd free']],
        },
        {
          x: 352, color: C.orange, title: 'Multiple Files',
          rows: [['with open(a)', 'pehla file'], ['open(b) as g:', 'doosra file'], ['both close', 'auto ek saath'], ['comma style', 'Python 3.1+']],
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

export default function PythonFileHandling1() {
  return (
    <NoteLayout
      title="with open() — Auto Close Guarantee"
      phase="0C"
      subtitle="Context manager protocol, __enter__/__exit__, resource safety"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — Context Manager kya hai?">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1">
                <span className="text-visual-3 font-bold">Hotel room analogy:</span> Check in karte waqt management ek key deta hai (<span className="font-mono text-visual-2">as f</span>)
              </span>
              <span className="block mb-1">
                Andar kuch bhi ho jaye — behosh ho jao, fire alarm baje — <span className="text-visual-1 font-bold">checkout (close) guaranteed hai</span>
              </span>
              <span className="block mb-1">
                <span className="text-visual-4 font-bold">Without with:</span> Bahar nikla, bhool gaya door lock karna — OS resource leak
              </span>
              <span className="block">
                <span className="text-visual-3 font-bold">Python guarantee:</span> <span className="font-mono text-visual-2">__exit__</span> hamesha call hota hai — exception ho ya na ho
              </span>
            </>
          }
          diagram={<ContextManagerSVG />}
        />
      </SectionBlock>

      {/* ── Section 2: with vs try/finally ── */}
      <SectionBlock icon="⚔️" title="with open() vs try/finally">
        <CompareBlock
          badLabel="❌ try/finally — verbose aur error-prone"
          goodLabel="✅ with open() — clean aur bulletproof"
          bad={
            <CodeBlock
              language="python"
              code={`f = open('data.txt', 'r')
try:
    data = f.read()
    process(data)
finally:
    f.close()   # manually yaad rakhna padta

# Agar open() hi fail ho to?
# f kabhi assign nahi → NameError in finally!`}
            />
          }
          good={
            <CodeBlock
              language="python"
              code={`with open('data.txt', 'r') as f:
    data = f.read()
    process(data)
# f.close() auto — exception ho ya na ho

# open() fail → no object, no close needed
# clean aur simple`}
            />
          }
        />
      </SectionBlock>

      {/* ── Section 3: Multiple files ── */}
      <SectionBlock icon="📂" title="Multiple Files Ek Saath">
        <div className="space-y-4">
          <CodeBlock
            language="python"
            filename="multiple_files.py"
            code={`# Comma separated — same with block (Python 3.1+)
with open('input.txt', 'r') as src, open('output.txt', 'w') as dst:
    for line in src:
        dst.write(line.upper())
# DONO files close — guaranteed

# Nested style (older / more indented)
with open('input.txt', 'r') as src:
    with open('output.txt', 'w') as dst:
        dst.write(src.read())`}
          />
          <InfoBox type="tip">
            Comma-separated <code className="font-mono text-xs">with</code> is cleaner than nested. Dono files simultaneously open rehte hain aur dono close bhi hote hain together.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 4: Under the hood ── */}
      <SectionBlock icon="⚙️" title="Under the Hood — Protocol">
        <CodeBlock
          language="python"
          filename="what_python_does.py"
          code={`# with open('file.txt') as f: equivalent hai:
f = open('file.txt').__enter__()   # 1. __enter__ → returns file object
try:
    data = f.read()                 # your code runs
except:
    f.__exit__(exc_type, exc_val, exc_tb)  # 2. exception case
    raise
else:
    f.__exit__(None, None, None)   # 3. success case

# Koi bhi object jo __enter__ + __exit__ implement kare
# with ke saath use ho sakta hai — DB, locks, sockets sab`}
        />
      </SectionBlock>

      {/* ── Section 5: Traps ── */}
      <SectionBlock icon="⚠️" title="Common Traps">
        <TrapsTable rows={[
          {
            level: 'S',
            mistake: 'f = open() bina with ke',
            kyun: 'Exception aane pe f.close() skip — OS file descriptor leak',
            fix: 'Hamesha with open() use karo',
          },
          {
            level: 'M',
            mistake: 'with block ke baad f use karna',
            kyun: 'f closed hai — ValueError: I/O operation on closed file',
            fix: 'with block ke andar hi f use karo',
          },
          {
            level: 'B',
            mistake: 'Nested with instead of comma-separated',
            kyun: 'Ugly hai — extra indentation, koi bug nahi but bad style',
            fix: 'with open(a) as f, open(b) as g: — comma use karo',
          },
        ]} />
      </SectionBlock>

      {/* ── Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'Basic read', value: "with open('f.txt') as f: data = f.read()" },
          { label: 'Write mode', value: "with open('f.txt', 'w') as f: f.write('hello')" },
          { label: 'Multiple files', value: "with open('a') as f, open('b') as g: ..." },
          { label: 'Append mode', value: "with open('log.txt', 'a') as f: f.write(entry)" },
          { label: 'Binary read', value: "with open('img.png', 'rb') as f: data = f.read()" },
          { label: 'Encoding', value: "with open('f.txt', encoding='utf-8') as f: ..." },
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
            title: 'open() Modes',
            description: 'open() ke modes — r, w, a, rb aur kya karte hain',
            href: '/roadmap/topic/python-file-handling/0',
          }}
          to={{
            title: 'Read Methods',
            description: 'read(), readline(), readlines() — kab kya use karein',
            href: '/roadmap/topic/python-file-handling/2',
          }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
