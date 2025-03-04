import {createRequest, ResponseDefault} from "@/shared/lib/api/createRequest"

import type { ViewerResponse, UpdateViewerParams } from './types'

export const viewerApi = {
    fetchExpand: async () =>
        createRequest<ViewerResponse>({
            url: 'performers/getMyPerformerInfo',
            method: 'GET',
            withAuth: true,
        }),
    updateExpand: async (data: UpdateViewerParams) =>
        createRequest<ResponseDefault>({
            url: 'performers/editPerformer',
            method: 'POST',
            withAuth: true,
            data,
        })
}