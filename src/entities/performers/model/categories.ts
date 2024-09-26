import { reducers } from "@/shared/lib/reducers";
import { createEvent, createStore } from "effector";
import { useUnit } from "effector-react";

export enum Category {
    Top,
    Vip,
    Co,
    Designers,
    Test,
    Test1,
}
export const categoriesList = [
    Category.Top,
    Category.Vip,
    Category.Co,
    Category.Designers,
    Category.Test,
    Category.Test1,
]

const categoryUpdated = createEvent<Category>()

const $category = createStore<Category>(Category.Top)
    .on(categoryUpdated, reducers.pipe)

const useCategory = () => ({
    activeCategory: useUnit($category),
    categoryUpdated: useUnit(categoryUpdated),
})

export const categoryModule = {
    $category,
    categoryUpdated,
    useCategory,
}