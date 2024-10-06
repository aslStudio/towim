import { reflect } from '@effector/reflect'
import { useUnit } from 'effector-react'

import { AppSlider } from '@/widgets/apps'
import { MarqueeText } from '@/widgets/main'
import { PerformersList } from '@/widgets/performers'

import { PerformersFilters, ReactionButtons } from '@/features/performers'
import { NetworkingButton } from '@/features/networking'
import { FillProfileButton, PublishProfileButton } from '@/features/profile'

import { ViewerCard, viewerModel } from '@/entities/viewer'

import styles from './Main.module.scss'
import { useNavigate } from 'react-router-dom'
import { RouterPathes } from '@/shared/lib/types'

export const Main = () => {
    const { isFilledProfile, isPublishedProfile } = useUnit(viewerModel.shortModule.$shortViewer)
    const navigate = useNavigate()

    return (
        <div className={styles.root}>
            <MarqueeText />
            <ViewerCardReflect 
                className={styles.viewer}
                onClick={() => navigate(RouterPathes.PROFILE)}
            />
            <PerformersFilters />
            <PerformersList />
            {!isFilledProfile && (
                <FillProfileButton />
            )}
            {isFilledProfile && !isPublishedProfile && (
                <PublishProfileButton />
            )}
            {isFilledProfile && isPublishedProfile && (
                <>
                    <ReactionButtons />
                    <NetworkingButton />
                    <AppSlider />
                </>
            )}
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