import React, { useState } from 'react'
import styles from "./Navbar.css"
import logo from '../../assets/logo_white_hackthon.png'

function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isActive,setIsActive] = useState('home')
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isActive);
    return (
        <nav className={isScrolled ? "navbar scrolled navbar-expand-lg" : "navbar navbar-expand-lg"}>
            <div className="container">
                <img className="logo" src={logo} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item" onClick={()=>setIsActive("home")}>
                            <a className="nav-link" style={(isActive==="home")?{color:'white'}:{}} aria-current="page" href="#Home">Home</a>
                        </li>
                        <li className="nav-item" onClick={()=>setIsActive("about")}>
                            <a className="nav-link" style={(isActive==="about")?{color:'white'}:{}} aria-current="page" href="#About">About</a>
                        </li>
                        <li className="nav-item" onClick={()=>setIsActive("prizes")}>
                            <a className="nav-link" style={(isActive==="prizes")?{color:'white'}:{}} aria-current="page" href="#Prizes">Prizes</a>
                        </li>
                        <li className="nav-item" onClick={()=>setIsActive("sponsors")}>
                            <a className="nav-link" style={(isActive==="sponsors")?{color:'white'}:{}} aria-current="page" href="#Sponsors">Sponsors</a>
                        </li>
                        <li className="nav-item" onClick={()=>setIsActive("guidelines")}>
                            <a className="nav-link" style={(isActive==="guidelines")?{color:'white'}:{}} aria-current="page" href="#Guidelines">Guidelines</a>
                        </li>
                        <li className="nav-item" onClick={()=>setIsActive("gallery")}>
                            <a className="nav-link" style={(isActive==="gallery")?{color:'white'}:{}} aria-current="page" href="#Gallery">Gallery</a>
                        </li>
                        <li className="nav-item" onClick={()=>setIsActive("faq")}>
                            <a className="nav-link" style={(isActive==="faq")?{color:'white'}:{}} aria-current="page" href="#FAQ">FAQ</a>
                        </li>
                        <li className="nav-item" onClick={()=>setIsActive("contacts")}>
                            <a className="nav-link" style={(isActive==="contacts")?{color:'white'}:{}} aria-current="page" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar