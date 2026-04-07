import { AppShell } from '../../components/layout/AppShell'
import { phases }   from '../../data/roadmap'

export function NotesPage() {
  const topicsWithNotes = phases.flatMap(p => p.topics).filter(t => t.hasNotes)

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-heading font-bold text-content">Notes</h1>
          <p className="text-content-muted font-body mt-1">
            {topicsWithNotes.length} topics covered so far
          </p>
        </div>

        {topicsWithNotes.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-4">📝</p>
            <p className="font-heading font-bold text-content text-lg">Abhi koi notes nahi hain</p>
            <p className="text-content-muted font-body text-sm mt-2">
              Pehla topic complete karo — notes yahan dikhenge.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {topicsWithNotes.map(topic => (
              <a
                key={topic.id}
                href={`/notes/${topic.slug}`}
                className="block bg-surface-card rounded-xl p-4 border border-highlight hover:border-primary/50 transition-colors"
              >
                <span className="text-[11px] uppercase tracking-[0.08em] text-primary font-heading font-semibold">
                  Phase {topic.phaseId}
                </span>
                <p className="font-heading font-semibold text-content mt-1">{topic.title}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  )
}
