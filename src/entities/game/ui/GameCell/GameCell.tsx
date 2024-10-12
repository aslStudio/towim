import React, { useMemo } from "react"

import styles from './GameCell.module.scss'
import { AnimatedIcon, AnimatedIconProps, Button } from "@/shared/ui"

export type GameCellProps = {
    className?: string
    id: string | number
    title: string
    description: string
    img?: string
    animatedIcon?: AnimatedIconProps['name']
    view?: 'transparent' | 'green'
    isBadge?: boolean
    isDisabled?: boolean
    onPress?: (id: string | number) => void
}

export const GameCell = React.memo<GameCellProps>(({
    className,
    id,
    title,
    description,
    img,
    animatedIcon,
    view = 'transparent',
    isBadge = false,
    isDisabled = false,
    onPress
}) => {
    const avatarClasses = useMemo(() => [
        styles.avatar,
        styles[`is-${view}`]
    ].join(' '), [view])

    return (
        <div 
            className={[
                styles.root,
                isDisabled ? styles['is-disabled'] : '',
                className ? className : '',
            ].join(' ')}
        >
            <div className={styles.wrapper}>
                <div className={styles['avatar-wrapper']}>
                    <div className={avatarClasses}>
                        {img && (
                            <img 
                                className={styles['avatar-image']}
                                src={img} 
                                alt={`game-avatar-${id}`} />
                        )}
                        {animatedIcon && (
                            <AnimatedIcon 
                                name={animatedIcon}
                                width={35}
                                height={35}
                            />
                        )}
                    </div>
                    {isBadge && (
                        <span 
                            className={styles.badge}
                        >
                            HOT
                        </span>
                    )}
                </div>
                <div className={styles.info}>
                    <p className={styles.name}>{title}</p>
                    <p className={styles.description}>{description}</p>
                </div>
            </div>
            <Button 
                size={'s'}
                view={'secondary'}
                onClick={() => onPress?.(id)}
            >
                🎮  Play
            </Button>
        </div>
    )
})