import React from "react"

import styles from './Input.module.scss'

export type InputProps = {
    className?: string
    placeholder?: string
    value: string
    onInput: (v: string) => void
    onFocus?: () => void
    onBlur?: () => void
}

export const Input = React.memo<InputProps>(({
    className,
    placeholder,
    value,
    onInput,
    onFocus,
    onBlur
}) => {
    return (
        <input
            className={`${styles.root} ${className ? className : ''}`}
            value={value}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={e => onInput(e.target.value)}
        />
    )
})