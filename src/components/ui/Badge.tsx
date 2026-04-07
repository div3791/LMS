import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import type { BadgeVariant } from '../../types'

interface BadgeProps {
  variant?:  BadgeVariant
  children:  ReactNode
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-highlight text-content',
  success: 'bg-visual-2/20 text-visual-2',
  warning: 'bg-accent/20 text-accent',
  error:   'bg-visual-4/20 text-visual-4',
  info:    'bg-primary/20 text-primary',
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-md',
        'text-xs font-semibold font-body tracking-wide',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
