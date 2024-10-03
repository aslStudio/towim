export type ResponseDefault<T> = {
    error: boolean
    payload: T
}

export enum SocialType {
    Telegram = 'telegram',
    Instagram = 'instagram',
}