import { Link, Navigate, useParams } from 'react-router-dom'
import { getShow } from '../season.js'
import { emailLink } from '../email.js'
import { TICKETS_URL } from '../tickets.js'
import './ShowDetail.css'
import Icon from '../components/Icon.jsx'

export default function ShowDetail() {
  const { slug } = useParams()
  const show = getShow(slug)

  if (!show) return <Navigate to="/shows" replace />

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="badge">
            {show.nowShowing ? 'Now Showing' : show.kids ? "Children's Show" : 'MainStage'}
          </span>
          <h1>{show.title}</h1>
          <p>{show.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container show-detail-grid">
          <div className="show-detail-poster">
            {show.src ? (
              <img src={show.src} alt={`${show.title} poster`} />
            ) : (
              <div className="show-detail-placeholder">
                <span>{show.title}</span>
                <small>Poster coming soon</small>
              </div>
            )}
          </div>

          <div>
            <span className="eyebrow">About the Show</span>
            <h2 className="section-title">The Story</h2>
            <p className="show-detail-synopsis">{show.synopsis}</p>

            <div className="show-dates-grid">
              {show.auditions && (
                <div className="show-date-card">
                  <span className="show-date-icon"><Icon name="microphone" size={24} /></span>
                  <strong>Auditions</strong>
                  <p>{show.auditions}</p>
                </div>
              )}
              <div className="show-date-card">
                <span className="show-date-icon"><Icon name="ticket" size={24} /></span>
                <strong>Tickets</strong>
                <p>
                  {show.nowShowing
                    ? 'On sale now'
                    : show.ticketsOnSale
                      ? `On sale ${show.ticketsOnSale}`
                      : 'Coming soon'}
                </p>
              </div>
              <div className="show-date-card is-featured">
                <span className="show-date-icon"><Icon name="mask" size={24} /></span>
                <strong>Performances</strong>
                <p>{show.performances}</p>
              </div>
            </div>

            <p className="show-detail-times">
              <strong>Showtimes:</strong> Thu, Fri &amp; Sat 7:30 PM · Sun 2:30 PM
            </p>

            <div className="show-detail-actions">
              <a className="btn btn-primary" href={TICKETS_URL} target="_blank" rel="noreferrer">
                Buy Tickets
              </a>
              {/* Season pass button goes here once season passes go on sale. */}
              {show.auditions && (
                <a
                  className="btn btn-outline"
                  href={emailLink(`Audition Info — ${show.title}`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask About Auditions
                </a>
              )}
            </div>
            {show.auditions && (
              <p className="show-detail-note">
                Auditions are open to everyone — no experience required.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section section-soft show-detail-nav-section">
        <div className="container center">
          <Link to="/shows" className="btn btn-outline">
            All Shows
          </Link>
        </div>
      </section>
    </>
  )
}
