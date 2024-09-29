import { reflect } from '@effector/reflect'

import { MarqueeText } from '@/widgets/main'
import { PerformersList } from '@/widgets/performers'

import { ViewerCard, viewerModel } from '@/entities/viewer'

import styles from './Main.module.scss'
import { PerformersFilters, ReactionButtons } from '@/features/performers'
import { NetworkingButton } from '@/features/networking'
import { AppSlider } from '@/widgets/apps'

export const Main = () => {
    return (
        <div className={styles.root}>
            <MarqueeText />
            <ViewerCardReflect 
                className={styles.viewer}
            />
            <PerformersFilters />
            <PerformersList />
            <ReactionButtons />
            <NetworkingButton />
            <AppSlider />
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
    }
})