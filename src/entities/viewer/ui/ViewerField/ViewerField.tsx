import React from "react"

import { AnimatedIconProps, FieldWrapper } from "@/shared/ui"

import { ExpandViewer } from "../../model"

import styles from './ViewerField.module.scss'

export type ViewerFieldProps = {
    className?: string
    viewer: ExpandViewer
    title: string
    fieldName: keyof ExpandViewer,
    isEditing?: boolean
    icon: AnimatedIconProps['name']
    placeholder?: string
    maxLength?: number
    isLoading: boolean
    onInput?: (data: ExpandViewer) => void
    onBlur?: () => void
    onFocus?: () => void
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
    onBlur,
    onFocus
}) => {
    return (
        <FieldWrapper
            className={className}
            title={title}
            icon={icon}
        >
            <div 
                className={`${styles.wrapper} ${isLoading ? `${styles['is-loading']} skeleton` : ''}`}
            >
                {
                    !isEditing 
                    ? (
                        <>
                            {String(viewer[fieldName]).split('<br/>').map(item => (
                                <>
                                    <p className={styles.value}>{item}</p>
                                    <br />
                                </>
                            ))}
                        </>
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
                                value={String(viewer[fieldName]).split('<br/>').join('\n')}
                                placeholder={placeholder}
                                onChange={e => onInput?.({
                                    ...viewer,
                                    [fieldName]: e.target.value.split('\n').join('<br/>'),
                                })}
                                onFocus={onFocus}
                                onBlur={onBlur}
                            />
                        </>
                    )
                }
            </div>
        </FieldWrapper>
    )
})