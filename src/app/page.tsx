import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

const solutions = [
  {
    href: "/oplossingen/interventie",
    category: "Noodinterventie",
    title: "Interventievoertuigen",
    description:
      "Complete uitrusting voor politie, brandweer en medische diensten. Gecertificeerde lichtbalken, sirenes en Battenburg-markering conform Belgische en Europese normen.",
    tags: ["Politie", "Brandweer", "MICU / Ziekenwagen"],
    accentColor: "#1A5FD4",
  },
  {
    href: "/oplossingen/werkvoertuigen",
    category: "Werf & transport",
    title: "Werkvoertuigen",
    description:
      "Zwaailichten en signalisatiesystemen voor takeldiensten, nutsbedrijven en wegenbouw. Amber LED-signalisatie op maat van uw voertuig en sector.",
    tags: ["Takeldiensten", "Nutsbedrijven", "Wegenbouw"],
    accentColor: "#F5B800",
  },
  {
    href: "/oplossingen/installatie",
    category: "Service",
    title: "Installatie & ondersteuning",
    description:
      "Professionele montage in onze werkplaats of ter plaatse. Elektrische installaties, omvormers, bekabeling en APK-begeleiding voor uw vloot.",
    tags: ["Montage op maat", "Elektrische installatie", "APK-begeleiding"],
    accentColor: "#1B5E3A",
  },
];

const productCategories = [
  {
    name: "Zwaailichten",
    desc: "Enkelvoudige LED-beacons voor dakbevestiging",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.9" />
        <path d="M16 4 L16 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 24 L16 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4 16 L8 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 16 L28 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M7.5 7.5 L10.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M21.5 21.5 L24.5 24.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M7.5 24.5 L10.5 21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M21.5 10.5 L24.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Lichtbalken",
    desc: "Full-size LED lightbars van 55 cm tot 193 cm",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <rect x="2" y="12" width="28" height="8" rx="2.5" fill="currentColor" opacity="0.2" />
        <rect x="4" y="13.5" width="5" height="5" rx="1" fill="currentColor" />
        <rect x="11" y="13.5" width="5" height="5" rx="1" fill="currentColor" opacity="0.7" />
        <rect x="18" y="13.5" width="5" height="5" rx="1" fill="currentColor" />
        <path d="M2 12 Q16 9 30 12" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
  },
  {
    name: "Flitsers",
    desc: "Inbouw- en opbouwflitsers voor exterieur & dashboard",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M18 4 L10 18 H16 L14 28 L24 14 H18 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Sirenes",
    desc: "100W tot 200W elektronische sirenes & luidsprekers",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M8 12 C8 8 11 6 16 6 C21 6 24 8 24 12 L24 22 L8 22 Z" fill="currentColor" opacity="0.2" />
        <rect x="6" y="22" width="20" height="4" rx="1" fill="currentColor" />
        <path d="M4 14 C4 11 6 9 8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M28 14 C28 11 26 9 24 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "Communicatie",
    desc: "Analoge & digitale radiocommunicatiesystemen",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M4 20 C4 12.27 9.37 6 16 6 C22.63 6 28 12.27 28 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        <path d="M8 20 C8 14.48 11.58 10 16 10 C20.42 10 24 14.48 24 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
        <path d="M13 20 C13 18.34 14.34 17 16 17 C17.66 17 19 18.34 19 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="22" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Accessoires",
    desc: "Schakelaars, montagebeugels & bekabeling",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <circle cx="16" cy="16" r="5" fill="currentColor" opacity="0.15" />
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
        <path d="M16 3 L16 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 24 L16 29" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M3 16 L8 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 16 L29 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M5.5 5.5 L8.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M23.5 23.5 L26.5 26.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M5.5 26.5 L8.5 23.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M23.5 8.5 L26.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
];

const trustItems = [
  {
    value: "15+",
    label: "Jaar ervaring",
    desc: "Actief in voertuigsignalisatie since 2008",
  },
  {
    value: "500+",
    label: "Voertuigen uitgerust",
    desc: "Politie, brandweer, takeldiensten en meer",
  },
  {
    value: "2 dagen",
    label: "Gemiddelde levertijd",
    desc: "Snel leverbaar uit Belgisch magazijn",
  },
  {
    value: "CE / E-keur",
    label: "Gecertificeerd",
    desc: "Alle producten voldoen aan Europese normen",
  },
];

export default function HomePage() {
  return (
    <>
      <Header variant="light" />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-[#090909] min-h-screen flex items-center overflow-hidden road-stripe">
        {/* Lightbar strip at very top */}
        <div className="absolute top-0 left-0 right-0 h-[4px] lightbar" />

        {/* Radial glow from center-left */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 20% 50%, rgba(245,184,0,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Right-side large amber circle suggestion */}
        <div
          className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04] border border-[#F5B800]"
          aria-hidden="true"
        />
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full opacity-[0.06] border border-[#F5B800]"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/[0.07] border border-white/10 rounded-full px-4 py-1.5 mb-10 fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800] beacon-pulse" />
              <span
                className="text-[11px] font-semibold text-white/55 uppercase tracking-[0.14em]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Voertuigsignalisatie & Radiocommunicatie · Bilzen-Hoeselt
              </span>
            </div>

            <h1
              className="font-bold text-white leading-[1.02] tracking-[-0.01em] mb-6 fade-up fade-up-1"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 900,
              }}
            >
              Elke seconde
              <br />
              <span style={{ color: "#F5B800" }}>telt.</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-xl mb-10 fade-up fade-up-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              SafeSignal levert professionele signalisatie voor interventie- en
              werkvoertuigen. Van zwaailicht tot volledige voertuiguitrusting —
              gecertificeerd en vakkundig gemonteerd.
            </p>

            <div className="flex flex-wrap gap-4 fade-up fade-up-3">
              <Link
                href="/oplossingen"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F5B800] text-[#090909] font-bold text-sm rounded-lg hover:bg-[#FFE000] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Bekijk oplossingen
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact#offerte"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/[0.08] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Vraag een offerte
              </Link>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/[0.08] pt-10 fade-up fade-up-4">
            {[
              { value: "15+", label: "Jaar ervaring" },
              { value: "500+", label: "Voertuigen uitgerust" },
              { value: "CE/E-keur", label: "Gecertificeerd" },
              { value: "2 dgn", label: "Gem. levertijd" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl sm:text-3xl font-black"
                  style={{ fontFamily: "var(--font-display)", color: "#F5B800" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs text-white/35 mt-1 font-medium"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Business units ────────────────────────────────── */}
      <section className="py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p
              className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Drie divisies
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#090909] leading-[1.05]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Eén merk.
              <br />
              Drie specialisaties.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* SafeSignal Ready */}
            <Link
              href="/ready"
              className="group relative rounded-2xl overflow-hidden border border-black/[0.07] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ background: "#0D1B33" }}
            >
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #1B3A6B, #2563EB)" }} />
              <div className="p-8 flex flex-col flex-1">
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#4A7FD4", fontFamily: "var(--font-body)" }}
                >
                  SafeSignal Ready
                </span>
                <h3
                  className="text-2xl font-black text-white mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                >
                  Voertuiguitrusting & noodverlichting
                </h3>
                <p
                  className="text-sm text-white/55 leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Complete uitrusting van interventie- en werkvoertuigen. Lichtbalken, sirenes, Battenburg-markering
                  en radiocommunicatie — CE-gecertificeerd en vakkundig gemonteerd.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Lichtbalken & sirenes", "Battenburg", "Radiocommunicatie"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "#2563EB20", color: "#4A7FD4", fontFamily: "var(--font-body)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="inline-flex items-center gap-1.5 text-sm font-bold"
                  style={{ color: "#4A7FD4", fontFamily: "var(--font-body)" }}
                >
                  Meer over Ready
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* SafeSignal Infra */}
            <Link
              href="/infra"
              className="group relative rounded-2xl overflow-hidden border border-black/[0.07] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ background: "#1A0808" }}
            >
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #5C1010, #C0392B)" }} />
              <div className="p-8 flex flex-col flex-1">
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#E05252", fontFamily: "var(--font-body)" }}
                >
                  SafeSignal Infra
                </span>
                <h3
                  className="text-2xl font-black text-white mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                >
                  Tijdelijke wegsignalisatie
                </h3>
                <p
                  className="text-sm text-white/55 leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Volledige werf- en wegsignalisatie voor nutswerken, weginfrastructuur en wegenwerken.
                  Signalisatieplannen, materiaalverhuur en gecertificeerde verkeersregelaars.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Signalisatieplannen", "Materiaalverhuur", "Verkeersregelaars"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "#C0392B20", color: "#E05252", fontFamily: "var(--font-body)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="inline-flex items-center gap-1.5 text-sm font-bold"
                  style={{ color: "#E05252", fontFamily: "var(--font-body)" }}
                >
                  Meer over Infra
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* SafeSignal Convoy */}
            <Link
              href="/convoy"
              className="group relative rounded-2xl overflow-hidden border border-black/[0.07] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ background: "#1A1500" }}
            >
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #2A2000, #F5B800)" }} />
              <div className="p-8 flex flex-col flex-1">
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#F5B800", fontFamily: "var(--font-body)" }}
                >
                  SafeSignal Convoy
                </span>
                <h3
                  className="text-2xl font-black text-white mb-3"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                >
                  Begeleiding uitzonderlijk transport
                </h3>
                <p
                  className="text-sm text-white/55 leading-relaxed mb-6 flex-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Professionele escortediensten voor brede en zware ladingen door heel België en de buurlanden.
                  Van vergunningsaanvraag tot aankomst.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Escortevoertuigen", "Pilootbegeleiding", "Vergunningen"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "#F5B80020", color: "#F5B800", fontFamily: "var(--font-body)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="inline-flex items-center gap-1.5 text-sm font-bold"
                  style={{ color: "#F5B800", fontFamily: "var(--font-body)" }}
                >
                  Meer over Convoy
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Product categories ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p
                className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Productgamma
              </p>
              <h2
                className="text-4xl sm:text-5xl font-black text-[#090909]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
              >
                Alles voor uw
                <br />
                voertuig
              </h2>
            </div>
            <p
              className="text-sm text-[#888] max-w-xs leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Ons productgamma is beschikbaar via offerte. Een volledige
              webshop komt binnenkort beschikbaar.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {productCategories.map((cat) => (
              <div
                key={cat.name}
                className="group bg-[#F7F6F2] hover:bg-[#F5B800] rounded-xl p-5 transition-all duration-200 cursor-default"
              >
                <div className="w-10 h-10 text-[#090909] group-hover:text-[#090909] mb-4">
                  {cat.icon}
                </div>
                <p
                  className="text-sm font-bold text-[#090909] mb-1"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cat.name}
                </p>
                <p
                  className="text-[11px] text-[#888] group-hover:text-[#090909]/70 leading-snug"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href="/contact#offerte"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#090909] text-white text-sm font-semibold rounded-lg hover:bg-[#1a1a1a] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Vraag een prijsopgave
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <span className="text-sm text-[#888]" style={{ fontFamily: "var(--font-body)" }}>
              Webshop binnenkort beschikbaar
            </span>
          </div>
        </div>
      </section>

      {/* ─── Why SafeSignal ─────────────────────────────────── */}
      <section className="py-24 bg-[#090909]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold text-white/35 uppercase tracking-widest mb-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Waarom SafeSignal
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Vertrouwen door
              <br />
              <span style={{ color: "#F5B800" }}>vakmanschap</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div
                key={item.value}
                className="bg-[#141414] rounded-2xl p-7 border border-white/[0.06]"
              >
                <div
                  className="text-3xl font-black mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "#F5B800" }}
                >
                  {item.value}
                </div>
                <div
                  className="text-sm font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </div>
                <p
                  className="text-xs text-white/40 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sectors row */}
          <div className="mt-16 pt-12 border-t border-white/[0.06]">
            <p
              className="text-xs font-bold text-white/30 uppercase tracking-widest mb-8 text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Sectoren die wij bedienen
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Lokale & Federale Politie",
                "Brandweer",
                "Medische diensten",
                "Takeldiensten",
                "Nutsbedrijven",
                "Wegenbouw",
                "Gemeentelijke diensten",
                "Privé beveiliging",
              ].map((sector) => (
                <span
                  key={sector}
                  className="text-sm px-4 py-2 rounded-full border border-white/[0.1] text-white/50"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact / Quote ───────────────────────────────── */}
      <section id="offerte" className="py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: text */}
            <div>
              <p
                className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Contact
              </p>
              <h2
                className="text-4xl sm:text-5xl font-black text-[#090909] leading-[1.05] mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
              >
                Vraag een
                <br />
                offerte aan
              </h2>
              <p
                className="text-base text-[#555] leading-relaxed mb-10 max-w-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Heeft u een voertuig dat uitgerust moet worden? Beschrijf uw
                situatie en wij bezorgen u snel een voorstel op maat.
              </p>

              {/* Contact details */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5B800]/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#F5B800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#888] uppercase tracking-wide mb-0.5" style={{ fontFamily: "var(--font-body)" }}>E-mail</p>
                    <a href="mailto:info@safesignal.be" className="text-sm font-medium text-[#090909] hover:text-[#F5B800] transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                      info@safesignal.be
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5B800]/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#F5B800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#888] uppercase tracking-wide mb-0.5" style={{ fontFamily: "var(--font-body)" }}>Adres</p>
                    <p className="text-sm text-[#090909]" style={{ fontFamily: "var(--font-body)" }}>
                      Sint-Hubertusstraat 67<br />
                      BE-3730 Bilzen-Hoeselt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <QuoteForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
