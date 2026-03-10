import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

const COLOR = "#1B5E3A";
const LIGHT = "#EEF6F2";

const services = [
  {
    title: "Montage in werkplaats",
    desc: "Breng uw voertuig naar onze werkplaats in Bilzen-Hoeselt voor een complete installatie. Snelle doorlooptijden, vakkundig afgewerkt.",
    icon: "🔧",
  },
  {
    title: "On-site installatie",
    desc: "Wij komen naar uw locatie voor installatiewerk op vloten of voertuigen die moeilijk te verplaatsen zijn (vrachtwagens, bulldozers).",
    icon: "🚐",
  },
  {
    title: "Elektrische bekabeling",
    desc: "Volledige bekabeling, zekeringboxen, relaisboxen en aansluiting op het boordnetwerk. 12V en 24V systemen.",
    icon: "⚡",
  },
  {
    title: "12/24V omvormers",
    desc: "Installatie van omvormers voor voertuigen met 24V boordnet (bussen, vrachtwagens) die 12V-componenten voeden.",
    icon: "🔋",
  },
  {
    title: "APK-begeleiding",
    desc: "Wij bereiden de keuringsdocumentatie voor en begeleiden de APK-keuring voor gecertificeerde signalisatie (E-keur, R65).",
    icon: "📋",
  },
  {
    title: "Ombouw & retrofit",
    desc: "Upgrade van bestaand materieel: vervang halogenezwaailichten door LED, moderniseer sirenes of breid het systeem uit.",
    icon: "♻️",
  },
  {
    title: "Onderhoud & reparatie",
    desc: "Preventief onderhoud en reparatie van geïnstalleerde systemen. Vlootcontracten beschikbaar voor grotere organisaties.",
    icon: "🛠️",
  },
  {
    title: "Technisch advies",
    desc: "Gratis intake-consult voor complexe projecten. Wij adviseren over productselectie, plaatsing en Belgische regelgeving.",
    icon: "💡",
  },
];

export default function InstallatiePage() {
  return (
    <>
      <Header variant="dark" />

      {/* Hero */}
      <section className="bg-[#090909] pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 50% 70% at 80% 50%, ${COLOR} 0%, transparent 70%)`,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[3px] lightbar" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-white/35 mb-8" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/" className="hover:text-white/60 transition-colors">SafeSignal</Link>
            <span>/</span>
            <Link href="/oplossingen" className="hover:text-white/60 transition-colors">Oplossingen</Link>
            <span>/</span>
            <span className="text-white/60">Installatie & ondersteuning</span>
          </div>

          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: `${COLOR}20`, color: "#2D8A5E", fontFamily: "var(--font-body)" }}
          >
            Service
          </span>

          <h1
            className="font-black text-white leading-[1.02] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Installatie &
            <br />
            <span style={{ color: "#2D8A5E" }}>ondersteuning</span>
          </h1>
          <p
            className="text-lg text-white/55 leading-relaxed max-w-xl mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Vakkundige montage en elektrische installaties in onze werkplaats
            of ter plaatse. Van enkelvoudige zwaailichtmontage tot volledige
            voertuiguitrusting met APK-begeleiding.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#offerte"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#F5B800] text-[#090909] font-bold text-sm rounded-lg hover:bg-[#FFE000] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Montage aanvragen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Location callout */}
      <section className="py-12 bg-[#F7F6F2] border-b border-black/[0.07]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-8 sm:items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: LIGHT }}>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill={COLOR}>
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-[#888] uppercase tracking-wide" style={{ fontFamily: "var(--font-body)" }}>Werkplaats</p>
              <p className="text-sm font-medium text-[#090909]" style={{ fontFamily: "var(--font-body)" }}>Sint-Hubertusstraat 67, BE-3730 Bilzen-Hoeselt</p>
            </div>
          </div>
          <div className="h-px sm:h-8 sm:w-px bg-black/10 flex-shrink-0" />
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: LIGHT }}>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill={COLOR}>
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-[#888] uppercase tracking-wide" style={{ fontFamily: "var(--font-body)" }}>On-site service</p>
              <p className="text-sm font-medium text-[#090909]" style={{ fontFamily: "var(--font-body)" }}>Beschikbaar in België en aangrenzende regio's</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: COLOR, fontFamily: "var(--font-body)" }}>
              Onze diensten
            </p>
            <h2
              className="text-4xl font-black text-[#090909]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Alles onder één dak
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-[#F7F6F2] rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-4">{s.icon}</div>
                <h3 className="text-sm font-bold text-[#090909] mb-2" style={{ fontFamily: "var(--font-body)" }}>
                  {s.title}
                </h3>
                <p className="text-xs text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="offerte" className="py-24" style={{ background: LIGHT }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: COLOR, fontFamily: "var(--font-body)" }}>
              Montage aanvragen
            </p>
            <h2
              className="text-4xl font-black text-[#090909] mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Installatie & ondersteuning
            </h2>
            <p className="text-base text-[#555]" style={{ fontFamily: "var(--font-body)" }}>
              Beschrijf het voertuig, de gewenste uitrusting en uw locatie. Wij plannen snel een afspraak in.
            </p>
          </div>
          <QuoteForm accentColor={COLOR} />
        </div>
      </section>

      <Footer />
    </>
  );
}
