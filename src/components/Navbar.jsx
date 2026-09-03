import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../Photos/PP_logo_light.png'
import './Navbar.css'

// The Shows tab gets a per-show dropdown again once a season is announced —
// set `dropdown: true` on it and restore the season menu in the nav below.
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
          <img
            className="nav-logo-img"
            src={logo}
            alt="Perry Players Community Theatre"
          />
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
            href="https://www.onthestage.tickets/show/perry-players-community-theatre/69841eaa04635e1054d365d0"
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
