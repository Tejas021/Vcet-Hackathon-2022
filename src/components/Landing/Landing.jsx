<<<<<<< HEAD
import "./Landing.scss"
import "./Landing.css"

function Landing() {
  const handleMouseMove = (e) => {
    const el = document.getElementById("wrapper");
    const d = el.getBoundingClientRect();
    let x = e.clientX - (d.left + Math.floor(d.width / 2));
    let y = e.clientY - (d.top + Math.floor(d.height / 2));
    // Invert values
    x = x - x * 2;
    y = y - y * 2;
    document.documentElement.style.setProperty("--scale", 1.45);
    document.documentElement.style.setProperty("--x", x / 2 + "px");

    document.documentElement.style.setProperty("--y", y / 2 + "px");
  }

  const handleMouseLeave = () => {
    document.documentElement.style.setProperty("--scale", 1);
    document.documentElement.style.setProperty("--x", 0);
    document.documentElement.style.setProperty("--y", 0);
  };

  return (
    <div className="main">

      <div
        id="wrapper"
        onMouseMove={(e) => { handleMouseMove(e) }}
        onClick={(e) => { handleMouseLeave(e) }}
      >
        <img id="image" />
        <div className="landingContainer" >
            <h1 className="collegeName">Vidyavardhini's College Of Engineering and Technology </h1>
            <p className={`text-center mt-4 presents`}>presents</p>
            <h1 className="mainHeading">VCET HACKATHON</h1>
            <h3 className="themeName">Multiverse of Hacking</h3>
          </div>
        {/* <div className="d-flex flex-column justify-content-center LandingContainer " id="Landing" >
          
        </div> */}
      </div>
      <div className="mobile">

=======
import React from 'react'
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div className={`d-flex flex-column justify-content-center ${styles.LandingContainer}`} id="Landing">
      <div className={styles.landingContainer}> <a className={styles.landingLink} href="https://vcet.edu.in">
      <div className='text-center'> <img src="/logo2.png" style={{height:"100px",marginBottom:"20px",cursor:'pointer'}}/>   </div>
        <h1 className={`${styles.collegeName} text-light`}>Vidyavardhini's College Of Engineering and Technology </h1></a> 

        <p className={`text-center mt-4 ${styles.presents}`}>presents</p>
        <h1 className={styles.mainHeading}>VCET HACKATHON</h1>
        <h3 className={styles.themeName}>Multiverse of Hacking</h3>
       
>>>>>>> 1784c1ee65bd752755272af63e17a5a50514342a
      </div>
      <div className={styles.RegisterBtnDiv}>
        <Link to="/register" className={`${styles.linktoreg}`}><button className={`  ${styles.RegisterBtn} btn text-light mx-4 my-2 p-3 px-4`}>REGISTER NOW</button></Link>
        </div>
    </div>
  );
}

export default Landing