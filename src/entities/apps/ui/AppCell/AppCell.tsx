import React from 'react'

import {AnimatedIcon, Button, IconBase} from '@/shared/ui'
import { toFormattedNumber } from '@/shared/lib/number'
import { useTelegram } from '@/shared/lib/hooks/useTelegram'

import { App } from '../../model/index'

import styles from './App.module.scss'

export type AppCellProps = App & {
    className?: string
}

export const AppCell = React.memo<AppCellProps>(({
    className,
    id,
    img,
    isNew,
    isCrown,
    name,
    description,
    starts,
    link
}) => {
    const { openTelegramLink } = useTelegram()

    return (
        <div className={`${styles.root} ${className ? className : ''}`}>
            <div className={styles.wrapper}>
                <div className={styles['avatar-wrapper']}>
                    <div className={styles.avatar}>
                        <img src={img} alt={`app-avatar-${id}`} />
                    </div>
                    {isNew && (
                        <span 
                            className={styles.badge}
                        >
                            New
                        </span>
                    )}
                </div>
                <div className={styles.info}>
                    <p>{name} {isCrown ? '' : '👑'}</p>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.stars}>
                    <AnimatedIcon
                        name={'double-star'}
                        width={24}
                        height={24}
                    />
                    <p>{toFormattedNumber(starts)}</p>
                </div>
                <Button
                    animatedIcon={'check'}
                    size={'l'}
                    view={'secondary'}
                    onClick={() => openTelegramLink(link)}
                />
            </div>
        </div>
    )
})