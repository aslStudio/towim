import { viewerApi } from "@/shared/api/viewer"
import { reducers } from "@/shared/lib/reducers"
import { SocialType } from "@/shared/lib/types"
import { createEffect, createEvent, createStore, sample } from "effector"

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
        link: string,
        username: string
    }[]
}

const fetchFx = createEffect(viewerApi.fetchExpand)

const changeEditableStatus = createEvent()
const expandViewerUpdated = createEvent<ExpandViewer>()
const reset = createEvent()

const $isEditable = createStore(false)
    .on(changeEditableStatus, state => !state)
    .reset(reset)
const $isLoading = createStore(true)
    .on(fetchFx, reducers.enabled)
    .on(fetchFx.doneData, reducers.disabled)

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

sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload,
    target: expandViewerUpdated,
})

export const expandModule = {
    $expandViewer,

    $isLoading,
    $isEditable,

    fetchFx,
    expandViewerUpdated,
    changeEditableStatus,
}