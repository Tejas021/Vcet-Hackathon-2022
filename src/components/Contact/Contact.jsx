import React from 'react'
// import './contact.css';
import ContactCss from "./Contact.module.css";

const Contact = () => {
    return (
        <>
            <div className={`${ContactCss.section}  ${ContactCss.contacts}`} id="Contact">
                <h1 className={`mb-2 mb-md-5 ${ContactCss.title}`}>Contact Us</h1>
                <div className={ContactCss.container2}>
                    <div className={ContactCss.box2}>
                        <h2>Lets get in touch!</h2>
                        <div className={`${ContactCss.content2} ${ContactCss.social2}`}>
                            <ul className={ContactCss.social2_icon}>
                                <li>
                                    <a href="https://www.facebook.com/vcet.hackathon" target="_blank">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/hackathon_vcet/" target="_blank">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/VcetHackathon" target="_blank">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/vcet-hackathon/" target="_blank">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className={`${ContactCss.box2} ${ContactCss.address} `}>

                        <div className={`${ContactCss.content2} ${ContactCss.add}`}>
                            <ul>
                                <li>
                                    
                                    <ion-icon name="location-outline"></ion-icon>
                                    <span> <a href=""> K. T. Marg, Dist-Palghar, Shastri Nagar
                                        Vasai West, Maharashtra - 401202  </a></span>

                                </li>
                                <li>
                                    <ion-icon name="call-outline"></ion-icon>
                                    <span><a href="">0250-2338234</a></span>
                                </li>
                                <li>
                                   
                                    <ion-icon name="mail-outline"></ion-icon>
                                        <span><a href="mailto:vcet.hackathon@vcet.edu.in" target="_blank">vcet.hackathon@vcet.edu.in</a></span>
                                    
                                </li>
                                <li>
                                    <ion-icon name="globe-outline"></ion-icon>
                                    <span><a href="https://vcet.edu.in/" target="_blank">www.vcet.edu.in</a></span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className={`${ContactCss.box2} ${ContactCss.tech} ${ContactCss.query}`}>
                        <h2>For Technical Queries</h2>
                        <div className={ContactCss.content2}>
                            <div className={ContactCss.contact}>
                                <b className={ContactCss.subheading}>Tejas Kolwankar</b>
                                <p>+91 95271 05923</p>
                            </div>
                            <div className={ContactCss.contact}>
                                <b className={ContactCss.subheading}>Aditya Trivedi</b>
                                <p>+91 97649 35361</p>
                            </div>
                            <div className={ContactCss.contact}>
                                <b className={ContactCss.subheading}>Raj Srivastav</b>
                                <p>+91 84218 43544</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${ContactCss.box2} ${ContactCss.other} ${ContactCss.query}`}>
                        <h2>For Other Queries</h2>
                        <div className={ContactCss.content2}>
                            <div className={ContactCss.contact}>
                                <b className={ContactCss.subheading}>Siddhi Kolwankar</b>

                                <p>+91 89996 68182</p>
                            </div>

                            <div className={ContactCss.contact}>
                                <b className={ContactCss.subheading}>Shreya Parchurkar</b>
                                <p>+91 95943 99798</p>
                            </div>

                        </div>
                    </div>
                    <div className={`${ContactCss.box2} ${ContactCss.map} `}>

                        <div className={ContactCss.content2}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15054.639927034408!2d72.828734!3d19.38387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd1a4ca919d6a613!2sVidyavardhini%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1661270315076!5m2!1sen!2sin"
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
