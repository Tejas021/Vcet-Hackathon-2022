import React from 'react'

import About from '../../components/About/About'

import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

import Faq from '../../components/Faq/Faq'
import Gallery from '../../components/Gallery/Gallery'
import Landing from '../../components/Landing/Landing'
import Navbar from '../../components/Navbar/Navbar'
import Rules from '../../components/Rules/Rules'
import Sponsor from '../../components/sponsor/sponsor'
import Timeline from '../../components/Timeline/Timeline'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Timeline />
      <Sponsor />
      <Rules />
      <About />
      <Gallery />
      <Faq />
      <Contact/>
      <Footer/>

    </div>
  )
}

export default Home

