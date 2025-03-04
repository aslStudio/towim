import {Category, SocialType} from "@/shared/lib/types";
import {createEffect, createEvent, createStore, sample} from "effector";
import {performersApi} from "@/shared/api";
import {reducers} from "@/shared/lib/reducers";
import {ResponseDefault} from "@/shared/lib/api/createRequest";
import {GetExpandPerformerResponse} from "@/shared/api/performers/types";

export type ExpandPerformer = {
    id: number
    avatar: string
    name: string,
    isVerified: boolean
    categories: Category[]
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

const fetchPerformerFx = createEffect(performersApi.fetchExpand)

const performerRequested = createEvent<number>()

const $isLoading = createStore(true)
    .on(fetchPerformerFx, reducers.enabled)
    .on(fetchPerformerFx.doneData, (_, { error }) => error)

const $pool = createStore<Record<number, ExpandPerformer>>({})
const $active = createStore<ExpandPerformer>({
    id: 0,
    avatar: '',
    name: '',
    isVerified: false,
    categories: [],
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

sample({
    source: $pool,
    clock: performerRequested,
    filter: (pool, id) => !!pool[id],
    fn: (pool, id) => pool[id],
    target: $active,
})

sample({
    source: $pool,
    clock: performerRequested,
    filter: (pool, id) => !pool[id],
    fn: (_, id) => ({
        id
    }),
    target: fetchPerformerFx,
})

sample({
    clock: fetchPerformerFx.doneData,
    filter: ({ error }) => !error,
    fn: toDomain,
    target: $active,
})

export const poolModule = {
    $active,
    $isLoading,

    performerRequested,
}

function toDomain(data: ResponseDefault<GetExpandPerformerResponse>): ExpandPerformer {
    return {
        id: data.payload!.id,
        avatar: data.payload!.avatar,
        name: data.payload!.name,
        isVerified: data.payload!.isVerified,
        categories: data.payload!.categories,
        likes: data.payload!.likes,
        views: data.payload!.views,
        xs: data.payload!.xs,
        about: data.payload!.about,
        projects: data.payload!.projects,
        skills: data.payload!.skills,
        workExperience: data.payload!.workExperience,
        nfts: data.payload!.nfts,
        links: data.payload!.links,
    }
}