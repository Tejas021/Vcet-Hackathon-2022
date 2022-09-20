import Prize from "../../assets/prizes/prize.png"
import winner from "../../assets/prizes/winner.png"
import second from "../../assets/prizes/secondimg.png"
import bronze from "../../assets/prizes/bronze1.png"
import "./PP.css"

function PP() {
    return (
        <>
            <div className="pp-container">
                <div className="pp-c1">

                    <img src={Prize} alt="" className="pp-img" />
                </div>
                <div className="pp-c2">
                    <p className="pp-heading">MULTIVERSE OF HACKING</p>
                    <p className="pp-pool">PRIZE POOL</p>
                    <p className="pp-amount">&#x20b9; 60,000</p>
                    <p className="pp-date">HACK IT ON 6TH & 8TH OCT</p>

                </div>

            </div>

            <div className="pm">
                <div className="first-pm">
                    <img src={winner} alt="" className="first-pm-img" />
                    <div className="first-pm-text">
                        <span className="first-pm-prize"> 1<span className="span-1">st</span> prize </span> <br />
                        <span className="first-pm-amount">25,000</span>

                    </div>
                </div>

                <div className="other-pm">
                    <div className="second-pm">
                        <img src={second} alt="" className="other-pm-img" />
                        <div className="second-pm-text">
                            <span className="second-pm-prize"> 2<span className="span-2">nd</span> prize </span> <br />
                            <span className="second-pm-amount">15,000</span>

                        </div>
                    </div>
                    <div className="remaining-pm">
                        <div className="third-pm-top">

                            <div className="third-pm">
                                <img src={bronze} alt="" className="third-pm-img" />
                                <div className="third-pm-text">
                                    <span className="third-pm-prize"> 3<span className="span-3"  >rd</span> prize </span> <br />
                                    <span className="third-pm-amount">5,000</span>

                                </div>
                            </div>
                            <div className="third-pm">
                                <img src={bronze} alt="" className="third-pm-img" />
                                <div className="third-pm-text">
                                    <span className="third-pm-prize"> 4<span className="span-3"  >th</span> prize </span> <br />
                                    <span className="third-pm-amount">5,000</span>

                                </div>
                            </div>
                        </div>
                        <div className="third-pm-bottom">

                            <div className="third-pm">
                                <img src={bronze} alt="" className="third-pm-img" />
                                <div className="third-pm-text">
                                    <span className="third-pm-prize"> 5<span className="span-3" >th</span> prize </span> <br />
                                    <span className="third-pm-amount">5,000</span>

                                </div>
                            </div>
                            <div className="third-pm">
                                <img src={bronze} alt="" className="third-pm-img" />
                                <div className="third-pm-text">
                                    <span className="third-pm-prize"> 6<span className="span-3"  >th</span> prize </span> <br />
                                    <span className="third-pm-amount">5,000</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default PP