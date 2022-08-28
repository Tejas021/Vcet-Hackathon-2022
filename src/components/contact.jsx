import React from 'react'
import './contact.css';
const Contact = () => {
  return (
    <>
    <div className="contacts">
        <h2 className="title">Contact Us</h2>
        <div className="container2">
            <div className="box2">
                <h2>Lets get in touch!</h2>
                <div className="content2 social2">
                    <ul className="social2_icon">
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


            <div className="box2">

                <div className="content2 add">
                    <ul>
                        <li>
                            <ion-icon name="location-outline"></ion-icon>
                            <span>K. T. Marg, Dist-Palghar, Shastri Nagar
                            Vasai West, Maharashtra - 401202 </span>

                        </li>
                        <li>
                            <ion-icon name="call-outline"></ion-icon>
                            <span>  <a href="">0250-2338234</a></span>

                        </li>
                        <li>
                            <ion-icon name="mail-outline"></ion-icon>
                            <span>   <a href=""> vcet.hackathon@vcet.edu.in</a></span>

                        </li>
                        <li>
                            <ion-icon name="globe-outline"></ion-icon>
                            <span><a href="">www.vcet.edu.in</a></span>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="box2 tech query">
                <h2>For Technical Queries</h2>
                <div className="content2">
                    <div className="contact">
                        <b>Tejas Kolwankar</b>
                        <p>+91 95271 05923</p>
                    </div>
                    <div className="contact">
                        <b>Jayesh Deorukhkar</b>
                        <p>+91 95030 88957</p>
                    </div>
                    <div className="contact">
                        <b>Akshay Hedge</b>
                        <p>+91 77569 44608</p>
                    </div>
                </div>
            </div>
            <div className="box2 other query">
                <h2>For Other Queries</h2>
                <div className="content2">
                    <div className="contact">
                        <b>Kaustubh Gharat</b>

                        <p>+91 77097 46463</p>
                    </div>

                    <div className="contact">
                        <b>Divya Sakre</b>
                        <p>+91 96657 52345</p>
                    </div>

                </div>
            </div>
            <div className="box2 map">

                <div className="content2">
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
