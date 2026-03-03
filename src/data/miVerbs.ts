export interface MiVerbParadigm {
  verb: string
  meaning: string
  stem: string
  forms: {
    label: string
    rows: { person: string; singular: string; plural: string }[]
  }[]
}

export const miVerbParadigms: MiVerbParadigm[] = [
  {
    verb: 'δίδωμι',
    meaning: 'I give',
    stem: 'δο-/δω-',
    forms: [
      {
        label: 'Present Active Indicative',
        rows: [
          { person: '1st', singular: 'δίδωμι', plural: 'δίδομεν' },
          { person: '2nd', singular: 'δίδως', plural: 'δίδοτε' },
          { person: '3rd', singular: 'δίδωσι(ν)', plural: 'διδόασι(ν)' },
        ],
      },
      {
        label: 'Imperfect Active Indicative',
        rows: [
          { person: '1st', singular: 'ἐδίδουν', plural: 'ἐδίδομεν' },
          { person: '2nd', singular: 'ἐδίδους', plural: 'ἐδίδοτε' },
          { person: '3rd', singular: 'ἐδίδου', plural: 'ἐδίδοσαν' },
        ],
      },
      {
        label: 'Aorist Active Indicative (κ-aorist)',
        rows: [
          { person: '1st', singular: 'ἔδωκα', plural: 'ἐδώκαμεν' },
          { person: '2nd', singular: 'ἔδωκας', plural: 'ἐδώκατε' },
          { person: '3rd', singular: 'ἔδωκε(ν)', plural: 'ἔδωκαν' },
        ],
      },
      {
        label: 'Present Active Subjunctive',
        rows: [
          { person: '1st', singular: 'διδῶ', plural: 'διδῶμεν' },
          { person: '2nd', singular: 'διδῷς', plural: 'διδῶτε' },
          { person: '3rd', singular: 'διδῷ', plural: 'διδῶσι(ν)' },
        ],
      },
      {
        label: 'Aorist Active Subjunctive',
        rows: [
          { person: '1st', singular: 'δῶ', plural: 'δῶμεν' },
          { person: '2nd', singular: 'δῷς', plural: 'δῶτε' },
          { person: '3rd', singular: 'δῷ / δώσῃ', plural: 'δῶσι(ν)' },
        ],
      },
      {
        label: 'Present Active Imperative',
        rows: [
          { person: '2nd', singular: 'δίδου', plural: 'δίδοτε' },
          { person: '3rd', singular: 'διδότω', plural: 'διδότωσαν' },
        ],
      },
      {
        label: 'Aorist Active Imperative',
        rows: [
          { person: '2nd', singular: 'δός', plural: 'δότε' },
          { person: '3rd', singular: 'δότω', plural: 'δότωσαν' },
        ],
      },
      {
        label: 'Infinitives',
        rows: [
          { person: 'Present Active', singular: 'διδόναι', plural: '—' },
          { person: 'Aorist Active', singular: 'δοῦναι', plural: '—' },
        ],
      },
      {
        label: 'Participles (Nom. M/F/N)',
        rows: [
          { person: 'Present Active', singular: 'διδούς / διδοῦσα / διδόν', plural: 'διδόντες / διδοῦσαι / διδόντα' },
          { person: 'Aorist Active', singular: 'δούς / δοῦσα / δόν', plural: 'δόντες / δοῦσαι / δόντα' },
        ],
      },
    ],
  },
  {
    verb: 'τίθημι',
    meaning: 'I put, place',
    stem: 'θε-/θη-',
    forms: [
      {
        label: 'Present Active Indicative',
        rows: [
          { person: '1st', singular: 'τίθημι', plural: 'τίθεμεν' },
          { person: '2nd', singular: 'τίθης', plural: 'τίθετε' },
          { person: '3rd', singular: 'τίθησι(ν)', plural: 'τιθέασι(ν)' },
        ],
      },
      {
        label: 'Imperfect Active Indicative',
        rows: [
          { person: '1st', singular: 'ἐτίθην', plural: 'ἐτίθεμεν' },
          { person: '2nd', singular: 'ἐτίθεις', plural: 'ἐτίθετε' },
          { person: '3rd', singular: 'ἐτίθει', plural: 'ἐτίθεσαν' },
        ],
      },
      {
        label: 'Aorist Active Indicative (κ-aorist)',
        rows: [
          { person: '1st', singular: 'ἔθηκα', plural: 'ἐθήκαμεν' },
          { person: '2nd', singular: 'ἔθηκας', plural: 'ἐθήκατε' },
          { person: '3rd', singular: 'ἔθηκε(ν)', plural: 'ἔθηκαν' },
        ],
      },
      {
        label: 'Aorist Active Subjunctive',
        rows: [
          { person: '1st', singular: 'θῶ', plural: 'θῶμεν' },
          { person: '2nd', singular: 'θῇς', plural: 'θῆτε' },
          { person: '3rd', singular: 'θῇ', plural: 'θῶσι(ν)' },
        ],
      },
      {
        label: 'Aorist Active Imperative',
        rows: [
          { person: '2nd', singular: 'θές', plural: 'θέτε' },
          { person: '3rd', singular: 'θέτω', plural: 'θέτωσαν' },
        ],
      },
      {
        label: 'Infinitives',
        rows: [
          { person: 'Present Active', singular: 'τιθέναι', plural: '—' },
          { person: 'Aorist Active', singular: 'θεῖναι', plural: '—' },
        ],
      },
      {
        label: 'Participles (Nom. M/F/N)',
        rows: [
          { person: 'Present Active', singular: 'τιθείς / τιθεῖσα / τιθέν', plural: 'τιθέντες / τιθεῖσαι / τιθέντα' },
          { person: 'Aorist Active', singular: 'θείς / θεῖσα / θέν', plural: 'θέντες / θεῖσαι / θέντα' },
        ],
      },
    ],
  },
  {
    verb: 'ἵστημι',
    meaning: 'I stand, set up',
    stem: 'στα-/στη-',
    forms: [
      {
        label: 'Present Active Indicative',
        rows: [
          { person: '1st', singular: 'ἵστημι', plural: 'ἵσταμεν' },
          { person: '2nd', singular: 'ἵστης', plural: 'ἵστατε' },
          { person: '3rd', singular: 'ἵστησι(ν)', plural: 'ἱστᾶσι(ν)' },
        ],
      },
      {
        label: '1st Aorist Active (Transitive: "I set up")',
        rows: [
          { person: '1st', singular: 'ἔστησα', plural: 'ἐστήσαμεν' },
          { person: '2nd', singular: 'ἔστησας', plural: 'ἐστήσατε' },
          { person: '3rd', singular: 'ἔστησε(ν)', plural: 'ἔστησαν' },
        ],
      },
      {
        label: '2nd Aorist Active (Intransitive: "I stood")',
        rows: [
          { person: '1st', singular: 'ἔστην', plural: 'ἔστημεν' },
          { person: '2nd', singular: 'ἔστης', plural: 'ἔστητε' },
          { person: '3rd', singular: 'ἔστη', plural: 'ἔστησαν' },
        ],
      },
      {
        label: 'Perfect Active (= Present meaning: "I am standing")',
        rows: [
          { person: '1st', singular: 'ἕστηκα', plural: 'ἑστήκαμεν' },
          { person: '2nd', singular: 'ἕστηκας', plural: 'ἑστήκατε' },
          { person: '3rd', singular: 'ἕστηκε(ν)', plural: 'ἑστήκασι(ν)' },
        ],
      },
      {
        label: 'Infinitives',
        rows: [
          { person: 'Present Active', singular: 'ἱστάναι', plural: '—' },
          { person: '2nd Aorist Active', singular: 'στῆναι', plural: '—' },
        ],
      },
      {
        label: 'Participles (Nom. M/F/N)',
        rows: [
          { person: 'Present Active', singular: 'ἱστάς / ἱστᾶσα / ἱστάν', plural: 'ἱστάντες / ἱστᾶσαι / ἱστάντα' },
          { person: '2nd Aorist Active', singular: 'στάς / στᾶσα / στάν', plural: 'στάντες / στᾶσαι / στάντα' },
          { person: 'Perfect Active', singular: 'ἑστηκώς / ἑστηκυῖα / ἑστηκός', plural: 'ἑστηκότες / ἑστηκυῖαι / ἑστηκότα' },
        ],
      },
    ],
  },
  {
    verb: 'ἀφίημι',
    meaning: 'I forgive, leave, permit',
    stem: 'ἁφ-/ἁφε-',
    forms: [
      {
        label: 'Present Active Indicative',
        rows: [
          { person: '1st', singular: 'ἀφίημι', plural: 'ἀφίεμεν' },
          { person: '2nd', singular: 'ἀφίεις', plural: 'ἀφίετε' },
          { person: '3rd', singular: 'ἀφίησι(ν)', plural: 'ἀφίουσι(ν)' },
        ],
      },
      {
        label: 'Aorist Active Indicative (κ-aorist)',
        rows: [
          { person: '1st', singular: 'ἀφῆκα', plural: 'ἀφήκαμεν' },
          { person: '2nd', singular: 'ἀφῆκας', plural: 'ἀφήκατε' },
          { person: '3rd', singular: 'ἀφῆκε(ν)', plural: 'ἀφῆκαν' },
        ],
      },
      {
        label: 'Aorist Active Subjunctive',
        rows: [
          { person: '1st', singular: 'ἀφῶ', plural: 'ἀφῶμεν' },
          { person: '2nd', singular: 'ἀφῇς', plural: 'ἀφῆτε' },
          { person: '3rd', singular: 'ἀφῇ', plural: 'ἀφῶσι(ν)' },
        ],
      },
      {
        label: 'Aorist Passive Indicative',
        rows: [
          { person: '1st', singular: 'ἀφέθην', plural: 'ἀφέθημεν' },
          { person: '2nd', singular: 'ἀφέθης', plural: 'ἀφέθητε' },
          { person: '3rd', singular: 'ἀφέθη', plural: 'ἀφέθησαν' },
        ],
      },
      {
        label: 'Present Active Imperative',
        rows: [
          { person: '2nd', singular: 'ἄφες', plural: 'ἄφετε' },
          { person: '3rd', singular: 'ἀφιέτω', plural: 'ἀφιέτωσαν' },
        ],
      },
      {
        label: 'Infinitives',
        rows: [
          { person: 'Present Active', singular: 'ἀφιέναι', plural: '—' },
          { person: 'Aorist Active', singular: 'ἀφεῖναι', plural: '—' },
        ],
      },
    ],
  },
]

export const miVerbKeyPoints = [
  'μι verbs use primary endings WITHOUT thematic vowel (ο/ε) — hence "athematic"',
  'Present tense: reduplication of initial consonant with ι (δι-δω-μι, τι-θη-μι)',
  'Long vowel in singular (ω, η), short vowel in plural (ο, ε, α)',
  'Aorist uses κ formative: ἔδωκα, ἔθηκα, ἀφῆκα (NOT σα like 1st aorist)',
  'ἵστημι has TWO aorists: ἔστησα (transitive) vs ἔστην (intransitive)',
  'ἵστημι perfect (ἕστηκα) has PRESENT meaning: "I am standing"',
  'In the NT, μι verbs often use ω-conjugation forms in some tenses',
  'Infinitives end in -ναι (not -ειν): διδόναι, τιθέναι, ἱστάναι',
]
