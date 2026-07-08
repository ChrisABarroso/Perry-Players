import { useEffect, useRef } from 'react'
import './PhotoGrid.css'

export default function PhotoGrid({ photos, columns = 2 }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    ref.current.querySelectorAll('.pg-item').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [photos])

  return (
    <div className="pg" ref={ref} style={{ '--pg-cols': columns }}>
      {photos.map((photo, i) => (
        <figure
          className="pg-item"
          key={photo.src}
          style={{ transitionDelay: `${(i % columns) * 130 + Math.floor(i / columns) * 90}ms` }}
        >
          <img src={photo.src} alt={photo.alt || ''} loading="lazy" />
          {photo.caption && <figcaption>{photo.caption}</figcaption>}
        </figure>
      ))}
    </div>
  )
}
