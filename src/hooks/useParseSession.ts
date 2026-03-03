import { useState, useCallback, useMemo } from 'react'
import type { VerbParse, ParseAttempt, VerbToken } from '../types'
import { john17 } from '../data/john17'

export function useParseSession() {
  const [attempts, setAttempts] = useState<ParseAttempt[]>([])
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null)
  const [selectedWord, setSelectedWord] = useState<string | null>(null)

  const totalVerbs = useMemo(() => {
    return john17.reduce((count, verse) => {
      return count + verse.tokens.filter(t => t.isVerb).length
    }, 0)
  }, [])

  const attemptedWords = useMemo(() => {
    const set = new Set<string>()
    attempts.forEach(a => set.add(`${a.verseNum}:${a.word}`))
    return set
  }, [attempts])

  const correctWords = useMemo(() => {
    const set = new Set<string>()
    attempts.filter(a => a.isCorrect).forEach(a => set.add(`${a.verseNum}:${a.word}`))
    return set
  }, [attempts])

  const submitParse = useCallback((verseNum: number, verbToken: VerbToken, userParse: Partial<VerbParse>) => {
    const correct = verbToken.parse
    const fields: (keyof VerbParse)[] = ['tense', 'voice', 'mood', 'person', 'number']

    // For participles, also check gender and case
    if (correct.mood === 'participle') {
      fields.push('gender', 'case')
    }

    const isCorrect = fields.every(f => {
      if (correct[f] === 'N/A') return true
      return userParse[f] === correct[f]
    })

    // Also check lexical form
    const lexicalMatch = !userParse.lexicalForm ||
      userParse.lexicalForm.trim() === correct.lexicalForm.trim()

    const attempt: ParseAttempt = {
      verseNum,
      word: verbToken.word,
      userParse,
      correctParse: correct,
      isCorrect: isCorrect && lexicalMatch,
    }

    setAttempts(prev => [...prev, attempt])
    return attempt
  }, [])

  const resetSession = useCallback(() => {
    setAttempts([])
    setSelectedVerse(null)
    setSelectedWord(null)
  }, [])

  const getWordStatus = useCallback((verseNum: number, word: string): 'unattempted' | 'correct' | 'incorrect' => {
    const key = `${verseNum}:${word}`
    if (correctWords.has(key)) return 'correct'
    if (attemptedWords.has(key)) return 'incorrect'
    return 'unattempted'
  }, [attemptedWords, correctWords])

  const stats = useMemo(() => ({
    totalVerbs,
    attempted: attemptedWords.size,
    correct: correctWords.size,
    accuracy: attemptedWords.size > 0 ? Math.round((correctWords.size / attemptedWords.size) * 100) : 0,
  }), [totalVerbs, attemptedWords, correctWords])

  return {
    attempts,
    selectedVerse,
    setSelectedVerse,
    selectedWord,
    setSelectedWord,
    submitParse,
    resetSession,
    getWordStatus,
    stats,
  }
}
