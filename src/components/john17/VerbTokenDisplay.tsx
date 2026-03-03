interface Props {
  word: string
  status: 'unattempted' | 'correct' | 'incorrect'
  onClick: () => void
}

export function VerbTokenDisplay({ word, status, onClick }: Props) {
  const statusStyles = {
    unattempted: 'text-blue-700 underline decoration-blue-300 hover:bg-blue-50',
    correct: 'text-green-700 underline decoration-green-300 bg-green-50',
    incorrect: 'text-red-700 underline decoration-red-300 bg-red-50',
  }

  return (
    <button
      onClick={onClick}
      className={`greek font-medium cursor-pointer rounded px-0.5 transition-colors ${statusStyles[status]}`}
    >
      {word}
      {status === 'correct' && <span className="text-green-600 text-xs ml-0.5">{'\u2713'}</span>}
      {status === 'incorrect' && <span className="text-red-600 text-xs ml-0.5">{'\u2717'}</span>}
    </button>
  )
}
