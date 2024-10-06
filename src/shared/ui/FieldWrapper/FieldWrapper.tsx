import React from "react"

import { AnimatedIcon, AnimatedIconProps } from "../AnimatedIcon"

import styles from './FieldWrapper.module.scss'

export type FieldWrapperProps = React.PropsWithChildren<{
    className?: string
    icon: AnimatedIconProps['name']
    title: string
}>

export const FieldWrapper = React.memo<FieldWrapperProps>(({
    className,
    icon,
    title,
    children
}) => (
    <div
        className={`${styles.root} ${className ? className : ''}`}
    >
        <div className={styles.row}>
            <AnimatedIcon 
                className={styles.icon}
                name={icon}
                width={24}
                height={24}
            />
            <p className={styles.title}>{title}</p>
        </div>
        {children}
    </div>
))