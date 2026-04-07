import { AppShell } from '../../components/layout/AppShell'
import { Card }     from '../../components/ui/Card'
import { Badge }    from '../../components/ui/Badge'
import { phases, totalHours, usedHours } from '../../data/roadmap'

export function DashboardPage() {
  const currentPhase = phases.find(p => p.id === '0B')
  const completedTopics = phases.flatMap(p => p.topics).filter(t => t.status === 'done').length
  const totalTopics     = phases.flatMap(p => p.topics).length

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in">
        {/* Welcome */}
        <div>
          <h1 className="text-2xl font-heading font-bold text-content">
            Kya haal hai, Divyesh! 👋
          </h1>
          <p className="text-content-muted font-body mt-1">
            18 Mar 2026 → 1 Mar 2027 · Goal: ML Engineer + System Design
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Hours', value: totalHours, unit: 'hrs', variant: 'info' as const },
            { label: 'Used Hours',  value: usedHours,  unit: 'hrs', variant: 'warning' as const },
            { label: 'Topics',      value: `${completedTopics}/${totalTopics}`, unit: '', variant: 'success' as const },
            { label: 'Phases',      value: phases.length, unit: 'total', variant: 'default' as const },
          ].map(stat => (
            <Card key={stat.label} bordered className="text-center">
              <p className="text-2xl font-heading font-bold text-content">
                {stat.value}<span className="text-sm text-content-muted ml-1">{stat.unit}</span>
              </p>
              <Badge variant={stat.variant} className="mt-2">{stat.label}</Badge>
            </Card>
          ))}
        </div>

        {/* Current Phase */}
        {currentPhase && (
          <Card bordered>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] text-content-muted font-heading font-semibold mb-1">
                  Current Phase
                </p>
                <h2 className="text-lg font-heading font-bold text-content">
                  Phase {currentPhase.id} — {currentPhase.name}
                </h2>
                <p className="text-content-muted text-sm font-body mt-1">{currentPhase.dateRange}</p>
              </div>
              <Badge variant="info">{currentPhase.hours} hrs</Badge>
            </div>

            <div className="mt-4 grid sm:grid-cols-2 gap-2">
              {currentPhase.topics.map(topic => (
                <div
                  key={topic.id}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-main text-sm font-body text-content-muted"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight shrink-0" />
                  {topic.title}
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </AppShell>
  )
}
