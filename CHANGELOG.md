# Changelog

Přehled změn v Bydlo prototypu pro discovery výzkum.

## [2025-02-15] - Konverzace s tlačítky + vizuální hierarchie

### Co se změnilo

**1. Rychlejší konverzace s tlačítkovými odpověďmi**
- Místo psaní textu si uživatel volí z nabídnutých možností (např. "Praha", "Brno", "Do 1500 Kč")
- Konverzace je rychlejší — odpovědi přichází za 1-2 sekundy místo 4-6 sekund
- Stále je možnost napsat vlastní odpověď přes "Něco jiného…" tlačítko
- **Proč:** Snižuje friction během interview, uživatel nemusí přemýšlet jak formulovat odpověď

**2. Vizuální rozlišení top matchů na výsledkové stránce**
- Karty designérů s vysokým skóre (≥80%) mají:
  - Barevný terracotta odstín pozadí (silnější = vyšší skóre)
  - Tlustší barevný border (2px místo 1px)
  - Zvýrazněný důvod shody (tučně, barevně)
  - Větší vnitřní prostor (větší padding)
- Karty s nižším skóre vypadají jemněji, méně dominantně
- **Proč:** Testuje H4 — uživatel musí okamžitě poznat "kdo je pro mě nejlepší a proč"

**3. Kompaktní layout výsledků**
- Grid layout zůstává čistý a přehledný (2 sloupce na desktopu)
- Žádné překryvy nebo "nafouklý" vzhled
- Top match je vizuálně dominantní, ale layout není chaotický

### Pro koho to je
- **Interview participants:** Rychlejší průchod konverzací, jasná vizuální hierarchie při výběru designérů
- **Research:** Lepší signal pro H4 (willingness to invest) — vidíme, jestli účastníci reagují na top match

### Technické poznámky (pro context)
- Změna LLM modelu: Claude Haiku místo Sonnet (rychlost)
- Pattern detection pro automatické přiřazení tlačítek k otázkám
- Škálování karet pomocí paddingu místo CSS transform (kvůli překryvům)

---

## Předchozí změny

- **[2025-02-01]** EUR → CZK konverze cen konzultací
- **[2025-01-28]** Redesign CTA tlačítek, mock scoring algoritmus
- **[2025-01-25]** Základní konverzační flow s LLM integrací
