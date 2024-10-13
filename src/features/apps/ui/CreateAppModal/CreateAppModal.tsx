import React, { useCallback, useMemo, useState } from "react";
import { reflect } from "@effector/reflect";

import { Input, InputFile, Modal, ModalProps } from "@/shared/ui";

import { createAppModel } from "../../model";

import styles from './CreateAppModal.module.scss'
import { useTelegram } from "@/shared/lib/hooks/useTelegram";

export type CreateAppModalProps = Omit<ModalProps, 'title'>

export const CreateAppModal = React.memo<CreateAppModalProps>(({
    isOpen,
    onClose
}) => {
    const { isMobileDevice } = useTelegram()

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
            title="TOP Mini Apps"
            buttonText="Add App"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={onClose}
        >
            <div className={classes}>
                <InputNameReflect
                    className={styles.field}
                    placeholder="App Name" 
                    onFocus={onFocus}
                    onBlur={() => setIsFocues(false)}
                />
                <InputDescriptionReflect
                    className={styles.field}
                    placeholder="Short Description" 
                    onFocus={onFocus}
                    onBlur={() => setIsFocues(false)}
                />
                <InputLinkReflect
                    className={styles.field}
                    placeholder="Active link" 
                    onFocus={onFocus}
                    onBlur={() => setIsFocues(false)}
                />
                <InputFileReflect 
                    className={styles.field}
                    label="App Logo"
                />
            </div>
        </Modal>
    )
})

const InputNameReflect = reflect({
    view: Input,
    bind: {
        value: createAppModel.$name,
        onInput: createAppModel.nameUpdated,
    }
})

const InputDescriptionReflect = reflect({
    view: Input,
    bind: {
        value: createAppModel.$description,
        onInput: createAppModel.descriptionUpdated,
    }
})

const InputLinkReflect = reflect({
    view: Input,
    bind: {
        value: createAppModel.$link,
        onInput: createAppModel.linkUpdated,
    }
})

const InputFileReflect = reflect({
    view: InputFile,
    bind: {
        value: createAppModel.$file,
        onChange: createAppModel.fileUpdated
    }
})