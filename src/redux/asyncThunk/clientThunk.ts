import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APP_URL } from "../../../process.env";

const controller = "client"

export const createClient = createAsyncThunk(
    "createClient/create",
    async (data:FormData) => {
        try{
            const token = localStorage.getItem("_auth")
            if(!token) throw new Error("token not found")

            const res = await axios.post(`${APP_URL}/${controller}`, data, {
                headers: { Authorization: `Bearer ${token}`}
            })
            return res.data
        }
        catch(error:any){
            throw new Error(error.response.data.message)
        }
    }
)

export const findAllClient = createAsyncThunk(
    "findAllColient/findAll",
    async () => {
        try{
            const token = localStorage.getItem("_auth")
            if(!token) throw new Error("token not found")

            const res = await axios.get(`${APP_URL}/${controller}`, {
                headers: { Authorization: `Bearer ${token}`}
            })
            return res.data
        }
        catch(error:any){
            throw new Error(error.response.data.message)
        }
    }
)

export const findOneClient = createAsyncThunk(
    "findOneColient/findOne",
    async (id: number) => {
        try{
            const token = localStorage.getItem("_auth")
            if(!token) throw new Error("token not found")

            const res = await axios.get(`${APP_URL}/${controller}/${id}`, {
                headers: { Authorization: `Bearer ${token}`}
            })
            return res.data
        }
        catch(error:any){
            throw new Error(error.response.data.message)
        }
    }
)

export const updateClient = createAsyncThunk(
    "updateColient/update",
    async ({id, data}: {id:number, data: FormData}) => {
        try{
            const token = localStorage.getItem("_auth")
            if(!token) throw new Error("token not found")

            const res = await axios.patch(`${APP_URL}/${controller}/${id}`, data, {
                headers: { Authorization: `Bearer ${token}`}
            })
            return res.data
        }
        catch(error:any){
            throw new Error(error.response.data.message)
        }
    }
)

export const deleteClient = createAsyncThunk(
    "deleteClient/delete",
    async (id: number) => {
        try{
            const token = localStorage.getItem("_auth")
            if(!token) throw new Error("token not found")

            const res = await axios.delete(`${APP_URL}/${controller}/${id}`,{
                headers: { Authorization: `Bearer ${token}`}
            })
            return res.data
        }
        catch(error:any){
            throw new Error(error.response.data.message)
        }
    }
)