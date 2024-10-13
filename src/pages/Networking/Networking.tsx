import { MarqueeText } from '@/widgets/main'

import styles from './Networking.module.scss'
import { useEffect } from 'react'
import { networkingModel } from '@/entities/networking/model'
import { reflect } from '@effector/reflect'
import { PrivateChatCard, PrivateChatSlider } from '@/widgets/networking'
import { NetworkingCard } from '@/entities/networking'
import { useTelegram } from '@/shared/lib/hooks/useTelegram'
import { useNavigate } from 'react-router-dom'

export const Networking = () => {
    const { MainButton } = useTelegram()
    const navigate = useNavigate()

    useEffect(() => {
        networkingModel.networkingRequested()
        MainButton.setParams({
            text: 'Back',
            is_visible: true
        })
        MainButton.onClick(() => {
            navigate(-1)
        })
    }, [])

    return (
        <div className={styles.root}>
            <MarqueeText />
            <div className={styles.container}>
                <CardChatReflect className={styles.chat} />
                <IncomingReflect
                    className={styles.card}
                    title='Incoming requests'
                />
                <OutgoingReflect 
                    className={styles.card}
                    title='Outgoing requests'
                />
                <WhiteListReflect 
                    className={styles.card}
                    title='White list'
                />
            </div>
        </div>
    )
}

const CardChatReflect = reflect({
    view: PrivateChatSlider,
    bind: {
        isLoading: networkingModel.$isLoading,
        data: networkingModel.$list,
    }
})

const IncomingReflect = reflect({
    view: NetworkingCard,
    bind: {
        isLoading: networkingModel.$isLoading,
        list: networkingModel.$incoming,
    }
})

const OutgoingReflect = reflect({
    view: NetworkingCard,
    bind: {
        isLoading: networkingModel.$isLoading,
        list: networkingModel.$outgoing,
    }
})

const WhiteListReflect = reflect({
    view: NetworkingCard,
    bind: {
        isLoading: networkingModel.$isLoading,
        list: networkingModel.$whiteList,
    }
})