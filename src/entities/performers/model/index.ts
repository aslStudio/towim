import { categoryModule, Category, categoriesList } from './categories'
import { listModule, Founder } from './list'
import { poolModule, type ExpandPerformer } from './pool'
import {sample} from "effector";

sample({
    clock: categoryModule.categoryUpdated,
    fn: newCategory => ({
        category: newCategory
    }),
    target: listModule.fetchFx,
})

export const performers = {
    categoryModule,
    listModule,
    poolModule,
}

export {
    categoriesList,
    Category,
    type Founder,
    type ExpandPerformer,
}