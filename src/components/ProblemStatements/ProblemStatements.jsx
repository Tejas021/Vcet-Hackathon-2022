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
                                <img src="../../assets/react.svg" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/prizes/gold.png" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/react.svg" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/prizes/gold.png" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/react.svg" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/prizes/gold.png" />
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
                                <img src="../../assets/react.svg" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/prizes/gold.png" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/react.svg" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/prizes/gold.png" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/react.svg" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/prizes/gold.png" />
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
                                <img src="../../assets/react.svg" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/prizes/gold.png" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/react.svg" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/prizes/gold.png" />
                            </div>
                        </div>
                    </div>
                    <div className={classnames(styles.flipCard)}>
                        <div className={classnames(styles.flipCardInner)}>
                            <div className={classnames(styles.flipCardCover)}>
                                <img src="../../assets/react.svg" />
                            </div>
                            <div className={classnames(styles.flipCardBack)}>
                                <img src="../../assets/prizes/gold.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProblemStatements