import React, {useMemo} from "react";
import Lottie from "react-lottie";
import {useTelegram} from "@/shared/lib/hooks/useTelegram";
import {animations} from "@/shared/assets/animations";

export type AnimatedIconProps = {
    className?: string
    name: keyof typeof animations.icons
    width: number
    height: number
}

export const AnimatedIcon = React.memo<AnimatedIconProps>(({
    className,
    name,
    width,
    height,
}) => {
    const { theme } = useTelegram()

    const iconName = useMemo(() => {
        const data = animations.icons[name]

        if (theme === 'light') {
            return `${name}-dark` as keyof typeof data
        }

        return `${name}-light` as keyof typeof data
    }, [theme, name])

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