export interface ThirdDeclNoun {
  nominative: string
  genitive: string
  article: string
  meaning: string
  stemType: string
  stem: string
  pattern: string
}

export interface ThirdDeclCategory {
  name: string
  description: string
  nouns: ThirdDeclNoun[]
}

export const thirdDeclCategories: ThirdDeclCategory[] = [
  {
    name: 'Mute (Stop) Stems',
    description: 'Stems ending in a stop consonant (labial π/β/φ, palatal κ/γ/χ, dental τ/δ/θ). Dental drops before σ in nominative.',
    nouns: [
      { nominative: 'σάρξ', genitive: 'σαρκός', article: 'ἡ', meaning: 'flesh', stemType: 'palatal (κ)', stem: 'σαρκ-', pattern: 'κ+ς→ξ in nom.' },
      { nominative: 'νύξ', genitive: 'νυκτός', article: 'ἡ', meaning: 'night', stemType: 'palatal (κτ)', stem: 'νυκτ-', pattern: 'κτ+ς→ξ in nom.' },
      { nominative: 'ἐλπίς', genitive: 'ἐλπίδος', article: 'ἡ', meaning: 'hope', stemType: 'dental (δ)', stem: 'ἐλπιδ-', pattern: 'δ drops before σ' },
      { nominative: 'χάρις', genitive: 'χάριτος', article: 'ἡ', meaning: 'grace', stemType: 'dental (τ)', stem: 'χαριτ-', pattern: 'τ drops before σ' },
      { nominative: 'πούς', genitive: 'ποδός', article: 'ὁ', meaning: 'foot', stemType: 'dental (δ)', stem: 'ποδ-', pattern: 'δ drops before σ; vowel change' },
    ],
  },
  {
    name: 'Liquid Stems (λ, ρ)',
    description: 'Stems ending in λ or ρ. Nominative typically has no ending or stem-vowel change.',
    nouns: [
      { nominative: 'πατήρ', genitive: 'πατρός', article: 'ὁ', meaning: 'father', stemType: 'ρ-liquid', stem: 'πατρ-/πατερ-', pattern: 'ablaut: η in nom, ε in other cases, zero in gen/dat' },
      { nominative: 'μήτηρ', genitive: 'μητρός', article: 'ἡ', meaning: 'mother', stemType: 'ρ-liquid', stem: 'μητρ-/μητερ-', pattern: 'same ablaut as πατήρ' },
      { nominative: 'ἀνήρ', genitive: 'ἀνδρός', article: 'ὁ', meaning: 'man, husband', stemType: 'ρ-liquid', stem: 'ἀνδρ-/ἀνερ-', pattern: 'δ inserted before ρ in oblique' },
      { nominative: 'σωτήρ', genitive: 'σωτῆρος', article: 'ὁ', meaning: 'savior', stemType: 'ρ-liquid', stem: 'σωτηρ-', pattern: 'regular ρ-stem' },
    ],
  },
  {
    name: 'Nasal Stems (ν)',
    description: 'Stems ending in ν. The ν drops before σ in the nominative.',
    nouns: [
      { nominative: 'αἰών', genitive: 'αἰῶνος', article: 'ὁ', meaning: 'age, eternity', stemType: 'ν-nasal', stem: 'αἰων-', pattern: 'ν drops in nom.' },
      { nominative: 'ποιμήν', genitive: 'ποιμένος', article: 'ὁ', meaning: 'shepherd', stemType: 'ν-nasal', stem: 'ποιμεν-', pattern: 'η in nom, ε in oblique' },
      { nominative: 'ἡγεμών', genitive: 'ἡγεμόνος', article: 'ὁ', meaning: 'leader, governor', stemType: 'ν-nasal', stem: 'ἡγεμον-', pattern: 'ω in nom, ο in oblique' },
    ],
  },
  {
    name: 'Sibilant Stems (σ/εσ)',
    description: 'Stems originally ending in σ. The intervocalic σ drops and vowels contract. Common neuter pattern.',
    nouns: [
      { nominative: 'γένος', genitive: 'γένους', article: 'τό', meaning: 'race, kind', stemType: 'εσ-stem (neuter)', stem: 'γενεσ-', pattern: 'σ drops between vowels → contraction: εσ→ους in gen' },
      { nominative: 'ἔθνος', genitive: 'ἔθνους', article: 'τό', meaning: 'nation', stemType: 'εσ-stem (neuter)', stem: 'ἐθνεσ-', pattern: 'same pattern as γένος' },
      { nominative: 'ὄρος', genitive: 'ὄρους', article: 'τό', meaning: 'mountain', stemType: 'εσ-stem (neuter)', stem: 'ὀρεσ-', pattern: 'neuter εσ-stem' },
      { nominative: 'πλῆθος', genitive: 'πλήθους', article: 'τό', meaning: 'multitude', stemType: 'εσ-stem (neuter)', stem: 'πληθεσ-', pattern: 'neuter εσ-stem' },
    ],
  },
  {
    name: 'Vowel & Diphthong Stems',
    description: 'Stems ending in a vowel (ι, υ, ευ). Often show ablaut or special nominative forms.',
    nouns: [
      { nominative: 'πόλις', genitive: 'πόλεως', article: 'ἡ', meaning: 'city', stemType: 'ι-stem', stem: 'πολι-/πολε-', pattern: 'ι→ε in oblique; gen -εως (not -ος)' },
      { nominative: 'πίστις', genitive: 'πίστεως', article: 'ἡ', meaning: 'faith', stemType: 'ι-stem', stem: 'πιστι-/πιστε-', pattern: 'same as πόλις' },
      { nominative: 'δύναμις', genitive: 'δυνάμεως', article: 'ἡ', meaning: 'power', stemType: 'ι-stem', stem: 'δυναμι-/δυναμε-', pattern: 'same as πόλις' },
      { nominative: 'βασιλεύς', genitive: 'βασιλέως', article: 'ὁ', meaning: 'king', stemType: 'ευ-stem', stem: 'βασιλευ-/βασιλε-', pattern: 'υ drops before vowel; gen -εως' },
      { nominative: 'ἱερεύς', genitive: 'ἱερέως', article: 'ὁ', meaning: 'priest', stemType: 'ευ-stem', stem: 'ἱερευ-/ἱερε-', pattern: 'same as βασιλεύς' },
      { nominative: 'γραμματεύς', genitive: 'γραμματέως', article: 'ὁ', meaning: 'scribe', stemType: 'ευ-stem', stem: 'γραμματευ-', pattern: 'same as βασιλεύς' },
    ],
  },
  {
    name: 'Irregular / Special',
    description: 'High-frequency irregular third declension nouns.',
    nouns: [
      { nominative: 'ὕδωρ', genitive: 'ὕδατος', article: 'τό', meaning: 'water', stemType: 'τ-stem (neuter)', stem: 'ὑδατ-', pattern: 'nom uses -ωρ, oblique ὑδατ-' },
      { nominative: 'ὄνομα', genitive: 'ὀνόματος', article: 'τό', meaning: 'name', stemType: 'τ-stem (neuter)', stem: 'ὀνοματ-', pattern: 'neuter in -μα, gen -ματος' },
      { nominative: 'πνεῦμα', genitive: 'πνεύματος', article: 'τό', meaning: 'spirit, wind', stemType: 'τ-stem (neuter)', stem: 'πνευματ-', pattern: 'neuter in -μα, gen -ματος' },
      { nominative: 'σῶμα', genitive: 'σώματος', article: 'τό', meaning: 'body', stemType: 'τ-stem (neuter)', stem: 'σωματ-', pattern: 'neuter in -μα, gen -ματος' },
      { nominative: 'αἷμα', genitive: 'αἵματος', article: 'τό', meaning: 'blood', stemType: 'τ-stem (neuter)', stem: 'αἱματ-', pattern: 'neuter in -μα, gen -ματος' },
    ],
  },
]

export const thirdDeclEndingsTable = {
  label: 'Third Declension Endings',
  headers: ['Case', 'Masc/Fem', 'Neuter'],
  rows: [
    { case: 'Nom. Sg.', mascFem: '-ς or stem change', neuter: '— (bare stem)' },
    { case: 'Gen. Sg.', mascFem: '-ος', neuter: '-ος' },
    { case: 'Dat. Sg.', mascFem: '-ι', neuter: '-ι' },
    { case: 'Acc. Sg.', mascFem: '-α / -ν', neuter: '— (= nom.)' },
    { case: 'Nom. Pl.', mascFem: '-ες', neuter: '-α' },
    { case: 'Gen. Pl.', mascFem: '-ων', neuter: '-ων' },
    { case: 'Dat. Pl.', mascFem: '-σι(ν)', neuter: '-σι(ν)' },
    { case: 'Acc. Pl.', mascFem: '-ας / -ες', neuter: '-α (= nom.)' },
  ],
}
