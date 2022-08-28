import React from 'react'
// import Styles from   "../components/footer.module.css";
import './footer.css';
import logo from './logo.png' 
const Footer = () => {
  return (
    <>
     <footer className="footer">

<div className="container">
    <div className=" box">
        <div className="content">
            <img src={logo} alt=""/>
        </div>
    </div>

    <div className="box quick_links">
        <h2>Quick Links</h2>
        <div className="content">
            <ul>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Rules & Registration</a>
                </li>
                <li>
                    <a href="">Event Shedule</a>
                </li>
                <li>
                    <a href="">Photo Gallery</a>
                </li>
                <li>
                    <a href="">Questions</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>

            </ul>
        </div>
    </div>


    <div className=" box posts">
        <h2>Recents Posts </h2>
        <div className="content">
            <p>Hackathons help IT companies to find talented Programmers, Software Developers, Designers etc. It also helps the participants to launch successful startups if their products or solutions have business value. So take up the Challenge
                and Code your way to the top! </p>
        </div>
    </div>


    <div className=" box social">
        <h2>Follow Us On</h2>
        <div className="content">

            <ul className="social_icon">
                <li>
                    <a href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/christoffer021/">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/christoffer021/">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/christoffer021/">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>



<div className="  copyright">
    <div className="content">
        Copyright © 2022 All rights reserved by Vidyavardhini's College Of Engineering & Technology
    </div>
</div>

</footer>
    
    </>
  )
}

export default Footer;
