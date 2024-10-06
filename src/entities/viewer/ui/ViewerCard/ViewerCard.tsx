import React, { useMemo } from "react";

import { ShortViewer } from "../../model";

import styles from './ViewerCard.module.scss'
import { Button, AnimatedIcon } from "@/shared/ui";

export type ViewerCardProps = ShortViewer & {
    className?: string
    buttonType?: 'story' | 'share'
    onClick?: () => void
}

export const ViewerCard = React.memo<ViewerCardProps>(({
    className,
    name,
    bio,
    avatar,
    buttonType = 'story',
    isVerified,
    isFilledProfile,
    onClick,
}) => {
    const classes = useMemo(() => [
        styles.root,
        className ? className : ''
    ].join(' '), [className])

    return (
        <article className={classes}>
            <div 
                className={styles.wrapper}
                onClick={onClick}
            >
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
            {buttonType === 'story' && (
                <Button
                    animatedIcon={'story'}
                    size="s"
                    view="secondary"
                    onClick={() => {}}
                >
                    Stories
                </Button>
            )}
            {buttonType == 'share' && (
                <Button
                    animatedIcon={'share'}
                    size="s"
                    view="surface"
                    onClick={() => {}}
                >
                    Share
                </Button>
            )}
        </article>
    )
})