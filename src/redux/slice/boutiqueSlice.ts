import { createSlice } from "@reduxjs/toolkit";
import { createBoutique, deleteBoutique, findAllBoutique, findOneBoutique, updateBoutique } from "../asyncThunk/boutiqueThunk";

interface Boutique {
    id: number
    nom: string
    adresse: string
    personne: Person[]
}

export const BoutiqueSlice = createSlice({
    name: "boutique/slice",
    initialState: {
        loading: false,
        allBoutique: {
            status: "find" as string,
            data: [] as Boutique[]
        },
        addBoutique: {
            active: false,
            create_ok: false
        },
        oneBoutique:{
            status: "find",
            data: {} as Boutique
        },
        removeBoutique:{
            delete_ok: false
        },
        majBoutique: {
            update_ok: false
        },
        error:{
            status: false,
            value: "" as string | null | undefined
        }
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(createBoutique.pending, (state) => {
                state.loading = true
            })
            .addCase(createBoutique.fulfilled, (state, action) => {
                state.loading = false,
                state.addBoutique.create_ok = true,
                state.allBoutique.data.push(action.payload)
            })
            .addCase(createBoutique.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findAllBoutique.pending, (state) => {
                state.loading = true
            })
            .addCase(findAllBoutique.fulfilled, (state, action) => {
                state.loading = false,
                state.allBoutique.status = "found",
                state.allBoutique.data = action.payload
            })
            .addCase(findAllBoutique.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findOneBoutique.pending, (state) => {
                state.loading = true
            })
            .addCase(findOneBoutique.fulfilled, (state, action) => {
                state.loading = false,
                state.oneBoutique.status = "found",
                state.oneBoutique.data = action.payload
            })
            .addCase(findOneBoutique.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(deleteBoutique.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteBoutique.fulfilled, (state, action) => {
                state.loading = false,
                state.removeBoutique.delete_ok = true
                state.allBoutique.data = state.allBoutique.data.filter(item => item.id != action.payload.id)
            })
            .addCase(deleteBoutique.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(updateBoutique.pending, (state) => {
                state.loading = true
            })
            .addCase(updateBoutique.fulfilled, (state, action) => {
                state.loading = false,
                state.majBoutique.update_ok = true
                state.allBoutique.data = state.allBoutique.data.map(item => 
                    item.id == action.payload ? action.payload : item
                )
            })
            .addCase(updateBoutique.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
    }

})