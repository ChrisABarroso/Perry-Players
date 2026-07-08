import { Link } from 'react-router-dom'

const friends = [
  { name: 'Theatre Macon', url: 'https://www.theatremacon.com/' },
  { name: 'W.R. Little Theatre', url: 'https://www.wrlittletheatre.com/' },
  { name: 'Macon Little Theatre', url: 'https://www.maconlittletheatre.org/' },
  { name: 'The Grand Opera House, Macon', url: 'https://www.thegrandmacon.com/' },
  { name: 'Houston County Living Magazine', url: null },
  { name: 'Rocket PC', url: null },
  { name: 'Dream A Little Wish', url: null },
]

export default function Friends() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Support Us</span>
          <h1>Friends of Perry Players</h1>
          <p>
            Without people, there is no theatre. We couldn't accomplish what we
            do without the support of local theatres, historical societies,
            organizations, companies, and individuals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Our Friends</span>
            <h2 className="section-title">The company we keep</h2>
          </div>
          <div className="grid-3">
            {friends.map((f) => (
              <div className="card center" key={f.name}>
                <h3>{f.name}</h3>
                {f.url && (
                  <a
                    className="btn btn-light"
                    style={{ marginTop: 16 }}
                    href={f.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container center">
          <h2 className="section-title">Want to become a friend?</h2>
          <p className="section-lead" style={{ marginBottom: 28 }}>
            Friends of Perry Players are generous individuals, families, and
            organizations who sustain the theatre year after year — and are
            celebrated in every show program.
          </p>
          <Link className="btn btn-primary" to="/contact">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
