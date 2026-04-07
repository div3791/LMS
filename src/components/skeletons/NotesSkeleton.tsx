import { Skeleton } from './Skeleton'

export function NotesSkeleton() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 space-y-8">
      {/* Title */}
      <div className="space-y-3">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>

      {/* Section blocks */}
      {[1, 2, 3].map(i => (
        <div key={i} className="bg-surface-card rounded-xl p-6 space-y-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-48 w-full" rounded="lg" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      ))}

      {/* Code block */}
      <Skeleton className="h-40 w-full" rounded="lg" />

      {/* Cheatsheet */}
      <div className="space-y-3">
        <Skeleton className="h-4 w-1/5" />
        {[1, 2, 3, 4].map(i => (
          <Skeleton key={i} className="h-3 w-full" />
        ))}
      </div>
    </div>
  )
}
