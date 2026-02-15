// Sample of updated designer data (first 4 featured designers)
// Pattern for consultationPrice, whatYouGet, testimonials

const SAMPLE_UPDATES = {
  '1': { // Tereza Nováková - €65 → 1300 Kč
    hourlyRate: 1300,
    consultationPrice: 'Úvodní konzultace od 1500 Kč',
    whatYouGet: 'Za 1500 Kč dostaneš 20minutový videohovor, během kterého mi ukážeš svůj prostor, a do tří dnů kompletní plán: půdorys se dvěma variantami rozmístění, moodboard a nákupní seznam s přesnými odkazy a cenami. Bonus: follow-up hovor zdarma, pokud budeš potřebovat pomoct.',
    testimonials: [
      {
        clientName: 'Jana, Praha 3',
        text: 'Za víkend jsem přestavěla obývák podle Terezina plánu a nemůžu uvěřit, že je to ten samý byt. Konečně tam můžeme oba pracovat a ještě mít místo na odpočinek.',
        project: 'Dvoupokojový byt pro pár',
      },
      {
        clientName: 'Martin, Vinohrady',
        text: 'Přesně to, co jsem potřeboval — žádné velké kecy, jen jasný plán, co kde a proč. A nákupní seznam mi ušetřil hodiny hledání.',
      },
    ],
  },

  '3': { // Eva Horáková - €75 → 1500 Kč
    hourlyRate: 1500,
    consultationPrice: 'Úvodní konzultace od 1800 Kč',
    whatYouGet: 'Za 1800 Kč dostanete (ideálně oba dva) rozhovor, kde zmapuji vaše představy a priority, a pak dva až tři konkrétní směry: barevnou paletu, klíčové kusy nábytku a jejich rozmístění. Vyberete si směr a já ho dopracuju do kompletního plánu s průvodcem místnost po místnosti. Celý proces trvá asi dva týdny.',
    testimonials: [
      {
        clientName: 'Petra a Jakub, Letná',
        text: 'Eva nám pomohla najít společnou řeč — doslova. Každý jsme chtěli něco jiného a ona to dokázala propojit tak, že jsme oba spokojení.',
        project: 'Stěhování páru do společného bytu',
      },
      {
        clientName: 'Lucie, Žižkov',
        text: 'Dva směry, které navrhla, byly úplně odlišné, ale oba skvělé. Pomohlo mi to ujasnit si, co vlastně chci.',
      },
    ],
  },

  '7': { // Kateřina Malá - €45 → 900 Kč
    hourlyRate: 900,
    consultationPrice: 'Úvodní konzultace od 900 Kč',
    whatYouGet: 'Za 900 Kč si dáme kafe (platím já), ukážeš mi byt nebo fotky, a do týdne dostaneš vizuální plán: rozmístění, klíčové kusy, barevné návrhy a kde co koupit za rozumné peníze. Výstup jako sdílitelný Pinterest board plus jednoduchý nákres půdorysu.',
    testimonials: [
      {
        clientName: 'Tomáš, Brno-střed',
        text: 'Katka je mladá, ale ví, co dělá. Za 900 korun jsem dostal víc než jsem čekal — a hlavně jsem konečně věděl, kde začít.',
      },
    ],
  },

  '13': { // Barbora Holubová - €50 → 1000 Kč
    hourlyRate: 1000,
    consultationPrice: 'Úvodní konzultace od 1000 Kč',
    whatYouGet: 'Za 1000 Kč přijedu k tobě, všechno vyfotím, na místě skicuju varianty rozmístění a do tří dnů dostaneš vizuální průvodce: komentované fotky, půdorys, odkazy na produkty (IKEA, Marketplace, second-handy) a celkový odhad nákladů. Většina klientů utratí celkem 12–22 tisíc za kompletní proměnu pokoje.',
    testimonials: [
      {
        clientName: 'David, Ostrava-Poruba',
        text: 'Za tisícovku jsem dostal plán, díky kterému jsem za 15 tisíc kompletně změnil pokoj. Barča je skvělá a chápe, že nemám neomezený rozpočet.',
      },
    ],
  },
};

// Price ranges for consultation packages based on hourlyRate:
// 800-1000 Kč hourly → 900-1200 Kč consultation
// 1100-1400 Kč hourly → 1300-1700 Kč consultation
// 1500-1700 Kč hourly → 1800-2100 Kč consultation
// 1800-2000 Kč hourly → 2200-2500 Kč consultation
