import { useState } from 'react'
import { Link } from 'react-router-dom'
import { emailLink } from '../../email.js'
import Icon from '../../components/Icon.jsx'

const roles = [
  {
    icon: 'cup',
    name: 'Intermission Refreshments',
    desc: 'Provide and serve food and beverages during intermissions.',
  },
  {
    icon: 'palette',
    name: 'Set Design',
    desc: 'Collaborate with producers and directors on the artistic concept for each set.',
  },
  {
    icon: 'hammer',
    name: 'Set Construction',
    desc: 'Build and paint sets — tools and materials provided.',
  },
  {
    icon: 'chair',
    name: 'Props',
    desc: 'Source and manage the items performers use on stage.',
  },
  {
    icon: 'bulb',
    name: 'Lighting Crew',
    desc: 'Hang lights and operate the computerized light board.',
  },
  {
    icon: 'note',
    name: 'Sound Design',
    desc: 'Create sound effects and music for productions.',
  },
  {
    icon: 'sliders',
    name: 'Sound Crew',
    desc: 'Run sound equipment during performances from the tech booth.',
  },
  {
    icon: 'dress',
    name: 'Costume Design',
    desc: 'Create period- and character-appropriate attire for the cast.',
  },
  {
    icon: 'spool',
    name: 'Costume Seamstress',
    desc: 'Construct and finish costumes for productions.',
  },
  {
    icon: 'lipstick',
    name: 'Makeup',
    desc: 'Design makeup, wigs, and hair styling for actors.',
  },
  {
    icon: 'clipboard',
    name: 'Stage Management',
    desc: 'Oversee all aspects of a production and call the cues.',
  },
  {
    icon: 'dance',
    name: 'Choreographer',
    desc: 'Design and teach dance sequences for musicals.',
  },
  {
    icon: 'pen',
    name: 'Graphic Design',
    desc: 'Create logos, posters, and playbill layouts.',
  },
  {
    icon: 'ticket',
    name: 'Box Office Staff',
    desc: 'Manage the ticket booth during performances.',
  },
  {
    icon: 'scissors',
    name: 'Hair & Wig Artists',
    desc: 'Collaborate on hairstyles and wig selection for the cast.',
  },
]

const interestAreas = [
  'Acting / Auditions',
  'Set Design & Construction',
  'Props',
  'Lighting',
  'Sound',
  'Costumes & Sewing',
  'Hair, Wigs & Makeup',
  'Stage Management',
  'Choreography',
  'Graphic Design',
  'Box Office / Front of House',
  'Intermission Refreshments',
]

export default function Volunteer() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    availability: '',
    message: '',
  })
  const [interests, setInterests] = useState([])

  const toggleInterest = (area) =>
    setInterests((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    )

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Volunteer Sign-Up — ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Interested in: ${interests.length ? interests.join(', ') : 'Not specified'}`,
      `Availability: ${form.availability || 'Not specified'}`,
      '',
      form.message,
    ].join('\n')
    window.open(emailLink(subject, body), '_blank', 'noopener')
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Support Us</span>
          <h1>Volunteer at Perry Players!</h1>
          <p>
            Perry Players is a nonprofit organization that is largely run by
            volunteers. Interested in volunteering? You're in the right place —
            no experience necessary, just enthusiasm!
          </p>
        </div>
      </section>

      {/* Roles */}
      <section className="section">
        <div className="container">
          <div className="center" style={{ marginBottom: 48 }}>
            <span className="eyebrow">Where We Need You</span>
            <h2 className="section-title">There's a place for you here</h2>
          </div>
          <div className="grid-3">
            {roles.map((r) => (
              <div className="card" key={r.name}>
                <div className="card-icon"><Icon name={r.icon} /></div>
                <h3>{r.name}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-up form */}
      <section className="section section-tint">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="center" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Sign Up</span>
            <h2 className="section-title">Join the crew</h2>
            <p className="section-lead">
              Tell us a little about yourself and we'll be in touch. Submitting
              opens a Gmail message to our box office with your answers filled in.
            </p>
          </div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label htmlFor="v-name">Name *</label>
                <input
                  id="v-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="v-phone">Phone</label>
                <input
                  id="v-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label>I'm interested in…</label>
              <div className="check-grid">
                {interestAreas.map((area) => (
                  <label className="check-item" key={area}>
                    <input
                      type="checkbox"
                      checked={interests.includes(area)}
                      onChange={() => toggleInterest(area)}
                    />
                    {area}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="v-avail">Availability</label>
              <input
                id="v-avail"
                type="text"
                placeholder="e.g. weekday evenings, weekends"
                value={form.availability}
                onChange={(e) =>
                  setForm({ ...form, availability: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="v-msg">Anything else we should know?</label>
              <textarea
                id="v-msg"
                rows="4"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <div className="center">
              <button className="btn btn-primary" type="submit">
                Sign Up to Volunteer
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Requirements */}
      <section className="section">
        <div className="container center">
          <h2 className="section-title">A few requirements</h2>
          <p className="section-lead" style={{ marginBottom: 28 }}>
            Volunteers must be 18 or older, a US citizen or hold an appropriate
            visa or green card, and have strong communication and interpersonal
            skills. Interested in performing instead? Auditions are open to
            everyone — watch our announcements for upcoming dates.
          </p>
          <Link className="btn btn-outline" to="/contact">
            Questions? Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
