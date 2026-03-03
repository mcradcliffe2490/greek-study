const sections = [
  {
    num: '1',
    title: 'Nouns and Pronouns',
    rules: [
      'Neuter nouns always have the same endings in the nominative and accusative.',
      'Datives will always have an iota (sometimes subscribed).',
      'All three declensions and all three genders have their genitive plural ending in ων.',
      'Third declension stems are found in the genitive not the nominative.',
      'Third declension nouns with lexical forms ending in μα and ος are neuter.',
      'A key to the vocative case is the comma(s).',
      'The interrogative pronoun (τίς) has its accent (always acute) on the 1st syllable.',
      'The indefinite relative pronoun declines both ends.',
      'Pronouns agree with their antecedents in gender and number, but their case is determined by their function in their own particular clauses (except when they are "attracted" to the cases of their antecedents).',
    ],
  },
  {
    num: '2',
    title: 'Adjectives',
    rules: [
      'Adjectives agree with the nouns they modify in gender, number, and case.',
      'Adjectives have three uses — attributive, predicative, and substantive.',
    ],
  },
  {
    num: '3',
    title: 'Adverbs',
    rules: [
      'Adjectives can often be changed into adverbs by dropping the case ending and adding ως (the Greek equivalent of "-ly").',
    ],
  },
  {
    num: '4',
    title: 'Verbs in General',
    rules: [
      'Augment (a feature of secondary tenses in the indicative mood only) and/or reduplication (a feature of perfects and pluperfects in all moods) will follow a prepositional prefix. The final vowel of a prepositional prefix will generally drop before augment.',
      'Some verbs (formerly known as "deponent") have lost some or all of their active forms to middle, or passive ones, because their middle (or passive functioning as middle) and lexical meanings coincide, e.g., self-involvement/self-interest is inherent in the meaning of coming or going ἔρχομαι. Verbs can be partially or fully "middle only." If any one of the 1st 4 principal parts has a middle ending, or the 6th replaces the 3rd, that part has taken over for the active voice.',
      'Moveable νs can follow final, short iotas or epsilons. Thus, moveable νs will occur only in 3rd singular, or plural verbs and masculine, or neuter, dative plural participles.',
      'All infinitives have an iota (ειν or αι) except α and ο contract verbs.',
      'An imperative will often follow a vocative.',
      'ἵνα, ἐὰν and οὐ μὴ are tip-offs to the subjunctive mood.',
      'Subjunctives begin their endings with long vowels.',
      'Look at the 3rd principal part to determine which sort of aorist a verb has: σα = 1st aorist (with mutes the σ may be "embedded," e.g., ἔπεμψα); ον = 2nd aorist; λ, μ, ν, or ρ + α = liquid aorist. With "middle only" verbs the endings would be σαμην, ομην, and λ, μ, ν, or ρ + αμην.',
      'A circumflex over a verb ending is a tip-off to a contract verb in the present tense, or a liquid future.',
      'Verbal aspect, rather than temporal location, is the key to understanding Greek verbs: the aorist is perfective and should be viewed as indicating a complete action; the present and imperfect are imperfective and should be viewed as indicating action in progress/process, or unfolding; the perfect and pluperfect are stative and should be viewed as indicating action as a state of affairs; and the future is aspectually vague and may be viewed as indicating expected action.',
      'Participles with the article are adjectival; those without it can be anything. Third declension participles (present active; future active; perfect active; and aorist active and passive) are τ mutes (dental/lingual), a fact which becomes apparent in the genitive singular. All feminine participles follow the first declension.',
      'μεν when followed by a noun ending = a middle, or passive participle; when followed by nothing it = 1st plural.',
      'To identify a verb stem, remove whichever occur of the following: augment, reduplication, tense formative(s), variable vowel, and ending.',
    ],
  },
  {
    num: '5',
    title: 'Mutes (π, β, φ, κ, γ, χ, τ, δ, θ)',
    rules: [
      'Mute spelling changes occur in the dative plural of nouns and before the tense formatives in verbs.',
      'At least 90% of second aorists have mute stems, but many mutes have 1st aorists.',
      '2nd aorists use a stem change, rather than a tense formative, and present system (= pres. & impf.) endings.',
      'Verbs ending in ζω have stems ending in either δ, or γ.',
    ],
  },
  {
    num: '6',
    title: 'Liquids (λ, μ, ν, ρ)',
    rules: [
      'Liquid aorists often change their stems, but use regular aorist endings (no σ).',
      'Liquid futures often have a stem change and use the tense formative ε (εσ, but σ drops) instead of σ. Liquid futures are formed like ε contract verbs and will use a circumflex to mark the contraction (where the rules of accent permit).',
    ],
  },
  {
    num: '7',
    title: 'Contract Verbs (stems ending in α, ε, or ο)',
    rules: [
      'Contractions take place only in the present/imperfective system (present and imperfect tenses) and are marked by a circumflex when the rules of accent allow.',
      'Contract vowels normally lengthen before tense formatives and/or endings out of the present system.',
      'The lexical form of contract verbs retains the contract vowel even though the 1st singular does not (ἀγαπάω = lex. f.; ἀγαπῶ = 1 s.).',
    ],
  },
  {
    num: '8',
    title: 'μι Verbs',
    rules: [
      'Principal parts are particularly helpful, because aorists and perfects are often very similar.',
      'Both the present system (using iota) and the perfect systems (using the usual epsilon) reduplicate; neither the aorist nor the future use reduplication (future tenses tend to be regular with the tense formative σ).',
      'As athematics, they use no connecting vowel (just the stem vowel, so knowing the stems is important) in present system endings (3rd personal endings will be the most difficult to recognize); in general, long vowels in sing. and short vowels in pl. endings.',
      'The verb "to be" (εἰμί) is often no more than "endings" with an accent and breathing mark.',
      'The verb "to be" has only 3 tenses (present, imperfect and future).',
    ],
  },
]

const thingsToKnow = [
  'The content of the verb stuff handout.',
  'λύω in all its forms including the participles (know the regular endings perfectly).',
  'The third declension "regular" endings.',
  'The paradigms for the present participle, ἄρχων, ἄρχοντος and the aorist participle, πᾶς, πᾶσα, πᾶν.',
  'The vocabulary of words occurring 50 times or more, including the principal parts of verbs.',
]

export function SurvivalRulesTab() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-stone-800">Greek Survival Rules</h2>
        <p className="text-sm text-stone-500 mt-1">
          Essential patterns and tips for identifying Greek forms.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map(s => (
          <div key={s.num} className="bg-white rounded-lg border border-stone-200 p-5">
            <h3 className="text-lg font-semibold text-stone-800 mb-3">
              <span className="text-blue-700 mr-2">{s.num}.</span>
              {s.title}
            </h3>
            <ol className="space-y-2" type="a">
              {s.rules.map((rule, i) => (
                <li key={i} className="flex gap-3 text-sm text-stone-700 leading-relaxed">
                  <span className="text-stone-400 font-medium shrink-0">
                    {String.fromCharCode(97 + i)}.
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}

        <div className="bg-amber-50 rounded-lg border border-amber-200 p-5">
          <h3 className="text-lg font-semibold text-amber-900 mb-3">
            Things to Know (or Be Familiar With)
          </h3>
          <ol className="space-y-2">
            {thingsToKnow.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-amber-800 leading-relaxed">
                <span className="text-amber-500 font-medium shrink-0">{i + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4 text-sm text-amber-700 italic text-center">
            May God bless you as you use your Greek :)
          </div>
        </div>
      </div>
    </div>
  )
}
