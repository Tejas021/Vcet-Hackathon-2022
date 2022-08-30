import React from 'react'
import Faq from '../../components/Faq/Faq'
import Gallery from '../../components/Gallery/Gallery'
import Landing from '../../components/Landing/Landing'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Gallery/>
      <Faq/>
    </div>
  )
}

export default Home
