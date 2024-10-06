export type ResponseDefault<T> = {
    error: boolean
    payload: T
}

export enum SocialType {
    Telegram = 'telegram',
    Instagram = 'instagram',
}

export enum RouterPathes {
    AUTH = '/',
    MAIN = '/main',
    NETWORKING = '/networking',
    PROFILE = '/profile'
}