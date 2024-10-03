import { Category, performers } from "@/entities/performers/model"
import { PerformerCard, PerformerCardSkeleton } from "@/entities/performers/ui/PerformerCard"
import { useEffect } from "react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import 'swiper/css';

import styles from './PerformersList.module.scss'
import { performesReactionModel } from "@/features/performers";
import { LoadingLayout } from "@/shared/ui";

export const PerformersList = () => {
    const { isLoading, list } = performers.listModule.useList()

    useEffect(() => {
        performers.listModule.fetchFx({
            category: Category.Designers
        })
    }, [])

    return (
        <LoadingLayout 
            className={styles.root}
            isLoading={isLoading}
            Skeleton={(
                <PerformerCardSkeleton className={styles.loader} />
            )}
            Content={(
                <Swiper
                    className={styles.swiper}
                    direction={'horizontal'}
                    slidesPerView={'auto'}
                    spaceBetween={18}
                    onSlideChange={
                        (e: SwiperClass) => performesReactionModel.activeIndexUpdated(e.activeIndex)
                    }
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
            )}
        />
    )
}