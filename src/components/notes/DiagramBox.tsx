import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface DiagramBoxProps {
  label?:     string
  children:   ReactNode
  className?: string
}

export function DiagramBox({ label, children, className }: DiagramBoxProps) {
  return (
    <div className={cn('bg-surface-visual rounded-xl p-4', className)}>
      {label && (
        <p className="text-[11px] uppercase tracking-[0.08em] text-content-muted font-heading font-semibold mb-3 text-center">
          {label}
        </p>
      )}
      <div className="flex items-center justify-center overflow-x-auto">
        {children}
      </div>
    </div>
  )
}
