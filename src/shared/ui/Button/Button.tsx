import React, { useMemo } from "react"

import { icons } from "@/shared/assets/icons"

import { IconBase } from "../IconBase"

import styles from './Button.module.scss'

export type ButtonProps = React.PropsWithChildren<{
    className?: string
    view?: 'secondary' | 'surface' | 'blue'
    isShadow?: boolean
    size?: 'xs' | 's' | 'm' | 'l' | 'xl'
    icon?: keyof typeof icons
    onClick: () => void
}>

export const Button = React.memo<ButtonProps>(({
    className,
    view = 'secondary',
    size = 's',
    isShadow,
    icon,
    children,
    onClick
}) => {
    const classes = useMemo(() => [
        styles.root,
        styles[`view-${view}`],
        styles[`size-${size}`],
        isShadow ? styles['is-shadow'] : '',
        className ? className : '',
    ].join(' '), [className, view, size, isShadow])

    const iconSizes = useMemo(() => {
        switch (size) {
            case "s":
            case "m":
                return {
                    width: 20,
                    height: 20,
                }
            case "l":
            case "xl":
                return {
                    width: 24,
                    height: 24,
                }
        }
    }, [size])
    
    return (
        <button className={classes} onClick={onClick}>
            {icon && (
                <IconBase
                    className={styles.icon}
                    name={icon}
                    {...iconSizes}
                />
            )}
            {children && (
                <p className={styles.text}>{children}</p>
            )}
        </button>
    )
})

