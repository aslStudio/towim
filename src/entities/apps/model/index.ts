import { appsApi } from "@/shared/api/apps"
import { GetAppsResponse } from "@/shared/api/apps/types"
import { reducers } from "@/shared/lib/reducers"
import { ResponseDefault } from "@/shared/lib/types"
import { createEffect, createEvent, createStore, sample } from "effector"
import { useUnit } from "effector-react"

export type App = {
    id: number
    img: string
    isNew: boolean
    isCrown: boolean,
    name: string
    description: string
    starts: number
    link: string
}

const fetchFx = createEffect(appsApi.fetch)

const listUpdated = createEvent<App[][]>()

const $isLoading = fetchFx.pending
const $list = createStore<App[][]>([])
    .on(listUpdated, reducers.pipe)

sample({
    clock: fetchFx.doneData,
    fn: toDomain,
    target: listUpdated,
})

const useApps = () => ({
    list: useUnit($list),
    isLoading: useUnit($isLoading),
    fetch: fetchFx,
})

export const appsModel = {
    useApps
}

function toDomain(data: ResponseDefault<GetAppsResponse>) {
    if (data.error) {
        return []
    }

    return data.payload.list.reduce((prev, curr, index) => {
        if (
            prev[prev.length - 1] && 
            prev[prev.length - 1].length < 3
        ) {
            const copy = prev
            copy[prev.length - 1].push({
                ...curr,
                isCrown: index === 0,
            })

            return copy
        }

        return [
            ...prev,
            [
                {
                    ...curr,
                    isCrown: index === 0,
                }
            ]
        ]
    }, [] as App[][])
}