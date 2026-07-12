import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { season } from '../season.js'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shows', label: 'Shows', dropdown: true },
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
          {links.map((l) =>
            l.dropdown ? (
              <div className="nav-drop" key={l.to}>
                <NavLink
                  to={l.to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {l.label} <span className="nav-drop-caret">▾</span>
                </NavLink>
                <div className="nav-drop-menu">
                  {season.map((show) => (
                    <NavLink
                      key={show.slug}
                      to={`/shows/${show.slug}`}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                      {show.title}
                      {show.kids && <small> · Children's</small>}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {l.label}
              </NavLink>
            ),
          )}
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
