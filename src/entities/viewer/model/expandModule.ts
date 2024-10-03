import { reducers } from "@/shared/lib/reducers"
import { SocialType } from "@/shared/lib/types"
import { createEvent, createStore } from "effector"

export type ExpandViewer = {
    likes: number
    views: number
    xs: number
    about: string
    projects: string
    skills: string
    workExperience: string
    nfts: string[]
    links: {
        type: SocialType,
        link: string
    }[]
}

const expandViewerUpdated = createEvent<ExpandViewer>()
const reset = createEvent()

const $expandViewer = createStore<ExpandViewer>({
    likes: 0,
    views: 0,
    xs: 0,
    about: '',
    projects: '',
    skills: '',
    workExperience: '',
    nfts: [],
    links: [],
})
    .on(expandViewerUpdated, reducers.pipe)
    .reset(reset)

export const expandModule = {
    $expandViewer,
}