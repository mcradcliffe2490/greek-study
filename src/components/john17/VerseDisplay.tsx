import type { Verse, VerbToken, WordToken } from '../../types'
import { VerbTokenDisplay } from './VerbTokenDisplay'
import { WordTokenDisplay } from './WordTokenDisplay'

interface Props {
  verse: Verse
  getWordStatus: (verseNum: number, word: string) => 'unattempted' | 'correct' | 'incorrect'
  onVerbClick: (verseNum: number, verbToken: VerbToken) => void
}

export function VerseDisplay({ verse, getWordStatus, onVerbClick }: Props) {
  return (
    <div className="mb-4 p-4 bg-white rounded-lg border border-stone-200">
      <span className="text-stone-400 font-semibold mr-2 text-sm">{verse.verseNum}</span>
      <span className="greek text-lg leading-relaxed">
        {verse.tokens.map((token, i) => {
          if (token.isVerb) {
            return (
              <span key={i}>
                <VerbTokenDisplay
                  word={token.word}
                  status={getWordStatus(verse.verseNum, token.word)}
                  onClick={() => onVerbClick(verse.verseNum, token)}
                />
                {' '}
              </span>
            )
          }
          return <WordTokenDisplay key={i} token={token as WordToken} />
        })}
      </span>
    </div>
  )
}
