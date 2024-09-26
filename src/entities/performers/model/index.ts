import { categoryModule, Category } from './categories'
import { listModule, Founder } from './list'
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
}

export {
    Category,
    type Founder,
}