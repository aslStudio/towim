import React, { useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"

import { IconBase, IconBaseProps } from "../IconBase"

import styles from './Modal.module.scss'
import { useTelegram } from "@/shared/lib/hooks/useTelegram"
import { useLocation, useNavigate } from "react-router-dom"

export type ModalProps = React.PropsWithChildren<{
    title: string
    buttonText?: string
    isOpen: boolean
    onClose: () => void
    onSubmit?: () => void
}>

let timeout: NodeJS.Timeout

export const Modal = React.memo<ModalProps>(({
    children,
    title,
    buttonText,
    isOpen,
    onClose,
    onSubmit
}) => {
    const {
        MainButton,
        theme,
        haptic
    } = useTelegram()
    const location = useLocation()
    const navigate = useNavigate()

    const [isInDOM, setIsInDOM] = useState(false)
    const [isShowed, setIsShowed] = useState(false)

    const classes = useMemo(() => [
        styles.root,
        isShowed ? styles['is-open'] : ''
    ].join(' '), [isShowed])

    const closeIcon = useMemo<IconBaseProps['name']>(() => {
        if (theme === 'light') {
            return 'icon-close-modal'
        }

        return 'icon-close-modal-light'
    }, [theme])

    useEffect(() => {
        if (isOpen) {
            setIsInDOM(true)
            timeout = setTimeout(() => {
                setIsShowed(true)
                if (onSubmit && buttonText) {
                    MainButton.setParams({
                        text: buttonText,
                        is_visible: true,
                    })
                    MainButton.onClick(onSubmit)
                }   
                clearTimeout(timeout)
            }, 50)
        } else {
            if (location.pathname.includes('networking')) {
                MainButton.setParams({
                    text: 'Back',
                    is_visible: true
                })
                MainButton.onClick(() => {
                    navigate(-1)
                })
            } else {
                MainButton.setParams({
                    text: 'button',
                    is_visible: false
                })
            }
            setIsShowed(false)
            timeout = setTimeout(() => {
                setIsInDOM(false)
                clearTimeout(timeout)
            }, 350)
        }
    }, [isOpen, MainButton, onSubmit])

    if (isInDOM) {
        return createPortal(
            <div className={classes}>
                <h4 className={styles.title}>{title}</h4>
                <IconBase
                    className={styles.close}
                    name={closeIcon}
                    width={28}
                    height={28}
                    onClick={() => {
                        haptic()
                        onClose()
                    }}
                />
                {children}
            </div>,
            document.body,
        )
    }

    return null
    // return createPortal(
    //     <div className={classes}>
    //         <h4 className={styles.title}>{title}</h4>
    //         <IconBase
    //             className={styles.close}
    //             name={closeIcon}
    //             width={28}
    //             height={28}
    //             onClick={() => {
    //                 haptic()
    //                 onClose()
    //             }}
    //         />
    //         {children}
    //     </div>,
    //     document.body,
    // )
})