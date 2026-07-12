import PhotoGrid from '../components/PhotoGrid.jsx'
import { campPhotos } from '../photos.js'
import { emailLink } from '../email.js'

const glossary = [
  ['Blocking', 'The planned movement and positioning of actors on stage.'],
  ['Break a leg', "The traditional way to wish an actor good luck — never say 'good luck' in a theatre!"],
  ['Cue', 'A signal — a line, light change, or sound — that tells a performer or crew member to act.'],
  ['Downstage', 'The part of the stage closest to the audience.'],
  ['House', 'Where the audience sits.'],
  ['Off book', 'When an actor has memorized their lines and no longer needs the script.'],
  ['Props', 'Objects used by actors during a performance, short for "properties."'],
  ['Strike', 'Taking down the set after the final performance — all hands on deck!'],
  ['Upstage', 'The part of the stage farthest from the audience.'],
  ['Wings', 'The hidden areas on either side of the stage where actors wait to enter.'],
]

export default function Youth() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Perry Players Youth</span>
          <h1>The Next Generation Takes the Stage</h1>
          <p>
            Building confidence, creativity, and lifelong friendships through
            theatre education for young performers.
          </p>
        </div>
      </section>

      {/* Summer camp */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">Summer Camp</span>
            <h2 className="section-title">Youth Summer Theatre Camp</h2>
            <p className="section-lead" style={{ marginBottom: 18 }}>
              Every summer, young performers take over the Perry Players stage
              for a week of acting, singing, dancing, and theatre games —
              culminating in a performance for family and friends.
            </p>
            <p style={{ color: 'var(--ink-soft)', marginBottom: 28 }}>
              Campers learn stage skills from experienced theatre volunteers,
              make new friends, and discover the joy of performing. No
              experience needed — just bring your imagination!
            </p>
            <a
              className="btn btn-primary"
              href={emailLink('Youth Summer Camp')}
              target="_blank"
              rel="noreferrer"
            >
              Ask About Camp
            </a>
          </div>
          <PhotoGrid photos={campPhotos} columns={2} />
        </div>
      </section>

      {/* Camp memories */}
      <section className="section section-tint">
        <div className="container center">
          <span className="eyebrow">What Campers Learn</span>
          <h2 className="section-title">Singing · Dancing · Acting · Performing</h2>
          <p className="section-lead">
            Every camper takes the stage in a full performance at the end of
            the week — costumes, lights, applause, and all.
          </p>
        </div>
      </section>

      {/* Glossary */}
      <section className="section section-soft">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Learn the Lingo</span>
            <h2 className="section-title">Theatre Glossary</h2>
            <p className="section-lead">
              New to theatre? Here are some terms every young performer should
              know.
            </p>
          </div>
          {glossary.map(([term, def]) => (
            <details className="faq-item" key={term}>
              <summary>{term}</summary>
              <p>{def}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
