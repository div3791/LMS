import { useNavigate } from 'react-router-dom'
import { AppShell } from '../../components/layout/AppShell'
import { phases } from '../../data/roadmap'

// ── Tree line characters ─────────────────────────────────────────────────────
//  ├─  for items that have a sibling below
//  └─  for the last item in a group
//  │   for vertical continuation line

function TreePhase({ phase, isLast }: { phase: typeof phases[0]; isLast: boolean }) {
  return (
    <div>
      {/* Phase row */}
      <div className="flex items-center gap-2 py-1.5">
        <span className="font-code text-content-muted text-xs select-none">
          {isLast ? '└─' : '├─'}
        </span>
        <span className="flex items-center gap-2">
          <span className="text-xs">📁</span>
          <span className="font-heading font-bold text-sm text-primary">
            Phase {phase.id}
          </span>
          <span className="font-body text-sm text-content">
            {phase.name}
          </span>
          <span className="text-[10px] font-code text-content-muted">
            {phase.hours}h · {phase.dateRange}
          </span>
        </span>
      </div>

      {/* Topics under this phase */}
      <div>
        {phase.topics.map((topic, ti) => {
          const isLastTopic = ti === phase.topics.length - 1
          const phasePrefix = isLast ? '   ' : '│  '

          return (
            <TreeTopic
              key={topic.slug}
              topic={topic}
              isLast={isLastTopic}
              phasePrefix={phasePrefix}
            />
          )
        })}
      </div>
    </div>
  )
}

function TreeTopic({
  topic,
  isLast,
  phasePrefix,
}: {
  topic: typeof phases[0]['topics'][0]
  isLast: boolean
  phasePrefix: string
}) {
  return (
    <div>
      {/* Topic row */}
      <div className="flex items-center gap-2 py-1.5">
        <span className="font-code text-content-muted text-xs select-none whitespace-pre">
          {phasePrefix}{isLast ? '└─' : '├─'}
        </span>
        <span className="flex items-center gap-2">
          <span className="text-xs">📂</span>
          <span className="font-heading font-semibold text-sm text-content">
            {topic.title}
          </span>
          <span className="text-[10px] font-code text-content-muted">
            {topic.concepts.length} concepts
          </span>
        </span>
      </div>

      {/* Concepts under this topic */}
      <div>
        {topic.concepts.map((concept, ci) => {
          const isLastConcept = ci === topic.concepts.length - 1
          const topicPrefix = phasePrefix + (isLast ? '   ' : '│  ')

          return (
            <TreeConcept
              key={ci}
              concept={concept}
              index={ci}
              topicSlug={topic.slug}
              isLast={isLastConcept}
              topicPrefix={topicPrefix}
            />
          )
        })}
      </div>
    </div>
  )
}

function TreeConcept({
  concept,
  index,
  topicSlug,
  isLast,
  topicPrefix,
}: {
  concept: string
  index: number
  topicSlug: string
  isLast: boolean
  topicPrefix: string
}) {
  const navigate = useNavigate()

  return (
    <div className="flex items-start gap-2 py-1">
      <span className="font-code text-content-muted text-xs select-none whitespace-pre shrink-0">
        {topicPrefix}{isLast ? '└─' : '├─'}
      </span>
      <span className="text-xs shrink-0 mt-px">📄</span>
      <span
        role="button"
        tabIndex={0}
        onClick={() => navigate(`/roadmap/topic/${topicSlug}/${index}`)}
        onKeyDown={e => e.key === 'Enter' && navigate(`/roadmap/topic/${topicSlug}/${index}`)}
        className="font-body text-xs text-content-muted hover:text-primary hover:underline underline-offset-2 transition-colors leading-relaxed cursor-pointer"
      >
        {concept}
      </span>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────────────────────
export function StructurePage() {
  const totalTopics   = phases.flatMap(p => p.topics).length
  const totalConcepts = phases.flatMap(p => p.topics).flatMap(t => t.concepts).length

  return (
    <AppShell>
      <div className="space-y-6 animate-fade-in">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-heading font-bold text-content">
            Roadmap Structure 🗂️
          </h1>
          <p className="text-content-muted font-body mt-1 text-sm">
            {phases.length} phases · {totalTopics} topics · {totalConcepts} concepts —
            click any concept to open its notes
          </p>
        </div>

        {/* Tree */}
        <div className="bg-surface-card rounded-xl border border-highlight p-5 overflow-x-auto">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-highlight">
            <span className="text-base">🌳</span>
            <span className="font-heading font-bold text-sm text-content">
              ML Engineer Roadmap
            </span>
          </div>

          <div className="min-w-0">
            {phases.map((phase, pi) => (
              <TreePhase
                key={phase.id}
                phase={phase}
                isLast={pi === phases.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  )
}
