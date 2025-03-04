import Marquee from "react-fast-marquee";

import styles from './MarqueeText.module.scss'
import { useModal } from "@/shared/ui";
import { SendMessageModal } from "@/features/message";
import React from "react";

export type MarqueeTextProps = {
    text: string
}

export const MarqueeText: React.FC<MarqueeTextProps> = ({
    text
}) => {
    const { isOpen, open, close } = useModal()

    return (
        <>
            <div className={styles.root}>
                <Marquee className={styles.marquee} autoFill={true}>
                    <p className={styles.text}>{text}</p>
                </Marquee>
                <button
                    className={styles.button}
                    onClick={open}
                >
                    Send
                </button>
            </div>
            <SendMessageModal 
                isOpen={isOpen}
                onClose={close}
            />
        </>
    )
}