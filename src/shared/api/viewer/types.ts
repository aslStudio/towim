import {Category, SocialType} from "@/shared/lib/types"

export type ViewerResponse = {
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