import { reducers } from "@/shared/lib/reducers";
import { createEvent, createStore } from "effector";

const nameUpdated = createEvent<string>()
const descriptionUpdated = createEvent<string>()
const linkUpdated = createEvent<string>()
const fileUpdated = createEvent<string>()
const reset = createEvent()

const $name = createStore('')
    .on(nameUpdated, reducers.pipe)
    .reset(reset)
const $description = createStore('')
    .on(descriptionUpdated, reducers.pipe)
    .reset(reset)
const $link = createStore('')
    .on(linkUpdated, reducers.pipe)
    .reset(reset)
const $file = createStore('')
    .on(fileUpdated, reducers.pipe)
    .reset(reset)

export const createAppModel = {
    $name,
    $description,
    $link,
    $file,

    nameUpdated,
    descriptionUpdated,
    linkUpdated,
    fileUpdated,
    reset,
}