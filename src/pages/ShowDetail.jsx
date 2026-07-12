import { Link, Navigate, useParams } from 'react-router-dom'
import { season, getShow } from '../season.js'
import { emailLink } from '../email.js'
import './ShowDetail.css'

const TICKETS_URL = 'https://www.onthestage.tickets/show/perry-players-community-theatre/69841eaa04635e1054d365d0'

export default function ShowDetail() {
  const { slug } = useParams()
  const show = getShow(slug)

  if (!show) return <Navigate to="/shows" replace />

  const prev = season[show.number - 2]
  const next = season[show.number]

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge">
            {show.kids ? "Children's Show" : 'MainStage'} · Show {show.number} of {season.length}
          </span>
          <h1>{show.title}</h1>
          <p>{show.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container show-detail-grid">
          <div className="show-detail-poster">
            <img src={show.src} alt={`${show.title} poster`} />
          </div>

          <div>
            <span className="eyebrow">About the Show</span>
            <h2 className="section-title">The Story</h2>
            <p className="show-detail-synopsis">{show.synopsis}</p>

            <div className="show-dates-grid">
              <div className="show-date-card">
                <span className="show-date-icon">🎤</span>
                <strong>Auditions</strong>
                <p>{show.auditions}</p>
              </div>
              <div className="show-date-card">
                <span className="show-date-icon">🎟️</span>
                <strong>Tickets On Sale</strong>
                <p>{show.ticketsOnSale}</p>
              </div>
              <div className="show-date-card is-featured">
                <span className="show-date-icon">🎭</span>
                <strong>Performances</strong>
                <p>{show.performances}</p>
              </div>
            </div>

            <p className="show-detail-times">
              <strong>Showtimes:</strong> Fri &amp; Sat 7:30 PM · Sun 2:30 PM
            </p>

            <div className="show-detail-actions">
              <a className="btn btn-primary" href={TICKETS_URL} target="_blank" rel="noreferrer">
                Buy Tickets
              </a>
              <a
                className="btn btn-outline"
                href={emailLink(`Audition Info — ${show.title}`)}
                target="_blank"
                rel="noreferrer"
              >
                Ask About Auditions
              </a>
            </div>
            <p className="show-detail-note">
              Tickets go on sale {show.ticketsOnSale}. Auditions are open to
              everyone — no experience required.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft show-detail-nav-section">
        <div className="container show-detail-nav">
          {prev ? (
            <Link to={`/shows/${prev.slug}`} className="show-nav-link">
              <small>← Previous Show</small>
              <span>{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          <Link to="/shows" className="btn btn-outline">
            Full Season
          </Link>
          {next ? (
            <Link to={`/shows/${next.slug}`} className="show-nav-link is-next">
              <small>Next Show →</small>
              <span>{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </div>
      </section>
    </>
  )
}
