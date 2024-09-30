import React from "react";

import { AnimatedIcon } from "@/shared/ui";

import { type Founder } from '../../model'

import styles from './PerformerCard.module.scss'
import { useTelegram } from "@/shared/lib/hooks/useTelegram";
import { getCategoryText } from "../../lib";
import { images } from "@/shared/assets/images";

export type PerformerCardProps = Founder & {
    className?: string
}

export const PerformerCard = React.memo<PerformerCardProps>(({
    className,
    avatar,
    stars,
    likes,
    name,
    bio,
    category,
}) => {
    const { theme } = useTelegram()

    return (
        <article 
            className={`${styles.root} ${className ? className : ''}`}
        >
            <div className={styles.avatar}>
                <img 
                    className={styles['avatar-img']}
                    src={avatar} 
                    alt={'avatar'}
                />
                <div className={styles.stars}>
                    <AnimatedIcon
                        name={'double-star'}
                        width={24}
                        height={24}
                    />
                    <p>{stars}</p>
                </div>
                <div className={styles.likes}>
                    <BackgroundShape 
                        className={styles['likes-bg']}
                    />
                    <AnimatedIcon name={'check'} width={30} height={30} />
                    <p>{likes}</p>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <AnimatedIcon
                        name={'verified-brand'}
                        width={24}
                        height={24}
                    />
                    <p>{name}</p>
                    <span>{getCategoryText(category)}</span>
                </div>
                <p className={styles.description}>{bio}</p>
            </div>
        </article>
    )
})

const BackgroundShape = React.memo<{
    className?: string
}>(({ className }) => {
    return (
        <svg 
            className={className}
            width="52" 
            height="50" 
            viewBox="0 0 52 50" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clip-path="url(#clip0_22_2494)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.7446 36.1695C49.0174 31.9541 50.0672 26.9955 49.47 21.8406C47.9446 8.67379 36.2521 -0.788663 23.354 0.705586C10.4559 2.19984 1.23656 14.0849 2.76194 27.2517C4.28732 40.4185 15.9798 49.8809 28.8779 48.3867C31.2947 48.1067 33.5823 47.4619 35.6942 46.5122C37.1266 47.3908 38.8417 47.8131 40.626 47.6064C44.9253 47.1083 47.9984 43.1466 47.49 38.7577C47.3828 37.8326 47.125 36.9623 46.7446 36.1695Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_22_2494">
                <rect width="52" height="50" fill="white"/>
            </clipPath>
            </defs>
        </svg>
    )
})