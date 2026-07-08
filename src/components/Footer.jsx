import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">
            <Logo className="footer-logo-mark" />
            <span>
              Perry Players
              <small>Community Theatre</small>
            </span>
          </div>
          <p className="footer-tagline">
            Middle Georgia's premier community theatre, bringing live performance
            to historic downtown Perry.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/perryplayers" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a href="https://www.instagram.com/perryplayers" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
            <a href="https://www.youtube.com/@perryplayers" target="_blank" rel="noreferrer" aria-label="YouTube">yt</a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/shows">Shows &amp; Productions</Link></li>
            <li><Link to="/visit">Plan Your Visit</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/youth">Perry Players Youth</Link></li>
          </ul>
        </div>

        <div>
          <h4>Get Involved</h4>
          <ul>
            <li><Link to="/support">Donate</Link></li>
            <li><Link to="/support">Volunteer</Link></li>
            <li><Link to="/support">Become a Sponsor</Link></li>
            <li><Link to="/support">Membership</Link></li>
          </ul>
        </div>

        <div>
          <h4>Box Office</h4>
          <ul className="footer-contact">
            <li>909 Main Street<br />Perry, GA 31069</li>
            <li><a href="tel:+14789875354">(478) 987-5354</a></li>
            <li><a href="mailto:perryplayerstheatreboxoffice@gmail.com">Email the box office</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Perry Players Community Theatre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
