import PhotoGrid from '../components/PhotoGrid.jsx'
import { mainstagePhotos, showPosterPortrait } from '../photos.js'
import './Shows.css'

const TICKETS_URL = 'https://www.onthestage.tickets/show/perry-players-community-theatre/69841eaa04635e1054d365d0'

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
              <img src={showPosterPortrait} alt="Into the Woods poster" />
            </div>
            <div className="show-feature-body">
              <span className="badge">Now Showing</span>
              <h2>Into the Woods</h2>
              <p className="show-dates">October 16 – 25, 2026</p>
              <p>
                Stephen Sondheim and James Lapine's masterpiece weaves together
                the fairy tales you grew up with — Cinderella, Jack and the
                Beanstalk, Little Red Riding Hood, Rapunzel — around a baker and
                his wife who long for a child. To lift a witch's curse, they
                venture into the woods, where every wish comes true… and every
                wish has a price. Witty, haunting, and gorgeous, it's one of the
                greatest musicals ever written.
              </p>
              <ul className="show-meta">
                <li><strong>Thu, Fri &amp; Sat</strong> 7:30 PM</li>
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

      {/* Season announcement teaser */}
      <section className="section section-soft">
        <div className="container center">
          <div className="season-teaser">
            <span className="season-teaser-curtain">🎭</span>
            <span className="eyebrow">Coming Soon</span>
            <h2 className="section-title">Our next season will be announced soon</h2>
            <p className="section-lead">
              Be the first to hear it — we'll reveal the full lineup live on
              <strong> opening night of Into the Woods, October 16</strong>.
              Join us in the audience to find out what's coming to the Perry
              Players stage.
            </p>
            <a
              className="btn btn-primary"
              style={{ marginTop: 28 }}
              href={TICKETS_URL}
              target="_blank"
              rel="noreferrer"
            >
              Get Opening Night Tickets
            </a>
          </div>
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

    </>
  )
}
