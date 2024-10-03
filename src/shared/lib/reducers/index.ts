function pipe<T>(_: unknown, payload: T) {
    return payload
}

function enabled() {
    return true
}

function disabled() {
    return false
}

export const reducers = {
    pipe,
    enabled,
    disabled,
}