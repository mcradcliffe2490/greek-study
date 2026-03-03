import type { QuizQuestion } from '../../types'

interface Props {
  stats: { totalQuestions: number; correct: number; incorrect: number; accuracy: number }
  missedQuestions: QuizQuestion[]
  onReset: () => void
}

export function QuizResults({ stats, missedQuestions, onReset }: Props) {
  return (
    <div className="bg-white rounded-lg border border-stone-200 p-6">
      <h3 className="text-xl font-semibold text-stone-800 mb-4">Quiz Complete!</h3>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-4 bg-stone-50 rounded-lg">
          <div className="text-2xl font-bold text-stone-800">{stats.accuracy}%</div>
          <div className="text-sm text-stone-500">Accuracy</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-700">{stats.correct}</div>
          <div className="text-sm text-stone-500">Correct</div>
        </div>
        <div className="text-center p-4 bg-red-50 rounded-lg">
          <div className="text-2xl font-bold text-red-700">{stats.incorrect}</div>
          <div className="text-sm text-stone-500">Missed</div>
        </div>
      </div>

      {missedQuestions.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-stone-700 mb-2">Review Missed Questions</h4>
          <div className="space-y-3">
            {missedQuestions.map(q => (
              <div key={q.id} className="border border-stone-200 rounded p-3">
                <p className="text-sm font-medium text-stone-700">{q.prompt}</p>
                {q.context && <p className="text-xs greek text-stone-500 mt-1">{q.context}</p>}
                <p className="text-sm text-green-700 mt-1">
                  Correct: {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}
                </p>
                <p className="text-xs text-stone-400 mt-1">{q.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onReset}
        className="w-full py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  )
}
