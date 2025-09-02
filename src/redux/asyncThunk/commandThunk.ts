import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APP_URL } from "../../../process.env";

const controller = "commande"

export const createCommande = createAsyncThunk(
    "createCommand/create",
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

export const findAllCommande = createAsyncThunk(
    "findAllCommand/findAll",
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

export const findOneCommande = createAsyncThunk(
    "findOneCommand/findOne",
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

export const updateCommande = createAsyncThunk(
    "updateCommand/update",
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

export const deleteCommande = createAsyncThunk(
    "deleteCommad/delete",
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