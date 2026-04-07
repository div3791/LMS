import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface NavItem {
  label: string
  icon:  string
  to:    string
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: '🏠', to: '/dashboard' },
  { label: 'Roadmap',   icon: '🗺️', to: '/roadmap'   },
  { label: 'Structure', icon: '🗂️', to: '/structure'  },
  { label: 'Settings',  icon: '⚙️', to: '/settings'  },
]

interface SidebarProps {
  onNavigate?: () => void
}

export function Sidebar({ onNavigate }: SidebarProps) {
  const { pathname } = useLocation()

  return (
    <aside className="w-56 h-full bg-surface-card border-r border-highlight flex flex-col">
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map(item => {
          const active = pathname.startsWith(item.to)
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-body transition-colors',
                active
                  ? 'bg-primary/15 text-primary font-semibold'
                  : 'text-content-muted hover:bg-highlight hover:text-content',
              )}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
