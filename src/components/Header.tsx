"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { SafeSignalLogo } from "./SafeSignalLogo";

const navLinks = [
  { href: "/ready", label: "Ready" },
  { href: "/infra", label: "Infra" },
  { href: "/convoy", label: "Convoy" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

interface HeaderProps {
  variant?: "light" | "dark";
}

function getLogoAccentColor(pathname: string): string {
  if (pathname.startsWith("/ready")) return "#2563EB";
  if (pathname.startsWith("/infra")) return "#C0392B";
  if (pathname.startsWith("/convoy")) return "#F5B800";
  return "#B31820"; // dark red = SafeSignal group brand
}

export function Header({ variant = "dark" }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoAccentColor = getLogoAccentColor(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = variant === "light";

  const headerBg = isLight
    ? scrolled
      ? "bg-[#090909]/95 backdrop-blur-md border-b border-white/[0.07]"
      : "bg-transparent"
    : scrolled
    ? "bg-white/95 backdrop-blur-md border-b border-black/[0.07] shadow-sm"
    : "bg-white border-b border-black/[0.07]";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <SafeSignalLogo variant={isLight ? "light" : "dark"} size="sm" accentColor={logoAccentColor} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#F5B800]"
                    : isLight
                    ? "text-white/75 hover:text-white"
                    : "text-black/60 hover:text-black"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact#offerte"
            className="px-4 py-2 text-sm font-semibold bg-[#F5B800] text-[#090909] rounded-lg hover:bg-[#FFE000] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Vraag een offerte
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-md transition-colors ${
            isLight ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"
          }`}
          aria-label="Menu openen/sluiten"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden border-t ${isLight ? "bg-[#0E0E0E] border-white/[0.07]" : "bg-white border-black/[0.07]"}`}>
          <nav className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium ${
                    isActive ? "text-[#F5B800]" : isLight ? "text-white/80" : "text-black/70"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact#offerte"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 text-sm font-semibold bg-[#F5B800] text-[#090909] rounded-lg text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Vraag een offerte
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
