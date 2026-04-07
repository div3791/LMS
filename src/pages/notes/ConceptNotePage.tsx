import { lazy, Suspense, useState, useEffect, type ComponentType } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AppShell }     from '../../components/layout/AppShell'
import { NotesSkeleton } from '../../components/skeletons'
import { phases }       from '../../data/roadmap'
import { parseCode }    from '../../utils/parseCode'

// Vite glob — picks up all concept note files: src/notes/<topicSlug>/<index>.tsx
const conceptNoteModules = import.meta.glob<{ default: ComponentType }>(
  '../../notes/*/*.tsx',
)

export function ConceptNotePage() {
  const { topicSlug, conceptIndex } = useParams<{ topicSlug: string; conceptIndex: string }>()

  const topic   = phases.flatMap(p => p.topics).find(t => t.slug === topicSlug)
  const phase   = phases.find(p => p.id === topic?.phaseId)
  const idx     = Number(conceptIndex ?? '-1')
  const concept = topic?.concepts[idx]

  // Floating back button — shows after scrolling past header
  const [floatVisible, setFloatVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setFloatVisible(window.scrollY > 180)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Not found: bad slug/index ──────────────────────────
  if (!topic || concept === undefined) {
    return (
      <AppShell>
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🔍</p>
          <p className="font-heading font-bold text-content text-lg">Concept nahi mila</p>
          <Link to="/roadmap" className="text-primary hover:underline text-sm font-body mt-2 inline-block">
            ← Roadmap pe wapas jao
          </Link>
        </div>
      </AppShell>
    )
  }

  const moduleKey = `../../notes/${topicSlug}/${conceptIndex}.tsx`
  const hasNote   = moduleKey in conceptNoteModules

  return (
    <AppShell>
      <div className="space-y-5 animate-fade-in">

        {/* Back — top (visible before scroll) */}
        <Link
          to={`/roadmap/topic/${topic.slug}`}
          className="inline-flex items-center gap-1.5 text-sm text-content-muted hover:text-primary transition-colors font-body"
        >
          ← {topic.title}
        </Link>

        {/* Header card */}
        <div className="bg-surface-card rounded-xl border border-highlight p-5 space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 rounded-md text-xs font-semibold bg-primary/20 text-primary font-body">
              Phase {topic.phaseId}
            </span>
            <span className="text-xs text-content-muted font-body">{phase?.name}</span>
          </div>
          <h1 className="text-lg font-heading font-bold text-content leading-snug">
            {parseCode(concept)}
          </h1>
          <p className="text-xs text-content-muted font-body">
            {topic.title} · Concept {idx + 1} of {topic.concepts.length}
          </p>
        </div>

        {/* ── Note content OR placeholder ── */}
        {hasNote ? (
          <Suspense fallback={<NotesSkeleton />}>
            {(() => {
              const LazyNote = lazy(conceptNoteModules[moduleKey])
              return <LazyNote />
            })()}
          </Suspense>
        ) : (
          <div className="py-16 flex flex-col items-center gap-5">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" />
              <div className="relative w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-3xl">
                ✍️
              </div>
            </div>
            <div className="text-center space-y-1.5">
              <h2 className="text-lg font-heading font-bold text-content">Notes likh raha hun...</h2>
              <p className="text-sm text-content-muted font-body">
                Visuals, diagrams aur examples ke saath jald aayenge.
              </p>
            </div>
            <div className="flex gap-1.5">
              {[0, 1, 2].map(n => (
                <div
                  key={n}
                  className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-bounce"
                  style={{ animationDelay: `${n * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Floating back button — appears after scrolling past header */}
      <Link
        to={`/roadmap/topic/${topic.slug}`}
        aria-label={`Back to ${topic.title}`}
        style={{ opacity: floatVisible ? 1 : 0, pointerEvents: floatVisible ? 'auto' : 'none' }}
        className="fixed bottom-6 left-4 z-50 flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-card border border-highlight shadow-lg text-sm font-body text-content-muted hover:text-primary hover:border-primary/40 transition-all duration-200"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
          <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="max-w-[140px] truncate">{topic.title}</span>
      </Link>

    </AppShell>
  )
}
