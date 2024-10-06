import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { FieldWrapper, IconBase, Input, LoadingLayout } from "@/shared/ui"
import { capitalizeFirstLetter } from "@/shared/lib/string"

import { ExpandViewer } from "../../model"

import styles from './ViewerSocialsField.module.scss'

export type ViewerSocialsFieldProps = {
    className?: string
    viewer: ExpandViewer
    isLoading: boolean
    isEditable: boolean
    onInput: (data: ExpandViewer) => void
}

export const ViewerSocialsField = React.memo<ViewerSocialsFieldProps>(({
    className,
    viewer,
    isLoading,
    isEditable,
    onInput,
}) => {
    return (
        <FieldWrapper
            className={className}
            title="Links"
            icon={'boost'}
        >
            <LoadingLayout 
                isLoading={isLoading}
                Content={(
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={16}
                    >
                        {viewer.links.map(item => {
                            if (item.username) {
                                return (
                                    <SwiperSlide className={styles.slide}>
                                        <div>
                                            <p className={styles.title}>
                                                {capitalizeFirstLetter(item.type)}
                                            </p>
                                            <div 
                                                className={`${styles['username-wrapper']} ${isEditable ? styles['is-field'] : styles['is-content']}`}
                                            >
                                                <p className={styles.username}>{item.username}</p>
                                                <Input 
                                                    className={styles['username-field']}
                                                    placeholder="Link to your social"
                                                    value={item.link}
                                                    onInput={newValue => ({
                                                        ...viewer,
                                                        links: viewer.links.map(link => {
                                                            if (link.type === item.type) {
                                                                return {
                                                                    ...link,
                                                                    link: newValue,
                                                                }
                                                            }
        
                                                            return link
                                                        })
                                                    })}
                                                />
                                            </div>
                                        </div>
                                        <IconBase
                                            name={`icon-${item.type}`}
                                            width={62}
                                            height={62}
                                        />
                                    </SwiperSlide>
                                )
                            }
                        })}
                    </Swiper>
                )}
                Skeleton={(
                    <Swiper
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
            />
        </FieldWrapper>
    )
})