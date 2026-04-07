import { type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children:  ReactNode
  padded?:   boolean
  bordered?: boolean
}

export function Card({ children, padded = true, bordered = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface-card rounded-xl',
        padded   && 'p-6',
        bordered && 'border border-[var(--highlight)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
