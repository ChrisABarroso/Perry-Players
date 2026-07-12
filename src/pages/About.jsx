import { BOX_OFFICE_EMAIL, emailLink } from '../email.js'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>The Story of Perry Players</h1>
          <p>
            A volunteer-powered community theatre dedicated to bringing quality
            live performance to Middle Georgia.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Our Mission</span>
            <h2 className="section-title">Theatre by the community, for the community</h2>
            <p className="section-lead" style={{ marginBottom: 18 }}>
              Perry Players Community Theatre exists to enrich Middle Georgia
              through the performing arts — producing quality live theatre,
              nurturing local talent, and providing opportunities for people of
              all ages to experience the magic of the stage.
            </p>
            <p style={{ color: 'var(--ink-soft)' }}>
              From our historic home at 909 Main Street, generations of
              volunteers have built sets, sewn costumes, learned lines, and
              taken their bows. Every production is powered entirely by
              community members who share a love of theatre.
            </p>
          </div>
          <div className="grid-2" style={{ gap: 20 }}>
            <div className="card center">
              <h3 style={{ fontSize: '2.2rem', color: 'var(--accent)' }}>100%</h3>
              <p>Volunteer powered</p>
            </div>
            <div className="card center">
              <h3 style={{ fontSize: '2.2rem', color: 'var(--accent)' }}>909</h3>
              <p>Main Street, our historic home</p>
            </div>
            <div className="card center">
              <h3 style={{ fontSize: '2.2rem', color: 'var(--accent)' }}>All</h3>
              <p>Ages welcome, onstage &amp; off</p>
            </div>
            <div className="card center">
              <h3 style={{ fontSize: '2.2rem', color: 'var(--accent)' }}>❤️</h3>
              <p>Made with love in Perry, GA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board & staff */}
      <section className="section section-soft">
        <div className="container center">
          <span className="eyebrow">Leadership</span>
          <h2 className="section-title">Board &amp; Staff</h2>
          <p className="section-lead">
            Perry Players is governed by a volunteer board of directors elected
            from our membership. Interested in serving? Members in good standing
            are welcome to get involved in theatre leadership.
          </p>
          <a
            className="btn btn-outline"
            style={{ marginTop: 28 }}
            href={emailLink('Board Inquiry')}
            target="_blank"
            rel="noreferrer"
          >
            Contact the Board
          </a>
        </div>
      </section>

      {/* Sponsors */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">Our Sponsors</span>
          <h2 className="section-title">Thank you to our supporters</h2>
          <p className="section-lead">
            Local businesses and organizations make our productions possible.
            We're proud members of the Perry Area Chamber of Commerce.
          </p>
          <div className="grid-4" style={{ marginTop: 48 }}>
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="card center"
                style={{ padding: '40px 20px', color: 'var(--ink-soft)' }}
              >
                <p style={{ fontWeight: 600 }}>Your Business Here</p>
                <p style={{ fontSize: '0.85rem' }}>Become a sponsor</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Box office */}
      <section className="section section-tint">
        <div className="container grid-2">
          <div>
            <span className="eyebrow">Box Office</span>
            <h2 className="section-title">Tickets &amp; Information</h2>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 12 }}>
              <strong style={{ color: 'var(--ink)' }}>Phone:</strong>{' '}
              <a href="tel:+14789875354">(478) 987-5354</a>
            </p>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 12 }}>
              <strong style={{ color: 'var(--ink)' }}>Email:</strong>{' '}
              <a href={emailLink()} target="_blank" rel="noreferrer">
                {BOX_OFFICE_EMAIL}
              </a>
            </p>
            <p style={{ color: 'var(--ink-soft)' }}>
              <strong style={{ color: 'var(--ink)' }}>Showtimes:</strong> Fri &amp;
              Sat 7:30 PM · Sun 2:30 PM
            </p>
          </div>
          <div>
            <span className="eyebrow">Gallery &amp; News</span>
            <h2 className="section-title">Follow along</h2>
            <p className="section-lead">
              Production photos, announcements, and behind-the-scenes moments —
              follow us on Facebook and Instagram to stay in the loop.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
