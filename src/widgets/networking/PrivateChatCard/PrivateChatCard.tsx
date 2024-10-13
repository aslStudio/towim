import React from "react"
import { Swiper } from "swiper/react"

import { AnimatedIcon, IconBase, LoadingLayout } from "@/shared/ui"

import styles from './PrivateChatCard.module.scss'
import { useTelegram } from "@/shared/lib/hooks/useTelegram"

export type PrivateChatCardProps = {
    className?: string
    isLoading: boolean
    description?: string
    link?: string
}

export const PrivateChatCard = React.memo<PrivateChatCardProps>(({
    className,
    link,
    isLoading,
    description
}) => {
    const { openTelegramLink } = useTelegram()

    return (
        <article 
            className={`${styles.root} ${className ? className : ''}`}
            onClick={() => {
                if (link) {
                    openTelegramLink(link)
                }
            }}
        >
            <div className={styles.row}>
                <AnimatedIcon 
                    className={styles.ton}
                    name={'telegram'}
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