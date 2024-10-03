import React from "react"

import { IconBase, LoadingLayout } from "@/shared/ui"

import styles from './PrivateChatCard.module.scss'

export type PrivateChatCardProps = {
    className?: string
    isLoading: boolean
    description: string
}

export const PrivateChatCard = React.memo<PrivateChatCardProps>(({
    className,
    isLoading,
    description
}) => {
    return (
        <article className={`${styles.root} ${className ? className : ''}`}>
            <div className={styles.row}>
                <IconBase 
                    className={styles.ton}
                    name={'icon-ton'} 
                    width={40} 
                    height={40}
                />
                <div>
                    <p className={styles.title}>Private chat</p>
                    <LoadingLayout 
                        isLoading={isLoading}
                        Content={(
                            <p className={styles.description}>{description}</p>
                        )}
                        Skeleton={(
                            <div className={`${styles.description} skeleton`} />
                        )}
                    />
                </div>
            </div>
            <IconBase 
                name={'icon-chevron'}
                width={16}
                height={16}
            />
        </article>
    )
})