import {
  NoteLayout, SectionBlock, MentalModel, TrapsTable, Cheatsheet,
  QuickRecall, ConnectedTopics, InfoBox, CodeBlock, CompareBlock,
} from '../../components/notes'

const C = {
  mut:    '#F59E0B',
  immut:  '#4F8CFF',
  ref:    '#34D399',
  gc:     '#A78BFA',
  trap:   '#F87171',
  muted:  '#8B949E',
  dim:    '#2D333B',
}

// ─────────────────────────────────────────────────────────
// SVG 1 — Variable = label pointing to object
// ─────────────────────────────────────────────────────────
function MemoryModelSVG() {
  return (
    <svg viewBox="0 0 520 200" className="w-full" aria-label="Python memory model">
      <defs>
        <style>{`
          @keyframes mmFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
          .mm0{animation:mmFade .3s .0s ease both}
          .mm1{animation:mmFade .3s .12s ease both}
          .mm2{animation:mmFade .3s .24s ease both}
          .mm3{animation:mmFade .3s .36s ease both}
        `}</style>
        <marker id="mmArr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill={C.ref}/>
        </marker>
      </defs>

      {/* Namespace (stack) */}
      <g className="mm0">
        <rect x="10" y="10" width="165" height="175" rx="10"
          fill={C.immut} fillOpacity=".07" stroke={C.immut} strokeOpacity=".3" strokeWidth="1.5"/>
        <text x="92" y="30" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.immut} fontFamily="Poppins,sans-serif">Namespace (Stack)</text>
        <text x="92" y="46" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">variable names live here</text>

        {[
          { name: 'x', y: 72 },
          { name: 'y', y: 108 },
          { name: 'z', y: 144 },
        ].map(v => (
          <g key={v.name}>
            <rect x="28" y={v.y - 14} width="52" height="28" rx="6"
              fill={C.immut} fillOpacity=".15" stroke={C.immut} strokeOpacity=".4" strokeWidth="1"/>
            <text x="54" y={v.y + 5} textAnchor="middle" fontSize="12" fontWeight="700"
              fill={C.immut} fontFamily="Poppins,sans-serif">{v.name}</text>
          </g>
        ))}
      </g>

      {/* Arrows */}
      <g className="mm1">
        <line x1="80" y1="72"  x2="250" y2="72"  stroke={C.ref} strokeWidth="1.8" markerEnd="url(#mmArr)"/>
        <line x1="80" y1="108" x2="250" y2="112" stroke={C.ref} strokeWidth="1.8" markerEnd="url(#mmArr)"/>
        <line x1="80" y1="144" x2="250" y2="78"  stroke={C.ref} strokeWidth="1.8" strokeDasharray="5 3" markerEnd="url(#mmArr)"/>
        <text x="175" y="158" textAnchor="middle" fontSize="10" fill={C.gc}
          fontFamily="Open Sans,sans-serif">z = x — same object!</text>
      </g>

      {/* Objects (Heap) */}
      <g className="mm2">
        <rect x="260" y="10" width="250" height="175" rx="10"
          fill={C.mut} fillOpacity=".07" stroke={C.mut} strokeOpacity=".3" strokeWidth="1.5"/>
        <text x="385" y="30" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.mut} fontFamily="Poppins,sans-serif">Heap (Objects)</text>
        <text x="385" y="46" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">actual data lives here</text>

        {[
          { label: 'int  42',     sub: 'id=140234', color: C.immut, cy: 80  },
          { label: 'list [1,2]',  sub: 'id=140567', color: C.mut,   cy: 126 },
        ].map(o => (
          <g key={o.label}>
            <circle cx="385" cy={o.cy} r="32"
              fill={o.color} fillOpacity=".12" stroke={o.color} strokeOpacity=".5" strokeWidth="1.5"/>
            <text x="385" y={o.cy - 6} textAnchor="middle" fontSize="11" fontWeight="700"
              fill={o.color} fontFamily="Poppins,sans-serif">{o.label}</text>
            <text x="385" y={o.cy + 12} textAnchor="middle" fontSize="9.5" fill={C.muted}
              fontFamily="Open Sans,sans-serif">{o.sub}</text>
          </g>
        ))}
      </g>

      <g className="mm3">
        <rect x="260" y="158" width="250" height="22" rx="6"
          fill={C.gc} fillOpacity=".1" stroke={C.gc} strokeOpacity=".3" strokeWidth="1"/>
        <text x="385" y="173" textAnchor="middle" fontSize="10" fill={C.gc}
          fontFamily="Open Sans,sans-serif">GC frees objects with 0 references</text>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 2 — Mutable vs Immutable types
// ─────────────────────────────────────────────────────────
function MutImmutSVG() {
  const immut = ['int', 'float', 'str', 'tuple', 'bool', 'frozenset']
  const mut   = ['list', 'dict', 'set', 'custom objects']

  return (
    <svg viewBox="0 0 520 132" className="w-full" aria-label="Mutable vs Immutable">
      <defs>
        <style>{`
          @keyframes miPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .mi{animation:miPop .4s .1s ease both}
        `}</style>
      </defs>
      <g className="mi">
        {/* Immutable */}
        <rect x="6" y="4" width="250" height="124" rx="10"
          fill={C.immut} fillOpacity=".09" stroke={C.immut} strokeOpacity=".4" strokeWidth="1.5"/>
        <text x="131" y="26" textAnchor="middle" fontSize="12" fontWeight="700"
          fill={C.immut} fontFamily="Poppins,sans-serif">🔒 Immutable</text>
        <text x="131" y="42" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">modify = new object created</text>
        {immut.map((t, i) => (
          <text key={t} x={20 + (i % 3) * 80} y={62 + Math.floor(i / 3) * 22}
            fontSize="11" fontWeight="600" fill={C.immut} fontFamily="Poppins,sans-serif">{t}</text>
        ))}
        <text x="131" y="118" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">✓ hashable — can be dict key</text>

        {/* Mutable */}
        <rect x="264" y="4" width="250" height="124" rx="10"
          fill={C.mut} fillOpacity=".09" stroke={C.mut} strokeOpacity=".4" strokeWidth="1.5"/>
        <text x="389" y="26" textAnchor="middle" fontSize="12" fontWeight="700"
          fill={C.mut} fontFamily="Poppins,sans-serif">⚠️ Mutable</text>
        <text x="389" y="42" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">same object modified in-place</text>
        {mut.map((t, i) => (
          <text key={t} x={278 + (i % 2) * 118} y={62 + Math.floor(i / 2) * 22}
            fontSize="11" fontWeight="600" fill={C.mut} fontFamily="Poppins,sans-serif">{t}</text>
        ))}
        <text x="389" y="118" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">❌ not hashable — no dict key</text>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 3 — Mutation vs Rebinding
// ─────────────────────────────────────────────────────────
function MutRebindSVG() {
  return (
    <svg viewBox="0 0 520 185" className="w-full" aria-label="Mutation vs Rebinding">
      <defs>
        <style>{`
          @keyframes mrFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
          .mr0{animation:mrFade .3s .0s ease both}
          .mr1{animation:mrFade .3s .18s ease both}
          .mr2{animation:mrFade .3s .36s ease both}
          .mr3{animation:mrFade .3s .52s ease both}
        `}</style>
        <marker id="mrBlue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.immut}/>
        </marker>
        <marker id="mrAmb" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L7,3.5 z" fill={C.mut}/>
        </marker>
      </defs>

      {/* Rebinding section */}
      <g className="mr0">
        <rect x="8" y="8" width="244" height="165" rx="10"
          fill={C.immut} fillOpacity=".07" stroke={C.immut} strokeOpacity=".3" strokeWidth="1.5"/>
        <text x="130" y="28" textAnchor="middle" fontSize="12" fontWeight="700"
          fill={C.immut} fontFamily="Poppins,sans-serif">Rebinding — New Object</text>
        <text x="130" y="44" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Space Mono,monospace">a = [1,2];  a = [3,4]</text>
      </g>
      <g className="mr1">
        {/* Before */}
        <rect x="22" y="54" width="40" height="26" rx="5"
          fill={C.immut} fillOpacity=".2" stroke={C.immut} strokeOpacity=".5" strokeWidth="1"/>
        <text x="42" y="71" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.immut} fontFamily="Poppins,sans-serif">a</text>
        <line x1="62" y1="67" x2="106" y2="67"
          stroke={C.immut} strokeWidth="1.5" markerEnd="url(#mrBlue)"/>
        <circle cx="130" cy="67" r="26"
          fill={C.immut} fillOpacity=".12" stroke={C.immut} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="130" y="64" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.immut} fontFamily="Space Mono,monospace">[1,2]</text>
        <text x="130" y="80" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">old obj</text>

        {/* After — label moves */}
        <rect x="22" y="114" width="40" height="26" rx="5"
          fill={C.immut} fillOpacity=".2" stroke={C.immut} strokeOpacity=".5" strokeWidth="1"/>
        <text x="42" y="131" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.immut} fontFamily="Poppins,sans-serif">a</text>
        <line x1="62" y1="127" x2="106" y2="127"
          stroke={C.immut} strokeWidth="1.5" markerEnd="url(#mrBlue)"/>
        <circle cx="130" cy="127" r="26"
          fill={C.ref} fillOpacity=".12" stroke={C.ref} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="130" y="124" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.ref} fontFamily="Space Mono,monospace">[3,4]</text>
        <text x="130" y="140" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Open Sans,sans-serif">new obj</text>

        <text x="130" y="164" textAnchor="middle" fontSize="10" fill={C.muted}
          fontFamily="Open Sans,sans-serif">old list untouched — label moved</text>
      </g>

      {/* Mutation section */}
      <g className="mr2">
        <rect x="268" y="8" width="244" height="165" rx="10"
          fill={C.mut} fillOpacity=".07" stroke={C.mut} strokeOpacity=".3" strokeWidth="1.5"/>
        <text x="390" y="28" textAnchor="middle" fontSize="12" fontWeight="700"
          fill={C.mut} fontFamily="Poppins,sans-serif">Mutation — Same Object</text>
        <text x="390" y="44" textAnchor="middle" fontSize="9.5" fill={C.muted}
          fontFamily="Space Mono,monospace">a = [1,2];  a.append(3)</text>
      </g>
      <g className="mr3">
        {[{ name: 'a', y: 86 }, { name: 'b', y: 116 }].map(v => (
          <g key={v.name}>
            <rect x="282" y={v.y - 14} width="36" height="26" rx="5"
              fill={C.mut} fillOpacity=".2" stroke={C.mut} strokeOpacity=".5" strokeWidth="1"/>
            <text x="300" y={v.y + 4} textAnchor="middle" fontSize="11" fontWeight="700"
              fill={C.mut} fontFamily="Poppins,sans-serif">{v.name}</text>
            <line x1="318" y1={v.y} x2="358" y2="101"
              stroke={C.mut} strokeWidth="1.5" markerEnd="url(#mrAmb)"/>
          </g>
        ))}

        <circle cx="390" cy="101" r="36"
          fill={C.mut} fillOpacity=".12" stroke={C.mut} strokeOpacity=".5" strokeWidth="1.5"/>
        <text x="390" y="95" textAnchor="middle" fontSize="12" fontWeight="700"
          fill={C.mut} fontFamily="Space Mono,monospace">[1,2,3]</text>
        <text x="390" y="114" textAnchor="middle" fontSize="10" fill={C.muted}
          fontFamily="Open Sans,sans-serif">same object</text>

        <text x="390" y="164" textAnchor="middle" fontSize="10" fill={C.trap}
          fontFamily="Open Sans,sans-serif">both a and b see [1,2,3] — shared!</text>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 4 — Quick Recall
// ─────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 540 165" className="w-full" aria-label="Memory model quick recall">
      <defs>
        <style>{`
          @keyframes mPop{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
          .m0{animation:mPop .3s .0s ease both}
          .m1{animation:mPop .3s .12s ease both}
          .m2{animation:mPop .3s .24s ease both}
        `}</style>
      </defs>
      <g className="m0">
        <rect x="4" y="4" width="168" height="157" rx="9"
          fill={C.immut} fillOpacity=".09" stroke={C.immut} strokeOpacity=".35" strokeWidth="1.5"/>
        <text x="88" y="24" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.immut} fontFamily="Poppins,sans-serif">Variable = Label</text>
        {['Not a box — a reference', 'id() = memory address', 'is checks same id', '== checks value', 'del removes label'].map((l, i) => (
          <text key={i} x="14" y={42 + i * 19} fontSize="10"
            fill={C.muted} fontFamily="Open Sans,sans-serif">• {l}</text>
        ))}
      </g>
      <g className="m1">
        <rect x="180" y="4" width="168" height="157" rx="9"
          fill={C.mut} fillOpacity=".09" stroke={C.mut} strokeOpacity=".35" strokeWidth="1.5"/>
        <text x="264" y="24" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.mut} fontFamily="Poppins,sans-serif">Mutable objects</text>
        {['list, dict, set', 'shared when assigned', 'b = a → same object', 'b.append → a sees it!', 'copy() for safe copy'].map((l, i) => (
          <text key={i} x="190" y={42 + i * 19} fontSize="10"
            fill={C.muted} fontFamily="Open Sans,sans-serif">• {l}</text>
        ))}
      </g>
      <g className="m2">
        <rect x="356" y="4" width="180" height="157" rx="9"
          fill={C.trap} fillOpacity=".09" stroke={C.trap} strokeOpacity=".35" strokeWidth="1.5"/>
        <text x="446" y="24" textAnchor="middle" fontSize="11" fontWeight="700"
          fill={C.trap} fontFamily="Poppins,sans-serif">Production Traps</text>
        {['Mutable default arg', 'Sharing config lists', 'a += [1] on list', 'a += (1,) on tuple', 'is for int comparison'].map((l, i) => (
          <text key={i} x="366" y={42 + i * 19} fontSize="10"
            fill={C.muted} fontFamily="Open Sans,sans-serif">⚠️ {l}</text>
        ))}
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// Main Note
// ─────────────────────────────────────────────────────────
export default function MemoryModelNote() {
  return (
    <NoteLayout
      title="Python Memory Model — Mutable vs Immutable"
      phase="0A"
      subtitle="Variable = label on heap object. Mutable objects share — ye samajhna production bugs se bachata hai."
    >

      {/* ── 1. Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — Variable = Label">
        <MentalModel
          analogyTitle="🏷️ Sticker on Object"
          analogy={
            <div className="space-y-3 text-sm font-body">
              <div className="space-y-1.5">
                {[
                  ['a = [1,2]',    'sticker "a" → list object on heap'],
                  ['b = a',        'sticker "b" → SAME list (not a copy!)'],
                  ['b.append(3)',  'same object mutated → a bhi [1,2,3] dekhega'],
                  ['a = [3,4]',   'sticker "a" rebinds → b abhi bhi old list pe hai'],
                  ['del a',        'sticker removed → GC decides when to free'],
                ].map(([code, note]) => (
                  <div key={code} className="flex items-start gap-2">
                    <code className="font-code text-xs text-primary shrink-0 w-28">{code}</code>
                    <span className="text-xs text-content-muted">{note}</span>
                  </div>
                ))}
              </div>
            </div>
          }
          diagram={<MemoryModelSVG />}
        />
      </SectionBlock>

      {/* ── 2. Mutable vs Immutable ── */}
      <SectionBlock icon="🔒" title="Mutable vs Immutable">
        <div className="space-y-4">
          <div className="bg-surface-visual rounded-xl p-4">
            <MutImmutSVG />
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-highlight">
            <table className="w-full text-xs font-body min-w-[420px]">
              <thead>
                <tr className="bg-surface-visual border-b border-highlight">
                  {['', 'Types', 'Modify?', 'New object?', 'Hashable?'].map(h => (
                    <th key={h} className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.08em] text-content-muted font-heading font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-highlight">
                  <td className="px-4 py-2.5 font-semibold text-primary">🔒 Immutable</td>
                  <td className="px-4 py-2.5 font-code text-content-muted">int, float, str, tuple, bool, frozenset</td>
                  <td className="px-4 py-2.5 text-visual-4">❌ No</td>
                  <td className="px-4 py-2.5 text-visual-2">✓ Always</td>
                  <td className="px-4 py-2.5 text-visual-2">✓ dict key ok</td>
                </tr>
                <tr>
                  <td className="px-4 py-2.5 font-semibold text-accent">⚠️ Mutable</td>
                  <td className="px-4 py-2.5 font-code text-content-muted">list, dict, set, custom objects</td>
                  <td className="px-4 py-2.5 text-visual-2">✓ In-place</td>
                  <td className="px-4 py-2.5 text-visual-4">❌ Same id</td>
                  <td className="px-4 py-2.5 text-visual-4">❌ dict key nahi</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CodeBlock
            language="python"
            filename="mutability.py"
            code={`# Immutable — x+1 creates NEW object
x = 10; id_b = id(x)
x += 1
id_b == id(x)     # False — different objects

# Mutable — .append() modifies SAME object
lst = [1,2,3]; id_b = id(lst)
lst.append(4)
id_b == id(lst)   # True — same object!

# Shared reference trap
a = [1, 2]
b = a             # NOT a copy — same object!
b.append(99)
print(a)          # [1, 2, 99]  ← a changed!

# Safe copies
c = a.copy()      # shallow copy
c = a[:]          # also shallow
import copy
d = copy.deepcopy(a)  # deep copy (nested objects too)`}
          />
        </div>
      </SectionBlock>

      {/* ── 3. Mutation vs Rebinding ── */}
      <SectionBlock icon="🔄" title="Mutation vs Rebinding">
        <div className="space-y-4">
          <div className="bg-surface-visual rounded-xl p-4">
            <MutRebindSVG />
          </div>
          <CompareBlock
            badLabel="❌ Confusing behavior"
            bad={`a = [1, 2]; b = a

a = [3, 4]       # rebinding
print(b)         # [1, 2] — b unchanged

a = [1, 2]; b = a
a.append(99)     # mutation
print(b)         # [1, 2, 99] — b changed!`}
            goodLabel="✅ Rule: dono samjho"
            good={`# REBINDING — label moves, other refs unaffected
a = a + [99]    # new list, b still old one

# MUTATION — same object, all refs see change
a.append(99)    # b dekhega

# += on LIST = mutation (same id)
a += [99]       # calls __iadd__, in-place

# += on TUPLE = rebinding (new id)
t = (1, 2)
t += (3,)       # new tuple created`}
          />
        </div>
      </SectionBlock>

      {/* ── 4. identity vs equality ── */}
      <SectionBlock icon="🔍" title="Identity (is) vs Equality (==)">
        <div className="space-y-4">
          {/* Rule table */}
          <div className="overflow-x-auto rounded-xl border border-highlight">
            <table className="w-full text-xs font-body min-w-[380px]">
              <thead>
                <tr className="bg-surface-visual border-b border-highlight">
                  {['Operator', 'Checks', 'When to use'].map(h => (
                    <th key={h} className="text-left px-4 py-2.5 text-[11px] uppercase tracking-[0.08em] text-content-muted font-heading font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['==', 'Value equal (calls __eq__)', 'Always for comparisons'],
                  ['is', 'Same object in memory (same id)', 'Only for None, True, False'],
                ].map(([op, checks, when], i) => (
                  <tr key={op} className={`border-b border-highlight last:border-0 ${i % 2 === 0 ? '' : 'bg-surface-visual/40'}`}>
                    <td className="px-4 py-2.5 font-code font-bold text-primary">{op}</td>
                    <td className="px-4 py-2.5 text-content-muted">{checks}</td>
                    <td className="px-4 py-2.5 text-content-muted">{when}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock
            language="python"
            filename="identity_equality.py"
            code={`[1,2] == [1,2]   # True  — same value
[1,2] is [1,2]   # False — different objects

# CPython int caching: -5 to 256 cached
a = 256; b = 256; a is b  # True  (cached)
a = 257; b = 257; a is b  # False (not cached)

# Always use is for None
x is None    # ✓ correct
x == None    # works but __eq__ can be overridden`}
          />

          <InfoBox type="warn" title="is for integers — unreliable">
            CPython caches -5..256 — so <code className="font-code text-xs">257 is 257</code> can be False.
            Always use <code className="font-code text-xs">==</code> for value comparison.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 5. Traps ── */}
      <SectionBlock icon="🪤" title="Interview Traps">
        <TrapsTable rows={[
          {
            level: 'M',
            mistake: 'def add(item, lst=[]) — default list reuse',
            kyun: 'Default args evaluated once at def time — list accumulates across calls',
            fix: 'lst=None; if lst is None: lst=[]',
          },
          {
            level: 'M',
            mistake: 'a=[[1],[2]]; b=a.copy(); b[0].append(99) — a bhi change?',
            kyun: 'Shallow copy — outer list new, inner lists still shared',
            fix: 'copy.deepcopy(a)',
          },
          {
            level: 'M',
            mistake: 'lst += [1] aur tup += (1,) — dono same kaam karte hain?',
            kyun: 'List: __iadd__ = in-place (same id). Tuple: no __iadd__ = new object',
            fix: 'id() se verify karo',
          },
        ]} />
      </SectionBlock>

      {/* ── 6. Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'variable = label',    value: 'sticker on heap object — not a container' },
          { label: 'id(x)',               value: 'memory address — unique object identity' },
          { label: 'x is y',             value: 'same object? (same id) — use only for None' },
          { label: 'x == y',             value: 'same value? — always use for comparison' },
          { label: 'Immutable',          value: 'int, float, str, tuple, bool, frozenset' },
          { label: 'Mutable',            value: 'list, dict, set, custom objects' },
          { label: 'Rebinding',          value: 'a = new_val — label moves, old object intact' },
          { label: 'Mutation',           value: 'a.append() — same object, all refs see change' },
          { label: 'Shallow copy',       value: 'a.copy() / a[:] — new container, shared inner' },
          { label: 'Deep copy',          value: 'copy.deepcopy(a) — fully independent clone' },
          { label: '+= on list',         value: 'in-place mutation (same id)' },
          { label: '+= on tuple',        value: 'new object (new id)' },
        ]} />
      </SectionBlock>

      {/* ── 7. Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── 8. Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{
            title: 'Python Memory Model',
            description: 'Variables, objects, identity, mutability',
          }}
          to={{
            title: 'Functions — def, args, kwargs',
            description: 'Memory model ke baad functions — pass-by-object-reference samjho',
            href: '/roadmap/topic/python-functions/0',
          }}
        />
      </SectionBlock>

    </NoteLayout>
  )
}
