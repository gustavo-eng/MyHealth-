import { createSlice } from "@reduxjs/toolkit";

// valor inicial do estado global longin
const initialValues = {
    email: null,
    password: null,
}


export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    // dentro de reducers --> PODERA CONTER VARIAS FUNCOES DE ATRIBUICOES, ALEM DESSA JA PROGRAMADA
    reducers: { //recebe uma acao, deve tratar o que deve ser feito 
     // por incrementar um valor , ou alterar um valor !    
     // action contem as informacoes do que o user quer fazer 
        reducerSetLogin: (state, action) => {
            // payload sao os parametros q
            // minha action contem 
            state.email = action.payload.email 
            state.password = action.payload.password  
        } 
    }
})


export const {reducerSetLogin} = loginSlice.actions

/* 
quem definiu o actions, foi a funcao createSlice! 
inerente ao createSlice, ela mesmo cria a propriedade actions! 
*/

export default loginSlice.reducer
 