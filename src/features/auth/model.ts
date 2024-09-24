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
    fn: payload => payload.payload.access_token,
    target: [jwtModel.setJWTFx, onSuccess.trigger],
})

sample({
    clock: authFx.doneData,
    fn: ({ payload }) => payload,
    target: viewerModel.shortModule.shortViewerUpdated,
})

export const authModel = {
    onSuccess,
    authorizeStarted,
}