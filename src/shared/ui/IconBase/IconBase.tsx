import { icons } from "@/shared/assets/icons"
import React from "react"

export type IconBaseProps = {
    className?: string
    name: keyof typeof icons
    width: number
    height: number
}

export const IconBase = React.memo<IconBaseProps>(({
    className,
    name,
    width,
    height
}) => (
    <img 
        className={className}
        src={icons[name]}
        width={width}
        height={height}
        alt="icon"
    />
))