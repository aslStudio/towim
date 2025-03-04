export type ResponseDefault<T> = {
    error: boolean
    payload: T
}

export enum SocialType {
    Telegram = 'telegram',
    Instagram = 'instagram',
}

export enum RouterPathes {
    MAIN = '/',
    NETWORKING = '/networking',
    PROFILE = '/profile',
    PERFORMER = '/performer/:id',
    FORTUNE = '/fortune',
    GIFTS = '/gifts'
}

export enum Category {
    Designers,
    ContentCreators,
    GamersStreamers
}

export enum PerformerState {
    NonExists = 0,
    Inactive = 1,
    Active = 2
}

export const mapCategory: Record<Category, string> = {
    [Category.Designers]: 'Designers',
    [Category.ContentCreators]: 'Content Creators',
    [Category.GamersStreamers]: 'Gamers & Streamers',
}