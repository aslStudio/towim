import { useTelegram } from '@/shared/lib/hooks/useTelegram'
import styles from './BonusSection.module.scss'

export const BonusSection = () => {
    const { shareLink } = useTelegram()

    return (
        <div 
            className={styles.root}
            onClick={() => shareLink('https://tow.im/fortune')}
        >
            <span>BONUS</span> X2 tickets for inviting friends
        </div>
    )
}