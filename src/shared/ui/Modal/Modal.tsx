import React, { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"

import { IconBase } from "../IconBase"

import styles from './Modal.module.scss'
import { useTelegram } from "@/shared/lib/hooks/useTelegram"

export type ModalProps = React.PropsWithChildren<{
    title: string
    isOpen: boolean
    onClose: () => void
}>

let timeout: NodeJS.Timeout

export const Modal = React.memo<ModalProps>(({
    children,
    title,
    isOpen,
    onClose
}) => {
    const { MainButton } = useTelegram()

    const [isInDOM, setIsInDOM] = useState(false)
    const [isShowed, setIsShowed] = useState(false)

    const classes = useMemo(() => [
        styles.root,
        isShowed ? styles['is-open'] : ''
    ].join(' '), [isShowed])

    useEffect(() => {
        if (isOpen) {
            setIsInDOM(true)
            timeout = setTimeout(() => {
                setIsShowed(true)
                MainButton.setParams({
                    text: 'button',
                    is_visible: true,
                    color: 'red',
                })
                clearTimeout(timeout)
            }, 50)
        } else {
            MainButton.setParams({
                text: 'button',
                is_visible: false
            })
            setIsShowed(false)
            timeout = setTimeout(() => {
                setIsInDOM(false)
                clearTimeout(timeout)
            }, 350)
        }
    }, [isOpen, MainButton])

    if (isInDOM) {
        return createPortal(
            <article className={classes}>
                <h4 className={styles.title}>{title}</h4>
                <IconBase
                    className={styles.close}
                    name={'icon-close-modal'}
                    width={28}
                    height={28}
                    onClick={onClose}
                />
                {children}
            </article>,
            document.body,
        )
    }

    return null
})