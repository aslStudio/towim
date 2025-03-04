import {createStore, sample} from "effector";
import {createEffect} from "effector/effector.umd";
import {performersApi} from "@/shared/api";
import { useUnit } from 'effector-react';
import {Category} from "@/shared/lib/types";
import {ResponseDefault} from "@/shared/lib/api/createRequest";
import {GetPerformersResponse} from "@/shared/api/performers/types";

export type Founder = {
    id: number
    likes: number
    avatar: string
    name: string
    category: Category
    bio: string
    isVerified: boolean
    stars: number
}

const fetchFx = createEffect(performersApi.fetch)

const $isLoading = fetchFx.pending
const $list = createStore<Founder[]>([])

sample({
    clock: fetchFx.doneData,
    fn: data => toDomain(data),
    target: $list,
})

const useList = () => ({
    isLoading: useUnit($isLoading),
    list: useUnit($list)
})

export const listModule = {
    $list,
    fetchFx,
    useList,
}

function toDomain(data: ResponseDefault<GetPerformersResponse>): Founder[] {
    if (!data.payload?.list) {
        return []
    }

    return data.payload.list.map(item => ({
        id: item.id,
        name: item.name,
        likes: item.likes,
        avatar: item.avatar,
        bio: item.avatar,
        category: item.categories[0],
        isVerified: item.is_verified,
        stars: item.coins,
    }))
}