import React from 'react'
// import './contact.css';
import ContactCss from   "./Contact.module.css";
 
const Contact = () => {
  return (
    <>
    <div className={`p-md-5 p-1 ${ContactCss.contacts}`}>
        <h2 className={`md-3 ${ContactCss.title}`}>Contact Us</h2>
        <div className={ContactCss.container2}>
            <div className={ContactCss.box2}>
                <h2>Lets get in touch!</h2>
                <div className={`${ContactCss.content2} ${ContactCss.social2}`}>
                    <ul className={ContactCss.social2_icon}>
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


            <div className={`${ContactCss.box2} ${ContactCss.address} `}>

                <div className= {`${ContactCss.content2} ${ContactCss.add}`}>
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

            <div className= {`${ContactCss.box2} ${ContactCss.tech} ${ContactCss.query}`}>
                <h2>For Technical Queries</h2>
                <div className={ContactCss.content2}>
                    <div className={ContactCss.contact}>
                        <b className={ContactCss.subheading}>Tejas Kolwankar</b>
                        <p>+91 95271 05923</p>
                    </div>
                    <div className={ContactCss.contact}>
                        <b className={ContactCss.subheading}>Jayesh Deorukhkar</b>
                        <p>+91 95030 88957</p>
                    </div>
                    <div className={ContactCss.contact}>
                        <b className={ContactCss.subheading}>Akshay Hedge</b>
                        <p>+91 77569 44608</p>
                    </div>
                </div>
            </div>
            <div className=  {`${ContactCss.box2} ${ContactCss.other} ${ContactCss.query}`}>
                <h2>For Other Queries</h2>
                <div className={ContactCss.content2}>
                    <div className={ContactCss.contact}>
                        <b  className={ContactCss.subheading}>Kaustubh Gharat</b>

                        <p>+91 77097 46463</p>
                    </div>

                    <div className={ContactCss.contact}>
                        <b  className={ContactCss.subheading}>Divya Sakre</b>
                        <p>+91 96657 52345</p>
                    </div>

                </div>
            </div>
            <div className= {`${ContactCss.box2} ${ContactCss.map} `}>

                <div className={ContactCss.content2}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15054.639927034408!2d72.828734!3d19.38387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd1a4ca919d6a613!2sVidyavardhini%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1661270315076!5m2!1sen!2sin"
                      allowFullScreen=""  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Contact
