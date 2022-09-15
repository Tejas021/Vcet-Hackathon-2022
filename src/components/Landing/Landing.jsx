import React from 'react'
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className={`d-flex flex-column justify-content-center ${styles.LandingContainer}`} id="Landing">
      <div className={styles.landingContainer}>
        <h1 className={styles.collegeName}>Vidyavardhini's College Of Engineering and Technology </h1>
        <p className={`text-center mt-4 ${styles.presents}`}>presents</p>
        <h1 className={styles.mainHeading}>VCET HACKATHON</h1>
        <h3 className={styles.themeName}>Multiverse of Hacking</h3>
       
      </div>
      <div className={styles.RegisterBtnDiv}>
        <Link to="/register" className={`${styles.linktoreg}`}><button className={`  ${styles.RegisterBtn} btn text-light mx-4 my-2 p-3 px-4`}>REGISTER NOW</button></Link>
        </div>
    </div>
  )
}

export default Landing