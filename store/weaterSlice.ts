import {createSlice} from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        temperature: 0,
    },
    reducers: {
        fetchData: (state, action) => {

        }
    }
})

export const { fetchData } = weatherSlice.actions;
export default weatherSlice.reducer;
