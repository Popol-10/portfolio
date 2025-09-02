import { createSlice } from "@reduxjs/toolkit";
import { createPerson, deletePerson, findAllPerson, findOnePerson, updatePerson } from "../asyncThunk/personThunk";

export const PersonSlice = createSlice({
    name: "Person/slice",
    initialState: {
        loading: false,
        allPerson: {
            status: "find" as string,
            data: [] as Person[]
        },
        addPerson: {
            active: false,
            create_ok: false
        },
        onePerson:{
            status: "find",
            data: {} as Person
        },
        removePerson:{
            delete_ok: false
        },
        majPerson: {
            update_ok: false
        },
        error:{
            status: false,
            value: "" as string | null | undefined
        }
    },
    reducers:{
        setCleanPerson(state){
            state.addPerson.create_ok = false
            state.majPerson.update_ok = false
            state.removePerson.delete_ok = false
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(createPerson.pending, (state) => {
                state.loading = true
            })
            .addCase(createPerson.fulfilled, (state, action) => {
                state.loading = false,
                state.addPerson.create_ok = true,
                state.allPerson.data.push(action.payload)
            })
            .addCase(createPerson.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findAllPerson.pending, (state) => {
                state.loading = true
            })
            .addCase(findAllPerson.fulfilled, (state, action) => {
                state.loading = false,
                state.allPerson.status = "found",
                state.allPerson.data = action.payload
            })
            .addCase(findAllPerson.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findOnePerson.pending, (state) => {
                state.loading = true
            })
            .addCase(findOnePerson.fulfilled, (state, action) => {
                state.loading = false,
                state.onePerson.status = "found",
                state.onePerson.data = action.payload
            })
            .addCase(findOnePerson.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(deletePerson.pending, (state) => {
                state.loading = true
            })
            .addCase(deletePerson.fulfilled, (state, action) => {
                state.loading = false,
                state.removePerson.delete_ok = true
                state.allPerson.data = state.allPerson.data.filter(item => item.id != action.payload.id)
            })
            .addCase(deletePerson.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(updatePerson.pending, (state) => {
                state.loading = true
            })
            .addCase(updatePerson.fulfilled, (state, action) => {
                state.loading = false,
                state.majPerson.update_ok = true
                state.allPerson.data = state.allPerson.data.map(item => 
                    item.id == action.payload ? action.payload : item
                )
            })
            .addCase(updatePerson.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
    }
})

export const { setCleanPerson } = PersonSlice.actions