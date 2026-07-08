import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import VisitUs from './pages/VisitUs.jsx'
import About from './pages/About.jsx'
import Shows from './pages/Shows.jsx'
import Support from './pages/Support.jsx'
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
          <Route path="/support" element={<Support />} />
          <Route path="/youth" element={<Youth />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
