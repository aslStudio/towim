import React from "react"

import { AnimatedIcon, AnimatedIconProps } from "@/shared/ui"

import { ExpandViewer } from "../../model"

import styles from './ViewerField.module.scss'

export type ViewerFieldProps = {
    className?: string
    viewer: ExpandViewer
    title: string
    fieldName: keyof ExpandViewer,
    isEditing: boolean
    icon: AnimatedIconProps['name']
    placeholder: string
    maxLength?: number
    isLoading: boolean
    onInput: (data: ExpandViewer) => void
}

export const ViewerField = React.memo<ViewerFieldProps>(({
    className,
    viewer,
    title,
    icon,
    isEditing,
    isLoading,
    placeholder,
    maxLength = 264,
    fieldName,
    onInput,
}) => {
    return (
        <div className={`${styles.root} ${className ? className : ''}`}>
            <div className={styles.row}>
                <AnimatedIcon 
                    className={styles.icon}
                    name={icon}
                    width={24}
                    height={24}
                />
                <p className={styles.title}>{title}</p>
            </div>
            <div 
                className={`${styles.wrapper} ${isLoading ? `${styles['is-loading']} skeleton` : ''}`}
            >
                {
                    !isEditing 
                    ? (
                        <p className={styles.value}>{String(viewer[fieldName])}</p>
                    )
                    : (
                        <>
                            <p 
                                className={styles['max-length']}
                            >
                                {String(viewer[fieldName]).length}/{maxLength}
                            </p>
                            <textarea 
                                className={styles.field}
                                value={String(viewer[fieldName])}
                                placeholder={placeholder}
                                onChange={e => onInput({
                                    ...viewer,
                                    [fieldName]: e.target.value,
                                })}
                            />
                        </>
                    )
                }
            </div>
        </div>
    )
})