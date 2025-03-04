import {Category, PerformerState, SocialType} from "@/shared/lib/types"

export type ViewerResponse = {
    state: PerformerState
    info: {
        avatar: string
        title: string
        name: string
        is_verified: boolean
        categories: Category[]
        coins: number
        likes: number
        views: number
        about: string
        projects: string
        skills: string
        experience: string
        nfts: string[]
        socials: {
            id: number
            performer_id: number
            type: SocialType
            username: string
        }[]
        is_disliked: boolean
        is_major: boolean
    }
}

export type UpdateViewerParams = {
    category: Category
    about: string
    projects: string
    skills: string
    experience: string
    notifications: boolean
    links: {
        type: SocialType
        username: string
    }
}