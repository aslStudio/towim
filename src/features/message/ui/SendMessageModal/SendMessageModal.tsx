import React, { useCallback, useMemo, useState } from "react";

import { useTelegram } from "@/shared/lib/hooks/useTelegram";
import { Modal, ModalProps, Textarea } from "@/shared/ui";

import styles from './SendMessageModal.module.scss'

export type SendMessageModalProps = Omit<ModalProps, 'title'>

export const SendMessageModal = React.memo<SendMessageModalProps>(({
    isOpen,
    onClose,
}) => {
    const { isMobileDevice } = useTelegram()

    const [value, setValue] = useState('')
    const [isFocused, setIsFocues] = useState(false)

    const onFocus = useCallback(() => {
        if (isMobileDevice) {
            setIsFocues(true)
        }
    }, [isMobileDevice])

    const classes = useMemo(() => [
        styles.wrapper,
        isFocused ? styles['is-focused'] : ''
    ].join(' '), [isFocused])

    return (
        <Modal
            title="Message"
            buttonText="Send message (stars) 1000"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onClose}
        >
            <div className={classes}>
                <p className={styles.label}>Leave your message in the feed.</p>
                <Textarea 
                    value={value}
                    placeholder="Your message to all users"
                    onInput={setValue}
                    onFocus={onFocus}
                    onBlur={() => setIsFocues(false)}
                />
            </div>
        </Modal>
    )
})