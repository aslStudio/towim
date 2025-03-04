import { useMemo } from "react";

export type TelegramWindow = {
    Telegram: {
        WebApp: {
            expand: () => void
            ready: () => void
            openTelegramLink: (data: string) => void
            setHeaderColor: (color: string) => void
            requestFullscreen: () => void
            lockOrientation: () => void
            shareToStory: (img: string, params?: {
                widget_link: {
                    url: string
                    name: string
                }
            }) => void
            HapticFeedback: {
                impactOccurred: (v: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void
            },
            platform: string,
            initDataUnsafe: {
                user: {
                    id: number | string
                    username: string
                    photo_url: string
                }
            }
            initData: string,
            colorScheme: 'light' | 'dark',
            MainButton: {
                setText: (v: string) => void
                onClick: (cb: () => void) => void
                show: () => void
                hide: () => void
                setParams: (data: {
                    text?: string
                    color?: string
                    text_color?: string
                    is_visible?: boolean
                    is_active?: boolean
                }) => void
            },
            BackButton: {
                show: () => void
                hide: () => void
                onClick: (cb: () => void) => void
            },
            disableVerticalSwipes: () => void
        },
        authData: {
            user?: {
                id: string
            }
        }
    }
}

export function getInitData() {
    if ((window as unknown as TelegramWindow).Telegram.WebApp.initData) {
        return (window as unknown as TelegramWindow).Telegram.WebApp.initData
    }

    return 'user=%7B%22id%22%3A630300751%2C%22first_name%22%3A%22%D0%92%D0%BB%D0%B0%D0%B4%22%2C%22last_name%22%3A%22%D0%90%D1%81%D1%82%D0%B0%D1%85%D0%BE%D0%B2%22%2C%22username%22%3A%22astahovVlad%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2Fw_sjcGCKSxH1UDOlT5fx9QvoxvyT4sBtlXUH6RRzgjk.svg%22%7D&chat_instance=7707409107233608820&chat_type=private&auth_date=1739012788&signature=KuNTRinQTxBDLZbZUWRhYcvTrwL51YCBq3dNP4SoxyUZy7ewT0tSN9SsVx-x7bGcCxXzBbvV0fjYuWoJNzDuBQ&hash=8f42ab99cc9ed246dd265fe6d03efd4341babd94c4bee0f11d2975757aa95040'
}

export function getInitDataUnsafe(): TelegramWindow['Telegram']['WebApp']['initDataUnsafe'] {
    if ((window as unknown as TelegramWindow).Telegram.WebApp.initDataUnsafe?.user) {
        return (window as unknown as TelegramWindow).Telegram.WebApp.initDataUnsafe
    }

    return JSON.parse("{\"user\":{\"id\":630300751,\"first_name\":\"Влад\",\"last_name\":\"Астахов\",\"username\":\"astahovVlad\",\"language_code\":\"ru\",\"is_premium\":true,\"allows_write_to_pm\":true,\"photo_url\":\"https://t.me/i/userpic/320/w_sjcGCKSxH1UDOlT5fx9QvoxvyT4sBtlXUH6RRzgjk.svg\"},\"chat_instance\":\"7707409107233608820\",\"chat_type\":\"private\",\"auth_date\":\"1739133628\",\"signature\":\"3cMXn0JTqc-nrpwyrrMF8wL9imzTkQRKMfxICHfI7tZU30bAEpsMfM65ILkF3LOhX2ji0AgUcKd9UiK0k07QAw\",\"hash\":\"7d3dfbc425dcd0892c95cac5641225e51ee5b1be9af8a9f46cecba6efc8c0edc\"}")
}

export const useTelegram = () => {
    const tg = (window as unknown as TelegramWindow)

    function shareLink(link: string) {
        try {
            tg.Telegram.WebApp.openTelegramLink(
                `https://t.me/share/url?url=${link}&text=`
            )
        } catch (e) {
            alert(e)
        }
    }

    function openTelegramLink(link: string) {
        try {
            tg.Telegram.WebApp.openTelegramLink(link)
        } catch (e) {
            alert(e)
        }
    }

    function setHeaderColor(color: string) {
        tg.Telegram.WebApp.setHeaderColor(color)
    }

    function expand() {
        try {
            tg.Telegram.WebApp.ready()
            tg.Telegram.WebApp.expand()
        } catch (e) {
            console.log(e)
        }
    }

    function shareToStory(
        url: string,
        params?: {
            widget_link: {
                url: string
                name: string
            }
        } 
    ) {
        try {
            tg.Telegram.WebApp.shareToStory(url, params)
        } catch (e) {
            alert(e)
        }
    }

    function haptic() {
        try {
            tg.Telegram.WebApp.HapticFeedback.impactOccurred('light')
        } catch (e) {
            console.log(e)
        }
    }

    function openFullScreen() {
        try {
            tg.Telegram?.WebApp?.requestFullscreen()
            tg.Telegram?.WebApp?.lockOrientation()
        } catch (e) {
            console.log(e)
        }
    }

    const isMobileDevice = useMemo(() => {
        return (
            tg.Telegram.WebApp.platform === 'ios' ||
            tg.Telegram.WebApp.platform === 'androind'
        )
    }, [tg.Telegram.WebApp.platform])

    return {
        isMobileDevice,
        initData: getInitData(),
        initDataUnsafe: getInitDataUnsafe(),
        theme: tg.Telegram.WebApp.colorScheme,
        MainButton: tg.Telegram.WebApp.MainButton,
        BackButton: tg.Telegram.WebApp.BackButton,

        disableVerticalSwipes: tg.Telegram.WebApp.disableVerticalSwipes,
        expand,
        haptic,
        shareLink,
        setHeaderColor,
        shareToStory,
        openTelegramLink,
        openFullScreen,
    }
}