import { Button } from "@/shared/ui"

import styles from './FortuneActions.module.scss'
import { useNavigate } from "react-router-dom"
import { RouterPathes } from "@/shared/lib/types"

export const FortuneActions = () => {
    const navigate = useNavigate()

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
                onClick={() => navigate(RouterPathes.GIFTS)}
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