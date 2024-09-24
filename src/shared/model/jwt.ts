import { createEffect } from "effector"

function setJWT(v: string) {
    window.localStorage.setItem('jwt', v)
}

function getJWT() {
    window.localStorage.getItem('jwt')
}

const setJWTFx = createEffect((v: string) => {
    setJWT(v)
})

export const jwtModel = {
    setJWTFx,
    getJWT,
}