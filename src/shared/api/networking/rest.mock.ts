import { ResponseDefault } from '@/shared/lib/types'
import { NetworkingResponse } from './types'

const imgMock = 'https://i.pinimg.com/736x/be/39/7c/be397c91b8026b17f5f8a6ed98e23e9e.jpg'

export const networkingApi = {
    fetch: async (): Promise<ResponseDefault<NetworkingResponse>> => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        return {
            error: false,
            payload: {
                chatType: 'Designers',
                incoming: [
                    {
                        id: 1,
                        name: 'test',
                        avatar: imgMock,
                    },
                    {
                        id: 2,
                        name: 'test 2',
                        avatar: imgMock,
                    },
                    {
                        id: 3,
                        name: 'test 3',
                        avatar: imgMock,
                    },
                    {
                        id: 4,
                        name: 'test 4',
                        avatar: imgMock,
                    },
                    {
                        id: 5,
                        name: 'test 5',
                        avatar: imgMock,
                    },
                    {
                        id: 6,
                        name: 'test 6',
                        avatar: imgMock,
                    }
                ],
                outgoing: [
                    {
                        id: 1,
                        name: 'test',
                        avatar: imgMock,
                    },
                    {
                        id: 2,
                        name: 'test 2',
                        avatar: imgMock,
                    },
                    {
                        id: 3,
                        name: 'test 3',
                        avatar: imgMock,
                    },
                    {
                        id: 4,
                        name: 'test 4',
                        avatar: imgMock,
                    },
                    {
                        id: 5,
                        name: 'test 5',
                        avatar: imgMock,
                    },
                    {
                        id: 6,
                        name: 'test 6',
                        avatar: imgMock,
                    }
                ],
                whiteList: [
                    {
                        id: 1,
                        name: 'test',
                        avatar: imgMock,
                    },
                    {
                        id: 2,
                        name: 'test 2',
                        avatar: imgMock,
                    },
                    {
                        id: 3,
                        name: 'test 3',
                        avatar: imgMock,
                    },
                    {
                        id: 4,
                        name: 'test 4',
                        avatar: imgMock,
                    },
                    {
                        id: 5,
                        name: 'test 5',
                        avatar: imgMock,
                    },
                    {
                        id: 6,
                        name: 'test 6',
                        avatar: imgMock,
                    }
                ]
            }
        }
    }
}