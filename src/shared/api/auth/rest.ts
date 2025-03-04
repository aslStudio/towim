import {createRequest, ResponseDefault} from "@/shared/lib/api/createRequest"

import type {
    AuthParams,
    AuthResponse,
    GetBonusesResponse,
} from './types'

export const authApi = {
    auth: async (data: AuthParams): Promise<ResponseDefault<AuthResponse>> => {
        console.log(data.init_data)

        return await createRequest<AuthResponse>({
            url: 'auth/checkInitData',
            method: 'POST',
            data: {
                init_data: data.init_data,
                inviter_id: 0,
            },
        })
    },
    getBonuses: async (): Promise<ResponseDefault<GetBonusesResponse>> =>
        createRequest({
            url: 'auth/checkUserBonuses',
            method: 'POST',
            withAuth: true,
        })
}