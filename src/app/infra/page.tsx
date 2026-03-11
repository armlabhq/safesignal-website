import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "SafeSignal Infra — Tijdelijke Wegsignalisatie",
  description:
    "SafeSignal Infra verzorgt tijdelijke wegsignalisatie voor nutswerken, weginfrastructuur en wegenwerken in België. Signalisatieplannen, materiaalverhuur en gecertificeerde verkeersregelaars.",
  openGraph: {
    title: "SafeSignal Infra — Tijdelijke Wegsignalisatie",
    description:
      "Professionele werf- en wegsignalisatie. Signalisatieplannen, materiaalverhuur en verkeersregelaars conform VSV-wetgeving.",
    url: "https://safesignal.be/infra",
    siteName: "SafeSignal",
    locale: "nl_BE",
    type: "website",
  },
};

const services = [
  {
    title: "Tijdelijke wegsignalisatie",
    description:
      "Plaatsing en onderhoud van tijdelijke signalisatie op gewestwegen, gemeentewegen en autosnelwegen. Conform VSV-wetgeving.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M16 4 L28 26 L4 26 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
        <path d="M16 12 L16 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="22" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Werfsignalisatieplannen",
    description:
      "Ontwerp van signalisatieplannen voor bouwwerven, nutswerken en weginfrastructuurprojecten. Goedkeuring bij overheden.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <rect x="4" y="6" width="20" height="22" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        <path d="M8 12 L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M8 16 L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M8 20 L16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="25" cy="25" r="5" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 25 L24.5 26.5 L27 23.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Verkeersregelaars",
    description:
      "Gecertificeerde verkeersregelaars voor kruispunten, wegomleggingen en wegenwerken. Snel inzetbaar.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
        <path d="M10 14 L22 14 L20 26 L12 26 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
        <path d="M8 18 L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 18 L20 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Mobiele en vaste signalisatie",
    description:
      "Verhuur en verkoop van signalisatiemateriaal: verkeersborden, verlichte pijlborden, afzetmateriaal, barriéres en TMS.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <rect x="10" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
        <path d="M16 16 L16 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10 28 L22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 8 L14 10 L20 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Nachtelijke wegsignalisatie",
    description:
      "Verlichte en reflecterende signalisatie voor nachtelijke werken. LED-pijlborden, knipperlichten en rijbaakjes.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M8 16 L24 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M18 10 L24 16 L18 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="16" r="3" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10 L8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M8 25 L8 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M2 16 L5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Ondersteuning bij incidenten",
    description:
      "Spoedinterventie bij verkeersongevallen of wegafsluitingen. Plaatsing van omleidingssignalisatie op korte termijn.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        <path d="M16 9 L16 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="21" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

const materialCategories = [
  { name: "Verkeersborden", sub: "Categorie A, B, C, D, E, F, G conform KB" },
  { name: "Verlichte pijlborden", sub: "LED-matrix, mobiel en vaste opstelling" },
  { name: "Afzetmateriaal", sub: "Kegels, waterbarriéres, afzetdranghekken" },
  { name: "Rijbaakjes", sub: "Retroreflecterende rijbaakjes type I, II, III" },
  { name: "Knipperlichten", sub: "Oranje LED-flitsers op batterij of 230V" },
  { name: "Verkeersregelaar-uitrusting", sub: "Vesten, baton, handschoenen, helmen" },
];

export default function InfraPage() {
  return (
    <>
      <Header variant="light" />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#1A0808" }}>
        {/* Green accent strip */}
        <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: "linear-gradient(90deg, #5C1010 0%, #8B2020 25%, #C0392B 50%, #8B2020 75%, #5C1010 100%)" }} />

        {/* Arrow pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 flex items-center"
              style={{ right: `${5 + i * 20}%` }}
            >
              <svg viewBox="0 0 40 80" fill="none" className="w-16 h-32 text-[#C0392B]">
                <path d="M4 4 L36 40 L4 76" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>

        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(192,57,43,0.12) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-white/[0.07] border border-white/10 rounded-full px-4 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C0392B]" style={{ boxShadow: "0 0 6px #C0392B" }} />
              <span className="text-[11px] font-semibold text-white/55 uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-body)" }}>
                SafeSignal Infra · Tijdelijke wegsignalisatie
              </span>
            </div>

            <h1
              className="font-bold text-white leading-[1.02] tracking-[-0.01em] mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 900 }}
            >
              De weg vrij.
              <br />
              <span>
                <span className="infra-alt-word">De werf</span>{" "}
                <span className="infra-alt-word infra-alt-word-b">veilig.</span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-xl mb-10" style={{ fontFamily: "var(--font-body)" }}>
              SafeSignal Infra levert tijdelijke wegsignalisatie en verkeersmanagement voor werven, nutswerken
              en weginfrastructuurprojecten. Professioneel, compliant en razendsnel inzetbaar.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact#offerte"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-sm rounded-lg transition-colors"
                style={{ background: "#C0392B", color: "#fff", fontFamily: "var(--font-body)" }}
              >
                Vraag een offerte
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#diensten"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/[0.08] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Onze diensten
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/[0.08] pt-10">
            {[
              { value: "Heel België", label: "Werkgebied" },
              { value: "VSV", label: "Conform wetgeving" },
              { value: "48u", label: "Max. plaatsingstijd" },
              { value: "7/7", label: "Bereikbaar" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#E05252" }}>{stat.value}</div>
                <div className="text-xs text-white/35 mt-1 font-medium" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Diensten ─────────────────────────────────────── */}
      <section id="diensten" className="py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Diensten
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#090909] leading-[1.05]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
              Van plan tot
              <br />
              afbraak
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 border border-black/[0.07] hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 text-[#8B1A1A] mb-5">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#090909] mb-2" style={{ fontFamily: "var(--font-display)" }}>{service.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Materiaal ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Materiaalpark
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#090909] leading-[1.05] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Volledig uitgerust
                <br />
                materiaalpark
              </h2>
              <p className="text-base text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Wij beschikken over een uitgebreid materiaalpark voor tijdelijke wegsignalisatie. Alle materialen
                zijn conform de geldende Belgische normen en beschikbaar voor verhuur of aankoop.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {materialCategories.map((cat) => (
                <div key={cat.name} className="bg-[#F7F6F2] rounded-xl p-5 border border-black/[0.05]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: "#C0392B" }} />
                    <p className="text-sm font-bold text-[#090909]" style={{ fontFamily: "var(--font-body)" }}>{cat.name}</p>
                  </div>
                  <p className="text-xs text-[#888] pl-4" style={{ fontFamily: "var(--font-body)" }}>{cat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VSV CTA ─────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#1A0808" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
            Conform de VSV-wetgeving
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto mb-8" style={{ fontFamily: "var(--font-body)" }}>
            Alle signalisatieplannen en plaatsingen voldoen aan de Vlaamse Standaard Signalisatie Vademecum (VSV)
            en het Belgisch verkeersreglement. Onze medewerkers zijn gecertificeerd wegwerker VCA.
          </p>
          <Link
            href="/contact#offerte"
            className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-sm rounded-lg transition-colors"
            style={{ background: "#C0392B", color: "#fff", fontFamily: "var(--font-body)" }}
          >
            Plan uw project
          </Link>
        </div>
      </section>

      {/* ─── Quote form ──────────────────────────────────── */}
      <section id="offerte" className="py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Infra · Contact
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#090909] leading-[1.05] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Start uw
                <br />
                project
              </h2>
              <p className="text-base text-[#555] leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
                Geef ons de details van uw werf of project. Wij stellen een signalisatieplan op en bezorgen u
                een offerte op maat.
              </p>
              <div className="space-y-3">
                {["Locatie en type werf", "Duur van de werken", "Type signalisatie nodig", "Eventuele vergunningsvereisten"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#C0392B" }}>
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-sm text-[#555]" style={{ fontFamily: "var(--font-body)" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
