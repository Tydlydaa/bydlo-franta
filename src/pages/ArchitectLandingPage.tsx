import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserCheck, Inbox, MessageSquare, CalendarCheck, Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const ONBOARDING_STEPS = [
  {
    title: 'Vytvoříš si profil',
    description:
      'Popíšeš svůj přístup, specializaci a nahraješ portfolio. Říct lidem, kdo jsi a jak pracuješ, zabere chvilku.',
  },
  {
    title: 'Krátký hovor s námi',
    description:
      'Ozveme se ti osobně. Chceme vědět, s čím lidem pomáháš a jestli jsme na stejné vlně. Na platformu nepustíme každého — to je záměr.',
  },
  {
    title: 'Jsi připravený přijímat poptávky',
    description:
      'Jakmile profil schválíme, klienti tě uvidí a mohou tě oslovit. Vše ostatní se řídí tebou.',
  },
]

const PROJECT_STEPS = [
  {
    icon: Inbox,
    title: 'Klient tě osloví s konkrétní poptávkou',
    description:
      'Vidíš jeho situaci dopředu — co řeší, kde bydlí, co zhruba očekává. Žádné slepé poptávky.',
  },
  {
    icon: MessageSquare,
    title: 'Rozsah spolu vyladíte',
    description:
      'Pokud tě poptávka zaujme, domluvíte se na tom, co spolupráce obnáší a co za to klient dostane — ať už jde o hodinovou konzultaci nebo podklady pro celkovou rekonstrukci.',
  },
  {
    icon: CalendarCheck,
    title: 'Klient ví, co ho čeká',
    description:
      'Ještě než začnete, má klient jasno — co, za kolik a v jakém čase. Zbývá jen domluvit první schůzku.',
  },
  {
    icon: Handshake,
    title: 'Dobrá spolupráce',
    description:
      'Spokojený klient, spokojený architekt. A základna pro příště — ať už u stejného klienta, nebo přes jeho doporučení dál.',
  },
]

const BENEFITS = [
  {
    title: 'Klienti, které si vybíráš',
    description:
      'Neodpovídáš naslepo na desítky poptávek. Vidíš situaci klienta dopředu — a teprve pak se rozhodneš, jestli tě zajímá a jestli mu dokážeš opravdu pomoct.',
  },
  {
    title: 'Od konzultace po rekonstrukci',
    description:
      'Bydlo není jen pro malé porady. Spolupráce může začít rychlou konzultací na dálku a přerůst v dlouhodobý projekt. Rozsah vyladíte spolu — pro každého klienta zvlášť.',
  },
  {
    title: 'Jedna dobrá zkušenost se vrátí',
    description:
      'Klient, kterému skutečně pomůžeš, se vrátí — nebo tě doporučí dál. Bydlo ti dává prostor budovat reference i mimo okruh přátel a šeptandy.',
  },
]

export function ArchitectLandingPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-36 lg:pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 block"
          >
            ← Zpět na úvod
          </button>

          <p className="text-sm font-medium uppercase tracking-wider text-primary mb-4">
            Pro architekty a interiérové designéry
          </p>

          <h1 className="text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.05] text-balance">
            Bydlo
          </h1>
          <p className="mt-2.5 text-xl lg:text-2xl max-w-2xl leading-relaxed text-muted-foreground">
            Propojujeme architekty a interiérové designéry s lidmi, kterým záleží na tom, jak se jim bydlí.
          </p>

          <p className="mt-6 text-base text-foreground max-w-2xl leading-relaxed">
            Ty si vybíráš, s kým a na čem chceš pracovat. A my vám jen k sobě zkracujeme cestu.
          </p>

          <div className="mt-8">
            <Button size="lg" onClick={() => {
              document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Chci se zapojit
            </Button>
          </div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 pb-32 space-y-24">

        {/* Onboarding */}
        <section>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
            Jak začít
          </p>
          <h2 className="text-xl font-bold text-foreground mb-8">
            Registrace a ověření — proběhne jednou
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {ONBOARDING_STEPS.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full border border-border text-sm font-semibold text-muted-foreground">
                    {i + 1}
                  </span>
                  {i < ONBOARDING_STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-border min-h-[2rem]" />
                  )}
                </div>
                <div className="space-y-1 pb-6">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project process */}
        <section>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
            Jak vypadá každá spolupráce
          </p>
          <h2 className="text-xl font-bold text-foreground mb-8">
            Tohle se opakuje u každé zakázky
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECT_STEPS.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-9 w-9 rounded-full bg-primary/10 text-primary shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">Krok {i + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Benefits */}
        <section>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-8">
            Co za to dostaneš
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-[0_1px_3px_0_rgb(0_0_0/0.05)] bg-card">
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="max-w-2xl">
          <blockquote className="border-l-2 border-primary/30 pl-6 space-y-3">
            <p className="text-xl text-foreground leading-relaxed font-medium">
              „Poprvé jsem věděl ještě před prvním hovorem, že to bude dobrý klient. To je docela vzácná věc."
            </p>
            <footer className="text-sm text-muted-foreground">
              Ondřej, architekt
            </footer>
          </blockquote>
        </section>

        {/* CTA */}
        <section id="cta" className="max-w-lg">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">
            Zapoj se mezi prvními
          </h2>
          <p className="text-muted-foreground mb-6">
            Platforma se právě připravuje. Nech nám e-mail — ozveme se ti osobně a domluvíme si úvodní hovor.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 text-sm text-foreground">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                ✓
              </span>
              Díky! Ozveme se ti.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tvuj@email.cz"
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Button type="submit">Mám zájem</Button>
            </form>
          )}
        </section>

      </main>
    </div>
  )
}
