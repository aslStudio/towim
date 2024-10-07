import { ViewerCard, viewerModel } from "@/entities/viewer"
import { reflect } from "@effector/reflect"

import styles from './ViewerProfile.module.scss'
import { useEffect } from "react"
import {ProfileButtons, UserForm, UserStatistics} from "@/widgets/profile"
import { Button } from "@/shared/ui"
import { useUnit } from "effector-react"
import {useKeyboardOffset} from "@/shared/lib/providers";

export const ViewerProfile = () => {
    const isLoading = useUnit(viewerModel.expandModule.$isLoading)

    const { isOffset } = useKeyboardOffset()

    useEffect(() => {
        viewerModel.expandModule.fetchFx()
    }, [])

    return (
        <div
            className={`${styles.root} ${isOffset ? styles['is-offset'] : ''}`}
        >
            <ViewerCardReflect 
                className={styles.viewer}
                buttonType={'share'}
            />
            <UserStatisticsReflect
                className={styles.statistics}
                type={'viewer'}
            />
            <ProfileButtonReflect />
            <UserForm />
            <Button
                className={`${styles.button} ${isLoading ? styles['is-loading'] : ''}`}
                icon={'icon-telegram-purple'}
                view={'lightBlue'}
                size="xxl"
                onClick={() => {}}
            >
                Create Your Towim
            </Button>
        </div>
    )
}

const ViewerCardReflect = reflect({
    view: ViewerCard,
    bind: {
        name: viewerModel.shortModule.$shortViewer.map(item => item.name),
        bio: viewerModel.shortModule.$shortViewer.map(item => item.bio),
        avatar: viewerModel.shortModule.$shortViewer.map(item => item.avatar),
        isVerified: viewerModel.shortModule.$shortViewer.map(item => item.isVerified),
        isFilledProfile: viewerModel.shortModule.$shortViewer.map(item => item.isFilledProfile),
        isPublishedProfile: viewerModel.shortModule.$shortViewer.map(item => item.isPublishedProfile),
    }
})

const UserStatisticsReflect = reflect({
    view: UserStatistics,
    bind: {
        likes: viewerModel.expandModule.$expandViewer.map(item => item.likes),
        views: viewerModel.expandModule.$expandViewer.map(item => item.views),
        xs: viewerModel.expandModule.$expandViewer.map(item => item.xs),
        isLoading: viewerModel.expandModule.$isLoading,
        isVisible: viewerModel.expandModule.$isEditable.map(state => !state)
    }
})

const ProfileButtonReflect = reflect({
    view: ProfileButtons,
    bind: {
        isEditable: viewerModel.expandModule.$isEditable,
    }
})