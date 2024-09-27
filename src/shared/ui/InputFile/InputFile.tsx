import React, { useState } from "react"

import { IconBase } from "../IconBase"

import styles from './InputFile.module.scss'

export type InputFileProps = {
    className?: string
    label?: string
    value: string
    onChange: (v: string) => void
}

export const InputFile = React.memo<InputFileProps>(({
    label,
    className,
    value,
    onChange
}) => {
    const [text, setText] = useState('Attach file')

    function onUploadFile(e: {
        target: {
            files: FileList | null
        }
    }) {
        if (e.target.files && e.target.files) {
            const file = e.target.files[0]
            setText(file.name)

            const renderer = new FileReader()

            renderer.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target?.result) {
                    onChange(event.target?.result as string)   
                }
            }

            renderer.readAsDataURL(file)
        }
    }

    return (
        <div className={className}>
            <p className={styles.label}>{label}</p>
            <div className={styles.wrapper}>
                <input 
                    className={styles.field}
                    value={value}
                    type="file"
                    onChange={onUploadFile}
                />
                <IconBase 
                    name={'icon-file'}
                    width={28}
                    height={28}
                />
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
})