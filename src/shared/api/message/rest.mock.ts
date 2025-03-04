import {ResponseDefault} from "@/shared/lib/api/createRequest"

import type {GetLastMessageResponse} from "./types"

export const messageApi = {
    getLastMessage: async (): Promise<ResponseDefault<GetLastMessageResponse>> => {
        return {
            error: false,
            payload: {
                message: 'message',
                sender_id: 1,
            }
        }
    },
    sendLastMessage: async () => {
        return {
            error: false,
            payload: null
        }
    }
}