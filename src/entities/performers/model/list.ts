import { Category } from './categories'
import {createStore, sample} from "effector";
import {createEffect} from "effector/effector.umd";
import {performersApi} from "@/shared/api";
import { useUnit } from 'effector-react';

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
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload.list,
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