import React from "react"

import { AppCellSkeleton } from "../AppCell"

import styles from './AppCellGroup.module.scss'

export type AppCellGroupSkeletonProps = {
    className?: string
}

export const AppCellGroupSkeleton = React.memo<AppCellGroupSkeletonProps>(({
    className
}) => (
    <div className={`${styles.root} ${className ? className : ''}`}>
        <AppCellSkeleton
            className={styles.cell} 
        />
        <div
            className={styles.divider} 
        />
        <AppCellSkeleton
            className={styles.cell} 
        />
        <div
            className={styles.divider} 
        />
        <AppCellSkeleton
            className={styles.cell} 
        />
        <div
            className={styles.divider} 
        />
    </div>
))