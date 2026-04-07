import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface SectionBlockProps {
  icon?:      string
  title:      string
  children:   ReactNode
  className?: string
}

export function SectionBlock({ icon, title, children, className }: SectionBlockProps) {
  return (
    <section className={cn('animate-fade-in', className)}>
      <div className="flex items-center gap-2 mb-4">
        {icon && <span className="text-xl leading-none">{icon}</span>}
        <h2 className="text-[13px] uppercase tracking-[0.08em] font-heading font-semibold text-content-muted">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
