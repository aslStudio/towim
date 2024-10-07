import {Category, SocialType} from "@/shared/lib/types";

export type GetPerformersParams = {
    category: number
}

export type GetPerformersResponse = {
    list: {
        id: number
        likes: number
        avatar: string
        name: string
        category: Category
        bio: string
        isVerified: boolean
        stars: number
    }[]
}

export type GetExpandPerformerParams = {
    id: number
}

export type GetExpandPerformerResponse = {
    id: number
    avatar: string
    name: string
    isVerified: boolean
    categories: Category[]
    likes: number
    views: number
    xs: number
    about: string
    projects: string
    skills: string
    workExperience: string
    nfts: string[]
    links: {
        type: SocialType,
        link: string,
        username: string
    }[]
}