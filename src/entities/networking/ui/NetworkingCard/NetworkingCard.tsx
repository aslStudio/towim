import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

import { LoadingLayout } from '@/shared/ui';

import { NetworkingUserItem } from '../../model'

import { NetworkingUser, NetworkingUserSkeleton } from '../NetworkingUser'

import styles from './NetworkingCard.module.scss'

export type NetworkingCardProps = {
    className?: string
    list: NetworkingUserItem[]
    title: string
    isLoading: boolean
}

export const NetworkingCard = React.memo<NetworkingCardProps>(({
    className,
    list,
    title,
    isLoading,
}) => {
    return (
        <article className={`${styles.root} ${className ? className : ''}`}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <p 
                    className={`${styles.title} ${isLoading ? styles['is-loading'] : ''}`}
                >
                    {list.length}
                </p>
            </div>
            <LoadingLayout 
                className={styles.wrapper}
                isLoading={isLoading}
                Content={(
                    <Swiper
                        className={styles.swiper}
                        direction={'horizontal'}
                        slidesPerView={4}
                    >
                        {list.map(item => (
                            <SwiperSlide
                                key={item.id}
                                className={styles.slide}
                            >
                                <NetworkingUser {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
                Skeleton={(
                    <Swiper
                        className={styles.swiper}
                        direction={'horizontal'}
                        slidesPerView={4}
                    >
                        {list.map(item => (
                            <SwiperSlide
                                key={item.id}
                            >
                                <NetworkingUserSkeleton />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            />
        </article>
    )
})