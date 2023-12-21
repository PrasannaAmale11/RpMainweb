import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import My_Navbar from './Components/Navbar/Nav'
import Home from './Home'
import Career from './Career'
import Media from './Media'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Technology from './Technology'
import Transportation from './Transportation'
import Upcoming_BSN from './Upcoming_BSN'
import Ecommerce from './Ecommerce'
import Finance from './Finance'
import Overview from './Overview'
import ScrollToTop from "./Scrolltotop";
import AOS from "aos"
import ComingSoon from './ComingSoon'
import Gallary from './Components/Gallary/Gallary'


function App() {

  useEffect(() => {
    AOS.init()
  })
  return (
    <>
      <Router>
        <ScrollToTop />
        <My_Navbar />
        <div className="app" style={{ overflow: "hidden" }}>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/career' element={<Career />} />
            <Route path='/about' element={<About />} />
            <Route path='/media' element={<Media />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/transportation' element={<Transportation />} />
            <Route path='/upcoming' element={<Upcoming_BSN />} />
            <Route path='/ecommerce' element={<Ecommerce />} />
            <Route path='/finance' element={<Finance />} />
            <Route path='/overview' element={<Overview />} />
            <Route path='/comingsoon' element={<ComingSoon />} />
            <Route path='/gallary' element={<Gallary />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
