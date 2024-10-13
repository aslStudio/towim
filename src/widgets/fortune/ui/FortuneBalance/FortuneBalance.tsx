import { AnimatedIcon } from '@/shared/ui'
import styles from './FortuneBalance.module.scss'

export const FortuneBalance = () => (
    <div className={styles.root}>
        <p className={styles.title}>Your Tickets</p>
        <div className={styles['title-row']}>
            <p className={styles.tickets}>14</p>
            <AnimatedIcon 
                className={styles.icon}
                name={'ticket'}
                width={40}
                height={40}
            />
        </div>
        <div className={styles.row}>
            <div className={styles.balance}>0.00 TON</div>
            <div className={styles.balance}>0.00 $MAJOR</div>
        </div>
    </div>
)