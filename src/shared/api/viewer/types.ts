import {Category, SocialType} from "@/shared/lib/types"

export type ViewerResponse = {
    categories: Category[]
    likes: number
    views: number
    xs: number
    about: string
    projects: string
    skills: string
    workExperience: string
    nfts: string[]
    nftLink: string
    links: {
        type: SocialType,
        link: string,
        username: string
    }[]
}