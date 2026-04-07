import {
  NoteLayout, SectionBlock, MentalModel,
  TrapBox, Cheatsheet, QuickRecall, ConnectedTopics, InfoBox, CodeBlock,
} from '../../components/notes'

// ─────────────────────────────────────────────────────────
// SVG 1 — IP Address Anatomy (animated build-up)
// ─────────────────────────────────────────────────────────
function IPAnatomySVG() {
  const octets = [
    { val: '192', label: 'Network',  color: '#4F8CFF' },
    { val: '168', label: 'Subnet',   color: '#34D399' },
    { val: '4',   label: 'Block',    color: '#F59E0B' },
    { val: '23',  label: 'Device',   color: '#F87171' },
  ]
  const bw = 110, gap = 14, ml = 20
  const total = ml * 2 + octets.length * bw + (octets.length - 1) * gap  // 20+20+4*110+3*14 = 522

  return (
    <svg viewBox={`0 0 ${total} 170`} className="w-full max-w-xl" aria-label="IP address anatomy">
      <defs>
        <style>{`
          @keyframes ipRise { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
          .ip0 { animation: ipRise .45s .0s ease both }
          .ip1 { animation: ipRise .45s .15s ease both }
          .ip2 { animation: ipRise .45s .3s ease both }
          .ip3 { animation: ipRise .45s .45s ease both }
          @keyframes dotPop { from{opacity:0;transform:scale(0)} to{opacity:1;transform:scale(1)} }
          .dot0 { animation: dotPop .2s .2s ease both }
          .dot1 { animation: dotPop .2s .35s ease both }
          .dot2 { animation: dotPop .2s .5s ease both }
        `}</style>
      </defs>

      {/* Label row */}
      <text x={total/2} y="18" textAnchor="middle" fontSize="11" fill="var(--text-secondary)"
        fontFamily="Open Sans,sans-serif">
        IPv4 = 4 groups × 8 bits = 32-bit address
      </text>

      {/* Octets */}
      {octets.map((o, i) => {
        const x = ml + i * (bw + gap)
        return (
          <g key={i} className={`ip${i}`}>
            <rect x={x} y={28} width={bw} height={100} rx="10"
              fill={o.color} opacity=".13"/>
            <rect x={x} y={28} width={bw} height={100} rx="10"
              fill="none" stroke={o.color} strokeWidth="1.8" opacity=".5"/>
            {/* Big number */}
            <text x={x + bw/2} y={80} textAnchor="middle"
              fontSize="32" fontWeight="800" fill={o.color}
              fontFamily="Poppins,sans-serif">
              {o.val}
            </text>
            {/* Label */}
            <text x={x + bw/2} y={102} textAnchor="middle"
              fontSize="10" fill={o.color} fontFamily="Open Sans,sans-serif" opacity=".85">
              {o.label}
            </text>
            {/* Bit range — inside box, 10px from bottom (28+100=128, text at 118) */}
            <text x={x + bw/2} y={118} textAnchor="middle"
              fontSize="9" fill="var(--text-secondary)" fontFamily="Poppins,sans-serif">
              0 – 255
            </text>
          </g>
        )
      })}

      {/* Dots between octets */}
      {[0,1,2].map(i => (
        <text key={i}
          x={ml + (i+1)*bw + i*gap + gap/2}
          y={78} textAnchor="middle"
          fontSize="28" fontWeight="900" fill="var(--text-secondary)"
          fontFamily="monospace" className={`dot${i}`}>
          .
        </text>
      ))}

      {/* Bottom note */}
      <text x={total/2} y={156} textAnchor="middle"
        fontSize="10" fill="var(--text-secondary)" fontFamily="Open Sans,sans-serif">
        2³² = 4,294,967,296 total addresses
      </text>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 2 — IPv4 vs IPv6: structure clearly shown for both
// ─────────────────────────────────────────────────────────
function IPv4v6SVG() {
  const blue  = '#4F8CFF'
  const green = '#34D399'
  const muted = '#6A737D'
  const divider = '#2D333B'

  // 4 columns: bw=118, gap=12, ml=20 → 20+4×118+3×12+20=548 ≤ 560
  const bw = 118, gap = 12, ml = 20
  const xs = [0, 1, 2, 3].map(i => ml + i * (bw + gap))

  const ipv4 = ['192', '168', '1', '10']
  const ipv6 = ['2001', '0db8', '85a3', '0000', '0000', '8a2e', '0370', '7334']

  return (
    <svg viewBox="0 0 560 300" className="w-full" aria-label="IPv4 vs IPv6 structure">
      <defs>
        <style>{`
          @keyframes bp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
          .v4-0{animation:bp .3s .05s ease both} .v4-1{animation:bp .3s .15s ease both}
          .v4-2{animation:bp .3s .25s ease both} .v4-3{animation:bp .3s .35s ease both}
          .v6-0{animation:bp .3s .55s ease both} .v6-1{animation:bp .3s .65s ease both}
          .v6-2{animation:bp .3s .75s ease both} .v6-3{animation:bp .3s .85s ease both}
          .v6-4{animation:bp .3s .95s ease both} .v6-5{animation:bp .3s 1.05s ease both}
          .v6-6{animation:bp .3s 1.15s ease both} .v6-7{animation:bp .3s 1.25s ease both}
          @keyframes fi2 { from{opacity:0} to{opacity:1} }
          .fi2 { animation: fi2 .4s 1.4s ease both }
        `}</style>
      </defs>

      {/* ── IPv4 header ── */}
      <text x={ml} y={20} fontSize="14" fontWeight="700" fill={blue}
        fontFamily="Poppins,sans-serif">IPv4</text>
      <text x={ml + 52} y={20} fontSize="10" fill={muted}
        fontFamily="Open Sans,sans-serif">— 32-bit · 4 octets · dot-decimal</text>
      <text x={548} y={20} textAnchor="end" fontSize="11" fontWeight="700" fill={blue}
        fontFamily="Poppins,sans-serif">4 × 8 = 32 bits</text>

      {/* IPv4 boxes */}
      {ipv4.map((v, i) => (
        <g key={i} className={`v4-${i}`}>
          <rect x={xs[i]} y={28} width={bw} height={60} rx="9"
            fill={blue} fillOpacity=".12" stroke={blue} strokeOpacity=".45" strokeWidth="1.5"/>
          <text x={xs[i] + bw / 2} y={62} textAnchor="middle"
            fontSize="26" fontWeight="800" fill={blue} fontFamily="Poppins,sans-serif">{v}</text>
          <text x={xs[i] + bw / 2} y={79} textAnchor="middle"
            fontSize="8.5" fill={muted} fontFamily="Open Sans,sans-serif">8 bits · 0–255</text>
          {i < 3 && (
            <text x={xs[i] + bw + gap / 2} y={64} textAnchor="middle"
              fontSize="22" fontWeight="900" fill={muted} fontFamily="monospace">.</text>
          )}
        </g>
      ))}

      {/* 4.3B note */}
      <text x={ml} y={104} fontSize="9.5" fill={muted} fontFamily="Open Sans,sans-serif">
        Total addresses: 2³² = 4,294,967,296 (~4.3 Billion) — exhausted in 2011
      </text>

      {/* Divider */}
      <line x1={ml} y1={116} x2={548} y2={116} stroke={divider} strokeWidth="1.5"/>

      {/* ── IPv6 header ── */}
      <text x={ml} y={136} fontSize="14" fontWeight="700" fill={green}
        fontFamily="Poppins,sans-serif">IPv6</text>
      <text x={ml + 52} y={136} fontSize="10" fill={muted}
        fontFamily="Open Sans,sans-serif">— 128-bit · 8 hextets · colon-hex</text>
      <text x={548} y={136} textAnchor="end" fontSize="11" fontWeight="700" fill={green}
        fontFamily="Poppins,sans-serif">8 × 16 = 128 bits</text>

      {/* IPv6 boxes — 2 rows of 4 */}
      {ipv6.map((v, i) => {
        const row = Math.floor(i / 4)
        const col = i % 4
        const x = xs[col]
        const y = 144 + row * 54
        return (
          <g key={i} className={`v6-${i}`}>
            <rect x={x} y={y} width={bw} height={44} rx="8"
              fill={green} fillOpacity=".1" stroke={green} strokeOpacity=".4" strokeWidth="1.3"/>
            <text x={x + bw / 2} y={y + 20} textAnchor="middle"
              fontSize="14" fontWeight="700" fill={green} fontFamily="Poppins,sans-serif">{v}</text>
            <text x={x + bw / 2} y={y + 35} textAnchor="middle"
              fontSize="8" fill={muted} fontFamily="Open Sans,sans-serif">16 bits · hex</text>
            {col < 3 && (
              <text x={x + bw + gap / 2} y={y + 22} textAnchor="middle"
                fontSize="16" fontWeight="700" fill={muted} fontFamily="monospace">:</text>
            )}
          </g>
        )
      })}

      {/* Shorthand + comparison */}
      <g className="fi2">
        <text x={ml} y={262} fontSize="9.5" fill={muted} fontFamily="Open Sans,sans-serif">
          Short form (:: = consecutive zeros ba collapsed karte hain):
        </text>
        <text x={ml} y={278} fontSize="12" fontWeight="700" fill={green}
          fontFamily="Poppins,sans-serif">2001:db8::8a2e:370:7334</text>
        <text x={ml} y={295} fontSize="9" fill={muted} fontFamily="Open Sans,sans-serif">
          Total: 2¹²⁸ = 340 undecillion addresses — practically infinite ∞
        </text>
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 3 — Network Flow: Device → Router → Internet → Server
// ─────────────────────────────────────────────────────────
function NetworkFlowSVG() {
  const steps = [
    { icon: '💻', label: 'Tera Device',  ip: '192.168.1.10', note: 'Private IP', color: '#4F8CFF' },
    { icon: '📡', label: 'Router',       ip: 'NAT magic',    note: 'Translates', color: '#F59E0B' },
    { icon: '🌐', label: 'Internet',     ip: '203.0.113.45', note: 'Public IP',  color: '#34D399' },
    { icon: '🖥️', label: 'Server',       ip: '142.250.x.x',  note: 'Google',    color: '#A78BFA' },
  ]
  const bw = 108, gap = 36, ml = 18
  // total: 18 + 4*108 + 3*36 + 18 = 18+432+108+18 = 576

  return (
    <svg viewBox="0 0 576 186" className="w-full" aria-label="Network flow">
      <defs>
        <style>{`
          @keyframes nfFade { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
          .nf0{animation:nfFade .4s .0s ease both}
          .nf1{animation:nfFade .4s .18s ease both}
          .nf2{animation:nfFade .4s .36s ease both}
          .nf3{animation:nfFade .4s .54s ease both}
          @keyframes arrowPulse { 0%,100%{opacity:.4} 50%{opacity:1} }
          .ap{animation:arrowPulse 1.8s infinite}
        `}</style>
      </defs>

      {steps.map((s, i) => {
        const x = ml + i * (bw + gap)
        return (
          <g key={i} className={`nf${i}`}>
            {/* Box */}
            <rect x={x} y={20} width={bw} height={130} rx="10"
              fill={s.color} opacity=".09"/>
            <rect x={x} y={20} width={bw} height={130} rx="10"
              fill="none" stroke={s.color} strokeWidth="1.5" opacity=".45"/>
            {/* Icon */}
            <text x={x + bw/2} y={62} textAnchor="middle"
              fontSize="28" fontFamily="sans-serif">{s.icon}</text>
            {/* Label */}
            <text x={x + bw/2} y={84} textAnchor="middle"
              fontSize="11" fontWeight="700" fill={s.color}
              fontFamily="Poppins,sans-serif">{s.label}</text>
            {/* IP */}
            <text x={x + bw/2} y={103} textAnchor="middle"
              fontSize="10" fontWeight="600" fill="var(--text-primary)"
              fontFamily="Poppins,sans-serif">{s.ip}</text>
            {/* Note */}
            <text x={x + bw/2} y={120} textAnchor="middle"
              fontSize="9.5" fill="var(--text-secondary)"
              fontFamily="Open Sans,sans-serif">{s.note}</text>

            {/* Arrow to next */}
            {i < steps.length - 1 && (
              <g className="ap">
                <line
                  x1={x + bw + 4} y1={85}
                  x2={x + bw + gap - 4} y2={85}
                  stroke={s.color} strokeWidth="2" strokeDasharray="5 3"/>
                <polygon
                  points={`${x+bw+gap-4},80 ${x+bw+gap+4},85 ${x+bw+gap-4},90`}
                  fill={steps[i+1].color}/>
              </g>
            )}
          </g>
        )
      })}

      {/* Bottom label */}
      <text x={576/2} y={172} textAnchor="middle"
        fontSize="10" fill="var(--text-secondary)" fontFamily="Open Sans,sans-serif">
        Router NAT karta hai: Private IP → Public IP, taaki sirf ek public IP se sab kaam ho
      </text>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 4 — Private IP Ranges Visual
// ─────────────────────────────────────────────────────────
function PrivateRangesSVG() {
  // Bar zone: x=200 to x=480 (width=280). barW max = 260px.
  const ranges = [
    { range: '10.0.0.0 / 8',     size: '16.7M', barW: 254, label: 'Enterprise networks, AWS VPC, GCP', color: '#4F8CFF' },
    { range: '172.16.0.0 / 12',  size: '1M',    barW: 143, label: 'Docker bridge, medium networks',    color: '#F59E0B' },
    { range: '192.168.0.0 / 16', size: '65K',   barW:  57, label: 'Home router — tera bhi yahi hoga',  color: '#34D399' },
  ]
  const rowH = 58   // enough for 2 lines of text + bar

  return (
    <svg viewBox={`0 0 500 ${40 + ranges.length * rowH + 30}`} className="w-full" aria-label="Private IP ranges">
      <defs>
        <style>{`
          @keyframes pr0 { from{width:0} to{width:254px} }
          @keyframes pr1 { from{width:0} to{width:143px} }
          @keyframes pr2 { from{width:0} to{width:57px}  }
          .prb0 { animation: pr0 .8s .1s ease both }
          .prb1 { animation: pr1 .8s .3s ease both }
          .prb2 { animation: pr2 .8s .5s ease both }
        `}</style>
      </defs>

      <text x="14" y="20" fontSize="11" fontWeight="700" fill="#8B949E"
        fontFamily="Poppins,sans-serif">
        Private ranges — internet par route nahi hote
      </text>

      {ranges.map((r, i) => {
        const y = 32 + i * rowH
        const midBar = 200 + r.barW / 2
        return (
          <g key={i}>
            {/* Range name */}
            <text x="14" y={y + 16} fontSize="12" fontWeight="700" fill={r.color}
              fontFamily="Poppins,sans-serif">{r.range}</text>
            {/* Use-case — 14px below range name */}
            <text x="14" y={y + 32} fontSize="9" fill="#8B949E"
              fontFamily="Open Sans,sans-serif">{r.label}</text>

            {/* Bar track */}
            <rect x="200" y={y + 8} width="260" height="24" rx="6"
              fill={r.color} fillOpacity=".1"/>
            {/* Bar fill */}
            <rect x="200" y={y + 8} width="0" height="24" rx="6"
              fill={r.color} fillOpacity=".6" className={`prb${i}`}/>
            {/* Size label centred in fill */}
            <text x={midBar} y={y + 24} textAnchor="middle"
              fontSize="10" fontWeight="700" fill="#fff"
              fontFamily="Poppins,sans-serif">{r.size} addrs</text>
          </g>
        )
      })}

      {/* Warning — 20px below last row */}
      <text x="14" y={40 + ranges.length * rowH + 10}
        fontSize="9" fill="#8B949E" fontFamily="Open Sans,sans-serif">
        ⚠ Inhe kabhi public internet pe directly route mat karo
      </text>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 5 — Under the Hood: animated request journey
// ─────────────────────────────────────────────────────────
function HoodFlowSVG() {
  const C = { blue:'#4F8CFF', orange:'#F59E0B', green:'#34D399', purple:'#A78BFA', muted:'#6A737D' }

  // 4 nodes: x=12,150,288,426  cx=56,194,332,470  nw=88 gap=50 ml=12
  const nodes = [
    { x:12,  cx:56,  icon:'💻', name:'Device',   ip:'192.168.1.10', sub:'Private IP',    color:C.blue   },
    { x:150, cx:194, icon:'📡', name:'Router',   ip:'192.168.1.1',  sub:'NAT Gateway',   color:C.orange },
    { x:288, cx:332, icon:'🌐', name:'Internet', ip:'many hops',    sub:'Public routing', color:C.green  },
    { x:426, cx:470, icon:'🖥', name:'Server',   ip:'142.250.x.x',  sub:'google.com',    color:C.purple },
  ]
  const nw=88, nh=90

  return (
    <svg viewBox="0 0 544 268" className="w-full" aria-label="Request journey through internet">
      <defs>
        <style>{`
          @keyframes nPop{from{opacity:0;transform:scale(.86)}to{opacity:1;transform:scale(1)}}
          .hN0{animation:nPop .3s .00s ease both}
          .hN1{animation:nPop .3s .12s ease both}
          .hN2{animation:nPop .3s .24s ease both}
          .hN3{animation:nPop .3s .36s ease both}
          @keyframes reqDash{from{stroke-dashoffset:36}to{stroke-dashoffset:0}}
          @keyframes resDash{from{stroke-dashoffset:-36}to{stroke-dashoffset:0}}
          .reqL{stroke-dasharray:8 5;animation:reqDash .9s linear infinite}
          .resL{stroke-dasharray:8 5;animation:resDash .9s linear infinite}
          @keyframes hFi{from{opacity:0}to{opacity:1}}
          .hFi{animation:hFi .5s .5s ease both}
        `}</style>
      </defs>

      {/* ── DNS strip ── */}
      <rect x="8" y="6" width="528" height="36" rx="7" fill={C.blue} fillOpacity=".07"/>
      <text x="18" y="20" fontSize="9.5" fontWeight="700" fill={C.blue} fontFamily="Poppins,sans-serif">① DNS Lookup</text>
      <text x="18" y="35" fontSize="8.5" fill={C.muted} fontFamily="Open Sans,sans-serif">browser types google.com → DNS server → resolves to 142.250.195.46</text>

      {/* ── Nodes ── */}
      {nodes.map((n, i) => (
        <g key={n.name} className={`hN${i}`}>
          <rect x={n.x} y={50} width={nw} height={nh} rx="9"
            fill={n.color} fillOpacity=".1" stroke={n.color} strokeOpacity=".4" strokeWidth="1.5"/>
          <text x={n.cx} y={76} textAnchor="middle" fontSize="24" fontFamily="sans-serif">{n.icon}</text>
          <text x={n.cx} y={94} textAnchor="middle" fontSize="10" fontWeight="700" fill={n.color}
            fontFamily="Poppins,sans-serif">{n.name}</text>
          <text x={n.cx} y={110} textAnchor="middle" fontSize="8.5" fontWeight="600" fill={n.color}
            fontFamily="Poppins,sans-serif" fillOpacity=".8">{n.ip}</text>
          <text x={n.cx} y={124} textAnchor="middle" fontSize="7.5" fill={C.muted}
            fontFamily="Open Sans,sans-serif">{n.sub}</text>
        </g>
      ))}

      {/* ── Request arrow (right) ── */}
      <line x1="100" y1="162" x2="422" y2="162" stroke={C.blue} strokeWidth="2" strokeOpacity=".7" className="reqL"/>
      <polygon points="422,157 434,162 422,167" fill={C.blue}/>
      {/* "Request →" label above arrow right end */}
      <text x="536" y="157" textAnchor="end" fontSize="9" fontWeight="700" fill={C.blue}
        fontFamily="Poppins,sans-serif" className="hFi">Request →</text>

      {/* Segment labels above request arrow */}
      <g className="hFi">
        <text x="125" y="152" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={C.blue}
          fontFamily="Poppins,sans-serif" fillOpacity=".9">② packet</text>
        <text x="263" y="152" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={C.orange}
          fontFamily="Poppins,sans-serif" fillOpacity=".9">④ NAT out</text>
        <text x="401" y="152" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={C.green}
          fontFamily="Poppins,sans-serif" fillOpacity=".9">⑤ routing</text>
      </g>

      {/* ── Response arrow (left) ── */}
      <line x1="422" y1="174" x2="100" y2="174" stroke={C.green} strokeWidth="2" strokeOpacity=".7" className="resL"/>
      <polygon points="100,169 88,174 100,179" fill={C.green}/>
      {/* "← Response" start label */}
      <text x="88" y="170" textAnchor="end" fontSize="9" fontWeight="700" fill={C.green}
        fontFamily="Poppins,sans-serif" className="hFi">← Response</text>

      {/* Segment labels below response arrow */}
      <g className="hFi">
        <text x="401" y="186" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={C.purple}
          fontFamily="Poppins,sans-serif" fillOpacity=".9">⑥ reply</text>
        <text x="263" y="186" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={C.green}
          fontFamily="Poppins,sans-serif" fillOpacity=".9">hops back</text>
        <text x="125" y="186" textAnchor="middle" fontSize="8.5" fontWeight="600" fill={C.orange}
          fontFamily="Poppins,sans-serif" fillOpacity=".9">⑦ NAT↩</text>
      </g>

      {/* ── NAT detail strip ── */}
      <rect x="8" y="208" width="528" height="52" rx="7" fill={C.orange} fillOpacity=".07" className="hFi"/>

      {/* OUT */}
      <text x="18" y="224" fontSize="9" fontWeight="700" fill={C.orange}
        fontFamily="Poppins,sans-serif" className="hFi">④ NAT (outgoing)</text>
      <text x="18" y="239" fontSize="9" fill={C.muted}
        fontFamily="Poppins,sans-serif" className="hFi">192.168.1.10</text>
      <text x="118" y="239" fontSize="11" fill={C.orange}
        fontFamily="monospace" className="hFi">→</text>
      <text x="134" y="239" fontSize="9" fontWeight="700" fill={C.orange}
        fontFamily="Poppins,sans-serif" className="hFi">203.0.113.45</text>
      <text x="18" y="252" fontSize="8" fill={C.muted}
        fontFamily="Open Sans,sans-serif" className="hFi">Router replaces private IP with public IP</text>

      {/* IN */}
      <text x="284" y="224" fontSize="9" fontWeight="700" fill={C.green}
        fontFamily="Poppins,sans-serif" className="hFi">⑦ NAT Reverse (incoming)</text>
      <text x="284" y="239" fontSize="9" fill={C.muted}
        fontFamily="Poppins,sans-serif" className="hFi">203.0.113.45</text>
      <text x="372" y="239" fontSize="11" fill={C.green}
        fontFamily="monospace" className="hFi">→</text>
      <text x="388" y="239" fontSize="9" fontWeight="700" fill={C.green}
        fontFamily="Poppins,sans-serif" className="hFi">192.168.1.10</text>
      <text x="284" y="252" fontSize="8" fill={C.muted}
        fontFamily="Open Sans,sans-serif" className="hFi">Router checks NAT table → correct device</text>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// SVG 6 — Quick Recall
// ─────────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 560 230" className="w-full" aria-label="IP address quick recall">
      <defs>
        <style>{`
          @keyframes qPop{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
          .q0{animation:qPop .35s .0s ease both}
          .q1{animation:qPop .35s .1s ease both}
          .q2{animation:qPop .35s .2s ease both}
          .q3{animation:qPop .35s .3s ease both}
          .q4{animation:qPop .35s .4s ease both}
        `}</style>
      </defs>

      {/* Row 1: 3 equal boxes */}
      {[
        { title:'IPv4',           lines:['32-bit','4 octets','4.3B addrs','Exhausted ⚠'], color:'#4F8CFF' },
        { title:'IPv6',           lines:['128-bit','8 hextets','340 undecillion','Future ✓'],  color:'#34D399' },
        { title:'Private Ranges', lines:['10.x.x.x','172.16.x.x','192.168.x.x','No routing'],color:'#F59E0B' },
      ].map((b, i) => {
        const bw = 170, gap = 14, x = 4 + i*(bw+gap)
        return (
          <g key={i} className={`q${i}`}>
            <rect x={x} y={4} width={bw} height={110} rx="9"
              fill={b.color} opacity=".1"/>
            <rect x={x} y={4} width={bw} height={110} rx="9"
              fill="none" stroke={b.color} strokeWidth="1.6" opacity=".45"/>
            <text x={x + bw/2} y={26} textAnchor="middle"
              fontSize="12" fontWeight="700" fill={b.color}
              fontFamily="Poppins,sans-serif">{b.title}</text>
            {b.lines.map((l, j) => (
              <text key={j} x={x + bw/2} y={44 + j*17} textAnchor="middle"
                fontSize="10" fill={j === b.lines.length-1 ? b.color : 'var(--text-primary)'}
                fontWeight={j === b.lines.length-1 ? '700' : '400'}
                fontFamily={j === b.lines.length-1 ? 'Poppins,sans-serif' : 'Open Sans,sans-serif'}>
                {l}
              </text>
            ))}
          </g>
        )
      })}

      {/* Special IPs box */}
      <g className="q3">
        <rect x={4} y={124} width={556} height={52} rx="9"
          fill="var(--visual-3)" opacity=".08"/>
        <rect x={4} y={124} width={556} height={52} rx="9"
          fill="none" stroke="var(--visual-3)" strokeWidth="1.4" opacity=".4"/>
        <text x={284} y={143} textAnchor="middle"
          fontSize="11" fontWeight="700" fill="var(--visual-3)"
          fontFamily="Poppins,sans-serif">Special Addresses</text>
        {[
          { x:80,  t:'127.0.0.1 = localhost' },
          { x:210, t:'0.0.0.0 = all interfaces' },
          { x:360, t:'255.255.255.255 = broadcast' },
          { x:498, t:'169.254.x.x = APIPA' },
        ].map(item => (
          <text key={item.x} x={item.x} y={163} textAnchor="middle"
            fontSize="9.5" fill="var(--text-primary)" fontFamily="Poppins,sans-serif" fontWeight="600">
            {item.t}
          </text>
        ))}
      </g>

      {/* Flow */}
      <g className="q4">
        <rect x={4} y={186} width={556} height={40} rx="9"
          fill="var(--primary)" opacity=".06"/>
        <rect x={4} y={186} width={556} height={40} rx="9"
          fill="none" stroke="var(--primary)" strokeWidth="1.2" opacity=".3"/>
        {[
          {x:60,  t:'💻 Device',  s:'192.168.x.x',  c:'#4F8CFF'},
          {x:180, t:'📡 Router',  s:'NAT',           c:'#F59E0B'},
          {x:300, t:'🏢 ISP',     s:'Public IP',     c:'#A78BFA'},
          {x:420, t:'🌐 Internet',s:'203.x.x.x',     c:'#34D399'},
        ].map((item,i) => (
          <g key={i}>
            <text x={item.x} y={201} textAnchor="middle"
              fontSize="10" fontWeight="700" fill={item.c}
              fontFamily="Poppins,sans-serif">{item.t}</text>
            <text x={item.x} y={218} textAnchor="middle"
              fontSize="9" fill="var(--text-secondary)"
              fontFamily="Open Sans,sans-serif">{item.s}</text>
            {i < 3 && <text x={item.x+75} y={208} fontSize="14"
              fill="var(--text-secondary)" fontFamily="monospace">→</text>}
          </g>
        ))}
      </g>
    </svg>
  )
}

// ─────────────────────────────────────────────────────────
// Main Note
// ─────────────────────────────────────────────────────────
export default function IPAddressNote() {
  return (
    <NoteLayout
      title="IP Address — IPv4 vs IPv6, Public vs Private"
      phase="1"
      subtitle="Har device ka internet par ek unique address hota hai — yahi IP address hai."
    >

      {/* ── 1. Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model">
        <MentalModel
          analogy={
            <div className="space-y-4 text-sm font-body">
              <p className="text-content font-semibold leading-snug">
                IP address = internet pe har device ka unique address —<br />
                bilkul ghar ke address ki tarah.
              </p>

              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-wider text-content-muted font-heading font-semibold">
                  Postman ka address (ghar):
                </p>
                {[
                  { level: 'City',     value: 'Mumbai',  note: 'Country ke andar' },
                  { level: 'Area',     value: 'Andheri', note: 'City ke andar' },
                  { level: 'Building', value: 'Block 4', note: 'Area ke andar' },
                  { level: 'Flat',     value: 'Flat 23', note: 'Exact location' },
                ].map(r => (
                  <div key={r.level} className="flex items-center gap-2">
                    <span className="w-14 text-xs text-content-muted shrink-0">{r.level}</span>
                    <span className="text-primary">→</span>
                    <span className="font-semibold text-content">{r.value}</span>
                    <span className="text-xs text-content-muted">· {r.note}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2 border-t border-highlight">
                <p className="text-[11px] uppercase tracking-wider text-content-muted font-heading font-semibold">
                  IP address (internet):
                </p>
                {[
                  { level: 'Network', value: '192', note: 'Kaun sa network' },
                  { level: 'Subnet',  value: '168', note: 'Kaun sa subnet' },
                  { level: 'Block',   value: '4',   note: 'Kaun sa block' },
                  { level: 'Device',  value: '23',  note: 'Exact device' },
                ].map(r => (
                  <div key={r.level} className="flex items-center gap-2">
                    <span className="w-14 text-xs text-content-muted shrink-0">{r.level}</span>
                    <span className="text-primary">→</span>
                    <code className="font-code text-sm font-bold text-primary">{r.value}</code>
                    <span className="text-xs text-content-muted">· {r.note}</span>
                  </div>
                ))}
              </div>
            </div>
          }
          diagram={<IPAnatomySVG />}
        />
      </SectionBlock>

      {/* ── 2. IPv4 vs IPv6 ── */}
      <SectionBlock icon="⚔️" title="IPv4 vs IPv6">
        <div className="bg-surface-visual rounded-xl p-6">
          <IPv4v6SVG />
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          {[
            { head: 'Kyun IPv4 khatam hua?', body: '2011 mein saari 4.3 Billion addresses assign ho gayi. Mobile phones, IoT devices — sab ko IP chahiye thi. Tab NAT ek jugaad tha, IPv6 permanent fix hai.', type: 'warn' as const },
            { head: 'IPv6 ka format', body: '2001:0db8:85a3:0000:0000:8a2e:0370:7334 — consecutive zeros ko :: se short kar sakte ho: 2001:db8::8a2e:370:7334', type: 'info' as const },
          ].map(b => (
            <InfoBox key={b.head} type={b.type} title={b.head}>{b.body}</InfoBox>
          ))}
        </div>
      </SectionBlock>

      {/* ── 3. Public vs Private ── */}
      <SectionBlock icon="🔒" title="Public vs Private IP">
        <div className="bg-surface-visual rounded-xl p-5">
          <NetworkFlowSVG />
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mt-3">
          <InfoBox type="info" title="Private IP">
            Sirf teri home/office network ke andar. ISP ko yeh nahi dikhta. 192.168.1.10 tera bhi hai, mera bhi — dono apne-apne network mein unique hain.
          </InfoBox>
          <InfoBox type="tip" title="Public IP">
            ISP assign karta hai. Poori duniya isse dekh sakti hai. Usually ek hi public IP hoti hai — NAT usse sabke saath share karata hai.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── 4. Private Ranges ── */}
      <SectionBlock icon="📊" title="Private IP Ranges">
        <div className="space-y-4">
        <div className="bg-surface-visual rounded-xl p-5">
          <PrivateRangesSVG />
        </div>
        <CodeBlock
          language="bash"
          filename="Apna IP dhundna"
          code={`# Windows
ipconfig
# → IPv4 Address: 192.168.1.10   ← private
# → Default Gateway: 192.168.1.1  ← tera router

# Mac / Linux
ip addr show   # ya: ifconfig

# Public IP
curl ifconfig.me
# → 203.0.113.45   ← ISP wala public IP`}
        />
        </div>
      </SectionBlock>

      {/* ── 5. Special Addresses ── */}
      <SectionBlock icon="⭐" title="Special IP Addresses">
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { ip: '127.0.0.1',       name: 'Loopback / localhost',        desc: 'Khud apne device se baat karna. Development mein server test karte waqt yahi use hota hai.' },
            { ip: '0.0.0.0',         name: 'All interfaces',              desc: 'Server jab yahan bind karta hai, matlab wo sabhi network cards pe sunna chahta hai.' },
            { ip: '255.255.255.255', name: 'Broadcast',                   desc: 'Local network ke sabhi devices ko ek saath message. Router ke paar nahi jaata.' },
            { ip: '169.254.x.x',     name: 'APIPA (link-local)',          desc: 'Jab DHCP fail ho jaata hai toh Windows khud assign karta hai. Yeh dikhne ka matlab: network problem.' },
          ].map(s => (
            <div key={s.ip} className="rounded-xl border border-highlight bg-surface-card p-4 space-y-1.5">
              <code className="font-code text-xs font-bold text-primary">{s.ip}</code>
              <p className="text-xs font-heading font-semibold text-content">{s.name}</p>
              <p className="text-xs text-content-muted font-body leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      {/* ── 6. Under the Hood ── */}
      <SectionBlock icon="🔬" title="Under the Hood — google.com pe request ka safar">
        <div className="space-y-4">
          <div className="bg-surface-visual rounded-xl p-5">
            <HoodFlowSVG />
          </div>

          {/* Step-by-step explanation */}
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 px-1">
            {[
              { n: '①', color: '#4F8CFF', text: 'Browser "google.com" type karta hai → DNS query jaati hai' },
              { n: '②', color: '#4F8CFF', text: 'DNS server → 142.250.195.46 IP return karta hai' },
              { n: '③', color: '#F59E0B', text: 'OS packet banata hai: src=192.168.1.10, dst=142.250.195.46' },
              { n: '④', color: '#F59E0B', text: 'Router NAT karta hai — src IP: 192.168.1.10 → 203.0.113.45' },
              { n: '⑤', color: '#34D399', text: 'Packet internet pe hop-by-hop routers se forward hota hai' },
              { n: '⑥', color: '#A78BFA', text: 'Google server public IP pe response karta hai' },
              { n: '⑦', color: '#F59E0B', text: 'Router NAT table check karta hai → 192.168.1.10 ko deliver karta hai' },
            ].map(s => (
              <div key={s.n} className="flex items-start gap-2.5">
                <span className="shrink-0 font-bold font-heading text-sm leading-[1.9]" style={{ color: s.color }}>{s.n}</span>
                <span className="text-sm font-body text-content-muted leading-[1.9]">{s.text}</span>
              </div>
            ))}
          </div>

          <CodeBlock
          language="python"
          filename="Python mein IP check"
          code={`import socket, ipaddress

# Apna hostname aur local IP
print(socket.gethostbyname(socket.gethostname()))  # 192.168.1.10

# Private check karna
def is_private(ip: str) -> bool:
    return ipaddress.ip_address(ip).is_private

is_private("192.168.1.10")  # True  — ghar ka
is_private("203.0.113.45")  # False — public`}
        />
        </div>
      </SectionBlock>

      {/* ── 7. Traps ── */}
      <SectionBlock icon="🪤" title="Interview Traps">
        <div className="space-y-4">
          <TrapBox
            number={1}
            name="IP address globally unique hota hai"
            level="B"
            question="Kya har device ka IP globally unique hota hai?"
            wrongAnswer="Haan, har device ka IP unique hota hai"
            correctAnswer="Sirf public IPs unique hain — private IPs dono ghar mein same ho sakti hain"
            why="192.168.1.10 tera bhi hai, mera bhi. NAT ki wajah se sirf public IP bahar dikhti hai, private IPs chhupe rehte hain."
          />
          <TrapBox
            number={2}
            name="localhost aur 127.0.0.1 exactly same hain"
            level="B"
            question="localhost aur 127.0.0.1 mein kya fark hai?"
            wrongAnswer="Dono bilkul same hain"
            correctAnswer="localhost ek hostname hai — DNS lookup hoti hai pehle, phir 127.0.0.1 milta hai"
            why="/etc/hosts mein localhost ka entry change kar sakte ho. IPv6 mein localhost = ::1 resolve ho sakta hai. Direct 127.0.0.1 use karna zyada predictable hai."
          />
          <TrapBox
            number={3}
            name="IPv6 ne IPv4 replace kar diya"
            level="M"
            question="Aaj kal IPv4 use hota hai ya IPv6?"
            wrongAnswer="IPv6 aa gaya toh IPv4 gone"
            correctAnswer="Dono saath chal rahe hain (dual-stack). IPv4 abhi bhi ~97% traffic handle karta hai."
            why="ISPs, routers, aur legacy apps sab update karne padte hain. Transition slow hai — isliye dual-stack deployment hoti hai."
          />
        </div>
      </SectionBlock>

      {/* ── 8. Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'IPv4',           value: '32-bit, 4 octets (0–255), dot-decimal, ~4.3B addresses' },
          { label: 'IPv6',           value: '128-bit, 8 hextets (hex), colon-notation, practically infinite' },
          { label: '192.168.x.x',    value: 'Home router private range — most common' },
          { label: '10.x.x.x',       value: 'Enterprise / AWS VPC private range' },
          { label: '172.16–31.x.x',  value: 'Docker bridge network, mid-size networks' },
          { label: '127.0.0.1',      value: 'Loopback — khud apne device ka address' },
          { label: '0.0.0.0',        value: 'All interfaces bind karna (server use case)' },
          { label: 'NAT',            value: 'Router: private IP → public IP translate karta hai' },
          { label: 'Public IP',      value: 'ISP assign karta hai — globally unique' },
          { label: 'Private IP',     value: 'Ghar ke andar — internet pe route nahi hoti' },
        ]} />
      </SectionBlock>

      {/* ── 9. Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── 10. Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{
            title: 'How Internet Works — Overview',
            description: 'Internet kaise kaam karta hai — packets, routers, ISPs',
          }}
          to={{
            title: 'DNS — Domain to IP Resolution',
            description: 'Ab IP address jaante ho — DNS sikhega kaise google.com se IP milti hai',
            href: '/roadmap/topic/how-internet-works/1',
          }}
        />
      </SectionBlock>

    </NoteLayout>
  )
}
