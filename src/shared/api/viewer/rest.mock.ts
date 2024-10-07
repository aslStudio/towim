import {Category, ResponseDefault, SocialType} from '@/shared/lib/types'
import { type ViewerResponse } from './types'

export const viewerApi = {
    fetchExpand: async (): Promise<ResponseDefault<ViewerResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 3000))

        return {
            error: false,
            payload: {
                categories: [Category.Designers],
                likes: 100,
                views: 100,
                xs: 100,
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
                nftLink: 'https://test.com',
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