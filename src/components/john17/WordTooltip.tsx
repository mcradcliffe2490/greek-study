import { createPortal } from 'react-dom'
import type { CSSProperties } from 'react'
import type { WordAnnotation } from '../../types'

interface Props {
  annotation: WordAnnotation
  style: CSSProperties
  placement: 'above' | 'below'
}

export function WordTooltip({ annotation, style, placement }: Props) {
  const caret = placement === 'above'
    ? 'after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:border-[6px] after:border-transparent after:border-t-stone-800'
    : 'before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-full before:border-[6px] before:border-transparent before:border-b-stone-800'

  return createPortal(
    <div
      style={style}
      className={`bg-stone-800 text-stone-100 rounded-lg shadow-lg px-3 py-2 text-sm max-w-xs pointer-events-none relative ${caret}`}
    >
      <div className="greek font-semibold text-stone-200">{annotation.lexicalForm}</div>
      <div className="italic text-stone-300">&ldquo;{annotation.gloss}&rdquo;</div>
      <div className="text-xs text-stone-400 mt-1">{annotation.grammar}</div>
      {annotation.role && (
        <div className="text-xs text-blue-300 mt-0.5">{annotation.role}</div>
      )}
      {annotation.note && (
        <div className="text-xs text-amber-300 mt-0.5">{annotation.note}</div>
      )}
    </div>,
    document.body
  )
}
