import { Link } from 'react-router-dom'
import { useThemeContext } from '../../context/ThemeContext'
import { Avatar } from '../ui/Avatar'

interface NavbarProps {
  onMenuToggle?: () => void
}

export function Navbar({ onMenuToggle }: NavbarProps) {
  const { theme, toggle } = useThemeContext()

  return (
    <header className="h-14 shrink-0 bg-surface-card border-b border-highlight flex items-center px-4 gap-3 z-30">

      {/* Hamburger — mobile only */}
      {onMenuToggle && (
        <button
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg text-content-muted hover:bg-highlight transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
            <rect y="2"  width="18" height="2" rx="1"/>
            <rect y="8"  width="18" height="2" rx="1"/>
            <rect y="14" width="18" height="2" rx="1"/>
          </svg>
        </button>
      )}

      <Link to="/dashboard" className="font-heading font-bold text-primary text-lg tracking-tight">
        LMS
      </Link>

      <div className="flex-1" />

      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="p-2 rounded-lg text-content-muted hover:bg-highlight transition-colors text-sm"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <Avatar name="Divyesh" size="sm" />
    </header>
  )
}
