import Icon from '../components/Icon.jsx'

export default function VisitUs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Plan Your Visit</span>
          <h1>Visit Us in Downtown Perry</h1>
          <p>
            Located in the heart of historic downtown Perry, Georgia — where
            southern charm meets live theatre.
          </p>
        </div>
      </section>

      {/* Directions + map */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Getting Here</span>
            <h2 className="section-title">909 Main Street</h2>
            <p className="section-lead" style={{ marginBottom: 20 }}>
              We're on Main Street in downtown Perry, just minutes off I-75
              (exits 134–136). Free street parking and public lots are available
              within easy walking distance of the theatre.
            </p>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 28 }}>
              <strong style={{ color: 'var(--ink)' }}>Perry Players Community Theatre</strong><br />
              909 Main Street<br />
              Perry, GA 31069
            </p>
            <a
              className="btn btn-primary"
              href="https://www.google.com/maps/dir/?api=1&destination=909+Main+St,+Perry,+GA+31069"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
          </div>
          <iframe
            className="map-frame"
            title="Map to Perry Players Community Theatre"
            src="https://www.google.com/maps?q=909+Main+St,+Perry,+GA+31069&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      {/* Welcome to Perry + dining */}
      <section className="section section-soft">
        <div className="container">
          <div className="center">
            <span className="eyebrow">Make a Night of It</span>
            <h2 className="section-title">Welcome to Perry, Georgia</h2>
            <p className="section-lead">
              Known as the "Crossroads of Georgia," Perry offers charming shops,
              great restaurants, and southern hospitality — all steps from our
              front door.
            </p>
          </div>
          <div className="grid-3" style={{ marginTop: 48 }}>
            <div className="card">
              <div className="card-icon"><Icon name="dining" /></div>
              <h3>Dinner &amp; a Show</h3>
              <p>
                Downtown Perry's restaurants are within walking distance of the
                theatre. Arrive early, enjoy a great meal, and stroll to your
                seats.
              </p>
            </div>
            <div className="card">
              <div className="card-icon"><Icon name="bag" /></div>
              <h3>Shop Downtown</h3>
              <p>
                Browse boutiques, antique shops, and local galleries along
                historic Carroll Street and Main Street before the curtain
                rises.
              </p>
            </div>
            <div className="card">
              <div className="card-icon"><Icon name="lodging" /></div>
              <h3>Stay the Night</h3>
              <p>
                Coming from out of town? Perry offers plenty of hotels and inns,
                many just a short drive from the theatre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility & seating */}
      <section className="section">
        <div className="container grid-2">
          <div className="card">
            <div className="card-icon"><Icon name="accessible" /></div>
            <h3>Accessibility</h3>
            <p>
              Perry Players is committed to making theatre accessible to
              everyone. Wheelchair-accessible seating is available — please let
              the box office know when purchasing tickets so we can best
              accommodate you. Contact us at (478) 987-5354 with any questions
              about accommodations.
            </p>
          </div>
          <div className="card">
            <div className="card-icon"><Icon name="ticket" /></div>
            <h3>Seating</h3>
            <p>
              Our intimate theatre means there's not a bad seat in the house.
              Seats are reserved at time of purchase — book early for the best
              selection. View the seating chart when selecting your tickets
              online.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section-tint">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Good to Know</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <details className="faq-item">
            <summary>What time should I arrive?</summary>
            <p>
              The house typically opens 30 minutes before showtime. We recommend
              arriving at least 15–20 minutes early to park, pick up tickets,
              and find your seats.
            </p>
          </details>
          <details className="faq-item">
            <summary>How do I buy tickets?</summary>
            <p>
              Tickets are available online through our ticketing platform, by
              phone at (478) 987-5354, or at the box office before performances
              (subject to availability).
            </p>
          </details>
          <details className="faq-item">
            <summary>Are shows appropriate for children?</summary>
            <p>
              It varies by production! Many of our shows are great for all
              ages. Check each show's description or contact the box office if
              you're unsure.
            </p>
          </details>
          <details className="faq-item">
            <summary>Is there parking nearby?</summary>
            <p>
              Yes — free street parking and public lots are available throughout
              downtown Perry, all within a short walk of the theatre.
            </p>
          </details>
          <details className="faq-item">
            <summary>Can I exchange or refund my tickets?</summary>
            <p>
              Please contact the box office as soon as possible if your plans
              change. Policies may vary by production, and we'll do our best to
              accommodate you.
            </p>
          </details>
          <details className="faq-item">
            <summary>How can I get involved with Perry Players?</summary>
            <p>
              We'd love to have you! Auditions are open to the community, and
              volunteers are always needed backstage and front of house. Visit
              our Support Us page to learn more.
            </p>
          </details>
        </div>
      </section>
    </>
  )
}
