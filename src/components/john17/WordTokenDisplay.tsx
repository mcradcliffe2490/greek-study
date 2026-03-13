import type { WordToken } from '../../types'
import { useTooltip } from '../../hooks/useTooltip'
import { WordTooltip } from './WordTooltip'

interface Props {
  token: WordToken
}

export function WordTokenDisplay({ token }: Props) {
  const { triggerProps, tooltipStyle, isVisible, placement } = useTooltip(500)

  if (!token.annotation) {
    return <span className="text-stone-700">{token.word} </span>
  }

  return (
    <>
      <span
        {...triggerProps}
        className="text-stone-700 cursor-help border-b border-dotted border-stone-300"
      >
        {token.word}
      </span>
      {' '}
      {isVisible && (
        <WordTooltip
          annotation={token.annotation}
          style={tooltipStyle}
          placement={placement}
        />
      )}
    </>
  )
}
