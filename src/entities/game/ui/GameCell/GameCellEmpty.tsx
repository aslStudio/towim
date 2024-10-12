import React from 'react'
import { GameCell, type GameCellProps } from './GameCell'
import { images } from '@/shared/assets/images'

export const GameCellEmpty: React.FC<Pick<GameCellProps, 'className'>> = ({
    className
}) => {
    return (
        <GameCell 
            className={className}
            id={'empty'}
            title='Soon'
            description='...'
            img={images.Games.placeholder}
        />
    )
}