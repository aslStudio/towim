import { viewerModel } from "@/entities/viewer/model"
import { authApi } from "@/shared/api"
import { AuthParams } from "@/shared/api/auth/types"
import { effectorHelpers } from "@/shared/lib/effector"
import { jwtModel } from "@/shared/model"
import { createEffect, createEvent, sample } from "effector"

const onSuccess = effectorHelpers.createInstanceStore(() => {})

const authFx = createEffect(authApi.auth)

const authorizeStarted = createEvent<AuthParams>()

sample({
    clock: authorizeStarted,
    target: authFx,
})

sample({
    clock: authFx.doneData,
    filter: ({ error }) => !error,
    fn: ({ payload }) => payload!.result.jwt,
    target: jwtModel.setJWTFx,
})

sample({
    clock: jwtModel.setJWTFx.doneData,
    target: viewerModel.expandModule.fetchFx,
})

sample({
    clock: viewerModel.expandModule.fetchFx.doneData,
    target: onSuccess.trigger
})

export const authModel = {
    onSuccess,
    authorizeStarted,
}