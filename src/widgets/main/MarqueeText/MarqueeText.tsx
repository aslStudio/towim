import Marquee from "react-fast-marquee";

import styles from './MarqueeText.module.scss'
import { useModal } from "@/shared/ui";
import { SendMessageModal } from "@/features/message";

export const MarqueeText = () => {
    const { isOpen, open, close } = useModal()

    return (
        <>
            <div className={styles.root}>
                <Marquee className={styles.marquee} autoFill={true}>
                    <p className={styles.text}>Vote for Donald Trump</p>
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