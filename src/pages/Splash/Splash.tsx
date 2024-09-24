

import { images } from '@/shared/assets/images'
import styles from './Splash.module.scss'
import { useEffect } from 'react'
import { authModel } from '@/features/auth/model'
import { useNavigate } from 'react-router-dom'
import { useTelegram } from '@/shared/lib/hooks/useTelegram'

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
            <img 
                className={styles.logo}
                src={images.Splash.logo}
                alt='logo'
            />
        </div>
    )
}