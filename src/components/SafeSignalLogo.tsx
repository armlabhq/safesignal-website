"use client";

interface SafeSignalLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  accentColor?: string;
}

// Sizes: [displayHeight, viewBox width, viewBox height]
const SIZE_MAP = {
  sm: [26, 270, 62] as const,
  md: [34, 270, 62] as const,
  lg: [46, 270, 62] as const,
};

export function SafeSignalLogo({
  variant = "dark",
  size = "md",
  accentColor = "#B31820", // dark red = group default
}: SafeSignalLogoProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "#FAFAF8" : "#0A0A0A";

  const [h, vw, vh] = SIZE_MAP[size];
  const w = Math.round(h * (vw / vh));

  // Signal arcs above the "i" in "signal"
  // "safe" ≈ 112px wide at font-size 52, so "signal" starts at x=112
  // "s" ≈ 28px wide → "i" starts at x=140, center x≈148
  // Arcs centered at (148, 12), opening upward (true semicircles, sweep-flag=0)
  const cx = 148;
  const cy = 12;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${vw} ${vh}`}
      fill="none"
      aria-label="SafeSignal"
      role="img"
    >
      {/* "safe" — in base text color */}
      <text
        x="0"
        y="52"
        fontFamily="'Barlow', system-ui, sans-serif"
        fontWeight="600"
        fontSize="52"
        fill={textColor}
      >
        safe
      </text>

      {/* "signal" — in accent color */}
      <text
        x="112"
        y="52"
        fontFamily="'Barlow', system-ui, sans-serif"
        fontWeight="600"
        fontSize="52"
        fill={accentColor}
      >
        signal
      </text>

      {/* Signal arcs — lettermark above the "i" dot, WiFi-style opening upward */}
      {/* Outer arc: r=10, top at (cx, cy-10) */}
      <path
        d={`M ${cx - 10} ${cy} A 10 10 0 0 0 ${cx + 10} ${cy}`}
        stroke={accentColor}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Mid arc: r=7 */}
      <path
        d={`M ${cx - 7} ${cy} A 7 7 0 0 0 ${cx + 7} ${cy}`}
        stroke={accentColor}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      {/* Inner arc: r=4 */}
      <path
        d={`M ${cx - 4} ${cy} A 4 4 0 0 0 ${cx + 4} ${cy}`}
        stroke={accentColor}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Center dot — replaces the "i" dot */}
      <circle cx={cx} cy={cy} r="2.2" fill={accentColor} />
    </svg>
  );
}
