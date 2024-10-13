export type AuthParams = {
    init_data: Record<string, string>
}
export type AuthResponse = {
    id: number
    access_token: string
    name: string
    bio: string
    avatar: string
    isVerified: boolean
    isFilledProfile: boolean
    isPublishedProfile: boolean
}