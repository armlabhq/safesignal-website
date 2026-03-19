"use client";

import { useState } from "react";

const serviceOptions = [
  "Zwaailichten & lichtbalken",
  "Flitsers & signaallampen",
  "Sirenes & luidsprekers",
  "Radiocommunicatie",
  "Installatie & montage",
  "Voertuiguitrusting op maat",
  "Onderhoud & keuring",
  "Ander / Meer informatie",
];

interface QuoteFormProps {
  accentColor?: string;
  businessUnit?: string;
}

export function QuoteForm({ accentColor = "#F5B800", businessUnit }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, businessUnit }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-black/[0.07]">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: accentColor }}
        >
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#090909] mb-2" style={{ fontFamily: "var(--font-body)" }}>
          Aanvraag ontvangen
        </h3>
        <p className="text-sm text-[#555555] max-w-sm mx-auto leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          Bedankt voor uw offerteaanvraag. Wij nemen doorgaans binnen 1 werkdag contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-8 shadow-sm border border-black/[0.07] space-y-5"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wide mb-1.5">
            Naam *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jan Janssen"
            className="w-full px-4 py-2.5 rounded-lg border border-black/15 text-sm text-[#090909] placeholder-black/30 focus:outline-none focus:ring-2 transition-shadow"
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wide mb-1.5">
            Bedrijf / Organisatie
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Brandweer Zone Limburg"
            className="w-full px-4 py-2.5 rounded-lg border border-black/15 text-sm text-[#090909] placeholder-black/30 focus:outline-none focus:ring-2 transition-shadow"
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wide mb-1.5">
            E-mailadres *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jan@organisatie.be"
            className="w-full px-4 py-2.5 rounded-lg border border-black/15 text-sm text-[#090909] placeholder-black/30 focus:outline-none focus:ring-2 transition-shadow"
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wide mb-1.5">
            Telefoonnummer
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+32 ..."
            className="w-full px-4 py-2.5 rounded-lg border border-black/15 text-sm text-[#090909] placeholder-black/30 focus:outline-none focus:ring-2 transition-shadow"
            style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wide mb-1.5">
          Dienst of product *
        </label>
        <select
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-lg border border-black/15 text-sm text-[#090909] focus:outline-none focus:ring-2 transition-shadow bg-white"
          style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
        >
          <option value="">Kies een categorie...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#555555] uppercase tracking-wide mb-1.5">
          Uw vraag of situatie
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Beschrijf het voertuig, de toepassing en eventuele specifieke vereisten..."
          className="w-full px-4 py-2.5 rounded-lg border border-black/15 text-sm text-[#090909] placeholder-black/30 focus:outline-none focus:ring-2 transition-shadow resize-none"
          style={{ "--tw-ring-color": accentColor } as React.CSSProperties}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-lg text-sm font-bold transition-all hover:brightness-110 active:scale-[0.99] disabled:opacity-60"
        style={{ background: accentColor, color: "#090909" }}
      >
        {loading ? "Versturen…" : "Offerte aanvragen"}
      </button>

      {error && (
        <p className="text-xs text-center text-red-600">
          Er liep iets mis. Probeer opnieuw of mail naar{" "}
          <a href="mailto:info@safesignal.be" className="underline">info@safesignal.be</a>.
        </p>
      )}

      <p className="text-xs text-center text-[#999999]">
        Wij reageren doorgaans binnen 1 werkdag · <a href="tel:+32" className="underline hover:text-[#555]">Bel ons direct</a>
      </p>
    </form>
  );
}
