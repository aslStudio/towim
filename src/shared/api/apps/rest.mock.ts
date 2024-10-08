import { ResponseDefault } from '@/shared/lib/types'
import { GetAppsResponse } from './types'
import { getRandomInt } from '@/shared/lib/number'

export const appsApi = {
    fetch: async (): Promise<ResponseDefault<GetAppsResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        return {
            error: false,
            payload: {
                list: Array(10).fill(1).map((_, key) => ({
                    id: key + 1,
                    img: 'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                    isNew: Boolean(getRandomInt(0, 1)),
                    name: 'Towim',
                    description: 'Description',
                    starts: getRandomInt(100, 1_000_000),
                    link: 'https://t.me/towimbot',
                }))
            }
        }
    }
}