import { aoristTypes, liquidFuture } from '../../data/aoristData'

export function AoristComparisonTable() {
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-stone-200 bg-white">
          <thead>
            <tr className="bg-stone-800 text-white">
              <th className="px-4 py-2 text-left font-medium">Feature</th>
              {aoristTypes.map(a => (
                <th key={a.name} className="px-4 py-2 text-left font-medium">{a.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-stone-50">
              <td className="px-4 py-2 font-semibold text-stone-600">Tense Formative</td>
              {aoristTypes.map(a => (
                <td key={a.name} className="px-4 py-2 greek">{a.tenseFormative}</td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold text-stone-600">Stem Change?</td>
              {aoristTypes.map(a => (
                <td key={a.name} className="px-4 py-2">{a.stemChange ? 'Yes' : 'No'}</td>
              ))}
            </tr>
            <tr className="bg-stone-50">
              <td className="px-4 py-2 font-semibold text-stone-600">Key Signal</td>
              {aoristTypes.map(a => (
                <td key={a.name} className="px-4 py-2 text-xs">{a.keySignal}</td>
              ))}
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold text-stone-600">Endings</td>
              {aoristTypes.map(a => (
                <td key={a.name} className="px-4 py-2 text-xs whitespace-pre-line">{a.endingsPattern}</td>
              ))}
            </tr>
            <tr className="bg-stone-50">
              <td className="px-4 py-2 font-semibold text-stone-600">Oblique Moods</td>
              {aoristTypes.map(a => (
                <td key={a.name} className="px-4 py-2 text-xs greek">{a.obliqueMoods ?? '—'}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-lg border border-stone-200 p-5">
        <h3 className="text-lg font-semibold text-stone-800 mb-3">Examples by Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aoristTypes.map(a => (
            <div key={a.name} className="border border-stone-200 rounded p-3">
              <h4 className="font-semibold text-stone-700 mb-2 text-sm">{a.name}</h4>
              {a.examples.map((ex, i) => (
                <div key={i} className="mb-2 text-sm">
                  <div>
                    <span className="text-stone-500">{ex.verb} →</span>{' '}
                    <span className="greek font-medium text-blue-700">{ex.aoristForm}</span>
                  </div>
                  <div className="text-xs text-stone-400">{ex.breakdown}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-stone-200 p-5">
        <h3 className="text-lg font-semibold text-stone-800 mb-2">Liquid Future</h3>
        <p className="text-sm text-stone-500 mb-3">{liquidFuture.description}</p>
        <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-3">
          <div className="text-sm font-medium text-blue-800">Formation: {liquidFuture.formation}</div>
          <div className="text-sm text-blue-700 mt-1">Contraction: {liquidFuture.contraction}</div>
        </div>
        <div className="space-y-2">
          {liquidFuture.examples.map((ex, i) => (
            <div key={i} className="text-sm">
              <span className="text-stone-500">{ex.verb} →</span>{' '}
              <span className="greek font-medium text-blue-700">{ex.liquidFuture}</span>
              <span className="text-xs text-stone-400 ml-2">({ex.note})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
