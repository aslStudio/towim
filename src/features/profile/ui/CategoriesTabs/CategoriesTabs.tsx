import React, {useCallback} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import {Category, mapCategory} from "@/shared/lib/types";

import styles from './CategoriesTabs.module.scss'
import {ExpandViewer} from "@/entities/viewer";

export type CategoriesTabsProps = {
    viewer: ExpandViewer
    onChange: (v: ExpandViewer) => void
}

export const CategoriesTabs = React.memo<CategoriesTabsProps>(({
    viewer,
    onChange
}) => {
    const onClick = useCallback((category: Category) => {
        if (viewer.categories.includes(category)) {
            return onChange({
                ...viewer,
                categories: viewer.categories.filter(item => item !== category)
            })
        }

        return onChange({
            ...viewer,
            categories: [
                ...viewer.categories,
                category,
            ]
        })
    }, [viewer, onChange])

    return (
        <Swiper
            className={styles.root}
            slidesPerView={'auto'}
            spaceBetween={8}
        >
            {Object.keys(mapCategory).map(item => (
                <SwiperSlide
                    key={item}
                    className={styles.slide}
                >
                    <button
                        className={[
                            styles.button,
                            viewer.categories.includes(Number(item)) ? styles['is-selected'] : ''
                        ].join(' ')}
                        onClick={() => onClick(Number(item))}
                    >
                        {mapCategory[Number(item) as Category]}
                    </button>
                </SwiperSlide>
            ))}
        </Swiper>
    )
})