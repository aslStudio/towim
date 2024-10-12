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
    PROFILE = '/profile',
    PERFORMER = '/performer/:id',
    FORTUNE = '/fortune'
}

export enum Category {
    Designers,
    ContentCreators,
    GamersStreamers
}

export const mapCategory: Record<Category, string> = {
    [Category.Designers]: 'Designers',
    [Category.ContentCreators]: 'Content Creators',
    [Category.GamersStreamers]: 'Gamers & Streamers',
}