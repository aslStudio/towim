import React, {useMemo} from "react";
import Lottie from "react-lottie";
import {useTelegram} from "@/shared/lib/hooks/useTelegram";
import {animations} from "@/shared/assets/animations";

export type AnimatedIconProps = {
    className?: string
    name: keyof typeof animations.icons
    theme?: 'auto' | 'light' | 'dark'
    width: number
    height: number
}

export const AnimatedIcon = React.memo<AnimatedIconProps>(({
    className,
    name,
    width,
    height,
    theme = 'auto',
}) => {
    const { theme: nativeTheme } = useTelegram()

    const iconName = useMemo(() => {
        const data = animations.icons[name]

        if (theme === 'auto') {
            if (nativeTheme === 'light') {
                return `${name}-dark` as keyof typeof data
            }
    
            return `${name}-light` as keyof typeof data
        }

        return `${name}-${theme}` as keyof typeof data
    }, [theme, name, nativeTheme])

    return (
        <div className={className}>
            <Lottie
                options={{
                    loop: true,
                    animationData: animations.icons[name][iconName],
                }}
                width={width}
                height={height}
            />
        </div>
    )
})