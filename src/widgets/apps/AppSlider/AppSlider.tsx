import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"

import { Button } from "@/shared/ui"

import styles from './AppSlider.module.scss'
import { appsModel } from "@/entities/apps/model"
import { useEffect, useMemo, useState } from "react"
import { AppCellGroup, AppCellGroupSkeleton } from "@/entities/apps/ui"
import { useModal } from "@/shared/ui"
import { CreateAppModal } from "@/features/apps"

export const AppSlider = () => {
    const { isLoading, list, fetch } = appsModel.useApps()

    const { isOpen, open, close } = useModal()

    const [ activeIndex, setActiveIndex ] = useState(0)

    const listLength = useMemo(() => {
        return list.length
    }, [list])

    useEffect(() => {
        fetch().then()
    }, [fetch])

    return (
        <>
            <article className={styles.root}>
                <div className={styles.header}>
                    <p className={styles.title}>TOP Mini Apps</p>
                    <Button
                        view={'secondary'}
                        size={'s'}
                        onClick={open}
                    >
                        + Add App
                    </Button>
                </div>
                <div 
                    className={`${styles.wrapper} ${isLoading ? styles['is-loading'] : styles['is-content']}`}
                >
                    <AppCellGroupSkeleton 
                        className={styles.loader}
                    />
                    <Swiper
                        className={styles.swiper}
                        slidesPerView={1}
                        onSlideChange={(e: SwiperClass) => setActiveIndex(e.realIndex)}
                    >
                        {list.map(item => (
                            <SwiperSlide className={styles.slide}>
                                <AppCellGroup 
                                    group={item}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={styles.pagination}>
                        {Array(listLength).fill(1).map((_, key) => (
                            <span 
                                key={key} 
                                className={`${styles['pagination-item']} ${key === activeIndex ? styles['is-active'] : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </article>
            {/*<CreateAppModal */}
            {/*    isOpen={isOpen}*/}
            {/*    onClose={close}*/}
            {/*/>*/}
        </>
    )
}