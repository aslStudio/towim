import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { FieldWrapper, Input, LoadingLayout } from "@/shared/ui"

import { ExpandViewer } from "../../model"

import styles from './ViewerNFTField.module.scss'
import {useKeyboardOffset} from "@/shared/lib/providers";

export type ViewerNFTFieldProps = {
    className?: string
    viewer: ExpandViewer
    isLoading: boolean
    isEditable?: boolean
    onInput?: (data: ExpandViewer) => void
}

export const ViewerNFTField = React.memo<ViewerNFTFieldProps>(({
    className,
    viewer,
    isLoading,
    isEditable,
    onInput,
}) => {
    const { setIsOffset } = useKeyboardOffset()

    return (
        <FieldWrapper
            className={className}
            title="NFT"
            icon={'image'}
        >
            <div className={[
                styles.wrapper,
                isEditable ? styles['is-field'] : styles['is-static'],
            ].join(' ')}>
                <Input 
                    className={styles.field}
                    placeholder="Send the TON address to add the NFT"
                    value={viewer.nftLink}
                    onInput={nftLink => onInput?.({
                        ...viewer,
                        nftLink
                    })}
                    onFocus={() => setIsOffset(true)}
                    onBlur={() => setIsOffset(false)}
                />
                <LoadingLayout
                    className={styles.static}
                    isLoading={isLoading}
                    Skeleton={(
                        <Swiper
                            className={styles.swiper}
                            slidesPerView={'auto'}
                            spaceBetween={16}
                        >
                            {Array(4).fill(1).map(() => (
                                <SwiperSlide 
                                    className={`${styles.slide} skeleton`}
                                />
                            ))}
                        </Swiper>
                    )}
                    Content={(
                        <Swiper
                            className={styles.swiper}
                            slidesPerView={'auto'}
                            spaceBetween={16}
                        >
                            {viewer.nfts.map(item => (
                                <SwiperSlide 
                                    className={styles.slide}
                                >
                                    <img
                                        className={styles.image}
                                        src={item}
                                        alt="nft"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                />
            </div>
        </FieldWrapper>
    )
})