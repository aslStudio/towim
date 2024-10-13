import React from "react"

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
    return (
        <Modal
            title="Share Profile"
            size="m"
            isOpen={isOpen}
            onClose={onClose}
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