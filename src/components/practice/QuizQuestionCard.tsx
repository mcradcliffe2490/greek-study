import type { QuizQuestion } from '../../types'

interface Props {
  question: QuizQuestion
  selectedAnswer: string | null
  showResult: boolean
  onSelectAnswer: (answer: string) => void
}

export function QuizQuestionCard({ question, selectedAnswer, showResult, onSelectAnswer }: Props) {
  const correctAnswer = Array.isArray(question.correctAnswer) ? question.correctAnswer[0] : question.correctAnswer

  return (
    <div className="bg-white rounded-lg border border-stone-200 p-5">
      <div className="mb-1">
        <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">
          {question.category}
        </span>
      </div>

      <p className="text-stone-800 font-medium mt-2 mb-1">{question.prompt}</p>

      {question.context && (
        <p className="text-sm text-stone-500 greek mb-4">{question.context}</p>
      )}

      {question.options && (
        <div className="space-y-2 mt-4">
          {question.options.map(option => {
            let style = 'border-stone-200 hover:bg-stone-50'
            if (showResult) {
              if (option === correctAnswer) {
                style = 'border-green-400 bg-green-50 text-green-800'
              } else if (option === selectedAnswer && option !== correctAnswer) {
                style = 'border-red-400 bg-red-50 text-red-800'
              } else {
                style = 'border-stone-200 opacity-50'
              }
            } else if (option === selectedAnswer) {
              style = 'border-blue-400 bg-blue-50'
            }

            return (
              <button
                key={option}
                onClick={() => !showResult && onSelectAnswer(option)}
                disabled={showResult}
                className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors ${style}`}
              >
                {option}
              </button>
            )
          })}
        </div>
      )}

      {showResult && (
        <div className={`mt-4 rounded-lg p-3 text-sm ${
          selectedAnswer === correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'
        }`}>
          <p className={selectedAnswer === correctAnswer ? 'text-green-800' : 'text-amber-800'}>
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  )
}
