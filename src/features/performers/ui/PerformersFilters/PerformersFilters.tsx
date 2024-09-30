import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

import { getCategoryIcon, getCategoryText } from "@/entities/performers/lib";
import { categoriesList, performers } from "@/entities/performers/model";

import { Button } from "@/shared/ui";

import styles from './PerformersFilters.module.scss'

export const PerformersFilters = () => {
    const { activeCategory, categoryUpdated } = performers.categoryModule.useCategory()

    return (
        <Swiper
            className={styles.root}
            direction={'horizontal'}
            slidesPerView={'auto'}
            spaceBetween={8}
        >
            {categoriesList.map(item => (
                <SwiperSlide className={styles.slide}>
                    <Button
                        animatedIcon={getCategoryIcon(item)}
                        view={item === activeCategory ? 'surface' : 'secondary'}
                        size={'m'}
                        isShadow={item === activeCategory}
                        onClick={() => categoryUpdated(item)}
                    >
                        {getCategoryText(item)}
                    </Button>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}