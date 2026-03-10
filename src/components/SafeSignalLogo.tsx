"use client";

interface SafeSignalLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function SafeSignalLogo({
  variant = "dark",
  size = "md",
}: SafeSignalLogoProps) {
  const isLight = variant === "light";
  const iconSize = { sm: 22, md: 28, lg: 38 }[size];
  const textSize = { sm: "text-xl", md: "text-2xl", lg: "text-3xl" }[size];
  const taglineSize = { sm: "text-[8px]", md: "text-[9px]", lg: "text-[10px]" }[size];
  const textColor = isLight ? "#FAFAF8" : "#090909";
  const taglineColor = isLight ? "rgba(250,250,248,0.45)" : "rgba(9,9,9,0.38)";

  return (
    <div className="flex items-center gap-2">
      {/* Signal icon — concentric arcs pointing right, matching real logo */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        {/* Outer arc */}
        <path
          d="M6 20 C6 11.16 13.16 4 22 4"
          stroke="#F5B800"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M6 20 C6 28.84 13.16 36 22 36"
          stroke="#F5B800"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Mid arc */}
        <path
          d="M12 20 C12 14.48 16.48 10 22 10"
          stroke="#F5B800"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M12 20 C12 25.52 16.48 30 22 30"
          stroke="#F5B800"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.65"
        />
        {/* Inner arc */}
        <path
          d="M18 20 C18 17.24 20.24 15 23 15"
          stroke="#F5B800"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M18 20 C18 22.76 20.24 25 23 25"
          stroke="#F5B800"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Dot */}
        <circle cx="27" cy="20" r="3" fill="#F5B800" />
      </svg>

      {/* Wordmark */}
      <div className="leading-none" style={{ fontFamily: "var(--font-body)" }}>
        <div
          className={`font-semibold tracking-tight ${textSize}`}
          style={{ color: textColor, letterSpacing: "-0.02em" }}
        >
          safe
          <span style={{ color: "#F5B800" }}>signal</span>
        </div>
        {size !== "sm" && (
          <div
            className={`${taglineSize} font-medium uppercase tracking-widest mt-0.5`}
            style={{ color: taglineColor }}
          >
            voertuigsignalisatie · radiocommunicatie
          </div>
        )}
      </div>
    </div>
  );
}
