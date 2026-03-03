import { useState } from 'react'
import { EimiCard } from './EimiCard'
import { InfinitiveRefCard } from './InfinitiveRefCard'
import { ParticipleRefCard } from './ParticipleRefCard'
import { ThirdDeclCard } from './ThirdDeclCard'
import { MiVerbCard } from './MiVerbCard'

type Section = 'eimi' | 'infinitives' | 'participles' | 'third-decl' | 'mi-verbs'

const sections: { id: Section; label: string }[] = [
  { id: 'eimi', label: 'εἰμί' },
  { id: 'infinitives', label: 'Infinitives' },
  { id: 'participles', label: 'Participles' },
  { id: 'third-decl', label: '3rd Declension' },
  { id: 'mi-verbs', label: 'μι Verbs' },
]

export function ReferenceTab() {
  const [active, setActive] = useState<Section>('eimi')

  return (
    <div>
      <div className="flex gap-2 mb-6 flex-wrap">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors ${
              active === s.id
                ? 'bg-stone-800 text-white'
                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {active === 'eimi' && <EimiCard />}
      {active === 'infinitives' && <InfinitiveRefCard />}
      {active === 'participles' && <ParticipleRefCard />}
      {active === 'third-decl' && <ThirdDeclCard />}
      {active === 'mi-verbs' && <MiVerbCard />}
    </div>
  )
}
