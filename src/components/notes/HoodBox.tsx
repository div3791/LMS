import type { ReactNode } from 'react'

interface HoodBoxProps {
  children: ReactNode
  title?:   string
}

export function HoodBox({ children, title = '🔬 Under the Hood' }: HoodBoxProps) {
  return (
    <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5 space-y-3">
      <p className="text-[11px] uppercase tracking-[0.08em] text-primary font-heading font-semibold">
        {title}
      </p>
      <div className="space-y-3 text-sm text-content font-body leading-note">
        {children}
      </div>
    </div>
  )
}
