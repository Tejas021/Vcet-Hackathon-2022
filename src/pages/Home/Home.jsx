import React from 'react'
import Gallery from '../../components/Gallery/Gallery'
import Landing from '../../components/Landing/Landing'
import Navbar from '../../components/Navbar/Navbar'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Gallery/>
    </div>
  )
}

export default Home
