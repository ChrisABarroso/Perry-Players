import { useEffect, useState } from 'react'
import './Slideshow.css'

export default function Slideshow({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || slides.length < 2) return
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval,
    )
    return () => clearInterval(timer)
  }, [paused, slides.length, interval])

  if (!slides.length) return null

  const go = (dir) =>
    setIndex((i) => (i + dir + slides.length) % slides.length)

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <figure
          key={slide.src}
          className={`slide ${i === index ? 'is-active' : ''}`}
        >
          <img src={slide.src} alt={slide.alt || ''} loading={i === 0 ? 'eager' : 'lazy'} />
          {slide.caption && <figcaption>{slide.caption}</figcaption>}
        </figure>
      ))}

      {slides.length > 1 && (
        <>
          <button className="slide-arrow slide-prev" aria-label="Previous slide" onClick={() => go(-1)}>
            ‹
          </button>
          <button className="slide-arrow slide-next" aria-label="Next slide" onClick={() => go(1)}>
            ›
          </button>
          <div className="slide-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={i === index ? 'is-active' : ''}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
