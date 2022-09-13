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
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/problem_statements/Cyber_PS1.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/problem_statements/CardFlip_Cyber_PS1.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/problem_statements/Cyber_PS2.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/problem_statements/CardFlip_Cyber_PS2.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/problem_statements/Cyber_PS3.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/problem_statements/CardFlip_Cyber_PS3.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className={styles.heading3}>Artificial Intelligence & Machine Learning</div>
                <div className={styles.probsContainer}>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/problem_statements/AIML_PS1.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/problem_statements/CardFlip_AIMLPS1.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/problem_statements/AIML_PS2.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/problem_statements/CardFlip_AIMLPS2.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/problem_statements/AIML_PS3.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/problem_statements/CardFlip_AIMLPS3.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className={styles.heading3}>Web & App Development</div>
                <div className={styles.probsContainer}>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/problem_statements/Web_PS1.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/problem_statements/CardFlip_WEB_PS1.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/problem_statements/Web_PS2.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/problem_statements/CardFlip_WEB_PS2.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/problem_statements/Web_PS3.png" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/problem_statements/CardFlip_WEB_PS3.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProblemStatements