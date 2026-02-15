// Temporary script to update all designers with new fields
const fs = require('fs');

const designersFile = './src/data/designers.ts';
let content = fs.readFileSync(designersFile, 'utf8');

// Map of hourlyRate conversions (€ to Kč, then adjusted to 500-2000 range)
const rateMap = {
  45: 900,   // Kateřina (€45 → 900 Kč)
  50: 1000,  // Barbora, Klára (€50 → 1000 Kč)
  55: 1100,  // Martin, Zuzana (€55 → 1100 Kč)
  60: 1200,  // Marie, Vojtěch (€60 → 1200 Kč)
  65: 1300,  // Tereza, Adéla (€65 → 1300 Kč)
  70: 1400,  // Eva, Anna, Simona (€70 → 1400 Kč)
  75: 1500,  // Markéta (€75 → 1500 Kč)
  80: 1600,  // Ondřej, Štěpán (€80 → 1600 Kč)
  85: 1700,  // Lucie, Petra (€85 → 1700 Kč)
  90: 1800,  // Tomáš, Filip (€90 → 1800 Kč)
  95: 1900,  // Jan, Pavel, Lukáš (€95 → 1900 Kč)
  100: 2000, // Jakub, Marek (€100 → 2000 Kč)
  105: 2000, // David (€105 → 2000 Kč - cap at 2000)
  110: 2000, // Petr (€110 → 2000 Kč - cap at 2000)
  115: 2000, // Radek (€115 → 2000 Kč - cap at 2000)
  40: 800,   // Nikola (€40 → 800 Kč)
};

// Replace hourlyRate values
Object.entries(rateMap).forEach(([oldRate, newRate]) => {
  const regex = new RegExp(`hourlyRate: ${oldRate},`, 'g');
  content = content.replace(regex, `hourlyRate: ${newRate},`);
});

fs.writeFileSync(designersFile, content);
console.log('✅ Updated hourlyRate for all designers');
