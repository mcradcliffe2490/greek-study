import { miVerbParadigms, miVerbKeyPoints } from '../../data/miVerbs'
import { VerbParadigmTable } from './VerbParadigmTable'
import { useState } from 'react'

export function MiVerbCard() {
  const [activeVerb, setActiveVerb] = useState(0)
  const verb = miVerbParadigms[activeVerb]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-5">
      <h3 className="text-lg font-semibold text-stone-800 mb-2">μι Verbs</h3>

      <div className="bg-amber-50 border border-amber-200 rounded p-3 mb-4">
        <h4 className="text-sm font-semibold text-amber-800 mb-1">Key Points</h4>
        <ul className="text-xs text-amber-700 space-y-1">
          {miVerbKeyPoints.map((pt, i) => (
            <li key={i}>&#8226; {pt}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {miVerbParadigms.map((v, i) => (
          <button
            key={v.verb}
            onClick={() => setActiveVerb(i)}
            className={`px-3 py-1.5 text-sm rounded font-medium transition-colors ${
              i === activeVerb
                ? 'bg-blue-700 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            <span className="greek">{v.verb}</span>
          </button>
        ))}
      </div>

      <div className="mb-2">
        <span className="greek text-lg font-semibold text-stone-800">{verb.verb}</span>
        <span className="text-stone-500 ml-2">— {verb.meaning}</span>
        <span className="text-stone-400 text-sm ml-2">(stem: {verb.stem})</span>
      </div>

      {verb.forms.map(f => (
        <VerbParadigmTable key={f.label} label={f.label} rows={f.rows} />
      ))}
    </div>
  )
}
