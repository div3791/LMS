import type { ReactNode } from 'react'

interface MentalModelProps {
  analogy:       ReactNode
  analogyTitle?: string
  diagram:       ReactNode
}

export function MentalModel({
  analogy,
  analogyTitle = '🧠 Mental Model',
  diagram,
}: MentalModelProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4 animate-fade-in">
      {/* Analogy card */}
      <div className="bg-surface-card rounded-xl p-5 border-l-4 border-primary">
        <p className="text-[11px] uppercase tracking-[0.08em] text-primary font-heading font-semibold mb-3">
          {analogyTitle}
        </p>
        <p className="text-content font-body leading-note text-sm">{analogy}</p>
      </div>

      {/* Diagram area */}
      <div className="bg-surface-visual rounded-xl p-4 flex items-center justify-center min-h-[200px]">
        {diagram}
      </div>
    </div>
  )
}
