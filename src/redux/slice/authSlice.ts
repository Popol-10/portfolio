// import { DecodedRegister } from './../../interface/interface';
import { createSlice } from "@reduxjs/toolkit";
import { ApiLogin, ApiRegister, findOneUser, updateUser } from "../asyncThunk/authThunk";
import { jwtDecode } from 'jwt-decode';

export const AuthSlice = createSlice ({
    name: "auth/slicde",
    initialState: {
        loading: false,
        login:{
            status: "find",
            data: {} as login
        },
        singUp:{
            status: "find",
            data: {} as register
        },
        allUser:{
            status: "find",
            data: [] as userData[]
        },
        oneUser: {
            status: "find",
            data: {} as userData
        },
        majUser:{
            update_ok: false
        },
        token:{
            status: false,
            value: "" as string
        },
        // role:{
        //     status:"find",
        //     data:{} as Roles
        // },
        error:{
            status: false,
            value: "" as string | undefined | null
        }

    },
    reducers:{
        setCleanAuth(state){
            state.token.status = false
            state.error.status = false
            state.majUser.update_ok = false
        },
        setDeconnexion(state){
            state.token.value = ""
            localStorage.removeItem("_auth")
        }
    },
    extraReducers(builder) {
        builder
            .addCase(ApiLogin.pending, (state) => {
                state.loading = true
            })
            .addCase(ApiLogin.fulfilled, (state, action) => {
                state.loading = false
                state.login.status = "found",
                state.login.data = jwtDecode(action.payload.token),
                state.token.status = true, //npm i jwt-decode
                state.token.value = action.payload.token
            })
            .addCase(ApiLogin.rejected, (state, action) => {
                state.loading = false
                state.error = {status:true, value: action.error.message}
            })
        builder
            .addCase(findOneUser.pending, (state) => {
                state.loading = true
            })
            .addCase(findOneUser.fulfilled, (state, action) => {
                state.loading = false,
                state.oneUser.status = "found",
                state.oneUser.data = action.payload
            })
            .addCase(findOneUser.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(ApiRegister.pending, (state) => {
                state.loading = true
            })
            .addCase(ApiRegister.fulfilled, (state, action) => {
                state.loading = false,
                state.singUp.status = "found",
                state.singUp.data = jwtDecode(action.payload.token)
                state.token = {status: true, value: action.payload.token}
            })
            .addCase(ApiRegister.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        builder
            .addCase(updateUser.pending, (state) => {
                state.loading = true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false,
                state.majUser.update_ok = true
                state.allUser.data = state.allUser.data.map(item => 
                    item.id == action.payload ? action.payload : item
                )
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.loading = false,
                state.error = {status: true, value: action.error.message}
            })
        },
})

export const {setCleanAuth, setDeconnexion} = AuthSlice.actions