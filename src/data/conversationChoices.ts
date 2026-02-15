/**
 * Hardcoded choice sets for conversation follow-ups.
 * Based on system prompt fields (location, budget, timeline, scope).
 * Pattern: 3-5 options + escape hatch ("Něco jiného…")
 */

export const CHOICE_SETS = {
  LOCATION: [
    'Praha',
    'Brno',
    'Olomouc',
    'Ostrava',
    'Jinde / Něco jiného…'
  ],

  BUDGET: [
    'Do 1500 Kč',
    '1500–2500 Kč',
    'Nad 2500 Kč',
    'Ještě nevím / Něco jiného…'
  ],

  TIMELINE: [
    'Hned, je to akutní',
    'Příští týden až měsíc',
    'Nemám spěch',
    'Něco jiného…'
  ],

  SCOPE_INITIAL: [
    'Rozmístění nábytku',
    'Pomoc s dispozicí',
    'Barvy a styl',
    'Rekonstrukce / technické poradenství',
    'Všechno dohromady',
    'Něco jiného…'
  ],

  SCOPE_FOLLOWUP: [
    'Spíš zařídit to, co už mám',
    'Otevřený/á i novým kusům',
    'Chci kompletní redesign',
    'Něco jiného…'
  ],

  SPACE_SIZE: [
    'Pokoj / studio (do 30 m²)',
    'Malý byt (30–60 m²)',
    'Větší byt (60+ m²)',
    'Dům',
    'Něco jiného…'
  ]
} as const
