import React from "react"

import styles from './GameCell.module.scss'
import { Button } from "@/shared/ui"

export type GameCellProps = {
    className?: string
    id: string | number
    title: string
    description: string
    img: string
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
    isBadge = false,
    isDisabled = false,
    onPress
}) => {
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
                    <div className={styles.avatar}>
                        <img src={img} alt={`game-avatar-${id}`} />
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