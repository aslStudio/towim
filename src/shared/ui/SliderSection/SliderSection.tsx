import React, { useEffect, useMemo, useState } from "react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"

import styles from './SliderSection.module.scss'
import { Button } from "../Button"

export type SliderSectionProps = {
    list: React.ReactNode[]
    Skeleton: React.ReactNode

    title: string
    buttonText: string
    isButtonDisabled: boolean
    onButtonClick?: () => void

    isLoading?: boolean
    fetch?: () => Promise<unknown>
}

export const SliderSection = React.memo<SliderSectionProps>(({
    list,
    Skeleton,

    title,
    buttonText,
    isButtonDisabled,
    onButtonClick,

    isLoading,
    fetch,
}) => {
    const [ activeIndex, setActiveIndex ] = useState(0)

    const listLength = useMemo(() => {
        return list.length
    }, [list])

    useEffect(() => {
        fetch?.().then()
    }, [fetch])

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <Button
                    view={'secondary'}
                    size={'s'}
                    isDisabled={isButtonDisabled}
                    onClick={() => onButtonClick?.()}
                >
                    {buttonText}
                </Button>
            </div>
            <div
                className={`${styles.wrapper} ${isLoading ? styles['is-loading'] : styles['is-content']}`}
            >
                <div className={styles.loader}>
                    {Skeleton}
                </div>
                <Swiper
                    className={styles.swiper}
                    slidesPerView={1}
                        onSlideChange={(e: SwiperClass) => setActiveIndex(e.realIndex)}
                >
                    {list.map(item => (
                        <SwiperSlide className={styles.slide}>
                            {item}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {listLength > 1 && (
                    <div className={styles.pagination}>
                        {Array(listLength).fill(1).map((_, key) => (
                            <span 
                                key={key} 
                                className={`${styles['pagination-item']} ${key === activeIndex ? styles['is-active'] : ''}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
})