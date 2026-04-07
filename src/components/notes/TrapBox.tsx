import type { ReactNode } from 'react'
import { Badge } from '../ui/Badge'
import type { NoteLevel, BadgeVariant } from '../../types'

interface TrapBoxProps {
  number:        number
  name:          string
  level:         NoteLevel
  question:      string
  code?:         ReactNode
  wrongAnswer:   string
  correctAnswer: string
  why:           string
  fix?:          ReactNode
}

const levelLabel: Record<NoteLevel, string> = {
  B: 'Beginner',
  M: 'Mid',
  S: 'Senior',
}

const levelVariant: Record<NoteLevel, BadgeVariant> = {
  B: 'success',
  M: 'warning',
  S: 'error',
}

export function TrapBox({
  number, name, level, question, code, wrongAnswer, correctAnswer, why, fix,
}: TrapBoxProps) {
  return (
    <div className="rounded-xl border border-visual-4/50 bg-visual-4/5 p-5 space-y-4 animate-pop-in">
      {/* Header */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-visual-4 font-heading font-bold">🪤 TRAP {number}</span>
        <span className="font-heading font-semibold text-content text-sm">{name}</span>
        <Badge variant={levelVariant[level]}>{levelLabel[level]}</Badge>
      </div>

      <p className="text-sm text-content-muted font-body">{question}</p>

      {code}

      {/* Wrong vs Correct */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="rounded-lg bg-visual-4/10 border border-visual-4/30 p-3">
          <p className="text-xs text-visual-4 font-heading font-semibold mb-1">❌ Log sochte hain</p>
          <p className="text-sm text-content font-code">{wrongAnswer}</p>
        </div>
        <div className="rounded-lg bg-visual-2/10 border border-visual-2/30 p-3">
          <p className="text-xs text-visual-2 font-heading font-semibold mb-1">✅ Actually</p>
          <p className="text-sm text-content font-code">{correctAnswer}</p>
        </div>
      </div>

      {/* Why */}
      <div>
        <p className="text-xs text-content-muted font-heading font-semibold mb-1">🔍 Kyun</p>
        <p className="text-sm text-content font-body leading-note">{why}</p>
      </div>

      {/* Fix */}
      {fix && (
        <div>
          <p className="text-xs text-content-muted font-heading font-semibold mb-2">🔧 Fix</p>
          {fix}
        </div>
      )}
    </div>
  )
}
