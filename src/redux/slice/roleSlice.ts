import { createSlice } from "@reduxjs/toolkit";
import { createRole, deleteRole, findAllRole, findOneRole, updateRole } from "../asyncThunk/rolesThunk";

// interface Roles {
//     id: number
//     roles: string
//     user: userData
//     personne: Person
// }

export const RoleSlice = createSlice({
    name: "role/slice",
    initialState: {
        loading: false,
        allRole: {
            status: "find" as string,
            data: [] as Roles[]
        },
        addRole: {
            active: false,
            create_ok: false
        },
        oneRole:{
            status: "find",
            data: {} as Roles
        },
        removeRole:{
            delete_ok: false
        },
        majRole: {
            update_ok: false
        },
        error:{
            status: false,
            value: "" as string | null | undefined
        }
    },
    reducers:{
        setCleanRoles(state){
            state.addRole.create_ok=false
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(createRole.pending, (state) => {
                state.loading = true
            })
            .addCase(createRole.fulfilled, (state, action) => {
                state.loading = false,
                state.addRole.create_ok = true,
                state.allRole.data.push(action.payload)
            })
            .addCase(createRole.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findAllRole.pending, (state) => {
                state.loading = true
            })
            .addCase(findAllRole.fulfilled, (state, action) => {
                state.loading = false,
                state.allRole.status = "found",
                state.allRole.data = action.payload
            })
            .addCase(findAllRole.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(findOneRole.pending, (state) => {
                state.loading = true
            })
            .addCase(findOneRole.fulfilled, (state, action) => {
                state.loading = false,
                state.oneRole.status = "found",
                state.oneRole.data = action.payload
            })
            .addCase(findOneRole.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(deleteRole.pending, (state) => {
                state.loading = true
            })
            .addCase(deleteRole.fulfilled, (state, action) => {
                state.loading = false,
                state.removeRole.delete_ok = true
                state.allRole.data = state.allRole.data.filter(item => item.id != action.payload.id)
            })
            .addCase(deleteRole.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(updateRole.pending, (state) => {
                state.loading = true
            })
            .addCase(updateRole.fulfilled, (state, action) => {
                state.loading = false,
                state.majRole.update_ok = true
                state.allRole.data = state.allRole.data.map(item => 
                    item.id == action.payload ? action.payload : item
                )
            })
            .addCase(updateRole.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
    }
})
export const {setCleanRoles} = RoleSlice.actions