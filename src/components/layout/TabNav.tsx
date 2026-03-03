type Tab = 'reference' | 'aorists' | 'john17' | 'practice' | 'survival'

const tabs: { id: Tab; label: string }[] = [
  { id: 'reference', label: 'Reference' },
  { id: 'aorists', label: 'Aorists' },
  { id: 'john17', label: 'John 17' },
  { id: 'practice', label: 'Practice' },
  { id: 'survival', label: 'Survival Rules' },
]

export function TabNav({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <nav className="flex border-b border-stone-300 bg-stone-100">
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          className={`px-5 py-3 text-sm font-semibold transition-colors ${
            active === t.id
              ? 'border-b-2 border-blue-700 text-blue-700 bg-white'
              : 'text-stone-500 hover:text-stone-800 hover:bg-stone-50'
          }`}
        >
          {t.label}
        </button>
      ))}
    </nav>
  )
}
