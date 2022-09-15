import React from 'react'
import styles from './PrizePool.module.css'

export default function PrizePool() {
    return (
        <>
            <div className={styles.mainPrizePoolContainer} id="Prizes">

                <img className={styles.astroImage} src="../src/assets/prizes/PrizePool.png" alt="" />
                <div className={styles.prizeTextDiv}>
                    Prize pool of
                    <div className={styles.cashPrice}>
                    &#x20b9; 60,000
                    </div>
                    along with exciting goodies.
                </div>
            </div>
        </>
    )
} 