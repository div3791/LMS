import { Skeleton } from './Skeleton'

interface TableSkeletonProps {
  rows?: number
  cols?: number
}

const colWidths = ['w-1/6', 'w-1/3', 'w-1/4', 'w-1/5', 'w-1/6']

export function TableSkeleton({ rows = 5, cols = 4 }: TableSkeletonProps) {
  return (
    <div className="bg-surface-card rounded-xl overflow-hidden border border-highlight">
      {/* Header */}
      <div className="flex gap-4 p-4 border-b border-highlight">
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className={`h-4 ${colWidths[i % colWidths.length]}`} />
        ))}
      </div>

      {/* Rows */}
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="flex gap-4 p-4 border-b border-highlight last:border-0"
        >
          {Array.from({ length: cols }).map((_, j) => (
            <Skeleton key={j} className={`h-3 ${colWidths[(i + j) % colWidths.length]}`} />
          ))}
        </div>
      ))}
    </div>
  )
}
