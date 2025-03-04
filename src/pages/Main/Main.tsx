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
import {useTelegram} from "@/shared/lib/hooks/useTelegram";
import { GamesSlider } from '@/widgets/games'
import {complexModel} from "@/shared/lib/providers/AuthProvider";

export const Main = () => {
    const { isFilledProfile, isPublishedProfile } = useUnit(viewerModel.expandModule.$expandViewer)
    const lastMessage = useUnit(complexModel.$lastMessage)

    const navigate = useNavigate()

    const { haptic } = useTelegram()

    return (
        <div className={styles.root}>
            {lastMessage && (
                <MarqueeText text={lastMessage} />
            )}
            <ViewerCardReflect
                className={styles.viewer}
                onClick={() => {
                    haptic()
                    navigate(RouterPathes.PROFILE)
                }}
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
                    <GamesSlider />
                </>
            )}
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