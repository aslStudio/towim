import React from "react";

import styles from './PerformerCard.module.scss'

export type PerformerCardSkeletonProps = {
    className?: string
}

export const PerformerCardSkeleton = React.memo<PerformerCardSkeletonProps>(({
    className
}) => {
    return (
        <article 
            className={`${styles.root} ${className ? className : ''}`}
        >
            <div 
                className={`${styles.avatar} skeleton`} 
            />
            <div className={styles.info}>
                <p className={`${styles.title} skeleton`}></p>
                <p className={`${styles.description} skeleton`}></p>
            </div>
        </article>
    )
})