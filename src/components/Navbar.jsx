import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shows', label: 'Shows' },
  { to: '/visit', label: 'Visit Us' },
  { to: '/about', label: 'About' },
  { to: '/support', label: 'Support Us' },
  { to: '/youth', label: 'Youth' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <div className="container nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <Logo className="nav-logo-mark" />
          <span className="nav-logo-text">
            Perry Players
            <small>Community Theatre</small>
          </span>
        </Link>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            className="btn btn-primary nav-cta"
            href="https://perryplayers.onthestage.tickets"
            target="_blank"
            rel="noreferrer"
          >
            Buy Tickets
          </a>
        </nav>

        <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
