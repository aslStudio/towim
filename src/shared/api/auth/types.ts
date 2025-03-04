export type AuthParams = {
    init_data: string
}
export type AuthResponse = {
    result: {
        jwt: string
    }
}

export type GetBonusesResponse = {
    rewards: number
}