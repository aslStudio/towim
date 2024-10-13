import React from "react"

import { toFormattedNumber } from "@/shared/lib/number"
import { AnimatedIcon, AnimatedIconProps, Button } from "@/shared/ui"

import styles from './GiftCell.module.scss'

export type GiftCellProps = {
    className?: string
    title: string
    tickets: number | string
    xs: number | string
    icon: AnimatedIconProps['name']
    onClaim: () => void
}

export const GiftCell = React.memo<GiftCellProps>(({
    className,
    title,
    tickets,
    xs,
    icon,
    onClaim,
}) => {
    function toValidGift(v: string | number, postfix: string) {
        if (typeof v === 'number') {
            return `${toFormattedNumber(v)} ${postfix}`
        }

        return v
    }

    return (
        <div className={`${styles.root} ${className}`}>
            <div className={styles.wrapper}>
                <div className={styles.icon}>
                    <AnimatedIcon 
                        name={icon}
                        width={32}
                        height={32}
                    />
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>{title}</p>
                    <div className={styles.description}>
                        <AnimatedIcon 
                            name={'ticket'}
                            width={16}
                            height={16}
                        />
                        <p>+ {toValidGift(tickets, 'tickets')}; </p>
                        <AnimatedIcon 
                            name={'double-star'}
                            width={16}
                            height={16}
                        />
                        <p>+ {toValidGift(xs, 'XS')}</p>
                    </div>
                </div>
            </div>
            <Button 
                view={'surface'}
                size={'s'}
                onClick={onClaim}
            >
                Claim
            </Button>
        </div>
    )
})