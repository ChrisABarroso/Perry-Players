// Hand-built line icons, drawn on a 24x24 grid with a consistent stroke so
// they read as one set. Used in place of emoji throughout the site.
const icons = {
  mask: (
    <>
      <path d="M5 3.5h14V11a7 7 0 0 1-14 0z" />
      <path d="M9.2 8.2h.01M14.8 8.2h.01" />
      <path d="M9.3 13.2a3.6 3.6 0 0 0 5.4 0" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5S19 15 19 10a7 7 0 1 0-14 0c0 5 7 11.5 7 11.5z" />
      <circle cx="12" cy="9.8" r="2.4" />
    </>
  ),
  dining: (
    <>
      <path d="M7 3v5.2a2.2 2.2 0 0 0 4.4 0V3" />
      <path d="M9.2 8.6V21" />
      <path d="M17.4 3c1.6 2.2 1.6 6.4 0 8.4V21" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.4 9.3a2.7 2.7 0 1 1 3.4 3.3c-.7.2-1 .8-1 1.5v.6" />
      <path d="M11.8 17.6h.01" />
    </>
  ),
  heart: <path d="M12 20.4 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 0 1 19.4 13z" />,
  people: (
    <>
      <circle cx="9.2" cy="8" r="3.1" />
      <path d="M2.8 20.2v-.9a5 5 0 0 1 5-5h2.8a5 5 0 0 1 5 5v.9" />
      <circle cx="17.8" cy="9.6" r="2.2" />
      <path d="M16.6 14.2a4.4 4.4 0 0 1 4.6 4.4v1.6" />
    </>
  ),
  star: <path d="m12 3.4 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.8-5.4 2.8 1-6L3.3 9.8l6-.9z" />,
  ticket: (
    <>
      <path d="M3.2 9.4V7.2a1 1 0 0 1 1-1h15.6a1 1 0 0 1 1 1v2.2a2.6 2.6 0 0 0 0 5.2v2.2a1 1 0 0 1-1 1H4.2a1 1 0 0 1-1-1v-2.2a2.6 2.6 0 0 0 0-5.2z" />
      <path d="M9.4 6.6v1.8M9.4 11.1v1.8M9.4 15.6v1.8" />
    </>
  ),
  friends: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16.6 8.4 13a2.4 2.4 0 0 1 3.4-3.4l.2.2.2-.2A2.4 2.4 0 0 1 15.6 13z" />
    </>
  ),
  cart: (
    <>
      <path d="M2.8 4h2.4l2.5 11a1.2 1.2 0 0 0 1.2.9h7.8a1.2 1.2 0 0 0 1.2-.9L20 7.6H6.2" />
      <circle cx="9.4" cy="19.8" r="1.4" />
      <circle cx="16.8" cy="19.8" r="1.4" />
    </>
  ),
  bag: (
    <>
      <path d="M5.6 7.8h12.8l-1 12.4H6.6z" />
      <path d="M9 7.8V6a3 3 0 0 1 6 0v1.8" />
    </>
  ),
  hammer: (
    <>
      <path d="m14.8 3.4 5.4 5.4-2.2 2.2-5.4-5.4z" />
      <path d="M12.2 8.2 3.6 16.8v3.6h3.6l8.6-8.6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.2" y="5.2" width="17.6" height="15.6" rx="2" />
      <path d="M3.2 10.2h17.6M8 3v4.2M16 3v4.2" />
    </>
  ),
  document: (
    <>
      <path d="M6 3.2h7.6L18.4 8v12.8H6z" />
      <path d="M13.4 3.2V8h5" />
      <path d="M9 12.4h6M9 16h4" />
    </>
  ),
  door: (
    <>
      <path d="M5.4 3.2h9.2v17.6H5.4z" />
      <path d="M14.6 20.8h4V3.2h-4" />
      <path d="M11.8 12.4h.01" />
    </>
  ),
  lodging: (
    <>
      <path d="M5.4 20.8V4.6a1.2 1.2 0 0 1 1.2-1.2h10.8a1.2 1.2 0 0 1 1.2 1.2v16.2" />
      <path d="M2.8 20.8h18.4" />
      <path d="M10.2 20.8v-3.4a1.8 1.8 0 0 1 3.6 0v3.4" />
      <rect x="7.8" y="6.6" width="2.5" height="2.5" />
      <rect x="13.7" y="6.6" width="2.5" height="2.5" />
      <rect x="7.8" y="11.6" width="2.5" height="2.5" />
      <rect x="13.7" y="11.6" width="2.5" height="2.5" />
    </>
  ),
  building: (
    <>
      <path d="M2.6 9 12 3.6 21.4 9" />
      <path d="M5 9.4v9M9.6 9.4v9M14.4 9.4v9M19 9.4v9" />
      <path d="M2.6 21.4h18.8M2.6 9h18.8" />
    </>
  ),
  hat: (
    <>
      <path d="M8.2 3.4h7.6v9.2H8.2z" />
      <path d="M3.6 14.8c2.2 1.6 5.2 2.4 8.4 2.4s6.2-.8 8.4-2.4" />
      <path d="M3.6 14.8v1.6c2.2 1.6 5.2 2.4 8.4 2.4s6.2-.8 8.4-2.4v-1.6" />
    </>
  ),
  envelope: (
    <>
      <rect x="3" y="5.2" width="18" height="13.6" rx="1.6" />
      <path d="m3.4 6.6 8.6 6 8.6-6" />
    </>
  ),
  accessible: (
    <>
      <circle cx="14.2" cy="3.3" r="2.1" />
      <path d="M14.2 7.6 10.6 11.1" />
      <path d="M14.2 5.6v7h5v4.8h2.4" />
      <circle cx="11.2" cy="16" r="4.2" />
    </>
  ),
  cup: (
    <>
      <path d="M7 8.6h10l-1.2 11.8H8.2z" />
      <path d="M9.2 4h5.6l.9 4.6H8.3z" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6c1.1 0 1.7-.8 1.7-1.6 0-1.6 2-1.1 3.2-1.1a4.4 4.4 0 0 0 3.9-4.4c0-5.8-4-10.5-8.8-10.5z" />
      <path d="M8 9h.01M12 7.2h.01M15.8 9.4h.01" />
    </>
  ),
  chair: (
    <>
      <path d="M7 3.4h10v8.8H7z" />
      <path d="M5 12.2h14M7.6 12.2v8.4M16.4 12.2v8.4" />
    </>
  ),
  bulb: (
    <>
      <path d="M12 3a6 6 0 0 0-3.4 10.9c.6.5 1 1.2 1 2h4.8c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z" />
      <path d="M9.6 18.6h4.8M10.6 21h2.8" />
    </>
  ),
  note: (
    <>
      <circle cx="7" cy="18" r="2.8" />
      <circle cx="17.4" cy="15.8" r="2.8" />
      <path d="M9.8 18V5.6l10.4-2.2v12.4" />
    </>
  ),
  sliders: (
    <>
      <path d="M6 3v18M12 3v18M18 3v18" />
      <circle cx="6" cy="8" r="1.9" />
      <circle cx="12" cy="14.4" r="1.9" />
      <circle cx="18" cy="6.4" r="1.9" />
    </>
  ),
  dress: (
    <>
      <path d="M9.4 3.4h5.2l-.8 4.4 3.6 8.4-2.6 5H9.2l-2.6-5 3.6-8.4z" />
      <path d="M9.4 7.8h5.2" />
    </>
  ),
  spool: (
    <>
      <path d="M7 3.2h10M7 20.8h10M9.2 3.2v17.6M14.8 3.2v17.6" />
      <path d="M9.2 8.2h5.6M9.2 14.2h5.6" />
    </>
  ),
  lipstick: (
    <>
      <path d="M8.8 8.4h6.4v11.8H8.8z" />
      <path d="M10 3.6h4v4.8h-4z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.4" width="14" height="16.2" rx="2" />
      <path d="M9 4.4V3h6v1.4" />
      <path d="M9 11h6M9 15h4" />
    </>
  ),
  dance: (
    <>
      <circle cx="13.2" cy="4.2" r="2" />
      <path d="M13.2 6.4v5.8l-3 4M13.2 12.2l3.2 3.2v5.2M10.2 16.2 8 21M16 9.2l4.2-1.8" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20.4 5.2 16 16.8 4.4l3.4 3.4L8.6 19.4z" />
      <path d="m14.4 6.8 3.4 3.4" />
    </>
  ),
  scissors: (
    <>
      <circle cx="6.2" cy="6.2" r="2.6" />
      <circle cx="6.2" cy="17.8" r="2.6" />
      <path d="m8.4 7.8 11.4 10.6M8.4 16.2 19.8 5.6" />
    </>
  ),
  phone: (
    <>
      <path d="M8.2 3.4H5.6A2.4 2.4 0 0 0 3.2 6c0 6.5 5.3 11.8 11.8 11.8h.4a2.4 2.4 0 0 0 2.4-2.4v-2.6l-4-1.4-1.7 2a12.3 12.3 0 0 1-4.5-4.5l2-1.7z" />
    </>
  ),
  microphone: (
    <>
      <rect x="9.2" y="2.8" width="5.6" height="10.6" rx="2.8" />
      <path d="M5.8 11.4a6.2 6.2 0 0 0 12.4 0" />
      <path d="M12 17.6v3.6M9 21.2h6" />
    </>
  ),
}

export default function Icon({ name, size = 28, className = '' }) {
  const glyph = icons[name]
  if (!glyph) return null
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  )
}
