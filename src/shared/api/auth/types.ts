export type AuthParams = {
    init_data: Record<string, string>
}
export type AuthResponse = {
    result: {
        jwt: string
    }
}