export type GetAppsResponse = {
    list: {
        id: number
        img: string
        isNew: boolean
        name: string
        description: string
        starts: number
        link: string
    }[]
}