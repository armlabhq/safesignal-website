import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Header variant="dark" />

      <section className="bg-[#F7F6F2] pt-32 pb-16 border-b border-black/[0.07]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-[#888] mb-6" style={{ fontFamily: "var(--font-body)" }}>
            <Link href="/" className="hover:text-[#090909] transition-colors">SafeSignal</Link>
            <span>/</span>
            <span className="text-[#090909]">Contact</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl font-black text-[#090909] leading-[1.02] mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
          >
            Contacteer ons
          </h1>
          <p className="text-lg text-[#555] max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Heeft u een vraag over onze producten of wilt u een offerte aanvragen?
            Wij zijn snel bereikbaar.
          </p>
        </div>
      </section>

      <section id="offerte" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: contact info */}
            <div>
              <p
                className="text-xs font-bold text-[#888] uppercase tracking-widest mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Contactgegevens
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#F5B800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "E-mail",
                    value: "info@safesignal.be",
                    href: "mailto:info@safesignal.be",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#F5B800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Adres",
                    value: "Sint-Hubertusstraat 67\nBE-3730 Bilzen-Hoeselt",
                    href: null,
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#F5B800]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ),
                    label: "Bedrijf",
                    value: "Armlab BV · BTW BE0899.277.201",
                    href: null,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5B800]/12 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#888] uppercase tracking-wide mb-1" style={{ fontFamily: "var(--font-body)" }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-[#090909] hover:text-[#F5B800] transition-colors whitespace-pre-line"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#090909] whitespace-pre-line" style={{ fontFamily: "var(--font-body)" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-black/[0.07]">
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  Wij reageren doorgaans binnen <strong>1 werkdag</strong>. Voor
                  dringende vragen kunt u ons ook per e-mail bereiken.
                </p>
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
