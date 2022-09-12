import React from 'react'
import classnames from 'classnames'
import styles from './ProblemStatements.module.css'
function ProblemStatements() {
    return (
        <>
            <div className={classnames(styles.mainProblemStatementsContainer, styles.grid)}>
                <div className={classnames(styles.flipCard)}>
                    <div className={classnames(styles.flipCardInner)}>
                        <div className={classnames(styles.flipCardFront)}>
                            <img src="../../assets/backgrounds/space.jpg" alt="Avatar" style={{ "width": "300px", "height": "300px" }} />
                        </div>
                        <div className={classnames(styles.flipCardBack)}>
                            <h1>John Doe</h1>
                            <p>Architect and Engineer</p>
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProblemStatements