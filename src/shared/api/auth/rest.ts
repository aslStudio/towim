import {createRequest, ResponseDefault} from "@/shared/lib/api/createRequest"

import type { AuthParams, AuthResponse } from './types'

const IS_DEV = true

export const authApi = {
    auth: async (data: AuthParams): Promise<ResponseDefault<AuthResponse>> => {
        if (IS_DEV) {
            return {
                error: false,
                payload: {
                    result: {
                        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMwMzAwNzUxIiwiZXhwIjoxNzM5NDM4MDUxLCJpc3MiOiJUb3dpbUF1dGhQcm92aWRlciJ9.zYX7W_fML8VNrjOAGEpNL6I4cnNUqeUfonljsHb3gQo'
                    }
                }
            }
        }

        return await createRequest<AuthResponse>({
            url: 'auth/checkInitData',
            method: 'POST',
            data: {
                init_data: data.init_data,
                inviter_id: 0,
            },
        })
    }
}