import { useState } from 'react'
import { cn } from '../../utils/cn'

// ── One Dark palette ──────────────────────────────────────
const C = {
  comment:   '#6A737D',
  string:    '#98C379',
  keyword:   '#C678DD',
  builtin:   '#56B6C2',
  number:    '#D19A66',
  decorator: '#E5C07B',
  flag:      '#61AFEF',
  plain:     '#ABB2BF',
}

// ── Python tokeniser ──────────────────────────────────────
// Groups: 1=comment, 2=string, 3=keyword, 4=builtin, 5=number, 6=decorator, 7=operator
const PY_RE = new RegExp(
  [
    '(#[^\\n]*)',
    '("""[\\s\\S]*?"""|\'\'\'[\\s\\S]*?\'\'\'|"(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')',
    '(\\b(?:def|class|return|import|from|if|elif|else|for|while|in|not|and|or|True|False|None|lambda|with|as|try|except|finally|raise|yield|async|await|pass|break|continue|global|nonlocal|is|assert)\\b)',
    '(\\b(?:print|len|str|int|float|bool|list|dict|set|tuple|type|range|enumerate|zip|map|filter|sorted|sum|min|max|open|super|input|isinstance|hasattr|getattr|ipaddress|socket)\\b)',
    '(\\b\\d+\\.?\\d*\\b)',
    '(@\\w+)',
    '(->|=>|:=|==|!=|<=|>=)',
  ].join('|'),
  'g',
)

// ── Bash tokeniser ────────────────────────────────────────
// Groups: 1=comment, 2=string, 3=keyword, 4=command, 5=flag, 6=number
const SH_RE = new RegExp(
  [
    '(#[^\\n]*)',
    '("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')',
    '(\\b(?:if|then|else|fi|for|do|done|while|in|case|esac|function|export|local|return)\\b)',
    '(\\b(?:echo|curl|wget|ping|grep|sed|awk|cat|ls|cd|mv|cp|rm|mkdir|chmod|sudo|apt|pip|npm|git|docker|ipconfig|ifconfig|ip)\\b)',
    '(-{1,2}[\\w-]+)',
    '(\\b\\d+\\b)',
  ].join('|'),
  'g',
)

function highlight(code: string, lang: string): React.ReactNode {
  const RE = lang === 'python' ? PY_RE : lang === 'bash' ? SH_RE : null
  if (!RE) return <span style={{ color: C.plain }}>{code}</span>

  const nodes: React.ReactNode[] = []
  let last = 0
  RE.lastIndex = 0

  let m: RegExpExecArray | null
  while ((m = RE.exec(code)) !== null) {
    // Plain text before this token
    if (m.index > last) {
      nodes.push(<span key={`p${last}`} style={{ color: C.plain }}>{code.slice(last, m.index)}</span>)
    }

    let color = C.plain
    if (lang === 'python') {
      if      (m[1]) color = C.comment
      else if (m[2]) color = C.string
      else if (m[3]) color = C.keyword
      else if (m[4]) color = C.builtin
      else if (m[5]) color = C.number
      else if (m[6]) color = C.decorator
      else if (m[7]) color = C.flag
    } else {
      if      (m[1]) color = C.comment
      else if (m[2]) color = C.string
      else if (m[3]) color = C.keyword
      else if (m[4]) color = C.builtin
      else if (m[5]) color = C.flag
      else if (m[6]) color = C.number
    }

    nodes.push(<span key={m.index} style={{ color }}>{m[0]}</span>)
    last = m.index + m[0].length
  }

  if (last < code.length) {
    nodes.push(<span key={`t${last}`} style={{ color: C.plain }}>{code.slice(last)}</span>)
  }

  return <>{nodes}</>
}

// ── Component ─────────────────────────────────────────────
interface CodeBlockProps {
  code:       string
  language?:  string
  filename?:  string
  className?: string
}

export function CodeBlock({ code, language = 'python', filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className={cn('rounded-xl overflow-hidden border border-highlight', className)}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-surface-visual border-b border-highlight">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-xs text-content-muted font-code ml-1">
            {filename ?? language}
          </span>
        </div>
        <button
          onClick={copy}
          className="text-xs text-content-muted hover:text-primary transition-colors font-body"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-5 bg-[#0D1117] text-sm font-code leading-[1.85]">
        <code>{highlight(code, language)}</code>
      </pre>
    </div>
  )
}
