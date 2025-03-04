import {viewerApi} from "@/shared/api/viewer"
import {reducers} from "@/shared/lib/reducers"
import {Category, PerformerState, SocialType} from "@/shared/lib/types"
import {createEffect, createEvent, createStore, sample} from "effector"
import {UpdateViewerParams, ViewerResponse} from "@/shared/api/viewer/types";
import {getInitDataUnsafe} from "@/shared/lib/hooks/useTelegram";

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
const updateFx = createEffect(viewerApi.updateExpand)

const viewerUpdatingTriggered = createEvent()
const changeEditableStatus = createEvent<boolean>()
const editableStatusChanged = createEvent<boolean>()
const expandViewerUpdated = createEvent<ExpandViewer>()
const reset = createEvent()

const $isEditable = createStore(false)
    .on(editableStatusChanged, (_, payload) => payload)
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
    links: [
        {
            type: SocialType.Instagram,
            username: '',
            link: '',
        },
        {
            type: SocialType.Telegram,
            username: '',
            link: '',
        },
    ],
})
    .on(expandViewerUpdated, reducers.pipe)
    .reset(reset)

sample({
    clock: fetchFx.doneData,
    fn: ({ payload }) => toDomain(payload),
    target: expandViewerUpdated,
})

sample({
    clock: changeEditableStatus,
    filter: isEditable => !!isEditable,
    target: editableStatusChanged
})

sample({
    clock: changeEditableStatus,
    filter: isEditable => {
        console.log('!!isEditable', !isEditable)
        return !isEditable
    },
    target: viewerUpdatingTriggered,
})

sample({
    source: $expandViewer,
    clock: viewerUpdatingTriggered,
    fn: viewer => ({
        category: viewer.categories[0],
        about: viewer.about,
        projects: viewer.projects,
        skills: viewer.skills,
        experience: viewer.workExperience,
        notifications: false,
        // links: viewer.links.reduce((prev, curr) => {
        //     return [
        //         ...prev,
        //         {
        //             type: curr.type,
        //             username: curr.username,
        //         }
        //     ]
        // }, [] as UpdateViewerParams['links'])
        links: {
            type: SocialType.Telegram,
            username: 'username'
        }
    }),
    target: updateFx,
})

sample({
    clock: updateFx.doneData,
    filter: ({ error }) => !error,
    fn: () => false,
    target: editableStatusChanged,
})

export const expandModule = {
    $expandViewer,

    $isLoading,
    $isEditable,

    fetchFx,
    expandViewerUpdated,
    changeEditableStatus,
}

function toDomain(data: ViewerResponse | null): ExpandViewer {
    if (data && 'info' in data) {
        return {
            name: data.info.name,
            bio: data.info.about,
            avatar: data.info.avatar,
            isVerified: data.info.is_verified,
            isFilledProfile: data.state !== PerformerState.NonExists,
            isPublishedProfile: data.state === PerformerState.Active,
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

    const tgData = getInitDataUnsafe()

    return {
        name: tgData.user.username,
        bio: '',
        avatar: tgData.user.photo_url,
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
        links: [
            {
                type: SocialType.Instagram,
                username: '',
                link: '',
            },
            {
                type: SocialType.Telegram,
                username: '',
                link: '',
            },
        ],
    }
}