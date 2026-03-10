import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const solutions = [
  {
    href: "/oplossingen/interventie",
    accentColor: "#1A5FD4",
    lightBg: "#EEF3FC",
    category: "Noodinterventie",
    title: "Interventievoertuigen",
    description:
      "Complete signalisatiesystemen voor politie, brandweer en medische diensten. Gecertificeerde lichtbalken, LED-zwaailichten, sirenes en Battenburg-retro-reflecterende markering — conform R65, ECE-R10 en Belgische regelgeving.",
    sectors: ["Lokale & Federale Politie", "Brandweer", "MICU / Ziekenwagen", "Civiele bescherming"],
    products: ["LED Lichtbalken", "Zwaailichten", "Sirenes (100–200W)", "Battenburg folies", "Dashboard-flitsers"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M8 34 L8 24 L20 16 L28 16 L40 24 L40 34" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M4 34 L44 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="18" y="10" width="12" height="6" rx="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="14" cy="37" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="34" cy="37" r="4" fill="currentColor" opacity="0.4" />
        {/* Lightbar on top */}
        <rect x="14" y="8" width="20" height="4" rx="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "/oplossingen/werkvoertuigen",
    accentColor: "#F5B800",
    lightBg: "#FFF9E6",
    category: "Werf & Transport",
    title: "Werkvoertuigen",
    description:
      "Professionele amber LED-signalisatie voor takeldiensten, nutsbedrijven, wegenbouwers en gemeentelijke diensten. Robuuste systemen bestand tegen bouwplaatscondities — conform norm ECE-R65.",
    sectors: ["Takeldiensten", "Elektriciteit & Gas", "Wegenbouw", "Gemeentelijke diensten"],
    products: ["Amber zwaailichten (ECE-R65)", "Lichtbalken amber", "Magneetvoeten", "Strobe flitsers", "Verkeersborden LED"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M6 34 L6 22 L18 14 L36 14 L42 20 L42 34" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M2 34 L46 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="14" cy="37" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="34" cy="37" r="4" fill="currentColor" opacity="0.4" />
        {/* Warning lights on roof */}
        <rect x="16" y="10" width="16" height="4" rx="1" fill="currentColor" />
        <circle cx="20" cy="12" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="28" cy="12" r="2" fill="currentColor" opacity="0.6" />
        {/* Load area */}
        <rect x="28" y="22" width="10" height="8" rx="1" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    href: "/oplossingen/installatie",
    accentColor: "#1B5E3A",
    lightBg: "#EEF6F2",
    category: "Service",
    title: "Installatie & ondersteuning",
    description:
      "Vakkundige montage in onze werkplaats te Bilzen-Hoeselt of ter plaatse. Elektrische installaties, 12/24V omvormers, bekabeling op maat en volledige APK-begeleiding voor uw vloot.",
    sectors: ["Alle sectoren", "Vlootbeheerders", "Wagenparkbeheer"],
    products: ["Montage op maat", "Elektrische bekabeling", "12/24V omvormers", "APK-keuring begeleiding", "Ombouw bestaand materiaal"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 8 L38 16 L38 32 L24 40 L10 32 L10 16 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1" />
        <path d="M18 24 L22 28 L30 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Wrench icon overlay */}
        <circle cx="36" cy="12" r="5" fill="currentColor" opacity="0.25" />
        <path d="M34 10 L38 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 8 L40 12 L36 14 L32 12 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
];

export default function OplossingenPage() {
  return (
    <>
      <Header variant="dark" />

      {/* Hero */}
      <section className="bg-[#F7F6F2] pt-32 pb-16 border-b border-black/[0.07]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#888] mb-6" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/" className="hover:text-[#090909] transition-colors">SafeSignal</Link>
            <span>/</span>
            <span className="text-[#090909]">Oplossingen</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black text-[#090909] leading-[1.02] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
          >
            Wat heeft uw
            <br />
            voertuig nodig?
          </h1>
          <p
            className="text-lg text-[#555] max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            SafeSignal biedt oplossingen op maat voor zichtbaarheid,
            signalisatie en veiligheid — afgestemd op uw sector en voertuig.
          </p>
        </div>
      </section>

      {/* Solution cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {solutions.map((sol) => (
            <div
              key={sol.href}
              className="rounded-2xl border border-black/[0.07] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="h-1"
                style={{ background: sol.accentColor }}
              />
              <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left: Icon + heading */}
                <div className="lg:col-span-1">
                  <div
                    className="w-16 h-16 rounded-xl p-3 mb-5"
                    style={{ background: sol.lightBg, color: sol.accentColor }}
                  >
                    {sol.icon}
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest block mb-2"
                    style={{ color: sol.accentColor, fontFamily: "var(--font-body)" }}
                  >
                    {sol.category}
                  </span>
                  <h2
                    className="text-3xl font-black text-[#090909] mb-4"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                  >
                    {sol.title}
                  </h2>
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold"
                    style={{ color: sol.accentColor, fontFamily: "var(--font-body)" }}
                  >
                    Meer over deze oplossing
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Middle: Description + sectors */}
                <div className="lg:col-span-1">
                  <p
                    className="text-sm text-[#555] leading-relaxed mb-5"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {sol.description}
                  </p>
                  <p
                    className="text-xs font-bold text-[#888] uppercase tracking-wide mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Sectoren
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.sectors.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: `${sol.accentColor}12`,
                          color: sol.accentColor,
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Products */}
                <div className="lg:col-span-1">
                  <p
                    className="text-xs font-bold text-[#888] uppercase tracking-wide mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Producten & diensten
                  </p>
                  <ul className="space-y-2">
                    {sol.products.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-sm text-[#444]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" fill={sol.accentColor} opacity="0.15" />
                          <path d="M4.5 7l2 2 3-4" stroke={sol.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#090909]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="h-[3px] lightbar rounded-full w-24 mx-auto mb-10" />
          <h2
            className="text-4xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
          >
            Klaar om uw voertuig
            <br />
            <span style={{ color: "#F5B800" }}>zichtbaarder</span> te maken?
          </h2>
          <p
            className="text-base text-white/50 mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Neem contact op voor een vrijblijvend adviesgesprek of vraag direct
            een offerte aan.
          </p>
          <Link
            href="/contact#offerte"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F5B800] text-[#090909] font-bold text-sm rounded-lg hover:bg-[#FFE000] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Offerte aanvragen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
