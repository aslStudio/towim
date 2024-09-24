import { reducers } from "@/shared/lib/reducers";
import { createEvent, createStore } from "effector";

export enum Category {
    Top,
    Vip,
    Co,
    Designers,
    Test,
    Test1,
}

const categoryUpdated = createEvent<Category>()

const $category = createStore<Category>(Category.Top)
    .on(categoryUpdated, reducers.pipe)

export const categoryModule = {
    $category,
    categoryUpdated,
}