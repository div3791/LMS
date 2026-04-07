import { cn } from '../../utils/cn'

interface AvatarProps {
  src?:       string
  name?:      string
  size?:      'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-8  h-8  text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-lg',
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function Avatar({ src, name, size = 'md', className }: AvatarProps) {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center',
        'font-heading font-bold shrink-0 overflow-hidden',
        'bg-primary/20 text-primary',
        sizeClasses[size],
        className,
      )}
    >
      {src ? (
        <img src={src} alt={name ?? 'avatar'} className="w-full h-full object-cover" />
      ) : (
        <span>{name ? getInitials(name) : '?'}</span>
      )}
    </div>
  )
}
