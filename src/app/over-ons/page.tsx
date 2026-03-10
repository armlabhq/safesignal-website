import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function OverOnsPage() {
  return (
    <>
      <Header variant="dark" />

      <section className="bg-[#F7F6F2] pt-32 pb-16 border-b border-black/[0.07]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#888] mb-6" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/" className="hover:text-[#090909] transition-colors">SafeSignal</Link>
            <span>/</span>
            <span className="text-[#090909]">Over ons</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black text-[#090909] leading-[1.02] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
          >
            Over SafeSignal
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs font-bold text-[#888] uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Wie zijn wij
              </p>
              <h2
                className="text-4xl font-black text-[#090909] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
              >
                Specialist in
                voertuigsignalisatie
              </h2>
              <div className="space-y-4 text-base text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                <p>
                  SafeSignal — een activiteit van Armlab BV — is gespecialiseerd in
                  professionele voertuigsignalisatie en radiocommunicatiesystemen
                  voor de Belgische markt.
                </p>
                <p>
                  Wij leveren en installeren signalisatie voor zowel de{" "}
                  <strong className="text-[#090909]">blauwe markt</strong> (politie, brandweer,
                  medische diensten) als de{" "}
                  <strong className="text-[#090909]">gele markt</strong> (takeldiensten,
                  nutsbedrijven, wegenbouwers). Elk voertuig, elke sector.
                </p>
                <p>
                  Onze werkplaats bevindt zich in Bilzen-Hoeselt (Limburg) en wij
                  zijn actief in heel België. Wij bieden installaties ter plaatse
                  aan voor grotere vloten of vaste contracten.
                </p>
              </div>
            </div>

            <div className="bg-[#090909] rounded-2xl p-10 space-y-8">
              <div>
                <div className="text-3xl font-black text-[#F5B800] mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  Armlab BV
                </div>
                <div className="text-sm text-white/50" style={{ fontFamily: "var(--font-body)" }}>
                  BTW BE0899.277.201
                </div>
              </div>
              <div className="border-t border-white/[0.08] pt-8 space-y-4">
                {[
                  { label: "Adres", value: "Sint-Hubertusstraat 67\nBE-3730 Bilzen-Hoeselt" },
                  { label: "E-mail", value: "info@safesignal.be" },
                  { label: "Activiteit", value: "Voertuigsignalisatie & Radiocommunicatie" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs font-semibold text-white/35 uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-body)" }}>
                      {item.label}
                    </p>
                    <p className="text-sm text-white/70 whitespace-pre-line" style={{ fontFamily: "var(--font-body)" }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
