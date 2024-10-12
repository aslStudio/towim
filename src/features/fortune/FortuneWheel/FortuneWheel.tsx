import React, { useCallback, useEffect, useState } from "react"

import styles from './FortuneWheel.module.scss'
import { images } from "@/shared/assets/images"
import { getRandomInt, mod } from "@/shared/lib/number"
import { useTelegram } from "@/shared/lib/hooks/useTelegram"

export type FortuneWheelProps = {
    className?: string
}

let timeout: NodeJS.Timeout

export const FortuneWheel: React.FC<FortuneWheelProps> = ({
    className
}) => {
    const { MainButton } = useTelegram()

    const [isSpinning, setIsSpinning] = useState(false);
    const [rotation, setRotation] = useState(0);

    const handleSpinClick = useCallback(() => {
        if (!isSpinning) {
            setIsSpinning(true);

            const segmentAngle = 360 / 8
            const targetPosition = getRandomInt(1, 8)
            const targetAngle = segmentAngle * targetPosition
            const currentAngle = rotation
            const result = currentAngle + currentAngle % 360 + (360 - currentAngle % 360) + targetAngle + 360 * 2

            setRotation(result);

            timeout = setTimeout(() => {
                setIsSpinning(false);
                clearTimeout(timeout)
            }, 5000);
        }
    }, [isSpinning, rotation])

    useEffect(() => {
        MainButton.setParams({
            text: 'Let’s go',
            is_visible: true
        })
        MainButton.onClick(() => {
            handleSpinClick()
        })
    }, [])

    return (
        <div 
            className={`${styles.root} ${className ? className : ''}`}
        >
            <img 
                className={styles.wheel}
                style={{
                    transform: `rotate(${rotation}deg)`
                }}
                src={images.Fortune.wheel}
                alt="wheel"
            />
            <img 
                className={[
                    styles.arrow,
                    isSpinning && styles['is-spinning'],
                ].join(' ')}
                src={images.Fortune.arrow}
                alt="arrow"
            />
        </div>
    )
}