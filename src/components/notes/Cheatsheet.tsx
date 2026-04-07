interface CheatsheetItem {
  label:  string
  value?: string
}

interface CheatsheetProps {
  title?: string
  items:  (CheatsheetItem | string)[]
}

export function Cheatsheet({ title = '📋 Cheatsheet', items }: CheatsheetProps) {
  return (
    <div className="rounded-xl border border-visual-2/50 bg-visual-2/5 p-5">
      <p className="text-[11px] uppercase tracking-[0.08em] text-visual-2 font-heading font-semibold mb-4">
        {title}
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => {
          if (typeof item === 'string') {
            return (
              <li key={i} className="text-sm text-content font-body flex gap-2">
                <span className="text-visual-2 shrink-0">→</span>
                <span>{item}</span>
              </li>
            )
          }
          return (
            <li key={i} className="text-sm flex gap-2 items-start">
              <span className="text-visual-2 shrink-0">→</span>
              <span>
                <span className="text-content font-semibold font-code">{item.label}</span>
                {item.value && (
                  <span className="text-content-muted font-body"> — {item.value}</span>
                )}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
