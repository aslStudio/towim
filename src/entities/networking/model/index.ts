import { networkingApi } from "@/shared/api";
import { reducers } from "@/shared/lib/reducers";
import { Category } from "@/shared/lib/types";
import { createEffect, createEvent, createStore, sample } from "effector";

export type NetworkingUserItem = {
    id: number
    name: string
    avatar: string
}

const networkingRequested = createEvent()

const fetchFx = createEffect(networkingApi.fetch)

const $isLoading = createStore(true)
    .on(networkingRequested, reducers.enabled)
    .on(fetchFx.doneData, reducers.disabled)

const $list = createStore<{
    type: Category
    url: string
}[]>([])
const $incoming = createStore<NetworkingUserItem[]>([])
const $outgoing = createStore<NetworkingUserItem[]>([])
const $whiteList = createStore<NetworkingUserItem[]>([])

sample({
    clock: networkingRequested,
    target: fetchFx,
})

sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload.incoming,
    target: $incoming,
})

sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload.outgoing,
    target: $outgoing,
})

sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload.whiteList,
    target: $whiteList,
})

sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload.chats,
    target: $list,
})

export const networkingModel = {
    $isLoading,

    $incoming,
    $outgoing,
    $whiteList,
    $list,

    networkingRequested
}