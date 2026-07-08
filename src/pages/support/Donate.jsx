import { Link } from 'react-router-dom'

export default function Donate() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Support Us</span>
          <h1>Donate</h1>
          <p>
            Donations allow us to offer high-quality entertainment to the
            community, as well as opportunities for budding and seasoned
            artists to practice and improve their skills. As a 501(c)(3)
            nonprofit organization, we gladly accept your tax-deductible
            donations.
          </p>
        </div>
      </section>

      {/* Zeffy donation form */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Give Online</span>
            <h2 className="section-title">Make a gift today</h2>
            <p className="section-lead">
              Give securely online in just a minute — every dollar stays right
              here in Perry.
            </p>
          </div>
          <div className="zeffy-frame">
            <iframe
              title="Donation form powered by Zeffy"
              src="https://www.zeffy.com/embed/donation-form/ea1ec893-ef51-4143-8488-b42ec8eb6262"
              allowpaymentrequest="true"
              allowtransparency="true"
            />
          </div>
        </div>
      </section>

      {/* Other ways to give */}
      <section className="section section-tint">
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">More Ways to Give</span>
            <h2 className="section-title">Beyond the donation box</h2>
          </div>
          <div className="grid-2">
            <div className="card">
              <div className="card-icon">🛒</div>
              <h3>Kroger Community Rewards</h3>
              <p>
                Support Perry Players every time you shop! Link your Kroger
                Shopper's Card to Perry Players Community Theatre and Kroger
                donates to us automatically — at no cost to you.
              </p>
              <a
                className="btn btn-outline"
                style={{ marginTop: 20 }}
                href="https://www.kroger.com/i/community/community-rewards"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
            </div>
            <div className="card">
              <div className="card-icon">🎩</div>
              <h3>Props &amp; Costume Donations</h3>
              <p>
                Cleaning out the attic? We accept vintage clothing, props, and
                some furnishings for use in our productions. Reach out before
                dropping items off so we can confirm what we can use.
              </p>
              <Link className="btn btn-outline" style={{ marginTop: 20 }} to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="section">
        <div className="container center">
          <h2 className="section-title">Any questions?</h2>
          <p className="section-lead" style={{ marginBottom: 28 }}>
            We're happy to talk through gifts of any size.
          </p>
          <Link className="btn btn-primary" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
