import React from "react";

import { type Founder } from '../../model'

import styles from './PerformerCard.module.scss'

export type PerformerCardProps = Founder & {
    className?: string
}

export const PerformerCard = React.memo<PerformerCardProps>(({
    className,
    avatar,
    stars,
    likes,
    name,
    bio,
    category,
}) => {
    return (
        <article className={styles.root}>
            <div className={styles.avatar}>
                <img src={avatar} alt={'avatar'}/>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>

                </div>
            </div>
        </article>
    )
})