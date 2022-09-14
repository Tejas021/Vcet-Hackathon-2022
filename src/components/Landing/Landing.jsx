import React from 'react'
import styles from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={`d-flex flex-column justify-content-center ${styles.LandingContainer}`} id="Landing">
      <div className={styles.landingContainer}>
        <h1 className={styles.collegeName}>Vidyavardhini's College Of Engineering and Technology </h1>
        <p className={`text-center mt-4 ${styles.themeName}`}><h4>presents</h4></p>
        <h1 className={styles.mainHeading}>VCET HACKATHON</h1>
        <h3 className={styles.themeName}>Multiverse of Hacking</h3>
      </div>
    </div>
  )
}

export default Landing