import { useState } from 'react'

const eimiParadigm = {
  'Present Indicative': ['εἰμί', 'εἶ', 'ἐστί(ν)', 'ἐσμέν', 'ἐστέ', 'εἰσί(ν)'],
  'Imperfect Indicative': ['ἤμην', 'ἦς', 'ἦν', 'ἦμεν / ἤμεθα', 'ἦτε', 'ἦσαν'],
  'Future Indicative': ['ἔσομαι', 'ἔσῃ', 'ἔσται', 'ἐσόμεθα', 'ἔσεσθε', 'ἔσονται'],
  'Present Subjunctive': ['ὦ', 'ᾖς', 'ᾖ', 'ὦμεν', 'ἦτε', 'ὦσι(ν)'],
  'Present Imperative': ['—', 'ἴσθι', 'ἔστω', '—', 'ἔστε', 'ἔστωσαν'],
  'Infinitive': ['εἶναι'],
  'Participle (m/f/n)': ['ὤν / οὖσα / ὄν'],
}

const persons = ['1sg', '2sg', '3sg', '1pl', '2pl', '3pl']

export function SidePanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [section, setSection] = useState<'eimi' | 'endings'>('eimi')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative w-full max-w-md bg-white shadow-xl overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-stone-200 p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-stone-800">Quick Reference</h2>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-700 text-xl font-bold">
            &times;
          </button>
        </div>

        <div className="flex border-b border-stone-200">
          <button
            onClick={() => setSection('eimi')}
            className={`flex-1 py-2 text-sm font-medium ${section === 'eimi' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-stone-500'}`}
          >
            εἰμί
          </button>
          <button
            onClick={() => setSection('endings')}
            className={`flex-1 py-2 text-sm font-medium ${section === 'endings' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-stone-500'}`}
          >
            Key Endings
          </button>
        </div>

        <div className="p-4">
          {section === 'eimi' && (
            <div className="space-y-4">
              {Object.entries(eimiParadigm).map(([label, forms]) => (
                <div key={label}>
                  <h3 className="text-sm font-semibold text-stone-600 mb-1">{label}</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-sm">
                    {forms.map((form, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-stone-400">{persons[i] ?? ''}</span>
                        <span className="greek text-stone-800 font-medium">{form}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {section === 'endings' && (
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-stone-600 mb-1">Primary Active (Pres/Fut)</h3>
                <div className="greek text-stone-800">-ω, -εις, -ει, -ομεν, -ετε, -ουσι(ν)</div>
              </div>
              <div>
                <h3 className="font-semibold text-stone-600 mb-1">Secondary Active (Impf/Aor)</h3>
                <div className="greek text-stone-800">-ον, -ες, -ε(ν), -ομεν, -ετε, -ον</div>
              </div>
              <div>
                <h3 className="font-semibold text-stone-600 mb-1">1st Aorist Active</h3>
                <div className="greek text-stone-800">-σα, -σας, -σε(ν), -σαμεν, -σατε, -σαν</div>
              </div>
              <div>
                <h3 className="font-semibold text-stone-600 mb-1">Primary Mid/Pass</h3>
                <div className="greek text-stone-800">-ομαι, -ῃ, -εται, -ομεθα, -εσθε, -ονται</div>
              </div>
              <div>
                <h3 className="font-semibold text-stone-600 mb-1">Aorist Passive</h3>
                <div className="greek text-stone-800">-θην, -θης, -θη, -θημεν, -θητε, -θησαν</div>
              </div>
              <div>
                <h3 className="font-semibold text-stone-600 mb-1">Perfect Active</h3>
                <div className="greek text-stone-800">-κα, -κας, -κε(ν), -καμεν, -κατε, -κασι(ν)</div>
              </div>
              <div>
                <h3 className="font-semibold text-stone-600 mb-1">Perfect Mid/Pass</h3>
                <div className="greek text-stone-800">-μαι, -σαι, -ται, -μεθα, -σθε, -νται</div>
              </div>
              <div>
                <h3 className="font-semibold text-stone-600 mb-1">Subjunctive Vowels</h3>
                <div className="text-stone-800">Lengthened connecting vowel: ω/η instead of ο/ε</div>
              </div>
              <div>
                <h3 className="font-semibold text-stone-600 mb-1">Imperative (2sg)</h3>
                <div className="text-stone-800">Pres: -ε | 1 Aor: -σον | 2 Aor: -ε | Aor Pass: -θητι</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
