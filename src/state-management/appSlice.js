import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    dataFromApi: [],
    dataToDisplay: [],
}

export const apiDataSlice = createSlice({
    name: 'apiData',
    initialState,
    reducers: {
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload
        },
        setDataFromApi: (state, { payload }) => {
            state.dataFromApi = payload
        },
        setDataToDisplay: (state, { payload }) => {
            state.dataToDisplay = payload
        },
        deleteData: (state, { payload }) => {
            state.dataFromApi.pop()
            state.dataToDisplay = state.dataFromApi
        },
        addData: (state, { payload }) => {
            state.dataFromApi.push(state.dataFromApi[0])
            state.dataToDisplay = state.dataFromApi
        }
    }
})

const { reducer, actions } = apiDataSlice

export const { setIsLoading, setDataFromApi, setDataToDisplay, deleteData, addData } = actions
export default reducer