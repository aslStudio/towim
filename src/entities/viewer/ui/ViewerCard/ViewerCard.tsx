import React, { useCallback, useMemo } from "react";

import { ShortViewer } from "../../model";

import styles from './ViewerCard.module.scss'
import { Button, AnimatedIcon } from "@/shared/ui";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";

export type ViewerCardProps = ShortViewer & {
    className?: string
    buttonType?: 'story' | 'share'
    onClick?: () => void
}

export const ViewerCard = React.memo<ViewerCardProps>(({
    className,
    id,
    name,
    bio,
    avatar,
    buttonType = 'story',
    isVerified,
    isFilledProfile,
    onClick,
}) => {
    const { shareLink, shareToStory } = useTelegram()

    const classes = useMemo(() => [
        styles.root,
        className ? className : ''
    ].join(' '), [className])

    const onShare = useCallback(() => {
        shareLink(`https://t.me/TowimFontendTestBot?start=performer&performerId=${id}`)
    }, [shareLink, id])

    const onStory = () => {
        shareToStory(
            'https://drive.google.com/u/0/drive-viewer/AKGpiha21qbQfrxwV4OtgbRqWeWBviEZX3hasTXNdOLFjJrdDvDQd3YXSmmQWmk4Z5S8aaGrxuS9fXcvF1GZdAi5nvP9YKpW1iv6pNw=s1600-rw-v1',
            {
                widget_link: {
                    url: 'https://t.me/TowimFontendTestBot',
                    name: 't.me/towim'
                }
            }
        )
    }

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
                    onClick={onStory}
                >
                    Stories
                </Button>
            )}
            {buttonType === 'share' && (
                <Button
                    animatedIcon={'share'}
                    size="s"
                    view="surface"
                    onClick={onShare}
                >
                    Share
                </Button>
            )}
        </article>
    )
})