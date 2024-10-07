import {Swiper, SwiperSlide} from "swiper/react";

import {Button} from "@/shared/ui";

import styles from './UpgradeTabs.module.scss'

export const UpgradeTabs = () => {
    const data = [
        {
            text: '⚡️ Upgrade rank',
            onClick: () => {}
        },
        {
            text: '⭐️ Get a VIP status',
            onClick: () => {}
        },
        {
            text: '👔 Get a company status',
            onClick: () => {}
        }
    ]

    return (
        <Swiper
            className={styles.root}
            slidesPerView={'auto'}
            spaceBetween={4}
        >
            {data.map(item => (
                <SwiperSlide
                    key={item.text}
                    className={styles.slide}
                >
                    <Button
                        view={'blue'}
                        size={'xxs'}
                        onClick={item.onClick}
                    >
                        {item.text}
                    </Button>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}