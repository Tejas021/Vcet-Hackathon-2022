import React from 'react'
import styles from "./About.module.css";
// import logo from '../../assets/logo_white_hackthon.png'

function About() {

    return (
        <div className={styles.AboutBox}>
            <div className={styles.AboutBoxTopBar}>
                <span className={styles.reddot}></span>
                <span className={styles.yellowdot}></span>
                <span className={styles.greendot}></span>
            </div>
            <div className={styles.AboutBoxBody}>
                <div className={styles.main}>
                    <div className={styles.num}>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>11</span>
                        <span>12</span>
                        <span>13 </span>
                    </div>
                    <div className={styles.text}>
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
            </div>
        </div>
    )
}

export default About;