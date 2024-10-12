import { Button } from "@/shared/ui"

import styles from './FortuneActions.module.scss'

export const FortuneActions = () => {
    return (
        <div className={styles.root}>
            <Button
                className={styles.button}
                view={'surface'}
                size="l"
                animatedIcon={'ticket'}
                onClick={() => {}}
            >
                Tickets
            </Button>
            <Button
                className={styles.button}
                view={'surface'}
                size="l"
                animatedIcon={'gift'}
                onClick={() => {}}
            >
                Gift
            </Button>
            <Button
                className={styles.button}
                view={'surface'}
                size="l"
                animatedIcon={'withdraw'}
                onClick={() => {}}
            >
                Withdraw
            </Button>
        </div>
    )
}