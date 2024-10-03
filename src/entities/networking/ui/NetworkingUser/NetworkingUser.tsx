import React, { useMemo } from 'react'

import { type NetworkingUserItem } from '../../model'

import styles from './NetworkingUser.module.scss'

export type NetworkingUserProps = NetworkingUserItem & {
    className?: string
}

export const NetworkingUser = React.memo<NetworkingUserProps>(({
    className,
    name,
    id,
    avatar
}) => {
    const classes = useMemo(() => [
        styles.root,
        className ? className : ''
    ].join(' '), [className])

    return (
        <div className={classes}>
            <div className={styles.avatar}>
                <img 
                    src={avatar}
                    alt='avatar'
                />
            </div>
            <p className={styles.text}>{name}</p>
        </div>
    )
})