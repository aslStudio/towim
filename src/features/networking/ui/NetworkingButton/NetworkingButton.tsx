import { Button } from "@/shared/ui"

import styles from './NetworkingButton.module.scss'

export const NetworkingButton = () => {
    return (
        <Button
            className={styles.root}
            view="blue"
            size={'xl'}
            onClick={() => {}}
        >
            Networking
        </Button>
    )
}