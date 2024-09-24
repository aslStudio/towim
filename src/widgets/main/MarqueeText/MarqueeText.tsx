import Marquee from "react-fast-marquee";

import styles from './MarqueeText.module.scss'

export const MarqueeText = () => (
    <Marquee className={styles.root} autoFill={true}>
        <p className={styles.text}>Vote for Donald Trump</p>
    </Marquee>
)