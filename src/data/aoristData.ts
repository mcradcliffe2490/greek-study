import type { AoristType } from '../types'

export const aoristTypes: AoristType[] = [
  {
    name: '1st Aorist (Sigma Aorist)',
    tenseFormative: 'σα / σε / σαν',
    endingsPattern: 'Active: -σα, -σας, -σε(ν), -σαμεν, -σατε, -σαν\nMiddle: -σάμην, -σω, -σατο, -σάμεθα, -σασθε, -σαντο\nPassive: -θην, -θης, -θη, -θημεν, -θητε, -θησαν',
    stemChange: false,
    keySignal: 'σ before endings (active/middle); θη in passive',
    examples: [
      { verb: 'λαλέω', aoristForm: 'ἐλάλησεν', breakdown: 'augment ε + stem λαλη + σεν' },
      { verb: 'δοξάζω', aoristForm: 'ἐδόξασα', breakdown: 'augment ε + stem δοξα + σα' },
      { verb: 'πιστεύω', aoristForm: 'ἐπίστευσα', breakdown: 'augment ε + stem πιστευ + σα' },
      { verb: 'λύω', aoristForm: 'ἔλυσα', breakdown: 'augment ε + stem λυ + σα (model verb!)' },
      { verb: 'δοξάζω pass.', aoristForm: 'ἐδοξάσθην', breakdown: 'augment + stem + θη + ν (passive)' },
    ],
    obliqueMoods: 'Subj: -σω/-σῃς/-σῃ | Opt: -σαιμι | Impv: -σον/-σατε | Inf: -σαι | Ptc: -σας/-σασα/-σαν',
  },
  {
    name: '2nd Aorist (Strong Aorist)',
    tenseFormative: 'none (stem change only)',
    endingsPattern: 'Active: -ον, -ες, -ε(ν), -ομεν, -ετε, -ον  (= imperfect endings on new stem)\nMiddle: -ομην, -ου, -ετο, -ομεθα, -εσθε, -οντο\n(Passive uses 1st or 2nd aorist passive forms)',
    stemChange: true,
    keySignal: 'Different (often shorter/simpler) stem; looks like imperfect but from a different verb form',
    examples: [
      { verb: 'λέγω', aoristForm: 'εἶπον', breakdown: 'stem εἰπ- (totally different!); Dirty Dozen' },
      { verb: 'ὁράω', aoristForm: 'εἶδον', breakdown: 'stem ἰδ-/εἰδ-; suppletive (Dirty Dozen)' },
      { verb: 'ἔρχομαι', aoristForm: 'ἦλθον', breakdown: 'stem ἐλθ-; highly suppletive (Dirty Dozen)' },
      { verb: 'λαμβάνω', aoristForm: 'ἔλαβον', breakdown: 'stem λαβ-; nasal present infix dropped' },
      { verb: 'γίνομαι', aoristForm: 'ἐγενόμην', breakdown: 'middle; stem γεν-; Dirty Dozen' },
      { verb: 'γινώσκω', aoristForm: 'ἔγνων', breakdown: 'root aorist (athematic); stem γν- (Dirty Dozen)' },
    ],
    obliqueMoods: 'Subj: -ω/-ῃς/-ῃ | Opt: -οιμι | Impv: -ε/-ετε | Inf: -εῖν | Ptc: -ών/-οῦσα/-όν',
  },
  {
    name: 'Liquid Aorist',
    tenseFormative: 'ε (hidden — causes vowel change)',
    endingsPattern: 'Active: -α, -ας, -ε(ν), -αμεν, -ατε, -αν  (like 1st aorist WITHOUT σ)\nNote: stem vowel usually lengthens (ε→ει, α→αν, etc.)',
    stemChange: true,
    keySignal: 'Verb stem ends in λ, μ, ν, or ρ; NO σ; vowel change in stem',
    examples: [
      { verb: 'ἀποστέλλω', aoristForm: 'ἀπέστειλα', breakdown: 'stem ἀποστελ- (λ liquid); ε→ει; no σ' },
      { verb: 'μένω', aoristForm: 'ἔμεινα', breakdown: 'stem μεν- (ν liquid); ε→ει; no σ' },
      { verb: 'κρίνω', aoristForm: 'ἔκρινα', breakdown: 'stem κριν- (ν liquid); no vowel change needed' },
      { verb: 'αἴρω', aoristForm: 'ἦρα', breakdown: 'stem αἰρ- (ρ liquid); augment η; no σ' },
      { verb: 'ἀγγέλλω', aoristForm: 'ἤγγειλα', breakdown: 'stem ἀγγελ- (λ liquid); ε→ει' },
    ],
    obliqueMoods: 'Subj: -ω/-ῃς/-ῃ | Inf: -αι | Ptc: -ας/-ασα/-αν (like 1st aor but no σ)',
  },
]

export interface LiquidFutureInfo {
  description: string
  formation: string
  contraction: string
  examples: { verb: string; liquidFuture: string; note: string }[]
}

export const liquidFuture: LiquidFutureInfo = {
  description: 'Verbs with stems ending in a liquid (λ, μ, ν, ρ) cannot add σ for the future tense formative. Instead they use an ε formative, which contracts with the verb ending.',
  formation: 'stem + ε + ω-contract endings',
  contraction: 'ε + ω → ῶ | ε + εις → εῖς | ε + ει → εῖ | ε + ουμεν → οῦμεν | etc.',
  examples: [
    { verb: 'μένω', liquidFuture: 'μενῶ, μενεῖς, μενεῖ, μενοῦμεν, μενεῖτε, μενοῦσιν', note: 'ν liquid; looks like ε-contract future' },
    { verb: 'ἀποστέλλω', liquidFuture: 'ἀποστελῶ, ἀποστελεῖς, ἀποστελεῖ...', note: 'λ liquid; very common in NT' },
    { verb: 'κρίνω', liquidFuture: 'κρινῶ, κρινεῖς, κρινεῖ...', note: 'ν liquid' },
    { verb: 'ἀποθνῄσκω', liquidFuture: 'ἀποθανοῦμαι (deponent)', note: 'liquid future deponent (ν in stem)' },
    { verb: 'αἴρω', liquidFuture: 'ἀρῶ, ἀρεῖς, ἀρεῖ...', note: 'ρ liquid; augment in aor not fut' },
  ],
}
