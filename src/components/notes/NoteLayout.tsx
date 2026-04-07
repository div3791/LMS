import type { ReactNode } from 'react'
import type { PhaseId } from '../../types'

interface NoteLayoutProps {
  title:     string   // kept for reference — header shown by ConceptNotePage
  phase?:    PhaseId
  subtitle?: string
  children:  ReactNode
}

// ConceptNotePage handles the back link + header card.
// NoteLayout is just a content wrapper for the sections below it.
export function NoteLayout({ children }: NoteLayoutProps) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  )
}
