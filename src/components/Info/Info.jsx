import React from 'react'

import About from '../About/About'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import Navbar from '../Navbar/Navbar'

const Info = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Gallery/>
      {/* <Footer/> */}
    </div>
  )
}

export default Info