import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

const services = [
  {
    title: "Politiebegeleiding",
    description:
      "Coördinatie en begeleiding van uitzonderlijk transport in samenwerking met lokale en federale politiediensten. Volledige dossierafhandeling.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M4 16 L28 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 10 L28 16 L22 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 10 L10 10 L10 22 L4 22 Z" fill="currentColor" opacity="0.2" />
        <path d="M4 10 L10 10 L10 22 L4 22 Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Routeplanning & vergunningen",
    description:
      "Voorafgaande route-analyse, aanvragen van transportvergunningen en afstemming met wegbeheerders en overheden.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M16 4 C10 4 6 8 6 14 C6 22 16 28 16 28 C16 28 26 22 26 14 C26 8 22 4 16 4Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.15" />
        <circle cx="16" cy="14" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Wagenpark escortevoertuigen",
    description:
      "Volledig uitgeruste escortevoertuigen met gekeurd waarschuwingssysteem: lichtbalken, knipperlichten, tekstborden en TMS-systemen.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <rect x="2" y="14" width="28" height="10" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        <rect x="4" y="10" width="16" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="26" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="26" r="2.5" stroke="currentColor" strokeWidth="2" />
        <rect x="6" y="12" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.6" />
        <rect x="12" y="12" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Pilootvoertuigen (voor & achter)",
    description:
      "Gecertificeerde voor- en achterbegeleiders met alle vereiste signalisatie. Training en attest voor uw chauffeurs beschikbaar.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M4 18 L12 18 L14 10 L18 10 L20 18 L28 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="22" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="22" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M4 12 L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M24 12 L28 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Nachtelijke transporten",
    description:
      "Specialisatie in nacht- en weekendtransporten voor brede ladingen. Extra verlichting en coördinatie met wegbeheerders.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path d="M20 6 C14 8 10 14 12 20 C14 26 20 28 26 26 C20 28 12 24 10 18 C8 12 12 6 18 4 C18.7 3.8 19.4 3.9 20 6Z" fill="currentColor" opacity="0.8" />
        <path d="M20 6 C14 8 10 14 12 20 C14 26 20 28 26 26 C20 28 12 24 10 18 C8 12 12 6 18 4 C18.7 3.8 19.4 3.9 20 6Z" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Training & certificering",
    description:
      "Opleiding voor pilootvoertuigchauffeurs conform de Belgische wetgeving. Verlenging van attesten en bijscholing.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        <path d="M10 14 L22 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M10 18 L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="24" cy="24" r="5" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 24 L23.5 25.5 L26 22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const transportTypes = [
  { label: "Windmolenturbines", sub: "Rotorbladen, torensegmenten, gondels" },
  { label: "Brugdelen & staalconstructies", sub: "Prefab-elementen, liggers" },
  { label: "Industriële machines", sub: "Transformatoren, reactorvaten, persen" },
  { label: "Prefab betonnen elementen", sub: "Tunnelringen, brugliggers" },
  { label: "Modulaire gebouwelementen", sub: "Groot bouwmateriaal" },
  { label: "Landbouwmachines", sub: "Combines, ploegen, sproeiers" },
];

export default function ConvoyPage() {
  return (
    <>
      <Header variant="light" />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-[#0D1B33] min-h-screen flex items-center overflow-hidden">
        {/* Lightbar strip */}
        <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: "linear-gradient(90deg, #1B3A6B 0%, #2952A3 25%, #4A7FD4 50%, #2952A3 75%, #1B3A6B 100%)" }} />

        {/* Chevron pattern background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                right: `${-10 + i * 18}%`,
                top: "0",
                bottom: "0",
                width: "120px",
                background: "linear-gradient(135deg, #4A7FD4 25%, transparent 25%) -10px 0, linear-gradient(225deg, #4A7FD4 25%, transparent 25%) -10px 0, linear-gradient(315deg, #4A7FD4 25%, transparent 25%), linear-gradient(45deg, #4A7FD4 25%, transparent 25%)",
                backgroundSize: "20px 20px",
                backgroundPosition: "-10px 0, -10px 0, 0 0, 0 0",
              }}
            />
          ))}
        </div>

        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(41,82,163,0.15) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-white/[0.07] border border-white/10 rounded-full px-4 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4A7FD4]" style={{ boxShadow: "0 0 6px #4A7FD4" }} />
              <span className="text-[11px] font-semibold text-white/55 uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-body)" }}>
                SafeSignal Convoy · Begeleiding uitzonderlijk transport
              </span>
            </div>

            <h1
              className="font-bold text-white leading-[1.02] tracking-[-0.01em] mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 900 }}
            >
              Elke lading.
              <br />
              <span style={{ color: "#4A7FD4" }}>Veilig ter plaatse.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-xl mb-10" style={{ fontFamily: "var(--font-body)" }}>
              SafeSignal Convoy organiseert en begeleidt uitzonderlijk transport door heel België en de buurlanden.
              Van vergunningsaanvraag tot aankomst — professioneel, veilig en conform de wetgeving.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact#offerte"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-sm rounded-lg transition-colors"
                style={{ background: "#4A7FD4", color: "#fff", fontFamily: "var(--font-body)" }}
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
              { value: "10+", label: "Jaar ervaring" },
              { value: "BE / NL / DE", label: "Regio" },
              { value: "24/7", label: "Beschikbaar" },
              { value: "100%", label: "Conform wetgeving" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#4A7FD4" }}>{stat.value}</div>
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
              Alles voor een veilig
              <br />
              uitzonderlijk transport
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl p-8 border border-black/[0.07] hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 text-[#1B3A6B] mb-5">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#090909] mb-2" style={{ fontFamily: "var(--font-display)" }}>{service.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Transport types ──────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Ladingen
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#090909] leading-[1.05] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Wij begeleiden
                <br />
                elk formaat
              </h2>
              <p className="text-base text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Van windmolenturbines tot prefab bouwdelen — SafeSignal Convoy heeft ervaring met de meest uiteenlopende
                uitzonderlijke transporten. Wij kennen de routes, de regelgeving en de valkuilen.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {transportTypes.map((type) => (
                <div key={type.label} className="bg-[#F7F6F2] rounded-xl p-5 border border-black/[0.05]">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full" style={{ background: "#4A7FD4" }} />
                    <p className="text-sm font-bold text-[#090909]" style={{ fontFamily: "var(--font-body)" }}>{type.label}</p>
                  </div>
                  <p className="text-xs text-[#888] pl-4" style={{ fontFamily: "var(--font-body)" }}>{type.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Wetgeving CTA ───────────────────────────────── */}
      <section className="py-20 bg-[#0D1B33]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
            Conform het KB Uitzonderlijk Vervoer
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto mb-8" style={{ fontFamily: "var(--font-body)" }}>
            Alle begeleiding en signalisatie voldoet aan het Koninklijk Besluit van 2 juni 2010 betreffende het uitzonderlijk
            vervoer over de weg en de escorterende voertuigen.
          </p>
          <Link
            href="/contact#offerte"
            className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-sm rounded-lg transition-colors"
            style={{ background: "#4A7FD4", color: "#fff", fontFamily: "var(--font-body)" }}
          >
            Neem contact op
          </Link>
        </div>
      </section>

      {/* ─── Quote form ──────────────────────────────────── */}
      <section id="offerte" className="py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Convoy · Contact
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#090909] leading-[1.05] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Plan uw
                <br />
                transport
              </h2>
              <p className="text-base text-[#555] leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
                Beschrijf uw lading, de route en de gewenste datum. Wij bezorgen u snel een offerte voor de begeleiding.
              </p>
              <div className="space-y-3">
                {["Afmetingen en gewicht van de lading", "Vertrek- en aankomstpunt", "Gewenste datum en tijdstip", "Eventuele bijzonderheden of vereisten"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#4A7FD4" }}>
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
