import { configureStore } from "@reduxjs/toolkit";
import apiReducer from '../src/state-management/appSlice'

export const store = configureStore({
    reducer: {
        apiData: apiReducer
    }
})

