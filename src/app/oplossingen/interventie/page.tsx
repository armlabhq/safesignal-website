import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

const COLOR = "#1A5FD4";
const LIGHT = "#EEF3FC";

const products = [
  {
    name: "LED Lichtbalken",
    range: "55 cm – 193 cm",
    desc: "Full-size lightbars met amber/blauw LEDs, R65-gekeurde modules en optioneel grille-flitsers. Redtronic DSFX serie in stock.",
    note: "E-keur & R65",
  },
  {
    name: "Zwaailichten",
    range: "Enkelvoudig",
    desc: "Rotatiezwaailichten en LED-beacons voor dakbevestiging. Compact formaat voor discreet gebruik of retrofit op bestaand materieel.",
    note: "Diverse modellen",
  },
  {
    name: "Sirenes & luidsprekers",
    range: "100W – 200W",
    desc: "Elektronische sirenes met meerdere tonen (wailing, yelp, Hi-Lo, air horn). Inclusief luidspreker en bedieningspaneel.",
    note: "Plug & play",
  },
  {
    name: "Dashboard-flitsers",
    range: "Inbouw",
    desc: "Inbouw LED-flitsers voor achteruit- en voorruit. Onzichtbaar als niet actief, maximale zichtbaarheid bij activatie.",
    note: "Covert gebruik",
  },
  {
    name: "Battenburg folies",
    range: "Op maat",
    desc: "Retro-reflecterende Battenburg-markering in keuringsklare kleuren (geel/groen politie, rood/geel brandweer). Snijwerk op maat.",
    note: "ADR-conform",
  },
  {
    name: "Radiocommunicatie",
    range: "Analoog / Digitaal",
    desc: "TETRA- en DMR-radioinstallaties voor hulpdiensten. Inclusief antenne-installatie en coaxbekabeling.",
    note: "TETRA / DMR",
  },
];

const steps = [
  {
    step: "01",
    title: "Intake",
    desc: "U deelt het voertuigtype, de toepassing en eventuele vereisten (politiezone, brandweerpost, etc.).",
  },
  {
    step: "02",
    title: "Voorstel op maat",
    desc: "Wij maken een voorstel met productselectie, prijs en montage-inschatting.",
  },
  {
    step: "03",
    title: "Montage",
    desc: "Professionele installatie in onze werkplaats of ter plaatse. Inclusief elektrische bekabeling.",
  },
  {
    step: "04",
    title: "Keuring & oplevering",
    desc: "Wij begeleiden de APK-keuring en leveren op met alle nodige documentatie.",
  },
];

export default function InterventiePage() {
  return (
    <>
      <Header variant="dark" />

      {/* Hero */}
      <section className="bg-[#090909] pt-36 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
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
            <span className="text-white/60">Interventievoertuigen</span>
          </div>

          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: `${COLOR}20`, color: COLOR, fontFamily: "var(--font-body)" }}
          >
            Noodinterventie
          </span>

          <h1
            className="font-black text-white leading-[1.02] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            Signalisatie voor
            <br />
            <span style={{ color: COLOR }}>interventievoertuigen</span>
          </h1>
          <p
            className="text-lg text-white/55 leading-relaxed max-w-xl mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Complete uitrusting voor politie, brandweer en medische diensten —
            gecertificeerd, vakkundig gemonteerd en afgestemd op de Belgische
            en Europese regelgeving.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Lokale & Federale Politie", "Brandweer", "MICU / Ziekenwagen", "Civiele bescherming"].map((s) => (
              <span
                key={s}
                className="text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 text-white/55"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: COLOR, fontFamily: "var(--font-body)" }}>
              Productgamma
            </p>
            <h2
              className="text-4xl font-black text-[#090909]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Wat wij leveren
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.name} className="bg-[#F7F6F2] rounded-2xl p-7 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-bold text-[#090909]" style={{ fontFamily: "var(--font-body)" }}>
                    {p.name}
                  </h3>
                  <span
                    className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded whitespace-nowrap flex-shrink-0"
                    style={{ background: LIGHT, color: COLOR, fontFamily: "var(--font-body)" }}
                  >
                    {p.note}
                  </span>
                </div>
                <p className="text-xs font-semibold mb-2" style={{ color: COLOR, fontFamily: "var(--font-body)" }}>
                  {p.range}
                </p>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: COLOR, fontFamily: "var(--font-body)" }}>
              Werkwijze
            </p>
            <h2
              className="text-4xl font-black text-[#090909]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Van aanvraag tot oplevering
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.step}>
                <div
                  className="text-5xl font-black mb-3 leading-none"
                  style={{ fontFamily: "var(--font-display)", color: COLOR, opacity: 0.18 }}
                >
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-[#090909] mb-2" style={{ fontFamily: "var(--font-body)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section id="offerte" className="py-24 bg-[#F7F6F2]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: COLOR, fontFamily: "var(--font-body)" }}>
              Offerte
            </p>
            <h2
              className="text-4xl font-black text-[#090909] mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Uitrusting aanvragen
            </h2>
            <p className="text-base text-[#555]" style={{ fontFamily: "var(--font-body)" }}>
              Beschrijf het voertuig en de vereisten. Wij bezorgen u snel een voorstel op maat.
            </p>
          </div>
          <QuoteForm accentColor={COLOR} />
        </div>
      </section>

      <Footer />
    </>
  );
}
