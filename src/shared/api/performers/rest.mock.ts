import {Category, SocialType} from '@/shared/lib/types'
import {GetExpandPerformerParams, GetExpandPerformerResponse, GetPerformersParams, GetPerformersResponse} from './types'
import {getRandomInt} from "@/shared/lib/number";
import {ResponseDefault} from "@/shared/lib/api/createRequest";

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
                    about: 'Star, Founder & indie maker, Star, Founder & indie maker',
                    categories: [getRandomInt(0, 2)] as Category[],
                    coins: getRandomInt(1, 100),
                    is_verified: Boolean(getRandomInt(0, 1)),
                    is_major: false,
                }))
            }
        }
    },
    fetchExpand: async (data: GetExpandPerformerParams): Promise<ResponseDefault<GetExpandPerformerResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        return {
            error: false,
            payload: {
                id: data.id,
                avatar: 'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                name: 'Anton',
                isVerified: Boolean(getRandomInt(0, 1)),
                categories: Array(getRandomInt(1, 4)).fill(1).map(() => getRandomInt(0, 2) as Category) as Category[],
                likes: getRandomInt(1, 100),
                views: getRandomInt(1, 100),
                xs: getRandomInt(1, 100),
                about: 'about about about about about',
                projects: 'projects',
                skills: 'skills skills',
                workExperience: '2017-2018 - ewqewqe',
                nfts: [
                    'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                    'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                    'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                    'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                    'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                ],
                links: [
                    {
                        type: SocialType.Telegram,
                        link: 'https://test.com',
                        username: '@test',
                    },
                    {
                        type: SocialType.Instagram,
                        link: 'https://test.com',
                        username: '@test',
                    }
                ],
            }
        }
    }
}