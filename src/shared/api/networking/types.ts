import { Category } from "@/shared/lib/types"

export type NetworkingResponse = {
    chats: {
        type: Category
        url: string
    }[],
    incoming: {
        id: number
        name: string
        avatar: string
    }[]
    outgoing: {
        id: number
        name: string
        avatar: string
    }[]
    whiteList: {
        id: number
        name: string
        avatar: string
    }[]
}