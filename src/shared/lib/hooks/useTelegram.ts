import { useMemo } from "react";

type TelegramWindow = {
    Telegram: {
        WebApp: {
            expand: () => void
            ready: () => void
            openTelegramLink: (data: string) => void
            setHeaderColor: (color: string) => void
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
            initData: Record<string, string>,
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
                }) => void
            }
        },
        authData: {
            user?: {
                id: string
            }
        }
    }
}

export const useTelegram = () => {
    const tg = (window as unknown as TelegramWindow)

    function sendInviteLink(link: string) {
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

    const isMobileDevice = useMemo(() => {
        return (
            tg.Telegram.WebApp.platform === 'ios' ||
            tg.Telegram.WebApp.platform === 'androind'
        )
    }, [tg.Telegram.WebApp.platform])

    return {
        isMobileDevice,
        initData: tg.Telegram.WebApp.initData,
        theme: tg.Telegram.WebApp.colorScheme,
        MainButton: tg.Telegram.WebApp.MainButton,

        expand,
        haptic,
        sendInviteLink,
        setHeaderColor,
        shareToStory,
        openTelegramLink,
    }
}