// ─── Core parsing types ───────────────────────────────────────────────────────
export type Tense = 'present' | 'imperfect' | 'future' | 'aorist' | 'perfect' | 'pluperfect'
export type Voice = 'active' | 'middle' | 'passive' | 'middle/passive'
export type Mood = 'indicative' | 'subjunctive' | 'optative' | 'imperative' | 'infinitive' | 'participle'
export type Person = '1st' | '2nd' | '3rd' | 'N/A'
export type GramNumber = 'singular' | 'plural' | 'N/A'
export type Gender = 'masculine' | 'feminine' | 'neuter' | 'N/A'
export type GCase = 'nominative' | 'genitive' | 'dative' | 'accusative' | 'vocative' | 'N/A'

export interface VerbParse {
  tense: Tense
  voice: Voice
  mood: Mood
  person: Person
  number: GramNumber
  lexicalForm: string     // e.g. "λύω"
  translation?: string    // helpful gloss
  note?: string           // e.g. "liquid aorist" or "2nd aorist – Dirty Dozen"
  // For participles
  gender?: Gender
  case?: GCase
}

// ─── Word annotations (for tooltips) ─────────────────────────────────────────
export interface WordAnnotation {
  gloss: string           // English meaning: "the", "heaven", "eyes"
  lexicalForm: string     // Dictionary headword: "ὁ, ἡ, τό", "οὐρανός, -οῦ, ὁ"
  grammar: string         // Morphological description: "acc. pl. masc. article"
  role?: string           // Syntactic function: "direct object", "subject"
  note?: string           // Extra info: "crasis", "elided form", etc.
}

// ─── John 17 tokenization ─────────────────────────────────────────────────────
export interface VerbToken {
  word: string
  isVerb: true
  parse: VerbParse
}
export interface WordToken {
  word: string
  isVerb: false
  annotation?: WordAnnotation
}
export type Token = VerbToken | WordToken

export interface Verse {
  verseNum: number
  tokens: Token[]
  rawText: string
}

// ─── Verb entry for flashcards ────────────────────────────────────────────────
export interface PrincipalParts {
  present: string
  future: string
  aoristAct: string
  perfectAct: string
  perfectMidPass: string
  aoristPass: string
}

export interface VerbEntry {
  id: string
  lexicalForm: string
  meaning: string
  category: 'dirty-dozen' | 'freq-100' | 'mi-verb'
  parts: PrincipalParts
  notes?: string
  frequency?: number
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────
export type QuizCategory =
  | 'aorist-types'
  | 'infinitive-use'
  | 'participle-use'
  | 'liquid-aorist'
  | 'liquid-future'
  | '2nd-aorist'
  | 'verb-parsing'
  | 'mi-verbs'

export interface QuizQuestion {
  id: string
  category: QuizCategory
  prompt: string
  context?: string          // Greek example sentence
  questionType: 'multiple-choice' | 'parse'
  options?: string[]
  correctAnswer: string | string[]
  explanation: string
}

// ─── Session state ────────────────────────────────────────────────────────────
export interface ParseAttempt {
  verseNum: number
  word: string
  userParse: Partial<VerbParse>
  correctParse: VerbParse
  isCorrect: boolean
}

// ─── Aorist reference data ────────────────────────────────────────────────────
export interface AoristExample {
  verb: string
  aoristForm: string
  breakdown: string
}
export interface AoristType {
  name: string
  tenseFormative: string
  endingsPattern: string
  stemChange: boolean
  keySignal: string
  examples: AoristExample[]
  obliqueMoods?: string
}
