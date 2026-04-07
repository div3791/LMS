import { lazy, Suspense, type ComponentType } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AppShell }    from '../../components/layout/AppShell'
import { NotesSkeleton } from '../../components/skeletons'
import { phases }      from '../../data/roadmap'

// Vite glob — picks up all note files automatically as they're added
const noteModules = import.meta.glob<{ default: ComponentType }>(
  '../../notes/*.tsx',
)

export function NotePage() {
  const { slug } = useParams<{ slug: string }>()

  const topic = phases.flatMap(p => p.topics).find(t => t.slug === slug)
  const moduleKey = `../../notes/${slug}.tsx`
  const hasNote   = moduleKey in noteModules

  // ── Note exists → render it ──────────────────────────────
  if (hasNote) {
    const LazyNote = lazy(noteModules[moduleKey])
    return (
      <Suspense fallback={<NotesSkeleton />}>
        <LazyNote />
      </Suspense>
    )
  }

  // ── Note not written yet → placeholder ──────────────────
  return (
    <AppShell>
      <div className="max-w-2xl space-y-5 animate-fade-in">

        <Link
          to={topic ? `/roadmap/topic/${topic.slug}` : '/roadmap'}
          className="inline-flex items-center gap-1.5 text-sm text-content-muted hover:text-primary transition-colors font-body"
        >
          ← {topic ? topic.title : 'Roadmap'}
        </Link>

        <div className="bg-surface-card rounded-xl border border-highlight p-8 text-center space-y-4">
          <p className="text-5xl">📝</p>
          <h1 className="text-xl font-heading font-bold text-content">
            {topic?.title ?? slug} — Notes
          </h1>
          <p className="text-content-muted font-body text-sm">
            Yeh notes abhi likhi nahi gayi hain.
          </p>
          {topic && (
            <Link
              to={`/roadmap/topic/${topic.slug}`}
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-body font-semibold"
            >
              Concepts list dekhne ke liye wapas jao →
            </Link>
          )}
        </div>

      </div>
    </AppShell>
  )
}
