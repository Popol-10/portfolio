import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APP_URL } from "../../../process.env";

const controller = "personne"

export const createPerson = createAsyncThunk(
    "createPerson/create",
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

export const findAllPerson = createAsyncThunk(
    "findAllPerson/findAll",
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

export const findOnePerson = createAsyncThunk(
    "findOnePerson/findOne",
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

export const updatePerson = createAsyncThunk(
    "updatePerson/update",
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

export const deletePerson = createAsyncThunk(
    "deletePerson/delete",
    async (id: number) => {
        try{
            const token = localStorage.getItem("_auth")
            if(!token) throw new Error("token not found")

            const res = await axios.patch(`${APP_URL}/${controller}/${id}`,{
                headers: { Authorization: `Bearer ${token}`}
            })
            return res.data
        }
        catch(error:any){
            throw new Error(error.response.data.message)
        }
    }
)