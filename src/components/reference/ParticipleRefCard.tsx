import { participleFormations, participleUses } from '../../data/participles'

export function ParticipleRefCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-5">
      <h3 className="text-lg font-semibold text-stone-800 mb-4">Participles</h3>

      <h4 className="text-sm font-semibold text-stone-600 mb-2">Formation</h4>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm border border-stone-200">
          <thead>
            <tr className="bg-stone-100">
              <th className="px-2 py-1 text-left text-stone-500 font-medium text-xs">Tense/Voice</th>
              <th className="px-2 py-1 text-left text-stone-500 font-medium text-xs">M</th>
              <th className="px-2 py-1 text-left text-stone-500 font-medium text-xs">F</th>
              <th className="px-2 py-1 text-left text-stone-500 font-medium text-xs">N</th>
              <th className="px-2 py-1 text-left text-stone-500 font-medium text-xs">Decl.</th>
              <th className="px-2 py-1 text-left text-stone-500 font-medium text-xs">Signal</th>
            </tr>
          </thead>
          <tbody>
            {participleFormations.map((f, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                <td className="px-2 py-1 text-stone-600 text-xs">{f.tense} {f.voice}</td>
                <td className="px-2 py-1 greek text-xs font-medium">{f.masculine}</td>
                <td className="px-2 py-1 greek text-xs font-medium">{f.feminine}</td>
                <td className="px-2 py-1 greek text-xs font-medium">{f.neuter}</td>
                <td className="px-2 py-1 text-stone-500 text-xs">{f.declension}</td>
                <td className="px-2 py-1 text-stone-400 text-xs">{f.signal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 className="text-sm font-semibold text-stone-600 mb-2">Uses</h4>
      <div className="space-y-4">
        {participleUses.map(use => (
          <div key={use.name} className="border border-stone-200 rounded p-3">
            <div className="flex items-center gap-2 mb-1">
              <h5 className="font-semibold text-stone-700">{use.name}</h5>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                use.category === 'adjectival' ? 'bg-green-100 text-green-700' :
                use.category === 'adverbial' ? 'bg-blue-100 text-blue-700' :
                use.category === 'substantival' ? 'bg-purple-100 text-purple-700' :
                'bg-amber-100 text-amber-700'
              }`}>
                {use.category}
              </span>
            </div>
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
