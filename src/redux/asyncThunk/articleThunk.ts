import axios from "axios"
import { APP_URL } from "../../../process.env"
import { createAsyncThunk } from "@reduxjs/toolkit"

const page = "articles"
const token = localStorage.getItem("_auth")

export const createArticle = createAsyncThunk(
    "createArticle/thunk",
    async (data:FormData) => {
        try{
            if(!token){
                throw new Error("token not found")
            }

            const res = await axios.post(`${APP_URL}/${page}`, data, {
                headers: {
                    Authorization: `Bearer, ${token}`
                }
            })
            return res.data
        }
        catch(error: any){
            throw new Error(error.response.data.message)
        }
    }
)

export const findAllArticle = createAsyncThunk(
    "findAllArticle/thunk",
    async () => {
        try{
            if(!token){
                throw new Error("token not found")
            }
            const res = await axios.get(`${APP_URL}/${page}`, {
                headers: {
                    Authorization: `Bearer, ${token}`
                }
            })
            return res.data
        }
        catch(error: any){
            throw new Error(error.response.data.message)
        }
    }
)

export const findOneArticle = createAsyncThunk(
    "findOneArticle/thunk",
    async (id:number) => {
        try{
            if(!token){
                throw new Error("token not found")
            }
            const res = await axios.get(`${APP_URL}/${page}/${id}`, {
                headers: {
                    Authorization: `Bearer, ${token}`
                }
            })
            return res.data
        }
        catch(error: any){
            throw new Error(error.response.data.message)
        }
    }
)

export const deleteArticle = createAsyncThunk(
    "deleteArticle/thunk",
    async (id:number) => {
        try{
            if(!token){
                throw new Error("token not found")
            }
            const res = await axios.delete(`${APP_URL}/${page}/${id}`, {
                headers: {
                    Authorization: `Bearer, ${token}`
                }
            })
            return res.data
        }
        catch(error: any){
            throw new Error(error.response.data.message)
        }
    }
)

export const updateArticle = createAsyncThunk(
    "updateArticle/thunk",
    async ({id, data}: {id: number, data: FormData}) => {
        try{
            if(!token){
                throw new Error("token not found")
            }
            const res = await axios.patch(`${APP_URL}/${page}/${id}`, data, {
                headers: {
                    Authorization: `Bearer, ${token}`
                }
            })
            return res.data
        }
        catch(error: any){
            throw new Error(error.response.data.message)
        }
    }
)