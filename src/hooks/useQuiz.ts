import { useState, useCallback, useMemo } from 'react'
import type { QuizQuestion, QuizCategory } from '../types'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface QuizAnswer {
  questionId: string
  selectedAnswer: string
  isCorrect: boolean
}

export function useQuiz(allQuestions: QuizQuestion[]) {
  const [categoryFilter, setCategoryFilter] = useState<QuizCategory | 'all'>('all')
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => shuffle(allQuestions))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const filteredQuestions = useMemo(() => {
    if (categoryFilter === 'all') return questions
    return questions.filter(q => q.category === categoryFilter)
  }, [questions, categoryFilter])

  const currentQuestion = filteredQuestions[currentIndex] ?? null

  const submitAnswer = useCallback((answer: string) => {
    if (!currentQuestion || showResult) return

    setSelectedAnswer(answer)
    setShowResult(true)

    const correct = Array.isArray(currentQuestion.correctAnswer)
      ? currentQuestion.correctAnswer.includes(answer)
      : currentQuestion.correctAnswer === answer

    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selectedAnswer: answer,
      isCorrect: correct,
    }])
  }, [currentQuestion, showResult])

  const nextQuestion = useCallback(() => {
    setSelectedAnswer(null)
    setShowResult(false)
    if (currentIndex + 1 >= filteredQuestions.length) {
      setQuizComplete(true)
    } else {
      setCurrentIndex(i => i + 1)
    }
  }, [currentIndex, filteredQuestions.length])

  const resetQuiz = useCallback(() => {
    setQuestions(shuffle(allQuestions))
    setCurrentIndex(0)
    setAnswers([])
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizComplete(false)
  }, [allQuestions])

  const changeCategory = useCallback((cat: QuizCategory | 'all') => {
    setCategoryFilter(cat)
    setCurrentIndex(0)
    setAnswers([])
    setSelectedAnswer(null)
    setShowResult(false)
    setQuizComplete(false)
  }, [])

  const stats = useMemo(() => {
    const correct = answers.filter(a => a.isCorrect).length
    return {
      totalQuestions: filteredQuestions.length,
      answered: answers.length,
      correct,
      incorrect: answers.length - correct,
      accuracy: answers.length > 0 ? Math.round((correct / answers.length) * 100) : 0,
    }
  }, [answers, filteredQuestions.length])

  const missedQuestions = useMemo(() => {
    const missedIds = new Set(answers.filter(a => !a.isCorrect).map(a => a.questionId))
    return allQuestions.filter(q => missedIds.has(q.id))
  }, [answers, allQuestions])

  return {
    currentQuestion,
    currentIndex,
    totalQuestions: filteredQuestions.length,
    selectedAnswer,
    showResult,
    quizComplete,
    submitAnswer,
    nextQuestion,
    resetQuiz,
    categoryFilter,
    changeCategory,
    stats,
    missedQuestions,
    answers,
  }
}
