import {Category} from "@/entities/performers/model/categories";

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