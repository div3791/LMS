interface Step {
  title:        string
  description?: string
}

interface StepsBlockProps {
  steps: Step[]
}

export function StepsBlock({ steps }: StepsBlockProps) {
  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4">
          {/* Number + connector line */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-heading font-bold flex items-center justify-center shrink-0">
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 flex-1 bg-highlight my-1 min-h-[20px]" />
            )}
          </div>

          {/* Content */}
          <div className="pb-5 pt-1 min-w-0">
            <p className="font-heading font-semibold text-content text-sm">{step.title}</p>
            {step.description && (
              <p className="text-content-muted text-sm font-body mt-1 leading-note">
                {step.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
