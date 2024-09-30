

import { images } from '@/shared/assets/images'
import styles from './Splash.module.scss'
import { useEffect } from 'react'
import { authModel } from '@/features/auth/model'
import { useNavigate } from 'react-router-dom'
import { useTelegram } from '@/shared/lib/hooks/useTelegram'
import {AnimatedIcon} from "@/shared/ui";

export const Splash = () => {
    const navigate = useNavigate()
    const { initData } = useTelegram()

    useEffect(() => {
        authModel.onSuccess.set(() => navigate('/main'))
        authModel.authorizeStarted({
            init_data: initData
        })
    }, [])

    return (
        <div className={styles.root}>
            <AnimatedIcon
                className={styles.logo}
                name={'towim'}
                width={85}
                height={85}
            />
        </div>
    )
}