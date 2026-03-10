import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

const COLOR = "#F5B800";
const LIGHT = "#FFF9E6";

const products = [
  {
    name: "Amber zwaailichten",
    range: "ECE-R65",
    desc: "Enkelvoudige LED-beacons in amber voor tak, dakbevestiging of magneetvoet. Gecertificeerd conform ECE-R65.",
    note: "ECE-R65",
  },
  {
    name: "Amber lichtbalken",
    range: "60 – 180 cm",
    desc: "Full-size lightbars uitsluitend in amber. Ideaal voor takeldiensten, berginsgwagens en wegsleepwagens.",
    note: "Slimme LED",
  },
  {
    name: "Magneetvoeten & bevestiging",
    range: "Accessoires",
    desc: "Sterke magneetvoeten voor tijdelijke montage of beugels voor permanente bevestiging op elk daktype.",
    note: "Diverse types",
  },
  {
    name: "Strobe & omtrekflitsers",
    range: "Inbouw / Opbouw",
    desc: "LED-strobe flitsers voor integratie in bestaande verlichting (achterlichten, richtingaanwijzers) of als aparte opbouweenheid.",
    note: "Retrofit",
  },
  {
    name: "LED verkeersborden",
    range: "Op maat",
    desc: "Verlichte verkeersborden voor wegwerkers en werfvoertuigen. Gemotoriseerde uitklapaars op aanvraag.",
    note: "Werf",
  },
  {
    name: "Omvormers & elektra",
    range: "12V / 24V",
    desc: "Volledige elektrische installaties voor werkauto's en bestelwagens. 12/24V omvormers, zekeringboxen en bekabeling.",
    note: "Installatie",
  },
];

const useCases = [
  {
    title: "Takeldiensten",
    desc: "Amber zwaailichten en achterwaartse waarschuwingsverlichting voor bergers en takeldiensten.",
    reqs: "ECE-R65 amber · Achteruitrijverlichting · Magneetvoet",
  },
  {
    title: "Nutsbedrijven (gas, water, elektriciteit)",
    desc: "Signalisatie voor onderhoudswagens op openbare weg. Aanvullend: verkeersafzetting en LED-kegels.",
    reqs: "Amber LED · Dakvinding · Veiligheidsverlichting",
  },
  {
    title: "Wegenbouw & asfaltering",
    desc: "Robuuste systemen bestand tegen stof, trillingen en extreme temperaturen. IP67-gecertificeerd.",
    reqs: "IP67 · Robuust · Hoge helderheid",
  },
  {
    title: "Gemeentelijke diensten",
    desc: "Veegmachines, groenonderhoud, sneeuwploegen — signalisatie voor gemeentelijk materieel.",
    reqs: "Diverse voertuigtypen · Vlootprijzen",
  },
];

export default function WerkvoertuigenPage() {
  return (
    <>
      <Header variant="dark" />

      {/* Hero */}
      <section className="bg-[#090909] pt-36 pb-20 relative overflow-hidden road-stripe">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
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
            <span className="text-white/60">Werkvoertuigen</span>
          </div>

          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ background: `${COLOR}22`, color: COLOR, fontFamily: "var(--font-body)" }}
          >
            Werf & Transport
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
            <span style={{ color: COLOR }}>werkvoertuigen</span>
          </h1>
          <p
            className="text-lg text-white/55 leading-relaxed max-w-xl mb-10"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Professionele amber LED-signalisatie voor takeldiensten,
            nutsbedrijven en wegenbouwers. ECE-R65 gecertificeerd en bestand
            tegen bouwplaatscondities.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Takeldiensten", "Nutsbedrijven", "Wegenbouw", "Gemeentelijke diensten"].map((s) => (
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
              Alles voor uw werkvoertuig
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
                    style={{ background: LIGHT, color: "#8B6A00", fontFamily: "var(--font-body)" }}
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

      {/* Use cases */}
      <section className="py-24" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8B6A00", fontFamily: "var(--font-body)" }}>
              Toepassingen
            </p>
            <h2
              className="text-4xl font-black text-[#090909]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Per sector
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-white rounded-2xl p-7 border border-black/[0.07]"
              >
                <h3 className="text-lg font-bold text-[#090909] mb-2" style={{ fontFamily: "var(--font-body)" }}>
                  {uc.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  {uc.desc}
                </p>
                <p className="text-xs font-semibold text-[#888]" style={{ fontFamily: "var(--font-body)" }}>
                  {uc.reqs}
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
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8B6A00", fontFamily: "var(--font-body)" }}>
              Offerte
            </p>
            <h2
              className="text-4xl font-black text-[#090909] mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Uitrusting aanvragen
            </h2>
            <p className="text-base text-[#555]" style={{ fontFamily: "var(--font-body)" }}>
              Beschrijf uw voertuig en toepassing. Wij bezorgen u snel een voorstel.
            </p>
          </div>
          <QuoteForm accentColor={COLOR} />
        </div>
      </section>

      <Footer />
    </>
  );
}
