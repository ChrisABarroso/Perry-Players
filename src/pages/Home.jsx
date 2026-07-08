import { Link } from 'react-router-dom'
import Slideshow from '../components/Slideshow.jsx'
import ReviewSlideshow from '../components/ReviewSlideshow.jsx'
import { mainstagePhotos, showPosterWide } from '../photos.js'
import { reviews } from '../reviews.js'
import './Home.css'

const TICKETS_URL = 'https://www.onthestage.tickets/show/perry-players-community-theatre/69841eaa04635e1054d365d0'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="badge">Now on stage in Downtown Perry</span>
            <h1>
              Middle Georgia's Premier
              <span className="hero-highlight"> Community Theatre</span>
            </h1>
            <p>
              Live performances, local talent, unforgettable nights. Join us at
              909 Main Street for musicals, dramas, and comedies that bring our
              community together.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={TICKETS_URL} target="_blank" rel="noreferrer">
                Get Tickets
              </a>
              <Link className="btn btn-outline" to="/shows">
                See What's On
              </Link>
            </div>
          </div>

          <div className="hero-card">
            <img
              className="hero-card-poster"
              src={showPosterWide}
              alt="Shrek – The Musical at Perry Players"
            />
            <span className="hero-card-label">Now Showing</span>
            <h2>Shrek – The Musical</h2>
            <p className="hero-card-dates">July 17 – 26, 2026</p>
            <p>
              The beloved DreamWorks story leaps from screen to stage! Join
              Shrek, Donkey, and Princess Fiona in this hilarious,
              family-friendly musical adventure.
            </p>
            <a className="btn btn-primary" href={TICKETS_URL} target="_blank" rel="noreferrer">
              Buy Tickets
            </a>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section className="info-strip">
        <div className="container info-strip-inner">
          <div>
            <strong>Showtimes</strong>
            <span>Fri &amp; Sat 7:30 PM · Sun 2:30 PM</span>
          </div>
          <div>
            <strong>Location</strong>
            <span>909 Main Street, Perry, GA 31069</span>
          </div>
          <div>
            <strong>Box Office</strong>
            <span>(478) 987-5354</span>
          </div>
        </div>
      </section>

      {/* Production photos */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">Production Photos</span>
          <h2 className="section-title">Moments from our stage</h2>
          <p className="section-lead">
            A glimpse of recent Perry Players MainStage productions.
          </p>
          <div style={{ marginTop: 48, textAlign: 'left' }}>
            <Slideshow slides={mainstagePhotos} />
          </div>
        </div>
      </section>

      {/* Plan your visit */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">Plan Your Visit</span>
          <h2 className="section-title">Everything you need for a great night out</h2>
          <p className="section-lead">
            First time at the Perry Players? We've got you covered — from
            directions and parking to dining recommendations in downtown Perry.
          </p>
          <div className="grid-3" style={{ marginTop: 48, textAlign: 'left' }}>
            <Link to="/visit" className="card">
              <div className="card-icon">📍</div>
              <h3>Directions &amp; Parking</h3>
              <p>Find us in the heart of historic downtown Perry, with convenient free parking nearby.</p>
            </Link>
            <Link to="/visit" className="card">
              <div className="card-icon">🍽️</div>
              <h3>Dining Nearby</h3>
              <p>Make it dinner and a show — downtown Perry offers wonderful restaurants steps from our doors.</p>
            </Link>
            <Link to="/visit" className="card">
              <div className="card-icon">❓</div>
              <h3>FAQs &amp; Seating</h3>
              <p>Seating charts, accessibility info, and answers to all your common questions.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="section section-tint">
        <div className="container center">
          <span className="eyebrow">Support Perry Players</span>
          <h2 className="section-title">Community theatre runs on community support</h2>
          <p className="section-lead">
            Every ticket, donation, and volunteer hour keeps live theatre
            thriving in Middle Georgia.
          </p>
          <div className="grid-3" style={{ marginTop: 48, textAlign: 'left' }}>
            <div className="card">
              <div className="card-icon">💝</div>
              <h3>Donate</h3>
              <p>Your gift directly supports productions, education, and the upkeep of our historic theatre.</p>
              <Link to="/support" className="card-link">Give today →</Link>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>Volunteer</h3>
              <p>Onstage or behind the scenes — there's a place for everyone at Perry Players.</p>
              <Link to="/support" className="card-link">Get involved →</Link>
            </div>
            <div className="card">
              <div className="card-icon">⭐</div>
              <h3>Sponsor</h3>
              <p>Put your business in the spotlight while investing in local arts and culture.</p>
              <Link to="/support" className="card-link">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Google reviews */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">5-Star Google Reviews</span>
          <h2 className="section-title">Loved by our community</h2>
          <ReviewSlideshow reviews={reviews} />
        </div>
      </section>

      {/* CTA banner */}
      <section className="cta-banner">
        <div className="container center">
          <h2>Ready for your night at the theatre?</h2>
          <p>Grab your seats for Shrek – The Musical before they're gone.</p>
          <a className="btn btn-light" href={TICKETS_URL} target="_blank" rel="noreferrer">
            Get Tickets Now
          </a>
        </div>
      </section>
    </>
  )
}
