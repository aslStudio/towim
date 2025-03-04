import React, {PropsWithChildren, useEffect} from "react"
import {useUnit} from "effector-react"

import {TransitionFade} from "@/shared/ui/TransitionFade"

import { complexModel } from './model'
import styles from "@/pages/Splash/Splash.module.scss";
import {AnimatedIcon} from "@/shared/ui";

export const AuthProvider: React.FC<PropsWithChildren> = ({
    children
}) => {
    const [
        isLoading
    ] = useUnit([
        complexModel.$isLoading
    ])

    useEffect(() => {
        complexModel.sessionStarted()
    }, []);

    return (
        <TransitionFade>
            {isLoading && (
                <div className={styles.root}>
                    <AnimatedIcon
                        className={styles.logo}
                        name={'towim'}
                        width={85}
                        height={85}
                    />
                </div>
            )}
            {!isLoading && (
                <>
                    {children}
                </>
            )}
        </TransitionFade>
    )
}