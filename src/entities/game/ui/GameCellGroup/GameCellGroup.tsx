import React from 'react'

import { GameCell, GameCellEmpty, type GameCellProps } from '../GameCell'

import styles from './GameCellGroup.module.scss'

export type GameCellGroupProps = {
    className?: string
    group: ('placeholder' | Omit<GameCellProps, 'className'>)[]
}

export const GameCellGroup: React.FC<GameCellGroupProps> = ({
    className,
    group
}) => (
    <div className={`${styles.root} ${className ? className : ''}`}>
        {group[0] && (
            <>
                <Item 
                    className={styles.cell}
                    item={group[0]}
                />
                <div
                    className={styles.divider} 
                />
            </>
        )}
        {group[1] && (
            <>
                <Item 
                    className={styles.cell}
                    item={group[1]}
                />
                <div
                    className={styles.divider} 
                />
            </>
        )}
        {group[2] && (
            <>
                <Item 
                    className={styles.cell}
                    item={group[2]}
                />
                <div
                    className={styles.divider} 
                />
            </>
        )}
    </div>
)

const Item: React.FC<{
    className?: string
    item: 'placeholder' | Omit<GameCellProps, 'className'>
}> = ({
    className,
    item
}) => {
    if (item === 'placeholder') {
        return (
            <GameCellEmpty
                className={className}
            />
        )
    }

    return (
        <GameCell 
            className={className}
            {...item}
        />
    )
}