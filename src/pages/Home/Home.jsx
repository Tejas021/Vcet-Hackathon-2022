import React from 'react'
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
    </div>
  )
}

export default Home

