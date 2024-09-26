import { Category } from './categories'
import {createStore, sample} from "effector";
import {createEffect} from "effector/effector.umd";
import {performersApi} from "@/shared/api";

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

const $list = createStore<Founder[]>([])

sample({
    clock: fetchFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload.list,
    target: $list,
})

export const listModule = {
    $list,
    fetchFx,
}