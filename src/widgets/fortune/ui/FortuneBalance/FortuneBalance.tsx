import styles from './FortuneBalance.module.scss'

export const FortuneBalance = () => (
    <div className={styles.root}>
        <p className={styles.title}>Your Tickets</p>
        <p className={styles.tickets}>14 🎟️</p>
        <div className={styles.row}>
            <div className={styles.balance}>0.00 TON</div>
            <div className={styles.balance}>0.00 $MAJOR</div>
        </div>
    </div>
)