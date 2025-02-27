import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { LoadingLayout } from "@/shared/ui";
import { Category, mapCategory } from "@/shared/lib/types";

import { PrivateChatCard } from "../PrivateChatCard";

import styles from './PrivateChatSlider.module.scss'

export type PrivateChatSliderProps = {
    className?: string
    data: {
        type: Category,
        url: string
    }[]
    isLoading: boolean
}

export const PrivateChatSlider = React.memo<PrivateChatSliderProps>(({
    className,
    data,
    isLoading
}) => {
    
    return (
        <LoadingLayout 
            className={`${styles.root} ${className}`}
            isLoading={isLoading}
            Skeleton={(
                <PrivateChatCard 
                    className={styles.loader}
                    isLoading={true} 
                />
            )}
            Content={(
                <Swiper 
                    className={styles.swiper}
                    spaceBetween={16}
                >
                    {data.map(item => (
                        <SwiperSlide>
                            <PrivateChatCard 
                                isLoading={false} 
                                description={mapCategory[item.type]}
                                link={item.url}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        />
    )
})