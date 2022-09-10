import React, { useState } from 'react'
import styles from "./Navbar.css"
import logo from '../../assets/logo_white_hackthon.png'
import { Link } from 'react-router-dom';

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <nav className={isScrolled ? "navbar scrolled navbar-expand-lg" : "navbar navbar-expand-lg"}>
            <div className="container">
                <img className="logo" src={logo} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li>
                        <li style={{ borderBottom: '1px solid white' }} className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Home</a>
                        </li> */}
                        <li className="nav-item">
                            
                        <Link to={"/"} className="nav-link " aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            
                        <Link to={"/Rules"} className="nav-link " aria-current="page" >Rules</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Association"} className="nav-link " aria-current="page" >Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Info"} className="nav-link " aria-current="page" >About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar