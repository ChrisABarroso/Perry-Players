import PhotoGrid from '../components/PhotoGrid.jsx'
import { mainstagePhotos, showPosterPortrait } from '../photos.js'
import './Shows.css'

const TICKETS_URL = 'https://perryplayers.onthestage.tickets'

export default function Shows() {
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

      {/* Current show */}
      <section className="section">
        <div className="container">
          <div className="show-feature">
            <div className="show-feature-art">
              <img src={showPosterPortrait} alt="Shrek – The Musical poster" />
            </div>
            <div className="show-feature-body">
              <span className="badge">Now Showing</span>
              <h2>Shrek – The Musical</h2>
              <p className="show-dates">July 17 – 26, 2026</p>
              <p>
                "Once upon a time, there was a little ogre named Shrek…" Based
                on the Oscar-winning DreamWorks Animation film, this Tony
                Award-winning musical brings all your favorite fairy tale
                characters to life. Join Shrek and his loyal steed Donkey on a
                quest to rescue Princess Fiona — a hilarious, heartwarming
                adventure the whole family will love.
              </p>
              <ul className="show-meta">
                <li><strong>Fri &amp; Sat</strong> 7:30 PM</li>
                <li><strong>Sun</strong> 2:30 PM</li>
                <li><strong>Where</strong> 909 Main Street, Perry</li>
              </ul>
              <a className="btn btn-primary" href={TICKETS_URL} target="_blank" rel="noreferrer">
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="section section-soft">
        <div className="container center">
          <span className="eyebrow">Coming Soon</span>
          <h2 className="section-title">The rest of our season</h2>
          <p className="section-lead">
            Our upcoming season lineup will be announced soon. Follow us on
            social media or check back here for announcements!
          </p>
        </div>
      </section>

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

      {/* Proposals */}
      <section className="section section-tint">
        <div className="container center">
          <span className="eyebrow">For Directors</span>
          <h2 className="section-title">Propose a Production</h2>
          <p className="section-lead">
            Interested in directing a show at Perry Players? We welcome
            production proposals from our community. Contact the board to learn
            about the proposal process and deadlines.
          </p>
          <a className="btn btn-outline" style={{ marginTop: 28 }} href="mailto:perryplayerstheatreboxoffice@gmail.com">
            Contact the Board
          </a>
        </div>
      </section>
    </>
  )
}
