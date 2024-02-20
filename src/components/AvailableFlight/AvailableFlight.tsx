import React from 'react';
import styles from './AvailableFlight.module.css';

interface Props {
    borderTopCurve: boolean;
    borderBottomCurve: boolean;
    borderLine: boolean;
}

const AvailableFlight: React.FC<Props> = ({ borderTopCurve, borderBottomCurve, borderLine }) => {
    return (
        <div className={styles.availableFlight}>
            {
                borderTopCurve && <>
                    <div className={styles.topCurve1}></div>
                    <div className={styles.topCurve2}></div>
                </>
            }
            {
                borderBottomCurve && <>
                    <div className={styles.bottomCurve1}></div>
                    <div className={styles.bottomCurve2}></div>
                </>
            }

            <div className={styles.logo}>
                Emirates
                <img src="" alt="" />
            </div>
            <div className={styles.from}>
                <span className={styles.title}>JFK</span>
                <span className={styles.time}>13:00</span>
            </div>
            <div className={styles.moreInfo}>
                <span className={styles.flightName}>EMIRATES</span>
                <span className={styles.distance}>11H 20M</span>
                <span className={styles.type}>NON-STOP</span>
            </div>
            <div className={styles.to}>
                <span className={styles.title}>BOM</span>
                <span className={styles.time}>14:20</span>
            </div>
            <div className={styles.priceBook}>
                <span className={styles.price}>$1,730</span>
                <button className={styles.bookButton}>Book Now</button>
            </div>

            <div className={styles.destinationSmall}>
                <span className={styles.fromSmall}>
                    <span>JFK</span>
                    <span className={styles.time}>13:00</span>
                </span>
                <span className={styles.toSmall}>
                    <span>BOM</span>
                    <span className={styles.time}>14:20</span>
                </span>
            </div>

            {
                borderLine && <div className={styles.borderLine}></div>
            }

        </div>
    );
}

export default AvailableFlight;
