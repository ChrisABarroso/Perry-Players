import { useEffect, useState } from 'react'
import './ReviewSlideshow.css'

export default function ReviewSlideshow({ reviews, interval = 6000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || reviews.length < 2) return
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % reviews.length),
      interval,
    )
    return () => clearInterval(timer)
  }, [paused, reviews.length, interval])

  return (
    <div
      className="review-show"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="review-track">
        {reviews.map((review, i) => (
          <blockquote
            key={review.name}
            className={`review-card ${i === index ? 'is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <div className="review-stars" aria-label="5 out of 5 stars">
              {'★★★★★'.split('').map((s, j) => (
                <span key={j}>{s}</span>
              ))}
            </div>
            <p>"{review.text}"</p>
            <footer>
              <span className="review-g" aria-hidden="true">G</span>
              <div>
                <cite>{review.name}</cite>
                <small>Google Review</small>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="review-dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'is-active' : ''}
            aria-label={`Go to review ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
