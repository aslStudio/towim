import { ResponseDefault } from '@/shared/lib/types'
import { GetPerformersParams, GetPerformersResponse } from './types'
import {getRandomInt} from "@/shared/lib/number";
import {Category} from "@/entities/performers/model/categories";

export const performersApi = {
    fetch: async (_data: GetPerformersParams): Promise<ResponseDefault<GetPerformersResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        return {
            error: false,
            payload: {
                list: Array(10).fill(1).map((_, key) => ({
                    id: key + 1,
                    likes: getRandomInt(1, 100),
                    avatar: 'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                    name: 'Anton',
                    bio: 'Star, Founder & indie maker, Star, Founder & indie maker',
                    category: getRandomInt(3, 5) as Category,
                    stars: getRandomInt(1, 100),
                    isVerified: Boolean(getRandomInt(0, 1))
                }))
            }
        }
    }
}