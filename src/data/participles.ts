export interface ParticipleCaseForms {
  masculine: string
  feminine: string
  neuter: string
  mascPl: string
  femPl: string
  neutPl: string
}

export type ParticipleCase = 'nominative' | 'genitive' | 'dative' | 'accusative'

export interface ParticipleFormRow {
  tense: string
  voice: string
  nominative: ParticipleCaseForms
  genitive: ParticipleCaseForms
  dative: ParticipleCaseForms
  accusative: ParticipleCaseForms
  declension: string
  signal: string
}

export const participleCaseLabels: Record<ParticipleCase, string> = {
  nominative: 'Nom',
  genitive: 'Gen',
  dative: 'Dat',
  accusative: 'Acc',
}

export const participleFormations: ParticipleFormRow[] = [
  {
    tense: 'Present', voice: 'Active', declension: '3-1-3', signal: '-ων/-ουσα/-ον',
    nominative: { masculine: 'λύ-ων', feminine: 'λύ-ουσα', neuter: 'λῦ-ον', mascPl: 'λύ-οντες', femPl: 'λύ-ουσαι', neutPl: 'λύ-οντα' },
    genitive:   { masculine: 'λύ-οντος', feminine: 'λυ-ούσης', neuter: 'λύ-οντος', mascPl: 'λυ-όντων', femPl: 'λυ-ουσῶν', neutPl: 'λυ-όντων' },
    dative:     { masculine: 'λύ-οντι', feminine: 'λυ-ούσῃ', neuter: 'λύ-οντι', mascPl: 'λύ-ουσι(ν)', femPl: 'λυ-ούσαις', neutPl: 'λύ-ουσι(ν)' },
    accusative: { masculine: 'λύ-οντα', feminine: 'λύ-ουσαν', neuter: 'λῦ-ον', mascPl: 'λύ-οντας', femPl: 'λυ-ούσας', neutPl: 'λύ-οντα' },
  },
  {
    tense: 'Present', voice: 'Middle/Passive', declension: '2-1-2', signal: '-ομενος/-η/-ον',
    nominative: { masculine: 'λυ-όμενος', feminine: 'λυ-ομένη', neuter: 'λυ-όμενον', mascPl: 'λυ-όμενοι', femPl: 'λυ-ομέναι', neutPl: 'λυ-όμενα' },
    genitive:   { masculine: 'λυ-ομένου', feminine: 'λυ-ομένης', neuter: 'λυ-ομένου', mascPl: 'λυ-ομένων', femPl: 'λυ-ομένων', neutPl: 'λυ-ομένων' },
    dative:     { masculine: 'λυ-ομένῳ', feminine: 'λυ-ομένῃ', neuter: 'λυ-ομένῳ', mascPl: 'λυ-ομένοις', femPl: 'λυ-ομέναις', neutPl: 'λυ-ομένοις' },
    accusative: { masculine: 'λυ-όμενον', feminine: 'λυ-ομένην', neuter: 'λυ-όμενον', mascPl: 'λυ-ομένους', femPl: 'λυ-ομένας', neutPl: 'λυ-όμενα' },
  },
  {
    tense: 'Aorist (1st)', voice: 'Active', declension: '3-1-3', signal: '-σας/-σασα/-σαν (no augment!)',
    nominative: { masculine: 'λύ-σας', feminine: 'λύ-σασα', neuter: 'λῦ-σαν', mascPl: 'λύ-σαντες', femPl: 'λύ-σασαι', neutPl: 'λύ-σαντα' },
    genitive:   { masculine: 'λύ-σαντος', feminine: 'λυ-σάσης', neuter: 'λύ-σαντος', mascPl: 'λυ-σάντων', femPl: 'λυ-σασῶν', neutPl: 'λυ-σάντων' },
    dative:     { masculine: 'λύ-σαντι', feminine: 'λυ-σάσῃ', neuter: 'λύ-σαντι', mascPl: 'λύ-σασι(ν)', femPl: 'λυ-σάσαις', neutPl: 'λύ-σασι(ν)' },
    accusative: { masculine: 'λύ-σαντα', feminine: 'λύ-σασαν', neuter: 'λῦ-σαν', mascPl: 'λύ-σαντας', femPl: 'λυ-σάσας', neutPl: 'λύ-σαντα' },
  },
  {
    tense: 'Aorist (1st)', voice: 'Middle', declension: '2-1-2', signal: '-σάμενος/-η/-ον',
    nominative: { masculine: 'λυ-σάμενος', feminine: 'λυ-σαμένη', neuter: 'λυ-σάμενον', mascPl: 'λυ-σάμενοι', femPl: 'λυ-σαμέναι', neutPl: 'λυ-σάμενα' },
    genitive:   { masculine: 'λυ-σαμένου', feminine: 'λυ-σαμένης', neuter: 'λυ-σαμένου', mascPl: 'λυ-σαμένων', femPl: 'λυ-σαμένων', neutPl: 'λυ-σαμένων' },
    dative:     { masculine: 'λυ-σαμένῳ', feminine: 'λυ-σαμένῃ', neuter: 'λυ-σαμένῳ', mascPl: 'λυ-σαμένοις', femPl: 'λυ-σαμέναις', neutPl: 'λυ-σαμένοις' },
    accusative: { masculine: 'λυ-σάμενον', feminine: 'λυ-σαμένην', neuter: 'λυ-σάμενον', mascPl: 'λυ-σαμένους', femPl: 'λυ-σαμένας', neutPl: 'λυ-σάμενα' },
  },
  {
    tense: 'Aorist (1st)', voice: 'Passive', declension: '3-1-3', signal: '-θείς/-θεῖσα/-θέν (θ = passive!)',
    nominative: { masculine: 'λυ-θείς', feminine: 'λυ-θεῖσα', neuter: 'λυ-θέν', mascPl: 'λυ-θέντες', femPl: 'λυ-θεῖσαι', neutPl: 'λυ-θέντα' },
    genitive:   { masculine: 'λυ-θέντος', feminine: 'λυ-θείσης', neuter: 'λυ-θέντος', mascPl: 'λυ-θέντων', femPl: 'λυ-θεισῶν', neutPl: 'λυ-θέντων' },
    dative:     { masculine: 'λυ-θέντι', feminine: 'λυ-θείσῃ', neuter: 'λυ-θέντι', mascPl: 'λυ-θεῖσι(ν)', femPl: 'λυ-θείσαις', neutPl: 'λυ-θεῖσι(ν)' },
    accusative: { masculine: 'λυ-θέντα', feminine: 'λυ-θεῖσαν', neuter: 'λυ-θέν', mascPl: 'λυ-θέντας', femPl: 'λυ-θείσας', neutPl: 'λυ-θέντα' },
  },
  {
    tense: 'Aorist (2nd)', voice: 'Active', declension: '3-1-3', signal: '-ών/-οῦσα/-όν (like pres but aor stem)',
    nominative: { masculine: 'βαλ-ών', feminine: 'βαλ-οῦσα', neuter: 'βαλ-όν', mascPl: 'βαλ-όντες', femPl: 'βαλ-οῦσαι', neutPl: 'βαλ-όντα' },
    genitive:   { masculine: 'βαλ-όντος', feminine: 'βαλ-ούσης', neuter: 'βαλ-όντος', mascPl: 'βαλ-όντων', femPl: 'βαλ-ουσῶν', neutPl: 'βαλ-όντων' },
    dative:     { masculine: 'βαλ-όντι', feminine: 'βαλ-ούσῃ', neuter: 'βαλ-όντι', mascPl: 'βαλ-οῦσι(ν)', femPl: 'βαλ-ούσαις', neutPl: 'βαλ-οῦσι(ν)' },
    accusative: { masculine: 'βαλ-όντα', feminine: 'βαλ-οῦσαν', neuter: 'βαλ-όν', mascPl: 'βαλ-όντας', femPl: 'βαλ-ούσας', neutPl: 'βαλ-όντα' },
  },
  {
    tense: 'Aorist (2nd)', voice: 'Middle', declension: '2-1-2', signal: '-όμενος/-η/-ον (aor stem, like pres mid)',
    nominative: { masculine: 'γεν-όμενος', feminine: 'γεν-ομένη', neuter: 'γεν-όμενον', mascPl: 'γεν-όμενοι', femPl: 'γεν-ομέναι', neutPl: 'γεν-όμενα' },
    genitive:   { masculine: 'γεν-ομένου', feminine: 'γεν-ομένης', neuter: 'γεν-ομένου', mascPl: 'γεν-ομένων', femPl: 'γεν-ομένων', neutPl: 'γεν-ομένων' },
    dative:     { masculine: 'γεν-ομένῳ', feminine: 'γεν-ομένῃ', neuter: 'γεν-ομένῳ', mascPl: 'γεν-ομένοις', femPl: 'γεν-ομέναις', neutPl: 'γεν-ομένοις' },
    accusative: { masculine: 'γεν-όμενον', feminine: 'γεν-ομένην', neuter: 'γεν-όμενον', mascPl: 'γεν-ομένους', femPl: 'γεν-ομένας', neutPl: 'γεν-όμενα' },
  },
  {
    tense: 'Perfect', voice: 'Active', declension: '3-1-3', signal: '-κώς/-κυῖα/-κός (reduplication + κ)',
    nominative: { masculine: 'λελυ-κώς', feminine: 'λελυ-κυῖα', neuter: 'λελυ-κός', mascPl: 'λελυ-κότες', femPl: 'λελυ-κυῖαι', neutPl: 'λελυ-κότα' },
    genitive:   { masculine: 'λελυ-κότος', feminine: 'λελυ-κυίας', neuter: 'λελυ-κότος', mascPl: 'λελυ-κότων', femPl: 'λελυ-κυιῶν', neutPl: 'λελυ-κότων' },
    dative:     { masculine: 'λελυ-κότι', feminine: 'λελυ-κυίᾳ', neuter: 'λελυ-κότι', mascPl: 'λελυ-κόσι(ν)', femPl: 'λελυ-κυίαις', neutPl: 'λελυ-κόσι(ν)' },
    accusative: { masculine: 'λελυ-κότα', feminine: 'λελυ-κυῖαν', neuter: 'λελυ-κός', mascPl: 'λελυ-κότας', femPl: 'λελυ-κυίας', neutPl: 'λελυ-κότα' },
  },
  {
    tense: 'Perfect', voice: 'Middle/Passive', declension: '2-1-2', signal: '-μένος/-η/-ον (reduplication + μ)',
    nominative: { masculine: 'λελυ-μένος', feminine: 'λελυ-μένη', neuter: 'λελυ-μένον', mascPl: 'λελυ-μένοι', femPl: 'λελυ-μέναι', neutPl: 'λελυ-μένα' },
    genitive:   { masculine: 'λελυ-μένου', feminine: 'λελυ-μένης', neuter: 'λελυ-μένου', mascPl: 'λελυ-μένων', femPl: 'λελυ-μένων', neutPl: 'λελυ-μένων' },
    dative:     { masculine: 'λελυ-μένῳ', feminine: 'λελυ-μένῃ', neuter: 'λελυ-μένῳ', mascPl: 'λελυ-μένοις', femPl: 'λελυ-μέναις', neutPl: 'λελυ-μένοις' },
    accusative: { masculine: 'λελυ-μένον', feminine: 'λελυ-μένην', neuter: 'λελυ-μένον', mascPl: 'λελυ-μένους', femPl: 'λελυ-μένας', neutPl: 'λελυ-μένα' },
  },
]

export interface ParticipleUse {
  name: string
  category: 'adjectival' | 'adverbial' | 'substantival' | 'special'
  description: string
  clues: string[]
  examples: { greek: string; translation: string; note?: string }[]
}

export const participleUses: ParticipleUse[] = [
  {
    name: 'Attributive (Adjectival)',
    category: 'adjectival',
    description: 'Modifies a noun like an adjective. Always in attributive position (article-ptc-noun or article-noun-article-ptc).',
    clues: ['Preceded by article that matches the noun in gender/case/number', 'Slot: ὁ λύων ἄνθρωπος = "the loosing man"', 'Can translate as relative clause: "the man who is loosing"'],
    examples: [
      { greek: 'ὁ πιστεύων εἰς αὐτόν', translation: 'the one who believes in him', note: 'attributive, used substantivally' },
      { greek: 'τὸ ὕδωρ τὸ ζῶν', translation: 'the living water', note: 'attributive ptc modifying ὕδωρ' },
      { greek: 'ὁ πέμψας με', translation: 'the one who sent me', note: 'common formula in John' },
    ],
  },
  {
    name: 'Substantival',
    category: 'substantival',
    description: 'The participle (with article) functions as a noun — "the one who ___-ing." Very common in John.',
    clues: ['Has article but no noun being modified', 'Can be subject or object of main verb', 'Article tells you gender (ὁ = masculine person, ἡ = feminine, τό = neuter/abstract)'],
    examples: [
      { greek: 'ὁ πιστεύων ἔχει ζωὴν αἰώνιον', translation: 'The one who believes has eternal life', note: 'subject of ἔχει' },
      { greek: 'ἀγαπᾷ τοὺς πιστεύοντας', translation: 'He loves those who believe', note: 'object; plural' },
      { greek: 'τὰ γεγραμμένα', translation: 'the things that have been written', note: 'neuter plural substantival' },
    ],
  },
  {
    name: 'Adverbial – Temporal',
    category: 'adverbial',
    description: 'Expresses the time of the participle\'s action relative to the main verb. Tense matters: present = simultaneous; aorist = prior action.',
    clues: ['No article (anarthrous)', 'Translate: "while ___-ing" (present) or "after ___-ing / having ___-ed" (aorist)', 'Nominative participle usually agrees with subject of main verb'],
    examples: [
      { greek: 'ἐπάρας τοὺς ὀφθαλμοὺς εἶπεν', translation: 'Having lifted up his eyes, he said', note: 'John 17:1 — aor ptc = prior action' },
      { greek: 'τελειώσας τὸ ἔργον ἐδόξασά σε', translation: 'Having completed the work, I glorified you', note: 'John 17:4 — prior action' },
      { greek: 'λέγων αὐτοῖς ἐδίδασκεν', translation: 'While speaking, he was teaching them', note: 'pres ptc = simultaneous' },
    ],
  },
  {
    name: 'Adverbial – Causal',
    category: 'adverbial',
    description: 'Gives the reason or cause for the main action.',
    clues: ['Translate: "because ___-ing" or "since ___"', 'Context makes causality clear', 'Often anarthrous nominative'],
    examples: [
      { greek: 'χαίρω ὅτι κεκοίμηται, ἵνα πιστεύσητε', translation: 'I am glad because he has died, so that you may believe', note: 'ὅτι here, but ptc can express cause' },
      { greek: 'πεπιστευκὼς σῴζεται', translation: 'He is saved because he has believed', note: 'causal perfect ptc' },
    ],
  },
  {
    name: 'Adverbial – Conditional',
    category: 'adverbial',
    description: 'The participle expresses a condition: "if ___-ing." Equivalent to a conditional clause.',
    clues: ['Translate: "if ___-ing"', 'The main clause gives the result', 'Common in wisdom/ethical sayings'],
    examples: [
      { greek: 'ἀγαπῶν αὐτὸν τηρεῖ τὰς ἐντολάς', translation: 'If one loves him, he keeps his commandments', note: 'conditional ptc' },
      { greek: 'μένων ἐν ἐμοί ποιεῖ καρπόν', translation: 'If one abides in me, he bears fruit', note: 'conditional ptc (John 15 type)' },
    ],
  },
  {
    name: 'Adverbial – Concessive',
    category: 'adverbial',
    description: 'The action of the participle is unexpected given the main verb. "Although ___-ing."',
    clues: ['Translate: "although ___-ing" or "even though"', 'Often marked by καίπερ (although)', 'Contrast between ptc and main verb action'],
    examples: [
      { greek: 'καίπερ ὢν υἱός, ἔμαθεν ἀφ᾿ ὧν ἔπαθεν τὴν ὑπακοήν', translation: 'Although being a Son, he learned obedience from what he suffered', note: 'Heb 5:8; καίπερ + ptc' },
    ],
  },
  {
    name: 'Adverbial – Means',
    category: 'adverbial',
    description: 'Describes how or by what means the main action is accomplished.',
    clues: ['Translate: "by ___-ing"', 'Often answers the question "How?"'],
    examples: [
      { greek: 'ἦλθεν κηρύσσων τὸ εὐαγγέλιον', translation: 'He came by preaching the gospel', note: 'means of coming' },
      { greek: 'ἔζησεν ὑπακούων τῷ πατρί', translation: 'He lived by obeying the Father', note: 'means of living' },
    ],
  },
  {
    name: 'Attendant Circumstance',
    category: 'adverbial',
    description: 'Describes an action that accompanies the main verb. Often translated as a coordinate verb with "and." Very common in narrative.',
    clues: ['Usually aorist participle + aorist main verb', 'Nominative case, agrees with subject', 'Translate as coordinate clause: "he ___-ed and ___-ed"', 'Common in Matthew, Mark for rapid narrative'],
    examples: [
      { greek: 'ἐπάρας τοὺς ὀφθαλμοὺς αὐτοῦ εἶπεν', translation: 'He lifted up his eyes and said', note: 'John 17:1 — attendant circumstance reading' },
      { greek: 'ἀποκριθεὶς εἶπεν', translation: 'He answered and said', note: 'formulaic in John (ἀποκριθείς = 1aor pass ptc of ἀποκρίνομαι)' },
      { greek: 'προσελθὼν εἶπεν αὐτῷ', translation: 'He came to him and said', note: 'narrative; attendant circumstance' },
    ],
  },
  {
    name: 'Genitive Absolute',
    category: 'special',
    description: 'A noun/pronoun + participle both in the genitive that are grammatically independent from the main clause. Usually temporal or causal.',
    clues: ['Both noun and participle in genitive case', 'The genitive noun is NOT the subject of the main verb', 'Translate: "While/When/After [noun] [verb-ing]..."', 'The noun is often a pronoun (αὐτοῦ λέγοντος)'],
    examples: [
      { greek: 'αὐτοῦ λαλοῦντος ταῦτα', translation: 'While he was saying these things', note: 'αὐτοῦ (gen) + λαλοῦντος (gen ptc)' },
      { greek: 'ἐκείνου δὲ πορευομένου', translation: 'While that one was going', note: 'gen abs; separate from main clause subject' },
      { greek: 'ἀκουόντων αὐτῶν', translation: 'While they were listening', note: 'gen abs' },
    ],
  },
  {
    name: 'Periphrastic',
    category: 'special',
    description: 'A form of εἰμί + participle used instead of a single finite verb form. Emphasizes ongoing state or condition.',
    clues: ['εἰμί (finite) + participle (usually present or perfect)', 'Imperfect εἰμί + present ptc = imperfect progressive', 'εἰμί + perfect ptc = stative/resultant meaning'],
    examples: [
      { greek: 'ἦν διδάσκων αὐτούς', translation: 'He was (in the process of) teaching them', note: 'impf εἰμί + pres ptc = progressive imperfect' },
      { greek: 'ἔσῃ σιωπῶν', translation: 'You will be silent', note: 'fut εἰμί + pres ptc' },
      { greek: 'ἦν γεγραμμένον', translation: 'It had been written / was written', note: 'impf εἰμί + perf pass ptc' },
    ],
  },
]
