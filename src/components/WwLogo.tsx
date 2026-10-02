import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
  size?: number | string;
  variant?: "home" | "frame";
};

export function WwLogo({ size = 96, variant = "home", className, ...rest }: Props) {
  const letterFill = variant === "home" ? "#F0D24A" : "#F5D76E";
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      aria-label="WW logo"
      role="img"
      {...rest}
    >
      <defs>
        <radialGradient id="wwSphere" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#6EC5FF" />
          <stop offset="45%" stopColor="#1E6FD9" />
          <stop offset="100%" stopColor="#0A3A8C" />
        </radialGradient>
        <linearGradient id="wwRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F7FA" />
          <stop offset="35%" stopColor="#C8CDD4" />
          <stop offset="70%" stopColor="#8A929C" />
          <stop offset="100%" stopColor="#E8ECF0" />
        </linearGradient>
        <filter id="wwSoft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.35" />
        </filter>
      </defs>
      <circle cx="60" cy="60" r="56" fill="url(#wwRing)" filter="url(#wwSoft)" />
      <circle cx="60" cy="60" r="48" fill="url(#wwSphere)" />
      <ellipse cx="42" cy="38" rx="22" ry="12" fill="#fff" opacity="0.22" />
      <text
        x="60"
        y="72"
        textAnchor="middle"
        fontFamily="var(--font-display), 'Orbitron', sans-serif"
        fontSize="42"
        fontWeight="800"
        letterSpacing="-2"
        fill={letterFill}
        stroke="#0B2A66"
        strokeWidth="1.5"
        paintOrder="stroke"
      >
        WW
      </text>
    </svg>
  );
}
