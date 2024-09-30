import React, { useMemo } from "react";

import { ShortViewer } from "../../model";

import styles from './ViewerCard.module.scss'
import { Button, AnimatedIcon } from "@/shared/ui";

export type ViewerCardProps = ShortViewer & {
    className?: string
}

export const ViewerCard = React.memo<ViewerCardProps>(({
    className,
    name,
    bio,
    avatar,
    isVerified,
    isFilledProfile,
}) => {
    const classes = useMemo(() => [
        styles.root,
        className ? className : ''
    ].join(' '), [className])

    return (
        <article className={classes}>
            <div className={styles.wrapper}>
                <div
                    className={styles.avatar}
                >
                    <img 
                        src={avatar} 
                        alt="avatar" 
                    />
                </div>
                <div className={styles.inner}>
                    <div className={styles.title}>
                        <p>{name}</p>
                        {isVerified && isFilledProfile && (
                            <AnimatedIcon
                                name={'verified-brand'}
                                width={24}
                                height={24}
                            />
                        )}
                    </div>
                    {isFilledProfile 
                        ? (
                            <p className={styles.description}>{bio}</p>
                        )
                        : (
                            <Button
                                className={styles['fit-profile-button']}
                                view={'secondary'}
                                size={'xs'}
                                onClick={() => {}}
                            >
                                Fill out your profile
                            </Button>
                        )}
                </div>
            </div>
            <Button
                animatedIcon={'story'}
                size="s"
                view="secondary"
                onClick={() => {}}
            >
                Stories
            </Button>
        </article>
    )
})