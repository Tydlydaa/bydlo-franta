# Changelog

Přehled změn v Bydlo prototypu pro discovery výzkum.

## [2026-03-03] - Headline update

### Co se změnilo

**Změna titulku stránky**
- Hlavní titulek změněn z "Bydlo" na "BydloOOO"
- Znalostní zdroj: https://github.com/erikvanek/bydlo/pull/new/change-headline-to-bydloooo

## [2025-02-16] - Social proof (rating systém)

### Co se změnilo

**1. Nahrazení ceny sociálním důkazem (rating)**
- Cena zmizela z karet designérů (landing page, results, browse)
- Místo toho se zobrazuje: `★ 4.7 (12)` — rating a počet hodnocení
- Info řádek: `Praha · ihned · ★ 4.7 (12)`
- **Proč:** Cena může být odrazující na první pohled. Social proof buduje důvěru (H2 - access barrier)

**2. Rating data pro všech 28 designérů**
- Ratings: 4.4 - 4.9 hvězd
- Počty hodnocení: 5 - 41 reviews
- Korelace s cenou (realistické):
  - Levnější (1000-1400 Kč): 5-12 reviews, 4.4-4.7 rating
  - Střední (1500-2000 Kč): 12-27 reviews, 4.7-4.8 rating
  - Premium (2100-2600 Kč): 22-41 reviews, 4.8-4.9 rating
- **Proč:** Snižuje friction, participants vidí důvěryhodnost bez odrazující ceny

**3. Cena není úplně pryč**
- Cena (`consultationPrice`) zůstává v datovém modelu
- Zobrazí se až na detail page designéra (pokud se participant dostane tak daleko)
- **Proč:** Testujeme, kdy participants potřebují znát cenu

### Pro koho to je
- **Interview participants:** Méně odrazující první dojem, důvěra díky social proof
- **Research:** Sledujeme, kdy se participants ptají na cenu (během konverzace? na detailu?)

### Technické poznámky
- Nová komponenta: `DesignerRating.tsx` (hvězda + rating + count)
- Rozšíření Designer typu: `rating?: number`, `reviewCount?: number`
- Rating se zobrazuje inline v info řádku všech karet

---

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
