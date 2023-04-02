import {createSlice} from "@reduxjs/toolkit";
import {cleaners} from "../../Constants/constants";

const cleanersSlice = createSlice({
    name: 'employees',
    initialState: cleaners,
    reducers: {
        setCleaners(state, action) {
            state = [...action.payload]
            return state
        }
    }
})

export default cleanersSlice.reducer
export const {setCleaners} = cleanersSlice.actions