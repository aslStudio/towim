import { ResponseDefault } from "@/shared/lib/types"

export type AuthParams = {
    init_data: Record<string, string>
}
export type AuthResponse = {
    access_token: string
}