// export default function Logo({ size = 44, className = '' }) {
//   return (
//     <svg
//       className={className}
//       width={size}
//       height={size}
//       viewBox="0 0 48 48"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       aria-label="Perry Players logo"
//     >
//       <defs>
//         <linearGradient id="pp-gold" x1="10" y1="8" x2="40" y2="44" gradientUnits="userSpaceOnUse">
//           <stop offset="0" stopColor="#F5B647" />
//           <stop offset="0.55" stopColor="#ED9B15" />
//           <stop offset="1" stopColor="#D97E06" />
//         </linearGradient>
//         <linearGradient id="pp-badge" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
//           <stop offset="0" stopColor="#332246" />
//           <stop offset="1" stopColor="#1d1730" />
//         </linearGradient>
//       </defs>

//       {/* Badge with gold ring */}
//       <rect x="1" y="1" width="46" height="46" rx="12" fill="url(#pp-badge)" />
//       <rect x="1" y="1" width="46" height="46" rx="12" stroke="url(#pp-gold)" strokeWidth="1.5" />

//       {/* The P */}
//       <text
//         x="23"
//         y="36"
//         textAnchor="middle"
//         fontFamily="'Fraunces', Georgia, serif"
//         fontStyle="italic"
//         fontWeight="900"
//         fontSize="32"
//         fill="url(#pp-gold)"
//       >
//         P
//       </text>

//       {/* Magenta sparkle */}
//       <path
//         d="M36.5 8.5 L37.9 12.6 L42 14 L37.9 15.4 L36.5 19.5 L35.1 15.4 L31 14 L35.1 12.6 Z"
//         fill="#B52AA0"
//       />
//       <path
//         d="M40 21 L40.7 23 L42.7 23.7 L40.7 24.4 L40 26.4 L39.3 24.4 L37.3 23.7 L39.3 23 Z"
//         fill="#ED9B15"
//         opacity="0.9"
//       />
//     </svg>
//   )
// }
export default function Logo({ size = 44, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Perry Players logo"
    >
      <defs>
        <linearGradient id="pp-gold" x1="20" y1="16" x2="80" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F5B647" />
          <stop offset="0.55" stopColor="#ED9B15" />
          <stop offset="1" stopColor="#D97E06" />
        </linearGradient>
        <linearGradient id="pp-badge" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#332246" />
          <stop offset="1" stopColor="#8A1F7E" />
        </linearGradient>
          <stop offset="0" stopColor="#332246" />
          <stop offset="1" stopColor="#1d1730" />
        <linearGradient id="pp-magenta" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          
        </linearGradient>

        {/* Shared P shape: serif letterform echoing Fraunces — slab top,
            bracketed foot serifs, round bowl */}
        <path
          id="pp-letter"
          d="M13 14 H41 C53.5 14 60.5 19.3 60.5 27 C60.5 34.7 53.5 40 41 40 H28.5 V51.5 C28.5 55 30.8 56.4 34.8 56.9 V60 H12.5 V56.9 C16.3 56.4 18.5 55 18.5 51.5 V19.8 C18.5 16.9 16.6 15.7 13 15.3 Z"
        />
      </defs>

      {/* Badge with gold ring */}
      <rect x="2" y="2" width="92" height="92" rx="22" fill="url(#pp-badge)" />
      <rect x="2" y="2" width="92" height="92" rx="22" stroke="url(#pp-gold)" strokeWidth="2.5" />

      {/* Comedy P (upper left) */}
      <use
        href="#pp-letter"
        fill="url(#pp-magenta)"
        stroke="url(#pp-gold)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Tragedy P (lower right, offset like a duet) */}
      <use
        href="#pp-letter"
        transform="translate(26 24)"
        fill="url(#pp-magenta)"
        stroke="url(#pp-gold)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Comedy mask, centered in the first P's bowl */}
      <g
        transform="translate(43.5 27)"
        stroke="url(#pp-gold)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M-7 -8 C-4.5 -5.5 4.5 -5.5 7 -8 C8 -2 7 4 0 8 C-7 4 -8 -2 -7 -8 Z" />
        <path d="M-4.5 -1.5 Q-2.75 -3.5 -1 -1.5" />
        <path d="M1 -1.5 Q2.75 -3.5 4.5 -1.5" />
        <path d="M-3.5 2.5 Q0 6 3.5 2.5" />
      </g>

      {/* Tragedy mask, centered in the second P's bowl */}
      <g
        transform="translate(69.5 51)"
        stroke="url(#pp-gold)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M-7 -8 C-4.5 -5.5 4.5 -5.5 7 -8 C8 -2 7 4 0 8 C-7 4 -8 -2 -7 -8 Z" />
        <path d="M-4.5 -2.5 Q-2.75 -0.5 -1 -2.5" />
        <path d="M1 -2.5 Q2.75 -0.5 4.5 -2.5" />
        <path d="M-3.5 5 Q0 1.5 3.5 5" />
      </g>
    </svg>
  )
}
