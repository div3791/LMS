import { Skeleton } from './Skeleton'

export function ProfileSkeleton() {
  return (
    <div className="space-y-6">
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <Skeleton className="w-20 h-20" rounded="full" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-6 w-20" rounded="full" />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-surface-card rounded-xl p-4 space-y-2">
            <Skeleton className="h-6 w-12 mx-auto" />
            <Skeleton className="h-3 w-16 mx-auto" />
          </div>
        ))}
      </div>

      {/* Content rows */}
      <div className="space-y-3">
        {[1, 2, 3, 4].map(i => (
          <Skeleton key={i} className="h-12 w-full" rounded="lg" />
        ))}
      </div>
    </div>
  )
}
