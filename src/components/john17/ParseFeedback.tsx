import type { VerbParse } from '../../types'

interface Props {
  isCorrect: boolean
  userParse: Partial<VerbParse>
  correctParse: VerbParse
}

const fieldLabels: Record<string, string> = {
  tense: 'Tense',
  voice: 'Voice',
  mood: 'Mood',
  person: 'Person',
  number: 'Number',
  gender: 'Gender',
  case: 'Case',
  lexicalForm: 'Lexical Form',
}

export function ParseFeedback({ isCorrect, userParse, correctParse }: Props) {
  const fields: (keyof VerbParse)[] = ['tense', 'voice', 'mood', 'person', 'number']
  if (correctParse.mood === 'participle') {
    fields.push('gender', 'case')
  }
  fields.push('lexicalForm')

  return (
    <div className={`rounded-lg border p-4 mt-3 ${
      isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{isCorrect ? '\u2713' : '\u2717'}</span>
        <span className={`font-semibold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
          {isCorrect ? 'Correct!' : 'Not quite.'}
        </span>
      </div>

      {!isCorrect && (
        <table className="w-full text-sm mt-2">
          <thead>
            <tr className="border-b border-stone-200">
              <th className="text-left py-1 text-stone-500 font-medium">Field</th>
              <th className="text-left py-1 text-stone-500 font-medium">Your Answer</th>
              <th className="text-left py-1 text-stone-500 font-medium">Correct</th>
            </tr>
          </thead>
          <tbody>
            {fields.map(f => {
              const userVal = userParse[f] ?? '—'
              const correctVal = correctParse[f] ?? 'N/A'
              if (correctVal === 'N/A') return null
              const match = userVal === correctVal
              return (
                <tr key={f} className={match ? '' : 'bg-red-100'}>
                  <td className="py-1 text-stone-600">{fieldLabels[f]}</td>
                  <td className={`py-1 ${match ? 'text-stone-700' : 'text-red-700 font-medium'}`}>
                    {String(userVal)}
                  </td>
                  <td className="py-1 text-green-700 font-medium greek">{String(correctVal)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}

      {correctParse.note && (
        <div className="mt-2 text-sm text-stone-600 bg-stone-100 rounded p-2">
          <strong>Note:</strong> {correctParse.note}
        </div>
      )}

      {correctParse.translation && (
        <div className="mt-1 text-sm text-stone-500">
          <strong>Translation:</strong> {correctParse.translation}
        </div>
      )}
    </div>
  )
}
