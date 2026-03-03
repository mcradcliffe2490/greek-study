# Greek Midterm Interactive Study Tool — Implementation Plan

## Context

NT Greek study tool for a midterm. React 19 + TypeScript + Vite + Tailwind v4.
Location: `/Users/mcradcliffe/Documents/Github/greek-study/`

## What Already Exists
- `src/types.ts` — all shared interfaces
- `src/data/john17.ts` — all 26 verses tokenized with full VerbParse
- `src/data/verbs.ts` — dirtyDozenVerbs, freq100Verbs, miVerbs, allVerbs
- `src/data/aoristData.ts` — 3 aorist types + liquid future info
- `src/data/infinitives.ts` — infinitive forms + 6 use categories
- `src/data/participles.ts` — 9 participle formations + 10 use categories
- Tailwind v4, Noto Serif font, warm stone palette all configured

## Remaining Work

### Phase 1: Data Files
1. `src/data/miVerbs.ts` — full paradigm tables for δίδωμι, τίθημι, ἵστημι, ἀφίημι
2. `src/data/thirdDeclension.ts` — key nouns by stem type
3. `src/data/quizQuestions.ts` — ~50 questions across all categories

### Phase 2: Hooks
4. `src/hooks/useParseSession.ts` — John 17 parse attempts + progress
5. `src/hooks/useFlashcards.ts` — shuffle, flip, score tracking
6. `src/hooks/useQuiz.ts` — question ordering, answer checking, scoring

### Phase 3: Layout + App Shell
7. `src/components/layout/TabNav.tsx` — 4 tabs
8. `src/components/layout/SidePanel.tsx` — floating quick-ref drawer
9. `src/App.tsx` — rewrite with tab state + side panel

### Phase 4: Reference Tab
10. `src/components/reference/ReferenceTab.tsx`
11. `src/components/reference/EimiCard.tsx` — εἰμί paradigm
12. `src/components/reference/VerbParadigmTable.tsx` — reusable grid
13. `src/components/reference/InfinitiveRefCard.tsx`
14. `src/components/reference/ParticipleRefCard.tsx`
15. `src/components/reference/ThirdDeclCard.tsx`
16. `src/components/reference/MiVerbCard.tsx`

### Phase 5: Aorists Tab
17. `src/components/aorists/AoristsTab.tsx`
18. `src/components/aorists/AoristComparisonTable.tsx`

### Phase 6: John 17 Tab
19. `src/components/john17/John17Tab.tsx`
20. `src/components/john17/VerseDisplay.tsx`
21. `src/components/john17/VerbToken.tsx`
22. `src/components/john17/ParseInputForm.tsx`
23. `src/components/john17/ParseFeedback.tsx`

### Phase 7: Practice Tab
24. `src/components/practice/PracticeTab.tsx`
25. `src/components/practice/FlashCard.tsx`
26. `src/components/practice/FlashcardMode.tsx`
27. `src/components/practice/QuizQuestion.tsx`
28. `src/components/practice/InfinitiveQuiz.tsx`
29. `src/components/practice/ParticipleQuiz.tsx`
30. `src/components/practice/VerbParsingDrill.tsx`
31. `src/components/practice/QuizResults.tsx`

### Phase 8: Polish
32. Delete App.css, remove unused assets
33. Verify Greek rendering, test all tabs
