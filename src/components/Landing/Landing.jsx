import React from 'react'
import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div style={{
      height:'100vh',background:`linear-gradient(
        to bottom,
        rgba(0, 0, 0, 1) 0%,
        #100848a0 10%,
        #00000000 50%,
        #00000000 70%,
        #100848a0 90%,
        rgba(0, 0, 0, 1) 100%
      ),url("/src/assets/landing.jpg")`,backgroundAttachment:"fixed"
    }} className="d-flex flex-column justify-content-center">


      <h1 >VidyaVardhini's College Of Engineering and Technolgy </h1>
      <p className='text-center text-light'>presents</p>
      <h1 className='fw-bold'>VCET HACKATHON</h1>
      <h3 className='text-center text-light fw-bold'>Multiverse of Coding</h3>
    </div>
  )
}

export default Landing
