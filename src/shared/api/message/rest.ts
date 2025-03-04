import type {
    GetLastMessageResponse,
    SendMessageParams
} from './types'
import {createRequest, ResponseDefault} from "@/shared/lib/api/createRequest";

export const messageApi = {
    getLastMessage: async (): Promise<ResponseDefault<GetLastMessageResponse>> =>
        createRequest({
            url: 'messages/getLastMessage',
            method: 'GET',
            withAuth: true,
        }),
    sendLastMessage: async (p: SendMessageParams): Promise<ResponseDefault> =>
        createRequest({
            url: 'messages/postFeedMessage',
            method: 'POST',
            withAuth: false,
        })
}