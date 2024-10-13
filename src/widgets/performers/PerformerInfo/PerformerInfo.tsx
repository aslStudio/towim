import {useUnit} from "effector-react/effector-react.mjs";

import {performers} from "@/entities/performers/model";

import {AnimatedIcon, Button, LoadingLayout} from "@/shared/ui";

import styles from './PerformerInfo.module.scss'
import { useCallback, useMemo } from "react";
import {mapCategory} from "@/shared/lib/types";
import {UserStatistics} from "@/widgets/profile";
import { useTelegram } from "@/shared/lib/hooks/useTelegram";

export const PerformerInfo = () => {
    const [ active, isLoading ] = useUnit([
        performers.poolModule.$active,
        performers.poolModule.$isLoading,
    ])

    const { shareLink } = useTelegram()

    const description = useMemo(() => {
        return active.categories.reduce((prev, curr, index) => {
            if (index !== active.categories.length - 1) {
                return prev + `${mapCategory[curr]}, `
            }

            return prev + `${mapCategory[curr]}`
        }, '' as string)
    }, [active])

    const onShare = useCallback(() => {
        shareLink(`https://t.me/TowimFontendTestBot?start=performer&&id=${active.id}`)
    }, [active, shareLink])

    return (
        <LoadingLayout
            className={styles.root}
            isLoading={isLoading}
            Skeleton={(
                <div className={styles.wrapper}>
                    <div className={styles.avatar} />
                </div>
            )}
            Content={(
                <div className={styles.wrapper}>
                    <div className={styles.avatar}>
                        <img
                            src={active.avatar}
                            alt={'avatar'}
                        />
                    </div>
                    <div className={styles.title}>
                        {active.isVerified && (
                            <AnimatedIcon
                                name={'verified-brand'}
                                width={24}
                                height={24}
                            />
                        )}
                        <p>{active.name}</p>
                    </div>
                    <p className={styles.description}>{description}</p>
                    <UserStatistics
                        className={styles.statistics}
                        likes={active.likes}
                        views={active.views}
                        xs={active.xs}
                        type={'performer'}
                        isLoading={false}
                        isVisible={true}
                    />
                    <div className={styles.buttons}>
                        <Button
                            size={'l'}
                            view={'surface'}
                            animatedIcon={'close'}
                            onClick={() => {}}
                        >
                            Dislike
                        </Button>
                        <Button
                            size={'l'}
                            view={'surface'}
                            animatedIcon={'check'}
                            onClick={() => {}}
                        >
                            Like
                        </Button>
                        <Button
                            size={'l'}
                            view={'surface'}
                            animatedIcon={'share'}
                            onClick={onShare}
                        >
                            Share
                        </Button>
                    </div>
                </div>
            )}
        />
    )
}