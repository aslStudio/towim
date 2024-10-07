import React from "react";
import {reflect} from "@effector/reflect";

import {BotNotificationsButton, CategoriesTabs, UpgradeTabs} from "@/features/profile";

import {viewerModel} from "@/entities/viewer";

import styles from './ProfileButtons.module.scss'

export type ProfileButtonsProps = {
    isEditable: boolean
}

export const ProfileButtons = React.memo<ProfileButtonsProps>(({
    isEditable
}) => {
    return (
        <div
            className={`${styles.root} ${isEditable ? styles['is-active'] : ''}`}
        >
            <CategoriesTabsReflect />
            <UpgradeTabs />
            <BotNotificationsButton />
        </div>
    )
})

const CategoriesTabsReflect = reflect({
    view: CategoriesTabs,
    bind: {
        viewer: viewerModel.expandModule.$expandViewer,
        onChange: viewerModel.expandModule.expandViewerUpdated,
    }
})