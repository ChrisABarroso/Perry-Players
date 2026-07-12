import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import VisitUs from './pages/VisitUs.jsx'
import About from './pages/About.jsx'
import Shows from './pages/Shows.jsx'
import ShowDetail from './pages/ShowDetail.jsx'
import Support from './pages/Support.jsx'
import Donate from './pages/support/Donate.jsx'
import Sponsorship from './pages/support/Sponsorship.jsx'
import Membership from './pages/support/Membership.jsx'
import Volunteer from './pages/support/Volunteer.jsx'
import Friends from './pages/support/Friends.jsx'
import Youth from './pages/Youth.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit" element={<VisitUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:slug" element={<ShowDetail />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/donate" element={<Donate />} />
          <Route path="/support/sponsorship" element={<Sponsorship />} />
          <Route path="/support/membership" element={<Membership />} />
          <Route path="/support/volunteer" element={<Volunteer />} />
          <Route path="/support/friends" element={<Friends />} />
          <Route path="/youth" element={<Youth />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
