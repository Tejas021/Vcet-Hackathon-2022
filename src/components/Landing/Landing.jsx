import React from 'react'
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Landing = () => {
  return (
    <div className={`d-flex flex-column justify-content-center ${styles.LandingContainer}`} id="Landing">
      <div className={styles.landingContainer}> <a className={styles.landingLink} href="https://vcet.edu.in">
      <div className='text-center'> <img src="/logo2.png" style={{height:"100px",marginBottom:"20px",cursor:'pointer'}}/>   </div>
        <h1 className={`${styles.collegeName} text-light`}>Vidyavardhini's College Of Engineering and Technology </h1></a> 

        <p className={`text-center mt-4 ${styles.presents}`}>presents</p>
        <h1 className={styles.mainHeading}>VCET HACKATHON 2023</h1>
        {/* <h3 className={styles.themeName}>Multiverse of Hacking</h3> */}
        <h3  className={ `${styles.themeName}    ${styles.glitch}`  } data-text="Unleash & Unreal Coming Soon..."> Unleash & Unreal   Coming Soon...</h3>
        {/* <h3 className={styles.themeName}>Unleash & Unreal Coming Soon</h3> */}
       
      </div>
      <div className={styles.RegisterBtnDiv}>
      {/* <button  type="disable" onClick={()=>toast.error("Registrations are closed !")} className={`  ${styles.RegisterBtn} btn text-light mx-4 my-2 p-3 px-4`}>REGISTER NOW</button> */}
        </div>

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

    </div>
  )
}

export default Landing