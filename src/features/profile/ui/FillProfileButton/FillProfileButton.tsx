import { Button } from "@/shared/ui";

import styles from './FillProfileButton.module.scss'

export const FillProfileButton = () => (
    <Button
        className={styles.root}
        view="blue"
        size="xl"
        onClick={() => {}}
    >
        Fill out your profile
    </Button>
)