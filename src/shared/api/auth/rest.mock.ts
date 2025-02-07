import { ResponseDefault } from '@/shared/lib/types'

import { AuthParams, AuthResponse } from './types'

export const authApi = {
    auth: async (_data: AuthParams): Promise<ResponseDefault<AuthResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 5000))

        return {
            error: false,
            payload: {
                result: {
                    jwt: 'jwt'
                }
            }
        }
    }
}