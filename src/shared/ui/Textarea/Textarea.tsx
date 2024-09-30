import React from "react"

import styles from './Textarea.module.scss'

export type TextareaProps = {
    className?: string
    placeholder?: string
    value: string
    onInput: (v: string) => void
    onFocus?: () => void
    onBlur?: () => void
}

export const Textarea = React.memo<TextareaProps>(({
    className,
    placeholder,
    value,
    onInput,
    onFocus,
    onBlur
}) => {
    return (
        <textarea 
            className={`${styles.root} ${className ? className : ''}`}
            value={value}
            placeholder={placeholder}
            maxLength={50}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={e => onInput(e.target.value)}
        />
    )
})