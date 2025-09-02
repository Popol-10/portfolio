import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: "modal/slice",
    initialState: {
        modalDelete:{
            id: null,
            page: "",
            message: "",
            confirm: false,
            active: false
        },
        modalCreate:{
            active: false,
            page:""
        },
        modalUpdate:{
            active: false,
            data: {} as any,
            page: ""
        },
        modalEditCompte:{
            email:"",
            active: false
        }
    },
    reducers:{
        setModalDelete(state, action){
            state.modalDelete = action.payload
        },
        setModalCreate(state, action){
            state.modalCreate = action.payload
        },
        setModalUpdate(state, action){
            state.modalUpdate = action.payload
        },
        setModalEditCompte(state, action){
            state.modalEditCompte = action.payload
        }
    }
})

export const {
    setModalDelete, 
    setModalCreate,
    setModalUpdate,
    setModalEditCompte
} = ModalSlice.actions