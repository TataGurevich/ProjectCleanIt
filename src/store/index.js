import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cleanersReducer from "./slices/cleanersSlice";
export const store = configureStore({
    reducer: {
        user: userReducer,
        cleaners: cleanersReducer,
    }
});
