import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import type { InfoBoxType } from '../../types'

interface InfoBoxProps {
  type?:    InfoBoxType
  title?:   string
  children: ReactNode
}

const config: Record<InfoBoxType, { border: string; bg: string; text: string; icon: string }> = {
  tip:  { border: 'border-visual-2', bg: 'bg-visual-2/5', text: 'text-visual-2', icon: '💡' },
  warn: { border: 'border-accent',   bg: 'bg-accent/5',   text: 'text-accent',   icon: '⚠️' },
  err:  { border: 'border-visual-4', bg: 'bg-visual-4/5', text: 'text-visual-4', icon: '❌' },
  info: { border: 'border-primary',  bg: 'bg-primary/5',  text: 'text-primary',  icon: 'ℹ️' },
}

export function InfoBox({ type = 'info', title, children }: InfoBoxProps) {
  const c = config[type]
  return (
    <div className={cn('rounded-xl border-l-4 p-4 space-y-1.5', c.border, c.bg)}>
      <p className={cn('text-[11px] font-heading font-semibold uppercase tracking-[0.08em]', c.text)}>
        {c.icon} {title ?? type.toUpperCase()}
      </p>
      <div className="text-sm text-content font-body leading-note">{children}</div>
    </div>
  )
}
