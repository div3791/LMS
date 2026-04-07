import { type InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?:  string
  error?:  string
  helper?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helper, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold font-body text-content"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-3 py-2.5 rounded-lg text-sm font-body',
            'bg-surface-card text-content border',
            'placeholder:text-content-muted',
            'focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent',
            'transition-all duration-150',
            error
              ? 'border-visual-4 focus:ring-visual-4'
              : 'border-[var(--highlight)] hover:border-[var(--primary)]',
            className,
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-visual-4 font-body">{error}</p>
        )}
        {helper && !error && (
          <p className="text-xs text-content-muted font-body">{helper}</p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
