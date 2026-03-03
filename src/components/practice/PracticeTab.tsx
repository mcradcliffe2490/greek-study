import { useState } from 'react'
import { FlashcardMode } from './FlashcardMode'
import { QuizQuestionCard } from './QuizQuestionCard'
import { QuizResults } from './QuizResults'
import { useQuiz } from '../../hooks/useQuiz'
import { quizQuestions } from '../../data/quizQuestions'
import type { QuizCategory } from '../../types'

type PracticeMode = 'flashcards' | 'quiz'

const categoryOptions: { id: QuizCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'aorist-types', label: 'Aorist Types' },
  { id: 'infinitive-use', label: 'Infinitive Use' },
  { id: 'participle-use', label: 'Participle Use' },
  { id: 'liquid-aorist', label: 'Liquid Aorist' },
  { id: 'liquid-future', label: 'Liquid Future' },
  { id: '2nd-aorist', label: '2nd Aorist' },
  { id: 'verb-parsing', label: 'Verb Parsing' },
  { id: 'mi-verbs', label: 'μι Verbs' },
]

export function PracticeTab() {
  const [mode, setMode] = useState<PracticeMode>('flashcards')
  const quiz = useQuiz(quizQuestions)

  return (
    <div>
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setMode('flashcards')}
          className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            mode === 'flashcards' ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
          }`}
        >
          Flashcards
        </button>
        <button
          onClick={() => setMode('quiz')}
          className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${
            mode === 'quiz' ? 'bg-stone-800 text-white' : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
          }`}
        >
          Quiz
        </button>
      </div>

      {mode === 'flashcards' && <FlashcardMode />}

      {mode === 'quiz' && (
        <div>
          <div className="flex gap-2 mb-4 flex-wrap">
            {categoryOptions.map(cat => (
              <button
                key={cat.id}
                onClick={() => quiz.changeCategory(cat.id)}
                className={`px-3 py-1.5 text-xs rounded font-medium transition-colors ${
                  quiz.categoryFilter === cat.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-stone-500 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {!quiz.quizComplete ? (
            <>
              <div className="flex items-center justify-between mb-3 text-sm text-stone-500">
                <span>Question {quiz.currentIndex + 1} of {quiz.totalQuestions}</span>
                <span>Score: {quiz.stats.correct}/{quiz.stats.answered}</span>
              </div>

              <div className="mb-3 h-2 bg-stone-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all"
                  style={{ width: `${((quiz.currentIndex + 1) / quiz.totalQuestions) * 100}%` }}
                />
              </div>

              {quiz.currentQuestion && (
                <QuizQuestionCard
                  question={quiz.currentQuestion}
                  selectedAnswer={quiz.selectedAnswer}
                  showResult={quiz.showResult}
                  onSelectAnswer={quiz.submitAnswer}
                />
              )}

              {quiz.showResult && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={quiz.nextQuestion}
                    className="px-6 py-2.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    {quiz.currentIndex + 1 >= quiz.totalQuestions ? 'See Results' : 'Next Question'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <QuizResults
              stats={quiz.stats}
              missedQuestions={quiz.missedQuestions}
              onReset={quiz.resetQuiz}
            />
          )}
        </div>
      )}
    </div>
  )
}
