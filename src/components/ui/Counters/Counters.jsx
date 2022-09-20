import React from "react"
import styles from "./Counters.module.scss"

const counters = {
  minutes: 6000,
  workouts: 20,
  kg: 1000,
}

const Counters = ({ minutes, workouts, kgs }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.counter}>
        <h4 className={styles.title}>Minutes</h4>
        <span className={styles.number}>{minutes}</span>
      </div>
      <div className={styles.counter}>
        <h4 className={styles.title}>Workouts</h4>
        <span className={styles.number}>{workouts}</span>
      </div>
      <div className={styles.counter}>
        <h4 className={styles.title}>Kgs</h4>
        <span className={styles.number}>{kgs}</span>
      </div>
    </div>
  )
}

export default Counters
