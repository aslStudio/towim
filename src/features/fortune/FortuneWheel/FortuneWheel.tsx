import React, { useCallback, useEffect, useState } from "react"

import styles from './FortuneWheel.module.scss'
import { images } from "@/shared/assets/images"
import { getRandomInt } from "@/shared/lib/number"
import { useNavigate } from "react-router-dom"
import { Button } from "@/shared/ui"

export type FortuneWheelProps = {
    className?: string
}

let timeout: NodeJS.Timeout

export const FortuneWheel: React.FC<FortuneWheelProps> = ({
    className
}) => {
    const navigate = useNavigate()

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

    return (
        <div>
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
            <div className={styles.row}>
                <Button
                    className={styles['play-button']}
                    isDisabled={isSpinning}
                    view={'purple'}
                    size="xl"
                    onClick={handleSpinClick}
                >
                    Play
                </Button>
                <Button
                    className={styles['close-button']}
                    animatedIcon={'close'}
                    view={'blue'}
                    size="xl"
                    onClick={() => navigate('/main')}
                />
            </div>
        </div>
    )
}