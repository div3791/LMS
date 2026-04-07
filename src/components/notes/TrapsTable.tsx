import { Badge } from '../ui/Badge'
import type { NoteLevel, BadgeVariant } from '../../types'

export interface TrapRow {
  level:   NoteLevel
  mistake: string
  kyun:    string
  fix:     string
}

interface TrapsTableProps {
  rows: TrapRow[]
}

const levelVariant: Record<NoteLevel, BadgeVariant> = {
  B: 'success',
  M: 'warning',
  S: 'error',
}

export function TrapsTable({ rows }: TrapsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-highlight">
      <table className="w-full text-sm font-body min-w-[500px]">
        <thead>
          <tr className="bg-surface-visual border-b border-highlight">
            {['Level', 'Mistake', 'Kyun', 'Fix'].map(h => (
              <th
                key={h}
                className="text-left px-4 py-3 text-[11px] uppercase tracking-[0.08em] text-content-muted font-heading font-semibold"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-highlight last:border-0 hover:bg-surface-visual transition-colors">
              <td className="px-4 py-3">
                <Badge variant={levelVariant[row.level]}>{row.level}</Badge>
              </td>
              <td className="px-4 py-3 text-content">{row.mistake}</td>
              <td className="px-4 py-3 text-content-muted">{row.kyun}</td>
              <td className="px-4 py-3 text-visual-2 font-code text-xs">{row.fix}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
