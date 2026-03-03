import { useState } from 'react'
import type { VerbParse, Tense, Voice, Mood, Person, GramNumber, Gender, GCase } from '../../types'

interface Props {
  word: string
  onSubmit: (parse: Partial<VerbParse>) => void
  onCancel: () => void
}

const tenses: Tense[] = ['present', 'imperfect', 'future', 'aorist', 'perfect', 'pluperfect']
const voices: Voice[] = ['active', 'middle', 'passive', 'middle/passive']
const moods: Mood[] = ['indicative', 'subjunctive', 'optative', 'imperative', 'infinitive', 'participle']
const persons: Person[] = ['1st', '2nd', '3rd', 'N/A']
const numbers: GramNumber[] = ['singular', 'plural', 'N/A']
const genders: Gender[] = ['masculine', 'feminine', 'neuter', 'N/A']
const cases: GCase[] = ['nominative', 'genitive', 'dative', 'accusative', 'vocative', 'N/A']

export function ParseInputForm({ word, onSubmit, onCancel }: Props) {
  const [tense, setTense] = useState<Tense>('present')
  const [voice, setVoice] = useState<Voice>('active')
  const [mood, setMood] = useState<Mood>('indicative')
  const [person, setPerson] = useState<Person>('1st')
  const [number, setNumber] = useState<GramNumber>('singular')
  const [gender, setGender] = useState<Gender>('N/A')
  const [gcase, setGcase] = useState<GCase>('N/A')
  const [lexicalForm, setLexicalForm] = useState('')

  const isParticipleOrInf = mood === 'participle' || mood === 'infinitive'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const parse: Partial<VerbParse> = {
      tense,
      voice,
      mood,
      person: isParticipleOrInf ? 'N/A' : person,
      number: mood === 'infinitive' ? 'N/A' : number,
      lexicalForm: lexicalForm.trim() || undefined,
    }
    if (mood === 'participle') {
      parse.gender = gender
      parse.case = gcase
    }
    onSubmit(parse)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-stone-50 border border-stone-200 rounded-lg p-4 mt-3">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm text-stone-500">Parsing:</span>
        <span className="greek text-blue-700 font-semibold text-lg">{word}</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
        <SelectField label="Tense" value={tense} options={tenses} onChange={v => setTense(v as Tense)} />
        <SelectField label="Voice" value={voice} options={voices} onChange={v => setVoice(v as Voice)} />
        <SelectField label="Mood" value={mood} options={moods} onChange={v => setMood(v as Mood)} />
        {!isParticipleOrInf && (
          <SelectField label="Person" value={person} options={persons} onChange={v => setPerson(v as Person)} />
        )}
        {mood !== 'infinitive' && (
          <SelectField label="Number" value={number} options={numbers} onChange={v => setNumber(v as GramNumber)} />
        )}
        {mood === 'participle' && (
          <>
            <SelectField label="Gender" value={gender} options={genders} onChange={v => setGender(v as Gender)} />
            <SelectField label="Case" value={gcase} options={cases} onChange={v => setGcase(v as GCase)} />
          </>
        )}
      </div>

      <div className="mb-3">
        <label className="block text-xs text-stone-500 mb-1">Lexical Form (optional)</label>
        <input
          type="text"
          value={lexicalForm}
          onChange={e => setLexicalForm(e.target.value)}
          className="w-full md:w-64 px-3 py-1.5 border border-stone-300 rounded text-sm greek"
          placeholder="e.g. λύω"
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
          Check Parse
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 bg-stone-200 text-stone-600 text-sm font-medium rounded hover:bg-stone-300 transition-colors">
          Cancel
        </button>
      </div>
    </form>
  )
}

function SelectField({ label, value, options, onChange }: {
  label: string
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <div>
      <label className="block text-xs text-stone-500 mb-1">{label}</label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-2 py-1.5 border border-stone-300 rounded text-sm bg-white"
      >
        {options.map(o => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}
