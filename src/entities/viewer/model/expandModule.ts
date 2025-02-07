import { viewerApi } from "@/shared/api/viewer"
import { reducers } from "@/shared/lib/reducers"
import {Category, SocialType} from "@/shared/lib/types"
import { createEffect, createEvent, createStore, sample } from "effector"
import {GetExpandPerformerResponse} from "@/shared/api/performers/types";
import {ViewerResponse} from "@/shared/api/viewer/types";

export type ExpandViewer = {
    name: string
    bio: string
    avatar: string
    isVerified: boolean
    isFilledProfile: boolean
    isPublishedProfile: boolean
    categories: Category[]
    likes: number
    views: number
    coins: number
    about: string
    projects: string
    skills: string
    workExperience: string
    nftLink: string
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
    name: '',
    bio: '',
    avatar: '',
    isVerified: false,
    isFilledProfile: false,
    isPublishedProfile: false,
    categories: [],
    likes: 0,
    views: 0,
    coins: 0,
    about: '',
    projects: '',
    skills: '',
    workExperience: '',
    nftLink: '',
    nfts: [],
    links: [],
})
    .on(expandViewerUpdated, reducers.pipe)
    .reset(reset)

sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => toDomain(payload),
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

function toDomain(data: ViewerResponse): ExpandViewer {
    return {
        name: data.info.name,
        bio: data.info.about,
        avatar: data.info.avatar,
        isVerified: data.info.is_verified,
        isFilledProfile: true,
        isPublishedProfile: true,
        categories: data.info.categories,
        likes: data.info.likes,
        views: data.info.views,
        coins: data.info.coins,
        about: data.info.about,
        projects: data.info.projects,
        skills: data.info.skills,
        workExperience: data.info.experience,
        nftLink: '',
        nfts: data.info.nfts,
        links: data.info.socials.map(item => ({
            type: item.type,
            username: item.username,
            link: item.username,
        })),
    }
}