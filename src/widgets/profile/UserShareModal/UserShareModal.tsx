import React from "react"
import { useNavigate } from "react-router-dom"

import { RouterPathes } from "@/shared/lib/types"
import { CopyField, Modal, ModalProps } from "@/shared/ui"

import styles from './UserShareModal.module.scss'

export type UserShareModalProps = Omit<ModalProps, 'title' | 'onSubmit' | 'size'> & {
    link: string
    botLink: string
}

export const UserShareModal = React.memo<UserShareModalProps>(({
    isOpen,
    link,
    botLink,
    onClose,
}) => {
    const navigate = useNavigate()

    const onSubmit = () => {
        onClose()
        navigate(RouterPathes.NETWORKING)
    }

    return (
        <Modal
            title="Share Profile"
            buttonText="Networking"
            size="m"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onSubmit}
        >
            <div className={styles.wrapper}>
                <CopyField 
                    className={styles.field} 
                    text={link} 
                />
                <CopyField 
                    className={styles.field} 
                    text={botLink} 
                />
            </div>
        </Modal>
    )
})