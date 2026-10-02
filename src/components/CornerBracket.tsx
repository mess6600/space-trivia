export function CornerBracket({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 80"
      width="28"
      height="56"
      aria-hidden
    >
      <defs>
        <linearGradient id="brMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0f2f5" />
          <stop offset="50%" stopColor="#9aa3ad" />
          <stop offset="100%" stopColor="#6a737c" />
        </linearGradient>
      </defs>
      <path
        d="M8 8 H28 V18 H18 V62 H28 V72 H8 V62 H14 V18 H8 Z"
        fill="url(#brMetal)"
        stroke="#5a626a"
        strokeWidth="1.2"
      />
      <circle cx="18" cy="28" r="3" fill="#4a525a" />
      <circle cx="18" cy="40" r="3" fill="#4a525a" />
      <circle cx="18" cy="52" r="3" fill="#4a525a" />
      <rect x="16" y="30" width="4" height="20" rx="1" fill="#c5ccd4" opacity="0.7" />
    </svg>
  );
}
