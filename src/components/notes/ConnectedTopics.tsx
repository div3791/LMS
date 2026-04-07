interface Connection {
  title:       string
  description: string
  href?:       string
}

interface ConnectedTopicsProps {
  from?: Connection
  to?:   Connection
}

export function ConnectedTopics({ from, to }: ConnectedTopicsProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {from && (
        <div className="rounded-xl bg-surface-card border border-highlight p-4">
          <p className="text-[11px] uppercase tracking-[0.08em] text-content-muted font-heading font-semibold mb-2">
            ← Aaya kahan se
          </p>
          <p className="font-heading font-semibold text-content text-sm">{from.title}</p>
          <p className="text-content-muted text-xs font-body mt-1">{from.description}</p>
          {from.href && (
            <a href={from.href} className="text-xs text-primary hover:underline mt-2 inline-block font-body">
              Notes padho →
            </a>
          )}
        </div>
      )}
      {to && (
        <div className="rounded-xl bg-surface-card border border-primary/30 p-4">
          <p className="text-[11px] uppercase tracking-[0.08em] text-primary font-heading font-semibold mb-2">
            → Jaayega kahan
          </p>
          <p className="font-heading font-semibold text-content text-sm">{to.title}</p>
          <p className="text-content-muted text-xs font-body mt-1">{to.description}</p>
          {to.href && (
            <a href={to.href} className="text-xs text-primary hover:underline mt-2 inline-block font-body">
              Notes padho →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
