# Changelog

All notable changes to the Bydlo prototype will be documented in this file.

## [Unreleased] - 2025-02-15

### Added - Conversation Choice Buttons & Speed Optimization
- **Choice button UI** for conversation flow instead of free-text only
  - Hardcoded choice sets for common questions (location, budget, timeline, scope)
  - Pattern detection to auto-attach choices based on assistant message content
  - "Něco jiného…" escape hatch to reveal free-text input when needed
  - Files: `src/components/ChoiceButtons.tsx`, `src/data/conversationChoices.ts`, `src/services/choiceDetection.ts`

- **Speed optimization** for conversation API calls
  - Switched from Claude Sonnet to Claude Haiku 4.5 model
  - Reduced max tokens from 512 to 350 for follow-up questions
  - Result: 60-75% faster responses (4-6s → 1-2s)
  - File: `src/services/llmService.ts`

### Added - Visual Match Score Hierarchy
- **Color-coded designer cards** based on match score
  - Terracotta gradient background (stronger for higher scores)
  - Colored border matching badge (2px for ≥80%, 1px for lower)
  - Dynamic opacity based on score (30-90 range normalized)
  - File: `src/components/DesignerCard.tsx` - `matchCardStyle()` function

- **Enhanced card sizing** for high matches (≥80%)
  - Larger internal padding (p-6 instead of p-4) for visual prominence
  - No transform scaling (to prevent layout overlap issues)
  - Maintains compact, clean grid layout
  - File: `src/components/DesignerCard.tsx`

- **Prominent match reason** for top matches
  - Bold primary-colored text for ≥80% matches
  - Subtle italic gray text for lower matches
  - File: `src/components/DesignerCard.tsx`

- **Enhanced hover states**
  - Stronger shadow and border for high-match cards
  - Subtle elevation for all cards on hover
  - File: `src/components/DesignerCard.tsx`

### Changed
- **ConversationMessage type** extended with `suggestedChoices` and `allowFreeText` fields
  - File: `src/types/index.ts`

- **ConversationThread** component to support choice buttons
  - Shows choices when available, free-text input otherwise
  - Escape hatch button triggers free-text reveal
  - File: `src/components/ConversationThread.tsx`

- **ConversationPage** to attach detected choices to assistant messages
  - Uses `detectChoiceSet()` pattern matching
  - File: `src/pages/ConversationPage.tsx`

- **System prompt** updated with choice-friendly instructions
  - Instructs LLM to ask questions suitable for choice buttons
  - File: `src/services/systemPrompt.ts`

- **ResultsPage** grid gap increased
  - Desktop: gap-6 (24px) for better card spacing
  - File: `src/pages/ResultsPage.tsx`

### Technical Details
- **Choice detection patterns**: Location, budget, timeline, scope, priorities, style, availability
- **Score-based styling thresholds**: ≥80% = high match (prominent), <80% = normal
- **Color palette**: Terracotta (HSL 13 52% 53%) with dynamic opacity
- **Model**: Claude Haiku 4.5 (`claude-haiku-4-5-20251001`)

### Removed
- Transform scale approach for card sizing (caused overlaps)
- Large margin values (mb-48, mr-32) - replaced with internal padding

### Research Context
These changes support **H4 (willingness to invest)** testing:
- Visual hierarchy helps participants immediately identify "best match for me"
- Faster conversation flow reduces friction in discovery interviews
- Choice buttons make conversation feel more guided and less demanding

---

## Previous Changes

Earlier commits focused on:
- EUR → CZK price conversion
- CTA button redesign
- Mock scoring improvements
- Initial conversation flow implementation
