import { AoristComparisonTable } from './AoristComparisonTable'

export function AoristsTab() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-stone-800">Aorist Types Comparison</h2>
        <p className="text-sm text-stone-500 mt-1">
          Side-by-side comparison of 1st Aorist, 2nd Aorist, and Liquid Aorist — plus Liquid Future.
        </p>
      </div>
      <AoristComparisonTable />
    </div>
  )
}
