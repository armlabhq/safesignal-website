import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "SafeSignal Ready — Voertuiguitrusting & Noodverlichting",
  description:
    "SafeSignal Ready rust interventie- en werkvoertuigen professioneel uit. Lichtbalken, sirenes, Battenburg-markering, radiocommunicatie — CE-gecertificeerd en vakkundig gemonteerd in Bilzen-Hoeselt.",
  openGraph: {
    title: "SafeSignal Ready — Voertuiguitrusting & Noodverlichting",
    description:
      "Complete uitrusting voor politie, brandweer en werkvoertuigen. Gecertificeerde lichtbalken, sirenes en Battenburg-markering.",
    url: "https://safesignal.be/ready",
    siteName: "SafeSignal",
    locale: "nl_BE",
    type: "website",
  },
};

const services = [
  {
    title: "Interventievoertuigen",
    description:
      "Complete uitrusting voor politie, brandweer en medische diensten. Lichtbalken, sirenes, Battenburg-markering conform Belgische en Europese normen.",
    href: "/oplossingen/interventie",
    tags: ["Politie", "Brandweer", "MICU"],
  },
  {
    title: "Werkvoertuigen",
    description:
      "Zwaailichten en amber signalisatiesystemen voor takeldiensten, nutsbedrijven en wegenbouw. Op maat van uw voertuig en sector.",
    href: "/oplossingen/werkvoertuigen",
    tags: ["Takeldiensten", "Nutsbedrijven", "Wegenbouw"],
  },
  {
    title: "Installatie & ondersteuning",
    description:
      "Professionele montage in onze werkplaats of ter plaatse. Elektrische installaties, omvormers, bekabeling en APK-begeleiding.",
    href: "/oplossingen/installatie",
    tags: ["Montage op maat", "Elektrisch", "APK"],
  },
];

const productCategories = [
  { name: "Zwaailichten", desc: "Enkelvoudige LED-beacons voor dakbevestiging" },
  { name: "Lichtbalken", desc: "Full-size LED lightbars van 55 cm tot 193 cm" },
  { name: "Flitsers", desc: "Inbouw- en opbouwflitsers voor exterieur & dashboard" },
  { name: "Sirenes", desc: "100W tot 200W elektronische sirenes & luidsprekers" },
  { name: "Communicatie", desc: "Analoge & digitale radiocommunicatiesystemen" },
  { name: "Accessoires", desc: "Schakelaars, montagebeugels & bekabeling" },
];

const vehicleTypes = [
  "Politievoertuigen",
  "Brandweervoertuigen",
  "Ziekenwagens (MICU)",
  "Takelbusjes & -trucks",
  "Nutsbedrijfsvoertuigen",
  "Gemeentelijke voertuigen",
  "Wegenbouwmachines",
  "Particuliere beveiliging",
];

export default function ReadyPage() {
  return (
    <>
      <Header variant="light" />

      {/* ─── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0D1B33" }}>
        {/* Red accent strip with Battenburg suggestion */}
        <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: "linear-gradient(90deg, #1B3A6B 0%, #1E50A8 25%, #2563EB 50%, #1E50A8 75%, #1B3A6B 100%)" }} />

        {/* Battenburg block pattern */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none overflow-hidden opacity-[0.06]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "repeating-conic-gradient(#2563EB 0% 25%, transparent 0% 50%)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(37,99,235,0.15) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-white/[0.07] border border-white/10 rounded-full px-4 py-1.5 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" style={{ boxShadow: "0 0 6px #2563EB" }} />
              <span className="text-[11px] font-semibold text-white/55 uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-body)" }}>
                SafeSignal Ready · Voertuiguitrusting & noodverlichting
              </span>
            </div>

            <h1
              className="font-bold text-white leading-[1.02] tracking-[-0.01em] mb-6"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 900 }}
            >
              Uw voertuig.
              <br />
              <span style={{ color: "#4A7FD4" }}>Altijd klaar.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-xl mb-10" style={{ fontFamily: "var(--font-body)" }}>
              SafeSignal Ready rust interventie- en werkvoertuigen professioneel uit met gecertificeerde verlichting,
              sirenes en radiocommunicatie. Vakkundig gemonteerd, CE-gekeurd en klaar voor inzet.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact#offerte"
                className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-sm rounded-lg transition-colors"
                style={{ background: "#2563EB", color: "#fff", fontFamily: "var(--font-body)" }}
              >
                Vraag een offerte
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#oplossingen"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/[0.08] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Bekijk oplossingen
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/[0.08] pt-10">
            {[
              { value: "15+", label: "Jaar ervaring" },
              { value: "100+", label: "Voertuigen uitgerust" },
              { value: "CE / E-keur", label: "Gecertificeerd" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-black" style={{ fontFamily: "var(--font-display)", color: "#4A7FD4" }}>{stat.value}</div>
                <div className="text-xs text-white/35 mt-1 font-medium" style={{ fontFamily: "var(--font-body)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Oplossingen ──────────────────────────────────── */}
      <section id="oplossingen" className="py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Oplossingen
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#090909] leading-[1.05]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
              Voor elk voertuig
              <br />
              de juiste uitrusting
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden border border-black/[0.07] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="h-1 w-full" style={{ background: "#2563EB" }} />
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-black text-[#090909] mb-3" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed mb-6 flex-1" style={{ fontFamily: "var(--font-body)" }}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: "#2563EB14", color: "#2563EB", fontFamily: "var(--font-body)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "#2563EB", fontFamily: "var(--font-body)" }}>
                    Meer informatie
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Productgamma ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Productgamma
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#090909]" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
              Alles voor uw voertuig
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {productCategories.map((cat) => (
              <div
                key={cat.name}
                className="group bg-[#F7F6F2] hover:bg-[#2563EB] rounded-xl p-5 transition-all duration-200 cursor-default"
              >
                <p className="text-sm font-bold text-[#090909] group-hover:text-white mb-1" style={{ fontFamily: "var(--font-body)" }}>{cat.name}</p>
                <p className="text-[11px] text-[#888] group-hover:text-white/70 leading-snug" style={{ fontFamily: "var(--font-body)" }}>{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Voertuigtypes ────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0D1B33" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
              Voertuigtypes
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
              Wij rusten elk voertuig uit
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {vehicleTypes.map((type) => (
              <span
                key={type}
                className="text-sm px-4 py-2 rounded-full border border-white/[0.1] text-white/55"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {type}
              </span>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact#offerte"
              className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-sm rounded-lg transition-colors"
              style={{ background: "#2563EB", color: "#fff", fontFamily: "var(--font-body)" }}
            >
              Vraag een prijsopgave
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Quote form ──────────────────────────────────── */}
      <section id="offerte" className="py-24 bg-[#F7F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Ready · Contact
              </p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#090909] leading-[1.05] mb-6" style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Rust uw voertuig uit
              </h2>
              <p className="text-base text-[#555] leading-relaxed mb-8 max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
                Beschrijf uw voertuig en de gewenste uitrusting. Wij bezorgen u snel een offerte op maat.
              </p>
              <div className="space-y-3">
                {["Type en merk voertuig", "Gewenste signalisatie (licht, geluid, …)", "Eventuele APK-vereisten", "Gewenste leveringstermijn"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#2563EB" }}>
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
