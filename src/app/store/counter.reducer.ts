import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

// Initial State
export const initialState = 0;

// Creating Reducer Function
export const reducer = createReducer(
    initialState,

    // on Increment Action
    on(increment, (state)=> state + 1),

    // on Decrement Action
    on(decrement, (state)=> state - 1),

    // on Reset Action
    on(reset, ()=> initialState)
)
