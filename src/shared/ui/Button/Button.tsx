import React, { useMemo } from "react"

import { icons } from "@/shared/assets/icons"

import { IconBase } from "../IconBase"
import { AnimatedIcon, AnimatedIconProps } from "../AnimatedIcon"

import styles from './Button.module.scss'
import {useTelegram} from "@/shared/lib/hooks/useTelegram";

export type ButtonProps = React.PropsWithChildren<{
    className?: string
    view?: 'secondary' | 'surface' | 'blue' | 'lightBlue' | 'gray'
    isShadow?: boolean
    isDisabled?: boolean
    size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
    icon?: keyof typeof icons
    animatedIcon?: AnimatedIconProps['name']
    onClick: () => void
}>

export const Button = React.memo<ButtonProps>(({
    className,
    view = 'secondary',
    size = 's',
    isShadow,
    isDisabled,
    icon,
    animatedIcon,
    children,
    onClick
}) => {
    const { haptic } = useTelegram()

    const classes = useMemo(() => [
        styles.root,
        styles[`view-${view}`],
        styles[`size-${size}`],
        isShadow ? styles['is-shadow'] : '',
        isDisabled ? styles['is-disabled'] : '',
        className ? className : '',
    ].join(' '), [className, view, size, isShadow, isDisabled])

    const iconSizes = useMemo(() => {
        switch (size) {
            case "xxs":
            case "xs":
            case "s":
            case "m":
                return {
                    width: 20,
                    height: 20,
                }
            case "l":
            case "xl":
            case "xxl":
                return {
                    width: 24,
                    height: 24,
                }
        }
    }, [size])
    
    return (
        <button className={classes} onClick={() => {
            if (!isDisabled) {
                haptic()
                onClick()
            }
        }}>
            {icon && (
                <IconBase
                    className={styles.icon}
                    name={icon}
                    {...iconSizes}
                />
            )}
            {animatedIcon && (
                <AnimatedIcon
                    className={styles.icon}
                    name={animatedIcon}
                    {...iconSizes}
                />
            )}
            {children && (
                <p className={styles.text}>{children}</p>
            )}
        </button>
    )
})

