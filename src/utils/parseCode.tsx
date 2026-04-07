import type { ReactNode } from 'react'

/**
 * Scans a concept string and wraps code-like tokens
 * (dunders, decorators, *args, calls, common builtins/keywords)
 * in a styled <code> span.
 */

const CODE_RE = new RegExp(
  [
    '__\\w+__',                        // __dunder__
    '@\\w+(?:\\.\\w+)*',              // @decorator / @app.route
    '\\*{1,2}\\w+',                   // *args  **kwargs
    '\\b\\w+(?:\\.\\w+)+\\(\\)',      // module.func()  pathlib.Path()
    '\\b\\w+\\(\\)',                  // func()  sorted()
    '\\bNone\\b|\\bTrue\\b|\\bFalse\\b',
    '\\bint\\b|\\bstr\\b|\\bfloat\\b|\\bbool\\b',
    '\\blist\\b|\\bdict\\b|\\bset\\b|\\btuple\\b|\\bbytes\\b',
    '\\byield\\b|\\bglobal\\b|\\bnonlocal\\b|\\blambda\\b',
    '\\basync\\b|\\bawait\\b|\\bdef\\b|\\bclass\\b',
    '\\braise\\b|\\breturn\\b|\\bimport\\b|\\bpass\\b',
    '\\bself\\b|\\bcls\\b',
    ':=|->',
  ].join('|'),
  'g',
)

export function parseCode(text: string): ReactNode {
  const parts: ReactNode[] = []
  let last = 0
  CODE_RE.lastIndex = 0

  let m: RegExpExecArray | null
  while ((m = CODE_RE.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    parts.push(
      <code
        key={m.index}
        className="px-1 py-0.5 rounded text-[11px] bg-primary/10 text-primary font-code"
      >
        {m[0]}
      </code>,
    )
    last = m.index + m[0].length
  }

  if (last < text.length) parts.push(text.slice(last))
  return parts.length === 1 ? parts[0] : <>{parts}</>
}
