import { Link } from 'react-router-dom'
import { BOX_OFFICE_EMAIL, emailLink } from '../../email.js'
import packetUrl from '../../Files/Perry_Players_Sponsorship_Packet_Final.docx?url'
import './Sponsorship.css'

// Levels and benefits mirror the Perry Players Sponsorship Packet.
const showSponsorships = {
  tiers: [
    { name: 'Supporting Sponsor', price: '$100 – $250' },
    { name: 'Spotlight Sponsor', price: '$251 – $500' },
    { name: 'Show Sponsor', price: '$501 – $1,000+', featured: true },
  ],
  rows: [
    ['Program Recognition', 'Name/business', 'Name/business', 'Prominent Show Sponsor'],
    ['Program Advertisement', '—', '½ page', 'Full page'],
    ['Perry Players Website', 'Recognition', 'Recognition', 'Prominent logo'],
    ['Social Media', 'Group recognition', 'Group recognition', 'Individual recognition'],
    ['Pre-Show Sponsor Recognition', '—', '—', 'Each performance'],
    ['Theatre Lobby Recognition', '—', '—', 'Production run'],
    ['Complimentary Tickets', '—', '2', '4'],
  ],
}

const seasonSponsorships = {
  tiers: [
    { name: 'Season Supporter', price: '$1,500' },
    { name: 'Season Partner', price: '$3,000' },
    { name: 'Presenting Season Sponsor', price: '$5,000+', featured: true },
  ],
  rows: [
    ['Program Recognition', 'Every production', 'Every production', 'Premier recognition'],
    [
      'Program Advertisement',
      '¼ page / every production',
      '½ page / every production',
      'Full page / every production',
    ],
    ['Perry Players Website', 'Season-long recognition', 'Prominent logo', 'Premier logo'],
    [
      'Social Media',
      'Group recognition',
      'Individual recognition',
      'Individual premier recognition',
    ],
    ['Pre-Show Sponsor Recognition', '—', 'Each production', 'Premier / each production'],
    ['Theatre Lobby Recognition', '—', 'Throughout season', 'Prominent / throughout season'],
    ['Complimentary Tickets', '2 per production', '4 per production', '6 per production'],
    ['Season Promotional Materials', '—', '—', 'Recognition when applicable'],
  ],
}

function BenefitsTable({ tiers, rows }) {
  return (
    <div className="table-wrap sponsor-table-wrap">
      <table className="tier-table sponsor-table">
        <thead>
          <tr>
            <th>Benefit</th>
            {tiers.map((t) => (
              <th key={t.name} className={t.featured ? 'is-featured' : ''}>
                {t.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="sponsor-price-row">
            <td>Sponsorship</td>
            {tiers.map((t) => (
              <td key={t.name} className={t.featured ? 'is-featured' : ''}>
                {t.price}
              </td>
            ))}
          </tr>
          {rows.map(([label, ...values]) => (
            <tr key={label}>
              <td>{label}</td>
              {values.map((v, i) => (
                <td
                  key={i}
                  className={[
                    tiers[i].featured ? 'is-featured' : '',
                    v === '—' ? 'is-empty' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Sponsorship() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Support Us</span>
          <h1>Support the Stage. Strengthen Our Community.</h1>
          <p>
            A sponsorship is an opportunity to support the arts locally while
            connecting your business, organization, or family with a community
            institution that depends on local participation and support.
          </p>
        </div>
      </section>

      {/* Why sponsor */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Why Sponsor</span>
            <h2 className="section-title">Your sponsorship does more than put your name in a program</h2>
            <p className="section-lead">
              It helps put a show on the stage, care for the theatre we call
              home, and strengthen the future of community theatre in Perry.
            </p>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">🎭</div>
              <h3>A true community effort</h3>
              <p>
                Our actors, directors, production teams, and volunteers give
                their time and talents to create live theatre right here in
                Perry. From the first rehearsal to the final curtain call,
                countless volunteer hours go into every production.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🎟️</div>
              <h3>Tickets only cover part of it</h3>
              <p>
                Performance rights, sets, costumes, props, technical equipment,
                and facility expenses make community support essential.
                Sponsorships help us meet those needs while keeping the arts
                close to home.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🏛️</div>
              <h3>Investing in our theatre</h3>
              <p>
                Future facility goals include replacing the seating in our
                auditorium and adding doors to our restroom entrances — the kind
                of long-term investment that improves the experience for
                everyone who walks through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Show sponsorships */}
      <section className="section section-soft">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Show Sponsorships</span>
            <h2 className="section-title">Take the stage with us for one production</h2>
            <p className="section-lead">
              Support a single production and be recognized throughout its run.
            </p>
          </div>
          <BenefitsTable {...showSponsorships} />
        </div>
      </section>

      {/* Season sponsorships */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Season Sponsorships</span>
            <h2 className="section-title">Help keep the curtain rising all season long</h2>
            <p className="section-lead">
              A broader investment in Perry Players, with recognition across
              every production of the season.
            </p>
          </div>
          <BenefitsTable {...seasonSponsorships} />
          <p className="fine-print">
            <strong>Sponsor recognition:</strong> for sponsorships that include
            an advertisement or logo recognition, please send a high-resolution
            logo and/or print-ready advertisement to{' '}
            <a href={emailLink('Sponsorship Artwork')} target="_blank" rel="noreferrer">
              {BOX_OFFICE_EMAIL}
            </a>
            , along with your name exactly as it should appear. We reserve the
            right to adjust sizes and shapes to fit available space.
          </p>
        </div>
      </section>

      {/* Sponsorship form */}
      <section className="section section-tint">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Become a Sponsor</span>
            <h2 className="section-title">Sponsorship Form</h2>
            <p className="section-lead">
              Complete the form below and select <strong>Process Online
              Donation</strong> to pay securely by credit card, Google Pay, or
              Apple Pay. For Show Sponsorships, please note which production you
              wish to sponsor.
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

      {/* Other ways to give */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Other Ways to Pay</span>
            <h2 className="section-title">Prefer cash or check?</h2>
          </div>
          <div className="grid-2 sponsor-pay">
            <div className="card">
              <div className="card-icon">✉️</div>
              <h3>By mail or in person</h3>
              <p>
                We accept cash, check, and money orders. Make checks payable to
                <strong> Perry Players Community Theatre</strong>.
              </p>
              <p className="sponsor-address">
                Perry Players Community Theatre<br />
                909 Main Street<br />
                Perry, GA 31069
              </p>
            </div>
            <div className="card">
              <div className="card-icon">📄</div>
              <h3>Sponsorship packet</h3>
              <p>
                Download the full packet for sponsorship details and a printable
                form you can complete and mail in with your payment.
              </p>
              <a
                className="btn btn-outline"
                style={{ marginTop: 20 }}
                href={packetUrl}
                download
              >
                Download the Packet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="section section-soft">
        <div className="container center">
          <h2 className="section-title">Any questions?</h2>
          <p className="section-lead" style={{ marginBottom: 28 }}>
            We'd love to build a sponsorship that fits your business or family.
            Thank you for helping keep live theatre one of the things that makes
            Perry special.
          </p>
          <Link className="btn btn-primary" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
