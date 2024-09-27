import React from "react";
import { reflect } from "@effector/reflect";

import { Input, InputFile, Modal, ModalProps } from "@/shared/ui";

import { createAppModel } from "../../model";

import styles from './CreateAppModal.module.scss'

export type CreateAppModalProps = Omit<ModalProps, 'title'>

export const CreateAppModal = React.memo<CreateAppModalProps>(({
    isOpen,
    onClose
}) => {
    return (
        <Modal
            title="TOP Mini Apps"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className={styles.wrapper}>
                <InputNameReflect
                    className={styles.field}
                    placeholder="App Name" 
                />
                <InputDescriptionReflect
                    className={styles.field}
                    placeholder="Short Description" 
                />
                <InputLinkReflect
                    className={styles.field}
                    placeholder="Active link" 
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