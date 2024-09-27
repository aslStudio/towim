import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"

import { Button } from "@/shared/ui"

import styles from './AppSlider.module.scss'
import { appsModel } from "@/entities/apps/model"
import { useEffect, useMemo, useState } from "react"
import { AppCellGroup, AppCellGroupSkeleton } from "@/entities/apps/ui"
import { Modal, useModal, Input } from "@/shared/ui"

export const AppSlider = () => {
    const { isLoading, list, fetch } = appsModel.useApps()

    const { isOpen, open, close } = useModal()

    const [ activeIndex, setActiveIndex ] = useState(0)
    const [value, setValue] = useState('')

    const listLength = useMemo(() => {
        return list.length
    }, [list])

    useEffect(() => {
        fetch().then()
    }, [])

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
                            <SwiperSlide>
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
            <Modal 
                title="TOP Mini Apps"
                isOpen={isOpen}
                onClose={close}
            >
                <Input 
                    placeholder="test"
                    value={value} 
                    onInput={setValue} 
                />
            </Modal>
        </>
    )
}