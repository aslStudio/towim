import { ResponseDefault } from '@/shared/lib/types'
import { AuthParams, AuthResponse } from './types'

export const authApi = {
    auth: async (_data: AuthParams): Promise<ResponseDefault<AuthResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 5000))

        return {
            error: false,
            payload: {
                id: 1,
                access_token: 'test-jwt',
                name: 'ceosasha',
                bio: 'Star, Founder & indie maker, Star, Founder & indie maker',
                isVerified: true,
                avatar: 'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                isFilledProfile: true,
                isPublishedProfile: true,
            }
        }
    }
}