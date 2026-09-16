import { createAction } from "@ngrx/store"

// Increment Action
export const increment = createAction(
    '[Counter] Increment'
)

// Increment Action
export const decrement = createAction(
    '[Counter] Decrement'
)


// Reset Action
export const reset = createAction(
    '[Counter] Reset'
)
