import { infinitiveForms, infinitiveUses } from '../../data/infinitives'

export function InfinitiveRefCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-5">
      <h3 className="text-lg font-semibold text-stone-800 mb-4">Infinitives</h3>

      <h4 className="text-sm font-semibold text-stone-600 mb-2">Formation</h4>
      <table className="w-full text-sm border border-stone-200 mb-6">
        <thead>
          <tr className="bg-stone-100">
            <th className="px-3 py-1 text-left text-stone-500 font-medium">Tense</th>
            <th className="px-3 py-1 text-left text-stone-500 font-medium">Voice</th>
            <th className="px-3 py-1 text-left text-stone-500 font-medium">Form</th>
            <th className="px-3 py-1 text-left text-stone-500 font-medium">Note</th>
          </tr>
        </thead>
        <tbody>
          {infinitiveForms.map((f, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
              <td className="px-3 py-1 text-stone-600">{f.tense}</td>
              <td className="px-3 py-1 text-stone-600">{f.voice}</td>
              <td className="px-3 py-1 greek font-medium">{f.form}</td>
              <td className="px-3 py-1 text-stone-400 text-xs">{f.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="text-sm font-semibold text-stone-600 mb-2">Uses</h4>
      <div className="space-y-4">
        {infinitiveUses.map(use => (
          <div key={use.name} className="border border-stone-200 rounded p-3">
            <h5 className="font-semibold text-stone-700">{use.name}</h5>
            <p className="text-sm text-stone-500 mb-2">{use.description}</p>
            <div className="text-xs text-stone-400 mb-2">
              <strong>Clues:</strong> {use.clues.join(' | ')}
            </div>
            <div className="space-y-1">
              {use.examples.map((ex, i) => (
                <div key={i} className="text-sm">
                  <span className="greek text-blue-700">{ex.greek}</span>
                  <span className="text-stone-500 ml-2">— {ex.translation}</span>
                  {ex.note && <span className="text-stone-400 text-xs ml-1">({ex.note})</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
