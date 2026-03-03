import { thirdDeclCategories, thirdDeclEndingsTable } from '../../data/thirdDeclension'

export function ThirdDeclCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-5">
      <h3 className="text-lg font-semibold text-stone-800 mb-4">Third Declension</h3>

      <h4 className="text-sm font-semibold text-stone-600 mb-2">{thirdDeclEndingsTable.label}</h4>
      <table className="w-full text-sm border border-stone-200 mb-6">
        <thead>
          <tr className="bg-stone-100">
            {thirdDeclEndingsTable.headers.map(h => (
              <th key={h} className="px-3 py-1 text-left text-stone-500 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {thirdDeclEndingsTable.rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
              <td className="px-3 py-1 text-stone-600">{r.case}</td>
              <td className="px-3 py-1 greek font-medium">{r.mascFem}</td>
              <td className="px-3 py-1 greek font-medium">{r.neuter}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="text-sm font-semibold text-stone-600 mb-2">Nouns by Stem Type</h4>
      <div className="space-y-4">
        {thirdDeclCategories.map(cat => (
          <div key={cat.name} className="border border-stone-200 rounded p-3">
            <h5 className="font-semibold text-stone-700 mb-1">{cat.name}</h5>
            <p className="text-xs text-stone-400 mb-2">{cat.description}</p>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-100">
                  <th className="text-left text-stone-500 text-xs py-1">Nom.</th>
                  <th className="text-left text-stone-500 text-xs py-1">Gen.</th>
                  <th className="text-left text-stone-500 text-xs py-1">Art.</th>
                  <th className="text-left text-stone-500 text-xs py-1">Meaning</th>
                  <th className="text-left text-stone-500 text-xs py-1">Pattern</th>
                </tr>
              </thead>
              <tbody>
                {cat.nouns.map((n, i) => (
                  <tr key={i} className="border-b border-stone-50">
                    <td className="py-1 greek font-medium">{n.nominative}</td>
                    <td className="py-1 greek">{n.genitive}</td>
                    <td className="py-1 greek text-stone-400">{n.article}</td>
                    <td className="py-1 text-stone-600 text-xs">{n.meaning}</td>
                    <td className="py-1 text-stone-400 text-xs">{n.pattern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  )
}
