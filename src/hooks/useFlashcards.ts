import { useState, useCallback, useMemo } from 'react'
import type { VerbEntry } from '../types'

type DeckFilter = 'all' | 'dirty-dozen' | 'freq-100' | 'mi-verb'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function useFlashcards(allVerbs: VerbEntry[]) {
  const [filter, setFilter] = useState<DeckFilter>('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [known, setKnown] = useState<Set<string>>(new Set())
  const [unknown, setUnknown] = useState<Set<string>>(new Set())
  const [deck, setDeck] = useState<VerbEntry[]>(() => shuffle(allVerbs))

  const filteredDeck = useMemo(() => {
    if (filter === 'all') return deck
    return deck.filter(v => v.category === filter)
  }, [deck, filter])

  const currentCard = filteredDeck[currentIndex] ?? null

  const flip = useCallback(() => setIsFlipped(f => !f), [])

  const markKnown = useCallback(() => {
    if (currentCard) {
      setKnown(prev => new Set(prev).add(currentCard.id))
      setUnknown(prev => {
        const next = new Set(prev)
        next.delete(currentCard.id)
        return next
      })
    }
    setIsFlipped(false)
    setCurrentIndex(i => Math.min(i + 1, filteredDeck.length - 1))
  }, [currentCard, filteredDeck.length])

  const markUnknown = useCallback(() => {
    if (currentCard) {
      setUnknown(prev => new Set(prev).add(currentCard.id))
      setKnown(prev => {
        const next = new Set(prev)
        next.delete(currentCard.id)
        return next
      })
    }
    setIsFlipped(false)
    setCurrentIndex(i => Math.min(i + 1, filteredDeck.length - 1))
  }, [currentCard, filteredDeck.length])

  const next = useCallback(() => {
    setIsFlipped(false)
    setCurrentIndex(i => Math.min(i + 1, filteredDeck.length - 1))
  }, [filteredDeck.length])

  const prev = useCallback(() => {
    setIsFlipped(false)
    setCurrentIndex(i => Math.max(i - 1, 0))
  }, [])

  const reshuffle = useCallback(() => {
    setDeck(shuffle(allVerbs))
    setCurrentIndex(0)
    setIsFlipped(false)
  }, [allVerbs])

  const reset = useCallback(() => {
    setKnown(new Set())
    setUnknown(new Set())
    setCurrentIndex(0)
    setIsFlipped(false)
    setDeck(shuffle(allVerbs))
  }, [allVerbs])

  const changeFilter = useCallback((f: DeckFilter) => {
    setFilter(f)
    setCurrentIndex(0)
    setIsFlipped(false)
  }, [])

  return {
    currentCard,
    currentIndex,
    totalCards: filteredDeck.length,
    isFlipped,
    flip,
    next,
    prev,
    markKnown,
    markUnknown,
    reshuffle,
    reset,
    filter,
    changeFilter,
    stats: {
      known: known.size,
      unknown: unknown.size,
      remaining: filteredDeck.length - known.size - unknown.size,
    },
  }
}
