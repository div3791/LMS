import { Link } from 'react-router-dom'
import { AppShell } from '../../components/layout/AppShell'
import { phases }   from '../../data/roadmap'

// Compute notes availability at module level (Vite static analysis)
const _noteModules = import.meta.glob('../../notes/*/*.tsx')
function notesCountForSlug(slug: string, conceptCount: number): number {
  let n = 0
  for (let i = 0; i < conceptCount; i++) {
    if (`../../notes/${slug}/${i}.tsx` in _noteModules) n++
  }
  return n
}

// Read concept progress from localStorage (sync, safe)
function getTopicProgress(slug: string, conceptCount: number): number {
  if (conceptCount === 0) return 0
  try {
    const data = localStorage.getItem(`cp-${slug}`)
    if (!data) return 0
    const arr: boolean[] = JSON.parse(data)
    return arr.filter(Boolean).length
  } catch { return 0 }
}

// Circular ring SVG
function RingProgress({ pct }: { pct: number }) {
  const r  = 30
  const cx = 38
  const cy = 38
  const circ = 2 * Math.PI * r
  const dash = circ * (pct / 100)

  return (
    <svg width="76" height="76" viewBox="0 0 76 76" className="shrink-0">
      {/* Track */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--highlight)" strokeWidth="7" />
      {/* Fill */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        transform={`rotate(-90 ${cx} ${cy})`}
        style={{ transition: 'stroke-dasharray 0.7s ease' }}
      />
      {/* Label */}
      <text
        x={cx} y={cy}
        textAnchor="middle" dominantBaseline="middle"
        fontSize="13" fontWeight="700"
        fill="var(--primary)" fontFamily="Poppins, sans-serif"
      >
        {pct}%
      </text>
    </svg>
  )
}

export function RoadmapPage() {
  // ── Total progress ────────────────────────────────────────
  const allTopics     = phases.flatMap(p => p.topics)
  const totalConcepts = allTopics.reduce((s, t) => s + t.concepts.length, 0)
  const totalDone     = allTopics.reduce(
    (s, t) => s + getTopicProgress(t.slug, t.concepts.length), 0,
  )
  const totalPct      = totalConcepts > 0 ? Math.round((totalDone / totalConcepts) * 100) : 0
  const phasesStarted = phases.filter(p =>
    p.topics.some(t => getTopicProgress(t.slug, t.concepts.length) > 0),
  ).length
  const totalNotes = allTopics.reduce((s, t) => s + notesCountForSlug(t.slug, t.concepts.length), 0)

  return (
    <AppShell>
      <div className="space-y-4 animate-fade-in">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-heading font-bold text-content">Roadmap</h1>
          <p className="text-content-muted font-body mt-1 text-sm">
            18 Mar 2026 → 1 Mar 2027 · ~950 hrs · 50 weeks ·{' '}
            <span className="text-primary">Topic pe click karo → concepts dekhne ke liye</span>
          </p>
        </div>

        {/* ── Total Progress Card ────────────────────────────── */}
        <div className="bg-surface-card rounded-xl border border-highlight p-5 space-y-4">
          {/* Top row: ring + stats */}
          <div className="flex items-center gap-5">
            <RingProgress pct={totalPct} />

            <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-3">
              <div>
                <p className="text-xl font-heading font-bold text-content leading-tight">
                  {totalDone}
                  <span className="text-sm text-content-muted font-body font-normal"> / {totalConcepts}</span>
                </p>
                <p className="text-xs text-content-muted font-body mt-0.5">concepts done</p>
              </div>
              <div>
                <p className="text-xl font-heading font-bold text-content leading-tight">
                  {phasesStarted}
                  <span className="text-sm text-content-muted font-body font-normal"> / {phases.length}</span>
                </p>
                <p className="text-xs text-content-muted font-body mt-0.5">phases started</p>
              </div>
              <div>
                <p className="text-xl font-heading font-bold text-content leading-tight">
                  {totalNotes}
                  <span className="text-sm text-content-muted font-body font-normal"> notes</span>
                </p>
                <p className="text-xs text-content-muted font-body mt-0.5">available</p>
              </div>
              <div className="col-span-2">
                <div className="h-1.5 bg-highlight rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-700"
                    style={{ width: `${totalPct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Phase mini bars */}
          <div className="flex flex-wrap gap-2">
            {phases.map(phase => {
              const pd = phase.topics.reduce((s, t) => s + getTopicProgress(t.slug, t.concepts.length), 0)
              const pt = phase.topics.reduce((s, t) => s + t.concepts.length, 0)
              const pp = pt > 0 ? Math.round((pd / pt) * 100) : 0
              return (
                <div key={phase.id} className="flex flex-col items-center gap-1 w-10">
                  <div className="w-full h-1.5 bg-highlight rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${pp}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-content-muted font-body">{phase.id}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Phases */}
        {phases.map(phase => {
          // Phase-level progress
          const phaseTopics     = phase.topics
          const phaseDone       = phaseTopics.reduce(
            (sum, t) => sum + getTopicProgress(t.slug, t.concepts.length), 0,
          )
          const phaseTotal      = phaseTopics.reduce((sum, t) => sum + t.concepts.length, 0)
          const phasePct        = phaseTotal > 0 ? Math.round((phaseDone / phaseTotal) * 100) : 0
          const phaseNotes      = phaseTopics.reduce((s, t) => s + notesCountForSlug(t.slug, t.concepts.length), 0)

          return (
            <div key={phase.id} className="bg-surface-card rounded-xl border border-highlight overflow-hidden">

              {/* Phase header — name · progress bar · date range in one row */}
              <div className="px-5 py-3.5 border-b border-highlight flex items-center gap-3">
                {/* Left: badge + name */}
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-primary/20 text-primary font-body">
                    Phase {phase.id}
                  </span>
                  <h2 className="font-heading font-bold text-content text-sm md:text-base">{phase.name}</h2>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Middle: fixed-width progress bar — hidden on small screens */}
                <div className="hidden sm:flex items-center gap-2 shrink-0">
                  <div className="w-28 md:w-36 h-2 bg-highlight rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${phasePct}%` }}
                    />
                  </div>
                </div>

                {/* Right: notes · date · hrs · % */}
                <div className="flex items-center gap-2 shrink-0 text-xs font-body text-content-muted">
                  {phaseNotes > 0 && (
                    <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-visual-3/10 text-visual-3 font-semibold">
                      📝 {phaseNotes}
                    </span>
                  )}
                  <span className="hidden md:inline">{phase.dateRange} ·</span>
                  <span className="hidden sm:inline">{phase.hours} hrs ·</span>
                  <span className="font-semibold text-primary">{phasePct}%</span>
                </div>
              </div>

              {/* Topics grid */}
              <div className="p-3 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {phase.topics.map(topic => {
                  const done      = getTopicProgress(topic.slug, topic.concepts.length)
                  const total     = topic.concepts.length
                  const pct       = total > 0 ? Math.round((done / total) * 100) : 0
                  const allDone   = done === total && total > 0
                  const noteCount = notesCountForSlug(topic.slug, total)

                  return (
                    <Link
                      key={topic.id}
                      to={`/roadmap/topic/${topic.slug}`}
                      className="flex flex-col gap-1.5 px-3 py-2.5 rounded-lg bg-surface-main hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                    >
                      {/* Title + right indicator */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-body text-content group-hover:text-primary transition-colors truncate">
                          {topic.title}
                        </span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {done > 0 && !allDone && (
                            <span className="text-xs text-primary font-semibold font-body">{pct}%</span>
                          )}
                          {allDone ? (
                            <span className="text-visual-2 text-xs font-semibold">✓</span>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-content-muted group-hover:text-primary transition-colors shrink-0">
                              <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                      </div>
                      {/* Notes badge */}
                      {noteCount > 0 && (
                        <span className="self-start flex items-center gap-1 text-[10px] font-body font-semibold px-1.5 py-0.5 rounded bg-visual-3/10 text-visual-3">
                          📝 {noteCount} note{noteCount > 1 ? 's' : ''}
                        </span>
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Project */}
              {phase.project && (
                <div className="px-5 py-3 bg-surface-visual border-t border-highlight">
                  <p className="text-[11px] uppercase tracking-[0.08em] text-visual-3 font-heading font-semibold mb-0.5">
                    🏭 Project
                  </p>
                  <p className="text-sm font-heading font-semibold text-content">{phase.project.title}</p>
                  <p className="text-xs text-content-muted font-body">
                    {phase.project.description} · {phase.project.hours} hrs
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </AppShell>
  )
}
