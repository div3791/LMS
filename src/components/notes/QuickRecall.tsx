import type { ReactNode } from 'react'

interface QuickRecallProps {
  title?:   string
  children: ReactNode  // Should be an SVG diagram
}

export function QuickRecall({ title = '⚡ Quick Recall', children }: QuickRecallProps) {
  return (
    <div className="rounded-xl border-2 border-accent bg-accent/5 p-5">
      <p className="text-[11px] uppercase tracking-[0.08em] text-accent font-heading font-semibold mb-4 text-center">
        {title}
      </p>
      <div className="flex items-center justify-center overflow-x-auto">
        {children}
      </div>
    </div>
  )
}
