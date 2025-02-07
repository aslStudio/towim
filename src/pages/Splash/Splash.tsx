import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { authModel } from '@/features/auth/model'

import { useTelegram } from '@/shared/lib/hooks/useTelegram'
import {AnimatedIcon} from "@/shared/ui";
import { RouterPathes } from '@/shared/lib/types'

import styles from './Splash.module.scss'

export const Splash = () => {
    const navigate = useNavigate()
    
    const location = useLocation();

    const { initData } = useTelegram()

    useEffect(() => {
        authModel.authorizeStarted({
            init_data: initData
        })
        authModel.onSuccess.set(() => {
            const searchParams = new URLSearchParams(location.search)
            const page = searchParams.get('start')

            if (page === 'performer') {
                const id = searchParams.get('id')

                if (id) {
                    navigate(RouterPathes.PERFORMER.replace(':id', `${id}`))
                    return
                }
            }

            navigate('/main')
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