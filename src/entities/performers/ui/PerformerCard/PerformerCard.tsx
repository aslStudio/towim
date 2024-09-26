import React from "react";

import { IconBase } from "@/shared/ui";

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
                    <IconBase 
                        name={'icon-double-star'}
                        width={24}
                        height={24}
                    />
                    <p>{stars}</p>
                </div>
                <div className={styles.likes}>
                    <img 
                        className={styles['likes-bg']}
                        src={theme === 'light' ? images.Performers.bg : images.Performers.bgDark} 
                        alt="bg" 
                    />
                    <IconBase name={'icon-checked'} width={30} height={30} />
                    <p>{likes}</p>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <IconBase 
                        name={theme === 'dark' ? 'icon-verified-light' : 'icon-verified-dark'}
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