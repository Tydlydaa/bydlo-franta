# Bydlo — Designer Matchmaking Discovery Prototype

A clickable prototype for a matchmaking platform connecting freelance designers/architects with people in transitional living situations (shared flats, moving in together, small renovations). Built for discovery interviews.

## Tech stack

- **React 18** + TypeScript
- **Vite** — build and dev server
- **Tailwind CSS** — styling
- **React Router** — navigation
- **LLM** — mock service (pattern-based); swappable for Claude/API later

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command      | Description              |
|-------------|--------------------------|
| `npm run dev`    | Start dev server         |
| `npx vite build`  | Production build (use this instead of npm run build) |
| `npm run preview`| Preview production build |

## Deployment

**DŮLEŽITÉ: Deployment je manuální. Před každým deployem aktualizuj `CHANGELOG.md`.**

```bash
# 1. Aktualizuj CHANGELOG.md s produktovými změnami
# 2. Commitni changelog
git add CHANGELOG.md && git commit -m "Update changelog for deployment [DATE]" && git push

# 3. Build a deploy
npx vite build
npx wrangler pages deploy dist --project-name bydlo --branch main --commit-dirty=true
```

Detaily viz [DEPLOYMENT.md](DEPLOYMENT.md).

## Project structure

- `src/pages/` — route-level pages (Landing, Describe, Conversation, Results, Browse, Designer detail)
- `src/components/` — SituationInput, ConversationThread, DesignerCard, DesignerProfile, FilterBar
- `src/components/ui/` — shadcn/ui components (do not modify; add via `npx shadcn@latest add …`)
- `src/context/ConversationContext.tsx` — conversation state for Journey 1
- `src/services/llmService.ts` — LLM abstraction (mock by default; set `USE_MOCK_LLM = false` and implement API for Phase 2)
- `src/data/designers.ts` — 14 mock designers (Prague, Brno, Olomouc, Ostrava)
- `src/types/index.ts` — shared types

## Specs and workflow (`specs/`)

All specification and PM-style workflow live in **`specs/`**:

| File | Purpose |
|------|--------|
| [specs/requirements.md](specs/requirements.md) | EARS acceptance criteria and user stories |
| [specs/design.md](specs/design.md) | Architecture, component hierarchy, boundaries |
| [specs/start.md](specs/start.md) | Full product specification |
| [specs/tasks.md](specs/tasks.md) | Ordered implementation checklist |
| [specs/progress.md](specs/progress.md) | Implementation status tracker |
| [specs/workflow.md](specs/workflow.md) | Multi-tool AI playbook (phases, tool choice, iteration) |
| [specs/notes/wireframes.md](specs/notes/wireframes.md) | ASCII wireframes |
| [specs/HANDOFF.md](specs/HANDOFF.md) | Session handoff (update after coding sessions) |

**For AI tools (Claude, Gemini, Cursor):** This repo is set up for multi-tool use. Read **`claude.md`** or **`gemini.md`** at the repo root first for project context and conventions. All specification and PM workflow live in **`specs/`** — read the relevant spec (requirements, design, or start) before implementing; update **`specs/progress.md`** and **`specs/HANDOFF.md`** after sessions. The playbook for which tool to use when is in **`specs/workflow.md`**. In Cursor, **`.cursor/rules/`** contains scoped rules (specs-first workflow, component standards).

## Routes

| Path | Page |
|------|------|
| `/` | Landing (Describe your situation / Choose a consultant) |
| `/describe` | Describe situation (Journey 1 entry) |
| `/conversation` | AI conversation (Journey 1) |
| `/results` | Matched designers (from conversation or browse) |
| `/browse` | Browse all designers (Journey 2) |
| `/designer/:id` | Designer profile + “Book consultation” (simulated) |

## Spec and workflow

- Full product spec: [specs/start.md](specs/start.md).
- Requirements (EARS) and design: [specs/requirements.md](specs/requirements.md), [specs/design.md](specs/design.md).
- Multi-tool AI workflow: [specs/workflow.md](specs/workflow.md).
