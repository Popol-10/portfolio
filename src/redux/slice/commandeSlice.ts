import { createSlice } from "@reduxjs/toolkit";
import { createCommande, deleteCommande, findAllCommande, findOneCommande, updateCommande } from "../asyncThunk/commandThunk";


export const CommandeSlice = createSlice({
    name: "command/slice",
    initialState: {
        loading: false,
        allCommande: {
            status: "find" as string,
            data: [] as Commande[]
        },
        addCommande: {
            active: false,
            create_ok: false
        },
        oneCommande:{
            status: "find",
            data: {} as Commande
        },
        removeCommande:{
            delete_ok: false
        },
        majCommande: {
            update_ok: false
        },
        error:{
            status: false,
            value: "" as string | null | undefined
        }
    },
    reducers:{
        setCleanCommande(state){
            state.addCommande.create_ok = false
            state.removeCommande.delete_ok = false
            state.majCommande.update_ok = false
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(createCommande.pending, (state) => {
                state.loading = true
            })
            .addCase(createCommande.fulfilled, (state, action) => {
                state.loading = false,
                state.addCommande.create_ok = true,
                state.allCommande.data.push(action.payload)
            })
            .addCase(createCommande.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findAllCommande.pending, (state) => {
                state.loading = true
            })
            .addCase(findAllCommande.fulfilled, (state, action) => {
                state.loading = false,
                state.allCommande.status = "found",
                state.allCommande.data = action.payload
            })
            .addCase(findAllCommande.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findOneCommande.pending, (state) => {
                state.loading = true
            })
            .addCase(findOneCommande.fulfilled, (state, action) => {
                state.loading = false,
                state.oneCommande.status = "found",
                state.oneCommande.data = action.payload
            })
            .addCase(findOneCommande.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(deleteCommande.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteCommande.fulfilled, (state, action) => {
                state.loading = false,
                state.removeCommande.delete_ok = true
                state.allCommande.data = state.allCommande.data.filter(item => item.id != action.payload.id)
            })
            .addCase(deleteCommande.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(updateCommande.pending, (state) => {
                state.loading = true
            })
            .addCase(updateCommande.fulfilled, (state, action) => {
                state.loading = false,
                state.majCommande.update_ok = true
                state.allCommande.data = state.allCommande.data.map(item => 
                    item.id == action.payload ? action.payload : item
                )
            })
            .addCase(updateCommande.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
    }
})

export const {setCleanCommande} = CommandeSlice.actions