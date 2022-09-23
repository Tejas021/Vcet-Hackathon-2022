import React, { useEffect, useState } from 'react'

import About from '../../components/About/About'

import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

import Timer from '../../components/Timer/Timer'

import Faq from '../../components/Faq/Faq'
import Gallery from '../../components/Gallery/Gallery'
import Landing from '../../components/Landing/Landing'
import Navbar from '../../components/Navbar/Navbar'
import Rules from '../../components/Rules/Rules'
import Sponsor from '../../components/sponsor/sponsor'
import Prizes from '../../components/prizes/Prizes'
import PrizePool from '../../components/prizes/PrizePool'
import Timeline from '../../components/Timeline/Timeline'
import ProblemStatements from '../../components/Problem_Statement/ProblemStatements'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import PrizePool from '../../components/prizes/PrizePool'
import PP from '../../components/PP/PP'


const Home = ({ success }) => {


  useEffect(() => {
    if (success) {
      toast.success("Registered successfully")
    }
  }, [])

  return (
    <div>


      <Navbar />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Landing />
      <About />
      <Timer />
      {/* <PrizePool /> */}
      <PP/>
     
      <ProblemStatements />
      <Timeline />
      <Rules />
      <Sponsor />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />

    </div>
  )
}

export default Home

