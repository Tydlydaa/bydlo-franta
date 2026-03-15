import { CHOICE_SETS } from '@/data/conversationChoices'

/**
 * Pattern-match assistant message to auto-attach choice buttons.
 * Matches common question patterns (location, budget, timeline, scope, size).
 * Returns null if no pattern matched → fallback to free text.
 */
export function detectChoiceSet(assistantMessage: string): string[] | null {
  // Location patterns
  if (/(které město|kde|lokalit|nacházíš|Praha|Brno)/i.test(assistantMessage)) {
    return [...CHOICE_SETS.LOCATION]
  }

  // Budget patterns
  if (/(rozpočet|kolik|investovat|kč|korun|cena)/i.test(assistantMessage)) {
    return [...CHOICE_SETS.BUDGET]
  }

  // Timeline patterns
  if (/(kdy|časov|brzy|spěch|termín|plánuješ)/i.test(assistantMessage)) {
    return [...CHOICE_SETS.TIMELINE]
  }

  // Scope patterns
  if (/(co potřebuj|s čím|pomoct|zařídit|vyřešit)/i.test(assistantMessage)) {
    return [...CHOICE_SETS.SCOPE_INITIAL]
  }

  // Space size patterns
  if (/(jak velký|velikost|prostoru|metrů|m²)/i.test(assistantMessage)) {
    return [...CHOICE_SETS.SPACE_SIZE]
  }

  return null // No pattern matched → free text only
}
