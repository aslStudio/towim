import React, { useMemo } from "react"

import styles from './LoadingLayout.module.scss'

export type LoadingLayoutProps = {
    className?: string
    isLoading: boolean
    Skeleton: React.ReactNode
    Content: React.ReactNode
}

export const LoadingLayout = React.memo<LoadingLayoutProps>(({
    className,
    isLoading,
    Skeleton,
    Content
}) => {
    const classes = useMemo(() => [
        styles.root,
        className ? className : '',
        isLoading ? styles['is-loading'] : styles['is-content']
    ].join(' '), [isLoading, className])

    return (
        <div className={classes}>
            <div className={styles.loader}>
                {Skeleton}
            </div>
            <div className={styles.content}>
                {Content}
            </div>
        </div>
    )
})