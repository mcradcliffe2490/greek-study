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
        label: 'Future Active Indicative',
        rows: [
          { person: '1st', singular: 'δώσω', plural: 'δώσομεν' },
          { person: '2nd', singular: 'δώσεις', plural: 'δώσετε' },
          { person: '3rd', singular: 'δώσει', plural: 'δώσουσι(ν)' },
        ],
      },
      {
        label: '1st Aorist Active Indicative (κ-aorist)',
        rows: [
          { person: '1st', singular: 'ἔδωκα', plural: 'ἐδώκαμεν' },
          { person: '2nd', singular: 'ἔδωκας', plural: 'ἐδώκατε' },
          { person: '3rd', singular: 'ἔδωκε(ν)', plural: 'ἔδωκαν' },
        ],
      },
      {
        label: '2nd Aorist Active Indicative',
        rows: [
          { person: '1st', singular: 'ἔδων', plural: 'ἔδομεν' },
          { person: '2nd', singular: 'ἔδως', plural: 'ἔδοτε' },
          { person: '3rd', singular: 'ἔδω', plural: 'ἔδοσαν' },
        ],
      },
      {
        label: 'Perfect Active Indicative',
        rows: [
          { person: '1st', singular: 'δέδωκα', plural: 'δεδώκαμεν' },
          { person: '2nd', singular: 'δέδωκας', plural: 'δεδώκατε' },
          { person: '3rd', singular: 'δέδωκε(ν)', plural: 'δεδώκαν' },
        ],
      },
      {
        label: 'Middle Indicative (Present)',
        rows: [
          { person: '1st', singular: 'δίδομαι', plural: 'διδόμεθα' },
          { person: '2nd', singular: 'δίδοσαι', plural: 'δίδοσθε' },
          { person: '3rd', singular: 'δίδοται', plural: 'δίδονται' },
        ],
      },
      {
        label: 'Passive Indicative (Aorist / Future)',
        rows: [
          { person: '1st', singular: 'ἐδόθην / δοθήσομαι', plural: 'ἐδόθημεν / δοθησόμεθα' },
          { person: '2nd', singular: 'ἐδόθης / δοθήσῃ', plural: 'ἐδόθητε / δοθήσεσθε' },
          { person: '3rd', singular: 'ἐδόθη / δοθήσεται', plural: 'ἐδόθησαν / δοθήσονται' },
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
          { person: '3rd', singular: 'δῷ / δοῖ', plural: 'δῶσι(ν)' },
        ],
      },
      {
        label: 'Middle Subjunctive (Present / Aorist)',
        rows: [
          { person: '1st', singular: 'δίδωμαι / δῶμαι', plural: 'διδώμεθα / δώμεθα' },
          { person: '2nd', singular: 'διδῷ / δῷ', plural: 'δίδωσθε / δῶσθε' },
          { person: '3rd', singular: 'δίδοται / δῶται', plural: 'δίδωνται / δῶνται' },
        ],
      },
      {
        label: 'Aorist Passive Subjunctive',
        rows: [
          { person: '1st', singular: 'δοθῶ', plural: 'δοθῶμεν' },
          { person: '2nd', singular: 'δοθῇς', plural: 'δοθῆτε' },
          { person: '3rd', singular: 'δοθῇ', plural: 'δοθῶσι(ν)' },
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
          { person: '2nd Aorist Active', singular: 'δοῦναι', plural: '—' },
          { person: 'Present Middle', singular: 'δίδοσθαι', plural: '—' },
          { person: '2nd Aorist Middle', singular: 'δόσθαι', plural: '—' },
          { person: 'Perfect Middle', singular: 'δεδόσθαι', plural: '—' },
          { person: 'Aorist Passive', singular: 'δοθῆναι', plural: '—' },
          { person: 'Future Active', singular: 'δώσειν', plural: '—' },
        ],
      },
      {
        label: 'Participles (Nom. M/F/N)',
        rows: [
          { person: 'Present Active', singular: 'διδούς / διδοῦσα / διδόν', plural: 'διδόντες / διδοῦσαι / διδόντα' },
          { person: 'Aorist Active', singular: 'δούς / δοῦσα / δόν', plural: 'δόντες / δοῦσαι / δόντα' },
          { person: 'Aorist Passive', singular: 'δοθείς / δοθεῖσα / δοθέν', plural: 'δοθέντες / δοθεῖσαι / δοθέντα' },
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
        label: 'Future Active Indicative',
        rows: [
          { person: '1st', singular: 'θήσω', plural: 'θήσομεν' },
          { person: '2nd', singular: 'θήσεις', plural: 'θήσετε' },
          { person: '3rd', singular: 'θήσει', plural: 'θήσουσι(ν)' },
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
        label: 'Perfect Active Indicative',
        rows: [
          { person: '1st', singular: 'τέθεικα', plural: 'τεθείκαμεν' },
          { person: '2nd', singular: 'τέθεικας', plural: 'τεθείκατε' },
          { person: '3rd', singular: 'τέθεικε(ν)', plural: 'τεθείκαν' },
        ],
      },
      {
        label: 'Middle/Passive Indicative (Present / Impf / Fut Mid / Aor Mid)',
        rows: [
          { person: '1st', singular: 'τίθεμαι / ἐτιθέμην / θήσομαι / ἐθέμην', plural: '—' },
          { person: '2nd', singular: 'τίθεσαι / ἐτίθεσο / θήσῃ / ἔθου', plural: '—' },
          { person: '3rd', singular: 'τίθεται / ἐτίθετο / θήσεται / ἔθετο', plural: '—' },
        ],
      },
      {
        label: 'Perfect Middle & Aorist/Future Passive',
        rows: [
          { person: '1st', singular: 'τέθειμαι / ἐτέθην / τεθήσομαι', plural: '—' },
          { person: '2nd', singular: 'τέθεισαι / ἐτέθης / τεθήσῃ', plural: '—' },
          { person: '3rd', singular: 'τέθειται / ἐτέθη / τεθήσεται', plural: '—' },
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
        label: 'Aorist Passive Subjunctive',
        rows: [
          { person: '1st', singular: 'τεθῶ', plural: 'τεθῶμεν' },
          { person: '2nd', singular: 'τεθῇς', plural: 'τεθῆτε' },
          { person: '3rd', singular: 'τεθῇ', plural: 'τεθῶσι(ν)' },
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
          { person: 'Present Middle', singular: 'τίθεσθαι', plural: '—' },
          { person: 'Aorist Middle', singular: 'θέσθαι', plural: '—' },
          { person: 'Aorist Passive', singular: 'τεθῆναι', plural: '—' },
          { person: 'Future Active', singular: 'θήσειν', plural: '—' },
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
        label: 'Imperfect Active Indicative',
        rows: [
          { person: '1st', singular: 'ἵστην', plural: 'ἵσταμεν' },
          { person: '2nd', singular: 'ἵστης', plural: 'ἵστατε' },
          { person: '3rd', singular: 'ἵστη', plural: 'ἵστασαν' },
        ],
      },
      {
        label: 'Future Active / Middle Indicative',
        rows: [
          { person: '1st', singular: 'στήσω / στήσομαι', plural: 'στήσομεν / στησόμεθα' },
          { person: '2nd', singular: 'στήσεις / στήσῃ', plural: 'στήσετε / στήσεσθε' },
          { person: '3rd', singular: 'στήσει / στήσεται', plural: 'στήσουσι(ν) / στήσονται' },
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
        label: 'Aorist Active Subjunctive (1st Aor / 2nd Aor)',
        rows: [
          { person: '1st', singular: 'στήσω / στῶ', plural: 'στήσωμεν / στῶμεν' },
          { person: '2nd', singular: 'στήσῃς / στῇς', plural: 'στήσητε / στῆτε' },
          { person: '3rd', singular: 'στήσῃ / στῇ', plural: 'στήσωσι(ν) / στῶσι(ν)' },
        ],
      },
      {
        label: 'Aorist Passive Subjunctive',
        rows: [
          { person: '1st', singular: 'σταθῶ', plural: 'σταθῶμεν' },
          { person: '2nd', singular: 'σταθῇς', plural: 'σταθῆτε' },
          { person: '3rd', singular: 'σταθῇ', plural: 'σταθῶσι(ν)' },
        ],
      },
      {
        label: 'Active Imperative (Present / Aorist)',
        rows: [
          { person: '2nd', singular: 'ἵστη / στῆθι or στήσον', plural: 'ἵστατε / στῆτε or στήσατε' },
          { person: '3rd', singular: 'ἱστάτω / στήτω', plural: 'ἱστάτωσαν / στήτωσαν' },
        ],
      },
      {
        label: 'Infinitives',
        rows: [
          { person: 'Present Active', singular: 'ἱστάναι', plural: '—' },
          { person: '1st Aorist Active', singular: 'στῆσαι', plural: '—' },
          { person: '2nd Aorist Active', singular: 'στῆναι', plural: '—' },
          { person: 'Perfect Active', singular: 'ἑστάναι / ἑστηκέναι', plural: '—' },
          { person: 'Present Middle', singular: 'ἵστασθαι', plural: '—' },
          { person: 'Aorist Passive', singular: 'σταθῆναι', plural: '—' },
          { person: 'Future Active', singular: 'στήσειν', plural: '—' },
        ],
      },
      {
        label: 'Participles (Nom. M/F/N)',
        rows: [
          { person: 'Present Active', singular: 'ἱστάς / ἱστᾶσα / ἱστάν', plural: 'ἱστάντες / ἱστᾶσαι / ἱστάντα' },
          { person: '2nd Aorist Active', singular: 'στάς / στᾶσα / στάν', plural: 'στάντες / στᾶσαι / στάντα' },
          { person: 'Perfect Active', singular: 'ἑστηκώς / ἑστηκυῖα / ἑστηκός', plural: 'ἑστηκότες / ἑστηκυῖαι / ἑστηκότα' },
          { person: 'Aorist Passive', singular: 'σταθείς / σταθεῖσα / σταθέν', plural: 'σταθέντες / σταθεῖσαι / σταθέντα' },
        ],
      },
    ],
  },
  {
    verb: 'ἀφίημι',
    meaning: 'I forgive, leave, permit',
    stem: 'ἀφ- (compound of ἵημι)',
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
  {
    verb: 'ἀπόλλυμι',
    meaning: 'destroy, kill; (mid.) die, perish',
    stem: 'ὀλ-/ὀλε-',
    forms: [
      {
        label: 'Present Active Indicative',
        rows: [
          { person: '1st', singular: 'ἀπόλλυμι', plural: '—' },
          { person: '2nd', singular: 'ἀπόλλυεις', plural: '—' },
          { person: '3rd', singular: 'ἀπόλλυσι(ν)', plural: '—' },
        ],
      },
      {
        label: 'Principal Parts',
        rows: [
          { person: 'Future', singular: 'ἀπολέσω', plural: '—' },
          { person: 'Aorist', singular: 'ἀπώλεσα', plural: '—' },
          { person: 'Perfect', singular: 'ἀπόλωλα (2nd pf)', plural: '—' },
          { person: 'Aor. Mid.', singular: 'ἀπωλόμην', plural: '—' },
        ],
      },
    ],
  },
  {
    verb: 'ἀνίστημι',
    meaning: 'raise up; (intrans.) rise, stand up',
    stem: 'ἀνα- + στα-/στη-',
    forms: [
      {
        label: 'Principal Parts',
        rows: [
          { person: 'Present', singular: 'ἀνίστημι', plural: '—' },
          { person: 'Future', singular: 'ἀναστήσω', plural: '—' },
          { person: '1st Aorist (trans.)', singular: 'ἀνέστησα', plural: '—' },
          { person: '2nd Aorist (intrans.)', singular: 'ἀνέστην', plural: '—' },
          { person: 'Perfect', singular: 'ἀνέστακα', plural: '—' },
        ],
      },
      {
        label: 'Key Note',
        rows: [
          { person: 'Trans.', singular: '"I raised up" (ἀνέστησα)', plural: 'Like ἵστημι 1st aor.' },
          { person: 'Intrans.', singular: '"I rose/stood up" (ἀνέστην)', plural: 'Like ἵστημι 2nd aor.' },
        ],
      },
    ],
  },
  {
    verb: 'δείκνυμι',
    meaning: 'show, explain, prove',
    stem: 'δεικ-',
    forms: [
      {
        label: 'Present Active Indicative',
        rows: [
          { person: '1st', singular: 'δείκνυμι', plural: '—' },
          { person: '2nd', singular: 'δεικνύεις', plural: '—' },
          { person: '3rd', singular: 'δείκνυσι(ν)', plural: 'δεικνύασι(ν)' },
        ],
      },
      {
        label: 'Principal Parts',
        rows: [
          { person: 'Future', singular: 'δείξω', plural: '—' },
          { person: 'Aorist', singular: 'ἔδειξα', plural: '—' },
          { person: 'Perfect Act.', singular: 'δέδειχα', plural: '—' },
          { person: 'Aorist Pass.', singular: 'ἐδείχθην', plural: '—' },
        ],
      },
      {
        label: 'Key Note',
        rows: [
          { person: 'Note', singular: 'νυμι-class verb; future/aorist are regular (σ formative)', plural: 'Alt. forms: δεικνύω, δεικνύεις...' },
        ],
      },
    ],
  },
  {
    verb: 'παραδίδωμι',
    meaning: 'hand over, entrust, betray',
    stem: 'παρα- + δο-/δω-',
    forms: [
      {
        label: 'Principal Parts',
        rows: [
          { person: 'Present', singular: 'παραδίδωμι', plural: '—' },
          { person: 'Future', singular: 'παραδώσω', plural: '—' },
          { person: 'Aorist', singular: 'παρέδωκα', plural: '—' },
          { person: 'Perfect Act.', singular: 'παραδέδωκα', plural: '—' },
          { person: 'Perfect M/P', singular: 'παραδέδομαι', plural: '—' },
          { person: 'Aorist Pass.', singular: 'παρεδόθην', plural: '—' },
        ],
      },
      {
        label: 'Key Note',
        rows: [
          { person: 'Note', singular: 'Compound of δίδωμι — same κ-aorist pattern', plural: 'Very common in passion narratives' },
        ],
      },
    ],
  },
  {
    verb: 'φημί',
    meaning: 'say, affirm',
    stem: 'φε-/φα-',
    forms: [
      {
        label: 'Present Active Indicative',
        rows: [
          { person: '1st', singular: 'φημί', plural: 'φαμέν' },
          { person: '2nd', singular: 'φής', plural: '—' },
          { person: '3rd', singular: 'φησί(ν)', plural: 'φασί(ν)' },
        ],
      },
      {
        label: 'Key Forms',
        rows: [
          { person: 'Imperfect 3sg', singular: 'ἔφη', plural: '(most common form in NT)' },
        ],
      },
      {
        label: 'Key Note',
        rows: [
          { person: 'Note', singular: 'Defective — mostly 3sg φησίν and ἔφη in NT', plural: 'Stem alternates: φε- (long) / φα- (short)' },
        ],
      },
    ],
  },
  {
    verb: 'συνίημι',
    meaning: 'understand, comprehend',
    stem: 'συν- + ἡ-/ε-',
    forms: [
      {
        label: 'Present Active Indicative',
        rows: [
          { person: '1st', singular: 'συνίημι', plural: '—' },
          { person: '2nd', singular: '—', plural: '—' },
          { person: '3rd', singular: '—', plural: 'συνίουσι(ν)' },
        ],
      },
      {
        label: 'Principal Parts',
        rows: [
          { person: 'Future', singular: 'συνήσω', plural: '—' },
          { person: 'Aorist', singular: 'συνῆκα (κ-aorist)', plural: '—' },
        ],
      },
      {
        label: 'Key Note',
        rows: [
          { person: 'Note', singular: 'Compound of ἵημι (like ἀφίημι)', plural: 'Common in Synoptic parables' },
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
  'Both present (with ι) and perfect (with ε) systems reduplicate; aorist and future do NOT',
  'Infinitives end in -ναι (not -ειν): διδόναι, τιθέναι, ἱστάναι',
  'In the NT, μι verbs often use ω-conjugation forms in some tenses',
  'Principal parts are crucial — aorists and perfects can look very similar',
  'Compounds follow the base verb pattern: παραδίδωμι like δίδωμι, ἀνίστημι like ἵστημι',
]
