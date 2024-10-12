import { FortuneWheel } from '@/features/fortune'

import styles from './Fortune.module.scss'
import { BonusSection, FortuneActions, FortuneBalance } from '@/widgets/fortune'

export const Fortune = () => {
    return (
        <div className={styles.root}>
            <BonusSection />
            <FortuneBalance />
            <FortuneActions />
            <FortuneWheel />
        </div>
    )
}