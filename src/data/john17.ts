import type { Verse, Token } from '../types'

// Helper to make a non-verb token
function w(word: string): Token { return { word, isVerb: false } }

export const john17: Verse[] = [
  {
    verseNum: 1,
    rawText: 'Ταῦτα ἐλάλησεν Ἰησοῦς, καὶ ἐπάρας τοὺς ὀφθαλμοὺς αὐτοῦ εἰς τὸν οὐρανὸν εἶπεν· Πάτερ, ἐλήλυθεν ἡ ὥρα· δόξασόν σου τὸν υἱόν, ἵνα ὁ υἱὸς δοξάσῃ σέ,',
    tokens: [
      w('Ταῦτα'),
      { word: 'ἐλάλησεν', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular', lexicalForm: 'λαλέω', translation: 'he spoke', note: '1st aorist; -σεν ending' } },
      w('Ἰησοῦς,'), w('καὶ'),
      { word: 'ἐπάρας', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'participle', person: 'N/A', number: 'singular', gender: 'masculine', case: 'nominative', lexicalForm: 'ἐπαίρω', translation: 'having lifted up', note: 'Aorist active participle, nom. masc. sg. — liquid aorist of ἐπαίρω; attendant circumstance' } },
      w('τοὺς'), w('ὀφθαλμοὺς'), w('αὐτοῦ'), w('εἰς'), w('τὸν'), w('οὐρανὸν'),
      { word: 'εἶπεν·', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular', lexicalForm: 'λέγω', translation: 'he said', note: '2nd aorist; suppletive stem εἰπ-; Dirty Dozen verb' } },
      w('Πάτερ,'),
      { word: 'ἐλήλυθεν', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular', lexicalForm: 'ἔρχομαι', translation: 'has come', note: 'Perfect active; reduplication ἐλ-; Dirty Dozen verb' } },
      w('ἡ'), w('ὥρα·'),
      { word: 'δόξασόν', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'imperative', person: '2nd', number: 'singular', lexicalForm: 'δοξάζω', translation: 'glorify!', note: 'Aorist active imperative 2sg' } },
      w('σου'), w('τὸν'), w('υἱόν,'), w('ἵνα'), w('ὁ'), w('υἱὸς'),
      { word: 'δοξάσῃ', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'singular', lexicalForm: 'δοξάζω', translation: 'he might glorify', note: 'Aorist active subjunctive 3sg; triggered by ἵνα' } },
      w('σέ,'),
    ]
  },
  {
    verseNum: 2,
    rawText: 'καθὼς ἔδωκας αὐτῷ ἐξουσίαν πάσης σαρκός, ἵνα πᾶν ὃ δέδωκας αὐτῷ δώσῃ αὐτοῖς ζωὴν αἰώνιον.',
    tokens: [
      w('καθὼς'),
      { word: 'ἔδωκας', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you gave', note: 'κ-aorist of δίδωμι (μι verb); 2sg' } },
      w('αὐτῷ'), w('ἐξουσίαν'), w('πάσης'), w('σαρκός,'), w('ἵνα'), w('πᾶν'), w('ὃ'),
      { word: 'δέδωκας', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι; reduplication δε-' } },
      w('αὐτῷ'),
      { word: 'δώσῃ', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'he might give', note: 'Aorist active subjunctive 3sg of δίδωμι; ἵνα clause' } },
      w('αὐτοῖς'), w('ζωὴν'), w('αἰώνιον.'),
    ]
  },
  {
    verseNum: 3,
    rawText: 'αὕτη δέ ἐστιν ἡ αἰώνιος ζωή, ἵνα γινώσκωσιν σὲ τὸν μόνον ἀληθινὸν θεὸν καὶ ὃν ἀπέστειλας Ἰησοῦν Χριστόν.',
    tokens: [
      w('αὕτη'), w('δέ'),
      { word: 'ἐστιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular', lexicalForm: 'εἰμί', translation: 'is', note: 'εἰμί present indicative 3sg' } },
      w('ἡ'), w('αἰώνιος'), w('ζωή,'), w('ἵνα'),
      { word: 'γινώσκωσιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'γινώσκω', translation: 'they might know', note: 'Present active subjunctive 3pl; Dirty Dozen verb; ἵνα clause expressing content of eternal life' } },
      w('σὲ'), w('τὸν'), w('μόνον'), w('ἀληθινὸν'), w('θεὸν'), w('καὶ'), w('ὃν'),
      { word: 'ἀπέστειλας', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀποστέλλω', translation: 'you sent', note: 'LIQUID AORIST — stem ἀποστελ- (λ); vowel change ε→ει; -ας ending (no σ); augment ε→ε' } },
      w('Ἰησοῦν'), w('Χριστόν.'),
    ]
  },
  {
    verseNum: 4,
    rawText: 'ἐγώ σε ἐδόξασα ἐπὶ τῆς γῆς, τὸ ἔργον τελειώσας ὃ δέδωκάς μοι ἵνα ποιήσω·',
    tokens: [
      w('ἐγώ'), w('σε'),
      { word: 'ἐδόξασα', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'δοξάζω', translation: 'I glorified', note: '1st aorist; -σα ending; augment ε' } },
      w('ἐπὶ'), w('τῆς'), w('γῆς,'), w('τὸ'), w('ἔργον'),
      { word: 'τελειώσας', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'participle', person: 'N/A', number: 'singular', gender: 'masculine', case: 'nominative', lexicalForm: 'τελειόω', translation: 'having completed', note: 'Aorist active participle nom. masc. sg.; adverbial (temporal/attendant circumstance)' } },
      w('ὃ'),
      { word: 'δέδωκάς', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι (μι verb)' } },
      w('μοι'), w('ἵνα'),
      { word: 'ποιήσω·', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'subjunctive', person: '1st', number: 'singular', lexicalForm: 'ποιέω', translation: 'I might do', note: 'Aorist active subjunctive 1sg; ἵνα clause expressing purpose' } },
    ]
  },
  {
    verseNum: 5,
    rawText: 'καὶ νῦν δόξασόν με σύ, πάτερ, παρὰ σεαυτῷ τῇ δόξῃ ᾗ εἶχον πρὸ τοῦ τὸν κόσμον εἶναι παρὰ σοί.',
    tokens: [
      w('καὶ'), w('νῦν'),
      { word: 'δόξασόν', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'imperative', person: '2nd', number: 'singular', lexicalForm: 'δοξάζω', translation: 'glorify!', note: 'Aorist active imperative 2sg' } },
      w('με'), w('σύ,'), w('πάτερ,'), w('παρὰ'), w('σεαυτῷ'), w('τῇ'), w('δόξῃ'), w('ᾗ'),
      { word: 'εἶχον', isVerb: true, parse: { tense: 'imperfect', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἔχω', translation: 'I had', note: 'Imperfect active 1sg; Dirty Dozen verb; note εἶχον (irregular)' } },
      w('πρὸ'), w('τοῦ'), w('τὸν'), w('κόσμον'),
      { word: 'εἶναι', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'infinitive', person: 'N/A', number: 'N/A', lexicalForm: 'εἰμί', translation: 'to be', note: 'πρὸ τοῦ + infinitive = "before" (temporal articular infinitive)' } },
      w('παρὰ'), w('σοί.'),
    ]
  },
  {
    verseNum: 6,
    rawText: 'Ἐφανέρωσά σου τὸ ὄνομα τοῖς ἀνθρώποις οὓς ἔδωκάς μοι ἐκ τοῦ κόσμου. σοὶ ἦσαν καὶ ἐμοὶ αὐτοὺς ἔδωκας, καὶ τὸν λόγον σου τετήρηκαν.',
    tokens: [
      { word: 'Ἐφανέρωσά', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'φανερόω', translation: 'I manifested/revealed', note: '1st aorist; ω-contract verb; augment ε' } },
      w('σου'), w('τὸ'), w('ὄνομα'), w('τοῖς'), w('ἀνθρώποις'), w('οὓς'),
      { word: 'ἔδωκάς', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you gave', note: 'Aorist active 2sg of δίδωμι (μι verb)' } },
      w('μοι'), w('ἐκ'), w('τοῦ'), w('κόσμου.'), w('σοὶ'),
      { word: 'ἦσαν', isVerb: true, parse: { tense: 'imperfect', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they were', note: 'εἰμί imperfect 3pl' } },
      w('καὶ'), w('ἐμοὶ'), w('αὐτοὺς'),
      { word: 'ἔδωκας,', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you gave', note: 'Aorist active 2sg of δίδωμι' } },
      w('καὶ'), w('τὸν'), w('λόγον'), w('σου'),
      { word: 'τετήρηκαν.', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'τηρέω', translation: 'they have kept', note: 'Perfect active 3pl; reduplication τε-; -κα- perfect marker' } },
    ]
  },
  {
    verseNum: 7,
    rawText: 'νῦν ἔγνωκαν ὅτι πάντα ὅσα δέδωκάς μοι παρὰ σοῦ εἰσιν·',
    tokens: [
      w('νῦν'),
      { word: 'ἔγνωκαν', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'γινώσκω', translation: 'they have come to know', note: 'Perfect active 3pl; Dirty Dozen verb; irregular perf. stem γνω-' } },
      w('ὅτι'), w('πάντα'), w('ὅσα'),
      { word: 'δέδωκάς', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι' } },
      w('μοι'), w('παρὰ'), w('σοῦ'),
      { word: 'εἰσιν·', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they are', note: 'εἰμί present 3pl' } },
    ]
  },
  {
    verseNum: 8,
    rawText: 'ὅτι τὰ ῥήματα ἃ δέδωκάς μοι δέδωκα αὐτοῖς, καὶ αὐτοὶ ἔλαβον καὶ ἔγνωσαν ἀληθῶς ὅτι παρὰ σοῦ ἐξῆλθον, καὶ ἐπίστευσαν ὅτι σύ με ἀπέστειλας.',
    tokens: [
      w('ὅτι'), w('τὰ'), w('ῥήματα'), w('ἃ'),
      { word: 'δέδωκάς', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι' } },
      w('μοι'),
      { word: 'δέδωκα', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'δίδωμι', translation: 'I have given', note: 'Perfect active 1sg of δίδωμι' } },
      w('αὐτοῖς,'), w('καὶ'), w('αὐτοὶ'),
      { word: 'ἔλαβον', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'λαμβάνω', translation: 'they received', note: '2nd aorist; stem λαβ-; Dirty Dozen verb' } },
      w('καὶ'),
      { word: 'ἔγνωσαν', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'γινώσκω', translation: 'they came to know', note: 'Root aorist 3pl of γινώσκω; stem γνω-; Dirty Dozen' } },
      w('ἀληθῶς'), w('ὅτι'), w('παρὰ'), w('σοῦ'),
      { word: 'ἐξῆλθον,', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἐξέρχομαι', translation: 'I came out', note: '2nd aorist; compound of ἔρχομαι (Dirty Dozen); suppletive stem ἐλθ-' } },
      w('καὶ'),
      { word: 'ἐπίστευσαν', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'πιστεύω', translation: 'they believed', note: '1st aorist 3pl' } },
      w('ὅτι'), w('σύ'), w('με'),
      { word: 'ἀπέστειλας.', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀποστέλλω', translation: 'you sent', note: 'LIQUID AORIST; stem ἀποστελ- (λ); vowel change ε→ει; -ας ending' } },
    ]
  },
  {
    verseNum: 9,
    rawText: 'ἐγὼ περὶ αὐτῶν ἐρωτῶ· οὐ περὶ τοῦ κόσμου ἐρωτῶ ἀλλὰ περὶ ὧν δέδωκάς μοι, ὅτι σοί εἰσιν,',
    tokens: [
      w('ἐγὼ'), w('περὶ'), w('αὐτῶν'),
      { word: 'ἐρωτῶ·', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἐρωτάω', translation: 'I pray/ask', note: 'Present active 1sg; ε-contract verb (ω form)' } },
      w('οὐ'), w('περὶ'), w('τοῦ'), w('κόσμου'),
      { word: 'ἐρωτῶ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἐρωτάω', translation: 'I pray/ask', note: 'Present active 1sg; repeated for emphasis' } },
      w('ἀλλὰ'), w('περὶ'), w('ὧν'),
      { word: 'δέδωκάς', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι' } },
      w('μοι,'), w('ὅτι'), w('σοί'),
      { word: 'εἰσιν,', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they are', note: 'εἰμί present 3pl' } },
    ]
  },
  {
    verseNum: 10,
    rawText: 'καὶ τὰ ἐμὰ πάντα σά ἐστιν καὶ τὰ σὰ ἐμά, καὶ δεδόξασμαι ἐν αὐτοῖς.',
    tokens: [
      w('καὶ'), w('τὰ'), w('ἐμὰ'), w('πάντα'), w('σά'),
      { word: 'ἐστιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular', lexicalForm: 'εἰμί', translation: 'is', note: 'εἰμί present 3sg' } },
      w('καὶ'), w('τὰ'), w('σὰ'), w('ἐμά,'), w('καὶ'),
      { word: 'δεδόξασμαι', isVerb: true, parse: { tense: 'perfect', voice: 'passive', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'δοξάζω', translation: 'I have been glorified', note: 'Perfect passive 1sg; reduplication δε-; -σμαι ending (palatal mute change: ζ → σ before μ)' } },
      w('ἐν'), w('αὐτοῖς.'),
    ]
  },
  {
    verseNum: 11,
    rawText: 'καὶ οὐκέτι εἰμὶ ἐν τῷ κόσμῳ, καὶ αὐτοὶ ἐν τῷ κόσμῳ εἰσίν, κἀγὼ πρὸς σὲ ἔρχομαι. πάτερ ἅγιε, τήρησον αὐτοὺς ἐν τῷ ὀνόματί σου ᾧ δέδωκάς μοι, ἵνα ὦσιν ἓν καθὼς ἡμεῖς.',
    tokens: [
      w('καὶ'), w('οὐκέτι'),
      { word: 'εἰμὶ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'εἰμί', translation: 'I am', note: 'εἰμί present 1sg' } },
      w('ἐν'), w('τῷ'), w('κόσμῳ,'), w('καὶ'), w('αὐτοὶ'), w('ἐν'), w('τῷ'), w('κόσμῳ'),
      { word: 'εἰσίν,', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they are', note: 'εἰμί present 3pl' } },
      w('κἀγὼ'), w('πρὸς'), w('σὲ'),
      { word: 'ἔρχομαι.', isVerb: true, parse: { tense: 'present', voice: 'middle/passive', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἔρχομαι', translation: 'I am coming', note: 'Present middle/deponent 1sg; Dirty Dozen verb' } },
      w('πάτερ'), w('ἅγιε,'),
      { word: 'τήρησον', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'imperative', person: '2nd', number: 'singular', lexicalForm: 'τηρέω', translation: 'keep! guard!', note: 'Aorist active imperative 2sg' } },
      w('αὐτοὺς'), w('ἐν'), w('τῷ'), w('ὀνόματί'), w('σου'), w('ᾧ'),
      { word: 'δέδωκάς', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι' } },
      w('μοι,'), w('ἵνα'),
      { word: 'ὦσιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they might be', note: 'εἰμί present subjunctive 3pl; ἵνα clause' } },
      w('ἓν'), w('καθὼς'), w('ἡμεῖς.'),
    ]
  },
  {
    verseNum: 12,
    rawText: 'ὅτε ἤμην μετ᾿ αὐτῶν ἐγὼ ἐτήρουν αὐτοὺς ἐν τῷ ὀνόματί σου ᾧ δέδωκάς μοι, καὶ ἐφύλαξα, καὶ οὐδεὶς ἐξ αὐτῶν ἀπώλετο εἰ μὴ ὁ υἱὸς τῆς ἀπωλείας, ἵνα ἡ γραφὴ πληρωθῇ.',
    tokens: [
      w('ὅτε'),
      { word: 'ἤμην', isVerb: true, parse: { tense: 'imperfect', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'εἰμί', translation: 'I was', note: 'εἰμί imperfect 1sg' } },
      w('μετ᾿'), w('αὐτῶν'), w('ἐγὼ'),
      { word: 'ἐτήρουν', isVerb: true, parse: { tense: 'imperfect', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'τηρέω', translation: 'I was keeping', note: 'Imperfect active 1sg; ε-contract verb' } },
      w('αὐτοὺς'), w('ἐν'), w('τῷ'), w('ὀνόματί'), w('σου'), w('ᾧ'),
      { word: 'δέδωκάς', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι' } },
      w('μοι,'), w('καὶ'),
      { word: 'ἐφύλαξα,', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'φυλάσσω', translation: 'I guarded', note: '1st aorist; palatal mute: κ+σ → ξ' } },
      w('καὶ'), w('οὐδεὶς'), w('ἐξ'), w('αὐτῶν'),
      { word: 'ἀπώλετο', isVerb: true, parse: { tense: 'aorist', voice: 'middle', mood: 'indicative', person: '3rd', number: 'singular', lexicalForm: 'ἀπόλλυμι', translation: 'perished', note: '2nd aorist middle of ἀπόλλυμι (μι verb)' } },
      w('εἰ'), w('μὴ'), w('ὁ'), w('υἱὸς'), w('τῆς'), w('ἀπωλείας,'), w('ἵνα'), w('ἡ'), w('γραφὴ'),
      { word: 'πληρωθῇ.', isVerb: true, parse: { tense: 'aorist', voice: 'passive', mood: 'subjunctive', person: '3rd', number: 'singular', lexicalForm: 'πληρόω', translation: 'might be fulfilled', note: 'Aorist passive subjunctive 3sg; ἵνα clause' } },
    ]
  },
  {
    verseNum: 13,
    rawText: 'νῦν δὲ πρὸς σὲ ἔρχομαι, καὶ ταῦτα λαλῶ ἐν τῷ κόσμῳ ἵνα ἔχωσιν τὴν χαρὰν τὴν ἐμὴν πεπληρωμένην ἐν αὐτοῖς.',
    tokens: [
      w('νῦν'), w('δὲ'), w('πρὸς'), w('σὲ'),
      { word: 'ἔρχομαι,', isVerb: true, parse: { tense: 'present', voice: 'middle/passive', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἔρχομαι', translation: 'I am coming', note: 'Present deponent; Dirty Dozen verb' } },
      w('καὶ'), w('ταῦτα'),
      { word: 'λαλῶ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'λαλέω', translation: 'I speak', note: 'Present active 1sg; ε-contract (ω form)' } },
      w('ἐν'), w('τῷ'), w('κόσμῳ'), w('ἵνα'),
      { word: 'ἔχωσιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'ἔχω', translation: 'they might have', note: 'Present active subjunctive 3pl; Dirty Dozen verb; ἵνα clause' } },
      w('τὴν'), w('χαρὰν'), w('τὴν'), w('ἐμὴν'),
      { word: 'πεπληρωμένην', isVerb: true, parse: { tense: 'perfect', voice: 'passive', mood: 'participle', person: 'N/A', number: 'singular', gender: 'feminine', case: 'accusative', lexicalForm: 'πληρόω', translation: 'having been fulfilled/completed', note: 'Perfect passive participle, acc. fem. sg.; predicative with χαρὰν' } },
      w('ἐν'), w('αὐτοῖς.'),
    ]
  },
  {
    verseNum: 14,
    rawText: 'ἐγὼ δέδωκα αὐτοῖς τὸν λόγον σου, καὶ ὁ κόσμος ἐμίσησεν αὐτούς, ὅτι οὐκ εἰσὶν ἐκ τοῦ κόσμου καθὼς ἐγὼ οὐκ εἰμὶ ἐκ τοῦ κόσμου.',
    tokens: [
      w('ἐγὼ'),
      { word: 'δέδωκα', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'δίδωμι', translation: 'I have given', note: 'Perfect active 1sg of δίδωμι' } },
      w('αὐτοῖς'), w('τὸν'), w('λόγον'), w('σου,'), w('καὶ'), w('ὁ'), w('κόσμος'),
      { word: 'ἐμίσησεν', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular', lexicalForm: 'μισέω', translation: 'hated', note: '1st aorist; ε-contract verb; augment ε' } },
      w('αὐτούς,'), w('ὅτι'), w('οὐκ'),
      { word: 'εἰσὶν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they are', note: 'εἰμί present 3pl' } },
      w('ἐκ'), w('τοῦ'), w('κόσμου'), w('καθὼς'), w('ἐγὼ'), w('οὐκ'),
      { word: 'εἰμὶ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'εἰμί', translation: 'I am', note: 'εἰμί present 1sg' } },
      w('ἐκ'), w('τοῦ'), w('κόσμου.'),
    ]
  },
  {
    verseNum: 15,
    rawText: 'οὐκ ἐρωτῶ ἵνα ἄρῃς αὐτοὺς ἐκ τοῦ κόσμου, ἀλλ᾿ ἵνα τηρήσῃς αὐτοὺς ἐκ τοῦ πονηροῦ.',
    tokens: [
      w('οὐκ'),
      { word: 'ἐρωτῶ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἐρωτάω', translation: 'I ask/pray', note: 'Present active 1sg; α-contract' } },
      w('ἵνα'),
      { word: 'ἄρῃς', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'subjunctive', person: '2nd', number: 'singular', lexicalForm: 'αἴρω', translation: 'you might take away', note: 'LIQUID AORIST subjunctive 2sg of αἴρω; stem ἀρ- (ρ-liquid)' } },
      w('αὐτοὺς'), w('ἐκ'), w('τοῦ'), w('κόσμου,'), w('ἀλλ᾿'), w('ἵνα'),
      { word: 'τηρήσῃς', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'subjunctive', person: '2nd', number: 'singular', lexicalForm: 'τηρέω', translation: 'you might keep', note: 'Aorist active subjunctive 2sg; ε-contract' } },
      w('αὐτοὺς'), w('ἐκ'), w('τοῦ'), w('πονηροῦ.'),
    ]
  },
  {
    verseNum: 16,
    rawText: 'ἐκ τοῦ κόσμου οὐκ εἰσίν, καθὼς ἐγὼ ἐκ τοῦ κόσμου οὐκ εἰμί.',
    tokens: [
      w('ἐκ'), w('τοῦ'), w('κόσμου'), w('οὐκ'),
      { word: 'εἰσίν,', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they are', note: 'εἰμί present 3pl' } },
      w('καθὼς'), w('ἐγὼ'), w('ἐκ'), w('τοῦ'), w('κόσμου'), w('οὐκ'),
      { word: 'εἰμί.', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'εἰμί', translation: 'I am', note: 'εἰμί present 1sg' } },
    ]
  },
  {
    verseNum: 17,
    rawText: 'ἁγίασον αὐτοὺς ἐν τῇ ἀληθείᾳ· ὁ λόγος ὁ σὸς ἀλήθειά ἐστιν.',
    tokens: [
      { word: 'ἁγίασον', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'imperative', person: '2nd', number: 'singular', lexicalForm: 'ἁγιάζω', translation: 'sanctify!', note: 'Aorist active imperative 2sg' } },
      w('αὐτοὺς'), w('ἐν'), w('τῇ'), w('ἀληθείᾳ·'), w('ὁ'), w('λόγος'), w('ὁ'), w('σὸς'), w('ἀλήθειά'),
      { word: 'ἐστιν.', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular', lexicalForm: 'εἰμί', translation: 'is', note: 'εἰμί present 3sg' } },
    ]
  },
  {
    verseNum: 18,
    rawText: 'καθὼς ἐμὲ ἀπέστειλας εἰς τὸν κόσμον, κἀγὼ ἀπέστειλα αὐτοὺς εἰς τὸν κόσμον·',
    tokens: [
      w('καθὼς'), w('ἐμὲ'),
      { word: 'ἀπέστειλας', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀποστέλλω', translation: 'you sent', note: 'LIQUID AORIST 2sg; stem ἀποστελ- (λ); vowel change ε→ει; -ας ending (1st aor endings, no σ)' } },
      w('εἰς'), w('τὸν'), w('κόσμον,'), w('κἀγὼ'),
      { word: 'ἀπέστειλα', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἀποστέλλω', translation: 'I sent', note: 'LIQUID AORIST 1sg; same stem; -α ending' } },
      w('αὐτοὺς'), w('εἰς'), w('τὸν'), w('κόσμον·'),
    ]
  },
  {
    verseNum: 19,
    rawText: 'καὶ ὑπὲρ αὐτῶν ἐγὼ ἁγιάζω ἐμαυτόν, ἵνα ὦσιν καὶ αὐτοὶ ἡγιασμένοι ἐν ἀληθείᾳ.',
    tokens: [
      w('καὶ'), w('ὑπὲρ'), w('αὐτῶν'), w('ἐγὼ'),
      { word: 'ἁγιάζω', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἁγιάζω', translation: 'I sanctify', note: 'Present active 1sg' } },
      w('ἐμαυτόν,'), w('ἵνα'),
      { word: 'ὦσιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they might be', note: 'εἰμί present subjunctive 3pl' } },
      w('καὶ'), w('αὐτοὶ'),
      { word: 'ἡγιασμένοι', isVerb: true, parse: { tense: 'perfect', voice: 'passive', mood: 'participle', person: 'N/A', number: 'plural', gender: 'masculine', case: 'nominative', lexicalForm: 'ἁγιάζω', translation: 'having been sanctified', note: 'Perfect passive participle nom. masc. pl.; predicate use' } },
      w('ἐν'), w('ἀληθείᾳ.'),
    ]
  },
  {
    verseNum: 20,
    rawText: 'Οὐ περὶ τούτων δὲ ἐρωτῶ μόνον, ἀλλὰ καὶ περὶ τῶν πιστευόντων διὰ τοῦ λόγου αὐτῶν εἰς ἐμέ,',
    tokens: [
      w('Οὐ'), w('περὶ'), w('τούτων'), w('δὲ'),
      { word: 'ἐρωτῶ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'ἐρωτάω', translation: 'I ask/pray', note: 'Present active 1sg; α-contract' } },
      w('μόνον,'), w('ἀλλὰ'), w('καὶ'), w('περὶ'), w('τῶν'),
      { word: 'πιστευόντων', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'participle', person: 'N/A', number: 'plural', gender: 'masculine', case: 'genitive', lexicalForm: 'πιστεύω', translation: 'of those believing/who believe', note: 'Present active participle, gen. masc. pl.; substantival use after τῶν (the ones believing)' } },
      w('διὰ'), w('τοῦ'), w('λόγου'), w('αὐτῶν'), w('εἰς'), w('ἐμέ,'),
    ]
  },
  {
    verseNum: 21,
    rawText: 'ἵνα πάντες ἓν ὦσιν, καθὼς σύ, πάτερ, ἐν ἐμοὶ κἀγὼ ἐν σοί, ἵνα καὶ αὐτοὶ ἐν ἡμῖν ὦσιν, ἵνα ὁ κόσμος πιστεύῃ ὅτι σύ με ἀπέστειλας.',
    tokens: [
      w('ἵνα'), w('πάντες'), w('ἓν'),
      { word: 'ὦσιν,', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they might be', note: 'εἰμί present subjunctive 3pl' } },
      w('καθὼς'), w('σύ,'), w('πάτερ,'), w('ἐν'), w('ἐμοὶ'), w('κἀγὼ'), w('ἐν'), w('σοί,'), w('ἵνα'), w('καὶ'), w('αὐτοὶ'), w('ἐν'), w('ἡμῖν'),
      { word: 'ὦσιν,', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they might be', note: 'εἰμί present subjunctive 3pl' } },
      w('ἵνα'), w('ὁ'), w('κόσμος'),
      { word: 'πιστεύῃ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'singular', lexicalForm: 'πιστεύω', translation: 'might believe', note: 'Present active subjunctive 3sg; ἵνα clause' } },
      w('ὅτι'), w('σύ'), w('με'),
      { word: 'ἀπέστειλας.', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀποστέλλω', translation: 'you sent', note: 'LIQUID AORIST 2sg of ἀποστέλλω' } },
    ]
  },
  {
    verseNum: 22,
    rawText: 'κἀγὼ τὴν δόξαν ἣν δέδωκάς μοι δέδωκα αὐτοῖς, ἵνα ὦσιν ἓν καθὼς ἡμεῖς ἕν·',
    tokens: [
      w('κἀγὼ'), w('τὴν'), w('δόξαν'), w('ἣν'),
      { word: 'δέδωκάς', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι (μι verb)' } },
      w('μοι'),
      { word: 'δέδωκα', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'δίδωμι', translation: 'I have given', note: 'Perfect active 1sg of δίδωμι' } },
      w('αὐτοῖς,'), w('ἵνα'),
      { word: 'ὦσιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they might be', note: 'εἰμί present subjunctive 3pl' } },
      w('ἓν'), w('καθὼς'), w('ἡμεῖς'), w('ἕν·'),
    ]
  },
  {
    verseNum: 23,
    rawText: 'ἐγὼ ἐν αὐτοῖς καὶ σὺ ἐν ἐμοί, ἵνα ὦσιν τετελειωμένοι εἰς ἕν, ἵνα γινώσκῃ ὁ κόσμος ὅτι σύ με ἀπέστειλας καὶ ἠγάπησας αὐτοὺς καθὼς ἐμὲ ἠγάπησας.',
    tokens: [
      w('ἐγὼ'), w('ἐν'), w('αὐτοῖς'), w('καὶ'), w('σὺ'), w('ἐν'), w('ἐμοί,'), w('ἵνα'),
      { word: 'ὦσιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they might be', note: 'εἰμί present subjunctive 3pl' } },
      { word: 'τετελειωμένοι', isVerb: true, parse: { tense: 'perfect', voice: 'passive', mood: 'participle', person: 'N/A', number: 'plural', gender: 'masculine', case: 'nominative', lexicalForm: 'τελειόω', translation: 'having been perfected/completed', note: 'Perfect passive participle nom. masc. pl.; predicate with ὦσιν (periphrastic)' } },
      w('εἰς'), w('ἕν,'), w('ἵνα'),
      { word: 'γινώσκῃ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'singular', lexicalForm: 'γινώσκω', translation: 'might know', note: 'Present active subjunctive 3sg; Dirty Dozen verb; ἵνα clause' } },
      w('ὁ'), w('κόσμος'), w('ὅτι'), w('σύ'), w('με'),
      { word: 'ἀπέστειλας', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀποστέλλω', translation: 'you sent', note: 'LIQUID AORIST 2sg of ἀποστέλλω' } },
      w('καὶ'),
      { word: 'ἠγάπησας', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀγαπάω', translation: 'you loved', note: '1st aorist; α-contract verb; augment η' } },
      w('αὐτοὺς'), w('καθὼς'), w('ἐμὲ'),
      { word: 'ἠγάπησας.', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀγαπάω', translation: 'you loved', note: '1st aorist; α-contract; augment η' } },
    ]
  },
  {
    verseNum: 24,
    rawText: 'πάτερ, ὃ δέδωκάς μοι, θέλω ἵνα ὅπου εἰμὶ ἐγὼ κἀκεῖνοι ὦσιν μετ᾿ ἐμοῦ, ἵνα θεωρῶσιν τὴν δόξαν τὴν ἐμήν, ἣν δέδωκάς μοι, ὅτι ἠγάπησάς με πρὸ καταβολῆς κόσμου.',
    tokens: [
      w('πάτερ,'), w('ὃ'),
      { word: 'δέδωκάς', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι' } },
      w('μοι,'),
      { word: 'θέλω', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'θέλω', translation: 'I want/wish', note: 'Present active 1sg; takes complementary infinitive or ἵνα clause' } },
      w('ἵνα'), w('ὅπου'),
      { word: 'εἰμὶ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'εἰμί', translation: 'I am', note: 'εἰμί present 1sg' } },
      w('ἐγὼ'), w('κἀκεῖνοι'),
      { word: 'ὦσιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'εἰμί', translation: 'they might be', note: 'εἰμί present subjunctive 3pl' } },
      w('μετ᾿'), w('ἐμοῦ,'), w('ἵνα'),
      { word: 'θεωρῶσιν', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'plural', lexicalForm: 'θεωρέω', translation: 'they might see/behold', note: 'Present active subjunctive 3pl; ε-contract; ἵνα clause' } },
      w('τὴν'), w('δόξαν'), w('τὴν'), w('ἐμήν,'), w('ἣν'),
      { word: 'δέδωκάς', isVerb: true, parse: { tense: 'perfect', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'δίδωμι', translation: 'you have given', note: 'Perfect active 2sg of δίδωμι' } },
      w('μοι,'), w('ὅτι'),
      { word: 'ἠγάπησάς', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀγαπάω', translation: 'you loved', note: '1st aorist; α-contract; augment η' } },
      w('με'), w('πρὸ'), w('καταβολῆς'), w('κόσμου.'),
    ]
  },
  {
    verseNum: 25,
    rawText: 'πάτερ δίκαιε, καὶ ὁ κόσμος σε οὐκ ἔγνω, ἐγὼ δέ σε ἔγνων, καὶ οὗτοι ἔγνωσαν ὅτι σύ με ἀπέστειλας·',
    tokens: [
      w('πάτερ'), w('δίκαιε,'), w('καὶ'), w('ὁ'), w('κόσμος'), w('σε'), w('οὐκ'),
      { word: 'ἔγνω,', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'singular', lexicalForm: 'γινώσκω', translation: 'knew', note: 'Root aorist 3sg of γινώσκω; athematic (stem γνω-); Dirty Dozen' } },
      w('ἐγὼ'), w('δέ'), w('σε'),
      { word: 'ἔγνων,', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'γινώσκω', translation: 'I knew', note: 'Root aorist 1sg; ἔγνων — note: 1st sg looks like 2nd aorist but 3pl (ἔγνωσαν) looks like 1st aorist!' } },
      w('καὶ'), w('οὗτοι'),
      { word: 'ἔγνωσαν', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '3rd', number: 'plural', lexicalForm: 'γινώσκω', translation: 'they knew', note: 'Root aorist 3pl; -σαν ending looks like 1st aorist but this is an athematic 2nd aorist; Dirty Dozen' } },
      w('ὅτι'), w('σύ'), w('με'),
      { word: 'ἀπέστειλας·', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀποστέλλω', translation: 'you sent', note: 'LIQUID AORIST 2sg of ἀποστέλλω' } },
    ]
  },
  {
    verseNum: 26,
    rawText: 'καὶ ἐγνώρισα αὐτοῖς τὸ ὄνομά σου καὶ γνωρίσω, ἵνα ἡ ἀγάπη ἣν ἠγάπησάς με ἐν αὐτοῖς ᾖ κἀγὼ ἐν αὐτοῖς.',
    tokens: [
      w('καὶ'),
      { word: 'ἐγνώρισα', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'γνωρίζω', translation: 'I made known', note: '1st aorist 1sg; augment ε; -σα ending' } },
      w('αὐτοῖς'), w('τὸ'), w('ὄνομά'), w('σου'), w('καὶ'),
      { word: 'γνωρίσω,', isVerb: true, parse: { tense: 'future', voice: 'active', mood: 'indicative', person: '1st', number: 'singular', lexicalForm: 'γνωρίζω', translation: 'I will make known', note: 'Future active 1sg; -σω tense formative' } },
      w('ἵνα'), w('ἡ'), w('ἀγάπη'), w('ἣν'),
      { word: 'ἠγάπησάς', isVerb: true, parse: { tense: 'aorist', voice: 'active', mood: 'indicative', person: '2nd', number: 'singular', lexicalForm: 'ἀγαπάω', translation: 'you loved', note: '1st aorist; α-contract; augment η' } },
      w('με'), w('ἐν'), w('αὐτοῖς'),
      { word: 'ᾖ', isVerb: true, parse: { tense: 'present', voice: 'active', mood: 'subjunctive', person: '3rd', number: 'singular', lexicalForm: 'εἰμί', translation: 'might be', note: 'εἰμί present subjunctive 3sg; ἵνα clause' } },
      w('κἀγὼ'), w('ἐν'), w('αὐτοῖς.'),
    ]
  },
]
