import { performers } from "@/entities/performers/model";
import { createEvent, createStore, sample } from "effector";

const $activeId = createStore<number>(0)

const activeIndexUpdated = createEvent<number>()
const likeSended = createEvent<number>()
const dislikeSended = createEvent<number>()
const boostSended = createEvent<number>()

sample({
    source: performers.listModule.$list,
    clock: activeIndexUpdated,
    fn: (list, index) => list[index] ? list[index].id : 0,
    target: $activeId
})

export const performesReactionModel = {
    activeIndexUpdated,
    likeSended,
    dislikeSended,
    boostSended
}