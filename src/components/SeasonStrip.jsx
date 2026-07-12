import { Link } from 'react-router-dom'
import './SeasonStrip.css'

export default function SeasonStrip({ shows }) {
  const group = (hidden) => (
    <div className="season-group" aria-hidden={hidden}>
      {shows.map((show, i) => (
        <Link
          className="season-card"
          to={`/shows/${show.slug}`}
          key={show.title}
          tabIndex={hidden ? -1 : 0}
        >
          <span className="season-num">{i + 1}</span>
          <img src={show.src} alt={`${show.title} poster`} loading="lazy" />
          <span className="season-caption">
            <strong>{show.title}</strong>
            {show.kids && <span className="season-kids">Children's Show</span>}
            <span className="season-more">Details →</span>
          </span>
        </Link>
      ))}
    </div>
  )

  return (
    <div className="season-strip">
      <div className="season-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
