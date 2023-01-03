import { createSlice } from "@reduxjs/toolkit";
import { create } from "react-test-renderer";

// para cada estado global,
// precisa criar um arquivo slice 

// testando com o nome da vacina e dose

const initialValues = {
    vacina: null,
    dose: null,
}

export const vacinaSlice = createSlice({
    name: 'vacina', 
    initialState: initialValues,
    reducers: {
        reducerSetVacina: (state, action) => {
            state.vacina = action.payload.vacina
            state.dose = action.payload.dose
        }
    }
})


export const {reducerSetVacina} = vacinaSlice.actions

export default vacinaSlice.reducer



