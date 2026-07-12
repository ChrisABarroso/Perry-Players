import { Link } from 'react-router-dom'
import { BOX_OFFICE_EMAIL, emailLink } from '../../email.js'

const tiers = [
  { amount: '$100 – $249', benefits: 'Special listing in the show playbill' },
  {
    amount: '$250 – $499',
    benefits: 'Special listing + quarter-page recognition in the playbill',
  },
  {
    amount: '$500 – $749',
    benefits: 'Special listing + half-page recognition in the playbill',
  },
  {
    amount: '$750 – $999',
    benefits: 'Special listing + full-page recognition in the playbill',
  },
  {
    amount: '$1,000 – $4,999',
    benefits:
      'Special listing + full-page recognition + mention in the pre-show curtain speech + 2 complimentary tickets',
  },
]

export default function Sponsorship() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Support Us</span>
          <h1>Become a Sponsor</h1>
          <p>
            Our sponsors light the stage. Because of our sponsors, our theatre
            is possible — sponsorships help cover production costs and put your
            business in front of hundreds of engaged local theatregoers each
            season.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Sponsorship Levels</span>
            <h2 className="section-title">What do you get?</h2>
          </div>
          <div className="table-wrap">
            <table className="tier-table">
              <thead>
                <tr>
                  <th>Sponsorship</th>
                  <th>Benefits</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.amount}>
                    <td>{t.amount}</td>
                    <td>{t.benefits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="fine-print">
            Sponsors receiving playbill recognition should email a business
            card, name recognition, graphic, or company logo (.png or .jpg) to{' '}
            <a href={emailLink('Sponsorship Playbill Artwork')} target="_blank" rel="noreferrer">
              {BOX_OFFICE_EMAIL}
            </a>
            . We reserve the right to adjust sizes and shapes to fit available
            space.
          </p>
        </div>
      </section>

      {/* Zeffy sponsorship form */}
      <section className="section section-tint">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Sponsor Online</span>
            <h2 className="section-title">Start your sponsorship</h2>
            <p className="section-lead">
              Complete your sponsorship securely online — it only takes a
              minute.
            </p>
          </div>
          <div className="zeffy-frame">
            <iframe
              title="Sponsorship form powered by Zeffy"
              src="https://www.zeffy.com/embed/donation-form/96656788-645a-4481-b027-30a5f41f4f68"
              allowpaymentrequest="true"
              allowtransparency="true"
            />
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="section">
        <div className="container center">
          <h2 className="section-title">Any questions?</h2>
          <p className="section-lead" style={{ marginBottom: 28 }}>
            We'd love to build a sponsorship package that fits your business.
          </p>
          <Link className="btn btn-primary" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
