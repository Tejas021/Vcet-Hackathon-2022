import React from 'react'
import FooterCss from   "./Footer.module.css";
// import './footer.css';
import logo from './logo.png' 
const Footer = () => {
  return (
    <>
     <footer className={FooterCss.footer}>

<div className={FooterCss.container}>
    <div className={FooterCss.box}>
        <div className={FooterCss.content}>
            <img src={logo} alt=""/>
        </div>
    </div>

    <div className= {`${FooterCss.box} ${FooterCss.quick_links}`}>
        <h2>Quick Links</h2>
        <div className={FooterCss.content}>
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


    <div className={`${FooterCss.box} ${FooterCss.posts}`}>
        <h2>Recents Posts </h2>
        <div className={FooterCss.content}>
            <p>Hackathons help IT companies to find talented Programmers, Software Developers, Designers etc. It also helps the participants to launch successful startups if their products or solutions have business value. So take up the Challenge
                and Code your way to the top! </p>
        </div>
    </div>


    <div className={`${FooterCss.box} ${FooterCss.social}`}>
        <h2>Follow Us On</h2>
        <div className={FooterCss.content}>

            <ul className={FooterCss.social_icon}>
                <li>
                    <a href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>





</footer>
<div className={FooterCss.copyright}>
<div className={FooterCss.content}>
    Copyright © 2022 All rights reserved by Vidyavardhini's College Of Engineering & Technology
</div>
</div>
    </>
  )
}

export default Footer;
