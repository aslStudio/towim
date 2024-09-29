import { reducers } from "@/shared/lib/reducers"
import { createEvent, createStore } from "effector"

export type ShortViewer = {
    name: string
    bio: string
    avatar: string
    isVerified: boolean
    isFilledProfile: boolean
    isPublishedProfile: boolean
}

const mock: ShortViewer = {
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

$shortViewer.watch(console.log)

export const shortModule = {
    $shortViewer,
    shortViewerUpdated,
}
    
    