import React from 'react'
import styles from "./About.module.css";
// import logo from '../../assets/logo_white_hackthon.png'

function About() {

    return (
        <div className={`p-2 p-md-5 ${styles.AboutBox}`}>
            <div className={styles.AboutBoxTopBar}>
                <span className={styles.reddot}></span>
                <span className={styles.yellowdot}></span>
                <span className={styles.greendot}></span>
            </div>
            <div className={styles.AboutBoxBody}>
                    <span className={styles.type}>
                        VCET Hackathon is a 30 hours Virtual Hackathon organized by Department of Information Technology of
                        "Vidyavardhini's College of Engineering and Technology". By organizing this Hackathon, we are trying to
                        promote a strong Programming and Product Building Culture among students that will help them develop
                        Problem Solving, Critical Thinking and Software Development Skills. It is an opportunity to take on
                        challenging problems that revolve around us all the time and crack them down.

                        Will you get time to eat? Can you ditch your sleep? Do you have passion to build?
                        Find out in this 30 hours long thrilling experience!
                    </span>
            </div>
        </div>
    )
}

export default About;