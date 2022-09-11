import React from 'react'
import "./prizes.css"
import gold from "../../assets/prizes/gold.png"
import copper from "../../assets/prizes/copper.png"
import silver from "../../assets/prizes/silver.png"

const Prizes = () => {
    return (
        <div className="prizes-bg" id="Prizes">
            <h1 class="prize-text">PRIZES</h1>
            <div className="prize-row">
                <div className='prize-box'>
                    <img className="trophy" style={{height:'290px',width:'190px'}} src={gold} alt="" />
                    <h3 className='prize-position'>First Prize</h3>
                    <h4 className='prize-amount'>250000</h4>
                </div>
                <div className='prize-box'>
                    <img className="trophy" src={silver} alt="" />
                    <h3 className='prize-position'>First Prize</h3>
                    <h4 className='prize-amount'>250000</h4>
                </div>
            </div>
            <div className="prize-row">
                <div className='prize-box'>
                    <img className="trophy" src={copper} alt="" />
                    <h3 className='prize-position'>First Prize</h3>
                    <h4 className='prize-amount'>250000</h4>
                </div>
                <div className='prize-box'>
                    <img className="trophy" src={copper} alt="" />
                    <h3 className='prize-position'>First Prize</h3>
                    <h4 className='prize-amount'>250000</h4>
                </div>
                <div className='prize-box'>
                    <img className="trophy" src={copper} alt="" />
                    <h3 className='prize-position'>First Prize</h3>
                    <h4 className='prize-amount'>250000</h4>
                </div>
            </div>
        </div>
    )
}

export default Prizes