import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function Support() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Support Us</span>
          <h1>Keep the Curtain Rising</h1>
          <p>
            Perry Players is a nonprofit community theatre. Your support — in
            dollars, time, or talent — makes every production possible.
          </p>
        </div>
      </section>

      {/* Ways to give */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Ways to Give</span>
            <h2 className="section-title">Every contribution counts</h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <div className="card-icon"><Icon name="heart" /></div>
              <h3>Donate</h3>
              <p>
                Your tax-deductible gift directly funds set construction,
                costumes, licensing, and the upkeep of our historic theatre.
                Every dollar stays right here in Perry.
              </p>
              <Link
                className="btn btn-primary"
                style={{ marginTop: 20 }}
                to="/support/donate"
              >
                Make a Gift
              </Link>
            </div>
            <div className="card">
              <div className="card-icon"><Icon name="star" /></div>
              <h3>Sponsorship</h3>
              <p>
                Put your business in front of hundreds of engaged local
                theatregoers each season. Sponsorship packages include program
                ads, lobby recognition, and complimentary tickets.
              </p>
              <Link
                className="btn btn-primary"
                style={{ marginTop: 20 }}
                to="/support/sponsorship"
              >
                Become a Sponsor
              </Link>
            </div>
            <div className="card">
              <div className="card-icon"><Icon name="ticket" /></div>
              <h3>Membership</h3>
              <p>
                Become a member of Perry Players and enjoy a deeper connection
                to your community theatre — including voting rights, insider
                updates, and the satisfaction of sustaining local arts.
              </p>
              <Link
                className="btn btn-primary"
                style={{ marginTop: 20 }}
                to="/support/membership"
              >
                Join Today
              </Link>
            </div>
            <div className="card">
              <div className="card-icon"><Icon name="friends" /></div>
              <h3>Friends of Perry Players</h3>
              <p>
                Our Friends program recognizes generous individuals and families
                who sustain the theatre year after year. Friends are celebrated
                in every show program.
              </p>
              <Link
                className="btn btn-primary"
                style={{ marginTop: 20 }}
                to="/support/friends"
              >
                Become a Friend
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="section section-tint">
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Volunteer</span>
            <h2 className="section-title">There's a place for you here</h2>
            <p className="section-lead">
              No experience necessary — just enthusiasm! Volunteers are the
              heart of everything we do.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon"><Icon name="mask" /></div>
              <h3>Onstage</h3>
              <p>
                Auditions are open to everyone in the community. Watch our
                announcements for upcoming audition dates — your stage debut
                awaits.
              </p>
            </div>
            <div className="card">
              <div className="card-icon"><Icon name="hammer" /></div>
              <h3>Backstage</h3>
              <p>
                Set building, painting, costumes, props, lighting, and sound —
                the magic behind the curtain needs many hands.
              </p>
            </div>
            <div className="card">
              <div className="card-icon"><Icon name="door" /></div>
              <h3>Front of House</h3>
              <p>
                Ushering, box office, and concessions volunteers make every
                audience member feel welcome — and see the show for free!
              </p>
            </div>
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <Link
              className="btn btn-primary"
              to="/support/volunteer"
            >
              Sign Up to Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
