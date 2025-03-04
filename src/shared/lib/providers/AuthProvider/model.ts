// TODO: auth, get bonus, get viewer, last message,

import {createEffect, createEvent, createStore, sample} from "effector"

import {viewerModel} from "@/entities/viewer"

import {authApi} from "@/shared/api"
import {getInitData} from "@/shared/lib/hooks/useTelegram";
import {jwtModel} from "@/shared/model"
import {AuthParams} from "@/shared/api/auth"
import {messageApi} from "@/shared/api/message";

const authFx = createEffect(authApi.auth)
const getLastMessageFx = createEffect(messageApi.getLastMessage)
const getBonusesFx = createEffect(authApi.getBonuses)

const sessionStarted = createEvent()

const $isLoading = createStore(true)
const $lastMessage = createStore('')
const $bonus = createStore(0)

sample({
    clock: sessionStarted,
    fn: (): boolean => true,
    target: $isLoading
})

sample({
    clock: getBonusesFx.doneData,
    fn: (): boolean => false,
    target: $isLoading
})

sample({
    clock: sessionStarted,
    fn: (): AuthParams => ({
        init_data: getInitData(),
    }),
    target: authFx
})

sample({
    clock: authFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload!.result.jwt,
    target: jwtModel.setJWTFx,
})

sample({
    clock: jwtModel.setJWTFx.doneData,
    target: viewerModel.expandModule.fetchFx,
})

sample({
    clock: viewerModel.expandModule.fetchFx.doneData,
    target: getLastMessageFx
})

sample({
    clock: getLastMessageFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload!.message,
    target: [$lastMessage, getBonusesFx]
})

sample({
    clock: getLastMessageFx.doneData,
    filter: ({ error }) => !!error,
    target: getBonusesFx,
})

sample({
    clock: getBonusesFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload!.rewards,
    target: $bonus
})

export const complexModel = {
    sessionStarted,

    $isLoading,
    $lastMessage,
    $bonus
}