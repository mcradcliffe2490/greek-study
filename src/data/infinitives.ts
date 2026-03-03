export interface InfinitiveUse {
  name: string
  description: string
  clues: string[]
  examples: { greek: string; translation: string; note?: string }[]
}

export interface InfinitiveForm {
  tense: string
  voice: string
  form: string
  note?: string
}

export const infinitiveForms: InfinitiveForm[] = [
  { tense: 'Present', voice: 'Active', form: 'λύ-ειν', note: 'stem + ειν' },
  { tense: 'Present', voice: 'Middle/Passive', form: 'λύ-εσθαι', note: 'stem + εσθαι' },
  { tense: 'Aorist (1st)', voice: 'Active', form: 'λῦ-σαι', note: 'stem + σαι (no augment!)' },
  { tense: 'Aorist (1st)', voice: 'Middle', form: 'λύ-σασθαι', note: 'stem + σασθαι' },
  { tense: 'Aorist (1st)', voice: 'Passive', form: 'λυ-θῆναι', note: 'stem + θηναι' },
  { tense: 'Aorist (2nd)', voice: 'Active', form: 'βαλ-εῖν', note: '2nd aor stem + εῖν' },
  { tense: 'Aorist (2nd)', voice: 'Middle', form: 'γεν-έσθαι', note: '2nd aor stem + εσθαι' },
  { tense: 'Perfect', voice: 'Active', form: 'λελυ-κέναι', note: 'reduplication + stem + κεναι' },
  { tense: 'Perfect', voice: 'Middle/Passive', form: 'λελύ-σθαι', note: 'reduplication + stem + σθαι' },
  { tense: 'Present', voice: 'Active (εἰμί)', form: 'εἶναι', note: 'irregular; very common' },
  { tense: 'Future', voice: 'Active', form: 'λύ-σειν', note: 'stem + σειν (rare)' },
]

export const infinitiveUses: InfinitiveUse[] = [
  {
    name: 'Complementary',
    description: 'Completes the meaning of certain verbs — especially volitional (want, wish), ability (can, am able), and obligation (must, ought) verbs.',
    clues: ['After verbs like: θέλω (want), δύναμαι (am able), δεῖ (it is necessary), ὀφείλω (ought), ἄρχομαι (begin)', 'No article on the infinitive', 'Infinitive is in same clause as main verb'],
    examples: [
      { greek: 'θέλω ποιεῖν τὸ θέλημά σου', translation: 'I want to do your will', note: 'complementary after θέλω' },
      { greek: 'δύναται σῴζειν αὐτούς', translation: 'He is able to save them', note: 'complementary after δύναμαι' },
      { greek: 'δεῖ αὐτὸν βασιλεύειν', translation: 'It is necessary for him to reign', note: 'impersonal δεῖ + acc-inf' },
      { greek: 'ἤρξαντο λέγειν', translation: 'They began to speak', note: 'complementary after ἄρχομαι' },
    ],
  },
  {
    name: 'Substantival',
    description: 'The infinitive functions as a noun — as subject, direct object, or appositive. Often has the neuter article τό.',
    clues: ['Can replace "it" or "the act of ___"', 'Often preceded by τό (articular infinitive)', 'Fills subject or object slot of the sentence'],
    examples: [
      { greek: 'τὸ ζῆν Χριστός', translation: 'To live is Christ / Living is Christ', note: 'subject' },
      { greek: 'ζητεῖτε τὴν δόξαν', translation: 'Seek the glory', note: 'NB: contrast with inf as obj' },
      { greek: 'θέλω τὸ ἀναλῦσαι', translation: 'I desire to depart (the departing)', note: 'object (articular)' },
      { greek: 'αὕτη ἐστὶν ἡ ἐντολή, ἵνα ἀγαπᾶτε', translation: 'This is the commandment, that you love', note: 'appositive (ἵνα clause alternative)' },
    ],
  },
  {
    name: 'Purpose (Final)',
    description: 'Expresses the purpose or goal of the main verb\'s action. Uses specific preposition + articular infinitive constructions.',
    clues: ['εἰς τό + infinitive = "in order to"', 'πρός τό + infinitive = "for the purpose of"', 'ὥστε + infinitive = sometimes purpose', 'Simple infinitive after verbs of motion'],
    examples: [
      { greek: 'ἦλθεν εἰς τὸ σῴζειν αὐτούς', translation: 'He came in order to save them', note: 'εἰς τό + inf' },
      { greek: 'πρὸς τὸ θεαθῆναι αὐτοῖς', translation: 'for the purpose of being seen by them', note: 'πρός τό + inf' },
      { greek: 'ἦλθεν κηρύξαι', translation: 'He came to preach', note: 'simple inf after verb of motion' },
    ],
  },
  {
    name: 'Result (Consecutive)',
    description: 'Expresses the result (actual or intended) of the main action.',
    clues: ['ὥστε + infinitive = "so that, with the result that"', 'The result is actual (not just intended)'],
    examples: [
      { greek: 'ἐπίστευσαν ὥστε σῴζεσθαι', translation: 'They believed so as to be saved', note: 'ὥστε + inf for result' },
      { greek: 'τί ποιήσω ὥστε ζωὴν αἰώνιον κληρονομῆσαι;', translation: 'What must I do to inherit eternal life?', note: 'ὥστε + inf' },
    ],
  },
  {
    name: 'Causal',
    description: 'Expresses the reason or cause. Always uses the articular infinitive with διά.',
    clues: ['διὰ τό + infinitive = "because of ___-ing"', 'The subject of the infinitive is in the accusative'],
    examples: [
      { greek: 'διὰ τὸ ἀγαπᾶν αὐτὸν τοὺς μαθητάς', translation: 'because he loves his disciples', note: 'διὰ τό + inf; αὐτόν is acc subject' },
      { greek: 'διὰ τὸ μὴ ἔχειν ῥίζαν', translation: 'because of not having root', note: 'negated with μή' },
    ],
  },
  {
    name: 'Temporal',
    description: 'Expresses time relationship to the main verb. Uses articular infinitive with specific temporal prepositions.',
    clues: ['πρὸ τοῦ + inf = "before ___-ing"', 'ἐν τῷ + inf = "while ___-ing" (during)', 'μετὰ τό + inf = "after ___-ing"'],
    examples: [
      { greek: 'πρὸ τοῦ τὸν κόσμον εἶναι', translation: 'before the world existed', note: 'John 17:5! πρὸ τοῦ + inf' },
      { greek: 'ἐν τῷ σπείρειν αὐτόν', translation: 'while he was sowing', note: 'ἐν τῷ + inf (linear action)' },
      { greek: 'μετὰ τὸ ἐγερθῆναί με', translation: 'after I am raised', note: 'μετὰ τό + aor pass inf' },
    ],
  },
]
