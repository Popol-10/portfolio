import { createSlice } from "@reduxjs/toolkit";
import { createClient, deleteClient, findAllClient, findOneClient, updateClient } from "../asyncThunk/clientThunk";

export const ClientSlice = createSlice({
    name: "client/slice",
    initialState: {
        loading: false,
        allClient: {
            status: "find" as string,
            data: [] as Client[]
        },
        addClient: {
            active: false,
            create_ok: false
        },
        oneClient:{
            status: "find",
            data: {} as Client
        },
        removeClient:{
            delete_ok: false
        },
        majClient: {
            update_ok: false
        },
        error:{
            status: false,
            value: "" as string | null | undefined
        }
    },
    reducers:{
        setCleanClient(state){
            state.addClient.create_ok = false,
            state.majClient.update_ok = false,
            state.removeClient.delete_ok = false
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(createClient.pending, (state) => {
                state.loading = true
            })
            .addCase(createClient.fulfilled, (state, action) => {
                state.loading = false,
                state.addClient.create_ok = true,
                state.allClient.data.push(action.payload)
            })
            .addCase(createClient.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findAllClient.pending, (state) => {
                state.loading = true
            })
            .addCase(findAllClient.fulfilled, (state, action) => {
                state.loading = false,
                state.allClient.status = "found",
                state.allClient.data = action.payload
            })
            .addCase(findAllClient.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findOneClient.pending, (state) => {
                state.loading = true
            })
            .addCase(findOneClient.fulfilled, (state, action) => {
                state.loading = false,
                state.oneClient.status = "found",
                state.oneClient.data = action.payload
            })
            .addCase(findOneClient.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(deleteClient.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteClient.fulfilled, (state, action) => {
                state.loading = false,
                state.removeClient.delete_ok = true
                state.allClient.data = state.allClient.data.filter(item => item.id != action.payload.id)
            })
            .addCase(deleteClient.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(updateClient.pending, (state) => {
                state.loading = true
            })
            .addCase(updateClient.fulfilled, (state, action) => {
                state.loading = false,
                state.majClient.update_ok = true
                state.allClient.data = state.allClient.data.map(item => 
                    item.id == action.payload ? action.payload : item
                )
            })
            .addCase(updateClient.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
    }
})

export const {setCleanClient} = ClientSlice.actions