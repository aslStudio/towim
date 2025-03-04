import { ResponseDefault } from '@/shared/lib/types'

import {AuthParams, AuthResponse, GetBonusesResponse} from './types'

export const authApi = {
    auth: async (_data: AuthParams): Promise<ResponseDefault<AuthResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        return {
            error: false,
            payload: {
                result: {
                    jwt: 'jwt'
                }
            }
        }
    },
    getBonuses: async (): Promise<ResponseDefault<GetBonusesResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        return {
            error: false,
            payload: {
                rewards: 100,
            }
        }
    }
}