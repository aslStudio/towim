import { Button } from "@/shared/ui"

import { performesReactionModel } from "../../model"

import styles from './ReactionButtons.module.scss'

export const ReactionButtons = () => {
    return (
        <div className={styles.root}>
            <Button
                view="surface"
                size={'l'}
                animatedIcon={'close'}
                onClick={performesReactionModel.dislikeSended}
            >
                Dislike
            </Button>
            <Button
                view="surface"
                size={'l'}
                animatedIcon={'check'}
                onClick={performesReactionModel.likeSended}
            >
                Like
            </Button>
            <Button
                view="surface"
                size={'l'}
                animatedIcon={'boost'}
                onClick={performesReactionModel.boostSended}
            >
                Boost
            </Button>
        </div>
    )
}