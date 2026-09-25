import { Link } from 'react-router-dom'
import { emailLink } from '../../email.js'
import { TICKETS_URL } from '../../tickets.js'
import Icon from '../../components/Icon.jsx'

export default function Membership() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Support Us</span>
          <h1>Become a Season Patron</h1>
          <p>
            Perry Players is a nonprofit organization that is largely run by
            volunteers and supported by patrons just like you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <div className="card-icon"><Icon name="ticket" /></div>
              <h3>Join Perry Players!</h3>
              <p>
                Our membership program is a great way to get involved with the
                theatre and support our community engagement initiatives —
                including voting rights, insider updates, and the satisfaction
                of sustaining local arts.
              </p>
              <a
                className="btn btn-primary"
                style={{ marginTop: 20 }}
                href={emailLink('Membership Inquiry')}
                target="_blank"
                rel="noreferrer"
              >
                Ask About Membership
              </a>
            </div>
            <div className="card">
              <div className="card-icon"><Icon name="calendar" /></div>
              <h3>Season Tickets</h3>
              <p>
                We are not currently offering season tickets. Individual show
                tickets are always available through our box office — and
                members are the first to know when season packages return.
              </p>
              <a
                className="btn btn-outline"
                style={{ marginTop: 20 }}
                href={TICKETS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Buy Show Tickets
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container center">
          <h2 className="section-title">Any questions?</h2>
          <p className="section-lead" style={{ marginBottom: 28 }}>
            We're happy to tell you more about becoming a patron.
          </p>
          <Link className="btn btn-primary" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
