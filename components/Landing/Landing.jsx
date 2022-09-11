import React from 'react'
import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={`d-flex flex-column justify-content-center ${styles.LandingContainer}`}>


      <h1 >VidyaVardhini's College Of Engineering and Technolgy </h1>
      <p className='text-center text-light'>presents</p>
      <h1 className='fw-bold'>VCET HACKATHON</h1>
      <h3 className='text-center text-light fw-bold'>Multiverse of Coding</h3>
    </div>
  )
}

export default Landing
