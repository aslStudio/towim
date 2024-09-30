import { Button } from "@/shared/ui"

import { performesReactionModel } from "../../model"

import styles from './ReactionButtons.module.scss'
import {useState} from "react";

export const ReactionButtons = () => {
    const [activeButtons, setActiveButtons] = useState<('dislike' | 'like' | 'boost')[]>([])

    function onClick(cb: () => void, type: 'boost' | 'like' | 'dislike') {
        cb()
        setActiveButtons([type])
        const timeout = setTimeout(() => {
            setActiveButtons([])
            clearTimeout(timeout)
        }, 1000)
    }

    return (
        <div className={styles.root}>
            <Button
                isDisabled={activeButtons.length > 0 && !activeButtons.includes('dislike')}
                view="surface"
                size={'l'}
                animatedIcon={'close'}
                onClick={() => onClick(performesReactionModel.dislikeSended, 'dislike')}
            >
                Dislike
            </Button>
            <Button
                isDisabled={activeButtons.length > 0 && !activeButtons.includes('like')}
                view="surface"
                size={'l'}
                animatedIcon={'check'}
                onClick={() => onClick(performesReactionModel.likeSended, 'like')}
            >
                Like
            </Button>
            <Button
                isDisabled={activeButtons.length > 0 && !activeButtons.includes('boost')}
                view="surface"
                size={'l'}
                animatedIcon={'boost'}
                onClick={() => onClick(performesReactionModel.boostSended, 'boost')}
            >
                Boost
            </Button>
        </div>
    )
}