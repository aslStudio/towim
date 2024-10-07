import {useState} from "react";

import {Button} from "@/shared/ui";

import styles from './BotNotificationsButton.module.scss'

export const BotNotificationsButton = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <Button
            className={styles.root}
            size={'m'}
            view={isActive ? 'blue' : 'gray'}
            onClick={() => setIsActive(prevState => !prevState)}
        >
            🔊 ️Bot notifications
        </Button>
    )
}