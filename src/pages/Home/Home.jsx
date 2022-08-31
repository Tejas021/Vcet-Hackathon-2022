import React from 'react'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Faq from '../../components/Faq/Faq'
import Gallery from '../../components/Gallery/Gallery'
import Landing from '../../components/Landing/Landing'
import Navbar from '../../components/Navbar/Navbar'
import Rules from '../../components/Rules/Rules'
import Sponsor from '../../components/sponsor/sponsor'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Sponsor/> 
      <Rules/>
      <Gallery/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home

