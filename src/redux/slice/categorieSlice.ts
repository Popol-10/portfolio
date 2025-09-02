import { createSlice } from "@reduxjs/toolkit";
import { createCat, deleteCat, findAllCat, findOneCat, updateCat } from "../asyncThunk/categorieThunk";

export const CategorieSlice = createSlice({
    name: "categorie/slice",
    initialState: {
        loading: false,
        allCat: {
            status: "find",
            data: [] as Categorie[]
        },
        oneCat: {
            status: "find",
            data: {} as Categorie
        },
        addCat:{
            create_ok: false
        },
        majCat:{
            update_ok: false
        },
        removeCat:{
            delete_ok: false
        },
        error:{
            status: false,
            value: "" as string | null | undefined
        }
    },
    reducers:{
        setCleanCat(state){
            state.addCat.create_ok = false
            state.removeCat.delete_ok = false
            state.majCat.update_ok = false
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createCat.pending, (state) => {
                state.loading = true
            })
            .addCase(createCat.fulfilled, (state, action) => {
                state.loading = false,
                state.addCat.create_ok = true,
                state.allCat.data.push(action.payload)
            })
            .addCase(createCat.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findAllCat.pending, (state) => {
                state.loading = true
            })
            .addCase(findAllCat.fulfilled, (state, action) => {
                state.loading = false,
                state.allCat.status = "found",
                state.allCat.data = action.payload
            })
            .addCase(findAllCat.rejected, (state, action) => {
                state.loading = true,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findOneCat.pending, (state) => {
                state.loading = true
            })
            .addCase(findOneCat.fulfilled, (state, action) => {
                state.loading = false,
                state.oneCat.status = "found",
                state.oneCat.data = action.payload
            })
            .addCase(findOneCat.rejected, (state, action) => {
                state.loading = true,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(updateCat.pending, (state) => {
                state.loading = true
            })
            .addCase(updateCat.fulfilled, (state, action) => {
                state.loading = false,
                state.majCat.update_ok = true,
                state.allCat.data = state.allCat.data.map(item => 
                    item.id == action.payload.id ? action.payload : item
                )
            })
            .addCase(updateCat.rejected, (state, action) => {
                state.loading = true,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(deleteCat.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteCat.fulfilled, (state, action) => {
                state.loading = false,
                state.removeCat.delete_ok = true,
                state.allCat.data = state.allCat.data.filter(item => item.id != action.payload.id);
            })
            .addCase(deleteCat.rejected, (state, action) => {
                state.loading = true,
                state.error = {status: true, value: action.error.message}
            })
    },
})

export const {setCleanCat} = CategorieSlice.actions