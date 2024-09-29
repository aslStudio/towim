import { Button } from "@/shared/ui";

import styles from './PublishProfileButton.module.scss'

export const PublishProfileButton = () => (
    <Button
        className={styles.root}
        view="blue"
        size="xl"
        onClick={() => {}}
    >
        Publish a profile (stars) 50 
    </Button>
)