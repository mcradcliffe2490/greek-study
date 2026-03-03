import { VerbParadigmTable } from './VerbParadigmTable'

const paradigms = [
  {
    label: 'Present Active Indicative',
    rows: [
      { person: '1st', singular: 'εἰμί', plural: 'ἐσμέν' },
      { person: '2nd', singular: 'εἶ', plural: 'ἐστέ' },
      { person: '3rd', singular: 'ἐστί(ν)', plural: 'εἰσί(ν)' },
    ],
  },
  {
    label: 'Imperfect Active Indicative',
    rows: [
      { person: '1st', singular: 'ἤμην', plural: 'ἦμεν / ἤμεθα' },
      { person: '2nd', singular: 'ἦς', plural: 'ἦτε' },
      { person: '3rd', singular: 'ἦν', plural: 'ἦσαν' },
    ],
  },
  {
    label: 'Future Middle Indicative',
    rows: [
      { person: '1st', singular: 'ἔσομαι', plural: 'ἐσόμεθα' },
      { person: '2nd', singular: 'ἔσῃ', plural: 'ἔσεσθε' },
      { person: '3rd', singular: 'ἔσται', plural: 'ἔσονται' },
    ],
  },
  {
    label: 'Present Active Subjunctive',
    rows: [
      { person: '1st', singular: 'ὦ', plural: 'ὦμεν' },
      { person: '2nd', singular: 'ᾖς', plural: 'ἦτε' },
      { person: '3rd', singular: 'ᾖ', plural: 'ὦσι(ν)' },
    ],
  },
  {
    label: 'Present Active Imperative',
    rows: [
      { person: '2nd', singular: 'ἴσθι', plural: 'ἔστε' },
      { person: '3rd', singular: 'ἔστω', plural: 'ἔστωσαν' },
    ],
  },
  {
    label: 'Non-Finite Forms',
    rows: [
      { person: 'Infinitive', singular: 'εἶναι', plural: '—' },
      { person: 'Participle (m/f/n)', singular: 'ὤν / οὖσα / ὄν', plural: 'ὄντες / οὖσαι / ὄντα' },
      { person: 'Ptc. Gen.', singular: 'ὄντος / οὔσης / ὄντος', plural: '—' },
    ],
  },
]

export function EimiCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-5">
      <h3 className="text-lg font-semibold text-stone-800 mb-1">
        <span className="greek">εἰμί</span> — "I am"
      </h3>
      <p className="text-sm text-stone-500 mb-4">
        No aorist, no perfect, no passive. Enclitic in present (except 2sg εἶ).
        Future is deponent (middle forms). Very common in John 17.
      </p>
      {paradigms.map(p => (
        <VerbParadigmTable key={p.label} label={p.label} rows={p.rows} />
      ))}
    </div>
  )
}
