import {configureStore} from "@reduxjs/toolkit";
import {weatherSlice} from "./weaterSlice";

export const store = configureStore({
    reducer: {
        weather: weatherSlice.reducer
    },
})

export type IRootState = ReturnType<typeof store.getState>
