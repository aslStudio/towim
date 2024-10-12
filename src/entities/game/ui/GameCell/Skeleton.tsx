import React from "react"

import styles from './GameCell.module.scss'

export type GameCellSkeletonProps = {
    className?: string
}

export const GameCellSkeleton: React.FC<GameCellSkeletonProps> = ({
    className
}) => (
    <div className={`${styles.root} ${className ? className : ''}`}>
        <div className={styles.wrapper}>
            <div className={`${styles.avatar} skeleton`} />
            <div className={styles.info}>
                <div className={`${styles.name} skeleton`} />
                <div className={`${styles.description} skeleton`} />
            </div>
        </div>
    </div>
)