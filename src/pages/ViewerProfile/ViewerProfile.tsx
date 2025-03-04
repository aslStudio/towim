import { ViewerCard, viewerModel } from "@/entities/viewer"
import { reflect } from "@effector/reflect"

import styles from './ViewerProfile.module.scss'
import { useEffect } from "react"
import {ProfileButtons, UserForm, UserStatistics} from "@/widgets/profile"
import { Button } from "@/shared/ui"
import { useUnit } from "effector-react"

export const ViewerProfile = () => {
    const isLoading = useUnit(viewerModel.expandModule.$isLoading)
    const isEditable = useUnit(viewerModel.expandModule.$isEditable)

    useEffect(() => {
        viewerModel.expandModule.fetchFx()
    }, [])

    return (
        <div
            className={`${styles.root} ${isEditable ? styles['is-editable'] : ''}`}
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
                animatedIcon={'towim'}
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
        id: viewerModel.expandModule.$expandViewer.map(item => 0),
        name: viewerModel.expandModule.$expandViewer.map(item => item.name),
        bio: viewerModel.expandModule.$expandViewer.map(item => item.bio),
        avatar: viewerModel.expandModule.$expandViewer.map(item => item.avatar),
        isVerified: viewerModel.expandModule.$expandViewer.map(item => item.isVerified),
        isFilledProfile: viewerModel.expandModule.$expandViewer.map(item => item.isFilledProfile),
        isPublishedProfile: viewerModel.expandModule.$expandViewer.map(item => item.isPublishedProfile),
    }
})

const UserStatisticsReflect = reflect({
    view: UserStatistics,
    bind: {
        likes: viewerModel.expandModule.$expandViewer.map(item => item.likes),
        views: viewerModel.expandModule.$expandViewer.map(item => item.views),
        xs: viewerModel.expandModule.$expandViewer.map(item => item.coins),
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