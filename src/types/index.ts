// ── Roadmap ───────────────────────────────────────────────

export type PhaseId = '0A' | '0B' | '0C' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'

export type TopicStatus = 'not-started' | 'in-progress' | 'done'

export interface Topic {
  id: string           // e.g. "t-0a-1"
  slug: string
  title: string
  phaseId: PhaseId
  status: TopicStatus
  hasNotes: boolean
  concepts: string[]   // what the student will learn
}

/** Stable concept ID for backend use: "<topicSlug>-c<zero-padded-index>" */
export function conceptId(topicSlug: string, index: number): string {
  return `${topicSlug}-c${String(index).padStart(2, '0')}`
}

export interface Project {
  title: string
  description: string
  hours: number
}

export interface Phase {
  id: PhaseId
  name: string
  duration: string
  hours: number
  dateRange: string
  topics: Topic[]
  project?: Project
}

// ── Auth ─────────────────────────────────────────────────

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

// ── UI Primitives ─────────────────────────────────────────

export type Theme = 'dark' | 'light'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize    = 'sm' | 'md' | 'lg'

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info'

export type InfoBoxType = 'tip' | 'warn' | 'err' | 'info'

export type NoteLevel = 'B' | 'M' | 'S'  // Beginner / Mid / Senior
