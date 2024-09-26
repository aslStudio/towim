import { Button } from "@/shared/ui"

import { performesReactionModel } from "../../model"

import styles from './ReactionButtons.module.scss'

export const ReactionButtons = () => {
    return (
        <div className={styles.root}>
            <Button
                view="surface"
                size={'l'}
                icon={'icon-dislike'}
                onClick={performesReactionModel.dislikeSended}
            >
                Dislike
            </Button>
            <Button
                view="surface"
                size={'l'}
                icon={'icon-like'}
                onClick={performesReactionModel.likeSended}
            >
                Like
            </Button>
            <Button
                view="surface"
                size={'l'}
                icon={'icon-boost'}
                onClick={performesReactionModel.boostSended}
            >
                Boost
            </Button>
        </div>
    )
}