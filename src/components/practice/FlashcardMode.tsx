import { allVerbs } from '../../data/verbs'
import { useFlashcards } from '../../hooks/useFlashcards'
import { FlashCard } from './FlashCard'

const filters = [
  { id: 'all' as const, label: 'All Verbs' },
  { id: 'dirty-dozen' as const, label: 'Dirty Dozen' },
  { id: 'freq-100' as const, label: 'Freq 100+' },
  { id: 'mi-verb' as const, label: 'μι Verbs' },
]

export function FlashcardMode() {
  const {
    currentCard, currentIndex, totalCards, isFlipped, flip,
    next, prev, markKnown, markUnknown, reshuffle, reset,
    filter, changeFilter, stats,
  } = useFlashcards(allVerbs)

  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap">
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => changeFilter(f.id)}
            className={`px-3 py-1.5 text-sm rounded font-medium transition-colors ${
              filter === f.id
                ? 'bg-stone-800 text-white'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mb-3 text-sm text-stone-500">
        <span>Card {currentIndex + 1} of {totalCards}</span>
        <div className="flex gap-3">
          <span className="text-green-600">Know: {stats.known}</span>
          <span className="text-red-600">Review: {stats.unknown}</span>
          <span>Left: {stats.remaining}</span>
        </div>
      </div>

      {currentCard ? (
        <>
          <FlashCard card={currentCard} isFlipped={isFlipped} onFlip={flip} />

          <div className="flex justify-center gap-3 mt-4">
            <button onClick={prev} className="px-4 py-2 text-sm bg-stone-200 text-stone-600 rounded hover:bg-stone-300">
              Prev
            </button>
            <button onClick={markUnknown} className="px-4 py-2 text-sm bg-red-100 text-red-700 rounded hover:bg-red-200 font-medium">
              Still Learning
            </button>
            <button onClick={markKnown} className="px-4 py-2 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200 font-medium">
              Got It
            </button>
            <button onClick={next} className="px-4 py-2 text-sm bg-stone-200 text-stone-600 rounded hover:bg-stone-300">
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-12 text-stone-500">No cards in this category.</div>
      )}

      <div className="flex justify-center gap-3 mt-6">
        <button onClick={reshuffle} className="px-3 py-1.5 text-xs bg-stone-100 text-stone-500 rounded hover:bg-stone-200">
          Reshuffle
        </button>
        <button onClick={reset} className="px-3 py-1.5 text-xs bg-stone-100 text-stone-500 rounded hover:bg-stone-200">
          Reset All
        </button>
      </div>
    </div>
  )
}
