import type { ReactNode } from 'react'

interface CompareBlockProps {
  badLabel?:  string
  goodLabel?: string
  bad:        ReactNode
  good:       ReactNode
}

export function CompareBlock({
  badLabel  = '❌ Bad',
  goodLabel = '✅ Good',
  bad,
  good,
}: CompareBlockProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-xl border border-visual-4/50 bg-visual-4/5 p-4 space-y-2">
        <p className="text-[11px] font-heading font-semibold text-visual-4 uppercase tracking-[0.08em]">
          {badLabel}
        </p>
        {bad}
      </div>
      <div className="rounded-xl border border-visual-2/50 bg-visual-2/5 p-4 space-y-2">
        <p className="text-[11px] font-heading font-semibold text-visual-2 uppercase tracking-[0.08em]">
          {goodLabel}
        </p>
        {good}
      </div>
    </div>
  )
}
