import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AppShell } from '../../components/layout/AppShell'
import { Badge }    from '../../components/ui/Badge'
import { cn }       from '../../utils/cn'
import { parseCode } from '../../utils/parseCode'
import { phases }   from '../../data/roadmap'
import type { BadgeVariant, TopicStatus } from '../../types'

// Notes availability — computed once at module level
const _noteModules = import.meta.glob('../../notes/*/*.tsx')
function hasNoteFile(slug: string, index: number): boolean {
  return `../../notes/${slug}/${index}.tsx` in _noteModules
}

// ── Concept progress (localStorage) ──────────────────────
function useConceptProgress(slug: string, count: number) {
  const key = `cp-${slug}`

  const [done, setDone] = useState<boolean[]>(() => {
    try {
      const saved = localStorage.getItem(key)
      const parsed: unknown = saved ? JSON.parse(saved) : null
      if (Array.isArray(parsed) && parsed.length === count) return parsed as boolean[]
    } catch { /* ignore */ }
    return Array(count).fill(false)
  })

  const toggle = (i: number) => {
    setDone(prev => {
      const next = [...prev]
      next[i] = !next[i]
      localStorage.setItem(key, JSON.stringify(next))
      return next
    })
  }

  return { done, toggle, completed: done.filter(Boolean).length }
}

// ── Status maps ───────────────────────────────────────────
const statusVariant: Record<TopicStatus, BadgeVariant> = {
  'not-started': 'default',
  'in-progress': 'warning',
  'done':        'success',
}
const statusLabel: Record<TopicStatus, string> = {
  'not-started': 'Pending',
  'in-progress': 'In Progress',
  'done':        'Done',
}

// ── Helpers ───────────────────────────────────────────────
function getTopicProgress(slug: string, conceptCount: number): number {
  if (conceptCount === 0) return 0
  try {
    const data = localStorage.getItem(`cp-${slug}`)
    if (!data) return 0
    const arr: boolean[] = JSON.parse(data)
    return arr.filter(Boolean).length
  } catch { return 0 }
}

// ── Page ─────────────────────────────────────────────────
export function TopicPage() {
  const { slug } = useParams<{ slug: string }>()

  const topic = phases.flatMap(p => p.topics).find(t => t.slug === slug)
  const phase = phases.find(p => p.id === topic?.phaseId)

  const { done, toggle, completed } = useConceptProgress(
    slug ?? '',
    topic?.concepts.length ?? 0,
  )

  // Floating back button
  const [floatVisible, setFloatVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setFloatVisible(window.scrollY > 160)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!topic || !phase) {
    return (
      <AppShell>
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🔍</p>
          <p className="font-heading font-bold text-content text-lg">Topic nahi mila</p>
          <Link to="/roadmap" className="text-primary hover:underline text-sm font-body mt-2 inline-block">
            ← Roadmap pe wapas jao
          </Link>
        </div>
      </AppShell>
    )
  }

  const total   = topic.concepts.length
  const pct     = total > 0 ? Math.round((completed / total) * 100) : 0
  const allDone = completed === total

  return (
    <AppShell>
      <div className="animate-fade-in space-y-4">

        {/* Back */}
        <Link
          to="/roadmap"
          className="inline-flex items-center gap-1.5 text-sm text-content-muted hover:text-primary transition-colors font-body"
        >
          ← Roadmap
        </Link>

        {/* ── 2-column layout ─────────────────────────────── */}
        <div className="flex gap-5 items-start">

          {/* ── LEFT: main content ──────────────────────── */}
          <div className="flex-1 min-w-0 space-y-4">

            {/* Header card */}
            <div className="bg-surface-card rounded-xl border border-highlight p-5 space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-primary/20 text-primary font-body">
                  Phase {topic.phaseId}
                </span>
                <Badge variant={statusVariant[topic.status]}>
                  {statusLabel[topic.status]}
                </Badge>
              </div>

              <div>
                <h1 className="text-xl font-heading font-bold text-content">{topic.title}</h1>
                <p className="text-sm text-content-muted font-body mt-0.5">
                  {phase.name} · {phase.dateRange}
                </p>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-body">
                  <span className="text-content-muted">{completed} / {total} concepts padhe</span>
                  <span className={cn('font-semibold', allDone ? 'text-visual-2' : 'text-primary')}>
                    {allDone ? '✓ Complete!' : `${pct}%`}
                  </span>
                </div>
                <div className="h-1.5 bg-highlight rounded-full overflow-hidden">
                  <div
                    className={cn('h-full rounded-full transition-all duration-300', allDone ? 'bg-visual-2' : 'bg-primary')}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Concepts list */}
            <div className="bg-surface-card rounded-xl border border-highlight overflow-hidden">
              <div className="px-5 py-3.5 border-b border-highlight flex items-center justify-between">
                <p className="text-[12px] uppercase tracking-[0.08em] font-heading font-semibold text-content-muted">
                  Yeh sab cover hoga
                </p>
                <span className="text-xs text-content-muted font-body">{total} concepts</span>
              </div>

              <ul className="divide-y divide-highlight">
                {topic.concepts.map((concept, i) => {
                  const checked = done[i] ?? false
                  return (
                    <li
                      key={i}
                      className="flex items-center hover:bg-surface-visual transition-colors cursor-default"
                    >
                      {/* Concept index */}
                      <span className="shrink-0 w-10 text-center text-xs text-content-muted font-body select-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      {/* Concept text → opens notes page */}
                      <Link
                        to={`/roadmap/topic/${topic.slug}/${i}`}
                        className="flex-1 py-3.5 pr-3 text-sm font-body leading-[1.65] text-content hover:text-primary transition-colors flex items-center gap-2"
                      >
                        <span className="flex-1">{parseCode(concept)}</span>
                        {hasNoteFile(topic.slug, i) && (
                          <span className="shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-visual-3/10 text-visual-3 font-body">
                            📝
                          </span>
                        )}
                      </Link>

                      {/* Status toggle */}
                      <button
                        onClick={() => toggle(i)}
                        className={cn(
                          'shrink-0 mr-4 px-2.5 py-1 rounded-md text-xs font-body font-semibold transition-all',
                          checked
                            ? 'bg-visual-2/15 text-visual-2 hover:bg-visual-2/25'
                            : 'bg-highlight text-content-muted hover:bg-primary/15 hover:text-primary',
                        )}
                      >
                        {checked ? 'Done ✓' : 'Pending'}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* ── RIGHT: sticky sidebar (lg+ only) ────────── */}
          <div className="hidden lg:flex flex-col gap-4 w-64 shrink-0 sticky top-6">

            {/* Phase progress ring */}
            <div className="bg-surface-card rounded-xl border border-highlight p-4 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.08em] font-heading font-semibold text-content-muted">
                Phase {phase.id} Progress
              </p>
              {/* Mini ring SVG */}
              <div className="flex items-center gap-3">
                {(() => {
                  const pd = phase.topics.reduce((s, t) => s + getTopicProgress(t.slug, t.concepts.length), 0)
                  const pt = phase.topics.reduce((s, t) => s + t.concepts.length, 0)
                  const pp = pt > 0 ? Math.round((pd / pt) * 100) : 0
                  const r = 22; const cx = 28; const cy = 28
                  const circ = 2 * Math.PI * r
                  const dash = circ * (pp / 100)
                  return (
                    <>
                      <svg width="56" height="56" viewBox="0 0 56 56" className="shrink-0">
                        <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--highlight)" strokeWidth="5" />
                        <circle
                          cx={cx} cy={cy} r={r} fill="none"
                          stroke="var(--primary)" strokeWidth="5" strokeLinecap="round"
                          strokeDasharray={`${dash} ${circ}`}
                          transform={`rotate(-90 ${cx} ${cy})`}
                          style={{ transition: 'stroke-dasharray 0.5s ease' }}
                        />
                        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
                          fontSize="10" fontWeight="700" fill="var(--primary)" fontFamily="Poppins, sans-serif">
                          {pp}%
                        </text>
                      </svg>
                      <div>
                        <p className="text-sm font-heading font-bold text-content">{phase.name}</p>
                        <p className="text-xs text-content-muted font-body mt-0.5">{pd} / {pt} concepts</p>
                        <p className="text-xs text-content-muted font-body">{phase.dateRange}</p>
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>

            {/* Other topics in phase */}
            <div className="bg-surface-card rounded-xl border border-highlight p-4">
              <p className="text-[11px] uppercase tracking-[0.08em] font-heading font-semibold text-content-muted mb-3">
                Is Phase ke Topics
              </p>
              <ul className="space-y-1">
                {phase.topics.map(t => {
                  const isActive = t.id === topic.id
                  const td = getTopicProgress(t.slug, t.concepts.length)
                  const tt = t.concepts.length
                  const tp = tt > 0 ? Math.round((td / tt) * 100) : 0
                  return (
                    <li key={t.id}>
                      {isActive ? (
                        <div className="px-2.5 py-2 rounded-lg bg-primary/10 border border-primary/20">
                          <p className="text-xs font-body font-semibold text-primary truncate">{t.title}</p>
                          <p className="text-[10px] text-primary/70 font-body mt-0.5">{tp}% · active</p>
                        </div>
                      ) : (
                        <Link
                          to={`/roadmap/topic/${t.slug}`}
                          className="flex items-center justify-between px-2.5 py-2 rounded-lg hover:bg-highlight transition-colors group"
                        >
                          <span className="text-xs font-body text-content-muted group-hover:text-content transition-colors truncate">
                            {t.title}
                          </span>
                          {tp > 0 && (
                            <span className="text-[10px] text-primary font-semibold shrink-0 ml-1">{tp}%</span>
                          )}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Floating back button */}
      <Link
        to="/roadmap"
        aria-label="Back to Roadmap"
        style={{ opacity: floatVisible ? 1 : 0, pointerEvents: floatVisible ? 'auto' : 'none' }}
        className="fixed bottom-6 left-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-card border border-highlight shadow-lg text-sm font-body text-content-muted hover:text-primary hover:border-primary/40 transition-all duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Roadmap
      </Link>

    </AppShell>
  )
}
