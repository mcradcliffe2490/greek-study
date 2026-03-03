import { useState } from 'react'
import type { VerbParse, VerbToken } from '../../types'
import { john17 } from '../../data/john17'
import { useParseSession } from '../../hooks/useParseSession'
import { VerseDisplay } from './VerseDisplay'
import { ParseInputForm } from './ParseInputForm'
import { ParseFeedback } from './ParseFeedback'
import type { ParseAttempt } from '../../types'

export function John17Tab() {
  const { submitParse, getWordStatus, stats, resetSession } = useParseSession()
  const [activeVerb, setActiveVerb] = useState<{ verseNum: number; token: VerbToken } | null>(null)
  const [lastAttempt, setLastAttempt] = useState<ParseAttempt | null>(null)
  const [showAll, setShowAll] = useState(false)

  const displayedVerses = showAll ? john17 : john17.slice(0, 10)

  const handleVerbClick = (verseNum: number, token: VerbToken) => {
    setActiveVerb({ verseNum, token })
    setLastAttempt(null)
  }

  const handleSubmit = (userParse: Partial<VerbParse>) => {
    if (!activeVerb) return
    const attempt = submitParse(activeVerb.verseNum, activeVerb.token, userParse)
    setLastAttempt(attempt)
  }

  const handleCancel = () => {
    setActiveVerb(null)
    setLastAttempt(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-stone-800">John 17 — Verb Parsing Practice</h2>
          <p className="text-sm text-stone-500 mt-1">
            Click any <span className="text-blue-700 underline">blue underlined verb</span> to parse it.
          </p>
        </div>
        <button
          onClick={resetSession}
          className="px-3 py-1.5 text-sm bg-stone-200 text-stone-600 rounded hover:bg-stone-300 transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="bg-white rounded-lg border border-stone-200 p-4 mb-6">
        <div className="flex items-center gap-6 text-sm">
          <div>
            <span className="text-stone-500">Attempted:</span>{' '}
            <span className="font-semibold">{stats.attempted}/{stats.totalVerbs}</span>
          </div>
          <div>
            <span className="text-stone-500">Correct:</span>{' '}
            <span className="font-semibold text-green-700">{stats.correct}</span>
          </div>
          <div>
            <span className="text-stone-500">Accuracy:</span>{' '}
            <span className="font-semibold">{stats.accuracy}%</span>
          </div>
        </div>
        <div className="mt-2 h-2 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 rounded-full transition-all"
            style={{ width: `${(stats.attempted / stats.totalVerbs) * 100}%` }}
          />
        </div>
      </div>

      {displayedVerses.map(verse => (
        <div key={verse.verseNum}>
          <VerseDisplay
            verse={verse}
            getWordStatus={getWordStatus}
            onVerbClick={handleVerbClick}
          />
          {activeVerb?.verseNum === verse.verseNum && (
            <div className="mb-4 ml-6">
              {!lastAttempt ? (
                <ParseInputForm
                  word={activeVerb.token.word}
                  onSubmit={handleSubmit}
                  onCancel={handleCancel}
                />
              ) : (
                <div>
                  <ParseFeedback
                    isCorrect={lastAttempt.isCorrect}
                    userParse={lastAttempt.userParse}
                    correctParse={lastAttempt.correctParse}
                  />
                  <button
                    onClick={handleCancel}
                    className="mt-2 px-3 py-1.5 text-sm bg-stone-200 text-stone-600 rounded hover:bg-stone-300"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {!showAll && john17.length > 10 && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full py-3 text-sm text-blue-700 font-medium bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
        >
          Show remaining {john17.length - 10} verses
        </button>
      )}
    </div>
  )
}
