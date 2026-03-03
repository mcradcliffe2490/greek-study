import type { VerbEntry } from '../../types'

interface Props {
  card: VerbEntry
  isFlipped: boolean
  onFlip: () => void
}

export function FlashCard({ card, isFlipped, onFlip }: Props) {
  return (
    <div
      onClick={onFlip}
      className="w-full min-h-[200px] bg-white rounded-xl border border-stone-200 shadow-sm p-6 cursor-pointer select-none transition-all hover:shadow-md flex flex-col justify-center items-center"
    >
      {!isFlipped ? (
        <div className="text-center">
          <div className="greek text-3xl font-semibold text-stone-800 mb-2">{card.lexicalForm}</div>
          <div className="text-stone-500">{card.meaning}</div>
          <div className="mt-3">
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              card.category === 'dirty-dozen' ? 'bg-red-100 text-red-700' :
              card.category === 'mi-verb' ? 'bg-purple-100 text-purple-700' :
              'bg-blue-100 text-blue-700'
            }`}>
              {card.category === 'dirty-dozen' ? 'Dirty Dozen' :
               card.category === 'mi-verb' ? 'μι verb' : 'Freq 100+'}
            </span>
          </div>
          <div className="text-xs text-stone-400 mt-3">Click to reveal principal parts</div>
        </div>
      ) : (
        <div className="text-center w-full">
          <div className="greek text-xl font-semibold text-stone-800 mb-3">{card.lexicalForm}</div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-left max-w-md mx-auto">
            <div className="text-stone-500">Present:</div>
            <div className="greek font-medium">{card.parts.present}</div>
            <div className="text-stone-500">Future:</div>
            <div className="greek font-medium">{card.parts.future}</div>
            <div className="text-stone-500">Aorist Act:</div>
            <div className="greek font-medium">{card.parts.aoristAct}</div>
            <div className="text-stone-500">Perfect Act:</div>
            <div className="greek font-medium">{card.parts.perfectAct}</div>
            <div className="text-stone-500">Perf Mid/Pass:</div>
            <div className="greek font-medium">{card.parts.perfectMidPass}</div>
            <div className="text-stone-500">Aorist Pass:</div>
            <div className="greek font-medium">{card.parts.aoristPass}</div>
          </div>
          {card.notes && (
            <div className="mt-3 text-xs text-stone-400 bg-stone-50 rounded p-2">{card.notes}</div>
          )}
        </div>
      )}
    </div>
  )
}
