import { useState } from 'react'
import { BOX_OFFICE_EMAIL, emailLink } from '../email.js'
import './Contact.css'
import Icon from '../components/Icon.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const subject = `Website inquiry from ${data.get('name')}`
    const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
    window.open(emailLink(subject, body), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>We'd Love to Hear From You</h1>
          <p>
            Questions about tickets, auditions, volunteering, or anything else?
            Drop us a line.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-head">
            <h2 className="section-title">Box Office &amp; General Inquiries</h2>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="card contact-card">
              <div className="card-icon"><Icon name="pin" /></div>
              <h3>Visit</h3>
              <p>
                909 Main Street<br />
                Perry, GA 31069
              </p>
            </div>
            <div className="card contact-card">
              <div className="card-icon"><Icon name="phone" /></div>
              <h3>Call</h3>
              <p>
                <a href="tel:+14789875354">(478) 987-5354</a>
              </p>
            </div>
            <div className="card contact-card">
              <div className="card-icon"><Icon name="envelope" /></div>
              <h3>Email</h3>
              <p>
                <a href={emailLink()} target="_blank" rel="noreferrer">
                  {BOX_OFFICE_EMAIL}
                </a>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="card contact-form">
            <h3>Send us a message</h3>
            {sent && (
              <p style={{ background: 'var(--gold-soft)', padding: '12px 16px', borderRadius: 10, marginBottom: 20 }}>
                A Gmail window should have opened with your message ready to
                send — if not, email us directly at {BOX_OFFICE_EMAIL}.
              </p>
            )}
            <form className="form-grid" onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>
              </div>
              <div className="message-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required />
              </div>
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section section-soft">
        <div className="container">
          <iframe
            className="map-frame"
            title="Map to Perry Players Community Theatre"
            src="https://www.google.com/maps?q=909+Main+St,+Perry,+GA+31069&output=embed"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}
