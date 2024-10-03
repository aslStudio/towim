import { networkingApi } from "@/shared/api";
import { createEffect, createEvent, createStore, sample } from "effector";

export type NetworkingUserItem = {
    id: number
    name: string
    avatar: string
}

const networkingRequested = createEvent()

const fetchFx = createEffect(networkingApi.fetch)

const $isLoading = fetchFx.pending

const $description = createStore<string>('')
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
    fn: ({ payload }) => payload.chatType,
    target: $description,
})

export const networkingModel = {
    $isLoading,
    
    $incoming,
    $outgoing,
    $whiteList,
    $description,

    networkingRequested
}