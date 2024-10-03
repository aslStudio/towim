import { Button } from "@/shared/ui"

import styles from './NetworkingButton.module.scss'
import { useNavigate } from "react-router-dom"

export const NetworkingButton = () => {
    const navigate = useNavigate()

    return (
        <Button
            className={styles.root}
            view="blue"
            size={'xl'}
            onClick={() => {
                navigate('/networking')
            }}
        >
            Networking
        </Button>
    )
}