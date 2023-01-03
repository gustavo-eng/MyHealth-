import { createSlice } from "@reduxjs/toolkit";
import { create } from "react-test-renderer";



const initialValues = {
    vacina: null,
    dose: null,
    urlImage: null,
    data: null,
    proximaData: null,
}

export const vacinaSlice = createSlice({
    name: 'vacina', 
    initialState: initialValues,
    reducers: {
        reducerSetVacina: (state, action) => {
            state.vacina = action.payload.vacina
            state.dose = action.payload.dose
            state.urlImage = action.payload.urlImage
            state.data = action.payload.data
            state.proximaData = action.payload.proximaData
        }
    }
})


export const {reducerSetVacina} = vacinaSlice.actions

export default vacinaSlice.reducer



