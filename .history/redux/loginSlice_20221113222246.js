import { createSlice } from "@reduxjs/toolkit";

// valor inicial do estado global longin
const initialValues = {
    email: null,
    password: null,
}


export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues
    reducers: { //recebe uma acao, deve tratar o que deve ser feito 
     // por incrementar um valor , ou alterar um valor ! 
        
    }
})