import { reducers } from "@/shared/lib/reducers"
import { createEvent, createStore } from "effector"

export type ShortViewer = {
    id: number
    name: string
    bio: string
    avatar: string
    isVerified: boolean
    isFilledProfile: boolean
    isPublishedProfile: boolean
}

const mock: ShortViewer = {
    id: 1,
    name: '',
    bio: '',
    avatar: '',
    isVerified: false,
    isFilledProfile: false,
    isPublishedProfile: false
}

const shortViewerUpdated = createEvent<ShortViewer>()
const reset = createEvent()

const $shortViewer = createStore<ShortViewer>(mock)
    .on(shortViewerUpdated, reducers.pipe)
    .reset(reset)

export const shortModule = {
    $shortViewer,
    shortViewerUpdated,
}
    
    