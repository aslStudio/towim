import React from "react"

import { GameCellSkeleton } from '../GameCell'

import styles from './GameCellGroup.module.scss'

export type GameCellGroupSkeletonProps = {
    className?: string
}

export const GameCellGroupSkeleton: React.FC<GameCellGroupSkeletonProps> = ({
    className
}) => (
    <div className={`${styles.root} ${className ? className : ''}`}>
        <GameCellGroupSkeleton 
            className={styles.cell}
        />
        <div
            className={styles.divider} 
        />
        <GameCellGroupSkeleton 
            className={styles.cell}
        />
        <div
            className={styles.divider} 
        />
        <GameCellGroupSkeleton 
            className={styles.cell}
        />
        <div
            className={styles.divider} 
        />
    </div>
)