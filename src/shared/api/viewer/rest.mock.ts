import {Category, ResponseDefault, SocialType} from '@/shared/lib/types'
import { type ViewerResponse } from './types'

export const viewerApi = {
    fetchExpand: async (): Promise<ResponseDefault<ViewerResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 3000))

        return {
            error: false,
            payload: {
                info: {
                    avatar: 'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                    title: 'title',
                    name: 'name',
                    is_verified: true,
                    categories: [Category.Designers],
                    coins: 100,
                    likes: 100,
                    views: 100,
                    about: 'about about about about about',
                    projects: 'projects',
                    skills: 'skills skills',
                    experience: '2017-2018 - ewqewqe',
                    nfts: [
                        'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                        'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                        'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                        'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                        'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg',
                    ],
                    socials: [
                        {
                            id: 1,
                            performer_id: 1,
                            type: SocialType.Telegram,
                            username: '@test',
                        },
                    ],
                    is_disliked: false,
                    is_major: true,
                },
            }
        }
    }
}