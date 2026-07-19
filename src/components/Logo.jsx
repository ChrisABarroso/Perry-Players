// The Perry Players double-P brand mark. The outer P is rendered in warm
// cream (the brand gray doesn't read on the dark site background); the inner
// P keeps the brand orange, which matches the site's gold.
export default function Logo({ size = 44, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Perry Players logo"
    >
      {/* Outer P */}
      <path
        d="M 88 106 L 42 106 Q 32 106 32 96 L 32 26 Q 32 16 42 16 L 58 16 A 26 26 0 1 1 36.6 50.9"
        stroke="#F7F3EA"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      {/* Inner P */}
      <path
        d="M 78 92 L 54 92 Q 46 92 46 84 L 46 40 Q 46 30 54 30 L 58 30 A 15 15 0 1 1 45 52.5"
        stroke="#ED9B15"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
