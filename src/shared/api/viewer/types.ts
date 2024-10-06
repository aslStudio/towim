import { SocialType } from "@/shared/lib/types"

export type ViewerResponse = {
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