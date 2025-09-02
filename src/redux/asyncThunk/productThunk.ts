import { createAsyncThunk } from "@reduxjs/toolkit";
import  axios  from "axios";
import { APP_URL } from "../../../process.env";

export const findAllProd = createAsyncThunk(
    "findAllProd/all",
    async () => {
        try{
            const res = await axios.get(`${APP_URL}/product`)
            return res.data
        }
        catch(error: any){
            throw new (error.response.data.message)
        }
    }
)
export const findOneProd = createAsyncThunk(
    "findOneProd/one",
    async (id) => {
        try{
            const res = await axios.get(`${APP_URL}/product/${id}`)
            return res.data
        }
        catch(error: any){
            throw new (error.response.data.message)
        }
    }
)

export const createProd = createAsyncThunk(
    "createProd/create",
    async (data) => {
        try{
            const res = await axios.post(`${APP_URL}/product`, data)
            return res.data
        }
        catch(error: any){
            throw new (error.response.data.message)
        }
    }
)

export const deleteProd = createAsyncThunk(
    "deleteProd/delete",
    
    async (id) => {
        try{
            const res = await axios.delete(`${APP_URL}/product/${id}`)
            return res.data
        }
        catch(error: any){
            throw new (error.response.data.message)
        }
    }
)
export const updateProd = createAsyncThunk(
    "updateProd/update",
    
    async (id, data) => {
        try{
            const res = await axios.put(`${APP_URL}/product/${id}`, data)
            return res.data
        }
        catch(error: any){
            throw new (error.response.data.message)
        }
    }
)

//npm install dotenv --save

//npm i react-auth-kit@3.1.2
//npm i jwt-decode
//npm i react-jwt

//npm install -D sass