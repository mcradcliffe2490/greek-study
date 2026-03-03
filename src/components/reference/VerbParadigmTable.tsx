interface ParadigmRow {
  person: string
  singular: string
  plural: string
}

interface Props {
  label: string
  rows: ParadigmRow[]
}

export function VerbParadigmTable({ label, rows }: Props) {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-stone-600 mb-1">{label}</h4>
      <table className="w-full text-sm border border-stone-200">
        <thead>
          <tr className="bg-stone-100">
            <th className="px-3 py-1 text-left text-stone-500 font-medium">Person</th>
            <th className="px-3 py-1 text-left text-stone-500 font-medium">Singular</th>
            <th className="px-3 py-1 text-left text-stone-500 font-medium">Plural</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
              <td className="px-3 py-1 text-stone-500">{r.person}</td>
              <td className="px-3 py-1 greek font-medium">{r.singular}</td>
              <td className="px-3 py-1 greek font-medium">{r.plural}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
