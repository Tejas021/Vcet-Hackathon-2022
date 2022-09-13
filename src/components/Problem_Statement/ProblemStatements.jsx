import React from 'react'
import classnames from 'classnames'
import styles from './ProblemStatements.module.css'
function ProblemStatements() {
    return (
        <>
            <div className={classnames(styles.mainProblemStatementsContainer, styles.grid)}>
                <br />
                <div className={styles.heading1}>Problem Statements</div>
                <br />
                <div className={styles.heading3}>Cyber Security</div>
                <div className={styles.probsContainer}>
                    <div className={classnames(styles.flipCard)} data-bs-toggle="modal" data-bs-target="#Cyber_PS1">
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="/problem_statements/Cyber_PS1.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="/problem_statements/CardFlip_Cyber_PS1.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)} data-bs-toggle="modal" data-bs-target="#Cyber_PS2">
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="/problem_statements/Cyber_PS2.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="/problem_statements/CardFlip_Cyber_PS2.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)} data-bs-toggle="modal" data-bs-target="#Cyber_PS3">
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="/problem_statements/Cyber_PS3.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="/problem_statements/CardFlip_Cyber_PS3.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className={styles.heading3}>Artificial Intelligence & Machine Learning</div>
                <div className={styles.probsContainer}>
                    <div className={classnames(styles.flipCard)} data-bs-toggle="modal" data-bs-target="#AIML_PS1">
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="/problem_statements/AIML_PS1.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="/problem_statements/CardFlip_AIMLPS1.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)} data-bs-toggle="modal" data-bs-target="#AIML_PS2">
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="/problem_statements/AIML_PS2.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="/problem_statements/CardFlip_AIMLPS2.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)} data-bs-toggle="modal" data-bs-target="#AIML_PS3">
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="/problem_statements/AIML_PS3.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="/problem_statements/CardFlip_AIMLPS3.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className={styles.heading3}>Web & App Development</div>
                <div className={styles.probsContainer}>
                    <div className={classnames(styles.flipCard)} data-bs-toggle="modal" data-bs-target="#Web_PS1">
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="/problem_statements/Web_PS1.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="/problem_statements/CardFlip_WEB_PS1.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)} data-bs-toggle="modal" data-bs-target="#Web_PS2">
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="/problem_statements/Web_PS2.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="/problem_statements/CardFlip_WEB_PS2.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)} data-bs-toggle="modal" data-bs-target="#Web_PS3">
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="/problem_statements/Web_PS3.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="/problem_statements/CardFlip_WEB_PS3.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade  text-light" id="Cyber_PS1" tabindex="-1" aria-labelledby="Cyber_PS1" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
                        {/* <div class="modal-header ">
                            <h5 class="modal-title " id="Cyber_PS1">Call Tracking for  VoIP</h5>

                        </div> */}
                        <div class="modal-body" >
                            <img src="/problem_statements/CardFlip_Cyber_PS1.jpg" alt="" srcset="" style={{ width: "100%", aspectRatio: "1/1" }} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
            <div class="modal fade  text-light" id="Cyber_PS2" tabindex="-1" aria-labelledby="Cyber_PS2" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
                        {/* <div class="modal-header ">
                            <h5 class="modal-title " id="Cyber_PS2">Call Tracking for  VoIP</h5>

                        </div> */}
                        <div class="modal-body" >
                            <img src="/problem_statements/CardFlip_Cyber_PS2.jpg" alt="" srcset="" style={{ width: "100%", aspectRatio: "1/1" }} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
            <div class="modal fade  text-light" id="Cyber_PS3" tabindex="-1" aria-labelledby="Cyber_PS3" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
                        {/* <div class="modal-header ">
                            <h5 class="modal-title " id="Cyber_PS3">Call Tracking for  VoIP</h5>

                        </div> */}
                        <div class="modal-body" >
                            <img src="/problem_statements/CardFlip_Cyber_PS3.jpg" alt="" srcset="" style={{ width: "100%", aspectRatio: "1/1" }} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
            <div class="modal fade  text-light" id="AIML_PS1" tabindex="-1" aria-labelledby="AIML_PS1" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
                        {/* <div class="modal-header ">
                            <h5 class="modal-title " id="Cyber_PS3">Call Tracking for  VoIP</h5>

                        </div> */}
                        <div class="modal-body" >
                            <img src="/problem_statements/CardFlip_AIMLPS1.jpg" alt="" srcset="" style={{ width: "100%", aspectRatio: "1/1" }} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
            <div class="modal fade  text-light" id="AIML_PS2" tabindex="-1" aria-labelledby="AIML_PS2" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
                        {/* <div class="modal-header ">
                            <h5 class="modal-title " id="Cyber_PS3">Call Tracking for  VoIP</h5>

                        </div> */}
                        <div class="modal-body" >
                            <img src="/problem_statements/CardFlip_AIMLPS2.jpg" alt="" srcset="" style={{ width: "100%", aspectRatio: "1/1" }} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
            <div class="modal fade  text-light" id="AIML_PS3" tabindex="-1" aria-labelledby="AIML_PS3" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
                        {/* <div class="modal-header ">
                            <h5 class="modal-title " id="Cyber_PS3">Call Tracking for  VoIP</h5>

                        </div> */}
                        <div class="modal-body" >
                            <img src="/problem_statements/CardFlip_AIMLPS3.jpg" alt="" srcset="" style={{ width: "100%", aspectRatio: "1/1" }} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
            <div class="modal fade  text-light" id="Web_PS1" tabindex="-1" aria-labelledby="Web_PS1" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
                        {/* <div class="modal-header ">
                            <h5 class="modal-title " id="Cyber_PS3">Call Tracking for  VoIP</h5>

                        </div> */}
                        <div class="modal-body" >
                            <img src="/problem_statements/CardFlip_Web_PS1.jpg" alt="" srcset="" style={{ width: "100%", aspectRatio: "1/1" }} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
            <div class="modal fade  text-light" id="Web_PS2" tabindex="-1" aria-labelledby="Web_PS2" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
                        {/* <div class="modal-header ">
                            <h5 class="modal-title " id="Cyber_PS3">Call Tracking for  VoIP</h5>

                        </div> */}
                        <div class="modal-body" >
                            <img src="/problem_statements/CardFlip_Web_PS2.jpg" alt="" srcset="" style={{ width: "100%", aspectRatio: "1/1" }} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
            <div class="modal fade  text-light" id="Web_PS3" tabindex="-1" aria-labelledby="Web_PS3" aria-hidden="true">
                <div class="modal-dialog " >
                    <div class="modal-content " style={{ color: "#7A2BAA", background: "#180828" }}>
                        {/* <div class="modal-header ">
                            <h5 class="modal-title " id="Cyber_PS3">Call Tracking for  VoIP</h5>

                        </div> */}
                        <div class="modal-body" >
                            <img src="/problem_statements/CardFlip_Web_PS3.jpg" alt="" srcset="" style={{ width: "100%", aspectRatio: "1/1" }} />
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" className={`${styles.bgBlue} btn text-light m-3 me-2 p-2 px-4 `} data-bs-dismiss="modal" >Close</button>

                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProblemStatements