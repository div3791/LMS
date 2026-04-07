import { useState } from 'react'
import type { ReactNode } from 'react'
import { Navbar }  from './Navbar'
import { Sidebar } from './Sidebar'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    // h-screen → locks total height to viewport, prevents sidebar scroll
    <div className="h-screen flex flex-col bg-surface-main">
      <Navbar onMenuToggle={() => setMobileOpen(o => !o)} />

      {/* min-h-0 → critical: lets flex children scroll independently */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* Desktop sidebar — always visible, never scrolls with content */}
        <div className="hidden md:block shrink-0">
          <Sidebar />
        </div>

        {/* Mobile sidebar overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <div className="absolute left-0 top-0 bottom-0 w-56 animate-slide-in-l">
              <Sidebar onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        )}

        {/* Main content — only this scrolls */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
