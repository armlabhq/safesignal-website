import Link from "next/link";
import { SafeSignalLogo } from "./SafeSignalLogo";

const oplossingen = [
  { href: "/oplossingen/interventie", label: "Interventievoertuigen" },
  { href: "/oplossingen/werkvoertuigen", label: "Werkvoertuigen" },
  { href: "/oplossingen/installatie", label: "Installatie & ondersteuning" },
];

const producten = [
  { href: "/producten/zwaailichten", label: "Zwaailichten" },
  { href: "/producten/lichtbalken", label: "Lichtbalken" },
  { href: "/producten/flitsers", label: "Flitsers" },
  { href: "/producten/communicatie", label: "Communicatie" },
  { href: "/producten/accessoires", label: "Accessoires" },
];

export function Footer() {
  return (
    <footer className="bg-[#090909] text-white">
      {/* Lightbar stripe at top */}
      <div className="h-[3px] lightbar" />

      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <SafeSignalLogo variant="light" size="md" />
            <p className="mt-4 text-sm text-white/45 leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-body)" }}>
              Professionele voertuigsignalisatie en radiocommunicatie voor interventie- en werkvoertuigen in België.
            </p>
          </div>

          {/* Oplossingen */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Oplossingen
            </p>
            <ul className="space-y-2.5">
              {oplossingen.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Producten */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Producten
            </p>
            <ul className="space-y-2.5">
              {producten.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4" style={{ fontFamily: "var(--font-body)" }}>
              Contact
            </p>
            <ul className="space-y-2 text-sm text-white/50" style={{ fontFamily: "var(--font-body)" }}>
              <li className="font-medium text-white/70">SafeSignal — Armlab BV</li>
              <li>Sint-Hubertusstraat 67</li>
              <li>BE-3730 Bilzen-Hoeselt</li>
              <li className="pt-2">
                <a
                  href="mailto:info@safesignal.be"
                  className="text-[#F5B800] hover:text-[#FFE000] transition-colors"
                >
                  info@safesignal.be
                </a>
              </li>
              <li className="text-white/30 text-xs mt-1">BTW BE0899.277.201</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25" style={{ fontFamily: "var(--font-body)" }}>
            © {new Date().getFullYear()} SafeSignal — Armlab BV. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/25 hover:text-white/55 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Privacybeleid
            </Link>
            <Link
              href="/algemene-voorwaarden"
              className="text-xs text-white/25 hover:text-white/55 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
