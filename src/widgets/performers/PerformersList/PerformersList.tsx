import { Category, performers } from "@/entities/performers/model"
import { PerformerCard, PerformerCardSkeleton } from "@/entities/performers/ui/PerformerCard"
import { useEffect, useMemo } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

import styles from './PerformersList.module.scss'

export const PerformersList = () => {
    const { isLoading, list } = performers.listModule.useList()

    const classes = useMemo(() => [
        styles.root,
        isLoading ? styles['is-loading'] : styles['is-content']
    ].join(' '), [isLoading])

    useEffect(() => {
        performers.listModule.fetchFx({
            category: Category.Designers
        })
    }, [])

    return (
        <section className={classes}>
            <PerformerCardSkeleton className={styles.loader} />
            <Swiper
                className={styles.swiper}
                direction={'horizontal'}
                slidesPerView={'auto'}
                spaceBetween={18}
            >
                {list.map(item => (
                    <SwiperSlide 
                        key={item.id}
                        className={styles.slide}
                    >
                        <PerformerCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}