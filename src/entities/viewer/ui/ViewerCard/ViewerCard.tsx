import React, { useMemo } from "react";

import { ShortViewer } from "../../model";

import styles from './ViewerCard.module.scss'
import { Button, IconBase } from "@/shared/ui";

export type ViewerCardProps = ShortViewer & {
    className?: string
}

export const ViewerCard = React.memo<ViewerCardProps>(({
    className,
    name,
    bio,
    avatar,
    isVerified
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
                        {isVerified && (
                            <IconBase 
                                name={'icon-verified'} 
                                width={24}
                                height={24}
                            />
                        )}
                    </div>
                    <p className={styles.description}>{bio}</p>
                </div>
            </div>
            <Button
                icon={'icon-star'}
                size="s"
                view="secondary"
            >
                Stories
            </Button>
        </article>
    )
})