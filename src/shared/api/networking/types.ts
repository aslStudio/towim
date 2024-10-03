export type NetworkingResponse = {
    chatType: string
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