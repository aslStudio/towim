import React from "react"

import { useCopyToClipboard } from "@/shared/lib/hooks/useCopy"

import { AnimatedIcon } from "../AnimatedIcon"

import styles from './CopyField.module.scss'

export type CopyFieldProps = {
    className?: string
    text: string
}

export const CopyField: React.FC<CopyFieldProps> = ({
    className,
    text
}) => {
    const [_, copy] = useCopyToClipboard()

    return (
        <div 
            className={[
                styles.root,
                className ? className : ''
            ].join(' ')}
            onClick={() => copy(text)}
        >
            <p>{text}</p>
            <AnimatedIcon 
                name={'copy'}
                width={20}
                height={20}
            />
        </div>
    )
}