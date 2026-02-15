# Varianta C: Zvýraznění "Typické situace" + inline hint

**Změny:**
- Přidat malý hint přímo nad textové pole: "💬 Napiš pár vět o své situaci" (případně ikona ruky ukazující dolů)
- "Typické situace" přesunout NAD textové pole (aby byly první, co uživatel vidí)
- Přidat subtle border glow kolem celého bloku (input + scenarios)

**Vizuál:**
```
┌────────────────────────────────────┐
│  TYPICKÉ SITUACE                  │
│  [Stěhování s partnerem]          │
│  [Refresh bytu] [Rekonstrukce]    │
│                                   │
│  💬 Napiš pár vět o své situaci   │
│  ┌──────────────────────────────┐ │
│  │ Příští měsíc se stěhujeme... │ │
│  │                          [→]  │ │
│  └──────────────────────────────┘ │
└────────────────────────────────────┘
```

**Tone:** Přátelský, "tady jsou příklady, nebo napiš vlastní"
