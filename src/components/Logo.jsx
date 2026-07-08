export default function Logo({ size = 44, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Perry Players logo"
    >
      <defs>
        <linearGradient id="pp-gold" x1="10" y1="8" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F5B647" />
          <stop offset="0.55" stopColor="#ED9B15" />
          <stop offset="1" stopColor="#D97E06" />
        </linearGradient>
        <linearGradient id="pp-badge" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#332246" />
          <stop offset="1" stopColor="#1d1730" />
        </linearGradient>
      </defs>

      {/* Badge with gold ring */}
      <rect x="1" y="1" width="46" height="46" rx="12" fill="url(#pp-badge)" />
      <rect x="1" y="1" width="46" height="46" rx="12" stroke="url(#pp-gold)" strokeWidth="1.5" />

      {/* The P */}
      <text
        x="23"
        y="36"
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, serif"
        fontStyle="italic"
        fontWeight="900"
        fontSize="32"
        fill="url(#pp-gold)"
      >
        P
      </text>

      {/* Magenta sparkle */}
      <path
        d="M36.5 8.5 L37.9 12.6 L42 14 L37.9 15.4 L36.5 19.5 L35.1 15.4 L31 14 L35.1 12.6 Z"
        fill="#B52AA0"
      />
      <path
        d="M40 21 L40.7 23 L42.7 23.7 L40.7 24.4 L40 26.4 L39.3 24.4 L37.3 23.7 L39.3 23 Z"
        fill="#ED9B15"
        opacity="0.9"
      />
    </svg>
  )
}
