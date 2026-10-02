import { Link } from 'react-router-dom'
import PhotoGrid from '../components/PhotoGrid.jsx'
import { mainstagePhotos } from '../photos.js'
import { TICKETS_URL } from '../tickets.js'
import { shows } from '../season.js'
import './Shows.css'

export default function Shows() {
  const upNext = shows.findIndex((show) => !show.nowShowing)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Shows &amp; Productions</span>
          <h1>On Our Stage</h1>
          <p>
            From beloved musicals to gripping dramas, discover what's coming to
            the Perry Players stage.
          </p>
        </div>
      </section>

      {/* Current and announced upcoming shows */}
      {shows.map((show, i) => (
        <section className={`section ${i % 2 ? 'section-soft' : ''}`} key={show.slug}>
          <div className="container">
            <div className="show-feature">
              <div className="show-feature-art">
                <img src={show.src} alt={`${show.title} poster`} />
              </div>
              <div className="show-feature-body">
                <span className="badge">
                  {show.nowShowing ? 'Now Showing' : i === upNext ? 'Up Next' : 'Coming Soon'}
                </span>
                <h2>{show.title}</h2>
                <p className="show-dates">{show.performances}</p>
                <p>{show.synopsis}</p>
                <ul className="show-meta">
                  {show.nowShowing ? (
                    <>
                      <li><strong>Thu, Fri &amp; Sat</strong> 7:30 PM</li>
                      <li><strong>Sun</strong> 2:30 PM</li>
                    </>
                  ) : (
                    show.auditions && (
                      <li>
                        <strong>Auditions</strong> {show.auditions}
                        {show.auditionTimes && ` · ${show.auditionTimes}`}
                      </li>
                    )
                  )}
                  <li><strong>Where</strong> 909 Main Street, Perry</li>
                </ul>
                <div className="show-feature-actions">
                  {show.nowShowing && (
                    <a className="btn btn-primary" href={TICKETS_URL} target="_blank" rel="noreferrer">
                      Buy Tickets
                    </a>
                  )}
                  <Link
                    className={`btn ${show.nowShowing ? 'btn-outline' : 'btn-primary'}`}
                    to={`/shows/${show.slug}`}
                  >
                    Show Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Past productions */}
      <section className="section">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Our History</span>
            <h2 className="section-title">Past Productions</h2>
            <p className="section-lead">
              Perry Players has staged decades of memorable productions. Here
              are a few highlights from recent MainStage seasons.
            </p>
          </div>
          <div className="past-grid">
            <PhotoGrid photos={mainstagePhotos} columns={3} />
          </div>
        </div>
      </section>

    </>
  )
}
