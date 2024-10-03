import styles from './NetworkingUser.module.scss'

export const NetworkingUserSkeleton = () => {
    return (
        <div className={styles.root}>
            <div className={`${styles.avatar} skeleton`}/>
            <div className={`${styles.text} skeleton`} />
        </div>
    )
}