// import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function header() {
    return (
        <div className={styles.heading}>
            <p className={styles.ptext}>
                <strong>TechTack Technologies LLC</strong>
                | united with the people of Ukraine and the international community in condemning these horrific acts of violence against a sovereign nation and its people. We continue to monitor the events in Europe surrounding the unlawful Russian military invasion of Ukraine.
            </p>
        </div>
    )
}