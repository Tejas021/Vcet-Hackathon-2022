import React from 'react'
import "./sponsor.css"
// import Giber from "../sponsor/Giber.jpg"
function Sponsor() {
    return (

        <div className="main-container" id="Sponsors">

            <h1 className='text-center text-light mb-3 mb-md-5'>Our Previous Year Sponsors</h1>
            <div className="spons-cont grid" id="spons-cont">
                <div className="t1 h2">Title Sponsor</div>
                <a href="https://deardigital.be/" className="title-spons sponsor-card" target="_blank">
                    <img src="/sponsors/dear-digital.png" alt="" />
                </a>
                <div className="pb1 h2">Powered by</div>
                <a href="/" className="pb-spons-1 sponsor-card" target="_blank">
                    <img src="/sponsors/Napsums.png" alt="" />
                </a>
                <div className="pb2 h2">Powered by</div>
                <a href="/" className="pb-spons-2 sponsor-card" target="_blank">
                    <img src="/sponsors/G_Systems.png" alt="" />
                </a>
                <div className="cpb1 cpb h2">Co-powered by</div>
                <a href="/" className="cpb-spons-1 sponsor-card" target="_blank">
                    <img src="/sponsors/software_ag.png" alt="" />
                </a>
                <div className="cpb2 cpb h2">Co-powered by</div>
                <a href="/" className="cpb-spons-2 sponsor-card" target="_blank">
                    <img src="/sponsors/Giber.jpg" alt="" />
                </a>
                <div className="aws h2">Associated with</div>
                <div className="ep h3">Coding Partner</div>
                <a href="/" className="eps sponsor-card" target="_blank">
                    <img src="/sponsors/gfg_2021.png" alt="" />
                </a>
                <div className="sp h3">Streaming Partner</div>
                <a href="/" className="sps sponsor-card" target="_blank">
                    <img src="/sponsors/StreamYard - Horz (2)2021.png" alt="" />
                </a>
                <div className="cp h3">Certificate Partner</div>
                <a href="/" className="cps sponsor-card" target="_blank">
                    <img src="/sponsors/GMC_logo2021.png" alt="" />
                </a>
                <div className="cnp h3">Community Partner</div>
                <a href="/" className="cnps sponsor-card" target="_blank">
                    <img src="/sponsors/jetbrains-variant-42021.png" alt="" />
                </a>
                <div className="tp h3">Technology Partner</div>
                <a href="/" className="tps sponsor-card" target="_blank">
                    <img src="/sponsors/taskade-logo.png" alt="" />
                </a>
                <div className="codep h3">Broadcasting Partner</div>
                <a href="/" className="codeps sponsor-card" target="_blank">
                    <img src="/sponsors/cafe_cine_fx.png" alt="" />
                </a>
                {/* <div className="kp h3">Knowledge Partner</div>
                <a href="/" className="kps sponsor-card" target="_blank">
                    <img src="/sponsors/upcoming_engineer_2021.png" alt="" />
                </a> */}
                <div className="current_mp h3">Media Partner</div>
                <a href="/" className="current_mps sponsor-card" target="_blank">
                    <img src="/sponsors/lokmat.png" alt="" />
                </a>

            </div>
            <br /><br /><br /><br />
            <h1 className='text-center text-light mb-3 mb-md-5'>Previous Sponsors</h1>
            <div className="spons-cont grid" id="spons-cont">
                <div className="t1 h2">Title Sponsor</div>
                <a href="https://deardigital.be/" className="title-spons sponsor-card" target="_blank">
                    <img src="/sponsors/dear-digital.png" alt="" />
                </a>
                <div className="pb1 h2">Powered by</div>
                <a href="https://internetivo.com/" className="pb-spons-1 sponsor-card" target="_blank">
                    <img src="/sponsors/internetivo.png" alt="" />
                </a>
                <div className="cpb old-cpb h2">Co-powered by</div>
                <a href="/" className="cpb-spons old-cpb-spons sponsor-card" target="_blank">
                    <img src="/sponsors/un_bank_2021.JPG" alt="" />
                </a>
                <div className="aws h2">Associated with</div>
                <div className="ep h3">Education Partner</div>
                <a href="/" className="eps sponsor-card" target="_blank">
                    <img src="/sponsors/gfg_2021.png" alt="" />
                </a>
                <div className="sp h3">Streaming Partner</div>
                <a href="/" className="sps sponsor-card" target="_blank">
                    <img src="/sponsors/StreamYard - Horz (2)2021.png" alt="" />
                </a>
                <div className="cp h3">Certificate Partner</div>
                <a href="/" className="cps sponsor-card" target="_blank">
                    <img src="/sponsors/GMC_logo2021.png" alt="" />
                </a>
                <div className="cnp h3">Community Partner</div>
                <a href="/" className="cnps sponsor-card" target="_blank">
                    <img src="/sponsors/jetbrains-variant-42021.png" alt="" />
                </a>
                <div className="tp h3">Technology Partner</div>
                <a href="/" className="tps sponsor-card" target="_blank">
                    <img src="/sponsors/Kraftpixel.png" alt="" />
                </a>
                <div className="codep h3">Coding Partner</div>
                <a href="/" className="codeps sponsor-card" target="_blank">
                    <img src="/sponsors/coding-blocks.png" alt="" />
                </a>
                <div className="kp h3">Knowledge Partner</div>
                <a href="/" className="kps sponsor-card" target="_blank">
                    <img src="/sponsors/upcoming_engineer_2021.png" alt="" />
                </a>
                <div className="mp h3">Media Partner</div>
                <a href="/" className="mps sponsor-card" target="_blank">
                    <img src="/sponsors/loksatta.png" alt="" />
                </a>

            </div>
        </div>
    )
}

export default Sponsor