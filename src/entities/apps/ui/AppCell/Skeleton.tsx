import React from "react"
import styles from './App.module.scss'

export type AppCellSkeletonProps = {
    className?: string
}

export const AppCellSkeleton = React.memo<AppCellSkeletonProps>(({
    className
}) => {
    return (
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
})