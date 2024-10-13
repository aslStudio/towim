import { GiftCell, GiftCellProps } from '@/entities/gift'
import styles from './Gifts.module.scss'
import { useTelegram } from '@/shared/lib/hooks/useTelegram'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Gifts = () => {
    const { MainButton } = useTelegram()
    const navigate = useNavigate()

    useEffect(() => {
        MainButton.setParams({
            text: 'Back',
            is_visible: true
        })
        MainButton.onClick(() => {
            navigate(-1)
        })
    })

    return (
        <div className={styles.root}>
            <p className={styles.icon}>📋</p>
            <p className={styles.title}>Gifts</p>
            <p className={styles.description}>Get more tickets for wheel spins here</p>
            <List />
        </div>
    )
}

const List = () => {
    const data: GiftCellProps[] = [
        {
            title: 'TON-transaction',
            icon: 'gift',
            tickets: 10,
            xs: 10000,
            onClaim: () => {},
        },
        {
            title: 'For inviting friends',
            icon: 'gift',
            tickets: 2,
            xs: '2 XS per user',
            onClaim: () => {},
        },
        {
            title: 'Join Towim channel',
            icon: 'gift',
            tickets: 1,
            xs: 1000,
            onClaim: () => {},
        },
        {
            title: 'Join Ceosanya channel',
            icon: 'gift',
            tickets: 1,
            xs: 1000,
            onClaim: () => {},
        },
        {
            title: 'Join Roxman channel',
            icon: 'gift',
            tickets: 1,
            xs: 1000,
            onClaim: () => {},
        },
    ]

    return (
        <div className={styles.list}>
            {data.map(item => (
                <GiftCell 
                    className={styles.cell}
                    {...item} 
                />
            ))}
        </div>
    )
}