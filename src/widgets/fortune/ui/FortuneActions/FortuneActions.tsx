import { Button } from "@/shared/ui"

import styles from './FortuneActions.module.scss'

export const FortuneActions = () => {
    return (
        <div className={styles.root}>
            <Button
                className={styles.button}
                view={'surface'}
                size="l"
                onClick={() => {}}
            >
                🎟️ Tickets
            </Button>
            <Button
                className={styles.button}
                view={'surface'}
                size="l"
                onClick={() => {}}
            >
                ⬆️ Withdraw
            </Button>
            <Button
                className={styles.button}
                view={'surface'}
                size="l"
                onClick={() => {}}
            >
                🎁️ Gift
            </Button>
        </div>
    )
}